"use client";

import { Fragment, useCallback, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

import {
  ABOUT_REUSE,
  APPROVE_CHECKS,
  BRAND_INPUTS,
  BUILD_MATCH,
  COMPARE_CHECKS,
  FIGMA_INSPECT,
  ITERATE_EXAMPLES,
  MOTION_CHECKS,
  NEED_ITEMS,
  PROMPT_ABOUT_BUILD,
  PROMPT_ABOUT_DESIGN,
  PROMPT_ANALYZE,
  PROMPT_BRAND,
  PROMPT_BUILD,
  PROMPT_COMPARE,
  PROMPT_MASTER,
  PROMPT_MOTION,
  PROMPT_RECREATE,
  PROMPT_STACK,
  SCREENSHOT_STEPS,
  WORKFLOW_STEPS,
} from "./data";
import "./recreate-website-chatgpt-figma.css";

function highlightBrackets(text: string) {
  return text.split(/(\[[^\]]+\])/g).map((part, i) =>
    part.startsWith("[") && part.endsWith("]") ? (
      <span key={i} className="rwf-fill">
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
    <div className="rwf-block">
      <div className="rwf-block-head">
        <span className="rwf-block-label">{label}</span>
        <button
          type="button"
          className={`rwf-copy${copied ? " rwf-done" : ""}`}
          onClick={onCopy}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre>{highlightBrackets(text)}</pre>
    </div>
  );
}

const TOC = [
  { id: "need", label: "What you need" },
  { id: "capture", label: "Capture" },
  { id: "connect", label: "Connect Figma" },
  { id: "analyze", label: "Analyze" },
  { id: "recreate", label: "Recreate in Figma" },
  { id: "brand", label: "Make it yours" },
  { id: "approve", label: "Approve" },
  { id: "build", label: "Build" },
  { id: "compare", label: "Compare" },
  { id: "pages", label: "More pages" },
  { id: "motion", label: "Animations" },
  { id: "workflow", label: "Workflow" },
  { id: "master", label: "Master prompt" },
] as const;

export default function RecreateWebsiteChatgptFigmaGuide() {
  return (
    <div className="rwf-guide">
      <Link href="/guide" className="rwf-back">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        All guides
      </Link>

      <header className="rwf-hero">
        <p className="rwf-eyebrow">ChatGPT · Figma · Website design</p>
        <h1>How to recreate a website you love with ChatGPT and Figma</h1>
        <p className="rwf-lede">
          You do not need to be a designer or developer to use a website you
          like as inspiration for your own.
        </p>
        <div className="rwf-flow" aria-label="Workflow">
          {[
            "Reference website",
            "screenshot",
            "ChatGPT",
            "Figma",
            "customize",
            "approve",
            "build",
          ].map((step, i, arr) => (
            <Fragment key={step}>
              <span>{step}</span>
              {i < arr.length - 1 ? <i aria-hidden>→</i> : null}
            </Fragment>
          ))}
        </div>
        <p>
          The point is not to copy another company&apos;s website pixel for
          pixel. You are using it as a visual reference, then changing the
          branding, content, imagery and design choices until the final website
          is yours.
        </p>
        <nav className="rwf-toc" aria-label="Steps">
          {TOC.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="rwf-section" id="need">
        <h2>What you need</h2>
        <ul className="rwf-list">
          {NEED_ITEMS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="rwf-section" id="capture">
        <h2>Step 1: capture the entire website</h2>
        <p>Open the website you like in Chrome.</p>
        <p>
          Install a full-page screenshot extension such as GoFullPage. Unlike a
          normal screenshot, this captures the entire webpage from the top of
          the page to the bottom as one image.
        </p>
        <p>Before taking the screenshot:</p>
        <ol className="rwf-olist">
          {SCREENSHOT_STEPS.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <p className="rwf-note">
          You now have one image showing the complete design.
        </p>
      </section>

      <section className="rwf-section" id="connect">
        <h2>Step 2: connect Figma</h2>
        <p>Connect Figma to ChatGPT or Codex before starting.</p>
        <p>
          Once connected, ChatGPT can work with your Figma files and create or
          modify designs inside Figma.
        </p>
        <p>Create a blank Figma Design file for the project.</p>
        <p>You can name it something simple like:</p>
        <CopyBlock
          label="Figma file name"
          text="Website redesign - [your brand]"
        />
      </section>

      <section className="rwf-section" id="analyze">
        <h2>Step 3: give ChatGPT the reference</h2>
        <p>Upload the full-page screenshot to ChatGPT.</p>
        <p>
          Do not immediately tell it to start building. First, get it to
          understand what it is looking at.
        </p>
        <p>Use this prompt:</p>
        <CopyBlock label="Prompt · Analyze the reference" text={PROMPT_ANALYZE} />
        <p>
          This gives ChatGPT a chance to understand the design instead of
          blindly trying to reproduce pixels.
        </p>
      </section>

      <section className="rwf-section" id="recreate">
        <h2>Step 4: recreate the structure in Figma</h2>
        <p>
          Once you are happy with the analysis, ask ChatGPT to create the
          design.
        </p>
        <CopyBlock
          label="Prompt · Recreate in Figma"
          text={PROMPT_RECREATE}
        />
        <p>Let ChatGPT create the Figma design.</p>
        <p>Open the Figma file and inspect it before moving on.</p>
        <p>Look at:</p>
        <div className="rwf-chips">
          {FIGMA_INSPECT.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <p>
          If something looks wrong, tell ChatGPT what to change. For example:
        </p>
        <ul className="rwf-list">
          {ITERATE_EXAMPLES.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>Keep iterating until the structure feels right.</p>
      </section>

      <section className="rwf-section" id="brand">
        <h2>Step 5: make it yours</h2>
        <p>This is the most important part.</p>
        <p>
          You do not want to simply publish someone else&apos;s website with
          different text.
        </p>
        <p>
          Now give ChatGPT information about your own brand. You can provide:
        </p>
        <div className="rwf-chips">
          {BRAND_INPUTS.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <p>Then use this prompt:</p>
        <CopyBlock label="Prompt · Make it your brand" text={PROMPT_BRAND} />
        <p>Now review the new version in Figma.</p>
        <p>This is your chance to design the website before writing code.</p>
      </section>

      <section className="rwf-section" id="approve">
        <h2>Step 6: approve the Figma design</h2>
        <p>Do not rush straight into development.</p>
        <p>Look through the entire page. Ask yourself:</p>
        <ul className="rwf-list">
          {APPROVE_CHECKS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>Make your changes in Figma first.</p>
        <p>
          This saves you from repeatedly redesigning the website inside the code
          later.
        </p>
      </section>

      <section className="rwf-section" id="build">
        <h2>Step 7: build the website from the approved Figma design</h2>
        <p>
          Once you approve the design, give ChatGPT the Figma file and ask it to
          build the site.
        </p>
        <CopyBlock label="Prompt · Build from Figma" text={PROMPT_BUILD} />
        <p>
          If you already know what stack you want, add it to the prompt. For
          example:
        </p>
        <CopyBlock label="Optional · Stack" text={PROMPT_STACK} />
        <p>
          If you do not care about the stack, let ChatGPT choose based on the
          project.
        </p>
        <p>The build should reproduce:</p>
        <div className="rwf-chips">
          {BUILD_MATCH.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="rwf-section" id="compare">
        <h2>Step 8: make ChatGPT check its own work</h2>
        <p>Do not stop after the first version.</p>
        <p>Ask:</p>
        <CopyBlock
          label="Prompt · Compare against Figma"
          text={PROMPT_COMPARE}
        />
        <p>Look for differences in:</p>
        <div className="rwf-chips">
          {COMPARE_CHECKS.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <p>
          This turns the process into an iteration loop rather than accepting
          whatever the first generation produces.
        </p>
      </section>

      <section className="rwf-section" id="pages">
        <h2>Step 9: add more pages</h2>
        <p>
          One of the biggest advantages of this workflow is that you already
          have a design system.
        </p>
        <p>
          If you want an About, Pricing, Contact, Services or Dashboard page,
          design it before building it.
        </p>
        <CopyBlock
          label="Prompt · Design another page"
          text={PROMPT_ABOUT_DESIGN}
        />
        <p>Reuse the same:</p>
        <div className="rwf-chips">
          {ABOUT_REUSE.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <p>Review it. Make changes. Then say:</p>
        <CopyBlock
          label="Prompt · Implement approved page"
          text={PROMPT_ABOUT_BUILD}
        />
        <p>Repeat this process for every major page.</p>
      </section>

      <section className="rwf-section" id="motion">
        <h2>What about websites with animations?</h2>
        <p>
          A screenshot works well for static visual design, but it cannot show
          how elements move.
        </p>
        <p>
          For websites with heavy animation, scrolling effects, transitions or
          motion graphics, capture a screen recording while interacting with the
          site.
        </p>
        <p>
          Where video uploads are available in ChatGPT, upload the recording
          together with your screenshots and ask ChatGPT to identify the motion
          behavior.
        </p>
        <CopyBlock label="Prompt · Document motion" text={PROMPT_MOTION} />
        <p>Document every important interaction, including:</p>
        <div className="rwf-chips">
          {MOTION_CHECKS.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <p>
          Once the design and motion direction are approved, ChatGPT can use
          them when implementing the site.
        </p>
      </section>

      <section className="rwf-section" id="workflow">
        <h2>The workflow to remember</h2>
        <div className="rwf-path">
          <div className="rwf-path-row">
            <strong>Do not go</strong>
            <p>Idea → code → keep changing code until it looks right.</p>
          </div>
          <div className="rwf-path-row">
            <strong>Go</strong>
            <p>{WORKFLOW_STEPS.join(" → ")}.</p>
          </div>
        </div>
        <p>
          You are separating design decisions from development decisions. That
          makes it much easier to control what eventually gets built.
        </p>
      </section>

      <section className="rwf-section" id="master">
        <h2>Copy this master prompt</h2>
        <p>You can also start the entire process with this:</p>
        <CopyBlock label="Master prompt" text={PROMPT_MASTER} />
        <p>
          That&apos;s it. You have gone from seeing a website you like to having
          an original Figma design and a working website based on a design you
          approved before development started.
        </p>
      </section>
    </div>
  );
}
