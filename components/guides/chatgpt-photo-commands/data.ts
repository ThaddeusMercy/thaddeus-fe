export const SLUG = "chatgpt-photo-commands";

export const UNIVERSITY_URL =
  "https://academy.attentionfactory.io/ai-university?ref=mercythaddeus";

const IMG = "/guides/chatgpt-photo-commands";

/** Every full prompt for a one-photo command opens with this line. */
const LOCK =
  "Use my photo. Keep my face, hair, skin tone, body and outfit exactly the same.";
const END = "Photorealistic, natural light, sharp detail.";

export type Shot = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type GroupId = "scenes" | "camera" | "fun" | "transfers";

export type PhotoCommand = {
  id: string;
  num: string;
  code: string;
  group: GroupId;
  /** One line on what it does */
  does: string;
  prompt: string;
  /** One photo in (or photo 1 and photo 2 for transfers) */
  inputs?: Shot[];
  result?: Shot;
  /** The video showed this command stacked with others */
  stacked?: string;
  /** Shown under the images, e.g. how the example was cropped */
  note?: string;
  /** Shown instead of images when the videos have no example of its own */
  seeAlso?: { text: string; links: { id: string; code: string }[] };
};

export const GROUPS: { id: GroupId; title: string; intro: string }[] = [
  {
    id: "scenes",
    title: "Scenes",
    intro:
      "These keep you and your outfit and move you somewhere else. Your pose usually stays the same, so pick a photo where you like how you're standing.",
  },
  {
    id: "camera",
    title: "Camera and light",
    intro:
      "These change how the photo was taken: the angle, the lens, the light or the moment. Most of them keep the location from your photo.",
  },
  {
    id: "fun",
    title: "Fun",
    intro: "Two that turn one photo into a set of photos.",
  },
  {
    id: "transfers",
    title: "Transfers",
    intro:
      "These need two photos. Attach them in order: photo 1 is the one you copy from, photo 2 is you. The command copies one thing from photo 1 and leaves everything else in photo 2 alone.",
  },
];

function one(id: string, w: number, h: number, alt: string): Shot[] {
  return [{ src: `${IMG}/${id}-input.webp`, width: w, height: h, alt }];
}

function res(id: string, w: number, h: number, alt: string): Shot {
  return { src: `${IMG}/${id}-result.webp`, width: w, height: h, alt };
}

