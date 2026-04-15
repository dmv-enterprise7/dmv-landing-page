# Phase 12: Diferenciais + Quem Somos + FAQ - Context

**Gathered:** 2026-04-15
**Status:** Ready for planning
**Mode:** Auto-generated (discuss skipped)

<domain>
## Phase Boundary

Visitor finishes the persuasion arc with consultative differentials, meets the 3 founders with photos and specialties, and has all diagnosis-oriented objections answered in the FAQ.

**In scope:**
- Diferenciais section: new title/subtitle + 4 replacement cards (PT + EN)
- Quem Somos section: new title/intro/tagline + 3 founder mini-bios with photos + specialty (PT + EN)
- FAQ section: 6 rewritten questions + answers oriented to diagnosis (PT + EN)
- Preserve accordion behavior, glassmorphism styling, responsive layout

**Out of scope:**
- Visual redesign (preserve paleta, fontes, layout)
- Accordion JS behavior changes (preserve max-height, single-open, rotate, aria-expanded)
- Other sections
</domain>

<decisions>
## Implementation Decisions

### Diferenciais (PT — canonical)
- Title: "Por que a DMV?"
- Subtitle: "Não somos mais uma agência. Somos parceiros de diagnóstico e resultado."
- Card 1 — "Diagnóstico antes de tudo": "Nunca vendemos solução sem antes entender o problema real do seu negócio. Escutar vem antes de propor."
- Card 2 — "Visão de processo, não de ferramenta": "A IA é meio, não fim. O que importa é o resultado no seu processo — não a tecnologia da moda."
- Card 3 — "Honestidade técnica": "Se IA não é a resposta para o seu caso, dizemos. Preferimos perder venda a vender algo que não entrega."
- Card 4 — "Parceria de longo prazo": "Implementamos, acompanhamos e evoluímos junto. Seu sucesso com IA é um processo contínuo, não um projeto fechado."

### Diferenciais (EN)
- Title: "Why DMV?"
- Subtitle: "We're not just another agency. We're diagnosis and results partners."
- Card 1 — "Diagnosis before anything": "We never sell a solution before truly understanding your business problem. Listening comes before proposing."
- Card 2 — "Process vision, not tool vision": "AI is a means, not an end. What matters is the outcome in your process — not the trendy technology."
- Card 3 — "Technical honesty": "If AI isn't the answer for your case, we say so. We'd rather lose a sale than sell something that doesn't deliver."
- Card 4 — "Long-term partnership": "We implement, follow up, and evolve together. Your AI success is a continuous process, not a closed project."

### Quem Somos (PT)
- Title: "Quem está por trás da DMV?"
- Intro: "Somos três fundadores com formações complementares — estratégia, tecnologia e dados — unidos por uma convicção: IA só entrega valor quando nasce do entendimento profundo do negócio."
- Tagline: "Driven Mind Vanguard — Vanguarda da Mente Direcionada."
- Bio 1: Foto `foto-vitor.jpg` · Nome "Vitor Pellegrino" · Especialidade "Estratégia & Automação"
- Bio 2: Foto `foto-mariel.jpg` · Nome "Mariel Junior" · Especialidade "IA & Desenvolvimento"
- Bio 3: Foto `foto-daniel.jpg` · Nome "Daniel Jachelli" · Especialidade "Análise de Dados & Otimização"

### Quem Somos (EN)
- Title: "Who's behind DMV?"
- Intro: "We're three founders with complementary backgrounds — strategy, technology, and data — united by one conviction: AI only delivers value when it's born from a deep understanding of the business."
- Tagline: "Driven Mind Vanguard."
- Bio 1: "Vitor Pellegrino" · "Strategy & Automation"
- Bio 2: "Mariel Junior" · "AI & Development"
- Bio 3: "Daniel Jachelli" · "Data Analytics & Optimization"

### FAQ (PT — 6 questions oriented to diagnosis)
- Q1 (custo): "Quanto custa uma consultoria de IA com a DMV?"
  A1: "O diagnóstico inicial é 100% gratuito e sem compromisso. O investimento na solução varia conforme o escopo identificado no diagnóstico — cada negócio tem gargalos diferentes, e a proposta reflete isso."
- Q2 (tecnologia): "Preciso entender de tecnologia para contratar?"
  A2: "Não. Nosso papel é traduzir tecnologia em resultado de negócio. Você foca no que conhece — seu negócio — e nós cuidamos da parte técnica."
