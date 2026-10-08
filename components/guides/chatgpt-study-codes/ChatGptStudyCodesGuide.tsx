"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

import { trackEvent } from "@/lib/analytics";
import {
  ALL_SHORTCUTS,
  HOW_TO_STEPS,
  SHORTCUTS,
  WEEKENDS_URL,
  type Shortcut,
} from "./data";
import "./chatgpt-study-codes.css";

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

function ShortcutCard({ item }: { item: Shortcut }) {
  return (
    <section className="scs-section" id={item.id}>
      <div className="scs-shortcut-head scs-shortcut-head--loose">
        <span className="scs-shortcut-num">{item.num}</span>
        <h2 className="scs-shortcut-title">{item.title}</h2>
      </div>

      {item.blurb.map((para) => (
        <p key={para}>{para}</p>
      ))}

      <p className="scs-try">Try this:</p>
      <CopyBlock label={`Shortcut · ${item.title}`} text={item.example} />

      {item.bullets ? (
        <>
          {item.notes[0] ? <p>{item.notes[0]}</p> : null}
          <ul>
            {item.bullets.map((b) => {
              const code = b.match(/^\/\S+/)?.[0] ?? "";
              const rest = code ? b.slice(code.length).trimStart() : b;
              return (
                <li key={b}>
                  {code ? <code>{code}</code> : null}
                  {rest ? ` ${rest}` : null}
                </li>
              );
            })}
          </ul>
          {item.notes.slice(1).map((note) => (
            <p key={note}>{note}</p>
          ))}
        </>
      ) : (
        item.notes.map((note) => <p key={note}>{note}</p>)
      )}
    </section>
  );
}

export default function ChatGptStudyCodesGuide() {
  return (
    <div className="scs-guide">
      <Link href="/guide" className="scs-back">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        All guides
      </Link>

      <header className="scs-hero">
        <p className="scs-eyebrow">ChatGPT · Study shortcuts</p>
        <h1>10 ChatGPT shortcuts to learn faster and understand better</h1>
        <p className="scs-lede">
          Stop writing long, complicated prompts. These 10 simple ChatGPT
          shortcuts can help you study books, understand difficult topics, learn
          visually, and make sense of complicated movies.
        </p>
        <p>
          Just copy any shortcut, add the topic, book, or movie you want to
          learn about, and paste it into ChatGPT.
        </p>
        <nav className="scs-toc" aria-label="Shortcuts">
          {SHORTCUTS.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.num} {item.title}
            </a>
          ))}
        </nav>
      </header>

      {SHORTCUTS.map((item) => (
        <ShortcutCard key={item.id} item={item} />
      ))}

      <section className="scs-section" id="all">
        <h2>Copy all 10 shortcuts</h2>
        <CopyBlock label="All 10 shortcuts" text={ALL_SHORTCUTS} />
      </section>

      <section className="scs-section" id="how">
        <h2>How to use them</h2>
        <ol>
          {HOW_TO_STEPS.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <p>
          You can also upload your own textbook, PDF, notes, or document and use
          these shortcuts to study the content.
        </p>
      </section>

      <section className="scs-section" id="weekends">
        <h2>Want to learn more ways to use AI?</h2>
        <div className="scs-cta-box">
          <p>
            Join our free weekly AI classes at{" "}
            <strong>Weekends of AI</strong>.
          </p>
          <p>
            We teach practical ways to use AI for learning, content creation,
            business, and everyday work.
          </p>
          <a
            className="scs-cta-btn"
            href={WEEKENDS_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent("guide_outbound_click", {
                destination: "weekends_of_ai",
                source: "chatgpt_study_codes",
              })
            }
          >
            Join Weekends of AI →
          </a>
        </div>
      </section>
    </div>
  );
}
