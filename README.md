# Krishiv Chawla — Portfolio

A single-page portfolio showcasing my projects and competitions.
Live site: **https://krishiv47.github.io/portfolio/**

## Stack
Plain static site — no build step, no dependencies.

- `index.html` — markup & sections
- `styles.css` — light / minimal design system
- `app.js` — **all editable content** (projects, competitions, skills) + rendering

## Updating content
Open `app.js` and edit the arrays at the top:

- `projects[]` — pulled from [github.com/krishiv47](https://github.com/krishiv47)
- `competitions[]` — replace the `placeholder: true` entries with real ones
  (`{ result, event, year, detail, link }`)
- `skills[]`, `stats[]` — quick tweaks

Commit and push — GitHub Pages redeploys automatically.

## Run locally
Any static server works, e.g.:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```
