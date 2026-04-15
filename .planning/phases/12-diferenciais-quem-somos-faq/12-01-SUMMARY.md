---
phase: 12-diferenciais-quem-somos-faq
plan: 01
subsystem: content-i18n
tags: [copy, i18n, differentials, consultative-positioning]
requires: []
provides:
  - Consultative differentials section (PT + EN)
  - Updated diff.* i18n entries
affects:
  - index.html (differentials section)
  - script.js (PT + EN translations)
tech-stack:
  added: []
  patterns:
    - Existing data-i18n attribute + translations[lang] lookup
    - Glassmorphism .diff-card preserved verbatim
key-files:
  created: []
  modified:
    - index.html
    - script.js
key-decisions:
  - Preserve existing diff.* key names (no rename) to avoid HTML refactor
  - Keep all 4 SVG icons and card structure unchanged — text-only update
  - Use literal em-dash '—' consistent with rest of the file
requirements-completed:
  - DIFF-V2-01
  - DIFF-V2-02
duration: 1 min
completed: 2026-04-15
---

# Phase 12 Plan 01: Diferenciais Consultative Copy Summary

Rewrote Diferenciais section (title, subtitle, 4 cards) in PT and EN with consultative positioning — diagnosis-first, process vision, technical honesty, long-term partnership — via existing `diff.*` i18n keys with zero structural/CSS changes.

## Execution Metrics

- **Start:** 2026-04-15T04:05:06Z
- **End:** 2026-04-15T04:06:09Z
- **Duration:** 1 min
- **Tasks:** 2/2
- **Files modified:** 2

## Tasks Completed

| Task | Name                                                 | Commit    | Files         |
| ---- | ---------------------------------------------------- | --------- | ------------- |
| 1    | Rewrite differentials HTML copy in index.html        | `1478ce4` | index.html    |
| 2    | Update diff.* i18n entries (PT + EN) in script.js    | `eeb583d` | script.js     |

## What Changed

### index.html (differentials section, ~lines 386–452)
- `diff.subtitle` fallback → "Não somos mais uma agência. Somos parceiros de diagnóstico e resultado."
- Card 1 title/desc → "Diagnóstico antes de tudo" / escutar antes de propor
- Card 2 title/desc → "Visão de processo, não de ferramenta" / IA como meio, não fim
- Card 3 title/desc → "Honestidade técnica" / preferimos perder venda
- Card 4 title/desc → "Parceria de longo prazo" / processo contínuo
- SVG icons, classes, grid structure — UNCHANGED

### script.js (translations object)
- PT `diff.*` entries (~lines 92–101) — rewritten to new consultative copy
- EN `diff.*` entries (~lines 220–229) — matching translations
  - "Why DMV?" / "diagnosis and results partners"
  - Diagnosis before anything / Process vision / Technical honesty / Long-term partnership

## Verification

Task 1 verify:
```
node -e "...need=['Parceria de longo prazo', 'Diagnóstico antes de tudo', 'Visão de processo, não de ferramenta', 'Honestidade técnica', 'parceiros de diagnóstico e resultado']..." → OK
```

Task 2 verify:
```
node -e "...need + no '100% Personalizado' + no 'Funciona 24 horas'..." → OK
```

Success criteria met: DIFF-V2-01 (title + subtitle) and DIFF-V2-02 (4 replacement cards) satisfied in both PT and EN. No structural/visual changes.

## Deviations from Plan

None - plan executed exactly as written.

## Authentication Gates

None.

## Issues Encountered

None.

## Known Stubs

None.

## Next Phase Readiness

Ready for plan 12-02 (Quem Somos — founder bios with photos).

## Self-Check: PASSED

- [x] index.html exists and contains all 4 new titles + new subtitle
- [x] script.js exists and contains PT + EN consultative copy
- [x] Commit `1478ce4` exists (Task 1)
- [x] Commit `eeb583d` exists (Task 2)
- [x] Old copy ("100% Personalizado", "Funciona 24 horas") removed from both files
