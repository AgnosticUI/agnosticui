# Discovery Dashboard Implementation Guide

> A comprehensive guide for building a personalized discovery dashboard using AgnosticUI components across React, Vue, and Lit frameworks.

## Project Setup

This guide creates three separate Vite projects demonstrating AgnosticUI's multi-framework capabilities, each implementing the same discovery dashboard.

### Prerequisites

- Ensure you're in the `v2/playbooks/dashboard` directory (relative to AgnosticUI root)
- Design assets are located in `./design/`:
  - `logo.svg` (AgnosticUI logo - blue icon + dark navy wordmark for light mode)
  - `logo-dark-mode.svg` (AgnosticUI logo - blue icon + near-white `#F0F0F0` wordmark for dark mode)
- No Figma mockups are available — this specification serves as the design reference

### Create Three Vite Projects

_Note: The Vite projects MUST all be Typescript enabled because the agnosticui-cli only works properly in a properly setup Typescript project._

Run these commands from `v2/playbooks/dashboard`:

```bash
# Create React project
npm create vite@latest react-example -- --template react-ts

# Create Vue project
npm create vite@latest vue-example -- --template vue-ts

# Create Lit project
npm create vite@latest lit-example -- --template lit-ts
```

### Install Dependencies

**React Example:**

```bash
cd react-example
npm install
npm install lucide-react
npm install lit  # Required before CLI init
cd ..
```

**Vue Example:**

```bash
cd vue-example
npm install
npm install lucide-vue-next
npm install lit  # Required before CLI init
cd ..
```

**Lit Example:**

```bash
cd lit-example
npm install
npm install lucide
npm install lit  # Required before CLI init
cd ..
```

### Initialize AgnosticUI

For each project, initialize AgnosticUI using the CLI and add required components:

**React Example:**

```bash
cd react-example
npx agnosticui-cli init --framework react --skip-prompts
npx agnosticui-cli add Header Sidebar Breadcrumb Avatar Badge Flex EmptyState SkeletonLoader Button Tabs Card Tag IconButton Divider Progress Accordion Alert Toast
cd ..
```

**Vue Example:**

```bash
cd vue-example
npx agnosticui-cli init --framework vue --skip-prompts
npx agnosticui-cli add Header Sidebar Breadcrumb Avatar Badge Flex EmptyState SkeletonLoader Button Tabs Card Tag IconButton Divider Progress Accordion Alert Toast
cd ..
```

**Lit Example:**

```bash
cd lit-example
npx agnosticui-cli init --framework lit --skip-prompts
npx agnosticui-cli add Header Sidebar Breadcrumb Avatar Badge Flex EmptyState SkeletonLoader Button Tabs Card Tag IconButton Divider Progress Accordion Alert Toast
cd ..
```

The CLI will:

- Set up the AgnosticUI configuration for your chosen framework
- Install required dependencies
- Add component files to your project
- Configure styling and imports

**Post-init verification:**

- Ensure `ag-tokens.css` and `ag-tokens-dark.css` are in `src/components/ag/styles/`
- Import these in your main entry file (e.g., `main.tsx`, `main.ts`)

### CRITICAL: Vue-Specific Configuration

**1. Update `vue-example/vite.config.ts` to recognize ag-* custom elements:**

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // Treat ag-* tags as custom elements (web components)
          isCustomElement: (tag) => tag.startsWith('ag-'),
        },
      },
    }),
  ],
})
```

Without this, Vue will show warnings: `[Vue warn]: Failed to resolve component: ag-*`

**2. Import BOTH token files in `vue-example/src/main.ts`:**

```typescript
import { createApp } from 'vue'
import './components/ag/styles/ag-tokens.css'
import './components/ag/styles/ag-tokens-dark.css'  // DO NOT FORGET THIS!
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')
```

### Font Setup

Add Inter font to each project's `index.html` in the `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

### Asset Setup

Copy both logos to each project's `public/` folder:

```bash
# React
cp design/logo.svg react-example/public/logo.svg
cp design/logo-dark-mode.svg react-example/public/logo-dark-mode.svg

# Vue
cp design/logo.svg vue-example/public/logo.svg
cp design/logo-dark-mode.svg vue-example/public/logo-dark-mode.svg

# Lit
cp design/logo.svg lit-example/public/logo.svg
cp design/logo-dark-mode.svg lit-example/public/logo-dark-mode.svg
```

### Icon Imports Reference

**React (lucide-react):**

```jsx
import {
  LayoutDashboard, Users, Bell, Settings, Search, Bookmark, Share2,
  ChevronRight, ChevronDown, User, Building2, ArrowRight, X, Menu,
  Home, Star, Zap, BookOpen, AlertCircle
} from "lucide-react";
```

**Vue (lucide-vue-next):**

```vue
<script setup>
import {
  LayoutDashboard, Users, Bell, Settings, Search, Bookmark, Share2,
  ChevronRight, ChevronDown, User, Building2, ArrowRight, X, Menu,
  Home, Star, Zap, BookOpen, AlertCircle
} from "lucide-vue-next";
</script>
```

