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

- [x] **HERO-01**: Layout assimetrico desktop -- texto a esquerda (60%) / logo com efeito a direita (40%)
- [x] **HERO-02**: Badge/tag acima da headline: "Agencia de Automacao com IA" -- font-mono, cor ciano, fundo glass pill
- [x] **HERO-03**: Headline principal enorme e bold: "Seu negocio no piloto automatico com Inteligencia Artificial" -- `font-size: clamp(2.5rem, 5vw, 4.5rem)`, `font-weight: 800`
- [x] **HERO-04**: Sub-headline de suporte 1-2 frases explicando o servico em PT e EN
- [x] **HERO-05**: Botao CTA primario com glow ciano + pulse animation -> WhatsApp
- [x] **HERO-06**: Link CTA secundario "Ver como funciona" com scroll suave para secao How It Works
- [x] **HERO-07**: Logo DMV exibida a direita com efeito de glow atmosferico (box-shadow radial ciano) integrada ao background como se navegasse no espaco
- [x] **HERO-08**: Selo inferior "Demonstracao 100% gratuita - Sem compromisso - Resposta imediata" com icone de check
- [x] **HERO-09**: Layout responsivo -- empilhado em mobile (full-width, logo centralizada abaixo do texto)

### Market Data Section (MARKET)

- [x] **MARKET-01**: Secao "Por que IA?" com titulo e subtitulo impactantes
- [x] **MARKET-02**: 4-6 cards/blocos de dados com numero grande em ciano (JetBrains Mono, 48-64px) + descricao em cinza + fonte do dado em texto muted (11-12px)
- [x] **MARKET-03**: Dados reais usados: 78% (McKinsey), 4.8x (IBM), 62% (Tidio), 70% (Zendesk), ~46% (MDPI), 24/7 (Fullview), 67% (Sales So) -- escolher 4-6 mais impactantes
- [x] **MARKET-04**: Counter animation via IntersectionObserver -- numeros contam de 0 ao valor final ao entrar na viewport
- [x] **MARKET-05**: Frase de transicao em destaque apos os dados
- [x] **MARKET-06**: CTA de transicao "Descubra o que a IA pode fazer pelo seu negocio -- e gratis" -> WhatsApp
- [x] **MARKET-07**: Layout 3-4 blocos em linha no desktop, stack em mobile com separadores sutis

### Pain Points (PAIN)

- [x] **PAIN-01**: Secao "Isso e familiar?" com fundo levemente diferente (gradiente shift)
- [x] **PAIN-02**: 4 pain points em grid 2x2 desktop / stack mobile, cada um com icone SVG + frase curta e direta
- [x] **PAIN-03**: Os 4 pain points reais: "Perde clientes porque demora para responder" / "WhatsApp comercial virou uma bagunca" / "Preso em tarefas manuais que nao acabam" / "Atendimento que muda de qualidade conforme o dia"
- [x] **PAIN-04**: Frase de transicao ciano centralizada: "A DMV resolve cada um desses problemas com Inteligencia Artificial."

### Services (SERV)

- [x] **SERV-01**: Secao "Solucoes sob medida para o seu negocio" com subtitulo
- [x] **SERV-02**: 6 cards de servico em bento-grid ou layout assimetrico (NAO grid 3x2 generico)
- [x] **SERV-03**: Servicos reais: Assistentes Virtuais com IA / Automacao de Processos / Fluxos Inteligentes de WhatsApp / Web Apps Customizadas / Qualificacao Automatica de Leads / Gestao Inteligente de Agenda
- [x] **SERV-04**: Cada card: glassmorphism (rgba(255,255,255,0.04) + backdrop-blur) + icone + titulo bold + descricao 2 linhas
- [x] **SERV-05**: Hover nos cards: border-color ciano + translate-y(-4px) + box-shadow glow (0.3s ease)

### How It Works (PROC)

- [x] **PROC-01**: Secao "Simples assim" com 3 passos em linha horizontal no desktop
- [x] **PROC-02**: Linha/path conectando os 3 passos visualmente
- [x] **PROC-03**: Numeros grandes estilizados (01, 02, 03) em ciano, JetBrains Mono
- [x] **PROC-04**: 3 passos reais: "Conversa Inicial" / "Solucao Sob Medida" / "Resultados na Pratica" -- cada um com icone e descricao
- [x] **PROC-05**: Layout vertical com timeline em mobile
- [x] **PROC-06**: CTA "Comecar agora -- e 100% gratuito" -> WhatsApp

