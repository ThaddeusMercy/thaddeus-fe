export const SLUG = "5-github-repos-better-ai-websites";

export type RepoMedia =
  | { kind: "image"; src: string; alt: string; caption: string }
  | {
      kind: "video";
      src: string;
      poster: string;
      alt: string;
      caption: string;
    };

export type RepoGuide = {
  id: string;
  num: string;
  title: string;
  blurb: string[];
  uses?: string;
  note?: string;
  repoUrl: string;
  repoLabel: string;
  secondaryUrl?: string;
  secondaryLabel?: string;
  media: RepoMedia;
  setupBlocks?: { label: string; code: string }[];
  promptLabel: string;
  prompt: string;
};

export const NEED_ITEMS = [
  "A website you're building or want to improve.",
  "An AI coding tool with access to your project.",
  "Your logo, brand colours and any images you want to use.",
] as const;

export const HOW_TO_STEPS = [
  "Open your website project in your AI coding tool.",
  "Save a copy of the current version.",
  "Paste the repo link and its prompt.",
  "Attach any logos, images or models it needs.",
  "Ask the AI to implement the effect and show you a working preview.",
  "Test the result on desktop and your phone.",
] as const;

export const REPOS: RepoGuide[] = [
  {
    id: "react-three-fiber",
    num: "01",
    title: "React Three Fiber",
    blurb: [
      "React Three Fiber lets you add interactive 3D objects and scenes to a React website.",
      "You could use it for a product visitors can rotate, floating objects beside your headline, or a scene that responds to mouse movement.",
      "For a specific product, you'll need a suitable 3D model. Otherwise, start with a simple shape.",
    ],
    repoUrl: "https://github.com/pmndrs/react-three-fiber",
    repoLabel: "Get the GitHub repo",
    secondaryUrl: "https://docs.pmnd.rs/react-three-fiber",
    secondaryLabel: "See the documentation and examples",
    media: {
      kind: "image",
      src: "/guides/five-github-repos/r3f.jpg",
      alt: "React Three Fiber examples banner",
      caption: "Preview from the React Three Fiber repository.",
    },
    promptLabel: "Prompt · React Three Fiber",
    prompt: `Use React Three Fiber in my website: https://github.com/pmndrs/react-three-fiber

Add an interactive 3D object to my homepage hero. Place it beside the headline and let visitors drag to rotate it. Use [describe the object or attach a 3D model].

Check my project's React version and install compatible dependencies. Keep the layout responsive, preserve my existing text and buttons, and provide a static fallback for devices that cannot run the effect.`,
  },
  {
    id: "liquid-glass-js",
    num: "02",
    title: "Liquid Glass JS",
    blurb: [
      "This gives your website that glass effect you see in Apple's designs.",
      "You can use it on navigation bars, buttons and small panels. It adds blur and distortion to the background behind them.",
    ],
    note: "This repo uses JavaScript files directly. Let your AI read its instructions before deciding how to install it.",
    repoUrl: "https://github.com/dashersw/liquid-glass-js",
    repoLabel: "Get the GitHub repo",
    secondaryUrl: "https://dashersw.github.io/liquid-glass-js/",
    secondaryLabel: "Try the live demo",
    media: {
      kind: "video",
      src: "/guides/five-github-repos/liquid-glass.mp4",
      poster: "/guides/five-github-repos/liquid-glass-poster.jpg",
      alt: "Liquid Glass JS demo",
      caption: "Demo from the Liquid Glass JS repository.",
    },
    promptLabel: "Prompt · Liquid Glass JS",
    prompt: `Use Liquid Glass JS in my website: https://github.com/dashersw/liquid-glass-js

Apply an Apple-inspired glass effect to my navigation bar. Give it rounded corners, subtle blur and gentle distortion. Keep the text readable and every link clickable.

Follow the repo's setup instructions and adapt its JavaScript files to my project. Make it work on desktop and mobile, with a plain background fallback if the effect isn't supported.`,
  },
  {
    id: "scroll-world",
    num: "03",
    title: "Scroll World",
    blurb: [
      "Scroll World creates websites where scrolling feels like moving through an entire world.",
      "It works as a skill for AI coding agents. It generates scenes and camera-movement videos, then connects the playback to the visitor's scrolling.",
      "You could use it to take visitors through a hotel, a product story or the different stages of a business process.",
    ],
    note: "The repo is free to access, but generating the images and videos can cost money.",
    repoUrl: "https://github.com/oso95/scroll-world",
    repoLabel: "Get the GitHub repo",
    media: {
      kind: "video",
      src: "/guides/five-github-repos/scroll-world.mp4",
      poster: "/guides/five-github-repos/scroll-world-poster.jpg",
      alt: "Scroll World demo",
      caption: "Demo from the Scroll World repository.",
    },
    setupBlocks: [
      {
        label: "Claude Code",
        code: `/plugin marketplace add oso95/scroll-world
/plugin install scroll-world@scroll-world`,
      },
      {
        label: "Codex CLI",
        code: `npx skills add oso95/scroll-world -a codex`,
      },
    ],
    promptLabel: "Prompt · Scroll World",
    prompt: `Use Scroll World to build a scrolling landing page for [business name].

Take visitors through these three scenes: [scene one], [scene two] and [scene three]. Use [brand colours] and end with a button that says [button text].

Check the required tools and accounts first. Show me the scene plan and estimated generation cost before spending credits. Include a mobile layout and a static version for visitors who prefer reduced motion.`,
  },
  {
    id: "liquid-logo",
    num: "04",
    title: "Liquid Logo",
    blurb: [
      "Liquid Logo turns a normal logo into an animated liquid-metal effect.",
      "Try it in your homepage hero or as a logo reveal. A simple logo with a clear shape is a good starting point.",
    ],
    repoUrl: "https://github.com/paper-design/liquid-logo",
    repoLabel: "Get the GitHub repo",
    secondaryUrl: "https://liquid.paper.design/",
    secondaryLabel: "Try it with your logo",
    media: {
      kind: "image",
      src: "/guides/five-github-repos/liquid-logo.jpg",
      alt: "Liquid Logo preview",
      caption: "Preview from Paper Design's Liquid Logo repository.",
    },
    promptLabel: "Prompt · Liquid Logo",
    prompt: `Use Paper Design's Liquid Logo repo: https://github.com/paper-design/liquid-logo

Apply its liquid-metal effect to the logo I've attached. Place it in my homepage hero with slow movement. Keep the logo recognisable and preserve its proportions.

Inspect the implementation and licence before integrating it. Make it responsive and show the original static logo when reduced motion is enabled.`,
  },
  {
    id: "shader-gradient",
    num: "05",
    title: "Shader Gradient",
    blurb: [
      "Shader Gradient creates moving gradients you can use behind a headline or across a section of your website.",
      "You can change the colours, shapes and movement to suit your brand. It has a React package and options for Framer and Figma.",
    ],
    repoUrl: "https://github.com/ruucm/shadergradient",
    repoLabel: "Get the GitHub repo",
    secondaryUrl: "https://www.shadergradient.co/customize",
    secondaryLabel: "Create a gradient",
    media: {
      kind: "video",
      src: "/guides/five-github-repos/shader-gradient.mp4",
      poster: "/guides/five-github-repos/shader-gradient-poster.jpg",
      alt: "Shader Gradient preview",
      caption: "Preview from the Shader Gradient repository.",
    },
    promptLabel: "Prompt · Shader Gradient",
    prompt: `Use Shader Gradient in my website: https://github.com/ruucm/shadergradient

Add a slow-moving gradient behind my homepage hero using [colour one], [colour two] and [colour three].

Keep my headline and button readable. Follow the current installation instructions and check dependency compatibility. Reduce the animation workload on mobile and use a static gradient when reduced motion is enabled.`,
  },
];

export const REUSABLE_PROMPT = `I want to use this GitHub repo in my website: [link].

My website is for [business or purpose]. Add the effect to [specific section]. It should look like [description] and behave like [description].

Read the current README and inspect my project first. Check compatibility, required assets and any costs.

Implement it, run the project and fix any errors. Keep the page responsive, preserve readable text and working buttons, and include a reduced-motion fallback.

Show me how to change the colours, size and animation speed afterwards.`;

export const PUBLISH_CHECKS = [
  "Check that your website loads properly, the buttons still work and the text stays readable while things move.",
  "If the page feels slow, ask the AI to simplify the animation or use a static version on mobile.",
  "Pick one effect, get it working properly, then decide whether the page needs anything else.",
] as const;
