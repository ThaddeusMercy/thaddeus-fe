"use client";

import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

import "./five-ai-tools.css";

function Handle() {
  return (
    <p className="fat-handle">mercythaddeus_ &nbsp;|&nbsp; attentionfactory</p>
  );
}

export default function FiveAiToolsGuide() {
  return (
    <div className="fat-guide">
      <Link href="/guide" className="fat-back">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        All guides
      </Link>

      <header className="fat-cover">
        <p className="fat-eyebrow">A practical guide</p>
        <h1>5 AI tools that are actually worth your money</h1>
        <p className="fat-cover-sub">
          How I use Claude Max, ChatGPT Pro, Higgsfield, Apify and OpenRouter,
          what they cost, and who should skip them.
        </p>
        <div className="fat-cover-meta">
          <div className="fat-name">Mercy Thaddeus</div>
          <div>Attention Factory</div>
          <div className="fat-dim">Prices checked 3 August 2026</div>
        </div>
        <Handle />
      </header>

      <section className="fat-page">
        <div className="fat-num">00</div>
        <h2>Before you buy anything</h2>
        <p className="fat-deck">
          &ldquo;Worth paying for&rdquo; does not mean &ldquo;buy all five.&rdquo;
        </p>
        <p>
          I use a lot of AI tools. These five stay in my stack because each one
          handles a different part of the work.
        </p>
        <p>
          But there is overlap. Claude Max and ChatGPT Pro are both premium AI
          subscriptions. Higgsfield is for visual work. Apify and OpenRouter make
          more sense when you are building agents, products or automations.
        </p>
        <p>
          The right question is not, &ldquo;Which tool is the best?&rdquo; It is,
          &ldquo;What job am I paying this tool to do?&rdquo;
        </p>

        <h3>Price snapshot</h3>
        <div className="fat-table-scroll">
          <table>
            <thead>
              <tr>
                <th>Tool</th>
                <th>What it is for</th>
                <th>Current pricing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Claude Max</td>
                <td>Writing, analysis and Claude Code</td>
                <td>$100 or $200/month</td>
              </tr>
              <tr>
                <td>ChatGPT Pro</td>
                <td>Research, files, images, coding and deep work</td>
                <td>$100 or $200/month</td>
              </tr>
              <tr>
                <td>Higgsfield</td>
                <td>AI images and video</td>
                <td>
                  $9 / $49 / $129 listed; live promotion may change checkout
                </td>
              </tr>
              <tr>
                <td>Apify</td>
                <td>Web data and scraping</td>
                <td>Free, then $29 / $199 / $999 plus extra usage</td>
              </tr>
              <tr>
                <td>OpenRouter</td>
                <td>One API for many AI models</td>
                <td>Free models or pay as you go + credit fee</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="fat-take">
          <h3>My honest take</h3>
          <p>
            There is no honest single monthly total for this list. Apify and
            OpenRouter depend on usage, while Claude, ChatGPT and Higgsfield have
            more than one paid tier.
          </p>
        </div>
        <Handle />
      </section>

      <section className="fat-page">
        <div className="fat-num">01</div>
        <h2>Claude Max</h2>
        <p className="fat-deck">
          The one I use for long thinking, writing and building.
        </p>
        <p>
          Claude is where I do the work that needs patience. I use it to think
          through an idea, work on long documents, review a plan, build or debug
          something with Claude Code, and keep refining until the answer is
          useful.
        </p>
        <p>
          What makes Max worth it for me is not a secret feature. It is the
          higher usage. When Claude is part of your work every day, hitting a
          limit in the middle of a project gets expensive.
        </p>

        <h3>Current price</h3>
        <div className="fat-prices">
          <div>
            <span className="fat-lbl">Max 5x</span>
            <span>$100 per month</span>
          </div>
          <div>
            <span className="fat-lbl">Max 20x</span>
            <span>$200 per month</span>
          </div>
          <div>
            <span className="fat-lbl">Claude Pro</span>
            <span>$20 per month or $200 per year</span>
          </div>
        </div>
        <p className="fat-fine">
          Claude and Claude Code share the same subscription allowance. Claude
          API usage is billed separately.
        </p>

        <h3>Who should pay for it</h3>
        <p>
          People who use Claude every day for writing, coding, analysis or large
          projects.
        </p>

        <h3>Who should skip it</h3>
        <p>
          Someone who opens Claude a few times a week. Start with Pro. Upgrade
          only when the limit is getting in the way.
        </p>

        <div className="fat-take">
          <h3>My honest take</h3>
          <p>
            Do not buy Max because you like Claude. Buy it because the Pro limits
            are interrupting paid work or serious projects.
          </p>
        </div>
        <Handle />
      </section>

      <section className="fat-page">
        <div className="fat-num">02</div>
        <h2>ChatGPT Pro</h2>
        <p className="fat-deck">
          The broader workbench for research, files, images and code.
        </p>
        <p>
          ChatGPT is the tool I use when the work crosses formats. I can
          research, upload files, create or edit images, work with code, use deep
          research, and turn the result into something I can send.
        </p>
        <p>
          Pro makes sense when Plus is no longer enough. The two Pro tiers have
          the same main capabilities. The difference is how much you can use
          them.
        </p>

        <h3>Current price</h3>
        <div className="fat-prices">
          <div>
            <span className="fat-lbl">Pro 5x</span>
            <span>$100 per month</span>
          </div>
          <div>
            <span className="fat-lbl">Pro 20x</span>
            <span>$200 per month</span>
          </div>
          <div>
            <span className="fat-lbl">ChatGPT Plus</span>
            <span>$20 per month</span>
          </div>
        </div>
        <p className="fat-fine">
          The ChatGPT subscription does not include OpenAI API usage. API usage
          is billed separately.
        </p>

        <h3>Who should pay for it</h3>
        <p>
          Heavy users who already hit Plus limits, use the Pro model, run a lot
          of Codex tasks, or rely on deep research and image generation often.
        </p>

        <h3>Who should skip it</h3>
        <p>
          Someone who mainly asks questions, writes captions or uploads the
          occasional document. Plus is probably enough.
        </p>

        <div className="fat-take">
          <h3>My honest take</h3>
          <p>
            Most people do not need Claude Max and ChatGPT Pro at the same time.
            Choose one first. Pay for both only when you can name the different
            jobs each one handles.
          </p>
        </div>
        <Handle />
      </section>

      <section className="fat-page">
        <div className="fat-num">03</div>
        <h2>Higgsfield</h2>
        <p className="fat-deck">The visual tool in the stack.</p>
        <p>
          I use Higgsfield when an idea needs to become something people can see.
          That includes concept images, ad visuals, product shots, short AI
          videos and scenes that would be difficult or expensive to film.
        </p>
        <p>
          The useful part is not just one video model. Higgsfield puts several
          image and video models in one place, then adds tools for camera
          control, character consistency and ad creation. That gives me room to
          test a visual idea without opening five different subscriptions.
        </p>

        <h3>Current price</h3>
        <div className="fat-prices">
          <div>
            <span className="fat-lbl">Basic</span>
            <span>$9 per month, 120 credits</span>
          </div>
          <div>
            <span className="fat-lbl">Plus</span>
            <span>$49 per month, 1,000 credits</span>
          </div>
          <div>
            <span className="fat-lbl">Ultra</span>
            <span>$129 per month, 3,000 credits</span>
          </div>
        </div>
        <p className="fat-fine">
          These figures appear in Higgsfield&apos;s July 2026 guides. The live
          pricing page is currently advertising 30% off, so checkout may differ
          by promotion, billing cycle or region.
        </p>

        <h3>What to watch</h3>
        <p>
          Video models use credits at different rates. A plan that looks large
          can disappear quickly if you keep rerunning expensive models.
        </p>

        <h3>Who should pay for it</h3>
        <p>
          Creators, marketers and brands that make visuals or videos every week.
        </p>

        <h3>Who should skip it</h3>
        <p>
          Someone who only needs an occasional image. Use the free option first,
          then pay when the tool becomes part of your content process.
        </p>

        <div className="fat-take">
          <h3>My honest take</h3>
          <p>
            Do not begin with video. Get the image, character, product and visual
            direction right first. Then animate the best version. You will waste
            fewer credits.
          </p>
        </div>
        <Handle />
      </section>

      <section className="fat-page">
        <div className="fat-num">04</div>
        <h2>Apify</h2>
        <p className="fat-deck">
          For collecting web data and running repeatable web jobs.
        </p>
        <p>
          Apify is not another chatbot. It is a platform for collecting data from
          websites and running web automation.
        </p>
        <p>
          It has ready-made tools called Actors. I can use them to collect Google
          Maps leads, pull public social media data, crawl websites, monitor
          competitors, track prices or feed current web data into an AI agent. You
          can run an Actor from the website, schedule it or connect it to another
          system through an API.
        </p>

        <h3>Current price</h3>
        <div className="fat-prices">
          <div>
            <span className="fat-lbl">Free</span>
            <span>$0, with $5 of usage each month</span>
          </div>
          <div>
            <span className="fat-lbl">Starter</span>
            <span>$29 per month, with $29 included to spend</span>
          </div>
          <div>
            <span className="fat-lbl">Scale</span>
            <span>$199 per month, with $199 included to spend</span>
          </div>
          <div>
            <span className="fat-lbl">Business</span>
            <span>$999 per month, with $999 included to spend</span>
          </div>
        </div>
        <p className="fat-fine">
          The plan price is not always the final cost. Some Actors charge
          separately, and compute, proxies, storage or extra usage can add to the
          bill.
        </p>

        <h3>Who should pay for it</h3>
        <p>
          People building lead systems, research tools, monitoring systems,
          agents or automations that need web data.
        </p>

        <h3>Who should skip it</h3>
        <p>Someone who only wants AI to write or answer questions.</p>

        <div className="fat-take">
          <h3>My honest take</h3>
          <p>
            Start on Free. Run one useful Actor and check the cost of one complete
            run. Do not move to Starter until you know how often you need it.
          </p>
        </div>
        <Handle />
      </section>

      <section className="fat-page">
        <div className="fat-num">05</div>
        <h2>OpenRouter</h2>
        <p className="fat-deck">One API and one bill for many AI models.</p>
        <p>
          OpenRouter is what I use when a product or agent needs access to
          different AI models.
        </p>
        <p>
          Instead of opening a separate API account for every provider, I can use
          one OpenRouter API key and choose from hundreds of models. I can change
          the model, set a budget and use fallbacks if one provider is
          unavailable.
        </p>
        <p>
          It is not the same as paying for ChatGPT Pro or Claude Max. Those are
          subscriptions for their apps. OpenRouter is mainly pay-as-you-go access
          for things you are building.
        </p>

        <h3>Current price</h3>
        <div className="fat-prices">
          <div>
            <span className="fat-lbl">Free</span>
            <span>25+ free models, with a 50-request daily limit</span>
          </div>
          <div>
            <span className="fat-lbl">Pay as you go</span>
            <span>no monthly minimum</span>
          </div>
          <div>
            <span className="fat-lbl">Model usage</span>
            <span>charged at the provider&apos;s listed rate</span>
          </div>
          <div>
            <span className="fat-lbl">Credit purchase fee</span>
            <span>5.5%, with a $0.80 minimum</span>
          </div>
        </div>
        <p className="fat-fine">
          Because of the minimum fee, very small top-ups are poor value. A $5
          credit purchase still carries an $0.80 fee.
        </p>

        <h3>Who should pay for it</h3>
        <p>
          Developers and people building agents, apps or automations that need
          model choice and one billing system.
        </p>

        <h3>Who should skip it</h3>
        <p>Someone who only uses AI through the ChatGPT or Claude website.</p>

        <div className="fat-take">
          <h3>My honest take</h3>
          <p>
            OpenRouter does not always make the model itself cheaper. The value is
            simpler setup, one API, easier testing and better control over which
            model does each job.
          </p>
        </div>
        <Handle />
      </section>

      <section className="fat-page">
        <div className="fat-num">06</div>
        <h2>What I would pay for first</h2>
        <p className="fat-deck">Start with the job, not the subscription.</p>

        <div className="fat-block">
          <h4>For everyday writing, research and work</h4>
          <p>
            Start with Claude Pro or ChatGPT Plus at $20. Move to Max or Pro only
            when you are hitting the limit often.
          </p>
        </div>
        <div className="fat-block">
          <h4>For content, ads and video</h4>
          <p>
            Add Higgsfield when you know what you want to publish each month. A
            clear production plan will save more money than a larger credit pack.
          </p>
        </div>
        <div className="fat-block">
          <h4>For agents and automations</h4>
          <p>
            Start with OpenRouter credits and Apify&apos;s free plan. Let real
            usage tell you when to upgrade.
          </p>
        </div>

        <p className="fat-pull" style={{ marginTop: 34 }}>
          You do not need a $500 AI stack to start.
        </p>
        <p>You need one tool tied to one problem you solve often.</p>

        <div className="fat-question">
          <p className="fat-q">Before you subscribe, answer this:</p>
          <p>&ldquo;What exact task will this tool do for me this week?&rdquo;</p>
          <p>If you cannot answer that in one sentence, do not pay yet.</p>
        </div>
        <Handle />
      </section>
    </div>
  );
}
