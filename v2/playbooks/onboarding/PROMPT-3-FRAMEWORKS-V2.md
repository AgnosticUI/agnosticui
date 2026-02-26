# Onboarding Carousel Wizard V2 — Implementation Guide

> A variant of the Onboarding Playbook that replaces the three-step wizard with a **Carousel Slider Wizard** UX pattern. Instead of showing all 18 interest tags on one screen, it distributes them across three focused category steps (6 items each), uses an AG Progress bar in place of the Timeline step indicator, and narrows the container to keep each slide feeling contained and purposeful. A **Mini Confirmation Interstitial** is inserted between the first and second interest category steps as a psychological progress reinforcement — acknowledging effort, reducing fatigue, and bridging momentum. The path-selection step (Step 1) and review step (Step 6) carry over from V1 with minor layout adjustments.

---

## Audit: V1 vs V2

| Axis | V1 (Original) | V2 (Carousel Wizard) |
|------|---------------|----------------------|
| **Step count** | 3 steps | 5 question steps + 1 interstitial = 6 positions |
| **Step indicator** | AG Timeline (horizontal, numbered markers) | AG Progress (linear bar) + step counter text |
| **Layout (Desktop)** | Centered 800px container, open background | Centered 640px container, open background |
| **Layout (Mobile)** | Single-column, tags wrap | Single-column, 2-col interest grid |
| **Path selection (Step 1)** | SelectionCardGroup radio, 3 cards in 3-col grid | Same — minor layout adjustment for narrower container |
| **Interest selection** | All 18 tags at once — SelectionButtonGroup checkbox tag cloud | 6 tags per slide × 3 category slides — SelectionCardGroup checkbox, 2-col grid |
| **Interstitial** | None | Mini confirmation screen after first interest category: encouragement text, illustration, info notice, full-width Next |
| **Interest minimum** | ≥ 3 required to proceed | None per slide (momentum-based — Continue always enabled) |
| **Background treatment** | White | White (unchanged) |
| **Assets needed** | None | None |
| **Typography** | Inter | Inter (unchanged) |
| **Components used** | Button, Alert, Timeline, Icon, SelectionCardGroup, SelectionButtonGroup | Button, Alert, **Progress**, Icon, SelectionCardGroup |

---

## Project Setup

### Prerequisites

- Ensure you're in the `v2/playbooks/onboarding` directory (relative to AgnosticUI root)
- No design assets are required — this variant uses no background images or logos

### Create Three Vite Projects

_Note: Vite projects MUST be TypeScript-enabled because agnosticui-cli only works in a properly configured TypeScript project._

Run these commands from `v2/playbooks/onboarding`:

```bash
npm create vite@latest react-example-v2 -- --template react-ts
npm create vite@latest vue-example-v2 -- --template vue-ts
npm create vite@latest lit-example-v2 -- --template lit-ts
```

### Install Dependencies

**React:**

```bash
cd react-example-v2
npm install
npm install lucide-react
npm install lit  # Required before CLI init
cd ..
```

**Vue:**

```bash
cd vue-example-v2
npm install
npm install lucide-vue-next
npm install lit  # Required before CLI init
cd ..
```

**Lit:**

```bash
cd lit-example-v2
npm install
npm install lucide
npm install lit  # Required before CLI init
cd ..
```

### Initialize AgnosticUI

V2 drops `Timeline` and `SelectionButtonGroup`; adds `Progress`.

**React:**

```bash
cd react-example-v2
npx agnosticui-cli init --framework react --skip-prompts
npx agnosticui-cli add Button Alert Progress Icon SelectionCardGroup
cd ..
```

**Vue:**

```bash
cd vue-example-v2
npx agnosticui-cli init --framework vue --skip-prompts
npx agnosticui-cli add Button Alert Progress Icon SelectionCardGroup
cd ..
```

**Lit:**

```bash
cd lit-example-v2
npx agnosticui-cli init --framework lit --skip-prompts
npx agnosticui-cli add Button Alert Progress Icon SelectionCardGroup
cd ..
```

**Post-init verification:**

- Confirm `ag-tokens.css` and `ag-tokens-dark.css` are in `src/components/ag/styles/`
- Import both in your main entry file (see Vue section below for the required import order)

Copy the skin CSS files from `v2/skins/` into each project's styles directory:

```bash
# From v2/playbooks/onboarding:
cp ../../../../skins/skins-bundle.css react-example-v2/src/components/ag/styles/
cp ../../../../skins/skin-switcher.css react-example-v2/src/components/ag/styles/
cp ../../../../skins/skins-bundle.css vue-example-v2/src/components/ag/styles/
cp ../../../../skins/skin-switcher.css vue-example-v2/src/components/ag/styles/
cp ../../../../skins/skins-bundle.css lit-example-v2/src/components/ag/styles/
cp ../../../../skins/skin-switcher.css lit-example-v2/src/components/ag/styles/
```

### CRITICAL: Vue-Specific Configuration

**1. `vue-example-v2/vite.config.ts`** — treat `ag-*` tags as custom elements:

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('ag-'),
        },
      },
    }),
  ],
})
```

Without this, Vue will warn: `[Vue warn]: Failed to resolve component: ag-*`

**2. `vue-example-v2/src/main.ts`** — import token files and skin files:

```typescript
import { createApp } from 'vue'
import './components/ag/styles/ag-tokens.css'
import './components/ag/styles/ag-tokens-dark.css'  // DO NOT FORGET THIS!
import './components/ag/styles/skins-bundle.css'
import './components/ag/styles/skin-switcher.css'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')
```

### TypeScript Configuration

Relax strict mode in each project's tsconfig to prevent errors from CLI-generated component files:

**React** — `react-example-v2/tsconfig.app.json`:

```json
"strict": false,
"noUnusedLocals": false,
"noUnusedParameters": false,
```

**Vue** — `vue-example-v2/tsconfig.app.json`:

```json
"strict": false,
"noUnusedLocals": false,
"noUnusedParameters": false,
```

**Lit** — `lit-example-v2/tsconfig.json`:

```json
"strict": false,
"noUnusedLocals": false,
"noUnusedParameters": false,
```

### Font Setup

Add Inter to each project's `index.html` `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
  rel="stylesheet"
