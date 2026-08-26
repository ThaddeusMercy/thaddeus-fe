"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

import { COMBOS, EXAMPLE, SHORTCUTS } from "./data";
import "./chatgpt-image-shortcuts.css";

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
    <div className="cis-block">
      <div className="cis-block-head">
        <span className="cis-block-label">{label}</span>
        <button
          type="button"
          className={`cis-copy${copied ? " cis-done" : ""}`}
          onClick={onCopy}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre>{text}</pre>
    </div>
  );
}

export default function ChatGptImageShortcutsGuide() {
  return (
    <div className="cis-guide">
      <Link href="/guide" className="cis-back">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        All guides
      </Link>

      <header className="cis-hero">
        <p className="cis-eyebrow">Prompts guide · ChatGPT Images</p>
        <h1>50 more ChatGPT image shortcuts</h1>
        <p className="cis-lede">
          Turn one image into posters, diagrams, product shots, cinematic
          scenes, visual breakdowns and completely different art directions.
        </p>
      </header>

      <section className="cis-section">
        <h2>How to use them</h2>
        <p>Upload an image to ChatGPT.</p>
        <p>
          Then type one of the shortcuts below. You can also add extra
          instructions after the shortcut.
        </p>
        <p>Example:</p>
        <CopyBlock label="Example" text={EXAMPLE} />
        <p>or simply:</p>
        <CopyBlock label="Simple example" text="/explodedview" />
      </section>

      <section className="cis-section">
        <h2>The 50 shortcuts</h2>
        {SHORTCUTS.map((item) => (
          <div className="cis-shortcut" key={item.code}>
            <div className="cis-shortcut-head">
              <span className="cis-shortcut-code">{item.code}</span>
              <span className="cis-shortcut-num">{item.num}</span>
            </div>
            <p>{item.body}</p>
            <CopyBlock label="Shortcut" text={item.code} />
          </div>
        ))}
      </section>

      <section className="cis-section">
        <h2>Try combining them</h2>
        <p>You do not have to stop at one shortcut.</p>
        <p>You can type:</p>
        <div className="cis-combos">
          {COMBOS.map((combo) => (
            <CopyBlock key={combo} label="Combo" text={combo} />
          ))}
        </div>
        <p>
          Then add a sentence explaining exactly what you want changed.
        </p>
        <div className="cis-note">
          <p>
            The slash word is simply the starting point. The more context you
            give ChatGPT about the subject, composition, lighting, camera angle
            and final use, the more control you have over the result.
          </p>
        </div>
      </section>
    </div>
  );
}
