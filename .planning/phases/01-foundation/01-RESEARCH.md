# Phase 1: Foundation - Research

**Researched:** 2026-04-01
**Domain:** HTML/CSS/JS vanilla -- semantic structure, CSS custom properties, Google Fonts, cinematic backgrounds, glassmorphism navbar, i18n toggle, mobile drawer
**Confidence:** HIGH

## Summary

Phase 1 establishes the complete page shell for the DMV Enterprise landing page: semantic HTML structure with 12 section anchors, a comprehensive CSS custom properties system (colors, typography, spacing), Google Fonts loading (Sora, DM Sans, JetBrains Mono), a cinematic dark background with gradient blobs and starfield, a fixed navbar with glassmorphism scroll effect and mobile drawer, and a bilingual i18n toggle (PT/EN).

The stack is locked to vanilla HTML + CSS + JS with no frameworks and no build step. This is a greenfield static landing page -- every file is created from scratch. The primary technical challenges are: (1) achieving the cinematic depth effect with CSS-only gradient blobs and starfield, (2) implementing a smooth glassmorphism navbar transition on scroll, (3) building a lightweight i18n system with data-i18n attributes, and (4) creating an accessible mobile hamburger drawer with slide-in animation.

All techniques required are well-established CSS/JS patterns with excellent browser support. No external dependencies beyond Google Fonts are needed.

**Primary recommendation:** Create three files (index.html, styles.css, script.js) in the project root. Structure the CSS with a design tokens section using custom properties first, then base styles, then component styles. The JS file handles three concerns only: navbar scroll detection, i18n toggle, and mobile drawer toggle.

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| INFRA-01 | Semantic HTML structure with 12 sections identified by navigation IDs | Semantic HTML5 pattern with header > nav, main > section[id], footer |
| INFRA-02 | Complete CSS variables for palette, typography, and spacing | CSS custom properties design token system -- see Architecture Patterns |
| INFRA-03 | Google Fonts loading Sora, DM Sans, JetBrains Mono with preconnect and display=swap | Google Fonts API v2 embed pattern with preconnect hints |
| INFRA-04 | Base background with blurred gradient blobs (cyan + blue + purple) using filter: blur(80-120px) | CSS positioned pseudo-elements/divs with radial-gradient + filter:blur |
| INFRA-05 | Static starfield via CSS pseudo-elements | box-shadow or radial-gradient on ::before/::after pseudo-elements |
| INFRA-06 | i18n system via JS object with all PT/EN keys and data-i18n attributes on text elements | Vanilla JS i18n pattern with translations object + DOM querySelectorAll |
| NAV-01 | Fixed navbar at top with DMV logo (Logo_dmv.jpg) left and nav links center | position:fixed header with flex layout, img for logo |
| NAV-02 | Nav links: Servicos, Como Funciona, Por que IA?, Sobre Nos, FAQ -- smooth scroll to section | CSS scroll-behavior:smooth + scroll-margin-top for fixed header offset |
| NAV-03 | PT/EN toggle in header -- small, discreet, functional | Button group with active state styling in the nav |
| NAV-04 | CTA button "Agendar Demo Gratis" right side -> WhatsApp link | Anchor styled as button with href to wa.me URL |
| NAV-05 | Navbar transparent at top -> glassmorphism (backdrop-filter:blur) on scroll with subtle shadow | JS scroll listener + CSS class toggle with transition |
| NAV-06 | Mobile menu: hamburger icon -> slide-in drawer with animation, closes on link tap | CSS transform:translateX + JS toggle with aria-expanded |
| I18N-01 | JS object with all PT and EN translations for every data-i18n element | translations object keyed by language, then by element key |
| I18N-02 | PT/EN toggle in header switches all text instantly without reload | querySelectorAll('[data-i18n]') + textContent replacement |
| I18N-03 | Visual state of toggle: active language highlighted | CSS active class on the selected language button |
| I18N-04 | EN translation sounds natural (not literal) in all texts | Content concern -- use natural English phrasing in translations object |
</phase_requirements>

