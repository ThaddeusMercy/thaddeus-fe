export const STORYBOARD_PROMPTS = {
  story: `I want to create a short video.

My story: [Describe the characters, setting, what happens and how it ends.]

Visual style: [Realistic live action, 2D anime, 3D animation or another style.]

Length: 25 seconds maximum.

Video format: [16:9 for widescreen or 9:16 for vertical.]

Sound: [Describe the sound effects, dialogue or music you want.]

Write the story as a sequence of shots with timings that fit the video length. Keep the action clear and easy to follow.

Only write the scenes for now. Do not generate images or video yet.`,

  sheets: `Using the story above, create two separate reference images: a character sheet and a location sheet.

For the character sheet, give each main character a separate row with three views side by side on a plain gray background:

1. A front-facing headshot showing the face clearly.
2. A front-facing body view, cropped from the neck down to the feet, showing the complete outfit without the head.
3. A full-length back view, including the head and shoes.

Keep each character's appearance, body proportions, clothing and accessories consistent across the views. Use even lighting and relaxed poses so the details are easy to see.

For the location sheet, show the main setting from several useful angles, including a wide establishing view and closer views of important areas. Include any vehicles or props that matter to the story.

Keep the layout, lighting, colors and details consistent across the views.

Match both sheets to the story's visual style. Generate the two images, not just written descriptions.`,

  storyboard: `Using the story above and the attached character and location sheets, create a storyboard as one image.

Break the story into clear shots arranged in a grid, read from left to right and top to bottom. Each panel should show one important moment, with enough panels to tell the story within the intended video length.

Use the attached images as visual references. Keep the characters' faces, outfits, body proportions, locations and props consistent throughout.

Mix wide shots, medium shots and close-ups. Show clear actions and expressions, and keep positions and movement consistent between panels so the sequence is easy to follow.

Match the visual style and video format chosen in the story brief. Add small shot numbers and timings in the panel borders. No captions or speech bubbles inside the scenes.

Generate the storyboard image, not just a written shot list.`,

  video: `Using Higgsfield and Seedance 2.5, turn this storyboard into a complete video sequence, no longer than 25 seconds.

Follow the storyboard panels in order. Use the attached character and location sheets to keep the faces, outfits, props and setting consistent.

Bring each shot to life with movement suited to the visual style, cinematic camera work and sound that follows the story brief. Keep the action clear, with continuity between shots.

Match the video format chosen in the story brief. Show each shot full-screen, without the storyboard grid, borders, labels or timings. Animate the action rather than creating a slideshow of still images.

Generate the sequence and assemble clips if needed, then give me the finished playable video and download link.

If a required step is unavailable, tell me what is missing.`,

  revise: `Revise shot [number].

Change [describe the problem and exactly what should happen instead].

Use the attached references to preserve the character, outfit, setting and visual style. Keep the other shots unchanged.

Give me the corrected [storyboard or finished video].`,
} as const;

export type StoryboardPromptKey = keyof typeof STORYBOARD_PROMPTS;
