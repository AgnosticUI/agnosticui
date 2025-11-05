import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

export type PaginationOffset = 1 | 2;
export type PaginationJustify = 'start' | 'center' | 'end' | '';
export type PaginationGap = '...';
export type PageArrayItem = number | PaginationGap;

/**
 * Event detail for page-change event
 */
export interface PageChangeEventDetail {
  page: number;
  pages: PageArrayItem[];
}

/**
 * Custom event dispatched when the page changes
 */
export type PageChangeEvent = CustomEvent<PageChangeEventDetail>;

/**
 * Navigation labels for first, previous, next, last buttons
 */
export interface NavigationLabels {
  first: string;
  previous: string;
  next: string;
  last: string;
}

/**
 * Props interface for Pagination component including event handlers
 */
export interface PaginationProps {
  /**
   * Current active page (1-indexed)
   */
  current?: number;
  /**
   * Total number of pages
   */
  totalPages?: number;
  /**
   * Number of page buttons to show on each side of current page
   */
  offset?: PaginationOffset;
  /**
   * Horizontal alignment of pagination controls
   */
  justify?: PaginationJustify;
  /**
   * Alternative aria-label for the navigation
   */
  ariaLabel?: string;
  /**
   * Show bordered style (outline instead of solid background for active page)
   */
  bordered?: boolean;
  /**
   * Show first/last page navigation buttons
   */
  firstLastNavigation?: boolean;
  /**
   * Custom labels for navigation buttons
   */
  navigationLabels?: NavigationLabels;
  /**
   * Event callback fired when page changes
   */
  onPageChange?: (event: PageChangeEvent) => void;
}

/**
 * Pagination component for navigating through pages of content
 *
 * @fires {PageChangeEvent} page-change - Fired when the active page changes
 * @csspart ag-pagination-container - The outer container element
 * @csspart ag-pagination - The pagination list element
 * @csspart ag-pagination-item - Individual pagination item wrapper
 * @csspart ag-pagination-button - Individual pagination button
 *
 * @example
 * ```html
 * <ag-pagination
 *   current="5"
 *   total-pages="20"
 *   bordered
 *   @page-change=${handlePageChange}
 * ></ag-pagination>
 * ```
 */
export class Pagination extends LitElement implements PaginationProps {
  @property({ type: Number })
  declare current: number;

  @property({ type: Number, attribute: 'total-pages' })
  declare totalPages: number;

  @property({ type: Number })
  declare offset: PaginationOffset;

  @property({ type: String })
  declare justify: PaginationJustify;

  @property({ type: String, attribute: 'aria-label' })
  declare ariaLabel: string;

  @property({ type: Boolean, reflect: true })
  declare bordered: boolean;

  @property({ type: Boolean, reflect: true, attribute: 'first-last-navigation' })
  declare firstLastNavigation: boolean;

  @property({ type: Object, attribute: false })
  declare navigationLabels: NavigationLabels;

  @property({ attribute: false })
  declare onPageChange?: (event: PageChangeEvent) => void;

  constructor() {
    super();
    this.current = 1;
    this.totalPages = 1;
    this.offset = 2;
    this.justify = '';
    this.ariaLabel = 'pagination';
    this.bordered = false;
    this.firstLastNavigation = true;
    this.navigationLabels = {
      first: 'First',
      previous: 'Previous',
      next: 'Next',
      last: 'Last',
    };
  }

  get _pages(): PageArrayItem[] {
    return this._generatePages();
  }

  updated(changedProperties: Map<string, unknown>) {
    if (
      changedProperties.has('current') ||
      changedProperties.has('totalPages') ||
      changedProperties.has('offset')
    ) {
      // Focus current page button after update using querySelector
      this.updateComplete.then(() => {
        const currentButton = this.shadowRoot?.querySelector(
          `button[data-page="${this.current}"]`
        ) as HTMLButtonElement;
        if (currentButton) {
          currentButton.focus();
        }
      });
    }
  }

  private _generatePages(): PageArrayItem[] {
    if (this.totalPages <= 1) {
      return [1];
    }

    if (this.offset === 1) {
      return this._generatePagingPaddedByOne(this.current, this.totalPages);
    }
    return this._generatePagingPaddedByTwo(this.current, this.totalPages);
  }

