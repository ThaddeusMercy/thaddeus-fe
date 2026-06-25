export const CLAUDE_TAG_SLUG = "claude-tag-playbook";

export const HERO_META = [
  { label: "Updated", value: "June 2026" },
  { label: "Read", value: "7 min" },
  { label: "For", value: "founders & team leads" },
] as const;

export const PILLARS = [
  {
    px: "A",
    title: "It's multiplayer",
    body: "One Claude per channel that everyone shares. A teammate can pick up exactly where the last person left off — no re-briefing, no duplicate work.",
  },
  {
    px: "B",
    title: "It learns over time",
    body: "Claude remembers relevant context from the channels it's in, so you stop re-explaining the same background every week. With permission it can pull from other channels and data sources too — but never from private channels.",
  },
  {
    px: "C",
    title: "It can take initiative",
    body: "Turn on “ambient” mode and Claude flags things you might need to know, surfaces relevant updates, and follows up on threads that have gone quiet — without being tagged.",
  },
  {
    px: "D",
    title: "It works asynchronously",
    body: "Set a task and walk away. Claude can schedule work for itself and run a project over hours or days. You spend your time delegating instead of doing.",
  },
] as const;

export const SETUP_STEPS = [
  {
    title: "Pair Claude Tag with your Slack workspace",
    body: "Connect Claude to Slack from the admin settings. This is the handshake that lets Claude appear as a member your team can tag.",
    who: "Admin",
  },
  {
    title: "Give Claude access to your tools",
    body: "Decide which tools, data sources, and codebases Claude can reach — and in which channels. This is where you scope its power. Grant the minimum it needs to be useful, nothing more.",
    who: "Admin",
  },
  {
    title: "Set a monthly spend limit",
    body: "Cap token spend for the organisation, and set per-channel limits where it matters. This keeps an autonomous agent from quietly running up cost.",
    who: "Admin",
  },
  {
    title: "Test it in a private channel",
    body: "Before turning it loose on busy channels, confirm it works in a quiet one. Check that permissions, data access, and output all behave the way you expect.",
    who: "Admin",
  },
] as const;

export const PLAYBOOK = [
  {
    role: "Engineering",
    example: "“@Claude, open a PR that adds rate-limiting to the auth endpoint.”",
    rest: " It writes code, raises and reviews pull requests, and helps trace the root cause of tricky bugs. Inside Anthropic, 65% of the product team's code is now created by their internal version of this.",
  },
  {
    role: "Operations & data",
    example:
      "“@Claude, pull last week's signups by channel and flag anything unusual.”",
    rest: " Use it to chase down metrics, run analysis, and turn a thread decision into a finished output while the conversation keeps going.",
  },
  {
    role: "Customer support",
    example: "“@Claude, draft a reply to this ticket using our refund policy.”",
    rest: " It works through support tickets with the context of the channel, so answers stay consistent with how your team actually responds.",
  },
  {
    role: "Founders & leads",
    example:
      "“@Claude, watch this launch channel and summarise blockers each morning.”",
    rest: " With ambient mode on, it becomes a teammate that never logs off — surfacing what stalled and what needs a decision before you even ask.",
  },
] as const;

export const SAFETY_CHECKLIST = [
  {
    lead: "Scope channel by channel.",
    rest: "Grant access per channel, not blanket. A Claude set up for sales keeps its memory and tools separate from one set up for engineering — they don't share data.",
  },
  {
    lead: "Start in a private channel.",
    rest: "Test permissions, data exposure, and cost in a quiet channel before rolling out widely.",
  },
  {
    lead: "Set spend limits.",
    rest: "Cap tokens at the organisation and channel level so autonomous work can't surprise you on cost.",
  },
  {
    lead: "Use the audit log.",
    rest: "Admins can see everything Claude did and who requested each task. Review it, especially early on.",
  },
  {
    lead: "Mind private channels.",
    rest: "Claude won't report from private channels — but be intentional about which channels and systems it can connect to.",
  },
] as const;

export const FAST_FACTS = [
  { k: "Launched", v: "June 23, 2026" },
  { k: "Model", v: "Claude Opus 4.8" },
  { k: "Available on", v: "Enterprise & Team (beta)" },
  { k: "First platform", v: "Slack" },
  { k: "Old app retires", v: "August 3, 2026" },
  { k: "Internal proof", v: "65% of Anthropic's product code" },
] as const;
