import { defineComponent as d, ref as i, onMounted as r, onUnmounted as s, createElementBlock as c, openBlock as m, mergeProps as f, renderSlot as g } from "vue";
import "./components/Accordion/core/_Accordion.js";
const p = ["heading-level", "open", "disabled"], _ = /* @__PURE__ */ d({
  __name: "VueAccordionItem",
  props: {
    open: { type: Boolean, default: !1 },
    headingLevel: { default: 3 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["toggle"],
  setup(u, { emit: a }) {
    const l = a, o = i(), n = (e) => {
      const t = e.detail;
      l("toggle", t);
    };
    return r(async () => {
      await customElements.whenDefined("ag-accordion-item"), o.value && o.value.addEventListener("toggle", n);
    }), s(() => {
      o.value && o.value.removeEventListener("toggle", n);
    }), (e, t) => (m(), c("ag-accordion-item", f({
      ref_key: "accordionItemRef",
      ref: o,
      "heading-level": e.headingLevel,
      open: e.open || void 0,
      disabled: e.disabled || void 0
    }, e.$attrs), [
      g(e.$slots, "default")
    ], 16, p));
  }
});
export {
  _
};
