
---

## 🎯 CONTEXTO DO PROJETO

Crie uma **landing page completa, responsiva e de alta conversão** para a **DMV Enterprise** (Driven Mind Vanguard – Vanguarda da Mente Direcionada), uma agência brasileira especializada em soluções de Inteligência Artificial para automação de processos em pequenos e médios negócios.

**Objetivo principal da página:** Convencer visitantes (donos de negócios, empreendedores PME) a clicar no botão de WhatsApp para agendar uma **demonstração gratuita**. Toda decisão de design, copy e estrutura deve servir a esse único objetivo.

**Link do WhatsApp para todos os CTAs:** `https://wa.me/5522981113794`

**Idioma:** Bilíngue — o conteúdo principal em **Português (BR)**, com um toggle/botão de idioma para **English** no header. Construa a estrutura para suportar ambos os idiomas (pode ser via atributos data-lang, i18n simples em JS, ou alternância de blocos). O conteúdo em inglês deve ser traduzido profissionalmente, não literal.

---

## 🏢 SOBRE A DMV ENTERPRISE (use apenas estas informações reais)

- **Nome completo:** DMV Enterprise (Driven Mind Vanguard)
- **Fundadores:** Mariel Junior, Vitor Pellegrino e Daniel Jachelli
- **O que fazem:** Criam automações inteligentes e web apps customizadas com IA para pequenos e médios negócios
- **Problemas que resolvem:**
  - Negócios perdem clientes por demora nas respostas
  - Falta de organização no WhatsApp comercial
  - Processos manuais repetitivos que geram sobrecarga
  - Atendimento inconsistente que limita o crescimento
- **Soluções oferecidas:**
  - Assistentes virtuais inteligentes (funcionam 24h)
  - Automações personalizadas por nicho
  - Fluxos de atendimento otimizados
  - Qualificação automática de leads
  - Organização de agendas
  - Padronização de atendimento com qualidade profissional
  - Web apps customizadas
- **Diferencial:** Atendimento próximo ao cliente + sistemas 100% personalizados para o perfil de cada negócio + prompts e processos altamente refinados + foco em resultado prático, não apenas tecnologia
- **Oferta atual:** Demonstração gratuita via WhatsApp

### ⚠️ REGRAS DE CONTEÚDO — EXTREMAMENTE IMPORTANTE:
- **NÃO invente** clientes, depoimentos, cases, números de resultados, métricas falsas ou nomes de empresas atendidas
- **NÃO crie** seção de "Depoimentos" ou "Cases de Sucesso" com dados fictícios
- **NÃO use** frases como "mais de 50 clientes atendidos" ou "98% de satisfação" — a empresa está começando
- Toda informação exibida deve ser **verificável e verdadeira** com base no contexto acima
- Em vez de prova social fabricada, use: a proposta de valor, a oferta gratuita, a explicação clara do serviço, os DADOS REAIS DO MERCADO (seção "Por que IA?" abaixo) e elementos de design que transmitam confiança e profissionalismo

---

## 🎨 REFERÊNCIAS VISUAIS DE DESIGN — DENOMINADOR COMUM (CRÍTICO)

Este design deve ser construído a partir da análise de 3 referências de Dribbble de alto nível. Abaixo está o **denominador comum** extraído dessas 3 peças, que deve guiar toda decisão visual:

### Referências analisadas:
1. **Instinct — Satellite Tech Startup** (por Lazarev Agency) — Website de startup de satélite com estética espacial cinematográfica
2. **EqtyLab — AI Platform** (por Awsmd, 951 likes, 185k views) — Plataforma de IA com interface ultra-polida
3. **AI Sales Landing Page** — Landing page focada em conversão com métricas em destaque

### Padrões de design compartilhados (usar TODOS):

**1. Backgrounds com profundidade cinematográfica**
- Fundo escuro NUNCA flat/sólido — sempre com camadas de profundidade
- Gradient mesh sutil que simula nebulosas ou atmosferas espaciais distantes
- Manchas de cor (blobs) desfocadas posicionadas estrategicamente: uma grande em cyan/azul no hero, uma menor em roxo/violeta na metade da página
- Efeito: como se houvesse fontes de luz distantes atrás do conteúdo
- Implementação CSS: múltiplos `radial-gradient` ou `::before`/`::after` com blobs desfocados (filter: blur(80-120px))

