import { loadConfig } from "./config.js";
import { startDiscord } from "./discord.js";
import { Scheduler } from "./routines.js";
import { startServer } from "./server.js";
import { Team } from "./team.js";

try {
  process.loadEnvFile(new URL("../.env", import.meta.url).pathname);
} catch {
  // No .env file; rely on the real environment.
}

const config = loadConfig();
const team = new Team(config);
await team.registry.load();
team.scheduler = new Scheduler(team);
team.scheduler.start();

// Every bot gets a direct-message room on the dashboard.
for (const bot of team.bots) team.ensureRoom(`web:dm:${bot.id}`, { name: bot.name, kind: "dm", bots: [bot.id] });

startServer(team);
await startDiscord(team).catch((err) => console.error("[sigma] Discord failed to start:", err));
console.log(`[sigma] ${config.team_name} is up with ${team.bots.length} bots: ${team.bots.map((b) => b.name).join(", ")}`);

for (const signal of ["SIGINT", "SIGTERM"] as const) {
  process.on(signal, async () => {
    await team.registry.close();
    process.exit(0);
  });
}
