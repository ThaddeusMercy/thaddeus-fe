"use client";

import { Fragment, useCallback, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

import {
  ANIMATION_PROMPT_REQUEST,
  NEED,
  STORYBOARD_COMMAND,
  USEFUL_LINKS,
  WORKFLOW,
} from "./data";
import "./chatgpt-google-flow-ad.css";

function highlightBrackets(text: string) {
  return text.split(/(\[[^\]]+\])/g).map((part, i) =>
    part.startsWith("[") && part.endsWith("]") ? (
      <span key={i} className="cgf-fill">
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
    <div className="cgf-block">
      <div className="cgf-block-head">
        <span className="cgf-block-label">{label}</span>
        <button
          type="button"
          className={`cgf-copy${copied ? " cgf-done" : ""}`}
          onClick={onCopy}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre>{highlightBrackets(text)}</pre>
    </div>
  );
}

export default function ChatGptGoogleFlowAdGuide() {
  return (
    <div className="cgf-guide">
      <Link href="/guide" className="cgf-back">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        All guides
      </Link>

      <header className="cgf-hero">
        <p className="cgf-eyebrow">Creative guide · ChatGPT &amp; Google Flow</p>
        <h1>Create an AI product ad for free with ChatGPT + Google Flow</h1>
        <p className="cgf-lede">
          You do not need a full production setup to turn your product into an
          AI ad.
        </p>
      </header>

      <section className="cgf-section">
        <h2>What you need</h2>
        <ul className="cgf-check">
          {NEED.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="cgf-section">
        <h2>Step 1: Upload your product to ChatGPT</h2>
        <p>
          Open ChatGPT and upload a clear image of the product you want to
          advertise.
        </p>
        <p>Then type:</p>
        <CopyBlock label="Storyboard command" text={STORYBOARD_COMMAND} />
        <p>
          ChatGPT will create a visual storyboard showing different ways your
          product could appear in an ad.
        </p>
      </section>

      <section className="cgf-section">
        <h2>Step 2: Pick the scene you want to animate</h2>
        <p>Choose your favorite frame from the storyboard.</p>
        <p>
          You can also ask ChatGPT to change the scene, camera angle, setting,
          model, lighting or action until you get something you like.
        </p>
      </section>

      <section className="cgf-section">
        <h2>Step 3: Get the animation prompt</h2>
        <p>Upload or point to the storyboard frame and ask:</p>
        <CopyBlock
          label="Animation prompt request"
          text={ANIMATION_PROMPT_REQUEST}
        />
        <p>Copy the prompt ChatGPT gives you.</p>
      </section>

      <section className="cgf-section">
        <h2>Step 4: Animate it in Google Flow</h2>
        <p>Go to Google Flow and create a new video.</p>
        <p>
          Use your storyboard image as the starting frame or reference where
          available, then paste the animation prompt from ChatGPT.
        </p>
        <p>Generate the video.</p>
        <p>
          You can repeat this for the other storyboard frames and edit the clips
          together to create a complete product ad.
        </p>
      </section>

      <section className="cgf-section">
        <h2>The workflow</h2>
        <CopyBlock label="Workflow" text={WORKFLOW} />
        <p>That&apos;s it.</p>
        <p>
          You can use the same process for products, fashion, food, beauty,
          gadgets and brand campaigns.
        </p>
      </section>

      <section className="cgf-section">
        <h2>Useful links</h2>
        <ul className="cgf-links">
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
