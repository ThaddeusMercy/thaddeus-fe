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
    slug: "ai-terms-dictionary",
    title: "The AI Terms Dictionary Every Non-Tech Person Needs",
    excerpt:
      "Connectors, Skills, Plugins, MCPs, Agents, Cowork, Artifacts, Memory — plain English for every term you'll actually run into this year.",
    category: "REFERENCE",
    topic: "setup",
    tools: ["multi-tool"],
    publishedAt: "2026-05-20",
    sections: [
      {
        heading: "Why this matters",
        body: "AI product pages reuse the same words for different things. This dictionary is the cheat sheet I give corporate teams on day one — no CS degree required.",
      },
      {
        heading: "Core terms",
        body: "Connector: a permissioned bridge from an AI app into Gmail, Slack, Shopify, etc. Skill: a reusable instruction pack (often a SKILL.md) that changes how the model behaves for one job. Plugin / Cowork plugin: Anthropic's packaged workflows inside Cowork. MCP: Model Context Protocol — the open standard for tool hooks. Agent: software that plans steps and calls tools, not just one chat reply. Artifact: a live HTML/React file Claude builds in-browser. Memory: persisted notes about you — useful but needs auditing.",
      },
    ],
  },
  {
    slug: "three-ways-ai-is-lying",
    title: "The 3 Ways AI Is Lying To You (And The Fix For Each)",
    excerpt:
      "Hallucination, sycophancy, and bias — three failure modes that look confident. Three one-line prompts you can paste into any chat today.",
    category: "PROMPTS",
    topic: "prompts",
    tools: ["claude", "chatgpt", "multi-tool"],
    publishedAt: "2026-05-19",
    sections: [
      {
        heading: "Hallucination",
        body: "The model invents facts. Fix: force citations and uncertainty.",
        prompt:
          "Before you answer: list what you know from the message vs what you'd need to verify externally. If you can't verify, say \"I don't know\" and ask one clarifying question.",
      },
      {
        heading: "Sycophancy",
        body: "The model agrees with you to keep the conversation smooth. Fix: steelman the opposite case.",
        prompt:
          "Argue against my idea as hard as you can. Find the three strongest objections. Only then give a balanced recommendation.",
      },
      {
        heading: "Bias",
        body: "Training skew shows up as default examples (US-centric, corporate-default, etc.). Fix: explicit perspective check.",
        prompt:
          "Who does this advice work for, and who does it fail? Name two groups this might harm or exclude.",
      },
    ],
  },
  {
    slug: "ai-deck-tools-2026",
    title: "Which AI Deck Tool Should You Actually Use In 2026?",
    excerpt:
      "ChatGPT in PowerPoint, Gamma, Copilot, Claude, Canva — honest side-by-side of when each wins for slides that ship.",
    category: "NEWS",
    topic: "news",
    tools: ["chatgpt", "claude", "canva", "multi-tool"],
    publishedAt: "2026-05-18",
    sections: [
      {
        heading: "Quick picks",
        body: "Need editable PowerPoint inside Microsoft 365 → Copilot or ChatGPT-in-PPT. Need beautiful decks fast with light edits → Gamma. Need narrative + research first → Claude, then export to Gamma or Canva. Need brand-locked marketing slides → Canva AI with brand kit.",
      },
      {
        heading: "Workflow I teach",
        body: "Research and outline in Claude or Perplexity. Paste structured outline into Gamma for visual pass. Final polish in Canva if the team lives there. Never let the design tool write strategy — only layout.",
      },
    ],
  },
  {
    slug: "ai-designs-look-like-ai",
    title: "Why Your AI Designs Always Look Like AI",
    excerpt:
      "AI design isn't bad — your prompts are. A framework for elevated visuals plus where to steal lighting and composition language from real campaigns.",
    category: "CREATIVE",
    topic: "creative",
    tools: ["multi-tool"],
    publishedAt: "2026-05-17",
    sections: [
      {
        heading: "The tell",
        body: "Over-smooth skin, symmetrical faces, stock-photo lighting, and vague art-direction words (\"futuristic\", \"premium\") without camera specs.",
      },
      {
        heading: "Prompt framework",
        body: "Specify: lens (35mm), lighting (soft window left), material (matte ceramic), imperfection (slight grain), reference mood (editorial beauty, not stock). Ban words: 8K, hyper-real, masterpiece.",
        prompt:
          "Editorial product photo, 50mm lens, natural window light from camera-left, shallow depth of field, visible skin texture, slight film grain, no CGI gloss, no watermark text.",
      },
    ],
  },
  {
    slug: "claude-prompt-self-review",
    title: "Make Every Claude Prompt Smarter Over Time",
    excerpt:
      "The self-review hack that turns any Claude prompt or skill into something that improves every run. Paste this REVIEW block at the bottom.",
    category: "SKILL",
    topic: "skills",
    tools: ["claude"],
    publishedAt: "2026-05-16",
    sections: [
      {
        heading: "How it works",
        body: "After Claude delivers, it scores its own output against your rules and proposes a one-line fix to the prompt for next time.",
        prompt:
          "REVIEW (run after your main answer):\n1) What did you assume that I didn't state?\n2) What would make this wrong?\n3) One sentence to add to my prompt so the next run is better.",
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
    slug: "sensitive-ai-onboarding-check",
    title: "Run This Onboarding Check Before AI Touches Anything Sensitive",
    excerpt:
      "OpenAI, Claude, and Perplexity can connect to banks and inboxes. The prompt I run before turning on any sensitive connector.",
    category: "WORKFLOW",
    topic: "workflows",
    tools: ["claude", "chatgpt", "perplexity"],
    publishedAt: "2026-05-14",
    sections: [
      {
        heading: "Checklist",
        body: "Separate work vs personal accounts. Turn off auto-send on email connectors. Use read-only where possible. Document which accounts are in scope. Name a human approver for money-moving actions.",
        prompt:
          "I'm about to connect [TOOL] to [ACCOUNT TYPE]. List the top 10 ways this could leak data, send the wrong message, or move money. For each risk, give prevent + detect + recover steps.",
      },
    ],
  },
  {
    slug: "ai-certs-career-switchers",
    title: "3 AI Certifications Career Switchers Need On Their Resume",
    excerpt:
      "Three Coursera paths under ~$150 total — Google AI Essentials, Google Prompting Essentials, Ng's Generative AI for Everyone — plus LinkedIn visibility.",
    category: "CAREER",
    topic: "career",
    tools: ["multi-tool"],
    publishedAt: "2026-05-13",
    sections: [
      {
        heading: "The three",
        body: "Google AI Essentials (breadth). Google Prompting Essentials (practical prompts). Andrew Ng — Generative AI for Everyone (concepts without code). Stack them in 2–3 weeks, not 2–3 months.",
      },
      {
        heading: "LinkedIn",
        body: "Add under Licenses & Certifications with completion links. Pin one post walking through a before/after workflow you learned — recruiters click projects, not badge walls.",
      },
    ],
  },
  {
    slug: "claude-memory-audit",
    title: "Make Claude Audit Itself About You",
    excerpt:
      "Claude memory gets stale fast. A 3-step audit that cleans your profile in ~10 minutes and sharpens outputs immediately.",
    category: "SKILL",
    topic: "skills",
    tools: ["claude"],
    publishedAt: "2026-05-12",
    sections: [
      {
        heading: "Steps",
        body: "1) Export or view what Claude remembers. 2) Delete outdated job titles, tools you no longer use, and wrong preferences. 3) Add three lines: role, stack, output style (bullets vs prose).",
        prompt:
          "List everything you believe you know about me from memory. Mark each item: KEEP / EDIT / DELETE with a one-line reason. Then propose a 5-line replacement profile.",
      },
    ],
  },
  {
    slug: "use-ai-where-youre-good",
    title: "Use AI Where You're Already Good. Not Where You're Bad.",
    excerpt:
      "The counterintuitive rule: AI amplifies judgment, not gaps. A placement audit prompt for green zones vs red zones.",
    category: "PROMPTS",
    topic: "prompts",
    tools: ["claude", "multi-tool"],
    publishedAt: "2026-05-11",
    sections: [
      {
        heading: "The rule",
        body: "Use AI on tasks where you'd catch a bad answer in 60 seconds. Avoid AI on tasks where you'd only notice the mistake after shipping.",
        prompt:
          "List my recurring weekly tasks. For each: GREEN (I can verify fast), YELLOW (needs human review), RED (expertise gap). Recommend AI placement only for GREEN with one automation idea each.",
      },
    ],
  },
  {
    slug: "claude-small-business-15-min",
    title: "Set Up Claude For Your Small Business In 15 Minutes",
    excerpt:
      "Cowork + Small Business plugin: connectors, five setup steps, first workflow, and the privacy toggle owners forget.",
    category: "WORKFLOW",
    topic: "entrepreneurs",
    tools: ["claude"],
    publishedAt: "2026-05-10",
    sections: [
      {
        heading: "15-minute setup",
        body: "1) Install Cowork desktop. 2) Enable Small Business plugin. 3) Connect QuickBooks OR PayPal (not both day one). 4) Paste global instructions: tone, approval rules, currency. 5) Run one read-only weekly summary before any write actions.",
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
  {
    slug: "about-me-md-claude",
    title: "The about-me.md File That Makes Claude Know You",
    excerpt:
      "Eight sections, universal additions most people skip, a starter template, and a voice prompt that builds the file in 15 minutes.",
    category: "SETUP",
    topic: "setup",
    tools: ["claude"],
    publishedAt: "2026-05-08",
    sections: [
      {
        heading: "Template sections",
        body: "Role & outcomes. Audience. Tools & stack. Voice & banned words. Decision principles. Weekly rhythm. Pet peeves about AI output. Proof links (site, LinkedIn).",
        prompt:
          "Interview me for about-me.md. Ask one question at a time. After 8 answers, output a single markdown file under 400 words I can paste into a Claude Project.",
      },
    ],
  },
  {
    slug: "sunday-reset-claude",
    title: "The 60-Minute Sunday Reset With Claude",
    excerpt:
      "Six prompts, six 10-minute blocks — week plan, meals, money snapshot, top 3 priorities. The reset I actually run.",
    category: "WORKFLOW",
    topic: "workflows",
    tools: ["claude"],
    publishedAt: "2026-05-07",
    sections: [
      {
        heading: "Blocks",
        body: "1) Calendar scan + conflicts. 2) Inbox triage list (not full replies). 3) Meal plan + grocery. 4) Finance snapshot (subscriptions + big spends). 5) Content/creative backlog. 6) Top 3 for the week with anti-goals.",
      },
    ],
  },
  {
    slug: "become-ai-fluent-7-days",
    title: "Become AI Fluent in 7 Days",
    excerpt:
      "30–60 minutes a day, one focus per day. By Sunday you know more than most of your feed — real actions, no theory spiral.",
    category: "SETUP",
    topic: "setup",
    tools: ["multi-tool"],
    publishedAt: "2026-05-06",
    sections: [
      {
        heading: "Day plan",
        body: "Day 1: pick stack (Claude + Perplexity). Day 2: about-me + global instructions. Day 3: one Project. Day 4: one Connector read-only. Day 5: one Skill. Day 6: one scheduled task. Day 7: teach a colleague one workflow.",
      },
    ],
  },
  {
    slug: "ai-glossary-fluent",
    title: "The AI Glossary That Makes You Sound Fluent",
    excerpt:
      "20 terms every AI-literate person knows in 2026 — defined like a human wrote them, with examples.",
    category: "SETUP",
    topic: "setup",
    tools: ["multi-tool"],
    publishedAt: "2026-05-05",
    sections: [
      {
        heading: "Sample terms",
        body: "RAG: retrieval before answer. Context window: how much text fits in one request. Fine-tuning: expensive; rarely needed for operators. Token: billing unit — shorter prompts save money. Temperature: creativity dial — lower for finance, higher for brainstorming.",
      },
    ],
  },
  {
    slug: "claude-connectors-daily-life",
    title: "10 Claude Connectors That Will Change Your Daily Life",
    excerpt:
      "398 official connectors exist; most people use three. Ten worth a weekend, install flow, and first prompt on each.",
    category: "SETUP",
    topic: "setup",
    tools: ["claude"],
    publishedAt: "2026-05-04",
    sections: [
      {
        heading: "Top ten to try",
        body: "Gmail, Google Calendar, Slack, Notion, Drive, GitHub, Figma, HubSpot, Stripe, and one commerce tool you actually use. Install one per day; run a read-only summary before writes.",
      },
    ],
  },
  {
    slug: "5-claude-cheat-codes",
    title: "5 Claude Cheat Codes That Actually Work",
    excerpt:
      "ELI5, Pre-mortem, Steelman, Red Team, First Principles — five frameworks that change Claude's output shape.",
    category: "PROMPTS",
    topic: "prompts",
    tools: ["claude"],
    publishedAt: "2026-05-03",
    sections: [
      {
        heading: "Frameworks",
        body: "ELI5: explain like I'm new to the domain. Pre-mortem: assume failure in 6 months — why? Steelman: best case for the opposite view. Red team: attack the plan. First principles: strip analogies, rebuild from facts.",
      },
    ],
  },
  {
    slug: "claude-first-7-days",
    title: "Your First 7 Days With Claude",
    excerpt:
      "Day-by-day from signup to \"Claude runs half my workday\" — Memory, Connectors, Projects, Artifacts, with prompts.",
    category: "SETUP",
    topic: "setup",
    tools: ["claude"],
    publishedAt: "2026-05-02",
    sections: [
      {
        heading: "Progression",
        body: "Mirror the 7-day fluency guide but inside Claude only: each day ends with one saved artifact (brief, table, or checklist) you reuse Monday.",
      },
    ],
  },
  {
    slug: "ai-slide-decks-minutes",
    title: "AI Slide Decks in Minutes",
    excerpt:
      "Claude does research and narrative; Gamma designs. Copy-paste prompts to ship decks in under 20 minutes.",
    category: "WORKFLOW",
    topic: "workflows",
    tools: ["claude", "multi-tool"],
    publishedAt: "2026-05-01",
    sections: [
      {
        heading: "Pipeline",
        body: "Claude: audience, tension, 3 insights, 10-slide outline with speaker notes. Gamma: paste outline, pick theme, export. Human: cut 30% of text, fix one chart, check brand colors.",
        prompt:
          "Build a 10-slide deck outline for [AUDIENCE] on [TOPIC]. Each slide: title, 3 bullets max, speaker note under 40 words. End with one clear CTA slide.",
      },
    ],
  },
  {
    slug: "vibe-coding-beginners",
    title: "Beginner's Guide to Vibe Coding",
    excerpt:
      "Build apps by chatting with AI — no CS degree. Three-step workflow that stops 95% of vibe-coded apps from breaking on deploy.",
    category: "CREATIVE",
    topic: "creative",
    tools: ["claude", "chatgpt", "multi-tool"],
    publishedAt: "2026-04-30",
    sections: [
      {
        heading: "Three steps",
        body: "1) Write a one-page spec (users, screens, data, non-goals). 2) Build vertical slice (auth + one core flow). 3) Add tests for the slice before feature #2.",
        prompt:
          "You are a senior engineer. Ask me clarifying questions until the spec is unambiguous. Then output: stack recommendation, folder structure, and step 1 implementation only.",
      },
    ],
  },
  {
    slug: "10-ai-side-hustles-2026",
    title: "10 AI Side Hustles Making Real Money in 2026",
    excerpt:
      "Real income ranges, starter steps, 30/60/90 paths — ghostwriting, AI agency, micro-SaaS, prompt libraries, and more.",
    category: "SIDE HUSTLES",
    topic: "side-hustles",
    tools: ["multi-tool"],
    publishedAt: "2026-04-29",
    sections: [
      {
        heading: "Pick one lane",
        body: "Local Claude setup ($1–3K/mo). Prompt + workflow library (digital product). Content repurposing retainer. Niche newsletter with AI research. Don't stack until one lane has 3 paying clients.",
      },
    ],
  },
  {
    slug: "ai-agent-structure-4-parts",
    title: "How I Build My AI Agents (The 4-Part Structure)",
    excerpt:
      "Context, Connections, Workflows, Memory — the structure behind every agent on my team, with small-business examples.",
    category: "ENTREPRENEURS",
    topic: "ai-agents",
    tools: ["claude"],
    publishedAt: "2026-04-28",
    sections: [
      {
        heading: "Four parts",
        body: "Context: who the agent is and what it optimizes. Connections: read-first tools. Workflows: scheduled jobs with human approval gates. Memory: what to persist vs discard weekly.",
      },
    ],
  },
  {
    slug: "resume-tailor-claude",
    title: "The Resume Tailor",
    excerpt:
      "Save your master resume once. Paste any JD — Claude mirrors language, surfaces relevant wins, never invents experience.",
    category: "SKILLS",
    topic: "skills",
    tools: ["claude"],
    publishedAt: "2026-04-27",
    sections: [
      {
        heading: "Skill behavior",
        body: "Keep a master resume in the Project. For each JD: extract keywords, map evidence, output tailored resume + cover hook. Flag gaps honestly.",
        prompt:
          "Here is my master resume and a job description. Output: tailored resume (truthful only), 5 keyword gaps, and a 2-sentence outreach hook. Never invent employers or metrics.",
      },
    ],
  },
  {
    slug: "business-validator-perplexity",
    title: "The Business Validator",
    excerpt:
      "Stop launching on a hunch. Perplexity Deep Research + one prompt → market data, competitors, demand signals, GO/WAIT/NO-GO.",
    category: "PROMPTS",
    topic: "entrepreneurs",
    tools: ["perplexity"],
    publishedAt: "2026-04-26",
    sections: [
      {
        heading: "Prompt",
        prompt:
          "Deep research this business idea: [IDEA]. Return: TAM estimate with sources, 5 named competitors, customer pain quotes, regulatory risks, and a GO / WAIT / NO-GO verdict with assumptions.",
      },
    ],
  },
  {
    slug: "10-secret-words-claude",
    title: "10 Secret Words That Make Claude 10x Better",
    excerpt:
      "No preamble, ultrathink, no yapping, be brutal, steelman — copy-paste cheat sheet included.",
    category: "PROMPTS",
    topic: "prompts",
    tools: ["claude"],
    publishedAt: "2026-04-25",
    sections: [
      {
        heading: "Cheat sheet",
        body: "No preamble · Answer first · Be brutal · Steelman · Red team · First principles · Table format · Under 150 words · Cite assumptions · One clarifying question max",
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
