"use client";

import { motion } from "framer-motion";

import {
  TOOLKIT_ENTRIES,
  TOOLKIT_META,
} from "@/components/guides/toolkit-data";

function ToolSection({ entry }: { entry: (typeof TOOLKIT_ENTRIES)[number] }) {
  return (
    <section
      id={`tool-${entry.id}`}
      className="scroll-mt-28 border-t border-border pt-10 first:border-t-0 first:pt-0"
    >
      <h2 className="text-lg font-semibold text-[#1a1a1a] md:text-xl">
        <span className="mr-2 font-mono text-sm text-[#D8D8D8]">
          {entry.id}
        </span>
        {entry.name}
      </h2>
      <p className="mt-1 text-sm font-medium text-[#676767]">{entry.tagline}</p>

      <div className="mt-6 space-y-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-[#999]">
            What I use it for
          </p>
          <p className="mt-2 leading-relaxed">{entry.whatFor}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-[#999]">
            Why this matters
          </p>
          <p className="mt-2 leading-relaxed">{entry.whyMatters}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-[#999]">
            How you can do this
          </p>
          <ul className="mt-2 list-disc space-y-2 pl-5 leading-relaxed">
            {entry.howTo.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default function ToolkitView() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="mx-auto w-full max-w-2xl space-y-10"
    >
      <header className="space-y-4 border-b border-border pb-8">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#D8D8D8]">
          {TOOLKIT_META.kicker} · {TOOLKIT_META.handle}
        </p>
        <h1 className="text-2xl font-bold leading-tight text-[#1a1a1a] md:text-3xl">
          {TOOLKIT_META.title}
        </h1>
        <p className="leading-relaxed">{TOOLKIT_META.subtitle}</p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-[#676767]">
          <span>By {TOOLKIT_META.author}</span>
          <span className="text-[#D8D8D8]">·</span>
          <span>{TOOLKIT_META.role}</span>
        </div>
        <div className="flex flex-wrap gap-2 pt-1">
          <span className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-[#676767]">
            {TOOLKIT_META.toolCount}
          </span>
          <span className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-[#676767]">
            {TOOLKIT_META.usage}
          </span>
        </div>
      </header>

      <nav
        aria-label="Toolkit tools"
        className="rounded-2xl border border-border bg-secondary/60 p-5 md:p-6"
      >
        <p className="text-xs font-semibold uppercase tracking-wide text-[#999]">
          Jump to
        </p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {TOOLKIT_ENTRIES.map((entry) => (
            <li key={entry.id}>
              <a
                href={`#tool-${entry.id}`}
                className="inline-flex rounded-full border border-border bg-white px-3 py-1.5 text-sm font-medium text-[#676767] transition-colors hover:border-[#1a1a1a] hover:text-[#1a1a1a]"
              >
                <span className="mr-1.5 font-mono text-xs text-[#D8D8D8]">
                  {entry.id}
                </span>
                {entry.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="space-y-10">
        {TOOLKIT_ENTRIES.map((entry) => (
          <ToolSection key={entry.id} entry={entry} />
        ))}
      </div>

      <footer className="space-y-4 border-t border-border pt-10">
        <h2 className="text-lg font-semibold text-[#1a1a1a] md:text-xl">
          {TOOLKIT_META.closing.heading}
        </h2>
        <p className="whitespace-pre-wrap leading-relaxed">
          {TOOLKIT_META.closing.body}
        </p>
        <div className="space-y-1 pt-2 text-sm text-[#676767]">
          <p className="font-medium text-[#1a1a1a]">{TOOLKIT_META.author}</p>
          <p>{TOOLKIT_META.closing.signoff}</p>
          <p>{TOOLKIT_META.role}</p>
          <p>{TOOLKIT_META.closing.site}</p>
        </div>
      </footer>
    </motion.div>
  );
}
