import { LitElement as o, html as e } from "lit";
import { neonStyles as t } from "./neon-styles.js";
import { addKeyboardNavigation as n } from "../keyboard-navigation.js";
class r extends o {
  static styles = [t];
  constructor() {
    super(), n(this);
  }
  render() {
    return e`
      <div class="neon-accordion-wrapper">
        <slot></slot>
      </div>
    `;
  }
}
customElements.get("neon-accordion") || customElements.define("neon-accordion", r);
export {
  r as NeonAccordion
};
