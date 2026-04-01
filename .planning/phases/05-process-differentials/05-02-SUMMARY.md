---
phase: 05-process-differentials
plan: 02
subsystem: ui
tags: [html, css, i18n, css-grid, svg, glassmorphism]

# Dependency graph
requires:
  - phase: 04-pain-points-services
    provides: glassmorphism card tokens (glass-bg, glass-border, glass-blur), service-card hover pattern
  - phase: 05-process-differentials-01
    provides: how-it-works CSS already appended to styles.css (insertion point confirmed)

provides:
  - Differentials section with 4 cards in 2x2 CSS Grid (desktop), single-column stack (mobile)
  - Glassmorphism diff-card matching service-card visual pattern (same tokens, same hover)
  - 48px icon container (diff-icon) aligned left with inline SVG icons per card
  - 9 PT keys and 9 EN keys: diff.subtitle + diff.item1-4.title + diff.item1-4.desc

affects:
  - 07-animations (scroll reveal stagger will target .diff-card)

# Tech tracking
tech-stack:
  added: []
  patterns:
    - CSS Grid repeat(2, 1fr) for 2x2 differential card layout
    - diff-card flexbox: align-items flex-start + gap 20px for icon-left layout
    - Glassmorphism tokens reused verbatim from service-card (glass-bg, glass-border, backdrop-filter)

key-files:
  created: []
  modified:
    - index.html
    - styles.css
    - script.js

key-decisions:
  - "diff-grid max-width: 900px (wider than pain-points 800px) to comfortably accommodate icon-left flex layout"
  - "diff-card uses flex row (icon left) not flex column (icon top) — differentiates from service-card visually while keeping same tokens"
  - "diff-icon has subtle border (rgba(0,200,255,0.12)) in addition to bg tint — adds definition to icon container"
  - "No animations added — deferred to Phase 7 (scroll reveal global pass)"

patterns-established:
  - "Icon-left card layout: diff-card flex + diff-icon flex-shrink:0 48px + diff-body flex:1"
  - "Glassmorphism 2x2 grid: repeat(2,1fr) collapses to 1fr at 768px breakpoint"

requirements-completed: [DIFF-01, DIFF-02, DIFF-03]

# Metrics
duration: 8min
completed: 2026-04-01
---

# Phase 05 Plan 02: Differentials Section Summary

**"Por que a DMV?" section — 4 glassmorphism cards in 2x2 CSS Grid, inline SVG icons left-aligned, bilingual with 18 new i18n keys (9 PT + 9 EN)**

## Performance

- **Duration:** ~8 min
- **Started:** 2026-04-01T00:10:00Z
- **Completed:** 2026-04-01T00:18:00Z
- **Tasks:** 2
- **Files modified:** 3

## Accomplishments

- Built complete #differentials section replacing the stub h2 with diff-header + diff-grid + 4 diff-cards
- Each card uses icon-left flex layout: 48px diff-icon (box, person, chart, clock SVGs) + diff-body (title + desc)
- CSS matches service-card glassmorphism exactly: glass-bg, glass-border, backdrop-filter blur, border-radius 20px, identical hover effect (cyan border + glow + translateY -4px)
- Added 9 PT keys and 9 EN keys to both language blocks in script.js — subtitle and all 4 differential title/desc pairs

## Task Commits

Each task was committed atomically:

1. **Task 1: Differentials HTML + i18n keys** - `b12452f` (feat)
2. **Task 2: Differentials CSS** - `714ccce` (feat)

## Files Created/Modified

- `index.html` — Replaced stub section: diff-header (h2 + p.diff-subtitle), diff-grid with 4 diff-card elements, each with inline SVG icon and diff-body
- `styles.css` — Appended 159 lines: section wrapper, header, 2x2 grid, glassmorphism card, icon container, text styles, hover states, tablet + mobile + 375px responsive
- `script.js` — Added 9 PT keys and 9 EN keys after existing diff.title stubs in both language blocks

## Decisions Made

- `diff-grid max-width: 900px` (vs pain-points 800px) — the icon-left layout needs more horizontal space per card; 900px avoids text wrapping at tablet widths
- `diff-card` uses `flex` row direction (icon on left) vs service-card's `flex-column` (icon on top) — deliberately different layout pattern for visual variety while reusing same glassmorphism tokens
- `diff-icon` gets a subtle `border: 1px solid rgba(0,200,255,0.12)` in addition to the bg tint — gives the 48px container more definition when adjacent to text

## Deviations from Plan

None — plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None — no external service configuration required.

## Next Phase Readiness

- #differentials section complete; Phase 5 (Process + Differentials) is fully done
- .diff-card selector available for scroll-reveal stagger in Phase 7
- Phase 6 (About + FAQ) is the next target

---
*Phase: 05-process-differentials*
*Completed: 2026-04-01*
