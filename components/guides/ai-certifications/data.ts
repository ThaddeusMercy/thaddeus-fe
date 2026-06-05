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
  tags: { label: string; variant?: "free" | "paidcert" }[];
  description: string;
  href: string;
};

export const COURSES: CertCourse[] = [
  {
    idx: "01",
    provider: "Microsoft & LinkedIn",
    title: "Career Essentials in Generative AI",
    tags: [
      { label: "~4 hours" },
      { label: "Free certificate", variant: "free" },
      { label: "Auto-adds to LinkedIn" },
    ],
    description:
      "The fastest real win here. A short learning path covering how generative AI works, the main models, ethics, and Copilot. Pass the assessment and the certificate lands on your LinkedIn profile automatically.",
    href: "https://www.linkedin.com/learning/paths/career-essentials-in-generative-ai-by-microsoft-and-linkedin",
  },
  {
    idx: "02",
    provider: "University of Helsinki",
    title: "Elements of AI",
    tags: [
      { label: "Self-paced" },
      { label: "Free certificate", variant: "free" },
      { label: "University-issued" },
    ],
    description:
      "A genuinely respected free course from the University of Helsinki. Start with the \"Introduction to AI\" track, which is the weekend-sized one, and earn a certificate issued by an actual university. No coding required.",
    href: "https://www.elementsofai.com",
  },
  {
    idx: "03",
    provider: "Google · Coursera",
    title: "Google AI Essentials",
    tags: [
      { label: "~10 hours" },
      { label: "Free to learn · paid or aid for cert", variant: "paidcert" },
      { label: "Google brand" },
    ],
    description:
      "The most recognised name on this list. Hands-on practice using AI to write, plan, and speed up everyday work. Free to take; the shareable Google certificate needs the paid certificate option or Coursera financial aid.",
    href: "https://www.coursera.org/learn/google-ai-essentials",
  },
  {
    idx: "04",
    provider: "Google · Coursera",
    title: "Google Prompting Essentials",
    tags: [
      { label: "~9 hours" },
      { label: "Free to learn · paid or aid for cert", variant: "paidcert" },
      { label: "Most underrated skill" },
    ],
    description:
      "Prompting is the skill that decides whether AI feels overhyped or saves you hours. Learn a simple 5-step framework for prompts that consistently deliver. Same free-to-learn, paid-or-aid-for-certificate model as above.",
    href: "https://www.coursera.org/learn/google-prompting-essentials",
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