## Standard Stack

### Core
| Technology | Version | Purpose | Why Standard |
|------------|---------|---------|--------------|
| HTML5 | Current | Semantic page structure | Native, zero dependencies, maximum portability |
| CSS3 | Current | Styling, custom properties, animations, backdrop-filter | Native, no build step required, full browser support |
| Vanilla JavaScript | ES6+ | Scroll detection, i18n toggle, mobile drawer | No framework overhead, tiny footprint for 3 simple interactions |
| Google Fonts API v2 | Current | Sora, DM Sans, JetBrains Mono font loading | Free, CDN-served, supports preconnect + display=swap |

### Supporting
| Resource | Purpose | When to Use |
|----------|---------|-------------|
| Google Fonts CDN | Font delivery | Link tags in HTML head with preconnect |
| Logo_dmv.jpg | Brand identity in navbar and hero | img tag with descriptive alt text |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Vanilla JS i18n | i18next / vanilla-i18n library | Adds dependency for 2 languages -- overkill; hand-rolled is simpler |
| CSS scroll-behavior:smooth | JS scrollIntoView | CSS is simpler but JS gives offset control for fixed header |
| CSS custom properties | Sass/SCSS variables | Would require build step -- violates stack constraint |

**No installation required.** This is a zero-dependency static site. Files are served directly.

## Architecture Patterns

### Recommended Project Structure
```
/                           # Project root
  index.html               # Single HTML file with all 12 sections
  styles.css               # Single CSS file with design tokens + all styles
  script.js                # Single JS file: scroll, i18n, drawer
  Logo_dmv.jpg             # Existing logo asset (rename to Logo_dmv.jpg for consistency)
  .planning/               # GSD planning files (not deployed)
```

**Note:** The logo file on disk is named `Logo dmv.jpg` (with a space). The HTML should reference it with the exact filename. Consider renaming to `Logo_dmv.jpg` (underscore) to avoid URL-encoding issues, or use `Logo%20dmv.jpg` in the src attribute.

### Pattern 1: CSS Design Token System
**What:** All visual values defined as CSS custom properties on `:root`
**When to use:** Always -- this is the single source of truth for the entire visual system
**Example:**
```css
/* Source: Design spec from prompt-dmv.md */
:root {
  /* === Colors === */
  --color-primary: #040810;
  --color-bg-end: #0a1020;
  --color-cyan: #00c8ff;
  --color-blue: #1a4fd4;
  --color-purple: #6b3fa0;
  --color-text: #e8ecf4;
  --color-text-secondary: #8a95a8;
  --color-text-muted: #5a6578;
  --color-border: #1a2440;
  
  /* Glass */
  --glass-bg: rgba(255, 255, 255, 0.04);
  --glass-border: rgba(255, 255, 255, 0.08);
  --glass-blur: 16px;
  
  /* Glow */
  --glow-cyan: 0 0 40px rgba(0, 200, 255, 0.25), 0 0 80px rgba(0, 200, 255, 0.1);
  
  /* === Typography === */
  --font-headline: 'Sora', sans-serif;
  --font-body: 'DM Sans', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  
  /* === Spacing === */
  --section-padding: clamp(60px, 10vw, 140px);
  --container-max: 1200px;
  --container-padding: clamp(16px, 4vw, 40px);
  
  /* === Navbar === */
  --navbar-height: 72px;
  
  /* === Transitions === */
  --transition-fast: 0.2s ease;
  --transition-default: 0.3s ease;
  --transition-slow: 0.5s ease;
}
```

