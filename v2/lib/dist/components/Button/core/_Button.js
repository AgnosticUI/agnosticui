import { css as d, LitElement as b, html as h } from "lit";
import { t as f } from "../../../custom-element-CN0MC8o7.js";
import { n as i } from "../../../property-CemaeiRl.js";
import { o as l } from "../../../if-defined-BuNJR_vk.js";
var c = Object.defineProperty, g = Object.getOwnPropertyDescriptor, y = (t, o, r) => o in t ? c(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, s = (t, o, r, a) => {
  for (var n = a > 1 ? void 0 : a ? g(o, r) : o, p = t.length - 1, u; p >= 0; p--)
    (u = t[p]) && (n = (a ? u(o, r, n) : u(n)) || n);
  return a && n && c(o, r, n), n;
}, m = (t, o, r) => y(t, o + "", r);
let e = class extends b {
  constructor() {
    super(), this.type = "button", this.disabled = !1, this.loading = !1, this.toggle = !1, this.pressed = !1, this.ariaLabel = "", this.ariaDescribedby = "", this.variant = "", this.size = "md";
  }
  _handleClick() {
    if (this.toggle && !this.disabled && !this.loading) {
      this.pressed = !this.pressed;
      const t = new CustomEvent("toggle", {
        detail: { pressed: this.pressed },
        bubbles: !0,
        composed: !0
      });
      this.dispatchEvent(t);
    }
  }
  _handleFocus() {
    const t = new FocusEvent("focus", {
      bubbles: !0,
      composed: !0
    });
    this.dispatchEvent(t);
  }
  _handleBlur() {
    const t = new FocusEvent("blur", {
      bubbles: !0,
      composed: !0
    });
    this.dispatchEvent(t);
  }
  /**
   * Focus the internal button element
   */
  focus() {
    const t = this.shadowRoot?.querySelector("button");
    t && t.focus();
  }
  /**
   * Blur the internal button element
   */
  blur() {
    const t = this.shadowRoot?.querySelector("button");
    t && t.blur();
  }
  render() {
    const t = this.disabled || this.loading;
    return h`
      <button
        type=${this.type}
        part="button"
        ?disabled=${t}
        aria-disabled=${t ? "true" : "false"}
        aria-busy=${l(this.loading ? "true" : void 0)}
        aria-pressed=${l(this.toggle ? String(this.pressed) : void 0)}
        aria-label=${l(this.ariaLabel || void 0)}
        aria-describedby=${l(this.ariaDescribedby || void 0)}
        @click=${this._handleClick}
        @focus=${this._handleFocus}
        @blur=${this._handleBlur}
      >
        <slot></slot>
      </button>
    `;
  }
};
m(e, "styles", d`
    /* FUNCTIONAL CSS ONLY - Almost Headless Approach */
    :host {
      /* Inline-flex for perfect centering while maintaining inline behavior */
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    button {
      /* Reset browser defaults */
      margin: 0;
      padding: 0;
      border: none;
      background: none;

      /* Inherit font styling from parent */
      font: inherit;
      color: inherit;

      /* Basic interaction styling */
      cursor: pointer;

      /* Flex layout for perfect content alignment */
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.25rem; /* Small gap for icon + text scenarios */
    }

    button:disabled {
      cursor: not-allowed;
    }

    button:focus-visible,
    button:focus:not(:hover) {
      /* High-contrast focus ring using CSS custom property */
      outline: 2px solid var(--agnostic-focus, #2563eb);
      outline-offset: 2px;
      transition: outline 0.2s ease;
    }
  `);
s([
  i({ type: String })
], e.prototype, "type", 2);
s([
  i({ type: Boolean })
], e.prototype, "disabled", 2);
s([
  i({ type: Boolean })
], e.prototype, "loading", 2);
s([
  i({ type: Boolean })
], e.prototype, "toggle", 2);
s([
  i({ type: Boolean })
], e.prototype, "pressed", 2);
s([
  i({ type: String })
], e.prototype, "ariaLabel", 2);
s([
  i({ type: String })
], e.prototype, "ariaDescribedby", 2);
s([
  i({ type: String, reflect: !0 })
], e.prototype, "variant", 2);
s([
  i({ type: String, reflect: !0 })
], e.prototype, "size", 2);
e = s([
  f("ag-button")
], e);
export {
  e as AgButton
};
