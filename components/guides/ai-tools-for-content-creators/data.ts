export const SLUG = "ai-tools-for-content-creators";

export const UNIVERSITY_URL =
  "https://academy.attentionfactory.io/ai-university?ref=mercythaddeus";

export const CHECKED_ON = "14 October 2026";

type Link = { label: string; href: string };

export type CreatorTool = {
  id: string;
  num: string;
  name: string;
  /** Short label for the job it does, used in the at-a-glance list */
  job: string;
  what: string[];
  tryIntro: string;
  /** Optional line between the example and the copy block */
  promptIntro?: string;
  promptLabel: string;
  prompt: string;
  tip?: string;
  free: string[];
  paid: string[];
  newLabel: string;
  newText: string;
  source: Link;
  site: Link;
  related?: Link;
};

export const CREATOR_TOOLS: CreatorTool[] = [
  {
    id: "chatgpt",
    num: "01",
    name: "ChatGPT",
    job: "Ideas, hooks, scripts and captions",
    what: [
      "ChatGPT is your writing partner. Use it when you’re stuck on what to post, when you need a stronger hook, or when you want a first draft of a script or caption that you can then make your own.",
      "It works best when you show it your own past content, because then it learns how you sound and writes like you.",
    ],
    tryIntro:
      "Paste your 5 best-performing Reel scripts and ask for 10 new hooks plus a 60-second script in the same voice.",
    promptLabel: "Prompt · Hooks and a script in your voice",
    prompt:
      "Here are 5 of my best-performing Reel scripts:\n\n[paste your 5 scripts here]\n\nStudy how I open, how I explain things and how I end. Then:\n1. Write 10 new hooks about [your next topic] in the same voice. Each one should make someone stop scrolling in the first 3 seconds.\n2. Pick the strongest hook and write a 60-second Reel script with it, in my voice, with a clear call to action at the end.\nKeep my words and my tone, and don't make it sound like an ad.",
    tip: "Replace the parts in [square brackets] with your own scripts and topic. If a hook sounds too stiff, reply “make it sound more like how I talk” and it will rewrite it.",
    free: [
      "Unlimited text chats with GPT-6 (with limits to stop abuse)",
      "Limited file uploads, image creation, voice and deep research",
    ],
    paid: [
      "Go: $8 a month, and it may show ads",
      "Plus: $20 a month",
    ],
    newLabel: "New in 2026",
    newText:
      "GPT-6 rolled out to free users on 7 and 8 October 2026 with what OpenAI calls Intelligent UI. Answers can now include graphics, tappable buttons, forms, charts and small interactive tools.",
    source: {
      label: "OpenAI",
      href: "https://openai.com/index/gpt-6-for-everyone/",
    },
    site: { label: "chatgpt.com", href: "https://chatgpt.com" },
  },
  {
    id: "nano-banana",
    num: "02",
    name: "Nano Banana (in the Gemini app)",
    job: "Images, thumbnails and covers",
    what: [
      "Nano Banana is Google’s image model, and you use it inside the Gemini app. It makes and edits images from a prompt or from your own photos, which makes it great for thumbnails, cover images and graphics.",
      "It can combine several photos into one, keep the same face across images and write text you can actually read on the image.",
    ],
    tryIntro:
      "Upload a selfie and a product photo, ask for a YouTube thumbnail with a bold headline, then reply “make the text yellow.” You can keep changing one thing at a time without starting over.",
    promptLabel: "Prompt · YouTube thumbnail",
    prompt:
      "Use my selfie and this product photo to make a YouTube thumbnail in a wide 16:9 format. Put me on one side holding the product with an excited expression, and put a bold headline on the other side that says \"[your headline]\". Use a bright, high-contrast background and big text that is easy to read on a phone. Keep my face exactly as it is in my photo.",
    tip: "Upload both photos in the same message as the prompt. When you like the result, ask for small changes one at a time, like the text colour or the background.",
    free: [
      "Nano Banana 2 in the Gemini app: combine photos, edit, keep characters consistent, readable text, up to 2K",
      "Limits apply, and images carry a visible watermark plus Google’s invisible SynthID watermark",
    ],
    paid: ["Google AI Plus: from $4.99 a month, and it unlocks Nano Banana 2.1"],
    newLabel: "New in 2026",
    newText:
      "Nano Banana 2.1 (model card published 6 October 2026) adds mask-based editing, so only the area you select changes. It also writes clearer text, keeps up to 5 characters and 14 objects consistent, and upscales images to 2K or 4K.",
    source: {
      label: "Google DeepMind",
      href: "https://deepmind.google/models/model-cards/nano-banana-2-1/",
    },
    site: { label: "gemini.google.com", href: "https://gemini.google.com" },
  },
  {
    id: "google-flow",
    num: "03",
    name: "Google Flow",
    job: "AI video clips with sound",
    what: [
      "Flow is Google’s AI video tool. It turns text or images into short video clips with sound, and lets you string clips together into scenes.",
      "Use it for B-roll, intros, product shots and any shot you can’t film yourself.",
    ],
    tryIntro:
      "Turn a product photo into an 8-second cinematic B-roll shot for the start of a Reel.",
    promptLabel: "Prompt · Product B-roll",
    prompt:
      "Turn this product photo into an 8-second cinematic B-roll shot for a Reel intro. Slow push-in camera move, soft studio light, shallow depth of field and gentle ambient sound. Keep the product exactly as it looks in the photo, with the same shape, colours, label and text.",
    tip: "Use a clear, well-lit photo of the product on a plain background, and check the label and logo in the finished clip before you post it.",
    free: [
      "50 Flow credits a day, no subscription needed. Unused credits don’t roll over",
      "A Veo 3.1 Lite clip costs 10 credits, Fast costs 20 and Quality costs 100",
      "Free video generation may be unavailable around 2 to 5 PM UTC (3 to 6 PM in Lagos), so plan your clips outside those hours",
      "You must be 18 or older. It’s available in about 150 countries, including Nigeria",
    ],
    paid: [
      "Google AI Plus: from $4.99 a month, and it adds 200 credits a month plus Gemini Omni Flash",
    ],
    newLabel: "New in 2026",
    newText:
      "Gemini Omni 1.1 Flash arrived in Flow on 27 August 2026 for Google AI Plus and higher plans. You can set a start and end frame, make cheap 360p drafts and upscale the ones you like to 1080p or 4K, and extend a scene in 10-second steps up to 40 seconds.",
    source: {
      label: "Google",
      href: "https://blog.google/innovation-and-ai/models-and-research/google-labs/new-creative-controls-google-flow/",
    },
    site: { label: "flow.google.com", href: "https://flow.google.com" },
  },
  {
    id: "opusclip",
    num: "04",
    name: "OpusClip",
    job: "Long videos into short clips",
    what: [
      "OpusClip takes a long video, like a podcast, a livestream or a YouTube video, finds the best moments and cuts them into short vertical clips with captions.",
      "One long recording can become a whole week of short posts.",
    ],
    tryIntro:
      "Upload a 20-minute podcast and get 10 vertical clips with animated captions, ranked by Virality Score (OpusClip’s own score for each clip). A 20-minute video uses 20 of your 60 free credits.",
    promptIntro:
      "In the OpusClip app, you just upload the video and it picks the moments for you. If you use Claude, OpusClip’s official connector lets you do the same thing by asking. Connect OpusClip in Claude, then paste this:",
    promptLabel: "Prompt · Clip a podcast (in Claude)",
    prompt:
      "Using OpusClip, turn this podcast episode into 10 vertical clips with animated captions: [your video]. Pick the moments with the highest Virality Score, and give me a one-line caption idea for each clip.",
    tip: "Videos where you speak clearly and make one point at a time tend to give the strongest clips. Check each clip before you post, and keep the ones that make sense on their own.",
    free: [
      "60 credits a month. 1 credit is 1 minute of video you upload",
      "Clips up to 1080p, with a watermark",
      "No editing on the free plan, and you must export your clips within 3 days",
    ],
    paid: [
      "Starter: $15 a month for 150 credits and no watermark",
      "Pro: $29 a month, or $14.50 a month billed yearly",
      "Starter and Pro both have a free trial",
    ],
    newLabel: "New in 2026",
    newText:
      "OpusClip launched an official Claude connector on 11 September 2026, so you can clip your videos just by prompting Claude.",
    source: {
      label: "OpusClip changelog",
      href: "https://opusclip.canny.io/changelog",
    },
    site: { label: "opus.pro", href: "https://www.opus.pro" },
  },
  {
    id: "elevenlabs",
    num: "05",
    name: "ElevenLabs",
    job: "Voiceovers, voice cloning and dubbing",
    what: [
      "ElevenLabs turns text into natural-sounding voiceovers. It can also clone your voice and dub your videos into other languages.",
      "Use it when you want a voiceover without recording one, or when you want to reach people who speak another language.",
    ],
    tryIntro:
      "Paste your Reel script to get a voiceover, or dub an English tutorial into French and Spanish in your own voice. Words in square brackets are audio tags: they tell the voice how to say a line, and they aren’t read out.",
    promptLabel: "Voiceover script with audio tags",
    prompt:
      "[excited, happy] Okay, I just found three AI tools that save me hours every week. [laughs] And two of them are free.\n\nThe first one writes my scripts. The second one makes my thumbnails. And the third one posts everything for me while I sleep.\n\nStay till the end, because number three is the one nobody talks about.",
    tip: "Swap the words for your own script and keep the tags in square brackets where you want a change in tone. Audio tags work with the Eleven v4 and v4 Turbo models. Voice cloning and Dubbing Studio come with the Starter plan.",
    free: [
      "10,000 credits a month, about 10 minutes of text to speech",
      "No commercial use, and you must credit elevenlabs.io",
    ],
    paid: [
      "Starter: $6 a month, with a commercial licence, instant voice cloning and Dubbing Studio",
      "Creator: $22 a month",
    ],
    newLabel: "New in 2026",
    newText:
      "Eleven v4 and v4 Turbo launched on 28 September 2026. They support more than 90 languages and let you stack audio tags like [laughs] in your script. On paid plans, you can make an instant clone of your voice from 10 seconds of audio.",
    source: {
      label: "ElevenLabs",
      href: "https://elevenlabs.io/blog/eleven-v4",
    },
    site: { label: "elevenlabs.io", href: "https://elevenlabs.io" },
  },
  {
    id: "canva",
    num: "06",
    name: "Canva",
    job: "Carousels, covers and posts",
    what: [
      "Canva is where you design carousels, covers and posts, from a template or from a prompt.",
      "Everything it makes stays editable, so you can change any text, colour or image yourself before you post.",
    ],
    tryIntro:
      "Ask Canva AI to turn a blog post into a 7-slide Instagram carousel in your brand colours, then tweak each slide.",
    promptLabel: "Prompt · Blog post to carousel",
    prompt:
      "Turn this blog post into a 7-slide Instagram carousel in my brand colours. Slide 1 is a bold hook. Slides 2 to 6 each cover one key point in a few short lines. Slide 7 is a clear call to action. Keep the text short enough to read on a phone.\n\n[paste your blog post or notes here]",
    tip: "Set up your Brand Kit first (your colours, fonts and logo), so every design starts on-brand. The free plan includes one.",
    free: [
      "Templates, plus up to 20 AI uses a month",
      "1 Brand Kit and 5GB of storage",
    ],
    paid: [
      "Pro: $18 a month or $144 a year, and it includes social scheduling",
      "Pro has a free trial",
    ],
    newLabel: "New in 2026",
    newText:
      "Canva AI 2.0 was announced at Canva Create in April 2026. You describe a design and get one that stays fully editable and on-brand (Pro and up). Magic Layers, in beta since March 2026, turns a flat image into separate layers you can edit.",
    source: {
      label: "Canva Newsroom",
      href: "https://www.canva.com/newsroom/news/canva-create-2026-ai/",
    },
    site: { label: "canva.com", href: "https://www.canva.com" },
  },
  {
    id: "metricool",
    num: "07",
    name: "Metricool",
    job: "Scheduling and analytics",
    what: [
      "Metricool plans, schedules and tracks your posts across all your social accounts from one calendar.",
      "You schedule everything once, it posts for you, and you see what worked in one place instead of checking every app.",
    ],
    tryIntro:
      "Schedule a week of Reels, carousels and TikToks at your best times, then see which posts got the most reach.",
    promptIntro:
      "You can do all of this inside Metricool. Or connect Metricool to Claude through its MCP and ask Claude to do it for you:",
    promptLabel: "Prompt · Plan your week (in Claude)",
    prompt:
      "Using Metricool, find my best times to post on Instagram and TikTok this week. Schedule these posts at those times:\n[list your posts, with the caption and the day you want each one to go out]\nThen look at my last 30 days and tell me which 3 posts got the most reach and what they have in common.",
    tip: "Start with the analytics question on its own. Seeing which posts did best before you plan the week tells you what to make more of.",
    free: [
      "1 brand, with every network except LinkedIn and X",
      "20 scheduled posts a month and 30 days of analytics",
      "The AI assistant and the Metricool MCP are included",
    ],
    paid: [
      "Starter: from $20 a month billed yearly, or $25 month to month (before VAT)",
    ],
    newLabel: "Worth knowing",
    newText:
      "Metricool has an MCP, so you can connect it to Claude and ask Claude to schedule a week of posts or pull your analytics. It’s included on the free plan.",
    source: {
      label: "Metricool",
      href: "https://metricool.com/how-to-use-metricool-mcp-with-claude/",
    },
    site: { label: "metricool.com", href: "https://metricool.com" },
    related: {
      label: "How to connect Claude to Metricool",
      href: "/guide/connect-claude-to-socials",
    },
  },
];

export const WHERE_NEXT = [
  "Recording long videos or podcasts? Add OpusClip to turn them into short clips.",
  "Want voiceovers without recording, or posts in another language? Add ElevenLabs.",
  "Posting on more than one app? Add Metricool so everything goes out from one calendar.",
];

export const ALL_PROMPTS = CREATOR_TOOLS.map(
  (tool) => `${tool.num}. ${tool.name}\n${tool.prompt}`,
).join("\n\n");