### Differentials (DIFF)

- [x] **DIFF-01**: Secao "Por que a DMV?" com 4 argumentos reais em grid 2x2 ou lista elegante
- [x] **DIFF-02**: 4 diferenciais: "100% Personalizado" / "Atendimento Humano e Proximo" / "Foco em Resultado Pratico" / "Funciona 24 horas, 7 dias"
- [x] **DIFF-03**: Cada diferencial com icone a esquerda + titulo bold + descricao -- sem inventar dados ou depoimentos

### About (ABOUT)

- [x] **ABOUT-01**: Secao "Quem esta por tras da DMV" com texto apresentando os 3 fundadores em bold: Mariel Junior, Vitor Pellegrino, Daniel Jachelli
- [x] **ABOUT-02**: Texto real da missao da empresa
- [x] **ABOUT-03**: Badge/selo "Driven Mind Vanguard -- Vanguarda da Mente Direcionada"
- [x] **ABOUT-04**: Sem fotos -- apenas nomes em bold no texto + elemento decorativo sutil (logo com glow baixo)

### FAQ (FAQ)

- [x] **FAQ-01**: Secao "Perguntas Frequentes" com accordion/collapse -- 6 perguntas
- [x] **FAQ-02**: 6 perguntas reais: Quanto custa? / Preciso entender de tecnologia? / Funciona para o meu negocio? / Quanto tempo leva? / E se eu nao gostar? / Voces dao suporte?
- [x] **FAQ-03**: Animacao de abertura/fechamento via `max-height` transition suave
- [x] **FAQ-04**: Icone "+" que rota 45 graus para "x" ao expandir
- [x] **FAQ-05**: `aria-expanded` nos accordions para acessibilidade

### CTAs & Conversion (CTA)

- [x] **CTA-01**: CTA final com headline "Pronto para colocar seu negocio no piloto automatico?" e botao ENORME com glow maximo -> WhatsApp
- [x] **CTA-02**: Fundo dramatico na secao CTA final -- blob de luz ciano mais intenso
- [x] **CTA-03**: Badges de reforco abaixo do botao: "Sem compromisso - 100% gratuito - Resposta imediata"
- [x] **CTA-04**: Floating WhatsApp button fixo no canto inferior direito -- icone SVG oficial verde, circular, pulse animation, z-index 9999
- [x] **CTA-05**: Tooltip "Fale conosco" no hover do floating button
- [x] **CTA-06**: Todos os CTAs da pagina apontam para `https://wa.me/5522981113794`

### Footer (FOOT)

- [x] **FOOT-01**: Footer com logo DMV, links de navegacao repetidos e icone WhatsApp clicavel
- [x] **FOOT-02**: Copyright "2025 DMV Enterprise. Todos os direitos reservados." e tagline "Driven Mind Vanguard -- Vanguarda da Mente Direcionada"

### Internationalization (I18N)

- [x] **I18N-01**: Objeto JS com todas as traducoes PT e EN para cada elemento `data-i18n`
- [x] **I18N-02**: Toggle PT | EN no header troca todos os textos instantaneamente sem reload
- [x] **I18N-03**: Estado visual do toggle: idioma ativo em destaque
- [x] **I18N-04**: Traducao EN soa natural (nao literal) em todos os textos

### Animations & Effects (ANIM)

- [x] **ANIM-01**: Scroll reveal via IntersectionObserver em todas as secoes -- fade-in + translateY(30px->0) com stagger 100-150ms entre siblings
- [x] **ANIM-02**: Pulse animation continua no botao CTA principal (scale 1->1.03->1 a cada 2s)
- [x] **ANIM-03**: Gradient blobs com movimento muito lento (60s+ de duracao) ou estaticos
- [x] **ANIM-04**: Hover nos cards: border ciano + translate-y(-4px) + glow shadow (0.3s ease)
- [x] **ANIM-05**: Counter animation nos numeros de mercado ao entrar na viewport

### Responsiveness (RESP)

- [x] **RESP-01**: Layout correto nos 4 breakpoints: 375px / 768px / 1024px / 1440px
- [x] **RESP-02**: Zero overflow horizontal em qualquer breakpoint
- [x] **RESP-03**: Botoes e areas de toque >= 44px em mobile
- [x] **RESP-04**: Texto legivel sem zoom em 375px

