import { NextResponse } from "next/server";

/**
 * Guide email gate → Kit (kit.com, formerly ConvertKit).
 *
 * Env (Cloudflare → Workers → thaddeus-fe → Settings → Variables and Secrets,
 * or `.dev.vars` locally):
 *   KIT_API_KEY  v4 API key (Kit → Settings → Developer). Store as a secret.
 *   KIT_FORM_ID  Numeric id of the Kit form new readers join (from the form URL).
 */

const KIT_API = "https://api.kit.com/v4";
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
  const apiKey = process.env.KIT_API_KEY;
  const formId = process.env.KIT_FORM_ID;
  if (!apiKey || !formId) {
    console.error("subscribe: KIT_API_KEY or KIT_FORM_ID is not set");
    return NextResponse.json(
      { error: "Signups are not configured yet." },
      { status: 500 }
    );
  }

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

  const firstName =
    typeof body.firstName === "string"
      ? body.firstName.trim().slice(0, 80)
      : "";
  const referrer =
    typeof body.referrer === "string" ? body.referrer.slice(0, 500) : "";

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
