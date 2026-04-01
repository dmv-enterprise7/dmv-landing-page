# Requirements: DMV Enterprise Landing Page

**Defined:** 2026-04-01
**Core Value:** Todo CTA apontando para `https://wa.me/5522981113794` e visível em todos os dispositivos — se o visitante chegar ao WhatsApp, a página cumpriu seu propósito.

---

## v1 Requirements

### Foundation (INFRA)

- [ ] **INFRA-01**: Estrutura HTML semântica com 12 seções identificadas por IDs de navegação
- [ ] **INFRA-02**: Variáveis CSS completas para paleta (#040810, #00c8ff, #1a4fd4, #6b3fa0, #e8ecf4, #8a95a8, #5a6578, #1a2440), tipografia e espaçamentos
- [ ] **INFRA-03**: Google Fonts carregando Sora (headlines), DM Sans (body) e JetBrains Mono (números) com `preconnect` e `display=swap`
- [ ] **INFRA-04**: Background base com gradient blobs desfocados (cyan + azul + roxo) usando `filter: blur(80-120px)` — nunca fundo flat/sólido
- [ ] **INFRA-05**: Starfield estático via CSS pseudo-elementos (pontos pequenos simulando estrelas)
- [ ] **INFRA-06**: Sistema de i18n via objeto JS com todas as chaves PT/EN e atributos `data-i18n` em todos os elementos de texto

### Navigation (NAV)

- [ ] **NAV-01**: Navbar fixa no topo com logo DMV (`Logo_dmv.jpg`) à esquerda e links de navegação centrais
- [ ] **NAV-02**: Links de navegação: Serviços | Como Funciona | Por que IA? | Sobre Nós | FAQ — scroll suave para seção
- [ ] **NAV-03**: Toggle PT | EN no header — pequeno, discreto, funcional
- [ ] **NAV-04**: Botão CTA "Agendar Demo Grátis" à direita → WhatsApp
- [ ] **NAV-05**: Navbar transparente no topo → glassmorphism (backdrop-filter: blur) ao scrollar com sombra sutil
- [ ] **NAV-06**: Menu mobile: ícone hamburger → drawer lateral com animação slide-in e fechamento ao clicar em link

### Hero Section (HERO)

- [ ] **HERO-01**: Layout assimétrico desktop — texto à esquerda (60%) / logo com efeito à direita (40%)
- [ ] **HERO-02**: Badge/tag acima da headline: "✦ Agência de Automação com IA" — font-mono, cor ciano, fundo glass pill
- [ ] **HERO-03**: Headline principal enorme e bold: "Seu negócio no piloto automático com Inteligência Artificial" — `font-size: clamp(2.5rem, 5vw, 4.5rem)`, `font-weight: 800`
- [ ] **HERO-04**: Sub-headline de suporte 1-2 frases explicando o serviço em PT e EN
- [ ] **HERO-05**: Botão CTA primário com glow ciano + pulse animation → WhatsApp
- [ ] **HERO-06**: Link CTA secundário "Ver como funciona ↓" com scroll suave para seção How It Works
- [ ] **HERO-07**: Logo DMV exibida à direita com efeito de glow atmosférico (box-shadow radial ciano) integrada ao background como se navegasse no espaço
- [ ] **HERO-08**: Selo inferior "Demonstração 100% gratuita · Sem compromisso · Resposta imediata" com ícone de check
- [ ] **HERO-09**: Layout responsivo — empilhado em mobile (full-width, logo centralizada abaixo do texto)

### Market Data Section (MARKET)

- [ ] **MARKET-01**: Seção "Por que IA?" com título e subtítulo impactantes
- [ ] **MARKET-02**: 4-6 cards/blocos de dados com número grande em ciano (JetBrains Mono, 48-64px) + descrição em cinza + fonte do dado em texto muted (11-12px)
- [ ] **MARKET-03**: Dados reais usados: 78% (McKinsey), 4.8× (IBM), 62% (Tidio), 70% (Zendesk), ~46% (MDPI), 24/7 (Fullview), 67% (Sales So) — escolher 4-6 mais impactantes
- [ ] **MARKET-04**: Counter animation via IntersectionObserver — números contam de 0 ao valor final ao entrar na viewport
- [ ] **MARKET-05**: Frase de transição em destaque após os dados
- [ ] **MARKET-06**: CTA de transição "Descubra o que a IA pode fazer pelo seu negócio — é grátis" → WhatsApp
- [ ] **MARKET-07**: Layout 3-4 blocos em linha no desktop, stack em mobile com separadores sutis

### Pain Points (PAIN)

- [ ] **PAIN-01**: Seção "Isso é familiar?" com fundo levemente diferente (gradiente shift)
- [ ] **PAIN-02**: 4 pain points em grid 2×2 desktop / stack mobile, cada um com ícone SVG + frase curta e direta
- [ ] **PAIN-03**: Os 4 pain points reais: "Perde clientes porque demora para responder" / "WhatsApp comercial virou uma bagunça" / "Preso em tarefas manuais que não acabam" / "Atendimento que muda de qualidade conforme o dia"
- [ ] **PAIN-04**: Frase de transição ciano centralizada: "A DMV resolve cada um desses problemas com Inteligência Artificial."

### Services (SERV)

- [ ] **SERV-01**: Seção "Soluções sob medida para o seu negócio" com subtítulo
- [ ] **SERV-02**: 6 cards de serviço em bento-grid ou layout assimétrico (NÃO grid 3×2 genérico)
- [ ] **SERV-03**: Serviços reais: Assistentes Virtuais com IA / Automação de Processos / Fluxos Inteligentes de WhatsApp / Web Apps Customizadas / Qualificação Automática de Leads / Gestão Inteligente de Agenda
- [ ] **SERV-04**: Cada card: glassmorphism (rgba(255,255,255,0.04) + backdrop-blur) + ícone + título bold + descrição 2 linhas
- [ ] **SERV-05**: Hover nos cards: border-color ciano + translate-y(-4px) + box-shadow glow (0.3s ease)

### How It Works (PROC)

- [ ] **PROC-01**: Seção "Simples assim" com 3 passos em linha horizontal no desktop
- [ ] **PROC-02**: Linha/path conectando os 3 passos visualmente
- [ ] **PROC-03**: Números grandes estilizados (01, 02, 03) em ciano, JetBrains Mono
- [ ] **PROC-04**: 3 passos reais: "Conversa Inicial" / "Solução Sob Medida" / "Resultados na Prática" — cada um com ícone e descrição
- [ ] **PROC-05**: Layout vertical com timeline em mobile
- [ ] **PROC-06**: CTA "Começar agora — é 100% gratuito" → WhatsApp

### Differentials (DIFF)

- [ ] **DIFF-01**: Seção "Por que a DMV?" com 4 argumentos reais em grid 2×2 ou lista elegante
- [ ] **DIFF-02**: 4 diferenciais: "100% Personalizado" / "Atendimento Humano e Próximo" / "Foco em Resultado Prático" / "Funciona 24 horas, 7 dias"
- [ ] **DIFF-03**: Cada diferencial com ícone à esquerda + título bold + descrição — sem inventar dados ou depoimentos

### About (ABOUT)

- [ ] **ABOUT-01**: Seção "Quem está por trás da DMV" com texto apresentando os 3 fundadores em bold: Mariel Junior, Vitor Pellegrino, Daniel Jachelli
- [ ] **ABOUT-02**: Texto real da missão da empresa
- [ ] **ABOUT-03**: Badge/selo "Driven Mind Vanguard — Vanguarda da Mente Direcionada"
- [ ] **ABOUT-04**: Sem fotos — apenas nomes em bold no texto + elemento decorativo sutil (logo com glow baixo)

### FAQ (FAQ)

- [ ] **FAQ-01**: Seção "Perguntas Frequentes" com accordion/collapse — 6 perguntas
- [ ] **FAQ-02**: 6 perguntas reais: Quanto custa? / Preciso entender de tecnologia? / Funciona para o meu negócio? / Quanto tempo leva? / E se eu não gostar? / Vocês dão suporte?
- [ ] **FAQ-03**: Animação de abertura/fechamento via `max-height` transition suave
- [ ] **FAQ-04**: Ícone "+" que rota 45° para "×" ao expandir
- [ ] **FAQ-05**: `aria-expanded` nos accordions para acessibilidade

### CTAs & Conversion (CTA)

- [ ] **CTA-01**: CTA final com headline "Pronto para colocar seu negócio no piloto automático?" e botão ENORME com glow máximo → WhatsApp
- [ ] **CTA-02**: Fundo dramático na seção CTA final — blob de luz ciano mais intenso
- [ ] **CTA-03**: Badges de reforço abaixo do botão: "✓ Sem compromisso · ✓ 100% gratuito · ✓ Resposta imediata"
- [ ] **CTA-04**: Floating WhatsApp button fixo no canto inferior direito — ícone SVG oficial verde, circular, pulse animation, z-index 9999
- [ ] **CTA-05**: Tooltip "Fale conosco" no hover do floating button
- [ ] **CTA-06**: Todos os CTAs da página apontam para `https://wa.me/5522981113794`

### Footer (FOOT)

- [ ] **FOOT-01**: Footer com logo DMV, links de navegação repetidos e ícone WhatsApp clicável
- [ ] **FOOT-02**: Copyright "© 2025 DMV Enterprise. Todos os direitos reservados." e tagline "Driven Mind Vanguard — Vanguarda da Mente Direcionada"

### Internationalization (I18N)

- [ ] **I18N-01**: Objeto JS com todas as traduções PT e EN para cada elemento `data-i18n`
- [ ] **I18N-02**: Toggle PT | EN no header troca todos os textos instantaneamente sem reload
- [ ] **I18N-03**: Estado visual do toggle: idioma ativo em destaque
- [ ] **I18N-04**: Tradução EN soa natural (não literal) em todos os textos

### Animations & Effects (ANIM)

- [ ] **ANIM-01**: Scroll reveal via IntersectionObserver em todas as seções — fade-in + translateY(30px→0) com stagger 100-150ms entre siblings
- [ ] **ANIM-02**: Pulse animation contínua no botão CTA principal (scale 1→1.03→1 a cada 2s)
- [ ] **ANIM-03**: Gradient blobs com movimento muito lento (60s+ de duração) ou estáticos
- [ ] **ANIM-04**: Hover nos cards: border ciano + translate-y(-4px) + glow shadow (0.3s ease)
- [ ] **ANIM-05**: Counter animation nos números de mercado ao entrar na viewport

### Responsiveness (RESP)

- [ ] **RESP-01**: Layout correto nos 4 breakpoints: 375px / 768px / 1024px / 1440px
- [ ] **RESP-02**: Zero overflow horizontal em qualquer breakpoint
- [ ] **RESP-03**: Botões e áreas de toque ≥ 44px em mobile
- [ ] **RESP-04**: Texto legível sem zoom em 375px

### Performance & Accessibility (PERF)

- [ ] **PERF-01**: Animações apenas em propriedades GPU-friendly (transform, opacity)
- [ ] **PERF-02**: Alt text descritivo na logo e demais imagens
- [ ] **PERF-03**: Focus states visíveis (outline ciano) em botões e links para navegação por Tab
- [ ] **PERF-04**: Contraste WCAG AA em todos os textos sobre fundo escuro
- [ ] **PERF-05**: Nenhum Lorem Ipsum, placeholder ou dado fabricado na versão final

---

## v2 Requirements

### Analytics & Tracking

- **V2-01**: Google Analytics ou Meta Pixel para rastrear cliques nos CTAs
- **V2-02**: Heatmap de scroll e cliques (Hotjar ou similar)

### Advanced Features

- **V2-03**: Formulário de captura de email opcional (além do WhatsApp)
- **V2-04**: Blog/conteúdo para SEO orgânico
- **V2-05**: Animações de partículas ou Three.js para o visual do hero

---

## Out of Scope

| Feature | Reason |
|---------|--------|
| Depoimentos ou cases com métricas | Empresa iniciante — zero dados fabricados |
| Backend / banco de dados | Página estática, conversão via WhatsApp |
| CMS ou painel de edição | Desnecessário para v1, complexidade injustificada |
| Fotos dos fundadores | Não disponíveis, não solicitadas |
| Biblioteca CSS (Bootstrap/Tailwind) | CSS customizado para fidelidade visual máxima |
| Autenticação / área logada | Fora do escopo de landing page |
| SEO avançado / schema markup | Deferido para v2 |
| Videos / media pesada | Performance e simplicidade primeiro |

---

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| INFRA-01–06 | Phase 1 | Pending |
| NAV-01–06 | Phase 1 | Pending |
| I18N-01–04 | Phase 1 | Pending |
| HERO-01–09 | Phase 2 | Pending |
| CTA-04–06 | Phase 2 | Pending |
| MARKET-01–07 | Phase 3 | Pending |
| ANIM-05 | Phase 3 | Pending |
| PAIN-01–04 | Phase 4 | Pending |
| SERV-01–05 | Phase 4 | Pending |
| PROC-01–06 | Phase 5 | Pending |
| DIFF-01–03 | Phase 5 | Pending |
| ABOUT-01–04 | Phase 6 | Pending |
| FAQ-01–05 | Phase 6 | Pending |
| CTA-01–03 | Phase 6 | Pending |
| FOOT-01–02 | Phase 6 | Pending |
| ANIM-01–04 | Phase 7 | Pending |
| RESP-01–04 | Phase 7 | Pending |
| PERF-01–05 | Phase 7 | Pending |

**Coverage:**
- v1 requirements: 57 total
- Mapped to phases: 57
- Unmapped: 0 ✓

---
*Requirements defined: 2026-04-01*
*Last updated: 2026-04-01 after initial definition*