**2. Tipografia editorial de alto impacto**
- Headlines ENORMES — a headline do hero deve ser o elemento mais dominante da página
- Peso extra-bold ou bold nas headlines (700-800)
- Tracking/letter-spacing levemente negativo em headlines grandes para criar tensão visual
- Contraste extremo entre tamanho de headline e corpo de texto
- Uma font clean e geométrica para headlines, outra para body — ambas do Google Fonts, NUNCA Inter, Roboto, Arial ou Space Grotesk

**3. Cards com glassmorphism sofisticado**
- Background: rgba(255,255,255,0.03) a rgba(255,255,255,0.06) — extremamente sutil
- Backdrop-filter: blur(12-20px)
- Border: 1px solid rgba(255,255,255,0.06-0.10) — borda quase invisível que revela no hover
- No hover: borda ganha um brilho ciano sutil (border-color: rgba(0,200,255,0.2)) + leve box-shadow com glow
- Border-radius: 16-24px — arredondamentos generosos
- NÃO exagerar no glass — deve ser elegante, não chamativo

**4. Métricas/números em destaque**
- Seções com números grandes (48-72px) em fonte bold com cor de acento (ciano)
- Fonte mono ou semi-mono para os números (contraste visual)
- Acompanhados de label descritivo em texto pequeno e cinza
- Exemplo visual: "78%" em ciano grande + "das empresas já usam IA" em cinza abaixo
- Layout: 3-4 métricas em linha horizontal com separadores sutis

**5. Composição assimétrica e espaço negativo generoso**
- NÃO usar grid uniforme e previsível em toda a página
- Pelo menos 2 seções com layout assimétrico (conteúdo 60/40 ou offset)
- Padding vertical entre seções: 100-140px — dar espaço para respirar
- Elementos que "flutuam" acima da grid — ícones, badges, destaques
- Uma seção com elemento visual que cruza a borda/margem (overlap)

**6. Linhas e separadores sutis**
- Usar linhas horizontais ultra-finas (1px, rgba(255,255,255,0.06)) entre seções
- Elementos decorativos geométricos sutis: um ponto brilhante aqui, uma linha tracejada ali
- Grids de pontos ou patterns muito sutis em determinadas seções (opacity 0.03-0.05)

**7. Hierarquia visual de uma página editorial premium**
- Cada seção tem UM elemento que domina (headline OU visual OU número)
- Transição de tom ao longo da página: hero = impactante/emocional → meio = informativo/racional → final = urgente/ação
- Sensação de folhear uma revista de design, não de scrollar um site template

### Paleta de Cores (extraída da logo + referências)
- **Background principal:** #040810 a #0a1020 (preto azulado profundo)
- **Cor primária:** #00c8ff (ciano elétrico — destaques, CTAs, glows, bordas ativas)
- **Cor secundária:** #1a4fd4 (azul profundo — gradientes e elementos de suporte)
- **Acento sutil:** #6b3fa0 (roxo espacial — usado com parcimônia em gradientes de fundo)
- **Texto principal:** #e8ecf4 (branco suave — NUNCA branco puro #fff)
- **Texto secundário:** #8a95a8 (cinza azulado)
- **Texto muted:** #5a6578 (para labels, captions)
- **Bordas e divisores:** #1a2440
- **Glass card bg:** rgba(255,255,255,0.04)
- **Glass card border:** rgba(255,255,255,0.08)
- **Glow do CTA:** box-shadow: 0 0 40px rgba(0,200,255,0.25), 0 0 80px rgba(0,200,255,0.1)

### Tipografia
- **NÃO use:** Inter, Roboto, Arial, system fonts, Space Grotesk
- **Headlines:** `Sora` ou `Outfit` — geométrica, moderna, com personalidade em pesos bold
- **Body text:** `DM Sans` ou `Plus Jakarta Sans` — clean, legível, agradável
- **Números/dados:** `JetBrains Mono` ou `Space Mono` — apenas em métricas e detalhes tech
- Todas do Google Fonts. O critério: **limpa, moderna, profissional, elegante**.

