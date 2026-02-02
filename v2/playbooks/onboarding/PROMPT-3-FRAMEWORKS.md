# Onboarding Interests Flow Implementation Guide

> A comprehensive guide for building a multi-step onboarding wizard using AgnosticUI components across React, Vue, and Lit frameworks.

## Project Setup

This guide creates three separate Vite projects demonstrating AgnosticUI's multi-framework capabilities, each implementing the same onboarding flow.

### Prerequisites

- Ensure you're in the `v2/playbooks/onboarding-interests` directory (relative to AgnosticUI root)
- Design mockups are located in `./design/`:
  - `Desktop-Step1.png`, `Desktop-Step2a.png`, `Desktop-Step2b.png`, `Desktop-Step3.png`
  - `Mobile-Step1.png`, `Mobile-Step2a.png`, `Mobile-Step2b.png`, `Mobile-Step3.png`

### Create Three Vite Projects

_Note: The Vite projects MUST all be Typescript enabled because the agnosticui-cli only works properly in a properly setup Typescript project._

Run these commands from `v2/playbooks/onboarding-interests`:

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
npx agnosticui-cli add button alert timeline icon selectioncardgroup selectionbuttongroup
cd ..
```

**Vue Example:**

```bash
cd vue-example
npx agnosticui-cli init --framework vue --skip-prompts
npx agnosticui-cli add button alert timeline icon selectioncardgroup selectionbuttongroup
cd ..
```

**Lit Example:**

```bash
cd lit-example
npx agnosticui-cli init --framework lit --skip-prompts
npx agnosticui-cli add button alert timeline icon selectioncardgroup selectionbuttongroup
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
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
  rel="stylesheet"
/>
```

### Icon Imports Reference

**React (lucide-react):**

```jsx
import { Check, ArrowRight, User, Users, Building2 } from "lucide-react";
```

**Vue (lucide-vue-next):**

```vue
<script setup>
import { Check, ArrowRight, User, Users, Building2 } from "lucide-vue-next";
</script>
```

**Lit (inline SVG):**

```typescript
// Use inline SVG for Lit (lucide export format doesn't work directly)
const checkIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`;
const arrowRightIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`;
const userIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;
const usersIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`;
const buildingIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>`;
```

---

## Design Specification

**Design Reference:** `v2/graphics/AgnosticUI-2.fig` on the templates page.
**Visual Mockups:** `v2/playbooks/onboarding-interests/design/` contains Desktop and Mobile mockups for each step.

## Application Overview

A 3-step onboarding wizard:

1. **Step 1: Choose Your Path** - User selects one of three options (Personal, Team, Enterprise)
2. **Step 2: Pick Your Interests** - User selects at least 3 interest tags from a cloud of options
3. **Step 3: Review & Start** - Summary of selections with a call-to-action

## Responsive Breakpoints

- **Mobile (< 768px):** Single column layout, cards stacked vertically
- **Desktop (≥ 768px):** Wider layout, path cards in 3-column grid, interest tags wrap naturally

---

## Component Hierarchy

### Timeline (Numbered Steps)

Use the AgnosticUI Timeline component with **Numbered Steps** style markers via slots:

**Step Marker Styles:**

```css
/* Base marker style */
.step-marker {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
}

/* Completed step (green) */
.step-marker-completed {
  background: var(--ag-success);
  color: white;
}

/* Current/Active step (primary blue) */
.step-marker-current {
  background: var(--ag-primary);
  color: white;
}

/* Pending/Future step (gray outline) */
.step-marker-pending {
  background: transparent;
  border: 1px solid var(--ag-border);
  color: var(--ag-text-secondary);
}
```

**Timeline Implementation:**

```html
<ag-timeline orientation="horizontal">
  <!-- Step 1 -->
  <ag-timeline-item>
    <span slot="ag-start">Step 1</span>
    <div slot="ag-marker" class="step-marker step-marker-completed">1</div>
    <span slot="ag-end">Choose your path</span>
  </ag-timeline-item>
  <!-- Step 2 -->
  <ag-timeline-item>
    <span slot="ag-start">Step 2</span>
    <div slot="ag-marker" class="step-marker step-marker-current">2</div>
    <span slot="ag-end">Pick your interests</span>
  </ag-timeline-item>
  <!-- Step 3 -->
  <ag-timeline-item>
    <span slot="ag-start">Step 3</span>
    <div slot="ag-marker" class="step-marker step-marker-pending">3</div>
    <span slot="ag-end">Review & Start</span>
  </ag-timeline-item>
