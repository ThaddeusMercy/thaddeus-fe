import { Fraunces, Newsreader, Space_Mono } from "next/font/google";

import { SECTIONS } from "./data";

import "./thirty-claude-codes.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-fraunces",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-newsreader",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

function AttnIconLarge() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden>
      <line x1="16.1" y1="13.0" x2="25.0" y2="13.0" stroke="#CB6B4A" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="15.7" y1="14.6" x2="23.4" y2="19.0" stroke="#CB6B4A" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="14.6" y1="15.7" x2="19.0" y2="23.4" stroke="#CB6B4A" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="13.0" y1="16.1" x2="13.0" y2="25.0" stroke="#CB6B4A" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="11.4" y1="15.7" x2="7.0" y2="23.4" stroke="#CB6B4A" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="10.3" y1="14.6" x2="2.6" y2="19.0" stroke="#CB6B4A" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="9.9" y1="13.0" x2="1.0" y2="13.0" stroke="#CB6B4A" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="10.3" y1="11.4" x2="2.6" y2="7.0" stroke="#CB6B4A" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="11.4" y1="10.3" x2="7.0" y2="2.6" stroke="#CB6B4A" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="13.0" y1="9.9" x2="13.0" y2="1.0" stroke="#CB6B4A" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="14.6" y1="10.3" x2="19.0" y2="2.6" stroke="#CB6B4A" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="15.7" y1="11.4" x2="23.4" y2="7.0" stroke="#CB6B4A" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function AttnIconSmall() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden>
      <line x1="13.6" y1="11.0" x2="21.1" y2="11.0" stroke="#CB6B4A" strokeWidth="1.9" strokeLinecap="round" />
      <line x1="13.3" y1="12.3" x2="19.8" y2="16.1" stroke="#CB6B4A" strokeWidth="1.9" strokeLinecap="round" />
      <line x1="12.3" y1="13.3" x2="16.1" y2="19.8" stroke="#CB6B4A" strokeWidth="1.9" strokeLinecap="round" />
      <line x1="11.0" y1="13.6" x2="11.0" y2="21.1" stroke="#CB6B4A" strokeWidth="1.9" strokeLinecap="round" />
      <line x1="9.7" y1="13.3" x2="5.9" y2="19.8" stroke="#CB6B4A" strokeWidth="1.9" strokeLinecap="round" />
      <line x1="8.7" y1="12.3" x2="2.2" y2="16.1" stroke="#CB6B4A" strokeWidth="1.9" strokeLinecap="round" />
      <line x1="8.4" y1="11.0" x2="0.9" y2="11.0" stroke="#CB6B4A" strokeWidth="1.9" strokeLinecap="round" />
      <line x1="8.7" y1="9.7" x2="2.2" y2="5.9" stroke="#CB6B4A" strokeWidth="1.9" strokeLinecap="round" />
      <line x1="9.7" y1="8.7" x2="5.9" y2="2.2" stroke="#CB6B4A" strokeWidth="1.9" strokeLinecap="round" />
      <line x1="11.0" y1="8.4" x2="11.0" y2="0.9" stroke="#CB6B4A" strokeWidth="1.9" strokeLinecap="round" />
      <line x1="12.3" y1="8.7" x2="16.1" y2="2.2" stroke="#CB6B4A" strokeWidth="1.9" strokeLinecap="round" />
      <line x1="13.3" y1="9.7" x2="19.8" y2="5.9" stroke="#CB6B4A" strokeWidth="1.9" strokeLinecap="round" />
    </svg>
  );
}

function ArrowUpIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#fff"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <line x1="12" y1="19" x2="12" y2="5" />
      <polyline points="6 11 12 5 18 11" />
    </svg>
  );
}

export default function ThirtyClaudeCodesGuide() {
  return (
    <div
      className={`thirty-claude-codes ${fraunces.variable} ${newsreader.variable} ${spaceMono.variable}`}
    >
      <header className="tcc-cover">
        <div className="tcc-kick">
          <AttnIconLarge />
          Attention Factory · The Claude Files
        </div>
        <h1 className="tcc-h1">
          Thirty
          <br />
          <em>Claude Codes</em>
        </h1>
        <p className="tcc-lede">
          The cheat sheet for pulling 10x sharper answers out of Claude. Thirty
          short phrases you drop into any prompt, each one with an example you
          can copy tonight.
        </p>
        <div className="tcc-howto">
          <h3>How to use them</h3>
          <p>
            Every code is just a phrase you add to your prompt. Put it at the
            start or the end, then ask your real question. Example:{" "}
            <span className="tcc-mini">Truth mode.</span> followed by what you
            actually want to know. That&apos;s the whole trick.
          </p>
        </div>
        <div className="tcc-byline">
          A guide by <b>Mercy Thaddeus</b> &nbsp;·&nbsp; mercythaddeus.xyz
          &nbsp;·&nbsp; Attention Factory
        </div>
      </header>

      {SECTIONS.map((section) => (
        <section className="tcc-section" key={section.id}>
          <div className="tcc-shead">
            <span className="tcc-sid">{section.id}</span>
            <div>
              <h2>{section.title}</h2>
              <p>{section.blurb}</p>
            </div>
          </div>
          <div className="tcc-grid">
            {section.codes.map((code) => (
              <article className="tcc-card" key={code.num}>
                <div className="tcc-cnum">{code.num}</div>
                <div className="tcc-cname">{code.name}</div>
                <div className="tcc-does">{code.does}</div>
                <div className="tcc-chip">
                  <span className="tcc-chiptext">{code.example}</span>
                  <span className="tcc-snd">
                    <ArrowUpIcon />
                  </span>
                </div>
                <div className="tcc-best">
                  <span className="tcc-dot" />
                  BEST FOR &nbsp;{code.bestFor}
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}

      <section className="tcc-closing">
        <h2>That&apos;s all thirty.</h2>
        <p>
          Start with three or four that fit what you&apos;re working on this
          week. Once they&apos;re muscle memory, the rest will follow.
        </p>
        <p>
          Save this. Steal from it. Send it to the friend who still types
          one-line prompts.
        </p>
        <div className="tcc-sig">
          <AttnIconSmall />
          &nbsp; Mercy Thaddeus · Attention Factory · attentionfactory.io
        </div>
      </section>
    </div>
  );
}
