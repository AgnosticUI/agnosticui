/**
 * AgnosticUI v2 Button - Canonical Implementation
 *
 * �  IMMUTABLE CANONICAL VERSION �
 *
 * This file contains the canonical, upgrade-safe implementation of the Button component.
 * It should NEVER be modified directly by users or AI assistants.
 *
 * Version: 2.0.0-dev
 * Last Updated: 2025-09-16
 * API Compatibility: 2.x
 *
 * Stability Guarantees:
 * - All public APIs remain backward compatible within major versions
 * - All ARIA attributes and accessibility features are preserved
 * - All CSS functional styling remains consistent
 * - Component behavior is identical across patch and minor updates
 *
 * For customization, use:
 * - Button.ts: Experimental/AI-modifiable version
 * - styled/: Production styling tiers
 * - experiments/: Experimental styling variations
 * - extensions/: AI-safe behavioral extensions
 */

import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styles } from './styles.js';

// Event types
export interface ButtonToggleEventDetail {
  pressed: boolean;
}
export type ButtonToggleEvent = CustomEvent<ButtonToggleEventDetail>;

// Props interface following INTERFACE_STANDARDS.md
export interface ButtonProps {
  variant?: 'success' | 'primary' | 'secondary' | 'warning' | 'danger' | '';
  size?: 'x-sm' | 'sm' | 'md' | 'lg' | 'xl';
  shape?: 'capsule' | 'rounded' | 'circle' | 'square' | 'rounded-square' | '';
  bordered?: boolean;
  ghost?: boolean;
  link?: boolean;
  grouped?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
  toggle?: boolean;
  pressed?: boolean;
  ariaLabel?: string;
  ariaDescribedby?: string;
  onClick?: (event: MouseEvent) => void;
  onFocus?: (event: FocusEvent) => void;
  onBlur?: (event: FocusEvent) => void;
  onToggle?: (event: ButtonToggleEvent) => void;
}

/**
 * AgButton - Foundation button component with APG compliance
 *
 * A semantic button element that supports multiple types and follows
 * WAI-ARIA APG button patterns for full accessibility compliance.
 *
 * Features:
 * - Semantic <button> element foundation
 * - Space/Enter keyboard activation (browser default)
 * - Multiple button types (button, submit, reset)
 * - Minimalist styling via design tokens
 * - APG-compliant accessibility
 */
