import { LitElement, html } from 'lit';
import 'agnosticui-core/pagination';

export class PaginationLitExamples extends LitElement {
  static properties = {
    basicPageFirstLast: { type: Number },
    basicPage: { type: Number },
    basicPageMessage: { type: String },
    basicPageMessageFirstLast: { type: String },
    borderedPage: { type: Number },
    offset2Page: { type: Number },
    offset1Page: { type: Number },
    spanishPage: { type: Number },
    smallPage: { type: Number },
    largePage: { type: Number },
    monochromeCustomPage: { type: Number }
  };

  constructor() {
    super();
    this.basicPageFirstLast = 5;
    this.basicPage = 5;
    this.basicPageMessage = null;
    this.basicPageMessageFirstLast = null;
    this.borderedPage = 3;
    this.offset2Page = 25;
    this.offset1Page = 25;
    this.spanishPage = 1;
    this.smallPage = 3;
    this.largePage = 50;
    this.monochromeCustomPage = 5;
  }

  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  handleBasicPageChangeFirstLast(e) {
    this.basicPageFirstLast = e.detail.page;
    this.basicPageMessageFirstLast = `Current page: ${e.detail.page} of 20`;
  }

  handleBasicPageChange(e) {
    this.basicPage = e.detail.page;
    this.basicPageMessage = `Current page: ${e.detail.page} of 20`;
  }

  handleBorderedPageChange(e) {
    this.borderedPage = e.detail.page;
  }

  handleOffset2PageChange(e) {
    this.offset2Page = e.detail.page;
  }

  handleOffset1PageChange(e) {
    this.offset1Page = e.detail.page;
  }

  handleSpanishPageChange(e) {
    this.spanishPage = e.detail.page;
  }

  handleSmallPageChange(e) {
    this.smallPage = e.detail.page;
  }

  handleLargePageChange(e) {
    this.largePage = e.detail.page;
  }

  handleMonochromeCustomPageChange(e) {
    this.monochromeCustomPage = e.detail.page;
  }

  render() {
    return html`
      <section>
        <div class="mbe4">
          <h2>Basic Pagination</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-pagination
            current=${this.basicPage}
            total-pages="20"
            @page-change=${this.handleBasicPageChange}
          ></ag-pagination>
          ${this.basicPageMessage ? html`
            <p style="margin: 0; padding: 0; font-size: var(--ag-font-size-sm); color: var(--ag-text-secondary);">
              ${this.basicPageMessage}
            </p>
          ` : ''}
        </div>

        <div class="mbe4">
          <h2>First Last Navigation Opt-In</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-pagination
            current=${this.basicPageFirstLast}
            total-pages="20"
            first-last-navigation
            @page-change=${this.handleBasicPageChangeFirstLast}
          ></ag-pagination>
          ${this.basicPageMessageFirstLast ? html`
            <p style="margin: 0; padding: 0; font-size: var(--ag-font-size-sm); color: var(--ag-text-secondary);">
              ${this.basicPageMessageFirstLast}
            </p>
          ` : ''}
        </div>

        <div class="mbe4">
          <h2>Bordered Style</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-pagination
            current=${this.borderedPage}
            total-pages="15"
            bordered
            @page-change=${this.handleBorderedPageChange}
          ></ag-pagination>
        </div>

        <div class="mbe4">
          <h2>Offset Comparison</h2>
        </div>
        <p>
          Offset 2 (default) - shows 2 buttons on each side:
        </p>
        <div class="stacked-mobile mbe4">
          <ag-pagination
            current=${this.offset2Page}
            total-pages="50"
            offset="2"
            @page-change=${this.handleOffset2PageChange}
          ></ag-pagination>
        </div>
        <p style="margin: 1rem 0 0.5rem; font-size: 0.875rem; color: var(--ag-text-secondary);">
          Offset 1 - shows 1 button on each side:
        </p>
        <div class="stacked-mobile mbe4">
          <ag-pagination
            current=${this.offset1Page}
            total-pages="50"
            offset="1"
            @page-change=${this.handleOffset1PageChange}
          ></ag-pagination>
        </div>

        <div class="mbe4">
          <h2>Alignment Options</h2>
        </div>
        <p>
          Justify 'start', 'center', and 'end' respectively:
        </p>
        <div class="stacked-mobile mbe4">
          <ag-pagination
            current="1"
            total-pages="10"
            justify="start"
          ></ag-pagination>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-pagination
            current="1"
            total-pages="10"
            justify="center"
          ></ag-pagination>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-pagination
            current="1"
            total-pages="10"
            justify="end"
          ></ag-pagination>
        </div>

        <div class="mbe4">
          <h2>Custom Navigation Labels (Spanish)</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-pagination
            current=${this.spanishPage}
            total-pages="10"
            first-last-navigation
            navigation-labels='{"first":"Primera","previous":"Anterior","next":"Siguiente","last":"Última"}'
            @page-change=${this.handleSpanishPageChange}
          ></ag-pagination>
        </div>

        <div class="mbe4">
          <h2>Small Page Count</h2>
        </div>
        <p>
          When there are few pages, all page numbers are shown:
        </p>
        <div class="stacked-mobile mbe4">
          <ag-pagination
            current=${this.smallPage}
            total-pages="5"
            @page-change=${this.handleSmallPageChange}
          ></ag-pagination>
        </div>

        <div class="mbe4">
          <h2>Large Page Count</h2>
        </div>
        <p>
          With many pages, ellipsis (...) indicates skipped pages:
        </p>
        <div class="stacked-mobile mbe4">
          <ag-pagination
            current=${this.largePage}
            total-pages="100"
            @page-change=${this.handleLargePageChange}
          ></ag-pagination>
        </div>

        <div class="mbe4">
          <h2>CSS Shadow Parts Customization (Monochrome)</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-pagination
            class="monochrome-custom-pagination"
            current=${this.monochromeCustomPage}
            total-pages="10"
            @page-change=${this.handleMonochromeCustomPageChange}
          ></ag-pagination>
        </div>
      </section>

      <style>
        .monochrome-custom-pagination::part(ag-pagination-container) {
          padding: 1rem;
          background: #000000;
          border-radius: 12px;
        }
        .monochrome-custom-pagination::part(ag-pagination) {
          gap: 0.25rem;
        }
        .monochrome-custom-pagination::part(ag-pagination-button) {
          min-width: 2.5rem;
          height: 2.5rem;
          background: transparent;
          color: #ffffff;
          border: 1px solid #404040;
          font-weight: 400;
          transition: all 0.2s ease;
        }
        .monochrome-custom-pagination::part(ag-pagination-button):hover:not(:disabled) {
          background: #1a1a1a;
          border-color: #ffffff;
          font-weight: 600;
          transform: translateY(-1px);
        }
        .monochrome-custom-pagination .pagination-item-active .pagination-button {
          background: #ffffff !important;
          color: #000000 !important;
          font-weight: 600;
          border-color: #ffffff;
        }
        .monochrome-custom-pagination::part(ag-pagination-button):disabled {
          background: transparent;
          color: #404040;
          border-color: #262626;
        }
      </style>
    `;
  }
}

// Register the custom element
customElements.define('pagination-lit-examples', PaginationLitExamples);
