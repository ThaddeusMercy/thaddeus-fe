export const SLUG = "ai-jobs-youre-already-qualified-for";

export const UNIVERSITY_URL =
  "https://academy.attentionfactory.io/ai-university?ref=mercythaddeus";

export type SourceLink = {
  label: string;
  href: string;
};

export type JobPlace = {
  name: string;
  detail: string;
  /** External link (opens in a new tab). */
  href?: string;
  /** Internal guide link on this site. */
  guide?: string;
};

export type AiJob = {
  id: string;
  num: number;
  title: string;
  backgrounds: string[];
  whatYouDo: string;
  whyYouQualify: string;
  sources?: SourceLink[];
  /** US pay. `short` is shown in the "Find your match" list. */
  pay: { short: string; text: string; sources: SourceLink[] };
  places: JobPlace[];
  /** Shown under the list of places, e.g. the "examples, not endorsements" note. */
  placesNote?: string;
  searchTerms: string[];
  learnFirst: string[];
  related?: { label: string; href: string };
  sampleIntro: string;
  prompt: string;
  tip: string;
};

export const PAY_CHECKED_ON = "Oct 14, 2026";

export const SOURCES = {
  hiringLab: {
    label: "Indeed Hiring Lab (July 2026)",
    href: "https://hiringlab.indeed.com/2026/07/08/ai-is-no-longer-just-a-tech-occupation-story/",
  },
  indeed: {
    label: "Indeed Hiring Lab, via HR Dive (July 2026)",
    href: "https://www.hrdive.com/news/more-job-titles-include-ai-across-every-sector/825038/",
  },
  linkedin: {
    label: "LinkedIn Jobs on the Rise 2026, via Social Media Today",
    href: "https://www.socialmediatoday.com/news/linkedin-shares-data-on-rising-job-roles/809069/",
  },
  dice: {
    label: "Dice (January 2026)",
    href: "https://dice.com/career-advice/ai-related-jobs-top-linkedins-fastest-growing-roles-list-for-2026",
  },
  mercorPay: {
    label: "Mercor AI trainer pay guide (2026)",
    href: "https://www.mercor.com/resources/experts/ai-trainer-salary-hourly-rates/",
  },
  glassdoorTrainer: {
    label: "Glassdoor, corporate trainer salaries",
    href: "https://www.glassdoor.com/Salaries/corporate-trainer-salary-SRCH_KO0,17.htm",
  },
  zipAiTraining: {
    label: "ZipRecruiter, AI training specialist salaries",
    href: "https://www.ziprecruiter.com/Salaries/AI-Training-Specialist-Salary",
  },
  glassdoorConversation: {
    label: "Glassdoor, conversation designer salaries",
    href: "https://www.glassdoor.com/Salaries/conversation-designer-salary-SRCH_KO0,21.htm",
  },
  zipAutomation: {
    label: "ZipRecruiter, AI automation specialist salaries",
    href: "https://www.ziprecruiter.com/Salaries/Ai-Automation-Specialist-Salary",
  },
  zipAiVideo: {
    label: "ZipRecruiter, AI video creator salaries",
    href: "https://www.ziprecruiter.com/Salaries/AI-Video-Creator-Salary",
  },
  zipImplementation: {
    label: "ZipRecruiter, AI implementation consultant salaries",
    href: "https://www.ziprecruiter.com/Salaries/AI-Implementation-Consultant-Salary",
  },
} satisfies Record<string, SourceLink>;

const PLATFORM_NOTE =
  "These are examples, not endorsements. Each platform decides which countries and skills it’s hiring for at any time, so read the role before you apply. A legitimate platform never asks you to pay to join.";

