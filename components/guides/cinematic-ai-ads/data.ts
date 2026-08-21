export const SLUG = "cinematic-ai-ads";

export const WEEKENDS_URL = "https://weekendsofai.com/";
export const FLYER_SRC = "/guides/weekends-of-ai-flyer.jpg";
export const MCP_URL = "https://mcp.higgsfield.ai/mcp";

export const NEED = [
  "A Claude account",
  "A Higgsfield account with an active plan or credits",
  "Clear product photos",
  "A logo and other brand assets",
  "Visual references from real ads",
  "A video editor such as CapCut or Premiere Pro",
] as const;

export const CONCEPT_ITEMS = [
  "The product",
  "The audience",
  "The main message",
  "The feeling you want the ad to create",
  "The beginning, middle and ending",
] as const;

export const STYLE_GUIDE_ITEMS = [
  "Product photos",
  "Brand colours",
  "Lighting references",
  "Locations",
  "Camera angles",
  "Outfits or characters",
  "Examples of the mood you want",
] as const;

export const CONNECT_STEPS = [
  "Open Claude and go to Customize or Settings > Connectors > Add custom connector.",
  "Enter the name Higgsfield and the connector URL below.",
  "Click Connect, sign in to your Higgsfield account and approve the connection.",
] as const;

export const SHOT_LIST_PROMPT = `I have already created the concept for a cinematic product ad. Do not replace or change the main idea.

Product: [PRODUCT]
Audience: [AUDIENCE]
Main message: [MESSAGE]
Story: [STORY]
Visual style: [STYLE, LIGHTING AND COLOURS]
Format: [9:16 OR 16:9]
Length: [LENGTH]

Turn this into a shot-by-shot production plan.

For every shot, include:
1. Duration
2. Framing and lens
3. Subject action
4. Camera movement
5. Lighting
6. Start-frame image prompt
7. Image-to-video motion prompt
8. Sound and transition

Keep the product shape, logo, colours and proportions consistent throughout the ad.

Do not generate anything until I approve the full shot list. Ask for permission before using any Higgsfield credits.`;

export const MOTION_POINTS = [
  "What the product or subject is doing",
  "The setting and lighting",
  "The camera movement",
  "The mood",
  "Any sound or ambience",
] as const;

export const EDIT_ITEMS = [
  "Music",
  "Sound effects",
  "Voiceover",
  "Text",
  "Logo",
  "Transitions",
  "Colour correction",
] as const;

export const USEFUL_LINKS = [
  { label: "Claude", href: "https://claude.ai/" },
  { label: "Higgsfield", href: "https://higgsfield.ai/" },
  { label: "Higgsfield MCP", href: "https://higgsfield.ai/mcp" },
  { label: "Weekends of AI", href: "https://weekendsofai.com/" },
] as const;
