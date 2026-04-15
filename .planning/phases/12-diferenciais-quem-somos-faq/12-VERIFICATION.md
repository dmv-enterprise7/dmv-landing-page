---
phase: 12-diferenciais-quem-somos-faq
verified: 2026-04-15T00:00:00Z
status: passed
score: 7/7 must-haves verified (9/9 requirements satisfied)
human_verification:
  - test: "Visual check of differentials section — 4 cards render with new titles + SVG icons preserved, glassmorphism intact"
    expected: "4 cards: Diagnóstico antes de tudo / Visão de processo / Honestidade técnica / Parceria de longo prazo"
    why_human: "Visual layout, spacing, glow/glassmorphism aesthetics not programmatically checkable"
  - test: "Click each FAQ question and toggle EN/PT language"
    expected: "Single-open accordion with max-height transition, + icon rotates, only one open at a time; all 6 Q/A pairs swap to English on lang switch"
    why_human: "Real-time accordion + i18n behavior requires browser interaction"
  - test: "Founder photos render circular/glow, lazy-load, no broken images"
    expected: "3 founder photos visible: Vitor / Mariel / Daniel with name + specialty under each"
    why_human: "Visual rendering of photos and circular framing not checkable via grep"
---

# Phase 12: Diferenciais + Quem Somos + FAQ Verification Report

**Phase Goal:** Consultative differentials (4 cards under "Por que a DMV?"), 3 founders with photos + specialties under "Quem está por trás da DMV?", 6 diagnosis-oriented FAQ questions. All PT+EN. Accordion behavior preserved.
**Verified:** 2026-04-15
**Status:** passed
**Re-verification:** No — initial verification

## Goal Achievement

### Observable Truths

| #   | Truth                                                                          | Status     | Evidence                                                                                              |
| --- | ------------------------------------------------------------------------------ | ---------- | ----------------------------------------------------------------------------------------------------- |
| 1   | Differentials section shows "Por que a DMV?" + consultative subtitle           | ✓ VERIFIED | index.html:389-390 (PT) + script.js:222-223 (EN)                                                       |
| 2   | 4 differential cards with new consultative titles + descriptions (PT + EN)     | ✓ VERIFIED | index.html:404,417,430,445 (PT titles + descs); script.js:222-231 (EN)                                |
| 3   | About section shows "Quem está por trás da DMV?" + 3-founder intro + tagline   | ✓ VERIFIED | index.html:459 (title), 460 (intro), 462 (tagline); script.js:235-236 (EN)                            |
| 4   | 3 founder cards render with photo + name + specialty (PT + EN)                 | ✓ VERIFIED | index.html:466-486 (3 cards with foto-vitor/mariel/daniel.jpg + names + specialties); EN at 237-239   |
| 5   | 6 FAQ questions are diagnosis-oriented (PT + EN)                               | ✓ VERIFIED | index.html:501,510,519,528,537,546 (PT); script.js:244,246,248,250,252,254 (EN)                       |
| 6   | FAQ accordion behavior preserved (single-open, aria-expanded, max-height)      | ✓ VERIFIED | script.js:434-465 — handler intact: faqBtns.forEach, single-open loop, aria-expanded toggle, .open    |
| 7   | All 3 founder photo files exist on disk                                        | ✓ VERIFIED | foto-vitor.jpg (7584b), foto-mariel.jpg (10728b), foto-daniel.jpg (18147b) all present at root        |

**Score:** 7/7 truths verified

### Required Artifacts

| Artifact | Expected | Status | Details |
| -------- | -------- | ------ | ------- |
| `index.html` (differentials) | 4 cards with new titles, new subtitle, "Por que a DMV?" | ✓ VERIFIED | Lines 386-452: all 4 titles + descs + subtitle present |
| `index.html` (about) | Title + intro + tagline + 3 founder cards w/ photos + specialties | ✓ VERIFIED | Lines 454-490: title, about.intro paragraph, about.tagline, 3 founder-cards w/ founder-specialty span |
| `index.html` (FAQ) | 6 new diagnosis-oriented questions w/ accordion markup intact | ✓ VERIFIED | Lines 492-554: 6 .faq-item with .faq-btn, aria-expanded, aria-controls, .faq-answer preserved |
| `script.js` (PT i18n) | diff/about/faq PT keys updated | ✓ VERIFIED | PT block: 'about.tagline':106, 'about.intro' present; faq.q1-6/a1-6 present |
| `script.js` (EN i18n) | diff/about/faq EN keys updated | ✓ VERIFIED | EN block lines 222-254: all 9 diff keys, about.intro/tagline/founder1-3.specialty, faq.q1-6/a1-6 |
| `script.js` (FAQ handler) | Accordion handler unchanged | ✓ VERIFIED | Lines 433-465: identical single-open pattern, aria-expanded toggle, .open class on panel |
| `styles.css` (.founder-specialty) | New rule for specialty text | ✓ VERIFIED | Line 1889: `.founder-specialty { display: block; ... JetBrains Mono; }` |
| `foto-vitor.jpg` | Founder photo present | ✓ VERIFIED | 7584 bytes |
| `foto-mariel.jpg` | Founder photo present | ✓ VERIFIED | 10728 bytes |
| `foto-daniel.jpg` | Founder photo present | ✓ VERIFIED | 18147 bytes |

### Key Link Verification

