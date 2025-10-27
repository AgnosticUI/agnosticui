import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

export type KbdVariant = 'default' | 'primary' | 'secondary' | 'info' | 'warning' | 'success' | 'danger' | 'error';
export type KbdSize = 'sm' | 'md' | 'lg';

export interface KbdProps {
  variant?: KbdVariant;
  bordered?: boolean;
  background?: boolean;
  size?: KbdSize;
}

export class Kbd extends LitElement implements KbdProps {
  @property({ type: String, reflect: true }) variant: KbdVariant = 'default';
  @property({ type: Boolean, reflect: true }) bordered = true;
  @property({ type: Boolean, reflect: true }) background = false;
  @property({ type: String, reflect: true }) size: KbdSize = 'md';

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
      padding: 1px var(--ag-space-1);
      font-size: var(--ag-font-size-sm);
    }
    :host([size='md']) .kbd-wrapper {
      padding: var(--ag-space-1) var(--ag-space-2);
      font-size: var(--ag-font-size-base);
    }
    :host([size='lg']) .kbd-wrapper {
      padding: var(--ag-space-1) 0.625rem;
      font-size: var(--ag-font-size-lg);
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
  `;

  render() {
    return html`
      <kbd class="kbd-wrapper" part="ag-kbd-wrapper">
        <slot></slot>
      </kbd>
    `;
  }
}
