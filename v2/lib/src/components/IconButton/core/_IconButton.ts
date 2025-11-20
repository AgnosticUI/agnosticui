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
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

// Event detail interfaces
export interface IconButtonClickEventDetail {
  originalEvent: MouseEvent;
  label: string;
  pressed: boolean;
}

export interface IconButtonActivateEventDetail {
  originalEvent: KeyboardEvent;
  label: string;
  pressed: boolean;
}

// Event type definitions
export type IconButtonClickEvent = CustomEvent<IconButtonClickEventDetail>;
export type IconButtonActivateEvent = CustomEvent<IconButtonActivateEventDetail>;

// Props interface following INTERFACE_STANDARDS.md
export interface IconButtonProps {
  label?: string;
  icon?: string;
  unicode?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost' | 'monochrome';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  pressed?: boolean;
  loading?: boolean;
  ariaDescribedby?: string;
  onIconButtonClick?: (event: IconButtonClickEvent) => void;
  onIconButtonActivate?: (event: IconButtonActivateEvent) => void;
}

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
 * - Minimalist styling via design tokens
 * - APG-compliant keyboard interaction
 */
export class AgIconButton extends LitElement implements IconButtonProps {
  static styles = css`
    /* MINIMALIST & THEMEABLE - Styling via --ag-* design tokens */
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
      background: transparent;
      cursor: pointer;
      font-family: inherit;

      /* Flexbox for icon centering */
      display: flex;
      align-items: center;
      justify-content: center;

      /* Size variants using CSS custom properties */
      width: var(--ag-icon-button-base, --ag-space-10);
      height: var(--ag-icon-button-base, --ag-space-10);

      /* Default color */
      color: var(--ag-text-primary);
      border-radius: var(--ag-radius-sm);

      /* Touch target accessibility */
      min-width: 32px;
      min-height: 32px;

      /* Transition for smooth state changes */
      transition: all var(--ag-motion-duration-fast) ease-in-out;
    }

    /* Size variants */
    :host([size="xs"]) button {
      width: var(--ag-icon-button-xs, var(--ag-space-6));
      height: var(--ag-icon-button-xs, var(--ag-space-6));
      font-size: var(--ag-space-4);
      font-size: var(--ag-icon-button-font-size-xs, var(--ag-space-4));
    }

    :host([size="sm"]) button {
      width: var(--ag-icon-button-sm, var(--ag-space-8));
      height: var(--ag-icon-button-sm, var(--ag-space-8));
      font-size: var(--ag-icon-button-font-size-sm, var(--ag-space-5));
    }

    :host([size="md"]) button {
      width: var(--ag-icon-button-base, var(--ag-space-10));
      height: var(--ag-icon-button-base, var(--ag-space-10));
      font-size: var(--ag-icon-button-font-size-md, var(--ag-space-6));
    }

    :host([size="lg"]) button {
      width: var(--ag-icon-button-lg, var(--ag-space-12));
      height: var(--ag-icon-button-lg, var(--ag-space-12));
      font-size: var(--ag-icon-button-font-size-lg, var(--ag-space-7));
    }

    :host([size="xl"]) button {
      width: var(--ag-icon-button-xl,var(--ag-space-14));
      height: var(--ag-icon-button-xl, var(--ag-space-14));
      font-size: var(--ag-icon-button-font-size-xl, var(--ag-space-8));
    }

    /* Default hover state (ghost variant) */
    button:hover {
      background: var(--ag-background-secondary);
    }

    /* Focus state - High contrast, color-independent */
    button:focus-visible {
      outline: var(--ag-focus-width) solid var(--ag-focus);
      outline-offset: var(--ag-focus-offset);
    }

    /* Active state */
    button:active {
      background: var(--ag-background-tertiary);
      transform: scale(0.98);
    }

    /* Disabled state */
    button:disabled {
      opacity: var(--ag-opacity-disabled);
      cursor: not-allowed;
      pointer-events: none;
    }

    /* Toggle pressed state */
    :host([pressed]) button {
      background: var(--ag-primary-subtle);
      color: var(--ag-primary);
    }

    /* Icon sizing and positioning */
    .icon {
      width: 1em;
      height: 1em;
      flex-shrink: 0;

      /* Flexbox for perfect icon centering */
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* Make any SVG or direct child fill the icon container so it scales */
    .icon svg,
    .icon > * {
      width: 100%;
      height: 100%;
      display: block;
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

    /* Variant styles - following Button pattern */

    /* Secondary variant */
    :host([variant="secondary"]) button {
      background: var(--ag-neutral-400);
    }
    :host([variant="secondary"]) button:hover {
      background: var(--ag-neutral-500);
    }

    /* Primary, success, warning, and danger all have white text and get darker on hover */
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

    /* Monochrome variant - adapts to light/dark themes */
    :host([variant="monochrome"]) button {
      background: var(--ag-background-primary-inverted);
      color: var(--ag-text-primary-inverted);
    }
    :host([variant="monochrome"]) button:hover {
      background: var(--ag-background-secondary-inverted);
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
  declare variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost' | 'monochrome';

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

  /**
   * ARIA described by reference
   */
  @property({ type: String, reflect: true, attribute: 'aria-describedby' })
  declare ariaDescribedby: string;

  /**
   * Callback for icon button click events
   */
  @property({ attribute: false })
  declare onIconButtonClick?: (event: IconButtonClickEvent) => void;

  /**
   * Callback for icon button activate events
   */
  @property({ attribute: false })
  declare onIconButtonActivate?: (event: IconButtonActivateEvent) => void;

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
    this.ariaDescribedby = '';
  }

  private _handleClick = (event: MouseEvent) => {
    if (this.disabled || this.loading) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    // Dual-dispatch pattern for custom event
    const iconButtonClickEvent = new CustomEvent<IconButtonClickEventDetail>('icon-button-click', {
      detail: {
        originalEvent: event,
        label: this.label,
        pressed: this.pressed
      },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(iconButtonClickEvent);

    // Invoke callback if provided
    if (this.onIconButtonClick) {
      this.onIconButtonClick(iconButtonClickEvent);
    }
  };

  private _handleKeyDown = (event: KeyboardEvent) => {
    // Space and Enter activation (browser handles this automatically for <button>)
    // But we dispatch our custom event for consistency
    if ((event.key === ' ' || event.key === 'Enter') && !this.disabled && !this.loading) {
      // Dual-dispatch pattern for custom event
      const iconButtonActivateEvent = new CustomEvent<IconButtonActivateEventDetail>('icon-button-activate', {
        detail: {
          originalEvent: event,
          label: this.label,
          pressed: this.pressed
        },
        bubbles: true,
        composed: true
      });
      this.dispatchEvent(iconButtonActivateEvent);

      // Invoke callback if provided
      if (this.onIconButtonActivate) {
        this.onIconButtonActivate(iconButtonActivateEvent);
      }
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
        <span class="icon" part="ag-icon-has-slotted" aria-hidden="true">
          <slot></slot>
        </span>
      `;
    }

    if (this.unicode) {
      return html`
        <span class="icon unicode-icon" part="ag-icon-unicode" aria-hidden="true">${this.unicode}</span>
      `;
    }

    if (this.icon) {
      // Placeholder for icon system integration
      // In a real implementation, this would integrate with an icon library
      return html`
        <span class="icon" part="ag-icon" aria-hidden="true" data-icon="${this.icon}">
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
      <span class="icon" part="ag-icon-empty-slot" aria-hidden="true">
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
        part="ag-icon-button"
        type=${this.type}
        aria-label=${ifDefined(this.label || undefined)}
        aria-describedby=${ifDefined(this.ariaDescribedby || undefined)}
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
