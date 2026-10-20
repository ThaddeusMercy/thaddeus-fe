import { exec } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { promisify } from "node:util";
import type Anthropic from "@anthropic-ai/sdk";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js";
import { paths, type BotConfig, type SigmaConfig } from "./config.js";
import type { TurnContext } from "./team.js";

const run = promisify(exec);

/** A tool beyond the core team tools. `group` is what a bot must be granted, e.g. "http" or "mcp:notion". */
export interface ExtTool {
  group: string;
  def: Anthropic.Beta.BetaTool;
  requiresApproval: (input: Record<string, unknown>) => boolean;
  run: (input: Record<string, unknown>, ctx: TurnContext) => Promise<string>;
}

/** What a plugin file in plugins/ default-exports. */
export interface SigmaPlugin {
  name: string;
  description?: string;
  tools: {
    name: string;
    description: string;
    input_schema: Anthropic.Beta.BetaTool["input_schema"];
    requires_approval?: boolean;
    run: (input: Record<string, unknown>, ctx: TurnContext) => Promise<string> | string;
  }[];
}

export function grants(bot: BotConfig, group: string) {
  if (bot.tools === "all") return true;
  const list = bot.tools ?? [];
  if (list.includes(group)) return true;
  const prefix = group.split(":")[0];
  return group.includes(":") && list.includes(`${prefix}:*`);
}

function safeName(...parts: string[]) {
  return parts
    .join("_")
    .replace(/[^a-zA-Z0-9_-]/g, "_")
    .slice(0, 64);
}

const str = (description: string) => ({ type: "string", description });

export class Registry {
  readonly tools = new Map<string, ExtTool>();
  /** Every group that exists, for the dashboard and for "all". */
  readonly groups = new Map<string, string>();
  private mcpClients: Client[] = [];

  constructor(private config: SigmaConfig) {}

  add(tool: ExtTool) {
    this.tools.set(tool.def.name, tool);
  }

  describeGroup(group: string, description: string) {
    this.groups.set(group, description);
  }

  for(bot: BotConfig) {
    return [...this.tools.values()].filter((t) => grants(bot, t.group));
  }

  async load() {
    this.loadBuiltIns();
    this.loadActions();
    await this.loadMcp();
    await this.loadPlugins();
  }

  private loadBuiltIns() {
    const cfg = this.config;
    this.describeGroup("workspace", "Read and write files on the shared team drive");
    this.describeGroup("routines", "Schedule its own recurring jobs");
    this.describeGroup("web", "Web search and reading web pages");
    this.describeGroup("team_admin", "Create, edit and delete teammates");

    this.describeGroup("http", "Call any HTTP API or webhook");
    this.add({
      group: "http",
      def: {
        name: "http_request",
        description:
          "Call an HTTP API or webhook. GET is immediate; other methods need approval unless the host is allowlisted.",
        input_schema: {
          type: "object",
          properties: {
            method: { type: "string", enum: ["GET", "POST", "PUT", "PATCH", "DELETE"] },
            url: str("Full https URL"),
            headers: { type: "object", description: "Request headers", additionalProperties: { type: "string" } },
            body: str("Request body (JSON as a string, or plain text)"),
          },
          required: ["method", "url"],
        },
      },
      requiresApproval: (input) => {
        if (String(input.method ?? "GET").toUpperCase() === "GET") return false;
        try {
          return !cfg.http_allowlist.includes(new URL(String(input.url)).hostname);
        } catch {
          return true;
        }
      },
      run: async (input) => {
        const url = new URL(String(input.url));
        if (!["http:", "https:"].includes(url.protocol)) return "Only http and https URLs are allowed.";
        if (isPrivateHost(url.hostname) && !cfg.http_allowlist.includes(url.hostname)) {
          return "That host is on a private network. Add it to http_allowlist to allow it.";
        }
        const res = await fetch(url, {
          method: String(input.method ?? "GET"),
          headers: (input.headers as Record<string, string>) ?? {},
          body: input.body ? String(input.body) : undefined,
          signal: AbortSignal.timeout(60_000),
        });
        const text = await res.text();
        return `HTTP ${res.status}\n${text.slice(0, 30_000)}`;
      },
    });

    this.describeGroup("shell", "Run shell commands in the shared workspace");
    this.add({
      group: "shell",
      def: {
        name: "run_command",
        description: `Run a shell command in the shared workspace folder (2 minute limit).${cfg.shell_mode === "approval" ? " Every command needs human approval." : ""}`,
        input_schema: {
          type: "object",
          properties: { command: str("The command to run") },
          required: ["command"],
          additionalProperties: false,
        },
      },
      requiresApproval: () => cfg.shell_mode !== "open",
      run: async (input) => {
        try {
          const { stdout, stderr } = await run(String(input.command), {
            cwd: paths.workspace,
            timeout: 120_000,
            maxBuffer: 4 * 1024 * 1024,
          });
          return clipOutput(stdout, stderr, 0);
        } catch (err) {
          const e = err as { stdout?: string; stderr?: string; code?: number; message: string };
          return clipOutput(e.stdout ?? "", e.stderr ?? e.message, e.code ?? 1);
        }
      },
    });
  }

