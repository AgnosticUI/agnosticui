# Landing / Marketing Page Playbook — PROMPT-3-FRAMEWORKS.md

## Overview

**New components (Lab / Fx):** BadgeFx, ButtonFx, IconButtonFx

**Supporting components:** Header, Button, Card, Badge, Avatar, Divider, Accordion, Tabs

**Design inspiration:** Linear, Vercel, Stripe

**Target aesthetic:** High-contrast marketing page. Inter typeface. Bold hero with animated
Lab components. Sections: Hero → Features → Testimonials → Pricing → FAQ → Footer.
Supports light/dark themes and multiple skins via SkinSwitcher FAB.

---

## Directory Structure

All output relative to `v2/playbooks/landing/`. Three projects:

```
react-example/
  index.html
  src/
    main.tsx
    App.tsx
    App.css
    SkinSwitcher.tsx
    data/landing.ts

vue-example/
  index.html
  src/
    main.ts
    App.vue
    style.css
    SkinSwitcher.vue
    data/landing.ts

lit-example/
  index.html
  src/
    main.ts
    landing-app.ts
    index.css
    skin-switcher.ts
    data/landing.ts
```

---

## Project Setup

### React

```bash
npm create vite@latest react-example -- --template react-ts
cd react-example
npm install
npm install @lit/react
npx agnosticui-cli init --framework react --skip-prompts
npx agnosticui-cli add \
  Header Button ButtonFx BadgeFx IconButtonFx Card Badge Avatar Divider Accordion Tabs
```

> **Important:** Install `@lit/react` explicitly. Without it the build fails with a
> "Two different types with this name exist" error caused by `@lit/react` resolving
> from the workspace root rather than the local `node_modules`.

`tsconfig.app.json` — relax for CLI-generated component code:

```json
"strict": false,
"noUnusedLocals": false,
"noUnusedParameters": false
```

Also exclude CLI components from type-checking:

```json
"exclude": ["agnosticui", "**/agnosticui/**", "src/components/**"]
```

### Vue

```bash
npm create vite@latest vue-example -- --template vue-ts
cd vue-example
npm install
npx agnosticui-cli init --framework vue --skip-prompts
npx agnosticui-cli add \
  Header Button ButtonFx BadgeFx IconButtonFx Card Badge Avatar Divider Accordion Tabs
```

`vite.config.ts`:

```ts
vue({
  template: {
    compilerOptions: { isCustomElement: (tag) => tag.startsWith('ag-') },
  },
})
```

`tsconfig.app.json` — relax for CLI-generated component code:

```json
"strict": false,
"noUnusedLocals": false,
"noUnusedParameters": false
```

### Lit

```bash
npm create vite@latest lit-example -- --template lit-ts
cd lit-example
npm install
npx agnosticui-cli init --framework lit --skip-prompts
npx agnosticui-cli add \
  Header Button ButtonFx BadgeFx IconButtonFx Card Badge Avatar Divider Accordion Tabs
```

---

## Token & Font Setup

### `index.html` — add to `<head>`

```html
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
  rel="stylesheet"
/>
```

### Entry point imports

**React `src/main.tsx`:**

```ts
import './components/ag/styles/ag-tokens.css'
import './components/ag/styles/ag-tokens-dark.css'
import './components/ag/styles/skins-bundle.css'
import './components/ag/styles/skin-switcher.css'
import './App.css'
import App from './App'
import ReactDOM from 'react-dom/client'
ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
```

**Vue `src/main.ts`:**

```ts
import './components/ag/styles/ag-tokens.css'
import './components/ag/styles/ag-tokens-dark.css'
import './components/ag/styles/skins-bundle.css'
import './components/ag/styles/skin-switcher.css'
import './style.css'
import { createApp } from 'vue'
import App from './App.vue'
createApp(App).mount('#app')
```

**Lit `src/main.ts`:**

```ts
import './components/ag/styles/ag-tokens.css'
import './components/ag/styles/ag-tokens-dark.css'
import './components/ag/styles/skins-bundle.css'
import './components/ag/styles/skin-switcher.css'
import './index.css'
import './landing-app'
```

