"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

import { trackEvent } from "@/lib/analytics";
import {
  AI_JOBS,
  ALL_PROMPTS,
  PAY_CHECKED_ON,
  SOURCES,
  SWITCH_STEPS,
  UNIVERSITY_URL,
  type AiJob,
  type SourceLink,
} from "./data";
import "../chatgpt-study-codes/chatgpt-study-codes.css";
import "./ai-jobs-youre-already-qualified-for.css";

const GUIDE_KEY = "ai_jobs_youre_already_qualified_for";

function toKey(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_|_$/g, "");
}

function linkedInSearch(term: string) {
  return `https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(term)}`;
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
    trackEvent("guide_copy", {
      guide: GUIDE_KEY,
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

function SourceLine({ sources }: { sources: SourceLink[] }) {
  return (
    <p className="ajq-source">
      Source:{" "}
      {sources.map((source, i) => (
        <span key={source.href}>
          {i > 0 && " and "}
          <a href={source.href} target="_blank" rel="noopener noreferrer">
            {source.label}
          </a>
        </span>
      ))}
    </p>
  );
}

function JobCard({ job }: { job: AiJob }) {
  return (
    <section className="scs-section" id={job.id}>
      <div className="scs-shortcut-head scs-shortcut-head--loose">
        <span className="scs-shortcut-num">{job.num}</span>
        <h2 className="scs-shortcut-title">{job.title}</h2>
      </div>

      <div className="ajq-for">
        <span className="ajq-for-label">If you&apos;ve worked as</span>
        <ul className="ajq-tags">
          {job.backgrounds.map((bg) => (
            <li key={bg}>{bg}</li>
          ))}
        </ul>
      </div>

      <h3>What you&apos;d do</h3>
      <p>{job.whatYouDo}</p>

      <h3>Why you already qualify</h3>
      <p>{job.whyYouQualify}</p>
      {job.sources && <SourceLine sources={job.sources} />}

      <div className="ajq-pay">
        <span className="ajq-pay-label">US pay · checked {PAY_CHECKED_ON}</span>
        <p>{job.pay.text}</p>
        <SourceLine sources={job.pay.sources} />
      </div>

      <h3>Where to find these jobs</h3>
      <ul className="ajq-places">
        {job.places.map((place) => (
          <li key={place.name}>
            <strong>
              {place.href ? (
                <a
                  href={place.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackEvent("guide_outbound_click", {
                      destination: toKey(place.name),
                      source: GUIDE_KEY,
                    })
                  }
                >
                  {place.name}
                </a>
              ) : (
                place.name
              )}
            </strong>
            <span>{place.detail}</span>
          </li>
        ))}
      </ul>
      {job.placesNote && <p className="ajq-small">{job.placesNote}</p>}

      <p className="ajq-search-label">
        Search LinkedIn and Indeed for these. Tap one to open it on LinkedIn.
      </p>
      <ul className="ajq-terms">
        {job.searchTerms.map((term) => (
          <li key={term}>
            <a
              href={linkedInSearch(term)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackEvent("guide_outbound_click", {
                  destination: "linkedin_jobs",
                  source: GUIDE_KEY,
                })
              }
            >
              {term}
            </a>
          </li>
        ))}
      </ul>

      <h3>What to learn first</h3>
      <ul className="scs-check">
        {job.learnFirst.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {job.related && (
        <p className="ajq-related">
          <Link href={job.related.href}>{job.related.label} →</Link>
        </p>
      )}

      <h3>Build your first sample</h3>
      <p>{job.sampleIntro}</p>
      <p className="scs-try">Copy this into ChatGPT or Claude:</p>
      <CopyBlock label={`Prompt · ${job.title}`} text={job.prompt} />
      <div className="scs-note">
        <p>
          <strong>Tip:</strong> {job.tip}
        </p>
      </div>
    </section>
  );
}

export default function AiJobsQualifiedGuide() {
  return (
    <div className="scs-guide ajq-guide">
      <Link href="/guide" className="scs-back">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        All guides
      </Link>

      <header className="scs-hero">
        <p className="scs-eyebrow">Careers · AI jobs · 7 roles</p>
        <h1>7 AI jobs you&apos;re probably already qualified for</h1>
        <p className="scs-lede">
          The number of different US job titles with &ldquo;AI&rdquo; in them
          has more than tripled since 2022, from 264 to 822, and 63% of those
          titles are outside traditional tech. Most of these roles ask for
          skills you already use at work: writing, teaching, helping
          customers, organising and running projects.
        </p>
        <SourceLine sources={[SOURCES.hiringLab]} />
        <p>
          Below are seven of them. For each one you&apos;ll see who it suits,
          what the work looks like, what it pays, where to find openings, what
          to learn first, and a prompt you can paste into ChatGPT or Claude to
          make your first portfolio sample today.
        </p>
        <p className="ajq-small">
          Pay on this page is US pay from Mercor, Glassdoor and ZipRecruiter,
          checked {PAY_CHECKED_ON}. Remote roles and pay in your country can be
          different, so check each listing.
        </p>
        <nav className="scs-toc" aria-label="Sections">
          <a href="#match">Find your match</a>
          {AI_JOBS.map((job) => (
            <a key={job.id} href={`#${job.id}`}>
              {job.num} {job.title}
            </a>
          ))}
          <a href="#switch">Make the switch</a>
          <a href="#all">All 7 prompts</a>
        </nav>
      </header>

      <section className="scs-section" id="match">
        <h2>Find your match</h2>
        <p>
          Find the work you&apos;ve done before, then jump straight to the job
          it leads to.
        </p>
        <div className="scs-map">
          {AI_JOBS.map((job) => (
            <a key={job.id} className="scs-map-item" href={`#${job.id}`}>
              <span className="scs-map-n">{job.num}</span>
              <div>
                <strong>{job.title}</strong>
                <span>If you&apos;ve worked as: {job.backgrounds.join(", ")}</span>
                <span className="ajq-map-pay">US pay: {job.pay.short}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {AI_JOBS.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}

      <section className="scs-section" id="switch">
        <h2>How to make the switch</h2>
        <ol className="scs-steps">
          {SWITCH_STEPS.map((step) => (
            <li key={step.title}>
              <strong>{step.title}</strong>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
        <div className="scs-note">
          <p>
            <strong>Ready to apply?</strong> Use ChatGPT to find matching
            roles and tailor your CV with this guide:{" "}
            <Link href="/guide/chatgpt-indeed-job-search">
              Run your job search with ChatGPT and the Indeed plugin
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="scs-section" id="all">
        <h2>Copy all 7 prompts</h2>
        <p>
          Save these in your notes. Even if you only go after one job, the
          other prompts are useful practice for the AI skills every one of
          these roles uses.
        </p>
        <CopyBlock label="All 7 portfolio sample prompts" text={ALL_PROMPTS} />
      </section>

      <section className="scs-section" id="attention-hq">
        <h2>Want a structured path into AI work?</h2>
        <div className="scs-cta-box">
          <p>
            <strong>Join Attention HQ.</strong> It&apos;s where AI University
            lives, with structured programs for people starting from zero,
            click-by-click lessons and a community building alongside you.
          </p>
          <p>
            Every program is practical, and every one ends with something
            you&apos;ve made. That&apos;s exactly what you need to show an
            employer or a client.
          </p>
          <a
            className="scs-cta-btn"
            href={UNIVERSITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent("guide_outbound_click", {
                destination: "ai_university",
                source: GUIDE_KEY,
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
