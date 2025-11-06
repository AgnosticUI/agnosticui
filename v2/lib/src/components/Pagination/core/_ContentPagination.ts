import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

/**
 * Content item for navigation
 */
export interface ContentNavigationItem {
  title: string;
  href?: string;
}

/**
 * Event detail for navigate event
 */
export interface NavigateEventDetail {
  direction: 'previous' | 'next' | 'parent';
  title: string;
  href?: string;
}

/**
 * Custom event dispatched when navigation occurs
 */
export type NavigateEvent = CustomEvent<NavigateEventDetail>;

/**
 * Props interface for ContentPagination component
 */
export interface ContentPaginationProps {
  /**
   * Previous content item
   */
  previous?: ContentNavigationItem;
  /**
   * Next content item
   */
  next?: ContentNavigationItem;
  /**
   * Parent/overview content item
   */
  parent?: ContentNavigationItem;
  /**
   * Alternative aria-label for the navigation
   */
  ariaLabel?: string;
  /**
   * Whether to display borders around navigation links
   */
  bordered?: boolean;
  /**
   * Event callback fired when navigation occurs (for SPA routing)
   */
  onNavigate?: (event: NavigateEvent) => void;
}

/**
 * ContentPagination component for navigating between content pages
 *
 * @fires {NavigateEvent} navigate - Fired when a navigation link is clicked
 * @csspart ag-content-pagination-container - The outer container element
 * @csspart ag-content-pagination-parent - The parent navigation item
 * @csspart ag-content-pagination-nav - The previous/next navigation container
 * @csspart ag-content-pagination-link - Individual navigation link/button
 *
 * @slot previous-icon - Icon for previous navigation (default: ←)
 * @slot next-icon - Icon for next navigation (default: →)
 * @slot parent-icon - Icon for parent navigation (default: ↑)
 *
 * @example
 * ```html
 * <ag-content-pagination
 *   .previous=${{ title: 'Introduction', href: '/intro' }}
 *   .next=${{ title: 'Getting Started', href: '/getting-started' }}
 *   .parent=${{ title: 'Documentation', href: '/docs' }}
 * ></ag-content-pagination>
 * ```
 */
export class ContentPagination extends LitElement implements ContentPaginationProps {
  @property({ type: Object, attribute: false })
  declare previous?: ContentNavigationItem;

  @property({ type: Object, attribute: false })
  declare next?: ContentNavigationItem;

  @property({ type: Object, attribute: false })
  declare parent?: ContentNavigationItem;

  @property({ type: String, attribute: 'aria-label' })
  declare ariaLabel: string;

  @property({ type: Boolean, reflect: true })
  declare bordered: boolean;

  @property({ attribute: false })
  declare onNavigate?: (event: NavigateEvent) => void;

  @property({ type: Boolean, reflect: true, attribute: 'has-parent' })
  private _hasParentAndChild = false;

  constructor() {
    super();
    this.ariaLabel = 'content navigation';
    this.bordered = false;
  }

  willUpdate(changedProperties: Map<string, unknown>) {
    if (changedProperties.has('parent') || changedProperties.has('previous') || changedProperties.has('next')) {
      this._hasParentAndChild = !!this.parent && (!!this.previous || !!this.next);
    }
  }

  private _renderChevronIcon(rotationClass = '') {
    return html`<svg aria-hidden="true" fill="none" focusable="false" height="20" role="presentation" viewBox="0 0 24 24" width="20" class="${rotationClass} text-primary"><path d="M15.5 19l-7-7 7-7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></svg>`;
  }

  private _handleNavigate(
    direction: 'previous' | 'next' | 'parent',
    item: ContentNavigationItem | undefined,
    event: MouseEvent
  ) {
    if (!item) return; // safeguard for TypeScript & eslint

    // If href is provided and no custom handler, let browser handle it
    if (item.href && !this.onNavigate) {
      return;
    }

    if (this.onNavigate) {
      event.preventDefault();
    }

    const navigateEvent = new CustomEvent<NavigateEventDetail>('navigate', {
      detail: {
        direction,
        title: item.title,
        href: item.href,
      },
      bubbles: true,
      composed: true,
    });

    this.dispatchEvent(navigateEvent);

    if (this.onNavigate) {
      this.onNavigate(navigateEvent);
    }
  }


  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .rotate-180 {
        transform: rotate(180deg);
    }