| From | To | Via | Status | Details |
| ---- | -- | --- | ------ | ------- |
| index.html `data-i18n="diff.*"` | script.js translations.diff.* | i18n attribute lookup | ✓ WIRED | All 4 PT/EN diff keys present in both files |
| index.html `data-i18n="about.intro/tagline/founderN.specialty"` | script.js translations.about.* | i18n attribute lookup | ✓ WIRED | Keys present in both PT and EN blocks |
| index.html `data-i18n="faq.q/a 1-6"` | script.js translations.faq.* | i18n attribute lookup | ✓ WIRED | All 12 FAQ keys present in both PT and EN |
| index.html `<img src="foto-*.jpg">` | filesystem foto-*.jpg | static file ref | ✓ WIRED | All 3 files present at root, loading="lazy" applied |
| index.html `.faq-btn` w/ aria-controls | script.js faqBtns handler | DOM querySelector | ✓ WIRED | querySelectorAll('.faq-btn') matches 6 buttons; toggle logic intact |

### Data-Flow Trace (Level 4)

| Artifact | Data Variable | Source | Produces Real Data | Status |
| -------- | ------------- | ------ | ------------------ | ------ |
| Diferenciais cards | data-i18n diff.* | script.js translations object (static literals) | Yes — real consultative copy in PT + EN | ✓ FLOWING |
| Founder cards | data-i18n about.founderN.specialty + static img src | script.js + filesystem photos | Yes — real strings + real photo files | ✓ FLOWING |
| FAQ Q/A | data-i18n faq.q*/a* | script.js translations | Yes — real diagnosis-oriented Q/A | ✓ FLOWING |

### Behavioral Spot-Checks

| Behavior | Command | Result | Status |
| -------- | ------- | ------ | ------ |
| Photo files load (existence) | ls foto-*.jpg | 3 files present | ✓ PASS |
| Old copy fully removed | grep "100% Personalizado\|Funciona 24 horas" in index.html/script.js/styles.css | 0 matches in production files | ✓ PASS |
| FAQ handler binds 6 buttons | grep .faq-btn count in index.html | 6 .faq-btn occurrences | ✓ PASS |
| Live accordion + lang toggle | (browser interaction) | n/a | ? SKIP — routed to human verification |

### Requirements Coverage

| Requirement | Source Plan | Description | Status | Evidence |
| ----------- | ----------- | ----------- | ------ | -------- |
| DIFF-V2-01 | 12-01 | New diff title "Por que a DMV?" + consultative subtitle | ✓ SATISFIED | index.html:389-390; script.js:222-223 |
| DIFF-V2-02 | 12-01 | 4 replacement cards (Diagnóstico/Visão/Honestidade/Parceria) | ✓ SATISFIED | index.html:404,417,430,445; script.js:224-231 |
| ABOUT-V2-01 | 12-02 | New title "Quem está por trás da DMV?" | ✓ SATISFIED | index.html:459; EN at script.js (about.title) |
| ABOUT-V2-02 | 12-02 | 3-founder intro paragraph | ✓ SATISFIED | index.html:460; script.js:235 (EN) |
| ABOUT-V2-03 | 12-02 | Tagline "Driven Mind Vanguard..." | ✓ SATISFIED | index.html:462; script.js:236 (EN) |
| ABOUT-V2-04 | 12-02 | 3 founder cards w/ photos + names | ✓ SATISFIED | index.html:466-486 + foto-*.jpg files present |
| ABOUT-V2-05 | 12-02 | Specialty line under each founder name | ✓ SATISFIED | index.html:471,478,485; script.js:237-239 (EN); styles.css:1889 |
| FAQ-V2-01 | 12-03 | 6 rewritten diagnosis-oriented questions (PT + EN) | ✓ SATISFIED | index.html:501,510,519,528,537,546; script.js:244-254 |
| FAQ-V2-02 | 12-03 | Accordion behavior preserved | ✓ SATISFIED | script.js:433-465 handler unchanged; markup with aria-expanded/aria-controls intact |

**9/9 requirements satisfied.**

### Anti-Patterns Found

| File | Line | Pattern | Severity | Impact |
| ---- | ---- | ------- | -------- | ------ |
| (none) | — | — | — | No TODO/FIXME/PLACEHOLDER/stub patterns found in modified files |

### Human Verification Required

See frontmatter `human_verification` block. Three items require browser-based confirmation:
1. **Visual check of differentials section** — 4 cards layout + glassmorphism
2. **Click each FAQ question + toggle EN/PT** — accordion + i18n live behavior
3. **Founder photos render circular/glow** — visual rendering quality

### Gaps Summary

No gaps. All 9 requirements satisfied across the 3 plans (12-01 Diferenciais, 12-02 Quem Somos, 12-03 FAQ). All 7 derived truths verified with concrete file/line evidence. Old copy ("100% Personalizado", "Funciona 24 horas") fully removed from production files (only remaining mentions are in planning docs, which is expected). FAQ accordion handler preserved verbatim — single-open behavior, aria-expanded toggle, .open class management all intact. Photo files present on disk with correct filenames matching index.html src refs. i18n contract maintained: every data-i18n key in HTML has matching PT and EN entries in script.js translations object.

The phase achieved its goal. Three browser-side checks remain for visual/behavioral confirmation (listed in human_verification frontmatter).

---

_Verified: 2026-04-15_
_Verifier: Claude (gsd-verifier)_
