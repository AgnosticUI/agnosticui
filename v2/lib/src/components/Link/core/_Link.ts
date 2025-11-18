/**
 * AgnosticUI v2 Link - Canonical Implementation
 *
 * A semantic, accessible wrapper around the native HTML <a> element that provides
 * consistent styling, variants, and states while preserving native browser accessibility.
 *
 * Version: 2.0.0-dev
 * Last Updated: 2025-11-18
 * API Compatibility: 2.x
 */

import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

// Props interface
export interface LinkProps {
  href?: string;
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'monochrome' | '';
  isButton?: boolean;
  buttonSize?: 'x-sm' | 'sm' | 'md' | 'lg' | 'xl';
  buttonShape?: 'capsule' | 'rounded' | 'circle' | 'square' | 'rounded-square' | '';
  buttonBordered?: boolean;
  external?: boolean;
  disabled?: boolean;
  ariaLabel?: string;
  onClick?: (event: MouseEvent) => void;
  onFocus?: (event: FocusEvent) => void;
  onBlur?: (event: FocusEvent) => void;
}

/**
 * AgLink - Foundation link component with full accessibility
 *
 * A semantic anchor element that supports multiple variants and states
 * while maintaining native browser accessibility features.
 *
 * Features:
 * - Semantic <a> element foundation
 * - Keyboard navigation (browser default)
 * - Visual variants (primary, success, warning, danger, monochrome)
 * - Button-style links with size, shape, and bordered options
 * - External link support
 * - Disabled state handling
 */
