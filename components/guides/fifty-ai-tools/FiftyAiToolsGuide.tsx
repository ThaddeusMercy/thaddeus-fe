"use client";

import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

import { CHOOSE_STEPS, FINAL_NOTE, SECTIONS } from "./data";
import "./fifty-ai-tools.css";

export default function FiftyAiToolsGuide() {
  return (
    <div className="ait-guide">
      <Link href="/guide" className="ait-back">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        All guides
      </Link>

      <header className="ait-hero">
        <p className="ait-eyebrow">Tool guide · Multi-tool</p>
        <h1>50+ AI tools for almost anything</h1>
        <p className="ait-lede">
          You do not need to test every AI tool you see online. Start with the
          problem you want to solve, then choose one or two tools from the
          right section.
        </p>
      </header>

      <section className="ait-section">
        <p>
          Some of these tools are free. Others offer free trials or paid plans.
          Features and prices can change, so check each website before
          subscribing.
        </p>
      </section>

      <section className="ait-section">
        <h2>The 12 categories</h2>

        {SECTIONS.map((section) => (
          <article className="ait-tool" key={section.n} id={`section-${section.n}`}>
            <p className="ait-num">Section {section.n}</p>
            <h2>{section.title}</h2>

            <ul className="ait-check">
              {section.tools.map((tool) => (
                <li key={`${section.n}-${tool.name}`}>
                  <a href={tool.href} target="_blank" rel="noopener noreferrer">
                    {tool.name}
                  </a>{" "}
                  {tool.body}
                </li>
              ))}
            </ul>

            <div className="ait-note">
              <p>{section.tip}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="ait-section">
        <h2>A simple way to choose</h2>
        <ul className="ait-check">
          {CHOOSE_STEPS.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ul>
        <p>{FINAL_NOTE}</p>
      </section>
    </div>
  );
}
