# Phase 3: Market Data - Context

**Gathered:** 2026-04-01
**Status:** Ready for planning
**Mode:** Auto-generated (discuss skipped)

<domain>
## Phase Boundary

Visitor sees real market statistics that build urgency and credibility for AI adoption, replacing traditional social proof the company doesn't yet have.

</domain>

<decisions>
## Implementation Decisions

### Locked Decisions (from prompt-dmv.md)
- Seção title PT: "O mercado já se moveu. E o seu negócio?" / EN: "The market has already moved. Has your business?"
- Subtítulo PT: "Empresas que adotam IA estão crescendo mais rápido..." / EN: "Companies adopting AI are growing faster..."
- 6 data cards com números grandes (JetBrains Mono, 48-64px) em ciano
- Layout: 3-4 blocos em linha no desktop, stack em mobile, separadores sutis
- Counter animation via IntersectionObserver — count de 0 ao valor final
- Fontes dos dados discretas (11-12px, cor muted) abaixo de cada número
- Frase de transição em destaque após os dados
- CTA abaixo: "Descubra o que a IA pode fazer pelo seu negócio — é grátis" → WhatsApp

### Data to use (verified from prompt-dmv.md):
- 78% — McKinsey State of AI 2025
- 4.8× — IBM Research
- 62% — Tidio Research
- 70% — Zendesk/Flowlyn
- ~46% — MDPI Academic Study 2025
- 24/7 — Fullview Research (64% consumers)
- 67% — Sales So / Industry Data

### Counter animation implementation:
- IntersectionObserver on .stat-number elements
- data-target attribute with final value (numeric)
- Animated from 0 to data-target over ~2s
- Works for integers, decimals (4.8), and special values (24/7 — non-numeric, no animation)

</decisions>

<specifics>
## Specific Ideas

- Section ID: #why-ai (already in index.html from Phase 1)
- Use data-i18n for all text elements
- Fontes dos dados: cada card tem fonte discreta abaixo — não fabricar, usar fontes reais do prompt
- Frase de transição: "A pergunta não é SE você vai usar IA. É QUANDO. E quem começa antes, sai na frente."
- Counter JS deve ser adicionado ao script.js existente

</specifics>

<deferred>
## Deferred Ideas

Gráficos animados ou charts para os dados — desnecessário para v1, dados já têm impacto visual suficiente.

</deferred>
