export const GUIDE_TOOLS = [
  { id: "all", label: "All" },
  { id: "claude", label: "Claude" },
  { id: "chatgpt", label: "ChatGPT" },
  { id: "gemini", label: "Gemini" },
  { id: "canva", label: "Canva" },
  { id: "perplexity", label: "Perplexity" },
  { id: "notion", label: "Notion" },
  { id: "multi-tool", label: "Multi-Tool" },
] as const;

export const GUIDE_TOPICS = [
  { id: "all", label: "All" },
  { id: "news", label: "News" },
  { id: "setup", label: "Setup" },
  { id: "prompts", label: "Prompts" },
  { id: "skills", label: "Skills" },
  { id: "ai-agents", label: "AI Agents" },
  { id: "workflows", label: "Workflows" },
  { id: "creative", label: "Creative" },
  { id: "side-hustles", label: "Side Hustles" },
  { id: "entrepreneurs", label: "Entrepreneurs" },
  { id: "career", label: "Career" },
] as const;

export type GuideToolId = (typeof GUIDE_TOOLS)[number]["id"];
export type GuideTopicId = (typeof GUIDE_TOPICS)[number]["id"];

export type GuideSection = {
  heading: string;
  body?: string;
  prompt?: string;
};

export type GuideEntry = {
  slug: string;
  title: string;
  excerpt: string;
  /** Uppercase label on cards, e.g. SETUP, PROMPTS */
  category: string;
  topic: Exclude<GuideTopicId, "all">;
  tools: Exclude<GuideToolId, "all">[];
  publishedAt: string;
  sections: GuideSection[];
};

