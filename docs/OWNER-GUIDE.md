# Owner guide

The private static review is read-only for owner operations. Configure the Hostinger application’s database and owner credentials before using the protected management area at `/admin`.

## Catalogue

Use the Catalogue tab to review SKUs, gross prices, stock and reserved quantities. Update the price or available stock on a row. A blank price keeps that SKU quote-only. Product information and images can be edited in the form below the list; matching product identifiers establish lid/container relationships.

Use CSV import to create products and variants, update pack quantities/specifications and maintain approved image references. Duplicate IDs/SKUs and invalid rows are reported before the transaction changes data. Export the current catalogue as a starting point for a controlled update.

## Categories

Create or update a category identifier, display name, description and image reference in Categories. Imported product rows also establish their category records. Only active database categories appear in the configured shop.

## Orders

Review the payment state independently from fulfilment and email notification. Update fulfilment only after the real order is eligible. The application blocks dispatch/collection/processing on unpaid orders. Merchant refunds and physical restocking are separate actions; a status change does not perform them.

Order exports include line-level product snapshots for packing and review. Keep those exports private. The application saves no raw card details.

## Enquiries

Review the saved customer details and request, then mark it reviewed or closed. Notification status tells you whether the email was sent, failed or is pending; an email failure does not delete the enquiry. Export requests when needed and keep them private.

## Notifications

Configure a verified sender and the business notification recipient. Test actual delivery in the merchant/business account before launch. Database storage and mail delivery must be verified separately. The isolated local SMTP test does not establish that a real provider is configured.

## Before launch

Replace the demo catalogue, confirm the public business details, approve the policy pages, upload approved product photography, confirm SKU inventory allocation, prices/GST and delivery rules, then test the real integrations. The review is intentionally noindex and does not authorise public launch.
