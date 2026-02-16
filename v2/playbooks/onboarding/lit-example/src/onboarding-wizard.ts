import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

// Import AgnosticUI token styles
import './components/ag/styles/ag-tokens.css';
import './components/ag/styles/ag-tokens-dark.css';
import './components/ag/styles/skins-bundle.css';

// Import AgnosticUI components
import './components/ag/Button/core/Button';
import './components/ag/Alert/core/Alert';
import './components/ag/Timeline/core/Timeline';
import './components/ag/SelectionCardGroup/core/SelectionCardGroup';
import './components/ag/SelectionCard/core/SelectionCard';
import './components/ag/SelectionButtonGroup/core/SelectionButtonGroup';
import './components/ag/SelectionButton/core/SelectionButton';
import './skin-switcher';

// Inline SVG icons
const userIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;
const usersIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`;
const buildingIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>`;
const arrowRightIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`;
const checkIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`;

// Interest tags data
const INTERESTS = [
  'Accessibility',
  'Component Libraries',
  'Design Systems',
  'React',
  'Vue',
  'Web Components',
  'Mobile Development',
  'Svelte',
  'CSS Architecture',
  'Responsive Design',
  'Web Standards',
  'Performance',
  'Dev Tools',
  'JavaScript',
  'Testing',
  'Theming',
  'Design',
  'Figma',
];

// Path options data
const PATHS = [
  {
    value: 'personal',
    label: 'Personal Projects',
    description: 'Building side projects, portfolios, or learning',
    icon: userIcon,
  },
  {
    value: 'team',
    label: 'Team Development',
    description: 'Collaborating with a small team on shared projects',
    icon: usersIcon,
  },
  {
    value: 'enterprise',
    label: 'Enterprise',
    description: 'Large-scale applications with multiple teams',
    icon: buildingIcon,
  },
];

type Step = 1 | 2 | 3;
type PathValue = 'personal' | 'team' | 'enterprise';

@customElement('onboarding-wizard')
export class OnboardingWizard extends LitElement {
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

    .timeline-wrapper {
      margin-bottom: var(--ag-space-8);
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

    .path-icon svg {
      width: 48px;
      height: 48px;
    }

    .path-card-content h3 {
      margin: 0 0 var(--ag-space-2) 0;
      font-size: var(--ag-font-size-lg);
      font-weight: 600;
    }

    .path-card-content p {
      margin: 0;
      color: var(--ag-text-secondary);
      font-size: var(--ag-font-size-sm);
    }

    .path-cards-wrapper {
      margin-bottom: var(--ag-space-8);
    }

    .path-cards-wrapper ag-selection-card-group::part(ag-selection-card-group-content) {
      display: grid;
      gap: var(--ag-space-4);
      grid-template-columns: 1fr;
    }

    @media (min-width: 768px) {
      .path-cards-wrapper ag-selection-card-group::part(ag-selection-card-group-content) {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .interests-wrapper {
      margin-bottom: var(--ag-space-8);
    }

    .nav-buttons {
      display: flex;
      justify-content: space-between;
      gap: var(--ag-space-4);
      margin-top: var(--ag-space-8);
    }

    .nav-spacer {
      display: block;
    }

    .summary-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--ag-space-6);
      margin-bottom: var(--ag-space-6);
    }

    @media (max-width: 767px) {
      .summary-grid {
        grid-template-columns: 1fr;
      }
    }

    .summary-section h4 {
      font-size: var(--ag-font-size-xs);
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--ag-text-secondary);
      margin: 0 0 var(--ag-space-2) 0;
    }

    .summary-section p {
      margin: 0;
    }

    .alert-wrapper {
      margin-bottom: var(--ag-space-6);
    }

