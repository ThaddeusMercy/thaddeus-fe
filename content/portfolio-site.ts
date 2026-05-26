/**
 * Landing content — short lines + bullet arrays for scannability.
 * Extend arrays as you ship new work or press.
 */

/** Neutral accent for /guide pages — matches main site grays */
export const ACCENT = "#1a1a1a";

export const hero = {
  eyebrow: "Full-stack engineer · AI educator · CPO",
  headline: "I build. Train. Consult.",
  lead: "Mercy Thaddeus — I build software end to end: APIs, web, data, and shipping in production. Co-founder & CPO at Attention Factory, where I also train teams on applied AI that survives contact with reality.",
  bullets: [
    "Attention Factory: corporate AI training, consulting, and custom builds",
    "Content and workshops for operators who want workflows that stick — not hype",
  ],
  image: {
    src: "/bio/headshot-1.jpg", 
    alt: "Mercy Thaddeus",
  },
  ctaPrimary: { label: "See selected work", href: "#work" },
  ctaSecondary: { label: "Get in touch", href: "#contact" },
} as const;

export const whatIDo = {
  heading: "What I do",
  intro: "Three lanes: build in production, train teams on applied AI, and consult when you need a clear path.",
  pillars: [
    {
      title: "Build",
      points: [
        "Full-stack product work — services, persistence, UI, and release discipline",
        "Stack centers on TypeScript, React, Next.js, Supabase; web3 when the product needs it, not by default",
        "Shipped: TranscriptX, Outfitlog (App Store), Billa — Future Unicorn at Bolt hackathon",
      ],
    },
    {
      title: "Train",
      points: [
        "Corporate AI training and masterclasses through Attention Factory",
        "Workflow-first sessions for marketing, creative, ops, and founders",
        "Platform-native tutorials so people can follow along without a CS degree",
      ],
    },
    {
      title: "Consult",
      points: [
        "Train teams on applied AI: agents, automation, voice, and product-shaped AI features",
        "Consulting on audits, scope, and implementation when you are past the slide-deck phase",
        "If you are stuck between pilot and production, that is the lane I work in",
      ],
    },
  ],
} as const;

export type ProjectCard = {
  title: string;
  role: string;
  tagline: string;
  highlights: string[];
  href: string;
};

export const selectedWork: ProjectCard[] = [
  {
    title: "Attention Factory",
    role: "Co-founder · CPO",
    tagline: "AI education, training, and consulting for teams that need outcomes—not buzzwords.",
    highlights: [
      "Corporate programs, content systems, agents, voice, custom builds",
      "Creative, corporate, and nonprofit clients",
    ],
    href: "https://attentionfactory.io?ref=mercythaddeus",
  },
  {
    title: "TranscriptX",
    role: "Founder",
    tagline: "Fast transcription with a calm dashboard and real subscription revenue.",
    highlights: ["Live product with paying users", "Designed for repeat daily use"],
    href: "https://transcriptx.xyz",
  },
  {
    title: "Outfitlog",
    role: "Builder",
    tagline: "Personal style and outfit logging — shipped on the App Store.",
    highlights: [
      "Mobile-first outfit logging and style memory",
      "Live on the App Store",
    ],
    href: "https://apps.apple.com",
  },
  {
    title: "Billa",
    role: "Builder",
    tagline: "Bolt hackathon Future Unicorn — AI-native finance workflow exploration.",
    highlights: ["Concept to demo under pressure", "Clarity over spectacle in money flows"],
    href: "/",
  },
];

export const speaking = {
  heading: "Speaking & teaching",
  intro: "Trainings, keynotes, and rooms where the bar is: can we use this Monday?",
  trainingsHeading: "Trainings & masterclasses",
  trainings: [
    "Multi-day Creative AI masterclass — practical workflows for creators and operators",
    "Full-team AI production workshops (fashion / retail and similar teams)",
    "Hybrid corporate AI training — in-person and virtual",
    "Custom AI playbooks and enablement for internal teams",
    "Ongoing advisory on community and platform strategy",
    "Cross-functional sessions for marketing, creative, and operations",
  ],
  judgingHeading: "Judging · panels · partnerships",
  judging: [
    "Judge — Red Bull Basement Nigeria National Final",
    "Google Labs — creator partner",
  ],
} as const;

