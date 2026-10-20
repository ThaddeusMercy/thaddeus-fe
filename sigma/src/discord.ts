import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  ChannelType,
  Client,
  EmbedBuilder,
  Events,
  GatewayIntentBits,
  MessageFlags,
  Partials,
  type Message as DiscordMessage,
  type TextChannel,
  type Webhook,
} from "discord.js";
import { bus } from "./bus.js";
import { approvals, type Approval, type Message } from "./db.js";
import type { Team } from "./team.js";

const PREFIX = "discord:";

/**
 * Discord transport. One Discord app; every Sigma bot speaks through a channel webhook with its own
 * name and avatar, so it looks like separate teammates without a bot token per persona.
 */
export async function startDiscord(team: Team) {
  const token = process.env.DISCORD_TOKEN;
  if (!token) {
    console.log("[sigma] DISCORD_TOKEN not set; Discord is off");
    return;
  }
  const cfg = team.config.discord;
  const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
    partials: [Partials.Channel],
  });
  const webhooks = new Map<string, Webhook>();
  const approvalMessages = new Map<number, DiscordMessage>();

  async function webhookFor(channelId: string): Promise<{ hook: Webhook; threadId?: string } | undefined> {
    const channel = await client.channels.fetch(channelId);
    if (!channel) return;
    const threadId = channel.isThread() ? channel.id : undefined;
    const parent = (channel.isThread() ? channel.parent : channel) as TextChannel | null;
    if (!parent || !("fetchWebhooks" in parent)) return;
    let hook = webhooks.get(parent.id);
    if (!hook) {
      const existing = await parent.fetchWebhooks();
      hook =
        existing.find((w) => w.owner?.id === client.user!.id && w.name === "Sigma") ??
        (await parent.createWebhook({ name: "Sigma", reason: "Sigma teammates speak through this" }));
      webhooks.set(parent.id, hook);
    }
    return { hook, threadId };
  }

  /** Mirror every message that didn't come from Discord into its Discord channel. */
  bus.on("message", async (m: Message) => {
    if (!m.room_id.startsWith(PREFIX) || m.origin === "discord") return;
    try {
      const target = await webhookFor(m.room_id.slice(PREFIX.length));
      if (!target) return;
      const bot = m.author_kind === "bot" ? team.findBot(m.author_id) : undefined;
      for (const chunk of chunks(m.content)) {
        await target.hook.send({
          content: chunk,
          username: m.author_kind === "human" ? `${m.author_name} (web)` : m.author_name,
          avatarURL: bot?.avatar,
          threadId: target.threadId,
          allowedMentions: { parse: [] },
        });
      }
    } catch (err) {
      console.error("[sigma] Discord send failed:", err);
    }
  });

  bus.on("typing", async ({ room_id, active }) => {
    if (!active || !room_id.startsWith(PREFIX)) return;
    const channel = await client.channels.fetch(room_id.slice(PREFIX.length)).catch(() => null);
    if (channel && "sendTyping" in channel) await channel.sendTyping().catch(() => {});
  });

  bus.on("approval", async (a: Approval) => {
    if (!cfg.approvals_channel) return;
    try {
      const existing = approvalMessages.get(a.id);
      if (a.status !== "pending") {
        await existing?.edit({ embeds: [approvalEmbed(a, team)], components: [] });
        approvalMessages.delete(a.id);
        return;
      }
      const channel = (await client.channels.fetch(cfg.approvals_channel)) as TextChannel;
      const row = new ActionRowBuilder<ButtonBuilder>().addComponents(
        new ButtonBuilder().setCustomId(`sigma:approve:${a.id}`).setLabel("Approve").setStyle(ButtonStyle.Success),
        new ButtonBuilder().setCustomId(`sigma:reject:${a.id}`).setLabel("Reject").setStyle(ButtonStyle.Danger),
      );
      const sent = await channel.send({ embeds: [approvalEmbed(a, team)], components: [row] });
      approvalMessages.set(a.id, sent);
    } catch (err) {
      console.error("[sigma] Could not post approval:", err);
    }
  });

  client.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isButton() || !interaction.customId.startsWith("sigma:")) return;
    const [, verb, rawId] = interaction.customId.split(":");
    if (cfg.approvers.length && !cfg.approvers.includes(interaction.user.id)) {
      await interaction.reply({ content: "You're not on the approvers list.", flags: MessageFlags.Ephemeral });
      return;
    }
    await interaction.deferUpdate();
    const decided = await team.decideApproval(Number(rawId), verb === "approve", interaction.user.displayName);
    await interaction.editReply({ embeds: [approvalEmbed(decided, team)], components: [] });
    approvalMessages.delete(decided.id);
  });

  client.on(Events.MessageCreate, async (msg) => {
    if (msg.author.bot || msg.webhookId || !msg.inGuild()) return;
    const channel = msg.channel;
    const parentId = channel.isThread() ? channel.parentId ?? undefined : undefined;
    const roomCfg = cfg.rooms[channel.id] ?? (parentId ? cfg.rooms[parentId] : undefined);
    const roomId = PREFIX + channel.id;
    const known = team.getRoom(roomId);
    const appMentioned = msg.mentions.users.has(client.user!.id);

    let content = msg.content.replace(new RegExp(`<@!?${client.user!.id}>`, "g"), "").trim();
    // Replying to a teammate's message counts as tagging them.
    if (msg.reference?.messageId) {
      const ref = await msg.fetchReference().catch(() => null);
      const bot = ref?.webhookId ? team.findBot(ref.author.username) : undefined;
      if (bot && !team.mentions(content, team.getRoom(roomId) ?? emptyRoom).length) content = `@${bot.name} ${content}`;
    }
    if (!content && !msg.attachments.size) return;
    if (msg.attachments.size) {
      content += "\n" + [...msg.attachments.values()].map((a) => `[attachment: ${a.name} ${a.url}]`).join("\n");
    }

    // Only answer where Sigma has been invited: configured channels, groups it created, or a direct @Sigma.
    if (!roomCfg && !known && !appMentioned) return;
    const isOperator = !cfg.operators.length || cfg.operators.includes(msg.author.id);
    if (!isOperator && !roomCfg?.public) return;

    const room = team.ensureRoom(roomId, {
      name: "name" in channel && channel.name ? `#${channel.name}` : roomId,
      kind: known?.kind ?? "channel",
      parentId,
    });
    const listenAll = room.kind === "group" || roomCfg?.listen === "all";
    const tagged = team.mentions(content, room).length > 0;
    if (!listenAll && !tagged && !appMentioned) {
      // Still keep the message so bots have context when they are tagged later.
      team.post(room.id, {
        author_kind: "human",
        author_id: msg.author.id,
        author_name: msg.member?.displayName ?? msg.author.username,
        content,
        origin: "discord",
      });
      return;
    }
    await team.handleHuman(room.id, { id: msg.author.id, name: msg.member?.displayName ?? msg.author.username }, content, "discord");
  });

  // Groups bots create become threads in the groups channel.
  if (cfg.groups_channel) {
    team.groupFactory = async (name) => {
      const channel = (await client.channels.fetch(cfg.groups_channel!)) as TextChannel;
      const thread = await channel.threads.create({ name: name.slice(0, 100), autoArchiveDuration: 10080 });
      return PREFIX + thread.id;
    };
  }

  registerDiscordTools(team, client);
  await client.login(token);
  await new Promise<void>((resolve) => client.once(Events.ClientReady, () => resolve()));
  console.log(`[sigma] Discord connected as ${client.user!.tag}`);

  // Re-post approvals that were waiting while Sigma was offline.
  for (const a of approvals.list("pending")) bus.emit("approval", a);
  return client;
}

