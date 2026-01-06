import { LitElement, html } from 'lit';
import 'agnosticui-core/loader';

export class LoaderLitExamples extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <section>
        <div class="mbe4">
          <h2>Default</h2>
          <ag-loader></ag-loader>
        </div>
        <div class="mbe4">
          <h2>Sizes</h2>
          <div class="flex flex-col items-center" style="gap: 24px">
            <ag-loader size="small"></ag-loader>
            <ag-loader></ag-loader>
            <ag-loader size="large"></ag-loader>
          </div>
        </div>
        <div class="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
          <p class="mbs2 mbe3">
            Use CSS Shadow Parts to customize the loader's appearance.
          </p>
          <ag-loader class="custom-loader"></ag-loader>
        </div>
      </section>
    `;
  }
}

// Register the custom element
customElements.define('loader-lit-examples', LoaderLitExamples);
