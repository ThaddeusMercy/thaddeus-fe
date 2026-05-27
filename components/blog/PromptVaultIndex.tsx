"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";

import { PROMPT_VAULT_COLLECTIONS } from "@/components/blog/prompt-vault-data";
import { guideHubHref } from "@/lib/guide-urls";
import { trackEvent } from "@/lib/analytics";

type PromptVaultIndexProps = {
  linkBase?: "guide_route" | "blog_route";
  analyticsPlacement?: "guide_route" | "blog_route";
};

function collectionHref(
  slug: string,
  linkBase: PromptVaultIndexProps["linkBase"],
) {
  if (linkBase === "blog_route") {
    return `/blog/prompt-vault/${slug}`;
  }
  return guideHubHref("prompts", { post: slug });
}

export default function PromptVaultIndex({
  linkBase = "guide_route",
  analyticsPlacement = "guide_route",
}: PromptVaultIndexProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-10"
    >
      <header className="space-y-4 border-b border-border pb-8">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#D8D8D8]">
          The Prompt Vault
        </p>
        <h1 className="text-2xl font-bold leading-tight text-[#1a1a1a] md:text-3xl">
          Prompts
        </h1>
        <p className="text-sm font-medium uppercase tracking-wide text-[#D8D8D8]">
          Mercy Thaddeus <span className="text-border">{"//"}</span> Attention
          Factory
        </p>
        <p className="leading-relaxed">
          Copy-paste prompt playbooks — open a post, run the chain, copy what you
          need.
        </p>
      </header>

      <ul className="divide-y divide-border rounded-2xl border border-border bg-white">
        {PROMPT_VAULT_COLLECTIONS.map((collection, index) => {
          const href = collectionHref(collection.slug, linkBase);
          const num = String(index + 1).padStart(2, "0");

          return (
            <li key={collection.slug}>
              <Link
                href={href}
                className="group flex flex-col gap-3 px-5 py-6 transition-colors hover:bg-secondary sm:flex-row sm:items-start sm:justify-between sm:gap-6 md:px-6"
                onClick={() =>
                  trackEvent("resources_prompt_open", {
                    prompt_id: "collection",
                    prompt_slug: collection.slug,
                    placement: analyticsPlacement,
                  })
                }
              >
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="min-w-0 flex-1 space-y-2"
                >
                  <p className="font-mono text-xs text-[#D8D8D8]">{num}</p>
                  <h2 className="text-lg font-semibold text-[#1a1a1a] group-hover:underline md:text-xl">
                    {collection.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-[#676767]">
                    {collection.excerpt}
                  </p>
                </motion.div>
                <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-[#1a1a1a] opacity-80 transition-opacity group-hover:opacity-100">
                  Read post
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
}
