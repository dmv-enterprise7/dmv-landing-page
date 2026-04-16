/* ============================================================
   DMV Enterprise Landing Page — script.js
   Navbar scroll detection, i18n toggle, mobile drawer
   ============================================================ */

/* === Part 1: Translations Object (I18N-01, I18N-04) === */

var translations = {
  pt: {
    // Navbar
    'nav.services': 'Serviços',
    'nav.sectors': 'Setores',
    'nav.how': 'Como Funciona',
    'nav.why': 'Por que IA?',
    'nav.about': 'Sobre Nós',
    'nav.faq': 'FAQ',
    'nav.cta': 'Agende uma Reunião',

    // Hero section
    'hero.badge': '\u2726 Agência de Automação com IA',
    'hero.headline': 'Antes de automatizar, a gente entende onde seu negócio trava',
    'hero.subheadline': 'Fazemos o diagnóstico dos seus processos, identificamos gargalos e só então desenhamos a IA sob medida que seu negócio realmente precisa.',
    'hero.cta-primary': 'Agende seu Diagnóstico Gratuito',
    'hero.cta-secondary': 'Veja como funciona \u2193',
    'hero.seal-1': 'Diagnóstico 100% gratuito',
    'hero.seal-2': 'Sem compromisso',
    'hero.seal-3': 'Resposta imediata',

    // Floating WhatsApp button
    'float.tooltip': 'Fale conosco',

    // Market Data section — Phase 03
    'why-ai.badge': '\u2666 Dados Reais do Mercado',
    'why-ai.title': 'O mercado já se moveu. E o seu negócio?',
    'why-ai.subtitle': 'Empresas que adotam IA estão crescendo mais rápido, gastando menos e atendendo melhor. Estes são os números reais:',
    'why-ai.stat1.desc': 'das empresas já utilizam IA em pelo menos uma função do negócio',
    'why-ai.stat1.source': 'McKinsey, State of AI 2025',
    'why-ai.stat2.desc': 'mais rápido: crescimento de produtividade em indústrias que adotaram IA',
    'why-ai.stat2.source': 'IBM Research',
    'why-ai.stat3.desc': 'dos consumidores preferem falar com um chatbot do que esperar por um atendente humano',
    'why-ai.stat3.source': 'Tidio Research',
    'why-ai.stat4.desc': 'das solicitações de clientes podem ser automatizadas com IA',
    'why-ai.stat4.source': 'Zendesk / Flowlyn',
    'why-ai.stat5.desc': 'de redução no tempo de resposta ao implementar chatbot com IA',
    'why-ai.stat5.source': 'MDPI Academic Study, 2025',
    'why-ai.stat6.desc': 'de aumento médio em vendas após implementação de chatbots',
    'why-ai.stat6.source': 'Sales So / Industry Data',
    'why-ai.transition': 'A pergunta não é SE você vai usar IA. É QUANDO. E quem começa com diagnóstico, começa certo.',
    'why-ai.cta': 'Descubra o que a IA pode fazer pelo seu negócio. Agende uma reunião.',
    'pain.title': 'Você sabe onde está perdendo dinheiro?',
    'pain.item1': 'Quantos leads esfriaram porque ninguém respondeu em 5 minutos?',
    'pain.item2': 'Você sabe quantas etapas manuais seu time repete todo dia sem necessidade?',
    'pain.item3': 'Já mediu quanto tempo sua equipe gasta em tarefas que uma IA resolve em segundos?',
    'pain.item4': 'Seu atendimento muda de qualidade dependendo de quem está no plantão?',
    'pain.transition': 'A maioria das empresas não sabe responder essas perguntas. Nosso trabalho começa exatamente aí.',
    'services.title': 'Soluções que nascem do diagnóstico',
    'services.subtitle': 'Cada sistema que criamos é único, porque cada negócio tem gargalos diferentes.',
    'services.card1.title': 'Assistentes Virtuais com IA',
    'services.card1.desc': 'Atendimento inteligente 24h que qualifica leads, responde dúvidas e agenda reuniões, tudo sem intervenção humana.',
    'services.card2.title': 'Automação de Processos',
    'services.card2.desc': 'Eliminamos tarefas manuais repetitivas. Seus processos rodam sozinhos enquanto você foca no crescimento.',
    'services.card3.title': 'Fluxos Inteligentes de WhatsApp',
    'services.card3.desc': 'WhatsApp comercial organizado com respostas rápidas, categorização automática e follow-up inteligente.',
    'services.card4.title': 'Web Apps Customizadas',
    'services.card4.desc': 'Aplicações web sob medida para resolver problemas específicos do seu negócio.',
    'services.card5.title': 'Qualificação Automática de Leads',
    'services.card5.desc': 'IA que filtra e classifica seus leads, entregando apenas os mais quentes para sua equipe.',
    'services.card6.title': 'Gestão Inteligente de Agenda',
    'services.card6.desc': 'Agendamentos automáticos sem conflitos, sem troca infinita de mensagens.',

    // Sectors section — Phase 11
    'sectors.title': 'Setores que já transformamos com IA',
    'sectors.s1.label': 'Clínicas e Consultórios',
    'sectors.s2.label': 'E-commerces',
    'sectors.s3.label': 'Escritórios e Consultorias',
    'sectors.s4.label': 'Prestadores de Serviço',
    'sectors.s5.label': 'Educação e Cursos',
    'sectors.s6.label': 'Imobiliárias',
    'sectors.closing': 'Se o seu negócio atende clientes, a IA pode ajudar. Agende o diagnóstico e descubra como.',
    'sectors.proof.title': 'O que clientes dizem sobre a DMV',
    'sectors.proof.audioCaption': 'Depoimento em áudio de cliente DMV',
    'sectors.proof.print1Alt': 'Depoimento de cliente DMV sobre os resultados da consultoria',
    'sectors.proof.print2Alt': 'Depoimento de cliente DMV sobre a experiência com o diagnóstico',
    'sectors.proof.print1Caption': 'Automação com IA · Prestadores de Serviço',
    'sectors.proof.print2Caption': 'Assistente Administrativo com IA',

    'how.title': 'Consultoria primeiro. Tecnologia depois.',
    'how.subtitle': 'Nosso processo existe para garantir que cada solução resolve o problema certo.',
    'how.step1.title': 'Raio-X do Negócio',
    'how.step1.desc': 'Estudamos seus processos reais, entrevistamos quem opera no dia a dia e mapeamos cada etapa do seu fluxo. Nada de achismo.',
    'how.step2.title': 'Mapa de Oportunidades',
    'how.step2.desc': 'Identificamos onde a IA faz sentido, e também onde não faz. Apresentamos um diagnóstico honesto com prioridades claras.',
    'how.step3.title': 'Construção Sob Medida',
    'how.step3.desc': 'Desenvolvemos a solução de IA desenhada especificamente para os gargalos que encontramos. Sem templates genéricos.',
    'how.step4.title': 'Acompanhamento e Otimização',
    'how.step4.desc': 'Não entregamos e sumimos. Monitoramos resultados, ajustamos e evoluímos a solução junto com seu negócio.',
    'how.cta': 'Comece pelo diagnóstico gratuito',
    'diff.title': 'Por que a DMV?',
    'diff.subtitle': 'Não somos mais uma agência. Somos parceiros de diagnóstico e resultado.',
    'diff.item1.title': 'Diagnóstico antes de tudo',
    'diff.item1.desc': 'Nunca vendemos solução sem antes entender o problema real do seu negócio. Escutar vem antes de propor.',
    'diff.item2.title': 'Visão de processo, não de ferramenta',
    'diff.item2.desc': 'A IA é meio, não fim. O que importa é o resultado no seu processo, não a tecnologia da moda.',
    'diff.item3.title': 'Honestidade técnica',
    'diff.item3.desc': 'Se IA não é a resposta para o seu caso, dizemos. Preferimos perder venda a vender algo que não entrega.',
    'diff.item4.title': 'Parceria de longo prazo',
    'diff.item4.desc': 'Implementamos, acompanhamos e evoluímos junto. Seu sucesso com IA é um processo contínuo, não um projeto fechado.',
    // About section — Phase 06 (ABOUT-01 through ABOUT-04)
    'about.badge': '\u2666 Quem Somos',
    'about.title': 'Quem está por trás da DMV?',
    'about.intro': 'Somos três fundadores com formações complementares em estratégia, tecnologia e dados, unidas por uma convicção: IA só entrega valor quando nasce do entendimento profundo do negócio.',
    'about.tagline': 'Driven Mind Vanguard: Vanguarda da Mente Direcionada.',
    'about.founder1.specialty': 'Estratégia & Automação',
    'about.founder2.specialty': 'IA & Desenvolvimento',
    'about.founder3.specialty': 'Análise de Dados & Otimização',

    // FAQ section — Phase 06 (FAQ-01 through FAQ-05)
    'faq.title': 'Perguntas Frequentes',
    'faq.subtitle': 'Tire suas dúvidas antes de começar.',
    'faq.q1': 'Quanto custa uma consultoria de IA com a DMV?',
    'faq.a1': 'O diagnóstico inicial é 100% gratuito e sem compromisso. O investimento na solução varia conforme o escopo identificado no diagnóstico, e cada negócio tem gargalos diferentes, o que a proposta reflete.',
    'faq.q2': 'Preciso entender de tecnologia para contratar?',
    'faq.a2': 'Não. Nosso papel é traduzir tecnologia em resultado de negócio. Você foca no que conhece (seu negócio), e nós cuidamos da parte técnica.',
    'faq.q3': 'Vocês atendem qualquer segmento?',
    'faq.a3': 'Atendemos negócios que têm processos e clientes. Já trabalhamos com clínicas, e-commerces, escritórios, prestadores de serviço, educação e imobiliárias. Se o seu segmento não está na lista, é só conversar. O diagnóstico revela se faz sentido.',
    'faq.q4': 'Quanto tempo leva para ver resultado?',
    'faq.a4': 'O diagnóstico leva de 5 a 10 dias úteis. A implementação depende da solução, mas o primeiro ganho mensurável costuma aparecer em 30 a 60 dias.',
    'faq.q5': 'Como é a reunião de diagnóstico?',
    'faq.a5': 'Uma conversa de 30 a 45 minutos, online, para entender seu negócio, seus processos e seus gargalos. Sem venda, sem pressão. O objetivo é clarear se e como a IA pode ajudar.',
    'faq.q6': 'E depois que a solução está no ar?',
    'faq.a6': 'Não entregamos e sumimos. Monitoramos resultados, ajustamos e evoluímos a solução junto com seu negócio. Suporte contínuo é parte do nosso modelo.',

    // Final CTA section — Phase 06 (CTA-01 through CTA-03)
    'cta.headline': 'Pronto para descobrir onde seu negócio pode ir mais longe?',
    'cta.subheadline': 'Comece com um diagnóstico gratuito. Sem compromisso, sem enrolação.',
    'cta.button': 'Falar com um especialista agora',
    'cta.badge1': 'Sem compromisso',
    'cta.badge2': '100% gratuito',
    'cta.badge3': 'Resposta imediata',

    // Footer
    'footer.copy': '\u00A9 2026 DMV Enterprise. Todos os direitos reservados.',
    'footer.tagline': 'Driven Mind Vanguard: Vanguarda da Mente Direcionada'
  },
  en: {
    // Navbar
    'nav.services': 'Services',
    'nav.how': 'How It Works',
    'nav.why': 'Why AI?',
    'nav.about': 'About Us',
    'nav.faq': 'FAQ',
    'nav.sectors': 'Sectors',
    'nav.cta': 'Schedule a Meeting',

    // Hero section
    'hero.badge': '\u2726 AI Automation Agency',
    'hero.headline': 'Before automating, we understand where your business gets stuck',
    'hero.subheadline': 'We diagnose your processes, identify bottlenecks, and only then design the tailor-made AI your business really needs.',
    'hero.cta-primary': 'Schedule Your Free Diagnosis',
    'hero.cta-secondary': 'See how it works \u2193',
    'hero.seal-1': '100% free diagnosis',
    'hero.seal-2': 'No commitment',
    'hero.seal-3': 'Immediate response',

    // Floating WhatsApp button
    'float.tooltip': 'Talk to us',

    // Market Data section — Phase 03
    'why-ai.badge': '\u2666 Real Market Data',
    'why-ai.title': 'The market has already moved. What about your business?',
    'why-ai.subtitle': 'Companies adopting AI are growing faster, spending less, and serving better. These are the real numbers:',
    'why-ai.stat1.desc': 'of companies already use AI in at least one business function',
    'why-ai.stat1.source': 'McKinsey, State of AI 2025',
    'why-ai.stat2.desc': 'faster productivity growth in industries that adopted AI',
    'why-ai.stat2.source': 'IBM Research',
    'why-ai.stat3.desc': 'of consumers prefer talking to a chatbot over waiting for a human agent',
    'why-ai.stat3.source': 'Tidio Research',
    'why-ai.stat4.desc': 'of customer requests can be automated with AI',
    'why-ai.stat4.source': 'Zendesk / Flowlyn',
    'why-ai.stat5.desc': 'reduction in response time after implementing an AI chatbot',
    'why-ai.stat5.source': 'MDPI Academic Study, 2025',
    'why-ai.stat6.desc': 'average increase in sales after chatbot implementation',
    'why-ai.stat6.source': 'Sales So / Industry Data',
    'why-ai.transition': 'The question isn\'t IF you\'ll use AI. It\'s WHEN. And those who start with diagnosis start right.',
    'why-ai.cta': 'Discover what AI can do for your business. Schedule a meeting.',
    'pain.title': 'Do you know where you\'re losing money?',
    'pain.item1': 'How many leads went cold because no one responded within 5 minutes?',
    'pain.item2': 'Do you know how many manual steps your team repeats every day without need?',
    'pain.item3': 'Have you measured how much time your team spends on tasks AI solves in seconds?',
    'pain.item4': 'Does your service quality change depending on who\'s on shift?',
    'pain.transition': 'Most businesses can\'t answer these questions. That\'s exactly where our work begins.',
    'services.title': 'Solutions born from diagnosis',
    'services.subtitle': 'Every system we build is unique, because every business has different bottlenecks.',
    'services.card1.title': 'AI Virtual Assistants',
    'services.card1.desc': 'Smart 24/7 support that qualifies leads, answers questions, and books meetings, all without human intervention.',
    'services.card2.title': 'Process Automation',
    'services.card2.desc': 'We eliminate repetitive manual tasks. Your workflows run on their own while you focus on growth.',
    'services.card3.title': 'Smart WhatsApp Flows',
    'services.card3.desc': 'Organized business WhatsApp with fast replies, automatic categorization, and intelligent follow-ups.',
    'services.card4.title': 'Custom Web Apps',
    'services.card4.desc': 'Tailor-made web applications to solve your business\u0027s specific challenges.',
    'services.card5.title': 'Automatic Lead Qualification',
    'services.card5.desc': 'AI that filters and ranks your leads, delivering only the hottest ones to your team.',
    'services.card6.title': 'Smart Scheduling',
    'services.card6.desc': 'Automatic bookings with zero conflicts and no endless back-and-forth messages.',

    // Sectors section — Phase 11
    'sectors.title': 'Sectors we\u0027ve already transformed with AI',
    'sectors.s1.label': 'Clinics & Medical Offices',
    'sectors.s2.label': 'E-commerces',
    'sectors.s3.label': 'Offices & Consulting Firms',
    'sectors.s4.label': 'Service Providers',
    'sectors.s5.label': 'Education & Courses',
    'sectors.s6.label': 'Real Estate',
    'sectors.closing': 'If your business serves clients, AI can help. Schedule your diagnosis and find out how.',
    'sectors.proof.title': 'What clients say about DMV',
    'sectors.proof.audioCaption': 'Audio testimonial from a DMV client',
    'sectors.proof.print1Alt': 'DMV client testimonial about the consulting results',
    'sectors.proof.print2Alt': 'DMV client testimonial about the diagnosis experience',
    'sectors.proof.print1Caption': 'AI Automation · Service Providers',
    'sectors.proof.print2Caption': 'AI Administrative Assistant',

    'how.title': 'Consulting first. Technology after.',
    'how.subtitle': 'Our process exists to ensure each solution fixes the right problem.',
    'how.step1.title': 'Business X-Ray',
    'how.step1.desc': 'We study your real processes, interview the people who operate daily, and map every step of your workflow. No guesswork.',
    'how.step2.title': 'Opportunity Map',
    'how.step2.desc': 'We identify where AI makes sense, and also where it doesn\'t. We present an honest diagnosis with clear priorities.',
    'how.step3.title': 'Tailor-Made Build',
    'how.step3.desc': 'We develop the AI solution designed specifically for the bottlenecks we found. No generic templates.',
    'how.step4.title': 'Follow-up and Optimization',
    'how.step4.desc': 'We don\'t deliver and disappear. We monitor results, adjust, and evolve the solution with your business.',
    'how.cta': 'Start with the free diagnosis',
    'diff.title': 'Why DMV?',
    'diff.subtitle': 'We\'re not just another agency. We\'re diagnosis and results partners.',
    'diff.item1.title': 'Diagnosis before anything',
    'diff.item1.desc': 'We never sell a solution before truly understanding your business problem. Listening comes before proposing.',
    'diff.item2.title': 'Process vision, not tool vision',
    'diff.item2.desc': 'AI is a means, not an end. What matters is the outcome in your process, not the trendy technology.',
    'diff.item3.title': 'Technical honesty',
    'diff.item3.desc': 'If AI isn\'t the answer for your case, we say so. We\'d rather lose a sale than sell something that doesn\'t deliver.',
    'diff.item4.title': 'Long-term partnership',
    'diff.item4.desc': 'We implement, follow up, and evolve together. Your AI success is a continuous process, not a closed project.',
    // About section — Phase 06 (ABOUT-01 through ABOUT-04)
    'about.badge': '\u2666 Who We Are',
    'about.title': 'Who\'s behind DMV?',
    'about.intro': 'We\'re three founders with complementary backgrounds in strategy, technology, and data, united by one conviction: AI only delivers value when it\'s born from a deep understanding of the business.',
    'about.tagline': 'Driven Mind Vanguard.',
    'about.founder1.specialty': 'Strategy & Automation',
    'about.founder2.specialty': 'AI & Development',
    'about.founder3.specialty': 'Data Analytics & Optimization',

    // FAQ section — Phase 06 (FAQ-01 through FAQ-05)
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Get your questions answered before you start.',
    'faq.q1': 'How much does an AI consulting engagement with DMV cost?',
    'faq.a1': 'The initial diagnosis is 100% free and with no commitment. The investment in the solution varies according to the scope identified in the diagnosis, and every business has different bottlenecks, which the proposal reflects.',
    'faq.q2': 'Do I need to understand technology to hire you?',
    'faq.a2': 'No. Our role is to translate technology into business outcomes. You focus on what you know (your business), and we handle the technical side.',
    'faq.q3': 'Do you serve any industry?',
    'faq.a3': "We serve businesses that have processes and clients. We've worked with clinics, e-commerces, offices, service providers, education, and real estate. If your industry isn't on the list, just reach out. The diagnosis will reveal whether it makes sense.",
    'faq.q4': 'How long until I see results?',
    'faq.a4': 'The diagnosis takes 5 to 10 business days. Implementation depends on the solution, but the first measurable gain usually shows up within 30 to 60 days.',
    'faq.q5': 'What is the diagnosis meeting like?',
    'faq.a5': 'A 30- to 45-minute online conversation to understand your business, processes, and bottlenecks. No selling, no pressure. The goal is to clarify whether and how AI can help.',
    'faq.q6': 'What happens after the solution goes live?',
    'faq.a6': "We don't deliver and disappear. We monitor results, adjust, and evolve the solution with your business. Ongoing support is part of our model.",

    // Final CTA section — Phase 06 (CTA-01 through CTA-03)
    'cta.headline': 'Ready to discover how far your business can go?',
    'cta.subheadline': 'Start with a free diagnosis. No commitment, no runaround.',
    'cta.button': 'Talk to a specialist now',
    'cta.badge1': 'No commitment',
    'cta.badge2': '100% free',
    'cta.badge3': 'Immediate response',

    // Footer
    'footer.copy': '\u00A9 2026 DMV Enterprise. All rights reserved.',
    'footer.tagline': 'Driven Mind Vanguard: Vanguard of the Driven Mind'
  }
};


