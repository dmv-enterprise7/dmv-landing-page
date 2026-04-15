# DMV Enterprise Landing Page

## What This Is

Landing page de alta conversão, bilíngue (PT/EN) para a **DMV Enterprise** (Driven Mind Vanguard) — consultoria + agência de automação com IA para pequenos e médios negócios. O objetivo único é convencer donos de PMEs a clicar no CTA de WhatsApp para agendar um **diagnóstico gratuito**.

## Core Value

Todo CTA apontando corretamente para `https://wa.me/5521973495805` e visível em todos os dispositivos — se o visitante chegar ao WhatsApp para agendar diagnóstico, a página cumpriu seu propósito.

## Current Milestone: v2.0 Repositioning Consultivo

**Goal:** Repaginar a landing page para refletir o novo posicionamento — de "agência executora" para "consultoria + execução com diagnóstico primeiro".

**Target features:**
- Hero reescrito: headline "Antes de automatizar, a gente entende onde seu negócio trava" + CTA "Agende seu Diagnóstico Gratuito"
- Seção de provocação (perguntas) substitui seção de dor atual ("Isso é familiar?")
- Processo de 4 passos (Raio-X → Mapa de Oportunidades → Construção Sob Medida → Acompanhamento) substitui os 3 atuais
- Nova seção "Setores que Atendemos" (grid 6 setores com ícones)
- Diferenciais reescritos com tom consultivo (Diagnóstico antes de tudo, Visão de processo, Honestidade técnica, Parceria longo prazo)
- Seção "Quem Somos" com mini-bios dos 3 fundadores usando fotos existentes
- FAQ reescrito (6 perguntas orientadas ao diagnóstico)
- Copy dos dados de mercado e do CTA final alinhados ao novo posicionamento
- Meta tags (title + description) atualizadas
- WhatsApp correto em TODOS os CTAs: `https://wa.me/5521973495805`

## Requirements

### Validated

- [x] 12 seções completas: Navbar, Hero, Dados de Mercado, Pain Points, Serviços, Como Funciona, Diferenciais, Sobre, FAQ, CTA Final, Footer, Floating WhatsApp (v1.0)
- [x] Design premium cinematográfico: background escuro com gradient blobs, glassmorphism, tipografia editorial (v1.0)
- [x] Toggle bilíngue PT/EN via `data-i18n` attributes (v1.0)
- [x] Floating WhatsApp button sempre visível (v1.0)
- [x] Counter animation nos dados de mercado via IntersectionObserver (v1.0)
- [x] FAQ accordion com max-height transition (v1.0)
- [x] Navbar transparente → glassmorphism ao scrollar (v1.0)
- [x] Mobile hamburger → drawer lateral (v1.0)
- [x] Responsivo mobile-first: 375px / 768px / 1024px / 1440px (v1.0)
- [x] Scroll reveal via IntersectionObserver (v1.0)
- [x] Dados de mercado com fontes citadas (McKinsey, IBM, Zendesk, Tidio, MDPI) (v1.0)
- [x] Performance: animações GPU-friendly, Google Fonts com display=swap (v1.0)
- [x] Acessibilidade WCAG AA (v1.0)

### Active

(Definidas em REQUIREMENTS.md para milestone v2.0)

### Out of Scope

- Depoimentos ou cases com dados fictícios — empresa está começando, zero fabricação
- Backend, banco de dados, formulários com envio de email — conversão 100% via WhatsApp
- CMS, painel de admin ou sistema de edição — página estática
- Métricas de performance fabricadas ("98% satisfação", "50+ clientes") — não existem ainda
- Bibliotecas CSS externas (Bootstrap, Tailwind) — CSS customizado para fidelidade visual
- Redesign visual (cores, fontes, layout base) — v2.0 é reposicionamento de copy + 1 seção nova, não redesign

## Context

- **Empresa:** DMV Enterprise (Driven Mind Vanguard), fundada por **Mariel Junior**, **Vitor Pellegrino** e **Daniel Jachelli**
- **Novo posicionamento (v2.0):** Consultoria + execução — estudam a empresa, mapeiam fluxos/gargalos e SÓ DEPOIS desenham e implementam a solução de IA. Diagnóstico primeiro, tecnologia depois.
- **Serviços reais:** Assistentes virtuais 24h, automação de processos, fluxos WhatsApp, web apps customizadas, qualificação de leads, gestão de agenda
- **Setores atendidos:** Clínicas e consultórios, E-commerces, Escritórios e consultorias, Prestadores de serviço, Educação e cursos, Imobiliárias
- **Diferencial:** Diagnóstico antes de tudo + visão de processo + honestidade técnica + parceria de longo prazo
- **Público-alvo:** Donos de PMEs brasileiros — maioria mobile, chegam via WhatsApp
- **WhatsApp:** `https://wa.me/5521973495805`
- **Logo:** `Logo_dmv.jpg` (disponível na raiz do projeto)
- **Fotos fundadores:** `foto-vitor.jpg`, `foto-mariel.jpg`, `foto-daniel.jpg` (na raiz)
- **Paleta:** `#040810` fundo · `#00c8ff` ciano (CTAs/glows) · `#1a4fd4` azul · `#6b3fa0` roxo · `#e8ecf4` texto · `#8a95a8` secundário
- **Tipografia:** `Sora`/`Outfit` headlines · `DM Sans`/`Plus Jakarta Sans` body · `JetBrains Mono` números/dados

## Constraints

- **Conteúdo:** Zero dados fabricados — apenas informações verificáveis do contexto real fornecido
- **Identidade visual:** Paleta e tipografia definidas — NUNCA Inter, Roboto, Arial, Space Grotesk ou system fonts
- **Fontes:** Google Fonts apenas, com `display=swap` e `preconnect`
- **JS:** Apenas para IntersectionObserver, toggle de idioma e FAQ accordion — animações em CSS puro
- **Stack:** HTML + CSS + JS vanilla para máxima portabilidade (sem build step, sem framework)
- **v2.0:** Preservar design visual existente (cores, fontes, layout base, animações). A mudança é de conteúdo/copy + 1 seção nova (Setores), não redesign.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Stack vanilla HTML/CSS/JS | Portabilidade máxima, sem build step, entrega direto no browser | v1.0 validated |
| i18n via `data-i18n` + objeto JS | Troca instantânea sem biblioteca, sem reload | v1.0 validated |
| Design cinematográfico com gradient blobs | Denominador comum das 3 referências Dribbble | v1.0 validated |
| CTA único via WhatsApp | Objetivo único = agenda diagnóstico grátis, sem dispersão | v1.0 validated |
| Reposicionamento consultivo (v2.0) | Diferenciar-se de agências executoras, elevar ticket, atrair PMEs que valorizam estratégia | v2.0 active |
| Fotos dos fundadores usadas (v2.0) | Mini-bios ganham força visual; fotos já existem no repo | v2.0 active |
| WhatsApp atualizado para `5521973495805` | Número oficial confirmado pelo time; já corrigido no código | v2.0 active |

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
*Last updated: 2026-04-14 — Milestone v2.0 Repositioning Consultivo started*