  /** Configured outbound webhooks (n8n, Make, Zapier, your own API) become typed tools. */
  private loadActions() {
    for (const [name, action] of Object.entries(this.config.actions)) {
      const group = `action:${name}`;
      this.describeGroup(group, action.description);
      const properties: Record<string, object> = {};
      const required: string[] = [];
      for (const [field, spec] of Object.entries(action.fields)) {
        properties[field] = { type: spec.type, description: spec.description };
        if (!spec.optional) required.push(field);
      }
      this.add({
        group,
        def: {
          name: safeName("action", name),
          description: action.description + (action.requires_approval ? " A human must approve before it runs." : ""),
          input_schema: { type: "object", properties, required },
        },
        requiresApproval: () => Boolean(action.requires_approval),
        run: async (input) => {
          const url = process.env[action.url_env];
          if (!url) return `Action ${name} is not configured (set ${action.url_env}).`;
          const headers: Record<string, string> = { "content-type": "application/json" };
          if (action.secret_env && process.env[action.secret_env]) {
            headers["x-sigma-secret"] = process.env[action.secret_env]!;
          }
          const res = await fetch(url, {
            method: "POST",
            headers,
            body: JSON.stringify({ action: name, input }),
            signal: AbortSignal.timeout(60_000),
          });
          const body = (await res.text()).slice(0, 4_000);
          if (!res.ok) throw new Error(`HTTP ${res.status}: ${body}`);
          return body || "ok";
        },
      });
    }
  }

  /** Local MCP servers (stdio or HTTP) that Sigma connects to itself. Remote ones go through the connector. */
  private async loadMcp() {
    for (const [name, server] of Object.entries(this.config.mcp_servers)) {
      const group = `mcp:${name}`;
      if (!server.command && !server.local) {
        if (!expandVars(server.url!)) console.warn(`[sigma] MCP ${name} has no URL set; skipping it`);
        this.describeGroup(group, `MCP server ${name} (via Anthropic connector)`);
        continue;
      }
      try {
        const client = new Client({ name: "sigma", version: "0.1.0" });
        const token = server.token_env ? process.env[server.token_env] : undefined;
        const transport = server.command
          ? new StdioClientTransport({
              command: server.command,
              args: server.args ?? [],
              env: { ...(process.env as Record<string, string>), ...expandEnv(server.env ?? {}) },
            })
          : new StreamableHTTPClientTransport(new URL(expandVars(server.url!)), {
              requestInit: token ? { headers: { authorization: `Bearer ${token}` } } : undefined,
            });
        await client.connect(transport);
        this.mcpClients.push(client);
        const { tools } = await client.listTools();
        this.describeGroup(group, `MCP server ${name} (${tools.length} tools)`);
        for (const t of tools) {
          const gated = server.require_approval === true || (Array.isArray(server.require_approval) && server.require_approval.includes(t.name));
          this.add({
            group,
            def: {
              name: safeName("mcp", name, t.name),
              description: (t.description ?? t.name).slice(0, 1024) + (gated ? " Needs human approval." : ""),
              input_schema: t.inputSchema as Anthropic.Beta.BetaTool["input_schema"],
            },
            requiresApproval: () => gated,
            run: async (input) => {
              const result = await client.callTool({ name: t.name, arguments: input });
              const parts = (result.content as { type: string; text?: string }[] | undefined) ?? [];
              const text = parts.map((p) => (p.type === "text" ? p.text : `[${p.type}]`)).join("\n");
              return (result.isError ? "Error: " : "") + (text || JSON.stringify(result).slice(0, 4_000));
            },
          });
        }
        console.log(`[sigma] MCP ${name}: ${tools.length} tools`);
      } catch (err) {
        console.error(`[sigma] MCP ${name} failed to connect:`, err instanceof Error ? err.message : err);
      }
    }
  }

