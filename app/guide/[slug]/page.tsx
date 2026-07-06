import { notFound } from "next/navigation";
import type { Metadata } from "next";

import GuidePostView from "@/components/guides/GuidePostView";
import GuideShell from "@/components/guides/GuideShell";
import GoalCommandGuide from "@/components/guides/goal-command/GoalCommandGuide";
import { GOAL_COMMAND_SLUG } from "@/components/guides/goal-command/data";
import CanvaClaudeGuide from "@/components/guides/canva-claude/CanvaClaudeGuide";
import { CANVA_CLAUDE_SLUG } from "@/components/guides/canva-claude/data";
import ClaudeSkillsGuide from "@/components/guides/claude-skills/ClaudeSkillsGuide";
import { CLAUDE_SKILLS_SLUG } from "@/components/guides/claude-skills/data";
import ClaudeTagGuide from "@/components/guides/claude-tag/ClaudeTagGuide";
import { CLAUDE_TAG_SLUG } from "@/components/guides/claude-tag/data";
import MetricoolClaudeGuide from "@/components/guides/metricool-claude/MetricoolClaudeGuide";
import { METRICOOL_CLAUDE_SLUG } from "@/components/guides/metricool-claude/data";
import AnimeStoryboardGuide from "@/components/guides/anime-storyboard/AnimeStoryboardGuide";
import { ANIME_STORYBOARD_SLUG } from "@/components/guides/anime-storyboard/data";
import AiCloneMethodGuide from "@/components/guides/ai-clone-method/AiCloneMethodGuide";
import { AI_CLONE_METHOD_SLUG } from "@/components/guides/ai-clone-method/data";
import AiInfluencerGuide from "@/components/guides/ai-influencer/AiInfluencerGuide";
import { AI_INFLUENCER_SLUG } from "@/components/guides/ai-influencer/data";
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

  let content: React.ReactNode;

  if (slug === GOAL_COMMAND_SLUG) {
    content = <GoalCommandGuide />;
  } else if (slug === CLAUDE_SKILLS_SLUG) {
    content = <ClaudeSkillsGuide />;
  } else if (slug === CANVA_CLAUDE_SLUG) {
    content = <CanvaClaudeGuide />;
  } else if (slug === CLAUDE_TAG_SLUG) {
    content = <ClaudeTagGuide />;
  } else if (slug === METRICOOL_CLAUDE_SLUG) {
    content = <MetricoolClaudeGuide />;
  } else if (slug === ANIME_STORYBOARD_SLUG) {
    content = <AnimeStoryboardGuide />;
  } else if (slug === AI_CLONE_METHOD_SLUG) {
    content = <AiCloneMethodGuide />;
  } else if (slug === AI_INFLUENCER_SLUG) {
    content = <AiInfluencerGuide />;
  } else if (slug === HEYGEN_TRANSLATE_SLUG) {
    content = <HeyGenTranslateGuide />;
  } else if (slug === ANTI_LYING_PROMPTS_SLUG) {
    content = <AntiLyingPromptsGuide />;
  } else if (slug === AI_ROADMAP_SLUG) {
    content = <AiRoadmapGuide />;
  } else if (slug === AI_JOB_MAP_SLUG) {
    content = <AiJobMapGuide />;
  } else if (slug === MARKITDOWN_SETUP_SLUG) {
    content = <MarkItDownSetupGuide />;
  } else if (slug === AI_CERTIFICATIONS_SLUG) {
    content = <AiCertificationsGuide />;
  } else if (slug === THIRTY_CLAUDE_CODES_SLUG) {
    content = <ThirtyClaudeCodesGuide />;
  } else {
    content = (
      <div className="mx-auto max-w-2xl px-4 py-12 md:py-16">
        <GuidePostView entry={entry} />
      </div>
    );
  }

  return <GuideShell>{content}</GuideShell>;
}
