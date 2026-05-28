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

  const tools = GUIDE_TOOLS.filter(
    (t): t is { id: Exclude<GuideToolId, "all">; label: string } =>
      t.id !== "all" && usedTools.has(t.id),
  );
  const topics = GUIDE_TOPICS.filter(
    (t): t is { id: Exclude<GuideTopicId, "all">; label: string } =>
      t.id !== "all" && usedTopics.has(t.id),
  );

  return [
    { id: "all", label: "All" },
    ...tools.map((t) => ({ id: `tool:${t.id}`, label: t.label })),
    ...topics.map((t) => ({ id: `topic:${t.id}`, label: t.label })),
  ];
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
