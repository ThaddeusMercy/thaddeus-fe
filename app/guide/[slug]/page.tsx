import { notFound } from "next/navigation";
import type { Metadata } from "next";

import GuidePostView from "@/components/guides/GuidePostView";
import HeyGenTranslateGuide from "@/components/guides/heygen-translate/HeyGenTranslateGuide";
import { HEYGEN_TRANSLATE_SLUG } from "@/components/guides/heygen-translate/data";
import AntiLyingPromptsGuide from "@/components/guides/anti-lying-prompts/AntiLyingPromptsGuide";
import { ANTI_LYING_PROMPTS_SLUG } from "@/components/guides/anti-lying-prompts/data";
import AiRoadmapGuide from "@/components/guides/ai-roadmap/AiRoadmapGuide";
import { AI_ROADMAP_SLUG } from "@/components/guides/ai-roadmap/data";
import AiJobMapGuide from "@/components/guides/ai-job-map/AiJobMapGuide";
import { AI_JOB_MAP_SLUG } from "@/components/guides/ai-job-map/data";
import MarkItDownSetupGuide from "@/components/guides/markitdown-setup/MarkItDownSetupGuide";
import { MARKITDOWN_SETUP_SLUG } from "@/components/guides/markitdown-setup/data";
import AiCertificationsGuide from "@/components/guides/ai-certifications/AiCertificationsGuide";
import { AI_CERTIFICATIONS_SLUG } from "@/components/guides/ai-certifications/data";
import ThirtyClaudeCodesGuide from "@/components/guides/thirty-claude-codes/ThirtyClaudeCodesGuide";
import { THIRTY_CLAUDE_CODES_SLUG } from "@/components/guides/thirty-claude-codes/data";
import {
  GUIDE_ENTRIES,
  getGuideBySlug,
} from "@/components/guides/guides-data";
import { buildShareMetadata } from "@/lib/site-metadata";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return GUIDE_ENTRIES.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getGuideBySlug(slug);
  if (!entry) return { title: "Guide not found" };

  return buildShareMetadata({
    title: entry.title,
    description: entry.excerpt,
    path: `/guide/${slug}`,
  });
}

export default async function GuidePostPage({ params }: PageProps) {
  const { slug } = await params;
  const entry = getGuideBySlug(slug);
  if (!entry) notFound();

  if (slug === HEYGEN_TRANSLATE_SLUG) {
    return <HeyGenTranslateGuide />;
  }

  if (slug === ANTI_LYING_PROMPTS_SLUG) {
    return <AntiLyingPromptsGuide />;
  }

  if (slug === AI_ROADMAP_SLUG) {
    return <AiRoadmapGuide />;
  }

  if (slug === AI_JOB_MAP_SLUG) {
    return <AiJobMapGuide />;
  }

  if (slug === MARKITDOWN_SETUP_SLUG) {
    return <MarkItDownSetupGuide />;
  }

  if (slug === AI_CERTIFICATIONS_SLUG) {
    return <AiCertificationsGuide />;
  }

  if (slug === THIRTY_CLAUDE_CODES_SLUG) {
    return <ThirtyClaudeCodesGuide />;
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-12 md:py-16">
      <GuidePostView entry={entry} />
    </div>
  );
}
