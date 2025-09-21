import { AccordionItem as h } from "../core/_Accordion.js";
import { css as b, html as f } from "lit";
import { x as y } from "../../../lit-html-Bm_EwbrZ.js";
import { generateUniqueId as g } from "../../../utils/unique-id.js";
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const l = Symbol.for(""), $ = (e) => {
  if (e?.r === l) return e?._$litStatic$;
}, v = (e) => ({ _$litStatic$: e, r: l }), p = /* @__PURE__ */ new Map(), z = (e) => (t, ...n) => {
  const o = n.length;
  let c, s;
  const a = [], d = [];
  let r, i = 0, m = !1;
  for (; i < o; ) {
    for (r = t[i]; i < o && (s = n[i], (c = $(s)) !== void 0); ) r += c + t[++i], m = !0;
    i !== o && d.push(s), a.push(r), i++;
  }
  if (i === o && a.push(t[o]), m) {
    const u = a.join("$$lit$$");
    (t = p.get(u)) === void 0 && (a.raw = a, p.set(u, t = a)), n = d;
  }
  return e(t, ...n);
}, M = z(y);
class T extends h {
  // Extend properties (never override existing ones)
  static properties = {
    ...h.properties,
    animationDuration: { type: Number, attribute: "animation-duration" },
    animationType: { type: String, attribute: "animation-type" },
    respectReducedMotion: { type: Boolean, attribute: "respect-reduced-motion" }
  };
  _animatedId = g("animated-accordion-item");
  constructor() {
    super(), this.animationDuration = 300, this.animationType = "slide", this.respectReducedMotion = !0;
  }
  static get styles() {
    return [
      ...super.styles,
      b`
        .content {
          overflow: hidden;
          transform-origin: top;
        }
        
        /* Default closed state - completely hidden */
        :host(:not([open])) .content {
          display: none;
        }
        
        /* When enhanced with JS, use animations instead of display:none */
        :host([data-enhanced]:not([open])) .content {
          display: block !important;
          transform: scaleY(0);
          opacity: 0;
          height: 0;
          transition: transform var(--animation-duration, 300ms) cubic-bezier(0.4, 0, 0.2, 1),
                      opacity var(--animation-duration, 300ms) cubic-bezier(0.4, 0, 0.2, 1),
                      height var(--animation-duration, 300ms) cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Open state - visible and scaled */
        :host([data-enhanced][open]) .content {
          display: block;
          transform: scaleY(1);
          opacity: 1;
          height: auto;
          transition: transform var(--animation-duration, 300ms) cubic-bezier(0.4, 0, 0.2, 1),
                      opacity var(--animation-duration, 300ms) cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Different animation speeds */
        :host([animation-duration="200"]:not([open])) .content {
          transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1),
                      opacity 200ms cubic-bezier(0.4, 0, 0.2, 1),
                      height 200ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        :host([animation-duration="200"][open]) .content {
          transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1),
                      opacity 200ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        :host([animation-duration="500"]:not([open])) .content {
          transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1),
                      opacity 500ms cubic-bezier(0.4, 0, 0.2, 1),
                      height 500ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        :host([animation-duration="500"][open]) .content {
          transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1),
                      opacity 500ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        :host([animation-duration="800"]:not([open])) .content {
          transition: transform 800ms cubic-bezier(0.4, 0, 0.2, 1),
                      opacity 800ms cubic-bezier(0.4, 0, 0.2, 1),
                      height 800ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        :host([animation-duration="800"][open]) .content {
          transition: transform 800ms cubic-bezier(0.4, 0, 0.2, 1),
                      opacity 800ms cubic-bezier(0.4, 0, 0.2, 1);
        }
      `
    ];
  }
  // Ensure we call parent's connectedCallback for data-enhanced attribute
  connectedCallback() {
    super.connectedCallback(), this.style.setProperty("--animation-duration", `${this.animationDuration}ms`);
  }
  // Override render to apply animation duration and control content visibility
  render() {
    this.style.setProperty("--animation-duration", `${this.animationDuration}ms`);
    const t = `h${Math.max(1, Math.min(6, this.headingLevel))}`;
    return f`
      <div class="header" @click="${this.toggle}">
        ${this._renderAnimatedHeading(t)}
      </div>
      <div 
        class="content"
        role="region"
        aria-labelledby="${this._animatedId}-button"
        id="${this._animatedId}-panel"
      >
        <slot name="content"></slot>
      </div>
    `;
  }
  _renderAnimatedHeading(t) {
    const n = v(t);
    return M`<${n} class="heading">
      <button
        aria-expanded="${this.open}"
        aria-controls="${this._animatedId}-panel"
        id="${this._animatedId}-button"
        ?disabled="${this.disabled}"
        aria-disabled="${this.disabled}"
      >
        <slot name="header"></slot>
      </button>
    </${n}>`;
  }
  // Override toggle to add animation events (safe extension)
  toggle() {
    const t = this.open;
    this.dispatchEvent(new CustomEvent("accordion-animation-start", {
      detail: {
        opening: !t,
        animationType: this.animationType,
        duration: this.animationDuration
      },
      bubbles: !0
    })), super.toggle(), (!this.respectReducedMotion || !window.matchMedia("(prefers-reduced-motion: reduce)").matches) && setTimeout(() => {
      this.dispatchEvent(new CustomEvent("accordion-animation-end", {
        detail: {
          opened: this.open,
          animationType: this.animationType
        },
        bubbles: !0
      }));
    }, this.animationDuration);
  }
  // Additional convenience methods (pure extensions)
  /**
   * Animate to open state
   */
  animateOpen() {
    this.open || this.toggle();
  }
  /**
   * Animate to closed state  
   */
  animateClose() {
    this.open && this.toggle();
  }
  /**
   * Set animation configuration
   */
  configureAnimation(t) {
    t.duration !== void 0 && (this.animationDuration = t.duration), t.type !== void 0 && (this.animationType = t.type), t.respectReducedMotion !== void 0 && (this.respectReducedMotion = t.respectReducedMotion);
  }
}
customElements.define("ag-animated-accordion-item", T);
export {
  T as AnimatedAccordionItem,
  T as default
};
