# Maybe later

Ideas worth considering as the site grows. Not scheduled — pick them up when there is a clear need.

## In the repo

- [ ] **Sitemap** — auto-generate `sitemap.xml` from pages (requires `site.url` to be set)
- [ ] **Link checker** — scheduled GitHub Action (e.g. `lychee`) to catch broken external links
- [ ] **Content starter template** — example page under `src/content/` showing recommended front matter
- [ ] **`.cursor/rules/`** — short file-specific agent rules to complement `AGENTS.md`
- [ ] **`MAINTAINERS.md`** — public list of site maintainers and how to reach them

## Outside the repo

- [ ] **Branch protection on `main`** — require CI to pass before merge
- [ ] **Ownership runbook** — private doc listing who owns Cloudflare, domain registrar, Google Calendar admin, and GitHub access
- [ ] **Custom domain setup** — DNS in Cloudflare, set `site.url`, redirect old `*.pages.dev` / `*.workers.dev` URL
- [ ] **PR preview deployments** — Cloudflare preview builds for pull requests

## Probably skip

- CMS or headless backend
- Prettier / markdown lint (adds friction for volunteer editors)
- Lighthouse CI, component frameworks, staging environments
- Failing CI on empty `calendarId` (warn is enough until the calendar is configured)
