import { defineComponent as b, ref as v, onMounted as c, onUnmounted as d, watch as s, createElementBlock as f, openBlock as u, mergeProps as m, renderSlot as L } from "vue";
import "../core/_Tabs.js";
const h = ["activation", "active-tab", "orientation", "aria-label", "aria-labelledby"], B = /* @__PURE__ */ b({
  __name: "VueTabs",
  props: {
    activation: { default: "manual" },
    activeTab: { default: 0 },
    orientation: { default: "horizontal" },
    ariaLabel: {},
    ariaLabelledBy: {}
  },
  emits: ["tab-change"],
  setup(o, { emit: l }) {
    const a = o, r = l, i = v(), t = (e) => {
      const n = e.detail;
      r("tab-change", n);
    };
    return c(async () => {
      if (await Promise.all([
        customElements.whenDefined("ag-tabs"),
        customElements.whenDefined("ag-tab"),
        customElements.whenDefined("ag-tab-panel")
      ]), !i.value) return;
      const e = i.value;
      a.activation !== void 0 && (e.activation = a.activation), a.activeTab !== void 0 && (e.activeTab = a.activeTab), a.orientation !== void 0 && (e.orientation = a.orientation), a.ariaLabel !== void 0 && (e.ariaLabel = a.ariaLabel), a.ariaLabelledBy !== void 0 && (e.ariaLabelledBy = a.ariaLabelledBy), i.value.addEventListener("tab-change", t);
    }), d(() => {
      i.value && i.value.removeEventListener("tab-change", t);
    }), s([() => a.activation, () => a.activeTab, () => a.orientation, () => a.ariaLabel, () => a.ariaLabelledBy], () => {
      if (!i.value) return;
      const e = i.value;
      a.activation !== void 0 && (e.activation = a.activation), a.activeTab !== void 0 && (e.activeTab = a.activeTab), a.orientation !== void 0 && (e.orientation = a.orientation), a.ariaLabel !== void 0 && (e.ariaLabel = a.ariaLabel), a.ariaLabelledBy !== void 0 && (e.ariaLabelledBy = a.ariaLabelledBy);
    }), (e, n) => (u(), f("ag-tabs", m({
      ref_key: "tabsRef",
      ref: i,
      activation: e.activation,
      "active-tab": e.activeTab,
      orientation: e.orientation,
      "aria-label": e.ariaLabel,
      "aria-labelledby": e.ariaLabelledBy
    }, e.$attrs), [
      L(e.$slots, "default")
    ], 16, h));
  }
});
export {
  B as default
};