</ag-timeline>
```

### Step 1: Choose Your Path

**Path Selection Cards:**

Use **SelectionCardGroup** with `type="radio"` for single selection. Three selectable cards:

- **Personal Projects** - User icon, "Building side projects, portfolios, or learning"
- **Team Development** - Users icon, "Collaborating with a small team on shared projects"
- **Enterprise** - Building icon, "Large-scale applications with multiple teams"

**SelectionCardGroup Props:**

| Prop | Value | Description |
|------|-------|-------------|
| `type` | `"radio"` | Single selection mode |
| `name` | `"path"` | Input group name |
| `legend` | `"Choose your path"` | Accessible group label |
| `legend-hidden` | `true` | Hide legend visually (shown in step title) |

**SelectionCard Props (for each card):**

| Prop | Description |
|------|-------------|
| `value` | Unique identifier: `"personal"`, `"team"`, or `"enterprise"` |
| `label` | Accessible label matching the card title |

**Card States (handled by component):**

- **Unselected:** White background, subtle border
- **Selected:** Light primary background, primary border, corner indicator badge

**Implementation:**

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

**CSS for card content layout:**

```css
.path-card-content {
  text-align: center;
}

.path-icon {
  margin-bottom: var(--ag-space-4);
  color: var(--ag-primary);
}

.path-icon svg {
  width: 48px;
  height: 48px;
}
```

**Event Handling:**

Listen for `selection-change` event on the group:

```typescript
// Event detail: { value: string, checked: boolean, selectedValues: string[] }
// For radio type, selectedValues will have 0 or 1 item
```

### Step 2: Pick Your Interests (Interest Tag Cloud)

Use **SelectionButtonGroup** with `type="checkbox"` for multiple selection. Uses **capsule shape** at **medium size**.

**SelectionButtonGroup Props:**

| Prop | Value | Description |
|------|-------|-------------|
| `type` | `"checkbox"` | Multiple selection mode |
| `name` | `"interests"` | Input group name |
| `shape` | `"capsule"` | Pill-shaped buttons |
| `size` | `"md"` | Medium size |
| `legend` | `"Select your interests"` | Accessible group label |
| `legend-hidden` | `true` | Hide legend visually (shown in step title) |

**SelectionButton Props (for each tag):**

| Prop | Description |
|------|-------------|
| `value` | Unique identifier matching the interest name (e.g., `"accessibility"`) |
| `label` | Accessible label matching the display text |

**Tag States (handled by component):**

- **Unselected:** Bordered/outline style with primary color
- **Selected:** Filled primary background with white text, corner badge indicator (circle with checkmark)

**Interest Tags List:**

```
Accessibility, Component Libraries, Design Systems, React, Vue,
Web Components, Mobile Development, Svelte, CSS Architecture,
Responsive Design, Web Standards, Performance, Dev Tools,
JavaScript, Testing, Theming, Design, Figma
```

**Implementation:**

```html
<ag-selection-button-group
  type="checkbox"
  name="interests"
  shape="capsule"
  size="md"
  legend="Select your interests"
  legend-hidden
>
  <ag-selection-button value="accessibility" label="Accessibility">
    Accessibility
  </ag-selection-button>
  <ag-selection-button value="component-libraries" label="Component Libraries">
    Component Libraries
  </ag-selection-button>
  <ag-selection-button value="design-systems" label="Design Systems">
    Design Systems
  </ag-selection-button>
  <ag-selection-button value="react" label="React">
    React
  </ag-selection-button>
  <ag-selection-button value="vue" label="Vue">
    Vue
  </ag-selection-button>
  <ag-selection-button value="web-components" label="Web Components">
    Web Components
  </ag-selection-button>
  <ag-selection-button value="mobile-development" label="Mobile Development">
    Mobile Development
  </ag-selection-button>
  <ag-selection-button value="svelte" label="Svelte">
    Svelte
  </ag-selection-button>
  <ag-selection-button value="css-architecture" label="CSS Architecture">
    CSS Architecture
  </ag-selection-button>
  <ag-selection-button value="responsive-design" label="Responsive Design">
    Responsive Design
  </ag-selection-button>
  <ag-selection-button value="web-standards" label="Web Standards">
    Web Standards
  </ag-selection-button>
  <ag-selection-button value="performance" label="Performance">
    Performance
  </ag-selection-button>
  <ag-selection-button value="dev-tools" label="Dev Tools">
    Dev Tools
  </ag-selection-button>
  <ag-selection-button value="javascript" label="JavaScript">
    JavaScript
  </ag-selection-button>
  <ag-selection-button value="testing" label="Testing">
    Testing
  </ag-selection-button>
  <ag-selection-button value="theming" label="Theming">
    Theming
  </ag-selection-button>
  <ag-selection-button value="design" label="Design">
    Design
  </ag-selection-button>
  <ag-selection-button value="figma" label="Figma">
    Figma
  </ag-selection-button>
