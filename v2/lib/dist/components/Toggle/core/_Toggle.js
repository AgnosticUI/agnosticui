import { css as c, LitElement as p, html as b } from "lit";
import { t as u } from "../../../custom-element-CN0MC8o7.js";
import { n as i } from "../../../property-CemaeiRl.js";
import { o as d } from "../../../if-defined-BuNJR_vk.js";
var h = Object.defineProperty, f = Object.getOwnPropertyDescriptor, y = (e, r, o) => r in e ? h(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, a = (e, r, o, s) => {
  for (var l = s > 1 ? void 0 : s ? f(r, o) : r, n = e.length - 1, g; n >= 0; n--)
    (g = e[n]) && (l = (s ? g(r, o, l) : g(l)) || l);
  return s && l && h(r, o, l), l;
}, v = (e, r, o) => y(e, r + "", o);
let t = class extends p {
  constructor() {
    super(), this.label = "", this.checked = !1, this.size = "md", this.variant = "default", this.disabled = !1, this.readonly = !1, this.labelledBy = "", this.describedBy = "", this.name = "", this.value = "";
  }
  firstUpdated() {
    !this.label && !this.labelledBy && console.warn('AgToggle: label property is required for accessibility. Use either "label" or "labelledBy" prop.');
  }
  _handleClick = (e) => {
    if (this.disabled || this.readonly) {
      e.preventDefault();
      return;
    }
    this.checked = !this.checked, this.dispatchEvent(new CustomEvent("toggle-change", {
      detail: {
        checked: this.checked,
        name: this.name,
        value: this.value
      },
      bubbles: !0,
      composed: !0
    }));
  };
  _handleKeydown = (e) => {
    (e.key === " " || e.key === "Enter") && (e.preventDefault(), this._handleClick(e));
  };
  render() {
    return b`
      <button
        role="switch"
        aria-checked="${this.checked}"
        aria-label="${d(this.labelledBy ? void 0 : this.label)}"
        aria-labelledby="${d(this.labelledBy || void 0)}"
        aria-describedby="${d(this.describedBy || void 0)}"
        ?disabled="${this.disabled}"
        class="ag-toggle ag-toggle--${this.size} ag-toggle--${this.variant}"
        @click="${this._handleClick}"
        @keydown="${this._handleKeydown}"
      >
        <span class="ag-toggle__track">
          <span class="ag-toggle__handle"></span>
        </span>

        <!-- Screen reader state indication -->
        <span class="visually-hidden">
          ${this.checked ? "On" : "Off"}
        </span>
      </button>
    `;
  }
};
v(t, "styles", c`
    /* FUNCTIONAL CSS ONLY - Almost Headless Approach */
    :host {
      /* Inline-flex for integration with other form elements */
      display: inline-flex;
      align-items: center;
    }

    button {
      /* Reset browser button styles */
      margin: 0;
      border: none;
      background: transparent;
      cursor: pointer;
      font-family: inherit;
      padding: 0;

      /* Flexbox for track/handle layout */
      display: flex;
      align-items: center;
      position: relative;

      /* Touch target accessibility - minimum 44px */
      min-width: 44px;
      min-height: 44px;

      /* Focus management */
      border-radius: var(--ag-focus-border-radius, 9999px);
      transition: all var(--ag-transition-duration, 200ms) ease;
    }

    button:focus-visible {
      outline: var(--ag-focus-width, 2px) solid var(--ag-focus, #2563eb);
      outline-offset: var(--ag-focus-offset, 2px);
    }

    button:disabled {
      cursor: not-allowed;
      opacity: 0.6;
      pointer-events: none;
    }

    .ag-toggle__track {
      /* Track container */
      position: relative;
      display: flex;
      align-items: center;
      border-radius: 9999px;
      transition: inherit;

      /* Default size - will be overridden by size variants */
      width: var(--toggle-width, 24px);
      height: var(--toggle-height, 12px);

      /* Functional styling only */
      background: var(--toggle-track-bg, #d1d5db);
      border: 1px solid var(--toggle-track-border, transparent);
    }

    .ag-toggle__handle {
      /* Handle positioning and animation */
      position: absolute;
      top: 50%;
      left: 2px;
      transform: translateY(-50%);
      border-radius: 50%;
      transition: transform var(--ag-transition-duration, 200ms) ease;

      /* Default handle size */
      width: var(--handle-size, 10px);
      height: var(--handle-size, 10px);

      /* Functional styling only */
      background: var(--toggle-handle-bg, #ffffff);
      box-shadow: var(--toggle-handle-shadow, 0 1px 3px rgba(0, 0, 0, 0.1));
    }

    /* Checked state - handle moves to right */
    :host([checked]) .ag-toggle__handle {
      transform: translateY(-50%) translateX(calc(var(--toggle-width) - var(--handle-size) - 4px));
    }

    /* Size variants with 2:1 width:height ratio */
    :host([size="xs"]) {
      --toggle-width: 16px;
      --toggle-height: 8px;
      --handle-size: 6px;
    }

    :host([size="sm"]) {
      --toggle-width: 20px;
      --toggle-height: 10px;
      --handle-size: 8px;
    }

    :host([size="md"]) {
      --toggle-width: 24px;
      --toggle-height: 12px;
      --handle-size: 10px;
    }

    :host([size="lg"]) {
      --toggle-width: 32px;
      --toggle-height: 16px;
      --handle-size: 14px;
    }

    :host([size="xl"]) {
      --toggle-width: 40px;
      --toggle-height: 20px;
      --handle-size: 18px;
    }

    /* Variant styles - minimal functional differences */
    :host([variant="success"]) .ag-toggle__track {
      --toggle-track-bg: var(--ag-success, #10b981);
    }

    :host([variant="warning"]) .ag-toggle__track {
      --toggle-track-bg: var(--ag-warning, #f59e0b);
    }

    :host([variant="danger"]) .ag-toggle__track {
      --toggle-track-bg: var(--ag-danger, #ef4444);
    }

    /* Checked state coloring */
    :host([checked]) .ag-toggle__track {
      --toggle-track-bg: var(--ag-primary, #3b82f6);
    }

    :host([checked][variant="success"]) .ag-toggle__track {
      --toggle-track-bg: var(--ag-success, #10b981);
    }

    :host([checked][variant="warning"]) .ag-toggle__track {
      --toggle-track-bg: var(--ag-warning, #f59e0b);
    }

    :host([checked][variant="danger"]) .ag-toggle__track {
      --toggle-track-bg: var(--ag-danger, #ef4444);
    }

    /* Readonly state */
    :host([readonly]) button {
      cursor: default;
    }

    /* Screen reader only text */
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
  `);
a([
  i({ type: String })
], t.prototype, "label", 2);
a([
  i({ type: Boolean, reflect: !0 })
], t.prototype, "checked", 2);
a([
  i({ type: String, reflect: !0 })
], t.prototype, "size", 2);
a([
  i({ type: String, reflect: !0 })
], t.prototype, "variant", 2);
a([
  i({ type: Boolean, reflect: !0 })
], t.prototype, "disabled", 2);
a([
  i({ type: Boolean, reflect: !0 })
], t.prototype, "readonly", 2);
a([
  i({ type: String })
], t.prototype, "labelledBy", 2);
a([
  i({ type: String })
], t.prototype, "describedBy", 2);
a([
  i({ type: String })
], t.prototype, "name", 2);
a([
  i({ type: String })
], t.prototype, "value", 2);
t = a([
  u("ag-toggle")
], t);
export {
  t as AgToggle
};
