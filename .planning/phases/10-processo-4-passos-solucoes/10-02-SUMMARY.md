---
phase: 10-processo-4-passos-solucoes
plan: 02
subsystem: solutions-section
tags: [i18n, html, copy, consultative-positioning]
requires:
  - Phase 10 Plan 01 (process 4-step expansion — provides consultative bridge into solutions)
  - Existing services.card1..card6 i18n keys (preserved untouched)
provides:
  - "Diagnosis-driven solutions section title/subtitle (PT + EN)"
  - "Bridge copy connecting 4-step process outputs to custom solutions"
affects:
  - index.html (services section header h2 + subtitle p)
  - script.js (PT + EN services.title + services.subtitle values)
tech-stack:
  added: []
  patterns:
    - "\\u2014 escape for em-dash in script.js dictionaries (consistent with Plan 10-01 pattern)"
    - "Raw — character in index.html (consistent with HTML convention)"
key-files:
  created: []
  modified:
    - index.html
    - script.js
decisions:
  - "Used \\u2014 unicode escape in script.js (not raw —) to match existing V1 and V2 dictionary style in this file"
  - "Preserved all 6 services.card* keys and card DOM structure — only header h2 + subtitle p modified"
metrics:
  duration: ~2 min
  tasks_completed: 2 auto (+ 1 checkpoint pending human verification)
  files_modified: 2
  completed: 2026-04-14
requirements:
  - SOL-V2-01
  - SOL-V2-02
---

# Phase 10 Plan 02: Solutions Section Header Rewrite Summary

Rewrote the Solutions section title and subtitle to frame each solution as diagnosis-driven ("Soluções que nascem do diagnóstico" / "Solutions born from diagnosis"), bridging Plan 10-01's 4-step consultative process into the services grid. The 6 service cards remain fully untouched — only 2 text lines in HTML and 4 i18n values in JS changed.

## What Was Built

### index.html (`#services` section)
- Line 179: `<h2 data-i18n="services.title">` text → "Soluções que nascem do diagnóstico"
- Line 180: `<p class="services-subtitle" data-i18n="services.subtitle">` text → "Cada sistema que criamos é único — porque cada negócio tem gargalos diferentes."
- All other attributes preserved: `data-i18n` keys, class names, section ID
- `.services-bento` and 6 `.service-card` blocks below header untouched (verified grep -c = 6)

### script.js (i18n dictionaries)
- PT line 55: `services.title` → 'Soluções que nascem do diagnóstico'
- PT line 56: `services.subtitle` → 'Cada sistema que criamos é único \u2014 porque cada negócio tem gargalos diferentes.'
- EN line 171: `services.title` → 'Solutions born from diagnosis'
- EN line 172: `services.subtitle` → 'Every system we build is unique \u2014 because every business has different bottlenecks.'
- All 24 `services.card*` entries (6 cards × 2 langs × 2 fields title/desc) preserved untouched

## Commits

| Task | Commit | Files |
| ---- | ------ | ----- |
| Task 1: index.html services header rewrite | ed455c6 | index.html |
| Task 2: script.js PT + EN i18n update | d2de86e | script.js |

## Deviations from Plan

**1. [Rule 3 - Style consistency] Em-dash encoding in script.js**
- **Found during:** Task 2
- **Issue:** Plan verify grep expects raw `—` in script.js, but the file's existing dictionary style (including Plan 10-01's `how.*` keys and all V1 `services.card*.desc` values) uses `\u2014` escapes.
- **Fix:** Used `\u2014` in script.js to match file convention; plan's action text explicitly permits either ("preserve the em-dash character or its unicode escape in a way consistent with the surrounding style"). Raw `—` retained in index.html per HTML convention.
- **Files modified:** script.js
- **Commit:** d2de86e

## Requirements Satisfied

- SOL-V2-01: New solutions title "Soluções que nascem do diagnóstico" / "Solutions born from diagnosis" in HTML + PT/EN i18n
- SOL-V2-02: New bottleneck-focused subtitle in PT + EN

## Must-Haves Verification

- ✅ Title reads "Soluções que nascem do diagnóstico" (PT) and "Solutions born from diagnosis" (EN)
- ✅ Subtitle reads "Cada sistema que criamos é único — porque cada negócio tem gargalos diferentes." (PT) and EN equivalent
- ✅ All 6 service cards inside `.services-bento` retain titles, descriptions, icons untouched (grep -c `class="service-card` = 6; grep -c `services.card` in script.js = 24)
- ✅ Language toggle swaps services.title and services.subtitle bidirectionally (same `data-i18n` + dictionary pattern that already worked)

## Known Stubs

None.

## Checkpoint Status

**Task 3 (checkpoint:human-verify)** — Deferred to phase end per orchestrator instructions ("note in summary but proceed"). Verification steps for human:
1. Scroll to Solutions section — confirm new PT title + subtitle
2. Confirm 6 service cards visually identical (icons, titles, descs, hover glow)
3. Toggle to EN — confirm header translates to "Solutions born from diagnosis" + bottleneck subtitle
4. Toggle back to PT — confirm full round-trip

## Self-Check: PASSED

- index.html: new title + subtitle present, old strings absent, 6 `.service-card` preserved
- script.js: new PT + EN title/subtitle values present, old `'Soluções sob medida'` and `'Custom-built solutions'` absent, 24 `services.card*` entries preserved
- All 2 task commits present: ed455c6, d2de86e
