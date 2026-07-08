export const FABLE_FIVE_SLUG = "fable-five-prompts";

export const HOW_STEPS = [
  "Open a fresh project on Fable 5 for each prompt. Use high effort; use xhigh for the audit and build jobs.",
  "Give it access to what it needs: files, MCPs, repo, second brain. Don't surface context-budget countdowns if your harness shows them.",
  "Paste the full prompt and walk away. These are built for long autonomous runs — minutes to hours.",
  "Come back to finished deliverables. Save the outputs; they'll keep working on Opus or Sonnet later.",
] as const;

const AUTONOMOUS_SCAFFOLD = `Operating mode (Fable 5):
You are operating autonomously. I am not watching in real time and cannot answer questions mid-task. Do not ask "Want me to…?" or "Shall I…?" — proceed on reversible actions that follow from this request. Pause only for destructive or irreversible actions, a real scope change, or input only I can provide. If you hit one of those, ask and end the turn.

When you have enough information to act, act. Do not re-derive facts already established, re-litigate decisions I've made, or narrate options you won't pursue.

Don't add features, refactors, or abstractions beyond what the task requires. Do the simplest thing that works well.

Before reporting progress, audit each claim against a tool result from this session. Only report work you can point to evidence for; if something is not yet verified, say so explicitly.

Before ending your turn: if your last paragraph is a plan, a question, a list of next steps, or a promise about work you haven't done ("I'll…"), do that work now. End only when the task is complete or you're blocked on input only I can provide.

Final summary: lead with the outcome in one sentence, then supporting detail. Write complete sentences — no arrow chains or working shorthand. Do not echo or transcribe your internal reasoning in the response.`;

export const PROMPTS = [
  {
    num: "01",
    title: "Audit & upgrade every skill, MCP and workflow",
    sub: "Uses Fable's long-run autonomy, parallel subagents, and skill-refactor patterns so upgrades survive on Sonnet or Haiku.",
    code: `${AUTONOMOUS_SCAFFOLD}

Task: Audit my entire Claude setup so the improvements survive after I drop back to a smaller model.

Context: I'm on Fable 5 through July 12 and want durable assets — rewritten skills, MCP notes, and workflows explicit enough for Sonnet or Haiku to run without Fable covering for weak instructions.

Step 1 — Inventory (use parallel subagents). Delegate independent areas to subagents and keep working while they run: every custom skill, every connected MCP server and its tools, and every saved workflow or automation. For each item, record what it's supposed to do, what it actually does, and where it's thin, vague, or breakable. Point to evidence (file paths, tool names, config).

Step 2 — Score and triage. Score each item on clarity, reliability, and how well its instructions will hold up on a weaker model. Flag items that only work because a strong model is covering for weak instructions. Also flag skills that are over-prescriptive for Fable 5 — instructions that degrade output when a capable model no longer needs them.

Step 3 — Rewrite. For every skill and workflow:
- Remove redundant or over-prescriptive instructions if default Fable behavior is better without them.
- Add the edge cases, failure handling, and exact steps that were being left to inference so Sonnet or Haiku can run them.
- Do not instruct future models to echo or transcribe internal reasoning in responses.

Step 4 — Memory. Create or update a markdown lessons file (one lesson per note, one-line summary at top). Record corrections and confirmed approaches from this audit, including why they mattered. Update existing notes instead of duplicating.

Step 5 — Self-verify. Before delivering, run a fresh-context subagent pass against your rewrites: would Sonnet follow these without guessing? Fix gaps you find.

Deliverable: One upgrade report — what you found, what you changed, and the full rewritten instructions for each item, ready to paste back in. The rewritten instructions are the deliverable, not a summary of them.`,
  },
  {
    num: "02",
    title: "Run a full security audit",
    sub: "Fable's code-review recall plus evidence-grounded reporting. Assessment first — fixes in the report, not applied unless you ask.",
    code: `${AUTONOMOUS_SCAFFOLD}

Task: Run a full security review of everything I've built. You're the strongest model available at this — be thorough and assume I've missed things.

Context: I need a prioritized audit I can work top to bottom after you're done. I am not asking you to apply fixes in my systems; the deliverable is your assessment with specific remediation steps written out where you can.

Scope: Webhooks, forms, API keys and where they're exposed, automations, env/config, auth boundaries, and anything Claude Code or an agent has built for me. Use parallel subagents to search codebases and repo history where independent areas can be reviewed in parallel.

For each surface, check: exposed secrets, missing auth, unvalidated input, over-permissioned tokens, endpoints that leak data, and anything a bad actor could hit. Before each finding, verify against a tool result from this session — file contents, config, or command output. Do not report a vulnerability you cannot point to evidence for.

Rank every finding critical → low. For each: what's wrong, where it is (path/line or config key), why it matters, and the specific fix. Write fix code or config changes in the report where you can; do not apply them.

Establish a verification pass every major section: use a subagent with fresh context to re-check critical findings against the spec "only report confirmed issues with evidence."

Deliverable: One prioritized audit list. Pull critical items I need to handle today to the front. Don't soften anything — I'd rather see a false alarm than miss a real hole. Final summary: one sentence on overall risk posture, then the list.`,
  },
  {
    num: "03",
    title: "Build a big project or plan you'll run for months",
    sub: "One long autonomous run with self-verification, memory, and a finished handoff asset — not an outline.",
    code: `${AUTONOMOUS_SCAFFOLD}

Task: Build me a complete [content plan / roadmap / app / system] I can run for months on cheaper models after you're gone. One-shot job — finished asset, not an outline I have to develop myself.

Context: I'm working on [the larger task] for [who it's for]. They need [what the output enables]. The goal is [your outcome, e.g. "grow my newsletter to 10k" or "ship the app that does X"]. With that in mind, work backward from the goal: what has to be true to hit it, then design and build the full path there.

Execution:
- Delegate independent subtasks to subagents and keep working while they run.
- Establish self-verification every [major milestone / N hours]: use subagents with fresh context to check work against the goal spec. Fix gaps before moving on.
- Create or update a markdown memory file for lessons from this build (one lesson per note, one-line summary at top). Future cheaper models should reference this file.
- Stay in scope. Don't add features, refactors, or abstractions beyond what the goal requires.

If it's a plan: full structure, weekly or monthly breakdown, exact tasks, assets needed, and a tracker to stay on course.
If it's software: architect it, build it, wire what it needs, and deliver something I can actually run.

Put every decision and instruction into the deliverable itself so a smaller model can execute later without your reasoning. The plan or codebase is the asset — complete enough to hand off.

Deliverable: The finished [plan / app / system] plus a short handoff note: outcome first, then what to run next on Sonnet or Haiku.`,
  },
] as const;
