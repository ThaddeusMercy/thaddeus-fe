"use client";

import { Fragment, useCallback, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

import { trackEvent } from "@/lib/analytics";
import {
  ALL_COMMANDS,
  COMBOS,
  COMMANDS,
  GROUPS,
  UNIVERSITY_URL,
  type PhotoCommand,
  type Shot,
} from "./data";
import "./chatgpt-photo-commands.css";

const GUIDE_ID = "chatgpt_photo_commands";

function CopyBlock({
  label,
  text,
  variant,
  track,
}: {
  label: string;
  text: string;
  variant?: "command";
  /** Name sent to analytics when it differs from the visible label */
  track?: string;
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
    trackEvent("guide_copy", {
      guide: GUIDE_ID,
      block: track ?? label,
    });
    setTimeout(() => setCopied(false), 1600);
  }, [label, text, track]);

  return (
    <div className={`cpc-block${variant ? ` cpc-block--${variant}` : ""}`}>
      <div className="cpc-block-head">
        <span className="cpc-block-label">{label}</span>
        <button
          type="button"
          className={`cpc-copy${copied ? " cpc-done" : ""}`}
          onClick={onCopy}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre>{text}</pre>
    </div>
  );
}

function Photo({ shot, tag, after }: { shot: Shot; tag: string; after?: boolean }) {
  return (
    <figure className="cpc-shot">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={shot.src}
        alt={shot.alt}
        width={shot.width}
        height={shot.height}
        loading="lazy"
        decoding="async"
      />
      <figcaption className={`cpc-tag${after ? " cpc-tag--after" : ""}`}>
        {tag}
      </figcaption>
    </figure>
  );
}

function CommandCard({ item }: { item: PhotoCommand }) {
  const isTransfer = item.group === "transfers";
  const inputs = item.inputs ?? [];

  return (
    <article className="cpc-card" id={item.id} aria-label={item.code}>
      <p className="cpc-num">{item.num}</p>
      <CopyBlock
        label="Command"
        text={item.code}
        variant="command"
        track={`Command · ${item.code}`}
      />
      <p className="cpc-does">{item.does}</p>

      {item.result ? (
        <div
          className={`cpc-pair${isTransfer ? " cpc-pair--transfer" : ""}`}
          role="group"
          aria-label={`Before and after for ${item.code}`}
        >
          <div className="cpc-inputs">
            {inputs.map((shot, i) => (
              <Photo
                key={shot.src}
                shot={shot}
                tag={isTransfer ? `Photo ${i + 1}` : "Before"}
              />
            ))}
          </div>
          <Photo shot={item.result} tag="After" after />
        </div>
      ) : null}

      {item.stacked ? (
        <p className="cpc-stacked">
          Shown stacked: <code>{item.stacked}</code>
        </p>
      ) : null}

      {item.note ? <p className="cpc-small">{item.note}</p> : null}

      {item.seeAlso ? (
        <p className="cpc-see">
          {item.seeAlso.text}{" "}
          {item.seeAlso.links.map((link, i) => (
            <Fragment key={link.id}>
              {i > 0 ? " and " : null}
              <a href={`#${link.id}`}>
                <code>{link.code}</code>
              </a>
            </Fragment>
          ))}
        </p>
      ) : null}

      <CopyBlock
        label="Full prompt"
        text={item.prompt}
        track={`Full prompt · ${item.code}`}
      />
    </article>
  );
}

export default function ChatGptPhotoCommandsGuide() {
  const total = COMMANDS.length;

  return (
    <div className="cpc-guide">
      <Link href="/guide" className="cpc-back">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        All guides
      </Link>

      <header className="cpc-hero">
        <p className="cpc-eyebrow">
          Prompts guide · ChatGPT Images · {total} commands
        </p>
        <h1>{total} ChatGPT photo commands</h1>
        <p className="cpc-lede">
          Turn one selfie into a full photoshoot with one short command.
        </p>
        <p>
          New places, new camera angles, three of you in one shot, or someone
          else&apos;s outfit, pose or makeup on you. Every before and after on
          this page comes from the videos: the photo that went in and what
          ChatGPT sent back.
        </p>
        <nav className="cpc-toc" aria-label="Sections">
          <a href="#how">How to use them</a>
          {GROUPS.map((group) => (
            <a key={group.id} href={`#${group.id}`}>
              {group.title}
            </a>
          ))}
          <a href="#all">Copy all</a>
        </nav>
      </header>

      <section className="cpc-section" id="how">
        <h2>How to use them</h2>
        <ol className="cpc-steps">
          <li>Open ChatGPT and attach a clear photo of yourself.</li>
          <li>Type one command, like /beachsunset, and send it.</li>
          <li>
            For transfer commands, attach two photos in order. Photo 1 is the
            one you copy from. Photo 2 is you.
          </li>
        </ol>
        <p>
          You can stack commands. These three combos are straight from the
          videos:
        </p>
        <div className="cpc-combos">
          {COMBOS.map((combo) => (
            <CopyBlock key={combo} label="Combo" text={combo} />
          ))}
        </div>
        <div className="cpc-note">
          <p>
            <strong>A quick, honest note.</strong>{" "}
            They&apos;re shorthand prompts, not built-in ChatGPT features.
            ChatGPT reads the command as a short instruction, so results vary
            from photo to photo.
          </p>
          <p>
            If it misreads one, paste the full prompt under the command
            instead. If your face changes, reply &ldquo;keep my face exactly
            the same as my photo&rdquo; and it will try again.
          </p>
        </div>
      </section>

      {GROUPS.map((group) => {
        const items = COMMANDS.filter((c) => c.group === group.id);
        return (
          <section className="cpc-section" id={group.id} key={group.id}>
            <h2>
              {group.title} <span className="cpc-count">{items.length}</span>
            </h2>
            <p>{group.intro}</p>
            {items.map((item) => (
              <CommandCard key={item.id} item={item} />
            ))}
          </section>
        );
      })}

      <section className="cpc-section" id="all">
        <h2>Copy all {total} commands</h2>
        <p>
          Save these in your notes so the next photoshoot is one paste away.
        </p>
        <CopyBlock label={`All ${total} photo commands`} text={ALL_COMMANDS} />
      </section>

      <section className="cpc-section" id="attention-hq">
        <h2>Want to go further than commands?</h2>
        <div className="cpc-cta-box">
          <p>
            <strong>Join Attention HQ.</strong> It&apos;s where AI University
            lives, a structured path for people starting from zero, with
            click-by-click lessons and a community building alongside you.
          </p>
          <p>
            You go from photo commands in ChatGPT to creating AI videos,
            building websites and automating your work. Every program is
            practical, and every one ends with something you&apos;ve made.
          </p>
          <a
            className="cpc-cta-btn"
            href={UNIVERSITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent("guide_outbound_click", {
                destination: "ai_university",
                source: GUIDE_ID,
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
