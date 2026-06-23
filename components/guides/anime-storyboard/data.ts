import type { StoryboardPromptKey } from "./prompts";

export const ANIME_STORYBOARD_SLUG = "anime-storyboard-to-video";

export const FLOW_STEPS = [
  { num: "01", title: "Character" },
  { num: "02", title: "Location" },
  { num: "03", title: "Storyboard" },
  { num: "04", title: "Video" },
] as const;

export type StoryboardStep = {
  num: string;
  title: string;
  tool: string;
  description: string;
  promptLabel: string;
  promptKey: StoryboardPromptKey;
};

export const STEPS: StoryboardStep[] = [
  {
    num: "01",
    title: "Describe your story & create the character",
    tool: "ChatGPT",
    description:
      "Open ChatGPT and paste this. Swap the highlighted part for your own story, then leave the rest exactly as is. ChatGPT designs your character first and waits for your yes.",
    promptLabel: "Prompt 1 · Story + Character",
    promptKey: "storyCharacter",
  },
  {
    num: "02",
    title: "Generate the character sheet",
    tool: "ChatGPT",
    description:
      "Once you're happy with the character, paste this. It builds a full turnaround board so your character looks identical from every angle.",
    promptLabel: "Prompt 2 · Character Sheet",
    promptKey: "characterSheet",
  },
  {
    num: "03",
    title: "Generate the location sheet",
    tool: "ChatGPT",
    description:
      "Now do the same for your setting. This shows the one location from every camera angle, so your world stays consistent shot to shot.",
    promptLabel: "Prompt 3 · Location Sheet",
    promptKey: "locationSheet",
  },
  {
    num: "04",
    title: "Build the storyboard",
    tool: "ChatGPT",
    description:
      "Upload both sheets, then paste this. ChatGPT directs the full 15-second sequence, panel by panel, using your character and world.",
    promptLabel: "Prompt 4 · Storyboard",
    promptKey: "storyboard",
  },
  {
    num: "05",
    title: "Turn it into video",
    tool: "Higgsfield · Seedance",
    description:
      "Go to Higgsfield, pick Seedance under video, upload your storyboard plus both sheets, set duration to 15 seconds, and paste this.",
    promptLabel: "Prompt 5 · Video",
    promptKey: "video",
  },
];