  private _getPaddedArray(
    filtered: PageArrayItem[],
    shouldIncludeLeftDots: boolean,
    shouldIncludeRightDots: boolean,
    totalCount: number
  ): PageArrayItem[] {
    if (shouldIncludeLeftDots) {
      filtered.unshift('...');
    }
    if (shouldIncludeRightDots) {
      filtered.push('...');
    }
    if (totalCount <= 1) {
      return [1];
    }
    return [1, ...filtered, totalCount];
  }

  private _generatePagingPaddedByOne(
    current: number,
    totalPageCount: number
  ): PageArrayItem[] {
    const center = [current - 1, current, current + 1];
    const filteredCenter: PageArrayItem[] = center.filter(
      (p) => p > 1 && p < totalPageCount
    );
    const includeLeftDots = current > 3;
    const includeRightDots = current < totalPageCount - 2;
    return this._getPaddedArray(
      filteredCenter,
      includeLeftDots,
      includeRightDots,
      totalPageCount
    );
  }

  private _generatePagingPaddedByTwo(
    current: number,
    totalPageCount: number
  ): PageArrayItem[] {
    const center = [current - 2, current - 1, current, current + 1, current + 2];
    const filteredCenter: PageArrayItem[] = center.filter(
      (p) => p > 1 && p < totalPageCount
    );
    const includeThreeLeft = current === 5;
    const includeThreeRight = current === totalPageCount - 4;
    const includeLeftDots = current > 5;
    const includeRightDots = current < totalPageCount - 4;

    if (includeThreeLeft) {
      filteredCenter.unshift(2);
    }
    if (includeThreeRight) {
      filteredCenter.push(totalPageCount - 1);
    }

    return this._getPaddedArray(
      filteredCenter,
      includeLeftDots,
      includeRightDots,
      totalPageCount
    );
  }

