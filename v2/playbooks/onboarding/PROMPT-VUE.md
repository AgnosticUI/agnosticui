# Vue Onboarding Wizard Implementation Guide

## Project Setup

This guide creates a Vite-based Vue TypeScript project implementing the onboarding wizard playbook.

### Prerequisites

- Ensure you're in the `v2/playbooks/onboarding` directory
- Design mockups are located in `./design/`:
  - `Desktop-Step1.png`, `Desktop-Step2a.png`, `Desktop-Step2b.png`, `Desktop-Step3.png`
  - `Mobile-Step1.png`, `Mobile-Step2a.png`, `Mobile-Step2b.png`, `Mobile-Step3.png`

### Create Vite Project

_Note: The Vite project MUST be TypeScript enabled because the agnosticui-cli only works properly in a properly setup TypeScript project._

```bash
npm create vite@latest vue -- --template vue-ts
```

### Install Dependencies

```bash
cd vue
npm install
npm install lucide-vue-next
npm install lit  # Required before CLI init
cd ..
```

### Initialize AgnosticUI

```bash
cd vue
npx agnosticui-cli init --framework vue --skip-prompts
npx agnosticui-cli add Button Alert Timeline Icon SelectionCardGroup SelectionButtonGroup
cd ..
```

The CLI will:
- Set up the AgnosticUI configuration for Vue
- Install required dependencies
- Add component files to your project
- Configure styling and imports

**Post-init verification:**
- Ensure `ag-tokens.css` and `ag-tokens-dark.css` are in `src/components/ag/styles/`
- Import these in your main entry file (`main.ts`)

### CRITICAL: Vue-Specific Configuration

**1. Update `vue/vite.config.ts` to recognize ag-* custom elements:**

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

Without this, Vue will show warnings: `[Vue warn]: Failed to resolve component: ag-*`

**2. Import BOTH token files in `vue/src/main.ts`:**

```typescript
import { createApp } from 'vue'
import './components/ag/styles/ag-tokens.css'
import './components/ag/styles/ag-tokens-dark.css'  // DO NOT FORGET THIS!
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')
```

**3. If TypeScript errors occur from CLI-generated code, update `tsconfig.app.json`:**

```json
{
  "compilerOptions": {
    "strict": false,
    "noUnusedLocals": false,
    "noUnusedParameters": false
  }
}
```

### Font Setup

Add Inter font to `index.html` in the `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
  rel="stylesheet"
/>
```

### Icon Imports Reference

```vue
<script setup>
import { Check, ArrowRight, User, Users, Building2 } from "lucide-vue-next";
</script>
```

---

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

Use the AgnosticUI Timeline component with numbered step markers via slots:

**Step Marker Styles:**

```css
.step-marker {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
}

.step-marker-completed {
  background: var(--ag-success);
  color: white;
}

.step-marker-current {
  background: var(--ag-primary);
  color: white;
}

.step-marker-pending {
  background: transparent;
  border: 2px solid var(--ag-border);
  color: var(--ag-text-secondary);
}
```

### Step 1: Choose Your Path

Use **VueSelectionCardGroup** with `type="radio"` for single selection:

```vue
<VueSelectionCardGroup
  type="radio"
  name="path"
  legend="Choose your path"
  legend-hidden
  :value="selectedPath"
  @selection-change="handlePathChange"
>
  <VueSelectionCard value="personal" label="Personal Projects">
    <div class="path-card-content">
      <User :size="48" />
      <h3>Personal Projects</h3>
      <p>Building side projects, portfolios, or learning</p>
    </div>
  </VueSelectionCard>
  <!-- ... more cards -->
</VueSelectionCardGroup>
```

### Step 2: Pick Your Interests

Use **VueSelectionButtonGroup** with `type="checkbox"`, `shape="capsule"`, `size="md"`:

```vue
<VueSelectionButtonGroup
  type="checkbox"
  name="interests"
  shape="capsule"
  size="md"
  legend="Select your interests"
  legend-hidden
  :values="selectedInterests"
  @selection-change="handleInterestChange"
>
  <VueSelectionButton value="accessibility" label="Accessibility">
    Accessibility
  </VueSelectionButton>
  <!-- ... more buttons -->
</VueSelectionButtonGroup>
```

**Interest Tags:**
```
Accessibility, Component Libraries, Design Systems, React, Vue,
Web Components, Mobile Development, Svelte, CSS Architecture,
Responsive Design, Web Standards, Performance, Dev Tools,
JavaScript, Testing, Theming, Design, Figma
```

### Navigation Buttons

```vue
<!-- Back button -->
<VueButton bordered shape="rounded" @click="handleBack">
  Back
</VueButton>

<!-- Continue button (disabled when conditions not met) -->
<VueButton
  variant="primary"
  shape="rounded"
  :disabled="!canContinue"
  @click="handleContinue"
>
  Continue
</VueButton>

<!-- Final button (Step 3) -->
<VueButton variant="primary" shape="rounded">
  Start Building
  <ArrowRight :size="16" />
</VueButton>
```

### Step 3: Review & Start

Display summary and info alert:

```vue
<VueAlert variant="info">
  <strong>What's next?</strong>
  <p>
    Based on your selections, we've customized your dashboard with
    relevant documentation, examples, and starter templates.
  </p>
</VueAlert>
```

---

## State Management

```vue
<script setup lang="ts">
import { ref, computed } from 'vue';

type Step = 1 | 2 | 3;
type PathValue = 'personal' | 'team' | 'enterprise';

const currentStep = ref<Step>(1);
const selectedPath = ref<PathValue | null>(null);
const selectedInterests = ref<string[]>([]);

const canContinue = computed(() => {
  if (currentStep.value === 1) return selectedPath.value !== null;
  if (currentStep.value === 2) return selectedInterests.value.length >= 3;
  return true;
});

const handlePathChange = (e: CustomEvent) => {
  const { selectedValues } = e.detail;
  selectedPath.value = selectedValues[0] || null;
};

const handleInterestChange = (e: CustomEvent) => {
  const { selectedValues } = e.detail;
  selectedInterests.value = selectedValues;
};
</script>
```

---

## Layout Specifications

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

.nav-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: var(--ag-space-8);
}
```

---

## Timeline Marker States

| Current Step | Step 1 Marker | Step 2 Marker | Step 3 Marker |
|--------------|---------------|---------------|---------------|
| Step 1       | current (blue)| pending (gray)| pending (gray)|
| Step 2       | completed (green ✓)| current (blue)| pending (gray)|
| Step 3       | completed (green ✓)| completed (green ✓)| current (blue)|

---

## Vue-Specific Patterns

```vue
<template>
  <!-- Timeline with Vue wrapper -->
  <Timeline orientation="horizontal">
    <TimelineItem>
      <template #ag-start>Step 1</template>
      <template #ag-marker>
        <div :class="getMarkerClass(1)">
          <Check v-if="currentStep > 1" :size="20" />
          <span v-else>1</span>
        </div>
      </template>
      <template #ag-end>Choose your path</template>
    </TimelineItem>
    <!-- ... more items -->
  </Timeline>
</template>
```

---

## Common Issues & Fixes

| Issue | Fix |
|-------|-----|
| `[Vue warn]: Failed to resolve component: ag-*` | Add `isCustomElement` to vite.config.ts |
| TypeScript strict errors | Relax `tsconfig.app.json` settings |
| Button `isDisabled` prop | Use `disabled` not `isDisabled` |
| Missing dark mode tokens | Import both `ag-tokens.css` AND `ag-tokens-dark.css` |
| Selection events | Listen for `@selection-change`, extract from `e.detail.selectedValues` |
