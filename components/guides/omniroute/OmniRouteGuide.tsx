"use client";

import { Fragment, useCallback, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

import {
  CAPABILITIES,
  COMPRESSION_USEFUL,
  CURL_TEST,
  DASHBOARD_URL,
  FAQS,
  LAUNCH,
  LAUNCH_PROFILE,
  NODE_CHECK,
  NPM_INSTALL,
  OFFICIAL_LINKS,
  OTHER_TOOLS,
  PROVIDER_STEPS,
  REQUIREMENTS,
  SECURITY_NOTES,
  SETUP_CLAUDE,
  START,
  SWITCHING_TIPS,
  USAGE_DEPENDS,
} from "./data";
import "./omniroute.css";

function highlightBrackets(text: string) {
  return text.split(/(\[[^\]]+\])/g).map((part, i) =>
    part.startsWith("[") && part.endsWith("]") ? (
      <span key={i} className="omr-fill">
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
    <div className="omr-block">
      <div className="omr-block-head">
        <span className="omr-block-label">{label}</span>
        <button
          type="button"
          className={`omr-copy${copied ? " omr-done" : ""}`}
          onClick={onCopy}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre>{highlightBrackets(text)}</pre>
    </div>
  );
}

export default function OmniRouteGuide() {
  return (
    <div className="omr-guide">
      <Link href="/guide" className="omr-back">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        All guides
      </Link>

      <header className="omr-hero">
        <p className="omr-eyebrow">Setup guide · Claude Code</p>
        <h1>How to use OmniRoute with Claude Code</h1>
        <p className="omr-lede">OmniRoute is an open source AI gateway.</p>
      </header>

      <section className="omr-section">
        <p>It sits between your coding tool and the AI providers you use.</p>
        <p>
          Instead of connecting Claude Code, Codex, Cursor, and other tools to
          one provider at a time, you can connect them to OmniRoute. It can then
          send each request to an available provider, track usage, move to
          another provider when one fails, and reduce the size of some requests
          before they are sent.
        </p>
        <p>
          The project currently lists hundreds of providers, many free options,
          and hundreds of models. These numbers can change as providers update
          their plans.
        </p>
      </section>

      <section className="omr-section">
        <h2>Official links</h2>
        <ul className="omr-links">
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

      <section className="omr-section">
        <h2>What OmniRoute can do</h2>
        <p>OmniRoute gives you:</p>
        <ul className="omr-check">
          {CAPABILITIES.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="omr-section">
        <h2>What &ldquo;almost unlimited&rdquo; means</h2>
        <p>
          OmniRoute does not give you unlimited access to one Claude account.
        </p>
        <p>
          It combines the providers, free tiers, subscriptions, and API accounts
          that you connect.
        </p>
        <p>
          When one route runs out or fails, OmniRoute can try another one.
        </p>
        <p>Your total usage depends on:</p>
        <ul className="omr-check">
          {USAGE_DEPENDS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="omr-note">
          <p>
            Not every provider is free. You also need to create or connect the
            provider accounts you want to use.
          </p>
        </div>
      </section>

      <section className="omr-section">
        <h2>What you need</h2>
        <p>You need:</p>
        <ul className="omr-check">
          {REQUIREMENTS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="omr-section">
        <h2>Setup steps</h2>

        <div className="omr-step">
          <p className="omr-num">Step 1</p>
          <h3>Install OmniRoute</h3>
          <p>Run:</p>
          <CopyBlock label="Install" text={NPM_INSTALL} />
        </div>

        <div className="omr-step">
          <p className="omr-num">Step 2</p>
          <h3>Start OmniRoute</h3>
          <p>Run:</p>
          <CopyBlock label="Start" text={START} />
          <p>The dashboard should open at:</p>
          <CopyBlock label="Dashboard" text={DASHBOARD_URL} />
          <p>Keep OmniRoute running while your coding tool is using it.</p>
        </div>

        <div className="omr-step">
          <p className="omr-num">Step 3</p>
          <h3>Connect a provider</h3>
          <p>Inside the dashboard:</p>
          <ol>
            {PROVIDER_STEPS.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p>
            Connect at least one more provider when possible, so OmniRoute has
            another option if the first one fails.
          </p>
          <p>
            The provider list changes often. Check the live dashboard to see
            which ones are free, limited, or paid.
          </p>
        </div>

        <div className="omr-step">
          <p className="omr-num">Step 4</p>
          <h3>Create an OmniRoute key</h3>
          <p>Open the API key or endpoints section in the dashboard.</p>
          <p>
            Create a new key and save it. The key may not be shown again.
          </p>
          <p>
            This is the key your coding tool uses to talk to your local
            OmniRoute gateway. It is different from the keys you add for outside
            providers.
          </p>
        </div>

        <div className="omr-step">
          <p className="omr-num">Step 5</p>
          <h3>Test the connection</h3>
          <p>Replace YOUR_KEY with the key you created:</p>
          <CopyBlock label="Test connection" text={CURL_TEST} />
          <p>A working setup should return a list of your connected models.</p>
        </div>

        <div className="omr-step">
          <p className="omr-num">Step 6</p>
          <h3>Use it with Claude Code</h3>
          <p>The fastest method is:</p>
          <CopyBlock label="Launch Claude Code" text={LAUNCH} />
          <p>This starts Claude Code through your local OmniRoute setup.</p>
          <p>To create model profiles, run:</p>
          <CopyBlock label="Setup Claude profiles" text={SETUP_CLAUDE} />
          <p>Then launch one of the profiles shown by OmniRoute:</p>
          <CopyBlock label="Launch with profile" text={LAUNCH_PROFILE} />
          <p>Replace PROFILE_NAME with the profile you want to use.</p>
        </div>
      </section>

      <section className="omr-section">
        <h2>How automatic switching works</h2>
        <p>You can place several providers or models in one route.</p>
        <p>
          When the first choice is unavailable, out of quota, or returning an
          error, OmniRoute can move to the next one.
        </p>
        <p>For a better setup:</p>
        <ul className="omr-check">
          {SWITCHING_TIPS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>
          Different models may write code in different ways. Check the work when
          OmniRoute changes models during a session.
        </p>
      </section>

      <section className="omr-section">
        <h2>How token compression works</h2>
        <p>
          OmniRoute can remove repeated or less useful context before sending a
          request to a model.
        </p>
        <p>
          The project reports that savings can range from about 15% to 95%,
          depending on the request and settings. A 90% saving is not guaranteed
          for every prompt.
        </p>
        <p>Compression is most useful when your session contains:</p>
        <ul className="omr-check">
          {COMPRESSION_USEFUL.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>
          Use lighter compression when you need every line, exact wording, or a
          complete record.
        </p>
      </section>

      <section className="omr-section">
        <h2>Other tools you can connect</h2>
        <p>OmniRoute can also work with tools such as:</p>
        <div className="omr-chips">
          {OTHER_TOOLS.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
        <p>
          The setup can be different for each tool. Use the official guide for
          the current command and base URL.
        </p>
      </section>

      <section className="omr-section">
        <h2>Privacy and security notes</h2>
        <p>
          OmniRoute runs locally, but your request still goes to the outside
          provider chosen for that request.
        </p>
        <p>Before you connect a provider:</p>
        <ul className="omr-check">
          {SECURITY_NOTES.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="omr-note">
          <p>
            Running OmniRoute on your computer does not mean the AI model also
            runs on your computer.
          </p>
        </div>
      </section>

      <section className="omr-section">
        <h2>Common problems</h2>

        <div className="omr-problem">
          <h3>The install command fails</h3>
          <p>Check that Node.js and npm are installed:</p>
          <CopyBlock label="Check Node and npm" text={NODE_CHECK} />
          <p>Then try the installation again.</p>
        </div>

        <div className="omr-problem">
          <h3>The dashboard does not open</h3>
          <p>Run:</p>
          <CopyBlock label="Start OmniRoute" text={START} />
          <p>Then open this address in your browser:</p>
          <CopyBlock label="Dashboard" text={DASHBOARD_URL} />
        </div>

        <div className="omr-problem">
          <h3>Claude Code is not using OmniRoute</h3>
          <p>
            Close the current Claude Code session and start a new one with:
          </p>
          <CopyBlock label="Launch" text={LAUNCH} />
        </div>

        <div className="omr-problem">
          <h3>A provider keeps failing</h3>
          <p>
            Open the provider page in the dashboard and check its login, API key,
            quota, and current status. Add another provider to the route.
          </p>
        </div>

        <div className="omr-problem">
          <h3>The output changes after switching providers</h3>
          <p>
            Different models have different strengths. Use similar models in one
            route, or stay with one model when consistency matters more than
            continuous usage.
          </p>
        </div>
      </section>

      <section className="omr-section">
        <h2>Frequently asked questions</h2>
        {FAQS.map((item) => (
          <div className="omr-faq" key={item.q}>
            <h3>{item.q}</h3>
            <p>{item.a}</p>
          </div>
        ))}
      </section>

      <section className="omr-section">
        <h2>Final note</h2>
        <p>
          OmniRoute and its provider list change often. Check the{" "}
          <a
            href="https://github.com/diegosouzapw/OmniRoute"
            target="_blank"
            rel="noopener noreferrer"
          >
            official GitHub page
          </a>{" "}
          before you publish exact provider counts, free token totals, or setup
          commands.
        </p>
        <p className="omr-sig">MERCY THADDEUS &nbsp;|&nbsp; ATTENTION FACTORY</p>
      </section>
    </div>
  );
}
