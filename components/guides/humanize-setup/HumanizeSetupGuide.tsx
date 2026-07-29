"use client";

import { Fragment, useCallback, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

import {
  BUILD_PROMPT,
  CHECK_ITEMS,
  CLAUDE_STEPS,
  CUSTOM_INSTRUCTIONS,
  WIKI_URL,
} from "./data";
import "./humanize-setup.css";

function highlightBrackets(text: string) {
  return text.split(/(\[[^\]]+\])/g).map((part, i) =>
    part.startsWith("[") && part.endsWith("]") ? (
      <span key={i} className="hz-fill">
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
    <div className="hz-block">
      <div className="hz-block-head">
        <span className="hz-block-label">{label}</span>
        <button
          type="button"
          className={`hz-copy${copied ? " hz-done" : ""}`}
          onClick={onCopy}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre>{highlightBrackets(text)}</pre>
    </div>
  );
}

export default function HumanizeSetupGuide() {
  return (
    <div className="hz-guide">
      <Link href="/guide" className="hz-back">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        All guides
      </Link>

      <header className="hz-top">
        <p className="hz-eyebrow">Attention Factory</p>
        <h1>Make your AI stop writing like an AI</h1>
        <p className="hz-stand">
          Setting up the Humanize skill, plus the version you can paste into
          ChatGPT or Gemini if you are not on Claude.
        </p>
      </header>

      <section className="hz-section">
        <h2>What this actually is</h2>
        <p>
          Wikipedia editors have been cleaning up AI-written articles for a
          while now, and along the way they built a field guide of every pattern
          that gives the writing away. Em dashes. Curly quotes. Puffery. Fake
          sourcing like &quot;experts argue&quot;. The rule of three. The
          bolded label at the start of every bullet. It runs to about 15,000
          words and it is the most detailed list of AI writing tells that
          exists anywhere.
        </p>
        <p>
          The page is called{" "}
          <a href={WIKI_URL} target="_blank" rel="noopener noreferrer">
            Signs of AI writing
          </a>{" "}
          and it was built by their AI Cleanup project.
        </p>
        <p>
          The move is simple. Take that guide, flip it, and hand it to your AI
          as a standing instruction. Instead of a list for catching AI writing,
          you get a list of things your AI is never allowed to do. I turned it
          into a skill called Humanize and it now runs in the background on
          everything I write.
        </p>
      </section>

      <section className="hz-section">
        <h2>Option 1: make it a skill in Claude</h2>
        <p>
          A skill is a file Claude loads on its own when it is relevant, so you
          set it up once and never think about it again. You need a paid plan
          for this, and code execution turned on.
        </p>

        <ol className="hz-steps">
          {CLAUDE_STEPS.map((step) => (
            <li key={step.title}>
              <h4>{step.title}</h4>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>

        <h3>Or build it yourself, which is what I did</h3>
        <p>
          Open the{" "}
          <a href={WIKI_URL} target="_blank" rel="noopener noreferrer">
            Wikipedia page
          </a>
          , select the whole thing, copy it. Then paste this into Claude with
          the guide underneath it.
        </p>

        <CopyBlock label="Prompt" text={BUILD_PROMPT} />

        <p>
          When it hands you the zip, download it and upload it the same way as
          above. That is the entire process. It took me about four minutes.
        </p>
      </section>

      <section className="hz-section">
        <h2>Option 2: paste it into custom instructions</h2>
        <p>
          No skills on your plan, or you are on ChatGPT or Gemini. This works
          nearly as well, it just lives in your settings instead of a file.
        </p>
        <p>
          In ChatGPT, go to Settings, then Personalization, then Custom
          instructions, and put this in the box about how you want responses. In
          Gemini, go to Settings and put it under saved info. In Claude on a
          free plan, use the personal preferences field in your profile
          settings.
        </p>

        <CopyBlock label="Paste this" text={CUSTOM_INSTRUCTIONS} />

        <aside className="hz-note">
          <p>
            ChatGPT caps that box at 1500 characters, so this version is trimmed
            to fit. If you are using a Project or a Gem, you have far more room,
            and you can paste the full skill text in there instead.
          </p>
        </aside>
      </section>

      <section className="hz-section">
        <h2>Check that it worked</h2>
        <p>
          Ask for something it would normally butcher. A 200 word intro on your
          topic, or a LinkedIn post about your week. Then read it looking for
          four things.
        </p>
        <ul className="hz-plain">
          {CHECK_ITEMS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>
          If those are gone, it took. If they are still there and you are on
          Claude, say &quot;use the humanize skill&quot; once and it will hold
          for the rest of the chat.
        </p>
      </section>

      <section className="hz-section">
        <h2>Two things worth knowing</h2>
        <p>
          The Wikipedia page is an advice page, not a formal ban. Editors use it
          to spot undisclosed AI writing and clean it up. The distinction
          matters if someone corrects you in the comments.
        </p>
        <p>
          And this is not about beating a detector. It is about your writing not
          sounding like everyone else&apos;s, because once a reader clocks the
          pattern they read everything after it differently.{" "}
          <mark>The point is to sound like you.</mark> The skill strips the
          tells, you still have to bring the opinion.
        </p>
      </section>

      <footer className="hz-foot">
        <p>
          Built by Mercy Thaddeus, Attention Factory. Questions, reply to the
          DM.
        </p>
      </footer>
    </div>
  );
}
