import { css as l } from "lit";
import { n as p } from "../../property-CemaeiRl.js";
import { Tooltip as r } from "./core/_Tooltip.js";
var m = Object.defineProperty, c = (o, e, i, d) => {
  for (var t = void 0, n = o.length - 1, a; n >= 0; n--)
    (a = o[n]) && (t = a(e, i, t) || t);
  return t && m(e, i, t), t;
};
class s extends r {
  static styles = l`
    ${r.styles}
    /* Experimental styling can be added here */
    /* Core functionality remains in canonical implementation */
  `;
  constructor() {
    super(), this.animationDuration = 150;
  }
  /**
   * Override render to add experimental features
   * while delegating core functionality to canonical base
   */
  render() {
    return super.render();
  }
  /**
   * Example: Enhanced show method with custom animation timing
   * (can be safely modified by AI assistants)
   */
  connectedCallback() {
    super.connectedCallback(), this.updateComplete.then(() => {
      const e = this.shadowRoot?.getElementById("tooltip");
      e && (e.style.transition = `opacity ${this.animationDuration}ms ease-in-out`);
    });
  }
}
c([
  p({ type: Number })
], s.prototype, "animationDuration");
customElements.define("ag-tooltip", s);
export {
  s as Tooltip,
  s as default
};
