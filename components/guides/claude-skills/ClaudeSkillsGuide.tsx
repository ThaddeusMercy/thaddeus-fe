"use client";

import { Fragment, useCallback, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

import { HOW_STEPS, SKILLS } from "./data";
import "./claude-skills.css";

function highlightBrackets(text: string) {
  return text.split(/(\[[^\]]+\])/g).map((part, i) =>
    part.startsWith("[") && part.endsWith("]") ? (
      <span key={i} className="cs-b">
        {part}
      </span>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}

function SkillBlock({
  num,
  name,
  what,
  file,
  code,
}: {
  num: string;
  name: string;
  what: string;
  file: string;
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
    <article className="cs-skill">
      <div className="cs-shead">
        <span className="cs-snum">{num}</span>
        <span className="cs-sname">{name}</span>
      </div>
      <p className="cs-swhat">{what}</p>

      <div className="cs-block">
        <div className="cs-bar">
          <span className="cs-fnm">{file}</span>
          <button
            type="button"
            className={`cs-copy${copied ? " cs-done" : ""}`}
            onClick={onCopy}
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
        <pre>{highlightBrackets(code)}</pre>
      </div>
    </article>
  );
}

export default function ClaudeSkillsGuide() {
  return (
    <div className="cs-guide">
      <Link href="/guide" className="cs-back">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        All guides
      </Link>

      <header className="cs-hero">
        <span className="cs-eyebrow">Free guide · by Mercy Thaddeus</span>
        <h1>
          6 Claude Skills You Can <span className="cs-accent">Steal</span>
        </h1>
        <p className="cs-sub">
          These are the actual skills that run my content. Copy any one, paste
          it into Claude, fill in the brackets, and it works. Adapt them to your
          own voice and niche.
        </p>
      </header>

      <section className="cs-how">
        <h2>How to use these</h2>
        <div className="cs-steps">
          {HOW_STEPS.map((step) => (
            <div className="cs-step" key={step.title}>
              <div className="cs-n">{step.tag}</div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cs-skills">
        <div className="cs-lead">The six skills</div>
        <p className="cs-leadsub">
          Each block below is the real, working instruction set. Copy and go.
        </p>

        {SKILLS.map((skill) => (
          <SkillBlock key={skill.num} {...skill} />
        ))}
      </section>

      <footer className="cs-foot">
        <p>
          Steal them, make them yours, and let Claude run the repetitive part so
          you can focus on the ideas.
        </p>
        <p className="cs-help">
          Stuck wiring one in? Just reply and I&apos;ll help you sort it out.
        </p>
      </footer>
    </div>
  );
}
