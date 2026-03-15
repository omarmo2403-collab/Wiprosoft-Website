# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start Next.js dev server
- `npm run build` — Production build
- `npm run lint` — Run ESLint (flat config, `eslint.config.mjs`)

There are no tests configured in this project.

## Architecture

This is the **Wiprosoft** corporate website — a UK-based IT & Web Marketing Agency. Built with **Next.js 16** (App Router), **React 19**, **Tailwind CSS v4**, **Framer Motion**, and **TypeScript** (strict mode).

### Routing & Pages

All pages use the Next.js App Router (`src/app/`). Routes: `/`, `/about`, `/services`, `/portfolio`, `/blog`, `/blog/[slug]`, `/contact`. The root layout (`src/app/layout.tsx`) wraps every page with `Navbar` and `Footer`.

### Data Layer

All content is static — defined as TypeScript arrays in `src/data/`:
- `site.ts` — Site config, contact info, nav links, social URLs (single `siteConfig` export used across layout and components)
- `services.ts` — Service definitions with sub-services and Lucide icons
- `portfolio.ts` — Project entries with category, tags, and image paths
- `blog.ts` — Blog posts with full markdown-like `content` strings (no CMS, no MDX)
- `faq.ts`, `testimonials.ts` — FAQ and testimonial entries

### Component Organization

- `src/components/layout/` — Navbar, Footer, MobileMenu (site-wide shell)
- `src/components/sections/home/` — Homepage section components (Hero, Metrics, ServicesOverview, FeaturedWork, Testimonials, FAQ, LatestBlog, CTABanner)
- `src/components/sections/portfolio/` — PortfolioContent (filterable grid)
- `src/components/sections/contact/` — ContactContent
- `src/components/ui/` — Reusable UI primitives (Button, Card, Badge, Accordion, PageHeader, SectionHeader, SectionWrapper, AnimatedSection, MeshGradient)

### Key Patterns

- **Path alias:** `@/*` maps to `./src/*`
- **`cn()` utility** (`src/lib/utils.ts`): Uses `clsx` for conditional class merging (no tailwind-merge)
- **Animations:** Framer Motion variants defined in `src/lib/animations.ts`, consumed via `AnimatedSection` wrapper
- **Brand colors:** Primary teal `#03A3B2`, navy `#172F56` — used directly in data files as `color` properties
- **Images:** Stored in `public/images/` organized by section (portfolio, blog, about). Next.js image optimization configured for AVIF and WebP formats
- **No external APIs or database** — everything is statically rendered from the data files
