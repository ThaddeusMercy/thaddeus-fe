"use client";

import { Fragment, useCallback, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

import { trackEvent } from "@/lib/analytics";
import {
  ALL_PROMPTS,
  BEFORE_YOU_START,
  BUDGET_TIERS,
  DRAMA_STEPS,
  UNIVERSITY_URL,
  VIRAL_DRAMAS,
  type DramaStep,
} from "./data";
import "../chatgpt-study-codes/chatgpt-study-codes.css";
import "./make-a-short-drama-with-ai.css";

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
    trackEvent("guide_copy", {
      guide: "make_a_short_drama_with_ai",
      block: label,
    });
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

function StepCard({ step }: { step: DramaStep }) {
  return (
    <section className="scs-section" id={step.id}>
      <div className="scs-shortcut-head scs-shortcut-head--loose">
        <span className="scs-shortcut-num">{step.num}</span>
        <h2 className="scs-shortcut-title">{step.title}</h2>
      </div>
      {step.blurb.map((para) => (
        <p key={para}>{para}</p>
      ))}
      <p className="scs-try">Copy this:</p>
      <CopyBlock label={`Prompt · ${step.title}`} text={step.prompt} />
      <div className="scs-note">
        <p>
          <strong>Tip:</strong> {step.tip}
        </p>
      </div>
    </section>
  );
}

function BudgetSection() {
  return (
    <section className="scs-section" id="budget">
      <h2>Pick your video tool by budget</h2>
      <p>
        Every tool below makes talking clips with sound. The difference is how
        much you spend and how cinematic it looks.
      </p>
      <div className="sd-budget">
        {BUDGET_TIERS.map((tier) => (
          <div className="sd-tier" key={tier.level}>
            <span className="sd-tier-level">{tier.level}</span>
            <strong>{tier.tools}</strong>
            <p>{tier.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function MakeAShortDramaWithAiGuide() {
  return (
    <div className="scs-guide sd-guide">
      <Link href="/guide" className="scs-back">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        All guides
      </Link>

      <header className="scs-hero">
        <p className="scs-eyebrow">Claude · ChatGPT · Make a short drama</p>
        <h1>Make your first AI short drama in 7 steps</h1>
        <p className="scs-lede">
          Short dramas are taking over the internet, and the ones blowing up
          right now weren&apos;t shot on a set. One person, a laptop and AI
          made them, with no cast, no camera and no crew.
        </p>
        <p>
          This guide walks you through the exact process, from the first idea
          to posting episode one. Every step has a prompt you can copy.
          Replace the parts in [square brackets] with your own details and
          paste it into Claude or ChatGPT. You don&apos;t need any film
          experience.
        </p>
        <nav className="scs-toc" aria-label="Steps">
          <a href="#viral">The dramas</a>
          {DRAMA_STEPS.map((step) => (
            <Fragment key={step.id}>
              <a href={`#${step.id}`}>
                {step.num} {step.title}
              </a>
              {step.id === "animate" && <a href="#budget">Tools by budget</a>}
            </Fragment>
          ))}
        </nav>
      </header>

      <section className="scs-section" id="viral">
        <h2>These AI dramas pulled millions of views</h2>
        <p>
          None of these had a cast or a film set. The people behind them wrote
          a story, made the characters with AI and posted it in short
          episodes.
        </p>
        <div className="sd-stats">
          {VIRAL_DRAMAS.map((d) => (
            <div className="sd-stat" key={d.name}>
              <div className="sd-stat-num">
                {d.stat}
                <span>{d.unit}</span>
              </div>
              <div className="sd-stat-body">
                <strong>{d.name}</strong>
                <p>{d.detail}</p>
                <a href={d.source.href} target="_blank" rel="noopener noreferrer">
                  Source: {d.source.label}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="scs-section" id="before">
        <h2>What you need</h2>
        <ul className="sd-need">
          {BEFORE_YOU_START.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {DRAMA_STEPS.map((step) => (
        <Fragment key={step.id}>
          <StepCard step={step} />
          {step.id === "animate" && <BudgetSection />}
        </Fragment>
      ))}

      <section className="scs-section" id="all">
        <h2>Copy all 7 prompts</h2>
        <p>
          Save these in your notes so you have the whole process in one place
          when you sit down to make your drama.
        </p>
        <CopyBlock label="All 7 short drama prompts" text={ALL_PROMPTS} />
      </section>

      <section className="scs-section" id="attention-hq">
        <h2>Want to learn exactly how to make AI films like this?</h2>
        <div className="scs-cta-box">
          <p>
            <strong>Join Attention HQ.</strong> It&apos;s where AI University
            lives, a structured path for people starting from zero, with
            click-by-click lessons and a community building alongside you.
          </p>
          <p>
            You go from using ChatGPT properly to building websites, creating
            AI videos and automating your work. Every program is practical, and
            every one ends with something you&apos;ve made.
          </p>
          <a
            className="scs-cta-btn"
            href={UNIVERSITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent("guide_outbound_click", {
                destination: "ai_university",
                source: "make_a_short_drama_with_ai",
              })
            }
          >
            Join Attention HQ →
          </a>
        </div>
      </section>
    </div>
  );
}
