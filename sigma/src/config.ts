import fs from "node:fs";
import path from "node:path";
import YAML from "yaml";

export type Effort = "low" | "medium" | "high" | "xhigh" | "max";

export interface BotConfig {
  id: string;
  name: string;
  role: string;
  avatar?: string;
  model?: string;
  effort?: Effort;
  /** Persona and standing instructions. */
  instructions: string;
  /** Chief of staff: receives anything nobody was tagged on. */
  chief?: boolean;
  /**
   * What the bot can use on top of the core team tools. "all" grants everything Sigma has.
   * Otherwise a list of: workspace, routines, web, http, shell, discord, team_admin,
   * action:<name>, mcp:<name>, plugin:<name> (or action:*, mcp:*, plugin:*).
   */
  tools?: "all" | string[];
}

export interface ActionField {
  type: "string" | "number" | "boolean";
  description: string;
  optional?: boolean;
}

/** An outbound action, usually an n8n webhook that posts to X, LinkedIn, Kit, etc. */
export interface ActionConfig {
  description: string;
  url_env: string;
  secret_env?: string;
  requires_approval?: boolean;
  fields: Record<string, ActionField>;
}

/**
 * An MCP server. With `url` it is called through Anthropic's MCP connector (no local process).
 * With `command` (stdio) or `local: true` (HTTP) Sigma connects itself, which lets you gate tools behind approvals.
 */
export interface McpServerConfig {
  url?: string;
  token_env?: string;
  local?: boolean;
  command?: string;
  args?: string[];
  env?: Record<string, string>;
  /** Tool names that need human approval, or true for all of them. Local servers only. */
  require_approval?: boolean | string[];
}

export interface RoutineConfig {
  id: string;
  bot: string;
  name: string;
  /** Cron expression. Omit for webhook-only routines. */
  cron?: string;
  timezone?: string;
  prompt: string;
  /** Room the routine posts into, e.g. "discord:123" or "web:ops". */
  room: string;
}

export interface DiscordRoomConfig {
  name?: string;
  bots: string[];
  /** Optional stage owners: { "draft": "script", "publish": "xia" }. */
  owners?: Record<string, string>;
  /** "mentions" (default): bots only answer when tagged. "all": every message gets a reply. */
  listen?: "mentions" | "all";
  /** Let anyone in the channel talk to the bots, not just operators. */
  public?: boolean;
}

export interface SigmaConfig {
  team_name: string;
  default_model: string;
  default_effort: Effort;
  max_hops: number;
  weekly_budget_usd: number;
  timezone: string;
  /** Hosts the http_request tool may call. Empty means any public host. */
  http_allowlist: string[];
  /** "approval" (default): every shell command needs approval. "open": runs straight away. */
  shell_mode: "approval" | "open";
  bots: BotConfig[];
  actions: Record<string, ActionConfig>;
  mcp_servers: Record<string, McpServerConfig>;
  routines: RoutineConfig[];
  discord: {
    approvals_channel?: string;
    groups_channel?: string;
    /** Discord user ids who can approve actions. */
    approvers: string[];
    /** Discord user ids who can command the bots outside public rooms. Empty means anyone. */
    operators: string[];
    rooms: Record<string, DiscordRoomConfig>;
  };
}

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");

export const paths = {
  root: ROOT,
  data: path.resolve(process.env.SIGMA_DATA_DIR ?? path.join(ROOT, "data")),
  get db() {
    return path.join(this.data, "sigma.db");
  },
  get workspace() {
    return path.join(this.data, "workspace");
  },
  web: path.join(ROOT, "web"),
};

export function loadConfig(): SigmaConfig {
  const file = process.env.SIGMA_CONFIG ?? path.join(ROOT, "sigma.config.yaml");
  const raw = YAML.parse(fs.readFileSync(file, "utf8")) ?? {};

  const config: SigmaConfig = {
    team_name: raw.team_name ?? "Sigma",
    default_model: raw.default_model ?? "claude-opus-5-5",
    default_effort: raw.default_effort ?? "medium",
    max_hops: raw.max_hops ?? 6,
    weekly_budget_usd: raw.weekly_budget_usd ?? 25,
    timezone: raw.timezone ?? "UTC",
    http_allowlist: raw.http_allowlist ?? [],
    shell_mode: raw.shell_mode ?? "approval",
    bots: raw.bots ?? [],
    actions: raw.actions ?? {},
    mcp_servers: raw.mcp_servers ?? {},
    routines: raw.routines ?? [],
    discord: {
      approvers: [],
      operators: [],
      rooms: {},
      ...(raw.discord ?? {}),
    },
  };

  const ids = new Set<string>();
  for (const bot of config.bots) {
    if (!bot.id || !bot.name || !bot.instructions) {
      throw new Error(`Every bot needs id, name and instructions (check "${bot.id ?? bot.name}")`);
    }
    if (ids.has(bot.id)) throw new Error(`Duplicate bot id "${bot.id}"`);
    ids.add(bot.id);
  }
  for (const [name, server] of Object.entries(config.mcp_servers)) {
    if (!server.url && !server.command) throw new Error(`MCP server "${name}" needs a url or a command`);
  }
  if (config.bots.filter((b) => b.chief).length !== 1) {
    throw new Error("Mark exactly one bot as chief: true");
  }
  for (const routine of config.routines) {
    if (!ids.has(routine.bot)) throw new Error(`Routine "${routine.id}" uses unknown bot "${routine.bot}"`);
  }
  return config;
}
