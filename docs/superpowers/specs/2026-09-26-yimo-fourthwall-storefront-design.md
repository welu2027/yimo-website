# YIMO Fourthwall Storefront

Date: 2026-09-26

## Goal

Build a custom YIMO storefront at `https://merch.yimo-official.org/`. Fourthwall supplies the public product catalog, cart, and hosted checkout. Cloudflare serves the storefront so its design can match the existing YIMO website.

## Current State

- The main site is a static Nuxt 2 site deployed through GitHub Pages.
- The Cloudflare `yimo-official.org` zone is active and has no Pages projects or Worker custom domains configured.
- `merch.yimo-official.org` currently has a DNS-only CNAME to `yimo-official.org`. Cloudflare Worker Custom Domains cannot attach while that CNAME exists; attaching the Worker will create the required DNS record and certificate.
- Fourthwall Storefront API authentication succeeds, but the `all` collection currently contains zero public products.
- `.env.local` is untracked and is not currently ignored by Git.

## Experience

- Add a Merch link to the main YIMO site's navigation, pointing to `https://merch.yimo-official.org/`.
- Keep the storefront visually consistent with the site: warm cream background, deep forest-green text, restrained orange accents, and the existing Hanken Grotesk / Instrument Serif typography.
- When products are available, show their Fourthwall images, names, prices, and purchasable variants. Let a shopper choose size/color where provided, set quantity, and add items to a bag.
- Provide a keyboard-accessible cart drawer with item variants, quantity changes, removal, subtotal, and checkout action.
- Persist the Fourthwall cart ID in local storage. Show loading, empty-cart, API-error/retry, and no-products states. Do not invent placeholder products; until listings are public, explain that YIMO merchandise is coming soon.
- Keep product availability and prices sourced from Fourthwall.

## Integration

- Create a dedicated Cloudflare Worker named `yimo-merch`; do not reuse or modify the existing `yimo-website` Worker.
- Serve the storefront's static assets from `merch-worker/public` with Wrangler locally, and add a narrow same-origin API proxy for shop information, public products, cart creation/read, add-to-cart, quantity changes, and item removal. The deployed Worker serves those same assets from an inline map because the connected Cloudflare MCP sandbox cannot use the direct asset-upload token endpoint.
- Store only `FOURTHWALL_STOREFRONT_API` as a Cloudflare Worker secret. Do not use or expose `FOURTHWALL_API_USERNAME` or `FOURTHWALL_API_PASSWORD`; those are broad Open API credentials and the storefront API is sufficient.
- Restrict the proxy to the fixed Fourthwall Storefront API host and the product/cart/shop endpoints required by this UI. Return bounded, non-sensitive error responses to the browser.
- Send checkout to the `publicDomain` returned by the Fourthwall shop endpoint. The currently verified shop domain is `youth-international-math-olympiad-yimo-zjv-shop.fourthwall.com`.
- Add `.env.local` to `.gitignore`; keep local values out of commits. Configure the storefront token as a Worker secret for production.

## Cloudflare Domain Change

Deploy and check the Worker on its temporary `workers.dev` hostname first. After it serves the storefront and API correctly, remove only the existing `merch.yimo-official.org` CNAME and attach `merch.yimo-official.org` as a Worker Custom Domain. Cloudflare will provision the Worker DNS record and TLS certificate. Do not change the apex or `www` records.

## Failure Behavior

- If product loading fails, show a retry action and preserve the rest of the page.
- If a cart mutation fails, keep the customer's current selection visible and show an actionable error; do not clear the cart.
- If a saved cart ID has expired or is invalid, create a new cart before continuing.
- Never claim an item is available based only on stale local cart data; rely on Fourthwall's cart response before checkout.

## Out of Scope

- Using Fourthwall's hosted storefront as the primary browsing UI.
- Managing products, orders, promotions, or inventory from YIMO's site.
- Collecting or processing payment details on the YIMO Worker.
- Modifying DNS for `yimo-official.org` or `www.yimo-official.org`.
- Showing products before they are public in Fourthwall.

## Acceptance Criteria

- `merch.yimo-official.org` serves a branded storefront over HTTPS without changing the main website's DNS.
- Published Fourthwall products and variants appear from live Storefront API data.
- A shopper can add, update, and remove items, refresh the page without losing the cart, and continue to Fourthwall checkout.
- The empty catalog state is clear while the API returns zero public products.
- The browser bundle and repository history contain no Fourthwall Open API username/password or storefront token.
- The main YIMO navigation links to the merch subdomain.

## References

- Fourthwall Storefront API: https://docs.fourthwall.com/storefront/overview
- Fourthwall cart and checkout: https://docs.fourthwall.com/storefront/cart-checkout-tutorial
- Cloudflare Worker Custom Domains: https://developers.cloudflare.com/workers/configuration/routing/custom-domains/
- Cloudflare Workers Static Assets: https://developers.cloudflare.com/workers/static-assets/