/** Server-management tools for bots granted "discord". Role changes and DMs go through approval. */
function registerDiscordTools(team: Team, client: Client) {
  const reg = team.registry;
  reg.describeGroup("discord", "Read channels, create threads, DM members and manage roles in Discord");
  const obj = (properties: Record<string, object>, required = Object.keys(properties)) => ({
    type: "object" as const,
    properties,
    required,
    additionalProperties: false,
  });
  const str = (description: string) => ({ type: "string", description });
  const guild = () => {
    const id = process.env.DISCORD_GUILD_ID;
    const g = id ? client.guilds.cache.get(id) : client.guilds.cache.first();
    if (!g) throw new Error("Sigma isn't in a Discord server (or DISCORD_GUILD_ID is wrong)");
    return g;
  };

  reg.add({
    group: "discord",
    def: { name: "discord_list_channels", description: "List text channels in the Discord server.", input_schema: obj({}) },
    requiresApproval: () => false,
    run: async () => {
      const channels = await guild().channels.fetch();
      return [...channels.values()]
        .filter((c) => c && (c.type === ChannelType.GuildText || c.type === ChannelType.GuildAnnouncement))
        .map((c) => `discord:${c!.id} · #${c!.name}${c!.parent ? ` (${c!.parent.name})` : ""}`)
        .join("\n");
    },
  });

  reg.add({
    group: "discord",
    def: {
      name: "discord_read_channel",
      description: "Read the latest messages from any Discord channel or thread.",
      input_schema: obj({ channel_id: str("Channel id (with or without the discord: prefix)"), limit: { type: "integer", description: "1-100" } }, ["channel_id"]),
    },
    requiresApproval: () => false,
    run: async (input) => {
      const channel = await client.channels.fetch(String(input.channel_id).replace(PREFIX, ""));
      if (!channel || !("messages" in channel)) return "Not a text channel.";
      const msgs = await channel.messages.fetch({ limit: Math.min(100, Number(input.limit) || 30) });
      return [...msgs.values()]
        .reverse()
        .map((m) => `[${m.createdAt.toISOString()}] ${m.member?.displayName ?? m.author.username} (${m.author.id}): ${m.content}`)
        .join("\n");
    },
  });

  reg.add({
    group: "discord",
    def: {
      name: "discord_create_thread",
      description: "Create a thread in a channel and add it to Sigma as a room. Returns the room id.",
      input_schema: obj({ channel_id: str("Parent channel id"), name: str("Thread name") }),
    },
    requiresApproval: () => false,
    run: async (input, ctx) => {
      const channel = (await client.channels.fetch(String(input.channel_id).replace(PREFIX, ""))) as TextChannel;
      const thread = await channel.threads.create({ name: String(input.name).slice(0, 100), autoArchiveDuration: 10080 });
      const room = team.ensureRoom(PREFIX + thread.id, { name: String(input.name), kind: "group", bots: [ctx.bot.id] });
      return `Created ${room.id}. Post there with post_to_room.`;
    },
  });

  reg.add({
    group: "discord",
    def: {
      name: "discord_find_member",
      description: "Search server members by name. Returns ids and roles.",
      input_schema: obj({ query: str("Name or part of it") }),
    },
    requiresApproval: () => false,
    run: async (input) => {
      const found = await guild().members.search({ query: String(input.query), limit: 10 });
      if (!found.size) return "No members match.";
      return [...found.values()]
        .map((m) => `${m.id} · ${m.displayName} (@${m.user.username}) · roles: ${m.roles.cache.filter((r) => r.name !== "@everyone").map((r) => r.name).join(", ") || "none"}`)
        .join("\n");
    },
  });

  reg.add({
    group: "discord",
    def: {
      name: "discord_set_role",
      description: "Give or remove a role from a member. Needs approval.",
      input_schema: obj({
        user_id: str("Member id"),
        role: str("Role name or id"),
        give: { type: "boolean", description: "true to add, false to remove" },
      }),
    },
    requiresApproval: () => true,
    run: async (input) => {
      const g = guild();
      const roles = await g.roles.fetch();
      const role = roles.get(String(input.role)) ?? roles.find((r) => r.name.toLowerCase() === String(input.role).toLowerCase());
      if (!role) return `No role ${input.role}.`;
      const member = await g.members.fetch(String(input.user_id));
      if (input.give) await member.roles.add(role, "Sigma (approved)");
      else await member.roles.remove(role, "Sigma (approved)");
      return `${input.give ? "Gave" : "Removed"} ${role.name} ${input.give ? "to" : "from"} ${member.displayName}.`;
    },
  });

  reg.add({
    group: "discord",
    def: {
      name: "discord_dm",
      description: "Send a direct message to a member from the Sigma app. Needs approval.",
      input_schema: obj({ user_id: str("Member id"), message: str("Message text") }),
    },
    requiresApproval: () => true,
    run: async (input, ctx) => {
      const user = await client.users.fetch(String(input.user_id));
      await user.send(`**${ctx.bot.name}**: ${String(input.message)}`);
      return `DM sent to ${user.username}.`;
    },
  });
}