### Efeitos e Animações
- **Starfield estático** — estrelas pequenas via CSS (radial-gradients aleatórios em ::before), SEM animação pesada
- **Gradient blobs** — 2-3 blobs de cor desfocados (cyan, blue, purple) posicionados no background, estáticos ou com movimento muito lento (60s+ de duração)
- **Scroll reveal** — IntersectionObserver: fade-in + translateY(30px→0) com stagger de 100-150ms entre siblings
- **Hover nos cards** — transição suave (0.3s ease): borda ganha cor + leve translate-y(-4px) + shadow glow
- **Botão CTA** — pulse animation suave e contínua (scale 1→1.03→1 a cada 2s) + glow que "respira"
- **Navbar** — ao scrollar: background com blur aparece gradualmente + sombra sutil
- **FAQ accordion** — max-height transition suave com rotate no ícone
- **Counter animation** — números da seção de dados contam de 0 até o valor final quando entram na viewport
- **REGRA: preferir CSS puro para animações. JS apenas para IntersectionObserver e toggle de idioma. Performance é prioridade.**

---

## 📐 ESTRUTURA DA PÁGINA (seções na ordem)

### 1. NAVBAR (fixa no topo)
- Logo DMV à esquerda (usar a imagem real do arquivo `Logo_dmv.jpg`)
- Links de navegação: Serviços | Como Funciona | Por que IA? | Sobre Nós | FAQ
- Toggle de idioma (PT | EN) — pequeno, discreto, funcional
- CTA button no canto direito: "Agendar Demo Grátis" → WhatsApp
- Scroll behavior: fundo transparente no topo → glassmorphism ao scrollar (backdrop-filter: blur)
- Mobile: hamburger → drawer lateral com animação slide-in

### 2. HERO SECTION (a seção mais importante — 70% da conversão começa aqui)
- **Layout assimétrico:** texto à esquerda (60%), visual à direita (40%) em desktop. Full-width empilhado em mobile.
- **Badge/tag acima da headline:** "✦ Agência de Automação com IA" — em font-mono, cor ciano, fundo glass pill
- **Headline principal (enorme, bold, impactante):**
  - PT: "Seu negócio no piloto automático com Inteligência Artificial"
  - EN: "Your business on autopilot with Artificial Intelligence"
  - *(a headline deve ser o maior elemento visual da página — font-size: clamp(2.5rem, 5vw, 4.5rem), font-weight: 800)*
- **Sub-headline (1-2 frases de suporte):**
  - PT: "Criamos assistentes virtuais e automações sob medida que atendem seus clientes 24h, organizam seus processos e liberam seu tempo para o que realmente importa."
  - EN: "We build custom virtual assistants and automations that serve your customers 24/7, streamline your operations, and free your time for what truly matters."
- **CTA primário:** Botão grande com glow → "Agendar Demonstração Gratuita" → WhatsApp
- **CTA secundário:** Link com seta → "Ver como funciona ↓" → scroll suave
- **Visual à direita:** A logo/nave DMV com efeito de glow atmosférico (box-shadow radial em ciano) como se estivesse navegando no espaço — não é apenas uma imagem jogada, é integrada ao design com efeito de profundidade
- **Selo inferior:** "Demonstração 100% gratuita · Sem compromisso · Resposta imediata" em texto pequeno com ícone de check

### 3. SEÇÃO DE DADOS DO MERCADO — "Por que IA?" (NOVA — com dados REAIS)
**Esta é uma seção crucial de persuasão. Use APENAS dados verificáveis de fontes reais.**

- **Título da seção:** "O mercado já se moveu. E o seu negócio?" / "The market has already moved. Has your business?"
- **Subtítulo:** "Empresas que adotam IA estão crescendo mais rápido, gastando menos e atendendo melhor. Estes são os números reais:" / "Companies adopting AI are growing faster, spending less, and serving better. These are the real numbers:"

**Cards/blocos de dados (layout: 3-4 em linha no desktop, stack em mobile):**
Cada bloco: número GRANDE em ciano (font-mono, 48-64px) + descrição em texto cinza + fonte do dado em texto muted pequeno.