export const GUIDE_ENTRIES: GuideEntry[] = [
  {
    slug: "remotion-claude-code-video-editing",
    title: "Remotion × Claude Code — Edit Videos Without a Timeline",
    excerpt:
      "No Premiere, no CapCut. Describe the edit you want and Claude builds it in Remotion — setup, starter prompts, and pro tips from @mercythaddeus_.",
    category: "SETUP",
    topic: "workflows",
    tools: ["claude"],
    publishedAt: "2026-05-27",
    sections: [
      {
        heading: "Before you start",
        body: "You need two things installed before anything else — both are required.\n\nClaude Code — paid Anthropic subscription. Install from claude.com.\n\nNode.js — LTS from nodejs.org.",
      },
      {
        heading: "Step 1 — Create a new Remotion project",
        body: "Open your terminal and run the scaffolding command. Recommended: Blank template, yes to TailwindCSS, yes to installing Skills (gives Claude proper Remotion knowledge).",
        prompt: "npx create-video@latest",
      },
      {
        heading: "Step 2 — Install dependencies and start the preview",
        body: "Navigate into your project folder, install, and start Remotion Studio at localhost:3000. Keep this terminal running.",
        prompt: "cd my-video\nnpm install\nnpm run dev",
      },
      {
        heading: "Step 3 — Open Claude Code in a separate terminal",
        body: "Open a new tab (don't close the preview server), cd into the same project folder, and launch Claude. The preview picks up code changes in real time as Claude writes them.",
        prompt: "cd my-video\nclaude",
      },
      {
        heading: "Prompt — Basic edit",
        body: "Best for: turning raw footage into a polished talking-head + screen recording layout.",
        prompt:
          "Take the video at src/assets/clip.mp4, do a split screen with the screen recording on top and me on the bottom, and add subtitles.",
      },
      {
        heading: "Prompt — Motion graphic from scratch",
        body: "Best for: product explainers, social ads, and YouTube intros. No footage needed.",
        prompt:
          "Create a 15-second explainer video about how Claude Code works. Use smooth text animations, a dark background, and orange accent colors. Add a call to action at the end that says 'Try it free'.",
      },
      {
        heading: "Prompt — Revision",
        body: "Best for: tweaking an existing edit. Describe what's wrong — Claude remembers full context.",
        prompt:
          "Move the subtitles higher so they don't overlap with the Instagram UI. Make the intro 2 seconds shorter. Change the accent color to blue.",
      },
      {
        heading: "Prompt — Branded content",
        body: "Best for: branded social content and product videos with consistent visual identity.",
        prompt:
          "Create a 30-second product showcase. Use my logo at src/assets/logo.png in the top right. Animate each feature with a slide-in from the left. End with the tagline 'Build faster with AI'.",
      },
      {
        heading: "Pro tips",
        body: "1) Put assets in src/assets/ before prompting — reference paths like src/assets/logo.png.\n\n2) The Remotion skill matters: without it Claude guesses timing and safe zones. Always say yes to skills during setup.\n\n3) Iterate by talking, not re-prompting — \"make the text bigger,\" \"slow down the transition,\" \"remove the last 3 seconds.\"\n\n4) Render locally when done — no cloud export fees. Ask Claude to render the final MP4.\n\n5) Paste a style guide (colors, fonts, safe zones) in your first prompt for consistency across a session.\n\n6) Skills install per project — say yes to skills again on every new Remotion project.",
      },
    ],
  },
  {
    slug: "claude-mcps-business-owners",
    title: "The 5 Claude MCPs Every Business Owner Needs",
    excerpt:
      "Every MCP is a door from Claude into a business tool. Five categories that matter for owners — commerce, email, reviews, finance, ops.",
    category: "WORKFLOW",
    topic: "workflows",
    tools: ["claude"],
    publishedAt: "2026-05-15",
    sections: [
      {
        heading: "Start here",
        body: "Don't install 20 connectors on day one. Pick one painful loop: weekly revenue snapshot, campaign performance, or customer feedback digest.",
      },
      {
        heading: "Categories",
        body: "1) Commerce (Shopify). 2) Lifecycle email (Klaviyo). 3) Social proof (Loox/Yotpo). 4) Creator/influencer ops (GRIN). 5) Books (QuickBooks). Verify each connector's read vs write permissions before enabling write access.",
      },
    ],
  },
  {
    slug: "claude-5-step-beginner",
    title: "Set Up Claude In 5 Steps. The Beginner's Guide",
    excerpt:
      "Ten-minute setup: Project, About Me, Custom Instructions, voice, and behavior rules that kill the AI fluff.",
    category: "SETUP",
    topic: "setup",
    tools: ["claude"],
    publishedAt: "2026-05-09",
    sections: [
      {
        heading: "Five steps",
        body: "1) Create a Project for your main workstream. 2) Upload about-me.md (role, audience, banned phrases). 3) Set global instructions (concise, no preamble). 4) Try voice for brainstorming only. 5) Save three winning prompts as Skills.",
      },
      {
        heading: "Behavior rules",
        prompt:
          "No preamble. No hedging unless uncertainty is >30%. Bullet answers under 7 lines unless I ask for depth. Ask one question if scope is ambiguous.",
      },
    ],
  },
];

export function getGuideBySlug(slug: string): GuideEntry | undefined {
  return GUIDE_ENTRIES.find((g) => g.slug === slug);
}

export function guideMatchesTool(
  entry: GuideEntry,
  tool: GuideToolId,
): boolean {
  if (tool === "all") return true;
  return entry.tools.includes(tool);
}

export function guideMatchesTopic(
  entry: GuideEntry,
  topic: GuideTopicId,
): boolean {
  if (topic === "all") return true;
  return entry.topic === topic;
}

export function guideMatchesSearch(entry: GuideEntry, q: string): boolean {
  if (!q.trim()) return true;
  const s = q.trim().toLowerCase();
  return (
    entry.title.toLowerCase().includes(s) ||
    entry.excerpt.toLowerCase().includes(s) ||
    entry.category.toLowerCase().includes(s) ||
    entry.slug.toLowerCase().includes(s) ||
    entry.tools.some((t) => t.includes(s))
  );
}
