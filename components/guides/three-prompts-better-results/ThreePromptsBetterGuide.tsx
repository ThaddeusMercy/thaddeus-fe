"use client";

import { Fragment, useCallback, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

import {
  AFTER_QUESTIONS,
  ASK_PROMPT,
  BASE_PROMPT,
  CRITERIA_ROWS,
  MASTER_PROMPT,
  REFS,
  RESEARCH_LOOP,
  RESEARCH_PROMPT,
  RUBRIC_PROMPT,
  SHORT_ASK,
  SHORT_IMPROVE,
  SHORT_VERIFY,
  SOURCE_ORDER,
} from "./data";
import "./three-prompts-better.css";

function highlightBrackets(text: string) {
  return text.split(/(\[[^\]]+\])/g).map((part, i) =>
    part.startsWith("[") && part.endsWith("]") ? (
      <span key={i} className="tpb-fill">
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
    <div className="tpb-block">
      <div className="tpb-block-head">
        <span className="tpb-block-label">{label}</span>
        <button
          type="button"
          className={`tpb-copy${copied ? " tpb-done" : ""}`}
          onClick={onCopy}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre>{highlightBrackets(text)}</pre>
    </div>
  );
}

function Sig() {
  return (
    <p className="tpb-sig">MERCY THADDEUS &nbsp;|&nbsp; ATTENTION FACTORY</p>
  );
}

export default function ThreePromptsBetterGuide() {
  return (
    <div className="tpb-guide">
      <Link href="/guide" className="tpb-back">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        All guides
      </Link>

      <header className="tpb-hero">
        <p className="tpb-eyebrow">Attention Factory Guide</p>
        <h1>3 prompts that get you better AI results</h1>
        <p className="tpb-lede">
          A practical guide to getting better context, stronger evidence, and a
          better second draft from ChatGPT or Claude.
        </p>
        <p className="tpb-intro">
          AI often gives a weak answer for one of three reasons: it is missing
          context, it is using weak or outdated information, or it stops at the
          first acceptable draft. These three prompt additions help you fix
          those problems.
        </p>

        <div className="tpb-map">
          <div className="tpb-map-item">
            <div className="tpb-map-n">1</div>
            <div>
              <strong>Missing context</strong>
              <span>Ask questions before the AI starts.</span>
            </div>
          </div>
          <div className="tpb-map-item">
            <div className="tpb-map-n">2</div>
            <div>
              <strong>Weak evidence</strong>
              <span>Research current facts and verify them.</span>
            </div>
          </div>
          <div className="tpb-map-item">
            <div className="tpb-map-n">3</div>
            <div>
              <strong>Weak first draft</strong>
              <span>Use a rubric, critique, and revise.</span>
            </div>
          </div>
        </div>
      </header>

      <section className="tpb-section">
        <h2>Start with a complete request</h2>
        <p className="tpb-deck">
          The three additions work best when your main prompt already explains
          the task. Use this simple base before you add them:
        </p>

        <CopyBlock label="Base prompt template" text={BASE_PROMPT} />

        <p className="tpb-note">
          Use only what the task needs. Skip research for pure creative work,
          skip the questions when your brief is already complete, and skip the
          scoring loop when you only need a quick brainstorm.
        </p>
        <Sig />
      </section>

      <section className="tpb-section">
        <p className="tpb-num">01</p>
        <h2>Ask questions first</h2>
        <p className="tpb-deck">
          Use questions to expose missing context before the AI starts.
        </p>
        <p>
          The AI cannot see the details you left in your head. A few useful
          questions can reveal the real audience, goal, constraints, proof,
          tone, or decision behind your request. This also lets you check how
          the AI understands the task before it writes.
        </p>

        <CopyBlock label="Copy this prompt" text={ASK_PROMPT} />

        <div className="tpb-example">
          <p>Example: planning an AI workshop</p>
          <div className="tpb-pair">
            <p className="tpb-k">Initial request</p>
            <p>Create a launch plan for my free AI workshop.</p>
          </div>
          <div className="tpb-pair">
            <p className="tpb-k">Useful questions</p>
            <ul>
              <li>Who is the workshop for, and what do they already know?</li>
              <li>
                Is the main goal registration, live attendance, or a later sale?
              </li>
              <li>What channels, budget, and deadline do you have?</li>
            </ul>
          </div>
          <div className="tpb-reply">
            <p className="tpb-k">A better reply from you</p>
            <p>
              The workshop is for business owners with little AI experience. I
              want 500 registrations and at least 250 live attendees. I have
              seven days, no ad budget, and access to Instagram, email, and
              WhatsApp. The session should feel useful, not like a long sales
              pitch.
            </p>
          </div>
        </div>

        <h3>After you answer the questions</h3>
        <CopyBlock label="Add this line" text={AFTER_QUESTIONS} />

        <div className="tpb-cols tpb-cols-2">
          <div className="tpb-box">
            <h4>Use it when</h4>
            <ul>
              <li>A missing detail could change the direction.</li>
              <li>
                You are planning, comparing, recommending, coding, or creating
                client work.
              </li>
              <li>The cost of a wrong assumption is high.</li>
            </ul>
          </div>
          <div className="tpb-box">
            <h4>Skip it when</h4>
            <ul>
              <li>Your brief already answers the important questions.</li>
              <li>You only need a rough idea or quick rewrite.</li>
              <li>
                The AI starts asking questions that do not change the result.
              </li>
            </ul>
          </div>
        </div>
        <Sig />
      </section>

      <section className="tpb-section">
        <p className="tpb-num">02</p>
        <h2>Research and fact-check</h2>
        <p className="tpb-deck">
          Use current sources for claims that can change, and verify what the
          sources actually say.
        </p>
        <p>
          Online research can make an answer more current, but search results
          are not automatically true. The AI can still choose a weak source,
          misunderstand a page, confuse dates, or repeat a claim that the
          original source does not support. Give it rules for evidence.
        </p>

        <CopyBlock label="Copy this prompt" text={RESEARCH_PROMPT} />

        <h3>Use a clear source order</h3>
        <ul className="tpb-order">
          {SOURCE_ORDER.map((row) => (
            <li key={row.n}>
              <span className="tpb-on">{row.n}</span>
              <span>{row.text}</span>
            </li>
          ))}
        </ul>

        <h3>The research loop</h3>
        <ol className="tpb-loop">
          {RESEARCH_LOOP.map((step) => (
            <li key={step.title}>
              <h4>{step.title}</h4>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>

        <h3>Mini fact-check example</h3>
        <div className="tpb-table-scroll">
          <table>
            <thead>
              <tr>
                <th>Claim</th>
                <th>Best source</th>
                <th>Status</th>
                <th>Caveat</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>The feature is available to everyone.</td>
                <td>Official product page</td>
                <td>Partly verified</td>
                <td>
                  The rollout may differ by plan, country, or date. Replace
                  &ldquo;everyone&rdquo; with the exact availability.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="tpb-warn">
          For medical, legal, or financial questions, use research to understand
          the topic and prepare better questions. Do not treat an AI answer as a
          diagnosis, legal opinion, or final financial decision.
        </p>
        <Sig />
      </section>

      <section className="tpb-section">
        <p className="tpb-num">03</p>
        <h2>Grade, critique, and revise</h2>
        <p className="tpb-deck">
          Use a task-specific rubric to find weak parts before you accept the
          first draft.
        </p>
        <p>
          Self-grading is not proof that the answer is correct. AI can be
          generous to itself or miss a problem. The useful part is the process:
          define what good work looks like, find a specific weakness, and make a
          visible revision.
        </p>

        <CopyBlock label="Copy this prompt" text={RUBRIC_PROMPT} />

        <h3>Choose criteria that match the task</h3>
        <div className="tpb-table-scroll">
          <table>
            <thead>
              <tr>
                <th>Task</th>
                <th>Five useful criteria</th>
              </tr>
            </thead>
            <tbody>
              {CRITERIA_ROWS.map((row) => (
                <tr key={row.task}>
                  <td>{row.task}</td>
                  <td>{row.criteria}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3>What a useful critique looks like</h3>
        <div className="tpb-example">
          <p>Critique example</p>
          <div className="tpb-pair">
            <p className="tpb-k">Weak first draft</p>
            <p>
              &ldquo;Join our AI masterclass and discover powerful tools that
              will transform your business.&rdquo;
            </p>
          </div>
          <div className="tpb-pair">
            <p className="tpb-k">Specific critique</p>
            <p>
              The hook is broad. &ldquo;Powerful tools&rdquo; gives no example.
              &ldquo;Transform your business&rdquo; is an unsupported promise.
              The action is not clear.
            </p>
          </div>
          <div className="tpb-revision">
            <p className="tpb-k">Visible revision</p>
            <p>
              How much time did you spend this week replying to the same
              questions, chasing leads, or preparing reports by hand? In this
              free class, I will show you three simple AI systems that can help
              with those tasks. Comment &ldquo;RESULT&rdquo; and I will send you
              the registration link.
            </p>
          </div>
        </div>

        <div className="tpb-cols tpb-cols-2">
          <div className="tpb-box">
            <h4>Stop condition</h4>
            <p>
              Run no more than two rounds. Stop early when no important
              requirement is missing and the weak parts have been visibly fixed.
              More editing can make the work longer or remove your voice.
            </p>
          </div>
          <div className="tpb-box">
            <h4>Use an external check</h4>
            <p>
              Run code tests. Open research sources. Read content aloud. Check
              the budget and dates in a plan. The AI scorecard is a review aid,
              not permission to publish without reading.
            </p>
          </div>
        </div>
        <Sig />
      </section>

      <section className="tpb-section">
        <p className="tpb-num">USE ALL THREE</p>
        <h2>The complete better-results prompt</h2>
        <p className="tpb-deck">
          Paste your task into the first section, then add the workflow. This
          version is best for work that needs context, current evidence, and a
          polished final answer.
        </p>

        <CopyBlock label="Master prompt" text={MASTER_PROMPT} />

        <h3>The three short versions</h3>
        <div className="tpb-shorts">
          <div className="tpb-short">
            <div className="tpb-short-top">
              <strong>Ask</strong>
            </div>
            <pre>{SHORT_ASK}</pre>
          </div>
          <div className="tpb-short">
            <div className="tpb-short-top">
              <strong>Verify</strong>
            </div>
            <pre>{SHORT_VERIFY}</pre>
          </div>
          <div className="tpb-short">
            <div className="tpb-short-top">
              <strong>Improve</strong>
            </div>
            <pre>{SHORT_IMPROVE}</pre>
          </div>
        </div>

        <p className="tpb-close">
          Questions improve context. Research improves evidence. A rubric
          improves the draft. Your own review still decides what gets sent,
          published, bought, built, or acted on.
        </p>

        <p className="tpb-refs">
          Official references:{" "}
          {REFS.map((ref, i) => (
            <Fragment key={ref.href}>
              {i > 0 ? "  |  " : null}
              <a href={ref.href} target="_blank" rel="noopener noreferrer">
                {ref.label}
              </a>
            </Fragment>
          ))}
        </p>
        <Sig />
      </section>
    </div>
  );
}
