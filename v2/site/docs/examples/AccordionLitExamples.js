import { LitElement, html } from 'lit';
import 'agnosticui-core/accordion';

export class AccordionLitExamples extends LitElement {
  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <section>
        <div class="mbe4">
          <h2>Basic Accordion (Default)</h2>
          <p class="mbe2" style="color: var(--ag-text-secondary); font-size: 0.875rem;">
            By default, the Accordion provides a chevron which points down when
            closed, then rotates 180° to point up when open. See below for how to
            opt out or use different indicators.
          </p>
        </div>
        <div class="stacked mbe4">
          <ag-accordion>
            <ag-accordion-item use-chevron>
              <span slot="header">Chevron Section 1</span>
              <div slot="content">
                <p>Default chevron indicator with smooth rotation</p>
              </div>
            </ag-accordion-item>
            <ag-accordion-item use-chevron>
              <span slot="header">Chevron Section 2</span>
              <div slot="content">
                <p>Click to see the 180° rotation animation</p>
              </div>
            </ag-accordion-item>
            <ag-accordion-item use-chevron>
              <span slot="header">Chevron Section 3</span>
              <div slot="content">
                <p>Classic accordion indicator style</p>
              </div>
            </ag-accordion-item>
          </ag-accordion>
        </div>

        <div class="mbe4">
          <h2>X Indicator</h2>
          <p class="mbe2" style="color: var(--ag-text-secondary); font-size: 0.875rem;">
            Plus rotated 180° (upside down) when closed, rotates to 45° forming
            an X when open.
          </p>
        </div>
        <div class="stacked mbe4">
          <ag-accordion>
            <ag-accordion-item use-x>
              <span slot="header">X Indicator Section 1</span>
              <div slot="content">
                <p>Plus transforms into X when opened</p>
              </div>
            </ag-accordion-item>
            <ag-accordion-item use-x>
              <span slot="header">X Indicator Section 2</span>
              <div slot="content">
                <p>Smooth transition from plus to X</p>
              </div>
            </ag-accordion-item>
            <ag-accordion-item use-x>
              <span slot="header">X Indicator Section 3</span>
              <div slot="content">
                <p>Modern accordion indicator style</p>
              </div>
            </ag-accordion-item>
          </ag-accordion>
        </div>

        <div class="mbe4">
          <h2>Plus/Minus Indicator</h2>
          <p class="mbe2" style="color: var(--ag-text-secondary); font-size: 0.875rem;">
            Plus transitions to minus when open with smooth animation.
          </p>
        </div>
        <div class="stacked mbe4">
          <ag-accordion>
            <ag-accordion-item use-minus>
              <span slot="header">Plus/Minus Section 1</span>
              <div slot="content">
                <p>Plus changes to minus when opened</p>
              </div>
            </ag-accordion-item>
            <ag-accordion-item use-minus>
              <span slot="header">Plus/Minus Section 2</span>
              <div slot="content">
                <p>Classic expand/collapse indicator</p>
              </div>
            </ag-accordion-item>
            <ag-accordion-item use-minus>
              <span slot="header">Plus/Minus Section 3</span>
              <div slot="content">
                <p>Clear visual indication of state</p>
              </div>
            </ag-accordion-item>
          </ag-accordion>
        </div>

        <div class="mbe4">
          <h2>No Indicator</h2>
          <p class="mbe2" style="color: var(--ag-text-secondary); font-size: 0.875rem;">
            Accordion items without any visual indicator.
          </p>
        </div>
        <div class="stacked mbe4">
          <ag-accordion>
            <ag-accordion-item no-indicator>
              <span slot="header">No Indicator Section 1</span>
              <div slot="content">
                <p>Clean header without indicator icon</p>
              </div>
            </ag-accordion-item>
            <ag-accordion-item no-indicator>
              <span slot="header">No Indicator Section 2</span>
              <div slot="content">
                <p>Minimal design focused on content</p>
              </div>
            </ag-accordion-item>
            <ag-accordion-item no-indicator>
              <span slot="header">No Indicator Section 3</span>
              <div slot="content">
                <p>Simple accordion without visual clutter</p>
              </div>
            </ag-accordion-item>
          </ag-accordion>
        </div>

        <div class="mbe4">
          <h2>Bordered</h2>
        </div>
        <div class="stacked mbe4">
          <ag-accordion>
            <ag-accordion-item bordered use-chevron>
              <span slot="header">Bordered Item 1</span>
              <div slot="content">
                <p>This accordion has borders on the headers</p>
              </div>
            </ag-accordion-item>
            <ag-accordion-item bordered use-chevron>
              <span slot="header">Bordered Item 2</span>
              <div slot="content">
                <p>Another bordered item</p>
              </div>
            </ag-accordion-item>
            <ag-accordion-item bordered use-chevron>
              <span slot="header">Bordered Item 3</span>
              <div slot="content">
                <p>Third bordered item</p>
              </div>
            </ag-accordion-item>
          </ag-accordion>
        </div>

        <div class="mbe4">
          <h2>With Background</h2>
        </div>
        <div class="stacked mbe4">
          <ag-accordion>
            <ag-accordion-item background use-chevron>
              <span slot="header">Background Item 1</span>
              <div slot="content">
                <p>This accordion has background color on headers</p>
              </div>
            </ag-accordion-item>
            <ag-accordion-item background use-chevron>
              <span slot="header">Background Item 2</span>
              <div slot="content">
                <p>Another item with background</p>
              </div>
            </ag-accordion-item>
            <ag-accordion-item background use-chevron>
              <span slot="header">Background Item 3</span>
              <div slot="content">
                <p>Third item with background</p>
              </div>
            </ag-accordion-item>
          </ag-accordion>
        </div>