export class AgLink extends LitElement implements LinkProps {
  static styles = css`
    /* MINIMALIST & THEMEABLE - Styling via --ag-* design tokens */
    :host {
      display: inline;
    }

    a {
      /* Base link styles */
      color: var(--ag-primary);
      text-decoration: underline;
      cursor: pointer;
      transition-property: color, background-color, border-color, text-decoration-color;
      transition-duration: var(--ag-motion-medium);
    }

    a:hover {
      color: var(--ag-primary-dark);
    }

    a:focus-visible {
      outline: var(--ag-focus-width) solid rgba(var(--ag-focus), 0.5);
      outline-offset: var(--ag-focus-offset);
      transition: outline var(--ag-motion-medium) ease;
    }

    /* Variant styles for standard links */
    :host([variant="primary"]) a {
      color: var(--ag-primary);
    }

    :host([variant="primary"]) a:hover {
      color: var(--ag-primary-dark);
    }

    :host([variant="success"]) a {
      color: var(--ag-success);
    }

    :host([variant="success"]) a:hover {
      color: var(--ag-success-dark);
    }

    :host([variant="warning"]) a {
      color: var(--ag-warning);
    }

    :host([variant="warning"]) a:hover {
      color: var(--ag-warning-dark);
    }

    :host([variant="danger"]) a {
      color: var(--ag-danger);
    }

    :host([variant="danger"]) a:hover {
      color: var(--ag-danger-dark);
    }

    :host([variant="monochrome"]) a {
      color: var(--ag-text-primary);
      font-weight: 600;
    }

    :host([variant="monochrome"]) a:hover {
      color: var(--ag-text-primary);
      opacity: 0.8;
    }

    /* Button-style link base */
    :host([isButton]) a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: calc(2px + var(--ag-space-2)) var(--ag-space-4);
      background: var(--ag-primary);
      color: var(--ag-white);
      text-decoration: none;
      border: var(--ag-border-width-1) solid transparent;
      font-size: var(--ag-font-size-sm);
      line-height: 1;
      gap: var(--ag-space-1);
    }

    :host([isButton]) a:hover {
      background: var(--ag-primary-dark);
      color: var(--ag-white);
    }

    /* Button variant styles */
    :host([isButton][variant="primary"]) a {
      background: var(--ag-primary);
      color: var(--ag-white);
    }

    :host([isButton][variant="primary"]) a:hover {
      background: var(--ag-primary-dark);
    }

    :host([isButton][variant="success"]) a {
      background: var(--ag-success);
      color: var(--ag-white);
    }

    :host([isButton][variant="success"]) a:hover {
      background: var(--ag-success-dark);
    }

    :host([isButton][variant="warning"]) a {
      background: var(--ag-warning);
      color: var(--ag-white);
    }

    :host([isButton][variant="warning"]) a:hover {
      background: var(--ag-warning-dark);
    }

    :host([isButton][variant="danger"]) a {
      background: var(--ag-danger);
      color: var(--ag-white);
    }

    :host([isButton][variant="danger"]) a:hover {
      background: var(--ag-danger-dark);
    }

    :host([isButton][variant="monochrome"]) a {
      background: var(--ag-background-primary-inverted);
      color: var(--ag-text-primary-inverted);
      font-weight: 400;
    }

    :host([isButton][variant="monochrome"]) a:hover {
      background: var(--ag-background-secondary-inverted);
    }

    /* Button size variants */
    :host([isButton][buttonSize="x-sm"]) a {
      font-size: calc(var(--ag-font-size-base) - 0.375rem);
      padding: var(--ag-space-1) var(--ag-space-2);
    }

    :host([isButton][buttonSize="sm"]) a {
      font-size: var(--ag-font-size-xs);
      padding: var(--ag-space-2) var(--ag-space-3);
    }

    :host([isButton][buttonSize="md"]) a {
      font-size: var(--ag-font-size-sm);
      padding: calc(2px + var(--ag-space-2)) var(--ag-space-4);
    }

    :host([isButton][buttonSize="lg"]) a {
      font-size: var(--ag-font-size-base);
      padding: var(--ag-space-3) var(--ag-space-5);
    }

    :host([isButton][buttonSize="xl"]) a {
      font-size: var(--ag-font-size-md);
      padding: var(--ag-space-3) var(--ag-space-6);
    }

    /* Button shape variants */
    :host([isButton][buttonShape="capsule"]) a {
      border-radius: var(--ag-radius-full);
      padding-inline-start: var(--ag-space-5);
      padding-inline-end: var(--ag-space-5);
    }

    :host([isButton][buttonShape="rounded"]) a {
      border-radius: var(--ag-radius-md);
    }

    :host([isButton][buttonShape="circle"]) a {
      border-radius: 50%;
      width: var(--ag-space-10);
      height: var(--ag-space-10);
      padding: 0;
    }

    :host([isButton][buttonShape="square"]) a {
      border-radius: 0;
      width: var(--ag-space-10);
      height: var(--ag-space-10);
      padding: 0;
    }

    :host([isButton][buttonShape="rounded-square"]) a {
      border-radius: var(--ag-radius-md);
      width: var(--ag-space-10);
      height: var(--ag-space-10);
      padding: 0;
    }

    /* Button bordered variant */
    :host([isButton][buttonBordered]) a {
      background: transparent;
      border: 1px solid var(--ag-neutral-400);
      color: inherit;
    }

    :host([isButton][buttonBordered][variant="primary"]) a {
      color: var(--ag-primary);
      border-color: var(--ag-primary);
      background: transparent;
    }

    :host([isButton][buttonBordered][variant="primary"]) a:hover {
      background: var(--ag-primary);
      color: var(--ag-white);
    }

    :host([isButton][buttonBordered][variant="success"]) a {
      color: var(--ag-success);
      border-color: var(--ag-success);
      background: transparent;
    }

    :host([isButton][buttonBordered][variant="success"]) a:hover {
      background: var(--ag-success);
      color: var(--ag-white);
    }

    :host([isButton][buttonBordered][variant="warning"]) a {
      color: var(--ag-warning);
      border-color: var(--ag-warning);
      background: transparent;
    }

    :host([isButton][buttonBordered][variant="warning"]) a:hover {
      background: var(--ag-warning);
      color: var(--ag-white);
    }

    :host([isButton][buttonBordered][variant="danger"]) a {
      color: var(--ag-danger);
      border-color: var(--ag-danger);
      background: transparent;
    }

    :host([isButton][buttonBordered][variant="danger"]) a:hover {
      background: var(--ag-danger);
      color: var(--ag-white);
    }

    :host([isButton][buttonBordered][variant="monochrome"]) a {
      color: var(--ag-text-primary);
      border-color: var(--ag-text-primary);
      background: transparent;
    }

    :host([isButton][buttonBordered][variant="monochrome"]) a:hover {
      background: var(--ag-background-primary-inverted);
      color: var(--ag-text-primary-inverted);
    }

    /* Disabled state */
    :host([disabled]) {
      cursor: not-allowed;
    }

    :host([disabled]) a,
    :host([disabled]) span {
      color: var(--ag-text-muted);
      cursor: not-allowed;
      opacity: 0.6;
      text-decoration: none;
      pointer-events: none;
    }

    :host([disabled][isButton]) a,
    :host([disabled][isButton]) span {
      background: var(--ag-background-disabled);
      color: var(--ag-text-muted);
    }
  `;

  /**
   * URL the link points to
   */
  @property({ type: String })
  declare href: string;

