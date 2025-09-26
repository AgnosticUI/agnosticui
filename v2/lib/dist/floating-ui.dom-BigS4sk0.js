/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Nt = (t, e, n) => (n.configurable = !0, n.enumerable = !0, Reflect.decorate && typeof e != "object" && Object.defineProperty(t, e, n), n);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Se(t, e) {
  return (n, o, i) => {
    const r = (s) => s.renderRoot?.querySelector(t) ?? null;
    return Nt(n, o, { get() {
      return r(this);
    } });
  };
}
const X = Math.min, _ = Math.max, nt = Math.round, et = Math.floor, T = (t) => ({
  x: t,
  y: t
}), Vt = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, $t = {
  start: "end",
  end: "start"
};
function at(t, e, n) {
  return _(t, X(e, n));
}
function Q(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function z(t) {
  return t.split("-")[0];
}
function Z(t) {
  return t.split("-")[1];
}
function Ct(t) {
  return t === "x" ? "y" : "x";
}
function mt(t) {
  return t === "y" ? "height" : "width";
}
const Ht = /* @__PURE__ */ new Set(["top", "bottom"]);
function B(t) {
  return Ht.has(z(t)) ? "y" : "x";
}
function gt(t) {
  return Ct(B(t));
}
function _t(t, e, n) {
  n === void 0 && (n = !1);
  const o = Z(t), i = gt(t), r = mt(i);
  let s = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (s = ot(s)), [s, ot(s)];
}
function zt(t) {
  const e = ot(t);
  return [ut(t), e, ut(e)];
}
function ut(t) {
  return t.replace(/start|end/g, (e) => $t[e]);
}
const xt = ["left", "right"], yt = ["right", "left"], It = ["top", "bottom"], jt = ["bottom", "top"];
function Xt(t, e, n) {
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? yt : xt : e ? xt : yt;
    case "left":
    case "right":
      return e ? It : jt;
    default:
      return [];
  }
}
function Yt(t, e, n, o) {
  const i = Z(t);
  let r = Xt(z(t), n === "start", o);
  return i && (r = r.map((s) => s + "-" + i), e && (r = r.concat(r.map(ut)))), r;
}
function ot(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Vt[e]);
}
function qt(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function St(t) {
  return typeof t != "number" ? qt(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function it(t) {
  const {
    x: e,
    y: n,
    width: o,
    height: i
  } = t;
  return {
    width: o,
    height: i,
    top: n,
    left: e,
    right: e + o,
    bottom: n + i,
    x: e,
    y: n
  };
}
function bt(t, e, n) {
  let {
    reference: o,
    floating: i
  } = t;
  const r = B(e), s = gt(e), c = mt(s), f = z(e), l = r === "y", d = o.x + o.width / 2 - i.width / 2, u = o.y + o.height / 2 - i.height / 2, g = o[c] / 2 - i[c] / 2;
  let a;
  switch (f) {
    case "top":
      a = {
        x: d,
        y: o.y - i.height
      };
      break;
    case "bottom":
      a = {
        x: d,
        y: o.y + o.height
      };
      break;
    case "right":
      a = {
        x: o.x + o.width,
        y: u
      };
      break;
    case "left":
      a = {
        x: o.x - i.width,
        y: u
      };
      break;
    default:
      a = {
        x: o.x,
        y: o.y
      };
  }
  switch (Z(e)) {
    case "start":
      a[s] -= g * (n && l ? -1 : 1);
      break;
    case "end":
      a[s] += g * (n && l ? -1 : 1);
      break;
  }
  return a;
}
const Ut = async (t, e, n) => {
  const {
    placement: o = "bottom",
    strategy: i = "absolute",
    middleware: r = [],
    platform: s
  } = n, c = r.filter(Boolean), f = await (s.isRTL == null ? void 0 : s.isRTL(e));
  let l = await s.getElementRects({
    reference: t,
    floating: e,
    strategy: i
  }), {
    x: d,
    y: u
  } = bt(l, o, f), g = o, a = {}, m = 0;
  for (let h = 0; h < c.length; h++) {
    const {
      name: w,
      fn: p
    } = c[h], {
      x,
      y,
      data: v,
      reset: b
    } = await p({
      x: d,
      y: u,
      initialPlacement: o,
      placement: g,
      strategy: i,
      middlewareData: a,
      rects: l,
      platform: s,
      elements: {
        reference: t,
        floating: e
      }
    });
    d = x ?? d, u = y ?? u, a = {
      ...a,
      [w]: {
        ...a[w],
        ...v
      }
    }, b && m <= 50 && (m++, typeof b == "object" && (b.placement && (g = b.placement), b.rects && (l = b.rects === !0 ? await s.getElementRects({
      reference: t,
      floating: e,
      strategy: i
    }) : b.rects), {
      x: d,
      y: u
    } = bt(l, g, f)), h = -1);
  }
  return {
    x: d,
    y: u,
    placement: g,
    strategy: i,
    middlewareData: a
  };
};
async function Lt(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: o,
    y: i,
    platform: r,
    rects: s,
    elements: c,
    strategy: f
  } = t, {
    boundary: l = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: u = "floating",
    altBoundary: g = !1,
    padding: a = 0
  } = Q(e, t), m = St(a), w = c[g ? u === "floating" ? "reference" : "floating" : u], p = it(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(w))) == null || n ? w : w.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(c.floating)),
    boundary: l,
    rootBoundary: d,
    strategy: f
  })), x = u === "floating" ? {
    x: o,
    y: i,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, y = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c.floating)), v = await (r.isElement == null ? void 0 : r.isElement(y)) ? await (r.getScale == null ? void 0 : r.getScale(y)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, b = it(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c,
    rect: x,
    offsetParent: y,
    strategy: f
  }) : x);
  return {
    top: (p.top - b.top + m.top) / v.y,
    bottom: (b.bottom - p.bottom + m.bottom) / v.y,
    left: (p.left - b.left + m.left) / v.x,
    right: (b.right - p.right + m.right) / v.x
  };
}
const Kt = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      x: n,
      y: o,
      placement: i,
      rects: r,
      platform: s,
      elements: c,
      middlewareData: f
    } = e, {
      element: l,
      padding: d = 0
    } = Q(t, e) || {};
    if (l == null)
      return {};
    const u = St(d), g = {
      x: n,
      y: o
    }, a = gt(i), m = mt(a), h = await s.getDimensions(l), w = a === "y", p = w ? "top" : "left", x = w ? "bottom" : "right", y = w ? "clientHeight" : "clientWidth", v = r.reference[m] + r.reference[a] - g[a] - r.floating[m], b = g[a] - r.reference[a], F = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l));
    let O = F ? F[y] : 0;
    (!O || !await (s.isElement == null ? void 0 : s.isElement(F))) && (O = c.floating[y] || r.floating[m]);
    const U = v / 2 - b / 2, V = O / 2 - h[m] / 2 - 1, k = X(u[p], V), K = X(u[x], V), $ = k, G = O - h[m] - K, A = O / 2 - h[m] / 2 + U, H = at($, A, G), M = !f.arrow && Z(i) != null && A !== H && r.reference[m] / 2 - (A < $ ? k : K) - h[m] / 2 < 0, C = M ? A < $ ? A - $ : A - G : 0;
    return {
      [a]: g[a] + C,
      data: {
        [a]: H,
        centerOffset: A - H - C,
        ...M && {
          alignmentOffset: C
        }
      },
      reset: M
    };
  }
}), Gt = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var n, o;
      const {
        placement: i,
        middlewareData: r,
        rects: s,
        initialPlacement: c,
        platform: f,
        elements: l
      } = e, {
        mainAxis: d = !0,
        crossAxis: u = !0,
        fallbackPlacements: g,
        fallbackStrategy: a = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: h = !0,
        ...w
      } = Q(t, e);
      if ((n = r.arrow) != null && n.alignmentOffset)
        return {};
      const p = z(i), x = B(c), y = z(c) === c, v = await (f.isRTL == null ? void 0 : f.isRTL(l.floating)), b = g || (y || !h ? [ot(c)] : zt(c)), F = m !== "none";
      !g && F && b.push(...Yt(c, h, m, v));
      const O = [c, ...b], U = await Lt(e, w), V = [];
      let k = ((o = r.flip) == null ? void 0 : o.overflows) || [];
      if (d && V.push(U[p]), u) {
        const A = _t(i, s, v);
        V.push(U[A[0]], U[A[1]]);
      }
      if (k = [...k, {
        placement: i,
        overflows: V
      }], !V.every((A) => A <= 0)) {
        var K, $;
        const A = (((K = r.flip) == null ? void 0 : K.index) || 0) + 1, H = O[A];
        if (H && (!(u === "alignment" ? x !== B(H) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        k.every((S) => B(S.placement) === x ? S.overflows[0] > 0 : !0)))
          return {
            data: {
              index: A,
              overflows: k
            },
            reset: {
              placement: H
            }
          };
        let M = ($ = k.filter((C) => C.overflows[0] <= 0).sort((C, S) => C.overflows[1] - S.overflows[1])[0]) == null ? void 0 : $.placement;
        if (!M)
          switch (a) {
            case "bestFit": {
              var G;
              const C = (G = k.filter((S) => {
                if (F) {
                  const W = B(S.placement);
                  return W === x || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  W === "y";
                }
                return !0;
              }).map((S) => [S.placement, S.overflows.filter((W) => W > 0).reduce((W, Bt) => W + Bt, 0)]).sort((S, W) => S[1] - W[1])[0]) == null ? void 0 : G[0];
              C && (M = C);
              break;
            }
            case "initialPlacement":
              M = c;
              break;
          }
        if (i !== M)
          return {
            reset: {
              placement: M
            }
          };
      }
      return {};
    }
  };
}, Jt = /* @__PURE__ */ new Set(["left", "top"]);
async function Qt(t, e) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = t, r = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), s = z(n), c = Z(n), f = B(n) === "y", l = Jt.has(s) ? -1 : 1, d = r && f ? -1 : 1, u = Q(e, t);
  let {
    mainAxis: g,
    crossAxis: a,
    alignmentAxis: m
  } = typeof u == "number" ? {
    mainAxis: u,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: u.mainAxis || 0,
    crossAxis: u.crossAxis || 0,
    alignmentAxis: u.alignmentAxis
  };
  return c && typeof m == "number" && (a = c === "end" ? m * -1 : m), f ? {
    x: a * d,
    y: g * l
  } : {
    x: g * l,
    y: a * d
  };
}
const Zt = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      var n, o;
      const {
        x: i,
        y: r,
        placement: s,
        middlewareData: c
      } = e, f = await Qt(e, t);
      return s === ((n = c.offset) == null ? void 0 : n.placement) && (o = c.arrow) != null && o.alignmentOffset ? {} : {
        x: i + f.x,
        y: r + f.y,
        data: {
          ...f,
          placement: s
        }
      };
    }
  };
}, te = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o,
        placement: i
      } = e, {
        mainAxis: r = !0,
        crossAxis: s = !1,
        limiter: c = {
          fn: (w) => {
            let {
              x: p,
              y: x
            } = w;
            return {
              x: p,
              y: x
            };
          }
        },
        ...f
      } = Q(t, e), l = {
        x: n,
        y: o
      }, d = await Lt(e, f), u = B(z(i)), g = Ct(u);
      let a = l[g], m = l[u];
      if (r) {
        const w = g === "y" ? "top" : "left", p = g === "y" ? "bottom" : "right", x = a + d[w], y = a - d[p];
        a = at(x, a, y);
      }
      if (s) {
        const w = u === "y" ? "top" : "left", p = u === "y" ? "bottom" : "right", x = m + d[w], y = m - d[p];
        m = at(x, m, y);
      }
      const h = c.fn({
        ...e,
        [g]: a,
        [u]: m
      });
      return {
        ...h,
        data: {
          x: h.x - n,
          y: h.y - o,
          enabled: {
            [g]: r,
            [u]: s
          }
        }
      };
    }
  };
};
function st() {
  return typeof window < "u";
}
function q(t) {
  return Et(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function R(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function D(t) {
  var e;
  return (e = (Et(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function Et(t) {
  return st() ? t instanceof Node || t instanceof R(t).Node : !1;
}
function L(t) {
  return st() ? t instanceof Element || t instanceof R(t).Element : !1;
}
function P(t) {
  return st() ? t instanceof HTMLElement || t instanceof R(t).HTMLElement : !1;
}
function vt(t) {
  return !st() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof R(t).ShadowRoot;
}
const ee = /* @__PURE__ */ new Set(["inline", "contents"]);
function tt(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: i
  } = E(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !ee.has(i);
}
const ne = /* @__PURE__ */ new Set(["table", "td", "th"]);
function oe(t) {
  return ne.has(q(t));
}
const ie = [":popover-open", ":modal"];
function rt(t) {
  return ie.some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
const se = ["transform", "translate", "scale", "rotate", "perspective"], re = ["transform", "translate", "scale", "rotate", "perspective", "filter"], ce = ["paint", "layout", "strict", "content"];
function ht(t) {
  const e = pt(), n = L(t) ? E(t) : t;
  return se.some((o) => n[o] ? n[o] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || re.some((o) => (n.willChange || "").includes(o)) || ce.some((o) => (n.contain || "").includes(o));
}
function le(t) {
  let e = N(t);
  for (; P(e) && !Y(e); ) {
    if (ht(e))
      return e;
    if (rt(e))
      return null;
    e = N(e);
  }
  return null;
}
function pt() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const fe = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Y(t) {
  return fe.has(q(t));
}
function E(t) {
  return R(t).getComputedStyle(t);
}
function ct(t) {
  return L(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.scrollX,
    scrollTop: t.scrollY
  };
}
function N(t) {
  if (q(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    vt(t) && t.host || // Fallback.
    D(t)
  );
  return vt(e) ? e.host : e;
}
function Tt(t) {
  const e = N(t);
  return Y(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : P(e) && tt(e) ? e : Tt(e);
}
function J(t, e, n) {
  var o;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const i = Tt(t), r = i === ((o = t.ownerDocument) == null ? void 0 : o.body), s = R(i);
  if (r) {
    const c = dt(s);
    return e.concat(s, s.visualViewport || [], tt(i) ? i : [], c && n ? J(c) : []);
  }
  return e.concat(i, J(i, [], n));
}
function dt(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function Pt(t) {
  const e = E(t);
  let n = parseFloat(e.width) || 0, o = parseFloat(e.height) || 0;
  const i = P(t), r = i ? t.offsetWidth : n, s = i ? t.offsetHeight : o, c = nt(n) !== r || nt(o) !== s;
  return c && (n = r, o = s), {
    width: n,
    height: o,
    $: c
  };
}
function wt(t) {
  return L(t) ? t : t.contextElement;
}
function j(t) {
  const e = wt(t);
  if (!P(e))
    return T(1);
  const n = e.getBoundingClientRect(), {
    width: o,
    height: i,
    $: r
  } = Pt(e);
  let s = (r ? nt(n.width) : n.width) / o, c = (r ? nt(n.height) : n.height) / i;
  return (!s || !Number.isFinite(s)) && (s = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: s,
    y: c
  };
}
const ae = /* @__PURE__ */ T(0);
function Dt(t) {
  const e = R(t);
  return !pt() || !e.visualViewport ? ae : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function ue(t, e, n) {
  return e === void 0 && (e = !1), !n || e && n !== R(t) ? !1 : e;
}
function I(t, e, n, o) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const i = t.getBoundingClientRect(), r = wt(t);
  let s = T(1);
  e && (o ? L(o) && (s = j(o)) : s = j(t));
  const c = ue(r, n, o) ? Dt(r) : T(0);
  let f = (i.left + c.x) / s.x, l = (i.top + c.y) / s.y, d = i.width / s.x, u = i.height / s.y;
  if (r) {
    const g = R(r), a = o && L(o) ? R(o) : o;
    let m = g, h = dt(m);
    for (; h && o && a !== m; ) {
      const w = j(h), p = h.getBoundingClientRect(), x = E(h), y = p.left + (h.clientLeft + parseFloat(x.paddingLeft)) * w.x, v = p.top + (h.clientTop + parseFloat(x.paddingTop)) * w.y;
      f *= w.x, l *= w.y, d *= w.x, u *= w.y, f += y, l += v, m = R(h), h = dt(m);
    }
  }
  return it({
    width: d,
    height: u,
    x: f,
    y: l
  });
}
function lt(t, e) {
  const n = ct(t).scrollLeft;
  return e ? e.left + n : I(D(t)).left + n;
}
function Ft(t, e) {
  const n = t.getBoundingClientRect(), o = n.left + e.scrollLeft - lt(t, n), i = n.top + e.scrollTop;
  return {
    x: o,
    y: i
  };
}
function de(t) {
  let {
    elements: e,
    rect: n,
    offsetParent: o,
    strategy: i
  } = t;
  const r = i === "fixed", s = D(o), c = e ? rt(e.floating) : !1;
  if (o === s || c && r)
    return n;
  let f = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = T(1);
  const d = T(0), u = P(o);
  if ((u || !u && !r) && ((q(o) !== "body" || tt(s)) && (f = ct(o)), P(o))) {
    const a = I(o);
    l = j(o), d.x = a.x + o.clientLeft, d.y = a.y + o.clientTop;
  }
  const g = s && !u && !r ? Ft(s, f) : T(0);
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - f.scrollLeft * l.x + d.x + g.x,
    y: n.y * l.y - f.scrollTop * l.y + d.y + g.y
  };
}
function me(t) {
  return Array.from(t.getClientRects());
}
function ge(t) {
  const e = D(t), n = ct(t), o = t.ownerDocument.body, i = _(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth), r = _(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight);
  let s = -n.scrollLeft + lt(t);
  const c = -n.scrollTop;
  return E(o).direction === "rtl" && (s += _(e.clientWidth, o.clientWidth) - i), {
    width: i,
    height: r,
    x: s,
    y: c
  };
}
const At = 25;
function he(t, e) {
  const n = R(t), o = D(t), i = n.visualViewport;
  let r = o.clientWidth, s = o.clientHeight, c = 0, f = 0;
  if (i) {
    r = i.width, s = i.height;
    const d = pt();
    (!d || d && e === "fixed") && (c = i.offsetLeft, f = i.offsetTop);
  }
  const l = lt(o);
  if (l <= 0) {
    const d = o.ownerDocument, u = d.body, g = getComputedStyle(u), a = d.compatMode === "CSS1Compat" && parseFloat(g.marginLeft) + parseFloat(g.marginRight) || 0, m = Math.abs(o.clientWidth - u.clientWidth - a);
    m <= At && (r -= m);
  } else l <= At && (r += l);
  return {
    width: r,
    height: s,
    x: c,
    y: f
  };
}
const pe = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function we(t, e) {
  const n = I(t, !0, e === "fixed"), o = n.top + t.clientTop, i = n.left + t.clientLeft, r = P(t) ? j(t) : T(1), s = t.clientWidth * r.x, c = t.clientHeight * r.y, f = i * r.x, l = o * r.y;
  return {
    width: s,
    height: c,
    x: f,
    y: l
  };
}
function Rt(t, e, n) {
  let o;
  if (e === "viewport")
    o = he(t, n);
  else if (e === "document")
    o = ge(D(t));
  else if (L(e))
    o = we(e, n);
  else {
    const i = Dt(t);
    o = {
      x: e.x - i.x,
      y: e.y - i.y,
      width: e.width,
      height: e.height
    };
  }
  return it(o);
}
function kt(t, e) {
  const n = N(t);
  return n === e || !L(n) || Y(n) ? !1 : E(n).position === "fixed" || kt(n, e);
}
function xe(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = J(t, [], !1).filter((c) => L(c) && q(c) !== "body"), i = null;
  const r = E(t).position === "fixed";
  let s = r ? N(t) : t;
  for (; L(s) && !Y(s); ) {
    const c = E(s), f = ht(s);
    !f && c.position === "fixed" && (i = null), (r ? !f && !i : !f && c.position === "static" && !!i && pe.has(i.position) || tt(s) && !f && kt(t, s)) ? o = o.filter((d) => d !== s) : i = c, s = N(s);
  }
  return e.set(t, o), o;
}
function ye(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = t;
  const s = [...n === "clippingAncestors" ? rt(e) ? [] : xe(e, this._c) : [].concat(n), o], c = s[0], f = s.reduce((l, d) => {
    const u = Rt(e, d, i);
    return l.top = _(u.top, l.top), l.right = X(u.right, l.right), l.bottom = X(u.bottom, l.bottom), l.left = _(u.left, l.left), l;
  }, Rt(e, c, i));
  return {
    width: f.right - f.left,
    height: f.bottom - f.top,
    x: f.left,
    y: f.top
  };
}
function be(t) {
  const {
    width: e,
    height: n
  } = Pt(t);
  return {
    width: e,
    height: n
  };
}
function ve(t, e, n) {
  const o = P(e), i = D(e), r = n === "fixed", s = I(t, !0, r, e);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const f = T(0);
  function l() {
    f.x = lt(i);
  }
  if (o || !o && !r)
    if ((q(e) !== "body" || tt(i)) && (c = ct(e)), o) {
      const a = I(e, !0, r, e);
      f.x = a.x + e.clientLeft, f.y = a.y + e.clientTop;
    } else i && l();
  r && !o && i && l();
  const d = i && !o && !r ? Ft(i, c) : T(0), u = s.left + c.scrollLeft - f.x - d.x, g = s.top + c.scrollTop - f.y - d.y;
  return {
    x: u,
    y: g,
    width: s.width,
    height: s.height
  };
}
function ft(t) {
  return E(t).position === "static";
}
function Ot(t, e) {
  if (!P(t) || E(t).position === "fixed")
    return null;
  if (e)
    return e(t);
  let n = t.offsetParent;
  return D(t) === n && (n = n.ownerDocument.body), n;
}
function Mt(t, e) {
  const n = R(t);
  if (rt(t))
    return n;
  if (!P(t)) {
    let i = N(t);
    for (; i && !Y(i); ) {
      if (L(i) && !ft(i))
        return i;
      i = N(i);
    }
    return n;
  }
  let o = Ot(t, e);
  for (; o && oe(o) && ft(o); )
    o = Ot(o, e);
  return o && Y(o) && ft(o) && !ht(o) ? n : o || le(t) || n;
}
const Ae = async function(t) {
  const e = this.getOffsetParent || Mt, n = this.getDimensions, o = await n(t.floating);
  return {
    reference: ve(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function Re(t) {
  return E(t).direction === "rtl";
}
const Oe = {
  convertOffsetParentRelativeRectToViewportRelativeRect: de,
  getDocumentElement: D,
  getClippingRect: ye,
  getOffsetParent: Mt,
  getElementRects: Ae,
  getClientRects: me,
  getDimensions: be,
  getScale: j,
  isElement: L,
  isRTL: Re
};
function Wt(t, e) {
  return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height;
}
function Ce(t, e) {
  let n = null, o;
  const i = D(t);
  function r() {
    var c;
    clearTimeout(o), (c = n) == null || c.disconnect(), n = null;
  }
  function s(c, f) {
    c === void 0 && (c = !1), f === void 0 && (f = 1), r();
    const l = t.getBoundingClientRect(), {
      left: d,
      top: u,
      width: g,
      height: a
    } = l;
    if (c || e(), !g || !a)
      return;
    const m = et(u), h = et(i.clientWidth - (d + g)), w = et(i.clientHeight - (u + a)), p = et(d), y = {
      rootMargin: -m + "px " + -h + "px " + -w + "px " + -p + "px",
      threshold: _(0, X(1, f)) || 1
    };
    let v = !0;
    function b(F) {
      const O = F[0].intersectionRatio;
      if (O !== f) {
        if (!v)
          return s();
        O ? s(!1, O) : o = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      O === 1 && !Wt(l, t.getBoundingClientRect()) && s(), v = !1;
    }
    try {
      n = new IntersectionObserver(b, {
        ...y,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(b, y);
    }
    n.observe(t);
  }
  return s(!0), r;
}
function Le(t, e, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: r = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: f = !1
  } = o, l = wt(t), d = i || r ? [...l ? J(l) : [], ...J(e)] : [];
  d.forEach((p) => {
    i && p.addEventListener("scroll", n, {
      passive: !0
    }), r && p.addEventListener("resize", n);
  });
  const u = l && c ? Ce(l, n) : null;
  let g = -1, a = null;
  s && (a = new ResizeObserver((p) => {
    let [x] = p;
    x && x.target === l && a && (a.unobserve(e), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
      var y;
      (y = a) == null || y.observe(e);
    })), n();
  }), l && !f && a.observe(l), a.observe(e));
  let m, h = f ? I(t) : null;
  f && w();
  function w() {
    const p = I(t);
    h && !Wt(h, p) && n(), h = p, m = requestAnimationFrame(w);
  }
  return n(), () => {
    var p;
    d.forEach((x) => {
      i && x.removeEventListener("scroll", n), r && x.removeEventListener("resize", n);
    }), u?.(), (p = a) == null || p.disconnect(), a = null, f && cancelAnimationFrame(m);
  };
}
const Ee = Zt, Te = te, Pe = Gt, De = Kt, Fe = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: Oe,
    ...n
  }, r = {
    ...i.platform,
    _c: o
  };
  return Ut(t, e, {
    ...i,
    platform: r
  });
};
export {
  Le as a,
  De as b,
  Fe as c,
  Se as e,
  Pe as f,
  Ee as o,
  Te as s
};
