export const EDIT_VIDEOS_CLAUDE_SLUG = "edit-videos-with-claude";

export const META = [
  { label: "You need", value: "Claude Code" },
  { label: "Also", value: "Node.js 16+" },
  { label: "Cost", value: "Free to start" },
  { label: "Coding required", value: "None" },
] as const;

export const USES = [
  "Cutting silence out of a talking-head video, which it does across the whole file at once",
  "Captions that spell things correctly, including product names that CapCut mangles every time",
  "Motion graphics and animated B-roll built to match what I'm saying, instead of me hunting for stock footage that sort of fits",
] as const;

export const CHECKLIST = [
  {
    before: "Node.js version 16 or higher is installed. Type ",
    code: "node -v",
    after:
      " in your terminal to check. If you get an error or nothing, install it from nodejs.org first.",
  },
  {
    before: "On a Mac, you are on macOS 15 (Sequoia) or later. Older versions are not supported.",
    code: null,
    after: null,
  },
  {
    before:
      "On Linux, you need Libc 2.35 or newer plus a few extra packages. Alpine and nixOS will not work at all.",
    code: null,
    after: null,
  },
] as const;

export const INSTALL_PROMPT = `Ensure Node.js is installed.
Install Remotion Skills: npx -y skills@latest add remotion-dev/skills -g -y
Then use them to create a video.`;

export const TERMINAL_SETUP = `npx create-video@latest --yes --blank my-video
cd my-video
npm i
npx remotion skills add
npm run dev`;

export const PROMPTS = [
  {
    label: "Silence cuts",
    text: "Cut every silent gap longer than 0.4 seconds out of this video, keep a small breath before each sentence starts so it doesn't sound rushed, and show me the total time you removed.",
  },
  {
    label: "Captions",
    text: "Add captions to this video, two or three words on screen at a time, positioned in the lower third, bold sans-serif with a subtle dark outline so they stay readable on light backgrounds. These names must be spelled exactly this way: Claude, Remotion, Attention Factory.",
  },
  {
    label: "Motion graphics for B-roll",
    text: "Between 0:12 and 0:19 I'm explaining how the revision loop works, so replace that section with an animated graphic that shows a prompt going in and a finished video coming out. Keep it flat and minimal, use my brand colours, and time it so it lands with the words.",
  },
  {
    label: "Revision",
    text: "The captions are too small and they're sitting too low on mobile, so make them about 30 percent bigger and move them up to sit just above the middle of the frame, and leave everything else exactly as it is.",
  },
] as const;

export const FIXES = [
  {
    problem: '"command not found: npx"',
    fix: "Node.js isn't installed, or your terminal needs restarting after installing it. Close it and open a new one.",
  },
  {
    problem: "The install just hangs",
    fix: "Usually a slow network on the first download. Give it a few minutes before you cancel, then run it again.",
  },
  {
    problem: "It can't find your video",
    fix: "Drag the file directly into the chat instead of typing the path, or move the video into the project folder first.",
  },
  {
    problem: "Captions misspell a word",
    fix: "List the correct spellings in your prompt up front. It follows that instruction reliably once it's given.",
  },
  {
    problem: "The render looks wrong",
    fix: "Describe what you see rather than what you want changed, because Claude can then find the cause instead of patching the symptom.",
  },
  {
    problem: "Nothing above helped",
    fix: "The Remotion Discord answers fast, and the docs at remotion.dev cover every error message I've hit.",
  },
] as const;
