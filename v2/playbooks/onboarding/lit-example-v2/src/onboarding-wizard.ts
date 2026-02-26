import { LitElement, html, css } from 'lit';
import { property, state } from 'lit/decorators.js';
import './components/ag/Button/core/Button';
import './components/ag/Progress/core/Progress';
import './components/ag/Alert/core/Alert';
import './components/ag/SelectionCard/core/SelectionCard';
import './components/ag/SelectionCardGroup/core/SelectionCardGroup';

// ---------------------------------------------------------------------------
// Icons (inline SVG)
// ---------------------------------------------------------------------------
const checkIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`;
const arrowRightIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`;
const userIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;
const usersIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`;
const buildingIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>`;
const sunIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;
const moonIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;
const infoIcon = html`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-left:4px"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>`;

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------
const TOTAL_POSITIONS = 6;
const TOTAL_QUESTION_STEPS = 5;
const INTERSTITIAL_POSITION = 3;

const QUESTION_POSITIONS = [1, 2, 4, 5, 6];
const getQuestionStepNumber = (position: number): number | null => {
  const idx = QUESTION_POSITIONS.indexOf(position);
  return idx >= 0 ? idx + 1 : null;
};

type ViewType = 'path' | 'interests' | 'interstitial' | 'review';
const getViewType = (position: number): ViewType => {
  if (position === 1) return 'path';
  if (position === INTERSTITIAL_POSITION) return 'interstitial';
  if (position === TOTAL_POSITIONS) return 'review';
  return 'interests';
};

