import { css as p, LitElement as b, nothing as u, html as d } from "lit";
import { t as g } from "../../../custom-element-CN0MC8o7.js";
import { n as a } from "../../../property-CemaeiRl.js";
var h = Object.defineProperty, f = Object.getOwnPropertyDescriptor, m = (t, e, o) => e in t ? h(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, l = (t, e, o, i) => {
  for (var n = i > 1 ? void 0 : i ? f(e, o) : e, r = t.length - 1, c; r >= 0; r--)
    (c = t[r]) && (n = (i ? c(e, o, n) : c(n)) || n);
  return i && n && h(e, o, n), n;
}, y = (t, e, o) => m(t, e + "", o);
let s = class extends b {
  _previouslyFocusedElement = null;
  constructor() {
    super(), this.open = !1, this.heading = "", this.description = "", this.closeOnEscape = !0, this.closeOnBackdrop = !0, this.showCloseButton = !1;
  }
  _handleKeydown = (t) => {
    t.key === "Escape" && this.closeOnEscape && this.open && (t.preventDefault(), this.dispatchEvent(new CustomEvent("dialog-cancel", { bubbles: !0 })), this.open = !1);
  };
  _handleBackdropClick = (t) => {
    if (!this.closeOnBackdrop || !this.open) return;
    const e = t.target, o = this.shadowRoot?.querySelector(".dialog-backdrop"), i = this.shadowRoot?.querySelector(".dialog-container");
    e === o && !i?.contains(e) && (this.dispatchEvent(new CustomEvent("dialog-cancel", { bubbles: !0 })), this.open = !1);
  };
  _handleCloseButtonClick = (t) => {
    t.stopPropagation(), this.dispatchEvent(new CustomEvent("dialog-close", { bubbles: !0 })), this.open = !1;
  };
  _getFocusableElements() {
    if (!this.shadowRoot) return [];
    const t = [
      "button:not([disabled])",
      "input:not([disabled])",
      "select:not([disabled])",
      "textarea:not([disabled])",
      "a[href]",
      '[tabindex]:not([tabindex="-1"]):not([disabled])'
    ].join(", "), e = Array.from(this.shadowRoot.querySelectorAll(t)), o = Array.from(this.querySelectorAll(t));
    return [...e, ...o].filter(
      (i) => i.offsetParent !== null && !i.hasAttribute("disabled")
    );
  }
  _setInitialFocus() {
    const t = this._getFocusableElements();
    if (t.length > 0)
      t[0].focus();
    else {
      const e = this.shadowRoot?.querySelector('[role="dialog"]');
      e && (e.setAttribute("tabindex", "-1"), e.focus());
    }
  }
  _restoreFocus() {
    this._previouslyFocusedElement && typeof this._previouslyFocusedElement.focus == "function" && this._previouslyFocusedElement.focus(), this._previouslyFocusedElement = null;
  }
  connectedCallback() {
    super.connectedCallback(), document.addEventListener("keydown", this._handleKeydown);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), document.removeEventListener("keydown", this._handleKeydown), this.open && this._restoreBackgroundScroll();
  }
  willUpdate(t) {
    if (t.has("open")) {
      const e = t.get("open");
      this.open && !e ? (this._previouslyFocusedElement = document.activeElement, this._preventBackgroundScroll(), this.dispatchEvent(new CustomEvent("dialog-open", { bubbles: !0 }))) : !this.open && e && (this.dispatchEvent(new CustomEvent("dialog-close", { bubbles: !0 })), this._restoreBackgroundScroll(), this._restoreFocus());
    }
  }
  _preventBackgroundScroll() {
    const t = parseInt(document.body.getAttribute("data-dialog-count") || "0");
    t === 0 && (document.body.setAttribute(
      "data-dialog-original-overflow",
      document.body.style.overflow || ""
    ), document.body.style.overflow = "hidden", document.body.setAttribute("data-dialog-scroll-locked", "")), document.body.setAttribute("data-dialog-count", (t + 1).toString());
  }
  _restoreBackgroundScroll() {
    const t = parseInt(document.body.getAttribute("data-dialog-count") || "0"), e = Math.max(0, t - 1);
    if (document.body.setAttribute("data-dialog-count", e.toString()), e === 0) {
      const o = document.body.getAttribute("data-dialog-original-overflow");
      document.body.style.overflow = o || "", document.body.removeAttribute("data-dialog-original-overflow"), document.body.removeAttribute("data-dialog-scroll-locked"), document.body.removeAttribute("data-dialog-count");
    }
  }
  updated(t) {
    t.has("open") && this.open && setTimeout(() => this._setInitialFocus(), 0);
  }
  render() {
    return d`
      <div
        class="dialog-backdrop"
        role="dialog"
        aria-modal="true"
        aria-labelledby=${this.heading ? "dialog-heading" : u}
        aria-label=${this.heading ? u : "Dialog"}
        aria-describedby=${this.description ? "dialog-description" : u}
        @click=${this._handleBackdropClick}
      >
        <div class="dialog-container">
          <div class="dialog-header">
            <slot name="header">
              ${this.heading ? d`<h2 id="dialog-heading">${this.heading}</h2>` : ""}
            </slot>
            ${this.showCloseButton ? d`
              <button
                type="button"
                class="dialog-close-button"
                aria-label="Close dialog"
                @click=${this._handleCloseButtonClick}
              >
                ×
              </button>
            ` : ""}
          </div>
          <div class="dialog-content">
            ${this.description ? d`<p id="dialog-description">${this.description}</p>` : ""}
            <slot></slot>
          </div>
          <div class="dialog-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    `;
  }
};
y(s, "styles", p`
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
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .dialog-container {
      max-width: 90vw;
      max-height: 90vh;
      position: relative;
    }
  `);
l([
  a({ type: Boolean, reflect: !0 })
], s.prototype, "open", 2);
l([
  a({ type: String })
], s.prototype, "heading", 2);
l([
  a({ type: String })
], s.prototype, "description", 2);
l([
  a({ type: Boolean })
], s.prototype, "closeOnEscape", 2);
l([
  a({ type: Boolean })
], s.prototype, "closeOnBackdrop", 2);
l([
  a({ type: Boolean })
], s.prototype, "showCloseButton", 2);
s = l([
  g("agnostic-dialog")
], s);
export {
  s as AgnosticDialog
};
