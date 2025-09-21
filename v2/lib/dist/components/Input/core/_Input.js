import { css as g, LitElement as c, html as n } from "lit";
import { t as b } from "../../../custom-element-CN0MC8o7.js";
import { n as i } from "../../../property-CemaeiRl.js";
import { o as h } from "../../../if-defined-BuNJR_vk.js";
import { generateUniqueId as f } from "../../../utils/unique-id.js";
var u = Object.defineProperty, y = Object.getOwnPropertyDescriptor, _ = (l, r, s) => r in l ? u(l, r, { enumerable: !0, configurable: !0, writable: !0, value: s }) : l[r] = s, t = (l, r, s, d) => {
  for (var a = d > 1 ? void 0 : d ? y(r, s) : r, o = l.length - 1, p; o >= 0; o--)
    (p = l[o]) && (a = (d ? p(r, s, a) : p(a)) || a);
  return d && a && u(r, s, a), a;
}, m = (l, r, s) => _(l, r + "", s);
let e = class extends c {
  // Core element ID for label association
  _inputId = f("ag-input");
  constructor() {
    super(), this.label = "", this.labelHidden = !1, this.noLabel = !1, this.ariaLabel = "", this.labelledBy = "", this.type = "text", this.value = "", this.rows = 4, this.cols = 50, this.size = "default", this.isRounded = !1, this.isUnderlined = !1, this.isUnderlinedWithBackground = !1, this.isInline = !1, this.hasLeftAddon = !1, this.hasRightAddon = !1, this.required = !1, this.disabled = !1, this.readonly = !1, this.invalid = !1, this.errorMessage = "", this.helpText = "";
  }
  render() {
    const l = this.type === "textarea", r = this.hasLeftAddon || this.hasRightAddon, s = `${this._inputId}-help`, d = `${this._inputId}-error`, a = [];
    this.helpText && a.push(s), this.errorMessage && a.push(d), this.labelledBy && a.push(this.labelledBy);
    const o = ["ag-input"];
    this.size !== "default" && o.push(`ag-input--${this.size}`), this.isRounded && o.push("ag-input--rounded"), this.isUnderlined && o.push("ag-input--underlined"), this.isUnderlinedWithBackground && o.push("ag-input--underlined-with-background");
    const p = l ? n`
      <textarea
        id="${this._inputId}"
        part="textarea"
        class="ag-input__textarea"
        .value="${this.value}"
        rows="${this.rows}"
        cols="${this.cols}"
        ?required="${this.required}"
        ?disabled="${this.disabled}"
        ?readonly="${this.readonly}"
        aria-required="${this.required ? "true" : "false"}"
        aria-invalid="${this.invalid ? "true" : "false"}"
        aria-label="${h(this.ariaLabel || void 0)}"
        aria-labelledby="${h(this.labelledBy || void 0)}"
        aria-describedby="${a.length > 0 ? a.join(" ") : h(void 0)}"
      ></textarea>
    ` : n`
      <input
        type="${this.type}"
        id="${this._inputId}"
        part="input"
        class="ag-input__input"
        .value="${this.value}"
        ?required="${this.required}"
        ?disabled="${this.disabled}"
        ?readonly="${this.readonly}"
        aria-required="${this.required ? "true" : "false"}"
        aria-invalid="${this.invalid ? "true" : "false"}"
        aria-label="${h(this.ariaLabel || void 0)}"
        aria-labelledby="${h(this.labelledBy || void 0)}"
        aria-describedby="${a.length > 0 ? a.join(" ") : h(void 0)}"
      />
    `;
    return n`
      <div class="${o.join(" ")}" part="wrapper">
        ${this.noLabel ? "" : n`
          <label
            for="${this._inputId}"
            part="label"
            class="ag-input__label ${this.labelHidden ? "ag-input__label--hidden" : ""}"
          >
            ${this.label}
            ${this.required ? n`
              <span class="ag-input__required" aria-hidden="true">*</span>
            ` : ""}
          </label>
        `}

        ${this.helpText ? n`
          <div class="ag-input__help" id="${s}" part="help">
            ${this.helpText}
          </div>
        ` : ""}

        ${this.errorMessage ? n`
          <div class="ag-input__error" id="${d}" part="error">
            ${this.errorMessage}
          </div>
        ` : n`
          <div class="ag-input__error" id="${d}" part="error" hidden></div>
        `}

        ${r ? n`
          <div class="ag-input__field" part="field-wrapper">
            ${this.hasLeftAddon ? n`
              <div class="ag-input__addon ag-input__addon--left" part="addon-left">
                <slot name="addon-left"></slot>
              </div>
            ` : ""}

            ${p}

            ${this.hasRightAddon ? n`
              <div class="ag-input__addon ag-input__addon--right" part="addon-right">
                <slot name="addon-right"></slot>
              </div>
            ` : ""}
          </div>
        ` : p}
      </div>
    `;
  }
};
m(e, "styles", g`
    /* FUNCTIONAL CSS ONLY - Almost Headless Approach */
    :host {
      display: block;
    }

    /* Label Above Input - BBC GEL Best Practice
     *
     * Why Label Above (BBC GEL):
     * - Mobile-friendly: Labels above work better on small screens
     * - Accessibility standard: Clear visual hierarchy
     * - Cognitive accessibility: Easier to scan and understand
     * - International: Works with various text lengths/languages
     *
     * Note: Labels below inputs are possible via customization:
     * Use noLabel prop + external <ag-label> or <label> for custom positioning
     */
    .ag-input__label {
      display: block;
      margin-bottom: 0.25rem;
    }

    /* Visually hidden label - screen reader only */
    .ag-input__label--hidden {
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

    /* Focus styles - consistent with --agnostic-focus pattern */
    .ag-input__input:focus-visible,
    .ag-input__textarea:focus-visible {
      outline: 2px solid var(--agnostic-focus, #2563eb);
      outline-offset: 2px;
      transition: outline 0.2s ease;
    }

    /* Textarea resize behavior */
    .ag-input__textarea {
      resize: vertical;
    }

    /* Inline mode display */
    :host([is-inline]) {
      display: inline-block;
    }

    /* Addon field wrapper - flex for addon support */
    .ag-input__field {
      display: flex;
      align-items: stretch; /* Changed from center to stretch */
    }

    /* Addon positioning - exact height matching for all content types */
    .ag-input__addon {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.75rem; /* Default size padding */
      box-sizing: border-box;
      min-height: 2.75rem; /* 44px - matches working left addons */
      line-height: 1;
      font-size: 1rem;
    }

    /* Small size addon - exact height matching */
    :host([size="small"]) .ag-input__addon {
      padding: 0.5rem;
      min-height: 2.25rem; /* Proportional to small inputs */
      font-size: 0.875rem;
    }

    /* Large size addon - exact height matching */
    :host([size="large"]) .ag-input__addon {
      padding: 1rem;
      min-height: 3.4375rem; /* 55px - match actual large input height */
      font-size: 1.125rem;
    }

    /* Default size addon - explicit for specificity */
    :host([size="default"]) .ag-input__addon,
    :host(:not([size])) .ag-input__addon {
      padding: 0.75rem;
      min-height: 2.75rem; /* 44px - match working left addons */
      font-size: 1rem;
    }

    /* Input takes remaining space in addon layout */
    .ag-input__field input,
    .ag-input__field textarea {
      flex: 1;
      /* Reset borders for seamless addon connection */
      border-radius: 0;
    }

    /* Required field indicator */
    .ag-input__required {
      color: inherit;
    }

    /* Error state visibility */
    .ag-input__error[hidden] {
      display: none !important;
    }

    .ag-input__error:not([hidden]) {
      display: block;
    }
  `);
