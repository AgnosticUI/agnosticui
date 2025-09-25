import { z as g, A as v, r as k, B as L, S as B, j as s, C as m, E, F as S, i as N, f as z, a as A, b as C, p as D, c as M, G as T, H as j, l as q } from "../../../lifecycle-Boz7sIVZ.js";
import { l as n, p as l } from "../../../props-D_Ooce-9.js";
import { createEventDispatcher as x, onMount as F, onDestroy as G } from "svelte";
import "../core/_Breadcrumb.js";
function p(t, a) {
  return t === a || t?.[B] === a;
}
function H(t = {}, a, c, u) {
  return g(() => {
    var i, r;
    return v(() => {
      i = r, r = [], k(() => {
        t !== c(...r) && (a(t, ...r), i && p(c(...i), t) && a(null, ...i));
      });
    }), () => {
      L(() => {
        r && p(c(...r), t) && a(null, ...r);
      });
    };
  }), t;
}
var O = z("<ag-breadcrumb></ag-breadcrumb>", 2);
function I(t, a) {
  const c = n(a, ["children", "$$slots", "$$events", "$$legacy"]), u = n(c, ["items", "type", "ariaLabel", "className"]);
  M(a, !1);
  let i = l(a, "items", 24, () => []), r = l(a, "type", 8, "default"), o = l(a, "ariaLabel", 8, "Breadcrumb"), _ = l(a, "className", 8, "");
  const y = x();
  let e = T();
  function d(b) {
    const h = b.detail;
    y("breadcrumb-click", h);
  }
  F(() => {
    s(e) && (m(e, s(e).items = i()), s(e).addEventListener("breadcrumb-click", d));
  }), G(() => {
    s(e) && s(e).removeEventListener("breadcrumb-click", d);
  }), E(() => (s(e), j(i())), () => {
    s(e) && m(e, s(e).items = i());
  }), S(), N();
  var f = O();
  A(f, () => ({
    type: r(),
    "aria-label": o(),
    class: _(),
    ...u
  })), H(f, (b) => q(e, b), () => s(e)), C(t, f), D();
}
export {
  I as default
};
