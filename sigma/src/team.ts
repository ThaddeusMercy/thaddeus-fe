import Anthropic from "@anthropic-ai/sdk";
import { bus } from "./bus.js";
import type { BotConfig, SigmaConfig } from "./config.js";
import {
  approvals,
  customBots,
  memories,
  messages,
  rooms,
  skills,
  usage,
  type Approval,
  type Message,
  type Room,
} from "./db.js";
import { client, recordUsage, supportsFallbacks } from "./llm.js";
import { Registry } from "./registry.js";
import type { Scheduler } from "./routines.js";
import { runTool, toolsFor } from "./tools.js";

export interface TurnContext {
  team: Team;
  bot: BotConfig;
  room: Room;
  depth: number;
}

export interface Human {
  id: string;
  name: string;
}

/** Lets a transport (Discord) create the real place a new group lives, e.g. a thread. */
export type GroupFactory = (name: string) => Promise<string>;

const NO_REPLY = "NO_REPLY";
const MAX_TOOL_ROUNDS = 12;

class BudgetError extends Error {}

export class Team {
  readonly config: SigmaConfig;
  readonly registry: Registry;
  scheduler!: Scheduler;
  groupFactory: GroupFactory = async () => `web:${crypto.randomUUID().slice(0, 8)}`;
  private queues = new Map<string, Promise<unknown>>();
  private budgetNoticeAt = 0;

  constructor(config: SigmaConfig) {
    this.config = config;
    this.registry = new Registry(config);
  }

  // ---------- lookup ----------

  /** Bots from sigma.config.yaml plus bots created at runtime. Config wins on id clashes. */
  get bots(): BotConfig[] {
    const fixed = new Set(this.config.bots.map((b) => b.id));
    return [...this.config.bots, ...customBots.list().filter((b) => !fixed.has(b.id))];
  }

  isCustomBot(id: string) {
    return !this.config.bots.some((b) => b.id === id) && customBots.list().some((b) => b.id === id);
  }

  /** create_bot / update_bot / delete_bot, from chat (after approval when needed) or the dashboard. */
  applyBotChange(kind: string, input: Record<string, unknown>, by: string): string {
    const id = String(input.id ?? "")
      .toLowerCase()
      .replace(/[^a-z0-9_-]/g, "");
    if (!id) return "A bot needs an id.";
    const tools = Array.isArray(input.tools) ? (input.tools as string[]) : [];
    const grant: BotConfig["tools"] = tools.includes("all") ? "all" : tools;

    if (kind === "create_bot") {
      if (this.findBot(id) || this.findBot(String(input.name ?? ""))) return `A teammate called ${id} already exists.`;
      const bot: BotConfig = {
        id,
        name: String(input.name || id),
        role: String(input.role || "teammate"),
        instructions: String(input.instructions || "Help the team."),
        ...(input.avatar ? { avatar: String(input.avatar) } : {}),
        ...(input.model ? { model: String(input.model) } : {}),
        ...(input.effort ? { effort: input.effort as BotConfig["effort"] } : {}),
        tools: grant,
      };
      customBots.save(bot, by);
      bus.emit("bots", this.bots);
      return `Hired ${bot.name} (${bot.id}). Tag them with @${bot.name}.`;
    }
    if (!this.isCustomBot(id)) return `${id} is defined in sigma.config.yaml (or doesn't exist); edit it there.`;
    if (kind === "delete_bot") {
      customBots.remove(id);
      bus.emit("bots", this.bots);
      return `Removed ${id}.`;
    }
    const current = this.findBot(id)!;
    const next: BotConfig = {
      ...current,
      ...(input.name ? { name: String(input.name) } : {}),
      ...(input.role ? { role: String(input.role) } : {}),
      ...(input.instructions ? { instructions: String(input.instructions) } : {}),
      ...(input.avatar !== undefined ? { avatar: String(input.avatar) || undefined } : {}),
      ...(input.model !== undefined ? { model: String(input.model) || undefined } : {}),
      ...(input.effort ? { effort: input.effort as BotConfig["effort"] } : {}),
      ...(Array.isArray(input.tools) ? { tools: grant } : {}),
    };
    customBots.save(next, by);
    bus.emit("bots", this.bots);
    return `Updated ${next.name}.`;
  }

  listRooms() {
    return rooms.list();
  }

  get chief() {
    return this.bots.find((b) => b.chief)!;
  }

  findBot(nameOrId: string) {
    const key = nameOrId.trim().replace(/^@/, "").toLowerCase();
    return this.bots.find((b) => b.id.toLowerCase() === key || b.name.toLowerCase() === key);
  }

