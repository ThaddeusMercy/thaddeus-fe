export const SLUG = "claude-marketing-skills";

export const OFFICIAL_LINKS = [
  {
    label: "Official website",
    href: "https://marketing-skills.com/",
  },
  {
    label: "See all 49 skills",
    href: "https://marketing-skills.com/skills",
  },
  {
    label: "GitHub repository",
    href: "https://github.com/coreyhaines31/marketingskills",
  },
] as const;

export const SKILL_EXAMPLES = [
  {
    name: "copywriting",
    body: "helps Claude write marketing copy",
  },
  {
    name: "seo-audit",
    body: "helps Claude review a website for SEO problems",
  },
  {
    name: "emails",
    body: "helps Claude write email flows",
  },
  {
    name: "cro",
    body: "helps Claude find things that may stop people from buying or signing up",
  },
] as const;

export const AUDIENCES = [
  "Business owners",
  "Founders",
  "Freelancers and consultants",
  "Marketers",
  "Creators who sell products or services",
  "Developers building and promoting a product",
] as const;

export const SKILL_GROUPS = [
  {
    title: "Research and planning",
    skills: [
      "analytics",
      "attribution",
      "competitor-profiling",
      "competitors",
      "customer-research",
      "marketing-council",
      "marketing-ideas",
      "marketing-plan",
      "marketing-psychology",
      "product-marketing",
    ],
  },
  {
    title: "Content and creative work",
    skills: [
      "ad-creative",
      "content-strategy",
      "copy-editing",
      "copywriting",
      "image",
      "social",
      "video",
    ],
  },
  {
    title: "SEO and discovery",
    skills: [
      "ai-seo",
      "aso",
      "directory-submissions",
      "programmatic-seo",
      "schema",
      "seo-audit",
      "site-architecture",
    ],
  },
  {
    title: "Getting new customers",
    skills: [
      "ads",
      "co-marketing",
      "cold-email",
      "community-marketing",
      "influencer-marketing",
      "launch",
      "prospecting",
      "public-relations",
      "sales-enablement",
    ],
  },
  {
    title: "Conversion and lead generation",
    skills: [
      "ab-testing",
      "cro",
      "free-tools",
      "lead-magnets",
      "offers",
      "paywalls",
      "popups",
      "pricing",
      "signup",
    ],
  },
  {
    title: "Retention and revenue",
    skills: [
      "churn-prevention",
      "emails",
      "marketing-loops",
      "onboarding",
      "referrals",
      "revops",
      "sms",
    ],
  },
] as const;

export const CLAUDE_INSTALL_STEPS = [
  "Open the GitHub repository: https://github.com/coreyhaines31/marketingskills",
  "Click Code.",
  "Click Download ZIP.",
  "Unzip the downloaded file on your computer.",
  "Open the skills folder.",
  "Choose the skill you want, such as content-strategy, copywriting, or seo-audit.",
  "Compress that one skill folder into a new ZIP file.",
  "Keep the SKILL.md file inside the skill folder.",
  "Open Claude.",
  "Go to Customize.",
  "Select Skills.",
  "Click the plus icon.",
  "Select Create skill.",
  "Select Upload a skill.",
  "Upload the ZIP file.",
  "Make sure the skill is turned on.",
] as const;

export const NPX_INSTALL =
  "npx skills add coreyhaines31/marketingskills -a claude-code";

export const PLUGIN_MARKETPLACE =
  "/plugin marketplace add coreyhaines31/marketingskills";

export const PLUGIN_INSTALL = "/plugin install marketing-skills";

export const STARTERS = [
  {
    title: "Content strategy",
    body: "Use this to plan what to post, which topics to cover, and how your content connects to your offer.",
  },
  {
    title: "Copywriting",
    body: "Use this for landing pages, sales pages, product pages, headlines, and calls to action.",
  },
  {
    title: "Emails",
    body: "Use this for welcome emails, nurture emails, sales emails, follow-ups, and win-back emails.",
  },
  {
    title: "SEO audit",
    body: "Use this to find content and technical problems that may stop your website from ranking.",
  },
  {
    title: "CRO",
    body: "CRO means conversion rate optimization. Use it to find things that may stop visitors from signing up, booking, or buying.",
  },
] as const;

