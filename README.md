# Harry Ju Personal Website

Personal website built with Next.js App Router and exported as a static GitHub Pages site.

## Commands

```powershell
npm install
npm run dev
```

Open `http://localhost:3000`.

Run the production export tests before deploying:

```powershell
npm run test:e2e
```

## Structure

- `app/page.tsx` - page content
- `app/globals.css` - site styles
- `public/assets/profile.png` - profile image
- `public/assets/English_CV.pdf` - resume PDF
- `.github/workflows/deploy.yml` - builds and deploys `out/` to GitHub Pages
