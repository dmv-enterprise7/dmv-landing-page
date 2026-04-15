# Roadmap: DMV Enterprise Landing Page

## Overview

This roadmap delivers a high-conversion bilingual landing page for DMV Enterprise across multiple milestones. **v1.0** delivered the full landing in 7 phases (Foundation → Polish & QA). **v2.0 Repositioning Consultivo** continues in phases 8-13, transforming the copy/positioning from "AI execution agency" to "consulting + execution with diagnosis first" while preserving all visual design. The v2.0 changes are primarily content rewrites with one structural addition (Setores section) and one stepper expansion (3 → 4 steps).

---

# Milestone v1.0 — Initial Landing (Complete)

## Phases (v1.0)

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [x] **Phase 1: Foundation** - HTML structure, CSS system, fonts, background visuals, navbar, and i18n toggle (completed 2026-04-01)
- [x] **Phase 2: Hero + Floating CTA** - Hero section with all elements and the ever-present WhatsApp floating button (completed 2026-04-01)
- [x] **Phase 3: Market Data** - "Por que IA?" section with real statistics, counter animation, and transition CTA (completed 2026-04-01)
- [x] **Phase 4: Pain Points + Services** - Problem identification section and bento-grid service cards (completed 2026-04-01)
- [x] **Phase 5: Process + Differentials** - 3-step "How It Works" timeline and "Why DMV" arguments (completed 2026-04-01)
- [x] **Phase 6: About + FAQ + Final CTA + Footer** - Closing content sections that destroy objections and drive final conversion (completed 2026-04-01)
- [x] **Phase 7: Polish & QA** - Cross-cutting animations, responsive validation, performance, and accessibility (completed 2026-04-01)

## Phase Details (v1.0)

### Phase 1: Foundation
**Goal**: Visitor sees a professional dark cinematic page shell with working navbar, language toggle, and atmospheric background — the canvas is ready for content
**Depends on**: Nothing (first phase)
**Requirements**: INFRA-01, INFRA-02, INFRA-03, INFRA-04, INFRA-05, INFRA-06, NAV-01, NAV-02, NAV-03, NAV-04, NAV-05, NAV-06, I18N-01, I18N-02, I18N-03, I18N-04
**Success Criteria** (what must be TRUE):
  1. Page loads with dark cinematic background showing gradient blobs (cyan, blue, purple) and starfield — never a flat solid color
  2. Navbar is fixed at top with DMV logo, navigation links that scroll smoothly to section anchors, and a CTA button pointing to the WhatsApp link
  3. Navbar transitions from transparent to glassmorphism (backdrop-blur + shadow) when user scrolls down
  4. Language toggle in the header switches all page text between PT and EN instantly without reload, with the active language visually highlighted
  5. On mobile (375px), hamburger icon opens a slide-in drawer with nav links that close the drawer on tap
**Plans**: 2 plans
**UI hint**: yes

Plans:
- [x] 01-01-PLAN.md — HTML structure + CSS foundation (design tokens, gradient blobs, starfield, Google Fonts)
- [x] 01-02-PLAN.md — Navbar with glassmorphism + mobile drawer + i18n system (PT/EN toggle)

### Phase 2: Hero + Floating CTA
**Goal**: Visitor lands on a visually dominant hero section that communicates the value proposition and makes it effortless to reach WhatsApp from anywhere on the page
**Depends on**: Phase 1
**Requirements**: HERO-01, HERO-02, HERO-03, HERO-04, HERO-05, HERO-06, HERO-07, HERO-08, HERO-09, CTA-04, CTA-05, CTA-06
**Success Criteria** (what must be TRUE):
  1. Hero displays asymmetric layout on desktop (text 60% left, logo with atmospheric glow 40% right) and stacks vertically on mobile
  2. Hero headline is the visually largest element on the page, with badge above it, sub-headline below, primary CTA button with glow pointing to WhatsApp, secondary scroll link, and guarantee seal at the bottom
  3. Floating WhatsApp button is visible in the bottom-right corner on every viewport size, has pulse animation, shows "Fale conosco" tooltip on hover, and links to the correct WhatsApp URL
  4. Every CTA on the page (hero button, navbar button, floating button) resolves to `https://wa.me/5522981113794`
**Plans**: 2 plans
**UI hint**: yes

Plans:
- [x] 02-01-PLAN.md — Hero section HTML + CSS (asymmetric layout, badge, headline, CTAs, logo glow, seal, responsive, i18n keys)
- [x] 02-02-PLAN.md — Floating WhatsApp button (fixed positioning, pulse animation, hover tooltip, i18n tooltip key)