### Pattern 2: Cinematic Background with Gradient Blobs
**What:** Positioned pseudo-elements or absolute divs with radial-gradient + filter:blur creating depth
**When to use:** On the body or a dedicated background container that spans the full page
**Example:**
```css
/* Source: Derived from Dribbble reference analysis + CSS blob techniques */
body {
  background: linear-gradient(180deg, var(--color-primary) 0%, var(--color-bg-end) 100%);
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
}

.background-effects {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

/* Cyan blob -- upper left area (hero region) */
.blob-cyan {
  position: absolute;
  top: -10%;
  left: -5%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(0, 200, 255, 0.15) 0%, transparent 70%);
  filter: blur(100px);
  border-radius: 50%;
}

/* Blue blob -- center */
.blob-blue {
  position: absolute;
  top: 30%;
  right: -10%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(26, 79, 212, 0.12) 0%, transparent 70%);
  filter: blur(120px);
  border-radius: 50%;
}

/* Purple blob -- lower region */
.blob-purple {
  position: absolute;
  bottom: 10%;
  left: 20%;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(107, 63, 160, 0.1) 0%, transparent 70%);
  filter: blur(80px);
  border-radius: 50%;
}
```

### Pattern 3: CSS Starfield via box-shadow
**What:** Static star dots using box-shadow on a pseudo-element -- many tiny white dots at varied positions
**When to use:** Applied to the background container to add subtle depth
**Example:**
```css
/* Source: Pure CSS starfield technique (codepen.io/keithclark) */
.background-effects::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* Generate many star positions via box-shadow */
  /* Each value: offsetX offsetY blur spread color */
  background-image:
    radial-gradient(1px 1px at 10% 20%, rgba(255,255,255,0.6), transparent),
    radial-gradient(1px 1px at 30% 50%, rgba(255,255,255,0.4), transparent),
    radial-gradient(1.5px 1.5px at 50% 10%, rgba(255,255,255,0.7), transparent),
    radial-gradient(1px 1px at 70% 80%, rgba(255,255,255,0.3), transparent),
    radial-gradient(1px 1px at 90% 30%, rgba(255,255,255,0.5), transparent);
  /* Repeat many more for density -- or use box-shadow approach */
  background-size: 200px 200px;
  opacity: 0.4;
  z-index: 0;
}
```

**Alternative (box-shadow, more stars):**
```css
.starfield::after {
  content: '';
  position: absolute;
  width: 1px;
  height: 1px;
  top: 0;
  left: 0;
  /* Each comma-separated value is one star */
  box-shadow:
    50px 100px #fff,
    200px 300px rgba(255,255,255,0.8),
    400px 150px rgba(255,255,255,0.5),
    /* ... generate 50-100 values for density */
    800px 400px rgba(255,255,255,0.6);
  opacity: 0.3;
}
```

### Pattern 4: Glassmorphism Navbar with Scroll Transition
**What:** Navbar starts transparent, gains backdrop-blur + background + shadow on scroll
**When to use:** Fixed navbar that must be visible over the cinematic background
**Example:**
```css
/* Source: Glassmorphism implementation guide 2025 */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--navbar-height);
  z-index: 1000;
  background: transparent;
  border-bottom: 1px solid transparent;
  transition: background var(--transition-default),
              border-color var(--transition-default),
              box-shadow var(--transition-default);
  /* Always include -webkit- prefix for Safari */
  -webkit-backdrop-filter: blur(0px);
  backdrop-filter: blur(0px);
}

.navbar.scrolled {
  background: rgba(4, 8, 16, 0.8);
  -webkit-backdrop-filter: blur(16px);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--glass-border);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
}
```

```javascript
// Source: Standard scroll detection pattern
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
```