  roster() {
    return this.bots.map((b) => `${b.name} (${b.id}, ${b.role})`).join("; ");
  }

  getRoom(id: string) {
    return rooms.get(id);
  }

  /** Makes sure a room exists. Discord channels get their bots from config, falling back to the chief. */
  ensureRoom(id: string, defaults: { name: string; kind?: Room["kind"]; bots?: string[]; parentId?: string }) {
    const existing = rooms.get(id);
    if (existing) return existing;
    const discordId = id.startsWith("discord:") ? id.slice("discord:".length) : undefined;
    const fromConfig =
      (discordId && this.config.discord.rooms[discordId]) ||
      (defaults.parentId && this.config.discord.rooms[defaults.parentId]) ||
      undefined;
    const room = rooms.upsert({
      id,
      name: fromConfig?.name ?? defaults.name,
      kind: defaults.kind ?? "channel",
      bots: fromConfig?.bots ?? defaults.bots ?? [this.chief.id],
      owners: fromConfig?.owners ?? {},
      created_by: null,
    });
    bus.emit("room", room);
    return room;
  }

  async createGroup(name: string, botIds: string[], creator: BotConfig | Human, kickoff: string, depth = 0) {
    const id = await this.groupFactory(name);
    const room = rooms.upsert({
      id,
      name,
      kind: "group",
      bots: botIds,
      owners: {},
      created_by: "role" in creator ? creator.id : `human:${creator.id}`,
    });
    bus.emit("room", room);
    if (kickoff) {
      if ("role" in creator) {
        const message = this.postAsBot(id, creator, kickoff);
        this.triggerFromBot(room, creator, message, depth);
      } else {
        await this.handleHuman(id, creator, kickoff, "web");
      }
    }
    return room;
  }

  // ---------- posting ----------

  post(roomId: string, m: Omit<Message, "id" | "created_at" | "room_id">) {
    const saved = messages.add({ ...m, room_id: roomId });
    bus.emit("message", saved);
    return saved;
  }

  postAsBot(roomId: string, bot: BotConfig, content: string) {
    return this.post(roomId, { author_kind: "bot", author_id: bot.id, author_name: bot.name, content, origin: "sigma" });
  }

  postSystem(roomId: string, content: string) {
    return this.post(roomId, { author_kind: "system", author_id: "sigma", author_name: "Sigma", content, origin: "sigma" });
  }

  // ---------- routing ----------

