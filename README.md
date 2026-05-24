# TaxBuddy Website

Marketing site for [TaxBuddy](https://taxbuddy.online) — agentic T1 filing software for Canadian accounting firms.

## Stack

- Next.js 15 (App Router) · React 19 · TypeScript · CSS Modules
- Static export deployed to Azure Static Web Apps

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
```

## Build

```bash
npm run build   # produces out/ — the static site
npm run lint    # ESLint
```

The `out/` folder is what gets deployed. It is gitignored.

## Deployment

Hosted on Azure Static Web Apps (free tier). Routing and security headers are configured in [staticwebapp.config.json](staticwebapp.config.json). CI/CD via GitHub Actions (`.github/workflows/`).

## Design

Brand colors, typography, page plans, and component list are documented in [website-design-plan.md](website-design-plan.md). Developer-focused architecture notes are in [CLAUDE.md](CLAUDE.md).

## License

[MIT](LICENSE)
