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
  /** Full-bleed document layout instead of standard post view */
  layout?: "document";
};

export const GUIDE_ENTRIES: GuideEntry[] = [
  {
    slug: "how-to-set-up-claude",
    title: "How to Set Up Claude",
    excerpt:
      "A thirty minute setup that changes how Claude works for you. Custom instructions, projects, connectors, scheduled tasks and skills.",
    category: "SETUP",
    topic: "setup",
    tools: ["claude"],
    publishedAt: "2026-08-05",
    layout: "document",
    sections: [
      {
        heading: "How to Set Up Claude",
        body: "The five things to do first: custom instructions, projects, connectors, scheduled tasks, and one reusable skill.",
      },
    ],
  },
  {
    slug: "3-prompts-better-ai-results",
    title: "3 Prompts That Get You Better AI Results",
    excerpt:
      "A practical guide to getting better context, stronger evidence, and a better second draft from ChatGPT or Claude.",
    category: "PROMPTS",
    topic: "prompts",
    tools: ["chatgpt", "claude", "multi-tool"],
    publishedAt: "2026-08-04",
    layout: "document",
    sections: [
      {
        heading: "3 Prompts That Get You Better AI Results",
        body: "Ask questions first, research and fact-check, then grade-critique-revise — plus a master prompt that combines all three.",
      },
    ],
  },
  {
    slug: "5-ai-tools-worth-your-money",
    title: "5 AI Tools That Are Actually Worth Your Money",
    excerpt:
      "How I use Claude Max, ChatGPT Pro, Higgsfield, Apify and OpenRouter, what they cost, and who should skip them.",
    category: "SETUP",
    topic: "setup",
    tools: ["claude", "chatgpt", "multi-tool"],
    publishedAt: "2026-08-03",
    layout: "document",
    sections: [
      {
        heading: "5 AI Tools That Are Actually Worth Your Money",
        body: "How I use Claude Max, ChatGPT Pro, Higgsfield, Apify and OpenRouter, what they cost, and who should skip them.",
      },
    ],
  },
  {
    slug: "ai-influencer-three-files",
    title: "The Three File System for Building an AI Influencer",
    excerpt:
      "persona.md, brain.md, and offers.md — the full system, prompts, tools stack, and growth plan for an AI influencer that stays consistent.",
    category: "SETUP",
    topic: "ai-agents",
    tools: ["claude", "multi-tool"],
    publishedAt: "2026-07-30",
    layout: "document",
    sections: [
      {
        heading: "The Three File System for Building an AI Influencer",
        body: "Three files an agent reads before it writes: persona, brain, offers. Includes setup interview, downloadable templates, tools, and growth.\n\nhttps://attentionfactory.io\n\nhttps://instagram.com/mercythaddeus_",
      },
    ],
  },
  {
    slug: "humanize-setup",
    title: "Make Your AI Stop Writing Like an AI",
    excerpt:
      "Set up the Humanize skill from Wikipedia's Signs of AI writing — Claude skill upload, DIY build prompt, and a ChatGPT/Gemini custom-instructions version.",
    category: "SETUP",
    topic: "skills",
    tools: ["claude", "chatgpt", "gemini", "multi-tool"],
    publishedAt: "2026-07-29",
    layout: "document",
    sections: [
      {
        heading: "Make Your AI Stop Writing Like an AI",
        body: "Humanize setup guide: Claude skill steps, DIY Wikipedia-to-skill prompt, custom instructions for ChatGPT and Gemini, and a four-point check.\n\nhttps://attentionfactory.io\n\nhttps://instagram.com/mercythaddeus_",
      },
    ],
  },
  {
    slug: "edit-videos-with-claude",
    title: "Edit Your Videos with Claude: the Remotion Setup Guide",
    excerpt:
      "Full Remotion + Claude Code setup in ~20 minutes — install prompts, silence cuts, captions, motion graphics, revisions, and what to do when it breaks.",
    category: "SETUP",
    topic: "setup",
    tools: ["claude"],
    publishedAt: "2026-07-28",
    layout: "document",
    sections: [
      {
        heading: "Edit Your Videos with Claude: the Remotion Setup Guide",
        body: "Remotion setup for Claude Code with copy-ready install prompts, edit prompts, troubleshooting, and pricing notes.\n\nhttps://attentionfactory.io\n\nhttps://instagram.com/mercythaddeus_",
      },
    ],
  },
  {
    slug: "transcriptx-claude-setup",
    title: "TranscriptX Inside Claude — Setup Guide",
    excerpt:
      "Add TranscriptX as a Claude custom connector in about a minute — Connectors UI + Desktop JSON config, six tools, copy-ready watch/transcribe prompts, and troubleshooting.",
    category: "SETUP",
    topic: "setup",
    tools: ["claude"],
    publishedAt: "2026-07-27",
    layout: "document",
    sections: [
      {
        heading: "TranscriptX Inside Claude — Setup Guide",
        body: "Get any video's transcript directly inside Claude. Custom connector setup for Desktop and claude.ai, MCP URL with token, JSON config, tools, and prompts.\n\nhttps://transcriptx.xyz\n\nhttps://attentionfactory.io\n\nhttps://instagram.com/mercythaddeus_",
      },
    ],
  },
  {
    slug: "100-chatgpt-secret-codes",
    title: "100 ChatGPT Secret Codes",
    excerpt:
      "One hundred short phrases you drop into any ChatGPT prompt for sharper answers — truth, thinking, writing, ops, research, Canvas, Work, and Sol/Terra/Luna routing.",
    category: "PROMPTS",
    topic: "prompts",
    tools: ["chatgpt"],
    publishedAt: "2026-07-20",
    layout: "document",
    sections: [
      {
        heading: "100 ChatGPT Secret Codes",
        body: "The ChatGPT twin of Thirty Claude Codes — 100 short codes with copy-ready examples across truth, thinking, blind spots, learning, writing, ops, research, building, content, and agent power moves.\n\nhttps://attentionfactory.io\n\nhttps://instagram.com/mercythaddeus_",
      },
    ],
  },
  {
    slug: "vet-ai-skills",
    title: "Vet Any AI Skill Before You Install It",
    excerpt:
      "A 30-second security check for marketplace skills: three questions, a copy-ready review prompt that treats skills as untrusted data, and a tailor-and-save prompt for versions that passed.",
    category: "SETUP",
    topic: "skills",
    tools: ["claude"],
    publishedAt: "2026-07-15",
    layout: "document",
    sections: [
      {
        heading: "Vet Any AI Skill Before You Install It",
        body: "Field guide to reviewing AI skills before install — paste into a plain chat, run the security-review prompt, then tailor only if it comes back clean. Includes the redirect/swap attack pattern and two copy-ready prompts.\n\nhttps://attentionfactory.io\n\nhttps://instagram.com/mercythaddeus_",
      },
    ],
  },
  {
    slug: "chatgpt-upgrade-playbook",
    title: "The ChatGPT Upgrade You Can Actually Use",
    excerpt:
      "GPT-5.6 Sol, Terra, and Luna — plus ChatGPT Work and Sites. Model routing, copy-ready agent tasks, Sites prompts, and a 30-minute setup.",
    category: "SETUP",
    topic: "setup",
    tools: ["chatgpt", "multi-tool"],
    publishedAt: "2026-07-14",
    layout: "document",
    sections: [
      {
        heading: "The ChatGPT Upgrade You Can Actually Use",
        body: "Field guide to GPT-5.6 tiers, ChatGPT Work agent tasks, Sites publishing, and the 30-minute setup — with exact prompts to run today.\n\nhttps://attentionfactory.io\n\nhttps://instagram.com/mercythaddeus_",
      },
    ],
  },
  {
    slug: "fable-five-prompts",
    title: "The 3 Prompts I'd Run Before Fable 5 Goes",
    excerpt:
      "Three one-shot Fable 5 prompts aligned with Anthropic's long-run scaffolding: audit your setup, security review, and build a months-long asset before July 12.",
    category: "PROMPTS",
    topic: "prompts",
    tools: ["claude"],
    publishedAt: "2026-07-08",
    layout: "document",
    sections: [
      {
        heading: "The 3 Prompts I'd Run Before Fable 5 Goes",
        body: "Three copy-ready prompts for Fable 5: audit and upgrade every skill, MCP, and workflow; run a full security audit; build a big project or plan you can run for months on cheaper models after July 12.\n\nhttps://attentionfactory.io\n\nhttps://instagram.com/mercythaddeus_",
      },
    ],
  },
  {
    slug: "five-claude-connectors",
    title: "5 Claude Connectors That Put You Ahead of 99%",
    excerpt:
      "Full setup for Gmail, Higgsfield, TranscriptX, Meta Ads, and Canva — connect paths, MCP URLs, copy-ready prompts, and the one thing most people miss on each.",
    category: "SETUP",
    topic: "setup",
    tools: ["claude", "canva", "multi-tool"],
    publishedAt: "2026-07-07",
    layout: "document",
    sections: [
      {
        heading: "5 Claude Connectors That Put You Ahead of 99%",
        body: "Without connectors you're running Claude at 10% capacity. Field guide for wiring Gmail, Higgsfield, TranscriptX, Meta Ads, and Canva — primer steps, URLs, prompts, and pro tips.\n\nhttps://transcriptx.xyz\n\nhttps://attentionfactory.io\n\nhttps://instagram.com/mercythaddeus_",
      },
    ],
  },
  {
    slug: "claude-goal-command",
    title: "The /Goal Command",
    excerpt:
      "The prompt pattern that makes Claude keep working until the job is actually done — success conditions, self-checks, guardrails, and three copy-ready templates.",
    category: "PROMPTS",
    topic: "prompts",
    tools: ["claude"],
    publishedAt: "2026-07-06",
    layout: "document",
    sections: [
      {
        heading: "The /Goal Command",
        body: "A field guide to the prompt pattern that turns Claude from one-shot replies into a loop: act, check, repeat until done. Covers anatomy, Claude chat vs Claude Code, generic and ready-made templates, when to use it, and failure modes.\n\nhttps://attentionfactory.io/launch\n\nhttps://instagram.com/mercythaddeus_",
      },
    ],
  },
  {
    slug: "six-claude-content-skills",
    title: "6 Claude Skills You Can Steal",
    excerpt:
      "The six skills that run my content — Trend Finder, Script Writer, Carousel Builder, Caption Engine, Newsletter Engine, and Analyzer. Copy, paste, fill the brackets, go.",
    category: "SKILLS",
    topic: "skills",
    tools: ["claude"],
    publishedAt: "2026-06-26",
    layout: "document",
    sections: [
      {
        heading: "6 Claude Skills You Can Steal",
        body: "The actual skills that run my content. Six copy-ready instruction sets: Trend Finder, Script Writer, Carousel Builder, Caption Engine, Newsletter Engine, and Analyzer. Paste into Claude or save in a Project, fill in the brackets, and go.\n\nhttps://attentionfactory.io/launch\n\nhttps://instagram.com/mercythaddeus_",
      },
    ],
  },
  {
    slug: "design-with-claude-canva",
    title: "Make Designs by Just Chatting With Claude",
    excerpt:
      "Connect Canva to Claude once, then describe what you want — carousels, flyers, banners and posters built in your brand style, no template hunting.",
    category: "WORKFLOWS",
    topic: "creative",
    tools: ["claude", "canva"],
    publishedAt: "2026-06-25",
    layout: "document",
    sections: [
      {
        heading: "Make designs by just chatting with Claude",
        body: "AI Series Part 7. Connect Canva to Claude via Connectors, then describe a design and it builds carousels, flyers, banners and posters in your brand style. Three copy-ready prompts included.\n\nhttps://attentionfactory.io/launch\n\nhttps://instagram.com/mercythaddeus_",
      },
    ],
  },
  {
    slug: "claude-tag-playbook",
    title: "The Claude Tag Playbook",
    excerpt:
      "Anthropic turned Claude into a shared teammate that lives in Slack. How Claude Tag works, how to set it up, and how to make your team actually use it.",
    category: "NEWS",
    topic: "ai-agents",
    tools: ["claude"],
    publishedAt: "2026-06-25",
    layout: "document",
    sections: [
      {
        heading: "The Claude Tag Playbook",
        body: "How to put Claude inside your team. What Claude Tag is, why it's different from a Slack bot, the four-step admin setup, team playbooks, governance, and the migration deadline.\n\nhttps://attentionfactory.io/launch\n\nhttps://instagram.com/mercythaddeus_",
      },
    ],
  },
  {
    slug: "connect-claude-to-socials",
    title: "Connect Claude to All Your Socials",
    excerpt:
      "Wire Claude into Metricool with one MCP connector — then schedule posts, read analytics, find your best times, and study competitors, all from one chat.",
    category: "SETUP",
    topic: "workflows",
    tools: ["claude", "multi-tool"],
    publishedAt: "2026-06-24",
    layout: "document",
    sections: [
      {
        heading: "Connect Claude to all your socials",
        body: "AI Content Series Part 6. Connect Metricool to Claude via MCP, then schedule posts, pull analytics, find best posting times, and study competitors from one chat.\n\nhttps://attentionfactory.io/launch\n\nhttps://instagram.com/mercythaddeus_",
      },
    ],
  },
  {
    slug: "anime-storyboard-to-video",
    title: "Anime Storyboard to Video",
    excerpt:
      "Turn a single idea into a full anime scene — lock character and location in ChatGPT, build a 16-panel storyboard, then animate it with Higgsfield Seedance.",
    category: "WORKFLOWS",
    topic: "creative",
    tools: ["chatgpt", "multi-tool"],
    publishedAt: "2026-06-18",
    layout: "document",
    sections: [
      {
        heading: "Anime Storyboard to Video",
        body: "AI Content Series Part 5. Character sheet, location sheet, storyboard, and 15-second video with ChatGPT + Higgsfield Seedance.\n\nhttps://attentionfactory.io/launch\n\nhttps://instagram.com/mercythaddeus_",
      },
    ],
  },
  {
    slug: "ai-clone-method",
    title: "The AI Clone Method",
    excerpt:
      "Shoot content without a camera — clone yourself in Nano Banana Pro, animate with Claude + Veo 3 JSON prompts, and scale to 3–5 posts a day.",
    category: "WORKFLOWS",
    topic: "creative",
    tools: ["claude", "gemini", "multi-tool"],
    publishedAt: "2026-05-26",
    layout: "document",
    sections: [
      {
        heading: "The AI Clone Method",
        body: "Build a realistic version of yourself once, place it in any scene, animate with spoken dialogue and lip sync. Master clone prompt, 3 ready-to-use scenes, Claude Veo 3 JSON workflow, and scaling tips.\n\nhttps://attentionfactory.io\n\nhttps://instagram.com/mercythaddeus_",
      },
    ],
  },
  {
    slug: "build-your-ai-influencer",
    title: "Build Your Own AI Influencer",
    excerpt:
      "The exact workflow and prompts to create a consistent AI character, place her in any scene, and bring her to life on video. 22 ready-to-paste scene prompts included.",
    category: "PROMPTS",
    topic: "creative",
    tools: ["chatgpt", "gemini", "multi-tool"],
    publishedAt: "2026-06-03",
    layout: "document",
    sections: [
      {
        heading: "Build Your Own AI Influencer",
        body: "30 Days of AI Content Part 1. Foundation face, Flow/Nano Banana, scene placement, Veo 3 video, and 22 scene prompts.\n\nhttps://attentionfactory.io/launch\n\nhttps://instagram.com/mercythaddeus_",
      },
    ],
  },
  {
    slug: "thirty-claude-codes",
    title: "Thirty Claude Codes",
    excerpt:
      "Thirty short codes you drop into any Claude prompt for 10x sharper answers — with a copy-ready example for each.",
    category: "PROMPTS",
    topic: "prompts",
    tools: ["claude"],
    publishedAt: "2026-06-08",
    layout: "document",
    sections: [
      {
        heading: "Thirty Claude Codes",
        body: "Thirty short phrases you add to any Claude prompt to pull 10x sharper answers. Each code comes with a copy-ready example. Use them for truth, sharper thinking, blind spots, learning, and shipping work.\n\nhttps://attentionfactory.io\n\nhttps://instagram.com/mercythaddeus_",
      },
    ],
  },
  {
    slug: "ai-certifications-weekend",
    title: "AI Certifications You Can Finish This Weekend",
    excerpt:
      "Five free or low-cost AI certifications — from Google, DeepLearning.AI, IBM, Microsoft, and Anthropic — you can actually finish in a weekend and add to LinkedIn. Plus one bonus that goes beyond theory.",
    category: "CAREER",
    topic: "career",
    tools: ["multi-tool"],
    publishedAt: "2026-06-05",
    layout: "document",
    sections: [
      {
        heading: "AI Certifications You Can Finish This Weekend",
        body: "Four self-paced AI certifications: Microsoft & LinkedIn Career Essentials in Generative AI, Elements of AI (University of Helsinki), Google AI Essentials, and Google Prompting Essentials.\n\nhttps://attentionfactory.io\n\nhttps://instagram.com/mercythaddeus_",
      },
    ],
  },
  {
    slug: "heygen-video-translate",
    title: "How to Make a Video of Yourself Speaking Any Language",
    excerpt:
      "Turn one video into 175+ languages with HeyGen — your own voice, synced lips, no reshoots. Free step-by-step tutorial.",
    category: "SETUP",
    topic: "creative",
    tools: ["multi-tool"],
    publishedAt: "2026-06-03",
    layout: "document",
    sections: [
      {
        heading: "HeyGen Video Translate",
        body: "Free tutorial: translate your video into 175+ languages with voice clone and lip sync. 7 steps from signup to download.\n\nhttps://heygen.com\n\nhttps://instagram.com/mercythaddeus_",
      },
    ],
  },
  {
    slug: "3-prompts-stop-ai-lying",
    title: "The 3 Prompts That Stop AI From Lying To You",
    excerpt:
      "Three one-line fixes for hallucination, bias, and sycophancy — plus exactly where to paste them in Claude and ChatGPT so they run on every chat.",
    category: "PROMPTS",
    topic: "prompts",
    tools: ["claude", "chatgpt", "multi-tool"],
    publishedAt: "2026-06-03",
    layout: "document",
    sections: [
      {
        heading: "The 3 Prompts That Stop AI From Lying To You",
        body: "Fix hallucination, bias, and sycophancy with three prompts. Set once in Claude or ChatGPT settings or project instructions.\n\nhttps://instagram.com/mercythaddeus_",
      },
    ],
  },
  {
    slug: "30-day-ai-roadmap",
    title: "The 30-Day AI Roadmap",
    excerpt:
      "From zero to a portfolio of real AI projects. One focused task a day — the exact path bootcamp fellows followed to ship apps, sites, and agents in weeks.",
    category: "CAREER",
    topic: "career",
    tools: ["multi-tool"],
    publishedAt: "2026-06-03",
    layout: "document",
    sections: [
      {
        heading: "The 30-Day AI Roadmap",
        body: "Five phases: Get fluent with AI, Create with AI, Build real software, Automate and build agents, Ship your portfolio.\n\nhttps://attentionfactory.io/launch\n\nhttps://instagram.com/mercythaddeus_",
      },
    ],
  },
  {
    slug: "markitdown-mcp-claude-setup",
    title: "Stop Wasting 70% of Your Tokens in Claude",
    excerpt:
      "A 5-minute setup that turns every PDF, Word doc, slide deck, spreadsheet, and YouTube link into clean Markdown the moment you upload it. Lower token usage, faster responses, sharper answers.",
    category: "SETUP",
    topic: "setup",
    tools: ["claude", "multi-tool"],
    publishedAt: "2026-06-01",
    layout: "document",
    sections: [
      {
        heading: "MarkItDown MCP setup",
        body: "Stop wasting 70% of your tokens in Claude. Install markitdown-mcp, connect to Claude Desktop, convert PDFs Word docs slide decks spreadsheets and YouTube links to Markdown.\n\nhttps://github.com/microsoft/markitdown\n\nhttps://claude.ai/download\n\nhttps://instagram.com/mercythaddeus_",
      },
    ],
  },
  {
    slug: "the-ai-job-map",
    title: "The AI Job Map",
    excerpt:
      "Your 30-day roadmap and portfolio templates for the 8 jobs AI is creating right now. Pick one role, build proof, get paid.",
    category: "CAREER",
    topic: "career",
    tools: ["multi-tool"],
    publishedAt: "2026-05-26",
    layout: "document",
    sections: [
      {
        heading: "The AI Job Map",
        body: "Your 30-day roadmap and portfolio templates for the 8 jobs AI is creating right now.\n\nRoles: Claude Skills & Custom Project Builder, AI Operations Manager, AI Content Strategist, AI Customer Success, No-Code AI Builder, AI Agent & Automation Engineer, AI Solutions Architect, AI Workflow Designer.\n\nIncludes portfolio templates: Proof Case Study, Build-in-Public Post, Cold Pitch, 90-Day Doc.\n\nhttps://attentionfactory.io\n\nhttps://instagram.com/mercythaddeus",
      },
    ],
  },
  {
    slug: "understanding-claude-modes",
    title: "Understanding Claude Modes",
    excerpt:
      "Chat, Cowork & Code — three tools, three jobs. What each one is actually for, and how they become a full system when you run them together.",
    category: "SETUP",
    topic: "setup",
    tools: ["claude"],
    publishedAt: "2026-05-30",
    sections: [
      {
        heading: "Chat, Cowork & Code — the full Claude system",
        body: "A field guide by Attention Factory\n\nThree tools, three jobs. Most people use one and stop there. This guide shows what each one is actually for, and what happens when you run them together.\n\n• Claude Chat — Think — brainstorming, drafts, thinking out loud\n• Claude Cowork — Organize — work across your files and apps\n• Claude Code — Build — describe it in plain English, get a working tool",
      },
      {
        heading: "The one mental model to keep",
        body: "If you remember nothing else: Chat to think, Cowork to organize, Code to build.\n\nAll three run on the same Claude underneath — equally smart. What changes is how much they can touch and how much they can do on their own.\n\nChat lives in a conversation. Cowork steps out of the chat and onto your computer, working with your real files and apps. Code goes one level deeper and builds new things from scratch.",
      },
      {
        heading: "01 — Claude Chat (Think)",
        body: "Anything you would hand to a sharp junior person to figure out.\n\nThis is the Claude most people already know. You open the app or website, type, and get answers back. Nothing happens to your computer and nothing gets built. The output lives inside the chat.\n\nWhere it lives: Web, mobile, and desktop app.\nWhat it touches: Just the conversation — what you paste or upload.\nHow it works: Back and forth. You ask, it answers, you steer.\nBest for: Thinking, drafting, learning, and quick analysis.\n\nWhat it is great at:\n• Brainstorming angles, names, hooks, and directions\n• Drafting copy, emails, scripts, outlines, and first versions\n• Explaining hard things simply, or teaching at your pace\n• Pressure-testing decisions out loud\n• Reading a document or image and pulling out what matters\n\nReal-life examples:\n• Creator: \"Give me 10 hook ideas for a reel on AI tools, then write the strongest one as a 45 second script.\"\n• Founder: \"Here is my rough pitch. Poke holes in it and tell me what an investor would push back on.\"\n• Learner: \"Explain how APIs work like I am completely new, then quiz me on it.\"\n\nWorth knowing: Chat cannot reach into your computer, send things for you, or build a working tool. When a task needs Claude to actually do something with your files or apps, you have outgrown Chat.",
      },
      {
        heading: "02 — Claude Cowork (Organize)",
        body: "An administrative assistant, except this one actually finishes the task.\n\nInstead of replying inside a chat box, Cowork steps onto your desktop and works directly with your real files, folders, and apps. You describe an outcome, it plans the steps, and it goes and does them while you steer. Claude Code for the rest of your work — same get-it-done engine, pointed at everyday knowledge work, no terminal required.\n\nThe difference from Chat: someone telling you how vs handing you the finished result.\n\nWhere it lives: Claude desktop app on your machine. Reachable from mobile too.\nWhat it touches: Local files and folders, connected apps (Google Drive, Gmail), browser via Chrome extension.\nHow it works: You give a task, it plans and runs across multiple steps.\nBest for: High-effort, repeatable work that eats time but is not technically hard.\n\nWhat it is great at:\n• Cleaning up chaos — renaming, sorting, deduplicating downloads and drafts\n• Turning scattered source files into one structured draft, report, or brief\n• Pulling data out of screenshots or documents into a spreadsheet\n• Multi-step jobs across files, browser, and connected apps\n• Tedious tasks that usually get skipped\n\nReal-life examples:\n• Creator: \"Go through this folder of receipt screenshots and turn them into one expense spreadsheet.\"\n• Founder: \"Read these five call notes and the proposal draft, then assemble a clean one-pager for the client.\"\n• Operator: \"Sort my downloads folder, rename everything sensibly, and tell me what is safe to delete.\"\n\nWorth knowing: Cowork asks permission before touching an app, you can see what it is doing, and stop it at any step. Big decisions stay with you.",
      },
      {
        heading: "03 — Claude Code (Build)",
        body: "A programmer on call — brief it in plain English.\n\nClaude Code writes software: websites, apps, automations, browser extensions, scripts. You do not need to know how to code. Describe what you want the way you would explain it to a new employee — Code plans, writes files, runs them, and fixes itself when something breaks.\n\nIf you can describe it clearly, Code can usually build it.\n\nWhere it lives: Command line for developers, plus desktop and mobile apps.\nWhat it touches: Your project files — reads, writes, runs code, connects to outside tools.\nHow it works: Describe a goal, it plans, builds across files, tests, and iterates.\nBest for: Building anything custom that does not exist yet, or fixing what does.\n\nWhat it is great at:\n• Building a real website, landing page, or small app from a description\n• Automations that do a repetitive job on a schedule\n• Custom tools you would otherwise pay a developer to build\n• Browser extensions and connecting services together\n• Debugging — paste an error and let it trace and fix the cause\n\nReal-life examples:\n• Creator: \"Build me a simple waitlist page where people enter their email, with clean branding.\"\n• Founder: \"I wanted an invoice tracker. Describe it once and Code builds a working version.\"\n• Operator: \"Build a script that renames and resizes every image in this folder.\"\n\nWorth knowing: Code is the most powerful of the three. Start small with one clear, contained task.",
      },
      {
        heading: "04 — Which one do I reach for?",
        body: "Ask yourself: do I need Claude to think, to do, or to build?\n\n• Ideas, a draft, or help thinking it through → Chat\n• Done across my files, emails, or browser → Cowork\n• A tool, site, app, or automation that does not exist yet → Code\n• Learning something or want it explained → Chat\n• Messy folder or scattered docs to pull together → Cowork\n• Something is broken and needs fixing → Code",
      },
      {
        heading: "05 — Using all three together",
        body: "Each tool is powerful on its own. They become a different beast when you chain them.\n\nExample: launching a paid workshop\n\n1. Chat (Think) — Shape the offer. What is it about, who is it for, what is the promise, what should it cost. Brainstorm title, draft sales copy, outline curriculum.\n\n2. Cowork (Organize) — Assemble everything. Build slide deck and participant pack, draft welcome emails, organize into a clean folder.\n\n3. Code (Build) — Ship the tools. Branded signup page that collects emails, automation that sends the welcome sequence.\n\nChat to think. Cowork to organize. Code to build. That is the full system.\n\nOne person running a launch that used to take a team — not because any single tool is magic, but because you move work between all three.",
      },
      {
        heading: "06 — Your first move with each",
        body: "Do not try to master all three at once. Pick the one that matches what is on your plate today.\n\nChat — start in five minutes:\n1. Open the Claude app or website.\n2. Bring a task you are stuck on right now.\n3. Ask for three different approaches, then build out the one you like.\n\nCowork — start with one messy thing:\n1. Open the desktop app and point Cowork at a single cluttered folder.\n2. Ask it to sort and rename everything sensibly.\n3. Watch how it plans, approve the steps, and let it finish.\n\nCode — build one tiny thing:\n1. Pick the smallest useful tool you wish you had.\n2. Describe it in plain English, like you would to a new hire.\n3. Let Code build it, run it, and fix anything that breaks.",
      },
      {
        heading: "Links",
        body: "https://mercythaddeus.xyz\n\nhttps://attentionfactory.io\n\nhttps://instagram.com/mercythaddeus_",
      },
    ],
  },
  {
    slug: "creative-studio-claude-6-skills",
    title: "Build a Creative Studio in Claude with 6 Skills",
    excerpt:
      "SuperMemory, Remotion, Deep Research, Content Research Writer, ElevenLabs, and Competitive Ads Extractor — verified links, install commands, and an end-to-end production workflow.",
    category: "SKILLS",
    topic: "skills",
    tools: ["claude"],
    publishedAt: "2026-05-29",
    sections: [
      {
        heading: "Executive summary",
        body: "This guide collects the best available public links and setup instructions for six Claude-related skills: SuperMemory, Remotion, Deep Research, Content Research Writer, ElevenLabs, and Competitive Ads Extractor.\n\nPrepared by Manus AI · May 29, 2026\n\nThe links below are the closest verified public sources for each skill or integration. Some are official product repositories; others are community Claude Code skills. Where there are multiple options, this guide identifies the recommended link and explains why.\n\nImportant: Most of these tools are designed for Claude Code or compatible agentic coding assistants with Agent Skills support. Claude web chat and Claude Desktop may not install skills the same way. For Claude Code, skills generally live in ~/.claude/skills/; some plugins use the plugin marketplace.",
      },
      {
        heading: "Quick link table",
        body: "SuperMemory — github.com/supermemoryai/claude-supermemory — Claude Code plugin — Persistent memory across sessions\n\nRemotion — remotion.dev/docs/ai/skills — Official Agent Skills — Programmatic video and motion graphics\n\nDeep Research — github.com/Weizhena/Deep-Research-skills — Community skill — Multi-step research workflows and reports\n\nContent Research Writer — github.com/ComposioHQ/awesome-claude-skills (content-research-writer) — Community skill — Research, citations, outlining, and drafting\n\nElevenLabs — github.com/elevenlabs/skills — Official Agent Skills — TTS, STT, music, agents, and audio\n\nCompetitive Ads Extractor — buildwithclaude.com/skill/competitive-ads-extractor — Community skill — Extract and analyze competitor ads",
      },
      {
        heading: "Before you start",
        body: "You need Claude Code (or another compatible coding agent with Agent Skills), Node.js, and npx — Remotion, ElevenLabs, and several skill directories use npx skills add ...\n\nPlan for API keys where required:\n• SuperMemory — Supermemory Pro + SUPERMEMORY_CC_API_KEY\n• ElevenLabs — ELEVENLABS_API_KEY\n• Remotion is open source; rendering at scale or stock assets may add cost\n• Competitor ad extraction must be used ethically",
      },
      {
        heading: "Recommended folder structure",
        body: "~/.claude/skills/ — Installed Agent Skills\n\n~/creative-studio/videos/ — Remotion projects\n\n~/creative-studio/research/ — Deep research outputs\n\n~/creative-studio/content/ — Articles, newsletters, scripts\n\n~/creative-studio/audio/ — ElevenLabs voiceovers and music\n\n~/creative-studio/ads/ — Competitor ad research and pattern libraries",
      },
      {
        heading: "1. SuperMemory — persistent memory",
        body: "Best link: github.com/supermemoryai/claude-supermemory\n\nGives Claude persistent memory across sessions and projects. Injects relevant memories at session start and can capture tool usage for future context.",
        prompt:
          "/plugin marketplace add supermemoryai/claude-supermemory\n/plugin install claude-supermemory",
      },
      {
        heading: "SuperMemory — API key (Zsh)",
        body: "Create a key in the SuperMemory console, then add to your shell profile:",
        prompt:
          'echo \'export SUPERMEMORY_CC_API_KEY="sm_..."\' >> ~/.zshrc\nsource ~/.zshrc',
      },
      {
        heading: "SuperMemory — starter prompt",
        prompt:
          "Use SuperMemory to remember my creative studio preferences, including my brand voice, preferred video style, content themes, and repeated workflow steps.",
      },
      {
        heading: "2. Remotion — video and motion graphics",
        body: "Best link: remotion.dev/docs/ai/skills\n\nOfficial Agent Skills for programmatic video, explainers, and motion graphics. Works with Claude Code, Codex, Cursor, and OpenCode.",
        prompt: "npx skills add remotion-dev/skills",
      },
      {
        heading: "Remotion — new project",
        body: "Use Blank template, enable TailwindCSS, and say yes to Skills during setup. Keep the preview server running in one terminal; run Claude Code in a second.",
        prompt:
          "npx create-video@latest\n\ncd my-video\nnpm install\nnpm run dev",
      },
      {
        heading: "Remotion — starter prompt",
        prompt:
          "Use the Remotion best-practices skill to create a 30-second vertical explainer video at 1080x1920, 30fps, explaining the benefits of our product. Use kinetic typography, animated icons, and a clean SaaS-style visual system.",
      },
      {
        heading: "3. Deep Research — market and strategic research",
        body: "Recommended: github.com/Weizhena/Deep-Research-skills\n\nStructured two-phase research — outline first, then deep investigation. Use cases: market research, competitor analysis, industry trends, due diligence.\n\nAlternative: github.com/199-biotechnologies/claude-deep-research-skill for formal reports, credibility scoring, and Markdown/HTML/PDF output.",
        prompt:
          "git clone https://github.com/Weizhena/deep-research-skills.git\ncd deep-research-skills\nmkdir -p ~/.claude/skills ~/.claude/agents\ncp -r skills/research-en/* ~/.claude/skills/\ncp agents/web-search-agent.md ~/.claude/agents/\ncp -r agents/web-search-modules ~/.claude/agents/\npip install pyyaml",
      },
      {
        heading: "Deep Research — commands",
        body: "/research — Generate research outline\n/research-add-items — Add more items\n/research-add-fields — Add field definitions\n/research-deep — Run deeper research per item\n/research-report — Create Markdown report",
      },
      {
        heading: "Deep Research — starter prompt",
        prompt:
          "Use the research skill to analyze the market for AI video creation tools in 2026. Build an outline first, include competitors, pricing, positioning, customer segments, major trends, and risks, then run deep research and produce a report.",
      },
      {
        heading: "4. Content Research Writer",
        body: "Best link: github.com/ComposioHQ/awesome-claude-skills (content-research-writer/SKILL.md)\n\nCollaborative outlining, research assistance, hook improvement, section feedback, voice preservation, and citation management.",
        prompt:
          "mkdir -p ~/.claude/skills/content-research-writer\ncurl -L https://github.com/ComposioHQ/awesome-claude-skills/raw/refs/heads/master/content-research-writer/SKILL.md \\\n  -o ~/.claude/skills/content-research-writer/SKILL.md",
      },
      {
        heading: "Content Research Writer — starter prompt",
        prompt:
          "Use the Content Research Writer skill. Help me create a research-backed article outline about [topic] for [audience]. Identify claims that need citations, suggest hooks, and create a section-by-section writing plan.",
      },
      {
        heading: "5. ElevenLabs — voice, podcasts, and audio",
        body: "Best link: github.com/elevenlabs/skills\n\nOfficial Agent Skills for text-to-speech, speech-to-text, music, sound effects, voice agents, and more.",
        prompt: "npx skills add elevenlabs/skills",
      },
      {
        heading: "ElevenLabs — API key",
        prompt:
          'export ELEVENLABS_API_KEY="your-api-key"\n\necho \'export ELEVENLABS_API_KEY="your-api-key"\' >> ~/.zshrc\nsource ~/.zshrc',
      },
      {
        heading: "ElevenLabs — starter prompt",
        prompt:
          "Use the ElevenLabs text-to-speech skill. Turn this document into a polished two-host podcast script, then generate separate voiceover files for Host A and Host B using professional, conversational pacing.",
      },
      {
        heading: "6. Competitive Ads Extractor",
        body: "Best link: buildwithclaude.com/skill/competitive-ads-extractor\n\nExtract and analyze competitor ads from libraries like Facebook and LinkedIn — messaging, hooks, CTAs, and creative patterns.\n\nUse for research and inspiration, not copying. Respect IP and platform rules.",
        prompt:
          "npx skills add davepoon/buildwithclaude -s competitive-ads-extractor",
      },
      {
        heading: "Competitive Ads Extractor — starter prompt",
        prompt:
          "Use the Competitive Ads Extractor skill. Research active ads from [Competitor A], [Competitor B], and [Competitor C]. Capture hooks, CTAs, creative themes, pain points, target audiences, and repeated messaging patterns. Summarize insights I can ethically use for original campaign ideas.",
      },
      {
        heading: "End-to-end creative studio workflow",
        body: "1. SuperMemory — brand voice, positioning, visual style, workflow memory\n2. Deep Research — market, competitors, trends, cited report\n3. Competitive Ads Extractor — live hooks, CTAs, themes, pattern library\n4. Content Research Writer — scripts, articles, emails, landing copy with citations\n5. Remotion — motion-graphics videos from approved scripts\n6. ElevenLabs — voiceovers, podcasts, transcripts, music, sound effects",
      },
      {
        heading: "Master setup checklist",
        body: "□ Install Claude Code (or compatible agent)\n□ Install Node.js and confirm npx works\n□ Create ~/creative-studio/ project folders\n□ Install SuperMemory + set SUPERMEMORY_CC_API_KEY\n□ Install Remotion skills + create a test video project\n□ Install Deep Research skill + run a small test report\n□ Install Content Research Writer + draft a sample outline\n□ Install ElevenLabs skills + set ELEVENLABS_API_KEY\n□ Install Competitive Ads Extractor + test one competitor search\n□ Ask SuperMemory to remember your brand voice and workflow",
      },
      {
        heading: "Troubleshooting",
        body: "Skill not triggering? Confirm it is in ~/.claude/skills/, restart Claude Code from your project directory, and name the skill explicitly in your prompt.\n\nAPI key issues? Run echo $SUPERMEMORY_CC_API_KEY or echo $ELEVENLABS_API_KEY in the same terminal session.\n\nnpx skills add failed? Update Node.js and retry from a clean terminal.\n\nAd libraries change often — if automation fails, paste URLs, screenshots, or exported CSV and ask Claude to analyze manually.",
      },
      {
        heading: "Main links",
        body: "SuperMemory: https://github.com/supermemoryai/claude-supermemory\n\nRemotion: https://www.remotion.dev/docs/ai/skills\n\nDeep Research: https://github.com/Weizhena/Deep-Research-skills\n\nContent Research Writer: https://github.com/ComposioHQ/awesome-claude-skills/blob/master/content-research-writer/SKILL.md\n\nElevenLabs: https://github.com/elevenlabs/skills\n\nCompetitive Ads Extractor: https://buildwithclaude.com/skill/competitive-ads-extractor",
      },
    ],
  },
  {
    slug: "claude-council-pressure-test-decisions",
    title: "The Claude Council",
    excerpt:
      "How to pressure-test any major decision with five AI advisors, peer review, and a chairman synthesis.",
    category: "WORKFLOW",
    topic: "workflows",
    tools: ["claude"],
    publishedAt: "2026-05-28",
    sections: [
      {
        heading: "The problem",
        body: "A Stanford study published in Science (March 2026) found that AI models, including Claude, ChatGPT, Gemini, and DeepSeek, affirm users 49% more often than humans do. Even when users described deception or illegal conduct, the models endorsed the behavior 47% of the time.",
      },
      {
        heading: "The fix",
        body: "Andrej Karpathy (co-founder of OpenAI) built the LLM Council, a multi-stage deliberation system. This guide adapts the concept into a single Claude chat using five advisor personas, so you get multi-angle pressure testing without needing API keys or code.",
      },
      {
        heading: "01 — The Five Advisors",
        body: "Each advisor has a distinct thinking style that forces a different angle on your question. The diversity is the point. If all five agree, you probably have a strong decision. If they diverge, you have blind spots to address.",
      },
      {
        heading: "The Contrarian — Downside Hunter",
        body: "Looks for what will fail, what you're ignoring because you're excited, and where the risk is hiding. This advisor's job is to make you uncomfortable.",
        prompt:
          "You are The Contrarian. Your only job is to find what will fail. Look for hidden risks, ignored downsides, and assumptions the user is making because they want the idea to work. Be specific. Name the failure modes.",
      },
      {
        heading: "The First Principles Thinker — Assumption Stripper",
        body: "Throws out every assumption and rebuilds the problem from the ground up. Questions the framing of the question itself, not just the answer.",
        prompt:
          "You are The First Principles Thinker. Strip away every assumption in the user's question and rebuild the problem from zero. Question the framing itself. If the user is solving the wrong problem, say so. Reason from base truths, not conventions.",
      },
      {
        heading: "The Expansionist — Upside Finder",
        body: "Finds opportunities, adjacent possibilities, and upside the user is leaving on the table. Thinks bigger than the question as asked.",
        prompt:
          "You are The Expansionist. Your job is to find the upside the user is missing. Look for adjacent opportunities, bigger plays, and possibilities they haven't considered. Think beyond the question as asked. Show them what they're leaving on the table.",
      },
      {
        heading: "The Outsider — Zero Context Evaluator",
        body: "Knows nothing about your industry and doesn't use any insider assumptions. Evaluates the decision purely on logic, incentives, and common sense.",
        prompt:
          "You are The Outsider. You know nothing about the user's industry. Do not assume any domain knowledge. Evaluate this decision purely on logic, incentives, human behavior, and common sense. If something only makes sense with insider context, flag it.",
      },
      {
        heading: "The Executor — Monday Morning Planner",
        body: "Doesn't care about strategy, vision, or upside. Only cares about what actually happens next. Turns any decision into concrete steps with owners and deadlines.",
        prompt:
          "You are The Executor. You do not care about strategy, theory, or upside. Your only question is: what is the user actually doing Monday morning? Turn every insight into a concrete next step with a timeline. If a decision can't be acted on this week, it's not a decision yet.",
      },
      {
        heading: "02 — The Three-Stage Process",
        body: "This mirrors Karpathy's original LLM Council architecture, adapted for a single Claude conversation. The key innovation is the anonymized peer review in Stage 2, which prevents the advisors from conforming to each other.",
      },
      {
        heading: "Stage 1 — Individual Responses",
        body: "All five advisors answer your question independently. Each one sees only your original question, not the others' answers. This is where you get the raw diversity of perspective.",
        prompt:
          "I need to pressure-test a decision. You are going to act as five separate advisors, each with a completely different thinking style. Answer my question from each advisor's perspective independently. Do not let one advisor's answer influence another.\n\nMy question: [YOUR QUESTION HERE]\n\nThe five advisors:\n\n1. The Contrarian: Find what will fail. Look for hidden risks, ignored downsides, and assumptions I'm making because I want this to work. Be specific about the failure modes.\n\n2. The First Principles Thinker: Strip away every assumption and rebuild this problem from zero. Question my framing. If I'm solving the wrong problem, say so.\n\n3. The Expansionist: Find the upside I'm missing. Look for adjacent opportunities and bigger plays I haven't considered.\n\n4. The Outsider: You know nothing about my industry. Evaluate this purely on logic, incentives, and common sense. If something only makes sense with insider context, flag it.\n\n5. The Executor: You don't care about strategy. What am I actually doing Monday morning? Turn every insight into concrete next steps with timelines.\n\nGive each advisor's full response under their name. Be thorough.",
      },
      {
        heading: "Stage 2 — Peer Review (Blind)",
        body: "This is the step most people skip, and it's the most important one. Each advisor reviews the other four responses without knowing which advisor wrote which. This prevents conformity bias, which is the whole reason you're doing this.",
        prompt:
          "Now I need you to do a peer review of all five responses. Shuffle the advisor names so that each response is labeled only as Response A, Response B, C, D, and E. Do not reveal which advisor wrote which response.\n\nFor each response, answer:\n1. What is the strongest insight in this response?\n2. What is the biggest blind spot or weakness?\n3. What did this advisor miss that another one caught?\n\nAfter reviewing all five individually, answer one final question: What did ALL FIVE advisors miss? This is the most important question. The gap that none of them addressed is often the most critical factor in the decision.",
      },
      {
        heading: "Stage 3 — Chairman Synthesis",
        body: "The chairman reads everything (all five original responses, all peer reviews, and the collective blind spot analysis) and delivers one final recommendation with clear next steps. This is the answer you actually use.",
        prompt:
          "You are now the Chairman. You have read all five advisor responses and the full peer review. Your job is to synthesize everything into one final recommendation.\n\nInclude:\n1. The decision: What should I do, stated clearly in one sentence.\n2. The reasoning: Which advisor perspectives carried the most weight and why.\n3. The risk I need to watch: The single biggest risk from the Contrarian and peer review that I must actively manage.\n4. The upside I should chase: The single biggest opportunity from the Expansionist that I should not ignore.\n5. The first three moves: Concrete next steps for this week, taken from the Executor's analysis.\n\nBe direct. Do not hedge. Give me a clear call.",
      },
      {
        heading: "03 — Tips for Getting the Best Results",
        body: "1. Be specific with your question. \"Should I launch this product?\" is weak. \"Should I launch this AI writing tool for freelancers at $29/mo in Q3, given that I have $8k in runway and no audience yet?\" gives the advisors real constraints to work with.\n\n2. Don't skip Stage 2. The peer review is where the real value lives. Without it, you just have five separate opinions. With it, you have five opinions that have been stress-tested against each other.\n\n3. Pay attention to the collective blind spot. When you ask \"What did all five miss?\", Claude will often surface something none of the individual advisors thought to address. That gap is frequently the most important factor.\n\n4. Run it on decisions, not questions. This works best when you have a specific fork in the road: launch or wait, hire or outsource, pivot or double down. For pure information gathering, a regular Claude conversation is fine.\n\n5. Use the Chairman's output as a starting point. The council gives you structured thinking, not a replacement for your judgment. The value is in the angles it surfaces, not in outsourcing the decision itself.",
      },
      {
        heading: "04 — Quick Reference",
        body: "Stage 1 — Individual Responses\nWhat happens: Five advisors answer your question independently\nWhy it matters: Raw diversity of perspective\n\nStage 2 — Peer Review (Blind)\nWhat happens: Each response reviewed anonymously, collective blind spots identified\nWhy it matters: Prevents conformity bias, surfaces gaps\n\nStage 3 — Chairman Synthesis\nWhat happens: One final recommendation with reasoning and next steps\nWhy it matters: Actionable output you can use immediately",
      },
      {
        heading: "When to Use the Claude Council",
        body: "• You're about to make a business decision worth more than $5,000 or 3+ months of your time\n• You're evaluating whether to launch, pivot, hire, or invest\n• You've already made up your mind and want to check if you're missing something\n• You're choosing between two or more paths and can't see a clear winner\n• You're getting advice from Claude and realize it's just agreeing with you",
      },
      {
        heading: "05 — Resources and Links",
        body: "Karpathy's LLM Council (GitHub)\ngithub.com/karpathy/llm-council\n\nStanford Sycophancy Study\nnews.stanford.edu/stories/2026/03/ai-advice-sycophantic-models-research\n\nLLM Council on Hugging Face (try it free)\nhuggingface.co/spaces/burtenshaw/karpathy-llm-council\n\nCommunity Projects Inspired by LLM Council\ngithub.com/danielrosehill/LLM-Council-Projects",
      },
    ],
  },
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

export function getGuideFilters(): readonly { id: string; label: string }[] {
  const usedTools = new Set<Exclude<GuideToolId, "all">>();
  for (const entry of GUIDE_ENTRIES) {
    for (const t of entry.tools) usedTools.add(t);
  }
  const usedTopics = new Set(GUIDE_ENTRIES.map((e) => e.topic));

  const filters: { id: string; label: string }[] = [{ id: "all", label: "All" }];

  for (const t of GUIDE_TOOLS) {
    if (t.id !== "all" && usedTools.has(t.id)) {
      filters.push({ id: `tool:${t.id}`, label: t.label });
    }
  }
  for (const t of GUIDE_TOPICS) {
    if (t.id !== "all" && usedTopics.has(t.id)) {
      filters.push({ id: `topic:${t.id}`, label: t.label });
    }
  }

  filters.push({ id: "toolkit", label: "Toolkit" });

  return filters;
}

export function guideMatchesFilter(
  entry: GuideEntry,
  filterId: string,
): boolean {
  if (filterId === "all") return true;
  if (filterId.startsWith("tool:")) {
    const tool = filterId.slice(5) as Exclude<GuideToolId, "all">;
    return entry.tools.includes(tool);
  }
  if (filterId.startsWith("topic:")) {
    const topic = filterId.slice(6) as Exclude<GuideTopicId, "all">;
    return entry.topic === topic;
  }
  return true;
}

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
