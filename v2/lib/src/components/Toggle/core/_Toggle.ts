/**
 * AgnosticUI v2 Toggle - Canonical Implementation
 *
 * 🔒 IMMUTABLE CANONICAL VERSION 🔒
 *
 * This file contains the canonical, upgrade-safe implementation of the Toggle component.
 * It should NEVER be modified directly by users or AI assistants.
 *
 * Version: 2.0.0-dev
 * Last Updated: 2025-09-24
 * API Compatibility: 2.x
 *
 * Stability Guarantees:
 * - All public APIs remain backward compatible within major versions
 * - All ARIA attributes and accessibility features are preserved
 * - All CSS functional styling remains consistent
 * - Component behavior is identical across patch and minor updates
 * - Full WAI-ARIA Switch pattern compliance maintained
 *
 * For customization, use:
 * - Toggle.ts: Experimental/AI-modifiable version
 * - styled/: Production styling tiers
 * - experiments/: Experimental styling variations
 * - extensions/: AI-safe behavioral extensions
 */

import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

/**
 * AgToggle - Accessible binary toggle/switch component
 *
 * A semantic button element implementing the WAI-ARIA Switch pattern
 * for binary on/off state controls with comprehensive accessibility support.
 *
 * Features:
 * - WAI-ARIA Switch pattern compliance with role="switch"
 * - Semantic <button> element foundation
 * - Required accessible name via aria-label or aria-labelledby
 * - Keyboard navigation (Space/Enter activation)
 * - Almost headless styling approach
 * - Size variants with consistent proportions
 * - Form integration support
 */
@customElement('ag-toggle')
export class AgToggle extends LitElement {
  static styles = css`
    /* FUNCTIONAL CSS ONLY - Almost Headless Approach */
    :host {
      /* Inline-flex for integration with other form elements */
      display: inline-flex;
      align-items: center;
    }

    button {
      /* Reset browser button styles */
      margin: 0;
      border: none;
      background: transparent;
      cursor: pointer;
      font-family: inherit;
      padding: 0;

      /* Flexbox for track/handle layout */
      display: flex;
      align-items: center;
      position: relative;

      /* Touch target accessibility - minimum 44px */
      min-width: 44px;
      min-height: 44px;

      /* Focus management */
      border-radius: var(--ag-focus-border-radius, 9999px);
      transition: all var(--ag-transition-duration, 200ms) ease;
    }

    button:focus-visible {
      outline: var(--ag-focus-width, 2px) solid var(--ag-focus, #2563eb);
      outline-offset: var(--ag-focus-offset, 2px);
    }

    button:disabled {
      cursor: not-allowed;
      opacity: 0.6;
      pointer-events: none;
    }

    .ag-toggle__track {
      /* Track container */
      position: relative;
      display: flex;
      align-items: center;
      border-radius: 9999px;
      transition: inherit;

      /* Default size - will be overridden by size variants */
      width: var(--toggle-width, 24px);
      height: var(--toggle-height, 12px);

      /* Functional styling only */
      background: var(--toggle-track-bg, #d1d5db);
      border: 1px solid var(--toggle-track-border, transparent);
    }

    .ag-toggle__handle {
      /* Handle positioning and animation */
      position: absolute;
      top: 50%;
      left: 2px;
      transform: translateY(-50%);
      border-radius: 50%;
      transition: transform var(--ag-transition-duration, 200ms) ease;

      /* Default handle size */
      width: var(--handle-size, 10px);
      height: var(--handle-size, 10px);

      /* Functional styling only */
      background: var(--toggle-handle-bg, #ffffff);
      box-shadow: var(--toggle-handle-shadow, 0 1px 3px rgba(0, 0, 0, 0.1));
    }

    /* Checked state - handle moves to right */
    :host([checked]) .ag-toggle__handle {
      transform: translateY(-50%) translateX(calc(var(--toggle-width) - var(--handle-size) - 4px));
    }

    /* Size variants with 2:1 width:height ratio */
    :host([size="xs"]) {
      --toggle-width: 16px;
      --toggle-height: 8px;
      --handle-size: 6px;
    }

    :host([size="sm"]) {
      --toggle-width: 20px;
      --toggle-height: 10px;
      --handle-size: 8px;
    }

    :host([size="md"]) {
      --toggle-width: 24px;
      --toggle-height: 12px;
      --handle-size: 10px;
    }

    :host([size="lg"]) {
      --toggle-width: 32px;
      --toggle-height: 16px;
      --handle-size: 14px;
    }

    :host([size="xl"]) {
      --toggle-width: 40px;
      --toggle-height: 20px;
      --handle-size: 18px;
    }

    /* Variant styles - minimal functional differences */
    :host([variant="success"]) .ag-toggle__track {
      --toggle-track-bg: var(--ag-success, #10b981);
    }

    :host([variant="warning"]) .ag-toggle__track {
      --toggle-track-bg: var(--ag-warning, #f59e0b);
    }

    :host([variant="danger"]) .ag-toggle__track {
      --toggle-track-bg: var(--ag-danger, #ef4444);
    }

    /* Checked state coloring */
    :host([checked]) .ag-toggle__track {
      --toggle-track-bg: var(--ag-primary, #3b82f6);
    }

    :host([checked][variant="success"]) .ag-toggle__track {
      --toggle-track-bg: var(--ag-success, #10b981);
    }

    :host([checked][variant="warning"]) .ag-toggle__track {
      --toggle-track-bg: var(--ag-warning, #f59e0b);
    }

    :host([checked][variant="danger"]) .ag-toggle__track {
      --toggle-track-bg: var(--ag-danger, #ef4444);
    }

    /* Readonly state */
    :host([readonly]) button {
      cursor: default;
    }

    /* Screen reader only text */
    .visually-hidden {
      position: absolute !important;
      width: 1px !important;
      height: 1px !important;
      padding: 0 !important;
      margin: -1px !important;
      overflow: hidden !important;
      clip: rect(0, 0, 0, 0) !important;
      white-space: nowrap !important;
      border: 0 !important;
    }
  `;

