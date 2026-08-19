"use client";

import { Fragment, useCallback, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

import {
  AGENTS,
  CHOOSER,
  COMMON_TOOLS,
  FORMULA,
  INSIDE,
  OFFICIAL_LINKS,
  ROLLOUT_AFTER,
  ROLLOUT_WEEK1,
  ROLLOUT_WEEK2,
  SETUP_STEPS,
  TEST_CASES,
  TEST_CHECKS,
  VIDEO_TIMESTAMPS,
} from "./data";
import "./six-ai-agents-2026.css";

function highlightBrackets(text: string) {
  return text.split(/(\[[^\]]+\])/g).map((part, i) =>
    part.startsWith("[") && part.endsWith("]") ? (
      <span key={i} className="saa-fill">
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
    <div className="saa-block">
      <div className="saa-block-head">
        <span className="saa-block-label">{label}</span>
        <button
          type="button"
          className={`saa-copy${copied ? " saa-done" : ""}`}
          onClick={onCopy}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre>{highlightBrackets(text)}</pre>
    </div>
  );
}

export default function SixAiAgents2026Guide() {
  return (
    <div className="saa-guide">
      <Link href="/guide" className="saa-back">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        All guides
      </Link>

      <header className="saa-hero">
        <p className="saa-eyebrow">Workflow guide · Base44 Superagents</p>
        <h1>How to build 6 useful AI agents in 2026</h1>
        <p className="saa-lede">
          Build six no-code AI agents for sales, research, content, finance,
          customer support, and personal productivity using copy-and-paste
          prompts.
        </p>
      </header>

      <section className="saa-section">
        <p>Most people still use AI one request at a time.</p>
        <p>
          They open a chatbot, ask one question, copy the answer, and close it.
        </p>
        <p>
          An AI agent works differently. You give it a job, access to the right
          tools, clear rules, and a trigger. It can then repeat the same
          workflow every morning, every week, or whenever something new happens.
        </p>
        <p>
          This guide follows the six agents covered in Jake One Page&apos;s
          video, &ldquo;The 6 Claude AI Agents to Get You Ahead of 99% of
          People&rdquo;: a sales assistant, research assistant, social media
          manager, financial visibility agent, customer support agent, and
          personal productivity agent. The video demonstrates these workflows
          with Base44 Superagents.
        </p>
      </section>

      <section className="saa-section">
        <h2>Inside this guide</h2>
        <p>You will learn how to build:</p>
        <ol className="saa-steps">
          {INSIDE.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
        <p>You will also get a complete prompt for every agent.</p>
      </section>

      <section className="saa-section">
        <h2>Read this first</h2>
        <p>
          This guide uses Base44 Superagents because that is the platform
          demonstrated in the source video.
        </p>
        <p>
          Base44&apos;s official setup follows four main steps: define the
          agent&apos;s goal, connect the tools it needs, add files and context,
          then create scheduled or triggered automations. Superagents can use
          connected apps, uploaded files, memory, data tables, skills, and
          browser research.
        </p>
        <p>
          You can begin testing on Base44&apos;s free plan, but regular
          automations and connected tools use credits. Some connector setups may
          also require a paid plan. Check the current pricing page before
          telling people the entire setup is free.
        </p>
        <div className="saa-note">
          <p>
            Do not give a new agent permission to send emails, edit financial
            records, publish content, issue refunds, or change your calendar
            immediately. Start with read-only access or draft mode. Base44 lets
            you change a connected tool between read-only and manage access.
          </p>
        </div>
      </section>

      <section className="saa-section">
        <h2>What you need</h2>
        <p>
          Create a Base44 account, then prepare the tools and files relevant to
          the agent you want to build.
        </p>
        <p>Common tools include:</p>
        <ul className="saa-check">
          {COMMON_TOOLS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>
          Base44&apos;s current connector catalog includes Google Workspace
          tools, Gmail, HubSpot, QuickBooks, FreshBooks, Gorgias, Intercom,
          Instagram Business, LinkedIn, TikTok, Notion, Calendly, and several
          other business tools. Availability and permissions depend on the
          connector and your plan.
        </p>
      </section>

      <section className="saa-section">
        <h2>The basic formula behind every agent</h2>
        <p>Every useful agent needs seven things:</p>
        <div className="saa-table-scroll">
          <table>
            <thead>
              <tr>
                <th>What it needs</th>
                <th>Sales agent example</th>
              </tr>
            </thead>
            <tbody>
              {FORMULA.map((row) => (
                <tr key={row.item}>
                  <td>{row.item}</td>
                  <td>{row.example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="saa-section">
        <h2>How to create your first Superagent</h2>
        <ol className="saa-steps">
          {SETUP_STEPS.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <p>
          These steps follow Base44&apos;s current Superagent setup. You can
          connect tools from Plugins, upload files from Files, save persistent
          facts in Memory, and create scheduled or triggered automations.
        </p>
      </section>

      <nav className="saa-map" aria-label="Six agents">
        {AGENTS.map((agent) => (
          <a key={agent.id} className="saa-map-item" href={`#${agent.id}`}>
            <div className="saa-map-n">{agent.num}</div>
            <div>
              <strong>{agent.name}</strong>
              <span>{agent.tools[0]}</span>
            </div>
          </a>
        ))}
      </nav>

      {AGENTS.map((agent) => (
        <section className="saa-section" id={agent.id} key={agent.id}>
          <p className="saa-num">Agent {agent.num}</p>
          <h2>{agent.name}</h2>
          <h3>What it does</h3>
          <p>{agent.intro}</p>

          <h3>Tools to connect</h3>
          <ul className="saa-check">
            {agent.tools.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h3>Files to upload</h3>
          <ul className="saa-check">
            {agent.files.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {"calendarColumns" in agent && agent.calendarColumns ? (
            <>
              <h3>Create your content calendar</h3>
              <p>Create a Google Sheet with these columns:</p>
              <ul className="saa-check">
                {agent.calendarColumns.map((col) => (
                  <li key={col}>{col}</li>
                ))}
              </ul>
            </>
          ) : null}
          {agent.id === "finance" ? (
            <div className="saa-note">
              <p>
                Do not upload bank passwords, card PINs, private keys, or
                one-time login codes.
              </p>
            </div>
          ) : null}

          <h3>Suggested trigger</h3>
          <p>{agent.trigger}</p>

          <h3>Copy-and-paste build prompt</h3>
          <CopyBlock label={`Build ${agent.name}`} text={agent.prompt} />

          <h3>What to check before turning it on</h3>
          <p>Make sure the agent:</p>
          <ul className="saa-check">
            {agent.checks.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {"note" in agent && agent.note ? (
            <p className="saa-deck">{agent.note}</p>
          ) : null}
        </section>
      ))}

      <section className="saa-section">
        <h2>Which agent should you build first?</h2>
        <p>Do not build all six at once.</p>
        <p>Start with the one connected to the problem you notice every week.</p>
        <div className="saa-table-scroll">
          <table>
            <thead>
              <tr>
                <th>Your problem</th>
                <th>Build this first</th>
              </tr>
            </thead>
            <tbody>
              {CHOOSER.map((row) => (
                <tr key={row.problem}>
                  <td>{row.problem}</td>
                  <td>{row.agent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Base44 supports both one central Superagent and several specialised
          Superagents. Starting with separate, focused agents makes it easier
          to control permissions and test each workflow.
        </p>
      </section>

      <section className="saa-section">
        <h2>How to test an agent properly</h2>
        <p>Do not test an agent with only one perfect example.</p>
        <p>Test it with:</p>
        <ol className="saa-steps">
          {TEST_CASES.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
        <p>After each test, check:</p>
        <ul className="saa-check">
          {TEST_CHECKS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>
          Base44 keeps records of automation runs, including whether a run
          succeeded and any errors that occurred. Use these logs while testing.
        </p>
      </section>

      <section className="saa-section">
        <h2>A safer rollout plan</h2>
        <h3>For the first week</h3>
        <ul className="saa-check">
          {ROLLOUT_WEEK1.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h3>For the second week</h3>
        <ul className="saa-check">
          {ROLLOUT_WEEK2.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h3>After the agent is reliable</h3>
        <ul className="saa-check">
          {ROLLOUT_AFTER.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="saa-section">
        <h2>Final note</h2>
        <p>An agent will not fix an unclear process.</p>
        <p>Before you automate a task, decide:</p>
        <ul className="saa-check">
          <li>What starts the task?</li>
          <li>What information is needed?</li>
          <li>What rules should be followed?</li>
          <li>What result should be created?</li>
          <li>What can the agent do automatically?</li>
          <li>When must a person take over?</li>
        </ul>
        <p>Start with one narrow job. Test it. Fix the mistakes. Then let it run.</p>
      </section>

      <section className="saa-section">
        <h2>Links and sources</h2>
        <ul className="saa-links">
          {OFFICIAL_LINKS.map((link) => (
            <li key={link.href}>
              {link.label}:{" "}
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.href}
              </a>
            </li>
          ))}
          <li>
            More free AI guides:{" "}
            <a
              href="https://mercythaddeus.xyz/guide"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://mercythaddeus.xyz/guide
            </a>
          </li>
        </ul>
        <p>Source video timestamps:</p>
        <ul className="saa-check">
          {VIDEO_TIMESTAMPS.map((row) => (
            <li key={row.agent}>
              {row.agent}: {row.time}
            </li>
          ))}
        </ul>
        <p className="saa-checked">Last checked: August 19, 2026</p>
        <p className="saa-sig">MERCY THADDEUS &nbsp;|&nbsp; ATTENTION FACTORY</p>
      </section>
    </div>
  );
}
