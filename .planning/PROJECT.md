# DMV Enterprise Landing Page

## What This Is

Landing page de alta conversão, bilíngue (PT/EN) para a **DMV Enterprise** (Driven Mind Vanguard) — agência brasileira especializada em automações inteligentes e web apps com IA para pequenos e médios negócios. O objetivo único é convencer donos de PMEs a clicar no CTA de WhatsApp para agendar uma demonstração gratuita.

## Core Value

Todo CTA apontando corretamente para `https://wa.me/5522981113794` e visível em todos os dispositivos — se o visitante chegar ao WhatsApp, a página cumpriu seu propósito.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] 12 seções completas: Navbar fixa, Hero assimétrico, Dados de Mercado ("Por que IA?"), Pain Points, Serviços (bento-grid), Como Funciona (3 passos), Diferenciais, Sobre a DMV, FAQ accordion, CTA Final, Footer, Floating WhatsApp button
- [ ] Design premium cinematográfico: background escuro (#040810–#0a1020) com gradient blobs desfocados (cyan, azul, roxo), glassmorphism nos cards, tipografia editorial de alto impacto
- [ ] Toggle bilíngue PT/EN funcional via `data-i18n` attributes, troca instantânea sem reload
- [ ] Todos os CTAs direcionam para `https://wa.me/5522981113794`
- [ ] Floating WhatsApp button sempre visível (fixed, z-index 9999, pulse animation)
- [ ] Counter animation nos dados de mercado ao entrar na viewport (IntersectionObserver)
- [ ] FAQ accordion com max-height transition suave e rotate no ícone
- [ ] Navbar transparente no topo → glassmorphism ao scrollar (backdrop-filter: blur)
- [ ] Mobile hamburger → drawer lateral com animação slide-in
- [ ] Responsivo mobile-first: 375px / 768px / 1024px / 1440px — zero overflow horizontal
- [ ] Scroll reveal via IntersectionObserver: fade-in + translateY com stagger
- [ ] Dados de mercado com fontes citadas discretamente (McKinsey, IBM, Zendesk, Tidio, MDPI)
- [ ] Performance: animações GPU-friendly (transform/opacity), Google Fonts com display=swap + preconnect
- [ ] Acessibilidade WCAG AA: contraste, focus states, alt texts, aria-expanded nos accordions

### Out of Scope

- Depoimentos ou cases com dados fictícios — empresa está começando, zero fabricação
- Backend, banco de dados, formulários com envio de email — conversão 100% via WhatsApp
- CMS, painel de admin ou sistema de edição — página estática
- Fotos dos fundadores — apenas nomes em bold no texto
- Métricas de performance fabricadas ("98% satisfação", "50+ clientes") — não existem ainda
- Bibliotecas CSS externas (Bootstrap, Tailwind) — CSS customizado para fidelidade visual

## Context

- **Empresa:** DMV Enterprise (Driven Mind Vanguard), fundada por **Mariel Junior**, **Vitor Pellegrino** e **Daniel Jachelli**
- **Serviços reais:** Assistentes virtuais 24h, automação de processos, fluxos WhatsApp, web apps customizadas, qualificação de leads, gestão de agenda
- **Diferencial:** Atendimento próximo + sistemas 100% personalizados + prompts refinados + foco em resultado prático
- **Público-alvo:** Donos de PMEs brasileiros — maioria mobile, chegam via WhatsApp
- **WhatsApp:** `https://wa.me/5522981113794`
- **Logo:** `Logo_dmv.jpg` (disponível na raiz do projeto)
- **Paleta:** `#040810` fundo · `#00c8ff` ciano (CTAs/glows) · `#1a4fd4` azul · `#6b3fa0` roxo · `#e8ecf4` texto · `#8a95a8` secundário
- **Tipografia:** `Sora`/`Outfit` headlines · `DM Sans`/`Plus Jakarta Sans` body · `JetBrains Mono` números/dados
- **Referências visuais:** Instinct (Lazarev Agency), EqtyLab (Awsmd), AI Sales Landing Page — profundidade cinematográfica + polish sofisticado + clareza de conversão

## Constraints

- **Conteúdo:** Zero dados fabricados — apenas informações verificáveis do contexto real fornecido
- **Identidade visual:** Paleta e tipografia definidas — NUNCA Inter, Roboto, Arial, Space Grotesk ou system fonts
- **Fontes:** Google Fonts apenas, com `display=swap` e `preconnect`
- **JS:** Apenas para IntersectionObserver, toggle de idioma e FAQ accordion — animações em CSS puro
- **Stack:** HTML + CSS + JS vanilla para máxima portabilidade (sem build step, sem framework)

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Stack vanilla HTML/CSS/JS | Portabilidade máxima, sem build step, entrega direto no browser | — Pending |
| i18n via `data-i18n` + objeto JS | Troca instantânea sem biblioteca, sem reload, sem localStorage restrito | — Pending |
| Design cinematográfico com gradient blobs | Denominador comum das 3 referências Dribbble (Instinct/EqtyLab/AI Sales LP) | — Pending |
| Sem seção de depoimentos/cases | Empresa iniciante — prova social via dados de mercado reais (McKinsey/IBM/Zendesk) | — Pending |
| CTA único via WhatsApp | Objetivo único da página = agenda demo grátis, sem dispersão de canais | — Pending |

## Evolution

Este documento evolui a cada fase e milestone.

**Após cada transição de phase** (via `/gsd:transition`):
1. Requisitos invalidados? → Mover para Out of Scope com motivo
2. Requisitos validados? → Mover para Validated com referência da phase
3. Novos requisitos emergiram? → Adicionar em Active
4. Decisões a registrar? → Adicionar em Key Decisions
5. "What This Is" ainda é preciso? → Atualizar se derivou

**Após cada milestone** (via `/gsd:complete-milestone`):
1. Revisão completa de todas as seções
2. Core Value check — ainda é a prioridade certa?
3. Auditar Out of Scope — motivos ainda válidos?
4. Atualizar Context com estado atual

---
*Last updated: 2026-04-01 after initialization*
