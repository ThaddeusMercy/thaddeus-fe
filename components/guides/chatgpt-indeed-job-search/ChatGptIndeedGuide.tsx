"use client";

import { Fragment, useCallback, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

import {
  CHECKLIST,
  CONNECT_STEPS,
  FAQS,
  KEEP,
  NEED,
  OFFICIAL_LINKS,
  PRIVACY,
  PROBLEMS,
  PROMPT_MATCHES,
  PROMPT_OUTREACH,
  PROMPT_TAILOR,
  PROMPT_TRACKER,
  REMOVE,
  SCORE_WEIGHTS,
  STRONG_BULLET,
  WEAK_BULLET,
  WORKFLOW,
} from "./data";
import "./chatgpt-indeed.css";

function highlightBrackets(text: string) {
  return text.split(/(\[[^\]]+\])/g).map((part, i) =>
    part.startsWith("[") && part.endsWith("]") ? (
      <span key={i} className="cij-fill">
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
    <div className="cij-block">
      <div className="cij-block-head">
        <span className="cij-block-label">{label}</span>
        <button
          type="button"
          className={`cij-copy${copied ? " cij-done" : ""}`}
          onClick={onCopy}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre>{highlightBrackets(text)}</pre>
    </div>
  );
}

export default function ChatGptIndeedGuide() {
  return (
    <div className="cij-guide">
      <Link href="/guide" className="cij-back">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        All guides
      </Link>

      <header className="cij-hero">
        <p className="cij-eyebrow">Workflow guide · ChatGPT &amp; Indeed</p>
        <h1>How to run your job search with ChatGPT and the Indeed plugin</h1>
        <p className="cij-lede">
          Find current matches, tailor your resume honestly, draft recruiter
          outreach, and track applications — without letting AI invent
          experience or apply for you.
        </p>
      </header>

      <section className="cij-section">
        <p>
          ChatGPT can help with the parts of a job search that normally take the
          most time: finding relevant roles, comparing job descriptions with
          your experience, tailoring your resume, preparing outreach, and
          keeping an application tracker.
        </p>
        <p>
          It should not apply everywhere for you or invent experience to make
          you look qualified.
        </p>
        <p>
          The goal is to find better matches, make each application clear, and
          keep you in control of what is submitted or sent.
        </p>
      </section>

      <section className="cij-section">
        <h2>What you need</h2>
        <ul className="cij-check">
          {NEED.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="cij-section">
        <h2>Official links</h2>
        <ul className="cij-links">
          {OFFICIAL_LINKS.map((link) => (
            <li key={link.href}>
              {link.label}:{" "}
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.href}
              </a>
            </li>
          ))}
        </ul>
        <div className="cij-note">
          <p>
            Plugin availability can depend on your ChatGPT plan, workspace
            settings, role, supported surface, and region.
          </p>
        </div>
      </section>

      <section className="cij-section">
        <h2>Step 1: Clean your resume before uploading it</h2>
        <p>
          Keep the information needed for the job search, but remove details
          that do not need to be shared with an AI tool.
        </p>
        <div className="cij-cols cij-cols-2">
          <div className="cij-box">
            <h4>Remove or replace</h4>
            <ul>
              {REMOVE.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="cij-box">
            <h4>Keep</h4>
            <ul>
              {KEEP.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <p>
          Use one complete master resume containing your real experience.
          ChatGPT can create shorter tailored versions from it.
        </p>
      </section>

      <section className="cij-section">
        <h2>Step 2: Connect the Indeed plugin</h2>
        <ol className="cij-steps">
          {CONNECT_STEPS.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <p>
          Review the plugin&apos;s permissions and privacy information before
          connecting it.
        </p>
      </section>

      <section className="cij-section">
        <h2>Step 3: Upload your master resume</h2>
        <p>Attach your cleaned master resume to a new ChatGPT conversation.</p>
        <p>
          Tell ChatGPT that it must treat the resume as the source of truth for
          your experience and must not add anything that is not present or
          confirmed by you.
        </p>
      </section>

      <section className="cij-section">
        <h2>Prompt 1: Find the strongest current job matches</h2>
        <p>
          Paste this after uploading your resume and selecting the Indeed
          plugin:
        </p>
        <CopyBlock label="Find current job matches" text={PROMPT_MATCHES} />
      </section>

      <section className="cij-section">
        <h2>How to judge the match score</h2>
        <p>
          The score is only a sorting aid. It is not a hiring prediction.
        </p>
        <p>Ask ChatGPT to weigh:</p>
        <ul className="cij-check">
          {SCORE_WEIGHTS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="cij-note">
          <p>
            A lower score does not always mean you should not apply. A role may
            still be worth it when the missing item is marked preferred rather
            than required.
          </p>
        </div>
      </section>

      <section className="cij-section">
        <h2>Prompt 2: Tailor your resume for one job</h2>
        <p>Choose one job and paste its full description with this prompt:</p>
        <CopyBlock label="Tailor resume for one job" text={PROMPT_TAILOR} />
      </section>

      <section className="cij-section">
        <h2>Prompt 3: Find the likely hiring contact and draft outreach</h2>
        <p>Use this only for roles you genuinely want:</p>
        <CopyBlock label="Recruiter research and outreach" text={PROMPT_OUTREACH} />
      </section>

      <section className="cij-section">
        <h2>Prompt 4: Create an application tracker</h2>
        <CopyBlock label="Application tracker" text={PROMPT_TRACKER} />
      </section>

      <section className="cij-section">
        <h2>A practical workflow</h2>
        <ol className="cij-steps">
          {WORKFLOW.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <p>
          The aim is not to submit the largest number of applications. It is to
          spend your time on roles that make sense for you.
        </p>
      </section>

      <section className="cij-section">
        <h2>How to improve your resume without inventing anything</h2>
        <p>For each experience bullet, try to show:</p>
        <ul>
          <li>What you did</li>
          <li>What changed because of it</li>
          <li>How the result was measured, when a real measure exists</li>
        </ul>
        <div className="cij-example">
          <p>Example</p>
          <div className="cij-pair">
            <p className="cij-k">Instead of</p>
            <pre>{WEAK_BULLET}</pre>
          </div>
          <div className="cij-pair">
            <p className="cij-k">Use a truthful, specific version</p>
            <pre>{highlightBrackets(STRONG_BULLET)}</pre>
          </div>
        </div>
        <p>Use the second form only when you can prove the numbers.</p>
      </section>

      <section className="cij-section">
        <h2>Review checklist before applying</h2>
        <ul className="cij-check">
          {CHECKLIST.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="cij-section">
        <h2>Privacy and safety</h2>
        <ul className="cij-check">
          {PRIVACY.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="cij-section">
        <h2>Troubleshooting</h2>
        {PROBLEMS.map((item) => (
          <div className="cij-problem" key={item.q}>
            <h3>{item.q}</h3>
            <p>{item.a}</p>
          </div>
        ))}
      </section>

      <section className="cij-section">
        <h2>Frequently asked questions</h2>
        {FAQS.map((item) => (
          <div className="cij-faq" key={item.q}>
            <h3>{item.q}</h3>
            <p>{item.a}</p>
          </div>
        ))}
      </section>

      <section className="cij-section">
        <h2>Final note</h2>
        <p>
          ChatGPT should help you spend less time searching and more time on
          the jobs that fit your real experience. Keep every claim truthful and
          review every application yourself.
        </p>
        <p className="cij-checked">Last checked: August 16, 2026</p>
        <p className="cij-sig">MERCY THADDEUS &nbsp;|&nbsp; ATTENTION FACTORY</p>
      </section>
    </div>
  );
}
