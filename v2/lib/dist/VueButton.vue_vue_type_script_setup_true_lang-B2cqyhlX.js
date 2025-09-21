import { defineComponent as r, ref as g, onMounted as u, onUnmounted as f, createElementBlock as p, openBlock as b, mergeProps as c, renderSlot as m } from "vue";
import "./components/Button/core/_Button.js";
const v = ["type", "aria-label", "aria-describedby", "disabled", "loading", "toggle", "pressed"], B = /* @__PURE__ */ r({
  __name: "VueButton",
  props: {
    type: { default: "button" },
    disabled: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    toggle: { type: Boolean, default: !1 },
    pressed: { type: Boolean, default: !1 },
    ariaLabel: {},
    ariaDescribedby: {}
  },
  emits: ["click", "toggle"],
  setup(d, { emit: s }) {
    const a = d, o = s, t = g(), l = (e) => {
      o("click", e);
    }, n = (e) => {
      const i = e.detail;
      o("toggle", i);
    };
    return u(async () => {
      await customElements.whenDefined("ag-button"), t.value && (t.value.addEventListener("click", l), a.toggle && t.value.addEventListener("toggle", n));
    }), f(() => {
      t.value && (t.value.removeEventListener("click", l), a.toggle && t.value.removeEventListener("toggle", n));
    }), (e, i) => (b(), p("ag-button", c({
      ref_key: "buttonRef",
      ref: t,
      type: e.type,
      "aria-label": e.ariaLabel,
      "aria-describedby": e.ariaDescribedby,
      disabled: e.disabled || void 0,
      loading: e.loading || void 0,
      toggle: e.toggle || void 0,
      pressed: e.pressed || void 0
    }, e.$attrs), [
      m(e.$slots, "default")
    ], 16, v));
  }
});
export {
  B as _
};