/* === Part 2: i18n System (I18N-02, I18N-03, INFRA-06) === */

var currentLang = 'pt';

function setLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    // Skip number elements — their textContent is managed by counter animation
    if (el.getAttribute('data-i18n-number') === 'true') return;
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-alt]').forEach(function(el) {
    var key = el.getAttribute('data-i18n-alt');
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute('alt', translations[lang][key]);
    }
  });

  // Update toggle visual state (I18N-03)
  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update html lang attribute
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
}


/* === Part 3: Navbar Scroll Detection (NAV-05) === */

(function() {
  var ticking = false;
  var navbar = document.getElementById('navbar');

  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
        ticking = false;
      });
      ticking = true;
    }
  });
})();


/* === Part 4: Mobile Drawer Toggle (NAV-06) === */

(function() {
  var menuToggle = document.querySelector('.mobile-menu-toggle');
  var navLinks = document.getElementById('nav-links');
  var overlay = document.getElementById('drawer-overlay');

  function toggleDrawer() {
    var isOpen = navLinks.classList.toggle('open');
    overlay.classList.toggle('visible', isOpen);
    menuToggle.classList.toggle('active', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  menuToggle.addEventListener('click', toggleDrawer);
  overlay.addEventListener('click', toggleDrawer);

  // Close drawer when a nav link is tapped
  navLinks.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
      if (navLinks.classList.contains('open')) {
        toggleDrawer();
      }
    });
  });

  // Close drawer on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && navLinks.classList.contains('open')) {
      toggleDrawer();
    }
  });
})();


