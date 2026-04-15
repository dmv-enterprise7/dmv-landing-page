---
phase: 12-diferenciais-quem-somos-faq
plan: 02
subsystem: about-section
tags: [about, quem-somos, founders, i18n, bilingual]
requires:
  - 12-01
provides:
  - about-v2-intro-tagline
  - founder-specialty-lines
affects:
  - index.html
  - script.js
  - styles.css
tech-stack:
  added: []
  patterns: [data-i18n-attributes, PT-EN-translations-object]
key-files:
  created: []
  modified:
    - index.html
    - script.js
    - styles.css
key-decisions:
  - "Replaced about.mission-prefix/suffix/seal keys with about.intro + about.tagline for cleaner single-paragraph consultative framing"
  - "Added .founder-specialty span underneath .founder-name for each of 3 founder cards"
  - "Preserved existing .founder-photo-glow sizing (~120px) and circular styling — no layout changes needed"
requirements-completed:
  - ABOUT-V2-01
  - ABOUT-V2-02
  - ABOUT-V2-03
  - ABOUT-V2-04
  - ABOUT-V2-05
duration: 1 min
completed: 2026-04-15
---

# Phase 12 Plan 02: Quem Somos v2 (Intro + Founders + Specialties) Summary

Restructured #about section: replaced generic mission paragraph with consultative 3-founder intro, renamed seal to tagline, and added specialty lines ("Estratégia & Automação" / "IA & Desenvolvimento" / "Análise de Dados & Otimização") under each founder name. PT + EN i18n fully wired.

**Duration:** 1 min (start 2026-04-15T04:07:35Z, end 2026-04-15T04:08:59Z)
**Tasks:** 3/3 completed
**Files modified:** 3 (index.html, script.js, styles.css)

## Tasks Completed

| Task | Name | Commit | Files |
|------|------|--------|-------|
| 1 | Restructure #about HTML (intro + founder specialties) | 5c7ae64 | index.html |
| 2 | Update about.* i18n (PT + EN) in script.js | 623424b | script.js |
| 3 | Add .founder-specialty styling in styles.css | 261962d | styles.css |

## Implementation Details

**HTML (index.html #about):**
- Replaced `<p class="about-mission">` with two-span mission-prefix/suffix wrapping hardcoded founder names → single `data-i18n="about.intro"` paragraph.
- Renamed `data-i18n="about.seal"` → `data-i18n="about.tagline"` on `.about-seal-badge`.
- Inserted `<span class="founder-specialty" data-i18n="about.founderN.specialty">` under each of the 3 `.founder-name` spans.
- Preserved `.about-inner` grid, `.about-founders-wrap`, and all existing glow/SVG decorations.

**i18n (script.js):**
- Removed keys: `about.mission-prefix`, `about.mission-suffix`, `about.seal` from both PT and EN blocks.
- Added keys to PT and EN: `about.intro`, `about.tagline`, `about.founder{1,2,3}.specialty`.
- EN tagline intentionally shortened to "Driven Mind Vanguard." (per CONTEXT decision).

**CSS (styles.css):**
- Added `.founder-specialty` rule after `.founder-name`: block display, 0.25rem top margin, JetBrains Mono 0.78rem, muted color with fallback `rgba(255,255,255,0.65)`.
- No modifications to `.founder-card`, `.founder-photo-glow`, or `.about-inner` grid.

## Verification

- Automated node checks passed for all 3 tasks (new keys present, old keys absent, CSS rule present).
- All 3 founder photos (foto-vitor.jpg, foto-mariel.jpg, foto-daniel.jpg) already wired with `loading="lazy"` and correct alt text — no regression.

## Deviations from Plan

None - plan executed exactly as written.

## Authentication Gates

None.

## Issues Encountered

None.

## Next Phase Readiness

Ready for 12-03 (FAQ rewrite with 6 diagnosis-oriented Q&A in PT + EN).

## Self-Check: PASSED

- index.html modified: FOUND (commit 5c7ae64)
- script.js modified: FOUND (commit 623424b)
- styles.css modified: FOUND (commit 261962d)
- All 3 commits present in git log.
