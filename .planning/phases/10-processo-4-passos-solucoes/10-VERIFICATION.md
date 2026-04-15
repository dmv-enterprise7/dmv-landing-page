---
phase: 10-processo-4-passos-solucoes
verified: 2026-04-14T00:00:00Z
status: passed
score: 7/7 must-haves verified
re_verification: false
human_verification:
  - test: "Desktop 4-column stepper visual layout"
    expected: "4 step cards in a single horizontal row with 3 cyan connector lines visible between them, no overflow at 1024px and 1440px"
    why_human: "CSS grid rendering and pseudo-element connector lines cannot be verified without a browser"
  - test: "Mobile vertical timeline"
    expected: "At 375px the 4 cards stack vertically with a short vertical connector between each adjacent pair, no horizontal scrollbar"
    why_human: "Responsive layout requires viewport simulation"
  - test: "Language toggle on process section"
    expected: "Toggling PT/EN swaps how.title, how.subtitle, how.step1-4.title/desc, and how.cta text without page reload"
    why_human: "i18n runtime behavior requires browser execution"
  - test: "CTA link target"
    expected: "Clicking 'Comece pelo diagnóstico — é gratuito' opens https://wa.me/5521973495805 in a new tab"
    why_human: "Link resolution and target=_blank require browser click"
---

# Phase 10: Processo 4 Passos + Soluções — Verification Report

**Phase Goal:** Visitor understands the full 4-step consultative process (Raio-X do Negócio → Mapa de Oportunidades → Construção Sob Medida → Acompanhamento e Otimização) and immediately after sees that solutions emerge from the diagnosis, not from a catalog.
**Verified:** 2026-04-14
**Status:** PASSED
**Re-verification:** No — initial verification

---

## Goal Achievement

### Observable Truths

| # | Truth | Status | Evidence |
|---|-------|--------|----------|
| 1 | Process section title reads "Consultoria primeiro. Tecnologia depois." (PT) / "Consulting first. Technology after." (EN) | VERIFIED | `index.html:237` h2 inner text; `script.js:69` PT key; `script.js:185` EN key |
| 2 | Process section subtitle reads "Nosso processo existe para garantir que cada solução resolve o problema certo." | VERIFIED | `index.html:238` p.how-subtitle; `script.js:70` PT; `script.js:186` EN |
| 3 | Stepper shows exactly 4 .step-card elements (01 Raio-X, 02 Mapa, 03 Construção, 04 Acompanhamento) | VERIFIED | `index.html:243,257,272,287` — 4 .step-card divs with numbers 01-04 and correct copy |
| 4 | All 4 steps have PT + EN i18n keys in script.js | VERIFIED | how.step4.title/desc at `script.js:77-78` (PT) and `script.js:193-194` (EN) |
| 5 | CSS grid updated to repeat(4, 1fr) for desktop; tablet tightened to padding 0 14px | VERIFIED | `styles.css:1449` repeat(4,1fr); `styles.css:1554` padding: 0 14px; mobile 1fr at line 1567 |
| 6 | Closing CTA reads "Comece pelo diagnóstico — é gratuito" and href is https://wa.me/5521973495805 | VERIFIED | `index.html:304` — exact text and href confirmed |
| 7 | Solutions title "Soluções que nascem do diagnóstico" + subtitle updated; 6 service cards untouched | VERIFIED | `index.html:179-180`; `script.js:55-56` PT, `script.js:171-172` EN; 6 .service-card elements present |

**Score:** 7/7 truths verified

---

### Required Artifacts

| Artifact | Expected | Status | Details |
|----------|----------|--------|---------|
| `index.html` | 4 .step-card elements with how.step4.title data-i18n; services title updated | VERIFIED | Lines 243-304 (process), lines 179-180 (solutions) |
| `script.js` | PT + EN keys for how.step1-4, how.title, how.subtitle, how.cta, services.title, services.subtitle | VERIFIED | PT block ~lines 69-79; EN block ~lines 185-195; services ~55-56, 171-172 |
| `styles.css` | grid-template-columns: repeat(4, 1fr); tablet padding 0 14px; mobile 1fr intact | VERIFIED | Lines 1449, 1554, 1567 |

---

### Key Link Verification

| From | To | Via | Status | Details |
|------|----|-----|--------|---------|
| index.html #how-it-works h2 | script.js how.title key | data-i18n="how.title" | WIRED | Attribute present at line 237; key at script.js:69/185 |
| index.html .step-card (step 4) | script.js how.step4.title/desc | data-i18n="how.step4.title/desc" | WIRED | Attributes at lines 296-297; keys at script.js:77-78/193-194 |
| index.html .how-cta anchor | https://wa.me/5521973495805 | href attribute | WIRED | Line 304 — exact URL confirmed |
| index.html services h2 | script.js services.title key | data-i18n="services.title" | WIRED | Line 179; script.js:55/171 |
| index.html .services-subtitle | script.js services.subtitle key | data-i18n="services.subtitle" | WIRED | Line 180; script.js:56/172 |

