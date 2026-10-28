"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";
import { trackEvent } from "@/lib/analytics";
import "../chatgpt-study-codes/chatgpt-study-codes.css";
import "../claude-job-search/claude-job-search.css";

const AUDIT_PROMPT = "You are my personal online safety coach. October 2026 brought \"Black October\": a wave of hacks and leaks, many tied to AI tools, including stolen API keys, shared AI chats that anyone could find, an AI tool that shipped with password-stealing code, and voice cloning scams. I want a security audit of my own digital life.\n\nRULES\n1. Never ask me for real passwords, PINs, one-time codes, recovery codes, API keys, card numbers, bank details, BVN or NIN. If I start to type one, stop me, tell me to delete that message, and tell me to change that password or key.\n2. Interview me one section at a time. Ask no more than 4 short questions per message. Use multiple choice where you can. Wait for my answers before moving on.\n3. Use plain words. No jargon. If I don't know an answer, tell me exactly where to tap to check, for iPhone and for Android.\n4. Base everything on my answers. Don't assume or invent facts about my accounts. If you're unsure, say so.\n5. Be honest about risk, without trying to scare me.\n\nINTERVIEW SECTIONS\n1. Devices: my phone and computer, screen lock, when I last updated, whether automatic updates are on.\n2. Email: my main email account, whether 2-step verification or a passkey is on, whether my recovery phone and email are up to date.\n3. Passwords: whether I use a password manager, how often I reuse passwords, whether I've run Google Password Checkup or iPhone Security Recommendations.\n4. Social and money apps: which ones I use (Instagram, WhatsApp, TikTok, X, LinkedIn, bank and fintech apps), and whether two-factor authentication is on for each. Ask about WhatsApp two-step verification.\n5. Connected apps: apps I signed into with Google, Apple or Facebook, and apps that can read my email, calendar, files or contacts.\n6. AI tools: which ones I use (ChatGPT, Claude, Gemini, Meta AI, coding tools, AI agents). Whether I've shared chat links. What kinds of things I paste in (client work, ID documents, money details). Whether I have API keys and where I keep them. Whether any AI tool or agent can access my email, files or accounts.\n7. Family and money: how family or friends usually ask me for money (calls, voice notes, texts), whether we have a safe word, and who else can get into my accounts or phone.\n8. Public info: what anyone can see on my profiles (phone number, birthday, location, workplace, kids' school, daily routine).\n\nWHEN THE INTERVIEW IS DONE, GIVE ME\nA. My risk score from 0 to 100 (100 = most exposed), with one sentence on why, and a table with each of the 8 sections rated Low, Medium or High.\nB. My top 5 exposures, ranked from most to least urgent. For each: what's wrong, what could realistically happen, and the exact fix with taps for my phone.\nC. A 7 day fix plan: Day 1 to Day 7, each task 15 minutes or less, most important first.\nD. A short checklist I can screenshot and tick off.\n\nStart by saying hi in one line, then ask me the questions for section 1.";

const FAMILY_MESSAGE = "If I ever call or send a voice note asking for money, ask me for our safe word. No safe word, no money. Then hang up and call my saved number.";

