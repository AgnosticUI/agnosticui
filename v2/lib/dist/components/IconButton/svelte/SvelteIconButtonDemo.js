import { I as ae, J as me, K as W, M as q, N as ne, U as we, O as le, Q as Y, R as ie, j as y, n as Ce, T as oe, V as ke, W as Le, G as $, s as te, X as Ee, Y as O, Z as se, _ as Se, $ as ye, a0 as Ie, a1 as Ae, a2 as Me, a3 as Te, d as xe, i as De, f as G, a4 as n, a5 as H, e as S, b as Z, p as Ne, c as ze, a6 as E, a7 as p, l as F } from "../../../lifecycle-Boz7sIVZ.js";
import "../core/_IconButton.js";
let Be = !1;
function Re(i, a) {
  var e = a == null ? "" : typeof a == "object" ? a + "" : a;
  e !== (i.__t ??= i.nodeValue) && (i.__t = e, i.nodeValue = e + "");
}
function Ve(i, a, e = !1) {
  var u = i, o = null, s = null, f = we, C = e ? me : 0, k = !1;
  const h = (d, t = !0) => {
    k = !0, l(t, d);
  };
  var g = null;
  function b() {
    g !== null && (g.lastChild.remove(), u.before(g), g = null);
    var d = f ? o : s, t = f ? s : o;
    d && Y(d), t && ie(t, () => {
      f ? s = null : o = null;
    });
  }
  const l = (d, t) => {
    if (f !== (f = d)) {
      var v = le(), c = u;
      if (v && (g = document.createDocumentFragment(), g.append(c = W())), f ? o ??= t && q(() => t(c)) : s ??= t && q(() => t(c)), v) {
        var w = (
          /** @type {Batch} */
          ne
        ), _ = f ? o : s, r = f ? s : o;
        _ && w.skipped_effects.delete(_), r && w.skipped_effects.add(r), w.add_callback(b);
      } else
        b();
    }
  };
  ae(() => {
    k = !1, a(h), k || l(null, null);
  }, C);
}
function He(i, a) {
  return a;
}
function Fe(i, a, e) {
  for (var u = i.items, o = [], s = a.length, f = 0; f < s; f++)
    Ae(a[f].e, o, !0);
  var C = s > 0 && o.length === 0 && e !== null;
  if (C) {
    var k = (
      /** @type {Element} */
      /** @type {Element} */
      e.parentNode
    );
    Me(k), k.append(
      /** @type {Element} */
      e
    ), u.clear(), M(i, a[0].prev, a[s - 1].next);
  }
  Te(o, () => {
    for (var h = 0; h < s; h++) {
      var g = a[h];
      C || (u.delete(g.k), M(i, g.prev, g.next)), se(g.e, !C);
    }
  });
}
function Pe(i, a, e, u, o, s = null) {
  var f = i, C = { flags: a, items: /* @__PURE__ */ new Map(), first: null };
  {
    var k = (
      /** @type {Element} */
      i
    );
    f = k.appendChild(W());
  }
  var h = null, g = !1, b = /* @__PURE__ */ new Map(), l = Ce(() => {
    var c = e();
    return ke(c) ? c : c == null ? [] : oe(c);
  }), d, t;
  function v() {
    Xe(
      t,
      d,
      C,
      b,
      f,
      o,
      a,
      u,
      e
    ), s !== null && (d.length === 0 ? h ? Y(h) : h = q(() => s(f)) : h !== null && ie(h, () => {
      h = null;
    }));
  }
  ae(() => {
    t ??= /** @type {Effect} */
    xe, d = /** @type {V[]} */
    y(l);
    var c = d.length;
    if (!(g && c === 0)) {
      g = c === 0;
      var w, _, r, m;
      if (le()) {
        var I = /* @__PURE__ */ new Set(), T = (
          /** @type {Batch} */
          ne
        );
        for (_ = 0; _ < c; _ += 1) {
          r = d[_], m = u(r, _);
          var B = C.items.get(m) ?? b.get(m);
          B ? re(B, r, _) : (w = ce(
            null,
            C,
            null,
            null,
            r,
            m,
            _,
            o,
            a,
            e,
            !0
          ), b.set(m, w)), I.add(m);
        }
        for (const [N, L] of C.items)
          I.has(N) || T.skipped_effects.add(L.e);
        T.add_callback(v);
      } else
        v();
      y(l);
    }
  });
}
function Xe(i, a, e, u, o, s, f, C, k) {
  var h = a.length, g = e.items, b = e.first, l = b, d, t = null, v = [], c = [], w, _, r, m;
  for (m = 0; m < h; m += 1) {
    if (w = a[m], _ = C(w, m), r = g.get(_), r === void 0) {
      var I = u.get(_);
      if (I !== void 0) {
        u.delete(_), g.set(_, I);
        var T = t ? t.next : l;
        M(e, t, I), M(e, I, T), Q(I, T, o), t = I;
      } else {
        var B = l ? (
          /** @type {TemplateNode} */
          l.e.nodes_start
        ) : o;
        t = ce(
          B,
          e,
          t,
          t === null ? e.first : t.next,
          w,
          _,
          m,
          s,
          f,
          k
        );
      }
      g.set(_, t), v = [], c = [], l = t.next;
      continue;
    }
    if (re(r, w, m), (r.e.f & O) !== 0 && Y(r.e), r !== l) {
      if (d !== void 0 && d.has(r)) {
        if (v.length < c.length) {
          var N = c[0], L;
          t = N.prev;
          var z = v[0], x = v[v.length - 1];
          for (L = 0; L < v.length; L += 1)
            Q(v[L], N, o);
          for (L = 0; L < c.length; L += 1)
            d.delete(c[L]);
          M(e, z.prev, x.next), M(e, t, z), M(e, x, N), l = N, t = x, m -= 1, v = [], c = [];
        } else
          d.delete(r), Q(r, l, o), M(e, r.prev, r.next), M(e, r, t === null ? e.first : t.next), M(e, t, r), t = r;
        continue;
      }
      for (v = [], c = []; l !== null && l.k !== _; )
        (l.e.f & O) === 0 && (d ??= /* @__PURE__ */ new Set()).add(l), c.push(l), l = l.next;
      if (l === null)
        continue;
      r = l;
    }
    v.push(r), t = r, l = r.next;
  }
  if (l !== null || d !== void 0) {
    for (var D = d === void 0 ? [] : oe(d); l !== null; )
      (l.e.f & O) === 0 && D.push(l), l = l.next;
    var R = D.length;
    if (R > 0) {
      var P = h === 0 ? o : null;
      Fe(e, D, P);
    }
  }
  i.first = e.first && e.first.e, i.last = t && t.e;
  for (var J of u.values())
    se(J.e);
  u.clear();
}
function re(i, a, e, u) {
  Le(i.v, a), i.i = e;
}
function ce(i, a, e, u, o, s, f, C, k, h, g) {
  var b = (k & Se) !== 0, l = (k & ye) === 0, d = b ? l ? $(o, !1, !1) : te(o) : o, t = (k & Ee) === 0 ? f : te(f), v = {
    i: t,
    v: d,
    k: s,
    a: null,
    // @ts-expect-error
    e: null,
    prev: e,
    next: u
  };
  try {
    if (i === null) {
      var c = document.createDocumentFragment();
      c.append(i = W());
    }
    return v.e = q(() => C(
      /** @type {Node} */
      i,
      d,
      t,
      h
    ), Be), v.e.prev = e && e.e, v.e.next = u && u.e, e === null ? g || (a.first = v) : (e.next = v, e.e.next = v.e), u !== null && (u.prev = v, u.e.prev = v.e), v;
  } finally {
  }
}
function Q(i, a, e) {
  for (var u = i.next ? (
    /** @type {TemplateNode} */
    i.next.e.nodes_start
  ) : e, o = a ? (
    /** @type {TemplateNode} */
    a.e.nodes_start
  ) : e, s = (
    /** @type {TemplateNode} */
    i.e.nodes_start
  ); s !== null && s !== u; ) {
    var f = (
      /** @type {TemplateNode} */
      Ie(s)
    );
    o.before(s), s = f;
  }
}
function M(i, a, e) {
  a === null ? i.first = e : (a.next = e, a.e.next = e && e.e), e !== null && (e.prev = a, e.e.prev = a && a.e);
}
var Ue = G('<p class="empty-state svelte-1pf13wd">No actions yet. Click some buttons above!</p>'), Ze = G('<li class="svelte-1pf13wd"> </li>'), $e = G('<ul class="svelte-1pf13wd"></ul>'), qe = G('<div class="demo-container svelte-1pf13wd"><h2>IconButton Svelte Integration Demo</h2> <div class="demo-section svelte-1pf13wd"><h3 class="svelte-1pf13wd">Basic Icon Buttons</h3> <div class="button-group svelte-1pf13wd"><ag-icon-button></ag-icon-button> <ag-icon-button></ag-icon-button> <ag-icon-button></ag-icon-button> <ag-icon-button></ag-icon-button></div></div> <div class="demo-section svelte-1pf13wd"><h3 class="svelte-1pf13wd">Custom Icon with SVG</h3> <div class="button-group svelte-1pf13wd"><ag-icon-button><svg viewBox="0 0 24 24" style="width: 1em; height: 1em; fill: currentColor;"><path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11.03L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11.03C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"></path></svg></ag-icon-button></div></div> <div class="demo-section svelte-1pf13wd"><h3 class="svelte-1pf13wd">Different Sizes</h3> <div class="button-group svelte-1pf13wd"><ag-icon-button></ag-icon-button> <ag-icon-button></ag-icon-button> <ag-icon-button></ag-icon-button> <ag-icon-button></ag-icon-button> <ag-icon-button></ag-icon-button></div></div> <div class="demo-section svelte-1pf13wd"><h3 class="svelte-1pf13wd">Loading State</h3> <div class="button-group svelte-1pf13wd"><ag-icon-button><span slot="loading" style="font-size: 0.75em;">Saving...</span></ag-icon-button></div></div> <div class="demo-section svelte-1pf13wd"><h3 class="svelte-1pf13wd">Disabled State</h3> <div class="button-group svelte-1pf13wd"><ag-icon-button></ag-icon-button></div></div> <div class="demo-section svelte-1pf13wd"><h3 class="svelte-1pf13wd">Action Log</h3> <div class="action-log svelte-1pf13wd"><button class="clear-button svelte-1pf13wd">Clear Log</button> <!></div></div></div>', 2);
function Ke(i, a) {
  ze(a, !1);
  let e = !1, u = $(!1), o = $(!1), s = $([]);
  function f() {
    e = !e, b(`Close button ${e ? "pressed" : "released"}`);
  }
  function C() {
    F(u, !y(u)), b(`Menu button ${y(u) ? "opened" : "closed"}`);
  }
  async function k() {
    y(o) || (F(o, !0), b("Save started..."), await new Promise((A) => setTimeout(A, 2e3)), F(o, !1), b("Save completed!"));
  }
  function h() {
    b("Edit button clicked");
  }
  function g() {
    confirm("Are you sure you want to delete this item?") && b("Item deleted");
  }
  function b(A) {
    F(s, [
      `${(/* @__PURE__ */ new Date()).toLocaleTimeString()}: ${A}`,
      ...y(
        s
        // Keep last 10 actions
      ).slice(0, 9)
    ]);
  }
  function l() {
    F(s, []);
  }
  De();
  var d = qe(), t = p(E(d), 2), v = p(E(t), 2), c = E(v);
  n(c, "label", "Close"), n(c, "unicode", "×"), n(c, "variant", "ghost");
  var w = p(c, 2);
  n(w, "label", "Menu"), n(w, "unicode", "☰"), H(() => n(w, "pressed", y(u)));
  var _ = p(w, 2);
  n(_, "label", "Edit"), n(_, "unicode", "✎"), n(_, "variant", "primary");
  var r = p(_, 2);
  n(r, "label", "Delete"), n(r, "unicode", "🗑"), n(r, "variant", "danger");
  var m = p(t, 2), I = p(E(m), 2), T = E(I);
  n(T, "label", "Settings"), n(T, "variant", "secondary");
  var B = p(m, 2), N = p(E(B), 2), L = E(N);
  n(L, "label", "Extra small"), n(L, "unicode", "×"), n(L, "size", "xs");
  var z = p(L, 2);
  n(z, "label", "Small"), n(z, "unicode", "×"), n(z, "size", "sm");
  var x = p(z, 2);
  n(x, "label", "Medium"), n(x, "unicode", "×"), n(x, "size", "md");
  var D = p(x, 2);
  n(D, "label", "Large"), n(D, "unicode", "×"), n(D, "size", "lg");
  var R = p(D, 2);
  n(R, "label", "Extra large"), n(R, "unicode", "×"), n(R, "size", "xl");
  var P = p(B, 2), J = p(E(P), 2), V = E(J);
  n(V, "label", "Save"), n(V, "unicode", "💾"), H(() => n(V, "loading", y(o))), H(() => n(V, "disabled", y(o))), n(V, "variant", "primary");
  var j = p(P, 2), ue = p(E(j), 2), X = E(ue);
  n(X, "label", "Disabled button"), n(X, "unicode", "🚫"), n(X, "disabled", !0);
  var ve = p(j, 2), de = p(E(ve), 2), K = E(de), fe = p(K, 2);
  {
    var _e = (A) => {
      var U = Ue();
      Z(A, U);
    }, be = (A) => {
      var U = $e();
      Pe(U, 5, () => y(s), He, (ge, pe) => {
        var ee = Ze(), he = E(ee);
        H(() => Re(he, y(pe))), Z(ge, ee);
      }), Z(A, U);
    };
    Ve(fe, (A) => {
      y(s).length === 0 ? A(_e) : A(be, !1);
    });
  }
  H(() => K.disabled = y(s).length === 0), S("icon-button-click", c, f), S("icon-button-click", w, C), S("icon-button-click", _, h), S("icon-button-click", r, g), S("icon-button-click", T, () => b("Settings opened")), S("icon-button-click", L, () => b("XS button clicked")), S("icon-button-click", z, () => b("Small button clicked")), S("icon-button-click", x, () => b("Medium button clicked")), S("icon-button-click", D, () => b("Large button clicked")), S("icon-button-click", R, () => b("XL button clicked")), S("icon-button-click", V, k), S("icon-button-click", X, () => b("This should not fire")), S("click", K, l), Z(i, d), Ne();
}
export {
  Ke as default
};
