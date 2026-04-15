---
phase: 08-hero-final-cta-rewrite
plan: 01
subsystem: hero-copy
tags: [hero, i18n, copy, consultative-positioning]
requires: []
provides:
  - Hero consultative v2 copy (PT + EN) in both markup and i18n
  - HERO-V2-01, HERO-V2-02, HERO-V2-03, HERO-V2-04, HERO-V2-05
affects:
  - index.html (hero section default text, lines 65-74)
  - script.js (translations.pt.hero.* and translations.en.hero.* keys)
tech-stack:
  added: []
  patterns:
    - Preserve existing data-i18n mechanism and setLanguage() lookup
    - Markup default text mirrors PT translations (fallback consistency)
key-files:
  created: []
  modified:
    - index.html
    - script.js
decisions:
  - "Kept hero.badge unchanged (out of v2 scope)"
  - "Used unicode \\u2193 in script.js and &#8595; in index.html for down-arrow (matches existing style)"
  - "EN mirrors PT consultative tone with 'diagnosis-first' framing"
metrics:
  duration: "~5 minutes"
  completed: "2026-04-14"
  tasks: 2
  files: 2
---

# Phase 8 Plan 1: Hero Copy Rewrite (Consultative v2) Summary

Updated hero headline, sub-headline, CTAs, and 3 badges in both index.html markup and script.js i18n (PT + EN) to shift positioning from "AI on autopilot" to consultative "diagnosis first, then technology". No CSS, structure, or href changes.

## Tasks Completed

| # | Task | Commit | Files |
|---|------|--------|-------|
| 1 | Update hero i18n keys in script.js (PT + EN) | f65e3e8 | script.js |
| 2 | Update hero markup default text in index.html | af24358 | index.html |

## Files Changed

- `script.js` — 14 hero key values rewritten across `translations.pt` and `translations.en`; `hero.badge` preserved
- `index.html` — hero section text nodes rewritten (headline, sub-headline, primary CTA text + title attr, secondary CTA text, seal-1 text); all classes, hrefs, SVGs, data-i18n attributes preserved

## Grep Verifications

**script.js (new consultative copy present):**
- Line 20: `'hero.headline': 'Antes de automatizar, a gente entende onde seu negócio trava'`
- Line 22: `'hero.cta-primary': 'Agende seu Diagnóstico Gratuito'`
- Line 24: `'hero.seal-1': 'Diagnóstico 100% gratuito'`
- Line 134: `'hero.headline': 'Before automating, we understand where your business gets stuck'`
- Line 136: `'hero.cta-primary': 'Schedule Your Free Diagnosis'`
- Line 138: `'hero.seal-1': '100% free diagnosis'`
- `node --check script.js` → exit 0

**index.html (new markup present):**
- Line 65: `<h1 ... data-i18n="hero.headline">Antes de automatizar, a gente entende onde seu negócio trava</h1>`
- Line 66: subheadline starts with "Fazemos o diagnóstico dos seus processos..."
- Line 68: `href="https://wa.me/5521973495805" ... data-i18n="hero.cta-primary" title="Agende seu Diagnóstico Gratuito" ...>Agende seu Diagnóstico Gratuito</a>` (WhatsApp URL preserved)
- Line 69: `href="#how-it-works" ... data-i18n="hero.cta-secondary">Veja como funciona &#8595;</a>` (anchor preserved)
- Line 72: `<span data-i18n="hero.seal-1">Diagnóstico 100% gratuito</span>`
- Line 64: `hero.badge` untouched (`&#10022; Agência de Automação com IA`)

**Old hero copy fully removed from hero scope:**
- `grep "Seu negócio no piloto automático"` in hero section → 0 matches (line 465 `cta.headline` is final CTA — out of scope for this plan, handled in future plan 08-02)
- `grep "Reunião 100% gratuita"` → 0 matches
- `grep "Criamos assistentes virtuais"` in hero → 0 matches

## Deviations from Plan

None — plan executed exactly as written. All acceptance criteria satisfied on first pass.

## Requirements Satisfied

- [x] HERO-V2-01 — Headline matches exact PT + EN copy in both index.html and script.js
- [x] HERO-V2-02 — Sub-headline matches exact PT + EN copy in both files
- [x] HERO-V2-03 — Primary CTA text "Agende seu Diagnóstico Gratuito" + href `https://wa.me/5521973495805`
- [x] HERO-V2-04 — Secondary CTA "Veja como funciona ↓" + href `#how-it-works`
- [x] HERO-V2-05 — 3 seals match "Diagnóstico 100% gratuito / Sem compromisso / Resposta imediata" in PT (and EN equivalents)

## Known Stubs

None.

## Self-Check: PASSED

- FOUND: index.html (modified, hero lines 65-74 updated)
- FOUND: script.js (modified, PT lines 20-26 + EN lines 134-140 updated)
- FOUND commit: f65e3e8 (Task 1: script.js)
- FOUND commit: af24358 (Task 2: index.html)
- `node --check script.js` → exit 0 (no syntax errors)
