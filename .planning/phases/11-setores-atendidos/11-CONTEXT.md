# Phase 11: Setores Atendidos (nova seção) - Context

**Gathered:** 2026-04-14
**Status:** Ready for planning
**Mode:** Auto-generated (discuss skipped)

<domain>
## Phase Boundary

Add an entirely new section "Setores que já transformamos com IA" between Soluções and Diferenciais. Include nav entries.

**In scope:**
- New HTML section with 6 sector cards (icon + label)
- New CSS for the sector grid (responsive 3/2/1 columns)
- New i18n keys for all text (PT + EN)
- Navbar + Footer links pointing to the new section
- JS: ensure scroll reveal IntersectionObserver picks up new section
- JS: language toggle updates new section

**Out of scope:**
- Changes to other sections
</domain>

<decisions>
## Implementation Decisions

### Section structure
- Section ID: `#sectors` (or `#setores` — planner picks one, must be consistent across HTML + nav)
- Placement: immediately after `#services` (solutions), before `#differentials`
- Title (PT): "Setores que já transformamos com IA"
- Title (EN): "Sectors we've already transformed with AI"
- Closing line (PT): "Se o seu negócio atende clientes, a IA pode ajudar. Agende o diagnóstico e descubra como."
- Closing line (EN): "If your business serves clients, AI can help. Schedule your diagnosis and find out how."

### Six sectors (PT / EN pairs)
1. Clínicas e Consultórios / Clinics & Medical Offices
2. E-commerces / E-commerces
3. Escritórios e Consultorias / Offices & Consulting Firms
4. Prestadores de Serviço / Service Providers
5. Educação e Cursos / Education & Courses
6. Imobiliárias / Real Estate

### Icons
- Inline SVG per sector (consistent stroke/style with existing SVG icons in the page)
- Claude picks icon motifs: clinic (cross/stethoscope), e-commerce (cart/bag), office (briefcase), service (wrench/gear), education (cap/book), real-estate (house/building)

### Grid
- Desktop: 3 columns
- Tablet (≤1024px): 2 columns
- Mobile (≤768px): 1 column
- Use same glassmorphism/paleta tokens as existing cards (`--color-bg-card`, `--color-border-subtle`, etc.)
- Card layout: icon on top, label below (simple, readable)

### Nav + Footer integration
- Navbar: add "Setores" link (between existing links) with anchor `#sectors`
- Mobile drawer: matching entry
- Footer: add "Setores" link in navigation list
- EN nav label: "Sectors"

### i18n keys (proposed)
- `sectors.title`
- `sectors.closing`
- `sectors.s1.label` through `sectors.s6.label`
- `nav.sectors`

### Claude's Discretion
- Exact icon SVG paths (use simple stroke icons)
- Hover effect on sector cards (match existing card hover patterns)
- Whether to add a subtitle between title and grid (not required)
</decisions>

<code_context>
## Existing Code Insights

### Relevant files
- `index.html` — insert section between #services and #differentials; update navbar + footer
- `script.js` — add i18n keys; ensure scroll reveal observes new elements (may already be automatic via `.reveal` class)
- `styles.css` — add sector grid styles (reuse existing tokens where possible)

### Patterns to reuse
- Section wrapper structure (`<section class="section" id="...">`)
- Container with `max-width` + padding
- Card glassmorphism (`background`, `border`, `backdrop-filter`)
- Scroll reveal: elements marked `.reveal` + stagger delay
- i18n: `data-i18n="key"` attribute + translations object

### Integration points
- Insert between current `#services` and `#differentials` sections
- Add nav link in navbar (desktop + mobile drawer) and footer
</code_context>

<specifics>
## Specific Ideas
- Keep CSS additions scoped to `.sectors-grid .sector-card` classes to avoid conflicts
- Reuse `.reveal` class for scroll animation

</specifics>

<deferred>
## Deferred Ideas
None.
</deferred>
