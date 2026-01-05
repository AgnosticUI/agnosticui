import { LitElement, html } from 'lit';
import 'agnosticui-core/collapsible';

export class CollapsibleLitExamples extends LitElement {
  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  constructor() {
    super();
    this.isExpanded = false;
  }

  handleToggle(event) {
    this.isExpanded = event.target.open;
    console.log('Collapsible toggled. New state:', this.isExpanded);
    this.requestUpdate();
  }

  render() {
    return html`
      <section>
        <!-- Basic Collapsible (Default) -->
        <div class="mbe4">
          <h2>Basic Collapsible (Default)</h2>
          <p class="mbe2" style="color: var(--ag-text-secondary); font-size: 0.875rem;">
            By default, the Collapsible provides a chevron which points down when closed, then rotates 180° to point up when open. See below for how to opt out or use different indicators.
          </p>
        </div>
        <div class="stacked mbe4">
          <ag-collapsible use-chevron>
            <span slot="summary">Click to expand</span>
            <p>This is the collapsible content that can be shown or hidden. The default chevron indicator rotates smoothly when toggled.</p>
          </ag-collapsible>
        </div>

        <!-- X Indicator -->
        <div class="mbe4">
          <h2>X Indicator</h2>
          <p class="mbe2" style="color: var(--ag-text-secondary); font-size: 0.875rem;">
            Plus rotated 180° (upside down) when closed, rotates to 45° forming an X when open.
          </p>
        </div>
        <div class="stacked mbe4">
          <ag-collapsible use-x>
            <span slot="summary">X Indicator</span>
            <p>Plus transforms into X when opened. This provides a modern, dynamic visual indicator.</p>
          </ag-collapsible>
        </div>

        <!-- Plus/Minus Indicator -->
        <div class="mbe4">
          <h2>Plus/Minus Indicator</h2>
          <p class="mbe2" style="color: var(--ag-text-secondary); font-size: 0.875rem;">
            Plus transitions to minus when open with smooth animation.
          </p>
        </div>
        <div class="stacked mbe4">
          <ag-collapsible use-minus>
            <span slot="summary">Plus/Minus Indicator</span>
            <p>Plus changes to minus when opened. Classic expand/collapse indicator style.</p>
          </ag-collapsible>
        </div>

        <!-- No Indicator -->
        <div class="mbe4">
          <h2>No Indicator</h2>
          <p class="mbe2" style="color: var(--ag-text-secondary); font-size: 0.875rem;">
            Collapsible without any visual indicator.
          </p>
        </div>
        <div class="stacked mbe4">
          <ag-collapsible no-indicator>
            <span slot="summary">No Indicator</span>
            <p>Clean header without indicator icon. Minimal design focused on content.</p>
          </ag-collapsible>
        </div>

        <!-- Indicator Comparison -->
        <div class="mbe4">
          <h2>Indicator Comparison</h2>
          <p class="mbe2" style="color: var(--ag-text-secondary); font-size: 0.875rem;">
            Toggle each collapsible to see how the different indicators behave.
          </p>
        </div>
        <div class="stacked mbe4">
          <ag-collapsible bordered use-chevron>
            <span slot="summary">Chevron (default) - Rotates 180°</span>
            <p>The chevron points down when closed and up when open via rotation.</p>
          </ag-collapsible>

          <ag-collapsible bordered use-x>
            <span slot="summary">X Indicator - Rotates from upside-down plus to X</span>
            <p>Starts as an upside-down plus sign and rotates 45° to form an X when open.</p>
          </ag-collapsible>

          <ag-collapsible bordered use-minus>
            <span slot="summary">Plus/Minus - Swaps icons</span>
            <p>Shows a plus icon when closed and swaps to a minus icon when open.</p>
          </ag-collapsible>

          <ag-collapsible bordered no-indicator>
            <span slot="summary">No Indicator - Completely hidden</span>
            <p>No indicator is shown at all.</p>
          </ag-collapsible>
        </div>

        <!-- Bordered -->
        <div class="mbe4">
          <h2>Bordered</h2>
        </div>
        <div class="stacked mbe4">
          <ag-collapsible bordered>
            <span slot="summary">Bordered collapsible</span>
            <p>This collapsible has a border around it for visual separation.</p>
          </ag-collapsible>
        </div>

        <!-- With Shadow -->
        <div class="mbe4">
          <h2>With Shadow</h2>
        </div>
        <div class="stacked mbe4">
          <ag-collapsible shadow>
            <span slot="summary">Collapsible with shadow</span>
            <p>This collapsible has a box-shadow applied for depth.</p>
          </ag-collapsible>
        </div>

        <!-- Combined Features -->
        <div class="mbe4">
          <h2>Combined Features</h2>
        </div>
        <div class="stacked mbe4">
          <ag-collapsible bordered shadow>
            <span slot="summary">Bordered with shadow</span>
            <p>This collapsible combines both border and shadow styling for maximum visual impact.</p>
          </ag-collapsible>
        </div>

        <!-- Open by Default -->
        <div class="mbe4">
          <h2>Open by Default</h2>
        </div>
        <div class="stacked mbe4">
          <ag-collapsible bordered open>
            <span slot="summary">Already expanded</span>
            <p>This collapsible starts in an open state using the <code>open</code> attribute.</p>
          </ag-collapsible>
        </div>

        <!-- Rich Content -->
        <div class="mbe4">
          <h2>Rich Content</h2>
        </div>
        <div class="stacked mbe4">
          <ag-collapsible bordered shadow>
            <div slot="summary" class="flex-inline items-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--ag-primary)" stroke-width="2" width="18" height="18" class="mie2" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 16v-4m0-4h.01"/>
              </svg>
              <strong>Product Details</strong>
            </div>
            <div>
              <h4 style="margin-top: 0;">Technical Specifications</h4>
              <ul>
                <li>Processor: Octa-core 2.8 GHz</li>
                <li>Memory: 8GB RAM</li>
                <li>Storage: 256GB SSD</li>
                <li>Display: 15.6" Full HD</li>
              </ul>
              <p>
                <strong>Warranty:</strong> 2 years manufacturer warranty with optional
                extended coverage available.
              </p>
            </div>
          </ag-collapsible>
        </div>

        <!-- FAQ Example -->
        <div class="mbe4">
          <h2>FAQ Example</h2>
        </div>
        <div class="stacked mbe4">
          <ag-collapsible bordered>
            <span slot="summary">What is AgnosticUI?</span>
            <p>
              AgnosticUI is a framework-agnostic component library built with web
              components. It works seamlessly with React, Vue, Svelte, Angular, and
              vanilla JavaScript.
            </p>
          </ag-collapsible>

          <ag-collapsible bordered>
            <span slot="summary">How do I install it?</span>
            <p>You can install AgnosticUI via npm:</p>
            <pre style="background: var(--ag-background-secondary); padding: 1rem; border-radius: 4px; overflow-x: auto;">npm install agnosticui-core</pre>
          </ag-collapsible>

          <ag-collapsible bordered>
            <span slot="summary">Is it accessible?</span>
            <p>
              Yes! All AgnosticUI components are built with accessibility in mind,
              following WAI-ARIA best practices and ensuring keyboard navigation and
              screen reader support.
            </p>
          </ag-collapsible>

          <ag-collapsible bordered>
            <span slot="summary">Can I customize the styling?</span>
            <p>
              Absolutely! AgnosticUI uses CSS Shadow Parts to allow deep customization
              of component internals while maintaining encapsulation. You can also use
              design tokens for consistent theming across your application.
            </p>
          </ag-collapsible>
        </div>

        <!-- Nested Collapsibles -->
        <div class="mbe4">
          <h2>Nested Collapsibles</h2>
        </div>
        <div class="stacked mbe4">
          <ag-collapsible bordered>
            <span slot="summary">Level 1 - Main Topic</span>
            <div>
              <p>This is the main content area.</p>

              <ag-collapsible bordered use-minus style="margin-top: 1rem;">
                <span slot="summary">Level 2 - Subtopic A</span>
                <p>Nested collapsible content for subtopic A. Note the different indicator style.</p>
              </ag-collapsible>

              <ag-collapsible bordered use-minus style="margin-top: 0.5rem;">
                <span slot="summary">Level 2 - Subtopic B</span>
                <p>Nested collapsible content for subtopic B.</p>
              </ag-collapsible>
            </div>
          </ag-collapsible>
        </div>

        <!-- Interactive with Event Handling -->
        <div class="mbe4">
          <h2>Interactive with Event Handling</h2>
        </div>
        <div class="stacked mbe4">
          <ag-collapsible bordered shadow @toggle=${this.handleToggle}>
            <span slot="summary">Click to toggle (watch console)</span>
            <div>
              <p>The collapsible dispatches a <code>toggle</code> event when opened or closed.</p>
            </div>
          </ag-collapsible>
          <p style="margin-top: 1rem;">
            Current state: <strong>${this.isExpanded ? 'Expanded' : 'Collapsed'}</strong>
          </p>
        </div>

        <!-- CSS Parts Customization -->
        <div class="mbe4">
          <h2>CSS Parts Customization</h2>
          <p class="mbe2" style="color: var(--ag-text-secondary); font-size: 0.875rem;">
            Customize collapsible appearance using CSS Shadow Parts without breaking encapsulation.
          </p>
        </div>
        <div class="stacked mbe4">
          <ag-collapsible class="custom-gradient">
            <span slot="summary">Gaudy Gradient</span>
            <p>This collapsible uses a gradient background with white text and custom styling.</p>
          </ag-collapsible>
        </div>
      </section>
    `;
  }
}

// Register the custom element
customElements.define('collapsible-lit-examples', CollapsibleLitExamples);
