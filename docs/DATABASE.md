# Database setup and stock handling

The application uses `mysql2`, InnoDB transactions, UTF-8 storage, parameterised SQL, UTC timestamps and a lazy pool bounded to five connections. Schema validation is targeted at MySQL 8.0; actual test results are recorded in `VERIFICATION.md`. MariaDB compatibility has not been verified.

## Initial setup without SSH

1. In Hostinger’s Databases Management screen, create a new application database and user.
2. Open phpMyAdmin for that database.
3. Import `deploy/schema.mysql.sql`.
4. Enter its actual host, name, user and password through the private application environment settings.
5. Configure the owner account, sign in at `/admin`, and import approved catalogue data.

The initial schema can be safely repeated. It records schema version 1. A future change must ship a separate, numbered ALTER migration under `deploy/migrations`; repeating CREATE TABLE IF NOT EXISTS does not upgrade columns. Back up existing data before an upgrade. Builds never run schema setup.

## Catalogue imports

Use `public/catalogue-import-template.csv`. Integer `price_cents` values are gross AUD amounts with the approved GST treatment. A blank price is quote-only. A blank stock value is untracked. Units are the individual items inside one purchasable pack/carton; stock is the number of those purchasable packs/cartons available for that SKU.

Imports validate the entire file before writes, reject duplicate SKUs/variant IDs and inconsistent product descriptions, and run atomically. An existing SKU can be updated only with its matching stable variant ID. Reserved stock cannot be removed by lowering available stock. Product images must be committed `/products/` assets or approved HTTPS media references. No application-filesystem upload storage is used.

## Inventory policy

Stock is tracked independently per purchasable SKU. Do not assign the same underlying physical units simultaneously to both pack and carton inventory. If the warehouse shares one physical pool across formats, allocate non-overlapping stock per SKU before importing; shared-unit inventory would require an additional inventory model.

Checkout locks variant rows, checks price/minimum/increments and available stock, saves an order snapshot and reserves stock atomically. Only a verified paid webhook deducts stock. Duplicate events cannot deduct again. Provider-confirmed failure or expiry releases the reservation. Confirmed paid orders are not reversed by later expired events.

Sessions expire after 35 minutes. Expired sessions are reconciled on later checkout activity using provider status; no background worker is required. Webhooks normally release them promptly. If the provider cannot be reached or an ambiguous checkout creation cannot be found, reservations are retained to avoid overselling. The owner must reconcile those exceptional records against the merchant dashboard. This fail-safe can temporarily hold stock; it is not a claim of automatic background cleanup.

A late paid event after released reservations can place fulfilment in `manual_review` if stock is unavailable. Owner cancellation does not refund a payment or automatically restock goods. Resolve actual payment/refund and stock outcomes before making manual adjustments.

## Customer records

Order totals, lines, quantities, SKU/format, tax, address and delivery selection are snapshots. Status links use random bearer tokens whose hashes alone are stored. Payment, fulfilment and notification states remain separate. Customer records, exports, credentials and the isolated test database are excluded from source archives and repositories.
