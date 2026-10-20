import type Anthropic from "@anthropic-ai/sdk";
import type { BotConfig } from "./config.js";
import { memories, routines, skills } from "./db.js";
import { grants } from "./registry.js";
import type { TurnContext } from "./team.js";
import { listFiles, readFile, writeFile } from "./workspace.js";

type Tool = Anthropic.Beta.BetaTool;

function tool(name: string, description: string, properties: Record<string, object>, required = Object.keys(properties)): Tool {
  return {
    name,
    description,
    input_schema: { type: "object", properties, required, additionalProperties: false },
  };
}

const str = (description: string) => ({ type: "string", description });
const strList = (description: string) => ({ type: "array", items: { type: "string" }, description });

/** Every bot gets these. */
const CORE: Tool[] = [
  tool(
    "ask_bot",
    "Ask another teammate a question privately and get their answer back. Use it to pull in expertise without posting in the room.",
    { bot: str("Teammate id or name"), question: str("What you need from them, with enough context to answer alone") },
  ),
  tool(
    "create_group",
    "Start a group chat with 2 to 6 teammates for a piece of work. Your kickoff message is posted as you, so tag who owns each stage with @Name.",
    {
      name: str("Short group name, e.g. 'Cohort launch posts'"),
      bots: strList("Teammate ids or names to include (you are added automatically)"),
      kickoff: str("Kickoff message: the outcome, the stages, and an @owner per stage"),
    },
  ),
  tool("post_to_room", "Post a message into a different room or channel. Needs human approval unless you are already in that room.", {
    room: str("Room id, e.g. discord:123456 or web:ops"),
    message: str("The message to post"),
  }),
  tool("list_rooms", "List the rooms and channels Sigma knows about, with their ids and members.", {}),
  tool("remember", "Save a durable fact, preference or lesson to your long-term memory.", { fact: str("One self-contained fact") }),
  tool("forget", "Delete a memory that is wrong or stale.", { id: { type: "integer", description: "Memory id" } }),
  tool("save_skill", "Save or update a reusable procedure you can follow later (steps, rules, output format, what needs approval).", {
    name: str("Short kebab-case name"),
    steps: str("The full procedure in markdown"),
  }),
  tool("delete_skill", "Delete one of your saved skills.", { name: str("Skill name") }),
];

const GROUPED: { group: string; tools: Tool[] }[] = [
  {
    group: "routines",
    tools: [
      tool("schedule_routine", "Create a routine you will run on a schedule. Each run posts into the given room.", {
        name: str("Routine name"),
        cron: str("5-field cron, e.g. '0 9 * * 1-5' for weekdays at 9:00"),
        prompt: str("What to do on each run, written as an instruction to yourself"),
        room: str("Room id to post results into (use the current room id if unsure)"),
      }),
      tool("list_routines", "List your routines with their ids, schedules and last status.", {}),
      tool("delete_routine", "Delete one of your routines.", { id: str("Routine id") }),
    ],
  },
  {
    group: "workspace",
    tools: [
      tool("list_files", "List files in the shared team workspace.", { dir: str("Folder, or '.' for everything") }),
      tool("read_file", "Read a file from the shared team workspace.", { path: str("File path") }),
      tool("write_file", "Create or overwrite a file in the shared team workspace. Teammates can read it.", {
        path: str("File path, e.g. drafts/x-thread.md"),
        content: str("Full file contents"),
      }),
    ],
  },
  {
    group: "team_admin",
    tools: [
      tool(
        "create_bot",
        "Hire a new teammate. Granting powerful tools (all, shell, http, team_admin) needs human approval.",
        {
          id: str("Short lowercase id, e.g. 'tiktok'"),
          name: str("Display name, e.g. 'Tia'"),
          role: str("Job title, e.g. 'TikTok scripts'"),
          instructions: str("Who they are, what they own, how they work, what they must never do"),
          tools: strList(
            "Tool groups to grant: workspace, routines, web, http, shell, discord, team_admin, action:<name>, mcp:<name>, plugin:<name>, or 'all'",
          ),
        },
      ),
      tool("update_bot", "Change a teammate you or a human created at runtime. Send the full new values.", {
        id: str("Teammate id"),
        role: str("Job title"),
        instructions: str("Full new instructions"),
        tools: strList("Full new list of tool groups"),
      }),
      tool("delete_bot", "Remove a teammate that was created at runtime.", { id: str("Teammate id") }),
    ],
  },
];

const POWERFUL = new Set(["all", "shell", "http", "team_admin"]);

/** The tool list sent to Claude for this bot. */
export function toolsFor(bot: BotConfig, ctx: Pick<TurnContext, "team">): Anthropic.Beta.BetaToolUnion[] {
  const out: Anthropic.Beta.BetaToolUnion[] = [...CORE];
  for (const g of GROUPED) if (grants(bot, g.group)) out.push(...g.tools);
  if (grants(bot, "web")) {
    out.push({ type: "web_search_20260209", name: "web_search", max_uses: 5 });
    out.push({ type: "web_fetch_20260209", name: "web_fetch", max_uses: 5 });
  }
  for (const t of ctx.team.registry.for(bot)) out.push(t.def);
  for (const s of ctx.team.registry.remoteMcpFor(bot)) out.push({ type: "mcp_toolset", mcp_server_name: s.name });
  return out;
}

