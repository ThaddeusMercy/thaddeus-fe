"use client";

import { useEffect, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

import PromptVaultIndex from "@/components/blog/PromptVaultIndex";
import PromptVaultCollectionView from "@/components/blog/PromptVaultCollectionView";
import { resolvePromptVaultPost } from "@/components/blog/prompt-vault-data";
import ToolkitView from "@/components/guides/ToolkitView";
import GuideLinks from "@/components/guides/GuideLinks";
import GuidesIndex from "@/components/guides/GuidesIndex";
import {
  GUIDE_PROMPTS_INDEX,
  type GuideSubTab,
  guideHubHref,
} from "@/lib/guide-urls";
import { trackEvent } from "@/lib/analytics";

const TABS: { id: GuideSubTab; label: string }[] = [
  { id: "guides", label: "Guides" },
  { id: "prompts", label: "Prompts" },
  { id: "tools", label: "Toolkit" },
  { id: "links", label: "Links" },
];

function parseSub(raw: string | null): GuideSubTab {
  if (raw === "prompts" || raw === "tools" || raw === "links") return raw;
  return "guides";
}

export default function GuideHub() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sub = parseSub(searchParams.get("sub"));
  const postSlug = searchParams.get("post");

  const resolvedPost = useMemo(
    () => (postSlug ? resolvePromptVaultPost(postSlug) : undefined),
    [postSlug],
  );

  useEffect(() => {
    if (postSlug && sub !== "prompts") {
      router.replace(guideHubHref("prompts", { post: postSlug }), {
        scroll: false,
      });
    }
  }, [postSlug, sub, router]);

  const setSub = (next: GuideSubTab) => {
    trackEvent("guide_subtab_click", { subtab: next });
    router.push(guideHubHref(next), { scroll: false });
  };

  return (
    <div className="space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-wrap gap-2 rounded-xl border border-border bg-secondary p-1.5"
      >
        {TABS.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            onClick={() => setSub(id)}
            className={`min-w-[100px] flex-1 rounded-lg px-3 py-2 text-center text-sm font-medium transition-colors ${
              sub === id
                ? "bg-white text-[#1a1a1a] shadow-sm"
                : "text-[#676767] hover:text-[#1a1a1a]"
            }`}
          >
            {label}
          </button>
        ))}
      </motion.div>

      {sub === "guides" && <GuidesIndex />}

      {sub === "links" && <GuideLinks />}

      {sub === "tools" && <ToolkitView />}

      {sub === "prompts" && (
        <div className="mx-auto w-full max-w-2xl">
          {resolvedPost ? (
            <PromptVaultCollectionView
              collection={resolvedPost.collection}
              backHref={GUIDE_PROMPTS_INDEX}
              highlightSlug={resolvedPost.highlightSlug}
              analyticsPlacement="guide_route"
            />
          ) : postSlug ? (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4 rounded-2xl border border-dashed border-border bg-secondary p-6 text-center"
            >
              <p className="text-sm text-[#676767]">That post doesn&apos;t exist.</p>
              <a
                href={GUIDE_PROMPTS_INDEX}
                className="text-sm font-medium text-[#1a1a1a] underline underline-offset-2"
              >
                Back to prompts
              </a>
            </motion.div>
          ) : (
            <PromptVaultIndex
              linkBase="guide_route"
              analyticsPlacement="guide_route"
            />
          )}
        </div>
      )}
    </div>
  );
}