    .content-pagination-container {
      display: flex;
      flex-direction: column;
      gap: var(--ag-space-1);
    }

    .content-pagination-parent {
      display: flex;
      align-items: center;
      padding: var(--ag-space-2) var(--ag-space-5);
      border-radius: var(--ag-radius-md);
    }

    .content-pagination-parent-link {
      display: flex;
      align-items: center;
      gap: var(--ag-space-1);
      color: var(--ag-text-primary);
      text-decoration: none;
      font-size: var(--ag-font-size-sm);
      font-weight: 500;
      cursor: pointer;
      background: none;
      border: none;
      font-family: inherit;
    }

    .content-pagination-parent-link:hover {
      color: var(--ag-primary);
    }

    .content-pagination-parent-link:focus-visible {
      outline: var(--ag-focus-width) solid rgba(var(--ag-focus), 0.5);
      outline-offset: var(--ag-focus-offset);
      border-radius: var(--ag-radius-sm);
    }

    .content-pagination-nav {
      display: flex;
      justify-content: space-between;
      gap: var(--ag-space-4);
      padding-top: var(--ag-space-2);
      border-top: 0px solid transparent;
    }

    .content-pagination-nav-with-parent {
      border-top: 1px solid var(--ag-border);
    }

    .content-pagination-item {
      display: flex;
      flex: 0 1 auto;
      min-width: 0;
      max-width: 45%;
    }

    .content-pagination-item-previous {
      justify-content: flex-start;
    }

    .content-pagination-item-next {
      justify-content: flex-end;
      margin-left: auto;
    }

    .content-pagination-link {
      display: flex;
      align-items: center;
      gap: var(--ag-space-2, 0.5rem);
      padding: var(--ag-space-3) var(--ag-space-4);
      border-radius: var(--ag-radius-md);
      background-color: var(--ag-background-primary);
      color: var(--ag-text-primary);
      text-decoration: none;
      font-size: var(--ag-font-size-base);
      font-weight: 500;
      cursor: pointer;
      transition: all 0.15s ease-in-out;
      font-family: inherit;
      min-width: 0;
    }

    :host([bordered]) .content-pagination-link {
      border: 1px solid var(--ag-border);
    }
    
    .content-pagination-link:hover {
      background-color: var(--ag-background-secondary);
      color: var(--ag-primary);
    }

    .content-pagination-link:focus-visible {
      outline: var(--ag-focus-width) solid rgba(var(--ag-focus), 0.5);
      outline-offset: var(--ag-focus-offset);
    }

    .content-pagination-link:active {
      transform: translateY(1px);
    }

    button.content-pagination-link {
      background-color: transparent;
      border: 0;
    }

    :host([bordered]) button.content-pagination-link {
      border: 1px solid var(--ag-border);
    }

    .content-pagination-title {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      min-width: 0;
    }

    .content-pagination-icon {
      flex-shrink: 0;
      font-size: 1.25em;
      line-height: 1;
    }

    /* Responsive: stack on very small screens */
    @media (max-width: 640px) {
      .content-pagination-nav {
        flex-direction: column;
        gap: var(--ag-space-3);
      }

      .content-pagination-item {
        max-width: 100%;
      }

      .content-pagination-item-next {
        margin-left: 0;
      }
    }

