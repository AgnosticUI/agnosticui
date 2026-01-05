import { LitElement, html } from 'lit';
import 'agnosticui-core/button-fx';
import 'agnosticui-core/icon';
import 'agnosticui-core/alert';

export class ButtonFxLitExamples extends LitElement {
  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <section>
        <!-- Hover Effects -->
        <div class="mbe4">
          <h2>Hover Effects</h2>
          <p class="mbe2">These effects trigger on hover</p>
        </div>
        <div class="stacked-mobile mbe6">
          <ag-button-fx fx="bounce" fx-ease="spring-md" title="Bounce" variant="primary" shape="rounded">
            Bounce
          </ag-button-fx>
          <ag-button-fx fx="pulse" fx-ease="spring-md" title="Pulse" variant="success" shape="rounded">
            Pulse
          </ag-button-fx>
          <ag-button-fx fx="jelly" fx-ease="spring-lg" fx-speed="lg" title="Jelly button" variant="warning" shape="rounded">
            Jelly
          </ag-button-fx>
          <ag-button-fx fx="grow" fx-ease="spring-md" title="Grow button" variant="primary" shape="rounded">
            Grow
          </ag-button-fx>
          <ag-button-fx fx="shrink" fx-ease="spring-md" title="Shrink button" variant="secondary" shape="rounded">
            Shrink
          </ag-button-fx>
        </div>

        <!-- Click Effects -->
        <div class="mbe4">
          <h2>Click Effects</h2>
          <p class="mbe2">These effects trigger on click/active state</p>
        </div>
        <div class="stacked-mobile mbe6">
          <ag-button-fx fx="press-pop" fx-ease="spring-sm" title="Press Pop" variant="primary" shape="rounded">
            Press Pop
          </ag-button-fx>
          <ag-button-fx fx="press-pop" variant="monochrome" title="Send the email" shape="rounded-square" size="lg">
            <ag-icon no-fill>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </ag-icon>
            <span aria-label="Send the email" style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0;">Send the email</span>
          </ag-button-fx>
          <ag-button-fx fx="press-shadow" variant="warning" title="Press Shadow" shape="rounded">
            Press Shadow
          </ag-button-fx>
          <ag-button-fx fx="press-shadow" variant="success" title="Press Shadow" shape="rounded">
            Press Shadow
          </ag-button-fx>
          <ag-button-fx fx="press-shadow" variant="primary" title="Shopping cart button" shape="rounded-square" size="lg">
            <ag-icon no-fill>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M9 2L1 8l8 6 8-6-8-6z"/>
                <path d="M9 20V8M23 14l-8 6-8-6"/>
              </svg>
            </ag-icon>
            <span aria-label="Proceed to your cart." style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0;">Proceed to your cart.</span>
          </ag-button-fx>
          <ag-button-fx fx="press-shadow" variant="danger" title="Dangerous action button" shape="rounded-square" size="lg">
            <ag-icon no-fill>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <circle cx="12" cy="12" r="1"/>
                <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"/>
              </svg>
            </ag-icon>
            <span aria-label="Do the dangerous thing" style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0;">Do the dangerous thing</span>
          </ag-button-fx>
        </div>

        <!-- Background Effects -->
        <div class="mbe4">
          <h2>Background Effects</h2>
          <p class="mbe2">Effects that animate the button background</p>
        </div>
        <div class="stacked-mobile mbe6">
          <ag-button-fx fx="bg-slide" fx-speed="md" fx-ease="ease-out" title="BG Slide" variant="primary" shape="rounded">
            BG Slide
          </ag-button-fx>
          <ag-button-fx fx="side-slide" fx-speed="md" fx-ease="ease-out" variant="success" shape="rounded">
            Side Slide
          </ag-button-fx>
        </div>

        <!-- Motion Effects -->
        <div class="mbe4">
          <h2>Motion Effects</h2>
          <p class="mbe2">Dynamic movement effects</p>
        </div>
        <div class="stacked-mobile mbe6">
          <ag-button-fx fx="wobble" fx-ease="spring-md" title="Wobble" variant="warning" shape="rounded">
            Wobble
          </ag-button-fx>
          <ag-button-fx fx="shake" fx-speed="sm" title="Shake" variant="danger" shape="rounded">
            Shake
          </ag-button-fx>
          <ag-button-fx fx="push" fx-ease="spring-sm" title="Push" variant="primary" shape="rounded">
            Push
          </ag-button-fx>
        </div>

