/**
 * AgnosticUI v2 Button - Canonical Implementation
 *
 * �  IMMUTABLE CANONICAL VERSION �
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
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styles } from './styles.js';

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
 * - Almost headless styling approach
 * - APG-compliant accessibility
 */
export class AgButton extends LitElement {
  static styles = [styles, css`
    /* FUNCTIONAL CSS ONLY - Almost Headless Approach */
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
      background: var(--ag-neutral-200);

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
    }

    :host([variant="primary"]) button {
      background: var(--ag-primary);
      color: var(--ag-neutral-white);
    }
    :host([variant="primary"]) button:hover {
      background: var(--ag-primary-dark);
    }
    :host([variant="secondary"]) button {
      background: var(--ag-secondary);
    }
    :host([variant="secondary"]) button:hover {
      background: var(--ag-secondary-dark);
    }
    :host([variant="warning"]) button {
      background: var(--ag-warning);
      color: var(--ag-neutral-white);
    }
    :host([variant="warning"]) button:hover {
      background: var(--ag-warning-dark);
    }
    :host([variant="danger"]) button {
      background: var(--ag-danger);
      color: var(--ag-neutral-white);
    }
    :host([variant="danger"]) button:hover {
      background: var(--ag-danger-dark);
    }

    button:disabled {
      cursor: not-allowed;
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
  declare variant: 'primary' | 'secondary' | 'warning' | 'danger' | '';

  /**
   * Size variant for styling hooks
   */
  @property({ type: String, reflect: true })
  declare size: string;

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
  @property({ type: String })
  declare ariaLabel: string;

  /**
   * ARIA described-by for accessibility
   */
  @property({ type: String })
  declare ariaDescribedby: string;


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
  }

  private _handleClick() {
    if (this.toggle && !this.disabled && !this.loading) {
      this.pressed = !this.pressed;

      // Dispatch custom toggle event
      const toggleEvent = new CustomEvent('toggle', {
        detail: { pressed: this.pressed },
        bubbles: true,
        composed: true
      });
      this.dispatchEvent(toggleEvent);
    }
  }

  private _handleFocus() {
    // Forward focus event from internal button to custom element
    const focusEvent = new FocusEvent('focus', {
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(focusEvent);
  }

  private _handleBlur() {
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
        part="button"
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

customElements.define('ag-button', AgButton);