const INTEREST_CATEGORIES = [
  {
    id: 'frontend',
    position: 2,
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
    position: 4,
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

const PROGRESS_RIGHT_LABEL: Record<number, string> = {
  1: 'Choose Your Path',
  2: 'Front-end Frameworks',
  3: '',
  4: 'Design & Styling',
  5: 'Engineering & Quality',
  6: 'Review & Start',
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export class OnboardingWizard extends LitElement {
  static styles = css`
    *, *::before, *::after { box-sizing: border-box; }

    :host {
      display: flex;
      flex-direction: column;
      font-family: 'Inter', sans-serif;
      min-height: 100vh;
      background: var(--ag-background-primary);
    }

    .page {
      min-height: 100vh;
      background: var(--ag-background-primary);
      display: flex;
      flex-direction: column;
    }

    /* Header */
    .wizard-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: var(--ag-space-3) var(--ag-space-6);
      border-bottom: 1px solid var(--ag-border);
      background: var(--ag-background-primary);
    }

    .wizard-logo {
      font-size: var(--ag-font-size-base);
      font-weight: 700;
      color: var(--ag-text-primary);
      letter-spacing: -0.01em;
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

    /* Main — vertical centering wrapper */
    .wizard-main {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: var(--ag-space-6) var(--ag-space-4);
    }

    /* Wizard container */
    .wizard-container {
      width: 100%;
      max-width: 640px;
      min-height: 540px;
      padding: 0 var(--ag-space-2);
    }

    /* Progress */
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

    .wizard-progress-label .step-counter {
      font-weight: 500;
      color: var(--ag-text-primary);
    }

    /* Step titles */
    .step-title {
      font-size: var(--ag-font-size-2x);
      font-weight: 600;
      color: var(--ag-text-primary);
      margin-bottom: var(--ag-space-2);
      margin-top: 0;
    }

    .step-subtitle {
      font-size: var(--ag-font-size-sm);
      color: var(--ag-text-secondary);
      margin-bottom: var(--ag-space-6);
      margin-top: 0;
    }

    /* -----------------------------------------------------------------------
       Path cards — 1 col mobile, 3 cols desktop
       Grid applied via ::part() on the component's internal content slot
       ----------------------------------------------------------------------- */
    .path-cards-wrapper {
      margin-bottom: var(--ag-space-6);
    }

    .path-cards-wrapper ag-selection-card-group::part(ag-selection-card-group-content) {
      display: grid;
      gap: var(--ag-space-4);
      grid-template-columns: 1fr;
    }

    @media (min-width: 480px) {
      .path-cards-wrapper ag-selection-card-group::part(ag-selection-card-group-content) {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    /* -----------------------------------------------------------------------
       Equal-height path cards
       Host → flex column so the shadow DOM label can fill it with flex: 1
       Label part → flex column + justify-content: center for vertical centering
       ----------------------------------------------------------------------- */
    .path-cards-wrapper ag-selection-card {
      display: flex;
      flex-direction: column;
    }

    .path-cards-wrapper ag-selection-card::part(ag-selection-card-container) {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    /* Path card inner content */
    .path-card-content {
      text-align: center;
      padding: var(--ag-space-4) var(--ag-space-2);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .path-card-content h3 {
      font-size: var(--ag-font-size-base);
      font-weight: 600;
      margin: var(--ag-space-2) 0;
      color: var(--ag-text-primary);
    }

    .path-card-content p {
      font-size: var(--ag-font-size-sm);
      color: var(--ag-text-secondary);
      margin: 0;
      line-height: 1.4;
    }

    .path-icon {
      margin-bottom: var(--ag-space-3);
      color: var(--ag-primary);
    }

    /* -----------------------------------------------------------------------
       Interests — always 2-column grid
       Grid applied via ::part() on the component's internal content slot
       ----------------------------------------------------------------------- */
    .interests-wrapper {
      margin-bottom: var(--ag-space-6);
    }

    .interests-wrapper ag-selection-card-group::part(ag-selection-card-group-content) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: var(--ag-space-3);
    }

    /* Interstitial */
    .interstitial {
      padding-top: var(--ag-space-2);
    }

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

    .interstitial-body {
      font-size: var(--ag-font-size-base);
      color: var(--ag-text-secondary);
      line-height: 1.6;
      margin-bottom: var(--ag-space-8);
    }

    /* Review */
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
      margin-top: 0;
    }

    .review-value {
      font-size: var(--ag-font-size-base);
      color: var(--ag-text-primary);
      margin: 0;
    }

    /* Navigation */
    .nav-buttons {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: var(--ag-space-6);
    }

    .nav-buttons--end {
      justify-content: flex-end;
    }

    .inline-icon-btn {
      display: inline-flex;
      align-items: center;
      gap: var(--ag-space-2);
    }
  `;

  @property({ type: Number }) currentPosition = 1;
  @property({ type: Boolean }) isDark = localStorage.getItem('ag-theme') === 'dark';
  @state() private selectedPath: string | null = null;
  @state() private selectedByCategory: Record<string, string[]> = {};

  // Derived getters
  private get progressValue() {
    return Math.round((this.currentPosition / TOTAL_POSITIONS) * 100);
  }

  private get questionStepNum() {
    return getQuestionStepNumber(this.currentPosition);
  }

  private get progressLeftLabel() {
    return this.questionStepNum !== null
      ? `Step ${this.questionStepNum} of ${TOTAL_QUESTION_STEPS}`
      : 'Halfway there!';
  }

  private get progressRightLabel() {
    return PROGRESS_RIGHT_LABEL[this.currentPosition] || '';
  }

  private get currentCategory() {
    return INTEREST_CATEGORIES.find(c => c.position === this.currentPosition) ?? null;
  }

  private get viewType() {
    return getViewType(this.currentPosition);
  }

  private get canProceed() {
    if (this.currentPosition === 1) return this.selectedPath !== null;
    if (this.currentPosition === INTERSTITIAL_POSITION) return true;
    // Interest steps (2, 4, 5): require at least 1 selection in this category
    const cat = this.currentCategory;
    if (cat) {
      return (this.selectedByCategory[cat.id] ?? []).length > 0;
    }
    return true; // review step
  }

  private get showStandardNav() {
    return this.currentPosition !== INTERSTITIAL_POSITION;
  }

  private get showBottomBack() {
    return this.currentPosition > 1 && this.currentPosition !== INTERSTITIAL_POSITION;
  }

  private get selectedPathLabel() {
    if (this.selectedPath === 'personal') return 'Personal Projects';
    if (this.selectedPath === 'team') return 'Team Development';
    if (this.selectedPath === 'enterprise') return 'Enterprise';
    return '—';
  }

  // Handlers
  private toggleDark() {
    const next = !this.isDark;
    this.isDark = next;
    document.documentElement.setAttribute('data-theme', next ? 'dark' : '');
    localStorage.setItem('ag-theme', next ? 'dark' : '');
  }

  private handleNext() {
    if (this.currentPosition < TOTAL_POSITIONS) this.currentPosition++;
  }

  private handleBack() {
    if (this.currentPosition > 1) this.currentPosition--;
  }

  private handlePathChange(e: Event) {
    const detail = (e as CustomEvent).detail;
    this.selectedPath = detail?.selectedValues?.[0] || null;
  }

  private handleInterestChange(e: Event, categoryId: string) {
    const detail = (e as CustomEvent).detail;
    const newValues: string[] = detail?.selectedValues ?? [];
    this.selectedByCategory = { ...this.selectedByCategory, [categoryId]: newValues };
  }

  // Render helpers
  private renderProgress() {
    return html`
      <div class="wizard-progress">
        <div class="wizard-progress-label">
          <span class="step-counter">${this.progressLeftLabel}</span>
          ${this.progressRightLabel ? html`<span>${this.progressRightLabel}</span>` : ''}
        </div>
        <ag-progress value=${this.progressValue}></ag-progress>
      </div>
    `;
  }

  private renderPathStep() {
    return html`
      <div>
        <h2 class="step-title">What brings you here today?</h2>
        <p class="step-subtitle">Choose the option that best describes how you'll use AgnosticUI</p>
        <div class="path-cards-wrapper">
          <ag-selection-card-group
            type="radio"
            name="path"
            legend="Choose your path"
            legend-hidden
            @selection-change=${this.handlePathChange}
          >
            <ag-selection-card value="personal" label="Personal Projects">
              <div class="path-card-content">
                <div class="path-icon">${userIcon}</div>
                <h3>Personal Projects</h3>
                <p>Building side projects, portfolios, or learning</p>
              </div>
            </ag-selection-card>
            <ag-selection-card value="team" label="Team Development">
              <div class="path-card-content">
                <div class="path-icon">${usersIcon}</div>
                <h3>Team Development</h3>
                <p>Collaborating with a small team on shared projects</p>
              </div>
            </ag-selection-card>
            <ag-selection-card value="enterprise" label="Enterprise">
              <div class="path-card-content">
                <div class="path-icon">${buildingIcon}</div>
                <h3>Enterprise</h3>
                <p>Large-scale applications with multiple teams</p>
              </div>
            </ag-selection-card>
          </ag-selection-card-group>
        </div>
      </div>
    `;
  }

  private renderInterestsStep() {
    const cat = this.currentCategory;
    if (!cat) return html``;
    return html`
      <div>
        <h2 class="step-title">${cat.question}</h2>
        <p class="step-subtitle">${cat.subtitle}</p>
        <div class="interests-wrapper">
          <ag-selection-card-group
            type="checkbox"
            name="interests-${cat.id}"
            legend=${cat.title}
            legend-hidden
            .values=${this.selectedByCategory[cat.id] ?? []}
            @selection-change=${(e: Event) => this.handleInterestChange(e, cat.id)}
          >
            ${cat.items.map(item => html`
              <ag-selection-card value=${item.value} label=${item.label}>
                ${item.label}
              </ag-selection-card>
            `)}
          </ag-selection-card-group>
        </div>
      </div>
    `;
  }

  private renderInterstitial() {
    return html`
      <div class="interstitial">
        <div class="interstitial-back">
          <ag-button bordered shape="rounded" @click=${this.handleBack}>← Back</ag-button>
        </div>
        <h2 class="step-title">Those are some great interests!</h2>
        <p class="step-subtitle">Just a few more questions left...</p>
        <div class="interstitial-illustration">
          <div class="interstitial-avatar">${userIcon}</div>
        </div>
        <p class="interstitial-body">
          These interests will help us set up the app in a way that's customized
          specifically to you. You can change them at any time in your Settings. ${infoIcon}
        </p>
        <ag-button variant="primary" shape="rounded" full-width @click=${this.handleNext}>Next</ag-button>
      </div>
    `;
  }

  private renderReview() {
    const allInterests = Object.values(this.selectedByCategory).flat();
    const interests = allInterests.length > 0
      ? allInterests.join(', ')
      : 'None selected';
    return html`
      <div>
        <h2 class="step-title">You're all set!</h2>
        <div class="review-section">
          <div class="review-block">
            <p class="review-label">Your Path</p>
            <p class="review-value">${this.selectedPathLabel}</p>
          </div>
          <div class="review-block">
            <p class="review-label">Your Interests</p>
            <p class="review-value">${interests}</p>
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
      </div>
    `;
  }

  private renderNavButtons() {
    if (!this.showStandardNav) return html``;
    const isLast = this.currentPosition === TOTAL_POSITIONS;
    return html`
      <div class="${`nav-buttons${this.showBottomBack ? '' : ' nav-buttons--end'}`}">
        ${this.showBottomBack
          ? html`<ag-button bordered shape="rounded" @click=${this.handleBack}>Back</ag-button>`
          : ''
        }
        <ag-button
          variant="primary"
          shape="rounded"
          ?disabled=${!this.canProceed}
          @click=${this.handleNext}
        >
          ${isLast
            ? html`<span class="inline-icon-btn">Start Building ${arrowRightIcon}</span>`
            : html`<span>Next</span>`
          }
        </ag-button>
      </div>
    `;
  }

  render() {
    return html`
      <div class="page">
        <header class="wizard-header">
          <span class="wizard-logo">AgnosticUI</span>
          <button class="theme-toggle" @click=${this.toggleDark} aria-label="Toggle dark mode">
            ${this.isDark ? sunIcon : moonIcon}
          </button>
        </header>

        <main class="wizard-main">
          <div class="wizard-container">
            ${this.renderProgress()}

            ${this.viewType === 'path' ? this.renderPathStep() : ''}
            ${this.viewType === 'interests' ? this.renderInterestsStep() : ''}
            ${this.viewType === 'interstitial' ? this.renderInterstitial() : ''}
            ${this.viewType === 'review' ? this.renderReview() : ''}

            ${this.renderNavButtons()}
          </div>
        </main>

        <skin-switcher></skin-switcher>
      </div>
    `;
  }
}

customElements.define('onboarding-wizard', OnboardingWizard);
