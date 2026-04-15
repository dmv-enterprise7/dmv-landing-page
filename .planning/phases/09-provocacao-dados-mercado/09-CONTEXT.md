# Phase 9: Provocação + Dados de Mercado - Context

**Gathered:** 2026-04-14
**Status:** Ready for planning
**Mode:** Auto-generated (discuss skipped via workflow.skip_discuss)

<domain>
## Phase Boundary

Visitor moves through the mid-funnel and encounters provocative diagnostic questions instead of pain statements, then sees market data framed as urgency for diagnosis.

**In scope:**
- Pain Points section → Provocação section: title, 4 cards, closing line (PT + EN)
- Market Data section: title + closing line reframe (PT + EN)
- Statistics/numbers/sources preserved unchanged

**Out of scope:**
- Visual layout changes (preserve card grid, counter animation, data layout)
- Removing/adding statistics
- Other sections

</domain>

<decisions>
## Implementation Decisions

### Provocação Copy (PT — canonical)
- Section title: "Você sabe onde está perdendo dinheiro?"
- Card 1: "Quantos leads esfriaram porque ninguém respondeu em 5 minutos?"
- Card 2: "Você sabe quantas etapas manuais seu time repete todo dia sem necessidade?"
- Card 3: "Já mediu quanto tempo sua equipe gasta em tarefas que uma IA resolve em segundos?"
- Card 4: "Seu atendimento muda de qualidade dependendo de quem está no plantão?"
- Closing line: "A maioria das empresas não sabe responder essas perguntas. Nosso trabalho começa exatamente aí."

### Provocação EN
- Section title: "Do you know where you're losing money?"
- Card 1: "How many leads went cold because no one responded within 5 minutes?"
- Card 2: "Do you know how many manual steps your team repeats every day without need?"
- Card 3: "Have you measured how much time your team spends on tasks AI solves in seconds?"
- Card 4: "Does your service quality change depending on who's on shift?"
- Closing: "Most businesses can't answer these questions. That's exactly where our work begins."

### Market Data Copy (PT)
- Section title: "O mercado já se moveu. E o seu negócio?"
- Closing phrase: "A pergunta não é SE você vai usar IA. É QUANDO. E quem começa com diagnóstico, começa certo."

### Market Data EN
- Section title: "The market has already moved. What about your business?"
- Closing: "The question isn't IF you'll use AI. It's WHEN. And those who start with diagnosis start right."

### Preservation rules
- Keep all statistics (78%, 4.8x, 62%, 70%, ~46%, 67%) and sources (McKinsey, IBM, Tidio, Zendesk, MDPI, Sales So) exactly as-is
- Keep counter animation, layout, IntersectionObserver behavior
- Keep existing i18n keys; modify values in place (prefer) or add new keys if section IDs differ

### Claude's Discretion
- Exact i18n key naming
- Whether to rename section IDs (e.g. `#pain-points` → stays as-is internally; displayed title changes)
- Whether "provocação" section retains current card styling or keeps visual treatment identical

</decisions>

<code_context>
## Existing Code Insights

### Relevant files
- `index.html` — pain-points section + market-data section
- `script.js` — i18n keys for both sections (PT + EN)
- `styles.css` — no changes

### Patterns
- Section IDs stay stable (internal anchor links depend on them); only visible copy changes
- i18n via `data-i18n` attributes with PT/EN values in `translations` object

</code_context>

<specifics>
## Specific Ideas

- Preserve visual layout (card grid, counter, sources)
- Only text content + i18n values change

</specifics>

<deferred>
## Deferred Ideas

None.
</deferred>
