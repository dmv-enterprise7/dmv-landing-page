# Phase 8: Hero + Final CTA Rewrite - Context

**Gathered:** 2026-04-14
**Status:** Ready for planning
**Mode:** Auto-generated (discuss skipped via workflow.skip_discuss)

<domain>
## Phase Boundary

First-time visitor lands on a hero that communicates the consultative positioning ("diagnosis first, then technology") and reaches a matching final CTA at the bottom — both sections speak the same new language and funnel to the diagnostic WhatsApp (`https://wa.me/5521973495805`).

**In scope:**
- Hero section copy (headline, sub-headline, CTAs, badges) — PT and EN
- Final CTA section copy (title, subtitle, button, badges) — PT and EN
- Anchor target for "Veja como funciona" secondary CTA (process section)
- WhatsApp number audit within these two sections only

**Out of scope:**
- Visual redesign (cores, fontes, layout, animações preservados)
- Copy changes elsewhere in the page (handled in later phases)
- Global WhatsApp audit (Phase 13)

</domain>

<decisions>
## Implementation Decisions

### Copy (PT — canonical)
- Hero headline: "Antes de automatizar, a gente entende onde seu negócio trava"
- Hero sub-headline: "Fazemos o diagnóstico dos seus processos, identificamos gargalos e só então desenhamos a IA sob medida que seu negócio realmente precisa."
- Hero primary CTA: "Agende seu Diagnóstico Gratuito"
- Hero secondary CTA: "Veja como funciona ↓" (anchor to process section)
- Hero badges: "Diagnóstico 100% gratuito · Sem compromisso · Resposta imediata"
- Final CTA title: "Pronto para descobrir onde seu negócio pode ir mais longe?"
- Final CTA subtitle: "Comece com um diagnóstico gratuito. Sem compromisso, sem enrolação."
- Final CTA button: "Falar com um especialista agora"
- Final CTA badges: "Sem compromisso · 100% gratuito · Resposta imediata"

### EN translations
- Mirror the PT consultative tone; preserve "diagnosis-first" framing
- Keep existing i18n mechanism (`data-i18n` keys + JS object) — no new infra

### Claude's Discretion
- Exact i18n key naming (extend existing keys vs add new ones)
- Whether secondary CTA is a styled link or button — match existing pattern
- Badge separator character (·) — preserve existing pattern unless inconsistent
- EN translations drafted by Claude within consultative tone guardrails

</decisions>

<code_context>
## Existing Code Insights

### Relevant files
- `index.html` — hero section + final CTA section markup with `data-i18n` attributes
- `script.js` — i18n object with PT/EN key-value pairs; `setLanguage()` function
- `styles.css` — hero styles (already use `btn-cta-hero`, `cta-pulse` animation)

### Established patterns
- i18n via `data-i18n="key"` attributes + JS object lookup
- CTA buttons reuse `btn-cta-hero` and `btn-cta-final` classes with `cta-pulse` animation
- Badges rendered as inline elements with `·` separator
- WhatsApp number present in `href="https://wa.me/5521973495805"` (already correct post-merge)

### Integration points
- Hero section `#hero` with subsections (headline, sub, CTAs, badges)
- Final CTA section near footer (separate section ID — verify in plan-phase)
- Anchor target `#como-funciona` or similar for secondary CTA

</code_context>

<specifics>
## Specific Ideas

- Preserve all existing visual styling, animations, layout
- Only text content + i18n keys change
- No new CSS classes expected
- No new JS behavior expected

</specifics>

<deferred>
## Deferred Ideas

None — scope is tight. Global WhatsApp audit deferred to Phase 13.

</deferred>
