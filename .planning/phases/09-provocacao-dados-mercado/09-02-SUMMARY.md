---
phase: 09-provocacao-dados-mercado
plan: 02
subsystem: landing-copy
tags: [market-data, i18n, copy-rewrite, diagnosis-framing]
requires:
  - index.html #why-ai section (structure, stats grid, counter animation)
  - script.js translations object (pt['why-ai.*'], en['why-ai.*'])
provides:
  - Diagnosis-framed title + closing phrase in #why-ai (PT default + EN translation)
  - Market statistics reframed as urgency for diagnosis (not generic AI-adoption pitch)
affects:
  - index.html (1 text node — transition-phrase inside #why-ai)
  - script.js (3 translation values — PT why-ai.transition, EN why-ai.title, EN why-ai.transition)
tech-stack:
  added: []
  patterns:
    - data-i18n value replacement (no key changes, no structural changes)
key-files:
  modified:
    - index.html
    - script.js
decisions:
  - PT why-ai.title already matched CONTEXT canonical — no-op (script.js:33, index.html:89)
  - Preserved all 6 stat cards (desc + source) byte-identical across PT + EN (24 why-ai.stat keys)
  - Preserved section id "#why-ai", badge, subtitle, CTA button, and IntersectionObserver counter code
  - Escaped EN apostrophes with backslash to match existing file style
requirements: [MARK-V2-01, MARK-V2-02, MARK-V2-03]
metrics:
  duration: ~3min
  completed: 2026-04-14
  tasks: 1/1
  files: 2
---

# Phase 09 Plan 02: Market Data Reframe Summary

Reframed the #why-ai section title (EN) and closing transition phrase (PT + EN) to align with diagnosis-first positioning — statistics, sources, counter animation, and all other copy untouched.

## Scope

Modified 1 text node in `<section id="why-ai">` (transition-phrase) and 3 translation values in `script.js` (1 PT + 2 EN). PT title was already canonical (no-op). No CSS, no structural, no counter-logic changes.

## Changes

### index.html — `#why-ai` section (commit `041fe07`)

| Element | New PT text |
|---|---|
| `p.transition-phrase data-i18n="why-ai.transition"` | A pergunta não é SE você vai usar IA. É QUANDO. E quem começa com diagnóstico, começa certo. |

`h2 data-i18n="why-ai.title"` was already: "O mercado já se moveu. E o seu negócio?" — preserved.

### script.js — `translations` object (commit `041fe07`)

**PT block:**

| Key | New value |
|---|---|
| `why-ai.title` | O mercado já se moveu. E o seu negócio? _(unchanged, already canonical)_ |
| `why-ai.transition` | A pergunta não é SE você vai usar IA. É QUANDO. E quem começa com diagnóstico, começa certo. |

**EN block:**

| Key | New value |
|---|---|
| `why-ai.title` | The market has already moved. What about your business? |
| `why-ai.transition` | The question isn't IF you'll use AI. It's WHEN. And those who start with diagnosis start right. |

## Verification

- `node --check script.js` → passes
- `grep -c 'why-ai.stat' script.js` → `24` (6 stats × 2 fields × 2 languages — preserved)
- `grep -c 'IntersectionObserver' script.js` → `2` (counter animation preserved)
- `grep -c 'class="stat-number"' index.html` → `6`
- Legacy strings removed (all return 0):
  - `"E quem começa antes, sai na frente."` → gone
  - `"Has your business?"` → gone
  - `"those who start first, lead the race."` → gone
- New strings present (all return 1 where expected):
  - `"começa com diagnóstico, começa certo."` → index.html + script.js
  - `"What about your business?"` → script.js EN
  - `"those who start with diagnosis start right."` → script.js EN
- All 6 sources preserved (McKinsey, IBM Research, Tidio Research, Zendesk / Flowlyn, MDPI Academic Study 2025, Sales So / Industry Data)

## Requirements Satisfied

- **MARK-V2-01** — Title matches CONTEXT exactly in PT (already canonical) + EN (updated)
- **MARK-V2-02** — Closing phrase reframed around diagnosis in PT + EN
- **MARK-V2-03** — All 6 statistics (78/4.8/62/70/46/67) + all 6 sources preserved byte-identical; counter animation untouched

## Deviations from Plan

None — plan executed exactly as written. PT title task was a confirmed no-op (as plan anticipated).

## Commits

- `041fe07` feat(09-02): reframe market data title + closing phrase (PT + EN)

## Self-Check: PASSED

- index.html: modified (FOUND)
- script.js: modified (FOUND)
- Commit 041fe07: FOUND
- SUMMARY.md: written at `.planning/phases/09-provocacao-dados-mercado/09-02-SUMMARY.md`