/>
```

### SkinSwitcher Setup

The onboarding V1 does not include a SkinSwitcher. For V2, copy the SkinSwitcher source files from the Login Playbook examples — they reference `skin-switcher-core.js` via the relative path `../../../../skins/skin-switcher-core.js`, which resolves correctly from the `v2/playbooks/` depth:

```bash
# From v2/playbooks/onboarding:
cp ../login/react-example/src/SkinSwitcher.tsx react-example-v2/src/SkinSwitcher.tsx
cp ../login/vue-example/src/SkinSwitcher.vue vue-example-v2/src/SkinSwitcher.vue
cp ../login/lit-example/src/skin-switcher.ts lit-example-v2/src/skin-switcher.ts
```

Import and render SkinSwitcher at the bottom of the outermost page `<div>`, outside the `.wizard-container`:

**React** — `App.tsx`:
```tsx
import { SkinSwitcher } from './SkinSwitcher';
// ...at bottom of page div:
<SkinSwitcher />
```

**Vue** — `App.vue` `<script setup>`:
```vue
import SkinSwitcher from './SkinSwitcher.vue';
// ...at bottom of page div template:
<SkinSwitcher />
```

**Lit** — main component:
```typescript
import './skin-switcher';
// ...at bottom of render template:
html`<skin-switcher></skin-switcher>`
```

Also import the skin CSS files in the React and Lit entry files (Vue's `main.ts` was updated above):

**React** — `react-example-v2/src/main.tsx`:
```tsx
import './components/ag/styles/ag-tokens.css'
import './components/ag/styles/ag-tokens-dark.css'
import './components/ag/styles/skins-bundle.css'
import './components/ag/styles/skin-switcher.css'
```

**Lit** — `lit-example-v2/src/main.ts`:
```typescript
import './components/ag/styles/ag-tokens.css'
import './components/ag/styles/ag-tokens-dark.css'
import './components/ag/styles/skins-bundle.css'
import './components/ag/styles/skin-switcher.css'
```

### Icon Imports Reference

**React (lucide-react):**

```jsx
import { Check, ArrowRight, User, Users, Building2, Sun, Moon, Info } from "lucide-react";
```

**Vue (lucide-vue-next):**

```vue
<script setup>
import { Check, ArrowRight, User, Users, Building2, Sun, Moon, Info } from "lucide-vue-next";
</script>
```

**Lit (inline SVG):**

```typescript
const checkIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`;
const arrowRightIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`;
const userIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;
const usersIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`;
const buildingIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>`;
const sunIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;
const moonIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;
const infoIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>`;
```

---

## Design Specification

### Container

The wizard lives in a centered container — white background, same page color as the body:

```css
.wizard-container {
  max-width: 640px;
  margin: 0 auto;
  padding: var(--ag-space-8) var(--ag-space-6);
}
```