### Pattern 5: Vanilla JS i18n with data-i18n Attributes
**What:** Translation object in JS, data-i18n attributes in HTML, toggle swaps textContent
**When to use:** The only i18n mechanism for this project -- no library, no localStorage
**Example:**
```javascript
// Source: Vanilla JS i18n pattern (andreasremdt.com + project spec)
const translations = {
  pt: {
    'nav.services': 'Servicos',
    'nav.how': 'Como Funciona',
    'nav.why': 'Por que IA?',
    'nav.about': 'Sobre Nos',
    'nav.faq': 'FAQ',
    'nav.cta': 'Agendar Demo Gratis',
    // ... all page text keys
  },
  en: {
    'nav.services': 'Services',
    'nav.how': 'How It Works',
    'nav.why': 'Why AI?',
    'nav.about': 'About Us',
    'nav.faq': 'FAQ',
    'nav.cta': 'Schedule Free Demo',
    // ... all page text keys
  }
};

let currentLang = 'pt';

function setLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  // Update toggle visual state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  // Update html lang attribute
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
}
```

```html
<!-- HTML usage -->
<a href="#services" data-i18n="nav.services">Servicos</a>
<button class="lang-btn active" data-lang="pt" onclick="setLanguage('pt')">PT</button>
<button class="lang-btn" data-lang="en" onclick="setLanguage('en')">EN</button>
```

### Pattern 6: Mobile Hamburger Drawer
**What:** Off-canvas slide-in drawer for mobile nav, triggered by hamburger button
**When to use:** At breakpoints below 768px
**Example:**
```css
/* Source: Mobile drawer best practices 2025 */
.mobile-menu-toggle {
  display: none;
  background: none;
  border: none;
  color: var(--color-text);
  cursor: pointer;
  padding: 8px;
  z-index: 1001;
}

@media (max-width: 768px) {
  .mobile-menu-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .nav-links {
    position: fixed;
    top: 0;
    right: 0;
    width: 280px;
    height: 100vh;
    background: rgba(4, 8, 16, 0.95);
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    flex-direction: column;
    padding: calc(var(--navbar-height) + 20px) 32px 32px;
    transform: translateX(100%);
    transition: transform var(--transition-default);
    z-index: 999;
    border-left: 1px solid var(--glass-border);
  }
  
  .nav-links.open {
    transform: translateX(0);
  }
  
  /* Overlay behind drawer */
  .drawer-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    visibility: hidden;
    transition: opacity var(--transition-default), visibility var(--transition-default);
    z-index: 998;
  }
  
  .drawer-overlay.visible {
    opacity: 1;
    visibility: visible;
  }
}
```

```javascript
// Source: Accessible drawer toggle pattern
const menuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');
const overlay = document.querySelector('.drawer-overlay');

function toggleDrawer() {
  const isOpen = navLinks.classList.toggle('open');
  overlay.classList.toggle('visible', isOpen);
  menuToggle.setAttribute('aria-expanded', isOpen);
  // Prevent body scroll when drawer is open
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

menuToggle.addEventListener('click', toggleDrawer);
overlay.addEventListener('click', toggleDrawer);

// Close drawer when nav link is tapped
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (navLinks.classList.contains('open')) {
      toggleDrawer();
    }
  });
});
```

### Anti-Patterns to Avoid
- **Using `position: sticky` for navbar**: The gradient blobs with `filter: blur` create a new stacking context that can break sticky positioning. Use `position: fixed` instead.
- **Animating `backdrop-filter` directly**: Transitioning the blur value causes jank. Instead, toggle a CSS class that sets the final value and transition `background` and `box-shadow` for the smooth effect.
- **Using `window.onscroll` directly**: Always use `addEventListener` to avoid overwriting other scroll handlers.
- **localStorage for language**: The spec explicitly says no localStorage (may be restricted). Use a JS variable only.
- **Using `<div>` for everything**: Use semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
- **White `#fff` for text**: The design spec requires `#e8ecf4` (soft white) -- never pure white.
- **System fonts or Inter/Roboto/Arial**: Explicitly forbidden. Only Sora, DM Sans, JetBrains Mono.
- **Placing `<nav>` inside `<main>`**: Site-wide navigation belongs in `<header>`, outside `<main>`.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Font loading optimization | Custom font loader | Google Fonts API v2 with preconnect + display=swap | CDN delivery, automatic subsetting, FOUT handling |
| Smooth scroll | Custom scroll animation with requestAnimationFrame | CSS `scroll-behavior: smooth` + `scroll-margin-top` | Native, performant, one line of CSS |
| Starfield generation | JS canvas star renderer | CSS box-shadow or radial-gradient on pseudo-elements | Zero JS overhead, static is fine per spec |
| Hamburger icon | Custom SVG hamburger | Three `<span>` lines with CSS transforms for X animation | Simpler, more maintainable, well-proven pattern |

