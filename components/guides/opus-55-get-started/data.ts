export const SLUG = "get-started-building-with-opus-5-5";

export const UNIVERSITY_URL = "https://academy.attentionfactory.io";
export const WEEKENDS_URL = "https://weekendsofai.com";

export type Idea = {
  id: string;
  num: string;
  title: string;
  sell: string;
  body: string[];
  exampleHref?: string;
  exampleLabel?: string;
  exampleBefore?: string;
  exampleAfter?: string;
  extraLinks?: { href: string; label: string }[];
  brief: string;
};

export const IDEAS: Idea[] = [
  {
    id: "edit-videos",
    num: "01",
    title: "Edit videos for creators",
    sell: "A finished YouTube edit, short clips from a long video, or a monthly editing package.",
    body: [
      "Start with one type of creator. Gaming channels are a good example because they publish often and need help turning long recordings into videos people will watch. Pick 10 channels you understand. Watch their recent videos and look for one specific thing you could improve, such as a slow opening or missed moments that would work as Shorts.",
      "Ask a creator for permission to make a sample from their footage. Start with 30 seconds. Give Opus the transcript, the footage it can use, two examples of the creator’s editing style and a clear brief. Use it alongside your editing tools to plan and assemble the cut. Then watch the result yourself, fix the timing and check the audio.",
      "If the creator likes the sample, offer a simple package: one full edit, three short clips, captions and one round of changes. Work out how long that takes you before setting a price.",
    ],
    exampleHref:
      "https://www.reddit.com/r/accelerate/comments/1wqv7iq/claude_opus_55_has_functionally_solved_video/",
    exampleBefore: "A ",
    exampleLabel: "creator shared a finished channel video",
    exampleAfter:
      " they say Opus helped assemble from supplied footage, including clip selection and audio work.",
    brief:
      "Here is the transcript, footage and two videos that show this creator’s style. Find the strongest opening, plan a 30-second sample edit and identify three moments that could become Shorts. Tell me which footage you used.",
  },
  {
    id: "product-launch",
    num: "02",
    title: "Make product launch videos",
    sell: "A short video that shows what an app does and why someone should try it.",
    body: [
      "Look for a small app with a good product but a weak demo. Your first job is to understand the product. Read its website, try it if you can, and identify one problem it solves. Ask the founder for permission to use their logo, screenshots, screen recordings and other brand assets.",
      "Make a 15 to 30-second sample. Open with the problem, show the product solving it and end with one clear action. Check that the video shows the real product and that every claim is accurate. A useful paid package could include the main video, a vertical version for Reels and a short cut for ads.",
    ],
    exampleHref:
      "https://www.reddit.com/r/buildinpublic/comments/1wq0ait/i_couldnt_believe_this_was_real_so_i_had_to_try/",
    exampleBefore: "One ",
    exampleLabel:
      "founder says they gave Opus their product files and press assets",
    exampleAfter:
      " and got a promotional video in about 20 minutes. That shows what’s possible to produce. To turn it into a service, you still need a buyer and a video they’re happy to publish.",
    brief:
      "Using these approved product assets, write a 20-second launch video. Show the customer’s problem, demonstrate the feature that solves it and finish with this call to action. Use real screenshots. Do not invent features.",
  },
  {
    id: "motion-graphics",
    num: "03",
    title: "Create motion graphics or sell asset packs",
    sell: "Custom animated intros, titles and explainers for clients, or reusable graphics that creators can buy and use themselves.",
    body: [
      "For client work, pick an audience you understand. A podcast host might need animated episode titles. A business might need product explainers. Make three samples in one style so a potential buyer can picture them on their own content. When someone enquires, ask where the graphic will appear, how long it should run and which brand assets you may use.",
      "For an asset pack, make a set rather than one animation. You could create matching titles, transitions and captions for gaming creators. Include previews, the correct file formats, instructions and clear terms explaining how buyers may use the files. Test interest in the first few assets before building a large pack.",
    ],
    exampleHref: "https://simonberg.ai/articles/a-showreel-then-a-studio/",
    exampleLabel: "Simon Berg shared his brief and finished 15-second showreel",
    exampleAfter:
      ", which is useful to study when planning your own samples. You can also use the motion graphics prompt I’m sharing alongside this guide.",
    brief:
      "Create three matching motion graphic concepts for [type of creator]. They need an intro, an animated title and a transition. Use these brand colours and references. Give me a short storyboard for each before building them.",
  },
  {
    id: "saas",
    num: "04",
    title: "Build a small SaaS app",
    sell: "Access to a tool that solves one repeated problem.",
    body: [
      "I’ve been using Opus to build my own lip sync tool for videos. That’s the kind of starting point I mean: one job that people already spend time trying to do.",
      "Start by speaking to five potential users. Ask what they do now, what slows them down and what they wish were easier. Choose one part you can build first. For a lip sync app, that could mean uploading a short clip, processing it and downloading the result. Get that working before adding more features.",
      "Let a few people try the first version. Watch where they get stuck. Fix those problems and ask whether they would pay to keep using it. If they would, you can test a subscription, a one-time purchase or credits, depending on how often they need the tool. Make sure you understand your processing costs before setting a price.",
    ],
    exampleHref:
      "https://www.reddit.com/r/claude/comments/1ws09er/opus_55_and_i_built_an_offline_ai_app_for_people/",
    exampleBefore: "The founder of ",
    exampleLabel: "Prelude described improving an iPhone app with Opus 5.5",
    exampleAfter:
      ". The app is free and paid features are planned, so this is an example of building and shipping, not proven revenue.",
    brief:
      "I want to build a small app for [specific user] that does [one task]. Help me define the smallest useful version, the screens it needs and how to test it with five people. Ask me questions before building.",
  },
  {
    id: "game",
    num: "05",
    title: "Build a game",
    sell: "In-game purchases in a game people enjoy playing. You could also sell original game assets or plugins to other creators.",
    body: [
      "Start small. In Roblox Studio, build one clear gameplay loop: what does the player do, what reward do they get and why would they play again? Use Opus to help plan the mechanics, write scripts and solve problems as you build. Then ask people to play without explaining the game to them. Watch where they stop, get confused or want to try again.",
      "Improve the game before adding purchases. If players enjoy it, think about an optional item that fits the experience.",
      "Robux is not automatically cash. Roblox currently requires at least 30,000 earned Robux, plus other conditions, before a creator can apply to exchange it for money through DevEx.",
    ],
    extraLinks: [
      {
        href: "https://create.roblox.com/docs/production/monetization/developer-products",
        label: "Roblox developer products",
      },
      {
        href: "https://create.roblox.com/docs/production/creator-store",
        label: "Creator Store",
      },
      {
        href: "https://en.help.roblox.com/hc/en-us/articles/203314100-Developer-Exchange-DevEx-Overview-How-to-Submit-Requirements",
        label: "DevEx requirements",
      },
    ],
    brief:
      "Help me design a small Roblox game I can prototype this weekend. Give me one simple gameplay loop, the scripts and assets needed for the first version, and five questions to ask people after they play.",
  },
];

export const WEEKEND_PLAN = [
  {
    day: "Friday",
    text: "Pick one of the five ideas and choose who it’s for.",
  },
  {
    day: "Saturday",
    text: "Build one sample. Make it good enough to show someone.",
  },
  {
    day: "Sunday",
    text: "Show it to five people who might use or buy it. Ask what they would change. If it’s a service, offer a small paid project. If it’s an app or game, use their feedback to decide what to build next.",
  },
] as const;
