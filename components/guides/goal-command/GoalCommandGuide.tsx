"use client";

import { Fragment, useCallback, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

import {
  ANATOMY_PARTS,
  FAILURE_MODES,
  LOOP_NODES,
  MODES,
  QUICK_VERSION,
  SKIP_ITEMS,
  TEMPLATES,
  USE_ITEMS,
  WHY_LOOP_PARTS,
} from "./data";
import "./goal-command.css";

function highlightBrackets(text: string) {
  return text.split(/(\[[^\]]+\])/g).map((part, i) =>
    part.startsWith("[") && part.endsWith("]") ? (
      <span key={i} className="gc-hl">
        {part}
      </span>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}

function TermBlock({ label, code }: { label: string; code: string }) {
  const [copied, setCopied] = useState(false);

  const onCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = code;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  }, [code]);

  return (
    <div className="gc-term">
      <div className="gc-term-bar">
        <span className="gc-term-label">{label}</span>
        <button
          type="button"
          className={`gc-copy${copied ? " gc-copied" : ""}`}
          onClick={onCopy}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre>{highlightBrackets(code)}</pre>
    </div>
  );
}

export default function GoalCommandGuide() {
  return (
    <div className="gc-guide">
      <Link href="/guide" className="gc-back">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        All guides
      </Link>

      <header className="gc-hero">
        <p className="gc-eyebrow">
          Field guide · <b>Mercy Thaddeus</b> × Attention Factory
        </p>
        <h1 className="gc-cmd">
          <span className="gc-slash">/</span>Goal
        </h1>
        <p className="gc-lede">
          The command that makes Claude keep working until the job is actually
          done.
        </p>
        <p className="gc-def">
          It isn&apos;t a hidden feature or a button. It&apos;s a prompt
          pattern: you hand Claude a <strong>success condition</strong> instead
          of a task, tell it to check its own work after every step, and to keep
          going until that condition is true.
        </p>

        <div className="gc-loop" aria-hidden="true">
          <span className="gc-loop-node">{LOOP_NODES[0]}</span>
          <span className="gc-loop-arrow">→</span>
          <span className="gc-loop-node">{LOOP_NODES[1]}</span>
          <span className="gc-loop-arrow">→</span>
          <span className="gc-loop-back">{LOOP_NODES[2]}</span>
          <span className="gc-loop-arrow">→</span>
          <span className="gc-loop-exit">
            <span className="gc-dot" />
            {LOOP_NODES[3]}
          </span>
        </div>
      </header>

      <section className="gc-sec">
        <p className="gc-sec-tag">
          <span className="gc-num">01</span> What it actually is
        </p>
        <h2>You give it a finish line, not a chore.</h2>
        <p className="gc-lead">
          A normal prompt says <em>&ldquo;do this thing.&rdquo;</em> Claude does
          it once and stops. A <span className="gc-mono">/Goal</span> prompt says{" "}
          <em>
            &ldquo;this is what done looks like — keep going until it&apos;s
            true.&rdquo;
          </em>
        </p>
        <p>
          That one swap changes the shape of the whole interaction. A task
          produces a single reply. A condition produces a loop: act, check the
          result against the condition, and either finish or take the next step.
          Same model, completely different behaviour. You stop being the thing
          that pushes it forward between steps.
        </p>
        <p>
          Everything below is how to write that condition so the loop runs clean
          instead of wandering.
        </p>
      </section>

      <section className="gc-sec">
        <p className="gc-sec-tag">
          <span className="gc-num">02</span> Why it works
        </p>
        <h2>A loop needs three things. You supply all three.</h2>
        <p>
          Claude&apos;s default is one turn: answer, stop. It won&apos;t loop on
          its own — nothing tells it to. <span className="gc-mono">/Goal</span>{" "}
          hands it the three parts a loop can&apos;t run without:
        </p>
        <ul className="gc-parts">
          {WHY_LOOP_PARTS.map((part) => (
            <li className="gc-part" key={part.id}>
              <span className="gc-part-n">{part.id}</span>
              <div className="gc-part-b">
                <h4>{part.title}</h4>
                <p>{part.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="gc-sec">
        <p className="gc-sec-tag">
          <span className="gc-num">03</span> Where it runs — and where &ldquo;8
          hours&rdquo; is real
        </p>
        <h2>Same pattern, two very different engines.</h2>
        <p>
          Read this part before you promise yourself an unattended overnight run.
          Where you paste the prompt decides what &ldquo;keep running&rdquo;
          actually means.
        </p>
        <div className="gc-modes">
          {MODES.map((mode) => (
            <div
              className={`gc-mode${mode.live ? " gc-mode--live" : ""}`}
              key={mode.title}
            >
              <h3>
                {mode.live && <span className="gc-tick">●</span>}
                {mode.title}
              </h3>
              <p>{mode.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="gc-sec">
        <p className="gc-sec-tag">
          <span className="gc-num">04</span> Anatomy
        </p>
        <h2>Six parts. Each one prevents a specific failure.</h2>
        <ul className="gc-parts">
          {ANATOMY_PARTS.map((part) => (
            <li className="gc-part" key={part.num}>
              <span className="gc-part-n">{part.num}</span>
              <div className="gc-part-b">
                <h4>
                  {part.title}{" "}
                  <span className="gc-k">{part.key}</span>
                </h4>
                <p>{part.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="gc-sec">
        <p className="gc-sec-tag">
          <span className="gc-num">05</span> The template
        </p>
        <h2>Copy this. Fill the brackets. Paste.</h2>
        <p>
          The generic version — works for anything with a checkable finish line.
          The last line is the one that turns it from a to-do into a loop, so
          don&apos;t cut it.
        </p>
        <TermBlock label={TEMPLATES[0].label} code={TEMPLATES[0].code} />
      </section>

      <section className="gc-sec">
        <p className="gc-sec-tag">
          <span className="gc-num">06</span> Two ready-made versions
        </p>
        <h2>Coding, and bulk content.</h2>
        <p>
          Pre-filled so you can see what &ldquo;checkable&rdquo; looks like in
          practice. The coding one is built for Claude Code on a Next.js /
          Supabase stack — swap the checks for your own.
        </p>
        <TermBlock label={TEMPLATES[1].label} code={TEMPLATES[1].code} />
        <TermBlock label={TEMPLATES[2].label} code={TEMPLATES[2].code} />
      </section>

      <section className="gc-sec">
        <p className="gc-sec-tag">
          <span className="gc-num">07</span> When to reach for it
        </p>
        <h2>It&apos;s a loop, so it needs a finish line.</h2>
        <div className="gc-split">
          <div className="gc-col gc-col--use">
            <h3>
              <span className="gc-pill gc-pill--met">use it</span>
            </h3>
            <ul>
              {USE_ITEMS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="gc-col gc-col--skip">
            <h3>
              <span className="gc-pill gc-pill--skip">skip it</span>
            </h3>
            <ul>
              {SKIP_ITEMS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="gc-sec">
        <p className="gc-sec-tag">
          <span className="gc-num">08</span> The four ways it breaks
        </p>
        <h2>And the one line that fixes each.</h2>
        <div className="gc-breaks">
          {FAILURE_MODES.map((item) => (
            <div className="gc-brk" key={item.symptom}>
              <p className="gc-sym">{item.symptom}</p>
              <p className="gc-fix">
                <b>Fix:</b> {item.fix}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="gc-sec">
        <p className="gc-sec-tag">
          <span className="gc-num">09</span> The 10-second version
        </p>
        <h2>No template handy? Paste this.</h2>
        <div className="gc-callout">
          <p className="gc-callout-k">minimum viable /Goal</p>
          <p>{highlightBrackets(QUICK_VERSION)}</p>
        </div>
      </section>

      <footer className="gc-foot">
        <p>
          Hand Claude a finish line, not a chore. The loop does the rest — as long
          as &ldquo;done&rdquo; is something you can actually check.
        </p>
      </footer>
    </div>
  );
}
