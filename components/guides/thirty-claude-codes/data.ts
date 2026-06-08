export const THIRTY_CLAUDE_CODES_SLUG = "thirty-claude-codes";

export type ClaudeCode = {
  num: string;
  name: string;
  does: string;
  example: string;
  bestFor: string;
};

export type ClaudeCodeSection = {
  id: string;
  title: string;
  blurb: string;
  codes: ClaudeCode[];
};

export const SECTIONS: ClaudeCodeSection[] = [
  {
    id: "01",
    title: "Get the truth",
    blurb:
      "When you need Claude to stop being polite and start being useful.",
    codes: [
      {
        num: "01",
        name: "Truth mode",
        does:
          "Claude stops trying to please you and tells you what it actually thinks, even when it stings.",
        example:
          "Truth mode. Here's my business plan, is it any good or am I kidding myself?",
        bestFor: "Gut-checking ideas you're attached to",
      },
      {
        num: "02",
        name: "/honest",
        does:
          "Drops the diplomatic hedging and gives you the blunt version it would say with nothing to lose.",
        example: "/honest. Is this resume getting me interviews or quietly killing them?",
        bestFor: "Feedback you suspect people are softening",
      },
      {
        num: "03",
        name: "/confess",
        does:
          "Before you trust an answer, Claude rates its own confidence and flags exactly where it guessed.",
        example: "Answer this, then confess how sure you are and where you're unsure.",
        bestFor: "Research and facts you plan to act on",
      },
      {
        num: "04",
        name: "Red team",
        does:
          "Claude attacks your plan from every angle a sharp critic would, so you find the holes before they find you.",
        example: "Red team this launch plan. Tear it apart.",
        bestFor: "Pitches, plans, and big decisions",
      },
      {
        num: "05",
        name: "Steelman",
        does:
          "Claude builds the strongest version of the argument against you, which is the fastest way to find where your logic is soft.",
        example: "Steelman the other side of: remote work beats the office.",
        bestFor: "Testing a belief you hold strongly",
      },
      {
        num: "06",
        name: "Pre-mortem",
        does:
          "Claude pretends your plan already failed, then works backwards to tell you why, while you can still fix it.",
        example: "Pre-mortem this. Assume it flopped in six months and tell me why.",
        bestFor: "Launches, partnerships, anything risky",
      },
    ],
  },
  {
    id: "02",
    title: "Think sharper",
    blurb: "Codes that upgrade how Claude reasons through a problem with you.",
    codes: [
      {
        num: "07",
        name: "First principles",
        does:
          "Claude throws out the recycled advice and rebuilds the answer from what is actually true.",
        example:
          "Break this down from first principles. How do I actually grow an audience?",
        bestFor: "When every answer online sounds the same",
      },
      {
        num: "08",
        name: "Ultrathink",
        does:
          "Add it to the end and Claude spends much longer reasoning before it answers. Taps Claude's extended thinking.",
        example: "Should I take the offer or stay? Ultrathink.",
        bestFor: "Complex tradeoffs with no obvious answer",
      },
      {
        num: "09",
        name: "Step back",
        does:
          "Before answering, Claude tells you the better question you should be asking instead.",
        example: "Step back first. What should I really be asking before I pick a niche?",
        bestFor: "When you're stuck on the wrong problem",
      },
      {
        num: "10",
        name: "Assumptions",
        does:
          "Claude lists every hidden assumption baked into your question before it responds.",
        example: "List the assumptions in my plan before you answer.",
        bestFor: "Spotting the shaky ground under a decision",
      },
      {
        num: "11",
        name: "OODA",
        does:
          "Claude runs your decision through the Observe, Orient, Decide, Act loop and tells you the move.",
        example: "Run my pricing decision through OODA.",
        bestFor: "Fast decisions under pressure",
      },
      {
        num: "12",
        name: "Decision matrix",
        does:
          "Claude scores your options against weighted criteria so the choice stops being a vibe.",
        example: "Put these three cities in a weighted decision matrix for relocating.",
        bestFor: "Choosing between similar options",
      },
    ],
  },
  {
    id: "03",
    title: "See what you're missing",
    blurb: "Codes for the blind spots you can't catch on your own.",
    codes: [
      {
        num: "13",
        name: "/blind",
        does:
          "Claude points out the blind spots you can't see because you're too close to the problem.",
        example: "/blind. What am I missing about this content strategy?",
        bestFor: "Work you've stared at too long",
      },
      {
        num: "14",
        name: "/mirror",
        does:
          "Claude reflects back who it thinks you are, based on everything you've said in the chat.",
        example: "/mirror. From this whole conversation, who do you think I am?",
        bestFor: "A sharp outside read on yourself",
      },
      {
        num: "15",
        name: "Unlearn",
        does:
          "Claude names the things you probably believe about a topic that are actually wrong.",
        example: "Unlearn. What do most people get wrong about saving money?",
        bestFor: "Clearing bad assumptions before you learn",
      },
      {
        num: "16",
        name: "Counterfactual",
        does:
          "Claude walks you through exactly what changes if one key thing were different.",
        example: "Counterfactual: what changes if I had no budget for ads?",
        bestFor: "Stress-testing a plan against reality",
      },
      {
        num: "17",
        name: "Insights",
        does:
          "Claude pulls the non-obvious patterns out of your data or situation that you'd skim past.",
        example: "Insights. Here are my last 30 days of expenses, find the patterns.",
        bestFor: "Numbers, habits, anything with hidden trends",
      },
      {
        num: "18",
        name: "Future self",
        does: "Claude answers as you, ten years from now, looking back at this moment.",
        example: "Answer as my future self in 10 years. Should I start the business now?",
        bestFor: "Decisions clouded by short-term fear",
      },
    ],
  },
  {
    id: "04",
    title: "Learn and level up",
    blurb: "Codes that turn Claude into the teacher you wish you had.",
    codes: [
      {
        num: "19",
        name: "ELI5",
        does:
          "Claude explains anything like you're five, perfect for the stuff that usually needs an expert to translate.",
        example: "ELI5 how compound interest works.",
        bestFor: "Tax, contracts, jargon, anything dense",
      },
      {
        num: "20",
        name: "Socrates",
        does:
          "Instead of handing you the answer, Claude teaches by asking you questions until it clicks.",
        example: "Socrates. Teach me how the stock market works, ask me questions.",
        bestFor: "Actually remembering what you learn",
      },
      {
        num: "21",
        name: "Expert mode",
        does:
          "Claude answers at the level of a top expert and assumes you can keep up, no dumbing down.",
        example:
          "Answer at expert level, assume I know the basics. How does SEO really work?",
        bestFor: "When ELI5 is too slow for you",
      },
      {
        num: "22",
        name: "Lindy",
        does:
          "Claude gives you the time-tested approach that has worked for decades, not the trend of the week.",
        example: "Lindy mode. What's the proven way to get fit, ignore the hype?",
        bestFor: "Cutting through fads",
      },
      {
        num: "23",
        name: "80-20",
        does: "Claude shows you the small slice of effort that drives most of the result.",
        example: "80-20. What few things actually move the needle on weight loss?",
        bestFor: "When you're overwhelmed by options",
      },
      {
        num: "24",
        name: "Rubric",
        does: "Claude builds a scoring rubric, then grades your work against it honestly.",
        example: "Create a rubric for a strong cover letter, then score mine.",
        bestFor: "Improving anything you can measure",
      },
    ],
  },
  {
    id: "05",
    title: "Make it and ship it",
    blurb: "Codes for turning Claude into your writer, editor, and builder.",
    codes: [
      {
        num: "25",
        name: "D3",
        does:
          "Claude gives you three completely different versions of the same thing so you pick the best.",
        example: "D3. Write a message asking my boss for a raise.",
        bestFor: "Messages, captions, anything tone-sensitive",
      },
      {
        num: "26",
        name: "/human",
        does: "Claude rewrites stiff, robotic text so it reads like a person actually wrote it.",
        example: "/human. Rewrite this email so it sounds like me, not a template.",
        bestFor: "Making AI drafts sound natural",
      },
      {
        num: "27",
        name: "Compress",
        does:
          "Claude cuts the fluff and gives you the essential version, down to a line if you want.",
        example: "Compress this into one tweet without losing the point.",
        bestFor: "Tightening long, rambly text",
      },
      {
        num: "28",
        name: "Persona",
        does: "Claude rewrites your message for a specific reader so it actually lands.",
        example: "Rewrite this pitch for a busy CEO who skims.",
        bestFor: "Matching the message to the audience",
      },
      {
        num: "29",
        name: "Template",
        does:
          "Claude turns a one-off piece of work into a reusable template you can fill in forever.",
        example: "Turn this proposal into a blank template I can reuse.",
        bestFor: "Anything you do more than once",
      },
      {
        num: "30",
        name: "Artifacts",
        does:
          "Claude builds a working app, tool, or dashboard live in the chat while you watch. Uses Claude's Artifacts feature.",
        example: "Build this as an artifact: a budget calculator I can actually use.",
        bestFor: "Turning an idea into something usable",
      },
    ],
  },
];