Dados verificados para usar (escolha os 4-6 mais impactantes):

1. **"78%"** — "das empresas já utilizam IA em pelo menos uma função do negócio" — Fonte: McKinsey, State of AI 2025
2. **"4.8×"** — "mais rápido: crescimento de produtividade em indústrias que adotaram IA" — Fonte: IBM Research
3. **"R$3,70 para cada R$1"** — "retorno médio sobre investimento em IA para empresas early adopters" — Fonte: Fullview/Industry Data 2025
4. **"62%"** — "dos consumidores preferem falar com um chatbot do que esperar por um atendente humano" — Fonte: Tidio Research
5. **"70%"** — "das solicitações de clientes podem ser automatizadas com IA" — Fonte: Zendesk/Flowlyn
6. **"~46%"** — "de redução no tempo de resposta ao implementar chatbot com IA" — Fonte: MDPI Academic Study, 2025
7. **"24/7"** — "disponibilidade: a função mais valorizada pelos clientes em chatbots com IA (64% dos consumidores)" — Fonte: Fullview Research
8. **"67%"** — "de aumento médio em vendas após implementação de chatbots" — Fonte: Sales So / Industry Data

**Frase de transição após os dados:**
- PT: "A pergunta não é SE você vai usar IA. É QUANDO. E quem começa antes, sai na frente."
- EN: "The question isn't IF you'll use AI. It's WHEN. And those who start first, lead the race."

**CTA abaixo:** "Descubra o que a IA pode fazer pelo seu negócio — é grátis" → WhatsApp

**REGRA IMPORTANTE:** As fontes dos dados devem aparecer discretamente abaixo de cada número (font-size: 11-12px, cor muted). Isso gera credibilidade. NÃO inventar fontes.

### 4. BARRA DE PROBLEMAS (seção curta e direta)
- Fundo com gradiente levemente diferente (shift sutil para não ser monótono)
- **Título:** "Isso é familiar?" / "Does this sound familiar?"
- 4 pain points em grid (2x2 desktop, stack mobile), cada um com:
  - Ícone SVG minimalista (ou emoji neon)
  - Frase curta e direta:
    1. "Perde clientes porque demora para responder"
    2. "WhatsApp comercial virou uma bagunça"
    3. "Preso em tarefas manuais que não acabam"
    4. "Atendimento que muda de qualidade conforme o dia"
- **Frase de transição (em ciano, centralizada):** "A DMV resolve cada um desses problemas com Inteligência Artificial."

### 5. SERVIÇOS / O QUE FAZEMOS
- **Título:** "Soluções sob medida para o seu negócio" / "Custom-built solutions for your business"
- **Subtítulo:** "Cada sistema que criamos é único — desenhado para o seu nicho, seus processos e seus objetivos."
- **Cards de serviço** (layout criativo — use um bento-grid ou layout assimétrico, NÃO grid 3x2 genérico):

  1. **Assistentes Virtuais com IA** — "Atendimento inteligente 24h que qualifica leads, responde dúvidas e agenda reuniões — tudo sem intervenção humana." — Ícone: 🤖 ou robô SVG
  2. **Automação de Processos** — "Eliminamos tarefas manuais repetitivas. Seus processos rodam sozinhos enquanto você foca no crescimento." — Ícone: ⚡ ou engrenagem
  3. **Fluxos Inteligentes de WhatsApp** — "WhatsApp comercial organizado com respostas rápidas, categorização automática e follow-up inteligente." — Ícone: 💬 ou chat
  4. **Web Apps Customizadas** — "Aplicações web sob medida para resolver problemas específicos do seu negócio." — Ícone: 🖥️ ou janela
  5. **Qualificação Automática de Leads** — "IA que filtra e classifica seus leads, entregando apenas os mais quentes para sua equipe." — Ícone: 🎯 ou funil
  6. **Gestão Inteligente de Agenda** — "Agendamentos automáticos sem conflitos, sem troca infinita de mensagens." — Ícone: 📅 ou calendário

- Cada card: glassmorphism + ícone + título bold + descrição 2 linhas + hover glow
- **IMPORTANTE:** Estes são os serviços REAIS da DMV. NÃO invente serviços adicionais.

