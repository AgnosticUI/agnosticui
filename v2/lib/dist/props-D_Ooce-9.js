import { d as S, s as m, g as w, h as T, P as E, j as o, k as B, l as Y, D as g, m as M, n as N, u as R, o as b, q as U, r as q, t as K, v as $, w as j, x as z, y as C, S as G, L as Z } from "./lifecycle-Boz7sIVZ.js";
let v = !1;
function y(e) {
  var r = v;
  try {
    return v = !1, [e(), v];
  } finally {
    v = r;
  }
}
const F = {
  get(e, r) {
    if (!e.exclude.includes(r))
      return o(e.version), r in e.special ? e.special[r]() : e.props[r];
  },
  set(e, r, i) {
    if (!(r in e.special)) {
      var s = S;
      try {
        b(e.parent_effect), e.special[r] = H(
          {
            get [r]() {
              return e.props[r];
            }
          },
          /** @type {string} */
          r,
          E
        );
      } finally {
        b(s);
      }
    }
    return e.special[r](i), R(e.version), !0;
  },
  getOwnPropertyDescriptor(e, r) {
    if (!e.exclude.includes(r) && r in e.props)
      return {
        enumerable: !0,
        configurable: !0,
        value: e.props[r]
      };
  },
  deleteProperty(e, r) {
    return e.exclude.includes(r) || (e.exclude.push(r), R(e.version)), !0;
  },
  has(e, r) {
    return e.exclude.includes(r) ? !1 : r in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((r) => !e.exclude.includes(r));
  }
};
function Q(e, r) {
  return new Proxy(
    {
      props: e,
      exclude: r,
      special: {},
      version: m(0),
      // TODO this is only necessary because we need to track component
      // destruction inside `prop`, because of `bind:this`, but it
      // seems likely that we can simplify `bind:this` instead
      parent_effect: (
        /** @type {Effect} */
        S
      )
    },
    F
  );
}
function H(e, r, i, s) {
  var t = !K || (i & $) !== 0, _ = (i & U) !== 0, A = (i & z) !== 0, u = (
    /** @type {V} */
    s
  ), p = !0, x = () => (p && (p = !1, u = A ? q(
    /** @type {() => V} */
    s
  ) : (
    /** @type {V} */
    s
  )), u), f;
  if (_) {
    var D = G in e || Z in e;
    f = w(e, r)?.set ?? (D && r in e ? (n) => e[r] = n : void 0);
  }
  var l, I = !1;
  _ ? [l, I] = y(() => (
    /** @type {V} */
    e[r]
  )) : l = /** @type {V} */
  e[r], l === void 0 && s !== void 0 && (l = x(), f && (t && T(), f(l)));
  var a;
  if (t ? a = () => {
    var n = (
      /** @type {V} */
      e[r]
    );
    return n === void 0 ? x() : (p = !0, n);
  } : a = () => {
    var n = (
      /** @type {V} */
      e[r]
    );
    return n !== void 0 && (u = /** @type {V} */
    void 0), n === void 0 ? u : n;
  }, t && (i & E) === 0)
    return a;
  if (f) {
    var L = e.$$legacy;
    return (
      /** @type {() => V} */
      (function(n, c) {
        return arguments.length > 0 ? ((!t || !c || L || I) && f(c ? a() : n), n) : a();
      })
    );
  }
  var P = !1, d = ((i & j) !== 0 ? M : N)(() => (P = !1, a()));
  _ && o(d);
  var h = (
    /** @type {Effect} */
    S
  );
  return (
    /** @type {() => V} */
    (function(n, c) {
      if (arguments.length > 0) {
        const O = c ? o(d) : t && _ ? B(n) : n;
        return Y(d, O), P = !0, u !== void 0 && (u = O), n;
      }
      return C && P || (h.f & g) !== 0 ? d.v : o(d);
    })
  );
}
export {
  Q as l,
  H as p
};
