import { LitElement, html } from 'lit';
import 'agnosticui-core/progress';

export class ProgressLitExamples extends LitElement {
  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <section>
        <div class="mbe4">
          <h2>Indeterminate Progress</h2>
          <p class="mbs2 mbe3">When no <code>value</code> is provided, the progress bar is indeterminate.</p>
          <ag-progress label="Loading..."></ag-progress>
        </div>
        <div class="mbe4">
          <h2>Progress with Value</h2>
          <p class="mbs2 mbe3">Set the <code>value</code> prop to a number to show progress.</p>
          <ag-progress
            value="50"
            label="50% complete"
          ></ag-progress>
        </div>
        <div class="mbe4">
          <h2>Progress with Custom Max</h2>
          <p class="mbs2 mbe3">Set the <code>max</code> prop to a number to define the maximum value.</p>
          <ag-progress
            value="150"
            max="200"
            label="150 of 200"
          ></ag-progress>
        </div>
        <div class="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
          <p class="mbs2 mbe3">Use CSS Shadow Parts to customize the component's appearance.</p>
          <ag-progress
            value="75"
            label="Customized progress"
            class="custom-progress"
          ></ag-progress>
        </div>
      </section>

      <style>
        .custom-progress::part(ag-progress-bar) {
          background-color: var(--ag-purple-100);
          height: 1.5rem;
        }

        .custom-progress::part(ag-progress-bar)::-webkit-progress-value {
          background-color: var(--ag-purple-500);
        }

        .custom-progress::part(ag-progress-bar)::-moz-progress-bar {
          background-color: var(--ag-purple-500);
        }
      </style>
    `;
  }
}

// Register the custom element
customElements.define('progress-lit-examples', ProgressLitExamples);
