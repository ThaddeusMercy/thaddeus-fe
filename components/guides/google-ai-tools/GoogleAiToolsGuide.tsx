"use client";

import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

import {
  BEFORE_NOTES,
  FAQS,
  IMPORTANT_NOTES,
  LABS_HOME,
  START_GROUPS,
  TEST_EXAMPLES,
  TOOLS,
} from "./data";
import "./google-ai-tools.css";

export default function GoogleAiToolsGuide() {
  return (
    <div className="gat-guide">
      <Link href="/guide" className="gat-back">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        All guides
      </Link>

      <header className="gat-hero">
        <p className="gat-eyebrow">Tool guide · Google AI</p>
        <h1>
          15 Google AI tools for marketing, design, learning, coding, and more
        </h1>
        <p className="gat-lede">
          Most people know Gemini, but Google has separate AI tools for
          marketing, design, research, learning, coding, music, and building
          apps.
        </p>
        <p className="gat-meta">Last checked: 10 August 2026</p>
      </header>

      <section className="gat-section">
        <p>
          This guide covers the 15 tools from my video. It explains what each
          one does, who it is for, and what you need to know before you start.
        </p>
        <p>
          Some have free access. Some have limits, paid plans, waitlists, or
          country restrictions. A few tools in the video have also changed since
          they first launched.
        </p>
        <p>
          Google Labs home:{" "}
          <a href={LABS_HOME} target="_blank" rel="noopener noreferrer">
            {LABS_HOME}
          </a>
        </p>
      </section>

      <section className="gat-section">
        <h2>Read this before you start</h2>
        <p>A few names and access rules have changed:</p>
        <ul className="gat-check">
          {BEFORE_NOTES.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
        <div className="gat-note">
          <p>
            I kept all 15 tools from the video in this guide, but the notes
            below show their current status.
          </p>
        </div>
      </section>

      <section className="gat-section">
        <h2>The 15 tools</h2>

        {TOOLS.map((tool) => (
          <article className="gat-tool" key={tool.n} id={`tool-${tool.n}`}>
            <p className="gat-num">Tool {tool.n}</p>
            <h2>{tool.name}</h2>

            {tool.body.map((para) => (
              <p key={para}>{para}</p>
            ))}

            {tool.status && tool.status.length > 0 ? (
              <>
                <p className="gat-useful">Current status</p>
                <ul className="gat-check">
                  {tool.status.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </>
            ) : null}

            {tool.useful.length > 0 ? (
              <>
                <p className="gat-useful">Useful for</p>
                <ul className="gat-check">
                  {tool.useful.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </>
            ) : null}

            {tool.access ? (
              <div className="gat-access">
                <p>
                  <strong>Access note:</strong> {tool.access}
                </p>
              </div>
            ) : null}

            <ul className="gat-links">
              {tool.links.map((link) => (
                <li key={link.href}>
                  {link.label}:{" "}
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.href}
                  </a>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="gat-section">
        <h2>Which tools should you start with?</h2>
        {START_GROUPS.map((group) => (
          <div className="gat-group" key={group.title}>
            <h3>{group.title}</h3>
            <p>Start with:</p>
            <ul className="gat-check">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="gat-section">
        <h2>A simple way to test the tools</h2>
        <p>Do not sign up for all 15 at once.</p>
        <p>
          Choose one task you already need to complete, then test the tool that
          fits it.
        </p>
        <p>For example:</p>
        <ul className="gat-test">
          {TEST_EXAMPLES.map((item) => (
            <li key={item.need}>
              <span className="gat-need">{item.need}</span>
              <span className="gat-toolname">{item.tool}</span>
            </li>
          ))}
        </ul>
        <p>
          Judge the tool by how well it helps with real work, not only by its
          demo.
        </p>
      </section>

      <section className="gat-section">
        <h2>Important notes</h2>
        <ul className="gat-check">
          {IMPORTANT_NOTES.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="gat-section">
        <h2>Frequently asked questions</h2>
        {FAQS.map((item) => (
          <div className="gat-faq" key={item.q}>
            <h3>{item.q}</h3>
            <p>{item.a}</p>
          </div>
        ))}
      </section>

      <section className="gat-section">
        <h2>Final note</h2>
        <p>
          Google changes its AI tools quickly. Check the official links on this
          page before you record a new video or publish exact limits and access
          details.
        </p>
        <p className="gat-sig">MERCY THADDEUS &nbsp;|&nbsp; ATTENTION FACTORY</p>
      </section>
    </div>
  );
}
