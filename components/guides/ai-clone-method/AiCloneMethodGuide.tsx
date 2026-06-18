"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import { ArrowLeft } from "@phosphor-icons/react";

import { GLANCE_CARDS, NEED_CHIPS, SCALE_TIPS } from "./data";
import {
  CLAUDE_VEO_PROMPT,
  MASTER_CLONE_PROMPT,
  SAMPLE_VEO_JSON,
  SCENE_PROMPTS,
} from "./prompts";
import "./ai-clone-method.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
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

const ACCENT_VAR: Record<string, string> = {
  amber: "var(--acm-amber)",
  violet: "var(--acm-violet)",
  green: "var(--acm-green)",
};

function PromptCard({
  title,
  text,
  json,
  accent = "amber",
}: {
  title: string;
  text: string;
  json?: boolean;
  accent?: "amber" | "violet" | "green";
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
    setTimeout(() => setCopied(false), 1600);
  }, [text]);

  return (
    <div
      className={`acm-prompt${json ? " acm-json" : ""}`}
      style={{ ["--acm-accent" as string]: ACCENT_VAR[accent] }}
    >
      <div className="acm-prompt-bar">
        <span className="acm-prompt-title acm-mono">
          <span className="acm-dot" aria-hidden />
          {title}
        </span>
        <button
          type="button"
          className={`acm-copy-btn acm-mono${copied ? " acm-done" : ""}`}
          onClick={onCopy}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="acm-mono">{text}</pre>
    </div>
  );
}

