import { LitElement, html } from 'lit';
import 'agnosticui-core/icon-button';

export class IconButtonLitExamples extends LitElement {
  constructor() {
    super();
    this.isFavorite = false;
    this.isBookmarked = false;
    this.notificationsOn = false;
  }

  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
    this.requestUpdate();
  }

  toggleBookmark() {
    this.isBookmarked = !this.isBookmarked;
    this.requestUpdate();
  }

  toggleNotifications() {
    this.notificationsOn = !this.notificationsOn;
    this.requestUpdate();
  }

  render() {
    return html`
      <style>
        /* Ensure all SVGs expand to full width/height */
        .expand {
          width: 100%;
          height: 100%;
          max-width: 100%;
          max-height: 100%;
        }

        /* CSS Parts customization examples */

        /* Gradient button style */
        .custom-gradient-button::part(ag-icon-button) {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 12px;
          padding: 12px;
          transition: all 0.3s ease;
        }

        .custom-gradient-button::part(ag-icon-button):hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(102, 126, 234, 0.4);
        }

        .custom-gradient-button::part(ag-icon-button):active {
          transform: translateY(0);
          box-shadow: 0 4px 8px rgba(102, 126, 234, 0.3);
        }
      </style>

      <section>
        <div class="mbe4">
          <h2>Basic Icon Buttons</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-icon-button label="Settings">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M12 1v6m0 6v6M5.6 5.6l4.2 4.2m4.2 4.2l4.2 4.2M1 12h6m6 0h6M5.6 18.4l4.2-4.2m4.2-4.2l4.2-4.2"></path>
            </svg>
          </ag-icon-button>
          <ag-icon-button label="Search">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </ag-icon-button>
          <ag-icon-button label="Edit">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
            </svg>
          </ag-icon-button>
          <ag-icon-button label="Delete">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M3 6h18"></path>
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
            </svg>
          </ag-icon-button>
        </div>

        <div class="flex-inline mbe4">
          <h2>Variants</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-icon-button label="Ghost (default)" variant="ghost">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </ag-icon-button>
          <ag-icon-button label="Primary" variant="primary">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </ag-icon-button>
          <ag-icon-button label="Secondary" variant="secondary">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </ag-icon-button>
          <ag-icon-button label="Success" variant="success">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </ag-icon-button>
          <ag-icon-button label="Warning" variant="warning">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
          </ag-icon-button>
          <ag-icon-button label="Danger" variant="danger">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M3 6h18"></path>
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
            </svg>
          </ag-icon-button>
          <ag-icon-button label="Monochrome" variant="monochrome">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </ag-icon-button>
        </div>

        <div class="mbe4">
          <h2>Scaled Icons</h2>
          <p class="mbe1">Project raw SVGs directly into the button and prefer em-based sizing so icons scale with the button size.</p>
          <ul>
            <li>Place the SVG directly inside <code>&lt;ag-icon-button&gt;</code> (don't wrap it).</li>
            <li>
              Prefer one of two patterns for slotted SVGs:
              <ul>
                <li>em-based sizing so the SVG scales with the icon font-size: <code>ag-icon-button::slotted(svg) { width: 1em; height: 1em; }</code></li>
                <li>or let the SVG fill its container: <code>width: 100%; height: 100%;</code></li>
              </ul>
            </li>
            <li>Adjust per-size tokens when needed: <code>--ag-icon-button-font-size-*</code> (icon) and <code>--ag-icon-button-*</code> (button dimensions).</li>
          </ul>
          <details>
            <summary>Advanced</summary>
            <p>The icon container uses <code>1em</code> by default and follows the per-size token values. If a projected SVG sets explicit pixel <code>width/height</code>, the SVG will honor those values. Prefer passing a <code>size</code> prop to icon libraries (e.g. lucide) when available.</p>
            <p>Example overrides: <code>ag-icon-button { --ag-icon-button-font-size-md: 1rem }</code> or <code>ag-icon-button[size="xl"] { --ag-icon-button-font-size-xl: 1.25rem; --ag-icon-button-xl: 3.5rem; }</code></p>
          </details>
        </div>
        <div class="mbe4">
          <ag-icon-button label="Extra Small" size="xs">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </ag-icon-button>
          <ag-icon-button label="Small" size="sm">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </ag-icon-button>
          <ag-icon-button label="Medium" size="md">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </ag-icon-button>
          <ag-icon-button label="Large" size="lg">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </ag-icon-button>
          <ag-icon-button label="Extra Large" size="xl">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </ag-icon-button>
        </div>

        <div class="mbe4">
          <ag-icon-button label="Extra Small" variant="monochrome" size="xs" class="mie4">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </ag-icon-button>
          <ag-icon-button label="Small" variant="monochrome" size="sm" class="mie4">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </ag-icon-button>
          <ag-icon-button label="Medium" variant="monochrome" size="md" class="mie4">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </ag-icon-button>
          <ag-icon-button label="Large" variant="monochrome" size="lg" class="mie4">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </ag-icon-button>
          <ag-icon-button label="Extra Large" variant="monochrome" size="xl">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </ag-icon-button>
        </div>

        <div class="mbe4">
          <h2>Scaled Icons</h2>
          <p class="mbe1">Project raw SVGs directly into the button and prefer em-based sizing so icons scale with the button size.</p>
          <ul>
            <li>Place the SVG directly inside <code>&lt;ag-icon-button&gt;</code> (don't wrap it).</li>
            <li>Make slotted SVGs follow the icon font-size: <code>ag-icon-button::slotted(svg){width:1em;height:1em}</code> or ensure the SVG fills the icon container by setting <code>width:100%; height:100%</code> on the SVG (via attributes or CSS).</li>
            <li>Adjust per-size tokens when needed: <code>--ag-icon-button-font-size-*</code> (icon) and <code>--ag-icon-button-*</code> (button dimensions).</li>
          </ul>

          <details>
            <summary>Advanced</summary>
            <p>Example overrides: <code>ag-icon-button { --ag-icon-button-font-size-md: 1rem }</code> or <code>ag-icon-button[size="xl"] { --ag-icon-button-font-size-xl: 1.25rem; --ag-icon-button-xl: 3.5rem; }</code></p>
          </details>
        </div>

        <div class="mbe4">
          <h2>Toggle Buttons</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-icon-button
            label="Toggle favorite"
            .pressed=${this.isFavorite}
            @click=${this.toggleFavorite}
          >
            <svg class="expand" viewBox="0 0 24 24" fill=${this.isFavorite ? 'currentColor' : 'none'} stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </ag-icon-button>
          <ag-icon-button
            label="Toggle bookmark"
            .pressed=${this.isBookmarked}
            @click=${this.toggleBookmark}
          >
            <svg class="expand" viewBox="0 0 24 24" fill=${this.isBookmarked ? 'currentColor' : 'none'} stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
            </svg>
          </ag-icon-button>
          <ag-icon-button
            label="Toggle notifications"
            .pressed=${this.notificationsOn}
            @click=${this.toggleNotifications}
          >
            <svg class="expand" viewBox="0 0 24 24" fill=${this.notificationsOn ? 'currentColor' : 'none'} stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
            </svg>
          </ag-icon-button>
        </div>

        <div class="mbe4">
          <h2>CSS Parts Customization</h2>
          <p class="mbe2" style="color: var(--ag-text-secondary); font-size: 0.875rem;">
            Customize icon button appearance using CSS Shadow Parts without breaking encapsulation. The following are meant solely to show how to utilize CSS shadow parts to create custom toggle styles. They are NOT meant to represent best practices or good taste in toggle design!
          </p>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-icon-button class="custom-gradient-button" label="Gradient button">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </ag-icon-button>
          <ag-icon-button class="custom-gradient-button" label="Gradient star">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </ag-icon-button>
          <ag-icon-button class="custom-gradient-button" label="Gradient bookmark">
            <svg class="expand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
            </svg>
          </ag-icon-button>
        </div>
      </section>
    `;
  }
}

// Register the custom element
customElements.define('icon-button-lit-examples', IconButtonLitExamples);
