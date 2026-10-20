"use client";

import { Fragment, useCallback, useState } from "react";
import Link from "next/link";
import { GeistSans } from "geist/font/sans";
import { ArrowLeft } from "@phosphor-icons/react";

import { HOW_STEPS, PROMPTS } from "./data";
import "./fable-five.css";

function highlightBrackets(text: string) {
  return text.split(/(\[[^\]]+\])/g).map((part, i) =>
    part.startsWith("[") && part.endsWith("]") ? (
      <span key={i} className="fb5-fill">
        {part}
      </span>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}

function PromptBlock({
  num,
  title,
  sub,
  code,
}: {
  num: string;
  title: string;
  sub: string;
  code: string;
}) {
  const [copied, setCopied] = useState(false);

  const onCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = code;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  }, [code]);

  return (
    <article className="fb5-prompt">
      <div className="fb5-p-head">
        <span className="fb5-p-num">{num}</span>
        <h3 className="fb5-p-title">{title}</h3>
      </div>
      <p className="fb5-p-sub">{sub}</p>

      <div className="fb5-box">
        <button
          type="button"
          className={`fb5-copy${copied ? " fb5-done" : ""}`}
          onClick={onCopy}
        >
          {copied ? "Copied" : "Copy"}
        </button>
        <pre className="fb5-box-body">{highlightBrackets(code)}</pre>
      </div>
    </article>
  );
}

export default function FableFiveGuide() {
  return (
    <div className={`fb5-guide ${GeistSans.className}`}>
      <Link href="/guide" className="fb5-back">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        All guides
      </Link>

      <header className="fb5-hero">
        <span className="fb5-eyebrow">Attention Factory · Fable Playbook</span>
        <h1>
          The three prompts
          <span className="fb5-thin"> I&apos;d run on Fable.</span>
        </h1>
        <p className="fb5-lede">
          Fable 5.1 is the current Fable model. Fable 5 is the older one. Free
          plans do not include Fable. On Pro it draws from usage credits. On
          Max, and on Team premium seats, it sits inside half of your weekly
          limits. Enterprise includes it. The useful move is still a big
          one-shot job that leaves you with assets you can keep running on
          Sonnet or Haiku. Plan access changes, so check Claude&apos;s pricing
          page before you assume yours includes it. Here are the exact prompts.
        </p>
      </header>

      <section className="fb5-how">
        <h2>How to run these</h2>
        <ol>
          {HOW_STEPS.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <div className="fb5-rule" aria-hidden />

      <div className="fb5-prompts">
        {PROMPTS.map((prompt) => (
          <PromptBlock key={prompt.num} {...prompt} />
        ))}
      </div>

      <footer className="fb5-foot">
        <p className="fb5-brand">Attention Factory</p>
        <p className="fb5-foot-note">
          Save this. Run one when the job is big enough to leave you something
          you can reuse.
        </p>
      </footer>
    </div>
  );
}
