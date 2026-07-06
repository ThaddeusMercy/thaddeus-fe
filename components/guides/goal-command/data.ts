export const GOAL_COMMAND_SLUG = "claude-goal-command";

export const LOOP_NODES = [
  "take action",
  "check the goal",
  "not met ↺ repeat",
  "MET · stop",
] as const;

export const WHY_LOOP_PARTS = [
  {
    id: "a",
    title: "A stop condition",
    body: '"Done" has to mean something checkable, or the loop never knows when to end.',
  },
  {
    id: "b",
    title: "A self-check",
    body: "After each step it compares what it produced against that condition — instead of assuming it's finished.",
  },
  {
    id: "c",
    title: 'A "keep going" instruction',
    body: "The explicit permission to continue without stopping to ask you between steps. This is the line most people forget, and it's the one that unlocks the long runs.",
  },
] as const;

export const MODES = [
  {
    title: "In Claude chat",
    live: false,
    body: "You get one long, thorough, multi-step pass — it plans, works through the steps, and self-corrects inside a single reply. Powerful, but bounded by that one turn. It can't run your tests or open your terminal, so here \"keep going for hours\" is figurative. Great for reasoning, drafting, and planning work.",
  },
  {
    title: "In Claude Code",
    live: true,
    body: "Now there's a real execution loop. Claude runs commands, reads the actual output, fixes, re-runs, and re-checks — unattended, for as long as the condition stays unmet. This is where a /Goal genuinely runs for hours, and where the multi-hour runs come from. Want the version that literally keeps working? Run it here.",
  },
] as const;

export const ANATOMY_PARTS = [
  {
    num: "01",
    title: "Goal",
    key: "the end state",
    body: 'Written so it can be verified. Not "improve the code" — "the build passes and every test is green." If you can\'t check it, the loop can\'t either.',
  },
  {
    num: "02",
    title: "Definition of Done",
    key: "the checklist",
    body: 'The concrete criteria that make "done" objective. This is what the self-check runs against every pass. Vague here = it never finishes, or finishes wrong.',
  },
  {
    num: "03",
    title: "The Loop",
    key: "act → check → repeat",
    body: "Spell out the cycle: take the next action, check the result, finish or continue. Making it explicit is what stops it after one pass.",
  },
  {
    num: "04",
    title: "Self-check",
    key: "evaluate every pass",
    body: '"After each step, compare against Definition of Done." Without this it declares victory early — the single most common way the pattern disappoints.',
  },
  {
    num: "05",
    title: "Guardrails",
    key: "the brakes",
    body: 'Max iterations, no destructive actions, scope limits. This is what stands between "ran until done" and "ran until it broke something."',
  },
  {
    num: "06",
    title: "Progress log",
    key: "the window",
    body: "Have it report each pass — what it did, what changed, what's left. So you can watch a long run and interrupt the moment it drifts.",
  },
] as const;

export const TEMPLATES = [
  {
    id: "generic",
    label: "goal-template · generic",
    code: `/Goal

GOAL: [the end state you want, phrased so it can be verified —
not "improve the code" but "the build passes, all tests green"]

DEFINITION OF DONE — all of these must be true:
- [checkable criterion 1]
- [checkable criterion 2]
- [checkable criterion 3]

LOOP:
1. Take the next action toward the goal.
2. Check the result against Definition of Done.
3. If every item is true, stop and report DONE with a summary.
4. If not, name what's still missing and take the next action.
5. Repeat from step 1.

GUARDRAILS:
- Stop after [N] iterations. If it's not done, tell me
  exactly what's blocking it.
- Never [delete / deploy / send / pay / overwrite] without
  asking me first.
- Stay inside [scope]. Don't touch [out of scope].
- After each pass, log: what you did, what changed, what's left.

Start now. Don't check in for permission between steps —
keep going until Definition of Done is met or a guardrail stops you.`,
  },
  {
    id: "coding",
    label: "goal · coding · Claude Code",
    code: `/Goal

GOAL: The signup → login → dashboard flow works end to end for a
brand-new user, with the session persisted on refresh.

DEFINITION OF DONE — all must pass:
- \`npm run build\` completes with zero errors
- \`npm run test\` passes (every auth test green)
- \`tsc --noEmit\` reports no type errors
- The smoke script \`scripts/smoke-auth.ts\` exits 0

LOOP:
1. Run the four checks above.
2. For each failure, read the actual error, fix the root cause,
   re-run that check.
3. Repeat until all four pass in one clean run.

GUARDRAILS:
- Show me any Supabase migration before applying it — don't touch
  the schema silently.
- Don't modify billing or the Polar integration.
- Cap at 20 iterations, then stop and report what's left.
- Log each pass: command run → result → fix applied.

Begin. Keep running until every check passes.`,
  },
  {
    id: "content",
    label: "goal · content · bulk processing",
    code: `/Goal

GOAL: Every raw transcript in /transcripts becomes a finished
caption in /captions — one caption file per transcript.

DEFINITION OF DONE:
- Every .txt in /transcripts has a matching .md in /captions
- Each caption follows hook → tension → CTA
- No file is empty, truncated, or a placeholder

LOOP:
1. List the transcripts that don't have a caption yet.
2. Write the caption for the next one.
3. Re-check the list.
4. Repeat until the list is empty.

GUARDRAILS:
- Never overwrite an existing caption — flag it and skip.
- Log progress every 5 files.
- When the list is empty, stop and give me a summary table
  (file, status).`,
  },
] as const;

export const USE_ITEMS = [
  "The success condition is verifiable — tests pass, build succeeds, all rows migrated, every file processed.",
  "Iterate-until-it-works jobs: debugging, fixing a failing build, getting a flaky flow green.",
  'Bulk repetitive work where each item has the same "done."',
  "Anything where \"keep going until it's right\" beats a single best-effort pass.",
] as const;

export const SKIP_ITEMS = [
  "Open-ended creative work with no objective \"done\" — it'll loop pointlessly or over-build.",
  "Actions that are costly if wrong — deploys, sends, deletes, payments — unless you add hard checkpoints.",
  "Goals you can't verify. If you can't check it, neither can the loop.",
  "Tiny one-shot tasks. The scaffolding costs more than it saves.",
] as const;

export const FAILURE_MODES = [
  {
    symptom: "It loops forever",
    fix: 'cap iterations. "Stop after 15 passes and tell me what\'s blocking it."',
  },
  {
    symptom: "It over-builds",
    fix: 'tighten Definition of Done and add "don\'t add anything not required to meet it."',
  },
  {
    symptom: "It wrecks something",
    fix: 'guardrail. "Never delete, deploy, send, or pay without asking me first."',
  },
  {
    symptom: "It drifts off goal",
    fix: "progress log + restate the goal each pass so it keeps re-anchoring.",
  },
] as const;

export const QUICK_VERSION =
  "Keep going until [goal] is true. After each step, check yourself against [these done-criteria]. Don't stop to ask me — only stop when it's done or you hit [this limit].";
