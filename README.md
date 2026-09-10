# Model Portfolio — Setup & Customization Guide

A responsive, dynamic portfolio site built with React + Vite. Styled as an
editorial tear-sheet / comp card rather than a generic template: oversized
display type, an asymmetric hero, a masonry-style gallery with lightbox,
and a comp-card measurements panel.

---

## 1. What's included

```
model-portfolio/
├── index.html              ← page shell + Google Fonts
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx             ← React entry point
│   ├── App.jsx               ← composes all sections
│   ├── index.css              ← every style, all in one place
│   ├── data.js                ← ALL editable content lives here
│   ├── assets/                ← put your real photos here
│   └── components/
│       ├── Nav.jsx             ← sticky nav + mobile menu
│       ├── Hero.jsx            ← name/photo hero with load-in reveal
│       ├── PlaceholderImage.jsx← stand-in until you add real photos
│       ├── Gallery.jsx         ← filterable grid + click-to-expand lightbox
│       ├── About.jsx           ← bio section
│       ├── Stats.jsx           ← comp-card measurements
│       ├── Experience.jsx      ← client/work history list
│       ├── Press.jsx           ← quote section
│       ├── Contact.jsx         ← booking form (client-side only, see step 5)
│       └── Footer.jsx
```

## 2. Run it locally

You'll need [Node.js](https://nodejs.org) 18 or newer installed.

```bash
cd model-portfolio
npm install
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`). The page hot-reloads
as you edit files.

## 3. Edit the content

Everything text-based — name, tagline, bio, measurements, client history,
press quotes, contact details — lives in **`src/data.js`**. Change the values
there; no component code needs to change. For example, to update measurements:

```js
export const stats = [
  { label: 'Height', value: '5\u2019 11"' },
  // edit these
]
```

## 4. Add your real photos

Right now every image is a placeholder block (a labeled gray swatch) so
nothing implies a photo of someone it isn't. To swap in real photos:

1. Add image files to `src/assets/` (see `src/assets/README.txt`).
2. In the component that uses the image (`Hero.jsx`, `About.jsx`, or
   `Gallery.jsx`/`data.js` for the grid), import the file and replace
   `<PlaceholderImage label="..." />` with a normal `<img>`:

```jsx
import lookOne from '../assets/look-01.jpg'
// ...
<img src={lookOne} alt="Editorial look, Nord Quarterly" className="hero-img" />
```

For the gallery grid specifically, add an `import` for each photo at the top
of `data.js`, and reference it in the `src` field of each `gallery` entry
instead of the placeholder path.

## 5. Wire up the booking form (optional)

`Contact.jsx` currently validates and shows a confirmation state, but
doesn't send anywhere. To make it functional, replace the comment inside
`handleSubmit` with a real request — e.g. a `fetch()` to your own endpoint,
or a form service like Formspree/Basin:

```js
await fetch('https://formspree.io/f/your-id', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
})
```

## 6. Customize the look

All design tokens are at the top of **`src/index.css`**:

```css
:root {
  --paper: #EDEAE2;   /* background */
  --ink: #1C1B19;      /* primary text */
  --accent: #7A1F2B;   /* oxblood accent — links, active states */
  --stone: #A39C8E;    /* secondary/muted text */
  --line: #C9C2B4;     /* hairline rules and borders */
  --display: 'Bodoni Moda', serif;  /* headline typeface */
  --body: 'Archivo', sans-serif;    /* everything else */
}
```

Change these and the whole site updates. If you swap fonts, update the
Google Fonts `<link>` in `index.html` to match.

## 7. Build for production

```bash
npm run build
```

Output goes to `dist/`. Preview it locally with `npm run preview`.

## 8. Deploy

The `dist/` folder is static — deploy it anywhere:

- **Vercel / Netlify**: connect the repo, build command `npm run build`,
  output directory `dist`. Zero config needed beyond that.
- **GitHub Pages**: see the dedicated walkthrough below — it's already
  wired up with a GitHub Actions workflow.
- **Any static host**: upload the contents of `dist/` directly.

### Deploying to GitHub Pages

This project ships with `.github/workflows/deploy.yml`, which builds and
publishes automatically on every push to `main`. `vite.config.js` already
uses relative asset paths (`base: './'`), so it works under any repo name
without extra config.

1. **Create a GitHub repo** (if you haven't) and push this project to it:

   ```bash
   cd model-portfolio
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```

2. **Turn on Pages via Actions.** On GitHub: go to your repo →
   **Settings → Pages** → under "Build and deployment", set **Source** to
   **GitHub Actions**. (Not "Deploy from a branch" — that's the older,
   manual method this project doesn't use.)

3. **Push to `main`.** The workflow in step 1 already triggered a run —
   check the **Actions** tab to watch it build and deploy. It takes about
   a minute.

4. **Find your URL.** Once the workflow finishes, it's live at:

   ```
   https://<your-username>.github.io/<your-repo>/
   ```

   You can also see the exact URL under **Settings → Pages** once the
   first deploy completes.

5. **Future updates**: just `git push` to `main` — the workflow rebuilds
   and redeploys automatically. No manual `npm run build` or branch
   juggling needed.

**Using a custom domain instead?** Add a `CNAME` file containing your
domain to the `public/` folder, then point your domain's DNS at GitHub
Pages per [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

---

### Design notes

- **Type**: Bodoni Moda (a high-contrast didone, the family fashion
  mastheads actually use) for headlines, Archivo for everything functional.
- **Layout**: the hero overlaps oversized name type with a bled photo
  instead of a centered headline; the gallery uses uneven image sizes like
  a magazine spread rather than uniform cards; measurements are presented
  as a comp card, which is what modeling agencies really use.
- **Motion**: one orchestrated reveal on page load (the hero); everything
  else responds to a click or hover rather than firing on scroll.
