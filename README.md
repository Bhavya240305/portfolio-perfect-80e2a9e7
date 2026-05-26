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

1. **Build & Development** → clear **Build Command** (remove `vite build`). Leave install/build empty to use `vercel.json`.
2. **(Recommended)** **General → Root Directory** → `bhavya-portfolio` — then Vercel uses Next.js defaults from that folder.
3. If Root Directory stays at repo root, the root `vercel.json` runs `npm run build --prefix bhavya-portfolio` instead of Vite.

Redeploy after saving.
