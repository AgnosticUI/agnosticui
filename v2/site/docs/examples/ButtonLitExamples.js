import { LitElement, html } from 'lit';
import 'agnosticui-core/button';
import 'agnosticui-core/icon';

export class ButtonLitExamples extends LitElement {
  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <section>
        <!-- Default -->
        <div class="mbe4">
          <ag-button class="mie2" title="Default">Default</ag-button>
        </div>

        <!-- Rounded Variants -->
        <div class="mbe2">
          <h2>Rounded Variants</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-button shape="rounded" title="Default">Default</ag-button>
          <ag-button shape="rounded" variant="primary" title="Primary">Primary</ag-button>
          <ag-button shape="rounded" variant="secondary" title="Secondary">Secondary</ag-button>
          <ag-button shape="rounded" variant="success" title="Success">Success</ag-button>
          <ag-button shape="rounded" variant="warning" title="Warning">Warning</ag-button>
          <ag-button shape="rounded" variant="danger" title="Danger">Danger</ag-button>
          <ag-button shape="rounded" variant="monochrome" title="Monochrome">Monochrome</ag-button>
        </div>

        <!-- Shapes -->
        <div class="mbe2">
          <h2>Shapes</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-button shape="rounded" variant="primary" bordered title="Rounded Button">Rounded</ag-button>
          <ag-button shape="capsule" variant="success" bordered title="Capsule Button">Capsule</ag-button>
          <ag-button shape="circle" bordered title="Circle Button">C</ag-button>
          <ag-button shape="square" variant="secondary" bordered title="Square Button">S</ag-button>
          <ag-button shape="rounded-square" bordered variant="danger" title="Rounded Square Button">RS</ag-button>
        </div>

        <!-- Bordered -->
        <div class="mbe2">
          <h2>Bordered</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-button bordered shape="rounded" title="Default">Default</ag-button>
          <ag-button bordered shape="rounded" variant="primary" title="Primary">Primary</ag-button>
          <ag-button bordered shape="rounded" variant="secondary" title="Secondary">Secondary</ag-button>
          <ag-button bordered shape="rounded" variant="success" title="Success">Success</ag-button>
          <ag-button bordered shape="rounded" variant="warning" title="Warning">Warning</ag-button>
          <ag-button bordered shape="rounded" variant="danger" title="Danger">Danger</ag-button>
          <ag-button bordered shape="rounded" variant="monochrome" title="Monochrome">Monochrome</ag-button>
        </div>

        <!-- Sizes -->
        <div class="mbe2">
          <h2>Sizes</h2>
        </div>

        <!-- Default sizes -->
        <div class="stacked-mobile mbe4">
          <ag-button size="x-sm" shape="rounded" title="Extra Small">Extra Small</ag-button>
          <ag-button size="sm" shape="rounded" title="Small">Small</ag-button>
          <ag-button size="md" shape="rounded" title="Medium">Medium</ag-button>
          <ag-button size="lg" shape="rounded" title="Large">Large</ag-button>
          <ag-button size="xl" shape="rounded" title="Extra Large">Extra Large</ag-button>
        </div>

        <!-- Bordered sizes -->
        <div class="stacked-mobile mbe4">
          <ag-button bordered size="x-sm" shape="rounded" title="Extra Small">Extra Small</ag-button>
          <ag-button bordered size="sm" shape="rounded" title="Small">Small</ag-button>
          <ag-button bordered size="md" shape="rounded" title="Medium">Medium</ag-button>
          <ag-button bordered size="lg" shape="rounded" title="Large">Large</ag-button>
          <ag-button bordered size="xl" shape="rounded" title="Extra Large">Extra Large</ag-button>
        </div>

        <!-- Primary sizes -->
        <div class="stacked-mobile mbe4">
          <ag-button size="x-sm" variant="primary" shape="rounded" title="Extra Small">Extra Small</ag-button>
          <ag-button size="sm" variant="primary" shape="rounded" title="Small">Small</ag-button>
          <ag-button size="md" variant="primary" shape="rounded" title="Medium">Medium</ag-button>
          <ag-button size="lg" variant="primary" shape="rounded" title="Large">Large</ag-button>
          <ag-button size="xl" variant="primary" shape="rounded" title="Extra Large">Extra Large</ag-button>
        </div>

        <!-- Primary bordered sizes -->
        <div class="stacked-mobile mbe4">
          <ag-button size="x-sm" variant="primary" bordered shape="rounded" title="Extra Small">Extra Small</ag-button>
          <ag-button size="sm" variant="primary" bordered shape="rounded" title="Small">Small</ag-button>
          <ag-button size="md" variant="primary" bordered shape="rounded" title="Medium">Medium</ag-button>
          <ag-button size="lg" variant="primary" bordered shape="rounded" title="Large">Large</ag-button>
          <ag-button size="xl" variant="primary" bordered shape="rounded" title="Extra Large">Extra Large</ag-button>
        </div>