export class AgButton extends LitElement implements ButtonProps {
  static styles = [styles, css`
    /* MINIMALIST & THEMEABLE - Styling via --ag-* design tokens */
    :host {
      /* Inline-flex for perfect centering while maintaining inline behavior */
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    button {
      /* Reset browser defaults */
      margin: 0;
      border: none;
      background: var(--ag-background-tertiary);

      /* Inherit font styling from parent */
      font: inherit;
      color: inherit;

      /* Basic interaction styling */
      cursor: pointer;

      /* Flex layout for perfect content alignment */
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--ag-space-1); /* Small gap for icon + text scenarios */

      /* Smooth transitions */
      transition-property: all;
      transition-duration: var(--ag-motion-medium);
    }
    
    /* Secondary inherits font color */
    :host([variant="secondary"]) button {
      background: var(--ag-neutral-400);
    }
    :host([variant="secondary"]) button:hover {
      background: var(--ag-neutral-500);
    }

    /* Primary, success, warning, and danger all have white text and get
      darker on hover */
    :host([variant="primary"]) button {
      background: var(--ag-primary);
      color: var(--ag-white);
    }
    :host([variant="primary"]) button:hover {
      background: var(--ag-primary-dark);
    }
    :host([variant="success"]) button {
      background: var(--ag-success);
      color: var(--ag-white);
    }
    :host([variant="success"]) button:hover {
      background: var(--ag-success-dark);
    }
    :host([variant="warning"]) button {
      background: var(--ag-warning);
      color: var(--ag-white);
    }
    :host([variant="warning"]) button:hover {
      background: var(--ag-warning-dark);
    }
    :host([variant="danger"]) button {
      background: var(--ag-danger);
      color: var(--ag-white);
    }
    :host([variant="danger"]) button:hover {
      background: var(--ag-danger-dark);
    }

    /* Size variants */
    :host([size="x-sm"]) button {
      font-size: calc(var(--ag-font-size-base) - 0.375rem);
      padding: var(--ag-space-1) var(--ag-space-2);
      min-height: var(--ag-space-7);
    }

    :host([size="sm"]) button {
      font-size: var(--ag-font-size-xs);
      padding: var(--ag-space-1) var(--ag-space-3);
      min-height: var(--ag-space-8);
    }

    :host([size="md"]) button {
      font-size: var(--ag-font-size-base);
      padding: var(--ag-space-2) var(--ag-space-4);
      min-height: var(--ag-space-10);
    }

    :host([size="lg"]) button {
      font-size: var(--ag-font-size-lg);
      padding: var(--ag-space-3) var(--ag-space-6);
      min-height: var(--ag-space-12);
    }

    :host([size="xl"]) button {
      font-size: var(--ag-font-size-xl);
      padding: var(--ag-space-4) var(--ag-space-8);
      min-height: var(--ag-space-14);
    }

    /* Shape variants */
    :host([shape="capsule"]) button {
      border-radius: var(--ag-radius-full);
      padding-inline-start: var(--ag-space-5);
      padding-inline-end: var(--ag-space-5);
    }

    :host([shape="rounded"]) button {
      border-radius: var(--ag-radius-md);
    }

    /* Circle and Square shapes are only intended for single character or icon */
    :host([shape="circle"]) button {
      border-radius: 50%;
      width: var(--ag-space-10);
      height: var(--ag-space-10);
      padding: 0;
      min-height: unset;
    }

    :host([shape="square"]) button {
      border-radius: 0;
      width: var(--ag-space-10);
      height: var(--ag-space-10);
      padding: 0;
      min-height: unset;
    }

    :host([shape="rounded-square"]) button {
      border-radius: var(--ag-radius-md);
      width: var(--ag-space-10);
      height: var(--ag-space-10);
      padding: 0;
      min-height: unset;
    }

    /* Ghost and Link - minimal/invisible button styles */
    :host([ghost]) button,
    :host([link]) button {
      background: transparent;
      border: none;
      box-shadow: none;
    }

    /* Ghost-specific - minimal padding, respects variant colors */
    :host([ghost]) button {
      padding-inline-start: var(--ag-space-2);
      padding-inline-end: var(--ag-space-2);
    }

    :host([ghost][variant="primary"]) button {
      color: var(--ag-primary);
    }

    :host([ghost][variant="success"]) button {
      color: var(--ag-success);
    }

    :host([ghost][variant="warning"]) button {
      color: var(--ag-warning);
    }

    :host([ghost][variant="danger"]) button {
      color: var(--ag-danger);
    }


    :host([link][variant="danger"]) button:hover,
    :host([link][variant="warning"]) button:hover,
    :host([link][variant="success"]) button:hover,
    :host([link][variant="primary"]) button:hover {
      background: transparent;
    }

    /* Only for ghosted buttons with text that of:
          - "red" danger
          - "yellow" warning
          - "green" success
          - "blue" primary
      do we use an almost white nuetral 100 on hover.
      The default and secondary are not changed here!
    */
    :host([ghost][variant="danger"]) button:hover,
    :host([ghost][variant="warning"]) button:hover,
    :host([ghost][variant="success"]) button:hover,
    :host([ghost][variant="primary"]) button:hover {
      background: var(--ag-neutral-100);
    }

    /* Link-specific - inline style with smooth underline transition */
    :host([link]) button {
      color: var(--ag-primary);
      text-decoration: none;
      border-bottom: 1px solid transparent;
      padding: 0;
      min-height: unset;
    }

    :host([link]) button:hover {
      border-bottom-color: var(--ag-primary);
    }

    /* Grouped buttons - for use in button groups */
    :host([grouped]) button {
      border-radius: var(--ag-radius-md);
    }

    :host([grouped]:not(:last-child)) button {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      margin-inline-end: -1px;
    }

    :host([grouped]:not(:first-child)) button {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    /* Bordered variant - outline style */
    :host([bordered]) button {
      background: transparent;
      border: 1px solid var(--ag-neutral-400);
    }

    :host([bordered][variant="primary"]) button {
      color: var(--ag-primary);
      border-color: var(--ag-primary);
    }

    /* Bordered Buttons on Hover have a filled background with white text.  The
      Default Bordered is an exception to this rule. */
    :host([bordered][variant="primary"]) button:hover {
      background: var(--ag-primary);
      color: var(--ag-white);
    }

    :host([bordered][variant="secondary"]) button {
      color: var(--ag-neutral-500);
      border-color: var(--ag-neutral-500);
    }

    :host([bordered][variant="secondary"]) button:hover {
      background: var(--ag-neutral-500);
      color: var(--ag-white);
    }

    :host([bordered][variant="success"]) button {
      color: var(--ag-success);
      border-color: var(--ag-success);
    }

    :host([bordered][variant="success"]) button:hover {
      background: var(--ag-success);
      color: var(--ag-white);
    }

    :host([bordered][variant="warning"]) button {
      color: var(--ag-warning);
      border-color: var(--ag-warning);
    }

    :host([bordered][variant="warning"]) button:hover {
      background: var(--ag-warning);
      color: var(--ag-white);
    }

    :host([bordered][variant="danger"]) button {
      color: var(--ag-danger);
      border-color: var(--ag-danger);
    }

    :host([bordered][variant="danger"]) button:hover {
      background: var(--ag-danger);
      color: var(--ag-white);
    }

    button:disabled {
      cursor: not-allowed;
      background: var(--ag-background-disabled);
    }

    button:focus-visible,
    button:focus:not(:hover) {
      /* High-contrast focus ring using semantic tokens */
      outline: var(--ag-focus-width) solid var(--ag-focus);
      outline-offset: var(--ag-focus-offset);
      transition: outline var(--ag-motion-medium) ease;
    }
  `];

