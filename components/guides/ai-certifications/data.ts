export const AI_CERTIFICATIONS_SLUG = "ai-certifications-weekend";

export const BOOTCAMP_URL = "https://dub.sh/attn-bravo";

export const BOOTCAMP_SPONSORS = [
  "HeyGen",
  "Google",
  "ElevenLabs",
  "Cursor",
  "Lovable",
  "Replit",
  "Zapier",
  "n8n",
  "Make",
  "Claude",
  "Airtable",
];

export const BOOTCAMP_HOSTS = [
  { name: "Mercy Thaddeus", handle: "@mercythaddeus_" },
  { name: "Joshua Omobola", handle: "@kohawithstuff" },
];

export const BOOTCAMP_DATE = "JULY 1st";

export type CertCourse = {
  idx: string;
  provider: string;
  title: string;
  tags: { label: string; variant?: "free" | "paidcert" | "bonus" }[];
  description: string;
  href: string;
  bonus?: boolean;
};

export const COURSES: CertCourse[] = [
  {
    idx: "01",
    provider: "Google · Coursera",
    title: "Google AI Essentials",
    tags: [
      { label: "~10 hours" },
      { label: "Free to learn · paid or aid for cert", variant: "paidcert" },
      { label: "Google brand" },
    ],
    description:
      "Google's flagship intro to working with AI: writing better prompts, using AI for everyday work, and the responsibility piece. Free to take; the shareable Google certificate needs the paid certificate option or Coursera financial aid.",
    href: "https://www.coursera.org/specializations/ai-essentials-google",
  },
  {
    idx: "02",
    provider: "DeepLearning.AI · Andrew Ng",
    title: "AI for Everyone",
    tags: [
      { label: "~10 hours" },
      { label: "Free to audit · paid for cert", variant: "paidcert" },
      { label: "Non-technical" },
    ],
    description:
      "Andrew Ng's non-technical overview. Built for anyone — leaders, operators, builders — to understand what AI can and cannot do and how to actually apply it inside an organisation.",
    href: "https://www.coursera.org/learn/ai-for-everyone",
  },
  {
    idx: "03",
    provider: "IBM · Coursera",
    title: "Introduction to Artificial Intelligence (AI)",
    tags: [
      { label: "~11 hours" },
      { label: "Free to audit · paid for cert", variant: "paidcert" },
      { label: "IBM" },
    ],
    description:
      "IBM's foundational course covering what AI is, common use cases, machine learning versus deep learning, and where generative models fit. A solid base before going deeper.",
    href: "https://www.coursera.org/learn/introduction-to-ai",
  },
  {
    idx: "04",
    provider: "Microsoft & LinkedIn",
    title: "Career Essentials in Generative AI",
    tags: [
      { label: "~4 hours" },
      { label: "Free certificate", variant: "free" },
      { label: "Auto-adds to LinkedIn" },
    ],
    description:
      "The fastest real win. A short learning path covering how generative AI works, the main models, ethics, and Copilot. Pass the assessment and the certificate lands on your LinkedIn profile automatically.",
    href: "https://www.linkedin.com/learning/paths/career-essentials-in-generative-ai-by-microsoft-and-linkedin",
  },
  {
    idx: "05",
    provider: "Anthropic Academy",
    title: "AI Fluency: Framework & Foundations",
    tags: [
      { label: "Self-paced" },
      { label: "Free", variant: "free" },
      { label: "Anthropic" },
    ],
    description:
      "Anthropic's own training. Start with \"AI Fluency: Framework & Foundations\" to learn how to actually think with Claude — from prompting to building structured workflows.",
    href: "https://anthropic.skilljar.com",
  },
  {
    idx: "★",
    provider: "Attention Factory",
    title: "AI Generalist Certification",
    tags: [
      { label: "Bonus", variant: "bonus" },
      { label: "Live · hands-on" },
      { label: "Job-ready" },
    ],
    description:
      "Go from theory to actually building. Live, cohort-based, hands-on. Ship real AI projects, gain in-demand skills, and walk away job-ready with a portfolio and the connections to match.",
    href: "https://dub.sh/attn-bravo",
    bonus: true,
  },
];

export const TIPS = [
  {
    body: "Add it under **Licenses & certifications** on LinkedIn, not just in your bio, so it shows up when recruiters filter.",
  },
  {
    body: "List the **specific skill** next to it (prompt engineering, generative AI, AI workflows). Filters scan for keywords, not course names.",
  },
  {
    body: "Apply it within 48 hours. **Build one small thing** with what you learned and post it. A cert plus a project beats five certs and nothing to show.",
  },
];

export const META_PILLS = [
  { value: "4", label: "certifications" },
  { label: "Beginner friendly" },
  { label: "Self-paced" },
  { value: "Shareable to", label: "LinkedIn" },
];