**Lit (inline SVG):**

```typescript
// Use inline SVG for Lit (lucide export format doesn't work directly)
const menuIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`;
const bellIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>`;
const searchIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`;
const bookmarkIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>`;
const shareIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>`;
const homeIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`;
const userIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;
```

---

## Design Specification

**Design Reference:** No Figma mockups available. This specification document serves as the authoritative design reference.

**Visual Mockups:** None. Implementation is based on the ASCII diagrams and specifications below.

**IMPORTANT: Do NOT use emoji anywhere in this implementation.** All icons must be rendered using Lucide icon components (React/Vue) or inline SVG (Lit). The ASCII diagrams in this document use `[IconName]` notation to represent Lucide icons.

## Application Overview

A personalized discovery dashboard that consumes onboarding state:

- **PATH** (Personal / Team / Enterprise) — drives sidebar nav, workflows, and alerts
- **INTERESTS** (array of topic strings) — powers the curated content feed

The dashboard features four major sections:

1. **Header** — Brand logo, search, user avatar
2. **Sidebar** — Navigation with notification badges
3. **Welcome Hero** — Personalized greeting with setup progress
4. **Content Feed** — Tabbed resource cards filtered by interests

## Responsive Breakpoints

- **Mobile (< 768px):** Single column, sidebar collapsed into hamburger menu, cards stack vertically
- **Tablet (768px - 1199px):** Sidebar visible but narrow (icons only), content area wider
- **Desktop (≥ 1200px):** Full sidebar with labels, two-column content grid

---

## Component Hierarchy

### Header

Use the AgnosticUI Header component for the top navigation bar:

**Header Content:**

- **Left:** Hamburger menu button (mobile only) + Logo image
- **Center:** Search input placeholder (desktop/tablet only)
- **Right:** Bell icon with Badge notification count + Theme toggle (Sun/Moon) + Avatar with user initials

**Implementation:**

```html
<ag-header>
  <div slot="header-left" class="header-left">
    <button class="menu-toggle" aria-label="Toggle sidebar">
      <!-- Menu icon (mobile only) -->
    </button>
    <!-- Swap logo based on theme: /logo.svg (light) vs /logo-dark-mode.svg (dark) -->
    <img src="/logo.svg" alt="AgnosticUI" class="header-logo" />
  </div>
  <div slot="header-center" class="header-center">
    <ag-input placeholder="Search resources..." rounded>
      <!-- Search icon in addon-left slot -->
    </ag-input>
  </div>
  <div slot="header-right" class="header-right">
    <div class="notification-wrapper">
      <!-- Bell icon -->
      <ag-badge variant="info">3</ag-badge>
    </div>
    <button class="theme-toggle" aria-label="Switch to dark/light mode">
      <!-- Sun icon (dark mode) or Moon icon (light mode) -->
    </button>
    <ag-avatar text="JD" size="sm"></ag-avatar>
  </div>
</ag-header>
```

**Header CSS:**

```css
.header-left {
  display: flex;
  align-items: center;
  gap: var(--ag-space-3);
}

.header-logo {
  height: var(--ag-space-6);
  width: auto;
}

.header-center {
  flex: 1;
  max-width: 400px;
  margin: 0 var(--ag-space-4);
}

.header-right {
  display: flex;
  align-items: center;
  gap: var(--ag-space-4);
}

.notification-wrapper {
  display: inline-flex;
  position: relative;
}

.notification-wrapper ag-badge {
  position: absolute;
  top: calc(-1 * var(--ag-space-2));
  right: calc(-1 * var(--ag-space-2));
}

.theme-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--ag-text-secondary);
  padding: var(--ag-space-1);
  border-radius: var(--ag-radius-md);
  transition: color var(--ag-motion-medium, 0.2s);
}

.theme-toggle:hover {
  color: var(--ag-text-primary);
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--ag-text-primary);
}

@media (max-width: 767px) {
  .menu-toggle { display: flex; }
  .header-center { display: none; }
}
```

### Sidebar Navigation

Use the AgnosticUI Sidebar component with navigation links:

**Sidebar Items:**

| Icon | Label | Badge |
|------|-------|-------|
| Home | Dashboard | — |
| BookOpen | Resources | — |
| Star | Curated | — |
| Bell | Notifications | `3` |
| Zap | Updates | `New` |
| Settings | Settings | — |

**Implementation:**

