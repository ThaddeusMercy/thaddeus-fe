"use client";

import { Fragment, useCallback, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

import {
  CHECKLIST,
  CHOOSER,
  CLAUDE_ZIP_STEPS,
  EMIL_INSTALL,
  FAQS,
  FRONTEND_INSTALL,
  IMPECCABLE_NPX,
  IMPECCABLE_PLUGIN,
  OFFICIAL_LINKS,
  PROBLEMS,
  PROMPT_COMPARE,
  PROMPT_IMPROVE,
  PROMPT_NEW,
  REFERENCES,
  SECURITY,
  SKILLS,
  TASTE_INSTALL,
  UIPRO_INIT,
  UIPRO_NPM,
  UIPRO_PLUGIN,
} from "./data";
import "./ai-design-skills.css";

function highlightBrackets(text: string) {
  return text.split(/(\[[^\]]+\])/g).map((part, i) =>
    part.startsWith("[") && part.endsWith("]") ? (
      <span key={i} className="ads-fill">
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
    <div className="ads-block">
      <div className="ads-block-head">
        <span className="ads-block-label">{label}</span>
        <button
          type="button"
          className={`ads-copy${copied ? " ads-done" : ""}`}
          onClick={onCopy}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre>{highlightBrackets(text)}</pre>
    </div>
  );
}

export default function AiDesignSkillsGuide() {
  return (
    <div className="ads-guide">
      <Link href="/guide" className="ads-back">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        All guides
      </Link>

      <header className="ads-hero">
        <p className="ads-eyebrow">Skills guide · Claude &amp; Claude Code</p>
        <h1>Five free AI design skills for cleaner interfaces</h1>
        <p className="ads-lede">
          Get five free AI design skills for Claude and Claude Code, with source
          links, installation steps, and prompts for creating or improving an
          interface.
        </p>
      </header>

      <section className="ads-section">
        <p>
          AI can write working interface code and still make the result look
          generic.
        </p>
        <p>
          The problem is often not the length of your prompt. Claude may need
          clearer rules for layout, hierarchy, typography, spacing, motion,
          accessibility, and how to review its own work.
        </p>
        <p>
          A design skill gives Claude a repeatable set of instructions for that
          work.
        </p>
        <p>This guide covers five free skills:</p>
        <nav className="ads-map" aria-label="Five design skills">
          {SKILLS.map((skill) => (
            <a key={skill.id} className="ads-map-item" href={`#${skill.id}`}>
              <div className="ads-map-n">{skill.num}</div>
              <div>
                <strong>{skill.name}</strong>
                <span>{skill.best[0]}</span>
              </div>
            </a>
          ))}
        </nav>
        <div className="ads-note">
          <p>
            You do not need all five at once. Start with one, use a clear brief,
            and compare the result with the same project before adding another.
          </p>
        </div>
      </section>

      <section className="ads-section">
        <h2>Important name correction</h2>
        <p>
          The correct name is <strong>Emil&apos;s Skills</strong>, created by
          Emil Kowalski. It is not &ldquo;Emily&apos;s Skills.&rdquo;
        </p>
      </section>

      <section className="ads-section">
        <h2>Claude&apos;s official skill instructions</h2>
        <ul className="ads-links">
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

      {SKILLS.map((skill) => (
        <section className="ads-section" id={skill.id} key={skill.id}>
          <p className="ads-num">{skill.num}</p>
          <h2>{skill.name}</h2>
          <p>{skill.body}</p>
          <h3>Best for</h3>
          <ul className="ads-check">
            {skill.best.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <ul className="ads-links">
            {skill.links.map((link) => (
              <li key={link.href}>
                {link.label}:{" "}
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.href}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <section className="ads-section">
        <h2>Which one should you install first?</h2>
        <ul className="ads-check">
          {CHOOSER.map((row) => (
            <li key={row.skill}>
              <strong>Use {row.skill}</strong> {row.use}.
            </li>
          ))}
        </ul>
        <div className="ads-note">
          <p>
            Do not stack several skills without knowing which one is controlling
            the design. Their rules can conflict.
          </p>
        </div>
      </section>

      <section className="ads-section">
        <h2>Option 1: Install a skill in regular Claude</h2>
        <p>
          Claude accepts a custom skill as a ZIP file containing one complete
          skill folder.
        </p>
        <ol className="ads-steps">
          {CLAUDE_ZIP_STEPS.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <p>
          Do not upload an entire repository when it contains several skills,
          examples, website files, or development files. Upload only the complete
          folder for the skill you want.
        </p>
        <p>
          Some packages depend on scripts or data files and are easier to install
          in Claude Code with the author&apos;s installer. Follow the specific
          instructions below when the simple ZIP method does not work.
        </p>
      </section>

      <section className="ads-section">
        <h2>Option 2: Install in Claude Code</h2>
        <p>
          Run each command from the project where you want the skill, unless you
          choose a global installation.
        </p>

        <h3>Frontend Design</h3>
        <p>You can use Anthropic&apos;s skills marketplace in Claude Code:</p>
        <CopyBlock label="Frontend Design" text={FRONTEND_INSTALL} />
        <p>
          After installation, mention Frontend Design in your request or ask
          Claude to use it for the frontend task.
        </p>

        <h3>Impeccable</h3>
        <p>From the project folder, run:</p>
        <CopyBlock label="Impeccable install" text={IMPECCABLE_NPX} />
        <p>Claude Code users can also add the plugin marketplace:</p>
        <CopyBlock label="Impeccable marketplace" text={IMPECCABLE_PLUGIN} />
        <p>
          Follow the options shown by the plugin and reload Claude Code after
          installation.
        </p>

        <h3>Emil&apos;s Skills</h3>
        <CopyBlock label="Emil's Skills" text={EMIL_INSTALL} />

        <h3>Taste</h3>
        <p>Install the general frontend skill:</p>
        <CopyBlock label="Taste" text={TASTE_INSTALL} />

        <h3>UI/UX Pro Max</h3>
        <p>Install its CLI:</p>
        <CopyBlock label="UI Pro CLI" text={UIPRO_NPM} />
        <p>Then open your project folder and run:</p>
        <CopyBlock label="UI Pro init" text={UIPRO_INIT} />
        <p>
          You can also use the Claude Code marketplace commands shown in the
          repository:
        </p>
        <CopyBlock label="UI/UX Pro Max plugin" text={UIPRO_PLUGIN} />
        <div className="ads-note">
          <p>
            Installation commands can change. Check each source repository before
            running a command.
          </p>
        </div>
      </section>

      <section className="ads-section">
        <h2>Prompt for a new design</h2>
        <p>Use this after enabling one design skill:</p>
        <CopyBlock label="New design prompt" text={PROMPT_NEW} />
      </section>

      <section className="ads-section">
        <h2>Prompt to improve an existing interface</h2>
        <CopyBlock label="Improve interface prompt" text={PROMPT_IMPROVE} />
      </section>

      <section className="ads-section">
        <h2>Prompt to compare two skills</h2>
        <CopyBlock label="Compare skills prompt" text={PROMPT_COMPARE} />
      </section>

      <section className="ads-section">
        <h2>Give AI better references</h2>
        <p>A skill cannot guess your taste perfectly.</p>
        <p>Give Claude:</p>
        <ul className="ads-check">
          {REFERENCES.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>
          Ask Claude to combine principles from the references, not duplicate a
          page.
        </p>
      </section>

      <section className="ads-section">
        <h2>Review checklist</h2>
        <p>Before accepting the result, check:</p>
        <ul className="ads-check">
          {CHECKLIST.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="ads-section">
        <h2>Security notes for third-party skills</h2>
        <ul className="ads-check">
          {SECURITY.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="ads-section">
        <h2>Troubleshooting</h2>
        {PROBLEMS.map((item) => (
          <div className="ads-problem" key={item.q}>
            <h3>{item.q}</h3>
            <p>{item.a}</p>
          </div>
        ))}
      </section>

      <section className="ads-section">
        <h2>Frequently asked questions</h2>
        {FAQS.map((item) => (
          <div className="ads-faq" key={item.q}>
            <h3>{item.q}</h3>
            <p>{item.a}</p>
          </div>
        ))}
      </section>

      <section className="ads-section">
        <h2>Final note</h2>
        <p>
          A design skill gives AI better rules. Your product context and
          references still decide whether the final interface fits the people
          using it.
        </p>
        <p className="ads-checked">Last checked: August 18, 2026</p>
        <p className="ads-sig">MERCY THADDEUS &nbsp;|&nbsp; ATTENTION FACTORY</p>
      </section>
    </div>
  );
}
