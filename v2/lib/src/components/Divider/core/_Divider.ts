import { LitElement, html, css, unsafeCSS } from 'lit';
import { property, state } from 'lit/decorators.js';
import { hasSlotContent } from '../../../utils/slot';
import styles from './divider-structure.module.css';
import structuralStylesText from './divider-structure.module.css?inline';

export type DividerJustify = 'center' | 'start' | 'end';
export type DividerSize = 'default' | 'small' | 'large' | 'xlarge';
export type DividerVariant = 'default' | 'success' | 'info' | 'warning' | 'error' | 'monochrome';

/**
 * Props interface for Divider component
 * 
 * @csspart ag-divider - The main divider container element
 * @csspart ag-divider-content - The content container (when slotted content is provided)
 */
export interface DividerProps {
  vertical?: boolean;
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
export class AgDivider extends LitElement implements DividerProps {
  // Treat inline text extracted from CSS Modules as a secure, compile-time static token
  static styles = [
    css`${unsafeCSS(structuralStylesText)}`,
    css`
      :host {
        display: block;
      }

      :host([is-vertical]) {
        align-self: stretch;
      }

      /* Tonal Palette Colors Mapping directly onto primitive states inside host roots */
      :host([variant="warning"]) .divider::before,
      :host([variant="warning"]) .divider::after {
        background-color: var(--ag-warning);
      }

      :host([variant="error"]) .divider::before,
      :host([variant="error"]) .divider::after {
        background-color: var(--ag-danger);
      }

      :host([variant="success"]) .divider::before,
      :host([variant="success"]) .divider::after {
        background-color: var(--ag-success);
      }

      :host([variant="info"]) .divider::before,
      :host([variant="info"]) .divider::after {
        background-color: var(--ag-info);
      }

      :host([variant="monochrome"]) .divider::before,
      :host([variant="monochrome"]) .divider::after {
        background-color: var(--ag-text-primary);
      }

      :host([variant]) .divider-content {
        color: var(--ag-text-primary);
      }
    `
  ];

  @property({ type: Boolean, attribute: 'is-vertical', reflect: true })
  declare vertical: boolean;

  @property({ type: String, reflect: true })
  declare justify: DividerJustify;

  @property({ type: String, reflect: true })
  declare size: DividerSize;

  @property({ type: String, reflect: true })
  declare variant: DividerVariant;

  @state()
  private declare hasContent: boolean;

  constructor() {
    super();
    this.vertical = false;
    this.justify = 'center';
    this.size = 'default';
    this.variant = 'default';
    this.hasContent = false;
  }

  private handleSlotChange(e: Event) {
    this.hasContent = hasSlotContent(e.target as HTMLSlotElement);
  }

  render() {
    const orientation = this.vertical ? 'vertical' : 'horizontal';

    // Programmatically format variable casing strategies into uniform tokens
    const sizeCapitalized = this.size.charAt(0).toUpperCase() + this.size.slice(1);
    const justifyCapitalized = this.justify.charAt(0).toUpperCase() + this.justify.slice(1);

    const sizeKey = `dividerSize${sizeCapitalized}`;
    const justifyKey = `dividerJustify${justifyCapitalized}`;

    // Section 9 Dual-Class Token Lifecycle Solution: Emits both unhashed namespaced classes
    // and layout modular properties side-by-side onto elements to pass pre-hydration checks.
    const wrapperClasses = [
      'divider',
      'ag-divider',
      styles.dividerWrapper,
      this.vertical ? 'divider-vertical ag-divider--vertical' : '',
      this.vertical ? styles.dividerVertical : '',
      this.size !== 'default' ? `divider-${this.size} ag-divider--${this.size}` : '',
      this.size !== 'default' ? styles[sizeKey] : '',
      (this.justify !== 'center' && !this.vertical) ? `divider-justify-${this.justify} ag-divider--justify-${this.justify}` : '',
      (this.justify !== 'center' && !this.vertical) ? styles[justifyKey] : '',
      this.variant !== 'default' ? `divider-${this.variant} ag-divider--variant-${this.variant}` : ''
    ].filter(Boolean).join(' ');

    const contentClasses = [
      'divider-content',
      'ag-divider-content',
      styles.dividerContent,
      this.hasContent ? 'divider-has-content ag-divider--has-content' : '',
      this.hasContent ? styles.dividerHasContent : ''
    ].filter(Boolean).join(' ');

    return html`
      <div
        class="${wrapperClasses}"
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