  /** Every file in plugins/ that default-exports a SigmaPlugin. */
  private async loadPlugins() {
    const dir = path.join(paths.root, "plugins");
    if (!fs.existsSync(dir)) return;
    for (const file of fs.readdirSync(dir)) {
      if (!/\.(ts|js|mjs)$/.test(file) || file.startsWith("_")) continue;
      try {
        const mod = await import(pathToFileURL(path.join(dir, file)).href);
        const plugin = mod.default as SigmaPlugin;
        const group = `plugin:${plugin.name}`;
        this.describeGroup(group, plugin.description ?? `Plugin ${plugin.name}`);
        for (const t of plugin.tools) {
          this.add({
            group,
            def: { name: safeName(plugin.name, t.name), description: t.description, input_schema: t.input_schema },
            requiresApproval: () => Boolean(t.requires_approval),
            run: async (input, ctx) => String(await t.run(input, ctx)),
          });
        }
        console.log(`[sigma] plugin ${plugin.name}: ${plugin.tools.length} tools`);
      } catch (err) {
        console.error(`[sigma] plugin ${file} failed to load:`, err);
      }
    }
  }

  /** Remote MCP servers this bot may use through Anthropic's MCP connector. */
  remoteMcpFor(bot: BotConfig) {
    return Object.entries(this.config.mcp_servers)
      .filter(([name, s]) => !s.command && !s.local && grants(bot, `mcp:${name}`) && expandVars(s.url!))
      .map(([name, s]) => {
        const token = s.token_env ? process.env[s.token_env] : undefined;
        return { type: "url" as const, name, url: expandVars(s.url!), ...(token ? { authorization_token: token } : {}) };
      });
  }

  async close() {
    await Promise.allSettled(this.mcpClients.map((c) => c.close()));
  }
}

/** "${NOTION_TOKEN}" in config pulls from the process environment. */
function expandVars(value: string) {
  return value.replace(/\$\{(\w+)\}/g, (_, name) => process.env[name] ?? "");
}

function expandEnv(env: Record<string, string>) {
  return Object.fromEntries(Object.entries(env).map(([k, v]) => [k, expandVars(v)]));
}

function isPrivateHost(host: string) {
  return (
    host === "localhost" ||
    host.endsWith(".local") ||
    host.endsWith(".internal") ||
    /^(127\.|10\.|192\.168\.|169\.254\.|0\.)/.test(host) ||
    /^172\.(1[6-9]|2\d|3[01])\./.test(host) ||
    host === "::1" ||
    host.startsWith("[")
  );
}

function clipOutput(stdout: string, stderr: string, code: number) {
  const out = `exit ${code}\n${stdout}${stderr ? `\n[stderr]\n${stderr}` : ""}`;
  return out.length > 30_000 ? out.slice(0, 30_000) + "\n…[truncated]" : out;
}
