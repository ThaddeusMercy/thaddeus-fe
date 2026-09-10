"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";
import prompts from "./prompts.json";
import "../ai-second-brain/ai-second-brain.css";
import "./chatgpt-sort-files.css";

function CopyPrompt({ label, text }: { label: string; text: string }) {
  const [status, setStatus] = useState("Copy prompt");
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
    setStatus(copied ? "Copied" : "Select the text to copy");
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus("Copy prompt"), 2500);
  }

  return (
    <div className="asb-block">
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

export default function ChatGptSortFilesGuide() {
  return (
    <article className="asb-guide sort-guide">
      <Link href="/guide" className="asb-back">
        <ArrowLeft className="h-4 w-4" aria-hidden />All guides
      </Link>

      <header className="asb-hero">
        <p className="asb-eyebrow">ChatGPT Work · Files & storage</p>
        <h1>Use ChatGPT to sort your PC files and clean up storage</h1>
        <p className="asb-lede">If your Desktop or Downloads folder is full of screenshots, photos, PDFs, videos and random files, ChatGPT can help you organize everything and figure out what is taking up space.</p>
        <p className="asb-meta">By Mercy Thaddeus · Updated 10 September 2026</p>
      </header>

      <section className="asb-section" aria-label="Start here">
        <p>You will use two prompts. The first sorts your files without deleting anything. The second checks your storage and creates a cleanup plan for you to review.</p>
        <nav className="asb-map" aria-label="The two prompts">
          <a href="#sort-files" className="asb-map-item">
            <span className="asb-map-n">01</span>
            <div><strong>Sort your files</strong><span>Create sensible folders and keep every file.</span></div>
          </a>
          <a href="#review-storage" className="asb-map-item">
            <span className="asb-map-n">02</span>
            <div><strong>Review your storage</strong><span>Find large files and duplicates. Approve what goes.</span></div>
          </a>
        </nav>
        <p className="sort-download"><a href="/guides/chatgpt-sort-files/prompts.txt" download="chatgpt-sort-prompts.txt">Download both prompts as a text file</a></p>
        <p className="sort-small">These are the exact prompts shown in my animated demo. The example files and results in that demo are illustrative; your folder structure and potential savings will depend on your own files.</p>
      </section>

      <section className="asb-section" id="setup">
        <h2>What you need</h2>
        <ul>
          <li>The ChatGPT desktop app.</li>
          <li>Access to <strong>Work</strong> and local files.</li>
          <li>One folder you want ChatGPT to work on.</li>
        </ul>
        <p>I recommend starting with your Desktop or Downloads folder instead of giving it access to everything at once. For a first try, use a small folder containing copies of a few files.</p>
        <h3>Connect your folder</h3>
        <ol className="asb-steps">
          <li><strong>Open the desktop app and select Work.</strong>Keep <strong className="sort-inline">Work locally</strong> selected so the task can use files on your computer.</li>
          <li><strong>Choose or create a local project.</strong>Open the project menu, select <strong className="sort-inline">Edit project → Add folder</strong>, and choose the folder you want to organize.</li>
          <li><strong>Check the selected folder.</strong>Make sure it is the folder you intended, then open a task in that project and paste the first prompt below.</li>
        </ol>
        <p className="sort-small">Available controls depend on your app version, account and workspace permissions. If Work or local folder access is missing, check the <a href="https://learn.chatgpt.com/docs/get-started-with-work" target="_blank" rel="noopener noreferrer">official Work setup</a> and <a href="https://learn.chatgpt.com/docs/projects" target="_blank" rel="noopener noreferrer">local project instructions</a>.</p>
      </section>

      <section className="asb-section" id="sort-files">
        <p className="asb-num">Prompt 01</p>
        <h2>Sort your files</h2>
        <p>Paste this into Work after selecting the folder you want to organize:</p>
        <CopyPrompt label="Organization prompt" text={prompts.organize} />
        <p>This asks ChatGPT to inspect the loose files, create a simple folder structure and move each file into a sensible place. Existing folders, filenames and file contents should stay intact.</p>
        <h3>What the result might look like</h3>
        <ul className="asb-check">
          <li><strong>Screenshots</strong> — screen captures.</li>
          <li><strong>Photos</strong> — photos and other images.</li>
          <li><strong>Documents</strong> — PDFs and other documents.</li>
          <li><strong>Videos</strong> — video files and exports.</li>
          <li><strong>Needs Review</strong> — files whose purpose is unclear.</li>
        </ul>
        <p>The exact folders should follow what is actually there. Installers, archives or a specific project may deserve their own folder if that makes the structure more useful.</p>
        <div className="asb-note"><p>When it finishes, check the new folders, the file counts and anything in Needs Review. Keep the move log so you can see where each file went.</p></div>
      </section>

      <section className="asb-section" id="review-storage">
        <p className="asb-num">Prompt 02</p>
        <h2>Clean up your storage</h2>
        <p>Sorting files makes your computer easier to use, but moving them into folders does not, by itself, free storage. Use this second prompt to find what is taking up space:</p>
        <CopyPrompt label="Storage review prompt" text={prompts.storage} />
        <p>This asks for a numbered cleanup plan before any files are changed or deleted. You can review the largest files and confirmed duplicates, then decide what you actually want to remove.</p>
        <h3>Check the plan before approving</h3>
        <ol>
          <li>Check the exact path so you know which file each item refers to.</li>
          <li>Look at its size and the potential storage savings.</li>
          <li>For duplicates, check that the contents were verified and that at least one copy will remain.</li>
          <li>Review large videos, old downloads, installers and archives yourself. An old file is not automatically an unwanted file.</li>
          <li>Ask for the reason behind any recommendation you do not understand.</li>
        </ol>
      </section>

      <section className="asb-section" id="approve-cleanup">
        <h2>Approve only the items you choose</h2>
        <p>Once you have checked the plan, reply with specific item numbers or exact file paths. For example:</p>
        <blockquote className="sort-reply">Move items 2, 4, 7 and 9 from this plan to Trash or Recycle Bin. Leave everything else. Do not permanently delete anything or empty the bin.</blockquote>
        <p>If you only want duplicates removed, choose the numbered items confirmed as duplicates and keep the copy you want. Ask ChatGPT to report what it actually moved.</p>
        <div className="asb-note"><p><strong>Potential savings are not the same as space already freed.</strong> Files in Trash or Recycle Bin can still take up storage until you empty it. Check that you have kept everything you need before doing that final step yourself.</p></div>
      </section>

      <section className="asb-section" id="safer-use">
        <h2>A safer way to use it</h2>
        <p>Don’t start by asking ChatGPT to “delete everything I don’t need.” Let it inspect first, show you what it found, and then approve the files yourself.</p>
        <ul>
          <li>Start with one folder and keep a backup of anything important.</li>
          <li>Keep project folders, application files, backups and system files out of a casual cleanup.</li>
          <li>Check anything you do not recognize before approving it.</li>
          <li>If recoverable removal is unavailable, stop before anything is permanently deleted.</li>
        </ul>
        <p>Let ChatGPT do the boring part of finding and organizing everything, while you make the final decision about what gets removed.</p>
        <p className="asb-sig">Mercy Thaddeus · SORT guide · 10 September 2026</p>
      </section>
    </article>
  );
}