  /**
   * Visual variant for styling hooks
   */
  @property({ type: String, reflect: true })
  declare variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | '';

  /**
   * Size variant for styling hooks
   */
  @property({ type: String, reflect: true })
  declare size: 'x-sm' | 'sm' | 'md' | 'lg' | 'xl';

  /**
   * Shape variant for styling hooks
   */
  @property({ type: String, reflect: true })
  declare shape: 'capsule' | 'rounded' | 'circle' | 'square' | 'rounded-square' | '';

  /**
   * Bordered style - transparent background with colored border
   */
  @property({ type: Boolean, reflect: true })
  declare bordered: boolean;

  /**
   * Ghost style - minimal button with transparent background and minimal padding
   */
  @property({ type: Boolean, reflect: true })
  declare ghost: boolean;

  /**
   * Link style - looks like a text link with underline
   */
  @property({ type: Boolean, reflect: true })
  declare link: boolean;

  /**
   * Grouped style - for buttons in a group, removes inner radius
   */
  @property({ type: Boolean, reflect: true })
  declare grouped: boolean;

  /**
   * Button type - determines behavior in forms
   */
  @property({ type: String })
  declare type: 'button' | 'submit' | 'reset';

  /**
   * Disabled state - button cannot be interacted with
   */
  @property({ type: Boolean })
  declare disabled: boolean;

  /**
   * Loading state - button is disabled and shows busy indicator
   */
  @property({ type: Boolean })
  declare loading: boolean;

  /**
   * Toggle mode - button acts as a toggle button with pressed state
   */
  @property({ type: Boolean })
  declare toggle: boolean;

  /**
   * Pressed state - for toggle buttons
   */
  @property({ type: Boolean })
  declare pressed: boolean;

  /**
   * ARIA label for accessibility
   */
  @property({ type: String, reflect: true, attribute: 'aria-label' })
  declare ariaLabel: string;

  /**
   * ARIA described-by for accessibility
   */
  @property({ type: String, reflect: true, attribute: 'aria-describedby' })
  declare ariaDescribedby: string;

  @property({ attribute: false })
  declare onClick?: (event: MouseEvent) => void;

  @property({ attribute: false })
  declare onFocus?: (event: FocusEvent) => void;

  @property({ attribute: false })
  declare onBlur?: (event: FocusEvent) => void;

  @property({ attribute: false })
  declare onToggle?: (event: ButtonToggleEvent) => void;

  constructor() {
    super();
    this.type = 'button';
    this.disabled = false;
    this.loading = false;
    this.toggle = false;
    this.pressed = false;
    this.ariaLabel = '';
    this.ariaDescribedby = '';
    this.variant = '';
    this.size = 'md';
    this.shape = '';
    this.bordered = false;
    this.ghost = false;
    this.link = false;
    this.grouped = false;
  }

  private _handleClick(event: MouseEvent) {
    // Invoke user-defined onClick handler if provided
    if (this.onClick) {
      this.onClick(event);
    }

    if (this.toggle && !this.disabled && !this.loading && !event.defaultPrevented) {
      this.pressed = !this.pressed;

      // Dispatch custom toggle event
      const toggleEvent = new CustomEvent<ButtonToggleEventDetail>('toggle', {
        detail: { pressed: this.pressed },
        bubbles: true,
        composed: true
      });
      this.dispatchEvent(toggleEvent);

      // Call onToggle if provided
      if (this.onToggle) {
        this.onToggle(toggleEvent);
      }
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

    // Forward blur event from internal button to custom element
    const blurEvent = new FocusEvent('blur', {
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(blurEvent);
  }

  /**
   * Focus the internal button element
   */
  focus() {
    const button = this.shadowRoot?.querySelector('button');
    if (button) {
      button.focus();
    }
  }

  /**
   * Blur the internal button element
   */
  blur() {
    const button = this.shadowRoot?.querySelector('button');
    if (button) {
      button.blur();
    }
  }

  render() {
    const isDisabled = this.disabled || this.loading;

    return html`
      <button
        type=${this.type}
        part="ag-button"
        ?disabled=${isDisabled}
        aria-disabled=${isDisabled ? 'true' : 'false'}
        aria-busy=${ifDefined(this.loading ? 'true' : undefined)}
        aria-pressed=${ifDefined(this.toggle ? String(this.pressed) : undefined)}
        aria-label=${ifDefined(this.ariaLabel || undefined)}
        aria-describedby=${ifDefined(this.ariaDescribedby || undefined)}
        @click=${this._handleClick}
        @focus=${this._handleFocus}
        @blur=${this._handleBlur}
      >
        <slot></slot>
      </button>
    `;
  }
}
