# Phase 13: Meta + WhatsApp Global Audit - Context

**Gathered:** 2026-04-15
**Status:** Ready for planning
**Mode:** Auto-generated (discuss skipped)

<domain>
## Phase Boundary

Search engines, social previews, and every single CTA on the page reflect the new consultative positioning and the correct WhatsApp number — no stale copy or stale links remain anywhere.

**In scope:**
- `<title>` and `<meta name="description">` refreshed with consultative positioning (PT default)
- OG/Twitter meta tags aligned with new positioning (title, description, image if referenced)
- Full audit of `wa.me/` links in `index.html` and `script.js` — all must resolve to `https://wa.me/5521973495805`
- Footer navigation links synced with v2.0 sections (includes Setores); anchors scroll correctly

**Out of scope:**
- Copy changes in other sections (already done in phases 8-12)
- New sections
</domain>

<decisions>
## Implementation Decisions

### Meta tags (PT canonical — default lang)
- Title: "DMV Enterprise — Consultoria e Automação com IA sob Medida"
- Meta description: "Consultoria e automação com IA sob medida. Diagnosticamos seus processos, identificamos gargalos e implementamos soluções inteligentes para o seu negócio."
- OG title: same as `<title>`
- OG description: same as meta description
- Twitter card: same title + description

### WhatsApp canonical number
- Canonical: `https://wa.me/5521973495805`
- Must appear in every CTA link in `index.html` and any `href` template in `script.js`
- Zero stale numbers (e.g., `55219...` variations, old numbers) must remain

### Footer navigation sync
- Footer nav should include: Início/Home, Soluções/Solutions, Setores/Sectors, Processo/Process, Diferenciais/Differentials, Quem Somos/About, FAQ, Contato/Contact (or mirror of navbar)
- All anchor targets must resolve to existing section IDs
- Language-toggle labels wired via `data-i18n`

### Claude's Discretion
- Exact EN title/description variants (consultative tone, same structure)
- Whether existing OG/Twitter tags already carry EN versions or only single-lang
- Which sections count as "footer nav" entries (minimum: match current navbar)
</decisions>

<code_context>
## Existing Code Insights

### Relevant files
- `index.html` — `<head>` meta tags; footer navigation list; every `wa.me` href throughout
- `script.js` — i18n strings for meta (if any); any templated wa.me links in JS (e.g., floating button handler)

### Audit approach
- grep for `wa.me` across `index.html` and `script.js` — count matches, verify each is `5521973495805`
- grep for any legacy number patterns (e.g., `5521` prefixes) to confirm no stale values
</code_context>

<specifics>
## Specific Ideas
- Phase is deliberately small — 1 or 2 plans (meta + audit) depending on planner's discretion
- No visual/layout changes
- Successful audit = zero stale numbers + all footer anchors clickable + meta tags match spec
</specifics>

<deferred>
## Deferred Ideas
None.
</deferred>
