export const HUMANIZE_SETUP_SLUG = "humanize-setup";

export const WIKI_URL =
  "https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing";

export const CLAUDE_STEPS = [
  {
    title: "Download the zip I sent you",
    body: "Leave it zipped. Claude wants the zip file, not the unzipped folder.",
  },
  {
    title: "Open your settings",
    body: "On claude.ai, click your profile picture in the bottom left, then Settings. On Team or Enterprise, an owner has to switch on Skills and code execution in the organization settings before this shows up.",
  },
  {
    title: "Go to Customize, then Skills",
    body: "You will see the built in ones sitting there already, things like Excel and PowerPoint.",
  },
  {
    title: "Upload the zip",
    body: "Click upload skill, pick the file, and give it a few seconds. It lands in the list with a toggle next to it. Leave the toggle on.",
  },
  {
    title: "Write something",
    body: 'Claude picks it up on its own when you ask for an email, a caption, a post, anything human facing. If you want to force it, say "use the humanize skill" in the message.',
  },
] as const;

export const BUILD_PROMPT = `I'm pasting Wikipedia's "Signs of AI writing" guide below. Turn it into a
skill called humanize.

The skill should tell you to never write with any of the patterns in this
guide, in anything I might publish or send: emails, posts, captions,
articles, scripts, docs. It should run on its own whenever you write prose
for me, not only when I ask for it.

Split it into two parts. The mechanical bans that need no judgement (em
dashes, curly quotes, emojis as decoration, bolded labels on bullets, title
case headings, chatbot filler). And the judgement calls (inflated
vocabulary, puffery about significance, vague sourcing, the rule of three,
"it's not X it's Y", false ranges).

Then add a section on what to do instead, so the writing still has a voice:
vary sentence length, take a position, use specific names and numbers, use
plain words.

End it with a verification pass where you reread the draft and fix whatever
still reads as machine written before you show it to me.

Give me the SKILL.md and a zip I can upload.

Here is the guide:
[paste the whole Wikipedia page here]`;

export const CUSTOM_INSTRUCTIONS = `When you write anything I might publish or send (emails, posts, captions,
articles, scripts), do not produce text that reads as machine written.

No em dashes, use commas, periods, colons or parentheses. Straight quotes
only. No emojis as decoration. No bolded key terms, and no bullet lists
where each item opens with a bolded label and a colon. Sentence case
headings. Don't chop a short piece into many tiny sections.

Don't reach for: delve, intricate, tapestry, testament, underscore,
pivotal, crucial, vital, landscape, realm, foster, enhance, showcase,
garner, seamless, robust, leverage, boasts, renowned, groundbreaking,
cutting-edge, unlock, elevate, empower, resonate, "at its core", "in
today's fast-paced world".

Don't tell me something marks a pivotal moment, reflects a broader trend,
or plays a key role. Say what it is and what it does.

No weasel sourcing like "experts say", "studies show", "many believe".
Name the source or cut the claim.

No "it's not X, it's Y". No "not only, but also". No forced triplets of
adjectives. No "from X to Y" when those aren't real endpoints.

No "Great question", "I hope this helps", "Let me know if". No "Let's dive
in" or "Here's what you need to know", just write the thing.

Cut filler: "in order to" becomes "to", "due to the fact that" becomes
"because". Don't stack hedges. Don't end on a motivational line.

Instead: vary your sentence length, take a position, use specific names and
numbers, write in first person where it fits, and use plain words.

Before you show me anything, reread it and fix whatever still sounds like
AI wrote it.`;

export const CHECK_ITEMS = [
  "Any em dashes at all. There should be none.",
  "Bullets that start with a bolded word and a colon.",
  "A closing line telling you the future is bright.",
  "The words seamless, robust, or landscape.",
] as const;
