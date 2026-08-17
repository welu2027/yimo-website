# YIMO contact Worker

The website is statically generated and served from GitHub Pages, which cannot
run server code. This Worker exists so the Resend API key has somewhere to live
that is *not* the public site bundle.

The contact form on the homepage POSTs here; this Worker calls Resend.

## Deploy

From this directory:

```sh
npx wrangler login
npx wrangler secret put RESEND_API_KEY   # paste the key when prompted
npx wrangler deploy
```

`wrangler deploy` prints the Worker's URL. Put that URL in `contactEndpoint`
in `pages/index.vue`.

## Configuration

Non-secret settings are in `wrangler.jsonc`:

| Var | Meaning |
| --- | --- |
| `MAIL_TO` | Where inquiries are delivered. |
| `MAIL_FROM` | Sender address, on a domain verified in Resend. |
| `ALLOWED_ORIGIN` | Comma-separated origins allowed to POST here. |

`RESEND_API_KEY` is deliberately absent — it is a Cloudflare secret, set with
the command above. **Never put it in this file or anywhere else in the repo.**

## Before it will send

Verify `nxthorizon.org` at <https://resend.com/domains> (add the DNS records
Resend gives you). Until then, set `MAIL_FROM` to `onboarding@resend.dev`,
which only delivers to the address that owns the Resend account.

## Local testing

`wrangler secret` values are production-only. For `wrangler dev`, put the key
in `worker/.dev.vars` (gitignored):

```
RESEND_API_KEY=re_...
```
