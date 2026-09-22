import type { StoryboardPromptKey } from "./prompts";

export const CHATGPT_STORYBOARD_SLUG = "chatgpt-storyboard-to-video";

export const FLOW_STEPS = [
  { num: "01", title: "Story" },
  { num: "02", title: "Sheets" },
  { num: "03", title: "Storyboard" },
  { num: "04", title: "Video" },
] as const;

export const CONNECT_STEPS = [
  "Open Plugins in ChatGPT.",
  "Search for Higgsfield and open it.",
  "Click the install or plus button.",
  "Follow the steps to sign in and connect your account.",
  "Start a new chat after installing it.",
] as const;

export type StoryboardStep = {
  num: string;
  title: string;
  tool: string;
  /** Paragraphs shown above the prompt */
  description: string[];
  /** What to check before moving on */
  check?: string;
  promptLabel: string;
  promptKey: StoryboardPromptKey;
};

export const STEPS: StoryboardStep[] = [
  {
    num: "01",
    title: "Describe your story",
    tool: "ChatGPT",
    description: [
      "Tell ChatGPT who the characters are, where the scene happens, what happens and how it ends. Also describe how you want it to look.",
      "Start with something short. One location, two characters and a clear ending are enough for your first attempt.",
      "Copy this and fill in the brackets:",
    ],
    check:
      "For example, my human rescue story follows a driver who sees a delivery rider fall into the path of an approaching truck. He stops, gets out and pulls her to safety. You can use a completely different idea. The next prompts will follow the story you describe.",
    promptLabel: "Prompt 1 · Story brief",
    promptKey: "story",
  },
  {
    num: "02",
    title: "Create your character and location sheets",
    tool: "ChatGPT",
    description: [
      "A character sheet shows what each person looks like from different views. A location sheet shows the setting and the objects that matter to the story.",
      "These give ChatGPT visual references to use throughout the storyboard.",
      "Paste this after your story:",
    ],
    check:
      "Check the images before moving on. If you want to change a face, outfit or part of the setting, do it here. If ChatGPT creates only one sheet, ask it to generate the other. Save both images.",
    promptLabel: "Prompt 2 · Character + location sheets",
    promptKey: "sheets",
  },
  {
    num: "03",
    title: "Create your storyboard",
    tool: "ChatGPT",
    description: [
      "Attach the character sheet and location sheet to your next message.",
      "Then paste this:",
    ],
    check:
      "Read the panels in order. Can you understand what happens without someone explaining it? Check that the characters still look the same and that important actions aren't missing. Ask for any corrections before generating the video.",
    promptLabel: "Prompt 3 · Storyboard",
    promptKey: "storyboard",
  },
  {
    num: "04",
    title: "Turn the storyboard into a video",
    tool: "ChatGPT + Higgsfield · Seedance 2.5",
    description: [
      "Attach the storyboard, character sheet and location sheet, then paste this:",
    ],
    check:
      "Wait for generation to finish, then watch the full video. Generation time can vary.",
    promptLabel: "Prompt 4 · Video",
    promptKey: "video",
  },
  {
    num: "05",
    title: "If something needs fixing",
    tool: "ChatGPT",
    description: [
      "Be specific about what went wrong. Instead of saying \"make it better\", name the shot and the change you want.",
      "Use this:",
    ],
    check:
      "If you move to a new chat at any point, paste your story again and attach the reference images so ChatGPT has the context it needs.",
    promptLabel: "Prompt 5 · Revise a shot",
    promptKey: "revise",
  },
];
