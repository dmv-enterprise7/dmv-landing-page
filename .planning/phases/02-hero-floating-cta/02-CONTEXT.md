# Phase 2: Hero + Floating CTA - Context

**Gathered:** 2026-04-01
**Status:** Ready for planning
**Mode:** Auto-generated (discuss skipped via workflow.skip_discuss)

<domain>
## Phase Boundary

Visitor lands on a visually dominant hero section that communicates the value proposition and makes it effortless to reach WhatsApp from anywhere on the page.

</domain>

<decisions>
## Implementation Decisions

### Locked Decisions (from prompt-dmv.md)
- Layout assimétrico desktop: texto à esquerda (60%), logo com glow à direita (40%)
- Mobile: empilhado, logo centralizada abaixo do texto
- Badge acima da headline: "✦ Agência de Automação com IA" — font-mono, cor ciano, fundo glass pill
- Headline: "Seu negócio no piloto automático com Inteligência Artificial" — clamp(2.5rem, 5vw, 4.5rem), font-weight: 800
- Sub-headline: "Criamos assistentes virtuais e automações sob medida..."
- CTA primário: botão com glow ciano + pulse animation → https://wa.me/5522981113794
- CTA secundário: link "Ver como funciona ↓" → scroll suave para #how-it-works
- Logo DMV à direita com box-shadow radial ciano (glow atmosférico)
- Selo: "Demonstração 100% gratuita · Sem compromisso · Resposta imediata"
- Floating WhatsApp: fixed bottom-right, SVG verde, circular, pulse, z-index 9999, tooltip "Fale conosco"

### Claude's Discretion
- Estrutura CSS interna do hero (grid vs flexbox)
- Dimensões exatas do glow na logo
- Animação pulse do CTA (duração e scale exatos)

</decisions>

<specifics>
## Specific Ideas

- WhatsApp CTA link: https://wa.me/5522981113794
- Paleta já definida no styles.css (fases anteriores): --color-cyan, --color-text, etc.
- Logo já renomeada para Logo_dmv.jpg
- Sistema i18n já implementado — hero deve usar data-i18n em todos os textos
- i18n keys para hero: hero.badge, hero.headline, hero.subheadline, hero.cta-primary, hero.cta-secondary, hero.seal, hero.seal-1, hero.seal-2, hero.seal-3

</specifics>

<deferred>
## Deferred Ideas

Seção do hero pode ganhar animação de partículas no futuro (v2) — por ora apenas o glow da logo e o background da Phase 1.

</deferred>
