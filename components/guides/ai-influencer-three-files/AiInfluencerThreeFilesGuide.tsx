"use client";

import { useCallback, useMemo, useState, type MouseEvent } from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

import { DOCS, TABS, type DocKey } from "./data";
import "./ai-influencer-three-files.css";

function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function inline(s: string) {
  let out = esc(s);
  out = out.replace(/`([^`]+)`/g, "<code>$1</code>");
  out = out.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  out = out.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  return out;
}

function cells(line: string) {
  const t = line.trim().replace(/^\|/, "").replace(/\|$/, "");
  return t.split("|").map((c) => c.trim());
}

function renderMarkdown(md: string) {
  const lines = md.split("\n");
  const out: string[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (/^```/.test(line)) {
      const buf: string[] = [];
      i += 1;
      while (i < lines.length && !/^```/.test(lines[i])) {
        buf.push(lines[i]);
        i += 1;
      }
      i += 1;
      out.push(
        `<div class="aif-block"><button type="button" class="aif-copy" data-copy="1">Copy</button><pre>${esc(buf.join("\n"))}</pre></div>`,
      );
      continue;
    }

    if (/^\s*\|/.test(line)) {
      const rows: string[] = [];
      while (i < lines.length && /^\s*\|/.test(lines[i])) {
        rows.push(lines[i]);
        i += 1;
      }
      const head = cells(rows[0]);
      const body = rows.slice(/^[\s|:-]+$/.test(rows[1] || "") ? 2 : 1);
      let t =
        "<table><thead><tr>" +
        head.map((h) => `<th>${inline(h)}</th>`).join("") +
        "</tr></thead><tbody>";
      body.forEach((r) => {
        t +=
          "<tr>" +
          cells(r)
            .map((c) => `<td>${c ? inline(c) : ""}</td>`)
            .join("") +
          "</tr>";
      });
      out.push(t + "</tbody></table>");
      continue;
    }

    if (/^#{1,4}\s/.test(line)) {
      const lvl = (line.match(/^#+/) || [""])[0].length;
      out.push(
        `<h${lvl}>${inline(line.replace(/^#+\s/, ""))}</h${lvl}>`,
      );
      i += 1;
      continue;
    }

    if (/^---\s*$/.test(line)) {
      out.push("<hr>");
      i += 1;
      continue;
    }

    if (/^\s*[-*]\s/.test(line) || /^\s*\d+\.\s/.test(line)) {
      const ord = /^\s*\d+\.\s/.test(line);
      const items: string[] = [];
      while (
        i < lines.length &&
        (/^\s*[-*]\s/.test(lines[i]) || /^\s*\d+\.\s/.test(lines[i]))
      ) {
        items.push(lines[i].replace(/^\s*(?:[-*]|\d+\.)\s/, ""));
        i += 1;
      }
      const tag = ord ? "ol" : "ul";
      out.push(
        `<${tag}>${items.map((it) => `<li>${inline(it)}</li>`).join("")}</${tag}>`,
      );
      continue;
    }

    if (line.trim() === "") {
      i += 1;
      continue;
    }

    const para: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !/^(#{1,4}\s|```|---\s*$|\s*\||\s*[-*]\s|\s*\d+\.\s)/.test(lines[i])
    ) {
      para.push(lines[i]);
      i += 1;
    }
    out.push(`<p>${inline(para.join(" "))}</p>`);
  }

  return out.join("\n");
}

async function writeClipboard(text: string) {
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
}

function downloadFile(name: string, text: string) {
  const blob = new Blob([text], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1200);
}

export default function AiInfluencerThreeFilesGuide() {
  const [current, setCurrent] = useState<DocKey>("setup");
  const [toast, setToast] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);

  const md = DOCS[current];
  const tab = TABS.find((t) => t.key === current)!;
  const html = useMemo(() => renderMarkdown(md), [md]);

  const flash = useCallback((msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 1600);
  }, []);

  const onDocClick = useCallback(
    async (e: MouseEvent<HTMLElement>) => {
      const btn = (e.target as HTMLElement).closest(".aif-copy");
      if (!btn) return;
      const pre = btn.parentElement?.querySelector("pre");
      if (!pre) return;
      await writeClipboard(pre.textContent || "");
      flash("Prompt copied");
    },
    [flash],
  );

  const copyDoc = useCallback(async () => {
    await writeClipboard(md);
    flash("Copied");
  }, [md, flash]);

  const dlDoc = useCallback(() => {
    downloadFile(`${current}.md`, md);
    flash("Downloaded");
  }, [current, md, flash]);

  const dlAll = useCallback(() => {
    (["persona", "brain", "offers"] as const).forEach((k, idx) => {
      setTimeout(() => downloadFile(`${k}.md`, DOCS[k]), idx * 350);
    });
    flash("Downloading 3 files");
  }, [flash]);

  return (
    <div className="aif-guide">
      <Link href="/guide" className="aif-back">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        All guides
      </Link>

      <header className="aif-mast">
        <p className="aif-eyebrow">
          <b>Build guide</b>
          <span>/</span>
          AI influencer
          <span>/</span>
          three files
          <span>/</span>
          updated July 2026
        </p>
        <div className="aif-hero">
          <div>
            <h1>The three file system</h1>
            <p className="aif-lede">
              An AI influencer is not a face, it is three text files that an AI
              agent reads before it writes anything. <b>persona.md</b> is who she
              is, <b>brain.md</b> is what she remembers, <b>offers.md</b> is how
              she earns. Fill them in, point Claude Code at them, and she stops
              contradicting herself. The tools and the posting plan are in here
              too.
            </p>
            <div className="aif-actions">
              <button type="button" className="aif-btn" onClick={dlAll}>
                Download all three
              </button>
              <button
                type="button"
                className="aif-btn aif-ghost"
                onClick={() => {
                  setCurrent("persona");
                  document
                    .getElementById("aif-tabs")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Read the files
              </button>
            </div>
          </div>
          <div className="aif-subject">
            <h2>
              <span>Subject file</span>
              <span>001</span>
            </h2>
            <div className="aif-row">
              <span className="aif-k">Name</span>
              <span className="aif-v">
                <button
                  type="button"
                  className={`aif-redact${revealed ? " aif-on" : ""}`}
                  onClick={() => setRevealed((v) => !v)}
                >
                  {revealed ? "does not exist" : "••••••••"}
                </button>
              </span>
            </div>
            <div className="aif-row">
              <span className="aif-k">Age</span>
              <span className="aif-v">
                <i className="aif-blank" />
              </span>
            </div>
            <div className="aif-row">
              <span className="aif-k">City</span>
              <span className="aif-v">
                <i className="aif-blank" />
              </span>
            </div>
            <div className="aif-row">
              <span className="aif-k">Niche</span>
              <span className="aif-v">
                <i className="aif-blank" />
              </span>
            </div>
            <div className="aif-row">
              <span className="aif-k">Face</span>
              <span className="aif-v">locked, 8 descriptors</span>
            </div>
            <div className="aif-row">
              <span className="aif-k">Files</span>
              <span className="aif-v">3</span>
            </div>
            <div className="aif-stamp">Not a real person</div>
          </div>
        </div>
      </header>

      <nav className="aif-tabs" id="aif-tabs">
        <div className="aif-tabs-inner" role="tablist">
          {TABS.map((t) => (
            <button
              key={t.key}
              type="button"
              role="tab"
              className="aif-tab"
              aria-selected={current === t.key}
              onClick={() => setCurrent(t.key)}
            >
              <span className="aif-n">{t.n}</span>
              {t.label}
            </button>
          ))}
        </div>
      </nav>

      <div className="aif-doc-head">
        <div>
          <div className="aif-fname">{tab.label}</div>
          <div className="aif-meta">
            {tab.isFile
              ? `${md.split("\n").length} lines / ${Math.max(1, Math.round(md.length / 1024))} kb`
              : "read this part, it is not a file"}
          </div>
        </div>
        <div className="aif-doc-actions">
          <button type="button" className="aif-btn aif-ghost" onClick={copyDoc}>
            {tab.isFile ? "Copy as markdown" : "Copy this section"}
          </button>
          {tab.isFile ? (
            <button type="button" className="aif-btn" onClick={dlDoc}>
              Download .md
            </button>
          ) : null}
        </div>
      </div>

      <article
        className="aif-doc"
        onClick={onDocClick}
        dangerouslySetInnerHTML={{ __html: html }}
      />

      <footer className="aif-foot">
        <div>
          <p>
            Every prompt in these files tells the AI which file to read first.
            That is the part people skip, and it is why their influencer
            contradicts herself by week three.
          </p>
          <p className="aif-meta">Built by Mercy Thaddeus</p>
        </div>
        <div>
          <p className="aif-meta">Three files, one system</p>
          <p className="aif-files">persona.md · brain.md · offers.md</p>
        </div>
      </footer>

      {toast ? <div className="aif-toast">{toast}</div> : null}
    </div>
  );
}
