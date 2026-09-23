"use client";

import { Fragment, useCallback, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

import {
  HOW_TO_STEPS,
  NEED_ITEMS,
  PUBLISH_CHECKS,
  REPOS,
  REUSABLE_PROMPT,
  type RepoGuide,
} from "./data";
import "./five-github-repos-ai-websites.css";

function highlightBrackets(text: string) {
  return text.split(/(\[[^\]]+\])/g).map((part, i) =>
    part.startsWith("[") && part.endsWith("]") ? (
      <span key={i} className="fgh-fill">
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
    <div className="fgh-block">
      <div className="fgh-block-head">
        <span className="fgh-block-label">{label}</span>
        <button
          type="button"
          className={`fgh-copy${copied ? " fgh-done" : ""}`}
          onClick={onCopy}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre>{highlightBrackets(text)}</pre>
    </div>
  );
}

function RepoMedia({ repo }: { repo: RepoGuide }) {
  const { media } = repo;
  if (media.kind === "image") {
    return (
      <>
        <figure className="fgh-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={media.src} alt={media.alt} loading="lazy" />
        </figure>
        <p className="fgh-caption">{media.caption}</p>
      </>
    );
  }

  return (
    <>
      <figure className="fgh-media">
        <video
          src={media.src}
          poster={media.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={media.alt}
        />
      </figure>
      <p className="fgh-caption">{media.caption}</p>
    </>
  );
}

function RepoCard({ repo }: { repo: RepoGuide }) {
  return (
    <section className="fgh-section" id={repo.id}>
      <div className="fgh-repo-head">
        <span className="fgh-num">{repo.num}</span>
        <h2>{repo.title}</h2>
      </div>

      <RepoMedia repo={repo} />

      {repo.blurb.map((para) => (
        <p key={para}>{para}</p>
      ))}

      <div className="fgh-links">
        <a
          className="fgh-link"
          href={repo.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {repo.repoLabel}
        </a>
        {repo.secondaryUrl && repo.secondaryLabel ? (
          <a
            className="fgh-link"
            href={repo.secondaryUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {repo.secondaryLabel}
          </a>
        ) : null}
      </div>

      {repo.setupBlocks ? (
        <>
          <h3>Set it up</h3>
          <p>
            Open the repo and give its installation instructions to your coding
            agent. Run these in the relevant coding tool or terminal. The
            workflow also needs media-generation services and local processing
            tools, so have your agent check the requirements first.
          </p>
          {repo.setupBlocks.map((block) => (
            <CopyBlock
              key={block.label}
              label={block.label}
              text={block.code}
            />
          ))}
        </>
      ) : null}

      <h3>Copy this prompt</h3>
      <CopyBlock label={repo.promptLabel} text={repo.prompt} />

      {repo.note ? <p className="fgh-note">{repo.note}</p> : null}
    </section>
  );
}

export default function FiveGithubReposAiWebsitesGuide() {
  return (
    <div className="fgh-guide">
      <Link href="/guide" className="fgh-back">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        All guides
      </Link>

      <header className="fgh-hero">
        <p className="fgh-eyebrow">Repos guide · GitHub for AI websites</p>
        <h1>5 GitHub repos to make your AI website look better</h1>
        <p className="fgh-lede">
          If your AI websites keep looking the same, try giving the AI better
          materials to work with. These five repos help you add 3D objects,
          Apple-style glass, cinematic scrolling, animated logos and moving
          backgrounds.
        </p>
        <nav className="fgh-toc" aria-label="Repos list">
          {REPOS.map((repo) => (
            <a key={repo.id} href={`#${repo.id}`}>
              {repo.num} {repo.title}
            </a>
          ))}
        </nav>
      </header>

      <section className="fgh-section">
        <h2>What you need</h2>
        <ul className="fgh-list">
          {NEED_ITEMS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>
          A GitHub repo is a folder containing a project&apos;s code and
          instructions. You can give that repo to your AI coding tool and ask it
          to use the code in your website.
        </p>
        <p>
          Start with one effect. You don&apos;t need all five on the same page.
        </p>
      </section>

      {REPOS.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}

      <section className="fgh-section">
        <h2>How to add an effect to your website</h2>
        <ol className="fgh-olist">
          {HOW_TO_STEPS.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <p>
          If the AI cannot open the GitHub link, copy the relevant README
          instructions into the conversation or provide the files it needs.
        </p>
        <p>
          Be specific about where you want the effect. &quot;Add this glass
          effect to my navigation bar&quot; gives the AI more direction than
          &quot;make my website look expensive.&quot;
        </p>
      </section>

      <section className="fgh-section">
        <h2>A reusable prompt for any repo</h2>
        <CopyBlock label="Reusable prompt" text={REUSABLE_PROMPT} />
      </section>

      <section className="fgh-section">
        <h2>Before you publish</h2>
        <ul className="fgh-list">
          {PUBLISH_CHECKS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
