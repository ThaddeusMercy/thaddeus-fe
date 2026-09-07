export const SLUG = "chatgpt-viral-image-prompts";

export type ViralPrompt = {
  num: string;
  code: string;
  blurb: string;
};

export type ViralSection = {
  id: string;
  title: string;
  note?: string;
  prompts: ViralPrompt[];
};

export const SECTIONS: ViralSection[] = [
  {
    id: "product-shots",
    title: "Product shots",
    note: "Upload your product photo first, then type:",
    prompts: [
      { num: "01", code: "/packshot", blurb: "Clean studio shot for your store" },
      { num: "02", code: "/premiumshowcase", blurb: "High end studio setup" },
      { num: "03", code: "/darkpremium", blurb: "Dark, moody, luxury look with edge light" },
      { num: "04", code: "/floatingproduct", blurb: "Floating in space with real shadows" },
      { num: "05", code: "/macroproduct", blurb: "Extreme close up on texture and finish" },
      { num: "06", code: "/beautyshot", blurb: "Polished hero image of form and finish" },
      { num: "07", code: "/lifestyle", blurb: "Product in a warm, real life setting" },
      { num: "08", code: "/mannequin", blurb: "Ghost mannequin for clothing, no model" },
      { num: "09", code: "/boutiquedisplay", blurb: "Product styled on a boutique shelf" },
      { num: "10", code: "/applestyle", blurb: "Minimal staging, lots of white space" },
    ],
  },
  {
    id: "product-ads-and-mockups",
    title: "Product ads and mockups",
    note: "Upload your product photo first, then type:",
    prompts: [
      { num: "11", code: "/explodedview", blurb: "Every part pulled apart, still readable" },
      { num: "12", code: "/blueprint", blurb: "Technical drawing with callouts" },
      { num: "13", code: "/billboard", blurb: "Product dropped onto an outdoor billboard" },
      { num: "14", code: "/3dbillboard", blurb: "3D anamorphic billboard mockup" },
      { num: "15", code: "/metaad", blurb: "Ready to run Meta ad creative" },
      { num: "16", code: "/newspaperad", blurb: "Product placed in a newspaper spread" },
      { num: "17", code: "/magazinead", blurb: "Fashion magazine style ad page" },
      { num: "18", code: "/packaging", blurb: "Product shown in its box and packaging" },
      { num: "19", code: "/ugc", blurb: "Casual creator photo, phone camera feel" },
      { num: "20", code: "/foodcollage", blurb: "Food photos turned into a story collage" },
    ],
  },
  {
    id: "camera-and-framing",
    title: "Camera and framing",
    prompts: [
      { num: "21", code: "/4k", blurb: "High detail, 4K resolution" },
      { num: "22", code: "/ultrarealistic", blurb: "As close to a real photo as it gets" },
      { num: "23", code: "/cinematic", blurb: "Film lighting, composition and mood" },
      { num: "24", code: "/droneview", blurb: "Aerial drone perspective" },
      { num: "25", code: "/topdown", blurb: "Straight down camera angle" },
      { num: "26", code: "/lowangle", blurb: "From below, subject looks huge" },
      { num: "27", code: "/closeup", blurb: "Tight framing on the subject" },
      { num: "28", code: "/wideangle", blurb: "Wide field of view, more environment" },
      { num: "29", code: "/fisheye", blurb: "Distorted ultra wide lens" },
      { num: "30", code: "/pov", blurb: "First person point of view" },
    ],
  },
  {
    id: "perspective-and-light",
    title: "Perspective and light",
    prompts: [
      { num: "31", code: "/overtheshoulder", blurb: "From behind the subject's shoulder" },
      { num: "32", code: "/wormseyeview", blurb: "Extreme view looking straight up" },
      { num: "33", code: "/fog", blurb: "Fog wrapped around the scene" },
      { num: "34", code: "/rainynight", blurb: "Wet streets, night, reflections" },
      { num: "35", code: "/sunset", blurb: "Warm sunset light" },
      { num: "36", code: "/goldenhour", blurb: "Warm, low sun, cinematic glow" },
      { num: "37", code: "/bluehour", blurb: "Cool blue twilight" },
      { num: "38", code: "/moonlight", blurb: "Scene lit by the moon" },
      { num: "39", code: "/neonlights", blurb: "Bright neon colour" },
      { num: "40", code: "/darkmoody", blurb: "Dark, dramatic, moody" },
    ],
  },
  {
    id: "lighting-and-lens",
    title: "Lighting and lens",
    prompts: [
      { num: "41", code: "/softlighting", blurb: "Gentle diffused light" },
      { num: "42", code: "/dramaticlighting", blurb: "Strong high contrast light" },
      { num: "43", code: "/volumetriclight", blurb: "Visible light beams in the air" },
      { num: "44", code: "/godrays", blurb: "Dramatic rays of sunlight" },
      { num: "45", code: "/studio", blurb: "Professional studio setup" },
      { num: "46", code: "/filmgrain", blurb: "Analog film texture" },
      { num: "47", code: "/anamorphic", blurb: "Widescreen cinema lens look" },
      { num: "48", code: "/bokeh", blurb: "Soft blurred background lights" },
      { num: "49", code: "/shallowdepth", blurb: "Sharp subject, blurred background" },
      { num: "50", code: "/motionblur", blurb: "Movement blur" },
    ],
  },
  {
    id: "aesthetic-and-fashion",
    title: "Aesthetic and fashion",
    prompts: [
      { num: "51", code: "/vintage", blurb: "Classic old style look" },
      { num: "52", code: "/oldmoney", blurb: "Quiet, timeless luxury" },
      { num: "53", code: "/luxury", blurb: "Premium high end feel" },
      { num: "54", code: "/minimalist", blurb: "Clean, simple composition" },
      { num: "55", code: "/editorial", blurb: "Magazine editorial photography" },
      { num: "56", code: "/fashion", blurb: "High fashion shoot" },
      { num: "57", code: "/streetstyle", blurb: "Modern urban street fashion" },
      { num: "58", code: "/magazinecover", blurb: "Cover layout with space for type" },
      { num: "59", code: "/polaroid", blurb: "Instant polaroid photo" },
      { num: "60", code: "/disposablecamera", blurb: "Raw disposable camera flash look" },
    ],
  },
  {
    id: "film-and-worlds",
    title: "Film and worlds",
    prompts: [
      { num: "61", code: "/35mmfilm", blurb: "Classic 35mm film aesthetic" },
      { num: "62", code: "/underwater", blurb: "Underwater environment" },
      { num: "63", code: "/space", blurb: "Outer space or cosmic setting" },
      { num: "64", code: "/forest", blurb: "Natural forest setting" },
      { num: "65", code: "/mountains", blurb: "Dramatic mountain landscape" },
      { num: "66", code: "/cityscape", blurb: "Urban city view" },
      { num: "67", code: "/cyberpunk", blurb: "Neon future city aesthetic" },
      { num: "68", code: "/futuristic", blurb: "Advanced future design" },
      { num: "69", code: "/postapocalyptic", blurb: "Ruined, dystopian world" },
      { num: "70", code: "/fantasy", blurb: "Magical fantasy world" },
    ],
  },
  {
    id: "genres-and-art-styles",
    title: "Genres and art styles",
    prompts: [
      { num: "71", code: "/scifi", blurb: "Science fiction style" },
      { num: "72", code: "/samurai", blurb: "Cinematic Japanese samurai scene" },
      { num: "73", code: "/noir", blurb: "Dark, high contrast film noir" },
      { num: "74", code: "/anime", blurb: "Japanese anime style" },
      { num: "75", code: "/oilpainting", blurb: "Traditional oil painting" },
      { num: "76", code: "/watercolor", blurb: "Soft watercolor artwork" },
      { num: "77", code: "/sketch", blurb: "Hand drawn sketch" },
      { num: "78", code: "/claystyle", blurb: "Claymation look" },
      { num: "79", code: "/3drender", blurb: "Polished 3D render" },
      { num: "80", code: "/isometric", blurb: "Isometric 3D perspective" },
    ],
  },
  {
    id: "materials-and-effects",
    title: "Materials and effects",
    prompts: [
      { num: "81", code: "/miniature", blurb: "Tiny diorama world" },
      { num: "82", code: "/tiltshift", blurb: "Tilt shift miniature effect" },
      { num: "83", code: "/chrome", blurb: "Reflective metallic chrome" },
      { num: "84", code: "/holographic", blurb: "Holographic material effect" },
      { num: "85", code: "/doubleexposure", blurb: "Two images blended into one" },
      { num: "86", code: "/reflection", blurb: "Mirrored or reflective surface" },
      { num: "87", code: "/fire", blurb: "Dramatic flames" },
      { num: "88", code: "/glitch", blurb: "Digital glitch distortion" },
      { num: "89", code: "/dreamcore", blurb: "Surreal, dreamlike, a bit uncanny" },
    ],
  },
];

export const EXAMPLE_PRODUCT =
  "Create image. Use the attached photo. Keep the product exactly as it is. /packshot /softlighting /shallowdepth";

export const EXAMPLE_SCENE =
  "Create image. A red vintage bicycle leaning on a Lagos street wall. /35mmfilm /goldenhour /lowangle";

export const RULES = [
  'Always name the subject. A command on its own is a style with no subject, so the model invents one.',
  "Stack two or three, no more. Past that they start fighting each other and you get mush.",
  'When you upload a product, say what must stay unchanged: the label, the shape, the colour. Otherwise the model will "improve" it.',
  'For diagrams like /explodedview or /blueprint, list the parts you want shown. "An exploded view of my blender showing the jar, blade, base and lid" beats "exploded view of my blender".',
  "Ask for no text in the image, then add your own text in Canva. The model still misspells things.",
] as const;