/** Runs one tool call and returns the text handed back to the model. */
export async function runTool(name: string, input: Record<string, unknown>, ctx: TurnContext): Promise<string> {
  const { team, bot, room } = ctx;
  const s = (key: string) => String(input[key] ?? "");
  const queued = (id: number) =>
    `Waiting on human approval #${id}. Tell the room it's queued; the result will be posted here when someone decides.`;

  switch (name) {
    case "ask_bot": {
      const target = team.findBot(s("bot"));
      if (!target) return `No teammate called "${s("bot")}". Team: ${team.roster()}`;
      if (target.id === bot.id) return "You can't ask yourself.";
      return await team.consult(bot, target, s("question"), ctx.depth + 1);
    }
    case "create_group": {
      const names = Array.isArray(input.bots) ? (input.bots as string[]) : [];
      const members = new Set([bot.id]);
      for (const n of names) {
        const b = team.findBot(n);
        if (!b) return `No teammate called "${n}". Team: ${team.roster()}`;
        members.add(b.id);
      }
      if (members.size < 2 || members.size > 6) return "A group needs 2 to 6 teammates including you.";
      const created = await team.createGroup(s("name"), [...members], bot, s("kickoff"), ctx.depth + 1);
      return `Created group "${created.name}" (${created.id}) and posted your kickoff.`;
    }
    case "post_to_room": {
      const target = team.getRoom(s("room"));
      if (!target) return `Unknown room ${s("room")}. Use list_rooms.`;
      if (target.bots.includes(bot.id)) {
        team.postAsBot(target.id, bot, s("message"));
        return "Posted.";
      }
      return queued(team.requestApproval(bot, room.id, "post_to_room", { room: target.id, message: s("message") }).id);
    }
    case "list_rooms":
      return (
        team
          .listRooms()
          .map((r) => `${r.id} · ${r.name} · ${r.kind} · ${r.bots.join(", ")}`)
          .join("\n") || "No rooms yet."
      );
    case "remember":
      return `Saved as memory #${memories.add(bot.id, s("fact"))}.`;
    case "forget":
      return memories.remove(bot.id, Number(input.id)) ? "Forgotten." : "No memory with that id.";
    case "save_skill":
      skills.save(bot.id, s("name"), s("steps"));
      return `Skill "${s("name")}" saved.`;
    case "delete_skill":
      return skills.remove(bot.id, s("name")) ? "Deleted." : "No skill with that name.";
  }

  // Grouped built-ins: check the grant again, the model can call anything it saw earlier.
  const grouped = GROUPED.find((g) => g.tools.some((t) => t.name === name));
  if (grouped) {
    if (!grants(bot, grouped.group)) return `You don't have the ${grouped.group} tools.`;
    switch (name) {
      case "schedule_routine": {
        const routine = team.scheduler.createFromChat(bot.id, s("name"), s("cron"), s("prompt"), s("room") || room.id);
        return `Routine ${routine.id} scheduled (${routine.cron}, ${routine.timezone}). Webhook trigger: POST /hooks/${routine.id}?secret=${routine.webhook_secret}`;
      }
      case "list_routines": {
        const mine = routines.list().filter((r) => r.bot_id === bot.id);
        if (!mine.length) return "You have no routines.";
        return mine
          .map((r) => `${r.id} · ${r.name} · ${r.cron ?? "webhook only"} · ${r.enabled ? "on" : "off"} · last: ${r.last_status ?? "never"}`)
          .join("\n");
      }
      case "delete_routine": {
        const r = routines.get(s("id"));
        if (!r || r.bot_id !== bot.id) return "No routine of yours with that id.";
        if (r.source === "config") return "That routine is defined in sigma.config.yaml; ask a human to remove it there.";
        team.scheduler.remove(r.id);
        return "Deleted.";
      }
      case "list_files": {
        const files = await listFiles(s("dir") || ".");
        return files.length ? files.join("\n") : "The workspace is empty.";
      }
      case "read_file":
        return await readFile(s("path"));
      case "write_file":
        return `Wrote ${await writeFile(s("path"), s("content"))}.`;
      case "create_bot":
      case "update_bot": {
        const grant = (input.tools as string[]) ?? [];
        if (grant.some((g) => POWERFUL.has(g))) {
          return queued(team.requestApproval(bot, room.id, name, input).id);
        }
        return team.applyBotChange(name, input, bot.name);
      }
      case "delete_bot":
        return team.applyBotChange(name, input, bot.name);
    }
  }

  const ext = team.registry.tools.get(name);
  if (ext) {
    if (!grants(bot, ext.group)) return `You don't have access to ${ext.group}.`;
    if (ext.requiresApproval(input)) return queued(team.requestApproval(bot, room.id, name, input).id);
    return await ext.run(input, ctx);
  }

  return `Unknown tool ${name}.`;
}
