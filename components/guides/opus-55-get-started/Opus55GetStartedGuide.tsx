"use client";

import { Fragment, useCallback, useEffect, useId, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

import { trackEvent } from "@/lib/analytics";
import {
  IDEAS,
  UNIVERSITY_URL,
  WEEKEND_PLAN,
  WEEKENDS_URL,
  type Idea,
} from "./data";
import "./opus-55-get-started.css";

const POPUP_KEY = "af-attention-uni-popup-v1";
const POPUP_DELAY_MS = 1400;

function highlightBrackets(text: string) {
  return text.split(/(\[[^\]]+\])/g).map((part, i) =>
    part.startsWith("[") && part.endsWith("]") ? (
      <span key={i} className="o55-fill">
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
    <div className="o55-block">
      <div className="o55-block-head">
        <span className="o55-block-label">{label}</span>
        <button
          type="button"
          className={`o55-copy${copied ? " o55-done" : ""}`}
          onClick={onCopy}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre>{highlightBrackets(text)}</pre>
    </div>
  );
}

function IdeaCard({ idea }: { idea: Idea }) {
  return (
    <section className="o55-section" id={idea.id}>
      <div className="o55-idea-head">
        <span className="o55-num">{idea.num}</span>
        <h2>{idea.title}</h2>
      </div>

      <div className="o55-sell">
        <span className="o55-sell-label">What you could sell</span>
        <p>{idea.sell}</p>
      </div>

      {idea.body.map((para) => (
        <p key={para}>{para}</p>
      ))}

      {idea.exampleHref && idea.exampleLabel ? (
        <p className="o55-example">
          {idea.exampleBefore ?? ""}
          <a href={idea.exampleHref} target="_blank" rel="noopener noreferrer">
            {idea.exampleLabel}
          </a>
          {idea.exampleAfter ?? ""}
        </p>
      ) : null}

      {idea.extraLinks ? (
        <ul className="o55-extra">
          {idea.extraLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      ) : null}

      <h3>Starter brief</h3>
      <CopyBlock label={`Brief · ${idea.title}`} text={idea.brief} />
    </section>
  );
}

function AttentionUniPopup({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const titleId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="o55-overlay"
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="o55-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <button
          type="button"
          className="o55-modal-close"
          aria-label="Close"
          onClick={onClose}
        >
          ×
        </button>

        <span className="o55-badge">
          <span className="o55-badge-dot" aria-hidden />
          Early access open
        </span>

        <h2 id={titleId}>Attention HQ is open</h2>
        <p>
          We just opened early access. Join now before founding spots close and
          become a founding member of <strong>Attention University</strong>.
        </p>
        <p>
          Build with the same playbooks we use inside Attention Factory —
          weekends, cohorts and the academy at one place.
        </p>

        <div className="o55-modal-actions">
          <a
            className="o55-btn o55-btn-primary"
            href={UNIVERSITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              trackEvent("guide_outbound_click", {
                destination: "attention_university",
                source: "opus55_popup",
              });
              onClose();
            }}
          >
            Become a founding member →
          </a>
          <button type="button" className="o55-dismiss" onClick={onClose}>
            Keep reading
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Opus55GetStartedGuide() {
  const [popupOpen, setPopupOpen] = useState(false);

  const dismissPopup = useCallback(() => {
    setPopupOpen(false);
    try {
      localStorage.setItem(POPUP_KEY, "1");
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    let dismissed = false;
    try {
      dismissed = localStorage.getItem(POPUP_KEY) === "1";
    } catch {
      dismissed = false;
    }
    if (dismissed) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const t = window.setTimeout(
      () => setPopupOpen(true),
      reduce ? 0 : POPUP_DELAY_MS,
    );
    return () => window.clearTimeout(t);
  }, []);

  return (
    <div className="o55-guide">
      <AttentionUniPopup open={popupOpen} onClose={dismissPopup} />

      <Link href="/guide" className="o55-back">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        All guides
      </Link>

      <header className="o55-hero">
        <p className="o55-eyebrow">Opus 5.5 · Build &amp; sell</p>
        <h1>How to Get Started Building With Opus 5.5</h1>
        <p className="o55-lede">
          You don’t need to try all five ideas. Pick the one closest to what you
          already know, build a sample this weekend and put it in front of
          someone who might use it.
        </p>
        <p>
          People are already making videos, graphics, apps and games with Opus
          5.5. The examples in this guide show what they built. They aren’t
          proof that those creators earned money from them. Your next step is to
          find out what someone will pay <em>you</em> to make.
        </p>
        <nav className="o55-toc" aria-label="Ideas">
          {IDEAS.map((idea) => (
            <a key={idea.id} href={`#${idea.id}`}>
              {idea.num} {idea.title}
            </a>
          ))}
        </nav>
      </header>

      {IDEAS.map((idea) => (
        <IdeaCard key={idea.id} idea={idea} />
      ))}

      <section className="o55-section" id="weekend">
        <h2>What to do this weekend</h2>
        <div className="o55-weekend">
          {WEEKEND_PLAN.map((item) => (
            <div key={item.day} className="o55-day">
              <strong>{item.day}</strong>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <p>
          That’s how you stay ahead in AI. Keep up with new tools, but give
          yourself time to use them. Build something, share it, learn from the
          response and do it again.
        </p>

        <div className="o55-cta-box">
          <p>
            If you want to keep doing that with us, join the next{" "}
            <strong>Weekends of AI</strong> — and claim early access to{" "}
            <strong>Attention University</strong> before founding spots close.
          </p>
          <div className="o55-cta-row">
            <a
              className="o55-btn o55-btn-primary"
              href={UNIVERSITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackEvent("guide_outbound_click", {
                  destination: "attention_university",
                  source: "opus55_footer",
                })
              }
            >
              Join Attention University →
            </a>
            <a
              className="o55-btn o55-btn-secondary"
              href={WEEKENDS_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackEvent("guide_outbound_click", {
                  destination: "weekends_of_ai",
                  source: "opus55_footer",
                })
              }
            >
              weekendsofai.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
