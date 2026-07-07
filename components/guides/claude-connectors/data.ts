export const CLAUDE_CONNECTORS_SLUG = "five-claude-connectors";

export type ConnectorBadge = "directory" | "mcp" | "built";

export type Connector = {
  id: string;
  num: string;
  name: string;
  kicker: string;
  badge: ConnectorBadge;
  tagline: string;
  url?: string;
  urlNote?: string;
  setup: string[];
  prompts: string[];
  tip: string;
};

export const PATCHBAY_PORTS = [
  { id: "gmail", name: "Gmail", num: "01" },
  { id: "higgsfield", name: "Higgsfield", num: "02" },
  { id: "transcriptx", name: "TranscriptX", num: "03" },
  { id: "meta-ads", name: "Meta Ads", num: "04" },
  { id: "canva", name: "Canva", num: "05" },
] as const;

export const PRIMER_STEPS = [
  {
    title: "Open Claude on web or desktop",
    body: "Connector setup is only available on claude.ai or the desktop app. You can use them from mobile afterward, but you wire them up here.",
  },
  {
    title: "Go to Settings → Connectors",
    body: "This is the patchbay. Everything you connect shows up in this list with an on/off state.",
  },
  {
    title: "Pick your path",
    body: "Browse connectors for anything in the directory (Gmail, Canva). Add custom connector to paste an MCP server URL for the rest (Higgsfield, TranscriptX, Meta Ads).",
  },
  {
    title: "Authorize the tool",
    body: "First connection opens a sign-in screen for that service. Approve the scopes and you're linked. Your credentials stay with the tool, not in the chat.",
  },
  {
    title: "Toggle it on inside a chat",
    body: "Open the tools menu in any conversation and switch the connector on. Now just ask Claude in plain language and it uses the connector on its own.",
  },
] as const;

export const CONNECTORS: Connector[] = [
  {
    id: "gmail",
    num: "01",
    name: "Gmail",
    kicker: "Inbox · directory connector",
    badge: "directory",
    tagline:
      "Claude reads, writes and sends email for you. Summaries, drafts in your voice, inbox triage, all from the chat.",
    setup: [
      "In Settings → Connectors, hit Browse connectors.",
      "Find Gmail, click Connect.",
      "Sign in with your Google account and approve access.",
      "Toggle Gmail on in the chat tools menu.",
    ],
    prompts: [
      "Summarize everything in my inbox from today and flag what actually needs a reply.",
      "Draft a reply to the last email from Sarah, in my voice, saying the deck lands Friday.",
      "Find every unread email this week from a real person, not a newsletter.",
    ],
    tip: "Pair Gmail with the Google Calendar and Drive connectors. Then Claude drafts replies that already know your schedule and can attach the right file.",
  },
  {
    id: "higgsfield",
    num: "02",
    name: "Higgsfield",
    kicker: "Image + video · custom MCP",
    badge: "mcp",
    tagline:
      "Generate images, videos and UGC-style ads from all the top image and video models without ever leaving Claude.",
    url: "https://mcp.higgsfield.ai/mcp",
    setup: [
      "In Settings → Connectors, choose Add custom connector.",
      "Paste the URL above and click Add.",
      "Authorize your Higgsfield account when prompted.",
      "Toggle it on in the chat and describe what you want made.",
    ],
    prompts: [
      "Generate 4 UGC-style shots of a skincare bottle held in natural light for an ad.",
      "Turn this product image into a 5-second video with a slow push-in.",
      'Make three thumbnail options for a video titled "I automated my inbox."',
    ],
    tip: "Name the model you want in the prompt. Higgsfield routes across many, and being specific about the look gets you a usable frame far faster than a vague ask.",
  },
  {
    id: "transcriptx",
    num: "03",
    name: "TranscriptX",
    kicker: "Video intelligence · custom MCP",
    badge: "built",
    tagline:
      "Drop a video link and Claude watches the whole thing, then breaks down the hook, the visual layout, why it performed, and any detail you want pulled out.",
    url: "https://transcriptx.xyz/mcp/",
    setup: [
      "In Settings → Connectors, choose Add custom connector.",
      "Paste the URL above and click Add.",
      "Connect your TranscriptX account.",
      "Toggle it on, then paste any video link into the chat.",
    ],
    prompts: [
      "Watch this video and break down the hook, structure, and why it performed: [link]",
      "Transcribe this and pull the 5 strongest content angles I could reuse.",
      "Analyze these 3 competitor videos and tell me the pattern in how they open.",
    ],
    tip: "Point it at your competitors, not your own videos. Feed it the last five things that went viral in your niche and ask for the shared format. That's reverse-engineering, not transcribing.",
  },
  {
    id: "meta-ads",
    num: "04",
    name: "Meta Ads",
    kicker: "Ad ops · custom MCP",
    badge: "mcp",
    tagline:
      "Claude pulls data straight from your ad account, finds trends you'd never spot yourself, and launches campaigns right from the chat.",
    urlNote:
      "Add the Meta Ads MCP server as a custom connector, then authorize with the Meta account that manages your ad account.",
    setup: [
      "In Settings → Connectors, choose Add custom connector.",
      "Paste your Meta Ads MCP server URL and click Add.",
      "Authorize with the Meta account that has admin access to the ad account.",
      "Toggle it on and ask Claude to pull your account.",
    ],
    prompts: [
      "Pull the last 30 days from my ad account and tell me which creatives are actually winning.",
      "Which audiences have the best ROAS this month, and which should I cut?",
      "Draft a new campaign targeting my top-performing audience with 3 ad variations.",
    ],
    tip: "You need admin, not just analyst, access on the ad account for Claude to launch anything. Read-only access still works great for analysis, so start there if you're nervous about it touching live spend.",
  },
  {
    id: "canva",
    num: "05",
    name: "Canva",
    kicker: "Design · directory connector",
    badge: "directory",
    tagline:
      "Tell Claude what you want, hand it your templates, and it builds full brand kits, Instagram carousels and presentations inside your Canva account.",
    setup: [
      "In Settings → Connectors, hit Browse connectors.",
      "Find Canva, click Connect.",
      "Authorize Canva and pick the account or team.",
      "Toggle it on and describe the design you want.",
    ],
    prompts: [
      'Make a 5-slide carousel on "3 AI tools I use daily" using my brand kit.',
      "Turn this outline into a 10-slide presentation in Canva.",
      "Resize my last carousel into a story format and keep the fonts.",
    ],
    tip: "Point Claude at a template first. Give it a design you already like and it matches your brand instead of generating something generic you'll have to fix by hand.",
  },
];

export const BADGE_LABELS: Record<ConnectorBadge, string> = {
  directory: "Directory",
  mcp: "Custom MCP",
  built: "Built by us",
};
