typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
let Et = !1, Ze = !1;
function ze() {
  Et = !0;
}
ze();
const cn = 1, vn = 2, _n = 16, hn = 1, pn = 2, dn = 4, gn = 8, bn = 16, Xe = 1, Je = 2, A = Symbol(), Qe = "http://www.w3.org/1999/xhtml", tr = "@attach", ve = !1;
var xt = Array.isArray, er = Array.prototype.indexOf, wn = Array.from, Nt = Object.defineProperty, Tt = Object.getOwnPropertyDescriptor, _e = Object.getOwnPropertyDescriptors, rr = Object.prototype, nr = Array.prototype, Ut = Object.getPrototypeOf;
function ir(t) {
  return t();
}
function Pt(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function sr() {
  var t, e, r = new Promise((n, i) => {
    t = n, e = i;
  });
  return { promise: r, resolve: t, reject: e };
}
const R = 2, qt = 4, Bt = 8, st = 16, B = 32, ft = 64, he = 128, L = 256, dt = 512, T = 1024, M = 2048, K = 4096, W = 8192, lt = 16384, Vt = 32768, pe = 65536, Jt = 1 << 17, fr = 1 << 18, yt = 1 << 19, de = 1 << 20, It = 1 << 21, Yt = 1 << 22, X = 1 << 23, J = Symbol("$state"), En = Symbol("legacy props"), lr = Symbol(""), Ht = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
function ur() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function ar(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function or() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function cr(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function vr() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function An(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function _r() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function hr() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function pr() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function dr() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function ge(t) {
  return t === this.v;
}
function gr(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function be(t) {
  return !gr(t, this.v);
}
let S = null;
function gt(t) {
  S = t;
}
function Tn(t, e = !1, r) {
  S = {
    p: S,
    c: null,
    e: null,
    s: t,
    x: null,
    l: Et && !e ? { s: null, u: null, $: [] } : null
  };
}
function Sn(t) {
  var e = (
    /** @type {ComponentContext} */
    S
  ), r = e.e;
  if (r !== null) {
    e.e = null;
    for (var n of r)
      Ne(n);
  }
  return S = e.p, /** @type {T} */
  {};
}
function pt() {
  return !Et || S !== null && S.l === null;
}
let et = [];
function br() {
  var t = et;
  et = [], Pt(t);
}
function $t(t) {
  if (et.length === 0) {
    var e = et;
    queueMicrotask(() => {
      e === et && br();
    });
  }
  et.push(t);
}
const wr = /* @__PURE__ */ new WeakMap();
function Er(t) {
  var e = d;
  if (e === null)
    return p.f |= X, t;
  if ((e.f & Vt) === 0) {
    if ((e.f & he) === 0)
      throw !e.parent && t instanceof Error && we(t), t;
    e.b.error(t);
  } else
    bt(t, e);
}
function bt(t, e) {
  for (; e !== null; ) {
    if ((e.f & he) !== 0)
      try {
        e.b.error(t);
        return;
      } catch (r) {
        t = r;
      }
    e = e.parent;
  }
  throw t instanceof Error && we(t), t;
}
function we(t) {
  const e = wr.get(t);
  e && (Nt(t, "message", {
    value: e.message
  }), Nt(t, "stack", {
    value: e.stack
  }));
}
const St = /* @__PURE__ */ new Set();
let O = null, Qt = /* @__PURE__ */ new Set(), vt = [], Wt = null, Rt = !1;
class _t {
  /**
   * The current values of any sources that are updated in this batch
   * They keys of this map are identical to `this.#previous`
   * @type {Map<Source, any>}
   */
  current = /* @__PURE__ */ new Map();
  /**
   * The values of any sources that are updated in this batch _before_ those updates took place.
   * They keys of this map are identical to `this.#current`
   * @type {Map<Source, any>}
   */
  #u = /* @__PURE__ */ new Map();
  /**
   * When the batch is committed (and the DOM is updated), we need to remove old branches
   * and append new ones by calling the functions added inside (if/each/key/etc) blocks
   * @type {Set<() => void>}
   */
  #i = /* @__PURE__ */ new Set();
  /**
   * The number of async effects that are currently in flight
   */
  #t = 0;
  /**
   * A deferred that resolves when the batch is committed, used with `settled()`
   * TODO replace with Promise.withResolvers once supported widely enough
   * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
   */
  #a = null;
  /**
   * True if an async effect inside this batch resolved and
   * its parent branch was already deleted
   */
  #o = !1;
  /**
   * Async effects (created inside `async_derived`) encountered during processing.
   * These run after the rest of the batch has updated, since they should
   * always have the latest values
   * @type {Effect[]}
   */
  #r = [];
  /**
   * The same as `#async_effects`, but for effects inside a newly-created
   * `<svelte:boundary>` — these do not prevent the batch from committing
   * @type {Effect[]}
   */
  #s = [];
  /**
   * Template effects and `$effect.pre` effects, which run when
   * a batch is committed
   * @type {Effect[]}
   */
  #n = [];
  /**
   * The same as `#render_effects`, but for `$effect` (which runs after)
   * @type {Effect[]}
   */
  #e = [];
  /**
   * Block effects, which may need to re-run on subsequent flushes
   * in order to update internal sources (e.g. each block items)
   * @type {Effect[]}
   */
  #f = [];
  /**
   * Deferred effects (which run after async work has completed) that are DIRTY
   * @type {Effect[]}
   */
  #c = [];
  /**
   * Deferred effects that are MAYBE_DIRTY
   * @type {Effect[]}
   */
  #v = [];
  /**
   * A set of branches that still exist, but will be destroyed when this batch
   * is committed — we skip over these during `process`
   * @type {Set<Effect>}
   */
  skipped_effects = /* @__PURE__ */ new Set();
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    vt = [];
    for (const i of e)
      this.#h(i);
    if (this.#r.length === 0 && this.#t === 0) {
      this.#_();
      var r = this.#n, n = this.#e;
      this.#n = [], this.#e = [], this.#f = [], O = null, te(r), te(n), O === null ? O = this : St.delete(this), this.#a?.resolve();
    } else
      this.#l(this.#n), this.#l(this.#e), this.#l(this.#f);
    for (const i of this.#r)
      nt(i);
    for (const i of this.#s)
      nt(i);
    this.#r = [], this.#s = [];
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   */
  #h(e) {
    e.f ^= T;
    for (var r = e.first; r !== null; ) {
      var n = r.f, i = (n & (B | ft)) !== 0, s = i && (n & T) !== 0, f = s || (n & W) !== 0 || this.skipped_effects.has(r);
      if (!f && r.fn !== null) {
        if (i)
          r.f ^= T;
        else if ((n & qt) !== 0)
          this.#e.push(r);
        else if ((n & T) === 0)
          if ((n & Yt) !== 0) {
            var a = r.b?.is_pending() ? this.#s : this.#r;
            a.push(r);
          } else At(r) && ((r.f & st) !== 0 && this.#f.push(r), nt(r));
        var l = r.first;
        if (l !== null) {
          r = l;
          continue;
        }
      }
      var u = r.parent;
      for (r = r.next; r === null && u !== null; )
        r = u.next, u = u.parent;
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #l(e) {
    for (const r of e)
      ((r.f & M) !== 0 ? this.#c : this.#v).push(r), N(r, T);
    e.length = 0;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, r) {
    this.#u.has(e) || this.#u.set(e, r), this.current.set(e, e.v);
  }
  activate() {
    O = this;
  }
  deactivate() {
    O = null;
    for (const e of Qt)
      if (Qt.delete(e), e(), O !== null)
        break;
  }
  neuter() {
    this.#o = !0;
  }
  flush() {
    vt.length > 0 ? yr() : this.#_(), O === this && (this.#t === 0 && St.delete(this), this.deactivate());
  }
  /**
   * Append and remove branches to/from the DOM
   */
  #_() {
    if (!this.#o)
      for (const e of this.#i)
        e();
    this.#i.clear();
  }
  increment() {
    this.#t += 1;
  }
  decrement() {
    if (this.#t -= 1, this.#t === 0) {
      for (const e of this.#c)
        N(e, M), it(e);
      for (const e of this.#v)
        N(e, K), it(e);
      this.#n = [], this.#e = [], this.flush();
    } else
      this.deactivate();
  }
  /** @param {() => void} fn */
  add_callback(e) {
    this.#i.add(e);
  }
  settled() {
    return (this.#a ??= sr()).promise;
  }
  static ensure() {
    if (O === null) {
      const e = O = new _t();
      St.add(O), _t.enqueue(() => {
        O === e && e.flush();
      });
    }
    return O;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    $t(e);
  }
}
function yr() {
  var t = rt;
  Rt = !0;
  try {
    var e = 0;
    for (ne(!0); vt.length > 0; ) {
      var r = _t.ensure();
      if (e++ > 1e3) {
        var n, i;
        Ar();
      }
      r.process(vt), $.clear();
    }
  } finally {
    Rt = !1, ne(t), Wt = null;
  }
}
function Ar() {
  try {
    vr();
  } catch (t) {
    bt(t, Wt);
  }
}
let z = null;
function te(t) {
  var e = t.length;
  if (e !== 0) {
    for (var r = 0; r < e; ) {
      var n = t[r++];
      if ((n.f & (lt | W)) === 0 && At(n) && (z = [], nt(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null && n.ac === null ? Me(n) : n.fn = null), z?.length > 0)) {
        $.clear();
        for (const i of z)
          nt(i);
        z = [];
      }
    }
    z = null;
  }
}
function it(t) {
  for (var e = Wt = t; e.parent !== null; ) {
    e = e.parent;
    var r = e.f;
    if (Rt && e === d && (r & st) !== 0)
      return;
    if ((r & (ft | B)) !== 0) {
      if ((r & T) === 0) return;
      e.f ^= T;
    }
  }
  vt.push(e);
}
function Ee(t, e, r) {
  const n = pt() ? Gt : mr;
  if (e.length === 0) {
    r(t.map(n));
    return;
  }
  var i = O, s = (
    /** @type {Effect} */
    d
  ), f = Tr();
  Promise.all(e.map((a) => /* @__PURE__ */ Sr(a))).then((a) => {
    i?.activate(), f();
    try {
      r([...t.map(n), ...a]);
    } catch (l) {
      (s.f & lt) === 0 && bt(l, s);
    }
    i?.deactivate(), ye();
  }).catch((a) => {
    bt(a, s);
  });
}
function Tr() {
  var t = d, e = p, r = S, n = O;
  return function() {
    x(t), D(e), gt(r), n?.activate();
  };
}
function ye() {
  x(null), D(null), gt(null);
}
// @__NO_SIDE_EFFECTS__
function Gt(t) {
  var e = R | M, r = p !== null && (p.f & R) !== 0 ? (
    /** @type {Derived} */
    p
  ) : null;
  return d === null || r !== null && (r.f & L) !== 0 ? e |= L : d.f |= yt, {
    ctx: S,
    deps: null,
    effects: null,
    equals: ge,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      A
    ),
    wv: 0,
    parent: r ?? d,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Sr(t, e) {
  let r = (
    /** @type {Effect | null} */
    d
  );
  r === null && ur();
  var n = (
    /** @type {Boundary} */
    r.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = Zt(
    /** @type {V} */
    A
  ), f = null, a = !p;
  return Mr(() => {
    try {
      var l = t();
      f && Promise.resolve(l).catch(() => {
      });
    } catch (_) {
      l = Promise.reject(_);
    }
    var u = () => l;
    i = f?.then(u, u) ?? Promise.resolve(l), f = i;
    var o = (
      /** @type {Batch} */
      O
    ), c = n.is_pending();
    a && (n.update_pending_count(1), c || o.increment());
    const v = (_, h = void 0) => {
      f = null, c || o.activate(), h ? h !== Ht && (s.f |= X, Ct(s, h)) : ((s.f & X) !== 0 && (s.f ^= X), Ct(s, _)), a && (n.update_pending_count(-1), c || o.decrement()), ye();
    };
    if (i.then(v, (_) => v(null, _ || "unknown")), o)
      return () => {
        queueMicrotask(() => o.neuter());
      };
  }), new Promise((l) => {
    function u(o) {
      function c() {
        o === i ? l(s) : u(i);
      }
      o.then(c, c);
    }
    u(i);
  });
}
// @__NO_SIDE_EFFECTS__
function mr(t) {
  const e = /* @__PURE__ */ Gt(t);
  return e.equals = be, e;
}
function Ae(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var r = 0; r < e.length; r += 1)
      G(
        /** @type {Effect} */
        e[r]
      );
  }
}
function Or(t) {
  for (var e = t.parent; e !== null; ) {
    if ((e.f & R) === 0)
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function Kt(t) {
  var e, r = d;
  x(Or(t));
  try {
    Ae(t), e = qe(t);
  } finally {
    x(r);
  }
  return e;
}
function Te(t) {
  var e = Kt(t);
  if (t.equals(e) || (t.v = e, t.wv = xe()), !ut) {
    var r = (H || (t.f & L) !== 0) && t.deps !== null ? K : T;
    N(t, r);
  }
}
const $ = /* @__PURE__ */ new Map();
function Zt(t, e) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: ge,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function V(t, e) {
  const r = Zt(t);
  return xr(r), r;
}
// @__NO_SIDE_EFFECTS__
function mn(t, e = !1, r = !0) {
  const n = Zt(t);
  return e || (n.equals = be), Et && r && S !== null && S.l !== null && (S.l.s ??= []).push(n), n;
}
function Y(t, e, r = !1) {
  p !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!F || (p.f & Jt) !== 0) && pt() && (p.f & (R | st | Yt | Jt)) !== 0 && !q?.includes(t) && pr();
  let n = r ? ct(e) : e;
  return Ct(t, n);
}
function Ct(t, e) {
  if (!t.equals(e)) {
    var r = t.v;
    ut ? $.set(t, e) : $.set(t, r), t.v = e;
    var n = _t.ensure();
    n.capture(t, r), (t.f & R) !== 0 && ((t.f & M) !== 0 && Kt(
      /** @type {Derived} */
      t
    ), N(t, (t.f & L) === 0 ? T : K)), t.wv = xe(), Se(t, M), pt() && d !== null && (d.f & T) !== 0 && (d.f & (B | ft)) === 0 && (C === null ? Ur([t]) : C.push(t));
  }
  return e;
}
function On(t, e = 1) {
  var r = U(t), n = e === 1 ? r++ : r--;
  return Y(t, r), n;
}
function mt(t) {
  Y(t, t.v + 1);
}
function Se(t, e) {
  var r = t.reactions;
  if (r !== null)
    for (var n = pt(), i = r.length, s = 0; s < i; s++) {
      var f = r[s], a = f.f;
      if (!(!n && f === d)) {
        var l = (a & M) === 0;
        l && N(f, e), (a & R) !== 0 ? Se(
          /** @type {Derived} */
          f,
          K
        ) : l && ((a & st) !== 0 && z !== null && z.push(
          /** @type {Effect} */
          f
        ), it(
          /** @type {Effect} */
          f
        ));
      }
    }
}
function ct(t) {
  if (typeof t != "object" || t === null || J in t)
    return t;
  const e = Ut(t);
  if (e !== rr && e !== nr)
    return t;
  var r = /* @__PURE__ */ new Map(), n = xt(t), i = /* @__PURE__ */ V(0), s = Q, f = (a) => {
    if (Q === s)
      return a();
    var l = p, u = Q;
    D(null), se(s);
    var o = a();
    return D(l), se(u), o;
  };
  return n && r.set("length", /* @__PURE__ */ V(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(a, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && _r();
        var o = r.get(l);
        return o === void 0 ? o = f(() => {
          var c = /* @__PURE__ */ V(u.value);
          return r.set(l, c), c;
        }) : Y(o, u.value, !0), !0;
      },
      deleteProperty(a, l) {
        var u = r.get(l);
        if (u === void 0) {
          if (l in a) {
            const o = f(() => /* @__PURE__ */ V(A));
            r.set(l, o), mt(i);
          }
        } else
          Y(u, A), mt(i);
        return !0;
      },
      get(a, l, u) {
        if (l === J)
          return t;
        var o = r.get(l), c = l in a;
        if (o === void 0 && (!c || Tt(a, l)?.writable) && (o = f(() => {
          var _ = ct(c ? a[l] : A), h = /* @__PURE__ */ V(_);
          return h;
        }), r.set(l, o)), o !== void 0) {
          var v = U(o);
          return v === A ? void 0 : v;
        }
        return Reflect.get(a, l, u);
      },
      getOwnPropertyDescriptor(a, l) {
        var u = Reflect.getOwnPropertyDescriptor(a, l);
        if (u && "value" in u) {
          var o = r.get(l);
          o && (u.value = U(o));
        } else if (u === void 0) {
          var c = r.get(l), v = c?.v;
          if (c !== void 0 && v !== A)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return u;
      },
      has(a, l) {
        if (l === J)
          return !0;
        var u = r.get(l), o = u !== void 0 && u.v !== A || Reflect.has(a, l);
        if (u !== void 0 || d !== null && (!o || Tt(a, l)?.writable)) {
          u === void 0 && (u = f(() => {
            var v = o ? ct(a[l]) : A, _ = /* @__PURE__ */ V(v);
            return _;
          }), r.set(l, u));
          var c = U(u);
          if (c === A)
            return !1;
        }
        return o;
      },
      set(a, l, u, o) {
        var c = r.get(l), v = l in a;
        if (n && l === "length")
          for (var _ = u; _ < /** @type {Source<number>} */
          c.v; _ += 1) {
            var h = r.get(_ + "");
            h !== void 0 ? Y(h, A) : _ in a && (h = f(() => /* @__PURE__ */ V(A)), r.set(_ + "", h));
          }
        if (c === void 0)
          (!v || Tt(a, l)?.writable) && (c = f(() => /* @__PURE__ */ V(void 0)), Y(c, ct(u)), r.set(l, c));
        else {
          v = c.v !== A;
          var y = f(() => ct(u));
          Y(c, y);
        }
        var w = Reflect.getOwnPropertyDescriptor(a, l);
        if (w?.set && w.set.call(o, u), !v) {
          if (n && typeof l == "string") {
            var E = (
              /** @type {Source<number>} */
              r.get("length")
            ), j = Number(l);
            Number.isInteger(j) && j >= E.v && Y(E, j + 1);
          }
          mt(i);
        }
        return !0;
      },
      ownKeys(a) {
        U(i);
        var l = Reflect.ownKeys(a).filter((c) => {
          var v = r.get(c);
          return v === void 0 || v.v !== A;
        });
        for (var [u, o] of r)
          o.v !== A && !(u in a) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        hr();
      }
    }
  );
}
function ee(t) {
  try {
    if (t !== null && typeof t == "object" && J in t)
      return t[J];
  } catch {
  }
  return t;
}
function kr(t, e) {
  return Object.is(ee(t), ee(e));
}
var Nr, Pr, Ir;
function kn(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Lt(t) {
  return Pr.call(t);
}
// @__NO_SIDE_EFFECTS__
function me(t) {
  return Ir.call(t);
}
function Nn(t, e) {
  return /* @__PURE__ */ Lt(t);
}
function Pn(t, e = 1, r = !1) {
  let n = t;
  for (; e--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ me(n);
  return n;
}
function In(t) {
  t.textContent = "";
}
function Rn() {
  return !1;
}
function Rr(t, e) {
  if (e) {
    const r = document.body;
    t.autofocus = !0, $t(() => {
      document.activeElement === r && t.focus();
    });
  }
}
function zt(t) {
  var e = p, r = d;
  D(null), x(null);
  try {
    return t();
  } finally {
    D(e), x(r);
  }
}
function Oe(t) {
  d === null && p === null && cr(), p !== null && (p.f & L) !== 0 && d === null && or(), ut && ar();
}
function Cr(t, e) {
  var r = e.last;
  r === null ? e.last = e.first = t : (r.next = t, t.prev = r, e.last = t);
}
function Z(t, e, r, n = !0) {
  var i = d;
  i !== null && (i.f & W) !== 0 && (t |= W);
  var s = {
    ctx: S,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | M,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: i,
    b: i && i.b,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0,
    ac: null
  };
  if (r)
    try {
      nt(s), s.f |= Vt;
    } catch (l) {
      throw G(s), l;
    }
  else e !== null && it(s);
  if (n) {
    var f = s;
    if (r && f.deps === null && f.teardown === null && f.nodes_start === null && f.first === f.last && // either `null`, or a singular child
    (f.f & yt) === 0 && (f = f.first), f !== null && (f.parent = i, i !== null && Cr(f, i), p !== null && (p.f & R) !== 0 && (t & ft) === 0)) {
      var a = (
        /** @type {Derived} */
        p
      );
      (a.effects ??= []).push(f);
    }
  }
  return s;
}
function ke(t) {
  const e = Z(Bt, null, !1);
  return N(e, T), e.teardown = t, e;
}
function re(t) {
  Oe();
  var e = (
    /** @type {Effect} */
    d.f
  ), r = !p && (e & B) !== 0 && (e & Vt) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      S
    );
    (n.e ??= []).push(t);
  } else
    return Ne(t);
}
function Ne(t) {
  return Z(qt | de, t, !1);
}
function Lr(t) {
  return Oe(), Z(Bt | de, t, !0);
}
function Pe(t) {
  return Z(qt, t, !1);
}
function Mr(t) {
  return Z(Yt | yt, t, !0);
}
function Cn(t, e = [], r = []) {
  Ee(e, r, (n) => {
    Z(Bt, () => t(...n.map(U)), !0);
  });
}
function Ie(t, e = 0) {
  var r = Z(st | e, t, !0);
  return r;
}
function Re(t, e = !0) {
  return Z(B | yt, t, !0, e);
}
function Ce(t) {
  var e = t.teardown;
  if (e !== null) {
    const r = ut, n = p;
    ie(!0), D(null);
    try {
      e.call(null);
    } finally {
      ie(r), D(n);
    }
  }
}
function Le(t, e = !1) {
  var r = t.first;
  for (t.first = t.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && zt(() => {
      i.abort(Ht);
    });
    var n = r.next;
    (r.f & ft) !== 0 ? r.parent = null : G(r, e), r = n;
  }
}
function Dr(t) {
  for (var e = t.first; e !== null; ) {
    var r = e.next;
    (e.f & B) === 0 && G(e), e = r;
  }
}
function G(t, e = !0) {
  var r = !1;
  (e || (t.f & fr) !== 0) && t.nodes_start !== null && t.nodes_end !== null && (jr(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), r = !0), Le(t, e && !r), wt(t, 0), N(t, lt);
  var n = t.transitions;
  if (n !== null)
    for (const s of n)
      s.stop();
  Ce(t);
  var i = t.parent;
  i !== null && i.first !== null && Me(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
}
function jr(t, e) {
  for (; t !== null; ) {
    var r = t === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ me(t)
    );
    t.remove(), t = r;
  }
}
function Me(t) {
  var e = t.parent, r = t.prev, n = t.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), e !== null && (e.first === t && (e.first = n), e.last === t && (e.last = r));
}
function Ln(t, e) {
  var r = [];
  De(t, r, !0), Fr(r, () => {
    G(t), e && e();
  });
}
function Fr(t, e) {
  var r = t.length;
  if (r > 0) {
    var n = () => --r || e();
    for (var i of t)
      i.out(n);
  } else
    e();
}
function De(t, e, r) {
  if ((t.f & W) === 0) {
    if (t.f ^= W, t.transitions !== null)
      for (const f of t.transitions)
        (f.is_global || r) && e.push(f);
    for (var n = t.first; n !== null; ) {
      var i = n.next, s = (n.f & pe) !== 0 || (n.f & B) !== 0;
      De(n, e, s ? r : !1), n = i;
    }
  }
}
function Mn(t) {
  je(t, !0);
}
function je(t, e) {
  if ((t.f & W) !== 0) {
    t.f ^= W, (t.f & T) === 0 && (N(t, M), it(t));
    for (var r = t.first; r !== null; ) {
      var n = r.next, i = (r.f & pe) !== 0 || (r.f & B) !== 0;
      je(r, i ? e : !1), r = n;
    }
    if (t.transitions !== null)
      for (const s of t.transitions)
        (s.is_global || e) && s.in();
  }
}
let rt = !1;
function ne(t) {
  rt = t;
}
let ut = !1;
function ie(t) {
  ut = t;
}
let p = null, F = !1;
function D(t) {
  p = t;
}
let d = null;
function x(t) {
  d = t;
}
let q = null;
function xr(t) {
  p !== null && (q === null ? q = [t] : q.push(t));
}
let k = null, I = 0, C = null;
function Ur(t) {
  C = t;
}
let Fe = 1, ht = 0, Q = ht;
function se(t) {
  Q = t;
}
let H = !1;
function xe() {
  return ++Fe;
}
function At(t) {
  var e = t.f;
  if ((e & M) !== 0)
    return !0;
  if ((e & K) !== 0) {
    var r = t.deps, n = (e & L) !== 0;
    if (r !== null) {
      var i, s, f = (e & dt) !== 0, a = n && d !== null && !H, l = r.length;
      if ((f || a) && (d === null || (d.f & lt) === 0)) {
        var u = (
          /** @type {Derived} */
          t
        ), o = u.parent;
        for (i = 0; i < l; i++)
          s = r[i], (f || !s?.reactions?.includes(u)) && (s.reactions ??= []).push(u);
        f && (u.f ^= dt), a && o !== null && (o.f & L) === 0 && (u.f ^= L);
      }
      for (i = 0; i < l; i++)
        if (s = r[i], At(
          /** @type {Derived} */
          s
        ) && Te(
          /** @type {Derived} */
          s
        ), s.wv > t.wv)
          return !0;
    }
    (!n || d !== null && !H) && N(t, T);
  }
  return !1;
}
function Ue(t, e, r = !0) {
  var n = t.reactions;
  if (n !== null && !q?.includes(t))
    for (var i = 0; i < n.length; i++) {
      var s = n[i];
      (s.f & R) !== 0 ? Ue(
        /** @type {Derived} */
        s,
        e,
        !1
      ) : e === s && (r ? N(s, M) : (s.f & T) !== 0 && N(s, K), it(
        /** @type {Effect} */
        s
      ));
    }
}
function qe(t) {
  var e = k, r = I, n = C, i = p, s = H, f = q, a = S, l = F, u = Q, o = t.f;
  k = /** @type {null | Value[]} */
  null, I = 0, C = null, H = (o & L) !== 0 && (F || !rt || p === null), p = (o & (B | ft)) === 0 ? t : null, q = null, gt(t.ctx), F = !1, Q = ++ht, t.ac !== null && (zt(() => {
    t.ac.abort(Ht);
  }), t.ac = null);
  try {
    t.f |= It;
    var c = (
      /** @type {Function} */
      t.fn
    ), v = c(), _ = t.deps;
    if (k !== null) {
      var h;
      if (wt(t, I), _ !== null && I > 0)
        for (_.length = I + k.length, h = 0; h < k.length; h++)
          _[I + h] = k[h];
      else
        t.deps = _ = k;
      if (!H || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (o & R) !== 0 && /** @type {import('#client').Derived} */
      t.reactions !== null)
        for (h = I; h < _.length; h++)
          (_[h].reactions ??= []).push(t);
    } else _ !== null && I < _.length && (wt(t, I), _.length = I);
    if (pt() && C !== null && !F && _ !== null && (t.f & (R | K | M)) === 0)
      for (h = 0; h < /** @type {Source[]} */
      C.length; h++)
        Ue(
          C[h],
          /** @type {Effect} */
          t
        );
    return i !== null && i !== t && (ht++, C !== null && (n === null ? n = C : n.push(.../** @type {Source[]} */
    C))), (t.f & X) !== 0 && (t.f ^= X), v;
  } catch (y) {
    return Er(y);
  } finally {
    t.f ^= It, k = e, I = r, C = n, p = i, H = s, q = f, gt(a), F = l, Q = u;
  }
}
function qr(t, e) {
  let r = e.reactions;
  if (r !== null) {
    var n = er.call(r, t);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = e.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  r === null && (e.f & R) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (k === null || !k.includes(e)) && (N(e, K), (e.f & (L | dt)) === 0 && (e.f ^= dt), Ae(
    /** @type {Derived} **/
    e
  ), wt(
    /** @type {Derived} **/
    e,
    0
  ));
}
function wt(t, e) {
  var r = t.deps;
  if (r !== null)
    for (var n = e; n < r.length; n++)
      qr(t, r[n]);
}
function nt(t) {
  var e = t.f;
  if ((e & lt) === 0) {
    N(t, T);
    var r = d, n = rt;
    d = t, rt = !0;
    try {
      (e & st) !== 0 ? Dr(t) : Le(t), Ce(t);
      var i = qe(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = Fe;
      var s;
      ve && Ze && (t.f & M) !== 0 && t.deps;
    } finally {
      rt = n, d = r;
    }
  }
}
function U(t) {
  var e = t.f, r = (e & R) !== 0;
  if (p !== null && !F) {
    var n = d !== null && (d.f & lt) !== 0;
    if (!n && !q?.includes(t)) {
      var i = p.deps;
      if ((p.f & It) !== 0)
        t.rv < ht && (t.rv = ht, k === null && i !== null && i[I] === t ? I++ : k === null ? k = [t] : (!H || !k.includes(t)) && k.push(t));
      else {
        (p.deps ??= []).push(t);
        var s = t.reactions;
        s === null ? t.reactions = [p] : s.includes(p) || s.push(p);
      }
    }
  } else if (r && /** @type {Derived} */
  t.deps === null && /** @type {Derived} */
  t.effects === null) {
    var f = (
      /** @type {Derived} */
      t
    ), a = f.parent;
    a !== null && (a.f & L) === 0 && (f.f ^= L);
  }
  if (ut) {
    if ($.has(t))
      return $.get(t);
    if (r) {
      f = /** @type {Derived} */
      t;
      var l = f.v;
      return ((f.f & T) === 0 && f.reactions !== null || Be(f)) && (l = Kt(f)), $.set(f, l), l;
    }
  } else r && (f = /** @type {Derived} */
  t, At(f) && Te(f));
  if ((t.f & X) !== 0)
    throw t.v;
  return t.v;
}
function Be(t) {
  if (t.v === A) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if ($.has(e) || (e.f & R) !== 0 && Be(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Br(t) {
  var e = F;
  try {
    return F = !0, t();
  } finally {
    F = e;
  }
}
const Vr = -7169;
function N(t, e) {
  t.f = t.f & Vr | e;
}
function Yr(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (J in t)
      Mt(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const r = t[e];
        typeof r == "object" && r && J in r && Mt(r);
      }
  }
}
function Mt(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let n in t)
      try {
        Mt(t[n], e);
      } catch {
      }
    const r = Ut(t);
    if (r !== Object.prototype && r !== Array.prototype && r !== Map.prototype && r !== Set.prototype && r !== Date.prototype) {
      const n = _e(r);
      for (let i in n) {
        const s = n[i].get;
        if (s)
          try {
            s.call(t);
          } catch {
          }
      }
    }
  }
}
const Hr = /* @__PURE__ */ new Set(), $r = /* @__PURE__ */ new Set();
function Ve(t, e, r, n = {}) {
  function i(s) {
    if (n.capture || Gr.call(e, s), !s.cancelBubble)
      return zt(() => r?.call(this, s));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? $t(() => {
    e.addEventListener(t, i, n);
  }) : e.addEventListener(t, i, n), i;
}
function Dn(t, e, r, n, i) {
  var s = { capture: n, passive: i }, f = Ve(t, e, r, s);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && ke(() => {
    e.removeEventListener(t, f, s);
  });
}
function Wr(t) {
  for (var e = 0; e < t.length; e++)
    Hr.add(t[e]);
  for (var r of $r)
    r(t);
}
let fe = null;
function Gr(t) {
  var e = this, r = (
    /** @type {Node} */
    e.ownerDocument
  ), n = t.type, i = t.composedPath?.() || [], s = (
    /** @type {null | Element} */
    i[0] || t.target
  );
  fe = t;
  var f = 0, a = fe === t && t.__root;
  if (a) {
    var l = i.indexOf(a);
    if (l !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var u = i.indexOf(e);
    if (u === -1)
      return;
    l <= u && (f = l);
  }
  if (s = /** @type {Element} */
  i[f] || t.target, s !== e) {
    Nt(t, "currentTarget", {
      configurable: !0,
      get() {
        return s || r;
      }
    });
    var o = p, c = d;
    D(null), x(null);
    try {
      for (var v, _ = []; s !== null; ) {
        var h = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var y = s["__" + n];
          if (y != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === s))
            if (xt(y)) {
              var [w, ...E] = y;
              w.apply(s, [t, ...E]);
            } else
              y.call(s, t);
        } catch (j) {
          v ? _.push(j) : v = j;
        }
        if (t.cancelBubble || h === e || h === null)
          break;
        s = h;
      }
      if (v) {
        for (let j of _)
          queueMicrotask(() => {
            throw j;
          });
        throw v;
      }
    } finally {
      t.__root = e, delete t.currentTarget, D(o), x(c);
    }
  }
}
function Kr(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function le(t, e) {
  var r = (
    /** @type {Effect} */
    d
  );
  r.nodes_start === null && (r.nodes_start = t, r.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function jn(t, e) {
  var r = (e & Xe) !== 0, n = (e & Je) !== 0, i, s = !t.startsWith("<!>");
  return () => {
    i === void 0 && (i = Kr(s ? t : "<!>" + t), r || (i = /** @type {Node} */
    /* @__PURE__ */ Lt(i)));
    var f = (
      /** @type {TemplateNode} */
      n || Nr ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Lt(f)
      ), l = (
        /** @type {TemplateNode} */
        f.lastChild
      );
      le(a, l);
    } else
      le(f, f);
    return f;
  };
}
function Fn(t, e) {
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function Zr(t) {
  return t.endsWith("capture") && t !== "gotpointercapture" && t !== "lostpointercapture";
}
const zr = [
  "beforeinput",
  "click",
  "change",
  "dblclick",
  "contextmenu",
  "focusin",
  "focusout",
  "input",
  "keydown",
  "keyup",
  "mousedown",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "pointerdown",
  "pointermove",
  "pointerout",
  "pointerover",
  "pointerup",
  "touchend",
  "touchmove",
  "touchstart"
];
function Xr(t) {
  return zr.includes(t);
}
const Jr = {
  // no `class: 'className'` because we handle that separately
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly",
  defaultvalue: "defaultValue",
  defaultchecked: "defaultChecked",
  srcobject: "srcObject",
  novalidate: "noValidate",
  allowfullscreen: "allowFullscreen",
  disablepictureinpicture: "disablePictureInPicture",
  disableremoteplayback: "disableRemotePlayback"
};
function Qr(t) {
  return t = t.toLowerCase(), Jr[t] ?? t;
}
function tn(t, e) {
  var r = void 0, n;
  Ie(() => {
    r !== (r = e()) && (n && (G(n), n = null), r && (n = Re(() => {
      Pe(() => (
        /** @type {(node: Element) => void} */
        r(t)
      ));
    })));
  });
}
function Ye(t) {
  var e, r, n = "";
  if (typeof t == "string" || typeof t == "number") n += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var i = t.length;
    for (e = 0; e < i; e++) t[e] && (r = Ye(t[e])) && (n && (n += " "), n += r);
  } else for (r in t) t[r] && (n && (n += " "), n += r);
  return n;
}
function en() {
  for (var t, e, r = 0, n = "", i = arguments.length; r < i; r++) (t = arguments[r]) && (e = Ye(t)) && (n && (n += " "), n += e);
  return n;
}
function rn(t) {
  return typeof t == "object" ? en(t) : t ?? "";
}
const ue = [...` 	
\r\f \v\uFEFF`];
function nn(t, e, r) {
  var n = t == null ? "" : "" + t;
  if (r) {
    for (var i in r)
      if (r[i])
        n = n ? n + " " + i : i;
      else if (n.length)
        for (var s = i.length, f = 0; (f = n.indexOf(i, f)) >= 0; ) {
          var a = f + s;
          (f === 0 || ue.includes(n[f - 1])) && (a === n.length || ue.includes(n[a])) ? n = (f === 0 ? "" : n.substring(0, f)) + n.substring(a + 1) : f = a;
        }
  }
  return n === "" ? null : n;
}
function ae(t, e = !1) {
  var r = e ? " !important;" : ";", n = "";
  for (var i in t) {
    var s = t[i];
    s != null && s !== "" && (n += " " + i + ": " + s + r);
  }
  return n;
}
function Ot(t) {
  return t[0] !== "-" || t[1] !== "-" ? t.toLowerCase() : t;
}
function sn(t, e) {
  if (e) {
    var r = "", n, i;
    if (Array.isArray(e) ? (n = e[0], i = e[1]) : n = e, t) {
      t = String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var s = !1, f = 0, a = !1, l = [];
      n && l.push(...Object.keys(n).map(Ot)), i && l.push(...Object.keys(i).map(Ot));
      var u = 0, o = -1;
      const y = t.length;
      for (var c = 0; c < y; c++) {
        var v = t[c];
        if (a ? v === "/" && t[c - 1] === "*" && (a = !1) : s ? s === v && (s = !1) : v === "/" && t[c + 1] === "*" ? a = !0 : v === '"' || v === "'" ? s = v : v === "(" ? f++ : v === ")" && f--, !a && s === !1 && f === 0) {
          if (v === ":" && o === -1)
            o = c;
          else if (v === ";" || c === y - 1) {
            if (o !== -1) {
              var _ = Ot(t.substring(u, o).trim());
              if (!l.includes(_)) {
                v !== ";" && c++;
                var h = t.substring(u, c).trim();
                r += " " + h + ";";
              }
            }
            u = c + 1, o = -1;
          }
        }
      }
    }
    return n && (r += ae(n)), i && (r += ae(i, !0)), r = r.trim(), r === "" ? null : r;
  }
  return t == null ? null : String(t);
}
function fn(t, e, r, n, i, s) {
  var f = t.__className;
  if (f !== r || f === void 0) {
    var a = nn(r, n, s);
    a == null ? t.removeAttribute("class") : e ? t.className = a : t.setAttribute("class", a), t.__className = r;
  } else if (s && i !== s)
    for (var l in s) {
      var u = !!s[l];
      (i == null || u !== !!i[l]) && t.classList.toggle(l, u);
    }
  return s;
}
function kt(t, e = {}, r, n) {
  for (var i in r) {
    var s = r[i];
    e[i] !== s && (r[i] == null ? t.style.removeProperty(i) : t.style.setProperty(i, s, n));
  }
}
function ln(t, e, r, n) {
  var i = t.__style;
  if (i !== e) {
    var s = sn(e, n);
    s == null ? t.removeAttribute("style") : t.style.cssText = s, t.__style = e;
  } else n && (Array.isArray(n) ? (kt(t, r?.[0], n[0]), kt(t, r?.[1], n[1], "important")) : kt(t, r, n));
  return n;
}
function Dt(t, e, r = !1) {
  if (t.multiple) {
    if (e == null)
      return;
    if (!xt(e))
      return dr();
    for (var n of t.options)
      n.selected = e.includes(oe(n));
    return;
  }
  for (n of t.options) {
    var i = oe(n);
    if (kr(i, e)) {
      n.selected = !0;
      return;
    }
  }
  (!r || e !== void 0) && (t.selectedIndex = -1);
}
function un(t) {
  var e = new MutationObserver(() => {
    Dt(t, t.__value);
  });
  e.observe(t, {
    // Listen to option element changes
    childList: !0,
    subtree: !0,
    // because of <optgroup>
    // Listen to option element value attribute changes
    // (doesn't get notified of select value changes,
    // because that property is not reflected as an attribute)
    attributes: !0,
    attributeFilter: ["value"]
  }), ke(() => {
    e.disconnect();
  });
}
function oe(t) {
  return "__value" in t ? t.__value : t.value;
}
const at = Symbol("class"), ot = Symbol("style"), He = Symbol("is custom element"), $e = Symbol("is html");
function an(t, e) {
  e ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function jt(t, e, r, n) {
  var i = We(t);
  i[e] !== (i[e] = r) && (e === "loading" && (t[lr] = r), r == null ? t.removeAttribute(e) : typeof r != "string" && Xt(t).includes(e) ? t[e] = r : t.setAttribute(e, r));
}
function xn(t, e, r) {
  var n = p, i = d;
  D(null), x(null);
  try {
    // `style` should use `set_attribute` rather than the setter
    e !== "style" && // Don't compute setters for custom elements while they aren't registered yet,
    // because during their upgrade/instantiation they might add more setters.
    // Instead, fall back to a simple "an object, then set as property" heuristic.
    (Ft.has(t.getAttribute("is") || t.nodeName) || // customElements may not be available in browser extension contexts
    !customElements || customElements.get(t.getAttribute("is") || t.tagName.toLowerCase()) ? Xt(t).includes(e) : r && typeof r == "object") ? t[e] = r : jt(t, e, r == null ? r : String(r));
  } finally {
    D(n), x(i);
  }
}
function on(t, e, r, n, i = !1, s = !1) {
  var f = We(t), a = f[He], l = !f[$e], u = e || {}, o = t.tagName === "OPTION";
  for (var c in e)
    c in r || (r[c] = null);
  r.class ? r.class = rn(r.class) : r[at] && (r.class = null), r[ot] && (r.style ??= null);
  var v = Xt(t);
  for (const g in r) {
    let b = r[g];
    if (o && g === "value" && b == null) {
      t.value = t.__value = "", u[g] = b;
      continue;
    }
    if (g === "class") {
      var _ = t.namespaceURI === "http://www.w3.org/1999/xhtml";
      fn(t, _, b, n, e?.[at], r[at]), u[g] = b, u[at] = r[at];
      continue;
    }
    if (g === "style") {
      ln(t, b, e?.[ot], r[ot]), u[g] = b, u[ot] = r[ot];
      continue;
    }
    var h = u[g];
    if (!(b === h && !(b === void 0 && t.hasAttribute(g)))) {
      u[g] = b;
      var y = g[0] + g[1];
      if (y !== "$$")
        if (y === "on") {
          const P = {}, tt = "$$" + g;
          let m = g.slice(2);
          var w = Xr(m);
          if (Zr(m) && (m = m.slice(0, -7), P.capture = !0), !w && h) {
            if (b != null) continue;
            t.removeEventListener(m, u[tt], P), u[tt] = null;
          }
          if (b != null)
            if (w)
              t[`__${m}`] = b, Wr([m]);
            else {
              let Ge = function(Ke) {
                u[g].call(this, Ke);
              };
              u[tt] = Ve(m, t, Ge, P);
            }
          else w && (t[`__${m}`] = void 0);
        } else if (g === "style")
          jt(t, g, b);
        else if (g === "autofocus")
          Rr(
            /** @type {HTMLElement} */
            t,
            !!b
          );
        else if (!a && (g === "__value" || g === "value" && b != null))
          t.value = t.__value = b;
        else if (g === "selected" && o)
          an(
            /** @type {HTMLOptionElement} */
            t,
            b
          );
        else {
          var E = g;
          l || (E = Qr(E));
          var j = E === "defaultValue" || E === "defaultChecked";
          if (b == null && !a && !j)
            if (f[g] = null, E === "value" || E === "checked") {
              let P = (
                /** @type {HTMLInputElement} */
                t
              );
              const tt = e === void 0;
              if (E === "value") {
                let m = P.defaultValue;
                P.removeAttribute(E), P.defaultValue = m, P.value = P.__value = tt ? m : null;
              } else {
                let m = P.defaultChecked;
                P.removeAttribute(E), P.defaultChecked = m, P.checked = tt ? m : !1;
              }
            } else
              t.removeAttribute(g);
          else j || v.includes(E) && (a || typeof b != "string") ? (t[E] = b, E in f && (f[E] = A)) : typeof b != "function" && jt(t, E, b);
        }
    }
  }
  return u;
}
function Un(t, e, r = [], n = [], i, s = !1, f = !1) {
  Ee(r, n, (a) => {
    var l = void 0, u = {}, o = t.nodeName === "SELECT", c = !1;
    if (Ie(() => {
      var _ = e(...a.map(U)), h = on(
        t,
        l,
        _,
        i,
        s,
        f
      );
      c && o && "value" in _ && Dt(
        /** @type {HTMLSelectElement} */
        t,
        _.value
      );
      for (let w of Object.getOwnPropertySymbols(u))
        _[w] || G(u[w]);
      for (let w of Object.getOwnPropertySymbols(_)) {
        var y = _[w];
        w.description === tr && (!l || y !== l[w]) && (u[w] && G(u[w]), u[w] = Re(() => tn(t, () => y))), h[w] = y;
      }
      l = h;
    }), o) {
      var v = (
        /** @type {HTMLSelectElement} */
        t
      );
      Pe(() => {
        Dt(
          v,
          /** @type {Record<string | symbol, any>} */
          l.value,
          !0
        ), un(v);
      });
    }
    c = !0;
  });
}
function We(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ??= {
      [He]: t.nodeName.includes("-"),
      [$e]: t.namespaceURI === Qe
    }
  );
}
var Ft = /* @__PURE__ */ new Map();
function Xt(t) {
  var e = t.getAttribute("is") || t.nodeName, r = Ft.get(e);
  if (r) return r;
  Ft.set(e, r = []);
  for (var n, i = t, s = Element.prototype; s !== i; ) {
    n = _e(i);
    for (var f in n)
      n[f].set && r.push(f);
    i = Ut(i);
  }
  return r;
}
function qn(t = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    S
  ), r = e.l.u;
  if (!r) return;
  let n = () => Yr(e.s);
  if (t) {
    let i = 0, s = (
      /** @type {Record<string, any>} */
      {}
    );
    const f = /* @__PURE__ */ Gt(() => {
      let a = !1;
      const l = e.s;
      for (const u in l)
        l[u] !== s[u] && (s[u] = l[u], a = !0);
      return a && i++, i;
    });
    n = () => U(f);
  }
  r.b.length && Lr(() => {
    ce(e, n), Pt(r.b);
  }), re(() => {
    const i = Br(() => r.m.map(ir));
    return () => {
      for (const s of i)
        typeof s == "function" && s();
    };
  }), r.a.length && re(() => {
    ce(e, n), Pt(r.a);
  });
}
function ce(t, e) {
  if (t.l.s)
    for (const r of t.l.s) U(r);
  e();
}
export {
  Nn as $,
  kn as A,
  Re as B,
  O as C,
  lt as D,
  pe as E,
  Rn as F,
  Mn as G,
  Ln as H,
  wn as I,
  xt as J,
  Ct as K,
  En as L,
  mn as M,
  vn as N,
  W as O,
  dn as P,
  G as Q,
  cn as R,
  J as S,
  _n as T,
  A as U,
  me as V,
  De as W,
  In as X,
  Fr as Y,
  xn as Z,
  Cn as _,
  d as a,
  Pn as a0,
  U as b,
  ct as c,
  Y as d,
  mr as e,
  x as f,
  Tt as g,
  Gt as h,
  Br as i,
  pn as j,
  gn as k,
  Et as l,
  hn as m,
  bn as n,
  ut as o,
  An as p,
  qn as q,
  jn as r,
  Zt as s,
  Un as t,
  On as u,
  Dn as v,
  Fn as w,
  Sn as x,
  Tn as y,
  Ie as z
};
