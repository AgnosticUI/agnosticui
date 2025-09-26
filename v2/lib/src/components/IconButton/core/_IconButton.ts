/**
 * AgnosticUI v2 IconButton - Canonical Implementation
 *
 * 🔒 IMMUTABLE CANONICAL VERSION 🔒
 *
 * This file contains the canonical, upgrade-safe implementation of the IconButton component.
 * It should NEVER be modified directly by users or AI assistants.
 *
 * Version: 2.0.0-dev
 * Last Updated: 2025-09-23
 * API Compatibility: 2.x
 *
 * Stability Guarantees:
 * - All public APIs remain backward compatible within major versions
 * - All ARIA attributes and accessibility features are preserved
 * - All CSS functional styling remains consistent
 * - Component behavior is identical across patch and minor updates
 *
 * For customization, use:
 * - IconButton.ts: Experimental/AI-modifiable version
 * - styled/: Production styling tiers
 * - experiments/: Experimental styling variations
 * - extensions/: AI-safe behavioral extensions
 */

import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

/**
 * AgIconButton - Accessible icon-only button component
 *
 * A semantic button element that displays only an icon with proper
 * accessibility labeling following Sara Soueidan's guidelines and
 * WAI-ARIA APG button patterns.
 *
 * Features:
 * - Semantic <button> element foundation
 * - Required accessible name via aria-label
 * - Multiple icon source support (SVG, Unicode, slots)
 * - Sara Soueidan accessibility compliance
 * - Almost headless styling approach
 * - APG-compliant keyboard interaction
 */
@customElement('ag-icon-button')
export class AgIconButton extends LitElement {
  static styles = css`
    /* FUNCTIONAL CSS ONLY - Almost Headless Approach */
    :host {
      /* Inline-flex for perfect icon centering */
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    button {
      /* Reset browser button styles */
      margin: 0;
      border: none;
      background: none;
      cursor: pointer;
      font-family: inherit;

      /* Flexbox for icon centering */
      display: flex;
      align-items: center;
      justify-content: center;

      /* Size variants using CSS custom properties */
      width: var(--icon-button-size, var(--ag-space-10, 2.5rem));
      height: var(--icon-button-size, var(--ag-space-10, 2.5rem));

      /* Semantic token integration */
      background: var(--icon-button-bg, transparent);
      color: var(--icon-button-color, var(--ag-text-locked, #374151));
      border-radius: var(--icon-button-radius, var(--ag-radius-sm, 0.25rem));

      /* Touch target accessibility */
      min-width: 44px;
      min-height: 44px;

      /* Transition for smooth state changes */
      transition: all var(--ag-motion-duration-fast, 150ms) ease-in-out;
    }

    /* Size variants */
    :host([size="xs"]) button {
      --icon-button-size: var(--ag-space-6, 1.5rem);
    }

    :host([size="sm"]) button {
      --icon-button-size: var(--ag-space-8, 2rem);
    }

    :host([size="md"]) button {
      --icon-button-size: var(--ag-space-10, 2.5rem);
    }

    :host([size="lg"]) button {
      --icon-button-size: var(--ag-space-12, 3rem);
    }

    :host([size="xl"]) button {
      --icon-button-size: var(--ag-space-14, 3.5rem);
    }

    /* Hover state - Sara Soueidan compliance */
    button:hover {
      background: var(--icon-button-hover-bg, var(--ag-background-secondary, #f3f4f6));
      color: var(--icon-button-hover-color, var(--ag-text-locked, #374151));
    }

    /* Focus state - High contrast, color-independent */
    button:focus-visible {
      outline: var(--ag-focus-width, 2px) solid var(--ag-focus, #2563eb);
      outline-offset: var(--ag-focus-offset, 2px);
    }

    /* Active/pressed state */
    button:active {
      background: var(--icon-button-active-bg, var(--ag-background-tertiary, #e5e7eb));
      transform: scale(0.98);
    }

    /* Disabled state */
    button:disabled {
      opacity: var(--ag-opacity-disabled, 0.6);
      cursor: not-allowed;
      pointer-events: none;
    }

    /* Toggle pressed state */
    :host([pressed]) button {
      background: var(--icon-button-pressed-bg, var(--ag-primary-subtle, #dbeafe));
      color: var(--icon-button-pressed-color, var(--ag-primary, #2563eb));
    }

    /* Icon sizing and positioning */
    .icon {
      width: var(--icon-size, var(--ag-space-6, 1.5rem));
      height: var(--icon-size, var(--ag-space-6, 1.5rem));
      flex-shrink: 0;

      /* Flexbox for perfect icon centering */
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* Size-specific icon sizing */
    :host([size="xs"]) .icon {
      --icon-size: var(--ag-space-4, 1rem);
    }

    :host([size="sm"]) .icon {
      --icon-size: var(--ag-space-5, 1.25rem);
    }

    :host([size="md"]) .icon {
      --icon-size: var(--ag-space-6, 1.5rem);
    }

    :host([size="lg"]) .icon {
      --icon-size: var(--ag-space-7, 1.75rem);
    }

    :host([size="xl"]) .icon {
      --icon-size: var(--ag-space-8, 2rem);
    }

    /* Unicode icon styling */
    .unicode-icon {
      font-size: var(--icon-size, var(--ag-space-6, 1.5rem));
      line-height: 1;
      font-weight: normal;
      font-style: normal;
    }

    /* Visually hidden text for accessibility */
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

    /* Loading state */
    :host([loading]) button {
      pointer-events: none;
    }

    :host([loading]) .icon {
      opacity: 0.5;
    }

    /* Variant styles - minimal functional differences */
    :host([variant="primary"]) button {
      --icon-button-bg: var(--ag-primary, #2563eb);
      --icon-button-color: var(--ag-white, #ffffff);
      --icon-button-hover-bg: var(--ag-primary-hover, #1d4ed8);
      --icon-button-hover-color: var(--ag-white, #ffffff);
    }

    :host([variant="danger"]) button {
      --icon-button-bg: transparent;
      --icon-button-color: var(--ag-danger, #dc2626);
      --icon-button-hover-bg: var(--ag-danger-subtle, #fef2f2);
      --icon-button-hover-color: var(--ag-danger-hover, #b91c1c);
    }

    :host([variant="secondary"]) button {
      --icon-button-bg: var(--ag-background-secondary, #f3f4f6);
      --icon-button-color: var(--ag-text-secondary, #6b7280);
      --icon-button-hover-bg: var(--ag-background-tertiary, #e5e7eb);
      --icon-button-hover-color: var(--ag-text-secondary, #6b7280);
    }
  `;

