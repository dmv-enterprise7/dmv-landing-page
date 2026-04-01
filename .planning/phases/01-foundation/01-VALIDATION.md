---
phase: 1
slug: foundation
status: draft
nyquist_compliant: false
wave_0_complete: true
created: 2026-04-01
---

# Phase 1 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | Manual browser testing (vanilla static site — no test framework) |
| **Config file** | none |
| **Quick run command** | Open `index.html` in browser directly, or `npx serve .` |
| **Full suite command** | Manual checklist at 375px / 768px / 1024px / 1440px breakpoints |
| **Estimated runtime** | ~5 minutes full checklist |

---

## Sampling Rate

- **After every task commit:** Open `index.html` in browser, verify the specific requirement visually
- **After every plan wave:** Full manual checklist at 375px and 1440px breakpoints
- **Before `/gsd:verify-work`:** All 16 requirements verified across 4 breakpoints
- **Max feedback latency:** ~2 minutes per task

---

## Per-Task Verification Map

| Task ID | Plan | Requirement | Test Type | Verification Method | Status |
|---------|------|-------------|-----------|---------------------|--------|
| 1-01-* | 01 | INFRA-01 | manual | Inspect DOM — 12 `<section id="...">` elements present | ⬜ pending |
| 1-01-* | 01 | INFRA-02 | manual | DevTools > :root computed styles show all --color-* and --font-* variables | ⬜ pending |
| 1-01-* | 01 | INFRA-03 | manual | DevTools > Network > filter:Font — Sora, DM Sans, JetBrains Mono loaded | ⬜ pending |
| 1-01-* | 01 | INFRA-04 | visual | Load page — colored blurred blobs (cyan, blue, purple) visible on dark bg | ⬜ pending |
| 1-01-* | 01 | INFRA-05 | visual | Load page — subtle star dots visible on dark background | ⬜ pending |
| 1-01-* | 01 | INFRA-06 | manual | DevTools Elements search — `data-i18n` attributes present on text elements | ⬜ pending |
| 1-02-* | 02 | NAV-01 | visual | Load at 1440px — logo visible left, nav links center, CTA right | ⬜ pending |
| 1-02-* | 02 | NAV-02 | manual | Click each nav link — page scrolls to correct section without navbar overlap | ⬜ pending |
| 1-02-* | 02 | NAV-03 | visual | PT/EN toggle buttons visible and small in header | ⬜ pending |
| 1-02-* | 02 | NAV-04 | manual | Inspect CTA anchor href — must equal `https://wa.me/5522981113794` | ⬜ pending |
| 1-02-* | 02 | NAV-05 | manual | Scroll down 50px — navbar gains backdrop-blur + shadow; scroll to top — reverts | ⬜ pending |
| 1-02-* | 02 | NAV-06 | manual | Resize to 375px — hamburger visible; tap it — drawer slides in from right; tap link — drawer closes | ⬜ pending |
| 1-02-* | 02 | I18N-01 | manual | Browser console — `translations.pt` and `translations.en` objects have identical key sets | ⬜ pending |
| 1-02-* | 02 | I18N-02 | manual | Click EN toggle — all visible text changes instantly, no reload | ⬜ pending |
| 1-02-* | 02 | I18N-03 | visual | Active language button visually highlighted (color/weight/underline difference) | ⬜ pending |
| 1-02-* | 02 | I18N-04 | manual | Switch to EN — read all text, confirm natural English phrasing (not literal translation) | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

No test framework needed — vanilla HTML/CSS/JS project. All validation is visual/manual through browser and DevTools.

**Existing infrastructure covers all phase requirements.**

Optional: `npx serve .` for local HTTP server (useful for testing font loading via CDN, but not required).

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Gradient blobs visible | INFRA-04 | Visual CSS effect, no DOM assertion | Load page, confirm non-flat colored blurs visible against #040810 bg |
| Starfield dots visible | INFRA-05 | Visual CSS pseudo-element, no DOM node | Load page, look for subtle white dots at low opacity |
| Navbar glassmorphism on scroll | NAV-05 | Requires user scroll interaction | Scroll > 50px, check DevTools computed backdrop-filter value |
| Mobile drawer slide-in | NAV-06 | Requires touch/click at mobile width | DevTools device mode at 375px, tap hamburger |
| EN text natural phrasing | I18N-04 | Semantic/linguistic quality judgment | Read all EN text after toggle, check it sounds like native English |

---

## Validation Sign-Off

- [ ] All tasks have verifiable acceptance criteria (grep-checkable or browser-inspectable)
- [ ] Sampling continuity: verify browser after each task commit
- [ ] Wave 0: no test framework needed, static files open directly
- [ ] No watch-mode flags
- [ ] Feedback latency < 2 minutes per task
- [ ] `nyquist_compliant: true` set in frontmatter when all above pass

**Approval:** pending