```html
<ag-sidebar>
  <div slot="sidebar-header" class="sidebar-header">
    <!-- Swap logo based on theme: /logo.svg (light) vs /logo-dark-mode.svg (dark) -->
    <img src="/logo.svg" alt="AgnosticUI" class="sidebar-logo" />
  </div>
  <nav class="sidebar-nav">
    <a href="#" class="nav-item active">
      <!-- Home icon -->
      <span class="nav-label">Dashboard</span>
    </a>
    <a href="#" class="nav-item">
      <!-- BookOpen icon -->
      <span class="nav-label">Resources</span>
    </a>
    <a href="#" class="nav-item">
      <!-- Star icon -->
      <span class="nav-label">Curated</span>
    </a>
    <a href="#" class="nav-item">
      <!-- Bell icon -->
      <span class="nav-label">Notifications</span>
      <ag-badge variant="info">3</ag-badge>
    </a>
    <a href="#" class="nav-item">
      <!-- Zap icon -->
      <span class="nav-label">Updates</span>
      <ag-badge variant="success">New</ag-badge>
    </a>
    <a href="#" class="nav-item">
      <!-- Settings icon -->
      <span class="nav-label">Settings</span>
    </a>
  </nav>
</ag-sidebar>
```

**Sidebar CSS:**

```css
.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: var(--ag-space-1);
  padding: var(--ag-space-4);
}

.nav-item {
  display: flex;
  align-items: center;
  gap: var(--ag-space-3);
  padding: var(--ag-space-3) var(--ag-space-4);
  border-radius: var(--ag-radius-md);
  color: var(--ag-text-secondary);
  text-decoration: none;
  transition: background-color var(--ag-motion-medium);
}

.nav-item:hover {
  background-color: var(--ag-surface-hover);
}

.nav-item.active {
  background-color: var(--ag-primary-light);
  color: var(--ag-primary);
  font-weight: 600;
}

.nav-label {
  font-size: var(--ag-font-size-sm);
}

.nav-item svg {
  width: var(--ag-space-5);
  height: var(--ag-space-5);
  flex-shrink: 0;
}
```

### Breadcrumb

Display the user's location within the dashboard:

```html
<ag-breadcrumb>
  <ag-breadcrumb-item>
    <!-- Home icon --> Home
  </ag-breadcrumb-item>
  <ag-breadcrumb-item>Dashboard</ag-breadcrumb-item>
  <ag-breadcrumb-item active>{selectedPath} Path</ag-breadcrumb-item>
</ag-breadcrumb>
```

### Welcome Hero Section

A personalized greeting area with setup completion progress:

**Content:**

- **Greeting:** "Welcome back, {userName}!" (h2, Inter 700, `--ag-font-size-2x`)
- **Subtitle:** "Here's what's new in your {pathName} dashboard" (p, `--ag-text-secondary`)
- **Progress Bar:** "Setup Completion" — percentage based on completed onboarding steps

**Implementation:**

```html
<section class="welcome-hero">
  <ag-flex justify="space-between" align="center" gutter="16">
    <div class="welcome-text">
      <h2 class="welcome-title">Welcome back, Jane!</h2>
      <p class="welcome-subtitle">Here's what's new in your Team dashboard</p>
    </div>
    <div class="setup-progress">
      <span class="progress-label">Setup Completion</span>
      <ag-progress value="66" max="100"></ag-progress>
      <span class="progress-value">66%</span>
    </div>
  </ag-flex>
</section>
```

**Welcome CSS:**

```css
.welcome-hero {
  padding: var(--ag-space-6);
  margin-bottom: var(--ag-space-6);
  background: var(--ag-surface);
  border-radius: var(--ag-radius-md);
}

.welcome-title {
  font-family: 'Inter', sans-serif;
  font-size: var(--ag-font-size-2x);
  font-weight: 700;
  margin: 0 0 var(--ag-space-2) 0;
  color: var(--ag-text-primary);
}

.welcome-subtitle {
  font-size: var(--ag-font-size-sm);
  color: var(--ag-text-secondary);
  margin: 0;
}

.setup-progress {
  min-width: 12.5rem;
}

.progress-label {
  font-size: var(--ag-font-size-xs);
  color: var(--ag-text-secondary);
  display: block;
  margin-bottom: var(--ag-space-2);
}

.progress-value {
  font-size: var(--ag-font-size-sm);
  font-weight: 600;
  color: var(--ag-primary);
}

@media (max-width: 767px) {
  .welcome-hero ag-flex {
    flex-direction: column;
    align-items: flex-start;
  }
  .setup-progress {
    width: 100%;
    margin-top: var(--ag-space-4);
  }
}
```

### Path-Specific Alert

Use AgnosticUI Alert to show a path-relevant notification:

```html
<!-- Personal path -->
<ag-alert variant="info">
  <strong>Getting Started:</strong> Check out our starter templates to jumpstart your personal project.
</ag-alert>

<!-- Team path -->
<ag-alert variant="warning">
  <strong>Team Invitation Pending:</strong> You have 2 pending team invitations. Review them in Settings.
</ag-alert>

<!-- Enterprise path -->
<ag-alert variant="info">
  <strong>Organization Setup:</strong> Complete your organization profile to unlock enterprise features.
</ag-alert>
```

### Content Feed with Tabs

Use AgnosticUI Tabs to switch between curated and all resources:

**Tab Panels:**

1. **"Curated for You"** — Cards filtered by user's INTERESTS
2. **"All Resources"** — Full unfiltered resource list

**Implementation:**

