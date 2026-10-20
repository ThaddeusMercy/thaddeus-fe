import crypto from "node:crypto";
import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import { bus } from "./bus.js";
import { paths } from "./config.js";
import { approvals, memories, messages, routines, skills, usage } from "./db.js";
import type { Team } from "./team.js";

type Handler = (req: http.IncomingMessage, res: http.ServerResponse, params: string[], body: any) => Promise<unknown>;

/** Dashboard API, live events (SSE) and inbound webhooks for routines. */
export function startServer(team: Team) {
  const port = Number(process.env.PORT ?? 8787);
  const adminToken = process.env.SIGMA_ADMIN_TOKEN;
  if (!adminToken) console.warn("[sigma] SIGMA_ADMIN_TOKEN is not set; the dashboard API is open to anyone who can reach it");

  const routes: [string, RegExp, Handler][] = [];
  const route = (method: string, pattern: string, handler: Handler) =>
    routes.push([method, new RegExp("^" + pattern.replace(/:\w+/g, "([^/]+)") + "$"), handler]);

  route("GET", "/api/state", async () => ({
    team_name: team.config.team_name,
    bots: team.bots.map((b) => ({ ...b, custom: team.isCustomBot(b.id) })),
    rooms: team.listRooms(),
    approvals: approvals.list("pending"),
    tool_groups: Object.fromEntries(team.registry.groups),
    spent_week: usage.spentSince(7),
    weekly_budget: team.config.weekly_budget_usd,
  }));

  route("GET", "/api/rooms/:id/messages", async (_q, _s, [id]) => messages.recent(id, 200));

  route("POST", "/api/rooms", async (_q, _s, _p, body) => {
    const bots = (body.bots as string[]).map((b) => team.findBot(b)?.id).filter(Boolean) as string[];
    if (bots.length < 1 || bots.length > 6) throw httpError(400, "Pick 1 to 6 bots");
    return team.createGroup(String(body.name || "New group"), bots, human(body), String(body.kickoff ?? ""));
  });

  route("POST", "/api/dm/:bot", async (_q, _s, [botId]) => {
    const bot = team.findBot(botId);
    if (!bot) throw httpError(404, "No such bot");
    return team.ensureRoom(`web:dm:${bot.id}`, { name: bot.name, kind: "dm", bots: [bot.id] });
  });

  route("POST", "/api/rooms/:id/messages", async (_q, _s, [id], body) => {
    if (!team.getRoom(id)) throw httpError(404, "No such room");
    await team.handleHuman(id, human(body), String(body.content ?? ""), "web");
    return { ok: true };
  });

  route("POST", "/api/approvals/:id", async (_q, _s, [id], body) =>
    team.decideApproval(Number(id), Boolean(body.approve), human(body).name),
  );
  route("GET", "/api/approvals", async () => approvals.list());

  route("GET", "/api/bots/:id", async (_q, _s, [id]) => {
    const bot = team.findBot(id);
    if (!bot) throw httpError(404, "No such bot");
    return {
      bot: { ...bot, custom: team.isCustomBot(bot.id) },
      memories: memories.list(bot.id),
      skills: skills.list(bot.id),
      routines: routines
        .list()
        .filter((r) => r.bot_id === bot.id)
        .map((r) => ({ ...r, next_run: team.scheduler.nextRun(r.id), runs: routines.runs(r.id) })),
    };
  });
  route("POST", "/api/bots", async (_q, _s, _p, body) => ({ result: team.applyBotChange("create_bot", body, human(body).name) }));
  route("PUT", "/api/bots/:id", async (_q, _s, [id], body) => ({
    result: team.applyBotChange("update_bot", { ...body, id }, human(body).name),
  }));
  route("DELETE", "/api/bots/:id", async (_q, _s, [id]) => ({ result: team.applyBotChange("delete_bot", { id }, "dashboard") }));
  route("DELETE", "/api/bots/:id/memories/:mid", async (_q, _s, [id, mid]) => ({ ok: memories.remove(id, Number(mid)) }));
  route("POST", "/api/bots/:id/skills", async (_q, _s, [id], body) => {
    skills.save(id, String(body.name), String(body.body));
    return { ok: true };
  });
  route("DELETE", "/api/bots/:id/skills/:name", async (_q, _s, [id, name]) => ({ ok: skills.remove(id, decodeURIComponent(name)) }));

  route("POST", "/api/routines", async (_q, _s, _p, body) =>
    team.scheduler.createFromChat(String(body.bot), String(body.name), String(body.cron), String(body.prompt), String(body.room)),
  );
  route("POST", "/api/routines/:id/run", async (_q, _s, [id]) => {
    void team.scheduler.fire(id);
    return { ok: true };
  });
  route("PATCH", "/api/routines/:id", async (_q, _s, [id], body) => {
    team.scheduler.setEnabled(id, Boolean(body.enabled));
    return routines.get(id);
  });
  route("DELETE", "/api/routines/:id", async (_q, _s, [id]) => {
    team.scheduler.remove(id);
    return { ok: true };
  });

  route("GET", "/api/usage", async () => ({ week: usage.byBot(7), month: usage.byBot(30) }));

  const sseClients = new Set<http.ServerResponse>();
  const broadcast = (type: string) => (data: unknown) => {
    const line = `event: ${type}\ndata: ${JSON.stringify(data)}\n\n`;
    for (const c of sseClients) c.write(line);
  };
  bus.on("message", broadcast("message"));
  bus.on("room", broadcast("room"));
  bus.on("approval", broadcast("approval"));
  bus.on("typing", broadcast("typing"));
  bus.on("bots", broadcast("bots"));

  const server = http.createServer(async (req, res) => {
    const url = new URL(req.url ?? "/", "http://localhost");
    try {
      // Inbound webhooks: POST /hooks/<routine id>?secret=... (or x-sigma-secret header).
      const hook = url.pathname.match(/^\/hooks\/([^/]+)$/);
      if (hook && req.method === "POST") {
        const routine = routines.get(hook[1]);
        const given = url.searchParams.get("secret") ?? String(req.headers["x-sigma-secret"] ?? "");
        if (!routine || !safeEqual(given, routine.webhook_secret)) return send(res, 404, { error: "not found" });
        const payload = await readBody(req);
        void team.scheduler.fire(routine.id, payload || "(empty body)");
        return send(res, 202, { ok: true });
      }

      if (url.pathname === "/" || url.pathname === "/index.html") {
        res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
        return res.end(fs.readFileSync(path.join(paths.web, "index.html")));
      }

      if (!url.pathname.startsWith("/api/")) return send(res, 404, { error: "not found" });
      const token = String(req.headers.authorization ?? "").replace(/^Bearer /, "") || url.searchParams.get("token") || "";
      if (adminToken && !safeEqual(token, adminToken)) return send(res, 401, { error: "unauthorized" });

      if (url.pathname === "/api/events") {
        res.writeHead(200, { "content-type": "text/event-stream", "cache-control": "no-cache", connection: "keep-alive" });
        res.write(": connected\n\n");
        sseClients.add(res);
        const ping = setInterval(() => res.write(": ping\n\n"), 25_000);
        req.on("close", () => {
          clearInterval(ping);
          sseClients.delete(res);
        });
        return;
      }

      for (const [method, re, handler] of routes) {
        const match = url.pathname.match(re);
        if (!match || req.method !== method) continue;
        const raw = req.method === "GET" ? "" : await readBody(req);
        const body = raw ? JSON.parse(raw) : {};
        const params = match.slice(1).map(decodeURIComponent);
        return send(res, 200, await handler(req, res, params, body));
      }
      send(res, 404, { error: "not found" });
    } catch (err) {
      const status = (err as { status?: number }).status ?? 500;
      send(res, status, { error: err instanceof Error ? err.message : String(err) });
    }
  });
  server.listen(port, () => console.log(`[sigma] dashboard on http://localhost:${port}`));
  return server;
}

function human(body: any) {
  const name = String(body.as || process.env.SIGMA_OWNER_NAME || "Boss").slice(0, 40);
  return { id: `web:${name.toLowerCase()}`, name };
}

function httpError(status: number, message: string) {
  return Object.assign(new Error(message), { status });
}

function send(res: http.ServerResponse, status: number, data: unknown) {
  res.writeHead(status, { "content-type": "application/json" });
  res.end(JSON.stringify(data));
}

function readBody(req: http.IncomingMessage): Promise<string> {
  return new Promise((resolve, reject) => {
    let size = 0;
    const parts: Buffer[] = [];
    req.on("data", (c: Buffer) => {
      size += c.length;
      if (size > 1_000_000) {
        reject(httpError(413, "Body too large"));
        req.destroy();
      } else parts.push(c);
    });
    req.on("end", () => resolve(Buffer.concat(parts).toString("utf8")));
    req.on("error", reject);
  });
}

function safeEqual(a: string, b: string) {
  const x = Buffer.from(a);
  const y = Buffer.from(b);
  return x.length === y.length && crypto.timingSafeEqual(x, y);
}