/* === Part 5: Language Toggle Event Listeners === */

(function() {
  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      setLanguage(this.dataset.lang);
    });
  });
})();


/* === Part 6: Counter Animation (MARKET-04, ANIM-05) === */

(function() {
  var animated = false;
  var statNumbers = document.querySelectorAll('.stat-number[data-target]');

  if (statNumbers.length === 0) return;

  function animateCounter(el) {
    var target = parseFloat(el.getAttribute('data-target'));
    var suffix = el.getAttribute('data-suffix') || '';
    var prefix = el.getAttribute('data-prefix') || '';
    var decimals = parseInt(el.getAttribute('data-decimals'), 10) || 0;
    var duration = 2000; // 2 seconds
    var startTime = null;

    function easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var easedProgress = easeOutCubic(progress);
      var current = easedProgress * target;

      if (decimals > 0) {
        el.textContent = prefix + current.toFixed(decimals) + suffix;
      } else {
        el.textContent = prefix + Math.round(current) + suffix;
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        // Ensure final value is exact
        if (decimals > 0) {
          el.textContent = prefix + target.toFixed(decimals) + suffix;
        } else {
          el.textContent = prefix + target + suffix;
        }
      }
    }

    requestAnimationFrame(step);
  }

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting && !animated) {
        animated = true;
        statNumbers.forEach(function(el) {
          animateCounter(el);
        });
        observer.disconnect();
      }
    });
  }, {
    threshold: 0.3
  });

  // Observe the first stat-number as trigger for all
  observer.observe(statNumbers[0]);
})();

