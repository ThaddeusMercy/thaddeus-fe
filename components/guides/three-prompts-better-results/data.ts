export const SLUG = "3-prompts-better-ai-results";

export const BASE_PROMPT = `Task: [What should the AI do?]
Context: [What does it need to know?]
Audience: [Who is the result for?]
Goal: [What should this help me achieve?]
Requirements: [What must be included?]
Constraints: [Length, budget, deadline, tone, tools, or rules]
Output: [Script, plan, table, email, code, report, or another format]`;

export const ASK_PROMPT =
  "Before you answer, ask me up to three short questions that would make the result better. Ask only questions whose answers could change the recommendation, structure, tone, accuracy, or final output. Do not ask for information I already gave you.";

export const AFTER_QUESTIONS =
  "Restate what you understood in three to five lines. List any assumption you still need to make. Then complete the task.";

export const RESEARCH_PROMPT =
  "Use online research before answering. Prioritize current primary and authoritative sources. Cross-check important claims when possible. Cite each factual claim beside its source, show where reliable sources disagree, and tell me what you could not verify. Do not invent a source, quote, statistic, date, or link.";

export const RUBRIC_PROMPT =
  "Before writing, define the five criteria that matter most for this task and explain what a 10 out of 10 result requires for each one. Create the first draft. Score it against the rubric, name one specific weakness for every score below 10, and revise only the weak parts. Run no more than two revision rounds. Do not award 10 unless the requirement is visibly met. If evidence or context is missing, state what is needed instead of pretending the work is complete.";

export const MASTER_PROMPT = `MY TASK
[Paste the task, context, audience, goal, requirements, constraints, and output format here.]

1. CLARIFY
Before you begin, ask up to three short questions only if the answers could materially change the result. Do not ask for information I already gave you. After I reply, restate what you understood and list any assumption you still need to make.

2. RESEARCH
If the task contains current, factual, technical, medical, legal, financial, product, or market claims, use online research before drafting. Prioritize primary and authoritative sources. Cross-check important claims, cite them, separate facts from opinions or inferences, and tell me what you could not verify.

3. CREATE
Complete the task using my answers and the verified research. Follow the requested audience, goal, format, length, tone, and constraints. Do not add unsupported facts or generic filler.

4. REVIEW
Define the five measurable criteria that matter most for this task and what a 10 out of 10 result requires. Score the draft, name one specific weakness for every score below 10, and revise only the weak parts. Run no more than two rounds. Preserve the parts that already work.

5. DELIVER
Return the final answer first. Then include a short scorecard, sources used, assumptions made, and any remaining limitation that needs my review.`;

export const SHORT_ASK =
  "Before you answer, ask me up to three short questions that would materially improve the result. Do not ask for information I already gave you.";

export const SHORT_VERIFY =
  "Research current primary sources, cross-check important claims, cite them, show disagreements, and tell me what you could not verify.";

export const SHORT_IMPROVE =
  "Define five task-specific criteria, score the first draft, explain each weakness, and revise the weak parts no more than twice.";

export const SOURCE_ORDER = [
  {
    n: "1",
    text: "Official documentation, government or regulator pages, laws, original research, and first-party data.",
  },
  {
    n: "2",
    text: "Universities, standards bodies, major research institutions, and established professional organisations.",
  },
  {
    n: "3",
    text: "Credible specialist publications with named authors, dates, and links to original evidence.",
  },
  {
    n: "4",
    text: "Commentary, blogs, forums, and social posts only for context, examples, or opinions, not as the main proof.",
  },
] as const;

export const RESEARCH_LOOP = [
  {
    title: "Research notes",
    body: "Collect the facts, dates, definitions, source links, and disagreements before writing the polished answer.",
  },
  {
    title: "Fact-check table",
    body: "List each important claim, its source, whether it is verified, and any caveat or missing evidence.",
  },
  {
    title: "Draft from verified notes",
    body: "Write using only the information that survived the check. Mark opinion and inference clearly.",
  },
  {
    title: "Final claim audit",
    body: "Compare the finished draft with the sources again. Remove or soften anything the evidence does not support.",
  },
] as const;

export const CRITERIA_ROWS = [
  {
    task: "Video script",
    criteria: "Hook, clarity, specificity, accuracy, call to action",
  },
  {
    task: "Business plan",
    criteria: "Fit, evidence, feasibility, priorities, measurement",
  },
  {
    task: "Email",
    criteria: "Clarity, tone, length, persuasion, next step",
  },
  {
    task: "Code",
    criteria: "Correctness, safety, tests, maintainability, performance",
  },
] as const;

export const REFS = [
  {
    label: "OpenAI prompt guidance",
    href: "https://platform.openai.com/docs/guides/prompt-engineering",
  },
  {
    label: "ChatGPT Search",
    href: "https://help.openai.com/en/articles/9237897-chatgpt-search",
  },
  {
    label: "Anthropic prompt guidance",
    href: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview",
  },
  {
    label: "Claude web search",
    href: "https://docs.anthropic.com/en/docs/agents-and-tools/tool-use/web-search-tool",
  },
] as const;