export const AI_JOBS: AiJob[] = [
  {
    id: "data-annotator",
    num: 1,
    title: "AI Data Annotator",
    backgrounds: ["Writer", "Copywriter", "Content creator"],
    whatYouDo:
      "You write, check and rate the answers AI gives, so the models get smarter. A task might be reading a question and two AI answers, picking the better one and explaining why, or rewriting an answer the way it should have been written.",
    whyYouQualify:
      "Writing clearly, following a brief and noticing when something reads wrong are most of the job. LinkedIn ranked data annotators #4 on its fastest-growing jobs list for 2026, and the most common skills people in the role list are SEO copywriting, content marketing and content production.",
    sources: [SOURCES.linkedin, SOURCES.dice],
    pay: {
      short: "$12 to $25 an hour to start, up to $53 with experience",
      text: "$12 to $25 an hour to start, and up to $53 an hour with experience. The work is remote, and entry-level tasks need no AI experience.",
      sources: [SOURCES.mercorPay],
    },
    places: [
      {
        name: "Mercor",
        detail: "Browse open roles with the pay shown on each one.",
        href: "https://work.mercor.com/explore",
      },
      {
        name: "Outlier",
        detail:
          "Flexible remote tasks. You apply with an ID, your CV and your LinkedIn profile.",
        href: "https://outlier.ai",
      },
      {
        name: "DataAnnotation",
        detail: "Has generalist writing roles as well as expert ones.",
        href: "https://www.dataannotation.tech",
      },
      {
        name: "Alignerr",
        detail:
          "Lists roles like prompt writer and English writing generalist.",
        href: "https://www.alignerr.com",
      },
    ],
    placesNote: PLATFORM_NOTE,
    searchTerms: [
      "AI trainer",
      "AI writing evaluator",
      "data annotator remote",
      "AI content reviewer",
      "RLHF writer",
    ],
    learnFirst: [
      "How AI answers get judged: is it accurate, does it follow the instructions, is it clear, is the tone right?",
      "Writing short, specific feedback. “Paragraph two ignores the question” is more useful than “this is bad.”",
      "Using ChatGPT and Claude every day, so you start to notice where they slip.",
    ],
    sampleIntro:
      "This prompt gives you two AI answers to judge, waits for your verdict, then turns your reasoning into a clean rating sheet you can share.",
    prompt:
      "I want to apply for AI data annotator and AI trainer roles. Help me make a portfolio sample that shows I can judge AI answers well.\n\n1. Write a realistic question someone might ask an AI about [a topic I know well, e.g. writing a product description].\n2. Write two different AI answers to it: one strong, and one that sounds good but has problems (a mistake, a missed instruction, the wrong tone or too much padding).\n3. Stop and ask me which answer is better and why. Wait for my reply.\n4. After I answer, turn my reasoning into a rating sheet: a score out of 5 for each answer on accuracy, following instructions, clarity and tone, a one-line reason for each score, and a rewritten best answer.\n\nKeep my judgement and my words. Only tidy them up. Format it as a one-page sample I can save as a PDF.",
    tip: "Pick a topic from your own niche. Your judgement is what employers are testing, so make sure the reasons in the sample are yours.",
  },
  {
    id: "expert-ai-trainer",
    num: 2,
    title: "Expert AI Trainer",
    backgrounds: ["Nurse", "Doctor", "Lawyer", "Accountant"],
    whatYouDo:
      "You test AI on questions from your field and correct it when it’s wrong. That can mean writing tricky questions, checking the AI’s answer line by line and writing the answer an expert would give.",
    whyYouQualify:
      "AI companies need people who can spot a wrong answer that sounds right. You can only do that if you know the field, and you’ve spent years learning yours.",
    pay: {
      short: "$75 to $200+ an hour",
      text: "$75 to $200+ an hour for licensed professionals and people with years of experience in their field, such as medicine, law and finance.",
      sources: [SOURCES.mercorPay],
    },
    places: [
      {
        name: "Mercor",
        detail:
          "Its pay guide lists medicine, law and finance among the expert fields.",
        href: "https://work.mercor.com/explore",
      },
      {
        name: "DataAnnotation",
        detail:
          "Lists expert roles in law, medicine, finance, accounting and healthcare.",
        href: "https://www.dataannotation.tech",
      },
      {
        name: "Alignerr",
        detail: "Hires subject-matter experts and experienced professionals.",
        href: "https://www.alignerr.com",
      },
    ],
    placesNote: PLATFORM_NOTE,
    searchTerms: [
      "AI trainer nursing",
      "medical expert AI training",
      "legal expert AI",
      "finance expert AI trainer",
      "accounting AI evaluator",
    ],
    learnFirst: [
      "Writing a model answer: the answer an expert in your field would give, with the reasoning spelled out.",
      "Rubrics: a short checklist of what a correct answer must include and what it must never say.",
      "Asking ChatGPT and Claude hard questions from your field, so you learn the kind of mistakes they make.",
    ],
    sampleIntro:
      "This prompt plays the AI that gets things wrong. You correct it, and it turns your corrections into a one-page sample.",
    prompt:
      "I’m a [your job, e.g. registered nurse] with [number] years of experience. I want to apply for expert AI trainer roles, where professionals test AI on questions from their field.\n\n1. Write 5 realistic questions a patient, client or junior colleague in my field might ask an AI. Make them tricky: the kind where a confident answer could still be wrong, incomplete or unsafe.\n2. For each question, write the answer an AI might give.\n3. Stop and let me correct each answer. Wait for my reply.\n4. After I’ve given my corrections, turn them into a one-page sample with: the question, the AI’s answer, what was wrong, the corrected answer and why it matters.\n\nUse my corrections, not yours, and don’t add facts I didn’t give you.",
    tip: "Keep it general. Never use patient, client or company details from your job, even with the names taken out.",
  },
  {
    id: "ai-trainer-for-teams",
    num: 3,
    title: "AI Trainer for Teams",
    backgrounds: ["Teacher", "Tutor", "Corporate trainer", "Facilitator"],
    whatYouDo:
      "You teach companies how to use ChatGPT and Claude in their everyday work. That might be a workshop, a few short sessions, or hands-on help for a team that keeps getting stuck.",
    whyYouQualify:
      "You already know how to make hard things simple and keep a room with you. AI instruction is one of the three areas where AI job titles are growing, alongside AI enablement and consulting, and AI training and content creation.",
    sources: [SOURCES.indeed],
    pay: {
      short: "$56k to $86k a year",
      text: "$56k to $86k a year for corporate trainers. AI training specialists earn about the same, at $55k to $81k a year.",
      sources: [SOURCES.glassdoorTrainer, SOURCES.zipAiTraining],
    },
    places: [
      {
        name: "LinkedIn and Indeed",
        detail:
          "These roles often sit under learning and development or HR, so search those teams too.",
      },
      {
        name: "Your own workplace",
        detail:
          "Offer to run a lunchtime session for your team. That becomes your first case study.",
      },
      {
        name: "Businesses, schools and associations near you",
        detail: "Offer a paid workshop for their staff.",
      },
      {
        name: "Your own social media",
        detail:
          "Post a short clip of you teaching one AI trick. People hire trainers they’ve already seen teach.",
      },
    ],
    searchTerms: [
      "AI trainer",
      "AI enablement",
      "AI adoption specialist",
      "AI learning and development",
      "AI literacy trainer",
    ],
    learnFirst: [
      "ChatGPT and Claude for the work most teams do every day: emails, summaries, meeting notes and documents.",
      "One simple way to write a prompt that you can teach in five minutes.",
      "What people should never paste into an AI tool at work, like customer data or passwords.",
    ],
    related: {
      label: "Start with 10 ChatGPT prompts for everyday work",
      href: "/guide/chatgpt-work-prompts",
    },
    sampleIntro:
      "This prompt plans a beginner workshop for a specific team, plus the pitch you send to the manager.",
    prompt:
      "I want to start teaching teams how to use ChatGPT and Claude at work. My background is [teaching / tutoring / training] and the team I’d like to train is [industry or department, e.g. the admin team at a law firm].\n\nDesign a 45-minute beginner workshop for them with:\n- the 3 tasks they do every week that AI can help with\n- a live demo for each, with the exact prompt to use\n- one short exercise they do themselves\n- what they should never paste into an AI tool\n- a one-page handout they keep afterwards\n\nWrite it in plain language for people who have never used AI. Then write a 3-sentence pitch I can send to a manager offering to run it.",
    tip: "Run the workshop once for free, for friends or colleagues, and ask for a one-line review. That review goes straight into your pitch.",
  },
  {
    id: "conversation-designer",
    num: 4,
    title: "Conversation Designer",
    backgrounds: ["Customer service", "Call centre agent", "Support specialist"],
    whatYouDo:
      "You write and test what a company’s AI assistant says, then fix the replies that confuse customers. You plan how each conversation should go, what the assistant asks, and when it hands over to a person.",
    whyYouQualify:
      "You know every question customers ask and every way a conversation can go wrong. Plenty of people building chatbots have never been on the other end of an angry message. You have, many times.",
    pay: {
      short: "$50k to $80k a year",
      text: "$50k to $80k a year.",
      sources: [SOURCES.glassdoorConversation],
    },
    places: [
      {
        name: "LinkedIn and Indeed",
        detail: "Use the search terms below and filter for remote if you need it.",
      },
      {
        name: "Companies with big support teams",
        detail:
          "Banks, telecoms, airlines and online stores. Check their careers pages.",
      },
      {
        name: "Your current employer",
        detail:
          "If they’re adding a chatbot, ask to help test it. Nobody knows the customers better than the support team.",
      },
      {
        name: "Freelance sites like Upwork",
        detail: "Small chatbot projects are a good way to build your first samples.",
      },
    ],
    searchTerms: [
      "conversation designer",
      "conversational AI designer",
      "chatbot designer",
      "AI agent designer",
      "conversational AI specialist",
    ],
    learnFirst: [
      "Mapping a conversation: the usual path, plus what happens when the customer is confused, angry or off-topic.",
      "Writing short, clear replies in a brand’s voice.",
      "One chatbot builder, like Voiceflow, so you can show a working assistant as well as a document.",
    ],
    sampleIntro:
      "This prompt builds a conversation design case study around the questions you already answer every day.",
    prompt:
      "I’m moving into conversation design from customer service. Help me build a portfolio sample.\n\nThe company: [a type of business, e.g. an online clothing store or a bank].\n\n1. List the 10 most common questions customers ask this kind of business. Then ask me to add the ones I’ve dealt with in my own job, and wait for my reply.\n2. For the top 3, write the conversation the AI assistant should have: the greeting, the questions it asks, what it says when the customer is angry or confused, and when it hands over to a human.\n3. Show one bad reply an assistant might give, explain why it would confuse a customer, and rewrite it.\n\nPresent it as a short case study: the problem, my approach and the final conversation flows.",
    tip: "Use the questions you’ve answered hundreds of times. That experience is your edge, so make sure it shows in the sample.",
  },
  {
    id: "ai-automation-specialist",
    num: 5,
    title: "AI Automation Specialist",
    backgrounds: ["Admin", "Virtual assistant", "Executive assistant"],
    whatYouDo:
      "You set up AI and automations that handle emails, scheduling, reports and follow-ups, so the team stops doing the same tasks by hand every week.",
    whyYouQualify:
      "You already know which tasks eat up the day and how the work should flow. Knowing what to automate is the hard part, and you have years of it. The tools are the easier part to learn.",
    pay: {
      short: "$56k to $97k a year",
      text: "$56k to $97k a year.",
      sources: [SOURCES.zipAutomation],
    },
    places: [
      {
        name: "LinkedIn and Indeed",
        detail: "Many of these roles are remote or part-time.",
      },
      {
        name: "Freelance sites like Upwork",
        detail: "Business owners post automation projects there.",
      },
      {
        name: "The people you already assist",
        detail: "Offer to automate one task you do for them every week.",
      },
      {
        name: "Small businesses near you",
        detail: "Look for the ones still doing everything by hand.",
      },
    ],
    searchTerms: [
      "AI automation specialist",
      "automation specialist Zapier",
      "AI operations assistant",
      "workflow automation",
      "AI virtual assistant",
    ],
    learnFirst: [
      "One automation tool, like Zapier, Make or n8n. Pick one and stick with it until you’ve built a few things.",
      "How an automation works: what starts it, the steps in the middle, and where the result ends up.",
      "Using ChatGPT or Claude inside an automation, for example to summarise an email or draft a reply.",
    ],
    sampleIntro:
      "This prompt turns the tasks that eat your week into automation plans, then walks you through building the easiest one.",
    prompt:
      "I’m [an admin / a virtual assistant / an executive assistant] and I want to show I can set up AI automations. These are the tasks that eat up my week: [list 3 to 5, e.g. sorting emails, booking meetings, weekly reports, chasing follow-ups].\n\nFor each task:\n- explain in plain English how it could be automated: what starts it, what happens step by step, and where the result goes\n- suggest a tool that could do it, like Zapier, Make, n8n, ChatGPT or Claude\n- estimate how many minutes a week it would save, and tell me what the estimate is based on\n\nThen pick the easiest one and give me click-by-click steps to build it, so I can record a short demo for my portfolio.",
    tip: "Record your screen while the automation runs. A 30-second demo shows more than a paragraph on your CV.",
  },
  {
    id: "ai-content-creator",
    num: 6,
    title: "AI Content Creator",
    backgrounds: ["Social media manager", "Marketer", "Graphic designer"],
    whatYouDo:
      "You make images, videos and ads for brands with AI tools: product shots, short videos, campaign visuals and the captions that go with them.",
    whyYouQualify:
      "Anyone can type a prompt. Knowing what makes people stop scrolling matters more than the tool, and you’ve been practising that for years.",
    pay: {
      short: "$57k to $86k a year",
      text: "$57k to $86k a year, based on pay for AI video creators.",
      sources: [SOURCES.zipAiVideo],
    },
    places: [
      {
        name: "LinkedIn and Indeed",
        detail: "Use the search terms below, and check the creative roles at agencies.",
      },
      {
        name: "Marketing and creative agencies",
        detail: "Check their careers pages and follow them on LinkedIn.",
      },
      {
        name: "Freelance sites like Upwork",
        detail: "Good for your first paid projects.",
      },
      {
        name: "Small brands near you",
        detail: "Offer to make a set of product images or a short ad.",
      },
    ],
    searchTerms: [
      "AI content creator",
      "AI video editor",
      "generative AI designer",
      "AI creative",
      "AI content specialist",
    ],
    learnFirst: [
      "One AI image tool. ChatGPT is a good place to start, and you can edit your own photos with it too.",
      "One AI video tool. Pick it by budget, then learn it well.",
      "Writing hooks and short scripts. Your taste is what makes the AI output worth posting.",
    ],
    related: {
      label: "Pick an AI video tool by budget",
      href: "/guide/make-a-short-drama-with-ai#budget",
    },
    sampleIntro:
      "This prompt plans a mini campaign you can make with AI tools and present as a case study.",
    prompt:
      "I’m a [social media manager / marketer / designer] building an AI content portfolio. Create a mini campaign for a small business in [industry, e.g. skincare, a bakery or a gym] that I can make with AI tools:\n\n- the big idea in one line, and who it’s for\n- 3 scroll-stopping hooks for short videos\n- 3 detailed image prompts for product ads (setting, lighting, camera angle and any text on the image)\n- a 15-second video script with the shots listed in order\n- captions for Instagram and TikTok\n\nThen tell me how to present the finished images and video as a case study: the brief, what I made and why it works.",
    tip: "Use a made-up brand, or get a local business’s permission before you post work with their name on it.",
  },
  {
    id: "ai-implementation-consultant",
    num: 7,
    title: "AI Implementation Consultant",
    backgrounds: ["Project manager", "Account manager", "Operations lead"],
    whatYouDo:
      "You help a business choose AI tools, roll them out and get the team using them. Picking the tool is the quick part. Getting a whole team to change how they work is where you earn your fee.",
    whyYouQualify:
      "Rolling out a new tool is project management: a plan, a pilot, training, and following up until it sticks. LinkedIn ranked AI consultants and strategists #2 on its fastest-growing jobs list for 2026.",
    sources: [SOURCES.linkedin],
    pay: {
      short: "$73k to $144k a year",
      text: "$73k to $144k a year, the highest-paid salaried role on this list.",
      sources: [SOURCES.zipImplementation],
    },
    places: [
      {
        name: "LinkedIn and Indeed",
        detail: "Use the search terms below. Many roles are titled “transformation” or “adoption.”",
      },
      {
        name: "Consulting and IT services firms",
        detail: "Look for teams that help clients adopt AI.",
      },
      {
        name: "Your current employer",
        detail:
          "Volunteer to lead the AI rollout on your team. That becomes your case study.",
      },
      {
        name: "Small and mid-sized businesses",
        detail: "Work with them as a freelancer once you have one rollout to show.",
      },
    ],
    searchTerms: [
      "AI implementation",
      "AI consultant",
      "AI transformation",
      "AI adoption manager",
      "AI program manager",
    ],
    learnFirst: [
      "The AI tools businesses use most: ChatGPT, Claude, and the AI already built into Microsoft 365 and Google Workspace.",
      "Workflow mapping: listing each step of a process and spotting the ones AI can take over.",
      "The basics of data privacy and company AI policies, because leaders will ask about them first.",
    ],
    sampleIntro:
      "This prompt writes a sample AI rollout plan for a business you choose, after asking you a few questions about it.",
    prompt:
      "I’m a [project manager / account manager / operations lead] moving into AI implementation consulting. Help me write a sample AI rollout plan for [type of business, e.g. a 20-person accounting firm].\n\nAsk me up to 5 questions about the business first, so the plan fits (I can make up the answers for a sample). Then write a short plan with:\n- the 3 workflows where AI would save the most time, and why\n- which tools to use for each, and what to check before choosing (cost, data privacy, how easy it is to learn)\n- a 30-day rollout: the pilot group, the training and how we measure success\n- the risks, including how to handle people who don’t want to change\n- the 3 numbers I’d report to the boss after 30 days\n\nFormat it as a document I can share as a portfolio sample.",
    tip: "If your company has already started using AI, write up what happened, what worked and what didn’t. A true story makes a stronger sample than a made-up one.",
  },
];

export const SWITCH_STEPS: { title: string; body: string }[] = [
  {
    title: "Pick the one job that matches what you’ve already done",
    body: "Look at the list above and choose one. Chasing all seven at once makes your profile vague, and recruiters skip vague profiles.",
  },
  {
    title: "Learn the AI tools that job uses every day",
    body: "Use the “What to learn first” list for your job. Practise on your own work for a couple of weeks, so you can talk about the tools from experience.",
  },
  {
    title: "Make 2 or 3 samples and apply with them, not just your CV",
    body: "Use the prompt for your job to make your first sample, then make two more. Put them in one place (a Google Drive folder or a one-page site works), add them to the Featured section of your LinkedIn and link them in every application.",
  },
];

export const ALL_PROMPTS = AI_JOBS.map(
  (job) => `${job.num}. ${job.title}\n${job.prompt}`,
).join("\n\n");
