"use client";

import { Fragment, useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

import {
  CONCEPT_ITEMS,
  CONNECT_STEPS,
  EDIT_ITEMS,
  FLYER_SRC,
  MCP_URL,
  MOTION_POINTS,
  NEED,
  SHOT_LIST_PROMPT,
  STYLE_GUIDE_ITEMS,
  USEFUL_LINKS,
  WEEKENDS_URL,
} from "./data";
import "./cinematic-ai-ads.css";

function highlightBrackets(text: string) {
  return text.split(/(\[[^\]]+\])/g).map((part, i) =>
    part.startsWith("[") && part.endsWith("]") ? (
      <span key={i} className="cai-fill">
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
    <div className="cai-block">
      <div className="cai-block-head">
        <span className="cai-block-label">{label}</span>
        <button
          type="button"
          className={`cai-copy${copied ? " cai-done" : ""}`}
          onClick={onCopy}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre>{highlightBrackets(text)}</pre>
    </div>
  );
}

export default function CinematicAiAdsGuide() {
  return (
    <div className="cai-guide">
      <Link href="/guide" className="cai-back">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        All guides
      </Link>

      <header className="cai-hero">
        <p className="cai-eyebrow">Creative guide · Claude &amp; Higgsfield</p>
        <h1>How to create a cinematic AI ad with Claude and Higgsfield</h1>
        <p className="cai-lede">
          The Oraimo video you just watched was created with Claude, Higgsfield
          and a lot of human creative direction. Here is the simple process you
          can use to start creating your own cinematic product ads.
        </p>
      </header>

      <section className="cai-section">
        <h2>What you need</h2>
        <ul className="cai-check">
          {NEED.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="cai-section">
        <h2>Step 1: Connect Higgsfield to Claude</h2>
        <p>Open Claude and go to:</p>
        <p>
          <code>Customize or Settings &gt; Connectors &gt; Add custom connector</code>
        </p>
        <p>Enter these details:</p>
        <ul className="cai-check">
          <li>
            <strong>Name:</strong> Higgsfield
          </li>
          <li>
            <strong>Connector URL:</strong>
          </li>
        </ul>
        <CopyBlock label="Higgsfield MCP URL" text={MCP_URL} />
        <ol className="cai-steps">
          {CONNECT_STEPS.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <div className="cai-note">
          <p>
            You do not need an API key. Higgsfield generations use your account
            credits, so ask Claude to get your approval before it creates
            anything.
          </p>
        </div>
      </section>

      <section className="cai-section">
        <h2>Step 2: Develop your concept</h2>
        <p>Decide what the ad is about before opening the AI tools.</p>
        <p>Write down:</p>
        <ul className="cai-check">
          {CONCEPT_ITEMS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>
          Study real advertisements for inspiration. I do not recommend asking
          AI to create the entire concept for you. The strongest ideas still
          need human taste and direction.
        </p>
      </section>

      <section className="cai-section">
        <h2>Step 3: Create your visual style guide</h2>
        <p>Save your references in one folder. Include:</p>
        <ul className="cai-check">
          {STYLE_GUIDE_ITEMS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>
          These references help every shot feel like it belongs in the same
          film.
        </p>
      </section>

      <section className="cai-section">
        <h2>Step 4: Turn the idea into a shot list</h2>
        <p>
          Upload your concept and references to Claude, then use this prompt:
        </p>
        <CopyBlock label="Shot list prompt" text={SHOT_LIST_PROMPT} />
      </section>

      <section className="cai-section">
        <h2>Step 5: Create the images</h2>
        <p>Create one strong starting image for every shot.</p>
        <p>
          Use the same product photos, colours, lighting and visual references
          throughout. Review each image carefully before moving to animation.
        </p>
        <p>
          Do not try to create the entire ad in one generation. Professional AI
          ads are usually built shot by shot, then joined during editing.
        </p>
      </section>

      <section className="cai-section">
        <h2>Step 6: Animate each shot</h2>
        <p>
          Once the images are ready, animate them one after another with
          Seedance 2.5 or another strong image-to-video model inside Higgsfield.
        </p>
        <p>Your motion prompt should describe:</p>
        <ul className="cai-check">
          {MOTION_POINTS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>
          Start with short test generations. Change one part of the prompt at a
          time until the movement is right, then create the final version at
          your preferred resolution.
        </p>
      </section>

      <section className="cai-section">
        <h2>Step 7: Edit the final film</h2>
        <p>Place the clips in the correct order inside your video editor.</p>
        <p>Add:</p>
        <ul className="cai-check">
          {EDIT_ITEMS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>
          The tools create the individual assets, but your editing, timing and
          creative direction turn them into a finished advertisement.
        </p>
      </section>

      <section className="cai-section cai-live">
        <h2>Learn the complete process live</h2>
        <p>This guide gives you the basic setup.</p>
        <p>
          At the next Weekends of AI, I will break down the complete process I
          used to create the Oraimo concept ad, from the first idea and visual
          direction to prompting, animation and final editing.
        </p>
        <p>
          You will learn how to create professional AI ads that brands and
          businesses can pay you for.
        </p>

        <a
          className="cai-flyer-link"
          href={WEEKENDS_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={FLYER_SRC}
            alt="Weekends of AI — AI video that Sell. Sat Aug 22. Register at weekendsofai.com"
            width={819}
            height={1024}
            className="cai-flyer"
            unoptimized
          />
        </a>

        <p>
          Register for the free live training:
        </p>
        <p>
          <a
            className="cai-cta"
            href={WEEKENDS_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            https://weekendsofai.com →
          </a>
        </p>
        <div className="cai-note">
          <p>
            Weekends of AI is Attention Factory&apos;s practical AI training
            series, where you learn how to build and monetise useful AI skills.
          </p>
        </div>
      </section>

      <section className="cai-section">
        <h2>Useful links</h2>
        <ul className="cai-links">
          {USEFUL_LINKS.map((link) => (
            <li key={link.href}>
              {link.label}:{" "}
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.href}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
