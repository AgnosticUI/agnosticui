import { defineComponent as n, ref as r, onMounted as t, onUnmounted as c, createElementBlock as a, openBlock as i, mergeProps as m, renderSlot as s } from "vue";
import "./components/Accordion/core/_Accordion.js";
import "./components/AccordionGroup/AccordionGroup.js";
const g = /* @__PURE__ */ n({
  __name: "VueAccordion",
  setup(d, { emit: f }) {
    const e = r();
    return t(async () => {
      await customElements.whenDefined("ag-accordion"), e.value;
    }), c(() => {
    }), (o, p) => (i(), a("ag-accordion", m({
      ref_key: "accordionRef",
      ref: e
    }, o.$attrs), [
      s(o.$slots, "default")
    ], 16));
  }
});
export {
  g as _
};