  /**
   * Required accessible name for the toggle
   * This is critical for screen reader users
   */
  @property({ type: String })
  declare label: string;

  /**
   * Current checked state of the toggle
   */
  @property({ type: Boolean, reflect: true })
  declare checked: boolean;

  /**
   * Toggle size variant
   */
  @property({ type: String, reflect: true })
  declare size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  /**
   * Visual variant
   */
  @property({ type: String, reflect: true })
  declare variant: 'default' | 'success' | 'warning' | 'danger';

  /**
   * Disabled state
   */
  @property({ type: Boolean, reflect: true })
  declare disabled: boolean;

  /**
   * Read-only state - visually interactive but doesn't change
   */
  @property({ type: Boolean, reflect: true })
  declare readonly: boolean;

  /**
   * External element ID that labels this toggle
   */
  @property({ type: String })
  declare labelledBy: string;

  /**
   * External element ID that describes this toggle
   */
  @property({ type: String })
  declare describedBy: string;

  /**
   * Form integration - name attribute
   */
  @property({ type: String })
  declare name: string;

  /**
   * Form integration - value when checked
   */
  @property({ type: String })
  declare value: string;

  constructor() {
    super();

    // Default values
    this.label = '';
    this.checked = false;
    this.size = 'md';
    this.variant = 'default';
    this.disabled = false;
    this.readonly = false;
    this.labelledBy = '';
    this.describedBy = '';
    this.name = '';
    this.value = '';
  }

  protected firstUpdated() {
    // Developer experience: warn about missing label
    if (!this.label && !this.labelledBy) {
      // eslint-disable-next-line no-console
      console.warn('AgToggle: label property is required for accessibility. Use either "label" or "labelledBy" prop.');
    }
  }

  private _handleClick = (event: Event) => {
    if (this.disabled || this.readonly) {
      event.preventDefault();
      return;
    }

    this.checked = !this.checked;

    // Dispatch change event
    this.dispatchEvent(new CustomEvent('toggle-change', {
      detail: { checked: this.checked },
      bubbles: true,
      composed: true
    }));
  };

  private _handleKeydown = (event: KeyboardEvent) => {
    // WAI-ARIA Switch pattern: Space and Enter should toggle
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      this._handleClick(event);
    }
  };

  render() {
    return html`
      <button
        role="switch"
        aria-checked="${this.checked}"
        aria-label="${ifDefined(this.labelledBy ? undefined : this.label)}"
        aria-labelledby="${ifDefined(this.labelledBy || undefined)}"
        aria-describedby="${ifDefined(this.describedBy || undefined)}"
        ?disabled="${this.disabled}"
        class="ag-toggle ag-toggle--${this.size} ag-toggle--${this.variant}"
        @click="${this._handleClick}"
        @keydown="${this._handleKeydown}"
      >
        <span class="ag-toggle__track">
          <span class="ag-toggle__handle"></span>
        </span>

        <!-- Screen reader state indication -->
        <span class="visually-hidden">
          ${this.checked ? 'On' : 'Off'}
        </span>
      </button>
    `;
  }
}