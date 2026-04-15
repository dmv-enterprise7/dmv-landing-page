# Phase 10: Processo 4 Passos + Soluções - Context

**Gathered:** 2026-04-14
**Status:** Ready for planning
**Mode:** Auto-generated (discuss skipped)

<domain>
## Phase Boundary

Visitor understands the 4-step consultative process and sees solutions framed as emerging from diagnosis.

**In scope:**
- Process section: title, subtitle, 3 → 4 steps (structural), step copy, visual connector adapted, closing CTA
- Solutions section: title + subtitle rewrite (6 service cards untouched)
- PT + EN for all new copy

**Out of scope:**
- Modifying the 6 solution card internals
- Redesigning card visual style
</domain>

<decisions>
## Implementation Decisions

### Process section (PT — canonical)
- Title: "Consultoria primeiro. Tecnologia depois."
- Subtitle: "Nosso processo existe para garantir que cada solução resolve o problema certo."
- Step 1 — Raio-X do Negócio: "Estudamos seus processos reais, entrevistamos quem opera no dia a dia e mapeamos cada etapa do seu fluxo. Nada de achismo."
- Step 2 — Mapa de Oportunidades: "Identificamos onde a IA faz sentido — e onde não faz. Apresentamos um diagnóstico honesto com prioridades claras."
- Step 3 — Construção Sob Medida: "Desenvolvemos a solução de IA desenhada especificamente para os gargalos que encontramos. Sem templates genéricos."
- Step 4 — Acompanhamento e Otimização: "Não entregamos e sumimos. Monitoramos resultados, ajustamos e evoluímos a solução junto com seu negócio."
- Closing CTA: "Comece pelo diagnóstico — é gratuito" → `https://wa.me/5521973495805`

### Process section (EN)
- Title: "Consulting first. Technology after."
- Subtitle: "Our process exists to ensure each solution fixes the right problem."
- Step 1 — Business X-Ray: "We study your real processes, interview the people who operate daily, and map every step of your workflow. No guesswork."
- Step 2 — Opportunity Map: "We identify where AI makes sense — and where it doesn't. We present an honest diagnosis with clear priorities."
- Step 3 — Tailor-Made Build: "We develop the AI solution designed specifically for the bottlenecks we found. No generic templates."
- Step 4 — Follow-up and Optimization: "We don't deliver and disappear. We monitor results, adjust, and evolve the solution with your business."
- Closing CTA: "Start with the diagnosis — it's free"

### Solutions section (PT)
- Title: "Soluções que nascem do diagnóstico"
- Subtitle: "Cada sistema que criamos é único — porque cada negócio tem gargalos diferentes."

### Solutions section (EN)
- Title: "Solutions born from diagnosis"
- Subtitle: "Every system we build is unique — because every business has different bottlenecks."

### Structural change
- Current step count: 3 → New: 4
- Add one new step card to the process stepper
- Update visual connector (line/gradient) to accommodate 4 items on desktop
- Preserve vertical timeline on mobile (ensure no overflow)

### Claude's Discretion
- Exact icon choice per step (keep style consistent with existing icons)
- i18n key naming for new step 4
- Whether step numbers are shown as `01/02/03/04` or `1/2/3/4` — match existing pattern
</decisions>

<code_context>
## Existing Code Insights

### Relevant files
- `index.html` — process section (3 step cards) + solutions section
- `script.js` — `process.*` and `solutions.*` i18n keys (PT + EN)
- `styles.css` — step card connector styles (::after line for desktop, ::before for mobile per phase 05 notes)

### Established patterns from v1.0
- Step cards use connector line `::after` on `:not(:last-child)` — this selector auto-adapts to 4 items
- Mobile timeline uses `::before` vertical connector at 768px breakpoint
- Numbered badges with icons (SVG inline)

### Integration points
- `#how-it-works` or `#processo` section ID (preserve)
- `#solutions` or `#servicos` section ID (preserve)
</code_context>

<specifics>
## Specific Ideas
- Preserve visual design language; only structural change is +1 step card
- CSS may need minor tweaks if stepper grid is explicitly `grid-template-columns: repeat(3, 1fr)` → must become `repeat(4, 1fr)` for desktop
</specifics>

<deferred>
## Deferred Ideas
None.
</deferred>
