import { defineComponent as a, ref as l, onMounted as r, onUnmounted as u, createElementBlock as c, openBlock as p, mergeProps as g, renderSlot as h } from "vue";
import "./components/Tooltip/core/_Tooltip.js";
const f = ["content", "placement", "distance", "skidding", "trigger", "disabled"], _ = /* @__PURE__ */ a({
  __name: "VueTooltip",
  props: {
    content: { default: "" },
    placement: { default: "top" },
    distance: { default: 8 },
    skidding: { default: 0 },
    trigger: { default: "hover focus" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["show", "hide"],
  setup(m, { expose: s, emit: d }) {
    const o = d, e = l(), n = () => {
      o("show");
    }, i = () => {
      o("hide");
    };
    return s({
      show: () => {
        e.value?.show();
      },
      hide: () => {
        e.value?.hide();
      },
      toggle: () => {
        e.value?.toggle();
      }
    }), r(async () => {
      await customElements.whenDefined("ag-tooltip"), e.value && (e.value.addEventListener("show", n), e.value.addEventListener("hide", i));
    }), u(() => {
      e.value && (e.value.removeEventListener("show", n), e.value.removeEventListener("hide", i));
    }), (t, E) => (p(), c("ag-tooltip", g({
      ref_key: "tooltipRef",
      ref: e,
      content: t.content,
      placement: t.placement,
      distance: t.distance,
      skidding: t.skidding,
      trigger: t.trigger,
      disabled: t.disabled || void 0
    }, t.$attrs), [
      h(t.$slots, "default")
    ], 16, f));
  }
});
export {
  _
};
