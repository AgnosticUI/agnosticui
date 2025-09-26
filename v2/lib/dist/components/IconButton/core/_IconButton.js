import { css as b, LitElement as h, html as s } from "lit";
import { t as g } from "../../../custom-element-CN0MC8o7.js";
import { n } from "../../../property-CemaeiRl.js";
import { o as p } from "../../../if-defined-BuNJR_vk.js";
var u = Object.defineProperty, v = Object.getOwnPropertyDescriptor, f = (t, o, a) => o in t ? u(t, o, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[o] = a, i = (t, o, a, c) => {
  for (var r = c > 1 ? void 0 : c ? v(o, a) : o, l = t.length - 1, d; l >= 0; l--)
    (d = t[l]) && (r = (c ? d(o, a, r) : d(r)) || r);
  return c && r && u(o, a, r), r;
}, m = (t, o, a) => f(t, o + "", a);
let e = class extends h {
  constructor() {
    super(), this.label = "", this.icon = "", this.unicode = "", this.size = "md", this.variant = "ghost", this.disabled = !1, this.pressed = !1, this.loading = !1, this.type = "button";
  }
  _handleClick = (t) => {
    if (this.disabled || this.loading) {
      t.preventDefault(), t.stopPropagation();
      return;
    }
    this.dispatchEvent(new CustomEvent("icon-button-click", {
      detail: {
        originalEvent: t,
        label: this.label,
        pressed: this.pressed
      },
      bubbles: !0
    }));
  };
  _handleKeyDown = (t) => {
    (t.key === " " || t.key === "Enter") && !this.disabled && !this.loading && this.dispatchEvent(new CustomEvent("icon-button-activate", {
      detail: {
        originalEvent: t,
        label: this.label,
        pressed: this.pressed
      },
      bubbles: !0
    }));
  };
  /**
   * Renders the appropriate icon content
   */
  _renderIcon() {
    return this.children.length > 0 ? s`
        <span class="icon" aria-hidden="true">
          <slot></slot>
        </span>
      ` : this.unicode ? s`
        <span class="icon unicode-icon" aria-hidden="true">${this.unicode}</span>
      ` : this.icon ? s`
        <span class="icon" aria-hidden="true" data-icon="${this.icon}">
          <slot>
            <!-- Icon system would inject SVG here -->
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              focusable="false"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2" fill="none"/>
              <text x="12" y="16" text-anchor="middle" font-size="8" fill="currentColor">
                ${this.icon.slice(0, 3)}
              </text>
            </svg>
          </slot>
        </span>
      ` : s`
      <span class="icon" aria-hidden="true">
        <slot></slot>
      </span>
    `;
  }
  render() {
    return this.label || console.warn("AgIconButton: label property is required for accessibility. Please provide an aria-label value."), s`
      <button
        type=${this.type}
        aria-label=${p(this.label || void 0)}
        aria-pressed=${p(this.pressed !== void 0 ? this.pressed.toString() : void 0)}
        ?disabled=${this.disabled}
        @click=${this._handleClick}
        @keydown=${this._handleKeyDown}
      >
        ${this._renderIcon()}

        <!-- Loading indicator slot -->
        ${this.loading ? s`
          <span class="icon" aria-hidden="true">
            <slot name="loading">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                focusable="false"
                aria-hidden="true"
                style="animation: spin 1s linear infinite;"
              >
                <path d="M21 12a9 9 0 11-6.219-8.56"/>
              </svg>
              <style>
                @keyframes spin {
                  from { transform: rotate(0deg); }
                  to { transform: rotate(360deg); }
                }
              </style>
            </slot>
          </span>
        ` : ""}

        <!-- Visually hidden text fallback for additional context -->
        ${this.label && !this.getAttribute("aria-label") ? s`
          <span class="visually-hidden">${this.label}</span>
        ` : ""}
      </button>
    `;
  }
};
m(e, "styles", b`
    /* FUNCTIONAL CSS ONLY - Almost Headless Approach */
    :host {
      /* Inline-flex for perfect icon centering */
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    button {
      /* Reset browser button styles */
      margin: 0;
      border: none;
      background: none;
      cursor: pointer;
      font-family: inherit;

      /* Flexbox for icon centering */
      display: flex;
      align-items: center;
      justify-content: center;

      /* Size variants using CSS custom properties */
      width: var(--icon-button-size, var(--ag-space-10, 2.5rem));
      height: var(--icon-button-size, var(--ag-space-10, 2.5rem));

      /* Semantic token integration */
      background: var(--icon-button-bg, transparent);
      color: var(--icon-button-color, var(--ag-text-locked, #374151));
      border-radius: var(--icon-button-radius, var(--ag-radius-sm, 0.25rem));

      /* Touch target accessibility */
      min-width: 44px;
      min-height: 44px;

      /* Transition for smooth state changes */
      transition: all var(--ag-motion-duration-fast, 150ms) ease-in-out;
    }

    /* Size variants */
    :host([size="xs"]) button {
      --icon-button-size: var(--ag-space-6, 1.5rem);
    }

    :host([size="sm"]) button {
      --icon-button-size: var(--ag-space-8, 2rem);
    }

    :host([size="md"]) button {
      --icon-button-size: var(--ag-space-10, 2.5rem);
    }

    :host([size="lg"]) button {
      --icon-button-size: var(--ag-space-12, 3rem);
    }

    :host([size="xl"]) button {
      --icon-button-size: var(--ag-space-14, 3.5rem);
    }

    /* Hover state - Sara Soueidan compliance */
    button:hover {
      background: var(--icon-button-hover-bg, var(--ag-background-secondary, #f3f4f6));
      color: var(--icon-button-hover-color, var(--ag-text-locked, #374151));
    }

    /* Focus state - High contrast, color-independent */
    button:focus-visible {
      outline: var(--ag-focus-width, 2px) solid var(--ag-focus, #2563eb);
      outline-offset: var(--ag-focus-offset, 2px);
    }

    /* Active/pressed state */
    button:active {
      background: var(--icon-button-active-bg, var(--ag-background-tertiary, #e5e7eb));
      transform: scale(0.98);
    }

    /* Disabled state */
    button:disabled {
      opacity: var(--ag-opacity-disabled, 0.6);
      cursor: not-allowed;
      pointer-events: none;
    }

    /* Toggle pressed state */
    :host([pressed]) button {
      background: var(--icon-button-pressed-bg, var(--ag-primary-subtle, #dbeafe));
      color: var(--icon-button-pressed-color, var(--ag-primary, #2563eb));
    }

    /* Icon sizing and positioning */
    .icon {
      width: var(--icon-size, var(--ag-space-6, 1.5rem));
      height: var(--icon-size, var(--ag-space-6, 1.5rem));
      flex-shrink: 0;

      /* Ensure SVG fills available space */
      display: block;
    }

    /* Size-specific icon sizing */
    :host([size="xs"]) .icon {
      --icon-size: var(--ag-space-4, 1rem);
    }

    :host([size="sm"]) .icon {
      --icon-size: var(--ag-space-5, 1.25rem);
    }

    :host([size="md"]) .icon {
      --icon-size: var(--ag-space-6, 1.5rem);
    }

    :host([size="lg"]) .icon {
      --icon-size: var(--ag-space-7, 1.75rem);
    }

    :host([size="xl"]) .icon {
      --icon-size: var(--ag-space-8, 2rem);
    }

    /* Unicode icon styling */
    .unicode-icon {
      font-size: var(--icon-size, var(--ag-space-6, 1.5rem));
      line-height: 1;
      font-weight: normal;
      font-style: normal;
    }

    /* Visually hidden text for accessibility */
    .visually-hidden {
      position: absolute !important;
      width: 1px !important;
      height: 1px !important;
      padding: 0 !important;
      margin: -1px !important;
      overflow: hidden !important;
      clip: rect(0, 0, 0, 0) !important;
      white-space: nowrap !important;
      border: 0 !important;
    }

    /* Loading state */
    :host([loading]) button {
      pointer-events: none;
    }

    :host([loading]) .icon {
      opacity: 0.5;
    }

    /* Variant styles - minimal functional differences */
    :host([variant="primary"]) button {
      --icon-button-bg: var(--ag-primary, #2563eb);
      --icon-button-color: var(--ag-white, #ffffff);
      --icon-button-hover-bg: var(--ag-primary-hover, #1d4ed8);
      --icon-button-hover-color: var(--ag-white, #ffffff);
    }

    :host([variant="danger"]) button {
      --icon-button-bg: transparent;
      --icon-button-color: var(--ag-danger, #dc2626);
      --icon-button-hover-bg: var(--ag-danger-subtle, #fef2f2);
      --icon-button-hover-color: var(--ag-danger-hover, #b91c1c);
    }

    :host([variant="secondary"]) button {
      --icon-button-bg: var(--ag-background-secondary, #f3f4f6);
      --icon-button-color: var(--ag-text-secondary, #6b7280);
      --icon-button-hover-bg: var(--ag-background-tertiary, #e5e7eb);
      --icon-button-hover-color: var(--ag-text-secondary, #6b7280);
    }
  `);
i([
  n({ type: String })
], e.prototype, "label", 2);
i([
  n({ type: String })
], e.prototype, "icon", 2);
i([
  n({ type: String })
], e.prototype, "unicode", 2);
i([
  n({ type: String, reflect: !0 })
], e.prototype, "size", 2);
i([
  n({ type: String, reflect: !0 })
], e.prototype, "variant", 2);
i([
  n({ type: Boolean, reflect: !0 })
], e.prototype, "disabled", 2);
i([
  n({ type: Boolean, reflect: !0 })
], e.prototype, "pressed", 2);
i([
  n({ type: Boolean, reflect: !0 })
], e.prototype, "loading", 2);
i([
  n({ type: String })
], e.prototype, "type", 2);
e = i([
  g("ag-icon-button")
], e);
export {
  e as AgIconButton
};
