"use client";

import { Fragment, useCallback, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

import {
  CONNECT_STEPS,
  IMAGE_CHECKS,
  MONEY_PACKAGES,
  NEED_ITEMS,
  PROMPT_CONCEPTS,
  PROMPT_IMPERFECT,
  PROMPT_VARIATIONS,
  PROMPT_VIDEO,
} from "./data";
import "./chatgpt-ugc-video.css";

function highlightBrackets(text: string) {
  return text.split(/(\[[^\]]+\])/g).map((part, i) =>
    part.startsWith("[") && part.endsWith("]") ? (
      <span key={i} className="cuv-fill">
        {part}
      </span>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
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
    setTimeout(() => setCopied(false), 1600);
  }, [text]);

  return (
    <div className="cuv-block">
      <div className="cuv-block-head">
        <span className="cuv-block-label">{label}</span>
        <button
          type="button"
          className={`cuv-copy${copied ? " cuv-done" : ""}`}
          onClick={onCopy}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre>{highlightBrackets(text)}</pre>
    </div>
  );
}

const TOC = [
  { id: "need", label: "What you need" },
  { id: "connect", label: "Connect Higgsfield" },
  { id: "upload", label: "Upload product" },
  { id: "concepts", label: "UGC concepts" },
  { id: "video", label: "Create the video" },
  { id: "optional", label: "More like real UGC" },
  { id: "variations", label: "Multiple versions" },
  { id: "money", label: "Make money" },
] as const;

export default function ChatGptUgcVideoGuide() {
  return (
    <div className="cuv-guide">
      <Link href="/guide" className="cuv-back">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        All guides
      </Link>

      <header className="cuv-hero">
        <p className="cuv-eyebrow">ChatGPT · Higgsfield · UGC ads</p>
        <h1>Create a UGC product video inside ChatGPT</h1>
        <p className="cuv-lede">
          You can now go from a single product image to a complete UGC style ad
          without manually jumping between multiple AI tools.
        </p>
        <p>
          The setup connects Higgsfield directly to ChatGPT. Once connected,
          ChatGPT can help you come up with the concept, create the shots, and
          generate the video from the same conversation.
        </p>
        <nav className="cuv-toc" aria-label="Steps">
          {TOC.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="cuv-section" id="need">
        <h2>What you need</h2>
        <ul className="cuv-list">
          {NEED_ITEMS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="cuv-section" id="connect">
        <h2>Step 1: Connect Higgsfield to ChatGPT</h2>
        <ol className="cuv-olist">
          {CONNECT_STEPS.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <p className="cuv-note">
          Once that is done, you can use Higgsfield directly from your ChatGPT
          conversations.
        </p>
      </section>

      <section className="cuv-section" id="upload">
        <h2>Step 2: Upload your product</h2>
        <p>
          Start a new ChatGPT conversation and upload a clear photo of the
          product you want to advertise.
        </p>
        <p>Ideally, use an image where:</p>
        <ul className="cuv-list">
          {IMAGE_CHECKS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="cuv-section" id="concepts">
        <h2>Step 3: Ask ChatGPT for UGC concepts</h2>
        <p>Upload your product and paste this prompt:</p>
        <h3>Prompt 1: Generate concepts</h3>
        <CopyBlock label="Prompt · Generate concepts" text={PROMPT_CONCEPTS} />
        <p>
          ChatGPT should now give you several directions you can take the ad.
          Pick the concept you like.
        </p>
      </section>

      <section className="cuv-section" id="video">
        <h2>Step 4: Turn the concept into a video</h2>
        <p>After choosing a concept, paste this:</p>
        <h3>Prompt 2: Create the video</h3>
        <CopyBlock label="Prompt · Create the video" text={PROMPT_VIDEO} />
        <p>
          ChatGPT can now coordinate the creation from the conversation instead
          of you manually copying prompts and assets from tool to tool.
        </p>
      </section>

      <section className="cuv-section" id="optional">
        <h2>Optional: Make it feel more like real UGC</h2>
        <p>You can add this instruction before generation:</p>
        <CopyBlock
          label="Prompt · More like real UGC"
          text={PROMPT_IMPERFECT}
        />
      </section>

      <section className="cuv-section" id="variations">
        <h2>Want multiple versions for a brand?</h2>
        <p>After the first video is complete, ask:</p>
        <CopyBlock
          label="Prompt · Ad variations"
          text={PROMPT_VARIATIONS}
        />
        <p>
          This is especially useful if you&apos;re creating content for brands
          because one product can quickly become several different ad creatives.
        </p>
      </section>

      <section className="cuv-section" id="money">
        <h2>How you can make money with this</h2>
        <p>You don&apos;t have to own the product.</p>
        <p>
          You can approach ecommerce brands, beauty brands, fashion companies,
          apps, food brands and other businesses and offer to create AI assisted
          UGC ads for their products.
        </p>
        <p>
          Instead of selling &quot;an AI video&quot;, sell the finished creative.
          For example:
        </p>
        <ul className="cuv-list">
          {MONEY_PACKAGES.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>
          The value is in helping the brand produce more creative without
          organizing a full traditional shoot.
        </p>
        <p>
          Save these prompts and experiment with different products, creators,
          hooks and ad concepts.
        </p>
      </section>
    </div>
  );
}
