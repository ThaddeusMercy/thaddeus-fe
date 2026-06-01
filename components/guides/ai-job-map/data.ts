export type AiJobMapRole = {
  number: number;
  title: string;
  description: string;
  skills: string;
  weeks: { label: string; text: string }[];
  proof: string;
  position: string;
  tools: string;
};

export type AiJobMapTemplate = {
  number: number;
  title: string;
  description: string;
  fields: { label: string; placeholder: string }[];
};

export const AI_JOB_MAP_ROLES: AiJobMapRole[] = [
  {
    number: 1,
    title: "Claude Skills & Custom Project Builder",
    description:
      "Turns a generic chatbot into role-specific assistants that execs and teams actually use every day.",
    skills:
      "Claude Skills, project setup, knowledge file design, system prompt writing, basic ops thinking.",
    weeks: [
      {
        label: "W1",
        text: "Set up 3 Claude Projects for yourself (inbox, research, writing). Write a system prompt and one knowledge file for each, and live in them all week.",
      },
      {
        label: "W2",
        text: "Pick one role you understand well (founder, sales lead, recruiter) and build a complete Project for it, plus one Skill that automates a task they do over and over.",
      },
      {
        label: "W3",
        text: "Build 5 sample Projects for 5 different roles (CEO, sales, HR, marketing, ops). Record a 60 to 90 second screen walkthrough of each one.",
      },
      {
        label: "W4",
        text: "Post the walkthroughs on LinkedIn with what each Project does and the time it saves. Offer to build one free for a small business to land your first testimonial.",
      },
    ],
    proof:
      "5 role-specific Projects with screen recordings, 1 reusable Skill that automates a real task, and 1 written case study of hours saved.",
    position:
      "Sell custom Project builds to founders and small teams at $500 to $2K each. Pitch 10 people who post about drowning in admin.",
    tools:
      "Claude Projects, Claude Skills, Loom, Notion or Google Docs for knowledge files.",
  },
  {
    number: 2,
    title: "AI Operations Manager",
    description:
      "Oversees every AI tool deployed across a company and keeps them governed, adopted, and worth the spend.",
    skills:
      "tool selection, governance, training plans, ROI tracking, change management.",
    weeks: [
      {
        label: "W1",
        text: "Audit the stack. Map every AI tool your company (or a friend's) already pays for, who uses them, and what they cost. One simple spreadsheet.",
      },
      {
        label: "W2",
        text: "Pick the slowest workflow and design the AI fix. Write the rollout: tool, owner, training, and the one metric that proves it worked.",
      },
      {
        label: "W3",
        text: "Run a two-week pilot with a single team. Track time saved and adoption, and document the before and after honestly.",
      },
      {
        label: "W4",
        text: "Write the 90-day rollout doc: tool stack, governance rules, training plan, and ROI projections. That document is your portfolio.",
      },
    ],
    proof:
      "an AI tool audit spreadsheet, a 90-day rollout plan, and one documented pilot with time-saved numbers.",
    position:
      "Be the AI person at your current job first, then pitch fractional AI Ops to companies with 20 to 200 staff who bought tools but have nobody running them.",
    tools: "Notion or Sheets, the company's existing stack, a simple ROI calculator.",
  },
  {
    number: 3,
    title: "AI Content Strategist",
    description:
      "Runs AI-assisted content pipelines that multiply output for brands and creators without losing their voice.",
    skills:
      "brand voice training, AI editing, content systems, repurposing workflows.",
    weeks: [
      {
        label: "W1",
        text: "Build a voice system. Take one creator (yourself counts) and capture their voice in a reusable prompt or Project. Test it until the output sounds right.",
      },
      {
        label: "W2",
        text: "Build the pipeline. Set up a repeatable flow: long-form source, atomize into posts, edit for voice, schedule. Run it on one week of content.",
      },
      {
        label: "W3",
        text: "Repurpose 30 days of one creator's content using your system, and track the output: how many posts from how few hours.",
      },
      {
        label: "W4",
        text: "Package the case study. Show the before and after, the time saved, and the system itself. Pitch it to 10 similar creators or brands.",
      },
    ],
    proof:
      "a documented voice system, a working content pipeline, and a 30-day repurposing case study.",
    position:
      "Offer content systems to creators and founders who post inconsistently. Retainer range $1K to $5K per month.",
    tools:
      "Claude, TranscriptX or another transcription tool, a scheduler, Notion for the system.",
  },
  {
    number: 4,
    title: "AI Customer Success",
    description:
      "Gets customers of AI products to value fast and keeps them from churning once the novelty fades.",
    skills:
      "onboarding design, product knowledge, account management, light data work.",
    weeks: [
      {
        label: "W1",
        text: "Pick 3 AI products you can use daily and learn them deeply enough to teach them to someone else.",
      },
      {
        label: "W2",
        text: "Map a great onboarding for one of them. Find where users get stuck, then design the first-7-days experience that gets them to value.",
      },
      {
        label: "W3",
        text: "Write a re-engagement playbook: the emails, check-ins, and nudges that bring quiet users back before they cancel.",
      },
      {
        label: "W4",
        text: "Package the onboarding teardown and the playbook as proof. Apply directly to AI startups, since most are hiring CS right now.",
      },
    ],
    proof:
      "an onboarding teardown of a real AI product, a re-engagement playbook, and a short Loom pitching your approach.",
    position:
      "Apply to AI startups from seed to Series B that are hiring CS or onboarding leads. Lead with the teardown, not your resume.",
    tools: "the AI products themselves, Loom, a doc tool.",
  },
  {
    number: 5,
    title: "No-Code AI Builder / Vibe Coder",
    description:
      "Builds real apps and internal tools for small businesses using AI builders, with no traditional coding required.",
    skills: "Lovable, Replit Agent, Bolt, v0, basic UX.",
    weeks: [
      {
        label: "W1",
        text: "Pick one builder and ship one tiny app for yourself: a tracker, a form, a dashboard. Get through a full build once.",
      },
      {
        label: "W2",
        text: "Build app two for a real person you know, solving an actual problem they have, not a demo.",
      },
      {
        label: "W3",
        text: "Build app three and document the whole process publicly: the prompt, the iterations, and the result.",
      },
      {
        label: "W4",
        text: "Turn the three builds into a portfolio, post the demos, and start charging $1K to $10K per build.",
      },
    ],
    proof:
      "3 working apps, 3 public build write-ups or demo videos, and a simple services page.",
    position:
      "Pitch businesses you already know first, then niche down (clinics, agencies, real estate) and sell the same build repeatedly.",
    tools: "Lovable, Replit Agent, Bolt, v0, and somewhere to host the demos.",
  },
  {
    number: 6,
    title: "AI Agent & Automation Engineer",
    description:
      "Builds autonomous agents and wires AI into existing tools so multi-step, repetitive work runs on its own.",
    skills: "agent frameworks, tool calling, n8n, Zapier, evals.",
    weeks: [
      {
        label: "W1",
        text: "Automate one annoying task in your own life end to end: inbox triage, lead capture, or a daily digest.",
      },
      {
        label: "W2",
        text: "Learn agents. Build one agent that does a real multi-step job, like research a list, draft outreach, and log the results.",
      },
      {
        label: "W3",
        text: "Build two more automations or agents for real use cases, and add simple evals so you can prove they actually work.",
      },
      {
        label: "W4",
        text: "Document all three as case studies with hours saved, and post the demos where buyers will see them.",
      },
    ],
    proof:
      "3 working automations or agents, eval results showing reliability, and demo videos with time saved.",
    position:
      "Sell automation audits and builds to small businesses, or apply to startups hiring automation and agent engineers.",
    tools: "n8n, Zapier, Claude, an agent framework, and a logging sheet.",
  },
  {
    number: 7,
    title: "AI Solutions Architect / Implementation Consultant",
    description:
      "Maps a company's messy problems to the right AI stack, installs it from scratch, and trains the team to run it.",
    skills:
      "systems design, model selection, connectors, change management, training.",
    weeks: [
      {
        label: "W1",
        text: "Pick one niche (law firms, clinics, agencies) and learn their top 3 recurring problems cold.",
      },
      {
        label: "W2",
        text: "Design the stack for one of those problems on paper: tools, data flow, who owns what, and the security basics.",
      },
      {
        label: "W3",
        text: "Run a free 90-day build for one business in that niche. Install it, train them, and measure the results.",
      },
      {
        label: "W4",
        text: "Publish the architecture and the results. That write-up becomes your case study and your pitch.",
      },
    ],
    proof:
      "one full architecture diagram and write-up, one installed build, and one trained team with results.",
    position:
      "Niche down and sell implementation to businesses that have heard of AI but have no idea where to start. $5K to $50K per engagement.",
    tools:
      "a diagramming tool, connectors, the client's stack, and a training deck.",
  },
  {
    number: 8,
    title: "AI Workflow Designer",
    description:
      "Designs repeatable AI workflows that save a company 10 or more hours a week on work they already do.",
    skills: "Claude Skills, system prompts, n8n / Zapier, ops thinking.",
    weeks: [
      {
        label: "W1",
        text: "Find the time sinks. List the repetitive tasks in your team's week and rank them by hours lost.",
      },
      {
        label: "W2",
        text: "Design and build one workflow that kills the biggest time sink, and measure the before and after.",
      },
      {
        label: "W3",
        text: "Build two more workflows, documenting each one: the problem, the build, and the hours saved.",
      },
      {
        label: "W4",
        text: "Package the three as case studies, post them, and offer the same to 10 similar teams.",
      },
    ],
    proof:
      "3 documented workflows, before and after hours for each, and a one-page services sheet.",
    position:
      "Sell workflow design to ops-heavy teams. Charge per workflow or move them onto a monthly retainer.",
    tools: "Claude Skills, n8n / Zapier, a time-tracking note, Notion.",
  },
];

