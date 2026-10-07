export const SLUG = "recreate-website-chatgpt-figma";

export const NEED_ITEMS = [
  "ChatGPT",
  "A Figma account",
  "The Figma connection/plugin for ChatGPT or Codex",
  "Google Chrome",
  "A full-page screenshot extension such as GoFullPage",
  "A website you want to use as inspiration",
] as const;

export const SCREENSHOT_STEPS = [
  "Set your browser window to desktop size.",
  "Close popups, cookie banners or chat widgets if possible.",
  "Let all images on the page load.",
  "Scroll through the page once if the website lazy-loads images.",
  "Run the full-page screenshot extension.",
  "Save the result as a PNG.",
] as const;

export const FIGMA_INSPECT = [
  "section order",
  "spacing",
  "typography",
  "card sizes",
  "buttons",
  "navigation",
  "page width",
  "image placement",
  "mobile considerations",
] as const;

export const ITERATE_EXAMPLES = [
  "Reduce the hero height by about 20%.",
  "Make the cards slightly less rounded.",
  "The spacing between sections is too large.",
  "Make the navigation closer to the reference.",
  "Try a stronger typography hierarchy.",
] as const;

export const BRAND_INPUTS = [
  "brand name",
  "logo",
  "colors",
  "fonts",
  "product screenshots",
  "photography",
  "services",
  "offers",
  "website copy",
  "audience",
  "examples of your existing content",
] as const;

export const APPROVE_CHECKS = [
  "Does this actually look like my brand?",
  "Is the copy correct?",
  "Is every section necessary?",
  "Does the hierarchy make sense?",
  "Are the buttons and calls to action obvious?",
  "Do I like the spacing?",
  "Does it look good at different screen sizes?",
] as const;

export const BUILD_MATCH = [
  "layout",
  "spacing",
  "typography",
  "colors",
  "components",
  "border radius",
  "images",
  "responsive behavior",
  "buttons",
  "navigation",
  "section proportions",
] as const;

export const COMPARE_CHECKS = [
  "spacing",
  "font sizes",
  "element positions",
  "widths",
  "heights",
  "image crops",
  "colors",
  "buttons",
  "borders",
  "alignment",
] as const;

export const ABOUT_REUSE = [
  "typography",
  "spacing system",
  "navigation",
  "buttons",
  "color palette",
  "grid",
  "cards",
  "footer",
  "visual language",
] as const;

export const MOTION_CHECKS = [
  "entrance animations",
  "scrolling behavior",
  "sticky sections",
  "parallax",
  "text animation",
  "image transitions",
  "hover states",
  "page transitions",
  "timing",
  "easing",
  "element movement",
] as const;

export const WORKFLOW_STEPS = [
  "Reference",
  "understand",
  "design",
  "customize",
  "approve",
  "develop",
  "compare",
  "refine",
] as const;

export const PROMPT_ANALYZE = `Study this website screenshot carefully.

I want to use it as design inspiration for a completely original website.

Break down the visual system first, including:

- page structure
- sections
- spacing
- grid
- typography hierarchy
- color usage
- button styles
- cards
- borders
- corner radius
- navigation
- image treatment
- repeated components
- visual hierarchy
- desktop layout

Do not copy the original brand, logo, text, illustrations or proprietary assets.

Explain the design system you would create in Figma before you make anything.`;

export const PROMPT_RECREATE = `Now recreate this page as an editable Figma Design.

Use the screenshot as a visual reference for the quality, layout, spacing and hierarchy, but make the design structurally clean and editable.

Use proper Figma components, auto layout and reusable styles where appropriate.

Do not copy the original logo, brand name, text or proprietary images.

Create placeholders for content that we will replace with my brand next.`;

export const PROMPT_BRAND = `Now transform this reference-based design into an original website for my brand.

Brand: [NAME]

What we do:
[EXPLAIN YOUR BUSINESS]

Audience:
[DESCRIBE YOUR AUDIENCE]

Brand personality:
[DESCRIBE THE FEELING]

Brand colors:
[COLORS]

I want to keep the level of design quality and some of the layout ideas from the reference, but the final site must clearly feel like a different brand.

Change the colors, typography, imagery, shapes, copy, visual details and components where necessary.

Use my real content instead of the reference content.

Keep the design coherent across the entire page.`;

export const PROMPT_BUILD = `Use the approved Figma design for this project as the source of truth.

Build the website so the implementation closely matches the approved design.

Reproduce the:

- layout
- spacing
- typography
- colors
- components
- border radius
- images
- responsive behavior
- buttons
- navigation
- section proportions

Make the website responsive for desktop, tablet and mobile.

Create reusable components instead of repeating code.

Do not redesign the page while implementing it. If you think a design change is necessary, tell me before changing it.

Once the first implementation is complete, compare the result against the Figma design and fix the visible differences.`;

export const PROMPT_STACK = `Build it using Next.js and Tailwind CSS.`;

export const PROMPT_COMPARE = `Open the website and compare it against the approved Figma design.

Check the page section by section.

Look for differences in:

- spacing
- font sizes
- element positions
- widths
- heights
- image crops
- colors
- buttons
- borders
- alignment

Fix the differences you find and check the page again.`;

export const PROMPT_ABOUT_DESIGN = `Using the same Figma design system we created for the homepage, design an About page.

Reuse the same:

- typography
- spacing system
- navigation
- buttons
- color palette
- grid
- cards
- footer
- visual language

Do not build the page yet.

Create the design in Figma first so I can approve it.`;

export const PROMPT_ABOUT_BUILD = `The About page is approved. Now implement it in the existing website.`;

export const PROMPT_MOTION = `Study this recording and the attached screenshots.

Document every important interaction and animation you can identify, including:

- entrance animations
- scrolling behavior
- sticky sections
- parallax
- text animation
- image transitions
- hover states
- page transitions
- timing
- easing
- element movement

First create the static states in Figma.

Then prototype the interactions that make sense to represent in Figma.

For animations that should be implemented in code rather than Figma, create a motion specification describing exactly how they should behave.`;

export const PROMPT_MASTER = `I have attached a full-page screenshot of a website I like.

I want to use it as inspiration for an original website for my own brand. Do not copy the company's logo, text, proprietary imagery or branding.

First analyze the reference and identify its design system, page structure, spacing, typography, components and visual hierarchy.

Then use Figma to create an editable design inspired by those principles.

Before you create the final version, ask me for my brand information and use it to change the colors, typography, imagery, copy, components and visual details so the result clearly belongs to my brand.

Use reusable Figma components, variables and auto layout where appropriate.

Do not start developing the website until I approve the Figma design.

Once I approve it, build the responsive website using the Figma file as the source of truth.

After building it, compare the implementation against the approved Figma design and correct visible differences.`;
