"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

import { trackEvent } from "@/lib/analytics";
import {
  checkEmail,
  DISPOSABLE_EMAIL_ERROR,
  NO_MAIL_DOMAIN_ERROR,
  normaliseEmail,
  type EmailCheckResult,
} from "@/lib/email-check";
import { GUIDE_UNLOCK_KEY, KIT_FORM_URL } from "@/lib/guide-gate";
import "./guide-gate.css";

type Status = "idle" | "loading" | "error";

/** After this, treat signup as failed and let the reader through. */
const CLIENT_TIMEOUT_MS = 12000;

/** Without JavaScript the form can't submit, so show the whole guide instead. */
const NO_SCRIPT_UNLOCK =
  "<style>.guide-gate>.guide-gate-content{max-height:none!important;overflow:visible!important}" +
  ".guide-gate>.guide-gate-content::after{display:none!important}" +
  ".guide-gate>.guide-gate-panel{display:none!important}</style>";

export default function GuideEmailGate({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [unlocked, setUnlocked] = useState(false);
  // Signed up this visit: ask them to confirm by email before opening the guide.
  const [joined, setJoined] = useState(false);
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  // "Did you mean …?" fix, and the address it was offered for. Submitting
  // that same address again means the reader knows best: let it through.
  const [suggestion, setSuggestion] = useState<string | null>(null);
  const [suggestedFor, setSuggestedFor] = useState<string | null>(null);
  const submitRef = useRef<HTMLButtonElement>(null);

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

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setError("");
    setSuggestion(null);

    try {
      const address = normaliseEmail(email);
      // Bots fill the hidden honeypot: skip Kit for them but act as if it worked.
      if (!company.trim()) {
        // Format, throwaway inbox, typo and "can this domain get mail" check.
        // It's a helper, never a wall: if it breaks, carry on to Kit.
        let check: EmailCheckResult = { ok: true };
        try {
          check = await checkEmail(address, {
            skipSuggestion: address === suggestedFor,
          });
        } catch {
          // Fall through with ok: true.
        }
        if (!check.ok) {
          const guide = window.location.pathname;
          if ("suggestion" in check) {
            trackEvent("guide_gate_email_check", { guide, result: "typo" });
            setSuggestedFor(address);
            setSuggestion(check.suggestion);
            setStatus("idle");
            return;
          }
          trackEvent("guide_gate_email_check", {
            guide,
            result:
              check.error === DISPOSABLE_EMAIL_ERROR
                ? "throwaway"
                : check.error === NO_MAIL_DOMAIN_ERROR
                  ? "no_mail"
                  : "invalid",
          });
          throw new Error(check.error);
        }
        const res = await fetch(KIT_FORM_URL, {
          method: "POST",
          headers: { Accept: "application/json" },
          // The referrer lets Kit show which guide each subscriber came from.
          body: new URLSearchParams({
            email_address: address,
            referrer: window.location.href,
          }),
          signal:
            typeof AbortSignal.timeout === "function"
              ? AbortSignal.timeout(CLIENT_TIMEOUT_MS)
              : undefined,
        });
        const data = (await res.json().catch(() => null)) as {
          status?: string;
          errors?: { fields?: unknown; messages?: unknown };
        } | null;
        const fields = data?.errors?.fields;
        const messages = data?.errors?.messages;
        // A bad email is the reader's to fix. Anything else (Kit down, form
        // changed) must never trap a reader behind the gate: let them through.
        if (Array.isArray(fields) && fields.includes("email_address")) {
          throw new Error(
            Array.isArray(messages) && typeof messages[0] === "string"
              ? messages[0]
              : "Enter a valid email address."
          );
        }
        if (!res.ok || data?.status !== "success") {
          // Unlock this page only, so they're asked again once signups work.
          trackEvent("guide_gate_fail_open", {
            guide: window.location.pathname,
            status: res.status,
          });
          setUnlocked(true);
          setStatus("idle");
          return;
        }
      }

      try {
        window.localStorage.setItem(GUIDE_UNLOCK_KEY, new Date().toISOString());
      } catch {
        // Unlock still applies for this page view.
      }
      trackEvent("guide_gate_unlock", { guide: window.location.pathname });
      setJoined(true);
      setStatus("idle");
    } catch (err) {
      const timedOut =
        err instanceof DOMException &&
        (err.name === "TimeoutError" || err.name === "AbortError");
      if (err instanceof TypeError || timedOut) {
        // Network failure or timeout: same rule, don't lock the reader out.
        trackEvent("guide_gate_fail_open", { guide: window.location.pathname });
        setUnlocked(true);
        setStatus("idle");
        return;
      }
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  const acceptSuggestion = () => {
    if (!suggestion) return;
    trackEvent("guide_gate_email_check", {
      guide: window.location.pathname,
      result: "typo_fixed",
    });
    setEmail(suggestion);
    setSuggestion(null);
    // The fix button disappears, so hand focus to the next step.
    submitRef.current?.focus();
  };

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
          <div className="mx-auto max-w-lg rounded-2xl border border-border bg-white p-6 shadow-xl md:p-8">
            {joined ? (
              <div role="status">
                <h2
                  id="guide-gate-title"
                  className="text-xl font-semibold leading-snug text-[#1a1a1a] md:text-2xl"
                >
                  Almost there! <span aria-hidden="true">💌</span>
                </h2>
                <p className="mt-2 break-words text-base leading-relaxed text-[#676767]">
                  I just sent you an email from{" "}
                  <span className="font-medium text-[#1a1a1a]">
                    hello@mercythaddeus.xyz
                  </span>
                  . Tap the Confirm button in it so you get every new guide
                  and my weekly AI email.
                </p>
                <p className="mt-3 text-base leading-relaxed text-[#676767]">
                  Can&apos;t find it? Check Spam or Promotions.
                </p>
                <button
                  type="button"
                  onClick={() => setUnlocked(true)}
                  className="mt-5 min-h-12 w-full rounded-full bg-[#1a1a1a] px-4 py-3 text-base font-medium text-white transition-colors hover:bg-[#333]"
                >
                  Read the full guide
                </button>
                <p className="mt-3 text-base text-[#999]">
                  Every other guide on the site is unlocked too.
                </p>
              </div>
            ) : (
              <>
                <h2
                  id="guide-gate-title"
                  className="text-xl font-semibold leading-snug text-[#1a1a1a] md:text-2xl"
                >
                  Get the full guide free
                </h2>
                <p className="mt-2 text-base leading-relaxed text-[#676767]">
                  Join my newsletter to read the rest. You&apos;ll unlock this
                  guide and every other guide on the site, get new guides the
                  day they go live, and one practical AI email from me each
                  week. Unsubscribe any time.
                </p>

                <form className="mt-5 space-y-3" onSubmit={submit} noValidate>
                  <label htmlFor="guide-gate-email" className="sr-only">
                    Email address
                  </label>
                  <div>
                    <input
                      id="guide-gate-email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      required
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setSuggestion(null);
                      }}
                      className="min-h-12 w-full rounded-full border border-border bg-white px-5 py-3 text-base text-[#1a1a1a] outline-none transition-colors placeholder:text-[#aaa] focus:border-[#1a1a1a]"
                    />
                    {/* Always mounted so screen readers announce the fix. */}
                    <div aria-live="polite">
                      {suggestion && (
                        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 rounded-2xl bg-[#f5f5f5] px-4 py-3">
                          <p className="min-w-0 break-words text-base text-[#1a1a1a]">
                            Did you mean{" "}
                            <span className="font-medium">{suggestion}</span>?
                          </p>
                          <button
                            type="button"
                            onClick={acceptSuggestion}
                            className="min-h-12 min-w-12 rounded-full border border-[#1a1a1a] bg-white px-5 py-2 text-base font-medium text-[#1a1a1a] transition-colors hover:bg-[#1a1a1a] hover:text-white"
                          >
                            Yes, fix it
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                  {/* Honeypot: real readers never see or fill this. */}
                  <input
                    type="text"
                    // Not "company": browsers autofill that, which would skip Kit
                    // and silently drop a real reader's email.
                    name="hp_extra"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="absolute -left-[9999px] h-px w-px opacity-0"
                  />
                  <button
                    ref={submitRef}
                    type="submit"
                    disabled={status === "loading"}
                    className="min-h-12 w-full rounded-full bg-[#1a1a1a] px-4 py-3 text-base font-medium text-white transition-colors hover:bg-[#333] disabled:opacity-60"
                  >
                    {status === "loading" ? "Joining..." : "Join and read the guide"}
                  </button>
                  {status === "error" && (
                    <p role="alert" className="text-base text-red-600">
                      {error}
                    </p>
                  )}
                </form>

                <p className="mt-3 text-base text-[#999]">
                  One email unlocks every guide.
                </p>
              </>
            )}
          </div>
        </section>
      )}
    </div>
  );
}
