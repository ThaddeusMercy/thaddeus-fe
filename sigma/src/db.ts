import fs from "node:fs";
import { DatabaseSync } from "node:sqlite";
import { paths, type BotConfig } from "./config.js";

fs.mkdirSync(paths.data, { recursive: true });
fs.mkdirSync(paths.workspace, { recursive: true });

export const db = new DatabaseSync(paths.db);
db.exec(`
  PRAGMA journal_mode = WAL;

  CREATE TABLE IF NOT EXISTS rooms (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    kind TEXT NOT NULL,            -- dm | group | channel
    bots TEXT NOT NULL,            -- JSON array of bot ids
    owners TEXT NOT NULL DEFAULT '{}',
    created_by TEXT,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    room_id TEXT NOT NULL,
    author_kind TEXT NOT NULL,     -- human | bot | system
    author_id TEXT NOT NULL,
    author_name TEXT NOT NULL,
    content TEXT NOT NULL,
    origin TEXT NOT NULL,          -- discord | web | sigma
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );
  CREATE INDEX IF NOT EXISTS messages_room ON messages(room_id, id);

  CREATE TABLE IF NOT EXISTS memories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    bot_id TEXT NOT NULL,
    content TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS skills (
    bot_id TEXT NOT NULL,
    name TEXT NOT NULL,
    body TEXT NOT NULL,
    updated_at TEXT NOT NULL DEFAULT (datetime('now')),
    PRIMARY KEY (bot_id, name)
  );

  CREATE TABLE IF NOT EXISTS routines (
    id TEXT PRIMARY KEY,
    bot_id TEXT NOT NULL,
    name TEXT NOT NULL,
    cron TEXT,
    timezone TEXT,
    prompt TEXT NOT NULL,
    room_id TEXT NOT NULL,
    source TEXT NOT NULL,          -- config | chat
    webhook_secret TEXT NOT NULL,
    enabled INTEGER NOT NULL DEFAULT 1,
    last_run_at TEXT,
    last_status TEXT
  );

  CREATE TABLE IF NOT EXISTS routine_runs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    routine_id TEXT NOT NULL,
    started_at TEXT NOT NULL DEFAULT (datetime('now')),
    status TEXT NOT NULL,
    detail TEXT
  );

  CREATE TABLE IF NOT EXISTS approvals (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    bot_id TEXT NOT NULL,
    room_id TEXT NOT NULL,
    action TEXT NOT NULL,
    input TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'pending',
    decided_by TEXT,
    result TEXT,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    decided_at TEXT
  );

  CREATE TABLE IF NOT EXISTS bots (
    id TEXT PRIMARY KEY,
    config TEXT NOT NULL,          -- JSON BotConfig
    created_by TEXT,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS usage (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    bot_id TEXT NOT NULL,
    model TEXT NOT NULL,
    input_tokens INTEGER NOT NULL,
    output_tokens INTEGER NOT NULL,
    cache_read_tokens INTEGER NOT NULL,
    cache_write_tokens INTEGER NOT NULL,
    cost_usd REAL NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );
`);

export interface Room {
  id: string;
  name: string;
  kind: "dm" | "group" | "channel";
  bots: string[];
  owners: Record<string, string>;
  created_by: string | null;
  created_at: string;
}

export interface Message {
  id: number;
  room_id: string;
  author_kind: "human" | "bot" | "system";
  author_id: string;
  author_name: string;
  content: string;
  origin: "discord" | "web" | "sigma";
  created_at: string;
}

export interface Approval {
  id: number;
  bot_id: string;
  room_id: string;
  action: string;
  input: string;
  status: "pending" | "approved" | "rejected";
  decided_by: string | null;
  result: string | null;
  created_at: string;
  decided_at: string | null;
}

export interface Routine {
  id: string;
  bot_id: string;
  name: string;
  cron: string | null;
  timezone: string | null;
  prompt: string;
  room_id: string;
  source: "config" | "chat";
  webhook_secret: string;
  enabled: number;
  last_run_at: string | null;
  last_status: string | null;
}

type Row = Record<string, unknown>;

function toRoom(row: Row | undefined): Room | undefined {
  if (!row) return undefined;
  return {
    ...(row as unknown as Room),
    bots: JSON.parse(row.bots as string),
    owners: JSON.parse(row.owners as string),
  };
}

