# Agent guide

This file helps humans and AI agents work on the Troop 181 website safely and consistently.

## Project summary

Static website for **Troop 181** (Scouting America), built with [Eleventy](https://www.11ty.dev/) 3.x. Content lives in Markdown; the site deploys to Cloudflare on every push to `main`.

**Stack:** Node.js, Eleventy, Nunjucks templates, plain CSS. No React, no database, no CMS.

## Commands

```sh
npm install      # install dependencies
npm run dev      # local dev server at http://localhost:8080
npm run build    # build static site to _site/
```

Always run `npm run build` after structural changes to verify the site compiles.

## Directory map

| Path | Purpose |
|------|---------|
| `src/content/` | **Primary edit surface.** One `.md` file per page. |
| `src/content/content.11tydata.js` | Shared page defaults (layout, permalink, nav behavior). |
| `src/_data/site.json` | Troop-wide settings: name, URL, calendar ID, theme colors. |
| `src/_includes/layouts/` | Page shells. Edit only for layout/navigation changes. |
| `src/_includes/components/` | Reusable partials (hero, calendar embed). Prefer these over inline HTML in Markdown. |
| `src/assets/` | Static assets (`styles.css`, `favicon.svg`, logos). |
| `.eleventy.js` | Build config, collections, CI warnings. |
| `_site/` | Build output. **Never edit.** |
| `node_modules/` | Dependencies. **Never edit.** |

## Common tasks

### Add a page

1. Create `src/content/your-page.md` (nested paths become nested URLs).
2. Add optional front matter:

```yaml
---
title: "About Us"
description: "Short summary for search engines and link previews."
navOrder: 2
showInNav: true
---
```

3. Write Markdown body content.
4. Run `npm run build` to verify.

URL mapping:

- `src/content/about.md` → `/about/`
- `src/content/resources/forms.md` → `/resources/forms/`

Pages auto-appear in header navigation unless `showInNav: false`. Navigation order uses `navOrder` (lower first), then title alphabetically.

### Update troop settings

Edit `src/_data/site.json`:

| Field | Purpose |
|-------|---------|
| `name` | Troop name shown in header/footer |
| `url` | Public site URL, no trailing slash (e.g. `https://troop181.org`). Enables canonical and Open Graph tags. |
| `calendarId` | Google Calendar ID for the events embed |
| `demoCalendarId` | Public calendar shown when `calendarId` is empty (default: US holidays) |
| `timezone` | IANA timezone for calendar embed (default `America/New_York`) |
| `contactEmail` | Troop contact email (reserved for future use) |
| `theme.*` | Colors, fonts, max width |

Do not put secrets in this file; it is committed to git.

### Link the Google Calendar

1. In Google Calendar → Settings → Integrate calendar, copy the Calendar ID.
2. Set `calendarId` in `src/_data/site.json`.
3. Rebuild. The calendar embed is rendered by `src/_includes/components/calendar.njk`.

### Change site appearance

- **Colors/fonts:** `src/_data/site.json` → `theme` object.
- **Layout/navigation:** `src/_includes/layouts/base.njk`.
- **Component styles:** `src/assets/styles.css`.

### Add a reusable content block

1. Create a partial in `src/_includes/components/`.
2. Include it from Markdown: `{% include "components/your-component.njk" %}`.
3. Pass data via page front matter or `site.json`, not hardcoded in the partial when possible.

## Conventions

- Use **root-relative links** (`/about/`), never hardcode production domains in content.
- Prefer **Markdown** for page body text; use includes for repeated HTML structures.
- Keep changes **minimal and focused** — this is a small volunteer-maintained site.
- Match existing naming: kebab-case filenames, `title` in front matter when the auto-generated title is wrong.
- Use **Scouting America** branding, not legacy BSA terminology.
- The Scouting America logo is `src/assets/scouting-america-logo.png`; follow brand guidance.

## What not to change

- `_site/` (generated)
- `package-lock.json` unless adding/updating dependencies
- Cloudflare or DNS settings (configured outside this repo)
- Do not add frameworks, databases, or heavy tooling without explicit request

## Deployment

- **Trigger:** push to `main`
- **Host:** Cloudflare (connected via GitHub)
- **Build command:** `npm run build`
- **Output directory:** `_site/`

Custom domains are configured in Cloudflare/DNS, not in this repo. Internal links use root-relative paths so they work on any domain.

## CI

GitHub Actions runs `npm ci && npm run build` on pushes and PRs (`.github/workflows/ci.yml`). Dependabot opens monthly npm update PRs.

## Human editor docs

See `CONTRIBUTING.md` for a non-technical guide aimed at troop volunteers editing content in GitHub.

## Suggested agent workflow

1. Read this file and the relevant source files before editing.
2. For content-only changes, touch files under `src/content/` and/or `src/_data/site.json`.
3. For new pages, set `title`, `navOrder`, and `showInNav` in front matter.
4. Run `npm run build` and fix any errors before finishing.
5. Update `README.md` only when user-facing workflows change.

## Future ideas

See `TODO.md` for a backlog of optional improvements (sitemap, link checker, branch protection, etc.).
