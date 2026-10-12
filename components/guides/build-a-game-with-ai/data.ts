export const SLUG = "build-a-game-with-ai";

export const UNIVERSITY_URL =
  "https://academy.attentionfactory.io/ai-university?ref=mercythaddeus";

const IMG = "/guides/build-a-game-with-ai";

export type ViralGame = {
  name: string;
  stat: string;
  img: string;
  alt: string;
};

export const VIRAL_GAMES: ViralGame[] = [
  {
    name: "Lagos Life",
    stat: "10M+ players in 11 days",
    img: `${IMG}/lagos-life.jpg`,
    alt: "The launch post for Lagos Life, a life simulation game set in Lagos",
  },
  {
    name: "Surviving NG",
    stat: "30K players by day one",
    img: `${IMG}/surviving-ng.jpg`,
    alt: "The launch post for Surviving NG, an open-world game on Lagos streets",
  },
  {
    name: "Lagos Run",
    stat: "140K+ players in its first week",
    img: `${IMG}/lagos-run.jpg`,
    alt: "The launch post for a game where you drive a danfo through Lagos",
  },
  {
    name: "Monkey Post",
    stat: "17,700+ players by day two",
    img: `${IMG}/monkey-post.jpg`,
    alt: "The launch post for Monkey Post, a Nigerian street football game",
  },
];

export type GameStep = {
  id: string;
  num: string;
  title: string;
  blurb: string[];
  prompt: string;
  tip: string;
};

