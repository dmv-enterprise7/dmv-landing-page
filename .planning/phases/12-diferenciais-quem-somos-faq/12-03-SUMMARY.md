---
phase: 12-diferenciais-quem-somos-faq
plan: 03
subsystem: faq
tags: [copy, i18n, faq, diagnosis-orientation]
requires:
  - 12-02
provides:
  - 6 diagnosis-oriented FAQ Q/A pairs (PT + EN)
  - Preserved accordion markup + handler contract
affects:
  - index.html (FAQ section lines 499-552)
  - script.js (PT faq.* block ~line 112-125, EN faq.* block ~line 242-255)
tech-stack:
  added: []
  patterns:
    - Text-only i18n update preserving data-i18n key contract
    - Accordion DOM preserved (zero JS/CSS risk)
key-files:
  created: []
  modified:
    - index.html
    - script.js
key-decisions:
  - Rewrote only inner text of .faq-question spans and .faq-answer p elements; left buttons, aria-expanded, icons, IDs, classes, and accordion handler untouched to honor FAQ-V2-02 by construction.
  - Kept existing key names (faq.q1..q6, faq.a1..a6) instead of renaming, so no call-sites needed updating.
  - Used `&mdash;` in HTML and `\u2014` in JS string literals for em-dashes (consistent with existing file conventions).
requirements-completed:
  - FAQ-V2-01
  - FAQ-V2-02
duration: 2 min
completed: 2026-04-15
---

# Phase 12 Plan 03: FAQ Diagnosis-Oriented Rewrite Summary

Rewrote 6 FAQ Q/A pairs in PT + EN to orient every remaining visitor objection (custo, tecnologia, segmento, tempo, reunião, suporte) through the lens of the free diagnosis / consultative process — zero accordion behavior risk, because only text nodes were touched.

## Execution

- **Start:** 2026-04-15T04:10:24Z
- **End:** 2026-04-15T04:12:14Z
- **Duration:** ~2 min
- **Tasks:** 2/2 completed
- **Files modified:** 2 (`index.html`, `script.js`)

## Tasks

| Task | Name                                                          | Commit   | Files       |
| ---- | ------------------------------------------------------------- | -------- | ----------- |
| 1    | Rewrite 6 FAQ Q/A static fallback text in index.html          | 17c3c81  | index.html  |
| 2    | Update faq.* PT + EN i18n entries in script.js                | 50f6416  | script.js   |

## What Changed

### index.html (FAQ section)

Replaced inner text of 6 pairs — old → new:

| # | Old (PT)                              | New (PT)                                            |
| - | ------------------------------------- | --------------------------------------------------- |
| 1 | Quanto custa?                         | Quanto custa uma consultoria de IA com a DMV?       |
| 2 | Preciso entender de tecnologia?       | Preciso entender de tecnologia para contratar?     |
| 3 | Funciona para o meu segmento?         | Vocês atendem qualquer segmento?                    |
| 4 | Quanto tempo leva para implementar?   | Quanto tempo leva para ver resultado?               |
| 5 | E se eu não gostar do resultado?      | Como é a reunião de diagnóstico?                    |
| 6 | Vocês dão suporte depois?             | E depois que a solução está no ar?                  |

All answers rewritten to foreground diagnosis, honesty, 5–10 day diagnosis window, 30–60 day first measurable gain, 30–45 min online meeting, ongoing support as part of model.

**Preserved untouched:** `<button class="faq-btn" aria-expanded="false" aria-controls="faq-answer-N">`, `<span class="faq-icon">+</span>`, `<div class="faq-answer" id="faq-answer-N" role="region">`, `<div class="faq-answer-inner">` wrapper.

### script.js (PT + EN i18n)

Updated `faq.q1..q6` and `faq.a1..a6` values in both PT and EN translation objects. Key names unchanged.

**Preserved untouched:** `faq.title`, `faq.subtitle`, and the accordion handler (`faqBtns.forEach(...)` around line 430) — single-open pattern, `aria-expanded` toggle, `max-height` transition, and icon rotate all continue working because DOM, classes, and handler code were left intact.

## Verification

### Automated (both tasks passed)

```
Task 1 node check: OK  (6 new PT questions present, old Q1/Q5 removed)
Task 2 node check: OK  (PT+EN i18n updated, old keys removed)
```

### Manual (for user verification)

- Open `index.html`, click each FAQ question: accordion expands with max-height transition, `+` icon rotates, `aria-expanded` toggles `true`, only one item open at a time.
- Toggle EN via lang switcher: all 6 Q/A pairs swap to English naturally.
- Browser console: no errors.

## Success Criteria

- [x] FAQ-V2-01 — 6 rewritten diagnosis-oriented questions (PT + EN)
- [x] FAQ-V2-02 — accordion behavior preserved (single-open, max-height, aria-expanded, icon rotate) — satisfied by non-modification of markup structure and handler

## Deviations from Plan

None - plan executed exactly as written.

## Authentication Gates

None.

## Issues Encountered

None.

## Known Stubs

None. All 6 Q/A pairs wired with real copy in both PT and EN.

## Next Phase Readiness

Phase 12 complete: all three plans (12-01 Diferenciais, 12-02 Quem Somos, 12-03 FAQ) now shipped. Ready for `/gsd:verify-work 12` and/or next phase.

## Self-Check: PASSED

- index.html — FOUND, contains "Como é a reunião de diagnóstico?" and "diagnóstico inicial é 100% gratuito"
- script.js — FOUND, contains "What is the diagnosis meeting like?" and PT diagnosis copy
- Commit 17c3c81 — FOUND in git log
- Commit 50f6416 — FOUND in git log
