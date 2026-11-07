<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Godfrey Okoye University Teaching Hospital (GOUNITH)

## Overview
Official web portal for **Godfrey Okoye University Teaching Hospital (GOUNITH — Ntasi Obi Specialist Hospital)** in Trans-Ekulu, Enugu, Nigeria. The portal is engineered following the institutional design architecture of **The Johns Hopkins Hospital**, adhering to healthcare accessibility standards, high-trust typography, and clear emergency navigation.

## Tech Stack
- **Framework:** Next.js 16 (App Router, React 19, TypeScript strict)
- **UI Components:** shadcn/ui (Base UI primitives, Tailwind CSS v4, `cn()` utility)
- **Icons:** Lucide React
- **Styling:** Tailwind CSS v4 with heritage healthcare color tokens
- **Map Integration:** Google Maps interactive embed & turn-by-turn directions

## Commands
- `npm run dev` — Start development server
- `npm run build` — Production build
- `npm run lint` — ESLint verification
- `npm run typecheck` — TypeScript verification
- `npm run check` — Run lint + typecheck + build pipeline

## Routes & Architecture
- `/` — Godfrey Okoye University Teaching Hospital (GOUNITH — Ntasi Obi)
- `/the-johns-hopkins-hospital` — Reference architecture clone (The Johns Hopkins Hospital)

## Code Style & Standards
- TypeScript strict mode, no `any`
- Named exports, PascalCase components, camelCase utilities
- Semantic HTML landmarks (`<header>`, `<main>`, `<footer>`, `<dialog>`)
- High accessibility (WCAG AA/AAA compliance, keyboard navigation, clear skip-links)
- 2-space indentation
- Responsive mobile-first design