### Performance & Accessibility (PERF)

- [x] **PERF-01**: Animacoes apenas em propriedades GPU-friendly (transform, opacity)
- [x] **PERF-02**: Alt text descritivo na logo e demais imagens
- [x] **PERF-03**: Focus states visiveis (outline ciano) em botoes e links para navegacao por Tab
- [x] **PERF-04**: Contraste WCAG AA em todos os textos sobre fundo escuro
- [x] **PERF-05**: Nenhum Lorem Ipsum, placeholder ou dado fabricado na versao final

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
| HERO-01 | Phase 2: Hero + Floating CTA | Complete |
| HERO-02 | Phase 2: Hero + Floating CTA | Complete |
| HERO-03 | Phase 2: Hero + Floating CTA | Complete |
| HERO-04 | Phase 2: Hero + Floating CTA | Complete |
| HERO-05 | Phase 2: Hero + Floating CTA | Complete |
| HERO-06 | Phase 2: Hero + Floating CTA | Complete |
| HERO-07 | Phase 2: Hero + Floating CTA | Complete |
| HERO-08 | Phase 2: Hero + Floating CTA | Complete |
| HERO-09 | Phase 2: Hero + Floating CTA | Complete |
| CTA-04 | Phase 2: Hero + Floating CTA | Complete |
| CTA-05 | Phase 2: Hero + Floating CTA | Complete |
| CTA-06 | Phase 2: Hero + Floating CTA | Complete |
| MARKET-01 | Phase 3: Market Data | Complete |
| MARKET-02 | Phase 3: Market Data | Complete |
| MARKET-03 | Phase 3: Market Data | Complete |
| MARKET-04 | Phase 3: Market Data | Complete |
| MARKET-05 | Phase 3: Market Data | Complete |
| MARKET-06 | Phase 3: Market Data | Complete |
| MARKET-07 | Phase 3: Market Data | Complete |
| ANIM-05 | Phase 3: Market Data | Complete |
| PAIN-01 | Phase 4: Pain Points + Services | Complete |
| PAIN-02 | Phase 4: Pain Points + Services | Complete |
| PAIN-03 | Phase 4: Pain Points + Services | Complete |
| PAIN-04 | Phase 4: Pain Points + Services | Complete |
| SERV-01 | Phase 4: Pain Points + Services | Complete |
| SERV-02 | Phase 4: Pain Points + Services | Complete |
| SERV-03 | Phase 4: Pain Points + Services | Complete |
| SERV-04 | Phase 4: Pain Points + Services | Complete |
| SERV-05 | Phase 4: Pain Points + Services | Complete |
| PROC-01 | Phase 5: Process + Differentials | Complete |
| PROC-02 | Phase 5: Process + Differentials | Complete |
| PROC-03 | Phase 5: Process + Differentials | Complete |
| PROC-04 | Phase 5: Process + Differentials | Complete |
| PROC-05 | Phase 5: Process + Differentials | Complete |
| PROC-06 | Phase 5: Process + Differentials | Complete |
| DIFF-01 | Phase 5: Process + Differentials | Complete |
| DIFF-02 | Phase 5: Process + Differentials | Complete |
| DIFF-03 | Phase 5: Process + Differentials | Complete |
| ABOUT-01 | Phase 6: About + FAQ + Final CTA + Footer | Complete |
| ABOUT-02 | Phase 6: About + FAQ + Final CTA + Footer | Complete |
| ABOUT-03 | Phase 6: About + FAQ + Final CTA + Footer | Complete |
| ABOUT-04 | Phase 6: About + FAQ + Final CTA + Footer | Complete |
| FAQ-01 | Phase 6: About + FAQ + Final CTA + Footer | Complete |
| FAQ-02 | Phase 6: About + FAQ + Final CTA + Footer | Complete |
| FAQ-03 | Phase 6: About + FAQ + Final CTA + Footer | Complete |
| FAQ-04 | Phase 6: About + FAQ + Final CTA + Footer | Complete |
| FAQ-05 | Phase 6: About + FAQ + Final CTA + Footer | Complete |
| CTA-01 | Phase 6: About + FAQ + Final CTA + Footer | Complete |
| CTA-02 | Phase 6: About + FAQ + Final CTA + Footer | Complete |
| CTA-03 | Phase 6: About + FAQ + Final CTA + Footer | Complete |
| FOOT-01 | Phase 6: About + FAQ + Final CTA + Footer | Complete |
| FOOT-02 | Phase 6: About + FAQ + Final CTA + Footer | Complete |
| ANIM-01 | Phase 7: Polish & QA | Complete |
| ANIM-02 | Phase 7: Polish & QA | Complete |
| ANIM-03 | Phase 7: Polish & QA | Complete |
| ANIM-04 | Phase 7: Polish & QA | Complete |
| RESP-01 | Phase 7: Polish & QA | Complete |
| RESP-02 | Phase 7: Polish & QA | Complete |
| RESP-03 | Phase 7: Polish & QA | Complete |
| RESP-04 | Phase 7: Polish & QA | Complete |
| PERF-01 | Phase 7: Polish & QA | Complete |
| PERF-02 | Phase 7: Polish & QA | Complete |
| PERF-03 | Phase 7: Polish & QA | Complete |
| PERF-04 | Phase 7: Polish & QA | Complete |
| PERF-05 | Phase 7: Polish & QA | Complete |

