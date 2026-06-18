export type ClonePrompt = { title: string; text: string; json?: boolean };

export const MASTER_CLONE_PROMPT = `Use the uploaded photo as the exact reference for this person. Create a
new photorealistic image of the SAME person, placed in the scene below.

IDENTITY LOCK (do not change any of this):
- Keep the exact same face shape, facial features, eye colour, eyebrows,
  nose, lips, and jawline as the reference photo
- Keep the same hairstyle, hair colour, and hairline
- Keep the same skin tone, complexion, and natural skin texture
- Keep the same approximate age and body build
- This must look like the same real person, not a lookalike

SCENE: [describe where you are, e.g. a sunlit modern kitchen with marble counters]
WARDROBE: [e.g. a cream linen shirt]
POSE & FRAMING: [e.g. standing, waist-up, looking slightly off camera]
CAMERA: 50mm lens, eye level, shallow depth of field
LIGHTING: soft natural light from the left, warm tone
MOOD: [e.g. calm, premium, editorial]

STYLE: photorealistic, sharp focus on the face, natural skin, no plastic
or over-smoothed look.

NEGATIVE: distorted face, warped features, extra fingers, identity drift,
fake or AI-looking skin.

OUTPUT: vertical 9:16, high detail.`;

export const SCENE_PROMPTS: ClonePrompt[] = [
  {
    title: "Scene 1 — Creator studio talking-head (desk mic)",
    text: `Use my uploaded image as the main subject and identity reference. Keep the
person fully recognizable and true to their real appearance. Preserve the
person's face, skin tone, hairstyle, hairline, facial proportions, body
proportions, and overall identity exactly as they are. Do not redesign the
person or make them look like someone else.

Transform the image into a professional studio-style talking-head video
setup inspired by a clean content-creator filming environment. The result
should look like a high-quality frame from a professional video recording
session.

Place the person seated indoors at a desk or table, facing the camera
directly in a confident, natural, presenter-style posture. The framing
should feel like a polished social-media or YouTube talking-head setup.
Show the person from about the mid-torso or waist up, centered in the
frame, with the upper body filling most of the shot. The camera angle
should be straight-on at eye level, so it feels engaging and conversational.

Add a professional microphone setup in front of the person, positioned
clearly and naturally as part of the scene. The microphone should be placed
on a desk stand or small tabletop mount, centered near the lower middle of
the frame, like a podcast or creator recording setup. It should look
realistic and integrated into the shot, not pasted in.

Create a clean, modern indoor studio background with a soft, warm,
professional look: a softly blurred shelf, a warm accent light, a plant,
and tasteful decor. Warm neutral palette with a hint of soft orange or
golden ambient lighting for depth. Keep the background softly out of focus
so the attention stays on the person.

Use soft, flattering studio lighting on the subject. Even face lighting,
clean front key light, soft fill to reduce harsh shadows, subtle warm
background ambiance. Bright, clean, camera-friendly.

The person should look calm, confident, and camera-ready, speaking to the
audience. One hand can rest on the table while the other is slightly raised
in a natural speaking gesture. Keep the gesture realistic and elegant.

Use shallow depth of field so the person and microphone stay sharp while
the background remains softly blurred.

QUALITY: high detail, realistic lighting, natural skin texture, realistic
microphone detail, shallow depth of field, crisp subject focus, clean
modern studio aesthetic, professional video-frame quality. Vertical 9:16.

NEGATIVE: do not change the person's identity, face, or hairstyle. Do not
make them look like someone else. No fake or cartoonish look. No distorted
or oversized microphone. No deformed hands or extra fingers. No cluttered
or busy background. No harsh lighting. Not blurry, low quality, or overly
artificial. No awkward cropping.`,
  },
  {
    title: "Scene 2 — Home office talking-head (handheld mic)",
    text: `Use my uploaded image as the exact subject identity reference. Preserve my
real face, skin tone, hairstyle, body proportions, expression, outfit, and
overall identity exactly as they appear in my reference image. Do not
redesign me, beautify me into another person, change my features, or copy
the person from the scene reference.

Create a professional seated talking-head video frame inspired by the
attached scene reference. The subject should be seated indoors in a clean,
modern creator-style studio or home office, facing the camera directly in a
calm, confident presenter posture. Vertical, camera-ready framing, like a
polished frame from a professional social media video, interview, tutorial,
or creator commentary video.

Position the subject in the center of the frame, seated upright with the
upper body visible, shown from around the upper thighs or waist upward, with
torso, arms, and hands visible. Posture natural and grounded, not stiff or
floating. The subject appears to be speaking directly to the viewer.

Use a relaxed presenter hand gesture. One hand can be raised near chest
level holding a small handheld or lavalier-style mic, while the other is
slightly open in a natural conversational gesture. Hands realistic and
proportional, with visible wrists and natural forearm length. Fingers
anatomically correct, relaxed, and clearly separated.

Background: a cozy professional home studio. A softly blurred indoor room
with framed wall art on the left, a small side table with a warm desk lamp,
subtle decor, and a studio area behind. Lived-in but clean and organized.
Soft depth of field so the background is visible but not distracting.

Lighting: warm, cinematic indoor light with a clear professional key light
on the face and soft ambient lamps in the background. Premium and polished,
a balanced mix of warm practicals and clean front studio light. Subject
sharp and well-lit, background gently blurred with warm depth.

Frame like a high-quality vertical talking-head shot. The subject fills most
of the frame but leaves room to show the studio environment. Camera at eye
level. Natural, intimate, and professional, not overly posed.

CAMERA: high-end full-frame, sharp 50mm or 85mm lens, shallow depth of
field, crisp focus on the subject, clean exposure, natural contrast, premium
4K or 8K clarity. Realistic skin texture, detailed fabric, clean edges,
sharp hands, natural lighting. Extremely clear, not faded or AI-looking.

Use the scene reference only for the seated pose, studio setup, background
arrangement, lighting mood, and composition.

NEGATIVE: do not change my identity, face, skin tone, hairstyle, or outfit.
Do not copy the person from the scene reference. Not blurry, soft, faded,
hazy, low-resolution, plastic, waxy, or over-smoothed. No distorted, short,
stubby, swollen, tiny, oversized, merged, or deformed hands. No extra
fingers. No awkward cropping. Subject not floating. No cluttered background.
No text, captions, logos, watermarks, UI elements, or video controls.`,
  },
  {
    title: "Scene 3 — Podcast studio (condenser mic)",
    text: `Use my uploaded image as the exact subject identity reference. Preserve my
real face, skin tone, hairstyle, facial features, body proportions,
expression, and overall identity exactly as they appear in my reference
image. Do not copy the person from the scene reference. Do not redesign me
or make me look like someone else.

Create a professional podcast-style studio portrait inspired by the attached
reference scene. Place the subject seated indoors at a wooden desk or table
in a clean, modern recording studio, positioned behind a professional studio
microphone, facing the camera directly with a confident, relaxed, camera-
ready posture.

Vertical, polished, video-ready framing, like a high-quality podcast promo
image or a frame from a professional interview recording. Show the subject
from around the mid-torso upward, seated naturally behind the table, filling
most of the frame while still showing the microphone and studio background.

Place a large professional condenser microphone in the foreground, slightly
left of center, mounted on a stand with a shock mount and circular pop
filter. Close to the subject but not blocking the face. It should feel like
real podcast equipment on the table, not pasted in.

The subject's posture should feel natural and engaged, as if recording or
speaking during a podcast session. Arms rest naturally near the table or sit
lightly in front of them. Hands realistic, properly proportioned, naturally
placed. Avoid stiff or awkward arm positioning.

Background: dark acoustic foam panels behind the subject in a clean
professional pattern, plus a warm exposed bulb or small practical studio
light for a cozy glow. A real podcast booth or creator studio: modern,
intimate, slightly cinematic, professional.

Lighting: warm but clean. Subject brightly and clearly lit with soft
professional front key light, background with warm ambient depth. Premium
and studio-quality, not dark, muddy, or over-filtered.

Use shallow depth of field so the subject and microphone are sharp while the
panels and background lights are softly blurred. Cinematic but still crisp,
clean, and realistic.

CAMERA: high-end full-frame, sharp 50mm or 85mm portrait lens, professional
studio lighting, natural contrast, clean exposure, premium 4K or 8K quality.
Extremely clear and detailed: crisp focus, realistic skin texture, sharp
clothing fabric, realistic microphone texture, no faded or hazy filter.

Use the reference only for the podcast studio setup, microphone placement,
seated posture, framing, background mood, and lighting direction.

NEGATIVE: do not change my identity, face, skin tone, or hairstyle. Do not
copy the person in the reference image. Do not let the microphone block my
face or become distorted. No short, swollen, tiny, oversized, merged, or
deformed hands. No extra fingers. Not blurry, faded, hazy, low quality,
over-smoothed, plastic, waxy, or artificial. No cluttered background. No
text, logos, subtitles, watermarks, UI icons, or playback controls.`,
  },
];

