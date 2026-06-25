"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

import { PRO_TIPS, WORKFLOW_STEPS } from "./data";
import {
  PROMPT_FOUNDATION_FACE,
  PROMPT_SCENE,
  PROMPT_VIDEO,
} from "./prompts-main";
import { SCENE_GROUPS } from "./scene-prompts";
import "./ai-influencer.css";

function PromptBlock({
  label,
  text,
  sceneTitle,
  sceneNum,
  onCopy,
}: {
  label: string;
  text: string;
  sceneTitle?: string;
  sceneNum?: string;
  onCopy: (text: string) => void;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
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
    onCopy(text);
    setTimeout(() => setCopied(false), 1500);
  }, [text, onCopy]);

  return (
    <div className="ai-prompt">
      <div className="ai-phead">
        {sceneTitle ? (
          <div className="ai-plabel ai-scene ai-serif">
            <span className="ai-num">{sceneNum}</span> {sceneTitle}
          </div>
        ) : (
          <div className="ai-plabel">{label}</div>
        )}
        <button
          type="button"
          className={`ai-copy${copied ? " ai-done" : ""}`}
          onClick={handleCopy}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <div className="ai-ptext ai-mono">{text}</div>
    </div>
  );
}

export default function AiInfluencerGuide() {
  const [toast, setToast] = useState(false);

  const showToast = useCallback(() => {
    setToast(true);
    setTimeout(() => setToast(false), 1500);
  }, []);

  return (
    <div
      className="ai-influencer"
    >
      <div className="ai-wrap">
        <Link href="/guide" className="ai-back">
          <ArrowLeft className="h-4 w-4" aria-hidden />
          All guides
        </Link>
      </div>

      <div className="ai-hero">
        <div className="ai-wrap">
          <div className="ai-badge">
            30 Days of AI Content &nbsp;&middot;&nbsp; Part 1
          </div>
          <h1 className="ai-serif">
            Build Your Own
            <br />
            <em>AI Influencer</em>
          </h1>
          <p className="ai-sub">
            The exact workflow and prompts to create a consistent AI character,
            place her in any scene, and bring her to life on video. Copy, paste,
            post.
          </p>
          <div className="ai-by">
            A guide by <b>Mercy Thaddeus</b> &nbsp;&middot;&nbsp; @mercythaddeus_
          </div>
        </div>
      </div>

      <div className="ai-wrap">
        <section>
          <div className="ai-kick">What you&apos;ll build</div>
          <h2 className="ai-serif">One face. A hundred posts.</h2>
          <p className="ai-lead">
            You&apos;re going to create a single, believable AI character, lock
            her identity so she never drifts, and then drop her into endless
            lifestyle scenes that look real enough to stop the scroll.
            Everything runs on free tools and copy-paste prompts. Here is the
            whole flow.
          </p>
          <div className="ai-steps">
            {WORKFLOW_STEPS.map((step) => (
              <div key={step.title} className="ai-step">
                <div>
                  <h4>{step.title}</h4>
                  <p>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="ai-kick">Step 1 prompt</div>
          <h2 className="ai-serif">The foundation face</h2>
          <p className="ai-lead">
            Paste this into ChatGPT along with a Pinterest image of the look you
            want.
          </p>
          <PromptBlock
            label={PROMPT_FOUNDATION_FACE.label}
            text={PROMPT_FOUNDATION_FACE.text}
            onCopy={showToast}
          />
        </section>

        <section>
          <div className="ai-callout">
            <div className="ai-kick">The consistency secret</div>
            <h4 className="ai-serif">Reusing the face is not enough.</h4>
            <p>
              Uploading the same reference image alone still lets her slowly
              drift into a different person. Save the written description
              ChatGPT gives you, that&apos;s your character sheet, and paste it
              into every single generation alongside the reference image. The
              picture plus the locked words together is what keeps her identical
              from post one.
            </p>
          </div>
        </section>

        <section>
          <div className="ai-kick">Step 3 prompt</div>
          <h2 className="ai-serif">Drop her into any scene</h2>
          <p className="ai-lead">
            Paste this with a Pinterest image of a scene. It describes everything
            but the face, and makes her blend in naturally, makeup for a dinner,
            sweat for the gym, so nothing looks pasted in.
          </p>
          <PromptBlock
            label={PROMPT_SCENE.label}
            text={PROMPT_SCENE.text}
            onCopy={showToast}
          />
        </section>

        <section>
          <div className="ai-kick">Step 4 prompt</div>
          <h2 className="ai-serif">Make her talk</h2>
          <p className="ai-lead">
            Drop a finished image into Veo 3 inside Flow. Veo generates the voice
            and lip-syncs the line. Swap the dialogue for anything you want.
          </p>
          <PromptBlock
            label={PROMPT_VIDEO.label}
            text={PROMPT_VIDEO.text}
            onCopy={showToast}
          />
        </section>

        <section>
          <div className="ai-kick">The library</div>
          <h2 className="ai-serif">22 ready-to-paste scene prompts</h2>
          <p className="ai-lead">
            Each one already says &quot;the woman in the reference image,&quot;
            so you just upload your model in Flow and paste. Grouped by vibe so
            you can fill a whole content calendar.
          </p>
          {SCENE_GROUPS.map((group) => (
            <div key={group.group}>
              <h3 className="ai-grp ai-serif">{group.group}</h3>
              {group.scenes.map((scene) => (
                <PromptBlock
                  key={scene.num}
                  label=""
                  sceneNum={scene.num}
                  sceneTitle={scene.title}
                  text={scene.text}
                  onCopy={showToast}
                />
              ))}
            </div>
          ))}
        </section>

        <section>
          <div className="ai-kick">Pro tips</div>
          <h2 className="ai-serif">Keep it real, keep it her</h2>
          <ul className="ai-tips">
            {PRO_TIPS.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </section>

        <footer>
          30 Days of AI Content &middot; Part 1 &middot; by Mercy Thaddeus
        </footer>
      </div>

      <div className={`ai-toast${toast ? " ai-show" : ""}`} aria-live="polite">
        Copied to clipboard
      </div>
    </div>
  );
}
