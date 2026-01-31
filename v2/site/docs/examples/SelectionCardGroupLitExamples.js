import { LitElement, html } from 'lit';
import 'agnosticui-core/selection-card-group';
import 'agnosticui-core/selection-card';

export class SelectionCardGroupLitExamples extends LitElement {
  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  handleChange(e) {
    console.log('Selection changed:', e.detail);
  }

  render() {
    return html`
      <section>
        <!-- Radio Selection -->
        <div class="mbe4">
          <h2>Radio Selection (Single)</h2>
          <p class="mbs2 mbe3">Select one option from a group of cards</p>
        </div>
        <ag-selection-card-group
          type="radio"
          name="interests"
          legend="Select your primary interest"
          class="mbe4"
          @selection-change=${this.handleChange}
        >
          <ag-selection-card value="tech" label="Technology">
            <div style="text-align: center; padding: 1rem;">
              <div style="font-size: 2rem;">💻</div>
              <div style="font-weight: 600;">Technology</div>
            </div>
          </ag-selection-card>
          <ag-selection-card value="art" label="Art & Design">
            <div style="text-align: center; padding: 1rem;">
              <div style="font-size: 2rem;">🎨</div>
              <div style="font-weight: 600;">Art & Design</div>
            </div>
          </ag-selection-card>
          <ag-selection-card value="music" label="Music">
            <div style="text-align: center; padding: 1rem;">
              <div style="font-size: 2rem;">🎵</div>
              <div style="font-weight: 600;">Music</div>
            </div>
          </ag-selection-card>
        </ag-selection-card-group>

        <!-- Checkbox Selection -->
        <div class="mbe4">
          <h2>Checkbox Selection (Multiple)</h2>
          <p class="mbs2 mbe3">Select multiple options from a group of cards</p>
        </div>
        <ag-selection-card-group
          type="checkbox"
          name="features"
          legend="Select features to enable"
          class="mbe4"
          @selection-change=${this.handleChange}
        >
          <ag-selection-card value="analytics" label="Analytics">
            <div style="text-align: center; padding: 1rem;">
              <div style="font-size: 2rem;">📊</div>
              <div style="font-weight: 600;">Analytics</div>
              <div style="font-size: 0.875rem; color: #666;">Track user behavior</div>
            </div>
          </ag-selection-card>
          <ag-selection-card value="notifications" label="Notifications">
            <div style="text-align: center; padding: 1rem;">
              <div style="font-size: 2rem;">🔔</div>
              <div style="font-weight: 600;">Notifications</div>
              <div style="font-size: 0.875rem; color: #666;">Push & email alerts</div>
            </div>
          </ag-selection-card>
          <ag-selection-card value="export" label="Export">
            <div style="text-align: center; padding: 1rem;">
              <div style="font-size: 2rem;">📤</div>
              <div style="font-weight: 600;">Export</div>
              <div style="font-size: 0.875rem; color: #666;">Download your data</div>
            </div>
          </ag-selection-card>
        </ag-selection-card-group>

        <!-- Theme Variants -->
        <div class="mbe4">
          <h2>Theme Variants</h2>
          <p class="mbs2 mbe3">Different color themes for various contexts</p>
        </div>
        <div style="display: flex; flex-direction: column; gap: 1.5rem;" class="mbe4">
          <div>
            <h3 style="margin-bottom: 0.5rem; font-size: 0.875rem;">Default (Primary/Blue)</h3>
            <ag-selection-card-group
              type="radio"
              name="theme-default"
              legend="Default theme"
              legend-hidden
            >
              <ag-selection-card value="a" label="Option A">
                <div style="padding: 1rem; text-align: center;">Option A</div>
              </ag-selection-card>
              <ag-selection-card value="b" label="Option B">
                <div style="padding: 1rem; text-align: center;">Option B</div>
              </ag-selection-card>
            </ag-selection-card-group>
          </div>
          <div>
            <h3 style="margin-bottom: 0.5rem; font-size: 0.875rem;">Success</h3>
            <ag-selection-card-group
              type="radio"
              name="theme-success"
              legend="Success theme"
              legend-hidden
              theme="success"
            >
              <ag-selection-card value="a" label="Option A">
                <div style="padding: 1rem; text-align: center;">Option A</div>
              </ag-selection-card>
              <ag-selection-card value="b" label="Option B">
                <div style="padding: 1rem; text-align: center;">Option B</div>
              </ag-selection-card>
            </ag-selection-card-group>
          </div>
          <div>
            <h3 style="margin-bottom: 0.5rem; font-size: 0.875rem;">Warning</h3>
            <ag-selection-card-group
              type="radio"
              name="theme-warning"
              legend="Warning theme"
              legend-hidden
              theme="warning"
            >
              <ag-selection-card value="a" label="Option A">
                <div style="padding: 1rem; text-align: center;">Option A</div>
              </ag-selection-card>
              <ag-selection-card value="b" label="Option B">
                <div style="padding: 1rem; text-align: center;">Option B</div>
              </ag-selection-card>
            </ag-selection-card-group>
          </div>
          <div>
            <h3 style="margin-bottom: 0.5rem; font-size: 0.875rem;">Error</h3>
            <ag-selection-card-group
              type="radio"
              name="theme-error"
              legend="Error theme"
              legend-hidden
              theme="error"
            >
              <ag-selection-card value="a" label="Option A">
                <div style="padding: 1rem; text-align: center;">Option A</div>
              </ag-selection-card>
              <ag-selection-card value="b" label="Option B">
                <div style="padding: 1rem; text-align: center;">Option B</div>
              </ag-selection-card>
            </ag-selection-card-group>
          </div>
          <div>
            <h3 style="margin-bottom: 0.5rem; font-size: 0.875rem;">Monochrome</h3>
            <ag-selection-card-group
              type="radio"
              name="theme-mono"
              legend="Monochrome theme"
              legend-hidden
              theme="monochrome"
            >
              <ag-selection-card value="a" label="Option A">
                <div style="padding: 1rem; text-align: center;">Option A</div>
              </ag-selection-card>
              <ag-selection-card value="b" label="Option B">
                <div style="padding: 1rem; text-align: center;">Option B</div>
              </ag-selection-card>
            </ag-selection-card-group>
          </div>
        </div>

        <!-- Disabled State -->
        <div class="mbe4">
          <h2>Disabled State</h2>
          <p class="mbs2 mbe3">Entire group can be disabled</p>
        </div>
        <ag-selection-card-group
          type="radio"
          name="disabled-example"
          legend="Disabled group"
          disabled
          class="mbe4"
        >
          <ag-selection-card value="a" label="Option A">
            <div style="padding: 1rem; text-align: center;">Option A</div>
          </ag-selection-card>
          <ag-selection-card value="b" label="Option B">
            <div style="padding: 1rem; text-align: center;">Option B</div>
          </ag-selection-card>
        </ag-selection-card-group>

        <!-- Pricing Tiers Example -->
        <div class="mbe4">
          <h2>Pricing Tiers Example</h2>
          <p class="mbs2 mbe3">Common use case for plan selection</p>
        </div>
        <ag-selection-card-group
          type="radio"
          name="pricing"
          legend="Choose your plan"
          class="mbe4"
          @selection-change=${this.handleChange}
        >
          <ag-selection-card value="free" label="Free Plan">
            <div style="padding: 1rem; text-align: center;">
              <div style="font-size: 1.5rem; font-weight: 700;">Free</div>
              <div style="font-size: 2rem; font-weight: 700; margin: 0.5rem 0;">$0</div>
              <div style="color: #666; font-size: 0.875rem;">Perfect for getting started</div>
            </div>
          </ag-selection-card>
          <ag-selection-card value="pro" label="Pro Plan">
            <div style="padding: 1rem; text-align: center;">
              <div style="font-size: 1.5rem; font-weight: 700;">Pro</div>
              <div style="font-size: 2rem; font-weight: 700; margin: 0.5rem 0;">$29</div>
              <div style="color: #666; font-size: 0.875rem;">For growing teams</div>
            </div>
          </ag-selection-card>
          <ag-selection-card value="premium" label="Premium Plan">
            <div style="padding: 1rem; text-align: center;">
              <div style="font-size: 1.5rem; font-weight: 700;">Premium</div>
              <div style="font-size: 1.5rem; font-weight: 700; margin: 0.5rem 0;">Custom</div>
              <div style="color: #666; font-size: 0.875rem;">For large organizations</div>
            </div>
          </ag-selection-card>
        </ag-selection-card-group>
      </section>
    `;
  }
}

// Register the custom element
customElements.define('selection-card-group-lit-examples', SelectionCardGroupLitExamples);

// Add responsive styles
const style = document.createElement('style');
style.textContent = `
  @media (max-width: 640px) {
    ag-selection-card-group::part(content) {
      grid-template-columns: 1fr;
    }
  }
`;
document.head.appendChild(style);