export const CLAUDE_VEO_PROMPT = `You are a Veo 3 prompt engineer. I am uploading one image. Treat it as the
FIRST FRAME of a video.

Write me a single JSON video prompt that animates this exact scene into an
8-second clip for Veo 3.

Rules:
- Keep the person's face, outfit, and the scene identical to the image
- Subtle, natural motion only: the person talking to camera, slight head
  movement, blinking, small natural gestures
- Add gentle ambient motion in the background so it feels alive
- Include spoken dialogue with accurate lip sync
- Dialogue line: "[paste the line you want me to say]"
- Keep the camera mostly static with a very slow push-in
- Keep lighting and colour continuous with the image
- Add matching audio: room ambience plus a clear voice

Return ONLY valid JSON with these keys: scene, subject, action, camera,
lighting, audio, dialogue, lip_sync, style, duration, aspect_ratio,
negative_prompt. No explanation before or after.`;

export const SAMPLE_VEO_JSON = `{
  "scene": "sunlit modern kitchen, marble counters, soft morning light",
  "subject": "the same woman from the reference image, cream linen shirt",
  "action": "speaking directly to camera, natural head movement, blinking, slight smile",
  "camera": "static medium shot, 50mm, eye level, very slow push-in",
  "lighting": "soft natural window light from the left, warm and continuous",
  "audio": "quiet kitchen room tone, clear close voice",
  "dialogue": "This entire video wasn't filmed.",
  "lip_sync": "accurate, tightly matched to the dialogue",
  "style": "photorealistic, cinematic, natural skin texture",
  "duration": "8s",
  "aspect_ratio": "9:16",
  "negative_prompt": "distorted face, identity drift, warping, plastic skin, jerky motion"
}`;
