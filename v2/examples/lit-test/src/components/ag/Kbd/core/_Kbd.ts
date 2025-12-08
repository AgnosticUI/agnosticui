import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

export type KbdVariant = 'default' | 'primary' | 'secondary' | 'info' | 'warning' | 'success' | 'danger' | 'error' | 'monochrome';
export type KbdSize = 'sm' | 'md' | 'lg';

export interface KbdProps {
  variant?: KbdVariant;
  bordered?: boolean;
  background?: boolean;
  size?: KbdSize;
}

export class AgKbd extends LitElement implements KbdProps {
  @property({ type: String, reflect: true }) declare variant: KbdVariant;
  @property({ type: Boolean, reflect: true }) declare bordered: boolean;
  @property({ type: Boolean, reflect: true }) declare background: boolean;
  @property({ type: String, reflect: true }) declare size: KbdSize;

  constructor() {
    super();
    this.variant = 'default';
    this.bordered = true;
    this.background = false;
    this.size = 'md';
  }

  static styles = css`
    :host {
      display: inline-flex;
      font-family: monospace;
      font-size: var(--ag-font-size-sm);
    }
    .kbd-wrapper {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--ag-radius-md);
      white-space: nowrap;
      user-select: none;
    }
    :host([bordered]) .kbd-wrapper {
      border: var(--ag-border-width-1) solid var(--ag-border-subtle);
    }
    :host([background]) .kbd-wrapper {
      background-color: var(--ag-background-secondary);
    }
    /* Sizes */
    :host([size='sm']) .kbd-wrapper {
      padding: var(--ag-space-1);
      font-size: var(--ag-font-size-sm);
    }
    :host([size='md']) .kbd-wrapper {
      padding: var(--ag-space-2);
      font-size: var(--ag-font-size-md);
    }
    :host([size='lg']) .kbd-wrapper {
      padding: var(--ag-space-3);
      font-size: var(--ag-font-size-lg);
    }
    /* Square aspect ratio for single characters - note we bump up
    the size for single character */
    :host([size='sm'][single-char]) .kbd-wrapper {
      padding: 2px;
      width: 1.25rem;
      height: 1.25rem;
      font-size: var(--ag-font-size-md);
    }
    :host([size='md'][single-char]) .kbd-wrapper {
      padding: 2px;
      width: 1.5rem;
      height: 1.5rem;
      font-size: var(--ag-font-size-lg);
    }
    :host([size='lg'][single-char]) .kbd-wrapper {
      padding: 3px;
      width: 1.875rem;
      height: 1.875rem;
      font-size: var(--ag-font-size-xl);
    }
    /* Variants */
    :host([variant='default']) .kbd-wrapper {
      color: var(--ag-text-primary);
    }
    :host([variant='primary']) .kbd-wrapper {
      color: var(--ag-primary-text);
      border-color: var(--ag-primary);
    }
    :host([variant='primary'][background]) .kbd-wrapper {
      background-color: var(--ag-primary-background);
    }
    :host([variant='secondary']) .kbd-wrapper {
      color: var(--ag-text-secondary);
      border-color: var(--ag-secondary);
    }
    :host([variant='secondary'][background]) .kbd-wrapper {
      background-color: var(--ag-secondary-background);
    }
    :host([variant='info']) .kbd-wrapper {
      color: var(--ag-info-text);
      border-color: var(--ag-info);
    }
    :host([variant='info'][background]) .kbd-wrapper {
      background-color: var(--ag-info-background);
    }
    :host([variant='warning']) .kbd-wrapper {
      color: var(--ag-warning-text);
      border-color: var(--ag-warning);
    }
    :host([variant='warning'][background]) .kbd-wrapper {
      background-color: var(--ag-warning-background);
    }
    :host([variant='success']) .kbd-wrapper {
      color: var(--ag-success-text);
      border-color: var(--ag-success);
    }
    :host([variant='success'][background]) .kbd-wrapper {
      background-color: var(--ag-success-background);
    }
    :host([variant='danger']) .kbd-wrapper {
      color: var(--ag-danger-text);
      border-color: var(--ag-danger);
    }
    :host([variant='danger'][background]) .kbd-wrapper {
      background-color: var(--ag-danger-background);
    }
    :host([variant='error']) .kbd-wrapper {
      color: var(--ag-danger-text);
      border-color: var(--ag-danger);
    }
    :host([variant='error'][background]) .kbd-wrapper {
      background-color: var(--ag-danger-background);
    }
    :host([variant='monochrome']) .kbd-wrapper {
      color: var(--ag-text-primary);
      border-color: var(--ag-text-primary);
    }
    :host([variant='monochrome'][background]) .kbd-wrapper {
      background-color: var(--ag-background-primary-inverted);
      color: var(--ag-text-primary-inverted);
    }
  `;

  updated(changedProperties: Map<string, unknown>) {
    super.updated(changedProperties);
    this._checkSingleChar();
  }

  private _checkSingleChar() {
    let text = '';
    const slot = this.shadowRoot?.querySelector('slot');
    if (slot) {
      const nodes = slot.assignedNodes({ flatten: true });
      text = nodes.map(node => node.textContent || '').join('');
    }
    text = text.trim();
    if (text.length === 1) {
      this.setAttribute('single-char', 'true');
    } else {
      this.removeAttribute('single-char');
    }
  }

  private _onSlotChange() {
    this._checkSingleChar();
  }

  render() {
    return html`
      <kbd class="kbd-wrapper" part="ag-kbd-wrapper">
        <slot @slotchange=${this._onSlotChange}></slot>
      </kbd>
    `;
  }
}