export const COMMANDS: PhotoCommand[] = [
  // Scenes
  {
    id: "outdoorcafe",
    num: "01",
    code: "/outdoorcafe",
    group: "scenes",
    does: "Puts you on a café terrace at dusk, with warm lanterns and a pink sky behind you.",
    prompt: `${LOCK} Keep my pose. Place me on the terrace of a European outdoor café in the early evening, with small round tables, wicker chairs, warm lanterns and a soft pink sunset sky behind me. Blur the background gently so I stay the focus. ${END}`,
    inputs: one(
      "outdoorcafe",
      400,
      703,
      "Before: a woman in a cream satin dress leaning on a stone balustrade in a garden",
    ),
    result: res(
      "outdoorcafe",
      900,
      1572,
      "After: the same woman and pose on a café terrace at dusk, with lanterns and tables behind her",
    ),
  },
  {
    id: "gardenportrait",
    num: "02",
    code: "/gardenportrait",
    group: "scenes",
    does: "Moves you into a lush garden full of white roses and greenery in soft daylight.",
    prompt: `${LOCK} Keep my pose. Place me in a lush formal garden in soft daylight, surrounded by green hedges, white roses and flowering shrubs, with a stone balustrade beside me. Use a shallow depth of field so the flowers behind me fall softly out of focus. ${END}`,
    inputs: one(
      "gardenportrait",
      400,
      702,
      "Before: a woman in a cream satin dress on a café terrace at dusk",
    ),
    result: res(
      "gardenportrait",
      900,
      1572,
      "After: the same woman and pose in a daylight garden full of white roses",
    ),
  },
  {
    id: "beachsunset",
    num: "03",
    code: "/beachsunset",
    group: "scenes",
    does: "Puts you on a terrace above the sea, with the sun setting right behind you.",
    prompt: `${LOCK} Keep my pose. Place me on a terrace overlooking the sea at sunset, with the sun low on the horizon behind me, an orange and pink sky, and warm golden backlight on my hair and shoulders. ${END}`,
    inputs: one(
      "beachsunset",
      400,
      703,
      "Before: a woman in a cream satin dress leaning on a balustrade in a garden",
    ),
    result: res(
      "beachsunset",
      900,
      1572,
      "After: the same woman on a seaside terrace with the sun setting over the water behind her",
    ),
  },
  {
    id: "secretgarden",
    num: "04",
    code: "/secretgarden",
    group: "scenes",
    does: "Surrounds you with pink bougainvillea, hibiscus and palms on a sunlit garden path.",
    prompt: `${LOCK} Keep my pose. Place me on a sunlit path in a hidden tropical garden, surrounded by pink bougainvillea, red hibiscus, palms and dense greenery, with dappled sunlight falling through the leaves. ${END}`,
    inputs: one(
      "secretgarden",
      400,
      714,
      "Before: a woman in a lime shirt and green shorts by a hotel pool",
    ),
    result: res(
      "secretgarden",
      900,
      1602,
      "After: the same woman on a garden path surrounded by pink bougainvillea and red hibiscus",
    ),
  },
  {
    id: "citystreet",
    num: "05",
    code: "/citystreet",
    group: "scenes",
    does: "Puts you on a busy city pavement in daylight, with shop windows and people walking past.",
    prompt: `${LOCK} Keep my pose. Place me on a busy city pavement in the daytime, leaning on a stone ledge, with glass shop fronts and people walking past in the background. ${END}`,
    inputs: one(
      "citystreet",
      400,
      703,
      "Before: a woman in a blue top and jeans on a rooftop at dusk with the city skyline behind her",
    ),
    result: res(
      "citystreet",
      900,
      1572,
      "After: the same woman and pose on a daytime city street, with blurred people walking past",
    ),
    stacked: "/citystreet /motionblur",
  },
  {
    id: "rooftopbluehour",
    num: "06",
    code: "/rooftopbluehour",
    group: "scenes",
    does: "Puts you on a rooftop just after sunset, with the city skyline lighting up behind you.",
    prompt: `${LOCK} Keep my pose. Place me on a rooftop terrace at blue hour, just after sunset, with a deep blue sky, the city skyline lit up behind me and small warm lights along the terrace. Light my face softly so I stay bright against the evening sky. ${END}`,
    inputs: one(
      "rooftopbluehour",
      400,
      703,
      "Before: a woman in a blue top and jeans leaning on a ledge on a daytime city street",
    ),
    result: res(
      "rooftopbluehour",
      900,
      1572,
      "After: the same woman and pose on a rooftop at blue hour with the lit-up skyline behind her",
    ),
  },

  // Camera and light
  {
    id: "cinematicphoto",
    num: "07",
    code: "/cinematicphoto",
    group: "camera",
    does: "Relights your photo like a film still: warm golden light, longer shadows, richer colour.",
    prompt: `${LOCK} Keep my pose and the same location. Relight the photo like a still from a film: warm golden-hour sunlight coming in from one side, longer soft shadows, richer contrast and a gentle film colour grade with warm highlights. ${END}`,
    inputs: one(
      "cinematicphoto",
      400,
      718,
      "Before: a woman in a striped cardigan and grey trousers in a bright, plain office",
    ),
    result: res(
      "cinematicphoto",
      900,
      1603,
      "After: the same photo relit with warm golden sunlight and deeper shadows",
    ),
  },
  {
    id: "nighttimeflash",
    num: "08",
    code: "/nighttimeflash",
    group: "camera",
    does: "Turns the scene to night and lights you with a direct on-camera flash.",
    prompt: `${LOCK} Keep my pose and the same location. Change the time to night, with city lights glowing and blurred in the background, and light me with a direct on-camera flash so my face and outfit are bright and crisp, like a photo from a night out. Photorealistic, true-to-life flash, sharp detail.`,
    inputs: one(
      "nighttimeflash",
      400,
      703,
      "Before: a woman in a blue top and jeans on a daytime city street",
    ),
    result: res(
      "nighttimeflash",
      900,
      1572,
      "After: the same street at night, the woman lit by a camera flash with city lights behind her",
    ),
  },
  {
    id: "fisheye",
    num: "09",
    code: "/fisheye",
    group: "camera",
    does: "Shoots you from above through a fisheye lens, with the room curving around you.",
    prompt: `${LOCK} Keep the same location. Reshoot me through a fisheye lens from slightly above, looking down at me, so the room bends around the edges of a round fisheye frame and I stay in the centre. ${END}`,
    inputs: one(
      "fisheye",
      400,
      718,
      "Before: a woman in a black satin dress by a grand staircase",
    ),
    result: res(
      "fisheye",
      900,
      1603,
      "After: the same woman seen from above through a round fisheye lens, the staircase curving around her",
    ),
  },
  {
    id: "droneview",
    num: "10",
    code: "/droneview",
    group: "camera",
    does: "Reshoots you from high above, like a drone looking down while you look up.",
    prompt: `${LOCK} Keep the same location. Reshoot the photo from high above, as if taken by a drone a few metres over me, looking down at me standing on the ground with the floor and surroundings visible around me. I look up towards the camera. ${END}`,
    inputs: one(
      "droneview",
      400,
      714,
      "Before: a woman in a red top and wide jeans outside a hotel entrance",
    ),
    result: res(
      "droneview",
      900,
      1602,
      "After: the same woman seen from high above, looking up at the camera",
    ),
  },
  {
    id: "securitycam",
    num: "11",
    code: "/securitycam",
    group: "camera",
    does: "Makes it look like a black and white CCTV still from a camera high on the wall.",
    prompt: `${LOCK} Keep the same location. Make the photo look like a frame from a security camera mounted high on the wall: a high angle looking down at me, black and white, a slightly wide lens and flat, even lighting. ${END}`,
    inputs: one(
      "securitycam",
      400,
      714,
      "Before: a woman in a red top and wide jeans outside a hotel entrance",
    ),
    result: res(
      "securitycam",
      900,
      1602,
      "After: a black and white, high-angle security camera view of the same woman",
    ),
  },
  {
    id: "pov",
    num: "12",
    code: "/pov",
    group: "camera",
    does: "Turns the photo into a point-of-view shot, as if someone is walking just in front of you.",
    prompt: `${LOCK} Reshoot the photo as a point-of-view shot, as if the person holding the camera is walking just in front of me: camera at chest height, me walking towards the lens and looking into it. ${END}`,
    inputs: one(
      "pov",
      400,
      718,
      "Before: a woman in a black satin dress by a grand staircase",
    ),
    result: res(
      "pov",
      900,
      1603,
      "After: the same woman walking towards the camera through a wide hall, the background blurred with movement",
    ),
    stacked: "/pov /wide /motionblur",
  },
  {
    id: "wide",
    num: "13",
    code: "/wide",
    group: "camera",
    does: "Pulls the camera back with a wide-angle lens so more of the location fits in.",
    prompt: `${LOCK} Reshoot the photo with a wide-angle lens, around 24mm, from a little further back, so more of the location is visible around me and I am shown full length. Keep straight lines natural without heavy distortion. ${END}`,
    seeAlso: {
      text: "The videos only show this one stacked with others. Example:",
      links: [{ id: "pov", code: "/pov /wide /motionblur" }],
    },
  },
  {
    id: "motionblur",
    num: "14",
    code: "/motionblur",
    group: "camera",
    does: "Adds movement: everything around you streaks and blurs while you stay sharp.",
    prompt: `${LOCK} Keep my pose. Add motion blur to the scene so it feels like a slow-shutter photo: people and things moving around me streak and blur while I stay completely sharp and in focus. ${END}`,
    seeAlso: {
      text: "The videos only show this one stacked with others. Examples:",
      links: [
        { id: "citystreet", code: "/citystreet /motionblur" },
        { id: "pov", code: "/pov /wide /motionblur" },
      ],
    },
  },
  {
    id: "ultracloseup",
    num: "15",
    code: "/ultracloseup",
    group: "camera",
    does: "Moves the camera in for a chest-up close-up with sharp skin and hair detail.",
    prompt: `${LOCK} Reframe the photo as a close-up portrait from the chest up, with my face filling the upper part of the frame and visible skin texture, eyelashes and hair detail. ${END}`,
    inputs: one(
      "ultracloseup",
      400,
      714,
      "Before: a full-length photo of a woman in a yellow top and wide jeans walking outside",
    ),
    result: res(
      "ultracloseup",
      900,
      1602,
      "After: a chest-up close-up of the same woman with the background softly blurred",
    ),
    stacked: "/ultracloseup /bokeh",
  },
  {
    id: "bokeh",
    num: "16",
    code: "/bokeh",
    group: "camera",
    does: "Melts the background into soft blur and round circles of light so you stand out.",
    prompt: `${LOCK} Keep the same location. Shoot the photo at a wide aperture, around f/1.4, so I stay pin-sharp while the background melts into creamy blur and any lights behind me turn into soft round bokeh circles. ${END}`,
    inputs: one(
      "bokeh",
      400,
      718,
      "Before: a woman in a black satin dress by a grand staircase",
    ),
    result: res(
      "bokeh",
      900,
      1603,
      "After: a close-up of the same woman with the staircase lights turned into soft bokeh circles",
    ),
    stacked: "/ultracloseup /bokeh",
  },
  {
    id: "carwindow",
    num: "17",
    code: "/carwindow",
    group: "camera",
    does: "Puts you in a car, photographed from outside through the open window.",
    prompt: `${LOCK} Place me sitting inside a black car with the window rolled down, photographed from outside through the open window, with the door frame and glossy paintwork in the foreground and the street reflected in the paint. ${END}`,
    inputs: one(
      "carwindow",
      400,
      714,
      "Before: a woman in a red top and wide jeans outside a hotel entrance",
    ),
    result: res(
      "carwindow",
      900,
      1602,
      "After: the same woman sitting in a black car, photographed through the open window",
    ),
  },
  {
    id: "paparazzieditorial",
    num: "18",
    code: "/paparazzieditorial",
    group: "camera",
    does: "Turns your photo into an evening red-carpet arrival, with photographers on both sides.",
    prompt: `${LOCK} Keep my pose. Place me arriving at an evening event, walking along a carpet outside a glamorous venue, with photographers and their camera flashes on both sides, velvet ropes on gold posts and a crowd behind me. Make it look like a candid paparazzi shot from a fashion editorial. ${END}`,
    inputs: one(
      "paparazzieditorial",
      400,
      714,
      "Before: a woman in a yellow top and wide jeans walking outside in the daytime",
    ),
    result: res(
      "paparazzieditorial",
      900,
      1602,
      "After: the same woman walking a carpet at night between photographers and velvet ropes",
    ),
  },
  {
    id: "walkingcandidpose",
    num: "19",
    code: "/walkingcandidpose",
    group: "camera",
    does: "Changes your pose to a natural mid-stride walk, glancing away from the camera.",
    prompt: `${LOCK} Keep the same location. Change my pose to a natural candid walk: mid-stride towards the camera, arms relaxed, head turned slightly and eyes looking off to the side as if I haven't noticed the photographer. ${END}`,
    inputs: one(
      "walkingcandidpose",
      400,
      714,
      "Before: a woman in a yellow top and wide jeans walking towards the camera",
    ),
    result: res(
      "walkingcandidpose",
      900,
      1602,
      "After: the same woman mid-stride, head turned and looking away from the camera",
    ),
    note: "A subtle one: same spot, but she's caught mid-stride and looking away instead of posing for the lens.",
  },

  // Fun
  {
    id: "clones",
    num: "20",
    code: "/clones",
    group: "fun",
    does: "Puts three of you in the same photo, each in a different pose.",
    prompt: `${LOCK} Keep the same location. Show three of me in the same photo, standing side by side, each in a different natural pose: one with arms crossed, one with a hand on the hip and one looking back over the shoulder. All three must be the same person with the same face and outfit. ${END}`,
    inputs: one(
      "clones",
      400,
      714,
      "Before: a woman in a lime shirt and green shorts by a hotel pool",
    ),
    result: res(
      "clones",
      900,
      1602,
      "After: three copies of the same woman standing side by side by the pool, each in a different pose",
    ),
  },
  {
    id: "photobooth",
    num: "21",
    code: "/photobooth",
    group: "fun",
    does: "Makes a four-frame photo booth sheet with a different expression in each shot.",
    prompt: `${LOCK} Create a photo booth sheet with four frames in a two-by-two grid on a plain grey backdrop, showing me from the chest up with a different playful expression or pose in each frame: smiling, hand on chin, pouting and laughing. ${END}`,
    inputs: one(
      "photobooth",
      400,
      714,
      "Before: a woman in a striped top and mustard trousers on a rooftop sofa at sunset",
    ),
    result: res(
      "photobooth",
      900,
      1602,
      "After: four chest-up photo booth frames of the same woman on a grey backdrop, each with a different expression",
    ),
  },

  // Transfers
  {
    id: "transferoutfit1to2",
    num: "22",
    code: "/transferoutfit1to2",
    group: "transfers",
    does: "Puts the outfit from photo 1 on you in photo 2. It even works from a shop mannequin.",
    prompt:
      "Use image 1 only for its outfit. Keep the person in image 2 exactly the same: same face, hair, skin tone, body, pose and background. Dress the person in image 2 in the outfit from image 1, matching every garment, colour, pattern, fabric and fit, and keep their own bag and shoes unless they clash. Photorealistic, natural light, sharp detail.",
    inputs: [
      {
        src: `${IMG}/transferoutfit1to2-input1.webp`,
        width: 400,
        height: 535,
        alt: "Photo 1: a mannequin on a street wearing a yellow ruffled top and wide jeans",
      },
      {
        src: `${IMG}/transferoutfit1to2-input2.webp`,
        width: 400,
        height: 714,
        alt: "Photo 2: a woman in a striped cardigan and grey trousers by terracotta arches",
      },
    ],
    result: res(
      "transferoutfit1to2",
      900,
      1602,
      "After: the woman from photo 2, same pose and place, now wearing the yellow top and wide jeans",
    ),
  },
  {
    id: "transferpose1to2",
    num: "23",
    code: "/transferpose1to2",
    group: "transfers",
    does: "Copies how the person in photo 1 is sitting or standing onto you in photo 2.",
    prompt:
      "Use image 1 only for its pose. Keep the person in image 2 exactly the same: same face, hair, skin tone, body, outfit and background. Repose the person in image 2 to match the body position in image 1 exactly, including how they sit or stand, their arms, legs and head angle, and change the scene only as much as the pose needs, for example a ledge to sit on. Photorealistic, natural light, sharp detail.",
    inputs: [
      {
        src: `${IMG}/transferpose1to2-input1.webp`,
        width: 400,
        height: 535,
        alt: "Photo 1: a woman sitting on a wooden bench with her legs crossed",
      },
      {
        src: `${IMG}/transferpose1to2-input2.webp`,
        width: 400,
        height: 713,
        alt: "Photo 2: a woman in a striped cardigan standing by terracotta arches",
      },
    ],
    result: res(
      "transferpose1to2",
      900,
      1602,
      "After: the woman from photo 2 now sitting on a ledge with her legs crossed, like photo 1",
    ),
  },
  {
    id: "transferbg1to2",
    num: "24",
    code: "/transferbg1to2",
    group: "transfers",
    does: "Swaps the background in your photo for the location in photo 1.",
    prompt:
      "Use image 1 only for its background. Keep the person in image 2 exactly the same: same face, hair, skin tone, body, pose and outfit. Replace the background of image 2 with the location from image 1, and match the light on the person to that location so they look like they were photographed there. Photorealistic, natural light, sharp detail.",
    inputs: [
      {
        src: `${IMG}/transferbg1to2-input1.webp`,
        width: 400,
        height: 718,
        alt: "Photo 1: a woman in a burgundy suit on a rooftop with a city skyline at dusk",
      },
      {
        src: `${IMG}/transferbg1to2-input2.webp`,
        width: 400,
        height: 718,
        alt: "Photo 2: a woman in a black satin dress by a grand staircase",
      },
    ],
    result: res(
      "transferbg1to2",
      900,
      1603,
      "After: the woman in the black dress, same pose, now in front of the city skyline at dusk",
    ),
  },
  {
    id: "transfercolorgrade1to2",
    num: "25",
    code: "/transfercolorgrade1to2",
    group: "transfers",
    does: "Copies the colours and mood of photo 1 onto your photo, like borrowing someone's preset.",
    prompt:
      "Use image 1 only for its colour grade. Keep the person in image 2 exactly the same, along with their pose, outfit and everything in the background. Apply the colours, white balance, contrast and mood of image 1 to image 2, so both photos look like they were edited with the same preset. Photorealistic, natural light, sharp detail.",
    inputs: [
      {
        src: `${IMG}/transfercolorgrade1to2-input1.webp`,
        width: 400,
        height: 535,
        alt: "Photo 1: a cool, soft daylight street photo of a mannequin under trees",
      },
      {
        src: `${IMG}/transfercolorgrade1to2-input2.webp`,
        width: 400,
        height: 714,
        alt: "Photo 2: a woman on a rooftop sofa in warm orange sunset light",
      },
    ],
    result: res(
      "transfercolorgrade1to2",
      900,
      1602,
      "After: the rooftop photo regraded to cool, soft daylight colours like photo 1",
    ),
  },
  {
    id: "transfermakeupfrommodel1to2",
    num: "26",
    code: "/transfermakeupfrommodel1to2",
    group: "transfers",
    does: "Copies the makeup look from photo 1 onto your face in photo 2.",
    prompt:
      "Use image 1 only for its makeup. Keep the person in image 2 exactly the same: same face shape, features, hair, skin tone, body, pose, outfit and background. Copy the makeup look from image 1 onto the person in image 2, including the lip colour and finish, blush, eyeshadow, eyeliner, lashes and brows. Photorealistic, natural light, sharp detail.",
    inputs: [
      {
        src: `${IMG}/transfermakeupfrommodel1to2-input1.webp`,
        width: 400,
        height: 718,
        alt: "Photo 1: a close-up of a model wearing plum lipstick and defined brows",
      },
      {
        src: `${IMG}/transfermakeupfrommodel1to2-input2.webp`,
        width: 298,
        height: 314,
        alt: "Photo 2: a close-up of a woman with nude pink lips by a staircase",
      },
    ],
    result: res(
      "transfermakeupfrommodel1to2",
      900,
      942,
      "After: the woman from photo 2 with plum lips, defined lashes and brows like photo 1",
    ),
    note: "Photo 2 and the result are cropped to the face so you can see the change. Look at the lips, lashes and brows.",
  },
];