</ag-selection-button-group>
```

**Event Handling:**

Listen for `selection-change` event on the group:

```typescript
// Event detail: { value: string, checked: boolean, selectedValues: string[] }
// selectedValues contains all currently selected interest values
```

### Navigation Buttons

**Back Button:**

```html
<ag-button bordered shape="rounded">Back</ag-button>
```

**Continue Button:**

- **Disabled** (Step 2 with < 3 selections): `isDisabled` attribute
- **Enabled:** Primary variant

```html
<!-- Disabled state -->
<ag-button variant="primary" shape="rounded" isDisabled>Continue</ag-button>

<!-- Enabled state -->
<ag-button variant="primary" shape="rounded">Continue</ag-button>
```

**Final "Start Building" Button (Step 3):**

```html
<ag-button variant="primary" shape="rounded">
  Start Building
  <ArrowRight size={16} />
</ag-button>
```

### Step 3: Review & Start

**Summary Display:**

Show the user's selections:

- **YOUR PATH:** Display selected path name
- **YOUR INTERESTS:** Comma-separated list of selected interests

**Info Alert ("What's next?"):**

Use AgnosticUI **Alert** component with `variant="info"`:

```html
<ag-alert variant="info">
  <strong>What's next?</strong>
  <p>
    Based on your selections, we've customized your dashboard with relevant
    documentation, examples, and starter templates. You can always update
    your preferences later in settings.
  </p>
</ag-alert>
```

---

## State Management

The onboarding flow requires tracking:

```typescript
interface OnboardingState {
  currentStep: 1 | 2 | 3;
  selectedPath: 'personal' | 'team' | 'enterprise' | null;
  selectedInterests: string[];
}
```

**Handling Selection Events:**

Both SelectionCardGroup and SelectionButtonGroup emit `selection-change` events:

```typescript
// Event listener for path selection (Step 1)
const handlePathChange = (e: CustomEvent) => {
  const { selectedValues } = e.detail;
  // For radio type, selectedValues has 0 or 1 item
  setSelectedPath(selectedValues[0] || null);
};

// Event listener for interest selection (Step 2)
const handleInterestChange = (e: CustomEvent) => {
  const { selectedValues } = e.detail;
  // For checkbox type, selectedValues contains all selected items
  setSelectedInterests(selectedValues);
};
```

**Step Navigation Logic:**

- Step 1 → Step 2: Requires `selectedPath` to be set
- Step 2 → Step 3: Requires `selectedInterests.length >= 3`
- Back button: Decrements `currentStep`

**Continue Button State:**

```typescript
// Step 1: enabled if path selected
const canContinueStep1 = selectedPath !== null;

// Step 2: enabled if at least 3 interests selected
const canContinueStep2 = selectedInterests.length >= 3;
```

---

## Layout Specifications

### Mobile (< 768px)

- Single column layout
- Path cards stack vertically with full width
- Interest tags wrap naturally
- Navigation buttons side by side at bottom

### Desktop (≥ 768px)

- Centered content with max-width: 800px
- Path cards in 3-column grid: `grid-template-columns: repeat(3, 1fr)`
- Interest tags wrap naturally in wider container
- Navigation buttons at bottom: Back left, Continue right

**Layout CSS:**

```css
.onboarding-container {
  max-width: 800px;
  margin: 0 auto;
  padding: var(--ag-space-6);
}