const emptyRoom = { id: "", name: "", kind: "channel" as const, bots: [], owners: {}, created_by: null, created_at: "" };

function approvalEmbed(a: Approval, team: Team) {
  const bot = team.findBot(a.bot_id);
  const color = a.status === "pending" ? 0xf5a524 : a.status === "approved" ? 0x17c964 : 0xf31260;
  const input = JSON.stringify(JSON.parse(a.input), null, 2);
  const embed = new EmbedBuilder()
    .setColor(color)
    .setTitle(`#${a.id} · ${a.action}`)
    .setAuthor({ name: bot?.name ?? a.bot_id, iconURL: bot?.avatar })
    .setDescription("```json\n" + input.slice(0, 3800) + "\n```")
    .addFields({ name: "Room", value: a.room_id, inline: true }, { name: "Status", value: a.status, inline: true });
  if (a.decided_by) embed.addFields({ name: "Decided by", value: a.decided_by, inline: true });
  if (a.result) embed.addFields({ name: "Result", value: a.result.slice(0, 1000) });
  return embed;
}

function chunks(text: string, size = 1900) {
  const out: string[] = [];
  let rest = text;
  while (rest.length > size) {
    let cut = rest.lastIndexOf("\n", size);
    if (cut < size / 2) cut = size;
    out.push(rest.slice(0, cut));
    rest = rest.slice(cut).trimStart();
  }
  if (rest) out.push(rest);
  return out;
}
