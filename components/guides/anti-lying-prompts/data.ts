export const ANTI_LYING_PROMPTS_SLUG = "3-prompts-stop-ai-lying";

export const PROMPTS = [
  {
    id: "p1",
    tag: "FIX 01",
    title: "Hallucination",
    problem: "It invents facts that look real",
    text: "Never guess or give false information. If you're not sure something is true, tell me you don't know and go find the real answer instead of making things up.",
  },
  {
    id: "p2",
    tag: "FIX 02",
    title: "Bias",
    problem: "It leans on whatever it was trained on",
    text: "Reframe this in a way that challenges how you see the problem and make the strongest case for the opposite side.",
  },
  {
    id: "p3",
    tag: "FIX 03",
    title: "Sycophancy",
    problem: "It agrees with you even when you're wrong",
    text: "Tell me what a top 0.1% person in this field would think, not what I want to hear, and be brutally honest with me.",
  },
] as const;

export type SetupStep =
  | { type: "text"; value: string; bold?: boolean }
  | { type: "path"; value: string };

export type SetupRoute = {
  scope: "all" | "proj";
  title: string;
  steps: SetupStep[][];
};

export const CLAUDE_ROUTES: SetupRoute[] = [
  {
    scope: "all",
    title: "Claude settings",
    steps: [
      [
        { type: "text", value: "Open Claude, click your name at the bottom-left, then " },
        { type: "text", value: "Settings", bold: true },
        { type: "text", value: "." },
      ],
      [
        { type: "text", value: "Go to " },
        { type: "path", value: "Profile" },
        { type: "text", value: "." },
      ],
      [
        {
          type: "text",
          value:
            "Find the personal preferences box, the one asking what Claude should consider in its responses.",
        },
      ],
      [
        {
          type: "text",
          value: "Paste in the three prompts, then save. Every new chat now follows them.",
        },
      ],
    ],
  },
  {
    scope: "proj",
    title: "Claude project instructions",
    steps: [
      [
        { type: "text", value: "Open or create a " },
        { type: "text", value: "Project", bold: true },
        { type: "text", value: "." },
      ],
      [
        { type: "text", value: "Open the project's " },
        { type: "path", value: "Instructions" },
        { type: "text", value: " (set instructions / custom instructions)." },
      ],
      [{ type: "text", value: "Paste the three prompts there and save." }],
      [
        {
          type: "text",
          value:
            "Now every chat inside that project runs the rules, while your other chats stay untouched.",
        },
      ],
    ],
  },
];

export const GPT_ROUTES: SetupRoute[] = [
  {
    scope: "all",
    title: "ChatGPT custom instructions",
    steps: [
      [
        { type: "text", value: "Open ChatGPT, click your profile, then " },
        { type: "text", value: "Settings", bold: true },
        { type: "text", value: "." },
      ],
      [
        { type: "text", value: "Go to " },
        { type: "path", value: "Personalization › Custom Instructions" },
        { type: "text", value: "." },
      ],
      [
        {
          type: "text",
          value:
            "Paste the three prompts into the box for how you want ChatGPT to respond.",
        },
      ],
      [{ type: "text", value: "Save. The rules now apply to every new conversation." }],
    ],
  },
  {
    scope: "proj",
    title: "ChatGPT project instructions",
    steps: [
      [
        { type: "text", value: "Open or create a " },
        { type: "text", value: "Project", bold: true },
        { type: "text", value: "." },
      ],
      [
        { type: "text", value: "Open the project's " },
        { type: "path", value: "Instructions" },
        { type: "text", value: "." },
      ],
      [{ type: "text", value: "Paste the three prompts and save." }],
      [
        {
          type: "text",
          value:
            "Every chat in that project follows them, the rest of ChatGPT stays as is.",
        },
      ],
    ],
  },
];
