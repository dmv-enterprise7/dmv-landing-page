---
phase: 09-provocacao-dados-mercado
plan: 01
subsystem: landing-copy
tags: [provocation, i18n, copy-rewrite, pain-points]
requires:
  - index.html #pain-points section (structure, classes, SVG icons)
  - script.js translations object (pt.pain.*, en.pain.*)
provides:
  - Diagnostic-question copy in #pain-points (PT default + EN translation)
  - Reframed closing line priming the visitor for the diagnosis offer
affects:
  - index.html (6 text nodes inside #pain-points)
  - script.js (12 translation values — 6 PT + 6 EN)
tech-stack:
  added: []
  patterns:
    - data-i18n value replacement (no key changes)
key-files:
  modified:
    - index.html
    - script.js
decisions:
  - Preserved section id "#pain-points" (internal anchors unchanged)
  - Preserved i18n key names; updated values only
  - Escaped EN apostrophes with backslash to match existing file style
metrics:
  duration: ~5min
  completed: 2026-04-14
  tasks: 2/2
  files: 2
---

# Phase 09 Plan 01: Provocação (Pain Points → Diagnostic Questions) Summary

Rewrote the former "Isso é familiar?" pain-points section into a provocative diagnostic-questions section across PT default markup and PT+EN i18n values — section ID, layout, SVG icons, and counter behavior untouched.

## Scope

Replaced 6 text nodes inside `<section id="pain-points">` plus matching translation values for 6 `pain.*` i18n keys in both `pt` and `en` blocks of the `translations` object. No CSS changes, no structural changes, no new keys.

## Changes

### index.html — `#pain-points` section (Task 1, commit `b939af6`)

| Element | New PT text |
|---|---|
| `h2 data-i18n="pain.title"` | Você sabe onde está perdendo dinheiro? |
| `p data-i18n="pain.item1"` | Quantos leads esfriaram porque ninguém respondeu em 5 minutos? |
| `p data-i18n="pain.item2"` | Você sabe quantas etapas manuais seu time repete todo dia sem necessidade? |
| `p data-i18n="pain.item3"` | Já mediu quanto tempo sua equipe gasta em tarefas que uma IA resolve em segundos? |
| `p data-i18n="pain.item4"` | Seu atendimento muda de qualidade dependendo de quem está no plantão? |
| `p.pain-transition-text data-i18n="pain.transition"` | A maioria das empresas não sabe responder essas perguntas. Nosso trabalho começa exatamente aí. |

### script.js — `translations` object (Task 2, commit `724cf9c`)

**PT block (`pt.pain.*`):** Values above.

**EN block (`en.pain.*`):**

| Key | New EN text |
|---|---|
| `pain.title` | Do you know where you're losing money? |
| `pain.item1` | How many leads went cold because no one responded within 5 minutes? |
| `pain.item2` | Do you know how many manual steps your team repeats every day without need? |
| `pain.item3` | Have you measured how much time your team spends on tasks AI solves in seconds? |
| `pain.item4` | Does your service quality change depending on who's on shift? |
| `pain.transition` | Most businesses can't answer these questions. That's exactly where our work begins. |

## Verification

- `grep -c 'id="pain-points"' index.html` → `1` (ID preserved)
- `grep -c 'data-i18n="pain.item' index.html` → `4`
- `grep -c "'pain\." script.js` → `12` (6 keys × 2 languages)
- `node --check script.js` → passes
- Zero legacy strings remain: "Isso é familiar?", "Does this sound familiar?", "Perde clientes porque demora para responder", "A DMV resolve cada um desses problemas...", "DMV solves every one of these problems..."

## Requirements Satisfied

- **PROV-01** — Section title rewritten (PT + EN)
- **PROV-02** — 4 diagnostic-question cards (PT + EN)
- **PROV-03** — Closing line reframed around diagnosis (PT + EN)

## Deviations from Plan

None — plan executed exactly as written.

## Commits

- `b939af6` feat(09-01): rewrite pain-points section as provocation questions (PT)
- `724cf9c` feat(09-01): update pain.* translations (PT + EN) with provocation copy

## Self-Check: PASSED

- index.html: modified (FOUND)
- script.js: modified (FOUND)
- Commit b939af6: FOUND
- Commit 724cf9c: FOUND
- SUMMARY.md: written at `.planning/phases/09-provocacao-dados-mercado/09-01-SUMMARY.md`