### Phase 3: Market Data
**Goal**: Visitor sees real market statistics that build urgency and credibility for AI adoption, replacing traditional social proof the company doesn't yet have
**Depends on**: Phase 2
**Requirements**: MARKET-01, MARKET-02, MARKET-03, MARKET-04, MARKET-05, MARKET-06, MARKET-07, ANIM-05
**Success Criteria** (what must be TRUE):
  1. "Por que IA?" section displays 4-6 data cards with large cyan numbers (JetBrains Mono), descriptive text, and discretely cited real sources (McKinsey, IBM, Tidio, Zendesk, etc.)
  2. Numbers animate from 0 to their final value when the section scrolls into the viewport (counter animation via IntersectionObserver)
  3. Section includes a compelling transition phrase and a CTA linking to WhatsApp below the data cards
  4. Data cards display in a horizontal row on desktop and stack vertically on mobile
**Plans**: 1 plan
**UI hint**: yes

Plans:
- [x] 03-01-PLAN.md -- Market data HTML + CSS + counter animation JS + i18n (6 data cards, transition CTA)

### Phase 4: Pain Points + Services
**Goal**: Visitor recognizes their own business frustrations in the pain points and immediately sees DMV's tailored solutions — building desire for the service
**Depends on**: Phase 3
**Requirements**: PAIN-01, PAIN-02, PAIN-03, PAIN-04, SERV-01, SERV-02, SERV-03, SERV-04, SERV-05
**Success Criteria** (what must be TRUE):
  1. "Isso e familiar?" section shows 4 pain points in a 2x2 grid on desktop (stacked on mobile), each with an SVG icon and a short direct phrase, with a distinct background gradient shift
  2. Cyan transition phrase below pain points connects to the services section
  3. Services section displays 6 real service cards in a bento-grid or asymmetric layout (not a generic 3x2 grid), each with glassmorphism styling, icon, bold title, and 2-line description
  4. Service cards respond to hover with cyan border, upward translate, and glow shadow effect
**Plans**: 2 plans
**UI hint**: yes

Plans:
- [x] 04-01-PLAN.md — Pain Points section (2x2 grid, SVG icons, gradient shift background, transition phrase, i18n)
- [x] 04-02-PLAN.md — Services section (bento-grid layout, 6 glassmorphism cards, hover glow, i18n)

### Phase 5: Process + Differentials
**Goal**: Visitor understands exactly how to get started (3 simple steps) and why DMV is the right choice — reducing friction and building confidence
**Depends on**: Phase 4
**Requirements**: PROC-01, PROC-02, PROC-03, PROC-04, PROC-05, PROC-06, DIFF-01, DIFF-02, DIFF-03
**Success Criteria** (what must be TRUE):
  1. "Simples assim" section shows 3 steps in a horizontal layout on desktop with a visual path/line connecting them, and switches to a vertical timeline on mobile
  2. Each step displays a styled number (01, 02, 03) in cyan JetBrains Mono, an icon, a title, and a description, followed by a CTA button linking to WhatsApp
  3. "Por que a DMV?" section presents 4 real differentials in a 2x2 grid or elegant list, each with icon, bold title, and description — no fabricated testimonials or metrics
**Plans**: 2 plans
**UI hint**: yes

Plans:
- [x] 05-01-PLAN.md — "Simples assim" How It Works section (3 steps, horizontal layout, connector line, numbered steps, CTA)
- [x] 05-02-PLAN.md — "Por que a DMV?" Differentials section (2x2 glassmorphism grid, 4 differentials, icon+title+desc)

### Phase 6: About + FAQ + Final CTA + Footer
**Goal**: Visitor meets the team behind DMV, gets every objection answered in the FAQ, faces one last high-impact conversion moment, and sees a professional footer — the page is content-complete
**Depends on**: Phase 5
**Requirements**: ABOUT-01, ABOUT-02, ABOUT-03, ABOUT-04, FAQ-01, FAQ-02, FAQ-03, FAQ-04, FAQ-05, CTA-01, CTA-02, CTA-03, FOOT-01, FOOT-02
**Success Criteria** (what must be TRUE):
  1. About section presents the 3 founders by name (bold) with a mission statement and "Driven Mind Vanguard" badge — no photos, just text and a subtle decorative element
  2. FAQ section shows 6 real questions in an accordion that opens/closes with smooth max-height transition, "+" icon rotates 45 degrees to "x" on expand, and aria-expanded attributes are present
  3. Final CTA section has a dramatic background (intense cyan blob), enormous glowing WhatsApp button with pulse animation, and reinforcement badges below
  4. Footer displays DMV logo, repeated navigation links, WhatsApp icon, copyright, and tagline
