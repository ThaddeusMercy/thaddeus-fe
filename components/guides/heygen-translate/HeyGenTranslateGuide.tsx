"use client";

import Link from "next/link";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import { ArrowLeft } from "@phosphor-icons/react";

import { HEYGEN_TRANSLATE_SLUG, STATS, TIPS } from "./data";
import "./heygen-translate.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700", "900"],
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  weight: ["400", "500", "600", "700"],
});

export default function HeyGenTranslateGuide() {
  return (
    <div
      className={`heygen-translate ${fraunces.variable} ${hanken.variable}`}
    >
      <div className="hg-wrap">
        <Link href="/guide" className="hg-back">
          <ArrowLeft className="h-4 w-4" aria-hidden />
          All guides
        </Link>

        <header>
          <span className="hg-kicker hg-reveal hg-d1 hg-serif">
            <span className="hg-dot" aria-hidden />
            Free Guide
          </span>
          <h1 className="hg-reveal hg-d2 hg-serif">
            Make a video of yourself <em>fluent</em> in a language you
            don&apos;t speak.
          </h1>
          <p className="hg-lede hg-reveal hg-d3">
            It sounds impossible. It takes about ten minutes. This is the exact
            tool and the full set of steps so you can do it yourself, even if
            today is the first time you&apos;ve heard of any of this.
          </p>
          <div className="hg-byline hg-reveal hg-d4">
            <div className="hg-avatar hg-serif">M</div>
            <div>
              <div className="hg-who">Mercy Thaddeus</div>
              <div className="hg-what">
                AI educator &amp; creator · Attention Factory
              </div>
            </div>
          </div>
        </header>

        <section className="hg-intro hg-reveal hg-d4">
          <h2 className="hg-serif">The tool is called HeyGen.</h2>
          <p>
            HeyGen is an AI video tool that takes a video you&apos;ve already
            recorded and rebuilds the audio in another language. It clones your
            voice so the new version still sounds like you, and it reshapes your
            lip movement so your mouth matches the new words. You record once,
            and it gives you the same video in language after language. No
            reshoots, no hiring voice actors, no learning the language
            yourself.
          </p>
          <div className="hg-stats">
            {STATS.map((stat) => (
              <div key={stat.label} className="hg-stat">
                <b className="hg-serif">{stat.value}</b>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="hg-sec-head">
          <span className="hg-num hg-serif">Before you start</span>
          <h3 className="hg-serif">What you&apos;ll need</h3>
        </div>
        <div className="hg-prose">
          <p>
            Just two things. A <strong>video of yourself talking</strong>, where
            your voice is clear and your face is visible, and a{" "}
            <strong>free HeyGen account</strong>. The clip can be something you
            film on your phone or a video you already posted somewhere.
            That&apos;s the whole shopping list.
          </p>
        </div>

        <div className="hg-sec-head">
          <span className="hg-num hg-serif">The walkthrough</span>
          <h3 className="hg-serif">From one video to ten languages</h3>
        </div>

        <div className="hg-steps">
          <div className="hg-step">
            <div className="hg-marker hg-serif">1</div>
            <div className="hg-body">
              <h4>Create a free HeyGen account</h4>
              <p>
                Go to <strong>heygen.com</strong> and sign up, then find the{" "}
                <strong>Video Translate</strong> tool. The free plan lets you
                translate up to <span className="hg-pill">3 videos a month</span>
                , each up to 3 minutes long, which is more than enough to try it
                before you decide whether to pay for anything.
              </p>
            </div>
          </div>

          <div className="hg-step">
            <div className="hg-marker hg-serif">2</div>
            <div className="hg-body">
              <h4>Bring in your video</h4>
              <p>
                Upload the video file from your computer or phone, or paste a{" "}
                <strong>YouTube link</strong> if your video already lives there.
                One tip that matters more than it sounds: start with a clip
                where your audio is clean, because clear voice in means a clean
                translation out.
              </p>
            </div>
          </div>

          <div className="hg-step">
            <div className="hg-marker hg-serif">3</div>
            <div className="hg-body">
              <h4>Choose your languages</h4>
              <p>
                Tell it the language your video is currently in, then pick the
                languages you want it translated into. You can select up to{" "}
                <span className="hg-pill">10 at once</span>, and HeyGen will
                create a separate version for each one from the same original.
              </p>
            </div>
          </div>

          <div className="hg-step">
            <div className="hg-marker hg-serif">4</div>
            <div className="hg-body">
              <h4>Keep your voice and sync your lips</h4>
              <p>
                Here is the part that makes it feel like magic. Choose to{" "}
                <strong>clone your own voice</strong> so the translated version
                still sounds like you, or pick one of HeyGen&apos;s ready-made
                AI voices instead. Turn on <strong>lip sync</strong> so your
                mouth moves with the new words, and switch on subtitles if you
                want captions added automatically.
              </p>
            </div>
          </div>

          <div className="hg-step">
            <div className="hg-marker hg-serif">5</div>
            <div className="hg-body">
              <h4>Translate and wait a few minutes</h4>
              <p>
                Submit the video and let HeyGen process it. When it&apos;s
                finished, each translated version shows up in your projects
                library, ready for you to open and check.
              </p>
            </div>
          </div>

          <div className="hg-step">
            <div className="hg-marker hg-serif">6</div>
            <div className="hg-body">
              <h4>Always review before you trust it</h4>
              <p>
                This is the step most people skip, and it&apos;s the one that
                matters. AI translation is impressive but not perfect, so{" "}
                <strong>watch the result back</strong> and fix anything that
                sounds wrong or got mistranslated. A couple of minutes here saves
                you from posting something incorrect to people who actually
                speak that language.
              </p>
            </div>
          </div>

          <div className="hg-step">
            <div className="hg-marker hg-serif">7</div>
            <div className="hg-body">
              <h4>Download and share it</h4>
              <p>
                Export your finished video{" "}
                <strong>with or without captions</strong>, then post each
                language version wherever that audience spends time. One
                recording, and suddenly you&apos;re showing up in markets you
                couldn&apos;t reach before.
              </p>
            </div>
          </div>
        </div>

        <div className="hg-sec-head">
          <span className="hg-num hg-serif">Make it sharper</span>
          <h3 className="hg-serif">Three things that level it up</h3>
        </div>

        <div className="hg-tips">
          {TIPS.map((tip) => (
            <div key={tip.letter} className="hg-tip">
              <div className={`hg-ic${tip.teal ? " hg-teal" : ""}`}>
                {tip.letter}
              </div>
              <div>
                <h5>{tip.title}</h5>
                <p>{tip.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="hg-callout">
          <b className="hg-serif">One honest note</b>
          <p>
            The free plan caps you at 3 videos a month and 3 minutes each.
            That&apos;s a genuine testing ground, but if this becomes part of
            how you publish, the paid plans unlock more languages, longer
            videos, and sharper voice quality. Pricing and limits change over
            time, so check the current plan before you rely on it.
          </p>
        </div>

        <footer>
          <div className="hg-ff hg-serif">
            That&apos;s it. Now your work can reach people who could never
            understand it before.
          </div>
          <p className="hg-sub">
            If this helped, I share tools and workflows like this every week.
          </p>
          <a
            className="hg-handle"
            href="https://instagram.com/mercythaddeus_"
            target="_blank"
            rel="noopener noreferrer"
          >
            @mercythaddeus_
          </a>
          <div className="hg-small">
            FREE GUIDE · MERCY THADDEUS · ATTENTION FACTORY
          </div>
        </footer>
      </div>
    </div>
  );
}