        <!-- Success sizes -->
        <div class="stacked-mobile mbe4">
          <ag-button size="x-sm" variant="success" shape="rounded" title="Extra Small">Extra Small</ag-button>
          <ag-button size="sm" variant="success" shape="rounded" title="Small">Small</ag-button>
          <ag-button size="md" variant="success" shape="rounded" title="Medium">Medium</ag-button>
          <ag-button size="lg" variant="success" shape="rounded" title="Large">Large</ag-button>
          <ag-button size="xl" variant="success" shape="rounded" title="Extra Large">Extra Large</ag-button>
        </div>

        <!-- Success bordered sizes -->
        <div class="stacked-mobile mbe4">
          <ag-button size="x-sm" variant="success" bordered shape="rounded" title="Extra Small">Extra Small</ag-button>
          <ag-button size="sm" variant="success" bordered shape="rounded" title="Small">Small</ag-button>
          <ag-button size="md" variant="success" bordered shape="rounded" title="Medium">Medium</ag-button>
          <ag-button size="lg" variant="success" bordered shape="rounded" title="Large">Large</ag-button>
          <ag-button size="xl" variant="success" bordered shape="rounded" title="Extra Large">Extra Large</ag-button>
        </div>

        <!-- Warning sizes -->
        <div class="stacked-mobile mbe4">
          <ag-button size="x-sm" variant="warning" shape="rounded" title="Extra Small">Extra Small</ag-button>
          <ag-button size="sm" variant="warning" shape="rounded" title="Small">Small</ag-button>
          <ag-button size="md" variant="warning" shape="rounded" title="Medium">Medium</ag-button>
          <ag-button size="lg" variant="warning" shape="rounded" title="Large">Large</ag-button>
          <ag-button size="xl" variant="warning" shape="rounded" title="Extra Large">Extra Large</ag-button>
        </div>

        <!-- Warning bordered sizes -->
        <div class="stacked-mobile mbe4">
          <ag-button size="x-sm" variant="warning" bordered shape="rounded" title="Extra Small">Extra Small</ag-button>
          <ag-button size="sm" variant="warning" bordered shape="rounded" title="Small">Small</ag-button>
          <ag-button size="md" variant="warning" bordered shape="rounded" title="Medium">Medium</ag-button>
          <ag-button size="lg" variant="warning" bordered shape="rounded" title="Large">Large</ag-button>
          <ag-button size="xl" variant="warning" bordered shape="rounded" title="Extra Large">Extra Large</ag-button>
        </div>

        <!-- Danger sizes -->
        <div class="stacked-mobile mbe4">
          <ag-button size="x-sm" variant="danger" shape="rounded" title="Extra Small">Extra Small</ag-button>
          <ag-button size="sm" variant="danger" shape="rounded" title="Small">Small</ag-button>
          <ag-button size="md" variant="danger" shape="rounded" title="Medium">Medium</ag-button>
          <ag-button size="lg" variant="danger" shape="rounded" title="Large">Large</ag-button>
          <ag-button size="xl" variant="danger" shape="rounded" title="Extra Large">Extra Large</ag-button>
        </div>

        <!-- Danger bordered sizes -->
        <div class="stacked-mobile mbe4">
          <ag-button size="x-sm" bordered variant="danger" shape="rounded" title="Extra Small">Extra Small</ag-button>
          <ag-button size="sm" bordered variant="danger" shape="rounded" title="Small">Small</ag-button>
          <ag-button size="md" bordered variant="danger" shape="rounded" title="Medium">Medium</ag-button>
          <ag-button size="lg" bordered variant="danger" shape="rounded" title="Large">Large</ag-button>
          <ag-button size="xl" bordered variant="danger" shape="rounded" title="Extra Large">Extra Large</ag-button>
        </div>

        <!-- Monochrome sizes -->
        <div class="stacked-mobile mbe4">
          <ag-button size="x-sm" variant="monochrome" shape="rounded" title="Extra Small">Extra Small</ag-button>
          <ag-button size="sm" variant="monochrome" shape="rounded" title="Small">Small</ag-button>
          <ag-button size="md" variant="monochrome" shape="rounded" title="Medium">Medium</ag-button>
          <ag-button size="lg" variant="monochrome" shape="rounded" title="Large">Large</ag-button>
          <ag-button size="xl" variant="monochrome" shape="rounded" title="Extra Large">Extra Large</ag-button>
        </div>

        <!-- Monochrome bordered sizes -->
        <div class="stacked-mobile mbe4">
          <ag-button size="x-sm" bordered variant="monochrome" shape="rounded" title="Extra Small">Extra Small</ag-button>
          <ag-button size="sm" bordered variant="monochrome" shape="rounded" title="Small">Small</ag-button>
          <ag-button size="md" bordered variant="monochrome" shape="rounded" title="Medium">Medium</ag-button>
          <ag-button size="lg" bordered variant="monochrome" shape="rounded" title="Large">Large</ag-button>
          <ag-button size="xl" bordered variant="monochrome" shape="rounded" title="Extra Large">Extra Large</ag-button>
        </div>

