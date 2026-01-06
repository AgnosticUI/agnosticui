import { LitElement, html } from 'lit';
import 'agnosticui-core/content-pagination';

export class ContentPaginationLitExamples extends LitElement {
  static properties = {
    navigationMessage: { type: String },
    navigationMessageNoHref: { type: String }
  };

  constructor() {
    super();
    this.navigationMessage = null;
    this.navigationMessageNoHref = null;
  }

  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  handleNavigate(e) {
    this.navigationMessage = `Clicked ${e.detail.type}: "${e.detail.item.title}"${
      e.detail.item.href ? ` → ${e.detail.item.href}` : " (no href)"
    }`;
    console.log("Navigate:", e.detail);
  }

  handleNavigateNoHref(e) {
    this.navigationMessageNoHref = `Clicked ${e.detail.type}: "${e.detail.item.title}" (no href provided)`;
    console.log("Navigate (no href):", e.detail);
  }

  render() {
    return html`
      <section>
        <div class="mbe4">
          <h2>Basic Content Pagination</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-content-pagination
            previous='{"title":"Introduction","href":"#examples-1"}'
            next='{"title":"Getting Started","href":"#examples-1"}'
            parent='{"title":"Documentation","href":"#examples-1"}'
            @navigate=${this.handleNavigate}
          ></ag-content-pagination>
          ${this.navigationMessage ? html`
            <p style="margin: 0; padding: 0; font-size: var(--ag-font-size-sm); color: var(--ag-text-secondary);">
              ${this.navigationMessage}
            </p>
          ` : ''}
        </div>

        <div class="mbe4">
          <h2>Without hrefs (navigate event only)</h2>
        </div>
        <p>
          Links without href still fire navigate events:
        </p>
        <div class="stacked-mobile mbe4">
          <ag-content-pagination
            previous='{"title":"Introduction"}'
            next='{"title":"Getting Started"}'
            parent='{"title":"Documentation"}'
            @navigate=${this.handleNavigateNoHref}
          ></ag-content-pagination>
          ${this.navigationMessageNoHref ? html`
            <p style="margin: 0; padding: 0; font-size: var(--ag-font-size-sm); color: var(--ag-text-secondary);">
              ${this.navigationMessageNoHref}
            </p>
          ` : ''}
        </div>

        <div class="mbe4">
          <h2>Previous and Next Only</h2>
        </div>
        <p>
          Omit parent link for simpler sequential navigation:
        </p>
        <div class="stacked-mobile mbe4">
          <ag-content-pagination
            previous='{"title":"Chapter 1: Basics","href":"#examples-1"}'
            next='{"title":"Chapter 3: Advanced","href":"#examples-1"}'
          ></ag-content-pagination>
        </div>

        <div class="mbe4">
          <h2>Parent Only</h2>
        </div>
        <p>
          Show only the parent/overview link:
        </p>
        <div class="stacked-mobile mbe4">
          <ag-content-pagination
            parent='{"title":"Back to Documentation","href":"#examples-1"}'
          ></ag-content-pagination>
        </div>

        <div class="mbe4">
          <h2>Bordered Style</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-content-pagination
            previous='{"title":"Installation","href":"#examples-1"}'
            next='{"title":"Configuration","href":"#examples-1"}'
            parent='{"title":"Guides","href":"#examples-1"}'
            bordered
          ></ag-content-pagination>
        </div>

        <div class="mbe4">
          <h2>Custom Icons</h2>
        </div>
        <p>
          Override default icons using slots:
        </p>
        <div class="stacked-mobile mbe4">
          <ag-content-pagination
            previous='{"title":"Prev Page","href":"#examples-1"}'
            next='{"title":"Next Page","href":"#examples-1"}'
            parent='{"title":"Overview","href":"#examples-1"}'
          >
            <span slot="previous-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </span>
            <span slot="next-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </span>
            <span slot="parent-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            </span>
          </ag-content-pagination>
        </div>

        <div class="mbe4">
          <h2>Only Next</h2>
        </div>
        <p>
          First page scenario - only show next link:
        </p>
        <div class="stacked-mobile mbe4">
          <ag-content-pagination
            next='{"title":"Getting Started","href":"#examples-1"}'
            parent='{"title":"Documentation","href":"#examples-1"}'
          ></ag-content-pagination>
        </div>

        <div class="mbe4">
          <h2>Only Previous</h2>
        </div>
        <p>
          Last page scenario - only show previous link:
        </p>
        <div class="stacked-mobile mbe4">
          <ag-content-pagination
            previous='{"title":"Deployment","href":"#examples-1"}'
            parent='{"title":"Documentation","href":"#examples-1"}'
          ></ag-content-pagination>
        </div>

        <div class="mbe4">
          <h2>CSS Shadow Parts Customization (Monochrome)</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-content-pagination
            class="monochrome-custom-content-pagination"
            previous='{"title":"Introduction","href":"#examples-1"}'
            next='{"title":"Getting Started","href":"#examples-1"}'
            parent='{"title":"Documentation","href":"#examples-1"}'
          >
            <span slot="previous-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </span>
            <span slot="next-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </span>
            <span slot="parent-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            </span>
          </ag-content-pagination>
        </div>
      </section>

      <style>
        .monochrome-custom-content-pagination::part(ag-content-pagination-container) {
          padding: 1.5rem;
          background: #000000;
          border-radius: 12px;
        }
        .monochrome-custom-content-pagination::part(ag-content-pagination-parent) {
          border-radius: 8px;
          transition: all 0.2s ease;
          padding: 0;
        }
        .monochrome-custom-content-pagination::part(ag-content-pagination-parent):hover {
          font-weight: 700;
          text-decoration: underline;
          text-underline-offset: 3px;
          transform: translateY(-1px);
        }
        .monochrome-custom-content-pagination::part(ag-content-pagination-link) {
          padding: var(--ag-space-3) var(--ag-space-4);
          background: transparent;
          color: #ffffff;
          border-radius: 8px;
          transition: all 0.2s ease;
          font-weight: 400;
        }
        .monochrome-custom-content-pagination::part(ag-content-pagination-link):hover {
          background: #1a1a1a;
          font-weight: 600;
          text-decoration: underline;
          text-underline-offset: 3px;
          transform: translateY(-2px);
        }
      </style>
    `;
  }
}

// Register the custom element
customElements.define('content-pagination-lit-examples', ContentPaginationLitExamples);
