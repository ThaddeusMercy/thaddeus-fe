"use client";

import { Fragment, useCallback, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

import {
  AUDIO_WHEN,
  CAPABILITIES,
  CHECKLIST,
  DIGITAL_TWIN_STEPS,
  FAQS,
  LOOK_PROMPT,
  LOOK_STEPS,
  MOTION_PROMPT,
  NEEDS,
  OFFICIAL_LINKS,
  PROBLEMS,
  RECORDING_TIPS,
  SCENE_EXAMPLES,
  SCRIPT_WHEN,
  TEST_STEPS,
  VIDEO_STEPS,
} from "./data";
import "./clone-yourself-heygen.css";

function highlightBrackets(text: string) {
  return text.split(/(\[[^\]]+\])/g).map((part, i) =>
    part.startsWith("[") && part.endsWith("]") ? (
      <span key={i} className="cyh-fill">
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
    <div className="cyh-block">
      <div className="cyh-block-head">
        <span className="cyh-block-label">{label}</span>
        <button
          type="button"
          className={`cyh-copy${copied ? " cyh-done" : ""}`}
          onClick={onCopy}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre>{highlightBrackets(text)}</pre>
    </div>
  );
}

export default function CloneYourselfHeygenGuide() {
  return (
    <div className="cyh-guide">
      <Link href="/guide" className="cyh-back">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        All guides
      </Link>

      <header className="cyh-hero">
        <p className="cyh-eyebrow">Setup guide · HeyGen Avatar V</p>
        <h1>Clone yourself with HeyGen and create videos without filming</h1>
        <p className="cyh-lede">
          Create a realistic HeyGen Digital Twin, change its outfit and setting,
          add your script or audio, and make videos without filming every time.
        </p>
      </header>

      <section className="cyh-section">
        <p>
          The person speaking in an AI avatar video can look and sound like you,
          even though the final video was not recorded in front of a camera.
        </p>
        <p>
          HeyGen calls this a Digital Twin. You create it from a short recording
          of yourself and a separate consent video. After the avatar is ready,
          you can place it in new settings, change the outfit, paste a script or
          upload audio, and create more videos without recording every one from
          scratch.
        </p>
        <p>This guide shows you how to set it up with HeyGen Avatar V.</p>
      </section>

      <section className="cyh-section">
        <h2>What this setup can do</h2>
        <p>You can use a HeyGen Digital Twin to:</p>
        <ul className="cyh-check">
          {CAPABILITIES.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="cyh-note">
          <p>
            Avatar Looks can change the background, outfit, pose, stance, and
            camera angle while keeping the same avatar identity. HeyGen currently
            allows up to 500 stored Looks for an avatar slot.
          </p>
          <p>
            The avatar is still AI-created. Review every result before publishing
            it.
          </p>
        </div>
      </section>

      <section className="cyh-section">
        <h2>What you need</h2>
        <ul className="cyh-check">
          {NEEDS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="cyh-section">
        <h2>Official links</h2>
        <ul className="cyh-links">
          {OFFICIAL_LINKS.map((link) => (
            <li key={link.href}>
              {link.label}:{" "}
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.href}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="cyh-section">
        <h2>Step 1: Create your Digital Twin</h2>
        <ol className="cyh-steps">
          {DIGITAL_TWIN_STEPS.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <div className="cyh-note">
          <p>
            The person in the avatar footage must also be the person completing
            the consent step. HeyGen says the consent clip should use its
            displayed text, have clear sound and lighting, and remain under 30
            seconds.
          </p>
        </div>

        <h3>Recording tips for a better avatar</h3>
        <p>Your first recording affects how the avatar moves and looks later.</p>
        <ul className="cyh-check">
          {RECORDING_TIPS.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
        <p>
          Do not stay completely still. Avatar V learns movement and expression
          from your recording, so use the natural energy you want it to repeat.
        </p>
      </section>

      <section className="cyh-section">
        <h2>Step 2: Create the outfit and setting</h2>
        <p>Once your avatar is ready:</p>
        <ol className="cyh-steps">
          {LOOK_STEPS.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>

        <h3>Copyable prompt for a new avatar Look</h3>
        <CopyBlock label="Avatar Look prompt" text={LOOK_PROMPT} />

        <h3>Example scene descriptions</h3>
        {SCENE_EXAMPLES.map((scene) => (
          <div key={scene.title} className="cyh-example">
            <strong>{scene.title}</strong>
            <p>{scene.body}</p>
          </div>
        ))}
      </section>

      <section className="cyh-section">
        <h2>Step 3: Turn your script or audio into a video</h2>
        <ol className="cyh-steps">
          {VIDEO_STEPS.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <div className="cyh-note">
          <p>
            HeyGen recommends keeping each script section under 2,000 characters.
            AI Studio also lets you upload or record custom audio for individual
            scenes.
          </p>
        </div>

        <h3>Should you paste a script or upload audio?</h3>
        <p>
          <strong>Paste a script when:</strong>
        </p>
        <ul className="cyh-check">
          {SCRIPT_WHEN.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>
          <strong>Upload audio when:</strong>
        </p>
        <ul className="cyh-check">
          {AUDIO_WHEN.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>
          For the most natural delivery, use short sentences, punctuation, and
          pauses. Preview the voice before generating the full scene.
        </p>

        <h3>Copyable motion prompt</h3>
        <CopyBlock label="Motion prompt" text={MOTION_PROMPT} />
        <div className="cyh-note">
          <p>
            Avatar V includes controls for expression, gestures, and gaze.
            Motion prompts do not change the background, lighting, props,
            outfit, location, or camera movement. Those changes belong in the
            Look or another part of the editor.
          </p>
        </div>
      </section>

      <section className="cyh-section">
        <h2>Step 4: Test before creating the full video</h2>
        <p>
          Avatar V and generated Looks use credits. Do not render a long video
          before checking a short sample.
        </p>
        <p>Use this process:</p>
        <ol className="cyh-steps">
          {TEST_STEPS.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <div className="cyh-note">
          <p>
            HeyGen recommends reviewing the script, audio, expressions, motion
            and scene before the final render because regenerating avatar scenes
            uses more credits.
          </p>
        </div>
      </section>

      <section className="cyh-section">
        <h2>Review checklist</h2>
        {CHECKLIST.map((group) => (
          <div key={group.title}>
            <h3>{group.title}</h3>
            <ul className="cyh-check">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="cyh-section">
        <h2>Common problems and fixes</h2>
        {PROBLEMS.map((problem) => (
          <div key={problem.title} className="cyh-problem">
            <h3>{problem.title}</h3>
            <p>{problem.body}</p>
          </div>
        ))}
      </section>

      <section className="cyh-section">
        <h2>Plan and credit limits</h2>
        <p>
          HeyGen does not offer unlimited Avatar V creation. The number of
          videos you can make depends on your plan, available credits, the
          avatar model, the type of Look, and the length of the output. HeyGen
          currently charges Avatar V by generated output length, and generated
          Looks also consume credits.
        </p>
        <p>
          The free plan can be used to test the product, but it has limits.
          Check HeyGen&apos;s current pricing before promising viewers a fixed
          number of videos.
        </p>
        <p>
          This is why the script says you can keep creating without filming
          every time, not that every plan includes unlimited videos.
        </p>
      </section>

      <section className="cyh-section">
        <h2>Responsible use</h2>
        <p>
          Only create a Digital Twin of yourself or another person who has
          clearly agreed to it.
        </p>
        <p>
          Do not use an avatar to impersonate someone, create fake endorsements,
          fabricate events, or make people believe a real person said something
          they did not approve.
        </p>
        <p>
          When an AI avatar could be mistaken for real footage, add a disclosure
          such as:
        </p>
        <CopyBlock
          label="Disclosure line"
          text="This video was created with my AI avatar."
        />
      </section>

      <section className="cyh-section">
        <h2>Frequently asked questions</h2>
        {FAQS.map((faq) => (
          <div key={faq.q} className="cyh-faq">
            <h3>{faq.q}</h3>
            <p>{faq.a}</p>
          </div>
        ))}
      </section>

      <section className="cyh-section">
        <h2>Final note</h2>
        <p>
          An AI avatar removes the need to film every script, but it does not
          remove the need for a good script, clean audio, and a final review.
        </p>
        <p>
          Start with one short video. Get the face, voice, setting, and movement
          right. Save that Look and motion style, then reuse the setup for
          future videos.
        </p>
      </section>
    </div>
  );
}
