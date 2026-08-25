export const SLUG = "chatgpt-google-flow-ad";

export const NEED = ["ChatGPT", "A clear photo of your product", "Google Flow"] as const;

export const STORYBOARD_COMMAND = `/AI storyboard for brand shoot`;

export const ANIMATION_PROMPT_REQUEST = `Give me a detailed prompt to animate this exact scene. Keep the product, character, setting and visual style consistent. Describe the subject movement, product movement, camera movement and what happens from the beginning to the end of the shot.`;

export const WORKFLOW =
  "Product image → ChatGPT → AI storyboard → Animation prompt → Google Flow → Video";

export const USEFUL_LINKS = [
  { label: "ChatGPT", href: "https://chatgpt.com" },
  { label: "Google Flow", href: "https://labs.google/flow" },
] as const;
