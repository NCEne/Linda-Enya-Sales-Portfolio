# Linda Enya — Sales Portfolio (website)

A plain **HTML / CSS / JS** portfolio site — the same stack most solo/freelance
portfolio sites ship with, because it needs no build step, no framework, and
runs anywhere for free. No installs required to view it.

## Files
```
sales-portfolio/
├── index.html   → all content lives here
├── style.css    → all visual design (colors, type, layout)
├── script.js    → scroll animation + small interactions
└── README.md    → this file
```

## 1. Open it locally (no setup)
Double-click `index.html` — it opens in your browser immediately. No server,
no install, no dependencies.

## 2. Edit it in VS Code
1. Download/unzip this folder anywhere on your computer.
2. Open VS Code → **File → Open Folder** → select `sales-portfolio`.
3. Install the free **Live Server** extension (search "Live Server" by
   Ritwick Dey in the Extensions panel) — this gives you auto-refresh while
   you edit. Tutorial if needed: search "VS Code Live Server tutorial" on
   YouTube (freeCodeCamp and Traversy Media both have short, clear ones).
4. Right-click `index.html` → **Open with Live Server**.
5. Edit text directly inside the `<p>`, `<h1>`, `<h2>` tags in `index.html`.
   You do not need to touch `style.css` or `script.js` unless you want to
   change colors/fonts/layout.

## 3. Fill in the placeholders
Search the project for `[ADD:` (Ctrl/Cmd+Shift+F in VS Code → search across
files) — every remaining gap in the original information is marked this way,
both as visible dashed boxes on the page and as HTML comments/labels in the
code. These correspond to fields the intake form left blank:

| Placeholder | What's needed |
|---|---|
| `[ADD: Headshot]` | High-resolution, professional headshot |
| `[ADD: Cold email template]` | 2–3 top-converting cold email templates |
| `[ADD: LinkedIn / discovery-call script]` | Outreach script or call framework |
| `[ADD: Redacted pitch deck]` | Sanitized pitch deck/proposal used to close a deal |
| `[ADD: CRM dashboard screenshot]` | Sanitized Salesforce/HubSpot pipeline view |
| `[ADD: Testimonial / manager quote]` | Client testimonial or manager quote |
| `you@example.com`, LinkedIn URL, resume link | Your real contact details |
| `[Your Name]` / `[Y.N.]` | Appears in the page `<title>`, hero, nav mark, and footer |

To swap a placeholder box for a real image: replace the whole
`<div class="placeholder-box">…</div>` block with
`<img src="images/your-file.jpg" alt="...">` (create an `images/` folder
next to `index.html` and drop files in there).

Once everything is filled in, delete the `edit-banner` `<div>` near the top
of `index.html` — it's a dev-only reminder banner, not meant to ship.

## 4. Put it online (pick one — both are free)
**GitHub Pages** (good if you already use Git/GitHub):
1. Create a new repo on GitHub, push this folder to it.
2. Repo → **Settings → Pages** → set source to the `main` branch, root folder.
3. Your site is live at `https://<username>.github.io/<repo-name>`.
Tutorial: search "deploy static site GitHub Pages" — GitHub's own docs walk
through this in under 5 minutes.

**Netlify Drop** (fastest, no Git needed):
1. Go to https://app.netlify.com/drop
2. Drag the whole `sales-portfolio` folder into the browser window.
3. Netlify gives you a live URL instantly; you can rename it or connect a
   custom domain from the site settings.

## Design notes (for future edits)
- Colors, spacing, and fonts are all defined as CSS variables at the top of
  `style.css` (the `:root { ... }` block) — change a value there once and it
  updates everywhere.
- Fonts used: **Fraunces** (headlines), **IBM Plex Sans** (body),
  **IBM Plex Mono** (data/labels), **Kalam** (the red hand-written case-study
  annotations) — all loaded free from Google Fonts, no license needed.
- The circular red annotations on each case study are the one deliberate
  "signature" visual: a nod to the educator background in the differentiator
  answer — a graded rubric with a red-pen note in the margin, instead of a
  generic badge or icon.
