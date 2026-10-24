// v2/lib/src/components/Button/core/_Button.ts

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
import { LitElement, html, css, unsafeCSS, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

// Ingest the class dictionary object to decode hashes
import styles from './button-structure.module.css';
// Ingest the compiled CSS text string for the shadow root definition
import structuralStylesText from './button-structure.module.css?inline';

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
 */
export class AgButton extends LitElement implements ButtonProps {
  static shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };

  static styles = [
    css`${unsafeCSS(structuralStylesText)}`,
    css`
      /* Interactive browser-only properties (hover/focus loops, transitions) */
      :host([variant="secondary"]) button:hover {
        background: var(--ag-neutral-500);
      }
      :host([variant="primary"]) button:hover {
        background: var(--ag-primary-dark);
      }
      :host([variant="success"]) button:hover {
        background: var(--ag-success-dark);
      }
      :host([variant="warning"]) button:hover {
        background: var(--ag-warning-dark);
      }
      :host([variant="danger"]) button:hover {
        background: var(--ag-danger-dark);
      }
      :host([variant="monochrome"]) button:hover {
        background: var(--ag-background-secondary-inverted);
      }

      :host([ghost][variant="danger"]) button:hover,
      :host([ghost][variant="warning"]) button:hover,
      :host([ghost][variant="success"]) button:hover,
      :host([ghost][variant="primary"]) button:hover {
        background: var(--ag-neutral-100);
      }

      :host([link]) button:hover {
        border-bottom-color: var(--ag-primary);
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

      :host([bordered][variant="primary"]) button:hover {
        background: var(--ag-primary);
        color: var(--ag-primary-fg);
      }

      :host([bordered][variant="success"]) button:hover {
        color: var(--ag-success-fg);
        background: var(--ag-success);
      }

      :host([bordered][variant="warning"]) button:hover {
        background: var(--ag-warning);
        color: var(--ag-warning-fg);
      }

      :host([bordered][variant="danger"]) button:hover {
        background: var(--ag-danger);
        color: var(--ag-danger-fg);
      }

      :host([bordered][variant="monochrome"]) button:hover {
        background: var(--ag-background-primary-inverted);
        color: var(--ag-text-primary-inverted);
      }

      :host([ghost][variant="monochrome"]) button:hover {
        background: var(--ag-background-secondary);
      }

      /* Disabled states - per-variant to maintain tonal identity */
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

      :host([bordered]) button:disabled {
        opacity: 60%;
        background: transparent;
      }

      :host([ghost]) button:disabled,
      :host([link]) button:disabled {
        opacity: 60%;
        background: transparent;
      }

      button:focus-visible,
      button:focus:not(:hover) {
        outline: var(--ag-focus-width) solid rgba(var(--ag-focus), 0.5);
        outline-offset: var(--ag-focus-offset);
        transition: outline var(--ag-motion-medium) ease;
      }
    `
  ] as unknown as CSSResultGroup;

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

    // Shadow DOM buttons cannot natively submit/reset their owner form.
    // Walk up the light DOM from the host element to find the enclosing form.
    if (!this.disabled && !this.loading && !event.defaultPrevented) {
      if (this.type === 'submit') {
        const form = this.closest('form');
        if (form) form.requestSubmit();
      } else if (this.type === 'reset') {
        const form = this.closest('form');
        if (form) form.reset();
      }
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

  render() {
    const isDisabled = this.disabled || this.loading;

    // Apply design tokens to match mapped classes cleanly
    const classes: string[] = [];
    if (this.variant === 'primary') classes.push(styles.variantPrimary);
    else if (this.variant === 'secondary') classes.push(styles.variantSecondary);
    else if (this.variant === 'success') classes.push(styles.variantSuccess);
    else if (this.variant === 'warning') classes.push(styles.variantWarning);
    else if (this.variant === 'danger') classes.push(styles.variantDanger);
    else if (this.variant === 'monochrome') classes.push(styles.variantMonochrome);

    if (this.size === 'x-sm') classes.push(styles.sizeXSm);
    else if (this.size === 'sm') classes.push(styles.sizeSm);
    else if (this.size === 'md') classes.push(styles.sizeMd);
    else if (this.size === 'lg') classes.push(styles.sizeLg);
    else if (this.size === 'xl') classes.push(styles.sizeXl);

    if (this.shape === 'capsule') classes.push(styles.shapeCapsule);
    else if (this.shape === 'rounded') classes.push(styles.shapeRounded);
    else if (this.shape === 'circle') classes.push(styles.shapeCircle);
    else if (this.shape === 'square') classes.push(styles.shapeSquare);
    else if (this.shape === 'rounded-square') classes.push(styles.shapeRoundedSquare);

    if (this.bordered) classes.push(styles.isBordered);
    if (this.ghost) classes.push(styles.isGhost);
    if (this.link) classes.push(styles.isLink);
    if (this.grouped) classes.push(styles.isGrouped);
    if (isDisabled) classes.push(styles.isDisabled);

    return html`
      <button
        type=${this.type}
        class="${classes.filter(Boolean).join(' ')}"
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
