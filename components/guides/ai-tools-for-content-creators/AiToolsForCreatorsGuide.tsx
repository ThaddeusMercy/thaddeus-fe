"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

import { trackEvent } from "@/lib/analytics";
import {
  ALL_PROMPTS,
  CHECKED_ON,
  CREATOR_TOOLS,
  PRICES_NOTE,
  UNIVERSITY_URL,
  WHERE_NEXT,
  type CreatorTool,
  type ToolImage,
} from "./data";
import "../chatgpt-study-codes/chatgpt-study-codes.css";
import "./ai-tools-for-content-creators.css";

const GUIDE_ID = "ai_tools_for_content_creators";

function shortName(tool: CreatorTool) {
  return tool.name.split(" (")[0];
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
    trackEvent("guide_copy", {
      guide: GUIDE_ID,
      block: label,
    });
    setTimeout(() => setCopied(false), 1600);
  }, [label, text]);

  return (
    <div className="scs-block">
      <div className="scs-block-head">
        <span className="scs-block-label">{label}</span>
        <button
          type="button"
          className={`scs-copy${copied ? " scs-done" : ""}`}
          onClick={onCopy}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre>{text}</pre>
    </div>
  );
}

function Shot({ image }: { image: ToolImage }) {
  return (
    <figure className="atc-shot">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading="lazy"
      />
      <figcaption>{image.caption}</figcaption>
    </figure>
  );
}

function ToolCard({ tool }: { tool: CreatorTool }) {
  return (
    <section className="scs-section atc-tool" id={tool.id}>
      <div className="scs-shortcut-head scs-shortcut-head--loose">
        <span className="scs-shortcut-num">{tool.num}</span>
        <h2 className="scs-shortcut-title">{tool.name}</h2>
      </div>
      <p className="atc-job">{tool.job}</p>
      <Shot image={tool.image} />
      {tool.what.map((para) => (
        <p key={para}>{para}</p>
      ))}

      <p className="scs-try">Try this</p>
      <p>{tool.tryIntro}</p>
      {tool.steps?.length ? (
        <ol className="scs-steps">
          {tool.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      ) : null}
      {tool.promptIntro ? <p>{tool.promptIntro}</p> : null}
      {tool.prompt ? (
        <CopyBlock label={tool.promptLabel ?? "Prompt"} text={tool.prompt} />
      ) : null}
      {tool.tip ? (
        <div className="scs-note">
          <p>
            <strong>Tip:</strong> {tool.tip}
          </p>
        </div>
      ) : null}

      <div className="atc-plans">
        <div className="atc-plan">
          <span className="atc-plan-label">Free plan</span>
          <ul>
            {tool.free.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="atc-plan">
          <span className="atc-plan-label">Cheapest paid plan</span>
          <ul>
            {tool.paid.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <p className="atc-checked">{PRICES_NOTE}</p>

      <div className="atc-new">
        <span className="atc-new-label">{tool.newLabel}</span>
        <p>{tool.newText}</p>
        <a
          className="atc-source"
          href={tool.source.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          Source: {tool.source.label}
        </a>
      </div>

      <div className="atc-links">
        <a
          className="atc-site"
          href={tool.site.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackEvent("guide_outbound_click", {
              destination: tool.id,
              source: GUIDE_ID,
            })
          }
        >
          Open {tool.site.label} →
        </a>
        {tool.related ? (
          <Link className="atc-related" href={tool.related.href}>
            {tool.related.label}
          </Link>
        ) : null}
      </div>
    </section>
  );
}

export default function AiToolsForCreatorsGuide() {
  return (
    <div className="scs-guide atc-guide">
      <Link href="/guide" className="scs-back">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        All guides
      </Link>

      <header className="scs-hero">
        <p className="scs-eyebrow">Creators · AI tools · 7 tools</p>
        <h1>7 AI tools every content creator should know</h1>
        <p className="scs-lede">
          One tool for each part of the job: ideas, writing in your voice,
          design, video editing, AI video, DMs and scheduling. Every one has a
          free plan, and you don&apos;t need all seven on day one.
        </p>
        <p className="atc-intro">
          For each tool you get what it does, a screenshot of it in action,
          something to try today, what the free plan gives you, the cheapest
          paid plan and one thing worth knowing.
        </p>
        <p className="atc-intro">
          Prices on this page are US prices, checked on {CHECKED_ON}. Some
          tools charge a different amount in your country, so check the price
          on the site before you pay.
        </p>
        <nav className="scs-toc" aria-label="Tools">
          <a href="#glance">At a glance</a>
          {CREATOR_TOOLS.map((tool) => (
            <a key={tool.id} href={`#${tool.id}`}>
              {tool.num} {shortName(tool)}
            </a>
          ))}
          <a href="#start">Where to start</a>
          <a href="#all">Copy the prompts</a>
        </nav>
      </header>

      <section className="scs-section" id="glance">
        <h2>The 7 tools at a glance</h2>
        <p>Tap a tool to jump straight to it.</p>
        <div className="scs-map">
          {CREATOR_TOOLS.map((tool) => (
            <a className="scs-map-item" key={tool.id} href={`#${tool.id}`}>
              <span className="scs-map-n">{tool.num}</span>
              <div>
                <strong>{shortName(tool)}</strong>
                <span>{tool.job}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {CREATOR_TOOLS.map((tool) => (
        <ToolCard key={tool.id} tool={tool} />
      ))}

      <section className="scs-section" id="start">
        <h2>Where to start</h2>
        <p>
          If you only pick two, start with ChatGPT or Claude for your ideas
          and scripts, plus Canva or CapCut to make the post. All four have
          free plans.
        </p>
        <p>Then add the rest as your content grows:</p>
        <ul className="scs-check">
          {WHERE_NEXT.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="scs-note">
          <p>
            <strong>Save money:</strong> every tool on this list has a free
            plan, so start there and only pay when a limit starts slowing you
            down. If you already pay for Canva Pro, try its social scheduling
            before you add Metricool.
          </p>
        </div>
      </section>

      <section className="scs-section" id="all">
        <h2>Copy every prompt in one go</h2>
        <p>
          Save these in your notes, so the next time you sit down to make
          content, every prompt and the ManyChat DM are one paste away.
        </p>
        <CopyBlock label="Every prompt from this guide" text={ALL_PROMPTS} />
      </section>

      <section className="scs-section" id="attention-hq">
        <h2>Want to learn this step by step?</h2>
        <div className="scs-cta-box">
          <p>
            <strong>Join Attention HQ.</strong> It&apos;s where AI University
            lives, a structured path for people starting from zero, with
            click-by-click lessons and a community building alongside you.
          </p>
          <p>
            AI University inside Attention HQ teaches you how to create AI
            images, AI video and content step by step, from zero. Every
            program is practical, and every one ends with something
            you&apos;ve made.
          </p>
          <a
            className="scs-cta-btn"
            href={UNIVERSITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent("guide_outbound_click", {
                destination: "ai_university",
                source: GUIDE_ID,
              })
            }
          >
            Join Attention HQ →
          </a>
        </div>
      </section>
    </div>
  );
}
