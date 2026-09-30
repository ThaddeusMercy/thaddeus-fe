"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

import {
  AGENTS,
  CHOOSE_RULES,
  COMPARISON,
  FIRST_JOBS,
  type AgentGuide,
} from "./data";
import "./ai-agents-dots-grok-muse.css";

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
    <div className="agm-block">
      <div className="agm-block-head">
        <span className="agm-block-label">{label}</span>
        <button
          type="button"
          className={`agm-copy${copied ? " agm-done" : ""}`}
          onClick={onCopy}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre>{text}</pre>
    </div>
  );
}

function AgentSection({ agent }: { agent: AgentGuide }) {
  return (
    <section className="agm-section" id={agent.id}>
      <div className="agm-head">
        <span className="agm-num">{agent.num}</span>
        <h2>{agent.title}</h2>
      </div>

      {agent.blurb.map((para) => (
        <p key={para.slice(0, 48)}>{para}</p>
      ))}

      <h3>Who should use it?</h3>
      {agent.who.map((para) => (
        <p key={para.slice(0, 48)}>{para}</p>
      ))}

      <h3>How I would set it up</h3>
      <p>{agent.setupIntro}</p>
      <CopyBlock label={`Setup brief · ${agent.title}`} text={agent.setupPrompt} />
      {agent.setupNotes.map((note) => (
        <p key={note}>{note}</p>
      ))}

      <p className="agm-access">{agent.access}</p>
    </section>
  );
}

export default function AiAgentsDotsGrokMuseGuide() {
  return (
    <div className="agm-guide">
      <Link href="/guide" className="agm-back">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        All guides
      </Link>

      <header className="agm-hero">
        <p className="agm-eyebrow">AI agents · Comparison</p>
        <h1>ChatGPT dots vs Grok Bot vs Meta Muse: which AI agent should you use?</h1>
        <p className="agm-lede">
          AI assistants are starting to change. Instead of waiting for you to
          open an app and type a prompt, a new group of AI agents can keep
          working after you leave.
        </p>
        <p>
          They can watch for things that need your attention, work across your
          apps, complete longer tasks, and come back when they need a decision
          from you. Three worth knowing right now are ChatGPT dots, Grok Bot and
          Meta Muse. They overlap, but they are not built exactly the same way.
        </p>
        <p>
          The easiest way to choose is to look at where your work already
          happens.
        </p>
        <nav className="agm-toc" aria-label="Agents">
          {AGENTS.map((agent) => (
            <a key={agent.id} href={`#${agent.id}`}>
              {agent.num} {agent.title}
            </a>
          ))}
        </nav>
      </header>

      <section className="agm-section">
        <h2>Quick comparison</h2>
        <div className="agm-table-wrap">
          <table className="agm-table">
            <thead>
              <tr>
                <th scope="col">Agent</th>
                <th scope="col">Best fit</th>
                <th scope="col">Main advantage</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row) => (
                <tr key={row.agent}>
                  <td>{row.agent}</td>
                  <td>{row.bestFit}</td>
                  <td>{row.advantage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {AGENTS.map((agent) => (
        <AgentSection key={agent.id} agent={agent} />
      ))}

      <section className="agm-section" id="choose">
        <h2>So which one should you choose?</h2>
        <p>
          Do not choose based on which company you think has the smartest AI.
          Choose based on where your work lives.
        </p>
        <div className="agm-choose">
          {CHOOSE_RULES.map((rule) => (
            <div key={rule.if} className="agm-choose-row">
              <strong>If {rule.if}</strong>
              <span>→ {rule.then}</span>
            </div>
          ))}
        </div>
        <p>You also do not need all three. Pick one and give it one real job for seven days.</p>
        <p>
          A good first job is something you currently repeat every week. For
          example:
        </p>
        <ul className="agm-list">
          {FIRST_JOBS.map((job) => (
            <li key={job}>{job}</li>
          ))}
        </ul>
        <p>
          That is when these tools start becoming more than chatbots.
        </p>
      </section>

      <section className="agm-section" id="rule">
        <h2>One important rule before you start</h2>
        <div className="agm-warn">
          <p>
            An always-on agent may have access to your email, files, browser,
            business accounts and other tools. Do not give it unlimited access
            immediately.
          </p>
          <p>
            Start with the minimum access required for the job. Keep sending
            messages, spending money, publishing content, deleting information
            and other important actions behind your approval until you understand
            how the agent behaves.
          </p>
          <p>
            All three products include permission or approval systems for this
            reason. The goal is not to give AI control of everything. The goal is
            to find the work you should no longer have to manually remember,
            repeat or manage every day, and give the agent responsibility for
            that.
          </p>
        </div>
      </section>
    </div>
  );
}
