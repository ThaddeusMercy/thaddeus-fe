"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Star } from "@phosphor-icons/react";

import {
  BADGE_LABELS,
  CONNECTORS,
  PATCHBAY_PORTS,
  PRIMER_STEPS,
  type Connector,
} from "./data";
import "./claude-connectors.css";

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
    <div className="cc5-prompt">
      <span className="cc5-prompt-text">{text}</span>
      <button
        type="button"
        className={`cc5-copy${copied ? " cc5-copied" : ""}`}
        onClick={onCopy}
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}

function ConnectorCard({ connector }: { connector: Connector }) {
  return (
    <article className="cc5-card" id={connector.id}>
      <header className="cc5-card-head">
        <span className="cc5-card-num">{connector.num}</span>
        <div className="cc5-card-title">
          <span className="cc5-badge">{BADGE_LABELS[connector.badge]}</span>
          <p className="cc5-kicker">{connector.kicker}</p>
          <h3>{connector.name}</h3>
          <p className="cc5-tagline">{connector.tagline}</p>
        </div>
      </header>

      <div className="cc5-card-body">
        <div>
          <p className="cc5-block-label">Connect</p>
          {connector.url ? (
            <p className="cc5-url">
              <span className="cc5-url-scheme">https://</span>
              {connector.url.replace(/^https:\/\//, "")}
            </p>
          ) : null}
          {connector.urlNote ? (
            <p className="cc5-url-note">{connector.urlNote}</p>
          ) : null}
          <ol className="cc5-mini">
            {connector.setup.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>

        <div>
          <p className="cc5-block-label">Try it now</p>
          <div className="cc5-prompts">
            {connector.prompts.map((prompt) => (
              <PromptRow key={prompt} text={prompt} />
            ))}
          </div>
        </div>

        <div className="cc5-tip">
          <Star className="cc5-tip-icon" weight="fill" aria-hidden />
          <p>
            <strong>Most people miss:</strong> {connector.tip}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function ClaudeConnectorsGuide() {
  return (
    <div className="cc5-guide">
      <Link href="/guide" className="cc5-back">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        All guides
      </Link>

      <header className="cc5-hero">
        <span className="cc5-eyebrow">Attention Factory · Field Guide</span>
        <h1>
          5 Claude connectors that put you ahead of{" "}
          <span className="cc5-em">99% of people</span>
        </h1>
        <p className="cc5-lede">
          Without connectors, you&apos;re running Claude at about{" "}
          <strong>10% of what it can actually do.</strong> Connectors plug Claude
          into the tools you already work in, and most people have never touched
          them. This is the full setup, port by port.
        </p>

        <nav className="cc5-patchbay" aria-label="Connector jump links">
          <p className="cc5-patchbay-label">
            <span>The stack</span>
            <span>5 ports · ~10 min total</span>
          </p>
          <div className="cc5-ports">
            {PATCHBAY_PORTS.map((port) => (
              <a key={port.id} href={`#${port.id}`} className="cc5-port">
                <span className="cc5-port-num">{port.num}</span>
                <span className="cc5-port-name">{port.name}</span>
              </a>
            ))}
          </div>
        </nav>
      </header>

      <section className="cc5-band">
        <p className="cc5-sec-tag">Before you start</p>
        <h2>How connectors work, once</h2>
        <p className="cc5-sec-intro">
          Every connector below follows the same wiring. Learn it once here and
          each of the five takes about two minutes. Two flavors:{" "}
          <strong>directory</strong> connectors (already listed inside Claude)
          and <strong>custom MCP</strong> connectors (you paste a server URL).
          Setup lives on web or desktop, not the phone app.
        </p>

        <ol className="cc5-steps">
          {PRIMER_STEPS.map((step, i) => (
            <li key={step.title}>
              <span className="cc5-step-num">{i + 1}</span>
              <div>
                <h4>{step.title}</h4>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="cc5-connectors-sec">
        <p className="cc5-sec-tag">The five</p>
        <h2>Wire them up</h2>
        <p className="cc5-sec-intro">
          Each card has the connect path, the exact URL where you need one, three
          prompts to try the second it&apos;s live, and one thing most people
          miss.
        </p>

        <div className="cc5-connectors">
          {CONNECTORS.map((connector) => (
            <ConnectorCard key={connector.id} connector={connector} />
          ))}
        </div>
      </section>

      <section className="cc5-closer-wrap">
        <div className="cc5-closer">
          <p className="cc5-sec-tag cc5-sec-tag--light">You&apos;re wired in</p>
          <h2>That&apos;s the 90% most people never touch.</h2>
          <p>
            New connectors drop constantly and most never make the front page. I
            break down the ones worth your time, plus the prompts that make them
            actually pull their weight.
          </p>
          <div className="cc5-links">
            <a
              href="https://www.instagram.com/mercythaddeus_"
              target="_blank"
              rel="noopener noreferrer"
              className="cc5-link cc5-link--primary"
            >
              @mercythaddeus_
            </a>
            <a
              href="https://transcriptx.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="cc5-link"
            >
              Try TranscriptX
            </a>
            <a
              href="https://attentionfactory.io"
              target="_blank"
              rel="noopener noreferrer"
              className="cc5-link"
            >
              Attention Factory
            </a>
          </div>
        </div>
      </section>

      <footer className="cc5-foot">
        <p className="cc5-brand">Attention Factory</p>
        <p className="cc5-foot-sub">
          Field guide · Claude connectors · attentionfactory.io
        </p>
      </footer>
    </div>
  );
}
