"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

import { trackEvent } from "@/lib/analytics";
import {
  ALL_PROMPTS,
  BEFORE_YOU_START,
  GAME_STEPS,
  HOST_OPTIONS,
  UNIVERSITY_URL,
  VIRAL_GAMES,
  type GameStep,
} from "./data";
import "../chatgpt-study-codes/chatgpt-study-codes.css";
import "./build-a-game-with-ai.css";

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
    trackEvent("guide_copy", { guide: "build_a_game_with_ai", block: label });
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

function HostOptions() {
  return (
    <div className="bg-hosts">
      {HOST_OPTIONS.map((host) => (
        <div className="bg-host" key={host.name}>
          <h3>{host.name}</h3>
          <ol>
            {host.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
}

function StepCard({ step }: { step: GameStep }) {
  return (
    <section className="scs-section" id={step.id}>
      <div className="scs-shortcut-head scs-shortcut-head--loose">
        <span className="scs-shortcut-num">{step.num}</span>
        <h2 className="scs-shortcut-title">{step.title}</h2>
      </div>
      {step.blurb.map((para) => (
        <p key={para}>{para}</p>
      ))}
      {step.id === "online" && <HostOptions />}
      <p className="scs-try">
        {step.id === "online"
          ? "Stuck on any screen? Copy this:"
          : "Copy this:"}
      </p>
      <CopyBlock label={`Prompt · ${step.title}`} text={step.prompt} />
      <div className="scs-note">
        <p>
          <strong>Tip:</strong> {step.tip}
        </p>
      </div>
    </section>
  );
}

export default function BuildAGameWithAiGuide() {
  return (
    <div className="scs-guide bg-guide">
      <Link href="/guide" className="scs-back">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        All guides
      </Link>

      <header className="scs-hero">
        <p className="scs-eyebrow">Claude · ChatGPT · Build a game</p>
        <h1>Build your first game with AI in 7 steps</h1>
        <p className="scs-lede">
          Nigerian games are taking over the internet, and almost none of them
          came from a studio. They came from people with an idea, a laptop and
          AI.
        </p>
        <p>
          This guide walks you through the exact process, from picking the idea
          to getting your first players. Every step has a prompt you can copy.
          Replace the parts in [square brackets] with your own details and
          paste it into Claude or ChatGPT. You don&apos;t need to know how to
          code.
        </p>
        <nav className="scs-toc" aria-label="Steps">
          <a href="#viral">The games</a>
          {GAME_STEPS.map((step) => (
            <a key={step.id} href={`#${step.id}`}>
              {step.num} {step.title}
            </a>
          ))}
        </nav>
      </header>

      <section className="scs-section" id="viral">
        <h2>These games went viral in 1 week</h2>
        <p>
          No big studio behind any of them. Just people with an idea and AI.
          You can build yours too, even with zero coding experience.
        </p>
        <div className="bg-games">
          {VIRAL_GAMES.map((game) => (
            <figure className="bg-game" key={game.name}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={game.img}
                alt={game.alt}
                width={700}
                height={470}
                loading="lazy"
              />
              <figcaption>
                <strong>{game.name}</strong>
                <span>{game.stat}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="scs-section" id="before">
        <h2>What you need</h2>
        <ul className="bg-need">
          {BEFORE_YOU_START.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {GAME_STEPS.map((step) => (
        <StepCard key={step.id} step={step} />
      ))}

      <section className="scs-section" id="all">
        <h2>Copy all 7 prompts</h2>
        <p>
          Save these in your notes so you have the whole process in one place
          when you sit down to build.
        </p>
        <CopyBlock label="All 7 game prompts" text={ALL_PROMPTS} />
      </section>

      <section className="scs-section" id="attention-hq">
        <h2>Want to learn exactly how to build games like this?</h2>
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
                source: "build_a_game_with_ai",
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