---

## SkinSwitcher

Copy the SkinSwitcher from the blog playbook:

- **React:** copy `v2/playbooks/blog/react-example/src/SkinSwitcher.tsx`
- **Vue:** copy `v2/playbooks/blog/vue-example/src/SkinSwitcher.vue`
- **Lit:** copy `v2/playbooks/blog/lit-example/src/skin-switcher.ts`

The relative import path `../../../../skins/skin-switcher-core.js` resolves
correctly from `v2/playbooks/landing/[framework]/src/`.

---

## Landing Data — `src/data/landing.ts`

Create this file identically in all three projects:

```ts
export const hero = {
  badge: "v2.0 Now Available",
  headline: "Build Once,\nRun Everywhere",
  subheadline: "AgnosticUI delivers production-ready components working identically in React, Vue, and Lit via a single CSS token system.",
  primaryCta: "Get Started Free",
  secondaryCta: "View Docs",
}

export const features = [
  {
    id: 1,
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"/><path d="M7 7h.01"/></svg>',
    label: "Framework Agnostic",
    title: "One API, Every Framework",
    description: "The same component props and events across React, Vue, and Lit. Write once, deploy to any stack.",
    variant: "primary",
  },
  {
    id: 2,
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>',
    label: "Token-based Theming",
    title: "CSS Token System",
    description: "Every color, spacing, and radius value is a CSS custom property. Skin your entire design system in minutes.",
    variant: "success",
  },
  {
    id: 3,
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    label: "Accessible by Default",
    title: "WCAG 2.1 AA Built-in",
    description: "ARIA roles, keyboard navigation, and focus management are baked in. Accessibility is never an afterthought.",
    variant: "info",
  },
  {
    id: 4,
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2m4.93-14.93 1.41-1.41M5.66 18.34l-1.41 1.41M20 12h2M2 12h2m14.93 4.93 1.41 1.41M5.66 5.66 4.25 4.25"/></svg>',
    label: "Dark Mode Ready",
    title: "First-class Dark Mode",
    description: "Light and dark themes ship out of the box via a single data-theme attribute. No extra configuration.",
    variant: "warning",
  },
  {
    id: 5,
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>',
    label: "Animated Lab Components",
    title: "Motion That Delights",
    description: "ButtonFx, BadgeFx, and IconButtonFx add tasteful CSS animations with full reduced-motion support.",
    variant: "secondary",
  },
  {
    id: 6,
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    label: "Developer Experience",
    title: "CLI-first Workflow",
    description: "A single CLI command scaffolds any component directly into your project. No wrappers, no magic — just code.",
    variant: "monochrome",
  },
]

export const testimonials = [
  {
    id: 1,
    quote: "AgnosticUI let us ship the same design system to our React and Vue apps without duplicating a single line of CSS.",
    name: "Sarah K.",
    initials: "SK",
    role: "CTO, Layered Labs",
    variant: "info",
  },
  {
    id: 2,
    quote: "The CLI is brilliant. We scaffolded a full component library in minutes, not days. Our team was up and running before lunch.",
    name: "Marcus R.",
    initials: "MR",
    role: "Lead Frontend, Pulse",
    variant: "success",
  },
  {
    id: 3,
    quote: "Finally a UI library that doesn't force a framework opinion on us. Production-ready components from day one.",
    name: "Jamie L.",
    initials: "JL",
    role: "Principal Engineer, Orbit",
    variant: "warning",
  },
]

export const pricing = {
  tiers: [
    {
      id: "starter",
      name: "Starter",
      badge: "Free",
      badgeVariant: "success" as const,
      price: { monthly: "$0", annual: "$0" },
      description: "Perfect for side projects and open source.",
      features: [
        "All core components",
        "React + Vue + Lit",
        "CSS token system",
        "Community support",
      ],
      cta: "Start for Free",
      ctaVariant: "" as const,
      featured: false,
    },
    {
      id: "pro",
      name: "Pro",
      badge: "Most Popular",
      badgeVariant: "info" as const,
      price: { monthly: "$19", annual: "$15" },
      description: "For teams shipping production apps.",
      features: [
        "Everything in Starter",
        "Lab (Fx) components",
        "All skin presets",
        "Priority email support",
        "Figma kit",
      ],
      cta: "Start Free Trial",
      ctaVariant: "primary" as const,
      featured: true,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      badge: "Custom",
      badgeVariant: "warning" as const,
      price: { monthly: "Custom", annual: "Custom" },
      description: "Dedicated support and SLA for large orgs.",
      features: [
        "Everything in Pro",
        "Dedicated Slack channel",
        "Custom skin development",
        "SLA guarantee",
        "On-site training",
      ],
      cta: "Contact Sales",
      ctaVariant: "secondary" as const,
      featured: false,
    },
  ],
}

export const faqs = [
  {
    id: 1,
    question: "What frameworks does AgnosticUI support?",
    answer: "AgnosticUI provides first-class wrappers for React, Vue 3, and Lit. Every component ships with identical props, events, and styling across all three — written once from a shared web component core.",
  },
  {
    id: 2,
    question: "How does the theming system work?",
    answer: "Every visual decision — color, spacing, border radius, shadow — is expressed as a CSS custom property. Switching themes is a single data-theme attribute on the root element. Custom skins are just a set of variable overrides.",
  },
  {
    id: 3,
    question: "Is it accessible out of the box?",
    answer: "Yes. Every component is built to WCAG 2.1 AA. That includes ARIA roles and properties, full keyboard navigation, visible focus indicators, and screen reader testing. Accessibility is never an opt-in.",
  },
  {
    id: 4,
    question: "How do I add a component to my project?",
    answer: "Run `npx agnosticui-cli init` to set up your project, then `npx agnosticui-cli add Button` (or any component name). The CLI copies the source directly into your project — no runtime dependency, no magic.",
  },
  {
    id: 5,
    question: "Can I use AgnosticUI alongside an existing design system?",
    answer: "Absolutely. Because all styles are CSS custom properties, AgnosticUI integrates cleanly with any existing token system. You can adopt individual components without committing to a full migration.",
  },
]
```

