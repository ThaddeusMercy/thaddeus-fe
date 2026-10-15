"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";
import { trackEvent } from "@/lib/analytics";
import "../chatgpt-study-codes/chatgpt-study-codes.css";
import "./claude-job-search.css";

function CopyBlock({ label, text }: { label: string; text: string }) {
  const [status, setStatus] = useState("Copy");
  const block = useRef<HTMLPreElement>(null);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setStatus("Copied");
      trackEvent("guide_copy", { guide: "claude_job_search", block: label });
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
        <span className="scs-block-label">{label}</span>        <button type="button" className={`scs-copy${status === "Copied" ? " scs-done" : ""}`} onClick={copy} aria-label={`Copy ${label}`}>
          <span aria-live="polite">{status}</span>        </button>
      </div>
      <pre ref={block}>{text}</pre>
    </div>
  );
}

const REVIEW_ITEMS = [
  "My employers, dates, qualifications, skills and results are accurate.",
  "I checked the location, eligibility and essential requirements.",
  "The company name, role and examples match this application.",
  "I opened the final files and checked formatting, contact details and links.",
  "I know what I am submitting and have followed the employer’s instructions.",
];

function ReviewChecklist() {
  const [checked, setChecked] = useState<boolean[]>(REVIEW_ITEMS.map(() => false));
  useEffect(() => {
    try {
      const saved: unknown = JSON.parse(localStorage.getItem("claude-job-search-review") || "null");
      if (Array.isArray(saved)) setChecked(REVIEW_ITEMS.map((_, i) => saved[i] === true));
    } catch { /* Local storage is optional. */ }
  }, []);
  function toggle(index: number) {
    const next = checked.map((value, i) => i === index ? !value : value);
    setChecked(next);
    try { localStorage.setItem("claude-job-search-review", JSON.stringify(next)); } catch {}
  }
  return (
    <div>
      <ul className="js-review">
        {REVIEW_ITEMS.map((item, i) => <li key={item}><label><input type="checkbox" checked={checked[i]} onChange={() => toggle(i)} /><span>{item}</span></label></li>)}
      </ul>
      <p className="js-small" aria-live="polite">{checked.filter(Boolean).length} of {REVIEW_ITEMS.length} checks done</p>
    </div>
  );
}

