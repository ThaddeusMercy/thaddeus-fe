"use client";

import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

import { SECTIONS } from "./data";
import "./chatgpt-secret-codes.css";

export default function ChatGptSecretCodesGuide() {
  return (
    <div className="csc-guide">
      <Link href="/guide" className="csc-back">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        All guides
      </Link>

      <header className="csc-cover">
        <p className="csc-kick">Attention Factory · The ChatGPT Files</p>
        <h1 className="csc-h1">
          100
          <br />
          <em>ChatGPT Secret Codes</em>
        </h1>
        <p className="csc-lede">
          The cheat sheet for pulling sharper answers out of ChatGPT. One
          hundred short phrases you drop into any prompt — each with an example
          you can copy tonight.
        </p>
        <div className="csc-howto">
          <h3>How to use them</h3>
          <p>
            Every code is just a phrase you add to your prompt. Put it at the
            start or the end, then ask your real question. Example:{" "}
            <span className="csc-mini">Truth mode.</span> followed by what you
            actually want to know. That&apos;s the whole trick.
          </p>
        </div>
        <p className="csc-byline">
          A guide by <b>Mercy Thaddeus</b> · mercythaddeus.xyz · Attention
          Factory
        </p>
      </header>

      {SECTIONS.map((section) => (
        <section className="csc-section" key={section.id}>
          <div className="csc-shead">
            <span className="csc-sid">{section.id}</span>
            <div>
              <h2>{section.title}</h2>
              <p>{section.blurb}</p>
            </div>
          </div>
          <div className="csc-grid">
            {section.codes.map((code) => (
              <article className="csc-card" key={code.num}>
                <div className="csc-cnum">{code.num}</div>
                <div className="csc-cname">{code.name}</div>
                <div className="csc-does">{code.does}</div>
                <div className="csc-chip">
                  <span className="csc-chiptext">{code.example}</span>
                </div>
                <div className="csc-best">
                  <span className="csc-dot" />
                  BEST FOR &nbsp;{code.bestFor}
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}

      <section className="csc-closing">
        <h2>That&apos;s all one hundred.</h2>
        <p>
          Start with five that fit what you&apos;re working on this week. Once
          they&apos;re muscle memory, the rest will follow.
        </p>
        <p>
          Save this. Steal from it. Send it to the friend who still types
          one-line prompts.
        </p>
        <p className="csc-sig">
          Mercy Thaddeus · Attention Factory · attentionfactory.io
        </p>
      </section>
    </div>
  );
}
