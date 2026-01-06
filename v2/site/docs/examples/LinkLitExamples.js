import { LitElement, html } from 'lit';
import 'agnosticui-core/link';

export class LinkLitExamples extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <section>
        <div class="mbe4">
          <h2>Basic Links</h2>
          <div class="stacked-mobile">
            <ag-link href="#link">Home</ag-link>
            <ag-link href="#link">About</ag-link>
            <ag-link href="#link">Contact</ag-link>
          </div>
        </div>

        <div class="mbe4">
          <h2>Variant Links</h2>
          <div class="stacked-mobile">
            <ag-link href="#link" variant="primary">Primary Link</ag-link>
            <ag-link href="#link" variant="success">Success Link</ag-link>
            <ag-link href="#link" variant="warning">Warning Link</ag-link>
            <ag-link href="#link" variant="danger">Danger Link</ag-link>
            <ag-link href="#link" variant="monochrome">Monochrome Link</ag-link>
          </div>
        </div>

        <div class="mbe4">
          <h2>Button-Style Links</h2>
          <div class="stacked-mobile">
            <ag-link href="#link" isButton>Default Button</ag-link>
            <ag-link href="#link" isButton variant="primary">Primary Button</ag-link>
            <ag-link href="#link" isButton variant="success">Success Button</ag-link>
            <ag-link href="#link" isButton variant="warning">Warning Button</ag-link>
            <ag-link href="#link" isButton variant="danger">Danger Button</ag-link>
            <ag-link href="#link" isButton variant="monochrome">Monochrome Button</ag-link>
          </div>
        </div>

        <div class="mbe4">
          <h2>Button Sizes</h2>
          <div class="stacked-mobile">
            <ag-link href="#link" isButton buttonSize="x-sm" variant="primary">
              Extra Small
            </ag-link>
            <ag-link href="#link" isButton buttonSize="sm" variant="primary">
              Small
            </ag-link>
            <ag-link href="#link" isButton buttonSize="md" variant="primary">
              Medium
            </ag-link>
            <ag-link href="#link" isButton buttonSize="lg" variant="primary">
              Large
            </ag-link>
            <ag-link href="#link" isButton buttonSize="xl" variant="primary">
              Extra Large
            </ag-link>
          </div>
        </div>

        <div class="mbe4">
          <h2>Button Shapes</h2>
          <div class="stacked-mobile">
            <ag-link href="#link" isButton variant="primary">
              Default
            </ag-link>
            <ag-link href="#link" isButton buttonShape="rounded" variant="primary">
              Rounded
            </ag-link>
            <ag-link href="#link" isButton buttonShape="capsule" variant="primary">
              Capsule
            </ag-link>
            <ag-link href="#link" isButton buttonShape="circle" variant="primary" ariaLabel="Add">
              +
            </ag-link>
            <ag-link href="#link" isButton buttonShape="square" variant="primary" ariaLabel="Menu">
              ■
            </ag-link>
            <ag-link href="#link" isButton buttonShape="rounded-square" variant="primary" ariaLabel="Settings">
              ▢
            </ag-link>
          </div>
        </div>

        <div class="mbe4">
          <h2>Bordered Buttons</h2>
          <div class="stacked-mobile">
            <ag-link href="#link" isButton buttonBordered variant="primary">
              Primary Outlined
            </ag-link>
            <ag-link href="#link" isButton buttonBordered variant="success">
              Success Outlined
            </ag-link>
            <ag-link href="#link" isButton buttonBordered variant="warning">
              Warning Outlined
            </ag-link>
            <ag-link href="#link" isButton buttonBordered variant="danger">
              Danger Outlined
            </ag-link>
            <ag-link href="#link" isButton buttonBordered variant="monochrome">
              Monochrome Outlined
            </ag-link>
          </div>
        </div>

        <div class="mbe4">
          <h2>Complex Button Combinations</h2>
          <div class="stacked-mobile">
            <ag-link href="#link" isButton buttonSize="lg" buttonShape="capsule" variant="primary">
              Large Capsule Button
            </ag-link>
            <ag-link href="#link" isButton buttonSize="lg" buttonShape="capsule" buttonBordered variant="success">
              Large Capsule Outlined
            </ag-link>
            <ag-link href="#link" isButton buttonSize="sm" buttonShape="rounded" buttonBordered variant="warning">
              Small Rounded Outlined
            </ag-link>
          </div>
        </div>

        <div class="mbe4">
          <h2>External Link</h2>
          <div class="stacked-mobile">
            <ag-link href="https://github.com" external>
              External Link →
            </ag-link>
            <ag-link href="https://github.com" external isButton variant="primary">
              External Button →
            </ag-link>
          </div>
        </div>

        <div class="mbe4">
          <h2>Disabled Links</h2>
          <div class="stacked-mobile">
            <ag-link href="#link" disabled>
              Disabled Link
            </ag-link>
            <ag-link href="#link" disabled isButton>
              Disabled Button
            </ag-link>
            <ag-link href="#link" disabled isButton variant="success">
              Disabled Success Button
            </ag-link>
          </div>
        </div>

        <div class="mbe4">
          <h2>Accessible Icon Links</h2>
          <div class="stacked-mobile">
            <ag-link href="#download" ariaLabel="Download PDF report">
              📄
            </ag-link>
            <ag-link href="#settings" isButton buttonShape="circle" variant="primary" ariaLabel="Settings">
              ⚙️
            </ag-link>
            <ag-link href="#add" isButton buttonShape="circle" variant="success" ariaLabel="Add new item">
              +
            </ag-link>
            <ag-link href="#delete" isButton buttonShape="circle" variant="danger" ariaLabel="Delete">
              ×
            </ag-link>
          </div>
        </div>

        <div class="mbe4">
          <h2>Call-to-Action Pattern</h2>
          <div class="stacked-mobile">
            <ag-link href="#signup" isButton buttonSize="lg" buttonShape="capsule" variant="primary">
              Get Started Free
            </ag-link>
            <ag-link href="#learn-more" isButton buttonSize="lg" buttonShape="capsule" buttonBordered variant="primary">
              Learn More
            </ag-link>
          </div>
        </div>

        <div class="mbe4">
          <h2>Action Bar Pattern</h2>
          <div class="stacked-mobile">
            <ag-link href="#edit" isButton buttonSize="sm" variant="primary">
              Edit
            </ag-link>
            <ag-link href="#duplicate" isButton buttonSize="sm" buttonBordered>
              Duplicate
            </ag-link>
            <ag-link href="#delete" isButton buttonSize="sm" variant="danger">
              Delete
            </ag-link>
          </div>
        </div>
      </section>
    `;
  }
}

// Register the custom element
customElements.define('link-lit-examples', LinkLitExamples);
