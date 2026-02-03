# React Onboarding Wizard Implementation Guide

## Project Setup

This guide creates a Vite-based React TypeScript project implementing the onboarding wizard playbook.

### Prerequisites

- Ensure you're in the `v2/playbooks/onboarding` directory
- Design mockups are located in `./design/`:
  - `Desktop-Step1.png`, `Desktop-Step2a.png`, `Desktop-Step2b.png`, `Desktop-Step3.png`
  - `Mobile-Step1.png`, `Mobile-Step2a.png`, `Mobile-Step2b.png`, `Mobile-Step3.png`

### Create Vite Project

_Note: The Vite project MUST be TypeScript enabled because the agnosticui-cli only works properly in a properly setup TypeScript project._

```bash
npm create vite@latest react -- --template react-ts
```

### Install Dependencies

```bash
cd react
npm install
npm install lucide-react
npm install lit  # Required before CLI init
cd ..
```

### Initialize AgnosticUI

```bash
cd react
npx agnosticui-cli init --framework react --skip-prompts
npx agnosticui-cli add Button Alert Timeline Icon SelectionCardGroup SelectionButtonGroup
cd ..
```

The CLI will:
- Set up the AgnosticUI configuration for React
- Install required dependencies
- Add component files to your project
- Configure styling and imports

**Post-init verification:**
- Ensure `ag-tokens.css` and `ag-tokens-dark.css` are in `src/components/ag/styles/`
- Import these in your main entry file (`main.tsx`)

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

```tsx
import { Check, ArrowRight, User, Users, Building2 } from "lucide-react";
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

Use **ReactSelectionCardGroup** with `type="radio"` for single selection:

```tsx
<ReactSelectionCardGroup
  type="radio"
  name="path"
  legend="Choose your path"
  legendHidden
  value={selectedPath}
  onSelectionChange={handlePathChange}
>
  <ReactSelectionCard value="personal" label="Personal Projects">
    <div className="path-card-content">
      <User size={48} />
      <h3>Personal Projects</h3>
      <p>Building side projects, portfolios, or learning</p>
    </div>
  </ReactSelectionCard>
  {/* ... more cards */}
</ReactSelectionCardGroup>
```

### Step 2: Pick Your Interests

Use **ReactSelectionButtonGroup** with `type="checkbox"`, `shape="capsule"`, `size="md"`:

```tsx
<ReactSelectionButtonGroup
  type="checkbox"
  name="interests"
  shape="capsule"
  size="md"
  legend="Select your interests"
  legendHidden
  values={selectedInterests}
  onSelectionChange={handleInterestChange}
>
  <ReactSelectionButton value="accessibility" label="Accessibility">
    Accessibility
  </ReactSelectionButton>
  {/* ... more buttons */}
</ReactSelectionButtonGroup>
```

**Interest Tags:**
```
Accessibility, Component Libraries, Design Systems, React, Vue,
Web Components, Mobile Development, Svelte, CSS Architecture,
Responsive Design, Web Standards, Performance, Dev Tools,
JavaScript, Testing, Theming, Design, Figma
```

### Navigation Buttons

```tsx
// Back button
<ReactButton bordered shape="rounded" onClick={handleBack}>
  Back
</ReactButton>

// Continue button (disabled when conditions not met)
<ReactButton
  variant="primary"
  shape="rounded"
  disabled={!canContinue}
  onClick={handleContinue}
>
  Continue
</ReactButton>

// Final button (Step 3)
<ReactButton variant="primary" shape="rounded">
  Start Building
  <ArrowRight size={16} />
</ReactButton>
```

### Step 3: Review & Start

Display summary and info alert:

```tsx
<ReactAlert variant="info">
  <strong>What's next?</strong>
  <p>
    Based on your selections, we've customized your dashboard with
    relevant documentation, examples, and starter templates.
  </p>
</ReactAlert>
```

---

## State Management

```typescript
interface OnboardingState {
  currentStep: 1 | 2 | 3;
  selectedPath: 'personal' | 'team' | 'enterprise' | null;
  selectedInterests: string[];
}

// Step navigation logic
const canContinueStep1 = selectedPath !== null;
const canContinueStep2 = selectedInterests.length >= 3;
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

## React-Specific Patterns

```tsx
// Event handling for selection components
const handlePathChange = (e: CustomEvent) => {
  const { selectedValues } = e.detail;
  setSelectedPath(selectedValues[0] || null);
};

const handleInterestChange = (e: CustomEvent) => {
  const { selectedValues } = e.detail;
  setSelectedInterests(selectedValues);
};
```

---

## Common Issues & Fixes

| Issue | Fix |
|-------|-----|
| Button `isDisabled` prop | Use `disabled` not `isDisabled` |
| Missing dark mode tokens | Import both `ag-tokens.css` AND `ag-tokens-dark.css` |
| Selection events | Listen for `onSelectionChange`, extract from `e.detail.selectedValues` |
