"use client";

import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

import {
  FAST_FACTS,
  HERO_META,
  PILLARS,
  PLAYBOOK,
  SAFETY_CHECKLIST,
  SETUP_STEPS,
} from "./data";
import "./claude-tag.css";

export default function ClaudeTagGuide() {
  return (
    <div className="claude-tag">
      <header className="ct-top">
        <div className="ct-top-inner">
          <div className="ct-brand ct-mono">
            Attention&nbsp;Factory <span>/ Guides</span>
          </div>
          <div className="ct-top-meta ct-mono">AI at Work · Vol. 01</div>
        </div>
      </header>

      <main className="ct-wrap">
        <Link href="/guide" className="ct-back ct-mono">
          <ArrowLeft className="h-4 w-4" aria-hidden />
          All guides
        </Link>

        <div className="ct-hero">
          <div className="ct-eyebrow ct-mono">The Claude Tag Playbook</div>
          <h1>
            How to put Claude
            <br />
            <em>inside your team.</em>
          </h1>
          <p className="ct-dek">
            Anthropic just turned Claude from a private chatbot into a shared
            teammate that lives in Slack. Here is exactly how it works, how to
            set it up, and how to make your team actually use it.
          </p>
          <div className="ct-byline ct-mono">
            {HERO_META.map((m) => (
              <span key={m.label}>
                <b>{m.label}</b> {m.value}
              </span>
            ))}
          </div>
        </div>

        <section>
          <div className="ct-sec-label ct-mono">
            <span className="ct-n">01</span> What Claude Tag actually is
          </div>
          <p className="ct-lead">
            Until now, using AI at work meant opening a tab, giving it a task,
            and closing it. Every person had their own private Claude that only
            knew their corner of the work.
          </p>
          <p>
            Claude Tag flips that. Instead of a private session per person,{" "}
            <strong>
              one Claude joins a Slack channel as a shared team member
            </strong>{" "}
            — with its own identity, its own memory, and access to the tools and
            data your admin allows. Anyone in the channel types{" "}
            <span className="ct-tag">Claude</span>, hands off a task, and Claude
            works through it in stages, posting updates in the thread while
            everyone keeps moving.
          </p>
          <p>
            It runs on Claude Opus 4.8 and launched on June 23, 2026, in beta
            for Claude Enterprise and Team plans. Slack is the first home for
            it, with other platforms planned next.
          </p>
        </section>

        <hr className="ct-rule" />

        <section>
          <div className="ct-sec-label ct-mono">
            <span className="ct-n">02</span> Why this is different from a Slack
            bot
          </div>
          <p>
            The old Claude-in-Slack app acted under <em>your</em> personal login
            and billed to <em>your</em> account, starting cold every time.
            Claude Tag introduces an <strong>agent identity</strong>: Claude
            acts under the organisation&apos;s identity within a channel, with
            access defined by an admin before it ever starts working.
          </p>
          <p>
            That one change is what makes everything below possible — shared
            memory, shared context, and clean separation between teams, all
            controlled at the channel level.
          </p>

          <div className="ct-pillars">
            {PILLARS.map((pillar) => (
              <div key={pillar.px} className="ct-pillar">
                <div className="ct-px ct-mono">{pillar.px}</div>
                <div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="ct-rule" />

        <section>
          <div className="ct-sec-label ct-mono">
            <span className="ct-n">03</span> The setup — four steps
          </div>
          <p>
            Setup is an admin job, and it&apos;s deliberately short. From your
            Claude admin settings, an administrator does this once for the
            workspace:
          </p>

          <div className="ct-steps">
            {SETUP_STEPS.map((step) => (
              <div key={step.title} className="ct-step">
                <div className="ct-num" aria-hidden />
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                  <span className="ct-who ct-mono">{step.who}</span>
                </div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 28 }}>
            Once permissions are set, everyone can start tagging right away. No
            per-person setup needed.
          </p>
        </section>

        <hr className="ct-rule" />

        <section>
          <div className="ct-sec-label ct-mono">
            <span className="ct-n">04</span> How your team should actually use
            it
          </div>
          <p>
            The feature is only as good as the habits around it. The teams
            getting real value treat Claude like a colleague they delegate to —
            clear ask, right channel, let it run. Here&apos;s where it earns its
            keep:
          </p>

          <div className="ct-play">
            {PLAYBOOK.map((row) => (
              <div key={row.role} className="ct-play-row">
                <div className="ct-role ct-mono">{row.role}</div>
                <p>
                  <span className="ct-ex">{row.example}</span>
                  {row.rest}
                </p>
              </div>
            ))}
          </div>

          <p style={{ marginTop: 28 }}>
            <strong>One rule that makes it click:</strong> give Claude tasks the
            way you&apos;d brief a new hire — say the outcome you want in plain
            terms, point it at the right channel, and let it break the work into
            stages itself. You can also DM Claude directly for a private answer
            using your own connected tools.
          </p>
        </section>

        <hr className="ct-rule" />

        <section>
          <div className="ct-sec-label ct-mono">
            <span className="ct-n">05</span> Permissions &amp; safety — read
            this part
          </div>
          <p>
            Claude Tag means giving an AI agent access to your team&apos;s data
            and tools. That&apos;s the whole point, and it&apos;s also the thing
            to be deliberate about. Anthropic built the controls; using them
            well is on you.
          </p>

          <div className="ct-callout">
            <h3>Your governance checklist</h3>
            <ul>
              {SAFETY_CHECKLIST.map((item) => (
                <li key={item.lead}>
                  <b>{item.lead}</b> {item.rest}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <hr className="ct-rule" />

        <section>
          <div className="ct-sec-label ct-mono">
            <span className="ct-n">06</span> If you already use Claude in Slack
          </div>
          <div className="ct-banner">
            <div className="ct-tagline ct-mono">Action required</div>
            <h3>The old app is being retired</h3>
            <p>
              Claude Tag replaces the existing Claude in Slack app, which is set
              to retire on August 3, 2026. Administrators have a 30-day window to
              opt in and migrate — configuring channel access, tool connections,
              and memory scope before the deadline. Eligible Enterprise and Team
              organisations get an introductory launch credit so the whole
              company can try it.
            </p>
          </div>
        </section>

        <hr className="ct-rule" />

        <section>
          <div className="ct-sec-label ct-mono">
            <span className="ct-n">07</span> The facts, fast
          </div>
          <div className="ct-facts">
            {FAST_FACTS.map((fact) => (
              <div key={fact.k} className="ct-fact">
                <div className="ct-k ct-mono">{fact.k}</div>
                <div className="ct-v">{fact.v}</div>
              </div>
            ))}
          </div>
        </section>

        <footer className="ct-foot">
          <div className="ct-foot-cta">
            Want the version tailored to <em>your</em> team&apos;s workflow?
          </div>
          <p style={{ maxWidth: "46ch" }}>
            This is the kind of thing we set up for teams every week — picking
            the right channels, scoping permissions, and building the habits
            that make an AI teammate actually stick.
          </p>
          <div className="ct-foot-meta ct-mono">
            <span>
              <b>Attention Factory</b>
            </span>
            <span>attentionfactory.io</span>
            <span>@attention_factory</span>
          </div>
          <p className="ct-disclaimer">
            Guide compiled from Anthropic&apos;s official Claude Tag announcement
            and product documentation (June 2026). Product names, availability,
            and dates are accurate as of publication and may change as the beta
            expands. Not affiliated with or endorsed by Anthropic.
          </p>
        </footer>
      </main>
    </div>
  );
}
