export const SLUG = "7-chatgpt-prompt-modes";

export const STRUCTURE = `Use [MODE NAME] for this task.

Context:
[Explain the situation]

My goal:
[What you want to achieve]

Constraints:
[Time, money, team, platform, deadline, or other limits]

The task:
[What you need ChatGPT to do]

Preferred output:
[Table, plan, script, recommendation, checklist, or another format]`;

export const MODES = [
  {
    id: "red-team",
    num: "01",
    name: "Red Team Mode",
    when: "Use this when you want ChatGPT to challenge an idea instead of agreeing with you.",
    works:
      "It works well for business ideas, pricing, product launches, strategies, proposals, campaigns, and important plans.",
    prompt: `Use Red Team Mode.

Your job is to stress-test my idea, not validate it. Be direct, specific, and fair.

Look for:

1. Weak assumptions
2. Missing evidence
3. Hidden costs
4. Contradictions
5. Dependencies
6. Risks I may be ignoring
7. Reasons this plan may fail
8. Situations where the plan will stop working

Rank the problems from most serious to least serious.

For each problem:

1. Explain why it matters.
2. Show what may happen if I ignore it.
3. Give me one test, question, or change that would reduce the risk.

End with one verdict: proceed, revise, or stop.

Here is my idea or plan:

[PASTE IT HERE]`,
    example: `Use Red Team Mode to review the pricing strategy for my new service.

I want to charge $500 per month for content strategy and four short videos. My target customers are small technology companies.`,
  },
  {
    id: "socratic",
    num: "02",
    name: "Socratic Mode",
    when: "Use this when the problem is unclear or you do not yet have enough information to make a good decision.",
    works:
      "Instead of answering immediately, ChatGPT will ask questions until it understands what you actually need.",
    prompt: `Use Socratic Mode.

Do not answer my question immediately.

Ask me one question at a time until you understand:

1. My actual goal
2. My current situation
3. What I have already tried
4. My assumptions
5. My constraints
6. The tradeoffs I am willing to accept
7. What a successful result would look like

Challenge vague answers and point out contradictions.

Once you have enough information:

1. Summarize the real problem.
2. Explain the available options.
3. Recommend the best next step.
4. Explain why you chose it.
5. Tell me what information could change your recommendation.

My question is:

[PASTE YOUR QUESTION]`,
    example: `Use Socratic Mode.

Should I raise the price of my course this quarter?`,
  },
  {
    id: "creative-director",
    num: "03",
    name: "Creative Director Mode",
    when: "Use this when ChatGPT keeps giving you generic hooks, captions, campaign ideas, designs, or content concepts.",
    works:
      "This mode pushes it to explore genuinely different directions before choosing an answer.",
    prompt: `Use Creative Director Mode.

Help me move past the first obvious idea.

Avoid generic hooks, clichés, recycled formats, vague statements, and small variations of the same concept.

Create 10 clearly different creative directions for this task.

The directions should explore different:

1. Emotions
2. Angles
3. Formats
4. Stories
5. Visual approaches
6. Audience motivations

Evaluate each direction based on:

1. Originality
2. Relevance to the audience
3. Emotional pull
4. Clarity
5. Ease of execution

Select the strongest three directions and develop them further.

For each selected direction, give me:

1. The central concept
2. The hook
3. The content angle
4. The format
5. The visual direction
6. A complete example
7. Why it may work

Brand or project:
[ADD DETAILS]

Audience:
[ADD DETAILS]

Goal:
[ADD DETAILS]

Platform:
[ADD DETAILS]

Constraints:
[ADD DETAILS]`,
    example: `Use Creative Director Mode to develop an Instagram campaign for the launch of my AI course.

The audience is non-technical professionals who feel behind on AI.`,
  },
  {
    id: "ceo",
    num: "04",
    name: "CEO Mode",
    when: "Use this when you have too many projects, tasks, ideas, or responsibilities and cannot decide what deserves your attention.",
    works:
      "This mode focuses on impact, limited resources, bottlenecks, and what should be removed.",
    prompt: `Use CEO Mode.

Treat my time, money, attention, and team capacity as limited.

Ignore activity that looks productive but has little effect on the result.

Identify:

1. The decision that matters most
2. The main bottleneck
3. The work producing the highest return
4. The work consuming resources without enough return
5. The opportunity cost of my current priorities

Tell me:

1. What I should do now
2. What I should stop doing
3. What I should delegate
4. What I should delay
5. The three priorities for the next 30 days
6. Who should own each priority
7. The metric that will show whether it is working
8. The first action I should take today

My current situation:
[ADD DETAILS]

My goals:
[ADD DETAILS]

My current projects:
[ADD DETAILS]

My team:
[ADD DETAILS]

My constraints:
[ADD DETAILS]`,
    example: `Use CEO Mode.

I am running a weekly AI class, building an LMS, managing my personal content, and working with consulting clients. Where should I focus my time this month?`,
  },
  {
    id: "first-principles",
    num: "05",
    name: "First Principles Mode",
    when: "Use this when everyone appears to be following the same approach, but you want to find a simpler or better way.",
    works:
      "It separates facts from assumptions and rebuilds the solution from the beginning.",
    prompt: `Use First Principles Mode.

Do not begin with what people normally do.

Break this problem into:

1. Facts we know
2. Assumptions we are making
3. Constraints that are truly fixed
4. Constraints that only appear fixed
5. The result we are actually trying to achieve

Question each assumption.

Then rebuild the solution from the basics instead of copying the conventional approach.

Give me:

1. The conventional answer
2. Why people normally choose it
3. The assumptions behind it
4. A first-principles alternative
5. The advantages and disadvantages of the alternative
6. The smallest test I can run this week
7. The result that would prove or disprove the idea

The problem is:

[PASTE THE PROBLEM]`,
    example: `Use First Principles Mode.

How should I launch my first paid AI course without spending money on advertising?`,
  },
  {
    id: "devils-advocate",
    num: "06",
    name: "Devil's Advocate Mode",
    when: "Use this when you want to understand the strongest case against your current opinion or decision.",
    works:
      "Red Team Mode attacks weaknesses in a plan. Devil's Advocate Mode argues for the opposite position.",
    prompt: `Use Devil's Advocate Mode.

Take the strongest reasonable position against my current view.

Do not use weak, exaggerated, or unrealistic objections. Build the best possible case for the opposite decision.

Show me:

1. The strongest arguments against my position
2. The evidence or assumptions supporting those arguments
3. The situations in which the opposite choice would be better
4. What I may be overlooking
5. What I may be underestimating
6. What would have to be true for my position to be wrong
7. What evidence would change my mind

After presenting the opposing case:

1. Compare both positions fairly.
2. Explain which position is stronger.
3. Tell me whether my original position still holds.
4. Recommend what I should do next.

My current position is:

[PASTE YOUR POSITION]`,
    example: `Use Devil's Advocate Mode.

I believe I should leave my job next year and start working on my business full time.`,
  },
  {
    id: "consultant",
    num: "07",
    name: "Management Consultant Mode",
    when: "Use this when you need a structured analysis, a comparison of different options, and one clear recommendation.",
    works:
      "It works well for growth plans, market entry, hiring, operations, pricing, resource allocation, and business strategy.",
    prompt: `Use Management Consultant Mode.

Structure this problem into clear, logical parts.

Start by identifying:

1. The actual objective
2. The decision that must be made
3. The criteria that should guide the decision
4. The important constraints
5. The information we already have
6. The information that is still missing

Identify the main options.

Compare each option based on:

1. Expected impact
2. Cost
3. Speed
4. Effort
5. Risk
6. Reversibility
7. Resources required

Then give me:

1. A short diagnosis
2. The available options
3. The tradeoffs of each option
4. One prioritized recommendation
5. The assumptions behind the recommendation
6. The information that could change it
7. A 30-day action plan
8. The first three actions to take

The problem is:

[PASTE THE PROBLEM]`,
    example: `Use Management Consultant Mode.

Review my social media growth strategy for the next quarter and recommend where I should focus my time and budget.`,
  },
] as const;

export const CHOOSER = [
  {
    mode: "Red Team Mode",
    use: "when you need your plan challenged",
  },
  {
    mode: "Socratic Mode",
    use: "when you are not yet sure what the real problem is",
  },
  {
    mode: "Creative Director Mode",
    use: "when the ideas feel obvious or generic",
  },
  {
    mode: "CEO Mode",
    use: "when you have too many competing priorities",
  },
  {
    mode: "First Principles Mode",
    use: "when you want to question the usual approach",
  },
  {
    mode: "Devil's Advocate Mode",
    use: "when you need the strongest argument against your position",
  },
  {
    mode: "Management Consultant Mode",
    use: "when you need structured options and one recommendation",
  },
] as const;

export const COMBOS = [
  "Use Socratic Mode first and CEO Mode second when you need to understand the problem before deciding what matters.",
  "Use Creative Director Mode first and Red Team Mode second when you want original ideas that can survive criticism.",
  "Use First Principles Mode first and Management Consultant Mode second when you want a new approach followed by a practical plan.",
  "Use Devil's Advocate Mode before making an expensive or difficult-to-reverse decision.",
] as const;