**Key insight:** This project's constraint is vanilla HTML/CSS/JS with no build step. Every "don't hand-roll" item uses native browser capabilities rather than external libraries -- the goal is to use the platform, not to add dependencies.

## Common Pitfalls

### Pitfall 1: Gradient Blobs Breaking Layout
**What goes wrong:** Blurred blobs with `filter: blur()` overflow their container, causing horizontal scrollbars
**Why it happens:** Blur extends the rendered area of the element beyond its CSS box
**How to avoid:** Wrap blobs in a container with `overflow: hidden` and `position: fixed` (or absolute). Apply `pointer-events: none` so blobs don't intercept clicks.
**Warning signs:** Horizontal scrollbar appears on any viewport width

### Pitfall 2: Navbar Z-index Stacking Issues
**What goes wrong:** The navbar appears behind gradient blobs or other positioned elements
**Why it happens:** `filter: blur()` on blob elements creates a new stacking context
**How to avoid:** Use explicit z-index layering: background-effects at z-index 0, main content at z-index 1, navbar at z-index 1000, mobile drawer at z-index 999, overlay at z-index 998
**Warning signs:** Clicking nav links doesn't work, or navbar visually appears behind content

### Pitfall 3: backdrop-filter Not Working in Safari
**What goes wrong:** Glassmorphism effect doesn't appear in Safari
**Why it happens:** Safari requires the `-webkit-backdrop-filter` prefix
**How to avoid:** Always include both `-webkit-backdrop-filter` AND `backdrop-filter`. Provide a fallback solid background for very old browsers.
**Warning signs:** Test in Safari -- if navbar background is fully transparent when scrolled, prefix is missing

### Pitfall 4: Smooth Scroll Offset by Fixed Navbar
**What goes wrong:** Scrolling to an anchor places the section heading behind the fixed navbar
**Why it happens:** The browser scrolls the anchor to the very top of the viewport, but the navbar covers the top 72px
**How to avoid:** Add `scroll-margin-top: calc(var(--navbar-height) + 20px)` to all `section[id]` elements. This CSS property is well-supported and eliminates the need for JS offset calculations.
**Warning signs:** Section headings are hidden behind the navbar after clicking a nav link

### Pitfall 5: i18n Missing Keys Cause Blank Text
**What goes wrong:** A text element goes blank when switching languages
**Why it happens:** The data-i18n key exists in PT but not in EN (or vice versa), so textContent is set to undefined
**How to avoid:** Structure the translations object so both languages have identical key sets. Add a guard: only set textContent if the translation value is truthy. Log warnings for missing keys in development.
**Warning signs:** Any element becoming empty after language toggle

### Pitfall 6: Mobile Drawer Body Scroll Leak
**What goes wrong:** The page scrolls behind the open mobile drawer
**Why it happens:** The drawer is a fixed overlay but the body scroll isn't locked
**How to avoid:** Set `document.body.style.overflow = 'hidden'` when drawer opens, restore to `''` when it closes. Also handle the `Escape` key to close the drawer.
**Warning signs:** Content scrolling while the drawer is visually open

