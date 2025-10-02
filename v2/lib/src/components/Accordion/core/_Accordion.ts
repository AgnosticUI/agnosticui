/**
 * AgnosticUI v2 Accordion - Canonical Implementation
 * 
 * ⚠️  IMMUTABLE CANONICAL VERSION ⚠️
 * 
 * This file contains the canonical, upgrade-safe implementation of the Accordion component.
 * It should NEVER be modified directly by users or AI assistants.
 * 
 * Version: 2.0.0-stable
 * Last Updated: 2025-09-08
 * API Compatibility: 2.x
 * 
 * Stability Guarantees:
 * - All public APIs remain backward compatible within major versions
 * - All ARIA attributes and accessibility features are preserved
 * - All CSS functional styling remains consistent
 * - Component behavior is identical across patch and minor updates
 * 
 * For customization, use:
 * - Accordion.ts: Experimental/AI-modifiable version
 * - styled/: Pre-styled component variants
 * - extensions/: AI-safe behavioral extensions
 * - Design tokens: Override --ag-* CSS custom properties
 */

import { LitElement, html, css } from 'lit';

import { generateUniqueId } from '../../../utils/unique-id';

/**
 * Canonical version information for upgrade tracking
 */
export const ACCORDION_CANONICAL_VERSION = '2.0.0-stable';
export const ACCORDION_API_VERSION = '2.0';
export const ACCORDION_LAST_UPDATED = '2025-09-08';

export class Accordion extends LitElement {
  static styles = [css`
    :host {
      display: block;
    }
    /* Progressive enhancement: Hide only after web component is defined */
    :host(:not(:defined)) {
      visibility: visible; /* Content visible without JS */
    }
    :host(:defined) {
      visibility: visible; /* Explicit visibility once defined */
    }
  `];

  render() {
    return html`
      <slot></slot>
    `;
  }
}

export class AccordionItem extends LitElement {
  static properties = {
    open: { type: Boolean, reflect: true },
    headingLevel: { type: Number, attribute: 'heading-level' },
    disabled: { type: Boolean, reflect: true },
    indicator: { type: Boolean, reflect: true },
    background: { type: Boolean, reflect: true }
  };

  declare open: boolean;
  declare headingLevel: number;
  declare disabled: boolean;
  declare indicator: boolean;
  declare background: boolean;
  private _id = generateUniqueId('accordion-item');

  constructor() {
    super();
    this.open = false;
    this.headingLevel = 3; // Default to h3
    this.disabled = false;
    this.indicator = false;
    this.background = false;

    // Add keyboard event listener
    this.addEventListener('keydown', this._handleKeydown.bind(this));
  }

  connectedCallback() {
    super.connectedCallback();
    // Mark as JavaScript-enhanced for progressive enhancement CSS
    // This prevents FOUC by only applying hide/show logic after JS loads
    this.setAttribute('data-enhanced', '');
  }

  static styles = [css`
    :host {
      display: block;
    }
    .header {
      cursor: pointer;
    }
    :host([disabled]) .header {
      cursor: not-allowed;
      opacity: 0.6;
    }
    :host([background]) .header {
      background-color: var(--ag-background-secondary, #f3f4f6);
      color: var(--ag-text-primary, inherit);
    }
    .heading {
      margin: 0;
      padding: 0;
    }
    .header button {
      background: none;
      border: none;
      padding: 0;
      font: inherit;
      cursor: pointer;
      width: 100%;
      text-align: left;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .header button:focus-visible {
      /* High-contrast focus ring using CSS custom property */
      outline: var(--ag-focus-width, 2px) solid var(--ag-focus, #2563eb);
      outline-offset: var(--ag-focus-offset, 2px);
      transition: outline var(--ag-motion-medium, 0.2s) ease;
    }
    :host([disabled]) .header button {
      cursor: not-allowed;
      pointer-events: none;
    }

    /* Indicator wrapper - only visible when indicator attribute present */
    .indicator {
      display: none;
      flex-shrink: 0;
      transition: transform var(--ag-motion-slow, 0.4s) ease;
    }
    :host([indicator]) .indicator {
      display: block;
    }

    /* Rotate indicator when open (starts pointing down, rotates to up) */
    :host([indicator][open]) .indicator {
      transform: rotate(180deg);
    }

    /* Respect prefers-reduced-motion */
    @media (prefers-reduced-motion: reduce) {
      .header button:focus-visible,
      .indicator {
        transition: none;
      }
    }

    /* Progressive enhancement: Content visible until JS enhanced */
    .content {
      display: block;
    }
    /* After JS enhancement, respect open/closed state */
    :host([data-enhanced]) .content {
      display: none;
    }
    :host([data-enhanced][open]) .content {
      display: block;
    }
    /* Ensure hidden attribute works in all environments */
    .content[hidden] {
      display: none !important;
    }
  `];