export const PROMPT_PRODUCT = `Use the product-marketing skill to create a clear marketing profile for my business.

Business: [WHAT YOU DO]
Audience: [WHO YOU HELP]
Offer: [WHAT YOU SELL]
Main problem: [THE PROBLEM YOU SOLVE]
Main result: [THE RESULT YOU HELP PEOPLE GET]
Competitors: [ADD LINKS OR NAMES]

Ask me any questions you need before you create it.`;

export const PROMPT_CONTENT = `Use the content-strategy skill to create a 30-day content plan for my business.

Business: [WHAT YOU DO]
Audience: [WHO YOU HELP]
Offer: [WHAT YOU SELL]
Goal: [AWARENESS, LEADS, SALES, OR COMMUNITY]
Platforms: [INSTAGRAM, LINKEDIN, YOUTUBE, OR OTHERS]

Give me content themes, post ideas, hooks, formats, and calls to action.`;

export const PROMPT_LANDING = `Use the cro and copywriting skills to review this landing page:
[URL OR PASTE THE COPY]

My audience is [AUDIENCE].
I want them to [BOOK, BUY, SIGN UP, OR ANOTHER ACTION].

Tell me what is unclear, what may reduce trust, and what I should change. Then rewrite the page.`;

export const PROMPT_EMAILS = `Use the emails skill to create a five-email welcome sequence.

Business: [BUSINESS]
Why the person joined: [LEAD MAGNET OR SIGNUP REASON]
Offer: [OFFER]
Audience: [AUDIENCE]
Tone: [TONE]

For each email, give me the subject line, preview text, body, and call to action.`;

export const PROMPT_COMPETITORS = `Use the competitor-profiling and competitors skills to study these businesses:
[LINKS]

Compare their audience, offer, pricing, proof, content, and calls to action. Show me the gaps my business can use without copying them.`;

export const PROMPT_ADS = `Use the ads and ad-creative skills to create five ad ideas for this offer:
[OFFER]

Audience: [AUDIENCE]
Problem: [PROBLEM]
Result: [RESULT]
Platform: [META, LINKEDIN, GOOGLE, OR ANOTHER PLATFORM]

For each idea, give me the angle, hook, visual idea, main copy, headline, and call to action.`;

export const BETTER_RESULTS = [
  "Your business",
  "Your audience",
  "Your offer",
  "Your main goal",
  "Your current marketing",
  "Your brand voice",
  "Any facts or rules it must follow",
] as const;

export const IMPORTANT_NOTES = [
  "Read every result before you publish it",
  "Check prices, facts, claims, and numbers",
  "A skill does not automatically connect Claude to your website, ad account, or analytics",
  "Do not upload private customer data without removing personal information",
  "Check the GitHub repository for updates because skill names and steps can change",
] as const;

export const FAQS = [
  {
    q: "Are all 49 skills free?",
    a: "Yes. The library is open source and free to install.",
  },
  {
    q: "Can I install all 49 in normal Claude?",
    a: "You can upload custom skills to regular Claude, but it is easier to install only the ones you need. Claude Code is better for installing the full library at once.",
  },
  {
    q: "Will Claude use the skill automatically?",
    a: "Claude can pick a skill when your request matches it. You can also name the skill in your prompt so the choice is clear.",
  },
  {
    q: "Can these skills run my marketing without me?",
    a: "They can help you research, plan, write, and review your work. You still need to give Claude the right information and approve anything that will be published or sent.",
  },
  {
    q: "Which skill should I install first?",
    a: "Start with product-marketing, then add the skill that matches your next task.",
  },
] as const;
