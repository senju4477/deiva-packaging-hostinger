# Environment configuration

Enter secrets privately in the hosting dashboard. Never commit real `.env` files or put secrets in `NEXT_PUBLIC` variables. No public payment key is needed because checkout is Stripe-hosted.

| Key | Purpose | Required | Visibility | Use / changes |
|---|---|---|---|---|
| COMMERCE_MODE | `demo`, `test` or `live`; default demo | Always recommended | Server setting | Runtime; restart/redeploy after changes |
| SITE_URL | Trusted absolute shop origin | Configured shop | Public value | Metadata and runtime; rebuild/redeploy |
| SITE_INDEXABLE | `false` in previews; approved public launch only | Recommended | Public setting | Build headers and metadata; rebuild |
| HOSTNAME | Local startup binds to 0.0.0.0 | Managed by startup | Server setting | Runtime |
| PORT | Hosting-managed listen port; local default 3000 | Managed by hosting | Server setting | Runtime; do not override Hostinger’s value |
| BUSINESS_EMAIL | Confirmed public business email | Before launch | Public | Runtime; restart |
| BUSINESS_PHONE | Confirmed public phone | Before launch | Public | Runtime; restart |
| DB_HOST | Actual database hostname | Test/live storage | Private | Runtime; restart |
| DB_PORT | Database TCP port; default 3306 | Optional | Private | Runtime; restart |
| DB_USER | Database account | Test/live storage | Secret | Runtime; restart |
| DB_PASSWORD | Database password | Test/live storage | Secret | Runtime; restart |
| DB_NAME | Dedicated application database | Test/live storage | Private | Runtime; restart |
| DB_SSL | `true` only when server supports verified TLS | Optional | Server setting | Runtime; restart |
| ADMIN_EMAIL | Authorised owner email | Owner area | Private | Runtime; restart |
| ADMIN_PASSWORD_HASH | `scrypt$salt$hash`, generated locally | Owner area | Secret | Runtime; restart |
| AUTH_SECRET | Random secret at least 32 characters | Owner area | Secret | Runtime; rotation signs sessions out |
| STRIPE_SECRET_KEY | Merchant test/live Node SDK key matching mode | Checkout | Secret | Runtime; restart |
| STRIPE_WEBHOOK_SECRET | Signature secret for the configured endpoint | Checkout verification | Secret | Runtime; restart |
| GST_RATE_BPS | Confirmed 1000 for 10% GST included, or 0 for no GST | Checkout | Server setting | Runtime; restart |
| DELIVERY_RULES_JSON | Approved postcode rules and charges | Checkout | Server setting | Runtime; restart |
| SMTP_HOST | Verified outgoing mail hostname | Email | Private | Runtime; restart |
| SMTP_PORT | Default 587; match provider | Email | Server setting | Runtime; restart |
| SMTP_SECURE | `true` for implicit TLS, commonly port 465 | Email | Server setting | Runtime; restart |
| SMTP_USER | Outgoing mail username | Provider-dependent | Secret | Runtime; restart |
| SMTP_PASSWORD | Outgoing mail password | Provider-dependent | Secret | Runtime; restart |
| SMTP_FROM | Verified sender address | Email | Private | Runtime; restart |
| NOTIFY_EMAIL | Confirmed business notification recipient | Email | Private | Runtime; restart |

A configured row in a dashboard does not establish that its value is present or valid. Restart or redeploy after runtime changes according to the hosting dashboard’s behavior.

## Approved delivery rule format

The default is `[]`, which makes every area quote-only. A rule contains `id`, `label`, an explicit array of four-digit `postcodes`, integer `chargeCents`, and `method` (`delivery` or `collection`). Collection rules also require `collectionAddress`. Supply actual approved values; this project includes no invented zones or freight prices.

## Owner password

Run `npm run admin:hash` locally on your own computer and enter a strong password there. Store the resulting hash in `ADMIN_PASSWORD_HASH`. Generate `AUTH_SECRET` with a password manager or cryptographically secure random generator. There is no public default admin password, no browser-based password collection and no need for a Hostinger SSH terminal.
