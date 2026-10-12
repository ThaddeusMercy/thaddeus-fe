import { NextResponse } from "next/server";

/**
 * Guide email gate → Kit (kit.com, formerly ConvertKit).
 *
 * Works with no setup: readers join the public "Website guides" Kit form, the
 * same endpoint Kit's own embedded forms post to, so no API key is needed.
 *
 * Optional env (Cloudflare → Workers → thaddeus-fe → Settings → Variables and
 * Secrets, or `.dev.vars` locally):
 *   KIT_FORM_ID  Numeric id of a different Kit form to use (from the form URL).
 *   KIT_API_KEY  v4 API key. When set, signups go through Kit's API instead.
 */

const KIT_API = "https://api.kit.com/v4";
/** Kit → Landing pages & forms → Forms → "Website guides". */
const DEFAULT_FORM_ID = "9979993";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type SubscribeBody = {
  email?: unknown;
  firstName?: unknown;
  referrer?: unknown;
  /** Honeypot field; bots fill it, people never see it. */
  company?: unknown;
};

function kitFetch(path: string, apiKey: string, body: unknown) {
  return fetch(`${KIT_API}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-Kit-Api-Key": apiKey,
    },
    body: JSON.stringify(body),
  });
}

export async function POST(request: Request) {
  let body: SubscribeBody;
  try {
    body = (await request.json()) as SubscribeBody;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (typeof body.company === "string" && body.company.trim()) {
    return NextResponse.json({ ok: true });
  }

  const email =
    typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json(
      { error: "Enter a valid email address." },
      { status: 400 }
    );
  }

  const apiKey = process.env.KIT_API_KEY;
  const formId = process.env.KIT_FORM_ID || DEFAULT_FORM_ID;

  const firstName =
    typeof body.firstName === "string"
      ? body.firstName.trim().slice(0, 80)
      : "";
  const referrer =
    typeof body.referrer === "string" ? body.referrer.slice(0, 500) : "";

  if (!apiKey) {
    return subscribeViaPublicForm(formId, email, firstName, referrer);
  }

  // 1. Create (or update) the subscriber. Kit keeps new records inactive until
  //    they join a form, so this never skips the form's opt-in settings.
  const created = await kitFetch("/subscribers", apiKey, {
    email_address: email,
    ...(firstName ? { first_name: firstName } : {}),
    state: "inactive",
  });
  if (!created.ok) {
    console.error(
      "subscribe: create subscriber failed",
      created.status,
      await created.text()
    );
    return NextResponse.json(
      { error: "Could not sign you up. Try again in a minute." },
      { status: 502 }
    );
  }

  // 2. Add them to the form. The referrer URL lets Kit show which guide
  //    each subscriber came from.
  const joined = await kitFetch(`/forms/${formId}/subscribers`, apiKey, {
    email_address: email,
    ...(referrer ? { referrer } : {}),
  });
  if (!joined.ok) {
    console.error(
      "subscribe: add to form failed",
      joined.status,
      await joined.text()
    );
    return NextResponse.json(
      { error: "Could not sign you up. Try again in a minute." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}

/**
 * Kit's public form endpoint: the one its embedded forms use. It answers 200
 * with `{ status: "success" | "failed", errors? }`.
 */
async function subscribeViaPublicForm(
  formId: string,
  email: string,
  firstName: string,
  referrer: string
) {
  const params = new URLSearchParams({ email_address: email });
  if (firstName) params.set("first_name", firstName);
  if (referrer) params.set("referrer", referrer);

  let res: Response;
  try {
    res = await fetch(`https://app.kit.com/forms/${formId}/subscriptions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
      body: params,
    });
  } catch (err) {
    console.error("subscribe: Kit form request failed", err);
    return NextResponse.json(
      { error: "Could not sign you up. Try again in a minute." },
      { status: 502 }
    );
  }

  const data = (await res.json().catch(() => null)) as {
    status?: string;
    errors?: { fields?: string[]; messages?: string[] };
  } | null;

  if (res.ok && data?.status === "success") {
    return NextResponse.json({ ok: true });
  }

  // Kit rejected the address itself: the reader can fix that.
  if (data?.errors?.fields?.includes("email_address")) {
    return NextResponse.json(
      { error: data.errors.messages?.[0] || "Enter a valid email address." },
      { status: 400 }
    );
  }

  console.error("subscribe: Kit form signup failed", res.status, data);
  return NextResponse.json(
    { error: "Could not sign you up. Try again in a minute." },
    { status: 502 }
  );
}
