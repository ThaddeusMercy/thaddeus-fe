export const CANVA_CLAUDE_SLUG = "design-with-claude-canva";

export const SETUP_STEPS = [
  {
    title: "Open Claude and go to Customize",
    body: "Bottom-left menu, then Customize.",
  },
  {
    title: "Click Connectors",
    body: "You'll see the list of apps you can link.",
  },
  {
    title: "Click Add, then Browse connectors",
    body: "This opens the full connector directory.",
  },
  {
    title: "Search for Canva and click Add",
    body: "Sign in to your Canva account when it asks.",
  },
  {
    title: "Done. Canva is linked to Claude",
    body: "Now you can ask Claude to design straight into Canva.",
  },
] as const;

export const PROMPT_CARDS = [
  {
    label: "Make one design",
    text: "You have access to Canva. Act as my brand designer. Brand: [name]. Colors: [hex codes]. Fonts: [fonts]. Vibe: [3 words]. Create a [carousel / flyer / poster] about [topic]. Build it directly in Canva in my brand style and give me the link to open and edit it.",
  },
  {
    label: "A week of content at once",
    text: "Using Canva, create a week of Instagram posts for [brand] about [theme]. Seven designs in my brand style: colors [hex], fonts [fonts]. Vary the layouts so they don't look identical. Build them all in Canva and send me the links.",
  },
  {
    label: "Idea into a carousel",
    text: "Using Canva, turn this idea into a 7-slide Instagram carousel: [your idea]. Use my brand colors [hex] and fonts [fonts]. Strong hook on slide one, clear CTA on the last slide. Build it in Canva so I can edit it.",
  },
] as const;

export const TIPS = [
  {
    lead: "Open it and tweak by hand.",
    rest: "Once a design lands, open it in Canva and adjust any element. Claude does the heavy lifting, you keep full control.",
  },
] as const;
