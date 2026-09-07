"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

import {
  EXAMPLE_PRODUCT,
  EXAMPLE_SCENE,
  RULES,
  SECTIONS,
} from "./data";
import "./chatgpt-viral-image-prompts.css";

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
    <div className="cvip-block">
      <div className="cvip-block-head">
        <span className="cvip-block-label">{label}</span>
        <button
          type="button"
          className={`cvip-copy${copied ? " cvip-done" : ""}`}
          onClick={onCopy}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre>{text}</pre>
    </div>
  );
}

export default function ChatGptViralImagePromptsGuide() {
  return (
    <div className="cvip-guide">
      <Link href="/guide" className="cvip-back">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        All guides
      </Link>

      <header className="cvip-hero">
        <p className="cvip-eyebrow">Prompts guide · ChatGPT Images</p>
        <h1>89 viral image prompts for ChatGPT</h1>
        <p className="cvip-lede">
          Sorted by what they do. Copy, paste, generate.
        </p>
      </header>

      <section className="cvip-section">
        <h2>How this works</h2>
        <p>
          These are not built in ChatGPT features. There is no hidden menu. They
          are shorthand the model reads as a style instruction, so a word like{" "}
          <code>/explodedview</code> does the job of a full sentence. The same
          shorthand works in Gemini, Grok and most other image tools.
        </p>

        <h3>Three steps</h3>
        <ol>
          <li>Open a new chat and either upload a photo or describe your subject.</li>
          <li>Add one to three commands from the list below.</li>
          <li>
            Send it. If ChatGPT explains instead of generating, start the
            message with &quot;Create image&quot;.
          </li>
        </ol>

        <CopyBlock label="Product example" text={EXAMPLE_PRODUCT} />
        <CopyBlock label="Scene example" text={EXAMPLE_SCENE} />

        <h3>Rules that save you rerolls</h3>
        <ul className="cvip-check">
          {RULES.map((rule) => (
            <li key={rule}>{rule}</li>
          ))}
        </ul>
      </section>

      {SECTIONS.map((section) => (
        <section className="cvip-section" key={section.id} id={section.id}>
          <h2>{section.title}</h2>
          {section.note ? <p>{section.note}</p> : null}
          {section.prompts.map((item) => (
            <div className="cvip-shortcut" key={item.code}>
              <div className="cvip-shortcut-head">
                <span className="cvip-shortcut-code">{item.code}</span>
                <span className="cvip-shortcut-num">{item.num}</span>
              </div>
              <p>{item.blurb}</p>
              <CopyBlock label="Shortcut" text={item.code} />
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}
