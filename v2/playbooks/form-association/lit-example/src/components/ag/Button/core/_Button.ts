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

import { LitElement, html, css, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

// Event types
export interface ButtonToggleEventDetail {
  pressed: boolean;
}
export type ButtonToggleEvent = CustomEvent<ButtonToggleEventDetail>;

// Props interface following INTERFACE_STANDARDS.md
export interface ButtonProps {
  variant?: 'success' | 'primary' | 'secondary' | 'warning' | 'danger' | 'monochrome' | '';
  size?: 'x-sm' | 'sm' | 'md' | 'lg' | 'xl';
  shape?: 'capsule' | 'rounded' | 'circle' | 'square' | 'rounded-square' | '';
  bordered?: boolean;
  ghost?: boolean;
  link?: boolean;
  grouped?: boolean;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
  toggle?: boolean;
  pressed?: boolean;
  ariaLabel?: string;
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
  static styles = css`
    /* MINIMALIST & THEMEABLE - Styling via --ag-* design tokens */
    :host {
      /* Inline-flex for perfect centering while maintaining inline behavior */
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    /* Full-width variant */
    :host([full-width]) {
      display: block;
      width: 100%;
    }

    :host([full-width]) button {
      width: 100%;
    }

    button {
      /* Reset browser defaults */
      margin: 0;
      border: 1px solid transparent;
      background: var(--ag-background-tertiary);

      /* Inherit font styling from parent */
      font: inherit;
      color: inherit;

      /* Explicit line-height to prevent extra vertical spacing */
      line-height: 1;

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
      /* We lock the text color at neutral-900 for both light/dark modes */
      color: var(--ag-neutral-900);
    }
    :host([variant="secondary"]) button:hover {
      background: var(--ag-neutral-500);
    }

    /* Primary, success, warning, and danger use variant-specific foreground
      tokens (--ag-{variant}-fg) and get darker on hover */
    :host([variant="primary"]) button {
      background: var(--ag-primary);
      color: var(--ag-primary-fg);
    }
    :host([variant="primary"]) button:hover {
      background: var(--ag-primary-dark);
    }
    :host([variant="success"]) button {
      background: var(--ag-success);
      color: var(--ag-success-fg);
    }
    :host([variant="success"]) button:hover {
      background: var(--ag-success-dark);
    }
    :host([variant="warning"]) button {
      background: var(--ag-warning);
      color: var(--ag-warning-fg);
    }
    :host([variant="warning"]) button:hover {
      background: var(--ag-warning-dark);
    }
    :host([variant="danger"]) button {
      background: var(--ag-danger);
      color: var(--ag-danger-fg);
    }
    :host([variant="danger"]) button:hover {
      background: var(--ag-danger-dark);
    }

    /* Monochrome variant - adapts to light/dark themes */
    :host([variant="monochrome"]) button {
      background: var(--ag-background-primary-inverted);
      color: var(--ag-text-primary-inverted);
    }
    :host([variant="monochrome"]) button:hover {
      background: var(--ag-background-secondary-inverted);
    }

    /* Size variants */
    :host([size="x-sm"]) button {
      height: var(--ag-space-8);
      min-height: var(--ag-space-8);
      font-size: calc(var(--ag-font-size-base) - 0.375rem);
      padding-inline: var(--ag-space-2);
      padding-block: 0;
    }

    :host([size="sm"]) button {
      height: var(--ag-space-9);
      min-height: var(--ag-space-9);
      font-size: var(--ag-font-size-xs);
      padding-inline: var(--ag-space-3);
      padding-block: 0;
    }

    /* Default size (md) - applies when no size attribute or size="md" */
    button,
    :host([size="md"]) button {
      height: var(--ag-space-10);
      min-height: var(--ag-space-10);
      font-size: var(--ag-font-size-sm);
      padding-inline: var(--ag-space-4);
      padding-block: 0;
    }

    :host([size="lg"]) button {
      height: var(--ag-space-12);
      min-height: var(--ag-space-12);
      font-size: var(--ag-font-size-base);
      padding-inline: var(--ag-space-5);
      padding-block: 0;
    }

    :host([size="xl"]) button {
      height: var(--ag-space-14);
      min-height: var(--ag-space-14);
      font-size: var(--ag-font-size-md);
      padding-inline: var(--ag-space-6);
      padding-block: 0;
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
      border-color: transparent;
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
      color: var(--ag-primary-text);
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
      border-start-end-radius: 0;
      border-end-end-radius: 0;
      margin-inline-end: -1px;
    }

    :host([grouped]:not(:first-child)) button {
      border-start-start-radius: 0;
      border-end-start-radius: 0;
    }

    /* Bordered variant - outline style */
    :host([bordered]) button {
      background: transparent;
      border-color: var(--ag-neutral-500);
    }

    :host([bordered][variant="primary"]) button {
      color: var(--ag-primary-text);
      border-color: var(--ag-primary-text);
    }

    /* Bordered Buttons on Hover have a filled background with variant-specific
      foreground text.  The Default Bordered is an exception to this rule. */
    :host([bordered][variant="primary"]) button:hover {
      background: var(--ag-primary);
      color: var(--ag-primary-fg);
    }

    :host([bordered][variant="secondary"]) button,
    :host([bordered][variant="secondary"]) button:hover {
      color: var(--ag-text-secondary);
      border-color: var(--ag-text-secondary);
    }

    :host([bordered][variant="success"]) button {
      color: var(--ag-success-text);
      border-color: var(--ag-success-text);
    }

    :host([bordered][variant="success"]) button:hover {
      color: var(--ag-success-fg);
      background: var(--ag-success);
    }

    :host([bordered][variant="warning"]) button {
      color: var(--ag-warning-text);
      border-color: var(--ag-warning-text);
    }

    :host([bordered][variant="warning"]) button:hover {
      background: var(--ag-warning);
      color: var(--ag-warning-fg);
    }

    :host([bordered][variant="danger"]) button {
      color: var(--ag-danger-text);
      border-color: var(--ag-danger-text);
    }

    :host([bordered][variant="danger"]) button:hover {
      background: var(--ag-danger);
      color: var(--ag-danger-fg);
    }

    :host([bordered][variant="monochrome"]) button {
      color: var(--ag-text-primary);
      border-color: var(--ag-text-primary);
    }

    :host([bordered][variant="monochrome"]) button:hover {
      background: var(--ag-background-primary-inverted);
      color: var(--ag-text-primary-inverted);
    }

    :host([ghost][variant="monochrome"]) button {
      color: var(--ag-text-primary);
    }

    :host([ghost][variant="monochrome"]) button:hover {
      background: var(--ag-background-secondary);
    }

    /* Disabled states - per-variant to maintain tonal identity */

    /* Filled buttons - use lighter background tokens */
    :host([variant="primary"]) button:disabled {
      background: var(--ag-primary-background);
      color: var(--ag-primary-text);
    }

    :host([variant="success"]) button:disabled {
      background: var(--ag-success-background);
      color: var(--ag-success-text);
    }

    :host([variant="warning"]) button:disabled {
      background: var(--ag-warning-background);
      color: var(--ag-warning-text);
    }

    :host([variant="danger"]) button:disabled {
      background: var(--ag-danger-background);
      color: var(--ag-danger-text);
    }

    :host([variant="secondary"]) button:disabled,
    button:disabled {
      background: var(--ag-background-disabled);
    }

    :host([variant="monochrome"]) button:disabled {
      background: var(--ag-background-tertiary);
    }

    /* Bordered buttons - dim the border and text with opacity */
    :host([bordered]) button:disabled {
      opacity: 60%;
      background: transparent;
    }

    /* Ghost and link buttons - dim with opacity */
    :host([ghost]) button:disabled,
    :host([link]) button:disabled {
      opacity: 60%;
      background: transparent;
    }

    /* All disabled buttons get not-allowed cursor */
    button:disabled {
      cursor: not-allowed;
    }

    button:focus-visible,
    button:focus:not(:hover) {
      /* Softer focus ring using alpha channel */
      outline: var(--ag-focus-width) solid rgba(var(--ag-focus), 0.5);
      outline-offset: var(--ag-focus-offset);
      transition: outline var(--ag-motion-medium) ease;
    }
  ` as CSSResultGroup;

  /**
   * Visual variant for styling hooks
   */
  @property({ type: String, reflect: true })
  declare variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'monochrome' | '';

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
   * Full-width style - button takes 100% width of container
   */
  @property({ type: Boolean, reflect: true, attribute: 'full-width' })
  declare fullWidth: boolean;

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
    this.disabled = false;
    this.loading = false;
    this.toggle = false;
    this.pressed = false;
    this.bordered = false;
    this.ghost = false;
    this.link = false;
    this.grouped = false;
    this.fullWidth = false;
    this.type = 'button';
    this.ariaLabel = '';
    this.variant = '';
    this.size = 'md';
    this.shape = '';
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
        @click=${this._handleClick}
        @focus=${this._handleFocus}
        @blur=${this._handleBlur}
      >
        <slot></slot>
      </button>
    `;
  }
}
