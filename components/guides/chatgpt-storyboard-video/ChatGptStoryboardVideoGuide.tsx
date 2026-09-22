"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

import { CONNECT_STEPS, FLOW_STEPS, STEPS } from "./data";
import { STORYBOARD_PROMPTS, type StoryboardPromptKey } from "./prompts";
import "./chatgpt-storyboard-video.css";

function PromptBlock({
  label,
  promptKey,
}: {
  label: string;
  promptKey: StoryboardPromptKey;
}) {
  const text = STORYBOARD_PROMPTS[promptKey];
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

  return (
    <div className="csb-prompt">
      <div className="csb-prompt-bar">
        <span className="csb-label csb-mono">{label}</span>
        <button
          type="button"
          className={`csb-copy-btn csb-mono${copied ? " csb-done" : ""}`}
          onClick={onCopy}
        >
          {copied ? "Copied ✓" : "Copy"}
        </button>
      </div>
      <pre className="csb-mono">{text}</pre>
    </div>
  );
}

export default function ChatGptStoryboardVideoGuide() {
  return (
    <div className="csb-guide">
      <div className="csb-wrap">
        <Link href="/guide" className="csb-back csb-mono">
          <ArrowLeft className="h-4 w-4" aria-hidden />
          All guides
        </Link>

        <header>
          <div className="csb-eyebrow csb-mono">ChatGPT + Higgsfield</div>
          <h1 className="csb-display">
            Create a storyboard and turn it into a{" "}
            <span className="csb-accent-text">video</span> inside ChatGPT.
          </h1>
          <p className="csb-lede">
            You can start with a story, create the characters and setting, build
            a storyboard, and turn it into a video using ChatGPT and Higgsfield.
            For my demo, I used a realistic rescue scene. But you can use these
            prompts for your own story, whether you want realistic humans, anime
            or 3D animation. Here&apos;s the setup and every prompt you need.
          </p>

          <div className="csb-flow">
            {FLOW_STEPS.map((step) => (
              <div key={step.num} className="csb-flow-step">
                <div className="csb-n csb-mono">{step.num}</div>
                <div className="csb-t csb-display">{step.title}</div>
              </div>
            ))}
          </div>
        </header>

        <div className="csb-note">
          <b>Before you start.</b> You&apos;ll need ChatGPT with image generation
          and a Higgsfield account with access to Seedance 2.5. Video generation
          uses your Higgsfield account, so check your available credits before
          starting.
          <br />
          <br />
          <b>To connect Higgsfield:</b>
          <ol className="csb-list">
            {CONNECT_STEPS.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <br />
          Keep your story, images and prompts in that conversation.
        </div>

        <div className="csb-steps">
          {STEPS.map((step) => (
            <section key={step.num} className="csb-step">
              <div className="csb-step-head">
                <div className="csb-step-num csb-display">{step.num}</div>
                <h2 className="csb-step-title csb-display">{step.title}</h2>
              </div>
              <div className="csb-step-do">
                <span className="csb-tool csb-mono">{step.tool}</span>
                {step.description.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>
              <PromptBlock label={step.promptLabel} promptKey={step.promptKey} />
              {step.check ? (
                <div className="csb-step-check">{step.check}</div>
              ) : null}
            </section>
          ))}
        </div>

        <div className="csb-outro">
          <h3 className="csb-display">That&apos;s the whole flow.</h3>
          <p>
            Story, sheets, storyboard, video. You can reuse this process with
            another story. Change the story brief, choose your visual style and
            follow the same steps.
          </p>
          <p style={{ marginTop: 12 }}>
            Plugin setup help:{" "}
            <a
              href="https://learn.chatgpt.com/docs/plugins"
              target="_blank"
              rel="noreferrer"
            >
              OpenAI&apos;s plugin instructions
            </a>
            .
          </p>
        </div>

        <footer className="csb-mono">
          Made with{" "}
          <span className="csb-accent-text">ChatGPT + Higgsfield</span> ·
          Seedance 2.5
        </footer>
      </div>
    </div>
  );
}
