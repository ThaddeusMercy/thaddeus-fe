import type { ReactNode } from "react";

/** Matches https URLs and common bare domains used in guide copy */
const LINK_PATTERN =
  /(https?:\/\/[^\s<>,)]+|(?:github\.com|remotion\.dev|buildwithclaude\.com)\/[^\s<>,)]+)/g;

const IS_LINK = /^(https?:\/\/|(?:github\.com|remotion\.dev|buildwithclaude\.com)\/)/;

function hrefFor(match: string): string {
  return match.startsWith("http") ? match : `https://${match}`;
}

export function linkifyText(text: string): ReactNode[] {
  const parts = text.split(LINK_PATTERN);
  return parts.map((part, i) => {
    if (!part) return null;
    if (IS_LINK.test(part)) {
      return (
        <a
          key={i}
          href={hrefFor(part)}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-[#1a1a1a] underline underline-offset-2 hover:opacity-80"
        >
          {part}
        </a>
      );
    }
    return part;
  });
}