**Plans**: 2 plans
**UI hint**: yes

Plans:
- [x] 06-01-PLAN.md — About section (founders mission + bold names + decorative logo glow + badge) + FAQ accordion (6 questions, max-height, icon rotation, aria-expanded)
- [x] 06-02-PLAN.md — Final CTA section (dramatic cyan blob, oversized glow button, 3 badges) + Footer (3-column layout, logo, nav links, WhatsApp icon, copyright)

### Phase 7: Polish & QA
**Goal**: The complete page is polished, performant, fully responsive, accessible, and bilingual — ready for production deployment
**Depends on**: Phase 6
**Requirements**: ANIM-01, ANIM-02, ANIM-03, ANIM-04, RESP-01, RESP-02, RESP-03, RESP-04, PERF-01, PERF-02, PERF-03, PERF-04, PERF-05
**Success Criteria** (what must be TRUE):
  1. All sections have scroll-reveal animations (fade-in + translateY with stagger) triggered by IntersectionObserver, CTA buttons pulse continuously, and gradient blobs have slow or static movement
  2. Page displays correctly at all 4 breakpoints (375px, 768px, 1024px, 1440px) with zero horizontal overflow
  3. Touch targets are at least 44px on mobile, text is legible without zoom at 375px, and all animations use only GPU-friendly properties (transform, opacity)
  4. Focus states are visible (cyan outline) on all interactive elements, alt text exists on all images, WCAG AA contrast is met on all text, and no placeholder/Lorem Ipsum content remains
  5. Language toggle switches every text element on the page correctly in both PT and EN, and English translations read naturally (not literal)
**Plans**: 2 plans

Plans:
- [x] 07-01-PLAN.md — Animations (scroll reveal CSS+JS, verify CTA pulse and card hovers)
- [x] 07-02-PLAN.md — Responsive + Accessibility audit and fixes

## Progress (v1.0)

**Execution Order:**
Phases execute in numeric order: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundation | 2/2 | Complete | 2026-04-01 |
| 2. Hero + Floating CTA | 2/2 | Complete   | 2026-04-01 |
| 3. Market Data | 1/1 | Complete | 2026-04-01 |
| 4. Pain Points + Services | 2/2 | Complete | 2026-04-01 |
| 5. Process + Differentials | 2/2 | Complete | 2026-04-01 |
| 6. About + FAQ + Final CTA + Footer | 2/2 | Complete | 2026-04-01 |
| 7. Polish & QA | 2/2 | Complete | 2026-04-01 |

---

# Milestone v2.0 — Repositioning Consultivo

## Overview (v2.0)

Reposition the landing page from "AI execution agency" to "consulting + execution with diagnosis first." This is a **brownfield copy/content repositioning** — visual design (colors, fonts, layout base, animations) is preserved. Changes cluster into 6 phases covering: hero + final CTA rewrites (conversion bookends), mid-funnel copy swaps (provocation + market data), structural stepper expansion (3→4 steps) + solutions copy, a brand new "Setores Atendidos" section (the single biggest structural change), closing content revamp (differentials + founders with photos + FAQ), and a final meta/WhatsApp global audit pass.

## Phases (v2.0)

- [ ] **Phase 8: Hero + Final CTA Rewrite** - New consultative headlines and CTAs at the top and bottom conversion moments
- [ ] **Phase 9: Provocação + Dados de Mercado** - "Isso é familiar?" becomes provocative questions; market section title and closing phrase realigned
- [ ] **Phase 10: Processo 4 Passos + Soluções** - Expand stepper from 3 to 4 steps (Raio-X → Mapa → Construção → Acompanhamento) and rewrite solutions header
- [ ] **Phase 11: Setores Atendidos (nova seção)** - New sector grid section between Soluções and Diferenciais with navigation entries
- [ ] **Phase 12: Diferenciais + Quem Somos + FAQ** - Consultative differentials, founder mini-bios with photos, and diagnosis-oriented FAQ
- [ ] **Phase 13: Meta + WhatsApp Global Audit** - Meta tags refresh and full audit of every WhatsApp link across HTML/JS

## Phase Details (v2.0)

