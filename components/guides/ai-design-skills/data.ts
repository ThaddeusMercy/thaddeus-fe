export const SLUG = "ai-design-skills";

export const OFFICIAL_LINKS = [
  {
    label: "How to use skills in Claude",
    href: "https://support.claude.com/en/articles/12512180-use-skills-in-claude",
  },
  {
    label: "How to create and package a custom skill",
    href: "https://support.claude.com/en/articles/12512198-how-to-create-custom-skills",
  },
  {
    label: "Claude Skills directory",
    href: "https://support.claude.com/en/articles/14328846-browse-skills-connectors-and-plugins-in-one-directory",
  },
  {
    label: "Claude Code skill documentation",
    href: "https://code.claude.com/docs/en/skills",
  },
] as const;

export const SKILLS = [
  {
    id: "frontend-design",
    num: "01",
    name: "Frontend Design",
    body: "Frontend Design is Anthropic's own skill for creating production-ready frontend interfaces with a clear visual direction. Use it for landing pages, dashboards, web apps, components, posters, and other coded interfaces.",
    best: [
      "Starting a new frontend",
      "Choosing a visual direction before coding",
      "Avoiding the same default fonts, gradients, cards, and layouts",
      "Turning a design brief into working code",
    ],
    links: [
      {
        label: "Official source",
        href: "https://github.com/anthropics/skills/tree/main/skills/frontend-design",
      },
      {
        label: "Skill file",
        href: "https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md",
      },
      {
        label: "Claude Code plugin information",
        href: "https://github.com/anthropics/claude-code/tree/main/plugins/frontend-design",
      },
    ],
  },
  {
    id: "impeccable",
    num: "02",
    name: "Impeccable",
    body: "Impeccable adds a design language, review rules, and commands for improving an interface. It is useful when a page works but still feels unfinished, inconsistent, crowded, or visually weak.",
    best: [
      "Improving an existing interface",
      "Finding common AI design patterns",
      "Reviewing spacing, hierarchy, type, color, and interaction details",
      "Applying focused improvement commands instead of rebuilding everything",
    ],
    links: [
      {
        label: "Official website",
        href: "https://impeccable.style",
      },
      {
        label: "Official source",
        href: "https://github.com/pbakaus/impeccable",
      },
    ],
  },
  {
    id: "emils-skills",
    num: "03",
    name: "Emil's Skills",
    body: "Emil's Skills contain interface and animation guidance from design engineer Emil Kowalski. The collection includes skills for animation review, animation improvement, design decisions, UI libraries, and other interface details.",
    best: [
      "Motion and micro-interactions",
      "Reviewing whether an animation should exist",
      "Improving easing, timing, and interaction details",
      "Making an interface feel considered without adding motion everywhere",
    ],
    links: [
      {
        label: "Official source",
        href: "https://github.com/emilkowalski/skills",
      },
    ],
  },
  {
    id: "taste",
    num: "04",
    name: "Taste",
    body: "Taste is a third-party collection built to reduce repetitive AI frontend patterns. It includes a general frontend taste skill and other focused styles.",
    best: [
      "Exploring a stronger visual direction",
      "Controlling layout variation, motion, and visual density",
      "Redesigning an existing project",
      "Creating design references before implementation",
    ],
    links: [
      {
        label: "Official source",
        href: "https://github.com/Leonxlnx/taste-skill",
      },
    ],
  },
  {
    id: "uiux-pro-max",
    num: "05",
    name: "UI/UX Pro Max",
    body: "UI/UX Pro Max is a third-party skill with design system guidance, style references, color palettes, font pairings, UX rules, and support for several frontend and mobile stacks. Use the free open-source repository linked below. This guide does not require or recommend any paid add-on.",
    best: [
      "Generating a design system before coding",
      "Choosing styles, type, and color for a specific product category",
      "Working across React, Next.js, Vue, Svelte, Flutter, SwiftUI, and other supported stacks",
      "Checking common UX and accessibility problems",
    ],
    links: [
      {
        label: "Official source",
        href: "https://github.com/nextlevelbuilder/ui-ux-pro-max-skill",
      },
    ],
  },
] as const;

