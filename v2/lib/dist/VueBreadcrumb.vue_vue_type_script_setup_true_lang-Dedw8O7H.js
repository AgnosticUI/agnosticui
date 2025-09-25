import { defineComponent as l, ref as o, watch as s, onMounted as d, onUnmounted as b, createElementBlock as p, openBlock as f, mergeProps as v } from "vue";
import "./components/Breadcrumb/core/_Breadcrumb.js";
const k = ["type", "aria-label"], h = /* @__PURE__ */ l({
  __name: "VueBreadcrumb",
  props: {
    items: {},
    type: { default: "default" },
    ariaLabel: { default: "Breadcrumb" }
  },
  emits: ["breadcrumb-click"],
  setup(u, { emit: m }) {
    const a = u, i = m, e = o(), t = (r) => {
      const n = r.detail;
      i("breadcrumb-click", n);
    }, c = () => {
      e.value && (e.value.items = a.items);
    };
    return s(() => a.items, c, { deep: !0 }), d(async () => {
      await customElements.whenDefined("ag-breadcrumb"), e.value && (c(), e.value.addEventListener("breadcrumb-click", t));
    }), b(() => {
      e.value && e.value.removeEventListener("breadcrumb-click", t);
    }), (r, n) => (f(), p("ag-breadcrumb", v({
      ref_key: "breadcrumbRef",
      ref: e,
      type: r.type,
      "aria-label": r.ariaLabel
    }, r.$attrs), null, 16, k));
  }
});
export {
  h as _
};
