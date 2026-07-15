"use client";

import { Fragment, useCallback, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

import { FLOW_NODES, PROMPTS, QUESTIONS, STEPS } from "./data";
import "./vet-ai-skills.css";

function highlightBrackets(text: string) {
  return text.split(/(\[[^\]]+\])/g).map((part, i) =>
    part.startsWith("[") && part.endsWith("]") ? (
      <span key={i} className="vas-fill">
        {part}
      </span>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}

function PromptBlock({
  tag,
  name,
  code,
}: {
  tag: string;
  name: string;
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
    <div className="vas-prompt">
      <div className="vas-ph">
        <span className="vas-tag">{tag}</span>
        <span className="vas-nm">{name}</span>
        <button
          type="button"
          className={`vas-copy${copied ? " vas-done" : ""}`}
          onClick={onCopy}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="vas-pre">{highlightBrackets(code)}</pre>
    </div>
  );
}

export default function VetAiSkillsGuide() {
  return (
    <div className="vas-guide">
      <Link href="/guide" className="vas-back">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        All guides
      </Link>

      <header className="vas-hero">
        <p className="vas-kicker">AI Safety · Field Guide 01</p>
        <h1>
          Vet any AI skill <em>before</em> it touches your machine.
        </h1>
        <p className="vas-lede">
          A security firm slipped a fake skill onto a trusted marketplace. It
          looked clean, passed every scan, and 26,000 people installed it. The
          danger was never in the code. It was in a link the skill told the AI
          to open. Here is the exact check you run so it never gets you.
        </p>

        <div className="vas-art" aria-hidden>
          <div className="vas-flow">
            {FLOW_NODES.map((node, i) => (
              <Fragment key={node.label}>
                {i > 0 ? <span className="vas-arrow">→</span> : null}
                <div
                  className={`vas-node${
                    node.variant === "safe"
                      ? " vas-safe"
                      : node.variant === "risk"
                        ? " vas-risk"
                        : ""
                  }`}
                >
                  {node.label}
                </div>
              </Fragment>
            ))}
          </div>
          <p className="vas-switchcap">
            The link never changes. The attacker just throws the switch.
          </p>
        </div>
      </header>

      <div className="vas-divider" />

      <section className="vas-section">
        <p className="vas-eyebrow">The 30-second check</p>
        <h2>Three steps, every time, before you install anything.</h2>
        <p className="vas-body vas-muted">
          You do this in a Claude chat, not Cowork and not Code. A plain chat
          window cannot run scripts or touch your files, so the skill gets read
          and dissected with nothing able to execute while you look.
        </p>

        <div className="vas-steps">
          {STEPS.map((step) => (
            <div key={step.num} className="vas-step">
              <div className="vas-num">{step.num}</div>
              <div>
                <p className="vas-st">{step.title}</p>
                <p className="vas-sd">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="vas-divider" />

      <section className="vas-section">
        <p className="vas-eyebrow">The three questions underneath it</p>
        <h2>Before any install, answer these.</h2>
        <div className="vas-qgrid">
          {QUESTIONS.map((q) => (
            <div key={q.num} className="vas-q">
              <p className="vas-qn">{q.num}</p>
              <p className="vas-qt">{q.title}</p>
              <p className="vas-qd">{q.body}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="vas-divider" />

      <section className="vas-section">
        <p className="vas-eyebrow">Prompt 1 · Security review</p>
        <h2>Paste this first. It reads the skill and flags anything dangerous.</h2>
        <p className="vas-body vas-muted">
          The framing tells Claude to treat the skill as untrusted data to
          inspect, never as instructions to follow. That is what keeps a
          malicious skill from hijacking the review itself.
        </p>
        <PromptBlock {...PROMPTS[0]} />
      </section>

      <div className="vas-divider" />

      <section className="vas-section">
        <p className="vas-eyebrow">Prompt 2 · Tailor and save</p>
        <h2>Only after it comes back clean. This makes the skill yours.</h2>
        <p className="vas-body vas-muted">
          It keeps the core function, adds nothing that fetches or executes, and
          rewrites the skill around your tools and workflow so it fits how you
          actually work.
        </p>
        <PromptBlock {...PROMPTS[1]} />

        <aside className="vas-tip">
          <span className="vas-em">Rule of thumb</span>
          <p>
            If a skill pulls from a website and truly needs that content,
            don&apos;t leave the link in. Copy the page text straight into the
            skill and delete the URL. A skill with no link can&apos;t be tricked
            by a page that changes after you install.
          </p>
        </aside>
      </section>

      <div className="vas-divider" />

      <div className="vas-cta">
        <h3>Save this. Share it with someone learning AI.</h3>
        <p>
          They comment <span className="vas-word">PROMPT</span> on the reel, they
          get this guide.
        </p>
      </div>

      <footer className="vas-foot">
        Guide by <b>Mercy Thaddeus</b> ·{" "}
        <a href="https://mercythaddeus.xyz">mercythaddeus.xyz</a> ·
        @mercythaddeus_
      </footer>
    </div>
  );
}