---

## Application Layout

```
┌─────────────────────────────────────────────────────────────────┐
│ HEADER (content-justify="between")                              │
│ [AgnosticUI logo]  [Features] [Pricing] [FAQ]  [☀/🌙]  [Get Started] │
├─────────────────────────────────────────────────────────────────┤
│ HERO (text-align:center, padding 6rem top)                      │
│   [BadgeFx: "v2.0 Now Available" shimmer xl]                    │
│   <h1>Build Once,\nRun Everywhere</h1>                          │
│   <p>subheadline</p>                                            │
│   [ButtonFx primary lg rounded pulse-wobble] [Button lg rounded bordered] │
├─────────────────────────────────────────────────────────────────┤
│ FEATURES (3-col grid → 2-col tablet → 1-col mobile)             │
│ Each cell: ag-card rounded="lg"                                 │
│   [IconButtonFx bounce spring-md]                               │
│   <p class="feature-card-title">                                │
│   <p class="feature-card-desc">                                 │
├─────────────────────────────────────────────────────────────────┤
│ ag-divider                                                      │
├─────────────────────────────────────────────────────────────────┤
│ TESTIMONIALS (3-col grid, hide 3rd on tablet)                   │
│ Each: ag-card rounded="md" shadow                               │
│   <p class="testimonial-quote">                                 │
│   [Avatar] name / role                                          │
├─────────────────────────────────────────────────────────────────┤
│ ag-divider                                                      │
├─────────────────────────────────────────────────────────────────┤
│ PRICING (3-col grid, 1-col tablet max-width 420px)              │
│   [Tabs: Monthly | Annual (save 20%)]  ← state only, empty panels │
│ Each: ag-card rounded="lg" [class="featured" on Pro]            │
│   .pricing-card-header (tier name + Badge)                      │
│   .pricing-price / .pricing-period (changes with tab)           │
│   .pricing-desc                                                 │
│   <ul class="pricing-features"> ✓ items                        │
│   [Button shape="rounded" full-width]                           │
├─────────────────────────────────────────────────────────────────┤
│ ag-divider                                                      │
├─────────────────────────────────────────────────────────────────┤
│ FAQ                                                             │
│   ag-accordion (max-width 720px centered)                       │
│     ag-accordion-item use-chevron × 5                           │
├─────────────────────────────────────────────────────────────────┤
│ FOOTER                                                          │
│   ag-divider                                                    │
│   © {year} AgnosticUI. Built with AgnosticUI components.        │
├─────────────────────────────────────────────────────────────────┤
│ [SkinSwitcher FAB — fixed bottom-right]                         │
└─────────────────────────────────────────────────────────────────┘
```