.step-title {
  font-size: var(--ag-font-size-2x);
  font-weight: 600;
  margin-bottom: var(--ag-space-2);
}

.step-subtitle {
  color: var(--ag-text-secondary);
  margin-bottom: var(--ag-space-6);
}

/* Path cards grid */
.path-cards {
  display: grid;
  gap: var(--ag-space-4);
  margin-bottom: var(--ag-space-8);
}

@media (min-width: 768px) {
  .path-cards {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Navigation row */
.nav-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: var(--ag-space-8);
}
```

---

## ASCII Diagrams

### Desktop Layout - Step 1: Choose Your Path

```
┌────────────────────────────────────────────────────────────────────────────┐
│                                                                            │
│         ①──────────────────────②──────────────────────③                  │
│    Choose your path       Pick your interests    Review & Start            │
│       (active)                (pending)             (pending)              │
│                                                                            │
│    What brings you here today?                                             │
│    Choose the option that best describes how you'll use AgnosticUI         │
│                                                                            │
│    ┌────────────────────┐  ┌────────────────────┐  ┌────────────────────┐  │
│    │                    │  │                    │  │                    │  │
│    │         👤         │  │          👥         │  │         🏢         │  │
│    │                    │  │                    │  │                    │  │
│    │  Personal Projects │  │ Team Development   │  │    Enterprise      │  │
│    │                    │  │                    │  │                    │  │
│    │  Building side     │  │  Collaborating     │  │  Large-scale       │  │
│    │  projects,         │  │  with a small      │  │  applications      │  │
│    │  portfolios, or    │  │  team on shared    │  │  with multiple     │  │
│    │  learning          │  │  projects          │  │  teams             │  │
│    │                    │  │                    │  │                    │  │
│    └────────────────────┘  └────────────────────┘  └────────────────────┘  │
│         (white)              (selected - blue)          (white)           │
│                                                                            │
│    ┌────────┐                                             ┌──────────────┐ │
│    │  Back  │                                             │   Continue   │ │
│    └────────┘                                             └──────────────┘ │
│    (bordered)                                               (primary)      │
└────────────────────────────────────────────────────────────────────────────┘
```

### Desktop Layout - Step 2: Pick Your Interests

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│        ①──────────────────────②──────────────────────③                    │
│    Choose your path       Pick your interests    Review & Start             │
│    (completed ✓)              (active)              (pending)               │
│                                                                             │
│    What are you most interested in?                                         │
│    Select all the topics that interest you (choose at least 3)              │
│                                                                             │
│    ┌──────────────┐ ┌────────────────────┐ ┌─────────────────────┐          │
│    │Accessibility │ │Component Libraries │ │✓ Design Systems     │          │
│    └──────────────┘ └────────────────────┘ └─────────────────────┘          │
│      (bordered)           (bordered)            (primary/selected)          │
│                                                                             │
│    ┌───────┐ ┌─────┐ ┌──────────────────────┐ ┌──────────────────┐          │
│    │ React │ │ Vue │ │✓ Web Components      │ │Mobile Development│          │
│    └───────┘ └─────┘ └──────────────────────┘ └──────────────────┘          │
│                           (primary/selected)                                │
│                                                                             │
│    ┌───────┐ ┌────────────────┐ ┌──────────────────┐ ┌──────────────┐       │
│    │Svelte │ │CSS Architecture│ │Responsive Design │ │Web Standards │       │
│    └───────┘ └────────────────┘ └──────────────────┘ └──────────────┘       │
│                                                                             │
│    ┌─────────────┐ ┌──────────┐ ┌────────────┐                              │
│    │Performance  │ │Dev Tools │ │ JavaScript │                              │
│    └─────────────┘ └──────────┘ └────────────┘                              │
│                                                                             │
│    ┌─────────┐ ┌────────┐ ┌────────────┐ ┌──────────┐                       │
│    │ Testing │ │Theming │ │✓ Design    │ │✓ Figma   │                       │
│    └─────────┘ └────────┘ └────────────┘ └──────────┘                       │
│                            (primary)       (primary)                        │
│                                                                             │
│    ┌────────┐                                              ┌──────────────┐ │
│    │  Back  │                                              │   Continue   │ │
│    └────────┘                                              └──────────────┘ │
│    (bordered)                                      (primary, enabled w/4)   │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Desktop Layout - Step 3: Review & Start

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│    ①──────────────────────②──────────────────────③                        │
│    Choose your path       Pick your interests    Review & Start             │
│    (completed ✓)          (completed ✓)           (active)                  │
│                                                                             │
│    You're all set!                                                          │
│                                                                             │
│    YOUR PATH                       YOUR INTERESTS                           │
│    Team Development                Design, Design Systems,                  │
│                                    Figma, Web Components                    │
│                                                                             │
│    ┌────────────────────────────────────────────────────────────────────┐   │
│    │ ℹ️ What's next?                                                    │   │
│    │                                                                    │   │
│    │ Based on your selections, we've customized your dashboard with     │   │
│    │ relevant documentation, examples, and starter templates. You can   │   │
│    │ always update your preferences later in settings.                  │   │
│    │                                                                    │   │
│    └────────────────────────────────────────────────────────────────────┘   │
│                        (ag-alert variant="info")                            │
│                                                                             │
│    ┌────────┐                                       ┌────────────────────┐  │
│    │  Back  │                                       │ Start Building  →  │  │
│    └────────┘                                       └────────────────────┘  │
│    (bordered)                                            (primary)          │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Mobile Layout - Step 2: Pick Your Interests

```
┌───────────────────────────────────┐
│                                   │
│   ①────────②────────③           │
│   Choose   Pick     Review        │
│   (✓)     (active)  (pending)     │
│                                   │
│  What are you most interested     │
│  in?                              │
│                                   │
│  Select all the topics that       │
│  interest you (choose at          │
│  least 3)                         │
│                                   │
│  ┌──────────────┐                 │
│  │Accessibility │                 │
│  └──────────────┘                 │
│                                   │
│  ┌────────────────────┐           │
│  │Component Libraries │           │
│  └────────────────────┘           │
│                                   │
│  ┌─────────────────────┐          │
│  │✓ Design Systems     │          │
│  └─────────────────────┘          │
│       (primary)                   │
│                                   │
│  ┌───────┐ ┌─────┐                │
│  │ React │ │ Vue │                │
│  └───────┘ └─────┘                │
│                                   │
│  ┌──────────────────────┐         │
│  │✓ Web Components      │         │
│  └──────────────────────┘         │
│       (primary)                   │
│                                   │
│  ... more tags ...                │
│                                   │
│  ┌────────────┐ ┌──────────┐      │
│  │✓ Design    │ │✓ Figma   │      │
│  └────────────┘ └──────────┘      │
│    (primary)      (primary)       │
│                                   │
│  ┌────────┐      ┌────────────┐   │
│  │  Back  │      │  Continue  │   │
│  └────────┘      └────────────┘   │
│  (bordered)        (primary)      │
└───────────────────────────────────┘
```

---

## Timeline Marker States by Step

| Current Step | Step 1 Marker | Step 2 Marker | Step 3 Marker |
|--------------|---------------|---------------|---------------|
| Step 1       | current (blue)| pending (gray)| pending (gray)|
| Step 2       | completed (green)| current (blue)| pending (gray)|
| Step 3       | completed (green)| completed (green)| current (blue)|

---

## Key Implementation Notes

1. **Timeline with numbered markers:** Use the Numbered Steps Timeline pattern (markers via slots, no changes to core component needed).

2. **Path card selection (Step 1):** Use `ag-selection-card-group` with `type="radio"`. The component handles all selection states (border color, background, indicator badge) automatically.

3. **Interest tag selection (Step 2):** Use `ag-selection-button-group` with `type="checkbox"`, `shape="capsule"`, and `size="md"`. The component handles all selection states (bordered vs filled, corner badge indicator) automatically.

4. **Continue button disabled state:** Use `isDisabled` attribute/prop when conditions not met.

5. **Alert component:** Use `variant="info"` for the "What's next?" info box in Step 3.

6. **Event handling:** Both SelectionCardGroup and SelectionButtonGroup emit `selection-change` events with `{ value, checked, selectedValues }` detail. Use `selectedValues` to track current selections.

7. **State persistence:** Consider storing state in localStorage for page refresh persistence (optional enhancement).

---

## Implementation Learnings

> This section will be updated as we build each framework example.

### React Example

**Status:** Not started

### Vue Example

**Status:** Not started

### Lit Example

**Status:** Not started
