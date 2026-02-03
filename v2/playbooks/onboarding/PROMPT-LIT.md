# Lit Onboarding Wizard Implementation Guide

## Project Setup

This guide creates a Vite-based Lit TypeScript project implementing the onboarding wizard playbook.

### Prerequisites

- Ensure you're in the `v2/playbooks/onboarding` directory
- Design mockups are located in `./design/`:
  - `Desktop-Step1.png`, `Desktop-Step2a.png`, `Desktop-Step2b.png`, `Desktop-Step3.png`
  - `Mobile-Step1.png`, `Mobile-Step2a.png`, `Mobile-Step2b.png`, `Mobile-Step3.png`

### Create Vite Project

_Note: The Vite project MUST be TypeScript enabled because the agnosticui-cli only works properly in a properly setup TypeScript project._

```bash
npm create vite@latest lit -- --template lit-ts
```

### Install Dependencies

```bash
cd lit
npm install
cd ..
```

### Initialize AgnosticUI

```bash
cd lit
npx agnosticui-cli init --framework lit --skip-prompts
npx agnosticui-cli add Button Alert Timeline Icon SelectionCardGroup SelectionButtonGroup
cd ..
```

The CLI will:
- Set up the AgnosticUI configuration for Lit
- Install required dependencies
- Add component files to your project
- Configure styling and imports

**Post-init verification:**
- Ensure `ag-tokens.css` and `ag-tokens-dark.css` are in `src/components/ag/styles/`
- Import these in your component file

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

### Icon Reference (Inline SVG)

Lucide doesn't work directly with Lit templates. Use inline SVG:

```typescript
const userIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;

const usersIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`;

const buildingIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>`;

const arrowRightIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`;

const checkIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`;
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

## Component Structure

Create a custom element `<onboarding-wizard>`:

```typescript
import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

// Import AgnosticUI token styles
import './components/ag/styles/ag-tokens.css';
import './components/ag/styles/ag-tokens-dark.css';

// Import AgnosticUI components
import './components/ag/Button/core/Button';
import './components/ag/Alert/core/Alert';
import './components/ag/Timeline/core/Timeline';
import './components/ag/SelectionCardGroup/core/SelectionCardGroup';
import './components/ag/SelectionCard/core/SelectionCard';
import './components/ag/SelectionButtonGroup/core/SelectionButtonGroup';
import './components/ag/SelectionButton/core/SelectionButton';

@customElement('onboarding-wizard')
export class OnboardingWizard extends LitElement {
  // Component implementation
}
```

---

## Component Styles

```typescript
static override styles = css`
  :host {
    display: block;
    width: 100%;
  }

  .onboarding-container {
    max-width: 800px;
    margin: 0 auto;
    padding: var(--ag-space-6);
  }

  .step-marker {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: var(--ag-font-size-sm);
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

  .step-title {
    font-size: var(--ag-font-size-2x);
    font-weight: 600;
    margin: 0 0 var(--ag-space-2) 0;
  }

  .step-subtitle {
    color: var(--ag-text-secondary);
    margin: 0 0 var(--ag-space-6) 0;
  }

  .path-card-content {
    text-align: center;
    padding: var(--ag-space-2);
  }

  .path-icon {
    margin-bottom: var(--ag-space-4);
    color: var(--ag-primary);
  }

  .nav-buttons {
    display: flex;
    justify-content: space-between;
    gap: var(--ag-space-4);
    margin-top: var(--ag-space-8);
  }
`;
```

---

## State Management

```typescript
type Step = 1 | 2 | 3;
type PathValue = 'personal' | 'team' | 'enterprise';

@state()
private _currentStep: Step = 1;

@state()
private _selectedPath: PathValue | null = null;

@state()
private _selectedInterests: string[] = [];

private get _canContinue(): boolean {
  if (this._currentStep === 1) return this._selectedPath !== null;
  if (this._currentStep === 2) return this._selectedInterests.length >= 3;
  return true;
}

private _handlePathChange(e: CustomEvent) {
  const { selectedValues } = e.detail;
  this._selectedPath = selectedValues[0] || null;
}

private _handleInterestChange(e: CustomEvent) {
  const { selectedValues } = e.detail;
  this._selectedInterests = selectedValues;
}
```

---

## Timeline Implementation

```typescript
private _renderTimeline() {
  return html`
    <div class="timeline-wrapper">
      <ag-timeline orientation="horizontal">
        <ag-timeline-item>
          <span slot="ag-start">Step 1</span>
          <div slot="ag-marker" class="${this._getMarkerClass(1)}">
            ${this._getMarkerContent(1)}
          </div>
          <span slot="ag-end">Choose your path</span>
        </ag-timeline-item>
        <ag-timeline-item>
          <span slot="ag-start">Step 2</span>
          <div slot="ag-marker" class="${this._getMarkerClass(2)}">
            ${this._getMarkerContent(2)}
          </div>
          <span slot="ag-end">Pick your interests</span>
        </ag-timeline-item>
        <ag-timeline-item>
          <span slot="ag-start">Step 3</span>
          <div slot="ag-marker" class="${this._getMarkerClass(3)}">
            ${this._getMarkerContent(3)}
          </div>
          <span slot="ag-end">Review & Start</span>
        </ag-timeline-item>
      </ag-timeline>
    </div>
  `;
}

