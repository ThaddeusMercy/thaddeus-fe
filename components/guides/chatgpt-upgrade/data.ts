export const CHATGPT_UPGRADE_SLUG = "chatgpt-upgrade-playbook";

export type Tier = {
  id: "sol" | "terra" | "luna";
  name: string;
  role: string;
  body: string;
};

export type RouteRow = {
  task: string;
  lane: string;
  why: string;
};

export type PromptBlock = {
  tag: string;
  text: string;
};

export const TIERS: Tier[] = [
  {
    id: "sol",
    name: "Sol",
    role: "Flagship · deepest reasoning",
    body: "The one to reach for when the task needs persistence: long-running agent work, big codebases, research that spans dozens of steps, anything where you would rather wait and get it right. In ChatGPT it powers the Medium, High, and Extra High reasoning settings on paid plans, with a Sol Pro option on Pro and Enterprise.",
  },
  {
    id: "terra",
    name: "Terra",
    role: "Balanced · everyday default",
    body: "Roughly the performance you were getting from the previous flagship, at a fraction of the price. This is the sane default for scoped work: drafting, first-pass review, everyday agentic tasks, most content and ops workflows. Free and Go users get Terra inside Work and Codex.",
  },
  {
    id: "luna",
    name: "Luna",
    role: "Fast · lowest cost",
    body: "The volume lane. Summarising, labelling, extracting, classifying, cleaning data, first drafts you will rewrite anyway. If the job is mostly shuffling text rather than thinking hard about it, Luna does it fast and cheap, and you escalate only when it stalls.",
  },
];

export const ROUTE_ROWS: RouteRow[] = [
  {
    task: "Long agent run, multi-file code, deep research",
    lane: "Sol",
    why: "Holds the thread across many steps without losing the plot",
  },
  {
    task: "Content drafts, scoped features, reviews, analysis",
    lane: "Terra",
    why: "Flagship-class output at everyday cost",
  },
  {
    task: "Bulk summaries, tagging, extraction, cleanup",
    lane: "Luna",
    why: "Speed and price are the constraints, not depth",
  },
];

export const DECK_PROMPT: PromptBlock = {
  tag: "Prompt · editable deck from source material",
  text: `Build a 10-slide investor update from the attached notes and last quarter's deck.
Match the attached deck exactly: same fonts, same colour palette, same slide
structure, same tone of voice.
One idea per slide. Every number must trace back to a line in my notes.
Where a number is missing, leave a visible placeholder instead of guessing.
Give me the editable file, not an image.`,
};

export const WORK_TASKS: PromptBlock[] = [
  {
    tag: "Task 1 · the inbox triage",
    text: `Go through my email, calendar and Slack from the last 7 days.
Pull out anything that needs a decision or a reply from me, and ignore anything
that is FYI only.
Build me a priority list with three buckets: reply today, reply this week, no
action needed but worth knowing.
For each item in bucket one, draft the reply in my voice and leave it as a draft.
Do not send anything. Check in with me before you touch any draft.`,
  },
  {
    tag: "Task 2 · the recurring report",
    text: `Every Friday at 4pm, pull this week's numbers from the connected sheet and the
analytics dashboard.
Compare against the previous week and the same week last month.
Write a one-page summary: what moved, why it likely moved, and the one thing I
should act on.
Chart the two metrics that moved the most.
Deliver it as a doc and drop a three-line version in my Slack DMs.`,
  },
  {
    tag: "Task 3 · the messy project",
    text: `Here is a folder of raw material for a campaign: notes, transcripts, and two
competitor pages.
Read all of it first, then show me your plan before you build anything.
The output I want is: a one-page campaign brief, a content calendar as a
spreadsheet, and a 6-slide deck for the client.
Use my brand template for the deck. Ask me questions where the source material
is thin instead of inventing an answer.`,
  },
];

export const GUARDRAILS = [
  "Turn Plan mode on and read the plan before approving. This is where you catch a misread brief, and it costs you thirty seconds.",
  "Keep approvals on for anything that leaves your account: sending mail, posting, publishing, paying.",
  "Connect apps one at a time and watch what it pulls in. Full access on day one gives you no way to trace a bad output back to a source.",
  "Write down how long the task takes you by hand before the agent touches it. Without that number you cannot tell whether this is saving you anything.",
  "Give it a task you can grade. If you cannot instantly spot a wrong answer, you are not supervising, you are hoping.",
] as const;

export const SITES_USES = [
  { title: "Live dashboards", body: "that stay updated as the underlying data changes." },
  {
    title: "Project trackers and launch calendars",
    body: "your team opens instead of asking you for status.",
  },
  {
    title: "Prototypes",
    body: "you can put in front of a client on a call rather than describing.",
  },
  {
    title: "Internal portals",
    body: "onboarding hubs, resource libraries, SOP pages.",
  },
  {
    title: "Interactive reports",
    body: "where the reader can filter and explore rather than scroll a PDF.",
  },
] as const;

export const SITES_PROMPT: PromptBlock = {
  tag: "Prompt · internal tracker in one shot",
  text: `Build me a web app my team can open at a link.
It is a content tracker: each item has a title, platform, owner, status
(idea / scripting / filming / editing / scheduled / posted), and a publish date.
Give me a kanban view by status and a calendar view by publish date.
Anyone with the link can add and edit items. No login.
Seed it with the 12 items in the attached sheet.
Keep the design clean: dark background, one accent colour, big readable type.`,
};

export const SETUP_STEPS = [
  {
    title: "Update your app.",
    body: "Desktop is where the agent is strongest: it can reach local files, use a built-in browser, and work across apps. Mobile is for kicking off and reviewing.",
  },
  {
    title: "Connect one app.",
    body: "Start with the one holding the context you repeat most often. For most people that is email or Drive.",
  },
  {
    title: "Pick your default lane.",
    body: "Terra for everyday. Sol when the task is long or the stakes are real. Luna for volume.",
  },
  {
    title: "Run one known task.",
    body: "Use Task 1 above. Grade the output honestly against what you would have produced.",
  },
  {
    title: "Schedule one recurring job.",
    body: "The weekly report, the Monday agenda, the daily dashboard check. Recurring work is where the hours actually come back.",
  },
  {
    title: "Publish one Site.",
    body: "Turn your most-asked-about status update into a link.",
  },
] as const;

export const WORK_DIFFERENCES = [
  {
    title: "It holds context across the whole chain.",
    body: "You do not re-explain the project at every stage.",
  },
  {
    title: "It acts, not just answers.",
    body: "Connected apps mean it can read your email, calendar, Slack, notes, and repos and then produce something from all of them at once.",
  },
  {
    title: "It asks before it commits.",
    body: "You set what it can touch, when it checks in, and which actions need your sign-off. Plan mode shows you the plan before any work starts.",
  },
  {
    title: "It moves between devices.",
    body: "Kick a task off on your phone, review the draft in a queue, pick it back up on desktop.",
  },
  {
    title: "Scheduled Tasks make it recurring.",
    body: "It can run once, run on a schedule, run on an event, or watch something and tell you when it changes.",
  },
] as const;