export const brandPartners = {
  heading: "Brands & platforms",
  intro: "Tools and programs I work with or represent — not logo walls, just truth in the stack.",
  brands: [
    "Google Labs",
    "Higgsfield AI",
    "Gamma",
    "Kane AI",
    "Kimi AI",
    "Emergent",
    "Red Bull Basement",
  ],
} as const;

export const press = {
  heading: "Press & recognition",
  items: [
    {
      year: "",
      outlet: "Google Labs",
      line: "Creator partner",
    },
    {
      year: "",
      outlet: "Bolt Hackathon",
      line: "Future Unicorn — Billa",
    },
    {
      year: "",
      outlet: "Red Bull Basement Nigeria",
      line: "National Final judge",
    },
  ],
} as const;

export type WritingBlock = {
  title: string;
  points: string[];
  href: string;
  linkLabel: string;
  extraLinks?: { label: string; href: string }[];
};

export const writing: {
  heading: string;
  intro: string;
  blocks: WritingBlock[];
} = {
  heading: "Writing & content",
  intro: "Signal over noise — tools, workflows, and lessons you can reuse.",
  blocks: [
    {
      title: "Attention Factory",
      points: [
        "Practical AI for teams and operators",
        "Training adjacencies and long-form breakdowns",
      ],
      href: "https://attentionfactory.io?ref=mercythaddeus",
      linkLabel: "Visit Attention Factory →",
    },
    {
      title: "Free guides",
      points: [
        "Setup, prompts, workflows, and career playbooks — filterable library",
        "Same material as corporate trainings, free to read",
      ],
      href: "/guide",
      linkLabel: "Browse free guides →",
    },
    {
      title: "Blog",
      points: [
        "Essays and shorter notes on AI, building, and tools worth using",
        "Same voice as the trainings — concrete, no mystique",
      ],
      href: "/?tab=blog",
      linkLabel: "Open blog →",
    },
    {
      title: "Social & video",
      points: [
        "Tutorials and build-in-public on Instagram, TikTok, X, LinkedIn",
        "Same voice as the trainings — step-by-step, no mystique",
      ],
      href: "https://www.instagram.com/mercythaddeus_",
      linkLabel: "Instagram →",
      extraLinks: [
        { label: "X @global_techgirl", href: "https://x.com/global_techgirl" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/mercythaddeus" },
      ],
    },
  ],
};

export const contact = {
  heading: "Let's work together",
  lead: "Limited slots per quarter for partnerships, consulting, and speaking.",
  bullets: [
    "Attention Factory engagements: training, audits, implementation",
    "Brand and platform partnerships: integrations I actually use",
    "Keynotes & private workshops: send context, dates, and audience",
  ],
  lines: [
    {
      label: "Attention Factory",
      email: "hello@attentionfactory.io",
      href: "mailto:hello@attentionfactory.io",
    },
    {
      label: "Partnerships & speaking",
      email: "collab@mercythaddeus.xyz",
      href: "mailto:collab@mercythaddeus.xyz",
    },
  ],
} as const;

export const siteFooter = {
  location: "Mercy Thaddeus · Lagos, Nigeria",
  legal: "© 2026 Mercy Thaddeus. Built with care.",
  nav: [
    { label: "Home", href: "/" },
    { label: "Work", href: "/#work" },
    { label: "Speaking", href: "/#speaking" },
    { label: "Guides", href: "/guide" },
    { label: "Writing", href: "/?tab=blog" },
    { label: "Contact", href: "/#contact" },
    {
      label: "Attention Factory",
      href: "https://attentionfactory.io?ref=mercythaddeus",
    },
  ],
} as const;
