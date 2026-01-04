import { LitElement, html, svg } from 'lit';
import 'agnosticui-core/badge';
import 'agnosticui-core/button';
import 'agnosticui-core/icon';
import 'agnosticui-core/visually-hidden';
import 'agnosticui-core/alert';

export class BadgeLitExamples extends LitElement {
  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  // Helper method for Bell icon SVG
  bellIcon(size = 24) {
    return svg`
      <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
      </svg>
    `;
  }

  // Helper method for Mail icon SVG
  mailIcon(size = 24) {
    return svg`
      <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    `;
  }

  // Helper method for ShoppingCart icon SVG
  shoppingCartIcon(size = 24) {
    return svg`
      <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      </svg>
    `;
  }

  render() {
    return html`
      <section>
        <!-- Default Badge -->
        <div class="mbe4">
          <ag-badge>Default Badge</ag-badge>
        </div>

        <!-- Variants -->
        <div class="mbe2">
          <h2>Variants</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-badge variant="default">Default</ag-badge>
          <ag-badge variant="success">Success</ag-badge>
          <ag-badge variant="info">Info</ag-badge>
          <ag-badge variant="warning">Warning</ag-badge>
          <ag-badge variant="danger">Danger</ag-badge>
          <ag-badge variant="neutral">Neutral</ag-badge>
          <ag-badge variant="monochrome">Monochrome</ag-badge>
        </div>

        <!-- Sizes -->
        <div class="mbe2">
          <h2>Sizes</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-badge size="xs">Extra Small</ag-badge>
          <ag-badge size="sm">Small</ag-badge>
          <ag-badge size="md">Medium</ag-badge>
        </div>

        <!-- Count Badges -->
        <div class="mbe2">
          <h2>Count Badges</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-badge variant="success">1</ag-badge>
          <ag-badge variant="danger">99+</ag-badge>
          <ag-badge variant="info">23</ag-badge>
        </div>

        <!-- Dot Badges -->
        <div class="mbe2">
          <h2>Dot Badges</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-badge dot variant="default"></ag-badge>
          <ag-badge dot variant="info"></ag-badge>
          <ag-badge dot variant="success"></ag-badge>
          <ag-badge dot variant="warning"></ag-badge>
          <ag-badge dot variant="danger"></ag-badge>
          <ag-badge dot variant="monochrome"></ag-badge>
        </div>

        <!-- Status Indicators -->
        <div class="mbe2">
          <h2>Status Indicators</h2>
        </div>
        <div
          style="display: flex; flex-direction: column; gap: 1rem;"
          class="mbe4"
        >
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <ag-badge dot variant="success"></ag-badge>
            Online
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <ag-badge dot variant="warning"></ag-badge>
            Away
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <ag-badge dot variant="danger"></ag-badge>
            Busy
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <ag-badge dot variant="info"></ag-badge>
            Connecting
          </div>
        </div>

        <div class="mbe4">
          <h2>Positioning Badges</h2>
        </div>
        <ag-alert
          class="mbe2"
          bordered-left
          type="info"
        >
          <div class="flex-inline items-center justify-center">
            You can control the badge placement with CSS. To apply absolute positioning to the badge, be sure to apply position: relative on the button.
          </div>
        </ag-alert>
        <div class="mbe4">
          <h3>Inside Buttons (as content)</h3>
        </div>
        <div class="mbe4">
          <ag-button
            bordered
            variant="primary"
            shape="capsule"
          >
            Inbox
            <ag-badge
              variant="danger"
              size="sm"
              style="margin-left: var(--ag-space-1);"
            >99+</ag-badge>
          </ag-button>
        </div>
        <div class="mbs4 mbe4">
          <h3>Absolute Position</h3>
        </div>
        <div class="mbe4">
          <ag-button
            bordered
            variant="primary"
            shape="capsule"
            style="position: relative;"
          >
            Inbox
            <ag-badge
              variant="danger"
              size="sm"
              style="position: absolute; top: -10px; right: -13px;"
            >99+</ag-badge>
          </ag-button>
        </div>
        <!-- Badge on Icon -->
        <div class="mbe4">
          <h2>Badges with Icon</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <div style="position: relative; display: inline-block; align-self: flex-start;">
            <ag-icon no-fill size="16">
              ${this.bellIcon(16)}
            </ag-icon>
            <ag-badge
              variant="danger"
              size="xs"
              style="position: absolute; top: -6px; right: -7px;"
            >
              3
            </ag-badge>
          </div>
          <div style="position: relative; display: inline-block; align-self: flex-start;">
            <ag-icon no-fill size="20">
              ${this.bellIcon(20)}
            </ag-icon>
            <ag-badge
              variant="danger"
              size="sm"
              style="position: absolute; top: -7px; right: -9px;"
            >
              3
            </ag-badge>
          </div>
          <div style="position: relative; display: inline-block; align-self: flex-start;">
            <ag-icon no-fill size="24">
              ${this.bellIcon(24)}
            </ag-icon>
            <ag-badge
              variant="danger"
              size="md"
              style="position: absolute; top: -7px; right: -10px;"
            >
              3
            </ag-badge>
          </div>
          <div
            class="mis2"
            style="position: relative; display: inline-block; align-self: flex-start;"
          >
            <ag-icon no-fill size="16">
              ${this.bellIcon(16)}
            </ag-icon>
            <ag-badge
              variant="danger"
              size="sm"
              dot
              style="position: absolute; top: 0px; right: -1px;"
            >
            </ag-badge>
          </div>
          <div style="position: relative; display: inline-block; align-self: flex-start;">
            <ag-icon no-fill size="24">
              ${this.bellIcon(24)}
            </ag-icon>
            <ag-badge
              variant="danger"
              size="md"
              dot
              style="position: absolute; top: -1px; right: -1px;"
            >
            </ag-badge>
          </div>
          <div style="position: relative; display: inline-block; align-self: flex-start;">
            <ag-icon no-fill size="24">
              ${this.mailIcon(24)}
            </ag-icon>
            <ag-badge
              variant="success"
              size="md"
              dot
              style="position: absolute; top: -3px; right: -4px;"
            >
            </ag-badge>
          </div>
          <div
            class="mis2"
            style="position: relative; display: inline-block; align-self: flex-start;"
          >
            <ag-icon no-fill size="24">
              ${this.mailIcon(24)}
            </ag-icon>
            <ag-badge
              variant="warning"
              size="md"
              dot
              style="position: absolute; top: -3px; right: -4px;"
            >
            </ag-badge>
          </div>
          <div
            class="mis2"
            style="position: relative; display: inline-block; align-self: flex-start;"
          >
            <ag-icon no-fill size="24">
              ${this.mailIcon(24)}
            </ag-icon>
            <ag-badge
              variant="danger"
              size="xs"
              style="position: absolute; top: -3px; right: -16px;"
            >99+</ag-badge>
          </div>
          <div
            class="mis3"
            style="position: relative; display: inline-block; align-self: flex-start;"
          >
            <ag-icon no-fill size="24">
              ${this.mailIcon(24)}
            </ag-icon>
            <ag-badge
              variant="danger"
              size="sm"
              style="position: absolute; top: -9px; right: -30px;"
            >99+</ag-badge>
          </div>
        </div>
        <div class="mbe4">
          <h2>Button Icon with Badge</h2>
        </div>
        <div style="position: relative; display: inline-block;">
          <ag-button
            bordered
            variant="info"
            shape="rounded-square"
            style="position: relative;"
          >
            <ag-icon no-fill size="24">
              ${this.shoppingCartIcon(24)}
            </ag-icon>
            <ag-visually-hidden>Items in cart</ag-visually-hidden>
            <ag-badge
              variant="danger"
              size="sm"
              style="position: absolute; top: -9px; right: -13px;"
            >3</ag-badge>
          </ag-button>
        </div>
        <div
          class="mis8"
          style="position: relative; display: inline-block;"
        >
          <ag-button
            bordered
            variant="info"
            shape="rounded-square"
            style="position: relative;"
          >
            <ag-icon no-fill size="24">
              ${this.shoppingCartIcon(24)}
            </ag-icon>
            <ag-visually-hidden>Items in cart</ag-visually-hidden>
            <ag-badge
              variant="default"
              size="sm"
              style="position: absolute; top: -9px; right: -13px;"
            >3</ag-badge>
          </ag-button>
        </div>
        <div
          class="mis8"
          style="position: relative; display: inline-block;"
        >
          <ag-button
            bordered
            variant="info"
            shape="rounded-square"
            style="position: relative;"
          >
            <ag-icon no-fill size="24">
              ${this.shoppingCartIcon(24)}
            </ag-icon>
            <ag-visually-hidden>Items in cart</ag-visually-hidden>
            <ag-badge
              variant="success"
              size="md"
              dot
              style="position: absolute; top: -6px; right: -7px;"
            ></ag-badge>
          </ag-button>
        </div>
        <!-- CSS Parts Customization -->
        <div class="mbe4">
          <h2>CSS Parts Customization</h2>
          <p
            class="mbe2"
            style="color: var(--ag-text-secondary); font-size: 0.875rem;"
          >
            Customize badge appearance using CSS Shadow Parts without breaking encapsulation.
          </p>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-badge class="custom-gradient-badge">Gradient Badge</ag-badge>
          <ag-badge class="custom-minimal-badge">Minimal Badge</ag-badge>
        </div>

        <style>
          /* CSS Parts customization examples */

          /* Gradient badge style */
          .custom-gradient-badge::part(ag-badge) {
            background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
            color: white;
            font-weight: 600;
            padding: 0.5rem 1rem;
          }

          /* Minimal badge */
          .custom-minimal-badge::part(ag-badge) {
            background: var(--ag-background-subtle);
            color: var(--ag-text-secondary);
            border-radius: 6px;
            font-size: 0.85rem;
            padding: 0.25rem 0.75rem;
          }
        </style>
      </section>
    `;
  }
}

customElements.define('badge-lit-examples', BadgeLitExamples);