export const COMBOS = [
  "/citystreet /motionblur",
  "/ultracloseup /bokeh",
  "/pov /wide /motionblur",
];

const SHORT: Record<string, string> = {
  outdoorcafe: "café terrace at dusk",
  gardenportrait: "lush garden in soft daylight",
  beachsunset: "seaside terrace at sunset",
  secretgarden: "tropical flower garden",
  citystreet: "busy city pavement",
  rooftopbluehour: "rooftop with the skyline after sunset",
  cinematicphoto: "film-style golden light",
  nighttimeflash: "night out with on-camera flash",
  fisheye: "fisheye lens from above",
  droneview: "shot from high above",
  securitycam: "black and white CCTV still",
  pov: "point-of-view walking shot",
  wide: "wide-angle lens",
  motionblur: "moving blur around you",
  ultracloseup: "chest-up close-up",
  bokeh: "soft background lights",
  carwindow: "through a car window",
  paparazzieditorial: "red-carpet arrival",
  walkingcandidpose: "candid mid-stride walk",
  clones: "three of you in one photo",
  photobooth: "four-frame photo booth sheet",
  transferoutfit1to2: "copy the outfit from photo 1",
  transferpose1to2: "copy the pose from photo 1",
  transferbg1to2: "copy the background from photo 1",
  transfercolorgrade1to2: "copy the colours from photo 1",
  transfermakeupfrommodel1to2: "copy the makeup from photo 1",
};

export const ALL_COMMANDS = [
  ...GROUPS.map((group) => {
    const lines = COMMANDS.filter((c) => c.group === group.id).map(
      (c) => `${c.code}: ${SHORT[c.id]}`,
    );
    const heading =
      group.id === "transfers"
        ? "TRANSFERS (attach photo 1, then photo 2 of you)"
        : group.title.toUpperCase();
    return [heading, ...lines].join("\n");
  }),
  ["COMBOS", ...COMBOS].join("\n"),
].join("\n\n");
