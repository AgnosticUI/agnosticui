import { defineComponent as r, ref as c, onMounted as u, onUnmounted as b, createElementBlock as p, openBlock as v, mergeProps as m, renderSlot as f } from "vue";
import "./components/IconButton/core/_IconButton.js";
const y = ["label", "icon", "unicode", "size", "variant", "type", "disabled", "pressed", "loading", "aria-describedby"], B = /* @__PURE__ */ r({
  __name: "VueIconButton",
  props: {
    label: {},
    icon: {},
    unicode: {},
    size: { default: "md" },
    variant: { default: "ghost" },
    type: { default: "button" },
    disabled: { type: Boolean, default: !1 },
    pressed: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    ariaLabel: {},
    ariaDescribedby: {}
  },
  emits: ["click", "activate"],
  setup(s, { emit: d }) {
    const a = s, o = d, t = c(), i = (e) => {
      console.log("VueIconButton click:", {
        label: a.ariaLabel || a.label,
        pressed: a.pressed,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        event: e.type
      }), o("click", e);
    }, l = (e) => {
      const n = e;
      console.log("VueIconButton keyboard activate:", {
        label: a.ariaLabel || a.label,
        key: n.detail.originalEvent?.key,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        detail: n.detail
      }), o("activate", n.detail);
    };
    return u(async () => {
      await customElements.whenDefined("ag-icon-button"), t.value && (t.value.addEventListener("icon-button-click", i), t.value.addEventListener("icon-button-activate", l));
    }), b(() => {
      t.value && (t.value.removeEventListener("icon-button-click", i), t.value.removeEventListener("icon-button-activate", l));
    }), (e, n) => (v(), p("ag-icon-button", m({
      ref_key: "iconButtonRef",
      ref: t,
      label: e.ariaLabel || e.label,
      icon: e.icon,
      unicode: e.unicode,
      size: e.size,
      variant: e.variant,
      type: e.type,
      disabled: e.disabled || void 0,
      pressed: e.pressed || void 0,
      loading: e.loading || void 0,
      "aria-describedby": e.ariaDescribedby
    }, e.$attrs), [
      f(e.$slots, "default")
    ], 16, y));
  }
});
export {
  B as _
};
