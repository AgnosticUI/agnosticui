import { defineComponent as i, ref as d, onMounted as r, onUnmounted as c, createElementBlock as p, openBlock as g, mergeProps as u, renderSlot as f } from "vue";
import "./components/Dialog/core/_dialog.js";
const v = ["open", "heading", "description", "close-on-escape", "close-on-backdrop", "show-close-button"], k = /* @__PURE__ */ i({
  __name: "VueDialog",
  props: {
    open: { type: Boolean, default: !1 },
    heading: {},
    description: {},
    closeOnEscape: { type: Boolean, default: !0 },
    closeOnBackdrop: { type: Boolean, default: !0 },
    showCloseButton: { type: Boolean, default: !1 }
  },
  emits: ["dialog-open", "dialog-close", "dialog-cancel"],
  setup(m, { emit: s }) {
    const n = s, o = d(), a = (e) => {
      e.stopPropagation(), n("dialog-open");
    }, l = (e) => {
      e.stopPropagation(), n("dialog-close");
    }, t = (e) => {
      e.stopPropagation(), n("dialog-cancel");
    };
    return r(async () => {
      await customElements.whenDefined("ag-dialog"), o.value && (o.value.addEventListener("dialog-open", a), o.value.addEventListener("dialog-close", l), o.value.addEventListener("dialog-cancel", t));
    }), c(() => {
      o.value && (o.value.removeEventListener("dialog-open", a), o.value.removeEventListener("dialog-close", l), o.value.removeEventListener("dialog-cancel", t));
    }), (e, h) => (g(), p("ag-dialog", u({
      ref_key: "dialogRef",
      ref: o,
      open: e.open || void 0,
      heading: e.heading,
      description: e.description,
      "close-on-escape": e.closeOnEscape,
      "close-on-backdrop": e.closeOnBackdrop,
      "show-close-button": e.showCloseButton
    }, e.$attrs), [
      f(e.$slots, "default")
    ], 16, v));
  }
});
export {
  k as _
};