### Pitfall 7: Logo Filename with Space
**What goes wrong:** The logo doesn't load because the filename contains a space
**Why it happens:** `Logo dmv.jpg` has a space; in URLs this must be encoded as `%20`
**How to avoid:** Either rename the file to `Logo_dmv.jpg` (preferred) or use `src="Logo%20dmv.jpg"` in the HTML. Document whichever approach is chosen.
**Warning signs:** Broken image icon where the logo should be

### Pitfall 8: Font Flash (FOUT/FOIT)
**What goes wrong:** Text renders in a system font then snaps to the custom font, or text is invisible until fonts load
**Why it happens:** Google Fonts haven't loaded yet
**How to avoid:** Use `display=swap` in the Google Fonts URL (already specified in requirements). Also add `preconnect` link tags for both `fonts.googleapis.com` and `fonts.gstatic.com` (with crossorigin on the latter). Declare sensible font-family fallbacks (e.g., `'Sora', sans-serif`).
**Warning signs:** Text briefly showing in sans-serif before switching to Sora

## Code Examples

### Google Fonts Loading (Verified Pattern)
```html
<!-- Source: Google Fonts API v2 standard embed pattern -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=JetBrains+Mono:wght@400;700&family=Sora:wght@400;600;700;800&display=swap" rel="stylesheet">
```

### Semantic HTML5 Section Structure
```html
<!-- Source: HTML5 semantic elements best practice -->
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DMV Enterprise - Automacao com IA</title>
  <!-- Fonts -->
  <!-- CSS -->
</head>
<body>
  <!-- Background Effects Layer -->
  <div class="background-effects" aria-hidden="true">
    <div class="blob-cyan"></div>
    <div class="blob-blue"></div>
    <div class="blob-purple"></div>
  </div>

  <!-- Navbar -->
  <header class="navbar">
    <nav class="navbar-container">
      <a href="#" class="navbar-logo">
        <img src="Logo_dmv.jpg" alt="DMV Enterprise - Driven Mind Vanguard" width="..." height="...">
      </a>
      <div class="nav-links">
        <a href="#services" data-i18n="nav.services">Servicos</a>
        <a href="#how-it-works" data-i18n="nav.how">Como Funciona</a>
        <a href="#why-ai" data-i18n="nav.why">Por que IA?</a>
        <a href="#about" data-i18n="nav.about">Sobre Nos</a>
        <a href="#faq" data-i18n="nav.faq">FAQ</a>
      </div>
      <div class="navbar-actions">
        <div class="lang-toggle">
          <button class="lang-btn active" data-lang="pt" aria-label="Portugues">PT</button>
          <button class="lang-btn" data-lang="en" aria-label="English">EN</button>
        </div>
        <a href="https://wa.me/5522981113794" class="btn-cta-nav" data-i18n="nav.cta" target="_blank" rel="noopener">Agendar Demo Gratis</a>
      </div>
      <button class="mobile-menu-toggle" aria-label="Menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </nav>
  </header>

  <!-- Drawer Overlay -->
  <div class="drawer-overlay" aria-hidden="true"></div>

  <!-- Main Content -->
  <main>
    <section id="hero"><!-- Phase 2 --></section>
    <section id="why-ai"><!-- Phase 3 --></section>
    <section id="pain-points"><!-- Phase 4 --></section>
    <section id="services"><!-- Phase 4 --></section>
    <section id="how-it-works"><!-- Phase 5 --></section>
    <section id="differentials"><!-- Phase 5 --></section>
    <section id="about"><!-- Phase 6 --></section>
    <section id="faq"><!-- Phase 6 --></section>
    <section id="cta-final"><!-- Phase 6 --></section>
  </main>

  <footer id="footer">
    <!-- Phase 6 -->
  </footer>

  <!-- Floating WhatsApp Button placeholder (Phase 2) -->

  <script src="script.js"></script>
</body>
</html>
```

### CSS Smooth Scroll with Fixed Header Offset
```css
/* Source: CSS scroll-behavior + scroll-margin-top pattern */
html {
  scroll-behavior: smooth;
}

section[id] {
  scroll-margin-top: calc(var(--navbar-height) + 20px);
}
```

