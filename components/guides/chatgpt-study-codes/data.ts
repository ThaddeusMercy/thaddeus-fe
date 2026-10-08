export const SLUG = "chatgpt-study-codes";

export const WEEKENDS_URL = "https://weekendsofai.com";

export type Shortcut = {
  id: string;
  num: string;
  title: string;
  blurb: string[];
  example: string;
  notes: string[];
  bullets?: string[];
};

export const SHORTCUTS: Shortcut[] = [
  {
    id: "anime-explainer",
    num: "01",
    title: "Anime explainer",
    blurb: [
      "Turn any topic or book into an anime-style explanation that makes it easier to understand and remember.",
    ],
    example: "/anime explainer $100M Offers by Alex Hormozi",
    notes: [
      "This works for business books, history, science, and other subjects. You can ask ChatGPT to turn the explanation into anime illustrations.",
    ],
  },
  {
    id: "mindmap",
    num: "02",
    title: "Mind map",
    blurb: [
      "Create a visual mind map showing the most important ideas in a book or topic and how they connect.",
    ],
    example: "/mindmap The 48 Laws of Power",
    notes: [
      "Useful for understanding books with multiple chapters, connecting related concepts, and revising subjects you've already studied.",
    ],
  },
  {
    id: "stickynotes",
    num: "03",
    title: "Sticky notes",
    blurb: [
      "Turn difficult information into colorful sticky notes containing the most important things you need to remember.",
    ],
    example: "/stickynotes Neuroplasticity",
    notes: [
      "Use this for science, exam preparation, textbook chapters, and concepts you want to revise quickly.",
    ],
  },
  {
    id: "exploded-view",
    num: "04",
    title: "Exploded view",
    blurb: [
      "Break down any object or machine into a detailed 3D diagram showing its individual components and how they fit together.",
    ],
    example: "/exploded view Formula 1 racing car",
    notes: [
      "You can also try this with smartphones, cameras, aircraft engines, spacecraft, and other machines.",
    ],
  },
  {
    id: "eli5",
    num: "05",
    title: "ELI5 (Explain like I'm five)",
    blurb: [
      "Understand complicated topics using simple explanations, familiar examples, and everyday language.",
    ],
    example: "/ELI5 Black holes",
    notes: [
      "You can also change the number:",
      "Use this whenever a subject feels too technical or confusing.",
    ],
    bullets: [
      "/ELI5 gives a very simple explanation.",
      "/ELI10 requests an explanation suitable for a 10-year-old.",
      "/ELI15 requests a more advanced explanation.",
    ],
  },
  {
    id: "educational-comics",
    num: "06",
    title: "Educational comics",
    blurb: [
      "Turn books, movies, or educational topics into illustrated comic pages with characters, dialogue, and short explanations.",
    ],
    example: "/educationalcomics Interstellar",
    notes: [
      "You could use this to understand the science in Interstellar, including black holes, gravity, wormholes, and time dilation.",
      "It's especially useful if you prefer learning through pictures instead of long paragraphs.",
    ],
  },
  {
    id: "sketchnotes",
    num: "07",
    title: "Sketch notes",
    blurb: [
      "Create handwritten-style study notes with sketches, diagrams, arrows, and short explanations.",
    ],
    example: "/sketchnotes Steve Jobs by Walter Isaacson",
    notes: [
      "This is useful for summarizing biographies, business books, lectures, and educational materials.",
      "Instead of reading several pages of notes, you can review the main ideas visually.",
    ],
  },
  {
    id: "timeline",
    num: "08",
    title: "Timeline view",
    blurb: [
      "Understand events in the order they happened using a visual timeline.",
    ],
    example: "/timeline Tenet (2020 movie)",
    notes: [
      "If you've watched Tenet and struggled to understand the forward and inverted timelines, this is worth trying.",
      "You can also use it for historical events, biographies, novels, and scientific discoveries.",
    ],
  },
  {
    id: "socratic",
    num: "09",
    title: "Socratic method",
    blurb: [
      "Learn through questions instead of receiving all the answers immediately.",
      "ChatGPT asks you one question at a time, waits for your answer, and uses your responses to help you understand the subject.",
    ],
    example: "/socratic Atomic Habits",
    notes: [
      "This is particularly useful when you want to find out whether you've actually understood something rather than simply memorized it.",
    ],
  },
  {
    id: "storymode",
    num: "10",
    title: "Story mode",
    blurb: [
      "Turn difficult topics or lessons into interesting stories that make the information easier to follow and remember.",
    ],
    example: "/storymode Things Fall Apart by Chinua Achebe",
    notes: [
      "Use story mode with novels, history, science, or subjects that are easier to understand through storytelling.",
    ],
  },
];

export const ALL_SHORTCUTS = SHORTCUTS.map((s) => s.example).join("\n\n");

export const HOW_TO_STEPS = [
  "Open ChatGPT.",
  "Copy one of the prompts above.",
  "Paste it into a new conversation.",
  "Replace the example book, movie, or topic with anything you want to learn.",
  'If ChatGPT responds with text when you want an illustration, ask it to "Create this as an image."',
] as const;
