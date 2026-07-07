# Gabriel Chambers — Portfolio Site

A single-page portfolio: hero, About, Experience, Projects, Skills, Leadership & Awards,
and Contact — framed with a chunky, poppable pink bubble-wrap border.

## Files
- `index.html` — all page content and structure
- `style.css` — all visual styling (colors, type, layout, the bubble border)
- `script.js` — generates the bubble border and makes bubbles poppable, plus the mobile menu
- `GabrielChambers_Resume.pdf` — served by the "Download résumé" button

## Run it locally
No build step needed — it's plain HTML/CSS/JS. Just open `index.html` in a browser,
or serve it locally:
```
npx serve .
```

## Customize it
- **Text/content**: edit directly in `index.html` — it's all plain HTML, no templating.
- **Colors**: change the hex values at the top of `style.css` under `:root`. Everything
  on the page pulls from those variables, so editing `--pink-accent` there updates the
  whole site.
- **Bubble border size**: also in `:root` — `--frame` (border thickness), `--bubble-d`
  (bubble size), `--bubble-gap` (spacing).
- **Resume PDF**: replace `GabrielChambers_Resume.pdf` with an updated file of the same name,
  or update the `href` in the "Download résumé" button in `index.html`.

## Deploy to Vercel
**Option A — Vercel CLI (fastest)**
1. Install the CLI: `npm i -g vercel`
2. From this folder, run: `vercel`
3. Answer the prompts (link to a new project, defaults are fine — no build command needed)
4. Run `vercel --prod` to push it live

**Option B — GitHub + Vercel dashboard (recommended long-term)**
1. Create a new GitHub repo and push this folder to it:
   ```
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. Go to vercel.com → **Add New Project** → import that GitHub repo
3. Framework preset: **Other** (it's static — no build command or output directory needed)
4. Click **Deploy**

Every future `git push` to `main` will auto-deploy. This is the better long-term option
since it gives you version history and lets you keep improving the site over time.

## Next steps you might want
- Swap the placeholder favicon / add an `og:image` for link previews
- Add Google Analytics or Vercel Analytics to see who's visiting
- Buy a custom domain and connect it in the Vercel dashboard (Settings → Domains)
