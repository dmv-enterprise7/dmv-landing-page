# Phase 5: Process + Differentials - Context

**Gathered:** 2026-04-01
**Status:** Ready for planning
**Mode:** Auto-generated (discuss skipped)

<domain>
## Phase Boundary

Visitor understands exactly how to get started (3 simple steps) and why DMV is the right choice — reducing friction and building confidence.

</domain>

<decisions>
## Implementation Decisions

### How It Works Section (PROC)
- Section ID: #how-it-works (already in index.html)
- Title PT: "Simples assim" / EN: "Simple as that"
- Subtitle PT: "Tres passos para transformar o seu negocio com IA" / EN: "Three steps to transform your business with AI"
- 3 steps in horizontal layout on desktop, vertical timeline on mobile
- Numbers 01, 02, 03 in ciano JetBrains Mono, large (48-56px)
- Visual connector line between steps on desktop (::after pseudo-element, gradient from cyan to transparent)
- 3 real steps:
  1. "Conversa Inicial" — "Entendemos seu negocio, seus processos e seus objetivos em uma reuniao gratuita."
  2. "Solucao Sob Medida" — "Desenvolvemos o sistema de IA ideal para o seu caso — sem templates genericos."
  3. "Resultados na Pratica" — "Implementamos, treinamos e acompanhamos os resultados junto com voce."
- CTA below: "Comecar agora — e 100% gratuito" -> https://wa.me/5522981113794
- Icons: inline SVG, simple and expressive

### Differentials Section (DIFF)
- Section ID: #differentials (already in index.html)
- Title PT: "Por que a DMV?" / EN: "Why DMV?"
- Subtitle: "Nao somos mais uma agencia. Somos parceiros de resultado."
- 4 differentials in grid 2x2 layout
- Each: icon SVG (left, 48px) + titulo bold + descricao 2 linhas
- 4 real differentials:
  1. "100% Personalizado" — "Nenhum sistema identico ao outro. Cada solucao e criada do zero para o seu negocio."
  2. "Atendimento Humano e Proximo" — "Voce fala diretamente com quem cria. Sem intermediarios, sem rodeios."
  3. "Foco em Resultado Pratico" — "Nao vendemos tecnologia por tecnologia. Cada sistema tem um ROI claro."
  4. "Funciona 24 horas, 7 dias" — "Seus assistentes nunca dormem. Atendimento e automacao rodando sempre."

### Claude's Discretion
- Exato estilo do connector line entre os passos (gradient, opacity, height)
- Icones SVG inline para cada passo e cada diferencial
- Se os diferenciais usam cards glassmorphism ou layout mais clean/minimalista

</decisions>

<specifics>
## Specific Ideas

- Section IDs #how-it-works e #differentials ja existem em index.html
- Todos os textos com data-i18n para toggle PT/EN
- Icones inline SVG (sem dependencia externa)
- Conector visual entre os passos pode ser ::after em cada step (exceto o ultimo)

</specifics>

<deferred>
## Deferred Ideas

Animacao de entrada dos passos (stagger) — sera tratado na Phase 7 (scroll reveal global).

</deferred>
