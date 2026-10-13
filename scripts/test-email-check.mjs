// Tests for lib/email-check.ts. Run: node scripts/test-email-check.mjs
// The live cases call Cloudflare DNS-over-HTTPS, so they need a network.
// Pass --offline to run only the cases that use a stubbed DNS.

import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";

let build;
try {
  ({ build } = await import("esbuild"));
} catch {
  console.error("esbuild not found. Run npm install first (wrangler ships it).");
  process.exit(1);
}

const entry = fileURLToPath(new URL("../lib/email-check.ts", import.meta.url));
const bundled = await build({
  entryPoints: [entry],
  bundle: true,
  format: "esm",
  platform: "neutral",
  write: false,
  logLevel: "silent",
});
const code = bundled.outputFiles[0].text;
const {
  checkEmail,
  suggestDomain,
  domainCanReceiveMail,
  DISPOSABLE_EMAIL_ERROR,
  NO_MAIL_DOMAIN_ERROR,
  INVALID_EMAIL_ERROR,
} = await import(`data:text/javascript;base64,${Buffer.from(code).toString("base64")}`);

const offline = process.argv.includes("--offline");
let passed = 0;
let failed = 0;

async function test(name, fn, { live = false } = {}) {
  if (live && offline) {
    console.log(`SKIP  ${name}`);
    return;
  }
  try {
    await fn();
    passed++;
    console.log(`PASS  ${name}`);
  } catch (err) {
    failed++;
    console.log(`FAIL  ${name}\n      ${err.message.split("\n").join("\n      ")}`);
  }
}

/** A fetch that must never be called (fast path / no DNS expected). */
const noFetch = () => {
  throw new Error("DNS should not have been queried");
};

/** Stubbed DoH: answers[type] is the JSON body, or a function returning a Response. */
function fakeDoh(answers) {
  return async (url) => {
    const type = new URL(url).searchParams.get("type");
    const answer = answers[type];
    if (typeof answer === "function") return answer();
    if (!answer) throw new Error(`unexpected ${type} query`);
    return new Response(JSON.stringify(answer), {
      status: 200,
      headers: { "content-type": "application/dns-json" },
    });
  };
}

// --- Required cases -------------------------------------------------------

await test("valid gmail is accepted without a DNS lookup", async () => {
  assert.deepEqual(await checkEmail("jane@gmail.com", { fetch: noFetch }), { ok: true });
});

await test("gmial.com suggests gmail.com", async () => {
  assert.deepEqual(await checkEmail("jane@gmial.com", { fetch: noFetch }), {
    ok: false,
    suggestion: "jane@gmail.com",
  });
});

await test("gamil.com suggests gmail.com", async () => {
  assert.deepEqual(await checkEmail("jane@gamil.com", { fetch: noFetch }), {
    ok: false,
    suggestion: "jane@gmail.com",
  });
});

await test("yahoo.con suggests yahoo.com", async () => {
  assert.deepEqual(await checkEmail("jane@yahoo.con", { fetch: noFetch }), {
    ok: false,
    suggestion: "jane@yahoo.com",
  });
});

await test("yahoo.co.uk gets no suggestion", async () => {
  assert.deepEqual(await checkEmail("jane@yahoo.co.uk", { fetch: noFetch }), { ok: true });
});

await test(
  "hotmail.fr gets no suggestion and passes DNS",
  async () => {
    assert.deepEqual(await checkEmail("jane@hotmail.fr"), { ok: true });
  },
  { live: true }
);

await test("mailinator.com is blocked as a throwaway inbox", async () => {
  assert.deepEqual(await checkEmail("jane@mailinator.com", { fetch: noFetch }), {
    ok: false,
    error: DISPOSABLE_EMAIL_ERROR,
  });
});

await test(
  "xyz-not-a-real-domain-12345.com is blocked by DNS (NXDOMAIN)",
  async () => {
    assert.deepEqual(await checkEmail("abc@xyz-not-a-real-domain-12345.com"), {
      ok: false,
      error: NO_MAIL_DOMAIN_ERROR,
    });
  },
  { live: true }
);

await test(
  "unilag.edu.ng is allowed (real MX)",
  async () => {
    assert.deepEqual(await checkEmail("someone@unilag.edu.ng"), { ok: true });
  },
  { live: true }
);

await test(
  "mtn.com is allowed (real MX, and no msn.com suggestion)",
  async () => {
    assert.deepEqual(await checkEmail("someone@mtn.com"), { ok: true });
  },
  { live: true }
);

// Offline versions of the live cases above (stubbed DNS answers).

await test("hotmail.fr, yahoo.fr, outlook.co.uk get no suggestion (offline)", async () => {
  for (const domain of ["hotmail.fr", "yahoo.fr", "outlook.co.uk", "yahoo.com.ng", "live.co.za"]) {
    assert.equal(suggestDomain(domain), null, domain);
  }
});

await test("NXDOMAIN blocks the address (offline)", async () => {
  const res = fakeDoh({ MX: { Status: 3 } });
  assert.deepEqual(await checkEmail("abc@stub-nxdomain.com", { fetch: res }), {
    ok: false,
    error: NO_MAIL_DOMAIN_ERROR,
  });
});

await test("Nigerian domains get no suggestion and pass with an MX (offline)", async () => {
  const ok = fakeDoh({ MX: { Status: 0, Answer: [{ type: 15, data: "10 mx.example." }] } });
  for (const domain of ["mtn.com", "unilag.edu.ng", "glo.com", "airtel.com", "gtbank.com"]) {
    assert.equal(suggestDomain(domain), null, domain);
    assert.deepEqual(await checkEmail(`someone@${domain}`, { fetch: ok }), { ok: true }, domain);
  }
});

// --- Extra cases ------------------------------------------------------------

