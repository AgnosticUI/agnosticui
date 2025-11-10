// v2/lib/src/components/EmptyState/core/_EmptyState.ts
import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

export type EmptyStateProps = {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  size?: 'sm' | 'md' | 'lg';
  bordered?: boolean;
  rounded?: boolean;
};

export class AgEmptyState extends LitElement implements EmptyStateProps {
  @property({ type: String }) title = '';
  @property({ type: String }) subtitle = '';
  @property({ type: String }) buttonText = '';
  @property({ type: String, reflect: true })
  size: 'sm' | 'md' | 'lg' = 'md';
  @property({ type: Boolean }) bordered = false;
  @property({ type: Boolean }) rounded = false;

  firstUpdated() {
    // Listen to slotchange events from shadow DOM slots
    const iconSlot = this.shadowRoot?.querySelector('slot[name="icon"]');
    const actionsSlot = this.shadowRoot?.querySelector('slot[name="actions"]');
    
    iconSlot?.addEventListener('slotchange', () => this.requestUpdate());
    actionsSlot?.addEventListener('slotchange', () => this.requestUpdate());
  }

  static styles = css`
    :host {
      display: block;
    }

    .empty {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: var(--ag-space-8);
      background: var(--ag-background-secondary);
      min-height: var(--ag-space-14);
    }

    .empty-bordered {
      background: transparent;
      border: var(--ag-border-width-1) solid var(--ag-border-subtle);
    }

    .empty-rounded {
      border-radius: var(--ag-radius-lg);
    }

    /* Icon sizing and containment */
    .icon {
      margin-bottom: var(--ag-space-1);
      color: var(--ag-neutral-400);
    }

    .icon-inner {
      width: var(--ag-empty-icon-size, var(--ag-space-10));
      height: var(--ag-empty-icon-size, var(--ag-space-10));
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    .icon-inner > ::slotted(*) {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    :host([size="sm"]) {
      --ag-empty-icon-size: var(--ag-space-8);
    }

    :host([size="lg"]) {
      --ag-empty-icon-size: var(--ag-space-12);
    }

    /* Title */
    .title {
      font-size: var(--ag-font-size-xl);
      margin-block-start: 0;
      margin-block-end: var(--ag-space-2);
      line-height: var(--ag-line-height-lg);
    }

    :host([size="sm"]) .title {
      font-size: var(--ag-font-size-lg);
    }

    :host([size="lg"]) .title {
      font-size: var(--ag-font-size-2x);
    }

    /* Subtitle */
    .subtitle {
      font-size: var(--ag-font-size-base);
      color: var(--ag-text-muted);
      /* The title will provide enough gap */
      margin-block-start: 0;
      margin-block-end: var(--ag-space-4);
      line-height: var(--ag-line-height-base);
    }

    :host([size="sm"]) .subtitle {
      font-size: var(--ag-font-size-sm);
      margin-bottom: var(--ag-space-3);
    }

    :host([size="lg"]) .subtitle {
      font-size: var(--ag-font-size-md);
      margin-bottom: var(--ag-space-6);
    }

    /* Actions */
    .actions {
      display: flex;
      flex-wrap: wrap;
      gap: var(--ag-space-2);
      justify-content: center;
    }
  `;

  render() {
    // Check for slotted content directly in render
    const hasIconSlot = this.querySelector('[slot="icon"]') !== null;
    const hasActionsSlot = this.querySelector('[slot="actions"]') !== null;
    
    const classes = [
      'empty',
      this.bordered ? 'empty-bordered' : '',
      this.rounded ? 'empty-rounded' : ''
    ].filter(Boolean).join(' ');

return html`
      <!-- Main container with a part for the whole component -->
      <div class="${classes}" role="region" aria-label="Empty state" part="container">
        
        <!-- Icon section part -->
        <div class="icon" part="icon">
          <div class="icon-inner" part="icon-inner">
            <slot name="icon" part="icon-slot"></slot>
            ${!hasIconSlot ? html`
              <!-- Fallback SVG part -->
              <svg 
                part="icon-svg"
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                stroke-width="2" 
                stroke-linecap="round" 
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
            ` : ''}
          </div>
        </div>

        <!-- Title part -->
        ${this.title ? html`<h3 class="title" part="title">${this.title}</h3>` : ''}
        
        <!-- Subtitle part -->
        ${this.subtitle ? html`<p class="subtitle" part="subtitle">${this.subtitle}</p>` : ''}

        <!-- Actions container part -->
        <div class="actions" part="actions">
          <slot name="actions" part="actions-slot">
            ${this.buttonText && !hasActionsSlot
              ? html`
                <!-- Fallback button part -->
                <button type="button" part="actions-button">${this.buttonText}</button>
              `
              : ''}
          </slot>
        </div>
      </div>
    `;
  }
}
