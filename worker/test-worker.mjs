import assert from "node:assert/strict";
import worker from "./index.js";

const baseEnv = {
  ALLOWED_ORIGIN: "https://yimo-official.org",
  MAIL_FROM: "YIMO <noreply@example.org>",
  MAIL_TO: "staff@example.org",
  RESEND_API_KEY: "test-key",
  CONTACT_IP_LIMITER: { limit: async () => ({ success: true }) },
  CONTACT_EMAIL_LIMITER: { limit: async () => ({ success: true }) },
};

const originalFetch = globalThis.fetch;
let resendCalls = 0;
globalThis.fetch = async () => {
  resendCalls += 1;
  return new Response("{}", { status: 200 });
};

try {
  const valid = await worker.fetch(new Request("https://worker.example", {
    method: "POST",
    headers: { Origin: "https://yimo-official.org", "Content-Type": "application/json" },
    body: JSON.stringify({ firstName: "Ada", lastName: "Lovelace", email: "ada@example.org", message: "Hello" }),
  }), baseEnv);
  assert.equal(valid.status, 200);
  assert.equal(resendCalls, 1);

  const blockedOrigin = await worker.fetch(new Request("https://worker.example", {
    method: "POST",
    headers: { Origin: "https://attacker.example", "Content-Type": "application/json" },
    body: JSON.stringify({ firstName: "Ada", lastName: "Lovelace", email: "ada@example.org" }),
  }), baseEnv);
  assert.equal(blockedOrigin.status, 403);
  assert.equal(resendCalls, 1);

  const oversized = await worker.fetch(new Request("https://worker.example", {
    method: "POST",
    headers: { Origin: "https://yimo-official.org", "Content-Type": "application/json" },
    body: JSON.stringify({ firstName: "Ada", lastName: "Lovelace", email: "ada@example.org", message: "x".repeat(40_000) }),
  }), baseEnv);
  assert.equal(oversized.status, 413);

  const limited = await worker.fetch(new Request("https://worker.example", {
    method: "POST",
    headers: { Origin: "https://yimo-official.org", "Content-Type": "application/json" },
    body: JSON.stringify({ firstName: "Ada", lastName: "Lovelace", email: "ada@example.org" }),
  }), { ...baseEnv, CONTACT_IP_LIMITER: { limit: async () => ({ success: false }) } });
  assert.equal(limited.status, 429);

  const missingBinding = await worker.fetch(new Request("https://worker.example", {
    method: "POST",
    headers: { Origin: "https://yimo-official.org", "Content-Type": "application/json" },
    body: JSON.stringify({ firstName: "Ada", lastName: "Lovelace", email: "ada@example.org" }),
  }), { ...baseEnv, CONTACT_IP_LIMITER: undefined });
  assert.equal(missingBinding.status, 503);
} finally {
  globalThis.fetch = originalFetch;
}

console.log("contact worker security checks passed");
