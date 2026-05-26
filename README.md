# Portfolio

Personal portfolio site built with Next.js in [`bhavya-portfolio/`](./bhavya-portfolio/).

## Local development

```bash
cd bhavya-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

### GitHub Pages

Pushes to `main` trigger the GitHub Actions workflow (`.github/workflows/deploy-github-pages.yml`), which builds a static export and publishes to GitHub Pages (`www.bhavyadixit.tech`).

### Vercel

The app lives in `bhavya-portfolio/` (Next.js). If Vercel still runs `vite build`, the project is pointed at the old Vite setup.

In [Vercel](https://vercel.com) → your project → **Settings**:

1. **General → Root Directory** → set to `bhavya-portfolio` (required).
2. **Build & Development** → **Framework Preset** → **Next.js**.
3. **Build Command** → leave empty (use default) or `npm run build`. Remove any `vite build` override.
4. **Install Command** → leave empty or `npm ci`.

Redeploy after saving. `bhavya-portfolio/vercel.json` pins Next.js build settings once the root directory is correct.
