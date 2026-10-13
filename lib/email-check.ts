/**
 * Smart email check for the guide gate, run in the browser before posting
 * to Kit. Kit's form is double opt-in, so an address that can't receive
 * email never confirms and the reader never gets the guides.
 *
 * Order: format → throwaway inbox → typo suggestion → domain DNS lookup.
 * The DNS lookup fails open: any network error, timeout or odd answer lets
 * the address through. Only a definite "this domain can't take mail" blocks.
 */

import { EMAIL_RE } from "./guide-gate";

export type EmailCheckResult =
  | { ok: true }
  | { ok: false; error: string }
  | { ok: false; suggestion: string };

export type EmailCheckOptions = {
  /** Skip the "Did you mean…?" step (the reader resubmitted unchanged). */
  skipSuggestion?: boolean;
  /** Skip the DNS lookup entirely. */
  skipDns?: boolean;
  /** Budget for the whole DNS lookup. Defaults to 3 seconds. */
  dnsTimeoutMs?: number;
  /** Injected for tests; defaults to the global fetch. */
  fetch?: typeof fetch;
};

export const INVALID_EMAIL_ERROR = "Enter a valid email address.";
export const DISPOSABLE_EMAIL_ERROR =
  "Please use your real email so you get the guides. Temporary inboxes don't work here.";
export const NO_MAIL_DOMAIN_ERROR =
  "That email address can't receive email. Check for a typo.";

const DOH_URL = "https://cloudflare-dns.com/dns-query";
const DNS_TIMEOUT_MS = 3000;

/** Trimmed and lowercased, the form Kit gets. */
export function normaliseEmail(address: string): string {
  return address.trim().toLowerCase();
}

/**
 * Services sold as throwaway or burner inboxes only. Everyday privacy relays
 * (Apple Hide My Email, Firefox Relay, DuckDuckGo, SimpleLogin) are NOT here:
 * those readers can still confirm and keep receiving the guides.
 */
const DISPOSABLE_DOMAINS = new Set([
  "mailinator.com",
  "mailinator.net",
  "guerrillamail.com",
  "guerrillamail.net",
  "guerrillamail.org",
  "guerrillamail.biz",
  "guerrillamail.de",
  "guerrillamail.info",
  "guerrillamailblock.com",
  "sharklasers.com",
  "grr.la",
  "pokemail.net",
  "spam4.me",
  "10minutemail.com",
  "10minutemail.net",
  "20minutemail.com",
  "temp-mail.org",
  "temp-mail.io",
  "tempmail.com",
  "tempmail.net",
  "tempmailo.com",
  "tmpmail.org",
  "tmpmail.net",
  "yopmail.com",
  "yopmail.net",
  "yopmail.fr",
  "getnada.com",
  "nada.email",
  "maildrop.cc",
  "dispostable.com",
  "throwawaymail.com",
  "fakeinbox.com",
  "mintemail.com",
  "emailondeck.com",
  "mohmal.com",
  "tempail.com",
  "mailnesia.com",
  "mytemp.email",
  "moakt.com",
  "mailcatch.com",
  "inboxkitten.com",
  "tempr.email",
  "discard.email",
  "mail.tm",
  "mail.gw",
  "getairmail.com",
  "minuteinbox.com",
  "emailfake.com",
]);

/** Most-used inbox providers, most popular first (wins ties). */
const COMMON_DOMAINS = [
  "gmail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "icloud.com",
  "live.com",
  "ymail.com",
  "aol.com",
  "protonmail.com",
  "proton.me",
  "msn.com",
  "me.com",
  "googlemail.com",
  "yahoo.co.uk",
  "hotmail.co.uk",
] as const;

const COMMON_DOMAIN_SET = new Set<string>(COMMON_DOMAINS);

/** Provider name (first label) → the domain to suggest for it. */
const PROVIDER_HOME: Record<string, string> = {
  gmail: "gmail.com",
  googlemail: "googlemail.com",
  yahoo: "yahoo.com",
  ymail: "ymail.com",
  hotmail: "hotmail.com",
  outlook: "outlook.com",
  live: "live.com",
  msn: "msn.com",
  icloud: "icloud.com",
  me: "me.com",
  aol: "aol.com",
  protonmail: "protonmail.com",
  proton: "proton.me",
};

/** Endings that are a slip of the finger, not a real country domain. */
const TLD_TYPOS = new Set([
  "con",
  "cmo",
  "ocm",
  "vom",
  "xom",
  "cpm",
  "cim",
  "comm",
  "coom",
  "cm",
  "om",
  "co",
  "com.com",
]);

/**
 * Only providers with a 5+ letter name get fuzzy matching. Short ones (aol,
 * msn, me, live) sit one or two letters away from real domains like mtn.com,
 * gmx.com and mac.com, so for those only the ending is corrected.
 */
