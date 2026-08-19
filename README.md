# Unvers D. Cleaning — Landing Page

Next.js 14 + TypeScript + Tailwind CSS landing page for Unvers D. Cleaning
(Orem, UT). Built from the business's real Facebook page content.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Before you launch — please check these

1. **Contact form email** — `components/Contact.tsx` sends quote requests to
   a placeholder address (`unversdcleaning@gmail.com`). Replace it with
   Rosa's real inbox (search `TODO` in that file).
2. **Business name** — the Facebook page name and cover photo don't fully
   match ("Unvers D. Cleaning" vs "Univers D."). The site currently uses
   **"Unvers D. Cleaning"** everywhere. Do a find-and-replace if that's
   wrong.
3. **Photos** — the hero, before/after slider and gallery currently use
   licensed stock photography (Unsplash) chosen to match your brand colors
   and "warm & trustworthy" direction, since your own Facebook photos
   couldn't be pulled directly into the code. Swapping in real photos of
   Rosa's actual work will make it even stronger — drop new files into
   `public/images/` and update the `src` in `components/Hero.tsx`,
   `components/BeforeAfter.tsx` and `components/Gallery.tsx`.
4. **Phone number** — (385) 888-0341 is used throughout (`tel:` and `sms:`
   links). Update every `+13858880341` occurrence if it changes.

## Deploy to Vercel (free)

**Option A — GitHub (recommended, no terminal needed after this):**

1. Create a new repo on [github.com/new](https://github.com/new)
2. In this project folder:
   ```bash
   git init
   git add .
   git commit -m "Unvers D. Cleaning landing page"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
3. Go to [vercel.com/new](https://vercel.com/new), click **Import** next to
   your repo, leave all settings as default (Vercel auto-detects Next.js),
   click **Deploy**.
4. In ~1 minute you'll get a live URL like `your-repo.vercel.app`.
5. To use your own domain (e.g. `unversdcleaningrosy.com`, which is free),
   go to the project's **Settings → Domains** in Vercel and add it.

**Option B — Vercel CLI (fastest if you have Node installed):**

```bash
npm i -g vercel
vercel login
vercel        # deploys a preview
vercel --prod # deploys to production
```

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (custom brand tokens in `tailwind.config.ts`)
- Framer Motion (scroll reveals, hero entrance)
- lucide-react (icons)
- Fonts: Fraunces (display), Manrope (body), Caveat (handwritten note)