### Complete Navbar Scroll Detection
```javascript
// Source: Standard scroll detection with requestAnimationFrame throttling
let ticking = false;

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const navbar = document.querySelector('.navbar');
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
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| jQuery smooth scroll | CSS `scroll-behavior: smooth` | 2020+ (96%+ support) | Zero JS needed for basic smooth scroll |
| JS scroll-offset hacks | CSS `scroll-margin-top` | 2020+ (96%+ support) | One CSS property replaces scroll calculation |
| `-webkit-backdrop-filter` only | Standard `backdrop-filter` + `-webkit-` prefix | 2023+ (95%+ global support) | Still need prefix for Safari |
| localStorage for language pref | JS variable (session only) | Project decision | Avoids restricted API issues |
| `window.onscroll` assignment | `addEventListener('scroll', ...)` | Long-standing | Multiple handlers, no override risk |

**Deprecated/outdated:**
- jQuery for scroll animations: native CSS/JS handles everything
- position: sticky for navbars over filtered backgrounds: use fixed instead
- CSS `@import` for fonts: use `<link>` with preconnect for performance

## Open Questions

1. **Logo filename convention**
   - What we know: File is `Logo dmv.jpg` (with space). HTML will need to reference it.
   - What's unclear: Whether to rename the file or use URL encoding.
   - Recommendation: Rename to `Logo_dmv.jpg` in a task -- simpler and avoids potential issues with some servers.

2. **Section content placeholders in Phase 1**
   - What we know: Phase 1 creates the structure for all 12 sections, but only the navbar is fully built.
   - What's unclear: How much placeholder content to put in empty sections.
   - Recommendation: Add minimal placeholder `<h2>` with section titles (data-i18n tagged) inside each section to make the navbar scroll-to-section work. Keep them minimal -- subsequent phases will fill them.

3. **Number of starfield stars**
   - What we know: CSS box-shadow or radial-gradient for stars. Need enough for visual density without perf impact.
   - What's unclear: Exact number of stars for the right visual effect.
   - Recommendation: Start with 50-80 star positions across 2-3 layers (small, medium, subtle large). Can be tuned in Phase 7 polish.

4. **i18n key scope for Phase 1**
   - What we know: Phase 1 must create the i18n system (INFRA-06) with data-i18n attributes on all text elements.
   - What's unclear: Whether to include translations for ALL future sections now (hero text, services text, etc.) or only navbar + section titles.
   - Recommendation: Include translations for navbar items, section placeholder titles, and the CTA button. Future phases add their own translation keys to the same object.

## Validation Architecture

### Test Framework
| Property | Value |
|----------|-------|
| Framework | Manual browser testing (no test framework -- vanilla static site) |
| Config file | none |
| Quick run command | Open `index.html` in browser (or `npx serve .`) |
| Full suite command | Manual checklist across 4 breakpoints (375px, 768px, 1024px, 1440px) |

### Phase Requirements -> Test Map
| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| INFRA-01 | 12 sections with correct IDs present in HTML | manual | Open index.html, inspect DOM for section IDs | N/A |
| INFRA-02 | CSS variables defined on :root | manual | DevTools > Elements > Computed > check custom properties | N/A |
| INFRA-03 | Fonts loaded: Sora, DM Sans, JetBrains Mono | manual | DevTools > Network > filter fonts; or inspect text computed font | N/A |
| INFRA-04 | Gradient blobs visible (not flat background) | visual | Load page, confirm colored blurred blobs are visible | N/A |
| INFRA-05 | Starfield dots visible | visual | Load page, look for subtle star dots on dark background | N/A |
| INFRA-06 | data-i18n attributes present on text elements | manual | DevTools > search for `data-i18n` in Elements panel | N/A |
| NAV-01 | Logo visible at left, nav links present | visual | Load page at 1440px width | N/A |
| NAV-02 | Clicking nav link scrolls to correct section | manual | Click each nav link, verify scroll target | N/A |
| NAV-03 | PT/EN toggle visible in header | visual | Load page, locate toggle buttons | N/A |
| NAV-04 | CTA button links to WhatsApp | manual | Inspect CTA href = `https://wa.me/5522981113794` | N/A |
| NAV-05 | Navbar glass effect on scroll | manual | Scroll down, verify backdrop-blur + shadow appear | N/A |
| NAV-06 | Mobile drawer opens/closes | manual | Resize to 375px, tap hamburger, verify slide-in | N/A |
| I18N-01 | Translations object has PT and EN keys | manual | Console: check translations object keys | N/A |
| I18N-02 | Toggle switches text without reload | manual | Click EN, verify text changes; click PT, verify back | N/A |
| I18N-03 | Active language visually highlighted | visual | Click toggle, check active button style | N/A |
| I18N-04 | EN text sounds natural | manual | Switch to EN, read all visible text for natural phrasing | N/A |

