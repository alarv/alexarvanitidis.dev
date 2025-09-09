# Repository Guidelines

## Project Structure & Module Organization
- `app/` — Next.js App Router pages and API routes (e.g., `app/api/claps/route.ts`). Blog posts live at `app/blog/<slug>/page.mdx` with optional `opengraph-image.*`. Shared layout in `app/layout.tsx`, global styles in `app/globals.css`.
- `components/` — Reusable UI in `components/ui` (e.g., `components/ui/button.tsx`). Page‑scoped pieces may live in `app/components`.
- `lib/` — Small utilities and constants (e.g., `lib/utils.ts` provides `cn()` for Tailwind classes).
- `hooks/` — Custom React hooks.
- `public/` — Static assets served at the site root.
- `mdx-components.tsx` — MDX component mapping used by blog pages.

## Build, Test, and Development Commands
- `npm run dev` — Start local dev server at `http://localhost:3000`.
- `npm run build` — Production build.
- `npm run start` — Run the built app.
- `npm run lint` — ESLint for `.ts/.tsx/``.mdx`.
- Type check (on demand): `npx tsc --noEmit`.

## Coding Style & Naming Conventions
- Stack: Next.js 15, React 19, TypeScript, Tailwind CSS v4, MDX.
- Prettier: 2 spaces, single quotes, no semicolons, trailing commas. Format with `npx prettier --write .`.
- ESLint: `next/core-web-vitals`, `next/typescript`, `plugin:prettier/recommended`; MDX linting enabled.
- File names: PascalCase for React components (`BlogFeed.tsx`), kebab-case for routes/MDX slugs (`app/blog/my-post/page.mdx`).
- Imports: use path alias `@/*` (e.g., `import { cn } from '@/lib/utils'`).

## Content Style (Blog Posts)
- Titles and headings use sentence case: capitalize the first letter only; the rest lowercase (e.g., `The death of boring docs`).
- Series naming: use `5 worst bugs I've seen on production #<n>: <topic>` for this series (capitalize the I in I've).
- Exception: keep domain acronyms/terms uppercase where standard (e.g., `N+1`, `OTP`).
- For real incidents, include "in production" in the title to distinguish from dev-only issues.
- Keep tone simple and direct; prefer short paragraphs; avoid marketing or overly flashy language.

## Testing Guidelines
- No unit test framework is configured. Include manual verification steps and screenshots in PRs (affected routes, states, breakpoints). If adding complex logic, consider adding lightweight Jest/Vitest in a separate PR.

## Commit & Pull Request Guidelines
- Commits follow Conventional Commits seen in history: `feat:`, `fix:`, `chore:`.
- PRs must include: concise description, linked issues, screenshots for UI changes, reproduction/verification steps, and any env var notes.
- Ensure `npm run lint` and `npm run build` pass before requesting review.

## Security & Configuration Tips
- Configure Upstash Redis for claps API via `.env.local`:
  - `UPSTASH_REDIS_REST_URL=...`
  - `UPSTASH_REDIS_REST_TOKEN=...`
- Do not commit secrets. Document any new env keys in `README.md`.
