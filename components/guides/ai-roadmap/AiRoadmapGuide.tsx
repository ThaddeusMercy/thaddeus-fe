"use client";

import Link from "next/link";
import { GeistSans } from "geist/font/sans";
import { ArrowLeft } from "@phosphor-icons/react";

import { BOOTCAMP_URL, NEXT_BOX, PHASES, RULES } from "./data";
import "./ai-roadmap.css";

export default function AiRoadmapGuide() {
  return (
    <div className={`ai-roadmap ${GeistSans.className}`}>
      <div className="ar-wrap">
        <Link href="/guide" className="ar-back">
          <ArrowLeft className="h-4 w-4" aria-hidden />
          All guides
        </Link>
      </div>

      <header className="ar-hero">
        <div className="ar-wrap">
          <div className="ar-kicker">Attention Factory</div>
          <h1>
            The 30-Day
            <br />
            AI Roadmap<span className="ar-hl">.</span>
          </h1>
          <p className="ar-sub">
            From zero to a portfolio of real AI projects. The exact path my
            bootcamp fellows followed to go from never building anything to
            shipping apps, sites, and agents in weeks.
          </p>
          <div className="ar-bar" aria-hidden />
          <p className="ar-by">
            A free guide by <b>Mercy Thaddeus</b> &nbsp;·&nbsp; @mercythaddeus_
          </p>
        </div>
      </header>

      <section className="ar-intro">
        <div className="ar-wrap">
          <div className="ar-eyebrow">Start here</div>
          <h2 className="ar-section-title">
            One focused task a day. Thirty days to a portfolio.
          </h2>
          <p className="ar-lead">
            This is not a course you watch. It is a build plan you do. Every day
            has one task you can finish in 30 to 60 minutes, and by the end you
            will have real projects with your name on them, not notes about
            projects you might make someday.
          </p>
          <p className="ar-lead">
            Three rules before you start. They matter more than any tool I name
            in here.
          </p>
          <div className="ar-rules">
            {RULES.map((rule) => (
              <div key={rule.num} className="ar-rule-item">
                <div className="ar-rule-num">{rule.num}</div>
                <div>
                  <h3>{rule.title}</h3>
                  <p>{rule.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="ar-phases">
        <div className="ar-wrap">
          {PHASES.map((phase) => (
            <div key={phase.tag} className="ar-phase">
              <div className="ar-phase-band">
                <span className="ar-tag">{phase.tag}</span>
                <h2>{phase.title}</h2>
                <p>{phase.description}</p>
              </div>
              <div className="ar-days">
                {phase.days.map((day) => (
                  <label key={day.day} className="ar-day">
                    <input type="checkbox" />
                    <div className="ar-day-num">Day {day.day}</div>
                    <div>
                      <div className="ar-task">{day.task}</div>
                      <div className="ar-why">{day.why}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          ))}

          <div className="ar-next">
            <div className="ar-eyebrow">What happens next</div>
            <p>{NEXT_BOX}</p>
          </div>
        </div>
      </main>

      <section className="ar-cta">
        <div className="ar-wrap">
          <div className="ar-eyebrow">Want to do this in 7 days, not 30?</div>
          <h2>Join the next cohort.</h2>
          <p className="ar-lead">
            The roadmap works on your own. The bootcamp works faster. Same path,
            compressed, with live building, real feedback, and a room full of
            people shipping at the same time. Everything you just read is what
            the fellows did in one week.
          </p>
          <a
            className="ar-btn"
            href={BOOTCAMP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Join the next cohort &nbsp;&rarr;
          </a>
          <p className="ar-url">
            Or go straight to{" "}
            <a href={BOOTCAMP_URL} target="_blank" rel="noopener noreferrer">
              dub.sh/attn-bravo
            </a>
          </p>
          <p className="ar-cta-by">
            Mercy Thaddeus &nbsp;·&nbsp; <span>@mercythaddeus_</span>{" "}
            &nbsp;·&nbsp; attentionfactory.io
          </p>
        </div>
      </section>
    </div>
  );
}
