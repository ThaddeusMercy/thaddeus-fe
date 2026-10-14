export const SLUG = "ai-tools-for-content-creators";

export const UNIVERSITY_URL =
  "https://academy.attentionfactory.io/ai-university?ref=mercythaddeus";

export const CHECKED_ON = "14 October 2026";

/** Short note shown under every tool's plans */
export const PRICES_NOTE = "US prices, checked Oct 2026.";

const IMG = "/guides/ai-tools-for-content-creators";

type Link = { label: string; href: string };

export type ToolImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
};

export type CreatorTool = {
  id: string;
  num: string;
  name: string;
  /** Short label for the job it does, used in the at-a-glance list */
  job: string;
  image: ToolImage;
  what: string[];
  tryIntro: string;
  /** Click-by-click first steps, for tools you use without a prompt */
  steps?: string[];
  /** Optional line between the steps and the copy block */
  promptIntro?: string;
  promptLabel?: string;
  prompt?: string;
  tip?: string;
  free: string[];
  /** The cheapest paid plan */
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
    job: "Ideas, hooks and captions",
    image: {
      src: `${IMG}/1-chatgpt.webp`,
      width: 1600,
      height: 1025,
      alt: "ChatGPT open in a web browser, with the sidebar on the left and a chat about cooking dinner from what’s in the fridge",
      caption:
        "A chat in ChatGPT. Type what you need in the “Ask anything” box at the bottom.",
    },
    what: [
      "ChatGPT is your thinking partner for content. Use it when you’re stuck on what to post, when you need a hook that stops the scroll, or when you want a first draft of a caption that you can then make your own.",
      "The free plan now runs on GPT-6, so you get OpenAI’s newest model without paying.",
    ],
    tryIntro:
      "Ask for 20 video ideas for your niche, then get 5 hooks for the 3 strongest ones.",
    promptLabel: "Prompt · 20 ideas and hooks",
    prompt:
      "I make content about [your niche] for [who your audience is].\n\nGive me 20 video ideas they would save or share. Mix how-tos, mistakes to avoid, myths and personal stories.\n\nThen pick the 3 strongest ideas and write 5 hooks for each one. Every hook should make someone stop scrolling in the first 3 seconds, stay under 12 words and sound like someone talking to a friend.",
    tip: "Replace the parts in [square brackets] with your own niche and audience. When one idea stands out, reply “give me 10 more like number 4” and keep going from there.",
    free: [
      "Unlimited text chats with GPT-6 (with limits to stop abuse)",
      "Limited uploads, image creation, voice chats and deep research",
    ],
    paid: ["Go: $8 a month, and it may include ads"],
    newLabel: "New in 2026",
    newText:
      "GPT-6 started rolling out on 7 October 2026 and reached Free and Go users from 8 October. It comes with what OpenAI calls Intelligent UI, so answers can include graphics, tappable buttons, forms, charts and interactive experiences.",
    source: {
      label: "OpenAI",
      href: "https://openai.com/index/gpt-6-for-everyone/",
    },
    site: { label: "chatgpt.com", href: "https://chatgpt.com" },
  },
  {
    id: "claude",
    num: "02",
    name: "Claude",
    job: "Scripts, captions and newsletters in your voice",
    image: {
      src: `${IMG}/2-claude.webp`,
      width: 1600,
      height: 903,
      alt: "Claude with a chat on the left and a bike share dashboard it built on the right, showing ride totals, rides per day and rides by hour",
      caption:
        "Claude builds finished work next to your chat. Here it turned one message into a full dashboard.",
    },
    what: [
      "Claude is my favourite for writing. Give it your best posts and it writes scripts, captions and newsletters that sound like you.",
      "It also builds finished pieces next to your chat, like the dashboard in the screenshot, from a single message.",
    ],
    tryIntro:
      "Paste 5 of your best posts, ask Claude to write down your style, then use it for your next Reel script and caption.",
    promptLabel: "Prompt · Script and caption in your voice",
    prompt:
      "Here are 5 of my best-performing posts:\n\n[paste your 5 posts or scripts here]\n\nStudy how I open, how I explain things, the words I use and how I end. Then:\n1. Write a short guide to my writing style that I can reuse.\n2. Use it to write a 60-second Reel script about [your next topic], with the hook in the first line and a clear call to action at the end.\n3. Write the caption for it in the same voice.\nKeep my words and my tone, and don’t make it sound like an ad.",
    tip: "Save the style guide Claude writes in your notes. Paste it at the top of any new chat and Claude starts in your voice straight away.",
    free: [
      "Chat on web, desktop and mobile, search the web, create files and run code",
      "Memory across conversations, and you can connect your apps and tools",
    ],
    paid: ["Pro: $20 a month, or $17 a month if you pay $200 for the year"],
    newLabel: "Worth knowing",
    newText:
      "Claude’s free plan now includes Claude Design, Claude Slides and Claude Docs, so you can make more than chats without paying. Pro adds more usage and Claude Code.",
    source: {
      label: "Claude pricing",
      href: "https://claude.com/pricing",
    },
    site: { label: "claude.ai", href: "https://claude.ai" },
  },
  {
    id: "canva",
    num: "03",
    name: "Canva",
    job: "Carousels, thumbnails and covers",
    image: {
      src: `${IMG}/3-canva.webp`,
      width: 1600,
      height: 900,
      alt: "Canva’s video editor with a clip of a man in a blue beanie, the words “Ready to post” on screen and a timeline of text, video and music tracks below",
      caption:
        "Editing a video in Canva: text, clips and music sit on one timeline, and teammates can edit with you.",
    },
    what: [
      "Canva is where you design carousels, thumbnails and covers, from a template or from a prompt.",
      "It edits video too, with your text, clips and music on one timeline. Everything stays editable, so you can change any text, colour or image before you post.",
    ],
    tryIntro:
      "Ask Canva AI to turn a blog post into a 7-slide Instagram carousel in your brand colours, then tweak each slide.",
    promptLabel: "Prompt · Blog post to carousel",
    prompt:
      "Turn this blog post into a 7-slide Instagram carousel in my brand colours. Slide 1 is a bold hook. Slides 2 to 6 each cover one key point in a few short lines. Slide 7 is a clear call to action. Keep the text short enough to read on a phone.\n\n[paste your blog post or notes here]",
    tip: "Canva AI 2.0, which builds the whole design from your prompt, is listed as a Pro and Business feature. On the free plan, start from a carousel template and paste in slide text from ChatGPT or Claude instead.",
    free: [
      "1.6M+ templates and up to 20 AI uses a month",
      "1 Brand Kit (3 colours only) and 5GB of storage",
    ],
    paid: ["Pro: $18 a month or $144 a year, with a free trial"],
    newLabel: "New in 2026",
    newText:
      "Canva AI 2.0 was announced at Canva Create 2026. You start from an idea, a brief or a sketch, and it builds a design where every element stays layered and editable. Canva lists it as a new feature on Pro and Business.",
    source: {
      label: "Canva Newsroom",
      href: "https://www.canva.com/newsroom/news/canva-create-2026-ai/",
    },
    site: { label: "canva.com", href: "https://www.canva.com" },
  },
  {
    id: "capcut",
    num: "04",
    name: "CapCut",
    job: "Video editing and auto captions",
    image: {
      src: `${IMG}/4-capcut.webp`,
      width: 1600,
      height: 876,
      alt: "CapCut’s desktop editor creating auto captions for a talking-head video, with the caption list on the right and caption clips on the timeline",
      caption:
        "Auto captions in CapCut: it listens to your video and writes the captions, which you can edit line by line.",
    },
    what: [
      "CapCut is a video editor for your phone and your laptop. It writes captions from what you say, removes backgrounds and comes with ready-made templates.",
      "Use it to tidy up talking-head clips, add captions and music, and export them ready for Reels and TikTok.",
    ],
    tryIntro:
      "Turn on auto captions for your next talking-head video. In the desktop app, it takes four steps:",
    steps: [
      "Import your video and drag it onto the timeline.",
      "Open Text, then Auto captions.",
      "Click Start to identify, and CapCut writes captions from what you say.",
      "Read through the caption list, fix any wrong words, then pick a caption style.",
    ],
    tip: "Always read your captions before you post. Names, brand names and slang are easy for auto captions to get wrong.",
    free: ["Free templates to start fast", "Basic editing tools"],
    paid: [
      "Pro: $19.99 a month, with 1,200 AI credits a month, all premium templates and 1TB of storage",
      "CapCut shows your final price, with any offers, after you sign in",
    ],
    newLabel: "Worth knowing",
    newText:
      "CapCut also has a Long video to shorts tool. It finds the highlights in a long video, cuts them into short clips, adds captions and turns wide 16:9 footage into vertical 9:16.",
    source: {
      label: "CapCut",
      href: "https://www.capcut.com/tools/long-video-to-shorts",
    },
    site: { label: "capcut.com", href: "https://www.capcut.com" },
  },
  {
    id: "higgsfield",
    num: "05",
    name: "Higgsfield",
    job: "AI video and images",
    image: {
      src: `${IMG}/5-higgsfield.webp`,
      width: 1600,
      height: 1000,
      alt: "Higgsfield’s Create Video screen, with a box for image, video or audio references, a prompt box, settings for model, length, shape and resolution, and a Generate button",
      caption:
        "Making a video in Higgsfield: add a reference, write a prompt, pick a model and length, then generate.",
    },
    what: [
      "Higgsfield makes cinematic AI videos and images from a prompt or a single photo. Use it for product ads, B-roll and scenes you could never film yourself.",
      "It puts many of the newest AI models in one place, so you can try a few on the same idea and keep the best one.",
    ],
    tryIntro:
      "Upload a product photo and turn it into a 5-second B-roll shot for the start of a Reel.",
    promptLabel: "Prompt · Product B-roll",
    prompt:
      "Turn this product photo into a 5-second cinematic B-roll shot for a Reel intro. Slow push-in camera move, soft studio light and shallow depth of field. Keep the product exactly as it looks in the photo, with the same shape, colours, label and text.",
    tip: "Each model and quality setting costs a different number of credits. Test your idea at a lower resolution first, then make the final version once you like it, and check the label and logo before you post.",
    free: ["A free account with limited use, so you can try it before you pay"],
    paid: [
      "Starter: $19 a month, with 270 credits a month",
      "Same price whether you pay monthly or yearly",
    ],
    newLabel: "Worth knowing",
    newText:
      "Higgsfield gives you Seedance, Kling, Google Veo, Sora, Wan and Nano Banana models in one place. You pick the model in the settings next to your prompt, along with the length, shape and quality of your video.",
    source: {
      label: "Higgsfield pricing",
      href: "https://higgsfield.ai/pricing",
    },
    site: { label: "higgsfield.ai", href: "https://higgsfield.ai" },
  },
  {
    id: "manychat",
    num: "06",
    name: "ManyChat",
    job: "Comment-to-DM automation",
    image: {
      src: `${IMG}/6-manychat.webp`,
      width: 1600,
      height: 803,
      alt: "A ManyChat comment automation set to reply when someone comments the word Flower on a specific post, with a phone preview of the DMs it sends",
      caption:
        "A comment-to-DM automation in ManyChat, with a preview of the DMs on the right.",
    },
    what: [
      "ManyChat sends your link straight to someone’s DMs when they comment a word on your post. It replies to every comment for you, so nobody who asked misses out, even while you sleep.",
      "It’s how creators run “comment GUIDE and I’ll send it to you” posts without answering hundreds of messages by hand.",
    ],
    tryIntro: "Set up your first comment-to-DM automation on Instagram:",
    steps: [
      "Connect your Instagram account to ManyChat.",
      "Start a new automation from one of the ready-made templates for replying to comments.",
      "Choose the post or reel, and type the word people should comment, like GUIDE.",
      "Turn on the public reply under their comment, write the DM with your link, then click Go Live.",
    ],
    promptIntro: "Here’s a comment reply and a DM you can copy and edit:",
    promptLabel: "Comment reply and DM · Copy and edit",
    prompt:
      "Public reply under their comment:\nSent! Check your DMs.\n\nDM:\nHey! Here’s the [thing you promised] you asked for: [your link]\n\nSave this message so you can find it again. Got a question? Just reply here.",
    tip: "Pick a word that’s short and easy to spell, and say it in your video and your caption so people know exactly what to comment. The free plan covers 25 people a month, which is enough for a test. Upgrade once a post starts pulling in comments.",
    free: [
      "25 active contacts a month (the people you interact with)",
      "2 channels from Instagram, TikTok, Facebook Messenger or Telegram, with up to 4 live triggers",
      "“Powered by Manychat” appears the first time you message someone",
    ],
    paid: [
      "Essential: $14 a month billed yearly ($168 a year), with 250 active contacts and no ManyChat branding",
      "Essential has a 14-day free trial",
    ],
    newLabel: "Worth knowing",
    newText:
      "ManyChat works on TikTok, Facebook Messenger and Telegram as well as Instagram. Even on the free plan, you can connect any 2 of them.",
    source: {
      label: "ManyChat pricing",
      href: "https://manychat.com/pricing",
    },
    site: { label: "manychat.com", href: "https://manychat.com" },
  },
  {
    id: "metricool",
    num: "07",
    name: "Metricool",
    job: "Scheduling and analytics",
    image: {
      src: `${IMG}/7-metricool.webp`,
      width: 1600,
      height: 1234,
      alt: "Metricool’s Planning calendar for one week, with scheduled Instagram and Facebook posts and a Best times option",
      caption:
        "Metricool’s planner: a week of posts across your apps on one calendar, with your best times to post.",
    },
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
  "Want shots you can’t film yourself? Add Higgsfield for AI video and images.",
  "Getting comments asking for your link? Add ManyChat so every one of them gets a DM.",
  "Posting on more than one app? Add Metricool so everything goes out from one calendar.",
];

export const ALL_PROMPTS = CREATOR_TOOLS.filter((tool) => tool.prompt)
  .map((tool) => `${tool.num}. ${tool.name}\n${tool.prompt}`)
  .join("\n\n");