  private _handlePageChange(pageNumber: number) {
    if (pageNumber < 1 || pageNumber > this.totalPages || pageNumber === this.current) {
      return;
    }

    // Store pages before updating current (since _pages is a getter that depends on current)
    const pages = this._pages;

    // Update current page
    this.current = pageNumber;

    // Dual-dispatch: dispatchEvent + callback
    const pageChangeEvent = new CustomEvent<PageChangeEventDetail>('page-change', {
      detail: {
        page: pageNumber,
        pages: pages,
      },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(pageChangeEvent);

    // Invoke callback if provided
    if (this.onPageChange) {
      this.onPageChange(pageChangeEvent);
    }
  }

  private _getJustifyClass(): string {
    switch (this.justify) {
      case 'start':
        return 'pagination-start';
      case 'center':
        return 'pagination-center';
      case 'end':
        return 'pagination-end';
      default:
        return '';
    }
  }

  static styles = css`
    :host {
      display: block;
    }

    .pagination-container {
      display: flex;
    }

    .pagination-center {
      justify-content: center;
    }

    .pagination-start {
      justify-content: flex-start;
    }

    .pagination-end {
      justify-content: flex-end;
    }

    .pagination {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .pagination-item {
      padding-inline-start: var(--ag-space-1);
      padding-inline-end: var(--ag-space-1);
    }

    .pagination-button {
      color: var(--ag-primary);
      display: inline-block;
      line-height: var(--ag-line-height-4);
      padding-inline-start: var(--ag-space-3);
      padding-inline-end: var(--ag-space-3);
      padding-block-start: var(--ag-space-2);
      padding-block-end: var(--ag-space-2);
      border-radius: var(--ag-radius-md);
      border: var(--ag-border-width-1) solid transparent;
      background-color: transparent;
      cursor: pointer;
      font: inherit;
    }

    .pagination-button:focus-visible {
      outline: var(--ag-focus-width) solid rgba(var(--ag-focus), 0.5);
      outline-offset: var(--ag-focus-offset);
    }

    @media (prefers-reduced-motion), (update: slow) {
      .pagination-button:focus-visible {
        transition-duration: 0.001ms !important;
      }
    }

    .pagination-item-disabled {
      cursor: not-allowed;
    }

    .pagination-button:disabled,
    .pagination-item-disabled .pagination-button {
      color: var(--ag-text-disabled);
      opacity: 0.8;
      pointer-events: none;
    }

    .pagination-item-active .pagination-button {
      background-color: var(--ag-primary);
      color: var(--ag-text-on-primary);
    }

    :host([bordered]) .pagination-item-active .pagination-button {
      background-color: transparent;
      border: var(--ag-border-width-1) solid var(--ag-primary);
      color: var(--ag-primary);
    }

    .pagination-item:hover .pagination-button {
      text-decoration: none;
    }

    .pagination-item:not(.pagination-item-active):not(.pagination-item-disabled):hover
      .pagination-button {
      background-color: var(--ag-background-secondary);
    }

    .pagination-item-gap {
      display: flex;
      align-items: center;
      transform: translateY(var(--ag-space-1));
    }
  `;

  render() {
    const justifyClass = this._getJustifyClass();
    const pages = this._pages.length > 0 ? this._pages : [1];
    const labels = this.navigationLabels || {
      first: 'First',
      previous: 'Previous',
      next: 'Next',
      last: 'Last',
    };

    return html`
      <nav
        class="pagination-container ${justifyClass}"
        part="ag-pagination-container"
        aria-label=${this.ariaLabel}
      >
        <ul class="pagination" part="ag-pagination">
          ${this.firstLastNavigation
            ? html`
                <li
                  class="pagination-item ${this.current === 1
                    ? 'pagination-item-disabled'
                    : ''}"
                  part="ag-pagination-item"
                >
                  <button
                    class="pagination-button"
                    part="ag-pagination-button"
                    type="button"
                    @click=${() => this._handlePageChange(1)}
                    ?disabled=${this.current === 1}
                    aria-disabled=${this.current === 1 ? 'true' : 'false'}
                    aria-label="Goto page 1"
                  >
                    ${String.fromCharCode(171)} ${labels.first}
                  </button>
                </li>
              `
            : ''}
          <li
            class="pagination-item ${this.current === 1
              ? 'pagination-item-disabled'
              : ''}"
            part="ag-pagination-item"
          >
            <button
              class="pagination-button"
              part="ag-pagination-button"
              type="button"
              @click=${() => this._handlePageChange(this.current - 1)}
              ?disabled=${this.current === 1}
              aria-disabled=${this.current === 1 ? 'true' : 'false'}
              aria-label="Goto previous page"
            >
              ${String.fromCharCode(8249)} ${labels.previous}
            </button>
          </li>
          ${pages.map((page) =>
            page !== '...'
              ? html`
                  <li
                    class="pagination-item ${this.current === page
                      ? 'pagination-item-active'
                      : ''}"
                    part="ag-pagination-item"
                  >
                    <button
                      data-page="${page}"
                      @click=${() => this._handlePageChange(page as number)}
                      type="button"
                      class="pagination-button"
                      part="ag-pagination-button"
                      aria-current=${this.current === page ? 'page' : 'false'}
                      aria-label=${this.current === page
                        ? `Page ${page}, current page`
                        : `Goto page ${page}`}
                    >
                      ${page}
                    </button>
                  </li>
                `
              : html`
                  <li
                    class="pagination-item pagination-item-gap"
                    part="ag-pagination-item"
                  >
                    <span>${page}</span>
                  </li>
                `
          )}
          <li
            class="pagination-item ${this.current === this.totalPages
              ? 'pagination-item-disabled'
              : ''}"
            part="ag-pagination-item"
          >
            <button
              class="pagination-button"
              part="ag-pagination-button"
              type="button"
              @click=${() => this._handlePageChange(this.current + 1)}
              ?disabled=${this.current === this.totalPages}
              aria-disabled=${this.current === this.totalPages ? 'true' : 'false'}
              aria-label="Goto next page"
            >
              ${labels.next} ${String.fromCharCode(8250)}
            </button>
          </li>
          ${this.firstLastNavigation
            ? html`
                <li
                  class="pagination-item ${this.current === this.totalPages
                    ? 'pagination-item-disabled'
                    : ''}"
                  part="ag-pagination-item"
                >
                  <button
                    type="button"
                    class="pagination-button"
                    part="ag-pagination-button"
                    @click=${() => this._handlePageChange(this.totalPages)}
                    ?disabled=${this.current === this.totalPages}
                    aria-disabled=${this.current === this.totalPages ? 'true' : 'false'}
                    aria-label="Goto last page"
                  >
                    ${labels.last} ${String.fromCharCode(187)}
                  </button>
                </li>
              `
            : ''}
        </ul>
      </nav>
    `;
  }
}
