"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

import { trackEvent } from "@/lib/analytics";
import {
  ALL_PROMPTS,
  CHECKED_ON,
  CREATOR_TOOLS,
  UNIVERSITY_URL,
  WHERE_NEXT,
  type CreatorTool,
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

function ToolCard({ tool }: { tool: CreatorTool }) {
  return (
    <section className="scs-section atc-tool" id={tool.id}>
      <div className="scs-shortcut-head scs-shortcut-head--loose">
        <span className="scs-shortcut-num">{tool.num}</span>
        <h2 className="scs-shortcut-title">{tool.name}</h2>
      </div>
      <p className="atc-job">{tool.job}</p>
      {tool.what.map((para) => (
        <p key={para}>{para}</p>
      ))}

      <p className="scs-try">Try this</p>
      <p>{tool.tryIntro}</p>
      {tool.promptIntro ? <p>{tool.promptIntro}</p> : null}
      <CopyBlock label={tool.promptLabel} text={tool.prompt} />
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
          <span className="atc-plan-label">Paid plans (US prices)</span>
          <ul>
            {tool.paid.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

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
          One tool for each part of the job: ideas and scripts, images and
          thumbnails, video, clips, voice, design and scheduling. Most of them
          have a free plan, and you don&apos;t need all seven on day one.
        </p>
        <p className="atc-intro">
          For each tool you get the job it does, a prompt to try today, what
          the free plan gives you, what the paid plans cost and what&apos;s new
          this year.
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
          <a href="#all">Copy all</a>
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
          If you only pick two, start with ChatGPT for your ideas and scripts,
          plus one visual tool. Pick Nano Banana for images and thumbnails,
          Canva for carousels and posts, or Google Flow if you make video.
        </p>
        <p>Then add the rest as your content grows:</p>
        <ul className="scs-check">
          {WHERE_NEXT.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="scs-note">
          <p>
            <strong>Save money:</strong> Nano Banana 2.1 and the extra Flow
            credits both come with Google AI Plus, so one Google plan covers
            two tools on this list.
          </p>
        </div>
      </section>

      <section className="scs-section" id="all">
        <h2>Copy all 7 prompts</h2>
        <p>
          Save these in your notes, so the next time you sit down to make
          content, every tool is one paste away.
        </p>
        <CopyBlock label="All 7 creator tool prompts" text={ALL_PROMPTS} />
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
