export const AI_INFLUENCER_SLUG = "build-your-ai-influencer";

export const BOOTCAMP_URL = "https://dub.sh/attn-bravo";

export const WORKFLOW_STEPS = [
  {
    title: "Lock the foundation face",
    body: "Find a look you love on Pinterest, run it through ChatGPT with Prompt 1 below. It writes a full photorealistic description of a brand new person inspired by it, not a copy. That paragraph is your character's DNA.",
  },
  {
    title: "Generate her in Flow",
    body: "Open Flow at labs.google to access Nano Banana, free with a Google account. Paste the prompt, generate, and save your foundation face.",
  },
  {
    title: "Place her in any scene",
    body: "Find a scene on Pinterest, run it through ChatGPT with Prompt 2, take that back to Flow with your model uploaded as the reference, and she's in the scene, styled and lit to match.",
  },
  {
    title: "Bring her to life",
    body: "Drop any finished image into Veo 3 inside Flow with the video prompt. It generates her voice and lip-syncs the line. A few seconds, a gesture, a laugh, done.",
  },
] as const;

export const PRO_TIPS = [
  "Upload your model as the reference every time, and paste the character sheet text alongside it. That combo is what holds the face.",
  "Realism lives in imperfection: skin texture and pores, real camera language, slightly imperfect lighting, and a little messy framing.",
  "Describe branded items generically, a red bandeau, a silver carry-on, so the generator doesn't choke or copy logos.",
  "Always match her to the scene. Dinner gets makeup, the gym gets sweat, the beach gets a sunscreen sheen. That's what sells the blend.",
  "If a scene starts to drift, paste the face description back into the prompt to pin her down.",
] as const;
