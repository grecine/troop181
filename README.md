# Troop 181 — Eleventy scaffold

This branch adds a minimal Eleventy scaffold and a placeholder page with an embedded Google Calendar iframe (placeholder). Non-technical editors can update content using the GitHub web UI.

Files added
- package.json — scripts to run Eleventy
- .eleventy.js — Eleventy configuration (input: src/, output: _site/)
- src/content/index.md — placeholder homepage with calendar iframe placeholder
- src/_includes/layouts/base.njk — simple layout
- src/assets/styles.css — minimal styles
- .gitignore

How to edit pages (non-technical)
- Go to the repository on GitHub → navigate to a file under src/content (for example src/content/index.md) → click the pencil icon to edit → commit the change directly to the branch or open a PR.

Replace the calendar placeholder
1. In Google Calendar: Settings → Select your calendar → Access permissions → check "Make available to public" if you want it embedded publicly.
2. Settings → Integrate calendar → copy the "Calendar ID" (looks like an email: abcd1234@group.calendar.google.com).
3. Edit src/content/index.md and replace CALENDAR_ID in the iframe src with your Calendar ID.

Deploy to Cloudflare Pages
- Connect this repository to Cloudflare Pages.
- Framework preset: Eleventy
- Build command: npm run build
- Build output directory: _site
- (If you prefer, set Framework preset to "None" and use the same build command/output.)

Preview locally
- Install dependencies and run Eleventy locally:
  1. npm install
  2. npm run dev   # Eleventy local server and watch

Or build and serve the static output:
  1. npm install
  2. npm run build
  3. npx http-server _site -p 8080

Notes
- This scaffold intentionally keeps things small and easy to edit. If you want more features (collections, blog, pagination, shortcodes), I can extend the Eleventy config.
- I did not add a LICENSE file per your request.