- Q3 (segmento): "Vocês atendem qualquer segmento?"
  A3: "Atendemos negócios que têm processos e clientes. Já trabalhamos com clínicas, e-commerces, escritórios, prestadores de serviço, educação e imobiliárias. Se o seu segmento não está na lista, é só conversar — o diagnóstico revela se faz sentido."
- Q4 (tempo): "Quanto tempo leva para ver resultado?"
  A4: "O diagnóstico leva de 5 a 10 dias úteis. A implementação depende da solução, mas o primeiro ganho mensurável costuma aparecer em 30 a 60 dias."
- Q5 (reunião): "Como é a reunião de diagnóstico?"
  A5: "Uma conversa de 30 a 45 minutos, online, para entender seu negócio, seus processos e seus gargalos. Sem venda, sem pressão — o objetivo é clarear se e como a IA pode ajudar."
- Q6 (suporte): "E depois que a solução está no ar?"
  A6: "Não entregamos e sumimos. Monitoramos resultados, ajustamos e evoluímos a solução junto com seu negócio. Suporte contínuo é parte do nosso modelo."

### FAQ (EN)
- Q1: "How much does an AI consulting engagement with DMV cost?"
  A1: "The initial diagnosis is 100% free and with no commitment. The investment in the solution varies according to the scope identified in the diagnosis — every business has different bottlenecks, and the proposal reflects that."
- Q2: "Do I need to understand technology to hire you?"
  A2: "No. Our role is to translate technology into business outcomes. You focus on what you know — your business — and we handle the technical side."
- Q3: "Do you serve any industry?"
  A3: "We serve businesses that have processes and clients. We've worked with clinics, e-commerces, offices, service providers, education, and real estate. If your industry isn't on the list, just reach out — the diagnosis will reveal whether it makes sense."
- Q4: "How long until I see results?"
  A4: "The diagnosis takes 5 to 10 business days. Implementation depends on the solution, but the first measurable gain usually shows up within 30 to 60 days."
- Q5: "What is the diagnosis meeting like?"
  A5: "A 30- to 45-minute online conversation to understand your business, processes, and bottlenecks. No selling, no pressure — the goal is to clarify whether and how AI can help."
- Q6: "What happens after the solution goes live?"
  A6: "We don't deliver and disappear. We monitor results, adjust, and evolve the solution with your business. Ongoing support is part of our model."

### Photo styling
- Circular format (border-radius: 50%) OR rounded card — planner picks whichever is more consistent with existing card styling
- Use `loading="lazy"` for photos
- Preserve aspect ratio; crop with `object-fit: cover`
- Recommended size: 120-160px diameter on desktop, adapt on mobile

### Claude's Discretion
- i18n key naming (extend existing keys vs add new ones)
- Icon choice for the 4 new differential cards (consistent with existing SVG icon style)
- Whether to use existing `.differential-card` class or introduce variant
- Photo frame treatment (circular vs rounded square with glow)
</decisions>

<code_context>
## Existing Code Insights

### Relevant files
- `index.html` — differentials section, about/quem-somos section, FAQ section
- `script.js` — `differentials.*`, `about.*`, `faq.*` i18n keys (PT + EN); FAQ accordion handler (single-open, max-height transition)
- `styles.css` — card styles, FAQ accordion styles, about section styles
- Root images: `foto-vitor.jpg`, `foto-mariel.jpg`, `foto-daniel.jpg` (verified present)

### Patterns to reuse
- Section wrapper (`<section class="section" id="...">`)
- Glassmorphism cards (`--color-bg-card`, `--color-border-subtle`, backdrop-filter)
- Scroll reveal via `.reveal` class
- i18n via `data-i18n` attributes + translations object
- FAQ accordion: single-open pattern, `aria-expanded`, icon rotate, max-height transition
</code_context>

<specifics>
## Specific Ideas
- Preserve all existing styling tokens — this is copy + 3 founder photos
- Differentials card count may change from current (whatever it is) to exactly 4
- Founder bios: minimal card (photo + name + specialty line) — keep it tight; no LinkedIn links or extended bios
- FAQ accordion behavior MUST be preserved (replace question/answer text only)
</specifics>

<deferred>
## Deferred Ideas
None.
</deferred>
