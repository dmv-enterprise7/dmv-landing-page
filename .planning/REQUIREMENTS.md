# Requirements: DMV Enterprise Landing Page

**Defined:** 2026-04-01
**Core Value:** Todo CTA apontando para `https://wa.me/5522981113794` e visivel em todos os dispositivos -- se o visitante chegar ao WhatsApp, a pagina cumpriu seu proposito.

---

## v1 Requirements

### Foundation (INFRA)

- [x] **INFRA-01**: Estrutura HTML semantica com 12 secoes identificadas por IDs de navegacao
- [x] **INFRA-02**: Variaveis CSS completas para paleta (#040810, #00c8ff, #1a4fd4, #6b3fa0, #e8ecf4, #8a95a8, #5a6578, #1a2440), tipografia e espacamentos
- [x] **INFRA-03**: Google Fonts carregando Sora (headlines), DM Sans (body) e JetBrains Mono (numeros) com `preconnect` e `display=swap`
- [x] **INFRA-04**: Background base com gradient blobs desfocados (cyan + azul + roxo) usando `filter: blur(80-120px)` -- nunca fundo flat/solido
- [x] **INFRA-05**: Starfield estatico via CSS pseudo-elementos (pontos pequenos simulando estrelas)
- [x] **INFRA-06**: Sistema de i18n via objeto JS com todas as chaves PT/EN e atributos `data-i18n` em todos os elementos de texto

### Navigation (NAV)

- [x] **NAV-01**: Navbar fixa no topo com logo DMV (`Logo_dmv.jpg`) a esquerda e links de navegacao centrais
- [x] **NAV-02**: Links de navegacao: Servicos | Como Funciona | Por que IA? | Sobre Nos | FAQ -- scroll suave para secao
- [x] **NAV-03**: Toggle PT | EN no header -- pequeno, discreto, funcional
- [x] **NAV-04**: Botao CTA "Agendar Demo Gratis" a direita -> WhatsApp
- [x] **NAV-05**: Navbar transparente no topo -> glassmorphism (backdrop-filter: blur) ao scrollar com sombra sutil
- [x] **NAV-06**: Menu mobile: icone hamburger -> drawer lateral com animacao slide-in e fechamento ao clicar em link

### Hero Section (HERO)

- [ ] **HERO-01**: Layout assimetrico desktop -- texto a esquerda (60%) / logo com efeito a direita (40%)
- [ ] **HERO-02**: Badge/tag acima da headline: "Agencia de Automacao com IA" -- font-mono, cor ciano, fundo glass pill
- [ ] **HERO-03**: Headline principal enorme e bold: "Seu negocio no piloto automatico com Inteligencia Artificial" -- `font-size: clamp(2.5rem, 5vw, 4.5rem)`, `font-weight: 800`
- [ ] **HERO-04**: Sub-headline de suporte 1-2 frases explicando o servico em PT e EN
- [ ] **HERO-05**: Botao CTA primario com glow ciano + pulse animation -> WhatsApp
- [ ] **HERO-06**: Link CTA secundario "Ver como funciona" com scroll suave para secao How It Works
- [ ] **HERO-07**: Logo DMV exibida a direita com efeito de glow atmosferico (box-shadow radial ciano) integrada ao background como se navegasse no espaco
- [ ] **HERO-08**: Selo inferior "Demonstracao 100% gratuita - Sem compromisso - Resposta imediata" com icone de check
- [ ] **HERO-09**: Layout responsivo -- empilhado em mobile (full-width, logo centralizada abaixo do texto)

### Market Data Section (MARKET)

- [ ] **MARKET-01**: Secao "Por que IA?" com titulo e subtitulo impactantes
- [ ] **MARKET-02**: 4-6 cards/blocos de dados com numero grande em ciano (JetBrains Mono, 48-64px) + descricao em cinza + fonte do dado em texto muted (11-12px)
- [ ] **MARKET-03**: Dados reais usados: 78% (McKinsey), 4.8x (IBM), 62% (Tidio), 70% (Zendesk), ~46% (MDPI), 24/7 (Fullview), 67% (Sales So) -- escolher 4-6 mais impactantes
- [ ] **MARKET-04**: Counter animation via IntersectionObserver -- numeros contam de 0 ao valor final ao entrar na viewport
- [ ] **MARKET-05**: Frase de transicao em destaque apos os dados
- [ ] **MARKET-06**: CTA de transicao "Descubra o que a IA pode fazer pelo seu negocio -- e gratis" -> WhatsApp
- [ ] **MARKET-07**: Layout 3-4 blocos em linha no desktop, stack em mobile com separadores sutis

### Pain Points (PAIN)

- [ ] **PAIN-01**: Secao "Isso e familiar?" com fundo levemente diferente (gradiente shift)
- [ ] **PAIN-02**: 4 pain points em grid 2x2 desktop / stack mobile, cada um com icone SVG + frase curta e direta
- [ ] **PAIN-03**: Os 4 pain points reais: "Perde clientes porque demora para responder" / "WhatsApp comercial virou uma bagunca" / "Preso em tarefas manuais que nao acabam" / "Atendimento que muda de qualidade conforme o dia"
- [ ] **PAIN-04**: Frase de transicao ciano centralizada: "A DMV resolve cada um desses problemas com Inteligencia Artificial."

### Services (SERV)

- [ ] **SERV-01**: Secao "Solucoes sob medida para o seu negocio" com subtitulo
- [ ] **SERV-02**: 6 cards de servico em bento-grid ou layout assimetrico (NAO grid 3x2 generico)
- [ ] **SERV-03**: Servicos reais: Assistentes Virtuais com IA / Automacao de Processos / Fluxos Inteligentes de WhatsApp / Web Apps Customizadas / Qualificacao Automatica de Leads / Gestao Inteligente de Agenda
- [ ] **SERV-04**: Cada card: glassmorphism (rgba(255,255,255,0.04) + backdrop-blur) + icone + titulo bold + descricao 2 linhas
- [ ] **SERV-05**: Hover nos cards: border-color ciano + translate-y(-4px) + box-shadow glow (0.3s ease)

### How It Works (PROC)

- [ ] **PROC-01**: Secao "Simples assim" com 3 passos em linha horizontal no desktop
- [ ] **PROC-02**: Linha/path conectando os 3 passos visualmente
- [ ] **PROC-03**: Numeros grandes estilizados (01, 02, 03) em ciano, JetBrains Mono
- [ ] **PROC-04**: 3 passos reais: "Conversa Inicial" / "Solucao Sob Medida" / "Resultados na Pratica" -- cada um com icone e descricao
- [ ] **PROC-05**: Layout vertical com timeline em mobile
- [ ] **PROC-06**: CTA "Comecar agora -- e 100% gratuito" -> WhatsApp

### Differentials (DIFF)

- [ ] **DIFF-01**: Secao "Por que a DMV?" com 4 argumentos reais em grid 2x2 ou lista elegante
- [ ] **DIFF-02**: 4 diferenciais: "100% Personalizado" / "Atendimento Humano e Proximo" / "Foco em Resultado Pratico" / "Funciona 24 horas, 7 dias"
- [ ] **DIFF-03**: Cada diferencial com icone a esquerda + titulo bold + descricao -- sem inventar dados ou depoimentos

### About (ABOUT)

- [ ] **ABOUT-01**: Secao "Quem esta por tras da DMV" com texto apresentando os 3 fundadores em bold: Mariel Junior, Vitor Pellegrino, Daniel Jachelli
- [ ] **ABOUT-02**: Texto real da missao da empresa
- [ ] **ABOUT-03**: Badge/selo "Driven Mind Vanguard -- Vanguarda da Mente Direcionada"
- [ ] **ABOUT-04**: Sem fotos -- apenas nomes em bold no texto + elemento decorativo sutil (logo com glow baixo)

### FAQ (FAQ)

- [ ] **FAQ-01**: Secao "Perguntas Frequentes" com accordion/collapse -- 6 perguntas
- [ ] **FAQ-02**: 6 perguntas reais: Quanto custa? / Preciso entender de tecnologia? / Funciona para o meu negocio? / Quanto tempo leva? / E se eu nao gostar? / Voces dao suporte?
- [ ] **FAQ-03**: Animacao de abertura/fechamento via `max-height` transition suave
- [ ] **FAQ-04**: Icone "+" que rota 45 graus para "x" ao expandir
- [ ] **FAQ-05**: `aria-expanded` nos accordions para acessibilidade

### CTAs & Conversion (CTA)

- [ ] **CTA-01**: CTA final com headline "Pronto para colocar seu negocio no piloto automatico?" e botao ENORME com glow maximo -> WhatsApp
- [ ] **CTA-02**: Fundo dramatico na secao CTA final -- blob de luz ciano mais intenso
- [ ] **CTA-03**: Badges de reforco abaixo do botao: "Sem compromisso - 100% gratuito - Resposta imediata"
- [ ] **CTA-04**: Floating WhatsApp button fixo no canto inferior direito -- icone SVG oficial verde, circular, pulse animation, z-index 9999
- [ ] **CTA-05**: Tooltip "Fale conosco" no hover do floating button
- [ ] **CTA-06**: Todos os CTAs da pagina apontam para `https://wa.me/5522981113794`

### Footer (FOOT)

- [ ] **FOOT-01**: Footer com logo DMV, links de navegacao repetidos e icone WhatsApp clicavel
- [ ] **FOOT-02**: Copyright "2025 DMV Enterprise. Todos os direitos reservados." e tagline "Driven Mind Vanguard -- Vanguarda da Mente Direcionada"

### Internationalization (I18N)

- [x] **I18N-01**: Objeto JS com todas as traducoes PT e EN para cada elemento `data-i18n`
- [x] **I18N-02**: Toggle PT | EN no header troca todos os textos instantaneamente sem reload
- [x] **I18N-03**: Estado visual do toggle: idioma ativo em destaque
- [x] **I18N-04**: Traducao EN soa natural (nao literal) em todos os textos

### Animations & Effects (ANIM)

- [ ] **ANIM-01**: Scroll reveal via IntersectionObserver em todas as secoes -- fade-in + translateY(30px->0) com stagger 100-150ms entre siblings
- [ ] **ANIM-02**: Pulse animation continua no botao CTA principal (scale 1->1.03->1 a cada 2s)
- [ ] **ANIM-03**: Gradient blobs com movimento muito lento (60s+ de duracao) ou estaticos
- [ ] **ANIM-04**: Hover nos cards: border ciano + translate-y(-4px) + glow shadow (0.3s ease)
- [ ] **ANIM-05**: Counter animation nos numeros de mercado ao entrar na viewport

### Responsiveness (RESP)

- [ ] **RESP-01**: Layout correto nos 4 breakpoints: 375px / 768px / 1024px / 1440px
- [ ] **RESP-02**: Zero overflow horizontal em qualquer breakpoint
- [ ] **RESP-03**: Botoes e areas de toque >= 44px em mobile
- [ ] **RESP-04**: Texto legivel sem zoom em 375px

### Performance & Accessibility (PERF)

- [ ] **PERF-01**: Animacoes apenas em propriedades GPU-friendly (transform, opacity)
- [ ] **PERF-02**: Alt text descritivo na logo e demais imagens
- [ ] **PERF-03**: Focus states visiveis (outline ciano) em botoes e links para navegacao por Tab
- [ ] **PERF-04**: Contraste WCAG AA em todos os textos sobre fundo escuro
- [ ] **PERF-05**: Nenhum Lorem Ipsum, placeholder ou dado fabricado na versao final

---

## v2 Requirements

### Analytics & Tracking

- **V2-01**: Google Analytics ou Meta Pixel para rastrear cliques nos CTAs
- **V2-02**: Heatmap de scroll e cliques (Hotjar ou similar)

### Advanced Features

- **V2-03**: Formulario de captura de email opcional (alem do WhatsApp)
- **V2-04**: Blog/conteudo para SEO organico
- **V2-05**: Animacoes de particulas ou Three.js para o visual do hero

---

## Out of Scope

| Feature | Reason |
|---------|--------|
| Depoimentos ou cases com metricas | Empresa iniciante -- zero dados fabricados |
| Backend / banco de dados | Pagina estatica, conversao via WhatsApp |
| CMS ou painel de edicao | Desnecessario para v1, complexidade injustificada |
| Fotos dos fundadores | Nao disponiveis, nao solicitadas |
| Biblioteca CSS (Bootstrap/Tailwind) | CSS customizado para fidelidade visual maxima |
| Autenticacao / area logada | Fora do escopo de landing page |
| SEO avancado / schema markup | Deferido para v2 |
| Videos / media pesada | Performance e simplicidade primeiro |

---

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| INFRA-01 | Phase 1: Foundation | Complete |
| INFRA-02 | Phase 1: Foundation | Complete |
| INFRA-03 | Phase 1: Foundation | Complete |
| INFRA-04 | Phase 1: Foundation | Complete |
| INFRA-05 | Phase 1: Foundation | Complete |
| INFRA-06 | Phase 1: Foundation | Complete |
| NAV-01 | Phase 1: Foundation | Complete |
| NAV-02 | Phase 1: Foundation | Complete |
| NAV-03 | Phase 1: Foundation | Complete |
| NAV-04 | Phase 1: Foundation | Complete |
| NAV-05 | Phase 1: Foundation | Complete |
| NAV-06 | Phase 1: Foundation | Complete |
| I18N-01 | Phase 1: Foundation | Complete |
| I18N-02 | Phase 1: Foundation | Complete |
| I18N-03 | Phase 1: Foundation | Complete |
| I18N-04 | Phase 1: Foundation | Complete |
| HERO-01 | Phase 2: Hero + Floating CTA | Pending |
| HERO-02 | Phase 2: Hero + Floating CTA | Pending |
| HERO-03 | Phase 2: Hero + Floating CTA | Pending |
| HERO-04 | Phase 2: Hero + Floating CTA | Pending |
| HERO-05 | Phase 2: Hero + Floating CTA | Pending |
| HERO-06 | Phase 2: Hero + Floating CTA | Pending |
| HERO-07 | Phase 2: Hero + Floating CTA | Pending |
| HERO-08 | Phase 2: Hero + Floating CTA | Pending |
| HERO-09 | Phase 2: Hero + Floating CTA | Pending |
| CTA-04 | Phase 2: Hero + Floating CTA | Pending |
| CTA-05 | Phase 2: Hero + Floating CTA | Pending |
| CTA-06 | Phase 2: Hero + Floating CTA | Pending |
| MARKET-01 | Phase 3: Market Data | Pending |
| MARKET-02 | Phase 3: Market Data | Pending |
| MARKET-03 | Phase 3: Market Data | Pending |
| MARKET-04 | Phase 3: Market Data | Pending |
| MARKET-05 | Phase 3: Market Data | Pending |
| MARKET-06 | Phase 3: Market Data | Pending |
| MARKET-07 | Phase 3: Market Data | Pending |
| ANIM-05 | Phase 3: Market Data | Pending |
| PAIN-01 | Phase 4: Pain Points + Services | Pending |
| PAIN-02 | Phase 4: Pain Points + Services | Pending |
| PAIN-03 | Phase 4: Pain Points + Services | Pending |
| PAIN-04 | Phase 4: Pain Points + Services | Pending |
| SERV-01 | Phase 4: Pain Points + Services | Pending |
| SERV-02 | Phase 4: Pain Points + Services | Pending |
| SERV-03 | Phase 4: Pain Points + Services | Pending |
| SERV-04 | Phase 4: Pain Points + Services | Pending |
| SERV-05 | Phase 4: Pain Points + Services | Pending |
| PROC-01 | Phase 5: Process + Differentials | Pending |
| PROC-02 | Phase 5: Process + Differentials | Pending |
| PROC-03 | Phase 5: Process + Differentials | Pending |
| PROC-04 | Phase 5: Process + Differentials | Pending |
| PROC-05 | Phase 5: Process + Differentials | Pending |
| PROC-06 | Phase 5: Process + Differentials | Pending |
| DIFF-01 | Phase 5: Process + Differentials | Pending |
| DIFF-02 | Phase 5: Process + Differentials | Pending |
| DIFF-03 | Phase 5: Process + Differentials | Pending |
| ABOUT-01 | Phase 6: About + FAQ + Final CTA + Footer | Pending |
| ABOUT-02 | Phase 6: About + FAQ + Final CTA + Footer | Pending |
| ABOUT-03 | Phase 6: About + FAQ + Final CTA + Footer | Pending |
| ABOUT-04 | Phase 6: About + FAQ + Final CTA + Footer | Pending |
| FAQ-01 | Phase 6: About + FAQ + Final CTA + Footer | Pending |
| FAQ-02 | Phase 6: About + FAQ + Final CTA + Footer | Pending |
| FAQ-03 | Phase 6: About + FAQ + Final CTA + Footer | Pending |
| FAQ-04 | Phase 6: About + FAQ + Final CTA + Footer | Pending |
| FAQ-05 | Phase 6: About + FAQ + Final CTA + Footer | Pending |
| CTA-01 | Phase 6: About + FAQ + Final CTA + Footer | Pending |
| CTA-02 | Phase 6: About + FAQ + Final CTA + Footer | Pending |
| CTA-03 | Phase 6: About + FAQ + Final CTA + Footer | Pending |
| FOOT-01 | Phase 6: About + FAQ + Final CTA + Footer | Pending |
| FOOT-02 | Phase 6: About + FAQ + Final CTA + Footer | Pending |
| ANIM-01 | Phase 7: Polish & QA | Pending |
| ANIM-02 | Phase 7: Polish & QA | Pending |
| ANIM-03 | Phase 7: Polish & QA | Pending |
| ANIM-04 | Phase 7: Polish & QA | Pending |
| RESP-01 | Phase 7: Polish & QA | Pending |
| RESP-02 | Phase 7: Polish & QA | Pending |
| RESP-03 | Phase 7: Polish & QA | Pending |
| RESP-04 | Phase 7: Polish & QA | Pending |
| PERF-01 | Phase 7: Polish & QA | Pending |
| PERF-02 | Phase 7: Polish & QA | Pending |
| PERF-03 | Phase 7: Polish & QA | Pending |
| PERF-04 | Phase 7: Polish & QA | Pending |
| PERF-05 | Phase 7: Polish & QA | Pending |

**Coverage:**
- v1 requirements: 81 total
- Mapped to phases: 81
- Unmapped: 0

---
*Requirements defined: 2026-04-01*
*Last updated: 2026-04-01 after roadmap creation*
