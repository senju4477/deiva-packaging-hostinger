# Verification record

Completed checks are distinguished from external services that remain unconfigured. No production customer records or live payment credentials were used.

| Check | Result / scope |
|---|---|
| Runtime | Node.js 22.23.3 |
| Framework | Next.js 16.3.8, React 19.2 |
| TypeScript | Passed |
| Lint | Passed |
| Production Webpack build | Passed without database/payment credentials |
| Standalone public/static preparation | Passed |
| Standalone startup and route smoke checks | 21 public/owner routes, 3 actual 404s, 12 images, CSS and noindex controls checked |
| Customer DOM journeys | 5 passed: pack/carton retention, cart recovery, SKU search and URL filters, quick-order partial failure, honest enquiry failure, menu state and inactive preview checkout |
| Validation and calculations | 6 passed: exact-cent tax rounding, duplicate-line merging, invalid checkout input, CSV formula protection, cross-origin rejection, import validation/duplicate SKUs |
| Isolated database integration | 14 passed against MySQL 8.0.46 |
| Stock and payment safeguards | Server repricing/snapshots, concurrent reservations, duplicate/out-of-order events, delayed payment, expiry release, mismatched totals and signed/forged webhook handling and late-payment manual review passed |
| CSV database import | Valid writes and conflict rollback passed |
| Enquiry persistence | Durable save and honeypot rejection passed |
| Owner restrictions | Unauthenticated access and missing CSRF rejected; authorised update passed; stock below active reservations rejected |
| SMTP | Actual message delivery to a loopback-only test SMTP inbox passed |
| Catalogue preview | Shared UI, source assets, direct route files and explicit noindex controls; publicly viewable at the owner’s request |

## Verification limits

The DOM tests are automated interaction checks, not visual browser inspection. Cloud-browser/mobile screenshot QA was unavailable because the required browser-control capability was not available. Responsive styling and keyboard semantics are implemented, but WCAG conformance, 200% visual reflow and Lighthouse/Core Web Vitals scores are not claimed.

The optional read-only WebMCP catalogue-search tool is feature-detected. A permitted supported browser context was unavailable, so live WebMCP validation is not claimed.

Stripe Checkout session creation with an actual merchant account has not been exercised. Signed webhook tests use the Stripe SDK and isolated payment-event fixtures. No live card transaction occurred. Real merchant credentials, Hostinger webhook delivery and end-to-end merchant checkout require account verification.

Hostinger deployment/startup, its actual database and a real SMTP service remain unverified. No further Hostinger sign-in attempts were made after the previously reported access rejection. A new GitHub repository was not provisioned; the portable source package and catalogue preview source are provided for that deployment path.

The current catalogue contains 12 illustrative formats and 64 Packware reference formats with sourced photographs, all marked as preview products. Deiva’s business details, actual products/prices/stock, delivery rules, tax treatment and policy approval remain owner inputs before live business trading.

## Catalogue expansion — 6 October 2026 (Australia/Sydney)

The expanded data was checked against all 16 products in the selected Packware collection: 28 total products, 52 unique variant IDs/SKUs, source SKU coverage, valid category/compatibility references, all 28 local product photographs present, and all added prices/stock left unknown. Five existing customer DOM journey checks passed again after the catalogue expansion. The 16 selected reference photographs were visually inspected in a contact sheet. Full mobile/browser layout inspection remains outside the verified scope described above.

The Next.js production build and standalone asset preparation passed again after the expanded catalogue and reference links were added.

## Product category expansion — 6 October 2026 (Australia/Sydney)

Added 48 selected reference products from the owner-supplied category directory. The catalogue now contains 76 products, 151 unique quantity/colour variants and nine stocked shopping categories. Source SKU coverage, unique identifiers, positive whole-unit quantities, category/compatibility references, all 76 local product photographs and all stocked-category thumbnails were checked. All catalogue prices and stock remain unknown.

Five existing customer DOM journey checks passed during this expansion. Additional focused interaction checks passed for all nine homepage category links, six straws/accessories listings, a two-carton straw order containing 5,000 units, and two black-lid bottle packs containing 100 bottles with the correct source SKU. These are DOM interaction checks; visual browser/mobile QA remains subject to the limits above.

All 48 newly selected photographs were visually inspected in two contact sheets. Five product-gallery alternatives replaced promotional or mixed-size packaging images. Optimized images retain the source composition without cropping; 64 image source URLs, retrieval dates and hashes are recorded. Both plate sizes use the shared photograph supplied by their source listings.

The Node.js 22 production build, TypeScript validation, lint and standalone asset preparation passed after this expansion. Database/payment integrations were not changed or retested for these catalogue-only changes.
