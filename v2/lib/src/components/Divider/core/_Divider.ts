import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

export type DividerJustify = 'center' | 'start' | 'end';
export type DividerSize = 'default' | 'small' | 'large' | 'xlarge';
export type DividerVariant = 'default' | 'success' | 'info' | 'warning' | 'error';

/**
 * @csspart ag-divider - The main divider container element
 * @csspart ag-divider-content - The content container (when slotted content is provided)
 */
export interface DividerProps {
  isVertical?: boolean;
  justify?: DividerJustify;
  size?: DividerSize;
  variant?: DividerVariant;
}

/**
 * Divider component for visually separating content
 *
 * @element ag-divider
 * @slot default - Optional content to display within the divider (text, icons, etc.)
 */
@customElement('ag-divider')
export class Divider extends LitElement implements DividerProps {
  static styles = css`
    :host {
      display: block;
    }

    :host([is-vertical]) {
      align-self: stretch;
    }

    .divider {
      display: flex;
      justify-content: center;
      align-items: center;
      white-space: nowrap;
      width: 100%;
    }

    .divider::before,
    .divider::after {
      content: '';
      background-color: var(--ag-border);
      height: var(--ag-border-width-2);
      flex-grow: 1;
    }

    /* Sizes - Horizontal */
    .divider-small::before,
    .divider-small::after {
      height: var(--ag-border-width-1);
    }

    .divider-large::before,
    .divider-large::after {
      height: var(--ag-border-width-3);
    }

    .divider-xlarge::before,
    .divider-xlarge::after {
      height: 4px;
    }

    /* Justify */
    .divider-justify-end::after,
    .divider-justify-start::before {
      flex-grow: 0;
      flex-basis: 3%;
    }

    /* Content */
    .divider-has-content {
      padding-inline-start: var(--ag-space-4);
      padding-inline-end: var(--ag-space-4);
    }

    /* Vertical */
    .divider-vertical {
      height: 100%;
      margin: 0 var(--ag-space-4);
      width: var(--ag-space-4);
      flex-direction: column;
    }

    .divider-vertical::before,
    .divider-vertical::after {
      width: var(--ag-border-width-2);
      height: auto;  /* Override the fixed height for vertical growth */
    }

    /* Sizes - Vertical */
    .divider-vertical.divider-small::before,
    .divider-vertical.divider-small::after {
      width: var(--ag-border-width-1);
    }

    .divider-vertical.divider-large::before,
    .divider-vertical.divider-large::after {
      width: var(--ag-border-width-3);
    }

    .divider-vertical.divider-xlarge::before,
    .divider-vertical.divider-xlarge::after {
      width: 4px;
    }

    .divider-vertical .divider-has-content {
      padding-inline-start: var(--ag-space-6);
      padding-inline-end: var(--ag-space-6);
      padding-block-start: var(--ag-space-3);
      padding-block-end: var(--ag-space-3);
    }

    /* Variants */
    .divider-warning::before,
    .divider-warning::after {
      background-color: var(--ag-warning);
    }

    .divider-warning .divider-content {
      color: var(--ag-warning);
    }

    .divider-error::before,
    .divider-error::after {
      background-color: var(--ag-danger);
    }

    .divider-error .divider-content {
      color: var(--ag-danger);
    }

    .divider-success::before,
    .divider-success::after {
      background-color: var(--ag-success);
    }

    .divider-success .divider-content {
      color: var(--ag-success);
    }

    .divider-info::before,
    .divider-info::after {
      background-color: var(--ag-info);
    }

    .divider-info .divider-content {
      color: var(--ag-info);
    }
  `;

  @property({ type: Boolean, attribute: 'is-vertical', reflect: true })
  isVertical = false;

  @property({ type: String, reflect: true })
  justify: DividerJustify = 'center';

  @property({ type: String, reflect: true })
  size: DividerSize = 'default';

  @property({ type: String, reflect: true })
  variant: DividerVariant = 'default';

  @property({ type: Boolean, state: true })
  private hasContent = false;

  private handleSlotChange(e: Event) {
    const slot = e.target as HTMLSlotElement;
    const nodes = slot.assignedNodes();
    // Check if there's any meaningful content (not just whitespace text nodes)
    this.hasContent = nodes.some(node => {
      if (node.nodeType === Node.ELEMENT_NODE) return true;
      if (node.nodeType === Node.TEXT_NODE) {
        return (node.textContent?.trim().length ?? 0) > 0;
      }
      return false;
    });
  }

  private getClasses() {
    const classes = ['divider'];

    if (this.isVertical) {
      classes.push('divider-vertical');
    }

    if (this.justify !== 'center' && !this.isVertical) {
      classes.push(`divider-justify-${this.justify}`);
    }

    if (this.size !== 'default') {
      classes.push(`divider-${this.size}`);
    }

    if (this.variant !== 'default') {
      classes.push(`divider-${this.variant}`);
    }

    return classes.join(' ');
  }

  render() {
    const orientation = this.isVertical ? 'vertical' : 'horizontal';
    const contentClasses = this.hasContent ? 'divider-content divider-has-content' : 'divider-content';

    return html`
      <div
        class="${this.getClasses()}"
        part="ag-divider"
        role="separator"
        aria-orientation="${orientation}"
      >
        <span class="${contentClasses}" part="ag-divider-content">
          <slot @slotchange=${this.handleSlotChange}></slot>
        </span>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-divider': Divider;
  }
}
