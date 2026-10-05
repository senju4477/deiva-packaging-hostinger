# Hostinger Node.js deployment

## Separate application

Create a new private GitHub repository for this source, for example `deiva-packaging-hostinger`, with branch `main`. Upload the ZIP contents to the repository root, including `package-lock.json`. Preserve existing sites, databases, orders and DNS. The source is also preserved with the private review project; a new GitHub repository has not been provisioned by this handoff.

In Hostinger choose Websites > Add Website > Node.js web app > Import Git repository. Authorise the owner’s GitHub App access to the new repository. Start with a separate preview application rather than the production domain.

| Field | Setting |
|---|---|
| Application preset | Next.js in server mode |
| Node.js | Maintained 22.x; locally tested 22.23.3 |
| Package manager | npm |
| Root | Repository root; blank or `/` |
| Build script | `build`, or `npm run build` only when a full command is requested |
| Output directory | `.next` |
| Entry file | Blank / ignored for the Next.js preset |

The build is `next build --webpack && node scripts/prepare-standalone.mjs`. It prepares the generated `.next/standalone/server.js`, `.next/static` and `public` assets. Local production startup runs that same server through `scripts/start.mjs`.

Do not add a custom root `server.js`, set output to `dist`, choose static hosting, or rely on editable install/start-command fields. No SSH, Docker, Cloudflare runtime, Redis or background worker is required for the Hostinger application.

## Review first

Set `COMMERCE_MODE=demo`, `SITE_INDEXABLE=false` and the actual preview origin in `SITE_URL`. A successful build should be followed by opening the preview, directly visiting several routes and checking images, CSS, scripts and the cart. A green build alone does not verify a shop.

For a configured test shop, import the schema into a NEW database through phpMyAdmin, enter the runtime environment values privately and import approved catalogue rows. Use test merchant credentials. Verify quote storage, sign-in, supported/unsupported postcodes, successful/cancelled checkout, signed webhook delivery, order states and actual email delivery separately.

## Launch boundary

This handoff publishes only the private review. Hostinger build/startup, its actual database and merchant/email services still need verification in the owner’s account. Hostinger sign-in was not retried after the previously reported access rejection.

Before public launch, replace all illustrative product information and images, approve policies/contact details and business tax treatment, confirm delivery rules, configure live merchant keys and webhooks, review stock handling, and obtain the separate launch instruction. Then set the production `SITE_URL` and approved indexing settings.

Production sitemap: `https://deivapackaging.com.au/sitemap.xml`. Submit it in Search Console after the real production site is public and the sitemap contains approved catalogue URLs. If replacing an existing site, inventory its current URLs and review redirects first; no invented redirects are included.
