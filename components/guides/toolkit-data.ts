export type ToolkitEntry = {
  id: string;
  name: string;
  tagline: string;
  whatFor: string;
  whyMatters: string;
  howTo: string[];
};

export const TOOLKIT_META = {
  kicker: "The Toolkit",
  handle: "@mercythaddeus_",
  title: "13 AI Tools I Use Every Day.",
  subtitle:
    "What I use them for, why they matter, and how you can start using them today.",
  author: "Mercy Thaddeus",
  role: "Co-founder, Attention Factory",
  toolCount: "13 tools",
  usage: "Used daily",
  closing: {
    heading: "That's the toolkit",
    body: "That's my toolkit.\nYou don't need all 13. Pick 2 or 3 that fit how you work and start there.\n\nAI is moving fast. The people who win are the ones who actually use these tools, not the ones who just read about them.\n\nTry one today. That's all it takes to start.",
    signoff: "Your AI big sister",
    site: "mercythaddeus.xyz",
  },
} as const;

export const TOOLKIT_ENTRIES: ToolkitEntry[] = [
  {
    id: "01",
    name: "Claude",
    tagline: "My AI co-pilot for everything",
    whatFor:
      "Claude is my main AI and I use it for almost everything. Business strategy, writing code, building products, analyzing data, drafting proposals, creating content, planning projects, debugging problems, researching markets, and thinking through hard decisions. If I'm working, Claude is open.",
    whyMatters:
      "Claude handles complex, multi-step thinking better than anything else I've tried. It writes clean code, produces human-quality writing, processes huge documents, and gives thoughtful answers instead of generic ones. It's like having a cofounder, strategist, writer, and developer in one tab.",
    howTo: [
      "Use Projects to give Claude permanent context about your business, writing style, and goals",
      "Feed it your messiest thinking and let it structure your ideas into something actionable",
      "Use it to write and debug code, plan product features, and build entire apps",
      "Treat it like a thinking partner, not just a chatbot. Ask it to challenge your assumptions and find blind spots",
    ],
  },
  {
    id: "02",
    name: "Comet Browser",
    tagline: "Browsing with AI built in",
    whatFor:
      "Comet is Perplexity's browser. I use it to browse the web with AI baked into every page. I can ask questions about any article or video I'm watching without leaving the page.",
    whyMatters:
      "Instead of copying and pasting content into ChatGPT, the AI is right there while you browse. It turns every YouTube video into a learning session.",
    howTo: [
      "Install Comet and use it as your daily browser",
      "Open any YouTube video and ask the AI to summarize key points",
      "Highlight text on any webpage and ask the AI to explain it",
      "Use it for research sessions where you need to process a lot of information fast",
    ],
  },
  {
    id: "03",
    name: "SuperWhisper",
    tagline: "Voice to text",
    whatFor:
      "SuperWhisper turns my voice into text instantly. I use it to dictate ideas, draft content, write emails, and capture thoughts on the go. Talking is faster than typing.",
    whyMatters:
      "When ideas are flowing, I don't want to slow down to type. SuperWhisper captures everything and I clean it up later. It's like having a personal transcriber on your Mac.",
    howTo: [
      "Set a keyboard shortcut to activate it instantly",
      "Talk through your ideas naturally, don't worry about structure",
      "Use it to draft newsletter content, social posts, or notes",
      "Pair it with Claude to clean up and structure your dictation",
    ],
  },
  {
    id: "04",
    name: "TranscriptX",
    tagline: "Video transcription",
    whatFor:
      "TranscriptX transcribes video and audio files fast. I use it to turn long videos, meetings, and voice notes into text I can actually work with.",
    whyMatters:
      "So much valuable content is locked in video and audio. Transcribing it means you can repurpose it into newsletters, social posts, or documentation.",
    howTo: [
      "Upload your video or audio file",
      "Get the transcript in minutes",
      "Use the transcript to create blog posts, social content, or show notes",
      "Search through transcripts to find specific moments",
    ],
  },
  {
    id: "05",
    name: "NotebookLM",
    tagline: "Learn from your own documents",
    whatFor:
      "NotebookLM lets you upload your own documents and have AI conversations about them. I use it to study reports, analyze long PDFs, and prep for meetings or trainings.",
    whyMatters:
      "Most AI tools only know what's on the internet. NotebookLM knows YOUR documents. Upload a contract, a research paper, or meeting notes and ask it anything.",
    howTo: [
      "Upload PDFs, docs, or notes you want to learn from",
      "Ask questions about the content in plain English",
      "Use it to prep for client calls by uploading their materials",
      "Generate audio summaries you can listen to on the go",
    ],
  },
  {
    id: "06",
    name: "Perplexity",
    tagline: "Research & answers",
    whatFor:
      "Perplexity is my search engine replacement. Whenever I need to research a topic, fact-check something, or find up-to-date information, I go here instead of Google.",
    whyMatters:
      "It gives you direct answers with sources instead of a list of links. Saves time and you actually trust what you're reading because every claim is cited.",
    howTo: [
      "Use it for any question you'd normally Google",
      "Try Pro Search for deeper, multi-step research",
      "Use it to research competitors, trends, or market data",
      "Ask follow-up questions to go deeper on any topic",
    ],
  },
  {
    id: "07",
    name: "Gemini",
    tagline: "Multimodal AI & Google integration",
    whatFor:
      "Gemini is Google's AI and it shines when I need to work across text, images, video, and code in the same conversation. It also connects directly to Google's ecosystem, which makes it powerful for anything involving Search, Docs, or Gmail.",
    whyMatters:
      "When a task involves multiple formats or needs real-time information from the web, Gemini handles it smoothly. It's especially useful for visual tasks and when you're already deep in Google's tools.",
    howTo: [
      "Use it for tasks that mix text and images, like analyzing screenshots or designing layouts",
      "Ask it questions that need current, real-time information from the web",
      "Connect it with Google Workspace to summarize emails, draft docs, or organize your Drive",
      "Use it as a second opinion alongside Claude for important decisions",
    ],
  },
  {
    id: "08",
    name: "HeyGen",
    tagline: "AI clone for creators",
    whatFor:
      "HeyGen lets me clone myself. As a content creator, there are times I can't show up on camera but still need to put out content. HeyGen creates a hyper-realistic AI avatar of me that looks and sounds like the real thing. I use it to keep content flowing even when I'm not available to film.",
    whyMatters:
      "Consistency is everything in content creation. But life happens. You get sick, you travel, you're burned out. HeyGen means you never go silent. Your clone shows up so you don't have to.",
    howTo: [
      "Record a short high-quality training video of yourself (good lighting, clear audio)",
      "Let HeyGen create your personal AI avatar",
      "Write your script and paste it in. Your avatar delivers it in your voice and mannerisms",
      "Use it for days you can't film, for repurposing content in other languages, or for scaling video output",
    ],
  },
  {
    id: "09",
    name: "Cursor",
    tagline: "Professional software development",
    whatFor:
      "Cursor is an AI-powered code editor built for software engineers. I use it as my daily development environment for building production apps, writing clean code, refactoring, and shipping features fast. It understands your codebase and helps you move through complex projects with speed.",
    whyMatters:
      "As a software engineer, Cursor has fundamentally changed how I work. It's not a toy for generating quick demos. It's a serious development tool that understands context across your entire codebase, suggests intelligent completions, and helps you write better, more maintainable code.",
    howTo: [
      "Use it as your primary IDE and let it index your full codebase for context-aware suggestions",
      "Use Cmd+K to write, refactor, or explain code inline",
      "Paste error messages and stack traces to get targeted debugging help",
      "Use it for code reviews, writing tests, and documenting your work",
    ],
  },
  {
    id: "10",
    name: "Higgsfield",
    tagline: "AI video & image generation",
    whatFor:
      "Higgsfield is an AI aggregator that brings all the top generation models into one place. Instead of jumping between different apps, I use Higgsfield to access models like Nano Banana, Kling AI, and more from a single interface. I use it mainly for video and image generation.",
    whyMatters:
      "New AI models drop every week. Instead of signing up for each one separately, Higgsfield gives you access to the best ones in one workspace. You can test, compare, and create without switching platforms.",
    howTo: [
      "Sign up and explore the available models for image and video generation",
      "Use Nano Banana for image generation and Kling AI for video",
      "Compare outputs from different models side by side to find what works best",
      "Use it for social content, thumbnails, short videos, and creative projects",
    ],
  },
  {
    id: "11",
    name: "Gamma",
    tagline: "Decks & docs in minutes",
    whatFor:
      "Gamma is how I make presentations and documents without starting from a blank slide. I describe what I want, it generates a clean first draft, and I shape it from there. I use it for client decks, training slides, and one-pagers.",
    whyMatters:
      "Building decks by hand eats hours I don't have. Gamma gets me to a polished, on-brand draft fast, so my energy goes into the ideas and the story instead of dragging text boxes around.",
    howTo: [
      "Type a prompt or paste your outline and let it build the first version",
      "Pick a theme so every slide stays visually consistent",
      "Edit the generated slides instead of designing from zero",
      "Use it for pitches, lessons, proposals, and internal docs",
    ],
  },
  {
    id: "12",
    name: "ElevenLabs",
    tagline: "Natural AI voice",
    whatFor:
      "ElevenLabs is what I use for voice. Narration, voiceovers, and audio for content when I'm not recording myself. The voices sound natural enough that people often can't tell.",
    whyMatters:
      "Audio used to mean a mic, a quiet room, and a re-record every time I fluffed a line. Now I can generate clean narration from text in minutes, in different voices and languages, which makes scaling content far easier.",
    howTo: [
      "Paste your script and pick a voice that fits your content",
      "Clone your own voice for consistency across everything you make",
      "Use it for reels, explainers, audiobooks, and faceless content",
      "Generate the same script in other languages to reach a wider audience",
    ],
  },
  {
    id: "13",
    name: "Lovable",
    tagline: "Build & ship websites fast",
    whatFor:
      "Lovable lets me describe an app or website and get a working version back. I use it to spin up landing pages, prototypes, and small products quickly without setting up a full project from scratch.",
    whyMatters:
      "Not every idea deserves a week of setup. Lovable gets something real and clickable in front of me fast, so I can test whether an idea is worth building properly before I commit engineering time.",
    howTo: [
      "Describe the site or app you want in plain language",
      "Keep chatting with it until the layout and flow feel right",
      "Connect a database when you need real functionality",
      "Ship it live, then refine from there",
    ],
  },
];
