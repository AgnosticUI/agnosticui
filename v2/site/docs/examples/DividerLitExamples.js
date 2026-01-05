import { LitElement, html } from 'lit';
import 'agnosticui-core/divider';

export class DividerLitExamples extends LitElement {
  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <style>
        .custom-divider-dotted::part(ag-divider)::before,
        .custom-divider-dotted::part(ag-divider)::after {
          background: repeating-linear-gradient(
            90deg,
            #10b981 0,
            #10b981 10px,
            transparent 10px,
            transparent 20px
          );
          height: 3px;
        }

        .custom-divider-vertical::part(ag-divider)::before,
        .custom-divider-vertical::part(ag-divider)::after {
          background: linear-gradient(180deg, #ef4444 0%, #fbbf24 100%);
          width: var(--ag-space-1);
        }

        .custom-divider-vertical::part(ag-divider-content) {
          font-family: "Courier New", monospace;
          letter-spacing: 2px;
          font-weight: 700;
        }
      </style>

      <section>
        <!-- Horizontal Dividers -->
        <div class="mbe4">
          <h2>Horizontal Dividers</h2>
        </div>
        <div class="mbe4">
          <p>Content above the divider</p>
          <ag-divider></ag-divider>
          <p>Content below the divider</p>
        </div>

        <!-- Horizontal with Content -->
        <div class="mbe4">
          <h2>Horizontal with Content</h2>
        </div>
        <div class="mbe4">
          <ag-divider>Centered (default)</ag-divider>
          <div class="mbe2"></div>
          <ag-divider justify="start">Justify Start</ag-divider>
          <div class="mbe2"></div>
          <ag-divider justify="end">Justify End</ag-divider>
        </div>

        <!-- Vertical Dividers -->
        <div class="mbe4">
          <h2>Vertical Dividers</h2>
        </div>
        <div class="mbe4" style="display: flex; min-height: 200px;">
          <p style="flex: 1;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <ag-divider is-vertical>Yes</ag-divider>
          <p style="flex: 1;">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
          <ag-divider is-vertical>Sir!</ag-divider>
          <p style="flex: 1;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <!-- Sizes - Horizontal -->
        <div class="mbe4">
          <h2>Sizes - Horizontal</h2>
        </div>
        <div class="mbe4">
          <ag-divider size="small">Small</ag-divider>
          <div class="mbe2"></div>
          <ag-divider size="default">Default</ag-divider>
          <div class="mbe2"></div>
          <ag-divider size="large">Large</ag-divider>
          <div class="mbe2"></div>
          <ag-divider size="xlarge">XLarge</ag-divider>
        </div>

        <!-- Sizes - Vertical -->
        <div class="mbe4">
          <h2>Sizes - Vertical</h2>
        </div>
        <div class="mbe4" style="display: flex; gap: 1rem; min-height: 150px;">
          <p style="flex: 1;">Content</p>
          <ag-divider is-vertical size="small">Sm</ag-divider>
          <p style="flex: 1;">Content</p>
          <ag-divider is-vertical size="default">Def</ag-divider>
          <p style="flex: 1;">Content</p>
          <ag-divider is-vertical size="large">Lg</ag-divider>
          <p style="flex: 1;">Content</p>
          <ag-divider is-vertical size="xlarge">XL</ag-divider>
          <p style="flex: 1;">Content</p>
        </div>

        <!-- Variants -->
        <div class="mbe4">
          <h2>Variants</h2>
        </div>
        <div class="mbe4">
          <ag-divider variant="default">Default</ag-divider>
          <div class="mbe2"></div>
          <ag-divider variant="success">Success</ag-divider>
          <div class="mbe2"></div>
          <ag-divider variant="info">Info</ag-divider>
          <div class="mbe2"></div>
          <ag-divider variant="warning">Warning</ag-divider>
          <div class="mbe2"></div>
          <ag-divider variant="error">Error</ag-divider>
          <div class="mbe2"></div>
          <ag-divider variant="monochrome">Monochrome</ag-divider>
        </div>

        <!-- CSS Shadow Parts Customization -->
        <div class="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
          <p class="mbs2 mbe3">
            Use CSS Shadow Parts to customize the divider's appearance without affecting the component's internal styling.
          </p>
        </div>
        <div class="mbe4">
          <ag-divider class="custom-divider-dotted">Dotted Pattern</ag-divider>
          <div class="mbe4"></div>
          <div style="display: flex; min-height: 150px;">
            <p style="flex: 1;">Custom vertical gradient divider on the right</p>
            <ag-divider class="custom-divider-vertical" is-vertical>Custom</ag-divider>
            <p style="flex: 1;">Styled with CSS Shadow Parts</p>
          </div>
        </div>
      </section>
    `;
  }
}

// Register the custom element
customElements.define('divider-lit-examples', DividerLitExamples);