export const GAME_STEPS: GameStep[] = [
  {
    id: "idea",
    num: "01",
    title: "Pick an idea people know",
    blurb: [
      "None of these games are about dragons or space. They're about traffic, street football, money and a normal day in a city people live in. People shared them because they saw their own lives in them.",
      "So start with something your people would instantly recognise. If you're stuck, let AI throw ideas at you.",
    ],
    prompt:
      "I want to build a simple browser game that people in [your city or country] would instantly recognise. Give me 10 game ideas based on everyday life there: traffic, markets, school, work, family, money. For each one, give me a one-line pitch, how you win, how you lose, and why people would want to share it. Keep every idea simple enough to build as one HTML file.",
    tip: "Pick the idea that makes you laugh or say \"this is so true\". That's the one people will send to their friends.",
  },
  {
    id: "interview",
    num: "02",
    title: "Let AI interview you",
    blurb: [
      "Don't jump straight into building. Most first games fall apart because the idea was never clear, so let the AI ask you the questions a game designer would ask.",
      "At the end you get a one-page game plan. That plan is what makes the next step work.",
    ],
    prompt:
      "I want to build a browser game. Here's my idea: [describe your game in 2 or 3 sentences]. Before you write any code, interview me about it. Ask me one question at a time about the player, the controls, how you win and lose, the levels, the look and the feel. Wait for my answer before you ask the next question. When you have enough, write a one-page game plan I could hand to a developer.",
    tip: "Answer like you're explaining it to a friend. You don't need any technical words. If you don't know an answer, say \"you decide\" and let it suggest something.",
  },
  {
    id: "build",
    num: "03",
    title: "Build it with one prompt",
    blurb: [
      "Open a new chat in Claude (Opus 5.5 with Extra high effort) or ChatGPT (GPT-6 Astra). Paste the prompt below with your game plan at the end.",
      "Asking for one HTML file keeps everything in a single file you can open on any laptop and put online later with no setup.",
    ],
    prompt:
      "Build this game as one complete HTML file, with all the HTML, CSS and JavaScript inside it. It must run when I open the file in a browser, with nothing to install or download. Make it work on a phone with touch controls and on a laptop with the keyboard. Give me the full file in one go, with no placeholders and nothing left for me to fill in. Here's the game plan: [paste your plan from step 2]",
    tip: "Claude shows the game right inside the chat, so you can play it straight away. In ChatGPT, ask for it as a downloadable file. Save the file as index.html, you'll need that name in step 6.",
  },
  {
    id: "fix",
    num: "04",
    title: "Play it and fix what breaks",
    blurb: [
      "Open the file in your browser and play it like a stranger would. Something will break or feel wrong, and that's normal. Every game you've ever played went through this.",
      "Go back to the same chat and paste each problem in, one at a time.",
    ],
    prompt:
      "I played the game. Here's what went wrong: [describe exactly what happened, for example \"when I tap jump twice, the player flies off the screen\"]. What I expected: [what should have happened]. Fix only this problem, don't change anything else, and give me the full updated file.",
    tip: "One problem per message. If a fix breaks something that worked before, say \"this worked before your last change, fix it without breaking [the thing]\". If the screen goes blank, just say that.",
  },
  {
    id: "level-up",
    num: "05",
    title: "Level it up",
    blurb: [
      "Once it works, make it feel finished. Ask for sound effects, a start screen, a high score and better graphics, one upgrade at a time.",
      "Add a share screen at the end of each round too. That's how a game spreads: people post their score and dare their friends to beat it.",
    ],
    prompt:
      "The game works. Now add this one upgrade: [pick one: sound effects / a start screen with the game's name / a high score that's saved / better graphics / levels that get harder / a game-over screen with a \"share my score\" button]. Keep everything else working exactly the same and give me the full updated file.",
    tip: "Play the game after every upgrade. If something breaks, fix it before you ask for the next one.",
  },
  {
    id: "online",
    num: "06",
    title: "Put it online",
    blurb: [
      "Right now the game only lives on your laptop. Hosting puts it on the internet like any normal website, with a link anyone can open on their phone. Cloudflare, Vercel and Netlify all host simple sites like this for free.",
      "Put your index.html file inside a folder, sign up on one of them and deploy that folder. You get a live link in minutes.",
    ],
    prompt:
      "I have a browser game in one file called index.html, inside a folder on my laptop. Walk me through putting it online for free on [Cloudflare / Vercel / Netlify] so I get a link anyone can open. I've never done this before, so tell me exactly what to click, one step at a time, and wait for me to say \"done\" before you give me the next step.",
    tip: "The project name becomes part of your link, so use the game's name. When you fix something later, upload the new version to the same project, not a new one, so your link stays the same.",
  },
  {
    id: "share",
    num: "07",
    title: "Post it like they did",
    blurb: [
      "Look at how the games above were announced. One plain line, a link and a picture or a short clip of the game. No long thread, no marketing words.",
      "Then watch what your first players do. Whatever confuses them is the next thing you fix.",
    ],
    prompt:
      "Write 5 short launch posts for my game. The game: [one-line pitch]. The link: [your link]. Start every post with \"I built a game where you...\". Keep each one under 40 words, casual, and end with a challenge like \"my high score is [score], beat it\".",
    tip: "Post a 10 to 15 second screen recording of you playing. It does more work than any caption. Then reply to every early player, because they're the ones who spread it.",
  },
];

export const ALL_PROMPTS = GAME_STEPS.map(
  (s) => `${s.num}. ${s.title}\n${s.prompt}`
).join("\n\n");

export type HostOption = {
  name: string;
  steps: string[];
};

export const HOST_OPTIONS: HostOption[] = [
  {
    name: "Cloudflare",
    steps: [
      "Sign up free at cloudflare.com and open Workers & Pages.",
      "Create a new Pages project and pick the option to upload your files.",
      "Name the project, upload your game folder and deploy. Your link ends in .pages.dev.",
    ],
  },
  {
    name: "Vercel",
    steps: [
      "Sign up free at vercel.com.",
      "Go to vercel.com/drop and upload your game folder.",
      "Name the project and click Deploy. Your link ends in .vercel.app.",
    ],
  },
  {
    name: "Netlify",
    steps: [
      "Sign up free at netlify.com.",
      "Go to app.netlify.com/drop and upload your game folder.",
      "Your link ends in .netlify.app. You can rename it in the project settings.",
    ],
  },
];

export const BEFORE_YOU_START = [
  "Claude or ChatGPT. The best results come from Opus 5.5 with Extra high effort in Claude, or GPT-6 Astra in ChatGPT. The free versions can build simple games too, they just need more fixing.",
  "A laptop for the building and uploading part. You can play and test on your phone.",
  "One or two evenings. A simple game can be online the same day, and the polish comes after.",
] as const;
