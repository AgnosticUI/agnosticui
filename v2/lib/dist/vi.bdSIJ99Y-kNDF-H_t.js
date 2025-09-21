import { g as sl } from "./_commonjsHelpers-DaMA6jEr.js";
var il = {
  reset: [0, 0],
  bold: [1, 22, "\x1B[22m\x1B[1m"],
  dim: [2, 22, "\x1B[22m\x1B[2m"],
  italic: [3, 23],
  underline: [4, 24],
  inverse: [7, 27],
  hidden: [8, 28],
  strikethrough: [9, 29],
  black: [30, 39],
  red: [31, 39],
  green: [32, 39],
  yellow: [33, 39],
  blue: [34, 39],
  magenta: [35, 39],
  cyan: [36, 39],
  white: [37, 39],
  gray: [90, 39],
  bgBlack: [40, 49],
  bgRed: [41, 49],
  bgGreen: [42, 49],
  bgYellow: [43, 49],
  bgBlue: [44, 49],
  bgMagenta: [45, 49],
  bgCyan: [46, 49],
  bgWhite: [47, 49],
  blackBright: [90, 39],
  redBright: [91, 39],
  greenBright: [92, 39],
  yellowBright: [93, 39],
  blueBright: [94, 39],
  magentaBright: [95, 39],
  cyanBright: [96, 39],
  whiteBright: [97, 39],
  bgBlackBright: [100, 49],
  bgRedBright: [101, 49],
  bgGreenBright: [102, 49],
  bgYellowBright: [103, 49],
  bgBlueBright: [104, 49],
  bgMagentaBright: [105, 49],
  bgCyanBright: [106, 49],
  bgWhiteBright: [107, 49]
}, al = Object.entries(il);
function Io(e) {
  return String(e);
}
Io.open = "";
Io.close = "";
function cl(e = !1) {
  let t = typeof process < "u" ? process : void 0, n = t?.env || {}, r = t?.argv || [];
  return !("NO_COLOR" in n || r.includes("--no-color")) && ("FORCE_COLOR" in n || r.includes("--color") || t?.platform === "win32" || e && n.TERM !== "dumb" || "CI" in n) || typeof window < "u" && !!window.chrome;
}
function ul(e = !1) {
  let t = cl(e), n = (i, a, u, c) => {
    let l = "", f = 0;
    do
      l += i.substring(f, c) + u, f = c + a.length, c = i.indexOf(a, f);
    while (~c);
    return l + i.substring(f);
  }, r = (i, a, u = i) => {
    let c = (l) => {
      let f = String(l), d = f.indexOf(a, i.length);
      return ~d ? i + n(f, a, u, d) + a : i + f + a;
    };
    return c.open = i, c.close = a, c;
  }, o = {
    isColorSupported: t
  }, s = (i) => `\x1B[${i}m`;
  for (let [i, a] of al)
    o[i] = t ? r(
      s(a[0]),
      s(a[1]),
      a[2]
    ) : Io;
  return o;
}
var de = ul();
function Ya(e, t) {
  return t.forEach(function(n) {
    n && typeof n != "string" && !Array.isArray(n) && Object.keys(n).forEach(function(r) {
      if (r !== "default" && !(r in e)) {
        var o = Object.getOwnPropertyDescriptor(n, r);
        Object.defineProperty(e, r, o.get ? o : {
          enumerable: !0,
          get: function() {
            return n[r];
          }
        });
      }
    });
  }), Object.freeze(e);
}
function ll(e, t) {
  const n = Object.keys(e), r = t === null ? n : n.sort(t);
  if (Object.getOwnPropertySymbols)
    for (const o of Object.getOwnPropertySymbols(e))
      Object.getOwnPropertyDescriptor(e, o).enumerable && r.push(o);
  return r;
}
function an(e, t, n, r, o, s, i = ": ") {
  let a = "", u = 0, c = e.next();
  if (!c.done) {
    a += t.spacingOuter;
    const l = n + t.indent;
    for (; !c.done; ) {
      if (a += l, u++ === t.maxWidth) {
        a += "…";
        break;
      }
      const f = s(c.value[0], t, l, r, o), d = s(c.value[1], t, l, r, o);
      a += f + i + d, c = e.next(), c.done ? t.min || (a += ",") : a += `,${t.spacingInner}`;
    }
    a += t.spacingOuter + n;
  }
  return a;
}
function Co(e, t, n, r, o, s) {
  let i = "", a = 0, u = e.next();
  if (!u.done) {
    i += t.spacingOuter;
    const c = n + t.indent;
    for (; !u.done; ) {
      if (i += c, a++ === t.maxWidth) {
        i += "…";
        break;
      }
      i += s(u.value, t, c, r, o), u = e.next(), u.done ? t.min || (i += ",") : i += `,${t.spacingInner}`;
    }
    i += t.spacingOuter + n;
  }
  return i;
}
function kn(e, t, n, r, o, s) {
  let i = "";
  e = e instanceof ArrayBuffer ? new DataView(e) : e;
  const a = (c) => c instanceof DataView, u = a(e) ? e.byteLength : e.length;
  if (u > 0) {
    i += t.spacingOuter;
    const c = n + t.indent;
    for (let l = 0; l < u; l++) {
      if (i += c, l === t.maxWidth) {
        i += "…";
        break;
      }
      (a(e) || l in e) && (i += s(a(e) ? e.getInt8(l) : e[l], t, c, r, o)), l < u - 1 ? i += `,${t.spacingInner}` : t.min || (i += ",");
    }
    i += t.spacingOuter + n;
  }
  return i;
}
function Oo(e, t, n, r, o, s) {
  let i = "";
  const a = ll(e, t.compareKeys);
  if (a.length > 0) {
    i += t.spacingOuter;
    const u = n + t.indent;
    for (let c = 0; c < a.length; c++) {
      const l = a[c], f = s(l, t, u, r, o), d = s(e[l], t, u, r, o);
      i += `${u + f}: ${d}`, c < a.length - 1 ? i += `,${t.spacingInner}` : t.min || (i += ",");
    }
    i += t.spacingOuter + n;
  }
  return i;
}
const fl = typeof Symbol == "function" && Symbol.for ? Symbol.for("jest.asymmetricMatcher") : 1267621, gn = " ", hl = (e, t, n, r, o, s) => {
  const i = e.toString();
  if (i === "ArrayContaining" || i === "ArrayNotContaining")
    return ++r > t.maxDepth ? `[${i}]` : `${i + gn}[${kn(e.sample, t, n, r, o, s)}]`;
  if (i === "ObjectContaining" || i === "ObjectNotContaining")
    return ++r > t.maxDepth ? `[${i}]` : `${i + gn}{${Oo(e.sample, t, n, r, o, s)}}`;
  if (i === "StringMatching" || i === "StringNotMatching" || i === "StringContaining" || i === "StringNotContaining")
    return i + gn + s(e.sample, t, n, r, o);
  if (typeof e.toAsymmetricMatcher != "function")
    throw new TypeError(`Asymmetric matcher ${e.constructor.name} does not implement toAsymmetricMatcher()`);
  return e.toAsymmetricMatcher();
}, dl = (e) => e && e.$$typeof === fl, pl = {
  serialize: hl,
  test: dl
}, ml = " ", Ga = /* @__PURE__ */ new Set(["DOMStringMap", "NamedNodeMap"]), gl = /^(?:HTML\w*Collection|NodeList)$/;
function yl(e) {
  return Ga.has(e) || gl.test(e);
}
const bl = (e) => e && e.constructor && !!e.constructor.name && yl(e.constructor.name);
function wl(e) {
  return e.constructor.name === "NamedNodeMap";
}
const Sl = (e, t, n, r, o, s) => {
  const i = e.constructor.name;
  return ++r > t.maxDepth ? `[${i}]` : (t.min ? "" : i + ml) + (Ga.has(i) ? `{${Oo(wl(e) ? [...e].reduce((a, u) => (a[u.name] = u.value, a), {}) : { ...e }, t, n, r, o, s)}}` : `[${kn([...e], t, n, r, o, s)}]`);
}, Tl = {
  serialize: Sl,
  test: bl
};
function Ha(e) {
  return e.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
function Ao(e, t, n, r, o, s, i) {
  const a = r + n.indent, u = n.colors;
  return e.map((c) => {
    const l = t[c];
    let f = i(l, n, a, o, s);
    return typeof l != "string" && (f.includes(`
`) && (f = n.spacingOuter + a + f + n.spacingOuter + r), f = `{${f}}`), `${n.spacingInner + r + u.prop.open + c + u.prop.close}=${u.value.open}${f}${u.value.close}`;
  }).join("");
}
function Mo(e, t, n, r, o, s) {
  return e.map((i) => t.spacingOuter + n + (typeof i == "string" ? Za(i, t) : s(i, t, n, r, o))).join("");
}
function Za(e, t) {
  const n = t.colors.content;
  return n.open + Ha(e) + n.close;
}
function El(e, t) {
  const n = t.colors.comment;
  return `${n.open}<!--${Ha(e)}-->${n.close}`;
}
function Po(e, t, n, r, o) {
  const s = r.colors.tag;
  return `${s.open}<${e}${t && s.close + t + r.spacingOuter + o + s.open}${n ? `>${s.close}${n}${r.spacingOuter}${o}${s.open}</${e}` : `${t && !r.min ? "" : " "}/`}>${s.close}`;
}
function No(e, t) {
  const n = t.colors.tag;
  return `${n.open}<${e}${n.close} …${n.open} />${n.close}`;
}
const vl = 1, Qa = 3, ec = 8, tc = 11, xl = /^(?:(?:HTML|SVG)\w*)?Element$/;
function $l(e) {
  try {
    return typeof e.hasAttribute == "function" && e.hasAttribute("is");
  } catch {
    return !1;
  }
}
function _l(e) {
  const t = e.constructor.name, { nodeType: n, tagName: r } = e, o = typeof r == "string" && r.includes("-") || $l(e);
  return n === vl && (xl.test(t) || o) || n === Qa && t === "Text" || n === ec && t === "Comment" || n === tc && t === "DocumentFragment";
}
const Il = (e) => {
  var t;
  return (e == null || (t = e.constructor) === null || t === void 0 ? void 0 : t.name) && _l(e);
};
function Cl(e) {
  return e.nodeType === Qa;
}
function Ol(e) {
  return e.nodeType === ec;
}
function dr(e) {
  return e.nodeType === tc;
}
const Al = (e, t, n, r, o, s) => {
  if (Cl(e))
    return Za(e.data, t);
  if (Ol(e))
    return El(e.data, t);
  const i = dr(e) ? "DocumentFragment" : e.tagName.toLowerCase();
  return ++r > t.maxDepth ? No(i, t) : Po(i, Ao(dr(e) ? [] : Array.from(e.attributes, (a) => a.name).sort(), dr(e) ? {} : [...e.attributes].reduce((a, u) => (a[u.name] = u.value, a), {}), t, n + t.indent, r, o, s), Mo(Array.prototype.slice.call(e.childNodes || e.children), t, n + t.indent, r, o, s), t, n);
}, Ml = {
  serialize: Al,
  test: Il
}, Pl = "@@__IMMUTABLE_ITERABLE__@@", Nl = "@@__IMMUTABLE_LIST__@@", kl = "@@__IMMUTABLE_KEYED__@@", jl = "@@__IMMUTABLE_MAP__@@", ks = "@@__IMMUTABLE_ORDERED__@@", Rl = "@@__IMMUTABLE_RECORD__@@", Fl = "@@__IMMUTABLE_SEQ__@@", Dl = "@@__IMMUTABLE_SET__@@", Ll = "@@__IMMUTABLE_STACK__@@", kt = (e) => `Immutable.${e}`, Kn = (e) => `[${e}]`, en = " ", js = "…";
function ql(e, t, n, r, o, s, i) {
  return ++r > t.maxDepth ? Kn(kt(i)) : `${kt(i) + en}{${an(e.entries(), t, n, r, o, s)}}`;
}
function Bl(e) {
  let t = 0;
  return { next() {
    if (t < e._keys.length) {
      const n = e._keys[t++];
      return {
        done: !1,
        value: [n, e.get(n)]
      };
    }
    return {
      done: !0,
      value: void 0
    };
  } };
}
function zl(e, t, n, r, o, s) {
  const i = kt(e._name || "Record");
  return ++r > t.maxDepth ? Kn(i) : `${i + en}{${an(Bl(e), t, n, r, o, s)}}`;
}
function Wl(e, t, n, r, o, s) {
  const i = kt("Seq");
  return ++r > t.maxDepth ? Kn(i) : e[kl] ? `${i + en}{${e._iter || e._object ? an(e.entries(), t, n, r, o, s) : js}}` : `${i + en}[${e._iter || e._array || e._collection || e._iterable ? Co(e.values(), t, n, r, o, s) : js}]`;
}
function pr(e, t, n, r, o, s, i) {
  return ++r > t.maxDepth ? Kn(kt(i)) : `${kt(i) + en}[${Co(e.values(), t, n, r, o, s)}]`;
}
const Jl = (e, t, n, r, o, s) => e[jl] ? ql(e, t, n, r, o, s, e[ks] ? "OrderedMap" : "Map") : e[Nl] ? pr(e, t, n, r, o, s, "List") : e[Dl] ? pr(e, t, n, r, o, s, e[ks] ? "OrderedSet" : "Set") : e[Ll] ? pr(e, t, n, r, o, s, "Stack") : e[Fl] ? Wl(e, t, n, r, o, s) : zl(e, t, n, r, o, s), Vl = (e) => e && (e[Pl] === !0 || e[Rl] === !0), Ul = {
  serialize: Jl,
  test: Vl
};
function nc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var yn = { exports: {} }, ae = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rs;
function Xl() {
  if (Rs) return ae;
  Rs = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), i = Symbol.for("react.context"), a = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), d = Symbol.for("react.view_transition"), h = Symbol.for("react.client.reference");
  function m(p) {
    if (typeof p == "object" && p !== null) {
      var b = p.$$typeof;
      switch (b) {
        case e:
          switch (p = p.type, p) {
            case n:
            case o:
            case r:
            case u:
            case c:
            case d:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case i:
                case a:
                case f:
                case l:
                  return p;
                case s:
                  return p;
                default:
                  return b;
              }
          }
        case t:
          return b;
      }
    }
  }
  return ae.ContextConsumer = s, ae.ContextProvider = i, ae.Element = e, ae.ForwardRef = a, ae.Fragment = n, ae.Lazy = f, ae.Memo = l, ae.Portal = t, ae.Profiler = o, ae.StrictMode = r, ae.Suspense = u, ae.SuspenseList = c, ae.isContextConsumer = function(p) {
    return m(p) === s;
  }, ae.isContextProvider = function(p) {
    return m(p) === i;
  }, ae.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, ae.isForwardRef = function(p) {
    return m(p) === a;
  }, ae.isFragment = function(p) {
    return m(p) === n;
  }, ae.isLazy = function(p) {
    return m(p) === f;
  }, ae.isMemo = function(p) {
    return m(p) === l;
  }, ae.isPortal = function(p) {
    return m(p) === t;
  }, ae.isProfiler = function(p) {
    return m(p) === o;
  }, ae.isStrictMode = function(p) {
    return m(p) === r;
  }, ae.isSuspense = function(p) {
    return m(p) === u;
  }, ae.isSuspenseList = function(p) {
    return m(p) === c;
  }, ae.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === n || p === o || p === r || p === u || p === c || typeof p == "object" && p !== null && (p.$$typeof === f || p.$$typeof === l || p.$$typeof === i || p.$$typeof === s || p.$$typeof === a || p.$$typeof === h || p.getModuleId !== void 0);
  }, ae.typeOf = m, ae;
}
var ce = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fs;
function Kl() {
  return Fs || (Fs = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(p) {
      if (typeof p == "object" && p !== null) {
        var b = p.$$typeof;
        switch (b) {
          case t:
            switch (p = p.type, p) {
              case r:
              case s:
              case o:
              case c:
              case l:
              case h:
                return p;
              default:
                switch (p = p && p.$$typeof, p) {
                  case a:
                  case u:
                  case d:
                  case f:
                    return p;
                  case i:
                    return p;
                  default:
                    return b;
                }
            }
          case n:
            return b;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), a = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), h = Symbol.for("react.view_transition"), m = Symbol.for("react.client.reference");
    ce.ContextConsumer = i, ce.ContextProvider = a, ce.Element = t, ce.ForwardRef = u, ce.Fragment = r, ce.Lazy = d, ce.Memo = f, ce.Portal = n, ce.Profiler = s, ce.StrictMode = o, ce.Suspense = c, ce.SuspenseList = l, ce.isContextConsumer = function(p) {
      return e(p) === i;
    }, ce.isContextProvider = function(p) {
      return e(p) === a;
    }, ce.isElement = function(p) {
      return typeof p == "object" && p !== null && p.$$typeof === t;
    }, ce.isForwardRef = function(p) {
      return e(p) === u;
    }, ce.isFragment = function(p) {
      return e(p) === r;
    }, ce.isLazy = function(p) {
      return e(p) === d;
    }, ce.isMemo = function(p) {
      return e(p) === f;
    }, ce.isPortal = function(p) {
      return e(p) === n;
    }, ce.isProfiler = function(p) {
      return e(p) === s;
    }, ce.isStrictMode = function(p) {
      return e(p) === o;
    }, ce.isSuspense = function(p) {
      return e(p) === c;
    }, ce.isSuspenseList = function(p) {
      return e(p) === l;
    }, ce.isValidElementType = function(p) {
      return typeof p == "string" || typeof p == "function" || p === r || p === s || p === o || p === c || p === l || typeof p == "object" && p !== null && (p.$$typeof === d || p.$$typeof === f || p.$$typeof === a || p.$$typeof === i || p.$$typeof === u || p.$$typeof === m || p.getModuleId !== void 0);
    }, ce.typeOf = e;
  })()), ce;
}
var Ds;
function Yl() {
  return Ds || (Ds = 1, process.env.NODE_ENV === "production" ? yn.exports = Xl() : yn.exports = Kl()), yn.exports;
}
var rc = Yl(), Gl = /* @__PURE__ */ nc(rc), Hl = /* @__PURE__ */ Ya({
  __proto__: null,
  default: Gl
}, [rc]), bn = { exports: {} }, oe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ls;
function Zl() {
  if (Ls) return oe;
  Ls = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), a = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), m;
  m = Symbol.for("react.module.reference");
  function p(b) {
    if (typeof b == "object" && b !== null) {
      var S = b.$$typeof;
      switch (S) {
        case e:
          switch (b = b.type, b) {
            case n:
            case o:
            case r:
            case c:
            case l:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case a:
                case i:
                case u:
                case d:
                case f:
                case s:
                  return b;
                default:
                  return S;
              }
          }
        case t:
          return S;
      }
    }
  }
  return oe.ContextConsumer = i, oe.ContextProvider = s, oe.Element = e, oe.ForwardRef = u, oe.Fragment = n, oe.Lazy = d, oe.Memo = f, oe.Portal = t, oe.Profiler = o, oe.StrictMode = r, oe.Suspense = c, oe.SuspenseList = l, oe.isAsyncMode = function() {
    return !1;
  }, oe.isConcurrentMode = function() {
    return !1;
  }, oe.isContextConsumer = function(b) {
    return p(b) === i;
  }, oe.isContextProvider = function(b) {
    return p(b) === s;
  }, oe.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === e;
  }, oe.isForwardRef = function(b) {
    return p(b) === u;
  }, oe.isFragment = function(b) {
    return p(b) === n;
  }, oe.isLazy = function(b) {
    return p(b) === d;
  }, oe.isMemo = function(b) {
    return p(b) === f;
  }, oe.isPortal = function(b) {
    return p(b) === t;
  }, oe.isProfiler = function(b) {
    return p(b) === o;
  }, oe.isStrictMode = function(b) {
    return p(b) === r;
  }, oe.isSuspense = function(b) {
    return p(b) === c;
  }, oe.isSuspenseList = function(b) {
    return p(b) === l;
  }, oe.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === n || b === o || b === r || b === c || b === l || b === h || typeof b == "object" && b !== null && (b.$$typeof === d || b.$$typeof === f || b.$$typeof === s || b.$$typeof === i || b.$$typeof === u || b.$$typeof === m || b.getModuleId !== void 0);
  }, oe.typeOf = p, oe;
}
var se = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qs;
function Ql() {
  return qs || (qs = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), a = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), m = !1, p = !1, b = !1, S = !1, x = !1, A;
    A = Symbol.for("react.module.reference");
    function C(W) {
      return !!(typeof W == "string" || typeof W == "function" || W === n || W === o || x || W === r || W === c || W === l || S || W === h || m || p || b || typeof W == "object" && W !== null && (W.$$typeof === d || W.$$typeof === f || W.$$typeof === s || W.$$typeof === i || W.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      W.$$typeof === A || W.getModuleId !== void 0));
    }
    function M(W) {
      if (typeof W == "object" && W !== null) {
        var E = W.$$typeof;
        switch (E) {
          case e:
            var $ = W.type;
            switch ($) {
              case n:
              case o:
              case r:
              case c:
              case l:
                return $;
              default:
                var k = $ && $.$$typeof;
                switch (k) {
                  case a:
                  case i:
                  case u:
                  case d:
                  case f:
                  case s:
                    return k;
                  default:
                    return E;
                }
            }
          case t:
            return E;
        }
      }
    }
    var j = i, P = s, O = e, I = u, D = n, _ = d, N = f, Q = t, U = o, J = r, R = c, L = l, q = !1, Y = !1;
    function me(W) {
      return q || (q = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Ce(W) {
      return Y || (Y = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function we(W) {
      return M(W) === i;
    }
    function Ee(W) {
      return M(W) === s;
    }
    function De(W) {
      return typeof W == "object" && W !== null && W.$$typeof === e;
    }
    function Ie(W) {
      return M(W) === u;
    }
    function ve(W) {
      return M(W) === n;
    }
    function xe(W) {
      return M(W) === d;
    }
    function nt(W) {
      return M(W) === f;
    }
    function Ne(W) {
      return M(W) === t;
    }
    function mt(W) {
      return M(W) === o;
    }
    function ge(W) {
      return M(W) === r;
    }
    function Le(W) {
      return M(W) === c;
    }
    function mn(W) {
      return M(W) === l;
    }
    se.ContextConsumer = j, se.ContextProvider = P, se.Element = O, se.ForwardRef = I, se.Fragment = D, se.Lazy = _, se.Memo = N, se.Portal = Q, se.Profiler = U, se.StrictMode = J, se.Suspense = R, se.SuspenseList = L, se.isAsyncMode = me, se.isConcurrentMode = Ce, se.isContextConsumer = we, se.isContextProvider = Ee, se.isElement = De, se.isForwardRef = Ie, se.isFragment = ve, se.isLazy = xe, se.isMemo = nt, se.isPortal = Ne, se.isProfiler = mt, se.isStrictMode = ge, se.isSuspense = Le, se.isSuspenseList = mn, se.isValidElementType = C, se.typeOf = M;
  })()), se;
}
var Bs;
function ef() {
  return Bs || (Bs = 1, process.env.NODE_ENV === "production" ? bn.exports = Zl() : bn.exports = Ql()), bn.exports;
}
var oc = ef(), tf = /* @__PURE__ */ nc(oc), nf = /* @__PURE__ */ Ya({
  __proto__: null,
  default: tf
}, [oc]);
const rf = [
  "isAsyncMode",
  "isConcurrentMode",
  "isContextConsumer",
  "isContextProvider",
  "isElement",
  "isForwardRef",
  "isFragment",
  "isLazy",
  "isMemo",
  "isPortal",
  "isProfiler",
  "isStrictMode",
  "isSuspense",
  "isSuspenseList",
  "isValidElementType"
], yt = Object.fromEntries(rf.map((e) => [e, (t) => nf[e](t) || Hl[e](t)]));
function sc(e, t = []) {
  if (Array.isArray(e))
    for (const n of e)
      sc(n, t);
  else e != null && e !== !1 && e !== "" && t.push(e);
  return t;
}
function zs(e) {
  const t = e.type;
  if (typeof t == "string")
    return t;
  if (typeof t == "function")
    return t.displayName || t.name || "Unknown";
  if (yt.isFragment(e))
    return "React.Fragment";
  if (yt.isSuspense(e))
    return "React.Suspense";
  if (typeof t == "object" && t !== null) {
    if (yt.isContextProvider(e))
      return "Context.Provider";
    if (yt.isContextConsumer(e))
      return "Context.Consumer";
    if (yt.isForwardRef(e)) {
      if (t.displayName)
        return t.displayName;
      const n = t.render.displayName || t.render.name || "";
      return n === "" ? "ForwardRef" : `ForwardRef(${n})`;
    }
    if (yt.isMemo(e)) {
      const n = t.displayName || t.type.displayName || t.type.name || "";
      return n === "" ? "Memo" : `Memo(${n})`;
    }
  }
  return "UNDEFINED";
}
function of(e) {
  const { props: t } = e;
  return Object.keys(t).filter((n) => n !== "children" && t[n] !== void 0).sort();
}
const sf = (e, t, n, r, o, s) => ++r > t.maxDepth ? No(zs(e), t) : Po(zs(e), Ao(of(e), e.props, t, n + t.indent, r, o, s), Mo(sc(e.props.children), t, n + t.indent, r, o, s), t, n), af = (e) => e != null && yt.isElement(e), cf = {
  serialize: sf,
  test: af
}, uf = typeof Symbol == "function" && Symbol.for ? Symbol.for("react.test.json") : 245830487;
function lf(e) {
  const { props: t } = e;
  return t ? Object.keys(t).filter((n) => t[n] !== void 0).sort() : [];
}
const ff = (e, t, n, r, o, s) => ++r > t.maxDepth ? No(e.type, t) : Po(e.type, e.props ? Ao(lf(e), e.props, t, n + t.indent, r, o, s) : "", e.children ? Mo(e.children, t, n + t.indent, r, o, s) : "", t, n), hf = (e) => e && e.$$typeof === uf, df = {
  serialize: ff,
  test: hf
}, ic = Object.prototype.toString, pf = Date.prototype.toISOString, mf = Error.prototype.toString, Ws = RegExp.prototype.toString;
function $n(e) {
  return typeof e.constructor == "function" && e.constructor.name || "Object";
}
function gf(e) {
  return typeof window < "u" && e === window;
}
const yf = /^Symbol\((.*)\)(.*)$/, bf = /\n/g;
class ac extends Error {
  constructor(t, n) {
    super(t), this.stack = n, this.name = this.constructor.name;
  }
}
function wf(e) {
  return e === "[object Array]" || e === "[object ArrayBuffer]" || e === "[object DataView]" || e === "[object Float32Array]" || e === "[object Float64Array]" || e === "[object Int8Array]" || e === "[object Int16Array]" || e === "[object Int32Array]" || e === "[object Uint8Array]" || e === "[object Uint8ClampedArray]" || e === "[object Uint16Array]" || e === "[object Uint32Array]";
}
function Sf(e) {
  return Object.is(e, -0) ? "-0" : String(e);
}
function Tf(e) {
  return `${e}n`;
}
function Js(e, t) {
  return t ? `[Function ${e.name || "anonymous"}]` : "[Function]";
}
function Vs(e) {
  return String(e).replace(yf, "Symbol($1)");
}
function Us(e) {
  return `[${mf.call(e)}]`;
}
function cc(e, t, n, r) {
  if (e === !0 || e === !1)
    return `${e}`;
  if (e === void 0)
    return "undefined";
  if (e === null)
    return "null";
  const o = typeof e;
  if (o === "number")
    return Sf(e);
  if (o === "bigint")
    return Tf(e);
  if (o === "string")
    return r ? `"${e.replaceAll(/"|\\/g, "\\$&")}"` : `"${e}"`;
  if (o === "function")
    return Js(e, t);
  if (o === "symbol")
    return Vs(e);
  const s = ic.call(e);
  return s === "[object WeakMap]" ? "WeakMap {}" : s === "[object WeakSet]" ? "WeakSet {}" : s === "[object Function]" || s === "[object GeneratorFunction]" ? Js(e, t) : s === "[object Symbol]" ? Vs(e) : s === "[object Date]" ? Number.isNaN(+e) ? "Date { NaN }" : pf.call(e) : s === "[object Error]" ? Us(e) : s === "[object RegExp]" ? n ? Ws.call(e).replaceAll(/[$()*+.?[\\\]^{|}]/g, "\\$&") : Ws.call(e) : e instanceof Error ? Us(e) : null;
}
function uc(e, t, n, r, o, s) {
  if (o.includes(e))
    return "[Circular]";
  o = [...o], o.push(e);
  const i = ++r > t.maxDepth, a = t.min;
  if (t.callToJSON && !i && e.toJSON && typeof e.toJSON == "function" && !s)
    return st(e.toJSON(), t, n, r, o, !0);
  const u = ic.call(e);
  return u === "[object Arguments]" ? i ? "[Arguments]" : `${a ? "" : "Arguments "}[${kn(e, t, n, r, o, st)}]` : wf(u) ? i ? `[${e.constructor.name}]` : `${a || !t.printBasicPrototype && e.constructor.name === "Array" ? "" : `${e.constructor.name} `}[${kn(e, t, n, r, o, st)}]` : u === "[object Map]" ? i ? "[Map]" : `Map {${an(e.entries(), t, n, r, o, st, " => ")}}` : u === "[object Set]" ? i ? "[Set]" : `Set {${Co(e.values(), t, n, r, o, st)}}` : i || gf(e) ? `[${$n(e)}]` : `${a || !t.printBasicPrototype && $n(e) === "Object" ? "" : `${$n(e)} `}{${Oo(e, t, n, r, o, st)}}`;
}
const Ef = {
  test: (e) => e && e instanceof Error,
  serialize(e, t, n, r, o, s) {
    if (o.includes(e))
      return "[Circular]";
    o = [...o, e];
    const i = ++r > t.maxDepth, { message: a, cause: u, ...c } = e, l = {
      message: a,
      ...typeof u < "u" ? { cause: u } : {},
      ...e instanceof AggregateError ? { errors: e.errors } : {},
      ...c
    }, f = e.name !== "Error" ? e.name : $n(e);
    return i ? `[${f}]` : `${f} {${an(Object.entries(l).values(), t, n, r, o, s)}}`;
  }
};
function vf(e) {
  return e.serialize != null;
}
function lc(e, t, n, r, o, s) {
  let i;
  try {
    i = vf(e) ? e.serialize(t, n, r, o, s, st) : e.print(t, (a) => st(a, n, r, o, s), (a) => {
      const u = r + n.indent;
      return u + a.replaceAll(bf, `
${u}`);
    }, {
      edgeSpacing: n.spacingOuter,
      min: n.min,
      spacing: n.spacingInner
    }, n.colors);
  } catch (a) {
    throw new ac(a.message, a.stack);
  }
  if (typeof i != "string")
    throw new TypeError(`pretty-format: Plugin must return type "string" but instead returned "${typeof i}".`);
  return i;
}
function fc(e, t) {
  for (const n of e)
    try {
      if (n.test(t))
        return n;
    } catch (r) {
      throw new ac(r.message, r.stack);
    }
  return null;
}
function st(e, t, n, r, o, s) {
  const i = fc(t.plugins, e);
  if (i !== null)
    return lc(i, e, t, n, r, o);
  const a = cc(e, t.printFunctionName, t.escapeRegex, t.escapeString);
  return a !== null ? a : uc(e, t, n, r, o, s);
}
const ko = {
  comment: "gray",
  content: "reset",
  prop: "yellow",
  tag: "cyan",
  value: "green"
}, hc = Object.keys(ko), We = {
  callToJSON: !0,
  compareKeys: void 0,
  escapeRegex: !1,
  escapeString: !0,
  highlight: !1,
  indent: 2,
  maxDepth: Number.POSITIVE_INFINITY,
  maxWidth: Number.POSITIVE_INFINITY,
  min: !1,
  plugins: [],
  printBasicPrototype: !0,
  printFunctionName: !0,
  theme: ko
};
function xf(e) {
  for (const t of Object.keys(e))
    if (!Object.prototype.hasOwnProperty.call(We, t))
      throw new Error(`pretty-format: Unknown option "${t}".`);
  if (e.min && e.indent !== void 0 && e.indent !== 0)
    throw new Error('pretty-format: Options "min" and "indent" cannot be used together.');
}
function $f() {
  return hc.reduce((e, t) => {
    const n = ko[t], r = n && de[n];
    if (r && typeof r.close == "string" && typeof r.open == "string")
      e[t] = r;
    else
      throw new Error(`pretty-format: Option "theme" has a key "${t}" whose value "${n}" is undefined in ansi-styles.`);
    return e;
  }, /* @__PURE__ */ Object.create(null));
}
function _f() {
  return hc.reduce((e, t) => (e[t] = {
    close: "",
    open: ""
  }, e), /* @__PURE__ */ Object.create(null));
}
function dc(e) {
  return e?.printFunctionName ?? We.printFunctionName;
}
function pc(e) {
  return e?.escapeRegex ?? We.escapeRegex;
}
function mc(e) {
  return e?.escapeString ?? We.escapeString;
}
function Xs(e) {
  return {
    callToJSON: e?.callToJSON ?? We.callToJSON,
    colors: e?.highlight ? $f() : _f(),
    compareKeys: typeof e?.compareKeys == "function" || e?.compareKeys === null ? e.compareKeys : We.compareKeys,
    escapeRegex: pc(e),
    escapeString: mc(e),
    indent: e?.min ? "" : If(e?.indent ?? We.indent),
    maxDepth: e?.maxDepth ?? We.maxDepth,
    maxWidth: e?.maxWidth ?? We.maxWidth,
    min: e?.min ?? We.min,
    plugins: e?.plugins ?? We.plugins,
    printBasicPrototype: e?.printBasicPrototype ?? !0,
    printFunctionName: dc(e),
    spacingInner: e?.min ? " " : `
`,
    spacingOuter: e?.min ? "" : `
`
  };
}
function If(e) {
  return Array.from({ length: e + 1 }).join(" ");
}
function Ve(e, t) {
  if (t && (xf(t), t.plugins)) {
    const r = fc(t.plugins, e);
    if (r !== null)
      return lc(r, e, Xs(t), "", 0, []);
  }
  const n = cc(e, dc(t), pc(t), mc(t));
  return n !== null ? n : uc(e, Xs(t), "", 0, []);
}
const Yn = {
  AsymmetricMatcher: pl,
  DOMCollection: Tl,
  DOMElement: Ml,
  Immutable: Ul,
  ReactElement: cf,
  ReactTestComponent: df,
  Error: Ef
}, Ks = {
  bold: ["1", "22"],
  dim: ["2", "22"],
  italic: ["3", "23"],
  underline: ["4", "24"],
  // 5 & 6 are blinking
  inverse: ["7", "27"],
  hidden: ["8", "28"],
  strike: ["9", "29"],
  // 10-20 are fonts
  // 21-29 are resets for 1-9
  black: ["30", "39"],
  red: ["31", "39"],
  green: ["32", "39"],
  yellow: ["33", "39"],
  blue: ["34", "39"],
  magenta: ["35", "39"],
  cyan: ["36", "39"],
  white: ["37", "39"],
  brightblack: ["30;1", "39"],
  brightred: ["31;1", "39"],
  brightgreen: ["32;1", "39"],
  brightyellow: ["33;1", "39"],
  brightblue: ["34;1", "39"],
  brightmagenta: ["35;1", "39"],
  brightcyan: ["36;1", "39"],
  brightwhite: ["37;1", "39"],
  grey: ["90", "39"]
}, Cf = {
  special: "cyan",
  number: "yellow",
  bigint: "yellow",
  boolean: "yellow",
  undefined: "grey",
  null: "bold",
  string: "green",
  symbol: "green",
  date: "magenta",
  regexp: "red"
}, jt = "…";
function Of(e, t) {
  const n = Ks[Cf[t]] || Ks[t] || "";
  return n ? `\x1B[${n[0]}m${String(e)}\x1B[${n[1]}m` : String(e);
}
function Af({
  showHidden: e = !1,
  depth: t = 2,
  colors: n = !1,
  customInspect: r = !0,
  showProxy: o = !1,
  maxArrayLength: s = 1 / 0,
  breakLength: i = 1 / 0,
  seen: a = [],
  // eslint-disable-next-line no-shadow
  truncate: u = 1 / 0,
  stylize: c = String
} = {}, l) {
  const f = {
    showHidden: !!e,
    depth: Number(t),
    colors: !!n,
    customInspect: !!r,
    showProxy: !!o,
    maxArrayLength: Number(s),
    breakLength: Number(i),
    truncate: Number(u),
    seen: a,
    inspect: l,
    stylize: c
  };
  return f.colors && (f.stylize = Of), f;
}
function Mf(e) {
  return e >= "\uD800" && e <= "\uDBFF";
}
function dt(e, t, n = jt) {
  e = String(e);
  const r = n.length, o = e.length;
  if (r > t && o > r)
    return n;
  if (o > t && o > r) {
    let s = t - r;
    return s > 0 && Mf(e[s - 1]) && (s = s - 1), `${e.slice(0, s)}${n}`;
  }
  return e;
}
function Xe(e, t, n, r = ", ") {
  n = n || t.inspect;
  const o = e.length;
  if (o === 0)
    return "";
  const s = t.truncate;
  let i = "", a = "", u = "";
  for (let c = 0; c < o; c += 1) {
    const l = c + 1 === e.length, f = c + 2 === e.length;
    u = `${jt}(${e.length - c})`;
    const d = e[c];
    t.truncate = s - i.length - (l ? 0 : r.length);
    const h = a || n(d, t) + (l ? "" : r), m = i.length + h.length, p = m + u.length;
    if (l && m > s && i.length + u.length <= s || !l && !f && p > s || (a = l ? "" : n(e[c + 1], t) + (f ? "" : r), !l && f && p > s && m + a.length > s))
      break;
    if (i += h, !l && !f && m + a.length >= s) {
      u = `${jt}(${e.length - c - 1})`;
      break;
    }
    u = "";
  }
  return `${i}${u}`;
}
function Pf(e) {
  return e.match(/^[a-zA-Z_][a-zA-Z_0-9]*$/) ? e : JSON.stringify(e).replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
}
function tn([e, t], n) {
  return n.truncate -= 2, typeof e == "string" ? e = Pf(e) : typeof e != "number" && (e = `[${n.inspect(e, n)}]`), n.truncate -= e.length, t = n.inspect(t, n), `${e}: ${t}`;
}
function Nf(e, t) {
  const n = Object.keys(e).slice(e.length);
  if (!e.length && !n.length)
    return "[]";
  t.truncate -= 4;
  const r = Xe(e, t);
  t.truncate -= r.length;
  let o = "";
  return n.length && (o = Xe(n.map((s) => [s, e[s]]), t, tn)), `[ ${r}${o ? `, ${o}` : ""} ]`;
}
const kf = (e) => typeof Buffer == "function" && e instanceof Buffer ? "Buffer" : e[Symbol.toStringTag] ? e[Symbol.toStringTag] : e.constructor.name;
function Qe(e, t) {
  const n = kf(e);
  t.truncate -= n.length + 4;
  const r = Object.keys(e).slice(e.length);
  if (!e.length && !r.length)
    return `${n}[]`;
  let o = "";
  for (let i = 0; i < e.length; i++) {
    const a = `${t.stylize(dt(e[i], t.truncate), "number")}${i === e.length - 1 ? "" : ", "}`;
    if (t.truncate -= a.length, e[i] !== e.length && t.truncate <= 3) {
      o += `${jt}(${e.length - e[i] + 1})`;
      break;
    }
    o += a;
  }
  let s = "";
  return r.length && (s = Xe(r.map((i) => [i, e[i]]), t, tn)), `${n}[ ${o}${s ? `, ${s}` : ""} ]`;
}
function jf(e, t) {
  const n = e.toJSON();
  if (n === null)
    return "Invalid Date";
  const r = n.split("T"), o = r[0];
  return t.stylize(`${o}T${dt(r[1], t.truncate - o.length - 1)}`, "date");
}
function Ys(e, t) {
  const n = e[Symbol.toStringTag] || "Function", r = e.name;
  return r ? t.stylize(`[${n} ${dt(r, t.truncate - 11)}]`, "special") : t.stylize(`[${n}]`, "special");
}
function Rf([e, t], n) {
  return n.truncate -= 4, e = n.inspect(e, n), n.truncate -= e.length, t = n.inspect(t, n), `${e} => ${t}`;
}
function Ff(e) {
  const t = [];
  return e.forEach((n, r) => {
    t.push([r, n]);
  }), t;
}
function Df(e, t) {
  return e.size === 0 ? "Map{}" : (t.truncate -= 7, `Map{ ${Xe(Ff(e), t, Rf)} }`);
}
const Lf = Number.isNaN || ((e) => e !== e);
function Gs(e, t) {
  return Lf(e) ? t.stylize("NaN", "number") : e === 1 / 0 ? t.stylize("Infinity", "number") : e === -1 / 0 ? t.stylize("-Infinity", "number") : e === 0 ? t.stylize(1 / e === 1 / 0 ? "+0" : "-0", "number") : t.stylize(dt(String(e), t.truncate), "number");
}
function Hs(e, t) {
  let n = dt(e.toString(), t.truncate - 1);
  return n !== jt && (n += "n"), t.stylize(n, "bigint");
}
function qf(e, t) {
  const n = e.toString().split("/")[2], r = t.truncate - (2 + n.length), o = e.source;
  return t.stylize(`/${dt(o, r)}/${n}`, "regexp");
}
function Bf(e) {
  const t = [];
  return e.forEach((n) => {
    t.push(n);
  }), t;
}
function zf(e, t) {
  return e.size === 0 ? "Set{}" : (t.truncate -= 7, `Set{ ${Xe(Bf(e), t)} }`);
}
const Zs = new RegExp("['\\u0000-\\u001f\\u007f-\\u009f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]", "g"), Wf = {
  "\b": "\\b",
  "	": "\\t",
  "\n": "\\n",
  "\f": "\\f",
  "\r": "\\r",
  "'": "\\'",
  "\\": "\\\\"
}, Jf = 16;
function Vf(e) {
  return Wf[e] || `\\u${`0000${e.charCodeAt(0).toString(Jf)}`.slice(-4)}`;
}
function Qs(e, t) {
  return Zs.test(e) && (e = e.replace(Zs, Vf)), t.stylize(`'${dt(e, t.truncate - 2)}'`, "string");
}
function ei(e) {
  return "description" in Symbol.prototype ? e.description ? `Symbol(${e.description})` : "Symbol()" : e.toString();
}
const Uf = () => "Promise{…}";
function _n(e, t) {
  const n = Object.getOwnPropertyNames(e), r = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e) : [];
  if (n.length === 0 && r.length === 0)
    return "{}";
  if (t.truncate -= 4, t.seen = t.seen || [], t.seen.includes(e))
    return "[Circular]";
  t.seen.push(e);
  const o = Xe(n.map((a) => [a, e[a]]), t, tn), s = Xe(r.map((a) => [a, e[a]]), t, tn);
  t.seen.pop();
  let i = "";
  return o && s && (i = ", "), `{ ${o}${i}${s} }`;
}
const mr = typeof Symbol < "u" && Symbol.toStringTag ? Symbol.toStringTag : !1;
function Xf(e, t) {
  let n = "";
  return mr && mr in e && (n = e[mr]), n = n || e.constructor.name, (!n || n === "_class") && (n = "<Anonymous Class>"), t.truncate -= n.length, `${n}${_n(e, t)}`;
}
function Kf(e, t) {
  return e.length === 0 ? "Arguments[]" : (t.truncate -= 13, `Arguments[ ${Xe(e, t)} ]`);
}
const Yf = [
  "stack",
  "line",
  "column",
  "name",
  "message",
  "fileName",
  "lineNumber",
  "columnNumber",
  "number",
  "description",
  "cause"
];
function Gf(e, t) {
  const n = Object.getOwnPropertyNames(e).filter((i) => Yf.indexOf(i) === -1), r = e.name;
  t.truncate -= r.length;
  let o = "";
  if (typeof e.message == "string" ? o = dt(e.message, t.truncate) : n.unshift("message"), o = o ? `: ${o}` : "", t.truncate -= o.length + 5, t.seen = t.seen || [], t.seen.includes(e))
    return "[Circular]";
  t.seen.push(e);
  const s = Xe(n.map((i) => [i, e[i]]), t, tn);
  return `${r}${o}${s ? ` { ${s} }` : ""}`;
}
function Hf([e, t], n) {
  return n.truncate -= 3, t ? `${n.stylize(String(e), "yellow")}=${n.stylize(`"${t}"`, "string")}` : `${n.stylize(String(e), "yellow")}`;
}
function Qr(e, t) {
  return Xe(e, t, Zf, `
`);
}
function Zf(e, t) {
  switch (e.nodeType) {
    case 1:
      return gc(e, t);
    case 3:
      return t.inspect(e.data, t);
    default:
      return t.inspect(e, t);
  }
}
function gc(e, t) {
  const n = e.getAttributeNames(), r = e.tagName.toLowerCase(), o = t.stylize(`<${r}`, "special"), s = t.stylize(">", "special"), i = t.stylize(`</${r}>`, "special");
  t.truncate -= r.length * 2 + 5;
  let a = "";
  n.length > 0 && (a += " ", a += Xe(n.map((l) => [l, e.getAttribute(l)]), t, Hf, " ")), t.truncate -= a.length;
  const u = t.truncate;
  let c = Qr(e.children, t);
  return c && c.length > u && (c = `${jt}(${e.children.length})`), `${o}${a}${s}${c}${i}`;
}
const Qf = typeof Symbol == "function" && typeof Symbol.for == "function", gr = Qf ? Symbol.for("chai/inspect") : "@@chai/inspect", yr = Symbol.for("nodejs.util.inspect.custom"), ti = /* @__PURE__ */ new WeakMap(), ni = {}, ri = {
  undefined: (e, t) => t.stylize("undefined", "undefined"),
  null: (e, t) => t.stylize("null", "null"),
  boolean: (e, t) => t.stylize(String(e), "boolean"),
  Boolean: (e, t) => t.stylize(String(e), "boolean"),
  number: Gs,
  Number: Gs,
  bigint: Hs,
  BigInt: Hs,
  string: Qs,
  String: Qs,
  function: Ys,
  Function: Ys,
  symbol: ei,
  // A Symbol polyfill will return `Symbol` not `symbol` from typedetect
  Symbol: ei,
  Array: Nf,
  Date: jf,
  Map: Df,
  Set: zf,
  RegExp: qf,
  Promise: Uf,
  // WeakSet, WeakMap are totally opaque to us
  WeakSet: (e, t) => t.stylize("WeakSet{…}", "special"),
  WeakMap: (e, t) => t.stylize("WeakMap{…}", "special"),
  Arguments: Kf,
  Int8Array: Qe,
  Uint8Array: Qe,
  Uint8ClampedArray: Qe,
  Int16Array: Qe,
  Uint16Array: Qe,
  Int32Array: Qe,
  Uint32Array: Qe,
  Float32Array: Qe,
  Float64Array: Qe,
  Generator: () => "",
  DataView: () => "",
  ArrayBuffer: () => "",
  Error: Gf,
  HTMLCollection: Qr,
  NodeList: Qr
}, eh = (e, t, n, r) => gr in e && typeof e[gr] == "function" ? e[gr](t) : yr in e && typeof e[yr] == "function" ? e[yr](t.depth, t, r) : "inspect" in e && typeof e.inspect == "function" ? e.inspect(t.depth, t) : "constructor" in e && ti.has(e.constructor) ? ti.get(e.constructor)(e, t) : ni[n] ? ni[n](e, t) : "", th = Object.prototype.toString;
function In(e, t = {}) {
  const n = Af(t, In), { customInspect: r } = n;
  let o = e === null ? "null" : typeof e;
  if (o === "object" && (o = th.call(e).slice(8, -1)), o in ri)
    return ri[o](e, n);
  if (r && e) {
    const i = eh(e, n, o, In);
    if (i)
      return typeof i == "string" ? i : In(i, n);
  }
  const s = e ? Object.getPrototypeOf(e) : !1;
  return s === Object.prototype || s === null ? _n(e, n) : e && typeof HTMLElement == "function" && e instanceof HTMLElement ? gc(e, n) : "constructor" in e ? e.constructor !== Object ? Xf(e, n) : _n(e, n) : e === Object(e) ? _n(e, n) : n.stylize(String(e), o);
}
const { AsymmetricMatcher: nh, DOMCollection: rh, DOMElement: oh, Immutable: sh, ReactElement: ih, ReactTestComponent: ah } = Yn, oi = [
  ah,
  ih,
  oh,
  rh,
  sh,
  nh
];
function Pe(e, t = 10, { maxLength: n, ...r } = {}) {
  const o = n ?? 1e4;
  let s;
  try {
    s = Ve(e, {
      maxDepth: t,
      escapeString: !1,
      plugins: oi,
      ...r
    });
  } catch {
    s = Ve(e, {
      callToJSON: !1,
      maxDepth: t,
      escapeString: !1,
      plugins: oi,
      ...r
    });
  }
  return s.length >= o && t > 1 ? Pe(e, Math.floor(Math.min(t, Number.MAX_SAFE_INTEGER) / 2), {
    maxLength: n,
    ...r
  }) : s;
}
const ch = /%[sdjifoOc%]/g;
function yc(...e) {
  if (typeof e[0] != "string") {
    const s = [];
    for (let i = 0; i < e.length; i++)
      s.push(It(e[i], {
        depth: 0,
        colors: !1
      }));
    return s.join(" ");
  }
  const t = e.length;
  let n = 1;
  const r = e[0];
  let o = String(r).replace(ch, (s) => {
    if (s === "%%")
      return "%";
    if (n >= t)
      return s;
    switch (s) {
      case "%s": {
        const i = e[n++];
        return typeof i == "bigint" ? `${i.toString()}n` : typeof i == "number" && i === 0 && 1 / i < 0 ? "-0" : typeof i == "object" && i !== null ? typeof i.toString == "function" && i.toString !== Object.prototype.toString ? i.toString() : It(i, {
          depth: 0,
          colors: !1
        }) : String(i);
      }
      case "%d": {
        const i = e[n++];
        return typeof i == "bigint" ? `${i.toString()}n` : Number(i).toString();
      }
      case "%i": {
        const i = e[n++];
        return typeof i == "bigint" ? `${i.toString()}n` : Number.parseInt(String(i)).toString();
      }
      case "%f":
        return Number.parseFloat(String(e[n++])).toString();
      case "%o":
        return It(e[n++], {
          showHidden: !0,
          showProxy: !0
        });
      case "%O":
        return It(e[n++]);
      case "%c":
        return n++, "";
      case "%j":
        try {
          return JSON.stringify(e[n++]);
        } catch (i) {
          const a = i.message;
          if (a.includes("circular structure") || a.includes("cyclic structures") || a.includes("cyclic object"))
            return "[Circular]";
          throw i;
        }
      default:
        return s;
    }
  });
  for (let s = e[n]; n < t; s = e[++n])
    s === null || typeof s != "object" ? o += ` ${s}` : o += ` ${It(s)}`;
  return o;
}
function It(e, t = {}) {
  return t.truncate === 0 && (t.truncate = Number.POSITIVE_INFINITY), In(e, t);
}
function uh(e, t = {}) {
  typeof t.truncate > "u" && (t.truncate = 40);
  const n = It(e, t), r = Object.prototype.toString.call(e);
  if (t.truncate && n.length >= t.truncate)
    if (r === "[object Function]") {
      const o = e;
      return o.name ? `[Function: ${o.name}]` : "[Function]";
    } else {
      if (r === "[object Array]")
        return `[ Array(${e.length}) ]`;
      if (r === "[object Object]") {
        const o = Object.keys(e);
        return `{ Object (${o.length > 2 ? `${o.splice(0, 2).join(", ")}, ...` : o.join(", ")}) }`;
      } else
        return n;
    }
  return n;
}
function lh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function fh(e) {
  const { message: t = "$$stack trace error", stackTraceLimit: n = 1 } = e || {}, r = Error.stackTraceLimit, o = Error.prepareStackTrace;
  Error.stackTraceLimit = n, Error.prepareStackTrace = (a) => a.stack;
  const i = new Error(t).stack || "";
  return Error.prepareStackTrace = o, Error.stackTraceLimit = r, i;
}
function je(e, t, n) {
  const r = typeof e;
  if (!n.includes(r))
    throw new TypeError(`${t} value must be ${n.join(" or ")}, received "${r}"`);
}
function bc(e) {
  return e == null && (e = []), Array.isArray(e) ? e : [e];
}
function Mt(e) {
  return e != null && typeof e == "object" && !Array.isArray(e);
}
function hh(e) {
  return e === Object.prototype || e === Function.prototype || e === RegExp.prototype;
}
function nn(e) {
  return Object.prototype.toString.apply(e).slice(8, -1);
}
function dh(e, t) {
  const n = typeof t == "function" ? t : (r) => t.add(r);
  Object.getOwnPropertyNames(e).forEach(n), Object.getOwnPropertySymbols(e).forEach(n);
}
function wc(e) {
  const t = /* @__PURE__ */ new Set();
  return hh(e) ? [] : (dh(e, t), Array.from(t));
}
const Sc = { forceWritable: !1 };
function si(e, t = Sc) {
  return eo(e, /* @__PURE__ */ new WeakMap(), t);
}
function eo(e, t, n = Sc) {
  let r, o;
  if (t.has(e))
    return t.get(e);
  if (Array.isArray(e)) {
    for (o = Array.from({ length: r = e.length }), t.set(e, o); r--; )
      o[r] = eo(e[r], t, n);
    return o;
  }
  if (Object.prototype.toString.call(e) === "[object Object]") {
    o = Object.create(Object.getPrototypeOf(e)), t.set(e, o);
    const s = wc(e);
    for (const i of s) {
      const a = Object.getOwnPropertyDescriptor(e, i);
      if (!a)
        continue;
      const u = eo(e[i], t, n);
      n.forceWritable ? Object.defineProperty(o, i, {
        enumerable: a.enumerable,
        configurable: !0,
        writable: !0,
        value: u
      }) : "get" in a ? Object.defineProperty(o, i, {
        ...a,
        get() {
          return u;
        }
      }) : Object.defineProperty(o, i, {
        ...a,
        value: u
      });
    }
    return o;
  }
  return e;
}
function ph() {
}
function ii(e, t, n = void 0) {
  const r = t.replace(/\[(\d+)\]/g, ".$1").split(".");
  let o = e;
  for (const s of r)
    if (o = new Object(o)[s], o === void 0)
      return n;
  return o;
}
function ai() {
  let e = null, t = null;
  const n = new Promise((r, o) => {
    e = r, t = o;
  });
  return n.resolve = e, n.reject = t, n;
}
function mh(e) {
  if (!Number.isNaN(e))
    return !1;
  const t = new Float64Array(1);
  return t[0] = e, new Uint32Array(t.buffer)[1] >>> 31 === 1;
}
var br, ci;
function gh() {
  if (ci) return br;
  ci = 1;
  var e, t, n, r, o, s, i, a, u, c, l, f, d, h, m, p, b, S, x;
  return d = /\/(?![*\/])(?:\[(?:(?![\]\\]).|\\.)*\]|(?![\/\\]).|\\.)*(\/[$_\u200C\u200D\p{ID_Continue}]*|\\)?/yu, f = /--|\+\+|=>|\.{3}|\??\.(?!\d)|(?:&&|\|\||\?\?|[+\-%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2}|\/(?![\/*]))=?|[?~,:;[\](){}]/y, e = /(\x23?)(?=[$_\p{ID_Start}\\])(?:[$_\u200C\u200D\p{ID_Continue}]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+/yu, m = /(['"])(?:(?!\1)[^\\\n\r]|\\(?:\r\n|[^]))*(\1)?/y, l = /(?:0[xX][\da-fA-F](?:_?[\da-fA-F])*|0[oO][0-7](?:_?[0-7])*|0[bB][01](?:_?[01])*)n?|0n|[1-9](?:_?\d)*n|(?:(?:0(?!\d)|0\d*[89]\d*|[1-9](?:_?\d)*)(?:\.(?:\d(?:_?\d)*)?)?|\.\d(?:_?\d)*)(?:[eE][+-]?\d(?:_?\d)*)?|0[0-7]+/y, p = /[`}](?:[^`\\$]|\\[^]|\$(?!\{))*(`|\$\{)?/y, x = /[\t\v\f\ufeff\p{Zs}]+/yu, a = /\r?\n|[\r\u2028\u2029]/y, u = /\/\*(?:[^*]|\*(?!\/))*(\*\/)?/y, h = /\/\/.*/y, n = /[<>.:={}]|\/(?![\/*])/y, t = /[$_\p{ID_Start}][$_\u200C\u200D\p{ID_Continue}-]*/yu, r = /(['"])(?:(?!\1)[^])*(\1)?/y, o = /[^<>{}]+/y, S = /^(?:[\/+-]|\.{3}|\?(?:InterpolationIn(?:JSX|Template)|NoLineTerminatorHere|NonExpressionParenEnd|UnaryIncDec))?$|[{}([,;<>=*%&|^!~?:]$/, b = /^(?:=>|[;\]){}]|else|\?(?:NoLineTerminatorHere|NonExpressionParenEnd))?$/, s = /^(?:await|case|default|delete|do|else|instanceof|new|return|throw|typeof|void|yield)$/, i = /^(?:return|throw|yield)$/, c = RegExp(a.source), br = function* (A, { jsx: C = !1 } = {}) {
    var M, j, P, O, I, D, _, N, Q, U, J, R, L, q;
    for ({ length: D } = A, O = 0, I = "", q = [
      { tag: "JS" }
    ], M = [], J = 0, R = !1; O < D; ) {
      switch (N = q[q.length - 1], N.tag) {
        case "JS":
        case "JSNonExpressionParen":
        case "InterpolationInTemplate":
        case "InterpolationInJSX":
          if (A[O] === "/" && (S.test(I) || s.test(I)) && (d.lastIndex = O, _ = d.exec(A))) {
            O = d.lastIndex, I = _[0], R = !0, yield {
              type: "RegularExpressionLiteral",
              value: _[0],
              closed: _[1] !== void 0 && _[1] !== "\\"
            };
            continue;
          }
          if (f.lastIndex = O, _ = f.exec(A)) {
            switch (L = _[0], Q = f.lastIndex, U = L, L) {
              case "(":
                I === "?NonExpressionParenKeyword" && q.push({
                  tag: "JSNonExpressionParen",
                  nesting: J
                }), J++, R = !1;
                break;
              case ")":
                J--, R = !0, N.tag === "JSNonExpressionParen" && J === N.nesting && (q.pop(), U = "?NonExpressionParenEnd", R = !1);
                break;
              case "{":
                f.lastIndex = 0, P = !b.test(I) && (S.test(I) || s.test(I)), M.push(P), R = !1;
                break;
              case "}":
                switch (N.tag) {
                  case "InterpolationInTemplate":
                    if (M.length === N.nesting) {
                      p.lastIndex = O, _ = p.exec(A), O = p.lastIndex, I = _[0], _[1] === "${" ? (I = "?InterpolationInTemplate", R = !1, yield {
                        type: "TemplateMiddle",
                        value: _[0]
                      }) : (q.pop(), R = !0, yield {
                        type: "TemplateTail",
                        value: _[0],
                        closed: _[1] === "`"
                      });
                      continue;
                    }
                    break;
                  case "InterpolationInJSX":
                    if (M.length === N.nesting) {
                      q.pop(), O += 1, I = "}", yield {
                        type: "JSXPunctuator",
                        value: "}"
                      };
                      continue;
                    }
                }
                R = M.pop(), U = R ? "?ExpressionBraceEnd" : "}";
                break;
              case "]":
                R = !0;
                break;
              case "++":
              case "--":
                U = R ? "?PostfixIncDec" : "?UnaryIncDec";
                break;
              case "<":
                if (C && (S.test(I) || s.test(I))) {
                  q.push({ tag: "JSXTag" }), O += 1, I = "<", yield {
                    type: "JSXPunctuator",
                    value: L
                  };
                  continue;
                }
                R = !1;
                break;
              default:
                R = !1;
            }
            O = Q, I = U, yield {
              type: "Punctuator",
              value: L
            };
            continue;
          }
          if (e.lastIndex = O, _ = e.exec(A)) {
            switch (O = e.lastIndex, U = _[0], _[0]) {
              case "for":
              case "if":
              case "while":
              case "with":
                I !== "." && I !== "?." && (U = "?NonExpressionParenKeyword");
            }
            I = U, R = !s.test(_[0]), yield {
              type: _[1] === "#" ? "PrivateIdentifier" : "IdentifierName",
              value: _[0]
            };
            continue;
          }
          if (m.lastIndex = O, _ = m.exec(A)) {
            O = m.lastIndex, I = _[0], R = !0, yield {
              type: "StringLiteral",
              value: _[0],
              closed: _[2] !== void 0
            };
            continue;
          }
          if (l.lastIndex = O, _ = l.exec(A)) {
            O = l.lastIndex, I = _[0], R = !0, yield {
              type: "NumericLiteral",
              value: _[0]
            };
            continue;
          }
          if (p.lastIndex = O, _ = p.exec(A)) {
            O = p.lastIndex, I = _[0], _[1] === "${" ? (I = "?InterpolationInTemplate", q.push({
              tag: "InterpolationInTemplate",
              nesting: M.length
            }), R = !1, yield {
              type: "TemplateHead",
              value: _[0]
            }) : (R = !0, yield {
              type: "NoSubstitutionTemplate",
              value: _[0],
              closed: _[1] === "`"
            });
            continue;
          }
          break;
        case "JSXTag":
        case "JSXTagEnd":
          if (n.lastIndex = O, _ = n.exec(A)) {
            switch (O = n.lastIndex, U = _[0], _[0]) {
              case "<":
                q.push({ tag: "JSXTag" });
                break;
              case ">":
                q.pop(), I === "/" || N.tag === "JSXTagEnd" ? (U = "?JSX", R = !0) : q.push({ tag: "JSXChildren" });
                break;
              case "{":
                q.push({
                  tag: "InterpolationInJSX",
                  nesting: M.length
                }), U = "?InterpolationInJSX", R = !1;
                break;
              case "/":
                I === "<" && (q.pop(), q[q.length - 1].tag === "JSXChildren" && q.pop(), q.push({ tag: "JSXTagEnd" }));
            }
            I = U, yield {
              type: "JSXPunctuator",
              value: _[0]
            };
            continue;
          }
          if (t.lastIndex = O, _ = t.exec(A)) {
            O = t.lastIndex, I = _[0], yield {
              type: "JSXIdentifier",
              value: _[0]
            };
            continue;
          }
          if (r.lastIndex = O, _ = r.exec(A)) {
            O = r.lastIndex, I = _[0], yield {
              type: "JSXString",
              value: _[0],
              closed: _[2] !== void 0
            };
            continue;
          }
          break;
        case "JSXChildren":
          if (o.lastIndex = O, _ = o.exec(A)) {
            O = o.lastIndex, I = _[0], yield {
              type: "JSXText",
              value: _[0]
            };
            continue;
          }
          switch (A[O]) {
            case "<":
              q.push({ tag: "JSXTag" }), O++, I = "<", yield {
                type: "JSXPunctuator",
                value: "<"
              };
              continue;
            case "{":
              q.push({
                tag: "InterpolationInJSX",
                nesting: M.length
              }), O++, I = "?InterpolationInJSX", R = !1, yield {
                type: "JSXPunctuator",
                value: "{"
              };
              continue;
          }
      }
      if (x.lastIndex = O, _ = x.exec(A)) {
        O = x.lastIndex, yield {
          type: "WhiteSpace",
          value: _[0]
        };
        continue;
      }
      if (a.lastIndex = O, _ = a.exec(A)) {
        O = a.lastIndex, R = !1, i.test(I) && (I = "?NoLineTerminatorHere"), yield {
          type: "LineTerminatorSequence",
          value: _[0]
        };
        continue;
      }
      if (u.lastIndex = O, _ = u.exec(A)) {
        O = u.lastIndex, c.test(_[0]) && (R = !1, i.test(I) && (I = "?NoLineTerminatorHere")), yield {
          type: "MultiLineComment",
          value: _[0],
          closed: _[1] !== void 0
        };
        continue;
      }
      if (h.lastIndex = O, _ = h.exec(A)) {
        O = h.lastIndex, R = !1, yield {
          type: "SingleLineComment",
          value: _[0]
        };
        continue;
      }
      j = String.fromCodePoint(A.codePointAt(O)), O += j.length, I = j, R = !1, yield {
        type: N.tag.startsWith("JSX") ? "JSXInvalid" : "Invalid",
        value: j
      };
    }
  }, br;
}
gh();
var Tc = {
  keyword: [
    "break",
    "case",
    "catch",
    "continue",
    "debugger",
    "default",
    "do",
    "else",
    "finally",
    "for",
    "function",
    "if",
    "return",
    "switch",
    "throw",
    "try",
    "var",
    "const",
    "while",
    "with",
    "new",
    "this",
    "super",
    "class",
    "extends",
    "export",
    "import",
    "null",
    "true",
    "false",
    "in",
    "instanceof",
    "typeof",
    "void",
    "delete"
  ],
  strict: [
    "implements",
    "interface",
    "let",
    "package",
    "private",
    "protected",
    "public",
    "static",
    "yield"
  ]
};
new Set(Tc.keyword);
new Set(Tc.strict);
const ui = Symbol("vitest:SAFE_TIMERS");
function Dt() {
  const { setTimeout: e, setInterval: t, clearInterval: n, clearTimeout: r, setImmediate: o, clearImmediate: s, queueMicrotask: i } = globalThis[ui] || globalThis, { nextTick: a } = globalThis[ui] || globalThis.process || { nextTick: (u) => u() };
  return {
    nextTick: a,
    setTimeout: e,
    setInterval: t,
    clearInterval: n,
    clearTimeout: r,
    setImmediate: o,
    clearImmediate: s,
    queueMicrotask: i
  };
}
const $e = -1, Te = 1, he = 0;
class fe {
  0;
  1;
  constructor(t, n) {
    this[0] = t, this[1] = n;
  }
}
function yh(e, t) {
  if (!e || !t || e.charAt(0) !== t.charAt(0))
    return 0;
  let n = 0, r = Math.min(e.length, t.length), o = r, s = 0;
  for (; n < o; )
    e.substring(s, o) === t.substring(s, o) ? (n = o, s = n) : r = o, o = Math.floor((r - n) / 2 + n);
  return o;
}
function Ec(e, t) {
  if (!e || !t || e.charAt(e.length - 1) !== t.charAt(t.length - 1))
    return 0;
  let n = 0, r = Math.min(e.length, t.length), o = r, s = 0;
  for (; n < o; )
    e.substring(e.length - o, e.length - s) === t.substring(t.length - o, t.length - s) ? (n = o, s = n) : r = o, o = Math.floor((r - n) / 2 + n);
  return o;
}
function li(e, t) {
  const n = e.length, r = t.length;
  if (n === 0 || r === 0)
    return 0;
  n > r ? e = e.substring(n - r) : n < r && (t = t.substring(0, n));
  const o = Math.min(n, r);
  if (e === t)
    return o;
  let s = 0, i = 1;
  for (; ; ) {
    const a = e.substring(o - i), u = t.indexOf(a);
    if (u === -1)
      return s;
    i += u, (u === 0 || e.substring(o - i) === t.substring(0, i)) && (s = i, i++);
  }
}
function bh(e) {
  let t = !1;
  const n = [];
  let r = 0, o = null, s = 0, i = 0, a = 0, u = 0, c = 0;
  for (; s < e.length; )
    e[s][0] === he ? (n[r++] = s, i = u, a = c, u = 0, c = 0, o = e[s][1]) : (e[s][0] === Te ? u += e[s][1].length : c += e[s][1].length, o && o.length <= Math.max(i, a) && o.length <= Math.max(u, c) && (e.splice(n[r - 1], 0, new fe($e, o)), e[n[r - 1] + 1][0] = Te, r--, r--, s = r > 0 ? n[r - 1] : -1, i = 0, a = 0, u = 0, c = 0, o = null, t = !0)), s++;
  for (t && vc(e), Th(e), s = 1; s < e.length; ) {
    if (e[s - 1][0] === $e && e[s][0] === Te) {
      const l = e[s - 1][1], f = e[s][1], d = li(l, f), h = li(f, l);
      d >= h ? (d >= l.length / 2 || d >= f.length / 2) && (e.splice(s, 0, new fe(he, f.substring(0, d))), e[s - 1][1] = l.substring(0, l.length - d), e[s + 1][1] = f.substring(d), s++) : (h >= l.length / 2 || h >= f.length / 2) && (e.splice(s, 0, new fe(he, l.substring(0, h))), e[s - 1][0] = Te, e[s - 1][1] = f.substring(0, f.length - h), e[s + 1][0] = $e, e[s + 1][1] = l.substring(h), s++), s++;
    }
    s++;
  }
}
const fi = /[^a-z0-9]/i, hi = /\s/, di = /[\r\n]/, wh = /\n\r?\n$/, Sh = /^\r?\n\r?\n/;
function Th(e) {
  let t = 1;
  for (; t < e.length - 1; ) {
    if (e[t - 1][0] === he && e[t + 1][0] === he) {
      let n = e[t - 1][1], r = e[t][1], o = e[t + 1][1];
      const s = Ec(n, r);
      if (s) {
        const l = r.substring(r.length - s);
        n = n.substring(0, n.length - s), r = l + r.substring(0, r.length - s), o = l + o;
      }
      let i = n, a = r, u = o, c = wn(n, r) + wn(r, o);
      for (; r.charAt(0) === o.charAt(0); ) {
        n += r.charAt(0), r = r.substring(1) + o.charAt(0), o = o.substring(1);
        const l = wn(n, r) + wn(r, o);
        l >= c && (c = l, i = n, a = r, u = o);
      }
      e[t - 1][1] !== i && (i ? e[t - 1][1] = i : (e.splice(t - 1, 1), t--), e[t][1] = a, u ? e[t + 1][1] = u : (e.splice(t + 1, 1), t--));
    }
    t++;
  }
}
function vc(e) {
  e.push(new fe(he, ""));
  let t = 0, n = 0, r = 0, o = "", s = "", i;
  for (; t < e.length; )
    switch (e[t][0]) {
      case Te:
        r++, s += e[t][1], t++;
        break;
      case $e:
        n++, o += e[t][1], t++;
        break;
      case he:
        n + r > 1 ? (n !== 0 && r !== 0 && (i = yh(s, o), i !== 0 && (t - n - r > 0 && e[t - n - r - 1][0] === he ? e[t - n - r - 1][1] += s.substring(0, i) : (e.splice(0, 0, new fe(he, s.substring(0, i))), t++), s = s.substring(i), o = o.substring(i)), i = Ec(s, o), i !== 0 && (e[t][1] = s.substring(s.length - i) + e[t][1], s = s.substring(0, s.length - i), o = o.substring(0, o.length - i))), t -= n + r, e.splice(t, n + r), o.length && (e.splice(t, 0, new fe($e, o)), t++), s.length && (e.splice(t, 0, new fe(Te, s)), t++), t++) : t !== 0 && e[t - 1][0] === he ? (e[t - 1][1] += e[t][1], e.splice(t, 1)) : t++, r = 0, n = 0, o = "", s = "";
        break;
    }
  e[e.length - 1][1] === "" && e.pop();
  let a = !1;
  for (t = 1; t < e.length - 1; )
    e[t - 1][0] === he && e[t + 1][0] === he && (e[t][1].substring(e[t][1].length - e[t - 1][1].length) === e[t - 1][1] ? (e[t][1] = e[t - 1][1] + e[t][1].substring(0, e[t][1].length - e[t - 1][1].length), e[t + 1][1] = e[t - 1][1] + e[t + 1][1], e.splice(t - 1, 1), a = !0) : e[t][1].substring(0, e[t + 1][1].length) === e[t + 1][1] && (e[t - 1][1] += e[t + 1][1], e[t][1] = e[t][1].substring(e[t + 1][1].length) + e[t + 1][1], e.splice(t + 1, 1), a = !0)), t++;
  a && vc(e);
}
function wn(e, t) {
  if (!e || !t)
    return 6;
  const n = e.charAt(e.length - 1), r = t.charAt(0), o = n.match(fi), s = r.match(fi), i = o && n.match(hi), a = s && r.match(hi), u = i && n.match(di), c = a && r.match(di), l = u && e.match(wh), f = c && t.match(Sh);
  return l || f ? 5 : u || c ? 4 : o && !i && a ? 3 : i || a ? 2 : o || s ? 1 : 0;
}
const xc = "Compared values have no visual difference.", Eh = "Compared values serialize to the same structure.\nPrinting internal object structure without calling `toJSON` instead.";
var Sn = {}, pi;
function vh() {
  if (pi) return Sn;
  pi = 1, Object.defineProperty(Sn, "__esModule", {
    value: !0
  }), Sn.default = d;
  const e = "diff-sequences", t = 0, n = (h, m, p, b, S) => {
    let x = 0;
    for (; h < m && p < b && S(h, p); )
      h += 1, p += 1, x += 1;
    return x;
  }, r = (h, m, p, b, S) => {
    let x = 0;
    for (; h <= m && p <= b && S(m, b); )
      m -= 1, b -= 1, x += 1;
    return x;
  }, o = (h, m, p, b, S, x, A) => {
    let C = 0, M = -h, j = x[C], P = j;
    x[C] += n(
      j + 1,
      m,
      b + j - M + 1,
      p,
      S
    );
    const O = h < A ? h : A;
    for (C += 1, M += 2; C <= O; C += 1, M += 2) {
      if (C !== h && P < x[C])
        j = x[C];
      else if (j = P + 1, m <= j)
        return C - 1;
      P = x[C], x[C] = j + n(j + 1, m, b + j - M + 1, p, S);
    }
    return A;
  }, s = (h, m, p, b, S, x, A) => {
    let C = 0, M = h, j = x[C], P = j;
    x[C] -= r(
      m,
      j - 1,
      p,
      b + j - M - 1,
      S
    );
    const O = h < A ? h : A;
    for (C += 1, M -= 2; C <= O; C += 1, M -= 2) {
      if (C !== h && x[C] < P)
        j = x[C];
      else if (j = P - 1, j < m)
        return C - 1;
      P = x[C], x[C] = j - r(
        m,
        j - 1,
        p,
        b + j - M - 1,
        S
      );
    }
    return A;
  }, i = (h, m, p, b, S, x, A, C, M, j, P) => {
    const O = b - m, I = p - m, _ = S - b - I, N = -_ - (h - 1), Q = -_ + (h - 1);
    let U = t;
    const J = h < C ? h : C;
    for (let R = 0, L = -h; R <= J; R += 1, L += 2) {
      const q = R === 0 || R !== h && U < A[R], Y = q ? A[R] : U, me = q ? Y : Y + 1, Ce = O + me - L, we = n(
        me + 1,
        p,
        Ce + 1,
        S,
        x
      ), Ee = me + we;
      if (U = A[R], A[R] = Ee, N <= L && L <= Q) {
        const De = (h - 1 - (L + _)) / 2;
        if (De <= j && M[De] - 1 <= Ee) {
          const Ie = O + Y - (q ? L + 1 : L - 1), ve = r(
            m,
            Y,
            b,
            Ie,
            x
          ), xe = Y - ve, nt = Ie - ve, Ne = xe + 1, mt = nt + 1;
          P.nChangePreceding = h - 1, h - 1 === Ne + mt - m - b ? (P.aEndPreceding = m, P.bEndPreceding = b) : (P.aEndPreceding = Ne, P.bEndPreceding = mt), P.nCommonPreceding = ve, ve !== 0 && (P.aCommonPreceding = Ne, P.bCommonPreceding = mt), P.nCommonFollowing = we, we !== 0 && (P.aCommonFollowing = me + 1, P.bCommonFollowing = Ce + 1);
          const ge = Ee + 1, Le = Ce + we + 1;
          return P.nChangeFollowing = h - 1, h - 1 === p + S - ge - Le ? (P.aStartFollowing = p, P.bStartFollowing = S) : (P.aStartFollowing = ge, P.bStartFollowing = Le), !0;
        }
      }
    }
    return !1;
  }, a = (h, m, p, b, S, x, A, C, M, j, P) => {
    const O = S - p, I = p - m, _ = S - b - I, N = _ - h, Q = _ + h;
    let U = t;
    const J = h < j ? h : j;
    for (let R = 0, L = h; R <= J; R += 1, L -= 2) {
      const q = R === 0 || R !== h && M[R] < U, Y = q ? M[R] : U, me = q ? Y : Y - 1, Ce = O + me - L, we = r(
        m,
        me - 1,
        b,
        Ce - 1,
        x
      ), Ee = me - we;
      if (U = M[R], M[R] = Ee, N <= L && L <= Q) {
        const De = (h + (L - _)) / 2;
        if (De <= C && Ee - 1 <= A[De]) {
          const Ie = Ce - we;
          if (P.nChangePreceding = h, h === Ee + Ie - m - b ? (P.aEndPreceding = m, P.bEndPreceding = b) : (P.aEndPreceding = Ee, P.bEndPreceding = Ie), P.nCommonPreceding = we, we !== 0 && (P.aCommonPreceding = Ee, P.bCommonPreceding = Ie), P.nChangeFollowing = h - 1, h === 1)
            P.nCommonFollowing = 0, P.aStartFollowing = p, P.bStartFollowing = S;
          else {
            const ve = O + Y - (q ? L - 1 : L + 1), xe = n(
              Y,
              p,
              ve,
              S,
              x
            );
            P.nCommonFollowing = xe, xe !== 0 && (P.aCommonFollowing = Y, P.bCommonFollowing = ve);
            const nt = Y + xe, Ne = ve + xe;
            h - 1 === p + S - nt - Ne ? (P.aStartFollowing = p, P.bStartFollowing = S) : (P.aStartFollowing = nt, P.bStartFollowing = Ne);
          }
          return !0;
        }
      }
    }
    return !1;
  }, u = (h, m, p, b, S, x, A, C, M) => {
    const j = b - m, P = S - p, O = p - m, I = S - b, D = I - O;
    let _ = O, N = O;
    if (A[0] = m - 1, C[0] = p, D % 2 === 0) {
      const Q = (h || D) / 2, U = (O + I) / 2;
      for (let J = 1; J <= U; J += 1)
        if (_ = o(J, p, S, j, x, A, _), J < Q)
          N = s(J, m, b, P, x, C, N);
        else if (
          // If a reverse path overlaps a forward path in the same diagonal,
          // return a division of the index intervals at the middle change.
          a(
            J,
            m,
            p,
            b,
            S,
            x,
            A,
            _,
            C,
            N,
            M
          )
        )
          return;
    } else {
      const Q = ((h || D) + 1) / 2, U = (O + I + 1) / 2;
      let J = 1;
      for (_ = o(J, p, S, j, x, A, _), J += 1; J <= U; J += 1)
        if (N = s(
          J - 1,
          m,
          b,
          P,
          x,
          C,
          N
        ), J < Q)
          _ = o(J, p, S, j, x, A, _);
        else if (
          // If a forward path overlaps a reverse path in the same diagonal,
          // return a division of the index intervals at the middle change.
          i(
            J,
            m,
            p,
            b,
            S,
            x,
            A,
            _,
            C,
            N,
            M
          )
        )
          return;
    }
    throw new Error(
      `${e}: no overlap aStart=${m} aEnd=${p} bStart=${b} bEnd=${S}`
    );
  }, c = (h, m, p, b, S, x, A, C, M, j) => {
    if (S - b < p - m) {
      if (x = !x, x && A.length === 1) {
        const { foundSubsequence: Ee, isCommon: De } = A[0];
        A[1] = {
          foundSubsequence: (Ie, ve, xe) => {
            Ee(Ie, xe, ve);
          },
          isCommon: (Ie, ve) => De(ve, Ie)
        };
      }
      const Ce = m, we = p;
      m = b, p = S, b = Ce, S = we;
    }
    const { foundSubsequence: P, isCommon: O } = A[x ? 1 : 0];
    u(
      h,
      m,
      p,
      b,
      S,
      O,
      C,
      M,
      j
    );
    const {
      nChangePreceding: I,
      aEndPreceding: D,
      bEndPreceding: _,
      nCommonPreceding: N,
      aCommonPreceding: Q,
      bCommonPreceding: U,
      nCommonFollowing: J,
      aCommonFollowing: R,
      bCommonFollowing: L,
      nChangeFollowing: q,
      aStartFollowing: Y,
      bStartFollowing: me
    } = j;
    m < D && b < _ && c(
      I,
      m,
      D,
      b,
      _,
      x,
      A,
      C,
      M,
      j
    ), N !== 0 && P(N, Q, U), J !== 0 && P(J, R, L), Y < p && me < S && c(
      q,
      Y,
      p,
      me,
      S,
      x,
      A,
      C,
      M,
      j
    );
  }, l = (h, m) => {
    if (typeof m != "number")
      throw new TypeError(`${e}: ${h} typeof ${typeof m} is not a number`);
    if (!Number.isSafeInteger(m))
      throw new RangeError(`${e}: ${h} value ${m} is not a safe integer`);
    if (m < 0)
      throw new RangeError(`${e}: ${h} value ${m} is a negative integer`);
  }, f = (h, m) => {
    const p = typeof m;
    if (p !== "function")
      throw new TypeError(`${e}: ${h} typeof ${p} is not a function`);
  };
  function d(h, m, p, b) {
    l("aLength", h), l("bLength", m), f("isCommon", p), f("foundSubsequence", b);
    const S = n(0, h, 0, m, p);
    if (S !== 0 && b(S, 0, 0), h !== S || m !== S) {
      const x = S, A = S, C = r(
        x,
        h - 1,
        A,
        m - 1,
        p
      ), M = h - C, j = m - C, P = S + C;
      h !== P && m !== P && c(
        0,
        x,
        M,
        A,
        j,
        !1,
        [
          {
            foundSubsequence: b,
            isCommon: p
          }
        ],
        [t],
        [t],
        {
          aCommonFollowing: t,
          aCommonPreceding: t,
          aEndPreceding: t,
          aStartFollowing: t,
          bCommonFollowing: t,
          bCommonPreceding: t,
          bEndPreceding: t,
          bStartFollowing: t,
          nChangeFollowing: t,
          nChangePreceding: t,
          nCommonFollowing: t,
          nCommonPreceding: t
        }
      ), C !== 0 && b(C, M, j);
    }
  }
  return Sn;
}
var xh = vh(), $c = /* @__PURE__ */ lh(xh);
function $h(e, t) {
  return e.replace(/\s+$/, (n) => t(n));
}
function jo(e, t, n, r, o, s) {
  return e.length !== 0 ? n(`${r} ${$h(e, o)}`) : r !== " " ? n(r) : t && s.length !== 0 ? n(`${r} ${s}`) : "";
}
function _c(e, t, { aColor: n, aIndicator: r, changeLineTrailingSpaceColor: o, emptyFirstOrLastLinePlaceholder: s }) {
  return jo(e, t, n, r, o, s);
}
function Ic(e, t, { bColor: n, bIndicator: r, changeLineTrailingSpaceColor: o, emptyFirstOrLastLinePlaceholder: s }) {
  return jo(e, t, n, r, o, s);
}
function Cc(e, t, { commonColor: n, commonIndicator: r, commonLineTrailingSpaceColor: o, emptyFirstOrLastLinePlaceholder: s }) {
  return jo(e, t, n, r, o, s);
}
function mi(e, t, n, r, { patchColor: o }) {
  return o(`@@ -${e + 1},${t - e} +${n + 1},${r - n} @@`);
}
function _h(e, t) {
  const n = e.length, r = t.contextLines, o = r + r;
  let s = n, i = !1, a = 0, u = 0;
  for (; u !== n; ) {
    const C = u;
    for (; u !== n && e[u][0] === he; )
      u += 1;
    if (C !== u)
      if (C === 0)
        u > r && (s -= u - r, i = !0);
      else if (u === n) {
        const M = u - C;
        M > r && (s -= M - r, i = !0);
      } else {
        const M = u - C;
        M > o && (s -= M - o, a += 1);
      }
    for (; u !== n && e[u][0] !== he; )
      u += 1;
  }
  const c = a !== 0 || i;
  a !== 0 ? s += a + 1 : i && (s += 1);
  const l = s - 1, f = [];
  let d = 0;
  c && f.push("");
  let h = 0, m = 0, p = 0, b = 0;
  const S = (C) => {
    const M = f.length;
    f.push(Cc(C, M === 0 || M === l, t)), p += 1, b += 1;
  }, x = (C) => {
    const M = f.length;
    f.push(_c(C, M === 0 || M === l, t)), p += 1;
  }, A = (C) => {
    const M = f.length;
    f.push(Ic(C, M === 0 || M === l, t)), b += 1;
  };
  for (u = 0; u !== n; ) {
    let C = u;
    for (; u !== n && e[u][0] === he; )
      u += 1;
    if (C !== u)
      if (C === 0) {
        u > r && (C = u - r, h = C, m = C, p = h, b = m);
        for (let M = C; M !== u; M += 1)
          S(e[M][1]);
      } else if (u === n) {
        const M = u - C > r ? C + r : u;
        for (let j = C; j !== M; j += 1)
          S(e[j][1]);
      } else {
        const M = u - C;
        if (M > o) {
          const j = C + r;
          for (let O = C; O !== j; O += 1)
            S(e[O][1]);
          f[d] = mi(h, p, m, b, t), d = f.length, f.push("");
          const P = M - o;
          h = p + P, m = b + P, p = h, b = m;
          for (let O = u - r; O !== u; O += 1)
            S(e[O][1]);
        } else
          for (let j = C; j !== u; j += 1)
            S(e[j][1]);
      }
    for (; u !== n && e[u][0] === $e; )
      x(e[u][1]), u += 1;
    for (; u !== n && e[u][0] === Te; )
      A(e[u][1]), u += 1;
  }
  return c && (f[d] = mi(h, p, m, b, t)), f.join(`
`);
}
function Ih(e, t) {
  return e.map((n, r, o) => {
    const s = n[1], i = r === 0 || r === o.length - 1;
    switch (n[0]) {
      case $e:
        return _c(s, i, t);
      case Te:
        return Ic(s, i, t);
      default:
        return Cc(s, i, t);
    }
  }).join(`
`);
}
const wr = (e) => e, Oc = 5, Ch = 0;
function Oh() {
  return {
    aAnnotation: "Expected",
    aColor: de.green,
    aIndicator: "-",
    bAnnotation: "Received",
    bColor: de.red,
    bIndicator: "+",
    changeColor: de.inverse,
    changeLineTrailingSpaceColor: wr,
    commonColor: de.dim,
    commonIndicator: " ",
    commonLineTrailingSpaceColor: wr,
    compareKeys: void 0,
    contextLines: Oc,
    emptyFirstOrLastLinePlaceholder: "",
    expand: !1,
    includeChangeCounts: !1,
    omitAnnotationLines: !1,
    patchColor: de.yellow,
    printBasicPrototype: !1,
    truncateThreshold: Ch,
    truncateAnnotation: "... Diff result is truncated",
    truncateAnnotationColor: wr
  };
}
function Ah(e) {
  return e && typeof e == "function" ? e : void 0;
}
function Mh(e) {
  return typeof e == "number" && Number.isSafeInteger(e) && e >= 0 ? e : Oc;
}
function xt(e = {}) {
  return {
    ...Oh(),
    ...e,
    compareKeys: Ah(e.compareKeys),
    contextLines: Mh(e.contextLines)
  };
}
function Ot(e) {
  return e.length === 1 && e[0].length === 0;
}
function Ph(e) {
  let t = 0, n = 0;
  return e.forEach((r) => {
    switch (r[0]) {
      case $e:
        t += 1;
        break;
      case Te:
        n += 1;
        break;
    }
  }), {
    a: t,
    b: n
  };
}
function Nh({ aAnnotation: e, aColor: t, aIndicator: n, bAnnotation: r, bColor: o, bIndicator: s, includeChangeCounts: i, omitAnnotationLines: a }, u) {
  if (a)
    return "";
  let c = "", l = "";
  if (i) {
    const h = String(u.a), m = String(u.b), p = r.length - e.length, b = " ".repeat(Math.max(0, p)), S = " ".repeat(Math.max(0, -p)), x = m.length - h.length, A = " ".repeat(Math.max(0, x)), C = " ".repeat(Math.max(0, -x));
    c = `${b}  ${n} ${A}${h}`, l = `${S}  ${s} ${C}${m}`;
  }
  const f = `${n} ${e}${c}`, d = `${s} ${r}${l}`;
  return `${t(f)}
${o(d)}

`;
}
function Ro(e, t, n) {
  return Nh(n, Ph(e)) + (n.expand ? Ih(e, n) : _h(e, n)) + (t ? n.truncateAnnotationColor(`
${n.truncateAnnotation}`) : "");
}
function Gn(e, t, n) {
  const r = xt(n), [o, s] = Ac(Ot(e) ? [] : e, Ot(t) ? [] : t, r);
  return Ro(o, s, r);
}
function kh(e, t, n, r, o) {
  if (Ot(e) && Ot(n) && (e = [], n = []), Ot(t) && Ot(r) && (t = [], r = []), e.length !== n.length || t.length !== r.length)
    return Gn(e, t, o);
  const [s, i] = Ac(n, r, o);
  let a = 0, u = 0;
  return s.forEach((c) => {
    switch (c[0]) {
      case $e:
        c[1] = e[a], a += 1;
        break;
      case Te:
        c[1] = t[u], u += 1;
        break;
      default:
        c[1] = t[u], a += 1, u += 1;
    }
  }), Ro(s, i, xt(o));
}
function Ac(e, t, n) {
  const r = n?.truncateThreshold ?? !1, o = Math.max(Math.floor(n?.truncateThreshold ?? 0), 0), s = r ? Math.min(e.length, o) : e.length, i = r ? Math.min(t.length, o) : t.length, a = s !== e.length || i !== t.length, u = (h, m) => e[h] === t[m], c = [];
  let l = 0, f = 0;
  for ($c(s, i, u, (h, m, p) => {
    for (; l !== m; l += 1)
      c.push(new fe($e, e[l]));
    for (; f !== p; f += 1)
      c.push(new fe(Te, t[f]));
    for (; h !== 0; h -= 1, l += 1, f += 1)
      c.push(new fe(he, t[f]));
  }); l !== s; l += 1)
    c.push(new fe($e, e[l]));
  for (; f !== i; f += 1)
    c.push(new fe(Te, t[f]));
  return [c, a];
}
function gi(e) {
  if (e === void 0)
    return "undefined";
  if (e === null)
    return "null";
  if (Array.isArray(e))
    return "array";
  if (typeof e == "boolean")
    return "boolean";
  if (typeof e == "function")
    return "function";
  if (typeof e == "number")
    return "number";
  if (typeof e == "string")
    return "string";
  if (typeof e == "bigint")
    return "bigint";
  if (typeof e == "object") {
    if (e != null) {
      if (e.constructor === RegExp)
        return "regexp";
      if (e.constructor === Map)
        return "map";
      if (e.constructor === Set)
        return "set";
      if (e.constructor === Date)
        return "date";
    }
    return "object";
  } else if (typeof e == "symbol")
    return "symbol";
  throw new Error(`value of unknown type: ${e}`);
}
function yi(e) {
  return e.includes(`\r
`) ? `\r
` : `
`;
}
function jh(e, t, n) {
  const r = n?.truncateThreshold ?? !1, o = Math.max(Math.floor(n?.truncateThreshold ?? 0), 0);
  let s = e.length, i = t.length;
  if (r) {
    const h = e.includes(`
`), m = t.includes(`
`), p = yi(e), b = yi(t), S = h ? `${e.split(p, o).join(p)}
` : e, x = m ? `${t.split(b, o).join(b)}
` : t;
    s = S.length, i = x.length;
  }
  const a = s !== e.length || i !== t.length, u = (h, m) => e[h] === t[m];
  let c = 0, l = 0;
  const f = [];
  return $c(s, i, u, (h, m, p) => {
    c !== m && f.push(new fe($e, e.slice(c, m))), l !== p && f.push(new fe(Te, t.slice(l, p))), c = m + h, l = p + h, f.push(new fe(he, t.slice(p, l)));
  }), c !== s && f.push(new fe($e, e.slice(c))), l !== i && f.push(new fe(Te, t.slice(l))), [f, a];
}
function Rh(e, t, n) {
  return t.reduce((r, o) => r + (o[0] === he ? o[1] : o[0] === e && o[1].length !== 0 ? n(o[1]) : ""), "");
}
class bi {
  op;
  line;
  lines;
  changeColor;
  constructor(t, n) {
    this.op = t, this.line = [], this.lines = [], this.changeColor = n;
  }
  pushSubstring(t) {
    this.pushDiff(new fe(this.op, t));
  }
  pushLine() {
    this.lines.push(this.line.length !== 1 ? new fe(this.op, Rh(this.op, this.line, this.changeColor)) : this.line[0][0] === this.op ? this.line[0] : new fe(this.op, this.line[0][1])), this.line.length = 0;
  }
  isLineEmpty() {
    return this.line.length === 0;
  }
  // Minor input to buffer.
  pushDiff(t) {
    this.line.push(t);
  }
  // Main input to buffer.
  align(t) {
    const n = t[1];
    if (n.includes(`
`)) {
      const r = n.split(`
`), o = r.length - 1;
      r.forEach((s, i) => {
        i < o ? (this.pushSubstring(s), this.pushLine()) : s.length !== 0 && this.pushSubstring(s);
      });
    } else
      this.pushDiff(t);
  }
  // Output from buffer.
  moveLinesTo(t) {
    this.isLineEmpty() || this.pushLine(), t.push(...this.lines), this.lines.length = 0;
  }
}
class Fh {
  deleteBuffer;
  insertBuffer;
  lines;
  constructor(t, n) {
    this.deleteBuffer = t, this.insertBuffer = n, this.lines = [];
  }
  pushDiffCommonLine(t) {
    this.lines.push(t);
  }
  pushDiffChangeLines(t) {
    const n = t[1].length === 0;
    (!n || this.deleteBuffer.isLineEmpty()) && this.deleteBuffer.pushDiff(t), (!n || this.insertBuffer.isLineEmpty()) && this.insertBuffer.pushDiff(t);
  }
  flushChangeLines() {
    this.deleteBuffer.moveLinesTo(this.lines), this.insertBuffer.moveLinesTo(this.lines);
  }
  // Input to buffer.
  align(t) {
    const n = t[0], r = t[1];
    if (r.includes(`
`)) {
      const o = r.split(`
`), s = o.length - 1;
      o.forEach((i, a) => {
        if (a === 0) {
          const u = new fe(n, i);
          this.deleteBuffer.isLineEmpty() && this.insertBuffer.isLineEmpty() ? (this.flushChangeLines(), this.pushDiffCommonLine(u)) : (this.pushDiffChangeLines(u), this.flushChangeLines());
        } else a < s ? this.pushDiffCommonLine(new fe(n, i)) : i.length !== 0 && this.pushDiffChangeLines(new fe(n, i));
      });
    } else
      this.pushDiffChangeLines(t);
  }
  // Output from buffer.
  getLines() {
    return this.flushChangeLines(), this.lines;
  }
}
function Dh(e, t) {
  const n = new bi($e, t), r = new bi(Te, t), o = new Fh(n, r);
  return e.forEach((s) => {
    switch (s[0]) {
      case $e:
        n.align(s);
        break;
      case Te:
        r.align(s);
        break;
      default:
        o.align(s);
    }
  }), o.getLines();
}
function Lh(e, t) {
  if (t) {
    const n = e.length - 1;
    return e.some((r, o) => r[0] === he && (o !== n || r[1] !== `
`));
  }
  return e.some((n) => n[0] === he);
}
function qh(e, t, n) {
  if (e !== t && e.length !== 0 && t.length !== 0) {
    const r = e.includes(`
`) || t.includes(`
`), [o, s] = Mc(r ? `${e}
` : e, r ? `${t}
` : t, !0, n);
    if (Lh(o, r)) {
      const i = xt(n), a = Dh(o, i.changeColor);
      return Ro(a, s, i);
    }
  }
  return Gn(e.split(`
`), t.split(`
`), n);
}
function Mc(e, t, n, r) {
  const [o, s] = jh(e, t, r);
  return bh(o), [o, s];
}
function to(e, t) {
  const { commonColor: n } = xt(t);
  return n(e);
}
const { AsymmetricMatcher: Bh, DOMCollection: zh, DOMElement: Wh, Immutable: Jh, ReactElement: Vh, ReactTestComponent: Uh } = Yn, Pc = [
  Uh,
  Vh,
  Wh,
  zh,
  Jh,
  Bh,
  Yn.Error
], no = {
  maxDepth: 20,
  plugins: Pc
}, Nc = {
  callToJSON: !1,
  maxDepth: 8,
  plugins: Pc
};
function Lt(e, t, n) {
  if (Object.is(e, t))
    return "";
  const r = gi(e);
  let o = r, s = !1;
  if (r === "object" && typeof e.asymmetricMatch == "function") {
    if (e.$$typeof !== Symbol.for("jest.asymmetricMatcher") || typeof e.getExpectedType != "function")
      return;
    o = e.getExpectedType(), s = o === "string";
  }
  if (o !== gi(t)) {
    let b = function(A) {
      return A.length <= p ? A : `${A.slice(0, p)}...`;
    };
    const { aAnnotation: i, aColor: a, aIndicator: u, bAnnotation: c, bColor: l, bIndicator: f } = xt(n), d = ro(Nc, n);
    let h = Ve(e, d), m = Ve(t, d);
    const p = 1e5;
    h = b(h), m = b(m);
    const S = `${a(`${u} ${i}:`)} 
${h}`, x = `${l(`${f} ${c}:`)} 
${m}`;
    return `${S}

${x}`;
  }
  if (!s)
    switch (r) {
      case "string":
        return Gn(e.split(`
`), t.split(`
`), n);
      case "boolean":
      case "number":
        return Xh(e, t, n);
      case "map":
        return Sr(wi(e), wi(t), n);
      case "set":
        return Sr(Si(e), Si(t), n);
      default:
        return Sr(e, t, n);
    }
}
function Xh(e, t, n) {
  const r = Ve(e, no), o = Ve(t, no);
  return r === o ? "" : Gn(r.split(`
`), o.split(`
`), n);
}
function wi(e) {
  return new Map(Array.from(e.entries()).sort());
}
function Si(e) {
  return new Set(Array.from(e.values()).sort());
}
function Sr(e, t, n) {
  let r, o = !1;
  try {
    const i = ro(no, n);
    r = Ti(e, t, i, n);
  } catch {
    o = !0;
  }
  const s = to(xc, n);
  if (r === void 0 || r === s) {
    const i = ro(Nc, n);
    r = Ti(e, t, i, n), r !== s && !o && (r = `${to(Eh, n)}

${r}`);
  }
  return r;
}
function ro(e, t) {
  const { compareKeys: n, printBasicPrototype: r, maxDepth: o } = xt(t);
  return {
    ...e,
    compareKeys: n,
    printBasicPrototype: r,
    maxDepth: o ?? e.maxDepth
  };
}
function Ti(e, t, n, r) {
  const o = {
    ...n,
    indent: 0
  }, s = Ve(e, o), i = Ve(t, o);
  if (s === i)
    return to(xc, r);
  {
    const a = Ve(e, n), u = Ve(t, n);
    return kh(a.split(`
`), u.split(`
`), s.split(`
`), i.split(`
`), r);
  }
}
const Ei = 2e4;
function vi(e) {
  return nn(e) === "Object" && typeof e.asymmetricMatch == "function";
}
function xi(e, t) {
  const n = nn(e), r = nn(t);
  return n === r && (n === "Object" || n === "Array");
}
function kc(e, t, n) {
  const { aAnnotation: r, bAnnotation: o } = xt(n);
  if (typeof t == "string" && typeof e == "string" && t.length > 0 && e.length > 0 && t.length <= Ei && e.length <= Ei && t !== e) {
    if (t.includes(`
`) || e.includes(`
`))
      return qh(t, e, n);
    const [l] = Mc(t, e), f = l.some((p) => p[0] === he), d = Kh(r, o), h = d(r) + Hh($i(l, $e, f)), m = d(o) + Gh($i(l, Te, f));
    return `${h}
${m}`;
  }
  const s = si(t, { forceWritable: !0 }), i = si(e, { forceWritable: !0 }), { replacedExpected: a, replacedActual: u } = jc(i, s);
  return Lt(a, u, n);
}
function jc(e, t, n = /* @__PURE__ */ new WeakSet(), r = /* @__PURE__ */ new WeakSet()) {
  return e instanceof Error && t instanceof Error && typeof e.cause < "u" && typeof t.cause > "u" ? (delete e.cause, {
    replacedActual: e,
    replacedExpected: t
  }) : xi(e, t) ? n.has(e) || r.has(t) ? {
    replacedActual: e,
    replacedExpected: t
  } : (n.add(e), r.add(t), wc(t).forEach((o) => {
    const s = t[o], i = e[o];
    if (vi(s))
      s.asymmetricMatch(i) && (e[o] = s);
    else if (vi(i))
      i.asymmetricMatch(s) && (t[o] = i);
    else if (xi(i, s)) {
      const a = jc(i, s, n, r);
      e[o] = a.replacedActual, t[o] = a.replacedExpected;
    }
  }), {
    replacedActual: e,
    replacedExpected: t
  }) : {
    replacedActual: e,
    replacedExpected: t
  };
}
function Kh(...e) {
  const t = e.reduce((n, r) => r.length > n ? r.length : n, 0);
  return (n) => `${n}: ${" ".repeat(t - n.length)}`;
}
const Yh = "·";
function Rc(e) {
  return e.replace(/\s+$/gm, (t) => Yh.repeat(t.length));
}
function Gh(e) {
  return de.red(Rc(Pe(e)));
}
function Hh(e) {
  return de.green(Rc(Pe(e)));
}
function $i(e, t, n) {
  return e.reduce((r, o) => r + (o[0] === he ? o[1] : o[0] === t ? n ? de.inverse(o[1]) : o[1] : ""), "");
}
function Cn(e, t) {
  if (!e)
    throw new Error(t);
}
function At(e, t) {
  return typeof t === e;
}
function Zh(e) {
  return e instanceof Promise;
}
function rn(e, t, n) {
  Object.defineProperty(e, t, n);
}
function Pt(e, t, n) {
  rn(e, t, { value: n, configurable: !0, writable: !0 });
}
var at = Symbol.for("tinyspy:spy"), Qh = /* @__PURE__ */ new Set(), ed = (e) => {
  e.called = !1, e.callCount = 0, e.calls = [], e.results = [], e.resolves = [], e.next = [];
}, td = (e) => (rn(e, at, {
  value: { reset: () => ed(e[at]) }
}), e[at]), oo = (e) => e[at] || td(e);
function nd(e) {
  Cn(
    At("function", e) || At("undefined", e),
    "cannot spy on a non-function value"
  );
  let t = function(...r) {
    let o = oo(t);
    o.called = !0, o.callCount++, o.calls.push(r);
    let s = o.next.shift();
    if (s) {
      o.results.push(s);
      let [l, f] = s;
      if (l === "ok")
        return f;
      throw f;
    }
    let i, a = "ok", u = o.results.length;
    if (o.impl)
      try {
        new.target ? i = Reflect.construct(o.impl, r, new.target) : i = o.impl.apply(this, r), a = "ok";
      } catch (l) {
        throw i = l, a = "error", o.results.push([a, l]), l;
      }
    let c = [a, i];
    return Zh(i) && i.then(
      (l) => o.resolves[u] = ["ok", l],
      (l) => o.resolves[u] = ["error", l]
    ), o.results.push(c), i;
  };
  Pt(t, "_isMockFunction", !0), Pt(t, "length", e ? e.length : 0), Pt(t, "name", e && e.name || "spy");
  let n = oo(t);
  return n.reset(), n.impl = e, t;
}
function rd(e) {
  return !!e && e._isMockFunction === !0;
}
var Fc = (e, t) => {
  let n = Object.getOwnPropertyDescriptor(e, t);
  if (n)
    return [e, n];
  let r = Object.getPrototypeOf(e);
  for (; r !== null; ) {
    let o = Object.getOwnPropertyDescriptor(r, t);
    if (o)
      return [r, o];
    r = Object.getPrototypeOf(r);
  }
}, _i = (e, t) => {
  t != null && typeof t == "function" && t.prototype != null && Object.setPrototypeOf(e.prototype, t.prototype);
};
function Dc(e, t, n) {
  Cn(
    !At("undefined", e),
    "spyOn could not find an object to spy upon"
  ), Cn(
    At("object", e) || At("function", e),
    "cannot spyOn on a primitive value"
  );
  let [r, o] = (() => {
    if (!At("object", t))
      return [t, "value"];
    if ("getter" in t && "setter" in t)
      throw new Error("cannot spy on both getter and setter");
    if ("getter" in t)
      return [t.getter, "get"];
    if ("setter" in t)
      return [t.setter, "set"];
    throw new Error("specify getter or setter to spy on");
  })(), [s, i] = Fc(e, r) || [];
  Cn(
    i || r in e,
    `${String(r)} does not exist`
  );
  let a = !1;
  o === "value" && i && !i.value && i.get && (o = "get", a = !0, n = i.get());
  let u;
  i ? u = i[o] : o !== "value" ? u = () => e[r] : u = e[r], u && ad(u) && (u = u[at].getOriginal());
  let c = (h) => {
    let { value: m, ...p } = i || {
      configurable: !0,
      writable: !0
    };
    o !== "value" && delete p.writable, p[o] = h, rn(e, r, p);
  }, l = () => {
    s !== e ? Reflect.deleteProperty(e, r) : i && !u ? rn(e, r, i) : c(u);
  };
  n || (n = u);
  let f = id(nd(n), n);
  o === "value" && _i(f, u);
  let d = f[at];
  return Pt(d, "restore", l), Pt(d, "getOriginal", () => a ? u() : u), Pt(d, "willCall", (h) => (d.impl = h, f)), c(
    a ? () => (_i(f, n), f) : f
  ), Qh.add(f), f;
}
var od = /* @__PURE__ */ new Set([
  "length",
  "name",
  "prototype"
]);
function sd(e) {
  let t = /* @__PURE__ */ new Set(), n = {};
  for (; e && e !== Object.prototype && e !== Function.prototype; ) {
    let r = [
      ...Object.getOwnPropertyNames(e),
      ...Object.getOwnPropertySymbols(e)
    ];
    for (let o of r)
      n[o] || od.has(o) || (t.add(o), n[o] = Object.getOwnPropertyDescriptor(e, o));
    e = Object.getPrototypeOf(e);
  }
  return {
    properties: t,
    descriptors: n
  };
}
function id(e, t) {
  if (!t || // the original is already a spy, so it has all the properties
  at in t)
    return e;
  let { properties: n, descriptors: r } = sd(t);
  for (let o of n) {
    let s = r[o];
    Fc(e, o) || rn(e, o, s);
  }
  return e;
}
function ad(e) {
  return rd(e) && "getOriginal" in e[at];
}
const On = /* @__PURE__ */ new Set();
function Yt(e) {
  return typeof e == "function" && "_isMockFunction" in e && e._isMockFunction;
}
function cd(e, t, n) {
  const o = n ? { [{
    get: "getter",
    set: "setter"
  }[n]]: t } : t;
  let s;
  const i = fd(e, t), a = i && i[n || "value"];
  Yt(a) && (s = a.mock._state());
  try {
    const u = Dc(e, o), c = Lc(u);
    return s && c.mock._state(s), c;
  } catch (u) {
    throw u instanceof TypeError && Symbol.toStringTag && e[Symbol.toStringTag] === "Module" && (u.message.includes("Cannot redefine property") || u.message.includes("Cannot replace module namespace") || u.message.includes("can't redefine non-configurable property")) ? new TypeError(`Cannot spy on export "${String(o)}". Module namespace is not configurable in ESM. See: https://vitest.dev/guide/browser/#limitations`, { cause: u }) : u;
  }
}
let ud = 0;
function Lc(e) {
  const t = e;
  let n, r = [], o = !1, s = [], i = [], a = [];
  const u = oo(e), c = {
    get calls() {
      return u.calls;
    },
    get contexts() {
      return i;
    },
    get instances() {
      return s;
    },
    get invocationCallOrder() {
      return a;
    },
    get results() {
      return u.results.map(([h, m]) => ({
        type: h === "error" ? "throw" : "return",
        value: m
      }));
    },
    get settledResults() {
      return u.resolves.map(([h, m]) => ({
        type: h === "error" ? "rejected" : "fulfilled",
        value: m
      }));
    },
    get lastCall() {
      return u.calls[u.calls.length - 1];
    },
    _state(h) {
      return h && (n = h.implementation, r = h.onceImplementations, o = h.implementationChangedTemporarily), {
        implementation: n,
        onceImplementations: r,
        implementationChangedTemporarily: o
      };
    }
  };
  function l(...h) {
    return s.push(this), i.push(this), a.push(++ud), (o ? n : r.shift() || n || u.getOriginal() || (() => {
    })).apply(this, h);
  }
  let f = t.name;
  t.getMockName = () => f || "vi.fn()", t.mockName = (h) => (f = h, t), t.mockClear = () => (u.reset(), s = [], i = [], a = [], t), t.mockReset = () => (t.mockClear(), n = void 0, r = [], t), t.mockRestore = () => (t.mockReset(), u.restore(), t), Symbol.dispose && (t[Symbol.dispose] = () => t.mockRestore()), t.getMockImplementation = () => o ? n : r.at(0) || n, t.mockImplementation = (h) => (n = h, u.willCall(l), t), t.mockImplementationOnce = (h) => (r.push(h), t);
  function d(h, m) {
    const p = n;
    n = h, u.willCall(l), o = !0;
    const b = () => {
      n = p, o = !1;
    }, S = m();
    return typeof S == "object" && S && typeof S.then == "function" ? S.then(() => (b(), t)) : (b(), t);
  }
  return t.withImplementation = d, t.mockReturnThis = () => t.mockImplementation(function() {
    return this;
  }), t.mockReturnValue = (h) => t.mockImplementation(() => h), t.mockReturnValueOnce = (h) => t.mockImplementationOnce(() => h), t.mockResolvedValue = (h) => t.mockImplementation(() => Promise.resolve(h)), t.mockResolvedValueOnce = (h) => t.mockImplementationOnce(() => Promise.resolve(h)), t.mockRejectedValue = (h) => t.mockImplementation(() => Promise.reject(h)), t.mockRejectedValueOnce = (h) => t.mockImplementationOnce(() => Promise.reject(h)), Object.defineProperty(t, "mock", { get: () => c }), u.willCall(l), On.add(t), t;
}
function ld(e) {
  const t = Lc(Dc({ spy: e || function() {
  } }, "spy"));
  return e && t.mockImplementation(e), t;
}
function fd(e, t) {
  const n = Object.getOwnPropertyDescriptor(e, t);
  if (n)
    return n;
  let r = Object.getPrototypeOf(e);
  for (; r !== null; ) {
    const o = Object.getOwnPropertyDescriptor(r, t);
    if (o)
      return o;
    r = Object.getPrototypeOf(r);
  }
}
const hd = "@@__IMMUTABLE_RECORD__@@", dd = "@@__IMMUTABLE_ITERABLE__@@";
function pd(e) {
  return e && (e[dd] || e[hd]);
}
const md = Object.getPrototypeOf({});
function Ii(e) {
  return e instanceof Error ? `<unserializable>: ${e.message}` : typeof e == "string" ? `<unserializable>: ${e}` : "<unserializable>";
}
function it(e, t = /* @__PURE__ */ new WeakMap()) {
  if (!e || typeof e == "string")
    return e;
  if (e instanceof Error && "toJSON" in e && typeof e.toJSON == "function") {
    const n = e.toJSON();
    return n && n !== e && typeof n == "object" && (typeof e.message == "string" && Tn(() => n.message ?? (n.message = e.message)), typeof e.stack == "string" && Tn(() => n.stack ?? (n.stack = e.stack)), typeof e.name == "string" && Tn(() => n.name ?? (n.name = e.name)), e.cause != null && Tn(() => n.cause ?? (n.cause = it(e.cause, t)))), it(n, t);
  }
  if (typeof e == "function")
    return `Function<${e.name || "anonymous"}>`;
  if (typeof e == "symbol")
    return e.toString();
  if (typeof e != "object")
    return e;
  if (typeof Buffer < "u" && e instanceof Buffer)
    return `<Buffer(${e.length}) ...>`;
  if (typeof Uint8Array < "u" && e instanceof Uint8Array)
    return `<Uint8Array(${e.length}) ...>`;
  if (pd(e))
    return it(e.toJSON(), t);
  if (e instanceof Promise || e.constructor && e.constructor.prototype === "AsyncFunction")
    return "Promise";
  if (typeof Element < "u" && e instanceof Element)
    return e.tagName;
  if (typeof e.asymmetricMatch == "function")
    return `${e.toString()} ${yc(e.sample)}`;
  if (typeof e.toJSON == "function")
    return it(e.toJSON(), t);
  if (t.has(e))
    return t.get(e);
  if (Array.isArray(e)) {
    const n = new Array(e.length);
    return t.set(e, n), e.forEach((r, o) => {
      try {
        n[o] = it(r, t);
      } catch (s) {
        n[o] = Ii(s);
      }
    }), n;
  } else {
    const n = /* @__PURE__ */ Object.create(null);
    t.set(e, n);
    let r = e;
    for (; r && r !== md; )
      Object.getOwnPropertyNames(r).forEach((o) => {
        if (!(o in n))
          try {
            n[o] = it(e[o], t);
          } catch (s) {
            delete n[o], n[o] = Ii(s);
          }
      }), r = Object.getPrototypeOf(r);
    return n;
  }
}
function Tn(e) {
  try {
    return e();
  } catch {
  }
}
function gd(e) {
  return e.replace(/__(vite_ssr_import|vi_import)_\d+__\./g, "");
}
function qc(e, t, n = /* @__PURE__ */ new WeakSet()) {
  if (!e || typeof e != "object")
    return { message: String(e) };
  const r = e;
  (r.showDiff || r.showDiff === void 0 && r.expected !== void 0 && r.actual !== void 0) && (r.diff = kc(r.actual, r.expected, {
    ...t,
    ...r.diffOptions
  })), "expected" in r && typeof r.expected != "string" && (r.expected = Pe(r.expected, 10)), "actual" in r && typeof r.actual != "string" && (r.actual = Pe(r.actual, 10));
  try {
    typeof r.message == "string" && (r.message = gd(r.message));
  } catch {
  }
  try {
    !n.has(r) && typeof r.cause == "object" && (n.add(r), r.cause = qc(r.cause, t, n));
  } catch {
  }
  try {
    return it(r);
  } catch (o) {
    return it(new Error(`Failed to fully serialize error: ${o?.message}
Inner error message: ${r?.message}`));
  }
}
var Bc = Object.defineProperty, v = (e, t) => Bc(e, "name", { value: t, configurable: !0 }), Fo = (e, t) => {
  for (var n in t)
    Bc(e, n, { get: t[n], enumerable: !0 });
}, Se = {};
Fo(Se, {
  addChainableMethod: () => Yo,
  addLengthGuard: () => ln,
  addMethod: () => Uo,
  addProperty: () => Vo,
  checkError: () => Ae,
  compareByInspect: () => Dn,
  eql: () => pu,
  expectTypes: () => Kc,
  flag: () => G,
  getActual: () => Zn,
  getMessage: () => qo,
  getName: () => er,
  getOperator: () => Qo,
  getOwnEnumerableProperties: () => Zo,
  getOwnEnumerablePropertySymbols: () => Ho,
  getPathInfo: () => Jo,
  hasProperty: () => Qn,
  inspect: () => ee,
  isNaN: () => Ln,
  isNumeric: () => be,
  isProxyEnabled: () => un,
  isRegExp: () => qn,
  objDisplay: () => bt,
  overwriteChainableMethod: () => Go,
  overwriteMethod: () => Ko,
  overwriteProperty: () => Xo,
  proxify: () => qt,
  test: () => Do,
  transferFlags: () => Ke,
  type: () => ue
});
var Ae = {};
Fo(Ae, {
  compatibleConstructor: () => Jc,
  compatibleInstance: () => Wc,
  compatibleMessage: () => Vc,
  getConstructorName: () => Uc,
  getMessage: () => Xc
});
function Hn(e) {
  return e instanceof Error || Object.prototype.toString.call(e) === "[object Error]";
}
v(Hn, "isErrorInstance");
function zc(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}
v(zc, "isRegExp");
function Wc(e, t) {
  return Hn(t) && e === t;
}
v(Wc, "compatibleInstance");
function Jc(e, t) {
  return Hn(t) ? e.constructor === t.constructor || e instanceof t.constructor : (typeof t == "object" || typeof t == "function") && t.prototype ? e.constructor === t || e instanceof t : !1;
}
v(Jc, "compatibleConstructor");
function Vc(e, t) {
  const n = typeof e == "string" ? e : e.message;
  return zc(t) ? t.test(n) : typeof t == "string" ? n.indexOf(t) !== -1 : !1;
}
v(Vc, "compatibleMessage");
function Uc(e) {
  let t = e;
  return Hn(e) ? t = e.constructor.name : typeof e == "function" && (t = e.name, t === "" && (t = new e().name || t)), t;
}
v(Uc, "getConstructorName");
function Xc(e) {
  let t = "";
  return e && e.message ? t = e.message : typeof e == "string" && (t = e), t;
}
v(Xc, "getMessage");
function G(e, t, n) {
  let r = e.__flags || (e.__flags = /* @__PURE__ */ Object.create(null));
  if (arguments.length === 3)
    r[t] = n;
  else
    return r[t];
}
v(G, "flag");
function Do(e, t) {
  let n = G(e, "negate"), r = t[0];
  return n ? !r : r;
}
v(Do, "test");
function ue(e) {
  if (typeof e > "u")
    return "undefined";
  if (e === null)
    return "null";
  const t = e[Symbol.toStringTag];
  return typeof t == "string" ? t : Object.prototype.toString.call(e).slice(8, -1);
}
v(ue, "type");
var yd = "captureStackTrace" in Error, Tt, re = (Tt = class extends Error {
  message;
  get name() {
    return "AssertionError";
  }
  get ok() {
    return !1;
  }
  constructor(t = "Unspecified AssertionError", n, r) {
    super(t), this.message = t, yd && Error.captureStackTrace(this, r || Tt);
    for (const o in n)
      o in this || (this[o] = n[o]);
  }
  toJSON(t) {
    return {
      ...this,
      name: this.name,
      message: this.message,
      ok: !1,
      stack: t !== !1 ? this.stack : void 0
    };
  }
}, v(Tt, "AssertionError"), Tt);
function Kc(e, t) {
  let n = G(e, "message"), r = G(e, "ssfi");
  n = n ? n + ": " : "", e = G(e, "object"), t = t.map(function(i) {
    return i.toLowerCase();
  }), t.sort();
  let o = t.map(function(i, a) {
    let u = ~["a", "e", "i", "o", "u"].indexOf(i.charAt(0)) ? "an" : "a";
    return (t.length > 1 && a === t.length - 1 ? "or " : "") + u + " " + i;
  }).join(", "), s = ue(e).toLowerCase();
  if (!t.some(function(i) {
    return s === i;
  }))
    throw new re(
      n + "object tested must be " + o + ", but " + s + " given",
      void 0,
      r
    );
}
v(Kc, "expectTypes");
function Zn(e, t) {
  return t.length > 4 ? t[4] : e._obj;
}
v(Zn, "getActual");
var Ci = {
  bold: ["1", "22"],
  dim: ["2", "22"],
  italic: ["3", "23"],
  underline: ["4", "24"],
  // 5 & 6 are blinking
  inverse: ["7", "27"],
  hidden: ["8", "28"],
  strike: ["9", "29"],
  // 10-20 are fonts
  // 21-29 are resets for 1-9
  black: ["30", "39"],
  red: ["31", "39"],
  green: ["32", "39"],
  yellow: ["33", "39"],
  blue: ["34", "39"],
  magenta: ["35", "39"],
  cyan: ["36", "39"],
  white: ["37", "39"],
  brightblack: ["30;1", "39"],
  brightred: ["31;1", "39"],
  brightgreen: ["32;1", "39"],
  brightyellow: ["33;1", "39"],
  brightblue: ["34;1", "39"],
  brightmagenta: ["35;1", "39"],
  brightcyan: ["36;1", "39"],
  brightwhite: ["37;1", "39"],
  grey: ["90", "39"]
}, bd = {
  special: "cyan",
  number: "yellow",
  bigint: "yellow",
  boolean: "yellow",
  undefined: "grey",
  null: "bold",
  string: "green",
  symbol: "green",
  date: "magenta",
  regexp: "red"
}, Rt = "…";
function Yc(e, t) {
  const n = Ci[bd[t]] || Ci[t] || "";
  return n ? `\x1B[${n[0]}m${String(e)}\x1B[${n[1]}m` : String(e);
}
v(Yc, "colorise");
function Gc({
  showHidden: e = !1,
  depth: t = 2,
  colors: n = !1,
  customInspect: r = !0,
  showProxy: o = !1,
  maxArrayLength: s = 1 / 0,
  breakLength: i = 1 / 0,
  seen: a = [],
  // eslint-disable-next-line no-shadow
  truncate: u = 1 / 0,
  stylize: c = String
} = {}, l) {
  const f = {
    showHidden: !!e,
    depth: Number(t),
    colors: !!n,
    customInspect: !!r,
    showProxy: !!o,
    maxArrayLength: Number(s),
    breakLength: Number(i),
    truncate: Number(u),
    seen: a,
    inspect: l,
    stylize: c
  };
  return f.colors && (f.stylize = Yc), f;
}
v(Gc, "normaliseOptions");
function Hc(e) {
  return e >= "\uD800" && e <= "\uDBFF";
}
v(Hc, "isHighSurrogate");
function et(e, t, n = Rt) {
  e = String(e);
  const r = n.length, o = e.length;
  if (r > t && o > r)
    return n;
  if (o > t && o > r) {
    let s = t - r;
    return s > 0 && Hc(e[s - 1]) && (s = s - 1), `${e.slice(0, s)}${n}`;
  }
  return e;
}
v(et, "truncate");
function Fe(e, t, n, r = ", ") {
  n = n || t.inspect;
  const o = e.length;
  if (o === 0)
    return "";
  const s = t.truncate;
  let i = "", a = "", u = "";
  for (let c = 0; c < o; c += 1) {
    const l = c + 1 === e.length, f = c + 2 === e.length;
    u = `${Rt}(${e.length - c})`;
    const d = e[c];
    t.truncate = s - i.length - (l ? 0 : r.length);
    const h = a || n(d, t) + (l ? "" : r), m = i.length + h.length, p = m + u.length;
    if (l && m > s && i.length + u.length <= s || !l && !f && p > s || (a = l ? "" : n(e[c + 1], t) + (f ? "" : r), !l && f && p > s && m + a.length > s))
      break;
    if (i += h, !l && !f && m + a.length >= s) {
      u = `${Rt}(${e.length - c - 1})`;
      break;
    }
    u = "";
  }
  return `${i}${u}`;
}
v(Fe, "inspectList");
function Zc(e) {
  return e.match(/^[a-zA-Z_][a-zA-Z_0-9]*$/) ? e : JSON.stringify(e).replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
}
v(Zc, "quoteComplexKey");
function Ft([e, t], n) {
  return n.truncate -= 2, typeof e == "string" ? e = Zc(e) : typeof e != "number" && (e = `[${n.inspect(e, n)}]`), n.truncate -= e.length, t = n.inspect(t, n), `${e}: ${t}`;
}
v(Ft, "inspectProperty");
function Qc(e, t) {
  const n = Object.keys(e).slice(e.length);
  if (!e.length && !n.length)
    return "[]";
  t.truncate -= 4;
  const r = Fe(e, t);
  t.truncate -= r.length;
  let o = "";
  return n.length && (o = Fe(n.map((s) => [s, e[s]]), t, Ft)), `[ ${r}${o ? `, ${o}` : ""} ]`;
}
v(Qc, "inspectArray");
var wd = /* @__PURE__ */ v((e) => typeof Buffer == "function" && e instanceof Buffer ? "Buffer" : e[Symbol.toStringTag] ? e[Symbol.toStringTag] : e.constructor.name, "getArrayName");
function Ye(e, t) {
  const n = wd(e);
  t.truncate -= n.length + 4;
  const r = Object.keys(e).slice(e.length);
  if (!e.length && !r.length)
    return `${n}[]`;
  let o = "";
  for (let i = 0; i < e.length; i++) {
    const a = `${t.stylize(et(e[i], t.truncate), "number")}${i === e.length - 1 ? "" : ", "}`;
    if (t.truncate -= a.length, e[i] !== e.length && t.truncate <= 3) {
      o += `${Rt}(${e.length - e[i] + 1})`;
      break;
    }
    o += a;
  }
  let s = "";
  return r.length && (s = Fe(r.map((i) => [i, e[i]]), t, Ft)), `${n}[ ${o}${s ? `, ${s}` : ""} ]`;
}
v(Ye, "inspectTypedArray");
function eu(e, t) {
  const n = e.toJSON();
  if (n === null)
    return "Invalid Date";
  const r = n.split("T"), o = r[0];
  return t.stylize(`${o}T${et(r[1], t.truncate - o.length - 1)}`, "date");
}
v(eu, "inspectDate");
function so(e, t) {
  const n = e[Symbol.toStringTag] || "Function", r = e.name;
  return r ? t.stylize(`[${n} ${et(r, t.truncate - 11)}]`, "special") : t.stylize(`[${n}]`, "special");
}
v(so, "inspectFunction");
function tu([e, t], n) {
  return n.truncate -= 4, e = n.inspect(e, n), n.truncate -= e.length, t = n.inspect(t, n), `${e} => ${t}`;
}
v(tu, "inspectMapEntry");
function nu(e) {
  const t = [];
  return e.forEach((n, r) => {
    t.push([r, n]);
  }), t;
}
v(nu, "mapToEntries");
function ru(e, t) {
  return e.size === 0 ? "Map{}" : (t.truncate -= 7, `Map{ ${Fe(nu(e), t, tu)} }`);
}
v(ru, "inspectMap");
var Sd = Number.isNaN || ((e) => e !== e);
function io(e, t) {
  return Sd(e) ? t.stylize("NaN", "number") : e === 1 / 0 ? t.stylize("Infinity", "number") : e === -1 / 0 ? t.stylize("-Infinity", "number") : e === 0 ? t.stylize(1 / e === 1 / 0 ? "+0" : "-0", "number") : t.stylize(et(String(e), t.truncate), "number");
}
v(io, "inspectNumber");
function ao(e, t) {
  let n = et(e.toString(), t.truncate - 1);
  return n !== Rt && (n += "n"), t.stylize(n, "bigint");
}
v(ao, "inspectBigInt");
function ou(e, t) {
  const n = e.toString().split("/")[2], r = t.truncate - (2 + n.length), o = e.source;
  return t.stylize(`/${et(o, r)}/${n}`, "regexp");
}
v(ou, "inspectRegExp");
function su(e) {
  const t = [];
  return e.forEach((n) => {
    t.push(n);
  }), t;
}
v(su, "arrayFromSet");
function iu(e, t) {
  return e.size === 0 ? "Set{}" : (t.truncate -= 7, `Set{ ${Fe(su(e), t)} }`);
}
v(iu, "inspectSet");
var Oi = new RegExp("['\\u0000-\\u001f\\u007f-\\u009f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]", "g"), Td = {
  "\b": "\\b",
  "	": "\\t",
  "\n": "\\n",
  "\f": "\\f",
  "\r": "\\r",
  "'": "\\'",
  "\\": "\\\\"
}, Ed = 16;
function au(e) {
  return Td[e] || `\\u${`0000${e.charCodeAt(0).toString(Ed)}`.slice(-4)}`;
}
v(au, "escape");
function co(e, t) {
  return Oi.test(e) && (e = e.replace(Oi, au)), t.stylize(`'${et(e, t.truncate - 2)}'`, "string");
}
v(co, "inspectString");
function uo(e) {
  return "description" in Symbol.prototype ? e.description ? `Symbol(${e.description})` : "Symbol()" : e.toString();
}
v(uo, "inspectSymbol");
var vd = /* @__PURE__ */ v(() => "Promise{…}", "getPromiseValue"), xd = vd;
function Gt(e, t) {
  const n = Object.getOwnPropertyNames(e), r = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e) : [];
  if (n.length === 0 && r.length === 0)
    return "{}";
  if (t.truncate -= 4, t.seen = t.seen || [], t.seen.includes(e))
    return "[Circular]";
  t.seen.push(e);
  const o = Fe(n.map((a) => [a, e[a]]), t, Ft), s = Fe(r.map((a) => [a, e[a]]), t, Ft);
  t.seen.pop();
  let i = "";
  return o && s && (i = ", "), `{ ${o}${i}${s} }`;
}
v(Gt, "inspectObject");
var Tr = typeof Symbol < "u" && Symbol.toStringTag ? Symbol.toStringTag : !1;
function cu(e, t) {
  let n = "";
  return Tr && Tr in e && (n = e[Tr]), n = n || e.constructor.name, (!n || n === "_class") && (n = "<Anonymous Class>"), t.truncate -= n.length, `${n}${Gt(e, t)}`;
}
v(cu, "inspectClass");
function uu(e, t) {
  return e.length === 0 ? "Arguments[]" : (t.truncate -= 13, `Arguments[ ${Fe(e, t)} ]`);
}
v(uu, "inspectArguments");
var $d = [
  "stack",
  "line",
  "column",
  "name",
  "message",
  "fileName",
  "lineNumber",
  "columnNumber",
  "number",
  "description",
  "cause"
];
function lu(e, t) {
  const n = Object.getOwnPropertyNames(e).filter((i) => $d.indexOf(i) === -1), r = e.name;
  t.truncate -= r.length;
  let o = "";
  if (typeof e.message == "string" ? o = et(e.message, t.truncate) : n.unshift("message"), o = o ? `: ${o}` : "", t.truncate -= o.length + 5, t.seen = t.seen || [], t.seen.includes(e))
    return "[Circular]";
  t.seen.push(e);
  const s = Fe(n.map((i) => [i, e[i]]), t, Ft);
  return `${r}${o}${s ? ` { ${s} }` : ""}`;
}
v(lu, "inspectObject");
function fu([e, t], n) {
  return n.truncate -= 3, t ? `${n.stylize(String(e), "yellow")}=${n.stylize(`"${t}"`, "string")}` : `${n.stylize(String(e), "yellow")}`;
}
v(fu, "inspectAttribute");
function jn(e, t) {
  return Fe(e, t, hu, `
`);
}
v(jn, "inspectNodeCollection");
function hu(e, t) {
  switch (e.nodeType) {
    case 1:
      return Lo(e, t);
    case 3:
      return t.inspect(e.data, t);
    default:
      return t.inspect(e, t);
  }
}
v(hu, "inspectNode");
function Lo(e, t) {
  const n = e.getAttributeNames(), r = e.tagName.toLowerCase(), o = t.stylize(`<${r}`, "special"), s = t.stylize(">", "special"), i = t.stylize(`</${r}>`, "special");
  t.truncate -= r.length * 2 + 5;
  let a = "";
  n.length > 0 && (a += " ", a += Fe(n.map((l) => [l, e.getAttribute(l)]), t, fu, " ")), t.truncate -= a.length;
  const u = t.truncate;
  let c = jn(e.children, t);
  return c && c.length > u && (c = `${Rt}(${e.children.length})`), `${o}${a}${s}${c}${i}`;
}
v(Lo, "inspectHTML");
var _d = typeof Symbol == "function" && typeof Symbol.for == "function", Er = _d ? Symbol.for("chai/inspect") : "@@chai/inspect", vr = Symbol.for("nodejs.util.inspect.custom"), Ai = /* @__PURE__ */ new WeakMap(), Mi = {}, Pi = {
  undefined: /* @__PURE__ */ v((e, t) => t.stylize("undefined", "undefined"), "undefined"),
  null: /* @__PURE__ */ v((e, t) => t.stylize("null", "null"), "null"),
  boolean: /* @__PURE__ */ v((e, t) => t.stylize(String(e), "boolean"), "boolean"),
  Boolean: /* @__PURE__ */ v((e, t) => t.stylize(String(e), "boolean"), "Boolean"),
  number: io,
  Number: io,
  bigint: ao,
  BigInt: ao,
  string: co,
  String: co,
  function: so,
  Function: so,
  symbol: uo,
  // A Symbol polyfill will return `Symbol` not `symbol` from typedetect
  Symbol: uo,
  Array: Qc,
  Date: eu,
  Map: ru,
  Set: iu,
  RegExp: ou,
  Promise: xd,
  // WeakSet, WeakMap are totally opaque to us
  WeakSet: /* @__PURE__ */ v((e, t) => t.stylize("WeakSet{…}", "special"), "WeakSet"),
  WeakMap: /* @__PURE__ */ v((e, t) => t.stylize("WeakMap{…}", "special"), "WeakMap"),
  Arguments: uu,
  Int8Array: Ye,
  Uint8Array: Ye,
  Uint8ClampedArray: Ye,
  Int16Array: Ye,
  Uint16Array: Ye,
  Int32Array: Ye,
  Uint32Array: Ye,
  Float32Array: Ye,
  Float64Array: Ye,
  Generator: /* @__PURE__ */ v(() => "", "Generator"),
  DataView: /* @__PURE__ */ v(() => "", "DataView"),
  ArrayBuffer: /* @__PURE__ */ v(() => "", "ArrayBuffer"),
  Error: lu,
  HTMLCollection: jn,
  NodeList: jn
}, Id = /* @__PURE__ */ v((e, t, n) => Er in e && typeof e[Er] == "function" ? e[Er](t) : vr in e && typeof e[vr] == "function" ? e[vr](t.depth, t) : "inspect" in e && typeof e.inspect == "function" ? e.inspect(t.depth, t) : "constructor" in e && Ai.has(e.constructor) ? Ai.get(e.constructor)(e, t) : Mi[n] ? Mi[n](e, t) : "", "inspectCustom"), Cd = Object.prototype.toString;
function Rn(e, t = {}) {
  const n = Gc(t, Rn), { customInspect: r } = n;
  let o = e === null ? "null" : typeof e;
  if (o === "object" && (o = Cd.call(e).slice(8, -1)), o in Pi)
    return Pi[o](e, n);
  if (r && e) {
    const i = Id(e, n, o);
    if (i)
      return typeof i == "string" ? i : Rn(i, n);
  }
  const s = e ? Object.getPrototypeOf(e) : !1;
  return s === Object.prototype || s === null ? Gt(e, n) : e && typeof HTMLElement == "function" && e instanceof HTMLElement ? Lo(e, n) : "constructor" in e ? e.constructor !== Object ? cu(e, n) : Gt(e, n) : e === Object(e) ? Gt(e, n) : n.stylize(String(e), o);
}
v(Rn, "inspect");
var _e = {
  /**
   * ### config.includeStack
   *
   * User configurable property, influences whether stack trace
   * is included in Assertion error message. Default of false
   * suppresses stack trace in the error message.
   *
   *     chai.config.includeStack = true;  // enable stack on error
   *
   * @param {boolean}
   * @public
   */
  includeStack: !1,
  /**
   * ### config.showDiff
   *
   * User configurable property, influences whether or not
   * the `showDiff` flag should be included in the thrown
   * AssertionErrors. `false` will always be `false`; `true`
   * will be true when the assertion has requested a diff
   * be shown.
   *
   * @param {boolean}
   * @public
   */
  showDiff: !0,
  /**
   * ### config.truncateThreshold
   *
   * User configurable property, sets length threshold for actual and
   * expected values in assertion errors. If this threshold is exceeded, for
   * example for large data structures, the value is replaced with something
   * like `[ Array(3) ]` or `{ Object (prop1, prop2) }`.
   *
   * Set it to zero if you want to disable truncating altogether.
   *
   * This is especially userful when doing assertions on arrays: having this
   * set to a reasonable large value makes the failure messages readily
   * inspectable.
   *
   *     chai.config.truncateThreshold = 0;  // disable truncating
   *
   * @param {number}
   * @public
   */
  truncateThreshold: 40,
  /**
   * ### config.useProxy
   *
   * User configurable property, defines if chai will use a Proxy to throw
   * an error when a non-existent property is read, which protects users
   * from typos when using property-based assertions.
   *
   * Set it to false if you want to disable this feature.
   *
   *     chai.config.useProxy = false;  // disable use of Proxy
   *
   * This feature is automatically disabled regardless of this config value
   * in environments that don't support proxies.
   *
   * @param {boolean}
   * @public
   */
  useProxy: !0,
  /**
   * ### config.proxyExcludedKeys
   *
   * User configurable property, defines which properties should be ignored
   * instead of throwing an error if they do not exist on the assertion.
   * This is only applied if the environment Chai is running in supports proxies and
   * if the `useProxy` configuration setting is enabled.
   * By default, `then` and `inspect` will not throw an error if they do not exist on the
   * assertion object because the `.inspect` property is read by `util.inspect` (for example, when
   * using `console.log` on the assertion object) and `.then` is necessary for promise type-checking.
   *
   *     // By default these keys will not throw an error if they do not exist on the assertion object
   *     chai.config.proxyExcludedKeys = ['then', 'inspect'];
   *
   * @param {Array}
   * @public
   */
  proxyExcludedKeys: ["then", "catch", "inspect", "toJSON"],
  /**
   * ### config.deepEqual
   *
   * User configurable property, defines which a custom function to use for deepEqual
   * comparisons.
   * By default, the function used is the one from the `deep-eql` package without custom comparator.
   *
   *     // use a custom comparator
   *     chai.config.deepEqual = (expected, actual) => {
   *         return chai.util.eql(expected, actual, {
   *             comparator: (expected, actual) => {
   *                 // for non number comparison, use the default behavior
   *                 if(typeof expected !== 'number') return null;
   *                 // allow a difference of 10 between compared numbers
   *                 return typeof actual === 'number' && Math.abs(actual - expected) < 10
   *             }
   *         })
   *     };
   *
   * @param {Function}
   * @public
   */
  deepEqual: null
};
function ee(e, t, n, r) {
  let o = {
    colors: r,
    depth: typeof n > "u" ? 2 : n,
    showHidden: t,
    truncate: _e.truncateThreshold ? _e.truncateThreshold : 1 / 0
  };
  return Rn(e, o);
}
v(ee, "inspect");
function bt(e) {
  let t = ee(e), n = Object.prototype.toString.call(e);
  if (_e.truncateThreshold && t.length >= _e.truncateThreshold) {
    if (n === "[object Function]")
      return !e.name || e.name === "" ? "[Function]" : "[Function: " + e.name + "]";
    if (n === "[object Array]")
      return "[ Array(" + e.length + ") ]";
    if (n === "[object Object]") {
      let r = Object.keys(e);
      return "{ Object (" + (r.length > 2 ? r.splice(0, 2).join(", ") + ", ..." : r.join(", ")) + ") }";
    } else
      return t;
  } else
    return t;
}
v(bt, "objDisplay");
function qo(e, t) {
  let n = G(e, "negate"), r = G(e, "object"), o = t[3], s = Zn(e, t), i = n ? t[2] : t[1], a = G(e, "message");
  return typeof i == "function" && (i = i()), i = i || "", i = i.replace(/#\{this\}/g, function() {
    return bt(r);
  }).replace(/#\{act\}/g, function() {
    return bt(s);
  }).replace(/#\{exp\}/g, function() {
    return bt(o);
  }), a ? a + ": " + i : i;
}
v(qo, "getMessage");
function Ke(e, t, n) {
  let r = e.__flags || (e.__flags = /* @__PURE__ */ Object.create(null));
  t.__flags || (t.__flags = /* @__PURE__ */ Object.create(null)), n = arguments.length === 3 ? n : !0;
  for (let o in r)
    (n || o !== "object" && o !== "ssfi" && o !== "lockSsfi" && o != "message") && (t.__flags[o] = r[o]);
}
v(Ke, "transferFlags");
function lo(e) {
  if (typeof e > "u")
    return "undefined";
  if (e === null)
    return "null";
  const t = e[Symbol.toStringTag];
  return typeof t == "string" ? t : Object.prototype.toString.call(e).slice(8, -1);
}
v(lo, "type");
function Bo() {
  this._key = "chai/deep-eql__" + Math.random() + Date.now();
}
v(Bo, "FakeMap");
Bo.prototype = {
  get: /* @__PURE__ */ v(function(t) {
    return t[this._key];
  }, "get"),
  set: /* @__PURE__ */ v(function(t, n) {
    Object.isExtensible(t) && Object.defineProperty(t, this._key, {
      value: n,
      configurable: !0
    });
  }, "set")
};
var du = typeof WeakMap == "function" ? WeakMap : Bo;
function fo(e, t, n) {
  if (!n || vt(e) || vt(t))
    return null;
  var r = n.get(e);
  if (r) {
    var o = r.get(t);
    if (typeof o == "boolean")
      return o;
  }
  return null;
}
v(fo, "memoizeCompare");
function Kt(e, t, n, r) {
  if (!(!n || vt(e) || vt(t))) {
    var o = n.get(e);
    o ? o.set(t, r) : (o = new du(), o.set(t, r), n.set(e, o));
  }
}
v(Kt, "memoizeSet");
var pu = cn;
function cn(e, t, n) {
  if (n && n.comparator)
    return ho(e, t, n);
  var r = zo(e, t);
  return r !== null ? r : ho(e, t, n);
}
v(cn, "deepEqual");
function zo(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && // eslint-disable-line no-self-compare
  t !== t ? !0 : vt(e) || vt(t) ? !1 : null;
}
v(zo, "simpleEqual");
function ho(e, t, n) {
  n = n || {}, n.memoize = n.memoize === !1 ? !1 : n.memoize || new du();
  var r = n && n.comparator, o = fo(e, t, n.memoize);
  if (o !== null)
    return o;
  var s = fo(t, e, n.memoize);
  if (s !== null)
    return s;
  if (r) {
    var i = r(e, t);
    if (i === !1 || i === !0)
      return Kt(e, t, n.memoize, i), i;
    var a = zo(e, t);
    if (a !== null)
      return a;
  }
  var u = lo(e);
  if (u !== lo(t))
    return Kt(e, t, n.memoize, !1), !1;
  Kt(e, t, n.memoize, !0);
  var c = mu(e, t, u, n);
  return Kt(e, t, n.memoize, c), c;
}
v(ho, "extensiveDeepEqual");
function mu(e, t, n, r) {
  switch (n) {
    case "String":
    case "Number":
    case "Boolean":
    case "Date":
      return cn(e.valueOf(), t.valueOf());
    case "Promise":
    case "Symbol":
    case "function":
    case "WeakMap":
    case "WeakSet":
      return e === t;
    case "Error":
      return Wo(e, t, ["name", "message", "code"], r);
    case "Arguments":
    case "Int8Array":
    case "Uint8Array":
    case "Uint8ClampedArray":
    case "Int16Array":
    case "Uint16Array":
    case "Int32Array":
    case "Uint32Array":
    case "Float32Array":
    case "Float64Array":
    case "Array":
      return ct(e, t, r);
    case "RegExp":
      return gu(e, t);
    case "Generator":
      return yu(e, t, r);
    case "DataView":
      return ct(new Uint8Array(e.buffer), new Uint8Array(t.buffer), r);
    case "ArrayBuffer":
      return ct(new Uint8Array(e), new Uint8Array(t), r);
    case "Set":
      return po(e, t, r);
    case "Map":
      return po(e, t, r);
    case "Temporal.PlainDate":
    case "Temporal.PlainTime":
    case "Temporal.PlainDateTime":
    case "Temporal.Instant":
    case "Temporal.ZonedDateTime":
    case "Temporal.PlainYearMonth":
    case "Temporal.PlainMonthDay":
      return e.equals(t);
    case "Temporal.Duration":
      return e.total("nanoseconds") === t.total("nanoseconds");
    case "Temporal.TimeZone":
    case "Temporal.Calendar":
      return e.toString() === t.toString();
    default:
      return wu(e, t, r);
  }
}
v(mu, "extensiveDeepEqualByType");
function gu(e, t) {
  return e.toString() === t.toString();
}
v(gu, "regexpEqual");
function po(e, t, n) {
  try {
    if (e.size !== t.size)
      return !1;
    if (e.size === 0)
      return !0;
  } catch {
    return !1;
  }
  var r = [], o = [];
  return e.forEach(/* @__PURE__ */ v(function(i, a) {
    r.push([i, a]);
  }, "gatherEntries")), t.forEach(/* @__PURE__ */ v(function(i, a) {
    o.push([i, a]);
  }, "gatherEntries")), ct(r.sort(), o.sort(), n);
}
v(po, "entriesEqual");
function ct(e, t, n) {
  var r = e.length;
  if (r !== t.length)
    return !1;
  if (r === 0)
    return !0;
  for (var o = -1; ++o < r; )
    if (cn(e[o], t[o], n) === !1)
      return !1;
  return !0;
}
v(ct, "iterableEqual");
function yu(e, t, n) {
  return ct(Fn(e), Fn(t), n);
}
v(yu, "generatorEqual");
function bu(e) {
  return typeof Symbol < "u" && typeof e == "object" && typeof Symbol.iterator < "u" && typeof e[Symbol.iterator] == "function";
}
v(bu, "hasIteratorFunction");
function mo(e) {
  if (bu(e))
    try {
      return Fn(e[Symbol.iterator]());
    } catch {
      return [];
    }
  return [];
}
v(mo, "getIteratorEntries");
function Fn(e) {
  for (var t = e.next(), n = [t.value]; t.done === !1; )
    t = e.next(), n.push(t.value);
  return n;
}
v(Fn, "getGeneratorEntries");
function go(e) {
  var t = [];
  for (var n in e)
    t.push(n);
  return t;
}
v(go, "getEnumerableKeys");
function yo(e) {
  for (var t = [], n = Object.getOwnPropertySymbols(e), r = 0; r < n.length; r += 1) {
    var o = n[r];
    Object.getOwnPropertyDescriptor(e, o).enumerable && t.push(o);
  }
  return t;
}
v(yo, "getEnumerableSymbols");
function Wo(e, t, n, r) {
  var o = n.length;
  if (o === 0)
    return !0;
  for (var s = 0; s < o; s += 1)
    if (cn(e[n[s]], t[n[s]], r) === !1)
      return !1;
  return !0;
}
v(Wo, "keysEqual");
function wu(e, t, n) {
  var r = go(e), o = go(t), s = yo(e), i = yo(t);
  if (r = r.concat(s), o = o.concat(i), r.length && r.length === o.length)
    return ct(bo(r).sort(), bo(o).sort()) === !1 ? !1 : Wo(e, t, r, n);
  var a = mo(e), u = mo(t);
  return a.length && a.length === u.length ? (a.sort(), u.sort(), ct(a, u, n)) : r.length === 0 && a.length === 0 && o.length === 0 && u.length === 0;
}
v(wu, "objectEqual");
function vt(e) {
  return e === null || typeof e != "object";
}
v(vt, "isPrimitive");
function bo(e) {
  return e.map(/* @__PURE__ */ v(function(n) {
    return typeof n == "symbol" ? n.toString() : n;
  }, "mapSymbol"));
}
v(bo, "mapSymbols");
function Qn(e, t) {
  return typeof e > "u" || e === null ? !1 : t in Object(e);
}
v(Qn, "hasProperty");
function Su(e) {
  return e.replace(/([^\\])\[/g, "$1.[").match(/(\\\.|[^.]+?)+/g).map((r) => {
    if (r === "constructor" || r === "__proto__" || r === "prototype")
      return {};
    const s = /^\[(\d+)\]$/.exec(r);
    let i = null;
    return s ? i = { i: parseFloat(s[1]) } : i = { p: r.replace(/\\([.[\]])/g, "$1") }, i;
  });
}
v(Su, "parsePath");
function wo(e, t, n) {
  let r = e, o = null;
  n = typeof n > "u" ? t.length : n;
  for (let s = 0; s < n; s++) {
    const i = t[s];
    r && (typeof i.p > "u" ? r = r[i.i] : r = r[i.p], s === n - 1 && (o = r));
  }
  return o;
}
v(wo, "internalGetPathValue");
function Jo(e, t) {
  const n = Su(t), r = n[n.length - 1], o = {
    parent: n.length > 1 ? wo(e, n, n.length - 1) : e,
    name: r.p || r.i,
    value: wo(e, n)
  };
  return o.exists = Qn(o.parent, o.name), o;
}
v(Jo, "getPathInfo");
var Et, y = (Et = class {
  /** @type {{}} */
  __flags = {};
  /**
   * Creates object for chaining.
   * `Assertion` objects contain metadata in the form of flags. Three flags can
   * be assigned during instantiation by passing arguments to this constructor:
   *
   * - `object`: This flag contains the target of the assertion. For example, in
   * the assertion `expect(numKittens).to.equal(7);`, the `object` flag will
   * contain `numKittens` so that the `equal` assertion can reference it when
   * needed.
   *
   * - `message`: This flag contains an optional custom error message to be
   * prepended to the error message that's generated by the assertion when it
   * fails.
   *
   * - `ssfi`: This flag stands for "start stack function indicator". It
   * contains a function reference that serves as the starting point for
   * removing frames from the stack trace of the error that's created by the
   * assertion when it fails. The goal is to provide a cleaner stack trace to
   * end users by removing Chai's internal functions. Note that it only works
   * in environments that support `Error.captureStackTrace`, and only when
   * `Chai.config.includeStack` hasn't been set to `false`.
   *
   * - `lockSsfi`: This flag controls whether or not the given `ssfi` flag
   * should retain its current value, even as assertions are chained off of
   * this object. This is usually set to `true` when creating a new assertion
   * from within another assertion. It's also temporarily set to `true` before
   * an overwritten assertion gets called by the overwriting assertion.
   *
   * - `eql`: This flag contains the deepEqual function to be used by the assertion.
   *
   * @param {unknown} obj target of the assertion
   * @param {string} [msg] (optional) custom error message
   * @param {Function} [ssfi] (optional) starting point for removing stack frames
   * @param {boolean} [lockSsfi] (optional) whether or not the ssfi flag is locked
   */
  constructor(t, n, r, o) {
    return G(this, "ssfi", r || Et), G(this, "lockSsfi", o), G(this, "object", t), G(this, "message", n), G(this, "eql", _e.deepEqual || pu), qt(this);
  }
  /** @returns {boolean} */
  static get includeStack() {
    return console.warn(
      "Assertion.includeStack is deprecated, use chai.config.includeStack instead."
    ), _e.includeStack;
  }
  /** @param {boolean} value */
  static set includeStack(t) {
    console.warn(
      "Assertion.includeStack is deprecated, use chai.config.includeStack instead."
    ), _e.includeStack = t;
  }
  /** @returns {boolean} */
  static get showDiff() {
    return console.warn(
      "Assertion.showDiff is deprecated, use chai.config.showDiff instead."
    ), _e.showDiff;
  }
  /** @param {boolean} value */
  static set showDiff(t) {
    console.warn(
      "Assertion.showDiff is deprecated, use chai.config.showDiff instead."
    ), _e.showDiff = t;
  }
  /**
   * @param {string} name
   * @param {Function} fn
   */
  static addProperty(t, n) {
    Vo(this.prototype, t, n);
  }
  /**
   * @param {string} name
   * @param {Function} fn
   */
  static addMethod(t, n) {
    Uo(this.prototype, t, n);
  }
  /**
   * @param {string} name
   * @param {Function} fn
   * @param {Function} chainingBehavior
   */
  static addChainableMethod(t, n, r) {
    Yo(this.prototype, t, n, r);
  }
  /**
   * @param {string} name
   * @param {Function} fn
   */
  static overwriteProperty(t, n) {
    Xo(this.prototype, t, n);
  }
  /**
   * @param {string} name
   * @param {Function} fn
   */
  static overwriteMethod(t, n) {
    Ko(this.prototype, t, n);
  }
  /**
   * @param {string} name
   * @param {Function} fn
   * @param {Function} chainingBehavior
   */
  static overwriteChainableMethod(t, n, r) {
    Go(this.prototype, t, n, r);
  }
  /**
   * ### .assert(expression, message, negateMessage, expected, actual, showDiff)
   *
   * Executes an expression and check expectations. Throws AssertionError for reporting if test doesn't pass.
   *
   * @name assert
   * @param {unknown} _expr to be tested
   * @param {string | Function} msg or function that returns message to display if expression fails
   * @param {string | Function} _negateMsg or function that returns negatedMessage to display if negated expression fails
   * @param {unknown} expected value (remember to check for negation)
   * @param {unknown} _actual (optional) will default to `this.obj`
   * @param {boolean} showDiff (optional) when set to `true`, assert will display a diff in addition to the message if expression fails
   * @returns {void}
   */
  assert(t, n, r, o, s, i) {
    const a = Do(this, arguments);
    if (i !== !1 && (i = !0), o === void 0 && s === void 0 && (i = !1), _e.showDiff !== !0 && (i = !1), !a) {
      n = qo(this, arguments);
      const c = {
        actual: Zn(this, arguments),
        expected: o,
        showDiff: i
      }, l = Qo(this, arguments);
      throw l && (c.operator = l), new re(
        n,
        c,
        // @ts-expect-error Not sure what to do about these types yet
        _e.includeStack ? this.assert : G(this, "ssfi")
      );
    }
  }
  /**
   * Quick reference to stored `actual` value for plugin developers.
   *
   * @returns {unknown}
   */
  get _obj() {
    return G(this, "object");
  }
  /**
   * Quick reference to stored `actual` value for plugin developers.
   *
   * @param {unknown} val
   */
  set _obj(t) {
    G(this, "object", t);
  }
}, v(Et, "Assertion"), Et);
function un() {
  return _e.useProxy && typeof Proxy < "u" && typeof Reflect < "u";
}
v(un, "isProxyEnabled");
function Vo(e, t, n) {
  n = n === void 0 ? function() {
  } : n, Object.defineProperty(e, t, {
    get: /* @__PURE__ */ v(function r() {
      !un() && !G(this, "lockSsfi") && G(this, "ssfi", r);
      let o = n.call(this);
      if (o !== void 0) return o;
      let s = new y();
      return Ke(this, s), s;
    }, "propertyGetter"),
    configurable: !0
  });
}
v(Vo, "addProperty");
var Od = Object.getOwnPropertyDescriptor(function() {
}, "length");
function ln(e, t, n) {
  return Od.configurable && Object.defineProperty(e, "length", {
    get: /* @__PURE__ */ v(function() {
      throw Error(
        n ? "Invalid Chai property: " + t + '.length. Due to a compatibility issue, "length" cannot directly follow "' + t + '". Use "' + t + '.lengthOf" instead.' : "Invalid Chai property: " + t + '.length. See docs for proper usage of "' + t + '".'
      );
    }, "get")
  }), e;
}
v(ln, "addLengthGuard");
function Tu(e) {
  let t = Object.getOwnPropertyNames(e);
  function n(o) {
    t.indexOf(o) === -1 && t.push(o);
  }
  v(n, "addProperty");
  let r = Object.getPrototypeOf(e);
  for (; r !== null; )
    Object.getOwnPropertyNames(r).forEach(n), r = Object.getPrototypeOf(r);
  return t;
}
v(Tu, "getProperties");
var Ni = ["__flags", "__methods", "_obj", "assert"];
function qt(e, t) {
  return un() ? new Proxy(e, {
    get: /* @__PURE__ */ v(function n(r, o) {
      if (typeof o == "string" && _e.proxyExcludedKeys.indexOf(o) === -1 && !Reflect.has(r, o)) {
        if (t)
          throw Error(
            "Invalid Chai property: " + t + "." + o + '. See docs for proper usage of "' + t + '".'
          );
        let s = null, i = 4;
        throw Tu(r).forEach(function(a) {
          if (
            // we actually mean to check `Object.prototype` here
            // eslint-disable-next-line no-prototype-builtins
            !Object.prototype.hasOwnProperty(a) && Ni.indexOf(a) === -1
          ) {
            let u = Eu(o, a, i);
            u < i && (s = a, i = u);
          }
        }), Error(
          s !== null ? "Invalid Chai property: " + o + '. Did you mean "' + s + '"?' : "Invalid Chai property: " + o
        );
      }
      return Ni.indexOf(o) === -1 && !G(r, "lockSsfi") && G(r, "ssfi", n), Reflect.get(r, o);
    }, "proxyGetter")
  }) : e;
}
v(qt, "proxify");
function Eu(e, t, n) {
  if (Math.abs(e.length - t.length) >= n)
    return n;
  let r = [];
  for (let o = 0; o <= e.length; o++)
    r[o] = Array(t.length + 1).fill(0), r[o][0] = o;
  for (let o = 0; o < t.length; o++)
    r[0][o] = o;
  for (let o = 1; o <= e.length; o++) {
    let s = e.charCodeAt(o - 1);
    for (let i = 1; i <= t.length; i++) {
      if (Math.abs(o - i) >= n) {
        r[o][i] = n;
        continue;
      }
      r[o][i] = Math.min(
        r[o - 1][i] + 1,
        r[o][i - 1] + 1,
        r[o - 1][i - 1] + (s === t.charCodeAt(i - 1) ? 0 : 1)
      );
    }
  }
  return r[e.length][t.length];
}
v(Eu, "stringDistanceCapped");
function Uo(e, t, n) {
  let r = /* @__PURE__ */ v(function() {
    G(this, "lockSsfi") || G(this, "ssfi", r);
    let o = n.apply(this, arguments);
    if (o !== void 0) return o;
    let s = new y();
    return Ke(this, s), s;
  }, "methodWrapper");
  ln(r, t, !1), e[t] = qt(r, t);
}
v(Uo, "addMethod");
function Xo(e, t, n) {
  let r = Object.getOwnPropertyDescriptor(e, t), o = /* @__PURE__ */ v(function() {
  }, "_super");
  r && typeof r.get == "function" && (o = r.get), Object.defineProperty(e, t, {
    get: /* @__PURE__ */ v(function s() {
      !un() && !G(this, "lockSsfi") && G(this, "ssfi", s);
      let i = G(this, "lockSsfi");
      G(this, "lockSsfi", !0);
      let a = n(o).call(this);
      if (G(this, "lockSsfi", i), a !== void 0)
        return a;
      let u = new y();
      return Ke(this, u), u;
    }, "overwritingPropertyGetter"),
    configurable: !0
  });
}
v(Xo, "overwriteProperty");
function Ko(e, t, n) {
  let r = e[t], o = /* @__PURE__ */ v(function() {
    throw new Error(t + " is not a function");
  }, "_super");
  r && typeof r == "function" && (o = r);
  let s = /* @__PURE__ */ v(function() {
    G(this, "lockSsfi") || G(this, "ssfi", s);
    let i = G(this, "lockSsfi");
    G(this, "lockSsfi", !0);
    let a = n(o).apply(this, arguments);
    if (G(this, "lockSsfi", i), a !== void 0)
      return a;
    let u = new y();
    return Ke(this, u), u;
  }, "overwritingMethodWrapper");
  ln(s, t, !1), e[t] = qt(s, t);
}
v(Ko, "overwriteMethod");
var Ad = typeof Object.setPrototypeOf == "function", ki = /* @__PURE__ */ v(function() {
}, "testFn"), Md = Object.getOwnPropertyNames(ki).filter(function(e) {
  let t = Object.getOwnPropertyDescriptor(ki, e);
  return typeof t != "object" ? !0 : !t.configurable;
}), Pd = Function.prototype.call, Nd = Function.prototype.apply;
function Yo(e, t, n, r) {
  typeof r != "function" && (r = /* @__PURE__ */ v(function() {
  }, "chainingBehavior"));
  let o = {
    method: n,
    chainingBehavior: r
  };
  e.__methods || (e.__methods = {}), e.__methods[t] = o, Object.defineProperty(e, t, {
    get: /* @__PURE__ */ v(function() {
      o.chainingBehavior.call(this);
      let i = /* @__PURE__ */ v(function() {
        G(this, "lockSsfi") || G(this, "ssfi", i);
        let a = o.method.apply(this, arguments);
        if (a !== void 0)
          return a;
        let u = new y();
        return Ke(this, u), u;
      }, "chainableMethodWrapper");
      if (ln(i, t, !0), Ad) {
        let a = Object.create(this);
        a.call = Pd, a.apply = Nd, Object.setPrototypeOf(i, a);
      } else
        Object.getOwnPropertyNames(e).forEach(function(u) {
          if (Md.indexOf(u) !== -1)
            return;
          let c = Object.getOwnPropertyDescriptor(e, u);
          Object.defineProperty(i, u, c);
        });
      return Ke(this, i), qt(i);
    }, "chainableMethodGetter"),
    configurable: !0
  });
}
v(Yo, "addChainableMethod");
function Go(e, t, n, r) {
  let o = e.__methods[t], s = o.chainingBehavior;
  o.chainingBehavior = /* @__PURE__ */ v(function() {
    let u = r(s).call(this);
    if (u !== void 0)
      return u;
    let c = new y();
    return Ke(this, c), c;
  }, "overwritingChainableMethodGetter");
  let i = o.method;
  o.method = /* @__PURE__ */ v(function() {
    let u = n(i).apply(this, arguments);
    if (u !== void 0)
      return u;
    let c = new y();
    return Ke(this, c), c;
  }, "overwritingChainableMethodWrapper");
}
v(Go, "overwriteChainableMethod");
function Dn(e, t) {
  return ee(e) < ee(t) ? -1 : 1;
}
v(Dn, "compareByInspect");
function Ho(e) {
  return typeof Object.getOwnPropertySymbols != "function" ? [] : Object.getOwnPropertySymbols(e).filter(function(t) {
    return Object.getOwnPropertyDescriptor(e, t).enumerable;
  });
}
v(Ho, "getOwnEnumerablePropertySymbols");
function Zo(e) {
  return Object.keys(e).concat(Ho(e));
}
v(Zo, "getOwnEnumerableProperties");
var Ln = Number.isNaN;
function vu(e) {
  let t = ue(e);
  return ["Array", "Object", "Function"].indexOf(t) !== -1;
}
v(vu, "isObjectType");
function Qo(e, t) {
  let n = G(e, "operator"), r = G(e, "negate"), o = t[3], s = r ? t[2] : t[1];
  if (n)
    return n;
  if (typeof s == "function" && (s = s()), s = s || "", !s || /\shave\s/.test(s))
    return;
  let i = vu(o);
  return /\snot\s/.test(s) ? i ? "notDeepStrictEqual" : "notStrictEqual" : i ? "deepStrictEqual" : "strictEqual";
}
v(Qo, "getOperator");
function er(e) {
  return e.name;
}
v(er, "getName");
function qn(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}
v(qn, "isRegExp");
function be(e) {
  return ["Number", "BigInt"].includes(ue(e));
}
v(be, "isNumeric");
var { flag: T } = Se;
[
  "to",
  "be",
  "been",
  "is",
  "and",
  "has",
  "have",
  "with",
  "that",
  "which",
  "at",
  "of",
  "same",
  "but",
  "does",
  "still",
  "also"
].forEach(function(e) {
  y.addProperty(e);
});
y.addProperty("not", function() {
  T(this, "negate", !0);
});
y.addProperty("deep", function() {
  T(this, "deep", !0);
});
y.addProperty("nested", function() {
  T(this, "nested", !0);
});
y.addProperty("own", function() {
  T(this, "own", !0);
});
y.addProperty("ordered", function() {
  T(this, "ordered", !0);
});
y.addProperty("any", function() {
  T(this, "any", !0), T(this, "all", !1);
});
y.addProperty("all", function() {
  T(this, "all", !0), T(this, "any", !1);
});
var ji = {
  function: [
    "function",
    "asyncfunction",
    "generatorfunction",
    "asyncgeneratorfunction"
  ],
  asyncfunction: ["asyncfunction", "asyncgeneratorfunction"],
  generatorfunction: ["generatorfunction", "asyncgeneratorfunction"],
  asyncgeneratorfunction: ["asyncgeneratorfunction"]
};
function es(e, t) {
  t && T(this, "message", t), e = e.toLowerCase();
  let n = T(this, "object"), r = ~["a", "e", "i", "o", "u"].indexOf(e.charAt(0)) ? "an " : "a ";
  const o = ue(n).toLowerCase();
  ji.function.includes(e) ? this.assert(
    ji[e].includes(o),
    "expected #{this} to be " + r + e,
    "expected #{this} not to be " + r + e
  ) : this.assert(
    e === o,
    "expected #{this} to be " + r + e,
    "expected #{this} not to be " + r + e
  );
}
v(es, "an");
y.addChainableMethod("an", es);
y.addChainableMethod("a", es);
function xu(e, t) {
  return Ln(e) && Ln(t) || e === t;
}
v(xu, "SameValueZero");
function fn() {
  T(this, "contains", !0);
}
v(fn, "includeChainingBehavior");
function hn(e, t) {
  t && T(this, "message", t);
  let n = T(this, "object"), r = ue(n).toLowerCase(), o = T(this, "message"), s = T(this, "negate"), i = T(this, "ssfi"), a = T(this, "deep"), u = a ? "deep " : "", c = a ? T(this, "eql") : xu;
  o = o ? o + ": " : "";
  let l = !1;
  switch (r) {
    case "string":
      l = n.indexOf(e) !== -1;
      break;
    case "weakset":
      if (a)
        throw new re(
          o + "unable to use .deep.include with WeakSet",
          void 0,
          i
        );
      l = n.has(e);
      break;
    case "map":
      n.forEach(function(f) {
        l = l || c(f, e);
      });
      break;
    case "set":
      a ? n.forEach(function(f) {
        l = l || c(f, e);
      }) : l = n.has(e);
      break;
    case "array":
      a ? l = n.some(function(f) {
        return c(f, e);
      }) : l = n.indexOf(e) !== -1;
      break;
    default: {
      if (e !== Object(e))
        throw new re(
          o + "the given combination of arguments (" + r + " and " + ue(e).toLowerCase() + ") is invalid for this assertion. You can use an array, a map, an object, a set, a string, or a weakset instead of a " + ue(e).toLowerCase(),
          void 0,
          i
        );
      let f = Object.keys(e), d = null, h = 0;
      if (f.forEach(function(m) {
        let p = new y(n);
        if (Ke(this, p, !0), T(p, "lockSsfi", !0), !s || f.length === 1) {
          p.property(m, e[m]);
          return;
        }
        try {
          p.property(m, e[m]);
        } catch (b) {
          if (!Ae.compatibleConstructor(b, re))
            throw b;
          d === null && (d = b), h++;
        }
      }, this), s && f.length > 1 && h === f.length)
        throw d;
      return;
    }
  }
  this.assert(
    l,
    "expected #{this} to " + u + "include " + ee(e),
    "expected #{this} to not " + u + "include " + ee(e)
  );
}
v(hn, "include");
y.addChainableMethod("include", hn, fn);
y.addChainableMethod("contain", hn, fn);
y.addChainableMethod("contains", hn, fn);
y.addChainableMethod("includes", hn, fn);
y.addProperty("ok", function() {
  this.assert(
    T(this, "object"),
    "expected #{this} to be truthy",
    "expected #{this} to be falsy"
  );
});
y.addProperty("true", function() {
  this.assert(
    T(this, "object") === !0,
    "expected #{this} to be true",
    "expected #{this} to be false",
    !T(this, "negate")
  );
});
y.addProperty("numeric", function() {
  const e = T(this, "object");
  this.assert(
    ["Number", "BigInt"].includes(ue(e)),
    "expected #{this} to be numeric",
    "expected #{this} to not be numeric",
    !T(this, "negate")
  );
});
y.addProperty("callable", function() {
  const e = T(this, "object"), t = T(this, "ssfi"), n = T(this, "message"), r = n ? `${n}: ` : "", o = T(this, "negate"), s = o ? `${r}expected ${ee(e)} not to be a callable function` : `${r}expected ${ee(e)} to be a callable function`, i = [
    "Function",
    "AsyncFunction",
    "GeneratorFunction",
    "AsyncGeneratorFunction"
  ].includes(ue(e));
  if (i && o || !i && !o)
    throw new re(s, void 0, t);
});
y.addProperty("false", function() {
  this.assert(
    T(this, "object") === !1,
    "expected #{this} to be false",
    "expected #{this} to be true",
    !!T(this, "negate")
  );
});
y.addProperty("null", function() {
  this.assert(
    T(this, "object") === null,
    "expected #{this} to be null",
    "expected #{this} not to be null"
  );
});
y.addProperty("undefined", function() {
  this.assert(
    T(this, "object") === void 0,
    "expected #{this} to be undefined",
    "expected #{this} not to be undefined"
  );
});
y.addProperty("NaN", function() {
  this.assert(
    Ln(T(this, "object")),
    "expected #{this} to be NaN",
    "expected #{this} not to be NaN"
  );
});
function ts() {
  let e = T(this, "object");
  this.assert(
    e != null,
    "expected #{this} to exist",
    "expected #{this} to not exist"
  );
}
v(ts, "assertExist");
y.addProperty("exist", ts);
y.addProperty("exists", ts);
y.addProperty("empty", function() {
  let e = T(this, "object"), t = T(this, "ssfi"), n = T(this, "message"), r;
  switch (n = n ? n + ": " : "", ue(e).toLowerCase()) {
    case "array":
    case "string":
      r = e.length;
      break;
    case "map":
    case "set":
      r = e.size;
      break;
    case "weakmap":
    case "weakset":
      throw new re(
        n + ".empty was passed a weak collection",
        void 0,
        t
      );
    case "function": {
      const o = n + ".empty was passed a function " + er(e);
      throw new re(o.trim(), void 0, t);
    }
    default:
      if (e !== Object(e))
        throw new re(
          n + ".empty was passed non-string primitive " + ee(e),
          void 0,
          t
        );
      r = Object.keys(e).length;
  }
  this.assert(
    r === 0,
    "expected #{this} to be empty",
    "expected #{this} not to be empty"
  );
});
function ns() {
  let e = T(this, "object"), t = ue(e);
  this.assert(
    t === "Arguments",
    "expected #{this} to be arguments but got " + t,
    "expected #{this} to not be arguments"
  );
}
v(ns, "checkArguments");
y.addProperty("arguments", ns);
y.addProperty("Arguments", ns);
function tr(e, t) {
  t && T(this, "message", t);
  let n = T(this, "object");
  if (T(this, "deep")) {
    let r = T(this, "lockSsfi");
    T(this, "lockSsfi", !0), this.eql(e), T(this, "lockSsfi", r);
  } else
    this.assert(
      e === n,
      "expected #{this} to equal #{exp}",
      "expected #{this} to not equal #{exp}",
      e,
      this._obj,
      !0
    );
}
v(tr, "assertEqual");
y.addMethod("equal", tr);
y.addMethod("equals", tr);
y.addMethod("eq", tr);
function rs(e, t) {
  t && T(this, "message", t);
  let n = T(this, "eql");
  this.assert(
    n(e, T(this, "object")),
    "expected #{this} to deeply equal #{exp}",
    "expected #{this} to not deeply equal #{exp}",
    e,
    this._obj,
    !0
  );
}
v(rs, "assertEql");
y.addMethod("eql", rs);
y.addMethod("eqls", rs);
function nr(e, t) {
  t && T(this, "message", t);
  let n = T(this, "object"), r = T(this, "doLength"), o = T(this, "message"), s = o ? o + ": " : "", i = T(this, "ssfi"), a = ue(n).toLowerCase(), u = ue(e).toLowerCase();
  if (r && a !== "map" && a !== "set" && new y(n, o, i, !0).to.have.property("length"), !r && a === "date" && u !== "date")
    throw new re(
      s + "the argument to above must be a date",
      void 0,
      i
    );
  if (!be(e) && (r || be(n)))
    throw new re(
      s + "the argument to above must be a number",
      void 0,
      i
    );
  if (!r && a !== "date" && !be(n)) {
    let c = a === "string" ? "'" + n + "'" : n;
    throw new re(
      s + "expected " + c + " to be a number or a date",
      void 0,
      i
    );
  }
  if (r) {
    let c = "length", l;
    a === "map" || a === "set" ? (c = "size", l = n.size) : l = n.length, this.assert(
      l > e,
      "expected #{this} to have a " + c + " above #{exp} but got #{act}",
      "expected #{this} to not have a " + c + " above #{exp}",
      e,
      l
    );
  } else
    this.assert(
      n > e,
      "expected #{this} to be above #{exp}",
      "expected #{this} to be at most #{exp}",
      e
    );
}
v(nr, "assertAbove");
y.addMethod("above", nr);
y.addMethod("gt", nr);
y.addMethod("greaterThan", nr);
function rr(e, t) {
  t && T(this, "message", t);
  let n = T(this, "object"), r = T(this, "doLength"), o = T(this, "message"), s = o ? o + ": " : "", i = T(this, "ssfi"), a = ue(n).toLowerCase(), u = ue(e).toLowerCase(), c, l = !0;
  if (r && a !== "map" && a !== "set" && new y(n, o, i, !0).to.have.property("length"), !r && a === "date" && u !== "date")
    c = s + "the argument to least must be a date";
  else if (!be(e) && (r || be(n)))
    c = s + "the argument to least must be a number";
  else if (!r && a !== "date" && !be(n)) {
    let f = a === "string" ? "'" + n + "'" : n;
    c = s + "expected " + f + " to be a number or a date";
  } else
    l = !1;
  if (l)
    throw new re(c, void 0, i);
  if (r) {
    let f = "length", d;
    a === "map" || a === "set" ? (f = "size", d = n.size) : d = n.length, this.assert(
      d >= e,
      "expected #{this} to have a " + f + " at least #{exp} but got #{act}",
      "expected #{this} to have a " + f + " below #{exp}",
      e,
      d
    );
  } else
    this.assert(
      n >= e,
      "expected #{this} to be at least #{exp}",
      "expected #{this} to be below #{exp}",
      e
    );
}
v(rr, "assertLeast");
y.addMethod("least", rr);
y.addMethod("gte", rr);
y.addMethod("greaterThanOrEqual", rr);
function or(e, t) {
  t && T(this, "message", t);
  let n = T(this, "object"), r = T(this, "doLength"), o = T(this, "message"), s = o ? o + ": " : "", i = T(this, "ssfi"), a = ue(n).toLowerCase(), u = ue(e).toLowerCase(), c, l = !0;
  if (r && a !== "map" && a !== "set" && new y(n, o, i, !0).to.have.property("length"), !r && a === "date" && u !== "date")
    c = s + "the argument to below must be a date";
  else if (!be(e) && (r || be(n)))
    c = s + "the argument to below must be a number";
  else if (!r && a !== "date" && !be(n)) {
    let f = a === "string" ? "'" + n + "'" : n;
    c = s + "expected " + f + " to be a number or a date";
  } else
    l = !1;
  if (l)
    throw new re(c, void 0, i);
  if (r) {
    let f = "length", d;
    a === "map" || a === "set" ? (f = "size", d = n.size) : d = n.length, this.assert(
      d < e,
      "expected #{this} to have a " + f + " below #{exp} but got #{act}",
      "expected #{this} to not have a " + f + " below #{exp}",
      e,
      d
    );
  } else
    this.assert(
      n < e,
      "expected #{this} to be below #{exp}",
      "expected #{this} to be at least #{exp}",
      e
    );
}
v(or, "assertBelow");
y.addMethod("below", or);
y.addMethod("lt", or);
y.addMethod("lessThan", or);
function sr(e, t) {
  t && T(this, "message", t);
  let n = T(this, "object"), r = T(this, "doLength"), o = T(this, "message"), s = o ? o + ": " : "", i = T(this, "ssfi"), a = ue(n).toLowerCase(), u = ue(e).toLowerCase(), c, l = !0;
  if (r && a !== "map" && a !== "set" && new y(n, o, i, !0).to.have.property("length"), !r && a === "date" && u !== "date")
    c = s + "the argument to most must be a date";
  else if (!be(e) && (r || be(n)))
    c = s + "the argument to most must be a number";
  else if (!r && a !== "date" && !be(n)) {
    let f = a === "string" ? "'" + n + "'" : n;
    c = s + "expected " + f + " to be a number or a date";
  } else
    l = !1;
  if (l)
    throw new re(c, void 0, i);
  if (r) {
    let f = "length", d;
    a === "map" || a === "set" ? (f = "size", d = n.size) : d = n.length, this.assert(
      d <= e,
      "expected #{this} to have a " + f + " at most #{exp} but got #{act}",
      "expected #{this} to have a " + f + " above #{exp}",
      e,
      d
    );
  } else
    this.assert(
      n <= e,
      "expected #{this} to be at most #{exp}",
      "expected #{this} to be above #{exp}",
      e
    );
}
v(sr, "assertMost");
y.addMethod("most", sr);
y.addMethod("lte", sr);
y.addMethod("lessThanOrEqual", sr);
y.addMethod("within", function(e, t, n) {
  n && T(this, "message", n);
  let r = T(this, "object"), o = T(this, "doLength"), s = T(this, "message"), i = s ? s + ": " : "", a = T(this, "ssfi"), u = ue(r).toLowerCase(), c = ue(e).toLowerCase(), l = ue(t).toLowerCase(), f, d = !0, h = c === "date" && l === "date" ? e.toISOString() + ".." + t.toISOString() : e + ".." + t;
  if (o && u !== "map" && u !== "set" && new y(r, s, a, !0).to.have.property("length"), !o && u === "date" && (c !== "date" || l !== "date"))
    f = i + "the arguments to within must be dates";
  else if ((!be(e) || !be(t)) && (o || be(r)))
    f = i + "the arguments to within must be numbers";
  else if (!o && u !== "date" && !be(r)) {
    let m = u === "string" ? "'" + r + "'" : r;
    f = i + "expected " + m + " to be a number or a date";
  } else
    d = !1;
  if (d)
    throw new re(f, void 0, a);
  if (o) {
    let m = "length", p;
    u === "map" || u === "set" ? (m = "size", p = r.size) : p = r.length, this.assert(
      p >= e && p <= t,
      "expected #{this} to have a " + m + " within " + h,
      "expected #{this} to not have a " + m + " within " + h
    );
  } else
    this.assert(
      r >= e && r <= t,
      "expected #{this} to be within " + h,
      "expected #{this} to not be within " + h
    );
});
function os(e, t) {
  t && T(this, "message", t);
  let n = T(this, "object"), r = T(this, "ssfi"), o = T(this, "message"), s;
  try {
    s = n instanceof e;
  } catch (a) {
    throw a instanceof TypeError ? (o = o ? o + ": " : "", new re(
      o + "The instanceof assertion needs a constructor but " + ue(e) + " was given.",
      void 0,
      r
    )) : a;
  }
  let i = er(e);
  i == null && (i = "an unnamed constructor"), this.assert(
    s,
    "expected #{this} to be an instance of " + i,
    "expected #{this} to not be an instance of " + i
  );
}
v(os, "assertInstanceOf");
y.addMethod("instanceof", os);
y.addMethod("instanceOf", os);
function ss(e, t, n) {
  n && T(this, "message", n);
  let r = T(this, "nested"), o = T(this, "own"), s = T(this, "message"), i = T(this, "object"), a = T(this, "ssfi"), u = typeof e;
  if (s = s ? s + ": " : "", r) {
    if (u !== "string")
      throw new re(
        s + "the argument to property must be a string when using nested syntax",
        void 0,
        a
      );
  } else if (u !== "string" && u !== "number" && u !== "symbol")
    throw new re(
      s + "the argument to property must be a string, number, or symbol",
      void 0,
      a
    );
  if (r && o)
    throw new re(
      s + 'The "nested" and "own" flags cannot be combined.',
      void 0,
      a
    );
  if (i == null)
    throw new re(
      s + "Target cannot be null or undefined.",
      void 0,
      a
    );
  let c = T(this, "deep"), l = T(this, "negate"), f = r ? Jo(i, e) : null, d = r ? f.value : i[e], h = c ? T(this, "eql") : (b, S) => b === S, m = "";
  c && (m += "deep "), o && (m += "own "), r && (m += "nested "), m += "property ";
  let p;
  o ? p = Object.prototype.hasOwnProperty.call(i, e) : r ? p = f.exists : p = Qn(i, e), (!l || arguments.length === 1) && this.assert(
    p,
    "expected #{this} to have " + m + ee(e),
    "expected #{this} to not have " + m + ee(e)
  ), arguments.length > 1 && this.assert(
    p && h(t, d),
    "expected #{this} to have " + m + ee(e) + " of #{exp}, but got #{act}",
    "expected #{this} to not have " + m + ee(e) + " of #{act}",
    t,
    d
  ), T(this, "object", d);
}
v(ss, "assertProperty");
y.addMethod("property", ss);
function is(e, t, n) {
  T(this, "own", !0), ss.apply(this, arguments);
}
v(is, "assertOwnProperty");
y.addMethod("ownProperty", is);
y.addMethod("haveOwnProperty", is);
function as(e, t, n) {
  typeof t == "string" && (n = t, t = null), n && T(this, "message", n);
  let r = T(this, "object"), o = Object.getOwnPropertyDescriptor(Object(r), e), s = T(this, "eql");
  o && t ? this.assert(
    s(t, o),
    "expected the own property descriptor for " + ee(e) + " on #{this} to match " + ee(t) + ", got " + ee(o),
    "expected the own property descriptor for " + ee(e) + " on #{this} to not match " + ee(t),
    t,
    o,
    !0
  ) : this.assert(
    o,
    "expected #{this} to have an own property descriptor for " + ee(e),
    "expected #{this} to not have an own property descriptor for " + ee(e)
  ), T(this, "object", o);
}
v(as, "assertOwnPropertyDescriptor");
y.addMethod("ownPropertyDescriptor", as);
y.addMethod("haveOwnPropertyDescriptor", as);
function cs() {
  T(this, "doLength", !0);
}
v(cs, "assertLengthChain");
function us(e, t) {
  t && T(this, "message", t);
  let n = T(this, "object"), r = ue(n).toLowerCase(), o = T(this, "message"), s = T(this, "ssfi"), i = "length", a;
  switch (r) {
    case "map":
    case "set":
      i = "size", a = n.size;
      break;
    default:
      new y(n, o, s, !0).to.have.property("length"), a = n.length;
  }
  this.assert(
    a == e,
    "expected #{this} to have a " + i + " of #{exp} but got #{act}",
    "expected #{this} to not have a " + i + " of #{act}",
    e,
    a
  );
}
v(us, "assertLength");
y.addChainableMethod("length", us, cs);
y.addChainableMethod("lengthOf", us, cs);
function ls(e, t) {
  t && T(this, "message", t);
  let n = T(this, "object");
  this.assert(
    e.exec(n),
    "expected #{this} to match " + e,
    "expected #{this} not to match " + e
  );
}
v(ls, "assertMatch");
y.addMethod("match", ls);
y.addMethod("matches", ls);
y.addMethod("string", function(e, t) {
  t && T(this, "message", t);
  let n = T(this, "object"), r = T(this, "message"), o = T(this, "ssfi");
  new y(n, r, o, !0).is.a("string"), this.assert(
    ~n.indexOf(e),
    "expected #{this} to contain " + ee(e),
    "expected #{this} to not contain " + ee(e)
  );
});
function fs(e) {
  let t = T(this, "object"), n = ue(t), r = ue(e), o = T(this, "ssfi"), s = T(this, "deep"), i, a = "", u, c = !0, l = T(this, "message");
  l = l ? l + ": " : "";
  let f = l + "when testing keys against an object or an array you must give a single Array|Object|String argument or multiple String arguments";
  if (n === "Map" || n === "Set")
    a = s ? "deeply " : "", u = [], t.forEach(function(S, x) {
      u.push(x);
    }), r !== "Array" && (e = Array.prototype.slice.call(arguments));
  else {
    switch (u = Zo(t), r) {
      case "Array":
        if (arguments.length > 1)
          throw new re(f, void 0, o);
        break;
      case "Object":
        if (arguments.length > 1)
          throw new re(f, void 0, o);
        e = Object.keys(e);
        break;
      default:
        e = Array.prototype.slice.call(arguments);
    }
    e = e.map(function(S) {
      return typeof S == "symbol" ? S : String(S);
    });
  }
  if (!e.length)
    throw new re(l + "keys required", void 0, o);
  let d = e.length, h = T(this, "any"), m = T(this, "all"), p = e, b = s ? T(this, "eql") : (S, x) => S === x;
  if (!h && !m && (m = !0), h && (c = p.some(function(S) {
    return u.some(function(x) {
      return b(S, x);
    });
  })), m && (c = p.every(function(S) {
    return u.some(function(x) {
      return b(S, x);
    });
  }), T(this, "contains") || (c = c && e.length == u.length)), d > 1) {
    e = e.map(function(x) {
      return ee(x);
    });
    let S = e.pop();
    m && (i = e.join(", ") + ", and " + S), h && (i = e.join(", ") + ", or " + S);
  } else
    i = ee(e[0]);
  i = (d > 1 ? "keys " : "key ") + i, i = (T(this, "contains") ? "contain " : "have ") + i, this.assert(
    c,
    "expected #{this} to " + a + i,
    "expected #{this} to not " + a + i,
    p.slice(0).sort(Dn),
    u.sort(Dn),
    !0
  );
}
v(fs, "assertKeys");
y.addMethod("keys", fs);
y.addMethod("key", fs);
function ir(e, t, n) {
  n && T(this, "message", n);
  let r = T(this, "object"), o = T(this, "ssfi"), s = T(this, "message"), i = T(this, "negate") || !1;
  new y(r, s, o, !0).is.a("function"), (qn(e) || typeof e == "string") && (t = e, e = null);
  let a, u = !1;
  try {
    r();
  } catch (h) {
    u = !0, a = h;
  }
  let c = e === void 0 && t === void 0, l = !!(e && t), f = !1, d = !1;
  if (c || !c && !i) {
    let h = "an error";
    e instanceof Error ? h = "#{exp}" : e && (h = Ae.getConstructorName(e));
    let m = a;
    if (a instanceof Error)
      m = a.toString();
    else if (typeof a == "string")
      m = a;
    else if (a && (typeof a == "object" || typeof a == "function"))
      try {
        m = Ae.getConstructorName(a);
      } catch {
      }
    this.assert(
      u,
      "expected #{this} to throw " + h,
      "expected #{this} to not throw an error but #{act} was thrown",
      e && e.toString(),
      m
    );
  }
  if (e && a && (e instanceof Error && Ae.compatibleInstance(
    a,
    e
  ) === i && (l && i ? f = !0 : this.assert(
    i,
    "expected #{this} to throw #{exp} but #{act} was thrown",
    "expected #{this} to not throw #{exp}" + (a && !i ? " but #{act} was thrown" : ""),
    e.toString(),
    a.toString()
  )), Ae.compatibleConstructor(
    a,
    e
  ) === i && (l && i ? f = !0 : this.assert(
    i,
    "expected #{this} to throw #{exp} but #{act} was thrown",
    "expected #{this} to not throw #{exp}" + (a ? " but #{act} was thrown" : ""),
    e instanceof Error ? e.toString() : e && Ae.getConstructorName(e),
    a instanceof Error ? a.toString() : a && Ae.getConstructorName(a)
  ))), a && t !== void 0 && t !== null) {
    let h = "including";
    qn(t) && (h = "matching"), Ae.compatibleMessage(
      a,
      t
    ) === i && (l && i ? d = !0 : this.assert(
      i,
      "expected #{this} to throw error " + h + " #{exp} but got #{act}",
      "expected #{this} to throw error not " + h + " #{exp}",
      t,
      Ae.getMessage(a)
    ));
  }
  f && d && this.assert(
    i,
    "expected #{this} to throw #{exp} but #{act} was thrown",
    "expected #{this} to not throw #{exp}" + (a ? " but #{act} was thrown" : ""),
    e instanceof Error ? e.toString() : e && Ae.getConstructorName(e),
    a instanceof Error ? a.toString() : a && Ae.getConstructorName(a)
  ), T(this, "object", a);
}
v(ir, "assertThrows");
y.addMethod("throw", ir);
y.addMethod("throws", ir);
y.addMethod("Throw", ir);
function hs(e, t) {
  t && T(this, "message", t);
  let n = T(this, "object"), r = T(this, "itself"), o = typeof n == "function" && !r ? n.prototype[e] : n[e];
  this.assert(
    typeof o == "function",
    "expected #{this} to respond to " + ee(e),
    "expected #{this} to not respond to " + ee(e)
  );
}
v(hs, "respondTo");
y.addMethod("respondTo", hs);
y.addMethod("respondsTo", hs);
y.addProperty("itself", function() {
  T(this, "itself", !0);
});
function ds(e, t) {
  t && T(this, "message", t);
  let n = T(this, "object"), r = e(n);
  this.assert(
    r,
    "expected #{this} to satisfy " + bt(e),
    "expected #{this} to not satisfy" + bt(e),
    !T(this, "negate"),
    r
  );
}
v(ds, "satisfy");
y.addMethod("satisfy", ds);
y.addMethod("satisfies", ds);
function ps(e, t, n) {
  n && T(this, "message", n);
  let r = T(this, "object"), o = T(this, "message"), s = T(this, "ssfi");
  new y(r, o, s, !0).is.numeric;
  let i = "A `delta` value is required for `closeTo`";
  if (t == null)
    throw new re(
      o ? `${o}: ${i}` : i,
      void 0,
      s
    );
  if (new y(t, o, s, !0).is.numeric, i = "A `expected` value is required for `closeTo`", e == null)
    throw new re(
      o ? `${o}: ${i}` : i,
      void 0,
      s
    );
  new y(e, o, s, !0).is.numeric;
  const a = /* @__PURE__ */ v((c) => c < 0n ? -c : c, "abs"), u = /* @__PURE__ */ v((c) => parseFloat(parseFloat(c).toPrecision(12)), "strip");
  this.assert(
    u(a(r - e)) <= t,
    "expected #{this} to be close to " + e + " +/- " + t,
    "expected #{this} not to be close to " + e + " +/- " + t
  );
}
v(ps, "closeTo");
y.addMethod("closeTo", ps);
y.addMethod("approximately", ps);
function $u(e, t, n, r, o) {
  let s = Array.from(t), i = Array.from(e);
  if (!r) {
    if (i.length !== s.length) return !1;
    s = s.slice();
  }
  return i.every(function(a, u) {
    if (o) return n ? n(a, s[u]) : a === s[u];
    if (!n) {
      let c = s.indexOf(a);
      return c === -1 ? !1 : (r || s.splice(c, 1), !0);
    }
    return s.some(function(c, l) {
      return n(a, c) ? (r || s.splice(l, 1), !0) : !1;
    });
  });
}
v($u, "isSubsetOf");
y.addMethod("members", function(e, t) {
  t && T(this, "message", t);
  let n = T(this, "object"), r = T(this, "message"), o = T(this, "ssfi");
  new y(n, r, o, !0).to.be.iterable, new y(e, r, o, !0).to.be.iterable;
  let s = T(this, "contains"), i = T(this, "ordered"), a, u, c;
  s ? (a = i ? "an ordered superset" : "a superset", u = "expected #{this} to be " + a + " of #{exp}", c = "expected #{this} to not be " + a + " of #{exp}") : (a = i ? "ordered members" : "members", u = "expected #{this} to have the same " + a + " as #{exp}", c = "expected #{this} to not have the same " + a + " as #{exp}");
  let l = T(this, "deep") ? T(this, "eql") : void 0;
  this.assert(
    $u(e, n, l, s, i),
    u,
    c,
    e,
    n,
    !0
  );
});
y.addProperty("iterable", function(e) {
  e && T(this, "message", e);
  let t = T(this, "object");
  this.assert(
    t != null && t[Symbol.iterator],
    "expected #{this} to be an iterable",
    "expected #{this} to not be an iterable",
    t
  );
});
function _u(e, t) {
  t && T(this, "message", t);
  let n = T(this, "object"), r = T(this, "message"), o = T(this, "ssfi"), s = T(this, "contains"), i = T(this, "deep"), a = T(this, "eql");
  new y(e, r, o, !0).to.be.an("array"), s ? this.assert(
    e.some(function(u) {
      return n.indexOf(u) > -1;
    }),
    "expected #{this} to contain one of #{exp}",
    "expected #{this} to not contain one of #{exp}",
    e,
    n
  ) : i ? this.assert(
    e.some(function(u) {
      return a(n, u);
    }),
    "expected #{this} to deeply equal one of #{exp}",
    "expected #{this} to deeply equal one of #{exp}",
    e,
    n
  ) : this.assert(
    e.indexOf(n) > -1,
    "expected #{this} to be one of #{exp}",
    "expected #{this} to not be one of #{exp}",
    e,
    n
  );
}
v(_u, "oneOf");
y.addMethod("oneOf", _u);
function ms(e, t, n) {
  n && T(this, "message", n);
  let r = T(this, "object"), o = T(this, "message"), s = T(this, "ssfi");
  new y(r, o, s, !0).is.a("function");
  let i;
  t ? (new y(e, o, s, !0).to.have.property(t), i = e[t]) : (new y(e, o, s, !0).is.a("function"), i = e()), r();
  let a = t == null ? e() : e[t], u = t == null ? i : "." + t;
  T(this, "deltaMsgObj", u), T(this, "initialDeltaValue", i), T(this, "finalDeltaValue", a), T(this, "deltaBehavior", "change"), T(this, "realDelta", a !== i), this.assert(
    i !== a,
    "expected " + u + " to change",
    "expected " + u + " to not change"
  );
}
v(ms, "assertChanges");
y.addMethod("change", ms);
y.addMethod("changes", ms);
function gs(e, t, n) {
  n && T(this, "message", n);
  let r = T(this, "object"), o = T(this, "message"), s = T(this, "ssfi");
  new y(r, o, s, !0).is.a("function");
  let i;
  t ? (new y(e, o, s, !0).to.have.property(t), i = e[t]) : (new y(e, o, s, !0).is.a("function"), i = e()), new y(i, o, s, !0).is.a("number"), r();
  let a = t == null ? e() : e[t], u = t == null ? i : "." + t;
  T(this, "deltaMsgObj", u), T(this, "initialDeltaValue", i), T(this, "finalDeltaValue", a), T(this, "deltaBehavior", "increase"), T(this, "realDelta", a - i), this.assert(
    a - i > 0,
    "expected " + u + " to increase",
    "expected " + u + " to not increase"
  );
}
v(gs, "assertIncreases");
y.addMethod("increase", gs);
y.addMethod("increases", gs);
function ys(e, t, n) {
  n && T(this, "message", n);
  let r = T(this, "object"), o = T(this, "message"), s = T(this, "ssfi");
  new y(r, o, s, !0).is.a("function");
  let i;
  t ? (new y(e, o, s, !0).to.have.property(t), i = e[t]) : (new y(e, o, s, !0).is.a("function"), i = e()), new y(i, o, s, !0).is.a("number"), r();
  let a = t == null ? e() : e[t], u = t == null ? i : "." + t;
  T(this, "deltaMsgObj", u), T(this, "initialDeltaValue", i), T(this, "finalDeltaValue", a), T(this, "deltaBehavior", "decrease"), T(this, "realDelta", i - a), this.assert(
    a - i < 0,
    "expected " + u + " to decrease",
    "expected " + u + " to not decrease"
  );
}
v(ys, "assertDecreases");
y.addMethod("decrease", ys);
y.addMethod("decreases", ys);
function Iu(e, t) {
  t && T(this, "message", t);
  let n = T(this, "deltaMsgObj"), r = T(this, "initialDeltaValue"), o = T(this, "finalDeltaValue"), s = T(this, "deltaBehavior"), i = T(this, "realDelta"), a;
  s === "change" ? a = Math.abs(o - r) === Math.abs(e) : a = i === Math.abs(e), this.assert(
    a,
    "expected " + n + " to " + s + " by " + e,
    "expected " + n + " to not " + s + " by " + e
  );
}
v(Iu, "assertDelta");
y.addMethod("by", Iu);
y.addProperty("extensible", function() {
  let e = T(this, "object"), t = e === Object(e) && Object.isExtensible(e);
  this.assert(
    t,
    "expected #{this} to be extensible",
    "expected #{this} to not be extensible"
  );
});
y.addProperty("sealed", function() {
  let e = T(this, "object"), t = e === Object(e) ? Object.isSealed(e) : !0;
  this.assert(
    t,
    "expected #{this} to be sealed",
    "expected #{this} to not be sealed"
  );
});
y.addProperty("frozen", function() {
  let e = T(this, "object"), t = e === Object(e) ? Object.isFrozen(e) : !0;
  this.assert(
    t,
    "expected #{this} to be frozen",
    "expected #{this} to not be frozen"
  );
});
y.addProperty("finite", function(e) {
  let t = T(this, "object");
  this.assert(
    typeof t == "number" && isFinite(t),
    "expected #{this} to be a finite number",
    "expected #{this} to not be a finite number"
  );
});
function Bn(e, t) {
  return e === t ? !0 : typeof t != typeof e ? !1 : typeof e != "object" || e === null ? e === t : t ? Array.isArray(e) ? Array.isArray(t) ? e.every(function(n) {
    return t.some(function(r) {
      return Bn(n, r);
    });
  }) : !1 : e instanceof Date ? t instanceof Date ? e.getTime() === t.getTime() : !1 : Object.keys(e).every(function(n) {
    let r = e[n], o = t[n];
    return typeof r == "object" && r !== null && o !== null ? Bn(r, o) : typeof r == "function" ? r(o) : o === r;
  }) : !1;
}
v(Bn, "compareSubset");
y.addMethod("containSubset", function(e) {
  const t = G(this, "object"), n = _e.showDiff;
  this.assert(
    Bn(e, t),
    "expected #{act} to contain subset #{exp}",
    "expected #{act} to not contain subset #{exp}",
    e,
    t,
    n
  );
});
function wt(e, t) {
  return new y(e, t);
}
v(wt, "expect");
wt.fail = function(e, t, n, r) {
  throw arguments.length < 2 && (n = e, e = void 0), n = n || "expect.fail()", new re(
    n,
    {
      actual: e,
      expected: t,
      operator: r
    },
    wt.fail
  );
};
var Cu = {};
Fo(Cu, {
  Should: () => jd,
  should: () => kd
});
function bs() {
  function e() {
    return this instanceof String || this instanceof Number || this instanceof Boolean || typeof Symbol == "function" && this instanceof Symbol || typeof BigInt == "function" && this instanceof BigInt ? new y(this.valueOf(), null, e) : new y(this, null, e);
  }
  v(e, "shouldGetter");
  function t(r) {
    Object.defineProperty(this, "should", {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    });
  }
  v(t, "shouldSetter"), Object.defineProperty(Object.prototype, "should", {
    set: t,
    get: e,
    configurable: !0
  });
  let n = {};
  return n.fail = function(r, o, s, i) {
    throw arguments.length < 2 && (s = r, r = void 0), s = s || "should.fail()", new re(
      s,
      {
        actual: r,
        expected: o,
        operator: i
      },
      n.fail
    );
  }, n.equal = function(r, o, s) {
    new y(r, s).to.equal(o);
  }, n.Throw = function(r, o, s, i) {
    new y(r, i).to.Throw(o, s);
  }, n.exist = function(r, o) {
    new y(r, o).to.exist;
  }, n.not = {}, n.not.equal = function(r, o, s) {
    new y(r, s).to.not.equal(o);
  }, n.not.Throw = function(r, o, s, i) {
    new y(r, i).to.not.Throw(o, s);
  }, n.not.exist = function(r, o) {
    new y(r, o).to.not.exist;
  }, n.throw = n.Throw, n.not.throw = n.not.Throw, n;
}
v(bs, "loadShould");
var kd = bs, jd = bs;
function g(e, t) {
  new y(null, null, g, !0).assert(e, t, "[ negation message unavailable ]");
}
v(g, "assert");
g.fail = function(e, t, n, r) {
  throw arguments.length < 2 && (n = e, e = void 0), n = n || "assert.fail()", new re(
    n,
    {
      actual: e,
      expected: t,
      operator: r
    },
    g.fail
  );
};
g.isOk = function(e, t) {
  new y(e, t, g.isOk, !0).is.ok;
};
g.isNotOk = function(e, t) {
  new y(e, t, g.isNotOk, !0).is.not.ok;
};
g.equal = function(e, t, n) {
  let r = new y(e, n, g.equal, !0);
  r.assert(
    t == G(r, "object"),
    "expected #{this} to equal #{exp}",
    "expected #{this} to not equal #{act}",
    t,
    e,
    !0
  );
};
g.notEqual = function(e, t, n) {
  let r = new y(e, n, g.notEqual, !0);
  r.assert(
    t != G(r, "object"),
    "expected #{this} to not equal #{exp}",
    "expected #{this} to equal #{act}",
    t,
    e,
    !0
  );
};
g.strictEqual = function(e, t, n) {
  new y(e, n, g.strictEqual, !0).to.equal(t);
};
g.notStrictEqual = function(e, t, n) {
  new y(e, n, g.notStrictEqual, !0).to.not.equal(t);
};
g.deepEqual = g.deepStrictEqual = function(e, t, n) {
  new y(e, n, g.deepEqual, !0).to.eql(t);
};
g.notDeepEqual = function(e, t, n) {
  new y(e, n, g.notDeepEqual, !0).to.not.eql(t);
};
g.isAbove = function(e, t, n) {
  new y(e, n, g.isAbove, !0).to.be.above(t);
};
g.isAtLeast = function(e, t, n) {
  new y(e, n, g.isAtLeast, !0).to.be.least(t);
};
g.isBelow = function(e, t, n) {
  new y(e, n, g.isBelow, !0).to.be.below(t);
};
g.isAtMost = function(e, t, n) {
  new y(e, n, g.isAtMost, !0).to.be.most(t);
};
g.isTrue = function(e, t) {
  new y(e, t, g.isTrue, !0).is.true;
};
g.isNotTrue = function(e, t) {
  new y(e, t, g.isNotTrue, !0).to.not.equal(!0);
};
g.isFalse = function(e, t) {
  new y(e, t, g.isFalse, !0).is.false;
};
g.isNotFalse = function(e, t) {
  new y(e, t, g.isNotFalse, !0).to.not.equal(!1);
};
g.isNull = function(e, t) {
  new y(e, t, g.isNull, !0).to.equal(null);
};
g.isNotNull = function(e, t) {
  new y(e, t, g.isNotNull, !0).to.not.equal(null);
};
g.isNaN = function(e, t) {
  new y(e, t, g.isNaN, !0).to.be.NaN;
};
g.isNotNaN = function(e, t) {
  new y(e, t, g.isNotNaN, !0).not.to.be.NaN;
};
g.exists = function(e, t) {
  new y(e, t, g.exists, !0).to.exist;
};
g.notExists = function(e, t) {
  new y(e, t, g.notExists, !0).to.not.exist;
};
g.isUndefined = function(e, t) {
  new y(e, t, g.isUndefined, !0).to.equal(void 0);
};
g.isDefined = function(e, t) {
  new y(e, t, g.isDefined, !0).to.not.equal(void 0);
};
g.isCallable = function(e, t) {
  new y(e, t, g.isCallable, !0).is.callable;
};
g.isNotCallable = function(e, t) {
  new y(e, t, g.isNotCallable, !0).is.not.callable;
};
g.isObject = function(e, t) {
  new y(e, t, g.isObject, !0).to.be.a("object");
};
g.isNotObject = function(e, t) {
  new y(e, t, g.isNotObject, !0).to.not.be.a("object");
};
g.isArray = function(e, t) {
  new y(e, t, g.isArray, !0).to.be.an("array");
};
g.isNotArray = function(e, t) {
  new y(e, t, g.isNotArray, !0).to.not.be.an("array");
};
g.isString = function(e, t) {
  new y(e, t, g.isString, !0).to.be.a("string");
};
g.isNotString = function(e, t) {
  new y(e, t, g.isNotString, !0).to.not.be.a("string");
};
g.isNumber = function(e, t) {
  new y(e, t, g.isNumber, !0).to.be.a("number");
};
g.isNotNumber = function(e, t) {
  new y(e, t, g.isNotNumber, !0).to.not.be.a("number");
};
g.isNumeric = function(e, t) {
  new y(e, t, g.isNumeric, !0).is.numeric;
};
g.isNotNumeric = function(e, t) {
  new y(e, t, g.isNotNumeric, !0).is.not.numeric;
};
g.isFinite = function(e, t) {
  new y(e, t, g.isFinite, !0).to.be.finite;
};
g.isBoolean = function(e, t) {
  new y(e, t, g.isBoolean, !0).to.be.a("boolean");
};
g.isNotBoolean = function(e, t) {
  new y(e, t, g.isNotBoolean, !0).to.not.be.a("boolean");
};
g.typeOf = function(e, t, n) {
  new y(e, n, g.typeOf, !0).to.be.a(t);
};
g.notTypeOf = function(e, t, n) {
  new y(e, n, g.notTypeOf, !0).to.not.be.a(t);
};
g.instanceOf = function(e, t, n) {
  new y(e, n, g.instanceOf, !0).to.be.instanceOf(t);
};
g.notInstanceOf = function(e, t, n) {
  new y(e, n, g.notInstanceOf, !0).to.not.be.instanceOf(
    t
  );
};
g.include = function(e, t, n) {
  new y(e, n, g.include, !0).include(t);
};
g.notInclude = function(e, t, n) {
  new y(e, n, g.notInclude, !0).not.include(t);
};
g.deepInclude = function(e, t, n) {
  new y(e, n, g.deepInclude, !0).deep.include(t);
};
g.notDeepInclude = function(e, t, n) {
  new y(e, n, g.notDeepInclude, !0).not.deep.include(t);
};
g.nestedInclude = function(e, t, n) {
  new y(e, n, g.nestedInclude, !0).nested.include(t);
};
g.notNestedInclude = function(e, t, n) {
  new y(e, n, g.notNestedInclude, !0).not.nested.include(
    t
  );
};
g.deepNestedInclude = function(e, t, n) {
  new y(e, n, g.deepNestedInclude, !0).deep.nested.include(
    t
  );
};
g.notDeepNestedInclude = function(e, t, n) {
  new y(
    e,
    n,
    g.notDeepNestedInclude,
    !0
  ).not.deep.nested.include(t);
};
g.ownInclude = function(e, t, n) {
  new y(e, n, g.ownInclude, !0).own.include(t);
};
g.notOwnInclude = function(e, t, n) {
  new y(e, n, g.notOwnInclude, !0).not.own.include(t);
};
g.deepOwnInclude = function(e, t, n) {
  new y(e, n, g.deepOwnInclude, !0).deep.own.include(t);
};
g.notDeepOwnInclude = function(e, t, n) {
  new y(e, n, g.notDeepOwnInclude, !0).not.deep.own.include(
    t
  );
};
g.match = function(e, t, n) {
  new y(e, n, g.match, !0).to.match(t);
};
g.notMatch = function(e, t, n) {
  new y(e, n, g.notMatch, !0).to.not.match(t);
};
g.property = function(e, t, n) {
  new y(e, n, g.property, !0).to.have.property(t);
};
g.notProperty = function(e, t, n) {
  new y(e, n, g.notProperty, !0).to.not.have.property(t);
};
g.propertyVal = function(e, t, n, r) {
  new y(e, r, g.propertyVal, !0).to.have.property(t, n);
};
g.notPropertyVal = function(e, t, n, r) {
  new y(e, r, g.notPropertyVal, !0).to.not.have.property(
    t,
    n
  );
};
g.deepPropertyVal = function(e, t, n, r) {
  new y(e, r, g.deepPropertyVal, !0).to.have.deep.property(
    t,
    n
  );
};
g.notDeepPropertyVal = function(e, t, n, r) {
  new y(
    e,
    r,
    g.notDeepPropertyVal,
    !0
  ).to.not.have.deep.property(t, n);
};
g.ownProperty = function(e, t, n) {
  new y(e, n, g.ownProperty, !0).to.have.own.property(t);
};
g.notOwnProperty = function(e, t, n) {
  new y(e, n, g.notOwnProperty, !0).to.not.have.own.property(
    t
  );
};
g.ownPropertyVal = function(e, t, n, r) {
  new y(e, r, g.ownPropertyVal, !0).to.have.own.property(
    t,
    n
  );
};
g.notOwnPropertyVal = function(e, t, n, r) {
  new y(
    e,
    r,
    g.notOwnPropertyVal,
    !0
  ).to.not.have.own.property(t, n);
};
g.deepOwnPropertyVal = function(e, t, n, r) {
  new y(
    e,
    r,
    g.deepOwnPropertyVal,
    !0
  ).to.have.deep.own.property(t, n);
};
g.notDeepOwnPropertyVal = function(e, t, n, r) {
  new y(
    e,
    r,
    g.notDeepOwnPropertyVal,
    !0
  ).to.not.have.deep.own.property(t, n);
};
g.nestedProperty = function(e, t, n) {
  new y(e, n, g.nestedProperty, !0).to.have.nested.property(
    t
  );
};
g.notNestedProperty = function(e, t, n) {
  new y(
    e,
    n,
    g.notNestedProperty,
    !0
  ).to.not.have.nested.property(t);
};
g.nestedPropertyVal = function(e, t, n, r) {
  new y(
    e,
    r,
    g.nestedPropertyVal,
    !0
  ).to.have.nested.property(t, n);
};
g.notNestedPropertyVal = function(e, t, n, r) {
  new y(
    e,
    r,
    g.notNestedPropertyVal,
    !0
  ).to.not.have.nested.property(t, n);
};
g.deepNestedPropertyVal = function(e, t, n, r) {
  new y(
    e,
    r,
    g.deepNestedPropertyVal,
    !0
  ).to.have.deep.nested.property(t, n);
};
g.notDeepNestedPropertyVal = function(e, t, n, r) {
  new y(
    e,
    r,
    g.notDeepNestedPropertyVal,
    !0
  ).to.not.have.deep.nested.property(t, n);
};
g.lengthOf = function(e, t, n) {
  new y(e, n, g.lengthOf, !0).to.have.lengthOf(t);
};
g.hasAnyKeys = function(e, t, n) {
  new y(e, n, g.hasAnyKeys, !0).to.have.any.keys(t);
};
g.hasAllKeys = function(e, t, n) {
  new y(e, n, g.hasAllKeys, !0).to.have.all.keys(t);
};
g.containsAllKeys = function(e, t, n) {
  new y(e, n, g.containsAllKeys, !0).to.contain.all.keys(
    t
  );
};
g.doesNotHaveAnyKeys = function(e, t, n) {
  new y(e, n, g.doesNotHaveAnyKeys, !0).to.not.have.any.keys(
    t
  );
};
g.doesNotHaveAllKeys = function(e, t, n) {
  new y(e, n, g.doesNotHaveAllKeys, !0).to.not.have.all.keys(
    t
  );
};
g.hasAnyDeepKeys = function(e, t, n) {
  new y(e, n, g.hasAnyDeepKeys, !0).to.have.any.deep.keys(
    t
  );
};
g.hasAllDeepKeys = function(e, t, n) {
  new y(e, n, g.hasAllDeepKeys, !0).to.have.all.deep.keys(
    t
  );
};
g.containsAllDeepKeys = function(e, t, n) {
  new y(
    e,
    n,
    g.containsAllDeepKeys,
    !0
  ).to.contain.all.deep.keys(t);
};
g.doesNotHaveAnyDeepKeys = function(e, t, n) {
  new y(
    e,
    n,
    g.doesNotHaveAnyDeepKeys,
    !0
  ).to.not.have.any.deep.keys(t);
};
g.doesNotHaveAllDeepKeys = function(e, t, n) {
  new y(
    e,
    n,
    g.doesNotHaveAllDeepKeys,
    !0
  ).to.not.have.all.deep.keys(t);
};
g.throws = function(e, t, n, r) {
  (typeof t == "string" || t instanceof RegExp) && (n = t, t = null);
  let o = new y(e, r, g.throws, !0).to.throw(
    t,
    n
  );
  return G(o, "object");
};
g.doesNotThrow = function(e, t, n, r) {
  (typeof t == "string" || t instanceof RegExp) && (n = t, t = null), new y(e, r, g.doesNotThrow, !0).to.not.throw(
    t,
    n
  );
};
g.operator = function(e, t, n, r) {
  let o;
  switch (t) {
    case "==":
      o = e == n;
      break;
    case "===":
      o = e === n;
      break;
    case ">":
      o = e > n;
      break;
    case ">=":
      o = e >= n;
      break;
    case "<":
      o = e < n;
      break;
    case "<=":
      o = e <= n;
      break;
    case "!=":
      o = e != n;
      break;
    case "!==":
      o = e !== n;
      break;
    default:
      throw r = r && r + ": ", new re(
        r + 'Invalid operator "' + t + '"',
        void 0,
        g.operator
      );
  }
  let s = new y(o, r, g.operator, !0);
  s.assert(
    G(s, "object") === !0,
    "expected " + ee(e) + " to be " + t + " " + ee(n),
    "expected " + ee(e) + " to not be " + t + " " + ee(n)
  );
};
g.closeTo = function(e, t, n, r) {
  new y(e, r, g.closeTo, !0).to.be.closeTo(t, n);
};
g.approximately = function(e, t, n, r) {
  new y(e, r, g.approximately, !0).to.be.approximately(
    t,
    n
  );
};
g.sameMembers = function(e, t, n) {
  new y(e, n, g.sameMembers, !0).to.have.same.members(t);
};
g.notSameMembers = function(e, t, n) {
  new y(
    e,
    n,
    g.notSameMembers,
    !0
  ).to.not.have.same.members(t);
};
g.sameDeepMembers = function(e, t, n) {
  new y(
    e,
    n,
    g.sameDeepMembers,
    !0
  ).to.have.same.deep.members(t);
};
g.notSameDeepMembers = function(e, t, n) {
  new y(
    e,
    n,
    g.notSameDeepMembers,
    !0
  ).to.not.have.same.deep.members(t);
};
g.sameOrderedMembers = function(e, t, n) {
  new y(
    e,
    n,
    g.sameOrderedMembers,
    !0
  ).to.have.same.ordered.members(t);
};
g.notSameOrderedMembers = function(e, t, n) {
  new y(
    e,
    n,
    g.notSameOrderedMembers,
    !0
  ).to.not.have.same.ordered.members(t);
};
g.sameDeepOrderedMembers = function(e, t, n) {
  new y(
    e,
    n,
    g.sameDeepOrderedMembers,
    !0
  ).to.have.same.deep.ordered.members(t);
};
g.notSameDeepOrderedMembers = function(e, t, n) {
  new y(
    e,
    n,
    g.notSameDeepOrderedMembers,
    !0
  ).to.not.have.same.deep.ordered.members(t);
};
g.includeMembers = function(e, t, n) {
  new y(e, n, g.includeMembers, !0).to.include.members(
    t
  );
};
g.notIncludeMembers = function(e, t, n) {
  new y(
    e,
    n,
    g.notIncludeMembers,
    !0
  ).to.not.include.members(t);
};
g.includeDeepMembers = function(e, t, n) {
  new y(
    e,
    n,
    g.includeDeepMembers,
    !0
  ).to.include.deep.members(t);
};
g.notIncludeDeepMembers = function(e, t, n) {
  new y(
    e,
    n,
    g.notIncludeDeepMembers,
    !0
  ).to.not.include.deep.members(t);
};
g.includeOrderedMembers = function(e, t, n) {
  new y(
    e,
    n,
    g.includeOrderedMembers,
    !0
  ).to.include.ordered.members(t);
};
g.notIncludeOrderedMembers = function(e, t, n) {
  new y(
    e,
    n,
    g.notIncludeOrderedMembers,
    !0
  ).to.not.include.ordered.members(t);
};
g.includeDeepOrderedMembers = function(e, t, n) {
  new y(
    e,
    n,
    g.includeDeepOrderedMembers,
    !0
  ).to.include.deep.ordered.members(t);
};
g.notIncludeDeepOrderedMembers = function(e, t, n) {
  new y(
    e,
    n,
    g.notIncludeDeepOrderedMembers,
    !0
  ).to.not.include.deep.ordered.members(t);
};
g.oneOf = function(e, t, n) {
  new y(e, n, g.oneOf, !0).to.be.oneOf(t);
};
g.isIterable = function(e, t) {
  if (e == null || !e[Symbol.iterator])
    throw t = t ? `${t} expected ${ee(e)} to be an iterable` : `expected ${ee(e)} to be an iterable`, new re(t, void 0, g.isIterable);
};
g.changes = function(e, t, n, r) {
  arguments.length === 3 && typeof t == "function" && (r = n, n = null), new y(e, r, g.changes, !0).to.change(t, n);
};
g.changesBy = function(e, t, n, r, o) {
  if (arguments.length === 4 && typeof t == "function") {
    let s = r;
    r = n, o = s;
  } else arguments.length === 3 && (r = n, n = null);
  new y(e, o, g.changesBy, !0).to.change(t, n).by(r);
};
g.doesNotChange = function(e, t, n, r) {
  return arguments.length === 3 && typeof t == "function" && (r = n, n = null), new y(e, r, g.doesNotChange, !0).to.not.change(
    t,
    n
  );
};
g.changesButNotBy = function(e, t, n, r, o) {
  if (arguments.length === 4 && typeof t == "function") {
    let s = r;
    r = n, o = s;
  } else arguments.length === 3 && (r = n, n = null);
  new y(e, o, g.changesButNotBy, !0).to.change(t, n).but.not.by(r);
};
g.increases = function(e, t, n, r) {
  return arguments.length === 3 && typeof t == "function" && (r = n, n = null), new y(e, r, g.increases, !0).to.increase(t, n);
};
g.increasesBy = function(e, t, n, r, o) {
  if (arguments.length === 4 && typeof t == "function") {
    let s = r;
    r = n, o = s;
  } else arguments.length === 3 && (r = n, n = null);
  new y(e, o, g.increasesBy, !0).to.increase(t, n).by(r);
};
g.doesNotIncrease = function(e, t, n, r) {
  return arguments.length === 3 && typeof t == "function" && (r = n, n = null), new y(e, r, g.doesNotIncrease, !0).to.not.increase(
    t,
    n
  );
};
g.increasesButNotBy = function(e, t, n, r, o) {
  if (arguments.length === 4 && typeof t == "function") {
    let s = r;
    r = n, o = s;
  } else arguments.length === 3 && (r = n, n = null);
  new y(e, o, g.increasesButNotBy, !0).to.increase(t, n).but.not.by(r);
};
g.decreases = function(e, t, n, r) {
  return arguments.length === 3 && typeof t == "function" && (r = n, n = null), new y(e, r, g.decreases, !0).to.decrease(t, n);
};
g.decreasesBy = function(e, t, n, r, o) {
  if (arguments.length === 4 && typeof t == "function") {
    let s = r;
    r = n, o = s;
  } else arguments.length === 3 && (r = n, n = null);
  new y(e, o, g.decreasesBy, !0).to.decrease(t, n).by(r);
};
g.doesNotDecrease = function(e, t, n, r) {
  return arguments.length === 3 && typeof t == "function" && (r = n, n = null), new y(e, r, g.doesNotDecrease, !0).to.not.decrease(
    t,
    n
  );
};
g.doesNotDecreaseBy = function(e, t, n, r, o) {
  if (arguments.length === 4 && typeof t == "function") {
    let s = r;
    r = n, o = s;
  } else arguments.length === 3 && (r = n, n = null);
  return new y(e, o, g.doesNotDecreaseBy, !0).to.not.decrease(t, n).by(r);
};
g.decreasesButNotBy = function(e, t, n, r, o) {
  if (arguments.length === 4 && typeof t == "function") {
    let s = r;
    r = n, o = s;
  } else arguments.length === 3 && (r = n, n = null);
  new y(e, o, g.decreasesButNotBy, !0).to.decrease(t, n).but.not.by(r);
};
g.ifError = function(e) {
  if (e)
    throw e;
};
g.isExtensible = function(e, t) {
  new y(e, t, g.isExtensible, !0).to.be.extensible;
};
g.isNotExtensible = function(e, t) {
  new y(e, t, g.isNotExtensible, !0).to.not.be.extensible;
};
g.isSealed = function(e, t) {
  new y(e, t, g.isSealed, !0).to.be.sealed;
};
g.isNotSealed = function(e, t) {
  new y(e, t, g.isNotSealed, !0).to.not.be.sealed;
};
g.isFrozen = function(e, t) {
  new y(e, t, g.isFrozen, !0).to.be.frozen;
};
g.isNotFrozen = function(e, t) {
  new y(e, t, g.isNotFrozen, !0).to.not.be.frozen;
};
g.isEmpty = function(e, t) {
  new y(e, t, g.isEmpty, !0).to.be.empty;
};
g.isNotEmpty = function(e, t) {
  new y(e, t, g.isNotEmpty, !0).to.not.be.empty;
};
g.containsSubset = function(e, t, n) {
  new y(e, n).to.containSubset(t);
};
g.doesNotContainSubset = function(e, t, n) {
  new y(e, n).to.not.containSubset(t);
};
var Rd = [
  ["isOk", "ok"],
  ["isNotOk", "notOk"],
  ["throws", "throw"],
  ["throws", "Throw"],
  ["isExtensible", "extensible"],
  ["isNotExtensible", "notExtensible"],
  ["isSealed", "sealed"],
  ["isNotSealed", "notSealed"],
  ["isFrozen", "frozen"],
  ["isNotFrozen", "notFrozen"],
  ["isEmpty", "empty"],
  ["isNotEmpty", "notEmpty"],
  ["isCallable", "isFunction"],
  ["isNotCallable", "isNotFunction"],
  ["containsSubset", "containSubset"]
];
for (const [e, t] of Rd)
  g[t] = g[e];
var Ri = [];
function pt(e) {
  const t = {
    use: pt,
    AssertionError: re,
    util: Se,
    config: _e,
    expect: wt,
    assert: g,
    Assertion: y,
    ...Cu
  };
  return ~Ri.indexOf(e) || (e(t, Se), Ri.push(e)), t;
}
v(pt, "use");
/*!
 * Chai - flag utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - test utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - expectTypes utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - getActual utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - message composition utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - transferFlags utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * chai
 * http://chaijs.com
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - isProxyEnabled helper
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - addProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - addLengthGuard utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - getProperties utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - proxify utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - addMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - overwriteProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - overwriteMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - addChainingMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - overwriteChainableMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - compareByInspect utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - getOwnEnumerablePropertySymbols utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - getOwnEnumerableProperties utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - isNaN utility
 * Copyright(c) 2012-2015 Sakthipriyan Vairamani <thechargingvolcano@gmail.com>
 * MIT Licensed
 */
/*!
 * chai
 * Copyright(c) 2011 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*! Bundled license information:

deep-eql/index.js:
  (*!
   * deep-eql
   * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Check to see if the MemoizeMap has recorded a result of the two operands
   *
   * @param {Mixed} leftHandOperand
   * @param {Mixed} rightHandOperand
   * @param {MemoizeMap} memoizeMap
   * @returns {Boolean|null} result
  *)
  (*!
   * Set the result of the equality into the MemoizeMap
   *
   * @param {Mixed} leftHandOperand
   * @param {Mixed} rightHandOperand
   * @param {MemoizeMap} memoizeMap
   * @param {Boolean} result
  *)
  (*!
   * Primary Export
   *)
  (*!
   * The main logic of the `deepEqual` function.
   *
   * @param {Mixed} leftHandOperand
   * @param {Mixed} rightHandOperand
   * @param {Object} [options] (optional) Additional options
   * @param {Array} [options.comparator] (optional) Override default algorithm, determining custom equality.
   * @param {Array} [options.memoize] (optional) Provide a custom memoization object which will cache the results of
      complex objects for a speed boost. By passing `false` you can disable memoization, but this will cause circular
      references to blow the stack.
   * @return {Boolean} equal match
  *)
  (*!
   * Compare two Regular Expressions for equality.
   *
   * @param {RegExp} leftHandOperand
   * @param {RegExp} rightHandOperand
   * @return {Boolean} result
   *)
  (*!
   * Compare two Sets/Maps for equality. Faster than other equality functions.
   *
   * @param {Set} leftHandOperand
   * @param {Set} rightHandOperand
   * @param {Object} [options] (Optional)
   * @return {Boolean} result
   *)
  (*!
   * Simple equality for flat iterable objects such as Arrays, TypedArrays or Node.js buffers.
   *
   * @param {Iterable} leftHandOperand
   * @param {Iterable} rightHandOperand
   * @param {Object} [options] (Optional)
   * @return {Boolean} result
   *)
  (*!
   * Simple equality for generator objects such as those returned by generator functions.
   *
   * @param {Iterable} leftHandOperand
   * @param {Iterable} rightHandOperand
   * @param {Object} [options] (Optional)
   * @return {Boolean} result
   *)
  (*!
   * Determine if the given object has an @@iterator function.
   *
   * @param {Object} target
   * @return {Boolean} `true` if the object has an @@iterator function.
   *)
  (*!
   * Gets all iterator entries from the given Object. If the Object has no @@iterator function, returns an empty array.
   * This will consume the iterator - which could have side effects depending on the @@iterator implementation.
   *
   * @param {Object} target
   * @returns {Array} an array of entries from the @@iterator function
   *)
  (*!
   * Gets all entries from a Generator. This will consume the generator - which could have side effects.
   *
   * @param {Generator} target
   * @returns {Array} an array of entries from the Generator.
   *)
  (*!
   * Gets all own and inherited enumerable keys from a target.
   *
   * @param {Object} target
   * @returns {Array} an array of own and inherited enumerable keys from the target.
   *)
  (*!
   * Determines if two objects have matching values, given a set of keys. Defers to deepEqual for the equality check of
   * each key. If any value of the given key is not equal, the function will return false (early).
   *
   * @param {Mixed} leftHandOperand
   * @param {Mixed} rightHandOperand
   * @param {Array} keys An array of keys to compare the values of leftHandOperand and rightHandOperand against
   * @param {Object} [options] (Optional)
   * @return {Boolean} result
   *)
  (*!
   * Recursively check the equality of two Objects. Once basic sameness has been established it will defer to `deepEqual`
   * for each enumerable key in the object.
   *
   * @param {Mixed} leftHandOperand
   * @param {Mixed} rightHandOperand
   * @param {Object} [options] (Optional)
   * @return {Boolean} result
   *)
  (*!
   * Returns true if the argument is a primitive.
   *
   * This intentionally returns true for all objects that can be compared by reference,
   * including functions and symbols.
   *
   * @param {Mixed} value
   * @return {Boolean} result
   *)
*/
const zn = Symbol.for("matchers-object"), dn = Symbol.for("$$jest-matchers-object"), ar = Symbol.for("expect-global"), ws = Symbol.for("asymmetric-matchers-object"), Fd = {
  toSatisfy(e, t, n) {
    const { printReceived: r, printExpected: o, matcherHint: s } = this.utils, i = t(e);
    return {
      pass: i,
      message: () => i ? `${s(".not.toSatisfy", "received", "")}

Expected value to not satisfy:
${n || o(t)}
Received:
${r(e)}` : `${s(".toSatisfy", "received", "")}

Expected value to satisfy:
${n || o(t)}

Received:
${r(e)}`
    };
  },
  toBeOneOf(e, t) {
    const { equals: n, customTesters: r } = this, { printReceived: o, printExpected: s, matcherHint: i } = this.utils;
    if (!Array.isArray(t))
      throw new TypeError(`You must provide an array to ${i(".toBeOneOf")}, not '${typeof t}'.`);
    const a = t.length === 0 || t.some((u) => n(u, e, r));
    return {
      pass: a,
      message: () => a ? `${i(".not.toBeOneOf", "received", "")}

Expected value to not be one of:
${s(t)}
Received:
${o(e)}` : `${i(".toBeOneOf", "received", "")}

Expected value to be one of:
${s(t)}

Received:
${o(e)}`
    };
  }
}, Wn = de.green, Ss = de.red, Dd = de.inverse, Ld = de.bold, ot = de.dim;
function qd(e, t = "received", n = "expected", r = {}) {
  const { comment: o = "", isDirectExpectCall: s = !1, isNot: i = !1, promise: a = "", secondArgument: u = "", expectedColor: c = Wn, receivedColor: l = Ss, secondArgumentColor: f = Wn } = r;
  let d = "", h = "expect";
  return !s && t !== "" && (d += ot(`${h}(`) + l(t), h = ")"), a !== "" && (d += ot(`${h}.`) + a, h = ""), i && (d += `${ot(`${h}.`)}not`, h = ""), e.includes(".") ? h += e : (d += ot(`${h}.`) + e, h = ""), n === "" ? h += "()" : (d += ot(`${h}(`) + c(n), u && (d += ot(", ") + f(u)), h = ")"), o !== "" && (h += ` // ${o}`), h !== "" && (d += ot(h)), d;
}
const Bd = "·";
function Ou(e) {
  return e.replace(/\s+$/gm, (t) => Bd.repeat(t.length));
}
function zd(e) {
  return Ss(Ou(Pe(e)));
}
function Wd(e) {
  return Wn(Ou(Pe(e)));
}
function Au() {
  return {
    EXPECTED_COLOR: Wn,
    RECEIVED_COLOR: Ss,
    INVERTED_COLOR: Dd,
    BOLD_WEIGHT: Ld,
    DIM_COLOR: ot,
    diff: Lt,
    matcherHint: qd,
    printReceived: zd,
    printExpected: Wd,
    printDiffOrStringify: kc,
    printWithType: Jd
  };
}
function Jd(e, t, n) {
  const r = nn(t), o = r !== "null" && r !== "undefined" ? `${e} has type:  ${r}
` : "", s = `${e} has value: ${n(t)}`;
  return o + s;
}
function Vd(e) {
  if (!Array.isArray(e))
    throw new TypeError(`expect.customEqualityTesters: Must be set to an array of Testers. Was given "${nn(e)}"`);
  globalThis[dn].customEqualityTesters.push(...e);
}
function Ts() {
  return globalThis[dn].customEqualityTesters;
}
function ne(e, t, n, r) {
  return n = n || [], Ht(e, t, [], [], n, r ? Mu : Kd);
}
function Fi(e) {
  return !!e && typeof e == "object" && "asymmetricMatch" in e && Ue("Function", e.asymmetricMatch);
}
function Ud(e, t) {
  const n = Fi(e), r = Fi(t);
  if (!(n && r)) {
    if (n)
      return e.asymmetricMatch(t);
    if (r)
      return t.asymmetricMatch(e);
  }
}
function Ht(e, t, n, r, o, s) {
  let i = !0;
  const a = Ud(e, t);
  if (a !== void 0)
    return a;
  const u = { equals: ne };
  for (let m = 0; m < o.length; m++) {
    const p = o[m].call(u, e, t, o);
    if (p !== void 0)
      return p;
  }
  if (typeof URL == "function" && e instanceof URL && t instanceof URL)
    return e.href === t.href;
  if (Object.is(e, t))
    return !0;
  if (e === null || t === null)
    return e === t;
  const c = Object.prototype.toString.call(e);
  if (c !== Object.prototype.toString.call(t))
    return !1;
  switch (c) {
    case "[object Boolean]":
    case "[object String]":
    case "[object Number]":
      return typeof e != typeof t ? !1 : typeof e != "object" && typeof t != "object" ? Object.is(e, t) : Object.is(e.valueOf(), t.valueOf());
    case "[object Date]": {
      const m = +e, p = +t;
      return m === p || Number.isNaN(m) && Number.isNaN(p);
    }
    case "[object RegExp]":
      return e.source === t.source && e.flags === t.flags;
    case "[object Temporal.Instant]":
    case "[object Temporal.ZonedDateTime]":
    case "[object Temporal.PlainDateTime]":
    case "[object Temporal.PlainDate]":
    case "[object Temporal.PlainTime]":
    case "[object Temporal.PlainYearMonth]":
    case "[object Temporal.PlainMonthDay]":
      return e.equals(t);
    case "[object Temporal.Duration]":
      return e.toString() === t.toString();
  }
  if (typeof e != "object" || typeof t != "object")
    return !1;
  if (Li(e) && Li(t))
    return e.isEqualNode(t);
  let l = n.length;
  for (; l--; ) {
    if (n[l] === e)
      return r[l] === t;
    if (r[l] === t)
      return !1;
  }
  if (n.push(e), r.push(t), c === "[object Array]" && e.length !== t.length)
    return !1;
  if (e instanceof Error && t instanceof Error)
    try {
      return Xd(e, t, n, r, o, s);
    } finally {
      n.pop(), r.pop();
    }
  const f = Di(e, s);
  let d, h = f.length;
  if (Di(t, s).length !== h)
    return !1;
  for (; h--; )
    if (d = f[h], i = s(t, d) && Ht(e[d], t[d], n, r, o, s), !i)
      return !1;
  return n.pop(), r.pop(), i;
}
function Xd(e, t, n, r, o, s) {
  let i = Object.getPrototypeOf(e) === Object.getPrototypeOf(t) && e.name === t.name && e.message === t.message;
  return typeof t.cause < "u" && i && (i = Ht(e.cause, t.cause, n, r, o, s)), e instanceof AggregateError && t instanceof AggregateError && i && (i = Ht(e.errors, t.errors, n, r, o, s)), i && (i = Ht({ ...e }, { ...t }, n, r, o, s)), i;
}
function Di(e, t) {
  const n = [];
  for (const r in e)
    t(e, r) && n.push(r);
  return n.concat(Object.getOwnPropertySymbols(e).filter((r) => Object.getOwnPropertyDescriptor(e, r).enumerable));
}
function Kd(e, t) {
  return Mu(e, t) && e[t] !== void 0;
}
function Mu(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Ue(e, t) {
  return Object.prototype.toString.apply(t) === `[object ${e}]`;
}
function Li(e) {
  return e !== null && typeof e == "object" && "nodeType" in e && typeof e.nodeType == "number" && "nodeName" in e && typeof e.nodeName == "string" && "isEqualNode" in e && typeof e.isEqualNode == "function";
}
const Pu = "@@__IMMUTABLE_KEYED__@@", Nu = "@@__IMMUTABLE_SET__@@", Yd = "@@__IMMUTABLE_LIST__@@", cr = "@@__IMMUTABLE_ORDERED__@@", Gd = "@@__IMMUTABLE_RECORD__@@";
function Hd(e) {
  return !!(e && e[Pu] && !e[cr]);
}
function Zd(e) {
  return !!(e && e[Nu] && !e[cr]);
}
function ur(e) {
  return e != null && typeof e == "object" && !Array.isArray(e);
}
function Qd(e) {
  return !!(e && ur(e) && e[Yd]);
}
function ep(e) {
  return !!(e && ur(e) && e[Pu] && e[cr]);
}
function tp(e) {
  return !!(e && ur(e) && e[Nu] && e[cr]);
}
function np(e) {
  return !!(e && ur(e) && e[Gd]);
}
const ku = Symbol.iterator;
function qi(e) {
  return !!(e != null && e[ku]);
}
function Me(e, t, n = [], r = [], o = []) {
  if (typeof e != "object" || typeof t != "object" || Array.isArray(e) || Array.isArray(t) || !qi(e) || !qi(t))
    return;
  if (e.constructor !== t.constructor)
    return !1;
  let s = r.length;
  for (; s--; )
    if (r[s] === e)
      return o[s] === t;
  r.push(e), o.push(t);
  const i = [...n.filter((c) => c !== Me), a];
  function a(c, l) {
    return Me(c, l, [...n], [...r], [...o]);
  }
  if (e.size !== void 0) {
    if (e.size !== t.size)
      return !1;
    if (Ue("Set", e) || Zd(e)) {
      let c = !0;
      for (const l of e)
        if (!t.has(l)) {
          let f = !1;
          for (const d of t)
            ne(l, d, i) === !0 && (f = !0);
          if (f === !1) {
            c = !1;
            break;
          }
        }
      return r.pop(), o.pop(), c;
    } else if (Ue("Map", e) || Hd(e)) {
      let c = !0;
      for (const l of e)
        if (!t.has(l[0]) || !ne(l[1], t.get(l[0]), i)) {
          let f = !1;
          for (const d of t) {
            const h = ne(l[0], d[0], i);
            let m = !1;
            h === !0 && (m = ne(l[1], d[1], i)), m === !0 && (f = !0);
          }
          if (f === !1) {
            c = !1;
            break;
          }
        }
      return r.pop(), o.pop(), c;
    }
  }
  const u = t[ku]();
  for (const c of e) {
    const l = u.next();
    if (l.done || !ne(c, l.value, i))
      return !1;
  }
  if (!u.next().done)
    return !1;
  if (!Qd(e) && !ep(e) && !tp(e) && !np(e)) {
    const c = Object.entries(e), l = Object.entries(t);
    if (!ne(c, l, i))
      return !1;
  }
  return r.pop(), o.pop(), !0;
}
function Es(e, t) {
  return !e || typeof e != "object" || e === Object.prototype ? !1 : Object.prototype.hasOwnProperty.call(e, t) || Es(Object.getPrototypeOf(e), t);
}
function rp(e) {
  return Mt(e) && !(e instanceof Error) && !Array.isArray(e) && !(e instanceof Date);
}
function Bt(e, t, n = []) {
  const r = n.filter((s) => s !== Bt), o = (s = /* @__PURE__ */ new WeakMap()) => (i, a) => {
    if (rp(a))
      return Object.keys(a).every((u) => {
        if (a[u] != null && typeof a[u] == "object") {
          if (s.has(a[u]))
            return ne(i[u], a[u], r);
          s.set(a[u], !0);
        }
        const c = i != null && Es(i, u) && ne(i[u], a[u], [...r, o(s)]);
        return s.delete(a[u]), c;
      });
  };
  return o()(e, t);
}
function Bi(e, t) {
  if (!(e == null || t == null || e.constructor === t.constructor))
    return !1;
}
function zi(e, t) {
  let n = e, r = t;
  if (!(e instanceof DataView && t instanceof DataView)) {
    if (!(e instanceof ArrayBuffer) || !(t instanceof ArrayBuffer))
      return;
    try {
      n = new DataView(e), r = new DataView(t);
    } catch {
      return;
    }
  }
  if (n.byteLength !== r.byteLength)
    return !1;
  for (let o = 0; o < n.byteLength; o++)
    if (n.getUint8(o) !== r.getUint8(o))
      return !1;
  return !0;
}
function So(e, t, n = []) {
  if (!Array.isArray(e) || !Array.isArray(t))
    return;
  const r = Object.keys(e), o = Object.keys(t), s = n.filter((i) => i !== So);
  return ne(e, t, s, !0) && ne(r, o);
}
function op(e, t = "#{this}", n = "#{exp}") {
  const r = `expected ${t} to be ${n} // Object.is equality`;
  return ["toStrictEqual", "toEqual"].includes(e) ? `${r}

If it should pass with deep equality, replace "toBe" with "${e}"

Expected: ${t}
Received: serializes to the same string
` : r;
}
function sp(e, t) {
  return `${t} ${e}${t === 1 ? "" : "s"}`;
}
function xr(e) {
  return [...Object.keys(e), ...Object.getOwnPropertySymbols(e).filter((t) => {
    var n;
    return (n = Object.getOwnPropertyDescriptor(e, t)) === null || n === void 0 ? void 0 : n.enumerable;
  })];
}
function ip(e, t, n) {
  let r = 0;
  const o = (s = /* @__PURE__ */ new WeakMap()) => (i, a) => {
    if (Array.isArray(i)) {
      if (Array.isArray(a) && a.length === i.length)
        return a.map((u, c) => o(s)(i[c], u));
    } else {
      if (i instanceof Date)
        return i;
      if (Mt(i) && Mt(a)) {
        if (ne(i, a, [
          ...n,
          Me,
          Bt
        ]))
          return a;
        const u = {};
        s.set(i, u), typeof i.constructor == "function" && typeof i.constructor.name == "string" && Object.defineProperty(u, "constructor", {
          enumerable: !1,
          value: i.constructor
        });
        for (const c of xr(i))
          Es(a, c) ? u[c] = s.has(i[c]) ? s.get(i[c]) : o(s)(i[c], a[c]) : s.has(i[c]) || (r += 1, Mt(i[c]) && (r += xr(i[c]).length), o(s)(i[c], a[c]));
        if (xr(u).length > 0)
          return u;
      }
    }
    return i;
  };
  return {
    subset: o()(e, t),
    stripped: r
  };
}
if (!Object.prototype.hasOwnProperty.call(globalThis, zn)) {
  const e = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ Object.create(null), n = [], r = /* @__PURE__ */ Object.create(null);
  Object.defineProperty(globalThis, zn, { get: () => e }), Object.defineProperty(globalThis, dn, {
    configurable: !0,
    get: () => ({
      state: e.get(globalThis[ar]),
      matchers: t,
      customEqualityTesters: n
    })
  }), Object.defineProperty(globalThis, ws, { get: () => r });
}
function Zt(e) {
  return globalThis[zn].get(e);
}
function $r(e, t) {
  const n = globalThis[zn], r = n.get(t) || {}, o = Object.defineProperties(r, {
    ...Object.getOwnPropertyDescriptors(r),
    ...Object.getOwnPropertyDescriptors(e)
  });
  n.set(t, o);
}
let tt = class {
  // should have "jest" to be compatible with its ecosystem
  $$typeof = Symbol.for("jest.asymmetricMatcher");
  constructor(t, n = !1) {
    this.sample = t, this.inverse = n;
  }
  getMatcherContext(t) {
    return {
      ...Zt(t || globalThis[ar]),
      equals: ne,
      isNot: this.inverse,
      customTesters: Ts(),
      utils: {
        ...Au(),
        diff: Lt,
        stringify: Pe,
        iterableEquality: Me,
        subsetEquality: Bt
      }
    };
  }
};
tt.prototype[Symbol.for("chai/inspect")] = function(e) {
  const t = Pe(this, e.depth, { min: !0 });
  return t.length <= e.truncate ? t : `${this.toString()}{…}`;
};
class Wi extends tt {
  constructor(t, n = !1) {
    if (!Ue("String", t))
      throw new Error("Expected is not a string");
    super(t, n);
  }
  asymmetricMatch(t) {
    const n = Ue("String", t) && t.includes(this.sample);
    return this.inverse ? !n : n;
  }
  toString() {
    return `String${this.inverse ? "Not" : ""}Containing`;
  }
  getExpectedType() {
    return "string";
  }
}
class ap extends tt {
  asymmetricMatch(t) {
    return t != null;
  }
  toString() {
    return "Anything";
  }
  toAsymmetricMatcher() {
    return "Anything";
  }
}
class Ji extends tt {
  constructor(t, n = !1) {
    super(t, n);
  }
  getPrototype(t) {
    return Object.getPrototypeOf ? Object.getPrototypeOf(t) : t.constructor.prototype === t ? null : t.constructor.prototype;
  }
  hasProperty(t, n) {
    return t ? Object.prototype.hasOwnProperty.call(t, n) ? !0 : this.hasProperty(this.getPrototype(t), n) : !1;
  }
  asymmetricMatch(t) {
    if (typeof this.sample != "object")
      throw new TypeError(`You must provide an object to ${this.toString()}, not '${typeof this.sample}'.`);
    let n = !0;
    const r = this.getMatcherContext();
    for (const o in this.sample)
      if (!this.hasProperty(t, o) || !ne(this.sample[o], t[o], r.customTesters)) {
        n = !1;
        break;
      }
    return this.inverse ? !n : n;
  }
  toString() {
    return `Object${this.inverse ? "Not" : ""}Containing`;
  }
  getExpectedType() {
    return "object";
  }
}
class Vi extends tt {
  constructor(t, n = !1) {
    super(t, n);
  }
  asymmetricMatch(t) {
    if (!Array.isArray(this.sample))
      throw new TypeError(`You must provide an array to ${this.toString()}, not '${typeof this.sample}'.`);
    const n = this.getMatcherContext(), r = this.sample.length === 0 || Array.isArray(t) && this.sample.every((o) => t.some((s) => ne(o, s, n.customTesters)));
    return this.inverse ? !r : r;
  }
  toString() {
    return `Array${this.inverse ? "Not" : ""}Containing`;
  }
  getExpectedType() {
    return "array";
  }
}
class cp extends tt {
  constructor(t) {
    if (typeof t > "u")
      throw new TypeError("any() expects to be passed a constructor function. Please pass one or use anything() to match any object.");
    super(t);
  }
  fnNameFor(t) {
    if (t.name)
      return t.name;
    const r = Function.prototype.toString.call(t).match(/^(?:async)?\s*function\s*(?:\*\s*)?([\w$]+)\s*\(/);
    return r ? r[1] : "<anonymous>";
  }
  asymmetricMatch(t) {
    return this.sample === String ? typeof t == "string" || t instanceof String : this.sample === Number ? typeof t == "number" || t instanceof Number : this.sample === Function ? typeof t == "function" || typeof t == "function" : this.sample === Boolean ? typeof t == "boolean" || t instanceof Boolean : this.sample === BigInt ? typeof t == "bigint" || t instanceof BigInt : this.sample === Symbol ? typeof t == "symbol" || t instanceof Symbol : this.sample === Object ? typeof t == "object" : t instanceof this.sample;
  }
  toString() {
    return "Any";
  }
  getExpectedType() {
    return this.sample === String ? "string" : this.sample === Number ? "number" : this.sample === Function ? "function" : this.sample === Object ? "object" : this.sample === Boolean ? "boolean" : this.fnNameFor(this.sample);
  }
  toAsymmetricMatcher() {
    return `Any<${this.fnNameFor(this.sample)}>`;
  }
}
class Ui extends tt {
  constructor(t, n = !1) {
    if (!Ue("String", t) && !Ue("RegExp", t))
      throw new Error("Expected is not a String or a RegExp");
    super(new RegExp(t), n);
  }
  asymmetricMatch(t) {
    const n = Ue("String", t) && this.sample.test(t);
    return this.inverse ? !n : n;
  }
  toString() {
    return `String${this.inverse ? "Not" : ""}Matching`;
  }
  getExpectedType() {
    return "string";
  }
}
class Xi extends tt {
  precision;
  constructor(t, n = 2, r = !1) {
    if (!Ue("Number", t))
      throw new Error("Expected is not a Number");
    if (!Ue("Number", n))
      throw new Error("Precision is not a Number");
    super(t), this.inverse = r, this.precision = n;
  }
  asymmetricMatch(t) {
    if (!Ue("Number", t))
      return !1;
    let n = !1;
    return t === Number.POSITIVE_INFINITY && this.sample === Number.POSITIVE_INFINITY || t === Number.NEGATIVE_INFINITY && this.sample === Number.NEGATIVE_INFINITY ? n = !0 : n = Math.abs(this.sample - t) < 10 ** -this.precision / 2, this.inverse ? !n : n;
  }
  toString() {
    return `Number${this.inverse ? "Not" : ""}CloseTo`;
  }
  getExpectedType() {
    return "number";
  }
  toAsymmetricMatcher() {
    return [
      this.toString(),
      this.sample,
      `(${sp("digit", this.precision)})`
    ].join(" ");
  }
}
const up = (e, t) => {
  t.addMethod(e.expect, "anything", () => new ap()), t.addMethod(e.expect, "any", (n) => new cp(n)), t.addMethod(e.expect, "stringContaining", (n) => new Wi(n)), t.addMethod(e.expect, "objectContaining", (n) => new Ji(n)), t.addMethod(e.expect, "arrayContaining", (n) => new Vi(n)), t.addMethod(e.expect, "stringMatching", (n) => new Ui(n)), t.addMethod(e.expect, "closeTo", (n, r) => new Xi(n, r)), e.expect.not = {
    stringContaining: (n) => new Wi(n, !0),
    objectContaining: (n) => new Ji(n, !0),
    arrayContaining: (n) => new Vi(n, !0),
    stringMatching: (n) => new Ui(n, !0),
    closeTo: (n, r) => new Xi(n, r, !0)
  };
};
function Ki(e, t, n) {
  const r = e.flag(t, "negate") ? "not." : "", o = `${e.flag(t, "_name")}(${n ? "expected" : ""})`, s = e.flag(t, "promise");
  return `expect(actual)${s ? `.${s}` : ""}.${r}${o}`;
}
function Yi(e, t, n, r) {
  const o = e;
  if (o && t instanceof Promise) {
    t = t.finally(() => {
      if (!o.promises)
        return;
      const i = o.promises.indexOf(t);
      i !== -1 && o.promises.splice(i, 1);
    }), o.promises || (o.promises = []), o.promises.push(t);
    let s = !1;
    return o.onFinished ?? (o.onFinished = []), o.onFinished.push(() => {
      if (!s) {
        var i;
        const u = (((i = globalThis.__vitest_worker__) === null || i === void 0 ? void 0 : i.onFilterStackTrace) || ((c) => c || ""))(r.stack);
        console.warn([
          `Promise returned by \`${n}\` was not awaited. `,
          "Vitest currently auto-awaits hanging assertions at the end of the test, but this will cause the test to fail in Vitest 3. ",
          `Please remember to await the assertion.
`,
          u
        ].join(""));
      }
    }), {
      then(i, a) {
        return s = !0, t.then(i, a);
      },
      catch(i) {
        return t.catch(i);
      },
      finally(i) {
        return t.finally(i);
      },
      [Symbol.toStringTag]: "Promise"
    };
  }
  return t;
}
function Gi(e, t) {
  var n;
  e.result || (e.result = { state: "fail" }), e.result.state = "fail", (n = e.result).errors || (n.errors = []), e.result.errors.push(qc(t));
}
function ju(e, t, n) {
  return function(...r) {
    if (t !== "withTest" && e.flag(this, "_name", t), !e.flag(this, "soft"))
      return n.apply(this, r);
    const o = e.flag(this, "vitest-test");
    if (!o)
      throw new Error("expect.soft() can only be used inside a test");
    try {
      const s = n.apply(this, r);
      return s && typeof s == "object" && typeof s.then == "function" ? s.then(ph, (i) => {
        Gi(o, i);
      }) : s;
    } catch (s) {
      Gi(o, s);
    }
  };
}
const lp = (e, t) => {
  const { AssertionError: n } = e, r = Ts();
  function o(c, l) {
    const f = (d) => {
      const h = ju(t, d, l);
      t.addMethod(e.Assertion.prototype, d, h), t.addMethod(globalThis[dn].matchers, d, h);
    };
    Array.isArray(c) ? c.forEach((d) => f(d)) : f(c);
  }
  [
    "throw",
    "throws",
    "Throw"
  ].forEach((c) => {
    t.overwriteMethod(e.Assertion.prototype, c, (l) => function(...f) {
      const d = t.flag(this, "promise"), h = t.flag(this, "object"), m = t.flag(this, "negate");
      if (d === "rejects")
        t.flag(this, "object", () => {
          throw h;
        });
      else if (d === "resolves" && typeof h != "function") {
        if (m)
          return;
        {
          const p = t.flag(this, "message") || "expected promise to throw an error, but it didn't", b = { showDiff: !1 };
          throw new n(p, b, t.flag(this, "ssfi"));
        }
      }
      l.apply(this, f);
    });
  }), o("withTest", function(c) {
    return t.flag(this, "vitest-test", c), this;
  }), o("toEqual", function(c) {
    const l = t.flag(this, "object"), f = ne(l, c, [...r, Me]);
    return this.assert(f, "expected #{this} to deeply equal #{exp}", "expected #{this} to not deeply equal #{exp}", c, l);
  }), o("toStrictEqual", function(c) {
    const l = t.flag(this, "object"), f = ne(l, c, [
      ...r,
      Me,
      Bi,
      So,
      zi
    ], !0);
    return this.assert(f, "expected #{this} to strictly equal #{exp}", "expected #{this} to not strictly equal #{exp}", c, l);
  }), o("toBe", function(c) {
    const l = this._obj, f = Object.is(l, c);
    let d = "";
    return f || (ne(l, c, [
      ...r,
      Me,
      Bi,
      So,
      zi
    ], !0) ? d = "toStrictEqual" : ne(l, c, [...r, Me]) && (d = "toEqual")), this.assert(f, op(d), "expected #{this} not to be #{exp} // Object.is equality", c, l);
  }), o("toMatchObject", function(c) {
    const l = this._obj, f = ne(l, c, [
      ...r,
      Me,
      Bt
    ]), d = t.flag(this, "negate"), { subset: h, stripped: m } = ip(l, c, r);
    if (f && d || !f && !d) {
      const p = t.getMessage(this, [
        f,
        "expected #{this} to match object #{exp}",
        "expected #{this} to not match object #{exp}",
        c,
        h,
        !1
      ]), b = m === 0 ? p : `${p}
(${m} matching ${m === 1 ? "property" : "properties"} omitted from actual)`;
      throw new n(b, {
        showDiff: !0,
        expected: c,
        actual: h
      });
    }
  }), o("toMatch", function(c) {
    const l = this._obj;
    if (typeof l != "string")
      throw new TypeError(`.toMatch() expects to receive a string, but got ${typeof l}`);
    return this.assert(typeof c == "string" ? l.includes(c) : l.match(c), "expected #{this} to match #{exp}", "expected #{this} not to match #{exp}", c, l);
  }), o("toContain", function(c) {
    const l = this._obj;
    if (typeof Node < "u" && l instanceof Node) {
      if (!(c instanceof Node))
        throw new TypeError(`toContain() expected a DOM node as the argument, but got ${typeof c}`);
      return this.assert(l.contains(c), "expected #{this} to contain element #{exp}", "expected #{this} not to contain element #{exp}", c, l);
    }
    if (typeof DOMTokenList < "u" && l instanceof DOMTokenList) {
      je(c, "class name", ["string"]);
      const d = t.flag(this, "negate") ? l.value.replace(c, "").trim() : `${l.value} ${c}`;
      return this.assert(l.contains(c), `expected "${l.value}" to contain "${c}"`, `expected "${l.value}" not to contain "${c}"`, d, l.value);
    }
    return typeof l == "string" && typeof c == "string" ? this.assert(l.includes(c), "expected #{this} to contain #{exp}", "expected #{this} not to contain #{exp}", c, l) : (l != null && typeof l != "string" && t.flag(this, "object", Array.from(l)), this.contain(c));
  }), o("toContainEqual", function(c) {
    const l = t.flag(this, "object"), f = Array.from(l).findIndex((d) => ne(d, c, r));
    this.assert(f !== -1, "expected #{this} to deep equally contain #{exp}", "expected #{this} to not deep equally contain #{exp}", c);
  }), o("toBeTruthy", function() {
    const c = t.flag(this, "object");
    this.assert(!!c, "expected #{this} to be truthy", "expected #{this} to not be truthy", !0, c);
  }), o("toBeFalsy", function() {
    const c = t.flag(this, "object");
    this.assert(!c, "expected #{this} to be falsy", "expected #{this} to not be falsy", !1, c);
  }), o("toBeGreaterThan", function(c) {
    const l = this._obj;
    return je(l, "actual", ["number", "bigint"]), je(c, "expected", ["number", "bigint"]), this.assert(l > c, `expected ${l} to be greater than ${c}`, `expected ${l} to be not greater than ${c}`, c, l, !1);
  }), o("toBeGreaterThanOrEqual", function(c) {
    const l = this._obj;
    return je(l, "actual", ["number", "bigint"]), je(c, "expected", ["number", "bigint"]), this.assert(l >= c, `expected ${l} to be greater than or equal to ${c}`, `expected ${l} to be not greater than or equal to ${c}`, c, l, !1);
  }), o("toBeLessThan", function(c) {
    const l = this._obj;
    return je(l, "actual", ["number", "bigint"]), je(c, "expected", ["number", "bigint"]), this.assert(l < c, `expected ${l} to be less than ${c}`, `expected ${l} to be not less than ${c}`, c, l, !1);
  }), o("toBeLessThanOrEqual", function(c) {
    const l = this._obj;
    return je(l, "actual", ["number", "bigint"]), je(c, "expected", ["number", "bigint"]), this.assert(l <= c, `expected ${l} to be less than or equal to ${c}`, `expected ${l} to be not less than or equal to ${c}`, c, l, !1);
  }), o("toBeNaN", function() {
    const c = t.flag(this, "object");
    this.assert(Number.isNaN(c), "expected #{this} to be NaN", "expected #{this} not to be NaN", Number.NaN, c);
  }), o("toBeUndefined", function() {
    const c = t.flag(this, "object");
    this.assert(c === void 0, "expected #{this} to be undefined", "expected #{this} not to be undefined", void 0, c);
  }), o("toBeNull", function() {
    const c = t.flag(this, "object");
    this.assert(c === null, "expected #{this} to be null", "expected #{this} not to be null", null, c);
  }), o("toBeDefined", function() {
    const c = t.flag(this, "object");
    this.assert(typeof c < "u", "expected #{this} to be defined", "expected #{this} to be undefined", c);
  }), o("toBeTypeOf", function(c) {
    const l = typeof this._obj, f = c === l;
    return this.assert(f, "expected #{this} to be type of #{exp}", "expected #{this} not to be type of #{exp}", c, l);
  }), o("toBeInstanceOf", function(c) {
    return this.instanceOf(c);
  }), o("toHaveLength", function(c) {
    return this.have.length(c);
  }), o("toHaveProperty", function(...c) {
    Array.isArray(c[0]) && (c[0] = c[0].map((x) => String(x).replace(/([.[\]])/g, "\\$1")).join("."));
    const l = this._obj, [f, d] = c, h = () => Object.prototype.hasOwnProperty.call(l, f) ? {
      value: l[f],
      exists: !0
    } : t.getPathInfo(l, f), { value: m, exists: p } = h(), b = p && (c.length === 1 || ne(d, m, r)), S = c.length === 1 ? "" : ` with value ${t.objDisplay(d)}`;
    return this.assert(b, `expected #{this} to have property "${f}"${S}`, `expected #{this} to not have property "${f}"${S}`, d, p ? m : void 0);
  }), o("toBeCloseTo", function(c, l = 2) {
    const f = this._obj;
    let d = !1, h = 0, m = 0;
    return c === Number.POSITIVE_INFINITY && f === Number.POSITIVE_INFINITY || c === Number.NEGATIVE_INFINITY && f === Number.NEGATIVE_INFINITY ? d = !0 : (h = 10 ** -l / 2, m = Math.abs(f - c), d = m < h), this.assert(d, `expected #{this} to be close to #{exp}, received difference is ${m}, but expected ${h}`, `expected #{this} to not be close to #{exp}, received difference is ${m}, but expected ${h}`, c, f, !1);
  });
  function s(c) {
    if (!Yt(c._obj))
      throw new TypeError(`${t.inspect(c._obj)} is not a spy or a call to a spy!`);
  }
  function i(c) {
    return s(c), c._obj;
  }
  o(["toHaveBeenCalledTimes", "toBeCalledTimes"], function(c) {
    const l = i(this), f = l.getMockName(), d = l.mock.calls.length;
    return this.assert(d === c, `expected "${f}" to be called #{exp} times, but got ${d} times`, `expected "${f}" to not be called #{exp} times`, c, d, !1);
  }), o("toHaveBeenCalledOnce", function() {
    const c = i(this), l = c.getMockName(), f = c.mock.calls.length;
    return this.assert(f === 1, `expected "${l}" to be called once, but got ${f} times`, `expected "${l}" to not be called once`, 1, f, !1);
  }), o(["toHaveBeenCalled", "toBeCalled"], function() {
    const c = i(this), l = c.getMockName(), f = c.mock.calls.length, d = f > 0, h = t.flag(this, "negate");
    let m = t.getMessage(this, [
      d,
      `expected "${l}" to be called at least once`,
      `expected "${l}" to not be called at all, but actually been called ${f} times`,
      !0,
      d
    ]);
    if (d && h && (m = _r(c, m)), d && h || !d && !h)
      throw new n(m);
  });
  function a(c, l) {
    return c.length === l.length && c.every((f, d) => ne(f, l[d], [...r, Me]));
  }
  o(["toHaveBeenCalledWith", "toBeCalledWith"], function(...c) {
    const l = i(this), f = l.getMockName(), d = l.mock.calls.some((p) => a(p, c)), h = t.flag(this, "negate"), m = t.getMessage(this, [
      d,
      `expected "${f}" to be called with arguments: #{exp}`,
      `expected "${f}" to not be called with arguments: #{exp}`,
      c
    ]);
    if (d && h || !d && !h)
      throw new n(_r(l, m, c));
  }), o("toHaveBeenCalledExactlyOnceWith", function(...c) {
    const l = i(this), f = l.getMockName(), d = l.mock.calls.length, m = l.mock.calls.some((S) => a(S, c)) && d === 1, p = t.flag(this, "negate"), b = t.getMessage(this, [
      m,
      `expected "${f}" to be called once with arguments: #{exp}`,
      `expected "${f}" to not be called once with arguments: #{exp}`,
      c
    ]);
    if (m && p || !m && !p)
      throw new n(_r(l, b, c));
  }), o(["toHaveBeenNthCalledWith", "nthCalledWith"], function(c, ...l) {
    const f = i(this), d = f.getMockName(), h = f.mock.calls[c - 1], m = f.mock.calls.length, p = c <= m;
    this.assert(h && a(h, l), `expected ${Qt(c)} "${d}" call to have been called with #{exp}${p ? "" : `, but called only ${m} times`}`, `expected ${Qt(c)} "${d}" call to not have been called with #{exp}`, l, h, p);
  }), o(["toHaveBeenLastCalledWith", "lastCalledWith"], function(...c) {
    const l = i(this), f = l.getMockName(), d = l.mock.calls[l.mock.calls.length - 1];
    this.assert(d && a(d, c), `expected last "${f}" call to have been called with #{exp}`, `expected last "${f}" call to not have been called with #{exp}`, c, d);
  });
  function u(c, l, f) {
    const d = c.mock.invocationCallOrder, h = l.mock.invocationCallOrder;
    return d.length === 0 ? !f : h.length === 0 ? !1 : d[0] < h[0];
  }
  o(["toHaveBeenCalledBefore"], function(c, l = !0) {
    const f = i(this);
    if (!Yt(c))
      throw new TypeError(`${t.inspect(c)} is not a spy or a call to a spy`);
    this.assert(u(f, c, l), `expected "${f.getMockName()}" to have been called before "${c.getMockName()}"`, `expected "${f.getMockName()}" to not have been called before "${c.getMockName()}"`, c, f);
  }), o(["toHaveBeenCalledAfter"], function(c, l = !0) {
    const f = i(this);
    if (!Yt(c))
      throw new TypeError(`${t.inspect(c)} is not a spy or a call to a spy`);
    this.assert(u(c, f, l), `expected "${f.getMockName()}" to have been called after "${c.getMockName()}"`, `expected "${f.getMockName()}" to not have been called after "${c.getMockName()}"`, c, f);
  }), o(["toThrow", "toThrowError"], function(c) {
    if (typeof c == "string" || typeof c > "u" || c instanceof RegExp)
      return this.throws(c === "" ? /^$/ : c);
    const l = this._obj, f = t.flag(this, "promise"), d = t.flag(this, "negate");
    let h = null;
    if (f === "rejects")
      h = l;
    else if (f === "resolves" && typeof l != "function") {
      if (d)
        return;
      {
        const m = t.flag(this, "message") || "expected promise to throw an error, but it didn't", p = { showDiff: !1 };
        throw new n(m, p, t.flag(this, "ssfi"));
      }
    } else {
      let m = !1;
      try {
        l();
      } catch (p) {
        m = !0, h = p;
      }
      if (!m && !d) {
        const p = t.flag(this, "message") || "expected function to throw an error, but it didn't", b = { showDiff: !1 };
        throw new n(p, b, t.flag(this, "ssfi"));
      }
    }
    if (typeof c == "function") {
      const m = c.name || c.prototype.constructor.name;
      return this.assert(h && h instanceof c, `expected error to be instance of ${m}`, `expected error not to be instance of ${m}`, c, h);
    }
    if (c instanceof Error) {
      const m = ne(h, c, [...r, Me]);
      return this.assert(m, "expected a thrown error to be #{exp}", "expected a thrown error not to be #{exp}", c, h);
    }
    if (typeof c == "object" && "asymmetricMatch" in c && typeof c.asymmetricMatch == "function") {
      const m = c;
      return this.assert(h && m.asymmetricMatch(h), "expected error to match asymmetric matcher", "expected error not to match asymmetric matcher", m, h);
    }
    throw new Error(`"toThrow" expects string, RegExp, function, Error instance or asymmetric matcher, got "${typeof c}"`);
  }), [{
    name: "toHaveResolved",
    condition: (c) => c.mock.settledResults.length > 0 && c.mock.settledResults.some(({ type: l }) => l === "fulfilled"),
    action: "resolved"
  }, {
    name: ["toHaveReturned", "toReturn"],
    condition: (c) => c.mock.calls.length > 0 && c.mock.results.some(({ type: l }) => l !== "throw"),
    action: "called"
  }].forEach(({ name: c, condition: l, action: f }) => {
    o(c, function() {
      const d = i(this), h = d.getMockName(), m = l(d);
      this.assert(m, `expected "${h}" to be successfully ${f} at least once`, `expected "${h}" to not be successfully ${f}`, m, !m, !1);
    });
  }), [{
    name: "toHaveResolvedTimes",
    condition: (c, l) => c.mock.settledResults.reduce((f, { type: d }) => d === "fulfilled" ? ++f : f, 0) === l,
    action: "resolved"
  }, {
    name: ["toHaveReturnedTimes", "toReturnTimes"],
    condition: (c, l) => c.mock.results.reduce((f, { type: d }) => d === "throw" ? f : ++f, 0) === l,
    action: "called"
  }].forEach(({ name: c, condition: l, action: f }) => {
    o(c, function(d) {
      const h = i(this), m = h.getMockName(), p = l(h, d);
      this.assert(p, `expected "${m}" to be successfully ${f} ${d} times`, `expected "${m}" to not be successfully ${f} ${d} times`, `expected resolved times: ${d}`, `received resolved times: ${p}`, !1);
    });
  }), [{
    name: "toHaveResolvedWith",
    condition: (c, l) => c.mock.settledResults.some(({ type: f, value: d }) => f === "fulfilled" && ne(l, d)),
    action: "resolve"
  }, {
    name: ["toHaveReturnedWith", "toReturnWith"],
    condition: (c, l) => c.mock.results.some(({ type: f, value: d }) => f === "return" && ne(l, d)),
    action: "return"
  }].forEach(({ name: c, condition: l, action: f }) => {
    o(c, function(d) {
      const h = i(this), m = l(h, d), p = t.flag(this, "negate");
      if (m && p || !m && !p) {
        const b = h.getMockName(), S = t.getMessage(this, [
          m,
          `expected "${b}" to ${f} with: #{exp} at least once`,
          `expected "${b}" to not ${f} with: #{exp}`,
          d
        ]), x = f === "return" ? h.mock.results : h.mock.settledResults;
        throw new n(fp(h, x, S, d));
      }
    });
  }), [{
    name: "toHaveLastResolvedWith",
    condition: (c, l) => {
      const f = c.mock.settledResults[c.mock.settledResults.length - 1];
      return f && f.type === "fulfilled" && ne(f.value, l);
    },
    action: "resolve"
  }, {
    name: ["toHaveLastReturnedWith", "lastReturnedWith"],
    condition: (c, l) => {
      const f = c.mock.results[c.mock.results.length - 1];
      return f && f.type === "return" && ne(f.value, l);
    },
    action: "return"
  }].forEach(({ name: c, condition: l, action: f }) => {
    o(c, function(d) {
      const h = i(this), m = f === "return" ? h.mock.results : h.mock.settledResults, p = m[m.length - 1], b = h.getMockName();
      this.assert(l(h, d), `expected last "${b}" call to ${f} #{exp}`, `expected last "${b}" call to not ${f} #{exp}`, d, p?.value);
    });
  }), [{
    name: "toHaveNthResolvedWith",
    condition: (c, l, f) => {
      const d = c.mock.settledResults[l - 1];
      return d && d.type === "fulfilled" && ne(d.value, f);
    },
    action: "resolve"
  }, {
    name: ["toHaveNthReturnedWith", "nthReturnedWith"],
    condition: (c, l, f) => {
      const d = c.mock.results[l - 1];
      return d && d.type === "return" && ne(d.value, f);
    },
    action: "return"
  }].forEach(({ name: c, condition: l, action: f }) => {
    o(c, function(d, h) {
      const m = i(this), p = m.getMockName(), S = (f === "return" ? m.mock.results : m.mock.settledResults)[d - 1], x = `${Qt(d)} call`;
      this.assert(l(m, d, h), `expected ${x} "${p}" call to ${f} #{exp}`, `expected ${x} "${p}" call to not ${f} #{exp}`, h, S?.value);
    });
  }), o("withContext", function(c) {
    for (const l in c)
      t.flag(this, l, c[l]);
    return this;
  }), t.addProperty(e.Assertion.prototype, "resolves", function() {
    const l = new Error("resolves");
    t.flag(this, "promise", "resolves"), t.flag(this, "error", l);
    const f = t.flag(this, "vitest-test"), d = t.flag(this, "object");
    if (t.flag(this, "poll"))
      throw new SyntaxError("expect.poll() is not supported in combination with .resolves");
    if (typeof d?.then != "function")
      throw new TypeError(`You must provide a Promise to expect() when using .resolves, not '${typeof d}'.`);
    const h = new Proxy(this, { get: (m, p, b) => {
      const S = Reflect.get(m, p, b);
      return typeof S != "function" ? S instanceof e.Assertion ? h : S : (...x) => {
        t.flag(this, "_name", p);
        const A = d.then((C) => (t.flag(this, "object", C), S.call(this, ...x)), (C) => {
          const M = new n(`promise rejected "${t.inspect(C)}" instead of resolving`, { showDiff: !1 });
          throw M.cause = C, M.stack = l.stack.replace(l.message, M.message), M;
        });
        return Yi(f, A, Ki(t, this, !!x.length), l);
      };
    } });
    return h;
  }), t.addProperty(e.Assertion.prototype, "rejects", function() {
    const l = new Error("rejects");
    t.flag(this, "promise", "rejects"), t.flag(this, "error", l);
    const f = t.flag(this, "vitest-test"), d = t.flag(this, "object"), h = typeof d == "function" ? d() : d;
    if (t.flag(this, "poll"))
      throw new SyntaxError("expect.poll() is not supported in combination with .rejects");
    if (typeof h?.then != "function")
      throw new TypeError(`You must provide a Promise to expect() when using .rejects, not '${typeof h}'.`);
    const m = new Proxy(this, { get: (p, b, S) => {
      const x = Reflect.get(p, b, S);
      return typeof x != "function" ? x instanceof e.Assertion ? m : x : (...A) => {
        t.flag(this, "_name", b);
        const C = h.then((M) => {
          const j = new n(`promise resolved "${t.inspect(M)}" instead of rejecting`, {
            showDiff: !0,
            expected: new Error("rejected promise"),
            actual: M
          });
          throw j.stack = l.stack.replace(l.message, j.message), j;
        }, (M) => (t.flag(this, "object", M), x.call(this, ...A)));
        return Yi(f, C, Ki(t, this, !!A.length), l);
      };
    } });
    return m;
  });
};
function Qt(e) {
  const t = e % 10, n = e % 100;
  return t === 1 && n !== 11 ? `${e}st` : t === 2 && n !== 12 ? `${e}nd` : t === 3 && n !== 13 ? `${e}rd` : `${e}th`;
}
function _r(e, t, n) {
  return e.mock.calls.length && (t += de.gray(`

Received: 

${e.mock.calls.map((r, o) => {
    let s = de.bold(`  ${Qt(o + 1)} ${e.getMockName()} call:

`);
    return n ? s += Lt(n, r, { omitAnnotationLines: !0 }) : s += Pe(r).split(`
`).map((i) => `    ${i}`).join(`
`), s += `
`, s;
  }).join(`
`)}`)), t += de.gray(`

Number of calls: ${de.bold(e.mock.calls.length)}
`), t;
}
function fp(e, t, n, r) {
  return t.length && (n += de.gray(`

Received: 

${t.map((o, s) => {
    let i = de.bold(`  ${Qt(s + 1)} ${e.getMockName()} call return:

`);
    return r ? i += Lt(r, o.value, { omitAnnotationLines: !0 }) : i += Pe(o).split(`
`).map((a) => `    ${a}`).join(`
`), i += `
`, i;
  }).join(`
`)}`)), n += de.gray(`

Number of calls: ${de.bold(e.mock.calls.length)}
`), n;
}
function hp(e, t) {
  const n = e._obj, r = Se.flag(e, "negate"), o = Se.flag(e, "promise") || "", s = {
    ...Au(),
    diff: Lt,
    stringify: Pe,
    iterableEquality: Me,
    subsetEquality: Bt
  };
  return {
    state: {
      ...Zt(t),
      customTesters: Ts(),
      isNot: r,
      utils: s,
      promise: o,
      equals: ne,
      suppressedErrors: [],
      soft: Se.flag(e, "soft"),
      poll: Se.flag(e, "poll")
    },
    isNot: r,
    obj: n
  };
}
class Hi extends Error {
  constructor(t, n, r) {
    super(t), this.actual = n, this.expected = r;
  }
}
function dp(e, t, n) {
  return (r, o) => {
    Object.entries(n).forEach(([s, i]) => {
      function a(...f) {
        const { state: d, isNot: h, obj: m } = hp(this, t), p = i.call(d, m, ...f);
        if (p && typeof p == "object" && typeof p.then == "function")
          return p.then(({ pass: M, message: j, actual: P, expected: O }) => {
            if (M && h || !M && !h)
              throw new Hi(j(), P, O);
          });
        const { pass: b, message: S, actual: x, expected: A } = p;
        if (b && h || !b && !h)
          throw new Hi(S(), x, A);
      }
      const u = ju(o, s, a);
      o.addMethod(globalThis[dn].matchers, s, u), o.addMethod(e.Assertion.prototype, s, u);
      class c extends tt {
        constructor(d = !1, ...h) {
          super(h, d);
        }
        asymmetricMatch(d) {
          const { pass: h } = i.call(this.getMatcherContext(t), d, ...this.sample);
          return this.inverse ? !h : h;
        }
        toString() {
          return `${this.inverse ? "not." : ""}${s}`;
        }
        getExpectedType() {
          return "any";
        }
        toAsymmetricMatcher() {
          return `${this.toString()}<${this.sample.map((d) => Pe(d)).join(", ")}>`;
        }
      }
      const l = (...f) => new c(!1, ...f);
      Object.defineProperty(t, s, {
        configurable: !0,
        enumerable: !0,
        value: l,
        writable: !0
      }), Object.defineProperty(t.not, s, {
        configurable: !0,
        enumerable: !0,
        value: (...f) => new c(!0, ...f),
        writable: !0
      }), Object.defineProperty(globalThis[ws], s, {
        configurable: !0,
        enumerable: !0,
        value: l,
        writable: !0
      });
    });
  };
}
const pp = (e, t) => {
  t.addMethod(e.expect, "extend", (n, r) => {
    pt(dp(e, n, r));
  });
}, Zi = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", mp = new Uint8Array(64), gp = new Uint8Array(128);
for (let e = 0; e < Zi.length; e++) {
  const t = Zi.charCodeAt(e);
  mp[e] = t, gp[t] = e;
}
var Qi;
(function(e) {
  e[e.Empty = 1] = "Empty", e[e.Hash = 2] = "Hash", e[e.Query = 3] = "Query", e[e.RelativePath = 4] = "RelativePath", e[e.AbsolutePath = 5] = "AbsolutePath", e[e.SchemeRelative = 6] = "SchemeRelative", e[e.Absolute = 7] = "Absolute";
})(Qi || (Qi = {}));
const yp = /^[A-Za-z]:\//;
function bp(e = "") {
  return e && e.replace(/\\/g, "/").replace(yp, (t) => t.toUpperCase());
}
const wp = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
function Sp() {
  return typeof process < "u" && typeof process.cwd == "function" ? process.cwd().replace(/\\/g, "/") : "/";
}
const Tp = function(...e) {
  e = e.map((r) => bp(r));
  let t = "", n = !1;
  for (let r = e.length - 1; r >= -1 && !n; r--) {
    const o = r >= 0 ? e[r] : Sp();
    !o || o.length === 0 || (t = `${o}/${t}`, n = ea(o));
  }
  return t = Ep(t, !n), n && !ea(t) ? `/${t}` : t.length > 0 ? t : ".";
};
function Ep(e, t) {
  let n = "", r = 0, o = -1, s = 0, i = null;
  for (let a = 0; a <= e.length; ++a) {
    if (a < e.length)
      i = e[a];
    else {
      if (i === "/")
        break;
      i = "/";
    }
    if (i === "/") {
      if (!(o === a - 1 || s === 1)) if (s === 2) {
        if (n.length < 2 || r !== 2 || n[n.length - 1] !== "." || n[n.length - 2] !== ".") {
          if (n.length > 2) {
            const u = n.lastIndexOf("/");
            u === -1 ? (n = "", r = 0) : (n = n.slice(0, u), r = n.length - 1 - n.lastIndexOf("/")), o = a, s = 0;
            continue;
          } else if (n.length > 0) {
            n = "", r = 0, o = a, s = 0;
            continue;
          }
        }
        t && (n += n.length > 0 ? "/.." : "..", r = 2);
      } else
        n.length > 0 ? n += `/${e.slice(o + 1, a)}` : n = e.slice(o + 1, a), r = a - o - 1;
      o = a, s = 0;
    } else i === "." && s !== -1 ? ++s : s = -1;
  }
  return n;
}
const ea = function(e) {
  return wp.test(e);
}, Ru = /^\s*at .*(?:\S:\d+|\(native\))/m, vp = /^(?:eval@)?(?:\[native code\])?$/;
function Fu(e) {
  if (!e.includes(":"))
    return [e];
  const n = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(e.replace(/^\(|\)$/g, ""));
  if (!n)
    return [e];
  let r = n[1];
  if (r.startsWith("async ") && (r = r.slice(6)), r.startsWith("http:") || r.startsWith("https:")) {
    const o = new URL(r);
    o.searchParams.delete("import"), o.searchParams.delete("browserv"), r = o.pathname + o.hash + o.search;
  }
  if (r.startsWith("/@fs/")) {
    const o = /^\/@fs\/[a-zA-Z]:\//.test(r);
    r = r.slice(o ? 5 : 4);
  }
  return [
    r,
    n[2] || void 0,
    n[3] || void 0
  ];
}
function xp(e) {
  let t = e.trim();
  if (vp.test(t) || (t.includes(" > eval") && (t = t.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")), !t.includes("@") && !t.includes(":")))
    return null;
  const n = /((.*".+"[^@]*)?[^@]*)(@)/, r = t.match(n), o = r && r[1] ? r[1] : void 0, [s, i, a] = Fu(t.replace(n, ""));
  return !s || !i || !a ? null : {
    file: s,
    method: o || "",
    line: Number.parseInt(i),
    column: Number.parseInt(a)
  };
}
function vs(e) {
  const t = e.trim();
  return Ru.test(t) ? $p(t) : xp(t);
}
function $p(e) {
  let t = e.trim();
  if (!Ru.test(t))
    return null;
  t.includes("(eval ") && (t = t.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(,.*$)/g, ""));
  let n = t.replace(/^\s+/, "").replace(/\(eval code/g, "(").replace(/^.*?\s+/, "");
  const r = n.match(/ (\(.+\)$)/);
  n = r ? n.replace(r[0], "") : n;
  const [o, s, i] = Fu(r ? r[1] : n);
  let a = r && n || "", u = o && ["eval", "<anonymous>"].includes(o) ? void 0 : o;
  return !u || !s || !i ? null : (a.startsWith("async ") && (a = a.slice(6)), u.startsWith("file://") && (u = u.slice(7)), u = u.startsWith("node:") || u.startsWith("internal:") ? u : Tp(u), a && (a = a.replace(/__vite_ssr_import_\d+__\./g, "")), {
    method: a,
    file: u,
    line: Number.parseInt(s),
    column: Number.parseInt(i)
  });
}
var Ir, ta;
function _p() {
  if (ta) return Ir;
  ta = 1;
  var e, t, n, r, o, s, i, a, u, c, l, f, d, h, m, p, b, S, x, A;
  return h = /\/(?![*\/])(?:\[(?:[^\]\\\n\r\u2028\u2029]+|\\.)*\]?|[^\/[\\\n\r\u2028\u2029]+|\\.)*(\/[$_\u200C\u200D\p{ID_Continue}]*|\\)?/yu, d = /--|\+\+|=>|\.{3}|\??\.(?!\d)|(?:&&|\|\||\?\?|[+\-%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2}|\/(?![\/*]))=?|[?~,:;[\](){}]/y, t = /(\x23?)(?=[$_\p{ID_Start}\\])(?:[$_\u200C\u200D\p{ID_Continue}]+|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+/yu, p = /(['"])(?:[^'"\\\n\r]+|(?!\1)['"]|\\(?:\r\n|[^]))*(\1)?/y, f = /(?:0[xX][\da-fA-F](?:_?[\da-fA-F])*|0[oO][0-7](?:_?[0-7])*|0[bB][01](?:_?[01])*)n?|0n|[1-9](?:_?\d)*n|(?:(?:0(?!\d)|0\d*[89]\d*|[1-9](?:_?\d)*)(?:\.(?:\d(?:_?\d)*)?)?|\.\d(?:_?\d)*)(?:[eE][+-]?\d(?:_?\d)*)?|0[0-7]+/y, b = /[`}](?:[^`\\$]+|\\[^]|\$(?!\{))*(`|\$\{)?/y, A = /[\t\v\f\ufeff\p{Zs}]+/yu, u = /\r?\n|[\r\u2028\u2029]/y, c = /\/\*(?:[^*]+|\*(?!\/))*(\*\/)?/y, m = /\/\/.*/y, e = /^#!.*/, r = /[<>.:={}]|\/(?![\/*])/y, n = /[$_\p{ID_Start}][$_\u200C\u200D\p{ID_Continue}-]*/yu, o = /(['"])(?:[^'"]+|(?!\1)['"])*(\1)?/y, s = /[^<>{}]+/y, x = /^(?:[\/+-]|\.{3}|\?(?:InterpolationIn(?:JSX|Template)|NoLineTerminatorHere|NonExpressionParenEnd|UnaryIncDec))?$|[{}([,;<>=*%&|^!~?:]$/, S = /^(?:=>|[;\]){}]|else|\?(?:NoLineTerminatorHere|NonExpressionParenEnd))?$/, i = /^(?:await|case|default|delete|do|else|instanceof|new|return|throw|typeof|void|yield)$/, a = /^(?:return|throw|yield)$/, l = RegExp(u.source), Ir = function* (C, { jsx: M = !1 } = {}) {
    var j, P, O, I, D, _, N, Q, U, J, R, L, q, Y;
    for ({ length: _ } = C, I = 0, D = "", Y = [
      { tag: "JS" }
    ], j = [], R = 0, L = !1, (N = e.exec(C)) && (yield {
      type: "HashbangComment",
      value: N[0]
    }, I = N[0].length); I < _; ) {
      switch (Q = Y[Y.length - 1], Q.tag) {
        case "JS":
        case "JSNonExpressionParen":
        case "InterpolationInTemplate":
        case "InterpolationInJSX":
          if (C[I] === "/" && (x.test(D) || i.test(D)) && (h.lastIndex = I, N = h.exec(C))) {
            I = h.lastIndex, D = N[0], L = !0, yield {
              type: "RegularExpressionLiteral",
              value: N[0],
              closed: N[1] !== void 0 && N[1] !== "\\"
            };
            continue;
          }
          if (d.lastIndex = I, N = d.exec(C)) {
            switch (q = N[0], U = d.lastIndex, J = q, q) {
              case "(":
                D === "?NonExpressionParenKeyword" && Y.push({
                  tag: "JSNonExpressionParen",
                  nesting: R
                }), R++, L = !1;
                break;
              case ")":
                R--, L = !0, Q.tag === "JSNonExpressionParen" && R === Q.nesting && (Y.pop(), J = "?NonExpressionParenEnd", L = !1);
                break;
              case "{":
                d.lastIndex = 0, O = !S.test(D) && (x.test(D) || i.test(D)), j.push(O), L = !1;
                break;
              case "}":
                switch (Q.tag) {
                  case "InterpolationInTemplate":
                    if (j.length === Q.nesting) {
                      b.lastIndex = I, N = b.exec(C), I = b.lastIndex, D = N[0], N[1] === "${" ? (D = "?InterpolationInTemplate", L = !1, yield {
                        type: "TemplateMiddle",
                        value: N[0]
                      }) : (Y.pop(), L = !0, yield {
                        type: "TemplateTail",
                        value: N[0],
                        closed: N[1] === "`"
                      });
                      continue;
                    }
                    break;
                  case "InterpolationInJSX":
                    if (j.length === Q.nesting) {
                      Y.pop(), I += 1, D = "}", yield {
                        type: "JSXPunctuator",
                        value: "}"
                      };
                      continue;
                    }
                }
                L = j.pop(), J = L ? "?ExpressionBraceEnd" : "}";
                break;
              case "]":
                L = !0;
                break;
              case "++":
              case "--":
                J = L ? "?PostfixIncDec" : "?UnaryIncDec";
                break;
              case "<":
                if (M && (x.test(D) || i.test(D))) {
                  Y.push({ tag: "JSXTag" }), I += 1, D = "<", yield {
                    type: "JSXPunctuator",
                    value: q
                  };
                  continue;
                }
                L = !1;
                break;
              default:
                L = !1;
            }
            I = U, D = J, yield {
              type: "Punctuator",
              value: q
            };
            continue;
          }
          if (t.lastIndex = I, N = t.exec(C)) {
            switch (I = t.lastIndex, J = N[0], N[0]) {
              case "for":
              case "if":
              case "while":
              case "with":
                D !== "." && D !== "?." && (J = "?NonExpressionParenKeyword");
            }
            D = J, L = !i.test(N[0]), yield {
              type: N[1] === "#" ? "PrivateIdentifier" : "IdentifierName",
              value: N[0]
            };
            continue;
          }
          if (p.lastIndex = I, N = p.exec(C)) {
            I = p.lastIndex, D = N[0], L = !0, yield {
              type: "StringLiteral",
              value: N[0],
              closed: N[2] !== void 0
            };
            continue;
          }
          if (f.lastIndex = I, N = f.exec(C)) {
            I = f.lastIndex, D = N[0], L = !0, yield {
              type: "NumericLiteral",
              value: N[0]
            };
            continue;
          }
          if (b.lastIndex = I, N = b.exec(C)) {
            I = b.lastIndex, D = N[0], N[1] === "${" ? (D = "?InterpolationInTemplate", Y.push({
              tag: "InterpolationInTemplate",
              nesting: j.length
            }), L = !1, yield {
              type: "TemplateHead",
              value: N[0]
            }) : (L = !0, yield {
              type: "NoSubstitutionTemplate",
              value: N[0],
              closed: N[1] === "`"
            });
            continue;
          }
          break;
        case "JSXTag":
        case "JSXTagEnd":
          if (r.lastIndex = I, N = r.exec(C)) {
            switch (I = r.lastIndex, J = N[0], N[0]) {
              case "<":
                Y.push({ tag: "JSXTag" });
                break;
              case ">":
                Y.pop(), D === "/" || Q.tag === "JSXTagEnd" ? (J = "?JSX", L = !0) : Y.push({ tag: "JSXChildren" });
                break;
              case "{":
                Y.push({
                  tag: "InterpolationInJSX",
                  nesting: j.length
                }), J = "?InterpolationInJSX", L = !1;
                break;
              case "/":
                D === "<" && (Y.pop(), Y[Y.length - 1].tag === "JSXChildren" && Y.pop(), Y.push({ tag: "JSXTagEnd" }));
            }
            D = J, yield {
              type: "JSXPunctuator",
              value: N[0]
            };
            continue;
          }
          if (n.lastIndex = I, N = n.exec(C)) {
            I = n.lastIndex, D = N[0], yield {
              type: "JSXIdentifier",
              value: N[0]
            };
            continue;
          }
          if (o.lastIndex = I, N = o.exec(C)) {
            I = o.lastIndex, D = N[0], yield {
              type: "JSXString",
              value: N[0],
              closed: N[2] !== void 0
            };
            continue;
          }
          break;
        case "JSXChildren":
          if (s.lastIndex = I, N = s.exec(C)) {
            I = s.lastIndex, D = N[0], yield {
              type: "JSXText",
              value: N[0]
            };
            continue;
          }
          switch (C[I]) {
            case "<":
              Y.push({ tag: "JSXTag" }), I++, D = "<", yield {
                type: "JSXPunctuator",
                value: "<"
              };
              continue;
            case "{":
              Y.push({
                tag: "InterpolationInJSX",
                nesting: j.length
              }), I++, D = "?InterpolationInJSX", L = !1, yield {
                type: "JSXPunctuator",
                value: "{"
              };
              continue;
          }
      }
      if (A.lastIndex = I, N = A.exec(C)) {
        I = A.lastIndex, yield {
          type: "WhiteSpace",
          value: N[0]
        };
        continue;
      }
      if (u.lastIndex = I, N = u.exec(C)) {
        I = u.lastIndex, L = !1, a.test(D) && (D = "?NoLineTerminatorHere"), yield {
          type: "LineTerminatorSequence",
          value: N[0]
        };
        continue;
      }
      if (c.lastIndex = I, N = c.exec(C)) {
        I = c.lastIndex, l.test(N[0]) && (L = !1, a.test(D) && (D = "?NoLineTerminatorHere")), yield {
          type: "MultiLineComment",
          value: N[0],
          closed: N[1] !== void 0
        };
        continue;
      }
      if (m.lastIndex = I, N = m.exec(C)) {
        I = m.lastIndex, L = !1, yield {
          type: "SingleLineComment",
          value: N[0]
        };
        continue;
      }
      P = String.fromCodePoint(C.codePointAt(I)), I += P.length, D = P, L = !1, yield {
        type: Q.tag.startsWith("JSX") ? "JSXInvalid" : "Invalid",
        value: P
      };
    }
  }, Ir;
}
var Ip = _p();
const Cp = /* @__PURE__ */ sl(Ip);
function Op(e, t) {
  let o = "";
  const s = [];
  for (const i of Cp(e, { jsx: !1 })) {
    if (s.push(i), i.type === "SingleLineComment") {
      o += " ".repeat(i.value.length);
      continue;
    }
    if (i.type === "MultiLineComment") {
      o += i.value.replace(/[^\n]/g, " ");
      continue;
    }
    if (i.type === "StringLiteral") {
      if (!i.closed) {
        o += i.value;
        continue;
      }
      const a = i.value.slice(1, -1);
      {
        o += i.value[0] + " ".repeat(a.length) + i.value[i.value.length - 1];
        continue;
      }
    }
    if (i.type === "NoSubstitutionTemplate") {
      const a = i.value.slice(1, -1);
      {
        o += `\`${a.replace(/[^\n]/g, " ")}\``;
        continue;
      }
    }
    if (i.type === "RegularExpressionLiteral") {
      const a = i.value;
      {
        o += a.replace(/\/(.*)\/(\w?)$/g, (u, c, l) => `/${" ".repeat(c.length)}/${l}`);
        continue;
      }
    }
    if (i.type === "TemplateHead") {
      const a = i.value.slice(1, -2);
      {
        o += `\`${a.replace(/[^\n]/g, " ")}\${`;
        continue;
      }
    }
    if (i.type === "TemplateTail") {
      const a = i.value.slice(0, -2);
      {
        o += `}${a.replace(/[^\n]/g, " ")}\``;
        continue;
      }
    }
    if (i.type === "TemplateMiddle") {
      const a = i.value.slice(1, -2);
      {
        o += `}${a.replace(/[^\n]/g, " ")}\${`;
        continue;
      }
    }
    o += i.value;
  }
  return {
    result: o,
    tokens: s
  };
}
function Ap(e, t) {
  return Mp(e).result;
}
function Mp(e, t) {
  return Op(e);
}
const Pp = /^[A-Za-z]:\//;
function Np(e = "") {
  return e && e.replace(/\\/g, "/").replace(Pp, (t) => t.toUpperCase());
}
const kp = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
function jp() {
  return typeof process < "u" && typeof process.cwd == "function" ? process.cwd().replace(/\\/g, "/") : "/";
}
const Rp = function(...e) {
  e = e.map((r) => Np(r));
  let t = "", n = !1;
  for (let r = e.length - 1; r >= -1 && !n; r--) {
    const o = r >= 0 ? e[r] : jp();
    !o || o.length === 0 || (t = `${o}/${t}`, n = na(o));
  }
  return t = Fp(t, !n), n && !na(t) ? `/${t}` : t.length > 0 ? t : ".";
};
function Fp(e, t) {
  let n = "", r = 0, o = -1, s = 0, i = null;
  for (let a = 0; a <= e.length; ++a) {
    if (a < e.length)
      i = e[a];
    else {
      if (i === "/")
        break;
      i = "/";
    }
    if (i === "/") {
      if (!(o === a - 1 || s === 1)) if (s === 2) {
        if (n.length < 2 || r !== 2 || n[n.length - 1] !== "." || n[n.length - 2] !== ".") {
          if (n.length > 2) {
            const u = n.lastIndexOf("/");
            u === -1 ? (n = "", r = 0) : (n = n.slice(0, u), r = n.length - 1 - n.lastIndexOf("/")), o = a, s = 0;
            continue;
          } else if (n.length > 0) {
            n = "", r = 0, o = a, s = 0;
            continue;
          }
        }
        t && (n += n.length > 0 ? "/.." : "..", r = 2);
      } else
        n.length > 0 ? n += `/${e.slice(o + 1, a)}` : n = e.slice(o + 1, a), r = a - o - 1;
      o = a, s = 0;
    } else i === "." && s !== -1 ? ++s : s = -1;
  }
  return n;
}
const na = function(e) {
  return kp.test(e);
};
class Dp extends Error {
  code = "VITEST_PENDING";
  taskId;
  constructor(t, n, r) {
    super(t), this.message = t, this.note = r, this.taskId = n.id;
  }
}
const Lp = /* @__PURE__ */ new WeakMap(), Du = /* @__PURE__ */ new WeakMap(), Lu = /* @__PURE__ */ new WeakMap();
function qp(e, t) {
  Lp.set(e, t);
}
function Bp(e, t) {
  Du.set(e, t);
}
function zp(e) {
  return Du.get(e);
}
function Wp(e, t) {
  Lu.set(e, t);
}
function Jp(e) {
  return Lu.get(e);
}
function Vp(e, t) {
  const n = t.reduce((s, i) => (s[i.prop] = i, s), {}), r = {};
  e.forEach((s) => {
    const i = n[s.prop] || { ...s };
    r[i.prop] = i;
  });
  for (const s in r) {
    var o;
    const i = r[s];
    i.deps = (o = i.deps) === null || o === void 0 ? void 0 : o.map((a) => r[a.prop]);
  }
  return Object.values(r);
}
function qu(e, t, n) {
  const r = [
    "auto",
    "injected",
    "scope"
  ], o = Object.entries(e).map(([s, i]) => {
    const a = { value: i };
    if (Array.isArray(i) && i.length >= 2 && Mt(i[1]) && Object.keys(i[1]).some((c) => r.includes(c))) {
      var u;
      Object.assign(a, i[1]);
      const c = i[0];
      a.value = a.injected ? ((u = n.injectValue) === null || u === void 0 ? void 0 : u.call(n, s)) ?? c : c;
    }
    return a.scope = a.scope || "test", a.scope === "worker" && !n.getWorkerContext && (a.scope = "file"), a.prop = s, a.isFn = typeof a.value == "function", a;
  });
  return Array.isArray(t.fixtures) ? t.fixtures = t.fixtures.concat(o) : t.fixtures = o, o.forEach((s) => {
    if (s.isFn) {
      const a = zu(s.value);
      if (a.length && (s.deps = t.fixtures.filter(({ prop: u }) => u !== s.prop && a.includes(u))), s.scope !== "test") {
        var i;
        (i = s.deps) === null || i === void 0 || i.forEach((u) => {
          if (u.isFn && !(s.scope === "worker" && u.scope === "worker") && !(s.scope === "file" && u.scope !== "test"))
            throw new SyntaxError(`cannot use the ${u.scope} fixture "${u.prop}" inside the ${s.scope} fixture "${s.prop}"`);
        });
      }
    }
  }), t;
}
const Cr = /* @__PURE__ */ new Map(), Nt = /* @__PURE__ */ new Map();
function xs(e, t, n) {
  return (r) => {
    const o = r || n;
    if (!o)
      return t({});
    const s = zp(o);
    if (!s?.length)
      return t(o);
    const i = zu(t), a = s.some(({ auto: h }) => h);
    if (!i.length && !a)
      return t(o);
    Cr.get(o) || Cr.set(o, /* @__PURE__ */ new Map());
    const u = Cr.get(o);
    Nt.has(o) || Nt.set(o, []);
    const c = Nt.get(o), l = s.filter(({ prop: h, auto: m }) => m || i.includes(h)), f = Bu(l);
    if (!f.length)
      return t(o);
    async function d() {
      for (const h of f) {
        if (u.has(h))
          continue;
        const m = await Up(e, h, o, c);
        o[h.prop] = m, u.set(h, m), h.scope === "test" && c.unshift(() => {
          u.delete(h);
        });
      }
    }
    return d().then(() => t(o));
  };
}
const En = /* @__PURE__ */ new WeakMap();
function Up(e, t, n, r) {
  var o;
  const s = fm(n.task.file), i = (o = e.getWorkerContext) === null || o === void 0 ? void 0 : o.call(e);
  if (!t.isFn) {
    var a;
    if (s[a = t.prop] ?? (s[a] = t.value), i) {
      var u;
      i[u = t.prop] ?? (i[u] = t.value);
    }
    return t.value;
  }
  if (t.scope === "test")
    return ra(t.value, n, r);
  if (En.has(t))
    return En.get(t);
  let c;
  if (t.scope === "worker") {
    if (!i)
      throw new TypeError("[@vitest/runner] The worker context is not available in the current test runner. Please, provide the `getWorkerContext` method when initiating the runner.");
    c = i;
  } else
    c = s;
  if (t.prop in c)
    return c[t.prop];
  Nt.has(c) || Nt.set(c, []);
  const l = Nt.get(c), f = ra(t.value, c, l).then((d) => (c[t.prop] = d, En.delete(t), d));
  return En.set(t, f), f;
}
async function ra(e, t, n) {
  const r = ai();
  let o = !1;
  const s = e(t, async (i) => {
    o = !0, r.resolve(i);
    const a = ai();
    n.push(async () => {
      a.resolve(), await s;
    }), await a;
  }).catch((i) => {
    if (!o) {
      r.reject(i);
      return;
    }
    throw i;
  });
  return r;
}
function Bu(e, t = /* @__PURE__ */ new Set(), n = []) {
  return e.forEach((r) => {
    if (!n.includes(r)) {
      if (!r.isFn || !r.deps) {
        n.push(r);
        return;
      }
      if (t.has(r))
        throw new Error(`Circular fixture dependency detected: ${r.prop} <- ${[...t].reverse().map((o) => o.prop).join(" <- ")}`);
      t.add(r), Bu(r.deps, t, n), n.push(r), t.clear();
    }
  }), n;
}
function zu(e) {
  let t = Ap(e.toString());
  /__async\((?:this|null), (?:null|arguments|\[[_0-9, ]*\]), function\*/.test(t) && (t = t.split(/__async\((?:this|null),/)[1]);
  const n = t.match(/[^(]*\(([^)]*)/);
  if (!n)
    return [];
  const r = oa(n[1]);
  if (!r.length)
    return [];
  let o = r[0];
  if ("__VITEST_FIXTURE_INDEX__" in e && (o = r[e.__VITEST_FIXTURE_INDEX__], !o))
    return [];
  if (!(o.startsWith("{") && o.endsWith("}")))
    throw new Error(`The first argument inside a fixture must use object destructuring pattern, e.g. ({ test } => {}). Instead, received "${o}".`);
  const s = o.slice(1, -1).replace(/\s/g, ""), i = oa(s).map((u) => u.replace(/:.*|=.*/g, "")), a = i.at(-1);
  if (a && a.startsWith("..."))
    throw new Error(`Rest parameters are not supported in fixtures, received "${a}".`);
  return i;
}
function oa(e) {
  const t = [], n = [];
  let r = 0;
  for (let s = 0; s < e.length; s++)
    if (e[s] === "{" || e[s] === "[")
      n.push(e[s] === "{" ? "}" : "]");
    else if (e[s] === n[n.length - 1])
      n.pop();
    else if (!n.length && e[s] === ",") {
      const i = e.substring(r, s).trim();
      i && t.push(i), r = s + 1;
    }
  const o = e.substring(r).trim();
  return o && t.push(o), t;
}
function Wu(e, t) {
  function n(o) {
    const s = function(...i) {
      return t.apply(o, i);
    };
    Object.assign(s, t), s.withContext = () => s.bind(o), s.setContext = (i, a) => {
      o[i] = a;
    }, s.mergeContext = (i) => {
      Object.assign(o, i);
    };
    for (const i of e)
      Object.defineProperty(s, i, { get() {
        return n({
          ...o,
          [i]: !0
        });
      } });
    return s;
  }
  const r = n({});
  return r.fn = t, r;
}
const Ct = Qp(), Xp = $s(function(e, t, n) {
  on().test.fn.call(this, ut(e), t, n);
}), zy = Ct, Wy = Xp;
let Ge, Ju, Kp;
function Vu(e, t) {
  if (!e)
    throw new Error(`Vitest failed to find ${t}. This is a bug in Vitest. Please, open an issue with reproduction.`);
}
function Yp() {
  return Kp;
}
function lr() {
  return Vu(Ge, "the runner"), Ge;
}
function on() {
  const e = lt.currentSuite || Ju;
  return Vu(e, "the current suite"), e;
}
function Gp() {
  return {
    beforeAll: [],
    afterAll: [],
    beforeEach: [],
    afterEach: []
  };
}
function St(e, t) {
  let n = {}, r = () => {
  };
  if (typeof t == "object") {
    if (typeof e == "object")
      throw new TypeError("Cannot use two objects as arguments. Please provide options and a function callback in that order.");
    console.warn("Using an object as a third argument is deprecated. Vitest 4 will throw an error if the third argument is not a timeout number. Please use the second argument for options. See more at https://vitest.dev/guide/migration"), n = t;
  } else typeof t == "number" ? n = { timeout: t } : typeof e == "object" && (n = e);
  if (typeof e == "function") {
    if (typeof t == "function")
      throw new TypeError("Cannot use two functions as arguments. Please use the second argument for options.");
    r = e;
  } else typeof t == "function" && (r = t);
  return {
    options: n,
    handler: r
  };
}
function Hp(e, t = () => {
}, n, r, o, s) {
  const i = [];
  let a;
  h();
  const u = function(b = "", S = {}) {
    var x;
    const A = S?.timeout ?? Ge.config.testTimeout, C = {
      id: "",
      name: b,
      suite: (x = lt.currentSuite) === null || x === void 0 ? void 0 : x.suite,
      each: S.each,
      fails: S.fails,
      context: void 0,
      type: "test",
      file: void 0,
      timeout: A,
      retry: S.retry ?? Ge.config.retry,
      repeats: S.repeats,
      mode: S.only ? "only" : S.skip ? "skip" : S.todo ? "todo" : "run",
      meta: S.meta ?? /* @__PURE__ */ Object.create(null),
      annotations: []
    }, M = S.handler;
    (S.concurrent || !S.sequential && Ge.config.sequence.concurrent) && (C.concurrent = !0), C.shuffle = o?.shuffle;
    const j = cm(C, Ge);
    Object.defineProperty(C, "context", {
      value: j,
      enumerable: !1
    }), Bp(j, S.fixtures);
    const P = Error.stackTraceLimit;
    Error.stackTraceLimit = 15;
    const O = new Error("STACK_TRACE_ERROR");
    if (Error.stackTraceLimit = P, M && qp(C, sn(Zp(xs(Ge, M, j), C), A, !1, O, (I, D) => _s([j], D))), Ge.config.includeTaskLocation) {
      const I = O.stack, D = tm(I);
      D && (C.location = D);
    }
    return i.push(C), C;
  }, c = $s(function(b, S, x) {
    let { options: A, handler: C } = St(S, x);
    typeof o == "object" && (A = Object.assign({}, o, A)), A.concurrent = this.concurrent || !this.sequential && A?.concurrent, A.sequential = this.sequential || !this.concurrent && A?.sequential;
    const M = u(ut(b), {
      ...this,
      ...A,
      handler: C
    });
    M.type = "test";
  });
  let l = s;
  const f = {
    type: "collector",
    name: e,
    mode: n,
    suite: a,
    options: o,
    test: c,
    tasks: i,
    collect: p,
    task: u,
    clear: m,
    on: d,
    fixtures() {
      return l;
    },
    scoped(b) {
      const S = qu(b, { fixtures: l }, Ge);
      S.fixtures && (l = S.fixtures);
    }
  };
  function d(b, ...S) {
    Jp(a)[b].push(...S);
  }
  function h(b) {
    var S;
    typeof o == "number" && (o = { timeout: o }), a = {
      id: "",
      type: "suite",
      name: e,
      suite: (S = lt.currentSuite) === null || S === void 0 ? void 0 : S.suite,
      mode: n,
      each: r,
      file: void 0,
      shuffle: o?.shuffle,
      tasks: [],
      meta: /* @__PURE__ */ Object.create(null),
      concurrent: o?.concurrent
    }, Wp(a, Gp());
  }
  function m() {
    i.length = 0, h();
  }
  async function p(b) {
    if (!b)
      throw new TypeError("File is required to collect tasks.");
    t && await im(f, () => t(c));
    const S = [];
    for (const x of i)
      S.push(x.type === "collector" ? await x.collect(b) : x);
    return a.file = b, a.tasks = S, S.forEach((x) => {
      x.file = b;
    }), a;
  }
  return sm(f), f;
}
function Zp(e, t) {
  return async (...n) => {
    const r = await e(...n);
    if (t.promises) {
      const s = (await Promise.allSettled(t.promises)).map((i) => i.status === "rejected" ? i.reason : void 0).filter(Boolean);
      if (s.length)
        throw s;
    }
    return r;
  };
}
function Qp() {
  function e(t, n, r) {
    var o;
    const s = this.only ? "only" : this.skip ? "skip" : this.todo ? "todo" : "run", i = lt.currentSuite || Ju;
    let { options: a, handler: u } = St(n, r);
    const c = a.concurrent || this.concurrent || a.sequential === !1, l = a.sequential || this.sequential || a.concurrent === !1;
    a = {
      ...i?.options,
      ...a,
      shuffle: this.shuffle ?? a.shuffle ?? (i == null || (o = i.options) === null || o === void 0 ? void 0 : o.shuffle) ?? void 0
    };
    const f = c || a.concurrent && !l, d = l || a.sequential && !c;
    return a.concurrent = f && !d, a.sequential = d && !f, Hp(ut(t), u, s, this.each, a, i?.fixtures());
  }
  return e.each = function(t, ...n) {
    const r = this.withContext();
    return this.setContext("each", !0), Array.isArray(t) && n.length && (t = Jn(t, n)), (o, s, i) => {
      const a = ut(o), u = t.every(Array.isArray), { options: c, handler: l } = St(s, i), f = typeof s == "function" && typeof i == "object";
      t.forEach((d, h) => {
        const m = Array.isArray(d) ? d : [d];
        f ? u ? r(He(a, m, h), () => l(...m), c) : r(He(a, m, h), () => l(d), c) : u ? r(He(a, m, h), c, () => l(...m)) : r(He(a, m, h), c, () => l(d));
      }), this.setContext("each", void 0);
    };
  }, e.for = function(t, ...n) {
    return Array.isArray(t) && n.length && (t = Jn(t, n)), (r, o, s) => {
      const i = ut(r), { options: a, handler: u } = St(o, s);
      t.forEach((c, l) => {
        Ct(He(i, bc(c), l), a, () => u(c));
      });
    };
  }, e.skipIf = (t) => t ? Ct.skip : Ct, e.runIf = (t) => t ? Ct : Ct.skip, Wu([
    "concurrent",
    "sequential",
    "shuffle",
    "skip",
    "only",
    "todo"
  ], e);
}
function em(e, t) {
  const n = e;
  n.each = function(o, ...s) {
    const i = this.withContext();
    return this.setContext("each", !0), Array.isArray(o) && s.length && (o = Jn(o, s)), (a, u, c) => {
      const l = ut(a), f = o.every(Array.isArray), { options: d, handler: h } = St(u, c), m = typeof u == "function" && typeof c == "object";
      o.forEach((p, b) => {
        const S = Array.isArray(p) ? p : [p];
        m ? f ? i(He(l, S, b), () => h(...S), d) : i(He(l, S, b), () => h(p), d) : f ? i(He(l, S, b), d, () => h(...S)) : i(He(l, S, b), d, () => h(p));
      }), this.setContext("each", void 0);
    };
  }, n.for = function(o, ...s) {
    const i = this.withContext();
    return Array.isArray(o) && s.length && (o = Jn(o, s)), (a, u, c) => {
      const l = ut(a), { options: f, handler: d } = St(u, c);
      o.forEach((h, m) => {
        const p = (b) => d(h, b);
        p.__VITEST_FIXTURE_INDEX__ = 1, p.toString = () => d.toString(), i(He(l, bc(h), m), f, p);
      });
    };
  }, n.skipIf = function(o) {
    return o ? this.skip : this;
  }, n.runIf = function(o) {
    return o ? this : this.skip;
  }, n.scoped = function(o) {
    on().scoped(o);
  }, n.extend = function(o) {
    const s = qu(o, t || {}, Ge), i = e;
    return $s(function(a, u, c) {
      const f = on().fixtures(), d = { ...this };
      f && (d.fixtures = Vp(d.fixtures || [], f));
      const { handler: h, options: m } = St(u, c), p = m.timeout ?? void 0;
      i.call(d, ut(a), h, p);
    }, s);
  };
  const r = Wu([
    "concurrent",
    "sequential",
    "skip",
    "only",
    "todo",
    "fails"
  ], n);
  return t && r.mergeContext(t), r;
}
function $s(e, t) {
  return em(e, t);
}
function ut(e) {
  return typeof e == "string" ? e : typeof e == "function" ? e.name || "<anonymous>" : String(e);
}
function He(e, t, n) {
  (e.includes("%#") || e.includes("%$")) && (e = e.replace(/%%/g, "__vitest_escaped_%__").replace(/%#/g, `${n}`).replace(/%\$/g, `${n + 1}`).replace(/__vitest_escaped_%__/g, "%%"));
  const r = e.split("%").length - 1;
  e.includes("%f") && (e.match(/%f/g) || []).forEach((a, u) => {
    if (mh(t[u]) || Object.is(t[u], -0)) {
      let c = 0;
      e = e.replace(/%f/g, (l) => (c++, c === u + 1 ? "-%f" : l));
    }
  });
  let o = yc(e, ...t.slice(0, r));
  const s = Mt(t[0]);
  return o = o.replace(/\$([$\w.]+)/g, (i, a) => {
    const u = /^\d+$/.test(a);
    if (!s && !u)
      return `$${a}`;
    const c = u ? ii(t, a) : void 0, l = s ? ii(t[0], a, c) : c;
    return uh(l, { truncate: void 0 });
  }), o;
}
function Jn(e, t) {
  const n = e.join("").trim().replace(/ /g, "").split(`
`).map((o) => o.split("|"))[0], r = [];
  for (let o = 0; o < Math.floor(t.length / n.length); o++) {
    const s = {};
    for (let i = 0; i < n.length; i++)
      s[n[i]] = t[o * n.length + i];
    r.push(s);
  }
  return r;
}
function tm(e) {
  const t = Yp(), n = e.split(`
`).slice(1);
  for (const r of n) {
    const o = vs(r);
    if (o && o.file === t)
      return {
        line: o.line,
        column: o.column
      };
  }
}
globalThis.performance ? globalThis.performance.now.bind(globalThis.performance) : Date.now;
function nm(e) {
  const t = [e.name];
  let n = e;
  for (; n?.suite; )
    n = n.suite, n?.name && t.unshift(n.name);
  return n !== e.file && t.unshift(e.file.name), t;
}
globalThis.performance ? globalThis.performance.now.bind(globalThis.performance) : Date.now;
Dt();
const Or = /* @__PURE__ */ new Map(), sa = [], An = [];
function rm(e) {
  if (Or.size) {
    var t;
    const n = Array.from(Or).map(([o, s]) => [
      o,
      s[0],
      s[1]
    ]), r = (t = e.onTaskUpdate) === null || t === void 0 ? void 0 : t.call(e, n, sa);
    r && (An.push(r), r.then(() => An.splice(An.indexOf(r), 1), () => {
    })), sa.length = 0, Or.clear();
  }
}
async function om(e) {
  rm(e), await Promise.all(An);
}
const ia = Date.now, lt = {
  currentSuite: null
};
function sm(e) {
  var t;
  (t = lt.currentSuite) === null || t === void 0 || t.tasks.push(e);
}
async function im(e, t) {
  const n = lt.currentSuite;
  lt.currentSuite = e, await t(), lt.currentSuite = n;
}
function sn(e, t, n = !1, r, o) {
  if (t <= 0 || t === Number.POSITIVE_INFINITY)
    return e;
  const { setTimeout: s, clearTimeout: i } = Dt();
  return function(...u) {
    const c = ia(), l = lr();
    return l._currentTaskStartTime = c, l._currentTaskTimeout = t, new Promise((f, d) => {
      var h;
      const m = s(() => {
        i(m), p();
      }, t);
      (h = m.unref) === null || h === void 0 || h.call(m);
      function p() {
        const x = um(n, t, r);
        o?.(u, x), d(x);
      }
      function b(x) {
        if (l._currentTaskStartTime = void 0, l._currentTaskTimeout = void 0, i(m), ia() - c >= t) {
          p();
          return;
        }
        f(x);
      }
      function S(x) {
        l._currentTaskStartTime = void 0, l._currentTaskTimeout = void 0, i(m), d(x);
      }
      try {
        const x = e(...u);
        typeof x == "object" && x != null && typeof x.then == "function" ? x.then(b, S) : b(x);
      } catch (x) {
        S(x);
      }
    });
  };
}
const To = /* @__PURE__ */ new WeakMap();
function _s([e], t) {
  e && am(e, t);
}
function am(e, t) {
  const n = To.get(e);
  n?.abort(t);
}
function cm(e, t) {
  var n;
  const r = function() {
    throw new Error("done() callback is deprecated, use promise instead");
  };
  let o = To.get(r);
  o || (o = new AbortController(), To.set(r, o)), r.signal = o.signal, r.task = e, r.skip = (i, a) => {
    if (i !== !1)
      throw e.result ?? (e.result = { state: "skip" }), e.result.pending = !0, new Dp("test is skipped; abort execution", e, typeof i == "string" ? i : a);
  };
  async function s(i, a, u, c) {
    const l = {
      message: i,
      type: u || "notice"
    };
    if (c) {
      if (!c.body && !c.path)
        throw new TypeError("Test attachment requires body or path to be set. Both are missing.");
      if (c.body && c.path)
        throw new TypeError('Test attachment requires only one of "body" or "path" to be set. Both are specified.');
      l.attachment = c, c.body instanceof Uint8Array && (c.body = hm(c.body));
    }
    if (a && (l.location = a), !t.onTestAnnotate)
      throw new Error("Test runner doesn't support test annotations.");
    await om(t);
    const f = await t.onTestAnnotate(e, l);
    return e.annotations.push(f), f;
  }
  return r.annotate = (i, a, u) => {
    if (e.result && e.result.state !== "run")
      throw new Error(`Cannot annotate tests outside of the test run. The test "${e.name}" finished running with the "${e.result.state}" state already.`);
    let c;
    const l = new Error("STACK_TRACE").stack, f = l.includes("STACK_TRACE") ? 2 : 1, d = l.split(`
`)[f], h = vs(d);
    return h && (c = {
      file: h.file,
      line: h.line,
      column: h.column
    }), typeof a == "object" ? aa(e, s(i, c, void 0, a)) : aa(e, s(i, c, a, u));
  }, r.onTestFailed = (i, a) => {
    e.onFailed || (e.onFailed = []), e.onFailed.push(sn(i, a ?? t.config.hookTimeout, !0, new Error("STACK_TRACE_ERROR"), (u, c) => o.abort(c)));
  }, r.onTestFinished = (i, a) => {
    e.onFinished || (e.onFinished = []), e.onFinished.push(sn(i, a ?? t.config.hookTimeout, !0, new Error("STACK_TRACE_ERROR"), (u, c) => o.abort(c)));
  }, ((n = t.extendTaskContext) === null || n === void 0 ? void 0 : n.call(t, r)) || r;
}
function um(e, t, n) {
  const r = `${e ? "Hook" : "Test"} timed out in ${t}ms.
If this is a long-running ${e ? "hook" : "test"}, pass a timeout value as the last argument or configure it globally with "${e ? "hookTimeout" : "testTimeout"}".`, o = new Error(r);
  return n?.stack && (o.stack = n.stack.replace(o.message, n.message)), o;
}
const lm = /* @__PURE__ */ new WeakMap();
function fm(e) {
  const t = lm.get(e);
  if (!t)
    throw new Error(`Cannot find file context for ${e.name}`);
  return t;
}
const Re = [];
for (let e = 65; e < 91; e++)
  Re.push(String.fromCharCode(e));
for (let e = 97; e < 123; e++)
  Re.push(String.fromCharCode(e));
for (let e = 0; e < 10; e++)
  Re.push(e.toString(10));
function hm(e) {
  let t = "";
  const n = e.byteLength;
  for (let r = 0; r < n; r += 3)
    if (n === r + 1) {
      const o = (e[r] & 252) >> 2, s = (e[r] & 3) << 4;
      t += Re[o], t += Re[s], t += "==";
    } else if (n === r + 2) {
      const o = (e[r] & 252) >> 2, s = (e[r] & 3) << 4 | (e[r + 1] & 240) >> 4, i = (e[r + 1] & 15) << 2;
      t += Re[o], t += Re[s], t += Re[i], t += "=";
    } else {
      const o = (e[r] & 252) >> 2, s = (e[r] & 3) << 4 | (e[r + 1] & 240) >> 4, i = (e[r + 1] & 15) << 2 | (e[r + 2] & 192) >> 6, a = e[r + 2] & 63;
      t += Re[o], t += Re[s], t += Re[i], t += Re[a];
    }
  return t;
}
function aa(e, t) {
  return t = t.finally(() => {
    if (!e.promises)
      return;
    const n = e.promises.indexOf(t);
    n !== -1 && e.promises.splice(n, 1);
  }), e.promises || (e.promises = []), e.promises.push(t), t;
}
function Eo() {
  return lr().config.hookTimeout;
}
const dm = Symbol.for("VITEST_CLEANUP_TIMEOUT"), pm = Symbol.for("VITEST_CLEANUP_STACK_TRACE");
function Jy(e, t = Eo()) {
  je(e, '"beforeEach" callback', ["function"]);
  const n = new Error("STACK_TRACE_ERROR"), r = lr();
  return on().on("beforeEach", Object.assign(sn(xs(r, e), t ?? Eo(), !0, n, _s), {
    [dm]: t,
    [pm]: n
  }));
}
function Vy(e, t) {
  je(e, '"afterEach" callback', ["function"]);
  const n = lr();
  return on().on("afterEach", sn(xs(n, e), Eo(), !0, new Error("STACK_TRACE_ERROR"), _s));
}
const mm = "__vitest_worker__";
function pn() {
  const e = globalThis[mm];
  if (!e) {
    const t = `Vitest failed to access its internal state.

One of the following is possible:
- "vitest" is imported directly without running "vitest" command
- "vitest" is imported inside "globalSetup" (to fix this, use "setupFiles" instead, because "globalSetup" runs in a different context)
- "vitest" is imported inside Vite / Vitest config file
- Otherwise, it might be a Vitest bug. Please report it to https://github.com/vitest-dev/vitest/issues
`;
    throw new Error(t);
  }
  return e;
}
function gm() {
  return pn()?.environment.name;
}
function Uu() {
  return typeof process < "u" && !!process.send;
}
function ym(e, t = !1) {
  const n = [
    /\/vitest\/dist\//,
    /\/vite-node\/dist\//,
    /vitest-virtual-\w+\/dist/,
    /@vitest\/dist/,
    ...t ? [] : [/^mock:/]
  ];
  e.forEach((r, o) => {
    n.some((s) => s.test(o)) || e.invalidateModule(r);
  });
}
function bm() {
  const { setTimeout: e } = Dt();
  return new Promise((t) => e(t, 0));
}
async function Xu() {
  await bm();
  const e = pn(), t = [];
  let n = 0;
  for (const r of e.moduleCache.values())
    r.promise && !r.evaluated && t.push(r.promise), r.resolving && n++;
  !t.length && !n || (await Promise.allSettled(t), await Xu());
}
var vo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function wm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
const Sm = 44, ca = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Tm = new Uint8Array(64), Ku = new Uint8Array(128);
for (let e = 0; e < ca.length; e++) {
  const t = ca.charCodeAt(e);
  Tm[e] = t, Ku[t] = e;
}
function Jt(e, t) {
  let n = 0, r = 0, o = 0;
  do {
    const i = e.next();
    o = Ku[i], n |= (o & 31) << r, r += 5;
  } while (o & 32);
  const s = n & 1;
  return n >>>= 1, s && (n = -2147483648 | -n), t + n;
}
function ua(e, t) {
  return e.pos >= t ? !1 : e.peek() !== Sm;
}
class Em {
  constructor(t) {
    this.pos = 0, this.buffer = t;
  }
  next() {
    return this.buffer.charCodeAt(this.pos++);
  }
  peek() {
    return this.buffer.charCodeAt(this.pos);
  }
  indexOf(t) {
    const { buffer: n, pos: r } = this, o = n.indexOf(t, r);
    return o === -1 ? n.length : o;
  }
}
function vm(e) {
  const { length: t } = e, n = new Em(e), r = [];
  let o = 0, s = 0, i = 0, a = 0, u = 0;
  do {
    const c = n.indexOf(";"), l = [];
    let f = !0, d = 0;
    for (o = 0; n.pos < c; ) {
      let h;
      o = Jt(n, o), o < d && (f = !1), d = o, ua(n, c) ? (s = Jt(n, s), i = Jt(n, i), a = Jt(n, a), ua(n, c) ? (u = Jt(n, u), h = [o, s, i, a, u]) : h = [o, s, i, a]) : h = [o], l.push(h), n.pos++;
    }
    f || xm(l), r.push(l), n.pos = c + 1;
  } while (n.pos <= t);
  return r;
}
function xm(e) {
  e.sort($m);
}
function $m(e, t) {
  return e[0] - t[0];
}
const _m = /^[\w+.-]+:\/\//, Im = /^([\w+.-]+:)\/\/([^@/#?]*@)?([^:/#?]*)(:\d+)?(\/[^#?]*)?(\?[^#]*)?(#.*)?/, Cm = /^file:(?:\/\/((?![a-z]:)[^/#?]*)?)?(\/?[^#?]*)(\?[^#]*)?(#.*)?/i;
var pe;
(function(e) {
  e[e.Empty = 1] = "Empty", e[e.Hash = 2] = "Hash", e[e.Query = 3] = "Query", e[e.RelativePath = 4] = "RelativePath", e[e.AbsolutePath = 5] = "AbsolutePath", e[e.SchemeRelative = 6] = "SchemeRelative", e[e.Absolute = 7] = "Absolute";
})(pe || (pe = {}));
function Om(e) {
  return _m.test(e);
}
function Am(e) {
  return e.startsWith("//");
}
function Yu(e) {
  return e.startsWith("/");
}
function Mm(e) {
  return e.startsWith("file:");
}
function la(e) {
  return /^[.?#]/.test(e);
}
function vn(e) {
  const t = Im.exec(e);
  return Gu(t[1], t[2] || "", t[3], t[4] || "", t[5] || "/", t[6] || "", t[7] || "");
}
function Pm(e) {
  const t = Cm.exec(e), n = t[2];
  return Gu("file:", "", t[1] || "", "", Yu(n) ? n : "/" + n, t[3] || "", t[4] || "");
}
function Gu(e, t, n, r, o, s, i) {
  return {
    scheme: e,
    user: t,
    host: n,
    port: r,
    path: o,
    query: s,
    hash: i,
    type: pe.Absolute
  };
}
function fa(e) {
  if (Am(e)) {
    const n = vn("http:" + e);
    return n.scheme = "", n.type = pe.SchemeRelative, n;
  }
  if (Yu(e)) {
    const n = vn("http://foo.com" + e);
    return n.scheme = "", n.host = "", n.type = pe.AbsolutePath, n;
  }
  if (Mm(e))
    return Pm(e);
  if (Om(e))
    return vn(e);
  const t = vn("http://foo.com/" + e);
  return t.scheme = "", t.host = "", t.type = e ? e.startsWith("?") ? pe.Query : e.startsWith("#") ? pe.Hash : pe.RelativePath : pe.Empty, t;
}
function Nm(e) {
  if (e.endsWith("/.."))
    return e;
  const t = e.lastIndexOf("/");
  return e.slice(0, t + 1);
}
function km(e, t) {
  Hu(t, t.type), e.path === "/" ? e.path = t.path : e.path = Nm(t.path) + e.path;
}
function Hu(e, t) {
  const n = t <= pe.RelativePath, r = e.path.split("/");
  let o = 1, s = 0, i = !1;
  for (let u = 1; u < r.length; u++) {
    const c = r[u];
    if (!c) {
      i = !0;
      continue;
    }
    if (i = !1, c !== ".") {
      if (c === "..") {
        s ? (i = !0, s--, o--) : n && (r[o++] = c);
        continue;
      }
      r[o++] = c, s++;
    }
  }
  let a = "";
  for (let u = 1; u < o; u++)
    a += "/" + r[u];
  (!a || i && !a.endsWith("/..")) && (a += "/"), e.path = a;
}
function jm(e, t) {
  if (!e && !t)
    return "";
  const n = fa(e);
  let r = n.type;
  if (t && r !== pe.Absolute) {
    const s = fa(t), i = s.type;
    switch (r) {
      case pe.Empty:
        n.hash = s.hash;
      // fall through
      case pe.Hash:
        n.query = s.query;
      // fall through
      case pe.Query:
      case pe.RelativePath:
        km(n, s);
      // fall through
      case pe.AbsolutePath:
        n.user = s.user, n.host = s.host, n.port = s.port;
      // fall through
      case pe.SchemeRelative:
        n.scheme = s.scheme;
    }
    i > r && (r = i);
  }
  Hu(n, r);
  const o = n.query + n.hash;
  switch (r) {
    // This is impossible, because of the empty checks at the start of the function.
    // case UrlType.Empty:
    case pe.Hash:
    case pe.Query:
      return o;
    case pe.RelativePath: {
      const s = n.path.slice(1);
      return s ? la(t || e) && !la(s) ? "./" + s + o : s + o : o || ".";
    }
    case pe.AbsolutePath:
      return n.path + o;
    default:
      return n.scheme + "//" + n.user + n.host + n.port + n.path + o;
  }
}
function ha(e, t) {
  return t && !t.endsWith("/") && (t += "/"), jm(e, t);
}
function Rm(e) {
  if (!e)
    return "";
  const t = e.lastIndexOf("/");
  return e.slice(0, t + 1);
}
const ft = 0, Fm = 1, Dm = 2, Lm = 3, qm = 4;
function Bm(e, t) {
  const n = da(e, 0);
  if (n === e.length)
    return e;
  t || (e = e.slice());
  for (let r = n; r < e.length; r = da(e, r + 1))
    e[r] = Wm(e[r], t);
  return e;
}
function da(e, t) {
  for (let n = t; n < e.length; n++)
    if (!zm(e[n]))
      return n;
  return e.length;
}
function zm(e) {
  for (let t = 1; t < e.length; t++)
    if (e[t][ft] < e[t - 1][ft])
      return !1;
  return !0;
}
function Wm(e, t) {
  return t || (e = e.slice()), e.sort(Jm);
}
function Jm(e, t) {
  return e[ft] - t[ft];
}
let Vn = !1;
function Vm(e, t, n, r) {
  for (; n <= r; ) {
    const o = n + (r - n >> 1), s = e[o][ft] - t;
    if (s === 0)
      return Vn = !0, o;
    s < 0 ? n = o + 1 : r = o - 1;
  }
  return Vn = !1, n - 1;
}
function Um(e, t, n) {
  for (let r = n + 1; r < e.length && e[r][ft] === t; n = r++)
    ;
  return n;
}
function Xm(e, t, n) {
  for (let r = n - 1; r >= 0 && e[r][ft] === t; n = r--)
    ;
  return n;
}
function Km() {
  return {
    lastKey: -1,
    lastNeedle: -1,
    lastIndex: -1
  };
}
function Ym(e, t, n, r) {
  const { lastKey: o, lastNeedle: s, lastIndex: i } = n;
  let a = 0, u = e.length - 1;
  if (r === o) {
    if (t === s)
      return Vn = i !== -1 && e[i][ft] === t, i;
    t >= s ? a = i === -1 ? 0 : i : u = i;
  }
  return n.lastKey = r, n.lastNeedle = t, n.lastIndex = Vm(e, t, a, u);
}
const Gm = "`line` must be greater than 0 (lines start at line 1)", Hm = "`column` must be greater than or equal to 0 (columns start at column 0)", pa = -1, Zm = 1;
class Qm {
  constructor(t, n) {
    const r = typeof t == "string";
    if (!r && t._decodedMemo)
      return t;
    const o = r ? JSON.parse(t) : t, { version: s, file: i, names: a, sourceRoot: u, sources: c, sourcesContent: l } = o;
    this.version = s, this.file = i, this.names = a || [], this.sourceRoot = u, this.sources = c, this.sourcesContent = l, this.ignoreList = o.ignoreList || o.x_google_ignoreList || void 0;
    const f = ha(u || "", Rm(n));
    this.resolvedSources = c.map((h) => ha(h || "", f));
    const { mappings: d } = o;
    typeof d == "string" ? (this._encoded = d, this._decoded = void 0) : (this._encoded = void 0, this._decoded = Bm(d, r)), this._decodedMemo = Km(), this._bySources = void 0, this._bySourceMemos = void 0;
  }
}
function eg(e) {
  var t;
  return (t = e)._decoded || (t._decoded = vm(e._encoded));
}
function tg(e, t) {
  let { line: n, column: r, bias: o } = t;
  if (n--, n < 0)
    throw new Error(Gm);
  if (r < 0)
    throw new Error(Hm);
  const s = eg(e);
  if (n >= s.length)
    return xn(null, null, null, null);
  const i = s[n], a = ng(i, e._decodedMemo, n, r, o || Zm);
  if (a === -1)
    return xn(null, null, null, null);
  const u = i[a];
  if (u.length === 1)
    return xn(null, null, null, null);
  const { names: c, resolvedSources: l } = e;
  return xn(l[u[Fm]], u[Dm] + 1, u[Lm], u.length === 5 ? c[u[qm]] : null);
}
function xn(e, t, n, r) {
  return { source: e, line: t, column: n, name: r };
}
function ng(e, t, n, r, o) {
  let s = Ym(e, r, t, n);
  return Vn ? s = (o === pa ? Um : Xm)(e, r, s) : o === pa && s++, s === -1 || s === e.length ? -1 : s;
}
function Zu(e) {
  return e != null;
}
function rg(e) {
  return e === null || typeof e != "function" && typeof e != "object";
}
function Mn(e) {
  return e != null && typeof e == "object" && !Array.isArray(e);
}
function og(e) {
  let t = -1, n = null, r = 0, o = 0, s = null;
  for (; t <= e.length; ) {
    s = e[t], t++;
    const i = e[t];
    if ((i === '"' || i === "'" || i === "`") && s !== "\\" && (n === i ? n = null : n || (n = i)), n || (i === "(" && r++, i === ")" && o++), r && o && r === o)
      return t;
  }
  return null;
}
const Qu = /^\s*at .*(?:\S:\d+|\(native\))/m, sg = /^(?:eval@)?(?:\[native code\])?$/, ig = [
  "node:internal",
  /\/packages\/\w+\/dist\//,
  /\/@vitest\/\w+\/dist\//,
  "/vitest/dist/",
  "/vitest/src/",
  "/vite-node/dist/",
  "/vite-node/src/",
  "/node_modules/chai/",
  "/node_modules/tinypool/",
  "/node_modules/tinyspy/",
  "/deps/chunk-",
  "/deps/@vitest",
  "/deps/loupe",
  "/deps/chai",
  /node:\w+/,
  /__vitest_test__/,
  /__vitest_browser__/,
  /\/deps\/vitest_/
];
function el(e) {
  if (!e.includes(":"))
    return [e];
  const n = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(e.replace(/^\(|\)$/g, ""));
  if (!n)
    return [e];
  let r = n[1];
  if (r.startsWith("async ") && (r = r.slice(6)), r.startsWith("http:") || r.startsWith("https:")) {
    const o = new URL(r);
    o.searchParams.delete("import"), o.searchParams.delete("browserv"), r = o.pathname + o.hash + o.search;
  }
  if (r.startsWith("/@fs/")) {
    const o = /^\/@fs\/[a-zA-Z]:\//.test(r);
    r = r.slice(o ? 5 : 4);
  }
  return [
    r,
    n[2] || void 0,
    n[3] || void 0
  ];
}
function ag(e) {
  let t = e.trim();
  if (sg.test(t) || (t.includes(" > eval") && (t = t.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")), !t.includes("@") && !t.includes(":")))
    return null;
  const n = /((.*".+"[^@]*)?[^@]*)(@)/, r = t.match(n), o = r && r[1] ? r[1] : void 0, [s, i, a] = el(t.replace(n, ""));
  return !s || !i || !a ? null : {
    file: s,
    method: o || "",
    line: Number.parseInt(i),
    column: Number.parseInt(a)
  };
}
function cg(e) {
  let t = e.trim();
  if (!Qu.test(t))
    return null;
  t.includes("(eval ") && (t = t.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(,.*$)/g, ""));
  let n = t.replace(/^\s+/, "").replace(/\(eval code/g, "(").replace(/^.*?\s+/, "");
  const r = n.match(/ (\(.+\)$)/);
  n = r ? n.replace(r[0], "") : n;
  const [o, s, i] = el(r ? r[1] : n);
  let a = r && n || "", u = o && ["eval", "<anonymous>"].includes(o) ? void 0 : o;
  return !u || !s || !i ? null : (a.startsWith("async ") && (a = a.slice(6)), u.startsWith("file://") && (u = u.slice(7)), u = u.startsWith("node:") || u.startsWith("internal:") ? u : Rp(u), a && (a = a.replace(/__vite_ssr_import_\d+__\./g, "")), {
    method: a,
    file: u,
    line: Number.parseInt(s),
    column: Number.parseInt(i)
  });
}
function Ar(e, t = {}) {
  const { ignoreStackEntries: n = ig } = t;
  return (Qu.test(e) ? lg(e) : ug(e)).map((o) => {
    var s;
    t.getUrlId && (o.file = t.getUrlId(o.file));
    const i = (s = t.getSourceMap) === null || s === void 0 ? void 0 : s.call(t, o.file);
    if (!i || typeof i != "object" || !i.version)
      return ma(n, o.file) ? null : o;
    const a = new Qm(i), { line: u, column: c, source: l, name: f } = tg(a, o);
    let d = o.file;
    if (l) {
      const h = o.file.startsWith("file://") ? o.file : `file://${o.file}`, m = i.sourceRoot ? new URL(i.sourceRoot, h) : h;
      d = new URL(l, m).pathname, d.match(/\/\w:\//) && (d = d.slice(1));
    }
    return ma(n, d) ? null : u != null && c != null ? {
      line: u,
      column: c,
      file: d,
      method: f || o.method
    } : o;
  }).filter((o) => o != null);
}
function ma(e, t) {
  return e.some((n) => t.match(n));
}
function ug(e) {
  return e.split(`
`).map((t) => ag(t)).filter(Zu);
}
function lg(e) {
  return e.split(`
`).map((t) => cg(t)).filter(Zu);
}
function fg(e, t = {}) {
  if (!e || rg(e))
    return [];
  if (e.stacks)
    return e.stacks;
  const n = e.stack || "";
  let r = typeof n == "string" ? Ar(n, t) : [];
  if (!r.length) {
    const o = e;
    o.fileName != null && o.lineNumber != null && o.columnNumber != null && (r = Ar(`${o.fileName}:${o.lineNumber}:${o.columnNumber}`, t)), o.sourceURL != null && o.line != null && o._column != null && (r = Ar(`${o.sourceURL}:${o.line}:${o.column}`, t));
  }
  return t.frameFilter && (r = r.filter((o) => t.frameFilter(e, o) !== !1)), e.stacks = r, r;
}
let hg = () => "Promise{…}";
try {
  const { getPromiseDetails: e, kPending: t, kRejected: n } = process.binding("util");
  Array.isArray(e(Promise.resolve())) && (hg = (r, o) => {
    const [s, i] = e(r);
    return s === t ? "Promise{<pending>}" : `Promise${s === n ? "!" : ""}{${o.inspect(i, o)}}`;
  });
} catch {
}
function dg(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Mr, ga;
function pg() {
  if (ga) return Mr;
  ga = 1;
  var e, t, n, r, o, s, i, a, u, c, l, f, d, h, m, p, b, S, x;
  return d = /\/(?![*\/])(?:\[(?:(?![\]\\]).|\\.)*\]|(?![\/\\]).|\\.)*(\/[$_\u200C\u200D\p{ID_Continue}]*|\\)?/yu, f = /--|\+\+|=>|\.{3}|\??\.(?!\d)|(?:&&|\|\||\?\?|[+\-%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2}|\/(?![\/*]))=?|[?~,:;[\](){}]/y, e = /(\x23?)(?=[$_\p{ID_Start}\\])(?:[$_\u200C\u200D\p{ID_Continue}]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+/yu, m = /(['"])(?:(?!\1)[^\\\n\r]|\\(?:\r\n|[^]))*(\1)?/y, l = /(?:0[xX][\da-fA-F](?:_?[\da-fA-F])*|0[oO][0-7](?:_?[0-7])*|0[bB][01](?:_?[01])*)n?|0n|[1-9](?:_?\d)*n|(?:(?:0(?!\d)|0\d*[89]\d*|[1-9](?:_?\d)*)(?:\.(?:\d(?:_?\d)*)?)?|\.\d(?:_?\d)*)(?:[eE][+-]?\d(?:_?\d)*)?|0[0-7]+/y, p = /[`}](?:[^`\\$]|\\[^]|\$(?!\{))*(`|\$\{)?/y, x = /[\t\v\f\ufeff\p{Zs}]+/yu, a = /\r?\n|[\r\u2028\u2029]/y, u = /\/\*(?:[^*]|\*(?!\/))*(\*\/)?/y, h = /\/\/.*/y, n = /[<>.:={}]|\/(?![\/*])/y, t = /[$_\p{ID_Start}][$_\u200C\u200D\p{ID_Continue}-]*/yu, r = /(['"])(?:(?!\1)[^])*(\1)?/y, o = /[^<>{}]+/y, S = /^(?:[\/+-]|\.{3}|\?(?:InterpolationIn(?:JSX|Template)|NoLineTerminatorHere|NonExpressionParenEnd|UnaryIncDec))?$|[{}([,;<>=*%&|^!~?:]$/, b = /^(?:=>|[;\]){}]|else|\?(?:NoLineTerminatorHere|NonExpressionParenEnd))?$/, s = /^(?:await|case|default|delete|do|else|instanceof|new|return|throw|typeof|void|yield)$/, i = /^(?:return|throw|yield)$/, c = RegExp(a.source), Mr = function* (A, { jsx: C = !1 } = {}) {
    var M, j, P, O, I, D, _, N, Q, U, J, R, L, q;
    for ({ length: D } = A, O = 0, I = "", q = [
      { tag: "JS" }
    ], M = [], J = 0, R = !1; O < D; ) {
      switch (N = q[q.length - 1], N.tag) {
        case "JS":
        case "JSNonExpressionParen":
        case "InterpolationInTemplate":
        case "InterpolationInJSX":
          if (A[O] === "/" && (S.test(I) || s.test(I)) && (d.lastIndex = O, _ = d.exec(A))) {
            O = d.lastIndex, I = _[0], R = !0, yield {
              type: "RegularExpressionLiteral",
              value: _[0],
              closed: _[1] !== void 0 && _[1] !== "\\"
            };
            continue;
          }
          if (f.lastIndex = O, _ = f.exec(A)) {
            switch (L = _[0], Q = f.lastIndex, U = L, L) {
              case "(":
                I === "?NonExpressionParenKeyword" && q.push({
                  tag: "JSNonExpressionParen",
                  nesting: J
                }), J++, R = !1;
                break;
              case ")":
                J--, R = !0, N.tag === "JSNonExpressionParen" && J === N.nesting && (q.pop(), U = "?NonExpressionParenEnd", R = !1);
                break;
              case "{":
                f.lastIndex = 0, P = !b.test(I) && (S.test(I) || s.test(I)), M.push(P), R = !1;
                break;
              case "}":
                switch (N.tag) {
                  case "InterpolationInTemplate":
                    if (M.length === N.nesting) {
                      p.lastIndex = O, _ = p.exec(A), O = p.lastIndex, I = _[0], _[1] === "${" ? (I = "?InterpolationInTemplate", R = !1, yield {
                        type: "TemplateMiddle",
                        value: _[0]
                      }) : (q.pop(), R = !0, yield {
                        type: "TemplateTail",
                        value: _[0],
                        closed: _[1] === "`"
                      });
                      continue;
                    }
                    break;
                  case "InterpolationInJSX":
                    if (M.length === N.nesting) {
                      q.pop(), O += 1, I = "}", yield {
                        type: "JSXPunctuator",
                        value: "}"
                      };
                      continue;
                    }
                }
                R = M.pop(), U = R ? "?ExpressionBraceEnd" : "}";
                break;
              case "]":
                R = !0;
                break;
              case "++":
              case "--":
                U = R ? "?PostfixIncDec" : "?UnaryIncDec";
                break;
              case "<":
                if (C && (S.test(I) || s.test(I))) {
                  q.push({ tag: "JSXTag" }), O += 1, I = "<", yield {
                    type: "JSXPunctuator",
                    value: L
                  };
                  continue;
                }
                R = !1;
                break;
              default:
                R = !1;
            }
            O = Q, I = U, yield {
              type: "Punctuator",
              value: L
            };
            continue;
          }
          if (e.lastIndex = O, _ = e.exec(A)) {
            switch (O = e.lastIndex, U = _[0], _[0]) {
              case "for":
              case "if":
              case "while":
              case "with":
                I !== "." && I !== "?." && (U = "?NonExpressionParenKeyword");
            }
            I = U, R = !s.test(_[0]), yield {
              type: _[1] === "#" ? "PrivateIdentifier" : "IdentifierName",
              value: _[0]
            };
            continue;
          }
          if (m.lastIndex = O, _ = m.exec(A)) {
            O = m.lastIndex, I = _[0], R = !0, yield {
              type: "StringLiteral",
              value: _[0],
              closed: _[2] !== void 0
            };
            continue;
          }
          if (l.lastIndex = O, _ = l.exec(A)) {
            O = l.lastIndex, I = _[0], R = !0, yield {
              type: "NumericLiteral",
              value: _[0]
            };
            continue;
          }
          if (p.lastIndex = O, _ = p.exec(A)) {
            O = p.lastIndex, I = _[0], _[1] === "${" ? (I = "?InterpolationInTemplate", q.push({
              tag: "InterpolationInTemplate",
              nesting: M.length
            }), R = !1, yield {
              type: "TemplateHead",
              value: _[0]
            }) : (R = !0, yield {
              type: "NoSubstitutionTemplate",
              value: _[0],
              closed: _[1] === "`"
            });
            continue;
          }
          break;
        case "JSXTag":
        case "JSXTagEnd":
          if (n.lastIndex = O, _ = n.exec(A)) {
            switch (O = n.lastIndex, U = _[0], _[0]) {
              case "<":
                q.push({ tag: "JSXTag" });
                break;
              case ">":
                q.pop(), I === "/" || N.tag === "JSXTagEnd" ? (U = "?JSX", R = !0) : q.push({ tag: "JSXChildren" });
                break;
              case "{":
                q.push({
                  tag: "InterpolationInJSX",
                  nesting: M.length
                }), U = "?InterpolationInJSX", R = !1;
                break;
              case "/":
                I === "<" && (q.pop(), q[q.length - 1].tag === "JSXChildren" && q.pop(), q.push({ tag: "JSXTagEnd" }));
            }
            I = U, yield {
              type: "JSXPunctuator",
              value: _[0]
            };
            continue;
          }
          if (t.lastIndex = O, _ = t.exec(A)) {
            O = t.lastIndex, I = _[0], yield {
              type: "JSXIdentifier",
              value: _[0]
            };
            continue;
          }
          if (r.lastIndex = O, _ = r.exec(A)) {
            O = r.lastIndex, I = _[0], yield {
              type: "JSXString",
              value: _[0],
              closed: _[2] !== void 0
            };
            continue;
          }
          break;
        case "JSXChildren":
          if (o.lastIndex = O, _ = o.exec(A)) {
            O = o.lastIndex, I = _[0], yield {
              type: "JSXText",
              value: _[0]
            };
            continue;
          }
          switch (A[O]) {
            case "<":
              q.push({ tag: "JSXTag" }), O++, I = "<", yield {
                type: "JSXPunctuator",
                value: "<"
              };
              continue;
            case "{":
              q.push({
                tag: "InterpolationInJSX",
                nesting: M.length
              }), O++, I = "?InterpolationInJSX", R = !1, yield {
                type: "JSXPunctuator",
                value: "{"
              };
              continue;
          }
      }
      if (x.lastIndex = O, _ = x.exec(A)) {
        O = x.lastIndex, yield {
          type: "WhiteSpace",
          value: _[0]
        };
        continue;
      }
      if (a.lastIndex = O, _ = a.exec(A)) {
        O = a.lastIndex, R = !1, i.test(I) && (I = "?NoLineTerminatorHere"), yield {
          type: "LineTerminatorSequence",
          value: _[0]
        };
        continue;
      }
      if (u.lastIndex = O, _ = u.exec(A)) {
        O = u.lastIndex, c.test(_[0]) && (R = !1, i.test(I) && (I = "?NoLineTerminatorHere")), yield {
          type: "MultiLineComment",
          value: _[0],
          closed: _[1] !== void 0
        };
        continue;
      }
      if (h.lastIndex = O, _ = h.exec(A)) {
        O = h.lastIndex, R = !1, yield {
          type: "SingleLineComment",
          value: _[0]
        };
        continue;
      }
      j = String.fromCodePoint(A.codePointAt(O)), O += j.length, I = j, R = !1, yield {
        type: N.tag.startsWith("JSX") ? "JSXInvalid" : "Invalid",
        value: j
      };
    }
  }, Mr;
}
pg();
var tl = {
  keyword: [
    "break",
    "case",
    "catch",
    "continue",
    "debugger",
    "default",
    "do",
    "else",
    "finally",
    "for",
    "function",
    "if",
    "return",
    "switch",
    "throw",
    "try",
    "var",
    "const",
    "while",
    "with",
    "new",
    "this",
    "super",
    "class",
    "extends",
    "export",
    "import",
    "null",
    "true",
    "false",
    "in",
    "instanceof",
    "typeof",
    "void",
    "delete"
  ],
  strict: [
    "implements",
    "interface",
    "let",
    "package",
    "private",
    "protected",
    "public",
    "static",
    "yield"
  ]
};
new Set(tl.keyword);
new Set(tl.strict);
var mg = {
  reset: [0, 0],
  bold: [1, 22, "\x1B[22m\x1B[1m"],
  dim: [2, 22, "\x1B[22m\x1B[2m"],
  italic: [3, 23],
  underline: [4, 24],
  inverse: [7, 27],
  hidden: [8, 28],
  strikethrough: [9, 29],
  black: [30, 39],
  red: [31, 39],
  green: [32, 39],
  yellow: [33, 39],
  blue: [34, 39],
  magenta: [35, 39],
  cyan: [36, 39],
  white: [37, 39],
  gray: [90, 39],
  bgBlack: [40, 49],
  bgRed: [41, 49],
  bgGreen: [42, 49],
  bgYellow: [43, 49],
  bgBlue: [44, 49],
  bgMagenta: [45, 49],
  bgCyan: [46, 49],
  bgWhite: [47, 49],
  blackBright: [90, 39],
  redBright: [91, 39],
  greenBright: [92, 39],
  yellowBright: [93, 39],
  blueBright: [94, 39],
  magentaBright: [95, 39],
  cyanBright: [96, 39],
  whiteBright: [97, 39],
  bgBlackBright: [100, 49],
  bgRedBright: [101, 49],
  bgGreenBright: [102, 49],
  bgYellowBright: [103, 49],
  bgBlueBright: [104, 49],
  bgMagentaBright: [105, 49],
  bgCyanBright: [106, 49],
  bgWhiteBright: [107, 49]
}, gg = Object.entries(mg);
function Is(e) {
  return String(e);
}
Is.open = "";
Is.close = "";
function yg(e = !1) {
  let t = typeof process < "u" ? process : void 0, n = t?.env || {}, r = t?.argv || [];
  return !("NO_COLOR" in n || r.includes("--no-color")) && ("FORCE_COLOR" in n || r.includes("--color") || t?.platform === "win32" || e && n.TERM !== "dumb" || "CI" in n) || typeof window < "u" && !!window.chrome;
}
function bg(e = !1) {
  let t = yg(e), n = (i, a, u, c) => {
    let l = "", f = 0;
    do
      l += i.substring(f, c) + u, f = c + a.length, c = i.indexOf(a, f);
    while (~c);
    return l + i.substring(f);
  }, r = (i, a, u = i) => {
    let c = (l) => {
      let f = String(l), d = f.indexOf(a, i.length);
      return ~d ? i + n(f, a, u, d) + a : i + f + a;
    };
    return c.open = i, c.close = a, c;
  }, o = {
    isColorSupported: t
  }, s = (i) => `\x1B[${i}m`;
  for (let [i, a] of gg)
    o[i] = t ? r(
      s(a[0]),
      s(a[1]),
      a[2]
    ) : Is;
  return o;
}
bg();
const Cs = /\r?\n/;
function wg(e, t, n) {
  const r = e.split(Cs), o = /\r\n/.test(e) ? 2 : 1;
  let s = 0;
  if (t > r.length)
    return e.length;
  for (let i = 0; i < t - 1; i++)
    s += r[i].length + o;
  return s + n;
}
function Sg(e, t) {
  if (t > e.length)
    throw new Error(`offset is longer than source length! offset ${t} > length ${e.length}`);
  const n = e.split(Cs), r = /\r\n/.test(e) ? 2 : 1;
  let o = 0, s = 0;
  for (; s < n.length; s++) {
    const i = n[s].length + r;
    if (o + i >= t)
      break;
    o += i;
  }
  return s + 1;
}
async function Tg(e, t) {
  const n = (await import("./magic-string.es-uPKorP4O.js")).default, r = new Set(t.map((o) => o.file));
  await Promise.all(Array.from(r).map(async (o) => {
    const s = t.filter((c) => c.file === o), i = await e.readSnapshotFile(o), a = new n(i);
    for (const c of s) {
      const l = wg(i, c.line, c.column);
      Ig(i, a, l, c.snapshot);
    }
    const u = a.toString();
    u !== i && await e.saveSnapshotFile(o, u);
  }));
}
const Eg = /(?:toMatchInlineSnapshot|toThrowErrorMatchingInlineSnapshot)\s*\(\s*(?:\/\*[\s\S]*\*\/\s*|\/\/.*(?:[\n\r\u2028\u2029]\s*|[\t\v\f \xA0\u1680\u2000-\u200A\u202F\u205F\u3000\uFEFF]))*\{/;
function vg(e, t, n, r) {
  let o = e.slice(n);
  const s = Eg.exec(o);
  if (!s)
    return !1;
  o = o.slice(s.index);
  let i = og(o);
  if (i === null)
    return !1;
  i += n + s.index;
  const a = n + s.index + s[0].length, u = xg(e, a), c = `, ${nl(r, e, n)}`;
  return u === i ? t.appendLeft(i, c) : t.overwrite(u, i, c), !0;
}
function xg(e, t) {
  let n = 1, r = 0;
  for (; n !== r && t < e.length; ) {
    const o = e[t++];
    o === "{" ? n++ : o === "}" && r++;
  }
  return t;
}
function nl(e, t, n) {
  const r = Sg(t, n), s = t.split(Cs)[r - 1].match(/^\s*/)[0] || "", i = s.includes("	") ? `${s}	` : `${s}  `, a = e.trim().replace(/\\/g, "\\\\").split(/\n/g), u = a.length <= 1, c = "`";
  return u ? `${c}${a.join(`
`).replace(/`/g, "\\`").replace(/\$\{/g, "\\${")}${c}` : `${c}
${a.map((l) => l ? i + l : "").join(`
`).replace(/`/g, "\\`").replace(/\$\{/g, "\\${")}
${s}${c}`;
}
const ya = "toMatchInlineSnapshot", ba = "toThrowErrorMatchingInlineSnapshot";
function $g(e, t) {
  const n = t - ya.length;
  if (e.slice(n, t) === ya)
    return {
      code: e.slice(n),
      index: n
    };
  const r = t - ba.length;
  return e.slice(t - r, t) === ba ? {
    code: e.slice(t - r),
    index: t - r
  } : {
    code: e.slice(t),
    index: t
  };
}
const _g = /(?:toMatchInlineSnapshot|toThrowErrorMatchingInlineSnapshot)\s*\(\s*(?:\/\*[\s\S]*\*\/\s*|\/\/.*(?:[\n\r\u2028\u2029]\s*|[\t\v\f \xA0\u1680\u2000-\u200A\u202F\u205F\u3000\uFEFF]))*[\w$]*(['"`)])/;
function Ig(e, t, n, r) {
  const { code: o, index: s } = $g(e, n), i = _g.exec(o), a = /toMatchInlineSnapshot|toThrowErrorMatchingInlineSnapshot/.exec(o);
  if (!i || i.index !== a?.index)
    return vg(e, t, s, r);
  const u = i[1], c = s + i.index + i[0].length, l = nl(r, e, s);
  if (u === ")")
    return t.appendRight(c - 1, l), !0;
  const d = new RegExp(`(?:^|[^\\\\])${u}`).exec(e.slice(c));
  if (!d)
    return !1;
  const h = c + d.index + d[0].length;
  return t.overwrite(c - 1, h, l), !0;
}
const Cg = /^([^\S\n]*)\S/m;
function wa(e) {
  const t = e.match(Cg);
  if (!t || !t[1])
    return e;
  const n = t[1], r = e.split(/\n/g);
  if (r.length <= 2 || r[0].trim() !== "" || r[r.length - 1].trim() !== "")
    return e;
  for (let o = 1; o < r.length - 1; o++)
    if (r[o] !== "") {
      if (r[o].indexOf(n) !== 0)
        return e;
      r[o] = r[o].substring(n.length);
    }
  return r[r.length - 1] = "", e = r.join(`
`), e;
}
async function Og(e, t) {
  await Promise.all(t.map(async (n) => {
    n.readonly || await e.saveSnapshotFile(n.file, n.snapshot);
  }));
}
var Pr = { exports: {} }, Sa;
function Ag() {
  if (Sa) return Pr.exports;
  Sa = 1;
  /*
   * @version    1.4.0
   * @date       2015-10-26
   * @stability  3 - Stable
   * @author     Lauri Rooden (https://github.com/litejs/natural-compare-lite)
   * @license    MIT License
   */
  var e = function(t, n) {
    var r, o, s = 1, i = 0, a = 0, u = String.alphabet;
    function c(l, f, d) {
      if (d) {
        for (r = f; d = c(l, r), d < 76 && d > 65; ) ++r;
        return +l.slice(f - 1, r);
      }
      return d = u && u.indexOf(l.charAt(f)), d > -1 ? d + 76 : (d = l.charCodeAt(f) || 0, d < 45 || d > 127 ? d : d < 46 ? 65 : d < 48 ? d - 1 : d < 58 ? d + 18 : d < 65 ? d - 11 : d < 91 ? d + 11 : d < 97 ? d - 37 : d < 123 ? d + 5 : d - 63);
    }
    if ((t += "") != (n += "")) {
      for (; s; )
        if (o = c(t, i++), s = c(n, a++), o < 76 && s < 76 && o > 66 && s > 66 && (o = c(t, i, i), s = c(n, a, i = r), a = r), o != s) return o < s ? -1 : 1;
    }
    return 0;
  };
  try {
    Pr.exports = e;
  } catch {
    String.naturalCompare = e;
  }
  return Pr.exports;
}
var Mg = Ag(), Pg = /* @__PURE__ */ dg(Mg);
const Ng = (e, t, n, r, o, s) => {
  const i = e.getMockName(), a = i === "vi.fn()" ? "" : ` ${i}`;
  let u = "";
  if (e.mock.calls.length !== 0) {
    const c = n + t.indent;
    u = ` {${t.spacingOuter}${c}"calls": ${s(e.mock.calls, t, c, r, o)}${t.min ? ", " : ","}${t.spacingOuter}${c}"results": ${s(e.mock.results, t, c, r, o)}${t.min ? "" : ","}${t.spacingOuter}${n}}`;
  }
  return `[MockFunction${a}]${u}`;
}, kg = (e) => e && !!e._isMockFunction, jg = {
  serialize: Ng,
  test: kg
}, { DOMCollection: Rg, DOMElement: Fg, Immutable: Dg, ReactElement: Lg, ReactTestComponent: qg, AsymmetricMatcher: Bg } = Yn;
let xo = [
  qg,
  Lg,
  Fg,
  Rg,
  Dg,
  Bg,
  jg
];
function zg(e) {
  xo = [e].concat(xo);
}
function Wg() {
  return xo;
}
function Jg(e, t) {
  return `${e} ${t}`;
}
function Vg(e) {
  if (!/ \d+$/.test(e))
    throw new Error("Snapshot keys must end with a number.");
  return e.replace(/ \d+$/, "");
}
function Ug(e, t) {
  const n = t.updateSnapshot, r = /* @__PURE__ */ Object.create(null);
  let o = "", s = !1;
  if (e != null)
    try {
      o = e, new Function("exports", o)(r);
    } catch {
    }
  return (n === "all" || n === "new") && o && (s = !0), {
    data: r,
    dirty: s
  };
}
function Xg(e) {
  return e.includes(`
`) ? `
${e}
` : e;
}
function Ta(e) {
  return e.length > 2 && e.startsWith(`
`) && e.endsWith(`
`) ? e.slice(1, -1) : e;
}
const Kg = !0, Yg = !1;
function Gg(e, t = 2, n = {}) {
  return Os(Ve(e, {
    escapeRegex: Kg,
    indent: t,
    plugins: Wg(),
    printFunctionName: Yg,
    ...n
  }));
}
function Hg(e) {
  return e.replace(/`|\\|\$\{/g, "\\$&");
}
function Ea(e) {
  return `\`${Hg(e)}\``;
}
function Os(e) {
  return e.replace(/\r\n|\r/g, `
`);
}
async function Zg(e, t, n) {
  const r = Object.keys(t).sort(Pg).map((a) => `exports[${Ea(a)}] = ${Ea(Os(t[a]))};`), o = `${e.getHeader()}

${r.join(`

`)}
`, s = await e.readSnapshotFile(n);
  s != null && s === o || await e.saveSnapshotFile(n, o);
}
function $o(e = [], t = []) {
  const n = Array.from(e);
  return t.forEach((r, o) => {
    const s = n[o];
    Array.isArray(e[o]) ? n[o] = $o(e[o], r) : Mn(s) ? n[o] = As(e[o], r) : n[o] = r;
  }), n;
}
function As(e, t) {
  if (Mn(e) && Mn(t)) {
    const n = { ...e };
    return Object.keys(t).forEach((r) => {
      Mn(t[r]) && !t[r].$$typeof ? r in e ? n[r] = As(e[r], t[r]) : Object.assign(n, { [r]: t[r] }) : Array.isArray(t[r]) ? n[r] = $o(e[r], t[r]) : Object.assign(n, { [r]: t[r] });
    }), n;
  } else if (Array.isArray(e) && Array.isArray(t))
    return $o(e, t);
  return e;
}
class rl extends Map {
  constructor(t, n) {
    super(n), this.defaultFn = t;
  }
  get(t) {
    return this.has(t) || this.set(t, this.defaultFn(t)), super.get(t);
  }
}
class Vt extends rl {
  constructor() {
    super(() => 0);
  }
  // compat for jest-image-snapshot https://github.com/vitest-dev/vitest/issues/7322
  // `valueOf` and `Snapshot.added` setter allows
  //   snapshotState.added = snapshotState.added + 1
  // to function as
  //   snapshotState.added.total_ = snapshotState.added.total() + 1
  _total;
  valueOf() {
    return this._total = this.total();
  }
  increment(t) {
    typeof this._total < "u" && this._total++, this.set(t, this.get(t) + 1);
  }
  total() {
    if (typeof this._total < "u")
      return this._total;
    let t = 0;
    for (const n of this.values())
      t += n;
    return t;
  }
}
function va(e, t) {
  return e.file === t.file && e.column === t.column && e.line === t.line;
}
class Ms {
  _counters = new Vt();
  _dirty;
  _updateSnapshot;
  _snapshotData;
  _initialData;
  _inlineSnapshots;
  _inlineSnapshotStacks;
  _testIdToKeys = new rl(() => []);
  _rawSnapshots;
  _uncheckedKeys;
  _snapshotFormat;
  _environment;
  _fileExists;
  expand;
  // getter/setter for jest-image-snapshot compat
  // https://github.com/vitest-dev/vitest/issues/7322
  _added = new Vt();
  _matched = new Vt();
  _unmatched = new Vt();
  _updated = new Vt();
  get added() {
    return this._added;
  }
  set added(t) {
    this._added._total = t;
  }
  get matched() {
    return this._matched;
  }
  set matched(t) {
    this._matched._total = t;
  }
  get unmatched() {
    return this._unmatched;
  }
  set unmatched(t) {
    this._unmatched._total = t;
  }
  get updated() {
    return this._updated;
  }
  set updated(t) {
    this._updated._total = t;
  }
  constructor(t, n, r, o) {
    this.testFilePath = t, this.snapshotPath = n;
    const { data: s, dirty: i } = Ug(r, o);
    this._fileExists = r != null, this._initialData = { ...s }, this._snapshotData = { ...s }, this._dirty = i, this._inlineSnapshots = [], this._inlineSnapshotStacks = [], this._rawSnapshots = [], this._uncheckedKeys = new Set(Object.keys(this._snapshotData)), this.expand = o.expand || !1, this._updateSnapshot = o.updateSnapshot, this._snapshotFormat = {
      printBasicPrototype: !1,
      escapeString: !1,
      ...o.snapshotFormat
    }, this._environment = o.snapshotEnvironment;
  }
  static async create(t, n) {
    const r = await n.snapshotEnvironment.resolvePath(t), o = await n.snapshotEnvironment.readSnapshotFile(r);
    return new Ms(t, r, o, n);
  }
  get environment() {
    return this._environment;
  }
  markSnapshotsAsCheckedForTest(t) {
    this._uncheckedKeys.forEach((n) => {
      / \d+$| > /.test(n.slice(t.length)) && this._uncheckedKeys.delete(n);
    });
  }
  clearTest(t) {
    this._inlineSnapshots = this._inlineSnapshots.filter((n) => n.testId !== t), this._inlineSnapshotStacks = this._inlineSnapshotStacks.filter((n) => n.testId !== t);
    for (const n of this._testIdToKeys.get(t)) {
      const r = Vg(n), o = this._counters.get(r);
      o > 0 && ((n in this._snapshotData || n in this._initialData) && (this._snapshotData[n] = this._initialData[n]), this._counters.set(r, o - 1));
    }
    this._testIdToKeys.delete(t), this.added.delete(t), this.updated.delete(t), this.matched.delete(t), this.unmatched.delete(t);
  }
  _inferInlineSnapshotStack(t) {
    const n = t.findIndex((o) => o.method.match(/__VITEST_(RESOLVES|REJECTS)__/));
    if (n !== -1)
      return t[n + 3];
    const r = t.findIndex((o) => o.method.includes("__INLINE_SNAPSHOT__"));
    return r !== -1 ? t[r + 2] : null;
  }
  _addSnapshot(t, n, r) {
    this._dirty = !0, r.stack ? this._inlineSnapshots.push({
      snapshot: n,
      testId: r.testId,
      ...r.stack
    }) : r.rawSnapshot ? this._rawSnapshots.push({
      ...r.rawSnapshot,
      snapshot: n
    }) : this._snapshotData[t] = n;
  }
  async save() {
    const t = Object.keys(this._snapshotData).length, n = this._inlineSnapshots.length, r = this._rawSnapshots.length, o = !t && !n && !r, s = {
      deleted: !1,
      saved: !1
    };
    return (this._dirty || this._uncheckedKeys.size) && !o ? (t && (await Zg(this._environment, this._snapshotData, this.snapshotPath), this._fileExists = !0), n && await Tg(this._environment, this._inlineSnapshots), r && await Og(this._environment, this._rawSnapshots), s.saved = !0) : !t && this._fileExists && (this._updateSnapshot === "all" && (await this._environment.removeSnapshotFile(this.snapshotPath), this._fileExists = !1), s.deleted = !0), s;
  }
  getUncheckedCount() {
    return this._uncheckedKeys.size || 0;
  }
  getUncheckedKeys() {
    return Array.from(this._uncheckedKeys);
  }
  removeUncheckedKeys() {
    this._updateSnapshot === "all" && this._uncheckedKeys.size && (this._dirty = !0, this._uncheckedKeys.forEach((t) => delete this._snapshotData[t]), this._uncheckedKeys.clear());
  }
  match({ testId: t, testName: n, received: r, key: o, inlineSnapshot: s, isInline: i, error: a, rawSnapshot: u }) {
    this._counters.increment(n);
    const c = this._counters.get(n);
    o || (o = Jg(n, c)), this._testIdToKeys.get(t).push(o), i && this._snapshotData[o] !== void 0 || this._uncheckedKeys.delete(o);
    let l = u && typeof r == "string" ? r : Gg(r, void 0, this._snapshotFormat);
    u || (l = Xg(l)), u && u.content && u.content.match(/\r\n/) && !l.match(/\r\n/) && (u.content = Os(u.content));
    const f = i ? s : u ? u.content : this._snapshotData[o], d = u ? f : f?.trim(), h = d === (u ? l : l.trim()), m = f !== void 0, p = i || this._fileExists || u && u.content != null;
    h && !i && !u && (this._snapshotData[o] = l);
    let b;
    if (i) {
      var S, x;
      const A = fg(a || new Error("snapshot"), { ignoreStackEntries: [] }), C = this._inferInlineSnapshotStack(A);
      if (!C)
        throw new Error(`@vitest/snapshot: Couldn't infer stack frame for inline snapshot.
${JSON.stringify(A)}`);
      b = ((S = (x = this.environment).processStackTrace) === null || S === void 0 ? void 0 : S.call(x, C)) || C, b.column--;
      const M = this._inlineSnapshotStacks.filter((j) => va(j, b));
      if (M.length > 0) {
        this._inlineSnapshots = this._inlineSnapshots.filter((P) => !va(P, b));
        const j = M.find((P) => P.snapshot !== l);
        if (j)
          throw Object.assign(new Error("toMatchInlineSnapshot with different snapshots cannot be called at the same location"), {
            actual: l,
            expected: j.snapshot
          });
      }
      this._inlineSnapshotStacks.push({
        ...b,
        testId: t,
        snapshot: l
      });
    }
    return m && this._updateSnapshot === "all" || (!m || !p) && (this._updateSnapshot === "new" || this._updateSnapshot === "all") ? (this._updateSnapshot === "all" ? h ? this.matched.increment(t) : (m ? this.updated.increment(t) : this.added.increment(t), this._addSnapshot(o, l, {
      stack: b,
      testId: t,
      rawSnapshot: u
    })) : (this._addSnapshot(o, l, {
      stack: b,
      testId: t,
      rawSnapshot: u
    }), this.added.increment(t)), {
      actual: "",
      count: c,
      expected: "",
      key: o,
      pass: !0
    }) : h ? (this.matched.increment(t), {
      actual: "",
      count: c,
      expected: "",
      key: o,
      pass: !0
    }) : (this.unmatched.increment(t), {
      actual: u ? l : Ta(l),
      count: c,
      expected: d !== void 0 ? u ? d : Ta(d) : void 0,
      key: o,
      pass: !1
    });
  }
  async pack() {
    const t = {
      filepath: this.testFilePath,
      added: 0,
      fileDeleted: !1,
      matched: 0,
      unchecked: 0,
      uncheckedKeys: [],
      unmatched: 0,
      updated: 0
    }, n = this.getUncheckedCount(), r = this.getUncheckedKeys();
    n && this.removeUncheckedKeys();
    const o = await this.save();
    return t.fileDeleted = o.deleted, t.added = this.added.total(), t.matched = this.matched.total(), t.unmatched = this.unmatched.total(), t.updated = this.updated.total(), t.unchecked = o.deleted ? 0 : n, t.uncheckedKeys = Array.from(r), t;
  }
}
function xa(e, t, n, r) {
  const o = new Error(e);
  return Object.defineProperty(o, "actual", {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }), Object.defineProperty(o, "expected", {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }), Object.defineProperty(o, "diffOptions", { value: { expand: t } }), o;
}
class Qg {
  snapshotStateMap = /* @__PURE__ */ new Map();
  constructor(t = {}) {
    this.options = t;
  }
  async setup(t, n) {
    this.snapshotStateMap.has(t) || this.snapshotStateMap.set(t, await Ms.create(t, n));
  }
  async finish(t) {
    const r = await this.getSnapshotState(t).pack();
    return this.snapshotStateMap.delete(t), r;
  }
  skipTest(t, n) {
    this.getSnapshotState(t).markSnapshotsAsCheckedForTest(n);
  }
  clearTest(t, n) {
    this.getSnapshotState(t).clearTest(n);
  }
  getSnapshotState(t) {
    const n = this.snapshotStateMap.get(t);
    if (!n)
      throw new Error(`The snapshot state for '${t}' is not found. Did you call 'SnapshotClient.setup()'?`);
    return n;
  }
  assert(t) {
    const { filepath: n, name: r, testId: o = r, message: s, isInline: i = !1, properties: a, inlineSnapshot: u, error: c, errorMessage: l, rawSnapshot: f } = t;
    let { received: d } = t;
    if (!n)
      throw new Error("Snapshot cannot be used outside of test");
    const h = this.getSnapshotState(n);
    if (typeof a == "object") {
      if (typeof d != "object" || !d)
        throw new Error("Received value must be an object when the matcher has properties");
      try {
        var m, p;
        if (((m = (p = this.options).isEqual) === null || m === void 0 ? void 0 : m.call(p, d, a)) ?? !1)
          d = As(d, a);
        else
          throw xa("Snapshot properties mismatched", h.expand, d, a);
      } catch (M) {
        throw M.message = l || "Snapshot mismatched", M;
      }
    }
    const b = [r, ...s ? [s] : []].join(" > "), { actual: S, expected: x, key: A, pass: C } = h.match({
      testId: o,
      testName: b,
      received: d,
      isInline: i,
      error: c,
      inlineSnapshot: u,
      rawSnapshot: f
    });
    if (!C)
      throw xa(`Snapshot \`${A || "unknown"}\` mismatched`, h.expand, f ? S : S?.trim(), f ? x : x?.trim());
  }
  async assertRaw(t) {
    if (!t.rawSnapshot)
      throw new Error("Raw snapshot is required");
    const { filepath: n, rawSnapshot: r } = t;
    if (r.content == null) {
      if (!n)
        throw new Error("Snapshot cannot be used outside of test");
      const o = this.getSnapshotState(n);
      t.filepath || (t.filepath = n), r.file = await o.environment.resolveRawPath(n, r.file), r.content = await o.environment.readSnapshotFile(r.file) ?? void 0;
    }
    return this.assert(t);
  }
  clear() {
    this.snapshotStateMap.clear();
  }
}
const Je = Date;
let _o = null;
class ht extends Je {
  constructor(t, n, r, o, s, i, a) {
    super();
    let u;
    switch (arguments.length) {
      case 0:
        _o !== null ? u = new Je(_o.valueOf()) : u = new Je();
        break;
      case 1:
        u = new Je(t);
        break;
      default:
        r = typeof r > "u" ? 1 : r, o = o || 0, s = s || 0, i = i || 0, a = a || 0, u = new Je(t, n, r, o, s, i, a);
        break;
    }
    return Object.setPrototypeOf(u, ht.prototype), u;
  }
}
ht.UTC = Je.UTC;
ht.now = function() {
  return new ht().valueOf();
};
ht.parse = function(e) {
  return Je.parse(e);
};
ht.toString = function() {
  return Je.toString();
};
function ey(e) {
  const t = new Je(e.valueOf());
  if (Number.isNaN(t.getTime())) throw new TypeError(`mockdate: The time set is an invalid date: ${e}`);
  globalThis.Date = ht, _o = t.valueOf();
}
function ty() {
  globalThis.Date = Je;
}
const ny = [
  "matchSnapshot",
  "toMatchSnapshot",
  "toMatchInlineSnapshot",
  "toThrowErrorMatchingSnapshot",
  "toThrowErrorMatchingInlineSnapshot",
  "throws",
  "Throw",
  "throw",
  "toThrow",
  "toThrowError"
];
function ry(e) {
  return function(n, r = {}) {
    const s = pn().config.expect?.poll ?? {}, { interval: i = s.interval ?? 50, timeout: a = s.timeout ?? 1e3, message: u } = r, c = e(null, u).withContext({ poll: !0 });
    n = n.bind(c);
    const l = Se.flag(c, "vitest-test");
    if (!l) throw new Error("expect.poll() must be called inside a test");
    const f = new Proxy(c, { get(d, h, m) {
      const p = Reflect.get(d, h, m);
      if (typeof p != "function") return p instanceof y ? f : p;
      if (h === "assert") return p;
      if (typeof h == "string" && ny.includes(h)) throw new SyntaxError(`expect.poll() is not supported in combination with .${h}(). Use vi.waitFor() if your assertion condition is unstable.`);
      return function(...b) {
        const S = new Error("STACK_TRACE_ERROR"), x = () => new Promise((M, j) => {
          let P, O, I;
          const { setTimeout: D, clearTimeout: _ } = Dt(), N = async () => {
            try {
              Se.flag(c, "_name", h);
              const Q = await n();
              Se.flag(c, "object", Q), M(await p.call(c, ...b)), _(P), _(O);
            } catch (Q) {
              I = Q, Se.flag(c, "_isLastPollAttempt") || (P = D(N, i));
            }
          };
          O = D(() => {
            _(P), Se.flag(c, "_isLastPollAttempt", !0);
            const Q = (U) => {
              j($a(new Error("Matcher did not succeed in time.", { cause: U }), S));
            };
            N().then(() => Q(I)).catch((U) => Q(U));
          }, a), N();
        });
        let A = !1;
        l.onFinished ??= [], l.onFinished.push(() => {
          if (!A) {
            const M = Se.flag(c, "negate") ? "not." : "", P = `expect.${Se.flag(c, "_poll.element") ? "element(locator)" : "poll(assertion)"}.${M}${String(h)}()`, O = new Error(`${P} was not awaited. This assertion is asynchronous and must be awaited; otherwise, it is not executed to avoid unhandled rejections:

await ${P}
`);
            throw $a(O, S);
          }
        });
        let C;
        return {
          then(M, j) {
            return A = !0, (C ||= x()).then(M, j);
          },
          catch(M) {
            return (C ||= x()).catch(M);
          },
          finally(M) {
            return (C ||= x()).finally(M);
          },
          [Symbol.toStringTag]: "Promise"
        };
      };
    } });
    return f;
  };
}
function $a(e, t) {
  return t.stack !== void 0 && (e.stack = t.stack.replace(t.message, e.message)), e;
}
function oy(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Pn = { exports: {} }, sy = Pn.exports, _a;
function iy() {
  return _a || (_a = 1, (function(e, t) {
    (function() {
      (function(n) {
        return typeof oy == "function" ? e.exports = n : chai.use(n);
      })(function(n, r) {
        var o = n.Assertion, s = o.prototype;
        o.addMethod("containSubset", function(a) {
          var u = r.flag(this, "object"), c = n.config.showDiff;
          s.assert.call(
            this,
            i(a, u),
            "expected #{act} to contain subset #{exp}",
            "expected #{act} to not contain subset #{exp}",
            a,
            u,
            c
          );
        }), n.assert.containSubset = function(a, u, c) {
          new n.Assertion(a, c).to.be.containSubset(u);
        };
        function i(a, u) {
          if (a === u)
            return !0;
          if (typeof u != typeof a)
            return !1;
          if (typeof a != "object" || a === null)
            return a === u;
          if (a && !u)
            return !1;
          if (Array.isArray(a)) {
            if (typeof u.length != "number")
              return !1;
            var c = Array.prototype.slice.call(u);
            return a.every(function(l) {
              return c.some(function(f) {
                return i(l, f);
              });
            });
          }
          return a instanceof Date ? u instanceof Date ? a.getTime() === u.getTime() : !1 : Object.keys(a).every(function(l) {
            var f = a[l], d = u[l];
            return typeof f == "object" && f !== null && d !== null ? i(f, d) : typeof f == "function" ? f(d) : d === f;
          });
        }
      });
    }).call(sy);
  })(Pn)), Pn.exports;
}
var ay = iy(), cy = /* @__PURE__ */ wm(ay);
function uy(e, t, n) {
  const r = e.flag(t, "negate") ? "not." : "", o = `${e.flag(t, "_name")}(expected)`, s = e.flag(t, "promise");
  return `expect(actual)${s ? `.${s}` : ""}.${r}${o}`;
}
function ly(e, t, n, r) {
  const o = e;
  if (o && t instanceof Promise) {
    t = t.finally(() => {
      if (!o.promises) return;
      const i = o.promises.indexOf(t);
      i !== -1 && o.promises.splice(i, 1);
    }), o.promises || (o.promises = []), o.promises.push(t);
    let s = !1;
    return o.onFinished ??= [], o.onFinished.push(() => {
      if (!s) {
        const a = (globalThis.__vitest_worker__?.onFilterStackTrace || ((u) => u || ""))(r.stack);
        console.warn([
          `Promise returned by \`${n}\` was not awaited. `,
          "Vitest currently auto-awaits hanging assertions at the end of the test, but this will cause the test to fail in Vitest 3. ",
          `Please remember to await the assertion.
`,
          a
        ].join(""));
      }
    }), {
      then(i, a) {
        return s = !0, t.then(i, a);
      },
      catch(i) {
        return t.catch(i);
      },
      finally(i) {
        return t.finally(i);
      },
      [Symbol.toStringTag]: "Promise"
    };
  }
  return t;
}
let Nr;
function Ut() {
  return Nr || (Nr = new Qg({ isEqual: (e, t) => ne(e, t, [Me, Bt]) })), Nr;
}
function Ia(e, t) {
  if (typeof e != "function") {
    if (!t) throw new Error(`expected must be a function, received ${typeof e}`);
    return e;
  }
  try {
    e();
  } catch (n) {
    return n;
  }
  throw new Error("snapshot function didn't throw");
}
function Xt(e) {
  return {
    filepath: e.file.filepath,
    name: nm(e).slice(1).join(" > "),
    testId: e.id
  };
}
const fy = (e, t) => {
  function n(r, o) {
    const s = t.flag(o, "vitest-test");
    if (!s) throw new Error(`'${r}' cannot be used without test context`);
    return s;
  }
  for (const r of ["matchSnapshot", "toMatchSnapshot"]) t.addMethod(e.Assertion.prototype, r, function(o, s) {
    if (t.flag(this, "_name", r), t.flag(this, "negate")) throw new Error(`${r} cannot be used with "not"`);
    const a = t.flag(this, "object"), u = n(r, this);
    typeof o == "string" && typeof s > "u" && (s = o, o = void 0);
    const c = t.flag(this, "message");
    Ut().assert({
      received: a,
      message: s,
      isInline: !1,
      properties: o,
      errorMessage: c,
      ...Xt(u)
    });
  });
  t.addMethod(e.Assertion.prototype, "toMatchFileSnapshot", function(r, o) {
    if (t.flag(this, "_name", "toMatchFileSnapshot"), t.flag(this, "negate")) throw new Error('toMatchFileSnapshot cannot be used with "not"');
    const i = new Error("resolves"), a = t.flag(this, "object"), u = n("toMatchFileSnapshot", this), c = t.flag(this, "message"), l = Ut().assertRaw({
      received: a,
      message: o,
      isInline: !1,
      rawSnapshot: { file: r },
      errorMessage: c,
      ...Xt(u)
    });
    return ly(u, l, uy(t, this), i);
  }), t.addMethod(e.Assertion.prototype, "toMatchInlineSnapshot", function(o, s, i) {
    if (t.flag(this, "_name", "toMatchInlineSnapshot"), t.flag(this, "negate")) throw new Error('toMatchInlineSnapshot cannot be used with "not"');
    const u = n("toMatchInlineSnapshot", this);
    if (u.each || u.suite?.each) throw new Error("InlineSnapshot cannot be used inside of test.each or describe.each");
    const l = t.flag(this, "object"), f = t.flag(this, "error");
    typeof o == "string" && (i = s, s = o, o = void 0), s && (s = wa(s));
    const d = t.flag(this, "message");
    Ut().assert({
      received: l,
      message: i,
      isInline: !0,
      properties: o,
      inlineSnapshot: s,
      error: f,
      errorMessage: d,
      ...Xt(u)
    });
  }), t.addMethod(e.Assertion.prototype, "toThrowErrorMatchingSnapshot", function(r) {
    if (t.flag(this, "_name", "toThrowErrorMatchingSnapshot"), t.flag(this, "negate")) throw new Error('toThrowErrorMatchingSnapshot cannot be used with "not"');
    const s = t.flag(this, "object"), i = n("toThrowErrorMatchingSnapshot", this), a = t.flag(this, "promise"), u = t.flag(this, "message");
    Ut().assert({
      received: Ia(s, a),
      message: r,
      errorMessage: u,
      ...Xt(i)
    });
  }), t.addMethod(e.Assertion.prototype, "toThrowErrorMatchingInlineSnapshot", function(o, s) {
    if (t.flag(this, "negate")) throw new Error('toThrowErrorMatchingInlineSnapshot cannot be used with "not"');
    const a = n("toThrowErrorMatchingInlineSnapshot", this);
    if (a.each || a.suite?.each) throw new Error("InlineSnapshot cannot be used inside of test.each or describe.each");
    const c = t.flag(this, "object"), l = t.flag(this, "error"), f = t.flag(this, "promise"), d = t.flag(this, "message");
    o && (o = wa(o)), Ut().assert({
      received: Ia(c, f),
      message: s,
      inlineSnapshot: o,
      isInline: !0,
      error: l,
      errorMessage: d,
      ...Xt(a)
    });
  }), t.addMethod(e.expect, "addSnapshotSerializer", zg);
};
pt(pp);
pt(lp);
pt(cy);
pt(fy);
pt(up);
function hy(e) {
  const t = (s, i) => {
    const { assertionCalls: a } = Zt(t);
    return $r({ assertionCalls: a + 1 }, t), wt(s, i);
  };
  Object.assign(t, wt), Object.assign(t, globalThis[ws]), t.getState = () => Zt(t), t.setState = (s) => $r(s, t);
  const n = Zt(globalThis[ar]) || {};
  $r({
    ...n,
    assertionCalls: 0,
    isExpectingAssertions: !1,
    isExpectingAssertionsError: null,
    expectedAssertionsNumber: null,
    expectedAssertionsNumberErrorGen: null,
    environment: gm(),
    get testPath() {
      return pn().filepath;
    },
    currentTestName: n.currentTestName
  }, t), t.extend = (s) => wt.extend(t, s), t.addEqualityTesters = (s) => Vd(s), t.soft = (...s) => t(...s).withContext({ soft: !0 }), t.poll = ry(t), t.unreachable = (s) => {
    g.fail(`expected${s ? ` "${s}" ` : " "}not to be reached`);
  };
  function r(s) {
    const i = () => new Error(`expected number of assertions to be ${s}, but got ${t.getState().assertionCalls}`);
    Error.captureStackTrace && Error.captureStackTrace(i(), r), t.setState({
      expectedAssertionsNumber: s,
      expectedAssertionsNumberErrorGen: i
    });
  }
  function o() {
    const s = new Error("expected any number of assertion, but got none");
    Error.captureStackTrace && Error.captureStackTrace(s, o), t.setState({
      isExpectingAssertions: !0,
      isExpectingAssertionsError: s
    });
  }
  return Se.addMethod(t, "assertions", r), Se.addMethod(t, "hasAssertions", o), t.extend(Fd), t;
}
const dy = hy();
Object.defineProperty(globalThis, ar, {
  value: dy,
  writable: !0,
  configurable: !0
});
var $t = {}, kr, Ca;
function py() {
  if (Ca) return kr;
  Ca = 1;
  var e;
  return typeof vo < "u" ? e = vo : typeof window < "u" ? e = window : e = self, kr = e, kr;
}
var jr, Oa;
function my() {
  if (Oa) return jr;
  Oa = 1;
  let e;
  try {
    ({}).__proto__, e = !1;
  } catch {
    e = !0;
  }
  return jr = e, jr;
}
var Rr, Aa;
function zt() {
  if (Aa) return Rr;
  Aa = 1;
  var e = Function.call, t = my(), n = [
    // ignore size because it throws from Map
    "size",
    "caller",
    "callee",
    "arguments"
  ];
  return t && n.push("__proto__"), Rr = function(o) {
    return Object.getOwnPropertyNames(o).reduce(
      function(s, i) {
        return n.includes(i) || typeof o[i] != "function" || (s[i] = e.bind(o[i])), s;
      },
      /* @__PURE__ */ Object.create(null)
    );
  }, Rr;
}
var Fr, Ma;
function Un() {
  if (Ma) return Fr;
  Ma = 1;
  var e = zt();
  return Fr = e(Array.prototype), Fr;
}
var Dr, Pa;
function gy() {
  if (Pa) return Dr;
  Pa = 1;
  var e = Un().every;
  function t(o, s) {
    return o[s.id] === void 0 && (o[s.id] = 0), o[s.id] < s.callCount;
  }
  function n(o, s, i, a) {
    var u = !0;
    return i !== a.length - 1 && (u = s.calledBefore(a[i + 1])), t(o, s) && u ? (o[s.id] += 1, !0) : !1;
  }
  function r(o) {
    var s = {}, i = arguments.length > 1 ? arguments : o;
    return e(i, n.bind(null, s));
  }
  return Dr = r, Dr;
}
var Lr, Na;
function yy() {
  if (Na) return Lr;
  Na = 1;
  function e(t) {
    return t.constructor && t.constructor.name || null;
  }
  return Lr = e, Lr;
}
var qr = {}, ka;
function by() {
  return ka || (ka = 1, (function(e) {
    e.wrap = function(t, n) {
      var r = function() {
        return e.printWarning(n), t.apply(this, arguments);
      };
      return t.prototype && (r.prototype = t.prototype), r;
    }, e.defaultMsg = function(t, n) {
      return `${t}.${n} is deprecated and will be removed from the public API in a future version of ${t}.`;
    }, e.printWarning = function(t) {
      typeof process == "object" && process.emitWarning ? process.emitWarning(t) : console.info ? console.info(t) : console.log(t);
    };
  })(qr)), qr;
}
var Br, ja;
function wy() {
  return ja || (ja = 1, Br = function(t, n) {
    var r = !0;
    try {
      t.forEach(function() {
        if (!n.apply(this, arguments))
          throw new Error();
      });
    } catch {
      r = !1;
    }
    return r;
  }), Br;
}
var zr, Ra;
function Sy() {
  return Ra || (Ra = 1, zr = function(t) {
    if (!t)
      return "";
    try {
      return t.displayName || t.name || // Use function decomposition as a last resort to get function
      // name. Does not rely on function decomposition to work - if it
      // doesn't debugging will be slightly less informative
      // (i.e. toString will say 'spy' rather than 'myFunc').
      (String(t).match(/function ([^\s(]+)/) || [])[1];
    } catch {
      return "";
    }
  }), zr;
}
var Wr, Fa;
function Ty() {
  if (Fa) return Wr;
  Fa = 1;
  var e = Un().sort, t = Un().slice;
  function n(o, s) {
    var i = o.getCall(0), a = s.getCall(0), u = i && i.callId || -1, c = a && a.callId || -1;
    return u < c ? -1 : 1;
  }
  function r(o) {
    return e(t(o), n);
  }
  return Wr = r, Wr;
}
var Jr, Da;
function Ey() {
  if (Da) return Jr;
  Da = 1;
  var e = zt();
  return Jr = e(Function.prototype), Jr;
}
var Vr, La;
function vy() {
  if (La) return Vr;
  La = 1;
  var e = zt();
  return Vr = e(Map.prototype), Vr;
}
var Ur, qa;
function xy() {
  if (qa) return Ur;
  qa = 1;
  var e = zt();
  return Ur = e(Object.prototype), Ur;
}
var Xr, Ba;
function $y() {
  if (Ba) return Xr;
  Ba = 1;
  var e = zt();
  return Xr = e(Set.prototype), Xr;
}
var Kr, za;
function _y() {
  if (za) return Kr;
  za = 1;
  var e = zt();
  return Kr = e(String.prototype), Kr;
}
var Yr, Wa;
function Iy() {
  return Wa || (Wa = 1, Yr = {
    array: Un(),
    function: Ey(),
    map: vy(),
    object: xy(),
    set: $y(),
    string: _y()
  }), Yr;
}
var Nn = { exports: {} }, Cy = Nn.exports, Ja;
function Oy() {
  return Ja || (Ja = 1, (function(e, t) {
    (function(n, r) {
      e.exports = r();
    })(Cy, (function() {
      var n = typeof Promise == "function", r = typeof self == "object" ? self : vo, o = typeof Symbol < "u", s = typeof Map < "u", i = typeof Set < "u", a = typeof WeakMap < "u", u = typeof WeakSet < "u", c = typeof DataView < "u", l = o && typeof Symbol.iterator < "u", f = o && typeof Symbol.toStringTag < "u", d = i && typeof Set.prototype.entries == "function", h = s && typeof Map.prototype.entries == "function", m = d && Object.getPrototypeOf((/* @__PURE__ */ new Set()).entries()), p = h && Object.getPrototypeOf((/* @__PURE__ */ new Map()).entries()), b = l && typeof Array.prototype[Symbol.iterator] == "function", S = b && Object.getPrototypeOf([][Symbol.iterator]()), x = l && typeof String.prototype[Symbol.iterator] == "function", A = x && Object.getPrototypeOf(""[Symbol.iterator]()), C = 8, M = -1;
      function j(P) {
        var O = typeof P;
        if (O !== "object")
          return O;
        if (P === null)
          return "null";
        if (P === r)
          return "global";
        if (Array.isArray(P) && (f === !1 || !(Symbol.toStringTag in P)))
          return "Array";
        if (typeof window == "object" && window !== null) {
          if (typeof window.location == "object" && P === window.location)
            return "Location";
          if (typeof window.document == "object" && P === window.document)
            return "Document";
          if (typeof window.navigator == "object") {
            if (typeof window.navigator.mimeTypes == "object" && P === window.navigator.mimeTypes)
              return "MimeTypeArray";
            if (typeof window.navigator.plugins == "object" && P === window.navigator.plugins)
              return "PluginArray";
          }
          if ((typeof window.HTMLElement == "function" || typeof window.HTMLElement == "object") && P instanceof window.HTMLElement) {
            if (P.tagName === "BLOCKQUOTE")
              return "HTMLQuoteElement";
            if (P.tagName === "TD")
              return "HTMLTableDataCellElement";
            if (P.tagName === "TH")
              return "HTMLTableHeaderCellElement";
          }
        }
        var I = f && P[Symbol.toStringTag];
        if (typeof I == "string")
          return I;
        var D = Object.getPrototypeOf(P);
        return D === RegExp.prototype ? "RegExp" : D === Date.prototype ? "Date" : n && D === Promise.prototype ? "Promise" : i && D === Set.prototype ? "Set" : s && D === Map.prototype ? "Map" : u && D === WeakSet.prototype ? "WeakSet" : a && D === WeakMap.prototype ? "WeakMap" : c && D === DataView.prototype ? "DataView" : s && D === p ? "Map Iterator" : i && D === m ? "Set Iterator" : b && D === S ? "Array Iterator" : x && D === A ? "String Iterator" : D === null ? "Object" : Object.prototype.toString.call(P).slice(C, M);
      }
      return j;
    }));
  })(Nn)), Nn.exports;
}
var Gr, Va;
function Ay() {
  if (Va) return Gr;
  Va = 1;
  var e = Oy();
  return Gr = function(n) {
    return e(n).toLowerCase();
  }, Gr;
}
var Hr, Ua;
function My() {
  if (Ua) return Hr;
  Ua = 1;
  function e(t) {
    return t && t.toString ? t.toString() : String(t);
  }
  return Hr = e, Hr;
}
var Zr, Xa;
function Py() {
  return Xa || (Xa = 1, Zr = {
    global: py(),
    calledInOrder: gy(),
    className: yy(),
    deprecated: by(),
    every: wy(),
    functionName: Sy(),
    orderByFirstCall: Ty(),
    prototypes: Iy(),
    typeOf: Ay(),
    valueToString: My()
  }), Zr;
}
var Ka;
function Ny() {
  if (Ka) return $t;
  Ka = 1;
  const e = Py().global;
  let t, n;
  if (typeof __vitest_required__ < "u") {
    try {
      t = __vitest_required__.timers;
    } catch {
    }
    try {
      n = __vitest_required__.timersPromises;
    } catch {
    }
  }
  function r(s) {
    const i = Math.pow(2, 31) - 1, a = 1e12, u = function() {
    }, c = function() {
      return [];
    }, l = {};
    let f, d = !1;
    s.setTimeout && (l.setTimeout = !0, f = s.setTimeout(u, 0), d = typeof f == "object"), l.clearTimeout = !!s.clearTimeout, l.setInterval = !!s.setInterval, l.clearInterval = !!s.clearInterval, l.hrtime = s.process && typeof s.process.hrtime == "function", l.hrtimeBigint = l.hrtime && typeof s.process.hrtime.bigint == "function", l.nextTick = s.process && typeof s.process.nextTick == "function";
    const h = s.process && s.__vitest_required__ && s.__vitest_required__.util.promisify;
    l.performance = s.performance && typeof s.performance.now == "function";
    const m = s.Performance && (typeof s.Performance).match(/^(function|object)$/), p = s.performance && s.performance.constructor && s.performance.constructor.prototype;
    l.queueMicrotask = s.hasOwnProperty("queueMicrotask"), l.requestAnimationFrame = s.requestAnimationFrame && typeof s.requestAnimationFrame == "function", l.cancelAnimationFrame = s.cancelAnimationFrame && typeof s.cancelAnimationFrame == "function", l.requestIdleCallback = s.requestIdleCallback && typeof s.requestIdleCallback == "function", l.cancelIdleCallbackPresent = s.cancelIdleCallback && typeof s.cancelIdleCallback == "function", l.setImmediate = s.setImmediate && typeof s.setImmediate == "function", l.clearImmediate = s.clearImmediate && typeof s.clearImmediate == "function", l.Intl = s.Intl && typeof s.Intl == "object", s.clearTimeout && s.clearTimeout(f);
    const b = s.Date, S = l.Intl ? Object.defineProperties(
      /* @__PURE__ */ Object.create(null),
      Object.getOwnPropertyDescriptors(s.Intl)
    ) : void 0;
    let x = a;
    if (b === void 0)
      throw new Error(
        "The global scope doesn't have a `Date` object (see https://github.com/sinonjs/sinon/issues/1852#issuecomment-419622780)"
      );
    l.Date = !0;
    class A {
      constructor($, k, B, w) {
        this.name = $, this.entryType = k, this.startTime = B, this.duration = w;
      }
      toJSON() {
        return JSON.stringify({ ...this });
      }
    }
    function C(E) {
      return Number.isFinite ? Number.isFinite(E) : isFinite(E);
    }
    let M = !1;
    function j(E, $) {
      E.loopLimit && $ === E.loopLimit - 1 && (M = !0);
    }
    function P() {
      M = !1;
    }
    function O(E) {
      if (!E)
        return 0;
      const $ = E.split(":"), k = $.length;
      let B = k, w = 0, X;
      if (k > 3 || !/^(\d\d:){0,2}\d\d?$/.test(E))
        throw new Error(
          "tick only understands numbers, 'm:s' and 'h:m:s'. Each part must be two digits"
        );
      for (; B--; ) {
        if (X = parseInt($[B], 10), X >= 60)
          throw new Error(`Invalid time ${E}`);
        w += X * Math.pow(60, k - B - 1);
      }
      return w * 1e3;
    }
    function I(E) {
      const k = E * 1e6 % 1e6, B = k < 0 ? k + 1e6 : k;
      return Math.floor(B);
    }
    function D(E) {
      if (!E)
        return 0;
      if (typeof E.getTime == "function")
        return E.getTime();
      if (typeof E == "number")
        return E;
      throw new TypeError("now should be milliseconds since UNIX epoch");
    }
    function _(E, $, k) {
      return k && k.callAt >= E && k.callAt <= $;
    }
    function N(E, $) {
      const k = new Error(
        `Aborting after running ${E.loopLimit} timers, assuming an infinite loop!`
      );
      if (!$.error)
        return k;
      const B = /target\.*[<|(|[].*?[>|\]|)]\s*/;
      let w = new RegExp(
        String(Object.keys(E).join("|"))
      );
      d && (w = new RegExp(
        `\\s+at (Object\\.)?(?:${Object.keys(E).join("|")})\\s+`
      ));
      let X = -1;
      $.error.stack.split(`
`).some(function(H, Z) {
        return H.match(B) ? (X = Z, !0) : H.match(w) ? (X = Z, !1) : X >= 0;
      });
      const te = `${k}
${$.type || "Microtask"} - ${$.func.name || "anonymous"}
${$.error.stack.split(`
`).slice(X + 1).join(`
`)}`;
      try {
        Object.defineProperty(k, "stack", {
          value: te
        });
      } catch {
      }
      return k;
    }
    function Q() {
      class E extends b {
        /**
         * @param {number} year
         * @param {number} month
         * @param {number} date
         * @param {number} hour
         * @param {number} minute
         * @param {number} second
         * @param {number} ms
         * @returns void
         */
        // eslint-disable-next-line no-unused-vars
        constructor(B, w, X, te, H, Z, V) {
          arguments.length === 0 ? super(E.clock.now) : super(...arguments), Object.defineProperty(this, "constructor", {
            value: b,
            enumerable: !1
          });
        }
        static [Symbol.hasInstance](B) {
          return B instanceof b;
        }
      }
      return E.isFake = !0, b.now && (E.now = function() {
        return E.clock.now;
      }), b.toSource && (E.toSource = function() {
        return b.toSource();
      }), E.toString = function() {
        return b.toString();
      }, new Proxy(E, {
        // handler for [[Call]] invocations (i.e. not using `new`)
        apply() {
          if (this instanceof E)
            throw new TypeError(
              "A Proxy should only capture `new` calls with the `construct` handler. This is not supposed to be possible, so check the logic."
            );
          return new b(E.clock.now).toString();
        }
      });
    }
    function U() {
      const E = {};
      return Object.getOwnPropertyNames(S).forEach(
        ($) => E[$] = S[$]
      ), E.DateTimeFormat = function(...$) {
        const k = new S.DateTimeFormat(...$), B = {};
        return ["formatRange", "formatRangeToParts", "resolvedOptions"].forEach(
          (w) => {
            B[w] = k[w].bind(k);
          }
        ), ["format", "formatToParts"].forEach((w) => {
          B[w] = function(X) {
            return k[w](X || E.clock.now);
          };
        }), B;
      }, E.DateTimeFormat.prototype = Object.create(
        S.DateTimeFormat.prototype
      ), E.DateTimeFormat.supportedLocalesOf = S.DateTimeFormat.supportedLocalesOf, E;
    }
    function J(E, $) {
      E.jobs || (E.jobs = []), E.jobs.push($);
    }
    function R(E) {
      if (E.jobs) {
        for (let $ = 0; $ < E.jobs.length; $++) {
          const k = E.jobs[$];
          if (k.func.apply(null, k.args), j(E, $), E.loopLimit && $ > E.loopLimit)
            throw N(E, k);
        }
        P(), E.jobs = [];
      }
    }
    function L(E, $) {
      if ($.func === void 0)
        throw new Error("Callback must be provided to timer calls");
      if (d && typeof $.func != "function")
        throw new TypeError(
          `[ERR_INVALID_CALLBACK]: Callback must be a function. Received ${$.func} of type ${typeof $.func}`
        );
      if (M && ($.error = new Error()), $.type = $.immediate ? "Immediate" : "Timeout", $.hasOwnProperty("delay") && (typeof $.delay != "number" && ($.delay = parseInt($.delay, 10)), C($.delay) || ($.delay = 0), $.delay = $.delay > i ? 1 : $.delay, $.delay = Math.max(0, $.delay)), $.hasOwnProperty("interval") && ($.type = "Interval", $.interval = $.interval > i ? 1 : $.interval), $.hasOwnProperty("animation") && ($.type = "AnimationFrame", $.animation = !0), $.hasOwnProperty("idleCallback") && ($.type = "IdleCallback", $.idleCallback = !0), E.timers || (E.timers = {}), $.id = x++, $.createdAt = E.now, $.callAt = E.now + (parseInt($.delay) || (E.duringTick ? 1 : 0)), E.timers[$.id] = $, d) {
        const k = {
          refed: !0,
          ref: function() {
            return this.refed = !0, k;
          },
          unref: function() {
            return this.refed = !1, k;
          },
          hasRef: function() {
            return this.refed;
          },
          refresh: function() {
            return $.callAt = E.now + (parseInt($.delay) || (E.duringTick ? 1 : 0)), E.timers[$.id] = $, k;
          },
          [Symbol.toPrimitive]: function() {
            return $.id;
          }
        };
        return k;
      }
      return $.id;
    }
    function q(E, $) {
      if (E.callAt < $.callAt)
        return -1;
      if (E.callAt > $.callAt)
        return 1;
      if (E.immediate && !$.immediate)
        return -1;
      if (!E.immediate && $.immediate)
        return 1;
      if (E.createdAt < $.createdAt)
        return -1;
      if (E.createdAt > $.createdAt)
        return 1;
      if (E.id < $.id)
        return -1;
      if (E.id > $.id)
        return 1;
    }
    function Y(E, $, k) {
      const B = E.timers;
      let w = null, X, te;
      for (X in B)
        B.hasOwnProperty(X) && (te = _($, k, B[X]), te && (!w || q(w, B[X]) === 1) && (w = B[X]));
      return w;
    }
    function me(E) {
      const $ = E.timers;
      let k = null, B;
      for (B in $)
        $.hasOwnProperty(B) && (!k || q(k, $[B]) === 1) && (k = $[B]);
      return k;
    }
    function Ce(E) {
      const $ = E.timers;
      let k = null, B;
      for (B in $)
        $.hasOwnProperty(B) && (!k || q(k, $[B]) === -1) && (k = $[B]);
      return k;
    }
    function we(E, $) {
      if (typeof $.interval == "number" ? E.timers[$.id].callAt += $.interval : delete E.timers[$.id], typeof $.func == "function")
        $.func.apply(null, $.args);
      else {
        const k = eval;
        (function() {
          k($.func);
        })();
      }
    }
    function Ee(E) {
      return E === "IdleCallback" || E === "AnimationFrame" ? `cancel${E}` : `clear${E}`;
    }
    function De(E) {
      return E === "IdleCallback" || E === "AnimationFrame" ? `request${E}` : `set${E}`;
    }
    function Ie() {
      let E = 0;
      return function($) {
        !E++ && console.warn($);
      };
    }
    const ve = Ie();
    function xe(E, $, k) {
      if (!$)
        return;
      E.timers || (E.timers = {});
      const B = Number($);
      if (Number.isNaN(B) || B < a) {
        const w = Ee(k);
        if (E.shouldClearNativeTimers === !0) {
          const X = E[`_${w}`];
          return typeof X == "function" ? X($) : void 0;
        }
        ve(
          `FakeTimers: ${w} was invoked to clear a native timer instead of one created by this library.
To automatically clean-up native timers, use \`shouldClearNativeTimers\`.`
        );
      }
      if (E.timers.hasOwnProperty(B)) {
        const w = E.timers[B];
        if (w.type === k || w.type === "Timeout" && k === "Interval" || w.type === "Interval" && k === "Timeout")
          delete E.timers[B];
        else {
          const X = Ee(k), te = De(w.type);
          throw new Error(
            `Cannot clear timer: timer created with ${te}() but cleared with ${X}()`
          );
        }
      }
    }
    function nt(E, $) {
      let k, B, w;
      const X = "_hrtime", te = "_nextTick";
      for (B = 0, w = E.methods.length; B < w; B++) {
        if (k = E.methods[B], k === "hrtime" && s.process)
          s.process.hrtime = E[X];
        else if (k === "nextTick" && s.process)
          s.process.nextTick = E[te];
        else if (k === "performance") {
          const H = Object.getOwnPropertyDescriptor(
            E,
            `_${k}`
          );
          H && H.get && !H.set ? Object.defineProperty(
            s,
            k,
            H
          ) : H.configurable && (s[k] = E[`_${k}`]);
        } else if (s[k] && s[k].hadOwnProperty)
          s[k] = E[`_${k}`];
        else
          try {
            delete s[k];
          } catch {
          }
        if (E.timersModuleMethods !== void 0)
          for (let H = 0; H < E.timersModuleMethods.length; H++) {
            const Z = E.timersModuleMethods[H];
            t[Z.methodName] = Z.original;
          }
        if (E.timersPromisesModuleMethods !== void 0)
          for (let H = 0; H < E.timersPromisesModuleMethods.length; H++) {
            const Z = E.timersPromisesModuleMethods[H];
            n[Z.methodName] = Z.original;
          }
      }
      $.shouldAdvanceTime === !0 && s.clearInterval(E.attachedInterval), E.methods = [];
      for (const [H, Z] of E.abortListenerMap.entries())
        Z.removeEventListener("abort", H), E.abortListenerMap.delete(H);
      return E.timers ? Object.keys(E.timers).map(function(Z) {
        return E.timers[Z];
      }) : [];
    }
    function Ne(E, $, k) {
      if (k[$].hadOwnProperty = Object.prototype.hasOwnProperty.call(
        E,
        $
      ), k[`_${$}`] = E[$], $ === "Date")
        E[$] = k[$];
      else if ($ === "Intl")
        E[$] = k[$];
      else if ($ === "performance") {
        const B = Object.getOwnPropertyDescriptor(
          E,
          $
        );
        if (B && B.get && !B.set) {
          Object.defineProperty(
            k,
            `_${$}`,
            B
          );
          const w = Object.getOwnPropertyDescriptor(
            k,
            $
          );
          Object.defineProperty(E, $, w);
        } else
          E[$] = k[$];
      } else
        E[$] = function() {
          return k[$].apply(k, arguments);
        }, Object.defineProperties(
          E[$],
          Object.getOwnPropertyDescriptors(k[$])
        );
      E[$].clock = k;
    }
    function mt(E, $) {
      E.tick($);
    }
    const ge = {
      setTimeout: s.setTimeout,
      clearTimeout: s.clearTimeout,
      setInterval: s.setInterval,
      clearInterval: s.clearInterval,
      Date: s.Date
    };
    l.setImmediate && (ge.setImmediate = s.setImmediate), l.clearImmediate && (ge.clearImmediate = s.clearImmediate), l.hrtime && (ge.hrtime = s.process.hrtime), l.nextTick && (ge.nextTick = s.process.nextTick), l.performance && (ge.performance = s.performance), l.requestAnimationFrame && (ge.requestAnimationFrame = s.requestAnimationFrame), l.queueMicrotask && (ge.queueMicrotask = s.queueMicrotask), l.cancelAnimationFrame && (ge.cancelAnimationFrame = s.cancelAnimationFrame), l.requestIdleCallback && (ge.requestIdleCallback = s.requestIdleCallback), l.cancelIdleCallback && (ge.cancelIdleCallback = s.cancelIdleCallback), l.Intl && (ge.Intl = S);
    const Le = s.setImmediate || s.setTimeout;
    function mn(E, $) {
      E = Math.floor(D(E)), $ = $ || 1e3;
      let k = 0;
      const B = [0, 0], w = {
        now: E,
        Date: Q(),
        loopLimit: $
      };
      w.Date.clock = w;
      function X() {
        return 16 - (w.now - E) % 16;
      }
      function te(V) {
        const F = w.now - B[0] - E, z = Math.floor(F / 1e3), K = (F - z * 1e3) * 1e6 + k - B[1];
        if (Array.isArray(V)) {
          if (V[1] > 1e9)
            throw new TypeError(
              "Number of nanoseconds can't exceed a billion"
            );
          const ie = V[0];
          let le = K - V[1], Ze = z - ie;
          return le < 0 && (le += 1e9, Ze -= 1), [Ze, le];
        }
        return [z, K];
      }
      function H() {
        const V = te();
        return V[0] * 1e3 + V[1] / 1e6;
      }
      l.hrtimeBigint && (te.bigint = function() {
        const V = te();
        return BigInt(V[0]) * BigInt(1e9) + BigInt(V[1]);
      }), l.Intl && (w.Intl = U(), w.Intl.clock = w), w.requestIdleCallback = function(F, z) {
        let K = 0;
        w.countTimers() > 0 && (K = 50);
        const ie = L(w, {
          func: F,
          args: Array.prototype.slice.call(arguments, 2),
          delay: typeof z > "u" ? K : Math.min(z, K),
          idleCallback: !0
        });
        return Number(ie);
      }, w.cancelIdleCallback = function(F) {
        return xe(w, F, "IdleCallback");
      }, w.setTimeout = function(F, z) {
        return L(w, {
          func: F,
          args: Array.prototype.slice.call(arguments, 2),
          delay: z
        });
      }, typeof s.Promise < "u" && h && (w.setTimeout[h.custom] = function(F, z) {
        return new s.Promise(function(ie) {
          L(w, {
            func: ie,
            args: [z],
            delay: F
          });
        });
      }), w.clearTimeout = function(F) {
        return xe(w, F, "Timeout");
      }, w.nextTick = function(F) {
        return J(w, {
          func: F,
          args: Array.prototype.slice.call(arguments, 1),
          error: M ? new Error() : null
        });
      }, w.queueMicrotask = function(F) {
        return w.nextTick(F);
      }, w.setInterval = function(F, z) {
        return z = parseInt(z, 10), L(w, {
          func: F,
          args: Array.prototype.slice.call(arguments, 2),
          delay: z,
          interval: z
        });
      }, w.clearInterval = function(F) {
        return xe(w, F, "Interval");
      }, l.setImmediate && (w.setImmediate = function(F) {
        return L(w, {
          func: F,
          args: Array.prototype.slice.call(arguments, 1),
          immediate: !0
        });
      }, typeof s.Promise < "u" && h && (w.setImmediate[h.custom] = function(F) {
        return new s.Promise(
          function(K) {
            L(w, {
              func: K,
              args: [F],
              immediate: !0
            });
          }
        );
      }), w.clearImmediate = function(F) {
        return xe(w, F, "Immediate");
      }), w.countTimers = function() {
        return Object.keys(w.timers || {}).length + (w.jobs || []).length;
      }, w.requestAnimationFrame = function(F) {
        const z = L(w, {
          func: F,
          delay: X(),
          get args() {
            return [H()];
          },
          animation: !0
        });
        return Number(z);
      }, w.cancelAnimationFrame = function(F) {
        return xe(w, F, "AnimationFrame");
      }, w.runMicrotasks = function() {
        R(w);
      };
      function Z(V, F, z, K) {
        const ie = typeof V == "number" ? V : O(V), le = Math.floor(ie), Ze = I(ie);
        let qe = k + Ze, ye = w.now + le;
        if (ie < 0)
          throw new TypeError("Negative ticks are not supported");
        qe >= 1e6 && (ye += 1, qe -= 1e6), k = qe;
        let Be = w.now, gt = w.now, ze, rt, Oe, Ps, fr, hr;
        w.duringTick = !0, Oe = w.now, R(w), Oe !== w.now && (Be += w.now - Oe, ye += w.now - Oe);
        function Ns() {
          for (ze = Y(w, Be, ye); ze && Be <= ye; ) {
            if (w.timers[ze.id]) {
              Be = ze.callAt, w.now = ze.callAt, Oe = w.now;
              try {
                R(w), we(w, ze);
              } catch (Wt) {
                rt = rt || Wt;
              }
              if (F) {
                Le(Ps);
                return;
              }
              fr();
            }
            hr();
          }
          if (Oe = w.now, R(w), Oe !== w.now && (Be += w.now - Oe, ye += w.now - Oe), w.duringTick = !1, ze = Y(w, Be, ye), ze)
            try {
              w.tick(ye - w.now);
            } catch (Wt) {
              rt = rt || Wt;
            }
          else
            w.now = ye, k = qe;
          if (rt)
            throw rt;
          if (F)
            z(w.now);
          else
            return w.now;
        }
        return Ps = F && function() {
          try {
            fr(), hr(), Ns();
          } catch (Wt) {
            K(Wt);
          }
        }, fr = function() {
          Oe !== w.now && (Be += w.now - Oe, ye += w.now - Oe, gt += w.now - Oe);
        }, hr = function() {
          ze = Y(w, gt, ye), gt = Be;
        }, Ns();
      }
      return w.tick = function(F) {
        return Z(F, !1);
      }, typeof s.Promise < "u" && (w.tickAsync = function(F) {
        return new s.Promise(function(z, K) {
          Le(function() {
            try {
              Z(F, !0, z, K);
            } catch (ie) {
              K(ie);
            }
          });
        });
      }), w.next = function() {
        R(w);
        const F = me(w);
        if (!F)
          return w.now;
        w.duringTick = !0;
        try {
          return w.now = F.callAt, we(w, F), R(w), w.now;
        } finally {
          w.duringTick = !1;
        }
      }, typeof s.Promise < "u" && (w.nextAsync = function() {
        return new s.Promise(function(F, z) {
          Le(function() {
            try {
              const K = me(w);
              if (!K) {
                F(w.now);
                return;
              }
              let ie;
              w.duringTick = !0, w.now = K.callAt;
              try {
                we(w, K);
              } catch (le) {
                ie = le;
              }
              w.duringTick = !1, Le(function() {
                ie ? z(ie) : F(w.now);
              });
            } catch (K) {
              z(K);
            }
          });
        });
      }), w.runAll = function() {
        let F, z;
        for (R(w), z = 0; z < w.loopLimit; z++) {
          if (!w.timers || (F = Object.keys(w.timers).length, F === 0))
            return P(), w.now;
          w.next(), j(w, z);
        }
        const K = me(w);
        throw N(w, K);
      }, w.runToFrame = function() {
        return w.tick(X());
      }, typeof s.Promise < "u" && (w.runAllAsync = function() {
        return new s.Promise(function(F, z) {
          let K = 0;
          function ie() {
            Le(function() {
              try {
                R(w);
                let le;
                if (K < w.loopLimit) {
                  if (!w.timers) {
                    P(), F(w.now);
                    return;
                  }
                  if (le = Object.keys(
                    w.timers
                  ).length, le === 0) {
                    P(), F(w.now);
                    return;
                  }
                  w.next(), K++, ie(), j(w, K);
                  return;
                }
                const Ze = me(w);
                z(N(w, Ze));
              } catch (le) {
                z(le);
              }
            });
          }
          ie();
        });
      }), w.runToLast = function() {
        const F = Ce(w);
        return F ? w.tick(F.callAt - w.now) : (R(w), w.now);
      }, typeof s.Promise < "u" && (w.runToLastAsync = function() {
        return new s.Promise(function(F, z) {
          Le(function() {
            try {
              const K = Ce(w);
              K || (R(w), F(w.now)), F(w.tickAsync(K.callAt - w.now));
            } catch (K) {
              z(K);
            }
          });
        });
      }), w.reset = function() {
        k = 0, w.timers = {}, w.jobs = [], w.now = E;
      }, w.setSystemTime = function(F) {
        const z = D(F), K = z - w.now;
        let ie, le;
        B[0] = B[0] + K, B[1] = B[1] + k, w.now = z, k = 0;
        for (ie in w.timers)
          w.timers.hasOwnProperty(ie) && (le = w.timers[ie], le.createdAt += K, le.callAt += K);
      }, w.jump = function(F) {
        const z = typeof F == "number" ? F : O(F), K = Math.floor(z);
        for (const ie of Object.values(w.timers))
          w.now + K > ie.callAt && (ie.callAt = w.now + K);
        w.tick(K);
      }, l.performance && (w.performance = /* @__PURE__ */ Object.create(null), w.performance.now = H), l.hrtime && (w.hrtime = te), w;
    }
    function W(E) {
      if (arguments.length > 1 || E instanceof Date || Array.isArray(E) || typeof E == "number")
        throw new TypeError(
          `FakeTimers.install called with ${String(
            E
          )} install requires an object parameter`
        );
      if (s.Date.isFake === !0)
        throw new TypeError(
          "Can't install fake timers twice on the same global object."
        );
      if (E = typeof E < "u" ? E : {}, E.shouldAdvanceTime = E.shouldAdvanceTime || !1, E.advanceTimeDelta = E.advanceTimeDelta || 20, E.shouldClearNativeTimers = E.shouldClearNativeTimers || !1, E.target)
        throw new TypeError(
          "config.target is no longer supported. Use `withGlobal(target)` instead."
        );
      function $(X) {
        if (!E.ignoreMissingTimers)
          throw new ReferenceError(
            `non-existent timers and/or objects cannot be faked: '${X}'`
          );
      }
      let k, B;
      const w = mn(E.now, E.loopLimit);
      if (w.shouldClearNativeTimers = E.shouldClearNativeTimers, w.uninstall = function() {
        return nt(w, E);
      }, w.abortListenerMap = /* @__PURE__ */ new Map(), w.methods = E.toFake || [], w.methods.length === 0 && (w.methods = Object.keys(ge)), E.shouldAdvanceTime === !0) {
        const X = mt.bind(
          null,
          w,
          E.advanceTimeDelta
        ), te = s.setInterval(
          X,
          E.advanceTimeDelta
        );
        w.attachedInterval = te;
      }
      if (w.methods.includes("performance")) {
        const X = (() => {
          if (p)
            return s.performance.constructor.prototype;
          if (m)
            return s.Performance.prototype;
        })();
        if (X)
          Object.getOwnPropertyNames(X).forEach(function(te) {
            te !== "now" && (w.performance[te] = te.indexOf("getEntries") === 0 ? c : u);
          }), w.performance.mark = (te) => new A(te, "mark", 0, 0), w.performance.measure = (te) => new A(te, "measure", 0, 100), w.performance.timeOrigin = D(E.now);
        else if ((E.toFake || []).includes("performance"))
          return $("performance");
      }
      for (s === e && t && (w.timersModuleMethods = []), s === e && n && (w.timersPromisesModuleMethods = []), k = 0, B = w.methods.length; k < B; k++) {
        const X = w.methods[k];
        if (!l[X]) {
          $(X);
          continue;
        }
        if (X === "hrtime" ? s.process && typeof s.process.hrtime == "function" && Ne(s.process, X, w) : X === "nextTick" ? s.process && typeof s.process.nextTick == "function" && Ne(s.process, X, w) : Ne(s, X, w), w.timersModuleMethods !== void 0 && t[X]) {
          const te = t[X];
          w.timersModuleMethods.push({
            methodName: X,
            original: te
          }), t[X] = s[X];
        }
        w.timersPromisesModuleMethods !== void 0 && (X === "setTimeout" ? (w.timersPromisesModuleMethods.push({
          methodName: "setTimeout",
          original: n.setTimeout
        }), n.setTimeout = (te, H, Z = {}) => new Promise((V, F) => {
          const z = () => {
            Z.signal.removeEventListener(
              "abort",
              z
            ), w.abortListenerMap.delete(z), w.clearTimeout(K), F(Z.signal.reason);
          }, K = w.setTimeout(() => {
            Z.signal && (Z.signal.removeEventListener(
              "abort",
              z
            ), w.abortListenerMap.delete(z)), V(H);
          }, te);
          Z.signal && (Z.signal.aborted ? z() : (Z.signal.addEventListener(
            "abort",
            z
          ), w.abortListenerMap.set(
            z,
            Z.signal
          )));
        })) : X === "setImmediate" ? (w.timersPromisesModuleMethods.push({
          methodName: "setImmediate",
          original: n.setImmediate
        }), n.setImmediate = (te, H = {}) => new Promise((Z, V) => {
          const F = () => {
            H.signal.removeEventListener(
              "abort",
              F
            ), w.abortListenerMap.delete(F), w.clearImmediate(z), V(H.signal.reason);
          }, z = w.setImmediate(() => {
            H.signal && (H.signal.removeEventListener(
              "abort",
              F
            ), w.abortListenerMap.delete(F)), Z(te);
          });
          H.signal && (H.signal.aborted ? F() : (H.signal.addEventListener(
            "abort",
            F
          ), w.abortListenerMap.set(
            F,
            H.signal
          )));
        })) : X === "setInterval" && (w.timersPromisesModuleMethods.push({
          methodName: "setInterval",
          original: n.setInterval
        }), n.setInterval = (te, H, Z = {}) => ({
          [Symbol.asyncIterator]: () => {
            const V = () => {
              let ye, Be;
              const gt = new Promise((ze, rt) => {
                ye = ze, Be = rt;
              });
              return gt.resolve = ye, gt.reject = Be, gt;
            };
            let F = !1, z = !1, K, ie = 0;
            const le = [], Ze = w.setInterval(() => {
              le.length > 0 ? le.shift().resolve() : ie++;
            }, te), qe = () => {
              Z.signal.removeEventListener(
                "abort",
                qe
              ), w.abortListenerMap.delete(qe), w.clearInterval(Ze), F = !0;
              for (const ye of le)
                ye.resolve();
            };
            return Z.signal && (Z.signal.aborted ? F = !0 : (Z.signal.addEventListener(
              "abort",
              qe
            ), w.abortListenerMap.set(
              qe,
              Z.signal
            ))), {
              next: async () => {
                if (Z.signal?.aborted && !z)
                  throw z = !0, Z.signal.reason;
                if (F)
                  return { done: !0, value: void 0 };
                if (ie > 0)
                  return ie--, { done: !1, value: H };
                const ye = V();
                if (le.push(ye), await ye, K && le.length === 0 && K.resolve(), Z.signal?.aborted && !z)
                  throw z = !0, Z.signal.reason;
                return F ? { done: !0, value: void 0 } : { done: !1, value: H };
              },
              return: async () => F ? { done: !0, value: void 0 } : (le.length > 0 && (K = V(), await K), w.clearInterval(Ze), F = !0, Z.signal && (Z.signal.removeEventListener(
                "abort",
                qe
              ), w.abortListenerMap.delete(qe)), { done: !0, value: void 0 })
            };
          }
        })));
      }
      return w;
    }
    return {
      timers: ge,
      createClock: mn,
      install: W,
      withGlobal: r
    };
  }
  const o = r(e);
  return $t.timers = o.timers, $t.createClock = o.createClock, $t.install = o.install, $t.withGlobal = r, $t;
}
var ky = Ny();
class jy {
  _global;
  _clock;
  // | _fakingTime | _fakingDate |
  // +-------------+-------------+
  // | false       | falsy       | initial
  // | false       | truthy     | vi.setSystemTime called first (for mocking only Date without fake timers)
  // | true        | falsy       | vi.useFakeTimers called first
  // | true        | truthy     | unreachable
  _fakingTime;
  _fakingDate;
  _fakeTimers;
  _userConfig;
  _now = Je.now;
  constructor({ global: t, config: n }) {
    this._userConfig = n, this._fakingDate = null, this._fakingTime = !1, this._fakeTimers = ky.withGlobal(t), this._global = t;
  }
  clearAllTimers() {
    this._fakingTime && this._clock.reset();
  }
  dispose() {
    this.useRealTimers();
  }
  runAllTimers() {
    this._checkFakeTimers() && this._clock.runAll();
  }
  async runAllTimersAsync() {
    this._checkFakeTimers() && await this._clock.runAllAsync();
  }
  runOnlyPendingTimers() {
    this._checkFakeTimers() && this._clock.runToLast();
  }
  async runOnlyPendingTimersAsync() {
    this._checkFakeTimers() && await this._clock.runToLastAsync();
  }
  advanceTimersToNextTimer(t = 1) {
    if (this._checkFakeTimers()) for (let n = t; n > 0 && (this._clock.next(), this._clock.tick(0), this._clock.countTimers() !== 0); n--)
      ;
  }
  async advanceTimersToNextTimerAsync(t = 1) {
    if (this._checkFakeTimers()) for (let n = t; n > 0 && (await this._clock.nextAsync(), this._clock.tick(0), this._clock.countTimers() !== 0); n--)
      ;
  }
  advanceTimersByTime(t) {
    this._checkFakeTimers() && this._clock.tick(t);
  }
  async advanceTimersByTimeAsync(t) {
    this._checkFakeTimers() && await this._clock.tickAsync(t);
  }
  advanceTimersToNextFrame() {
    this._checkFakeTimers() && this._clock.runToFrame();
  }
  runAllTicks() {
    this._checkFakeTimers() && this._clock.runMicrotasks();
  }
  useRealTimers() {
    this._fakingDate && (ty(), this._fakingDate = null), this._fakingTime && (this._clock.uninstall(), this._fakingTime = !1);
  }
  useFakeTimers() {
    if (this._fakingDate) throw new Error('"setSystemTime" was called already and date was mocked. Reset timers using `vi.useRealTimers()` if you want to use fake timers again.');
    if (!this._fakingTime) {
      const t = Object.keys(this._fakeTimers.timers).filter((n) => n !== "nextTick" && n !== "queueMicrotask");
      if (this._userConfig?.toFake?.includes("nextTick") && Uu()) throw new Error("process.nextTick cannot be mocked inside child_process");
      this._clock = this._fakeTimers.install({
        now: Date.now(),
        ...this._userConfig,
        toFake: this._userConfig?.toFake || t,
        ignoreMissingTimers: !0
      }), this._fakingTime = !0;
    }
  }
  reset() {
    if (this._checkFakeTimers()) {
      const { now: t } = this._clock;
      this._clock.reset(), this._clock.setSystemTime(t);
    }
  }
  setSystemTime(t) {
    const n = typeof t > "u" || t instanceof Date ? t : new Date(t);
    this._fakingTime ? this._clock.setSystemTime(n) : (this._fakingDate = n ?? new Date(this.getRealSystemTime()), ey(this._fakingDate));
  }
  getMockedSystemTime() {
    return this._fakingTime ? new Date(this._clock.now) : this._fakingDate;
  }
  getRealSystemTime() {
    return this._now();
  }
  getTimerCount() {
    return this._checkFakeTimers() ? this._clock.countTimers() : 0;
  }
  configure(t) {
    this._userConfig = t;
  }
  isFakeTimers() {
    return this._fakingTime;
  }
  _checkFakeTimers() {
    if (!this._fakingTime) throw new Error('Timers are not mocked. Try calling "vi.useFakeTimers()" first.');
    return this._fakingTime;
  }
}
function ol(e, t) {
  return t.stack !== void 0 && (e.stack = t.stack.replace(t.message, e.message)), e;
}
function Ry(e, t = {}) {
  const { setTimeout: n, setInterval: r, clearTimeout: o, clearInterval: s } = Dt(), { interval: i = 50, timeout: a = 1e3 } = typeof t == "number" ? { timeout: t } : t, u = new Error("STACK_TRACE_ERROR");
  return new Promise((c, l) => {
    let f, d = "idle", h, m;
    const p = (x) => {
      h && o(h), m && s(m), c(x);
    }, b = () => {
      m && s(m);
      let x = f;
      x || (x = ol(new Error("Timed out in waitFor!"), u)), l(x);
    }, S = () => {
      if (Xn.isFakeTimers() && Xn.advanceTimersByTime(i), d !== "pending")
        try {
          const x = e();
          if (x !== null && typeof x == "object" && typeof x.then == "function") {
            const A = x;
            d = "pending", A.then((C) => {
              d = "resolved", p(C);
            }, (C) => {
              d = "rejected", f = C;
            });
          } else
            return p(x), !0;
        } catch (x) {
          f = x;
        }
    };
    S() !== !0 && (h = n(b, a), m = r(S, i));
  });
}
function Fy(e, t = {}) {
  const { setTimeout: n, setInterval: r, clearTimeout: o, clearInterval: s } = Dt(), { interval: i = 50, timeout: a = 1e3 } = typeof t == "number" ? { timeout: t } : t, u = new Error("STACK_TRACE_ERROR");
  return new Promise((c, l) => {
    let f = "idle", d, h;
    const m = (S) => {
      h && s(h), S || (S = ol(new Error("Timed out in waitUntil!"), u)), l(S);
    }, p = (S) => {
      if (S)
        return d && o(d), h && s(h), c(S), !0;
    }, b = () => {
      if (Xn.isFakeTimers() && Xn.advanceTimersByTime(i), f !== "pending")
        try {
          const S = e();
          if (S !== null && typeof S == "object" && typeof S.then == "function") {
            const x = S;
            f = "pending", x.then((A) => {
              f = "resolved", p(A);
            }, (A) => {
              f = "rejected", m(A);
            });
          } else return p(S);
        } catch (S) {
          m(S);
        }
    };
    b() !== !0 && (d = n(m, a), h = r(b, i));
  });
}
function Dy() {
  let e = null;
  const t = pn();
  let n;
  const r = () => n ||= new jy({
    global: globalThis,
    config: t.config.fakeTimers
  }), o = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), i = [
    "PROD",
    "DEV",
    "SSR"
  ], a = {
    useFakeTimers(u) {
      if (Uu() && (u?.toFake?.includes("nextTick") || t.config?.fakeTimers?.toFake?.includes("nextTick")))
        throw new Error('vi.useFakeTimers({ toFake: ["nextTick"] }) is not supported in node:child_process. Use --pool=threads if mocking nextTick is required.');
      return u ? r().configure({
        ...t.config.fakeTimers,
        ...u
      }) : r().configure(t.config.fakeTimers), r().useFakeTimers(), a;
    },
    isFakeTimers() {
      return r().isFakeTimers();
    },
    useRealTimers() {
      return r().useRealTimers(), a;
    },
    runOnlyPendingTimers() {
      return r().runOnlyPendingTimers(), a;
    },
    async runOnlyPendingTimersAsync() {
      return await r().runOnlyPendingTimersAsync(), a;
    },
    runAllTimers() {
      return r().runAllTimers(), a;
    },
    async runAllTimersAsync() {
      return await r().runAllTimersAsync(), a;
    },
    runAllTicks() {
      return r().runAllTicks(), a;
    },
    advanceTimersByTime(u) {
      return r().advanceTimersByTime(u), a;
    },
    async advanceTimersByTimeAsync(u) {
      return await r().advanceTimersByTimeAsync(u), a;
    },
    advanceTimersToNextTimer() {
      return r().advanceTimersToNextTimer(), a;
    },
    async advanceTimersToNextTimerAsync() {
      return await r().advanceTimersToNextTimerAsync(), a;
    },
    advanceTimersToNextFrame() {
      return r().advanceTimersToNextFrame(), a;
    },
    getTimerCount() {
      return r().getTimerCount();
    },
    setSystemTime(u) {
      return r().setSystemTime(u), a;
    },
    getMockedSystemTime() {
      return r().getMockedSystemTime();
    },
    getRealSystemTime() {
      return r().getRealSystemTime();
    },
    clearAllTimers() {
      return r().clearAllTimers(), a;
    },
    spyOn: cd,
    fn: ld,
    waitFor: Ry,
    waitUntil: Fy,
    hoisted(u) {
      return je(u, '"vi.hoisted" factory', ["function"]), u();
    },
    mock(u, c) {
      if (typeof u != "string") throw new TypeError(`vi.mock() expects a string path, but received a ${typeof u}`);
      const l = _t("mock");
      ke().queueMock(u, l, typeof c == "function" ? () => c(() => ke().importActual(u, l, ke().getMockContext().callstack)) : c);
    },
    unmock(u) {
      if (typeof u != "string") throw new TypeError(`vi.unmock() expects a string path, but received a ${typeof u}`);
      ke().queueUnmock(u, _t("unmock"));
    },
    doMock(u, c) {
      if (typeof u != "string") throw new TypeError(`vi.doMock() expects a string path, but received a ${typeof u}`);
      const l = _t("doMock");
      ke().queueMock(u, l, typeof c == "function" ? () => c(() => ke().importActual(u, l, ke().getMockContext().callstack)) : c);
    },
    doUnmock(u) {
      if (typeof u != "string") throw new TypeError(`vi.doUnmock() expects a string path, but received a ${typeof u}`);
      ke().queueUnmock(u, _t("doUnmock"));
    },
    async importActual(u) {
      return ke().importActual(u, _t("importActual"), ke().getMockContext().callstack);
    },
    async importMock(u) {
      return ke().importMock(u, _t("importMock"));
    },
    mockObject(u) {
      return ke().mockObject({ value: u }).value;
    },
    mocked(u, c = {}) {
      return u;
    },
    isMockFunction(u) {
      return Yt(u);
    },
    clearAllMocks() {
      return [...On].reverse().forEach((u) => u.mockClear()), a;
    },
    resetAllMocks() {
      return [...On].reverse().forEach((u) => u.mockReset()), a;
    },
    restoreAllMocks() {
      return [...On].reverse().forEach((u) => u.mockRestore()), a;
    },
    stubGlobal(u, c) {
      return o.has(u) || o.set(u, Object.getOwnPropertyDescriptor(globalThis, u)), Object.defineProperty(globalThis, u, {
        value: c,
        writable: !0,
        configurable: !0,
        enumerable: !0
      }), a;
    },
    stubEnv(u, c) {
      return s.has(u) || s.set(u, process.env[u]), i.includes(u) ? process.env[u] = c ? "1" : "" : c === void 0 ? delete process.env[u] : process.env[u] = String(c), a;
    },
    unstubAllGlobals() {
      return o.forEach((u, c) => {
        u ? Object.defineProperty(globalThis, c, u) : Reflect.deleteProperty(globalThis, c);
      }), o.clear(), a;
    },
    unstubAllEnvs() {
      return s.forEach((u, c) => {
        u === void 0 ? delete process.env[c] : process.env[c] = u;
      }), s.clear(), a;
    },
    resetModules() {
      return ym(t.moduleCache), a;
    },
    async dynamicImportSettled() {
      return Xu();
    },
    setConfig(u) {
      e || (e = { ...t.config }), Object.assign(t.config, u);
    },
    resetConfig() {
      e && Object.assign(t.config, e);
    }
  };
  return a;
}
const Ly = Dy(), Xn = Ly;
function ke() {
  return typeof __vitest_mocker__ < "u" ? __vitest_mocker__ : new Proxy({}, { get(e, t) {
    throw new Error(`Vitest mocker was not initialized in this environment. vi.${String(t)}() is forbidden.`);
  } });
}
function _t(e) {
  const n = fh({ stackTraceLimit: 5 }).split(`
`), r = n.findIndex((s) => s.includes(` at Object.${e}`) || s.includes(`${e}@`));
  return vs(n[r + 1])?.file || "";
}
export {
  Vy as a,
  Jy as b,
  zy as d,
  dy as g,
  Wy as i,
  Xn as v
};