  /**
   * Visual variant for styling hooks
   */
  @property({ type: String, reflect: true })
  declare variant: 'primary' | 'success' | 'warning' | 'danger' | 'monochrome' | '';

  /**
   * Styles the link to look like a button
   */
  @property({ type: Boolean, reflect: true })
  declare isButton: boolean;

  /**
   * Size variant for button-style links (only applies when isButton is true)
   */
  @property({ type: String, reflect: true })
  declare buttonSize: 'x-sm' | 'sm' | 'md' | 'lg' | 'xl';

  /**
   * Shape variant for button-style links (only applies when isButton is true)
   */
  @property({ type: String, reflect: true })
  declare buttonShape: 'capsule' | 'rounded' | 'circle' | 'square' | 'rounded-square' | '';

  /**
   * Bordered style for button-style links (only applies when isButton is true)
   */
  @property({ type: Boolean, reflect: true })
  declare buttonBordered: boolean;

  /**
   * Indicates external link (adds rel and target attributes)
   */
  @property({ type: Boolean, reflect: true })
  declare external: boolean;

  /**
   * Disabled state - visually and functionally disables the link
   */
  @property({ type: Boolean, reflect: true })
  declare disabled: boolean;

  /**
   * ARIA label for accessibility
   */
  @property({ type: String, reflect: true, attribute: 'aria-label' })
  declare ariaLabel: string;

  @property({ attribute: false })
  declare onClick?: (event: MouseEvent) => void;

  @property({ attribute: false })
  declare onFocus?: (event: FocusEvent) => void;

  @property({ attribute: false })
  declare onBlur?: (event: FocusEvent) => void;

  constructor() {
    super();
    this.href = '';
    this.variant = '';
    this.isButton = false;
    this.buttonSize = 'md';
    this.buttonShape = '';
    this.buttonBordered = false;
    this.external = false;
    this.disabled = false;
    this.ariaLabel = '';
  }

  /**
   * Lit lifecycle: called when properties change
   * Used to validate that button-specific props are only used with isButton
   */
  protected willUpdate(changedProperties: Map<PropertyKey, unknown>) {
    super.willUpdate(changedProperties);

    // Validation: button props should only be used with isButton
    // In development, the CSS will still work but props won't have visual effect
    if (!this.isButton) {
      if (changedProperties.has('buttonSize') && this.buttonSize !== 'md') {
        // buttonSize ignored when isButton is false
      }
      if (changedProperties.has('buttonShape') && this.buttonShape !== '') {
        // buttonShape ignored when isButton is false
      }
      if (changedProperties.has('buttonBordered') && this.buttonBordered) {
        // buttonBordered ignored when isButton is false
      }
    }
  }

  private _handleClick(event: MouseEvent) {
    if (this.disabled) {
      event.preventDefault();
      return;
    }

    // Invoke user-defined onClick handler if provided
    if (this.onClick) {
      this.onClick(event);
    }
  }

  private _handleFocus(event: FocusEvent) {
    // Call user-defined onFocus handler if provided
    if (this.onFocus) {
      this.onFocus(event);
    }

    // Re-dispatch native platform events for consumers
    const focusEvent = new FocusEvent('focus', {
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(focusEvent);
  }

  private _handleBlur(event: FocusEvent) {
    // Call prop handler for consumer if it's listening
    if (this.onBlur) {
      this.onBlur(event);
    }

    // Forward blur event from internal anchor to custom element
    const blurEvent = new FocusEvent('blur', {
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(blurEvent);
  }

  /**
   * Focus the internal anchor element
   */
  focus() {
    const anchor = this.shadowRoot?.querySelector('a');
    if (anchor) {
      anchor.focus();
    }
  }

  /**
   * Blur the internal anchor element
   */
  blur() {
    const anchor = this.shadowRoot?.querySelector('a');
    if (anchor) {
      anchor.blur();
    }
  }

  render() {
    // When disabled, render a span instead of anchor to remove interactivity
    if (this.disabled) {
      return html`
        <span
          part="ag-link"
          role="link"
          aria-disabled="true"
          aria-label=${ifDefined(this.ariaLabel || undefined)}
        >
          <slot></slot>
        </span>
      `;
    }

    return html`
      <a
        href=${this.href}
        part="ag-link"
        rel=${ifDefined(this.external ? 'noopener noreferrer' : undefined)}
        target=${ifDefined(this.external ? '_blank' : undefined)}
        aria-label=${ifDefined(this.ariaLabel || undefined)}
        @click=${this._handleClick}
        @focus=${this._handleFocus}
        @blur=${this._handleBlur}
      >
        <slot></slot>
      </a>
    `;
  }
}
