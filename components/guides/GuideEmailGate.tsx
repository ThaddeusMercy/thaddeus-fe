"use client";

import { useEffect, useState } from "react";

import GuideSignupForm from "@/components/guides/GuideSignupForm";
import { trackEvent } from "@/lib/analytics";
import { GUIDE_UNLOCK_KEY } from "@/lib/guide-gate";
import "./guide-gate.css";

/** Without JavaScript the form can't submit, so show the whole guide instead. */
const NO_SCRIPT_UNLOCK =
  "<style>.guide-gate>.guide-gate-content{max-height:none!important;overflow:visible!important}" +
  ".guide-gate>.guide-gate-content::after{display:none!important}" +
  ".guide-gate>.guide-gate-panel{display:none!important}</style>";

export default function GuideEmailGate({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    let stored = false;
    try {
      stored = Boolean(window.localStorage.getItem(GUIDE_UNLOCK_KEY));
    } catch {
      // Storage blocked (private mode etc.): reader sees the gate.
    }
    // Decided here, not from `unlocked` state, so returning subscribers are
    // never counted as gate views.
    if (stored) setUnlocked(true);
    else trackEvent("guide_gate_view", { guide: window.location.pathname });
  }, []);

  return (
    <div
      className="guide-gate"
      data-unlocked={unlocked ? "true" : undefined}
      suppressHydrationWarning
    >
      <noscript dangerouslySetInnerHTML={{ __html: NO_SCRIPT_UNLOCK }} />
      <div className="guide-gate-content">{children}</div>

      {!unlocked && (
        <section
          className="guide-gate-panel relative z-10 -mt-24 px-4 pb-16 md:pb-20"
          aria-labelledby="guide-gate-title"
        >
          <div className="relative mx-auto max-w-lg rounded-2xl border border-border bg-white p-6 shadow-xl md:p-8">
            <GuideSignupForm
              title="Get the full guide free"
              description="Join my newsletter to read the rest. You'll unlock this guide and every other guide on the site, get new guides the day they go live, and one practical AI email from me each week. Unsubscribe any time."
              buttonLabel="Join and read the guide"
              footnote="One email unlocks every guide."
              confirmTitle="Almost there!"
              confirmBody={
                <>
                  I just sent you an email from{" "}
                  <span className="font-medium text-[#1a1a1a]">
                    hello@mercythaddeus.xyz
                  </span>
                  . Tap the Confirm button in it so you get every new guide and
                  my weekly AI email.
                </>
              }
              confirmExtra="Can't find it? Check Spam or Promotions."
              confirmButton="Read the full guide"
              confirmFootnote="Every other guide on the site is unlocked too."
              onConfirm={() => setUnlocked(true)}
              onFailOpen={() => setUnlocked(true)}
            />
          </div>
        </section>
      )}
    </div>
  );
}
