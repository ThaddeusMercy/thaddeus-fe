export const homeBanner = {
  lead: "The teams that learn applied AI now are going to look back at this moment as",
  emphasis: "the turning point.",
} as const;

export type HomeFindItem = {
  title: string;
  description: string;
  href: string;
  external?: boolean;
};

export const homeFindHere: {
  heading: string;
  items: HomeFindItem[];
} = {
  heading: "What you'll find here",
  items: [
    {
      title: "Free guides",
      description:
        "Bite-sized playbooks on Claude setup, workflows, skills, prompts, and career strategy — filter by tool and topic.",
      href: "/guide",
    },
    {
      title: "Prompt vault",
      description:
        "Resume chain, image prompts, and more — open a playbook, copy what you need.",
      href: "/guide?sub=prompts",
    },
    {
      title: "Attention Factory",
      description:
        "Corporate AI training, masterclasses, and consulting for marketing, creative, ops, and founder teams.",
      href: "https://attentionfactory.io?ref=mercythaddeus",
      external: true,
    },
  ],
};

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
