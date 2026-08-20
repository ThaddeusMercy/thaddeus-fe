export const SLUG = "clone-yourself-with-heygen";

export const CAPABILITIES = [
  "Create short social videos without filming every script",
  "Update tutorials or lessons without arranging another recording day",
  "Make product explainers and founder updates",
  "Use different outfits, backgrounds, poses, and camera framing",
  "Use a cloned voice, another available voice, or your own uploaded audio",
  "Reuse the same avatar across several scripts and projects",
] as const;

export const NEEDS = [
  "A HeyGen account",
  "A phone, webcam, or camera",
  "A clear recording of yourself",
  "A short consent video",
  "A script or recorded audio",
  "Enough HeyGen credits for the model and video length you choose",
  "Permission from the person being cloned, when the avatar is not you",
] as const;

export const OFFICIAL_LINKS = [
  { label: "HeyGen", href: "https://www.heygen.com/" },
  {
    label: "Avatar V setup guide",
    href: "https://help.heygen.com/en/articles/14602974-avatar-v-is-now-available-on-heygen",
  },
  {
    label: "Consent video guide",
    href: "https://help.heygen.com/en/articles/12092609-recording-your-consent-video",
  },
  {
    label: "AI Studio guide",
    href: "https://help.heygen.com/en/articles/11049837-create-your-first-video-in-our-studio",
  },
  {
    label: "Avatar Looks guide",
    href: "https://help.heygen.com/en/articles/9964694-avatar-looks-explained",
  },
  {
    label: "HeyGen credit guide",
    href: "https://help.heygen.com/en/articles/15126059-how-to-use-credits-on-heygen",
  },
] as const;

export const DIGITAL_TWIN_STEPS = [
  "Sign in to HeyGen.",
  "Open Avatars.",
  "Click Clone a Real Person.",
  "Choose whether to record with your webcam or phone, or upload a video.",
  "Record the short clip HeyGen requests. Avatar V currently starts with a 15-second recording.",
  "Speak naturally and use the level of expression you want the avatar to learn.",
  "Follow the prompt to create a standalone voice clone. This is optional, but it can make the result sound closer to you.",
  "Complete the consent video using the exact words HeyGen displays.",
  "Submit the recordings. HeyGen will process them and add the avatar to your library.",
] as const;

export const RECORDING_TIPS = [
  "Use clear, even lighting.",
  "Keep your face visible.",
  "Look directly into the camera.",
  "Record in a quiet room.",
  "Use a phone or camera that can record at least 1080p when possible.",
  "Keep the camera stable.",
  "Speak in your normal voice.",
  "Use natural expressions and gestures.",
  "Avoid filters, beauty effects, sunglasses, or anything covering your face.",
  "Wear a simple outfit that does not blend into the background.",
] as const;

export const LOOK_STEPS = [
  "Open the avatar.",
  "Click Edit Look or Add a Look.",
  "Choose a clear base Look where your face is easy to see.",
  "Click Design with AI.",
  "Add the base Look as the identity reference.",
  "Describe the outfit, setting, pose, framing, and lighting you want.",
  "Create the Look.",
  "Check the face, hands, clothing, and background before using it in a video.",
  "Edit the prompt and try again when any part looks wrong.",
] as const;

export const LOOK_PROMPT = `Create a photorealistic 9:16 avatar Look using the attached reference.

Keep the same person and preserve the person's identity, facial features, face shape, skin tone, hair, body shape, age, and natural proportions.

Outfit: [DESCRIBE THE OUTFIT]
Setting: [DESCRIBE THE SETTING]
Pose: [SITTING, STANDING, OR OTHER]
Framing: [CLOSE-UP, MEDIUM SHOT, OR FULL BODY]
Lighting: [SOFT DAYLIGHT, WARM STUDIO LIGHT, OR OTHER]
Camera position: [FRONT-FACING, EYE LEVEL, OR OTHER]

Keep the person's head upright, level, and facing the camera. Keep the eyes looking into the lens. Keep both hands relaxed and anatomically correct.

The setting should look clean and realistic. Do not add text, logos, watermarks, microphones, cables, extra people, extra fingers, distorted clothing, or unwanted objects.`;

export const SCENE_EXAMPLES = [
  {
    title: "Clean podcast setting",
    body: "Seated at a small table in a clean off-white podcast-style room, soft curtain background, warm studio lighting, medium shot, no microphone, no cables, and no recording equipment.",
  },
  {
    title: "Modern office",
    body: "Standing in a bright modern office with a simple neutral background, soft window light, eye-level camera, medium shot, and no visible logos or text.",
  },
  {
    title: "Home workspace",
    body: "Seated at a tidy home desk with a soft cream wall, natural daylight, a laptop placed to the side, medium shot, and a clean background with no clutter.",
  },
] as const;

export const VIDEO_STEPS = [
  "Choose the Look you want.",
  "Click Use in video to open AI Studio.",
  "Confirm that your Digital Twin is selected.",
  "Paste your script into the script field, or choose the audio option and upload your recording.",
  "Select your cloned voice or another voice when you are using text.",
  "Open Advanced Settings.",
  "Select Avatar V when it is not already selected.",
  "Choose the expression, gesture, and gaze settings you want.",
  "Preview the voice and each scene.",
  "Fix the script, pacing, pronunciation, or Look before generating the full video.",
  "Click Generate.",
] as const;

export const SCRIPT_WHEN = [
  "You want HeyGen to read the words with a cloned or selected voice.",
  "You need to make small text changes quickly.",
  "You want to create the same message in another language.",
  "You do not want to record audio.",
] as const;

