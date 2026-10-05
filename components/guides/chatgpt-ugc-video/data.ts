export const SLUG = "chatgpt-ugc-video";

export const NEED_ITEMS = [
  "ChatGPT",
  "A Higgsfield account",
  "One clear image of your product",
] as const;

export const CONNECT_STEPS = [
  "Open Higgsfield.",
  'Find "MCP and CLI".',
  "Select MCP.",
  "Copy the MCP URL.",
  "Open ChatGPT.",
  "Go to Customize.",
  "Open Connectors.",
  "Click the plus icon to add a custom connector.",
  'Give the connector a name, for example "Higgsfield".',
  "Paste the MCP URL.",
  "Save it.",
] as const;

export const IMAGE_CHECKS = [
  "the entire product is visible",
  "the label and branding are readable",
  "the image is not blurry",
  "there are no objects covering the product",
] as const;

export const PROMPT_CONCEPTS = `I want to create a short, realistic UGC advertisement for the product in the image I uploaded.

Act as a creative director and UGC ad strategist.

First, study the product and give me 5 different video concepts that could make someone stop scrolling and become interested in the product.

For each concept, include:

1. The opening hook
2. The setting
3. What the creator is doing
4. The dialogue or voiceover
5. The shot sequence
6. How the product appears naturally in the video
7. The final CTA

Keep each concept short enough to work as a social media ad.

The video should feel like real creator content, not a polished television commercial.

Do not generate the video yet. Show me the concepts first and wait for me to choose one.`;

export const PROMPT_VIDEO = `I want to use concept [NUMBER].

Now turn this concept into the final UGC video using my connected Higgsfield tools.

Use the uploaded product image as the product reference.

Keep the product's packaging, branding, colors, proportions and text consistent with the reference image.

The video should look like authentic creator content filmed on a phone.

Use natural lighting, realistic skin texture, natural body movement and believable hand interactions with the product.

Avoid overly cinematic camera movements or anything that makes the video look obviously AI generated.

The creator should speak naturally and casually.

Keep the pacing fast enough for TikTok, Instagram Reels and paid social ads.

Before generating anything, break the final video into the shots you plan to create.

Then generate the required assets and video clips using Higgsfield.

Keep the same creator, clothing, setting, product appearance and visual identity across every shot.`;

export const PROMPT_IMPERFECT = `Make the video feel slightly imperfect in the way genuine UGC does. Use natural pauses, small hand movements, casual framing, subtle camera movement and realistic expressions. Avoid perfect commercial lighting, exaggerated acting, beauty filter skin or overly polished studio cinematography.`;

export const PROMPT_VARIATIONS = `Create 3 additional variations of this ad.

Keep the same product and overall offer, but change the hook, creator angle and opening 3 seconds so I can test multiple versions as ads.

Variation 1 should focus on a problem.
Variation 2 should focus on curiosity.
Variation 3 should feel like a genuine personal recommendation.`;

export const MONEY_PACKAGES = [
  "3 UGC ads for one product",
  "5 different hooks for an existing ad",
  "multiple versions for ad testing",
  "product launch creatives",
  "monthly UGC content packages",
] as const;