        <!-- Bordered Buttons -->
        <div class="mbe4">
          <h2>Bordered Buttons</h2>
          <p class="mbe2">Effects work with bordered button styles</p>
        </div>
        <div class="stacked-mobile mbe6">
          <ag-button-fx fx="jelly" fx-ease="spring-lg" fx-speed="lg" title="Primary Bordered" variant="primary" bordered shape="rounded">
            Primary
          </ag-button-fx>
          <ag-button-fx fx="jelly" fx-speed="lg" fx-ease="spring-lg" title="Success Bordered" variant="success" bordered shape="capsule">
            Capsule
          </ag-button-fx>
          <ag-button-fx fx="jelly" fx-ease="spring-lg" fx-speed="lg" title="Monochrome Bordered" variant="monochrome" bordered shape="rounded-square">
            <ag-icon no-fill>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6"/>
              </svg>
            </ag-icon>
            <span aria-label="Toss it in the trash" style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0;">Toss it in the trash</span>
          </ag-button-fx>
          <ag-button-fx fx="jelly" fx-speed="lg" fx-ease="spring-lg" title="Danger Bordered" variant="danger" bordered shape="rounded-square">
            <ag-icon no-fill>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <ellipse cx="12" cy="5" rx="9" ry="3"/>
                <path d="M3 5v14a9 3 0 0018 0V5"/>
              </svg>
            </ag-icon>
            <span aria-label="Write the SQL to the Database" style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0;">Write the SQL to the Database</span>
          </ag-button-fx>
          <ag-button-fx fx="jelly" fx-ease="spring-lg" fx-speed="lg" title="Warning Bordered" variant="warning" bordered shape="rounded-square">
            <ag-icon no-fill>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <circle cx="12" cy="12" r="1"/>
                <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"/>
              </svg>
            </ag-icon>
            <span aria-label="Warning - you better be careful." style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0;">Warning - you better be careful.</span>
          </ag-button-fx>
        </div>

        <!-- Composite Effect -->
        <div class="mbe4">
          <h2>Composite Effect</h2>
          <p class="mbe2">Special multi-stage animation</p>
        </div>
        <div class="stacked-mobile mbe6">
          <ag-button-fx fx="pulse-wobble" fx-speed="xl" title="Pulse → Wobble" variant="primary" shape="rounded">
            Pulse → Wobble
          </ag-button-fx>
          <ag-button-fx fx="pulse-wobble" fx-speed="xl" title="Pulse → Wobble" variant="success" shape="rounded">
            Pulse → Wobble
          </ag-button-fx>
          <ag-button-fx fx="pulse-wobble" fx-speed="xl" title="Pulse → Wobble" variant="monochrome" shape="rounded">
            Pulse → Wobble
          </ag-button-fx>
          <ag-button-fx fx="pulse-wobble" fx-speed="xl" title="Pulse → Wobble" variant="danger" shape="rounded">
            Pulse → Wobble
          </ag-button-fx>
        </div>

        <!-- Speed Variations -->
        <div class="mbe4">
          <h2>Speed Variations</h2>
          <p class="mbe2">Control animation speed with the fxSpeed prop</p>
        </div>
        <div class="stacked-mobile mbe6">
          <ag-button-fx fx="pulse" fx-speed="xs" title="XS" variant="primary">XS</ag-button-fx>
          <ag-button-fx fx="pulse" fx-speed="sm" title="SM" variant="primary">SM</ag-button-fx>
          <ag-button-fx fx="pulse" fx-speed="md" title="MD" variant="primary">MD</ag-button-fx>
          <ag-button-fx fx="pulse" fx-speed="lg" title="LG" variant="primary">LG</ag-button-fx>
          <ag-button-fx fx="pulse" fx-speed="xl" title="XL" variant="primary">XL</ag-button-fx>
        </div>

        <!-- Easing Functions -->
        <div class="mbe4">
          <h2>Easing Functions</h2>
          <p class="mbe2">Different easing functions create different animation feels</p>
          <ag-alert bordered-left>
            Examples use <code>fx-speed="xl"</code> to make easing differences more visible.
            For production, prefer <code>"sm"</code> or <code>"md"</code> speeds.
          </ag-alert>
        </div>
        <div class="stacked-mobile mbe6">
          <ag-button-fx fx="bounce" fx-ease="ease" fx-speed="xl" title="Ease" size="sm" variant="primary">Ease</ag-button-fx>
          <ag-button-fx fx="bounce" fx-ease="ease-in" fx-speed="xl" title="Ease-In" size="sm" variant="primary">Ease-In</ag-button-fx>
          <ag-button-fx fx="bounce" fx-ease="ease-out" fx-speed="xl" title="Ease-Out" size="sm" variant="primary">Ease-Out</ag-button-fx>
          <ag-button-fx fx="bounce" fx-ease="bounce" fx-speed="xl" title="Bounce" size="sm" variant="primary">Bounce</ag-button-fx>
          <ag-button-fx fx="bounce" fx-ease="spring-sm" fx-speed="xl" title="Spring SM" size="sm" variant="primary">Spring SM</ag-button-fx>
          <ag-button-fx fx="bounce" fx-ease="spring-md" fx-speed="xl" title="Spring MD" size="sm" variant="primary">Spring MD</ag-button-fx>
          <ag-button-fx fx="bounce" fx-ease="spring-lg" fx-speed="xl" title="Spring SM" size="sm" variant="primary">Spring LG</ag-button-fx>
        </div>

        <!-- Disabled State -->
        <div class="mbe4">
          <h2>Disabling Effects</h2>
          <p class="example-description">
            These buttons have <code>fx="bounce"</code> but <code>fx-disabled="true"</code>
            prevents the animation from playing while keeping the buttons clickable
          </p>
        </div>
        <div class="stacked-mobile mbe6">
          <ag-button-fx fx="bounce" fx-disabled title="FX Disabled" variant="primary">
            FX Disabled
          </ag-button-fx>
          <ag-button-fx fx="bounce" fx-disabled title="FX Disabled" variant="secondary">
            FX Disabled
          </ag-button-fx>
        </div>
      </section>
    `;
  }
}

// Register the custom element
customElements.define('buttonfx-lit-examples', ButtonFxLitExamples);