export default function ClaudeJobSearchGuide() {
  return (
    <div className="scs-guide js-guide">
      <Link href="/guide" className="scs-back"><ArrowLeft className="h-4 w-4" aria-hidden />All guides</Link>
      <header className="scs-hero">
        <p className="scs-eyebrow">Claude Code · Job search · Setup + prompts</p>
        <h1>Run your job search with Claude</h1>
        <p className="scs-lede">Find roles worth your time, tailor your CV and cover letter, and practise for the interview. Here’s the repo, how to set it up, and what to type at each step.</p>
        <p className="scs-meta">By Mercy Thaddeus · Checked 15 October 2026</p>
        <p><a className="scs-cta" href="https://github.com/MadsLorentzen/ai-job-search" target="_blank" rel="noopener noreferrer">Open the GitHub repo ↗</a></p>
        <nav className="scs-toc" aria-label="Guide sections">
          <a href="#before">Before you start</a><a href="#install">Set it up</a><a href="#profile">Your background</a><a href="#find">Find jobs</a><a href="#apply">Tailor your CV</a><a href="#interview">Interview practice</a><a href="#check">Final checklist</a><a href="#help">Troubleshooting</a>        </nav>
      </header>

      <section id="before" className="scs-section"><span className="scs-num">01 / BEFORE YOU START</span><h2>Get the right version of Claude.</h2>
<p><a href="https://github.com/MadsLorentzen/ai-job-search" target="_blank" rel="noopener">AI Job Search</a> is an open-source project by Mads Lorentzen, built around <strong>Claude Code</strong>. It includes the instructions, commands and templates for a repeatable job-search workflow.</p>
<div className="scs-note"><p><strong>The repo is free. Claude Code access can cost money.</strong> Use an eligible Claude subscription or API billing. This guide follows the terminal setup; pasting the repo link into an ordinary Claude chat does not install the local workflow.</p>
</div>
<p className="js-sources">Sources: <a href="https://github.com/MadsLorentzen/ai-job-search#readme">Project README</a> · <a href="https://code.claude.com/docs/en/quickstart">Claude Code quickstart</a></p>
<div className="js-requirements"><div className="js-requirement"><strong>A computer + Claude Code</strong><p>Use the <a href="https://code.claude.com/docs/en/quickstart">official installation guide</a> for Mac, Windows or Linux, then sign in.</p>
</div>
<div className="js-requirement"><strong>Your actual CV and experience</strong><p>Have your roles, dates, skills, qualifications and a few real work examples ready.</p>
</div>
<div className="js-requirement"><strong>Git, Python 3.10+ and Bun</strong><p><a href="https://git-scm.com/downloads">Git</a> downloads the project; Python and Bun support its tools. The setup prompt below checks what is missing.</p>
</div>
<div className="js-requirement"><strong>LaTeX for the PDF templates</strong><p>The stock CV needs LuaLaTeX; the cover letter needs XeLaTeX. Follow the repo’s <a href="https://github.com/MadsLorentzen/ai-job-search/blob/master/SETUP.md">platform-specific setup instructions</a>.</p>
</div>
</div>
</section>

      <section id="install" className="scs-section"><span className="scs-num">02 / SET IT UP</span><h2>Make a local copy.</h2>
<p>Once Claude Code and Git are installed, open Terminal on Mac or PowerShell on Windows. Run these lines one at a time from the folder where you want to keep your job search.</p>

<CopyBlock label={"In your terminal"} text={"git clone https://github.com/MadsLorentzen/ai-job-search.git\ncd ai-job-search\ngit remote rename origin upstream\nclaude"} />
<p>This creates a local project and names the original repo <code>upstream</code> for future updates. Claude Code should now be open inside <code>ai-job-search</code>.</p>
<div className="scs-note"><p><strong>Keep your personal copy private.</strong> Setup writes some of your personal information into tracked files. A public GitHub fork can expose that information if you push it. Keep this copy on your computer, or use a separate private repository for backup.</p>
</div>
<p className="js-sources">Source: <a href="https://github.com/MadsLorentzen/ai-job-search/blob/master/SETUP.md#8-pulling-upstream-updates-into-your-fork">The repo’s privacy and update guidance</a></p>
<h3>Ask Claude to finish the setup</h3>
<p>Copy this into the Claude Code session. Read its proposed installation steps and approve the ones you understand.</p>

<CopyBlock label={"In Claude Code · setup prompt"} text={"I want to use this AI Job Search project for my own job search. Read README.md and SETUP.md, detect my operating system, and check the required dependencies. Tell me what is already installed and what is missing. Help me install only the missing tools, then run the portal dependency installer and verify the CV and cover-letter template requirements. Keep my profile local. Do not push personal files to GitHub. When setup is ready, tell me to run /setup."} />
<details><summary>If you prefer to run the portal installer yourself</summary>
<div><p>In the project folder, run this in your terminal after Python and Bun are installed. On Windows, use <code>python</code> if <code>python3</code> is unavailable.</p>

<CopyBlock label={"In your terminal"} text={"python3 tools/install_portal_clis.py"} />
<p>Then start Claude Code again with <code>claude</code>. The full dependency and PDF instructions are in <a href="https://github.com/MadsLorentzen/ai-job-search/blob/master/SETUP.md">SETUP.md</a>.</p>
</div>
</details>
</section>

      <section id="profile" className="scs-section"><span className="scs-num">03 / ADD YOUR BACKGROUND</span><h2>Give it something real to work with.</h2>

<CopyBlock label={"In Claude Code"} text={"/setup"} />
<p>You can import a CV, give it documents from the project’s <code>documents/</code> folder, or answer its questions. Review the resulting profile before moving on.</p>
<p>Be specific about your target role, experience level, location, remote preferences and work authorisation. Include real examples of what you have done, even if they came from school, volunteering or personal projects.</p>

<CopyBlock label={"Optional follow-up prompt"} text={"My target roles are [roles]. I am based in [country/city] and want [remote/hybrid/onsite] work. My work authorisation is [details]. Ask me for anything missing. Separate proven experience from skills I am still learning. Do not invent employers, qualifications, dates, achievements or numbers. Show me the profile summary so I can correct it before we search."} />
<p className="js-sources">Source: <a href="https://github.com/MadsLorentzen/ai-job-search/blob/master/SETUP.md#4-run-the-setup-interview">Profile setup options</a></p>
</section>

      <section id="find" className="scs-section"><span className="scs-num">04 / FIND &amp; EVALUATE JOBS</span><h2>Start with one role.</h2>
<p>For the built-in job search, run:</p>

<CopyBlock label={"In Claude Code"} text={"/scrape"} />
<p>It searches configured portals and presents matches. Use <code>/rank</code> if you want a ranked shortlist from the results.</p>
<div className="scs-note"><p><strong>Applying outside Denmark?</strong> The project’s search tools have a Danish-market focus, with some broader tools too. Coverage depends on the portal. For a straightforward first try in Nigeria or elsewhere, find a relevant listing yourself and use its link or full description below. You can explore <code>/add-portal</code> later for another job board.</p>
</div>
<p className="js-sources">Source: <a href="https://github.com/MadsLorentzen/ai-job-search#readme">Search workflow and geographic coverage</a></p>

<CopyBlock label={"Your own job link · replace the bracketed text"} text={"/apply [paste the actual job-posting URL here]"} />
<p>If the site blocks access, replace the URL with the complete job description. Before asking for documents, use this follow-up:</p>

<CopyBlock label={"Fit-check prompt"} text={"Before drafting, compare this role with my profile. Show the requirements I meet, the gaps, and anything that is unclear. Check location, work authorisation and required qualifications. Separate must-haves from preferences. Explain whether this is a strong match, a stretch or a poor fit, using evidence from my background. Ask me about missing information."} />
<p>Treat the assessment as help deciding where to spend your time. It cannot know the employer’s final decision or guarantee an interview.</p>
</section>

      <section id="apply" className="scs-section"><span className="scs-num">05 / TAILOR YOUR APPLICATION</span><h2>Make the fit clear.</h2>
<p>If you want to proceed, let <code>/apply</code> prepare the CV and cover letter. The workflow evaluates the role, drafts the documents, runs a reviewer pass and revises them.</p>

<CopyBlock label={"Application prompt"} text={"Proceed with this application. Tailor my CV and cover letter to the job description. Use the employer's terminology where it accurately describes my experience. Emphasise relevant examples, keep my voice, and flag any claim that needs my confirmation. Do not add experience or metrics I have not supplied. Show me the finished drafts before any submission."} />
<h3>Get files you can actually use</h3>
<p>The stock templates produce LaTeX files. Ask Claude to compile the CV with <code>lualatex</code> and the cover letter with <code>xelatex</code>, then show you the saved PDF paths. Open both PDFs and check their layout. If your LaTeX installation is incomplete, ask for the missing-package error to be fixed first.</p>
<p>If you only need an editable draft for now, ask Claude for the final text to paste into your existing document template. Review and export that document yourself.</p>
<p><strong>You still submit the application.</strong> Check the employer’s instructions and upload the correct files through its application process.</p>
<p className="js-sources">Sources: <a href="https://github.com/MadsLorentzen/ai-job-search/blob/master/.claude/commands/apply.md">Application workflow</a> · <a href="https://github.com/MadsLorentzen/ai-job-search/blob/master/SETUP.md#7-compile-your-documents">PDF compilation</a></p>
</section>

      <section id="interview" className="scs-section"><span className="scs-num">06 / PRACTISE THE INTERVIEW</span><h2>Prepare for this job.</h2>
<p>Use the company name for your application:</p>

<CopyBlock label={"In Claude Code · replace the bracketed text"} text={"/interview [company name]"} />
<p>Give it the exact role, interview stage and the CV you submitted. If the application is not tracked yet, provide the posting and role details when asked. It can build a prep pack and run a mock interview in the conversation.</p>

<CopyBlock label={"Mock interview prompt"} text={"Run a mock interview for this role. I am preparing for [screening/technical/final] stage. Ask one question at a time and wait for my answer. Base your questions on the posting, my submitted CV and the gaps we identified. After each answer, tell me what was clear, what was missing and how to improve it using only my real experience. Include behavioural questions and help me organise answers with situation, task, action and result."} />
<p>These are informed practice questions, not a preview of exactly what the hiring manager will ask. After a real interview, <code>/outcome [company name]</code> lets you record what happened.</p>
<p className="js-sources">Source: <a href="https://github.com/MadsLorentzen/ai-job-search/blob/master/.claude/commands/interview.md">Interview command and mock-interview workflow</a></p>
</section>

      <section id="check" className="scs-section"><span className="scs-num">07 / BEFORE YOU SEND</span><h2>Do this final check.</h2>
<p>You should be able to explain and defend every line of the application. Use this checklist before you submit.</p>
<ReviewChecklist /><p className="js-small">These ticks are saved only in this browser. This guide does not collect your CV.</p>
<h3>Your command cheat sheet</h3>
<div className="js-table-wrap"><table><thead><tr><th>Command</th>
<th>Use it for</th>
</tr>
</thead>
<tbody><tr><td><code>/setup</code></td>
<td>Build or update your profile</td>
</tr>
<tr><td><code>/scrape</code></td>
<td>Search configured job portals</td>
</tr>
<tr><td><code>/rank</code></td>
<td>Rank the search results</td>
</tr>
<tr><td><code>/apply</code></td>
<td>Evaluate a posting and prepare application documents</td>
</tr>
<tr><td><code>/interview</code></td>
<td>Prepare for a specific role and practise</td>
</tr>
<tr><td><code>/outcome</code></td>
<td>Record application results and interview stages</td>
</tr>
</tbody>
</table>
</div>
</section>

      <section id="help" className="scs-section"><span className="scs-num">08 / IF YOU GET STUCK</span><h2>A few common fixes.</h2>
<details><summary>“Claude doesn’t recognise /setup.”</summary>
<div><p>Make sure you are in Claude Code, running inside the downloaded <code>ai-job-search</code> folder. Restart the session there after downloading the repo. Ask Claude to check that the project’s <code>.claude/commands</code> files are present.</p>
</div>
</details>
<details><summary>“It can’t read the job link.”</summary>
<div><p>Open the original listing yourself and paste its full text after <code>/apply</code>. Include the company, role, requirements, location and application instructions.</p>
</div>
</details>
<details><summary>“It finds jobs in the wrong country.”</summary>
<div><p>Run <code>/setup --section search</code> to review your preferences. Use direct job links while you check which portals support your location.</p>
</div>
</details>
<details><summary>“I have a .tex file, but no PDF.”</summary>
<div><p>That is the source document. Ask Claude to check the LaTeX engines and packages listed in <a href="https://github.com/MadsLorentzen/ai-job-search/blob/master/SETUP.md">SETUP.md</a> and compile it. A text draft in your own editor is another way to finish your application.</p>
</div>
</details>
<details><summary>“Does running on my machine mean it is fully offline?”</summary>
<div><p>No. The project files can live on your computer, but Claude Code uses an AI service and the search tools access the internet. Only provide documents you are comfortable processing with those services.</p>
</div>
</details>
<p className="js-sources">Sources: <a href="https://github.com/MadsLorentzen/ai-job-search/blob/master/SETUP.md">Setup and troubleshooting</a> · <a href="https://code.claude.com/docs/en/data-usage">Claude Code data usage</a></p>
</section>

      <div className="scs-section"><h2>Start with one real application.</h2>
<p>Set up your profile, choose one role, review the fit and improve the draft. That gives you a complete workflow you can repeat for the next application.</p>
<p><a href="https://github.com/MadsLorentzen/ai-job-search" target="_blank" rel="noopener">Open Mads Lorentzen’s AI Job Search repo ↗</a></p>
</div>

    
      <p className="js-small js-credit">Independent guide. Project credit: Mads Lorentzen. Not affiliated with Anthropic. Commands may change as the repo evolves.</p>
    </div>
  );
}
