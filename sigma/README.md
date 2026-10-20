# Sigma

Your own Grok Bot. A team of named AI teammates (a chief of staff plus specialists) that live in your Discord and on a web dashboard. They can tag each other, open group chats, ask each other questions in private, remember things, save skills, run on schedules and webhooks, and use tools: webhooks, any HTTP API, MCP servers, plugins, a shell, the web and Discord itself. Anything that publishes, sends, deletes or spends waits for a human to press Approve.

It runs on your own server with your own Claude API key, so you pay for the tokens you use instead of a per-seat plan.

## What maps to what

| Grok Bot | Sigma |
| --- | --- |
| Named Bots with a job, memory and tools | `bots` in `sigma.config.yaml`, plus bots you hire from the dashboard or by asking Mia (`create_bot`) |
| Chief of staff that routes work | `chief: true`. Untagged messages go to it, and it routes them to teammates |
| Group chats of 2 to 6 Bots, @mentions, @everyone | Groups (web rooms or Discord threads), `@Name`, `@everyone`. Tagging someone who isn't in the group adds them |
| Bots message each other and hand off work | `@Name` in a reply hands off in public; `ask_bot` asks a teammate in private; `create_group` opens a new group |
| Stage owners | `owners:` on a room, plus "an @owner per stage" in group kickoffs |
| Shared computer (files, logins) | Shared workspace drive (`workspace` tools) and a `shell` that runs in it |
| Memory | `remember` / `forget`, shown and editable on the dashboard |
| Skills / teach a task | `save_skill`: saved procedures the bot follows later (written, not recorded) |
| Routines (schedule or event) | Cron routines plus a webhook per routine at `POST /hooks/<id>?secret=…` for n8n, Polar, GitHub and similar |
| Connectors, plugins, MCP | Remote MCP servers through Anthropic's MCP connector, local MCP servers (stdio or HTTP), `plugins/*.ts`, webhook `actions`, `http_request` |
| Computer use / browser | `web` (search and fetch pages), `http_request`, `shell`. No visual browser driving yet |
| Approvals | Every gated action becomes an Approve/Reject card in Discord and on the dashboard |
| Usage allowance | `weekly_budget_usd`: a hard stop with per-bot spend on the dashboard |

## Tools a bot can have

Every bot has the core team tools: `ask_bot`, `create_group`, `post_to_room`, `list_rooms`, `remember`, `forget`, `save_skill` and `delete_skill`. On top of that you grant groups with `tools:`:

- `workspace` lets the bot list, read and write files on the shared drive.
- `routines` lets it schedule its own cron jobs. Each one gets a webhook too.
- `web` turns on Claude's web search and web fetch.
- `http` gives it `http_request` for any API or webhook. GET runs straight away. Other methods need approval unless the host is in `http_allowlist`.
- `shell` gives it `run_command` in the workspace. Every command needs approval unless `shell_mode: open`.
- `discord` covers listing channels, reading history, creating threads, finding members, DMs (with approval) and giving or removing roles (with approval).
- `team_admin` lets it hire, edit and remove teammates. Granting powerful tools needs approval.
- `action:<name>` is a typed webhook from `actions:`, usually n8n posting to X, LinkedIn or Kit.
- `mcp:<name>` is an MCP server from `mcp_servers:`.
- `plugin:<name>` is a plugin from `plugins/`.
- `tools: all` gives a bot everything Sigma has, every group, action, MCP server and plugin included. Approval gates still apply.

## Setup

You need Node 22.13 or newer, a Claude API key and, for Discord, a Discord application.

```bash
cd sigma
npm install
cp .env.example .env    # fill in ANTHROPIC_API_KEY and SIGMA_ADMIN_TOKEN at minimum
npm start               # dashboard on http://localhost:8787
```

### Discord

1. In the Discord Developer Portal, create an application, add a bot, copy its token into `DISCORD_TOKEN` and turn on the **Message Content** intent.
2. Invite it with the `bot` scope and these permissions: View Channels, Send Messages, Send Messages in Threads, Create Public Threads, Read Message History, Manage Webhooks, plus Manage Roles if you grant `discord` role changes.
3. In `sigma.config.yaml`, set `approvals_channel`, `groups_channel`, `approvers` (your Discord user ids) and `operators`, then map channels under `discord.rooms`.

All the teammates speak through one Discord app using a channel webhook. Each message carries the bot's own name and avatar, so there's no token per persona. In a channel, a bot answers when it's tagged by name (`@Promise`), when someone replies to one of its messages, or when someone mentions the Sigma app (that goes to the chief of staff). Set `listen: all` on a channel to reply to everything. Set `public: true` to let people who aren't operators talk to the bots there. Groups the bots create become threads in `groups_channel`.

### Webhooks in and out

- **Out:** each entry under `actions` POSTs `{"action", "input"}` to the URL in its env var, with an `x-sigma-secret` header. Build the X, LinkedIn and Kit posting in n8n and point the action at the n8n webhook.
- **In:** each routine has `POST /hooks/<routine id>?secret=<secret>`. The secret is on the dashboard under the bot's Routines tab. The request body is handed to the bot as the trigger payload. Point your AttentionHQ submission webhook at `au-submissions`, for example.

### MCP servers

```yaml
mcp_servers:
  attentionhq:            # remote: Anthropic connects to it, nothing runs on your server
    url: ${ATTENTIONHQ_MCP_URL}
    token_env: ATTENTIONHQ_MCP_TOKEN
  files:                  # local stdio: Sigma starts it, and can gate tools behind approval
    command: npx
    args: ["-y", "@modelcontextprotocol/server-filesystem", "./data/workspace"]
    require_approval: [write_file]
```

Remote servers called through the connector run their tools on Anthropic's side, so approvals can't stop individual calls. Give those servers read-mostly tokens, or run them as `local: true` so Sigma connects to them itself and `require_approval` works.

### Plugins

Drop a `.ts` file in `plugins/` that default-exports `{ name, tools: [{ name, description, input_schema, requires_approval, run }] }`. See `plugins/_example.ts`. Files that start with `_` are skipped.

## Keeping cost down

- `default_effort: low` suits chat. Raise `effort` per bot where the quality matters, such as Script or Forge.
- Set a cheaper `model` on high-volume bots. `claude-haiku-5-5` costs $0.10/$0.50 per million tokens, against $4/$20 for `claude-opus-5-5`.
- Prompts are cached: the persona, the room history (in steps of 30 messages) and the tool loop. Repeat turns in a busy room mostly bill at the cache-read rate.
- Untagged chatter in a `listen: mentions` channel is stored for context but never sent to the model on its own.
- `weekly_budget_usd` stops every bot once the last 7 days cross the limit.

## Hosting

Any always-on box works: a $5 to $10 VPS (Hetzner, DigitalOcean), Railway, Fly.io or Render with a persistent disk. Cloudflare Workers won't work because Discord needs a long-lived gateway connection. Everything is stored in `data/sigma.db` (SQLite) and `data/workspace/`, so back up `data/`. Run it under `pm2` or systemd, and put the dashboard behind HTTPS (Caddy or Cloudflare Tunnel) before exposing it.
