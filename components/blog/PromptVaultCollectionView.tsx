"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Copy, Check } from "@phosphor-icons/react";

import type {
  PromptVaultCollection,
  PromptVaultEntry,
} from "@/components/blog/prompt-vault-data";
import { trackEvent } from "@/lib/analytics";

type PromptVaultCollectionViewProps = {
  collection: PromptVaultCollection;
  backHref: string;
  backLabel?: string;
  analyticsPlacement?: "guide_route" | "blog_route";
  /** Scroll to a prompt when opening via legacy per-prompt URL */
  highlightSlug?: string;
};

function PromptBlock({
  entry,
  analyticsPlacement,
}: {
  entry: PromptVaultEntry;
  analyticsPlacement: "guide_route" | "blog_route";
}) {
  const [copied, setCopied] = useState(false);

  const copyPrompt = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(entry.prompt);
      setCopied(true);
      trackEvent("resources_prompt_copy", {
        prompt_id: entry.id,
        prompt_title: entry.title,
        placement: analyticsPlacement,
      });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      console.error("Copy failed");
    }
  }, [entry, analyticsPlacement]);

  return (
    <section
      id={entry.slug}
      className="scroll-mt-28 border-t border-border pt-10 first:border-t-0 first:pt-0"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="text-lg font-semibold text-[#1a1a1a] md:text-xl">
          <span className="mr-2 font-mono text-sm text-[#D8D8D8]">
            {entry.id}
          </span>
          {entry.title}
        </h2>
        <button
          type="button"
          onClick={copyPrompt}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-border"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4 text-green-600" weight="bold" />
              Copied
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              Copy prompt
            </>
          )}
        </button>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-[#676767]">
        {entry.howToUse}
      </p>
      <pre className="mt-4 whitespace-pre-wrap break-words rounded-xl border border-border bg-secondary p-4 font-sans text-sm leading-relaxed text-[#1a1a1a]">
        {entry.prompt}
      </pre>
    </section>
  );
}

function IntroParagraphs({ intro }: { intro: string }) {
  const paragraphs = intro.split(/\n\n+/).filter(Boolean);
  return (
    <div className="space-y-4 leading-relaxed">
      {paragraphs.map((paragraph, i) => (
        <p key={i} className="whitespace-pre-line">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

export default function PromptVaultCollectionView({
  collection,
  backHref,
  backLabel = "All prompts",
  analyticsPlacement = "guide_route",
  highlightSlug,
}: PromptVaultCollectionViewProps) {
  useEffect(() => {
    if (!highlightSlug) return;
    const el = document.getElementById(highlightSlug);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [highlightSlug]);

  return (
    <motion.article
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-10"
    >
      <Link
        href={backHref}
        className="inline-flex items-center gap-2 text-sm font-medium text-[#676767] transition-colors hover:text-[#1a1a1a]"
        onClick={() =>
          trackEvent("resources_prompt_back", {
            prompt_id: collection.slug,
            placement: analyticsPlacement,
          })
        }
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        {backLabel}
      </Link>

      <header className="space-y-4 border-b border-border pb-8">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#D8D8D8]">
          {collection.kicker ?? "The Prompt Vault"}
        </p>
        <h1 className="text-2xl font-bold leading-tight text-[#1a1a1a] md:text-3xl">
          {collection.title}
        </h1>
        <p className="text-sm font-medium uppercase tracking-wide text-[#D8D8D8]">
          Mercy Thaddeus <span className="text-border">{"//"}</span> Attention
          Factory
        </p>
        <IntroParagraphs intro={collection.intro} />
      </header>

      <nav className="rounded-2xl border border-border bg-secondary p-5 md:p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-[#999]">
          In this post
        </p>
        <ol className="mt-4 space-y-2">
          {collection.entries.map((entry) => (
            <li key={entry.slug}>
              <a
                href={`#${entry.slug}`}
                className="text-sm font-medium text-[#1a1a1a] hover:text-pink-500"
              >
                {entry.id}. {entry.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="space-y-10">
        {collection.entries.map((entry) => (
          <PromptBlock
            key={entry.slug}
            entry={entry}
            analyticsPlacement={analyticsPlacement}
          />
        ))}
      </div>

      {collection.footer ? (
        <div className="space-y-4 border-t border-border pt-8 text-sm leading-relaxed text-[#999]">
          {collection.footer.split(/\n\n+/).map((paragraph, i) => (
            <p key={i} className="whitespace-pre-line">
              {paragraph}
            </p>
          ))}
        </div>
      ) : null}
    </motion.article>
  );
}
