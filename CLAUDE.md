# TaxBuddy Website — Developer Guide

## Project overview

Marketing website for TaxBuddy, agentic T1 filing software for Canadian accounting firms. Built with Next.js 15 (App Router), statically exported, and deployed to Azure Static Web Apps. This is a pure marketing site — no backend, no auth, no dynamic routes.

## Commands

```bash
npm run dev     # local dev server at localhost:3000
npm run build   # static export → out/ (what gets deployed)
npm run lint    # ESLint via next lint
```

## Tech stack

- **Framework**: Next.js 15, App Router, React 19
- **Language**: TypeScript (strict mode)
- **Styling**: CSS Modules — one `.module.css` per component, no Tailwind, no Sass
- **Icons**: `@tabler/icons-react`
- **Fonts**: Instrument Serif + Instrument Sans via Google Fonts CDN (loaded in `app/layout.tsx`)
- **Output**: `output: 'export'` in `next.config.ts` — fully static HTML

## Architecture

```
app/                          # App Router pages
  layout.tsx                  # root layout — fonts, global metadata
  globals.css                 # design tokens as CSS custom properties
  page.tsx                    # homepage (7 sections)
  about/page.tsx
  blog/page.tsx               # placeholder, hidden from nav
  contact/page.tsx

components/                   # one folder per component
  <ComponentName>/
    index.tsx                 # component logic
    <ComponentName>.module.css
```

**Server components by default.** Only `NavBar` uses `'use client'` (mobile menu state). Keep new components as server components unless interactivity requires otherwise.

**No server-side features.** This is a static export. No API routes, no `getServerSideProps`, no dynamic segments with runtime data.

**Path alias**: `@/*` resolves to the repo root (e.g. `@/components/Button`).

## Design system

Design tokens are defined as CSS custom properties in `app/globals.css`. Key values:

| Role | Value |
|------|-------|
| Primary (buttons, links) | `#6A5ACD` |
| Primary hover | `#5244A8` |
| Accent amber (dark bg sections only) | `#C8962E` |
| Heading text | `#141220` |
| Body text | `#4A4660` |
| Page tint bg | `#F6F5FB` |
| Card/section bg | `#ECEAF7` |

**Typography**: Instrument Serif for headlines (weight 400 only), Instrument Sans for body (weights 400 and 500 only — never 700). Full token table in [website-design-plan.md](website-design-plan.md).

## Current pages

| Route | Status | Notes |
|-------|--------|-------|
| `/` | Complete | 7 sections: hero, workflow, features, quote, trust grid, CTA, footer |
| `/about` | Complete | Founder story, mission, vision, values |
| `/contact` | Complete | Demo booking form + direct email |
| `/blog` | Placeholder | Infrastructure ready; hidden from nav until posts exist |
| `/product` | Not started | Phase 2 — detailed workflow + security section |

## Don'ts

- Don't add Tailwind, Sass, or styled-components — CSS Modules is the convention
- Don't switch to Pages Router
- Don't add server-side features (API routes, SSR) — static export only
- Don't use inline styles — use CSS Modules
- Don't add weights other than 400 and 500 to Instrument fonts
