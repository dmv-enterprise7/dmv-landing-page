---
phase: 10-processo-4-passos-solucoes
plan: 01
subsystem: process-section
tags: [i18n, html, css, stepper, consultative-positioning]
requires:
  - Phase 05 process section baseline (.how-it-works-steps grid + connector selectors)
provides:
  - "4-step consultative stepper with new title/subtitle/CTA copy"
  - "how.step4.title / how.step4.desc i18n keys (PT + EN)"
  - "CSS grid-template-columns: repeat(4, 1fr) for desktop stepper"
affects:
  - index.html (#how-it-works section)
  - script.js (PT + EN dictionaries, how.* keys)
  - styles.css (.how-it-works-steps grid + tablet breakpoint)
tech-stack:
  added: []
  patterns:
    - ":not(:last-child)::after connector auto-adapts from N-1 connectors (3 for 4 cards)"
key-files:
  created: []
  modified:
    - index.html
    - script.js
    - styles.css
decisions:
  - "Step 2 icon: map/pennant polygon with vertical stroke lines (evokes terrain mapping)"
  - "Step 4 icon: trending-up polyline with directional arrow (evokes monitoring/growth)"
  - "Step 3 retained existing rect+plus icon (reassigned semantically to 'construction/build')"
  - "Tablet padding tightened from 20px to 14px; connector width recalculated to fit 4 narrower columns"
metrics:
  duration: ~5 min
  tasks_completed: 3 auto (+ 1 checkpoint pending human verification)
  files_modified: 3
  completed: 2026-04-14
requirements:
  - PROC-V2-01
  - PROC-V2-02
  - PROC-V2-03
  - PROC-V2-04
  - PROC-V2-05
---

# Phase 10 Plan 01: Process Section 4-Step Expansion Summary

Expanded the process stepper from 3 to 4 consultative steps (Raio-X → Mapa de Oportunidades → Construção Sob Medida → Acompanhamento e Otimização), rewrote section title/subtitle/CTA, updated PT + EN i18n dictionaries, and adjusted CSS grid to 4 columns with tighter tablet spacing.

## What Was Built

### index.html (`#how-it-works` section)
- Replaced 3 step cards with 4 step cards (numbers 01-04), each with consultative copy
- New section title: "Consultoria primeiro. Tecnologia depois."
- New subtitle: "Nosso processo existe para garantir que cada solução resolve o problema certo."
- New closing CTA: "Comece pelo diagnóstico — é gratuito" → `https://wa.me/5521973495805`
- Step 2 new icon: map/compass polygon SVG (stroke-linecap round, viewBox 32x32, consistent style)
- Step 4 new icon: trending-up polyline SVG with directional arrow

### script.js (i18n dictionaries)
- Updated PT `how.title`, `how.subtitle`, `how.step1-3.title/desc`, `how.cta`
- Added PT `how.step4.title` / `how.step4.desc`
- Updated EN `how.title`, `how.subtitle`, `how.step1-3.title/desc`, `how.cta`
- Added EN `how.step4.title` / `how.step4.desc`
- Preserved all non-`how.*` keys (services, diff, about, faq, cta, footer) untouched
- Used `\u2014` escapes consistently with surrounding dictionary style for em-dashes

### styles.css
- Line ~1445: comment updated from `(PROC-01)` → `(PROC-V2-01)`
- Line ~1449: `grid-template-columns: repeat(3, 1fr)` → `repeat(4, 1fr)`
- Tablet (`@media max-width: 1024px`): `.step-card { padding: 0 14px; }` (was 20px), connector `right: -8px; width: calc(100% - 28px)` (was -12px / 36px)
- Mobile (`@media max-width: 768px`): unchanged — `grid-template-columns: 1fr` already stacks vertically; `:not(:last-child)::before` vertical connector auto-covers 3 connectors between 4 cards
- Connector `::after` `:not(:last-child)` selector left intact — auto-adapts to produce 3 connectors for 4 cards

## Commits

| Task | Commit | Files |
| ---- | ------ | ----- |
| Task 1: HTML rewrite (4 step cards + new copy) | df5890f | index.html |
| Task 2: i18n keys update (PT + EN, 4 steps) | d5f56fd | script.js |
| Task 3: CSS grid 3→4 columns + tablet spacing | aa630d3 | styles.css |

## Deviations from Plan

None - plan executed exactly as written. All acceptance grep patterns passed on first run.

## Requirements Satisfied

- PROC-V2-01: 4-column desktop stepper with repeat(4, 1fr)
- PROC-V2-02: Process section title "Consultoria primeiro. Tecnologia depois." (PT + EN)
- PROC-V2-03: Closing CTA copy + WhatsApp link
- PROC-V2-04: Full PT/EN i18n coverage for all 4 steps + header + CTA
- PROC-V2-05: Mobile vertical stacking preserved via existing `1fr` breakpoint and `::before` connector

## Known Stubs

None.

## Checkpoint Status

**Task 4 (checkpoint:human-verify)** — Pending human validation at phase end. Verification steps:
1. Desktop (≥1025px): 4 cards in one row with 3 cyan connector lines, no overflow
2. Tablet (768-1024px): 4 cards in one row with tighter spacing
3. Mobile (≤768px): vertical stack with short vertical connectors, no horizontal scroll
4. PT/EN toggle: all titles, descriptions, subtitle, CTA switch
5. CTA opens https://wa.me/5521973495805 in new tab
6. Solutions section (6 cards) visually unchanged (preservation)

## Self-Check: PASSED

- index.html: 4 `.step-card` occurrences verified (grep -c = 4)
- script.js: `'how.step4.title'` present in PT + EN (grep -c = 2)
- styles.css: `grid-template-columns: repeat(4, 1fr);` verified, tablet `padding: 0 14px;` verified
- All 3 task commits present: df5890f, d5f56fd, aa630d3
