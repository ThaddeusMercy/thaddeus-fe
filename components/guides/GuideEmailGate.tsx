"use client";

import { useEffect, useState, type FormEvent } from "react";

import { trackEvent } from "@/lib/analytics";
import { GUIDE_UNLOCK_KEY } from "@/lib/guide-gate";
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
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

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

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          company,
          referrer: window.location.href,
        }),
        signal:
          typeof AbortSignal.timeout === "function"
            ? AbortSignal.timeout(CLIENT_TIMEOUT_MS)
            : undefined,
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      // A bad email is the reader's to fix. Anything else (Kit down, keys not
      // set yet) must never trap a reader behind the gate: let them through.
      if (res.status === 400) {
        throw new Error(data.error || "Enter a valid email address.");
      }
      if (!res.ok) {
        // Unlock this page only, so they're asked again once signups work.
        trackEvent("guide_gate_fail_open", {
          guide: window.location.pathname,
          status: res.status,
        });
        setUnlocked(true);
        setStatus("idle");
        return;
      }

      try {
        window.localStorage.setItem(GUIDE_UNLOCK_KEY, new Date().toISOString());
      } catch {
        // Unlock still applies for this page view.
      }
      trackEvent("guide_gate_unlock", { guide: window.location.pathname });
      setUnlocked(true);
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
            <h2
              id="guide-gate-title"
              className="text-xl font-semibold leading-snug text-[#1a1a1a] md:text-2xl"
            >
              Keep reading for free
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[#676767] md:text-base">
              Drop your email to unlock the rest of this guide and every other
              guide on the site. You&apos;ll also get my newsletter with new AI
              guides and tools as they come out. Unsubscribe any time.
            </p>

            <form className="mt-5 space-y-3" onSubmit={submit} noValidate>
              <label htmlFor="guide-gate-email" className="sr-only">
                Email address
              </label>
              <input
                id="guide-gate-email"
                type="email"
                inputMode="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-full border border-border bg-white px-5 py-3 text-base text-[#1a1a1a] outline-none transition-colors placeholder:text-[#aaa] focus:border-[#1a1a1a]"
              />
              {/* Honeypot: real readers never see or fill this. */}
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="absolute -left-[9999px] h-px w-px opacity-0"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full rounded-full bg-[#1a1a1a] px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-[#333] disabled:opacity-60"
              >
                {status === "loading" ? "Unlocking..." : "Unlock the guide"}
              </button>
              {status === "error" && (
                <p role="alert" className="text-sm text-red-600">
                  {error}
                </p>
              )}
            </form>

            <p className="mt-3 text-xs text-[#999]">
              One email unlocks every guide.
            </p>
          </div>
        </section>
      )}
    </div>
  );
}
