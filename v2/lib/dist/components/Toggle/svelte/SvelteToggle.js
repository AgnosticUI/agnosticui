import { a as B, s as T, g as A, p as L, P as D, b as P, c as w, d as z, D as N, e as Y, u as E, f as O, h as M, i as U, l as q, j as C, k as K, m as j, n as G, o as Z, S as F, L as H, q as J, r as Q, t as V, v as W, w as X, x as k, y as $ } from "../../../lifecycle-DsPBORQy.js";
import { createEventDispatcher as ee } from "svelte";
import "../core/_Toggle.js";
let m = !1;
function ae(a) {
  var e = m;
  try {
    return m = !1, [a(), m];
  } finally {
    m = e;
  }
}
const ne = {
  get(a, e) {
    if (!a.exclude.includes(e))
      return P(a.version), e in a.special ? a.special[e]() : a.props[e];
  },
  set(a, e, i) {
    if (!(e in a.special)) {
      var t = B;
      try {
        O(a.parent_effect), a.special[e] = r(
          {
            get [e]() {
              return a.props[e];
            }
          },
          /** @type {string} */
          e,
          D
        );
      } finally {
        O(t);
      }
    }
    return a.special[e](i), E(a.version), !0;
  },
  getOwnPropertyDescriptor(a, e) {
    if (!a.exclude.includes(e) && e in a.props)
      return {
        enumerable: !0,
        configurable: !0,
        value: a.props[e]
      };
  },
  deleteProperty(a, e) {
    return a.exclude.includes(e) || (a.exclude.push(e), E(a.version)), !0;
  },
  has(a, e) {
    return a.exclude.includes(e) ? !1 : e in a.props;
  },
  ownKeys(a) {
    return Reflect.ownKeys(a.props).filter((e) => !a.exclude.includes(e));
  }
};
function R(a, e) {
  return new Proxy(
    {
      props: a,
      exclude: e,
      special: {},
      version: T(0),
      // TODO this is only necessary because we need to track component
      // destruction inside `prop`, because of `bind:this`, but it
      // seems likely that we can simplify `bind:this` instead
      parent_effect: (
        /** @type {Effect} */
        B
      )
    },
    ne
  );
}
function r(a, e, i, t) {
  var u = !q || (i & C) !== 0, _ = (i & K) !== 0, S = (i & G) !== 0, s = (
    /** @type {V} */
    t
  ), v = !0, b = () => (v && (v = !1, s = S ? U(
    /** @type {() => V} */
    t
  ) : (
    /** @type {V} */
    t
  )), s), c;
  if (_) {
    var y = F in a || H in a;
    c = A(a, e)?.set ?? (y && e in a ? (n) => a[e] = n : void 0);
  }
  var f, g = !1;
  _ ? [f, g] = ae(() => (
    /** @type {V} */
    a[e]
  )) : f = /** @type {V} */
  a[e], f === void 0 && t !== void 0 && (f = b(), c && (u && L(), c(f)));
  var d;
  if (u ? d = () => {
    var n = (
      /** @type {V} */
      a[e]
    );
    return n === void 0 ? b() : (v = !0, n);
  } : d = () => {
    var n = (
      /** @type {V} */
      a[e]
    );
    return n !== void 0 && (s = /** @type {V} */
    void 0), n === void 0 ? s : n;
  }, u && (i & D) === 0)
    return d;
  if (c) {
    var p = a.$$legacy;
    return (
      /** @type {() => V} */
      (function(n, h) {
        return arguments.length > 0 ? ((!u || !h || p || g) && c(h ? d() : n), n) : d();
      })
    );
  }
  var o = !1, l = ((i & j) !== 0 ? M : Y)(() => (o = !1, d()));
  _ && P(l);
  var x = (
    /** @type {Effect} */
    B
  );
  return (
    /** @type {() => V} */
    (function(n, h) {
      if (arguments.length > 0) {
        const I = h ? P(l) : u && _ ? w(n) : n;
        return z(l, I), o = !0, s !== void 0 && (s = I), n;
      }
      return Z && o || (x.f & N) !== 0 ? l.v : P(l);
    })
  );
}
var re = Q("<ag-toggle></ag-toggle>", 2);
function se(a, e) {
  const i = R(e, ["children", "$$slots", "$$events", "$$legacy"]), t = R(i, [
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
  $(e, !1);
  let u = r(e, "label", 8, ""), _ = r(e, "checked", 8, !1), S = r(e, "size", 8, "md"), s = r(e, "variant", 8, "default"), v = r(e, "disabled", 8, !1), b = r(e, "readonly", 8, !1), c = r(e, "labelledBy", 8, ""), y = r(e, "describedBy", 8, ""), f = r(e, "name", 8, ""), g = r(e, "value", 8, ""), d = r(e, "className", 8, "");
  const p = ee();
  function o(x) {
    const n = x.detail;
    p("toggle-change", n);
  }
  J();
  var l = re();
  V(l, () => ({
    label: u(),
    checked: _(),
    size: S(),
    variant: s(),
    disabled: v(),
    readonly: b(),
    labelledby: c(),
    describedby: y(),
    name: f(),
    value: g(),
    class: d(),
    ...t
  })), W("toggle-change", l, o), X(a, l), k();
}
export {
  se as default
};
