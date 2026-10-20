import crypto from "node:crypto";
import { Cron } from "croner";
import { routines, type Routine } from "./db.js";
import type { Team } from "./team.js";

/** Cron and webhook triggers. Each routine is a prompt a bot runs in a room. */
export class Scheduler {
  private jobs = new Map<string, Cron>();

  constructor(private team: Team) {}

  start() {
    const configIds = new Set<string>();
    for (const r of this.team.config.routines) {
      configIds.add(r.id);
      const existing = routines.get(r.id);
      routines.upsert({
        id: r.id,
        bot_id: r.bot,
        name: r.name,
        cron: r.cron ?? null,
        timezone: r.timezone ?? this.team.config.timezone,
        prompt: r.prompt,
        room_id: r.room,
        source: "config",
        webhook_secret: existing?.webhook_secret ?? secret(),
      });
    }
    for (const r of routines.list()) {
      // Routines removed from the config file go away; ones bots created in chat stay.
      if (r.source === "config" && !configIds.has(r.id)) {
        routines.remove(r.id);
        continue;
      }
      this.schedule(r);
    }
  }

  private schedule(r: Routine) {
    this.jobs.get(r.id)?.stop();
    this.jobs.delete(r.id);
    if (!r.cron || !r.enabled) return;
    const job = new Cron(r.cron, { timezone: r.timezone ?? this.team.config.timezone, protect: true }, () =>
      this.fire(r.id),
    );
    this.jobs.set(r.id, job);
  }

  async fire(id: string, payload?: string) {
    const r = routines.get(id);
    if (!r) throw new Error(`No routine ${id}`);
    if (!r.enabled) return;
    try {
      await this.team.runRoutine(r.bot_id, r.room_id, r.name, r.prompt, payload);
      routines.recordRun(id, "ok", payload ? "webhook" : "schedule");
    } catch (err) {
      routines.recordRun(id, "error", err instanceof Error ? err.message : String(err));
    }
  }

  createFromChat(botId: string, name: string, cron: string, prompt: string, roomId: string) {
    // Validates the expression; throws on a bad one so the bot sees the error.
    new Cron(cron, { paused: true, timezone: this.team.config.timezone }).stop();
    const r = routines.upsert({
      id: `r_${crypto.randomUUID().slice(0, 8)}`,
      bot_id: botId,
      name,
      cron,
      timezone: this.team.config.timezone,
      prompt,
      room_id: roomId,
      source: "chat",
      webhook_secret: secret(),
    });
    this.schedule(r);
    return r;
  }

  setEnabled(id: string, enabled: boolean) {
    routines.setEnabled(id, enabled);
    const r = routines.get(id);
    if (r) this.schedule(r);
  }

  remove(id: string) {
    this.jobs.get(id)?.stop();
    this.jobs.delete(id);
    routines.remove(id);
  }

  nextRun(id: string) {
    return this.jobs.get(id)?.nextRun()?.toISOString() ?? null;
  }
}

function secret() {
  return crypto.randomBytes(16).toString("hex");
}
