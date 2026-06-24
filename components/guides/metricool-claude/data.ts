export const METRICOOL_CLAUDE_SLUG = "connect-claude-to-socials";

export const WHATSAPP_CHANNEL_URL =
  "https://whatsapp.com/channel/0029Vb7JkR40AgW6388TnH2g";

export const SETUP_STEPS = [
  {
    title: "Create a Metricool account",
    body: "Go to metricool.com, sign up free, and connect the profiles you want: Instagram, TikTok, Twitter/X, LinkedIn, Facebook, plus your ad accounts.",
  },
  {
    title: "Copy the MCP link",
    body: "Search “Metricool MCP” on Google, open their connector page, scroll down, and copy the MCP link.",
  },
  {
    title: "Open Claude → Connectors",
    body: "In Claude, go to Settings → Connectors. Click Add, then Add custom connector.",
  },
  {
    title: "Name it & paste",
    body: "Name it Metricool, paste the link, save, and authorize when prompted. Done, Claude is now wired into your accounts.",
  },
] as const;

export const PROMPT_CARDS = [
  {
    label: "Find ideas that work",
    text: "Scan the top performing posts about [your niche] from the last week, pull the data, and give me 10 new content ideas based on what's working.",
  },
  {
    label: "Schedule a post",
    text: "Here's a video. Schedule it on Instagram, TikTok, and Twitter tomorrow at my best posting time.",
  },
  {
    label: "Check your numbers",
    text: "Pull my Instagram analytics for the last 30 days and tell me which posts performed best and why.",
  },
  {
    label: "Spy on competitors",
    text: "Look at [competitor handle]'s top posts this month and tell me which themes are getting the most engagement.",
  },
  {
    label: "Find your best time",
    text: "Based on my audience, what are my best posting times for each platform this week?",
  },
] as const;

export const TIPS = [
  {
    lead: "Be specific.",
    rest: "The more detail you give (platform, timing, niche, goal), the better the output.",
  },
  {
    lead: "Glance before it ships.",
    rest: "Check the scheduled post inside Metricool's content calendar so the caption and time look right.",
  },
  {
    lead: "Start with one platform",
    rest: "to get comfortable, then let Claude handle all of them at once.",
  },
  {
    lead: "Heads up:",
    rest: "scheduling support can vary by platform depending on each network's API. If a post doesn't queue, confirm that profile is fully connected inside Metricool.",
  },
] as const;
