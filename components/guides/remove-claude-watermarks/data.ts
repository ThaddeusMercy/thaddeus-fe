export const SLUG = "remove-claude-watermarks";

export const REPO_URL = "https://github.com/guillaumemeyer/watermarks-remover";
export const SKILL_URL =
  "https://github.com/guillaumemeyer/watermarks-remover/tree/main/skills/remove-ai-marks";
export const SKILL_MD_URL =
  "https://github.com/guillaumemeyer/watermarks-remover/blob/main/skills/remove-ai-marks/SKILL.md";

export const LAST_CHECKED = "August 19, 2026";

export const STEPS = [
  {
    title: "Open the Watermarks Remover skill",
    body: "Go to the Watermarks Remover repository. Open the skills folder, then remove-ai-marks, then click SKILL.md.",
  },
  {
    title: "Download the skill file",
    body: "Once you open SKILL.md, click Raw. Then click Download raw file and save the file to your computer.",
  },
  {
    title: "Add the skill to Claude",
    body: "Open Claude and click Customize. Click Skills, open the dropdown, select Upload skill, and upload the file you downloaded. Once the upload is complete, make sure Watermarks Remover is enabled in your Skills list.",
  },
  {
    title: "Remove the watermark patterns",
    body: "Open a new Claude chat and type /remove-ai-marks, then paste the text you want Claude to clean underneath the command. Claude will check the text and rewrite the watermark patterns it detects.",
  },
  {
    title: "Review the result",
    body: "Read the cleaned version before copying it. Make sure Claude has not changed any names, links, numbers, examples, or important details in your original text.",
  },
] as const;

export const COMMAND_EXAMPLE = `/remove-ai-marks

Paste your text here.`;

export const PRO_TIP_PROMPT = `/remove-ai-marks

Keep the original meaning, tone, names, numbers, links and examples. Only rewrite what is needed to remove the watermark patterns you detect.

[Paste your text here]`;

export const REFERENCES = [
  {
    label: "How Claude marks AI-generated content",
    href: "https://support.claude.com/en/articles/16266773-how-claude-marks-ai-generated-content",
  },
  {
    label: "Watermarks Remover SKILL.md",
    href: "https://github.com/guillaumemeyer/watermarks-remover/blob/main/skills/remove-ai-marks/SKILL.md",
  },
  {
    label: "Statistical watermark mark classes",
    href: "https://github.com/guillaumemeyer/watermarks-remover/blob/main/skills/remove-ai-marks/references/mark-classes.md",
  },
  {
    label: "Use skills in Claude",
    href: "https://support.claude.com/en/articles/12512180-use-skills-in-claude",
  },
] as const;
