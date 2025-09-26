import { css as h, LitElement as c, html as l } from "lit";
import { t as p } from "../../../custom-element-CN0MC8o7.js";
import { n as a } from "../../../property-CemaeiRl.js";
import { r as m } from "../../../state-CovhUvdr.js";
var v = Object.defineProperty, x = Object.getOwnPropertyDescriptor, y = (e, t, s) => t in e ? v(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s, n = (e, t, s, d) => {
  for (var r = d > 1 ? void 0 : d ? x(t, s) : t, f = e.length - 1, _; f >= 0; f--)
    (_ = e[f]) && (r = (d ? _(t, s, r) : _(r)) || r);
  return d && r && v(t, s, r), r;
}, b = (e, t, s) => y(e, t + "", s);
let g = class extends c {
  constructor() {
    super(), this.setAttribute("role", "separator");
  }
  render() {
    return l``;
  }
};
b(g, "styles", h`
    :host {
      display: block;
      border-top: 1px solid var(--ag-menu-separator-color, #e5e7eb);
      margin: var(--ag-menu-separator-margin, 0.25rem 0);
    }
  `);
g = n([
  p("ag-menu-separator")
], g);
let o = class extends c {
  constructor() {
    super(), this.value = "", this.disabled = !1, this.href = "", this.target = "", this.setAttribute("role", "menuitem"), this.setAttribute("tabindex", "-1"), this.addEventListener("click", this._handleClick.bind(this));
  }
  render() {
    return this.href ? l`
        <a
          href="${this.href}"
          target="${this.target || ""}"
          class="content"
          @click="${this._handleClick}"
        >
          <span class="text"><slot></slot></span>
        </a>
      ` : l`
      <div class="content" @click="${this._handleClick}">
        <span class="text"><slot></slot></span>
      </div>
    `;
  }
  _handleClick(e) {
    if (this.disabled) {
      e.preventDefault(), e.stopPropagation();
      return;
    }
    this.dispatchEvent(new CustomEvent("menu-item-click", {
      detail: {
        value: this.value,
        item: this
      },
      bubbles: !0
    }));
  }
};
b(o, "styles", h`
    :host {
      display: block;
      padding: var(--ag-menu-item-padding, 0.5rem 0.75rem);
      background: var(--ag-menu-item-bg, transparent);
      color: var(--ag-menu-item-text, #374151);
      cursor: pointer;
      text-decoration: none;
      transition: all 0.15s ease;
    }

    :host(:hover) {
      background: var(--ag-menu-item-bg-hover, #f9fafb);
      color: var(--ag-menu-item-text-hover, #111827);
    }

    :host([tabindex="0"]) {
      background: var(--ag-menu-item-bg-focus, #f3f4f6);
    }

    :host([aria-disabled="true"]) {
      color: var(--ag-menu-item-text-disabled, #9ca3af);
      cursor: not-allowed;
      pointer-events: none;
    }

    :host(:focus-visible) {
      outline: var(--ag-focus-width, 2px) solid var(--ag-focus, #2563eb);
      outline-offset: -2px;
    }

    .content {
      display: flex;
      align-items: center;
      width: 100%;
    }

    .text {
      flex: 1;
    }
  `);
n([
  a({ type: String })
], o.prototype, "value", 2);
n([
  a({ type: Boolean })
], o.prototype, "disabled", 2);
n([
  a({ type: String })
], o.prototype, "href", 2);
n([
  a({ type: String })
], o.prototype, "target", 2);
o = n([
  p("ag-menu-item")
], o);
let i = class extends c {
  constructor() {
    super(), this.open = !1, this.placement = "bottom-start", this.ariaLabel = "", this.ariaLabelledBy = "", this._menuItems = [], this._focusedIndex = 0, this.setAttribute("role", "menu"), this.setAttribute("aria-orientation", "vertical");
  }
  firstUpdated() {
    this._updateMenuItems(), this.addEventListener("keydown", this._handleKeyDown.bind(this)), this.addEventListener("menu-item-click", this._handleItemClick.bind(this));
  }
  updated(e) {
    e.has("open") && this.open && (this._updateMenuItems(), this._focusedIndex = 0, this._updateFocus());
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("slotchange", () => {
      this._updateMenuItems();
    });
  }
  get menuItems() {
    return this._menuItems;
  }
  set focusedIndex(e) {
    this._focusedIndex = e;
  }
  _updateMenuItems() {
    this._menuItems = Array.from(this.querySelectorAll("ag-menu-item")), this._updateFocus();
  }
  _updateFocus() {
    this._menuItems.length !== 0 && this._menuItems.forEach((e, t) => {
      e.setAttribute("tabindex", t === this._focusedIndex ? "0" : "-1"), t === this._focusedIndex && e.focus();
    });
  }
  _handleKeyDown(e) {
    if (this._menuItems.length === 0) return;
    const { key: t } = e;
    switch (t) {
      case "ArrowDown":
        e.preventDefault(), this._focusedIndex = (this._focusedIndex + 1) % this._menuItems.length, this._updateFocus();
        break;
      case "ArrowUp":
        e.preventDefault(), this._focusedIndex = this._focusedIndex === 0 ? this._menuItems.length - 1 : this._focusedIndex - 1, this._updateFocus();
        break;
      case "Home":
        e.preventDefault(), this._focusedIndex = 0, this._updateFocus();
        break;
      case "End":
        e.preventDefault(), this._focusedIndex = this._menuItems.length - 1, this._updateFocus();
        break;
      case "Enter":
      case " ":
        if (e.preventDefault(), this._menuItems[this._focusedIndex]) {
          const s = this._menuItems[this._focusedIndex];
          s.dispatchEvent(new CustomEvent("menu-item-click", {
            detail: {
              value: s.value,
              item: s
            },
            bubbles: !0
          }));
        }
        break;
      case "Escape":
        this._closeMenu();
        break;
      case "Tab":
        this._closeMenu();
        break;
    }
  }
  _handleItemClick(e) {
    const { value: t } = e.detail;
    this.dispatchEvent(new CustomEvent("menu-select", {
      detail: { value: t },
      bubbles: !0
    })), this._closeMenu();
  }
  _closeMenu() {
    this.dispatchEvent(new CustomEvent("menu-close", {
      bubbles: !0
    }));
  }
  render() {
    return l`
      <div class="menu-container">
        <slot></slot>
      </div>
    `;
  }
};
b(i, "styles", h`
    :host {
      position: absolute;
      background: var(--ag-menu-bg, #ffffff);
      border: 1px solid var(--ag-menu-border, #e5e7eb);
      border-radius: var(--ag-menu-radius, 0.5rem);
      box-shadow: var(--ag-menu-shadow, 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05));
      padding: var(--ag-menu-padding, 0.5rem);
      min-width: var(--ag-menu-min-width, 12rem);
      max-width: var(--ag-menu-max-width, 20rem);
      z-index: var(--ag-menu-z-index, 1000);
      opacity: 0;
      transform: scale(0.95);
      transition: opacity 0.15s ease, transform 0.15s ease;
      pointer-events: none;
    }

    :host([open]) {
      opacity: 1;
      transform: scale(1);
      pointer-events: auto;
    }

    :host([hidden]) {
      display: none;
    }

    .menu-container {
      display: flex;
      flex-direction: column;
    }
  `);
n([
  a({ type: Boolean })
], i.prototype, "open", 2);
n([
  a({ type: String })
], i.prototype, "placement", 2);
n([
  a({ type: String, attribute: "aria-label" })
], i.prototype, "ariaLabel", 2);
n([
  a({ type: String, attribute: "aria-labelledby" })
], i.prototype, "ariaLabelledBy", 2);
n([
  m()
], i.prototype, "_menuItems", 2);
n([
  m()
], i.prototype, "_focusedIndex", 2);
i = n([
  p("ag-menu")
], i);
let u = class extends c {
  constructor() {
    super(), this.disabled = !1, this.ariaLabel = "", this._menuOpen = !1, this._menu = null;
  }
  firstUpdated() {
    Promise.resolve().then(() => {
      this._updateMenuReference();
    }), document.addEventListener("click", this._handleOutsideClick.bind(this));
  }
  disconnectedCallback() {
    super.disconnectedCallback(), document.removeEventListener("click", this._handleOutsideClick.bind(this));
  }
  _handleButtonClick(e) {
    this.disabled || (e.stopPropagation(), this._menu || this._updateMenuReference(), this._toggleMenu());
  }
  _handleButtonKeyDown(e) {
    if (this.disabled) return;
    const { key: t } = e;
    switch (t) {
      case "Enter":
      case " ":
        e.preventDefault(), this._openMenu();
        break;
      case "ArrowDown":
        e.preventDefault(), this._openMenu();
        break;
      case "ArrowUp":
        e.preventDefault(), this._openMenu(!0);
        break;
    }
  }
  _toggleMenu() {
    this._menuOpen ? this._closeMenu() : this._openMenu();
  }
  _openMenu(e = !1) {
    this._menuOpen = !0, this._menu && (this._menu.open = !0, this._menu.hasAttribute("hidden") && this._menu.removeAttribute("hidden"), e && (this._menu.focusedIndex = this._menu.menuItems.length - 1)), this.dispatchEvent(new CustomEvent("menu-open", {
      bubbles: !0
    }));
  }
  _closeMenu() {
    this._menuOpen = !1, this._menu && (this._menu.open = !1, this._menu.setAttribute("hidden", "")), this.shadowRoot?.querySelector("button")?.focus(), this.dispatchEvent(new CustomEvent("menu-close", {
      bubbles: !0
    }));
  }
  _handleMenuClose() {
    this._closeMenu();
  }
  _handleMenuSelect(e) {
    this.dispatchEvent(new CustomEvent("menu-select", {
      detail: e.detail,
      bubbles: !0
    }));
  }
  _handleOutsideClick(e) {
    if (!this._menuOpen) return;
    const t = e.target;
    this.contains(t) || this._closeMenu();
  }
  render() {
    return l`
      <button
        type="button"
        ?disabled="${this.disabled}"
        aria-haspopup="menu"
        aria-expanded="${this._menuOpen}"
        aria-label="${this.ariaLabel || ""}"
        @click="${this._handleButtonClick}"
        @keydown="${this._handleButtonKeyDown}"
      >
        <span class="button-content">
          <slot></slot>
        </span>
        <span class="indicator" aria-hidden="true">▾</span>
      </button>

      <div class="menu-slot">
        <slot name="menu" @slotchange="${this._updateMenuReference}"></slot>
      </div>
    `;
  }
  _updateMenuReference() {
    this._menu = this.querySelector("ag-menu"), this._menu && (this._menu.addEventListener("menu-close", this._handleMenuClose.bind(this)), this._menu.addEventListener("menu-select", this._handleMenuSelect.bind(this)));
  }
};
b(u, "styles", h`
    :host {
      position: relative;
      display: inline-block;
    }

    button {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background: var(--ag-menubutton-bg, transparent);
      border: 1px solid var(--ag-menubutton-border, #d1d5db);
      color: var(--ag-menubutton-text, #374151);
      padding: 0.5rem 0.75rem;
      border-radius: 0.375rem;
      cursor: pointer;
      font: inherit;
      transition: all 0.15s ease;
    }

    button:hover:not(:disabled) {
      background: var(--ag-menubutton-bg-hover, #f9fafb);
    }

    button:focus-visible {
      outline: var(--ag-focus-width, 2px) solid var(--ag-focus, #2563eb);
      outline-offset: 2px;
    }

    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    button[aria-expanded="true"] {
      background: var(--ag-menubutton-bg-active, #f3f4f6);
    }

    .button-content {
      flex: 1;
    }

    .indicator {
      color: var(--ag-menubutton-indicator-color, #6b7280);
      transition: transform 0.15s ease;
    }

    button[aria-expanded="true"] .indicator {
      transform: rotate(180deg);
    }

    .menu-slot {
      position: absolute;
      top: 100%;
      left: 0;
      margin-top: 0.25rem;
    }
  `);
n([
  a({ type: Boolean })
], u.prototype, "disabled", 2);
n([
  a({ type: String, attribute: "aria-label" })
], u.prototype, "ariaLabel", 2);
n([
  m()
], u.prototype, "_menuOpen", 2);
n([
  m()
], u.prototype, "_menu", 2);
u = n([
  p("ag-menu-button")
], u);
export {
  i as Menu,
  u as MenuButton,
  o as MenuItem,
  g as MenuSeparator
};
