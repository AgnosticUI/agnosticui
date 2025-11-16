import { hasSlotContent } from '../../../utils/slot';
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
  @property({ type: String })
  declare title: string;

  @property({ type: String })
  declare subtitle: string;

  @property({ type: String, attribute: 'button-text' })
  declare buttonText: string;

  @property({ type: String, reflect: true })
  declare size: 'sm' | 'md' | 'lg';

  @property({ type: Boolean })
  declare bordered: boolean;

  @property({ type: Boolean })
  declare rounded: boolean;

  @property({ type: Boolean, state: true })
  private _hasIconSlot = false;

  @property({ type: Boolean, state: true })
  private _hasActionsSlot = false;

  constructor() {
    super();
    this.title = '';
    this.subtitle = '';
    this.buttonText = '';
    this.size = 'md';
    this.bordered = false;
    this.rounded = false;
  }

  private _handleSlotChange(e: Event) {
    const slot = e.target as HTMLSlotElement;
    const slotName = slot.name;

    if (slotName === 'icon') {
      this._hasIconSlot = hasSlotContent(slot);
    } else if (slotName === 'actions') {
      this._hasActionsSlot = hasSlotContent(slot);
    }

    this.requestUpdate();
  }

  override firstUpdated() {
    // Initial check for slot content
    // We need to defer this check to avoid "change in update" warning
    setTimeout(() => {
      const iconSlot = this.shadowRoot?.querySelector('slot[name="icon"]') as HTMLSlotElement;
      const actionsSlot = this.shadowRoot?.querySelector('slot[name="actions"]') as HTMLSlotElement;

      const hadIconSlot = this._hasIconSlot;
      const hadActionsSlot = this._hasActionsSlot;

      this._hasIconSlot = hasSlotContent(iconSlot);
      this._hasActionsSlot = hasSlotContent(actionsSlot);

      // Only request update if something changed
      if (hadIconSlot !== this._hasIconSlot || hadActionsSlot !== this._hasActionsSlot) {
        this.requestUpdate();
      }
    }, 0);
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
    const classes = [
      'empty',
      this.bordered ? 'empty-bordered' : '',
      this.rounded ? 'empty-rounded' : ''
    ].filter(Boolean).join(' ');

return html`
      <!-- Main container with a part for the whole component -->
      <div class="${classes}" role="region" aria-label="Empty state" part="ag-empty-state">

        <!-- Icon section part -->
        <div class="icon" part="ag-icon">
          <div class="icon-inner" part="ag-icon-inner">
            <slot name="icon" part="ag-icon-slot" @slotchange=${this._handleSlotChange}></slot>
            ${!this._hasIconSlot ? html`
              <!-- Fallback SVG part -->
              <svg
                part="ag-icon-svg"
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
        ${this.title ? html`<h3 class="title" part="ag-title">${this.title}</h3>` : ''}

        <!-- Subtitle part -->
        ${this.subtitle ? html`<p class="subtitle" part="ag-subtitle">${this.subtitle}</p>` : ''}

        <!-- Actions container part -->
        <div class="actions" part="ag-actions">
          <slot name="actions" part="ag-actions-slot" @slotchange=${this._handleSlotChange}>
            ${this.buttonText && !this._hasActionsSlot
              ? html`
                <!-- Fallback button part -->
                <button type="button" part="ag-actions-button">${this.buttonText}</button>
              `
              : ''}
          </slot>
        </div>
      </div>
    `;
  }
}
