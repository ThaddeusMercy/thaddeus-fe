export const HEYGEN_TRANSLATE_SLUG = "heygen-video-translate";

export const STATS = [
  { value: "175+", label: "languages & dialects" },
  { value: "10", label: "languages per video at once" },
  { value: "Free", label: "3 videos/mo, up to 3 min each" },
] as const;

export const TIPS = [
  {
    letter: "A",
    teal: false,
    title: "Protect your names",
    body: "Set up a Brand Voice or glossary inside HeyGen so your name, your product names, and any technical terms stay exactly as they are instead of getting translated into something strange.",
  },
  {
    letter: "B",
    teal: true,
    title: "Clean up the audio first",
    body: "HeyGen can remove background noise from your source video. The cleaner the original audio, the more the voice clone has to work with, and the more the result actually sounds like you.",
  },
  {
    letter: "C",
    teal: false,
    title: "Start with a video that already works",
    body: "Don't translate a random clip. Take a video that already performed well and let it go win over in five more languages.",
  },
] as const;
