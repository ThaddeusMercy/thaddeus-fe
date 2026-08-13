export const SLUG = "omniroute";

export const OFFICIAL_LINKS = [
  {
    label: "GitHub page",
    href: "https://github.com/diegosouzapw/OmniRoute",
  },
  {
    label: "Quick start guide",
    href: "https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.50/docs/getting-started/QUICK-START.md",
  },
  {
    label: "Claude Code setup guide",
    href: "https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.50/docs/guides/CLAUDE-CODE-CONFIGURATION.md",
  },
] as const;

export const CAPABILITIES = [
  "One local gateway for different AI providers",
  "Automatic switching when a provider is unavailable or out of quota",
  "A dashboard for models, providers, requests, and usage",
  "Support for Claude Code, Codex, Cursor, OpenCode, Cline, Copilot, and other compatible tools",
  "Prompt and tool-output compression",
  "Profiles for different models and tasks",
  "One local API address that other tools can use",
] as const;

export const USAGE_DEPENDS = [
  "The providers you connect",
  "Their current limits",
  "Whether they are free or paid",
  "Model availability",
  "Your routing settings",
  "Your internet connection",
] as const;

export const REQUIREMENTS = [
  "A computer",
  "Node.js and npm",
  "A terminal",
  "Claude Code or another supported coding tool",
  "At least one AI provider",
] as const;

export const NPM_INSTALL = "npm install -g omniroute";

export const START = "omniroute";

export const DASHBOARD_URL = "http://localhost:20128";

export const CURL_TEST = `curl http://localhost:20128/v1/models -H "Authorization: Bearer YOUR_KEY"`;

export const LAUNCH = "omniroute launch";

export const SETUP_CLAUDE = "omniroute setup-claude";

export const LAUNCH_PROFILE = "omniroute launch --profile PROFILE_NAME";

export const NODE_CHECK = `node --version
npm --version`;

export const PROVIDER_STEPS = [
  "Open Providers.",
  "Click Add Provider.",
  "Choose a provider.",
  "Follow the login or API key steps.",
] as const;

export const SWITCHING_TIPS = [
  "Connect more than one provider",
  "Put your preferred provider first",
  "Group models with similar quality when you want more consistent results",
  "Test the route with a small task before using it on an important project",
] as const;

export const COMPRESSION_USEFUL = [
  "Long logs",
  "Repeated project details",
  "Large tool outputs",
  "Old messages that no longer matter",
  "Instructions that appear several times",
] as const;

export const OTHER_TOOLS = [
  "Codex",
  "Cursor",
  "OpenCode",
  "Cline",
  "Copilot",
  "Aider",
  "Continue",
  "Roo Code",
] as const;

export const SECURITY_NOTES = [
  "Read its privacy rules",
  "Do not send passwords, private keys, or customer secrets",
  "Remove private data from code and logs when possible",
  "Keep your API keys private",
  "Add spending limits to paid providers",
  "Check which provider handled a sensitive request",
  "Only connect accounts and keys you own",
] as const;

export const FAQS = [
  {
    q: "Is OmniRoute free?",
    a: "The OmniRoute software is free and open source. Some providers are free, while others use paid API credits or subscriptions.",
  },
  {
    q: "Does it give me unlimited Claude Code?",
    a: "No. It can combine several available routes and move between them, which may give you much more total usage. Every provider still has its own limits.",
  },
  {
    q: "Do I need an Anthropic account?",
    a: "Not always. OmniRoute can send Claude Code requests to compatible models from other providers. The result depends on the model you choose.",
  },
  {
    q: "Will every model work exactly like Claude?",
    a: "No. Models can write different code, use tools differently, and follow instructions differently.",
  },
  {
    q: "Can I use it for private company code?",
    a: "Only after you check the privacy rules for every provider in your route. Remove secrets and use only providers your company has approved.",
  },
] as const;