---

## CSS — `App.css` / `style.css` / `index.css`

Create identically in all three projects (React: `App.css`, Vue: `style.css`, Lit: `index.css`):

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background-color: var(--ag-background-primary);
  color: var(--ag-text-primary);
}

/* ── Utility ── */
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 var(--ag-space-6, 1.5rem);
}

/* ── Header ── */
.site-nav {
  display: flex;
  align-items: center;
  gap: var(--ag-space-6, 1.5rem);
  margin-inline-end: var(--ag-space-2);
}

.site-nav a {
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--ag-text-secondary);
  text-decoration: none;
  transition: color 0.15s;
}

.site-nav a:hover {
  color: var(--ag-text-primary);
}

.theme-toggle {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--ag-text-secondary);
  padding: var(--ag-space-2);
  border-radius: var(--ag-radius-sm);
  display: flex;
  align-items: center;
  margin-inline-end: var(--ag-space-2);
}

.theme-toggle:hover {
  background: var(--ag-background-secondary);
}

/* ── Hero ── */
.hero {
  text-align: center;
  padding: 6rem var(--ag-space-6, 1.5rem) 5rem;
}

.hero-badge-wrap {
  display: inline-flex;
  align-items: center;
  margin-bottom: var(--ag-space-5, 1.25rem);
}

.hero-headline {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 900;
  line-height: 1.08;
  letter-spacing: -0.03em;
  margin: 0 0 var(--ag-space-5, 1.25rem);
  color: var(--ag-text-primary);
  white-space: pre-line;
}

.hero-sub {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: var(--ag-text-secondary);
  max-width: 640px;
  margin: 0 auto var(--ag-space-8, 2rem);
  line-height: 1.65;
}

.hero-actions {
  display: flex;
  gap: var(--ag-space-3, 0.75rem);
  justify-content: center;
  flex-wrap: wrap;
}

/* ── Section chrome ── */
.section {
  padding: 5rem 0;
}

.section-label {
  font-size: 0.8125rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--ag-primary, #297aff);
  margin-bottom: var(--ag-space-3, 0.75rem);
}

.section-title {
  font-size: clamp(1.625rem, 3.5vw, 2.5rem);
  font-weight: 800;
  letter-spacing: -0.025em;
  line-height: 1.15;
  margin: 0 0 var(--ag-space-3, 0.75rem);
  color: var(--ag-text-primary);
}

.section-sub {
  font-size: 1.0625rem;
  color: var(--ag-text-secondary);
  max-width: 560px;
  line-height: 1.6;
  margin: 0;
}

.section-header {
  margin-bottom: var(--ag-space-10, 2.5rem);
}

/* ── Features grid ── */
.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--ag-space-5, 1.25rem);
}

/*
 * ag-icon-button-fx: width + inline-flex centers the icon within the card.
 * display:block alone left-aligns; inline-flex with width:100% lets the
 * component's own internal centering take effect across the full card width.
 */
ag-icon-button-fx {
  width: 100%;
  display: inline-flex;
}

.feature-card-title {
  font-size: 1rem;
  font-weight: 700;
  margin: var(--ag-space-3, 0.75rem) 0 0;
  color: var(--ag-text-primary);
}

