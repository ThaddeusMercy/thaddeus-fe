"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

import { trackEvent } from "@/lib/analytics";
import {
  ALL_PROMPTS,
  HOW_TO_STEPS,
  LESSON_RULES,
  UNIVERSITY_URL,
  WORK_PROMPTS,
  type WorkPrompt,
} from "./data";
import "../chatgpt-study-codes/chatgpt-study-codes.css";
import "./chatgpt-work-prompts.css";

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
    trackEvent("guide_copy", { guide: "chatgpt_work_prompts", block: label });
    setTimeout(() => setCopied(false), 1600);
  }, [label, text]);

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
      <pre>{text}</pre>
    </div>
  );
}

function PromptCard({ item }: { item: WorkPrompt }) {
  return (
    <section className="scs-section" id={item.id}>
      <div className="scs-shortcut-head scs-shortcut-head--loose">
        <span className="scs-shortcut-num">{item.num}</span>
        <h2 className="scs-shortcut-title">{item.title}</h2>
      </div>
      <p>{item.blurb}</p>
      <p className="scs-try">Copy this:</p>
      <CopyBlock label={`Prompt · ${item.title}`} text={item.prompt} />
      <div className="scs-note">
        <p>
          <strong>Tip:</strong> {item.tip}
        </p>
      </div>
    </section>
  );
}

export default function ChatGptWorkPromptsGuide() {
  return (
    <div className="scs-guide wp-guide">
      <Link href="/guide" className="scs-back">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        All guides
      </Link>

      <header className="scs-hero">
        <p className="scs-eyebrow">ChatGPT · Work prompts</p>
        <h1>10 ChatGPT prompts that give you hours back every week</h1>
        <p className="scs-lede">
          Most people use ChatGPT like Google. They ask one question, get one
          answer and close the tab. But your hours don&apos;t go to questions.
          They go to emails, meetings, planning, long documents and the to-do
          list that never ends.
        </p>
        <p>
          These 10 prompts are for exactly those parts of the job. Copy one,
          replace the parts in [square brackets] with your own details, and
          paste it into ChatGPT. They work in the free version, and in Claude
          and Gemini too.
        </p>
        <nav className="scs-toc" aria-label="Prompts">
          {WORK_PROMPTS.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.num} {item.title}
            </a>
          ))}
        </nav>
      </header>

      {WORK_PROMPTS.map((item) => (
        <PromptCard key={item.id} item={item} />
      ))}

      <section className="scs-section" id="all">
        <h2>Copy all 10 prompts</h2>
        <p>Save these somewhere you&apos;ll see them tomorrow morning.</p>
        <CopyBlock label="All 10 work prompts" text={ALL_PROMPTS} />
      </section>

      <section className="scs-section" id="lesson">
        <p className="scs-eyebrow">Free lesson</p>
        <h2>How to make ChatGPT useful for your actual work</h2>
        <p>
          The prompts above work because they follow four rules. Once you know
          them, you can write your own prompt for any task at work.
        </p>
        <ol className="scs-steps">
          {LESSON_RULES.map((rule) => (
            <li key={rule.title}>
              <strong>{rule.title}</strong>
              <p>{rule.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="scs-section" id="how">
        <h2>How to use them</h2>
        <ol>
          {HOW_TO_STEPS.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <p>
          Never paste passwords, bank details or anything confidential from
          your company into ChatGPT. Remove names and private numbers first if
          you&apos;re not sure.
        </p>
      </section>

      <section className="scs-section" id="university">
        <h2>Want to go further than prompts?</h2>
        <div className="scs-cta-box">
          <p>
            <strong>AI University is open.</strong> It&apos;s a structured path
            for people starting from zero, from using ChatGPT properly to
            building websites, creating AI videos and automating your work.
          </p>
          <p>
            Every program is practical, and every one ends with something
            you&apos;ve made.
          </p>
          <a
            className="scs-cta-btn"
            href={UNIVERSITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent("guide_outbound_click", {
                destination: "ai_university",
                source: "chatgpt_work_prompts",
              })
            }
          >
            See AI University →
          </a>
        </div>
      </section>
    </div>
  );
}
