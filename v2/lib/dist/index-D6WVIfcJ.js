var k = {}, H = {}, Mt = {}, B = {}, At;
function fn() {
  if (At) return B;
  At = 1, Object.defineProperty(B, "__esModule", {
    value: !0
  }), B.default = void 0;
  function r() {
    var b = this, h = 0, q = {
      "@@iterator": function() {
        return q;
      },
      next: function() {
        if (h < b.length) {
          var O = b[h];
          return h = h + 1, {
            done: !1,
            value: O
          };
        } else
          return {
            done: !0
          };
      }
    };
    return q;
  }
  var e = r;
  return B.default = e, B;
}
var $t;
function xt() {
  if ($t) return Mt;
  $t = 1, Object.defineProperty(Mt, "__esModule", {
    value: !0
  }), Mt.default = h;
  var r = e(fn());
  function e(q) {
    return q && q.__esModule ? q : { default: q };
  }
  function b(q) {
    "@babel/helpers - typeof";
    return b = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(R) {
      return typeof R;
    } : function(R) {
      return R && typeof Symbol == "function" && R.constructor === Symbol && R !== Symbol.prototype ? "symbol" : typeof R;
    }, b(q);
  }
  function h(q, R) {
    return typeof Symbol == "function" && b(Symbol.iterator) === "symbol" && Object.defineProperty(q, Symbol.iterator, {
      value: r.default.bind(R)
    }), q;
  }
  return Mt;
}
var jt;
function mn() {
  if (jt) return H;
  jt = 1, Object.defineProperty(H, "__esModule", {
    value: !0
  }), H.default = void 0;
  var r = e(xt());
  function e(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function b(t, c) {
    return R(t) || q(t, c) || F(t, c) || h();
  }
  function h() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function q(t, c) {
    var a = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
    if (a != null) {
      var p = [], _ = !0, u = !1, f, d;
      try {
        for (a = a.call(t); !(_ = (f = a.next()).done) && (p.push(f.value), !(c && p.length === c)); _ = !0)
          ;
      } catch (m) {
        u = !0, d = m;
      } finally {
        try {
          !_ && a.return != null && a.return();
        } finally {
          if (u) throw d;
        }
      }
      return p;
    }
  }
  function R(t) {
    if (Array.isArray(t)) return t;
  }
  function O(t, c) {
    var a = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
    if (!a) {
      if (Array.isArray(t) || (a = F(t)) || c) {
        a && (t = a);
        var p = 0, _ = function() {
        };
        return { s: _, n: function() {
          return p >= t.length ? { done: !0 } : { done: !1, value: t[p++] };
        }, e: function(i) {
          throw i;
        }, f: _ };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var u = !0, f = !1, d;
    return { s: function() {
      a = a.call(t);
    }, n: function() {
      var i = a.next();
      return u = i.done, i;
    }, e: function(i) {
      f = !0, d = i;
    }, f: function() {
      try {
        !u && a.return != null && a.return();
      } finally {
        if (f) throw d;
      }
    } };
  }
  function F(t, c) {
    if (t) {
      if (typeof t == "string") return E(t, c);
      var a = Object.prototype.toString.call(t).slice(8, -1);
      if (a === "Object" && t.constructor && (a = t.constructor.name), a === "Map" || a === "Set") return Array.from(t);
      if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return E(t, c);
    }
  }
  function E(t, c) {
    (c == null || c > t.length) && (c = t.length);
    for (var a = 0, p = new Array(c); a < c; a++)
      p[a] = t[a];
    return p;
  }
  var P = [["aria-activedescendant", {
    type: "id"
  }], ["aria-atomic", {
    type: "boolean"
  }], ["aria-autocomplete", {
    type: "token",
    values: ["inline", "list", "both", "none"]
  }], ["aria-braillelabel", {
    type: "string"
  }], ["aria-brailleroledescription", {
    type: "string"
  }], ["aria-busy", {
    type: "boolean"
  }], ["aria-checked", {
    type: "tristate"
  }], ["aria-colcount", {
    type: "integer"
  }], ["aria-colindex", {
    type: "integer"
  }], ["aria-colspan", {
    type: "integer"
  }], ["aria-controls", {
    type: "idlist"
  }], ["aria-current", {
    type: "token",
    values: ["page", "step", "location", "date", "time", !0, !1]
  }], ["aria-describedby", {
    type: "idlist"
  }], ["aria-description", {
    type: "string"
  }], ["aria-details", {
    type: "id"
  }], ["aria-disabled", {
    type: "boolean"
  }], ["aria-dropeffect", {
    type: "tokenlist",
    values: ["copy", "execute", "link", "move", "none", "popup"]
  }], ["aria-errormessage", {
    type: "id"
  }], ["aria-expanded", {
    type: "boolean",
    allowundefined: !0
  }], ["aria-flowto", {
    type: "idlist"
  }], ["aria-grabbed", {
    type: "boolean",
    allowundefined: !0
  }], ["aria-haspopup", {
    type: "token",
    values: [!1, !0, "menu", "listbox", "tree", "grid", "dialog"]
  }], ["aria-hidden", {
    type: "boolean",
    allowundefined: !0
  }], ["aria-invalid", {
    type: "token",
    values: ["grammar", !1, "spelling", !0]
  }], ["aria-keyshortcuts", {
    type: "string"
  }], ["aria-label", {
    type: "string"
  }], ["aria-labelledby", {
    type: "idlist"
  }], ["aria-level", {
    type: "integer"
  }], ["aria-live", {
    type: "token",
    values: ["assertive", "off", "polite"]
  }], ["aria-modal", {
    type: "boolean"
  }], ["aria-multiline", {
    type: "boolean"
  }], ["aria-multiselectable", {
    type: "boolean"
  }], ["aria-orientation", {
    type: "token",
    values: ["vertical", "undefined", "horizontal"]
  }], ["aria-owns", {
    type: "idlist"
  }], ["aria-placeholder", {
    type: "string"
  }], ["aria-posinset", {
    type: "integer"
  }], ["aria-pressed", {
    type: "tristate"
  }], ["aria-readonly", {
    type: "boolean"
  }], ["aria-relevant", {
    type: "tokenlist",
    values: ["additions", "all", "removals", "text"]
  }], ["aria-required", {
    type: "boolean"
  }], ["aria-roledescription", {
    type: "string"
  }], ["aria-rowcount", {
    type: "integer"
  }], ["aria-rowindex", {
    type: "integer"
  }], ["aria-rowspan", {
    type: "integer"
  }], ["aria-selected", {
    type: "boolean",
    allowundefined: !0
  }], ["aria-setsize", {
    type: "integer"
  }], ["aria-sort", {
    type: "token",
    values: ["ascending", "descending", "none", "other"]
  }], ["aria-valuemax", {
    type: "number"
  }], ["aria-valuemin", {
    type: "number"
  }], ["aria-valuenow", {
    type: "number"
  }], ["aria-valuetext", {
    type: "string"
  }]], g = {
    entries: function() {
      return P;
    },
    forEach: function(c) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, p = O(P), _;
      try {
        for (p.s(); !(_ = p.n()).done; ) {
          var u = b(_.value, 2), f = u[0], d = u[1];
          c.call(a, d, f, P);
        }
      } catch (m) {
        p.e(m);
      } finally {
        p.f();
      }
    },
    get: function(c) {
      var a = P.find(function(p) {
        return p[0] === c;
      });
      return a && a[1];
    },
    has: function(c) {
      return !!g.get(c);
    },
    keys: function() {
      return P.map(function(c) {
        var a = b(c, 1), p = a[0];
        return p;
      });
    },
    values: function() {
      return P.map(function(c) {
        var a = b(c, 2), p = a[1];
        return p;
      });
    }
  }, x = (0, r.default)(g, g.entries());
  return H.default = x, H;
}
var I = {}, Lt;
function vn() {
  if (Lt) return I;
  Lt = 1, Object.defineProperty(I, "__esModule", {
    value: !0
  }), I.default = void 0;
  var r = e(xt());
  function e(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function b(t, c) {
    return R(t) || q(t, c) || F(t, c) || h();
  }
  function h() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function q(t, c) {
    var a = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
    if (a != null) {
      var p = [], _ = !0, u = !1, f, d;
      try {
        for (a = a.call(t); !(_ = (f = a.next()).done) && (p.push(f.value), !(c && p.length === c)); _ = !0)
          ;
      } catch (m) {
        u = !0, d = m;
      } finally {
        try {
          !_ && a.return != null && a.return();
        } finally {
          if (u) throw d;
        }
      }
      return p;
    }
  }
  function R(t) {
    if (Array.isArray(t)) return t;
  }
  function O(t, c) {
    var a = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
    if (!a) {
      if (Array.isArray(t) || (a = F(t)) || c) {
        a && (t = a);
        var p = 0, _ = function() {
        };
        return { s: _, n: function() {
          return p >= t.length ? { done: !0 } : { done: !1, value: t[p++] };
        }, e: function(i) {
          throw i;
        }, f: _ };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var u = !0, f = !1, d;
    return { s: function() {
      a = a.call(t);
    }, n: function() {
      var i = a.next();
      return u = i.done, i;
    }, e: function(i) {
      f = !0, d = i;
    }, f: function() {
      try {
        !u && a.return != null && a.return();
      } finally {
        if (f) throw d;
      }
    } };
  }
  function F(t, c) {
    if (t) {
      if (typeof t == "string") return E(t, c);
      var a = Object.prototype.toString.call(t).slice(8, -1);
      if (a === "Object" && t.constructor && (a = t.constructor.name), a === "Map" || a === "Set") return Array.from(t);
      if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return E(t, c);
    }
  }
  function E(t, c) {
    (c == null || c > t.length) && (c = t.length);
    for (var a = 0, p = new Array(c); a < c; a++)
      p[a] = t[a];
    return p;
  }
  var P = [["a", {
    reserved: !1
  }], ["abbr", {
    reserved: !1
  }], ["acronym", {
    reserved: !1
  }], ["address", {
    reserved: !1
  }], ["applet", {
    reserved: !1
  }], ["area", {
    reserved: !1
  }], ["article", {
    reserved: !1
  }], ["aside", {
    reserved: !1
  }], ["audio", {
    reserved: !1
  }], ["b", {
    reserved: !1
  }], ["base", {
    reserved: !0
  }], ["bdi", {
    reserved: !1
  }], ["bdo", {
    reserved: !1
  }], ["big", {
    reserved: !1
  }], ["blink", {
    reserved: !1
  }], ["blockquote", {
    reserved: !1
  }], ["body", {
    reserved: !1
  }], ["br", {
    reserved: !1
  }], ["button", {
    reserved: !1
  }], ["canvas", {
    reserved: !1
  }], ["caption", {
    reserved: !1
  }], ["center", {
    reserved: !1
  }], ["cite", {
    reserved: !1
  }], ["code", {
    reserved: !1
  }], ["col", {
    reserved: !0
  }], ["colgroup", {
    reserved: !0
  }], ["content", {
    reserved: !1
  }], ["data", {
    reserved: !1
  }], ["datalist", {
    reserved: !1
  }], ["dd", {
    reserved: !1
  }], ["del", {
    reserved: !1
  }], ["details", {
    reserved: !1
  }], ["dfn", {
    reserved: !1
  }], ["dialog", {
    reserved: !1
  }], ["dir", {
    reserved: !1
  }], ["div", {
    reserved: !1
  }], ["dl", {
    reserved: !1
  }], ["dt", {
    reserved: !1
  }], ["em", {
    reserved: !1
  }], ["embed", {
    reserved: !1
  }], ["fieldset", {
    reserved: !1
  }], ["figcaption", {
    reserved: !1
  }], ["figure", {
    reserved: !1
  }], ["font", {
    reserved: !1
  }], ["footer", {
    reserved: !1
  }], ["form", {
    reserved: !1
  }], ["frame", {
    reserved: !1
  }], ["frameset", {
    reserved: !1
  }], ["h1", {
    reserved: !1
  }], ["h2", {
    reserved: !1
  }], ["h3", {
    reserved: !1
  }], ["h4", {
    reserved: !1
  }], ["h5", {
    reserved: !1
  }], ["h6", {
    reserved: !1
  }], ["head", {
    reserved: !0
  }], ["header", {
    reserved: !1
  }], ["hgroup", {
    reserved: !1
  }], ["hr", {
    reserved: !1
  }], ["html", {
    reserved: !0
  }], ["i", {
    reserved: !1
  }], ["iframe", {
    reserved: !1
  }], ["img", {
    reserved: !1
  }], ["input", {
    reserved: !1
  }], ["ins", {
    reserved: !1
  }], ["kbd", {
    reserved: !1
  }], ["keygen", {
    reserved: !1
  }], ["label", {
    reserved: !1
  }], ["legend", {
    reserved: !1
  }], ["li", {
    reserved: !1
  }], ["link", {
    reserved: !0
  }], ["main", {
    reserved: !1
  }], ["map", {
    reserved: !1
  }], ["mark", {
    reserved: !1
  }], ["marquee", {
    reserved: !1
  }], ["menu", {
    reserved: !1
  }], ["menuitem", {
    reserved: !1
  }], ["meta", {
    reserved: !0
  }], ["meter", {
    reserved: !1
  }], ["nav", {
    reserved: !1
  }], ["noembed", {
    reserved: !0
  }], ["noscript", {
    reserved: !0
  }], ["object", {
    reserved: !1
  }], ["ol", {
    reserved: !1
  }], ["optgroup", {
    reserved: !1
  }], ["option", {
    reserved: !1
  }], ["output", {
    reserved: !1
  }], ["p", {
    reserved: !1
  }], ["param", {
    reserved: !0
  }], ["picture", {
    reserved: !0
  }], ["pre", {
    reserved: !1
  }], ["progress", {
    reserved: !1
  }], ["q", {
    reserved: !1
  }], ["rp", {
    reserved: !1
  }], ["rt", {
    reserved: !1
  }], ["rtc", {
    reserved: !1
  }], ["ruby", {
    reserved: !1
  }], ["s", {
    reserved: !1
  }], ["samp", {
    reserved: !1
  }], ["script", {
    reserved: !0
  }], ["section", {
    reserved: !1
  }], ["select", {
    reserved: !1
  }], ["small", {
    reserved: !1
  }], ["source", {
    reserved: !0
  }], ["spacer", {
    reserved: !1
  }], ["span", {
    reserved: !1
  }], ["strike", {
    reserved: !1
  }], ["strong", {
    reserved: !1
  }], ["style", {
    reserved: !0
  }], ["sub", {
    reserved: !1
  }], ["summary", {
    reserved: !1
  }], ["sup", {
    reserved: !1
  }], ["table", {
    reserved: !1
  }], ["tbody", {
    reserved: !1
  }], ["td", {
    reserved: !1
  }], ["textarea", {
    reserved: !1
  }], ["tfoot", {
    reserved: !1
  }], ["th", {
    reserved: !1
  }], ["thead", {
    reserved: !1
  }], ["time", {
    reserved: !1
  }], ["title", {
    reserved: !0
  }], ["tr", {
    reserved: !1
  }], ["track", {
    reserved: !0
  }], ["tt", {
    reserved: !1
  }], ["u", {
    reserved: !1
  }], ["ul", {
    reserved: !1
  }], ["var", {
    reserved: !1
  }], ["video", {
    reserved: !1
  }], ["wbr", {
    reserved: !1
  }], ["xmp", {
    reserved: !1
  }]], g = {
    entries: function() {
      return P;
    },
    forEach: function(c) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, p = O(P), _;
      try {
        for (p.s(); !(_ = p.n()).done; ) {
          var u = b(_.value, 2), f = u[0], d = u[1];
          c.call(a, d, f, P);
        }
      } catch (m) {
        p.e(m);
      } finally {
        p.f();
      }
    },
    get: function(c) {
      var a = P.find(function(p) {
        return p[0] === c;
      });
      return a && a[1];
    },
    has: function(c) {
      return !!g.get(c);
    },
    keys: function() {
      return P.map(function(c) {
        var a = b(c, 1), p = a[0];
        return p;
      });
    },
    values: function() {
      return P.map(function(c) {
        var a = b(c, 2), p = a[1];
        return p;
      });
    }
  }, x = (0, r.default)(g, g.entries());
  return I.default = x, I;
}
var U = {}, V = {}, G = {}, Dt;
function Rn() {
  if (Dt) return G;
  Dt = 1, Object.defineProperty(G, "__esModule", {
    value: !0
  }), G.default = void 0;
  var r = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget"]]
  }, e = r;
  return G.default = e, G;
}
var z = {}, Ht;
function bn() {
  if (Ht) return z;
  Ht = 1, Object.defineProperty(z, "__esModule", {
    value: !0
  }), z.default = void 0;
  var r = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-activedescendant": null,
      "aria-disabled": null
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget"]]
  }, e = r;
  return z.default = e, z;
}
var X = {}, Bt;
function qn() {
  if (Bt) return X;
  Bt = 1, Object.defineProperty(X, "__esModule", {
    value: !0
  }), X.default = void 0;
  var r = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null
    },
    relatedConcepts: [{
      concept: {
        name: "input"
      },
      module: "XForms"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget"]]
  }, e = r;
  return X.default = e, X;
}
var W = {}, It;
function hn() {
  if (It) return W;
  It = 1, Object.defineProperty(W, "__esModule", {
    value: !0
  }), W.default = void 0;
  var r = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, e = r;
  return W.default = e, W;
}
var Q = {}, Ut;
function Cn() {
  if (Ut) return Q;
  Ut = 1, Object.defineProperty(Q, "__esModule", {
    value: !0
  }), Q.default = void 0;
  var r = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-valuemax": null,
      "aria-valuemin": null,
      "aria-valuenow": null
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure"]]
  }, e = r;
  return Q.default = e, Q;
}
var J = {}, Vt;
function yn() {
  if (Vt) return J;
  Vt = 1, Object.defineProperty(J, "__esModule", {
    value: !0
  }), J.default = void 0;
  var r = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: [],
    prohibitedProps: [],
    props: {
      "aria-atomic": null,
      "aria-busy": null,
      "aria-controls": null,
      "aria-current": null,
      "aria-describedby": null,
      "aria-details": null,
      "aria-dropeffect": null,
      "aria-flowto": null,
      "aria-grabbed": null,
      "aria-hidden": null,
      "aria-keyshortcuts": null,
      "aria-label": null,
      "aria-labelledby": null,
      "aria-live": null,
      "aria-owns": null,
      "aria-relevant": null,
      "aria-roledescription": null
    },
    relatedConcepts: [{
      concept: {
        name: "role"
      },
      module: "XHTML"
    }, {
      concept: {
        name: "type"
      },
      module: "Dublin Core"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: []
  }, e = r;
  return J.default = e, J;
}
var Y = {}, Gt;
function _n() {
  if (Gt) return Y;
  Gt = 1, Object.defineProperty(Y, "__esModule", {
    value: !0
  }), Y.default = void 0;
  var r = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: [],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "frontmatter"
      },
      module: "DTB"
    }, {
      concept: {
        name: "level"
      },
      module: "DTB"
    }, {
      concept: {
        name: "level"
      },
      module: "SMIL"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure"]]
  }, e = r;
  return Y.default = e, Y;
}
var K = {}, zt;
function Pn() {
  if (zt) return K;
  zt = 1, Object.defineProperty(K, "__esModule", {
    value: !0
  }), K.default = void 0;
  var r = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure"]]
  }, e = r;
  return K.default = e, K;
}
var Z = {}, Xt;
function gn() {
  if (Xt) return Z;
  Xt = 1, Object.defineProperty(Z, "__esModule", {
    value: !0
  }), Z.default = void 0;
  var r = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-orientation": null
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "composite"], ["roletype", "structure", "section", "group"]]
  }, e = r;
  return Z.default = e, Z;
}
var ee = {}, Wt;
function xn() {
  if (Wt) return ee;
  Wt = 1, Object.defineProperty(ee, "__esModule", {
    value: !0
  }), ee.default = void 0;
  var r = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: [],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype"]]
  }, e = r;
  return ee.default = e, ee;
}
var re = {}, Qt;
function wn() {
  if (Qt) return re;
  Qt = 1, Object.defineProperty(re, "__esModule", {
    value: !0
  }), re.default = void 0;
  var r = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: [],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype"]]
  }, e = r;
  return re.default = e, re;
}
var te = {}, Jt;
function Mn() {
  if (Jt) return te;
  Jt = 1, Object.defineProperty(te, "__esModule", {
    value: !0
  }), te.default = void 0;
  var r = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-modal": null
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype"]]
  }, e = r;
  return te.default = e, te;
}
var Yt;
function On() {
  if (Yt) return V;
  Yt = 1, Object.defineProperty(V, "__esModule", {
    value: !0
  }), V.default = void 0;
  var r = t(Rn()), e = t(bn()), b = t(qn()), h = t(hn()), q = t(Cn()), R = t(yn()), O = t(_n()), F = t(Pn()), E = t(gn()), P = t(xn()), g = t(wn()), x = t(Mn());
  function t(p) {
    return p && p.__esModule ? p : { default: p };
  }
  var c = [["command", r.default], ["composite", e.default], ["input", b.default], ["landmark", h.default], ["range", q.default], ["roletype", R.default], ["section", O.default], ["sectionhead", F.default], ["select", E.default], ["structure", P.default], ["widget", g.default], ["window", x.default]], a = c;
  return V.default = a, V;
}
var ae = {}, oe = {}, Kt;
function En() {
  if (Kt) return oe;
  Kt = 1, Object.defineProperty(oe, "__esModule", {
    value: !0
  }), oe.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-atomic": "true",
      "aria-live": "assertive"
    },
    relatedConcepts: [{
      concept: {
        name: "alert"
      },
      module: "XForms"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, e = r;
  return oe.default = e, oe;
}
var le = {}, Zt;
function Tn() {
  if (Zt) return le;
  Zt = 1, Object.defineProperty(le, "__esModule", {
    value: !0
  }), le.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "alert"
      },
      module: "XForms"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "alert"], ["roletype", "window", "dialog"]]
  }, e = r;
  return le.default = e, le;
}
var ne = {}, ea;
function Sn() {
  if (ea) return ne;
  ea = 1, Object.defineProperty(ne, "__esModule", {
    value: !0
  }), ne.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-activedescendant": null,
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "Device Independence Delivery Unit"
      }
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure"]]
  }, e = r;
  return ne.default = e, ne;
}
var ue = {}, ra;
function Fn() {
  if (ra) return ue;
  ra = 1, Object.defineProperty(ue, "__esModule", {
    value: !0
  }), ue.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-posinset": null,
      "aria-setsize": null
    },
    relatedConcepts: [{
      concept: {
        name: "article"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "document"]]
  }, e = r;
  return ue.default = e, ue;
}
var ie = {}, ta;
function Nn() {
  if (ta) return ie;
  ta = 1, Object.defineProperty(ie, "__esModule", {
    value: !0
  }), ie.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        constraints: ["scoped to the body element"],
        name: "header"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, e = r;
  return ie.default = e, ie;
}
var se = {}, aa;
function kn() {
  if (aa) return se;
  aa = 1, Object.defineProperty(se, "__esModule", {
    value: !0
  }), se.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "blockquote"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, e = r;
  return se.default = e, se;
}
var de = {}, oa;
function An() {
  if (oa) return de;
  oa = 1, Object.defineProperty(de, "__esModule", {
    value: !0
  }), de.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-pressed": null
    },
    relatedConcepts: [{
      concept: {
        attributes: [{
          name: "type",
          value: "button"
        }],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          name: "type",
          value: "image"
        }],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          name: "type",
          value: "reset"
        }],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          name: "type",
          value: "submit"
        }],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        name: "button"
      },
      module: "HTML"
    }, {
      concept: {
        name: "trigger"
      },
      module: "XForms"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "command"]]
  }, e = r;
  return de.default = e, de;
}
var ce = {}, la;
function $n() {
  if (la) return ce;
  la = 1, Object.defineProperty(ce, "__esModule", {
    value: !0
  }), ce.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "caption"
      },
      module: "HTML"
    }],
    requireContextRole: ["figure", "grid", "table"],
    requiredContextRole: ["figure", "grid", "table"],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, e = r;
  return ce.default = e, ce;
}
var pe = {}, na;
function jn() {
  if (na) return pe;
  na = 1, Object.defineProperty(pe, "__esModule", {
    value: !0
  }), pe.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-colindex": null,
      "aria-colspan": null,
      "aria-rowindex": null,
      "aria-rowspan": null
    },
    relatedConcepts: [{
      concept: {
        constraints: ["ancestor table element has table role"],
        name: "td"
      },
      module: "HTML"
    }],
    requireContextRole: ["row"],
    requiredContextRole: ["row"],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, e = r;
  return pe.default = e, pe;
}
var fe = {}, ua;
function Ln() {
  if (ua) return fe;
  ua = 1, Object.defineProperty(fe, "__esModule", {
    value: !0
  }), fe.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-checked": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-invalid": null,
      "aria-readonly": null,
      "aria-required": null
    },
    relatedConcepts: [{
      concept: {
        attributes: [{
          name: "type",
          value: "checkbox"
        }],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        name: "option"
      },
      module: "ARIA"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {
      "aria-checked": null
    },
    superClass: [["roletype", "widget", "input"]]
  }, e = r;
  return fe.default = e, fe;
}
var me = {}, ia;
function Dn() {
  if (ia) return me;
  ia = 1, Object.defineProperty(me, "__esModule", {
    value: !0
  }), me.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "code"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, e = r;
  return me.default = e, me;
}
var ve = {}, sa;
function Hn() {
  if (sa) return ve;
  sa = 1, Object.defineProperty(ve, "__esModule", {
    value: !0
  }), ve.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-sort": null
    },
    relatedConcepts: [{
      concept: {
        name: "th"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          name: "scope",
          value: "col"
        }],
        name: "th"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          name: "scope",
          value: "colgroup"
        }],
        name: "th"
      },
      module: "HTML"
    }],
    requireContextRole: ["row"],
    requiredContextRole: ["row"],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "cell"], ["roletype", "structure", "section", "cell", "gridcell"], ["roletype", "widget", "gridcell"], ["roletype", "structure", "sectionhead"]]
  }, e = r;
  return ve.default = e, ve;
}
var Re = {}, da;
function Bn() {
  if (da) return Re;
  da = 1, Object.defineProperty(Re, "__esModule", {
    value: !0
  }), Re.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-activedescendant": null,
      "aria-autocomplete": null,
      "aria-errormessage": null,
      "aria-invalid": null,
      "aria-readonly": null,
      "aria-required": null,
      "aria-expanded": "false",
      "aria-haspopup": "listbox"
    },
    relatedConcepts: [{
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "list"
        }, {
          name: "type",
          value: "email"
        }],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "list"
        }, {
          name: "type",
          value: "search"
        }],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "list"
        }, {
          name: "type",
          value: "tel"
        }],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "list"
        }, {
          name: "type",
          value: "text"
        }],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "list"
        }, {
          name: "type",
          value: "url"
        }],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "list"
        }, {
          name: "type",
          value: "url"
        }],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["undefined"],
          name: "multiple"
        }, {
          constraints: ["undefined"],
          name: "size"
        }],
        constraints: ["the multiple attribute is not set and the size attribute does not have a value greater than 1"],
        name: "select"
      },
      module: "HTML"
    }, {
      concept: {
        name: "select"
      },
      module: "XForms"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {
      "aria-controls": null,
      "aria-expanded": "false"
    },
    superClass: [["roletype", "widget", "input"]]
  }, e = r;
  return Re.default = e, Re;
}
var be = {}, ca;
function In() {
  if (ca) return be;
  ca = 1, Object.defineProperty(be, "__esModule", {
    value: !0
  }), be.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "aside"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "aria-label"
        }],
        constraints: ["scoped to a sectioning content element", "scoped to a sectioning root element other than body"],
        name: "aside"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "aria-labelledby"
        }],
        constraints: ["scoped to a sectioning content element", "scoped to a sectioning root element other than body"],
        name: "aside"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, e = r;
  return be.default = e, be;
}
var qe = {}, pa;
function Un() {
  if (pa) return qe;
  pa = 1, Object.defineProperty(qe, "__esModule", {
    value: !0
  }), qe.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        constraints: ["scoped to the body element"],
        name: "footer"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, e = r;
  return qe.default = e, qe;
}
var he = {}, fa;
function Vn() {
  if (fa) return he;
  fa = 1, Object.defineProperty(he, "__esModule", {
    value: !0
  }), he.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "dd"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, e = r;
  return he.default = e, he;
}
var Ce = {}, ma;
function Gn() {
  if (ma) return Ce;
  ma = 1, Object.defineProperty(Ce, "__esModule", {
    value: !0
  }), Ce.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "del"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, e = r;
  return Ce.default = e, Ce;
}
var ye = {}, va;
function zn() {
  if (va) return ye;
  va = 1, Object.defineProperty(ye, "__esModule", {
    value: !0
  }), ye.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "dialog"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "window"]]
  }, e = r;
  return ye.default = e, ye;
}
var _e = {}, Ra;
function Xn() {
  if (Ra) return _e;
  Ra = 1, Object.defineProperty(_e, "__esModule", {
    value: !0
  }), _e.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      module: "DAISY Guide"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "list"]]
  }, e = r;
  return _e.default = e, _e;
}
var Pe = {}, ba;
function Wn() {
  if (ba) return Pe;
  ba = 1, Object.defineProperty(Pe, "__esModule", {
    value: !0
  }), Pe.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "Device Independence Delivery Unit"
      }
    }, {
      concept: {
        name: "html"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure"]]
  }, e = r;
  return Pe.default = e, Pe;
}
var ge = {}, qa;
function Qn() {
  if (qa) return ge;
  qa = 1, Object.defineProperty(ge, "__esModule", {
    value: !0
  }), ge.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "em"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, e = r;
  return ge.default = e, ge;
}
var xe = {}, ha;
function Jn() {
  if (ha) return xe;
  ha = 1, Object.defineProperty(xe, "__esModule", {
    value: !0
  }), xe.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["article"]],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "list"]]
  }, e = r;
  return xe.default = e, xe;
}
var we = {}, Ca;
function Yn() {
  if (Ca) return we;
  Ca = 1, Object.defineProperty(we, "__esModule", {
    value: !0
  }), we.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "figure"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, e = r;
  return we.default = e, we;
}
var Me = {}, ya;
function Kn() {
  if (ya) return Me;
  ya = 1, Object.defineProperty(Me, "__esModule", {
    value: !0
  }), Me.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "aria-label"
        }],
        name: "form"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "aria-labelledby"
        }],
        name: "form"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "name"
        }],
        name: "form"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, e = r;
  return Me.default = e, Me;
}
var Oe = {}, _a;
function Zn() {
  if (_a) return Oe;
  _a = 1, Object.defineProperty(Oe, "__esModule", {
    value: !0
  }), Oe.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "a"
      },
      module: "HTML"
    }, {
      concept: {
        name: "area"
      },
      module: "HTML"
    }, {
      concept: {
        name: "aside"
      },
      module: "HTML"
    }, {
      concept: {
        name: "b"
      },
      module: "HTML"
    }, {
      concept: {
        name: "bdo"
      },
      module: "HTML"
    }, {
      concept: {
        name: "body"
      },
      module: "HTML"
    }, {
      concept: {
        name: "data"
      },
      module: "HTML"
    }, {
      concept: {
        name: "div"
      },
      module: "HTML"
    }, {
      concept: {
        constraints: ["scoped to the main element", "scoped to a sectioning content element", "scoped to a sectioning root element other than body"],
        name: "footer"
      },
      module: "HTML"
    }, {
      concept: {
        constraints: ["scoped to the main element", "scoped to a sectioning content element", "scoped to a sectioning root element other than body"],
        name: "header"
      },
      module: "HTML"
    }, {
      concept: {
        name: "hgroup"
      },
      module: "HTML"
    }, {
      concept: {
        name: "i"
      },
      module: "HTML"
    }, {
      concept: {
        name: "pre"
      },
      module: "HTML"
    }, {
      concept: {
        name: "q"
      },
      module: "HTML"
    }, {
      concept: {
        name: "samp"
      },
      module: "HTML"
    }, {
      concept: {
        name: "section"
      },
      module: "HTML"
    }, {
      concept: {
        name: "small"
      },
      module: "HTML"
    }, {
      concept: {
        name: "span"
      },
      module: "HTML"
    }, {
      concept: {
        name: "u"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure"]]
  }, e = r;
  return Oe.default = e, Oe;
}
var Ee = {}, Pa;
function eu() {
  if (Pa) return Ee;
  Pa = 1, Object.defineProperty(Ee, "__esModule", {
    value: !0
  }), Ee.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-multiselectable": null,
      "aria-readonly": null
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["row"], ["row", "rowgroup"]],
    requiredProps: {},
    superClass: [["roletype", "widget", "composite"], ["roletype", "structure", "section", "table"]]
  }, e = r;
  return Ee.default = e, Ee;
}
var Te = {}, ga;
function ru() {
  if (ga) return Te;
  ga = 1, Object.defineProperty(Te, "__esModule", {
    value: !0
  }), Te.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null,
      "aria-readonly": null,
      "aria-required": null,
      "aria-selected": null
    },
    relatedConcepts: [{
      concept: {
        constraints: ["ancestor table element has grid role", "ancestor table element has treegrid role"],
        name: "td"
      },
      module: "HTML"
    }],
    requireContextRole: ["row"],
    requiredContextRole: ["row"],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "cell"], ["roletype", "widget"]]
  }, e = r;
  return Te.default = e, Te;
}
var Se = {}, xa;
function tu() {
  if (xa) return Se;
  xa = 1, Object.defineProperty(Se, "__esModule", {
    value: !0
  }), Se.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-activedescendant": null,
      "aria-disabled": null
    },
    relatedConcepts: [{
      concept: {
        name: "details"
      },
      module: "HTML"
    }, {
      concept: {
        name: "fieldset"
      },
      module: "HTML"
    }, {
      concept: {
        name: "optgroup"
      },
      module: "HTML"
    }, {
      concept: {
        name: "address"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, e = r;
  return Se.default = e, Se;
}
var Fe = {}, wa;
function au() {
  if (wa) return Fe;
  wa = 1, Object.defineProperty(Fe, "__esModule", {
    value: !0
  }), Fe.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-level": "2"
    },
    relatedConcepts: [{
      concept: {
        name: "h1"
      },
      module: "HTML"
    }, {
      concept: {
        name: "h2"
      },
      module: "HTML"
    }, {
      concept: {
        name: "h3"
      },
      module: "HTML"
    }, {
      concept: {
        name: "h4"
      },
      module: "HTML"
    }, {
      concept: {
        name: "h5"
      },
      module: "HTML"
    }, {
      concept: {
        name: "h6"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {
      "aria-level": "2"
    },
    superClass: [["roletype", "structure", "sectionhead"]]
  }, e = r;
  return Fe.default = e, Fe;
}
var Ne = {}, Ma;
function ou() {
  if (Ma) return Ne;
  Ma = 1, Object.defineProperty(Ne, "__esModule", {
    value: !0
  }), Ne.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "alt"
        }],
        name: "img"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["undefined"],
          name: "alt"
        }],
        name: "img"
      },
      module: "HTML"
    }, {
      concept: {
        name: "imggroup"
      },
      module: "DTB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, e = r;
  return Ne.default = e, Ne;
}
var ke = {}, Oa;
function lu() {
  if (Oa) return ke;
  Oa = 1, Object.defineProperty(ke, "__esModule", {
    value: !0
  }), ke.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "ins"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, e = r;
  return ke.default = e, ke;
}
var Ae = {}, Ea;
function nu() {
  if (Ea) return Ae;
  Ea = 1, Object.defineProperty(Ae, "__esModule", {
    value: !0
  }), Ae.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-expanded": null,
      "aria-haspopup": null
    },
    relatedConcepts: [{
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "href"
        }],
        name: "a"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "href"
        }],
        name: "area"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "command"]]
  }, e = r;
  return Ae.default = e, Ae;
}
var $e = {}, Ta;
function uu() {
  if (Ta) return $e;
  Ta = 1, Object.defineProperty($e, "__esModule", {
    value: !0
  }), $e.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "menu"
      },
      module: "HTML"
    }, {
      concept: {
        name: "ol"
      },
      module: "HTML"
    }, {
      concept: {
        name: "ul"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["listitem"]],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, e = r;
  return $e.default = e, $e;
}
var je = {}, Sa;
function iu() {
  if (Sa) return je;
  Sa = 1, Object.defineProperty(je, "__esModule", {
    value: !0
  }), je.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-invalid": null,
      "aria-multiselectable": null,
      "aria-readonly": null,
      "aria-required": null,
      "aria-orientation": "vertical"
    },
    relatedConcepts: [{
      concept: {
        attributes: [{
          constraints: [">1"],
          name: "size"
        }],
        constraints: ["the size attribute value is greater than 1"],
        name: "select"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          name: "multiple"
        }],
        name: "select"
      },
      module: "HTML"
    }, {
      concept: {
        name: "datalist"
      },
      module: "HTML"
    }, {
      concept: {
        name: "list"
      },
      module: "ARIA"
    }, {
      concept: {
        name: "select"
      },
      module: "XForms"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["option", "group"], ["option"]],
    requiredProps: {},
    superClass: [["roletype", "widget", "composite", "select"], ["roletype", "structure", "section", "group", "select"]]
  }, e = r;
  return je.default = e, je;
}
var Le = {}, Fa;
function su() {
  if (Fa) return Le;
  Fa = 1, Object.defineProperty(Le, "__esModule", {
    value: !0
  }), Le.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-level": null,
      "aria-posinset": null,
      "aria-setsize": null
    },
    relatedConcepts: [{
      concept: {
        constraints: ["direct descendant of ol", "direct descendant of ul", "direct descendant of menu"],
        name: "li"
      },
      module: "HTML"
    }, {
      concept: {
        name: "item"
      },
      module: "XForms"
    }],
    requireContextRole: ["directory", "list"],
    requiredContextRole: ["directory", "list"],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, e = r;
  return Le.default = e, Le;
}
var De = {}, Na;
function du() {
  if (Na) return De;
  Na = 1, Object.defineProperty(De, "__esModule", {
    value: !0
  }), De.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-live": "polite"
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, e = r;
  return De.default = e, De;
}
var He = {}, ka;
function cu() {
  if (ka) return He;
  ka = 1, Object.defineProperty(He, "__esModule", {
    value: !0
  }), He.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "main"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, e = r;
  return He.default = e, He;
}
var Be = {}, Aa;
function pu() {
  if (Aa) return Be;
  Aa = 1, Object.defineProperty(Be, "__esModule", {
    value: !0
  }), Be.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: [],
    props: {
      "aria-braillelabel": null,
      "aria-brailleroledescription": null,
      "aria-description": null
    },
    relatedConcepts: [{
      concept: {
        name: "mark"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, e = r;
  return Be.default = e, Be;
}
var Ie = {}, $a;
function fu() {
  if ($a) return Ie;
  $a = 1, Object.defineProperty(Ie, "__esModule", {
    value: !0
  }), Ie.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, e = r;
  return Ie.default = e, Ie;
}
var Ue = {}, ja;
function mu() {
  if (ja) return Ue;
  ja = 1, Object.defineProperty(Ue, "__esModule", {
    value: !0
  }), Ue.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "math"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, e = r;
  return Ue.default = e, Ue;
}
var Ve = {}, La;
function vu() {
  if (La) return Ve;
  La = 1, Object.defineProperty(Ve, "__esModule", {
    value: !0
  }), Ve.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-orientation": "vertical"
    },
    relatedConcepts: [{
      concept: {
        name: "MENU"
      },
      module: "JAPI"
    }, {
      concept: {
        name: "list"
      },
      module: "ARIA"
    }, {
      concept: {
        name: "select"
      },
      module: "XForms"
    }, {
      concept: {
        name: "sidebar"
      },
      module: "DTB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["menuitem", "group"], ["menuitemradio", "group"], ["menuitemcheckbox", "group"], ["menuitem"], ["menuitemcheckbox"], ["menuitemradio"]],
    requiredProps: {},
    superClass: [["roletype", "widget", "composite", "select"], ["roletype", "structure", "section", "group", "select"]]
  }, e = r;
  return Ve.default = e, Ve;
}
var Ge = {}, Da;
function Ru() {
  if (Da) return Ge;
  Da = 1, Object.defineProperty(Ge, "__esModule", {
    value: !0
  }), Ge.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-orientation": "horizontal"
    },
    relatedConcepts: [{
      concept: {
        name: "toolbar"
      },
      module: "ARIA"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["menuitem", "group"], ["menuitemradio", "group"], ["menuitemcheckbox", "group"], ["menuitem"], ["menuitemcheckbox"], ["menuitemradio"]],
    requiredProps: {},
    superClass: [["roletype", "widget", "composite", "select", "menu"], ["roletype", "structure", "section", "group", "select", "menu"]]
  }, e = r;
  return Ge.default = e, Ge;
}
var ze = {}, Ha;
function bu() {
  if (Ha) return ze;
  Ha = 1, Object.defineProperty(ze, "__esModule", {
    value: !0
  }), ze.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-posinset": null,
      "aria-setsize": null
    },
    relatedConcepts: [{
      concept: {
        name: "MENU_ITEM"
      },
      module: "JAPI"
    }, {
      concept: {
        name: "listitem"
      },
      module: "ARIA"
    }, {
      concept: {
        name: "option"
      },
      module: "ARIA"
    }],
    requireContextRole: ["group", "menu", "menubar"],
    requiredContextRole: ["group", "menu", "menubar"],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "command"]]
  }, e = r;
  return ze.default = e, ze;
}
var Xe = {}, Ba;
function qu() {
  if (Ba) return Xe;
  Ba = 1, Object.defineProperty(Xe, "__esModule", {
    value: !0
  }), Xe.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "menuitem"
      },
      module: "ARIA"
    }],
    requireContextRole: ["group", "menu", "menubar"],
    requiredContextRole: ["group", "menu", "menubar"],
    requiredOwnedElements: [],
    requiredProps: {
      "aria-checked": null
    },
    superClass: [["roletype", "widget", "input", "checkbox"], ["roletype", "widget", "command", "menuitem"]]
  }, e = r;
  return Xe.default = e, Xe;
}
var We = {}, Ia;
function hu() {
  if (Ia) return We;
  Ia = 1, Object.defineProperty(We, "__esModule", {
    value: !0
  }), We.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "menuitem"
      },
      module: "ARIA"
    }],
    requireContextRole: ["group", "menu", "menubar"],
    requiredContextRole: ["group", "menu", "menubar"],
    requiredOwnedElements: [],
    requiredProps: {
      "aria-checked": null
    },
    superClass: [["roletype", "widget", "input", "checkbox", "menuitemcheckbox"], ["roletype", "widget", "command", "menuitem", "menuitemcheckbox"], ["roletype", "widget", "input", "radio"]]
  }, e = r;
  return We.default = e, We;
}
var Qe = {}, Ua;
function Cu() {
  if (Ua) return Qe;
  Ua = 1, Object.defineProperty(Qe, "__esModule", {
    value: !0
  }), Qe.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-valuetext": null,
      "aria-valuemax": "100",
      "aria-valuemin": "0"
    },
    relatedConcepts: [{
      concept: {
        name: "meter"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {
      "aria-valuenow": null
    },
    superClass: [["roletype", "structure", "range"]]
  }, e = r;
  return Qe.default = e, Qe;
}
var Je = {}, Va;
function yu() {
  if (Va) return Je;
  Va = 1, Object.defineProperty(Je, "__esModule", {
    value: !0
  }), Je.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "nav"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, e = r;
  return Je.default = e, Je;
}
var Ye = {}, Ga;
function _u() {
  if (Ga) return Ye;
  Ga = 1, Object.defineProperty(Ye, "__esModule", {
    value: !0
  }), Ye.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: [],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: []
  }, e = r;
  return Ye.default = e, Ye;
}
var Ke = {}, za;
function Pu() {
  if (za) return Ke;
  za = 1, Object.defineProperty(Ke, "__esModule", {
    value: !0
  }), Ke.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, e = r;
  return Ke.default = e, Ke;
}
var Ze = {}, Xa;
function gu() {
  if (Xa) return Ze;
  Xa = 1, Object.defineProperty(Ze, "__esModule", {
    value: !0
  }), Ze.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-checked": null,
      "aria-posinset": null,
      "aria-setsize": null,
      "aria-selected": "false"
    },
    relatedConcepts: [{
      concept: {
        name: "item"
      },
      module: "XForms"
    }, {
      concept: {
        name: "listitem"
      },
      module: "ARIA"
    }, {
      concept: {
        name: "option"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {
      "aria-selected": "false"
    },
    superClass: [["roletype", "widget", "input"]]
  }, e = r;
  return Ze.default = e, Ze;
}
var er = {}, Wa;
function xu() {
  if (Wa) return er;
  Wa = 1, Object.defineProperty(er, "__esModule", {
    value: !0
  }), er.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "p"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, e = r;
  return er.default = e, er;
}
var rr = {}, Qa;
function wu() {
  if (Qa) return rr;
  Qa = 1, Object.defineProperty(rr, "__esModule", {
    value: !0
  }), rr.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [{
      concept: {
        attributes: [{
          name: "alt",
          value: ""
        }],
        name: "img"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure"]]
  }, e = r;
  return rr.default = e, rr;
}
var tr = {}, Ja;
function Mu() {
  if (Ja) return tr;
  Ja = 1, Object.defineProperty(tr, "__esModule", {
    value: !0
  }), tr.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-valuetext": null
    },
    relatedConcepts: [{
      concept: {
        name: "progress"
      },
      module: "HTML"
    }, {
      concept: {
        name: "status"
      },
      module: "ARIA"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "range"], ["roletype", "widget"]]
  }, e = r;
  return tr.default = e, tr;
}
var ar = {}, Ya;
function Ou() {
  if (Ya) return ar;
  Ya = 1, Object.defineProperty(ar, "__esModule", {
    value: !0
  }), ar.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-checked": null,
      "aria-posinset": null,
      "aria-setsize": null
    },
    relatedConcepts: [{
      concept: {
        attributes: [{
          name: "type",
          value: "radio"
        }],
        name: "input"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {
      "aria-checked": null
    },
    superClass: [["roletype", "widget", "input"]]
  }, e = r;
  return ar.default = e, ar;
}
var or = {}, Ka;
function Eu() {
  if (Ka) return or;
  Ka = 1, Object.defineProperty(or, "__esModule", {
    value: !0
  }), or.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-errormessage": null,
      "aria-invalid": null,
      "aria-readonly": null,
      "aria-required": null
    },
    relatedConcepts: [{
      concept: {
        name: "list"
      },
      module: "ARIA"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["radio"]],
    requiredProps: {},
    superClass: [["roletype", "widget", "composite", "select"], ["roletype", "structure", "section", "group", "select"]]
  }, e = r;
  return or.default = e, or;
}
var lr = {}, Za;
function Tu() {
  if (Za) return lr;
  Za = 1, Object.defineProperty(lr, "__esModule", {
    value: !0
  }), lr.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "aria-label"
        }],
        name: "section"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "aria-labelledby"
        }],
        name: "section"
      },
      module: "HTML"
    }, {
      concept: {
        name: "Device Independence Glossart perceivable unit"
      }
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, e = r;
  return lr.default = e, lr;
}
var nr = {}, eo;
function Su() {
  if (eo) return nr;
  eo = 1, Object.defineProperty(nr, "__esModule", {
    value: !0
  }), nr.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-colindex": null,
      "aria-expanded": null,
      "aria-level": null,
      "aria-posinset": null,
      "aria-rowindex": null,
      "aria-selected": null,
      "aria-setsize": null
    },
    relatedConcepts: [{
      concept: {
        name: "tr"
      },
      module: "HTML"
    }],
    requireContextRole: ["grid", "rowgroup", "table", "treegrid"],
    requiredContextRole: ["grid", "rowgroup", "table", "treegrid"],
    requiredOwnedElements: [["cell"], ["columnheader"], ["gridcell"], ["rowheader"]],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "group"], ["roletype", "widget"]]
  }, e = r;
  return nr.default = e, nr;
}
var ur = {}, ro;
function Fu() {
  if (ro) return ur;
  ro = 1, Object.defineProperty(ur, "__esModule", {
    value: !0
  }), ur.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "tbody"
      },
      module: "HTML"
    }, {
      concept: {
        name: "tfoot"
      },
      module: "HTML"
    }, {
      concept: {
        name: "thead"
      },
      module: "HTML"
    }],
    requireContextRole: ["grid", "table", "treegrid"],
    requiredContextRole: ["grid", "table", "treegrid"],
    requiredOwnedElements: [["row"]],
    requiredProps: {},
    superClass: [["roletype", "structure"]]
  }, e = r;
  return ur.default = e, ur;
}
var ir = {}, to;
function Nu() {
  if (to) return ir;
  to = 1, Object.defineProperty(ir, "__esModule", {
    value: !0
  }), ir.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-sort": null
    },
    relatedConcepts: [{
      concept: {
        attributes: [{
          name: "scope",
          value: "row"
        }],
        name: "th"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          name: "scope",
          value: "rowgroup"
        }],
        name: "th"
      },
      module: "HTML"
    }],
    requireContextRole: ["row", "rowgroup"],
    requiredContextRole: ["row", "rowgroup"],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "cell"], ["roletype", "structure", "section", "cell", "gridcell"], ["roletype", "widget", "gridcell"], ["roletype", "structure", "sectionhead"]]
  }, e = r;
  return ir.default = e, ir;
}
var sr = {}, ao;
function ku() {
  if (ao) return sr;
  ao = 1, Object.defineProperty(sr, "__esModule", {
    value: !0
  }), sr.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-valuetext": null,
      "aria-orientation": "vertical",
      "aria-valuemax": "100",
      "aria-valuemin": "0"
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {
      "aria-controls": null,
      "aria-valuenow": null
    },
    superClass: [["roletype", "structure", "range"], ["roletype", "widget"]]
  }, e = r;
  return sr.default = e, sr;
}
var dr = {}, oo;
function Au() {
  if (oo) return dr;
  oo = 1, Object.defineProperty(dr, "__esModule", {
    value: !0
  }), dr.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, e = r;
  return dr.default = e, dr;
}
var cr = {}, lo;
function $u() {
  if (lo) return cr;
  lo = 1, Object.defineProperty(cr, "__esModule", {
    value: !0
  }), cr.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        attributes: [{
          constraints: ["undefined"],
          name: "list"
        }, {
          name: "type",
          value: "search"
        }],
        constraints: ["the list attribute is not set"],
        name: "input"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "input", "textbox"]]
  }, e = r;
  return cr.default = e, cr;
}
var pr = {}, no;
function ju() {
  if (no) return pr;
  no = 1, Object.defineProperty(pr, "__esModule", {
    value: !0
  }), pr.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-orientation": "horizontal",
      "aria-valuemax": "100",
      "aria-valuemin": "0",
      "aria-valuenow": null,
      "aria-valuetext": null
    },
    relatedConcepts: [{
      concept: {
        name: "hr"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure"]]
  }, e = r;
  return pr.default = e, pr;
}
var fr = {}, uo;
function Lu() {
  if (uo) return fr;
  uo = 1, Object.defineProperty(fr, "__esModule", {
    value: !0
  }), fr.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-errormessage": null,
      "aria-haspopup": null,
      "aria-invalid": null,
      "aria-readonly": null,
      "aria-valuetext": null,
      "aria-orientation": "horizontal",
      "aria-valuemax": "100",
      "aria-valuemin": "0"
    },
    relatedConcepts: [{
      concept: {
        attributes: [{
          name: "type",
          value: "range"
        }],
        name: "input"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {
      "aria-valuenow": null
    },
    superClass: [["roletype", "widget", "input"], ["roletype", "structure", "range"]]
  }, e = r;
  return fr.default = e, fr;
}
var mr = {}, io;
function Du() {
  if (io) return mr;
  io = 1, Object.defineProperty(mr, "__esModule", {
    value: !0
  }), mr.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-errormessage": null,
      "aria-invalid": null,
      "aria-readonly": null,
      "aria-required": null,
      "aria-valuetext": null,
      "aria-valuenow": "0"
    },
    relatedConcepts: [{
      concept: {
        attributes: [{
          name: "type",
          value: "number"
        }],
        name: "input"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "composite"], ["roletype", "widget", "input"], ["roletype", "structure", "range"]]
  }, e = r;
  return mr.default = e, mr;
}
var vr = {}, so;
function Hu() {
  if (so) return vr;
  so = 1, Object.defineProperty(vr, "__esModule", {
    value: !0
  }), vr.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-atomic": "true",
      "aria-live": "polite"
    },
    relatedConcepts: [{
      concept: {
        name: "output"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, e = r;
  return vr.default = e, vr;
}
var Rr = {}, co;
function Bu() {
  if (co) return Rr;
  co = 1, Object.defineProperty(Rr, "__esModule", {
    value: !0
  }), Rr.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "strong"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, e = r;
  return Rr.default = e, Rr;
}
var br = {}, po;
function Iu() {
  if (po) return br;
  po = 1, Object.defineProperty(br, "__esModule", {
    value: !0
  }), br.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "sub"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, e = r;
  return br.default = e, br;
}
var qr = {}, fo;
function Uu() {
  if (fo) return qr;
  fo = 1, Object.defineProperty(qr, "__esModule", {
    value: !0
  }), qr.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "sup"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, e = r;
  return qr.default = e, qr;
}
var hr = {}, mo;
function Vu() {
  if (mo) return hr;
  mo = 1, Object.defineProperty(hr, "__esModule", {
    value: !0
  }), hr.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "button"
      },
      module: "ARIA"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {
      "aria-checked": null
    },
    superClass: [["roletype", "widget", "input", "checkbox"]]
  }, e = r;
  return hr.default = e, hr;
}
var Cr = {}, vo;
function Gu() {
  if (vo) return Cr;
  vo = 1, Object.defineProperty(Cr, "__esModule", {
    value: !0
  }), Cr.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-posinset": null,
      "aria-setsize": null,
      "aria-selected": "false"
    },
    relatedConcepts: [],
    requireContextRole: ["tablist"],
    requiredContextRole: ["tablist"],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "sectionhead"], ["roletype", "widget"]]
  }, e = r;
  return Cr.default = e, Cr;
}
var yr = {}, Ro;
function zu() {
  if (Ro) return yr;
  Ro = 1, Object.defineProperty(yr, "__esModule", {
    value: !0
  }), yr.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-colcount": null,
      "aria-rowcount": null
    },
    relatedConcepts: [{
      concept: {
        name: "table"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["row"], ["row", "rowgroup"]],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, e = r;
  return yr.default = e, yr;
}
var _r = {}, bo;
function Xu() {
  if (bo) return _r;
  bo = 1, Object.defineProperty(_r, "__esModule", {
    value: !0
  }), _r.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-level": null,
      "aria-multiselectable": null,
      "aria-orientation": "horizontal"
    },
    relatedConcepts: [{
      module: "DAISY",
      concept: {
        name: "guide"
      }
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["tab"]],
    requiredProps: {},
    superClass: [["roletype", "widget", "composite"]]
  }, e = r;
  return _r.default = e, _r;
}
var Pr = {}, qo;
function Wu() {
  if (qo) return Pr;
  qo = 1, Object.defineProperty(Pr, "__esModule", {
    value: !0
  }), Pr.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, e = r;
  return Pr.default = e, Pr;
}
var gr = {}, ho;
function Qu() {
  if (ho) return gr;
  ho = 1, Object.defineProperty(gr, "__esModule", {
    value: !0
  }), gr.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "dfn"
      },
      module: "HTML"
    }, {
      concept: {
        name: "dt"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, e = r;
  return gr.default = e, gr;
}
var xr = {}, Co;
function Ju() {
  if (Co) return xr;
  Co = 1, Object.defineProperty(xr, "__esModule", {
    value: !0
  }), xr.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-activedescendant": null,
      "aria-autocomplete": null,
      "aria-errormessage": null,
      "aria-haspopup": null,
      "aria-invalid": null,
      "aria-multiline": null,
      "aria-placeholder": null,
      "aria-readonly": null,
      "aria-required": null
    },
    relatedConcepts: [{
      concept: {
        attributes: [{
          constraints: ["undefined"],
          name: "type"
        }, {
          constraints: ["undefined"],
          name: "list"
        }],
        constraints: ["the list attribute is not set"],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["undefined"],
          name: "list"
        }, {
          name: "type",
          value: "email"
        }],
        constraints: ["the list attribute is not set"],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["undefined"],
          name: "list"
        }, {
          name: "type",
          value: "tel"
        }],
        constraints: ["the list attribute is not set"],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["undefined"],
          name: "list"
        }, {
          name: "type",
          value: "text"
        }],
        constraints: ["the list attribute is not set"],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["undefined"],
          name: "list"
        }, {
          name: "type",
          value: "url"
        }],
        constraints: ["the list attribute is not set"],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        name: "input"
      },
      module: "XForms"
    }, {
      concept: {
        name: "textarea"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "input"]]
  }, e = r;
  return xr.default = e, xr;
}
var wr = {}, yo;
function Yu() {
  if (yo) return wr;
  yo = 1, Object.defineProperty(wr, "__esModule", {
    value: !0
  }), wr.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "time"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, e = r;
  return wr.default = e, wr;
}
var Mr = {}, _o;
function Ku() {
  if (_o) return Mr;
  _o = 1, Object.defineProperty(Mr, "__esModule", {
    value: !0
  }), Mr.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "status"]]
  }, e = r;
  return Mr.default = e, Mr;
}
var Or = {}, Po;
function Zu() {
  if (Po) return Or;
  Po = 1, Object.defineProperty(Or, "__esModule", {
    value: !0
  }), Or.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-orientation": "horizontal"
    },
    relatedConcepts: [{
      concept: {
        name: "menubar"
      },
      module: "ARIA"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "group"]]
  }, e = r;
  return Or.default = e, Or;
}
var Er = {}, go;
function ei() {
  if (go) return Er;
  go = 1, Object.defineProperty(Er, "__esModule", {
    value: !0
  }), Er.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, e = r;
  return Er.default = e, Er;
}
var Tr = {}, xo;
function ri() {
  if (xo) return Tr;
  xo = 1, Object.defineProperty(Tr, "__esModule", {
    value: !0
  }), Tr.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-errormessage": null,
      "aria-invalid": null,
      "aria-multiselectable": null,
      "aria-required": null,
      "aria-orientation": "vertical"
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["treeitem", "group"], ["treeitem"]],
    requiredProps: {},
    superClass: [["roletype", "widget", "composite", "select"], ["roletype", "structure", "section", "group", "select"]]
  }, e = r;
  return Tr.default = e, Tr;
}
var Sr = {}, wo;
function ti() {
  if (wo) return Sr;
  wo = 1, Object.defineProperty(Sr, "__esModule", {
    value: !0
  }), Sr.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["row"], ["row", "rowgroup"]],
    requiredProps: {},
    superClass: [["roletype", "widget", "composite", "grid"], ["roletype", "structure", "section", "table", "grid"], ["roletype", "widget", "composite", "select", "tree"], ["roletype", "structure", "section", "group", "select", "tree"]]
  }, e = r;
  return Sr.default = e, Sr;
}
var Fr = {}, Mo;
function ai() {
  if (Mo) return Fr;
  Mo = 1, Object.defineProperty(Fr, "__esModule", {
    value: !0
  }), Fr.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-expanded": null,
      "aria-haspopup": null
    },
    relatedConcepts: [],
    requireContextRole: ["group", "tree"],
    requiredContextRole: ["group", "tree"],
    requiredOwnedElements: [],
    requiredProps: {
      "aria-selected": null
    },
    superClass: [["roletype", "structure", "section", "listitem"], ["roletype", "widget", "input", "option"]]
  }, e = r;
  return Fr.default = e, Fr;
}
var Oo;
function oi() {
  if (Oo) return ae;
  Oo = 1, Object.defineProperty(ae, "__esModule", {
    value: !0
  }), ae.default = void 0;
  var r = n(En()), e = n(Tn()), b = n(Sn()), h = n(Fn()), q = n(Nn()), R = n(kn()), O = n(An()), F = n($n()), E = n(jn()), P = n(Ln()), g = n(Dn()), x = n(Hn()), t = n(Bn()), c = n(In()), a = n(Un()), p = n(Vn()), _ = n(Gn()), u = n(zn()), f = n(Xn()), d = n(Wn()), m = n(Qn()), i = n(Jn()), o = n(Yn()), l = n(Kn()), s = n(Zn()), v = n(eu()), y = n(ru()), T = n(tu()), S = n(au()), w = n(ou()), M = n(lu()), N = n(nu()), A = n(uu()), j = n(iu()), L = n(su()), D = n(du()), Ot = n(cu()), Et = n(pu()), Tt = n(fu()), C = n(mu()), St = n(vu()), Ft = n(Ru()), $ = n(bu()), gl = n(qu()), xl = n(hu()), wl = n(Cu()), Ml = n(yu()), Ol = n(_u()), El = n(Pu()), Tl = n(gu()), Sl = n(xu()), Fl = n(wu()), Nl = n(Mu()), kl = n(Ou()), Al = n(Eu()), $l = n(Tu()), jl = n(Su()), Ll = n(Fu()), Dl = n(Nu()), Hl = n(ku()), Bl = n(Au()), Il = n($u()), Ul = n(ju()), Vl = n(Lu()), Gl = n(Du()), zl = n(Hu()), Xl = n(Bu()), Wl = n(Iu()), Ql = n(Uu()), Jl = n(Vu()), Yl = n(Gu()), Kl = n(zu()), Zl = n(Xu()), en = n(Wu()), rn = n(Qu()), tn = n(Ju()), an = n(Yu()), on = n(Ku()), ln = n(Zu()), nn = n(ei()), un = n(ri()), sn = n(ti()), dn = n(ai());
  function n(wt) {
    return wt && wt.__esModule ? wt : { default: wt };
  }
  var cn = [["alert", r.default], ["alertdialog", e.default], ["application", b.default], ["article", h.default], ["banner", q.default], ["blockquote", R.default], ["button", O.default], ["caption", F.default], ["cell", E.default], ["checkbox", P.default], ["code", g.default], ["columnheader", x.default], ["combobox", t.default], ["complementary", c.default], ["contentinfo", a.default], ["definition", p.default], ["deletion", _.default], ["dialog", u.default], ["directory", f.default], ["document", d.default], ["emphasis", m.default], ["feed", i.default], ["figure", o.default], ["form", l.default], ["generic", s.default], ["grid", v.default], ["gridcell", y.default], ["group", T.default], ["heading", S.default], ["img", w.default], ["insertion", M.default], ["link", N.default], ["list", A.default], ["listbox", j.default], ["listitem", L.default], ["log", D.default], ["main", Ot.default], ["mark", Et.default], ["marquee", Tt.default], ["math", C.default], ["menu", St.default], ["menubar", Ft.default], ["menuitem", $.default], ["menuitemcheckbox", gl.default], ["menuitemradio", xl.default], ["meter", wl.default], ["navigation", Ml.default], ["none", Ol.default], ["note", El.default], ["option", Tl.default], ["paragraph", Sl.default], ["presentation", Fl.default], ["progressbar", Nl.default], ["radio", kl.default], ["radiogroup", Al.default], ["region", $l.default], ["row", jl.default], ["rowgroup", Ll.default], ["rowheader", Dl.default], ["scrollbar", Hl.default], ["search", Bl.default], ["searchbox", Il.default], ["separator", Ul.default], ["slider", Vl.default], ["spinbutton", Gl.default], ["status", zl.default], ["strong", Xl.default], ["subscript", Wl.default], ["superscript", Ql.default], ["switch", Jl.default], ["tab", Yl.default], ["table", Kl.default], ["tablist", Zl.default], ["tabpanel", en.default], ["term", rn.default], ["textbox", tn.default], ["time", an.default], ["timer", on.default], ["toolbar", ln.default], ["tooltip", nn.default], ["tree", un.default], ["treegrid", sn.default], ["treeitem", dn.default]], pn = cn;
  return ae.default = pn, ae;
}
var Nr = {}, kr = {}, Eo;
function li() {
  if (Eo) return kr;
  Eo = 1, Object.defineProperty(kr, "__esModule", {
    value: !0
  }), kr.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "abstract [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, e = r;
  return kr.default = e, kr;
}
var Ar = {}, To;
function ni() {
  if (To) return Ar;
  To = 1, Object.defineProperty(Ar, "__esModule", {
    value: !0
  }), Ar.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "acknowledgments [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, e = r;
  return Ar.default = e, Ar;
}
var $r = {}, So;
function ui() {
  if (So) return $r;
  So = 1, Object.defineProperty($r, "__esModule", {
    value: !0
  }), $r.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "afterword [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, e = r;
  return $r.default = e, $r;
}
var jr = {}, Fo;
function ii() {
  if (Fo) return jr;
  Fo = 1, Object.defineProperty(jr, "__esModule", {
    value: !0
  }), jr.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "appendix [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, e = r;
  return jr.default = e, jr;
}
var Lr = {}, No;
function si() {
  if (No) return Lr;
  No = 1, Object.defineProperty(Lr, "__esModule", {
    value: !0
  }), Lr.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-errormessage": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "referrer [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "command", "link"]]
  }, e = r;
  return Lr.default = e, Lr;
}
var Dr = {}, ko;
function di() {
  if (ko) return Dr;
  ko = 1, Object.defineProperty(Dr, "__esModule", {
    value: !0
  }), Dr.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "EPUB biblioentry [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: ["doc-bibliography"],
    requiredContextRole: ["doc-bibliography"],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "listitem"]]
  }, e = r;
  return Dr.default = e, Dr;
}
var Hr = {}, Ao;
function ci() {
  if (Ao) return Hr;
  Ao = 1, Object.defineProperty(Hr, "__esModule", {
    value: !0
  }), Hr.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "bibliography [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["doc-biblioentry"]],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, e = r;
  return Hr.default = e, Hr;
}
var Br = {}, $o;
function pi() {
  if ($o) return Br;
  $o = 1, Object.defineProperty(Br, "__esModule", {
    value: !0
  }), Br.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-errormessage": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "biblioref [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "command", "link"]]
  }, e = r;
  return Br.default = e, Br;
}
var Ir = {}, jo;
function fi() {
  if (jo) return Ir;
  jo = 1, Object.defineProperty(Ir, "__esModule", {
    value: !0
  }), Ir.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "chapter [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, e = r;
  return Ir.default = e, Ir;
}
var Ur = {}, Lo;
function mi() {
  if (Lo) return Ur;
  Lo = 1, Object.defineProperty(Ur, "__esModule", {
    value: !0
  }), Ur.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "colophon [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, e = r;
  return Ur.default = e, Ur;
}
var Vr = {}, Do;
function vi() {
  if (Do) return Vr;
  Do = 1, Object.defineProperty(Vr, "__esModule", {
    value: !0
  }), Vr.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "conclusion [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, e = r;
  return Vr.default = e, Vr;
}
var Gr = {}, Ho;
function Ri() {
  if (Ho) return Gr;
  Ho = 1, Object.defineProperty(Gr, "__esModule", {
    value: !0
  }), Gr.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "cover [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "img"]]
  }, e = r;
  return Gr.default = e, Gr;
}
var zr = {}, Bo;
function bi() {
  if (Bo) return zr;
  Bo = 1, Object.defineProperty(zr, "__esModule", {
    value: !0
  }), zr.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "credit [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, e = r;
  return zr.default = e, zr;
}
var Xr = {}, Io;
function qi() {
  if (Io) return Xr;
  Io = 1, Object.defineProperty(Xr, "__esModule", {
    value: !0
  }), Xr.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "credits [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, e = r;
  return Xr.default = e, Xr;
}
var Wr = {}, Uo;
function hi() {
  if (Uo) return Wr;
  Uo = 1, Object.defineProperty(Wr, "__esModule", {
    value: !0
  }), Wr.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "dedication [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, e = r;
  return Wr.default = e, Wr;
}
var Qr = {}, Vo;
function Ci() {
  if (Vo) return Qr;
  Vo = 1, Object.defineProperty(Qr, "__esModule", {
    value: !0
  }), Qr.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "rearnote [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: ["doc-endnotes"],
    requiredContextRole: ["doc-endnotes"],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "listitem"]]
  }, e = r;
  return Qr.default = e, Qr;
}
var Jr = {}, Go;
function yi() {
  if (Go) return Jr;
  Go = 1, Object.defineProperty(Jr, "__esModule", {
    value: !0
  }), Jr.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "rearnotes [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["doc-endnote"]],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, e = r;
  return Jr.default = e, Jr;
}
var Yr = {}, zo;
function _i() {
  if (zo) return Yr;
  zo = 1, Object.defineProperty(Yr, "__esModule", {
    value: !0
  }), Yr.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "epigraph [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, e = r;
  return Yr.default = e, Yr;
}
var Kr = {}, Xo;
function Pi() {
  if (Xo) return Kr;
  Xo = 1, Object.defineProperty(Kr, "__esModule", {
    value: !0
  }), Kr.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "epilogue [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, e = r;
  return Kr.default = e, Kr;
}
var Zr = {}, Wo;
function gi() {
  if (Wo) return Zr;
  Wo = 1, Object.defineProperty(Zr, "__esModule", {
    value: !0
  }), Zr.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "errata [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, e = r;
  return Zr.default = e, Zr;
}
var et = {}, Qo;
function xi() {
  if (Qo) return et;
  Qo = 1, Object.defineProperty(et, "__esModule", {
    value: !0
  }), et.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, e = r;
  return et.default = e, et;
}
var rt = {}, Jo;
function wi() {
  if (Jo) return rt;
  Jo = 1, Object.defineProperty(rt, "__esModule", {
    value: !0
  }), rt.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "footnote [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, e = r;
  return rt.default = e, rt;
}
var tt = {}, Yo;
function Mi() {
  if (Yo) return tt;
  Yo = 1, Object.defineProperty(tt, "__esModule", {
    value: !0
  }), tt.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "foreword [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, e = r;
  return tt.default = e, tt;
}
var at = {}, Ko;
function Oi() {
  if (Ko) return at;
  Ko = 1, Object.defineProperty(at, "__esModule", {
    value: !0
  }), at.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "glossary [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["definition"], ["term"]],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, e = r;
  return at.default = e, at;
}
var ot = {}, Zo;
function Ei() {
  if (Zo) return ot;
  Zo = 1, Object.defineProperty(ot, "__esModule", {
    value: !0
  }), ot.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-errormessage": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "glossref [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "command", "link"]]
  }, e = r;
  return ot.default = e, ot;
}
var lt = {}, el;
function Ti() {
  if (el) return lt;
  el = 1, Object.defineProperty(lt, "__esModule", {
    value: !0
  }), lt.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "index [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark", "navigation"]]
  }, e = r;
  return lt.default = e, lt;
}
var nt = {}, rl;
function Si() {
  if (rl) return nt;
  rl = 1, Object.defineProperty(nt, "__esModule", {
    value: !0
  }), nt.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "introduction [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, e = r;
  return nt.default = e, nt;
}
var ut = {}, tl;
function Fi() {
  if (tl) return ut;
  tl = 1, Object.defineProperty(ut, "__esModule", {
    value: !0
  }), ut.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-errormessage": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "noteref [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "command", "link"]]
  }, e = r;
  return ut.default = e, ut;
}
var it = {}, al;
function Ni() {
  if (al) return it;
  al = 1, Object.defineProperty(it, "__esModule", {
    value: !0
  }), it.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "notice [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "note"]]
  }, e = r;
  return it.default = e, it;
}
var st = {}, ol;
function ki() {
  if (ol) return st;
  ol = 1, Object.defineProperty(st, "__esModule", {
    value: !0
  }), st.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "pagebreak [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "separator"]]
  }, e = r;
  return st.default = e, st;
}
var dt = {}, ll;
function Ai() {
  if (ll) return dt;
  ll = 1, Object.defineProperty(dt, "__esModule", {
    value: !0
  }), dt.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "page-list [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark", "navigation"]]
  }, e = r;
  return dt.default = e, dt;
}
var ct = {}, nl;
function $i() {
  if (nl) return ct;
  nl = 1, Object.defineProperty(ct, "__esModule", {
    value: !0
  }), ct.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "part [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, e = r;
  return ct.default = e, ct;
}
var pt = {}, ul;
function ji() {
  if (ul) return pt;
  ul = 1, Object.defineProperty(pt, "__esModule", {
    value: !0
  }), pt.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "preface [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, e = r;
  return pt.default = e, pt;
}
var ft = {}, il;
function Li() {
  if (il) return ft;
  il = 1, Object.defineProperty(ft, "__esModule", {
    value: !0
  }), ft.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "prologue [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, e = r;
  return ft.default = e, ft;
}
var mt = {}, sl;
function Di() {
  if (sl) return mt;
  sl = 1, Object.defineProperty(mt, "__esModule", {
    value: !0
  }), mt.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "pullquote [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["none"]]
  }, e = r;
  return mt.default = e, mt;
}
var vt = {}, dl;
function Hi() {
  if (dl) return vt;
  dl = 1, Object.defineProperty(vt, "__esModule", {
    value: !0
  }), vt.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "qna [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, e = r;
  return vt.default = e, vt;
}
var Rt = {}, cl;
function Bi() {
  if (cl) return Rt;
  cl = 1, Object.defineProperty(Rt, "__esModule", {
    value: !0
  }), Rt.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "subtitle [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "sectionhead"]]
  }, e = r;
  return Rt.default = e, Rt;
}
var bt = {}, pl;
function Ii() {
  if (pl) return bt;
  pl = 1, Object.defineProperty(bt, "__esModule", {
    value: !0
  }), bt.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "help [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "note"]]
  }, e = r;
  return bt.default = e, bt;
}
var qt = {}, fl;
function Ui() {
  if (fl) return qt;
  fl = 1, Object.defineProperty(qt, "__esModule", {
    value: !0
  }), qt.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "toc [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark", "navigation"]]
  }, e = r;
  return qt.default = e, qt;
}
var ml;
function Vi() {
  if (ml) return Nr;
  ml = 1, Object.defineProperty(Nr, "__esModule", {
    value: !0
  }), Nr.default = void 0;
  var r = C(li()), e = C(ni()), b = C(ui()), h = C(ii()), q = C(si()), R = C(di()), O = C(ci()), F = C(pi()), E = C(fi()), P = C(mi()), g = C(vi()), x = C(Ri()), t = C(bi()), c = C(qi()), a = C(hi()), p = C(Ci()), _ = C(yi()), u = C(_i()), f = C(Pi()), d = C(gi()), m = C(xi()), i = C(wi()), o = C(Mi()), l = C(Oi()), s = C(Ei()), v = C(Ti()), y = C(Si()), T = C(Fi()), S = C(Ni()), w = C(ki()), M = C(Ai()), N = C($i()), A = C(ji()), j = C(Li()), L = C(Di()), D = C(Hi()), Ot = C(Bi()), Et = C(Ii()), Tt = C(Ui());
  function C($) {
    return $ && $.__esModule ? $ : { default: $ };
  }
  var St = [["doc-abstract", r.default], ["doc-acknowledgments", e.default], ["doc-afterword", b.default], ["doc-appendix", h.default], ["doc-backlink", q.default], ["doc-biblioentry", R.default], ["doc-bibliography", O.default], ["doc-biblioref", F.default], ["doc-chapter", E.default], ["doc-colophon", P.default], ["doc-conclusion", g.default], ["doc-cover", x.default], ["doc-credit", t.default], ["doc-credits", c.default], ["doc-dedication", a.default], ["doc-endnote", p.default], ["doc-endnotes", _.default], ["doc-epigraph", u.default], ["doc-epilogue", f.default], ["doc-errata", d.default], ["doc-example", m.default], ["doc-footnote", i.default], ["doc-foreword", o.default], ["doc-glossary", l.default], ["doc-glossref", s.default], ["doc-index", v.default], ["doc-introduction", y.default], ["doc-noteref", T.default], ["doc-notice", S.default], ["doc-pagebreak", w.default], ["doc-pagelist", M.default], ["doc-part", N.default], ["doc-preface", A.default], ["doc-prologue", j.default], ["doc-pullquote", L.default], ["doc-qna", D.default], ["doc-subtitle", Ot.default], ["doc-tip", Et.default], ["doc-toc", Tt.default]], Ft = St;
  return Nr.default = Ft, Nr;
}
var ht = {}, Ct = {}, vl;
function Gi() {
  if (vl) return Ct;
  vl = 1, Object.defineProperty(Ct, "__esModule", {
    value: !0
  }), Ct.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      module: "GRAPHICS",
      concept: {
        name: "graphics-object"
      }
    }, {
      module: "ARIA",
      concept: {
        name: "img"
      }
    }, {
      module: "ARIA",
      concept: {
        name: "article"
      }
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "document"]]
  }, e = r;
  return Ct.default = e, Ct;
}
var yt = {}, Rl;
function zi() {
  if (Rl) return yt;
  Rl = 1, Object.defineProperty(yt, "__esModule", {
    value: !0
  }), yt.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      module: "GRAPHICS",
      concept: {
        name: "graphics-document"
      }
    }, {
      module: "ARIA",
      concept: {
        name: "group"
      }
    }, {
      module: "ARIA",
      concept: {
        name: "img"
      }
    }, {
      module: "GRAPHICS",
      concept: {
        name: "graphics-symbol"
      }
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "group"]]
  }, e = r;
  return yt.default = e, yt;
}
var _t = {}, bl;
function Xi() {
  if (bl) return _t;
  bl = 1, Object.defineProperty(_t, "__esModule", {
    value: !0
  }), _t.default = void 0;
  var r = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "img"]]
  }, e = r;
  return _t.default = e, _t;
}
var ql;
function Wi() {
  if (ql) return ht;
  ql = 1, Object.defineProperty(ht, "__esModule", {
    value: !0
  }), ht.default = void 0;
  var r = h(Gi()), e = h(zi()), b = h(Xi());
  function h(O) {
    return O && O.__esModule ? O : { default: O };
  }
  var q = [["graphics-document", r.default], ["graphics-object", e.default], ["graphics-symbol", b.default]], R = q;
  return ht.default = R, ht;
}
var hl;
function kt() {
  if (hl) return U;
  hl = 1, Object.defineProperty(U, "__esModule", {
    value: !0
  }), U.default = void 0;
  var r = R(On()), e = R(oi()), b = R(Vi()), h = R(Wi()), q = R(xt());
  function R(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function O(u, f, d) {
    return f in u ? Object.defineProperty(u, f, { value: d, enumerable: !0, configurable: !0, writable: !0 }) : u[f] = d, u;
  }
  function F(u, f) {
    var d = typeof Symbol < "u" && u[Symbol.iterator] || u["@@iterator"];
    if (!d) {
      if (Array.isArray(u) || (d = g(u)) || f) {
        d && (u = d);
        var m = 0, i = function() {
        };
        return { s: i, n: function() {
          return m >= u.length ? { done: !0 } : { done: !1, value: u[m++] };
        }, e: function(y) {
          throw y;
        }, f: i };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var o = !0, l = !1, s;
    return { s: function() {
      d = d.call(u);
    }, n: function() {
      var y = d.next();
      return o = y.done, y;
    }, e: function(y) {
      l = !0, s = y;
    }, f: function() {
      try {
        !o && d.return != null && d.return();
      } finally {
        if (l) throw s;
      }
    } };
  }
  function E(u, f) {
    return c(u) || t(u, f) || g(u, f) || P();
  }
  function P() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function g(u, f) {
    if (u) {
      if (typeof u == "string") return x(u, f);
      var d = Object.prototype.toString.call(u).slice(8, -1);
      if (d === "Object" && u.constructor && (d = u.constructor.name), d === "Map" || d === "Set") return Array.from(u);
      if (d === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d)) return x(u, f);
    }
  }
  function x(u, f) {
    (f == null || f > u.length) && (f = u.length);
    for (var d = 0, m = new Array(f); d < f; d++)
      m[d] = u[d];
    return m;
  }
  function t(u, f) {
    var d = u == null ? null : typeof Symbol < "u" && u[Symbol.iterator] || u["@@iterator"];
    if (d != null) {
      var m = [], i = !0, o = !1, l, s;
      try {
        for (d = d.call(u); !(i = (l = d.next()).done) && (m.push(l.value), !(f && m.length === f)); i = !0)
          ;
      } catch (v) {
        o = !0, s = v;
      } finally {
        try {
          !i && d.return != null && d.return();
        } finally {
          if (o) throw s;
        }
      }
      return m;
    }
  }
  function c(u) {
    if (Array.isArray(u)) return u;
  }
  var a = [].concat(r.default, e.default, b.default, h.default);
  a.forEach(function(u) {
    var f = E(u, 2), d = f[1], m = F(d.superClass), i;
    try {
      for (m.s(); !(i = m.n()).done; ) {
        var o = i.value, l = F(o), s;
        try {
          var v = function() {
            var T = s.value, S = a.find(function(j) {
              var L = E(j, 1), D = L[0];
              return D === T;
            });
            if (S)
              for (var w = S[1], M = 0, N = Object.keys(w.props); M < N.length; M++) {
                var A = N[M];
                Object.prototype.hasOwnProperty.call(d.props, A) || Object.assign(d.props, O({}, A, w.props[A]));
              }
          };
          for (l.s(); !(s = l.n()).done; )
            v();
        } catch (y) {
          l.e(y);
        } finally {
          l.f();
        }
      }
    } catch (y) {
      m.e(y);
    } finally {
      m.f();
    }
  });
  var p = {
    entries: function() {
      return a;
    },
    forEach: function(f) {
      var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, m = F(a), i;
      try {
        for (m.s(); !(i = m.n()).done; ) {
          var o = E(i.value, 2), l = o[0], s = o[1];
          f.call(d, s, l, a);
        }
      } catch (v) {
        m.e(v);
      } finally {
        m.f();
      }
    },
    get: function(f) {
      var d = a.find(function(m) {
        return m[0] === f;
      });
      return d && d[1];
    },
    has: function(f) {
      return !!p.get(f);
    },
    keys: function() {
      return a.map(function(f) {
        var d = E(f, 1), m = d[0];
        return m;
      });
    },
    values: function() {
      return a.map(function(f) {
        var d = E(f, 2), m = d[1];
        return m;
      });
    }
  }, _ = (0, q.default)(p, p.entries());
  return U.default = _, U;
}
var Pt = {}, Nt = {}, Cl;
function Qi() {
  if (Cl) return Nt;
  Cl = 1;
  var r = Object.prototype.hasOwnProperty;
  function e(b, h) {
    var q, R;
    if (b === h) return !0;
    if (b && h && (q = b.constructor) === h.constructor) {
      if (q === Date) return b.getTime() === h.getTime();
      if (q === RegExp) return b.toString() === h.toString();
      if (q === Array) {
        if ((R = b.length) === h.length)
          for (; R-- && e(b[R], h[R]); ) ;
        return R === -1;
      }
      if (!q || typeof b == "object") {
        R = 0;
        for (q in b)
          if (r.call(b, q) && ++R && !r.call(h, q) || !(q in h) || !e(b[q], h[q])) return !1;
        return Object.keys(h).length === R;
      }
    }
    return b !== b && h !== h;
  }
  return Nt.dequal = e, Nt;
}
var yl;
function Ji() {
  if (yl) return Pt;
  yl = 1, Object.defineProperty(Pt, "__esModule", {
    value: !0
  }), Pt.default = void 0;
  var r = Qi(), e = h(xt()), b = h(kt());
  function h(i) {
    return i && i.__esModule ? i : { default: i };
  }
  function q(i, o) {
    return F(i) || O(i, o) || P(i, o) || R();
  }
  function R() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function O(i, o) {
    var l = i == null ? null : typeof Symbol < "u" && i[Symbol.iterator] || i["@@iterator"];
    if (l != null) {
      var s = [], v = !0, y = !1, T, S;
      try {
        for (l = l.call(i); !(v = (T = l.next()).done) && (s.push(T.value), !(o && s.length === o)); v = !0)
          ;
      } catch (w) {
        y = !0, S = w;
      } finally {
        try {
          !v && l.return != null && l.return();
        } finally {
          if (y) throw S;
        }
      }
      return s;
    }
  }
  function F(i) {
    if (Array.isArray(i)) return i;
  }
  function E(i, o) {
    var l = typeof Symbol < "u" && i[Symbol.iterator] || i["@@iterator"];
    if (!l) {
      if (Array.isArray(i) || (l = P(i)) || o) {
        l && (i = l);
        var s = 0, v = function() {
        };
        return { s: v, n: function() {
          return s >= i.length ? { done: !0 } : { done: !1, value: i[s++] };
        }, e: function(M) {
          throw M;
        }, f: v };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var y = !0, T = !1, S;
    return { s: function() {
      l = l.call(i);
    }, n: function() {
      var M = l.next();
      return y = M.done, M;
    }, e: function(M) {
      T = !0, S = M;
    }, f: function() {
      try {
        !y && l.return != null && l.return();
      } finally {
        if (T) throw S;
      }
    } };
  }
  function P(i, o) {
    if (i) {
      if (typeof i == "string") return g(i, o);
      var l = Object.prototype.toString.call(i).slice(8, -1);
      if (l === "Object" && i.constructor && (l = i.constructor.name), l === "Map" || l === "Set") return Array.from(i);
      if (l === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)) return g(i, o);
    }
  }
  function g(i, o) {
    (o == null || o > i.length) && (o = i.length);
    for (var l = 0, s = new Array(o); l < o; l++)
      s[l] = i[l];
    return s;
  }
  for (var x = [], t = b.default.keys(), c = 0; c < t.length; c++) {
    var a = t[c], p = b.default.get(a);
    if (p)
      for (var _ = [].concat(p.baseConcepts, p.relatedConcepts), u = 0; u < _.length; u++) {
        var f = _[u];
        f.module === "HTML" && (function() {
          var i = f.concept;
          if (i) {
            var o = x.find(function(y) {
              return (0, r.dequal)(y, i);
            }), l;
            o ? l = o[1] : l = [];
            for (var s = !0, v = 0; v < l.length; v++)
              if (l[v] === a) {
                s = !1;
                break;
              }
            s && l.push(a), x.push([i, l]);
          }
        })();
      }
  }
  var d = {
    entries: function() {
      return x;
    },
    forEach: function(o) {
      var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, s = E(x), v;
      try {
        for (s.s(); !(v = s.n()).done; ) {
          var y = q(v.value, 2), T = y[0], S = y[1];
          o.call(l, S, T, x);
        }
      } catch (w) {
        s.e(w);
      } finally {
        s.f();
      }
    },
    get: function(o) {
      var l = x.find(function(s) {
        return o.name === s[0].name && (0, r.dequal)(o.attributes, s[0].attributes);
      });
      return l && l[1];
    },
    has: function(o) {
      return !!d.get(o);
    },
    keys: function() {
      return x.map(function(o) {
        var l = q(o, 1), s = l[0];
        return s;
      });
    },
    values: function() {
      return x.map(function(o) {
        var l = q(o, 2), s = l[1];
        return s;
      });
    }
  }, m = (0, e.default)(d, d.entries());
  return Pt.default = m, Pt;
}
var gt = {}, _l;
function Yi() {
  if (_l) return gt;
  _l = 1, Object.defineProperty(gt, "__esModule", {
    value: !0
  }), gt.default = void 0;
  var r = b(xt()), e = b(kt());
  function b(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function h(o, l) {
    return O(o) || R(o, l) || E(o, l) || q();
  }
  function q() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function R(o, l) {
    var s = o == null ? null : typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
    if (s != null) {
      var v = [], y = !0, T = !1, S, w;
      try {
        for (s = s.call(o); !(y = (S = s.next()).done) && (v.push(S.value), !(l && v.length === l)); y = !0)
          ;
      } catch (M) {
        T = !0, w = M;
      } finally {
        try {
          !y && s.return != null && s.return();
        } finally {
          if (T) throw w;
        }
      }
      return v;
    }
  }
  function O(o) {
    if (Array.isArray(o)) return o;
  }
  function F(o, l) {
    var s = typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
    if (!s) {
      if (Array.isArray(o) || (s = E(o)) || l) {
        s && (o = s);
        var v = 0, y = function() {
        };
        return { s: y, n: function() {
          return v >= o.length ? { done: !0 } : { done: !1, value: o[v++] };
        }, e: function(N) {
          throw N;
        }, f: y };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var T = !0, S = !1, w;
    return { s: function() {
      s = s.call(o);
    }, n: function() {
      var N = s.next();
      return T = N.done, N;
    }, e: function(N) {
      S = !0, w = N;
    }, f: function() {
      try {
        !T && s.return != null && s.return();
      } finally {
        if (S) throw w;
      }
    } };
  }
  function E(o, l) {
    if (o) {
      if (typeof o == "string") return P(o, l);
      var s = Object.prototype.toString.call(o).slice(8, -1);
      if (s === "Object" && o.constructor && (s = o.constructor.name), s === "Map" || s === "Set") return Array.from(o);
      if (s === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)) return P(o, l);
    }
  }
  function P(o, l) {
    (l == null || l > o.length) && (l = o.length);
    for (var s = 0, v = new Array(l); s < l; s++)
      v[s] = o[s];
    return v;
  }
  for (var g = [], x = e.default.keys(), t = 0; t < x.length; t++) {
    var c = x[t], a = e.default.get(c), p = [];
    if (a) {
      for (var _ = [].concat(a.baseConcepts, a.relatedConcepts), u = 0; u < _.length; u++) {
        var f = _[u];
        if (f.module === "HTML") {
          var d = f.concept;
          d != null && p.push(d);
        }
      }
      p.length > 0 && g.push([c, p]);
    }
  }
  var m = {
    entries: function() {
      return g;
    },
    forEach: function(l) {
      var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, v = F(g), y;
      try {
        for (v.s(); !(y = v.n()).done; ) {
          var T = h(y.value, 2), S = T[0], w = T[1];
          l.call(s, w, S, g);
        }
      } catch (M) {
        v.e(M);
      } finally {
        v.f();
      }
    },
    get: function(l) {
      var s = g.find(function(v) {
        return v[0] === l;
      });
      return s && s[1];
    },
    has: function(l) {
      return !!m.get(l);
    },
    keys: function() {
      return g.map(function(l) {
        var s = h(l, 1), v = s[0];
        return v;
      });
    },
    values: function() {
      return g.map(function(l) {
        var s = h(l, 2), v = s[1];
        return v;
      });
    }
  }, i = (0, r.default)(m, m.entries());
  return gt.default = i, gt;
}
var Pl;
function Ki() {
  if (Pl) return k;
  Pl = 1, Object.defineProperty(k, "__esModule", {
    value: !0
  }), k.roles = k.roleElements = k.elementRoles = k.dom = k.aria = void 0;
  var r = R(mn()), e = R(vn()), b = R(kt()), h = R(Ji()), q = R(Yi());
  function R(x) {
    return x && x.__esModule ? x : { default: x };
  }
  var O = r.default;
  k.aria = O;
  var F = e.default;
  k.dom = F;
  var E = b.default;
  k.roles = E;
  var P = h.default;
  k.elementRoles = P;
  var g = q.default;
  return k.roleElements = g, k;
}
var Zi = Ki();
export {
  Zi as l
};