  render() {
    return html`
      <div class="header" part="accordion-header-wrapper" @click="${this.toggle}">
        ${this._renderHeading()}
      </div>
      <div
        class="content"
        part="accordion-content"
        role="region"
        aria-labelledby="${this._id}-button"
        id="${this._id}-panel"
        ?hidden="${this.hasAttribute('data-enhanced') && !this.open}"
      >
        <slot name="content"></slot>
      </div>
    `;
  }

  private _renderDefaultIndicator() {
    return html`
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="m6 9 6 6 6-6"></path>
      </svg>
    `;
  }

  private _renderHeading() {
    const headingContent = html`
      <button
        part="accordion-header"
        aria-expanded="${this.open}"
        aria-controls="${this._id}-panel"
        id="${this._id}-button"
        ?disabled="${this.disabled}"
        aria-disabled="${this.disabled}"
        @keydown="${this._handleKeydown}"
      >
        <slot name="header"></slot>
        <span class="indicator" part="accordion-indicator">
          <slot name="indicator">
            ${this._renderDefaultIndicator()}
          </slot>
        </span>
      </button>
    `;

    const level = Math.max(1, Math.min(6, this.headingLevel || 3));

    switch (level) {
      case 1:
        return html`<h1 class="heading" part="accordion-heading">${headingContent}</h1>`;
      case 2:
        return html`<h2 class="heading" part="accordion-heading">${headingContent}</h2>`;
      case 3:
        return html`<h3 class="heading" part="accordion-heading">${headingContent}</h3>`;
      case 4:
        return html`<h4 class="heading" part="accordion-heading">${headingContent}</h4>`;
      case 5:
        return html`<h5 class="heading" part="accordion-heading">${headingContent}</h5>`;
      case 6:
        return html`<h6 class="heading" part="accordion-heading">${headingContent}</h6>`;
    }
  }

  toggle() {
    if (this.disabled) return; // Don't toggle when disabled
    
    this.open = !this.open;
    this.dispatchEvent(new CustomEvent('toggle', { 
      detail: { open: this.open },
      bubbles: true 
    }));
  }

  /**
   * Focus the accordion's button (for programmatic focus management)
   */
  focus() {
    const button = this.shadowRoot?.querySelector('button');
    button?.focus();
  }

  /**
   * Get the button element (for external focus management)
   */
  get buttonElement() {
    return this.shadowRoot?.querySelector('button') || null;
  }

  /**
   * Handle keyboard interactions for individual accordion items
   */
  private _handleKeydown(event: KeyboardEvent) {
    if (this.disabled) return;
    
    const { key } = event;
    
    // Handle keys that affect the current accordion
    if (key === 'Enter' || key === ' ') {
      // Only handle if focus is on our button
      if (event.target === this.buttonElement) {
        event.preventDefault();
        this.toggle();
      }
    }
    
    // Emit keyboard navigation events that can be handled by AccordionGroup
    if (key === 'ArrowDown' || key === 'ArrowUp' || key === 'Home' || key === 'End') {
      // Always emit navigation keys when accordion has focus
      event.preventDefault();
      this.dispatchEvent(new CustomEvent('accordion-keydown', {
        detail: { key, accordionItem: this },
        bubbles: true
      }));
    }
  }
}

// Note: ag-accordion is defined in AccordionGroup component for keyboard navigation
// Only register the individual item component here
customElements.define('ag-accordion-item', AccordionItem);
