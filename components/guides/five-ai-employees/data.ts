export const SLUG = "five-ai-employees";

export const ROSTER = [
  { id: "marketer", label: "01 Marketer" },
  { id: "accountant", label: "02 Accountant" },
  { id: "content", label: "03 Content lead" },
  { id: "counsel", label: "04 Counsel" },
  { id: "designer", label: "05 Designer" },
] as const;

export const MARKETER_PLUGIN = `/plugin marketplace add coreyhaines31/marketingskills
/plugin install marketing-skills@marketingskills`;

export const MARKETER_NPX = `npx skills add coreyhaines31/marketingskills`;

export const MARKETER_TASK = `Use the copywriting skill. Rewrite the hero section of my
sales page for [offer], priced at [price], for [customer].
Give me four versions with different angles, then tell me
which one you would test first and why.`;

export const FINANCE_PLUGIN = `/plugin marketplace add anthropics/knowledge-work-plugins
/plugin install finance@knowledge-work-plugins`;

export const FINANCE_TASK = `Here is my income and expenses for last month as a CSV.
Run reconciliation against the attached bank statement,
list every item that does not match, and flag anything
you think I have miscategorised.`;

export const SOCIAL_PLUGIN = `/plugin marketplace add charlie947/social-media-skills
/plugin install social-media-skills@social-media-skills`;

export const SOCIAL_TASK = `Run voice-builder on me first. I will answer everything.
Then take my last five captions and my three best performing
videos, and build me a content matrix for the next 30 days
across Instagram and LinkedIn.`;

export const LEGAL_PLUGIN = `/plugin install legal@knowledge-work-plugins`;

export const LEGAL_TASK = `Here is a contract a client sent me. I am based in Nigeria.
Run review-contract. Tell me what is unusual, what exposes me,
what I should ask them to change, and which parts you think
need a real lawyer before I sign.`;

export const DESIGN_ANTHROPIC = `/plugin marketplace add anthropics/skills
/plugin install example-skills@anthropic-agent-skills`;

export const DESIGN_UIUX = `/plugin marketplace add nextlevelbuilder/ui-ux-pro-max-skill
/plugin install ui-ux-pro-max@ui-ux-pro-max-skill`;

export const DESIGN_TASTE = `npx skills add https://github.com/Leonxlnx/taste-skill`;

export const ONBOARD_PROMPT = `Onboard this skill to my business.

Work on a copy. Leave the original alone.

Interview me first. Ask about:
1. What my business does
2. What I sell and what it costs
3. Who buys it
4. How I sound
5. The tools I already use
6. The process I follow today
7. What information this skill will receive
8. The format I want the finished work in
9. What I approve before it leaves
10. What this skill must never do

Then rewrite it using my words, my rules, my templates and my
examples. Keep the frontmatter exactly as it is.

Add a final check that confirms the facts are right, the voice
is mine, nothing was invented, the format matches, and anything
needing a professional is marked clearly.

Show me every change before you save it.`;

export const BUSINESS_CONTEXT = `Business name:
What we do:
What we sell and what it costs:
Who buys it:
How we sound:
Words we use:
Words we never use:
Tools and platforms:
How we usually work:
What needs my approval:
Legal and compliance limits:
Formats we deliver in:
Our best work so far:`;

export const WEEK = [
  {
    day: "Day 1",
    body: "Add the Anthropic marketplace and install finance and legal. Two commands, seventeen skills, both official.",
  },
  {
    day: "Day 2",
    body: "Write your business-context.md. This is the day that makes the other four days work.",
  },
  {
    day: "Day 3",
    body: "Install the marketing pack and fill in the product-marketing skill before you use anything else in it.",
  },
  {
    day: "Day 4",
    body: "Install the social pack and run voice-builder. Answer the questions properly, it is reading you.",
  },
  {
    day: "Day 5",
    body: "Copy one skill into your own folder and onboard it with the prompt above. Pick copywriting. A borrowed voice shows up there faster than anywhere else.",
  },
] as const;
