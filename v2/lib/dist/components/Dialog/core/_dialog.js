import { css as h, LitElement as p, nothing as u, html as r } from "lit";
import { t as b } from "../../../custom-element-CN0MC8o7.js";
import { n as l } from "../../../property-CemaeiRl.js";
var g = Object.defineProperty, f = Object.getOwnPropertyDescriptor, m = (e, o, t) => o in e ? g(e, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[o] = t, s = (e, o, t, n) => {
  for (var i = n > 1 ? void 0 : n ? f(o, t) : o, d = e.length - 1, c; d >= 0; d--)
    (c = e[d]) && (i = (n ? c(o, t, i) : c(i)) || i);
  return n && i && g(o, t, i), i;
}, v = (e, o, t) => m(e, o + "", t);
let a = class extends p {
  _previouslyFocusedElement = null;
  constructor() {
    super(), this.open = !1, this.heading = "", this.description = "", this.closeOnEscape = !0, this.closeOnBackdrop = !0, this.showCloseButton = !1;
  }
  _handleKeydown = (e) => {
    if (this.open) {
      if (e.key === "Escape" && this.closeOnEscape) {
        e.preventDefault(), this.dispatchEvent(new CustomEvent("dialog-cancel", { bubbles: !0 })), this.open = !1;
        return;
      }
      e.key === "Tab" && this._handleFocusTrap(e);
    }
  };
  _handleFocusTrap(e) {
    const o = this._getFocusableElements();
    if (o.length === 0) return;
    const t = o[0], n = o[o.length - 1], i = document.activeElement;
    e.shiftKey ? (i === t || !this._isElementInDialog(i)) && (e.preventDefault(), n.focus()) : (i === n || !this._isElementInDialog(i)) && (e.preventDefault(), t.focus());
  }
  _isElementInDialog(e) {
    return !e || !this.shadowRoot ? !1 : this.shadowRoot.contains(e) ? !0 : this.contains(e);
  }
  _handleBackdropClick = (e) => {
    if (!this.closeOnBackdrop || !this.open) return;
    const o = e.target, t = this.shadowRoot?.querySelector(".dialog-container"), n = t && t.contains(o), i = this.contains(o);
    !n && !i && (this.dispatchEvent(new CustomEvent("dialog-cancel", { bubbles: !0 })), this.open = !1);
  };
  _handleCloseButtonClick = (e) => {
    e.stopPropagation(), this.dispatchEvent(new CustomEvent("dialog-close", { bubbles: !0 })), this.open = !1;
  };
  _getFocusableElements() {
    if (!this.shadowRoot) return [];
    const e = [
      "button:not([disabled])",
      "ag-button:not([disabled])",
      "input:not([disabled])",
      "select:not([disabled])",
      "textarea:not([disabled])",
      "a[href]",
      '[tabindex]:not([tabindex="-1"]):not([disabled])'
    ].join(", "), o = Array.from(this.shadowRoot.querySelectorAll(e)), t = Array.from(this.querySelectorAll(e));
    return [...o, ...t].filter(
      (n) => n.offsetParent !== null && !n.hasAttribute("disabled")
    );
  }
  _setInitialFocus() {
    const e = this._getFocusableElements();
    if (e.length > 0)
      e[0].focus();
    else {
      const o = this.shadowRoot?.querySelector('[role="dialog"]');
      o && (o.setAttribute("tabindex", "-1"), o.focus());
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
  willUpdate(e) {
    if (e.has("open")) {
      const o = e.get("open");
      this.open && !o ? (this._previouslyFocusedElement = document.activeElement, this._preventBackgroundScroll(), this.dispatchEvent(new CustomEvent("dialog-open", { bubbles: !0 }))) : !this.open && o && (this.dispatchEvent(new CustomEvent("dialog-close", { bubbles: !0 })), this._restoreBackgroundScroll(), this._restoreFocus());
    }
  }
  _preventBackgroundScroll() {
    const e = parseInt(document.body.getAttribute("data-dialog-count") || "0");
    e === 0 && (document.body.setAttribute(
      "data-dialog-original-overflow",
      document.body.style.overflow || ""
    ), document.body.style.overflow = "hidden", document.body.setAttribute("data-dialog-scroll-locked", "")), document.body.setAttribute("data-dialog-count", (e + 1).toString());
  }
  _restoreBackgroundScroll() {
    const e = parseInt(document.body.getAttribute("data-dialog-count") || "0"), o = Math.max(0, e - 1);
    if (document.body.setAttribute("data-dialog-count", o.toString()), o === 0) {
      const t = document.body.getAttribute("data-dialog-original-overflow");
      document.body.style.overflow = t || "", document.body.removeAttribute("data-dialog-original-overflow"), document.body.removeAttribute("data-dialog-scroll-locked"), document.body.removeAttribute("data-dialog-count");
    }
  }
  updated(e) {
    e.has("open") && this.open && setTimeout(() => this._setInitialFocus(), 0);
  }
  render() {
    return r`
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
              ${this.heading ? r`<h2 id="dialog-heading">${this.heading}</h2>` : ""}
            </slot>
            ${this.showCloseButton ? r`
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
            ${this.description ? r`<p id="dialog-description">${this.description}</p>` : ""}
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
v(a, "styles", h`
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
      background: var(--dialog-bg, #ffffff);
      border: 1px solid var(--dialog-border, #e5e7eb);
      border-radius: var(--dialog-radius, 1rem);
      box-shadow: var(--dialog-shadow, 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04));
      padding: var(--dialog-padding, 1.5rem);
      margin: var(--dialog-margin, 1rem);
    }

    .dialog-header {
      margin-bottom: var(--dialog-header-spacing, 1rem);
    }

    .dialog-header h2 {
      margin: 0;
      font-size: var(--dialog-heading-size, 1.25rem);
      font-weight: var(--dialog-heading-weight, 600);
      color: var(--dialog-heading-color, inherit);
    }

    .dialog-content {
      margin-bottom: var(--dialog-content-spacing, 1rem);
    }

    .dialog-content:last-child {
      margin-bottom: 0;
    }

    .dialog-content p {
      margin: 0 0 1rem 0;
      color: var(--dialog-description-color, #6b7280);
    }

    .dialog-footer {
      margin-top: var(--dialog-footer-spacing, 1rem);
    }

    .dialog-footer:empty {
      margin-top: 0;
    }

    .dialog-close-button {
      position: absolute;
      top: var(--dialog-close-top, 1rem);
      right: var(--dialog-close-right, 1rem);
      background: none;
      border: none;
      font-size: var(--dialog-close-size, 1.5rem);
      cursor: pointer;
      color: var(--dialog-close-color, #6b7280);
      line-height: 1;
      padding: var(--dialog-close-padding, 0.25rem);
      border-radius: var(--dialog-close-radius, 0.25rem);
    }

    .dialog-close-button:hover {
      background: var(--dialog-close-hover-bg, #f3f4f6);
      color: var(--dialog-close-hover-color, #374151);
    }

    .dialog-close-button:focus-visible {
      outline: 2px solid var(--agnostic-focus, #2563eb);
      outline-offset: 2px;
    }
  `);
s([
  l({ type: Boolean, reflect: !0 })
], a.prototype, "open", 2);
s([
  l({ type: String })
], a.prototype, "heading", 2);
s([
  l({ type: String })
], a.prototype, "description", 2);
s([
  l({ type: Boolean })
], a.prototype, "closeOnEscape", 2);
s([
  l({ type: Boolean })
], a.prototype, "closeOnBackdrop", 2);
s([
  l({ type: Boolean })
], a.prototype, "showCloseButton", 2);
a = s([
  b("ag-dialog")
], a);
export {
  a as AgnosticDialog
};
