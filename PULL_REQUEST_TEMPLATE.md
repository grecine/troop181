Title: Add Eleventy scaffold + calendar placeholder

This pull request adds a minimal Eleventy scaffold to the repository and a placeholder homepage with an embedded Google Calendar iframe (placeholder). Non-technical editors can update content using the GitHub web UI.

Files added on branch scaffold/eleventy-site:
- package.json
- .eleventy.js
- src/content/index.md
- src/_includes/layouts/base.njk
- src/assets/styles.css
- README.md
- .gitignore

How to test:
1. Merge the PR into the default branch (main).
2. Optionally preview locally by running:
   npm install
   npm run dev

Replace the calendar placeholder by editing src/content/index.md and replacing CALENDAR_ID with your calendar's ID.