640px (vs V1's 800px) keeps each slide feeling focused. The narrower column also makes the 2-column interest card grid feel proportionally generous rather than cramped.

### Progress Indicator

Replace the V1 horizontal Timeline with a two-part header block:

1. **Step counter** — small text label: `Step N of 5 — [Category Name]`; on the interstitial, replace this with `Halfway there!` (no step number — it's not a question step)
2. **AG Progress bar** — `value` = `Math.round((currentPosition / TOTAL_POSITIONS) * 100)`

```css
.wizard-progress {
  margin-bottom: var(--ag-space-8);
}

.wizard-progress-label {
  font-size: var(--ag-font-size-sm);
  color: var(--ag-text-secondary);
  margin-bottom: var(--ag-space-2);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.wizard-progress-label span {
  font-weight: 500;
  color: var(--ag-text-primary);
}
```

Progress values (6 positions total — question steps + interstitial):

| Position | Type | Label shown | `value` |
|----------|------|-------------|---------|
| 1 | Question | Step 1 of 5 — Choose Your Path | 17 |
| 2 | Question | Step 2 of 5 — Front-end Frameworks | 33 |
| 3 | **Interstitial** | Halfway there! | 50 |
| 4 | Question | Step 3 of 5 — Design & Styling | 67 |
| 5 | Question | Step 4 of 5 — Engineering & Quality | 83 |
| 6 | Question | Step 5 of 5 — Review & Start | 100 |

### Interest Card Grid

Interest selection uses a 2-column grid of SelectionCards (text-only, no icons). Cards are intentionally minimal — just the topic name — so the grid reads as a clean set of choices:

```css
.interests-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--ag-space-3);
  margin-bottom: var(--ag-space-6);
}
```

### Typography & Spacing

- Font: Inter (same as V1)
- Step title: `var(--ag-font-size-2x)`, weight 600
- Step subtitle: `var(--ag-font-size-sm)`, `var(--ag-text-secondary)`

| Element pair | Token | px |
|---|---|---|
| Progress block → Step title | `--ag-space-2` | 8px |
| Step title → Subtitle | `--ag-space-2` | 8px |
| Subtitle → Grid / Cards | `--ag-space-6` | 24px |
| Grid / Cards → Nav buttons | `--ag-space-6` | 24px |

---

## Application Overview

A **6-position wizard** comprising 5 question steps and 1 interstitial bridge:

| Position | Type | Screen |
|----------|------|--------|
| 1 | Question | Choose Your Path — Radio selection (Personal / Team / Enterprise) |
| 2 | Question | Front-end Frameworks — Checkbox, 6 items |
| **3** | **Interstitial** | **Mini Confirmation — encouragement, illustration, settings notice** |
| 4 | Question | Design & Styling — Checkbox, 6 items |
| 5 | Question | Engineering & Quality — Checkbox, 6 items |
| 6 | Question | Review & Start — Summary + CTA |

The interstitial at position 3 acts as a **micro milestone** and **momentum bridge** between the first interest category and the remaining two. It lands at exactly 50% progress — a psychologically meaningful checkpoint.

### Wizard Position Constants

Define these at the top of your main component/file:

```typescript
const TOTAL_POSITIONS = 6;        // total screen positions including interstitial
const TOTAL_QUESTION_STEPS = 5;   // question steps only (for "Step N of 5" counter)
const INTERSTITIAL_POSITION = 3;  // the non-question bridge screen

// Map position → question step number (null for interstitial)
const QUESTION_POSITIONS = [1, 2, 4, 5, 6];
const getQuestionStepNumber = (position: number): number | null => {
  const idx = QUESTION_POSITIONS.indexOf(position);
  return idx >= 0 ? idx + 1 : null;
};

// Derive the current view type from position
type ViewType = 'path' | 'interests' | 'interstitial' | 'review';
const getViewType = (position: number): ViewType => {
  if (position === 1) return 'path';
  if (position === INTERSTITIAL_POSITION) return 'interstitial';
  if (position === TOTAL_POSITIONS) return 'review';
  return 'interests';
};
```

### Interest Category Data

```typescript
const INTEREST_CATEGORIES = [
  {
    id: 'frontend',
    position: 2,  // wizard position, not question step number
    title: 'Front-end Frameworks',
    question: 'Which front-end technologies interest you?',
    subtitle: 'Select all that apply.',
    items: [
      { value: 'react', label: 'React' },
      { value: 'vue', label: 'Vue' },
      { value: 'svelte', label: 'Svelte' },
      { value: 'web-components', label: 'Web Components' },
      { value: 'mobile-development', label: 'Mobile Development' },
      { value: 'javascript', label: 'JavaScript' },
    ],
  },
  {
    id: 'design',
    position: 4,  // position 3 is the interstitial — design is at 4
    title: 'Design & Styling',
    question: 'What design topics appeal to you?',
    subtitle: 'Select all that apply.',
    items: [
      { value: 'design', label: 'Design' },
      { value: 'figma', label: 'Figma' },
      { value: 'css-architecture', label: 'CSS Architecture' },
      { value: 'responsive-design', label: 'Responsive Design' },
      { value: 'theming', label: 'Theming' },
      { value: 'design-systems', label: 'Design Systems' },
    ],
  },
  {
    id: 'engineering',
    position: 5,
    title: 'Engineering & Quality',
    question: 'Which engineering practices do you care about?',
    subtitle: 'Select all that apply.',
    items: [
      { value: 'testing', label: 'Testing' },
      { value: 'performance', label: 'Performance' },
      { value: 'dev-tools', label: 'Dev Tools' },
      { value: 'web-standards', label: 'Web Standards' },
      { value: 'accessibility', label: 'Accessibility' },
      { value: 'component-libraries', label: 'Component Libraries' },
    ],
  },
];
```

---

## Component Hierarchy

### Page-Level Chrome (outside `.wizard-container`)

Two fixed-position elements sit outside the wizard container on every position:

**1. Dark mode toggle header** — fixed top-right, a single circular sun/moon button:

```html
<header class="wizard-header">
  <button class="theme-toggle" aria-label="Toggle dark mode">
    <!-- Sun icon when dark mode active; Moon icon when light mode active -->
  </button>
</header>
```

```css
.wizard-header {
  position: fixed;
  top: 0;
  right: 0;
  padding: var(--ag-space-3) var(--ag-space-4);
  z-index: 10;
}

.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid var(--ag-border);
  background: var(--ag-background-primary);
  color: var(--ag-text-primary);
  cursor: pointer;
  transition: background 0.2s ease;
}

.theme-toggle:hover {
  background: var(--ag-background-secondary);
}
```

Because the onboarding wizard has a white background (unlike Login V2's gradient), the toggle uses standard AG tokens rather than semi-transparent white overrides.

**React:**
```tsx
<button className="theme-toggle" onClick={toggleDark} aria-label="Toggle dark mode">
  {isDark ? <Sun size={18} /> : <Moon size={18} />}
</button>
```

**Vue:**
```vue
<button class="theme-toggle" @click="toggleDark" aria-label="Toggle dark mode">
  <Sun v-if="isDark" :size="18" />
  <Moon v-else :size="18" />
</button>
```

**Lit:**
```typescript
html`
  <button class="theme-toggle" @click=${this.toggleDark} aria-label="Toggle dark mode">
    ${this.isDark ? sunIcon : moonIcon}
  </button>
`
```

**2. SkinSwitcher FAB** — fixed bottom-right palette button (see SkinSwitcher Setup above). Renders automatically once the component is imported and mounted.

---

### Progress Indicator (all positions)

```html
<div class="wizard-progress">
  <div class="wizard-progress-label">
    <!-- On question steps: "Step N of 5" left, category name right -->
    <!-- On interstitial: "Halfway there!" centered (or left) — no step number -->
    <span>Step 2 of 5</span>
    <span>Front-end Frameworks</span>
  </div>
  <ag-progress value="33"></ag-progress>
</div>
```

React / Vue compute `value` reactively: `Math.round((currentPosition / TOTAL_POSITIONS) * 100)`

On question steps the left label is `Step ${questionStepNum} of ${TOTAL_QUESTION_STEPS}` and the right label is the category/screen title. On the interstitial, render a single centered (or left-aligned) label `"Halfway there!"` with no right-side span.

### Step 1: Choose Your Path

Unchanged from V1, adapted to the 640px container. Use **SelectionCardGroup** with `type="radio"`. Three selectable cards:

- **Personal Projects** — User icon, "Building side projects, portfolios, or learning"
- **Team Development** — Users icon, "Collaborating with a small team on shared projects"
- **Enterprise** — Building icon, "Large-scale applications with multiple teams"

**SelectionCardGroup:**

```html
<ag-selection-card-group type="radio" name="path" legend="Choose your path" legend-hidden>
  <ag-selection-card value="personal" label="Personal Projects">
    <div class="path-card-content">
      <div class="path-icon"><!-- User icon (48x48) --></div>
      <h3>Personal Projects</h3>
      <p>Building side projects, portfolios, or learning</p>
    </div>
  </ag-selection-card>
  <ag-selection-card value="team" label="Team Development">
    <div class="path-card-content">
      <div class="path-icon"><!-- Users icon (48x48) --></div>
      <h3>Team Development</h3>
      <p>Collaborating with a small team on shared projects</p>
    </div>
  </ag-selection-card>
  <ag-selection-card value="enterprise" label="Enterprise">
    <div class="path-card-content">
      <div class="path-icon"><!-- Building icon (48x48) --></div>
      <h3>Enterprise</h3>
      <p>Large-scale applications with multiple teams</p>
    </div>
  </ag-selection-card>
</ag-selection-card-group>
```

**Path cards CSS:**

```css
.path-cards {
  display: grid;
  gap: var(--ag-space-4);
  margin-bottom: var(--ag-space-6);
}

@media (min-width: 560px) {
  .path-cards {
    grid-template-columns: repeat(3, 1fr);
  }
}

.path-card-content {
  text-align: center;
}

.path-icon {
  margin-bottom: var(--ag-space-3);
  color: var(--ag-primary);
}

.path-icon svg {
  width: 48px;
  height: 48px;
}
```

### Position 3: Mini Confirmation Interstitial

The interstitial is a non-question screen that fires after the first interest category (position 2) and before the second (position 4). It has a distinct layout: the **Back** link sits at the top of the content area, and the **Next** button is full-width at the bottom — no side-by-side nav row.

**HTML structure:**

```html
<div class="interstitial">

  <!-- Back link — top of content, not in the bottom nav row -->
  <div class="interstitial-back">
    <ag-button bordered shape="rounded">← Back</ag-button>
  </div>

  <!-- Encouragement heading -->
  <h2 class="step-title">Those are some great interests!</h2>
  <p class="step-subtitle">Just a few more questions left...</p>

  <!-- Illustration — centered User icon in a circle -->
  <div class="interstitial-illustration">
    <div class="interstitial-avatar">
      <!-- User icon (Lucide), 48px -->
    </div>
  </div>

  <!-- Explanatory paragraph with inline info icon -->
  <p class="interstitial-body">
    These interests will help us set up the app in a way that's customized
    specifically to you. You can change them at any time in your Settings.
    <!-- Info icon (Lucide), 14px, color: var(--ag-text-secondary), vertical-align: middle -->
  </p>

  <!-- Full-width Next button -->
  <ag-button variant="primary" shape="rounded" full-width>Next</ag-button>

</div>
```

**Interstitial CSS:**

```css
.interstitial-back {
  margin-bottom: var(--ag-space-6);
}

.interstitial-illustration {
  display: flex;
  justify-content: center;
  margin: var(--ag-space-8) 0;
}

.interstitial-avatar {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  border: 2px solid var(--ag-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--ag-primary);
}

.interstitial-avatar svg {
  width: 48px;
  height: 48px;
}

.interstitial-body {
  font-size: var(--ag-font-size-base);
  color: var(--ag-text-secondary);
  line-height: 1.6;
  margin-bottom: var(--ag-space-8);
}

.interstitial-body svg {
  width: 14px;
  height: 14px;
  vertical-align: middle;
  margin-left: var(--ag-space-1);
  color: var(--ag-text-secondary);
}
```

**Framework notes for the illustration icon:**

- **React:** `<User size={48} />` from `lucide-react`
- **Vue:** `<User :size="48" />` from `lucide-vue-next`
- **Lit:** Use the inline SVG `userIcon` defined in Icon Imports Reference, scaled to 48×48

**Inline info icon after "Settings":**

- **React:** `<Info size={14} style={{ verticalAlign: 'middle', marginLeft: '4px' }} />`
- **Vue:** `<Info :size="14" style="vertical-align: middle; margin-left: 4px" />`
- **Lit:** Inline SVG Info icon, `width="14" height="14"`

---

### Positions 2, 4–5: Interest Category Slides

Each interest step is the same template, driven by the current category from `INTEREST_CATEGORIES`. Use **SelectionCardGroup** with `type="checkbox"` and the `.interests-grid` CSS class on a wrapper `<div>`.

The SelectionCardGroup renders the cards. Wrap it in a `<div class="interests-grid">` to apply the 2-column grid — do NOT apply the grid directly to `ag-selection-card-group` since it manages its own internal layout.

```html
<!-- rendered per interest category (positions 2, 4, 5) -->
<div class="interests-grid">
  <ag-selection-card-group
    type="checkbox"
    name="interests-frontend"
    legend="Front-end Frameworks"
    legend-hidden
  >
    <ag-selection-card value="react" label="React">React</ag-selection-card>
    <ag-selection-card value="vue" label="Vue">Vue</ag-selection-card>
    <ag-selection-card value="svelte" label="Svelte">Svelte</ag-selection-card>
    <ag-selection-card value="web-components" label="Web Components">Web Components</ag-selection-card>
    <ag-selection-card value="mobile-development" label="Mobile Development">Mobile Development</ag-selection-card>
    <ag-selection-card value="javascript" label="JavaScript">JavaScript</ag-selection-card>
  </ag-selection-card-group>
</div>
```

**Event Handling:**

```typescript
// selection-change event detail: { value: string, checked: boolean, selectedValues: string[] }
// selectedValues contains all currently checked items within this group
```

Because interests accumulate across multiple steps, the state merge must remove the current category's item values before adding the incoming `selectedValues`. See **State Management** below.

### Position 6: Review & Start

Show the user's choices in two sections, followed by the info Alert:

```html
<div class="review-section">
  <div class="review-block">
    <p class="review-label">YOUR PATH</p>
    <p class="review-value">Team Development</p>
  </div>
  <div class="review-block">
    <p class="review-label">YOUR INTERESTS</p>
    <p class="review-value">React, Vue, Design Systems, Figma, Testing</p>
  </div>
</div>

<ag-alert variant="info">
  <strong>What's next?</strong>
  <p>
    Based on your selections, we've customized your dashboard with relevant
    documentation, examples, and starter templates. You can always update
    your preferences later in settings.
  </p>
</ag-alert>
```

**Review CSS:**

```css
.review-section {
  display: grid;
  gap: var(--ag-space-6);
  margin-bottom: var(--ag-space-6);
}

@media (min-width: 560px) {
  .review-section {
    grid-template-columns: 1fr 2fr;
  }
}

.review-label {
  font-size: var(--ag-font-size-sm);
  font-weight: 600;
  color: var(--ag-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: var(--ag-space-2);
}

.review-value {
  font-size: var(--ag-font-size-base);
  color: var(--ag-text-primary);
}
```

### Navigation Buttons

**Back Button** (hidden on position 1; on the interstitial, Back is at the top of content — see interstitial section above):

```html
<ag-button bordered shape="rounded">Back</ag-button>
```

**Continue / Next Button:**

- Positions 1–5 (except interstitial): labeled "Next" in the bottom nav row
- **Enabled on all interest positions (2, 4, 5) regardless of selection count** — momentum-based UX
- **Disabled on Position 1** until a path is selected
- **Interstitial (Position 3):** Next is full-width, no Back in the bottom row (Back is at top)

```html
<!-- Position 1 — disabled until path selected -->
<ag-button variant="primary" shape="rounded" isDisabled>Next</ag-button>

<!-- Position 1 — enabled -->
<ag-button variant="primary" shape="rounded">Next</ag-button>

<!-- Positions 2, 4, 5 — always enabled, in standard side-by-side nav row -->
<ag-button variant="primary" shape="rounded">Next</ag-button>

<!-- Interstitial (Position 3) — full-width, no nav row -->
<ag-button variant="primary" shape="rounded" full-width>Next</ag-button>
```

**Final "Start Building" Button (Position 6):**

```html
<ag-button variant="primary" shape="rounded">
  Start Building
  <!-- ArrowRight icon (16px) -->
</ag-button>
```

**Nav row CSS (standard positions — not interstitial):**

```css
.nav-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: var(--ag-space-6);
}

.nav-buttons--end {
  justify-content: flex-end;
}
```

Use `nav-buttons--end` on Position 1 where Back is hidden, so Next aligns right.

---

## State Management

### State Shape

```typescript
// Constants defined in Application Overview — repeated here for reference
// TOTAL_POSITIONS = 6, TOTAL_QUESTION_STEPS = 5, INTERSTITIAL_POSITION = 3

interface OnboardingState {
  currentPosition: 1 | 2 | 3 | 4 | 5 | 6;
  selectedPath: 'personal' | 'team' | 'enterprise' | null;
  selectedInterests: string[]; // accumulates across positions 2, 4, 5
  isDark: boolean;
}
```

### Dark Mode State

Initialize `isDark` from `localStorage` so the choice persists across page loads:

```typescript
// Initial value (all frameworks)
const initialDark = localStorage.getItem('ag-theme') === 'dark';
// Also apply immediately on load — prevents flash of wrong theme:
if (initialDark) document.documentElement.setAttribute('data-theme', 'dark');

// Toggle handler
const toggleDark = () => {
  const next = !isDark;
  setIsDark(next); // or this.isDark = next; in Lit
  document.documentElement.setAttribute('data-theme', next ? 'dark' : '');
  localStorage.setItem('ag-theme', next ? 'dark' : '');
};
```

**React** — initialize with `useState`:
```tsx
const [isDark, setIsDark] = useState(() => localStorage.getItem('ag-theme') === 'dark');
```

**Vue** — initialize with `ref`:
```ts
const isDark = ref(localStorage.getItem('ag-theme') === 'dark');
```

**Lit** — declare as a reactive property:
```typescript
@property({ type: Boolean }) isDark = localStorage.getItem('ag-theme') === 'dark';
```

### Navigation Logic

```typescript
// Position 1 → 2: requires path selected
// Position 3 (interstitial): always enabled — Next is the only action
// Positions 2, 4, 5 (interest steps): always enabled — momentum-based
const canProceed = (position: number): boolean =>
  position === 1 ? selectedPath !== null : true;

// handleNext / handleBack: simple position increment/decrement
const handleNext = () => {
  if (currentPosition < TOTAL_POSITIONS) setCurrentPosition(currentPosition + 1);
};
const handleBack = () => {
  if (currentPosition > 1) setCurrentPosition(currentPosition - 1);
};

// Show/hide standard nav row (Back left, Next right)
// The interstitial uses its own layout — suppress the standard nav row there
const showStandardNav = currentPosition !== INTERSTITIAL_POSITION;

// Hide Back on position 1; on interstitial, Back is rendered inside the interstitial view
const showBottomBack = currentPosition > 1 && currentPosition !== INTERSTITIAL_POSITION;
```

### Merging Per-Category Interests

Because `selectedInterests` is a flat array spanning three category positions, the event handler must replace the previous selections for the *current* category rather than blindly appending:

```typescript
// Helper: return all value strings for a given category id
const getCategoryValues = (categoryId: string): string[] => {
  const cat = INTEREST_CATEGORIES.find(c => c.id === categoryId);
  return cat ? cat.items.map(item => item.value) : [];
};

// Category for the current position (null for path, interstitial, review)
const categoryForPosition = (pos: number) =>
  INTEREST_CATEGORIES.find(c => c.position === pos) ?? null;

const handleInterestChange = (e: CustomEvent, categoryId: string) => {
  const { selectedValues } = e.detail;
  const categoryValues = getCategoryValues(categoryId);
  // Keep interests from other categories, replace this category's selections
  const otherInterests = selectedInterests.filter(v => !categoryValues.includes(v));
  setSelectedInterests([...otherInterests, ...selectedValues]);
};
```

### Path Selection

```typescript
const handlePathChange = (e: CustomEvent) => {
  const { selectedValues } = e.detail;
  // For radio type, selectedValues has 0 or 1 item
  setSelectedPath(selectedValues[0] || null);
};
```

### Progress Value & Labels

```typescript
const progressValue = Math.round((currentPosition / TOTAL_POSITIONS) * 100);

// Step counter label — null for interstitial (renders "Halfway there!" instead)
const questionStepNum = getQuestionStepNumber(currentPosition); // null at position 3

const progressLeftLabel = questionStepNum !== null
  ? `Step ${questionStepNum} of ${TOTAL_QUESTION_STEPS}`
  : 'Halfway there!';

const progressRightLabel: Record<number, string> = {
  1: 'Choose Your Path',
  2: 'Front-end Frameworks',
  3: '',  // interstitial — no right label
  4: 'Design & Styling',
  5: 'Engineering & Quality',
  6: 'Review & Start',
};
```

### Rendering the Correct View

Use `getViewType(currentPosition)` (defined in Application Overview) to switch between screen templates:

```typescript
// Pseudocode for all three frameworks:
switch (getViewType(currentPosition)) {
  case 'path':         // render Step 1 path card group
  case 'interstitial': // render Mini Confirmation interstitial
  case 'interests':    // render interest category — categoryForPosition(currentPosition)
  case 'review':       // render Step 6 review + alert
}
```

---

## Layout Specifications

### Mobile (< 560px)

- Single-column container, full-width with `padding: var(--ag-space-6) var(--ag-space-4)`
- Path cards stack vertically (1 column)
- Interest cards: 2-column grid (simple text cards fit well at ~160px each on 360px+ screens)
- Nav buttons side by side at bottom

### Desktop (≥ 560px)

- Centered container, `max-width: 640px`
- Path cards: 3-column grid (`repeat(3, 1fr)`)
- Interest cards: 2-column grid (`repeat(2, 1fr)`) — 3 rows of 2 for the 6-item sets
- Review section: 2-column grid (path left, interests right)
- Nav buttons: space-between (Back left, Next right)

---

## ASCII Diagrams

### Desktop Layout — Step 1: Choose Your Path

```
┌──────────────────────────────────────────────────────────────────┐
│                     max-width: 640px                             │
│                                                                  │
│  Step 1 of 5                              Choose Your Path       │
│  ████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ (20%)                   │
│                                                                  │
│  What brings you here today?                                     │
│  Choose the option that best describes how you'll use AgnosticUI │
│                                                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐           │
│  │     👤       │  │     👥       │  │     🏢       │           │
│  │              │  │              │  │              │           │
│  │   Personal   │  │    Team      │  │  Enterprise  │           │
│  │   Projects   │  │ Development  │  │              │           │
│  │              │  │              │  │              │           │
│  │  Building    │  │ Collaborat.  │  │ Large-scale  │           │
│  │  side        │  │ with a       │  │ applications │           │
│  │  projects    │  │ small team   │  │ with multiple│           │
│  │              │  │              │  │ teams        │           │
│  └──────────────┘  └──────────────┘  └──────────────┘           │
│  (white)          (selected - blue)  (white)                     │
│                                                                  │
│                                               ┌──────────────┐  │
│                                               │     Next     │  │
│                                               └──────────────┘  │
│                                                  (primary)       │
└──────────────────────────────────────────────────────────────────┘
```

### Desktop Layout — Step 2: Front-end Frameworks

```
┌──────────────────────────────────────────────────────────────────┐
│                     max-width: 640px                             │
│                                                                  │
│  Step 2 of 5                        Front-end Frameworks         │
│  ████████░░░░░░░░░░░░░░░░░░░░░░░░░░ (40%)                       │
│                                                                  │
│  Which front-end technologies interest you?                      │
│  Select all that apply.                                          │
│                                                                  │
│  ┌───────────────────────────┐  ┌───────────────────────────┐   │
│  │  (✓)  React               │  │  ( )  Vue                 │   │
│  └───────────────────────────┘  └───────────────────────────┘   │
│  ┌───────────────────────────┐  ┌───────────────────────────┐   │
│  │  ( )  Svelte              │  │  (✓)  Web Components      │   │
│  └───────────────────────────┘  └───────────────────────────┘   │
│  ┌───────────────────────────┐  ┌───────────────────────────┐   │
│  │  ( )  Mobile Development  │  │  ( )  JavaScript          │   │
│  └───────────────────────────┘  └───────────────────────────┘   │
│                                                                  │
│  ┌──────────┐                                 ┌──────────────┐  │
│  │   Back   │                                 │     Next     │  │
│  └──────────┘                                 └──────────────┘  │
│  (bordered)                                      (primary)       │
└──────────────────────────────────────────────────────────────────┘
```

### Desktop Layout — Position 3: Mini Confirmation Interstitial

```
┌──────────────────────────────────────────────────────────────────┐
│                     max-width: 640px                             │
│                                                                  │
│  Halfway there!                                                  │
│  ████████████████████░░░░░░░░░░░░░░░░░░ (50%)                   │
│                                                                  │
│  ← Back                                                          │
│                                                                  │
│  Those are some great interests!                                 │
│  Just a few more questions left...                               │
│                                                                  │
│                                                                  │
│                    ┌───────────────────┐                         │
│                    │                   │                         │
│                    │    ( user icon )   │                         │
│                    │                   │                         │
│                    └───────────────────┘                         │
│                    (96px circle, primary border)                  │
│                                                                  │
│                                                                  │
│  These interests will help us set up the app in a way            │
│  that's customized specifically to you. You can change           │
│  them at any time in your Settings.  ⓘ                           │
│                                                                  │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │                          Next                              │  │
│  └────────────────────────────────────────────────────────────┘  │
│                      (primary, full-width)                       │
└──────────────────────────────────────────────────────────────────┘
```

### Desktop Layout — Position 6: Review & Start

```
┌──────────────────────────────────────────────────────────────────┐
│                     max-width: 640px                             │
│                                                                  │
│  Step 5 of 5                              Review & Start         │
│  ████████████████████████████████████████ (100%)                 │
│                                                                  │
│  You're all set!                                                 │
│                                                                  │
│  YOUR PATH          YOUR INTERESTS                               │
│  Team               React, Web Components, Design Systems,       │
│  Development        Figma, Testing, Accessibility                │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │ ℹ️  What's next?                                         │   │
│  │                                                          │   │
│  │  Based on your selections, we've customized your         │   │
│  │  dashboard with relevant documentation, examples, and    │   │
│  │  starter templates. You can always update your           │   │
│  │  preferences later in settings.                          │   │
│  └──────────────────────────────────────────────────────────┘   │
│                     (ag-alert variant="info")                    │
│                                                                  │
│  ┌──────────┐                           ┌────────────────────┐  │
│  │   Back   │                           │  Start Building →  │  │
│  └──────────┘                           └────────────────────┘  │
│  (bordered)                                   (primary)          │
└──────────────────────────────────────────────────────────────────┘
```

### Mobile Layout — Position 4: Design & Styling

```
┌───────────────────────────────────────┐
│                                       │
│  Step 3 of 5           Design & Styl. │
│  █████████████░░░░░░░░ (67%)          │
│                                       │
│  What design topics appeal to you?    │
│  Select all that apply.               │
│                                       │
│  ┌────────────────┐ ┌───────────────┐ │
│  │  (✓)  Design   │ │  ( )  Figma   │ │
│  └────────────────┘ └───────────────┘ │
│  ┌────────────────┐ ┌───────────────┐ │
│  │  ( )  CSS      │ │  ( )  Resp.   │ │
│  │  Architecture  │ │  Design       │ │
│  └────────────────┘ └───────────────┘ │
│  ┌────────────────┐ ┌───────────────┐ │
│  │  ( )  Theming  │ │(✓) Design Sys.│ │
│  └────────────────┘ └───────────────┘ │
│                                       │
│  ┌──────────┐         ┌────────────┐  │
│  │   Back   │         │    Next    │  │
│  └──────────┘         └────────────┘  │
│  (bordered)              (primary)    │
└───────────────────────────────────────┘
```

---

## Progress Values by Position

| Position | Type | Left Label | Right Label | `value` |
|---|---|---|---|---|
| 1 | Question | Step 1 of 5 | Choose Your Path | 17 |
| 2 | Question | Step 2 of 5 | Front-end Frameworks | 33 |
| **3** | **Interstitial** | **Halfway there!** | _(none)_ | **50** |
| 4 | Question | Step 3 of 5 | Design & Styling | 67 |
| 5 | Question | Step 4 of 5 | Engineering & Quality | 83 |
| 6 | Question | Step 5 of 5 | Review & Start | 100 |

---

## Key Implementation Notes

### 1. AG Progress Component — No Max Prop Needed

The AG Progress component accepts `value` from 0–100 (it represents a percentage). Do not set `max`; compute the percentage yourself using position (not question step number):

```typescript
const progressValue = Math.round((currentPosition / TOTAL_POSITIONS) * 100);
```

**React:**
```tsx
<Progress value={progressValue} />
```

**Vue:**
```vue
<ag-progress :value="progressValue"></ag-progress>
```

**Lit:**
```typescript
html`<ag-progress value=${this.progressValue}></ag-progress>`
```

### 2. Interest Positions Use the Same Template

Positions 2, 4, and 5 all render identically — only the `INTEREST_CATEGORIES` data differs. In React/Vue, derive the current category from `currentPosition`:

```typescript
const currentCategory = INTEREST_CATEGORIES.find(c => c.position === currentPosition) ?? null;
```

Render the SelectionCardGroup conditionally only when `currentCategory` is not null (i.e., `currentPosition` is 2, 4, or 5). When `getViewType(currentPosition) === 'interstitial'`, render the interstitial instead.

### 3. No Minimum Per Category Position — Always-Enabled Next

This is the defining UX difference from V1. The Continue / Next button on interest positions (and the interstitial) is **never disabled**. Users can skip an entire category if nothing resonates. The final review will simply show fewer interests, which is valid.

```typescript
const canProceed =
  currentPosition === 1 ? selectedPath !== null : true;
```

### 4. SelectionCardGroup Checkbox for Interest Steps

V1 uses `SelectionButtonGroup` (capsule tags) for interests. V2 uses `SelectionCardGroup` with `type="checkbox"` — the same component as the path step, but for multiple selection and text-only card content:

```html
<ag-selection-card-group
  type="checkbox"
  name="interests-design"
  legend="Design & Styling"
  legend-hidden
>
  <ag-selection-card value="design" label="Design">Design</ag-selection-card>
  <ag-selection-card value="figma" label="Figma">Figma</ag-selection-card>
  <!-- ... -->
</ag-selection-card-group>
```

The `name` attribute must be unique per category group (`interests-frontend`, `interests-design`, `interests-engineering`) to prevent radio-group conflicts when components are rendered in the same DOM tree.

### 5. Back-Navigation State Limitation

`ag-selection-card-group` manages its own checked state internally. When the user presses Back from position 4 to position 3 (interstitial) and then to position 2, the position 2 group re-mounts and **does not automatically re-check previously selected items**. This is a known limitation of the initial implementation.

**Optional enhancement** — persist selections per category step using a `key` prop to force remount with data, or by pre-checking cards via JavaScript after mount. For simplicity, the baseline implementation does not include this; the review step correctly shows accumulated interests regardless.

### 6. Slide-In Transition (Optional Enhancement)

Add a subtle forward-and-back slide animation to reinforce the carousel feel:

```css
@keyframes slideInRight {
  from { opacity: 0; transform: translateX(24px); }
  to   { opacity: 1; transform: translateX(0); }
}

@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-24px); }
  to   { opacity: 1; transform: translateX(0); }
}

.step-slide--forward {
  animation: slideInRight 0.22s ease-out;
}

.step-slide--back {
  animation: slideInLeft 0.22s ease-out;
}
```

Track a `direction` state (`'forward' | 'back'`) when navigating, and apply the matching class to the step content wrapper on each render.

### 7. Wrapping the Interest Grid

The 2-column grid must be applied to a **wrapper div**, not to `ag-selection-card-group` itself. The component uses its own internal layout:

```html
<!-- Correct -->
<div class="interests-grid">
  <ag-selection-card-group type="checkbox" ...>
    ...cards...
  </ag-selection-card-group>
</div>
```

```html
<!-- WRONG — do not put the grid class on the group element -->
<ag-selection-card-group class="interests-grid" type="checkbox" ...>
```

### 8. Vue — No Scoped Styles for Layout

Same rule as V1: do **not** use `<style scoped>` — put all layout CSS in the global `style.css` file. Vue scoped styles cannot target `ag-*` elements because style scoping inserts data attributes that web components ignore.

### 10. Dark Mode — Both Controls Work in Parallel

The header toggle and the SkinSwitcher FAB both control dark mode. They don't conflict because both write to the same `data-theme` attribute on `<html>` and to `localStorage`. The SkinSwitcher's internal state reads from `localStorage` on mount, so it will reflect any toggle the user made with the header button and vice versa. No extra synchronisation is needed.

**Flash of wrong theme prevention** — apply the stored theme synchronously before the component mounts, not inside a `useEffect`/`onMounted`/`connectedCallback`. A one-liner in the entry HTML or at the top of the main entry file is sufficient:

```html
<!-- index.html <head> — before any JS -->
<script>
  if (localStorage.getItem('ag-theme') === 'dark')
    document.documentElement.setAttribute('data-theme', 'dark');
</script>
```

### 11. Interstitial — Suppress Standard Nav Row

The interstitial has a non-standard layout: Back at the top of content, Next full-width at the bottom. **Do not render the standard `.nav-buttons` row** when `currentPosition === INTERSTITIAL_POSITION`. Conditionally render based on `showStandardNav`:

```typescript
// React
{showStandardNav && (
  <div className={`nav-buttons${showBottomBack ? '' : ' nav-buttons--end'}`}>
    {showBottomBack && <ReactButton bordered shape="rounded" onClick={handleBack}>Back</ReactButton>}
    <ReactButton variant="primary" shape="rounded" isDisabled={!canProceed(currentPosition)} onClick={handleNext}>
      {currentPosition === TOTAL_POSITIONS ? 'Start Building' : 'Next'}
    </ReactButton>
  </div>
)}
```

Inside the interstitial template, render Back and Next directly:

```typescript
// React
{getViewType(currentPosition) === 'interstitial' && (
  <div className="interstitial">
    <div className="interstitial-back">
      <ReactButton bordered shape="rounded" onClick={handleBack}>← Back</ReactButton>
    </div>
    {/* ... heading, illustration, body ... */}
    <ReactButton variant="primary" shape="rounded" fullWidth onClick={handleNext}>Next</ReactButton>
  </div>
)}
```

The same pattern applies to Vue (`v-if="showStandardNav"`) and Lit (`${showStandardNav ? html\`...\` : ''}`).

### 9. TypeScript — toKebabCase Helper

A small utility converts display names to `value` attributes. Define it where needed:

```typescript
const toKebabCase = (s: string): string =>
  s.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
```

This is already applied in the `INTEREST_CATEGORIES` constant above — the `value` fields are pre-computed.

---

## Common Issues & Fixes

### Interest Selections Not Appearing in Review

Verify the category merge logic in `handleInterestChange`. If you're appending rather than replacing, duplicate entries or stale values appear. Always filter out the current category's values before merging the new `selectedValues`.

### Progress Bar Not Updating

Confirm `progressValue` is computed reactively from `currentPosition`. In Vue, make sure it's either a `computed` ref or derived inline in the template. In Lit, `this.currentPosition` must be a `@property()` decorated field.

### SkinSwitcher Throws Module Not Found

The copied `SkinSwitcher` files reference `../../../../skins/skin-switcher-core.js` as a relative path from `v2/playbooks/login/[framework]-example/src/`. Because the onboarding V2 examples sit at the same directory depth (`v2/playbooks/onboarding/[framework]-example-v2/src/`), the path resolves correctly without modification.

### Dark Mode Flash on Load

If the page briefly shows light mode before applying the stored dark theme, move the `data-theme` initialization script into `index.html` `<head>` (see Note #10). Do not rely on `useEffect`/`onMounted` — those fire after the first render.

### CSS Token Reference

- `--ag-radius-md` (NOT `--ag-border-radius-md`)
- `--ag-space-*` for all spacing
- `--ag-font-size-sm` for 14px, `--ag-font-size-base` for 16px, `--ag-font-size-2x` for 32px
- `--ag-text-secondary` for subdued label color

---

## Implementation Learnings

> Update this section as each framework is built. Record V2-specific differences only; V1 implementation notes apply unless noted otherwise.

### React Example

**Expected differences from V1:**
- No `Timeline` import — replace with `Progress` from `src/components/ag/`
- `INTEREST_CATEGORIES` + `categoryForPosition()` helper drive all three carousel positions from the same JSX template
- `getViewType(currentPosition)` switch drives top-level render branching
- `isDark` state initialized from `localStorage`; `toggleDark` wires both the header button and the SkinSwitcher
- Import skin CSS files in `main.tsx`; copy `SkinSwitcher.tsx` from login example
- Interstitial: conditionally suppress `.nav-buttons` row; render `← Back` button and full-width `Next` inside the interstitial `<div>`
- Use `key={currentPosition}` on the step wrapper to trigger the optional slide animation class reset

### Vue Example

**Expected differences from V1:**
- Same `vite.config.ts` custom element config required
- Same scoped-styles prohibition — all layout in `style.css`
- Computed `progressValue`, `currentCategory`, `showStandardNav`, `questionStepNum`, `isDark` simplify template logic
- Skin CSS imports added to `main.ts`; copy `SkinSwitcher.vue` from login example
- Interstitial: use `v-if="getViewType(currentPosition) === 'interstitial'"` to swap in the interstitial template; `v-if="showStandardNav"` on the nav row div

### Lit Example

**Expected differences from V1:**
- No `ag-timeline` component — use `ag-progress` instead
- Define `@property({ type: Number }) currentPosition = 1` and `@property({ type: Boolean }) isDark` — derive `progressValue`, `currentCategory`, `viewType` as getters
- `INTEREST_CATEGORIES` and constants defined at module scope (outside the class)
- Skin CSS imports added to `main.ts`; copy `skin-switcher.ts` from login example
- `sunIcon`, `moonIcon`, `infoIcon` inline SVGs added (see Icon Imports Reference)
- Use `map()` inside `html\`...\`` template literals to render interest cards from the current category's `items` array
- Interstitial: branch on `this.viewType === 'interstitial'` inside `render()` to return the interstitial template; omit the standard nav row conditional on `this.showStandardNav`

---

## StackBlitz Integration Notes

When adding Variant II to the docs site:

1. Add an entry to `v2/site/docs/.vitepress/theme/components/playbooks-config.ts`:

```typescript
'onboarding-v2': {
  title: 'Onboarding Carousel Wizard V2',
  basePath: 'onboarding',
  frameworkDirs: {
    react: 'react-example-v2',
    vue:   'vue-example-v2',
    lit:   'lit-example-v2',
  },
  frameworks: {
    react: [ /* same file list as onboarding V1 */ ],
    vue:   [ /* same file list as onboarding V1 */ ],
    lit:   [ /* same file list as onboarding V1 */ ],
  },
  externalFiles: SKIN_SWITCHER_EXTERNAL_FILES,
},
```

2. No `binaryFiles` entry needed — this variant has no binary assets.
3. Add a `## Variant II` section to `v2/site/docs/playbooks/onboarding.md`:

```md
## Variant II — Carousel Slider Wizard

Spreads interest selection across three focused category steps with a momentum-based, one-question-per-screen carousel UX. Replaces the Timeline step indicator with a linear AG Progress bar.

<PlaybookStackBlitz playbook="onboarding-v2" />
```

4. Add to sidebar in `v2/site/docs/.vitepress/config.mts`.
