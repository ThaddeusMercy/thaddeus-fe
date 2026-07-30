export const AI_INFLUENCER_THREE_FILES_SLUG = "ai-influencer-three-files";

export type DocKey =
  | "setup"
  | "persona"
  | "brain"
  | "offers"
  | "tools"
  | "growth";

export const TABS: {
  key: DocKey;
  n: string;
  label: string;
  isFile: boolean;
}[] = [
  { key: "setup", n: "Guide", label: "Start here", isFile: false },
  { key: "persona", n: "File 01", label: "persona.md", isFile: true },
  { key: "brain", n: "File 02", label: "brain.md", isFile: true },
  { key: "offers", n: "File 03", label: "offers.md", isFile: true },
  { key: "tools", n: "Guide", label: "The tools", isFile: false },
  { key: "growth", n: "Guide", label: "Growing the page", isFile: false },
];

export function docUrl(key: DocKey) {
  return `/guides/ai-influencer-three-files/${key}.md`;
}