### 6. COMO FUNCIONA (processo em 3 passos)
- **Título:** "Simples assim" / "It's that simple"
- Layout: linha horizontal com path/linha conectando os 3 passos (vertical em mobile com timeline)
- Números grandes estilizados (01, 02, 03) em ciano, font-mono

  1. **"Conversa Inicial"** — "Você nos conta como seu negócio funciona e quais são seus desafios — pelo WhatsApp, sem burocracia." — Ícone: balão de conversa
  2. **"Solução Sob Medida"** — "Criamos um sistema de IA personalizado para seu nicho, seus processos e suas necessidades específicas." — Ícone: engrenagem/puzzle
  3. **"Resultados na Prática"** — "Implementamos, acompanhamos e refinamos até tudo estar funcionando perfeitamente." — Ícone: gráfico subindo/foguete

- **CTA:** "Começar agora — é 100% gratuito" → WhatsApp

### 7. DIFERENCIAIS / POR QUE A DMV
- **Título:** "Por que a DMV?" / "Why DMV?"
- **Layout:** 2x2 grid com cards, ou lista elegante com ícone à esquerda + texto à direita
- **NÃO é seção de depoimentos.** São argumentos reais:

  1. **"100% Personalizado"** — "Nada de solução genérica. Cada sistema é criado do zero, desenhado exclusivamente para o seu negócio, seu nicho e seus processos."
  2. **"Atendimento Humano e Próximo"** — "Você fala direto com quem constrói sua solução. Sem intermediários, sem tickets, sem espera."
  3. **"Foco em Resultado Prático"** — "Não vendemos tecnologia pela tecnologia. Medimos o impacto real: mais tempo livre, mais clientes atendidos, mais dinheiro no caixa."
  4. **"Funciona 24 horas, 7 dias"** — "Suas automações não dormem, não tiram férias, não ficam doentes. Seu negócio atendendo e vendendo o tempo todo."

### 8. SOBRE A DMV (breve e humana)
- **Título:** "Quem está por trás da DMV" / "The people behind DMV"
- Texto: "A DMV Enterprise foi fundada por **Mariel Junior**, **Vitor Pellegrino** e **Daniel Jachelli** com uma missão clara: tornar a inteligência artificial acessível para negócios que precisam crescer. Combinamos tecnologia de ponta com atendimento humano e próximo, porque acreditamos que o melhor resultado vem quando se entende de verdade o negócio do cliente."
- Badge/selo: "Driven Mind Vanguard — Vanguarda da Mente Direcionada"
- **NÃO usar fotos dos fundadores** — apenas citar os nomes em bold no texto
- Visual: pode ter um elemento decorativo sutil (linha, ícone, ou a logo com glow baixo)

### 9. FAQ — PERGUNTAS FREQUENTES (destruidor de objeções)
- **Título:** "Perguntas Frequentes" / "Frequently Asked Questions"
- Accordion/collapse com animação suave:

  1. **"Quanto custa?"** → "Cada projeto é personalizado, por isso o valor varia conforme a complexidade. A demonstração inicial é 100% gratuita — nela explicamos o que podemos fazer pelo seu negócio e apresentamos um orçamento transparente."
  2. **"Preciso entender de tecnologia?"** → "Absolutamente não. Nós cuidamos de toda a parte técnica. Você só precisa nos contar como seu negócio funciona hoje e onde sente mais dificuldade."
  3. **"Funciona para o meu tipo de negócio?"** → "Trabalhamos com diversos nichos e cada solução é criada sob medida. Na demonstração gratuita, avaliamos juntos se faz sentido para o seu caso específico."
  4. **"Quanto tempo leva para ficar pronto?"** → "Depende da complexidade, mas a maioria das soluções fica operacional em poucos dias. Priorizamos entregas rápidas sem sacrificar a qualidade."
  5. **"E se eu não gostar?"** → "A demonstração é 100% gratuita e sem compromisso. Você só avança se fizer sentido para o seu negócio. Zero risco."
  6. **"Vocês dão suporte depois?"** → "Sim. Acompanhamos o funcionamento, fazemos ajustes e refinamos continuamente para garantir os melhores resultados possíveis."