export default function AiCloneMethodGuide() {
  return (
    <div
      className={`ai-clone-method ${bricolage.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <div className="acm-wrap">
        <Link href="/guide" className="acm-back acm-mono">
          <ArrowLeft className="h-4 w-4" aria-hidden />
          All guides
        </Link>
      </div>

      <header className="acm-hero">
        <div className="acm-wrap">
          <div className="acm-eyebrow acm-mono acm-rise">The AI Clone Method</div>
          <h1 className="acm-display acm-rise acm-d1">
            Shoot content without getting in front of a{" "}
            <span className="acm-glow">camera.</span>
          </h1>
          <p className="acm-lede acm-rise acm-d2">
            Build a realistic version of yourself once, place it in any scene
            you want, then animate it with spoken dialogue and lip sync. Get it
            down and you can run it a few times a day and never set up a camera
            again.
          </p>
          <div className="acm-need acm-rise acm-d3">
            <span className="acm-need-label acm-mono">What you need</span>
            {NEED_CHIPS.map((chip) => (
              <span key={chip} className="acm-chip acm-mono">
                {chip}
              </span>
            ))}
          </div>
        </div>
      </header>

      <div className="acm-divider" />

      <section>
        <div className="acm-wrap">
          <div className="acm-section-eyebrow acm-mono">The loop</div>
          <h2 className="acm-display">Three steps at a glance</h2>
          <p className="acm-section-intro">
            The whole system in one view. The rest of this guide gives you the
            exact prompts for each step.
          </p>

          <div className="acm-glance">
            {GLANCE_CARDS.flatMap((card, i) => {
              const el = (
                <div
                  key={card.num}
                  className="acm-scard"
                  style={{
                    ["--acm-accent" as string]: ACCENT_VAR[card.accent],
                  }}
                >
                  <div className="acm-snum acm-display">{card.num}</div>
                  <div className="acm-slabel acm-mono">{card.label}</div>
                  <h3 className="acm-display">{card.title}</h3>
                  <span className="acm-stool acm-mono">{card.tool}</span>
                  <p>{card.body}</p>
                </div>
              );
              if (i === 0) return [el];
              return [
                <div key={`arrow-${i}`} className="acm-arrow" aria-hidden>
                  &rarr;
                </div>,
                el,
              ];
            })}
          </div>
          <div className="acm-glance-sum acm-display">
            = 3 to 5 posts a day <span>&nbsp;/ no camera</span>
          </div>
        </div>
      </section>

      <div className="acm-divider" />

      <section style={{ ["--acm-accent" as string]: ACCENT_VAR.amber }}>
        <div className="acm-wrap">
          <div className="acm-step-head">
            <span className="acm-step-tag acm-mono">Step 1</span>
            <h2 className="acm-display" style={{ margin: 0 }}>
              Build your clone in Nano Banana Pro
            </h2>
          </div>
          <p className="acm-section-intro">
            Upload your photo, then paste the master prompt. The whole point
            here is identity lock. You want the model to keep your face exactly
            as it is and only change the scene around you. Fill the parts in
            brackets and keep the identity-lock block the same every time.
          </p>

          <PromptCard
            title="Master Clone Prompt"
            text={MASTER_CLONE_PROMPT}
            accent="amber"
          />

          <p className="acm-note">
            If the first result drifts from your face, regenerate once or twice
            before changing the prompt. You can also add the line &quot;match
            the reference face with 100% accuracy&quot; to push it harder. Save
            the image you like. It becomes your first frame for Step 2.
          </p>

          <h3 className="acm-scene-label acm-display">Ready-to-use scenes</h3>
          <p className="acm-note">
            Do not want to fill in blanks? Copy a full scene below. Upload your
            photo as the identity reference, paste the whole prompt, generate.
            If you also have a scene reference image, add it and the prompt uses
            it for the setup only, never the face.
          </p>

          {SCENE_PROMPTS.map((scene) => (
            <PromptCard
              key={scene.title}
              title={scene.title}
              text={scene.text}
              accent="amber"
            />
          ))}
        </div>
      </section>

      <div className="acm-divider" />

      <section style={{ ["--acm-accent" as string]: ACCENT_VAR.violet }}>
        <div className="acm-wrap">
          <div className="acm-step-head">
            <span className="acm-step-tag acm-mono">Step 2</span>
            <h2 className="acm-display" style={{ margin: 0 }}>
              Turn your image into a Veo 3 JSON prompt with Claude
            </h2>
          </div>
          <p className="acm-section-intro">
            JSON prompts give Veo 3 far more control than a plain sentence.
            Instead of writing it yourself, hand the image to Claude and let it
            build the prompt. Upload your Step 1 image into Claude, then paste
            this.
          </p>

          <PromptCard
            title="The Claude Prompt"
            text={CLAUDE_VEO_PROMPT}
            accent="violet"
          />

          <p className="acm-note">
            Claude hands you something like this. This is what you copy into Veo
            3.
          </p>

          <PromptCard
            title="What you get back (sample)"
            text={SAMPLE_VEO_JSON}
            json
            accent="green"
          />
        </div>
      </section>

      <div className="acm-divider" />

      <section style={{ ["--acm-accent" as string]: ACCENT_VAR.green }}>
        <div className="acm-wrap">
          <div className="acm-step-head">
            <span className="acm-step-tag acm-mono">Step 3</span>
            <h2 className="acm-display" style={{ margin: 0 }}>
              Generate
            </h2>
          </div>
          <p className="acm-section-intro">
            Open Veo 3. Upload your Step 1 image, paste the JSON prompt from
            Claude, and hit generate. That is the full loop. Image, prompt,
            generate.
          </p>
        </div>
      </section>

      <div className="acm-divider" />

      <section>
        <div className="acm-wrap">
          <div className="acm-section-eyebrow acm-mono">Make it a system</div>
          <h2 className="acm-display">How to scale this to 3 to 5 posts a day</h2>
          <p className="acm-section-intro">
            Once your clone is dialled in, you are not starting from scratch
            each time. You are swapping variables. Keep one folder of your best
            clone images in a few core scenes. Office, kitchen, outdoor, neutral
            studio. When you need a post, pick the scene, write the new line,
            and run Steps 2 and 3 again. The face stays locked, only the words
            and the motion change. Batch it: write five lines, run five
            generations back to back, and that is a week of content in one
            sitting.
          </p>

          <div className="acm-tips">
            {SCALE_TIPS.map((tip) => (
              <div key={tip.title} className="acm-tip">
                <h4 className="acm-display">{tip.title}</h4>
                <p>{tip.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <div className="acm-wrap">
          <div className="acm-f-main acm-display">
            Now go build a week of content in one sitting.
          </div>
          <div className="acm-f-sub acm-mono">The AI Clone Method</div>
        </div>
      </footer>
    </div>
  );
}
