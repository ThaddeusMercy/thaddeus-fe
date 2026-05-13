/**
 * GA4 via gtag. Override with NEXT_PUBLIC_GA_MEASUREMENT_ID in `.env.local`.
 * @see https://developers.google.com/analytics/devguides/collection/ga4
 */

export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-HJCZFK6MMN";

type GtagParams = Record<string, string | number | boolean | undefined>;

function getGtag(): ((...args: unknown[]) => void) | null {
  if (typeof window === "undefined") return null;
  const g = (window as unknown as { gtag?: (...args: unknown[]) => void })
    .gtag;
  return typeof g === "function" ? g : null;
}

/** GA4 custom events — use lowercase / snake_case for names and param keys. */
export function trackEvent(name: string, params?: GtagParams): void {
  const gtag = getGtag();
  if (!gtag) return;
  gtag("event", name, params ?? {});
}

/**
 * Extra page_view for SPA-style URL changes (e.g. `/?tab=resources`).
 * Skips the first paint in the shell so the initial `gtag('config', …)` page_view is not doubled.
 */
export function trackSpaPageView(overrides?: {
  page_path?: string;
  page_title?: string;
}): void {
  const gtag = getGtag();
  if (!gtag || typeof window === "undefined") return;
  const path =
    overrides?.page_path ??
    `${window.location.pathname}${window.location.search}`;
  const href = `${window.location.origin}${path.startsWith("/") ? path : `/${path}`}`;
  gtag("event", "page_view", {
    page_path: path,
    page_location: href,
    page_title: overrides?.page_title ?? document.title,
  });
}
