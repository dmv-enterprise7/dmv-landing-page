---
phase: 11-setores-atendidos
plan: 01
subsystem: landing-page-content
tags: [html, i18n, navigation, content-addition]
requires:
  - phase: 02
    capability: "i18n system with translations object + setLanguage()"
  - phase: 02
    capability: "navbar + footer nav structure with data-i18n attributes"
provides:
  - capability: "#sectors section DOM with 6 sector cards, title, and closing line"
  - capability: "nav.sectors + 8 sectors.* i18n keys wired in PT/EN"
  - capability: "navbar and footer anchors pointing to #sectors"
affects:
  - "index.html (+77 lines)"
  - "script.js (+24 lines)"
tech-stack:
  added: []
  patterns:
    - "Section structure mirrors #differentials (section > .container > header > grid)"
    - "SVG icons: stroke-based, 28x28, currentColor, aria-hidden"
    - "Nav entries ordered: Por que IA? | Serviços | Setores | Como Funciona | Sobre Nós | FAQ"
key-files:
  created: []
  modified:
    - path: "index.html"
      change: "Added #sectors section between #services and #how-it-works; added nav.sectors anchor to desktop nav (#nav-links) and footer nav (.footer-nav)"
    - path: "script.js"
      change: "Added nav.sectors + 8 sectors.* keys to PT and EN translation blocks"
key-decisions:
  - "Section ID: #sectors (English) chosen over #setores for consistency with existing nav IDs"
  - "Placed Setores link between Serviços and Como Funciona in nav (reflects content flow)"
  - "Closing line rendered as <p class=\"sectors-closing\"> outside the grid, inside the container"
  - "Icons use simple stroke motifs (plus-square, bag, briefcase, wrench, graduation, house) — avoid fills"
  - "EN title apostrophe encoded as \\u0027 to safely embed inside single-quoted JS string"
requirements-completed: [SECT-01, SECT-02, SECT-03, SECT-04, SECT-07]
duration: "1 min"
completed: "2026-04-15"
---

# Phase 11 Plan 01: Setores Atendidos — Section Scaffold Summary

New "Setores que já transformamos com IA" section added to the DOM with 6 sector cards, a closing CTA line, navbar + footer anchors, and full PT/EN i18n coverage — CSS styling deferred to plan 11-02.

- **Duration:** 1 min
- **Start:** 2026-04-15T03:50:51Z
- **End:** 2026-04-15T03:52:06Z
- **Tasks:** 2 / 2 completed
- **Files modified:** 2 (index.html, script.js)

## What Was Built

### Task 1 — HTML Section & Anchors (commit `97a3e97`)
- Inserted `<section id="sectors" class="section section-sectors">` between `#services` (line 232) and `#how-it-works` (line 310) in index.html.
- Section structure: `.container > .sectors-header (h2) > .sectors-grid (6 .sector-card) > .sectors-closing (p)`.
- Each `.sector-card` contains `.sector-icon` (28×28 stroke SVG) + `.sector-label` (h3).
- Added `<a href="#sectors" data-i18n="nav.sectors">Setores</a>` to:
  - Desktop nav (`#nav-links`, between `#services` and `#how-it-works` links).
  - Footer nav (`.footer-nav`, same position).
- Mobile drawer reuses `#nav-links` (no separate markup existed), so the new anchor is automatically visible on mobile.

### Task 2 — i18n Keys (commit `234c914`)
Added 9 new keys × 2 languages = 18 entries to `translations` in script.js:

| Key | PT | EN |
|-----|----|----|
| `nav.sectors` | Setores | Sectors |
| `sectors.title` | Setores que já transformamos com IA | Sectors we've already transformed with AI |
| `sectors.s1.label` | Clínicas e Consultórios | Clinics & Medical Offices |
| `sectors.s2.label` | E-commerces | E-commerces |
| `sectors.s3.label` | Escritórios e Consultorias | Offices & Consulting Firms |
| `sectors.s4.label` | Prestadores de Serviço | Service Providers |
| `sectors.s5.label` | Educação e Cursos | Education & Courses |
| `sectors.s6.label` | Imobiliárias | Real Estate |
| `sectors.closing` | Se o seu negócio atende clientes, a IA pode ajudar. Agende o diagnóstico e descubra como. | If your business serves clients, AI can help. Schedule your diagnosis and find out how. |

`node --check script.js` passes.

## Icon SVG Reference (for plan 11-02)

Each sector uses a dedicated stroke icon; viewport `0 0 28 28`, 28×28 display, `stroke="currentColor"`, no fill:

1. **Clínicas** — plus cross + inner rect (medical cross)
2. **E-commerces** — shopping bag with handle
3. **Escritórios** — briefcase with handle
4. **Prestadores** — wrench/spanner
5. **Educação** — graduation cap
6. **Imobiliárias** — house with door cutout

Styling in 11-02 can target `.sectors-grid`, `.sector-card`, `.sector-icon`, `.sector-label`, `.sectors-header`, `.sectors-closing`, `.section-sectors`.

## Acceptance Criteria Verification

All checks from the plan pass:

- `grep -c 'id="sectors"' index.html` → **1**
- `grep -c 'href="#sectors"' index.html` → **2** (nav + footer)
- `grep -c 'data-i18n="sectors.s[1-6].label"' index.html` → **6**
- `grep -c 'data-i18n="nav.sectors"' index.html` → **2**
- DOM order: `services` (line 178) → `sectors` (line 235) → `how-it-works` (line 310) ✓
- `grep -c "'sectors\.title'" script.js` → **2**
- `grep -c "'sectors\.s[1-6]\.label'" script.js` → **12**
- `grep -c "'sectors\.closing'" script.js` → **2**
- `grep -c "'nav\.sectors'" script.js` → **2**
- `node --check script.js` → **OK**

## Deviations from Plan

None — plan executed exactly as written.

## Authentication Gates

None.

## Issues Encountered

None.

## Commits

| Task | Hash | Message |
|------|------|---------|
| 1 | `97a3e97` | feat(11-01): add #sectors section with nav and footer anchors |
| 2 | `234c914` | feat(11-01): add sectors + nav.sectors i18n keys (PT/EN) |

## Next Phase Readiness

Ready for **11-02-PLAN.md** (CSS styling for the `.sectors-grid` + `.sector-card` responsive 3/2/1 grid, glassmorphism, hover states, and scroll-reveal wiring).

## Self-Check: PASSED

- index.html modified and committed: FOUND (97a3e97)
- script.js modified and committed: FOUND (234c914)
- All acceptance greps pass
- `node --check script.js` passes