### Phase 8: Hero + Final CTA Rewrite
**Goal**: First-time visitor lands on a hero that communicates the consultative positioning ("diagnosis first, then technology") and reaches a matching final CTA at the bottom — both sections speak the same new language and funnel to the diagnostic WhatsApp
**Depends on**: Phase 7 (v1.0 complete)
**Requirements**: HERO-V2-01, HERO-V2-02, HERO-V2-03, HERO-V2-04, HERO-V2-05, CTA-V2-01, CTA-V2-02, CTA-V2-03
**Success Criteria** (what must be TRUE):
  1. Hero headline reads "Antes de automatizar, a gente entende onde seu negócio trava" (PT) / English equivalent, with consultative sub-headline explaining diagnosis-first approach
  2. Hero primary CTA reads "Agende seu Diagnóstico Gratuito" and secondary CTA "Veja como funciona ↓" anchors to the process section
  3. Hero badges reworded to "Diagnóstico 100% gratuito · Sem compromisso · Resposta imediata"
  4. Final CTA section title reads "Pronto para descobrir onde seu negócio pode ir mais longe?" with diagnostic-framed subtitle and button "Falar com um especialista agora"
  5. Every hero and final-CTA WhatsApp link resolves to `https://wa.me/5521973495805` (no stale numbers remain in these sections)
**Plans**: 2 plans
**UI hint**: yes

Plans:
- [ ] 08-01-PLAN.md — Hero section rewrite (headline, sub-headline, CTAs, badges) in index.html + script.js PT/EN
- [ ] 08-02-PLAN.md — Final CTA section rewrite (title, subtitle, button, badges) in index.html + script.js PT/EN

### Phase 9: Provocação + Dados de Mercado
**Goal**: Visitor moves through the mid-funnel and encounters provocative diagnostic questions instead of pain statements, then sees market data framed as urgency for diagnosis ("who starts right, starts with diagnosis")
**Depends on**: Phase 8
**Requirements**: PROV-01, PROV-02, PROV-03, MARK-V2-01, MARK-V2-02, MARK-V2-03
**Success Criteria** (what must be TRUE):
  1. The former "Isso é familiar?" section now titled "Você sabe onde está perdendo dinheiro?" with 4 provocative question cards (leads frios, etapas manuais, tempo em tarefas IA-resolvíveis, qualidade dependente de plantão)
  2. Provocação section closes with "A maioria das empresas não sabe responder essas perguntas. Nosso trabalho começa exatamente aí."
  3. Market data section title reads "O mercado já se moveu. E o seu negócio?" with closing phrase reframed around diagnosis timing
  4. All market statistics and cited sources (McKinsey, IBM, Tidio, Zendesk, MDPI, Sales So) are preserved — only titles and framing change
  5. All new copy has PT + EN translations via `data-i18n` keys and reads naturally in both languages
**Plans**: TBD
**UI hint**: yes

### Phase 10: Processo 4 Passos + Soluções
**Goal**: Visitor understands the full 4-step consultative process (Raio-X do Negócio → Mapa de Oportunidades → Construção Sob Medida → Acompanhamento e Otimização) and immediately after sees that solutions emerge from the diagnosis, not from a catalog
**Depends on**: Phase 9
**Requirements**: PROC-V2-01, PROC-V2-02, PROC-V2-03, PROC-V2-04, PROC-V2-05, SOL-V2-01, SOL-V2-02
**Success Criteria** (what must be TRUE):
  1. Process section now titled "Consultoria primeiro. Tecnologia depois." with subtitle "Nosso processo existe para garantir que cada solução resolve o problema certo."
  2. Stepper shows 4 steps (Raio-X, Mapa de Oportunidades, Construção Sob Medida, Acompanhamento e Otimização) each with numbered badge, icon, title, description, in PT + EN
  3. Visual connector (line/gradient) between steps is adapted for 4 items on desktop and flows as vertical timeline on mobile without overflow
  4. Process section closing CTA reads "Comece pelo diagnóstico — é gratuito" and links to `https://wa.me/5521973495805`
  5. Solutions section title reads "Soluções que nascem do diagnóstico" with new subtitle; the 6 existing service cards retain their internal copy
**Plans**: TBD
**UI hint**: yes

