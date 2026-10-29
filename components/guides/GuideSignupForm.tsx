"use client";

import { useRef, useState, type FormEvent, type ReactNode } from "react";

import { trackEvent } from "@/lib/analytics";
import {
  checkEmail,
  DISPOSABLE_EMAIL_ERROR,
  NO_MAIL_DOMAIN_ERROR,
  normaliseEmail,
  type EmailCheckResult,
} from "@/lib/email-check";
import { GUIDE_UNLOCK_KEY, KIT_FORM_URL } from "@/lib/guide-gate";

type Status = "idle" | "loading" | "error";

const CLIENT_TIMEOUT_MS = 12000;

type GuideSignupFormProps = {
  titleId?: string;
  inputId?: string;
  title: string;
  description: ReactNode;
  buttonLabel: string;
  footnote: string;
  confirmTitle: string;
  confirmBody: ReactNode;
  confirmExtra?: ReactNode;
  confirmButton?: string;
  confirmFootnote?: string;
  /** Gate pages reveal the guide. Inline cards have nothing to reveal. */
  onConfirm?: () => void;
  /** Network and Kit failures on a gated page should open the guide. */
  onFailOpen?: () => void;
};

export default function GuideSignupForm({
  titleId = "guide-gate-title",
  inputId = "guide-gate-email",
  title,
  description,
  buttonLabel,
  footnote,
  confirmTitle,
  confirmBody,
  confirmExtra,
  confirmButton,
  confirmFootnote,
  onConfirm,
  onFailOpen,
}: GuideSignupFormProps) {
  const [joined, setJoined] = useState(false);
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [suggestion, setSuggestion] = useState<string | null>(null);
  const [suggestedFor, setSuggestedFor] = useState<string | null>(null);
  const submitRef = useRef<HTMLButtonElement>(null);
  const lastSuggestionRef = useRef<string | null>(null);

  const failOpen = () => {
    if (onFailOpen) {
      onFailOpen();
      setStatus("idle");
      return;
    }
    setStatus("error");
    setError("Couldn't reach the list just now. Try again in a minute.");
  };

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setError("");
    setSuggestion(null);

    try {
      const address = normaliseEmail(email);
      if (!company.trim()) {
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
            lastSuggestionRef.current = check.suggestion;
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
          if (
            check.error === NO_MAIL_DOMAIN_ERROR &&
            address === suggestedFor &&
            lastSuggestionRef.current
          ) {
            setSuggestion(lastSuggestionRef.current);
          }
          throw new Error(check.error);
        }
        const res = await fetch(KIT_FORM_URL, {
          method: "POST",
          headers: { Accept: "application/json" },
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
        if (Array.isArray(fields) && fields.includes("email_address")) {
          throw new Error(
            Array.isArray(messages) && typeof messages[0] === "string"
              ? messages[0]
              : "Enter a valid email address."
          );
        }
        if (!res.ok || data?.status !== "success") {
          trackEvent("guide_gate_fail_open", {
            guide: window.location.pathname,
            status: res.status,
          });
          failOpen();
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
        trackEvent("guide_gate_fail_open", { guide: window.location.pathname });
        failOpen();
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
    submitRef.current?.focus();
  };

  if (joined) {
    return (
      <div role="status">
        <h2
          id={titleId}
          className="text-xl font-semibold leading-snug text-[#1a1a1a] md:text-2xl"
        >
          {confirmTitle} <span aria-hidden="true">💌</span>
        </h2>
        <div className="mt-2 break-words text-base leading-relaxed text-[#676767]">
          {confirmBody}
        </div>
        {confirmExtra ? (
          <div className="mt-3 text-base leading-relaxed text-[#676767]">
            {confirmExtra}
          </div>
        ) : null}
        {confirmButton ? (
          <button
            type="button"
            onClick={onConfirm}
            className="mt-5 min-h-12 w-full rounded-full bg-[#1a1a1a] px-4 py-3 text-base font-medium text-white transition-colors hover:bg-[#333]"
          >
            {confirmButton}
          </button>
        ) : null}
        {confirmFootnote ? (
          <p className="mt-3 text-base text-[#676767]">{confirmFootnote}</p>
        ) : null}
      </div>
    );
  }

  return (
    <>
      <h2
        id={titleId}
        className="text-xl font-semibold leading-snug text-[#1a1a1a] md:text-2xl"
      >
        {title}
      </h2>
      <div className="mt-2 text-base leading-relaxed text-[#676767]">
        {description}
      </div>

      <form className="mt-5 space-y-3" onSubmit={submit} noValidate>
        <label htmlFor={inputId} className="sr-only">
          Email address
        </label>
        <div>
          <input
            id={inputId}
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
          <div aria-live="polite">
            {suggestion && (
              <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 rounded-2xl bg-[#f5f5f5] px-4 py-3">
                <p className="min-w-0 break-words text-base text-[#1a1a1a]">
                  Did you mean <span className="font-medium">{suggestion}</span>?
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
        <input
          type="text"
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
          {status === "loading" ? "Joining..." : buttonLabel}
        </button>
        {status === "error" && (
          <p role="alert" className="text-base text-red-600">
            {error}
          </p>
        )}
      </form>

      <p className="mt-3 text-base text-[#676767]">{footnote}</p>
    </>
  );
}