- Visual: fundo levemente diferente, ícone de "+" que rota 45° para "×" ao expandir, transição de max-height suave

### 10. CTA FINAL (seção de fechamento — última chance de conversão)
- **Fundo dramático:** gradiente mais intenso, ou blob de luz ciano mais forte, como um "holofote" final
- **Headline:** "Pronto para colocar seu negócio no piloto automático?" / "Ready to put your business on autopilot?"
- **Subtexto:** "Agende uma demonstração gratuita agora e descubra como a IA pode transformar seus resultados."
- **Botão CTA ENORME:** "Falar com a DMV no WhatsApp" → link WhatsApp (com glow máximo, pulse animation)
- **Badges de reforço abaixo do botão:** "✓ Sem compromisso · ✓ 100% gratuito · ✓ Resposta imediata"

### 11. FOOTER
- Logo DMV
- Links de navegação repetidos
- Texto: "© 2025 DMV Enterprise. Todos os direitos reservados."
- "Driven Mind Vanguard — Vanguarda da Mente Direcionada"
- Ícone do WhatsApp clicável → link

### 12. FLOATING WHATSAPP BUTTON (sempre visível)
- Fixo no canto inferior direito
- Ícone do WhatsApp (SVG verde oficial) dentro de um botão circular
- Pulse animation suave e contínua
- Tooltip no hover: "Fale conosco"
- Z-index: 9999
- Em mobile: tamanho mínimo 56px, posição que não conflita com conteúdo

---

## 🔧 REQUISITOS TÉCNICOS

### Stack
- **Escolha a melhor stack** para a qualidade do resultado: HTML + CSS + JS vanilla (portabilidade) OU React/JSX (se o output for superior)
- Critério: **qualidade visual e funcional do resultado final > complexidade da stack**

### Performance
- Logo usada como `<img>` com alt text descritivo
- Animações CSS em propriedades GPU-friendly (transform, opacity)
- Font loading: Google Fonts com `display=swap` e `preconnect`
- IntersectionObserver para scroll reveal e counter animation (lazy)
- Sem bibliotecas externas desnecessárias — JS vanilla para tudo

### Responsividade — Mobile First
- Breakpoints: 375px (mobile base), 768px (tablet), 1024px (desktop), 1440px+ (large)
- Em mobile: hero empilhado, cards em coluna, navbar como drawer, padding reduzido proporcionalmente
- Testar: zero overflow horizontal, botões com área de toque ≥44px, texto legível sem zoom

### Funcionalidade do Toggle de Idioma
- Mecanismo simples: objeto JS com todas as traduções PT e EN
- Ao clicar: percorre todos os elementos `[data-i18n]` e substitui o textContent
- Troca instantânea, sem reload
- Persiste na sessão (variável JS, NÃO localStorage pois pode estar restrito)
- Estado visual no botão: idioma ativo em destaque

### Acessibilidade
- Contraste WCAG AA em todos os textos sobre fundo escuro
- Focus states visíveis em botões e links (outline ciano)
- Alt text em todas as imagens
- Navegação por Tab funcional
- `aria-expanded` nos accordions do FAQ

---

## 📋 CHECKLIST DE QUALIDADE (verificar antes de entregar)

- [ ] Logo da DMV aparece no navbar e no hero, clicável (volta ao topo)
- [ ] TODOS os botões CTA direcionam para o link do WhatsApp
- [ ] Toggle de idioma funciona em TODOS os textos da página (PT ↔ EN)
- [ ] Menu mobile funcional (hamburger → drawer → fecha ao clicar)
- [ ] Floating WhatsApp button visível em todos os tamanhos de tela
- [ ] Scroll reveal funciona em todas as seções
- [ ] Counter animation na seção de dados (números contam de 0 ao valor)
- [ ] FAQ accordion abre/fecha com animação suave
- [ ] Navbar com glassmorphism ao scrollar
- [ ] Zero overflow horizontal em 375px, 768px, 1024px, 1440px
- [ ] Todos os textos são VERDADEIROS (zero dados fabricados)
- [ ] Fontes dos dados de mercado aparecem discretamente (credibilidade)
- [ ] Nenhum Lorem Ipsum, placeholder ou "coming soon"
- [ ] Paleta de cores consistente com a logo (ciano/azul/escuro)
- [ ] Fontes Google carregando corretamente
- [ ] Gradient blobs criam profundidade no background (não flat)
- [ ] Cards com glassmorphism sutil e hover glow
- [ ] Hero headline é o elemento visual mais dominante da página
- [ ] CTA final é visualmente impactante (glow, tamanho, contraste)
- [ ] Página conta a história: Impacto → Problema → Solução → Processo → Confiança → Dados → Ação
- [ ] Copy em PT e EN soa natural (não tradução literal)
- [ ] O site parece uma agência premium de verdade — não um template genérico

