"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

import { trackEvent } from "@/lib/analytics";
import {
  ALL_LINKS,
  HOW_TO_STEPS,
  MORE_REPOS,
  REPOS,
  SETUP_PROMPT,
  STARS_AS_OF,
  UNIVERSITY_URL,
  type MoreRepo,
  type Repo,
  type RepoImage,
  type RepoLink,
} from "./data";
import "../chatgpt-study-codes/chatgpt-study-codes.css";
import "./github-repos-of-the-week-1.css";

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
      guide: "github_repos_of_the_week_1",
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

function Shot({ image }: { image: RepoImage }) {
  return (
    <figure className="grw-shot">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading="lazy"
      />
      <figcaption>{image.caption}</figcaption>
    </figure>
  );
}

function RepoLinks({ id, links }: { id: string; links: RepoLink[] }) {
  return (
    <div className="grw-links">
      {links.map((link, i) => (
        <a
          key={link.href}
          className={`grw-link${i === 0 ? " grw-link--main" : ""}`}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackEvent("guide_outbound_click", {
              destination: id,
              source: "github_repos_of_the_week_1",
              link: link.label,
            })
          }
        >
          {link.label} →
        </a>
      ))}
    </div>
  );
}

function RepoCard({ repo }: { repo: Repo }) {
  return (
    <section className="scs-section" id={repo.id}>
      <div className="scs-shortcut-head scs-shortcut-head--loose">
        <span className="scs-shortcut-num">{repo.num}</span>
        <h2 className="scs-shortcut-title">{repo.name}</h2>
      </div>
      <p className="grw-tagline">{repo.tagline}</p>
      <p className="grw-slug">{repo.slug}</p>

      <Shot image={repo.image} />

      {repo.what.map((para) => (
        <p key={para}>{para}</p>
      ))}

      <div className="grw-try">
        <span className="grw-try-label">Try this weekend</span>
        <p>{repo.tryThis}</p>
      </div>

      <dl className="grw-facts">
        <div>
          <dt>What you need</dt>
          <dd>{repo.need}</dd>
        </div>
        <div>
          <dt>Free?</dt>
          <dd>{repo.free}</dd>
        </div>
        <div>
          <dt>Works with</dt>
          <dd>{repo.worksWith}</dd>
        </div>
        <div>
          <dt>Stars</dt>
          <dd>
            {repo.stars} as of {STARS_AS_OF}
          </dd>
        </div>
        <div>
          <dt>Why it&apos;s here</dt>
          <dd>{repo.buzz}</dd>
        </div>
      </dl>

      {repo.copies?.length ? (
        <>
          <p className="scs-try">Copy this:</p>
          {repo.copies.map((copy) => (
            <CopyBlock key={copy.label} label={copy.label} text={copy.text} />
          ))}
        </>
      ) : null}

      {repo.caveat ? (
        <div className="scs-note">
          <p>
            <strong>Good to know:</strong> {repo.caveat}
          </p>
        </div>
      ) : null}

      <RepoLinks id={repo.id} links={repo.links} />
    </section>
  );
}

function MoreRepoCard({ repo }: { repo: MoreRepo }) {
  return (
    <article className="grw-mini" id={repo.id}>
      <div className="grw-mini-head">
        <span className="grw-mini-num">{repo.num}</span>
        <h3>{repo.name}</h3>
      </div>
      <p className="grw-mini-tagline">{repo.tagline}</p>
      <p className="grw-meta">
        {repo.slug} · {repo.free} · {repo.stars} stars
      </p>

      <Shot image={repo.image} />

      <p>{repo.summary}</p>
      <p className="grw-need">
        <strong>You need:</strong> {repo.need}
      </p>

      {repo.copies.map((copy) => (
        <CopyBlock key={copy.label} label={copy.label} text={copy.text} />
      ))}

      {repo.caveat ? (
        <p className="grw-mini-note">
          <strong>Good to know:</strong> {repo.caveat}
        </p>
      ) : null}

      <RepoLinks id={repo.id} links={repo.links} />
    </article>
  );
}

