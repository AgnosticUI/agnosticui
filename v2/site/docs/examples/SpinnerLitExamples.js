import { LitElement, html } from 'lit';
import 'agnosticui-core/spinner';

export class SpinnerLitExamples extends LitElement {
  // CRITICAL: Must include createRenderRoot() to use light DOM
  // Without this, global CSS utility classes won't work!
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <section>
        <div class="mbe4">
          <h2>Default</h2>
          <ag-spinner></ag-spinner>
        </div>
        <div class="mbe4">
          <h2>Sizes</h2>
          <div
            class="flex flex-col items-center"
            style="gap: 24px"
          >
            <ag-spinner size="small"></ag-spinner>
            <ag-spinner></ag-spinner>
            <ag-spinner size="large"></ag-spinner>
            <ag-spinner size="xlarge"></ag-spinner>
          </div>
        </div>
        <div class="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
          <p class="mbs2 mbe3">
            Use CSS Shadow Parts to customize the spinner's appearance.
          </p>
          <ag-spinner class="custom-spinner"></ag-spinner>
        </div>
      </section>
    `;
  }
}

// Register the custom element (at the bottom, NOT with decorator)
customElements.define('spinner-lit-examples', SpinnerLitExamples);
