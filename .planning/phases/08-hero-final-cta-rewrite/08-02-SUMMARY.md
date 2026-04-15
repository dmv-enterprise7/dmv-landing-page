---
phase: 08-hero-final-cta-rewrite
plan: 02
subsystem: final-cta-copy
tags: [cta, i18n, copy, consultative-positioning, diagnostic-framing]
requires:
  - 08-01
provides:
  - Final CTA consultative v2 copy (PT + EN) in both markup and i18n
  - CTA-V2-01, CTA-V2-02, CTA-V2-03
affects:
  - index.html (final CTA section default text, lines 465-466)
  - script.js (translations.pt.cta.* headline/subheadline + translations.en.cta.* headline/subheadline)
tech-stack:
  added: []
  patterns:
    - Preserve existing data-i18n mechanism and setLanguage() lookup
    - Markup default text mirrors PT translations (fallback consistency)
    - Bookend consistency with hero copy from Plan 08-01
key-files:
  created: []
  modified:
    - index.html
    - script.js
decisions:
  - "Only cta.headline and cta.subheadline required change — button and 3 badges already matched target copy from Phase 06"
  - "EN subtitle uses 'runaround' to mirror PT 'enrolação' (consultative honesty)"
metrics:
  duration: "~3 minutes"
  completed: "2026-04-14"
  tasks: 2
  files: 2
---

# Phase 8 Plan 2: Final CTA Rewrite (Consultative v2) Summary

Rewrote final CTA headline and subtitle in both index.html markup and script.js i18n (PT + EN) to mirror the hero's "diagnosis first" framing. Button text, badges, section id, classes, and WhatsApp href preserved — no CSS, no structure changes.

## Tasks Completed

| # | Task | Commit | Files |
|---|------|--------|-------|
| 1 | Update final CTA i18n keys in script.js (PT + EN) | b0306f5 | script.js |
| 2 | Update final CTA markup default text in index.html | c99d54d | index.html |

## Files Changed

- `script.js` — `cta.headline` + `cta.subheadline` rewritten in both `translations.pt` (lines 112-113) and `translations.en` (lines 226-227); button + badges unchanged (already matched target)
- `index.html` — final CTA section (lines 465-466) default text updated to new PT diagnostic copy; section id `cta-final`, classes, button href `https://wa.me/5521973495805`, and all data-i18n attributes preserved

## Grep Verifications

**script.js (new diagnostic copy present):**
- Line 112: `'cta.headline': 'Pronto para descobrir onde seu negócio pode ir mais longe?'`
- Line 113: `'cta.subheadline': 'Comece com um diagnóstico gratuito. Sem compromisso, sem enrolação.'`
- Line 114: `'cta.button': 'Falar com um especialista agora'` (unchanged, verified present)
- Line 226: `'cta.headline': 'Ready to discover how far your business can go?'`
- Line 227: `'cta.subheadline': 'Start with a free diagnosis. No commitment, no runaround.'`
- Line 228: `'cta.button': 'Talk to a specialist now'` (unchanged, verified present)
- PT badges (lines 115-117): `'Sem compromisso'`, `'100% gratuito'`, `'Resposta imediata'` — preserved
- EN badges (lines 229-231): `'No commitment'`, `'100% free'`, `'Immediate response'` — preserved
- `node --check script.js` → exit 0

**index.html (new markup present):**
- Line 462: `<section id="cta-final" class="section section-cta-final">` (preserved)
- Line 465: `<h2 class="cta-final-headline" data-i18n="cta.headline">Pronto para descobrir onde seu negócio pode ir mais longe?</h2>`
- Line 466: `<p class="cta-final-sub" data-i18n="cta.subheadline">Comece com um diagnóstico gratuito. Sem compromisso, sem enrolação.</p>`
- Line 467: `<a href="https://wa.me/5521973495805" class="btn-cta-final" data-i18n="cta.button" target="_blank" rel="noopener">Falar com um especialista agora</a>` (preserved)
- Lines 471, 475, 479: badges `Sem compromisso` / `100% gratuito` / `Resposta imediata` (preserved)

**Old copy fully removed:**
- `grep "Pronto para colocar seu negócio no piloto automático?"` → 0 matches (index.html + script.js)
- `grep "Ready to put your business on autopilot?"` → 0 matches (script.js)
- `grep "Comece com uma conversa gratuita"` → 0 matches (index.html + script.js)

## Deviations from Plan

None — plan executed exactly as written. All acceptance criteria satisfied on first pass. Button and 3 badges already matched target copy (inherited from Phase 06), so only headline/subheadline required rewriting in both PT and EN blocks, as the plan anticipated.

## Requirements Satisfied

- [x] CTA-V2-01 — `cta.headline` matches exact PT + EN copy in both index.html and script.js
- [x] CTA-V2-02 — `cta.subheadline` matches exact PT + EN copy; `cta.button` reads "Falar com um especialista agora" (PT) / "Talk to a specialist now" (EN) with href `https://wa.me/5521973495805`
- [x] CTA-V2-03 — 3 badges match "Sem compromisso · 100% gratuito · Resposta imediata" (PT) and EN equivalents "No commitment / 100% free / Immediate response"

## Known Stubs

None.

## Self-Check: PASSED

- FOUND: index.html (modified, final CTA lines 465-466 updated; section id + href + classes preserved)
- FOUND: script.js (modified, PT cta lines 112-113 + EN cta lines 226-227 updated; parse OK)
- FOUND commit: b0306f5 (Task 1: script.js)
- FOUND commit: c99d54d (Task 2: index.html)
- `node --check script.js` → exit 0 (no syntax errors)