export const CHOOSER = [
  {
    skill: "Frontend Design",
    use: "for a new website, dashboard, or app",
  },
  {
    skill: "Impeccable",
    use: "when an existing interface needs a careful review and cleanup",
  },
  {
    skill: "Emil's Skills",
    use: "when motion and interaction details are the main problem",
  },
  {
    skill: "Taste",
    use: "when you want a less predictable visual direction",
  },
  {
    skill: "UI/UX Pro Max",
    use: "when you want a structured design system and stack-specific guidance",
  },
] as const;

export const CLAUDE_ZIP_STEPS = [
  "Open the source link for the skill.",
  "Download the repository as a ZIP file.",
  "Extract it on your computer.",
  "Find the exact skill folder you want. It should contain a SKILL.md or skill.md file and any supporting files it needs.",
  "Zip that one skill folder. Keep the folder itself at the root of the ZIP.",
  "Open Claude.",
  "Select Customize.",
  "Select Skills.",
  "Click the plus icon.",
  "Select Create skill.",
  "Select Upload a skill.",
  "Upload the ZIP file.",
  "Turn the skill on.",
] as const;

export const FRONTEND_INSTALL = `/plugin marketplace add anthropics/skills
/plugin install example-skills@anthropic-agent-skills`;

export const IMPECCABLE_NPX = `npx impeccable skills install`;

export const IMPECCABLE_PLUGIN = `/plugin marketplace add pbakaus/impeccable`;

export const EMIL_INSTALL = `npx skills@latest add emilkowalski/skills`;

export const TASTE_INSTALL = `npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend"`;

export const UIPRO_NPM = `npm install -g uipro-cli`;

export const UIPRO_INIT = `uipro init --ai claude`;

export const UIPRO_PLUGIN = `/plugin marketplace add nextlevelbuilder/ui-ux-pro-max-skill
/plugin install ui-ux-pro-max@ui-ux-pro-max-skill`;

export const PROMPT_NEW = `Use [SKILL NAME] to design and build this interface.

Product: [WHAT THE PRODUCT DOES]
Audience: [WHO WILL USE IT]
Main action: [WHAT THE USER SHOULD DO]
Pages or screens: [LIST THEM]
Platform: [WEB, MOBILE, OR BOTH]
Tech stack: [HTML/CSS, REACT, NEXT.JS, VUE, FLUTTER, OR OTHER]
Visual references: [ADD LINKS OR IMAGES]
Brand colors: [ADD COLORS OR SAY OPEN]
Preferred tone: [EDITORIAL, PLAYFUL, MINIMAL, TECHNICAL, LUXURY, OR OTHER]
Must keep: [EXISTING COPY, LOGO, PRODUCT FACTS, OR COMPONENTS]
Must avoid: [SPECIFIC PATTERNS YOU DO NOT WANT]
Accessibility needs: [ADD REQUIREMENTS]

Before coding:
1. Explain the visual direction in plain language
2. Create a small design system for color, type, spacing, radius, borders, shadows, and motion
3. Explain how the references informed the direction without copying them
4. List the main states, including loading, empty, error, hover, focus, and mobile states
5. Ask me to approve the direction

After approval, build the interface. Use real copy where I provide it. Do not invent customer numbers, testimonials, prices, or product claims. Test desktop and mobile views before finishing.`;

export const PROMPT_IMPROVE = `Use [SKILL NAME] to review and improve this existing interface.

Project folder or files: [ADD PATH]
What the product does: [ADD PURPOSE]
Audience: [ADD AUDIENCE]
Main problem I can see: [ADD PROBLEM]
What must not change: [LIST COPY, FEATURES, BRAND ELEMENTS, OR BEHAVIOUR]
Reference images or links: [ADD REFERENCES]

First, audit the current interface. Review hierarchy, spacing, typography, color, contrast, responsiveness, states, accessibility, motion, and repeated AI design patterns.

Return a prioritized list:
- Fix now
- Improve next
- Optional changes

Do not rewrite factual copy or replace the entire visual identity without asking me.
After I approve the plan, make the changes in small steps and show me the result after each step.`;

