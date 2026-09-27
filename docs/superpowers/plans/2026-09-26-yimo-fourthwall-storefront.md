# YIMO Fourthwall Storefront Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and publish a YIMO-branded Fourthwall storefront at `merch.yimo-official.org` with product browsing, cart, and hosted checkout.

**Architecture:** A dedicated `yimo-merch` Cloudflare Worker serves static storefront assets and proxies a narrow set of Fourthwall Storefront API requests, keeping the token server-side. The existing Nuxt 2 site links to the subdomain; the existing `yimo-website` Worker serves its updated static build.

**Tech Stack:** Cloudflare Workers Static Assets, plain HTML/CSS/ES modules, Wrangler 4 for local Worker preview, Node's built-in test runner, Cloudflare MCP for Worker assets/secrets/domains, Nuxt 2/Vue 2 for the main site.

**Spec:** `docs/superpowers/specs/2026-09-26-yimo-fourthwall-storefront-design.md`

## Global Constraints

- Match YIMO's `#F6F2E9` background, `#1E3A34` text, and restrained `#F0A868` accent.
- Show only public Fourthwall products; the current catalog has zero, so show the specified empty state until listings are published.
- Use only `FOURTHWALL_STOREFRONT_API`; never use the Open API username/password in the browser or Worker.
- Keep `.env.local` and `merch-worker/.dev.vars` out of Git.
- Do not change the `yimo-official.org` or `www` DNS records during storefront deployment; they currently serve the main site.
- Replace only the existing `merch.yimo-official.org` CNAME after the storefront preview works.

## Review Focus

- Missing or rejected Storefront token: API responds with a safe error and no credential appears in the response or logs.
- Invalid route, cart ID, malformed JSON, or non-positive quantity: reject before contacting Fourthwall.
- Zero products or products without usable images/variants: show the empty/unavailable state without fake items or broken controls.
- Expired cart ID versus network failure: recreate only for `CART_NOT_FOUND`; otherwise preserve the visible selection and cart ID.
- Checkout URL: use the `publicDomain` and cart currency from Fourthwall responses, with URL-encoded cart ID; never collect payment details locally.

---

### Task 1: Secure Fourthwall Worker API

**Files:**
- Create: `merch-worker/wrangler.jsonc`
- Create: `merch-worker/src/index.mjs`
- Create: `merch-worker/tests/index.test.mjs`
- Modify: `.gitignore`
- Modify: `package.json`

**Interfaces:**
- Worker entrypoint: `fetch(request, env)`.
- `env.FOURTHWALL_STOREFRONT_API` is the only Fourthwall credential.
- Same-origin routes: `GET /api/shop`, `GET /api/products`, `POST /api/carts`, `GET /api/carts/:id`, and `POST /api/carts/:id/{add,change,remove}`.
- Upstream base is fixed to `https://storefront-api.fourthwall.com/v1`; the client cannot supply a host or arbitrary path.

- [x] **Step 1: Write failing Node tests** for route/method allowlisting, required secret behavior, cart input validation, URL construction, and sanitized upstream failures.
- [x] **Step 2: Run the focused tests and confirm they fail** with the expected missing-handler/assertion errors.
- [x] **Step 3: Implement the Worker proxy** for Fourthwall shop/products/cart endpoints, validating request size, JSON shape, cart IDs, and quantities before forwarding.
- [x] **Step 4: Run `node --test merch-worker/tests/index.test.mjs`** and confirm all API proxy tests pass without live credentials.
- [x] **Step 5: Add scripts** for `corepack yarn dev:merch` using transient `npx --yes wrangler@4` and `corepack yarn test:merch` using Node's test runner; ignore `.env.local` and `merch-worker/.dev.vars` without adding a persistent dependency.
- [x] **Step 6: Commit** as part of the single storefront feature commit.

### Task 2: Storefront Interface

**Files:**
- Create: `merch-worker/public/index.html`
- Create: `merch-worker/public/styles.css`
- Create: `merch-worker/public/storefront.mjs`
- Modify: `merch-worker/tests/index.test.mjs`

**Interfaces:**
- `loadShop()`, `loadProducts()`, `loadCart()`, `addItem(variantId, quantity)`, `changeItem(variantId, quantity)`, `removeItem(variantId, quantity)`, and `checkout()` call only the same-origin `/api/*` routes.
- `formatPrice(value, currency)` formats the server-returned amount; product cards use Fourthwall names, transformed images, prices, and variants.

- [x] **Step 1: Add failing helper tests** for price formatting, available variant choices, empty catalog, and malformed/missing variant data.
- [x] **Step 2: Run the focused tests and confirm they fail** for the unimplemented helpers.
- [x] **Step 3: Build the responsive storefront** with the YIMO palette and typography, live product grid, variant selection, quantity control, accessible cart drawer, persistence, and loading/error/empty states.
- [x] **Step 4: Implement checkout redirect** to `publicDomain` with `cartId` and `cartCurrency`; use the Fourthwall shop endpoint's response instead of a hard-coded host.
- [x] **Step 5: Run the focused tests** and verify the zero-product state contains no mock products.
- [x] **Step 6: Include UI and API implementation in one feature commit**.

### Task 3: Local and Cloudflare Preview

**Files:**
- Modify: `merch-worker/wrangler.jsonc`
- No tracked secret files.

**Interfaces:**
- Static assets bind as `ASSETS`; Worker code runs first only for `/api/*`.
- Local preview reads `FOURTHWALL_STOREFRONT_API` from ignored `merch-worker/.dev.vars`.

- [x] **Step 1: Populate ignored `.dev.vars`** with only the Storefront token from `.env.local`, without printing the value.
- [x] **Step 2: Run `corepack yarn dev:merch`** and open the local preview at `http://localhost:8787/`.
- [x] **Step 3: Verify layout and keyboard bag flow** in the in-app browser; mobile layout uses the responsive stylesheet and was not separately device-emulated.
- [x] **Step 4: Set the Storefront token as a Cloudflare Worker secret** through Cloudflare MCP without printing its value.
- [x] **Step 5: Deploy `yimo-merch` to its `workers.dev` preview** through the Cloudflare Worker upload API.
- [x] **Step 6: Verify live shop/products responses, the current empty catalog state, and bag interaction** on the preview hostname.
- [x] **Step 7: Include preview configuration in the storefront feature commit**.

### Task 4: Publish Store and Main-Site Link

**Files:**
- Modify: `layouts/default.vue`
- Modify: generated `dist` assets through the deployment, not source control.

**Interfaces:**
- Main-site navigation links to `https://merch.yimo-official.org/`.
- `yimo-website` continues to serve `yimo-official.org` and `www.yimo-official.org`; `yimo-merch` serves only `merch.yimo-official.org`.

- [x] **Step 1: Add a Merch navigation link** using the existing navigation styles.
- [x] **Step 2: Run `corepack yarn generate`** successfully after restoring dependencies from the frozen lockfile.
- [ ] **Step 3: Upload generated main-site assets** to the existing `yimo-website` Worker. The Cloudflare MCP asset-session token cannot be used against the upload endpoint in its sandbox; do not change apex or `www` DNS.
- [x] **Step 4: Replace only the existing `merch` CNAME** with a `merch.yimo-official.org` Custom Domain for `yimo-merch`.
- [x] **Step 5: Verify live storefront HTTPS, product loading, empty state, and keyboard bag flow.** Checkout redirect awaits at least one public product.
- [ ] **Step 6: Push the reviewed source changes to `welu2027/yimo-website:main`** and confirm the GitHub Pages workflow completes.