/* === Part 7: FAQ Accordion Toggle (FAQ-01, FAQ-03, FAQ-04, FAQ-05) === */

(function() {
  var faqBtns = document.querySelectorAll('.faq-btn');
  if (faqBtns.length === 0) return;

  faqBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var isExpanded = btn.getAttribute('aria-expanded') === 'true';
      var answerId = btn.getAttribute('aria-controls');
      var answerPanel = document.getElementById(answerId);

      // Close all other open items first
      faqBtns.forEach(function(otherBtn) {
        if (otherBtn !== btn) {
          otherBtn.setAttribute('aria-expanded', 'false');
          var otherId = otherBtn.getAttribute('aria-controls');
          var otherPanel = document.getElementById(otherId);
          if (otherPanel) {
            otherPanel.classList.remove('open');
          }
        }
      });

      // Toggle the clicked item
      if (isExpanded) {
        btn.setAttribute('aria-expanded', 'false');
        if (answerPanel) answerPanel.classList.remove('open');
      } else {
        btn.setAttribute('aria-expanded', 'true');
        if (answerPanel) answerPanel.classList.add('open');
      }
    });
  });
})();


/* === Part 8: Scroll Reveal (ANIM-01) === */

(function() {
  // Selectors for standalone reveal elements (observed individually)
  var standaloneSelectors = [
    'section h2',
    '.why-ai-subtitle',
    '.services-subtitle',
    '.how-subtitle',
    '.diff-subtitle',
    '.faq-subtitle',
    '.cta-final-sub',
    '.cta-final-headline',
    '.hero-badge',
    '.section-badge',
    '.about-inner',
    '.market-transition',
    '.pain-transition',
    '.how-cta',
    '.cta-badges'
  ];

  // Selectors for grid/flex siblings (CSS nth-child stagger applies)
  var siblingSelectors = [
    '.stats-grid > .stat-card',
    '.pain-points-grid > .pain-card',
    '.services-bento > .service-card',
    '.sectors-grid > .sector-card',
    '.how-it-works-steps > .step-card',
    '.diff-grid > .diff-card',
    '.faq-list > .faq-item',
    '.cta-badges > .cta-badge-item'
  ];

  // Add .reveal class to all target elements
  standaloneSelectors.forEach(function(sel) {
    document.querySelectorAll(sel).forEach(function(el) {
      el.classList.add('reveal');
    });
  });

  siblingSelectors.forEach(function(sel) {
    document.querySelectorAll(sel).forEach(function(el) {
      el.classList.add('reveal');
    });
  });

  // Observe each .reveal element — reveal it once and disconnect
  var revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length === 0) return;

  // Check for reduced-motion preference — skip animation entirely
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    revealElements.forEach(function(el) {
      el.classList.add('revealed');
    });
    return;
  }

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.01,
    rootMargin: '0px 0px 50px 0px'
  });

  revealElements.forEach(function(el) {
    observer.observe(el);
  });
})();
