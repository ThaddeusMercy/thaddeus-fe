"use client";

import { Fragment, useCallback, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

import {
  CAPABILITIES,
  DOCTOR,
  DRY_RUN,
  EASY_SOURCES,
  FAQS,
  FULL_INSTALL,
  INSTALL_PROMPT,
  OFFICIAL_LINKS,
  PIPX_INSTALL,
  PROMPT_DISCUSSIONS,
  PROMPT_DOCTOR,
  PROMPT_GITHUB,
  PROMPT_READ_PAGE,
  PROMPT_YOUTUBE,
  REQUIREMENTS,
  SAFE_CHECK,
  SAFETY_RULES,
  SOCIAL_NEEDS,
} from "./data";
import "./agent-reach.css";

function highlightBrackets(text: string) {
  return text.split(/(\[[^\]]+\])/g).map((part, i) =>
    part.startsWith("[") && part.endsWith("]") ? (
      <span key={i} className="ar-fill">
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
    <div className="ar-block">
      <div className="ar-block-head">
        <span className="ar-block-label">{label}</span>
        <button
          type="button"
          className={`ar-copy${copied ? " ar-done" : ""}`}
          onClick={onCopy}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre>{highlightBrackets(text)}</pre>
    </div>
  );
}

export default function AgentReachGuide() {
  return (
    <div className="ar-guide">
      <Link href="/guide" className="ar-back">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        All guides
      </Link>

      <header className="ar-hero">
        <p className="ar-eyebrow">Setup guide · Claude Code &amp; AI agents</p>
        <h1>How to give your AI agent access to more of the web with Agent Reach</h1>
        <p className="ar-lede">
          Agent Reach helps command-running AI agents read and search more sources
          on the internet.
        </p>
      </header>

      <section className="ar-section">
        <p>
          It can help your agent work with normal websites, web search, YouTube,
          GitHub, RSS feeds, and supported social platforms.
        </p>
        <p>
          It works with tools such as Claude Code, Cursor, OpenClaw, Codex, and
          other AI agents that can run terminal commands.
        </p>
        <p>
          Agent Reach does not remove platform rules or give your agent access to
          private accounts. It can only use the sources, logins, and browser
          sessions you connect.
        </p>
      </section>

      <section className="ar-section">
        <h2>Official links</h2>
        <ul className="ar-links">
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

      <section className="ar-section">
        <h2>What Agent Reach can help you do</h2>
        <p>With the right setup, your AI agent can:</p>
        <ul className="ar-check">
          {CAPABILITIES.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>
          Some sources work after the main installation. Others need a browser
          login, cookie, extension, API key, or another tool.
        </p>
      </section>

      <section className="ar-section">
        <h2>What you need before you start</h2>
        <p>You need:</p>
        <ul className="ar-check">
          {REQUIREMENTS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="ar-note">
          <p>
            A phone-only setup is not a good fit for this tool.
          </p>
        </div>
      </section>

      <section className="ar-section">
        <h2>The easiest way to install it</h2>
        <p>
          Open Claude Code, Cursor, OpenClaw, or another AI agent that can use
          your terminal.
        </p>
        <p>Paste this prompt:</p>
        <CopyBlock label="Install with your AI agent" text={INSTALL_PROMPT} />
        <p>
          The first check should only inspect your computer and tell you what is
          missing.
        </p>
        <p>Read every permission request before you approve it.</p>
      </section>

      <section className="ar-section">
        <h2>Manual installation</h2>
        <p>The recommended manual method uses pipx.</p>
        <p>Run:</p>
        <CopyBlock label="Install with pipx" text={PIPX_INSTALL} />
        <p>Then run the safe check:</p>
        <CopyBlock label="Safe check" text={SAFE_CHECK} />
        <p>This checks your setup without making system changes.</p>
        <p>To preview the changes a full setup would make, run:</p>
        <CopyBlock label="Dry run" text={DRY_RUN} />
        <p>Only after you understand and approve the changes, run:</p>
        <CopyBlock label="Full system setup" text={FULL_INSTALL} />
      </section>

      <section className="ar-section">
        <h2>Check what is working</h2>
        <p>Run:</p>
        <CopyBlock label="Doctor" text={DOCTOR} />
        <p>This shows:</p>
        <ul className="ar-check">
          <li>The sources that are ready</li>
          <li>The sources that need a login or extra setup</li>
          <li>Missing tools</li>
          <li>Problems that need to be fixed</li>
        </ul>
        <p>Run this command again after you add a new platform.</p>
      </section>

      <section className="ar-section">
        <h2>Start with the easy sources</h2>
        <p>The main setup can prepare sources such as:</p>
        <ul className="ar-check">
          {EASY_SOURCES.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>Test one of these before adding social platforms.</p>
      </section>

      <section className="ar-section">
        <h2>Add social platforms only when you need them</h2>
        <p>
          Platforms such as X, Reddit, Facebook, Instagram, and LinkedIn may need
          more setup.
        </p>
        <p>Depending on the platform, you may need:</p>
        <ul className="ar-check">
          {SOCIAL_NEEDS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>
          Do not connect every account at once. Add one platform, test it, and
          then move to the next.
        </p>
      </section>

      <section className="ar-section">
        <h2>Prompts you can copy</h2>

        <h3>Read a web page</h3>
        <CopyBlock label="Web page prompt" text={PROMPT_READ_PAGE} />

        <h3>Pull a YouTube transcript</h3>
        <CopyBlock label="YouTube prompt" text={PROMPT_YOUTUBE} />

        <h3>Study a GitHub project</h3>
        <CopyBlock label="GitHub prompt" text={PROMPT_GITHUB} />

        <h3>Find public discussions</h3>
        <CopyBlock label="Discussions prompt" text={PROMPT_DISCUSSIONS} />

        <h3>Check your setup</h3>
        <CopyBlock label="Doctor prompt" text={PROMPT_DOCTOR} />
      </section>

      <section className="ar-section">
        <h2>Safety notes</h2>
        <p>
          Cookies and browser sessions can give access to your account. Treat
          them like passwords.
        </p>
        <p>Follow these rules:</p>
        <ul className="ar-check">
          {SAFETY_RULES.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="ar-section">
        <h2>Common problems</h2>

        <div className="ar-problem">
          <h3>The installation will not start</h3>
          <p>
            Make sure your AI agent can use terminal commands. You may need to
            turn on its coding or command tools first.
          </p>
        </div>

        <div className="ar-problem">
          <h3>A social platform is not working</h3>
          <p>Run:</p>
          <CopyBlock label="Doctor" text={DOCTOR} />
          <p>
            The platform may need a browser login, extension, cookie, API key, or
            another setup step.
          </p>
        </div>

        <div className="ar-problem">
          <h3>Facebook or Instagram is not connecting</h3>
          <p>
            Make sure you are logged in through Chrome and that the browser
            connection is active. These channels are better suited to a desktop
            setup than a server with no browser.
          </p>
        </div>

        <div className="ar-problem">
          <h3>Reddit is not working</h3>
          <p>
            Reddit normally needs a logged-in session. Anonymous access is not
            the standard setup.
          </p>
        </div>

        <div className="ar-problem">
          <h3>The tool asks for system access</h3>
          <p>
            Stop and read what it wants to change. Only approve the full system
            setup when you understand the request.
          </p>
        </div>
      </section>

      <section className="ar-section">
        <h2>Frequently asked questions</h2>
        {FAQS.map((item) => (
          <div className="ar-faq" key={item.q}>
            <h3>{item.q}</h3>
            <p>{item.a}</p>
          </div>
        ))}
      </section>

      <section className="ar-section">
        <h2>Final note</h2>
        <p>
          Agent Reach changes often because the platforms it connects to also
          change. Check the{" "}
          <a
            href="https://github.com/Panniantong/Agent-Reach"
            target="_blank"
            rel="noopener noreferrer"
          >
            official GitHub page
          </a>{" "}
          when a channel stops working or before you publish a new setup guide.
        </p>
        <p className="ar-sig">MERCY THADDEUS &nbsp;|&nbsp; ATTENTION FACTORY</p>
      </section>
    </div>
  );
}