**Coverage:**
- v1 requirements: 81 total
- Mapped to phases: 81
- Unmapped: 0

---

## v2 Requirements — Repositioning Consultivo

**Defined:** 2026-04-14
**Goal:** Repaginar a landing para refletir posicionamento "consultoria + execução". Mudança é de copy/conteúdo + 1 seção nova (Setores). Design visual (cores, fontes, layout base) preservado.
**WhatsApp:** `https://wa.me/5521973495805` (atualizado de `5522981113794`)

### Hero Reescrito (HERO-V2)

- [ ] **HERO-V2-01**: Headline alterado para "Antes de automatizar, a gente entende onde seu negócio trava" (PT) + equivalente EN
- [ ] **HERO-V2-02**: Sub-headline alterado para "Fazemos o diagnóstico dos seus processos, identificamos gargalos e só então desenhamos a IA sob medida que seu negócio realmente precisa." (PT + EN)
- [ ] **HERO-V2-03**: CTA primário com texto "Agende seu Diagnóstico Gratuito" apontando para `https://wa.me/5521973495805`
- [ ] **HERO-V2-04**: CTA secundário "Veja como funciona ↓" com âncora para seção de processo
- [ ] **HERO-V2-05**: Badges reescritas: "Diagnóstico 100% gratuito · Sem compromisso · Resposta imediata"

### Provocação (PROV) — substitui Pain Points

- [ ] **PROV-01**: Título alterado para "Você sabe onde está perdendo dinheiro?" (PT + EN)
- [ ] **PROV-02**: 4 cards em formato de perguntas provocativas: leads frios, etapas manuais, tempo gasto em tarefas IA-resolvíveis, qualidade dependente do plantão (PT + EN)
- [ ] **PROV-03**: Frase de fechamento "A maioria das empresas não sabe responder essas perguntas. Nosso trabalho começa exatamente aí." (PT + EN)

### Processo 4 Passos (PROC-V2) — substitui processo 3 passos

- [ ] **PROC-V2-01**: Stepper com 4 passos (Raio-X do Negócio → Mapa de Oportunidades → Construção Sob Medida → Acompanhamento e Otimização) — adiciona 1 passo e reescreve os demais
- [ ] **PROC-V2-02**: Título "Consultoria primeiro. Tecnologia depois." + subtítulo "Nosso processo existe para garantir que cada solução resolve o problema certo."
- [ ] **PROC-V2-03**: Copy de cada passo conforme briefing, em PT + EN, com i18n
- [ ] **PROC-V2-04**: CTA "Comece pelo diagnóstico — é gratuito" ao final da seção → WhatsApp
- [ ] **PROC-V2-05**: Conector visual (linha/gradiente) ajustado para 4 passos em desktop e mobile

### Dados de Mercado (MARK-V2)

- [ ] **MARK-V2-01**: Título alterado para "O mercado já se moveu. E o seu negócio?" (PT + EN)
- [ ] **MARK-V2-02**: Frase de fechamento substituída por "A pergunta não é SE você vai usar IA. É QUANDO. E quem começa com diagnóstico, começa certo."
- [ ] **MARK-V2-03**: Números e fontes estatísticas mantidos (McKinsey, IBM, Tidio, Zendesk, MDPI, Sales So)

### Soluções (SOL-V2)

