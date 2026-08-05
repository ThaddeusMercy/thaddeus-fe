"use client";

import { Fragment, useCallback, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

import {
  CHECKLIST,
  CUSTOM_INSTRUCTIONS_EXAMPLE,
  CUSTOM_INSTRUCTIONS_TEMPLATE,
  MORNING_BRIEF,
  PROJECT_INSTRUCTIONS,
  SKILL_MD,
} from "./data";
import "./claude-setup.css";

function highlightBrackets(text: string) {
  return text.split(/(\[[^\]]+\])/g).map((part, i) =>
    part.startsWith("[") && part.endsWith("]") ? (
      <span key={i} className="csu-fill">
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
    setTimeout(() => setCopied(false), 1800);
  }, [text]);

  return (
    <div className="csu-block">
      <button
        type="button"
        className={`csu-copy${copied ? " csu-done" : ""}`}
        onClick={onCopy}
      >
        {copied ? "Copied" : "Copy"}
      </button>
      <p className="csu-block-label">{label}</p>
      <pre>{highlightBrackets(text)}</pre>
    </div>
  );
}

export default function ClaudeSetupGuide() {
  return (
    <div className="csu-guide">
      <Link href="/guide" className="csu-back">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        All guides
      </Link>

      <header className="csu-header">
        <p className="csu-kicker">The setup guide</p>
        <h1>How to set up Claude</h1>
        <p className="csu-standfirst">
          The five things to do first. It takes about thirty minutes and you
          only do it once.
        </p>
        <div className="csu-byline">
          <strong>Mercy Thaddeus</strong>
          <span>
            <a href="https://mercythaddeus.xyz">mercythaddeus.xyz</a>
          </span>
        </div>
      </header>

      <section className="csu-section">
        <p className="csu-lede">
          Here is the thing I notice when I look over someone&apos;s shoulder
          while they use Claude. They are re-explaining themselves. Every single
          chat starts with who they are, what their business does, what tone
          they want, what they tried last time. That is not a prompting problem
          and no clever prompt fixes it. It is a setup problem.
        </p>
        <p>
          Everything below is stuff you configure once, in the app, in your
          account. After that Claude carries the context for you and the quality
          of every answer jumps without you writing longer prompts.
        </p>
        <p>
          Do them in order. One and two matter most, so if you only have ten
          minutes today, do those two and come back for the rest.
        </p>
      </section>

      <section className="csu-section">
        <span className="csu-num">One</span>
        <h2>Fill out your custom instructions</h2>
        <p className="csu-lede">
          Go to Settings and find the profile or personal preferences area. This
          is where you tell Claude who you are, what you do and the rules it
          should follow in every conversation. Save it once and it applies
          across your chats.
        </p>
        <p>
          The mistake almost everyone makes here is writing something vague.
          &ldquo;Be professional and concise&rdquo; gives Claude nothing to work
          with, because professional means one thing for a law firm and another
          thing for a beauty brand. Write it the way you would brief a new
          assistant on their first day. Specific enough that a stranger could
          follow it without asking you a question.
        </p>

        <h3>Copy this and edit it</h3>
        <CopyBlock
          label="Custom instructions template"
          text={CUSTOM_INSTRUCTIONS_TEMPLATE}
        />

        <h3>What a filled-in one looks like</h3>
        <CopyBlock label="Example" text={CUSTOM_INSTRUCTIONS_EXAMPLE} />

        <div className="csu-note">
          <span className="csu-note-tag">Worth knowing</span>
          <p>
            You can update this any time and it takes effect on your next
            message. Treat it as a living document. Every time you find yourself
            correcting Claude the same way twice, that correction belongs in
            here.
          </p>
        </div>
      </section>

      <section className="csu-section">
        <span className="csu-num">Two</span>
        <h2>Create separate projects for the separate parts of your life</h2>
        <p className="csu-lede">
          A project is a container. It holds its own instructions, its own files
          and its own chats, so everything inside it shares the same context.
          This is how you stop explaining your business at the top of every
          conversation.
        </p>
        <p>
          If you run a business, make one project and put your brand guidelines,
          service list, pricing and a few pieces of writing you are proud of
          inside it. Now every chat in that project already knows your voice and
          your offer.
        </p>
        <p>
          If you are job hunting, make one project for the whole search. Drop in
          your CV, your cover letter, the job descriptions you are chasing, notes
          from interviews you have already done. When a new role comes up you
          paste the description and ask for a tailored application, and Claude
          has your entire history sitting right there.
        </p>
        <p>
          Other ones worth making, depending on your life: one per major client,
          one for a course you are studying, one for your personal writing, one
          for a specific product you are building.
        </p>

        <h3>Where people go wrong</h3>
        <p>
          They build one giant project called &ldquo;Work&rdquo; and pour
          everything into it. That defeats the point. The value comes from the
          boundary. A project that only knows about one client gives sharper
          answers about that client than a project that knows about nine.
        </p>
        <p>
          The other miss is leaving the project instructions empty. Each project
          gets its own instructions on top of your global ones, and that is where
          the specifics go.
        </p>

        <CopyBlock
          label="Project instructions, client example"
          text={PROJECT_INSTRUCTIONS}
        />
      </section>

      <section className="csu-section">
        <span className="csu-num">Three</span>
        <h2>Connect the apps you already use</h2>
        <p className="csu-lede">
          Gmail, Google Drive, Calendar, Notion, Slack and a long list of
          others. Connecting them means Claude can read from the places your work
          already lives, and take action there when you ask it to.
        </p>
        <p>
          This is the step where Claude stops being a text box you paste things
          into. You stop copying an email in to get a reply drafted. You just say
          &ldquo;reply to Tunde&apos;s email about the invoice, tell him the
          revised one goes out Friday&rdquo; and it finds the thread and writes
          the reply.
        </p>
        <p>
          A few things it handles well once connected: searching your inbox for
          anything you have not answered, pulling a document out of Drive and
          rewriting it, reading your calendar and telling you what your week
          actually looks like, dropping notes into Notion after a call.
        </p>

        <h3>Start with two, not ten</h3>
        <p>
          Connect your email and your calendar first. Live with them for a week.
          Add the next one when you hit an actual moment of friction, because a
          connector you never use is just another thing sitting in your settings.
        </p>

        <div className="csu-note">
          <span className="csu-note-tag">On permissions</span>
          <p>
            Claude asks before it sends an email or posts anything on your
            behalf. Read what it drafted before you approve it. I have caught it
            addressing the right message to the wrong person more than once, and
            that is on me for the way I phrased the request, but it is the reason
            you look first.
          </p>
        </div>
      </section>

      <section className="csu-section">
        <span className="csu-num">Four</span>
        <h2>Set up one scheduled task</h2>
        <p className="csu-lede">
          You can have Claude run work on a schedule without you being there.
          Most people have no idea this exists. You write the instruction once,
          pick a time, and it runs on its own.
        </p>
        <p>
          The obvious first one is a morning brief. It checks your calendar and
          your inbox before you wake up and hands you a short summary of what
          your day holds and what needs a response.
        </p>

        <CopyBlock label="Morning brief, daily at 7am" text={MORNING_BRIEF} />

        <p>
          Once that one is running, the pattern becomes obvious. A Friday task
          that pulls your week&apos;s numbers into a client update. A Sunday task
          that reads your saved links and turns them into content ideas. A Monday
          task that flags every invoice still unpaid past thirty days.
        </p>

        <h3>One rule before you schedule anything</h3>
        <p>
          Run the instruction manually two or three times first and fix the
          wording until the output is genuinely what you want. A task that runs
          at 7am every day producing something mediocre is worse than no task,
          because you stop reading it by week two and then you are just
          generating noise.
        </p>
      </section>

      <section className="csu-section">
        <span className="csu-num">Five</span>
        <h2>Create one reusable skill</h2>
        <p className="csu-lede">
          A skill is a set of instructions Claude loads automatically when the
          task matches. It is how you teach it to do something the same way every
          time instead of re-explaining the method.
        </p>
        <p>
          Say you have a house format for your decks: a specific structure, a
          colour system, a rule that every slide gets one idea. Write that down
          once as a skill. From then on, when you ask for a deck, you get your
          deck, not a generic one.
        </p>
        <p>
          Good candidates are the things you do repeatedly with a method
          attached. Client proposals. Weekly reports. Social captions in your
          format. Code reviews against your team&apos;s standards. Lesson plans
          in your structure.
        </p>

        <h3>What a skill actually is</h3>
        <p>
          A folder with a file called SKILL.md inside it. That file has a name, a
          description and the instructions. The description is the part that
          decides whether the skill fires, so write it using the exact phrases
          you say out loud when you want that task done.
        </p>

        <CopyBlock label="SKILL.md, starter structure" text={SKILL_MD} />

        <p>
          You do not have to write these by hand. Describe the task out loud to
          Claude, including all the fussy little rules you have, then ask it to
          turn that into a skill for you. That is how I built most of mine.
        </p>
      </section>

      <section className="csu-section">
        <h2>The thirty minute version</h2>
        <p className="csu-lede">
          If you want to just sit down and do it now, this is the order and
          roughly what each one costs you.
        </p>
        <ul className="csu-check">
          {CHECKLIST.map((item) => (
            <li key={item.text}>
              <span className="csu-box" aria-hidden />
              <span className="csu-check-body">
                <span>{item.text}</span>
                <span className="csu-time">{item.time}</span>
              </span>
            </li>
          ))}
        </ul>
        <p>
          Then leave it alone for a week and pay attention to what still annoys
          you. Whatever you correct twice belongs in your custom instructions or
          in a project. That loop is the whole game, and it is why my setup today
          looks nothing like it did when I started.
        </p>
      </section>

      <footer className="csu-footer">
        <h2>Take this further</h2>
        <p>
          I teach this properly at Attention Factory, where we run AI training
          for teams and build custom systems for companies that want more than a
          chat window. If your team is at the stage where five people are using
          Claude five different ways, that is usually the moment to bring someone
          in.
        </p>
        <p>
          Training and consulting:{" "}
          <a href="https://attentionfactory.io">attentionfactory.io</a>
          <br />
          Work with me:{" "}
          <a href="mailto:collab@mercythaddeus.xyz">
            collab@mercythaddeus.xyz
          </a>
          <br />
          Everything else:{" "}
          <a href="https://mercythaddeus.xyz">mercythaddeus.xyz</a>
        </p>
        <p className="csu-sig">Mercy</p>
      </footer>
    </div>
  );
}
