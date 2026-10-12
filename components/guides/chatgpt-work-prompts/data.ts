export const SLUG = "chatgpt-work-prompts";

export const UNIVERSITY_URL = "https://academy.attentionfactory.io/ai-university";

export type WorkPrompt = {
  id: string;
  num: string;
  title: string;
  blurb: string;
  prompt: string;
  tip: string;
};

export const WORK_PROMPTS: WorkPrompt[] = [
  {
    id: "inbox-cleaner",
    num: "01",
    title: "Inbox cleaner",
    blurb:
      "Paste in the emails you got today and let ChatGPT decide what needs you now, what can wait and what you can ignore. Then it drafts the replies for the urgent ones.",
    prompt:
      "Here are the emails I got today: [paste]. Sort them into reply now, reply this week and ignore. Then draft a short reply for every one in reply now.",
    tip: "Tell it who you are and what your job is the first time, so the drafts sound like you and not like a robot.",
  },
  {
    id: "meeting-notes",
    num: "02",
    title: "Meeting notes to actions",
    blurb:
      "Messy notes go in, clear decisions come out. You get the action items with who owns each one, the deadlines and a follow-up message you can send to everyone.",
    prompt:
      "Here are my messy meeting notes: [paste]. Turn them into decisions, action items with who owns each one, and deadlines. Then write the follow-up message I can send to everyone.",
    tip: "If you recorded the meeting, paste the transcript instead of your notes. It catches the things you forgot to write down.",
  },
  {
    id: "weekly-planner",
    num: "03",
    title: "Weekly planner",
    blurb:
      "Dump everything on your plate and the hours you actually have. ChatGPT builds a day-by-day plan that puts your hardest work where your energy is.",
    prompt:
      "Here's everything on my plate this week: [list]. I have [X] hours a day. Build me a day-by-day plan that puts the hardest work in the morning and leaves room for surprises.",
    tip: "Add your fixed meetings and deadlines to the list so the plan works around them.",
  },
  {
    id: "hard-email",
    num: "04",
    title: "The hard email",
    blurb:
      "For the email you've been avoiding: chasing a payment, saying no to a client, pushing back on your boss. You get two versions to pick from, both clear and kind.",
    prompt:
      "Help me write an email to [person] about [situation]. I want to be clear and firm but kind. Keep it under 120 words and give me two versions.",
    tip: "Say what you want to happen after they read it, for example \"I want them to pay by Friday\". The email gets much sharper.",
  },
  {
    id: "long-document",
    num: "05",
    title: "Long document in 5 bullets",
    blurb:
      "Reports, policies, contracts, long threads. Get the five points that matter and the three things you need to act on, without reading all 40 pages.",
    prompt:
      "Summarize this in 5 bullet points, then tell me the 3 things I actually need to act on: [paste or upload the document].",
    tip: "Follow up with \"What would someone in my role be most worried about in this?\" to catch the risks.",
  },
  {
    id: "spreadsheet-helper",
    num: "06",
    title: "Spreadsheet helper",
    blurb:
      "Describe your columns and what you want, and ChatGPT writes the formula and explains it like you've never touched one.",
    prompt:
      "In Google Sheets or Excel, I have [describe your columns]. Write me the formula that [what you want it to do], and explain how to use it like I've never touched a formula.",
    tip: "Paste three or four rows of your real data (remove anything private) so the formula fits your sheet the first time.",
  },
  {
    id: "slides",
    num: "07",
    title: "Slides in 2 minutes",
    blurb:
      "Turn notes or a topic into a full 10-slide outline with titles, bullet points and speaker notes. Then paste it into your slide tool of choice.",
    prompt:
      "Turn this into a 10-slide presentation outline with a title, 3 bullet points and a speaker note for every slide: [paste your topic or notes].",
    tip: "Tell it who the audience is, like your manager, a client or a class. The outline changes a lot.",
  },
  {
    id: "decision-helper",
    num: "08",
    title: "Decision helper",
    blurb:
      "Stuck between two options? ChatGPT asks you five questions first, then lays out the pros, cons and risks of each and tells you which one it would pick.",
    prompt:
      "I'm deciding between [option A] and [option B]. Ask me 5 questions first. Then lay out the pros, cons and risks of each, and tell me which one you'd pick and why.",
    tip: "Answer the five questions honestly. That's where the useful part comes from.",
  },
  {
    id: "todo-sorter",
    num: "09",
    title: "To-do list sorter",
    blurb:
      "Your to-do list sorted into do today, schedule, hand off and delete. It will also tell you what doesn't need doing at all.",
    prompt:
      "Here's my to-do list: [paste]. Sort it into do today, schedule, hand off and delete. Be honest about what doesn't need doing at all.",
    tip: "Run it every Monday morning before you open your inbox.",
  },
  {
    id: "end-of-day",
    num: "10",
    title: "End-of-day review",
    blurb:
      "Compare what you planned with what you actually did. You find out what slowed you down and get the three most important things for tomorrow.",
    prompt:
      "Here's what I planned today and what I actually did: [paste]. Tell me what slowed me down, then give me the 3 most important things for tomorrow.",
    tip: "Keep it in one chat for the whole week, so on Friday you can ask what kept slowing you down.",
  },
];

export const ALL_PROMPTS = WORK_PROMPTS.map(
  (p) => `${p.num}. ${p.title}\n${p.prompt}`
).join("\n\n");

export const LESSON_RULES = [
  {
    title: "Give it the real material",
    body: "Paste the actual emails, notes or document. ChatGPT is only as useful as what you give it, and \"help me with my emails\" gets you generic advice.",
  },
  {
    title: "Tell it who you are",
    body: "One line about your job and who you work with changes every answer. \"I'm a project manager at a small agency\" is enough.",
  },
  {
    title: "Ask for the format you need",
    body: "Bullets, a table, two versions, under 120 words. If you don't say it, you get a wall of text.",
  },
  {
    title: "Keep going in the same chat",
    body: "The first answer is a draft. Reply with \"shorter\", \"more direct\" or \"add a deadline\" and it gets better without starting over.",
  },
] as const;

export const HOW_TO_STEPS = [
  "Open ChatGPT (the free version works).",
  "Copy one of the prompts above.",
  "Replace everything in [square brackets] with your own details.",
  "Paste it into a new chat and send.",
  "Reply in the same chat to adjust the result until it's right.",
] as const;
