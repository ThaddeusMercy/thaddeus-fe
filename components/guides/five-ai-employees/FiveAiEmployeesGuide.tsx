"use client";

import { Fragment, useCallback, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

import {
  BUSINESS_CONTEXT,
  DESIGN_ANTHROPIC,
  DESIGN_TASTE,
  DESIGN_UIUX,
  FINANCE_PLUGIN,
  FINANCE_TASK,
  LEGAL_PLUGIN,
  LEGAL_TASK,
  MARKETER_NPX,
  MARKETER_PLUGIN,
  MARKETER_TASK,
  ONBOARD_PROMPT,
  ROSTER,
  SOCIAL_PLUGIN,
  SOCIAL_TASK,
  WEEK,
} from "./data";
import "./five-ai-employees.css";

function highlightBrackets(text: string) {
  return text.split(/(\[[^\]]+\])/g).map((part, i) =>
    part.startsWith("[") && part.endsWith("]") ? (
      <span key={i} className="fae-fill">
        {part}
      </span>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}

function CodeBlock({ label, text }: { label: string; text: string }) {
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
    <div className="fae-code">
      <div className="fae-code-top">
        <span>{label}</span>
        <button
          type="button"
          className={`fae-copy${copied ? " fae-done" : ""}`}
          onClick={onCopy}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre>{highlightBrackets(text)}</pre>
    </div>
  );
}

export default function FiveAiEmployeesGuide() {
  return (
    <div className="fae-guide">
      <Link href="/guide" className="fae-back">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        All guides
      </Link>

      <header className="fae-hero">
        <p className="fae-eyebrow">Mercy Thaddeus · free guide</p>
        <h1>Five AI employees</h1>
        <p className="fae-lede">
          The exact Claude Skills I would install to staff a business.
          Marketing, finance, social media, legal, design. All free, all public,
          and here is what to hand each one on day one.
        </p>
        <nav className="fae-roster" aria-label="Employee roster">
          {ROSTER.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="fae-section">
        <h2>
          Everyone says skills make Claude better. Nobody says which ones to
          install.
        </h2>
        <p>
          A skill is a set of instructions that tells Claude how to do one
          specific job. Not a prompt you paste in every time. You install it once
          and Claude picks it up whenever that job shows up.
        </p>
        <p>
          So treat each one as a hire. The skill is the job description. Your
          business information is the onboarding. Most people do the first part,
          skip the second, then wonder why the output sounds like it belongs to a
          company they have never heard of.
        </p>
        <p>
          Five roles below. Two of them Anthropic built and maintains. The other
          three come from people who do that work for a living and published
          their packs for free.
        </p>

        <div className="fae-warn">
          <span className="fae-warn-tag">Before you install</span>
          <p>
            The community packs run with your permissions and Anthropic does not
            vet them. That is not a reason to avoid them, it is a reason to look
            first. Open the repo, see who maintains it, read the SKILL.md, then
            install. Every link here goes to a public repository with a name on
            it.
          </p>
          <p>
            These roles support your work. None of them is a licensed accountant
            or a licensed lawyer, and I will say that again where it matters.
          </p>
        </div>
      </section>

      <article className="fae-hire" id="marketer">
        <div className="fae-badge">
          <div>
            <p className="fae-num">Employee 01</p>
            <h2 className="fae-role">The marketer</h2>
          </div>
          <div className="fae-stat">
            40+ skills
            <br />
            Corey Haines
            <br />
            Community
          </div>
        </div>

        <p>
          The largest of the five and the one I reach for most. It reads like it
          was written by somebody who has actually run campaigns, because it
          was.
        </p>
        <div className="fae-handles">
          <span>copywriting</span>
          <span>email</span>
          <span>SEO</span>
          <span>ad creative</span>
          <span>campaign planning</span>
          <span>positioning</span>
          <span>pricing</span>
          <span>launches</span>
          <span>lead magnets</span>
          <span>conversion</span>
        </div>
        <p>
          The number keeps climbing because he keeps shipping, so I am not
          printing a total that expires in a month. There is a{" "}
          <code>product-marketing</code> skill that stores your product,
          audience, and positioning, and the rest of the pack reads from it. Fill
          that one in before anything else.
        </p>

        <a
          className="fae-src"
          href="https://github.com/coreyhaines31/marketingskills"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/coreyhaines31/marketingskills
        </a>

        <CodeBlock
          label="Plugin route, updates itself"
          text={MARKETER_PLUGIN}
        />
        <CodeBlock
          label="Or drop the raw files in your folder"
          text={MARKETER_NPX}
        />

        <h3>Their first task</h3>
        <CodeBlock label="Try this" text={MARKETER_TASK} />

        <h3>What it needs from you</h3>
        <ul className="fae-feed">
          <li>Your offers and what each one costs</li>
          <li>
            Your customer, described properly. What they do, what they already
            tried, what they are scared of
          </li>
          <li>Three pieces of your own writing so it can hear you</li>
          <li>The claims and phrases you will not put your name to</li>
        </ul>
        <p>
          When marketing output comes back generic, it is almost always the
          second item. Claude is inventing a customer because you never gave it
          one.
        </p>
      </article>

      <article className="fae-hire" id="accountant">
        <div className="fae-badge">
          <div>
            <p className="fae-num">Employee 02</p>
            <h2 className="fae-role">The accountant</h2>
          </div>
          <div className="fae-stat">
            8 skills
            <br />
            Anthropic
            <br />
            Official
          </div>
        </div>

        <p>
          Official, and closer to a real close process than I expected. The eight
          are <code>audit-support</code>, <code>close-management</code>,{" "}
          <code>financial-statements</code>, <code>journal-entry</code>,{" "}
          <code>journal-entry-prep</code>, <code>reconciliation</code>,{" "}
          <code>sox-testing</code>, and <code>variance-analysis</code>.
        </p>
        <div className="fae-handles">
          <span>statements</span>
          <span>reporting</span>
          <span>expenses</span>
          <span>reconciliation</span>
          <span>month end</span>
          <span>variances</span>
        </div>
        <p>
          For a small business the three that earn their keep are{" "}
          <code>financial-statements</code>, which produces your P&amp;L, balance
          sheet, and cash flow with the commentary explaining what moved,{" "}
          <code>reconciliation</code>, which matches your books against what hit
          the bank, and <code>variance-analysis</code>, which tells you whether a
          shortfall came from selling fewer units or charging less for them. Those
          are two different problems and most people never separate them.
        </p>

        <a
          className="fae-src"
          href="https://github.com/anthropics/knowledge-work-plugins"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/anthropics/knowledge-work-plugins
        </a>

        <CodeBlock
          label="Add the marketplace, install finance"
          text={FINANCE_PLUGIN}
        />
        <p>
          Outside a Claude Code session those same lines start with{" "}
          <code>claude plugin</code> instead of a slash. Commands here carry a
          prefix, so you call <code>/finance:variance-analysis</code> rather than
          the bare skill name.
        </p>

        <h3>Their first task</h3>
        <CodeBlock label="Try this" text={FINANCE_TASK} />

        <h3>What it needs from you</h3>
        <ul className="fae-feed">
          <li>
            Currency, reporting period, and your fiscal calendar if your year
            does not start in January
          </li>
          <li>Your chart of accounts</li>
          <li>Budget and actuals</li>
          <li>The report format you use and who reads it</li>
        </ul>
        <p>
          A qualified accountant still reviews anything going to a bank, an
          investor, or FIRS.
        </p>
      </article>

      <article className="fae-hire" id="content">
        <div className="fae-badge">
          <div>
            <p className="fae-num">Employee 03</p>
            <h2 className="fae-role">The content lead</h2>
          </div>
          <div className="fae-stat">
            17 skills
            <br />
            Charlie Hills
            <br />
            Community
          </div>
        </div>

        <p>
          Smaller pack, sharper than its size suggests. Ideas, scripts, hooks,
          carousels, repurposing, thumbnails, and a review skill that studies
          what already worked for you.
        </p>
        <div className="fae-handles">
          <span>content ideas</span>
          <span>short form scripts</span>
          <span>hooks</span>
          <span>carousels</span>
          <span>repurposing</span>
          <span>thumbnails</span>
          <span>performance review</span>
        </div>

        <a
          className="fae-src"
          href="https://github.com/charlie947/social-media-skills"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/charlie947/social-media-skills
        </a>

        <CodeBlock label="Install the social pack" text={SOCIAL_PLUGIN} />

        <h3>Do this or the pack is wasted</h3>
        <p>
          There is a skill called <code>voice-builder</code>. It interviews you,
          reads your samples, and writes two files describing you and how you
          sound. The other sixteen skills read those files every time they run.
          Ten minutes of setup decides whether this pack sounds like you or like
          everyone else who installed it. Run it before you touch anything else.
        </p>
        <p>
          After that, <code>reels-scripting</code> is the one I use most. You give
          it a video that clearly outperformed the rest of your feed and it works
          out what the structure was doing, then writes you something in that
          shape on your own topic.
        </p>

        <h3>Their first task</h3>
        <CodeBlock label="Try this" text={SOCIAL_TASK} />

        <h3>What it needs from you</h3>
        <ul className="fae-feed">
          <li>Three to five of your own posts, including one that flopped</li>
          <li>Your content pillars and your platforms</li>
          <li>How long your videos run and whether you speak to camera</li>
          <li>The hooks and openers you refuse to use</li>
        </ul>
      </article>

      <article className="fae-hire" id="counsel">
        <div className="fae-badge">
          <div>
            <p className="fae-num">Employee 04</p>
            <h2 className="fae-role">The counsel</h2>
          </div>
          <div className="fae-stat">
            9 skills
            <br />
            Anthropic
            <br />
            Official
          </div>
        </div>

        <p>
          Same repository as finance. If you installed the accountant already,
          the marketplace is added and you skip straight to the install line. One
          marketplace, two plugins, seventeen skills, both maintained by the
          people building the model.
        </p>
        <div className="fae-handles">
          <span>review-contract</span>
          <span>triage-nda</span>
          <span>brief</span>
          <span>compliance-check</span>
          <span>legal-risk-assessment</span>
          <span>legal-response</span>
          <span>meeting-briefing</span>
          <span>signature-request</span>
          <span>vendor-check</span>
        </div>
        <p>
          <code>review-contract</code> walks an agreement clause by clause against
          your own list of what you accept and what you refuse.{" "}
          <code>triage-nda</code> tells you in two minutes whether the NDA
          someone sent is normal or whether it is quietly doing something you
          would hate in a year. <code>brief</code> compresses a stack of documents
          into the version you can act on.
        </p>

        <a
          className="fae-src"
          href="https://github.com/anthropics/knowledge-work-plugins/tree/main/legal"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/anthropics/knowledge-work-plugins/tree/main/legal
        </a>

        <CodeBlock
          label="Install legal off the same marketplace"
          text={LEGAL_PLUGIN}
        />

        <div className="fae-warn">
          <span className="fae-warn-tag">If you are in Nigeria</span>
          <p>
            The examples inside this plugin lean on United States law. Tell it
            your jurisdiction before you rely on a word of it, and give it your
            own agreements to work from. Otherwise it will reason confidently
            from the wrong legal system and sound just as sure as it would if it
            were right.
          </p>
        </div>

        <h3>Their first task</h3>
        <CodeBlock label="Try this" text={LEGAL_TASK} />

        <h3>What it needs from you</h3>
        <ul className="fae-feed">
          <li>Your country and the governing law you work under</li>
          <li>
            Terms you accept, terms you negotiate, terms that end the
            conversation
          </li>
          <li>Your own contract templates</li>
          <li>
            The situations that go to a lawyer regardless of what it tells you
          </li>
        </ul>
        <p>
          This is not legal advice and it is not a lawyer. It gets you to the
          lawyer already understanding your own contract.
        </p>
      </article>

      <article className="fae-hire" id="designer">
        <div className="fae-badge">
          <div>
            <p className="fae-num">Employee 05</p>
            <h2 className="fae-role">The designer</h2>
          </div>
          <div className="fae-stat">
            4 skills
            <br />
            Two official
            <br />
            Two community
          </div>
        </div>

        <p>
          Design is the one department where I would not install a single giant
          pack. Four skills, each doing a different job, and together they cover
          your website, your product, and your everyday graphics.
        </p>

        <h3>Canvas design · Anthropic</h3>
        <p>
          Static visual work. Posters, graphics, designed documents. It settles
          on a visual direction before it starts making anything, which is why
          the output does not look stamped out of a template.
        </p>
        <a
          className="fae-src"
          href="https://github.com/anthropics/skills/tree/main/skills/canvas-design"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/anthropics/skills/tree/main/skills/canvas-design
        </a>

        <h3>Frontend design · Anthropic</h3>
        <p>
          Websites and interfaces. It pushes Claude to make deliberate calls on
          type, colour, and layout instead of reaching for the rounded cards and
          purple gradient that every AI built site seems to arrive wearing.
        </p>
        <a
          className="fae-src"
          href="https://github.com/anthropics/skills/tree/main/skills/frontend-design"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/anthropics/skills/tree/main/skills/frontend-design
        </a>

        <CodeBlock
          label="Both live in Anthropic's public skills repo"
          text={DESIGN_ANTHROPIC}
        />

        <h3>UI UX Pro Max · community</h3>
        <p>
          A reference library Claude can pull from. UI styles, colour palettes,
          font pairings, chart types, stacks, UX rules. Useful the moment you
          need six screens to look like they came from the same studio.
        </p>
        <a
          className="fae-src"
          href="https://github.com/nextlevelbuilder/ui-ux-pro-max-skill"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/nextlevelbuilder/ui-ux-pro-max-skill
        </a>
        <CodeBlock label="Install UI UX Pro Max" text={DESIGN_UIUX} />

        <h3>Taste · community</h3>
        <p>
          Taste works on what you already built. Spacing, type, motion, general
          visual judgement. It has grown into a set covering redesigns, minimal
          interfaces, brand kits, mobile, and image to code.
        </p>
        <a
          className="fae-src"
          href="https://github.com/Leonxlnx/taste-skill"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/Leonxlnx/taste-skill
        </a>
        <CodeBlock label="Install Taste" text={DESIGN_TASTE} />

        <h3>What it needs from you</h3>
        <ul className="fae-feed">
          <li>Logo, hex codes, fonts</li>
          <li>Two or three designs you have already shipped</li>
          <li>References you love and at least one you cannot stand</li>
          <li>Your rules on spacing, buttons, imagery, corner radius</li>
        </ul>
        <p>
          Give it your brand tokens once and these skills stop reinventing your
          brand every time you open a chat.
        </p>
      </article>

      <section className="fae-section">
        <h2>No terminal? Install from the app.</h2>
        <p>
          Every command above assumes Claude Code, and you do not need it. In the
          Claude app, open Customize, go to Skills, hit the plus, and browse. To
          add your own, choose Create skill and upload it as a zip. Plugins sit
          in the same menu under the Plugins tab, and the knowledge work
          marketplace holding finance and legal is already there by default.
        </p>
      </section>

      <section className="fae-section">
        <h2>The onboarding nobody does</h2>
        <p>
          Out of the box these are useful. Onboarded, they are yours, and the
          difference is roughly twenty minutes per skill. Anthropic says this
          themselves in the readme for finance and legal. They call the skills
          generic starting points and tell you to put your own terminology and
          processes into the files. Customising is the design, not a workaround.
        </p>
        <p>
          Copy a skill before you edit it. Plugins overwrite their own cache when
          they update and your changes disappear without asking. Put your copy in{" "}
          <code>~/.claude/skills/</code> if it should follow you everywhere, or{" "}
          <code>.claude/skills/</code> inside a project when it belongs to one
          client. Two things that trip people up: the folder name is what you
          type to call it, and the description in the frontmatter at the top is
          how Claude decides to reach for the skill on its own, so leave that
          line alone.
        </p>

        <h3>The prompt I use</h3>
        <CodeBlock
          label="Onboard any skill to your business"
          text={ONBOARD_PROMPT}
        />

        <h3>One file all five can read</h3>
        <p>
          Write this once, keep it where your skills can see it, and stop
          repeating yourself in every chat.
        </p>
        <CodeBlock label="business-context.md" text={BUSINESS_CONTEXT} />
        <p>
          The skills bring the method. This file brings your business. One
          without the other is why so much of this ends up sounding like nobody.
        </p>
      </section>

      <section className="fae-section">
        <h2>Your first week</h2>
        <ul className="fae-week">
          {WEEK.map((item) => (
            <li key={item.day}>
              <span className="fae-day">{item.day}</span>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
        <p>
          Five days, five roles, nothing paid for. The only real cost is the hour
          you spend describing your business well enough for any of them to be
          useful.
        </p>
        <p className="fae-sig">MERCY THADDEUS &nbsp;|&nbsp; mercythaddeus.xyz</p>
      </section>
    </div>
  );
}