export const AUDIO_WHEN = [
  "You want your real delivery, timing, accent, and emotion.",
  "The cloned voice does not pronounce a name or local word correctly.",
  "You have already recorded a clean voice note or voice-over.",
  "You want the avatar to follow the energy of your original recording.",
] as const;

export const MOTION_PROMPT = `Speak directly to the camera with calm, confident energy. Keep the head upright and centred. Maintain natural eye contact. Use small, relaxed hand gestures and a gentle nod on important lines. Keep the movement natural. Avoid sudden movements, exaggerated expressions, and constant hand motion.`;

export const TEST_STEPS = [
  "Create one short scene.",
  "Preview the voice.",
  "Generate the short test.",
  "Check the face, eyes, mouth, hands, outfit, background, and lip sync.",
  "Fix the Look, script, voice, or motion settings.",
  "Generate the full video only when the test looks right.",
] as const;

export const CHECKLIST = [
  {
    title: "Identity",
    items: [
      "The face still looks like the same person.",
      "The skin tone and facial features have not changed.",
      "The hair and body proportions look natural.",
      "The avatar does not look older, younger, lighter, or darker by accident.",
    ],
  },
  {
    title: "Movement",
    items: [
      "The head is upright and not tilted.",
      "The eyes look toward the camera.",
      "The mouth and teeth look natural.",
      "Hand gestures match the words.",
      "Fingers and joints do not look distorted.",
      "The avatar is not moving too much or too little.",
    ],
  },
  {
    title: "Audio",
    items: [
      "The voice sounds natural.",
      "Names and local words are pronounced correctly.",
      "The lip sync matches the audio.",
      "Pauses are in the right places.",
      "The energy matches the message.",
    ],
  },
  {
    title: "Scene",
    items: [
      "The outfit is accurate.",
      "The background matches the prompt.",
      "There are no unwanted objects.",
      "Text and logos are correct.",
      "The framing suits the platform.",
      "The video is in 9:16 for Reels, TikTok, and Shorts.",
    ],
  },
  {
    title: "Publishing",
    items: [
      "The message is accurate.",
      "The video does not make a fake claim or endorsement.",
      "Everyone whose face or voice appears gave permission.",
      "The video is labelled as AI-created when the platform or context requires it.",
    ],
  },
] as const;

export const PROBLEMS = [
  {
    title: "The avatar does not look enough like you",
    body: "Use a clearer base Look with your full face visible. Remove filters and heavy shadows. Choose a front-facing image or recording. Try another base Look before changing many prompt details at once.",
  },
  {
    title: "The mouth or teeth look unnatural",
    body: "Use a base Look with a relaxed face or small smile. In Advanced Settings, reduce the expression level. Compare Avatar V with Avatar IV when the result still looks wrong.",
  },
  {
    title: "The eyes are not looking at the camera",
    body: "Use a reference where you are looking into the lens. For a video-based avatar, open the Look, click Edit, and check whether Eye Contact Correction is available.",
  },
  {
    title: "The hands look wrong",
    body: "Use a medium or closer shot, keep the hands lower, and ask for smaller gestures. Remove complicated hand actions from the motion prompt. Create a version with the hands outside the frame when the message does not need them.",
  },
  {
    title: "The avatar moves too much",
    body: "Choose a calmer expression, fewer gestures, or the Less Expressive setting. Shorten the motion prompt and ask for one visible movement at a time.",
  },
  {
    title: "The avatar looks too stiff",
    body: "Use a more expressive source recording and a Look that shows enough of the upper body. Add one simple gesture or a gentle nod instead of several actions.",
  },
  {
    title: "The voice sounds robotic",
    body: "Create a standalone voice clone with clean audio, slow the voice slightly, add punctuation, and split long sentences. Upload your own audio when the exact delivery matters.",
  },
  {
    title: "A name or local word is pronounced incorrectly",
    body: "Spell the word phonetically, add spaces or punctuation, or upload your own audio. Test the sentence before rendering the full video.",
  },
  {
    title: "The background or outfit is wrong",
    body: "Edit the Look instead of the motion prompt. Describe one room, one outfit, and one camera position clearly. Remove unnecessary visual details and create another Look.",
  },
  {
    title: "The consent video was rejected",
    body: "Make sure the person in the consent clip is the same person in the avatar footage. Read the displayed consent words exactly, use clear lighting and sound, and keep the consent video under 30 seconds.",
  },
  {
    title: "Credits are being used too quickly",
    body: "Preview the audio first. Test one short scene. Avoid regenerating a long project for a small script change. Check the credit estimate shown in HeyGen before clicking Generate.",
  },
] as const;

export const FAQS = [
  {
    q: "Is HeyGen Avatar V free?",
    a: "HeyGen has a limited free plan. Avatar V videos and generated Looks can use credits, so the number and length of videos depend on the current plan.",
  },
  {
    q: "Can I create an avatar of another person?",
    a: "Only when that person has agreed and records their own consent video. Do not upload another person's footage without permission.",
  },
  {
    q: "Can HeyGen clone my voice?",
    a: "Yes. HeyGen offers an optional standalone voice clone during Avatar V setup. You can also select another available voice or upload your own audio.",
  },
  {
    q: "Can I change my outfit and background?",
    a: "Yes. Create another Avatar Look and describe the outfit, background, pose, and framing you want.",
  },
  {
    q: "Do I need to film every new video?",
    a: "No. Once the Digital Twin is ready, you can reuse it with new scripts, audio, and Looks. You may still record a new source clip or Look when you want a different performance or better result.",
  },
  {
    q: "Can a motion prompt move the avatar to another room?",
    a: "No. Motion controls are for expression, gesture, posture, and gaze. Use a new Look or other scene tools for the location, lighting, props, or camera direction.",
  },
] as const;
