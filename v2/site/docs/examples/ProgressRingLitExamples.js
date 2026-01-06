import { LitElement, html } from 'lit';
import 'agnosticui-core/progress-ring';
import 'agnosticui-core/button';

export class ProgressRingLitExamples extends LitElement {
  static properties = {
    animatedValue: { type: Number }
  };

  constructor() {
    super();
    this.animatedValue = 0;
    this.animationInterval = null;
  }

  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.animationInterval) {
      clearInterval(this.animationInterval);
    }
  }

  startAnimation() {
    if (this.animationInterval) {
      clearInterval(this.animationInterval);
    }

    this.animatedValue = 0;
    this.animationInterval = setInterval(() => {
      if (this.animatedValue < 100) {
        this.animatedValue += 1;
      } else {
        if (this.animationInterval) {
          clearInterval(this.animationInterval);
          this.animationInterval = null;
        }
      }
    }, 30);
  }

  resetAnimation() {
    if (this.animationInterval) {
      clearInterval(this.animationInterval);
      this.animationInterval = null;
    }
    this.animatedValue = 0;
  }

  render() {
    return html`
      <section>
        <div class="mbe4">
          <h2>Default Progress Ring</h2>
          <p class="mbs2 mbe3">A basic progress ring component.</p>
          <ag-progress-ring value="75"></ag-progress-ring>
        </div>

        <div class="mbe4">
          <h2>Different Progress Values</h2>
          <p class="mbs2 mbe3">Progress rings showing various completion levels.</p>
          <div style="display: flex; gap: 2rem; align-items: center; flex-wrap: wrap;">
            <ag-progress-ring value="0"></ag-progress-ring>
            <ag-progress-ring value="25"></ag-progress-ring>
            <ag-progress-ring value="50"></ag-progress-ring>
            <ag-progress-ring value="75"></ag-progress-ring>
            <ag-progress-ring value="100"></ag-progress-ring>
          </div>
        </div>

        <div class="mbe4">
          <h2>Sizes</h2>
          <p class="mbs2 mbe3">Three size options: small, medium (default), and large.</p>
          <div style="display: flex; gap: 2rem; align-items: center; flex-wrap: wrap;">
            <ag-progress-ring size="small" value="60"></ag-progress-ring>
            <ag-progress-ring size="medium" value="60"></ag-progress-ring>
            <ag-progress-ring size="large" value="60"></ag-progress-ring>
          </div>
        </div>

        <div class="mbe4">
          <h2>Variants</h2>
          <p class="mbs2 mbe3">Color variants for different contexts.</p>
          <div style="display: flex; gap: 2rem; align-items: center; flex-wrap: wrap;">
            <div style="text-align: center;">
              <ag-progress-ring variant="primary" value="70"></ag-progress-ring>
              <p style="margin-top: 0.5rem; font-size: 0.875rem;">Primary</p>
            </div>
            <div style="text-align: center;">
              <ag-progress-ring variant="success" value="70"></ag-progress-ring>
              <p style="margin-top: 0.5rem; font-size: 0.875rem;">Success</p>
            </div>
            <div style="text-align: center;">
              <ag-progress-ring variant="warning" value="70"></ag-progress-ring>
              <p style="margin-top: 0.5rem; font-size: 0.875rem;">Warning</p>
            </div>
            <div style="text-align: center;">
              <ag-progress-ring variant="danger" value="70"></ag-progress-ring>
              <p style="margin-top: 0.5rem; font-size: 0.875rem;">Danger</p>
            </div>
            <div style="text-align: center;">
              <ag-progress-ring variant="info" value="70"></ag-progress-ring>
              <p style="margin-top: 0.5rem; font-size: 0.875rem;">Info</p>
            </div>
          </div>
        </div>

        <div class="mbe4">
          <h2>Custom Labels</h2>
          <p class="mbs2 mbe3">Override the default slot to display custom content.</p>
          <div style="display: flex; gap: 2rem; align-items: center; flex-wrap: wrap;">
            <ag-progress-ring value="45">
              <span style="font-size: 0.875rem; font-weight: bold;">45/100</span>
            </ag-progress-ring>
            <ag-progress-ring value="80" variant="success">
              <span style="font-size: 1.25rem;">✓</span>
            </ag-progress-ring>
            <ag-progress-ring value="30" variant="warning">
              <span style="font-size: 0.75rem; text-align: center;">Low<br />Storage</span>
            </ag-progress-ring>
          </div>
        </div>

        <div class="mbe4">
          <h2>No Animation</h2>
          <p class="mbs2 mbe3">Disable the fill animation with the <code>noAnimation</code> prop.</p>
          <ag-progress-ring value="65" no-animation></ag-progress-ring>
        </div>

        <div class="mbe4">
          <h2>Animated Progress</h2>
          <p class="mbs2 mbe3">Progress ring with dynamic value updates.</p>
          <div>
            <ag-progress-ring value=${this.animatedValue} variant="info"></ag-progress-ring>
            <div class="mbs6">
              <ag-button
                @click=${this.startAnimation}
                variant="primary"
                bordered
                grouped
              >
                Start
              </ag-button>
              <ag-button
                @click=${this.resetAnimation}
                variant="primary"
                bordered
                grouped
              >
                Reset
              </ag-button>
            </div>
          </div>
        </div>

        <div class="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
          <p class="mbs2 mbe3">
            Use CSS Shadow Parts to customize the component's appearance.
          </p>
          <ag-progress-ring value="85" class="custom-ring"></ag-progress-ring>
        </div>

        <div class="mbe4">
          <h2>Real-world Example</h2>
          <p class="mbs2 mbe3">Progress rings in a dashboard-style layout.</p>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1.5rem;">
            <div style="padding: 1rem; border: 1px solid #e0e0e0; border-radius: 8px; text-align: center;">
              <h3 style="margin: 0 0 1rem 0; font-size: 0.875rem;">Tasks Complete</h3>
              <ag-progress-ring value="85" variant="success">
                <strong>17/20</strong>
              </ag-progress-ring>
            </div>
            <div style="padding: 1rem; border: 1px solid #e0e0e0; border-radius: 8px; text-align: center;">
              <h3 style="margin: 0 0 1rem 0; font-size: 0.875rem;">Storage Used</h3>
              <ag-progress-ring value="68" variant="warning">
                <strong>68GB</strong>
              </ag-progress-ring>
            </div>
            <div style="padding: 1rem; border: 1px solid #e0e0e0; border-radius: 8px; text-align: center;">
              <h3 style="margin: 0 0 1rem 0; font-size: 0.875rem;">CPU Usage</h3>
              <ag-progress-ring value="42" variant="info">
                <strong>42%</strong>
              </ag-progress-ring>
            </div>
          </div>
        </div>
      </section>

      <style>
        /* CSS Shadow Parts customization examples */
        .custom-ring::part(track) {
          stroke: #e0e0e0;
          stroke-width: 6;
        }
        .custom-ring::part(indicator) {
          stroke: #667eea;
          stroke-width: 6;
          stroke-linecap: round;
          filter: drop-shadow(0 0 4px rgba(102, 126, 234, 0.5));
        }
        .custom-ring::part(label) {
          font-weight: bold;
          font-size: 1.5rem;
          color: #667eea;
        }
      </style>
    `;
  }
}

// Register the custom element
customElements.define('progress-ring-lit-examples', ProgressRingLitExamples);
