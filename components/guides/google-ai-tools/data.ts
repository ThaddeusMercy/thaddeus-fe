export const SLUG = "google-ai-tools";

export const LABS_HOME = "https://labs.google/";

export const BEFORE_NOTES = [
  "NotebookLM is now called Gemini Notebook",
  "Free and individual access to Gemini CLI ended on 18 June 2026. Google now directs those users to Antigravity CLI",
  "Gemini Code Assist for individual users also stopped serving requests on 18 June 2026. Standard and Enterprise plans still exist",
  "Firebase Studio no longer accepts new users or new workspaces. Existing workspaces can be used until 22 March 2027",
  "Disco still requires a waitlist",
] as const;

export type ToolEntry = {
  n: string;
  name: string;
  body: string[];
  useful: string[];
  access?: string;
  links: { label: string; href: string }[];
  status?: string[];
};

export const TOOLS: ToolEntry[] = [
  {
    n: "1",
    name: "Pomelli",
    body: [
      "Pomelli is an AI marketing tool from Google Labs.",
      "It can study your website, learn your brand, and help you create campaign ideas, social posts, product images, brand books, and websites.",
    ],
    useful: [
      "Small businesses",
      "Personal brands",
      "Social media campaigns",
      "Product marketing",
      "Brand content",
    ],
    access: "Pomelli is free, but country and account access can vary.",
    links: [
      {
        label: "Try Pomelli",
        href: "https://labs.google.com/pomelli/about/",
      },
    ],
  },
  {
    n: "2",
    name: "Opal",
    body: [
      "Opal lets you build AI mini apps with normal language.",
      "You describe what the app should do, and Opal turns the idea into a visual set of steps that you can edit.",
    ],
    useful: [
      "Simple business tools",
      "Lead forms",
      "Research tools",
      "Content workflows",
      "Testing an app idea before building full software",
    ],
    links: [{ label: "Try Opal", href: "https://opal.google/" }],
  },
  {
    n: "3",
    name: "Stitch",
    body: [
      "Stitch turns a prompt into UI designs for websites and apps.",
      "You can describe the screen you want, change the result, and move the design into development tools.",
    ],
    useful: [
      "Website screens",
      "Mobile app screens",
      "Product mockups",
      "UI ideas",
      "Early prototypes",
    ],
    links: [{ label: "Try Stitch", href: "https://stitch.withgoogle.com/" }],
  },
  {
    n: "4",
    name: "Google Antigravity",
    body: [
      "Google Antigravity is an AI development platform.",
      "It can help you build, test, and work on software with AI agents. Google now offers a desktop app, an IDE, a CLI, and developer tools under the Antigravity name.",
    ],
    useful: [
      "Building apps and websites",
      "Working on an existing codebase",
      "Running several coding agents",
      "Testing and fixing software",
      "Automating development tasks",
    ],
    access:
      "Antigravity has a free individual plan with limits. Paid plans give more usage.",
    links: [
      { label: "Try Antigravity", href: "https://antigravity.google/" },
    ],
  },
  {
    n: "5",
    name: "Learn Your Way",
    body: [
      "Learn Your Way turns learning material into a more personal study experience.",
      "It can create explanations, mind maps, audio lessons, and quizzes based on the material you give it.",
    ],
    useful: [
      "Students",
      "Teachers",
      "Course creators",
      "Team training",
      "Learning a difficult topic",
    ],
    links: [
      {
        label: "Try Learn Your Way",
        href: "https://learnyourway.withgoogle.com/",
      },
    ],
  },
  {
    n: "6",
    name: "Gemini Notebook",
    body: [
      "Gemini Notebook is the new name for NotebookLM.",
      "It helps you study and research using the sources you add. You can upload documents, websites, videos, and notes, then ask questions or create summaries, study guides, quizzes, and audio overviews.",
    ],
    useful: [
      "Research",
      "Studying",
      "Long reports",
      "Lesson planning",
      "Presentation research",
      "Turning source material into audio",
    ],
    links: [
      { label: "Try Gemini Notebook", href: "https://notebooklm.google/" },
    ],
  },
  {
    n: "7",
    name: "Mixboard",
    body: [
      "Mixboard is an AI board for exploring visual ideas.",
      "You can add text and images, compare different directions, build mood boards, and turn your board into a presentation.",
    ],
    useful: [
      "Mood boards",
      "Campaign ideas",
      "Product ideas",
      "Brand direction",
      "Presentations",
      "Visual planning",
    ],
    links: [
      {
        label: "Try Mixboard",
        href: "https://labs.google.com/mixboard/welcome",
      },
    ],
  },
  {
    n: "8",
    name: "Disco",
    body: [
      "Disco is a Google Labs web experiment.",
      "Its GenTabs feature can turn the browser tabs you already have open into a small interactive app.",
    ],
    useful: [
      "Organising web research",
      "Comparing information across tabs",
      "Turning open pages into one working view",
      "Testing new ways to browse the web",
    ],
    access: "Disco still requires you to join a waitlist.",
    links: [{ label: "Join the waitlist", href: "https://labs.google/disco" }],
  },
  {
    n: "9",
    name: "Jules",
    body: [
      "Jules is a coding agent that connects to GitHub.",
      "You give it a repository and a task. It can study the code, make changes, and prepare a pull request for you to review.",
    ],
    useful: [
      "Fixing bugs",
      "Writing tests",
      "Updating packages",
      "Adding small features",
      "Improving documentation",
      "Handling coding tasks while you work on something else",
    ],
    access:
      "Jules has free and paid plans. The usage limits depend on your plan.",
    links: [{ label: "Try Jules", href: "https://jules.google/" }],
  },
  {
    n: "10",
    name: "Firebase Studio",
    body: [
      "Firebase Studio was Google's browser-based workspace for building full-stack apps.",
    ],
    useful: [],
    status: [
      "New user signup is closed",
      "New workspace creation is closed",
      "Existing users can still use and move their projects",
      "Firebase Studio will close on 22 March 2027",
    ],
    access:
      "Do not start a new long-term project there. Google recommends moving to Google AI Studio or Antigravity.",
    links: [
      {
        label: "Existing users",
        href: "https://studio.firebase.google.com/",
      },
      {
        label: "Migration guide",
        href: "https://firebase.google.com/docs/studio/migrating-project",
      },
    ],
  },
  {
    n: "11",
    name: "Google Flow Music",
    body: [
      "Google Flow Music, formerly called ProducerAI, is an AI music studio.",
      "It can help you create songs, work on lyrics and melodies, edit parts of a track, and create music videos.",
    ],
    useful: [
      "Song ideas",
      "Lyrics and melodies",
      "Music experiments",
      "Background music",
      "Music videos",
      "Trying new genres",
    ],
    access:
      "It has free and paid plans. Some features may need a Google AI subscription.",
    links: [
      { label: "Try Google Flow Music", href: "https://www.flowmusic.app/" },
    ],
  },
  {
    n: "12",
    name: "Gemini CLI",
    body: [
      "Gemini CLI was Google's terminal AI tool for individual users and teams.",
    ],
    useful: [],
    status: [
      "Free and individual Google login access stopped serving requests on 18 June 2026",
      "Individual users should move to Antigravity CLI",
      "Some Standard and Enterprise access still remains",
      "The open source repository is still online",
    ],
    links: [
      {
        label: "Gemini CLI repository",
        href: "https://github.com/google-gemini/gemini-cli",
      },
      { label: "Move to Antigravity", href: "https://antigravity.google/" },
    ],
  },
  {
    n: "13",
    name: "Code Wiki",
    body: [
      "Code Wiki creates and updates documentation for code repositories.",
      "It can help you understand a new codebase, see how different files connect, and read a clearer explanation of how a project works.",
    ],
    useful: [
      "Understanding an unfamiliar repository",
      "Onboarding developers",
      "Reading open source projects",
      "Creating code documentation",
      "Learning how a project is organised",
    ],
    links: [{ label: "Try Code Wiki", href: "https://codewiki.google/" }],
  },
  {
    n: "14",
    name: "Gemini Code Assist",
    body: [
      "Gemini Code Assist gives AI coding help inside supported development tools.",
      "It can help with code completion, code generation, explanations, and other coding tasks.",
    ],
    useful: [],
    status: [
      "Individual and Google AI consumer access stopped serving requests on 18 June 2026",
      "Standard and Enterprise subscriptions still exist",
      "Individual users should use Antigravity instead",
    ],
    links: [
      {
        label: "Gemini Code Assist",
        href: "https://developers.google.com/gemini-code-assist",
      },
      {
        label: "Consumer access update",
        href: "https://developers.google.com/gemini-code-assist/docs/deprecations/code-assist-individuals",
      },
    ],
  },
  {
    n: "15",
    name: "Google AI Studio",
    body: [
      "Google AI Studio lets you test Gemini models, create prompts, build AI apps, and get code for a prototype.",
    ],
    useful: [
      "Testing Gemini models",
      "Building AI apps and websites",
      "Working with text, images, audio, and video",
      "Creating structured prompts",
      "Getting API code",
      "Testing an idea before building a larger product",
    ],
    access:
      "Google AI Studio has free usage, but the limits depend on the model, country, and account. Paid API use is separate.",
    links: [
      { label: "Try Google AI Studio", href: "https://aistudio.google.com/" },
    ],
  },
];

