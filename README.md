# tavethiya.github.io

Personal portfolio of Mahesh Tavethiya. Live at https://tavethiya.github.io

Built with Next.js (static export), Tailwind CSS v4, Framer Motion and next-themes. Deployed to GitHub Pages by GitHub Actions on every push to `main`.

## Editing content

Everything shown on the site lives in [`lib/site.ts`](lib/site.ts): name, bio, skills, experience, links. Entries marked `TODO` are placeholders.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Static output lands in `out/`.

## Pages

- `/` Home
- `/about/` About
- `/experience/` Experience
- `/contact/` Contact

Plus `sitemap.xml`, `robots.txt` and a generated Open Graph image.