export const rooms = {
  get(id: string) {
    return toRoom(db.prepare("SELECT * FROM rooms WHERE id = ?").get(id) as Row | undefined);
  },
  list() {
    return (db.prepare("SELECT * FROM rooms ORDER BY created_at").all() as Row[]).map((r) => toRoom(r)!);
  },
  upsert(room: Omit<Room, "created_at">) {
    db.prepare(
      `INSERT INTO rooms (id, name, kind, bots, owners, created_by) VALUES (?, ?, ?, ?, ?, ?)
       ON CONFLICT(id) DO UPDATE SET name = excluded.name, bots = excluded.bots, owners = excluded.owners`,
    ).run(room.id, room.name, room.kind, JSON.stringify(room.bots), JSON.stringify(room.owners), room.created_by);
    return this.get(room.id)!;
  },
};

export const messages = {
  add(m: Omit<Message, "id" | "created_at">): Message {
    const info = db
      .prepare(
        "INSERT INTO messages (room_id, author_kind, author_id, author_name, content, origin) VALUES (?, ?, ?, ?, ?, ?)",
      )
      .run(m.room_id, m.author_kind, m.author_id, m.author_name, m.content, m.origin);
    return db.prepare("SELECT * FROM messages WHERE id = ?").get(info.lastInsertRowid) as unknown as Message;
  },
  count(roomId: string) {
    return (db.prepare("SELECT COUNT(*) AS n FROM messages WHERE room_id = ?").get(roomId) as { n: number }).n;
  },
  /** Messages from a fixed offset, so the window only moves in steps (keeps prompt caching warm). */
  window(roomId: string, offset: number, limit: number) {
    return db
      .prepare("SELECT * FROM messages WHERE room_id = ? ORDER BY id LIMIT ? OFFSET ?")
      .all(roomId, limit, offset) as unknown as Message[];
  },
  recent(roomId: string, limit = 100) {
    return (
      db.prepare("SELECT * FROM messages WHERE room_id = ? ORDER BY id DESC LIMIT ?").all(roomId, limit) as unknown as Message[]
    ).reverse();
  },
};

export const memories = {
  list(botId: string) {
    return db.prepare("SELECT id, content, created_at FROM memories WHERE bot_id = ? ORDER BY id").all(botId) as {
      id: number;
      content: string;
      created_at: string;
    }[];
  },
  add(botId: string, content: string) {
    return Number(db.prepare("INSERT INTO memories (bot_id, content) VALUES (?, ?)").run(botId, content).lastInsertRowid);
  },
  remove(botId: string, id: number) {
    return db.prepare("DELETE FROM memories WHERE bot_id = ? AND id = ?").run(botId, id).changes > 0;
  },
};

export const skills = {
  list(botId: string) {
    return db.prepare("SELECT name, body, updated_at FROM skills WHERE bot_id = ? ORDER BY name").all(botId) as {
      name: string;
      body: string;
      updated_at: string;
    }[];
  },
  save(botId: string, name: string, body: string) {
    db.prepare(
      `INSERT INTO skills (bot_id, name, body) VALUES (?, ?, ?)
       ON CONFLICT(bot_id, name) DO UPDATE SET body = excluded.body, updated_at = datetime('now')`,
    ).run(botId, name, body);
  },
  remove(botId: string, name: string) {
    return db.prepare("DELETE FROM skills WHERE bot_id = ? AND name = ?").run(botId, name).changes > 0;
  },
};

export const routines = {
  list() {
    return db.prepare("SELECT * FROM routines ORDER BY bot_id, name").all() as unknown as Routine[];
  },
  get(id: string) {
    return db.prepare("SELECT * FROM routines WHERE id = ?").get(id) as unknown as Routine | undefined;
  },
  upsert(r: Omit<Routine, "last_run_at" | "last_status" | "enabled"> & { enabled?: number }) {
    db.prepare(
      `INSERT INTO routines (id, bot_id, name, cron, timezone, prompt, room_id, source, webhook_secret, enabled)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
       ON CONFLICT(id) DO UPDATE SET bot_id = excluded.bot_id, name = excluded.name, cron = excluded.cron,
         timezone = excluded.timezone, prompt = excluded.prompt, room_id = excluded.room_id`,
    ).run(r.id, r.bot_id, r.name, r.cron, r.timezone, r.prompt, r.room_id, r.source, r.webhook_secret, r.enabled ?? 1);
    return this.get(r.id)!;
  },
  setEnabled(id: string, enabled: boolean) {
    db.prepare("UPDATE routines SET enabled = ? WHERE id = ?").run(enabled ? 1 : 0, id);
  },
  remove(id: string) {
    db.prepare("DELETE FROM routine_runs WHERE routine_id = ?").run(id);
    return db.prepare("DELETE FROM routines WHERE id = ?").run(id).changes > 0;
  },
  recordRun(id: string, status: string, detail: string) {
    db.prepare("INSERT INTO routine_runs (routine_id, status, detail) VALUES (?, ?, ?)").run(id, status, detail);
    db.prepare("UPDATE routines SET last_run_at = datetime('now'), last_status = ? WHERE id = ?").run(status, id);
    // Keep the 20 most recent runs per routine.
    db.prepare(
      `DELETE FROM routine_runs WHERE routine_id = ? AND id NOT IN
         (SELECT id FROM routine_runs WHERE routine_id = ? ORDER BY id DESC LIMIT 20)`,
    ).run(id, id);
  },
  runs(id: string) {
    return db.prepare("SELECT * FROM routine_runs WHERE routine_id = ? ORDER BY id DESC").all(id);
  },
};

