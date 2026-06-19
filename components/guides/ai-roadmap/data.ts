export const AI_ROADMAP_SLUG = "30-day-ai-roadmap";

export const BOOTCAMP_URL = "https://attentionfactory.io/launch";

export const RULES = [
  {
    num: 1,
    title: "Done beats perfect.",
    body: "A rough thing that exists is worth more than a polished thing in your head. Ship it ugly, fix it later. Every fellow who got a result shipped before they felt ready.",
  },
  {
    num: 2,
    title: "Build in public.",
    body: "Post what you make as you make it. Feedback, opportunities, and clients only exist outside your drafts. The work is half the value, showing it is the other half.",
  },
  {
    num: 3,
    title: "Pick the tool, then move on.",
    body: "You will be tempted to spend three days comparing tools. Don't. Pick the one I suggest, build the thing, and switch later if you outgrow it. Momentum is the real skill.",
  },
] as const;

export type RoadmapDay = {
  day: number;
  task: string;
  why: string;
};

export type RoadmapPhase = {
  tag: string;
  title: string;
  description: string;
  days: RoadmapDay[];
};

export const PHASES: RoadmapPhase[] = [
  {
    tag: "Days 1 to 7",
    title: "Phase 1: Get fluent with AI",
    description:
      "Before you build anything, you need to think with AI instead of just typing at it. This week is about reps, not theory.",
    days: [
      {
        day: 1,
        task: "Set up your three assistants.",
        why: "Open ChatGPT, Claude, and Gemini. Ask all three the same hard question from your real work. You learn the differences by using them, not reading about them.",
      },
      {
        day: 2,
        task: "Learn to actually prompt.",
        why: "Write five prompts that each give context, a clear task, the format you want, and one example. Save the ones that work. This is the skill under every other skill.",
      },
      {
        day: 3,
        task: "Hand off one real task.",
        why: "Take something you do every week, an email, a summary, a plan, and give it fully to AI. Proof beats theory, and you need to feel the time it saves.",
      },
      {
        day: 4,
        task: "Build a prompt library.",
        why: "Save your ten best prompts in one doc you reuse. The point is to stop starting from scratch every time.",
      },
      {
        day: 5,
        task: "Pick your lane.",
        why: "Decide what you want AI to do for you: start a career, become the AI person at your job, or grow your own business. The next three weeks bend around that goal.",
      },
      {
        day: 6,
        task: "Copy one workflow.",
        why: "Find one person who already uses AI the way you want to, and copy their exact process once, start to finish. Modeling skips months of guessing.",
      },
      {
        day: 7,
        task: "Audit your week.",
        why: "List every repetitive task you did this week and circle the three AI could take over. This list becomes everything you build next.",
      },
    ],
  },
  {
    tag: "Days 8 to 14",
    title: "Phase 2: Create with AI",
    description:
      "Now you make things people can see. Content, images, and video are the fastest way to a first win and the easiest to share.",
    days: [
      {
        day: 8,
        task: "Make your first AI image.",
        why: "Use a tool like Higgsfield, Ideogram, or Midjourney and recreate an ad you admire. You learn by copying first, then changing one thing at a time.",
      },
      {
        day: 9,
        task: "Teach AI your voice.",
        why: "Feed it three things you have written and have it draft in your style. Generic AI writing is the giveaway, your voice is the fix.",
      },
      {
        day: 10,
        task: "Make one full piece of content.",
        why: "Turn a single idea into a finished carousel or post, end to end. Finishing one beats planning ten.",
      },
      {
        day: 11,
        task: "Make your first AI video.",
        why: "Try Seedance, Kling, or Runway on a simple five-second clip. Video is where attention is, and it is finally within reach for one person.",
      },
      {
        day: 12,
        task: "Make a UGC-style ad.",
        why: "Script it, generate it, caption it. This is a sellable skill on its own, and brands pay for it.",
      },
      {
        day: 13,
        task: "Set up a content system.",
        why: "Build one repeatable flow: idea, draft, visual, post. Consistency comes from a system, not from motivation.",
      },
      {
        day: 14,
        task: "Publish in public.",
        why: "Post one thing you made this week. Feedback does not exist inside your drafts.",
      },
    ],
  },
  {
    tag: "Days 15 to 21",
    title: "Phase 3: Build real software",
    description:
      "This is where it gets undeniable. You can ship working software now by describing it, no code required. This is the week most people stop believing they need permission.",
    days: [
      {
        day: 15,
        task: "Build your first page.",
        why: "Use Lovable, Bolt, or v0 and make a one-page site just by describing it. Watch software appear from a sentence.",
      },
      {
        day: 16,
        task: "Build a real landing page.",
        why: "For yourself, a friend's business, or an idea you have. Then make it live. Live always beats local.",
      },
      {
        day: 17,
        task: "Learn to debug with AI.",
        why: "When something breaks, paste the error into Claude and work through the fix. Building is mostly fixing, so get comfortable here.",
      },
      {
        day: 18,
        task: "Build a simple app.",
        why: "One tool that does one useful thing: a tracker, a calculator, a form. An app on your phone is proof no one can argue with.",
      },
      {
        day: 19,
        task: "Add a database.",
        why: "Connect Supabase so your app saves real data. This is the line between a toy and a tool.",
      },
      {
        day: 20,
        task: "Build for one real person.",
        why: "Ask someone what they would actually use, then build the smallest version of it. Real users show you what matters faster than guessing.",
      },
      {
        day: 21,
        task: "Ship the link.",
        why: "Send your build to five people for feedback. A shared link is a portfolio piece.",
      },
    ],
  },
  {
    tag: "Days 22 to 28",
    title: "Phase 4: Automate and build agents",
    description:
      "This is the highest-leverage week. Automations and agents are where AI stops saving you minutes and starts saving you hours, or doing the work while you sleep.",
    days: [
      {
        day: 22,
        task: "Map one workflow.",
        why: "Pick a task with clear steps, like replying to inquiries or sorting leads. Automation needs a defined process before it needs a tool.",
      },
      {
        day: 23,
        task: "Build your first automation.",
        why: "Use n8n, Make, or Zapier to connect two tools so one triggers the other. This is where the real time savings live.",
      },
      {
        day: 24,
        task: "Build an AI agent.",
        why: "Have it read something and respond or take an action on its own. Agents are the most valuable thing you will build this month.",
      },
      {
        day: 25,
        task: "Automate one daily annoyance.",
        why: "Connect AI to your inbox or calendar and kill one recurring task you hate. The best automation is the one you feel every day.",
      },
      {
        day: 26,
        task: "Try a voice agent.",
        why: "Use a tool like Vapi or Retell to build something that can answer a call. Voice AI is a fast-growing space that very few people are building in yet.",
      },
      {
        day: 27,
        task: "Document what you built.",
        why: "Write one plain paragraph for each project explaining what it does. Being able to explain it is half its value.",
      },
      {
        day: 28,
        task: "Pick your best build.",
        why: "Choose the one you are proudest of and polish it. Depth on one project beats shallow on five.",
      },
    ],
  },
  {
    tag: "Days 29 to 30",
    title: "Phase 5: Ship your portfolio",
    description:
      "Everything you built this month was leading here. This is the part that gets you paid, promoted, or hired.",
    days: [
      {
        day: 29,
        task: "Build your portfolio.",
        why: "Put your best three to five projects on one page with a line about what each one does. This single page is the thing that turns skill into opportunity.",
      },
      {
        day: 30,
        task: "Share it and ask for the next step.",
        why: "Post your portfolio, tell people exactly what you can build, and ask for work or feedback. Opportunity comes from being visible, not from being ready.",
      },
    ],
  },
];

export const NEXT_BOX =
  "If you do all thirty days, you will not be a beginner anymore. You will have a portfolio, a process, and proof. The fellows in my bootcamp followed this same arc, and within a week of finishing, some had been paid for a build, some got promoted, and some put AI to work inside their own business. The difference between them and most people is simple. They started, and they finished.";
