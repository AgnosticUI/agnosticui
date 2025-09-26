import { css as d, LitElement as u, html as p } from "lit";
import { t as f } from "../../../custom-element-CN0MC8o7.js";
import { n } from "../../../property-CemaeiRl.js";
import { r as v } from "../../../state-CovhUvdr.js";
import { generateUniqueId as g } from "../../../utils/unique-id.js";
var m = Object.defineProperty, T = Object.getOwnPropertyDescriptor, y = (t, a, e) => a in t ? m(t, a, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[a] = e, r = (t, a, e, i) => {
  for (var s = i > 1 ? void 0 : i ? T(a, e) : a, b = t.length - 1, c; b >= 0; b--)
    (c = t[b]) && (s = (i ? c(a, e, s) : c(s)) || s);
  return i && s && m(a, e, s), s;
}, _ = (t, a, e) => y(t, a + "", e);
let l = class extends u {
  constructor() {
    super(), this.panel = "", this.setAttribute("role", "tab");
  }
  render() {
    return p`<slot></slot>`;
  }
};
_(l, "styles", d`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: var(--ag-tabs-bg, transparent);
      border: none;
      color: var(--ag-tabs-text, #6b7280);
      cursor: pointer;
      font: inherit;
      padding: 0.5rem 1rem;
      border-radius: 0;
      border-bottom: 2px solid transparent;
      text-decoration: none;
    }

    :host(:hover) {
      background: var(--ag-tabs-bg-hover, #f9fafb);
      color: var(--ag-tabs-text-hover, #374151);
    }

    :host([aria-selected="true"]) {
      color: var(--ag-tabs-text-active, #111827);
      border-bottom-color: var(--ag-tabs-border-active, #2563eb);
    }

    :host(:focus-visible) {
      outline: var(--ag-focus-width, 2px) solid var(--ag-focus, #2563eb);
      outline-offset: var(--ag-focus-offset, 2px);
    }
  `);
r([
  n({ type: String })
], l.prototype, "panel", 2);
l = r([
  f("ag-tab")
], l);
let h = class extends u {
  constructor() {
    super(), this.setAttribute("role", "tabpanel"), this.setAttribute("tabindex", "0");
  }
  render() {
    return p`<slot></slot>`;
  }
};
_(h, "styles", d`
    :host {
      display: block;
      padding: var(--ag-tabs-panel-padding, 1rem);
    }

    :host([hidden]) {
      display: none;
    }
  `);
h = r([
  f("ag-tab-panel")
], h);
let o = class extends u {
  constructor() {
    super(), this.activation = "manual", this.activeTab = 0, this.orientation = "horizontal", this.ariaLabel = "", this.ariaLabelledBy = "", this._tabs = [], this._panels = [], this._focusedTab = 0;
  }
  firstUpdated() {
    Promise.resolve().then(() => {
      this._updateTabsAndPanels();
    });
  }
  updated(t) {
    t.has("activeTab") && (this._focusedTab = this.activeTab, Promise.resolve().then(() => {
      this._updateTabsAndPanels();
    }));
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("slotchange", () => {
      Promise.resolve().then(() => {
        this._updateTabsAndPanels();
      });
    }), this.addEventListener("keydown", this._handleKeyDown.bind(this)), this.addEventListener("click", this._handleClick.bind(this));
  }
  _updateTabsAndPanels() {
    this._tabs = Array.from(this.querySelectorAll("ag-tab")), this._panels = Array.from(this.querySelectorAll("ag-tab-panel")), this._tabs.forEach((t, a) => {
      const e = t.id || `tab-${g()}`, i = t.panel || this._panels[a]?.id || `panel-${g()}`;
      t.setAttribute("id", e), t.setAttribute("aria-controls", i), t.setAttribute("aria-selected", a === this.activeTab ? "true" : "false"), t.setAttribute("tabindex", a === this._focusedTab ? "0" : "-1"), this._panels[a] && (this._panels[a].setAttribute("id", i), this._panels[a].setAttribute("aria-labelledby", e), a !== this.activeTab ? this._panels[a].setAttribute("hidden", "") : this._panels[a].removeAttribute("hidden"));
    });
  }
  _handleKeyDown(t) {
    if (!this._tabs.length) return;
    const { key: a } = t, e = this.orientation === "horizontal";
    let i = this._focusedTab, s = !1;
    switch (a) {
      case "ArrowRight":
        e && (i = (this._focusedTab + 1) % this._tabs.length, s = this.activation === "automatic", t.preventDefault());
        break;
      case "ArrowLeft":
        e && (i = this._focusedTab === 0 ? this._tabs.length - 1 : this._focusedTab - 1, s = this.activation === "automatic", t.preventDefault());
        break;
      case "ArrowDown":
        e || (i = (this._focusedTab + 1) % this._tabs.length, s = this.activation === "automatic", t.preventDefault());
        break;
      case "ArrowUp":
        e || (i = this._focusedTab === 0 ? this._tabs.length - 1 : this._focusedTab - 1, s = this.activation === "automatic", t.preventDefault());
        break;
      case "Home":
        i = 0, s = this.activation === "automatic", t.preventDefault();
        break;
      case "End":
        i = this._tabs.length - 1, s = this.activation === "automatic", t.preventDefault();
        break;
      case " ":
      case "Enter":
        this.activation === "manual" && (this._activateTab(this._focusedTab), t.preventDefault());
        break;
    }
    i !== this._focusedTab && (this._setFocusedTab(i), s && this._activateTab(i));
  }
  _handleClick(t) {
    const a = t.target;
    if (a.tagName === "AG-TAB") {
      if (a.hasAttribute("disabled") || a.getAttribute("aria-disabled") === "true")
        return;
      const e = this._tabs.indexOf(a);
      e >= 0 && this._activateTab(e);
    }
  }
  _setFocusedTab(t) {
    t >= 0 && t < this._tabs.length && (this._focusedTab = t, this._updateTabsAndPanels(), this._tabs[t].focus());
  }
  _activateTab(t) {
    if (t >= 0 && t < this._tabs.length) {
      const a = this.activeTab, e = this._tabs[t];
      if (e.hasAttribute("disabled") || e.getAttribute("aria-disabled") === "true")
        return;
      this._setFocusedTab(t), a !== t && (this.activeTab = t, this.dispatchEvent(new CustomEvent("tab-change", {
        detail: {
          activeTab: t,
          previousTab: a
        },
        bubbles: !0
      })));
    }
  }
  render() {
    return p`
      <div class="tabs-container" data-orientation=${this.orientation}>
        <div
          role="tablist"
          aria-orientation=${this.orientation}
          aria-label=${this.ariaLabel || ""}
          aria-labelledby=${this.ariaLabelledBy || ""}
        >
          <slot name="tab"></slot>
        </div>
        <div class="tab-panels">
          <slot name="panel"></slot>
        </div>
      </div>
    `;
  }
};
_(o, "styles", d`
    :host {
      display: block;
    }

    .tabs-container {
      display: flex;
    }

    .tabs-container[data-orientation="vertical"] {
      flex-direction: row;
    }

    .tabs-container[data-orientation="horizontal"] {
      flex-direction: column;
    }

    [role="tablist"] {
      display: flex;
      gap: var(--ag-tabs-spacing, 0.5rem);
    }

    [role="tablist"][aria-orientation="horizontal"] {
      flex-direction: row;
      border-bottom: 1px solid var(--ag-tabs-border, #e5e7eb);
    }

    [role="tablist"][aria-orientation="vertical"] {
      flex-direction: column;
      border-right: 1px solid var(--ag-tabs-border, #e5e7eb);
      min-width: 200px;
    }

    .tab-panels {
      flex: 1;
    }

    ::slotted(ag-tab-panel[hidden]) {
      display: none;
    }
  `);
r([
  n({ type: String })
], o.prototype, "activation", 2);
r([
  n({ type: Number, attribute: "active-tab" })
], o.prototype, "activeTab", 2);
r([
  n({ type: String })
], o.prototype, "orientation", 2);
r([
  n({ type: String, attribute: "aria-label" })
], o.prototype, "ariaLabel", 2);
r([
  n({ type: String, attribute: "aria-labelledby" })
], o.prototype, "ariaLabelledBy", 2);
r([
  v()
], o.prototype, "_tabs", 2);
r([
  v()
], o.prototype, "_panels", 2);
r([
  v()
], o.prototype, "_focusedTab", 2);
o = r([
  f("ag-tabs")
], o);
export {
  l as Tab,
  h as TabPanel,
  o as Tabs
};
