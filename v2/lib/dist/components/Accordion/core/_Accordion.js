import { LitElement as i, css as o, html as t } from "lit";
import { generateUniqueId as a } from "../../../utils/unique-id.js";
const l = "2.0.0-stable", h = "2.0", u = "2025-09-08";
let p = class extends i {
  static styles = [o`
    :host {
      display: block;
    }
    /* Progressive enhancement: Hide only after web component is defined */
    :host(:not(:defined)) {
      visibility: visible; /* Content visible without JS */
    }
    :host(:defined) {
      visibility: visible; /* Explicit visibility once defined */
    }
  `];
  render() {
    return t`
      <slot></slot>
    `;
  }
}, d = class extends i {
  static properties = {
    open: { type: Boolean, reflect: !0 },
    headingLevel: { type: Number, attribute: "heading-level" },
    disabled: { type: Boolean, reflect: !0 }
  };
  _id = a("accordion-item");
  constructor() {
    super(), this.open = !1, this.headingLevel = 3, this.disabled = !1, this.addEventListener("keydown", this._handleKeydown.bind(this));
  }
  connectedCallback() {
    super.connectedCallback(), this.setAttribute("data-enhanced", "");
  }
  static styles = [o`
    :host {
      display: block;
    }
    .header {
      cursor: pointer;
    }
    :host([disabled]) .header {
      cursor: not-allowed;
      opacity: 0.6;
    }
    .heading {
      margin: 0;
      padding: 0;
    }
    .header button {
      background: none;
      border: none;
      padding: 0;
      font: inherit;
      cursor: pointer;
      width: 100%;
      text-align: left;
    }
    .header button:focus-visible {
      /* High-contrast focus ring using CSS custom property */
      outline: 2px solid var(--agnostic-focus, #2563eb);
      outline-offset: 2px;
      transition: outline 0.2s ease;
    }
    :host([disabled]) .header button {
      cursor: not-allowed;
      pointer-events: none;
    }
    /* Progressive enhancement: Content visible until JS enhanced */
    .content {
      display: block;
    }
    /* After JS enhancement, respect open/closed state */
    :host([data-enhanced]) .content {
      display: none;
    }
    :host([data-enhanced][open]) .content {
      display: block;
    }
    /* Ensure hidden attribute works in all environments */
    .content[hidden] {
      display: none !important;
    }
  `];
  render() {
    return t`
      <div class="header" part="accordion-header-wrapper" @click="${this.toggle}">
        ${this._renderHeading()}
      </div>
      <div
        class="content"
        part="accordion-content"
        role="region"
        aria-labelledby="${this._id}-button"
        id="${this._id}-panel"
        ?hidden="${this.hasAttribute("data-enhanced") && !this.open}"
      >
        <slot name="content"></slot>
      </div>
    `;
  }
  _renderHeading() {
    const e = t`
      <button
        part="accordion-header"
        aria-expanded="${this.open}"
        aria-controls="${this._id}-panel"
        id="${this._id}-button"
        ?disabled="${this.disabled}"
        aria-disabled="${this.disabled}"
        @keydown="${this._handleKeydown}"
      >
        <slot name="header"></slot>
      </button>
    `;
    switch (Math.max(1, Math.min(6, this.headingLevel || 3))) {
      case 1:
        return t`<h1 class="heading" part="accordion-heading">${e}</h1>`;
      case 2:
        return t`<h2 class="heading" part="accordion-heading">${e}</h2>`;
      case 3:
        return t`<h3 class="heading" part="accordion-heading">${e}</h3>`;
      case 4:
        return t`<h4 class="heading" part="accordion-heading">${e}</h4>`;
      case 5:
        return t`<h5 class="heading" part="accordion-heading">${e}</h5>`;
      case 6:
        return t`<h6 class="heading" part="accordion-heading">${e}</h6>`;
    }
  }
  toggle() {
    this.disabled || (this.open = !this.open, this.dispatchEvent(new CustomEvent("toggle", {
      detail: { open: this.open },
      bubbles: !0
    })));
  }
  /**
   * Focus the accordion's button (for programmatic focus management)
   */
  focus() {
    this.shadowRoot?.querySelector("button")?.focus();
  }
  /**
   * Get the button element (for external focus management)
   */
  get buttonElement() {
    return this.shadowRoot?.querySelector("button") || null;
  }
  /**
   * Handle keyboard interactions for individual accordion items
   */
  _handleKeydown(e) {
    if (this.disabled) return;
    const { key: n } = e;
    (n === "Enter" || n === " ") && e.target === this.buttonElement && (e.preventDefault(), this.toggle()), (n === "ArrowDown" || n === "ArrowUp" || n === "Home" || n === "End") && (e.preventDefault(), this.dispatchEvent(new CustomEvent("accordion-keydown", {
      detail: { key: n, accordionItem: this },
      bubbles: !0
    })));
  }
};
customElements.define("ag-accordion-item", d);
export {
  h as ACCORDION_API_VERSION,
  l as ACCORDION_CANONICAL_VERSION,
  u as ACCORDION_LAST_UPDATED,
  p as Accordion,
  d as AccordionItem
};
