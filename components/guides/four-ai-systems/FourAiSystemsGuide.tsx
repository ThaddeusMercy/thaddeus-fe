"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";
import { trackEvent } from "@/lib/analytics";
import "../chatgpt-study-codes/chatgpt-study-codes.css";
import "../claude-job-search/claude-job-search.css";

function CopyBlock({ label, text }: { label: string; text: string }) {
  const [status, setStatus] = useState("Copy");
  const block = useRef<HTMLPreElement>(null);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setStatus("Copied");
      trackEvent("guide_copy", { guide: "four_ai_systems", block: label });
    } catch {
      if (block.current) {
        const range = document.createRange();
        range.selectNodeContents(block.current);
        const selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);
      }
      setStatus("Select & copy");
    }
    setTimeout(() => setStatus("Copy"), 2000);
  }

  return (
    <div className="scs-block">
      <div className="scs-block-head">
        <span className="scs-block-label">{label}</span>
        <button type="button" className={`scs-copy${status === "Copied" ? " scs-done" : ""}`} onClick={copy} aria-label={`Copy ${label}`}>
          <span aria-live="polite">{status}</span>
        </button>
      </div>
      <pre ref={block}>{text}</pre>
    </div>
  );
}

export default function FourAiSystemsGuide() {
  return (
    <div className="scs-guide js-guide">
      <Link href="/guide" className="scs-back"><ArrowLeft className="h-4 w-4" aria-hidden />All guides</Link>
      <header className="scs-hero">
        <p className="scs-eyebrow">AI systems · Agents · Weekend build</p>
        <h1>The 4 AI systems you can build in one weekend</h1>
        <p className="scs-lede">An AI second brain, an always-on agent, an executive assistant and a marketing and content agent. You build each one once, and it gets more useful every time you use it. Here’s what each system does, what to build it with, and what to type.</p>
        <p className="scs-meta">By Mercy Thaddeus · Checked 19 October 2026</p>
        <nav className="scs-toc" aria-label="Guide sections">
          <a href="#plan">The weekend plan</a><a href="#brain">1. Second brain</a><a href="#always-on">2. Always-on agent</a><a href="#assistant">3. Executive assistant</a><a href="#marketing">4. Marketing agent</a><a href="#safety">Stay in control</a><a href="#next">Go further</a>
        </nav>
      </header>

      <section id="plan" className="scs-section"><span className="scs-num">00 / THE WEEKEND PLAN</span><h2>Build them in this order.</h2>
<p>Each system feeds the next one. Your second brain holds what you know, so every agent you add later can use it instead of starting from zero.</p>
<div className="js-requirements">
<div className="js-requirement"><strong>Saturday morning · Second brain</strong><p>Set up the vault and add your first business notes, ideas and examples of your writing.</p></div>
<div className="js-requirement"><strong>Saturday afternoon · Always-on agent</strong><p>Pick one agent and give it one recurring job that matters to you.</p></div>
<div className="js-requirement"><strong>Sunday morning · Executive assistant</strong><p>Write the instructions that turn one agent into your chief of staff.</p></div>
<div className="js-requirement"><strong>Sunday afternoon · Marketing agent</strong><p>Connect your content tools and run your first research-to-post workflow.</p></div>
</div>
<div className="scs-note"><p><strong>Start small.</strong> One working system you actually use beats four half-finished ones. If you only get through the first two this weekend, that’s a good weekend.</p></div>
</section>

      <section id="brain" className="scs-section"><span className="scs-num">01 / AI SECOND BRAIN</span><h2>An AI system that never forgets.</h2>
<p>Your second brain is a knowledge base of everything you work on: your business, ideas, research, documents, notes and the way you write. Once it exists, you stop re-explaining yourself to AI in every new chat.</p>
<h3>What to build it with</h3>
<p><a href="https://obsidian.md/download" target="_blank" rel="noopener noreferrer">Obsidian</a> stores everything as plain text files in a folder on your computer. <a href="https://code.claude.com/docs/en/overview" target="_blank" rel="noopener noreferrer">Claude Code</a> can read and organise that folder for you.</p>
<ol>
<li>Download Obsidian and create a new vault, for example <em>Business Second Brain</em>.</li>
<li>Install Claude Code using the official instructions, then open it inside your vault folder.</li>
<li>Paste the prompt below to set up the structure.</li>
</ol>
<CopyBlock label={"In Claude Code · set up the vault"} text={"This folder is my Obsidian vault and my AI second brain. Create these folders: Business, Ideas, Research, Documents, Notes, Style. In each one, add a short README.md that explains what belongs there. Then create Home.md that links to every folder. Ask me 10 questions about my business, my audience, my offers and how I like to write, and save my answers into the right folders as separate notes."} />
<CopyBlock label={"In Claude Code · capture your style"} text={"Read everything in my Style folder and the examples I paste below. Write Style/My-Voice.md that describes how I write: sentence length, tone, words I use often, words I never use, how I open and close posts. Keep it under one page so other AI tools can follow it.\n\n[Paste 3 to 5 posts, emails or captions you wrote]"} />
<p>Want the full walkthrough with folder templates and weekly maintenance prompts? <Link href="/guide/ai-second-brain">Read the full second brain guide</Link>.</p>
</section>

      <section id="always-on" className="scs-section"><span className="scs-num">02 / ALWAYS-ON AI AGENT</span><h2>An agent that texts you first.</h2>
<p>With a normal chatbot, you always have to open ChatGPT or Claude and ask before anything happens. An always-on agent is proactive. It keeps working when the app is closed, notices things, and can message you first or take on a task without you asking.</p>
<h3>Pick one</h3>
<div className="js-table-wrap"><table>
<thead><tr><th>Agent</th><th>Best if</th></tr></thead>
<tbody>
<tr><td>ChatGPT Dots</td><td>Most of your work already happens in ChatGPT.</td></tr>
<tr><td>Grok Bot</td><td>You want several bots, each with its own job.</td></tr>
<tr><td>Meta Muse</td><td>Your business runs on Instagram, Facebook and WhatsApp.</td></tr>
<tr><td>OpenClaw</td><td>You want an open-source agent you run and control yourself.</td></tr>
<tr><td>Hermes Agent</td><td>You want Nous Research’s open-source agent on your own machine.</td></tr>
</tbody></table></div>
<p>Not sure between the first three? <Link href="/guide/chatgpt-dots-vs-grok-bot-vs-meta-muse">Read the Dots vs Grok Bot vs Muse comparison</Link>.</p>
<h3>Give it one recurring job</h3>
<p>Start with something that makes or saves you money. Mine follows up with leads and past clients I would have forgotten about. Adapt this to the agent you chose:</p>
<CopyBlock label={"For your always-on agent · first job"} text={"Every weekday at 9am, check my email and DMs for leads and clients who haven’t heard from me in 14 days or more. For each one, give me: who they are, what we last discussed, and a short follow-up message in my voice. Don’t send anything without my approval. Message me with the list, and if nobody needs a follow-up, say so in one line."} />
<div className="scs-note"><p><strong>Approve before it acts.</strong> Keep “don’t send without my approval” in every instruction until you trust how the agent behaves. Give it access only to the accounts this job needs.</p></div>
</section>

      <section id="assistant" className="scs-section"><span className="scs-num">03 / EXECUTIVE ASSISTANT</span><h2>Your chief of staff.</h2>
<p>Once you have more than one agent, you need one that sits on top of the others. Your executive assistant knows your priorities, reads your second brain, checks what your other agents did, and tells you what needs your attention. Mine is called Maya.</p>
<h3>How to set it up</h3>
<ol>
<li>Use the agent you trust most, or the one with access to most of your tools.</li>
<li>Give it a name and the instructions below. Save them in your second brain as <em>Business/Chief-of-Staff.md</em>, so they’re easy to edit.</li>
<li>Connect it to your second brain and your calendar first. Add more access later.</li>
</ol>
<CopyBlock label={"Chief of staff · instructions"} text={"You are [Name], my chief of staff. Your job is to keep my business moving and protect my time.\n\nEvery morning:\n1. Read my priorities in Business/Priorities.md and today’s calendar.\n2. Check what my other agents did since yesterday and flag anything that failed or needs my approval.\n3. Send me one short brief: the 3 things that matter most today, anything waiting on me, and anything you’d drop.\n\nRules: never send messages, spend money or delete anything without asking me first. If you are not sure, ask. Keep every message short."} />
<CopyBlock label={"Chief of staff · weekly review"} text={"Every Friday at 4pm, review my week. What moved forward, what got stuck, which follow-ups are still open, and what should I focus on next week? Update Business/Priorities.md with your suggested top 3 and send me the summary for approval."} />
</section>

      <section id="marketing" className="scs-section"><span className="scs-num">04 / MARKETING & CONTENT AGENT</span><h2>Research, create and post, every day.</h2>
<p>This agent monitors major updates, researches trending and relevant topics, and reads your social analytics. Then it turns what it finds into content. I set mine up to research, create and post carousels for me every single day.</p>
<h3>Connect three things</h3>
<div className="js-requirements">
<div className="js-requirement"><strong>Your sources</strong><p>The news sites, newsletters and accounts you trust in your industry. Save the list in your second brain.</p></div>
<div className="js-requirement"><strong>Your analytics</strong><p>A scheduling and analytics tool such as Metricool, connected to ChatGPT or Claude, so the agent can see what performs.</p></div>
<div className="js-requirement"><strong>Your design tool</strong><p>Canva, or your carousel templates, so every post looks like your brand.</p></div>
<div className="js-requirement"><strong>Your voice</strong><p>The <em>My-Voice.md</em> note from your second brain, so the captions sound like you.</p></div>
</div>
<CopyBlock label={"Marketing agent · daily run"} text={"Every morning:\n1. Check my sources list for the biggest updates in [your industry] from the last 24 hours.\n2. Look at my analytics and tell me which of my last 10 posts performed best and why.\n3. Pick the one topic my audience is most likely to care about today.\n4. Draft a 7-slide carousel on it: a strong hook on slide 1, one idea per slide, a clear call to action on the last slide. Write the caption in my voice using Style/My-Voice.md.\n5. Send me the draft for approval. When I approve, schedule it for my best posting time."} />
<div className="scs-note"><p><strong>Check facts before you post.</strong> Ask the agent to include the source link for every claim, and open it before you approve.</p></div>
</section>

      <section id="safety" className="scs-section"><span className="scs-num">05 / STAY IN CONTROL</span><h2>Simple rules for every agent.</h2>
<ul>
<li>Give each agent only the access its job needs.</li>
<li>Require your approval before anything is sent, posted, paid for or deleted.</li>
<li>Keep your instructions in your second brain, so you can see and edit them in one place.</li>
<li>Review what your agents did once a week, and switch off anything you don’t use.</li>
</ul>
</section>

      <section id="next" className="scs-section"><span className="scs-num">06 / GO FURTHER</span><h2>Want a full step-by-step build?</h2>
<p>I teach how to set up systems like these from zero, click by click, inside AI University. You’ll build alongside a community of people doing the same thing.</p>
<p><a className="scs-cta" href="https://academy.attentionfactory.io/ai-university?ref=mercythaddeus" target="_blank" rel="noopener noreferrer">Join AI University ↗</a></p>
</section>
    </div>
  );
}
