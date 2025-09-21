import { css as c, LitElement as g, html as h } from "lit";
import { t as u } from "../../../custom-element-CN0MC8o7.js";
import { n } from "../../../property-CemaeiRl.js";
var d = Object.defineProperty, f = Object.getOwnPropertyDescriptor, m = (t, e, o) => e in t ? d(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, a = (t, e, o, l) => {
  for (var r = l > 1 ? void 0 : l ? f(e, o) : e, s = t.length - 1, p; s >= 0; s--)
    (p = t[s]) && (r = (l ? p(e, o, r) : p(r)) || r);
  return l && r && d(e, o, r), r;
}, v = (t, e, o) => m(t, e + "", o);
let i = class extends g {
  constructor() {
    super(), this.open = !1, this.heading = "", this.closeOnEscape = !0, this.closeOnBackdrop = !0;
  }
  render() {
    return h`
      <div
        class="dialog-backdrop"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-heading"
      >
        <div class="dialog-container">
          <slot></slot>
        </div>
      </div>
    `;
  }
};
v(i, "styles", c`
    :host {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1000;
    }

    :host([open]) {
      display: block;
    }

    .dialog-backdrop {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .dialog-container {
      background: white;
      max-width: 90vw;
      max-height: 90vh;
      position: relative;
    }
  `);
a([
  n({ type: Boolean, reflect: !0 })
], i.prototype, "open", 2);
a([
  n({ type: String })
], i.prototype, "heading", 2);
a([
  n({ type: Boolean })
], i.prototype, "closeOnEscape", 2);
a([
  n({ type: Boolean })
], i.prototype, "closeOnBackdrop", 2);
i = a([
  u("agnostic-dialog")
], i);
export {
  i as AgnosticDialog
};
