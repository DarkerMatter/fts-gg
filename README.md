# fts.gg

Marketing site for **FTS LLC** — precision infrastructure, bespoke e-commerce engineering, and the CTRL hosting platform. Built as a static Next.js app for deployment on **Cloudflare Pages**.

## Stack

- [Next.js](https://nextjs.org/) (App Router) with **`output: 'export'`** (static HTML in `out/`)
- [Tailwind CSS](https://tailwindcss.com/) v4
- [shadcn/ui](https://ui.shadcn.com/) (Radix primitives + copy-paste components)
- TypeScript, ESLint

## Prerequisites

- **Node.js** 20.x or newer (see `engines` in [`package.json`](package.json))
- npm (ships with Node)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Edit copy in [`src/content/site.ts`](src/content/site.ts) and sections under [`src/components/`](src/components/).

## Production build

```bash
npm run build
```

Static files are written to **`out/`** (not `.next/`). Open `out/index.html` in a browser or serve the folder with any static file server to smoke-test.

## Deploy to Cloudflare Pages

### Option A — Git integration (recommended)

1. In the [Cloudflare dashboard](https://dash.cloudflare.com/), open **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Select this repository and the production branch (e.g. `main`).
3. Configure the build:

   | Setting | Value |
   |--------|--------|
   | **Framework preset** | None, or Next.js if offered (we use static export, not Node SSR) |
   | **Build command** | `npm run build` |
   | **Build output directory** | `out` |

4. Save and deploy. Future pushes to the connected branch trigger new builds.

### Option B — Wrangler CLI

1. Install the [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) (or use `npx` without a global install).
2. Log in: `npx wrangler login`
3. From the project root, after a successful `npm run build`:

   ```bash
   npx wrangler pages deploy out --project-name YOUR_PROJECT_NAME
   ```

   Add `--branch main` (or your branch name) if you use [branch previews](https://developers.cloudflare.com/pages/platform/branch-deployment/).

### Custom domain (fts.gg)

1. In your Pages project: **Custom domains** → **Set up a domain** → enter `fts.gg` (and `www` if desired).
2. Follow Cloudflare’s DNS instructions. Typically you add a **CNAME** from `fts.gg` (or `www`) to your `*.pages.dev` hostname, or use a Cloudflare-managed zone with the records they suggest.
3. HTTPS certificates are issued automatically once DNS validates.

## Project layout

| Path | Purpose |
|------|---------|
| [`src/app/`](src/app/) | App Router entry, layout metadata, `robots.ts` / `sitemap.ts` |
| [`src/content/site.ts`](src/content/site.ts) | Site copy and contact constants |
| [`src/components/marketing/`](src/components/marketing/) | Page sections |
| [`next.config.ts`](next.config.ts) | Static export + image settings |

## License

[LICENSE](License)