export default function GithubReposWeek1Guide() {
  return (
    <div className="scs-guide grw-guide">
      <Link href="/guide" className="scs-back">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        All guides
      </Link>

      <header className="scs-hero">
        <p className="scs-eyebrow">GitHub repos of the week · Week 1</p>
        <h1>3 GitHub repos you should save this week</h1>
        <p className="scs-lede">
          Welcome to week 1 of my new Saturday series. Every Saturday I share
          the GitHub repos worth saving, picked for people who don&apos;t code.
        </p>
        <p>
          GitHub is one of the most exciting places to watch in AI right now.
          New AI tools often show up there first, before anyone turns them into
          a polished app. Most of them are free and open source, so anyone can
          download them, use them and build on them.
        </p>
        <p>
          You don&apos;t need to be a developer to use them either. With Claude
          Code or ChatGPT beside you, you can paste a link, ask for help and
          have a new tool running on your computer the same afternoon.
        </p>
        <p>
          This week&apos;s top three: a free Photoshop alternative, a free voice
          studio that runs on your computer, and a tool that lets Claude Code
          make videos. After those, I&apos;ve added four more worth a look if
          you want extra to try this weekend.
        </p>
        <nav className="scs-toc" aria-label="Repos">
          <a href="#how">How to use a repo</a>
          {REPOS.map((repo) => (
            <a key={repo.id} href={`#${repo.id}`}>
              {repo.num} {repo.name}
            </a>
          ))}
          <a href="#more">4 more</a>
          <a href="#all">All links</a>
        </nav>
      </header>

      <section className="scs-section" id="how">
        <h2>How to use a GitHub repo if you&apos;ve never done it</h2>
        <p>
          A repo (short for repository) is a project&apos;s home on GitHub. It
          holds the files, the instructions and the updates. You don&apos;t
          need a GitHub account to download most of them.
        </p>
        <ol className="grw-steps">
          {HOW_TO_STEPS.map((step) => (
            <li key={step.title}>
              <strong>{step.title}</strong>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
        <p>
          Want Claude Code to do the setup? Paste this, with the repo link in
          place of the brackets:
        </p>
        <CopyBlock label="Setup prompt for any repo" text={SETUP_PROMPT} />
        <div className="scs-note">
          <p>
            <strong>What do the stars mean?</strong> Stars are GitHub&apos;s
            version of a like or a bookmark. A high count means a lot of people
            found the tool useful. The numbers on this page are from{" "}
            {STARS_AS_OF}, and they keep climbing.
          </p>
        </div>
      </section>

      {REPOS.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}

      <section className="scs-section grw-more" id="more">
        <h2>4 more worth a look this week</h2>
        <p>
          These didn&apos;t make the top three, but each one is worth saving if
          it fits what you make. Shorter notes here, with the install steps and
          links so you can try any of them.
        </p>
        {MORE_REPOS.map((repo) => (
          <MoreRepoCard key={repo.id} repo={repo} />
        ))}
      </section>

      <section className="scs-section" id="all">
        <h2>Copy this week&apos;s links</h2>
        <p>
          Save these in your notes, the top three first and then the four
          extras, so they&apos;re one paste away when you sit down to try them.
          New repos every Saturday.
        </p>
        <CopyBlock label="This week's GitHub repos" text={ALL_LINKS} />
      </section>

      <section className="scs-section" id="attention-hq">
        <h2>Want to build with tools like these?</h2>
        <div className="scs-cta-box">
          <p>
            <strong>Join Attention HQ.</strong> It&apos;s where AI University
            lives, a structured path for people starting from zero, with
            click-by-click lessons and a community building alongside you.
          </p>
          <p>
            AI University teaches you to build with tools like the ones on this
            page, step by step, from zero. Every program is practical, and every
            one ends with something you&apos;ve made.
          </p>
          <a
            className="scs-cta-btn"
            href={UNIVERSITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent("guide_outbound_click", {
                destination: "ai_university",
                source: "github_repos_of_the_week_1",
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