        <!-- Icons Small -->
        <div class="mbe2">
          <h2>Icons Small</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <div class="flex-inline" role="group" aria-label="Framework selection">
            <ag-button variant="primary" size="sm" shape="rounded" class="mie2" title="Invite Members">
              <ag-icon size="16" no-fill>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </ag-icon>
              <span class="mis1 mie2">Invite Members</span>
            </ag-button>
            <ag-button variant="primary" size="sm" shape="rounded" bordered class="mis1 mie2" title="Create New">
              <ag-icon size="16" no-fill>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M12 5v14m-7-7h14"/>
                </svg>
              </ag-icon>
              <span>Create New</span>
            </ag-button>
            <ag-button variant="danger" size="sm" shape="rounded" title="Record">
              <ag-icon size="16" no-fill>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M12 1a3 3 0 003 3v8a3 3 0 11-6 0V4a3 3 0 003-3zM19 10v2a7 7 0 01-14 0v-2M12 19v4m-4 0h8"/>
                </svg>
              </ag-icon>
              <span>Record</span>
            </ag-button>
          </div>
        </div>

        <!-- Icons Only -->
        <div class="mbe2">
          <h2>Icons Only</h2>
          <p>To create an accessible icon-only button, provide an accessible label using the <code>aria-label</code> attribute. This ensures screen reader users understand the button's action without a visible text label. Ensure you also provide a clear <code>title</code> attribute for mouse users who hover over the icon.</p>
        </div>
        <div class="stacked-mobile mbe4">
          <div class="flex-inline" role="group" aria-label="Framework selection">
            <ag-button variant="primary" size="sm" shape="rounded" title="Invite Members" aria-label="Invite Members" class="mie2">
              <ag-icon size="16" no-fill>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </ag-icon>
            </ag-button>
          </div>
        </div>

        <!-- Icons -->
        <div class="mbe2">
          <h2>Icons</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <div class="flex-inline" role="group" aria-label="Framework selection">
            <ag-button variant="primary" shape="rounded" title="Invite Members" class="mie2">
              <ag-icon size="18" no-fill>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </ag-icon>
              <span class="mis1 mie2">Invite Members</span>
            </ag-button>
            <ag-button variant="primary" shape="rounded" title="Create new" bordered class="mis1 mie2">
              <ag-icon size="18" no-fill>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M12 5v14m-7-7h14"/>
                </svg>
              </ag-icon>
              <span>Create New</span>
            </ag-button>
            <ag-button variant="danger" title="Record" shape="rounded">
              <ag-icon size="18" no-fill>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M12 1a3 3 0 003 3v8a3 3 0 11-6 0V4a3 3 0 003-3zM19 10v2a7 7 0 01-14 0v-2M12 19v4m-4 0h8"/>
                </svg>
              </ag-icon>
              <span>Record</span>
            </ag-button>
          </div>
        </div>

        <!-- Grouped -->
        <div class="mbe2">
          <h2>Grouped</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <div class="flex-inline" role="group" aria-label="Framework selection">
            <ag-button grouped title="React" bordered variant="secondary">React</ag-button>
            <ag-button grouped title="Vue" bordered variant="secondary">Vue</ag-button>
            <ag-button grouped title="Svelte" bordered variant="secondary">Svelte</ag-button>
            <ag-button grouped title="Lit" bordered variant="secondary">Lit</ag-button>
          </div>
        </div>
        <div class="stacked-mobile mbe4">
          <div class="flex-inline" role="group" aria-label="Framework selection">
            <ag-button grouped title="React" bordered variant="primary">React</ag-button>
            <ag-button grouped title="Vue" bordered variant="primary">Vue</ag-button>
            <ag-button grouped title="Svelte" bordered variant="primary">Svelte</ag-button>
            <ag-button grouped title="Lit" bordered variant="primary">Lit</ag-button>
          </div>
        </div>
        <div class="stacked-mobile mbe4">
          <div class="flex-inline" role="group" aria-label="Framework selection">
            <ag-button grouped title="React" bordered variant="monochrome">React</ag-button>
            <ag-button grouped title="Vue" bordered variant="monochrome">Vue</ag-button>
            <ag-button grouped title="Svelte" bordered variant="monochrome">Svelte</ag-button>
            <ag-button grouped title="Lit" bordered variant="monochrome">Lit</ag-button>
          </div>
        </div>

        <!-- Miscellaneous -->
        <div class="mbe2">
          <h2>Miscellaneous</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-button ghost title="Ghost button" class="mie2">Ghost</ag-button>
          <ag-button link title="button link" class="mie2">Link</ag-button>
          <ag-button type="submit" bordered title="submit button" shape="rounded" variant="primary" class="mie2">Submit</ag-button>
          <ag-button title="toggle button" toggle class="mie2">Toggle</ag-button>
          <ag-button title="example disabled button" disabled class="mie2">Disabled</ag-button>
        </div>

        <!-- CSS Parts Customization -->
        <div class="mbe4">
          <h2>CSS Parts Customization</h2>
          <p class="mbe2" style="color: var(--ag-text-secondary); font-size: 0.875rem;">
            Customize button appearance using CSS Shadow Parts without breaking encapsulation.
          </p>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-button title="Gradient Button" class="custom-gradient-button mie3">
            Gradient Button
          </ag-button>
        </div>
      </section>
    `;
  }
}

// Register the custom element
customElements.define('button-lit-examples', ButtonLitExamples);
