"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ArrowLeft } from "@phosphor-icons/react";

import {
  CLAUDE_CONFIG_JSON,
  CONFIG_PATHS,
  FILE_TYPES,
  SIMPLE_PROMPT,
  SYSTEM_PROMPT,
  TOC_ITEMS,
} from "./data";
import "./markitdown-setup.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
});

function CopyPre({
  copyText,
  copyLabel = "Copy",
  children,
}: {
  copyText: string;
  copyLabel?: string;
  children: React.ReactNode;
}) {
  const [copied, setCopied] = useState(false);

  const onCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(copyText);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      console.error("Copy failed");
    }
  }, [copyText]);

  return (
    <pre className="md-pre">
      <button
        type="button"
        className={`md-copy${copied ? " md-copied" : ""}`}
        onClick={onCopy}
      >
        {copied ? "Copied" : copyLabel}
      </button>
      {children}
    </pre>
  );
}

export default function MarkItDownSetupGuide() {
  return (
    <div
      className={`markitdown-guide ${inter.variable} ${jetbrains.variable}`}
    >
      <div className="md-wrap">
        <Link href="/guide" className="md-back">
          <ArrowLeft className="h-4 w-4" aria-hidden />
          All guides
        </Link>
      </div>

      <div className="md-topnav">
        <div className="md-topnav-inner">
          <span className="md-topnav-brand">The Setup Guide</span>
          <span className="md-topnav-meta">No. 01 · MarkItDown</span>
        </div>
      </div>

      <div className="md-wrap">
        {/* Hero */}
        <section className="md-hero" style={{ borderTop: "none" }}>
          <div className="md-eyebrow">The Free Microsoft Tool</div>
          <h1 className="md-hero-title">
            Stop wasting <span className="md-accent">70%</span> of your tokens
            in Claude.
          </h1>
          <p className="md-hero-sub">
            A 5-minute setup that turns every PDF, Word doc, slide deck,
            spreadsheet, and YouTube link into clean Markdown the moment you
            upload it. Lower token usage, faster responses, sharper answers.
          </p>

          <div className="md-author">
            <div className="md-avatar">M</div>
            <div className="md-author-who">
              <span className="md-author-name">Mercy Thaddeus</span>
              <span className="md-author-handle">@mercythaddeus_</span>
            </div>
            <span className="md-badge">v1 · 2026</span>
          </div>

          <div className="md-stats">
            <div className="md-stat">
              <div className="md-stat-num">3,000</div>
              <div className="md-stat-lbl">Tokens per PDF page</div>
            </div>
            <div className="md-stat">
              <div className="md-stat-num">90,000</div>
              <div className="md-stat-lbl">For one 30-page file</div>
            </div>
            <div className="md-stat">
              <div className="md-stat-num">-70%</div>
              <div className="md-stat-lbl">After MarkItDown</div>
            </div>
          </div>

          <nav className="md-toc" aria-label="Guide contents">
            <div className="md-toc-lbl">Inside this guide</div>
            {TOC_ITEMS.map((item) => (
              <a key={item.id} href={`#${item.id}`}>
                <span className="md-toc-n">{item.n}</span>
                <span className="md-toc-t">{item.label}</span>
                <span className="md-toc-arrow">→</span>
              </a>
            ))}
          </nav>
        </section>

        {/* 01 Why */}
        <section id="why" className="md-section">
          <div className="md-sec-eyebrow">01 / Why this matters</div>
          <h2 className="md-sec-title">The token math nobody shows you.</h2>
          <p className="md-p">
            When you drop a PDF into Claude, the model does not just read the
            words. It processes the layout, the broken tables, the embedded
            images, and all the formatting metadata baked into the file. A
            single page can consume between{" "}
            <strong>1,500 and 3,000 tokens</strong>, so a 30-page document
            costs you up to <strong>90,000 tokens</strong> before you have asked
            a single question.
          </p>
          <p className="md-p">
            Markdown is the format Claude was trained on most heavily, so when
            you hand it the same content in clean Markdown instead, token usage
            drops by up to <span className="md-accent">70%</span> and the
            answers get noticeably sharper. <strong>MarkItDown</strong> is the
            free Microsoft tool that does the conversion for you, and it works
            with almost every file type you already use.
          </p>

          <div className="md-files">
            {FILE_TYPES.map((f) => (
              <div key={f.ext} className="md-file">
                {f.label}
                <span className="md-file-ext">{f.ext}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 02 Install */}
        <section id="install" className="md-section">
          <div className="md-sec-eyebrow">02 / Installation</div>
          <h3 className="md-step-title">
            <span className="md-pill">Step 01</span>
            Install the MarkItDown MCP server
          </h3>
          <p className="md-p">
            Open your terminal (Terminal on Mac, PowerShell on Windows) and
            paste the install command. This pulls down the package Microsoft
            published, which includes both the converter and the MCP server that
            Claude will talk to.
          </p>

          <CopyPre copyText="pip install markitdown-mcp">
            <span className="md-pre-com"># Install MarkItDown&apos;s MCP server</span>
            {"\n"}pip install markitdown-mcp
          </CopyPre>

          <div className="md-callout">
            <div className="md-callout-lbl">If pip is missing</div>
            <p>
              Install Python from{" "}
              <a
                className="md-link"
                href="https://www.python.org/downloads/"
                target="_blank"
                rel="noopener noreferrer"
              >
                python.org/downloads
              </a>{" "}
              first, then re-run the command above. On Mac, you can also use{" "}
              <span className="md-ic">brew install python</span> if you have
              Homebrew.
            </p>
          </div>

          <p className="md-p">
            That single command is the whole install. To confirm it worked, run{" "}
            <span className="md-ic">markitdown-mcp --help</span> and you should
            see the help output. If it prints, you are good for the next step.
          </p>
        </section>

        {/* 03 Connect */}
        <section id="connect" className="md-section">
          <div className="md-sec-eyebrow">03 / Connect to Claude</div>

          <h3 className="md-step-title">
            <span className="md-pill">Step 02</span>
            Open the Claude Desktop config file
          </h3>
          <p className="md-p">
            Claude Desktop reads its list of MCP servers from a single JSON
            file. Open Claude Desktop, click the menu in the top-left corner,
            choose <strong>Settings</strong>, then <strong>Developer</strong>,
            then click <strong>Edit Config</strong>. That opens the file you
            need, or shows you where it lives.
          </p>
          <p className="md-p">
            The path depends on your OS, in case you would rather open it
            manually:
          </p>

          <CopyPre
            copyText="~/Library/Application Support/Claude/claude_desktop_config.json"
            copyLabel="Copy mac"
          >
            <span className="md-pre-com"># macOS</span>
            {"\n"}~/Library/Application Support/Claude/claude_desktop_config.json
            {"\n\n"}
            <span className="md-pre-com"># Windows</span>
            {"\n"}%APPDATA%\Claude\claude_desktop_config.json
          </CopyPre>

          <h3 className="md-step-title">
            <span className="md-pill">Step 03</span>
            Add MarkItDown to your config
          </h3>
          <p className="md-p">
            Open the file in any text editor and paste the block below. If the
            file is empty or new, this is the whole content. If you already have
            other MCP servers in there, just add the{" "}
            <span className="md-ic">&quot;markitdown&quot;</span> entry inside
            the existing <span className="md-ic">mcpServers</span> object.
          </p>

          <CopyPre copyText={CLAUDE_CONFIG_JSON}>
            {"{\n  "}
            <span className="md-pre-red">&quot;mcpServers&quot;</span>: {"{\n    "}
            <span className="md-pre-red">&quot;markitdown&quot;</span>: {"{\n      "}
            <span className="md-pre-red">&quot;command&quot;</span>:{" "}
            <span className="md-pre-grn">&quot;markitdown-mcp&quot;</span>,
            {"\n      "}
            <span className="md-pre-red">&quot;args&quot;</span>: []
            {"\n    }\n  }\n}"}
          </CopyPre>

          <p className="md-p">
            Save the file, then <strong>fully quit Claude Desktop</strong>{" "}
            (Cmd+Q on Mac, right-click the tray icon and Quit on Windows) and
            reopen it. MCP servers only load on a fresh start, so closing the
            window is not enough.
          </p>

          <div className="md-callout">
            <div className="md-callout-lbl">How to know it worked</div>
            <p>
              Once Claude Desktop reopens, look for the tools icon near the chat
              input. Click it and you should see{" "}
              <span className="md-ic">markitdown</span> listed with a{" "}
              <span className="md-ic">convert_to_markdown</span> tool available.
              If you see it, the connection is live.
            </p>
          </div>
        </section>

        {/* 04 Use */}
        <section id="use" className="md-section">
          <div className="md-sec-eyebrow">04 / Daily use</div>
          <h2 className="md-sec-title">How to use it from now on.</h2>
          <p className="md-p">
            With MarkItDown connected, you have two ways to convert files inside
            Claude. Both work, pick the one that fits your flow.
          </p>

          <h4 className="md-h4">The simple way</h4>
          <p className="md-p">Drop the file into the chat and type:</p>
          <CopyPre copyText={SIMPLE_PROMPT}>{SIMPLE_PROMPT}</CopyPre>
          <p className="md-p">
            Claude routes the file through MarkItDown first and uses the clean
            Markdown as context for everything that follows. You should feel the
            response come back faster and more focused.
          </p>

          <h4 className="md-h4">The hands-off way</h4>
          <p className="md-p">
            Add this one-line system prompt to a Claude Project so every file
            you drop in is converted automatically without you typing the
            instruction each time:
          </p>
          <CopyPre copyText={SYSTEM_PROMPT}>{SYSTEM_PROMPT}</CopyPre>

          <h4 className="md-h4">Resources</h4>
          <ul className="md-ul">
            <li>
              <strong>MarkItDown on GitHub</strong> —{" "}
              <a
                className="md-link"
                href="https://github.com/microsoft/markitdown"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/microsoft/markitdown
              </a>
            </li>
            <li>
              <strong>MCP server package</strong> —{" "}
              <a
                className="md-link"
                href="https://github.com/microsoft/markitdown/tree/main/packages/markitdown-mcp"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/microsoft/markitdown/tree/main/packages/markitdown-mcp
              </a>
            </li>
            <li>
              <strong>Claude Desktop download</strong> —{" "}
              <a
                className="md-link"
                href="https://claude.ai/download"
                target="_blank"
                rel="noopener noreferrer"
              >
                claude.ai/download
              </a>
            </li>
          </ul>
        </section>

        {/* CTA */}
        <div className="md-cta">
          <div className="md-cta-eb">One more thing</div>
          <h3>If this saved you tokens, save someone else theirs.</h3>
          <p className="md-cta-p">
            Share the reel that brought you here, or tag a friend who uploads
            PDFs to Claude every day.
          </p>
          <a
            className="md-cta-btn"
            href="https://instagram.com/mercythaddeus_"
            target="_blank"
            rel="noopener noreferrer"
          >
            @mercythaddeus_ on Instagram
          </a>
        </div>

        <footer className="md-footer">
          Made by <span className="md-footer-made">Mercy Thaddeus</span> ·{" "}
          <a className="md-link" href="https://instagram.com/mercythaddeus_">
            @mercythaddeus_
          </a>
          <br />
          <span
            style={{
              fontSize: 11,
              letterSpacing: 0.5,
              textTransform: "uppercase",
              color: "var(--md-mute)",
            }}
          >
            The Setup Guide · No. 01 · v1 · 2026
          </span>
        </footer>
      </div>
    </div>
  );
}
