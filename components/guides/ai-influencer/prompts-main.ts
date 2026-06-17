export const PROMPT_FOUNDATION_FACE = {
  label: "Prompt 1 · paste with a person reference",
  text: `Look at the attached image. Write me a detailed image generation prompt for a brand new person clearly inspired by this reference but not the same individual. Keep the overall vibe, energy, age range, and aesthetic, but change the identifying features, face shape, exact eye and nose details, hairline, any distinguishing marks, enough that this is obviously a different person, and make her a touch more striking and naturally beautiful.

Describe her in rich detail: approximate age, face shape, skin tone and texture including pores and subtle natural imperfections, eye color and shape, eyebrows, lashes, nose, lips, hair color, length, texture and styling, body type, posture, and overall expression and mood.

Write it for photorealism. Include real camera language like shot on a 35mm lens at f1.8 with natural depth of field and fine film grain, natural slightly imperfect lighting like soft window light or overcast daylight with gentle shadows and no flat studio glow, and realistic skin with visible texture instead of a smooth retouched look. Avoid anything that screams AI: no over symmetry, no glossy plastic skin, no doll like eyes.

Give me the final result as one clean paragraph I can copy straight into an image generator. Do not generate an image, only the text prompt.`,
} as const;

export const PROMPT_SCENE = {
  label: "Prompt 2 · paste with a scene reference",
  text: `Look at the attached image. Write me a detailed image generation prompt that recreates this scene so I can place my own character into it. Describe everything except the person's face: the setting and location, time of day, lighting and shadows, background details, the outfit and styling, the pose and body language, the framing and camera angle, and the overall mood.

Make the subject blend into the scene naturally and realistically, as if she genuinely belongs there. Match every detail to the context. If the reference is a dinner or a night out with makeup, give her makeup too, but suited to her own face. If it is a gym, show real sweat, flushed skin, and damp hair like someone who is actually working out. Match her grooming, wardrobe, skin, body language, and the way the light and environment fall on her to the setting, so nothing looks pasted in.

Write it for photorealism with real camera language, a specific lens and aperture, natural depth of field, and fine grain, plus natural imperfect lighting and realistic textures. Avoid anything that looks obviously AI: no plastic skin, no flat studio glow, no over symmetry.

Phrase it so the subject is "the woman in the reference image," since I will upload my own character as the reference. Give me the final result as one clean paragraph I can copy straight into an image generator. Do not generate an image, only the text prompt.`,
} as const;

export const PROMPT_VIDEO = {
  label: "Image-to-video · Veo 3",
  text: `Animate this image into an 8-second talking clip. The woman from the reference stays exactly as she is: same face, brown corset blazer dress, gold disc earrings, slicked-back ponytail, seated at the podcast mic with the warm wood-slat backdrop and the camera on a tripod behind her. She is mid-conversation as a podcast guest, speaking naturally to an unseen host just off camera with relaxed, expressive energy. As she talks she lifts one hand in a light natural gesture near her chest, the gold rings catching the light, then lowers it again. Her expression is warm and confident with subtle mouth and eye movement, small head tilts, and realistic blinking. At the end she breaks into a soft, genuine little laugh, shoulders easing and eyes crinkling slightly.

She says, in a warm conversational tone: "Everyone thinks I have it all figured out. Honestly? I'm just winging it," followed by a light, real laugh.

Audio: her clear natural voice delivering the line, soft studio room tone, no music. Camera: locked off or an extremely subtle slow push-in, framing steady. Lighting stays warm and consistent with the reference. Keep it photorealistic with natural skin texture and lifelike motion, no face morphing, no warping of the hands, fingers, mic, or earrings, no extra people, and no on-screen text. Duration about 8 seconds.`,
} as const;