```html
<ag-tabs>
  <ag-tab-panel label="Curated for You">
    <div class="card-grid">
      <!-- Dynamically rendered cards based on interests -->
    </div>
  </ag-tab-panel>
  <ag-tab-panel label="All Resources">
    <div class="card-grid">
      <!-- All resource cards -->
    </div>
  </ag-tab-panel>
</ag-tabs>
```

### Resource Cards

Each resource is displayed in a Card with tags and action buttons:

**Card Content:**

- **Category Tag** (top) — colored Tag matching the interest
- **Title** (h3) — Resource name
- **Description** (p) — Brief description text
- **Action Row** — Bookmark IconButton + Share IconButton + "View" Button

**Implementation:**

```html
<ag-card isStacked>
  <div class="resource-card">
    <ag-tag variant="info" isUppercase>React</ag-tag>
    <h3 class="resource-title">Building Accessible Components</h3>
    <p class="resource-description">
      Learn how to create ARIA-compliant components with AgnosticUI's built-in accessibility features.
    </p>
    <div class="resource-actions">
      <div class="action-icons">
        <ag-icon-button aria-label="Bookmark" variant="ghost" size="sm">
          <!-- Bookmark icon -->
        </ag-icon-button>
        <ag-icon-button aria-label="Share" variant="ghost" size="sm">
          <!-- Share icon -->
        </ag-icon-button>
      </div>
      <ag-button variant="primary" size="sm" shape="rounded">
        View Resource
        <!-- ArrowRight icon -->
      </ag-button>
    </div>
  </div>
</ag-card>
```

**Card CSS:**

**IMPORTANT:** The `ag-card` component already provides internal padding via `--card-padding` (defaults to `--ag-space-6`). Do NOT add padding to `.resource-card` — it will double up.

**Full-height card fix:** When cards are in a CSS grid, shorter cards won't stretch to match row height by default. The Card component's shadow DOM uses `display: block` internally. Fix this at the consumer level using the `::part()` CSS selectors the Card exposes (`ag-card-wrapper`, `ag-card-content`):

```css
.card-grid {
  display: grid;
  gap: var(--ag-space-4);
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1200px) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Full-height card stretch: make cards fill their grid cell
   and push .resource-actions to the bottom */
.card-grid ag-card {
  height: 100%;
}

.card-grid ag-card::part(ag-card-wrapper) {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card-grid ag-card::part(ag-card-content) {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* No padding on .resource-card — ag-card handles it via --card-padding */
.resource-card {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.resource-title {
  font-size: var(--ag-font-size-lg);
  font-weight: 600;
  margin: var(--ag-space-3) 0 var(--ag-space-2) 0;
  color: var(--ag-text-primary);
}

.resource-description {
  font-size: var(--ag-font-size-sm);
  color: var(--ag-text-secondary);
  margin: 0 0 var(--ag-space-4) 0;
  line-height: 1.5;
}

/* margin-top: auto pushes actions to the bottom of the card */
.resource-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: var(--ag-space-3);
}

.action-icons {
  display: flex;
  gap: var(--ag-space-2);
}
```

### Suggested Workflows (Accordion)

Path-specific workflows in a collapsible accordion:

```html
<h3 class="section-title">Suggested Workflows</h3>
<ag-accordion>
  <!-- Personal path workflows -->
  <ag-accordion-item header="Set Up Your First Project">
    <p>Create a new project using our CLI and add your first components. Start with Button, Input, and Card for a quick win.</p>
    <ag-button variant="primary" size="sm" shape="rounded">Start Tutorial</ag-button>
  </ag-accordion-item>
  <ag-accordion-item header="Customize Your Theme">
    <p>Use design tokens to match your brand colors. Override CSS custom properties in your token file.</p>
    <ag-button variant="primary" size="sm" shape="rounded">Open Theming Guide</ag-button>
  </ag-accordion-item>
  <ag-accordion-item header="Deploy Your App">
    <p>Learn how to optimize and deploy your AgnosticUI application to production.</p>
    <ag-button variant="primary" size="sm" shape="rounded">View Deploy Guide</ag-button>
  </ag-accordion-item>
</ag-accordion>
```

**Workflow content by path:**

| Path | Workflow 1 | Workflow 2 | Workflow 3 |
|------|-----------|-----------|-----------|
| **Personal** | Set Up Your First Project | Customize Your Theme | Deploy Your App |
| **Team** | Invite Team Members | Set Up Shared Component Library | Configure CI/CD Pipeline |
| **Enterprise** | Organization Setup | Role-Based Access Control | Multi-Team Architecture |

### Empty State

Shown when the user has no interests selected (skipped onboarding):

```html
<ag-empty-state
  header="No Interests Selected"
  body="Complete the onboarding wizard to get personalized content recommendations."
>
  <ag-button variant="primary" shape="rounded" slot="actions">
    Complete Onboarding
    <!-- ArrowRight icon -->
  </ag-button>
</ag-empty-state>
```

### Skeleton Loading State

