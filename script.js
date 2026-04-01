/* ============================================================
   DMV Enterprise Landing Page — script.js
   Navbar scroll detection, i18n toggle, mobile drawer
   ============================================================ */

/* === Part 1: Translations Object (I18N-01, I18N-04) === */

var translations = {
  pt: {
    // Navbar
    'nav.services': 'Servicos',
    'nav.how': 'Como Funciona',
    'nav.why': 'Por que IA?',
    'nav.about': 'Sobre Nos',
    'nav.faq': 'FAQ',
    'nav.cta': 'Agendar Demo Gratis',

    // Hero section
    'hero.badge': '\u2726 Agencia de Automacao com IA',
    'hero.headline': 'Seu negocio no piloto automatico com Inteligencia Artificial',
    'hero.subheadline': 'Criamos assistentes virtuais e automacoes sob medida que atendem seus clientes 24h, organizam seus processos e liberam seu tempo para o que realmente importa.',
    'hero.cta-primary': 'Agendar Demonstracao Gratuita',
    'hero.cta-secondary': 'Ver como funciona \u2193',
    'hero.seal-1': 'Demonstracao 100% gratuita',
    'hero.seal-2': 'Sem compromisso',
    'hero.seal-3': 'Resposta imediata',

    // Floating WhatsApp button
    'float.tooltip': 'Fale conosco',

    // Market Data section — Phase 03
    'why-ai.badge': '\u2666 Dados Reais do Mercado',
    'why-ai.title': 'O mercado ja se moveu. E o seu negocio?',
    'why-ai.subtitle': 'Empresas que adotam IA estao crescendo mais rapido, gastando menos e atendendo melhor. Estes sao os numeros reais:',
    'why-ai.stat1.desc': 'das empresas ja utilizam IA em pelo menos uma funcao do negocio',
    'why-ai.stat1.source': 'McKinsey, State of AI 2025',
    'why-ai.stat2.desc': 'mais rapido: crescimento de produtividade em industrias que adotaram IA',
    'why-ai.stat2.source': 'IBM Research',
    'why-ai.stat3.desc': 'dos consumidores preferem falar com um chatbot do que esperar por um atendente humano',
    'why-ai.stat3.source': 'Tidio Research',
    'why-ai.stat4.desc': 'das solicitacoes de clientes podem ser automatizadas com IA',
    'why-ai.stat4.source': 'Zendesk / Flowlyn',
    'why-ai.stat5.desc': 'de reducao no tempo de resposta ao implementar chatbot com IA',
    'why-ai.stat5.source': 'MDPI Academic Study, 2025',
    'why-ai.stat6.desc': 'de aumento medio em vendas apos implementacao de chatbots',
    'why-ai.stat6.source': 'Sales So / Industry Data',
    'why-ai.transition': 'A pergunta nao e SE voce vai usar IA. E QUANDO. E quem comeca antes, sai na frente.',
    'why-ai.cta': 'Descubra o que a IA pode fazer pelo seu negocio \u2014 e gratis',
    'pain.title': 'Isso e familiar?',
    'pain.item1': 'Perde clientes porque demora para responder',
    'pain.item2': 'WhatsApp comercial virou uma bagunca',
    'pain.item3': 'Preso em tarefas manuais que nao acabam',
    'pain.item4': 'Atendimento que muda de qualidade conforme o dia',
    'pain.transition': 'A DMV resolve cada um desses problemas com Inteligencia Artificial.',
    'services.title': 'Solucoes sob medida para o seu negocio',
    'services.subtitle': 'Cada sistema que criamos e unico \u2014 desenhado para o seu nicho, seus processos e seus objetivos.',
    'services.card1.title': 'Assistentes Virtuais com IA',
    'services.card1.desc': 'Atendimento inteligente 24h que qualifica leads, responde duvidas e agenda reunioes \u2014 tudo sem intervencao humana.',
    'services.card2.title': 'Automacao de Processos',
    'services.card2.desc': 'Eliminamos tarefas manuais repetitivas. Seus processos rodam sozinhos enquanto voce foca no crescimento.',
    'services.card3.title': 'Fluxos Inteligentes de WhatsApp',
    'services.card3.desc': 'WhatsApp comercial organizado com respostas rapidas, categorizacao automatica e follow-up inteligente.',
    'services.card4.title': 'Web Apps Customizadas',
    'services.card4.desc': 'Aplicacoes web sob medida para resolver problemas especificos do seu negocio.',
    'services.card5.title': 'Qualificacao Automatica de Leads',
    'services.card5.desc': 'IA que filtra e classifica seus leads, entregando apenas os mais quentes para sua equipe.',
    'services.card6.title': 'Gestao Inteligente de Agenda',
    'services.card6.desc': 'Agendamentos automaticos sem conflitos, sem troca infinita de mensagens.',
    'how.title': 'Simples assim',
    'diff.title': 'Por que a DMV?',
    'about.title': 'Quem esta por tras da DMV',
    'faq.title': 'Perguntas Frequentes',
    'cta.title': 'Pronto para colocar seu negocio no piloto automatico?',

    // Footer
    'footer.copy': '\u00A9 2025 DMV Enterprise. Todos os direitos reservados.',
    'footer.tagline': 'Driven Mind Vanguard \u2014 Vanguarda da Mente Direcionada'
  },
  en: {
    // Navbar
    'nav.services': 'Services',
    'nav.how': 'How It Works',
    'nav.why': 'Why AI?',
    'nav.about': 'About Us',
    'nav.faq': 'FAQ',
    'nav.cta': 'Schedule Free Demo',

    // Hero section
    'hero.badge': '\u2726 AI Automation Agency',
    'hero.headline': 'Your business on autopilot with Artificial Intelligence',
    'hero.subheadline': 'We build custom virtual assistants and automations that serve your customers 24/7, streamline your operations, and free your time for what truly matters.',
    'hero.cta-primary': 'Schedule Free Demo',
    'hero.cta-secondary': 'See how it works \u2193',
    'hero.seal-1': 'Free demo, no strings attached',
    'hero.seal-2': 'No commitment required',
    'hero.seal-3': 'Immediate response',

    // Floating WhatsApp button
    'float.tooltip': 'Talk to us',

    // Market Data section — Phase 03
    'why-ai.badge': '\u2666 Real Market Data',
    'why-ai.title': 'The market has already moved. Has your business?',
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
    'why-ai.transition': 'The question isn\'t IF you\'ll use AI. It\'s WHEN. And those who start first, lead the race.',
    'why-ai.cta': 'Discover what AI can do for your business \u2014 it\'s free',
    'pain.title': 'Does this sound familiar?',
    'pain.item1': 'Losing customers because you take too long to respond',
    'pain.item2': 'Your business WhatsApp has become a total mess',
    'pain.item3': 'Stuck in never-ending manual tasks',
    'pain.item4': 'Customer service quality that changes depending on the day',
    'pain.transition': 'DMV solves every one of these problems with Artificial Intelligence.',
    'services.title': 'Custom-built solutions for your business',
    'services.subtitle': 'Every system we build is unique \u2014 designed for your niche, your processes, and your goals.',
    'services.card1.title': 'AI Virtual Assistants',
    'services.card1.desc': 'Smart 24/7 support that qualifies leads, answers questions, and books meetings \u2014 all without human intervention.',
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
    'how.title': 'It\'s that simple',
    'diff.title': 'Why DMV?',
    'about.title': 'The people behind DMV',
    'faq.title': 'Frequently Asked Questions',
    'cta.title': 'Ready to put your business on autopilot?',

    // Footer
    'footer.copy': '\u00A9 2025 DMV Enterprise. All rights reserved.',
    'footer.tagline': 'Driven Mind Vanguard \u2014 Vanguard of the Driven Mind'
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