export const START_GROUPS = [
  {
    title: "For business owners",
    items: [
      "Pomelli for marketing",
      "Opal for mini apps and simple workflows",
      "Gemini Notebook for research",
      "Mixboard for campaign ideas",
      "Google AI Studio for testing a custom AI tool",
    ],
  },
  {
    title: "For creators",
    items: [
      "Pomelli for brand content",
      "Stitch for design ideas",
      "Mixboard for mood boards",
      "Gemini Notebook for research",
      "Google Flow Music for music and audio",
    ],
  },
  {
    title: "For developers",
    items: [
      "Antigravity for building software with agents",
      "Jules for GitHub tasks",
      "Code Wiki for understanding repositories",
      "Stitch for UI ideas",
      "Google AI Studio for Gemini app prototypes",
    ],
  },
  {
    title: "For students and teachers",
    items: [
      "Learn Your Way for personal study material",
      "Gemini Notebook for notes, quizzes, and audio overviews",
      "Opal for small learning tools",
      "Google AI Studio for AI experiments",
    ],
  },
] as const;

export const TEST_EXAMPLES = [
  { need: "Need a social media campaign?", tool: "Try Pomelli" },
  { need: "Need an app screen?", tool: "Try Stitch" },
  { need: "Need a small workflow?", tool: "Try Opal" },
  { need: "Need to understand a long report?", tool: "Try Gemini Notebook" },
  { need: "Need help with a GitHub task?", tool: "Try Jules" },
  {
    need: "Need to build an app?",
    tool: "Try Antigravity or Google AI Studio",
  },
] as const;

