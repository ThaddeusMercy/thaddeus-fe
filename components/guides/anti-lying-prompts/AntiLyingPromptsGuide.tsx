"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { GeistSans } from "geist/font/sans";
import { JetBrains_Mono } from "next/font/google";
import { ArrowLeft } from "@phosphor-icons/react";

import {
  CLAUDE_ROUTES,
  GPT_ROUTES,
  PROMPTS,
  type SetupRoute,
  type SetupStep,
} from "./data";
import "./anti-lying-prompts.css";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains",
});

function CopyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15V5a2 2 0 0 1 2-2h10" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function CopyButton({ text }: { text: string }) {
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
    setTimeout(() => setCopied(false), 1500);
  }, [text]);

  return (
    <button
      type="button"
      className={`alp-copy alp-mono${copied ? " alp-done" : ""}`}
      onClick={onCopy}
      aria-label="Copy prompt"
    >
      {copied ? <CheckIcon /> : <CopyIcon />}
    </button>
  );
}

function StepLine({ parts }: { parts: SetupStep[] }) {
  return (
    <li>
      {parts.map((part, i) =>
        part.type === "path" ? (
          <span key={i} className="alp-path alp-mono">
            {part.value}
          </span>
        ) : part.bold ? (
          <b key={i}>{part.value}</b>
        ) : (
          <span key={i}>{part.value}</span>
        ),
      )}
    </li>
  );
}

function SetupRoutes({ routes }: { routes: SetupRoute[] }) {
  return (
    <>
      {routes.map((route) => (
        <div key={route.title} className="alp-route">
          <div className="alp-route-head">
            <span
              className={`alp-pill ${route.scope === "all" ? "alp-all" : "alp-proj"}`}
            >
              {route.scope === "all" ? "Every chat" : "One project"}
            </span>
            <h4>{route.title}</h4>
          </div>
          <ol className="alp-steps alp-mono">
            {route.steps.map((parts, i) => (
              <StepLine key={i} parts={parts} />
            ))}
          </ol>
        </div>
      ))}
    </>
  );
}

const PROMPT_DOES: Record<
  (typeof PROMPTS)[number]["id"],
  React.ReactNode
> = {
  p1: (
    <>
      Stops the confident made-up answers, the fake stats, and the{" "}
      <b>source links that don&apos;t exist</b>. Forces it to admit uncertainty
      and go verify.
    </>
  ),
  p2: (
    <>
      Some viewpoints get amplified and others barely surface. This{" "}
      <b>forces it to argue the other side</b> so you see the full picture, not
      just the default one.
    </>
  ),
  p3: (
    <>
      The sneaky one. You share a plan that&apos;s going to flop and it calls
      you a genius. This <b>swaps flattery for an honest expert read</b>.
    </>
  ),
};

export default function AntiLyingPromptsGuide() {
  const [tab, setTab] = useState<"claude" | "gpt">("claude");

  return (
    <div
      className={`anti-lying-prompts ${GeistSans.className} ${jetbrains.variable}`}
    >
      <div className="alp-wrap">
        <Link href="/guide" className="alp-back">
          <ArrowLeft className="h-4 w-4" aria-hidden />
          All guides
        </Link>

        <header>
          <span className="alp-eyebrow">
            <span className="alp-dot" aria-hidden />
            The free guide
          </span>
          <h1>
            The 3 prompts that stop
            <br />
            AI from <span className="alp-hl">lying to you</span>.
          </h1>
          <p className="alp-lede">
            AI fails you in three quiet ways: it makes things up, it leans on
            what it was trained on, and it agrees with you even when you&apos;re
            wrong.{" "}
            <strong>
              Here are the three one-line fixes, plus exactly where to paste
              them in Claude and ChatGPT so they run on every chat.
            </strong>
          </p>
          <div className="alp-meter">
            <span className="alp-chip">
              <span className="alp-x">&times;</span> Hallucination
            </span>
            <span className="alp-chip">
              <span className="alp-x">&times;</span> Bias
            </span>
            <span className="alp-chip">
              <span className="alp-x">&times;</span> Sycophancy
            </span>
          </div>
        </header>

        <div className="alp-seclabel">
          <span className="alp-n alp-mono">01</span>
          <h2>The three prompts</h2>
          <span className="alp-rule" />
        </div>

        {PROMPTS.map((prompt) => (
          <div key={prompt.id} className="alp-card">
            <span className="alp-tag alp-mono">{prompt.tag}</span>
            <h3>{prompt.title}</h3>
            <span className="alp-problem">{prompt.problem}</span>
            <p className="alp-does">{PROMPT_DOES[prompt.id]}</p>
            <div className="alp-promptbox alp-mono">
              <span className="alp-quote">{prompt.text}</span>
              <CopyButton text={prompt.text} />
            </div>
          </div>
        ))}

        <div className="alp-seclabel">
          <span className="alp-n alp-mono">02</span>
          <h2>Where to put them</h2>
          <span className="alp-rule" />
        </div>
        <p className="alp-setup-intro">
          You can paste a prompt at the end of any single message for a one-off.
          But the real move is setting them once so they run on every chat
          automatically. Two ways in each tool: across all chats, or scoped to a
          single project.
        </p>

        <div className="alp-tabs">
          <button
            type="button"
            className={`alp-tab${tab === "claude" ? " alp-active" : ""}`}
            onClick={() => setTab("claude")}
          >
            <span className="alp-b" aria-hidden />
            Claude
          </button>
          <button
            type="button"
            className={`alp-tab${tab === "gpt" ? " alp-active" : ""}`}
            onClick={() => setTab("gpt")}
          >
            <span className="alp-b" aria-hidden />
            ChatGPT
          </button>
        </div>

        <div
          className={`alp-panel${tab === "claude" ? " alp-active" : ""}`}
          id="claude"
          hidden={tab !== "claude"}
        >
          <SetupRoutes routes={CLAUDE_ROUTES} />
        </div>

        <div
          className={`alp-panel${tab === "gpt" ? " alp-active" : ""}`}
          id="gpt"
          hidden={tab !== "gpt"}
        >
          <SetupRoutes routes={GPT_ROUTES} />
          <div className="alp-note">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4M12 8h.01" />
            </svg>
            <span>
              If ChatGPT also has a <b>Personality</b> dropdown set to something
              playful, it can soften a blunt instruction. Keep the personality
              neutral so your honesty rule isn&apos;t watered down.
            </span>
          </div>
        </div>

        <div className="alp-tldr">
          <h3>The 10-second version</h3>
          <ul>
            <li>
              <CheckIcon />
              <span>
                Three failures, three fixes:{" "}
                <b>hallucination, bias, sycophancy</b>.
              </span>
            </li>
            <li>
              <CheckIcon />
              <span>
                Paste them once into <b>settings</b> for all chats, or{" "}
                <b>project instructions</b> for one workspace.
              </span>
            </li>
            <li>
              <CheckIcon />
              <span>
                Same idea in Claude and ChatGPT. Set it and your AI stops
                quietly working against you.
              </span>
            </li>
          </ul>
        </div>

        <footer>
          <div className="alp-name">Made by Mercy Thaddeus</div>
          <div className="alp-sub">
            AI that tells you the truth &middot;{" "}
            <a
              href="https://attentionfactory.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Attention Factory
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
