import { LitElement as _, css as f, html as v } from "lit";
import { n as r } from "../../../property-CemaeiRl.js";
import { a as g, c as E, o as w, f as y, s as b, b as L, r as k, e as c } from "../../../floating-ui.dom-C71V-iPn.js";
var C = Object.defineProperty, i = (h, t, s, n) => {
  for (var o = void 0, a = h.length - 1, l; a >= 0; a--)
    (l = h[a]) && (o = l(t, s, o) || o);
  return o && C(t, s, o), o;
};
let e = class extends _ {
  static styles = f`
    :host {
      display: inline-block;
    }

    #tooltip {
      display: none;
      position: absolute;
      z-index: var(--ag-z-index-modal, 1000);
      pointer-events: none;
      opacity: 0;
      transition: opacity var(--ag-motion-fast, 0.15s) ease-in-out;
    }

    #tooltip[data-show] {
      display: block;
      opacity: 1;
      pointer-events: auto;
    }

    #arrow {
      position: absolute;
      background: inherit;
      width: var(--ag-space-2, 0.5rem);
      height: var(--ag-space-2, 0.5rem);
      transform: rotate(45deg);
    }
  `;
  tooltipElement;
  arrowElement;
  _cleanup;
  _hideTimeout;
  constructor() {
    super(), this.content = "", this.placement = "top", this.distance = 8, this.skidding = 0, this.trigger = "hover focus", this.disabled = !1, this._open = !1;
  }
  firstUpdated() {
    this._setupEventListeners(), this._setupARIA();
  }
  _setupEventListeners() {
    const t = this.firstElementChild;
    t && (this.trigger.includes("hover") && (this.addEventListener("mouseenter", this._handleMouseEnter), this.addEventListener("mouseleave", this._handleMouseLeave)), this.trigger.includes("focus") && (t.addEventListener("focus", this._handleFocus), t.addEventListener("blur", this._handleBlur)), this.trigger.includes("click") && t.addEventListener("click", this._handleClick));
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._cleanup?.(), this._removeEventListeners(), document.removeEventListener("keydown", this._handleDocumentKeyDown);
  }
  _setupARIA() {
    const t = this.firstElementChild;
    t && t.setAttribute("aria-describedby", "tooltip");
  }
  _removeEventListeners() {
    const t = this.firstElementChild;
    t && (this.removeEventListener("mouseenter", this._handleMouseEnter), this.removeEventListener("mouseleave", this._handleMouseLeave), t.removeEventListener("focus", this._handleFocus), t.removeEventListener("blur", this._handleBlur), t.removeEventListener("click", this._handleClick));
  }
  _handleMouseEnter = () => {
    this.disabled || (clearTimeout(this._hideTimeout), this.show());
  };
  _handleMouseLeave = () => {
    this.disabled || (this._hideTimeout = window.setTimeout(() => {
      this.hide();
    }, 100));
  };
  _handleFocus = () => {
    this.disabled || this.show();
  };
  _handleBlur = () => {
    this.disabled || this.hide();
  };
  _handleClick = () => {
    this.disabled || (this._open ? this.hide() : this.show());
  };
  _handleDocumentKeyDown = (t) => {
    t.key === "Escape" && this._open && this.hide();
  };
  updated(t) {
    super.updated(t), t.has("_open") && (this._open ? (document.addEventListener("keydown", this._handleDocumentKeyDown), this.updateComplete.then(() => {
      this._startPositioning();
    }), this.dispatchEvent(new CustomEvent("show"))) : (this._stopPositioning(), document.removeEventListener("keydown", this._handleDocumentKeyDown), this.dispatchEvent(new CustomEvent("hide"))));
  }
  _startPositioning() {
    const t = this.shadowRoot?.querySelector("#tooltip"), s = this.shadowRoot?.querySelector("#arrow");
    if (!t || !s) return;
    const n = this.firstElementChild;
    n && (this._updatePosition(), this._cleanup = g(n, t, () => {
      this._updatePosition();
    }));
  }
  _stopPositioning() {
    this._cleanup?.(), this._cleanup = void 0;
  }
  async _updatePosition() {
    const t = this.shadowRoot?.querySelector("#tooltip"), s = this.shadowRoot?.querySelector("#arrow");
    if (!t || !s) return;
    const n = this.firstElementChild;
    if (!n) return;
    const { x: o, y: a, placement: l, middlewareData: u } = await E(
      n,
      t,
      {
        placement: this.placement,
        middleware: [
          w({ mainAxis: this.distance, crossAxis: this.skidding }),
          y(),
          b({ padding: 8 }),
          L({ element: s })
        ]
      }
    );
    Object.assign(t.style, {
      left: `${o}px`,
      top: `${a}px`
    });
    const { x: d, y: p } = u.arrow ?? {}, m = {
      top: "bottom",
      right: "left",
      bottom: "top",
      left: "right"
    }[l.split("-")[0]];
    Object.assign(s.style, {
      left: d != null ? `${d}px` : "",
      top: p != null ? `${p}px` : "",
      right: "",
      bottom: "",
      [m]: "-4px"
    });
  }
  show = () => {
    this._open || this.disabled || (this._open = !0);
  };
  hide = () => {
    this._open && (this._open = !1);
  };
  toggle = () => {
    this._open ? this.hide() : this.show();
  };
  render() {
    return v`
      <slot></slot>
      <div
        id="tooltip"
        part="base"
        role="tooltip"
        class="tooltip"
        ?data-show=${this._open}
        @mouseenter="${() => clearTimeout(this._hideTimeout)}"
        @mouseleave="${this.hide}"
      >
        <slot name="content">${this.content}</slot>
        <div id="arrow" part="arrow"></div>
      </div>
    `;
  }
};
i([
  r({ type: String })
], e.prototype, "content");
i([
  r({ type: String, reflect: !0 })
], e.prototype, "placement");
i([
  r({ type: Number })
], e.prototype, "distance");
i([
  r({ type: Number })
], e.prototype, "skidding");
i([
  r({ type: String })
], e.prototype, "trigger");
i([
  r({ type: Boolean, reflect: !0 })
], e.prototype, "disabled");
i([
  k()
], e.prototype, "_open");
i([
  c("#tooltip")
], e.prototype, "tooltipElement");
i([
  c("#arrow")
], e.prototype, "arrowElement");
customElements.define("ag-tooltip", e);
export {
  e as Tooltip
};