t([
  i({ type: String })
], e.prototype, "label", 2);
t([
  i({ type: Boolean, attribute: "label-hidden" })
], e.prototype, "labelHidden", 2);
t([
  i({ type: Boolean, attribute: "no-label" })
], e.prototype, "noLabel", 2);
t([
  i({ type: String, attribute: "aria-label" })
], e.prototype, "ariaLabel", 2);
t([
  i({ type: String, attribute: "labelled-by" })
], e.prototype, "labelledBy", 2);
t([
  i({ type: String })
], e.prototype, "type", 2);
t([
  i({ type: String })
], e.prototype, "value", 2);
t([
  i({ type: Number })
], e.prototype, "rows", 2);
t([
  i({ type: Number })
], e.prototype, "cols", 2);
t([
  i({ type: String, reflect: !0 })
], e.prototype, "size", 2);
t([
  i({ type: Boolean, reflect: !0, attribute: "is-rounded" })
], e.prototype, "isRounded", 2);
t([
  i({ type: Boolean, reflect: !0, attribute: "is-underlined" })
], e.prototype, "isUnderlined", 2);
t([
  i({ type: Boolean, reflect: !0, attribute: "is-underlined-with-background" })
], e.prototype, "isUnderlinedWithBackground", 2);
t([
  i({ type: Boolean, reflect: !0, attribute: "is-inline" })
], e.prototype, "isInline", 2);
t([
  i({ type: Boolean, reflect: !0, attribute: "has-left-addon" })
], e.prototype, "hasLeftAddon", 2);
t([
  i({ type: Boolean, reflect: !0, attribute: "has-right-addon" })
], e.prototype, "hasRightAddon", 2);
t([
  i({ type: Boolean, reflect: !0 })
], e.prototype, "required", 2);
t([
  i({ type: Boolean, reflect: !0 })
], e.prototype, "disabled", 2);
t([
  i({ type: Boolean, reflect: !0 })
], e.prototype, "readonly", 2);
t([
  i({ type: Boolean, reflect: !0 })
], e.prototype, "invalid", 2);
t([
  i({ type: String, attribute: "error-message" })
], e.prototype, "errorMessage", 2);
t([
  i({ type: String, attribute: "help-text" })
], e.prototype, "helpText", 2);
e = t([
  b("ag-input")
], e);
export {
  e as AgInput
};
