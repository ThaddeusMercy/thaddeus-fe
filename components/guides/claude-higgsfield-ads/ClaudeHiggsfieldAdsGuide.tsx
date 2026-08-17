"use client";

import { Fragment, useCallback, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

import {
  ANGLES,
  CHECK_PERSON,
  CHECK_PLATFORM,
  CHECK_PRODUCT,
  CHECK_SCRIPT,
  CHECK_TECH,
  CONNECT_STEPS,
  FAQS,
  FILE_NAMES,
  MCP_URL,
  NAMING_EXAMPLE,
  NAMING_PATTERN,
  NEED,
  OFFICIAL_LINKS,
  PREP_FILES,
  PROBLEMS,
  PROMPT_FULL,
  PROMPT_SHORT,
  SAFETY,
} from "./data";
import "./claude-higgsfield-ads.css";

function highlightBrackets(text: string) {
  return text.split(/(\[[^\]]+\])/g).map((part, i) =>
    part.startsWith("[") && part.endsWith("]") ? (
      <span key={i} className="cha-fill">
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
    <div className="cha-block">
      <div className="cha-block-head">
        <span className="cha-block-label">{label}</span>
        <button
          type="button"
          className={`cha-copy${copied ? " cha-done" : ""}`}
          onClick={onCopy}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre>{highlightBrackets(text)}</pre>
    </div>
  );
}

export default function ClaudeHiggsfieldAdsGuide() {
  return (
    <div className="cha-guide">
      <Link href="/guide" className="cha-back">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        All guides
      </Link>

      <header className="cha-hero">
        <p className="cha-eyebrow">Workflow guide · Claude &amp; Higgsfield</p>
        <h1>How to create a batch of UGC ads with Claude and Higgsfield MCP</h1>
        <p className="cha-lede">
          Connect Claude to Higgsfield MCP and use a copyable creative director
          prompt to plan, create, and review a large batch of UGC ad variations.
        </p>
      </header>

      <section className="cha-section">
        <p>
          This setup lets Claude plan the campaign while Higgsfield creates the
          images and videos.
        </p>
        <p>
          Claude can study your product information and references, create
          several ad angles, write hooks and short scripts, plan the shots, and
          keep a record of the batch. Higgsfield handles the image and video
          creation through its MCP connector.
        </p>
        <p>
          You still decide what is accurate, what matches the brand, and which
          assets can be published.
        </p>
      </section>

      <section className="cha-section">
        <h2>What you need</h2>
        <ul className="cha-check">
          {NEED.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="cha-section">
        <h2>Official links</h2>
        <ul className="cha-links">
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

      <section className="cha-section">
        <h2>Connect Higgsfield to Claude</h2>
        <ol className="cha-steps">
          {CONNECT_STEPS.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <CopyBlock label="MCP connector URL" text={MCP_URL} />
        <div className="cha-note">
          <p>
            You only need to connect the MCP once for the account, unless the
            connection is removed or its permission expires.
          </p>
        </div>
      </section>

      <section className="cha-section">
        <h2>Prepare your files before prompting Claude</h2>
        <p>Create a folder with:</p>
        <ul className="cha-check">
          {PREP_FILES.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>Use clear file names such as:</p>
        <CopyBlock label="Example file names" text={FILE_NAMES} />
        <p>
          Do not upload an image you do not have permission to use. Do not use a
          person&apos;s identity, face, or voice without permission.
        </p>
      </section>

      <section className="cha-section">
        <h2>Complete creative director prompt</h2>
        <p>
          Upload your product and reference files, then paste this prompt into
          Claude:
        </p>
        <CopyBlock label="Creative director prompt" text={PROMPT_FULL} />
      </section>

      <section className="cha-section">
        <h2>Shorter prompt for a small batch</h2>
        <p>Use this when you only want three to five ads:</p>
        <CopyBlock label="Short batch prompt" text={PROMPT_SHORT} />
      </section>

      <section className="cha-section">
        <h2>Why the test batch matters</h2>
        <p>
          A batch of 50 can use many credits and repeat the same visual error 50
          times.
        </p>
        <p>
          Create three to five samples first. Check the product, label, hands,
          face, room, camera movement, text, timing, and platform framing. Fix
          the prompt before scaling.
        </p>
        <p>
          The number of assets completed overnight depends on your Higgsfield
          plan, available credits, queue time, selected models, clip length,
          errors, and the number of retries.
        </p>
      </section>

      <section className="cha-section">
        <h2>Suggested batch structure</h2>
        <p>Use ten angles with five variations each:</p>
        <div className="cha-table-scroll">
          <table>
            <thead>
              <tr>
                <th>Angle</th>
                <th>What changes across the five variations</th>
              </tr>
            </thead>
            <tbody>
              {ANGLES.map((row) => (
                <tr key={row.angle}>
                  <td>{row.angle}</td>
                  <td>{row.changes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="cha-section">
        <h2>Review checklist</h2>
        <p>Check every asset before sending it to a brand or publishing it.</p>

        <h3>Product</h3>
        <ul className="cha-check">
          {CHECK_PRODUCT.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h3>Person</h3>
        <ul className="cha-check">
          {CHECK_PERSON.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h3>Script and claims</h3>
        <ul className="cha-check">
          {CHECK_SCRIPT.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h3>Platform</h3>
        <ul className="cha-check">
          {CHECK_PLATFORM.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h3>Technical quality</h3>
        <ul className="cha-check">
          {CHECK_TECH.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="cha-section">
        <h2>File naming</h2>
        <p>Use a simple naming system:</p>
        <CopyBlock label="Naming pattern" text={NAMING_PATTERN} />
        <p>Example:</p>
        <CopyBlock label="Example file name" text={NAMING_EXAMPLE} />
        <p>
          Keep the same creative ID in the plan, file name, review notes, and ad
          tracker.
        </p>
      </section>

      <section className="cha-section">
        <h2>Safety and disclosure</h2>
        <ul className="cha-check">
          {SAFETY.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="cha-section">
        <h2>Troubleshooting</h2>
        {PROBLEMS.map((item) => (
          <div className="cha-problem" key={item.q}>
            <h3>{item.q}</h3>
            <p>{item.a}</p>
          </div>
        ))}
      </section>

      <section className="cha-section">
        <h2>Frequently asked questions</h2>
        {FAQS.map((item) => (
          <div className="cha-faq" key={item.q}>
            <h3>{item.q}</h3>
            <p>{item.a}</p>
          </div>
        ))}
      </section>

      <section className="cha-section">
        <h2>Final note</h2>
        <p>
          The useful part of this workflow is not simply creating more assets. It
          is creating clear variations, tracking what changed, and reviewing
          product accuracy before anything reaches a customer.
        </p>
        <p className="cha-checked">Last checked: August 17, 2026</p>
        <p className="cha-sig">MERCY THADDEUS &nbsp;|&nbsp; ATTENTION FACTORY</p>
      </section>
    </div>
  );
}