### Sampling Rate
- **Per task commit:** Open index.html in browser, check relevant requirements visually
- **Per wave merge:** Full manual checklist at 375px and 1440px breakpoints
- **Phase gate:** All 16 requirements verified across 4 breakpoints before `/gsd:verify-work`

### Wave 0 Gaps
- None -- no test framework needed for this vanilla HTML/CSS/JS project. All validation is visual/manual through browser DevTools. A simple HTTP server (`npx serve .` or `python -m http.server`) may be useful for testing but is not required since files can be opened directly.

## Sources

### Primary (HIGH confidence)
- [Google Fonts - Sora](https://fonts.google.com/specimen/Sora) -- font availability and weights confirmed
- [Google Fonts - DM Sans](https://fonts.google.com/specimen/DM+Sans) -- font availability confirmed
- [Google Fonts - JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) -- font availability confirmed
- [MDN - Element.scrollIntoView()](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView) -- scroll API reference
- [MDN - backdrop-filter](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter) -- browser support and syntax
- [W3Schools - HTML Semantic Elements](https://www.w3schools.com/html/html5_semantic_elements.asp) -- semantic structure

### Secondary (MEDIUM confidence)
- [Josh W. Comeau - backdrop-filter](https://www.joshwcomeau.com/css/backdrop-filter/) -- glassmorphism best practices
- [Andreas Remdt - Super Small i18n Script](https://andreasremdt.com/blog/building-a-super-small-and-simple-i18n-script-in-javascript/) -- vanilla i18n pattern
- [Glassmorphism Implementation Guide 2025](https://playground.halfaccessible.com/blog/glassmorphism-design-trend-implementation-guide) -- glass design patterns
- [Glowing Blurred Backgrounds with CSS](https://andrewwalpole.com/blog/glowing-blurred-backgrounds-with-css/) -- blob technique
- [Accessible Hamburger Menu](https://www.impressivewebs.com/accessible-keyboard-friendly-hamburger-menu-slide-out-navigation/) -- drawer accessibility patterns
- [Pure CSS starfield](https://codepen.io/keithclark/pen/DQdKbg) -- starfield technique reference
- [CDN Planet - Preconnect for Google Fonts](https://www.cdnplanet.com/blog/faster-google-webfonts-preconnect/) -- font loading optimization

### Tertiary (LOW confidence)
- None -- all findings verified against official docs or multiple credible sources

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH -- locked by project constraints (vanilla HTML/CSS/JS), no ambiguity
- Architecture: HIGH -- all patterns use well-established CSS/JS techniques with 95%+ browser support
- Pitfalls: HIGH -- drawn from common real-world issues with these exact techniques, well-documented in community

**Research date:** 2026-04-01
**Valid until:** 2026-05-01 (stable technologies, no rapid changes expected)
