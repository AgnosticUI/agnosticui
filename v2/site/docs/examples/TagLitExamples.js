import { LitElement, html } from 'lit';
import 'agnosticui-core/tag';

export class TagLitExamples extends LitElement {
  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <section>
        <div class="mbe4">
          <h2>Default</h2>
          <p class="mbs2 mbe3">Basic tag with neutral styling.</p>
          <div class="stacked-mobile">
            <ag-tag>
              Default Tag
            </ag-tag>
          </div>
        </div>
        <div class="mbe4">
          <h2>Variants</h2>
          <p class="mbs2 mbe3">Semantic color variants for status indication.</p>
          <div class="stacked">
            <ag-tag
              variant="info"
              class="mbe2"
            >Info Tag</ag-tag>
            <ag-tag
              variant="success"
              class="mbe2"
            >Success Tag</ag-tag>
            <ag-tag
              variant="warning"
              class="mbe2"
            >Warning Tag</ag-tag>
            <ag-tag
              variant="error"
              class="mbe2"
            >Error Tag</ag-tag>
            <ag-tag
              variant="monochrome"
              class="mbe2"
            >Monochrome Tag</ag-tag>
          </div>
        </div>
        <div class="mbe4">
          <h2>Shapes</h2>
          <p class="mbs2 mbe3">Different border-radius options for visual variety.</p>
          <div class="stacked">
            <ag-tag
              shape="pill"
              variant="info"
              class="mbe2"
            >Pill Tag</ag-tag>
            <ag-tag
              shape="round"
              variant="success"
              class="mbe2"
            >Round Tag</ag-tag>
            <ag-tag
              shape="circle"
              variant="error"
              class="mbe2"
            >!</ag-tag>
          </div>
        </div>
        <div class="mbe4">
          <h2>Uppercase Modifier</h2>
          <p class="mbs2 mbe3">Transforms text to uppercase with condensed typography.</p>
          <div class="stacked">
            <ag-tag
              uppercase
              variant="warning"
              class="mbe2"
            >Uppercase Tag</ag-tag>
            <ag-tag
              uppercase
              shape="pill"
              class="mbe2"
            >PILL LABEL</ag-tag>
          </div>
        </div>
        <div class="mbe4">
          <h2>With Close Slot</h2>
          <p class="mbs2 mbe3">Dismissible tags using the named close slot.</p>
          <div class="stacked">
            <ag-tag
              variant="error"
              class="mbe2"
            >
              Deletable
              <button
                slot="close"
                aria-label="close"
              >✕</button>
            </ag-tag>
            <ag-tag
              variant="success"
              shape="pill"
              class="mbe2"
            >
              Active
              <button
                slot="close"
                aria-label="close"
              >✕</button>
            </ag-tag>
            <ag-tag
              variant="warning"
              uppercase
              class="mbe2"
            >
              Pending
              <button
                slot="close"
                aria-label="close"
              >✕</button>
            </ag-tag>
          </div>
        </div>
        <div class="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
          <p class="mbs2 mbe3">Use CSS Shadow Parts to customize the tag's appearance without breaking encapsulation.</p>
          <div class="mbe4">
            <ag-tag class="custom-outline-tag">Outline Tag</ag-tag>
          </div>
        </div>
      </section>
    `;
  }
}

// Register the custom element
customElements.define('tag-lit-examples', TagLitExamples);