export const approvals = {
  create(a: { bot_id: string; room_id: string; action: string; input: unknown }) {
    const info = db
      .prepare("INSERT INTO approvals (bot_id, room_id, action, input) VALUES (?, ?, ?, ?)")
      .run(a.bot_id, a.room_id, a.action, JSON.stringify(a.input));
    return this.get(Number(info.lastInsertRowid))!;
  },
  get(id: number) {
    return db.prepare("SELECT * FROM approvals WHERE id = ?").get(id) as unknown as Approval | undefined;
  },
  list(status?: string) {
    return (
      status
        ? db.prepare("SELECT * FROM approvals WHERE status = ? ORDER BY id DESC LIMIT 100").all(status)
        : db.prepare("SELECT * FROM approvals ORDER BY id DESC LIMIT 100").all()
    ) as unknown as Approval[];
  },
  /** Returns false if the approval was already decided (double clicks, two approvers). */
  decide(id: number, status: "approved" | "rejected", by: string) {
    return (
      db
        .prepare(
          "UPDATE approvals SET status = ?, decided_by = ?, decided_at = datetime('now') WHERE id = ? AND status = 'pending'",
        )
        .run(status, by, id).changes > 0
    );
  },
  setResult(id: number, result: string) {
    db.prepare("UPDATE approvals SET result = ? WHERE id = ?").run(result, id);
  },
};

export const usage = {
  add(u: {
    bot_id: string;
    model: string;
    input_tokens: number;
    output_tokens: number;
    cache_read_tokens: number;
    cache_write_tokens: number;
    cost_usd: number;
  }) {
    db.prepare(
      `INSERT INTO usage (bot_id, model, input_tokens, output_tokens, cache_read_tokens, cache_write_tokens, cost_usd)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
    ).run(u.bot_id, u.model, u.input_tokens, u.output_tokens, u.cache_read_tokens, u.cache_write_tokens, u.cost_usd);
  },
  spentSince(days: number) {
    return (
      db.prepare("SELECT COALESCE(SUM(cost_usd), 0) AS c FROM usage WHERE created_at >= datetime('now', ?)").get(
        `-${days} days`,
      ) as { c: number }
    ).c;
  },
  byBot(days: number) {
    return db
      .prepare(
        `SELECT bot_id, COUNT(*) AS calls, SUM(input_tokens) AS input_tokens, SUM(output_tokens) AS output_tokens,
                SUM(cache_read_tokens) AS cache_read_tokens, ROUND(SUM(cost_usd), 4) AS cost_usd
         FROM usage WHERE created_at >= datetime('now', ?) GROUP BY bot_id ORDER BY cost_usd DESC`,
      )
      .all(`-${days} days`);
  },
};

/** Bots created at runtime (dashboard or chat). Bots in sigma.config.yaml are not stored here. */
export const customBots = {
  list() {
    return (db.prepare("SELECT config FROM bots ORDER BY created_at").all() as { config: string }[]).map(
      (r) => JSON.parse(r.config) as BotConfig,
    );
  },
  save(bot: BotConfig, by: string) {
    db.prepare(
      `INSERT INTO bots (id, config, created_by) VALUES (?, ?, ?)
       ON CONFLICT(id) DO UPDATE SET config = excluded.config`,
    ).run(bot.id, JSON.stringify(bot), by);
  },
  remove(id: string) {
    return db.prepare("DELETE FROM bots WHERE id = ?").run(id).changes > 0;
  },
};
