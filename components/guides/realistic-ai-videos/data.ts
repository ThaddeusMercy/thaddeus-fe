export const SLUG = "realistic-ai-videos";

export const CHALLENGE_URL = "https://dub.sh/attn-superad";

export const CHARACTER_VIEWS = [
  "A front view",
  "A side view",
  "A three-quarter view",
  "A close-up",
  "A full-body view",
] as const;

export const CHARACTER_PROMPT = `Create a clean character style sheet for [describe your character].

Show the same character in five views: front-facing portrait, side profile, three-quarter view, close-up portrait, and full-body view.

Keep the character's face, skin tone, hair, body proportions, outfit, and accessories exactly consistent across every view. Use neutral studio lighting and a plain background. Do not add text, props, or extra people.`;

export const DIRECTION_POINTS = [
  "Who or what is in the scene",
  "What the subject is doing",
  "The camera angle and shot size",
  "How the camera moves",
  "How fast the movement should be",
  "Where the light comes from",
  "What must remain unchanged",
] as const;

export const VIDEO_PROMPT = `[Shot size] of [character or product] [performing an action] inside [location].

The camera [describe its movement and speed]. Lighting comes from [direction and light source], creating [describe the mood]. Keep the character's face, outfit, body, and the environment consistent with the reference images. Maintain realistic movement, natural physics, and accurate anatomy throughout the shot.`;

export const EDIT_POINTS = [
  "Choose your best takes",
  "Remove weak frames",
  "Control the pacing",
  "Add sound effects and music",
  "Correct the colour",
  "Check that your characters and products remain consistent",
] as const;
