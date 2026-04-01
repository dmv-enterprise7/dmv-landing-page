# Phase 4: Pain Points + Services - Context

**Gathered:** 2026-04-01
**Status:** Ready for planning
**Mode:** Auto-generated (discuss skipped)

<domain>
## Phase Boundary

Visitor recognizes their own business frustrations in the pain points and immediately sees DMV's tailored solutions — building desire for the service.

</domain>

<decisions>
## Implementation Decisions

### Pain Points Section
- Title PT: "Isso é familiar?" / EN: "Does this sound familiar?"
- Fundo com gradiente shift sutil (diferente do background principal)
- 4 pain points em grid 2×2 desktop, stack mobile
- Cada pain point: ícone SVG inline + frase curta e direta
- Pain points reais:
  1. "Perde clientes porque demora para responder"
  2. "WhatsApp comercial virou uma bagunça"
  3. "Preso em tarefas manuais que não acabam"
  4. "Atendimento que muda de qualidade conforme o dia"
- Frase de transição ciano centralizada: "A DMV resolve cada um desses problemas com Inteligência Artificial."

### Services Section
- Title PT: "Soluções sob medida para o seu negócio" / EN: "Custom-built solutions for your business"
- Subtítulo: "Cada sistema que criamos é único..."
- 6 cards em bento-grid ou layout assimétrico (NÃO grid 3×2 genérico)
- Cada card: glassmorphism + ícone SVG + título bold + descrição 2 linhas
- Hover: border-color ciano + translate-y(-4px) + glow shadow (0.3s ease)
- Serviços reais:
  1. Assistentes Virtuais com IA
  2. Automação de Processos
  3. Fluxos Inteligentes de WhatsApp
  4. Web Apps Customizadas
  5. Qualificação Automática de Leads
  6. Gestão Inteligente de Agenda

### Claude's Discretion
- Layout exato do bento-grid (sugestão: cards 1 e 2 maiores, demais menores)
- Ícones SVG inline (usar SVGs simples e expressivos)

</decisions>

<specifics>
## Specific Ideas

- Section IDs já em index.html: #pain-points e #services
- Todos os textos com data-i18n para toggle PT/EN
- Ícones inline SVG (não dependência externa)

</specifics>

<deferred>
## Deferred Ideas

Animações de entrada dos cards de serviço — será tratado na Phase 7 (scroll reveal global).

</deferred>
