"use client";

import { Fragment, useCallback, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

import {
  CHALLENGE_URL,
  CHARACTER_PROMPT,
  CHARACTER_VIEWS,
  DIRECTION_POINTS,
  EDIT_POINTS,
  VIDEO_PROMPT,
} from "./data";
import "./realistic-ai-videos.css";

function highlightBrackets(text: string) {
  return text.split(/(\[[^\]]+\])/g).map((part, i) =>
    part.startsWith("[") && part.endsWith("]") ? (
      <span key={i} className="rav-fill">
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
    <div className="rav-block">
      <div className="rav-block-head">
        <span className="rav-block-label">{label}</span>
        <button
          type="button"
          className={`rav-copy${copied ? " rav-done" : ""}`}
          onClick={onCopy}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre>{highlightBrackets(text)}</pre>
    </div>
  );
}

export default function RealisticAiVideosGuide() {
  return (
    <div className="rav-guide">
      <Link href="/guide" className="rav-back">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        All guides
      </Link>

      <header className="rav-hero">
        <p className="rav-eyebrow">Creative guide · AI filmmaking</p>
        <h1>How to create realistic AI videos in three steps</h1>
        <p className="rav-lede">
          Some AI videos immediately look generated. Others feel like real
          films. The difference is not one magic tool. It comes from your visual
          references, the model you choose, how you direct each shot, and what
          happens during the final edit.
        </p>
      </header>

      <section className="rav-section">
        <p>Here is the simple process I used to make the film you watched.</p>
      </section>

      <section className="rav-section">
        <h2>Step 1: Create your visuals</h2>
        <p>
          Before generating video, create a character style sheet for every main
          character using ChatGPT Images 2.0.
        </p>
        <p>
          Your sheet should show the same character from different angles while
          keeping their face, hair, skin tone, body, and outfit unchanged.
        </p>
        <p>Include:</p>
        <ul className="rav-check">
          {CHARACTER_VIEWS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>
          Once you approve the character, reuse the same style sheet as a
          reference for every scene.
        </p>
        <h3>Character style sheet prompt</h3>
        <CopyBlock label="Character style sheet prompt" text={CHARACTER_PROMPT} />
      </section>

      <section className="rav-section">
        <h2>Step 2: Choose your video model</h2>
        <p>
          Use a strong video model such as Seedance 2.0 or Seedance 2.5.
        </p>
        <p>
          Seedance 2.0 can generate clips up to 15 seconds. Seedance 2.5 extends
          this to 30 seconds and gives you more room for longer actions and
          connected shots.
        </p>
        <p>
          Do not try to generate your entire film at once. Plan the film as
          separate shots, generate each one, then combine them during editing.
        </p>
      </section>

      <section className="rav-section">
        <h2>Step 3: Direct every shot properly</h2>
        <p>&ldquo;Make it cinematic&rdquo; is not enough.</p>
        <p>Tell the model:</p>
        <ul className="rav-check">
          {DIRECTION_POINTS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h3>Video prompt template</h3>
        <CopyBlock label="Video prompt template" text={VIDEO_PROMPT} />
      </section>

      <section className="rav-section">
        <h2>Do not skip the edit</h2>
        <p>The raw generation is not the finished film.</p>
        <ul className="rav-check">
          {EDIT_POINTS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>
          The edit is often what turns a good generation into a convincing film.
        </p>
      </section>

      <section className="rav-section rav-live">
        <h2>Learn the full workflow with me</h2>
        <p>
          Inside my three-day AI Film Challenge, I will take you through the
          complete process, from developing your idea and creating your assets
          to prompting each scene, editing the final film, distributing it, and
          using your work to attract brands.
        </p>
        <p>
          You will not just watch me create. You will work on your own AI film
          during the challenge.
        </p>
        <p>
          <a
            className="rav-btn"
            href={CHALLENGE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Join the AI Film Challenge
          </a>
        </p>
      </section>
    </div>
  );
}