### Phase 11: Setores Atendidos (nova seção)
**Goal**: Visitor sees the 6 real sectors DMV serves (Clínicas, E-commerces, Escritórios, Prestadores de Serviço, Educação, Imobiliárias) as a new grid section between Soluções and Diferenciais, and the site navigation reflects this new anchor
**Depends on**: Phase 10
**Requirements**: SECT-01, SECT-02, SECT-03, SECT-04, SECT-05, SECT-06, SECT-07
**Success Criteria** (what must be TRUE):
  1. A new "Setores que já transformamos com IA" section exists in the DOM between the Soluções and Diferenciais sections with a semantic ID anchor
  2. Grid displays 6 sector cards (Clínicas e Consultórios, E-commerces, Escritórios e Consultorias, Prestadores de Serviço, Educação e Cursos, Imobiliárias), each with a consistent SVG/FontAwesome icon and label
  3. Section closes with "Se o seu negócio atende clientes, a IA pode ajudar. Agende o diagnóstico e descubra como."
  4. Navbar and footer navigation include a new link that scrolls to the Setores section
  5. Grid is responsive (3 columns desktop / 2 tablet / 1 mobile) with no horizontal overflow and visual style (glassmorphism, paleta, tipografia) consistent with existing sections
  6. All new copy has complete PT/EN `data-i18n` keys and toggling language updates every text element in the new section
**Plans**: TBD
**UI hint**: yes

### Phase 12: Diferenciais + Quem Somos + FAQ
**Goal**: Visitor finishes the persuasion arc with consultative differentials, meets the 3 founders with real photos and specialties, and has all diagnosis-oriented objections answered in the FAQ
**Depends on**: Phase 11
**Requirements**: DIFF-V2-01, DIFF-V2-02, ABOUT-V2-01, ABOUT-V2-02, ABOUT-V2-03, ABOUT-V2-04, ABOUT-V2-05, FAQ-V2-01, FAQ-V2-02
**Success Criteria** (what must be TRUE):
  1. Diferenciais section titled "Por que a DMV?" with subtitle "Não somos mais uma agência. Somos parceiros de diagnóstico e resultado." and 4 new cards (Diagnóstico antes de tudo, Visão de processo não de ferramenta, Honestidade técnica, Parceria de longo prazo) in PT + EN
  2. "Quem Somos" section displays 3 founder mini-bios using `foto-vitor.jpg`, `foto-mariel.jpg`, `foto-daniel.jpg`, each with photo + name + specialty (Vitor Pellegrino — Estratégia & Automação; Mariel Junior — IA & Desenvolvimento; Daniel Jachelli — Análise de Dados & Otimização)
  3. Founder cards are visually consistent with existing design (glassmorphism, paleta, fotos em formato circular ou card) and responsive across breakpoints
  4. FAQ section shows 6 rewritten diagnosis-oriented questions (custo / tecnologia / segmento / tempo / reunião / suporte) in PT + EN, preserving the existing accordion behavior (max-height transition, single-open, icon rotation, aria-expanded)
  5. Language toggle updates every new text element in these three sections without erasing layout or photos
**Plans**: TBD
**UI hint**: yes

### Phase 13: Meta + WhatsApp Global Audit
**Goal**: Search engines, social previews, and every single CTA on the page reflect the new consultative positioning and the correct WhatsApp number — no stale copy or stale links remain anywhere
**Depends on**: Phase 12
**Requirements**: META-01, META-02, META-03, META-04
**Success Criteria** (what must be TRUE):
  1. `<meta name="description">` reads "Consultoria e automação com IA sob medida. Diagnosticamos seus processos, identificamos gargalos e implementamos soluções inteligentes para o seu negócio."
  2. `<title>` and any OG/Twitter meta variants reflect the consultative positioning
  3. Full-file audit confirms every WhatsApp link in `index.html` and `script.js` resolves to `https://wa.me/5521973495805` — zero stale numbers remain
  4. Footer navigation links are synchronized with v2.0 sections (includes Setores entry) and scroll correctly to every anchor on the page
**Plans**: TBD

## Progress (v2.0)

**Execution Order:**
Phases execute in numeric order: 8 -> 9 -> 10 -> 11 -> 12 -> 13

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 8. Hero + Final CTA Rewrite | 0/- | Not started | - |
| 9. Provocação + Dados de Mercado | 0/- | Not started | - |
| 10. Processo 4 Passos + Soluções | 0/- | Not started | - |
| 11. Setores Atendidos (nova seção) | 0/- | Not started | - |
| 12. Diferenciais + Quem Somos + FAQ | 0/- | Not started | - |
| 13. Meta + WhatsApp Global Audit | 0/- | Not started | - |
