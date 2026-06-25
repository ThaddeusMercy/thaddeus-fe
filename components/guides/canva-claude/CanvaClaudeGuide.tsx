"use client";

import { Fragment, useCallback, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

import { PROMPT_CARDS, SETUP_STEPS, TIPS } from "./data";
import "./canva-claude.css";

function highlightBrackets(text: string) {
  return text.split(/(\[[^\]]+\])/g).map((part, i) =>
    part.startsWith("[") && part.endsWith("]") ? (
      <em key={i}>{part}</em>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}

function PromptCard({ label, text }: { label: string; text: string }) {
  const [copied, setCopied] = useState(false);

  const onCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  }, [text]);

  return (
    <article className="cv-card">
      <div className="cv-card-top">
        <span className="cv-card-label">{label}</span>
        <button
          type="button"
          className={`cv-copy${copied ? " cv-done" : ""}`}
          onClick={onCopy}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <p>&ldquo;{highlightBrackets(text)}&rdquo;</p>
    </article>
  );
}

export default function CanvaClaudeGuide() {
  return (
    <div className="cv-guide">
      <Link href="/guide" className="cv-back">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        All guides
      </Link>

      <header className="cv-head">
        <span className="cv-kicker">AI Series · Part 7</span>
        <h1 className="cv-serif">Make designs by just chatting with Claude</h1>
        <p className="cv-sub">
          Connect Canva to Claude once, then describe what you want. It builds
          your carousels, flyers, banners and posters in your brand style, no
          template hunting.
        </p>
      </header>

      <section className="cv-section">
        <div className="cv-tag cv-serif">Connect Canva to Claude · ~2 min</div>
        <p className="cv-lead">You only do this once.</p>
        <ol className="cv-steps">
          {SETUP_STEPS.map((step) => (
            <li key={step.title}>
              <h3 className="cv-serif">{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="cv-section">
        <div className="cv-tag cv-serif">The prompts</div>
        <p className="cv-lead">
          Swap anything in brackets for your own details, then paste into
          Claude.
        </p>

        <div className="cv-prompts">
          {PROMPT_CARDS.map((card) => (
            <PromptCard key={card.label} label={card.label} text={card.text} />
          ))}
        </div>
      </section>

      <section className="cv-section">
        <div className="cv-tag cv-serif">A quick tip</div>
        <ul className="cv-tips">
          {TIPS.map((tip) => (
            <li key={tip.lead}>
              <strong>{tip.lead}</strong> {tip.rest}
            </li>
          ))}
        </ul>
      </section>

      <footer className="cv-foot">
        <p>
          Claude does the heavy lifting, you keep full control. Describe it
          once and let it design straight into Canva.
        </p>
        <p className="cv-help">
          Stuck on a step? Just reply and I&apos;ll help you sort it out.
        </p>
      </footer>
    </div>
  );
}
