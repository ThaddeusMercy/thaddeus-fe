// Copy this file to plugins/<name>.ts (no leading underscore) and restart Sigma.
// Grant it to a bot with `tools: ["plugin:youtube-stats"]`, or `tools: all`.
import type { SigmaPlugin } from "../src/registry.js";

const plugin: SigmaPlugin = {
  name: "youtube-stats",
  description: "Look up public stats for a YouTube channel",
  tools: [
    {
      name: "channel_stats",
      description: "Subscriber, view and video counts for a YouTube channel id.",
      input_schema: {
        type: "object",
        properties: { channel_id: { type: "string", description: "Channel id, starts with UC" } },
        required: ["channel_id"],
      },
      // true = a human approves every call first.
      requires_approval: false,
      async run(input) {
        const key = process.env.YOUTUBE_API_KEY;
        if (!key) return "Set YOUTUBE_API_KEY to use this plugin.";
        const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${encodeURIComponent(String(input.channel_id))}&key=${key}`;
        const data = await (await fetch(url)).json();
        return JSON.stringify(data.items?.[0]?.statistics ?? data);
      },
    },
  ],
};

export default plugin;