private _getMarkerClass(step: number): string {
  if (step < this._currentStep) return 'step-marker step-marker-completed';
  if (step === this._currentStep) return 'step-marker step-marker-current';
  return 'step-marker step-marker-pending';
}

private _getMarkerContent(step: number) {
  if (step < this._currentStep) return checkIcon;
  return step;
}
```

---

## Step 1: Choose Your Path

```typescript
private _renderStep1() {
  return html`
    <h1 class="step-title">What brings you here today?</h1>
    <p class="step-subtitle">
      Choose the option that best describes how you'll use AgnosticUI
    </p>

    <ag-selection-card-group
      type="radio"
      name="path"
      legend="Choose your path"
      legend-hidden
      .value=${this._selectedPath || ''}
      @selection-change=${this._handlePathChange}
    >
      <ag-selection-card value="personal" label="Personal Projects">
        <div class="path-card-content">
          <div class="path-icon">${userIcon}</div>
          <h3>Personal Projects</h3>
          <p>Building side projects, portfolios, or learning</p>
        </div>
      </ag-selection-card>
      <!-- ... more cards -->
    </ag-selection-card-group>
  `;
}
```

---

## Step 2: Pick Your Interests

```typescript
private _renderStep2() {
  return html`
    <h1 class="step-title">What are you most interested in?</h1>
    <p class="step-subtitle">
      Select all the topics that interest you (choose at least 3)
    </p>

    <ag-selection-button-group
      type="checkbox"
      name="interests"
      shape="capsule"
      size="md"
      legend="Select your interests"
      legend-hidden
      .values=${this._selectedInterests}
      @selection-change=${this._handleInterestChange}
    >
      <ag-selection-button value="accessibility" label="Accessibility">
        Accessibility
      </ag-selection-button>
      <!-- ... more buttons -->
    </ag-selection-button-group>
  `;
}
```

**Interest Tags:**
```
Accessibility, Component Libraries, Design Systems, React, Vue,
Web Components, Mobile Development, Svelte, CSS Architecture,
Responsive Design, Web Standards, Performance, Dev Tools,
JavaScript, Testing, Theming, Design, Figma
```

---

## Step 3: Review & Start

```typescript
private _renderStep3() {
  return html`
    <h1 class="step-title">You're all set!</h1>

    <div class="summary-grid">
      <div class="summary-section">
        <h4>Your Path</h4>
        <p>${this._pathLabel}</p>
      </div>
      <div class="summary-section">
        <h4>Your Interests</h4>
        <p>${this._formattedInterests}</p>
      </div>
    </div>

    <ag-alert variant="info">
      <strong>What's next?</strong>
      <p>
        Based on your selections, we've customized your dashboard with
        relevant documentation, examples, and starter templates.
      </p>
    </ag-alert>
  `;
}
```

---

## Navigation Buttons

```typescript
private _renderNavButtons() {
  return html`
    <div class="nav-buttons">
      ${this._currentStep > 1
        ? html`
            <ag-button bordered shape="rounded" @click=${this._handleBack}>
              Back
            </ag-button>
          `
        : html`<div></div>`}

      ${this._currentStep < 3
        ? html`
            <ag-button
              variant="primary"
              shape="rounded"
              ?disabled=${!this._canContinue}
              @click=${this._handleContinue}
            >
              Continue
            </ag-button>
          `
        : html`
            <ag-button variant="primary" shape="rounded">
              <span class="button-with-icon">
                Start Building
                ${arrowRightIcon}
              </span>
            </ag-button>
          `}
    </div>
  `;
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

## Main Entry Point

Update `index.html`:

```html
<body>
  <onboarding-wizard></onboarding-wizard>
  <script type="module" src="/src/onboarding-wizard.ts"></script>
</body>
```

And create global styles in `src/index.css`:

```css
* {
  box-sizing: border-box;
}

:root {
  font-family: 'Inter', system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
}

body {
  margin: 0;
  background: var(--ag-background-primary);
  color: var(--ag-text-primary);
  min-height: 100vh;
}
```

---

## Common Issues & Fixes

| Issue | Fix |
|-------|-----|
| Icons not rendering | Use inline SVG templates, not lucide imports |
| Button `isDisabled` prop | Use `disabled` not `isDisabled` |
| Missing dark mode tokens | Import both `ag-tokens.css` AND `ag-tokens-dark.css` |
| Selection events | Listen for `@selection-change`, extract from `e.detail.selectedValues` |
| Global CSS not applied in Shadow DOM | Use CSS custom properties (tokens) which pierce Shadow DOM |
