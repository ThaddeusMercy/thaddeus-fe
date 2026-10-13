export const SLUG = "make-a-short-drama-with-ai";

export const UNIVERSITY_URL =
  "https://academy.attentionfactory.io/ai-university?ref=mercythaddeus";

export type ViralDrama = {
  stat: string;
  unit: string;
  name: string;
  detail: string;
  source: { label: string; href: string };
};

export const VIRAL_DRAMAS: ViralDrama[] = [
  {
    stat: "300M+",
    unit: "views",
    name: "Fruit Love Island",
    detail:
      "An AI-made dating-show drama on TikTok. The account gained 3 million followers in its first 9 days.",
    source: {
      label: "Wikipedia",
      href: "https://en.wikipedia.org/wiki/Fruit_Love_Island",
    },
  },
  {
    stat: "100M+",
    unit: "views",
    name: "Li Shimin's Soul Travels to Adou",
    detail:
      "Made by one person for about $1,400 (just over 10,000 yuan). It earned about $56,000 in revenue share.",
    source: {
      label: "36Kr, Oct 2026",
      href: "https://eu.36kr.com/en/p/4022192123924354",
    },
  },
  {
    stat: "1,055",
    unit: "AI dramas",
    name: "Passed 100M views each",
    detail: "On Douyin, between January and June 2026.",
    source: {
      label: "36Kr, Oct 2026",
      href: "https://eu.36kr.com/en/p/4022192123924354",
    },
  },
];

export type DramaStep = {
  id: string;
  num: string;
  title: string;
  blurb: string[];
  prompt: string;
  tip: string;
};

