export const AI_CLONE_METHOD_SLUG = "ai-clone-method";

export const NEED_CHIPS = [
  "A clear photo of you",
  "Nano Banana Pro",
  "Claude",
  "Veo 3",
] as const;

export const GLANCE_CARDS = [
  {
    num: "1",
    label: "Step one",
    title: "Clone yourself",
    tool: "Nano Banana Pro",
    body: "Upload your photo and place yourself in any scene with the master prompt.",
    accent: "amber" as const,
  },
  {
    num: "2",
    label: "Step two",
    title: "Animate it",
    tool: "Claude → Veo 3 JSON",
    body: "Drop the image into Claude and have it write the Veo 3 prompt for you.",
    accent: "violet" as const,
  },
  {
    num: "3",
    label: "Step three",
    title: "Generate",
    tool: "Veo 3",
    body: "Upload the image, paste the prompt, and hit go. That is the post.",
    accent: "green" as const,
  },
] as const;

export const SCALE_TIPS = [
  {
    title: "Use one reference photo",
    body: "Build every clone from the same source photo. Switching source photos is the fastest way to lose consistency in your face.",
  },
  {
    title: "Keep dialogue short",
    body: "One or two sentences sits cleanly inside an 8-second clip and keeps the lip sync tight.",
  },
  {
    title: "Regenerate before re-prompting",
    body: "These models vary run to run. The second or third take is often the one. Try again before you rewrite.",
  },
  {
    title: "Match the lighting direction",
    body: "If the photo is lit from the left, the prompt should say lit from the left. That continuity is what sells the realism.",
  },
] as const;