- [ ] **SOL-V2-01**: Título alterado para "Soluções que nascem do diagnóstico" + subtítulo "Cada sistema que criamos é único — porque cada negócio tem gargalos diferentes."
- [ ] **SOL-V2-02**: Os 6 cards de serviços mantidos com copy interno preservado

### Setores Atendidos (SECT) — nova seção

- [ ] **SECT-01**: Nova seção "Setores que já transformamos com IA" inserida entre Soluções e Diferenciais
- [ ] **SECT-02**: Grid com 6 setores (Clínicas e Consultórios, E-commerces, Escritórios e Consultorias, Prestadores de Serviço, Educação e Cursos, Imobiliárias) + ícone por setor
- [ ] **SECT-03**: Frase de fechamento "Se o seu negócio atende clientes, a IA pode ajudar. Agende o diagnóstico e descubra como."
- [ ] **SECT-04**: Link da nova seção adicionado à navegação (navbar + footer)
- [ ] **SECT-05**: Ícones SVG inline ou FontAwesome consistentes com design existente
- [ ] **SECT-06**: Layout responsivo (grid adapta em 3/2/1 colunas conforme breakpoint)
- [ ] **SECT-07**: i18n PT/EN completo com `data-i18n` keys novas

### Diferenciais Reescritos (DIFF-V2)

- [ ] **DIFF-V2-01**: Título "Por que a DMV?" + subtítulo "Não somos mais uma agência. Somos parceiros de diagnóstico e resultado."
- [ ] **DIFF-V2-02**: 4 cards substituem os atuais: Diagnóstico antes de tudo, Visão de processo não de ferramenta, Honestidade técnica, Parceria de longo prazo (PT + EN, copy conforme briefing)

### Quem Somos com Bios (ABOUT-V2)

- [ ] **ABOUT-V2-01**: Título alterado para "Quem está por trás da DMV?" (PT + EN)
- [ ] **ABOUT-V2-02**: Texto intro reescrito + tagline "Driven Mind Vanguard — Vanguarda da Mente Direcionada"
- [ ] **ABOUT-V2-03**: 3 mini-bios com fotos usando `foto-vitor.jpg`, `foto-mariel.jpg`, `foto-daniel.jpg` da raiz
- [ ] **ABOUT-V2-04**: Cada fundador exibido com foto, nome e especialidade (Vitor Pellegrino — Estratégia & Automação; Mariel Junior — IA & Desenvolvimento; Daniel Jachelli — Análise de Dados & Otimização)
- [ ] **ABOUT-V2-05**: Estilo visual consistente (glassmorphism, paleta existente, fotos em formato circular ou card)

### FAQ Reescrito (FAQ-V2)

- [ ] **FAQ-V2-01**: 6 perguntas reescritas conforme briefing (custo/tecnologia/segmento/tempo/reunião/suporte) em PT + EN
- [ ] **FAQ-V2-02**: Accordion existente preservado (max-height transition, single-open, rotate ícone)

### CTA Final (CTA-V2)

- [ ] **CTA-V2-01**: Título alterado para "Pronto para descobrir onde seu negócio pode ir mais longe?"
- [ ] **CTA-V2-02**: Subtítulo "Comece com um diagnóstico gratuito. Sem compromisso, sem enrolação." + CTA "Falar com um especialista agora" → WhatsApp
- [ ] **CTA-V2-03**: Badges "Sem compromisso · 100% gratuito · Resposta imediata"

### Meta + WhatsApp Global (META)

- [ ] **META-01**: Meta description atualizada para "Consultoria e automação com IA sob medida. Diagnosticamos seus processos, identificamos gargalos e implementamos soluções inteligentes para o seu negócio."
- [ ] **META-02**: Meta title verificado/atualizado refletindo posicionamento consultivo
- [ ] **META-03**: Todos os links WhatsApp auditados apontando para `https://wa.me/5521973495805` (HTML + JS)
- [ ] **META-04**: Footer com links de navegação atualizados para novas seções (Setores incluído)

## Future Requirements

(Nenhum identificado — diferido por categoria.)

## Out of Scope (v2.0)

- Redesign visual — cores, fontes, layout base preservados
- Nova paleta ou tipografia
- Mudança de stack (mantém vanilla HTML/CSS/JS)
- Depoimentos/cases com dados fabricados
- Remoção de seções existentes além do substituído (Pain Points → Provocação; processo 3 passos → 4 passos)
- Formulários com envio de email, backend, CMS
- Testimonial carousel
- Blog ou área de conteúdo

