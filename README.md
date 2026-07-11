# Rohaan Nadeem — Portfolio

Multi-page portfolio built with Next.js (App Router) + TypeScript + Tailwind CSS, exported as a static site for GitHub Pages.

## Stack

- **Next.js 16** (App Router, static export via `output: 'export'`)
- **Tailwind CSS v3** — design tokens in `tailwind.config.ts` (colors, spacing, fonts) match the original design mockups
- **Three.js** — animated hero visual (client-only, dynamically imported)
- **FormSubmit.co** — free, backend-less contact form submission (the same service the previous static site used; see below)
- **server/** — an independent Express + MySQL API, scaffolded for future use once you move off GitHub Pages (see "Upgrading the contact form" below)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form (no configuration needed)

The contact form (`src/components/contact/ContactForm.tsx`) posts directly to [FormSubmit.co](https://formsubmit.co), which forwards submissions as an email to `site.email` (`src/data/site.ts`) — no API key, account, or backend required.

**One-time step:** the first submission ever sent to an email address must be confirmed — FormSubmit emails that address a confirmation link before it will forward anything further. Since `rohaannadeem2@gmail.com` already received and confirmed submissions from the previous static site's form, no action should be needed. If you ever change `site.email` to a new address, submit the form once and confirm the email FormSubmit sends.

## Building for GitHub Pages

```bash
npm run build
```

This produces a fully static site in `out/`. The included `.github/workflows/deploy.yml` builds and publishes this automatically on every push to `main`.

**One-time manual step required:** in the repository's **Settings → Pages**, set **Source** to **"GitHub Actions"**. Until you do that, the workflow will build successfully but GitHub Pages won't serve its output.

## SEO & Google Search Console

The site already ships the technical SEO groundwork: per-page metadata, `sitemap.xml`, `robots.txt`, and a `Person` JSON-LD block (`src/app/layout.tsx`) linking this site to the LinkedIn and GitHub profiles via `sameAs`, plus `worksFor`/`alumniOf`/`knowsAbout` so Google can understand it's the same entity across all three profiles.

None of that gets a new site ranked by itself — Google has to crawl and index it first (typically 1–4 weeks after going live), and ranking on page 1 for a name search also depends on things outside the code. To give it the best shot:

1. **Deploy the site** (flip the Pages source toggle above when ready).
2. **Register the property in [Google Search Console](https://search.google.com/search-console)** using `https://rohaan02.github.io` as a URL-prefix property.
3. **Verify ownership** via the "HTML tag" method: copy the `content` value Search Console gives you into `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`. For local builds, put it in `.env.local`; for the deployed build, add it as a repository **variable** (not secret — it's meant to be public) named `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` under **Settings → Secrets and variables → Actions → Variables**, then redeploy.
4. **Submit the sitemap** — in Search Console, go to Sitemaps and submit `sitemap.xml`.
5. **Request indexing** for the homepage (and `/about`, `/contact`) individually via the URL Inspection tool — this is the fastest way to get an initial crawl instead of waiting for Google to discover it on its own.
6. **Cross-link your profiles** — add `https://rohaan02.github.io` to the "Website" field on your LinkedIn profile and your GitHub profile bio. This is arguably the single highest-leverage thing outside the code: it's what lets Google connect "Rohaan Nadeem the person" across the portfolio, LinkedIn, and GitHub as the same entity, which materially helps all three show up together for a name search.
7. Be patient with the bare-name query specifically — a two-word personal name is inherently more competitive/ambiguous than a longer phrase, so it can take longer to rank even after indexing.

## Adding real employer logos

The Experience timeline currently shows an icon badge per company. To use a real logo instead, drop a PNG at:

```
public/logos/{companySlug}.png
```

using one of these slugs (see `src/data/experience.ts`): `igknightech`, `rislix`, `heights-studio`, `expertscloud`, `vision-plus`, `superior-tech-solutions`. No code changes needed — `src/components/experience/CompanyBadge.tsx` automatically prefers the logo file if it exists at build time.

## Upgrading the contact form to the MySQL backend

GitHub Pages can't run a server, so the contact form currently posts straight to FormSubmit.co from the browser. The `server/` folder contains a standalone Express + MySQL API (`POST /api/contact`) that stores submissions in a database instead — it's independent of the Next.js build and won't affect your GitHub Pages deploy.

To use it once you have a Node-capable host (Railway, Render, a VPS, etc.):

1. `cd server && npm install`
2. Create the database using `server/schema.sql`
3. Copy `server/.env.example` to `server/.env` and fill in your MySQL + CORS details
4. `npm start` (or deploy it to your host)
5. In `src/components/contact/ContactForm.tsx`, change the `fetch` target from the FormSubmit endpoint to your deployed API's `/api/contact` URL

## Project structure

- `src/app/` — routes (App Router)
- `src/components/` — reusable UI, layout, and section components
- `src/data/` — all portfolio content (experience, projects, services, publications, etc.) as typed TypeScript data — edit these files to update site content
- `server/` — standalone future-use Express + MySQL API (see above)
