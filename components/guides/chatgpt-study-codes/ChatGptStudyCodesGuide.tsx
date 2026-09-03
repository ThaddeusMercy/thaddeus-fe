"use client";

import { Fragment, useCallback, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

import {
  CUSTOM_CODE_PROMPT,
  EXAMPLE_BASIC,
  EXAMPLE_DETAILED,
  FAQS,
  SECTIONS,
} from "./data";
import "./chatgpt-study-codes.css";

function highlightBrackets(text: string) {
  return text.split(/(\[[^\]]+\])/g).map((part, i) =>
    part.startsWith("[") && part.endsWith("]") ? (
      <span key={i} className="scs-fill">
        {part}
      </span>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}

function CopyBlock({ label, text }: { label: string; text: string }) {
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
    <div className="scs-block">
      <div className="scs-block-head">
        <span className="scs-block-label">{label}</span>
        <button
          type="button"
          className={`scs-copy${copied ? " scs-done" : ""}`}
          onClick={onCopy}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre>{highlightBrackets(text)}</pre>
    </div>
  );
}

export default function ChatGptStudyCodesGuide() {
  return (
    <div className="scs-guide">
      <Link href="/guide" className="scs-back">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        All guides
      </Link>

      <header className="scs-hero">
        <p className="scs-eyebrow">Prompts guide · ChatGPT</p>
        <h1>50 secret ChatGPT codes for studying</h1>
        <p className="scs-lede">
          ChatGPT can do much more than explain a topic. With the right
          commands, you can use it to predict likely exam questions, simplify
          difficult topics, create revision notes, test yourself, and build a
          complete study plan.
        </p>
      </header>

      <section className="scs-section">
        <p>
          This guide gives you 50 commands you can use to study almost any
          topic.
        </p>
      </section>

      <section className="scs-section">
        <h2>Before you start</h2>
        <p>Replace anything in square brackets with your own information.</p>
        <p>Example:</p>
        <CopyBlock label="Example" text={EXAMPLE_BASIC} />
        <p>
          For better answers, you can also add your level, exam type, textbook,
          notes, or syllabus.
        </p>
        <p>Example:</p>
        <CopyBlock label="Detailed example" text={EXAMPLE_DETAILED} />
      </section>

      {SECTIONS.map((section) => (
        <section className="scs-section" key={section.id} id={section.id}>
          <h2>{section.title}</h2>
          {section.codes.map((item) => (
            <div className="scs-shortcut" key={item.code}>
              <div className="scs-shortcut-head">
                <span className="scs-shortcut-code">{item.code}</span>
                <span className="scs-shortcut-num">{item.num}</span>
              </div>
              <p>{item.blurb}</p>
              <CopyBlock label="Copy this" text={item.prompt} />
            </div>
          ))}
        </section>
      ))}

      <section className="scs-section">
        <h2>A prompt that creates your own study code</h2>
        <p>Use this whenever you need a shortcut that is not in the list:</p>
        <CopyBlock label="Custom study code" text={CUSTOM_CODE_PROMPT} />
      </section>

      <section className="scs-section">
        <h2>Frequently asked questions</h2>
        {FAQS.map((faq) => (
          <div className="scs-faq" key={faq.q}>
            <h3>{faq.q}</h3>
            <p>{faq.a}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