.feature-card-desc {
  font-size: 0.9375rem;
  color: var(--ag-text-secondary);
  line-height: 1.6;
  margin: var(--ag-space-2, 0.5rem) 0 0;
}

/* ── Testimonials grid ── */
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--ag-space-5, 1.25rem);
}

.testimonial-quote {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--ag-text-primary);
  margin: 0 0 var(--ag-space-5, 1.25rem);
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: var(--ag-space-3, 0.75rem);
}

.testimonial-name {
  font-weight: 700;
  font-size: 0.9375rem;
  margin: 0;
  color: var(--ag-text-primary);
}

.testimonial-role {
  font-size: 0.8125rem;
  color: var(--ag-text-secondary);
  margin: 0;
}

/* ── Pricing ── */
/*
 * No align-items: start — use default stretch so all three cards
 * are the same height regardless of content length.
 */
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--ag-space-5, 1.25rem);
}

/*
 * Featured card: target the shadow DOM part directly.
 * border-radius must be restated — the ::part() rule wins over the
 * card's own shadow styles. height:100% forces the wrapper to fill
 * the full host height so the outline doesn't appear as an inset island.
 */
ag-card.featured::part(ag-card-wrapper) {
  background: var(--ag-primary-background, #e8f0fe);
  outline: 2px solid var(--ag-primary, #297aff);
  border-radius: var(--ag-radius-lg, 0.75rem);
  height: 100%;
}

.pricing-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--ag-space-4, 1rem);
}

.pricing-tier-name {
  font-size: 1.125rem;
  font-weight: 700;
  margin: 0;
  color: var(--ag-text-primary);
}

.pricing-price {
  font-size: 2.25rem;
  font-weight: 900;
  letter-spacing: -0.03em;
  color: var(--ag-text-primary);
  margin: 0 0 var(--ag-space-1, 0.25rem);
}

.pricing-period {
  font-size: 0.8125rem;
  color: var(--ag-text-secondary);
  margin: 0 0 var(--ag-space-2, 0.5rem);
}

.pricing-desc {
  font-size: 0.9375rem;
  color: var(--ag-text-secondary);
  margin: 0 0 var(--ag-space-5, 1.25rem);
  line-height: 1.55;
}

.pricing-features {
  list-style: none;
  padding: 0;
  margin: 0 0 var(--ag-space-6, 1.5rem);
  display: flex;
  flex-direction: column;
  gap: var(--ag-space-2, 0.5rem);
}

.pricing-features li {
  font-size: 0.9375rem;
  color: var(--ag-text-secondary);
  display: flex;
  align-items: center;
  gap: var(--ag-space-2, 0.5rem);
}

