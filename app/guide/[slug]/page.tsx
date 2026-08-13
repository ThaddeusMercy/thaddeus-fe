import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { ComponentType } from "react";

import GuidePostView from "@/components/guides/GuidePostView";
import GuideShell from "@/components/guides/GuideShell";
import {
  GUIDE_ENTRIES,
  getGuideBySlug,
} from "@/components/guides/guides-data";
import { buildShareMetadata } from "@/lib/site-metadata";

type PageProps = { params: Promise<{ slug: string }> };

/** Lazy map — keeps Cloudflare/OpenNext worker under size limits. */
const GUIDE_LOADERS: Record<
  string,
  () => Promise<{ default: ComponentType }>
> = {
  "google-ai-tools": () =>
    import("@/components/guides/google-ai-tools/GoogleAiToolsGuide"),
  "claude-marketing-skills": () =>
    import(
      "@/components/guides/claude-marketing-skills/ClaudeMarketingSkillsGuide"
    ),
  "omniroute": () =>
    import("@/components/guides/omniroute/OmniRouteGuide"),
  "agent-reach": () =>
    import("@/components/guides/agent-reach/AgentReachGuide"),
  "five-ai-employees": () =>
    import("@/components/guides/five-ai-employees/FiveAiEmployeesGuide"),
  "how-to-set-up-claude": () =>
    import("@/components/guides/claude-setup/ClaudeSetupGuide"),
  "3-prompts-better-ai-results": () =>
    import(
      "@/components/guides/three-prompts-better-results/ThreePromptsBetterGuide"
    ),
  "5-ai-tools-worth-your-money": () =>
    import("@/components/guides/five-ai-tools/FiveAiToolsGuide"),
  "ai-influencer-three-files": () =>
    import("@/components/guides/ai-influencer-three-files/AiInfluencerThreeFilesGuide"),
  "humanize-setup": () =>
    import("@/components/guides/humanize-setup/HumanizeSetupGuide"),
  "edit-videos-with-claude": () =>
    import("@/components/guides/edit-videos-claude/EditVideosClaudeGuide"),
  "transcriptx-claude-setup": () =>
    import("@/components/guides/transcriptx-claude/TranscriptxClaudeGuide"),
  "100-chatgpt-secret-codes": () =>
    import("@/components/guides/chatgpt-secret-codes/ChatGptSecretCodesGuide"),
  "vet-ai-skills": () =>
    import("@/components/guides/vet-ai-skills/VetAiSkillsGuide"),
  "chatgpt-upgrade-playbook": () =>
    import("@/components/guides/chatgpt-upgrade/ChatGptUpgradeGuide"),
  "fable-five-prompts": () =>
    import("@/components/guides/fable-five/FableFiveGuide"),
  "five-claude-connectors": () =>
    import("@/components/guides/claude-connectors/ClaudeConnectorsGuide"),
  "claude-goal-command": () =>
    import("@/components/guides/goal-command/GoalCommandGuide"),
  "six-claude-content-skills": () =>
    import("@/components/guides/claude-skills/ClaudeSkillsGuide"),
  "design-with-claude-canva": () =>
    import("@/components/guides/canva-claude/CanvaClaudeGuide"),
  "claude-tag-playbook": () =>
    import("@/components/guides/claude-tag/ClaudeTagGuide"),
  "connect-claude-to-socials": () =>
    import("@/components/guides/metricool-claude/MetricoolClaudeGuide"),
  "anime-storyboard-to-video": () =>
    import("@/components/guides/anime-storyboard/AnimeStoryboardGuide"),
  "ai-clone-method": () =>
    import("@/components/guides/ai-clone-method/AiCloneMethodGuide"),
  "build-your-ai-influencer": () =>
    import("@/components/guides/ai-influencer/AiInfluencerGuide"),
  "heygen-video-translate": () =>
    import("@/components/guides/heygen-translate/HeyGenTranslateGuide"),
  "3-prompts-stop-ai-lying": () =>
    import("@/components/guides/anti-lying-prompts/AntiLyingPromptsGuide"),
  "30-day-ai-roadmap": () =>
    import("@/components/guides/ai-roadmap/AiRoadmapGuide"),
  "the-ai-job-map": () =>
    import("@/components/guides/ai-job-map/AiJobMapGuide"),
  "markitdown-mcp-claude-setup": () =>
    import("@/components/guides/markitdown-setup/MarkItDownSetupGuide"),
  "ai-certifications-weekend": () =>
    import("@/components/guides/ai-certifications/AiCertificationsGuide"),
  "thirty-claude-codes": () =>
    import("@/components/guides/thirty-claude-codes/ThirtyClaudeCodesGuide"),
};

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

  const loader = GUIDE_LOADERS[slug];
  let content: React.ReactNode;

  if (loader) {
    const mod = await loader();
    const Guide = mod.default;
    content = <Guide />;
  } else {
    content = (
      <div className="mx-auto max-w-2xl px-4 py-12 md:py-16">
        <GuidePostView entry={entry} />
      </div>
    );
  }

  return <GuideShell>{content}</GuideShell>;
}
