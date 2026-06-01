"use client";

import Link from "next/link";
import { Archivo_Black, Inter } from "next/font/google";
import { ArrowLeft } from "@phosphor-icons/react";

import {
  AI_JOB_MAP_PICK_GUIDE,
  AI_JOB_MAP_ROLES,
  AI_JOB_MAP_TEMPLATES,
  AI_JOB_MAP_UNIVERSAL_STEPS,
} from "./data";
import "./ai-job-map.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-archivo-black",
});

function Squiggle({ width = 360 }: { width?: number }) {
  return (
    <div className="ajm-squiggle">
      <svg width={width} height={30} viewBox={`0 0 ${width} 30`} fill="none">
        <path
          d={`M6 23 Q ${width / 2} 3 ${width - 8} 11`}
          stroke="#F26B3A"
          strokeWidth="9"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

function PageFoot() {
  return (
    <div className="ajm-foot">
      The AI Job Map · Mercy Thaddeus · Attention Factory
    </div>
  );
}

function Highlight({ children }: { children: React.ReactNode }) {
  return <span className="ajm-hl">{children}</span>;
}

function RolePage({ role }: { role: (typeof AI_JOB_MAP_ROLES)[number] }) {
  return (
    <div className="ajm-page ajm-paper">
      <div className="ajm-wrap">
        <div className="ajm-toplbl">
          Role {String(role.number).padStart(2, "0")} of 08 · Attention Factory
        </div>
        <div
          className="ajm-blk"
          style={{
            fontSize: 38,
            lineHeight: 0.96,
            letterSpacing: -1,
            textTransform: "uppercase",
            marginTop: 14,
          }}
        >
          {role.title}
        </div>
        <div
          style={{
            margin: "16px 0 0",
            fontSize: 16.5,
            lineHeight: 1.5,
            fontWeight: 600,
            maxWidth: 640,
          }}
        >
          {role.description}
        </div>

        <div style={{ marginTop: 26 }}>
          <Highlight>Skills to build</Highlight>
        </div>
        <div style={{ marginTop: 9, fontSize: 15, lineHeight: 1.45 }}>
          {role.skills}
        </div>

        <div style={{ marginTop: 24 }}>
          <Highlight>The 30-day plan</Highlight>
        </div>
        <div style={{ marginTop: 12 }}>
          {role.weeks.map((week) => (
            <div key={week.label} className="ajm-week">
              <span className="ajm-blk ajm-week-label">{week.label}</span>
              <span className="ajm-week-text">{week.text}</span>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 22 }}>
          <Highlight>Proof to ship</Highlight>
        </div>
        <div style={{ marginTop: 9, fontSize: 15, lineHeight: 1.45 }}>
          {role.proof}
        </div>

        <div style={{ marginTop: 22 }}>
          <Highlight>Where to position</Highlight>
        </div>
        <div style={{ marginTop: 9, fontSize: 15, lineHeight: 1.45 }}>
          {role.position}
        </div>

        <div style={{ marginTop: 22 }}>
          <Highlight>Tools</Highlight>
        </div>
        <div style={{ marginTop: 9, fontSize: 15, lineHeight: 1.45 }}>
          {role.tools}
        </div>
      </div>
      <PageFoot />
    </div>
  );
}

function TemplateBlock({
  template,
}: {
  template: (typeof AI_JOB_MAP_TEMPLATES)[number];
}) {
  return (
    <div style={{ marginBottom: 30 }}>
      <Highlight>Template {template.number}</Highlight>
      <div
        className="ajm-blk"
        style={{
          fontSize: 24,
          letterSpacing: -0.5,
          marginTop: 12,
          textTransform: "uppercase",
        }}
      >
        {template.title}
      </div>
      <div
        style={{
          margin: "8px 0 14px",
          fontSize: 14,
          lineHeight: 1.5,
          color: "var(--ajm-soft)",
          maxWidth: 640,
        }}
      >
        {template.description}
      </div>
      {template.fields.map((field) => (
        <div key={field.label} className="ajm-field">
          <span className="ajm-field-label">{field.label}</span>{" "}
          <span className="ajm-field-value">{field.placeholder}</span>
        </div>
      ))}
    </div>
  );
}

export default function AiJobMapGuide() {
  return (
    <div
      className={`ai-job-map ${inter.variable} ${archivoBlack.variable}`}
    >
      <div className="mx-auto max-w-[816px] px-4 pt-8">
        <Link href="/guide" className="ajm-back">
          <ArrowLeft className="h-4 w-4" aria-hidden />
          All guides
        </Link>
      </div>

      <div className="ai-job-map-scroll">
        {/* Cover */}
        <div className="ajm-page ajm-kraft">
          <div className="ajm-wrap">
            <div className="ajm-toplbl">Attention Factory</div>
            <div style={{ marginTop: 150 }}>
              <div
                className="ajm-blk"
                style={{
                  fontSize: 74,
                  lineHeight: 0.9,
                  letterSpacing: -2,
                  textTransform: "uppercase",
                }}
              >
                The AI
                <br />
                Job Map
              </div>
              <Squiggle />
            </div>
            <div
              style={{
                marginTop: 40,
                fontSize: 22,
                fontWeight: 600,
                lineHeight: 1.4,
                maxWidth: 560,
              }}
            >
              Your 30-day roadmap and portfolio templates for the 8 jobs AI is
              creating right now.
            </div>
            <div
              style={{
                marginTop: 26,
                fontSize: 16,
                color: "var(--ajm-soft)",
                fontWeight: 500,
                lineHeight: 1.5,
                maxWidth: 520,
              }}
            >
              Pick one role. Spend 30 days building proof. Walk out with work
              you can show and a way to get paid for it.
            </div>
            <div
              style={{
                position: "absolute",
                left: 72,
                bottom: 84,
                fontSize: 13,
                letterSpacing: 2.5,
                textTransform: "uppercase",
                color: "var(--ajm-soft)",
                fontWeight: 600,
              }}
            >
              Mercy Thaddeus · attentionfactory.io
            </div>
            <svg
              className="ajm-spiral"
              width="200"
              height="300"
              viewBox="0 0 200 300"
              fill="none"
            >
              <path
                d="M150 14 C 70 50, 56 130, 138 150 C 196 165, 150 232, 80 224 C 30 218, 40 156, 96 156"
                stroke="#F26B3A"
                strokeWidth="9"
                strokeLinecap="round"
                strokeDasharray="16 20"
              />
            </svg>
          </div>
        </div>

        {/* Start here */}
        <div className="ajm-page ajm-paper">
          <div className="ajm-wrap">
            <div className="ajm-toplbl">Start here</div>
            <div
              className="ajm-blk"
              style={{
                fontSize: 46,
                lineHeight: 0.95,
                letterSpacing: -1,
                textTransform: "uppercase",
                marginTop: 18,
              }}
            >
              The one rule
              <br />
              this whole
              <br />
              guide runs on
            </div>
            <div
              style={{
                margin: "24px 0 0",
                fontSize: 18,
                lineHeight: 1.55,
                fontWeight: 600,
                maxWidth: 620,
              }}
            >
              The market is moving so fast that &ldquo;I built this in 30
              days&rdquo; beats five years of unrelated experience. You do not
              need permission, a degree, or a perfect plan. You need proof, in
              public, that you can do the thing.
            </div>

            <div style={{ marginTop: 34 }}>
              <Highlight>The universal play</Highlight>
            </div>
            <div style={{ marginTop: 18 }}>
              {AI_JOB_MAP_UNIVERSAL_STEPS.map((step, i) => (
                <div key={step} className="ajm-step">
                  <span className="ajm-blk ajm-step-num">{i + 1}</span>
                  <span className="ajm-step-text">{step}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 40 }}>
              <Highlight>How to pick your one</Highlight>
            </div>
            <div
              style={{
                marginTop: 16,
                fontSize: 16,
                lineHeight: 1.7,
                maxWidth: 640,
              }}
            >
              {AI_JOB_MAP_PICK_GUIDE.map((item) => (
                <span key={item.label}>
                  <b>{item.label}</b> {item.text}
                  <br />
                </span>
              ))}
            </div>
          </div>
          <PageFoot />
        </div>

        {/* 8 roles */}
        {AI_JOB_MAP_ROLES.map((role) => (
          <RolePage key={role.number} role={role} />
        ))}

        {/* Portfolio intro */}
        <div className="ajm-page ajm-kraft">
          <div className="ajm-wrap">
            <div className="ajm-toplbl">Attention Factory</div>
            <div style={{ marginTop: 120 }}>
              <div
                className="ajm-blk"
                style={{
                  fontSize: 58,
                  lineHeight: 0.92,
                  letterSpacing: -1.5,
                  textTransform: "uppercase",
                }}
              >
                The portfolio
                <br />
                templates
              </div>
              <Squiggle width={320} />
            </div>
            <div
              style={{
                marginTop: 34,
                fontSize: 18,
                lineHeight: 1.55,
                fontWeight: 600,
                maxWidth: 600,
              }}
            >
              Building the work is half of it. The other half is documenting it
              so a stranger can tell, in ten seconds, that you can do the job.
            </div>
            <div
              style={{
                marginTop: 20,
                fontSize: 16,
                color: "var(--ajm-soft)",
                lineHeight: 1.55,
                maxWidth: 580,
              }}
            >
              Copy each template, fill in the brackets, and ship it. Use
              Template 1 for every project, then pick the others as you need
              them.
            </div>
            <PageFoot />
          </div>
        </div>

        {/* Templates 1 & 2 */}
        <div className="ajm-page ajm-paper">
          <div className="ajm-wrap">
            <div className="ajm-toplbl">
              Portfolio templates · Attention Factory
            </div>
            <div style={{ marginTop: 18 }}>
              <TemplateBlock template={AI_JOB_MAP_TEMPLATES[0]} />
              <TemplateBlock template={AI_JOB_MAP_TEMPLATES[1]} />
            </div>
          </div>
          <PageFoot />
        </div>

        {/* Templates 3 & 4 */}
        <div className="ajm-page ajm-paper">
          <div className="ajm-wrap">
            <div className="ajm-toplbl">
              Portfolio templates · Attention Factory
            </div>
            <div style={{ marginTop: 18 }}>
              <TemplateBlock template={AI_JOB_MAP_TEMPLATES[2]} />
              <TemplateBlock template={AI_JOB_MAP_TEMPLATES[3]} />
            </div>
          </div>
          <PageFoot />
        </div>

        {/* Closing */}
        <div className="ajm-page ajm-kraft">
          <div className="ajm-wrap">
            <div className="ajm-toplbl">Attention Factory</div>
            <div style={{ marginTop: 120 }}>
              <div
                className="ajm-blk"
                style={{
                  fontSize: 56,
                  lineHeight: 0.92,
                  letterSpacing: -1.5,
                  textTransform: "uppercase",
                }}
              >
                Start this
                <br />
                week
              </div>
              <Squiggle width={280} />
            </div>
            <div
              style={{
                marginTop: 34,
                fontSize: 18,
                lineHeight: 1.6,
                fontWeight: 600,
                maxWidth: 600,
              }}
            >
              Reading this changes nothing. Building does. Pick your one role
              today, block four weekends, and run the plan. By day 30 you will
              have three things to show and a reason for someone to pay you.
            </div>

            <div style={{ marginTop: 34 }}>
              <Highlight>Keep going with us</Highlight>
            </div>
            <div
              style={{
                marginTop: 16,
                fontSize: 16,
                lineHeight: 1.65,
                maxWidth: 600,
              }}
            >
              I break down this exact work every day on Instagram at{" "}
              <b>@mercythaddeus</b>. Follow there for the live version of all 8
              roles.
              <br />
              <br />
              Attention Factory trains people and teams to build, position, and
              get paid in AI. If you want to go faster than 30 days on your own,
              that is what we are here for. Find the next cohort and everything
              else at <b>attentionfactory.io</b>.
            </div>
            <div
              style={{
                position: "absolute",
                left: 72,
                bottom: 84,
                fontSize: 13,
                letterSpacing: 2.5,
                textTransform: "uppercase",
                color: "var(--ajm-soft)",
                fontWeight: 600,
              }}
            >
              Mercy Thaddeus · Attention Factory
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
