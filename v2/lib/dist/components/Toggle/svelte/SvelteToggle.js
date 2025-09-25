import { i as k, f as N, a as T, e as x, b as C, p as D, c as E } from "../../../lifecycle-Boz7sIVZ.js";
import { l as t, p as a } from "../../../props-D_Ooce-9.js";
import { createEventDispatcher as P } from "svelte";
import "../core/_Toggle.js";
var S = N("<ag-toggle></ag-toggle>", 2);
function F(d, e) {
  const s = t(e, ["children", "$$slots", "$$events", "$$legacy"]), i = t(s, [
    "label",
    "checked",
    "size",
    "variant",
    "disabled",
    "readonly",
    "labelledBy",
    "describedBy",
    "name",
    "value",
    "className"
  ]);
  E(e, !1);
  let c = a(e, "label", 8, ""), n = a(e, "checked", 8, !1), g = a(e, "size", 8, "md"), o = a(e, "variant", 8, "default"), r = a(e, "disabled", 8, !1), b = a(e, "readonly", 8, !1), m = a(e, "labelledBy", 8, ""), f = a(e, "describedBy", 8, ""), v = a(e, "name", 8, ""), y = a(e, "value", 8, ""), h = a(e, "className", 8, "");
  const u = P();
  function B(_) {
    const z = _.detail;
    u("toggle-change", z);
  }
  k();
  var l = S();
  T(l, () => ({
    label: c(),
    checked: n(),
    size: g(),
    variant: o(),
    disabled: r(),
    readonly: b(),
    labelledby: m(),
    describedby: f(),
    name: v(),
    value: y(),
    class: h(),
    ...i
  })), x("toggle-change", l, B), C(d, l), D();
}
export {
  F as default
};
