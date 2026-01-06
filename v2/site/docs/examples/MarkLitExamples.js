import { LitElement, html } from 'lit';
import 'agnosticui-core/mark';
import 'agnosticui-core/input';
import 'agnosticui-core/toggle';

export class MarkLitExamples extends LitElement {
  createRenderRoot() {
    return this;
  }

  static get properties() {
    return {
      searchTerm: { type: String, state: true },
      caseSensitive: { type: Boolean, state: true },
      matchAll: { type: Boolean, state: true },
    };
  }

  constructor() {
    super();
    this.searchTerm = 'fox';
    this.caseSensitive = false;
    this.matchAll = true;
  }

  handleSearchInput(event) {
    this.searchTerm = event.detail.value;
  }

  handleCaseSensitiveChange(event) {
    this.caseSensitive = event.detail.checked;
  }

  handleMatchAllChange(event) {
    this.matchAll = event.detail.checked;
  }

  render() {
    return html`
      <section class="mbe4">
        <h2>Mark Variants</h2>
        <div class="flex flex-wrap items-center">
          <div class="mis3 mie3">
            <ag-mark variant="warning">warning</ag-mark>
          </div>
          <div class="mis3 mie3">
            <ag-mark variant="info">info</ag-mark>
          </div>
          <div class="mis3 mie3">
            <ag-mark variant="success">success</ag-mark>
          </div>
          <div class="mis3 mie3">
            <ag-mark variant="error">error</ag-mark>
          </div>
          <div class="mis3 mie3">
            <ag-mark variant="primary">primary</ag-mark>
          </div>
          <div class="mis3 mie3">
            <ag-mark variant="secondary">secondary</ag-mark>
          </div>
          <div class="mis3 mie3">
            <ag-mark variant="monochrome">monochrome</ag-mark>
          </div>
        </div>
      </section>
      <section class="mbe4">
        <h2>Reactive Highlighting</h2>
        <div class="flex items-center mbe4">
          <ag-input
            class="full-width"
            .value=${this.searchTerm}
            label="Enter text to highlight"
            type="text"
            @input=${this.handleSearchInput}
          ></ag-input>
        </div>
        <div class="flex items-center mbe3">
          <ag-toggle
            .checked=${this.caseSensitive}
            label="Case sensitive"
            @change=${this.handleCaseSensitiveChange}
          ></ag-toggle>
          <span class="mis2">Case sensitive</span>
        </div>
        <div class="flex items-center mbe3">
          <ag-toggle
            .checked=${this.matchAll}
            label="Match all"
            @change=${this.handleMatchAllChange}
          ></ag-toggle>
          <span class="mis2">Match all</span>
        </div>
        <div class="mbe4">
          <p>
            <ag-mark
              search=${this.searchTerm}
              ?caseSensitive=${this.caseSensitive}
              ?matchAll=${this.matchAll}
              variant="warning"
            >
              The quick brown fox jumps over the lazy dog. The lazy fox was not the same as the other fox.
            </ag-mark>
          </p>
        </div>
      </section>
    `;
  }
}

// Register the custom element
customElements.define('mark-lit-examples', MarkLitExamples);
