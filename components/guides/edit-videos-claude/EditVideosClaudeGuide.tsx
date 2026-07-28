"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

import {
  CHECKLIST,
  FIXES,
  INSTALL_PROMPT,
  META,
  PROMPTS,
  TERMINAL_SETUP,
  USES,
} from "./data";
import "./edit-videos-claude.css";

async function copyText(text: string) {
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
}

function CopyBtn({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const onCopy = useCallback(async () => {
    await copyText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  }, [text]);

  return (
    <button
      type="button"
      className={`evc-copy${copied ? " evc-done" : ""}`}
      onClick={onCopy}
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

function CodeBlock({ text }: { text: string }) {
  return (
    <div className="evc-code">
      <CopyBtn text={text} />
      <pre>{text}</pre>
    </div>
  );
}

function PromptCard({ label, text }: { label: string; text: string }) {
  return (
    <div className="evc-prompt">
      <div className="evc-prompt-label">{label}</div>
      <CopyBtn text={text} />
      <p>{text}</p>
    </div>
  );
}

export default function EditVideosClaudeGuide() {
  return (
    <div className="evc-guide">
      <Link href="/guide" className="evc-back">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        All guides
      </Link>

      <header className="evc-mast">
        <div className="evc-kicker">
          <span>Attention Factory / Setup guide</span>
          <span>Est. 20 minutes</span>
        </div>
        <h1>
          Edit your videos with <em>Claude</em>
        </h1>
        <p className="evc-standfirst">
          The full Remotion setup, the prompts I actually use, and what to do
          when it breaks. This is the exact workflow that took my edits from two
          hours in CapCut down to about ten minutes.
        </p>
      </header>

      <dl className="evc-meta">
        {META.map((item) => (
          <div key={item.label}>
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>

      <section className="evc-section">
        <h2>What this actually is</h2>
        <p>
          Remotion is a tool that makes videos out of code, which sounds like
          the least appealing sentence I could write, so stay with me. The point
          is that you never touch the code. You install it once, then you
          describe the edit you want in plain English and Claude writes the code
          for you and renders the video.
        </p>
        <p>
          That difference matters because of what happens on revisions. In
          CapCut, changing your caption style on a finished video means going
          back into the timeline and redoing it. Here you say &quot;make the
          captions bigger and move them up&quot;, and it rebuilds the whole
          video with that change.
        </p>
        <p>Three things I use it for constantly:</p>
        <ul className="evc-plain">
          {USES.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="evc-section">
        <h2>Before you start</h2>
        <p>
          Check these three things, because every setup problem I&apos;ve seen
          came from one of them.
        </p>
        <ul className="evc-check">
          {CHECKLIST.map((item, i) => (
            <li key={i}>
              {item.before}
              {item.code ? <code className="evc-inline">{item.code}</code> : null}
              {item.after}
            </li>
          ))}
        </ul>
        <aside className="evc-note">
          <p>
            You do not need to know what any of that means. You just need the
            answers to be yes. If Node is missing, installing it is one download
            and a double click.
          </p>
        </aside>
      </section>

      <section className="evc-section">
        <h2>The setup</h2>

        <div className="evc-step">
          <div className="evc-num">1</div>
          <div className="evc-step-body">
            <h3>Open Claude Code</h3>
            <p>
              In the Claude desktop app, switch to the Code tab. If you are in
              the terminal instead, that works exactly the same way.
            </p>
          </div>
        </div>

        <div className="evc-step">
          <div className="evc-num">2</div>
          <div className="evc-step-body">
            <h3>Paste this and press enter</h3>
            <p>
              This is the official install prompt from Remotion. You are pasting
              it as a message to Claude, not as a terminal command.
            </p>
            <CodeBlock text={INSTALL_PROMPT} />
            <p>
              Claude will check your setup, install the skills, and tell you
              when it&apos;s done. It may ask you to confirm a step or two, so
              say yes.
            </p>
          </div>
        </div>

        <div className="evc-step">
          <div className="evc-num">3</div>
          <div className="evc-step-body">
            <h3>Or build a fresh project from the terminal</h3>
            <p>
              If you&apos;d rather have a dedicated project folder, run these
              instead. This gives you a blank video project with Tailwind and
              the agent skills already wired in.
            </p>
            <CodeBlock text={TERMINAL_SETUP} />
            <p>
              The last line opens Remotion Studio in your browser, which is the
              visual editor where you can drag things around and see changes
              live.
            </p>
          </div>
        </div>

        <div className="evc-step">
          <div className="evc-num">4</div>
          <div className="evc-step-body">
            <h3>Point it at your video and describe the edit</h3>
            <p>
              Start a new session, drag your video file in or give Claude the
              file path, and tell it what you want. Be specific about the
              outcome rather than the technique, so &quot;remove every pause
              longer than half a second&quot; works better than &quot;make it
              snappier&quot;.
            </p>
            <p>
              The first render takes a few minutes because it&apos;s setting
              things up. After that it&apos;s fast.
            </p>
          </div>
        </div>

        <div className="evc-step">
          <div className="evc-num">5</div>
          <div className="evc-step-body">
            <h3>Ask for changes in plain English</h3>
            <p>
              This is the part that changed how I work. You don&apos;t reopen a
              timeline and you don&apos;t redo anything. You say what&apos;s
              wrong and it rebuilds the video with that fixed.
            </p>
          </div>
        </div>
      </section>

      <section className="evc-section">
        <h2>Prompts I actually use</h2>
        <p>
          Copy these and swap in your own details. They work because they name
          the outcome and give a constraint, which is what stops Claude
          guessing.
        </p>
        {PROMPTS.map((p) => (
          <PromptCard key={p.label} {...p} />
        ))}
        <aside className="evc-note">
          <p>
            The phrase that saves you the most time is{" "}
            <strong>&quot;leave everything else exactly as it is&quot;</strong>.
            Without it, Claude sometimes improves things you didn&apos;t ask it
            to touch.
          </p>
        </aside>
      </section>

      <section className="evc-section">
        <h2>When it breaks</h2>
        <div className="evc-fix">
          {FIXES.map((row) => (
            <div className="evc-row" key={row.problem}>
              <div>{row.problem}</div>
              <div>{row.fix}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="evc-section">
        <h2>What it costs</h2>
        <p>
          Free if you&apos;re an individual or a team of up to three people, and
          that free licence includes every feature and allows commercial use, so
          you can make money with the videos you produce.
        </p>
        <p>
          Once your company hits four or more people you need the Company
          Licence, which starts at a $100 per month minimum. Full terms are on
          the Remotion site under licence and pricing, and if you&apos;re unsure
          which side of the line you fall on they run free 20 minute calls to
          sort it out.
        </p>
      </section>

      <div className="evc-closer">
        <p className="evc-sig">That&apos;s the whole thing.</p>
        <p>
          Make something ugly first. The first video you produce this way will
          be rough, and that&apos;s fine, because the point of the setup is that
          fixing it costs you one sentence instead of one afternoon.
        </p>
        <p>
          If you get stuck, reply to the message that sent you here and tell me
          exactly where it stopped working.
        </p>
      </div>
    </div>
  );
}
