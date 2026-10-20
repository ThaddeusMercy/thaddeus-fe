"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

import {
  DECK_PROMPT,
  GUARDRAILS,
  ROUTE_ROWS,
  SETUP_STEPS,
  SITES_PROMPT,
  SITES_USES,
  TIERS,
  WORK_DIFFERENCES,
  WORK_TASKS,
  type PromptBlock,
} from "./data";
import "./chatgpt-upgrade.css";

function PromptBox({ tag, text }: PromptBlock) {
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
    <div className="cgu-prompt">
      <div className="cgu-prompt-bar">
        <span className="cgu-prompt-tag">{tag}</span>
        <button
          type="button"
          className={`cgu-copy${copied ? " cgu-copied" : ""}`}
          onClick={onCopy}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="cgu-prompt-body">{text}</pre>
    </div>
  );
}

function Callout({ title, children }: { title: string; children: string }) {
  return (
    <aside className="cgu-callout">
      <p className="cgu-callout-t">{title}</p>
      <p>{children}</p>
    </aside>
  );
}

export default function ChatGptUpgradeGuide() {
  return (
    <div className="cgu-guide">
      <Link href="/guide" className="cgu-back">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        All guides
      </Link>

      <header className="cgu-hero">
        <p className="cgu-eyebrow">Attention Factory · Field Guide</p>
        <h1>
          The ChatGPT upgrade you can actually <em>use</em>
        </h1>
        <p className="cgu-lede">
          ChatGPT ships a lineup, not one model. The names in the picker move.
          The habit does not: pick a lane, hand Work a real job, and publish
          the result when a link would save you another status meeting. Here
          are the prompts I still run.
        </p>
        <p className="cgu-byline">
          Mercy Thaddeus · attentionfactory.io · Read time: 9 minutes
        </p>
      </header>

      <section className="cgu-section">
        <p className="cgu-sec-label">Start here</p>
        <h2>The one-paragraph version</h2>
        <p className="cgu-lead">
          OpenAI stopped shipping one model and started shipping a lineup, so
          the skill is picking the right lane instead of defaulting to the
          biggest name. Chat on Plus, Pro, Business, and Enterprise currently
          uses GPT-6 Sol. Free and Go chat uses GPT-6 Luna. GPT-6 Astra is the
          model for heavier builds, and Ultrafast for Astra and GPT-6.1 Sol is
          only on the $500 Pro plan. Work and Codex can sit on a different
          model than Chat, so open the picker before you start. Alongside that,
          ChatGPT Work turns the chat window into an agent that plans a
          project, touches your connected apps, and hands back finished files.
          Sites lets it publish a working web app or dashboard at a shareable
          link.
        </p>
        <p>
          For the builds I would try on the current flagship, start with the{" "}
          <Link href="/guide/gpt-6-astra">GPT-6 Astra guide</Link>. The lane
          table below uses the Sol, Terra, and Luna names from the earlier
          lineup so you can see the split. Match the job, then read the name
          in your picker.
        </p>
        <Callout title="If you only do one thing">
          Open ChatGPT, connect one app you actually live in (Gmail, Slack, or
          Drive), and give Work a task you already know how to do by hand. You
          need a task where you can spot a wrong answer instantly, because that
          is how you learn where the agent is strong and where it drifts.
        </Callout>
      </section>

      <section className="cgu-section">
        <p className="cgu-sec-label">Part one</p>
        <h2>Three lanes: flagship, everyday, fast</h2>
        <p>
          The number is the generation. The names are capability lanes, and
          they get renamed. Stop memorising the version and start matching the
          job. A name that meant &quot;flagship&quot; in one release can mean
          &quot;everyday chat&quot; in the next, which is exactly what happened
          when Sol moved from the GPT-5.6 flagship to GPT-6 chat.
        </p>

        <div className="cgu-tiers">
          {TIERS.map((tier) => (
            <article key={tier.id} className="cgu-tier">
              <span className={`cgu-orb cgu-orb-${tier.id}`} aria-hidden />
              <div>
                <h3 className="cgu-tier-name">
                  {tier.name}{" "}
                  <span className="cgu-tier-role">{tier.role}</span>
                </h3>
                <p>{tier.body}</p>
              </div>
            </article>
          ))}
        </div>

        <h3 className="cgu-h3">How to route your own work</h3>
        <div className="cgu-table-wrap">
          <table className="cgu-table">
            <thead>
              <tr>
                <th>Your task</th>
                <th>Lane</th>
                <th>Why</th>
              </tr>
            </thead>
            <tbody>
              {ROUTE_ROWS.map((row) => (
                <tr key={row.task}>
                  <td>{row.task}</td>
                  <td>{row.lane}</td>
                  <td>{row.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Callout title="The part nobody tells you">
          Cost per solved task matters more than price per token. A cheap model
          that takes six attempts is more expensive than an expensive model that
          lands on the first. Run the same task through your everyday model and
          your deepest model once, compare the finished output, and let that
          decide your default. Do not pick a tier from a pricing table.
        </Callout>

        <h3 className="cgu-h3">The design jump</h3>
        <p>
          The visible upgrade for most people is what comes out the other end.
          Presentations, documents, and spreadsheets can come back as editable
          files, with real layout and hierarchy instead of a wall of bullets.
          The model also follows your templates and reference files more
          closely, which is the difference between a deck you rebuild and a
          deck you tweak.
        </p>

        <PromptBox {...DECK_PROMPT} />
      </section>

      <section className="cgu-section">
        <p className="cgu-sec-label">Part two</p>
        <h2>ChatGPT Work: the agent that finishes the job</h2>
        <p>
          Until now ChatGPT had two doors: Chat for conversation, Codex for
          code. Work is the third door, and it is aimed at everyone who is not a
          developer but wants the muscle of a coding agent.
        </p>
        <p>
          You give it an outcome. It gathers context from your connected apps and
          files, breaks the outcome into steps, and works through them, staying
          with a project for hours if that is what the job takes. It runs on a
          virtual machine in the cloud, so it keeps working when your laptop is
          shut. It hands back finished artefacts: docs, spreadsheets, slides,
          reports, and web apps.
        </p>

        <h3 className="cgu-h3">What makes it different from asking ChatGPT a question</h3>
        <ul className="cgu-list">
          {WORK_DIFFERENCES.map((item) => (
            <li key={item.title}>
              <strong>{item.title}</strong> {item.body}
            </li>
          ))}
        </ul>

        <h3 className="cgu-h3">Your first three tasks</h3>
        <p>
          Pick work you already do weekly. The point of the first run is
          calibration, not magic.
        </p>

        {WORK_TASKS.map((task) => (
          <PromptBox key={task.tag} {...task} />
        ))}

        <h3 className="cgu-h3">Guardrails worth setting on day one</h3>
        <ul className="cgu-checklist">
          {GUARDRAILS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <Callout title="Usage note">
          Work is built for longer, heavier jobs than a normal chat message, so
          it does not consume your plan the same way a chat does. Treat a long
          agent run as a real unit of spend and batch your tasks instead of
          firing off ten small ones.
        </Callout>
      </section>

      <section className="cgu-section">
        <p className="cgu-sec-label">Part three</p>
        <h2>Sites: publish what it builds</h2>
        <p>
          Sites turns a description into an interactive site or web app at a
          shareable URL, with the code, the backend pieces, and the deployment
          handled for you. It is in public beta, and it is the fastest path from
          &quot;I have information&quot; to &quot;my team can use it.&quot;
        </p>

        <h3 className="cgu-h3">What it is actually good for</h3>
        <ul className="cgu-list">
          {SITES_USES.map((item) => (
            <li key={item.title}>
              <strong>{item.title}</strong> {item.body}
            </li>
          ))}
        </ul>

        <PromptBox {...SITES_PROMPT} />

        <p>
          The move that separates the people who get value here from the people
          who post a screenshot: build the thing you would otherwise have chased
          people for. Every recurring &quot;where are we on this?&quot; message
          is a Site waiting to be made.
        </p>
      </section>

      <section className="cgu-section cgu-section-last">
        <p className="cgu-sec-label">Part four</p>
        <h2>The 30-minute setup</h2>
        <ol className="cgu-setup">
          {SETUP_STEPS.map((step) => (
            <li key={step.title}>
              <strong>{step.title}</strong> {step.body}
            </li>
          ))}
        </ol>

        <Callout title="The honest caveat">
          Agents still make mistakes, and they make them confidently. Long
          autonomous runs drift. Connected apps mean a bad instruction has a
          wider blast radius than a bad chat reply. Keep approvals on, keep a
          human on the decisions, and let the agent own the volume rather than
          the judgement.
        </Callout>
      </section>

      <footer className="cgu-foot">
        <h2>Want to actually build with this?</h2>
        <p>
          This guide gets you using the tools. If you want to build the systems,
          agents, and automations that run your business on top of them, that is
          what we do at Attention Factory. We train teams, we build custom AI
          systems, and we run the BRAVO&apos;26 AI Accelerator for people who
          want to go from using AI to shipping with it.
        </p>
        <p className="cgu-links">
          <a href="https://attentionfactory.io" target="_blank" rel="noopener noreferrer">
            attentionfactory.io
          </a>
          {" · "}
          <a href="https://mercythaddeus.xyz" target="_blank" rel="noopener noreferrer">
            mercythaddeus.xyz
          </a>
        </p>
        <p className="cgu-sig">
          Written by Mercy Thaddeus · Co-founder &amp; CPO, Attention Factory
        </p>
      </footer>
    </div>
  );
}