Shown while content is being "fetched":

```html
<div class="card-grid">
  <ag-skeleton-loader width="100%" height="250px" rounded></ag-skeleton-loader>
  <ag-skeleton-loader width="100%" height="250px" rounded></ag-skeleton-loader>
  <ag-skeleton-loader width="100%" height="250px" rounded></ag-skeleton-loader>
</div>
```

---

## State Management

The dashboard consumes onboarding state and manages its own UI state:

```typescript
interface OnboardingData {
  selectedPath: 'personal' | 'team' | 'enterprise' | null;
  selectedInterests: string[];
  userName: string;
}

interface DashboardState {
  sidebarOpen: boolean;
  activeTab: 'curated' | 'all';
  isLoading: boolean;
}
```

**Loading onboarding data from localStorage:**

```typescript
const loadOnboardingData = (): OnboardingData => {
  const stored = localStorage.getItem('onboarding');
  if (stored) {
    return JSON.parse(stored);
  }
  return {
    selectedPath: null,
    selectedInterests: [],
    userName: 'Jane',
  };
};
```

**Mock resource data filtered by interests:**

```typescript
interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;  // matches interest value
  tag: string;       // display label
}

const allResources: Resource[] = [
  {
    id: '1',
    title: 'Building Accessible Components',
    description: 'Learn how to create ARIA-compliant components with AgnosticUI.',
    category: 'accessibility',
    tag: 'Accessibility',
  },
  {
    id: '2',
    title: 'React Component Patterns',
    description: 'Best practices for composing AgnosticUI components in React applications.',
    category: 'react',
    tag: 'React',
  },
  {
    id: '3',
    title: 'Design Token Architecture',
    description: 'How AgnosticUI uses CSS custom properties for theming.',
    category: 'design-systems',
    tag: 'Design Systems',
  },
  {
    id: '4',
    title: 'Vue 3 Composition API with Web Components',
    description: 'Integrate AgnosticUI web components seamlessly in Vue 3.',
    category: 'vue',
    tag: 'Vue',
  },
  {
    id: '5',
    title: 'Web Component Fundamentals',
    description: 'Understanding the standards behind AgnosticUI components.',
    category: 'web-components',
    tag: 'Web Components',
  },
  {
    id: '6',
    title: 'Responsive Layout Patterns',
    description: 'Build fluid layouts using AgnosticUI Flex and CSS Grid.',
    category: 'responsive-design',
    tag: 'Responsive Design',
  },
  {
    id: '7',
    title: 'Performance Optimization Guide',
    description: 'Lazy loading, tree-shaking, and bundle optimization with AgnosticUI.',
    category: 'performance',
    tag: 'Performance',
  },
  {
    id: '8',
    title: 'Testing AgnosticUI Components',
    description: 'Unit and integration testing strategies for web components.',
    category: 'testing',
    tag: 'Testing',
  },
  {
    id: '9',
    title: 'Custom Theming Deep Dive',
    description: 'Override and extend design tokens for brand-specific styling.',
    category: 'theming',
    tag: 'Theming',
  },
];

// Filter resources by user interests
const getCuratedResources = (interests: string[]): Resource[] => {
  return allResources.filter(r => interests.includes(r.category));
};
```

**Simulated loading state:**

```typescript
// Show skeleton loaders for 1.5 seconds to simulate data fetch
const simulateLoading = (callback: () => void) => {
  setTimeout(callback, 1500);
};
```

---

## Layout Specifications

### Overall Page Layout

```css
.dashboard-layout {
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: auto 1fr;
  grid-template-areas:
    "header header"
    "sidebar main";
  height: 100vh;
  overflow: hidden;
}

.dashboard-header {
  grid-area: header;
  border-bottom: 1px solid var(--ag-border);
}

.dashboard-sidebar {
  grid-area: sidebar;
  width: 240px;
  border-right: 1px solid var(--ag-border);
  overflow-y: auto;
}

.dashboard-main {
  grid-area: main;
  overflow-y: auto;
  padding: var(--ag-space-6);
}
```

### Mobile (< 768px)

- Sidebar hidden by default, toggled via hamburger menu (overlay)
- Single column card grid
- Header search hidden
- Welcome hero stacks vertically (greeting above progress)
- Content fills full width

```css
@media (max-width: 767px) {
  .dashboard-layout {
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "main";
  }

  .dashboard-sidebar {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 280px;
    z-index: 100;
    background: var(--ag-background-primary);
    transform: translateX(-100%);
    transition: transform var(--ag-motion-medium) ease;
  }

  .dashboard-sidebar.open {
    transform: translateX(0);
  }

  .sidebar-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 99;
  }

  .dashboard-main {
    padding: var(--ag-space-4);
  }
}
```

### Tablet (768px - 1199px)

- Sidebar collapsed to icon-only mode (width: 64px)
- Nav labels hidden, only icons visible
- Two-column card grid
- Header search visible