  /**
   * Required accessible name for the button
   * This is critical for screen reader users
   */
  @property({ type: String })
  declare label: string;

  /**
   * Icon identifier or name (for icon systems)
   */
  @property({ type: String })
  declare icon: string;

  /**
   * Unicode symbol for simple icons (×, ☰, etc.)
   */
  @property({ type: String })
  declare unicode: string;

  /**
   * Button size variant
   */
  @property({ type: String, reflect: true })
  declare size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  /**
   * Visual variant
   */
  @property({ type: String, reflect: true })
  declare variant: 'primary' | 'secondary' | 'ghost' | 'danger';

  /**
   * Disabled state
   */
  @property({ type: Boolean, reflect: true })
  declare disabled: boolean;

  /**
   * Pressed state for toggle buttons
   */
  @property({ type: Boolean, reflect: true })
  declare pressed: boolean;

  /**
   * Loading state
   */
  @property({ type: Boolean, reflect: true })
  declare loading: boolean;

  /**
   * Button type
   */
  @property({ type: String })
  declare type: 'button' | 'submit' | 'reset';

  constructor() {
    super();
    this.label = '';
    this.icon = '';
    this.unicode = '';
    this.size = 'md';
    this.variant = 'ghost';
    this.disabled = false;
    this.pressed = false;
    this.loading = false;
    this.type = 'button';
  }

  private _handleClick = (event: MouseEvent) => {
    if (this.disabled || this.loading) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    // Dispatch custom event for component interactions
    this.dispatchEvent(new CustomEvent('icon-button-click', {
      detail: {
        originalEvent: event,
        label: this.label,
        pressed: this.pressed
      },
      bubbles: true
    }));
  };

  private _handleKeyDown = (event: KeyboardEvent) => {
    // Space and Enter activation (browser handles this automatically for <button>)
    // But we dispatch our custom event for consistency
    if ((event.key === ' ' || event.key === 'Enter') && !this.disabled && !this.loading) {
      this.dispatchEvent(new CustomEvent('icon-button-activate', {
        detail: {
          originalEvent: event,
          label: this.label,
          pressed: this.pressed
        },
        bubbles: true
      }));
    }
  };

  /**
   * Renders the appropriate icon content
   */
  private _renderIcon() {
    // Check if slotted content exists first (highest priority)
    const hasSlottedContent = this.children.length > 0;

    // Priority: 1. Slotted content, 2. Unicode, 3. Icon identifier
    if (hasSlottedContent) {
      // Slotted content takes highest priority
      return html`
        <span class="icon" aria-hidden="true">
          <slot></slot>
        </span>
      `;
    }

    if (this.unicode) {
      return html`
        <span class="icon unicode-icon" aria-hidden="true">${this.unicode}</span>
      `;
    }

    if (this.icon) {
      // Placeholder for icon system integration
      // In a real implementation, this would integrate with an icon library
      return html`
        <span class="icon" aria-hidden="true" data-icon="${this.icon}">
          <slot>
            <!-- Icon system would inject SVG here -->
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              focusable="false"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2" fill="none"/>
              <text x="12" y="16" text-anchor="middle" font-size="8" fill="currentColor">
                ${this.icon.slice(0, 3)}
              </text>
            </svg>
          </slot>
        </span>
      `;
    }

    // Default: empty slot for future content
    return html`
      <span class="icon" aria-hidden="true">
        <slot></slot>
      </span>
    `;
  }

  render() {
    // Critical: Validate that label is provided
    if (!this.label) {
      // eslint-disable-next-line no-console
      console.warn('AgIconButton: label property is required for accessibility. Please provide an aria-label value.');
    }

    return html`
      <button
        type=${this.type}
        aria-label=${ifDefined(this.label || undefined)}
        aria-pressed=${ifDefined(this.pressed !== undefined ? this.pressed.toString() : undefined)}
        ?disabled=${this.disabled}
        @click=${this._handleClick}
        @keydown=${this._handleKeyDown}
      >
        ${this._renderIcon()}

        <!-- Loading indicator slot -->
        ${this.loading ? html`
          <span class="icon" aria-hidden="true">
            <slot name="loading">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                focusable="false"
                aria-hidden="true"
                style="animation: spin 1s linear infinite;"
              >
                <path d="M21 12a9 9 0 11-6.219-8.56"/>
              </svg>
              <style>
                @keyframes spin {
                  from { transform: rotate(0deg); }
                  to { transform: rotate(360deg); }
                }
              </style>
            </slot>
          </span>
        ` : ''}

        <!-- Visually hidden text fallback for additional context -->
        ${this.label && !this.getAttribute('aria-label') ? html`
          <span class="visually-hidden">${this.label}</span>
        ` : ''}
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ag-icon-button': AgIconButton;
  }
}
