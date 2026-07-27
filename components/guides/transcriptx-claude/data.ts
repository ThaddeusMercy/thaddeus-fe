export const TRANSCRIPTX_CLAUDE_SLUG = "transcriptx-claude-setup";

export const MCP_URL = "https://transcriptx.xyz/mcp/?token=YOUR_TOKEN";
export const TOKEN_PAGE = "https://transcriptx.xyz/account/mcp";
export const GUIDES_PAGE = "https://transcriptx.xyz/account/mcp/guide";

export const MCP_JSON = `{
  "mcpServers": {
    "transcriptx": {
      "url": "https://transcriptx.xyz/mcp/?token=YOUR_TOKEN"
    }
  }
}`;

export const EASY_STEPS = [
  "Open Claude. In the left sidebar, click Customize.",
  "Open the Connectors tab.",
  "Click the + button at the top of the connectors list.",
  "Choose Add custom connector.",
  "Paste your URL (copy the block below).",
  "Save. Claude connects, and the TranscriptX tools show up in your next chat.",
] as const;

export const CONFIG_PATHS = [
  {
    label: "Mac",
    path: "~/Library/Application Support/Claude/claude_desktop_config.json",
  },
  {
    label: "Windows",
    path: "%APPDATA%\\Claude\\claude_desktop_config.json",
  },
] as const;

export const TOOLS = [
  {
    name: "transcribe_url",
    body: "transcribe any public video or audio URL",
    credit: "1 credit",
  },
  {
    name: "watch_url",
    body: "actually watch a video: frames, a timestamped transcript, and engagement numbers",
    credit: "2 credits",
  },
  {
    name: "list_creator_videos",
    body: "list recent videos from a YouTube, TikTok, IG, or Spotify profile",
    credit: "1 credit per 5",
  },
  {
    name: "retry_transcript_language",
    body: "re-run a previous transcript with a forced language",
    credit: "free",
  },
  {
    name: "list_recent_transcripts",
    body: "your recent transcript history",
    credit: "free",
  },
  {
    name: "get_account_status",
    body: "your plan and remaining credits",
    credit: "free",
  },
] as const;

export const WATCH_PROMPTS = [
  "Watch this TikTok and tell me why it got the views it did: <URL>",
  "Watch the first 3 seconds of this Reel and give me a brutal teardown of the hook: <URL>",
  "Watch this ad and list every piece of on-screen text with its timestamp: <URL>",
  "Pull this creator's last 3 videos, watch each one, and tell me what their winning formula is: <PROFILE URL>",
] as const;

export const TRANSCRIBE_PROMPTS = [
  "Transcribe this YouTube video and pull the three best quotes: <URL>",
  "Find Lex Fridman's last 5 episodes and summarize each in two sentences.",
  "Translate this Spanish video's transcript to English: <URL>",
] as const;

export const TROUBLESHOOT = [
  {
    title: 'Connector won\'t save, or "invalid URL".',
    body: "Make sure the URL has /mcp/ before ?token=.",
  },
  {
    title: "Tools don't show up.",
    body: "Start a new chat. If they're still missing, fully quit and relaunch Claude.",
  },
  {
    title: '"Connection refused" or 401.',
    body: "The token is wrong, expired, or revoked. Generate a new one at /account/mcp.",
  },
] as const;
