
import { LitElement, html } from 'lit';
import 'agnosticui-core/scroll-progress';
import 'agnosticui-core/toggle';

export class ScrollProgressLitExamples extends LitElement {
  static properties = {
    showBar: { type: Boolean },
    showDotTrail: { type: Boolean },
    showBadge: { type: Boolean },
    showRing: { type: Boolean },
  };

  constructor() {
    super();
    this.showBar = true;
    this.showDotTrail = true;
    this.showBadge = true;
    this.showRing = true;
  }

  createRenderRoot() {
    return this;
  }

  handleBarToggle(e) {
    this.showBar = e.target.checked;
  }

  handleDotTrailToggle(e) {
    this.showDotTrail = e.target.checked;
  }

  handleBadgeToggle(e) {
    this.showBadge = e.target.checked;
  }

  handleRingToggle(e) {
    this.showRing = e.target.checked;
  }

  render() {
    return html`
      <section>
        <!-- Mode Controls -->
        <div
          class="mbe4"
          style="background: var(--ag-background-secondary); padding: var(--ag-space-4); border-radius: var(--ag-radius-md); position: sticky; top: 0; z-index: 1000;"
        >
          <h2 style="margin-top: 0;">Active Scroll Indicators</h2>
          <p
            class="mbs2 mbe3"
            style="font-size: 0.875rem; color: var(--ag-text-secondary);"
          >
            Toggle modes on/off to see different scroll progress indicators in action. Scroll down to see them update!
          </p>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
              <ag-toggle ?checked="${this.showBar}" @click="${(e) => { this.showBar = !this.showBar}}"></ag-toggle>
              <span>Bar (Top)</span>
            </label>
            <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
              <ag-toggle ?checked="${this.showDotTrail}" @click="${(e) => { this.showDotTrail = !this.showDotTrail}}"></ag-toggle>
              <span>Dot Trail</span>
            </label>
            <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
              <ag-toggle ?checked="${this.showBadge}" @click="${(e) => { this.showBadge = !this.showBadge}}"></ag-toggle>
              <span>Badge (Bottom Left)</span>
            </label>
            <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
              <ag-toggle ?checked="${this.showRing}" @click="${(e) => { this.showRing = !this.showRing}}"></ag-toggle>
              <span>Ring (Bottom Right)</span>
            </label>
          </div>
        </div>

        <!-- Active Scroll Progress Indicators -->
        ${this.showBar
          ? html`<ag-scroll-progress mode="bar" orientation="top"></ag-scroll-progress>`
          : ''}

        ${this.showDotTrail
          ? html`
            <div style="position: fixed; top: 5rem; right: 3%; z-index: 100;">
              <ag-scroll-progress
                mode="dot-trail"
                dots="7"
                badge-variant="success"
              ></ag-scroll-progress>
            </div>
          `
          : ''}

        ${this.showBadge
          ? html`
            <div style="position: fixed; bottom: var(--ag-space-4); left: var(--ag-space-4); z-index: 100;">
              <ag-scroll-progress
                mode="badge"
                badge-variant="info"
              ></ag-scroll-progress>
            </div>
          `
          : ''}

        ${this.showRing
          ? html`
            <div style="position: fixed; bottom: var(--ag-space-4); right: var(--ag-space-4); z-index: 100;">
              <ag-scroll-progress
                mode="ring"
                ring-size="48"
                ring-variant="primary"
              ></ag-scroll-progress>
            </div>
          `
          : ''}

        <!-- Individual Mode Explanations -->
        <div class="mbe4">
          <h2>Bar Mode</h2>
          <p class="mbs2 mbe3">
            The classic scroll progress bar. Positioned at the top (or bottom) of the viewport, it provides a clear,
            unobtrusive indication of scroll depth. Perfect for long-form content like articles and documentation.
          </p>
          <div style="background: var(--ag-background-secondary); padding: var(--ag-space-4); border-radius: var(--ag-radius-md);">
            <h3 style="margin-top: 0; font-size: 0.875rem;">Props</h3>
            <ul style="margin: 0; padding-left: 1.5rem; font-size: 0.875rem;">
              <li><code>orientation</code>: 'top' or 'bottom'</li>
              <li><code>size</code>: Uses small size for subtle appearance</li>
            </ul>
          </div>
        </div>

        <div class="mbe4">
          <h2>Dot Trail Mode</h2>
          <p class="mbs2 mbe3">
            A minimalist approach using a trail of dots. As you scroll, dots fill from left to right.
            Great for presentations, multi-step forms, or when you want a less prominent indicator.
          </p>
          <div style="background: var(--ag-background-secondary); padding: var(--ag-space-4); border-radius: var(--ag-radius-md);">
            <h3 style="margin-top: 0; font-size: 0.875rem;">Props</h3>
            <ul style="margin: 0; padding-left: 1.5rem; font-size: 0.875rem;">
              <li><code>dots</code>: Number of dots to display (default: 5)</li>
              <li><code>badge-variant</code>: Color variant for filled dots</li>
            </ul>
          </div>
        </div>

        <div class="mbe4">
          <h2>Badge Mode</h2>
          <p class="mbs2 mbe3">
            Displays the exact scroll percentage in a badge. Useful when users need precise feedback
            about their position in the content. Can be positioned anywhere on the page.
          </p>
          <div style="background: var(--ag-background-secondary); padding: var(--ag-space-4); border-radius: var(--ag-radius-md);">
            <h3 style="margin-top: 0; font-size: 0.875rem;">Props</h3>
            <ul style="margin: 0; padding-left: 1.5rem; font-size: 0.875rem;">
              <li><code>badge-variant</code>: Badge color variant</li>
              <li><code>precision</code>: Decimal places (0 for integers like "47%")</li>
            </ul>
          </div>
        </div>

        <div class="mbe4">
          <h2>Ring Mode</h2>
          <p class="mbs2 mbe3">
            A circular progress ring that fills as you scroll. Often paired with floating action buttons
            or scroll-to-top functionality. Provides an elegant, space-efficient indicator.
          </p>
          <div style="background: var(--ag-background-secondary); padding: var(--ag-space-4); border-radius: var(--ag-radius-md);">
            <h3 style="margin-top: 0; font-size: 0.875rem;">Props</h3>
            <ul style="margin: 0; padding-left: 1.5rem; font-size: 0.875rem;">
              <li><code>ring-size</code>: Diameter in pixels (default: 32)</li>
              <li><code>ring-stroke-width</code>: Thickness of the ring (default: 3)</li>
              <li><code>ring-variant</code>: Color variant</li>
            </ul>
          </div>
        </div>

        <!-- Size Variants (Bar Mode) -->
        <div class="mbe4">
          <h2>Bar Size Variants</h2>
          <p class="mbs2 mbe3">Progress bars support three sizes via the underlying Progress component.</p>
          <div style="display: flex; flex-direction: column; gap: 2rem;">
            <div>
              <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; font-weight: 500;">Small (8px) - Default for scroll progress</p>
              <ag-scroll-progress
                mode="bar"
                orientation="top"
                style="position: static;"
              ></ag-scroll-progress>
            </div>
            <div>
              <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; font-weight: 500;">Medium (12px)</p>
              <div style="position: relative;">
                <ag-scroll-progress
                  mode="bar"
                  orientation="top"
                  style="position: static;"
                ></ag-scroll-progress>
              </div>
            </div>
          </div>
        </div>

        <!-- Precision Control -->
        <div class="mbe4">
          <h2>Precision Control</h2>
          <p class="mbs2 mbe3">Control decimal places in percentage display with the <code>precision</code> prop.</p>
          <div style="display: flex; gap: 2rem; flex-wrap: wrap;">
            <div style="text-align: center;">
              <ag-scroll-progress
                mode="badge"
                precision="0"
                badge-variant="primary"
                style="position: static;"
              ></ag-scroll-progress>
              <p style="margin-top: 0.5rem; font-size: 0.875rem;">precision={0}</p>
              <p style="margin: 0; font-size: 0.75rem; color: var(--ag-text-secondary);">Integers (47%)</p>
            </div>
            <div style="text-align: center;">
              <ag-scroll-progress
                mode="badge"
                precision="1"
                badge-variant="success"
                style="position: static;"
              ></ag-scroll-progress>
              <p style="margin-top: 0.5rem; font-size: 0.875rem;">precision={1}</p>
              <p style="margin: 0; font-size: 0.75rem; color: var(--ag-text-secondary);">One decimal (47.3%)</p>
            </div>
            <div style="text-align: center;">
              <ag-scroll-progress
                mode="badge"
                precision="2"
                badge-variant="warning"
                style="position: static;"
              ></ag-scroll-progress>
              <p style="margin-top: 0.5rem; font-size: 0.875rem;">precision={2}</p>
              <p style="margin: 0; font-size: 0.75rem; color: var(--ag-text-secondary);">Two decimals (47.39%)</p>
            </div>
          </div>
        </div>

        <!-- Variants -->
        <div class="mbe4">
          <h2>Color Variants</h2>
          <p class="mbs2 mbe3">Both badge and ring modes support color variants.</p>

          <h3 style="font-size: 1rem; margin-bottom: 1rem;">Badge Variants</h3>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 2rem;">
            <ag-scroll-progress
              mode="badge"
              badge-variant="default"
              style="position: static;"
            ></ag-scroll-progress>
            <ag-scroll-progress
              mode="badge"
              badge-variant="success"
              style="position: static;"
            ></ag-scroll-progress>
            <ag-scroll-progress
              mode="badge"
              badge-variant="warning"
              style="position: static;"
            ></ag-scroll-progress>
            <ag-scroll-progress
              mode="badge"
              badge-variant="danger"
              style="position: static;"
            ></ag-scroll-progress>
            <ag-scroll-progress
              mode="badge"
              badge-variant="info"
              style="position: static;"
            ></ag-scroll-progress>
          </div>

          <h3 style="font-size: 1rem; margin-bottom: 1rem;">Ring Variants</h3>
          <div style="display: flex; gap: 2rem; flex-wrap: wrap;">
            <div style="text-align: center;">
              <ag-scroll-progress
                mode="ring"
                ring-variant="primary"
                ring-size="40"
                style="position: static;"
              ></ag-scroll-progress>
              <p style="margin-top: 0.5rem; font-size: 0.875rem;">Primary</p>
            </div>
            <div style="text-align: center;">
              <ag-scroll-progress
                mode="ring"
                ring-variant="success"
                ring-size="40"
                style="position: static;"
              ></ag-scroll-progress>
              <p style="margin-top: 0.5rem; font-size: 0.875rem;">Success</p>
            </div>
            <div style="text-align: center;">
              <ag-scroll-progress
                mode="ring"
                ring-variant="warning"
                ring-size="40"
                style="position: static;"
              ></ag-scroll-progress>
              <p style="margin-top: 0.5rem; font-size: 0.875rem;">Warning</p>
            </div>
            <div style="text-align: center;">
              <ag-scroll-progress
                mode="ring"
                ring-variant="danger"
                ring-size="40"
                style="position: static;"
              ></ag-scroll-progress>
              <p style="margin-top: 0.5rem; font-size: 0.875rem;">Danger</p>
            </div>
            <div style="text-align: center;">
              <ag-scroll-progress
                mode="ring"
                ring-variant="info"
                ring-size="40"
                style="position: static;"
              ></ag-scroll-progress>
              <p style="margin-top: 0.5rem; font-size: 0.875rem;">Info</p>
            </div>
          </div>
        </div>

        <!-- Scrollable content to demonstrate -->
        <div class="mbe4">
          <h2>Keep Scrolling!</h2>
          <p class="mbs2 mbe3">Scroll down to see the active progress indicators update in real-time.</p>
          <div style="background: var(--ag-background-secondary); padding: var(--ag-space-4); border-radius: var(--ag-radius-md);">
            ${Array.from({ length: 30 }).map(
              (_, i) => html`
                <p style="margin: 0.5rem 0; color: var(--ag-text-secondary);">
                  Paragraph ${i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              `
            )}
          </div>
        </div>

        <div
          class="mbe4"
          style="text-align: center; padding: var(--ag-space-8) 0;"
        >
          <h2>🎉 You've reached the end!</h2>
          <p style="color: var(--ag-text-secondary);">Notice how all active progress indicators show 100%</p>
        </div>
      </section>
    `;
  }
}

customElements.define('scroll-progress-lit-examples', ScrollProgressLitExamples);
