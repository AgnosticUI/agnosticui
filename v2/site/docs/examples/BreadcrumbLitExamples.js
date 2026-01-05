import { LitElement, html } from 'lit';
import 'agnosticui-core/breadcrumb';

export class BreadcrumbLitExamples extends LitElement {
  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  constructor() {
    super();
    this.items = [
      { label: 'Home', href: '#' },
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Products', href: '#products' },
    ];
  }

  firstUpdated() {
    // Set up event listeners for breadcrumb items
    const breadcrumbs = this.querySelectorAll('ag-breadcrumb');
    breadcrumbs.forEach((breadcrumb) => {
      breadcrumb.items = this.items;

      breadcrumb.addEventListener('breadcrumb-click', (event) => {
        console.log(
          `ag-breadcrumb -> breadcrumb-click -- label: ${event.detail.item.label}, href: ${event.detail.item.href}`
        );
      });
    });
  }

  render() {
    return html`
      <section>
        <!-- Default -->
        <div class="mbe4">
          <div class="mbe2">
            <h2>Default</h2>
          </div>
          <ag-breadcrumb></ag-breadcrumb>
        </div>

        <!-- Types -->
        <div class="mbe4">
          <div class="mbe2">
            <h2>Types</h2>
          </div>
          <ag-breadcrumb class="mbe4" type="slash"></ag-breadcrumb>
          <ag-breadcrumb class="mbe4" type="bullet"></ag-breadcrumb>
          <ag-breadcrumb class="mbe4" type="arrow"></ag-breadcrumb>
          <ag-breadcrumb primary type="arrow"></ag-breadcrumb>
        </div>

        <!-- CSS Shadow Parts Customization -->
        <div class="mbe4">
          <div class="mbe2">
            <h2>CSS Shadow Parts Customization</h2>
            <p style="margin-top: 0.5rem; margin-bottom: 1rem; color: var(--vp-c-text-2);">
              Breadcrumb can be customized using CSS Shadow Parts:
              <code>::part(ag-breadcrumb-item)</code>,
              <code>::part(ag-breadcrumb-item-link)</code>,
              <code>::part(ag-breadcrumb-item-current)</code>. The following are meant solely to show how to utilize CSS shadow parts to create custom breadcrumb styles. They are NOT meant to represent best practices or good taste in breadcrumb design!
            </p>
          </div>

          <div style="display: flex; flex-direction: column; gap: 2rem;">
            <div>
              <h3>Minimal with Underline</h3>
              <div class="mbe3"></div>
              <ag-breadcrumb class="custom-minimal-breadcrumb"></ag-breadcrumb>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

// Register the custom element
customElements.define('breadcrumb-lit-examples', BreadcrumbLitExamples);
