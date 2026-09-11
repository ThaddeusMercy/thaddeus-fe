"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";
import content from "./content.json";
import "../ai-second-brain/ai-second-brain.css";
import "./edit-videos-chatgpt-claude.css";

type Block = (typeof content.intro)[number];

function CopyPrompt({ label, text, id }: { label: string; text: string; id?: string }) {
  const [status, setStatus] = useState("Copy");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  async function copy() {
    let copied = false;
    try {
      await navigator.clipboard.writeText(text);
      copied = true;
    } catch {
      const previousFocus = document.activeElement;
      const field = document.createElement("textarea");
      field.value = text;
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      try { copied = document.execCommand("copy"); } catch { copied = false; }
      field.remove();
      if (previousFocus instanceof HTMLElement) previousFocus.focus();
    }
    setStatus(copied ? "Copied" : "Select text to copy");
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus("Copy"), 2500);
  }

  return (
    <div className="asb-block" id={id || undefined}>
      <div className="asb-block-head">
        <span className="asb-block-label">{label}</span>
        <button type="button" className="asb-copy" onClick={copy} aria-label={`Copy ${label.toLowerCase()}`}>
          <span role="status">{status}</span>
        </button>
      </div>
      <pre>{text}</pre>
    </div>
  );
}

function Blocks({ blocks }: { blocks: Block[] }) {
  return blocks.map((block, index) => {
    switch (block.type) {
      case "heading": return <h3 key={index}>{block.text}</h3>;
      case "unordered": return <ul key={index}>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>;
      case "ordered": return <ol key={index}>{block.items.map((item) => <li key={item}>{item}</li>)}</ol>;
      case "prompt": return <CopyPrompt key={index} label={block.label} text={block.text} id={block.id} />;
      case "quote": return <blockquote className="video-edit-example" key={index}>{block.text}</blockquote>;
      case "link": return <p key={index} className="asb-note"><Link href={block.href}>{block.text}</Link></p>;
      default: return <p key={index}>{block.text}</p>;
    }
  });
}

export default function EditVideosChatGptClaudeGuide() {
  return (
    <article className="asb-guide video-edit-guide">
      <Link href="/guide" className="asb-back"><ArrowLeft className="h-4 w-4" aria-hidden />All guides</Link>
      <header className="asb-hero">
        <p className="asb-eyebrow">ChatGPT + Claude · Video editing</p>
        <h1>{content.title}</h1>
        <p className="asb-lede">{content.intro[0].text}</p>
        <p className="asb-meta">By Mercy Thaddeus · 11 September 2026</p>
      </header>

      <section className="asb-section" aria-label="Introduction">
        <Blocks blocks={content.intro.slice(1)} />
        <nav className="asb-map" aria-label="Jump to a workflow or prompt">
          <a href="#chatgpt" className="asb-map-item"><span className="asb-map-n">01</span><div><strong>Edit with ChatGPT</strong><span>GPT-6 Astra, Codex and Remotion.</span></div></a>
          <a href="#claude" className="asb-map-item"><span className="asb-map-n">02</span><div><strong>Edit with Claude</strong><span>Claude Code and Remotion.</span></div></a>
          <a href="#editing-prompt" className="asb-map-item"><span className="asb-map-n">↗</span><div><strong>Get the full editing prompt</strong><span>Use the same instructions with either AI.</span></div></a>
        </nav>
        <p className="video-edit-download"><a href="/guides/edit-videos-chatgpt-claude/video-editing-prompt.txt" download="video-editing-prompt.txt">Download the editing prompt</a></p>
      </section>

      {content.sections.map((section) => (
        <section className="asb-section" id={section.id} key={section.id}>
          <h2>{section.title}</h2>
          <Blocks blocks={section.blocks} />
          {section.id === "claude" && <p><a href="#editing-prompt">Back to the full editing prompt ↑</a></p>}
        </section>
      ))}
      <p className="asb-sig">Mercy Thaddeus · ChatGPT & Claude video editing</p>
    </article>
  );
}
