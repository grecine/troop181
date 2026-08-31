# Contributing

Thank you for helping keep the Troop 181 website up to date. You do not need special software — GitHub's web editor is enough for most changes.

## What to edit

| If you want to… | Edit this |
|-----------------|-----------|
| Change page text | A file in `src/content/` |
| Add a new page | Create a new `.md` file in `src/content/` |
| Change troop name, colors, or calendar | `src/_data/site.json` |
| Change the header, footer, or navigation layout | Ask a maintainer — these are template files |

**Do not edit** `_site/` or `node_modules/`. Those are generated automatically.

## Edit a page in GitHub

1. Open the file under `src/content/` (for example `index.md`).
2. Click the pencil icon.
3. Make your change.
4. Commit directly to `main` (or open a pull request if you prefer review).
5. Cloudflare rebuilds the site automatically within a few minutes.

## Add a new page

1. Create `src/content/your-page-name.md`.
2. Add a title at the top:

```md
---
title: "Your Page Title"
description: "Short summary for search engines and link previews."
navOrder: 3
---

Your content here.
```

3. Commit to `main`. The page appears at `/your-page-name/` and in the header navigation.

Use `showInNav: false` in the front matter if the page should exist but not appear in the menu.

## Link the troop calendar

1. In Google Calendar, open the troop calendar's settings.
2. Under **Integrate calendar**, copy the **Calendar ID**.
3. Edit `src/_data/site.json` and paste the ID into `"calendarId"`.
4. Commit the change.

## Changing colors or fonts

Edit the `theme` section in `src/_data/site.json`. Use valid CSS values and keep the JSON formatting (quotes and commas) intact.

## Need help?

Ask a site maintainer, or open a GitHub issue describing what you want to change.

For technical details aimed at developers and AI tools, see `AGENTS.md`.
