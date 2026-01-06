
import { LitElement, html, css } from 'lit';
import 'agnosticui-core/scroll-to-button';

export class ScrollToButtonLitExamples extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <style>
        .lit-example-section {
          margin-top: 3rem;
        }

        .lit-example-section h3 {
          margin-bottom: 0.5rem;
        }

        .lit-example-section p {
          margin-bottom: 1rem;
        }

        .lit-example-container {
          min-height: 120vh;
          padding: 1.5rem;
          background: var(--vp-c-bg-soft);
          border: 1px solid var(--vp-c-divider);
          border-radius: 8px;
          position: relative;
        }

        .lit-example-paragraph {
          margin-bottom: 1.5rem;
          line-height: 1.6;
          color: var(--vp-c-text-2);
        }

        .lit-inline-examples {
          display: flex;
          gap: 2rem;
          align-items: flex-end;
          flex-wrap: wrap;
          padding: 2rem;
          background: var(--vp-c-bg-soft);
          border: 1px solid var(--vp-c-divider);
          border-radius: 8px;
        }

        .lit-inline-example {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .lit-inline-example span {
          font-size: 0.875rem;
          font-family: var(--vp-font-family-mono);
          color: var(--vp-c-text-2);
        }

        /* Custom gradient styling example */
        ag-scroll-to-button.custom-gradient::part(ag-button) {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
        }

        ag-scroll-to-button.custom-gradient::part(ag-button):hover {
          box-shadow: 0 6px 16px rgba(102, 126, 234, 0.6);
          transform: translateY(-2px);
        }
      </style>

      <section>
        <h2>Default (Icon Only)</h2>
        <p>The most common use case - a circular button with just an icon that appears when scrolling down.</p>
        <div class="lit-example-container">
          ${Array.from({ length: 20 }, (_, i) => html`
            <p class="lit-example-paragraph">
              Paragraph ${i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          `)}
          <ag-scroll-to-button style="bottom: 100px"></ag-scroll-to-button>
        </div>
      </section>

      <section class="lit-example-section">
        <h2>With Visible Label</h2>
        <p>Show both icon and text label for better clarity. The button becomes pill-shaped automatically.</p>
        <ag-scroll-to-button
          label="Back to Top"
          scroll-threshold="200"
          show-label
        ></ag-scroll-to-button>
      </section>

      <section class="lit-example-section">
        <h2>Low Scroll Threshold</h2>
        <p>Control when the button appears by adjusting <code>scroll-threshold</code>. This one appears after just 100px.</p>
        <ag-scroll-to-button
          label="Quick Access"
          show-label
          scroll-threshold="100"
          style="right: 180px"
          shape="rounded"
        ></ag-scroll-to-button>
      </section>

      <section class="lit-example-section">
        <h2>Scroll to Bottom</h2>
        <p>Navigate to the end of content. The arrow automatically points down based on the target.</p>
        <ag-scroll-to-button
          style="bottom: 160px"
          label="Go to Bottom"
          target="bottom"
          scroll-threshold="400"
        ></ag-scroll-to-button>
      </section>

      <section class="lit-example-section">
        <h2>Custom Icon with Slot</h2>
        <p>Replace the default arrow with any icon using slots.</p>
        <ag-scroll-to-button
          label="Launch to Top!"
          style="bottom: 220px"
          scroll-threshold="600"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
          </svg>
        </ag-scroll-to-button>
      </section>

      <section class="lit-example-section">
        <h2>Different Sizes</h2>
        <p>Available sizes: <code>x-sm</code>, <code>sm</code>, <code>md</code> (default), <code>lg</code>, <code>xl</code></p>
        <div class="lit-inline-examples">
          <div class="lit-inline-example">
            <ag-scroll-to-button size="x-sm" style="position: static"></ag-scroll-to-button>
            <span>x-sm</span>
          </div>
          <div class="lit-inline-example">
            <ag-scroll-to-button size="sm" style="position: static"></ag-scroll-to-button>
            <span>sm</span>
          </div>
          <div class="lit-inline-example">
            <ag-scroll-to-button size="md" style="position: static"></ag-scroll-to-button>
            <span>md</span>
          </div>
          <div class="lit-inline-example">
            <ag-scroll-to-button size="lg" style="position: static"></ag-scroll-to-button>
            <span>lg</span>
          </div>
          <div class="lit-inline-example">
            <ag-scroll-to-button size="xl" style="position: static"></ag-scroll-to-button>
            <span>xl</span>
          </div>
        </div>
      </section>

      <section class="lit-example-section">
        <h2>Different Shapes</h2>
        <p>Available shapes: <code>circle</code> (default), <code>square</code>, <code>rounded</code>, <code>rounded-square</code>, <code>capsule</code></p>
        <div class="lit-inline-examples">
          <div class="lit-inline-example">
            <ag-scroll-to-button
              shape="circle"
              style="bottom: 280px"
              scroll-threshold="800"
            ></ag-scroll-to-button>
            <span>circle</span>
          </div>
          <div class="lit-inline-example">
            <ag-scroll-to-button
              shape="square"
              style="bottom: 340px"
              scroll-threshold="1000"
            ></ag-scroll-to-button>
            <span>square</span>
          </div>
          <div class="lit-inline-example">
            <ag-scroll-to-button
              shape="rounded"
              style="bottom: 400px"
              scroll-threshold="1200"
            ></ag-scroll-to-button>
            <span>rounded</span>
          </div>
          <div class="lit-inline-example">
            <ag-scroll-to-button
              shape="rounded-square"
              style="bottom: 460px"
              scroll-threshold="1400"
            ></ag-scroll-to-button>
            <span>rounded-square</span>
          </div>
          <div class="lit-inline-example">
            <ag-scroll-to-button
              shape="capsule"
              show-label
              label="Top"
              style="bottom: 580px"
              scroll-threshold="1800"
            ></ag-scroll-to-button>
            <span>capsule</span>
          </div>
        </div>
      </section>

      <section class="lit-example-section">
        <h2>Custom Styling with CSS Shadow Parts</h2>
        <p>Style internal parts without breaking encapsulation using CSS Shadow Parts.</p>
        <ag-scroll-to-button
          class="custom-gradient"
          label="Styled Button"
          style="bottom: 520px"
          scroll-threshold="1600"
          show-label
        ></ag-scroll-to-button>
      </section>
    `;
  }
}

customElements.define('scroll-to-button-lit-examples', ScrollToButtonLitExamples);