  /** Bots tagged with @Name or @id. @everyone means every bot in the room. */
  mentions(text: string, room: Room): BotConfig[] {
    if (/(^|\s)@(everyone|all|team)\b/i.test(text)) return room.bots.map((id) => this.findBot(id)!).filter(Boolean);
    const found = new Map<string, BotConfig>();
    for (const bot of this.bots) {
      const names = [bot.name, bot.id].map((n) => n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
      if (new RegExp(`(^|[^\\w])@(${names.join("|")})\\b`, "i").test(text)) found.set(bot.id, bot);
    }
    return [...found.values()];
  }

  /** Tagging a teammate who isn't in a group adds them, up to six bots. */
  private addToRoom(room: Room, bots: BotConfig[]) {
    if (room.kind === "dm") return room;
    const missing = bots.filter((b) => !room.bots.includes(b.id));
    if (!missing.length) return room;
    const next = [...room.bots, ...missing.map((b) => b.id)].slice(0, room.kind === "group" ? 6 : 50);
    const updated = rooms.upsert({ ...room, bots: next });
    bus.emit("room", updated);
    return updated;
  }

  async handleHuman(roomId: string, human: Human, content: string, origin: Message["origin"]) {
    let room = rooms.get(roomId);
    if (!room) throw new Error(`Unknown room ${roomId}`);
    const message = this.post(roomId, {
      author_kind: "human",
      author_id: human.id,
      author_name: human.name,
      content,
      origin,
    });

    // A tagged teammate always answers. In groups and channels they also join; a DM stays a DM.
    const tagged = this.mentions(content, room);
    room = this.addToRoom(room, tagged);
    let responders = tagged;
    if (!responders.length) {
      const lead = room.bots.includes(this.chief.id) ? this.chief.id : room.bots[0];
      responders = lead ? [this.findBot(lead)!] : [];
    }
    for (const bot of responders) {
      this.queueTurn(room.id, bot, `${human.name} said: "${clip(message.content)}"`, 0);
    }
  }

  private triggerFromBot(room: Room, from: BotConfig, message: Message, depth: number) {
    if (depth >= this.config.max_hops) return;
    const tagged = this.mentions(message.content, room).filter((b) => b.id !== from.id);
    this.addToRoom(room, tagged);
    for (const bot of tagged) {
      this.queueTurn(room.id, bot, `${from.name} tagged you: "${clip(message.content)}"`, depth + 1);
    }
  }

  /** One bot speaks at a time per room, in order. */
  queueTurn(roomId: string, bot: BotConfig, reason: string, depth: number) {
    const previous = this.queues.get(roomId) ?? Promise.resolve();
    const next = previous
      .catch(() => {})
      .then(() => this.takeTurn(roomId, bot, reason, depth))
      .catch((err) => {
        console.error(`[sigma] ${bot.name} failed in ${roomId}:`, err);
        if (err instanceof BudgetError) {
          if (Date.now() - this.budgetNoticeAt > 3_600_000) {
            this.budgetNoticeAt = Date.now();
            this.postSystem(roomId, err.message);
          }
        } else {
          this.postSystem(roomId, `${bot.name} hit an error: ${err instanceof Error ? err.message : String(err)}`);
        }
      });
    this.queues.set(roomId, next);
    return next;
  }

  private async takeTurn(roomId: string, bot: BotConfig, reason: string, depth: number) {
    const room = rooms.get(roomId)!;
    bus.emit("typing", { room_id: roomId, bot_id: bot.id, active: true });
    try {
      const history = buildHistory(room, bot, this);
      const note =
        `[Sigma] Your turn in "${room.name}" (room id ${room.id}). ${reason}\n` +
        `Reply as ${bot.name}. Tag a teammate with @Name to hand work to them. ` +
        `If you have nothing useful to add, reply with exactly ${NO_REPLY}.`;
      const reply = await this.runAgent(bot, room, history, note, depth);
      if (!reply || reply.trim() === NO_REPLY) return;
      const message = this.postAsBot(roomId, bot, reply.trim());
      this.triggerFromBot(rooms.get(roomId)!, bot, message, depth);
    } finally {
      bus.emit("typing", { room_id: roomId, bot_id: bot.id, active: false });
    }
  }

  /** A private question from one bot to another. Nothing is posted in any room. */
  async consult(from: BotConfig, to: BotConfig, question: string, depth: number) {
    if (depth >= this.config.max_hops) return `${to.name} can't be reached right now (handoff limit reached). Decide yourself.`;
    const room: Room = {
      id: `private:${from.id}:${to.id}`,
      name: `private question from ${from.name}`,
      kind: "dm",
      bots: [to.id],
      owners: {},
      created_by: from.id,
      created_at: "",
    };
    const note = `[Sigma] ${from.name} (${from.role}) is asking you privately:\n\n${question}\n\nAnswer them directly.`;
    const answer = await this.runAgent(to, room, [], note, depth);
    return answer?.trim() ? `${to.name}: ${answer.trim()}` : `${to.name} had nothing to add.`;
  }

  /** Routines run as a turn in their room with the routine prompt as the reason. */
  async runRoutine(botId: string, roomId: string, name: string, prompt: string, payload?: string) {
    const bot = this.findBot(botId);
    if (!bot) throw new Error(`Unknown bot ${botId}`);
    const room = this.ensureRoom(roomId, { name: roomId, bots: [bot.id] });
    const extra = payload ? `\n\nTrigger payload:\n${payload.slice(0, 20_000)}` : "";
    await this.queueTurn(room.id, bot, `Routine "${name}" fired. Instructions: ${prompt}${extra}`, 0);
  }

  // ---------- approvals and actions ----------

  requestApproval(bot: BotConfig, roomId: string, action: string, input: unknown) {
    const approval = approvals.create({ bot_id: bot.id, room_id: roomId, action, input });
    bus.emit("approval", approval);
    return approval;
  }

  async decideApproval(id: number, approve: boolean, by: string) {
    const approval = approvals.get(id);
    if (!approval) throw new Error(`No approval #${id}`);
    if (!approvals.decide(id, approve ? "approved" : "rejected", by)) return approvals.get(id)!;
    const bot = this.findBot(approval.bot_id);
    const label = `#${id} (${approval.action}) from ${bot?.name ?? approval.bot_id}`;

    if (!approve) {
      this.postSystem(approval.room_id, `${by} rejected ${label}.`);
    } else {
      let result: string;
      try {
        result = await this.executeApproved(approval);
      } catch (err) {
        result = `failed: ${err instanceof Error ? err.message : String(err)}`;
      }
      approvals.setResult(id, result);
      this.postSystem(approval.room_id, `${by} approved ${label}. Result: ${clip(result, 500)}`);
    }
    const decided = approvals.get(id)!;
    bus.emit("approval", decided);
    return decided;
  }

  private async executeApproved(approval: Approval) {
    const input = JSON.parse(approval.input);
    const bot = this.findBot(approval.bot_id);
    if (!bot) return `${approval.bot_id} no longer exists.`;
    switch (approval.action) {
      case "post_to_room":
        this.ensureRoom(input.room, { name: input.room });
        this.postAsBot(input.room, bot, input.message);
        return `posted in ${input.room}`;
      case "create_bot":
      case "update_bot":
        return this.applyBotChange(approval.action, input, `${bot.name} (approved)`);
    }
    const tool = this.registry.tools.get(approval.action);
    if (!tool) return `Tool ${approval.action} is no longer available.`;
    const room = rooms.get(approval.room_id) ?? this.ensureRoom(approval.room_id, { name: approval.room_id });
    return tool.run(input, { team: this, bot, room, depth: 0 });
  }

  // ---------- the agent loop ----------

  private systemFor(bot: BotConfig, room: Room): Anthropic.Beta.BetaTextBlockParam[] {
    const stable =
      `You are ${bot.name}, ${bot.role}, on ${this.config.team_name}: a team of AI teammates who work together ` +
      `for the humans in charge. You talk in rooms (Discord channels, threads and web chats) with humans and other bots.\n\n` +
      `${bot.instructions.trim()}\n\n` +
      `How the team works:\n` +
      `- Messages arrive as "[Name]: text". Humans are the bosses; teammates are other bots.\n` +
      `- To hand work to a teammate in the room, tag them with @Name in your reply and say exactly what you need.\n` +
      `- Use ask_bot for a quick private question, and create_group to spin up a focused group with a clear owner per stage.\n` +
      `- Anything that publishes, sends, deletes or spends goes through an approval. Never claim something was posted until the result comes back.\n` +
      `- Save durable facts with remember and reusable procedures with save_skill.\n` +
      `- Keep replies short and chat-shaped. Under 1,500 characters unless asked for a long draft; put long drafts in the workspace with write_file.\n` +
      (bot.chief
        ? `- You are the chief of staff. Untagged requests land with you: answer simple ones yourself, route the rest to the right teammate, and keep the humans updated with one clear answer.\n`
        : "");

    const mem = memories.list(bot.id);
    const sk = skills.list(bot.id);
    const ownerLines = Object.entries(room.owners).map(([stage, id]) => `${stage}: ${this.findBot(id)?.name ?? id}`);
    const dynamic =
      `Today is ${new Date().toLocaleString("en-GB", { timeZone: this.config.timezone, dateStyle: "full", timeStyle: "short" })} (${this.config.timezone}).\n` +
      `Team: ${this.roster()}.\n` +
      `This room: "${room.name}" (${room.kind}, id ${room.id}) with ${room.bots.map((id) => this.findBot(id)?.name ?? id).join(", ")}.\n` +
      (ownerLines.length ? `Stage owners: ${ownerLines.join("; ")}.\n` : "") +
      `\nYour memories:\n${mem.length ? mem.map((m) => `#${m.id} ${m.content}`).join("\n") : "(none yet)"}\n` +
      `\nYour skills:\n${sk.length ? sk.map((s) => `## ${s.name}\n${s.body}`).join("\n\n") : "(none yet)"}`;

    return [
      { type: "text", text: stable, cache_control: { type: "ephemeral" } },
      { type: "text", text: dynamic },
    ];
  }

  private async runAgent(
    bot: BotConfig,
    room: Room,
    history: Anthropic.Beta.BetaMessageParam[],
    note: string,
    depth: number,
  ): Promise<string> {
    const model = bot.model ?? this.config.default_model;
    const ctx: TurnContext = { team: this, bot, room, depth };
    const msgs: Anthropic.Beta.BetaMessageParam[] = [...history];
    appendUser(msgs, { type: "text", text: note });

    const betas: Anthropic.Beta.AnthropicBeta[] = [];
    const mcpServers: Anthropic.Beta.BetaRequestMCPServerURLDefinition[] = this.registry.remoteMcpFor(bot);
    if (mcpServers.length) betas.push("mcp-client-2025-11-20");
    const fallbacks = supportsFallbacks(model);
    if (fallbacks) betas.push("server-side-fallback-2026-07-01");

    const tools = toolsFor(bot, { team: this });
    let lastText = "";
    let movingBreakpoint: { cache_control?: unknown } | undefined;

    for (let round = 0; round < MAX_TOOL_ROUNDS; round++) {
      const spent = usage.spentSince(7);
      if (spent >= this.config.weekly_budget_usd) {
        throw new BudgetError(
          `Sigma paused: $${spent.toFixed(2)} spent in the last 7 days, over the $${this.config.weekly_budget_usd} weekly budget. Raise weekly_budget_usd to resume.`,
        );
      }

      const response = await client.beta.messages.create({
        model,
        max_tokens: 16000,
        system: this.systemFor(bot, room),
        messages: msgs,
        tools,
        output_config: { effort: bot.effort ?? this.config.default_effort },
        ...(mcpServers.length ? { mcp_servers: mcpServers } : {}),
        ...(fallbacks ? { fallbacks: "default" as const } : {}),
        ...(betas.length ? { betas } : {}),
      });
      recordUsage(bot.id, model, response.usage);

      const text = response.content
        .filter((b): b is Anthropic.Beta.BetaTextBlock => b.type === "text")
        .map((b) => b.text)
        .join("\n")
        .trim();
      if (text) lastText = text;

      if (response.stop_reason === "refusal") {
        return lastText || `${bot.name} declined this one.`;
      }
      if (response.stop_reason === "pause_turn") {
        msgs.push({ role: "assistant", content: response.content });
        continue;
      }
      if (response.stop_reason !== "tool_use") return lastText;

      msgs.push({ role: "assistant", content: response.content });
      const calls = response.content.filter((b): b is Anthropic.Beta.BetaToolUseBlock => b.type === "tool_use");
      const results: Anthropic.Beta.BetaToolResultBlockParam[] = await Promise.all(
        calls.map(async (call) => {
          try {
            const out = await runTool(call.name, call.input as Record<string, unknown>, ctx);
            return { type: "tool_result" as const, tool_use_id: call.id, content: out };
          } catch (err) {
            return {
              type: "tool_result" as const,
              tool_use_id: call.id,
              content: `Error: ${err instanceof Error ? err.message : String(err)}`,
              is_error: true,
            };
          }
        }),
      );
      // Cache the growing tool loop: one moving breakpoint on the newest tool result.
      if (movingBreakpoint) delete movingBreakpoint.cache_control;
      const last = results[results.length - 1];
      if (last) {
        last.cache_control = { type: "ephemeral" };
        movingBreakpoint = last;
      }
      msgs.push({ role: "user", content: results });
    }
    return lastText || `${bot.name} ran out of steps on this one.`;
  }
}

/**
 * Room history from the bot's point of view: its own messages are assistant turns, everyone else's are user
 * turns tagged with their name. The window starts on a multiple of 30 so the prefix stays stable and cached.
 */
function buildHistory(room: Room, bot: BotConfig, team: Team): Anthropic.Beta.BetaMessageParam[] {
  const count = messages.count(room.id);
  const offset = Math.max(0, Math.floor((count - 31) / 30) * 30);
  const rows = messages.window(room.id, offset, 60);
  const out: Anthropic.Beta.BetaMessageParam[] = [];
  for (const m of rows) {
    if (m.author_kind === "bot" && m.author_id === bot.id) {
      const lastMsg = out[out.length - 1];
      if (!lastMsg) out.push({ role: "user", content: [{ type: "text", text: "[Sigma] (earlier messages trimmed)" }] });
      if (lastMsg?.role === "assistant") {
        (lastMsg.content as Anthropic.Beta.BetaTextBlockParam[]).push({ type: "text", text: m.content });
      } else {
        out.push({ role: "assistant", content: [{ type: "text", text: m.content }] });
      }
    } else {
      const who =
        m.author_kind === "system"
          ? "Sigma system"
          : m.author_kind === "bot"
            ? `${m.author_name} (${team.findBot(m.author_id)?.role ?? "teammate"})`
            : `${m.author_name} (human)`;
      appendUser(out, { type: "text", text: `[${who}]: ${m.content}` });
    }
  }
  const tail = out[out.length - 1];
  if (tail) {
    const blocks = tail.content as Anthropic.Beta.BetaTextBlockParam[];
    blocks[blocks.length - 1].cache_control = { type: "ephemeral" };
  }
  return out;
}

function appendUser(msgs: Anthropic.Beta.BetaMessageParam[], block: Anthropic.Beta.BetaTextBlockParam) {
  const last = msgs[msgs.length - 1];
  if (last?.role === "user" && Array.isArray(last.content)) {
    (last.content as Anthropic.Beta.BetaContentBlockParam[]).push(block);
  } else {
    msgs.push({ role: "user", content: [block] });
  }
}

function clip(text: string, max = 300) {
  return text.length > max ? text.slice(0, max) + "…" : text;
}