.pricing-features li::before {
  content: '✓';
  color: var(--ag-success, #2da562);
  font-weight: 700;
  flex-shrink: 0;
}

/* ── FAQ ── */
.faq-wrap {
  max-width: 720px;
  margin: 0 auto;
}

/* ── Footer ── */
.footer {
  padding: var(--ag-space-8, 2rem) 0;
  text-align: center;
}

.footer-copy {
  font-size: 0.875rem;
  color: var(--ag-text-secondary);
  margin: var(--ag-space-4, 1rem) 0 0;
}

/* ── Header content width ── */
@media (min-width: 960px) {
  ag-header::part(ag-header-content) {
    width: min(1200px, 100%) !important;
  }
}

/* ── Responsive: tablet ── */
@media (max-width: 1023px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .testimonials-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .testimonials-grid > *:last-child {
    display: none;
  }
  .pricing-grid {
    grid-template-columns: 1fr;
    max-width: 420px;
    margin: 0 auto;
  }
}

/* ── Responsive: mobile ── */
@media (max-width: 767px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
  .testimonials-grid > *:last-child {
    display: block;
  }
  .hero {
    padding: 4rem var(--ag-space-4) 3.5rem;
  }
  .section {
    padding: 3.5rem 0;
  }
}
```

---

## Component Specs

### BadgeFx (hero badge)

```
variant="info"
fx="shimmer"
fx-speed="xl"
```

**React:** `<ReactBadgeFx variant="info" fx="shimmer" fxSpeed="xl">`
**Vue:** `<VueBadgeFx variant="info" fx="shimmer" :fx-speed="'xl'">`
**Lit:** `<ag-badge-fx variant="info" fx="shimmer" fx-speed="xl">`

---

### ButtonFx (hero primary CTA)

```
variant="primary"
size="lg"
shape="rounded"
fx="pulse-wobble"
fx-speed="lg"
fx-ease="spring-md"
```

**React:** `<ReactButtonFx variant="primary" size="lg" shape="rounded" fx="pulse-wobble" fxSpeed="lg" fxEase="spring-md">`
**Vue:** `<VueButtonFx variant="primary" size="lg" shape="rounded" fx="pulse-wobble" fx-speed="lg" fx-ease="spring-md">`
**Lit:** `<ag-button-fx variant="primary" size="lg" shape="rounded" fx="pulse-wobble" fx-speed="lg" fx-ease="spring-md">`

---

### Button (hero secondary CTA, header, pricing)

All buttons on the page use `shape="rounded"`.

- Hero secondary: `size="lg" shape="rounded" bordered`
- Header "Get Started": `variant="primary" size="sm" shape="rounded"`
- Pricing CTA: `variant={tier.ctaVariant} shape="rounded" full-width`

---

### IconButtonFx (feature cards)

```
label={f.label}     (string — used as aria-label)
icon={f.icon}       (inline SVG string from data file)
variant={f.variant}
fx="bounce"
fx-ease="spring-md"
```

**React:** `<ReactIconButtonFx label={f.label} icon={f.icon} variant={f.variant as any} fx="bounce" fxEase="spring-md" />`
**Vue:** `<VueIconButtonFx :label="f.label" :icon="f.icon" :variant="(f.variant as any)" fx="bounce" fx-ease="spring-md" />`
**Lit:** `<ag-icon-button-fx label="${f.label}" icon="${f.icon}" variant="${f.variant}" fx="bounce" fx-ease="spring-md"></ag-icon-button-fx>`

> **Note:** `variant` prop is typed as a specific union in the component; cast to `any` in React and Vue to avoid TypeScript errors.

---

### Card (features, testimonials, pricing)

All sections use `ag-card` — not custom divs. This dogfoods AgnosticUI and
validates real-world component usage.

**Feature cards:** `rounded="lg"` — content in default slot
**Testimonial cards:** `rounded="md" shadow` — content in default slot
**Pricing cards:** `rounded="lg"` with `class="featured"` on the Pro tier

Featured pricing card styling via CSS `::part()` — see CSS section above.

---

### Tabs (pricing section)

The pricing tabs only track UI state (`monthly` / `annual`). The tab panels are
empty — the pricing grid re-renders reactively based on the active tab value.

```tsx
// React
const [pricingTab, setPricingTab] = useState<'monthly' | 'annual'>('monthly')

<ReactTabs aria-label="Pricing period">
  <ReactTab slot="tab" panel="monthly" onClick={() => setPricingTab('monthly')}>Monthly</ReactTab>
  <ReactTab slot="tab" panel="annual" onClick={() => setPricingTab('annual')}>Annual (save 20%)</ReactTab>
  <ReactTabPanel slot="panel" id="monthly" />
  <ReactTabPanel slot="panel" id="annual" />
</ReactTabs>
```

```vue
<!-- Vue -->
<VueTabs aria-label="Pricing period">
  <VueTab slot="tab" panel="monthly" @click="pricingTab = 'monthly'">Monthly</VueTab>
  <VueTab slot="tab" panel="annual" @click="pricingTab = 'annual'">Annual (save 20%)</VueTab>
  <VueTabPanel slot="panel" id="monthly" />
  <VueTabPanel slot="panel" id="annual" />
</VueTabs>
```

```ts
// Lit
@state() private _pricingTab: 'monthly' | 'annual' = 'monthly'

html`
  <ag-tabs aria-label="Pricing period">
    <ag-tab slot="tab" panel="monthly" @click=${() => { this._pricingTab = 'monthly' }}>Monthly</ag-tab>
    <ag-tab slot="tab" panel="annual" @click=${() => { this._pricingTab = 'annual' }}>Annual (save 20%)</ag-tab>
    <ag-tab-panel slot="panel" id="monthly"></ag-tab-panel>
    <ag-tab-panel slot="panel" id="annual"></ag-tab-panel>
  </ag-tabs>
`
```

The price display:

```tsx
// React
<p className="pricing-price">{tier.price[pricingTab]}</p>
<p className="pricing-period">{pricingTab === 'monthly' ? 'per month' : 'per month, billed annually'}</p>
```

---

### Accordion (FAQ)

```
use-chevron  (shows a rotating chevron indicator)
```

Slots: `slot="header"` for question text, `slot="content"` for answer text.

**React:**
```tsx
import { ReactAccordion, AccordionItem, ItemHeader, ItemContent } from './components/ag/Accordion/react/ReactAccordion'

<ReactAccordion>
  {faqs.map(faq => (
    <AccordionItem key={faq.id} useChevron>
      <ItemHeader>{faq.question}</ItemHeader>
      <ItemContent>{faq.answer}</ItemContent>
    </AccordionItem>
  ))}
</ReactAccordion>
```

**Vue:**
```vue
<VueAccordion>
  <VueAccordionItem v-for="faq in faqs" :key="faq.id" :use-chevron="true">
    <VueAccordionHeader>{{ faq.question }}</VueAccordionHeader>
    <VueAccordionContent>{{ faq.answer }}</VueAccordionContent>
  </VueAccordionItem>
</VueAccordion>
```

**Lit:**
```ts
html`
  <ag-accordion>
    ${faqs.map(faq => html`
      <ag-accordion-item use-chevron>
        <span slot="header">${faq.question}</span>
        <div slot="content">${faq.answer}</div>
      </ag-accordion-item>
    `)}
  </ag-accordion>
`
```

---

### Header

```
content-justify="between"
```

Slots: `slot="logo"` for the logo text. Other children render as header actions.

```tsx
// React
<ReactHeader contentJustify="between">
  <span slot="logo" style={{ fontWeight: 700, fontSize: '1.125rem', color: 'var(--ag-primary)' }}>
    AgnosticUI
  </span>
  <nav className="site-nav">
    <a href="#features">Features</a>
    <a href="#pricing">Pricing</a>
    <a href="#faq">FAQ</a>
  </nav>
  <button className="theme-toggle" aria-label="Toggle theme" onClick={toggleTheme}>
    {isDark ? sunIcon : moonIcon}
  </button>
  <ReactButton variant="primary" size="sm" shape="rounded">Get Started</ReactButton>
</ReactHeader>
```

Same sun/moon inline SVGs as other playbooks. Same `isDark` / `toggleTheme` pattern
setting `data-theme="dark"` on `document.documentElement`.

---

## Dark Mode Toggle

**React:**
```tsx
const [isDark, setIsDark] = useState(
  () => document.documentElement.getAttribute('data-theme') === 'dark'
)
function toggleTheme() {
  const html = document.documentElement
  if (isDark) { html.removeAttribute('data-theme'); setIsDark(false) }
  else { html.setAttribute('data-theme', 'dark'); setIsDark(true) }
}
```

**Vue:**
```ts
const isDark = ref(document.documentElement.getAttribute('data-theme') === 'dark')
function toggleTheme() {
  if (isDark.value) { document.documentElement.removeAttribute('data-theme'); isDark.value = false }
  else { document.documentElement.setAttribute('data-theme', 'dark'); isDark.value = true }
}
```

**Lit:**
```ts
@state() private _isDark = document.documentElement.getAttribute('data-theme') === 'dark'

private _toggleTheme() {
  const root = document.documentElement
  if (this._isDark) { root.removeAttribute('data-theme'); this._isDark = false }
  else { root.setAttribute('data-theme', 'dark'); this._isDark = true }
}
```

---

## Lit Conventions

- Light DOM: `override createRenderRoot() { return this }`
- Root element `<landing-app>` defined in `index.html`
- Import all ag-* cores at top of `landing-app.ts`:

```ts
import './components/ag/Header/core/Header'
import './components/ag/Avatar/core/Avatar'
import './components/ag/Badge/core/Badge'
import './components/ag/BadgeFx/core/BadgeFx'
import './components/ag/Button/core/Button'
import './components/ag/ButtonFx/core/ButtonFx'
import './components/ag/Card/core/Card'
import './components/ag/Divider/core/Divider'
import './components/ag/IconButtonFx/core/IconButtonFx'
import './components/ag/Accordion/core/Accordion'
import './components/ag/Tabs/core/Tabs'
import './skin-switcher'
```

- Inline SVG strings for sun/moon icons (lucide is not Lit-compatible):

```ts
const sunIcon = html`<svg ...>...</svg>`
const moonIcon = html`<svg ...>...</svg>`
```

---

## Known Issues & Fixes

| Issue | Fix |
|-------|-----|
| Dual `@lit/react` type conflict in React | `npm install @lit/react` locally in the project |
| `variant` TypeScript error on IconButtonFx / Avatar | Cast to `any`: `variant={f.variant as any}` |
| Vue `ag-*` element warnings | Add `isCustomElement` to `vite.config.ts` |
| Featured card loses border-radius | Restate `border-radius` in `::part()` rule — it wins over shadow DOM styles |
| Featured card outline appears as inset island | Add `height: 100%` to `ag-card.featured::part(ag-card-wrapper)` |
| `ag-icon-button-fx` left-aligns in card | `ag-icon-button-fx { width: 100%; display: inline-flex; }` |
| Pricing cards unequal height | Omit `align-items: start` from `.pricing-grid`; default `stretch` equalizes heights |
| `.site-nav` flush against theme toggle | Add `margin-inline-end: var(--ag-space-2)` to `.site-nav` |
| Header `::part` width needs `!important` | `ag-header::part(ag-header-content) { width: min(1200px, 100%) !important; }` |

---

## Build Verification

```bash
cd react-example && npm run build   # exits 0
cd vue-example   && npm run build   # exits 0
cd lit-example   && npm run build   # exits 0
```

---

## Final Deliverables Checklist

### Hero
- [ ] BadgeFx shimmer animation on badge
- [ ] ButtonFx pulse-wobble on primary CTA
- [ ] Hero headline uses `white-space: pre-line` for the line break
- [ ] Both CTAs use `shape="rounded"`

### Features
- [ ] 6 feature cards using `ag-card rounded="lg"` (not custom divs)
- [ ] IconButtonFx centered in each card (`width:100%; display:inline-flex`)
- [ ] `fx="bounce" fx-ease="spring-md"` on each icon button
- [ ] 3-col → 2-col tablet → 1-col mobile

### Testimonials
- [ ] 3 cards using `ag-card rounded="md" shadow`
- [ ] 3rd card hidden on tablet, visible on mobile
- [ ] Avatar variant matches data (`info`, `success`, `warning`)

### Pricing
- [ ] Monthly / Annual tabs switch price display
- [ ] Pro tier card has `class="featured"` applied
- [ ] Featured card: primary background + outline via `::part()` with correct border-radius
- [ ] All three cards equal height (no `align-items: start`)
- [ ] ✓ checkmarks via `::before` pseudo-element
- [ ] All pricing buttons use `shape="rounded" full-width`

### FAQ
- [ ] 5 accordion items with `use-chevron`
- [ ] Accordion centered at max-width 720px

### All
- [ ] `html { scroll-behavior: smooth }` — header anchor links animate smoothly
- [ ] Dark mode toggle functional (`data-theme="dark"` on `<html>`)
- [ ] SkinSwitcher FAB functional
- [ ] All buttons use `shape="rounded"`
- [ ] `npm run build` exits 0 for all three frameworks
- [ ] Mobile: readable at 375px
- [ ] Tablet: 2-col features, 2-col testimonials (3rd hidden), 1-col pricing
- [ ] Desktop: 3-col features, 3-col testimonials, 3-col pricing
