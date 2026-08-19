"use client";

import { motion } from "framer-motion";

import { trackEvent } from "@/lib/analytics";

const GuideLinks = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6 rounded-2xl border border-border bg-secondary p-6"
    >
      <header className="space-y-3 border-b border-border pb-6">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#D8D8D8]">
          Links
        </p>
        <h1 className="text-2xl font-bold leading-tight text-[#1a1a1a] md:text-3xl">
          Community &amp; Attention Factory
        </h1>
        <p className="leading-relaxed">
          Curated links from the old resources tab — follow or go deeper with
          the team.
        </p>
      </header>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-lg font-semibold text-[#1a1a1a]">Want more?</h2>
        <p className="mt-3 leading-relaxed">
          I post workflows, tool breakdowns, and free guides for using AI at
          work.
        </p>
        <p className="mt-4 text-sm font-medium text-[#1a1a1a]">
          Follow for updates →{" "}
          <a
            href="https://instagram.com/mercythaddeus_"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-pink-500"
            onClick={() =>
              trackEvent("guide_outbound_click", { destination: "instagram" })
            }
          >
            @mercythaddeus_
          </a>
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
      >
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
          onClick={() =>
            trackEvent("guide_outbound_click", {
              destination: "attention_factory",
            })
          }
        >
          attentionfactory.io →
        </a>
      </motion.div>

      <p className="text-xs text-[#999]">
        © Attention Factory · attentionfactory.io
      </p>
    </motion.section>
  );
};

export default GuideLinks;
