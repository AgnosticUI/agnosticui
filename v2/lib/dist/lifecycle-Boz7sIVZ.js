typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
let yt = !1, Xe = !1;
function Je() {
  yt = !0;
}
Je();
const vn = 1, _n = 2, hn = 16, pn = 1, dn = 2, gn = 4, bn = 8, wn = 16, Qe = 1, tr = 2, T = Symbol(), er = "http://www.w3.org/1999/xhtml", rr = "@attach", _e = !1;
var Ut = Array.isArray, nr = Array.prototype.indexOf, En = Array.from, kt = Object.defineProperty, St = Object.getOwnPropertyDescriptor, he = Object.getOwnPropertyDescriptors, ir = Object.prototype, sr = Array.prototype, qt = Object.getPrototypeOf;
function fr(t) {
  return t();
}
function It(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function lr() {
  var t, e, r = new Promise((n, i) => {
    t = n, e = i;
  });
  return { promise: r, resolve: t, reject: e };
}
const R = 2, Bt = 4, At = 8, st = 16, V = 32, ft = 64, pe = 128, L = 256, gt = 512, S = 1024, M = 2048, Y = 4096, K = 8192, lt = 16384, Vt = 32768, de = 65536, Qt = 1 << 17, ur = 1 << 18, Tt = 1 << 19, ge = 1 << 20, Rt = 1 << 21, Yt = 1 << 22, X = 1 << 23, J = Symbol("$state"), yn = Symbol("legacy props"), ar = Symbol(""), $t = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
function or() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function cr(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function vr() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function _r(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function hr() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Tn(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function pr() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function dr() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function gr() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function br() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function be(t) {
  return t === this.v;
}
function wr(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function we(t) {
  return !wr(t, this.v);
}
let A = null;
function bt(t) {
  A = t;
}
function Sn(t, e = !1, r) {
  A = {
    p: A,
    c: null,
    e: null,
    s: t,
    x: null,
    l: yt && !e ? { s: null, u: null, $: [] } : null
  };
}
function mn(t) {
  var e = (
    /** @type {ComponentContext} */
    A
  ), r = e.e;
  if (r !== null) {
    e.e = null;
    for (var n of r)
      ke(n);
  }
  return A = e.p, /** @type {T} */
  {};
}
function pt() {
  return !yt || A !== null && A.l === null;
}
let rt = [];
function Er() {
  var t = rt;
  rt = [], It(t);
}
function Ht(t) {
  if (rt.length === 0) {
    var e = rt;
    queueMicrotask(() => {
      e === rt && Er();
    });
  }
  rt.push(t);
}
const yr = /* @__PURE__ */ new WeakMap();
function Ar(t) {
  var e = d;
  if (e === null)
    return p.f |= X, t;
  if ((e.f & Vt) === 0) {
    if ((e.f & pe) === 0)
      throw !e.parent && t instanceof Error && Ee(t), t;
    e.b.error(t);
  } else
    wt(t, e);
}
function wt(t, e) {
  for (; e !== null; ) {
    if ((e.f & pe) !== 0)
      try {
        e.b.error(t);
        return;
      } catch (r) {
        t = r;
      }
    e = e.parent;
  }
  throw t instanceof Error && Ee(t), t;
}
function Ee(t) {
  const e = yr.get(t);
  e && (kt(t, "message", {
    value: e.message
  }), kt(t, "stack", {
    value: e.stack
  }));
}
const mt = /* @__PURE__ */ new Set();
let O = null, te = /* @__PURE__ */ new Set(), vt = [], Wt = null, Ct = !1;
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
      this.#n = [], this.#e = [], this.#f = [], O = null, ee(r), ee(n), O === null ? O = this : mt.delete(this), this.#a?.resolve();
    } else
      this.#l(this.#n), this.#l(this.#e), this.#l(this.#f);
    for (const i of this.#r)
      tt(i);
    for (const i of this.#s)
      tt(i);
    this.#r = [], this.#s = [];
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   */
  #h(e) {
    e.f ^= S;
    for (var r = e.first; r !== null; ) {
      var n = r.f, i = (n & (V | ft)) !== 0, s = i && (n & S) !== 0, f = s || (n & K) !== 0 || this.skipped_effects.has(r);
      if (!f && r.fn !== null) {
        if (i)
          r.f ^= S;
        else if ((n & Bt) !== 0)
          this.#e.push(r);
        else if ((n & S) === 0)
          if ((n & Yt) !== 0) {
            var a = r.b?.is_pending() ? this.#s : this.#r;
            a.push(r);
          } else dt(r) && ((r.f & st) !== 0 && this.#f.push(r), tt(r));
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
      ((r.f & M) !== 0 ? this.#c : this.#v).push(r), P(r, S);
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
    for (const e of te)
      if (te.delete(e), e(), O !== null)
        break;
  }
  neuter() {
    this.#o = !0;
  }
  flush() {
    vt.length > 0 ? Tr() : this.#_(), O === this && (this.#t === 0 && mt.delete(this), this.deactivate());
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
        P(e, M), it(e);
      for (const e of this.#v)
        P(e, Y), it(e);
      this.#n = [], this.#e = [], this.flush();
    } else
      this.deactivate();
  }
  /** @param {() => void} fn */
  add_callback(e) {
    this.#i.add(e);
  }
  settled() {
    return (this.#a ??= lr()).promise;
  }
  static ensure() {
    if (O === null) {
      const e = O = new _t();
      mt.add(O), _t.enqueue(() => {
        O === e && e.flush();
      });
    }
    return O;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    Ht(e);
  }
}
function Tr() {
  var t = nt;
  Ct = !0;
  try {
    var e = 0;
    for (ie(!0); vt.length > 0; ) {
      var r = _t.ensure();
      if (e++ > 1e3) {
        var n, i;
        Sr();
      }
      r.process(vt), G.clear();
    }
  } finally {
    Ct = !1, ie(t), Wt = null;
  }
}
function Sr() {
  try {
    hr();
  } catch (t) {
    wt(t, Wt);
  }
}
let z = null;
function ee(t) {
  var e = t.length;
  if (e !== 0) {
    for (var r = 0; r < e; ) {
      var n = t[r++];
      if ((n.f & (lt | K)) === 0 && dt(n) && (z = [], tt(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null && n.ac === null ? je(n) : n.fn = null), z?.length > 0)) {
        G.clear();
        for (const i of z)
          tt(i);
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
    if (Ct && e === d && (r & st) !== 0)
      return;
    if ((r & (ft | V)) !== 0) {
      if ((r & S) === 0) return;
      e.f ^= S;
    }
  }
  vt.push(e);
}
function ye(t, e, r) {
  const n = pt() ? Gt : Nr;
  if (e.length === 0) {
    r(t.map(n));
    return;
  }
  var i = O, s = (
    /** @type {Effect} */
    d
  ), f = mr();
  Promise.all(e.map((a) => /* @__PURE__ */ Or(a))).then((a) => {
    i?.activate(), f();
    try {
      r([...t.map(n), ...a]);
    } catch (l) {
      (s.f & lt) === 0 && wt(l, s);
    }
    i?.deactivate(), Ae();
  }).catch((a) => {
    wt(a, s);
  });
}
function mr() {
  var t = d, e = p, r = A, n = O;
  return function() {
    U(t), D(e), bt(r), n?.activate();
  };
}
function Ae() {
  U(null), D(null), bt(null);
}
// @__NO_SIDE_EFFECTS__
function Gt(t) {
  var e = R | M, r = p !== null && (p.f & R) !== 0 ? (
    /** @type {Derived} */
    p
  ) : null;
  return d === null || r !== null && (r.f & L) !== 0 ? e |= L : d.f |= Tt, {
    ctx: A,
    deps: null,
    effects: null,
    equals: be,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      T
    ),
    wv: 0,
    parent: r ?? d,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Or(t, e) {
  let r = (
    /** @type {Effect | null} */
    d
  );
  r === null && or();
  var n = (
    /** @type {Boundary} */
    r.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = Zt(
    /** @type {V} */
    T
  ), f = null, a = !p;
  return jr(() => {
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
      f = null, c || o.activate(), h ? h !== $t && (s.f |= X, Lt(s, h)) : ((s.f & X) !== 0 && (s.f ^= X), Lt(s, _)), a && (n.update_pending_count(-1), c || o.decrement()), Ae();
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
function Nr(t) {
  const e = /* @__PURE__ */ Gt(t);
  return e.equals = we, e;
}
function Te(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var r = 0; r < e.length; r += 1)
      Z(
        /** @type {Effect} */
        e[r]
      );
  }
}
function Pr(t) {
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
  U(Pr(t));
  try {
    Te(t), e = Ve(t);
  } finally {
    U(r);
  }
  return e;
}
function Se(t) {
  var e = Kt(t);
  if (t.equals(e) || (t.v = e, t.wv = qe()), !ut) {
    var r = (W || (t.f & L) !== 0) && t.deps !== null ? Y : S;
    P(t, r);
  }
}
const G = /* @__PURE__ */ new Map();
function Zt(t, e) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: be,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function H(t, e) {
  const r = Zt(t);
  return qr(r), r;
}
// @__NO_SIDE_EFFECTS__
function On(t, e = !1, r = !0) {
  const n = Zt(t);
  return e || (n.equals = we), yt && r && A !== null && A.l !== null && (A.l.s ??= []).push(n), n;
}
function Nn(t, e) {
  return q(
    t,
    Xt(() => x(t))
  ), e;
}
function q(t, e, r = !1) {
  p !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!F || (p.f & Qt) !== 0) && pt() && (p.f & (R | st | Yt | Qt)) !== 0 && !B?.includes(t) && gr();
  let n = r ? ct(e) : e;
  return Lt(t, n);
}
function Lt(t, e) {
  if (!t.equals(e)) {
    var r = t.v;
    ut ? G.set(t, e) : G.set(t, r), t.v = e;
    var n = _t.ensure();
    n.capture(t, r), (t.f & R) !== 0 && ((t.f & M) !== 0 && Kt(
      /** @type {Derived} */
      t
    ), P(t, (t.f & L) === 0 ? S : Y)), t.wv = qe(), me(t, M), pt() && d !== null && (d.f & S) !== 0 && (d.f & (V | ft)) === 0 && (C === null ? Br([t]) : C.push(t));
  }
  return e;
}
function Pn(t, e = 1) {
  var r = x(t), n = e === 1 ? r++ : r--;
  return q(t, r), n;
}
function Ot(t) {
  q(t, t.v + 1);
}
function me(t, e) {
  var r = t.reactions;
  if (r !== null)
    for (var n = pt(), i = r.length, s = 0; s < i; s++) {
      var f = r[s], a = f.f;
      if (!(!n && f === d)) {
        var l = (a & M) === 0;
        l && P(f, e), (a & R) !== 0 ? me(
          /** @type {Derived} */
          f,
          Y
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
  const e = qt(t);
  if (e !== ir && e !== sr)
    return t;
  var r = /* @__PURE__ */ new Map(), n = Ut(t), i = /* @__PURE__ */ H(0), s = Q, f = (a) => {
    if (Q === s)
      return a();
    var l = p, u = Q;
    D(null), fe(s);
    var o = a();
    return D(l), fe(u), o;
  };
  return n && r.set("length", /* @__PURE__ */ H(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(a, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && pr();
        var o = r.get(l);
        return o === void 0 ? o = f(() => {
          var c = /* @__PURE__ */ H(u.value);
          return r.set(l, c), c;
        }) : q(o, u.value, !0), !0;
      },
      deleteProperty(a, l) {
        var u = r.get(l);
        if (u === void 0) {
          if (l in a) {
            const o = f(() => /* @__PURE__ */ H(T));
            r.set(l, o), Ot(i);
          }
        } else
          q(u, T), Ot(i);
        return !0;
      },
      get(a, l, u) {
        if (l === J)
          return t;
        var o = r.get(l), c = l in a;
        if (o === void 0 && (!c || St(a, l)?.writable) && (o = f(() => {
          var _ = ct(c ? a[l] : T), h = /* @__PURE__ */ H(_);
          return h;
        }), r.set(l, o)), o !== void 0) {
          var v = x(o);
          return v === T ? void 0 : v;
        }
        return Reflect.get(a, l, u);
      },
      getOwnPropertyDescriptor(a, l) {
        var u = Reflect.getOwnPropertyDescriptor(a, l);
        if (u && "value" in u) {
          var o = r.get(l);
          o && (u.value = x(o));
        } else if (u === void 0) {
          var c = r.get(l), v = c?.v;
          if (c !== void 0 && v !== T)
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
        var u = r.get(l), o = u !== void 0 && u.v !== T || Reflect.has(a, l);
        if (u !== void 0 || d !== null && (!o || St(a, l)?.writable)) {
          u === void 0 && (u = f(() => {
            var v = o ? ct(a[l]) : T, _ = /* @__PURE__ */ H(v);
            return _;
          }), r.set(l, u));
          var c = x(u);
          if (c === T)
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
            h !== void 0 ? q(h, T) : _ in a && (h = f(() => /* @__PURE__ */ H(T)), r.set(_ + "", h));
          }
        if (c === void 0)
          (!v || St(a, l)?.writable) && (c = f(() => /* @__PURE__ */ H(void 0)), q(c, ct(u)), r.set(l, c));
        else {
          v = c.v !== T;
          var y = f(() => ct(u));
          q(c, y);
        }
        var w = Reflect.getOwnPropertyDescriptor(a, l);
        if (w?.set && w.set.call(o, u), !v) {
          if (n && typeof l == "string") {
            var E = (
              /** @type {Source<number>} */
              r.get("length")
            ), j = Number(l);
            Number.isInteger(j) && j >= E.v && q(E, j + 1);
          }
          Ot(i);
        }
        return !0;
      },
      ownKeys(a) {
        x(i);
        var l = Reflect.ownKeys(a).filter((c) => {
          var v = r.get(c);
          return v === void 0 || v.v !== T;
        });
        for (var [u, o] of r)
          o.v !== T && !(u in a) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        dr();
      }
    }
  );
}
function re(t) {
  try {
    if (t !== null && typeof t == "object" && J in t)
      return t[J];
  } catch {
  }
  return t;
}
function kr(t, e) {
  return Object.is(re(t), re(e));
}
var Ir, Rr, Cr;
function kn(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Mt(t) {
  return Rr.call(t);
}
// @__NO_SIDE_EFFECTS__
function Oe(t) {
  return Cr.call(t);
}
function In(t, e) {
  return /* @__PURE__ */ Mt(t);
}
function Rn(t, e = 1, r = !1) {
  let n = t;
  for (; e--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ Oe(n);
  return n;
}
function Cn(t) {
  t.textContent = "";
}
function Ln() {
  return !1;
}
function Lr(t, e) {
  if (e) {
    const r = document.body;
    t.autofocus = !0, Ht(() => {
      document.activeElement === r && t.focus();
    });
  }
}
function zt(t) {
  var e = p, r = d;
  D(null), U(null);
  try {
    return t();
  } finally {
    D(e), U(r);
  }
}
function Ne(t) {
  d === null && p === null && _r(), p !== null && (p.f & L) !== 0 && d === null && vr(), ut && cr();
}
function Mr(t, e) {
  var r = e.last;
  r === null ? e.last = e.first = t : (r.next = t, t.prev = r, e.last = t);
}
function $(t, e, r, n = !0) {
  var i = d;
  i !== null && (i.f & K) !== 0 && (t |= K);
  var s = {
    ctx: A,
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
      tt(s), s.f |= Vt;
    } catch (l) {
      throw Z(s), l;
    }
  else e !== null && it(s);
  if (n) {
    var f = s;
    if (r && f.deps === null && f.teardown === null && f.nodes_start === null && f.first === f.last && // either `null`, or a singular child
    (f.f & Tt) === 0 && (f = f.first), f !== null && (f.parent = i, i !== null && Mr(f, i), p !== null && (p.f & R) !== 0 && (t & ft) === 0)) {
      var a = (
        /** @type {Derived} */
        p
      );
      (a.effects ??= []).push(f);
    }
  }
  return s;
}
function Pe(t) {
  const e = $(At, null, !1);
  return P(e, S), e.teardown = t, e;
}
function ne(t) {
  Ne();
  var e = (
    /** @type {Effect} */
    d.f
  ), r = !p && (e & V) !== 0 && (e & Vt) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      A
    );
    (n.e ??= []).push(t);
  } else
    return ke(t);
}
function ke(t) {
  return $(Bt | ge, t, !1);
}
function Dr(t) {
  return Ne(), $(At | ge, t, !0);
}
function Ie(t) {
  return $(Bt, t, !1);
}
function Mn(t, e) {
  var r = (
    /** @type {ComponentContextLegacy} */
    A
  ), n = { effect: null, ran: !1, deps: t };
  r.l.$.push(n), n.effect = Re(() => {
    t(), !n.ran && (n.ran = !0, Xt(e));
  });
}
function Dn() {
  var t = (
    /** @type {ComponentContextLegacy} */
    A
  );
  Re(() => {
    for (var e of t.l.$) {
      e.deps();
      var r = e.effect;
      (r.f & S) !== 0 && P(r, Y), dt(r) && tt(r), e.ran = !1;
    }
  });
}
function jr(t) {
  return $(Yt | Tt, t, !0);
}
function Re(t, e = 0) {
  return $(At | e, t, !0);
}
function jn(t, e = [], r = []) {
  ye(e, r, (n) => {
    $(At, () => t(...n.map(x)), !0);
  });
}
function Ce(t, e = 0) {
  var r = $(st | e, t, !0);
  return r;
}
function Le(t, e = !0) {
  return $(V | Tt, t, !0, e);
}
function Me(t) {
  var e = t.teardown;
  if (e !== null) {
    const r = ut, n = p;
    se(!0), D(null);
    try {
      e.call(null);
    } finally {
      se(r), D(n);
    }
  }
}
function De(t, e = !1) {
  var r = t.first;
  for (t.first = t.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && zt(() => {
      i.abort($t);
    });
    var n = r.next;
    (r.f & ft) !== 0 ? r.parent = null : Z(r, e), r = n;
  }
}
function Fr(t) {
  for (var e = t.first; e !== null; ) {
    var r = e.next;
    (e.f & V) === 0 && Z(e), e = r;
  }
}
function Z(t, e = !0) {
  var r = !1;
  (e || (t.f & ur) !== 0) && t.nodes_start !== null && t.nodes_end !== null && (xr(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), r = !0), De(t, e && !r), Et(t, 0), P(t, lt);
  var n = t.transitions;
  if (n !== null)
    for (const s of n)
      s.stop();
  Me(t);
  var i = t.parent;
  i !== null && i.first !== null && je(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
}
function xr(t, e) {
  for (; t !== null; ) {
    var r = t === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Oe(t)
    );
    t.remove(), t = r;
  }
}
function je(t) {
  var e = t.parent, r = t.prev, n = t.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), e !== null && (e.first === t && (e.first = n), e.last === t && (e.last = r));
}
function Fn(t, e) {
  var r = [];
  Fe(t, r, !0), Ur(r, () => {
    Z(t), e && e();
  });
}
function Ur(t, e) {
  var r = t.length;
  if (r > 0) {
    var n = () => --r || e();
    for (var i of t)
      i.out(n);
  } else
    e();
}
function Fe(t, e, r) {
  if ((t.f & K) === 0) {
    if (t.f ^= K, t.transitions !== null)
      for (const f of t.transitions)
        (f.is_global || r) && e.push(f);
    for (var n = t.first; n !== null; ) {
      var i = n.next, s = (n.f & de) !== 0 || (n.f & V) !== 0;
      Fe(n, e, s ? r : !1), n = i;
    }
  }
}
function xn(t) {
  xe(t, !0);
}
function xe(t, e) {
  if ((t.f & K) !== 0) {
    t.f ^= K, (t.f & S) === 0 && (P(t, M), it(t));
    for (var r = t.first; r !== null; ) {
      var n = r.next, i = (r.f & de) !== 0 || (r.f & V) !== 0;
      xe(r, i ? e : !1), r = n;
    }
    if (t.transitions !== null)
      for (const s of t.transitions)
        (s.is_global || e) && s.in();
  }
}
let nt = !1;
function ie(t) {
  nt = t;
}
let ut = !1;
function se(t) {
  ut = t;
}
let p = null, F = !1;
function D(t) {
  p = t;
}
let d = null;
function U(t) {
  d = t;
}
let B = null;
function qr(t) {
  p !== null && (B === null ? B = [t] : B.push(t));
}
let N = null, I = 0, C = null;
function Br(t) {
  C = t;
}
let Ue = 1, ht = 0, Q = ht;
function fe(t) {
  Q = t;
}
let W = !1;
function qe() {
  return ++Ue;
}
function dt(t) {
  var e = t.f;
  if ((e & M) !== 0)
    return !0;
  if ((e & Y) !== 0) {
    var r = t.deps, n = (e & L) !== 0;
    if (r !== null) {
      var i, s, f = (e & gt) !== 0, a = n && d !== null && !W, l = r.length;
      if ((f || a) && (d === null || (d.f & lt) === 0)) {
        var u = (
          /** @type {Derived} */
          t
        ), o = u.parent;
        for (i = 0; i < l; i++)
          s = r[i], (f || !s?.reactions?.includes(u)) && (s.reactions ??= []).push(u);
        f && (u.f ^= gt), a && o !== null && (o.f & L) === 0 && (u.f ^= L);
      }
      for (i = 0; i < l; i++)
        if (s = r[i], dt(
          /** @type {Derived} */
          s
        ) && Se(
          /** @type {Derived} */
          s
        ), s.wv > t.wv)
          return !0;
    }
    (!n || d !== null && !W) && P(t, S);
  }
  return !1;
}
function Be(t, e, r = !0) {
  var n = t.reactions;
  if (n !== null && !B?.includes(t))
    for (var i = 0; i < n.length; i++) {
      var s = n[i];
      (s.f & R) !== 0 ? Be(
        /** @type {Derived} */
        s,
        e,
        !1
      ) : e === s && (r ? P(s, M) : (s.f & S) !== 0 && P(s, Y), it(
        /** @type {Effect} */
        s
      ));
    }
}
function Ve(t) {
  var e = N, r = I, n = C, i = p, s = W, f = B, a = A, l = F, u = Q, o = t.f;
  N = /** @type {null | Value[]} */
  null, I = 0, C = null, W = (o & L) !== 0 && (F || !nt || p === null), p = (o & (V | ft)) === 0 ? t : null, B = null, bt(t.ctx), F = !1, Q = ++ht, t.ac !== null && (zt(() => {
    t.ac.abort($t);
  }), t.ac = null);
  try {
    t.f |= Rt;
    var c = (
      /** @type {Function} */
      t.fn
    ), v = c(), _ = t.deps;
    if (N !== null) {
      var h;
      if (Et(t, I), _ !== null && I > 0)
        for (_.length = I + N.length, h = 0; h < N.length; h++)
          _[I + h] = N[h];
      else
        t.deps = _ = N;
      if (!W || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (o & R) !== 0 && /** @type {import('#client').Derived} */
      t.reactions !== null)
        for (h = I; h < _.length; h++)
          (_[h].reactions ??= []).push(t);
    } else _ !== null && I < _.length && (Et(t, I), _.length = I);
    if (pt() && C !== null && !F && _ !== null && (t.f & (R | Y | M)) === 0)
      for (h = 0; h < /** @type {Source[]} */
      C.length; h++)
        Be(
          C[h],
          /** @type {Effect} */
          t
        );
    return i !== null && i !== t && (ht++, C !== null && (n === null ? n = C : n.push(.../** @type {Source[]} */
    C))), (t.f & X) !== 0 && (t.f ^= X), v;
  } catch (y) {
    return Ar(y);
  } finally {
    t.f ^= Rt, N = e, I = r, C = n, p = i, W = s, B = f, bt(a), F = l, Q = u;
  }
}
function Vr(t, e) {
  let r = e.reactions;
  if (r !== null) {
    var n = nr.call(r, t);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = e.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  r === null && (e.f & R) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (N === null || !N.includes(e)) && (P(e, Y), (e.f & (L | gt)) === 0 && (e.f ^= gt), Te(
    /** @type {Derived} **/
    e
  ), Et(
    /** @type {Derived} **/
    e,
    0
  ));
}
function Et(t, e) {
  var r = t.deps;
  if (r !== null)
    for (var n = e; n < r.length; n++)
      Vr(t, r[n]);
}
function tt(t) {
  var e = t.f;
  if ((e & lt) === 0) {
    P(t, S);
    var r = d, n = nt;
    d = t, nt = !0;
    try {
      (e & st) !== 0 ? Fr(t) : De(t), Me(t);
      var i = Ve(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = Ue;
      var s;
      _e && Xe && (t.f & M) !== 0 && t.deps;
    } finally {
      nt = n, d = r;
    }
  }
}
function x(t) {
  var e = t.f, r = (e & R) !== 0;
  if (p !== null && !F) {
    var n = d !== null && (d.f & lt) !== 0;
    if (!n && !B?.includes(t)) {
      var i = p.deps;
      if ((p.f & Rt) !== 0)
        t.rv < ht && (t.rv = ht, N === null && i !== null && i[I] === t ? I++ : N === null ? N = [t] : (!W || !N.includes(t)) && N.push(t));
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
    if (G.has(t))
      return G.get(t);
    if (r) {
      f = /** @type {Derived} */
      t;
      var l = f.v;
      return ((f.f & S) === 0 && f.reactions !== null || Ye(f)) && (l = Kt(f)), G.set(f, l), l;
    }
  } else r && (f = /** @type {Derived} */
  t, dt(f) && Se(f));
  if ((t.f & X) !== 0)
    throw t.v;
  return t.v;
}
function Ye(t) {
  if (t.v === T) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (G.has(e) || (e.f & R) !== 0 && Ye(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Xt(t) {
  var e = F;
  try {
    return F = !0, t();
  } finally {
    F = e;
  }
}
const Yr = -7169;
function P(t, e) {
  t.f = t.f & Yr | e;
}
function $r(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (J in t)
      Dt(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const r = t[e];
        typeof r == "object" && r && J in r && Dt(r);
      }
  }
}
function Dt(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let n in t)
      try {
        Dt(t[n], e);
      } catch {
      }
    const r = qt(t);
    if (r !== Object.prototype && r !== Array.prototype && r !== Map.prototype && r !== Set.prototype && r !== Date.prototype) {
      const n = he(r);
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
const Hr = /* @__PURE__ */ new Set(), Wr = /* @__PURE__ */ new Set();
function $e(t, e, r, n = {}) {
  function i(s) {
    if (n.capture || Kr.call(e, s), !s.cancelBubble)
      return zt(() => r?.call(this, s));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? Ht(() => {
    e.addEventListener(t, i, n);
  }) : e.addEventListener(t, i, n), i;
}
function Un(t, e, r, n, i) {
  var s = { capture: n, passive: i }, f = $e(t, e, r, s);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && Pe(() => {
    e.removeEventListener(t, f, s);
  });
}
function Gr(t) {
  for (var e = 0; e < t.length; e++)
    Hr.add(t[e]);
  for (var r of Wr)
    r(t);
}
let le = null;
function Kr(t) {
  var e = this, r = (
    /** @type {Node} */
    e.ownerDocument
  ), n = t.type, i = t.composedPath?.() || [], s = (
    /** @type {null | Element} */
    i[0] || t.target
  );
  le = t;
  var f = 0, a = le === t && t.__root;
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
    kt(t, "currentTarget", {
      configurable: !0,
      get() {
        return s || r;
      }
    });
    var o = p, c = d;
    D(null), U(null);
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
            if (Ut(y)) {
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
      t.__root = e, delete t.currentTarget, D(o), U(c);
    }
  }
}
function Zr(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function ue(t, e) {
  var r = (
    /** @type {Effect} */
    d
  );
  r.nodes_start === null && (r.nodes_start = t, r.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function qn(t, e) {
  var r = (e & Qe) !== 0, n = (e & tr) !== 0, i, s = !t.startsWith("<!>");
  return () => {
    i === void 0 && (i = Zr(s ? t : "<!>" + t), r || (i = /** @type {Node} */
    /* @__PURE__ */ Mt(i)));
    var f = (
      /** @type {TemplateNode} */
      n || Ir ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Mt(f)
      ), l = (
        /** @type {TemplateNode} */
        f.lastChild
      );
      ue(a, l);
    } else
      ue(f, f);
    return f;
  };
}
function Bn(t, e) {
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function zr(t) {
  return t.endsWith("capture") && t !== "gotpointercapture" && t !== "lostpointercapture";
}
const Xr = [
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
function Jr(t) {
  return Xr.includes(t);
}
const Qr = {
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
function tn(t) {
  return t = t.toLowerCase(), Qr[t] ?? t;
}
function en(t, e) {
  var r = void 0, n;
  Ce(() => {
    r !== (r = e()) && (n && (Z(n), n = null), r && (n = Le(() => {
      Ie(() => (
        /** @type {(node: Element) => void} */
        r(t)
      ));
    })));
  });
}
function He(t) {
  var e, r, n = "";
  if (typeof t == "string" || typeof t == "number") n += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var i = t.length;
    for (e = 0; e < i; e++) t[e] && (r = He(t[e])) && (n && (n += " "), n += r);
  } else for (r in t) t[r] && (n && (n += " "), n += r);
  return n;
}
function rn() {
  for (var t, e, r = 0, n = "", i = arguments.length; r < i; r++) (t = arguments[r]) && (e = He(t)) && (n && (n += " "), n += e);
  return n;
}
function nn(t) {
  return typeof t == "object" ? rn(t) : t ?? "";
}
const ae = [...` 	
\r\f \v\uFEFF`];
function sn(t, e, r) {
  var n = t == null ? "" : "" + t;
  if (r) {
    for (var i in r)
      if (r[i])
        n = n ? n + " " + i : i;
      else if (n.length)
        for (var s = i.length, f = 0; (f = n.indexOf(i, f)) >= 0; ) {
          var a = f + s;
          (f === 0 || ae.includes(n[f - 1])) && (a === n.length || ae.includes(n[a])) ? n = (f === 0 ? "" : n.substring(0, f)) + n.substring(a + 1) : f = a;
        }
  }
  return n === "" ? null : n;
}
function oe(t, e = !1) {
  var r = e ? " !important;" : ";", n = "";
  for (var i in t) {
    var s = t[i];
    s != null && s !== "" && (n += " " + i + ": " + s + r);
  }
  return n;
}
function Nt(t) {
  return t[0] !== "-" || t[1] !== "-" ? t.toLowerCase() : t;
}
function fn(t, e) {
  if (e) {
    var r = "", n, i;
    if (Array.isArray(e) ? (n = e[0], i = e[1]) : n = e, t) {
      t = String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var s = !1, f = 0, a = !1, l = [];
      n && l.push(...Object.keys(n).map(Nt)), i && l.push(...Object.keys(i).map(Nt));
      var u = 0, o = -1;
      const y = t.length;
      for (var c = 0; c < y; c++) {
        var v = t[c];
        if (a ? v === "/" && t[c - 1] === "*" && (a = !1) : s ? s === v && (s = !1) : v === "/" && t[c + 1] === "*" ? a = !0 : v === '"' || v === "'" ? s = v : v === "(" ? f++ : v === ")" && f--, !a && s === !1 && f === 0) {
          if (v === ":" && o === -1)
            o = c;
          else if (v === ";" || c === y - 1) {
            if (o !== -1) {
              var _ = Nt(t.substring(u, o).trim());
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
    return n && (r += oe(n)), i && (r += oe(i, !0)), r = r.trim(), r === "" ? null : r;
  }
  return t == null ? null : String(t);
}
function ln(t, e, r, n, i, s) {
  var f = t.__className;
  if (f !== r || f === void 0) {
    var a = sn(r, n, s);
    a == null ? t.removeAttribute("class") : e ? t.className = a : t.setAttribute("class", a), t.__className = r;
  } else if (s && i !== s)
    for (var l in s) {
      var u = !!s[l];
      (i == null || u !== !!i[l]) && t.classList.toggle(l, u);
    }
  return s;
}
function Pt(t, e = {}, r, n) {
  for (var i in r) {
    var s = r[i];
    e[i] !== s && (r[i] == null ? t.style.removeProperty(i) : t.style.setProperty(i, s, n));
  }
}
function un(t, e, r, n) {
  var i = t.__style;
  if (i !== e) {
    var s = fn(e, n);
    s == null ? t.removeAttribute("style") : t.style.cssText = s, t.__style = e;
  } else n && (Array.isArray(n) ? (Pt(t, r?.[0], n[0]), Pt(t, r?.[1], n[1], "important")) : Pt(t, r, n));
  return n;
}
function jt(t, e, r = !1) {
  if (t.multiple) {
    if (e == null)
      return;
    if (!Ut(e))
      return br();
    for (var n of t.options)
      n.selected = e.includes(ce(n));
    return;
  }
  for (n of t.options) {
    var i = ce(n);
    if (kr(i, e)) {
      n.selected = !0;
      return;
    }
  }
  (!r || e !== void 0) && (t.selectedIndex = -1);
}
function an(t) {
  var e = new MutationObserver(() => {
    jt(t, t.__value);
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
  }), Pe(() => {
    e.disconnect();
  });
}
function ce(t) {
  return "__value" in t ? t.__value : t.value;
}
const at = Symbol("class"), ot = Symbol("style"), We = Symbol("is custom element"), Ge = Symbol("is html");
function on(t, e) {
  e ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function Ft(t, e, r, n) {
  var i = Ke(t);
  i[e] !== (i[e] = r) && (e === "loading" && (t[ar] = r), r == null ? t.removeAttribute(e) : typeof r != "string" && Jt(t).includes(e) ? t[e] = r : t.setAttribute(e, r));
}
function Vn(t, e, r) {
  var n = p, i = d;
  D(null), U(null);
  try {
    // `style` should use `set_attribute` rather than the setter
    e !== "style" && // Don't compute setters for custom elements while they aren't registered yet,
    // because during their upgrade/instantiation they might add more setters.
    // Instead, fall back to a simple "an object, then set as property" heuristic.
    (xt.has(t.getAttribute("is") || t.nodeName) || // customElements may not be available in browser extension contexts
    !customElements || customElements.get(t.getAttribute("is") || t.tagName.toLowerCase()) ? Jt(t).includes(e) : r && typeof r == "object") ? t[e] = r : Ft(t, e, r == null ? r : String(r));
  } finally {
    D(n), U(i);
  }
}
function cn(t, e, r, n, i = !1, s = !1) {
  var f = Ke(t), a = f[We], l = !f[Ge], u = e || {}, o = t.tagName === "OPTION";
  for (var c in e)
    c in r || (r[c] = null);
  r.class ? r.class = nn(r.class) : r[at] && (r.class = null), r[ot] && (r.style ??= null);
  var v = Jt(t);
  for (const g in r) {
    let b = r[g];
    if (o && g === "value" && b == null) {
      t.value = t.__value = "", u[g] = b;
      continue;
    }
    if (g === "class") {
      var _ = t.namespaceURI === "http://www.w3.org/1999/xhtml";
      ln(t, _, b, n, e?.[at], r[at]), u[g] = b, u[at] = r[at];
      continue;
    }
    if (g === "style") {
      un(t, b, e?.[ot], r[ot]), u[g] = b, u[ot] = r[ot];
      continue;
    }
    var h = u[g];
    if (!(b === h && !(b === void 0 && t.hasAttribute(g)))) {
      u[g] = b;
      var y = g[0] + g[1];
      if (y !== "$$")
        if (y === "on") {
          const k = {}, et = "$$" + g;
          let m = g.slice(2);
          var w = Jr(m);
          if (zr(m) && (m = m.slice(0, -7), k.capture = !0), !w && h) {
            if (b != null) continue;
            t.removeEventListener(m, u[et], k), u[et] = null;
          }
          if (b != null)
            if (w)
              t[`__${m}`] = b, Gr([m]);
            else {
              let Ze = function(ze) {
                u[g].call(this, ze);
              };
              u[et] = $e(m, t, Ze, k);
            }
          else w && (t[`__${m}`] = void 0);
        } else if (g === "style")
          Ft(t, g, b);
        else if (g === "autofocus")
          Lr(
            /** @type {HTMLElement} */
            t,
            !!b
          );
        else if (!a && (g === "__value" || g === "value" && b != null))
          t.value = t.__value = b;
        else if (g === "selected" && o)
          on(
            /** @type {HTMLOptionElement} */
            t,
            b
          );
        else {
          var E = g;
          l || (E = tn(E));
          var j = E === "defaultValue" || E === "defaultChecked";
          if (b == null && !a && !j)
            if (f[g] = null, E === "value" || E === "checked") {
              let k = (
                /** @type {HTMLInputElement} */
                t
              );
              const et = e === void 0;
              if (E === "value") {
                let m = k.defaultValue;
                k.removeAttribute(E), k.defaultValue = m, k.value = k.__value = et ? m : null;
              } else {
                let m = k.defaultChecked;
                k.removeAttribute(E), k.defaultChecked = m, k.checked = et ? m : !1;
              }
            } else
              t.removeAttribute(g);
          else j || v.includes(E) && (a || typeof b != "string") ? (t[E] = b, E in f && (f[E] = T)) : typeof b != "function" && Ft(t, E, b);
        }
    }
  }
  return u;
}
function Yn(t, e, r = [], n = [], i, s = !1, f = !1) {
  ye(r, n, (a) => {
    var l = void 0, u = {}, o = t.nodeName === "SELECT", c = !1;
    if (Ce(() => {
      var _ = e(...a.map(x)), h = cn(
        t,
        l,
        _,
        i,
        s,
        f
      );
      c && o && "value" in _ && jt(
        /** @type {HTMLSelectElement} */
        t,
        _.value
      );
      for (let w of Object.getOwnPropertySymbols(u))
        _[w] || Z(u[w]);
      for (let w of Object.getOwnPropertySymbols(_)) {
        var y = _[w];
        w.description === rr && (!l || y !== l[w]) && (u[w] && Z(u[w]), u[w] = Le(() => en(t, () => y))), h[w] = y;
      }
      l = h;
    }), o) {
      var v = (
        /** @type {HTMLSelectElement} */
        t
      );
      Ie(() => {
        jt(
          v,
          /** @type {Record<string | symbol, any>} */
          l.value,
          !0
        ), an(v);
      });
    }
    c = !0;
  });
}
function Ke(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ??= {
      [We]: t.nodeName.includes("-"),
      [Ge]: t.namespaceURI === er
    }
  );
}
var xt = /* @__PURE__ */ new Map();
function Jt(t) {
  var e = t.getAttribute("is") || t.nodeName, r = xt.get(e);
  if (r) return r;
  xt.set(e, r = []);
  for (var n, i = t, s = Element.prototype; s !== i; ) {
    n = he(i);
    for (var f in n)
      n[f].set && r.push(f);
    i = qt(i);
  }
  return r;
}
function $n(t = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    A
  ), r = e.l.u;
  if (!r) return;
  let n = () => $r(e.s);
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
    n = () => x(f);
  }
  r.b.length && Dr(() => {
    ve(e, n), It(r.b);
  }), ne(() => {
    const i = Xt(() => r.m.map(fr));
    return () => {
      for (const s of i)
        typeof s == "function" && s();
    };
  }), r.a.length && ne(() => {
    ve(e, n), It(r.a);
  });
}
function ve(t, e) {
  if (t.l.s)
    for (const r of t.l.s) x(r);
  e();
}
export {
  hn as $,
  Re as A,
  Ht as B,
  Nn as C,
  lt as D,
  Mn as E,
  Dn as F,
  On as G,
  $r as H,
  Ce as I,
  de as J,
  kn as K,
  yn as L,
  Le as M,
  O as N,
  Ln as O,
  gn as P,
  xn as Q,
  Fn as R,
  J as S,
  En as T,
  T as U,
  Ut as V,
  Lt as W,
  _n as X,
  K as Y,
  Z,
  vn as _,
  Yn as a,
  Oe as a0,
  Fe as a1,
  Cn as a2,
  Ur as a3,
  Vn as a4,
  jn as a5,
  In as a6,
  Rn as a7,
  Bn as b,
  Sn as c,
  d,
  Un as e,
  qn as f,
  St as g,
  Tn as h,
  $n as i,
  x as j,
  ct as k,
  q as l,
  Gt as m,
  Nr as n,
  U as o,
  mn as p,
  bn as q,
  Xt as r,
  Zt as s,
  yt as t,
  Pn as u,
  dn as v,
  pn as w,
  wn as x,
  ut as y,
  Ie as z
};
