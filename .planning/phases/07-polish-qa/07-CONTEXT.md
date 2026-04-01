# Phase 7: Polish & QA - Context

**Gathered:** 2026-04-01
**Status:** Ready for planning
**Mode:** Auto-generated (discuss skipped)

<domain>
## Phase Boundary

The complete page is polished, performant, fully responsive, accessible, and bilingual — ready for production deployment.

</domain>

<decisions>
## Implementation Decisions

### Scroll Reveal (ANIM-01)
- IntersectionObserver on all section content elements
- Animation: fade-in + translateY(30px -> 0) via CSS class toggle
- Initial state: `.reveal` class on elements = `opacity: 0; transform: translateY(30px)`
- Revealed state: `.reveal.revealed` = `opacity: 1; transform: translateY(0); transition: opacity 0.6s ease, transform 0.6s ease`
- Stagger: `transition-delay` on sibling elements (0ms, 100ms, 200ms, 300ms...)
- Threshold: 0.15 — trigger when 15% of element is in viewport
- Elements to add .reveal: section titles (h2), subtitles, cards (pain-card, stat-card, service-card, diff-card, step-card, faq-item), about content, CTA final inner
- Disconnect observer after reveal for performance

### CTA Pulse (ANIM-02)
- Already implemented in Phase 2 for hero CTA (cta-pulse keyframes)
- Apply same pulse to btn-cta-final (the large Final CTA button)
- Check if cta-pulse is already on .btn-cta-final

### Gradient Blobs (ANIM-03)
- Background blobs should have a very slow floating animation (60s+ duration)
- OR leave as static (simpler, no jank) — static is preferred for performance
- If blobs already have animation, verify it is 60s+ or make static

### Hover Cards (ANIM-04)
- Already implemented in Phase 4 and 5 for service-card and diff-card
- Verify pain-card, stat-card also have hover transitions
- stat-card hover was added in Phase 3

### Responsive Fixes (RESP-01 to RESP-04)
- Audit all 4 breakpoints: 375px, 768px, 1024px, 1440px
- Fix any overflow issues
- Ensure touch targets >= 44px (buttons, nav links, FAQ accordion triggers)
- Font sizes legible at 375px without zoom

### Accessibility (PERF-01 to PERF-05)
- PERF-01: Verify all animations use only transform/opacity (already the case by design)
- PERF-02: Add descriptive alt text to Logo_dmv.jpg usages (hero logo, footer logo, about logo)
- PERF-03: Add focus styles: `outline: 2px solid var(--color-cyan); outline-offset: 3px` to all interactive elements (a, button) via :focus-visible
- PERF-04: Text contrast verification — all text uses design tokens (--color-text, --color-text-secondary) on dark backgrounds — should be WCAG AA
- PERF-05: Final content audit — no lorem ipsum, no placeholder text remaining

### i18n Final Audit
- Verify setLanguage switches ALL text elements — check for any hard-coded text that was missed
- Ensure no duplicate keys

</decisions>

<specifics>
## Specific Ideas

- Scroll reveal JS should be added to script.js (Part 8: scroll reveal)
- CSS for reveal states appended to styles.css
- Focus styles: global rule targeting a:focus-visible, button:focus-visible, .faq-btn:focus-visible
- All alt="" attributes on Logo_dmv.jpg should be descriptive ("Logo DMV Enterprise" or similar)
- The navbar brand link uses Logo_dmv.jpg — check its alt attribute
- Do NOT add placeholder content — only fix/audit existing content

</specifics>

<deferred>
## Deferred Ideas

No further deferrals — this is the final phase for v1.

</deferred>