---

### Data-Flow Trace (Level 4)

Not applicable — this phase modifies static HTML copy and i18n dictionary values. No dynamic data source (DB, API, fetch) is involved. The i18n system reads from in-memory JS dictionaries that are fully populated.

---

### Behavioral Spot-Checks

| Behavior | Command | Result | Status |
|----------|---------|--------|--------|
| 4 step cards exist in DOM | grep -c 'class="step-card"' index.html | 4 | PASS |
| CSS 4-column grid declared | grep 'repeat(4, 1fr)' styles.css | found at line 1449 | PASS |
| how.step4.title in both dictionaries | grep -c "'how.step4.title'" script.js | 2 | PASS |
| CTA href exact match | grep 'href="https://wa.me/5521973495805"' index.html (in how-cta) | found at line 304 | PASS |
| Old services title absent | grep 'Soluções sob medida para o seu negócio' index.html / script.js | no matches | PASS |
| 6 service cards preserved | grep -c 'class="service-card' index.html | 6 | PASS |

---

### Requirements Coverage

| Requirement | Source Plan | Description | Status | Evidence |
|-------------|-------------|-------------|--------|----------|
| PROC-V2-01 | 10-01-PLAN.md | 4 step stepper (Raio-X, Mapa, Construção, Acompanhamento) | SATISFIED | 4 .step-card elements, index.html:243-299 |
| PROC-V2-02 | 10-01-PLAN.md | Title "Consultoria primeiro. Tecnologia depois." + subtitle | SATISFIED | index.html:237-238; script.js:69-70/185-186 |
| PROC-V2-03 | 10-01-PLAN.md | All 4 steps have PT + EN i18n translations | SATISFIED | how.step1-4 keys in both dictionaries |
| PROC-V2-04 | 10-01-PLAN.md | CSS grid 4 columns desktop; vertical mobile | SATISFIED | styles.css:1449 (desktop), 1567 (mobile) |
| PROC-V2-05 | 10-01-PLAN.md | CTA "Comece pelo diagnóstico — é gratuito" → wa.me/5521973495805 | SATISFIED | index.html:304; script.js:79/195 |
| SOL-V2-01 | 10-02-PLAN.md | Solutions title "Soluções que nascem do diagnóstico" + new subtitle | SATISFIED | index.html:179-180; script.js:55-56/171-172 |
| SOL-V2-02 | 10-02-PLAN.md | 6 service cards internal copy preserved | SATISFIED | 6 .service-card elements present, internal copy unchanged |

---

### Anti-Patterns Found

None found. No TODO/FIXME comments, no placeholder text, no stub implementations, no hardcoded empty arrays or null returns in any of the three modified files. The how-cta anchor contains real copy and a real WhatsApp URL.

---

### Human Verification Required

#### 1. Desktop 4-Column Stepper Layout

**Test:** Open index.html in a browser at 1440px and 1024px width. Scroll to the "Consultoria primeiro. Tecnologia depois." section.
**Expected:** 4 step cards in a single horizontal row. Cyan connector lines visible between each adjacent pair (3 connectors total). No horizontal overflow.
**Why human:** CSS pseudo-element connectors and grid rendering require a real viewport.

#### 2. Mobile Vertical Timeline

**Test:** Resize viewport to 375px. Scroll to the process section.
**Expected:** 4 cards stack vertically. A short vertical connector appears between each adjacent pair. No horizontal scrollbar.
**Why human:** Responsive layout requires viewport simulation.

#### 3. Language Toggle — Process Section

**Test:** Click the PT/EN toggle in the navbar while viewing the process section.
**Expected:** Section title, subtitle, all 4 step titles, all 4 step descriptions, and the CTA button text all change language without page reload. Toggle back to PT restores all original strings.
**Why human:** i18n runtime behavior requires browser JavaScript execution.

#### 4. CTA Link

**Test:** Click the "Comece pelo diagnóstico — é gratuito" button at the bottom of the process section.
**Expected:** Opens https://wa.me/5521973495805 in a new browser tab.
**Why human:** Link resolution and target=_blank require browser interaction.

---

### Gaps Summary

None. All 7 must-haves verified against actual code. All 7 requirements (PROC-V2-01..05, SOL-V2-01, SOL-V2-02) are satisfied by evidence in index.html, script.js, and styles.css. The phase goal is achieved: the process stepper is expanded from 3 to 4 consultative steps with correct copy in both languages, the CSS grid is updated, the closing CTA links to the correct WhatsApp number, and the solutions section header reflects the new diagnosis-first framing while leaving all 6 service cards intact.

---

_Verified: 2026-04-14_
_Verifier: Claude (gsd-verifier)_
