"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, MagnifyingGlass } from "@phosphor-icons/react";
import Image from "next/image";

import { PROMPT_VAULT_ENTRIES } from "@/components/blog/prompt-vault-data";
import type { PromptVaultEntry } from "@/components/blog/prompt-vault-data";
import {
  WEBINAR_BANNER_ALT,
  WEBINAR_BANNER_SRC,
  WEBINAR_WAITLIST_URL,
} from "@/lib/webinar";

function matchesQuery(entry: PromptVaultEntry, q: string): boolean {
  if (!q.trim()) return true;
  const s = q.trim().toLowerCase();
  return (
    entry.title.toLowerCase().includes(s) ||
    entry.id.toLowerCase().includes(s) ||
    entry.prompt.toLowerCase().includes(s) ||
    entry.howToUse.toLowerCase().includes(s)
  );
}

const Resources = () => {
  const searchParams = useSearchParams();

  const [subTab, setSubTab] = useState<"prompts" | "links">("prompts");
  const [search, setSearch] = useState("");
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);

  const sub = searchParams.get("sub");

  useEffect(() => {
    if (sub === "links") setSubTab("links");
    if (sub === "prompts") setSubTab("prompts");
  }, [sub]);

  const filtered = useMemo(
    () => PROMPT_VAULT_ENTRIES.filter((e) => matchesQuery(e, search)),
    [search],
  );

  useEffect(() => {
    setActive((i) => (filtered.length === 0 ? 0 : Math.min(i, filtered.length - 1)));
  }, [filtered.length]);

  const current = filtered[active] ?? filtered[0];

  const copyPrompt = useCallback(async () => {
    if (!current) return;
    try {
      await navigator.clipboard.writeText(current.prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      console.error("Copy failed");
    }
  }, [current]);

  return (
    <div className="space-y-10">
      <div className="flex flex-wrap gap-2 rounded-xl border border-border bg-secondary p-1.5">
        {(
          [
            ["prompts", "Prompts"],
            ["links", "Links"],
          ] as const
        ).map(([key, label]) => (
          <button
            key={key}
            type="button"
            onClick={() => setSubTab(key)}
            className={`flex-1 min-w-[100px] rounded-lg px-3 py-2 text-center text-sm font-medium transition-colors ${
              subTab === key
                ? "bg-white text-[#1a1a1a] shadow-sm"
                : "text-[#676767] hover:text-[#1a1a1a]"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {subTab === "links" && (
        <motion.section
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6 rounded-2xl border border-border bg-secondary p-6"
        >
          <div>
            <h2 className="text-lg font-semibold text-[#1a1a1a]">
              Opportunities in the Age of AI
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              Free webinar — register on the waitlist. Tap the banner to open
              registration.
            </p>
            <a
              href={WEBINAR_WAITLIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block overflow-hidden rounded-xl border border-border bg-white shadow-sm transition-opacity hover:opacity-95"
            >
              <Image
                src={WEBINAR_BANNER_SRC}
                alt={WEBINAR_BANNER_ALT}
                width={1200}
                height={800}
                className="h-auto w-full object-cover"
                sizes="(max-width: 768px) 100vw, 600px"
                unoptimized
              />
            </a>
            <a
              href={WEBINAR_WAITLIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex rounded-full bg-[#1a1a1a] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#333]"
            >
              nestuge.com/attnhq-waitlist →
            </a>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#1a1a1a]">Want more?</h2>
            <p className="mt-3 leading-relaxed">
              I&apos;m hosting a free webinar on creating AI images and videos
              that actually convert to income and make businesses stand out.
            </p>
            <p className="mt-4 text-sm font-medium text-[#1a1a1a]">
              Follow for the link →{" "}
              <a
                href="https://instagram.com/mercythaddeus_"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:no-underline"
              >
                @mercythaddeus_
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[#1a1a1a]">
              Attention Factory
            </h3>
            <p className="mt-2 leading-relaxed">
              Creative systems for brands and builders working with AI-native
              content.
            </p>
            <a
              href="https://attentionfactory.io?ref=mercythaddeus"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex rounded-full border border-border bg-white px-5 py-2.5 text-sm font-medium text-[#1a1a1a] transition-colors hover:bg-border"
            >
              attentionfactory.io →
            </a>
          </div>
          <p className="text-xs text-[#999]">
            © Attention Factory · attentionfactory.io
          </p>
        </motion.section>
      )}

      {subTab === "prompts" && (
        <div className="space-y-10">
          <header className="space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#D8D8D8]">
              The Prompt Vault
            </p>
            <h1 className="text-2xl font-bold leading-tight md:text-3xl">
              10 AI prompts to actually make your images and videos look good.
            </h1>
            <p className="text-sm font-medium uppercase tracking-wide text-[#D8D8D8]">
              Mercy Thaddeus <span className="text-border">{"//"}</span>{" "}
              Attention Factory
            </p>
            <p className="leading-relaxed">
              Stop typing &quot;make this image 4K.&quot; That is not how you
              get a good result.
            </p>
            <p className="leading-relaxed">
              Copy the full block, paste into Nano Banana, GPT Image, Gemini, or
              Midjourney — upload your reference where prompted.
            </p>
           
          </header>

          <div className="relative">
            <MagnifyingGlass
              className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#999]"
              aria-hidden
            />
            <input
              type="search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setActive(0);
              }}
              placeholder="Search prompts by name or keyword…"
              className="w-full rounded-xl border border-border bg-white py-3 pl-11 pr-4 text-sm outline-none ring-0 transition-shadow focus:border-[#1a1a1a] focus:shadow-sm"
              aria-label="Search prompts"
            />
          </div>

          <section className="space-y-3">
            <h2 className="text-sm font-semibold uppercase tracking-wide">
              In this vault
            </h2>
            {filtered.length === 0 ? (
              <p className="rounded-xl border border-dashed border-border bg-secondary px-4 py-6 text-sm text-[#D8D8D8]">
                No prompts match &quot;{search}&quot;. Clear the search to see
                all 10.
              </p>
            ) : (
              <nav
                aria-label="Prompt tabs"
                className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {filtered.map((p, i) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setActive(i)}
                    className={`shrink-0 rounded-full border px-3 py-2 text-left text-xs font-medium transition-colors sm:text-sm ${
                      active === i
                        ? "border-[#1a1a1a] bg-[#1a1a1a] text-white"
                        : "border-border bg-white text-[#676767] hover:bg-secondary"
                    }`}
                  >
                    <span className="text-[10px] opacity-80 sm:text-xs">
                      {p.tab}
                    </span>
                    <span className="mt-0.5 block max-w-[7rem] truncate sm:max-w-[9rem]">
                      {p.title}
                    </span>
                  </button>
                ))}
              </nav>
            )}
          </section>

          {current && (
            <AnimatePresence mode="wait">
              <motion.section
                key={current.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="space-y-5 rounded-2xl border border-border bg-secondary p-5 md:p-6"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="font-mono text-sm text-[#D8D8D8]">
                      {current.id}
                      {" //"}
                    </p>
                    <h2 className="text-xl font-bold md:text-2xl">
                      {current.title}
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={copyPrompt}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-border"
                  >
                    {copied ? (
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

                <pre className="whitespace-pre-wrap break-words rounded-xl border border-border bg-white p-4 font-sans text-sm leading-relaxed text-[#1a1a1a]">
                  {current.prompt}
                </pre>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#D8D8D8]">
                    How to use →
                  </p>
                  <p className="mt-2 leading-relaxed">{current.howToUse}</p>
                </div>
              </motion.section>
            </AnimatePresence>
          )}
        </div>
      )}
    </div>
  );
};

export default Resources;
