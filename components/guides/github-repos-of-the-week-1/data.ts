export const SLUG = "github-repos-of-the-week-1";

export const UNIVERSITY_URL =
  "https://academy.attentionfactory.io/ai-university?ref=mercythaddeus";

export const STARS_AS_OF = "Oct 14, 2026";

const IMG = "/guides/github-repos-of-the-week-1";

export type RepoLink = { label: string; href: string };

export type RepoCopy = { label: string; text: string };

export type RepoImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
};

/** One of this week's top three, with the full write-up. */
export type Repo = {
  id: string;
  num: string;
  name: string;
  slug: string;
  url: string;
  tagline: string;
  what: string[];
  tryThis: string;
  need: string;
  free: string;
  worksWith: string;
  stars: string;
  buzz: string;
  image: RepoImage;
  links: RepoLink[];
  copies?: RepoCopy[];
  caveat?: string;
};

/** One of the extra repos, with a shorter write-up. */
export type MoreRepo = {
  id: string;
  num: string;
  name: string;
  slug: string;
  url: string;
  tagline: string;
  summary: string;
  need: string;
  free: string;
  stars: string;
  image: RepoImage;
  links: RepoLink[];
  copies: RepoCopy[];
  caveat?: string;
};

export const HOW_TO_STEPS = [
  {
    title: "Open the link and read the top of the README.",
    body: "The README is the page that shows up under the list of files. Its first few lines tell you what the tool does, who it's for and what it looks like. That's usually all you need to decide if it's worth your weekend.",
  },
  {
    title: "Follow the install steps, or let AI do them for you.",
    body: "Most READMEs have an install section you can follow line by line. If that looks scary, open Claude Code, paste the repo link and ask it to set the tool up for you. It reads the README, runs the steps and asks for your OK before it runs commands. On ChatGPT, paste the link and ask it to walk you through the install one step at a time.",
  },
  {
    title: "Start with the example in the README.",
    body: "Almost every repo includes a sample prompt or demo. Run that first so you know everything works, then try it on your own photo, video, deck or website.",
  },
];

export const SETUP_PROMPT = `Set up this GitHub repo for me: [paste the repo link]

I'm not a developer. Read the README first, then tell me in plain English what this tool does, what it needs on my computer and whether anything costs money.

Then install it step by step. Explain each step before you run it, and ask me before you download anything large.

When it's done, run the example from the README so I can see it working.`;

