"use client";

import { Fragment, useCallback, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

import {
  AUDIENCES,
  BETTER_RESULTS,
  CLAUDE_INSTALL_STEPS,
  FAQS,
  IMPORTANT_NOTES,
  NPX_INSTALL,
  OFFICIAL_LINKS,
  PLUGIN_INSTALL,
  PLUGIN_MARKETPLACE,
  PROMPT_ADS,
  PROMPT_COMPETITORS,
  PROMPT_CONTENT,
  PROMPT_EMAILS,
  PROMPT_LANDING,
  PROMPT_PRODUCT,
  SKILL_EXAMPLES,
  SKILL_GROUPS,
  STARTERS,
} from "./data";
import "./claude-marketing-skills.css";

function highlightBrackets(text: string) {
  return text.split(/(\[[^\]]+\])/g).map((part, i) =>
    part.startsWith("[") && part.endsWith("]") ? (
      <span key={i} className="cms-fill">
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
    <div className="cms-block">
      <div className="cms-block-head">
        <span className="cms-block-label">{label}</span>
        <button
          type="button"
          className={`cms-copy${copied ? " cms-done" : ""}`}
          onClick={onCopy}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre>{highlightBrackets(text)}</pre>
    </div>
  );
}

export default function ClaudeMarketingSkillsGuide() {
  return (
    <div className="cms-guide">
      <Link href="/guide" className="cms-back">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        All guides
      </Link>

      <header className="cms-hero">
        <p className="cms-eyebrow">Setup guide · 49 free skills</p>
        <h1>How to install 49 free marketing skills inside Claude</h1>
        <p className="cms-lede">
          Claude can help with marketing, but one basic prompt often gives you a
          basic answer.
        </p>
      </header>

      <section className="cms-section">
        <p>
          A skill gives Claude a clear process for one type of work. It tells
          Claude what to check, what questions to ask, and how to complete the
          task.
        </p>
        <p>
          This free library contains 49 skills for copywriting, SEO, ads, email,
          analytics, conversion, pricing, research, and more.
        </p>
        <p>
          You can install one skill in regular Claude or install the full library
          in Claude Code and other supported AI coding agents.
        </p>
      </section>

      <section className="cms-section">
        <h2>Official links</h2>
        <ul className="cms-links">
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

      <section className="cms-section">
        <h2>What is a Claude skill?</h2>
        <p>
          A Claude skill is a folder with instructions, examples, and other files
          for one type of task.
        </p>
        <p>For example:</p>
        <div className="cms-examples">
          {SKILL_EXAMPLES.map((item) => (
            <div className="cms-example" key={item.name}>
              <strong>{item.name}</strong>
              <p>The {item.name} skill {item.body}</p>
            </div>
          ))}
        </div>
        <p>
          When your request matches a skill, Claude can use the steps inside it
          instead of giving you a general answer.
        </p>
      </section>

      <section className="cms-section">
        <h2>Who can use these skills?</h2>
        <p>They are useful for:</p>
        <ul className="cms-check">
          {AUDIENCES.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>
          You do not need all 49 at once. Install the ones that match the work
          you are doing.
        </p>
      </section>

      <section className="cms-section">
        <h2>The full list of 49 skills</h2>
        {SKILL_GROUPS.map((group) => (
          <div className="cms-group" key={group.title}>
            <h3>{group.title}</h3>
            <div className="cms-chips">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="cms-section">
        <h2>How to install one skill in regular Claude</h2>
        <p>Regular Claude accepts custom skills as ZIP files.</p>
        <p>Follow these steps:</p>
        <ol>
          {CLAUDE_INSTALL_STEPS.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <div className="cms-note">
          <p>
            Do not upload only the raw SKILL.md file. Upload the full skill
            folder as a ZIP file.
          </p>
        </div>
      </section>

      <section className="cms-section">
        <h2>How to install all 49 in Claude Code</h2>
        <p>Open your terminal inside the project where you want the skills.</p>
        <p>Run:</p>
        <CopyBlock label="Install with npx" text={NPX_INSTALL} />
        <p>This installs the library for Claude Code.</p>
        <p>You can also use Claude Code&apos;s plugin system:</p>
        <CopyBlock label="Add marketplace" text={PLUGIN_MARKETPLACE} />
        <p>Then run:</p>
        <CopyBlock label="Install plugin" text={PLUGIN_INSTALL} />
        <p>Choose one method. You do not need to use both.</p>
      </section>

      <section className="cms-section">
        <h2>Where to start</h2>
        <p>
          Start with the <code>product-marketing</code> skill. It helps Claude
          understand your product, audience, and position before it uses the
          other skills.
        </p>
        <p>After that, try these:</p>
        {STARTERS.map((item) => (
          <div className="cms-starter" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      </section>

      <section className="cms-section">
        <h2>Prompts you can copy</h2>

        <h3>Set up your product marketing information</h3>
        <CopyBlock label="Product marketing" text={PROMPT_PRODUCT} />

        <h3>Create a content plan</h3>
        <CopyBlock label="Content plan" text={PROMPT_CONTENT} />

        <h3>Review a landing page</h3>
        <CopyBlock label="Landing page review" text={PROMPT_LANDING} />

        <h3>Create an email sequence</h3>
        <CopyBlock label="Email sequence" text={PROMPT_EMAILS} />

        <h3>Study your competitors</h3>
        <CopyBlock label="Competitor study" text={PROMPT_COMPETITORS} />

        <h3>Create ad ideas</h3>
        <CopyBlock label="Ad ideas" text={PROMPT_ADS} />
      </section>

      <section className="cms-section">
        <h2>How to get better results</h2>
        <p>Give Claude clear information about:</p>
        <ul className="cms-check">
          {BETTER_RESULTS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>
          The skill gives Claude a process. Your business information gives it
          the context it needs.
        </p>
      </section>

      <section className="cms-section">
        <h2>Important notes</h2>
        <ul className="cms-check">
          {IMPORTANT_NOTES.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="cms-section">
        <h2>Frequently asked questions</h2>
        {FAQS.map((item) => (
          <div className="cms-faq" key={item.q}>
            <h3>{item.q}</h3>
            <p>{item.a}</p>
          </div>
        ))}
      </section>

      <section className="cms-section">
        <h2>Final note</h2>
        <p>
          The library is updated often. Check the{" "}
          <a
            href="https://marketing-skills.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            official website
          </a>{" "}
          or{" "}
          <a
            href="https://github.com/coreyhaines31/marketingskills"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub page
          </a>{" "}
          before you publish a list of the skills or record a new setup video.
        </p>
        <p className="cms-sig">MERCY THADDEUS &nbsp;|&nbsp; ATTENTION FACTORY</p>
      </section>
    </div>
  );
}
