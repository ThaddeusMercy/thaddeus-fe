export const SLUG = "agent-reach";

export const INSTALL_PROMPT = `Help me safely check and install Agent Reach using this official guide:
https://raw.githubusercontent.com/Panniantong/agent-reach/main/docs/install.md

Start with the read-only check. Do not make system changes unless I approve them.`;

export const PIPX_INSTALL =
  "pipx install https://github.com/Panniantong/agent-reach/archive/main.zip";

export const SAFE_CHECK = "agent-reach install --env=auto";

export const DRY_RUN = "agent-reach install --env=auto --dry-run";

export const FULL_INSTALL = "agent-reach install --env=auto --system";

export const DOCTOR = "agent-reach doctor";

export const PROMPT_READ_PAGE = `Read this page and give me the main points, important numbers, and anything I should check before I use the information:
[URL]`;

export const PROMPT_YOUTUBE = `Pull the transcript from this YouTube video. Give me a clear summary, the main ideas, and useful timestamps:
[URL]`;

export const PROMPT_GITHUB = `Study this GitHub repository. Explain what it does, who it is for, how to install it, and the main things I should know before using it:
[REPOSITORY URL]`;

export const PROMPT_DISCUSSIONS = `Find recent public discussions about [TOPIC] across the sources I have connected. Group the results by platform and include the source links.`;

export const PROMPT_DOCTOR = `Run Agent Reach doctor. Tell me what is working, what is not working, and the safest next step for each problem.`;

export const OFFICIAL_LINKS = [
  {
    label: "Official GitHub page",
    href: "https://github.com/Panniantong/Agent-Reach",
  },
  {
    label: "English guide",
    href: "https://github.com/Panniantong/Agent-Reach/blob/main/docs/README_en.md",
  },
  {
    label: "Installation guide",
    href: "https://github.com/Panniantong/Agent-Reach/blob/main/docs/install.md",
  },
] as const;

export const CAPABILITIES = [
  "Read a web page and turn it into clean text",
  "Search the web for a topic",
  "Pull transcripts and details from YouTube videos",
  "Read and search GitHub repositories",
  "Read RSS feeds",
  "Search or read supported public content from platforms such as X, Reddit, Facebook, Instagram, and LinkedIn",
  "Check every connection and show you what still needs setup",
] as const;

export const REQUIREMENTS = [
  "A computer or server",
  "A terminal",
  "Python 3",
  "An AI agent that can run terminal commands",
  "Chrome for platforms that use your browser login",
] as const;

export const EASY_SOURCES = [
  "Normal web pages",
  "Web search",
  "YouTube",
  "GitHub",
  "RSS feeds",
  "V2EX",
  "Basic Bilibili access",
] as const;

export const SOCIAL_NEEDS = [
  "A logged-in Chrome session",
  "A browser extension",
  "Cookies that you export yourself",
  "An API key",
  "A separate connection tool",
] as const;

export const SAFETY_RULES = [
  "Use a separate account when possible",
  "Never post cookies, passwords, or access tokens online",
  "Do not connect an account you do not own",
  "Only collect information you are allowed to use",
  "Follow each platform's rules",
  "Keep your request volume reasonable",
  "Do not ask the agent to bypass privacy settings, paywalls, or account permissions",
  "Read every system command before you approve it",
] as const;

export const FAQS = [
  {
    q: "Is Agent Reach free?",
    a: "Agent Reach is open source. Some optional services may still need an account, API key, proxy, or paid plan.",
  },
  {
    q: "Does it give my AI agent access to the whole internet with no limits?",
    a: "No. Each website and platform still has its own rules, login needs, and limits.",
  },
  {
    q: "Can I use it in normal Claude chat?",
    a: "Agent Reach needs an AI tool that can run terminal commands. Claude Code is a better fit than a normal chat window.",
  },
  {
    q: "Do I need to connect every platform?",
    a: "No. Start with websites, YouTube, GitHub, and RSS. Add social platforms only when you have a clear use for them.",
  },
  {
    q: "What should I do after installation?",
    a: "Run agent-reach doctor, test one simple web page, and add the other sources one at a time.",
  },
] as const;
