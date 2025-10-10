/**
 * AgnosticUI v2 Breadcrumb - Canonical Implementation
 *
 * 🔒 IMMUTABLE CANONICAL VERSION 🔒
 *
 * This file contains the canonical, upgrade-safe implementation of the Breadcrumb component.
 * It should NEVER be modified directly by users or AI assistants.
 *
 * Version: 2.0.0-dev
 * Last Updated: 2025-09-25
 * API Compatibility: 2.x
 *
 * Stability Guarantees:
 * - All public APIs remain backward compatible within major versions
 * - All ARIA attributes and accessibility features are preserved
 * - All CSS functional styling remains consistent
 * - Component behavior is identical across patch and minor updates
 * - Full WAI-ARIA Breadcrumb pattern compliance maintained
 *
 * For customization, use:
 * - Breadcrumb.ts: Experimental/AI-modifiable version
 * - styled/: Production styling tiers
 * - experiments/: Experimental styling variations
 * - extensions/: AI-safe behavioral extensions
 */

import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

/**
 * Breadcrumb item interface
 */
export interface BreadcrumbItem {
  /** Display text for the breadcrumb */
  label: string;
  /** URL for navigation (optional for current page) */
  href?: string;
  /** Marks the current page */
  current?: boolean;
}

// Event detail interfaces
export interface BreadcrumbClickEventDetail {
  item: BreadcrumbItem;
  index: number;
  event: MouseEvent;
}

// Event type definitions
export type BreadcrumbClickEvent = CustomEvent<BreadcrumbClickEventDetail>;

// Props interface following INTERFACE_STANDARDS.md
export interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  type?: 'default' | 'slash' | 'bullet' | 'arrow';
  primary?: boolean;
  ariaLabel?: string;
  onBreadcrumbClick?: (event: BreadcrumbClickEvent) => void;
}

/**
 * AgBreadcrumb - Accessible breadcrumb navigation component
 *
 * A semantic navigation element implementing the WAI-ARIA Breadcrumb pattern
 * for showing hierarchical page location with comprehensive accessibility support.
 *
 * Features:
 * - WAI-ARIA Breadcrumb pattern compliance with proper nav landmark
 * - Semantic ordered list structure
 * - Current page indication via aria-current="page"
 * - Multiple separator styles (default, slash, bullet, arrow)
 * - Minimalist styling via design tokens
 * - Click event handling for navigation
 * - Form integration support
 */
@customElement('ag-breadcrumb')
export class AgBreadcrumb extends LitElement implements BreadcrumbProps {
  static styles = css`
    /* MINIMALIST & THEMEABLE - Styling via --ag-* design tokens */
    :host {
      display: block;
    }

    .ag-breadcrumb__list {
      display: flex;
      flex-wrap: wrap;
      padding: 0;
      margin: 0;
      list-style: none;
      white-space: nowrap;
    }

    .ag-breadcrumb__item {
      display: inline-flex;
      align-items: center;
    }

    .ag-breadcrumb__item + .ag-breadcrumb__item {
      padding-inline-start: var(--ag-space-2);
    }

    .ag-breadcrumb__item + .ag-breadcrumb__item::before {
      content: "›";
      padding-inline-end: var(--ag-space-2);
      color: var(--ag-text-secondary);
      speak: none;
      user-select: none;
    }

    /* Separator variants */
    :host([type="slash"]) .ag-breadcrumb__item + .ag-breadcrumb__item::before {
      content: "/";
    }

    :host([type="arrow"]) .ag-breadcrumb__item + .ag-breadcrumb__item::before {
      content: "→";
    }

    :host([type="bullet"]) .ag-breadcrumb__item + .ag-breadcrumb__item::before {
      content: "•";
    }

    /* Default link styling - uses text color */
    .ag-breadcrumb__link {
      text-decoration: none;
      color: var(--ag-text-primary);
      padding: var(--ag-space-1);
      margin: calc(var(--ag-space-1) * -1);
      border-radius: var(--ag-border-radius);
      transition: all var(--ag-transition-duration) ease;
      cursor: pointer;
    }

    .ag-breadcrumb__link:hover {
      text-decoration: underline;
    }

    /* Primary variant - blue link styling (opt-in) */
    :host([primary]) .ag-breadcrumb__link {
      color: var(--ag-primary);
    }

    :host([primary]) .ag-breadcrumb__link:hover {
      color: var(--ag-primary-dark);
      text-decoration: underline;
    }

    .ag-breadcrumb__link:focus-visible {
      outline: var(--ag-focus-width) solid var(--ag-focus);
      outline-offset: var(--ag-focus-offset);
    }

    /* Current page styling - de-emphasized */
    .ag-breadcrumb__link[aria-current="page"] {
      color: var(--ag-text-secondary);
      text-decoration: none;
      cursor: default;
    }

    .ag-breadcrumb__link[aria-current="page"]:hover {
      text-decoration: none;
    }

    /* Non-linked current page */
    .ag-breadcrumb__text {
      color: var(--ag-text-primary);
      padding: var(--ag-space-1);
      margin: calc(var(--ag-space-1) * -1);
    }
  `;

  /**
   * Array of breadcrumb items to display
   */
  @property({ type: Array })
  declare items: BreadcrumbItem[];

  /**
   * Separator style type
   */
  @property({ type: String, reflect: true })
  declare type: 'default' | 'slash' | 'bullet' | 'arrow';

  /**
   * Primary link styling - uses blue --ag-primary color (opt-in)
   */
  @property({ type: Boolean, reflect: true })
  declare primary: boolean;

  /**
   * Custom aria-label for the navigation landmark
   */
  @property({ type: String })
  declare ariaLabel: string;

  constructor() {
    super();

    // Default values
    this.items = [];
    this.type = 'default';
    this.primary = false;
    this.ariaLabel = 'Breadcrumb';
  }

  private _handleItemClick = (event: MouseEvent, item: BreadcrumbItem, index: number) => {
    // Don't prevent default for normal navigation
    // Just dispatch our custom event for additional handling
    this.dispatchEvent(new CustomEvent('breadcrumb-click', {
      detail: {
        item,
        index,
        event
      },
      bubbles: true,
      composed: true
    }));
  };

  private _renderBreadcrumbItem(item: BreadcrumbItem, index: number) {
    const isLast = index === this.items.length - 1;
    const isCurrent = item.current || isLast;

    return html`
      <li class="ag-breadcrumb__item">
        ${item.href && !isCurrent
          ? html`
              <a
                href="${item.href}"
                class="ag-breadcrumb__link"
                @click="${(e: MouseEvent) => this._handleItemClick(e, item, index)}"
              >
                ${item.label}
              </a>
            `
          : isCurrent
            ? html`
                <a
                  href="${ifDefined(item.href)}"
                  class="ag-breadcrumb__link"
                  aria-current="page"
                  @click="${(e: MouseEvent) => this._handleItemClick(e, item, index)}"
                >
                  ${item.label}
                </a>
              `
            : html`
                <span class="ag-breadcrumb__text">
                  ${item.label}
                </span>
              `
        }
      </li>
    `;
  }

  render() {
    if (!this.items || this.items.length === 0) {
      return html``;
    }

    return html`
      <nav class="ag-breadcrumb" aria-label="${this.ariaLabel}">
        <ol class="ag-breadcrumb__list">
          ${this.items.map((item, index) => this._renderBreadcrumbItem(item, index))}
        </ol>
      </nav>
    `;
  }
}