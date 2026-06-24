"use client";

import { Fragment, useCallback, useState } from "react";
import Link from "next/link";
import { Fraunces } from "next/font/google";
import { Spline_Sans } from "next/font/google";
import { ArrowLeft, WhatsappLogo } from "@phosphor-icons/react";

import {
  PROMPT_CARDS,
  SETUP_STEPS,
  TIPS,
  WHATSAPP_CHANNEL_URL,
} from "./data";
import "./metricool-claude.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["500", "600", "700"],
});

const spline = Spline_Sans({
  subsets: ["latin"],
  variable: "--font-spline",
  weight: ["400", "500", "600"],
});

function highlightBrackets(text: string) {
  return text.split(/(\[[^\]]+\])/g).map((part, i) =>
    part.startsWith("[") && part.endsWith("]") ? (
      <em key={i}>{part}</em>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}

function PromptCard({ label, text }: { label: string; text: string }) {
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
    <article className="mc-card">
      <div className="mc-card-top">
        <span className="mc-card-label">{label}</span>
        <button
          type="button"
          className={`mc-copy${copied ? " mc-done" : ""}`}
          onClick={onCopy}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <p>&ldquo;{highlightBrackets(text)}&rdquo;</p>
    </article>
  );
}

export default function MetricoolClaudeGuide() {
  return (
    <div className={`mc-guide ${fraunces.variable} ${spline.variable}`}>
      <Link href="/guide" className="mc-back">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        All guides
      </Link>

      <header className="mc-head">
        <span className="mc-kicker">AI Content Series · Part 6</span>
        <h1 className="mc-serif">Connect Claude to all your socials</h1>
        <p className="mc-sub">
          Schedule posts, read your analytics, find your best times, and study
          competitors, all from one chat.
        </p>
      </header>

      <section className="mc-section">
        <div className="mc-tag mc-serif">Setup · ~30 seconds</div>
        <ol className="mc-steps">
          {SETUP_STEPS.map((step) => (
            <li key={step.title}>
              <h3 className="mc-serif">{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mc-section">
        <div className="mc-tag mc-serif">What to actually do with it</div>
        <p className="mc-lead">
          Once it&apos;s connected, just talk to Claude like normal. Try these:
        </p>

        <div className="mc-prompts">
          {PROMPT_CARDS.map((card) => (
            <PromptCard key={card.label} label={card.label} text={card.text} />
          ))}
        </div>
      </section>

      <section className="mc-section">
        <div className="mc-tag mc-serif">A few tips</div>
        <ul className="mc-tips">
          {TIPS.map((tip) => (
            <li key={tip.lead}>
              <strong>{tip.lead}</strong> {tip.rest}
            </li>
          ))}
        </ul>
      </section>

      <footer className="mc-foot">
        <p>
          The real magic is the scan-and-schedule combo. You can go from
          &ldquo;I have no idea what to post&rdquo; to a full week scheduled in
          about five minutes.
        </p>
        <p className="mc-help">
          Stuck on a step? Just reply and I&apos;ll help you sort it out.
        </p>
      </footer>

      <div className="mc-community">
        <div className="mc-community-copy">
          <strong>Join the community</strong>
          <span>
            Follow the Learn AI with Mercy &amp; Koha channel on WhatsApp for
            the daily drops.
          </span>
        </div>
        <a
          href={WHATSAPP_CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mc-community-btn"
        >
          <WhatsappLogo className="h-5 w-5" weight="fill" aria-hidden />
          Join on WhatsApp
        </a>
      </div>
    </div>
  );
}