```css
@media (min-width: 768px) and (max-width: 1199px) {
  .dashboard-sidebar {
    width: 64px;
  }

  .nav-label {
    display: none;
  }

  .nav-item {
    justify-content: center;
    padding: var(--ag-space-3);
  }

  .nav-item ag-badge {
    position: absolute;
    top: calc(-1 * var(--ag-space-1));
    right: calc(-1 * var(--ag-space-1));
    font-size: var(--ag-font-size-xs);
  }

  .sidebar-logo {
    display: none;
  }
}
```

### Desktop (≥ 1200px)

- Full sidebar with icons and labels (width: 240px)
- Three-column card grid
- All features visible

```css
@media (min-width: 1200px) {
  .dashboard-sidebar {
    width: 240px;
  }

  .card-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

---

## ASCII Diagrams

### Desktop Layout (≥ 1200px)

**IMPORTANT: Do NOT use emoji anywhere in the implementation. All icons must use Lucide icons (React/Vue) or inline SVG (Lit).**

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  HEADER                                                                      │
│  ┌──────┐  ┌────────────────────────────┐        [Bell](3)  [JD]            │
│  │ Logo │  │ [Search] Search resources...│                                   │
│  └──────┘  └────────────────────────────┘                                    │
├────────────┬─────────────────────────────────────────────────────────────────┤
│  SIDEBAR   │  MAIN CONTENT                                                   │
│            │                                                                 │
│ [Home] Dashboard  │  Home / Dashboard / Team Path                            │
│ [BookOpen] Resourc│                                                          │
│ [Star] Curated    │  ┌──────────────────────────────────────────────────┐    │
│ [Bell] Notif (3)  │  │  Welcome back, Jane!          Setup: ████░ 66%  │    │
│ [Zap] Updates     │  │  Here's what's new in your Team dashboard       │    │
│ [Settings] Setting│  └──────────────────────────────────────────────────┘    │
│            │                                                                 │
│            │  ┌──────────────────────────────────────────────────────────┐  │
│            │  │ [AlertCircle] Team Invitation Pending: 2 pending...     │  │
│            │  └──────────────────────────────────────────────────────────┘  │
│            │                                                                 │
│            │  ┌─────────────────┐  ┌─────────────────┐                      │
│            │  │ Curated for You │  │  All Resources  │   (Tabs)             │
│            │  └─────────────────┘  └─────────────────┘                      │
│            │                                                                 │
│            │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│            │  │ [REACT]      │  │ [DESIGN SYS] │  │ [WEB COMP]   │          │
│            │  │              │  │              │  │              │          │
│            │  │ React Comp   │  │ Design Token │  │ Web Comp     │          │
│            │  │ Patterns     │  │ Architecture │  │ Fundamentals │          │
│            │  │              │  │              │  │              │          │
│            │  │ Best prac... │  │ How Agnost...│  │ Understand...│          │
│            │  │ ──────────── │  │ ──────────── │  │ ──────────── │          │
│            │  │[Bkmk][Shr][V]│  │[Bkmk][Shr][V]│  │[Bkmk][Shr][V]│          │
│            │  └──────────────┘  └──────────────┘  └──────────────┘          │
│            │                                                                 │
│            │                                                                │
│            │                                                                 │
│            │  Suggested Workflows                                            │
│            │  ┌──────────────────────────────────────────────────────────┐  │
│            │  │ [ChevronRight] Invite Team Members                       │  │
│            │  ├──────────────────────────────────────────────────────────┤  │
│            │  │ [ChevronRight] Set Up Shared Component Library           │  │
│            │  ├──────────────────────────────────────────────────────────┤  │
│            │  │ [ChevronRight] Configure CI/CD Pipeline                  │  │
│            │  └──────────────────────────────────────────────────────────┘  │
│            │                                                                 │
├────────────┴─────────────────────────────────────────────────────────────────┤
```

### Tablet Layout (768px - 1199px)

```
┌────────────────────────────────────────────────────────────────┐
│  HEADER                                                        │
│  ┌──────┐  ┌─────────────────────────┐  [Bell](3) [JD]       │
│  │ Logo │  │ [Search] Search res...   │                        │
│  └──────┘  └─────────────────────────┘                        │
├──────┬─────────────────────────────────────────────────────────┤
│ SIDE │  MAIN CONTENT                                           │
│(icons│                                                         │
│ only)│  Home / Dashboard / Team Path                           │
│      │                                                         │
│[Home]│  ┌──────────────────────────────────────────────────┐  │
│[Book]│  │  Welcome back, Jane!          Setup: ████░ 66%   │  │
│[Star]│  └──────────────────────────────────────────────────┘  │
│[Bell]│                                                         │
│[Zap] │  ┌──────────────────────┐  ┌──────────────────────┐    │
│[Gear]│  │ [REACT]              │  │ [DESIGN SYSTEMS]     │    │
│      │  │ React Comp Patterns  │  │ Design Token Arch    │    │
│      │  │ Best practices...    │  │ How AgnosticUI...    │    │
│      │  │ ──────────────────── │  │ ──────────────────── │    │
│      │  │ [Bkmk][Shr]  [View] │  │ [Bkmk][Shr]  [View] │    │
│      │  └──────────────────────┘  └──────────────────────┘    │
│      │                                                         │
├──────┴─────────────────────────────────────────────────────────┤
```

