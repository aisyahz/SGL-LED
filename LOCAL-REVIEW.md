# Local review notes

Implemented within the existing React/TypeScript/Vite architecture. No dependencies added; no commit, push or deployment performed.

## Pricing

- P1.86 indoor: RM4,500/sqm.
- P2.5 indoor: RM3,200/sqm.
- Outdoor P3.91: RM4,500/sqm (replaces the former P4 catalog label/pitch).
- Cards, calculator and quotation selector share PRICING_PRODUCTS in src/constants.ts. Both estimators retain rounded width × height × rate calculations. Historical case-study project totals are unchanged.
- At 6 × 3.375m: P1.86/P3.91 = RM91,125; P2.5 = RM64,800.

## Changed files

- src/constants.ts, src/components/ProductCalculator.tsx, src/components/ConsultationDialog.tsx: pricing, selector state, product prefill, valid fractional dimensions, dialog keyboard handling, and verified company contact links.
- src/company.ts: verified SGL contact information and shared phone, WhatsApp, and map URLs.
- index.html, metadata.json, public/sitemap.xml: requested title/description, social metadata, verified Organization schema, homepage-only canonical sitemap. Existing public/robots.txt was checked and remains valid.
- src/components/HeroSlider.tsx: stable descriptive H1, responsive content-led height, Explore Solutions/Get a Quote actions, reduced motion, pauseable carousel, priority hero image.
- src/App.tsx, src/main.tsx, src/useSectionReveal.ts, src/index.css: section reveals, reduced-motion support, keyboard focus, skip link, mobile spacing, card hover styling.
- src/components/Navbar.tsx, Footer.tsx, LeadCaptureBanner.tsx: tablet navigation breakpoint, accessible menu state/Escape, reduced-motion scrolling, contact links.
- src/components/ProductCatalog.tsx, FaqSection.tsx, IndustriesSection.tsx, LeadCaptureBanner.tsx, TechUSPSection.tsx: natural SEO copy, current product naming, maintenance services, lazy image loading, and removal of outdated office/warranty claims.
- src/components/ui/ProductCard.tsx, SpecTable.tsx, FAQItem.tsx: clearer quote action, wrapping specifications, accessible accordion state with unclipped answers.
- src/videos.ts, src/components/VideoShowcase.tsx: configurable two-video section, validated YouTube/Vimeo URLs, responsive lazy privacy-enhanced embeds; hidden when unconfigured.
- README.md: current price references.
- src/components/ui/CaseStudyCard.tsx: neutral case-study note without unverified warranty claims.
- scripts/verify-site.cjs: repeatable pricing, calculator-expression, video URL, SEO, company contact, schema, and map checks.

## Verified company information

- SGL International LED Sdn Bhd.
- Daniel T, Managing Director.
- Phone/WhatsApp: 010 425 7824.
- Email: daniel6688@sglled.com.
- Address: 26 Jalan Airport City 2, Kota Warisan, 43900 Bandar Baru Salak Tinggi, Selangor, Malaysia.
- Website: https://sglled.com/.

The footer, quotation dialog, telephone/email/WhatsApp links, address-based map, and Organization structured data use these verified details. Company address references to the former Klang and KLCC locations have been removed. The separate Avenue K case-study location opposite the Petronas Twin Towers remains a project-location description, not a company address.

## Pending videos

Both supplied Vimeo player embeds are configured side by side in the showcase and displayed at a 9:16 portrait aspect ratio. Actual playback still depends on Vimeo privacy settings and should be checked in the local browser.

## Verification

Passed using bundled Node 20 (system Node 10 is too old):
- TypeScript/no-emit check (the package's lint command is this same check; no separate ESLint configuration).
- Vite production build.
- scripts/verify-site.cjs: rates and pitches, catalog consistency, both actual estimator expressions across presets, invalid/valid video URL handling, title, schema, sitemap, robots.
- Full React server-render smoke check: no render exception, price content present, unconfigured video section hidden.
- git diff --check.

No pre-existing automated test suite was configured. Interactive browser testing and browser-console inspection were not performed. Server rendering does not verify browser-only effects, focus behavior or visual layout; review those locally before publishing. Existing large image assets remain a performance limitation despite lazy loading.

The existing quotation form simulates submission with a timer and has no delivery backend. It does not send an inquiry; its existing submission behavior was retained. Connect and verify a real delivery service before relying on it for leads.

## Local commands (PowerShell)

```powershell
$env:Path = "$PWD\node20;$env:Path"
npm.cmd run dev
npm.cmd run lint
npm.cmd run build
.\node20\node.exe --preserve-symlinks --preserve-symlinks-main scripts/verify-site.cjs
```

Build output is local in dist/. The build may need ordinary filesystem access to parent-directory metadata when run in a restricted sandbox.
