"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

import { trackEvent } from "@/lib/analytics";
import {
  ADVISERS,
  COUNCIL_PROMPT,
  EXAMPLE_PROMPT,
  INSIDE,
  START_PROMPT,
  STUDY_URL,
} from "./data";
import "../chatgpt-study-codes/chatgpt-study-codes.css";
import "./ai-council-prompt.css";

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
    trackEvent("guide_copy", { guide: "ai_council_prompt", block: label });
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

export default function AiCouncilPromptGuide() {
  useEffect(() => {
    const list = document.getElementById("acp-inside");
    const gate = list?.closest(".guide-gate");
    const content = gate?.querySelector(".guide-gate-content");
    if (!list || !(gate instanceof HTMLElement) || !content) return;

    const placeGate = () => {
      const end =
        list.getBoundingClientRect().bottom -
        content.getBoundingClientRect().top;
      // The signup panel fades in over the last ~210px, so this puts it
      // just after the "what's inside" list.
      gate.style.setProperty(
        "--guide-gate-preview",
        `${Math.ceil(end + 210)}px`,
      );
    };

    placeGate();
    document.fonts?.ready.then(placeGate).catch(() => undefined);
    window.addEventListener("resize", placeGate);
    return () => window.removeEventListener("resize", placeGate);
  }, []);

  return (
    <div className="scs-guide acp-guide">
      <Link href="/guide" className="scs-back">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        All guides
      </Link>

      <header className="scs-hero">
        <p className="scs-eyebrow">ChatGPT · Claude · Gemini</p>
        <h1>The AI Council prompt: make AI stop agreeing with you</h1>
        <p className="scs-lede">
          Have you ever noticed that when you ask ChatGPT about a decision, it
          somehow always ends up agreeing with you? You&apos;re not imagining
          it.
        </p>
        <p>
          A Stanford-led study published in Science this year tested 11 popular
          AI models, including ChatGPT, Claude, Gemini and DeepSeek. On
          personal advice questions, the models backed the user&apos;s side 49%
          more often than real people did, even when the person was clearly in
          the wrong. And the people in the study trusted the flattering answers
          more. (
          <a href={STUDY_URL} target="_blank" rel="noopener noreferrer">
            Stanford&apos;s write-up of the study
          </a>
          )
        </p>
        <p>
          So basically, if you use AI to help you make big decisions,
          there&apos;s a good chance it&apos;s just handing your own opinion
          back to you with nicer wording. That&apos;s fine for picking a
          caption. It&apos;s not fine when you&apos;re deciding whether to quit
          your job, raise your prices or move cities.
        </p>
        <p>
          This guide fixes that with one prompt. It turns the AI into a small
          council of five advisers who each look at your decision from a
          different angle, review each other&apos;s thinking without knowing
          who said what, and then hand you a clear final call. This version
          runs the whole thing inside one chat.
        </p>
        <p>Here&apos;s what&apos;s inside:</p>
        <ul className="scs-check" id="acp-inside">
          {INSIDE.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </header>

      <section className="scs-section" id="how-it-works">
        <h2>How the council works</h2>
        <p>
          How it works is pretty simple. Instead of asking one AI for one
          opinion, you get five advisers who are each built to think
          differently. They answer on their own first, so nobody just goes
          along with the group.
        </p>
        {ADVISERS.map((adviser) => (
          <p key={adviser.name}>
            <strong>{adviser.name}</strong> {adviser.body}
          </p>
        ))}
        <p>
          After that, the answers get shuffled and reviewed anonymously, so no
          adviser can go easy on itself. Then a Chairman weighs the strongest
          arguments and gives you one decision, how confident it is, the main
          risk, an honesty check on where you might be fooling yourself, next
          steps with dates, and the signal that means you should turn back.
        </p>
      </section>

      <section className="scs-section" id="prompt">
        <h2>The AI Council prompt</h2>
        <p>
          Copy the whole thing and paste it into a new chat. It works in
          ChatGPT, Claude and Gemini.
        </p>
        <CopyBlock label="Prompt · The AI Council" text={COUNCIL_PROMPT} />
      </section>

      <section className="scs-section" id="how-to-use">
        <h2>How to use it</h2>
        <ol className="scs-steps">
          <li>
            Open a new chat in ChatGPT, Claude or Gemini. A fresh chat works
            best so the AI isn&apos;t carrying over what it already thinks of
            you.
          </li>
          <li>Paste the full prompt.</li>
          <li>
            Underneath it, add one line:{" "}
            <strong>Run the council on this: [your decision]</strong>
          </li>
          <li>
            Answer the questions it asks you. Be honest here, especially about
            which way you&apos;re leaning and what you&apos;re scared of.
            That&apos;s where the useful part comes from.
          </li>
          <li>
            Read the five advisers, the review and the Chairman&apos;s
            decision. Then take the first next step, the one that takes under
            an hour, today.
          </li>
        </ol>
        <CopyBlock label="Prompt · Start the council" text={START_PROMPT} />
      </section>

      <section className="scs-section" id="example">
        <h2>Example: should I quit my job to run my business full-time?</h2>
        <p>Let&apos;s say you paste the prompt and write:</p>
        <CopyBlock label="Prompt · Example" text={EXAMPLE_PROMPT} />
        <p>
          First, the council asks you its questions: how much the business
          makes each month, how many months of savings you have, what a good
          year looks like, and which way you&apos;re leaning. Say you answer
          that you&apos;re leaning towards quitting because you&apos;re tired
          of the job.
        </p>
        <p>
          Then the advisers get to work. The Contrarian might point out that
          weekend orders don&apos;t always grow into weekday orders, and the
          first thing to break is usually cash flow. The Executor might suggest
          testing it first: take weekday orders for the next 2 weeks and see if
          the demand is really there.
        </p>
        <p>
          The Chairman then gives you one clear call, something like
          &quot;Keep the job until the end of March, and quit then if
          you&apos;ve had 3 months in a row at your target income.&quot;
          You&apos;d also get how confident it is, the honesty check (are you
          quitting because the business is ready, or because you&apos;re
          tired?), a few dated next steps and the signal that tells you to
          change the plan.
        </p>
        <p>
          That&apos;s the kind of answer a good friend who isn&apos;t afraid to
          be honest would give you. ✨
        </p>
      </section>

      <section className="scs-section" id="tips">
        <h2>Tips to get better answers</h2>
        <p>
          <strong>Give it real numbers.</strong> The council is only as good as
          what you tell it. &quot;The business makes some money&quot; gets you
          vague advice, and &quot;I made ₦450,000 last month from 18
          orders&quot; gets you a real answer.
        </p>
        <p>
          <strong>Push back, but with new information.</strong> The prompt
          tells the AI not to cave just because you disagree. So if you think
          the Chairman got it wrong, tell it something it didn&apos;t know. If
          the call changes, it will tell you exactly why.
        </p>
        <p>
          <strong>Use the follow-ups.</strong> When the council is done, it
          offers to stress-test the decision, imagine it failed a year from now
          and explain why, or run the whole thing again with one thing changed.
          The &quot;imagine it failed&quot; one is honestly my favourite.
        </p>
        <p>
          <strong>Save it for decisions that matter.</strong> You don&apos;t
          need five advisers to choose a lunch spot. Use it for the money,
          career and business decisions you keep going back and forth on.
        </p>
        <p>
          Never paste passwords, bank details or anything confidential into an
          AI chat. And for legal, medical or tax decisions, the council will
          tell you which professional to talk to, so please actually talk to
          them.
        </p>
      </section>
    </div>
  );
}