### Mobile Layout (< 768px)

```
┌──────────────────────────────────┐
│  HEADER                          │
│  [Menu] Logo      [Bell](3) [JD]│
├──────────────────────────────────┤
│  MAIN CONTENT (full width)       │
│                                  │
│  Home / Dashboard / Team         │
│                                  │
│  ┌──────────────────────────┐   │
│  │  Welcome back, Jane!      │   │
│  │  Here's what's new in     │   │
│  │  your Team dashboard      │   │
│  │                           │   │
│  │  Setup: ████████░░ 66%    │   │
│  └──────────────────────────┘   │
│                                  │
│  ┌──────────────────────────┐   │
│  │ [AlertCircle] Team Inv..  │   │
│  └──────────────────────────┘   │
│                                  │
│  [Curated for You] [All Res.]   │
│                                  │
│  ┌──────────────────────────┐   │
│  │ [REACT]                   │   │
│  │ React Component Patterns  │   │
│  │ Best practices for...     │   │
│  │ ──────────────────────── │   │
│  │ [Bkmk][Shr]   [View ->]  │   │
│  └──────────────────────────┘   │
│                                  │
│  ┌──────────────────────────┐   │
│  │ [DESIGN SYSTEMS]         │   │
│  │ Design Token Architecture │   │
│  │ How AgnosticUI uses...    │   │
│  │ ──────────────────────── │   │
│  │ [Bkmk][Shr]   [View ->]  │   │
│  └──────────────────────────┘   │
│                                  │
│  ──────── (Divider) ──────────  │
│                                  │
│  Suggested Workflows             │
│  ┌──────────────────────────┐   │
│  │ [ChevronRight] Invite...  │   │
│  ├──────────────────────────┤   │
│  │ [ChevronRight] Shared...  │   │
│  ├──────────────────────────┤   │
│  │ [ChevronRight] CI/CD...   │   │
│  └──────────────────────────┘   │
│                                  │
└──────────────────────────────────┘

  SIDEBAR (overlay) -- Shown when [Menu] tapped
  All icons are Lucide components (NOT emoji).
  ┌────────────────────────┐
  │  Logo                   │
  │  ───────────────        │
  │  [Home] Dashboard       │
  │  [BookOpen] Resources   │
  │  [Star] Curated         │
  │  [Bell] Notif (3)       │
  │  [Zap] Updates (New)    │
  │  [Settings] Settings    │
  │                         │
  └────────────────────────┘
```

### Empty State (No Interests)

```
┌────────────────────────────────────────────────────┐
│                                                    │
│              ┌────────────────────┐                │
│              │                    │                │
│              │    (empty icon)    │                │
│              │                    │                │
│              │  No Interests      │                │
│              │  Selected          │                │
│              │                    │                │
│              │  Complete the      │                │
│              │  onboarding wizard │                │
│              │  to get personal-  │                │
│              │  ized content.     │                │
│              │                    │                │
│              │  [Complete Onboarding →] │           │
│              │                    │                │
│              └────────────────────┘                │
│                                                    │
└────────────────────────────────────────────────────┘
```

---

## Key Implementation Notes

1. **Sidebar toggle (mobile):** Track `sidebarOpen` state. On mobile, the sidebar renders as a fixed overlay with a semi-transparent backdrop. Clicking the backdrop closes the sidebar.

2. **Breadcrumb path display:** Dynamically render the third breadcrumb item based on `selectedPath`. Capitalize the path name (e.g., "Team Path", "Enterprise Path").

3. **Tab content filtering:** The "Curated for You" tab filters the `allResources` array by matching `resource.category` against the user's `selectedInterests` array. The "All Resources" tab shows everything unfiltered.

4. **Card rendering:** Map over filtered resources to render Card components. Each card includes a Tag (matching the resource category), title, description, and action row with IconButtons and a primary Button.

5. **Accordion content by path:** Conditionally render different accordion items based on `selectedPath`. See the workflow content table above.

6. **Alert variant by path:** Use `variant="info"` for Personal and Enterprise paths, `variant="warning"` for Team path (to highlight pending invitations).

7. **Progress bar:** Calculate progress as a percentage. For this demo, use a static 66% for simplicity (representing 2 of 3 onboarding steps complete).

8. **Skeleton loading simulation:** On initial mount, set `isLoading: true` and use `setTimeout` (1500ms) to simulate a data fetch, then render the actual content. Show 3 skeleton loaders in the card grid during loading.

9. **localStorage integration:** Read onboarding data from `localStorage.getItem('onboarding')` on mount. If no data exists, use sensible defaults (path: "personal", interests: first 4 items, userName: "Jane").