    @media (prefers-reduced-motion) {
      .content-pagination-link {
        transition: none;
      }

      .content-pagination-link:active {
        transform: none;
      }
    }
  `;

  render() {
    return html`
      <nav
        class="content-pagination-container"
        part="ag-content-pagination-container"
        aria-label=${this.ariaLabel}
      >
        ${this.parent
          ? html`
              <div
                class="content-pagination-parent"
                part="ag-content-pagination-parent"
              >
                ${this.parent.href
                  ? html`
                      <a
                        href=${this.parent.href}
                        class="content-pagination-parent-link"
                        part="ag-content-pagination-link"
                        aria-label="Up to: ${this.parent.title}"
                        @click=${(e: MouseEvent) =>
                          this._handleNavigate('parent', this.parent, e)}
                      >
                        <span class="content-pagination-icon">
                          <slot name="parent-icon">${String.fromCharCode(8593)}</slot>
                        </span>
                        <span>${this.parent.title}</span>
                      </a>
                    `
                  : html`
                      <button
                        type="button"
                        class="content-pagination-parent-link"
                        part="ag-content-pagination-link"
                        aria-label="Up to: ${this.parent.title}"
                        @click=${(e: MouseEvent) =>
                          this._handleNavigate('parent', this.parent, e)}
                      >
                        <span class="content-pagination-icon">
                          <slot name="parent-icon">${String.fromCharCode(8593)}</slot>
                        </span>
                        <span>${this.parent.title}</span>
                      </button>
                    `}
              </div>
            `
          : ''}

        <div
          class="content-pagination-nav ${this._hasParentAndChild ? 'content-pagination-nav-with-parent' : ''}"
          part="ag-content-pagination-nav"
        >
          ${this.previous
            ? html`
                <div class="content-pagination-item content-pagination-item-previous">
                  ${this.previous.href
                    ? html`
                        <a
                          href=${this.previous.href}
                          class="content-pagination-link"
                          part="ag-content-pagination-link"
                          aria-label="Previous: ${this.previous.title}"
                          @click=${(e: MouseEvent) =>
                            this._handleNavigate('previous', this.previous, e)}
                        >
                          <span class="content-pagination-icon">
                            <slot name="previous-icon">${this._renderChevronIcon()}</slot>
                          </span>
                          <span class="content-pagination-title">${this.previous.title}</span>
                        </a>
                      `
                    : html`
                        <button
                          type="button"
                          class="content-pagination-link"
                          part="ag-content-pagination-link"
                          aria-label="Previous: ${this.previous.title}"
                          @click=${(e: MouseEvent) =>
                            this._handleNavigate('previous', this.previous, e)}
                        >
                          <span class="content-pagination-icon">
                            <slot name="previous-icon">${this._renderChevronIcon()}</slot>
                          </span>
                          <span class="content-pagination-title">${this.previous.title}</span>
                        </button>
                      `}
                </div>
              `
            : html`<div class="content-pagination-item"></div>`}

          ${this.next
            ? html`
                <div class="content-pagination-item content-pagination-item-next">
                  ${this.next.href
                    ? html`
                        <a
                          href=${this.next.href}
                          class="content-pagination-link"
                          part="ag-content-pagination-link"
                          aria-label="Next: ${this.next.title}"
                          @click=${(e: MouseEvent) =>
                            this._handleNavigate('next', this.next, e)}
                        >
                          <span class="content-pagination-title">${this.next.title}</span>
                          <span class="content-pagination-icon">
                            <slot name="next-icon">${this._renderChevronIcon('rotate-180')}</slot>
                          </span>
                        </a>
                      `
                    : html`
                        <button
                          type="button"
                          class="content-pagination-link"
                          part="ag-content-pagination-link"
                          aria-label="Next: ${this.next.title}"
                          @click=${(e: MouseEvent) =>
                            this._handleNavigate('next', this.next, e)}
                        >
                          <span class="content-pagination-title">${this.next.title}</span>
                          <span class="content-pagination-icon">
                            <slot name="next-icon">${this._renderChevronIcon('rotate-180')}</slot>
                          </span>
                        </button>
                      `}
                </div>
              `
            : html`<div class="content-pagination-item"></div>`}
        </div>
      </nav>
    `;
  }
}
