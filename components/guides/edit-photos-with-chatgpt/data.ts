export const SLUG = "edit-photos-with-chatgpt";

export const UNIVERSITY_URL =
  "https://university.attentionfactory.io/?ref=mercythaddeus";

const IMG = "/guides/edit-photos-with-chatgpt";

export type PhotoEdit = {
  id: string;
  num: number;
  title: string;
  use: string;
  prompt: string;
  tip: string;
  before: string;
  after: string;
  alt: string;
};

export const HOW_TO_USE = [
  "Open ChatGPT and upload your photo. It works on the free plan, which has a daily limit on images.",
  "Copy the prompt for the edit you want, paste it under your photo and send it.",
  "Not quite right? Reply with what to fix, like “keep my face the same, only brighten it.” You don’t need to start over.",
];

export const PHOTO_EDITS: PhotoEdit[] = [
  {
    id: "blurry-to-hd",
    num: 1,
    title: "Blurry to HD",
    use: "For the photo you love that came out soft, grainy or low quality.",
    prompt:
      "Enhance this photo to sharp, high-definition quality. Increase clarity and fine detail in the eyes, hair, skin and clothing, remove blur, noise and compression artifacts, and correct the colours so they look natural. Do not change my face, expression, pose, hairstyle, body, background or composition. It should look like the same photo taken on a better camera.",
    tip: "It works best on photos that are a little soft, not ones where you can barely see the face. If your features change, reply “keep my face exactly the same, only sharpen it.”",
    before: `${IMG}/1-before.jpg`,
    after: `${IMG}/1-after.jpg`,
    alt: "A grainy portrait in a white blazer, and the same portrait sharpened to HD",
  },
  {
    id: "fix-bad-lighting",
    num: 2,
    title: "Fix bad lighting",
    use: "For photos taken at night, indoors, or under yellow bulbs.",
    prompt:
      "Fix the lighting in this photo. Brighten the underexposed areas, soften the harsh shadows on my face and remove any orange or green colour cast, so it looks like it was shot in soft daylight by a professional photographer. Keep my face, skin tone, features, expression, pose and background exactly the same.",
    tip: "If the result looks too bright or washed out, reply “keep my real skin tone, just make it a little brighter.”",
    before: `${IMG}/2-before.jpg`,
    after: `${IMG}/2-after.jpg`,
    alt: "A dark, orange-tinted photo at a desk, and the same photo in soft daylight",
  },
  {
    id: "skin-retouch",
    num: 3,
    title: "Natural skin retouch",
    use: "For when you want to look rested without the plastic filter look.",
    prompt:
      "Retouch my skin naturally: soften dark circles and temporary blemishes, even out redness and shine, and keep my real skin texture and pores. Don't smooth my skin like a filter, and don't change my skin tone, face shape, features or makeup. It should look like I had a good night's sleep, not like an edit.",
    tip: "The change is meant to be subtle. If it comes back too smooth, reply “add back more of my real skin texture.”",
    before: `${IMG}/3-before.jpg`,
    after: `${IMG}/3-after.jpg`,
    alt: "A close-up portrait before and after a natural skin retouch",
  },
  {
    id: "dslr-portrait",
    num: 4,
    title: "DSLR portrait mode",
    use: "For phone photos with a busy background that pulls attention away from you.",
    prompt:
      "Make this look like it was shot on a professional DSLR with a 50mm lens: a soft, creamy blurred background, sharp focus on my eyes, natural contrast and rich but realistic colours. Keep my face, skin tone, hair, outfit, pose and expression exactly the same.",
    tip: "Use a photo where you’re clearly the subject. The more space between you and the background, the more natural the blur looks.",
    before: `${IMG}/4-before.jpg`,
    after: `${IMG}/4-after.jpg`,
    alt: "A photo with a sharp, busy background, and the same photo with a soft blurred background",
  },
  {
    id: "golden-hour",
    num: 5,
    title: "Golden hour portrait",
    use: "For giving a flat photo that warm, glowing evening light.",
    prompt:
      "Relight this photo as if it was taken during golden hour: warm, low sunlight from the side, soft glowing highlights on my skin and hair, and a softly blurred background. Keep my face, skin tone, hairstyle, outfit, pose and the location exactly the same. Only the light should change.",
    tip: "It works on studio and indoor photos too. ChatGPT adds the warm side light without moving you anywhere.",
    before: `${IMG}/5-before.jpg`,
    after: `${IMG}/5-after.jpg`,
    alt: "A studio photo on a plain white background, and the same photo relit with warm golden light",
  },
  {
    id: "professional-headshot",
    num: 6,
    title: "Professional headshot",
    use: "For a LinkedIn, CV or company website photo without booking a shoot.",
    prompt:
      "Turn this photo into a professional headshot for LinkedIn or a company website. Keep my face, facial structure, skin tone, hairstyle and expression recognisable and natural. Chest-up framing, a clean blazer or smart top, soft studio lighting and a plain light grey background. Natural skin texture, sharp eyes, no beauty filter.",
    tip: "Start with a photo where you’re facing the camera. ChatGPT keeps the angle of the photo you upload, so a side-on photo gives you a side-on headshot.",
    before: `${IMG}/6-before.jpg`,
    after: `${IMG}/6-after.jpg`,
    alt: "A casual photo at a flower market, and a professional headshot in a blazer on a grey background",
  },
  {
    id: "g7x-camera",
    num: 7,
    title: "G7X camera effect",
    use: "For the bright, flashy digicam look everyone is posting.",
    prompt:
      "Make this photo look like it was taken on a Canon G7X compact camera with the flash on: bright direct flash on my face, a slightly darker background, crisp detail, warm skin tones and that candid digicam look. Keep my face, expression, outfit, pose and the background exactly the same.",
    tip: "Night photos and darker backgrounds give the strongest flash effect.",
    before: `${IMG}/7-before.jpg`,
    after: `${IMG}/7-after.jpg`,
    alt: "A dim night portrait, and the same portrait with a bright compact-camera flash",
  },
  {
    id: "iphone-blurry",
    num: 8,
    title: "iPhone blurry effect",
    use: "For the viral motion-blur night-out photo.",
    prompt:
      "Turn this into the viral blurry night photo: direct flash on me, slight motion blur and light trails in the background, a little grain, candid and full of movement, like a fun night out. Keep my face sharp and recognisable, and keep my outfit, pose and expression the same.",
    tip: "Pick a photo with lights behind you, like a restaurant, a street or a party. The lights turn into the trails.",
    before: `${IMG}/8-before.jpg`,
    after: `${IMG}/8-after.jpg`,
    alt: "A photo outside a restaurant, and the same photo with flash and motion-blurred light trails",
  },
  {
    id: "change-location",
    num: 9,
    title: "Change your location",
    use: "For putting yourself somewhere you haven’t been (yet).",
    prompt:
      "Keep me exactly as I am in this photo, with the same face, body, outfit, pose and expression, and place me in [location, e.g. a rooftop in Paris at sunset]. Match the lighting, shadows, colours and perspective so it looks like a real photo taken there by a professional photographer.",
    tip: "Replace the part in [square brackets] with anywhere you like: a beach in Zanzibar, a café in Rome, Times Square at night. A full-body photo works best.",
    before: `${IMG}/9-before.jpg`,
    after: `${IMG}/9-after.jpg`,
    alt: "A photo on a city street, and the same pose on a Paris rooftop at sunset",
  },
  {
    id: "restore-old-photo",
    num: 10,
    title: "Restore an old photo",
    use: "For faded, scratched or torn family photos.",
    prompt:
      "Restore this old photo. Remove scratches, creases, stains, dust and fading, sharpen the details and gently add natural colour. Keep every person's face, features, age and expression exactly as they are, so it looks like the original moment captured on a modern camera.",
    tip: "Lay the printed photo flat in good daylight and take a straight-on picture of it with your phone before you upload it.",
    before: `${IMG}/10-before.jpg`,
    after: `${IMG}/10-after.jpg`,
    alt: "A faded, scratched sepia photo, and the same photo restored in colour",
  },
];

export const ALL_PROMPTS = PHOTO_EDITS.map(
  (edit) => `${edit.num}. ${edit.title}\n${edit.prompt}`,
).join("\n\n");