export const IMPORTANT_NOTES = [
  "Google Labs tools are experiments and can change or close",
  "Free access usually has limits",
  "Some tools are not available in every country",
  "Read the privacy rules before uploading private business or customer information",
  "Keep a copy of important work outside experimental tools",
  "Check the product page before promising a tool to a client or team",
] as const;

export const FAQS = [
  {
    q: "Are all 15 tools completely free?",
    a: "No. Many have a free plan or free access, but some have limits, paid plans, waitlists, or country restrictions.",
  },
  {
    q: "Which tool is easiest for a beginner?",
    a: "Gemini Notebook is easy for research and learning. Pomelli is simple for a business owner. Mixboard is easy for visual ideas. Opal is a good first step for building a small AI workflow.",
  },
  {
    q: "Which tool is best for building an app?",
    a: "Use Antigravity for agent-based development, Google AI Studio for Gemini app prototypes, or Opal for a smaller mini app.",
  },
  {
    q: "Can I still create a new Firebase Studio project?",
    a: "No. New user signup and new workspace creation are closed.",
  },
  {
    q: "Should I still install Gemini CLI?",
    a: "Individual users should move to Antigravity CLI. Gemini CLI still matters for some Standard and Enterprise users.",
  },
  {
    q: "What happened to NotebookLM?",
    a: "NotebookLM was renamed Gemini Notebook in July 2026. Your existing notebooks stay in the same product.",
  },
] as const;