    .button-with-icon {
      display: inline-flex;
      align-items: center;
      gap: var(--ag-space-2);
    }
  `;

  @state()
  private _currentStep: Step = 1;

  @state()
  private _selectedPath: PathValue | null = null;

  @state()
  private _selectedInterests: string[] = [];

  private _getMarkerClass(step: number): string {
    if (step < this._currentStep) return 'step-marker step-marker-completed';
    if (step === this._currentStep) return 'step-marker step-marker-current';
    return 'step-marker step-marker-pending';
  }

  private _getMarkerContent(step: number) {
    if (step < this._currentStep) return checkIcon;
    return step;
  }

  private _handlePathChange(e: CustomEvent) {
    const { selectedValues } = e.detail;
    this._selectedPath = selectedValues[0] || null;
  }

  private _handleInterestChange(e: CustomEvent) {
    const { selectedValues } = e.detail;
    this._selectedInterests = selectedValues;
  }

  private _handleBack() {
    if (this._currentStep > 1) {
      this._currentStep = (this._currentStep - 1) as Step;
    }
  }

  private _handleContinue() {
    if (this._currentStep < 3) {
      this._currentStep = (this._currentStep + 1) as Step;
    }
  }

  private get _canContinue(): boolean {
    if (this._currentStep === 1) return this._selectedPath !== null;
    if (this._currentStep === 2) return this._selectedInterests.length >= 3;
    return true;
  }

  private get _pathLabel(): string {
    const path = PATHS.find(p => p.value === this._selectedPath);
    return path?.label || '';
  }

  private get _formattedInterests(): string {
    return this._selectedInterests
      .map((id) => {
        const interest = INTERESTS.find(
          (i) => i.toLowerCase().replace(/\s+/g, '-') === id
        );
        return interest || id;
      })
      .join(', ');
  }

  private _toInterestValue(interest: string): string {
    return interest.toLowerCase().replace(/\s+/g, '-');
  }

  private _renderTimeline() {
    return html`
      <div class="timeline-wrapper">
        <ag-timeline orientation="horizontal">
          <ag-timeline-item>
            <span slot="ag-start">Step 1</span>
            <div slot="ag-marker" class="${this._getMarkerClass(1)}">${this._getMarkerContent(1)}</div>
            <span slot="ag-end">Choose your path</span>
          </ag-timeline-item>
          <ag-timeline-item>
            <span slot="ag-start">Step 2</span>
            <div slot="ag-marker" class="${this._getMarkerClass(2)}">${this._getMarkerContent(2)}</div>
            <span slot="ag-end">Pick your interests</span>
          </ag-timeline-item>
          <ag-timeline-item>
            <span slot="ag-start">Step 3</span>
            <div slot="ag-marker" class="${this._getMarkerClass(3)}">${this._getMarkerContent(3)}</div>
            <span slot="ag-end">Review & Start</span>
          </ag-timeline-item>
        </ag-timeline>
      </div>
    `;
  }

  private _renderStep1() {
    return html`
      <h1 class="step-title">What brings you here today?</h1>
      <p class="step-subtitle">
        Choose the option that best describes how you'll use AgnosticUI
      </p>

      <div class="path-cards-wrapper">
        <ag-selection-card-group
          type="radio"
          name="path"
          legend="Choose your path"
          legend-hidden
          .value=${this._selectedPath || ''}
          @selection-change=${this._handlePathChange}
        >
          ${PATHS.map(
            (path) => html`
              <ag-selection-card value=${path.value} label=${path.label}>
                <div class="path-card-content">
                  <div class="path-icon">${path.icon}</div>
                  <h3>${path.label}</h3>
                  <p>${path.description}</p>
                </div>
              </ag-selection-card>
            `
          )}
        </ag-selection-card-group>
      </div>
    `;
  }

  private _renderStep2() {
    return html`
      <h1 class="step-title">What are you most interested in?</h1>
      <p class="step-subtitle">
        Select all the topics that interest you (choose at least 3)
      </p>

      <div class="interests-wrapper">
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
          ${INTERESTS.map(
            (interest) => html`
              <ag-selection-button
                value=${this._toInterestValue(interest)}
                label=${interest}
              >
                ${interest}
              </ag-selection-button>
            `
          )}
        </ag-selection-button-group>
      </div>
    `;
  }

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

      <div class="alert-wrapper">
        <ag-alert variant="info">
          <strong>What's next?</strong>
          <p>
            Based on your selections, we've customized your dashboard with
            relevant documentation, examples, and starter templates. You can
            always update your preferences later in settings.
          </p>
        </ag-alert>
      </div>
    `;
  }

  private _renderNavButtons() {
    return html`
      <div class="nav-buttons">
        ${this._currentStep > 1
          ? html`
              <ag-button bordered shape="rounded" @click=${this._handleBack}>
                Back
              </ag-button>
            `
          : html`<div class="nav-spacer"></div>`}

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

  override render() {
    return html`
      <div class="onboarding-container">
        ${this._renderTimeline()}
        ${this._currentStep === 1 ? this._renderStep1() : ''}
        ${this._currentStep === 2 ? this._renderStep2() : ''}
        ${this._currentStep === 3 ? this._renderStep3() : ''}
        ${this._renderNavButtons()}

        <skin-switcher></skin-switcher>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'onboarding-wizard': OnboardingWizard;
  }
}