10. **Global CSS required:** Same as login and onboarding — do NOT use scoped styles in Vue. Put all layout CSS in global `style.css`. Lit uses `static styles` in the component.

11. **Theme toggle:** Track `isDark` state. Toggle by setting `document.documentElement.setAttribute('data-theme', 'dark')` or removing the attribute for light mode. AgnosticUI's `ag-tokens-dark.css` activates when `[data-theme="dark"]` is on the `<html>` element. Use Lucide `Sun` icon when dark (to indicate "switch to light") and `Moon` icon when light (to indicate "switch to dark"). Add a smooth `body` transition: `transition: background var(--ag-motion-medium, 0.2s) ease, color var(--ag-motion-medium, 0.2s) ease;`.

12. **Logo dark mode variant:** The default `logo.svg` uses dark navy `#0F2D5E` for the wordmark text, which has insufficient contrast on dark backgrounds. A separate `logo-dark-mode.svg` replaces the wordmark fill with `#F0F0F0` (near-white). Swap the logo `src` based on the current theme state — use `/logo-dark-mode.svg` when dark, `/logo.svg` when light. This applies to both the header logo and the mobile sidebar logo.

---

## Implementation Learnings

> This section will be updated as we build each framework example.

### React Example

**Status:** Build completed successfully

**Issues encountered:**

1. **Tabs `ariaLabel` prop:** The React wrapper (via `@lit/react`) maps to HTML attributes directly. Use `aria-label` (kebab-case) not `ariaLabel` (camelCase).
2. **Toast `_isHovered` TS error:** The core Toast component declares a `@state()` private field `_isHovered` that triggers `TS6133` (unused variable). Suppress with `// @ts-ignore` above the declaration.
3. **Header component simplicity:** The AgnosticUI Header has only `logo` and default slots — not the three-section layout from the spec. Build the three-section header layout with a plain `<div class="header-inner">` instead.
4. **Notification bell vertical alignment:** The `.notification-wrapper` must use `display: inline-flex` to properly center the bell icon vertically against the Avatar.
5. **Logo size:** `--ag-space-8` (2rem / 32px) is too large for the header. Use `--ag-space-6` (1.5rem / 24px) instead.
6. **Card double padding:** The `ag-card` component already provides internal padding via `--card-padding` (defaults to `--ag-space-6`). Do NOT add padding to the slotted `.resource-card` div — it will double up.
7. **Card full-height in grid:** Cards with shorter content don't stretch to match row height. The Card's shadow DOM uses `display: block` internally. Fix at consumer level using `::part()` selectors (`ag-card-wrapper`, `ag-card-content`) to enable flexbox stretching, and use `margin-top: auto` on `.resource-actions` to push actions to the bottom.
8. **Theme toggle:** Uses `data-theme="dark"` on `<html>` per AgnosticUI convention. Place the toggle button in `.header-right` between the notification bell and the avatar. Use `Sun`/`Moon` Lucide icons. The toggle reads the current attribute and flips it.
9. **Logo dark mode swap:** The `logo.svg` wordmark uses `#0F2D5E` which is invisible on dark backgrounds. Swap to `logo-dark-mode.svg` (wordmark fill `#F0F0F0`) when `isDark` is true. Apply to both header and mobile sidebar logos: `src={isDark ? '/logo-dark-mode.svg' : '/logo.svg'}`.

**Key implementation patterns:**

```tsx
// Tabs use aria-label (not ariaLabel)
<ReactTabs aria-label="Content feed">
  <ReactTab slot="tab" panel="curated">Curated for You</ReactTab>
  <ReactTab slot="tab" panel="all">All Resources</ReactTab>
  <ReactTabPanel slot="panel">...</ReactTabPanel>
  <ReactTabPanel slot="panel">...</ReactTabPanel>
</ReactTabs>

// Accordion uses ItemHeader/ItemContent slot helpers
<ReactAccordion>
  <AccordionItem bordered>
    <ItemHeader>Header text</ItemHeader>
    <ItemContent>Body content</ItemContent>
  </AccordionItem>
</ReactAccordion>

// Breadcrumb uses items prop (not children)
const items: BreadcrumbItem[] = [
  { label: 'Home', href: '#' },
  { label: 'Dashboard', href: '#' },
  { label: 'Team Path', current: true },
];
<ReactBreadcrumb items={items} type="slash" />

// IconButton uses onIconButtonClick (not onClick)
<ReactIconButton label="Bookmark" variant="ghost" size="sm"
  onIconButtonClick={() => handleBookmark(id)}>
  <Bookmark size={16} />
</ReactIconButton>

// Theme toggle — data-theme on <html>
const [isDark, setIsDark] = useState(false);
const toggleTheme = () => {
  const next = !isDark;
  setIsDark(next);
  document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light');
};
// In JSX:
<button className="theme-toggle"
  aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
  onClick={toggleTheme}>
  {isDark ? <Sun size={20} /> : <Moon size={20} />}
</button>
```

### Vue Example

**Status:** Not started

### Lit Example

**Status:** Not started