const FUZZY_LABEL_MIN = 5;
const FUZZY_DOMAIN_MIN = 6;
const FUZZY_MAX_DISTANCE = 2;

/** Real inbox domains that happen to sit close to a big provider. */
const REAL_LOOKALIKES = new Set([
  "mail.com",
  "email.com",
  "cloud.com",
  "gmx.com",
  "gmx.net",
  "mac.com",
  "hey.com",
  "aim.com",
  "zoho.com",
  "fastmail.com",
  "rocketmail.com",
  "mozmail.com", // Firefox Relay
  "foxmail.com", // Tencent
]);

/**
 * Regional versions of the big providers. Used when a typo is fixed but the
 * reader's own country ending should be kept (hotmial.fr → hotmail.fr).
 */
const REGIONAL_VARIANTS = new Set([
  "yahoo.co.uk",
  "yahoo.fr",
  "yahoo.de",
  "yahoo.es",
  "yahoo.it",
  "yahoo.ca",
  "yahoo.co.in",
  "yahoo.com.au",
  "yahoo.com.br",
  "yahoo.co.jp",
  "hotmail.co.uk",
  "hotmail.fr",
  "hotmail.de",
  "hotmail.es",
  "hotmail.it",
  "outlook.co.uk",
  "outlook.fr",
  "outlook.de",
  "outlook.es",
  "outlook.it",
  "live.co.uk",
  "live.fr",
  "live.ca",
  "protonmail.ch",
]);

/** Optimal-string-alignment Damerau-Levenshtein distance. */
export function editDistance(a: string, b: string): number {
  const rows = a.length + 1;
  const cols = b.length + 1;
  const d: number[][] = Array.from({ length: rows }, () =>
    new Array<number>(cols).fill(0)
  );
  for (let i = 0; i < rows; i++) d[i][0] = i;
  for (let j = 0; j < cols; j++) d[0][j] = j;
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      d[i][j] = Math.min(
        d[i - 1][j] + 1,
        d[i][j - 1] + 1,
        d[i - 1][j - 1] + cost
      );
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
        d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
      }
    }
  }
  return d[rows - 1][cols - 1];
}

export function isDisposableDomain(domain: string): boolean {
  if (DISPOSABLE_DOMAINS.has(domain)) return true;
  // Some services hand out subdomains (x.mailinator.com).
  for (const blocked of DISPOSABLE_DOMAINS) {
    if (domain.endsWith(`.${blocked}`)) return true;
  }
  return false;
}

/** The corrected domain, or null when the domain looks intended. */
export function suggestDomain(domain: string): string | null {
  if (COMMON_DOMAIN_SET.has(domain) || REAL_LOOKALIKES.has(domain)) return null;
  if (REGIONAL_VARIANTS.has(domain)) return null;

  const dot = domain.indexOf(".");
  if (dot <= 0) return null;
  const label = domain.slice(0, dot);
  const ending = domain.slice(dot + 1);

  // Right provider, wrong ending: gmail.con → gmail.com. Any other ending
  // is treated as that provider's country domain (yahoo.fr, hotmail.co.uk).
  // The ending typos are all slips of ".com", so proton.me is left alone.
  const home = PROVIDER_HOME[label];
  if (home) {
    return home.endsWith(".com") && TLD_TYPOS.has(ending) ? home : null;
  }

  if (domain.length < FUZZY_DOMAIN_MIN) return null;

  let best: string | null = null;
  let bestDistance = Infinity;
  for (const [provider, providerHome] of Object.entries(PROVIDER_HOME)) {
    if (provider.length < FUZZY_LABEL_MIN) continue;
    const homeEnding = providerHome.slice(provider.length + 1);
    let candidate: string;
    if (
      ending === homeEnding ||
      (homeEnding === "com" && TLD_TYPOS.has(ending))
    ) {
      candidate = providerHome;
    } else if (REGIONAL_VARIANTS.has(`${provider}.${ending}`)) {
      candidate = `${provider}.${ending}`;
    } else {
      continue;
    }
    const distance = editDistance(domain, candidate);
    if (distance <= FUZZY_MAX_DISTANCE && distance < bestDistance) {
      best = candidate;
      bestDistance = distance;
    }
  }
  return best;
}

type DohAnswer = { type?: unknown; data?: unknown };
type DohResponse = { Status?: unknown; Answer?: unknown };

/** "MX" → 15, "A" → 1, "AAAA" → 28 (the numeric types DoH answers carry). */
const RR_TYPE = { MX: 15, A: 1, AAAA: 28 } as const;