export const REPOS: Repo[] = [
  {
    id: "photocraft",
    num: "01",
    name: "PhotoCraft",
    slug: "storytold/photocraft",
    url: "https://github.com/storytold/photocraft",
    tagline: "A free, open-source Photoshop alternative",
    what: [
      "PhotoCraft is a free photo editor that works a lot like Photoshop. It has layers, masks, text, filters and adjustment layers, and it opens and saves Photoshop (PSD) files.",
      "It runs on your own computer, offline, with nothing to subscribe to. The same team also makes free sister apps for video editing, vector illustration, photo libraries, PDFs, motion graphics and page layout.",
    ],
    tryThis:
      "Grab a PSD flyer or thumbnail template you've been wanting to edit and change the text, colours and photos without paying for Photoshop.",
    need: "No coding. Download the app for Mac, Windows or Linux from the PhotoCraft website.",
    free: "Free. MIT or Apache-2.0 licence, your choice.",
    worksWith:
      "Mac, Windows and Linux. It also has a command-line tool and an MCP server, so AI agents like Claude Code can drive it.",
    stars: "58.1k",
    buzz: "Launched Sep 30, 2026, then gained 48,087 stars in the week of Oct 5 to 11, making it the #2 repo on all of GitHub that week.",
    image: {
      src: `${IMG}/1-photocraft.webp`,
      width: 1600,
      height: 1000,
      alt: "PhotoCraft editing Girl with a Pearl Earring, with an oval selection, a Hue/Saturation adjustment layer and the Layers panel open",
      caption:
        "Editing in PhotoCraft: an adjustment layer turns everything outside the oval black and white, with Photoshop-style layers and panels on the right.",
    },
    links: [
      { label: "Open the repo on GitHub", href: "https://github.com/storytold/photocraft" },
      { label: "Download PhotoCraft", href: "https://getartcraft.com/apps/photocraft" },
    ],
    caveat:
      "The team calls PhotoCraft “early alpha” and says it isn't yet a Photoshop replacement for daily professional work. It has no AI features yet either. Expect some rough edges, and keep a copy of any file you care about before you edit it.",
  },
  {
    id: "voicestudio",
    num: "02",
    name: "VoiceStudio",
    slug: "debpalash/VoiceStudio",
    url: "https://github.com/debpalash/VoiceStudio",
    tagline: "A free ElevenLabs alternative that runs on your computer",
    what: [
      "VoiceStudio does voice cloning, designs new voices from a written description, dubs videos into other languages, transcribes audio, takes dictation and turns text into audiobooks. The README says it covers 646 languages.",
      "Its local workflows run on your own computer, so your recordings don't have to leave it.",
    ],
    tryThis:
      "Clone your own voice from a clean recording and generate a voiceover for your next reel. Or dub a short video into another language and see how it sounds.",
    need: "No coding. There are installers for Mac (Apple Silicon), Windows and Linux. No graphics card? It still works on your computer's processor, just slower.",
    free: "Free and open source. AGPL-3.0 licence.",
    worksWith:
      "Mac (Apple Silicon), Windows and Linux. It has a local API and MCP, so AI agents can use it too.",
    stars: "63.5k",
    buzz: "#3 on GitHub's daily Trending list on Oct 14, and #1 for Python.",
    image: {
      src: `${IMG}/2-voicestudio.webp`,
      width: 1440,
      height: 960,
      alt: "VoiceStudio's voice design screen, with a box to describe a voice, starting points like Narrator and Storyteller, demo voices and a Synthesize audio button",
      caption:
        "VoiceStudio's voice design screen: describe the voice you want, or start from one of the demo voices.",
    },
    links: [
      { label: "Open the repo on GitHub", href: "https://github.com/debpalash/VoiceStudio" },
      { label: "Download the installers", href: "https://github.com/debpalash/VoiceStudio/releases/latest" },
    ],
    copies: [
      {
        label: "Paste into Claude Code to install it",
        text: `Install the VoiceStudio Electron app on this device and verify it works, following
https://github.com/debpalash/VoiceStudio/blob/main/docs/install/agent.md`,
      },
    ],
    caveat:
      "Clone voices only with permission. Your own voice is fine. Anyone else's voice needs their clear OK first.",
  },
  {
    id: "hyperframes",
    num: "03",
    name: "HyperFrames",
    slug: "heygen-com/hyperframes",
    url: "https://github.com/heygen-com/hyperframes",
    tagline: "HeyGen's free tool that lets Claude Code make MP4 videos",
    what: [
      "HyperFrames, from HeyGen, gives your AI coding tool the skills to make finished MP4 videos. You describe the video and it plans it, builds it and renders it on your computer.",
      "It can make product launch videos, faceless explainers, captions on talking-head videos, motion graphics and music videos that move to the beat.",
    ],
    tryThis:
      "Install the Claude Code plugin and ask for a 10-second product intro using the example prompt below. Then swap in your own product or brand.",
    need: "Some terminal setup. You need Claude Code (or another AI coding tool), plus Node.js 22 or newer and FFmpeg on your computer.",
    free: "Free. Apache-2.0 licence, with no per-render fees.",
    worksWith: "Claude Code, Codex, Cursor and Gemini CLI.",
    stars: "62.9k",
    buzz: "#5 on GitHub's weekly Trending list on Oct 14, with 4,732 new stars that week.",
    image: {
      src: `${IMG}/3-hyperframes.webp`,
      width: 1600,
      height: 900,
      alt: "HyperFrames editing a launch video, with the video preview, a timeline of scenes and a chat panel for describing changes",
      caption:
        "Editing a video in HyperFrames: a preview, a timeline of scenes and a box where you describe a change.",
    },
    links: [
      { label: "Open the repo on GitHub", href: "https://github.com/heygen-com/hyperframes" },
      { label: "Read the quickstart", href: "https://hyperframes.heygen.com/quickstart" },
    ],
    copies: [
      {
        label: "Install in your terminal (Claude Code)",
        text: `claude plugin marketplace add heygen-com/hyperframes
claude plugin install hyperframes@hyperframes`,
      },
      {
        label: "Then try this prompt in Claude Code",
        text: "Using /hyperframes, create a 10-second product intro with a fade-in title, a background video, and subtle background music.",
      },
    ],
  },
];

