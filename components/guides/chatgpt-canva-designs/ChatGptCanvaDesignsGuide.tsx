"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUp } from "@phosphor-icons/react";

import { BATCH_PROMPT, CREATE_PROMPT, EDIT_PROMPT } from "./data";
import "./chatgpt-canva-designs.css";

const prompts = { create: CREATE_PROMPT, edit: EDIT_PROMPT, batch: BATCH_PROMPT };
type PromptId = keyof typeof prompts;

function CopyButton({ id }: { id: PromptId }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(prompts[id]);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = prompts[id];
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  }

  return (
    <button className="cc-copy" onClick={copy} type="button">
      {copied ? "Copied" : "Copy prompt"}
    </button>
  );
}

function PromptCard({ id, label }: { id: PromptId; label: string }) {
  return (
    <div className="cc-prompt-card">
      <div className="cc-prompt-header">
        <span>{label}</span>
        <CopyButton id={id} />
      </div>
      <pre>{prompts[id]}</pre>
    </div>
  );
}

export default function ChatGptCanvaDesignsGuide() {
  return (
    <main className="cc-guide">
      <Link href="/guide" className="cc-back">
        <ArrowLeft aria-hidden />
        All guides
      </Link>

      <header className="cc-hero">
        <p className="cc-eyebrow">Mercy Thaddeus guide</p>
        <h1>Create Canva designs directly inside ChatGPT</h1>
        <p className="cc-lede">
          Connect Canva to ChatGPT, use strong visual references, create an
          editable carousel, then reuse the same design system to batch your
          next 20 posts.
        </p>
        <a className="cc-start" href="#setup">
          Start the setup <span aria-hidden>↓</span>
        </a>
      </header>

      <section className="cc-section cc-intro">
        <div className="cc-number">01</div>
        <div>
          <h2>What you need</h2>
          <p>
            You need a ChatGPT account, a Canva account and one or two visual
            references. Pinterest is useful here because you can quickly find
            carousel, poster and flyer styles that match the kind of work you
            want to create.
          </p>
        </div>
      </section>

      <section className="cc-section" id="setup">
        <div className="cc-number">02</div>
        <div>
          <h2>Connect Canva to ChatGPT</h2>
          <ol>
            <li>Open ChatGPT.</li>
            <li>Open Apps or Plugins.</li>
            <li>Search for Canva.</li>
            <li>Select Canva and install the app.</li>
            <li>Follow the connection flow and sign in to the Canva account you want to use.</li>
          </ol>
          <p>
            After the connection is complete, mention <code>@Canva</code> in
            your chat whenever you want ChatGPT to create or work with a Canva
            design.
          </p>
        </div>
      </section>

      <section className="cc-section">
        <div className="cc-number">03</div>
        <div>
          <h2>Find visual references before you design</h2>
          <p>
            The fastest way to get a better result is to give ChatGPT a clear
            visual direction before asking it to design anything.
          </p>
          <p>Go to Pinterest and search for things like:</p>
          <ul>
            <li>editorial Instagram carousel</li>
            <li>minimal social media carousel</li>
            <li>magazine style carousel</li>
            <li>modern event flyer</li>
            <li>clean poster design</li>
          </ul>
          <p>
            Pick one or two references you genuinely like and upload them to
            ChatGPT. The goal is not to copy someone else&apos;s design exactly.
            You are giving ChatGPT a clear sense of typography, spacing,
            composition and mood.
          </p>
        </div>
      </section>

      <section className="cc-section">
        <div className="cc-number">04</div>
        <div>
          <h2>Use this exact prompt to create the carousel</h2>
          <p>
            After uploading your reference images, mention <code>@Canva</code>
            and paste this prompt. It is already written for the carousel shown
            in the tutorial.
          </p>
          <PromptCard id="create" label="Carousel prompt" />
        </div>
      </section>

      <section className="cc-section">
        <div className="cc-number">05</div>
        <div>
          <h2>Clean up the first result</h2>
          <p>
            The first design does not have to be final. Keep the conversation
            going and ask ChatGPT to tighten the design before you move to Canva.
          </p>
          <PromptCard id="edit" label="Cleanup prompt" />
          <p className="cc-note">
            You can also make direct requests such as &ldquo;make slide 3
            simpler&rdquo;, &ldquo;use more whitespace&rdquo;, &ldquo;replace the image
            on slide 5&rdquo; or &ldquo;make the headline larger&rdquo;.
          </p>
        </div>
      </section>

      <section className="cc-section">
        <div className="cc-number">06</div>
        <div>
          <h2>Open the design in Canva</h2>
          <p>
            Once the direction is right, open the design in Canva. From there
            you can make the final edits to text, images, colors, spacing and
            layout before you publish.
          </p>
          <p>
            ChatGPT helps you get through the blank page quickly, while Canva
            still gives you normal editing control.
          </p>
        </div>
      </section>

      <section className="cc-section">
        <div className="cc-number">07</div>
        <div>
          <h2>Batch your next 20 posts</h2>
          <p>
            Once you have one design system you like, stop rebuilding every post
            from zero. Use the approved carousel as the visual direction for a batch.
          </p>
          <PromptCard id="batch" label="20-post batch prompt" />
        </div>
      </section>

      <section className="cc-section">
        <div className="cc-number">08</div>
        <div>
          <h2>A few things that improve the result</h2>
          <ul>
            <li>Use references you actually like. AI cannot make up for weak taste.</li>
            <li>Give Canva the finished copy instead of asking it to invent everything at once.</li>
            <li>Keep one main point on each slide.</li>
            <li>Ask for editable text so you can make final changes in Canva.</li>
            <li>Reuse a design system after you find one that works.</li>
            <li>Check every slide on your phone before publishing.</li>
          </ul>
        </div>
      </section>

      <footer className="cc-cta">
        <p className="cc-eyebrow">Next step</p>
        <h2>Build one good template, then reuse it.</h2>
        <p>
          Start with one carousel. Get the style right. Then use the batch prompt
          above to turn it into a repeatable content workflow.
        </p>
        <a className="cc-return" href="#setup">
          Back to the setup <ArrowUp aria-hidden />
        </a>
      </footer>
    </main>
  );
}
