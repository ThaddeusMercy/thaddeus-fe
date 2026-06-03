import type { Metadata } from "next";

export const SITE_URL = "https://mercythaddeus.xyz";

export const SITE_TITLE =
  "Mercy Thaddeus — Co-founder, Attention Factory · AI educator";

export const SITE_DESCRIPTION =
  "Mercy Thaddeus (@global_techgirl) — Co-founder of Attention Factory. AI educator helping teams build with applied AI through training, consulting, custom builds, and technical content.";

export const SITE_OG_DESCRIPTION =
  "Co-founder of Attention Factory. AI educator — corporate training, consulting, and applied AI content for teams that need to ship.";

export const SITE_KEYWORDS = [
  "Mercy Thaddeus",
  "Attention Factory",
  "Co-founder",
  "AI Educator",
  "Applied AI",
  "AI Training",
  "Corporate AI",
  "Developer Education",
  "global_techgirl",
  "AI Consulting",
  "Technical Content",
  "Women in Tech",
] as const;

/** Bust Facebook / LinkedIn OG image cache after metadata changes */
export const OG_IMAGE_PATH = "/og-image.png?v=20260603b";

export function buildShareMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      siteName: "Mercy Thaddeus",
      images: [
        {
          url: OG_IMAGE_PATH,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE_PATH],
    },
  };
}