export const AI_JOB_MAP_TEMPLATES: AiJobMapTemplate[] = [
  {
    number: 1,
    title: "The Proof Case Study",
    description:
      'Use this for every single thing you build. One filled-in version per project. This is what turns "I learned a tool" into "I can do this for you."',
    fields: [
      {
        label: "The problem:",
        placeholder:
          "[ Who had it and what it was costing them in time or money. ]",
      },
      {
        label: "What I built:",
        placeholder: "[ One or two plain sentences. No jargon. ]",
      },
      {
        label: "How:",
        placeholder:
          "[ The tools and the steps, short enough that a buyer trusts you did it. ]",
      },
      {
        label: "The result:",
        placeholder:
          "[ The number. Hours saved, money made, speed gained. Always a number. ]",
      },
      {
        label: "Proof:",
        placeholder: "[ Link to the demo, recording, or live thing. ]",
      },
    ],
  },
  {
    number: 2,
    title: "The Build-in-Public Post",
    description:
      "Post one of these every time you ship something in your 30 days. This is the engine that gets you found.",
    fields: [
      {
        label: "Hook:",
        placeholder:
          '[ The result or the surprise in one line. "I automated X in a weekend." ]',
      },
      {
        label: "Context:",
        placeholder:
          "[ What you built and why it mattered, two or three sentences. ]",
      },
      {
        label: "The hard part:",
        placeholder:
          "[ The thing that nearly broke. People trust the struggle. ]",
      },
      {
        label: "The result:",
        placeholder: "[ The number again, plus a screenshot or clip. ]",
      },
      {
        label: "Soft close:",
        placeholder:
          "[ One line on what you learned. No hard pitch yet. ]",
      },
    ],
  },
  {
    number: 3,
    title: "The Cold Pitch",
    description:
      "DM or email. Send 10 of these a week once you have proof. Keep it under 90 words.",
    fields: [
      {
        label: "Opener:",
        placeholder:
          '[ One specific, true line about them. Not "I love your content." ]',
      },
      {
        label: "The problem:",
        placeholder: "[ The thing you noticed that you can fix. ]",
      },
      {
        label: "What you'd build:",
        placeholder: "[ One concrete thing, not a menu of services. ]",
      },
      {
        label: "Proof:",
        placeholder: "[ One link to a case study from your 30 days. ]",
      },
      {
        label: "One ask:",
        placeholder:
          '[ A single clear next step. "Worth a 15-minute call this week?" ]',
      },
    ],
  },
  {
    number: 4,
    title: 'The "AI Person at Work" 90-Day Doc',
    description:
      "For the roles you grow into from inside a job (Ops Manager, Workflow Designer, Solutions Architect). This doc is your portfolio and your promotion case.",
    fields: [
      {
        label: "Days 1 to 30:",
        placeholder:
          "[ Audit. Map the tools, the costs, and the slowest workflows. ]",
      },
      {
        label: "Days 31 to 60:",
        placeholder:
          "[ Pilot. Ship one fix with one team and track time saved. ]",
      },
      {
        label: "Days 61 to 90:",
        placeholder:
          "[ Scale. Roll out, write the governance rules, and report the ROI. ]",
      },
      {
        label: "Metrics:",
        placeholder:
          "[ Hours saved, adoption rate, cost saved or revenue added. ]",
      },
      {
        label: "The ask:",
        placeholder:
          "[ What you want next: the title, the budget, or the fractional contract. ]",
      },
    ],
  },
];

export const AI_JOB_MAP_UNIVERSAL_STEPS = [
  "Pick ONE role from this guide. Not three. One.",
  "Spend 30 days building proof using the week-by-week plan.",
  "Build 3 things. Document every one of them.",
  "Post the work publicly so people can see what you can do.",
  "Apply to 10 jobs or pitch 10 clients. Then keep going.",
];

export const AI_JOB_MAP_PICK_GUIDE = [
  {
    label: "If you can already build or code:",
    text: "Agent & Automation Engineer, Solutions Architect, or No-Code Builder.",
  },
  {
    label: "If you make content or run socials:",
    text: "Content Strategist or Custom Project Builder.",
  },
  {
    label: "If you run ops, projects, or a team:",
    text: "AI Operations Manager or Workflow Designer.",
  },
  {
    label: "If you are great with people and product:",
    text: "AI Customer Success.",
  },
  {
    label: "If you have no idea:",
    text: "start with Workflow Designer. Everyone has repetitive work to kill, and the wins are fast.",
  },
];

export const AI_JOB_MAP_SLUG = "the-ai-job-map";
