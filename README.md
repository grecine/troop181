# Troop 181 website

A simple, static Troop 181 website built with [Eleventy](https://www.11ty.dev/). Pages are Markdown files, so they can be edited directly in GitHub without special software.

## Current pages

- `src/content/index.md` is the **Welcome** page at `/`.
- `src/content/calendar-and-events.md` is the **Calendar & Events** page at `/calendar-and-events/`.

## Adding and editing pages

Add a Markdown file anywhere under `src/content`. Its filename becomes its public URL without `/content/`, and it automatically appears in the header navigation.

- `src/content/about.md` becomes `/about/`
- `src/content/resources/forms.md` becomes `/resources/forms/`

The filename also becomes the page title and navigation label. To use a different title, add this at the top of the file:

  ```md
  ---
  title: "Permission Forms"
  ---
  ```

To edit a page in GitHub, open the file under `src/content`, select the pencil icon, make the change, and commit it to the `main` branch. Cloudflare then rebuilds the site automatically.

## Link to the troop calendar

1. In Google Calendar, select the troop calendar. Under **Settings and sharing**, make it available to the public if it will be embedded publicly.
2. Under **Integrate calendar**, copy the **Calendar ID** (it looks like an email address, such as `abcd1234@group.calendar.google.com`).
3. Edit `src/content/calendar-and-events.md` and replace `CALENDAR_ID` in the iframe URL with that ID.

## Changing the theme

Edit `src/_data/site.json` to change the site's name, colors, fonts, or maximum content width in one place. For example, changing `accent` updates buttons and the active navigation item across the whole site.

The default values are valid CSS values: use a hex color such as `"#0f5b2f"`, a CSS font stack, or a width such as `"960px"`. The site loads DM Sans for body text and DM Serif Display for headings. Keep the quotation marks and commas intact so the file remains valid JSON.

The header uses the official Scouting America wordmark in `src/assets/scouting-america-logo.png`. Use it in accordance with Scouting America brand guidance.

## Deployment

This repository is connected to Cloudflare Workers through GitHub. Every push to `main` triggers a production build and deployment. The Eleventy build command is:

```sh
npm run build
```

The generated static site is written to `_site/`.

## Preview locally

Install dependencies and start the local development server:

```sh
npm install
npm run dev
```

Then open [http://localhost:8080](http://localhost:8080).

To build the static output without starting the development server:

```sh
npm run build
```
