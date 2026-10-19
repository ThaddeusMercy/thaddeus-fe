"use client";

import { useEffect, useState } from "react";

import GuideSignupForm from "@/components/guides/GuideSignupForm";
import { GUIDE_UNLOCK_KEY } from "@/lib/guide-gate";

export default function GuideNewsletterCard() {
  const [alreadyIn, setAlreadyIn] = useState(false);

  useEffect(() => {
    try {
      setAlreadyIn(Boolean(window.localStorage.getItem(GUIDE_UNLOCK_KEY)));
    } catch {
      // Storage blocked: show the card.
    }
  }, []);

  if (alreadyIn) return null;

  return (
    <section className="px-0 pt-4" aria-label="Newsletter">
      <div className="relative mx-auto max-w-lg rounded-2xl border border-border bg-white p-6 shadow-xl md:p-8">
        <GuideSignupForm
          titleId="guide-newsletter-title"
          inputId="guide-gate-email"
          title="Join my newsletter"
          description="New guides land in your inbox the day they go live, plus one practical AI email from me each week. Unsubscribe any time."
          buttonLabel="Join the newsletter"
          footnote="One email unlocks every guide."
          confirmTitle="Almost there!"
          confirmBody={
            <>
              I just sent you an email from{" "}
              <span className="font-medium text-[#1a1a1a]">
                hello@mercythaddeus.xyz
              </span>
              . Tap the Confirm button in it so you get every new guide and my
              weekly AI email.
            </>
          }
          confirmExtra="Can't find it? Check Spam or Promotions."
          confirmFootnote="Every other guide on the site is unlocked too."
        />
      </div>
    </section>
  );
}