export const MORE_REPOS: MoreRepo[] = [
  {
    id: "impeccable",
    num: "04",
    name: "Impeccable",
    slug: "pbakaus/impeccable",
    url: "https://github.com/pbakaus/impeccable",
    tagline: "Stop your AI-built website from looking AI-made",
    summary:
      "A design add-on for your AI coding tool. It teaches the AI to skip the giveaways of an AI-made site, like the same Inter font everywhere, purple-to-blue gradients and cards stacked inside cards. Then you use commands like /impeccable polish, critique and bolder to ask for the design pass you want.",
    need: "Node.js for the installer, plus Claude Code, Cursor, Gemini CLI or Codex.",
    free: "Free, Apache-2.0",
    stars: "80.8k",
    image: {
      src: `${IMG}/4-impeccable.webp`,
      width: 1440,
      height: 1800,
      alt: "The same restaurant website before and after an Impeccable design pass: a plain cream page on top and a bold red and yellow redesign below",
      caption: "Before (top) and after (bottom): the same restaurant page, from Impeccable.",
    },
    links: [
      { label: "Open the repo on GitHub", href: "https://github.com/pbakaus/impeccable" },
      { label: "Visit impeccable.style", href: "https://impeccable.style" },
    ],
    copies: [
      {
        label: "Install from your project folder (terminal)",
        text: "npx impeccable install",
      },
      {
        label: "Then run these in your AI coding tool",
        text: `/impeccable init
/impeccable polish`,
      },
    ],
  },
  {
    id: "diagram-design",
    num: "05",
    name: "Diagram Design",
    slug: "cathrynlavery/diagram-design",
    url: "https://github.com/cathrynlavery/diagram-design",
    tagline: "Clean, designer-quality diagrams from a plain-English request",
    summary:
      "A skill for your AI coding tool. Ask in plain words for a flowchart, timeline, org chart or any of its 45 diagram types and it draws a clean one. Point it at your website once and every diagram after that matches your brand colours and fonts.",
    need: "Claude Code, Codex, Cursor, GitHub Copilot or Gemini CLI.",
    free: "Free, MIT",
    stars: "54.2k",
    image: {
      src: `${IMG}/5-diagram-design.webp`,
      width: 1600,
      height: 961,
      alt: "A flowchart made with Diagram Design: new workflow, do it manually once, then two yes or no questions that lead to one-off, project note or write a skill",
      caption: "A flowchart made with Diagram Design.",
    },
    links: [
      { label: "Open the repo on GitHub", href: "https://github.com/cathrynlavery/diagram-design" },
      { label: "See the gallery", href: "https://cathrynlavery.github.io/diagram-design/" },
    ],
    copies: [
      {
        label: "Install inside Claude Code",
        text: `/plugin marketplace add cathrynlavery/diagram-design
/plugin install diagram-design@diagram-design`,
      },
      {
        label: "Using another AI tool? Install in your terminal",
        text: "npx skills add cathrynlavery/diagram-design",
      },
      {
        label: "Then send these one at a time",
        text: `Onboard diagram-design to [your website link]

Make me a flowchart of how I onboard a new client: [list your steps]`,
      },
    ],
    caveat:
      "PNG export needs a one-time extra install (Playwright). Your AI tool can set it up the first time you ask for a PNG.",
  },
  {
    id: "ppt-master",
    num: "06",
    name: "PPT Master",
    slug: "hugohe3/ppt-master",
    url: "https://github.com/hugohe3/ppt-master",
    tagline: "Turn any PDF, doc or topic into an editable PowerPoint",
    summary:
      "Give it a PDF, Word doc, web page or plain topic and it makes a PowerPoint deck where the charts, shapes and text stay editable. It can also add transitions, animations and narration to a finished deck.",
    need: "Python 3.10 or newer and an AI coding tool like Claude Code. You only pay for the AI model you use with it, and Windows users get a step-by-step guide.",
    free: "Free, MIT",
    stars: "61.7k",
    image: {
      src: `${IMG}/6-ppt-master.webp`,
      width: 960,
      height: 540,
      alt: "A pixel-art title slide from a sample deck made with PPT Master",
      caption: "A sample title slide from the PPT Master repo.",
    },
    links: [
      { label: "Open the repo on GitHub", href: "https://github.com/hugohe3/ppt-master" },
      { label: "See example decks", href: "https://hugohe3.github.io/ppt-master-examples/" },
      {
        label: "Windows install guide",
        href: "https://github.com/hugohe3/ppt-master/blob/main/docs/windows-installation.md",
      },
    ],
    copies: [
      {
        label: "Install in your terminal",
        text: `git clone https://github.com/hugohe3/ppt-master.git
cd ppt-master
pip install -r requirements.txt`,
      },
      {
        label: "Then ask your AI tool (example from the README)",
        text: "Please create a PPT from projects/q3-report/sources/report.pdf",
      },
    ],
    caveat:
      "Open the ppt-master folder in your AI tool before you ask for a deck, and swap the file path in the example for your own PDF.",
  },
  {
    id: "anatomy",
    num: "07",
    name: "Anatomy",
    slug: "wheresryan22/anatomy",
    url: "https://github.com/wheresryan22/anatomy",
    tagline: "Explain an idea by turning it into a machine you can take apart",
    summary:
      "A Claude skill that draws an idea as a detailed, interactive machine. You can hover over it, watch it move and take it apart to see how each piece works. It's best for technical ideas that are hard to explain in words.",
    need: "Node.js 20.10 or newer and Claude Code. It also works in Codex and OpenCode, with no API keys needed.",
    free: "Free, MIT",
    stars: "8.2k",
    image: {
      src: `${IMG}/7-anatomy.webp`,
      width: 900,
      height: 940,
      alt: "An isometric drawing of a rocket engine firing on a test stand, made with Anatomy",
      caption:
        "An example from the Anatomy repo. In the live version, you hover to take the engine apart.",
    },
    links: [
      { label: "Open the repo on GitHub", href: "https://github.com/wheresryan22/anatomy" },
      { label: "Visit the website", href: "https://skills.wheresryan.sh/anatomy" },
    ],
    copies: [
      {
        label: "Install in your terminal",
        text: "npx skills add wheresryan22/anatomy -g -a claude-code",
      },
      {
        label: "Then try this in Claude Code (example from the README)",
        text: "/anatomy explain how a token bucket rate limiter works, interactive",
      },
    ],
  },
];

export const ALL_LINKS = [
  "This week's top 3",
  ...REPOS.map((repo) => `${repo.name}: ${repo.url}`),
  "",
  "4 more worth a look",
  ...MORE_REPOS.map((repo) => `${repo.name}: ${repo.url}`),
].join("\n");
