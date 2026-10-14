"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

import { trackEvent } from "@/lib/analytics";
import {
  ALL_PROMPTS,
  HOW_TO_USE,
  PHOTO_EDITS,
  UNIVERSITY_URL,
  type PhotoEdit,
} from "./data";
import "../chatgpt-study-codes/chatgpt-study-codes.css";
import "./edit-photos-with-chatgpt.css";

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
    trackEvent("guide_copy", {
      guide: "edit_photos_with_chatgpt",
      block: label,
    });
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

function EditCard({ edit }: { edit: PhotoEdit }) {
  return (
    <section className="scs-section" id={edit.id}>
      <div className="scs-shortcut-head scs-shortcut-head--loose">
        <span className="scs-shortcut-num">{edit.num}</span>
        <h2 className="scs-shortcut-title">{edit.title}</h2>
      </div>
      <p>{edit.use}</p>
      <div className="ep-pair" role="group" aria-label={edit.alt}>
        <figure className="ep-shot">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={edit.before}
            alt={`Before: ${edit.title}`}
            width={720}
            height={900}
            loading="lazy"
          />
          <figcaption className="ep-tag">Before</figcaption>
        </figure>
        <figure className="ep-shot">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={edit.after}
            alt={`After: ${edit.title}`}
            width={720}
            height={900}
            loading="lazy"
          />
          <figcaption className="ep-tag ep-tag--after">After</figcaption>
        </figure>
      </div>
      <p className="scs-try">Copy this prompt:</p>
      <CopyBlock label={`Prompt · ${edit.title}`} text={edit.prompt} />
      <div className="scs-note">
        <p>
          <strong>Tip:</strong> {edit.tip}
        </p>
      </div>
    </section>
  );
}

export default function EditPhotosWithChatgptGuide() {
  return (
    <div className="scs-guide ep-guide">
      <Link href="/guide" className="scs-back">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        All guides
      </Link>

      <header className="scs-hero">
        <p className="scs-eyebrow">ChatGPT · Photo editing · 10 prompts</p>
        <h1>How to edit your photos with ChatGPT like a pro</h1>
        <p className="scs-lede">
          Ten copy-and-paste prompts that take any picture from a 10 to a 100.
          Fix blurry shots and bad lighting, get a professional headshot, put
          yourself in Paris, or bring an old family photo back to life.
        </p>
        <p>
          Every after photo on this page came from running the prompt shown
          with it, using the same image model ChatGPT uses. No Photoshop, no
          editing app and no design skills.
        </p>
        <nav className="scs-toc" aria-label="Prompts">
          <a href="#how">How to use these</a>
          {PHOTO_EDITS.map((edit) => (
            <a key={edit.id} href={`#${edit.id}`}>
              {edit.num} {edit.title}
            </a>
          ))}
        </nav>
      </header>

      <section className="scs-section" id="how">
        <h2>How to use these</h2>
        <ol className="ep-steps">
          {HOW_TO_USE.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      {PHOTO_EDITS.map((edit) => (
        <EditCard key={edit.id} edit={edit} />
      ))}

      <section className="scs-section" id="all">
        <h2>Copy all 10 prompts</h2>
        <p>
          Save these in your notes so every edit is one paste away the next
          time you take a photo you want to fix.
        </p>
        <CopyBlock label="All 10 photo editing prompts" text={ALL_PROMPTS} />
      </section>

      <section className="scs-section" id="attention-hq">
        <h2>Want to go further than prompts?</h2>
        <div className="scs-cta-box">
          <p>
            <strong>Join Attention HQ.</strong> It&apos;s where AI University
            lives, a structured path for people starting from zero, with
            click-by-click lessons and a community building alongside you.
          </p>
          <p>
            You go from editing photos with ChatGPT to creating AI videos,
            building websites and automating your work. Every program is
            practical, and every one ends with something you&apos;ve made.
          </p>
          <a
            className="scs-cta-btn"
            href={UNIVERSITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent("guide_outbound_click", {
                destination: "ai_university",
                source: "edit_photos_with_chatgpt",
              })
            }
          >
            Join Attention HQ →
          </a>
        </div>
      </section>
    </div>
  );
}