/** null means "couldn't tell": the caller lets the address through. */
async function queryDns(
  domain: string,
  type: keyof typeof RR_TYPE,
  fetchImpl: typeof fetch,
  signal: AbortSignal
): Promise<{ status: number; answers: DohAnswer[] } | null> {
  const url = `${DOH_URL}?name=${encodeURIComponent(domain)}&type=${type}`;
  // Only the domain leaves the page, never the address or the guide URL.
  const res = await fetchImpl(url, {
    headers: { Accept: "application/dns-json" },
    referrerPolicy: "no-referrer",
    signal,
  });
  if (res.status !== 200) return null;
  const json = (await res.json()) as DohResponse | null;
  if (!json || typeof json.Status !== "number") return null;
  const answers = Array.isArray(json.Answer)
    ? (json.Answer as DohAnswer[]).filter((a) => a?.type === RR_TYPE[type])
    : [];
  return { status: json.Status, answers };
}

/** null when this browser can't cancel a request: then we skip the lookup. */
function timeoutSignal(
  ms: number
): { signal: AbortSignal; done: () => void } | null {
  if (
    typeof AbortSignal !== "undefined" &&
    typeof AbortSignal.timeout === "function"
  ) {
    return { signal: AbortSignal.timeout(ms), done: () => {} };
  }
  if (typeof AbortController !== "function") return null;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), ms);
  return { signal: controller.signal, done: () => clearTimeout(timer) };
}

/** Definite answers only, so a resubmit doesn't look the domain up again. */
const dnsVerdicts = new Map<string, boolean>();

/**
 * false only when DNS says the domain doesn't exist, has a "no mail" record,
 * or has no mail server and no address at all. Everything else is true.
 */
export async function domainCanReceiveMail(
  domain: string,
  options: { fetch?: typeof fetch; timeoutMs?: number } = {}
): Promise<boolean> {
  // Some browsers' fetch ignores abort signals, so also race a plain timer:
  // a slow DNS lookup must never hold the reader on "Joining...".
  const ms = (options.timeoutMs ?? DNS_TIMEOUT_MS) + 500;
  let timer: ReturnType<typeof setTimeout> | undefined;
  const giveUp = new Promise<boolean>((resolve) => {
    timer = setTimeout(() => resolve(true), ms);
  });
  try {
    return await Promise.race([lookupDomain(domain, options), giveUp]);
  } finally {
    if (timer !== undefined) clearTimeout(timer);
  }
}

async function lookupDomain(
  domain: string,
  options: { fetch?: typeof fetch; timeoutMs?: number }
): Promise<boolean> {
  const cached = dnsVerdicts.get(domain);
  if (cached !== undefined) return cached;

  const fetchImpl = options.fetch ?? globalThis.fetch;
  if (typeof fetchImpl !== "function") return true;
  let done = () => {};

  try {
    // Inside the try: an old browser must never be blocked by the check.
    const timeout = timeoutSignal(options.timeoutMs ?? DNS_TIMEOUT_MS);
    if (!timeout) return true;
    done = timeout.done;
    const { signal } = timeout;

    const mx = await queryDns(domain, "MX", fetchImpl, signal);
    if (!mx) return true;
    if (mx.status === 3) {
      dnsVerdicts.set(domain, false); // NXDOMAIN: no such domain.
      return false;
    }
    if (mx.status !== 0) return true; // SERVFAIL etc: can't tell.
    if (mx.answers.length > 0) {
      // RFC 7505 null MX ("0 .") means the domain accepts no mail at all.
      const nullMx = mx.answers.every(
        (a) => typeof a.data === "string" && /^0\s+\.$/.test(a.data.trim())
      );
      dnsVerdicts.set(domain, !nullMx);
      return !nullMx;
    }

    // No MX: mail falls back to the domain's own address record.
    for (const type of ["A", "AAAA"] as const) {
      const res = await queryDns(domain, type, fetchImpl, signal);
      if (!res || res.status !== 0 || res.answers.length > 0) return true;
    }
    dnsVerdicts.set(domain, false);
    return false;
  } catch {
    // Network error, timeout, blocked by CORS or bad JSON: fail open.
    return true;
  } finally {
    done();
  }
}

export async function checkEmail(
  address: string,
  options: EmailCheckOptions = {}
): Promise<EmailCheckResult> {
  const email = normaliseEmail(address);
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return { ok: false, error: INVALID_EMAIL_ERROR };
  }

  const at = email.lastIndexOf("@");
  const local = email.slice(0, at);
  const domain = email.slice(at + 1);

  if (isDisposableDomain(domain)) {
    return { ok: false, error: DISPOSABLE_EMAIL_ERROR };
  }

  if (!options.skipSuggestion) {
    const fixed = suggestDomain(domain);
    if (fixed && fixed !== domain) {
      return { ok: false, suggestion: `${local}@${fixed}` };
    }
  }

  // Big providers obviously take mail: skip the lookup.
  if (options.skipDns || COMMON_DOMAIN_SET.has(domain)) return { ok: true };

  const canReceive = await domainCanReceiveMail(domain, {
    fetch: options.fetch,
    timeoutMs: options.dnsTimeoutMs,
  });
  return canReceive ? { ok: true } : { ok: false, error: NO_MAIL_DOMAIN_ERROR };
}
