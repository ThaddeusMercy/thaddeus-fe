export const SLUG = "fifty-ai-tools";

export type ToolEntry = {
  name: string;
  body: string;
  href: string;
};

export type SectionEntry = {
  n: string;
  title: string;
  tools: ToolEntry[];
  tip: string;
};

export const SECTIONS: SectionEntry[] = [
  {
    n: "1",
    title: "Creating images and videos with AI",
    tools: [
      {
        name: "ChatGPT",
        body: "Creates and edits images from prompts and reference images.",
        href: "https://chatgpt.com",
      },
      {
        name: "Google Flow",
        body: "Helps you create AI films, scenes and stories.",
        href: "https://labs.google/flow/about",
      },
      {
        name: "Higgsfield",
        body: "Creates cinematic AI images and videos with camera controls.",
        href: "https://higgsfield.ai",
      },
      {
        name: "Runway",
        body: "Generates and edits video with AI.",
        href: "https://runwayml.com",
      },
      {
        name: "Kling AI",
        body: "Turns text and images into videos.",
        href: "https://klingai.com",
      },
      {
        name: "Freepik AI",
        body: "Combines image generation, video generation and editing tools.",
        href: "https://www.freepik.com/ai",
      },
    ],
    tip: "Best starting combination: ChatGPT for images, then Google Flow or Higgsfield for video.",
  },
  {
    n: "2",
    title: "Content creation",
    tools: [
      {
        name: "ChatGPT",
        body: "Helps with ideas, scripts, captions and content plans.",
        href: "https://chatgpt.com",
      },
      {
        name: "Claude",
        body: "Useful for writing, research and working with long documents.",
        href: "https://claude.ai",
      },
      {
        name: "Perplexity",
        body: "Researches topics and provides links to its sources.",
        href: "https://www.perplexity.ai",
      },
      {
        name: "NotebookLM",
        body: "Turns your own sources into summaries, notes, scripts and audio discussions.",
        href: "https://notebooklm.google.com",
      },
      {
        name: "Canva",
        body: "Helps you design carousels, social posts and other content.",
        href: "https://www.canva.com",
      },
    ],
    tip: 'Do not ask AI to "write a post" without context. Give it your audience, goal, examples, tone and the action you want the reader to take.',
  },
  {
    n: "3",
    title: "Making animations",
    tools: [
      {
        name: "Adobe Character Animator",
        body: "Animates characters using your face and voice.",
        href: "https://www.adobe.com/products/character-animator.html",
      },
      {
        name: "Vyond",
        body: "Creates animated explainers and training videos.",
        href: "https://www.vyond.com",
      },
      {
        name: "Animaker",
        body: "Helps beginners create character animations.",
        href: "https://www.animaker.com",
      },
      {
        name: "Krikey AI",
        body: "Creates 3D character animations from prompts and videos.",
        href: "https://www.krikey.ai",
      },
      {
        name: "Cartwheel",
        body: "Generates 3D character motion from text.",
        href: "https://getcartwheel.com",
      },
    ],
    tip: "Use animation tools when you need characters or illustrated scenes. Use motion graphics tools when you need moving text, shapes, logos and visual effects.",
  },
  {
    n: "4",
    title: "Auto-posting to several platforms at once",
    tools: [
      {
        name: "Metricool",
        body: "Schedules and analyses content across several social platforms.",
        href: "https://metricool.com",
      },
      {
        name: "Buffer",
        body: "Lets you plan and publish posts from one calendar.",
        href: "https://buffer.com",
      },
      {
        name: "Publer",
        body: "Schedules, recycles and manages social posts.",
        href: "https://publer.io",
      },
      {
        name: "Later",
        body: "Helps plan and publish visual social content.",
        href: "https://later.com",
      },
      {
        name: "Repurpose.io",
        body: "Automatically turns and distributes one piece of content across platforms.",
        href: "https://repurpose.io",
      },
    ],
    tip: "Check every scheduled post before publishing. Captions, tags and video sizes may need to change from one platform to another.",
  },
  {
    n: "5",
    title: "Creating motion graphics",
    tools: [
      {
        name: "Jitter",
        body: "Creates animated text, UI animations and social motion designs.",
        href: "https://jitter.video",
      },
      {
        name: "Cavalry",
        body: "Built for 2D motion design and procedural animation.",
        href: "https://cavalry.scribblemotion.com",
      },
      {
        name: "Rive",
        body: "Creates interactive animations for apps and websites.",
        href: "https://rive.app",
      },
      {
        name: "Canva",
        body: "Offers simple text, element and presentation animations.",
        href: "https://www.canva.com",
      },
      {
        name: "Adobe After Effects",
        body: "Gives you advanced control over motion graphics and visual effects.",
        href: "https://www.adobe.com/products/aftereffects.html",
      },
    ],
    tip: "For a beginner, start with Jitter or Canva. Use After Effects when you need detailed control.",
  },
  {
    n: "6",
    title: "Building apps and websites",
    tools: [
      {
        name: "Lovable",
        body: "Builds full-stack websites and apps from natural-language instructions.",
        href: "https://lovable.dev",
      },
      {
        name: "Bolt",
        body: "Creates and runs web apps in the browser.",
        href: "https://bolt.new",
      },
      {
        name: "Replit",
        body: "Helps you build, test and publish software with AI.",
        href: "https://replit.com",
      },
      {
        name: "v0",
        body: "Generates web interfaces and working applications.",
        href: "https://v0.dev",
      },
      {
        name: "Base44",
        body: "Builds apps from a description without requiring you to set up the full technical stack yourself.",
        href: "https://base44.com",
      },
      {
        name: "Framer",
        body: "Useful for designing and publishing websites quickly.",
        href: "https://www.framer.com",
      },
    ],
    tip: "Start with a small first version. Describe the users, pages, features, data and what should happen when someone clicks each button.",
  },
  {
    n: "7",
    title: "Automating boring tasks",
    tools: [
      {
        name: "Zapier",
        body: "Connects apps and automates common business workflows.",
        href: "https://zapier.com",
      },
      {
        name: "Make",
        body: "Lets you build visual automations with more control over each step.",
        href: "https://www.make.com",
      },
      {
        name: "n8n",
        body: "Useful for flexible workflows, AI agents and self-hosting.",
        href: "https://n8n.io",
      },
      {
        name: "Lindy",
        body: "Creates AI assistants for email, meetings, support and operations.",
        href: "https://www.lindy.ai",
      },
      {
        name: "Gumloop",
        body: "Lets you build AI workflows without writing much code.",
        href: "https://www.gumloop.com",
      },
    ],
    tip: "Good first automations include saving form responses, sending follow-up emails, updating a CRM and turning meeting notes into tasks.",
  },
  {
    n: "8",
    title: "Finding your next client",
    tools: [
      {
        name: "Apollo",
        body: "Helps you find business contacts and manage outreach.",
        href: "https://www.apollo.io",
      },
      {
        name: "Clay",
        body: "Researches leads, enriches contact data and personalises outreach.",
        href: "https://www.clay.com",
      },
      {
        name: "LinkedIn Sales Navigator",
        body: "Helps you search for the right companies and decision makers.",
        href: "https://business.linkedin.com/sales-solutions/sales-navigator",
      },
      {
        name: "Hunter",
        body: "Finds and verifies professional email addresses.",
        href: "https://hunter.io",
      },
      {
        name: "Instantly",
        body: "Helps manage cold email campaigns and follow-ups.",
        href: "https://instantly.ai",
      },
    ],
    tip: "Do not send the same message to hundreds of people. Research each lead and explain the specific problem you can help them solve.",
  },
  {
    n: "9",
    title: "Fixing your CV and resume",
    tools: [
      {
        name: "Teal",
        body: "Helps tailor resumes and track job applications.",
        href: "https://www.tealhq.com",
      },
      {
        name: "Rezi",
        body: "Creates resumes designed for applicant tracking systems.",
        href: "https://www.rezi.ai",
      },
      {
        name: "Kickresume",
        body: "Helps write and format resumes and cover letters.",
        href: "https://www.kickresume.com",
      },
      {
        name: "Resume Worded",
        body: "Gives feedback on resumes and LinkedIn profiles.",
        href: "https://resumeworded.com",
      },
      {
        name: "Jobscan",
        body: "Compares your resume with a job description.",
        href: "https://www.jobscan.co",
      },
    ],
    tip: "AI should improve how you present your real experience. Do not let it invent skills, jobs or results.",
  },
  {
    n: "10",
    title: "Learning anything better",
    tools: [
      {
        name: "NotebookLM",
        body: "Helps you learn from documents, websites, videos and other sources you provide.",
        href: "https://notebooklm.google.com",
      },
      {
        name: "Khanmigo",
        body: "Acts as an AI tutor for learners and teachers.",
        href: "https://www.khanacademy.org/khan-labs",
      },
      {
        name: "Perplexity",
        body: "Helps research questions and trace answers back to sources.",
        href: "https://www.perplexity.ai",
      },
      {
        name: "ChatGPT",
        body: "Can explain topics, create practice exercises and quiz you.",
        href: "https://chatgpt.com",
      },
      {
        name: "Claude",
        body: "Can break down difficult material and create study plans from your notes.",
        href: "https://claude.ai",
      },
    ],
    tip: "Ask the tool to teach you in stages, test you after each section and explain every answer you get wrong.",
  },
  {
    n: "11",
    title: "Creating slides and presentations",
    tools: [
      {
        name: "Gamma",
        body: "Turns an outline or document into a designed presentation.",
        href: "https://gamma.app",
      },
      {
        name: "Canva",
        body: "Creates presentations using templates and AI design tools.",
        href: "https://www.canva.com",
      },
      {
        name: "Beautiful.ai",
        body: "Automatically adjusts slide layouts as you add content.",
        href: "https://www.beautiful.ai",
      },
      {
        name: "Pitch",
        body: "Helps teams create and collaborate on presentations.",
        href: "https://pitch.com",
      },
      {
        name: "SlidesAI",
        body: "Generates slide content inside Google Slides.",
        href: "https://www.slidesai.io",
      },
    ],
    tip: "Create the story and outline first. Then use AI to design the slides. This prevents a beautiful presentation with no clear message.",
  },
  {
    n: "12",
    title: "Generating voiceovers and music",
    tools: [
      {
        name: "ElevenLabs",
        body: "Creates realistic voiceovers and voice clones.",
        href: "https://elevenlabs.io",
      },
      {
        name: "Murf",
        body: "Creates voiceovers for videos, presentations and training content.",
        href: "https://murf.ai",
      },
      {
        name: "Suno",
        body: "Generates complete songs from text prompts.",
        href: "https://suno.com",
      },
      {
        name: "Udio",
        body: "Creates and edits AI-generated music.",
        href: "https://www.udio.com",
      },
      {
        name: "Adobe Podcast",
        body: "Cleans recorded speech and improves audio quality.",
        href: "https://podcast.adobe.com",
      },
    ],
    tip: "Before publishing commercial work, check the tool's current licensing rules. Get permission before cloning another person's voice.",
  },
];

export const CHOOSE_STEPS = [
  "Pick the task that currently takes too much of your time.",
  "Choose one tool from the matching section.",
  "Test it on a small real project.",
  "Keep it only if it saves time or improves your result.",
  "Add another tool only when you have a clear reason.",
] as const;

export const FINAL_NOTE =
  "You do not need a large collection of AI tools. You need a small set that fits the work you actually do.";
