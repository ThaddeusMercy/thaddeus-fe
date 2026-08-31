"use client";

import { Fragment, useCallback, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

import {
  CONTENT_PROMPT,
  DAILY_WORKFLOW,
  FAQS,
  FOLDER_GUIDE,
  FOLDER_TREE,
  IMPROVEMENT_TIPS,
  INGEST_PROMPT,
  INSPIRATION_LINKS,
  INSTALL_MAC,
  INSTALL_WIN,
  LAST_CHECKED,
  MAINTENANCE_PROMPT,
  MEETING_PROMPT,
  NEED,
  OFFICIAL_LINKS,
  OPEN_VAULT,
  PRIVACY_RULES,
  QUERY_PROMPT,
  SETUP_PROMPT,
  TEST_FILES,
  TROUBLESHOOTING,
  USE_CASES,
  VAULT_STEPS,
} from "./data";
import "./ai-second-brain.css";

function highlightBrackets(text: string) {
  return text.split(/(\[[^\]]+\])/g).map((part, i) =>
    part.startsWith("[") && part.endsWith("]") ? (
      <span key={i} className="asb-fill">
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
    <div className="asb-block">
      <div className="asb-block-head">
        <span className="asb-block-label">{label}</span>
        <button
          type="button"
          className={`asb-copy${copied ? " asb-done" : ""}`}
          onClick={onCopy}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre>{highlightBrackets(text)}</pre>
    </div>
  );
}

export default function AiSecondBrainGuide() {
  return (
    <div className="asb-guide">
      <Link href="/guide" className="asb-back">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        All guides
      </Link>

      <header className="asb-hero">
        <p className="asb-eyebrow">Setup guide · Claude Code &amp; Obsidian</p>
        <h1>How to build an AI second brain with Claude Code and Obsidian</h1>
        <p className="asb-lede">
          An AI second brain is a folder where you keep the information you want
          AI to use with you.
        </p>
      </header>

      <section className="asb-section">
        <p>
          It can contain notes, documents, meeting transcripts, project files,
          research, saved ideas, customer feedback, and anything else you want to
          find and use again.
        </p>
        <p>
          Obsidian gives you a clean way to view and edit the files. Claude Code
          can read the same folder, organize new information, connect related
          notes, and answer questions based on what is inside.
        </p>
        <p>
          The AI model is not retraining itself on your files. The system
          becomes more useful because the folder contains more of your approved
          information and a clearer structure over time.
        </p>
      </section>

      <section className="asb-section">
        <h2>What you can use it for</h2>
        <ul className="asb-check">
          {USE_CASES.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="asb-section">
        <h2>What you need</h2>
        <ul className="asb-check">
          {NEED.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="asb-section">
        <h2>Official links</h2>
        <ul className="asb-links">
          {OFFICIAL_LINKS.map((link) => (
            <li key={link.href}>
              {link.label}:{" "}
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.href}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="asb-section">
        <h2>Step 1: Install Obsidian and create a vault</h2>
        <ol className="asb-steps">
          {VAULT_STEPS.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <p>
          An Obsidian vault is a normal folder on your computer. The notes
          inside it are Markdown files, so you can open them with other tools
          too.
        </p>
      </section>

      <section className="asb-section">
        <h2>Step 2: Install Claude Code</h2>
        <p>On macOS, Linux, or WSL, open Terminal and run:</p>
        <CopyBlock label="macOS / Linux / WSL" text={INSTALL_MAC} />
        <p>On Windows PowerShell, run:</p>
        <CopyBlock label="Windows PowerShell" text={INSTALL_WIN} />
      </section>

      <section className="asb-section">
        <h2>Step 3: Open Claude Code inside the vault</h2>
        <p>In Terminal, move into the vault folder and start Claude Code:</p>
        <CopyBlock label="Open vault in Claude Code" text={OPEN_VAULT} />
        <p>
          On macOS, you can also drag the vault folder into Terminal after
          typing <code>cd</code> to insert its full path.
        </p>
        <p>
          Confirm that Claude Code is working inside the correct folder before
          asking it to create anything.
        </p>
      </section>

      <section className="asb-section">
        <h2>The folder structure</h2>
        <p>
          This structure is simple enough to use every day but clear enough for
          AI to search:
        </p>
        <pre className="asb-tree">{FOLDER_TREE}</pre>
        <p>Use each folder like this:</p>
        <ul className="asb-check">
          {FOLDER_GUIDE.map((item) => (
            <li key={item.folder}>
              <strong>{item.folder}</strong>: {item.use}
            </li>
          ))}
        </ul>
        <p>
          You can rename or remove folders that do not match your life. A
          smaller structure you actually use is better than a complex structure
          you ignore.
        </p>
      </section>

      <section className="asb-section">
        <h2>Main setup prompt</h2>
        <p>Paste this into Claude Code while it is open inside the vault:</p>
        <CopyBlock label="Main setup prompt" text={SETUP_PROMPT} />
      </section>

      <section className="asb-section">
        <h2>Add your first information</h2>
        <p>
          Place a small test batch inside <code>00 Inbox</code>. Start with
          three to five files, not hundreds.
        </p>
        <p>Useful test files include:</p>
        <ul className="asb-check">
          {TEST_FILES.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>Then use the ingest prompt below.</p>
      </section>

      <section className="asb-section">
        <h2>Ingest prompt</h2>
        <CopyBlock label="Ingest prompt" text={INGEST_PROMPT} />
      </section>

      <section className="asb-section">
        <h2>Query prompt</h2>
        <p>Use this when you want an answer based on your second brain:</p>
        <CopyBlock label="Query prompt" text={QUERY_PROMPT} />
      </section>

      <section className="asb-section">
        <h2>Content prompt</h2>
        <p>Use this to create content from your own information:</p>
        <CopyBlock label="Content prompt" text={CONTENT_PROMPT} />
      </section>

      <section className="asb-section">
        <h2>Meeting preparation prompt</h2>
        <CopyBlock label="Meeting preparation prompt" text={MEETING_PROMPT} />
      </section>

      <section className="asb-section">
        <h2>Weekly maintenance prompt</h2>
        <p>Run this once a week:</p>
        <CopyBlock label="Weekly maintenance prompt" text={MAINTENANCE_PROMPT} />
      </section>

      <section className="asb-section">
        <h2>A simple daily workflow</h2>
        <ol className="asb-steps">
          {DAILY_WORKFLOW.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="asb-section">
        <h2>How to make the system more useful over time</h2>
        <ul className="asb-check">
          {IMPROVEMENT_TIPS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>
          The value comes from clear, reviewed information, not from having the
          biggest vault.
        </p>
      </section>

      <section className="asb-section">
        <h2>Privacy and safety</h2>
        <ul className="asb-check">
          {PRIVACY_RULES.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="asb-section">
        <h2>Troubleshooting</h2>
        {TROUBLESHOOTING.map((item) => (
          <div key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      </section>

      <section className="asb-section">
        <h2>Frequently asked questions</h2>
        {FAQS.map((faq) => (
          <div key={faq.q}>
            <h3>{faq.q}</h3>
            <p>{faq.a}</p>
          </div>
        ))}
      </section>

      <section className="asb-section">
        <h2>Final note</h2>
        <p>
          Start with a small test vault and a few useful files. Make sure the
          structure fits how you already work before importing years of
          information.
        </p>
        <p className="asb-meta">Last checked: {LAST_CHECKED}</p>
      </section>

      <section className="asb-section">
        <h2>Links and notes</h2>
        <p>Source inspiration:</p>
        <ul className="asb-links">
          {INSPIRATION_LINKS.map((href) => (
            <li key={href}>
              <a href={href} target="_blank" rel="noopener noreferrer">
                {href}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