        <div class="mbe4">
          <h2>One Item Open</h2>
        </div>
        <div class="stacked mbe4">
          <ag-accordion>
            <ag-accordion-item use-chevron>
              <span slot="header">Closed Item</span>
              <div slot="content">
                <p>This item starts closed</p>
              </div>
            </ag-accordion-item>
            <ag-accordion-item use-chevron open>
              <span slot="header">Open Item</span>
              <div slot="content">
                <p>This item starts open</p>
              </div>
            </ag-accordion-item>
            <ag-accordion-item use-chevron>
              <span slot="header">Another Closed Item</span>
              <div slot="content">
                <p>This item also starts closed</p>
              </div>
            </ag-accordion-item>
          </ag-accordion>
        </div>

        <div class="mbe4">
          <h2>Disabled State</h2>
        </div>
        <div class="stacked mbe4">
          <ag-accordion>
            <ag-accordion-item use-chevron>
              <span slot="header">Enabled Item</span>
              <div slot="content">
                <p>This item can be toggled</p>
              </div>
            </ag-accordion-item>
            <ag-accordion-item use-chevron disabled>
              <span slot="header">Disabled Item</span>
              <div slot="content">
                <p>This item cannot be toggled</p>
              </div>
            </ag-accordion-item>
            <ag-accordion-item use-chevron>
              <span slot="header">Another Enabled Item</span>
              <div slot="content">
                <p>This item can also be toggled</p>
              </div>
            </ag-accordion-item>
          </ag-accordion>
        </div>

        <div class="mbe4">
          <h2>Rich Content</h2>
        </div>
        <div class="stacked mbe4">
          <ag-accordion>
            <ag-accordion-item use-chevron bordered>
              <span slot="header">
                <div class="flex-inline items-center">
                  <svg
                    class="mie2"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--ag-primary)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                  </svg>
                  Features
                </div>
              </span>
              <div slot="content">
                <ul>
                  <li>Accessible by default with ARIA attributes</li>
                  <li>Keyboard navigation support</li>
                  <li>Customizable heading levels</li>
                  <li>Multiple styling options</li>
                </ul>
              </div>
            </ag-accordion-item>
            <ag-accordion-item use-chevron bordered>
              <span slot="header">
                <div class="flex-inline items-center">
                  <svg
                    class="mie2"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--ag-secondary)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                  Code Example
                </div>
              </span>
              <div slot="content">
                <pre style="background: var(--ag-background-secondary); padding: 1rem; border-radius: 4px; overflow-x: auto;">
&lt;ag-accordion-item use-chevron&gt;
  &lt;span slot="header"&gt;Title&lt;/span&gt;
  &lt;div slot="content"&gt;Content&lt;/div&gt;
&lt;/ag-accordion-item&gt;</pre>
              </div>
            </ag-accordion-item>
            <ag-accordion-item use-chevron bordered>
              <span slot="header">
                <div class="flex-inline items-center">
                  <svg
                    class="mie2"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--ag-success)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <path d="M12 17h.01" />
                  </svg>
                  More Information
                </div>
              </span>
              <div slot="content">
                <p>Accordions are great for:</p>
                <ul>
                  <li>FAQ sections</li>
                  <li>Feature lists</li>
                  <li>Documentation</li>
                  <li>Progressive disclosure</li>
                </ul>
              </div>
            </ag-accordion-item>
          </ag-accordion>
        </div>

        <div class="mbe4">
          <h2>CSS Parts Customization</h2>
          <p class="mbe2" style="color: var(--ag-text-secondary); font-size: 0.875rem;">
            Customize accordion appearance using CSS Shadow Parts without
            breaking encapsulation.
          </p>
        </div>
        <div class="stacked mbe4">
          <ag-accordion>
            <ag-accordion-item class="custom-minimal-accordion" use-chevron>
              <span slot="header">Minimal Border Style</span>
              <div slot="content">
                <p>
                  This variant uses a minimal border-left design with subtle
                  styling.
                </p>
              </div>
            </ag-accordion-item>
            <ag-accordion-item class="custom-minimal-accordion" use-chevron>
              <span slot="header">Another Minimal Item</span>
              <div slot="content">
                <p>Clean and simple styling focused on content hierarchy.</p>
              </div>
            </ag-accordion-item>
          </ag-accordion>
        </div>

        <style>
          /* CSS Parts customization examples */
          .custom-minimal-accordion::part(ag-accordion-header-wrapper) {
            border-left: 4px solid var(--ag-primary);
            padding-left: 12px;
          }

          .custom-minimal-accordion::part(ag-accordion-header) {
            font-weight: 500;
            color: var(--ag-text-primary);
          }

          .custom-minimal-accordion::part(ag-accordion-content) {
            padding-left: 16px;
            border-left: 2px solid #e5e7eb;
            margin-left: 2px;
          }

          .custom-minimal-accordion::part(ag-accordion-indicator) {
            color: var(--ag-primary);
          }
        </style>
      </section>
    `;
  }
}

customElements.define('accordion-lit-examples', AccordionLitExamples);
