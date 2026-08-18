"use client";

import { Fragment, useCallback, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

import { CHOOSER, COMBOS, MODES, STRUCTURE } from "./data";
import "./chatgpt-prompt-modes.css";

function highlightBrackets(text: string) {
  return text.split(/(\[[^\]]+\])/g).map((part, i) =>
    part.startsWith("[") && part.endsWith("]") ? (
      <span key={i} className="cpm-fill">
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
    <div className="cpm-block">
      <div className="cpm-block-head">
        <span className="cpm-block-label">{label}</span>
        <button
          type="button"
          className={`cpm-copy${copied ? " cpm-done" : ""}`}
          onClick={onCopy}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre>{highlightBrackets(text)}</pre>
    </div>
  );
}

export default function ChatGptPromptModesGuide() {
  return (
    <div className="cpm-guide">
      <Link href="/guide" className="cpm-back">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        All guides
      </Link>

      <header className="cpm-hero">
        <p className="cpm-eyebrow">Prompt guide · ChatGPT</p>
        <h1>7 ChatGPT prompt modes for better answers</h1>
        <p className="cpm-lede">
          Stop only telling ChatGPT what to do. These reusable modes tell it how
          to approach the task — as a critic, interviewer, creative director,
          CEO, or consultant.
        </p>
      </header>

      <section className="cpm-section">
        <p>Most people tell ChatGPT what task to complete.</p>
        <p>
          They ask it to write a caption, review an idea, plan a launch, or help
          with a decision.
        </p>
        <p>
          But the task is only one part of a good prompt. You can also tell
          ChatGPT what approach to use.
        </p>
        <p>
          The same business idea can be challenged by a Red Team, questioned
          using a Socratic approach, reduced to priorities in CEO Mode, or turned
          into a structured recommendation in Consultant Mode.
        </p>
        <p>
          These are reusable prompt instructions. You do not need to switch on a
          hidden setting. Copy the mode you need, paste it into ChatGPT, then add
          your real task and context.
        </p>
        <div className="cpm-note">
          <p>
            OpenAI recommends making prompts clear and specific, including enough
            context, and refining the prompt after reviewing the first response.
          </p>
        </div>
      </section>

      <section className="cpm-section">
        <h2>How to use the modes</h2>
        <p>Choose one mode based on the result you need.</p>
        <p>
          Add your goal, audience, current situation, constraints, and preferred
          output. Do not combine all seven in one prompt because they give
          ChatGPT different jobs.
        </p>
        <p>Use this basic structure:</p>
        <CopyBlock label="Prompt structure" text={STRUCTURE} />
        <nav className="cpm-map" aria-label="Seven modes">
          {MODES.map((mode) => (
            <a key={mode.id} className="cpm-map-item" href={`#${mode.id}`}>
              <div className="cpm-map-n">{mode.num}</div>
              <div>
                <strong>{mode.name}</strong>
                <span>{mode.when}</span>
              </div>
            </a>
          ))}
        </nav>
      </section>

      {MODES.map((mode) => (
        <section className="cpm-section" id={mode.id} key={mode.id}>
          <p className="cpm-num">{mode.num}</p>
          <h2>{mode.name}</h2>
          <p className="cpm-deck">{mode.when}</p>
          <p>{mode.works}</p>
          <CopyBlock label={`Copy ${mode.name}`} text={mode.prompt} />
          <div className="cpm-example">
            <p>Example</p>
            <pre>{highlightBrackets(mode.example)}</pre>
          </div>
        </section>
      ))}

      <section className="cpm-section">
        <h2>Which mode should you choose?</h2>
        <ul className="cpm-check">
          {CHOOSER.map((row) => (
            <li key={row.mode}>
              <strong>Use {row.mode}</strong> {row.use}.
            </li>
          ))}
        </ul>
      </section>

      <section className="cpm-section">
        <h2>Useful combinations</h2>
        <ul className="cpm-check">
          {COMBOS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="cpm-section">
        <h2>Final reminder</h2>
        <p>A mode cannot replace good context.</p>
        <p>
          Tell ChatGPT what you are working on, who it is for, what you have
          already tried, your constraints, and what a useful answer should
          contain.
        </p>
        <p>
          For important financial, legal, health, or business decisions, check
          the facts and use the response as one input rather than your only
          source.
        </p>
        <p className="cpm-checked">Last checked: August 18, 2026</p>
        <p className="cpm-sig">MERCY THADDEUS &nbsp;|&nbsp; ATTENTION FACTORY</p>
      </section>
    </div>
  );
}
