import { g as fe, c as me } from "./_commonjsHelpers-DaMA6jEr.js";
import { l as de } from "./index-D6WVIfcJ.js";
var Q, be;
function St() {
  return be || (be = 1, Q = (e) => {
    const t = e.match(/^[ \t]*(?=\S)/gm);
    return t ? t.reduce((n, r) => Math.min(n, r.length), 1 / 0) : 0;
  }), Q;
}
var J, ve;
function Rt() {
  if (ve) return J;
  ve = 1;
  const e = St();
  return J = (t) => {
    const n = e(t);
    if (n === 0)
      return t;
    const r = new RegExp(`^[ \\t]{${n}}`, "gm");
    return t.replace(r, "");
  }, J;
}
var Z, ye;
function $t() {
  return ye || (ye = 1, Z = (e, t = 1, n) => {
    if (n = {
      indent: " ",
      includeEmptyLines: !1,
      ...n
    }, typeof e != "string")
      throw new TypeError(
        `Expected \`input\` to be a \`string\`, got \`${typeof e}\``
      );
    if (typeof t != "number")
      throw new TypeError(
        `Expected \`count\` to be a \`number\`, got \`${typeof t}\``
      );
    if (typeof n.indent != "string")
      throw new TypeError(
        `Expected \`options.indent\` to be a \`string\`, got \`${typeof n.indent}\``
      );
    if (t === 0)
      return e;
    const r = n.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
    return e.replace(r, n.indent.repeat(t));
  }), Z;
}
var ee, Ee;
function Nt() {
  if (Ee) return ee;
  Ee = 1;
  const e = Rt(), t = $t();
  return ee = (n, r = 0, i) => t(e(n), r, i), ee;
}
var Ct = Nt();
const we = /* @__PURE__ */ fe(Ct);
class Ht extends Error {
  reason;
  filename;
  line;
  column;
  source;
  constructor(t, n, r, i, s) {
    super(`${t}:${r}:${i}: ${n}`), this.reason = n, this.filename = t, this.line = r, this.column = i, this.source = s;
  }
}
class Ot {
  start;
  end;
  source;
  constructor(t, n, r) {
    this.start = t, this.end = n, this.source = r;
  }
}
var A;
(function(e) {
  e.stylesheet = "stylesheet", e.rule = "rule", e.declaration = "declaration", e.comment = "comment", e.container = "container", e.charset = "charset", e.document = "document", e.customMedia = "custom-media", e.fontFace = "font-face", e.host = "host", e.import = "import", e.keyframes = "keyframes", e.keyframe = "keyframe", e.layer = "layer", e.media = "media", e.namespace = "namespace", e.page = "page", e.startingStyle = "starting-style", e.supports = "supports";
})(A || (A = {}));
const xe = (e, t, n) => {
  let r = n, i = 1e4;
  do {
    const s = t.map((c) => e.indexOf(c, r));
    s.push(e.indexOf("\\", r));
    const o = s.filter((c) => c !== -1);
    if (o.length === 0) return -1;
    const f = Math.min(...o);
    if (e[f] !== "\\") return f;
    r = f + 2, i--;
  } while (i > 0);
  throw new Error("Too many escaping");
}, ne = (e, t, n) => {
  let r = n, i = 1e4;
  do {
    const s = t.map((c) => e.indexOf(c, r));
    s.push(e.indexOf("(", r)), s.push(e.indexOf('"', r)), s.push(e.indexOf("'", r)), s.push(e.indexOf("\\", r));
    const o = s.filter((c) => c !== -1);
    if (o.length === 0) return -1;
    const f = Math.min(...o);
    switch (e[f]) {
      case "\\":
        r = f + 2;
        break;
      case "(":
        {
          const c = ne(e, [")"], f + 1);
          if (c === -1) return -1;
          r = c + 1;
        }
        break;
      case '"':
        {
          const c = xe(e, ['"'], f + 1);
          if (c === -1) return -1;
          r = c + 1;
        }
        break;
      case "'":
        {
          const c = xe(e, ["'"], f + 1);
          if (c === -1) return -1;
          r = c + 1;
        }
        break;
      default:
        return f;
    }
    i--;
  } while (i > 0);
  throw new Error("Too many escaping");
}, te = /\/\*[^]*?(?:\*\/|$)/g;
function $(e) {
  return e ? e.trim() : "";
}
function re(e, t) {
  const n = e && typeof e.type == "string", r = n ? e : t;
  for (const i in e) {
    const s = e[i];
    Array.isArray(s) ? s.forEach((o) => {
      re(o, r);
    }) : s && typeof s == "object" && re(s, r);
  }
  return n && Object.defineProperty(e, "parent", { configurable: !0, writable: !0, enumerable: !1, value: t || null }), e;
}
const Bt = (e, t) => {
  t = t || {};
  let n = 1, r = 1;
  function i() {
    const l = { line: n, column: r };
    return (u) => (u.position = new Ot(l, { line: n, column: r }, t?.source || ""), L(), u);
  }
  const s = [];
  function o(l) {
    const u = new Ht(t?.source || "", l, n, r, e);
    if (!t?.silent) throw u;
    s.push(u);
  }
  function f() {
    const l = /^{\s*/.exec(e);
    return !!l && (h(l), !0);
  }
  function c() {
    const l = /^}/.exec(e);
    return !!l && (h(l), !0);
  }
  function b() {
    let l;
    const u = [];
    for (L(), y(u); e.length && e.charAt(0) !== "}" && (l = O() || I(), l); ) u.push(l), y(u);
    return u;
  }
  function h(l) {
    const u = l[0];
    return (function(d) {
      const p = d.match(/\n/g);
      p && (n += p.length);
      const g = d.lastIndexOf(`
`);
      r = ~g ? d.length - g : r + d.length;
    })(u), e = e.slice(u.length), l;
  }
  function L() {
    const l = /^\s*/.exec(e);
    l && h(l);
  }
  function y(l) {
    l = l || [];
    let u = B();
    for (; u; ) l.push(u), u = B();
    return l;
  }
  function B() {
    const l = i();
    if (e.charAt(0) !== "/" || e.charAt(1) !== "*") return;
    const u = /^\/\*[^]*?\*\//.exec(e);
    return u ? (h(u), l({ type: A.comment, comment: u[0].slice(2, -2) })) : o("End of comment missing");
  }
  function F() {
    const l = /^([^{]+)/.exec(e);
    if (l)
      return h(l), ((u, d) => {
        const p = [];
        let g = 0;
        for (; g < u.length; ) {
          const x = ne(u, d, g);
          if (x === -1) return p.push(u.substring(g)), p;
          p.push(u.substring(g, x)), g = x + 1;
        }
        return p;
      })($(l[0]).replace(te, ""), [","]).map((u) => $(u));
  }
  function V() {
    const l = i(), u = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/.exec(e);
    if (!u) return;
    h(u);
    const d = $(u[0]), p = /^:\s*/.exec(e);
    if (!p) return o("property missing ':'");
    h(p);
    let g = "";
    const x = ne(e, [";", "}"]);
    x !== -1 && (g = e.substring(0, x), h([g]), g = $(g).replace(te, ""));
    const T = l({ type: A.declaration, property: d.replace(te, ""), value: g }), j = /^[;\s]*/.exec(e);
    return j && h(j), T;
  }
  function H() {
    const l = [];
    if (!f()) return o("missing '{'");
    y(l);
    let u = V();
    for (; u; ) l.push(u), y(l), u = V();
    return c() ? l : o("missing '}'");
  }
  function a() {
    const l = [], u = i();
    let d = /^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/.exec(e);
    for (; d; ) {
      const p = h(d);
      l.push(p[1]);
      const g = /^,\s*/.exec(e);
      g && h(g), d = /^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/.exec(e);
    }
    if (l.length) return u({ type: A.keyframe, values: l, declarations: H() || [] });
  }
  const w = N("import"), E = N("charset"), D = N("namespace");
  function N(l) {
    const u = new RegExp("^@" + l + `\\s*((?::?[^;'"]|"(?:\\\\"|[^"])*?"|'(?:\\\\'|[^'])*?')+)(?:;|$)`);
    return () => {
      const d = i(), p = u.exec(e);
      if (!p) return;
      const g = h(p), x = { type: l };
      return x[l] = g[1].trim(), d(x);
    };
  }
  function O() {
    if (e[0] === "@") return (function() {
      const l = i(), u = /^@([-\w]+)?keyframes\s*/.exec(e);
      if (!u) return;
      const d = h(u)[1], p = /^([-\w]+)\s*/.exec(e);
      if (!p) return o("@keyframes missing name");
      const g = h(p)[1];
      if (!f()) return o("@keyframes missing '{'");
      let x = y(), T = a();
      for (; T; ) x.push(T), x = x.concat(y()), T = a();
      return c() ? l({ type: A.keyframes, name: g, vendor: d, keyframes: x }) : o("@keyframes missing '}'");
    })() || (function() {
      const l = i(), u = /^@media *([^{]+)/.exec(e);
      if (!u) return;
      const d = $(h(u)[1]);
      if (!f()) return o("@media missing '{'");
      const p = y().concat(b());
      return c() ? l({ type: A.media, media: d, rules: p }) : o("@media missing '}'");
    })() || (function() {
      const l = i(), u = /^@custom-media\s+(--\S+)\s+([^{;\s][^{;]*);/.exec(e);
      if (!u) return;
      const d = h(u);
      return l({ type: A.customMedia, name: $(d[1]), media: $(d[2]) });
    })() || (function() {
      const l = i(), u = /^@supports *([^{]+)/.exec(e);
      if (!u) return;
      const d = $(h(u)[1]);
      if (!f()) return o("@supports missing '{'");
      const p = y().concat(b());
      return c() ? l({ type: A.supports, supports: d, rules: p }) : o("@supports missing '}'");
    })() || w() || E() || D() || (function() {
      const l = i(), u = /^@([-\w]+)?document *([^{]+)/.exec(e);
      if (!u) return;
      const d = h(u), p = $(d[1]), g = $(d[2]);
      if (!f()) return o("@document missing '{'");
      const x = y().concat(b());
      return c() ? l({ type: A.document, document: g, vendor: p, rules: x }) : o("@document missing '}'");
    })() || (function() {
      const l = i(), u = /^@page */.exec(e);
      if (!u) return;
      h(u);
      const d = F() || [];
      if (!f()) return o("@page missing '{'");
      let p = y(), g = V();
      for (; g; ) p.push(g), p = p.concat(y()), g = V();
      return c() ? l({ type: A.page, selectors: d, declarations: p }) : o("@page missing '}'");
    })() || (function() {
      const l = i(), u = /^@host\s*/.exec(e);
      if (!u) return;
      if (h(u), !f()) return o("@host missing '{'");
      const d = y().concat(b());
      return c() ? l({ type: A.host, rules: d }) : o("@host missing '}'");
    })() || (function() {
      const l = i(), u = /^@font-face\s*/.exec(e);
      if (!u) return;
      if (h(u), !f()) return o("@font-face missing '{'");
      let d = y(), p = V();
      for (; p; ) d.push(p), d = d.concat(y()), p = V();
      return c() ? l({ type: A.fontFace, declarations: d }) : o("@font-face missing '}'");
    })() || (function() {
      const l = i(), u = /^@container *([^{]+)/.exec(e);
      if (!u) return;
      const d = $(h(u)[1]);
      if (!f()) return o("@container missing '{'");
      const p = y().concat(b());
      return c() ? l({ type: A.container, container: d, rules: p }) : o("@container missing '}'");
    })() || (function() {
      const l = i(), u = /^@starting-style\s*/.exec(e);
      if (!u) return;
      if (h(u), !f()) return o("@starting-style missing '{'");
      const d = y().concat(b());
      return c() ? l({ type: A.startingStyle, rules: d }) : o("@starting-style missing '}'");
    })() || (function() {
      const l = i(), u = /^@layer *([^{;@]+)/.exec(e);
      if (!u) return;
      const d = $(h(u)[1]);
      if (!f()) {
        const g = /^[;\s]*/.exec(e);
        return g && h(g), l({ type: A.layer, layer: d });
      }
      const p = y().concat(b());
      return c() ? l({ type: A.layer, layer: d, rules: p }) : o("@layer missing '}'");
    })();
  }
  function I() {
    const l = i(), u = F();
    return u ? (y(), l({ type: A.rule, selectors: u, declarations: H() || [] })) : o("selector missing");
  }
  return re((function() {
    const l = b();
    return { type: A.stylesheet, stylesheet: { source: t?.source, rules: l, parsingErrors: s } };
  })());
};
var Dt = Object.prototype.toString;
function It(e) {
  return typeof e == "function" || Dt.call(e) === "[object Function]";
}
function Tt(e) {
  var t = Number(e);
  return isNaN(t) ? 0 : t === 0 || !isFinite(t) ? t : (t > 0 ? 1 : -1) * Math.floor(Math.abs(t));
}
var kt = Math.pow(2, 53) - 1;
function Vt(e) {
  var t = Tt(e);
  return Math.min(Math.max(t, 0), kt);
}
function C(e, t) {
  var n = Array, r = Object(e);
  if (e == null)
    throw new TypeError("Array.from requires an array-like object - not null or undefined");
  for (var i = Vt(r.length), s = It(n) ? Object(new n(i)) : new Array(i), o = 0, f; o < i; )
    f = r[o], s[o] = f, o += 1;
  return s.length = i, s;
}
function _(e) {
  "@babel/helpers - typeof";
  return _ = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _(e);
}
function Pt(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Lt(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Ve(r.key), r);
  }
}
function jt(e, t, n) {
  return t && Lt(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Mt(e, t, n) {
  return t = Ve(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Ve(e) {
  var t = _t(e, "string");
  return _(t) === "symbol" ? t : String(t);
}
function _t(e, t) {
  if (_(e) !== "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (_(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var qt = /* @__PURE__ */ (function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    Pt(this, e), Mt(this, "items", void 0), this.items = t;
  }
  return jt(e, [{
    key: "add",
    value: function(n) {
      return this.has(n) === !1 && this.items.push(n), this;
    }
  }, {
    key: "clear",
    value: function() {
      this.items = [];
    }
  }, {
    key: "delete",
    value: function(n) {
      var r = this.items.length;
      return this.items = this.items.filter(function(i) {
        return i !== n;
      }), r !== this.items.length;
    }
  }, {
    key: "forEach",
    value: function(n) {
      var r = this;
      this.items.forEach(function(i) {
        n(i, i, r);
      });
    }
  }, {
    key: "has",
    value: function(n) {
      return this.items.indexOf(n) !== -1;
    }
  }, {
    key: "size",
    get: function() {
      return this.items.length;
    }
  }]), e;
})();
const Ft = typeof Set > "u" ? Set : qt;
function R(e) {
  var t;
  return (
    // eslint-disable-next-line no-restricted-properties -- actual guard for environments without localName
    (t = e.localName) !== null && t !== void 0 ? t : (
      // eslint-disable-next-line no-restricted-properties -- required for the fallback
      e.tagName.toLowerCase()
    )
  );
}
var Gt = {
  article: "article",
  aside: "complementary",
  button: "button",
  datalist: "listbox",
  dd: "definition",
  details: "group",
  dialog: "dialog",
  dt: "term",
  fieldset: "group",
  figure: "figure",
  // WARNING: Only with an accessible name
  form: "form",
  footer: "contentinfo",
  h1: "heading",
  h2: "heading",
  h3: "heading",
  h4: "heading",
  h5: "heading",
  h6: "heading",
  header: "banner",
  hr: "separator",
  html: "document",
  legend: "legend",
  li: "listitem",
  math: "math",
  main: "main",
  menu: "list",
  nav: "navigation",
  ol: "list",
  optgroup: "group",
  // WARNING: Only in certain context
  option: "option",
  output: "status",
  progress: "progressbar",
  // WARNING: Only with an accessible name
  section: "region",
  summary: "button",
  table: "table",
  tbody: "rowgroup",
  textarea: "textbox",
  tfoot: "rowgroup",
  // WARNING: Only in certain context
  td: "cell",
  th: "columnheader",
  thead: "rowgroup",
  tr: "row",
  ul: "list"
}, zt = {
  caption: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  code: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  deletion: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  emphasis: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  generic: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby", "aria-roledescription"]),
  insertion: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  none: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  paragraph: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  presentation: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  strong: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  subscript: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  superscript: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"])
};
function Ut(e, t) {
  return [
    "aria-atomic",
    "aria-busy",
    "aria-controls",
    "aria-current",
    "aria-description",
    "aria-describedby",
    "aria-details",
    // "disabled",
    "aria-dropeffect",
    // "errormessage",
    "aria-flowto",
    "aria-grabbed",
    // "haspopup",
    "aria-hidden",
    // "invalid",
    "aria-keyshortcuts",
    "aria-label",
    "aria-labelledby",
    "aria-live",
    "aria-owns",
    "aria-relevant",
    "aria-roledescription"
  ].some(function(n) {
    var r;
    return e.hasAttribute(n) && !((r = zt[t]) !== null && r !== void 0 && r.has(n));
  });
}
function Pe(e, t) {
  return Ut(e, t);
}
function Wt(e) {
  var t = Kt(e);
  if (t === null || ie.indexOf(t) !== -1) {
    var n = Yt(e);
    if (ie.indexOf(t || "") === -1 || Pe(e, n || ""))
      return n;
  }
  return t;
}
function Yt(e) {
  var t = Gt[R(e)];
  if (t !== void 0)
    return t;
  switch (R(e)) {
    case "a":
    case "area":
    case "link":
      if (e.hasAttribute("href"))
        return "link";
      break;
    case "img":
      return e.getAttribute("alt") === "" && !Pe(e, "img") ? "presentation" : "img";
    case "input": {
      var n = e, r = n.type;
      switch (r) {
        case "button":
        case "image":
        case "reset":
        case "submit":
          return "button";
        case "checkbox":
        case "radio":
          return r;
        case "range":
          return "slider";
        case "email":
        case "tel":
        case "text":
        case "url":
          return e.hasAttribute("list") ? "combobox" : "textbox";
        case "search":
          return e.hasAttribute("list") ? "combobox" : "searchbox";
        case "number":
          return "spinbutton";
        default:
          return null;
      }
    }
    case "select":
      return e.hasAttribute("multiple") || e.size > 1 ? "listbox" : "combobox";
  }
  return null;
}
function Kt(e) {
  var t = e.getAttribute("role");
  if (t !== null) {
    var n = t.trim().split(" ")[0];
    if (n.length > 0)
      return n;
  }
  return null;
}
var ie = ["presentation", "none"];
function v(e) {
  return e !== null && e.nodeType === e.ELEMENT_NODE;
}
function Le(e) {
  return v(e) && R(e) === "caption";
}
function z(e) {
  return v(e) && R(e) === "input";
}
function Xt(e) {
  return v(e) && R(e) === "optgroup";
}
function Qt(e) {
  return v(e) && R(e) === "select";
}
function Jt(e) {
  return v(e) && R(e) === "table";
}
function Zt(e) {
  return v(e) && R(e) === "textarea";
}
function en(e) {
  var t = e.ownerDocument === null ? e : e.ownerDocument, n = t.defaultView;
  if (n === null)
    throw new TypeError("no window available");
  return n;
}
function tn(e) {
  return v(e) && R(e) === "fieldset";
}
function nn(e) {
  return v(e) && R(e) === "legend";
}
function rn(e) {
  return v(e) && R(e) === "slot";
}
function sn(e) {
  return v(e) && e.ownerSVGElement !== void 0;
}
function on(e) {
  return v(e) && R(e) === "svg";
}
function an(e) {
  return sn(e) && R(e) === "title";
}
function W(e, t) {
  if (v(e) && e.hasAttribute(t)) {
    var n = e.getAttribute(t).split(" "), r = e.getRootNode ? e.getRootNode() : e.ownerDocument;
    return n.map(function(i) {
      return r.getElementById(i);
    }).filter(
      function(i) {
        return i !== null;
      }
      // TODO: why does this not narrow?
    );
  }
  return [];
}
function k(e, t) {
  return v(e) ? t.indexOf(Wt(e)) !== -1 : !1;
}
function un(e) {
  return e.trim().replace(/\s\s+/g, " ");
}
function cn(e, t) {
  if (!v(e))
    return !1;
  if (e.hasAttribute("hidden") || e.getAttribute("aria-hidden") === "true")
    return !0;
  var n = t(e);
  return n.getPropertyValue("display") === "none" || n.getPropertyValue("visibility") === "hidden";
}
function ln(e) {
  return k(e, ["button", "combobox", "listbox", "textbox"]) || je(e, "range");
}
function je(e, t) {
  if (!v(e))
    return !1;
  switch (t) {
    case "range":
      return k(e, ["meter", "progressbar", "scrollbar", "slider", "spinbutton"]);
    default:
      throw new TypeError("No knowledge about abstract role '".concat(t, "'. This is likely a bug :("));
  }
}
function Ae(e, t) {
  var n = C(e.querySelectorAll(t));
  return W(e, "aria-owns").forEach(function(r) {
    n.push.apply(n, C(r.querySelectorAll(t)));
  }), n;
}
function fn(e) {
  return Qt(e) ? e.selectedOptions || Ae(e, "[selected]") : Ae(e, '[aria-selected="true"]');
}
function dn(e) {
  return k(e, ie);
}
function pn(e) {
  return Le(e);
}
function hn(e) {
  return k(e, ["button", "cell", "checkbox", "columnheader", "gridcell", "heading", "label", "legend", "link", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "radio", "row", "rowheader", "switch", "tab", "tooltip", "treeitem"]);
}
function gn(e) {
  return !1;
}
function mn(e) {
  return z(e) || Zt(e) ? e.value : e.textContent || "";
}
function Se(e) {
  var t = e.getPropertyValue("content");
  return /^["'].*["']$/.test(t) ? t.slice(1, -1) : "";
}
function Me(e) {
  var t = R(e);
  return t === "button" || t === "input" && e.getAttribute("type") !== "hidden" || t === "meter" || t === "output" || t === "progress" || t === "select" || t === "textarea";
}
function _e(e) {
  if (Me(e))
    return e;
  var t = null;
  return e.childNodes.forEach(function(n) {
    if (t === null && v(n)) {
      var r = _e(n);
      r !== null && (t = r);
    }
  }), t;
}
function bn(e) {
  if (e.control !== void 0)
    return e.control;
  var t = e.getAttribute("for");
  return t !== null ? e.ownerDocument.getElementById(t) : _e(e);
}
function vn(e) {
  var t = e.labels;
  if (t === null)
    return t;
  if (t !== void 0)
    return C(t);
  if (!Me(e))
    return null;
  var n = e.ownerDocument;
  return C(n.querySelectorAll("label")).filter(function(r) {
    return bn(r) === e;
  });
}
function yn(e) {
  var t = e.assignedNodes();
  return t.length === 0 ? C(e.childNodes) : t;
}
function qe(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = new Ft(), r = en(e), i = t.compute, s = i === void 0 ? "name" : i, o = t.computedStyleSupportsPseudoElements, f = o === void 0 ? t.getComputedStyle !== void 0 : o, c = t.getComputedStyle, b = c === void 0 ? r.getComputedStyle.bind(r) : c, h = t.hidden, L = h === void 0 ? !1 : h;
  function y(a, w) {
    var E = "";
    if (v(a) && f) {
      var D = b(a, "::before"), N = Se(D);
      E = "".concat(N, " ").concat(E);
    }
    var O = rn(a) ? yn(a) : C(a.childNodes).concat(W(a, "aria-owns"));
    if (O.forEach(function(u) {
      var d = H(u, {
        isEmbeddedInLabel: w.isEmbeddedInLabel,
        isReferenced: !1,
        recursion: !0
      }), p = v(u) ? b(u).getPropertyValue("display") : "inline", g = p !== "inline" ? " " : "";
      E += "".concat(g).concat(d).concat(g);
    }), v(a) && f) {
      var I = b(a, "::after"), l = Se(I);
      E = "".concat(E, " ").concat(l);
    }
    return E.trim();
  }
  function B(a, w) {
    var E = a.getAttributeNode(w);
    return E !== null && !n.has(E) && E.value.trim() !== "" ? (n.add(E), E.value) : null;
  }
  function F(a) {
    return v(a) ? B(a, "title") : null;
  }
  function V(a) {
    if (!v(a))
      return null;
    if (tn(a)) {
      n.add(a);
      for (var w = C(a.childNodes), E = 0; E < w.length; E += 1) {
        var D = w[E];
        if (nn(D))
          return H(D, {
            isEmbeddedInLabel: !1,
            isReferenced: !1,
            recursion: !1
          });
      }
    } else if (Jt(a)) {
      n.add(a);
      for (var N = C(a.childNodes), O = 0; O < N.length; O += 1) {
        var I = N[O];
        if (Le(I))
          return H(I, {
            isEmbeddedInLabel: !1,
            isReferenced: !1,
            recursion: !1
          });
      }
    } else if (on(a)) {
      n.add(a);
      for (var l = C(a.childNodes), u = 0; u < l.length; u += 1) {
        var d = l[u];
        if (an(d))
          return d.textContent;
      }
      return null;
    } else if (R(a) === "img" || R(a) === "area") {
      var p = B(a, "alt");
      if (p !== null)
        return p;
    } else if (Xt(a)) {
      var g = B(a, "label");
      if (g !== null)
        return g;
    }
    if (z(a) && (a.type === "button" || a.type === "submit" || a.type === "reset")) {
      var x = B(a, "value");
      if (x !== null)
        return x;
      if (a.type === "submit")
        return "Submit";
      if (a.type === "reset")
        return "Reset";
    }
    var T = vn(a);
    if (T !== null && T.length !== 0)
      return n.add(a), C(T).map(function(X) {
        return H(X, {
          isEmbeddedInLabel: !0,
          isReferenced: !1,
          recursion: !0
        });
      }).filter(function(X) {
        return X.length > 0;
      }).join(" ");
    if (z(a) && a.type === "image") {
      var j = B(a, "alt");
      if (j !== null)
        return j;
      var he = B(a, "title");
      return he !== null ? he : "Submit Query";
    }
    if (k(a, ["button"])) {
      var ge = y(a, {
        isEmbeddedInLabel: !1
      });
      if (ge !== "")
        return ge;
    }
    return null;
  }
  function H(a, w) {
    if (n.has(a))
      return "";
    if (!L && cn(a, b) && !w.isReferenced)
      return n.add(a), "";
    var E = v(a) ? a.getAttributeNode("aria-labelledby") : null, D = E !== null && !n.has(E) ? W(a, "aria-labelledby") : [];
    if (s === "name" && !w.isReferenced && D.length > 0)
      return n.add(E), D.map(function(p) {
        return H(p, {
          isEmbeddedInLabel: w.isEmbeddedInLabel,
          isReferenced: !0,
          // this isn't recursion as specified, otherwise we would skip
          // `aria-label` in
          // <input id="myself" aria-label="foo" aria-labelledby="myself"
          recursion: !1
        });
      }).join(" ");
    var N = w.recursion && ln(a) && s === "name";
    if (!N) {
      var O = (v(a) && a.getAttribute("aria-label") || "").trim();
      if (O !== "" && s === "name")
        return n.add(a), O;
      if (!dn(a)) {
        var I = V(a);
        if (I !== null)
          return n.add(a), I;
      }
    }
    if (k(a, ["menu"]))
      return n.add(a), "";
    if (N || w.isEmbeddedInLabel || w.isReferenced) {
      if (k(a, ["combobox", "listbox"])) {
        n.add(a);
        var l = fn(a);
        return l.length === 0 ? z(a) ? a.value : "" : C(l).map(function(p) {
          return H(p, {
            isEmbeddedInLabel: w.isEmbeddedInLabel,
            isReferenced: !1,
            recursion: !0
          });
        }).join(" ");
      }
      if (je(a, "range"))
        return n.add(a), a.hasAttribute("aria-valuetext") ? a.getAttribute("aria-valuetext") : a.hasAttribute("aria-valuenow") ? a.getAttribute("aria-valuenow") : a.getAttribute("value") || "";
      if (k(a, ["textbox"]))
        return n.add(a), mn(a);
    }
    if (hn(a) || v(a) && w.isReferenced || pn(a) || gn()) {
      var u = y(a, {
        isEmbeddedInLabel: w.isEmbeddedInLabel
      });
      if (u !== "")
        return n.add(a), u;
    }
    if (a.nodeType === a.TEXT_NODE)
      return n.add(a), a.textContent || "";
    if (w.recursion)
      return n.add(a), y(a, {
        isEmbeddedInLabel: w.isEmbeddedInLabel
      });
    var d = F(a);
    return d !== null ? (n.add(a), d) : (n.add(a), "");
  }
  return un(H(e, {
    isEmbeddedInLabel: !1,
    // by spec computeAccessibleDescription starts with the referenced elements as roots
    isReferenced: s === "description",
    recursion: !1
  }));
}
function q(e) {
  "@babel/helpers - typeof";
  return q = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, q(e);
}
function Re(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function $e(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Re(Object(n), !0).forEach(function(r) {
      En(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Re(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function En(e, t, n) {
  return t = wn(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function wn(e) {
  var t = xn(e, "string");
  return q(t) === "symbol" ? t : String(t);
}
function xn(e, t) {
  if (q(e) !== "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (q(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function An(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = W(e, "aria-describedby").map(function(s) {
    return qe(s, $e($e({}, t), {}, {
      compute: "description"
    }));
  }).join(" ");
  if (n === "") {
    var r = e.getAttribute("aria-description");
    n = r === null ? "" : r;
  }
  if (n === "") {
    var i = e.getAttribute("title");
    n = i === null ? "" : i;
  }
  return n;
}
function Sn(e) {
  return k(e, ["caption", "code", "deletion", "emphasis", "generic", "insertion", "none", "paragraph", "presentation", "strong", "subscript", "superscript"]);
}
function Rn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return Sn(e) ? "" : qe(e, t);
}
var G = { exports: {} }, Ne;
function $n() {
  if (Ne) return G.exports;
  Ne = 1;
  var e = String, t = function() {
    return { isColorSupported: !1, reset: e, bold: e, dim: e, italic: e, underline: e, inverse: e, hidden: e, strikethrough: e, black: e, red: e, green: e, yellow: e, blue: e, magenta: e, cyan: e, white: e, gray: e, bgBlack: e, bgRed: e, bgGreen: e, bgYellow: e, bgBlue: e, bgMagenta: e, bgCyan: e, bgWhite: e, blackBright: e, redBright: e, greenBright: e, yellowBright: e, blueBright: e, magentaBright: e, cyanBright: e, whiteBright: e, bgBlackBright: e, bgRedBright: e, bgGreenBright: e, bgYellowBright: e, bgBlueBright: e, bgMagentaBright: e, bgCyanBright: e, bgWhiteBright: e };
  };
  return G.exports = t(), G.exports.createColors = t, G.exports;
}
var Nn = /* @__PURE__ */ $n();
const Cn = /* @__PURE__ */ fe(Nn);
var U = { exports: {} };
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
var Hn = U.exports, Ce;
function On() {
  return Ce || (Ce = 1, (function(e, t) {
    (function(n, r) {
      e.exports = r(n);
    })(typeof me < "u" ? me : Hn, function(n) {
      if (n.CSS && n.CSS.escape)
        return n.CSS.escape;
      var r = function(i) {
        if (arguments.length == 0)
          throw new TypeError("`CSS.escape` requires an argument.");
        for (var s = String(i), o = s.length, f = -1, c, b = "", h = s.charCodeAt(0); ++f < o; ) {
          if (c = s.charCodeAt(f), c == 0) {
            b += "�";
            continue;
          }
          if (
            // If the character is in the range [\1-\1F] (U+0001 to U+001F) or is
            // U+007F, […]
            c >= 1 && c <= 31 || c == 127 || // If the character is the first character and is in the range [0-9]
            // (U+0030 to U+0039), […]
            f == 0 && c >= 48 && c <= 57 || // If the character is the second character and is in the range [0-9]
            // (U+0030 to U+0039) and the first character is a `-` (U+002D), […]
            f == 1 && c >= 48 && c <= 57 && h == 45
          ) {
            b += "\\" + c.toString(16) + " ";
            continue;
          }
          if (
            // If the character is the first character and is a `-` (U+002D), and
            // there is no second character, […]
            f == 0 && o == 1 && c == 45
          ) {
            b += "\\" + s.charAt(f);
            continue;
          }
          if (c >= 128 || c == 45 || c == 95 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122) {
            b += s.charAt(f);
            continue;
          }
          b += "\\" + s.charAt(f);
        }
        return b;
      };
      return n.CSS || (n.CSS = {}), n.CSS.escape = r, r;
    });
  })(U)), U.exports;
}
var Bn = On();
const Dn = /* @__PURE__ */ fe(Bn);
class Fe extends Error {
  constructor(t, n, r, i) {
    super(), Error.captureStackTrace && Error.captureStackTrace(this, r);
    let s = "";
    try {
      s = i.utils.printWithType(
        "Received",
        n,
        i.utils.printReceived
      );
    } catch {
    }
    this.message = [
      i.utils.matcherHint(
        `${i.isNot ? ".not" : ""}.${r.name}`,
        "received",
        ""
      ),
      "",
      // eslint-disable-next-line new-cap
      `${i.utils.RECEIVED_COLOR(
        "received"
      )} value must ${t}.`,
      s
    ].join(`
`);
  }
}
class He extends Fe {
  constructor(...t) {
    super("be an HTMLElement or an SVGElement", ...t);
  }
}
class Oe extends Fe {
  constructor(...t) {
    super("be a Node", ...t);
  }
}
function Ge(e, t, ...n) {
  if (!e || !e.ownerDocument || !e.ownerDocument.defaultView)
    throw new t(e, ...n);
}
function In(e, ...t) {
  Ge(e, Oe, ...t);
  const n = e.ownerDocument.defaultView;
  if (!(e instanceof n.Node))
    throw new Oe(e, ...t);
}
function m(e, ...t) {
  Ge(e, He, ...t);
  const n = e.ownerDocument.defaultView;
  if (!(e instanceof n.HTMLElement) && !(e instanceof n.SVGElement))
    throw new He(e, ...t);
}
class Tn extends Error {
  constructor(t, n, r) {
    super(), Error.captureStackTrace && Error.captureStackTrace(this, n), this.message = [
      t.message,
      "",
      // eslint-disable-next-line new-cap
      r.utils.RECEIVED_COLOR("Failing css:"),
      // eslint-disable-next-line new-cap
      r.utils.RECEIVED_COLOR(`${t.css}`)
    ].join(`
`);
  }
}
function kn(e, ...t) {
  const n = Bt(`selector { ${e} }`, { silent: !0 }).stylesheet;
  if (n.parsingErrors && n.parsingErrors.length > 0) {
    const { reason: i, line: s } = n.parsingErrors[0];
    throw new Tn(
      {
        css: e,
        message: `Syntax error parsing expected css: ${i} on line: ${s}`
      },
      ...t
    );
  }
  return n.rules[0].declarations.filter((i) => i.type === "declaration").reduce(
    (i, { property: s, value: o }) => Object.assign(i, { [s]: o }),
    {}
  );
}
function Be(e, t) {
  return typeof t == "string" ? t : e.utils.stringify(t);
}
function S(e, t, n, r, i, s) {
  return [
    `${t}
`,
    // eslint-disable-next-line new-cap
    `${n}:
${e.utils.EXPECTED_COLOR(
      we(Be(e, r), 2)
    )}`,
    // eslint-disable-next-line new-cap
    `${i}:
${e.utils.RECEIVED_COLOR(
      we(Be(e, s), 2)
    )}`
  ].join(`
`);
}
function Vn(e, t) {
  return t instanceof RegExp ? t.test(e) : e.includes(String(t));
}
function Y(e, t) {
  console.warn(
    `Warning: ${e} has been deprecated and will be removed in future updates.`,
    t
  );
}
function K(e) {
  return e.replace(/\s+/g, " ").trim();
}
function P(e) {
  return e.tagName && e.tagName.toLowerCase();
}
function Pn({ multiple: e, options: t }) {
  const n = [...t].filter((r) => r.selected);
  if (e)
    return [...n].map((r) => r.value);
  if (n.length !== 0)
    return n[0].value;
}
function Ln(e) {
  switch (e.type) {
    case "number":
      return e.value === "" ? null : Number(e.value);
    case "checkbox":
      return e.checked;
    default:
      return e.value;
  }
}
const jn = ["meter", "progressbar", "slider", "spinbutton"];
function Mn(e) {
  if (jn.includes(e.getAttribute("role")))
    return Number(e.getAttribute("aria-valuenow"));
}
function ze(e) {
  if (e)
    switch (e.tagName.toLowerCase()) {
      case "input":
        return Ln(e);
      case "select":
        return Pn(e);
      default:
        return e.value ?? Mn(e);
    }
}
function _n(e, { wordConnector: t = ", ", lastWordConnector: n = " and " } = {}) {
  return [e.slice(0, -1).join(t), e[e.length - 1]].join(
    e.length > 1 ? n : ""
  );
}
function pe(e, t) {
  return Array.isArray(e) && Array.isArray(t) ? [...new Set(e)].every((n) => new Set(t).has(n)) : e === t;
}
function se(e, t) {
  return Y(
    "toBeInTheDOM",
    "Please use toBeInTheDocument for searching the entire document and toContainElement for searching a specific container."
  ), e && m(e, se, this), t && m(t, se, this), {
    pass: t ? t.contains(e) : !!e,
    message: () => [
      this.utils.matcherHint(
        `${this.isNot ? ".not" : ""}.toBeInTheDOM`,
        "element",
        ""
      ),
      "",
      "Received:",
      `  ${this.utils.printReceived(
        e && e.cloneNode(!1)
      )}`
    ].join(`
`)
  };
}
function Ue(e) {
  (e !== null || !this.isNot) && m(e, Ue, this);
  const t = e === null ? !1 : e.ownerDocument === e.getRootNode({ composed: !0 }), n = () => `expected document not to contain element, found ${this.utils.stringify(
    e.cloneNode(!0)
  )} instead`, r = () => "element could not be found in the document";
  return {
    pass: t,
    message: () => [
      this.utils.matcherHint(
        `${this.isNot ? ".not" : ""}.toBeInTheDocument`,
        "element",
        ""
      ),
      "",
      // eslint-disable-next-line new-cap
      this.utils.RECEIVED_COLOR(this.isNot ? n() : r())
    ].join(`
`)
  };
}
function We(e) {
  return Y(
    "toBeEmpty",
    "Please use instead toBeEmptyDOMElement for finding empty nodes in the DOM."
  ), m(e, We, this), {
    pass: e.innerHTML === "",
    message: () => [
      this.utils.matcherHint(
        `${this.isNot ? ".not" : ""}.toBeEmpty`,
        "element",
        ""
      ),
      "",
      "Received:",
      `  ${this.utils.printReceived(e.innerHTML)}`
    ].join(`
`)
  };
}
function Ye(e) {
  return m(e, Ye, this), {
    pass: qn(e),
    message: () => [
      this.utils.matcherHint(
        `${this.isNot ? ".not" : ""}.toBeEmptyDOMElement`,
        "element",
        ""
      ),
      "",
      "Received:",
      `  ${this.utils.printReceived(e.innerHTML)}`
    ].join(`
`)
  };
}
function qn(e) {
  return [...e.childNodes].filter((n) => n.nodeType !== 8).length === 0;
}
function oe(e, t) {
  return m(e, oe, this), t !== null && m(t, oe, this), {
    pass: e.contains(t),
    message: () => [
      this.utils.matcherHint(
        `${this.isNot ? ".not" : ""}.toContainElement`,
        "element",
        "element"
      ),
      "",
      // eslint-disable-next-line new-cap
      this.utils.RECEIVED_COLOR(`${this.utils.stringify(
        e.cloneNode(!1)
      )} ${this.isNot ? "contains:" : "does not contain:"} ${this.utils.stringify(t && t.cloneNode(!1))}
        `)
    ].join(`
`)
  };
}
function Fn(e, t) {
  const n = e.ownerDocument.createElement("div");
  return n.innerHTML = t, n.innerHTML;
}
function Ke(e, t) {
  if (m(e, Ke, this), typeof t != "string")
    throw new Error(`.toContainHTML() expects a string value, got ${t}`);
  return {
    pass: e.outerHTML.includes(Fn(e, t)),
    message: () => [
      this.utils.matcherHint(
        `${this.isNot ? ".not" : ""}.toContainHTML`,
        "element",
        ""
      ),
      "Expected:",
      // eslint-disable-next-line new-cap
      `  ${this.utils.EXPECTED_COLOR(t)}`,
      "Received:",
      `  ${this.utils.printReceived(e.cloneNode(!0))}`
    ].join(`
`)
  };
}
function Xe(e, t, n = { normalizeWhitespace: !0 }) {
  In(e, Xe, this);
  const r = n.normalizeWhitespace ? K(e.textContent) : e.textContent.replace(/\u00a0/g, " "), i = r !== "" && t === "";
  return {
    pass: !i && Vn(r, t),
    message: () => {
      const s = this.isNot ? "not to" : "to";
      return S(
        this,
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.toHaveTextContent`,
          "element",
          ""
        ),
        i ? "Checking with empty string will always match, use .toBeEmptyDOMElement() instead" : `Expected element ${s} have text content`,
        t,
        "Received",
        r
      );
    }
  };
}
function ae(e, t) {
  m(e, ae, this);
  const n = An(e), r = arguments.length === 1;
  let i = !1;
  return r ? i = n !== "" : i = t instanceof RegExp ? t.test(n) : this.equals(
    n,
    t
  ), {
    pass: i,
    message: () => {
      const s = this.isNot ? "not to" : "to";
      return S(
        this,
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.${ae.name}`,
          "element",
          ""
        ),
        `Expected element ${s} have accessible description`,
        t,
        "Received",
        n
      );
    }
  };
}
const M = "aria-invalid", Gn = ["false"];
function Qe(e, t) {
  m(e, Qe, this);
  const n = this.isNot ? "not to" : "to", r = this.isNot ? ".not.toHaveAccessibleErrorMessage" : ".toHaveAccessibleErrorMessage", i = e.getAttribute("aria-errormessage");
  if (!!i && /\s+/.test(i))
    return {
      pass: !1,
      message: () => S(
        this,
        this.utils.matcherHint(r, "element"),
        "Expected element's `aria-errormessage` attribute to be empty or a single, valid ID",
        "",
        "Received",
        `aria-errormessage="${i}"`
      )
    };
  const o = e.getAttribute(M);
  if (!e.hasAttribute(M) || Gn.includes(o))
    return {
      pass: !1,
      message: () => S(
        this,
        this.utils.matcherHint(r, "element"),
        "Expected element to be marked as invalid with attribute",
        `${M}="${String(!0)}"`,
        "Received",
        e.hasAttribute("aria-invalid") ? `${M}="${e.getAttribute(M)}` : null
      )
    };
  const c = K(
    e.ownerDocument.getElementById(i)?.textContent ?? ""
  );
  return {
    pass: t === void 0 ? !!c : t instanceof RegExp ? t.test(c) : this.equals(c, t),
    message: () => S(
      this,
      this.utils.matcherHint(r, "element"),
      `Expected element ${n} have accessible error message`,
      t ?? "",
      "Received",
      c
    )
  };
}
const zn = Yn(de.elementRoles);
function ue(e, t) {
  m(e, ue, this);
  const n = Un(e);
  return {
    pass: n.some((i) => i === t),
    message: () => {
      const i = this.isNot ? "not to" : "to";
      return S(
        this,
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.${ue.name}`,
          "element",
          ""
        ),
        `Expected element ${i} have role`,
        t,
        "Received",
        n.join(", ")
      );
    }
  };
}
function Un(e) {
  return e.hasAttribute("role") ? e.getAttribute("role").split(" ").filter(Boolean) : Wn(e);
}
function Wn(e) {
  for (const { match: t, roles: n } of zn)
    if (t(e))
      return [...n];
  return [];
}
function Yn(e) {
  function t({ name: o, attributes: f }) {
    return `${o}${f.map(({ name: c, value: b, constraints: h = [] }) => h.indexOf("undefined") !== -1 ? `:not([${c}])` : b ? `[${c}="${b}"]` : `[${c}]`).join("")}`;
  }
  function n({ attributes: o = [] }) {
    return o.length;
  }
  function r({ specificity: o }, { specificity: f }) {
    return f - o;
  }
  function i(o) {
    let { attributes: f = [] } = o;
    const c = f.findIndex(
      (h) => h.value && h.name === "type" && h.value === "text"
    );
    c >= 0 && (f = [
      ...f.slice(0, c),
      ...f.slice(c + 1)
    ]);
    const b = t({ ...o, attributes: f });
    return (h) => c >= 0 && h.type !== "text" ? !1 : h.matches(b);
  }
  let s = [];
  for (const [o, f] of e.entries())
    s = [
      ...s,
      {
        match: i(o),
        roles: Array.from(f),
        specificity: n(o)
      }
    ];
  return s.sort(r);
}
function ce(e, t) {
  m(e, ce, this);
  const n = Rn(e), r = arguments.length === 1;
  let i = !1;
  return r ? i = n !== "" : i = t instanceof RegExp ? t.test(n) : this.equals(n, t), {
    pass: i,
    message: () => {
      const s = this.isNot ? "not to" : "to";
      return S(
        this,
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.${ce.name}`,
          "element",
          ""
        ),
        `Expected element ${s} have accessible name`,
        t,
        "Received",
        n
      );
    }
  };
}
function De(e, t, n) {
  return n === void 0 ? t : `${t}=${e(n)}`;
}
function Kn(e, t, n) {
  return n === void 0 ? `element.hasAttribute(${e(t)})` : `element.getAttribute(${e(t)}) === ${e(n)}`;
}
function Je(e, t, n) {
  m(e, Je, this);
  const r = n !== void 0, i = e.hasAttribute(t), s = e.getAttribute(t);
  return {
    pass: r ? i && this.equals(s, n) : i,
    message: () => {
      const o = this.isNot ? "not to" : "to", f = i ? De(this.utils.stringify, t, s) : null, c = this.utils.matcherHint(
        `${this.isNot ? ".not" : ""}.toHaveAttribute`,
        "element",
        this.utils.printExpected(t),
        {
          secondArgument: r ? this.utils.printExpected(n) : void 0,
          comment: Kn(
            this.utils.stringify,
            t,
            n
          )
        }
      );
      return S(
        this,
        c,
        `Expected the element ${o} have attribute`,
        De(this.utils.stringify, t, n),
        "Received",
        f
      );
    }
  };
}
function Xn(e) {
  const t = e.pop();
  let n, r;
  return typeof t == "object" && !(t instanceof RegExp) ? (n = e, r = t) : (n = e.concat(t), r = { exact: !1 }), { expectedClassNames: n, options: r };
}
function Ie(e) {
  return e ? e.split(/\s+/).filter((t) => t.length > 0) : [];
}
function Te(e, t) {
  return e.every(
    (n) => typeof n == "string" ? t.includes(n) : t.some((r) => n.test(r))
  );
}
function Ze(e, ...t) {
  m(e, Ze, this);
  const { expectedClassNames: n, options: r } = Xn(t), i = Ie(e.getAttribute("class")), s = n.reduce(
    (f, c) => f.concat(
      typeof c == "string" || !c ? Ie(c) : c
    ),
    []
  ), o = s.some((f) => f instanceof RegExp);
  if (r.exact && o)
    throw new Error("Exact option does not support RegExp expected class names");
  return r.exact ? {
    pass: Te(s, i) && s.length === i.length,
    message: () => {
      const f = this.isNot ? "not to" : "to";
      return S(
        this,
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.toHaveClass`,
          "element",
          this.utils.printExpected(s.join(" "))
        ),
        `Expected the element ${f} have EXACTLY defined classes`,
        s.join(" "),
        "Received",
        i.join(" ")
      );
    }
  } : s.length > 0 ? {
    pass: Te(s, i),
    message: () => {
      const f = this.isNot ? "not to" : "to";
      return S(
        this,
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.toHaveClass`,
          "element",
          this.utils.printExpected(s.join(" "))
        ),
        `Expected the element ${f} have class`,
        s.join(" "),
        "Received",
        i.join(" ")
      );
    }
  } : {
    pass: this.isNot ? i.length > 0 : !1,
    message: () => this.isNot ? S(
      this,
      this.utils.matcherHint(".not.toHaveClass", "element", ""),
      "Expected the element to have classes",
      "(none)",
      "Received",
      i.join(" ")
    ) : [
      this.utils.matcherHint(".toHaveClass", "element"),
      "At least one expected class must be provided."
    ].join(`
`)
  };
}
function Qn(e, t) {
  const n = {}, r = e.createElement("div");
  return Object.keys(t).forEach((i) => {
    r.style[i] = t[i], n[i] = r.style[i];
  }), n;
}
function Jn(e, t) {
  return !!Object.keys(e).length && Object.entries(e).every(([n, r]) => {
    const i = n.startsWith("--"), s = [n];
    return i || s.push(n.toLowerCase()), s.some(
      (o) => t[o] === r || t.getPropertyValue(o) === r
    );
  });
}
function ke(e) {
  return Object.keys(e).sort().map((t) => `${t}: ${e[t]};`).join(`
`);
}
function Zn(e, t, n) {
  const r = Array.from(n).filter((s) => t[s] !== void 0).reduce(
    (s, o) => Object.assign(s, { [o]: n.getPropertyValue(o) }),
    {}
  );
  return e(ke(t), ke(r)).replace(`${Cn.red("+ Received")}
`, "");
}
function le(e, t) {
  m(e, le, this);
  const n = typeof t == "object" ? t : kn(t, le, this), { getComputedStyle: r } = e.ownerDocument.defaultView, i = Qn(e.ownerDocument, n), s = r(e);
  return {
    pass: Jn(i, s),
    message: () => {
      const o = `${this.isNot ? ".not" : ""}.toHaveStyle`;
      return [
        this.utils.matcherHint(o, "element", ""),
        Zn(this.utils.diff, i, s)
      ].join(`

`);
    }
  };
}
function et(e) {
  return m(e, et, this), {
    pass: e.ownerDocument.activeElement === e,
    message: () => [
      this.utils.matcherHint(
        `${this.isNot ? ".not" : ""}.toHaveFocus`,
        "element",
        ""
      ),
      "",
      ...this.isNot ? [
        "Received element is focused:",
        `  ${this.utils.printReceived(e)}`
      ] : [
        "Expected element with focus:",
        `  ${this.utils.printExpected(e)}`,
        "Received element with focus:",
        `  ${this.utils.printReceived(
          e.ownerDocument.activeElement
        )}`
      ]
    ].join(`
`)
  };
}
function er(e) {
  const t = [...new Set(e.map((n) => n.type))];
  if (t.length !== 1)
    throw new Error(
      "Multiple form elements with the same name must be of the same type"
    );
  switch (t[0]) {
    case "radio": {
      const n = e.find((r) => r.checked);
      return n ? n.value : void 0;
    }
    case "checkbox":
      return e.filter((n) => n.checked).map((n) => n.value);
    default:
      return e.map((n) => n.value);
  }
}
function tr(e, t) {
  const n = [...e.querySelectorAll(`[name="${Dn(t)}"]`)];
  if (n.length !== 0)
    switch (n.length) {
      case 1:
        return ze(n[0]);
      default:
        return er(n);
    }
}
function nr(e) {
  return /\[\]$/.test(e) ? e.slice(0, -2) : e;
}
function rr(e) {
  return Array.from(e.elements).map((n) => n.name).reduce(
    (n, r) => ({
      ...n,
      [nr(r)]: tr(e, r)
    }),
    {}
  );
}
function tt(e, t) {
  if (m(e, tt, this), !e.elements)
    throw new Error("toHaveFormValues must be called on a form or a fieldset");
  const n = rr(e);
  return {
    pass: Object.entries(t).every(
      ([r, i]) => pe(n[r], i)
    ),
    message: () => {
      const r = this.isNot ? "not to" : "to", i = `${this.isNot ? ".not" : ""}.toHaveFormValues`, s = Object.keys(n).filter((o) => t.hasOwnProperty(o)).reduce((o, f) => ({ ...o, [f]: n[f] }), {});
      return [
        this.utils.matcherHint(i, "element", ""),
        `Expected the element ${r} have form values`,
        this.utils.diff(t, s)
      ].join(`

`);
    }
  };
}
function ir(e) {
  const { getComputedStyle: t } = e.ownerDocument.defaultView, { display: n, visibility: r, opacity: i } = t(e);
  return n !== "none" && r !== "hidden" && r !== "collapse" && i !== "0" && i !== 0;
}
function sr(e, t) {
  let n;
  return t ? n = e.nodeName === "DETAILS" && t.nodeName !== "SUMMARY" ? e.hasAttribute("open") : !0 : n = e.nodeName === "DETAILS" ? e.hasAttribute("open") : !0, !e.hasAttribute("hidden") && n;
}
function nt(e, t) {
  return ir(e) && sr(e, t) && (!e.parentElement || nt(e.parentElement, e));
}
function rt(e) {
  m(e, rt, this);
  const t = e.ownerDocument === e.getRootNode({ composed: !0 }), n = t && nt(e);
  return {
    pass: n,
    message: () => {
      const r = n ? "is" : "is not";
      return [
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.toBeVisible`,
          "element",
          ""
        ),
        "",
        `Received element ${r} visible${t ? "" : " (element is not in the document)"}:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`
      ].join(`
`);
    }
  };
}
const or = [
  "fieldset",
  "input",
  "select",
  "optgroup",
  "option",
  "button",
  "textarea"
];
function ar(e, t) {
  return P(e) === "legend" && P(t) === "fieldset" && e.isSameNode(
    Array.from(t.children).find((n) => P(n) === "legend")
  );
}
function ur(e, t) {
  return st(t) && !ar(e, t);
}
function cr(e) {
  return e.includes("-");
}
function it(e) {
  const t = P(e);
  return or.includes(t) || cr(t);
}
function st(e) {
  return it(e) && e.hasAttribute("disabled");
}
function ot(e) {
  const t = e.parentElement;
  return !!t && (ur(e, t) || ot(t));
}
function at(e) {
  return it(e) && (st(e) || ot(e));
}
function ut(e) {
  m(e, ut, this);
  const t = at(e);
  return {
    pass: t,
    message: () => {
      const n = t ? "is" : "is not";
      return [
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.toBeDisabled`,
          "element",
          ""
        ),
        "",
        `Received element ${n} disabled:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`
      ].join(`
`);
    }
  };
}
function ct(e) {
  m(e, ct, this);
  const t = !at(e);
  return {
    pass: t,
    message: () => {
      const n = t ? "is" : "is not";
      return [
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.toBeEnabled`,
          "element",
          ""
        ),
        "",
        `Received element ${n} enabled:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`
      ].join(`
`);
    }
  };
}
const lr = ["select", "textarea"], fr = ["input", "select", "textarea"], dr = [
  "color",
  "hidden",
  "range",
  "submit",
  "image",
  "reset"
], pr = [
  "checkbox",
  "combobox",
  "gridcell",
  "listbox",
  "radiogroup",
  "spinbutton",
  "textbox",
  "tree"
];
function hr(e) {
  return lr.includes(P(e)) && e.hasAttribute("required");
}
function gr(e) {
  return P(e) === "input" && e.hasAttribute("required") && (e.hasAttribute("type") && !dr.includes(e.getAttribute("type")) || !e.hasAttribute("type"));
}
function mr(e) {
  return e.hasAttribute("aria-required") && e.getAttribute("aria-required") === "true" && (fr.includes(P(e)) || e.hasAttribute("role") && pr.includes(e.getAttribute("role")));
}
function lt(e) {
  m(e, lt, this);
  const t = hr(e) || gr(e) || mr(e);
  return {
    pass: t,
    message: () => {
      const n = t ? "is" : "is not";
      return [
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.toBeRequired`,
          "element",
          ""
        ),
        "",
        `Received element ${n} required:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`
      ].join(`
`);
    }
  };
}
const br = ["form", "input", "select", "textarea"];
function vr(e) {
  return e.hasAttribute("aria-invalid") && e.getAttribute("aria-invalid") !== "false";
}
function yr(e) {
  return br.includes(P(e));
}
function ft(e) {
  const t = vr(e);
  return yr(e) ? t || !e.checkValidity() : t;
}
function dt(e) {
  m(e, dt, this);
  const t = ft(e);
  return {
    pass: t,
    message: () => {
      const n = t ? "is" : "is not";
      return [
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.toBeInvalid`,
          "element",
          ""
        ),
        "",
        `Received element ${n} currently invalid:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`
      ].join(`
`);
    }
  };
}
function pt(e) {
  m(e, pt, this);
  const t = !ft(e);
  return {
    pass: t,
    message: () => {
      const n = t ? "is" : "is not";
      return [
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.toBeValid`,
          "element",
          ""
        ),
        "",
        `Received element ${n} currently valid:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`
      ].join(`
`);
    }
  };
}
function ht(e, t) {
  if (m(e, ht, this), e.tagName.toLowerCase() === "input" && ["checkbox", "radio"].includes(e.type))
    throw new Error(
      "input with type=checkbox or type=radio cannot be used with .toHaveValue(). Use .toBeChecked() for type=checkbox or .toHaveFormValues() instead"
    );
  const n = ze(e), r = t !== void 0;
  let i = t, s = n;
  return t == n && t !== n && (i = `${t} (${typeof t})`, s = `${n} (${typeof n})`), {
    pass: r ? pe(n, t) : !!n,
    message: () => {
      const o = this.isNot ? "not to" : "to", f = this.utils.matcherHint(
        `${this.isNot ? ".not" : ""}.toHaveValue`,
        "element",
        t
      );
      return S(
        this,
        f,
        `Expected the element ${o} have value`,
        r ? i : "(any)",
        "Received",
        s
      );
    }
  };
}
function gt(e, t) {
  m(e, gt, this);
  const n = e.tagName.toLowerCase();
  if (!["select", "input", "textarea"].includes(n))
    throw new Error(
      ".toHaveDisplayValue() currently supports only input, textarea or select elements, try with another matcher instead."
    );
  if (n === "input" && ["radio", "checkbox"].includes(e.type))
    throw new Error(
      `.toHaveDisplayValue() currently does not support input[type="${e.type}"], try with another matcher instead.`
    );
  const r = Er(n, e), i = wr(t), s = i.filter(
    (c) => r.some(
      (b) => c instanceof RegExp ? c.test(b) : this.equals(b, String(c))
    )
  ).length, o = s === r.length, f = s === i.length;
  return {
    pass: o && f,
    message: () => S(
      this,
      this.utils.matcherHint(
        `${this.isNot ? ".not" : ""}.toHaveDisplayValue`,
        "element",
        ""
      ),
      `Expected element ${this.isNot ? "not " : ""}to have display value`,
      t,
      "Received",
      r
    )
  };
}
function Er(e, t) {
  return e === "select" ? Array.from(t).filter((n) => n.selected).map((n) => n.textContent) : [t.value];
}
function wr(e) {
  return e instanceof Array ? e : [e];
}
function mt(e) {
  m(e, mt, this);
  const t = () => e.tagName.toLowerCase() === "input" && ["checkbox", "radio"].includes(e.type), n = () => bt(e.getAttribute("role")) && ["true", "false"].includes(e.getAttribute("aria-checked"));
  if (!t() && !n())
    return {
      pass: !1,
      message: () => `only inputs with type="checkbox" or type="radio" or elements with ${xr()} and a valid aria-checked attribute can be used with .toBeChecked(). Use .toHaveValue() instead`
    };
  const r = () => t() ? e.checked : e.getAttribute("aria-checked") === "true";
  return {
    pass: r(),
    message: () => {
      const i = r() ? "is" : "is not";
      return [
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.toBeChecked`,
          "element",
          ""
        ),
        "",
        `Received element ${i} checked:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`
      ].join(`
`);
    }
  };
}
function xr() {
  return _n(
    Ar().map((e) => `role="${e}"`),
    { lastWordConnector: " or " }
  );
}
function Ar() {
  return de.roles.keys().filter(bt);
}
function bt(e) {
  return de.roles.get(e)?.props["aria-checked"] !== void 0;
}
function vt(e) {
  m(e, vt, this);
  const t = () => e.tagName.toLowerCase() === "input" && e.type === "checkbox", n = () => e.getAttribute("role") === "checkbox";
  if (!t() && !n())
    return {
      pass: !1,
      message: () => 'only inputs with type="checkbox" or elements with role="checkbox" and a valid aria-checked attribute can be used with .toBePartiallyChecked(). Use .toHaveValue() instead'
    };
  const r = () => {
    const i = e.getAttribute("aria-checked") === "mixed";
    return t() && e.indeterminate || i;
  };
  return {
    pass: r(),
    message: () => {
      const i = r() ? "is" : "is not";
      return [
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.toBePartiallyChecked`,
          "element",
          ""
        ),
        "",
        `Received element ${i} partially checked:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`
      ].join(`
`);
    }
  };
}
function yt(e, t) {
  Y(
    "toHaveDescription",
    "Please use toHaveAccessibleDescription."
  ), m(e, yt, this);
  const n = t !== void 0, i = (e.getAttribute("aria-describedby") || "").split(/\s+/).filter(Boolean);
  let s = "";
  if (i.length > 0) {
    const o = e.ownerDocument, f = i.map((c) => o.getElementById(c)).filter(Boolean);
    s = K(f.map((c) => c.textContent).join(" "));
  }
  return {
    pass: n ? t instanceof RegExp ? t.test(s) : this.equals(s, t) : !!s,
    message: () => {
      const o = this.isNot ? "not to" : "to";
      return S(
        this,
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.toHaveDescription`,
          "element",
          ""
        ),
        `Expected the element ${o} have description`,
        this.utils.printExpected(t),
        "Received",
        this.utils.printReceived(s)
      );
    }
  };
}
function Et(e, t) {
  if (Y("toHaveErrorMessage", "Please use toHaveAccessibleErrorMessage."), m(e, Et, this), !e.hasAttribute("aria-invalid") || e.getAttribute("aria-invalid") === "false") {
    const o = this.isNot ? ".not" : "";
    return {
      pass: !1,
      message: () => S(
        this,
        this.utils.matcherHint(`${o}.toHaveErrorMessage`, "element", ""),
        "Expected the element to have invalid state indicated by",
        'aria-invalid="true"',
        "Received",
        e.hasAttribute("aria-invalid") ? `aria-invalid="${e.getAttribute("aria-invalid")}"` : this.utils.printReceived("")
      )
    };
  }
  const n = t !== void 0, i = (e.getAttribute("aria-errormessage") || "").split(/\s+/).filter(Boolean);
  let s = "";
  if (i.length > 0) {
    const o = e.ownerDocument, f = i.map((c) => o.getElementById(c)).filter(Boolean);
    s = K(
      f.map((c) => c.textContent).join(" ")
    );
  }
  return {
    pass: n ? t instanceof RegExp ? t.test(s) : this.equals(s, t) : !!s,
    message: () => {
      const o = this.isNot ? "not to" : "to";
      return S(
        this,
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.toHaveErrorMessage`,
          "element",
          ""
        ),
        `Expected the element ${o} have error message`,
        this.utils.printExpected(t),
        "Received",
        this.utils.printReceived(s)
      );
    }
  };
}
function Sr(e) {
  const t = e.ownerDocument.getSelection();
  if (["input", "textarea"].includes(e.tagName.toLowerCase()))
    return ["radio", "checkbox"].includes(e.type) ? "" : e.value.toString().substring(e.selectionStart, e.selectionEnd);
  if (t.anchorNode === null || t.focusNode === null)
    return "";
  const n = t.getRangeAt(0), r = e.ownerDocument.createRange();
  if (t.containsNode(e, !1))
    r.selectNodeContents(e), t.removeAllRanges(), t.addRange(r);
  else if (!(e.contains(t.anchorNode) && e.contains(t.focusNode))) {
    const s = e === n.startContainer || e.contains(n.startContainer), o = e === n.endContainer || e.contains(n.endContainer);
    t.removeAllRanges(), (s || o) && (r.selectNodeContents(e), s && r.setStart(
      n.startContainer,
      n.startOffset
    ), o && r.setEnd(
      n.endContainer,
      n.endOffset
    ), t.addRange(r));
  }
  const i = t.toString();
  return t.removeAllRanges(), t.addRange(n), i;
}
function wt(e, t) {
  m(e, wt, this);
  const n = t !== void 0;
  if (n && typeof t != "string")
    throw new Error("expected selection must be a string or undefined");
  const r = Sr(e);
  return {
    pass: n ? pe(r, t) : !!r,
    message: () => {
      const i = this.isNot ? "not to" : "to", s = this.utils.matcherHint(
        `${this.isNot ? ".not" : ""}.toHaveSelection`,
        "element",
        t
      );
      return S(
        this,
        s,
        `Expected the element ${i} have selection`,
        n ? t : "(any)",
        "Received",
        r
      );
    }
  };
}
function xt(e) {
  m(e, xt, this);
  const t = (e.getAttribute("role") || "").split(" ").map((o) => o.trim()), n = e.tagName.toLowerCase() === "button" || e.tagName.toLowerCase() === "input" && e.type === "button" || t.includes("button"), r = e.getAttribute("aria-pressed");
  return !n || !(r === "true" || r === "false") ? {
    pass: !1,
    message: () => 'Only button or input with type="button" or element with role="button" and a valid aria-pressed attribute can be used with .toBePressed()'
  } : {
    pass: n && r === "true",
    message: () => {
      const o = this.utils.matcherHint(
        `${this.isNot ? ".not" : ""}.toBePressed`,
        "element",
        ""
      );
      return S(
        this,
        o,
        "Expected element to have",
        `aria-pressed="${this.isNot ? "false" : "true"}"`,
        "Received",
        `aria-pressed="${r}"`
      );
    }
  };
}
function At(e) {
  m(e, At, this);
  const t = (e.getAttribute("role") || "").split(" ").map((o) => o.trim()), n = e.tagName.toLowerCase() === "button" || e.tagName.toLowerCase() === "input" && e.type === "button" || t.includes("button"), r = e.getAttribute("aria-pressed");
  return !n || !(r === "true" || r === "false" || r === "mixed") ? {
    pass: !1,
    message: () => 'Only button or input with type="button" or element with role="button" and a valid aria-pressed attribute can be used with .toBePartiallyPressed()'
  } : {
    pass: n && r === "mixed",
    message: () => {
      const o = this.isNot ? "not to" : "to", f = this.utils.matcherHint(
        `${this.isNot ? ".not" : ""}.toBePartiallyPressed`,
        "element",
        ""
      );
      return S(
        this,
        f,
        `Expected element ${o} have`,
        'aria-pressed="mixed"',
        "Received",
        `aria-pressed="${r}"`
      );
    }
  };
}
var Rr = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  toBeChecked: mt,
  toBeDisabled: ut,
  toBeEmpty: We,
  toBeEmptyDOMElement: Ye,
  toBeEnabled: ct,
  toBeInTheDOM: se,
  toBeInTheDocument: Ue,
  toBeInvalid: dt,
  toBePartiallyChecked: vt,
  toBePartiallyPressed: At,
  toBePressed: xt,
  toBeRequired: lt,
  toBeValid: pt,
  toBeVisible: rt,
  toContainElement: oe,
  toContainHTML: Ke,
  toHaveAccessibleDescription: ae,
  toHaveAccessibleErrorMessage: Qe,
  toHaveAccessibleName: ce,
  toHaveAttribute: Je,
  toHaveClass: Ze,
  toHaveDescription: yt,
  toHaveDisplayValue: gt,
  toHaveErrorMessage: Et,
  toHaveFocus: et,
  toHaveFormValues: tt,
  toHaveRole: ue,
  toHaveSelection: wt,
  toHaveStyle: le,
  toHaveTextContent: Xe,
  toHaveValue: ht
});
expect.extend(Rr);
