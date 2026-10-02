# travelguide

A calm, editorial Hyderabad travel guide built around community recommendations.

## Run locally

1. Install Node.js 20+.
2. Run `npm install`.
3. Run `npm run dev`.
4. Open `http://localhost:3000`.

The asset downloader runs automatically before dev and build. It skips existing files and never fails the build when a remote asset is unavailable.

## Production build

Run `npm run build`, then `npm start` to serve the production build locally.

## Vercel

Import the repository into Vercel. The project is zero-config for deployment. Add `NEXT_PUBLIC_SITE_URL` for canonical URLs and `NEXT_PUBLIC_WEB3FORMS_KEY` to enable Web3Forms contact submission. Without the Web3Forms key, the contact form falls back to WhatsApp.

## Content

All editable guide content is in `lib/content.ts`. Client-confirmation placeholders are intentionally bracketed rather than invented.
