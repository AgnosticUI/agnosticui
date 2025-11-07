/**
 * AgnosticUI v2 Link - Canonical Implementation
 *
 * A semantic, accessible wrapper around the native HTML <a> element that provides
 * consistent styling, variants, and states while preserving native browser accessibility.
 *
 * Version: 2.0.0-dev
 * Last Updated: 2025-11-07
 * API Compatibility: 2.x
 */

import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

// Props interface
export interface LinkProps {
  href?: string;
  variant?: 'success' | 'warning' | 'danger' | '';
  isButton?: boolean;
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
 * - Visual variants (success, warning, danger)
 * - Button-style links
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

    /* Variant styles */
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

    /* Button-style link */
    :host([isButton]) a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: var(--ag-space-2) var(--ag-space-4);
      border-radius: var(--ag-radius-md);
      background: var(--ag-primary);
      color: var(--ag-white);
      text-decoration: none;
      border: var(--ag-border-width-1) solid transparent;
    }

    :host([isButton]) a:hover {
      background: var(--ag-primary-dark);
      color: var(--ag-white);
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
  declare variant: 'success' | 'warning' | 'danger' | '';

  /**
   * Styles the link to look like a button
   */
  @property({ type: Boolean, reflect: true })
  declare isButton: boolean;

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
    this.external = false;
    this.disabled = false;
    this.ariaLabel = '';
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
