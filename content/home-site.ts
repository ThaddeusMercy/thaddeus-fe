export const homeBanner = {
  lead: "The teams that learn applied AI now are going to look back at this moment as",
  emphasis: "the turning point.",
} as const;

export const UNIVERSITY_URL = "https://academy.attentionfactory.io/ai-university";

/** Top-of-home launch strip (University launch, Oct 2026). */
export const homeLaunch = {
  label: "New",
  text: "AI University is open.",
  cta: "See the 9 programs",
  href: `${UNIVERSITY_URL}?ref=mercythaddeus`,
} as const;

export type HomeFindItem = {
  num: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  external?: boolean;
};

export const homeFindHere: {
  heading: string;
  items: HomeFindItem[];
} = {
  heading: "Pick your next move",
  items: [
    {
      num: "01",
      title: "AI University",
      description:
        "Nine structured programs for people starting from zero. Learn to use AI properly, create with it, build with it and get paid for it, one practical lesson at a time.",
      cta: "Explore the programs",
      href: `${UNIVERSITY_URL}?ref=mercythaddeus`,
      external: true,
    },
    {
      num: "02",
      title: "Free guides",
      description:
        "Copy-paste playbooks for ChatGPT, Claude, AI video, websites and your career. New ones every week.",
      cta: "Browse the guides",
      href: "/guide",
    },
    {
      num: "03",
      title: "Weekends of AI",
      description:
        "Free live classes every Saturday. Practical AI for learning, content, business and everyday work.",
      cta: "Join the next class",
      href: "https://weekendsofai.com",
      external: true,
    },
    {
      num: "04",
      title: "Train your team",
      description:
        "Corporate AI training, masterclasses and consulting through Attention Factory for marketing, creative, ops and founder teams.",
      cta: "Work with Attention Factory",
      href: "https://attentionfactory.io?ref=mercythaddeus",
      external: true,
    },
  ],
};

export const homeRecentGuides = {
  heading: "Recent free guides",
  all: { label: "See all guides", href: "/guide" },
  items: [
    {
      title: "26 ChatGPT photo codes",
      href: "/guide/chatgpt-photo-commands",
    },
    {
      title: "7 AI tools every content creator should know",
      href: "/guide/ai-tools-for-content-creators",
    },
    {
      title: "5 GitHub repos you should save this week",
      href: "/guide/github-repos-of-the-week-1",
    },
    {
      title: "7 AI jobs you're probably already qualified for",
      href: "/guide/ai-jobs-youre-already-qualified-for",
    },
  ],
} as const;

export const homeConsult = {
  heading: "Implementing AI into your business?",
  body: "If you want help implementing AI, training, audits, or custom builds, shoot me an email. Include your budget, scope, and a little about your team.",
  email: "collab@mercythaddeus.xyz",
  cta: "Email me",
} as const;

export const homeSocialCta = {
  heading: "Want applied AI tips every day?",
  body: "I post workflows, tool breakdowns, and resources for using AI at work — follow along so you don't miss one.",
  links: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/mercythaddeus_",
    },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@global_techgirl",
    },
  ],
} as const;

export const homeFooter = {
  legal: "© 2026 Mercy Thaddeus. All rights reserved.",
} as const;
