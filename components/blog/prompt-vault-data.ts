export type PromptVaultEntry = {
  id: string;
  tab: string;
  title: string;
  prompt: string;
  howToUse: string;
};

export const PROMPT_VAULT_ENTRIES: PromptVaultEntry[] = [
  {
    id: "01",
    tab: "01",
    title: "4K Enhancer",
    prompt:
      "Ultra-premium professional image enhancement. Preserve 100% original identity, face structure, expression, pose, clothing, accessories, background, framing, and composition. Do NOT alter, redesign, replace, or add anything. Transform the uploaded low-quality, blurry image into extreme high-detail cinematic quality. Recover micro-details: sharp facial features, crisp eyes, natural skin texture, visible pores, realistic hair strands, clean refined edges, sharp fabric weave. High-contrast clarity, deep depth, and balanced cinematic lighting. Poster-grade realism with dramatic but accurate detail. Photorealistic textures only. True-to-source enhancement only. Output in 8K resolution, studio-level sharpness. Keep everything exactly the same, only enhance quality.",
    howToUse:
      "Upload any blurry, low-res, or pixelated photo (old screenshots, throwback images, zoomed-in shots) and run this prompt to restore it without changing the original.",
  },
  {
    id: "02",
    tab: "02",
    title: "Skin Texture",
    prompt:
      "Skin texture enhancement, preserve original identity and structure, refine skin detail without smoothing, remove temporary blemishes and redness only, even out tone subtly without flattening depth, retain natural highlights and shadow transitions, keep under-eye softness, render skin with smooth tonal balance, enhance micro-contrast for realism with natural lighting and color balance, deep rich melanin tones, no reshaping of facial features, no artificial glow, no over-sharpening, seamless integration with original image, invisible edit with high realism.",
    howToUse:
      "Use this when your AI image has that plastic, airbrushed look. It puts back the pores, depth, and natural skin detail without changing your features.",
  },
  {
    id: "03",
    tab: "03",
    title: "Professional Shoot",
    prompt:
      "Convert subject into a clean professional studio shoot. Preserve exact face, features, and identity 100 percent. Tight head and shoulders framing, centered, soft natural smile, eyes to camera. Seamless light grey studio backdrop with soft falloff. High end studio beauty lighting, large soft key light above eye level, soft fill, subtle rim light. Catchlights in both eyes. Shot on Canon 85mm f1.8, shallow depth of field. Natural pores and skin texture, no plastic smoothing, deep rich melanin tones. Tailored black blazer over crisp white silk blouse. Polished magazine-quality agency shot in 4K detail.",
    howToUse:
      "Upload any selfie and this turns it into a studio-quality professional headshot. Great for LinkedIn, press features, speaker bios, and About pages.",
  },
  {
    id: "04",
    tab: "04",
    title: "Lighting and Blur Fix",
    prompt:
      "Use the input image as the base. Preserve the exact pose, camera distance, framing, facial structure, expression, and hair placement with zero alterations. Do not warp. Transform the image from a low-quality night capture into a high-quality cinematic portrait by restoring sharpness and clarity. Reduce motion blur and softness while keeping natural skin texture, pores, and fine details intact. No artificial smoothing or reconstruction. Apply ethereal cinematic lighting inspired by the reference effect. Introduce soft diffused light striking the subjects, with highlights glowing gently while shadows remain deep and clean. Add subtle lens bloom, controlled light haze, and a thin atmospheric glow. Enhance backlit stray hairs so they catch the light naturally. Render skin with luminous translucency and warm natural undertones while fully preserving original complexion and texture. Introduce delicate film-style grain for a refined cinematic finish. Keep the background exactly the same, allowing only natural light flares and soft bokeh to interact with the subjects. Final result should feel cinematic and ethereal while remaining a perfect visual match to the original.",
    howToUse:
      "Run this on any photo that came out dark, blurry, or motion-shaky. It fixes the lighting and sharpness without changing the scene or the people in it.",
  },
  {
    id: "05",
    tab: "05",
    title: "Famous Selfie",
    prompt:
      "Raw iPhone selfie, subject from reference image standing close together with [famous person] in a natural candid moment. Subject appearing exactly as her most recent self with accurate face, hair, and features preserved 100 percent. Casual shoulder-to-shoulder composition, both leaning slightly into the frame, direct gaze into camera with relaxed natural expressions and a warm soft smile. Handheld at arm's length with slight upward tilt. Soft indoor lighting mixed with phone flash causing mild overexposure on highlights and shadow falloff. Natural skin texture visible with pores and subtle makeup detail. Stray hairs and fabric creases present. Background loosely visible with everyday environment elements slightly out of focus. Minor motion blur in edges, slight lens distortion from close proximity, off-center framing with imperfect crop, subtle ISO grain and uneven white balance. Unpolished, candid realism.",
    howToUse:
      "Replace [famous person] with anyone you want in the selfie with you. Upload your reference photo and you get a candid shot that looks like you actually ran into them.",
  },
  {
    id: "06",
    tab: "06",
    title: "Golden Hour",
    prompt:
      "Transform the subject from the reference image into a cinematic golden hour portrait. Preserve the subject's exact face, hairstyle, outfit, body shape, pose, and overall composition with zero alterations. Replace the overcast sky and flat daylight with a warm golden hour sunset, soft sun low on the horizon casting a glowing rim light around the subject. Sky rendered in deep amber, peach, and soft pink tones with cinematic clouds and a few birds in flight. Background city skyline silhouetted against the setting sun, dry grass and savanna foreground turned warm and golden. Light wraps around the subject's face, hair, and clothing with soft natural highlights and rich warm shadows. Skin rendered with natural texture and visible pores, deep rich melanin tones glowing in the warm light. Catchlights in the eyes. No reshaping of features, no plastic smoothing. Cinematic film color grading, gentle lens flare, soft atmospheric haze. Photorealistic, 4K resolution, magazine editorial quality.",
    howToUse:
      "Upload a photo taken in bad or flat lighting and this turns it into a glowy golden hour shot without changing your outfit, pose, or face.",
  },
  {
    id: "07",
    tab: "07",
    title: "Product Shoot",
    prompt:
      "Product studio transformation, isolate the product from the reference image and rebuild as a premium ad composition. Preserve 100% of the product's exact design, labeling, branding, logo, and text. Product centered and sharply in focus, positioning its key ingredients arranged with intention and depth, ingredients scattered, sliced, crushed, or whole depending on context. Composition balanced but not perfectly symmetrical. Clean surface with subtle texture and no harsh reflections. Background matched to the product's color palette with controlled highlights and gentle transitions. High-end studio lighting with controlled highlights and gentle shadow falloff. Crisp edges with slight natural shadow grounding the product. Details visible like condensation droplets, texture on ingredients, and fine surface imperfections. Minimal but premium magazine quality, photorealistic 4K resolution, polished advertising aesthetic.",
    howToUse:
      "Drop in any product shot, even a phone photo, and this rebuilds it as a campaign-grade ad with proper lighting, styling, and props.",
  },
  {
    id: "08",
    tab: "08",
    title: "Time Travel",
    prompt:
      "Place the subject from the reference image into a historic moment in time, captured as a casual selfie. Preserve the subject's exact face, hairstyle, skin tone, and likeness with full identity intact. Render the subject extending their arm forward in a natural selfie pose, standing next to a recognizable historical figure or moment. Background, environment, lighting, and atmosphere should match the era and location of the event with full period accuracy, including clothing, architecture, landmarks, vehicles, and crowd details. Lighting should feel naturally captured in the moment, matching the time of day and the weather of the original scene. Subject rendered with modern photographic clarity, natural skin texture, soft catchlights in the eyes, and realistic shadows blending seamlessly into the historical environment. No reshaping of features, no plastic smoothing. Cinematic depth of field, photorealistic, 4K resolution, viral selfie aesthetic that feels like the subject genuinely traveled back in time.",
    howToUse:
      "Add the historic moment or figure you want at the end of the prompt (the March on Washington, the moon landing, a Beatles concert) and upload your reference photo.",
  },
  {
    id: "09",
    tab: "09",
    title: "GTA Effect",
    prompt:
      "Transform the subject from the reference image into a stylized Grand Theft Auto V loading screen illustration. Preserve the subject's exact face, hairstyle, outfit, pose, and overall composition. Render in the signature GTA V vector art style: bold black ink outlines, flat saturated colors, cel-shaded highlights, halftone texture, and stylized comic book shading. Place the subject against an iconic Vice City or Los Santos sunset backdrop with palm tree silhouettes, neon city signage, and a deep orange-to-pink-to-purple gradient sky. Include stylized urban elements like skyscraper silhouettes and a low-rider car beside the subject. Add the classic Grand Theft Auto V logo in the bottom corner. Poster-grade illustration, sharp graphic lines, cinematic GTA cover aesthetic, 4K detail, game art quality.",
    howToUse:
      "Upload a full-body or half-body photo of yourself and this turns it into the GTA loading screen art. Works best with a clear pose and outfit visible.",
  },
  {
    id: "10",
    tab: "10",
    title: "Anime Effect",
    prompt:
      "Transform the subject from the reference image into a stylized anime illustration. Preserve the subject's exact face, hairstyle, outfit, body shape, pose, and overall composition with full likeness intact. Render in a clean modern anime art style with soft cel-shading, smooth gradients, expressive almond-shaped eyes with subtle highlights, defined eyelashes, and natural lip detail. Skin rendered with warm illustrated tones, soft blush, and gentle shading. Hair drawn with smooth flowing strands and subtle shine highlights. Clothing rendered with stylized fabric folds and natural shading. Background reimagined as a soft anime cityscape with painterly clouds, gentle sky gradient, distant skyline, and lush green field. Light, painterly brushwork on the grass and ground. Studio Ghibli meets modern Webtoon aesthetic, cinematic anime cover quality, sharp linework, vivid yet natural colors, poster-grade illustration, 4K detail.",
    howToUse:
      "Drop any clear photo of yourself in and this turns it into a clean anime cover illustration. Skin tone, features, and outfit stay accurate.",
  },
];
