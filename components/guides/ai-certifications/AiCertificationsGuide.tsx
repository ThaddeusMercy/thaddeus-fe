import Link from "next/link";

import { BOOTCAMP_URL, COURSES, TIPS } from "./data";
import "./ai-certifications.css";

function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <b key={i}>{part.slice(2, -2)}</b>;
    }
    return <span key={i}>{part}</span>;
  });
}

export default function AiCertificationsGuide() {
  return (
    <div className="ai-cert-guide">
      <div className="ac-wrap">
        <Link href="/guide" className="ac-back">
          ← All guides
        </Link>

        <div className="ac-topbar ac-reveal ac-d1">
          <div className="ac-brand">
            attention<span> factory</span>
          </div>
          <div className="ac-by">Career resource</div>
        </div>

        <header className="ac-hero">
          <h1 className="ac-h1 ac-reveal ac-d2">
            AI certifications you can actually{" "}
            <em>finish this weekend</em>
          </h1>
          <p className="ac-sub ac-reveal ac-d3">
            You do not need a certificate to know your stuff. But in a market
            where recruiters and applicant tracking systems scan fast,{" "}
            <strong>
              one AI certification can be the leverage that gets you seen.
            </strong>{" "}
            Pick one below, finish it, and add it to your LinkedIn and resume.
          </p>
          <div className="ac-meta-row ac-reveal ac-d4">
            <span className="ac-pill">
              <b>5</b> certifications <span className="ac-pill-plus">+ 1 bonus</span>
            </span>
            <span className="ac-pill">Beginner friendly</span>
            <span className="ac-pill">Self-paced</span>
            <span className="ac-pill">
              Shareable to <b>LinkedIn</b>
            </span>
          </div>
          <div className="ac-rule ac-reveal ac-d4" style={{ marginTop: 34 }} />
        </header>

        <section>
          <div className="ac-sec-head ac-reveal">
            <h2>Pick one and start now</h2>
            <span className="ac-count">Listed easiest first</span>
          </div>

          <div className="ac-cards">
            {COURSES.map((course, i) => (
              <article
                key={course.title}
                className={`ac-card${course.bonus ? " ac-card-bonus" : ""} ac-reveal ac-d${Math.min(i + 1, 6)}`}
              >
                <div className="ac-idx">{course.idx}</div>
                <div className="ac-prov">{course.provider}</div>
                <h3>{course.title}</h3>
                <div className="ac-tags">
                  {course.tags.map((t) => (
                    <span
                      key={t.label}
                      className={`ac-tag${t.variant ? ` ${t.variant}` : ""}`}
                    >
                      {t.label}
                    </span>
                  ))}
                </div>
                <p className="ac-desc">{course.description}</p>
                <a
                  className="ac-start"
                  href={course.href}
                  target="_blank"
                  rel="noopener"
                >
                  Start the course <span className="ac-arr">→</span>
                </a>
              </article>
            ))}
          </div>

          <div className="ac-tips ac-reveal">
            <h3>Make it actually count</h3>
            <ol>
              {TIPS.map((tip, i) => (
                <li key={i}>{renderInline(tip.body)}</li>
              ))}
            </ol>
          </div>
        </section>

        <section className="ac-flyer-wrap ac-reveal">
          <a
            className="ac-flyer-link"
            data-edit="bootcamp-link"
            href={BOOTCAMP_URL}
            target="_blank"
            rel="noopener"
            aria-label="Apply for the AI Accelerator Bootcamp"
          >
            <img
              src="/bootcamp-flyer.jpg"
              alt="AI Accelerator Bootcamp — from zero to one. July 1st. Hosted by Mercy Thaddeus and Joshua Omobola."
              className="ac-flyer-img"
            />
          </a>
          <a
            className="ac-flyer-cta"
            data-edit="bootcamp-link"
            href={BOOTCAMP_URL}
            target="_blank"
            rel="noopener"
          >
            Apply for the Bootcamp <span>→</span>
          </a>
        </section>

        <footer className="ac-footer">
          <div className="ac-fb">
            attention<span> factory</span>
          </div>
          <p className="ac-disc">
            Course details, durations, and free vs paid certificate terms are
            set by each provider and can change. The information on this page
            was accurate as of June 2026. Always confirm current terms on the
            provider&apos;s own page before you enrol.
          </p>
        </footer>
      </div>
    </div>
  );
}
