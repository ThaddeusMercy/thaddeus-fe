export const SLUG = "chatgpt-study-codes";

export type StudyCode = {
  num: string;
  code: string;
  blurb: string;
  prompt: string;
};

export type StudySection = {
  id: string;
  title: string;
  codes: StudyCode[];
};

export const SECTIONS: StudySection[] = [
  {
    id: "understand",
    title: "Understand a topic",
    codes: [
      {
        num: "01",
        code: "/handwritten",
        blurb: "Explain the topic in very simple language.",
        prompt:
          "/handwritten [TOPIC]. Explain it in simple language for a complete beginner. Use familiar examples, define every difficult word, and finish with a short recap.",
      },
      {
        num: "02",
        code: "/explainlike5",
        blurb: "Explain the idea as if teaching a five-year-old.",
        prompt:
          "/explainlike5 [TOPIC]. Use a simple story or everyday example. Avoid technical words unless you explain them immediately.",
      },
      {
        num: "03",
        code: "/firstprinciples",
        blurb: "Break the topic down to its basic ideas.",
        prompt:
          "/firstprinciples [TOPIC]. Start with the most basic facts, then show how they combine to form the full idea.",
      },
      {
        num: "04",
        code: "/analogy",
        blurb: "Teach with a familiar comparison.",
        prompt:
          "/analogy [TOPIC]. Explain it using three everyday analogies. After each analogy, tell me where the comparison stops being accurate.",
      },
      {
        num: "05",
        code: "/stepbystep",
        blurb: "Explain a process one step at a time.",
        prompt:
          "/stepbystep [TOPIC]. Divide it into numbered steps. Explain why each step happens and what would happen if it were skipped.",
      },
      {
        num: "06",
        code: "/teachback",
        blurb: "Let ChatGPT check your own explanation.",
        prompt:
          "/teachback [TOPIC]. I will explain the topic in my own words. Identify what I understand, what I missed, and what I got wrong. Do not give the full answer until I try.",
      },
      {
        num: "07",
        code: "/compare",
        blurb: "Compare two ideas clearly.",
        prompt:
          "/compare [TOPIC A] and [TOPIC B]. Create a table showing their meaning, similarities, differences, examples, and when each one applies.",
      },
      {
        num: "08",
        code: "/timeline",
        blurb: "Arrange events in order.",
        prompt:
          "/timeline [TOPIC]. Create a chronological timeline with dates, events, causes, and results. Mark the events I am most likely to confuse.",
      },
      {
        num: "09",
        code: "/causeeffect",
        blurb: "Show why something happened and what followed.",
        prompt:
          "/causeeffect [TOPIC]. Separate the causes, event or process, immediate effects, and long-term effects.",
      },
      {
        num: "10",
        code: "/bigpicture",
        blurb: "See how all the parts connect.",
        prompt:
          "/bigpicture [TOPIC]. Give me the main idea first, then show how the smaller concepts fit together. End with the five things I must remember.",
      },
    ],
  },
  {
    id: "notes",
    title: "Organize your notes",
    codes: [
      {
        num: "11",
        code: "/make-sticky-notes",
        blurb: "Turn a topic into short notes.",
        prompt:
          "/make-sticky-notes [TOPIC]. Create short sticky-note style points. Put only one idea on each note and keep each note under 20 words.",
      },
      {
        num: "12",
        code: "/cheatsheet",
        blurb: "Create a one-page revision sheet.",
        prompt:
          "/cheatsheet [TOPIC]. Include definitions, formulas, rules, common mistakes, and one quick example. Keep it compact enough for one page.",
      },
      {
        num: "13",
        code: "/outline",
        blurb: "Build a clean topic outline.",
        prompt:
          "/outline [TOPIC]. Organize it into main headings, subtopics, facts, examples, and likely exam areas.",
      },
      {
        num: "14",
        code: "/cornellnotes",
        blurb: "Format notes using the Cornell method.",
        prompt:
          "/cornellnotes [TOPIC OR PASTED NOTES]. Create three sections: questions and cues, detailed notes, and a short summary.",
      },
      {
        num: "15",
        code: "/flashcards",
        blurb: "Create question-and-answer flashcards.",
        prompt:
          "/flashcards [TOPIC]. Create 20 flashcards. Keep each answer short, cover one fact per card, and mix definitions, examples, and applications.",
      },
      {
        num: "16",
        code: "/formulasheet",
        blurb: "Collect formulas and explain when to use them.",
        prompt:
          "/formulasheet [TOPIC]. List every important formula, define each symbol, state the units, and give one worked example for each formula.",
      },
      {
        num: "17",
        code: "/definitions",
        blurb: "Extract important terms.",
        prompt:
          "/definitions [TOPIC OR NOTES]. List the important terms in alphabetical order. Give each one a plain explanation and a short example.",
      },
      {
        num: "18",
        code: "/summarylevels",
        blurb: "Summarize at three levels.",
        prompt:
          "/summarylevels [TOPIC]. Give me a one-sentence summary, a 100-word summary, and a detailed summary.",
      },
      {
        num: "19",
        code: "/mustknow",
        blurb: "Separate essential material from extra detail.",
        prompt:
          "/mustknow [TOPIC]. Divide the content into: must know, useful to know, and extra detail. Explain why each must-know point matters.",
      },
      {
        num: "20",
        code: "/cleanmynotes",
        blurb: "Turn rough notes into revision material.",
        prompt:
          "/cleanmynotes [PASTE NOTES]. Correct obvious errors, remove repetition, add headings, preserve the original meaning, and list anything that needs fact-checking.",
      },
    ],
  },
  {
    id: "visual",
    title: "Learn visually",
    codes: [
      {
        num: "21",
        code: "/visualizelearning",
        blurb: "Create a visual way to understand a topic.",
        prompt:
          "/visualizelearning [TOPIC]. Choose the best format from a flowchart, timeline, comparison table, concept map, or labelled diagram. Then create it and explain how to read it.",
      },
      {
        num: "22",
        code: "/conceptmap",
        blurb: "Map the connections between ideas.",
        prompt:
          "/conceptmap [TOPIC]. Put the central idea first, connect it to its major parts, and label how each part is related.",
      },
      {
        num: "23",
        code: "/flowchart",
        blurb: "Turn a process into a flowchart.",
        prompt:
          "/flowchart [TOPIC OR PROCESS]. Show the starting point, steps, decisions, branches, and final result. Keep every label short.",
      },
      {
        num: "24",
        code: "/diagram",
        blurb: "Describe and label a diagram.",
        prompt:
          "/diagram [TOPIC]. Create a clear labelled diagram if possible. Then explain the function of every labelled part.",
      },
      {
        num: "25",
        code: "/tableview",
        blurb: "Put complex information into a table.",
        prompt:
          "/tableview [TOPIC]. Choose useful comparison columns and turn the topic into a simple revision table.",
      },
      {
        num: "26",
        code: "/memorypalace",
        blurb: "Place facts inside an imaginary location.",
        prompt:
          "/memorypalace [TOPIC]. Use a familiar house as a memory palace. Place each important fact in a room and give me a route to recall them in order.",
      },
      {
        num: "27",
        code: "/storymode",
        blurb: "Turn facts into a memorable story.",
        prompt:
          "/storymode [TOPIC]. Turn the important points into a short story without changing the facts. After the story, map each part back to the real concept.",
      },
      {
        num: "28",
        code: "/drawfrommemory",
        blurb: "Practise recalling a visual structure.",
        prompt:
          "/drawfrommemory [TOPIC]. Tell me what to draw from memory, one instruction at a time. At the end, give me a checklist for comparing my drawing with the correct version.",
      },
    ],
  },
  {
    id: "practise",
    title: "Practise and test yourself",
    codes: [
      {
        num: "29",
        code: "/questionpredictor",
        blurb: "Generate likely practice questions.",
        prompt:
          "/questionpredictor [TOPIC, LEVEL, AND EXAM]. Based only on the syllabus, notes, and past questions I provide, generate 15 likely practice questions. Label each as easy, medium, or hard. Do not claim these are the actual exam questions.",
      },
      {
        num: "30",
        code: "/socrates",
        blurb: "Learn through guided questions.",
        prompt:
          "/socrates [TOPIC]. Teach me by asking one question at a time. Do not reveal the answer immediately. Use my answer to decide the next question.",
      },
      {
        num: "31",
        code: "/quizme",
        blurb: "Take a quick quiz.",
        prompt:
          "/quizme [TOPIC]. Give me 10 questions one at a time. Wait for my answer, mark it, explain mistakes, and keep score.",
      },
      {
        num: "32",
        code: "/multiplechoice",
        blurb: "Create multiple-choice practice.",
        prompt:
          "/multiplechoice [TOPIC]. Write 15 questions with four believable options each. Do not reveal the answers until I submit all my choices.",
      },
      {
        num: "33",
        code: "/pastquestionstyle",
        blurb: "Imitate the structure of questions you provide.",
        prompt:
          "/pastquestionstyle [TOPIC]. Study the past questions I paste below, identify their structure and difficulty, then create new practice questions in a similar structure without copying them.",
      },
      {
        num: "34",
        code: "/mockexam",
        blurb: "Build a timed practice test.",
        prompt:
          "/mockexam [SUBJECT, TOPICS, LEVEL]. Create a [TIME]-minute exam with clear instructions, marks for each question, and a balanced difficulty level. Put the marking guide after a divider.",
      },
      {
        num: "35",
        code: "/oralexam",
        blurb: "Practise answering aloud.",
        prompt:
          "/oralexam [TOPIC]. Act as an examiner. Ask one oral question at a time, follow up on weak answers, and give feedback on accuracy and clarity.",
      },
      {
        num: "36",
        code: "/fillthegap",
        blurb: "Create missing-word questions.",
        prompt:
          "/fillthegap [TOPIC]. Write 15 fill-in-the-blank questions covering the most important facts. Put the answer bank and solutions at the end.",
      },
      {
        num: "37",
        code: "/truefalsefix",
        blurb: "Test facts and correct false statements.",
        prompt:
          "/truefalsefix [TOPIC]. Give me 15 true-or-false statements. For every false statement, ask me to rewrite it correctly.",
      },
      {
        num: "38",
        code: "/examiner",
        blurb: "Mark an answer like an examiner.",
        prompt:
          "/examiner [QUESTION AND MY ANSWER]. Mark my answer using the rubric I provide. Show where I earned or lost marks, then give a better answer.",
      },
      {
        num: "39",
        code: "/mistakequiz",
        blurb: "Turn your errors into another test.",
        prompt:
          "/mistakequiz [PASTE MY WRONG ANSWERS]. Find the idea behind each mistake, teach it briefly, then create a new question that tests the same idea differently.",
      },
      {
        num: "40",
        code: "/hardmode",
        blurb: "Increase the difficulty.",
        prompt:
          "/hardmode [TOPIC]. Give me five difficult application questions that require reasoning, not simple recall. Give hints only when I ask.",
      },
    ],
  },
  {
    id: "plan",
    title: "Plan and remember",
    codes: [
      {
        num: "41",
        code: "/studyplan",
        blurb: "Create a realistic revision schedule.",
        prompt:
          "/studyplan [SUBJECTS, EXAM DATE, AVAILABLE TIME]. Build a daily plan that covers learning, active recall, practice questions, rest, and revision. Give weak topics more time.",
      },
      {
        num: "42",
        code: "/30minuteplan",
        blurb: "Study when you have little time.",
        prompt:
          "/30minuteplan [TOPIC]. Create a 30-minute session with exact time blocks for learning, recall, practice, and review.",
      },
      {
        num: "43",
        code: "/spacedrepetition",
        blurb: "Plan when to review a topic.",
        prompt:
          "/spacedrepetition [TOPIC AND EXAM DATE]. Create a review schedule starting today. Include what I should recall or practise during every review.",
      },
      {
        num: "44",
        code: "/activeRecall",
        blurb: "Study without rereading everything.",
        prompt:
          "/activeRecall [TOPIC]. Create a closed-book recall session. Ask me to write what I know first, then reveal a checklist and questions to fill my gaps.",
      },
      {
        num: "45",
        code: "/blurting",
        blurb: "Use the blurting study method.",
        prompt:
          "/blurting [TOPIC]. Give me a heading and ask me to write everything I remember. After I reply, compare it with the must-know points and create a short correction list.",
      },
      {
        num: "46",
        code: "/mnemonic",
        blurb: "Create memory aids.",
        prompt:
          "/mnemonic [LIST OR TOPIC]. Give me five mnemonic options. Keep them simple, memorable, and directly connected to the correct order or meaning.",
      },
      {
        num: "47",
        code: "/weakspots",
        blurb: "Find what you need to revise.",
        prompt:
          "/weakspots [TOPIC]. Ask me 10 diagnostic questions one at a time. Use my answers to rank my weak areas and recommend what to revise first.",
      },
      {
        num: "48",
        code: "/focuslist",
        blurb: "Decide what to study next.",
        prompt:
          "/focuslist [SYLLABUS, EXAM DATE, CONFIDENCE SCORES]. Rank the topics by urgency using importance, weakness, and time remaining. Explain the order briefly.",
      },
      {
        num: "49",
        code: "/progresscheck",
        blurb: "Measure improvement.",
        prompt:
          "/progresscheck [TOPIC]. Test me now, record my score by subtopic, and create a second test for later. When I return with my new answers, compare both results.",
      },
      {
        num: "50",
        code: "/lastminuterevision",
        blurb: "Revise shortly before an exam.",
        prompt:
          "/lastminuterevision [TOPIC OR SYLLABUS]. Create a fast review of the must-know facts, formulas, common traps, and five final recall questions. Do not introduce unnecessary new material.",
      },
    ],
  },
];

export const CUSTOM_CODE_PROMPT =
  "Create a reusable slash-style prompt code for this study task: [DESCRIBE THE TASK]. Give the code a short name. Then write the complete prompt it should represent, including the information I need to provide and the format of the answer.";

export const FAQS = [
  {
    q: "Will /questionpredictor reveal my real exam questions?",
    a: "No. It can create likely practice questions from your syllabus, notes, and past-question patterns, but it cannot know a private exam paper.",
  },
  {
    q: "Can I use the codes without ChatGPT Plus?",
    a: "Yes. They are prompts, so you can type them into any ChatGPT plan. Some visual or file features may depend on the features available in your account.",
  },
  {
    q: "Why should I add my notes or syllabus?",
    a: "The more relevant material you provide, the better ChatGPT can match your course, level, and exam style.",
  },
  {
    q: "Can ChatGPT make mistakes?",
    a: "Yes. Check dates, formulas, definitions, citations, and other important facts against trusted course material.",
  },
] as const;

export const EXAMPLE_BASIC = "/questionpredictor [photosynthesis]";

export const EXAMPLE_DETAILED =
  "/questionpredictor Photosynthesis for WAEC Biology. Use the syllabus and notes I paste below.";