---

## 💡 NOTAS FINAIS PARA O CLAUDE CODE / GSD

1. **Use as referências do Dribbble como bússola** — o design deve ter a profundidade cinematográfica do Instinct (Lazarev), o polish sofisticado do EqtyLab (Awsmd), e a clareza de conversão da AI Sales Landing Page. O denominador comum dessas 3 peças está detalhado acima.

2. **A seção "Por que IA?" é a arma secreta** — como a DMV está começando e não tem cases, os dados reais do mercado (McKinsey, IBM, Zendesk) fazem o papel de prova social. Execute essa seção com impacto visual máximo: números grandes, animação de counter, fontes citadas.

3. **Copy é rei** — cada frase deve ter propósito. Corte qualquer texto que não ajude a convencer o visitante a clicar no WhatsApp.

4. **Não fabrique nada** — a confiança vem do profissionalismo do site, da clareza da proposta, dos dados reais do mercado e da oferta gratuita.

5. **A logo é o centro da identidade** — ela está em anexo (Logo_dmv.jpg). Use-a com destaque e extraia dela a energia visual do site inteiro.

6. **Mobile é prioridade #1** — os leads vêm do WhatsApp = estão no celular. A experiência mobile deve ser impecável.

7. **O resultado deve parecer um site premium de R$20.000+** — não um template, não um projeto genérico. Cada pixel deve comunicar: "essa equipe sabe o que está fazendo."

---

## 🔄 SUGESTÃO DE PHASES PARA O GSD

Ao rodar `/gsd:new-project`, o GSD vai criar phases automaticamente. Caso precise orientar, aqui está a estrutura lógica sugerida:

| Phase | Escopo | Prioridade |
|-------|--------|------------|
| **1 — Fundação** | Setup do projeto, estrutura HTML/CSS base, variáveis CSS, fontes, sistema de i18n (PT/EN), starfield background, gradient blobs, navbar com glassmorphism ao scroll | Alta |
| **2 — Hero + CTA** | Hero section completa (headline, sub, CTAs, logo com efeito, badge), floating WhatsApp button, responsividade mobile do hero | Crítica |
| **3 — Dados do Mercado** | Seção "Por que IA?" com os dados reais, counter animation, citação de fontes, layout de métricas, CTA de transição | Alta |
| **4 — Problemas + Serviços** | Barra de problemas (pain points), seção de serviços com cards glassmorphism em bento-grid/layout assimétrico | Alta |
| **5 — Como Funciona + Diferenciais** | Processo em 3 passos com timeline visual, seção de diferenciais com argumentos reais | Média-Alta |
| **6 — Sobre + FAQ + CTA Final + Footer** | Seção sobre a DMV, FAQ accordion, CTA final com glow máximo, footer, scroll reveal em todas as seções | Média-Alta |
| **7 — Polish e QA** | Responsividade em todos os breakpoints, animações, performance, toggle de idioma testado em todos os textos, checklist final | Alta |

**Dica:** Use `/gsd:discuss-phase N` antes de cada phase para refinar decisões visuais e de implementação. O GSD vai perguntar sobre gray areas e capturar suas preferências — isso melhora drasticamente o resultado.

---

*Prompt v3.0 — DMV Enterprise Landing Page*
*Com GSD workflow + análise de referências Dribbble + dados de mercado verificados (McKinsey, IBM, Zendesk, Tidio, MDPI)*
*WhatsApp: https://wa.me/5522981113794*
