import { defineComponent as t, ref as r, onMounted as i, onUnmounted as s, createElementBlock as g, openBlock as u, mergeProps as b } from "vue";
import "./components/Toggle/core/_Toggle.js";
const c = ["label", "checked", "size", "variant", "disabled", "readonly", "labelledby", "describedby", "name", "value"], y = /* @__PURE__ */ t({
  __name: "VueToggle",
  props: {
    label: {},
    checked: { type: Boolean, default: !1 },
    size: { default: "md" },
    variant: { default: "default" },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    labelledBy: {},
    describedBy: {},
    name: {},
    value: {}
  },
  emits: ["toggle-change"],
  setup(f, { emit: d }) {
    const o = d, a = r(), l = (e) => {
      const n = e.detail;
      o("toggle-change", n);
    };
    return i(async () => {
      await customElements.whenDefined("ag-toggle"), a.value && a.value.addEventListener("toggle-change", l);
    }), s(() => {
      a.value && a.value.removeEventListener("toggle-change", l);
    }), (e, n) => (u(), g("ag-toggle", b({
      ref_key: "toggleRef",
      ref: a,
      label: e.label,
      checked: e.checked || void 0,
      size: e.size,
      variant: e.variant,
      disabled: e.disabled || void 0,
      readonly: e.readonly || void 0,
      labelledby: e.labelledBy,
      describedby: e.describedBy,
      name: e.name,
      value: e.value
    }, e.$attrs), null, 16, c));
  }
});
export {
  y as _
};
