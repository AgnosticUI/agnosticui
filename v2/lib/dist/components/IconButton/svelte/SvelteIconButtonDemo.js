import "../core/_IconButton.js";
const wn = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(wn);
let jt = !1, mn = !1;
function yn() {
  jt = !0;
}
yn();
const En = 1, kn = 2, Cn = 16, xn = 1, Tn = 2, T = Symbol(), Sn = "http://www.w3.org/1999/xhtml", Me = !1;
var re = Array.isArray, An = Array.prototype.indexOf, Ne = Array.from, Xt = Object.defineProperty, Wt = Object.getOwnPropertyDescriptor, De = Object.getOwnPropertyDescriptors, Ln = Object.prototype, Mn = Array.prototype, ie = Object.getPrototypeOf;
function Nn(t) {
  return t();
}
function Zt(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function Dn() {
  var t, e, n = new Promise((r, i) => {
    t = r, e = i;
  });
  return { promise: n, resolve: t, reject: e };
}
const P = 2, Re = 4, le = 8, gt = 16, J = 32, bt = 64, Ie = 128, B = 256, It = 512, L = 1024, j = 2048, it = 4096, V = 8192, wt = 16384, ae = 32768, se = 65536, me = 1 << 17, Rn = 1 << 18, Ut = 1 << 19, Oe = 1 << 20, Jt = 1 << 21, ue = 1 << 22, st = 1 << 23, kt = Symbol("$state"), In = Symbol(""), fe = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
function On() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Pn(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Fn() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function qn(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Bn() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function jn() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Un() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Hn() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let Vn = !1;
function Pe(t) {
  return t === this.v;
}
function Yn(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Fe(t) {
  return !Yn(t, this.v);
}
let M = null;
function Ot(t) {
  M = t;
}
function zn(t, e = !1, n) {
  M = {
    p: M,
    c: null,
    e: null,
    s: t,
    x: null,
    l: jt && !e ? { s: null, u: null, $: [] } : null
  };
}
function Wn(t) {
  var e = (
    /** @type {ComponentContext} */
    M
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      Ge(r);
  }
  return M = e.p, /** @type {T} */
  {};
}
function At() {
  return !jt || M !== null && M.l === null;
}
let _t = [];
function Gn() {
  var t = _t;
  _t = [], Zt(t);
}
function qe(t) {
  if (_t.length === 0) {
    var e = _t;
    queueMicrotask(() => {
      e === _t && Gn();
    });
  }
  _t.push(t);
}
const Kn = /* @__PURE__ */ new WeakMap();
function $n(t) {
  var e = m;
  if (e === null)
    return w.f |= st, t;
  if ((e.f & ae) === 0) {
    if ((e.f & Ie) === 0)
      throw !e.parent && t instanceof Error && Be(t), t;
    e.b.error(t);
  } else
    Pt(t, e);
}
function Pt(t, e) {
  for (; e !== null; ) {
    if ((e.f & Ie) !== 0)
      try {
        e.b.error(t);
        return;
      } catch (n) {
        t = n;
      }
    e = e.parent;
  }
  throw t instanceof Error && Be(t), t;
}
function Be(t) {
  const e = Kn.get(t);
  e && (Xt(t, "message", {
    value: e.message
  }), Xt(t, "stack", {
    value: e.stack
  }));
}
const Gt = /* @__PURE__ */ new Set();
let S = null, ye = /* @__PURE__ */ new Set(), Ct = [], oe = null, Qt = !1;
class xt {
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
  #f = null;
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
  #n = [];
  /**
   * The same as `#async_effects`, but for effects inside a newly-created
   * `<svelte:boundary>` — these do not prevent the batch from committing
   * @type {Effect[]}
   */
  #l = [];
  /**
   * Template effects and `$effect.pre` effects, which run when
   * a batch is committed
   * @type {Effect[]}
   */
  #r = [];
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
  #a = [];
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
    Ct = [];
    for (const i of e)
      this.#d(i);
    if (this.#n.length === 0 && this.#t === 0) {
      this.#_();
      var n = this.#r, r = this.#e;
      this.#r = [], this.#e = [], this.#a = [], S = null, Ee(n), Ee(r), S === null ? S = this : Gt.delete(this), this.#f?.resolve();
    } else
      this.#s(this.#r), this.#s(this.#e), this.#s(this.#a);
    for (const i of this.#n)
      ht(i);
    for (const i of this.#l)
      ht(i);
    this.#n = [], this.#l = [];
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   */
  #d(e) {
    e.f ^= L;
    for (var n = e.first; n !== null; ) {
      var r = n.f, i = (r & (J | bt)) !== 0, l = i && (r & L) !== 0, a = l || (r & V) !== 0 || this.skipped_effects.has(n);
      if (!a && n.fn !== null) {
        if (i)
          n.f ^= L;
        else if ((r & Re) !== 0)
          this.#e.push(n);
        else if ((r & L) === 0)
          if ((r & ue) !== 0) {
            var f = n.b?.is_pending() ? this.#l : this.#n;
            f.push(n);
          } else Ht(n) && ((n.f & gt) !== 0 && this.#a.push(n), ht(n));
        var s = n.first;
        if (s !== null) {
          n = s;
          continue;
        }
      }
      var u = n.parent;
      for (n = n.next; n === null && u !== null; )
        n = u.next, u = u.parent;
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #s(e) {
    for (const n of e)
      ((n.f & j) !== 0 ? this.#c : this.#v).push(n), R(n, L);
    e.length = 0;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, n) {
    this.#u.has(e) || this.#u.set(e, n), this.current.set(e, e.v);
  }
  activate() {
    S = this;
  }
  deactivate() {
    S = null;
    for (const e of ye)
      if (ye.delete(e), e(), S !== null)
        break;
  }
  neuter() {
    this.#o = !0;
  }
  flush() {
    Ct.length > 0 ? Xn() : this.#_(), S === this && (this.#t === 0 && Gt.delete(this), this.deactivate());
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
        R(e, j), pt(e);
      for (const e of this.#v)
        R(e, it), pt(e);
      this.#r = [], this.#e = [], this.flush();
    } else
      this.deactivate();
  }
  /** @param {() => void} fn */
  add_callback(e) {
    this.#i.add(e);
  }
  settled() {
    return (this.#f ??= Dn()).promise;
  }
  static ensure() {
    if (S === null) {
      const e = S = new xt();
      Gt.add(S), xt.enqueue(() => {
        S === e && e.flush();
      });
    }
    return S;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    qe(e);
  }
}
function Xn() {
  var t = dt;
  Qt = !0;
  try {
    var e = 0;
    for (Ce(!0); Ct.length > 0; ) {
      var n = xt.ensure();
      if (e++ > 1e3) {
        var r, i;
        Zn();
      }
      n.process(Ct), rt.clear();
    }
  } finally {
    Qt = !1, Ce(t), oe = null;
  }
}
function Zn() {
  try {
    Bn();
  } catch (t) {
    Pt(t, oe);
  }
}
let at = null;
function Ee(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if ((r.f & (wt | V)) === 0 && Ht(r) && (at = [], ht(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? Ze(r) : r.fn = null), at?.length > 0)) {
        rt.clear();
        for (const i of at)
          ht(i);
        at = [];
      }
    }
    at = null;
  }
}
function pt(t) {
  for (var e = oe = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (Qt && e === m && (n & gt) !== 0)
      return;
    if ((n & (bt | J)) !== 0) {
      if ((n & L) === 0) return;
      e.f ^= L;
    }
  }
  Ct.push(e);
}
function Jn(t, e, n) {
  const r = At() ? ce : Ue;
  if (e.length === 0) {
    n(t.map(r));
    return;
  }
  var i = S, l = (
    /** @type {Effect} */
    m
  ), a = Qn();
  Promise.all(e.map((f) => /* @__PURE__ */ tr(f))).then((f) => {
    i?.activate(), a();
    try {
      n([...t.map(r), ...f]);
    } catch (s) {
      (l.f & wt) === 0 && Pt(s, l);
    }
    i?.deactivate(), je();
  }).catch((f) => {
    Pt(f, l);
  });
}
function Qn() {
  var t = m, e = w, n = M, r = S;
  return function() {
    G(t), U(e), Ot(n), r?.activate();
  };
}
function je() {
  G(null), U(null), Ot(null);
}
// @__NO_SIDE_EFFECTS__
function ce(t) {
  var e = P | j, n = w !== null && (w.f & P) !== 0 ? (
    /** @type {Derived} */
    w
  ) : null;
  return m === null || n !== null && (n.f & B) !== 0 ? e |= B : m.f |= Ut, {
    ctx: M,
    deps: null,
    effects: null,
    equals: Pe,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      T
    ),
    wv: 0,
    parent: n ?? m,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function tr(t, e) {
  let n = (
    /** @type {Effect | null} */
    m
  );
  n === null && On();
  var r = (
    /** @type {Boundary} */
    n.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), l = Tt(
    /** @type {V} */
    T
  ), a = null, f = !w;
  return fr(() => {
    try {
      var s = t();
      a && Promise.resolve(s).catch(() => {
      });
    } catch (_) {
      s = Promise.reject(_);
    }
    var u = () => s;
    i = a?.then(u, u) ?? Promise.resolve(s), a = i;
    var c = (
      /** @type {Batch} */
      S
    ), d = r.is_pending();
    f && (r.update_pending_count(1), d || c.increment());
    const v = (_, o = void 0) => {
      a = null, d || c.activate(), o ? o !== fe && (l.f |= st, Ft(l, o)) : ((l.f & st) !== 0 && (l.f ^= st), Ft(l, _)), f && (r.update_pending_count(-1), d || c.decrement()), je();
    };
    if (i.then(v, (_) => v(null, _ || "unknown")), c)
      return () => {
        queueMicrotask(() => c.neuter());
      };
  }), new Promise((s) => {
    function u(c) {
      function d() {
        c === i ? s(l) : u(i);
      }
      c.then(d, d);
    }
    u(i);
  });
}
// @__NO_SIDE_EFFECTS__
function Ue(t) {
  const e = /* @__PURE__ */ ce(t);
  return e.equals = Fe, e;
}
function He(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      ot(
        /** @type {Effect} */
        e[n]
      );
  }
}
function er(t) {
  for (var e = t.parent; e !== null; ) {
    if ((e.f & P) === 0)
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function ve(t) {
  var e, n = m;
  G(er(t));
  try {
    He(t), e = ln(t);
  } finally {
    G(n);
  }
  return e;
}
function Ve(t) {
  var e = ve(t);
  if (t.equals(e) || (t.v = e, t.wv = nn()), !mt) {
    var n = (nt || (t.f & B) !== 0) && t.deps !== null ? it : L;
    R(t, n);
  }
}
const rt = /* @__PURE__ */ new Map();
function Tt(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Pe,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function et(t, e) {
  const n = Tt(t);
  return vr(n), n;
}
// @__NO_SIDE_EFFECTS__
function Rt(t, e = !1, n = !0) {
  const r = Tt(t);
  return e || (r.equals = Fe), jt && n && M !== null && M.l !== null && (M.l.s ??= []).push(r), r;
}
function q(t, e, n = !1) {
  w !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!W || (w.f & me) !== 0) && At() && (w.f & (P | gt | ue | me)) !== 0 && !Z?.includes(t) && Hn();
  let r = n ? Et(e) : e;
  return Ft(t, r);
}
function Ft(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    mt ? rt.set(t, e) : rt.set(t, n), t.v = e;
    var r = xt.ensure();
    r.capture(t, n), (t.f & P) !== 0 && ((t.f & j) !== 0 && ve(
      /** @type {Derived} */
      t
    ), R(t, (t.f & B) === 0 ? L : it)), t.wv = nn(), Ye(t, j), At() && m !== null && (m.f & L) !== 0 && (m.f & (J | bt)) === 0 && (F === null ? _r([t]) : F.push(t));
  }
  return e;
}
function Kt(t) {
  q(t, t.v + 1);
}
function Ye(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = At(), i = n.length, l = 0; l < i; l++) {
      var a = n[l], f = a.f;
      if (!(!r && a === m)) {
        var s = (f & j) === 0;
        s && R(a, e), (f & P) !== 0 ? Ye(
          /** @type {Derived} */
          a,
          it
        ) : s && ((f & gt) !== 0 && at !== null && at.push(
          /** @type {Effect} */
          a
        ), pt(
          /** @type {Effect} */
          a
        ));
      }
    }
}
function Et(t) {
  if (typeof t != "object" || t === null || kt in t)
    return t;
  const e = ie(t);
  if (e !== Ln && e !== Mn)
    return t;
  var n = /* @__PURE__ */ new Map(), r = re(t), i = /* @__PURE__ */ et(0), l = ut, a = (f) => {
    if (ut === l)
      return f();
    var s = w, u = ut;
    U(null), Te(l);
    var c = f();
    return U(s), Te(u), c;
  };
  return r && n.set("length", /* @__PURE__ */ et(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(f, s, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && jn();
        var c = n.get(s);
        return c === void 0 ? c = a(() => {
          var d = /* @__PURE__ */ et(u.value);
          return n.set(s, d), d;
        }) : q(c, u.value, !0), !0;
      },
      deleteProperty(f, s) {
        var u = n.get(s);
        if (u === void 0) {
          if (s in f) {
            const c = a(() => /* @__PURE__ */ et(T));
            n.set(s, c), Kt(i);
          }
        } else
          q(u, T), Kt(i);
        return !0;
      },
      get(f, s, u) {
        if (s === kt)
          return t;
        var c = n.get(s), d = s in f;
        if (c === void 0 && (!d || Wt(f, s)?.writable) && (c = a(() => {
          var _ = Et(d ? f[s] : T), o = /* @__PURE__ */ et(_);
          return o;
        }), n.set(s, c)), c !== void 0) {
          var v = C(c);
          return v === T ? void 0 : v;
        }
        return Reflect.get(f, s, u);
      },
      getOwnPropertyDescriptor(f, s) {
        var u = Reflect.getOwnPropertyDescriptor(f, s);
        if (u && "value" in u) {
          var c = n.get(s);
          c && (u.value = C(c));
        } else if (u === void 0) {
          var d = n.get(s), v = d?.v;
          if (d !== void 0 && v !== T)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return u;
      },
      has(f, s) {
        if (s === kt)
          return !0;
        var u = n.get(s), c = u !== void 0 && u.v !== T || Reflect.has(f, s);
        if (u !== void 0 || m !== null && (!c || Wt(f, s)?.writable)) {
          u === void 0 && (u = a(() => {
            var v = c ? Et(f[s]) : T, _ = /* @__PURE__ */ et(v);
            return _;
          }), n.set(s, u));
          var d = C(u);
          if (d === T)
            return !1;
        }
        return c;
      },
      set(f, s, u, c) {
        var d = n.get(s), v = s in f;
        if (r && s === "length")
          for (var _ = u; _ < /** @type {Source<number>} */
          d.v; _ += 1) {
            var o = n.get(_ + "");
            o !== void 0 ? q(o, T) : _ in f && (o = a(() => /* @__PURE__ */ et(T)), n.set(_ + "", o));
          }
        if (d === void 0)
          (!v || Wt(f, s)?.writable) && (d = a(() => /* @__PURE__ */ et(void 0)), q(d, Et(u)), n.set(s, d));
        else {
          v = d.v !== T;
          var h = a(() => Et(u));
          q(d, h);
        }
        var g = Reflect.getOwnPropertyDescriptor(f, s);
        if (g?.set && g.set.call(c, u), !v) {
          if (r && typeof s == "string") {
            var E = (
              /** @type {Source<number>} */
              n.get("length")
            ), b = Number(s);
            Number.isInteger(b) && b >= E.v && q(E, b + 1);
          }
          Kt(i);
        }
        return !0;
      },
      ownKeys(f) {
        C(i);
        var s = Reflect.ownKeys(f).filter((d) => {
          var v = n.get(d);
          return v === void 0 || v.v !== T;
        });
        for (var [u, c] of n)
          c.v !== T && !(u in f) && s.push(u);
        return s;
      },
      setPrototypeOf() {
        Un();
      }
    }
  );
}
var nr, rr, ir;
function _e(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function te(t) {
  return rr.call(t);
}
// @__NO_SIDE_EFFECTS__
function de(t) {
  return ir.call(t);
}
function D(t, e) {
  return /* @__PURE__ */ te(t);
}
function k(t, e = 1, n = !1) {
  let r = t;
  for (; e--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ de(r);
  return r;
}
function lr(t) {
  t.textContent = "";
}
function ze() {
  return !1;
}
function he(t) {
  var e = w, n = m;
  U(null), G(null);
  try {
    return t();
  } finally {
    U(e), G(n);
  }
}
function We(t) {
  m === null && w === null && qn(), w !== null && (w.f & B) !== 0 && m === null && Fn(), mt && Pn();
}
function ar(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function ft(t, e, n, r = !0) {
  var i = m;
  i !== null && (i.f & V) !== 0 && (t |= V);
  var l = {
    ctx: M,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | j,
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
  if (n)
    try {
      ht(l), l.f |= ae;
    } catch (s) {
      throw ot(l), s;
    }
  else e !== null && pt(l);
  if (r) {
    var a = l;
    if (n && a.deps === null && a.teardown === null && a.nodes_start === null && a.first === a.last && // either `null`, or a singular child
    (a.f & Ut) === 0 && (a = a.first), a !== null && (a.parent = i, i !== null && ar(a, i), w !== null && (w.f & P) !== 0 && (t & bt) === 0)) {
      var f = (
        /** @type {Derived} */
        w
      );
      (f.effects ??= []).push(a);
    }
  }
  return l;
}
function sr(t) {
  const e = ft(le, null, !1);
  return R(e, L), e.teardown = t, e;
}
function ke(t) {
  We();
  var e = (
    /** @type {Effect} */
    m.f
  ), n = !w && (e & J) !== 0 && (e & ae) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      M
    );
    (r.e ??= []).push(t);
  } else
    return Ge(t);
}
function Ge(t) {
  return ft(Re | Oe, t, !1);
}
function ur(t) {
  return We(), ft(le | Oe, t, !0);
}
function fr(t) {
  return ft(ue | Ut, t, !0);
}
function yt(t, e = [], n = []) {
  Jn(e, n, (r) => {
    ft(le, () => t(...r.map(C)), !0);
  });
}
function Ke(t, e = 0) {
  var n = ft(gt | e, t, !0);
  return n;
}
function qt(t, e = !0) {
  return ft(J | Ut, t, !0, e);
}
function $e(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = mt, r = w;
    xe(!0), U(null);
    try {
      e.call(null);
    } finally {
      xe(n), U(r);
    }
  }
}
function Xe(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && he(() => {
      i.abort(fe);
    });
    var r = n.next;
    (n.f & bt) !== 0 ? n.parent = null : ot(n, e), n = r;
  }
}
function or(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    (e.f & J) === 0 && ot(e), e = n;
  }
}
function ot(t, e = !0) {
  var n = !1;
  (e || (t.f & Rn) !== 0) && t.nodes_start !== null && t.nodes_end !== null && (cr(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), n = !0), Xe(t, e && !n), Bt(t, 0), R(t, wt);
  var r = t.transitions;
  if (r !== null)
    for (const l of r)
      l.stop();
  $e(t);
  var i = t.parent;
  i !== null && i.first !== null && Ze(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
}
function cr(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ de(t)
    );
    t.remove(), t = n;
  }
}
function Ze(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function Je(t, e) {
  var n = [];
  pe(t, n, !0), Qe(n, () => {
    ot(t), e && e();
  });
}
function Qe(t, e) {
  var n = t.length;
  if (n > 0) {
    var r = () => --n || e();
    for (var i of t)
      i.out(r);
  } else
    e();
}
function pe(t, e, n) {
  if ((t.f & V) === 0) {
    if (t.f ^= V, t.transitions !== null)
      for (const a of t.transitions)
        (a.is_global || n) && e.push(a);
    for (var r = t.first; r !== null; ) {
      var i = r.next, l = (r.f & se) !== 0 || (r.f & J) !== 0;
      pe(r, e, l ? n : !1), r = i;
    }
  }
}
function ge(t) {
  tn(t, !0);
}
function tn(t, e) {
  if ((t.f & V) !== 0) {
    t.f ^= V, (t.f & L) === 0 && (R(t, j), pt(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, i = (n.f & se) !== 0 || (n.f & J) !== 0;
      tn(n, i ? e : !1), n = r;
    }
    if (t.transitions !== null)
      for (const l of t.transitions)
        (l.is_global || e) && l.in();
  }
}
let dt = !1;
function Ce(t) {
  dt = t;
}
let mt = !1;
function xe(t) {
  mt = t;
}
let w = null, W = !1;
function U(t) {
  w = t;
}
let m = null;
function G(t) {
  m = t;
}
let Z = null;
function vr(t) {
  w !== null && (Z === null ? Z = [t] : Z.push(t));
}
let N = null, O = 0, F = null;
function _r(t) {
  F = t;
}
let en = 1, St = 0, ut = St;
function Te(t) {
  ut = t;
}
let nt = !1;
function nn() {
  return ++en;
}
function Ht(t) {
  var e = t.f;
  if ((e & j) !== 0)
    return !0;
  if ((e & it) !== 0) {
    var n = t.deps, r = (e & B) !== 0;
    if (n !== null) {
      var i, l, a = (e & It) !== 0, f = r && m !== null && !nt, s = n.length;
      if ((a || f) && (m === null || (m.f & wt) === 0)) {
        var u = (
          /** @type {Derived} */
          t
        ), c = u.parent;
        for (i = 0; i < s; i++)
          l = n[i], (a || !l?.reactions?.includes(u)) && (l.reactions ??= []).push(u);
        a && (u.f ^= It), f && c !== null && (c.f & B) === 0 && (u.f ^= B);
      }
      for (i = 0; i < s; i++)
        if (l = n[i], Ht(
          /** @type {Derived} */
          l
        ) && Ve(
          /** @type {Derived} */
          l
        ), l.wv > t.wv)
          return !0;
    }
    (!r || m !== null && !nt) && R(t, L);
  }
  return !1;
}
function rn(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !Z?.includes(t))
    for (var i = 0; i < r.length; i++) {
      var l = r[i];
      (l.f & P) !== 0 ? rn(
        /** @type {Derived} */
        l,
        e,
        !1
      ) : e === l && (n ? R(l, j) : (l.f & L) !== 0 && R(l, it), pt(
        /** @type {Effect} */
        l
      ));
    }
}
function ln(t) {
  var e = N, n = O, r = F, i = w, l = nt, a = Z, f = M, s = W, u = ut, c = t.f;
  N = /** @type {null | Value[]} */
  null, O = 0, F = null, nt = (c & B) !== 0 && (W || !dt || w === null), w = (c & (J | bt)) === 0 ? t : null, Z = null, Ot(t.ctx), W = !1, ut = ++St, t.ac !== null && (he(() => {
    t.ac.abort(fe);
  }), t.ac = null);
  try {
    t.f |= Jt;
    var d = (
      /** @type {Function} */
      t.fn
    ), v = d(), _ = t.deps;
    if (N !== null) {
      var o;
      if (Bt(t, O), _ !== null && O > 0)
        for (_.length = O + N.length, o = 0; o < N.length; o++)
          _[O + o] = N[o];
      else
        t.deps = _ = N;
      if (!nt || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (c & P) !== 0 && /** @type {import('#client').Derived} */
      t.reactions !== null)
        for (o = O; o < _.length; o++)
          (_[o].reactions ??= []).push(t);
    } else _ !== null && O < _.length && (Bt(t, O), _.length = O);
    if (At() && F !== null && !W && _ !== null && (t.f & (P | it | j)) === 0)
      for (o = 0; o < /** @type {Source[]} */
      F.length; o++)
        rn(
          F[o],
          /** @type {Effect} */
          t
        );
    return i !== null && i !== t && (St++, F !== null && (r === null ? r = F : r.push(.../** @type {Source[]} */
    F))), (t.f & st) !== 0 && (t.f ^= st), v;
  } catch (h) {
    return $n(h);
  } finally {
    t.f ^= Jt, N = e, O = n, F = r, w = i, nt = l, Z = a, Ot(f), W = s, ut = u;
  }
}
function dr(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = An.call(n, t);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = e.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  n === null && (e.f & P) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (N === null || !N.includes(e)) && (R(e, it), (e.f & (B | It)) === 0 && (e.f ^= It), He(
    /** @type {Derived} **/
    e
  ), Bt(
    /** @type {Derived} **/
    e,
    0
  ));
}
function Bt(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      dr(t, n[r]);
}
function ht(t) {
  var e = t.f;
  if ((e & wt) === 0) {
    R(t, L);
    var n = m, r = dt;
    m = t, dt = !0;
    try {
      (e & gt) !== 0 ? or(t) : Xe(t), $e(t);
      var i = ln(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = en;
      var l;
      Me && mn && (t.f & j) !== 0 && t.deps;
    } finally {
      dt = r, m = n;
    }
  }
}
function C(t) {
  var e = t.f, n = (e & P) !== 0;
  if (w !== null && !W) {
    var r = m !== null && (m.f & wt) !== 0;
    if (!r && !Z?.includes(t)) {
      var i = w.deps;
      if ((w.f & Jt) !== 0)
        t.rv < St && (t.rv = St, N === null && i !== null && i[O] === t ? O++ : N === null ? N = [t] : (!nt || !N.includes(t)) && N.push(t));
      else {
        (w.deps ??= []).push(t);
        var l = t.reactions;
        l === null ? t.reactions = [w] : l.includes(w) || l.push(w);
      }
    }
  } else if (n && /** @type {Derived} */
  t.deps === null && /** @type {Derived} */
  t.effects === null) {
    var a = (
      /** @type {Derived} */
      t
    ), f = a.parent;
    f !== null && (f.f & B) === 0 && (a.f ^= B);
  }
  if (mt) {
    if (rt.has(t))
      return rt.get(t);
    if (n) {
      a = /** @type {Derived} */
      t;
      var s = a.v;
      return ((a.f & L) === 0 && a.reactions !== null || an(a)) && (s = ve(a)), rt.set(a, s), s;
    }
  } else n && (a = /** @type {Derived} */
  t, Ht(a) && Ve(a));
  if ((t.f & st) !== 0)
    throw t.v;
  return t.v;
}
function an(t) {
  if (t.v === T) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (rt.has(e) || (e.f & P) !== 0 && an(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function hr(t) {
  var e = W;
  try {
    return W = !0, t();
  } finally {
    W = e;
  }
}
const pr = -7169;
function R(t, e) {
  t.f = t.f & pr | e;
}
function gr(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (kt in t)
      ee(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && kt in n && ee(n);
      }
  }
}
function ee(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let r in t)
      try {
        ee(t[r], e);
      } catch {
      }
    const n = ie(t);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = De(n);
      for (let i in r) {
        const l = r[i].get;
        if (l)
          try {
            l.call(t);
          } catch {
          }
      }
    }
  }
}
function br(t, e, n, r = {}) {
  function i(l) {
    if (r.capture || wr.call(e, l), !l.cancelBubble)
      return he(() => n?.call(this, l));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? qe(() => {
    e.addEventListener(t, i, r);
  }) : e.addEventListener(t, i, r), i;
}
function I(t, e, n, r, i) {
  var l = { capture: r, passive: i }, a = br(t, e, n, l);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && sr(() => {
    e.removeEventListener(t, a, l);
  });
}
let Se = null;
function wr(t) {
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, i = t.composedPath?.() || [], l = (
    /** @type {null | Element} */
    i[0] || t.target
  );
  Se = t;
  var a = 0, f = Se === t && t.__root;
  if (f) {
    var s = i.indexOf(f);
    if (s !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var u = i.indexOf(e);
    if (u === -1)
      return;
    s <= u && (a = s);
  }
  if (l = /** @type {Element} */
  i[a] || t.target, l !== e) {
    Xt(t, "currentTarget", {
      configurable: !0,
      get() {
        return l || n;
      }
    });
    var c = w, d = m;
    U(null), G(null);
    try {
      for (var v, _ = []; l !== null; ) {
        var o = l.assignedSlot || l.parentNode || /** @type {any} */
        l.host || null;
        try {
          var h = l["__" + r];
          if (h != null && (!/** @type {any} */
          l.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === l))
            if (re(h)) {
              var [g, ...E] = h;
              g.apply(l, [t, ...E]);
            } else
              h.call(l, t);
        } catch (b) {
          v ? _.push(b) : v = b;
        }
        if (t.cancelBubble || o === e || o === null)
          break;
        l = o;
      }
      if (v) {
        for (let b of _)
          queueMicrotask(() => {
            throw b;
          });
        throw v;
      }
    } finally {
      t.__root = e, delete t.currentTarget, U(c), G(d);
    }
  }
}
function mr(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function Ae(t, e) {
  var n = (
    /** @type {Effect} */
    m
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function Vt(t, e) {
  var n = (e & xn) !== 0, r = (e & Tn) !== 0, i, l = !t.startsWith("<!>");
  return () => {
    i === void 0 && (i = mr(l ? t : "<!>" + t), n || (i = /** @type {Node} */
    /* @__PURE__ */ te(i)));
    var a = (
      /** @type {TemplateNode} */
      r || nr ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ te(a)
      ), s = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      Ae(f, s);
    } else
      Ae(a, a);
    return a;
  };
}
function Dt(t, e) {
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function yr(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ??= t.nodeValue) && (t.__t = n, t.nodeValue = n + "");
}
function Er(t, e, n = !1) {
  var r = t, i = null, l = null, a = T, f = n ? se : 0, s = !1;
  const u = (_, o = !0) => {
    s = !0, v(o, _);
  };
  var c = null;
  function d() {
    c !== null && (c.lastChild.remove(), r.before(c), c = null);
    var _ = a ? i : l, o = a ? l : i;
    _ && ge(_), o && Je(o, () => {
      a ? l = null : i = null;
    });
  }
  const v = (_, o) => {
    if (a !== (a = _)) {
      var h = ze(), g = r;
      if (h && (c = document.createDocumentFragment(), c.append(g = _e())), a ? i ??= o && qt(() => o(g)) : l ??= o && qt(() => o(g)), h) {
        var E = (
          /** @type {Batch} */
          S
        ), b = a ? i : l, y = a ? l : i;
        b && E.skipped_effects.delete(b), y && E.skipped_effects.add(y), E.add_callback(d);
      } else
        d();
    }
  };
  Ke(() => {
    s = !1, e(u), s || v(null, null);
  }, f);
}
function kr(t, e) {
  return e;
}
function Cr(t, e, n) {
  for (var r = t.items, i = [], l = e.length, a = 0; a < l; a++)
    pe(e[a].e, i, !0);
  var f = l > 0 && i.length === 0 && n !== null;
  if (f) {
    var s = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    lr(s), s.append(
      /** @type {Element} */
      n
    ), r.clear(), z(t, e[0].prev, e[l - 1].next);
  }
  Qe(i, () => {
    for (var u = 0; u < l; u++) {
      var c = e[u];
      f || (r.delete(c.k), z(t, c.prev, c.next)), ot(c.e, !f);
    }
  });
}
function xr(t, e, n, r, i, l = null) {
  var a = t, f = { flags: e, items: /* @__PURE__ */ new Map(), first: null };
  {
    var s = (
      /** @type {Element} */
      t
    );
    a = s.appendChild(_e());
  }
  var u = null, c = !1, d = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ Ue(() => {
    var g = n();
    return re(g) ? g : g == null ? [] : Ne(g);
  }), _, o;
  function h() {
    Tr(
      o,
      _,
      f,
      d,
      a,
      i,
      e,
      r,
      n
    ), l !== null && (_.length === 0 ? u ? ge(u) : u = qt(() => l(a)) : u !== null && Je(u, () => {
      u = null;
    }));
  }
  Ke(() => {
    o ??= /** @type {Effect} */
    m, _ = /** @type {V[]} */
    C(v);
    var g = _.length;
    if (!(c && g === 0)) {
      c = g === 0;
      var E, b, y, x;
      if (ze()) {
        var H = /* @__PURE__ */ new Set(), K = (
          /** @type {Batch} */
          S
        );
        for (b = 0; b < g; b += 1) {
          y = _[b], x = r(y, b);
          var lt = f.items.get(x) ?? d.get(x);
          lt ? sn(lt, y, b) : (E = un(
            null,
            f,
            null,
            null,
            y,
            x,
            b,
            i,
            e,
            n,
            !0
          ), d.set(x, E)), H.add(x);
        }
        for (const [Q, A] of f.items)
          H.has(Q) || K.skipped_effects.add(A.e);
        K.add_callback(h);
      } else
        h();
      C(v);
    }
  });
}
function Tr(t, e, n, r, i, l, a, f, s) {
  var u = e.length, c = n.items, d = n.first, v = d, _, o = null, h = [], g = [], E, b, y, x;
  for (x = 0; x < u; x += 1) {
    if (E = e[x], b = f(E, x), y = c.get(b), y === void 0) {
      var H = r.get(b);
      if (H !== void 0) {
        r.delete(b), c.set(b, H);
        var K = o ? o.next : v;
        z(n, o, H), z(n, H, K), $t(H, K, i), o = H;
      } else {
        var lt = v ? (
          /** @type {TemplateNode} */
          v.e.nodes_start
        ) : i;
        o = un(
          lt,
          n,
          o,
          o === null ? n.first : o.next,
          E,
          b,
          x,
          l,
          a,
          s
        );
      }
      c.set(b, o), h = [], g = [], v = o.next;
      continue;
    }
    if (sn(y, E, x), (y.e.f & V) !== 0 && ge(y.e), y !== v) {
      if (_ !== void 0 && _.has(y)) {
        if (h.length < g.length) {
          var Q = g[0], A;
          o = Q.prev;
          var tt = h[0], $ = h[h.length - 1];
          for (A = 0; A < h.length; A += 1)
            $t(h[A], Q, i);
          for (A = 0; A < g.length; A += 1)
            _.delete(g[A]);
          z(n, tt.prev, $.next), z(n, o, tt), z(n, $, Q), v = Q, o = $, x -= 1, h = [], g = [];
        } else
          _.delete(y), $t(y, v, i), z(n, y.prev, y.next), z(n, y, o === null ? n.first : o.next), z(n, o, y), o = y;
        continue;
      }
      for (h = [], g = []; v !== null && v.k !== b; )
        (v.e.f & V) === 0 && (_ ??= /* @__PURE__ */ new Set()).add(v), g.push(v), v = v.next;
      if (v === null)
        continue;
      y = v;
    }
    h.push(y), o = y, v = y.next;
  }
  if (v !== null || _ !== void 0) {
    for (var X = _ === void 0 ? [] : Ne(_); v !== null; )
      (v.e.f & V) === 0 && X.push(v), v = v.next;
    var ct = X.length;
    if (ct > 0) {
      var Lt = u === 0 ? i : null;
      Cr(n, X, Lt);
    }
  }
  t.first = n.first && n.first.e, t.last = o && o.e;
  for (var Yt of r.values())
    ot(Yt.e);
  r.clear();
}
function sn(t, e, n, r) {
  Ft(t.v, e), t.i = n;
}
function un(t, e, n, r, i, l, a, f, s, u, c) {
  var d = (s & En) !== 0, v = (s & Cn) === 0, _ = d ? v ? /* @__PURE__ */ Rt(i, !1, !1) : Tt(i) : i, o = (s & kn) === 0 ? a : Tt(a), h = {
    i: o,
    v: _,
    k: l,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  try {
    if (t === null) {
      var g = document.createDocumentFragment();
      g.append(t = _e());
    }
    return h.e = qt(() => f(
      /** @type {Node} */
      t,
      _,
      o,
      u
    ), Vn), h.e.prev = n && n.e, h.e.next = r && r.e, n === null ? c || (e.first = h) : (n.next = h, n.e.next = h.e), r !== null && (r.prev = h, r.e.prev = h.e), h;
  } finally {
  }
}
function $t(t, e, n) {
  for (var r = t.next ? (
    /** @type {TemplateNode} */
    t.next.e.nodes_start
  ) : n, i = e ? (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ) : n, l = (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ); l !== null && l !== r; ) {
    var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ de(l)
    );
    i.before(l), l = a;
  }
}
function z(t, e, n) {
  e === null ? t.first = n : (e.next = n, e.e.next = n && n.e), n !== null && (n.prev = e, n.e.prev = e && e.e);
}
const Sr = Symbol("is custom element"), Ar = Symbol("is html");
function Lr(t, e, n, r) {
  var i = Mr(t);
  i[e] !== (i[e] = n) && (e === "loading" && (t[In] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && fn(t).includes(e) ? t[e] = n : t.setAttribute(e, n));
}
function p(t, e, n) {
  var r = w, i = m;
  U(null), G(null);
  try {
    // `style` should use `set_attribute` rather than the setter
    e !== "style" && // Don't compute setters for custom elements while they aren't registered yet,
    // because during their upgrade/instantiation they might add more setters.
    // Instead, fall back to a simple "an object, then set as property" heuristic.
    (ne.has(t.getAttribute("is") || t.nodeName) || // customElements may not be available in browser extension contexts
    !customElements || customElements.get(t.getAttribute("is") || t.tagName.toLowerCase()) ? fn(t).includes(e) : n && typeof n == "object") ? t[e] = n : Lr(t, e, n == null ? n : String(n));
  } finally {
    U(r), G(i);
  }
}
function Mr(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ??= {
      [Sr]: t.nodeName.includes("-"),
      [Ar]: t.namespaceURI === Sn
    }
  );
}
var ne = /* @__PURE__ */ new Map();
function fn(t) {
  var e = t.getAttribute("is") || t.nodeName, n = ne.get(e);
  if (n) return n;
  ne.set(e, n = []);
  for (var r, i = t, l = Element.prototype; l !== i; ) {
    r = De(i);
    for (var a in r)
      r[a].set && n.push(a);
    i = ie(i);
  }
  return n;
}
function Nr(t = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    M
  ), n = e.l.u;
  if (!n) return;
  let r = () => gr(e.s);
  if (t) {
    let i = 0, l = (
      /** @type {Record<string, any>} */
      {}
    );
    const a = /* @__PURE__ */ ce(() => {
      let f = !1;
      const s = e.s;
      for (const u in s)
        s[u] !== l[u] && (l[u] = s[u], f = !0);
      return f && i++, i;
    });
    r = () => C(a);
  }
  n.b.length && ur(() => {
    Le(e, r), Zt(n.b);
  }), ke(() => {
    const i = hr(() => n.m.map(Nn));
    return () => {
      for (const l of i)
        typeof l == "function" && l();
    };
  }), n.a.length && ke(() => {
    Le(e, r), Zt(n.a);
  });
}
function Le(t, e) {
  if (t.l.s)
    for (const n of t.l.s) C(n);
  e();
}
var Dr = /* @__PURE__ */ Vt('<p class="empty-state svelte-1pf13wd">No actions yet. Click some buttons above!</p>'), Rr = /* @__PURE__ */ Vt('<li class="svelte-1pf13wd"> </li>'), Ir = /* @__PURE__ */ Vt('<ul class="svelte-1pf13wd"></ul>'), Or = /* @__PURE__ */ Vt('<div class="demo-container svelte-1pf13wd"><h2>IconButton Svelte Integration Demo</h2> <div class="demo-section svelte-1pf13wd"><h3 class="svelte-1pf13wd">Basic Icon Buttons</h3> <div class="button-group svelte-1pf13wd"><ag-icon-button></ag-icon-button> <ag-icon-button></ag-icon-button> <ag-icon-button></ag-icon-button> <ag-icon-button></ag-icon-button></div></div> <div class="demo-section svelte-1pf13wd"><h3 class="svelte-1pf13wd">Custom Icon with SVG</h3> <div class="button-group svelte-1pf13wd"><ag-icon-button><svg viewBox="0 0 24 24" style="width: 1em; height: 1em; fill: currentColor;"><path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11.03L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11.03C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"></path></svg></ag-icon-button></div></div> <div class="demo-section svelte-1pf13wd"><h3 class="svelte-1pf13wd">Different Sizes</h3> <div class="button-group svelte-1pf13wd"><ag-icon-button></ag-icon-button> <ag-icon-button></ag-icon-button> <ag-icon-button></ag-icon-button> <ag-icon-button></ag-icon-button> <ag-icon-button></ag-icon-button></div></div> <div class="demo-section svelte-1pf13wd"><h3 class="svelte-1pf13wd">Loading State</h3> <div class="button-group svelte-1pf13wd"><ag-icon-button><span slot="loading" style="font-size: 0.75em;">Saving...</span></ag-icon-button></div></div> <div class="demo-section svelte-1pf13wd"><h3 class="svelte-1pf13wd">Disabled State</h3> <div class="button-group svelte-1pf13wd"><ag-icon-button></ag-icon-button></div></div> <div class="demo-section svelte-1pf13wd"><h3 class="svelte-1pf13wd">Action Log</h3> <div class="action-log svelte-1pf13wd"><button class="clear-button svelte-1pf13wd">Clear Log</button> <!></div></div></div>', 2);
function qr(t, e) {
  zn(e, !1);
  let n = !1, r = /* @__PURE__ */ Rt(!1), i = /* @__PURE__ */ Rt(!1), l = /* @__PURE__ */ Rt([]);
  function a() {
    n = !n, d(`Close button ${n ? "pressed" : "released"}`);
  }
  function f() {
    q(r, !C(r)), d(`Menu button ${C(r) ? "opened" : "closed"}`);
  }
  async function s() {
    C(i) || (q(i, !0), d("Save started..."), await new Promise((Y) => setTimeout(Y, 2e3)), q(i, !1), d("Save completed!"));
  }
  function u() {
    d("Edit button clicked");
  }
  function c() {
    confirm("Are you sure you want to delete this item?") && d("Item deleted");
  }
  function d(Y) {
    q(l, [
      `${(/* @__PURE__ */ new Date()).toLocaleTimeString()}: ${Y}`,
      ...C(
        l
        // Keep last 10 actions
      ).slice(0, 9)
    ]);
  }
  function v() {
    q(l, []);
  }
  Nr();
  var _ = Or(), o = k(D(_), 2), h = k(D(o), 2), g = D(h);
  p(g, "label", "Close"), p(g, "unicode", "×"), p(g, "variant", "ghost");
  var E = k(g, 2);
  p(E, "label", "Menu"), p(E, "unicode", "☰"), yt(() => p(E, "pressed", C(r)));
  var b = k(E, 2);
  p(b, "label", "Edit"), p(b, "unicode", "✎"), p(b, "variant", "primary");
  var y = k(b, 2);
  p(y, "label", "Delete"), p(y, "unicode", "🗑"), p(y, "variant", "danger");
  var x = k(o, 2), H = k(D(x), 2), K = D(H);
  p(K, "label", "Settings"), p(K, "variant", "secondary");
  var lt = k(x, 2), Q = k(D(lt), 2), A = D(Q);
  p(A, "label", "Extra small"), p(A, "unicode", "×"), p(A, "size", "xs");
  var tt = k(A, 2);
  p(tt, "label", "Small"), p(tt, "unicode", "×"), p(tt, "size", "sm");
  var $ = k(tt, 2);
  p($, "label", "Medium"), p($, "unicode", "×"), p($, "size", "md");
  var X = k($, 2);
  p(X, "label", "Large"), p(X, "unicode", "×"), p(X, "size", "lg");
  var ct = k(X, 2);
  p(ct, "label", "Extra large"), p(ct, "unicode", "×"), p(ct, "size", "xl");
  var Lt = k(lt, 2), Yt = k(D(Lt), 2), vt = D(Yt);
  p(vt, "label", "Save"), p(vt, "unicode", "💾"), yt(() => p(vt, "loading", C(i))), yt(() => p(vt, "disabled", C(i))), p(vt, "variant", "primary");
  var be = k(Lt, 2), on = k(D(be), 2), Mt = D(on);
  p(Mt, "label", "Disabled button"), p(Mt, "unicode", "🚫"), p(Mt, "disabled", !0);
  var cn = k(be, 2), vn = k(D(cn), 2), zt = D(vn), _n = k(zt, 2);
  {
    var dn = (Y) => {
      var Nt = Dr();
      Dt(Y, Nt);
    }, hn = (Y) => {
      var Nt = Ir();
      xr(Nt, 5, () => C(l), kr, (pn, gn) => {
        var we = Rr(), bn = D(we);
        yt(() => yr(bn, C(gn))), Dt(pn, we);
      }), Dt(Y, Nt);
    };
    Er(_n, (Y) => {
      C(l).length === 0 ? Y(dn) : Y(hn, !1);
    });
  }
  yt(() => zt.disabled = C(l).length === 0), I("icon-button-click", g, a), I("icon-button-click", E, f), I("icon-button-click", b, u), I("icon-button-click", y, c), I("icon-button-click", K, () => d("Settings opened")), I("icon-button-click", A, () => d("XS button clicked")), I("icon-button-click", tt, () => d("Small button clicked")), I("icon-button-click", $, () => d("Medium button clicked")), I("icon-button-click", X, () => d("Large button clicked")), I("icon-button-click", ct, () => d("XL button clicked")), I("icon-button-click", vt, s), I("icon-button-click", Mt, () => d("This should not fire")), I("click", zt, v), Dt(t, _), Wn();
}
export {
  qr as default
};