export const PROMPT_COMPARE = `I want to compare [SKILL A] and [SKILL B] fairly.

Use the same product brief, content, components, and technical constraints for both versions.
Create each version in a separate folder.
Do not let one version reuse the other version's design decisions.

After both are complete, compare:
- Visual direction
- Hierarchy
- Typography
- Spacing
- Color use
- Mobile behaviour
- Accessibility
- Originality
- Code quality
- Ease of future editing

Do not choose a winner only because one version has more animation or decoration. Explain which version better fits the product and audience.`;

export const REFERENCES = [
  "Two to five screenshots or links you genuinely like",
  "A sentence explaining what you like in each reference",
  "A sentence explaining what should not be copied",
  "The product's real audience and main action",
  "The exact copy, logo, images, and product details it must preserve",
] as const;

export const CHECKLIST = [
  "Does the first screen explain the product and main action?",
  "Does the hierarchy make sense without color?",
  "Are body text and buttons readable?",
  "Does the design work on a narrow phone screen?",
  "Are hover, focus, loading, empty, and error states present?",
  "Are animations helping the user rather than slowing them down?",
  "Did Claude invent any claims, prices, logos, or testimonials?",
  "Does the result feel right for this product, not just visually impressive?",
] as const;

export const SECURITY = [
  "Download third-party skills from the creator's source repository",
  "Read the SKILL.md file before installing it",
  "Check scripts before allowing them to run",
  "Do not install a skill that asks for passwords, browser cookies, recovery codes, or unrelated permissions",
  "Test a new skill in a copy of your project",
  "Commit or back up your project before letting a skill make broad changes",
  "Do not paste API keys into a design prompt",
] as const;

export const PROBLEMS = [
  {
    q: "Claude does not use the skill",
    a: "Confirm the skill is turned on. Name it directly in the first line of your prompt. In Claude Code, restart or reload after installation.",
  },
  {
    q: "The ZIP will not upload",
    a: "Check that the ZIP contains one skill folder at its root and that the folder contains SKILL.md or skill.md. Do not zip the whole repository unless the creator says to.",
  },
  {
    q: "Two skills give conflicting results",
    a: "Use one skill at a time. Ask each skill to create a separate version, then choose the rules you want to keep.",
  },
  {
    q: "The design is still generic",
    a: "Add real references, product copy, audience details, and a clear visual direction. Tell Claude which default patterns you do not want, but also tell it what you do want.",
  },
  {
    q: "The design looks good but does not work",
    a: "Ask Claude to test navigation, forms, responsive layouts, keyboard focus, loading states, and errors. Design quality includes behaviour, not only appearance.",
  },
] as const;

export const FAQS = [
  {
    q: "Are all five free?",
    a: "The source repositories in this guide are free to access and install. Some creators may offer separate paid products, services, or courses. You do not need those for the free skills linked here.",
  },
  {
    q: "Can I use the skills in regular Claude?",
    a: "Yes, when the skill is packaged as a valid ZIP. Packages with scripts, data, or several skills may be easier to install in Claude Code using the creator's own installer.",
  },
  {
    q: "Should I install all five?",
    a: "No. Start with the one that matches your task. Add another only when you understand what the first one changes.",
  },
  {
    q: "Will a skill make every design good?",
    a: "No. You still need a clear product brief, useful references, accurate content, and a review of the final result.",
  },
  {
    q: "Can I use them with other AI coding tools?",
    a: "Several of these projects support Codex, Cursor, Gemini CLI, and other tools. Check each repository for its current list and installation path.",
  },
] as const;
