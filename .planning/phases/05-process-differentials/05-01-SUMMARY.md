---
phase: 05-process-differentials
plan: 01
subsystem: ui
tags: [html, css, i18n, css-grid, svg, glassmorphism]

# Dependency graph
requires:
  - phase: 04-services
    provides: glassmorphism card tokens (--glass-bg, --glass-border, --glass-blur), btn-cta-hero class, cta-pulse animation
provides:
  - How It Works section with 3 numbered steps (horizontal desktop, vertical mobile timeline)
  - Connector gradient line between steps via CSS ::after pseudo-element
  - 8 new i18n keys per language (PT + EN): how.subtitle, how.step1-3.title, how.step1-3.desc, how.cta
  - WhatsApp CTA button below steps using existing btn-cta-hero/cta-pulse

affects:
  - 05-02 (Differentials section — same phase, same file scope)
  - 07-animations (scroll reveal stagger will target .step-card)

# Tech tracking
tech-stack:
  added: []
  patterns:
    - CSS Grid repeat(3, 1fr) for equal-width horizontal step columns
    - CSS ::after connector line with linear-gradient fade on non-last step cards
    - CSS ::before vertical connector for mobile timeline layout
    - clamp() for fluid step-number font size (48px-56px desktop, 42px mobile)

key-files:
  created: []
  modified:
    - index.html
    - styles.css
    - script.js

key-decisions:
  - "Connector line uses ::after on .step-card:not(:last-child) positioned at top:72px — aligns with icon row"
  - "Mobile (<768px) hides ::after horizontal connector, adds ::before vertical gradient connector for timeline effect"
  - "Step number uses var(--font-mono) per PROC-03 requirement — JetBrains Mono at 48-56px clamp"
  - "CTA reuses existing btn-cta-hero class and cta-pulse animation — no new keyframes added"
  - "Step icon container mirrors service-card icon style (cyan tinted bg + border) for visual consistency"

patterns-established:
  - "Step cards: flex column, center-aligned, no glassmorphism card background — minimal clean style"
  - "Large monospace step numbers in --color-cyan at 0.9 opacity for depth"

requirements-completed: [PROC-01, PROC-02, PROC-03, PROC-04, PROC-05, PROC-06]

# Metrics
duration: 10min
completed: 2026-04-01
---

# Phase 05 Plan 01: How It Works Summary

**3-step horizontal process section with CSS Grid, cyan ::after connector line, monospace step numbers, vertical mobile timeline, and 16 new i18n keys (PT+EN)**

## Performance

- **Duration:** ~10 min
- **Started:** 2026-04-01T00:00:00Z
- **Completed:** 2026-04-01T00:10:00Z
- **Tasks:** 2
- **Files modified:** 3

## Accomplishments

- Built complete #how-it-works section replacing the stub h2 placeholder with 3 step cards (HTML + inline SVGs)
- Implemented 3-column CSS Grid horizontal layout on desktop with a horizontal gradient cyan connector line between steps via ::after pseudo-element
- Mobile (<768px) switches to single-column vertical timeline with ::before vertical gradient connectors replacing ::after
- Added 8 PT keys and 8 EN keys to the translations object — all step titles, descriptions, subtitle, and CTA
- CTA "Comecar agora — e 100% gratuito" reuses btn-cta-hero class, inheriting the cta-pulse glow animation from the hero section

## Task Commits

Each task was committed atomically:

1. **Task 1: How It Works HTML + i18n keys** - `d1199af` (feat)
2. **Task 2: How It Works CSS** - `13b96fa` (feat)

## Files Created/Modified

- `index.html` — Replaced stub section with full 3-step layout: how-header, how-it-works-steps (3x step-card), how-cta
- `styles.css` — Appended 212 lines: section wrapper, header, 3-col grid, connector ::after, step-number/icon/title/desc, CTA, tablet + mobile responsive
- `script.js` — Added 8 PT keys and 8 EN keys after existing how.title stubs in both language blocks

## Decisions Made

- Connector line at `top: 72px` places it at the icon row level (step-number ~56px + 16px margin = 72px from card top)
- No glassmorphism card background on step cards — cleaner, more minimal look that contrasts with the service cards section above
- Reused btn-cta-hero class for the section CTA — consistent glow + pulse animation, no duplication

## Deviations from Plan

None — plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None — no external service configuration required.

## Next Phase Readiness

- How It Works section complete; #differentials placeholder is the next target (05-02-PLAN.md)
- .step-card selector is available for scroll-reveal stagger in Phase 7

---
*Phase: 05-process-differentials*
*Completed: 2026-04-01*
