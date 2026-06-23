export const STORYBOARD_PROMPTS = {
  storyCharacter: `I want to create an anime story of a lone female samurai with a long black ponytail and a scar over one eye, wearing a dark crimson kimono and carrying a black katana, facing a shadowy opponent in a temple courtyard at sunset with cherry blossom petals falling. Calm, then one explosive clash. High-end cinematic anime style.

I want you to create the storyboard for this, but we're going to build it the right way so everything stays consistent. Start with just the main character. Generate one full-body anime character design, a single character on a clean neutral background, facing forward in a neutral pose, high-end cinematic anime quality with sharp detail. Base it on the character in my story and fill in any missing details with strong creative choices.

Show me that character first and wait. Once I approve, we'll create two reference sheets next.`,

  characterSheet: `Create a character reference sheet based entirely on the character in the image. Keep the exact same character: same face, hair, body, outfit, colors, and details. Do not redesign anything.

Lay it out like a professional anime studio turnaround board: large front, side, and back views, facial close-ups, and all clothing pieces, accessories, and weapons shown separately and laid out neatly around the character.

Neutral pose. Clean white background. 16:9. High-end cinematic anime quality, ultra detailed. No text or labels anywhere. Keep the character identical across every view.`,

  locationSheet: `Create a location reference sheet based entirely on the setting in the image. Keep the exact same place: same architecture, layout, props, colors, lighting, and atmosphere. Do not invent new areas.

Lay it out like a film production environment board showing the SAME location from multiple camera angles: large establishing shot, wide front, left 3/4, right 3/4, reverse angle, eye-level, low-angle, high-angle, top-down, and a few close-up details.

Every panel shows the same place from a different camera position. 16:9. High-end cinematic anime quality, ultra detailed. No text or labels. Keep the environment consistent across every angle.`,

  storyboard: `Using the character reference sheet and the location reference sheet I uploaded, create a cinematic anime storyboard for a 15-second sequence based on my story. Use the character and the setting from the sheets and keep both consistent in every panel.

Lay it out as a 16-panel storyboard. You direct the shots: vary the camera angles and distances, build tension early, peak in the middle, and end on a strong final beat. Write a short caption under each panel.

16:9. High-end cinematic anime quality, painterly textures, dramatic lighting. Clean storyboard layout.`,

  video: `Create a 15-second cinematic anime video using the storyboard and the character and location reference sheets I uploaded. Follow the storyboard panels in order, keeping the character and location consistent throughout.

Dynamic camera movement, realistic cloth and hair physics, cinematic motion blur, dramatic lighting, atmospheric particles, masterpiece quality.`,
} as const;

export type StoryboardPromptKey = keyof typeof STORYBOARD_PROMPTS;

/** First paragraph of prompt 1 — swap this for your own story. */
export const STORY_SWAP_EXAMPLE =
  "I want to create an anime story of a lone female samurai with a long black ponytail and a scar over one eye, wearing a dark crimson kimono and carrying a black katana, facing a shadowy opponent in a temple courtyard at sunset with cherry blossom petals falling. Calm, then one explosive clash. High-end cinematic anime style.";