## Traceability (v2.0)

| REQ-ID | Phase | Status |
|--------|-------|--------|
| HERO-V2-01 | Phase 8: Hero + Final CTA Rewrite | Pending |
| HERO-V2-02 | Phase 8: Hero + Final CTA Rewrite | Pending |
| HERO-V2-03 | Phase 8: Hero + Final CTA Rewrite | Pending |
| HERO-V2-04 | Phase 8: Hero + Final CTA Rewrite | Pending |
| HERO-V2-05 | Phase 8: Hero + Final CTA Rewrite | Pending |
| CTA-V2-01 | Phase 8: Hero + Final CTA Rewrite | Pending |
| CTA-V2-02 | Phase 8: Hero + Final CTA Rewrite | Pending |
| CTA-V2-03 | Phase 8: Hero + Final CTA Rewrite | Pending |
| PROV-01 | Phase 9: Provocação + Dados de Mercado | Pending |
| PROV-02 | Phase 9: Provocação + Dados de Mercado | Pending |
| PROV-03 | Phase 9: Provocação + Dados de Mercado | Pending |
| MARK-V2-01 | Phase 9: Provocação + Dados de Mercado | Pending |
| MARK-V2-02 | Phase 9: Provocação + Dados de Mercado | Pending |
| MARK-V2-03 | Phase 9: Provocação + Dados de Mercado | Pending |
| PROC-V2-01 | Phase 10: Processo 4 Passos + Soluções | Pending |
| PROC-V2-02 | Phase 10: Processo 4 Passos + Soluções | Pending |
| PROC-V2-03 | Phase 10: Processo 4 Passos + Soluções | Pending |
| PROC-V2-04 | Phase 10: Processo 4 Passos + Soluções | Pending |
| PROC-V2-05 | Phase 10: Processo 4 Passos + Soluções | Pending |
| SOL-V2-01 | Phase 10: Processo 4 Passos + Soluções | Pending |
| SOL-V2-02 | Phase 10: Processo 4 Passos + Soluções | Pending |
| SECT-01 | Phase 11: Setores Atendidos (nova seção) | Pending |
| SECT-02 | Phase 11: Setores Atendidos (nova seção) | Pending |
| SECT-03 | Phase 11: Setores Atendidos (nova seção) | Pending |
| SECT-04 | Phase 11: Setores Atendidos (nova seção) | Pending |
| SECT-05 | Phase 11: Setores Atendidos (nova seção) | Pending |
| SECT-06 | Phase 11: Setores Atendidos (nova seção) | Pending |
| SECT-07 | Phase 11: Setores Atendidos (nova seção) | Pending |
| DIFF-V2-01 | Phase 12: Diferenciais + Quem Somos + FAQ | Pending |
| DIFF-V2-02 | Phase 12: Diferenciais + Quem Somos + FAQ | Pending |
| ABOUT-V2-01 | Phase 12: Diferenciais + Quem Somos + FAQ | Pending |
| ABOUT-V2-02 | Phase 12: Diferenciais + Quem Somos + FAQ | Pending |
| ABOUT-V2-03 | Phase 12: Diferenciais + Quem Somos + FAQ | Pending |
| ABOUT-V2-04 | Phase 12: Diferenciais + Quem Somos + FAQ | Pending |
| ABOUT-V2-05 | Phase 12: Diferenciais + Quem Somos + FAQ | Pending |
| FAQ-V2-01 | Phase 12: Diferenciais + Quem Somos + FAQ | Pending |
| FAQ-V2-02 | Phase 12: Diferenciais + Quem Somos + FAQ | Pending |
| META-01 | Phase 13: Meta + WhatsApp Global Audit | Pending |
| META-02 | Phase 13: Meta + WhatsApp Global Audit | Pending |
| META-03 | Phase 13: Meta + WhatsApp Global Audit | Pending |
| META-04 | Phase 13: Meta + WhatsApp Global Audit | Pending |

**Coverage (v2.0):**
- v2 requirements: 41 total
- Mapped to phases: 41
- Unmapped: 0

---
*Requirements defined: 2026-04-01 (v1), 2026-04-14 (v2)*
*Last updated: 2026-04-14 — v2 traceability table filled, all 41 requirements mapped to phases 8-13*
