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

    // Section titles (placeholders for future phases)
    'why-ai.title': 'Por que IA?',
    'pain.title': 'Isso e familiar?',
    'services.title': 'Solucoes sob medida para o seu negocio',
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

    // Section titles (natural English — NOT literal translations per I18N-04)
    'why-ai.title': 'Why AI?',
    'pain.title': 'Does this sound familiar?',
    'services.title': 'Custom-built solutions for your business',
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
