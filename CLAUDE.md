# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository layout

Monorepo for **Under CTRL**, a freemium SaaS for managing recurring subscriptions (full product spec, PT/EN, in `readme.md`).

- `frontend/` — Next.js 16 App Router app. The only active codebase today; run all commands from here.
- `backend/` — Planned Node.js + Express REST API. **Not started** (placeholder file only). Per the spec it will use MongoDB, Groq (Llama Vision) for receipt OCR, Google OAuth 2.0 + Magic Link auth, and Mercado Pago.

## Commands

```bash
cd frontend
npm install        # install dependencies
npm run dev        # dev server (next dev)
npm run build      # production build (next build)
npm run start      # serve the production build
npm run lint       # eslint flat config (next core-web-vitals + typescript)
```

No test runner is configured — `lint` and `build` are the only automated checks.

## Critical: this is not the Next.js you know

`frontend/AGENTS.md` (imported by `frontend/CLAUDE.md`) warns that this Next.js (16.2.9) and React (19.2.4) ship breaking changes versus older conventions / training data. **Read the relevant guide in `frontend/node_modules/next/dist/docs/` before writing or changing Next.js code**, and heed deprecation notices.

## Frontend architecture

App Router under `frontend/src/app/`:

- `app/layout.tsx` — root layout: `<html>`/`<body>`, Archivo font via `next/font`, global metadata (PWA manifest + apple-web-app), and the single global stylesheet import `@/styles/globals.css`.
- `app/(SSR)/` — route group whose `layout.tsx` wraps pages with the shared `<Navbar />` and `<Footer />` chrome; `page.tsx` is the landing page.
- Path alias `@/*` → `src/*` (tsconfig) — prefer it over relative imports.

Components:
- `src/components/` — composed sections (`Navbar`, `Footer`).
- `src/components/ui/` — reusable primitives. `Button` is polymorphic: pass `href` to render a `next/link`, omit it for a `<button>`; `Navlink` and `Brand` follow the same token-based styling.

### The design system lives in CSS — read this before styling anything

`src/styles/globals.css` defines the design system in two layers:

1. A raw palette + type scale as `:root` custom properties (`--green-500`, `--grey-700`, `--white-50`, `--h1---bold`, …).
2. A Tailwind v4 `@theme inline` block mapping **semantic tokens** onto that palette: colors (`--color-primary`, `--color-components`, `--color-text`, `--color-on-primary`…), text sizes (`--text-regular-body`, `--text-mobile`…), spacing (`--spacing-xs … --spacing-xxl`), gutters (`--spacing-gutter-mobile`…), and the navbar height (`--spacing-navbar-desktop`).

Components style themselves **only with the generated semantic utilities** — e.g. `bg-components`, `text-primary`, `px-gutter-mobile`, `gap-xs`, `min-h-navbar-desktop`. To add or change styling, extend the tokens in `globals.css` rather than hardcoding colors/sizes or reaching for raw Tailwind palette classes. (Border widths are not part of the spacing scale — use `border-[6px]`, not `border-6`.) Layout is mobile-first: the navbar is a bottom bar on mobile and a top bar from `md:` up.

## Product constraints worth knowing (from `readme.md`)

- **LGPD / privacy**: receipt images are processed in RAM only and never persisted; the AI only pre-fills forms — every final decision is the user's (human-in-the-loop).
- A daily cron fires renewal alerts at 7 days / 3 days / 24h, via email and/or Telegram, grouped per window.
- Single **lifetime** (one-time payment) plan; the upsell is surfaced contextually, never on entry.