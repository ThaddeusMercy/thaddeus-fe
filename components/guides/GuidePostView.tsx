"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Check, Copy } from "@phosphor-icons/react";

import type { GuideEntry } from "@/components/guides/guides-data";
import { linkifyText } from "@/lib/linkify";
type GuidePostViewProps = {
  entry: GuideEntry;
};

export default function GuidePostView({ entry }: GuidePostViewProps) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyText = useCallback(async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    } catch {
      console.error("Copy failed");
    }
  }, []);

  return (
    <motion.article
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <Link
        href="/guide"
        className="inline-flex items-center gap-2 text-sm font-medium text-[#676767] transition-colors hover:text-[#1a1a1a]"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        All guides
      </Link>

      <header className="space-y-3 border-b border-border pb-8">
        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#999]">
          {entry.category}
        </p>
        <h1 className="text-2xl font-bold leading-tight text-[#1a1a1a] md:text-3xl">
          {entry.title}
        </h1>
        <p className="text-sm font-medium uppercase tracking-wide text-[#D8D8D8]">
          Mercy Thaddeus <span className="text-border">{"//"}</span> Attention
          Factory
        </p>
        <p className="leading-relaxed">{entry.excerpt}</p>
        <p className="text-xs text-[#999]">
          {entry.tools.map((t) => t.replace("-", " ")).join(" · ")}
        </p>
      </header>

      <div className="space-y-8">
        {entry.sections.map((section, i) => (
          <section key={section.heading} className="space-y-4">
            <h2 className="text-lg font-semibold text-[#1a1a1a] md:text-xl">
              {section.heading}
            </h2>
            {section.body ? (
              <p className="leading-relaxed whitespace-pre-wrap">
                {linkifyText(section.body)}
              </p>
            ) : null}
            {section.prompt ? (
              <div className="rounded-2xl border border-border bg-secondary p-5 md:p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#999]">
                    Copy prompt
                  </p>
                  <button
                    type="button"
                    onClick={() => copyText(section.prompt!, `p-${i}`)}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-border"
                  >
                    {copiedKey === `p-${i}` ? (
                      <>
                        <Check
                          className="h-4 w-4 text-green-600"
                          weight="bold"
                        />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        Copy
                      </>
                    )}
                  </button>
                </div>
                <pre className="mt-4 whitespace-pre-wrap break-words rounded-xl border border-border bg-white p-4 font-sans text-sm leading-relaxed text-[#1a1a1a]">
                  {section.prompt}
                </pre>
              </div>
            ) : null}
          </section>
        ))}
      </div>
    </motion.article>
  );
}
