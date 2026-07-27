"use client";

import { Fragment, useCallback, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

import {
  CONFIG_PATHS,
  EASY_STEPS,
  GUIDES_PAGE,
  MCP_JSON,
  MCP_URL,
  TOKEN_PAGE,
  TOOLS,
  TRANSCRIBE_PROMPTS,
  TROUBLESHOOT,
  WATCH_PROMPTS,
} from "./data";
import "./transcriptx-claude.css";

function highlightPlaceholders(text: string) {
  return text.split(/(YOUR_TOKEN|<URL>|<PROFILE URL>|\/mcp\/|\?token=)/g).map((part, i) =>
    part === "YOUR_TOKEN" ||
    part === "<URL>" ||
    part === "<PROFILE URL>" ||
    part === "/mcp/" ||
    part === "?token=" ? (
      <span key={i} className="txc-fill">
        {part}
      </span>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}

function CopyBlock({ text, label }: { text: string; label?: string }) {
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
    <div className="txc-code">
      <button
        type="button"
        className={`txc-copy${copied ? " txc-done" : ""}`}
        onClick={onCopy}
      >
        {copied ? "Copied" : label ?? "Copy"}
      </button>
      <pre>{highlightPlaceholders(text)}</pre>
    </div>
  );
}

function PromptRow({ text }: { text: string }) {
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
    <button
      type="button"
      className={`txc-prompt${copied ? " txc-done" : ""}`}
      onClick={onCopy}
    >
      <span className="txc-prompt-txt">{highlightPlaceholders(text)}</span>
      <span className="txc-prompt-tag">{copied ? "Copied" : "Copy"}</span>
    </button>
  );
}

export default function TranscriptxClaudeGuide() {
  return (
    <div className="txc-guide">
      <Link href="/guide" className="txc-back">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        All guides
      </Link>

      <header className="txc-hero">
        <div className="txc-topbar">
          <span className="txc-brand">
            TRANSCRIPTX<sup>®</sup>
          </span>
          <span className="txc-brand-tag">Setup guide</span>
        </div>

        <p className="txc-eyebrow">Setup · Claude Desktop &amp; claude.ai</p>
        <h1>Get any video&apos;s transcript directly inside Claude</h1>
        <p className="txc-lede">
          Add TranscriptX as a custom connector. It takes about a minute, works
          in both Claude Desktop and claude.ai, and the connector syncs across
          both when you&apos;re signed in to the same account.
        </p>
        <a
          className="txc-btn"
          href={TOKEN_PAGE}
          target="_blank"
          rel="noopener noreferrer"
        >
          Generate token <span aria-hidden>→</span>
        </a>
      </header>

      <div className="txc-rule" />

      <section className="txc-section">
        <p className="txc-eyebrow">Easy way · Custom connectors UI</p>
        <ol className="txc-steps">
          {EASY_STEPS.map((step, i) => (
            <li key={step}>
              {i === 4 ? (
                <>
                  Paste your URL:
                  <CopyBlock text={MCP_URL} />
                </>
              ) : (
                <>
                  {step.split(/(\bCustomize\b|\bConnectors\b|\+|Add custom connector)/).map((part, j) =>
                    ["Customize", "Connectors", "+", "Add custom connector"].includes(part) ? (
                      <b key={j}>{part}</b>
                    ) : (
                      <Fragment key={j}>{part}</Fragment>
                    ),
                  )}
                </>
              )}
            </li>
          ))}
        </ol>
        <p className="txc-note">
          Replace <code className="txc-chip">YOUR_TOKEN</code> with the personal
          token from your{" "}
          <a href={TOKEN_PAGE} target="_blank" rel="noopener noreferrer">
            /account/mcp
          </a>{" "}
          page. The token lives in the URL, so there&apos;s no separate auth
          header to add.
        </p>
      </section>

      <div className="txc-rule" />

      <section className="txc-section">
        <p className="txc-eyebrow">Power-user way · JSON config (Claude Desktop)</p>
        <p className="txc-lede">
          If you&apos;d rather edit the config file directly, open:
        </p>
        <ul className="txc-plain">
          {CONFIG_PATHS.map((item) => (
            <li key={item.label}>
              <b>{item.label}:</b>{" "}
              <code className="txc-chip">{item.path}</code>
            </li>
          ))}
        </ul>
        <p className="txc-note">
          Add this to the <code className="txc-chip">mcpServers</code> block:
        </p>
        <CopyBlock text={MCP_JSON} />
        <p className="txc-note">
          Restart Claude Desktop. Same result as the Connectors UI.
        </p>
      </section>

      <div className="txc-rule" />

      <section className="txc-section">
        <p className="txc-eyebrow">What you can do once it&apos;s connected</p>
        <p className="txc-lede">Six tools become available to your AI:</p>
        <ul className="txc-tools">
          {TOOLS.map((tool) => (
            <li key={tool.name}>
              <span className="txc-fn">{tool.name}</span>
              <span>
                {tool.body}{" "}
                <span className="txc-cred">({tool.credit})</span>
              </span>
            </li>
          ))}
        </ul>
      </section>

      <div className="txc-rule" />

      <section className="txc-section">
        <p className="txc-eyebrow">Try it</p>
        <h2>Make Claude watch the video</h2>
        <p className="txc-lede">
          <code className="txc-chip">watch_url</code> hands Claude the actual
          frames plus a timestamped transcript and the real view, like, and
          comment counts. That&apos;s how it can tell you what&apos;s happening
          on screen, not only what was said. Tap any prompt to copy it.
        </p>
        <div className="txc-prompts">
          {WATCH_PROMPTS.map((p) => (
            <PromptRow key={p} text={p} />
          ))}
        </div>
        <p className="txc-note">
          Watching costs 2 credits per video. A plain transcript is 1.
        </p>

        <h3 className="txc-sub">Or just get the words</h3>
        <div className="txc-prompts">
          {TRANSCRIBE_PROMPTS.map((p) => (
            <PromptRow key={p} text={p} />
          ))}
        </div>
      </section>

      <div className="txc-rule" />

      <section className="txc-section">
        <p className="txc-eyebrow">If something breaks</p>
        <ul className="txc-plain">
          {TROUBLESHOOT.map((item) => (
            <li key={item.title}>
              <b>{item.title}</b> {item.body}
            </li>
          ))}
        </ul>
      </section>

      <footer className="txc-foot">
        <a href={GUIDES_PAGE} target="_blank" rel="noopener noreferrer">
          ← All setup guides
        </a>
        <span className="txc-fbrand">TRANSCRIPTX®</span>
      </footer>
    </div>
  );
}
