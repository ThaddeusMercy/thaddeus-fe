"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { Inter, Shippori_Mincho } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import { ArrowLeft } from "@phosphor-icons/react";

import { FLOW_STEPS, STEPS } from "./data";
import {
  STORY_SWAP_EXAMPLE,
  STORYBOARD_PROMPTS,
  type StoryboardPromptKey,
} from "./prompts";
import "./anime-storyboard.css";

const shippori = Shippori_Mincho({
  subsets: ["latin"],
  variable: "--font-shippori",
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
});

function PromptBlock({
  label,
  text,
  promptKey,
}: {
  label: string;
  text: string;
  promptKey: StoryboardPromptKey;
}) {
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
    setTimeout(() => setCopied(false), 1800);
  }, [text]);

  const showSwap = promptKey === "storyCharacter";
  const restOfStoryPrompt = STORYBOARD_PROMPTS.storyCharacter.slice(
    STORY_SWAP_EXAMPLE.length,
  );

  return (
    <div className="asb-prompt">
      <div className="asb-prompt-bar">
        <span className="asb-label asb-mono">{label}</span>
        <button
          type="button"
          className={`asb-copy-btn asb-mono${copied ? " asb-done" : ""}`}
          onClick={onCopy}
        >
          {copied ? "Copied ✓" : "Copy"}
        </button>
      </div>
      <pre className="asb-mono">
        {showSwap ? (
          <>
            <span className="asb-swap">{STORY_SWAP_EXAMPLE}</span>
            {restOfStoryPrompt}
          </>
        ) : (
          text
        )}
      </pre>
    </div>
  );
}

export default function AnimeStoryboardGuide() {
  return (
    <div
      className={`ai-storyboard ${shippori.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <div className="asb-wrap">
        <Link href="/guide" className="asb-back asb-mono">
          <ArrowLeft className="h-4 w-4" aria-hidden />
          All guides
        </Link>

        <header>
          <div className="asb-eyebrow asb-mono">AI Content Series · Part 5</div>
          <h1 className="asb-display">
            Turn a single idea
            <br />
            into a full <span className="asb-accent-text">anime scene</span>.
          </h1>
          <p className="asb-lede">
            The exact workflow I use to go from one line of story to a moving
            15-second cinematic clip. The secret is consistency: lock your
            character and your world first, then let everything build on top.
          </p>

          <div className="asb-flow">
            {FLOW_STEPS.map((step) => (
              <div key={step.num} className="asb-flow-step">
                <div className="asb-n asb-mono">{step.num}</div>
                <div className="asb-t asb-display">{step.title}</div>
              </div>
            ))}
          </div>
        </header>

        <div className="asb-note">
          Two tools, start to finish: <b>ChatGPT</b> builds your character,
          location, and storyboard. <b>Higgsfield (Seedance)</b> turns the
          storyboard into video. Copy each prompt below in order. The only thing
          you ever change is your story.
        </div>

        <div className="asb-steps">
          {STEPS.map((step) => (
            <section key={step.num} className="asb-step">
              <div className="asb-step-head">
                <div className="asb-step-num asb-display">{step.num}</div>
                <h2 className="asb-step-title asb-display">{step.title}</h2>
              </div>
              <div className="asb-step-do">
                <span className="asb-tool asb-mono">{step.tool}</span>
                <br />
                {step.num === "04" ? (
                  <>
                    Upload <b>both</b> sheets, then paste this. ChatGPT directs
                    the full 15-second sequence, panel by panel, using your
                    character and world.
                  </>
                ) : (
                  step.description
                )}
              </div>
              <PromptBlock
                label={step.promptLabel}
                text={STORYBOARD_PROMPTS[step.promptKey]}
                promptKey={step.promptKey}
              />
            </section>
          ))}
        </div>

        <div className="asb-outro">
          <h3 className="asb-display">That&apos;s the whole flow.</h3>
          <p>
            Character, location, storyboard, video. Same character the whole way
            through. Now go make something worth watching.
          </p>
        </div>

        <footer className="asb-mono">
          Made with{" "}
          <span className="asb-accent-text">ChatGPT + Higgsfield</span> · AI
          Content Series, Part 5
        </footer>
      </div>
    </div>
  );
}
