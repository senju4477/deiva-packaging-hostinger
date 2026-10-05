# Deiva Packaging

A complete Next.js shop application for Hostinger’s Node.js Web App workflow, with a separate static catalogue review built from the same customer interface.

The default is a **demo quote catalogue**. It contains 76 products: 12 original illustrative formats plus 64 reference formats from the user-selected Packware Top Sellers collection and product-category directory, with actual source photographs and linked reference specifications. All remain preview-only; Deiva supply has not been confirmed. There are no fabricated sale prices, reviews, delivery promises, supplier relationships or live payments.

## What is included

- Home, shop, ten category paths (nine populated shopping categories), product details, SKU search, URL-preserved material and format filters, sorting and pagination.
- Explicit pack/carton selection, matching product references, minimum quantities, browser-persistent cart and editable order list.
- SKU quick ordering that retains valid entries and reports invalid lines.
- Wholesale and contact enquiries; server validation, spam checks, rate limits and durable MySQL storage in configured commerce mode.
- Guest checkout with postcode-based eligibility, server-authoritative prices, integer-cent totals and Stripe-hosted payment.
- Signed payment webhooks; idempotent processing, atomic SKU stock reservations and independent payment, fulfilment and notification status.
- Protected owner sign-in, secure session cookies, CSRF checks, catalogue CSV import/export, price/stock changes, product image/details editing, category maintenance, order status updates and enquiry review.
- About, FAQs, delivery/collection, returns, privacy, terms and packaging guide pages. Unconfirmed policies remain explicitly marked for business approval.
- Next.js standalone preparation, no-index preview controls, metadata, sitemap and robots routes, source assets and deployment documentation.

## Run locally

Use a maintained Node.js 22.x release. Tested runtime: Node.js 22.23.3. Framework: Next.js 16.3.8.

1. `npm ci`
2. Copy `.env.example` to `.env.local`, retaining `COMMERCE_MODE=demo` for review.
3. `npm run dev` for development.
4. `npm run build` then `npm start` for the same standalone artifact used on Hostinger.

The build does not connect to a database, create tables or require payment credentials. The generated server binds to `0.0.0.0` and uses the hosting-managed `PORT`, with 3000 as the local fallback.

## Catalogue preview

`npm run build:preview` produces `dist/` using the shared shop components and the catalogue assets. This static review supports browsing, filters, pack selection, local cart persistence and quick ordering. Enquiry submission, owner mutations and payments are honestly inactive there; a quote list can be downloaded to the visitor’s own device. The actual Hostinger application contains the server integrations.

Do not deploy `dist/` as the Hostinger Node application. Hostinger builds the root application and uses `.next`.

## Verification

- `npm run typecheck`
- `npm run lint`
- `npm test` for validation and calculation checks; database tests skip unless explicitly enabled against the dedicated isolated database.
- `npm run test:ui` for DOM journey checks.
- See `docs/VERIFICATION.md` for the actual results and limitations.

## Deployment and owner setup

Read `docs/HOSTINGER-DEPLOYMENT.md`, `docs/ENVIRONMENT.md`, `docs/DATABASE.md` and `docs/OWNER-GUIDE.md`. The portable ZIP contains source and approved-to-review demo assets. It excludes installed dependencies, build output, secrets and test database records.

Live activation requires Deiva’s real catalogue, stock policy, approved business/policy information, delivery rules, tax treatment, owner credentials, payment merchant settings and verified email service. The catalogue preview is publicly viewable at https://deiva-packaging-review.walkersaint402.chatgpt.site. Live business trading and production-domain/DNS changes require a separate launch instruction. See `docs/CATALOGUE-REFERENCES.md` for provenance and details needing confirmation.