function CopyBlock({ label, text }: { label: string; text: string }) {
  const [status, setStatus] = useState("Copy");
  const block = useRef<HTMLPreElement>(null);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setStatus("Copied");
      trackEvent("guide_copy", { guide: "black_october_security_audit", block: label });
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

export default function BlackOctoberSecurityAuditGuide() {
  return (
    <div className="scs-guide js-guide">
      <Link href="/guide" className="scs-back"><ArrowLeft className="h-4 w-4" aria-hidden />All guides</Link>
      <header className="scs-hero">
        <p className="scs-eyebrow">Security · Passwords · Free prompt</p>
        <h1>Black October Security Audit</h1>
        <p className="scs-lede">October 2026 brought a wave of hacks and security flaws, most of them tied to AI. Here are 5 steps to protect your own accounts, with every tap for iPhone and Android, plus the AUDIT prompt that turns ChatGPT or Claude into your own security coach.</p>
        <p className="scs-meta">By Mercy Thaddeus · Checked 28 October 2026</p>
        <nav className="scs-toc" aria-label="Guide sections">
          <a href="#what">What happened</a><a href="#passwords">1. Passwords</a><a href="#passkey">2. Passkey</a><a href="#apps">3. Connected apps</a><a href="#updates">4. Updates</a><a href="#safe-word">5. Safe word</a><a href="#audit">The AUDIT prompt</a><a href="#sources">Sources</a><a href="#next">Go further</a>
        </nav>
      </header>

      <section id="what" className="scs-section"><span className="scs-num">00 / WHAT IS BLACK OCTOBER?</span><h2>A wave of hacks in a few days.</h2>
<p>Black October is the name some experts gave to October 2026, after a wave of hacks and security flaws came out within a few days. Most of it is tied to AI.</p>
<ul>
<li>Hackers got into OpenCode, an AI coding tool, and exposed users’ API keys. Some users reported more than $1,700 in charges. (<a href="https://www.bleepingcomputer.com/news/security/opencode-hack-exposes-api-keys-amid-ai-distillation-attacks/" target="_blank" rel="noopener noreferrer">BleepingComputer</a>)</li>
<li>Researchers found 6,800 shared Meta Muse chat links anyone could look up. Some held private details. (<a href="https://arstechnica.com/security/2026/10/meta-muse-exposes-users-personal-and-business-secrets-when-they-share-conversations/" target="_blank" rel="noopener noreferrer">Ars Technica</a>)</li>
<li>A hacked release of LiteLLM, a popular AI tool, shipped with code that steals passwords and keys. (<a href="https://docs.litellm.ai/blog/security-incident-oct-21-2026-attack-chain" target="_blank" rel="noopener noreferrer">LiteLLM</a>)</li>
<li>Researchers used AI models to find serious flaws in PHP, which runs nearly 70% of websites by some estimates. (<a href="https://www.cnbc.com/2026/10/23/php-vulnerabilities-ai-cybersecurity.html" target="_blank" rel="noopener noreferrer">CNBC</a>)</li>
<li>In Lagos, police say one of three suspects arrested in Lekki used AI voice cloning to pose as Elon Musk. (Nigeria Police via NOPE)</li>
</ul>
<p>Here’s what you can do with your own accounts. These are the 5 steps from the carousel, with every tap.</p>
<div className="scs-note"><p><strong>Can’t find a setting?</strong> Menu names change between phone brands and software versions. Search for it in the Settings search bar.</p></div>
</section>

      <section id="passwords" className="scs-section"><span className="scs-num">01 / PASSWORDS</span><h2>Get a password manager and change reused passwords.</h2>
<p>If one password leaks, every account that uses it is open.</p>
<h3>Android or Chrome</h3>
<ol>
<li>Go to <strong>passwords.google.com</strong>. In the Chrome app, tap <strong>More → Settings → Autofill and passwords → Google Password Manager</strong>.</li>
<li>Tap <strong>Password Checkup</strong> (in the Chrome app it’s called <strong>Checkup</strong>).</li>
<li>Change every password it flags as reused, weak or compromised.</li>
</ol>
<h3>iPhone</h3>
<ol>
<li>Open the <strong>Passwords</strong> app (iOS 18 and later).</li>
<li>Tap <strong>Security</strong>.</li>
<li>Change every password it flags.</li>
</ol>
<p>On iOS 17 or earlier, go to <strong>Settings → Passwords → Security Recommendations</strong> instead.</p>
<p>Let the password manager create each new password. CISA recommends at least 16 characters. 1Password is another option if you want one that works across every device.</p>
</section>

      <section id="passkey" className="scs-section"><span className="scs-num">02 / PASSKEY</span><h2>Add a passkey to your email.</h2>
<p>Your email can reset every other account, so start there. CISA says a physical security key gives the best protection. A passkey on your phone works in a similar way, at no cost.</p>
<ol>
<li>Go to <strong>myaccount.google.com → Security &amp; sign-in</strong>.</li>
<li>Under <strong>How you sign in to Google</strong>, turn on <strong>2-Step Verification</strong>.</li>
<li>Tap <strong>Passkeys and security keys → Create a passkey</strong>.</li>
</ol>
<div className="scs-note"><p><strong>Have a YubiKey or another security key?</strong> On the same page, tap <strong>Create a passkey → Use another device</strong>, then insert the key and follow the steps on screen. The key needs to support FIDO2.</p></div>
<p>Do the same for your other big accounts:</p>
<ul>
<li><strong>Instagram:</strong> Accounts Center → Password and security → Two-factor authentication.</li>
<li><strong>WhatsApp:</strong> Settings → Account → Two-step verification → Turn on (set a 6 digit PIN only you know).</li>
</ul>
</section>

      <section id="apps" className="scs-section"><span className="scs-num">03 / CONNECTED APPS</span><h2>Remove apps you don’t use.</h2>
<p>Every app you connect can see some of your data.</p>
<h3>Google</h3>
<ol>
<li>Go to <strong>myaccount.google.com → Security &amp; sign-in</strong>.</li>
<li>Find <strong>Your connections to third-party apps &amp; services</strong> and tap <strong>See all connections</strong>.</li>
<li>Tap an app you don’t use, then tap <strong>Delete all connections you have with</strong> that app and confirm.</li>
</ol>
<h3>iPhone (Sign in with Apple)</h3>
<ol>
<li>Go to <strong>Settings → [your name] → Sign in with Apple</strong>.</li>
<li>Tap an app you don’t use, then tap <strong>Delete → Stop Using</strong>.</li>
</ol>
<p>You’ll probably find apps you forgot you ever connected.</p>
</section>

      <section id="updates" className="scs-section"><span className="scs-num">04 / UPDATES</span><h2>Update your phone and apps.</h2>
<p>Updates fix the flaws hackers use. A fix only works once it’s installed.</p>
<h3>iPhone</h3>
<ol>
<li>Go to <strong>Settings → General → Software Update</strong>.</li>
<li>Tap <strong>Automatic Updates</strong> and turn everything on.</li>
<li>For apps, go to <strong>Settings → Apps → App Store</strong> and turn on <strong>App Updates</strong>. On iOS 17 or earlier, it’s <strong>Settings → App Store</strong>.</li>
</ol>
<h3>Android</h3>
<ol>
<li>Go to <strong>Settings → System → Software update</strong> (on Samsung: <strong>Settings → Software update</strong>).</li>
<li>Open the <strong>Play Store</strong>, tap your profile picture, then <strong>Settings → Network preferences → Auto-update apps</strong>. Choose <strong>Update all apps over Wi-Fi or mobile data</strong> or <strong>Update over Wi-Fi only</strong>.</li>
</ol>
</section>

      <section id="safe-word" className="scs-section"><span className="scs-num">05 / SAFE WORD</span><h2>Set a family safe word.</h2>
<p>AI can copy the voice of someone you love. A familiar voice isn’t proof any more.</p>
<ol>
<li>Pick a word only your family knows. Don’t post it anywhere.</li>
<li>Send this to your family group:</li>
</ol>
<CopyBlock label={"For your family group"} text={FAMILY_MESSAGE} />
<p>If a voice asks you for money: hang up, call their saved number, ask for the word.</p>
</section>

      <section id="audit" className="scs-section"><span className="scs-num">06 / THE AUDIT PROMPT</span><h2>Get your own security audit.</h2>
<p>Copy everything in the box into ChatGPT or Claude. It interviews you, then gives you a risk score, your top 5 exposures and a plan for this week.</p>
<CopyBlock label={"In ChatGPT or Claude · the AUDIT prompt"} text={AUDIT_PROMPT} />
<div className="scs-note"><p><strong>Never paste real passwords, PINs or codes into any AI chat.</strong> The prompt tells the AI to stop you if you try.</p></div>
</section>

      <section id="sources" className="scs-section"><span className="scs-num">07 / SOURCES</span><h2>Where this comes from.</h2>
<ul>
<li>CNBC, 23 October 2026: <a href="https://www.cnbc.com/2026/10/23/php-vulnerabilities-ai-cybersecurity.html" target="_blank" rel="noopener noreferrer">AI finds PHP vulnerabilities</a></li>
<li>Ars Technica, 20 October 2026: <a href="https://arstechnica.com/security/2026/10/meta-muse-exposes-users-personal-and-business-secrets-when-they-share-conversations/" target="_blank" rel="noopener noreferrer">Meta Muse shared conversations</a></li>
<li>BleepingComputer, 19 October 2026: <a href="https://www.bleepingcomputer.com/news/security/opencode-hack-exposes-api-keys-amid-ai-distillation-attacks/" target="_blank" rel="noopener noreferrer">OpenCode hack exposes API keys</a></li>
<li>LiteLLM, 21 October 2026: <a href="https://docs.litellm.ai/blog/security-incident-oct-21-2026-attack-chain" target="_blank" rel="noopener noreferrer">Security incident write-up</a></li>
<li>CISA, Cybersecurity Awareness Month guidance (password manager, 16+ characters, MFA with a security key as strongest, updates)</li>
<li>NITDA warning on AI scams and voice cloning: <a href="https://propoliticsng.com/nitda-warns-nigerians-against-ai-scams-deepfakes-voice-cloning/" target="_blank" rel="noopener noreferrer">ProPolitics NG</a></li>
<li>Nigeria Police via NOPE and NewsTimes on the Lekki arrest</li>
</ul>
</section>

      <section id="next" className="scs-section"><span className="scs-num">08 / GO FURTHER</span><h2>Want to go further?</h2>
<p>Staying safe is the first step. If you want to use AI for real work, like building apps, automating your business or creating content, that’s what AI University on Attention HQ is for.</p>
<p><a className="scs-cta" href="https://academy.attentionfactory.io/ai-university?ref=mercythaddeus" target="_blank" rel="noopener noreferrer">Join AI University ↗</a></p>
</section>
    </div>
  );
}
