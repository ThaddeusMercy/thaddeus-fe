"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Copy, Check } from "@phosphor-icons/react";

import type { PromptVaultEntry } from "@/components/blog/prompt-vault-data";
import { trackEvent } from "@/lib/analytics";

type PromptPostViewProps = {
  entry: PromptVaultEntry;
  backHref: string;
  backLabel?: string;
  analyticsPlacement?: "guide_route" | "blog_route";
};

export default function PromptPostView({
  entry,
  backHref,
  backLabel = "All prompts",
  analyticsPlacement = "guide_route",
}: PromptPostViewProps) {
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
    <motion.article
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <Link
        href={backHref}
        className="inline-flex items-center gap-2 text-sm font-medium text-[#676767] transition-colors hover:text-[#1a1a1a]"
        onClick={() =>
          trackEvent("resources_prompt_back", {
            prompt_id: entry.id,
            placement: analyticsPlacement,
          })
        }
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        {backLabel}
      </Link>

      <header className="space-y-3 border-b border-border pb-8">
        <p className="font-mono text-sm text-[#D8D8D8]">
          {entry.id}
          {" //"} Prompt vault
        </p>
        <h1 className="text-2xl font-bold leading-tight text-[#1a1a1a] md:text-3xl">
          {entry.title}
        </h1>
        <p className="text-sm font-medium uppercase tracking-wide text-[#D8D8D8]">
          Mercy Thaddeus <span className="text-border">{"//"}</span> Attention
          Factory
        </p>
      </header>

      <section className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-5 rounded-2xl border border-border bg-secondary p-5 md:p-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap items-start justify-between gap-3"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-[#999]">
              Full prompt
            </p>
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
                  Copy
                </>
              )}
            </button>
          </motion.div>

          <pre className="whitespace-pre-wrap break-words rounded-xl border border-border bg-white p-4 font-sans text-sm leading-relaxed text-[#1a1a1a]">
            {entry.prompt}
          </pre>
        </motion.div>

        <div className="rounded-2xl border border-border bg-white p-5 md:p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#D8D8D8]">
            How to use
          </p>
          <p className="mt-3 leading-relaxed">{entry.howToUse}</p>
          <p className="mt-4 text-sm leading-relaxed text-[#999]">
            Paste into Nano Banana, GPT Image, Gemini, or Midjourney — upload
            your reference where the prompt asks for it.
          </p>
        </div>
      </section>
    </motion.article>
  );
}
