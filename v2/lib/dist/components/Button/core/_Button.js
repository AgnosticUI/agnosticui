import { css as c, LitElement as b, html as h } from "lit";
import { t as g } from "../../../custom-element-CN0MC8o7.js";
import { n as r } from "../../../property-CemaeiRl.js";
import { o as l } from "../../../if-defined-BuNJR_vk.js";
var u = Object.defineProperty, f = Object.getOwnPropertyDescriptor, y = (e, i, o) => i in e ? u(e, i, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[i] = o, s = (e, i, o, a) => {
  for (var n = a > 1 ? void 0 : a ? f(i, o) : i, p = e.length - 1, d; p >= 0; p--)
    (d = e[p]) && (n = (a ? d(i, o, n) : d(n)) || n);
  return a && n && u(i, o, n), n;
}, m = (e, i, o) => y(e, i + "", o);
let t = class extends b {
  constructor() {
    super(), this.type = "button", this.disabled = !1, this.loading = !1, this.toggle = !1, this.pressed = !1, this.ariaLabel = "", this.ariaDescribedby = "", this.variant = "", this.size = "md";
  }
  _handleClick() {
    if (this.toggle && !this.disabled && !this.loading) {
      this.pressed = !this.pressed;
      const e = new CustomEvent("toggle", {
        detail: { pressed: this.pressed },
        bubbles: !0,
        composed: !0
      });
      this.dispatchEvent(e);
    }
  }
  _handleFocus() {
    const e = new FocusEvent("focus", {
      bubbles: !0,
      composed: !0
    });
    this.dispatchEvent(e);
  }
  _handleBlur() {
    const e = new FocusEvent("blur", {
      bubbles: !0,
      composed: !0
    });
    this.dispatchEvent(e);
  }
  render() {
    const e = this.disabled || this.loading;
    return h`
      <button
        type=${this.type}
        part="button"
        ?disabled=${e}
        aria-disabled=${e ? "true" : "false"}
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
m(t, "styles", c`
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

    button:focus-visible {
      /* High-contrast focus ring using CSS custom property */
      outline: 2px solid var(--agnostic-focus, #2563eb);
      outline-offset: 2px;
      transition: outline 0.2s ease;
    }
  `);
s([
  r({ type: String })
], t.prototype, "type", 2);
s([
  r({ type: Boolean })
], t.prototype, "disabled", 2);
s([
  r({ type: Boolean })
], t.prototype, "loading", 2);
s([
  r({ type: Boolean })
], t.prototype, "toggle", 2);
s([
  r({ type: Boolean })
], t.prototype, "pressed", 2);
s([
  r({ type: String })
], t.prototype, "ariaLabel", 2);
s([
  r({ type: String })
], t.prototype, "ariaDescribedby", 2);
s([
  r({ type: String, reflect: !0 })
], t.prototype, "variant", 2);
s([
  r({ type: String, reflect: !0 })
], t.prototype, "size", 2);
t = s([
  g("ag-button")
], t);
export {
  t as AgButton
};