await test("Firefox Relay and Foxmail get no suggestion", async () => {
  assert.equal(suggestDomain("mozmail.com"), null);
  assert.equal(suggestDomain("foxmail.com"), null);
});

await test("a DNS lookup that never settles still lets the address through", async () => {
  const hang = () => new Promise(() => {});
  assert.equal(
    await domainCanReceiveMail("slow-example-domain.com", { fetch: hang, timeoutMs: 50 }),
    true
  );
});

await test("proton.me's ending is never 'fixed' to a .com typo rule", async () => {
  assert.equal(suggestDomain("proton.co"), null);
  assert.equal(suggestDomain("protn.me"), "proton.me");
});

await test("fail open: browser without AbortSignal/AbortController skips DNS", async () => {
  const saved = { AbortSignal: globalThis.AbortSignal, AbortController: globalThis.AbortController };
  globalThis.AbortSignal = undefined;
  globalThis.AbortController = undefined;
  try {
    assert.deepEqual(await checkEmail("a@stub-old-browser.ng", { fetch: noFetch }), { ok: true });
  } finally {
    Object.assign(globalThis, saved);
  }
});

await test("input is trimmed and lowercased", async () => {
  assert.deepEqual(await checkEmail("  Jane@GMAIL.com ", { fetch: noFetch }), { ok: true });
});

await test("malformed address is rejected", async () => {
  assert.deepEqual(await checkEmail("jane@gmail", { fetch: noFetch }), {
    ok: false,
    error: INVALID_EMAIL_ERROR,
  });
});

await test("throwaway subdomain is blocked", async () => {
  const res = await checkEmail("jane@box.mailinator.com", { fetch: noFetch });
  assert.equal(res.error, DISPOSABLE_EMAIL_ERROR);
});

await test("gmail.co and hotmail.cmo get the .com fix", async () => {
  assert.equal((await checkEmail("a@gmail.co", { fetch: noFetch })).suggestion, "a@gmail.com");
  assert.equal((await checkEmail("a@hotmail.cmo", { fetch: noFetch })).suggestion, "a@hotmail.com");
});

await test("typo keeps a real country ending (hotmial.fr -> hotmail.fr)", async () => {
  assert.equal((await checkEmail("a@hotmial.fr", { fetch: noFetch })).suggestion, "a@hotmail.fr");
});

await test("real lookalike providers get no suggestion", async () => {
  const ok = fakeDoh({ MX: { Status: 0, Answer: [{ type: 15, data: "10 mx.example." }] } });
  for (const domain of ["mail.com", "email.com", "gmx.com", "mac.com", "hey.com", "aim.com", "outlook.co.uk", "yahoo.fr"]) {
    const res = await checkEmail(`a@${domain}`, { fetch: ok });
    assert.equal(res.suggestion, undefined, `${domain} got ${res.suggestion}`);
  }
});

await test("resubmitting unchanged skips the suggestion", async () => {
  const ok = fakeDoh({ MX: { Status: 0, Answer: [{ type: 15, data: "10 mx.gmial.com." }] } });
  assert.deepEqual(await checkEmail("jane@gmial.com", { skipSuggestion: true, fetch: ok }), { ok: true });
});

await test("fail open: fetch throws (network/CORS)", async () => {
  const boom = async () => {
    throw new TypeError("Failed to fetch");
  };
  assert.deepEqual(await checkEmail("a@stub-network-error.ng", { fetch: boom }), { ok: true });
});

await test("fail open: non-200 response", async () => {
  const res = fakeDoh({ MX: () => new Response("nope", { status: 503 }) });
  assert.deepEqual(await checkEmail("a@stub-503.ng", { fetch: res }), { ok: true });
});

await test("fail open: unexpected JSON shape", async () => {
  const res = fakeDoh({ MX: { hello: "world" } });
  assert.deepEqual(await checkEmail("a@stub-shape.ng", { fetch: res }), { ok: true });
});

await test("fail open: timeout", async () => {
  // Node doesn't let AbortSignal.timeout keep the process alive, so hold it
  // open with a timer of our own until the abort fires.
  const hang = (_url, init) =>
    new Promise((_, reject) => {
      const keepAlive = setTimeout(() => {}, 5000);
      init.signal.addEventListener("abort", () => {
        clearTimeout(keepAlive);
        reject(init.signal.reason);
      });
    });
  const started = Date.now();
  assert.deepEqual(await checkEmail("a@stub-timeout.ng", { fetch: hang, dnsTimeoutMs: 100 }), { ok: true });
  assert.ok(Date.now() - started < 2000, "timeout was not honoured");
});

await test("no MX but an A record is allowed", async () => {
  const res = fakeDoh({
    MX: { Status: 0 },
    A: { Status: 0, Answer: [{ type: 1, data: "203.0.113.7" }] },
  });
  assert.deepEqual(await checkEmail("a@stub-a-only.ng", { fetch: res }), { ok: true });
});

await test("no MX, no A, no AAAA is blocked", async () => {
  const res = fakeDoh({ MX: { Status: 0 }, A: { Status: 0 }, AAAA: { Status: 0 } });
  assert.deepEqual(await checkEmail("a@stub-empty.ng", { fetch: res }), {
    ok: false,
    error: NO_MAIL_DOMAIN_ERROR,
  });
});

await test("null MX (\"0 .\") is blocked", async () => {
  const res = fakeDoh({ MX: { Status: 0, Answer: [{ type: 15, data: "0 ." }] } });
  assert.deepEqual(await checkEmail("a@stub-null-mx.ng", { fetch: res }), {
    ok: false,
    error: NO_MAIL_DOMAIN_ERROR,
  });
});

console.log(`\n${passed} passed, ${failed} failed`);
process.exit(failed ? 1 : 0);