export const DRAMA_STEPS: DramaStep[] = [
  {
    id: "plot",
    num: "01",
    title: "Pick a plot, or bring your own story",
    blurb: [
      "The short dramas that blow up use stories everyone already knows: the secret billionaire, the cheating fiancé, the in-law who hates the bride, the intern who turns out to own the company. People recognise the setup in two seconds and stay to see how it ends.",
      "Pick one and give it your own twist, your own city and your own characters. Or skip the list and bring your own story. A few lines is enough: who wants what, what stands in their way, and what goes wrong.",
    ],
    prompt:
      "Give me 10 short drama ideas for vertical video. Each one should be built on a plot people can't stop watching, like a secret billionaire, a betrayal, rich in-laws, an office rivalry or a wedding gone wrong. Set them in [your city or country]. For each idea, give me a one-line hook, the main characters, the big twist, and why people would comment and share it. Every idea must work as a series of 60 to 90 second episodes with only 2 or 3 characters.",
    tip: "Already have a story? Skip this prompt and take your own idea to step 2. Either way, pick the one you can already picture people arguing about in the comments, because comments push a drama to more people.",
  },
  {
    id: "script",
    num: "02",
    title: "Let AI write it, then make it yours",
    blurb: [
      "A short drama lives or dies in the first 3 seconds. Nobody waits for introductions, so episode one has to open in the middle of the conflict and end on a cliffhanger.",
      "Paste your idea into Claude or ChatGPT and ask for one episode at a time. Then refine it. AI gives you a first draft, and your job is to make it sound like real people: fix the lines that feel stiff, add the slang your characters would use, and sharpen the cliffhanger until you'd want to watch part 2 yourself.",
    ],
    prompt:
      "Write episode 1 of my short drama. Here's the idea: [paste your idea from step 1]. Rules: it must be 60 to 90 seconds when spoken, filmed vertically, with 2 or 3 characters and no more than 2 locations. Open in the middle of the conflict, with no introductions. End on a cliffhanger that makes people beg for part 2. Write it as a script with scene headings, short lines of dialogue and simple actions.",
    tip: "Read the dialogue out loud. If a line sounds like a textbook, rewrite it yourself or ask for it \"the way people actually talk in [your city]\". Keep refining until every line sounds like something a person would say.",
  },
  {
    id: "cast",
    num: "03",
    title: "Cast your characters",
    blurb: [
      "This is the step most people skip, and it's why their characters look like a different person in every shot. Before you make any scene, lock each character's face and outfit in writing, then make one clean portrait of them.",
      "That portrait becomes your actor. You'll upload it every time that character appears.",
    ],
    prompt:
      "Create a character sheet for every character in my script so they look exactly the same in every shot. For each one, describe: skin tone, face shape, eyes, nose, lips, hair, build, and the one outfit they wear for the whole episode. Then write an image prompt for each character: a front-facing photorealistic portrait, chest up, on a plain grey background with soft, even light. Here's my script: [paste your script]",
    tip: "Paste each portrait prompt into ChatGPT (GPT Image 2) or Gemini (Nano Banana 2) and save the image you like. Name the files after the characters so you don't mix them up later.",
  },
  {
    id: "shots",
    num: "04",
    title: "Break it into short scenes",
    blurb: [
      "AI video tools make short clips, usually 5 to 10 seconds each. So ask Claude or ChatGPT to turn your script into a list of short scenes, and give each scene its own prompt.",
      "This step is where your drama starts to look like a film instead of a slideshow.",
    ],
    prompt:
      "Turn my script into a list of short scenes for an AI video tool. Break it into scenes of 8 seconds or less. For each scene, give me the scene number, the camera angle (close-up, medium or wide), who's in it, what they do, the exact line of dialogue if there is one, and the location. Then write one image prompt per scene that repeats each character's full description from the character sheet, so the faces stay the same. Script: [paste your script] Character sheet: [paste your character sheet]",
    tip: "Mix your angles. Close-ups for emotional lines, wide shots to show where you are. Three close-ups in a row feels like a video call.",
  },
  {
    id: "pictures",
    num: "05",
    title: "Turn every scene into an image",
    blurb: [
      "Don't go straight to video. Make each scene as an image first in ChatGPT (GPT Image 2) or Gemini (Nano Banana 2), fix it until it looks right, then animate it.",
      "Pictures are faster and cheaper to redo than videos, and a good starting picture gives you a much better video.",
    ],
    prompt:
      "Use the photo I uploaded as the face reference for [character name]. Keep the same face, hair and outfit exactly. [Paste the image prompt for this scene from step 4]. Vertical 9:16, photorealistic, cinematic lighting.",
    tip: "Upload the character portrait every single time, even if it feels repetitive. The moment you skip it, the face starts to drift.",
  },
  {
    id: "animate",
    num: "06",
    title: "Make them move and talk",
    blurb: [
      "Now upload each image to an AI video tool and give it the line to say. Veo 3.1, Gemini Omni Flash, Kling 3.0 and Seedance all generate the voice and match the lips in the same clip, so you don't need a separate voiceover app.",
      "Which one you use depends on your budget. The section below breaks it down.",
    ],
    prompt:
      "Animate this image. [Character name] says, in a [calm / angry / shocked] voice: \"[the exact line of dialogue]\". Camera: [slow push in / still / slow pan]. Keep the face and outfit exactly the same as the image. Natural movement, no extra people, no text on screen. 8 seconds.",
    tip: "Make 2 or 3 versions of each scene and keep the best one. One line of dialogue per clip gives you the cleanest lip sync.",
  },
  {
    id: "cliffhanger",
    num: "07",
    title: "Cut it on a cliffhanger",
    blurb: [
      "Put your clips in order in CapCut, add captions and a little music under the dialogue. Then cut the last shot right at the cliffhanger, before anyone reacts. That's what makes people follow you for part 2.",
      "Post it as \"Part 1\" and have part 2 ready within a day or two while people are still asking.",
    ],
    prompt:
      "Write 5 captions for episode 1 of my AI short drama. The hook: [one line about what happens]. Keep each under 30 words, end with a question that makes people take sides in the comments, and tell them part 2 drops [day].",
    tip: "Reply to the comments that take sides. Arguments in your comments are free promotion.",
  },
];

export const ALL_PROMPTS = DRAMA_STEPS.map(
  (s) => `${s.num}. ${s.title}\n${s.prompt}`
).join("\n\n");

export const BEFORE_YOU_START = [
  "Claude or ChatGPT for the story, the script and every prompt in this guide.",
  "An image tool to create your characters and scenes: ChatGPT (GPT Image 2) or Gemini (Nano Banana 2).",
  "An AI video tool that does sound, so your characters can talk: Veo 3.1, Gemini Omni Flash, Kling 3.0 or Seedance. Pick by budget, see the section after step 6.",
  "CapCut (free) to put the clips together.",
  "One weekend. Episode one can be done in a day once you know the steps.",
] as const;

export type BudgetTier = {
  level: string;
  tools: string;
  detail: string;
};

export const BUDGET_TIERS: BudgetTier[] = [
  {
    level: "Small budget",
    tools: "Veo 3.1 or Gemini Omni Flash",
    detail:
      "Both live inside the Gemini app and Google Flow, from the Google AI Plus plan up. The cheapest way to get talking characters with sound.",
  },
  {
    level: "Some budget",
    tools: "Kling 3.0",
    detail:
      "Free credits every day to test your scenes, then a paid plan when you're making full episodes. Strong lip sync and voices.",
  },
  {
    level: "Big budget",
    tools: "Seedance 2.0 or Seedance 2.5",
    detail:
      "The most cinematic movement and the best for longer, multi-shot scenes. It costs the most, so use it once your story is locked.",
  },
];
