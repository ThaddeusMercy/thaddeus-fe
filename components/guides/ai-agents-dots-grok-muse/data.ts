export const SLUG = "chatgpt-dots-vs-grok-bot-vs-meta-muse";

export type AgentRow = {
  agent: string;
  bestFit: string;
  advantage: string;
};

export const COMPARISON: AgentRow[] = [
  {
    agent: "ChatGPT dots",
    bestFit: "You already use ChatGPT for most of your work",
    advantage: "One personal AI assistant that learns how you work",
  },
  {
    agent: "Grok Bot",
    bestFit: "You want several AI workers with different jobs",
    advantage: "You can build a small team of Bots that work in parallel",
  },
  {
    agent: "Meta Muse",
    bestFit:
      "Your business depends heavily on Instagram, Facebook, WhatsApp or Meta ads",
    advantage: "Deep access to your Meta business context",
  },
];

export type AgentGuide = {
  id: string;
  num: string;
  title: string;
  blurb: string[];
  who: string[];
  setupIntro: string;
  setupPrompt: string;
  setupNotes: string[];
  access: string;
};

export const AGENTS: AgentGuide[] = [
  {
    id: "chatgpt-dots",
    num: "01",
    title: "ChatGPT dots",
    blurb: [
      "Choose dots if ChatGPT is already where most of your AI work happens.",
      "A dot is an always-on agent inside ChatGPT. It has its own cloud computer, can connect to your apps, and can keep working toward goals while you are away.",
      "You can message or call your dot from ChatGPT. It can also contact you when it has progress to share, has a question, or needs you to make a decision. OpenAI says dots can connect to more than 4,000 apps through ChatGPT’s plugin system.",
      "The biggest difference from normal ChatGPT is proactivity. Normal ChatGPT usually works like this: you ask → ChatGPT responds. A dot can work more like: you give it a role and access → it keeps paying attention → it finds things that need work → it starts helping.",
      "For example, your dot could know that you are running a business and regularly check connected sources for things that need your attention, prepare work before meetings, follow ongoing projects, notice unfinished tasks, draft content from new material, and investigate issues and prepare what you need to review.",
      "OpenAI even gives the example of a creator whose dot can notice when a new interview transcript arrives, find clips, prepare show notes, and draft social posts.",
    ],
    who: [
      "Use a dot if you already have your projects, files, conversations and connected apps inside ChatGPT.",
      "It is also a good option if you want one AI that gradually learns how you work instead of creating several separate agents immediately.",
    ],
    setupIntro: "Do not start by connecting everything. Start with one role.",
    setupPrompt: `Act as my personal operations assistant. Help me stay on top of my work. Pay attention to my ongoing projects, calendar and email. Flag things that need my attention, prepare work you can do without me, and ask before sending messages, publishing anything or making changes that affect other people.`,
    setupNotes: [
      "Then connect only the apps it needs for that job.",
      "Once you trust how it works, give it more responsibility.",
    ],
    access:
      "At launch, dots are rolling out to eligible ChatGPT Pro and Business Premium users, with Enterprise access available as a beta when enabled by an administrator. You create your first dot from ChatGPT on desktop or the desktop web app.",
  },
  {
    id: "grok-bot",
    num: "02",
    title: "Grok Bot",
    blurb: [
      "Grok Bot makes more sense if what you really want is an AI team.",
      "Instead of thinking about one assistant doing everything, you can create separate Bots for separate jobs — for example a Research Bot, Content Bot, Business Bot, and a Chief of Staff Bot that coordinates the others and brings important decisions back to you.",
      "Each Bot has its own persistent cloud computer and can use websites and apps like a person would. Bots can continue working after you leave, remember previous conversations, learn your routines and communicate with other Bots.",
      "This is where Grok Bot becomes interesting. You could have one Bot researching something while another updates a CRM and another prepares content.",
      "Grok’s own team describes setups where several Bots work in parallel, with one Bot acting as a chief of staff above the others.",
    ],
    who: [
      "Use Grok Bot if you keep thinking: “I don’t need one assistant. I need five different people doing five different jobs.”",
      "It makes sense for founders, creators, developers and teams with several repeated workflows happening at the same time.",
    ],
    setupIntro:
      "Do not create ten Bots on day one. Start with two. Give each Bot a very clear job.",
    setupPrompt: `You are my Research Bot. Your job is to research topics I give you, find useful sources, organize the information and prepare a report for me. Do not publish or contact anyone without asking me.`,
    setupNotes: [
      "Bad: “Help me with my business.”",
      "Better: a narrow job like the brief above.",
      "Then create another Bot for another part of your work. Once those jobs are working properly, you can introduce more Bots and let them work together.",
    ],
    access:
      "Grok Bot currently works across desktop and mobile, and access is included with supported paid Grok and Cursor plans.",
  },
  {
    id: "meta-muse",
    num: "03",
    title: "Meta Muse",
    blurb: [
      "Muse is the one I would pay attention to if a large part of your business already happens inside Meta’s ecosystem.",
      "Muse is a personal AI agent from Meta that can continue working after you close the app, use its own browser, fill forms, handle tasks and come back when it needs your approval. You can also talk to Muse through WhatsApp.",
      "But the business version is where things get particularly useful for business owners. Muse can connect to your Instagram professional account, Facebook Pages, Meta ad accounts, Shopify, QuickBooks, Canva, Notion, Slack, Stripe, Figma, Dropbox and other business tools.",
      "With your Instagram, Facebook and ad accounts connected, Muse can use information about your business, content and advertising performance when helping you.",
      "You could ask it to look at Instagram performance, analyze Meta ads, or combine sales, campaigns and social performance into a growth plan. Meta says Muse can also proactively flag emails that need responses and prepare drafts before you ask.",
    ],
    who: [
      "If Instagram, Facebook, WhatsApp and Meta ads are central to your business, Muse deserves a serious look.",
      "For creators, small businesses, ecommerce brands and people running ads, the fact that the agent can understand information directly from those accounts is useful.",
    ],
    setupIntro:
      "Start with Meta-native work before wiring every other tool.",
    setupPrompt: `Look at my Instagram performance and tell me which content performed best this month. Then analyze my Meta ads and tell me what seems to be working. Prepare a short growth plan from sales, campaigns and social performance. Ask before publishing, spending or messaging anyone.`,
    setupNotes: [
      "Connect Instagram, Facebook Pages and Meta ads first if those drive your business.",
      "Add Shopify, Stripe or Slack only when you trust how Muse behaves with Meta data.",
    ],
    access:
      "Muse is currently available in the US and Canada, so you may not have access yet depending on where you live.",
  },
];

export const FIRST_JOBS = [
  "Every morning, check what needs my attention and prepare a short brief.",
  "Keep track of my ongoing projects and tell me when something is falling behind.",
  "Research these topics and prepare useful findings for my content.",
  "Check my business performance every week and flag anything unusual.",
  "Turn new transcripts into content drafts for me.",
] as const;

export const CHOOSE_RULES = [
  {
    if: "Most of your AI work already happens in ChatGPT",
    then: "start with a dot",
  },
  {
    if: "You want several AI workers with separate responsibilities",
    then: "start with Grok Bot",
  },
  {
    if: "Your business depends heavily on Instagram, Facebook, WhatsApp and Meta ads",
    then: "look at Muse",
  },
] as const;
