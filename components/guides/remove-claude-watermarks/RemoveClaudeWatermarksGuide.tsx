"use client";

import { Fragment, useCallback, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

import {
  COMMAND_EXAMPLE,
  LAST_CHECKED,
  PRO_TIP_PROMPT,
  REFERENCES,
  REPO_URL,
  SKILL_MD_URL,
  SKILL_URL,
  STEPS,
} from "./data";
import "./remove-claude-watermarks.css";

function highlightBrackets(text: string) {
  return text.split(/(\[[^\]]+\])/g).map((part, i) =>
    part.startsWith("[") && part.endsWith("]") ? (
      <span key={i} className="rcw-fill">
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
    <div className="rcw-block">
      <div className="rcw-block-head">
        <span className="rcw-block-label">{label}</span>
        <button
          type="button"
          className={`rcw-copy${copied ? " rcw-done" : ""}`}
          onClick={onCopy}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre>{highlightBrackets(text)}</pre>
    </div>
  );
}

export default function RemoveClaudeWatermarksGuide() {
  return (
    <div className="rcw-guide">
      <Link href="/guide" className="rcw-back">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        All guides
      </Link>

      <header className="rcw-hero">
        <p className="rcw-eyebrow">Setup guide · Claude skills</p>
        <h1>How to remove Claude watermarks for free</h1>
        <p className="rcw-lede">
          Install this free Claude skill and use one command to remove the
          watermark patterns it detects in your text.
        </p>
        <p className="rcw-meta">Last checked: {LAST_CHECKED}</p>
      </header>

      <section className="rcw-section">
        <h2>The Rundown</h2>
        <p>
          Anthropic has started adding embedded watermarks to text created by
          supported Claude models. Because the watermark is built into
          Claude&apos;s choice of words, it can remain when you copy and paste
          the text or edit parts of it.{" "}
          <a
            href="https://support.claude.com/en/articles/16266773-how-claude-marks-ai-generated-content"
            target="_blank"
            rel="noopener noreferrer"
          >
            Claude Help Center
          </a>
        </p>
        <p>
          Watermarks Remover is a free Claude skill that checks your text for
          invisible characters and rewrites parts of it to reduce statistical
          watermark patterns.
        </p>
        <p>
          Once it is installed, you can use it by typing{" "}
          <code>/remove-ai-marks</code> and pasting your text.{" "}
          <a href={REPO_URL} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </p>
        <p>
          <a
            className="rcw-cta"
            href={SKILL_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Watermarks Remover on GitHub →
          </a>
        </p>
      </section>

      <section className="rcw-section">
        <h2>Step-by-step</h2>
        <ol className="rcw-steps">
          {STEPS.map((step) => (
            <li key={step.title}>
              <strong>{step.title}</strong>
              <p>
                {step.title === "Open the Watermarks Remover skill" ? (
                  <>
                    Go to the{" "}
                    <a
                      href={SKILL_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Watermarks Remover repository
                    </a>
                    . Inside the repository: open the <code>skills</code>{" "}
                    folder, open <code>remove-ai-marks</code>, then click{" "}
                    <code>SKILL.md</code>.
                  </>
                ) : (
                  step.body
                )}
              </p>
              {step.title === "Remove the watermark patterns" ? (
                <CopyBlock label="Example command" text={COMMAND_EXAMPLE} />
              ) : null}
            </li>
          ))}
        </ol>
      </section>

      <section className="rcw-section">
        <h2>Pro tip</h2>
        <p>
          Add this instruction when you want Claude to keep your original
          writing style:
        </p>
        <CopyBlock label="Style-preserving command" text={PRO_TIP_PROMPT} />
        <div className="rcw-note">
          <p>
            The tool changes word choices and sentence structure, so always
            review the result before publishing it. Statistical watermark
            removal is described by the tool as a best effort, not a guarantee
            that every AI detector will return a different result.
          </p>
          <p>Use it on your own content or text you have permission to edit.</p>
        </div>
        <p>
          <a
            className="rcw-cta"
            href={SKILL_MD_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get the free Watermarks Remover skill →
          </a>
        </p>
      </section>

      <section className="rcw-section">
        <h2>Links and sources</h2>
        <ul className="rcw-links">
          <li>
            <a href={REPO_URL} target="_blank" rel="noopener noreferrer">
              Watermarks Remover on GitHub
            </a>
          </li>
          {REFERENCES.map((link) => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
