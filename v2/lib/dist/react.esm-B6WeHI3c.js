import * as _p from "react";
import $v from "react";
import Lh from "react-dom";
import { l as iu } from "./index-D6WVIfcJ.js";
import { g as gA } from "./_commonjsHelpers-DaMA6jEr.js";
var _v = { exports: {} }, b0 = {};
/**
 * @license React
 * react-dom-test-utils.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var JS;
function vA() {
  if (JS) return b0;
  JS = 1;
  var d = $v, m = !1;
  return b0.act = function(g) {
    return m === !1 && (m = !0, console.error(
      "`ReactDOMTestUtils.act` is deprecated in favor of `React.act`. Import `act` from `react` instead of `react-dom/test-utils`. See https://react.dev/warnings/react-dom-test-utils for more info."
    )), d.act(g);
  }, b0;
}
var S0 = {};
/**
 * @license React
 * react-dom-test-utils.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kS;
function bA() {
  return kS || (kS = 1, process.env.NODE_ENV !== "production" && (function() {
    var d = $v, m = !1;
    S0.act = function(g) {
      return m === !1 && (m = !0, console.error(
        "`ReactDOMTestUtils.act` is deprecated in favor of `React.act`. Import `act` from `react` instead of `react-dom/test-utils`. See https://react.dev/warnings/react-dom-test-utils for more info."
      )), d.act(g);
    };
  })()), S0;
}
var $S;
function SA() {
  return $S || ($S = 1, process.env.NODE_ENV === "production" ? _v.exports = vA() : _v.exports = bA()), _v.exports;
}
var TA = SA(), qv = { exports: {} }, Np = {}, Lv = { exports: {} }, T0 = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var WS;
function EA() {
  return WS || (WS = 1, (function(d) {
    function m(N, I) {
      var oe = N.length;
      N.push(I);
      e: for (; 0 < oe; ) {
        var Ue = oe - 1 >>> 1, Be = N[Ue];
        if (0 < C(Be, I))
          N[Ue] = I, N[oe] = Be, oe = Ue;
        else break e;
      }
    }
    function g(N) {
      return N.length === 0 ? null : N[0];
    }
    function v(N) {
      if (N.length === 0) return null;
      var I = N[0], oe = N.pop();
      if (oe !== I) {
        N[0] = oe;
        e: for (var Ue = 0, Be = N.length, gt = Be >>> 1; Ue < gt; ) {
          var ze = 2 * (Ue + 1) - 1, Je = N[ze], it = ze + 1, tl = N[it];
          if (0 > C(Je, oe))
            it < Be && 0 > C(tl, Je) ? (N[Ue] = tl, N[it] = oe, Ue = it) : (N[Ue] = Je, N[ze] = oe, Ue = ze);
          else if (it < Be && 0 > C(tl, oe))
            N[Ue] = tl, N[it] = oe, Ue = it;
          else break e;
        }
      }
      return I;
    }
    function C(N, I) {
      var oe = N.sortIndex - I.sortIndex;
      return oe !== 0 ? oe : N.id - I.id;
    }
    if (d.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var B = performance;
      d.unstable_now = function() {
        return B.now();
      };
    } else {
      var x = Date, q = x.now();
      d.unstable_now = function() {
        return x.now() - q;
      };
    }
    var T = [], R = [], O = 1, A = null, U = 3, K = !1, ue = !1, te = !1, ie = !1, H = typeof setTimeout == "function" ? setTimeout : null, de = typeof clearTimeout == "function" ? clearTimeout : null, me = typeof setImmediate < "u" ? setImmediate : null;
    function ye(N) {
      for (var I = g(R); I !== null; ) {
        if (I.callback === null) v(R);
        else if (I.startTime <= N)
          v(R), I.sortIndex = I.expirationTime, m(T, I);
        else break;
        I = g(R);
      }
    }
    function Re(N) {
      if (te = !1, ye(N), !ue)
        if (g(T) !== null)
          ue = !0, k || (k = !0, ve());
        else {
          var I = g(R);
          I !== null && ot(Re, I.startTime - N);
        }
    }
    var k = !1, Q = -1, ce = 5, se = -1;
    function Me() {
      return ie ? !0 : !(d.unstable_now() - se < ce);
    }
    function Oe() {
      if (ie = !1, k) {
        var N = d.unstable_now();
        se = N;
        var I = !0;
        try {
          e: {
            ue = !1, te && (te = !1, de(Q), Q = -1), K = !0;
            var oe = U;
            try {
              t: {
                for (ye(N), A = g(T); A !== null && !(A.expirationTime > N && Me()); ) {
                  var Ue = A.callback;
                  if (typeof Ue == "function") {
                    A.callback = null, U = A.priorityLevel;
                    var Be = Ue(
                      A.expirationTime <= N
                    );
                    if (N = d.unstable_now(), typeof Be == "function") {
                      A.callback = Be, ye(N), I = !0;
                      break t;
                    }
                    A === g(T) && v(T), ye(N);
                  } else v(T);
                  A = g(T);
                }
                if (A !== null) I = !0;
                else {
                  var gt = g(R);
                  gt !== null && ot(
                    Re,
                    gt.startTime - N
                  ), I = !1;
                }
              }
              break e;
            } finally {
              A = null, U = oe, K = !1;
            }
            I = void 0;
          }
        } finally {
          I ? ve() : k = !1;
        }
      }
    }
    var ve;
    if (typeof me == "function")
      ve = function() {
        me(Oe);
      };
    else if (typeof MessageChannel < "u") {
      var fe = new MessageChannel(), De = fe.port2;
      fe.port1.onmessage = Oe, ve = function() {
        De.postMessage(null);
      };
    } else
      ve = function() {
        H(Oe, 0);
      };
    function ot(N, I) {
      Q = H(function() {
        N(d.unstable_now());
      }, I);
    }
    d.unstable_IdlePriority = 5, d.unstable_ImmediatePriority = 1, d.unstable_LowPriority = 4, d.unstable_NormalPriority = 3, d.unstable_Profiling = null, d.unstable_UserBlockingPriority = 2, d.unstable_cancelCallback = function(N) {
      N.callback = null;
    }, d.unstable_forceFrameRate = function(N) {
      0 > N || 125 < N ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : ce = 0 < N ? Math.floor(1e3 / N) : 5;
    }, d.unstable_getCurrentPriorityLevel = function() {
      return U;
    }, d.unstable_next = function(N) {
      switch (U) {
        case 1:
        case 2:
        case 3:
          var I = 3;
          break;
        default:
          I = U;
      }
      var oe = U;
      U = I;
      try {
        return N();
      } finally {
        U = oe;
      }
    }, d.unstable_requestPaint = function() {
      ie = !0;
    }, d.unstable_runWithPriority = function(N, I) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var oe = U;
      U = N;
      try {
        return I();
      } finally {
        U = oe;
      }
    }, d.unstable_scheduleCallback = function(N, I, oe) {
      var Ue = d.unstable_now();
      switch (typeof oe == "object" && oe !== null ? (oe = oe.delay, oe = typeof oe == "number" && 0 < oe ? Ue + oe : Ue) : oe = Ue, N) {
        case 1:
          var Be = -1;
          break;
        case 2:
          Be = 250;
          break;
        case 5:
          Be = 1073741823;
          break;
        case 4:
          Be = 1e4;
          break;
        default:
          Be = 5e3;
      }
      return Be = oe + Be, N = {
        id: O++,
        callback: I,
        priorityLevel: N,
        startTime: oe,
        expirationTime: Be,
        sortIndex: -1
      }, oe > Ue ? (N.sortIndex = oe, m(R, N), g(T) === null && N === g(R) && (te ? (de(Q), Q = -1) : te = !0, ot(Re, oe - Ue))) : (N.sortIndex = Be, m(T, N), ue || K || (ue = !0, k || (k = !0, ve()))), N;
    }, d.unstable_shouldYield = Me, d.unstable_wrapCallback = function(N) {
      var I = U;
      return function() {
        var oe = U;
        U = I;
        try {
          return N.apply(this, arguments);
        } finally {
          U = oe;
        }
      };
    };
  })(T0)), T0;
}
var E0 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var FS;
function AA() {
  return FS || (FS = 1, (function(d) {
    process.env.NODE_ENV !== "production" && (function() {
      function m() {
        if (Re = !1, se) {
          var N = d.unstable_now();
          ve = N;
          var I = !0;
          try {
            e: {
              me = !1, ye && (ye = !1, Q(Me), Me = -1), de = !0;
              var oe = H;
              try {
                t: {
                  for (x(N), ie = v(K); ie !== null && !(ie.expirationTime > N && T()); ) {
                    var Ue = ie.callback;
                    if (typeof Ue == "function") {
                      ie.callback = null, H = ie.priorityLevel;
                      var Be = Ue(
                        ie.expirationTime <= N
                      );
                      if (N = d.unstable_now(), typeof Be == "function") {
                        ie.callback = Be, x(N), I = !0;
                        break t;
                      }
                      ie === v(K) && C(K), x(N);
                    } else C(K);
                    ie = v(K);
                  }
                  if (ie !== null) I = !0;
                  else {
                    var gt = v(ue);
                    gt !== null && R(
                      q,
                      gt.startTime - N
                    ), I = !1;
                  }
                }
                break e;
              } finally {
                ie = null, H = oe, de = !1;
              }
              I = void 0;
            }
          } finally {
            I ? fe() : se = !1;
          }
        }
      }
      function g(N, I) {
        var oe = N.length;
        N.push(I);
        e: for (; 0 < oe; ) {
          var Ue = oe - 1 >>> 1, Be = N[Ue];
          if (0 < B(Be, I))
            N[Ue] = I, N[oe] = Be, oe = Ue;
          else break e;
        }
      }
      function v(N) {
        return N.length === 0 ? null : N[0];
      }
      function C(N) {
        if (N.length === 0) return null;
        var I = N[0], oe = N.pop();
        if (oe !== I) {
          N[0] = oe;
          e: for (var Ue = 0, Be = N.length, gt = Be >>> 1; Ue < gt; ) {
            var ze = 2 * (Ue + 1) - 1, Je = N[ze], it = ze + 1, tl = N[it];
            if (0 > B(Je, oe))
              it < Be && 0 > B(tl, Je) ? (N[Ue] = tl, N[it] = oe, Ue = it) : (N[Ue] = Je, N[ze] = oe, Ue = ze);
            else if (it < Be && 0 > B(tl, oe))
              N[Ue] = tl, N[it] = oe, Ue = it;
            else break e;
          }
        }
        return I;
      }
      function B(N, I) {
        var oe = N.sortIndex - I.sortIndex;
        return oe !== 0 ? oe : N.id - I.id;
      }
      function x(N) {
        for (var I = v(ue); I !== null; ) {
          if (I.callback === null) C(ue);
          else if (I.startTime <= N)
            C(ue), I.sortIndex = I.expirationTime, g(K, I);
          else break;
          I = v(ue);
        }
      }
      function q(N) {
        if (ye = !1, x(N), !me)
          if (v(K) !== null)
            me = !0, se || (se = !0, fe());
          else {
            var I = v(ue);
            I !== null && R(
              q,
              I.startTime - N
            );
          }
      }
      function T() {
        return Re ? !0 : !(d.unstable_now() - ve < Oe);
      }
      function R(N, I) {
        Me = k(function() {
          N(d.unstable_now());
        }, I);
      }
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()), d.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var O = performance;
        d.unstable_now = function() {
          return O.now();
        };
      } else {
        var A = Date, U = A.now();
        d.unstable_now = function() {
          return A.now() - U;
        };
      }
      var K = [], ue = [], te = 1, ie = null, H = 3, de = !1, me = !1, ye = !1, Re = !1, k = typeof setTimeout == "function" ? setTimeout : null, Q = typeof clearTimeout == "function" ? clearTimeout : null, ce = typeof setImmediate < "u" ? setImmediate : null, se = !1, Me = -1, Oe = 5, ve = -1;
      if (typeof ce == "function")
        var fe = function() {
          ce(m);
        };
      else if (typeof MessageChannel < "u") {
        var De = new MessageChannel(), ot = De.port2;
        De.port1.onmessage = m, fe = function() {
          ot.postMessage(null);
        };
      } else
        fe = function() {
          k(m, 0);
        };
      d.unstable_IdlePriority = 5, d.unstable_ImmediatePriority = 1, d.unstable_LowPriority = 4, d.unstable_NormalPriority = 3, d.unstable_Profiling = null, d.unstable_UserBlockingPriority = 2, d.unstable_cancelCallback = function(N) {
        N.callback = null;
      }, d.unstable_forceFrameRate = function(N) {
        0 > N || 125 < N ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : Oe = 0 < N ? Math.floor(1e3 / N) : 5;
      }, d.unstable_getCurrentPriorityLevel = function() {
        return H;
      }, d.unstable_next = function(N) {
        switch (H) {
          case 1:
          case 2:
          case 3:
            var I = 3;
            break;
          default:
            I = H;
        }
        var oe = H;
        H = I;
        try {
          return N();
        } finally {
          H = oe;
        }
      }, d.unstable_requestPaint = function() {
        Re = !0;
      }, d.unstable_runWithPriority = function(N, I) {
        switch (N) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            N = 3;
        }
        var oe = H;
        H = N;
        try {
          return I();
        } finally {
          H = oe;
        }
      }, d.unstable_scheduleCallback = function(N, I, oe) {
        var Ue = d.unstable_now();
        switch (typeof oe == "object" && oe !== null ? (oe = oe.delay, oe = typeof oe == "number" && 0 < oe ? Ue + oe : Ue) : oe = Ue, N) {
          case 1:
            var Be = -1;
            break;
          case 2:
            Be = 250;
            break;
          case 5:
            Be = 1073741823;
            break;
          case 4:
            Be = 1e4;
            break;
          default:
            Be = 5e3;
        }
        return Be = oe + Be, N = {
          id: te++,
          callback: I,
          priorityLevel: N,
          startTime: oe,
          expirationTime: Be,
          sortIndex: -1
        }, oe > Ue ? (N.sortIndex = oe, g(ue, N), v(K) === null && N === v(ue) && (ye ? (Q(Me), Me = -1) : ye = !0, R(q, oe - Ue))) : (N.sortIndex = Be, g(K, N), me || de || (me = !0, se || (se = !0, fe()))), N;
      }, d.unstable_shouldYield = T, d.unstable_wrapCallback = function(N) {
        var I = H;
        return function() {
          var oe = H;
          H = I;
          try {
            return N.apply(this, arguments);
          } finally {
            H = oe;
          }
        };
      }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  })(E0)), E0;
}
var IS;
function CT() {
  return IS || (IS = 1, process.env.NODE_ENV === "production" ? Lv.exports = EA() : Lv.exports = AA()), Lv.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var PS;
function RA() {
  if (PS) return Np;
  PS = 1;
  var d = CT(), m = $v, g = Lh;
  function v(l) {
    var a = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      a += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        a += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + a + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function C(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function B(l) {
    var a = l, u = l;
    if (l.alternate) for (; a.return; ) a = a.return;
    else {
      l = a;
      do
        a = l, (a.flags & 4098) !== 0 && (u = a.return), l = a.return;
      while (l);
    }
    return a.tag === 3 ? u : null;
  }
  function x(l) {
    if (l.tag === 13) {
      var a = l.memoizedState;
      if (a === null && (l = l.alternate, l !== null && (a = l.memoizedState)), a !== null) return a.dehydrated;
    }
    return null;
  }
  function q(l) {
    if (B(l) !== l)
      throw Error(v(188));
  }
  function T(l) {
    var a = l.alternate;
    if (!a) {
      if (a = B(l), a === null) throw Error(v(188));
      return a !== l ? null : l;
    }
    for (var u = l, c = a; ; ) {
      var f = u.return;
      if (f === null) break;
      var s = f.alternate;
      if (s === null) {
        if (c = f.return, c !== null) {
          u = c;
          continue;
        }
        break;
      }
      if (f.child === s.child) {
        for (s = f.child; s; ) {
          if (s === u) return q(f), l;
          if (s === c) return q(f), a;
          s = s.sibling;
        }
        throw Error(v(188));
      }
      if (u.return !== c.return) u = f, c = s;
      else {
        for (var p = !1, b = f.child; b; ) {
          if (b === u) {
            p = !0, u = f, c = s;
            break;
          }
          if (b === c) {
            p = !0, c = f, u = s;
            break;
          }
          b = b.sibling;
        }
        if (!p) {
          for (b = s.child; b; ) {
            if (b === u) {
              p = !0, u = s, c = f;
              break;
            }
            if (b === c) {
              p = !0, c = s, u = f;
              break;
            }
            b = b.sibling;
          }
          if (!p) throw Error(v(189));
        }
      }
      if (u.alternate !== c) throw Error(v(190));
    }
    if (u.tag !== 3) throw Error(v(188));
    return u.stateNode.current === u ? l : a;
  }
  function R(l) {
    var a = l.tag;
    if (a === 5 || a === 26 || a === 27 || a === 6) return l;
    for (l = l.child; l !== null; ) {
      if (a = R(l), a !== null) return a;
      l = l.sibling;
    }
    return null;
  }
  var O = Object.assign, A = Symbol.for("react.element"), U = Symbol.for("react.transitional.element"), K = Symbol.for("react.portal"), ue = Symbol.for("react.fragment"), te = Symbol.for("react.strict_mode"), ie = Symbol.for("react.profiler"), H = Symbol.for("react.provider"), de = Symbol.for("react.consumer"), me = Symbol.for("react.context"), ye = Symbol.for("react.forward_ref"), Re = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), Q = Symbol.for("react.memo"), ce = Symbol.for("react.lazy"), se = Symbol.for("react.activity"), Me = Symbol.for("react.memo_cache_sentinel"), Oe = Symbol.iterator;
  function ve(l) {
    return l === null || typeof l != "object" ? null : (l = Oe && l[Oe] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var fe = Symbol.for("react.client.reference");
  function De(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === fe ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case ue:
        return "Fragment";
      case ie:
        return "Profiler";
      case te:
        return "StrictMode";
      case Re:
        return "Suspense";
      case k:
        return "SuspenseList";
      case se:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case K:
          return "Portal";
        case me:
          return (l.displayName || "Context") + ".Provider";
        case de:
          return (l._context.displayName || "Context") + ".Consumer";
        case ye:
          var a = l.render;
          return l = l.displayName, l || (l = a.displayName || a.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case Q:
          return a = l.displayName || null, a !== null ? a : De(l.type) || "Memo";
        case ce:
          a = l._payload, l = l._init;
          try {
            return De(l(a));
          } catch {
          }
      }
    return null;
  }
  var ot = Array.isArray, N = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = g.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, oe = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Ue = [], Be = -1;
  function gt(l) {
    return { current: l };
  }
  function ze(l) {
    0 > Be || (l.current = Ue[Be], Ue[Be] = null, Be--);
  }
  function Je(l, a) {
    Be++, Ue[Be] = l.current, l.current = a;
  }
  var it = gt(null), tl = gt(null), tt = gt(null), Qu = gt(null);
  function ou(l, a) {
    switch (Je(tt, a), Je(tl, l), Je(it, null), a.nodeType) {
      case 9:
      case 11:
        l = (l = a.documentElement) && (l = l.namespaceURI) ? Hu(l) : 0;
        break;
      default:
        if (l = a.tagName, a = a.namespaceURI)
          a = Hu(a), l = Wo(a, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    ze(it), Je(it, l);
  }
  function Y() {
    ze(it), ze(tl), ze(tt);
  }
  function Ae(l) {
    l.memoizedState !== null && Je(Qu, l);
    var a = it.current, u = Wo(a, l.type);
    a !== u && (Je(tl, l), Je(it, u));
  }
  function he(l) {
    tl.current === l && (ze(it), ze(tl)), Qu.current === l && (ze(Qu), dn._currentValue = oe);
  }
  var nt = Object.prototype.hasOwnProperty, Ze = d.unstable_scheduleCallback, Lt = d.unstable_cancelCallback, Cl = d.unstable_shouldYield, kt = d.unstable_requestPaint, $t = d.unstable_now, Er = d.unstable_getCurrentPriorityLevel, Vp = d.unstable_ImmediatePriority, Xh = d.unstable_UserBlockingPriority, Ar = d.unstable_NormalPriority, Qh = d.unstable_LowPriority, lo = d.unstable_IdlePriority, Pv = d.log, Gp = d.unstable_setDisableYieldValue, no = null, jl = null;
  function ru(l) {
    if (typeof Pv == "function" && Gp(l), jl && typeof jl.setStrictMode == "function")
      try {
        jl.setStrictMode(no, l);
      } catch {
      }
  }
  var Fl = Math.clz32 ? Math.clz32 : eb, Zh = Math.log, Xp = Math.LN2;
  function eb(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Zh(l) / Xp | 0) | 0;
  }
  var ao = 256, fu = 4194304;
  function yn(l) {
    var a = l & 42;
    if (a !== 0) return a;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function Zu(l, a, u) {
    var c = l.pendingLanes;
    if (c === 0) return 0;
    var f = 0, s = l.suspendedLanes, p = l.pingedLanes;
    l = l.warmLanes;
    var b = c & 134217727;
    return b !== 0 ? (c = b & ~s, c !== 0 ? f = yn(c) : (p &= b, p !== 0 ? f = yn(p) : u || (u = b & ~l, u !== 0 && (f = yn(u))))) : (b = c & ~s, b !== 0 ? f = yn(b) : p !== 0 ? f = yn(p) : u || (u = c & ~l, u !== 0 && (f = yn(u)))), f === 0 ? 0 : a !== 0 && a !== f && (a & s) === 0 && (s = f & -f, u = a & -a, s >= u || s === 32 && (u & 4194048) !== 0) ? a : f;
  }
  function pa(l, a) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & a) === 0;
  }
  function fl(l, a) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return a + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return a + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ku() {
    var l = ao;
    return ao <<= 1, (ao & 4194048) === 0 && (ao = 256), l;
  }
  function Li() {
    var l = fu;
    return fu <<= 1, (fu & 62914560) === 0 && (fu = 4194304), l;
  }
  function Ju(l) {
    for (var a = [], u = 0; 31 > u; u++) a.push(l);
    return a;
  }
  function Yi(l, a) {
    l.pendingLanes |= a, a !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function Qp(l, a, u, c, f, s) {
    var p = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var b = l.entanglements, D = l.expirationTimes, V = l.hiddenUpdates;
    for (u = p & ~u; 0 < u; ) {
      var le = 31 - Fl(u), ae = 1 << le;
      b[le] = 0, D[le] = -1;
      var X = V[le];
      if (X !== null)
        for (V[le] = null, le = 0; le < X.length; le++) {
          var J = X[le];
          J !== null && (J.lane &= -536870913);
        }
      u &= ~ae;
    }
    c !== 0 && Rr(l, c, 0), s !== 0 && f === 0 && l.tag !== 0 && (l.suspendedLanes |= s & ~(p & ~a));
  }
  function Rr(l, a, u) {
    l.pendingLanes |= a, l.suspendedLanes &= ~a;
    var c = 31 - Fl(a);
    l.entangledLanes |= a, l.entanglements[c] = l.entanglements[c] | 1073741824 | u & 4194090;
  }
  function Or(l, a) {
    var u = l.entangledLanes |= a;
    for (l = l.entanglements; u; ) {
      var c = 31 - Fl(u), f = 1 << c;
      f & a | l[c] & a && (l[c] |= a), u &= ~f;
    }
  }
  function Fn(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function ps(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Zp() {
    var l = I.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : $y(l.type));
  }
  function tb(l, a) {
    var u = I.p;
    try {
      return I.p = l, a();
    } finally {
      I.p = u;
    }
  }
  var ll = Math.random().toString(36).slice(2), sl = "__reactFiber$" + ll, Vl = "__reactProps$" + ll, uo = "__reactContainer$" + ll, gs = "__reactEvents$" + ll, Kp = "__reactListeners$" + ll, vs = "__reactHandles$" + ll, Jp = "__reactResources$" + ll, Se = "__reactMarker$" + ll;
  function Dr(l) {
    delete l[sl], delete l[Vl], delete l[gs], delete l[Kp], delete l[vs];
  }
  function bl(l) {
    var a = l[sl];
    if (a) return a;
    for (var u = l.parentNode; u; ) {
      if (a = u[uo] || u[sl]) {
        if (u = a.alternate, a.child !== null || u !== null && u.child !== null)
          for (l = Dl(l); l !== null; ) {
            if (u = l[sl]) return u;
            l = Dl(l);
          }
        return a;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function ji(l) {
    if (l = l[sl] || l[uo]) {
      var a = l.tag;
      if (a === 5 || a === 6 || a === 13 || a === 26 || a === 27 || a === 3)
        return l;
    }
    return null;
  }
  function Mr(l) {
    var a = l.tag;
    if (a === 5 || a === 26 || a === 27 || a === 6) return l.stateNode;
    throw Error(v(33));
  }
  function su(l) {
    var a = l[Jp];
    return a || (a = l[Jp] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), a;
  }
  function nl(l) {
    l[Se] = !0;
  }
  var zr = /* @__PURE__ */ new Set(), pn = {};
  function ku(l, a) {
    $u(l, a), $u(l + "Capture", a);
  }
  function $u(l, a) {
    for (pn[l] = a, l = 0; l < a.length; l++)
      zr.add(a[l]);
  }
  var kp = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), bs = {}, Kh = {};
  function $p(l) {
    return nt.call(Kh, l) ? !0 : nt.call(bs, l) ? !1 : kp.test(l) ? Kh[l] = !0 : (bs[l] = !0, !1);
  }
  function du(l, a, u) {
    if ($p(a))
      if (u === null) l.removeAttribute(a);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(a);
            return;
          case "boolean":
            var c = a.toLowerCase().slice(0, 5);
            if (c !== "data-" && c !== "aria-") {
              l.removeAttribute(a);
              return;
            }
        }
        l.setAttribute(a, "" + u);
      }
  }
  function xr(l, a, u) {
    if (u === null) l.removeAttribute(a);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(a);
          return;
      }
      l.setAttribute(a, "" + u);
    }
  }
  function ga(l, a, u, c) {
    if (c === null) l.removeAttribute(u);
    else {
      switch (typeof c) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(a, u, "" + c);
    }
  }
  var Ss, Jh;
  function Vi(l) {
    if (Ss === void 0)
      try {
        throw Error();
      } catch (u) {
        var a = u.stack.trim().match(/\n( *(at )?)/);
        Ss = a && a[1] || "", Jh = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Ss + l + Jh;
  }
  var Gl = !1;
  function Wu(l, a) {
    if (!l || Gl) return "";
    Gl = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var c = {
        DetermineComponentFrameRoot: function() {
          try {
            if (a) {
              var ae = function() {
                throw Error();
              };
              if (Object.defineProperty(ae.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(ae, []);
                } catch (J) {
                  var X = J;
                }
                Reflect.construct(l, [], ae);
              } else {
                try {
                  ae.call();
                } catch (J) {
                  X = J;
                }
                l.call(ae.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (J) {
                X = J;
              }
              (ae = l()) && typeof ae.catch == "function" && ae.catch(function() {
              });
            }
          } catch (J) {
            if (J && X && typeof J.stack == "string")
              return [J.stack, X.stack];
          }
          return [null, null];
        }
      };
      c.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var f = Object.getOwnPropertyDescriptor(
        c.DetermineComponentFrameRoot,
        "name"
      );
      f && f.configurable && Object.defineProperty(
        c.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var s = c.DetermineComponentFrameRoot(), p = s[0], b = s[1];
      if (p && b) {
        var D = p.split(`
`), V = b.split(`
`);
        for (f = c = 0; c < D.length && !D[c].includes("DetermineComponentFrameRoot"); )
          c++;
        for (; f < V.length && !V[f].includes(
          "DetermineComponentFrameRoot"
        ); )
          f++;
        if (c === D.length || f === V.length)
          for (c = D.length - 1, f = V.length - 1; 1 <= c && 0 <= f && D[c] !== V[f]; )
            f--;
        for (; 1 <= c && 0 <= f; c--, f--)
          if (D[c] !== V[f]) {
            if (c !== 1 || f !== 1)
              do
                if (c--, f--, 0 > f || D[c] !== V[f]) {
                  var le = `
` + D[c].replace(" at new ", " at ");
                  return l.displayName && le.includes("<anonymous>") && (le = le.replace("<anonymous>", l.displayName)), le;
                }
              while (1 <= c && 0 <= f);
            break;
          }
      }
    } finally {
      Gl = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? Vi(u) : "";
  }
  function Gi(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Vi(l.type);
      case 16:
        return Vi("Lazy");
      case 13:
        return Vi("Suspense");
      case 19:
        return Vi("SuspenseList");
      case 0:
      case 15:
        return Wu(l.type, !1);
      case 11:
        return Wu(l.type.render, !1);
      case 1:
        return Wu(l.type, !0);
      case 31:
        return Vi("Activity");
      default:
        return "";
    }
  }
  function kh(l) {
    try {
      var a = "";
      do
        a += Gi(l), l = l.return;
      while (l);
      return a;
    } catch (u) {
      return `
Error generating stack: ` + u.message + `
` + u.stack;
    }
  }
  function Hl(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function Ur(l) {
    var a = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (a === "checkbox" || a === "radio");
  }
  function $h(l) {
    var a = Ur(l) ? "checked" : "value", u = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      a
    ), c = "" + l[a];
    if (!l.hasOwnProperty(a) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
      var f = u.get, s = u.set;
      return Object.defineProperty(l, a, {
        configurable: !0,
        get: function() {
          return f.call(this);
        },
        set: function(p) {
          c = "" + p, s.call(this, p);
        }
      }), Object.defineProperty(l, a, {
        enumerable: u.enumerable
      }), {
        getValue: function() {
          return c;
        },
        setValue: function(p) {
          c = "" + p;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[a];
        }
      };
    }
  }
  function Fu(l) {
    l._valueTracker || (l._valueTracker = $h(l));
  }
  function Xi(l) {
    if (!l) return !1;
    var a = l._valueTracker;
    if (!a) return !0;
    var u = a.getValue(), c = "";
    return l && (c = Ur(l) ? l.checked ? "true" : "false" : l.value), l = c, l !== u ? (a.setValue(l), !0) : !1;
  }
  function io(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var lb = /[\n"\\]/g;
  function Hn(l) {
    return l.replace(
      lb,
      function(a) {
        return "\\" + a.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Ts(l, a, u, c, f, s, p, b) {
    l.name = "", p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" ? l.type = p : l.removeAttribute("type"), a != null ? p === "number" ? (a === 0 && l.value === "" || l.value != a) && (l.value = "" + Hl(a)) : l.value !== "" + Hl(a) && (l.value = "" + Hl(a)) : p !== "submit" && p !== "reset" || l.removeAttribute("value"), a != null ? Cr(l, p, Hl(a)) : u != null ? Cr(l, p, Hl(u)) : c != null && l.removeAttribute("value"), f == null && s != null && (l.defaultChecked = !!s), f != null && (l.checked = f && typeof f != "function" && typeof f != "symbol"), b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" ? l.name = "" + Hl(b) : l.removeAttribute("name");
  }
  function Es(l, a, u, c, f, s, p, b) {
    if (s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (l.type = s), a != null || u != null) {
      if (!(s !== "submit" && s !== "reset" || a != null))
        return;
      u = u != null ? "" + Hl(u) : "", a = a != null ? "" + Hl(a) : u, b || a === l.value || (l.value = a), l.defaultValue = a;
    }
    c = c ?? f, c = typeof c != "function" && typeof c != "symbol" && !!c, l.checked = b ? l.checked : !!c, l.defaultChecked = !!c, p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" && (l.name = p);
  }
  function Cr(l, a, u) {
    a === "number" && io(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function Qi(l, a, u, c) {
    if (l = l.options, a) {
      a = {};
      for (var f = 0; f < u.length; f++)
        a["$" + u[f]] = !0;
      for (u = 0; u < l.length; u++)
        f = a.hasOwnProperty("$" + l[u].value), l[u].selected !== f && (l[u].selected = f), f && c && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + Hl(u), a = null, f = 0; f < l.length; f++) {
        if (l[f].value === u) {
          l[f].selected = !0, c && (l[f].defaultSelected = !0);
          return;
        }
        a !== null || l[f].disabled || (a = l[f]);
      }
      a !== null && (a.selected = !0);
    }
  }
  function Wh(l, a, u) {
    if (a != null && (a = "" + Hl(a), a !== l.value && (l.value = a), u == null)) {
      l.defaultValue !== a && (l.defaultValue = a);
      return;
    }
    l.defaultValue = u != null ? "" + Hl(u) : "";
  }
  function Fh(l, a, u, c) {
    if (a == null) {
      if (c != null) {
        if (u != null) throw Error(v(92));
        if (ot(c)) {
          if (1 < c.length) throw Error(v(93));
          c = c[0];
        }
        u = c;
      }
      u == null && (u = ""), a = u;
    }
    u = Hl(a), l.defaultValue = u, c = l.textContent, c === u && c !== "" && c !== null && (l.value = c);
  }
  function co(l, a) {
    if (a) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = a;
        return;
      }
    }
    l.textContent = a;
  }
  var Wp = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function As(l, a, u) {
    var c = a.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? c ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "" : c ? l.setProperty(a, u) : typeof u != "number" || u === 0 || Wp.has(a) ? a === "float" ? l.cssFloat = u : l[a] = ("" + u).trim() : l[a] = u + "px";
  }
  function Hr(l, a, u) {
    if (a != null && typeof a != "object")
      throw Error(v(62));
    if (l = l.style, u != null) {
      for (var c in u)
        !u.hasOwnProperty(c) || a != null && a.hasOwnProperty(c) || (c.indexOf("--") === 0 ? l.setProperty(c, "") : c === "float" ? l.cssFloat = "" : l[c] = "");
      for (var f in a)
        c = a[f], a.hasOwnProperty(f) && u[f] !== c && As(l, f, c);
    } else
      for (var s in a)
        a.hasOwnProperty(s) && As(l, s, a[s]);
  }
  function Zi(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var nb = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Fp = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Br(l) {
    return Fp.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  var Ki = null;
  function Rs(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var oo = null, ro = null;
  function Ip(l) {
    var a = ji(l);
    if (a && (l = a.stateNode)) {
      var u = l[Vl] || null;
      e: switch (l = a.stateNode, a.type) {
        case "input":
          if (Ts(
            l,
            u.value,
            u.defaultValue,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name
          ), a = u.name, u.type === "radio" && a != null) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll(
              'input[name="' + Hn(
                "" + a
              ) + '"][type="radio"]'
            ), a = 0; a < u.length; a++) {
              var c = u[a];
              if (c !== l && c.form === l.form) {
                var f = c[Vl] || null;
                if (!f) throw Error(v(90));
                Ts(
                  c,
                  f.value,
                  f.defaultValue,
                  f.defaultValue,
                  f.checked,
                  f.defaultChecked,
                  f.type,
                  f.name
                );
              }
            }
            for (a = 0; a < u.length; a++)
              c = u[a], c.form === l.form && Xi(c);
          }
          break e;
        case "textarea":
          Wh(l, u.value, u.defaultValue);
          break e;
        case "select":
          a = u.value, a != null && Qi(l, !!u.multiple, a, !1);
      }
    }
  }
  var Ih = !1;
  function fo(l, a, u) {
    if (Ih) return l(a, u);
    Ih = !0;
    try {
      var c = l(a);
      return c;
    } finally {
      if (Ih = !1, (oo !== null || ro !== null) && (Rc(), oo && (a = oo, l = ro, ro = oo = null, Ip(a), l)))
        for (a = 0; a < l.length; a++) Ip(l[a]);
    }
  }
  function Ji(l, a) {
    var u = l.stateNode;
    if (u === null) return null;
    var c = u[Vl] || null;
    if (c === null) return null;
    u = c[a];
    e: switch (a) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (c = !c.disabled) || (l = l.type, c = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !c;
        break e;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function")
      throw Error(
        v(231, a, typeof u)
      );
    return u;
  }
  var va = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Os = !1;
  if (va)
    try {
      var hu = {};
      Object.defineProperty(hu, "passive", {
        get: function() {
          Os = !0;
        }
      }), window.addEventListener("test", hu, hu), window.removeEventListener("test", hu, hu);
    } catch {
      Os = !1;
    }
  var mu = null, so = null, ki = null;
  function Ph() {
    if (ki) return ki;
    var l, a = so, u = a.length, c, f = "value" in mu ? mu.value : mu.textContent, s = f.length;
    for (l = 0; l < u && a[l] === f[l]; l++) ;
    var p = u - l;
    for (c = 1; c <= p && a[u - c] === f[s - c]; c++) ;
    return ki = f.slice(l, 1 < c ? 1 - c : void 0);
  }
  function Sl(l) {
    var a = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && a === 13 && (l = 13)) : l = a, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function Ds() {
    return !0;
  }
  function Ms() {
    return !1;
  }
  function Xl(l) {
    function a(u, c, f, s, p) {
      this._reactName = u, this._targetInst = f, this.type = c, this.nativeEvent = s, this.target = p, this.currentTarget = null;
      for (var b in l)
        l.hasOwnProperty(b) && (u = l[b], this[b] = u ? u(s) : s[b]);
      return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Ds : Ms, this.isPropagationStopped = Ms, this;
    }
    return O(a.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = Ds);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = Ds);
      },
      persist: function() {
      },
      isPersistent: Ds
    }), a;
  }
  var Iu = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, zs = Xl(Iu), Nr = O({}, Iu, { view: 0, detail: 0 }), Pp = Xl(Nr), em, xs, wr, $i = O({}, Nr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: yu,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== wr && (wr && l.type === "mousemove" ? (em = l.screenX - wr.screenX, xs = l.screenY - wr.screenY) : xs = em = 0, wr = l), em);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : xs;
    }
  }), tm = Xl($i), eg = O({}, $i, { dataTransfer: 0 }), tg = Xl(eg), ab = O({}, Nr, { relatedTarget: 0 }), lm = Xl(ab), ub = O({}, Iu, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), ib = Xl(ub), cb = O({}, Iu, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), _r = Xl(cb), lg = O({}, Iu, { data: 0 }), nm = Xl(lg), ng = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, ag = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, am = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function ug(l) {
    var a = this.nativeEvent;
    return a.getModifierState ? a.getModifierState(l) : (l = am[l]) ? !!a[l] : !1;
  }
  function yu() {
    return ug;
  }
  var Wi = O({}, Nr, {
    key: function(l) {
      if (l.key) {
        var a = ng[l.key] || l.key;
        if (a !== "Unidentified") return a;
      }
      return l.type === "keypress" ? (l = Sl(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? ag[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: yu,
    charCode: function(l) {
      return l.type === "keypress" ? Sl(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Sl(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), In = Xl(Wi), gn = O({}, $i, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), qr = Xl(gn), Us = O({}, Nr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: yu
  }), um = Xl(Us), Il = O({}, Iu, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), ig = Xl(Il), Cs = O({}, $i, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Fi = Xl(Cs), im = O({}, Iu, {
    newState: 0,
    oldState: 0
  }), cg = Xl(im), og = [9, 13, 27, 32], Lr = va && "CompositionEvent" in window, Yr = null;
  va && "documentMode" in document && (Yr = document.documentMode);
  var cm = va && "TextEvent" in window && !Yr, ba = va && (!Lr || Yr && 8 < Yr && 11 >= Yr), om = " ", Hs = !1;
  function jr(l, a) {
    switch (l) {
      case "keyup":
        return og.indexOf(a.keyCode) !== -1;
      case "keydown":
        return a.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Pu(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var ei = !1;
  function rm(l, a) {
    switch (l) {
      case "compositionend":
        return Pu(a);
      case "keypress":
        return a.which !== 32 ? null : (Hs = !0, om);
      case "textInput":
        return l = a.data, l === om && Hs ? null : l;
      default:
        return null;
    }
  }
  function Ii(l, a) {
    if (ei)
      return l === "compositionend" || !Lr && jr(l, a) ? (l = Ph(), ki = so = mu = null, ei = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(a.ctrlKey || a.altKey || a.metaKey) || a.ctrlKey && a.altKey) {
          if (a.char && 1 < a.char.length)
            return a.char;
          if (a.which) return String.fromCharCode(a.which);
        }
        return null;
      case "compositionend":
        return ba && a.locale !== "ko" ? null : a.data;
      default:
        return null;
    }
  }
  var rg = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Bs(l) {
    var a = l && l.nodeName && l.nodeName.toLowerCase();
    return a === "input" ? !!rg[l.type] : a === "textarea";
  }
  function Ns(l, a, u, c) {
    oo ? ro ? ro.push(c) : ro = [c] : oo = c, a = $o(a, "onChange"), 0 < a.length && (u = new zs(
      "onChange",
      "change",
      null,
      u,
      c
    ), l.push({ event: u, listeners: a }));
  }
  var Pn = null, ea = null;
  function fm(l) {
    zc(l, 0);
  }
  function Sa(l) {
    var a = Mr(l);
    if (Xi(a)) return l;
  }
  function sm(l, a) {
    if (l === "change") return a;
  }
  var dm = !1;
  if (va) {
    var Pi;
    if (va) {
      var ec = "oninput" in document;
      if (!ec) {
        var hm = document.createElement("div");
        hm.setAttribute("oninput", "return;"), ec = typeof hm.oninput == "function";
      }
      Pi = ec;
    } else Pi = !1;
    dm = Pi && (!document.documentMode || 9 < document.documentMode);
  }
  function ho() {
    Pn && (Pn.detachEvent("onpropertychange", mm), ea = Pn = null);
  }
  function mm(l) {
    if (l.propertyName === "value" && Sa(ea)) {
      var a = [];
      Ns(
        a,
        ea,
        l,
        Rs(l)
      ), fo(fm, a);
    }
  }
  function ws(l, a, u) {
    l === "focusin" ? (ho(), Pn = a, ea = u, Pn.attachEvent("onpropertychange", mm)) : l === "focusout" && ho();
  }
  function ti(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Sa(ea);
  }
  function pu(l, a) {
    if (l === "click") return Sa(a);
  }
  function ym(l, a) {
    if (l === "input" || l === "change")
      return Sa(a);
  }
  function pm(l, a) {
    return l === a && (l !== 0 || 1 / l === 1 / a) || l !== l && a !== a;
  }
  var Tl = typeof Object.is == "function" ? Object.is : pm;
  function li(l, a) {
    if (Tl(l, a)) return !0;
    if (typeof l != "object" || l === null || typeof a != "object" || a === null)
      return !1;
    var u = Object.keys(l), c = Object.keys(a);
    if (u.length !== c.length) return !1;
    for (c = 0; c < u.length; c++) {
      var f = u[c];
      if (!nt.call(a, f) || !Tl(l[f], a[f]))
        return !1;
    }
    return !0;
  }
  function ni(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function zt(l, a) {
    var u = ni(l);
    l = 0;
    for (var c; u; ) {
      if (u.nodeType === 3) {
        if (c = l + u.textContent.length, l <= a && c >= a)
          return { node: u, offset: a - l };
        l = c;
      }
      e: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break e;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = ni(u);
    }
  }
  function Vr(l, a) {
    return l && a ? l === a ? !0 : l && l.nodeType === 3 ? !1 : a && a.nodeType === 3 ? Vr(l, a.parentNode) : "contains" in l ? l.contains(a) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(a) & 16) : !1 : !1;
  }
  function gm(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var a = io(l.document); a instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof a.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = a.contentWindow;
      else break;
      a = io(l.document);
    }
    return a;
  }
  function Gr(l) {
    var a = l && l.nodeName && l.nodeName.toLowerCase();
    return a && (a === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || a === "textarea" || l.contentEditable === "true");
  }
  var tc = va && "documentMode" in document && 11 >= document.documentMode, Ta = null, ta = null, ai = null, lc = !1;
  function _s(l, a, u) {
    var c = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    lc || Ta == null || Ta !== io(c) || (c = Ta, "selectionStart" in c && Gr(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
      anchorNode: c.anchorNode,
      anchorOffset: c.anchorOffset,
      focusNode: c.focusNode,
      focusOffset: c.focusOffset
    }), ai && li(ai, c) || (ai = c, c = $o(ta, "onSelect"), 0 < c.length && (a = new zs(
      "onSelect",
      "select",
      null,
      a,
      u
    ), l.push({ event: a, listeners: c }), a.target = Ta)));
  }
  function gu(l, a) {
    var u = {};
    return u[l.toLowerCase()] = a.toLowerCase(), u["Webkit" + l] = "webkit" + a, u["Moz" + l] = "moz" + a, u;
  }
  var nc = {
    animationend: gu("Animation", "AnimationEnd"),
    animationiteration: gu("Animation", "AnimationIteration"),
    animationstart: gu("Animation", "AnimationStart"),
    transitionrun: gu("Transition", "TransitionRun"),
    transitionstart: gu("Transition", "TransitionStart"),
    transitioncancel: gu("Transition", "TransitionCancel"),
    transitionend: gu("Transition", "TransitionEnd")
  }, Bn = {}, la = {};
  va && (la = document.createElement("div").style, "AnimationEvent" in window || (delete nc.animationend.animation, delete nc.animationiteration.animation, delete nc.animationstart.animation), "TransitionEvent" in window || delete nc.transitionend.transition);
  function Ea(l) {
    if (Bn[l]) return Bn[l];
    if (!nc[l]) return l;
    var a = nc[l], u;
    for (u in a)
      if (a.hasOwnProperty(u) && u in la)
        return Bn[l] = a[u];
    return l;
  }
  var fg = Ea("animationend"), vm = Ea("animationiteration"), sg = Ea("animationstart"), bm = Ea("transitionrun"), qs = Ea("transitionstart"), dg = Ea("transitioncancel"), Sm = Ea("transitionend"), Tm = /* @__PURE__ */ new Map(), mo = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  mo.push("scrollEnd");
  function Nn(l, a) {
    Tm.set(l, a), ku(a, [l]);
  }
  var Em = /* @__PURE__ */ new WeakMap();
  function vn(l, a) {
    if (typeof l == "object" && l !== null) {
      var u = Em.get(l);
      return u !== void 0 ? u : (a = {
        value: l,
        source: a,
        stack: kh(a)
      }, Em.set(l, a), a);
    }
    return {
      value: l,
      source: a,
      stack: kh(a)
    };
  }
  var Pl = [], ui = 0, Aa = 0;
  function na() {
    for (var l = ui, a = Aa = ui = 0; a < l; ) {
      var u = Pl[a];
      Pl[a++] = null;
      var c = Pl[a];
      Pl[a++] = null;
      var f = Pl[a];
      Pl[a++] = null;
      var s = Pl[a];
      if (Pl[a++] = null, c !== null && f !== null) {
        var p = c.pending;
        p === null ? f.next = f : (f.next = p.next, p.next = f), c.pending = f;
      }
      s !== 0 && po(u, f, s);
    }
  }
  function ii(l, a, u, c) {
    Pl[ui++] = l, Pl[ui++] = a, Pl[ui++] = u, Pl[ui++] = c, Aa |= c, l.lanes |= c, l = l.alternate, l !== null && (l.lanes |= c);
  }
  function yo(l, a, u, c) {
    return ii(l, a, u, c), Xr(l);
  }
  function Ra(l, a) {
    return ii(l, null, null, a), Xr(l);
  }
  function po(l, a, u) {
    l.lanes |= u;
    var c = l.alternate;
    c !== null && (c.lanes |= u);
    for (var f = !1, s = l.return; s !== null; )
      s.childLanes |= u, c = s.alternate, c !== null && (c.childLanes |= u), s.tag === 22 && (l = s.stateNode, l === null || l._visibility & 1 || (f = !0)), l = s, s = s.return;
    return l.tag === 3 ? (s = l.stateNode, f && a !== null && (f = 31 - Fl(u), l = s.hiddenUpdates, c = l[f], c === null ? l[f] = [a] : c.push(a), a.lane = u | 536870912), s) : null;
  }
  function Xr(l) {
    if (50 < Xo)
      throw Xo = 0, Ey = null, Error(v(185));
    for (var a = l.return; a !== null; )
      l = a, a = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var go = {};
  function hg(l, a, u, c) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = a, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function en(l, a, u, c) {
    return new hg(l, a, u, c);
  }
  function Qr(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function aa(l, a) {
    var u = l.alternate;
    return u === null ? (u = en(
      l.tag,
      a,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = a, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 65011712, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, a = l.dependencies, u.dependencies = a === null ? null : { lanes: a.lanes, firstContext: a.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function ke(l, a) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = a, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, a = u.dependencies, l.dependencies = a === null ? null : {
      lanes: a.lanes,
      firstContext: a.firstContext
    }), l;
  }
  function re(l, a, u, c, f, s) {
    var p = 0;
    if (c = l, typeof l == "function") Qr(l) && (p = 1);
    else if (typeof l == "string")
      p = Jg(
        l,
        u,
        it.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      e: switch (l) {
        case se:
          return l = en(31, u, a, f), l.elementType = se, l.lanes = s, l;
        case ue:
          return wn(u.children, f, s, a);
        case te:
          p = 8, f |= 24;
          break;
        case ie:
          return l = en(12, u, a, f | 2), l.elementType = ie, l.lanes = s, l;
        case Re:
          return l = en(13, u, a, f), l.elementType = Re, l.lanes = s, l;
        case k:
          return l = en(19, u, a, f), l.elementType = k, l.lanes = s, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case H:
              case me:
                p = 10;
                break e;
              case de:
                p = 9;
                break e;
              case ye:
                p = 11;
                break e;
              case Q:
                p = 14;
                break e;
              case ce:
                p = 16, c = null;
                break e;
            }
          p = 29, u = Error(
            v(130, l === null ? "null" : typeof l, "")
          ), c = null;
      }
    return a = en(p, u, a, f), a.elementType = l, a.type = c, a.lanes = s, a;
  }
  function wn(l, a, u, c) {
    return l = en(7, l, c, a), l.lanes = u, l;
  }
  function vo(l, a, u) {
    return l = en(6, l, null, a), l.lanes = u, l;
  }
  function wt(l, a, u) {
    return a = en(
      4,
      l.children !== null ? l.children : [],
      l.key,
      a
    ), a.lanes = u, a.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, a;
  }
  var ci = [], oi = 0, Zr = null, bo = 0, _n = [], tn = 0, vu = null, ua = 1, Yt = "";
  function at(l, a) {
    ci[oi++] = bo, ci[oi++] = Zr, Zr = l, bo = a;
  }
  function Ls(l, a, u) {
    _n[tn++] = ua, _n[tn++] = Yt, _n[tn++] = vu, vu = l;
    var c = ua;
    l = Yt;
    var f = 32 - Fl(c) - 1;
    c &= ~(1 << f), u += 1;
    var s = 32 - Fl(a) + f;
    if (30 < s) {
      var p = f - f % 5;
      s = (c & (1 << p) - 1).toString(32), c >>= p, f -= p, ua = 1 << 32 - Fl(a) + f | u << f | c, Yt = s + l;
    } else
      ua = 1 << s | u << f | c, Yt = l;
  }
  function ac(l) {
    l.return !== null && (at(l, 1), Ls(l, 1, 0));
  }
  function Oa(l) {
    for (; l === Zr; )
      Zr = ci[--oi], ci[oi] = null, bo = ci[--oi], ci[oi] = null;
    for (; l === vu; )
      vu = _n[--tn], _n[tn] = null, Yt = _n[--tn], _n[tn] = null, ua = _n[--tn], _n[tn] = null;
  }
  var Wt = null, ft = null, rt = !1, qn = null, Ln = !1, uc = Error(v(519));
  function bu(l) {
    var a = Error(v(418, ""));
    throw Eo(vn(a, l)), uc;
  }
  function Kr(l) {
    var a = l.stateNode, u = l.type, c = l.memoizedProps;
    switch (a[sl] = l, a[Vl] = c, u) {
      case "dialog":
        Ve("cancel", a), Ve("close", a);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ve("load", a);
        break;
      case "video":
      case "audio":
        for (u = 0; u < Hf.length; u++)
          Ve(Hf[u], a);
        break;
      case "source":
        Ve("error", a);
        break;
      case "img":
      case "image":
      case "link":
        Ve("error", a), Ve("load", a);
        break;
      case "details":
        Ve("toggle", a);
        break;
      case "input":
        Ve("invalid", a), Es(
          a,
          c.value,
          c.defaultValue,
          c.checked,
          c.defaultChecked,
          c.type,
          c.name,
          !0
        ), Fu(a);
        break;
      case "select":
        Ve("invalid", a);
        break;
      case "textarea":
        Ve("invalid", a), Fh(a, c.value, c.defaultValue, c.children), Fu(a);
    }
    u = c.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || a.textContent === "" + u || c.suppressHydrationWarning === !0 || _y(a.textContent, u) ? (c.popover != null && (Ve("beforetoggle", a), Ve("toggle", a)), c.onScroll != null && Ve("scroll", a), c.onScrollEnd != null && Ve("scrollend", a), c.onClick != null && (a.onclick = kd), a = !0) : a = !1, a || bu(l);
  }
  function Am(l) {
    for (Wt = l.return; Wt; )
      switch (Wt.tag) {
        case 5:
        case 13:
          Ln = !1;
          return;
        case 27:
        case 3:
          Ln = !0;
          return;
        default:
          Wt = Wt.return;
      }
  }
  function So(l) {
    if (l !== Wt) return !1;
    if (!rt) return Am(l), rt = !0, !1;
    var a = l.tag, u;
    if ((u = a !== 3 && a !== 27) && ((u = a === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || Za(l.type, l.memoizedProps)), u = !u), u && ft && bu(l), Am(l), a === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(v(317));
      e: {
        for (l = l.nextSibling, a = 0; l; ) {
          if (l.nodeType === 8)
            if (u = l.data, u === "/$") {
              if (a === 0) {
                ft = sa(l.nextSibling);
                break e;
              }
              a--;
            } else
              u !== "$" && u !== "$!" && u !== "$?" || a++;
          l = l.nextSibling;
        }
        ft = null;
      }
    } else
      a === 27 ? (a = ft, Di(l.type) ? (l = Mi, Mi = null, ft = l) : ft = a) : ft = Wt ? sa(l.stateNode.nextSibling) : null;
    return !0;
  }
  function To() {
    ft = Wt = null, rt = !1;
  }
  function Rm() {
    var l = qn;
    return l !== null && (on === null ? on = l : on.push.apply(
      on,
      l
    ), qn = null), l;
  }
  function Eo(l) {
    qn === null ? qn = [l] : qn.push(l);
  }
  var Jr = gt(null), Su = null, ia = null;
  function Tu(l, a, u) {
    Je(Jr, a._currentValue), a._currentValue = u;
  }
  function Da(l) {
    l._currentValue = Jr.current, ze(Jr);
  }
  function Ys(l, a, u) {
    for (; l !== null; ) {
      var c = l.alternate;
      if ((l.childLanes & a) !== a ? (l.childLanes |= a, c !== null && (c.childLanes |= a)) : c !== null && (c.childLanes & a) !== a && (c.childLanes |= a), l === u) break;
      l = l.return;
    }
  }
  function Om(l, a, u, c) {
    var f = l.child;
    for (f !== null && (f.return = l); f !== null; ) {
      var s = f.dependencies;
      if (s !== null) {
        var p = f.child;
        s = s.firstContext;
        e: for (; s !== null; ) {
          var b = s;
          s = f;
          for (var D = 0; D < a.length; D++)
            if (b.context === a[D]) {
              s.lanes |= u, b = s.alternate, b !== null && (b.lanes |= u), Ys(
                s.return,
                u,
                l
              ), c || (p = null);
              break e;
            }
          s = b.next;
        }
      } else if (f.tag === 18) {
        if (p = f.return, p === null) throw Error(v(341));
        p.lanes |= u, s = p.alternate, s !== null && (s.lanes |= u), Ys(p, u, l), p = null;
      } else p = f.child;
      if (p !== null) p.return = f;
      else
        for (p = f; p !== null; ) {
          if (p === l) {
            p = null;
            break;
          }
          if (f = p.sibling, f !== null) {
            f.return = p.return, p = f;
            break;
          }
          p = p.return;
        }
      f = p;
    }
  }
  function Ao(l, a, u, c) {
    l = null;
    for (var f = a, s = !1; f !== null; ) {
      if (!s) {
        if ((f.flags & 524288) !== 0) s = !0;
        else if ((f.flags & 262144) !== 0) break;
      }
      if (f.tag === 10) {
        var p = f.alternate;
        if (p === null) throw Error(v(387));
        if (p = p.memoizedProps, p !== null) {
          var b = f.type;
          Tl(f.pendingProps.value, p.value) || (l !== null ? l.push(b) : l = [b]);
        }
      } else if (f === Qu.current) {
        if (p = f.alternate, p === null) throw Error(v(387));
        p.memoizedState.memoizedState !== f.memoizedState.memoizedState && (l !== null ? l.push(dn) : l = [dn]);
      }
      f = f.return;
    }
    l !== null && Om(
      a,
      l,
      u,
      c
    ), a.flags |= 262144;
  }
  function kr(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!Tl(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function ri(l) {
    Su = l, ia = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function dl(l) {
    return Dm(Su, l);
  }
  function $r(l, a) {
    return Su === null && ri(l), Dm(l, a);
  }
  function Dm(l, a) {
    var u = a._currentValue;
    if (a = { context: a, memoizedValue: u, next: null }, ia === null) {
      if (l === null) throw Error(v(308));
      ia = a, l.dependencies = { lanes: 0, firstContext: a }, l.flags |= 524288;
    } else ia = ia.next = a;
    return u;
  }
  var Ro = typeof AbortController < "u" ? AbortController : function() {
    var l = [], a = this.signal = {
      aborted: !1,
      addEventListener: function(u, c) {
        l.push(c);
      }
    };
    this.abort = function() {
      a.aborted = !0, l.forEach(function(u) {
        return u();
      });
    };
  }, js = d.unstable_scheduleCallback, mg = d.unstable_NormalPriority, al = {
    $$typeof: me,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Oo() {
    return {
      controller: new Ro(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ma(l) {
    l.refCount--, l.refCount === 0 && js(mg, function() {
      l.controller.abort();
    });
  }
  var fi = null, Wr = 0, Yn = 0, ul = null;
  function Vs(l, a) {
    if (fi === null) {
      var u = fi = [];
      Wr = 0, Yn = Mc(), ul = {
        status: "pending",
        value: void 0,
        then: function(c) {
          u.push(c);
        }
      };
    }
    return Wr++, a.then(Gs, Gs), a;
  }
  function Gs() {
    if (--Wr === 0 && fi !== null) {
      ul !== null && (ul.status = "fulfilled");
      var l = fi;
      fi = null, Yn = 0, ul = null;
      for (var a = 0; a < l.length; a++) (0, l[a])();
    }
  }
  function yg(l, a) {
    var u = [], c = {
      status: "pending",
      value: null,
      reason: null,
      then: function(f) {
        u.push(f);
      }
    };
    return l.then(
      function() {
        c.status = "fulfilled", c.value = a;
        for (var f = 0; f < u.length; f++) (0, u[f])(a);
      },
      function(f) {
        for (c.status = "rejected", c.reason = f, f = 0; f < u.length; f++)
          (0, u[f])(void 0);
      }
    ), c;
  }
  var Xs = N.S;
  N.S = function(l, a) {
    typeof a == "object" && a !== null && typeof a.then == "function" && Vs(l, a), Xs !== null && Xs(l, a);
  };
  var za = gt(null);
  function Fr() {
    var l = za.current;
    return l !== null ? l : At.pooledCache;
  }
  function ic(l, a) {
    a === null ? Je(za, za.current) : Je(za, a.pool);
  }
  function Qs() {
    var l = Fr();
    return l === null ? null : { parent: al._currentValue, pool: l };
  }
  var si = Error(v(460)), Zs = Error(v(474)), Ir = Error(v(542)), Ks = { then: function() {
  } };
  function Js(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Pr() {
  }
  function Mm(l, a, u) {
    switch (u = l[u], u === void 0 ? l.push(a) : u !== a && (a.then(Pr, Pr), a = u), a.status) {
      case "fulfilled":
        return a.value;
      case "rejected":
        throw l = a.reason, xm(l), l;
      default:
        if (typeof a.status == "string") a.then(Pr, Pr);
        else {
          if (l = At, l !== null && 100 < l.shellSuspendCounter)
            throw Error(v(482));
          l = a, l.status = "pending", l.then(
            function(c) {
              if (a.status === "pending") {
                var f = a;
                f.status = "fulfilled", f.value = c;
              }
            },
            function(c) {
              if (a.status === "pending") {
                var f = a;
                f.status = "rejected", f.reason = c;
              }
            }
          );
        }
        switch (a.status) {
          case "fulfilled":
            return a.value;
          case "rejected":
            throw l = a.reason, xm(l), l;
        }
        throw cc = a, si;
    }
  }
  var cc = null;
  function zm() {
    if (cc === null) throw Error(v(459));
    var l = cc;
    return cc = null, l;
  }
  function xm(l) {
    if (l === si || l === Ir)
      throw Error(v(483));
  }
  var xa = !1;
  function ks(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function $s(l, a) {
    l = l.updateQueue, a.updateQueue === l && (a.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function ln(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function Ua(l, a, u) {
    var c = l.updateQueue;
    if (c === null) return null;
    if (c = c.shared, (yt & 2) !== 0) {
      var f = c.pending;
      return f === null ? a.next = a : (a.next = f.next, f.next = a), c.pending = a, a = Xr(l), po(l, null, u), a;
    }
    return ii(l, c, a, u), Xr(l);
  }
  function oc(l, a, u) {
    if (a = a.updateQueue, a !== null && (a = a.shared, (u & 4194048) !== 0)) {
      var c = a.lanes;
      c &= l.pendingLanes, u |= c, a.lanes = u, Or(l, u);
    }
  }
  function Um(l, a) {
    var u = l.updateQueue, c = l.alternate;
    if (c !== null && (c = c.updateQueue, u === c)) {
      var f = null, s = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var p = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          s === null ? f = s = p : s = s.next = p, u = u.next;
        } while (u !== null);
        s === null ? f = s = a : s = s.next = a;
      } else f = s = a;
      u = {
        baseState: c.baseState,
        firstBaseUpdate: f,
        lastBaseUpdate: s,
        shared: c.shared,
        callbacks: c.callbacks
      }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = a : l.next = a, u.lastBaseUpdate = a;
  }
  var Cm = !1;
  function Do() {
    if (Cm) {
      var l = ul;
      if (l !== null) throw l;
    }
  }
  function Eu(l, a, u, c) {
    Cm = !1;
    var f = l.updateQueue;
    xa = !1;
    var s = f.firstBaseUpdate, p = f.lastBaseUpdate, b = f.shared.pending;
    if (b !== null) {
      f.shared.pending = null;
      var D = b, V = D.next;
      D.next = null, p === null ? s = V : p.next = V, p = D;
      var le = l.alternate;
      le !== null && (le = le.updateQueue, b = le.lastBaseUpdate, b !== p && (b === null ? le.firstBaseUpdate = V : b.next = V, le.lastBaseUpdate = D));
    }
    if (s !== null) {
      var ae = f.baseState;
      p = 0, le = V = D = null, b = s;
      do {
        var X = b.lane & -536870913, J = X !== b.lane;
        if (J ? (Pe & X) === X : (c & X) === X) {
          X !== 0 && X === Yn && (Cm = !0), le !== null && (le = le.next = {
            lane: 0,
            tag: b.tag,
            payload: b.payload,
            callback: null,
            next: null
          });
          e: {
            var Ce = l, He = b;
            X = a;
            var dt = u;
            switch (He.tag) {
              case 1:
                if (Ce = He.payload, typeof Ce == "function") {
                  ae = Ce.call(dt, ae, X);
                  break e;
                }
                ae = Ce;
                break e;
              case 3:
                Ce.flags = Ce.flags & -65537 | 128;
              case 0:
                if (Ce = He.payload, X = typeof Ce == "function" ? Ce.call(dt, ae, X) : Ce, X == null) break e;
                ae = O({}, ae, X);
                break e;
              case 2:
                xa = !0;
            }
          }
          X = b.callback, X !== null && (l.flags |= 64, J && (l.flags |= 8192), J = f.callbacks, J === null ? f.callbacks = [X] : J.push(X));
        } else
          J = {
            lane: X,
            tag: b.tag,
            payload: b.payload,
            callback: b.callback,
            next: null
          }, le === null ? (V = le = J, D = ae) : le = le.next = J, p |= X;
        if (b = b.next, b === null) {
          if (b = f.shared.pending, b === null)
            break;
          J = b, b = J.next, J.next = null, f.lastBaseUpdate = J, f.shared.pending = null;
        }
      } while (!0);
      le === null && (D = ae), f.baseState = D, f.firstBaseUpdate = V, f.lastBaseUpdate = le, s === null && (f.shared.lanes = 0), xu |= p, l.lanes = p, l.memoizedState = ae;
    }
  }
  function Ws(l, a) {
    if (typeof l != "function")
      throw Error(v(191, l));
    l.call(a);
  }
  function ef(l, a) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        Ws(u[l], a);
  }
  var rc = gt(null), tf = gt(0);
  function hl(l, a) {
    l = zu, Je(tf, l), Je(rc, a), zu = l | a.baseLanes;
  }
  function Mo() {
    Je(tf, zu), Je(rc, rc.current);
  }
  function zo() {
    zu = tf.current, ze(rc), ze(tf);
  }
  var jn = 0, je = null, mt = null, _t = null, lf = !1, bn = !1, di = !1, ca = 0, Sn = 0, Au = null, Hm = 0;
  function qt() {
    throw Error(v(321));
  }
  function Fs(l, a) {
    if (a === null) return !1;
    for (var u = 0; u < a.length && u < l.length; u++)
      if (!Tl(l[u], a[u])) return !1;
    return !0;
  }
  function Is(l, a, u, c, f, s) {
    return jn = s, je = a, a.memoizedState = null, a.updateQueue = null, a.lanes = 0, N.H = l === null || l.memoizedState === null ? Jm : km, di = !1, s = u(c, f), di = !1, bn && (s = Bm(
      a,
      u,
      c,
      f
    )), hi(l), s;
  }
  function hi(l) {
    N.H = yd;
    var a = mt !== null && mt.next !== null;
    if (jn = 0, _t = mt = je = null, lf = !1, Sn = 0, Au = null, a) throw Error(v(300));
    l === null || il || (l = l.dependencies, l !== null && kr(l) && (il = !0));
  }
  function Bm(l, a, u, c) {
    je = l;
    var f = 0;
    do {
      if (bn && (Au = null), Sn = 0, bn = !1, 25 <= f) throw Error(v(301));
      if (f += 1, _t = mt = null, l.updateQueue != null) {
        var s = l.updateQueue;
        s.lastEffect = null, s.events = null, s.stores = null, s.memoCache != null && (s.memoCache.index = 0);
      }
      N.H = Ru, s = a(u, c);
    } while (bn);
    return s;
  }
  function pg() {
    var l = N.H, a = l.useState()[0];
    return a = typeof a.then == "function" ? af(a) : a, l = l.useState()[0], (mt !== null ? mt.memoizedState : null) !== l && (je.flags |= 1024), a;
  }
  function Ps() {
    var l = ca !== 0;
    return ca = 0, l;
  }
  function xo(l, a, u) {
    a.updateQueue = l.updateQueue, a.flags &= -2053, l.lanes &= ~u;
  }
  function ed(l) {
    if (lf) {
      for (l = l.memoizedState; l !== null; ) {
        var a = l.queue;
        a !== null && (a.pending = null), l = l.next;
      }
      lf = !1;
    }
    jn = 0, _t = mt = je = null, bn = !1, Sn = ca = 0, Au = null;
  }
  function Bl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return _t === null ? je.memoizedState = _t = l : _t = _t.next = l, _t;
  }
  function jt() {
    if (mt === null) {
      var l = je.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = mt.next;
    var a = _t === null ? je.memoizedState : _t.next;
    if (a !== null)
      _t = a, mt = l;
    else {
      if (l === null)
        throw je.alternate === null ? Error(v(467)) : Error(v(310));
      mt = l, l = {
        memoizedState: mt.memoizedState,
        baseState: mt.baseState,
        baseQueue: mt.baseQueue,
        queue: mt.queue,
        next: null
      }, _t === null ? je.memoizedState = _t = l : _t = _t.next = l;
    }
    return _t;
  }
  function nf() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function af(l) {
    var a = Sn;
    return Sn += 1, Au === null && (Au = []), l = Mm(Au, l, a), a = je, (_t === null ? a.memoizedState : _t.next) === null && (a = a.alternate, N.H = a === null || a.memoizedState === null ? Jm : km), l;
  }
  function Ft(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return af(l);
      if (l.$$typeof === me) return dl(l);
    }
    throw Error(v(438, String(l)));
  }
  function td(l) {
    var a = null, u = je.updateQueue;
    if (u !== null && (a = u.memoCache), a == null) {
      var c = je.alternate;
      c !== null && (c = c.updateQueue, c !== null && (c = c.memoCache, c != null && (a = {
        data: c.data.map(function(f) {
          return f.slice();
        }),
        index: 0
      })));
    }
    if (a == null && (a = { data: [], index: 0 }), u === null && (u = nf(), je.updateQueue = u), u.memoCache = a, u = a.data[a.index], u === void 0)
      for (u = a.data[a.index] = Array(l), c = 0; c < l; c++)
        u[c] = Me;
    return a.index++, u;
  }
  function Ca(l, a) {
    return typeof a == "function" ? a(l) : a;
  }
  function uf(l) {
    var a = jt();
    return ld(a, mt, l);
  }
  function ld(l, a, u) {
    var c = l.queue;
    if (c === null) throw Error(v(311));
    c.lastRenderedReducer = u;
    var f = l.baseQueue, s = c.pending;
    if (s !== null) {
      if (f !== null) {
        var p = f.next;
        f.next = s.next, s.next = p;
      }
      a.baseQueue = f = s, c.pending = null;
    }
    if (s = l.baseState, f === null) l.memoizedState = s;
    else {
      a = f.next;
      var b = p = null, D = null, V = a, le = !1;
      do {
        var ae = V.lane & -536870913;
        if (ae !== V.lane ? (Pe & ae) === ae : (jn & ae) === ae) {
          var X = V.revertLane;
          if (X === 0)
            D !== null && (D = D.next = {
              lane: 0,
              revertLane: 0,
              action: V.action,
              hasEagerState: V.hasEagerState,
              eagerState: V.eagerState,
              next: null
            }), ae === Yn && (le = !0);
          else if ((jn & X) === X) {
            V = V.next, X === Yn && (le = !0);
            continue;
          } else
            ae = {
              lane: 0,
              revertLane: V.revertLane,
              action: V.action,
              hasEagerState: V.hasEagerState,
              eagerState: V.eagerState,
              next: null
            }, D === null ? (b = D = ae, p = s) : D = D.next = ae, je.lanes |= X, xu |= X;
          ae = V.action, di && u(s, ae), s = V.hasEagerState ? V.eagerState : u(s, ae);
        } else
          X = {
            lane: ae,
            revertLane: V.revertLane,
            action: V.action,
            hasEagerState: V.hasEagerState,
            eagerState: V.eagerState,
            next: null
          }, D === null ? (b = D = X, p = s) : D = D.next = X, je.lanes |= ae, xu |= ae;
        V = V.next;
      } while (V !== null && V !== a);
      if (D === null ? p = s : D.next = b, !Tl(s, l.memoizedState) && (il = !0, le && (u = ul, u !== null)))
        throw u;
      l.memoizedState = s, l.baseState = p, l.baseQueue = D, c.lastRenderedState = s;
    }
    return f === null && (c.lanes = 0), [l.memoizedState, c.dispatch];
  }
  function nd(l) {
    var a = jt(), u = a.queue;
    if (u === null) throw Error(v(311));
    u.lastRenderedReducer = l;
    var c = u.dispatch, f = u.pending, s = a.memoizedState;
    if (f !== null) {
      u.pending = null;
      var p = f = f.next;
      do
        s = l(s, p.action), p = p.next;
      while (p !== f);
      Tl(s, a.memoizedState) || (il = !0), a.memoizedState = s, a.baseQueue === null && (a.baseState = s), u.lastRenderedState = s;
    }
    return [s, c];
  }
  function cf(l, a, u) {
    var c = je, f = jt(), s = rt;
    if (s) {
      if (u === void 0) throw Error(v(407));
      u = u();
    } else u = a();
    var p = !Tl(
      (mt || f).memoizedState,
      u
    );
    p && (f.memoizedState = u, il = !0), f = f.queue;
    var b = wm.bind(null, c, f, l);
    if (St(2048, 8, b, [l]), f.getSnapshot !== a || p || _t !== null && _t.memoizedState.tag & 1) {
      if (c.flags |= 2048, nn(
        9,
        ff(),
        Nm.bind(
          null,
          c,
          f,
          u,
          a
        ),
        null
      ), At === null) throw Error(v(349));
      s || (jn & 124) !== 0 || ad(c, a, u);
    }
    return u;
  }
  function ad(l, a, u) {
    l.flags |= 16384, l = { getSnapshot: a, value: u }, a = je.updateQueue, a === null ? (a = nf(), je.updateQueue = a, a.stores = [l]) : (u = a.stores, u === null ? a.stores = [l] : u.push(l));
  }
  function Nm(l, a, u, c) {
    a.value = u, a.getSnapshot = c, _m(a) && ud(l);
  }
  function wm(l, a, u) {
    return u(function() {
      _m(a) && ud(l);
    });
  }
  function _m(l) {
    var a = l.getSnapshot;
    l = l.value;
    try {
      var u = a();
      return !Tl(l, u);
    } catch {
      return !0;
    }
  }
  function ud(l) {
    var a = Ra(l, 2);
    a !== null && An(a, l, 2);
  }
  function of(l) {
    var a = Bl();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), di) {
        ru(!0);
        try {
          u();
        } finally {
          ru(!1);
        }
      }
    }
    return a.memoizedState = a.baseState = l, a.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ca,
      lastRenderedState: l
    }, a;
  }
  function id(l, a, u, c) {
    return l.baseState = u, ld(
      l,
      mt,
      typeof c == "function" ? c : Ca
    );
  }
  function gg(l, a, u, c, f) {
    if (hc(l)) throw Error(v(485));
    if (l = a.action, l !== null) {
      var s = {
        payload: f,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(p) {
          s.listeners.push(p);
        }
      };
      N.T !== null ? u(!0) : s.isTransition = !1, c(s), u = a.pending, u === null ? (s.next = a.pending = s, cd(a, s)) : (s.next = u.next, a.pending = u.next = s);
    }
  }
  function cd(l, a) {
    var u = a.action, c = a.payload, f = l.state;
    if (a.isTransition) {
      var s = N.T, p = {};
      N.T = p;
      try {
        var b = u(f, c), D = N.S;
        D !== null && D(p, b), rf(l, a, b);
      } catch (V) {
        rd(l, a, V);
      } finally {
        N.T = s;
      }
    } else
      try {
        s = u(f, c), rf(l, a, s);
      } catch (V) {
        rd(l, a, V);
      }
  }
  function rf(l, a, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(c) {
        od(l, a, c);
      },
      function(c) {
        return rd(l, a, c);
      }
    ) : od(l, a, u);
  }
  function od(l, a, u) {
    a.status = "fulfilled", a.value = u, qm(a), l.state = u, a = l.pending, a !== null && (u = a.next, u === a ? l.pending = null : (u = u.next, a.next = u, cd(l, u)));
  }
  function rd(l, a, u) {
    var c = l.pending;
    if (l.pending = null, c !== null) {
      c = c.next;
      do
        a.status = "rejected", a.reason = u, qm(a), a = a.next;
      while (a !== c);
    }
    l.action = null;
  }
  function qm(l) {
    l = l.listeners;
    for (var a = 0; a < l.length; a++) (0, l[a])();
  }
  function fd(l, a) {
    return a;
  }
  function Lm(l, a) {
    if (rt) {
      var u = At.formState;
      if (u !== null) {
        e: {
          var c = je;
          if (rt) {
            if (ft) {
              t: {
                for (var f = ft, s = Ln; f.nodeType !== 8; ) {
                  if (!s) {
                    f = null;
                    break t;
                  }
                  if (f = sa(
                    f.nextSibling
                  ), f === null) {
                    f = null;
                    break t;
                  }
                }
                s = f.data, f = s === "F!" || s === "F" ? f : null;
              }
              if (f) {
                ft = sa(
                  f.nextSibling
                ), c = f.data === "F!";
                break e;
              }
            }
            bu(c);
          }
          c = !1;
        }
        c && (a = u[0]);
      }
    }
    return u = Bl(), u.memoizedState = u.baseState = a, c = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: fd,
      lastRenderedState: a
    }, u.queue = c, u = Zm.bind(
      null,
      je,
      c
    ), c.dispatch = u, c = of(!1), s = hf.bind(
      null,
      je,
      !1,
      c.queue
    ), c = Bl(), f = {
      state: a,
      dispatch: null,
      action: l,
      pending: null
    }, c.queue = f, u = gg.bind(
      null,
      je,
      f,
      s,
      u
    ), f.dispatch = u, c.memoizedState = l, [a, u, !1];
  }
  function Ha(l) {
    var a = jt();
    return sd(a, mt, l);
  }
  function sd(l, a, u) {
    if (a = ld(
      l,
      a,
      fd
    )[0], l = uf(Ca)[0], typeof a == "object" && a !== null && typeof a.then == "function")
      try {
        var c = af(a);
      } catch (p) {
        throw p === si ? Ir : p;
      }
    else c = a;
    a = jt();
    var f = a.queue, s = f.dispatch;
    return u !== a.memoizedState && (je.flags |= 2048, nn(
      9,
      ff(),
      ob.bind(null, f, u),
      null
    )), [c, s, l];
  }
  function ob(l, a) {
    l.action = a;
  }
  function dd(l) {
    var a = jt(), u = mt;
    if (u !== null)
      return sd(a, u, l);
    jt(), a = a.memoizedState, u = jt();
    var c = u.queue.dispatch;
    return u.memoizedState = l, [a, c, !1];
  }
  function nn(l, a, u, c) {
    return l = { tag: l, create: u, deps: c, inst: a, next: null }, a = je.updateQueue, a === null && (a = nf(), je.updateQueue = a), u = a.lastEffect, u === null ? a.lastEffect = l.next = l : (c = u.next, u.next = l, l.next = c, a.lastEffect = l), l;
  }
  function ff() {
    return { destroy: void 0, resource: void 0 };
  }
  function sf() {
    return jt().memoizedState;
  }
  function mi(l, a, u, c) {
    var f = Bl();
    c = c === void 0 ? null : c, je.flags |= l, f.memoizedState = nn(
      1 | a,
      ff(),
      u,
      c
    );
  }
  function St(l, a, u, c) {
    var f = jt();
    c = c === void 0 ? null : c;
    var s = f.memoizedState.inst;
    mt !== null && c !== null && Fs(c, mt.memoizedState.deps) ? f.memoizedState = nn(a, s, u, c) : (je.flags |= l, f.memoizedState = nn(
      1 | a,
      s,
      u,
      c
    ));
  }
  function vg(l, a) {
    mi(8390656, 8, l, a);
  }
  function bg(l, a) {
    St(2048, 8, l, a);
  }
  function Ym(l, a) {
    return St(4, 2, l, a);
  }
  function oa(l, a) {
    return St(4, 4, l, a);
  }
  function jm(l, a) {
    if (typeof a == "function") {
      l = l();
      var u = a(l);
      return function() {
        typeof u == "function" ? u() : a(null);
      };
    }
    if (a != null)
      return l = l(), a.current = l, function() {
        a.current = null;
      };
  }
  function hd(l, a, u) {
    u = u != null ? u.concat([l]) : null, St(4, 4, jm.bind(null, a, l), u);
  }
  function fc() {
  }
  function sc(l, a) {
    var u = jt();
    a = a === void 0 ? null : a;
    var c = u.memoizedState;
    return a !== null && Fs(a, c[1]) ? c[0] : (u.memoizedState = [l, a], l);
  }
  function Vm(l, a) {
    var u = jt();
    a = a === void 0 ? null : a;
    var c = u.memoizedState;
    if (a !== null && Fs(a, c[1]))
      return c[0];
    if (c = l(), di) {
      ru(!0);
      try {
        l();
      } finally {
        ru(!1);
      }
    }
    return u.memoizedState = [c, a], c;
  }
  function df(l, a, u) {
    return u === void 0 || (jn & 1073741824) !== 0 ? l.memoizedState = a : (l.memoizedState = u, l = Ay(), je.lanes |= l, xu |= l, u);
  }
  function Gm(l, a, u, c) {
    return Tl(u, a) ? u : rc.current !== null ? (l = df(l, u, c), Tl(l, a) || (il = !0), l) : (jn & 42) === 0 ? (il = !0, l.memoizedState = u) : (l = Ay(), je.lanes |= l, xu |= l, a);
  }
  function Sg(l, a, u, c, f) {
    var s = I.p;
    I.p = s !== 0 && 8 > s ? s : 8;
    var p = N.T, b = {};
    N.T = b, hf(l, !1, a, u);
    try {
      var D = f(), V = N.S;
      if (V !== null && V(b, D), D !== null && typeof D == "object" && typeof D.then == "function") {
        var le = yg(
          D,
          c
        );
        dc(
          l,
          a,
          le,
          En(l)
        );
      } else
        dc(
          l,
          a,
          c,
          En(l)
        );
    } catch (ae) {
      dc(
        l,
        a,
        { then: function() {
        }, status: "rejected", reason: ae },
        En()
      );
    } finally {
      I.p = s, N.T = p;
    }
  }
  function rb() {
  }
  function md(l, a, u, c) {
    if (l.tag !== 5) throw Error(v(476));
    var f = Tg(l).queue;
    Sg(
      l,
      f,
      a,
      oe,
      u === null ? rb : function() {
        return Uo(l), u(c);
      }
    );
  }
  function Tg(l) {
    var a = l.memoizedState;
    if (a !== null) return a;
    a = {
      memoizedState: oe,
      baseState: oe,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ca,
        lastRenderedState: oe
      },
      next: null
    };
    var u = {};
    return a.next = {
      memoizedState: u,
      baseState: u,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ca,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = a, l = l.alternate, l !== null && (l.memoizedState = a), a;
  }
  function Uo(l) {
    var a = Tg(l).next.queue;
    dc(l, a, {}, En());
  }
  function Vn() {
    return dl(dn);
  }
  function Xm() {
    return jt().memoizedState;
  }
  function Eg() {
    return jt().memoizedState;
  }
  function Ag(l) {
    for (var a = l.return; a !== null; ) {
      switch (a.tag) {
        case 24:
        case 3:
          var u = En();
          l = ln(u);
          var c = Ua(a, l, u);
          c !== null && (An(c, a, u), oc(c, a, u)), a = { cache: Oo() }, l.payload = a;
          return;
      }
      a = a.return;
    }
  }
  function Qm(l, a, u) {
    var c = En();
    u = {
      lane: c,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, hc(l) ? Rg(a, u) : (u = yo(l, a, u, c), u !== null && (An(u, l, c), Km(u, a, c)));
  }
  function Zm(l, a, u) {
    var c = En();
    dc(l, a, u, c);
  }
  function dc(l, a, u, c) {
    var f = {
      lane: c,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (hc(l)) Rg(a, f);
    else {
      var s = l.alternate;
      if (l.lanes === 0 && (s === null || s.lanes === 0) && (s = a.lastRenderedReducer, s !== null))
        try {
          var p = a.lastRenderedState, b = s(p, u);
          if (f.hasEagerState = !0, f.eagerState = b, Tl(b, p))
            return ii(l, a, f, 0), At === null && na(), !1;
        } catch {
        } finally {
        }
      if (u = yo(l, a, f, c), u !== null)
        return An(u, l, c), Km(u, a, c), !0;
    }
    return !1;
  }
  function hf(l, a, u, c) {
    if (c = {
      lane: 2,
      revertLane: Mc(),
      action: c,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, hc(l)) {
      if (a) throw Error(v(479));
    } else
      a = yo(
        l,
        u,
        c,
        2
      ), a !== null && An(a, l, 2);
  }
  function hc(l) {
    var a = l.alternate;
    return l === je || a !== null && a === je;
  }
  function Rg(l, a) {
    bn = lf = !0;
    var u = l.pending;
    u === null ? a.next = a : (a.next = u.next, u.next = a), l.pending = a;
  }
  function Km(l, a, u) {
    if ((u & 4194048) !== 0) {
      var c = a.lanes;
      c &= l.pendingLanes, u |= c, a.lanes = u, Or(l, u);
    }
  }
  var yd = {
    readContext: dl,
    use: Ft,
    useCallback: qt,
    useContext: qt,
    useEffect: qt,
    useImperativeHandle: qt,
    useLayoutEffect: qt,
    useInsertionEffect: qt,
    useMemo: qt,
    useReducer: qt,
    useRef: qt,
    useState: qt,
    useDebugValue: qt,
    useDeferredValue: qt,
    useTransition: qt,
    useSyncExternalStore: qt,
    useId: qt,
    useHostTransitionStatus: qt,
    useFormState: qt,
    useActionState: qt,
    useOptimistic: qt,
    useMemoCache: qt,
    useCacheRefresh: qt
  }, Jm = {
    readContext: dl,
    use: Ft,
    useCallback: function(l, a) {
      return Bl().memoizedState = [
        l,
        a === void 0 ? null : a
      ], l;
    },
    useContext: dl,
    useEffect: vg,
    useImperativeHandle: function(l, a, u) {
      u = u != null ? u.concat([l]) : null, mi(
        4194308,
        4,
        jm.bind(null, a, l),
        u
      );
    },
    useLayoutEffect: function(l, a) {
      return mi(4194308, 4, l, a);
    },
    useInsertionEffect: function(l, a) {
      mi(4, 2, l, a);
    },
    useMemo: function(l, a) {
      var u = Bl();
      a = a === void 0 ? null : a;
      var c = l();
      if (di) {
        ru(!0);
        try {
          l();
        } finally {
          ru(!1);
        }
      }
      return u.memoizedState = [c, a], c;
    },
    useReducer: function(l, a, u) {
      var c = Bl();
      if (u !== void 0) {
        var f = u(a);
        if (di) {
          ru(!0);
          try {
            u(a);
          } finally {
            ru(!1);
          }
        }
      } else f = a;
      return c.memoizedState = c.baseState = f, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: f
      }, c.queue = l, l = l.dispatch = Qm.bind(
        null,
        je,
        l
      ), [c.memoizedState, l];
    },
    useRef: function(l) {
      var a = Bl();
      return l = { current: l }, a.memoizedState = l;
    },
    useState: function(l) {
      l = of(l);
      var a = l.queue, u = Zm.bind(null, je, a);
      return a.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: fc,
    useDeferredValue: function(l, a) {
      var u = Bl();
      return df(u, l, a);
    },
    useTransition: function() {
      var l = of(!1);
      return l = Sg.bind(
        null,
        je,
        l.queue,
        !0,
        !1
      ), Bl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, a, u) {
      var c = je, f = Bl();
      if (rt) {
        if (u === void 0)
          throw Error(v(407));
        u = u();
      } else {
        if (u = a(), At === null)
          throw Error(v(349));
        (Pe & 124) !== 0 || ad(c, a, u);
      }
      f.memoizedState = u;
      var s = { value: u, getSnapshot: a };
      return f.queue = s, vg(wm.bind(null, c, s, l), [
        l
      ]), c.flags |= 2048, nn(
        9,
        ff(),
        Nm.bind(
          null,
          c,
          s,
          u,
          a
        ),
        null
      ), u;
    },
    useId: function() {
      var l = Bl(), a = At.identifierPrefix;
      if (rt) {
        var u = Yt, c = ua;
        u = (c & ~(1 << 32 - Fl(c) - 1)).toString(32) + u, a = "«" + a + "R" + u, u = ca++, 0 < u && (a += "H" + u.toString(32)), a += "»";
      } else
        u = Hm++, a = "«" + a + "r" + u.toString(32) + "»";
      return l.memoizedState = a;
    },
    useHostTransitionStatus: Vn,
    useFormState: Lm,
    useActionState: Lm,
    useOptimistic: function(l) {
      var a = Bl();
      a.memoizedState = a.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return a.queue = u, a = hf.bind(
        null,
        je,
        !0,
        u
      ), u.dispatch = a, [l, a];
    },
    useMemoCache: td,
    useCacheRefresh: function() {
      return Bl().memoizedState = Ag.bind(
        null,
        je
      );
    }
  }, km = {
    readContext: dl,
    use: Ft,
    useCallback: sc,
    useContext: dl,
    useEffect: bg,
    useImperativeHandle: hd,
    useInsertionEffect: Ym,
    useLayoutEffect: oa,
    useMemo: Vm,
    useReducer: uf,
    useRef: sf,
    useState: function() {
      return uf(Ca);
    },
    useDebugValue: fc,
    useDeferredValue: function(l, a) {
      var u = jt();
      return Gm(
        u,
        mt.memoizedState,
        l,
        a
      );
    },
    useTransition: function() {
      var l = uf(Ca)[0], a = jt().memoizedState;
      return [
        typeof l == "boolean" ? l : af(l),
        a
      ];
    },
    useSyncExternalStore: cf,
    useId: Xm,
    useHostTransitionStatus: Vn,
    useFormState: Ha,
    useActionState: Ha,
    useOptimistic: function(l, a) {
      var u = jt();
      return id(u, mt, l, a);
    },
    useMemoCache: td,
    useCacheRefresh: Eg
  }, Ru = {
    readContext: dl,
    use: Ft,
    useCallback: sc,
    useContext: dl,
    useEffect: bg,
    useImperativeHandle: hd,
    useInsertionEffect: Ym,
    useLayoutEffect: oa,
    useMemo: Vm,
    useReducer: nd,
    useRef: sf,
    useState: function() {
      return nd(Ca);
    },
    useDebugValue: fc,
    useDeferredValue: function(l, a) {
      var u = jt();
      return mt === null ? df(u, l, a) : Gm(
        u,
        mt.memoizedState,
        l,
        a
      );
    },
    useTransition: function() {
      var l = nd(Ca)[0], a = jt().memoizedState;
      return [
        typeof l == "boolean" ? l : af(l),
        a
      ];
    },
    useSyncExternalStore: cf,
    useId: Xm,
    useHostTransitionStatus: Vn,
    useFormState: dd,
    useActionState: dd,
    useOptimistic: function(l, a) {
      var u = jt();
      return mt !== null ? id(u, mt, l, a) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: td,
    useCacheRefresh: Eg
  }, mc = null, Co = 0;
  function pd(l) {
    var a = Co;
    return Co += 1, mc === null && (mc = []), Mm(mc, l, a);
  }
  function yc(l, a) {
    a = a.props.ref, l.ref = a !== void 0 ? a : null;
  }
  function Nl(l, a) {
    throw a.$$typeof === A ? Error(v(525)) : (l = Object.prototype.toString.call(a), Error(
      v(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : l
      )
    ));
  }
  function $m(l) {
    var a = l._init;
    return a(l._payload);
  }
  function an(l) {
    function a(L, _) {
      if (l) {
        var j = L.deletions;
        j === null ? (L.deletions = [_], L.flags |= 16) : j.push(_);
      }
    }
    function u(L, _) {
      if (!l) return null;
      for (; _ !== null; )
        a(L, _), _ = _.sibling;
      return null;
    }
    function c(L) {
      for (var _ = /* @__PURE__ */ new Map(); L !== null; )
        L.key !== null ? _.set(L.key, L) : _.set(L.index, L), L = L.sibling;
      return _;
    }
    function f(L, _) {
      return L = aa(L, _), L.index = 0, L.sibling = null, L;
    }
    function s(L, _, j) {
      return L.index = j, l ? (j = L.alternate, j !== null ? (j = j.index, j < _ ? (L.flags |= 67108866, _) : j) : (L.flags |= 67108866, _)) : (L.flags |= 1048576, _);
    }
    function p(L) {
      return l && L.alternate === null && (L.flags |= 67108866), L;
    }
    function b(L, _, j, ne) {
      return _ === null || _.tag !== 6 ? (_ = vo(j, L.mode, ne), _.return = L, _) : (_ = f(_, j), _.return = L, _);
    }
    function D(L, _, j, ne) {
      var be = j.type;
      return be === ue ? le(
        L,
        _,
        j.props.children,
        ne,
        j.key
      ) : _ !== null && (_.elementType === be || typeof be == "object" && be !== null && be.$$typeof === ce && $m(be) === _.type) ? (_ = f(_, j.props), yc(_, j), _.return = L, _) : (_ = re(
        j.type,
        j.key,
        j.props,
        null,
        L.mode,
        ne
      ), yc(_, j), _.return = L, _);
    }
    function V(L, _, j, ne) {
      return _ === null || _.tag !== 4 || _.stateNode.containerInfo !== j.containerInfo || _.stateNode.implementation !== j.implementation ? (_ = wt(j, L.mode, ne), _.return = L, _) : (_ = f(_, j.children || []), _.return = L, _);
    }
    function le(L, _, j, ne, be) {
      return _ === null || _.tag !== 7 ? (_ = wn(
        j,
        L.mode,
        ne,
        be
      ), _.return = L, _) : (_ = f(_, j), _.return = L, _);
    }
    function ae(L, _, j) {
      if (typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint")
        return _ = vo(
          "" + _,
          L.mode,
          j
        ), _.return = L, _;
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case U:
            return j = re(
              _.type,
              _.key,
              _.props,
              null,
              L.mode,
              j
            ), yc(j, _), j.return = L, j;
          case K:
            return _ = wt(
              _,
              L.mode,
              j
            ), _.return = L, _;
          case ce:
            var ne = _._init;
            return _ = ne(_._payload), ae(L, _, j);
        }
        if (ot(_) || ve(_))
          return _ = wn(
            _,
            L.mode,
            j,
            null
          ), _.return = L, _;
        if (typeof _.then == "function")
          return ae(L, pd(_), j);
        if (_.$$typeof === me)
          return ae(
            L,
            $r(L, _),
            j
          );
        Nl(L, _);
      }
      return null;
    }
    function X(L, _, j, ne) {
      var be = _ !== null ? _.key : null;
      if (typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint")
        return be !== null ? null : b(L, _, "" + j, ne);
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case U:
            return j.key === be ? D(L, _, j, ne) : null;
          case K:
            return j.key === be ? V(L, _, j, ne) : null;
          case ce:
            return be = j._init, j = be(j._payload), X(L, _, j, ne);
        }
        if (ot(j) || ve(j))
          return be !== null ? null : le(L, _, j, ne, null);
        if (typeof j.then == "function")
          return X(
            L,
            _,
            pd(j),
            ne
          );
        if (j.$$typeof === me)
          return X(
            L,
            _,
            $r(L, j),
            ne
          );
        Nl(L, j);
      }
      return null;
    }
    function J(L, _, j, ne, be) {
      if (typeof ne == "string" && ne !== "" || typeof ne == "number" || typeof ne == "bigint")
        return L = L.get(j) || null, b(_, L, "" + ne, be);
      if (typeof ne == "object" && ne !== null) {
        switch (ne.$$typeof) {
          case U:
            return L = L.get(
              ne.key === null ? j : ne.key
            ) || null, D(_, L, ne, be);
          case K:
            return L = L.get(
              ne.key === null ? j : ne.key
            ) || null, V(_, L, ne, be);
          case ce:
            var $e = ne._init;
            return ne = $e(ne._payload), J(
              L,
              _,
              j,
              ne,
              be
            );
        }
        if (ot(ne) || ve(ne))
          return L = L.get(j) || null, le(_, L, ne, be, null);
        if (typeof ne.then == "function")
          return J(
            L,
            _,
            j,
            pd(ne),
            be
          );
        if (ne.$$typeof === me)
          return J(
            L,
            _,
            j,
            $r(_, ne),
            be
          );
        Nl(_, ne);
      }
      return null;
    }
    function Ce(L, _, j, ne) {
      for (var be = null, $e = null, xe = _, we = _ = 0, pl = null; xe !== null && we < j.length; we++) {
        xe.index > we ? (pl = xe, xe = null) : pl = xe.sibling;
        var ct = X(
          L,
          xe,
          j[we],
          ne
        );
        if (ct === null) {
          xe === null && (xe = pl);
          break;
        }
        l && xe && ct.alternate === null && a(L, xe), _ = s(ct, _, we), $e === null ? be = ct : $e.sibling = ct, $e = ct, xe = pl;
      }
      if (we === j.length)
        return u(L, xe), rt && at(L, we), be;
      if (xe === null) {
        for (; we < j.length; we++)
          xe = ae(L, j[we], ne), xe !== null && (_ = s(
            xe,
            _,
            we
          ), $e === null ? be = xe : $e.sibling = xe, $e = xe);
        return rt && at(L, we), be;
      }
      for (xe = c(xe); we < j.length; we++)
        pl = J(
          xe,
          L,
          we,
          j[we],
          ne
        ), pl !== null && (l && pl.alternate !== null && xe.delete(
          pl.key === null ? we : pl.key
        ), _ = s(
          pl,
          _,
          we
        ), $e === null ? be = pl : $e.sibling = pl, $e = pl);
      return l && xe.forEach(function(Hi) {
        return a(L, Hi);
      }), rt && at(L, we), be;
    }
    function He(L, _, j, ne) {
      if (j == null) throw Error(v(151));
      for (var be = null, $e = null, xe = _, we = _ = 0, pl = null, ct = j.next(); xe !== null && !ct.done; we++, ct = j.next()) {
        xe.index > we ? (pl = xe, xe = null) : pl = xe.sibling;
        var Hi = X(L, xe, ct.value, ne);
        if (Hi === null) {
          xe === null && (xe = pl);
          break;
        }
        l && xe && Hi.alternate === null && a(L, xe), _ = s(Hi, _, we), $e === null ? be = Hi : $e.sibling = Hi, $e = Hi, xe = pl;
      }
      if (ct.done)
        return u(L, xe), rt && at(L, we), be;
      if (xe === null) {
        for (; !ct.done; we++, ct = j.next())
          ct = ae(L, ct.value, ne), ct !== null && (_ = s(ct, _, we), $e === null ? be = ct : $e.sibling = ct, $e = ct);
        return rt && at(L, we), be;
      }
      for (xe = c(xe); !ct.done; we++, ct = j.next())
        ct = J(xe, L, we, ct.value, ne), ct !== null && (l && ct.alternate !== null && xe.delete(ct.key === null ? we : ct.key), _ = s(ct, _, we), $e === null ? be = ct : $e.sibling = ct, $e = ct);
      return l && xe.forEach(function(Tb) {
        return a(L, Tb);
      }), rt && at(L, we), be;
    }
    function dt(L, _, j, ne) {
      if (typeof j == "object" && j !== null && j.type === ue && j.key === null && (j = j.props.children), typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case U:
            e: {
              for (var be = j.key; _ !== null; ) {
                if (_.key === be) {
                  if (be = j.type, be === ue) {
                    if (_.tag === 7) {
                      u(
                        L,
                        _.sibling
                      ), ne = f(
                        _,
                        j.props.children
                      ), ne.return = L, L = ne;
                      break e;
                    }
                  } else if (_.elementType === be || typeof be == "object" && be !== null && be.$$typeof === ce && $m(be) === _.type) {
                    u(
                      L,
                      _.sibling
                    ), ne = f(_, j.props), yc(ne, j), ne.return = L, L = ne;
                    break e;
                  }
                  u(L, _);
                  break;
                } else a(L, _);
                _ = _.sibling;
              }
              j.type === ue ? (ne = wn(
                j.props.children,
                L.mode,
                ne,
                j.key
              ), ne.return = L, L = ne) : (ne = re(
                j.type,
                j.key,
                j.props,
                null,
                L.mode,
                ne
              ), yc(ne, j), ne.return = L, L = ne);
            }
            return p(L);
          case K:
            e: {
              for (be = j.key; _ !== null; ) {
                if (_.key === be)
                  if (_.tag === 4 && _.stateNode.containerInfo === j.containerInfo && _.stateNode.implementation === j.implementation) {
                    u(
                      L,
                      _.sibling
                    ), ne = f(_, j.children || []), ne.return = L, L = ne;
                    break e;
                  } else {
                    u(L, _);
                    break;
                  }
                else a(L, _);
                _ = _.sibling;
              }
              ne = wt(j, L.mode, ne), ne.return = L, L = ne;
            }
            return p(L);
          case ce:
            return be = j._init, j = be(j._payload), dt(
              L,
              _,
              j,
              ne
            );
        }
        if (ot(j))
          return Ce(
            L,
            _,
            j,
            ne
          );
        if (ve(j)) {
          if (be = ve(j), typeof be != "function") throw Error(v(150));
          return j = be.call(j), He(
            L,
            _,
            j,
            ne
          );
        }
        if (typeof j.then == "function")
          return dt(
            L,
            _,
            pd(j),
            ne
          );
        if (j.$$typeof === me)
          return dt(
            L,
            _,
            $r(L, j),
            ne
          );
        Nl(L, j);
      }
      return typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint" ? (j = "" + j, _ !== null && _.tag === 6 ? (u(L, _.sibling), ne = f(_, j), ne.return = L, L = ne) : (u(L, _), ne = vo(j, L.mode, ne), ne.return = L, L = ne), p(L)) : u(L, _);
    }
    return function(L, _, j, ne) {
      try {
        Co = 0;
        var be = dt(
          L,
          _,
          j,
          ne
        );
        return mc = null, be;
      } catch (xe) {
        if (xe === si || xe === Ir) throw xe;
        var $e = en(29, xe, null, L.mode);
        return $e.lanes = ne, $e.return = L, $e;
      } finally {
      }
    };
  }
  var pc = an(!0), Ba = an(!1), Tn = gt(null), wl = null;
  function Ou(l) {
    var a = l.alternate;
    Je(Tt, Tt.current & 1), Je(Tn, l), wl === null && (a === null || rc.current !== null || a.memoizedState !== null) && (wl = l);
  }
  function Na(l) {
    if (l.tag === 22) {
      if (Je(Tt, Tt.current), Je(Tn, l), wl === null) {
        var a = l.alternate;
        a !== null && a.memoizedState !== null && (wl = l);
      }
    } else wa();
  }
  function wa() {
    Je(Tt, Tt.current), Je(Tn, Tn.current);
  }
  function ra(l) {
    ze(Tn), wl === l && (wl = null), ze(Tt);
  }
  var Tt = gt(0);
  function mf(l) {
    for (var a = l; a !== null; ) {
      if (a.tag === 13) {
        var u = a.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || u.data === "$?" || qf(u)))
          return a;
      } else if (a.tag === 19 && a.memoizedProps.revealOrder !== void 0) {
        if ((a.flags & 128) !== 0) return a;
      } else if (a.child !== null) {
        a.child.return = a, a = a.child;
        continue;
      }
      if (a === l) break;
      for (; a.sibling === null; ) {
        if (a.return === null || a.return === l) return null;
        a = a.return;
      }
      a.sibling.return = a.return, a = a.sibling;
    }
    return null;
  }
  function yi(l, a, u, c) {
    a = l.memoizedState, u = u(c, a), u = u == null ? a : O({}, a, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var gd = {
    enqueueSetState: function(l, a, u) {
      l = l._reactInternals;
      var c = En(), f = ln(c);
      f.payload = a, u != null && (f.callback = u), a = Ua(l, f, c), a !== null && (An(a, l, c), oc(a, l, c));
    },
    enqueueReplaceState: function(l, a, u) {
      l = l._reactInternals;
      var c = En(), f = ln(c);
      f.tag = 1, f.payload = a, u != null && (f.callback = u), a = Ua(l, f, c), a !== null && (An(a, l, c), oc(a, l, c));
    },
    enqueueForceUpdate: function(l, a) {
      l = l._reactInternals;
      var u = En(), c = ln(u);
      c.tag = 2, a != null && (c.callback = a), a = Ua(l, c, u), a !== null && (An(a, l, u), oc(a, l, u));
    }
  };
  function Ho(l, a, u, c, f, s, p) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(c, s, p) : a.prototype && a.prototype.isPureReactComponent ? !li(u, c) || !li(f, s) : !0;
  }
  function gc(l, a, u, c) {
    l = a.state, typeof a.componentWillReceiveProps == "function" && a.componentWillReceiveProps(u, c), typeof a.UNSAFE_componentWillReceiveProps == "function" && a.UNSAFE_componentWillReceiveProps(u, c), a.state !== l && gd.enqueueReplaceState(a, a.state, null);
  }
  function pi(l, a) {
    var u = a;
    if ("ref" in a) {
      u = {};
      for (var c in a)
        c !== "ref" && (u[c] = a[c]);
    }
    if (l = l.defaultProps) {
      u === a && (u = O({}, u));
      for (var f in l)
        u[f] === void 0 && (u[f] = l[f]);
    }
    return u;
  }
  var yf = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var a = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(a)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  };
  function Bo(l) {
    yf(l);
  }
  function Wm(l) {
    console.error(l);
  }
  function pf(l) {
    yf(l);
  }
  function gf(l, a) {
    try {
      var u = l.onUncaughtError;
      u(a.value, { componentStack: a.stack });
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  function Fm(l, a, u) {
    try {
      var c = l.onCaughtError;
      c(u.value, {
        componentStack: u.stack,
        errorBoundary: a.tag === 1 ? a.stateNode : null
      });
    } catch (f) {
      setTimeout(function() {
        throw f;
      });
    }
  }
  function Im(l, a, u) {
    return u = ln(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      gf(l, a);
    }, u;
  }
  function Pm(l) {
    return l = ln(l), l.tag = 3, l;
  }
  function un(l, a, u, c) {
    var f = u.type.getDerivedStateFromError;
    if (typeof f == "function") {
      var s = c.value;
      l.payload = function() {
        return f(s);
      }, l.callback = function() {
        Fm(a, u, c);
      };
    }
    var p = u.stateNode;
    p !== null && typeof p.componentDidCatch == "function" && (l.callback = function() {
      Fm(a, u, c), typeof f != "function" && (Si === null ? Si = /* @__PURE__ */ new Set([this]) : Si.add(this));
      var b = c.stack;
      this.componentDidCatch(c.value, {
        componentStack: b !== null ? b : ""
      });
    });
  }
  function Og(l, a, u, c, f) {
    if (u.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
      if (a = u.alternate, a !== null && Ao(
        a,
        u,
        f,
        !0
      ), u = Tn.current, u !== null) {
        switch (u.tag) {
          case 13:
            return wl === null ? Dc() : u.alternate === null && Qt === 0 && (Qt = 3), u.flags &= -257, u.flags |= 65536, u.lanes = f, c === Ks ? u.flags |= 16384 : (a = u.updateQueue, a === null ? u.updateQueue = /* @__PURE__ */ new Set([c]) : a.add(c), Xd(l, c, f)), !1;
          case 22:
            return u.flags |= 65536, c === Ks ? u.flags |= 16384 : (a = u.updateQueue, a === null ? (a = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([c])
            }, u.updateQueue = a) : (u = a.retryQueue, u === null ? a.retryQueue = /* @__PURE__ */ new Set([c]) : u.add(c)), Xd(l, c, f)), !1;
        }
        throw Error(v(435, u.tag));
      }
      return Xd(l, c, f), Dc(), !1;
    }
    if (rt)
      return a = Tn.current, a !== null ? ((a.flags & 65536) === 0 && (a.flags |= 256), a.flags |= 65536, a.lanes = f, c !== uc && (l = Error(v(422), { cause: c }), Eo(vn(l, u)))) : (c !== uc && (a = Error(v(423), {
        cause: c
      }), Eo(
        vn(a, u)
      )), l = l.current.alternate, l.flags |= 65536, f &= -f, l.lanes |= f, c = vn(c, u), f = Im(
        l.stateNode,
        c,
        f
      ), Um(l, f), Qt !== 4 && (Qt = 2)), !1;
    var s = Error(v(520), { cause: c });
    if (s = vn(s, u), jo === null ? jo = [s] : jo.push(s), Qt !== 4 && (Qt = 2), a === null) return !0;
    c = vn(c, u), u = a;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = f & -f, u.lanes |= l, l = Im(u.stateNode, c, l), Um(u, l), !1;
        case 1:
          if (a = u.type, s = u.stateNode, (u.flags & 128) === 0 && (typeof a.getDerivedStateFromError == "function" || s !== null && typeof s.componentDidCatch == "function" && (Si === null || !Si.has(s))))
            return u.flags |= 65536, f &= -f, u.lanes |= f, f = Pm(f), un(
              f,
              l,
              u,
              c
            ), Um(u, f), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var Vt = Error(v(461)), il = !1;
  function ml(l, a, u, c) {
    a.child = l === null ? Ba(a, null, u, c) : pc(
      a,
      l.child,
      u,
      c
    );
  }
  function Dg(l, a, u, c, f) {
    u = u.render;
    var s = a.ref;
    if ("ref" in c) {
      var p = {};
      for (var b in c)
        b !== "ref" && (p[b] = c[b]);
    } else p = c;
    return ri(a), c = Is(
      l,
      a,
      u,
      p,
      s,
      f
    ), b = Ps(), l !== null && !il ? (xo(l, a, f), _a(l, a, f)) : (rt && b && ac(a), a.flags |= 1, ml(l, a, c, f), a.child);
  }
  function Du(l, a, u, c, f) {
    if (l === null) {
      var s = u.type;
      return typeof s == "function" && !Qr(s) && s.defaultProps === void 0 && u.compare === null ? (a.tag = 15, a.type = s, vc(
        l,
        a,
        s,
        c,
        f
      )) : (l = re(
        u.type,
        null,
        c,
        a,
        a.mode,
        f
      ), l.ref = a.ref, l.return = a, a.child = l);
    }
    if (s = l.child, !Md(l, f)) {
      var p = s.memoizedProps;
      if (u = u.compare, u = u !== null ? u : li, u(p, c) && l.ref === a.ref)
        return _a(l, a, f);
    }
    return a.flags |= 1, l = aa(s, c), l.ref = a.ref, l.return = a, a.child = l;
  }
  function vc(l, a, u, c, f) {
    if (l !== null) {
      var s = l.memoizedProps;
      if (li(s, c) && l.ref === a.ref)
        if (il = !1, a.pendingProps = c = s, Md(l, f))
          (l.flags & 131072) !== 0 && (il = !0);
        else
          return a.lanes = l.lanes, _a(l, a, f);
    }
    return bd(
      l,
      a,
      u,
      c,
      f
    );
  }
  function vd(l, a, u) {
    var c = a.pendingProps, f = c.children, s = l !== null ? l.memoizedState : null;
    if (c.mode === "hidden") {
      if ((a.flags & 128) !== 0) {
        if (c = s !== null ? s.baseLanes | u : u, l !== null) {
          for (f = a.child = l.child, s = 0; f !== null; )
            s = s | f.lanes | f.childLanes, f = f.sibling;
          a.childLanes = s & ~c;
        } else a.childLanes = 0, a.child = null;
        return bc(
          l,
          a,
          c,
          u
        );
      }
      if ((u & 536870912) !== 0)
        a.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && ic(
          a,
          s !== null ? s.cachePool : null
        ), s !== null ? hl(a, s) : Mo(), Na(a);
      else
        return a.lanes = a.childLanes = 536870912, bc(
          l,
          a,
          s !== null ? s.baseLanes | u : u,
          u
        );
    } else
      s !== null ? (ic(a, s.cachePool), hl(a, s), wa(), a.memoizedState = null) : (l !== null && ic(a, null), Mo(), wa());
    return ml(l, a, f, u), a.child;
  }
  function bc(l, a, u, c) {
    var f = Fr();
    return f = f === null ? null : { parent: al._currentValue, pool: f }, a.memoizedState = {
      baseLanes: u,
      cachePool: f
    }, l !== null && ic(a, null), Mo(), Na(a), l !== null && Ao(l, a, c, !0), null;
  }
  function vf(l, a) {
    var u = a.ref;
    if (u === null)
      l !== null && l.ref !== null && (a.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(v(284));
      (l === null || l.ref !== u) && (a.flags |= 4194816);
    }
  }
  function bd(l, a, u, c, f) {
    return ri(a), u = Is(
      l,
      a,
      u,
      c,
      void 0,
      f
    ), c = Ps(), l !== null && !il ? (xo(l, a, f), _a(l, a, f)) : (rt && c && ac(a), a.flags |= 1, ml(l, a, u, f), a.child);
  }
  function ey(l, a, u, c, f, s) {
    return ri(a), a.updateQueue = null, u = Bm(
      a,
      c,
      u,
      f
    ), hi(l), c = Ps(), l !== null && !il ? (xo(l, a, s), _a(l, a, s)) : (rt && c && ac(a), a.flags |= 1, ml(l, a, u, s), a.child);
  }
  function Sd(l, a, u, c, f) {
    if (ri(a), a.stateNode === null) {
      var s = go, p = u.contextType;
      typeof p == "object" && p !== null && (s = dl(p)), s = new u(c, s), a.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, s.updater = gd, a.stateNode = s, s._reactInternals = a, s = a.stateNode, s.props = c, s.state = a.memoizedState, s.refs = {}, ks(a), p = u.contextType, s.context = typeof p == "object" && p !== null ? dl(p) : go, s.state = a.memoizedState, p = u.getDerivedStateFromProps, typeof p == "function" && (yi(
        a,
        u,
        p,
        c
      ), s.state = a.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (p = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), p !== s.state && gd.enqueueReplaceState(s, s.state, null), Eu(a, c, s, f), Do(), s.state = a.memoizedState), typeof s.componentDidMount == "function" && (a.flags |= 4194308), c = !0;
    } else if (l === null) {
      s = a.stateNode;
      var b = a.memoizedProps, D = pi(u, b);
      s.props = D;
      var V = s.context, le = u.contextType;
      p = go, typeof le == "object" && le !== null && (p = dl(le));
      var ae = u.getDerivedStateFromProps;
      le = typeof ae == "function" || typeof s.getSnapshotBeforeUpdate == "function", b = a.pendingProps !== b, le || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (b || V !== p) && gc(
        a,
        s,
        c,
        p
      ), xa = !1;
      var X = a.memoizedState;
      s.state = X, Eu(a, c, s, f), Do(), V = a.memoizedState, b || X !== V || xa ? (typeof ae == "function" && (yi(
        a,
        u,
        ae,
        c
      ), V = a.memoizedState), (D = xa || Ho(
        a,
        u,
        D,
        c,
        X,
        V,
        p
      )) ? (le || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (a.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (a.flags |= 4194308), a.memoizedProps = c, a.memoizedState = V), s.props = c, s.state = V, s.context = p, c = D) : (typeof s.componentDidMount == "function" && (a.flags |= 4194308), c = !1);
    } else {
      s = a.stateNode, $s(l, a), p = a.memoizedProps, le = pi(u, p), s.props = le, ae = a.pendingProps, X = s.context, V = u.contextType, D = go, typeof V == "object" && V !== null && (D = dl(V)), b = u.getDerivedStateFromProps, (V = typeof b == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (p !== ae || X !== D) && gc(
        a,
        s,
        c,
        D
      ), xa = !1, X = a.memoizedState, s.state = X, Eu(a, c, s, f), Do();
      var J = a.memoizedState;
      p !== ae || X !== J || xa || l !== null && l.dependencies !== null && kr(l.dependencies) ? (typeof b == "function" && (yi(
        a,
        u,
        b,
        c
      ), J = a.memoizedState), (le = xa || Ho(
        a,
        u,
        le,
        c,
        X,
        J,
        D
      ) || l !== null && l.dependencies !== null && kr(l.dependencies)) ? (V || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(c, J, D), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(
        c,
        J,
        D
      )), typeof s.componentDidUpdate == "function" && (a.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (a.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || p === l.memoizedProps && X === l.memoizedState || (a.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || p === l.memoizedProps && X === l.memoizedState || (a.flags |= 1024), a.memoizedProps = c, a.memoizedState = J), s.props = c, s.state = J, s.context = D, c = le) : (typeof s.componentDidUpdate != "function" || p === l.memoizedProps && X === l.memoizedState || (a.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || p === l.memoizedProps && X === l.memoizedState || (a.flags |= 1024), c = !1);
    }
    return s = c, vf(l, a), c = (a.flags & 128) !== 0, s || c ? (s = a.stateNode, u = c && typeof u.getDerivedStateFromError != "function" ? null : s.render(), a.flags |= 1, l !== null && c ? (a.child = pc(
      a,
      l.child,
      null,
      f
    ), a.child = pc(
      a,
      null,
      u,
      f
    )) : ml(l, a, u, f), a.memoizedState = s.state, l = a.child) : l = _a(
      l,
      a,
      f
    ), l;
  }
  function Td(l, a, u, c) {
    return To(), a.flags |= 256, ml(l, a, u, c), a.child;
  }
  var Ed = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function ty(l) {
    return { baseLanes: l, cachePool: Qs() };
  }
  function ly(l, a, u) {
    return l = l !== null ? l.childLanes & ~u : 0, a && (l |= Qn), l;
  }
  function ny(l, a, u) {
    var c = a.pendingProps, f = !1, s = (a.flags & 128) !== 0, p;
    if ((p = s) || (p = l !== null && l.memoizedState === null ? !1 : (Tt.current & 2) !== 0), p && (f = !0, a.flags &= -129), p = (a.flags & 32) !== 0, a.flags &= -33, l === null) {
      if (rt) {
        if (f ? Ou(a) : wa(), rt) {
          var b = ft, D;
          if (D = b) {
            e: {
              for (D = b, b = Ln; D.nodeType !== 8; ) {
                if (!b) {
                  b = null;
                  break e;
                }
                if (D = sa(
                  D.nextSibling
                ), D === null) {
                  b = null;
                  break e;
                }
              }
              b = D;
            }
            b !== null ? (a.memoizedState = {
              dehydrated: b,
              treeContext: vu !== null ? { id: ua, overflow: Yt } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, D = en(
              18,
              null,
              null,
              0
            ), D.stateNode = b, D.return = a, a.child = D, Wt = a, ft = null, D = !0) : D = !1;
          }
          D || bu(a);
        }
        if (b = a.memoizedState, b !== null && (b = b.dehydrated, b !== null))
          return qf(b) ? a.lanes = 32 : a.lanes = 536870912, null;
        ra(a);
      }
      return b = c.children, c = c.fallback, f ? (wa(), f = a.mode, b = Rd(
        { mode: "hidden", children: b },
        f
      ), c = wn(
        c,
        f,
        u,
        null
      ), b.return = a, c.return = a, b.sibling = c, a.child = b, f = a.child, f.memoizedState = ty(u), f.childLanes = ly(
        l,
        p,
        u
      ), a.memoizedState = Ed, c) : (Ou(a), Ad(a, b));
    }
    if (D = l.memoizedState, D !== null && (b = D.dehydrated, b !== null)) {
      if (s)
        a.flags & 256 ? (Ou(a), a.flags &= -257, a = gi(
          l,
          a,
          u
        )) : a.memoizedState !== null ? (wa(), a.child = l.child, a.flags |= 128, a = null) : (wa(), f = c.fallback, b = a.mode, c = Rd(
          { mode: "visible", children: c.children },
          b
        ), f = wn(
          f,
          b,
          u,
          null
        ), f.flags |= 2, c.return = a, f.return = a, c.sibling = f, a.child = c, pc(
          a,
          l.child,
          null,
          u
        ), c = a.child, c.memoizedState = ty(u), c.childLanes = ly(
          l,
          p,
          u
        ), a.memoizedState = Ed, a = f);
      else if (Ou(a), qf(b)) {
        if (p = b.nextSibling && b.nextSibling.dataset, p) var V = p.dgst;
        p = V, c = Error(v(419)), c.stack = "", c.digest = p, Eo({ value: c, source: null, stack: null }), a = gi(
          l,
          a,
          u
        );
      } else if (il || Ao(l, a, u, !1), p = (u & l.childLanes) !== 0, il || p) {
        if (p = At, p !== null && (c = u & -u, c = (c & 42) !== 0 ? 1 : Fn(c), c = (c & (p.suspendedLanes | u)) !== 0 ? 0 : c, c !== 0 && c !== D.retryLane))
          throw D.retryLane = c, Ra(l, c), An(p, l, c), Vt;
        b.data === "$?" || Dc(), a = gi(
          l,
          a,
          u
        );
      } else
        b.data === "$?" ? (a.flags |= 192, a.child = l.child, a = null) : (l = D.treeContext, ft = sa(
          b.nextSibling
        ), Wt = a, rt = !0, qn = null, Ln = !1, l !== null && (_n[tn++] = ua, _n[tn++] = Yt, _n[tn++] = vu, ua = l.id, Yt = l.overflow, vu = a), a = Ad(
          a,
          c.children
        ), a.flags |= 4096);
      return a;
    }
    return f ? (wa(), f = c.fallback, b = a.mode, D = l.child, V = D.sibling, c = aa(D, {
      mode: "hidden",
      children: c.children
    }), c.subtreeFlags = D.subtreeFlags & 65011712, V !== null ? f = aa(V, f) : (f = wn(
      f,
      b,
      u,
      null
    ), f.flags |= 2), f.return = a, c.return = a, c.sibling = f, a.child = c, c = f, f = a.child, b = l.child.memoizedState, b === null ? b = ty(u) : (D = b.cachePool, D !== null ? (V = al._currentValue, D = D.parent !== V ? { parent: V, pool: V } : D) : D = Qs(), b = {
      baseLanes: b.baseLanes | u,
      cachePool: D
    }), f.memoizedState = b, f.childLanes = ly(
      l,
      p,
      u
    ), a.memoizedState = Ed, c) : (Ou(a), u = l.child, l = u.sibling, u = aa(u, {
      mode: "visible",
      children: c.children
    }), u.return = a, u.sibling = null, l !== null && (p = a.deletions, p === null ? (a.deletions = [l], a.flags |= 16) : p.push(l)), a.child = u, a.memoizedState = null, u);
  }
  function Ad(l, a) {
    return a = Rd(
      { mode: "visible", children: a },
      l.mode
    ), a.return = l, l.child = a;
  }
  function Rd(l, a) {
    return l = en(22, l, null, a), l.lanes = 0, l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, l;
  }
  function gi(l, a, u) {
    return pc(a, l.child, null, u), l = Ad(
      a,
      a.pendingProps.children
    ), l.flags |= 2, a.memoizedState = null, l;
  }
  function bf(l, a, u) {
    l.lanes |= a;
    var c = l.alternate;
    c !== null && (c.lanes |= a), Ys(l.return, a, u);
  }
  function Od(l, a, u, c, f) {
    var s = l.memoizedState;
    s === null ? l.memoizedState = {
      isBackwards: a,
      rendering: null,
      renderingStartTime: 0,
      last: c,
      tail: u,
      tailMode: f
    } : (s.isBackwards = a, s.rendering = null, s.renderingStartTime = 0, s.last = c, s.tail = u, s.tailMode = f);
  }
  function Dd(l, a, u) {
    var c = a.pendingProps, f = c.revealOrder, s = c.tail;
    if (ml(l, a, c.children, u), c = Tt.current, (c & 2) !== 0)
      c = c & 1 | 2, a.flags |= 128;
    else {
      if (l !== null && (l.flags & 128) !== 0)
        e: for (l = a.child; l !== null; ) {
          if (l.tag === 13)
            l.memoizedState !== null && bf(l, u, a);
          else if (l.tag === 19)
            bf(l, u, a);
          else if (l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
          if (l === a) break e;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === a)
              break e;
            l = l.return;
          }
          l.sibling.return = l.return, l = l.sibling;
        }
      c &= 1;
    }
    switch (Je(Tt, c), f) {
      case "forwards":
        for (u = a.child, f = null; u !== null; )
          l = u.alternate, l !== null && mf(l) === null && (f = u), u = u.sibling;
        u = f, u === null ? (f = a.child, a.child = null) : (f = u.sibling, u.sibling = null), Od(
          a,
          !1,
          f,
          u,
          s
        );
        break;
      case "backwards":
        for (u = null, f = a.child, a.child = null; f !== null; ) {
          if (l = f.alternate, l !== null && mf(l) === null) {
            a.child = f;
            break;
          }
          l = f.sibling, f.sibling = u, u = f, f = l;
        }
        Od(
          a,
          !0,
          u,
          null,
          s
        );
        break;
      case "together":
        Od(a, !1, null, null, void 0);
        break;
      default:
        a.memoizedState = null;
    }
    return a.child;
  }
  function _a(l, a, u) {
    if (l !== null && (a.dependencies = l.dependencies), xu |= a.lanes, (u & a.childLanes) === 0)
      if (l !== null) {
        if (Ao(
          l,
          a,
          u,
          !1
        ), (u & a.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && a.child !== l.child)
      throw Error(v(153));
    if (a.child !== null) {
      for (l = a.child, u = aa(l, l.pendingProps), a.child = u, u.return = a; l.sibling !== null; )
        l = l.sibling, u = u.sibling = aa(l, l.pendingProps), u.return = a;
      u.sibling = null;
    }
    return a.child;
  }
  function Md(l, a) {
    return (l.lanes & a) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && kr(l)));
  }
  function Mg(l, a, u) {
    switch (a.tag) {
      case 3:
        ou(a, a.stateNode.containerInfo), Tu(a, al, l.memoizedState.cache), To();
        break;
      case 27:
      case 5:
        Ae(a);
        break;
      case 4:
        ou(a, a.stateNode.containerInfo);
        break;
      case 10:
        Tu(
          a,
          a.type,
          a.memoizedProps.value
        );
        break;
      case 13:
        var c = a.memoizedState;
        if (c !== null)
          return c.dehydrated !== null ? (Ou(a), a.flags |= 128, null) : (u & a.child.childLanes) !== 0 ? ny(l, a, u) : (Ou(a), l = _a(
            l,
            a,
            u
          ), l !== null ? l.sibling : null);
        Ou(a);
        break;
      case 19:
        var f = (l.flags & 128) !== 0;
        if (c = (u & a.childLanes) !== 0, c || (Ao(
          l,
          a,
          u,
          !1
        ), c = (u & a.childLanes) !== 0), f) {
          if (c)
            return Dd(
              l,
              a,
              u
            );
          a.flags |= 128;
        }
        if (f = a.memoizedState, f !== null && (f.rendering = null, f.tail = null, f.lastEffect = null), Je(Tt, Tt.current), c) break;
        return null;
      case 22:
      case 23:
        return a.lanes = 0, vd(l, a, u);
      case 24:
        Tu(a, al, l.memoizedState.cache);
    }
    return _a(l, a, u);
  }
  function zg(l, a, u) {
    if (l !== null)
      if (l.memoizedProps !== a.pendingProps)
        il = !0;
      else {
        if (!Md(l, u) && (a.flags & 128) === 0)
          return il = !1, Mg(
            l,
            a,
            u
          );
        il = (l.flags & 131072) !== 0;
      }
    else
      il = !1, rt && (a.flags & 1048576) !== 0 && Ls(a, bo, a.index);
    switch (a.lanes = 0, a.tag) {
      case 16:
        e: {
          l = a.pendingProps;
          var c = a.elementType, f = c._init;
          if (c = f(c._payload), a.type = c, typeof c == "function")
            Qr(c) ? (l = pi(c, l), a.tag = 1, a = Sd(
              null,
              a,
              c,
              l,
              u
            )) : (a.tag = 0, a = bd(
              null,
              a,
              c,
              l,
              u
            ));
          else {
            if (c != null) {
              if (f = c.$$typeof, f === ye) {
                a.tag = 11, a = Dg(
                  null,
                  a,
                  c,
                  l,
                  u
                );
                break e;
              } else if (f === Q) {
                a.tag = 14, a = Du(
                  null,
                  a,
                  c,
                  l,
                  u
                );
                break e;
              }
            }
            throw a = De(c) || c, Error(v(306, a, ""));
          }
        }
        return a;
      case 0:
        return bd(
          l,
          a,
          a.type,
          a.pendingProps,
          u
        );
      case 1:
        return c = a.type, f = pi(
          c,
          a.pendingProps
        ), Sd(
          l,
          a,
          c,
          f,
          u
        );
      case 3:
        e: {
          if (ou(
            a,
            a.stateNode.containerInfo
          ), l === null) throw Error(v(387));
          c = a.pendingProps;
          var s = a.memoizedState;
          f = s.element, $s(l, a), Eu(a, c, null, u);
          var p = a.memoizedState;
          if (c = p.cache, Tu(a, al, c), c !== s.cache && Om(
            a,
            [al],
            u,
            !0
          ), Do(), c = p.element, s.isDehydrated)
            if (s = {
              element: c,
              isDehydrated: !1,
              cache: p.cache
            }, a.updateQueue.baseState = s, a.memoizedState = s, a.flags & 256) {
              a = Td(
                l,
                a,
                c,
                u
              );
              break e;
            } else if (c !== f) {
              f = vn(
                Error(v(424)),
                a
              ), Eo(f), a = Td(
                l,
                a,
                c,
                u
              );
              break e;
            } else {
              switch (l = a.stateNode.containerInfo, l.nodeType) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (ft = sa(l.firstChild), Wt = a, rt = !0, qn = null, Ln = !0, u = Ba(
                a,
                null,
                c,
                u
              ), a.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
            }
          else {
            if (To(), c === f) {
              a = _a(
                l,
                a,
                u
              );
              break e;
            }
            ml(
              l,
              a,
              c,
              u
            );
          }
          a = a.child;
        }
        return a;
      case 26:
        return vf(l, a), l === null ? (u = Qg(
          a.type,
          null,
          a.pendingProps,
          null
        )) ? a.memoizedState = u : rt || (u = a.type, l = a.pendingProps, c = Kn(
          tt.current
        ).createElement(u), c[sl] = a, c[Vl] = l, _e(c, u, l), nl(c), a.stateNode = c) : a.memoizedState = Qg(
          a.type,
          l.memoizedProps,
          a.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Ae(a), l === null && rt && (c = a.stateNode = ge(
          a.type,
          a.pendingProps,
          tt.current
        ), Wt = a, Ln = !0, f = ft, Di(a.type) ? (Mi = f, ft = sa(
          c.firstChild
        )) : ft = f), ml(
          l,
          a,
          a.pendingProps.children,
          u
        ), vf(l, a), l === null && (a.flags |= 4194304), a.child;
      case 5:
        return l === null && rt && ((f = c = ft) && (c = Io(
          c,
          a.type,
          a.pendingProps,
          Ln
        ), c !== null ? (a.stateNode = c, Wt = a, ft = sa(
          c.firstChild
        ), Ln = !1, f = !0) : f = !1), f || bu(a)), Ae(a), f = a.type, s = a.pendingProps, p = l !== null ? l.memoizedProps : null, c = s.children, Za(f, s) ? c = null : p !== null && Za(f, p) && (a.flags |= 32), a.memoizedState !== null && (f = Is(
          l,
          a,
          pg,
          null,
          null,
          u
        ), dn._currentValue = f), vf(l, a), ml(l, a, c, u), a.child;
      case 6:
        return l === null && rt && ((l = u = ft) && (u = vb(
          u,
          a.pendingProps,
          Ln
        ), u !== null ? (a.stateNode = u, Wt = a, ft = null, l = !0) : l = !1), l || bu(a)), null;
      case 13:
        return ny(l, a, u);
      case 4:
        return ou(
          a,
          a.stateNode.containerInfo
        ), c = a.pendingProps, l === null ? a.child = pc(
          a,
          null,
          c,
          u
        ) : ml(
          l,
          a,
          c,
          u
        ), a.child;
      case 11:
        return Dg(
          l,
          a,
          a.type,
          a.pendingProps,
          u
        );
      case 7:
        return ml(
          l,
          a,
          a.pendingProps,
          u
        ), a.child;
      case 8:
        return ml(
          l,
          a,
          a.pendingProps.children,
          u
        ), a.child;
      case 12:
        return ml(
          l,
          a,
          a.pendingProps.children,
          u
        ), a.child;
      case 10:
        return c = a.pendingProps, Tu(a, a.type, c.value), ml(
          l,
          a,
          c.children,
          u
        ), a.child;
      case 9:
        return f = a.type._context, c = a.pendingProps.children, ri(a), f = dl(f), c = c(f), a.flags |= 1, ml(l, a, c, u), a.child;
      case 14:
        return Du(
          l,
          a,
          a.type,
          a.pendingProps,
          u
        );
      case 15:
        return vc(
          l,
          a,
          a.type,
          a.pendingProps,
          u
        );
      case 19:
        return Dd(l, a, u);
      case 31:
        return c = a.pendingProps, u = a.mode, c = {
          mode: c.mode,
          children: c.children
        }, l === null ? (u = Rd(
          c,
          u
        ), u.ref = a.ref, a.child = u, u.return = a, a = u) : (u = aa(l.child, c), u.ref = a.ref, a.child = u, u.return = a, a = u), a;
      case 22:
        return vd(l, a, u);
      case 24:
        return ri(a), c = dl(al), l === null ? (f = Fr(), f === null && (f = At, s = Oo(), f.pooledCache = s, s.refCount++, s !== null && (f.pooledCacheLanes |= u), f = s), a.memoizedState = {
          parent: c,
          cache: f
        }, ks(a), Tu(a, al, f)) : ((l.lanes & u) !== 0 && ($s(l, a), Eu(a, null, null, u), Do()), f = l.memoizedState, s = a.memoizedState, f.parent !== c ? (f = { parent: c, cache: c }, a.memoizedState = f, a.lanes === 0 && (a.memoizedState = a.updateQueue.baseState = f), Tu(a, al, c)) : (c = s.cache, Tu(a, al, c), c !== f.cache && Om(
          a,
          [al],
          u,
          !0
        ))), ml(
          l,
          a,
          a.pendingProps.children,
          u
        ), a.child;
      case 29:
        throw a.pendingProps;
    }
    throw Error(v(156, a.tag));
  }
  function qa(l) {
    l.flags |= 4;
  }
  function No(l, a) {
    if (a.type !== "stylesheet" || (a.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !jy(a)) {
      if (a = Tn.current, a !== null && ((Pe & 4194048) === Pe ? wl !== null : (Pe & 62914560) !== Pe && (Pe & 536870912) === 0 || a !== wl))
        throw cc = Ks, Zs;
      l.flags |= 8192;
    }
  }
  function Sf(l, a) {
    a !== null && (l.flags |= 4), l.flags & 16384 && (a = l.tag !== 22 ? Li() : 536870912, l.lanes |= a, Yo |= a);
  }
  function wo(l, a) {
    if (!rt)
      switch (l.tailMode) {
        case "hidden":
          a = l.tail;
          for (var u = null; a !== null; )
            a.alternate !== null && (u = a), a = a.sibling;
          u === null ? l.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = l.tail;
          for (var c = null; u !== null; )
            u.alternate !== null && (c = u), u = u.sibling;
          c === null ? a || l.tail === null ? l.tail = null : l.tail.sibling = null : c.sibling = null;
      }
  }
  function Ne(l) {
    var a = l.alternate !== null && l.alternate.child === l.child, u = 0, c = 0;
    if (a)
      for (var f = l.child; f !== null; )
        u |= f.lanes | f.childLanes, c |= f.subtreeFlags & 65011712, c |= f.flags & 65011712, f.return = l, f = f.sibling;
    else
      for (f = l.child; f !== null; )
        u |= f.lanes | f.childLanes, c |= f.subtreeFlags, c |= f.flags, f.return = l, f = f.sibling;
    return l.subtreeFlags |= c, l.childLanes = u, a;
  }
  function ay(l, a, u) {
    var c = a.pendingProps;
    switch (Oa(a), a.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ne(a), null;
      case 1:
        return Ne(a), null;
      case 3:
        return u = a.stateNode, c = null, l !== null && (c = l.memoizedState.cache), a.memoizedState.cache !== c && (a.flags |= 2048), Da(al), Y(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (So(a) ? qa(a) : l === null || l.memoizedState.isDehydrated && (a.flags & 256) === 0 || (a.flags |= 1024, Rm())), Ne(a), null;
      case 26:
        return u = a.memoizedState, l === null ? (qa(a), u !== null ? (Ne(a), No(a, u)) : (Ne(a), a.flags &= -16777217)) : u ? u !== l.memoizedState ? (qa(a), Ne(a), No(a, u)) : (Ne(a), a.flags &= -16777217) : (l.memoizedProps !== c && qa(a), Ne(a), a.flags &= -16777217), null;
      case 27:
        he(a), u = tt.current;
        var f = a.type;
        if (l !== null && a.stateNode != null)
          l.memoizedProps !== c && qa(a);
        else {
          if (!c) {
            if (a.stateNode === null)
              throw Error(v(166));
            return Ne(a), null;
          }
          l = it.current, So(a) ? Kr(a) : (l = ge(f, c, u), a.stateNode = l, qa(a));
        }
        return Ne(a), null;
      case 5:
        if (he(a), u = a.type, l !== null && a.stateNode != null)
          l.memoizedProps !== c && qa(a);
        else {
          if (!c) {
            if (a.stateNode === null)
              throw Error(v(166));
            return Ne(a), null;
          }
          if (l = it.current, So(a))
            Kr(a);
          else {
            switch (f = Kn(
              tt.current
            ), l) {
              case 1:
                l = f.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                l = f.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    l = f.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    l = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    l = f.createElement("div"), l.innerHTML = "<script><\/script>", l = l.removeChild(l.firstChild);
                    break;
                  case "select":
                    l = typeof c.is == "string" ? f.createElement("select", { is: c.is }) : f.createElement("select"), c.multiple ? l.multiple = !0 : c.size && (l.size = c.size);
                    break;
                  default:
                    l = typeof c.is == "string" ? f.createElement(u, { is: c.is }) : f.createElement(u);
                }
            }
            l[sl] = a, l[Vl] = c;
            e: for (f = a.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6)
                l.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                f.child.return = f, f = f.child;
                continue;
              }
              if (f === a) break e;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === a)
                  break e;
                f = f.return;
              }
              f.sibling.return = f.return, f = f.sibling;
            }
            a.stateNode = l;
            e: switch (_e(l, u, c), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!c.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1;
            }
            l && qa(a);
          }
        }
        return Ne(a), a.flags &= -16777217, null;
      case 6:
        if (l && a.stateNode != null)
          l.memoizedProps !== c && qa(a);
        else {
          if (typeof c != "string" && a.stateNode === null)
            throw Error(v(166));
          if (l = tt.current, So(a)) {
            if (l = a.stateNode, u = a.memoizedProps, c = null, f = Wt, f !== null)
              switch (f.tag) {
                case 27:
                case 5:
                  c = f.memoizedProps;
              }
            l[sl] = a, l = !!(l.nodeValue === u || c !== null && c.suppressHydrationWarning === !0 || _y(l.nodeValue, u)), l || bu(a);
          } else
            l = Kn(l).createTextNode(
              c
            ), l[sl] = a, a.stateNode = l;
        }
        return Ne(a), null;
      case 13:
        if (c = a.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (f = So(a), c !== null && c.dehydrated !== null) {
            if (l === null) {
              if (!f) throw Error(v(318));
              if (f = a.memoizedState, f = f !== null ? f.dehydrated : null, !f) throw Error(v(317));
              f[sl] = a;
            } else
              To(), (a.flags & 128) === 0 && (a.memoizedState = null), a.flags |= 4;
            Ne(a), f = !1;
          } else
            f = Rm(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = f), f = !0;
          if (!f)
            return a.flags & 256 ? (ra(a), a) : (ra(a), null);
        }
        if (ra(a), (a.flags & 128) !== 0)
          return a.lanes = u, a;
        if (u = c !== null, l = l !== null && l.memoizedState !== null, u) {
          c = a.child, f = null, c.alternate !== null && c.alternate.memoizedState !== null && c.alternate.memoizedState.cachePool !== null && (f = c.alternate.memoizedState.cachePool.pool);
          var s = null;
          c.memoizedState !== null && c.memoizedState.cachePool !== null && (s = c.memoizedState.cachePool.pool), s !== f && (c.flags |= 2048);
        }
        return u !== l && u && (a.child.flags |= 8192), Sf(a, a.updateQueue), Ne(a), null;
      case 4:
        return Y(), l === null && Ny(a.stateNode.containerInfo), Ne(a), null;
      case 10:
        return Da(a.type), Ne(a), null;
      case 19:
        if (ze(Tt), f = a.memoizedState, f === null) return Ne(a), null;
        if (c = (a.flags & 128) !== 0, s = f.rendering, s === null)
          if (c) wo(f, !1);
          else {
            if (Qt !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = a.child; l !== null; ) {
                if (s = mf(l), s !== null) {
                  for (a.flags |= 128, wo(f, !1), l = s.updateQueue, a.updateQueue = l, Sf(a, l), a.subtreeFlags = 0, l = u, u = a.child; u !== null; )
                    ke(u, l), u = u.sibling;
                  return Je(
                    Tt,
                    Tt.current & 1 | 2
                  ), a.child;
                }
                l = l.sibling;
              }
            f.tail !== null && $t() > _d && (a.flags |= 128, c = !0, wo(f, !1), a.lanes = 4194304);
          }
        else {
          if (!c)
            if (l = mf(s), l !== null) {
              if (a.flags |= 128, c = !0, l = l.updateQueue, a.updateQueue = l, Sf(a, l), wo(f, !0), f.tail === null && f.tailMode === "hidden" && !s.alternate && !rt)
                return Ne(a), null;
            } else
              2 * $t() - f.renderingStartTime > _d && u !== 536870912 && (a.flags |= 128, c = !0, wo(f, !1), a.lanes = 4194304);
          f.isBackwards ? (s.sibling = a.child, a.child = s) : (l = f.last, l !== null ? l.sibling = s : a.child = s, f.last = s);
        }
        return f.tail !== null ? (a = f.tail, f.rendering = a, f.tail = a.sibling, f.renderingStartTime = $t(), a.sibling = null, l = Tt.current, Je(Tt, c ? l & 1 | 2 : l & 1), a) : (Ne(a), null);
      case 22:
      case 23:
        return ra(a), zo(), c = a.memoizedState !== null, l !== null ? l.memoizedState !== null !== c && (a.flags |= 8192) : c && (a.flags |= 8192), c ? (u & 536870912) !== 0 && (a.flags & 128) === 0 && (Ne(a), a.subtreeFlags & 6 && (a.flags |= 8192)) : Ne(a), u = a.updateQueue, u !== null && Sf(a, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), c = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (c = a.memoizedState.cachePool.pool), c !== u && (a.flags |= 2048), l !== null && ze(za), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), a.memoizedState.cache !== u && (a.flags |= 2048), Da(al), Ne(a), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(v(156, a.tag));
  }
  function fb(l, a) {
    switch (Oa(a), a.tag) {
      case 1:
        return l = a.flags, l & 65536 ? (a.flags = l & -65537 | 128, a) : null;
      case 3:
        return Da(al), Y(), l = a.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (a.flags = l & -65537 | 128, a) : null;
      case 26:
      case 27:
      case 5:
        return he(a), null;
      case 13:
        if (ra(a), l = a.memoizedState, l !== null && l.dehydrated !== null) {
          if (a.alternate === null)
            throw Error(v(340));
          To();
        }
        return l = a.flags, l & 65536 ? (a.flags = l & -65537 | 128, a) : null;
      case 19:
        return ze(Tt), null;
      case 4:
        return Y(), null;
      case 10:
        return Da(a.type), null;
      case 22:
      case 23:
        return ra(a), zo(), l !== null && ze(za), l = a.flags, l & 65536 ? (a.flags = l & -65537 | 128, a) : null;
      case 24:
        return Da(al), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function uy(l, a) {
    switch (Oa(a), a.tag) {
      case 3:
        Da(al), Y();
        break;
      case 26:
      case 27:
      case 5:
        he(a);
        break;
      case 4:
        Y();
        break;
      case 13:
        ra(a);
        break;
      case 19:
        ze(Tt);
        break;
      case 10:
        Da(a.type);
        break;
      case 22:
      case 23:
        ra(a), zo(), l !== null && ze(za);
        break;
      case 24:
        Da(al);
    }
  }
  function Tf(l, a) {
    try {
      var u = a.updateQueue, c = u !== null ? u.lastEffect : null;
      if (c !== null) {
        var f = c.next;
        u = f;
        do {
          if ((u.tag & l) === l) {
            c = void 0;
            var s = u.create, p = u.inst;
            c = s(), p.destroy = c;
          }
          u = u.next;
        } while (u !== f);
      }
    } catch (b) {
      vt(a, a.return, b);
    }
  }
  function vi(l, a, u) {
    try {
      var c = a.updateQueue, f = c !== null ? c.lastEffect : null;
      if (f !== null) {
        var s = f.next;
        c = s;
        do {
          if ((c.tag & l) === l) {
            var p = c.inst, b = p.destroy;
            if (b !== void 0) {
              p.destroy = void 0, f = a;
              var D = u, V = b;
              try {
                V();
              } catch (le) {
                vt(
                  f,
                  D,
                  le
                );
              }
            }
          }
          c = c.next;
        } while (c !== s);
      }
    } catch (le) {
      vt(a, a.return, le);
    }
  }
  function zd(l) {
    var a = l.updateQueue;
    if (a !== null) {
      var u = l.stateNode;
      try {
        ef(a, u);
      } catch (c) {
        vt(l, l.return, c);
      }
    }
  }
  function iy(l, a, u) {
    u.props = pi(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (c) {
      vt(l, a, c);
    }
  }
  function _o(l, a) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var c = l.stateNode;
            break;
          case 30:
            c = l.stateNode;
            break;
          default:
            c = l.stateNode;
        }
        typeof u == "function" ? l.refCleanup = u(c) : u.current = c;
      }
    } catch (f) {
      vt(l, a, f);
    }
  }
  function fa(l, a) {
    var u = l.ref, c = l.refCleanup;
    if (u !== null)
      if (typeof c == "function")
        try {
          c();
        } catch (f) {
          vt(l, a, f);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (f) {
          vt(l, a, f);
        }
      else u.current = null;
  }
  function qo(l) {
    var a = l.type, u = l.memoizedProps, c = l.stateNode;
    try {
      e: switch (a) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && c.focus();
          break e;
        case "img":
          u.src ? c.src = u.src : u.srcSet && (c.srcset = u.srcSet);
      }
    } catch (f) {
      vt(l, l.return, f);
    }
  }
  function cy(l, a, u) {
    try {
      var c = l.stateNode;
      yb(c, l.type, u, a), c[Vl] = a;
    } catch (f) {
      vt(l, l.return, f);
    }
  }
  function xg(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && Di(l.type) || l.tag === 4;
  }
  function Gn(l) {
    e: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || xg(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && Di(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue e;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Sc(l, a, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, a ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, a) : (a = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, a.appendChild(l), u = u._reactRootContainer, u != null || a.onclick !== null || (a.onclick = kd));
    else if (c !== 4 && (c === 27 && Di(l.type) && (u = l.stateNode, a = null), l = l.child, l !== null))
      for (Sc(l, a, u), l = l.sibling; l !== null; )
        Sc(l, a, u), l = l.sibling;
  }
  function xd(l, a, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, a ? u.insertBefore(l, a) : u.appendChild(l);
    else if (c !== 4 && (c === 27 && Di(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for (xd(l, a, u), l = l.sibling; l !== null; )
        xd(l, a, u), l = l.sibling;
  }
  function Ud(l) {
    var a = l.stateNode, u = l.memoizedProps;
    try {
      for (var c = l.type, f = a.attributes; f.length; )
        a.removeAttributeNode(f[0]);
      _e(a, c, u), a[sl] = l, a[Vl] = u;
    } catch (s) {
      vt(l, l.return, s);
    }
  }
  var La = !1, Gt = !1, Cd = !1, Hd = typeof WeakSet == "function" ? WeakSet : Set, cl = null;
  function oy(l, a) {
    if (l = l.containerInfo, Nf = jf, l = gm(l), Gr(l)) {
      if ("selectionStart" in l)
        var u = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        e: {
          u = (u = l.ownerDocument) && u.defaultView || window;
          var c = u.getSelection && u.getSelection();
          if (c && c.rangeCount !== 0) {
            u = c.anchorNode;
            var f = c.anchorOffset, s = c.focusNode;
            c = c.focusOffset;
            try {
              u.nodeType, s.nodeType;
            } catch {
              u = null;
              break e;
            }
            var p = 0, b = -1, D = -1, V = 0, le = 0, ae = l, X = null;
            t: for (; ; ) {
              for (var J; ae !== u || f !== 0 && ae.nodeType !== 3 || (b = p + f), ae !== s || c !== 0 && ae.nodeType !== 3 || (D = p + c), ae.nodeType === 3 && (p += ae.nodeValue.length), (J = ae.firstChild) !== null; )
                X = ae, ae = J;
              for (; ; ) {
                if (ae === l) break t;
                if (X === u && ++V === f && (b = p), X === s && ++le === c && (D = p), (J = ae.nextSibling) !== null) break;
                ae = X, X = ae.parentNode;
              }
              ae = J;
            }
            u = b === -1 || D === -1 ? null : { start: b, end: D };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (wf = { focusedElem: l, selectionRange: u }, jf = !1, cl = a; cl !== null; )
      if (a = cl, l = a.child, (a.subtreeFlags & 1024) !== 0 && l !== null)
        l.return = a, cl = l;
      else
        for (; cl !== null; ) {
          switch (a = cl, s = a.alternate, l = a.flags, a.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && s !== null) {
                l = void 0, u = a, f = s.memoizedProps, s = s.memoizedState, c = u.stateNode;
                try {
                  var Ce = pi(
                    u.type,
                    f,
                    u.elementType === u.type
                  );
                  l = c.getSnapshotBeforeUpdate(
                    Ce,
                    s
                  ), c.__reactInternalSnapshotBeforeUpdate = l;
                } catch (He) {
                  vt(
                    u,
                    u.return,
                    He
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = a.stateNode.containerInfo, u = l.nodeType, u === 9)
                  _f(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      _f(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(v(163));
          }
          if (l = a.sibling, l !== null) {
            l.return = a.return, cl = l;
            break;
          }
          cl = a.return;
        }
  }
  function ry(l, a, u) {
    var c = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        ja(l, u), c & 4 && Tf(5, u);
        break;
      case 1:
        if (ja(l, u), c & 4)
          if (l = u.stateNode, a === null)
            try {
              l.componentDidMount();
            } catch (p) {
              vt(u, u.return, p);
            }
          else {
            var f = pi(
              u.type,
              a.memoizedProps
            );
            a = a.memoizedState;
            try {
              l.componentDidUpdate(
                f,
                a,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (p) {
              vt(
                u,
                u.return,
                p
              );
            }
          }
        c & 64 && zd(u), c & 512 && _o(u, u.return);
        break;
      case 3:
        if (ja(l, u), c & 64 && (l = u.updateQueue, l !== null)) {
          if (a = null, u.child !== null)
            switch (u.child.tag) {
              case 27:
              case 5:
                a = u.child.stateNode;
                break;
              case 1:
                a = u.child.stateNode;
            }
          try {
            ef(l, a);
          } catch (p) {
            vt(u, u.return, p);
          }
        }
        break;
      case 27:
        a === null && c & 4 && Ud(u);
      case 26:
      case 5:
        ja(l, u), a === null && c & 4 && qo(u), c & 512 && _o(u, u.return);
        break;
      case 12:
        ja(l, u);
        break;
      case 13:
        ja(l, u), c & 4 && Bd(l, u), c & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = sb.bind(
          null,
          u
        ), bb(l, u))));
        break;
      case 22:
        if (c = u.memoizedState !== null || La, !c) {
          a = a !== null && a.memoizedState !== null || Gt, f = La;
          var s = Gt;
          La = c, (Gt = a) && !s ? bi(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : ja(l, u), La = f, Gt = s;
        }
        break;
      case 30:
        break;
      default:
        ja(l, u);
    }
  }
  function fy(l) {
    var a = l.alternate;
    a !== null && (l.alternate = null, fy(a)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (a = l.stateNode, a !== null && Dr(a)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var Ct = null, El = !1;
  function Ya(l, a, u) {
    for (u = u.child; u !== null; )
      Fe(l, a, u), u = u.sibling;
  }
  function Fe(l, a, u) {
    if (jl && typeof jl.onCommitFiberUnmount == "function")
      try {
        jl.onCommitFiberUnmount(no, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        Gt || fa(u, a), Ya(
          l,
          a,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        Gt || fa(u, a);
        var c = Ct, f = El;
        Di(u.type) && (Ct = u.stateNode, El = !1), Ya(
          l,
          a,
          u
        ), fn(u.stateNode), Ct = c, El = f;
        break;
      case 5:
        Gt || fa(u, a);
      case 6:
        if (c = Ct, f = El, Ct = null, Ya(
          l,
          a,
          u
        ), Ct = c, El = f, Ct !== null)
          if (El)
            try {
              (Ct.nodeType === 9 ? Ct.body : Ct.nodeName === "HTML" ? Ct.ownerDocument.body : Ct).removeChild(u.stateNode);
            } catch (s) {
              vt(
                u,
                a,
                s
              );
            }
          else
            try {
              Ct.removeChild(u.stateNode);
            } catch (s) {
              vt(
                u,
                a,
                s
              );
            }
        break;
      case 18:
        Ct !== null && (El ? (l = Ct, Wd(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), ka(l)) : Wd(Ct, u.stateNode));
        break;
      case 4:
        c = Ct, f = El, Ct = u.stateNode.containerInfo, El = !0, Ya(
          l,
          a,
          u
        ), Ct = c, El = f;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Gt || vi(2, u, a), Gt || vi(4, u, a), Ya(
          l,
          a,
          u
        );
        break;
      case 1:
        Gt || (fa(u, a), c = u.stateNode, typeof c.componentWillUnmount == "function" && iy(
          u,
          a,
          c
        )), Ya(
          l,
          a,
          u
        );
        break;
      case 21:
        Ya(
          l,
          a,
          u
        );
        break;
      case 22:
        Gt = (c = Gt) || u.memoizedState !== null, Ya(
          l,
          a,
          u
        ), Gt = c;
        break;
      default:
        Ya(
          l,
          a,
          u
        );
    }
  }
  function Bd(l, a) {
    if (a.memoizedState === null && (l = a.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        ka(l);
      } catch (u) {
        vt(a, a.return, u);
      }
  }
  function sy(l) {
    switch (l.tag) {
      case 13:
      case 19:
        var a = l.stateNode;
        return a === null && (a = l.stateNode = new Hd()), a;
      case 22:
        return l = l.stateNode, a = l._retryCache, a === null && (a = l._retryCache = new Hd()), a;
      default:
        throw Error(v(435, l.tag));
    }
  }
  function Nd(l, a) {
    var u = sy(l);
    a.forEach(function(c) {
      var f = db.bind(null, l, c);
      u.has(c) || (u.add(c), c.then(f, f));
    });
  }
  function Ql(l, a) {
    var u = a.deletions;
    if (u !== null)
      for (var c = 0; c < u.length; c++) {
        var f = u[c], s = l, p = a, b = p;
        e: for (; b !== null; ) {
          switch (b.tag) {
            case 27:
              if (Di(b.type)) {
                Ct = b.stateNode, El = !1;
                break e;
              }
              break;
            case 5:
              Ct = b.stateNode, El = !1;
              break e;
            case 3:
            case 4:
              Ct = b.stateNode.containerInfo, El = !0;
              break e;
          }
          b = b.return;
        }
        if (Ct === null) throw Error(v(160));
        Fe(s, p, f), Ct = null, El = !1, s = f.alternate, s !== null && (s.return = null), f.return = null;
      }
    if (a.subtreeFlags & 13878)
      for (a = a.child; a !== null; )
        Ef(a, l), a = a.sibling;
  }
  var Zl = null;
  function Ef(l, a) {
    var u = l.alternate, c = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ql(a, l), yl(l), c & 4 && (vi(3, l, l.return), Tf(3, l), vi(5, l, l.return));
        break;
      case 1:
        Ql(a, l), yl(l), c & 512 && (Gt || u === null || fa(u, u.return)), c & 64 && La && (l = l.updateQueue, l !== null && (c = l.callbacks, c !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? c : u.concat(c))));
        break;
      case 26:
        var f = Zl;
        if (Ql(a, l), yl(l), c & 512 && (Gt || u === null || fa(u, u.return)), c & 4) {
          var s = u !== null ? u.memoizedState : null;
          if (c = l.memoizedState, u === null)
            if (c === null)
              if (l.stateNode === null) {
                e: {
                  c = l.type, u = l.memoizedProps, f = f.ownerDocument || f;
                  t: switch (c) {
                    case "title":
                      s = f.getElementsByTagName("title")[0], (!s || s[Se] || s[sl] || s.namespaceURI === "http://www.w3.org/2000/svg" || s.hasAttribute("itemprop")) && (s = f.createElement(c), f.head.insertBefore(
                        s,
                        f.querySelector("head > title")
                      )), _e(s, c, u), s[sl] = l, nl(s), c = s;
                      break e;
                    case "link":
                      var p = Ly(
                        "link",
                        "href",
                        f
                      ).get(c + (u.href || ""));
                      if (p) {
                        for (var b = 0; b < p.length; b++)
                          if (s = p[b], s.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && s.getAttribute("rel") === (u.rel == null ? null : u.rel) && s.getAttribute("title") === (u.title == null ? null : u.title) && s.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                            p.splice(b, 1);
                            break t;
                          }
                      }
                      s = f.createElement(c), _e(s, c, u), f.head.appendChild(s);
                      break;
                    case "meta":
                      if (p = Ly(
                        "meta",
                        "content",
                        f
                      ).get(c + (u.content || ""))) {
                        for (b = 0; b < p.length; b++)
                          if (s = p[b], s.getAttribute("content") === (u.content == null ? null : "" + u.content) && s.getAttribute("name") === (u.name == null ? null : u.name) && s.getAttribute("property") === (u.property == null ? null : u.property) && s.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && s.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                            p.splice(b, 1);
                            break t;
                          }
                      }
                      s = f.createElement(c), _e(s, c, u), f.head.appendChild(s);
                      break;
                    default:
                      throw Error(v(468, c));
                  }
                  s[sl] = l, nl(s), c = s;
                }
                l.stateNode = c;
              } else
                Yy(
                  f,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = Kg(
                f,
                c,
                l.memoizedProps
              );
          else
            s !== c ? (s === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : s.count--, c === null ? Yy(
              f,
              l.type,
              l.stateNode
            ) : Kg(
              f,
              c,
              l.memoizedProps
            )) : c === null && l.stateNode !== null && cy(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        Ql(a, l), yl(l), c & 512 && (Gt || u === null || fa(u, u.return)), u !== null && c & 4 && cy(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (Ql(a, l), yl(l), c & 512 && (Gt || u === null || fa(u, u.return)), l.flags & 32) {
          f = l.stateNode;
          try {
            co(f, "");
          } catch (J) {
            vt(l, l.return, J);
          }
        }
        c & 4 && l.stateNode != null && (f = l.memoizedProps, cy(
          l,
          f,
          u !== null ? u.memoizedProps : f
        )), c & 1024 && (Cd = !0);
        break;
      case 6:
        if (Ql(a, l), yl(l), c & 4) {
          if (l.stateNode === null)
            throw Error(v(162));
          c = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = c;
          } catch (J) {
            vt(l, l.return, J);
          }
        }
        break;
      case 3:
        if (Ui = null, f = Zl, Zl = Fd(a.containerInfo), Ql(a, l), Zl = f, yl(l), c & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            ka(a.containerInfo);
          } catch (J) {
            vt(l, l.return, J);
          }
        Cd && (Cd = !1, dy(l));
        break;
      case 4:
        c = Zl, Zl = Fd(
          l.stateNode.containerInfo
        ), Ql(a, l), yl(l), Zl = c;
        break;
      case 12:
        Ql(a, l), yl(l);
        break;
      case 13:
        Ql(a, l), yl(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (Sy = $t()), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, Nd(l, c)));
        break;
      case 22:
        f = l.memoizedState !== null;
        var D = u !== null && u.memoizedState !== null, V = La, le = Gt;
        if (La = V || f, Gt = le || D, Ql(a, l), Gt = le, La = V, yl(l), c & 8192)
          e: for (a = l.stateNode, a._visibility = f ? a._visibility & -2 : a._visibility | 1, f && (u === null || D || La || Gt || Ht(l)), u = null, a = l; ; ) {
            if (a.tag === 5 || a.tag === 26) {
              if (u === null) {
                D = u = a;
                try {
                  if (s = D.stateNode, f)
                    p = s.style, typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none";
                  else {
                    b = D.stateNode;
                    var ae = D.memoizedProps.style, X = ae != null && ae.hasOwnProperty("display") ? ae.display : null;
                    b.style.display = X == null || typeof X == "boolean" ? "" : ("" + X).trim();
                  }
                } catch (J) {
                  vt(D, D.return, J);
                }
              }
            } else if (a.tag === 6) {
              if (u === null) {
                D = a;
                try {
                  D.stateNode.nodeValue = f ? "" : D.memoizedProps;
                } catch (J) {
                  vt(D, D.return, J);
                }
              }
            } else if ((a.tag !== 22 && a.tag !== 23 || a.memoizedState === null || a === l) && a.child !== null) {
              a.child.return = a, a = a.child;
              continue;
            }
            if (a === l) break e;
            for (; a.sibling === null; ) {
              if (a.return === null || a.return === l) break e;
              u === a && (u = null), a = a.return;
            }
            u === a && (u = null), a.sibling.return = a.return, a = a.sibling;
          }
        c & 4 && (c = l.updateQueue, c !== null && (u = c.retryQueue, u !== null && (c.retryQueue = null, Nd(l, u))));
        break;
      case 19:
        Ql(a, l), yl(l), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, Nd(l, c)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Ql(a, l), yl(l);
    }
  }
  function yl(l) {
    var a = l.flags;
    if (a & 2) {
      try {
        for (var u, c = l.return; c !== null; ) {
          if (xg(c)) {
            u = c;
            break;
          }
          c = c.return;
        }
        if (u == null) throw Error(v(160));
        switch (u.tag) {
          case 27:
            var f = u.stateNode, s = Gn(l);
            xd(l, s, f);
            break;
          case 5:
            var p = u.stateNode;
            u.flags & 32 && (co(p, ""), u.flags &= -33);
            var b = Gn(l);
            xd(l, b, p);
            break;
          case 3:
          case 4:
            var D = u.stateNode.containerInfo, V = Gn(l);
            Sc(
              l,
              V,
              D
            );
            break;
          default:
            throw Error(v(161));
        }
      } catch (le) {
        vt(l, l.return, le);
      }
      l.flags &= -3;
    }
    a & 4096 && (l.flags &= -4097);
  }
  function dy(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var a = l;
        dy(a), a.tag === 5 && a.flags & 1024 && a.stateNode.reset(), l = l.sibling;
      }
  }
  function ja(l, a) {
    if (a.subtreeFlags & 8772)
      for (a = a.child; a !== null; )
        ry(l, a.alternate, a), a = a.sibling;
  }
  function Ht(l) {
    for (l = l.child; l !== null; ) {
      var a = l;
      switch (a.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          vi(4, a, a.return), Ht(a);
          break;
        case 1:
          fa(a, a.return);
          var u = a.stateNode;
          typeof u.componentWillUnmount == "function" && iy(
            a,
            a.return,
            u
          ), Ht(a);
          break;
        case 27:
          fn(a.stateNode);
        case 26:
        case 5:
          fa(a, a.return), Ht(a);
          break;
        case 22:
          a.memoizedState === null && Ht(a);
          break;
        case 30:
          Ht(a);
          break;
        default:
          Ht(a);
      }
      l = l.sibling;
    }
  }
  function bi(l, a, u) {
    for (u = u && (a.subtreeFlags & 8772) !== 0, a = a.child; a !== null; ) {
      var c = a.alternate, f = l, s = a, p = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          bi(
            f,
            s,
            u
          ), Tf(4, s);
          break;
        case 1:
          if (bi(
            f,
            s,
            u
          ), c = s, f = c.stateNode, typeof f.componentDidMount == "function")
            try {
              f.componentDidMount();
            } catch (V) {
              vt(c, c.return, V);
            }
          if (c = s, f = c.updateQueue, f !== null) {
            var b = c.stateNode;
            try {
              var D = f.shared.hiddenCallbacks;
              if (D !== null)
                for (f.shared.hiddenCallbacks = null, f = 0; f < D.length; f++)
                  Ws(D[f], b);
            } catch (V) {
              vt(c, c.return, V);
            }
          }
          u && p & 64 && zd(s), _o(s, s.return);
          break;
        case 27:
          Ud(s);
        case 26:
        case 5:
          bi(
            f,
            s,
            u
          ), u && c === null && p & 4 && qo(s), _o(s, s.return);
          break;
        case 12:
          bi(
            f,
            s,
            u
          );
          break;
        case 13:
          bi(
            f,
            s,
            u
          ), u && p & 4 && Bd(f, s);
          break;
        case 22:
          s.memoizedState === null && bi(
            f,
            s,
            u
          ), _o(s, s.return);
          break;
        case 30:
          break;
        default:
          bi(
            f,
            s,
            u
          );
      }
      a = a.sibling;
    }
  }
  function Xn(l, a) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (l = a.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && Ma(u));
  }
  function wd(l, a) {
    l = null, a.alternate !== null && (l = a.alternate.memoizedState.cache), a = a.memoizedState.cache, a !== l && (a.refCount++, l != null && Ma(l));
  }
  function Al(l, a, u, c) {
    if (a.subtreeFlags & 10256)
      for (a = a.child; a !== null; )
        hy(
          l,
          a,
          u,
          c
        ), a = a.sibling;
  }
  function hy(l, a, u, c) {
    var f = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Al(
          l,
          a,
          u,
          c
        ), f & 2048 && Tf(9, a);
        break;
      case 1:
        Al(
          l,
          a,
          u,
          c
        );
        break;
      case 3:
        Al(
          l,
          a,
          u,
          c
        ), f & 2048 && (l = null, a.alternate !== null && (l = a.alternate.memoizedState.cache), a = a.memoizedState.cache, a !== l && (a.refCount++, l != null && Ma(l)));
        break;
      case 12:
        if (f & 2048) {
          Al(
            l,
            a,
            u,
            c
          ), l = a.stateNode;
          try {
            var s = a.memoizedProps, p = s.id, b = s.onPostCommit;
            typeof b == "function" && b(
              p,
              a.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (D) {
            vt(a, a.return, D);
          }
        } else
          Al(
            l,
            a,
            u,
            c
          );
        break;
      case 13:
        Al(
          l,
          a,
          u,
          c
        );
        break;
      case 23:
        break;
      case 22:
        s = a.stateNode, p = a.alternate, a.memoizedState !== null ? s._visibility & 2 ? Al(
          l,
          a,
          u,
          c
        ) : st(l, a) : s._visibility & 2 ? Al(
          l,
          a,
          u,
          c
        ) : (s._visibility |= 2, Mu(
          l,
          a,
          u,
          c,
          (a.subtreeFlags & 10256) !== 0
        )), f & 2048 && Xn(p, a);
        break;
      case 24:
        Al(
          l,
          a,
          u,
          c
        ), f & 2048 && wd(a.alternate, a);
        break;
      default:
        Al(
          l,
          a,
          u,
          c
        );
    }
  }
  function Mu(l, a, u, c, f) {
    for (f = f && (a.subtreeFlags & 10256) !== 0, a = a.child; a !== null; ) {
      var s = l, p = a, b = u, D = c, V = p.flags;
      switch (p.tag) {
        case 0:
        case 11:
        case 15:
          Mu(
            s,
            p,
            b,
            D,
            f
          ), Tf(8, p);
          break;
        case 23:
          break;
        case 22:
          var le = p.stateNode;
          p.memoizedState !== null ? le._visibility & 2 ? Mu(
            s,
            p,
            b,
            D,
            f
          ) : st(
            s,
            p
          ) : (le._visibility |= 2, Mu(
            s,
            p,
            b,
            D,
            f
          )), f && V & 2048 && Xn(
            p.alternate,
            p
          );
          break;
        case 24:
          Mu(
            s,
            p,
            b,
            D,
            f
          ), f && V & 2048 && wd(p.alternate, p);
          break;
        default:
          Mu(
            s,
            p,
            b,
            D,
            f
          );
      }
      a = a.sibling;
    }
  }
  function st(l, a) {
    if (a.subtreeFlags & 10256)
      for (a = a.child; a !== null; ) {
        var u = l, c = a, f = c.flags;
        switch (c.tag) {
          case 22:
            st(u, c), f & 2048 && Xn(
              c.alternate,
              c
            );
            break;
          case 24:
            st(u, c), f & 2048 && wd(c.alternate, c);
            break;
          default:
            st(u, c);
        }
        a = a.sibling;
      }
  }
  var Tc = 8192;
  function Xt(l) {
    if (l.subtreeFlags & Tc)
      for (l = l.child; l !== null; )
        Ug(l), l = l.sibling;
  }
  function Ug(l) {
    switch (l.tag) {
      case 26:
        Xt(l), l.flags & Tc && l.memoizedState !== null && $g(
          Zl,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        Xt(l);
        break;
      case 3:
      case 4:
        var a = Zl;
        Zl = Fd(l.stateNode.containerInfo), Xt(l), Zl = a;
        break;
      case 22:
        l.memoizedState === null && (a = l.alternate, a !== null && a.memoizedState !== null ? (a = Tc, Tc = 16777216, Xt(l), Tc = a) : Xt(l));
        break;
      default:
        Xt(l);
    }
  }
  function my(l) {
    var a = l.alternate;
    if (a !== null && (l = a.child, l !== null)) {
      a.child = null;
      do
        a = l.sibling, l.sibling = null, l = a;
      while (l !== null);
    }
  }
  function Ec(l) {
    var a = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (a !== null)
        for (var u = 0; u < a.length; u++) {
          var c = a[u];
          cl = c, py(
            c,
            l
          );
        }
      my(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        yy(l), l = l.sibling;
  }
  function yy(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Ec(l), l.flags & 2048 && vi(9, l, l.return);
        break;
      case 3:
        Ec(l);
        break;
      case 12:
        Ec(l);
        break;
      case 22:
        var a = l.stateNode;
        l.memoizedState !== null && a._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (a._visibility &= -3, Kl(l)) : Ec(l);
        break;
      default:
        Ec(l);
    }
  }
  function Kl(l) {
    var a = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (a !== null)
        for (var u = 0; u < a.length; u++) {
          var c = a[u];
          cl = c, py(
            c,
            l
          );
        }
      my(l);
    }
    for (l = l.child; l !== null; ) {
      switch (a = l, a.tag) {
        case 0:
        case 11:
        case 15:
          vi(8, a, a.return), Kl(a);
          break;
        case 22:
          u = a.stateNode, u._visibility & 2 && (u._visibility &= -3, Kl(a));
          break;
        default:
          Kl(a);
      }
      l = l.sibling;
    }
  }
  function py(l, a) {
    for (; cl !== null; ) {
      var u = cl;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          vi(8, u, a);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var c = u.memoizedState.cachePool.pool;
            c != null && c.refCount++;
          }
          break;
        case 24:
          Ma(u.memoizedState.cache);
      }
      if (c = u.child, c !== null) c.return = u, cl = c;
      else
        e: for (u = l; cl !== null; ) {
          c = cl;
          var f = c.sibling, s = c.return;
          if (fy(c), c === u) {
            cl = null;
            break e;
          }
          if (f !== null) {
            f.return = s, cl = f;
            break e;
          }
          cl = s;
        }
    }
  }
  var gy = {
    getCacheForType: function(l) {
      var a = dl(al), u = a.data.get(l);
      return u === void 0 && (u = l(), a.data.set(l, u)), u;
    }
  }, Cg = typeof WeakMap == "function" ? WeakMap : Map, yt = 0, At = null, Ie = null, Pe = 0, pt = 0, cn = null, Va = !1, Lo = !1, vy = !1, zu = 0, Qt = 0, xu = 0, Ac = 0, Ga = 0, Qn = 0, Yo = 0, jo = null, on = null, by = !1, Sy = 0, _d = 1 / 0, Vo = null, Si = null, Rl = 0, Xa = null, Go = null, Ol = 0, qd = 0, Ld = null, Ty = null, Xo = 0, Ey = null;
  function En() {
    if ((yt & 2) !== 0 && Pe !== 0)
      return Pe & -Pe;
    if (N.T !== null) {
      var l = Yn;
      return l !== 0 ? l : Mc();
    }
    return Zp();
  }
  function Ay() {
    Qn === 0 && (Qn = (Pe & 536870912) === 0 || rt ? Ku() : 536870912);
    var l = Tn.current;
    return l !== null && (l.flags |= 32), Qn;
  }
  function An(l, a, u) {
    (l === At && (pt === 2 || pt === 9) || l.cancelPendingCommit !== null) && (Qa(l, 0), Uu(
      l,
      Pe,
      Qn,
      !1
    )), Yi(l, u), ((yt & 2) === 0 || l !== At) && (l === At && ((yt & 2) === 0 && (Ac |= u), Qt === 4 && Uu(
      l,
      Pe,
      Qn,
      !1
    )), rn(l));
  }
  function Qo(l, a, u) {
    if ((yt & 6) !== 0) throw Error(v(327));
    var c = !u && (a & 124) === 0 && (a & l.expiredLanes) === 0 || pa(l, a), f = c ? Oy(l, a) : Yd(l, a, !0), s = c;
    do {
      if (f === 0) {
        Lo && !c && Uu(l, a, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, s && !Hg(u)) {
          f = Yd(l, a, !1), s = !1;
          continue;
        }
        if (f === 2) {
          if (s = a, l.errorRecoveryDisabledLanes & s)
            var p = 0;
          else
            p = l.pendingLanes & -536870913, p = p !== 0 ? p : p & 536870912 ? 536870912 : 0;
          if (p !== 0) {
            a = p;
            e: {
              var b = l;
              f = jo;
              var D = b.current.memoizedState.isDehydrated;
              if (D && (Qa(b, p).flags |= 256), p = Yd(
                b,
                p,
                !1
              ), p !== 2) {
                if (vy && !D) {
                  b.errorRecoveryDisabledLanes |= s, Ac |= s, f = 4;
                  break e;
                }
                s = on, on = f, s !== null && (on === null ? on = s : on.push.apply(
                  on,
                  s
                ));
              }
              f = p;
            }
            if (s = !1, f !== 2) continue;
          }
        }
        if (f === 1) {
          Qa(l, 0), Uu(l, a, 0, !0);
          break;
        }
        e: {
          switch (c = l, s = f, s) {
            case 0:
            case 1:
              throw Error(v(345));
            case 4:
              if ((a & 4194048) !== a) break;
            case 6:
              Uu(
                c,
                a,
                Qn,
                !Va
              );
              break e;
            case 2:
              on = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(v(329));
          }
          if ((a & 62914560) === a && (f = Sy + 300 - $t(), 10 < f)) {
            if (Uu(
              c,
              a,
              Qn,
              !Va
            ), Zu(c, 0, !0) !== 0) break e;
            c.timeoutHandle = $d(
              Af.bind(
                null,
                c,
                u,
                on,
                Vo,
                by,
                a,
                Qn,
                Ac,
                Yo,
                Va,
                s,
                2,
                -0,
                0
              ),
              f
            );
            break e;
          }
          Af(
            c,
            u,
            on,
            Vo,
            by,
            a,
            Qn,
            Ac,
            Yo,
            Va,
            s,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    rn(l);
  }
  function Af(l, a, u, c, f, s, p, b, D, V, le, ae, X, J) {
    if (l.timeoutHandle = -1, ae = a.subtreeFlags, (ae & 8192 || (ae & 16785408) === 16785408) && (lr = { stylesheets: null, count: 0, unsuspend: kg }, Ug(a), ae = Vy(), ae !== null)) {
      l.cancelPendingCommit = ae(
        wg.bind(
          null,
          l,
          a,
          s,
          u,
          c,
          f,
          p,
          b,
          D,
          le,
          1,
          X,
          J
        )
      ), Uu(l, s, p, !V);
      return;
    }
    wg(
      l,
      a,
      s,
      u,
      c,
      f,
      p,
      b,
      D
    );
  }
  function Hg(l) {
    for (var a = l; ; ) {
      var u = a.tag;
      if ((u === 0 || u === 11 || u === 15) && a.flags & 16384 && (u = a.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var c = 0; c < u.length; c++) {
          var f = u[c], s = f.getSnapshot;
          f = f.value;
          try {
            if (!Tl(s(), f)) return !1;
          } catch {
            return !1;
          }
        }
      if (u = a.child, a.subtreeFlags & 16384 && u !== null)
        u.return = a, a = u;
      else {
        if (a === l) break;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === l) return !0;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
    }
    return !0;
  }
  function Uu(l, a, u, c) {
    a &= ~Ga, a &= ~Ac, l.suspendedLanes |= a, l.pingedLanes &= ~a, c && (l.warmLanes |= a), c = l.expirationTimes;
    for (var f = a; 0 < f; ) {
      var s = 31 - Fl(f), p = 1 << s;
      c[s] = -1, f &= ~p;
    }
    u !== 0 && Rr(l, u, a);
  }
  function Rc() {
    return (yt & 6) === 0 ? (Mf(0), !1) : !0;
  }
  function Ti() {
    if (Ie !== null) {
      if (pt === 0)
        var l = Ie.return;
      else
        l = Ie, ia = Su = null, ed(l), mc = null, Co = 0, l = Ie;
      for (; l !== null; )
        uy(l.alternate, l), l = l.return;
      Ie = null;
    }
  }
  function Qa(l, a) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, pb(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), Ti(), At = l, Ie = u = aa(l.current, null), Pe = a, pt = 0, cn = null, Va = !1, Lo = pa(l, a), vy = !1, Yo = Qn = Ga = Ac = xu = Qt = 0, on = jo = null, by = !1, (a & 8) !== 0 && (a |= a & 32);
    var c = l.entangledLanes;
    if (c !== 0)
      for (l = l.entanglements, c &= a; 0 < c; ) {
        var f = 31 - Fl(c), s = 1 << f;
        a |= l[f], c &= ~s;
      }
    return zu = a, na(), u;
  }
  function Ry(l, a) {
    je = null, N.H = yd, a === si || a === Ir ? (a = zm(), pt = 3) : a === Zs ? (a = zm(), pt = 4) : pt = a === Vt ? 8 : a !== null && typeof a == "object" && typeof a.then == "function" ? 6 : 1, cn = a, Ie === null && (Qt = 1, gf(
      l,
      vn(a, l.current)
    ));
  }
  function Bg() {
    var l = N.H;
    return N.H = yd, l === null ? yd : l;
  }
  function Oc() {
    var l = N.A;
    return N.A = gy, l;
  }
  function Dc() {
    Qt = 4, Va || (Pe & 4194048) !== Pe && Tn.current !== null || (Lo = !0), (xu & 134217727) === 0 && (Ac & 134217727) === 0 || At === null || Uu(
      At,
      Pe,
      Qn,
      !1
    );
  }
  function Yd(l, a, u) {
    var c = yt;
    yt |= 2;
    var f = Bg(), s = Oc();
    (At !== l || Pe !== a) && (Vo = null, Qa(l, a)), a = !1;
    var p = Qt;
    e: do
      try {
        if (pt !== 0 && Ie !== null) {
          var b = Ie, D = cn;
          switch (pt) {
            case 8:
              Ti(), p = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Tn.current === null && (a = !0);
              var V = pt;
              if (pt = 0, cn = null, Zo(l, b, D, V), u && Lo) {
                p = 0;
                break e;
              }
              break;
            default:
              V = pt, pt = 0, cn = null, Zo(l, b, D, V);
          }
        }
        jd(), p = Qt;
        break;
      } catch (le) {
        Ry(l, le);
      }
    while (!0);
    return a && l.shellSuspendCounter++, ia = Su = null, yt = c, N.H = f, N.A = s, Ie === null && (At = null, Pe = 0, na()), p;
  }
  function jd() {
    for (; Ie !== null; ) My(Ie);
  }
  function Oy(l, a) {
    var u = yt;
    yt |= 2;
    var c = Bg(), f = Oc();
    At !== l || Pe !== a ? (Vo = null, _d = $t() + 500, Qa(l, a)) : Lo = pa(
      l,
      a
    );
    e: do
      try {
        if (pt !== 0 && Ie !== null) {
          a = Ie;
          var s = cn;
          t: switch (pt) {
            case 1:
              pt = 0, cn = null, Zo(l, a, s, 1);
              break;
            case 2:
            case 9:
              if (Js(s)) {
                pt = 0, cn = null, zy(a);
                break;
              }
              a = function() {
                pt !== 2 && pt !== 9 || At !== l || (pt = 7), rn(l);
              }, s.then(a, a);
              break e;
            case 3:
              pt = 7;
              break e;
            case 4:
              pt = 5;
              break e;
            case 7:
              Js(s) ? (pt = 0, cn = null, zy(a)) : (pt = 0, cn = null, Zo(l, a, s, 7));
              break;
            case 5:
              var p = null;
              switch (Ie.tag) {
                case 26:
                  p = Ie.memoizedState;
                case 5:
                case 27:
                  var b = Ie;
                  if (!p || jy(p)) {
                    pt = 0, cn = null;
                    var D = b.sibling;
                    if (D !== null) Ie = D;
                    else {
                      var V = b.return;
                      V !== null ? (Ie = V, Rf(V)) : Ie = null;
                    }
                    break t;
                  }
              }
              pt = 0, cn = null, Zo(l, a, s, 5);
              break;
            case 6:
              pt = 0, cn = null, Zo(l, a, s, 6);
              break;
            case 8:
              Ti(), Qt = 6;
              break e;
            default:
              throw Error(v(462));
          }
        }
        Dy();
        break;
      } catch (le) {
        Ry(l, le);
      }
    while (!0);
    return ia = Su = null, N.H = c, N.A = f, yt = u, Ie !== null ? 0 : (At = null, Pe = 0, na(), Qt);
  }
  function Dy() {
    for (; Ie !== null && !Cl(); )
      My(Ie);
  }
  function My(l) {
    var a = zg(l.alternate, l, zu);
    l.memoizedProps = l.pendingProps, a === null ? Rf(l) : Ie = a;
  }
  function zy(l) {
    var a = l, u = a.alternate;
    switch (a.tag) {
      case 15:
      case 0:
        a = ey(
          u,
          a,
          a.pendingProps,
          a.type,
          void 0,
          Pe
        );
        break;
      case 11:
        a = ey(
          u,
          a,
          a.pendingProps,
          a.type.render,
          a.ref,
          Pe
        );
        break;
      case 5:
        ed(a);
      default:
        uy(u, a), a = Ie = ke(a, zu), a = zg(u, a, zu);
    }
    l.memoizedProps = l.pendingProps, a === null ? Rf(l) : Ie = a;
  }
  function Zo(l, a, u, c) {
    ia = Su = null, ed(a), mc = null, Co = 0;
    var f = a.return;
    try {
      if (Og(
        l,
        f,
        a,
        u,
        Pe
      )) {
        Qt = 1, gf(
          l,
          vn(u, l.current)
        ), Ie = null;
        return;
      }
    } catch (s) {
      if (f !== null) throw Ie = f, s;
      Qt = 1, gf(
        l,
        vn(u, l.current)
      ), Ie = null;
      return;
    }
    a.flags & 32768 ? (rt || c === 1 ? l = !0 : Lo || (Pe & 536870912) !== 0 ? l = !1 : (Va = l = !0, (c === 2 || c === 9 || c === 3 || c === 6) && (c = Tn.current, c !== null && c.tag === 13 && (c.flags |= 16384))), Ng(a, l)) : Rf(a);
  }
  function Rf(l) {
    var a = l;
    do {
      if ((a.flags & 32768) !== 0) {
        Ng(
          a,
          Va
        );
        return;
      }
      l = a.return;
      var u = ay(
        a.alternate,
        a,
        zu
      );
      if (u !== null) {
        Ie = u;
        return;
      }
      if (a = a.sibling, a !== null) {
        Ie = a;
        return;
      }
      Ie = a = l;
    } while (a !== null);
    Qt === 0 && (Qt = 5);
  }
  function Ng(l, a) {
    do {
      var u = fb(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, Ie = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !a && (l = l.sibling, l !== null)) {
        Ie = l;
        return;
      }
      Ie = l = u;
    } while (l !== null);
    Qt = 6, Ie = null;
  }
  function wg(l, a, u, c, f, s, p, b, D) {
    l.cancelPendingCommit = null;
    do
      Gd();
    while (Rl !== 0);
    if ((yt & 6) !== 0) throw Error(v(327));
    if (a !== null) {
      if (a === l.current) throw Error(v(177));
      if (s = a.lanes | a.childLanes, s |= Aa, Qp(
        l,
        u,
        s,
        p,
        b,
        D
      ), l === At && (Ie = At = null, Pe = 0), Go = a, Xa = l, Ol = u, qd = s, Ld = f, Ty = c, (a.subtreeFlags & 10256) !== 0 || (a.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, hb(Ar, function() {
        return xy(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), c = (a.flags & 13878) !== 0, (a.subtreeFlags & 13878) !== 0 || c) {
        c = N.T, N.T = null, f = I.p, I.p = 2, p = yt, yt |= 4;
        try {
          oy(l, a, u);
        } finally {
          yt = p, I.p = f, N.T = c;
        }
      }
      Rl = 1, _g(), Of(), Vd();
    }
  }
  function _g() {
    if (Rl === 1) {
      Rl = 0;
      var l = Xa, a = Go, u = (a.flags & 13878) !== 0;
      if ((a.subtreeFlags & 13878) !== 0 || u) {
        u = N.T, N.T = null;
        var c = I.p;
        I.p = 2;
        var f = yt;
        yt |= 4;
        try {
          Ef(a, l);
          var s = wf, p = gm(l.containerInfo), b = s.focusedElem, D = s.selectionRange;
          if (p !== b && b && b.ownerDocument && Vr(
            b.ownerDocument.documentElement,
            b
          )) {
            if (D !== null && Gr(b)) {
              var V = D.start, le = D.end;
              if (le === void 0 && (le = V), "selectionStart" in b)
                b.selectionStart = V, b.selectionEnd = Math.min(
                  le,
                  b.value.length
                );
              else {
                var ae = b.ownerDocument || document, X = ae && ae.defaultView || window;
                if (X.getSelection) {
                  var J = X.getSelection(), Ce = b.textContent.length, He = Math.min(D.start, Ce), dt = D.end === void 0 ? He : Math.min(D.end, Ce);
                  !J.extend && He > dt && (p = dt, dt = He, He = p);
                  var L = zt(
                    b,
                    He
                  ), _ = zt(
                    b,
                    dt
                  );
                  if (L && _ && (J.rangeCount !== 1 || J.anchorNode !== L.node || J.anchorOffset !== L.offset || J.focusNode !== _.node || J.focusOffset !== _.offset)) {
                    var j = ae.createRange();
                    j.setStart(L.node, L.offset), J.removeAllRanges(), He > dt ? (J.addRange(j), J.extend(_.node, _.offset)) : (j.setEnd(_.node, _.offset), J.addRange(j));
                  }
                }
              }
            }
            for (ae = [], J = b; J = J.parentNode; )
              J.nodeType === 1 && ae.push({
                element: J,
                left: J.scrollLeft,
                top: J.scrollTop
              });
            for (typeof b.focus == "function" && b.focus(), b = 0; b < ae.length; b++) {
              var ne = ae[b];
              ne.element.scrollLeft = ne.left, ne.element.scrollTop = ne.top;
            }
          }
          jf = !!Nf, wf = Nf = null;
        } finally {
          yt = f, I.p = c, N.T = u;
        }
      }
      l.current = a, Rl = 2;
    }
  }
  function Of() {
    if (Rl === 2) {
      Rl = 0;
      var l = Xa, a = Go, u = (a.flags & 8772) !== 0;
      if ((a.subtreeFlags & 8772) !== 0 || u) {
        u = N.T, N.T = null;
        var c = I.p;
        I.p = 2;
        var f = yt;
        yt |= 4;
        try {
          ry(l, a.alternate, a);
        } finally {
          yt = f, I.p = c, N.T = u;
        }
      }
      Rl = 3;
    }
  }
  function Vd() {
    if (Rl === 4 || Rl === 3) {
      Rl = 0, kt();
      var l = Xa, a = Go, u = Ol, c = Ty;
      (a.subtreeFlags & 10256) !== 0 || (a.flags & 10256) !== 0 ? Rl = 5 : (Rl = 0, Go = Xa = null, qg(l, l.pendingLanes));
      var f = l.pendingLanes;
      if (f === 0 && (Si = null), ps(u), a = a.stateNode, jl && typeof jl.onCommitFiberRoot == "function")
        try {
          jl.onCommitFiberRoot(
            no,
            a,
            void 0,
            (a.current.flags & 128) === 128
          );
        } catch {
        }
      if (c !== null) {
        a = N.T, f = I.p, I.p = 2, N.T = null;
        try {
          for (var s = l.onRecoverableError, p = 0; p < c.length; p++) {
            var b = c[p];
            s(b.value, {
              componentStack: b.stack
            });
          }
        } finally {
          N.T = a, I.p = f;
        }
      }
      (Ol & 3) !== 0 && Gd(), rn(l), f = l.pendingLanes, (u & 4194090) !== 0 && (f & 42) !== 0 ? l === Ey ? Xo++ : (Xo = 0, Ey = l) : Xo = 0, Mf(0);
    }
  }
  function qg(l, a) {
    (l.pooledCacheLanes &= a) === 0 && (a = l.pooledCache, a != null && (l.pooledCache = null, Ma(a)));
  }
  function Gd(l) {
    return _g(), Of(), Vd(), xy();
  }
  function xy() {
    if (Rl !== 5) return !1;
    var l = Xa, a = qd;
    qd = 0;
    var u = ps(Ol), c = N.T, f = I.p;
    try {
      I.p = 32 > u ? 32 : u, N.T = null, u = Ld, Ld = null;
      var s = Xa, p = Ol;
      if (Rl = 0, Go = Xa = null, Ol = 0, (yt & 6) !== 0) throw Error(v(331));
      var b = yt;
      if (yt |= 4, yy(s.current), hy(
        s,
        s.current,
        p,
        u
      ), yt = b, Mf(0, !1), jl && typeof jl.onPostCommitFiberRoot == "function")
        try {
          jl.onPostCommitFiberRoot(no, s);
        } catch {
        }
      return !0;
    } finally {
      I.p = f, N.T = c, qg(l, a);
    }
  }
  function Uy(l, a, u) {
    a = vn(u, a), a = Im(l.stateNode, a, 2), l = Ua(l, a, 2), l !== null && (Yi(l, 2), rn(l));
  }
  function vt(l, a, u) {
    if (l.tag === 3)
      Uy(l, l, u);
    else
      for (; a !== null; ) {
        if (a.tag === 3) {
          Uy(
            a,
            l,
            u
          );
          break;
        } else if (a.tag === 1) {
          var c = a.stateNode;
          if (typeof a.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (Si === null || !Si.has(c))) {
            l = vn(u, l), u = Pm(2), c = Ua(a, u, 2), c !== null && (un(
              u,
              c,
              a,
              l
            ), Yi(c, 2), rn(c));
            break;
          }
        }
        a = a.return;
      }
  }
  function Xd(l, a, u) {
    var c = l.pingCache;
    if (c === null) {
      c = l.pingCache = new Cg();
      var f = /* @__PURE__ */ new Set();
      c.set(a, f);
    } else
      f = c.get(a), f === void 0 && (f = /* @__PURE__ */ new Set(), c.set(a, f));
    f.has(u) || (vy = !0, f.add(u), l = Cy.bind(null, l, a, u), a.then(l, l));
  }
  function Cy(l, a, u) {
    var c = l.pingCache;
    c !== null && c.delete(a), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, At === l && (Pe & u) === u && (Qt === 4 || Qt === 3 && (Pe & 62914560) === Pe && 300 > $t() - Sy ? (yt & 2) === 0 && Qa(l, 0) : Ga |= u, Yo === Pe && (Yo = 0)), rn(l);
  }
  function Hy(l, a) {
    a === 0 && (a = Li()), l = Ra(l, a), l !== null && (Yi(l, a), rn(l));
  }
  function sb(l) {
    var a = l.memoizedState, u = 0;
    a !== null && (u = a.retryLane), Hy(l, u);
  }
  function db(l, a) {
    var u = 0;
    switch (l.tag) {
      case 13:
        var c = l.stateNode, f = l.memoizedState;
        f !== null && (u = f.retryLane);
        break;
      case 19:
        c = l.stateNode;
        break;
      case 22:
        c = l.stateNode._retryCache;
        break;
      default:
        throw Error(v(314));
    }
    c !== null && c.delete(a), Hy(l, u);
  }
  function hb(l, a) {
    return Ze(l, a);
  }
  var Qd = null, Ei = null, Df = !1, Ko = !1, Zd = !1, Ai = 0;
  function rn(l) {
    l !== Ei && l.next === null && (Ei === null ? Qd = Ei = l : Ei = Ei.next = l), Ko = !0, Df || (Df = !0, jg());
  }
  function Mf(l, a) {
    if (!Zd && Ko) {
      Zd = !0;
      do
        for (var u = !1, c = Qd; c !== null; ) {
          if (l !== 0) {
            var f = c.pendingLanes;
            if (f === 0) var s = 0;
            else {
              var p = c.suspendedLanes, b = c.pingedLanes;
              s = (1 << 31 - Fl(42 | l) + 1) - 1, s &= f & ~(p & ~b), s = s & 201326741 ? s & 201326741 | 1 : s ? s | 2 : 0;
            }
            s !== 0 && (u = !0, xf(c, s));
          } else
            s = Pe, s = Zu(
              c,
              c === At ? s : 0,
              c.cancelPendingCommit !== null || c.timeoutHandle !== -1
            ), (s & 3) === 0 || pa(c, s) || (u = !0, xf(c, s));
          c = c.next;
        }
      while (u);
      Zd = !1;
    }
  }
  function Lg() {
    zf();
  }
  function zf() {
    Ko = Df = !1;
    var l = 0;
    Ai !== 0 && (Bu() && (l = Ai), Ai = 0);
    for (var a = $t(), u = null, c = Qd; c !== null; ) {
      var f = c.next, s = By(c, a);
      s === 0 ? (c.next = null, u === null ? Qd = f : u.next = f, f === null && (Ei = u)) : (u = c, (l !== 0 || (s & 3) !== 0) && (Ko = !0)), c = f;
    }
    Mf(l);
  }
  function By(l, a) {
    for (var u = l.suspendedLanes, c = l.pingedLanes, f = l.expirationTimes, s = l.pendingLanes & -62914561; 0 < s; ) {
      var p = 31 - Fl(s), b = 1 << p, D = f[p];
      D === -1 ? ((b & u) === 0 || (b & c) !== 0) && (f[p] = fl(b, a)) : D <= a && (l.expiredLanes |= b), s &= ~b;
    }
    if (a = At, u = Pe, u = Zu(
      l,
      l === a ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c = l.callbackNode, u === 0 || l === a && (pt === 2 || pt === 9) || l.cancelPendingCommit !== null)
      return c !== null && c !== null && Lt(c), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || pa(l, u)) {
      if (a = u & -u, a === l.callbackPriority) return a;
      switch (c !== null && Lt(c), ps(u)) {
        case 2:
        case 8:
          u = Xh;
          break;
        case 32:
          u = Ar;
          break;
        case 268435456:
          u = lo;
          break;
        default:
          u = Ar;
      }
      return c = Yg.bind(null, l), u = Ze(u, c), l.callbackPriority = a, l.callbackNode = u, a;
    }
    return c !== null && c !== null && Lt(c), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function Yg(l, a) {
    if (Rl !== 0 && Rl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (Gd() && l.callbackNode !== u)
      return null;
    var c = Pe;
    return c = Zu(
      l,
      l === At ? c : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c === 0 ? null : (Qo(l, c, a), By(l, $t()), l.callbackNode != null && l.callbackNode === u ? Yg.bind(null, l) : null);
  }
  function xf(l, a) {
    if (Gd()) return null;
    Qo(l, a, !0);
  }
  function jg() {
    gb(function() {
      (yt & 6) !== 0 ? Ze(
        Vp,
        Lg
      ) : zf();
    });
  }
  function Mc() {
    return Ai === 0 && (Ai = Ku()), Ai;
  }
  function Kd(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Br("" + l);
  }
  function Uf(l, a) {
    var u = a.ownerDocument.createElement("input");
    return u.name = a.name, u.value = a.value, l.id && u.setAttribute("form", l.id), a.parentNode.insertBefore(u, a), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function Vg(l, a, u, c, f) {
    if (a === "submit" && u && u.stateNode === f) {
      var s = Kd(
        (f[Vl] || null).action
      ), p = c.submitter;
      p && (a = (a = p[Vl] || null) ? Kd(a.formAction) : p.getAttribute("formAction"), a !== null && (s = a, p = null));
      var b = new zs(
        "action",
        "action",
        null,
        c,
        f
      );
      l.push({
        event: b,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (c.defaultPrevented) {
                if (Ai !== 0) {
                  var D = p ? Uf(f, p) : new FormData(f);
                  md(
                    u,
                    {
                      pending: !0,
                      data: D,
                      method: f.method,
                      action: s
                    },
                    null,
                    D
                  );
                }
              } else
                typeof s == "function" && (b.preventDefault(), D = p ? Uf(f, p) : new FormData(f), md(
                  u,
                  {
                    pending: !0,
                    data: D,
                    method: f.method,
                    action: s
                  },
                  s,
                  D
                ));
            },
            currentTarget: f
          }
        ]
      });
    }
  }
  for (var Zt = 0; Zt < mo.length; Zt++) {
    var Cf = mo[Zt], mb = Cf.toLowerCase(), Ke = Cf[0].toUpperCase() + Cf.slice(1);
    Nn(
      mb,
      "on" + Ke
    );
  }
  Nn(fg, "onAnimationEnd"), Nn(vm, "onAnimationIteration"), Nn(sg, "onAnimationStart"), Nn("dblclick", "onDoubleClick"), Nn("focusin", "onFocus"), Nn("focusout", "onBlur"), Nn(bm, "onTransitionRun"), Nn(qs, "onTransitionStart"), Nn(dg, "onTransitionCancel"), Nn(Sm, "onTransitionEnd"), $u("onMouseEnter", ["mouseout", "mouseover"]), $u("onMouseLeave", ["mouseout", "mouseover"]), $u("onPointerEnter", ["pointerout", "pointerover"]), $u("onPointerLeave", ["pointerout", "pointerover"]), ku(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), ku(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), ku("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), ku(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), ku(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), ku(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Hf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Ri = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Hf)
  );
  function zc(l, a) {
    a = (a & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var c = l[u], f = c.event;
      c = c.listeners;
      e: {
        var s = void 0;
        if (a)
          for (var p = c.length - 1; 0 <= p; p--) {
            var b = c[p], D = b.instance, V = b.currentTarget;
            if (b = b.listener, D !== s && f.isPropagationStopped())
              break e;
            s = b, f.currentTarget = V;
            try {
              s(f);
            } catch (le) {
              yf(le);
            }
            f.currentTarget = null, s = D;
          }
        else
          for (p = 0; p < c.length; p++) {
            if (b = c[p], D = b.instance, V = b.currentTarget, b = b.listener, D !== s && f.isPropagationStopped())
              break e;
            s = b, f.currentTarget = V;
            try {
              s(f);
            } catch (le) {
              yf(le);
            }
            f.currentTarget = null, s = D;
          }
      }
    }
  }
  function Ve(l, a) {
    var u = a[gs];
    u === void 0 && (u = a[gs] = /* @__PURE__ */ new Set());
    var c = l + "__bubble";
    u.has(c) || (Jd(a, l, 2, !1), u.add(c));
  }
  function Jo(l, a, u) {
    var c = 0;
    a && (c |= 4), Jd(
      u,
      l,
      c,
      a
    );
  }
  var ko = "_reactListening" + Math.random().toString(36).slice(2);
  function Ny(l) {
    if (!l[ko]) {
      l[ko] = !0, zr.forEach(function(u) {
        u !== "selectionchange" && (Ri.has(u) || Jo(u, !1, l), Jo(u, !0, l));
      });
      var a = l.nodeType === 9 ? l : l.ownerDocument;
      a === null || a[ko] || (a[ko] = !0, Jo("selectionchange", !1, a));
    }
  }
  function Jd(l, a, u, c) {
    switch ($y(a)) {
      case 2:
        var f = Wg;
        break;
      case 8:
        f = Fg;
        break;
      default:
        f = Jy;
    }
    u = f.bind(
      null,
      a,
      u,
      l
    ), f = void 0, !Os || a !== "touchstart" && a !== "touchmove" && a !== "wheel" || (f = !0), c ? f !== void 0 ? l.addEventListener(a, u, {
      capture: !0,
      passive: f
    }) : l.addEventListener(a, u, !0) : f !== void 0 ? l.addEventListener(a, u, {
      passive: f
    }) : l.addEventListener(a, u, !1);
  }
  function Zn(l, a, u, c, f) {
    var s = c;
    if ((a & 1) === 0 && (a & 2) === 0 && c !== null)
      e: for (; ; ) {
        if (c === null) return;
        var p = c.tag;
        if (p === 3 || p === 4) {
          var b = c.stateNode.containerInfo;
          if (b === f) break;
          if (p === 4)
            for (p = c.return; p !== null; ) {
              var D = p.tag;
              if ((D === 3 || D === 4) && p.stateNode.containerInfo === f)
                return;
              p = p.return;
            }
          for (; b !== null; ) {
            if (p = bl(b), p === null) return;
            if (D = p.tag, D === 5 || D === 6 || D === 26 || D === 27) {
              c = s = p;
              continue e;
            }
            b = b.parentNode;
          }
        }
        c = c.return;
      }
    fo(function() {
      var V = s, le = Rs(u), ae = [];
      e: {
        var X = Tm.get(l);
        if (X !== void 0) {
          var J = zs, Ce = l;
          switch (l) {
            case "keypress":
              if (Sl(u) === 0) break e;
            case "keydown":
            case "keyup":
              J = In;
              break;
            case "focusin":
              Ce = "focus", J = lm;
              break;
            case "focusout":
              Ce = "blur", J = lm;
              break;
            case "beforeblur":
            case "afterblur":
              J = lm;
              break;
            case "click":
              if (u.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              J = tm;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              J = tg;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              J = um;
              break;
            case fg:
            case vm:
            case sg:
              J = ib;
              break;
            case Sm:
              J = ig;
              break;
            case "scroll":
            case "scrollend":
              J = Pp;
              break;
            case "wheel":
              J = Fi;
              break;
            case "copy":
            case "cut":
            case "paste":
              J = _r;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              J = qr;
              break;
            case "toggle":
            case "beforetoggle":
              J = cg;
          }
          var He = (a & 4) !== 0, dt = !He && (l === "scroll" || l === "scrollend"), L = He ? X !== null ? X + "Capture" : null : X;
          He = [];
          for (var _ = V, j; _ !== null; ) {
            var ne = _;
            if (j = ne.stateNode, ne = ne.tag, ne !== 5 && ne !== 26 && ne !== 27 || j === null || L === null || (ne = Ji(_, L), ne != null && He.push(
              Cu(_, ne, j)
            )), dt) break;
            _ = _.return;
          }
          0 < He.length && (X = new J(
            X,
            Ce,
            null,
            u,
            le
          ), ae.push({ event: X, listeners: He }));
        }
      }
      if ((a & 7) === 0) {
        e: {
          if (X = l === "mouseover" || l === "pointerover", J = l === "mouseout" || l === "pointerout", X && u !== Ki && (Ce = u.relatedTarget || u.fromElement) && (bl(Ce) || Ce[uo]))
            break e;
          if ((J || X) && (X = le.window === le ? le : (X = le.ownerDocument) ? X.defaultView || X.parentWindow : window, J ? (Ce = u.relatedTarget || u.toElement, J = V, Ce = Ce ? bl(Ce) : null, Ce !== null && (dt = B(Ce), He = Ce.tag, Ce !== dt || He !== 5 && He !== 27 && He !== 6) && (Ce = null)) : (J = null, Ce = V), J !== Ce)) {
            if (He = tm, ne = "onMouseLeave", L = "onMouseEnter", _ = "mouse", (l === "pointerout" || l === "pointerover") && (He = qr, ne = "onPointerLeave", L = "onPointerEnter", _ = "pointer"), dt = J == null ? X : Mr(J), j = Ce == null ? X : Mr(Ce), X = new He(
              ne,
              _ + "leave",
              J,
              u,
              le
            ), X.target = dt, X.relatedTarget = j, ne = null, bl(le) === V && (He = new He(
              L,
              _ + "enter",
              Ce,
              u,
              le
            ), He.target = j, He.relatedTarget = dt, ne = He), dt = ne, J && Ce)
              t: {
                for (He = J, L = Ce, _ = 0, j = He; j; j = Oi(j))
                  _++;
                for (j = 0, ne = L; ne; ne = Oi(ne))
                  j++;
                for (; 0 < _ - j; )
                  He = Oi(He), _--;
                for (; 0 < j - _; )
                  L = Oi(L), j--;
                for (; _--; ) {
                  if (He === L || L !== null && He === L.alternate)
                    break t;
                  He = Oi(He), L = Oi(L);
                }
                He = null;
              }
            else He = null;
            J !== null && Bf(
              ae,
              X,
              J,
              He,
              !1
            ), Ce !== null && dt !== null && Bf(
              ae,
              dt,
              Ce,
              He,
              !0
            );
          }
        }
        e: {
          if (X = V ? Mr(V) : window, J = X.nodeName && X.nodeName.toLowerCase(), J === "select" || J === "input" && X.type === "file")
            var be = sm;
          else if (Bs(X))
            if (dm)
              be = ym;
            else {
              be = ti;
              var $e = ws;
            }
          else
            J = X.nodeName, !J || J.toLowerCase() !== "input" || X.type !== "checkbox" && X.type !== "radio" ? V && Zi(V.elementType) && (be = sm) : be = pu;
          if (be && (be = be(l, V))) {
            Ns(
              ae,
              be,
              u,
              le
            );
            break e;
          }
          $e && $e(l, X, V), l === "focusout" && V && X.type === "number" && V.memoizedProps.value != null && Cr(X, "number", X.value);
        }
        switch ($e = V ? Mr(V) : window, l) {
          case "focusin":
            (Bs($e) || $e.contentEditable === "true") && (Ta = $e, ta = V, ai = null);
            break;
          case "focusout":
            ai = ta = Ta = null;
            break;
          case "mousedown":
            lc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            lc = !1, _s(ae, u, le);
            break;
          case "selectionchange":
            if (tc) break;
          case "keydown":
          case "keyup":
            _s(ae, u, le);
        }
        var xe;
        if (Lr)
          e: {
            switch (l) {
              case "compositionstart":
                var we = "onCompositionStart";
                break e;
              case "compositionend":
                we = "onCompositionEnd";
                break e;
              case "compositionupdate":
                we = "onCompositionUpdate";
                break e;
            }
            we = void 0;
          }
        else
          ei ? jr(l, u) && (we = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (we = "onCompositionStart");
        we && (ba && u.locale !== "ko" && (ei || we !== "onCompositionStart" ? we === "onCompositionEnd" && ei && (xe = Ph()) : (mu = le, so = "value" in mu ? mu.value : mu.textContent, ei = !0)), $e = $o(V, we), 0 < $e.length && (we = new nm(
          we,
          l,
          null,
          u,
          le
        ), ae.push({ event: we, listeners: $e }), xe ? we.data = xe : (xe = Pu(u), xe !== null && (we.data = xe)))), (xe = cm ? rm(l, u) : Ii(l, u)) && (we = $o(V, "onBeforeInput"), 0 < we.length && ($e = new nm(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          le
        ), ae.push({
          event: $e,
          listeners: we
        }), $e.data = xe)), Vg(
          ae,
          l,
          V,
          u,
          le
        );
      }
      zc(ae, a);
    });
  }
  function Cu(l, a, u) {
    return {
      instance: l,
      listener: a,
      currentTarget: u
    };
  }
  function $o(l, a) {
    for (var u = a + "Capture", c = []; l !== null; ) {
      var f = l, s = f.stateNode;
      if (f = f.tag, f !== 5 && f !== 26 && f !== 27 || s === null || (f = Ji(l, u), f != null && c.unshift(
        Cu(l, f, s)
      ), f = Ji(l, a), f != null && c.push(
        Cu(l, f, s)
      )), l.tag === 3) return c;
      l = l.return;
    }
    return [];
  }
  function Oi(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Bf(l, a, u, c, f) {
    for (var s = a._reactName, p = []; u !== null && u !== c; ) {
      var b = u, D = b.alternate, V = b.stateNode;
      if (b = b.tag, D !== null && D === c) break;
      b !== 5 && b !== 26 && b !== 27 || V === null || (D = V, f ? (V = Ji(u, s), V != null && p.unshift(
        Cu(u, V, D)
      )) : f || (V = Ji(u, s), V != null && p.push(
        Cu(u, V, D)
      ))), u = u.return;
    }
    p.length !== 0 && l.push({ event: a, listeners: p });
  }
  var Rn = /\r\n?/g, wy = /\u0000|\uFFFD/g;
  function Gg(l) {
    return (typeof l == "string" ? l : "" + l).replace(Rn, `
`).replace(wy, "");
  }
  function _y(l, a) {
    return a = Gg(a), Gg(l) === a;
  }
  function kd() {
  }
  function Le(l, a, u, c, f, s) {
    switch (u) {
      case "children":
        typeof c == "string" ? a === "body" || a === "textarea" && c === "" || co(l, c) : (typeof c == "number" || typeof c == "bigint") && a !== "body" && co(l, "" + c);
        break;
      case "className":
        xr(l, "class", c);
        break;
      case "tabIndex":
        xr(l, "tabindex", c);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        xr(l, u, c);
        break;
      case "style":
        Hr(l, c, s);
        break;
      case "data":
        if (a !== "object") {
          xr(l, "data", c);
          break;
        }
      case "src":
      case "href":
        if (c === "" && (a !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (c == null || typeof c == "function" || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = Br("" + c), l.setAttribute(u, c);
        break;
      case "action":
      case "formAction":
        if (typeof c == "function") {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof s == "function" && (u === "formAction" ? (a !== "input" && Le(l, a, "name", f.name, f, null), Le(
            l,
            a,
            "formEncType",
            f.formEncType,
            f,
            null
          ), Le(
            l,
            a,
            "formMethod",
            f.formMethod,
            f,
            null
          ), Le(
            l,
            a,
            "formTarget",
            f.formTarget,
            f,
            null
          )) : (Le(l, a, "encType", f.encType, f, null), Le(l, a, "method", f.method, f, null), Le(l, a, "target", f.target, f, null)));
        if (c == null || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = Br("" + c), l.setAttribute(u, c);
        break;
      case "onClick":
        c != null && (l.onclick = kd);
        break;
      case "onScroll":
        c != null && Ve("scroll", l);
        break;
      case "onScrollEnd":
        c != null && Ve("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(v(61));
          if (u = c.__html, u != null) {
            if (f.children != null) throw Error(v(60));
            l.innerHTML = u;
          }
        }
        break;
      case "multiple":
        l.multiple = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "muted":
        l.muted = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (c == null || typeof c == "function" || typeof c == "boolean" || typeof c == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        u = Br("" + c), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          u
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "" + c) : l.removeAttribute(u);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        c && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        c === !0 ? l.setAttribute(u, "") : c !== !1 && c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        c != null && typeof c != "function" && typeof c != "symbol" && !isNaN(c) && 1 <= c ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        c == null || typeof c == "function" || typeof c == "symbol" || isNaN(c) ? l.removeAttribute(u) : l.setAttribute(u, c);
        break;
      case "popover":
        Ve("beforetoggle", l), Ve("toggle", l), du(l, "popover", c);
        break;
      case "xlinkActuate":
        ga(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          c
        );
        break;
      case "xlinkArcrole":
        ga(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          c
        );
        break;
      case "xlinkRole":
        ga(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          c
        );
        break;
      case "xlinkShow":
        ga(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          c
        );
        break;
      case "xlinkTitle":
        ga(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          c
        );
        break;
      case "xlinkType":
        ga(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          c
        );
        break;
      case "xmlBase":
        ga(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          c
        );
        break;
      case "xmlLang":
        ga(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          c
        );
        break;
      case "xmlSpace":
        ga(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          c
        );
        break;
      case "is":
        du(l, "is", c);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = nb.get(u) || u, du(l, u, c));
    }
  }
  function $(l, a, u, c, f, s) {
    switch (u) {
      case "style":
        Hr(l, c, s);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(v(61));
          if (u = c.__html, u != null) {
            if (f.children != null) throw Error(v(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof c == "string" ? co(l, c) : (typeof c == "number" || typeof c == "bigint") && co(l, "" + c);
        break;
      case "onScroll":
        c != null && Ve("scroll", l);
        break;
      case "onScrollEnd":
        c != null && Ve("scrollend", l);
        break;
      case "onClick":
        c != null && (l.onclick = kd);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!pn.hasOwnProperty(u))
          e: {
            if (u[0] === "o" && u[1] === "n" && (f = u.endsWith("Capture"), a = u.slice(2, f ? u.length - 7 : void 0), s = l[Vl] || null, s = s != null ? s[u] : null, typeof s == "function" && l.removeEventListener(a, s, f), typeof c == "function")) {
              typeof s != "function" && s !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(a, c, f);
              break e;
            }
            u in l ? l[u] = c : c === !0 ? l.setAttribute(u, "") : du(l, u, c);
          }
    }
  }
  function _e(l, a, u) {
    switch (a) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Ve("error", l), Ve("load", l);
        var c = !1, f = !1, s;
        for (s in u)
          if (u.hasOwnProperty(s)) {
            var p = u[s];
            if (p != null)
              switch (s) {
                case "src":
                  c = !0;
                  break;
                case "srcSet":
                  f = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(v(137, a));
                default:
                  Le(l, a, s, p, u, null);
              }
          }
        f && Le(l, a, "srcSet", u.srcSet, u, null), c && Le(l, a, "src", u.src, u, null);
        return;
      case "input":
        Ve("invalid", l);
        var b = s = p = f = null, D = null, V = null;
        for (c in u)
          if (u.hasOwnProperty(c)) {
            var le = u[c];
            if (le != null)
              switch (c) {
                case "name":
                  f = le;
                  break;
                case "type":
                  p = le;
                  break;
                case "checked":
                  D = le;
                  break;
                case "defaultChecked":
                  V = le;
                  break;
                case "value":
                  s = le;
                  break;
                case "defaultValue":
                  b = le;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (le != null)
                    throw Error(v(137, a));
                  break;
                default:
                  Le(l, a, c, le, u, null);
              }
          }
        Es(
          l,
          s,
          b,
          D,
          V,
          p,
          f,
          !1
        ), Fu(l);
        return;
      case "select":
        Ve("invalid", l), c = p = s = null;
        for (f in u)
          if (u.hasOwnProperty(f) && (b = u[f], b != null))
            switch (f) {
              case "value":
                s = b;
                break;
              case "defaultValue":
                p = b;
                break;
              case "multiple":
                c = b;
              default:
                Le(l, a, f, b, u, null);
            }
        a = s, u = p, l.multiple = !!c, a != null ? Qi(l, !!c, a, !1) : u != null && Qi(l, !!c, u, !0);
        return;
      case "textarea":
        Ve("invalid", l), s = f = c = null;
        for (p in u)
          if (u.hasOwnProperty(p) && (b = u[p], b != null))
            switch (p) {
              case "value":
                c = b;
                break;
              case "defaultValue":
                f = b;
                break;
              case "children":
                s = b;
                break;
              case "dangerouslySetInnerHTML":
                if (b != null) throw Error(v(91));
                break;
              default:
                Le(l, a, p, b, u, null);
            }
        Fh(l, c, f, s), Fu(l);
        return;
      case "option":
        for (D in u)
          if (u.hasOwnProperty(D) && (c = u[D], c != null))
            switch (D) {
              case "selected":
                l.selected = c && typeof c != "function" && typeof c != "symbol";
                break;
              default:
                Le(l, a, D, c, u, null);
            }
        return;
      case "dialog":
        Ve("beforetoggle", l), Ve("toggle", l), Ve("cancel", l), Ve("close", l);
        break;
      case "iframe":
      case "object":
        Ve("load", l);
        break;
      case "video":
      case "audio":
        for (c = 0; c < Hf.length; c++)
          Ve(Hf[c], l);
        break;
      case "image":
        Ve("error", l), Ve("load", l);
        break;
      case "details":
        Ve("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        Ve("error", l), Ve("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (V in u)
          if (u.hasOwnProperty(V) && (c = u[V], c != null))
            switch (V) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(v(137, a));
              default:
                Le(l, a, V, c, u, null);
            }
        return;
      default:
        if (Zi(a)) {
          for (le in u)
            u.hasOwnProperty(le) && (c = u[le], c !== void 0 && $(
              l,
              a,
              le,
              c,
              u,
              void 0
            ));
          return;
        }
    }
    for (b in u)
      u.hasOwnProperty(b) && (c = u[b], c != null && Le(l, a, b, c, u, null));
  }
  function yb(l, a, u, c) {
    switch (a) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var f = null, s = null, p = null, b = null, D = null, V = null, le = null;
        for (J in u) {
          var ae = u[J];
          if (u.hasOwnProperty(J) && ae != null)
            switch (J) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                D = ae;
              default:
                c.hasOwnProperty(J) || Le(l, a, J, null, c, ae);
            }
        }
        for (var X in c) {
          var J = c[X];
          if (ae = u[X], c.hasOwnProperty(X) && (J != null || ae != null))
            switch (X) {
              case "type":
                s = J;
                break;
              case "name":
                f = J;
                break;
              case "checked":
                V = J;
                break;
              case "defaultChecked":
                le = J;
                break;
              case "value":
                p = J;
                break;
              case "defaultValue":
                b = J;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (J != null)
                  throw Error(v(137, a));
                break;
              default:
                J !== ae && Le(
                  l,
                  a,
                  X,
                  J,
                  c,
                  ae
                );
            }
        }
        Ts(
          l,
          p,
          b,
          D,
          V,
          le,
          s,
          f
        );
        return;
      case "select":
        J = p = b = X = null;
        for (s in u)
          if (D = u[s], u.hasOwnProperty(s) && D != null)
            switch (s) {
              case "value":
                break;
              case "multiple":
                J = D;
              default:
                c.hasOwnProperty(s) || Le(
                  l,
                  a,
                  s,
                  null,
                  c,
                  D
                );
            }
        for (f in c)
          if (s = c[f], D = u[f], c.hasOwnProperty(f) && (s != null || D != null))
            switch (f) {
              case "value":
                X = s;
                break;
              case "defaultValue":
                b = s;
                break;
              case "multiple":
                p = s;
              default:
                s !== D && Le(
                  l,
                  a,
                  f,
                  s,
                  c,
                  D
                );
            }
        a = b, u = p, c = J, X != null ? Qi(l, !!u, X, !1) : !!c != !!u && (a != null ? Qi(l, !!u, a, !0) : Qi(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        J = X = null;
        for (b in u)
          if (f = u[b], u.hasOwnProperty(b) && f != null && !c.hasOwnProperty(b))
            switch (b) {
              case "value":
                break;
              case "children":
                break;
              default:
                Le(l, a, b, null, c, f);
            }
        for (p in c)
          if (f = c[p], s = u[p], c.hasOwnProperty(p) && (f != null || s != null))
            switch (p) {
              case "value":
                X = f;
                break;
              case "defaultValue":
                J = f;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(v(91));
                break;
              default:
                f !== s && Le(l, a, p, f, c, s);
            }
        Wh(l, X, J);
        return;
      case "option":
        for (var Ce in u)
          if (X = u[Ce], u.hasOwnProperty(Ce) && X != null && !c.hasOwnProperty(Ce))
            switch (Ce) {
              case "selected":
                l.selected = !1;
                break;
              default:
                Le(
                  l,
                  a,
                  Ce,
                  null,
                  c,
                  X
                );
            }
        for (D in c)
          if (X = c[D], J = u[D], c.hasOwnProperty(D) && X !== J && (X != null || J != null))
            switch (D) {
              case "selected":
                l.selected = X && typeof X != "function" && typeof X != "symbol";
                break;
              default:
                Le(
                  l,
                  a,
                  D,
                  X,
                  c,
                  J
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var He in u)
          X = u[He], u.hasOwnProperty(He) && X != null && !c.hasOwnProperty(He) && Le(l, a, He, null, c, X);
        for (V in c)
          if (X = c[V], J = u[V], c.hasOwnProperty(V) && X !== J && (X != null || J != null))
            switch (V) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (X != null)
                  throw Error(v(137, a));
                break;
              default:
                Le(
                  l,
                  a,
                  V,
                  X,
                  c,
                  J
                );
            }
        return;
      default:
        if (Zi(a)) {
          for (var dt in u)
            X = u[dt], u.hasOwnProperty(dt) && X !== void 0 && !c.hasOwnProperty(dt) && $(
              l,
              a,
              dt,
              void 0,
              c,
              X
            );
          for (le in c)
            X = c[le], J = u[le], !c.hasOwnProperty(le) || X === J || X === void 0 && J === void 0 || $(
              l,
              a,
              le,
              X,
              c,
              J
            );
          return;
        }
    }
    for (var L in u)
      X = u[L], u.hasOwnProperty(L) && X != null && !c.hasOwnProperty(L) && Le(l, a, L, null, c, X);
    for (ae in c)
      X = c[ae], J = u[ae], !c.hasOwnProperty(ae) || X === J || X == null && J == null || Le(l, a, ae, X, c, J);
  }
  var Nf = null, wf = null;
  function Kn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Hu(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Wo(l, a) {
    if (l === 0)
      switch (a) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && a === "foreignObject" ? 0 : l;
  }
  function Za(l, a) {
    return l === "textarea" || l === "noscript" || typeof a.children == "string" || typeof a.children == "number" || typeof a.children == "bigint" || typeof a.dangerouslySetInnerHTML == "object" && a.dangerouslySetInnerHTML !== null && a.dangerouslySetInnerHTML.__html != null;
  }
  var Fo = null;
  function Bu() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Fo ? !1 : (Fo = l, !0) : (Fo = null, !1);
  }
  var $d = typeof setTimeout == "function" ? setTimeout : void 0, pb = typeof clearTimeout == "function" ? clearTimeout : void 0, Xg = typeof Promise == "function" ? Promise : void 0, gb = typeof queueMicrotask == "function" ? queueMicrotask : typeof Xg < "u" ? function(l) {
    return Xg.resolve(null).then(l).catch(Ka);
  } : $d;
  function Ka(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function Di(l) {
    return l === "head";
  }
  function Wd(l, a) {
    var u = a, c = 0, f = 0;
    do {
      var s = u.nextSibling;
      if (l.removeChild(u), s && s.nodeType === 8)
        if (u = s.data, u === "/$") {
          if (0 < c && 8 > c) {
            u = c;
            var p = l.ownerDocument;
            if (u & 1 && fn(p.documentElement), u & 2 && fn(p.body), u & 4)
              for (u = p.head, fn(u), p = u.firstChild; p; ) {
                var b = p.nextSibling, D = p.nodeName;
                p[Se] || D === "SCRIPT" || D === "STYLE" || D === "LINK" && p.rel.toLowerCase() === "stylesheet" || u.removeChild(p), p = b;
              }
          }
          if (f === 0) {
            l.removeChild(s), ka(a);
            return;
          }
          f--;
        } else
          u === "$" || u === "$?" || u === "$!" ? f++ : c = u.charCodeAt(0) - 48;
      else c = 0;
      u = s;
    } while (u);
    ka(a);
  }
  function _f(l) {
    var a = l.firstChild;
    for (a && a.nodeType === 10 && (a = a.nextSibling); a; ) {
      var u = a;
      switch (a = a.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          _f(u), Dr(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function Io(l, a, u, c) {
    for (; l.nodeType === 1; ) {
      var f = u;
      if (l.nodeName.toLowerCase() !== a.toLowerCase()) {
        if (!c && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (c) {
        if (!l[Se])
          switch (a) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (s = l.getAttribute("rel"), s === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (s !== f.rel || l.getAttribute("href") !== (f.href == null || f.href === "" ? null : f.href) || l.getAttribute("crossorigin") !== (f.crossOrigin == null ? null : f.crossOrigin) || l.getAttribute("title") !== (f.title == null ? null : f.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (s = l.getAttribute("src"), (s !== (f.src == null ? null : f.src) || l.getAttribute("type") !== (f.type == null ? null : f.type) || l.getAttribute("crossorigin") !== (f.crossOrigin == null ? null : f.crossOrigin)) && s && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (a === "input" && l.type === "hidden") {
        var s = f.name == null ? null : "" + f.name;
        if (f.type === "hidden" && l.getAttribute("name") === s)
          return l;
      } else return l;
      if (l = sa(l.nextSibling), l === null) break;
    }
    return null;
  }
  function vb(l, a, u) {
    if (a === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = sa(l.nextSibling), l === null)) return null;
    return l;
  }
  function qf(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState === "complete";
  }
  function bb(l, a) {
    var u = l.ownerDocument;
    if (l.data !== "$?" || u.readyState === "complete")
      a();
    else {
      var c = function() {
        a(), u.removeEventListener("DOMContentLoaded", c);
      };
      u.addEventListener("DOMContentLoaded", c), l._reactRetry = c;
    }
  }
  function sa(l) {
    for (; l != null; l = l.nextSibling) {
      var a = l.nodeType;
      if (a === 1 || a === 3) break;
      if (a === 8) {
        if (a = l.data, a === "$" || a === "$!" || a === "$?" || a === "F!" || a === "F")
          break;
        if (a === "/$") return null;
      }
    }
    return l;
  }
  var Mi = null;
  function Dl(l) {
    l = l.previousSibling;
    for (var a = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?") {
          if (a === 0) return l;
          a--;
        } else u === "/$" && a++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function ge(l, a, u) {
    switch (a = Kn(u), l) {
      case "html":
        if (l = a.documentElement, !l) throw Error(v(452));
        return l;
      case "head":
        if (l = a.head, !l) throw Error(v(453));
        return l;
      case "body":
        if (l = a.body, !l) throw Error(v(454));
        return l;
      default:
        throw Error(v(451));
    }
  }
  function fn(l) {
    for (var a = l.attributes; a.length; )
      l.removeAttributeNode(a[0]);
    Dr(l);
  }
  var Kt = /* @__PURE__ */ new Map(), _l = /* @__PURE__ */ new Set();
  function Fd(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var Nu = I.d;
  I.d = {
    f: Id,
    r: Pd,
    D: wu,
    C: eh,
    L: zi,
    m: ql,
    X: xi,
    S: sn,
    M: qy
  };
  function Id() {
    var l = Nu.f(), a = Rc();
    return l || a;
  }
  function Pd(l) {
    var a = ji(l);
    a !== null && a.tag === 5 && a.type === "form" ? Uo(a) : Nu.r(l);
  }
  var Ml = typeof document > "u" ? null : document;
  function da(l, a, u) {
    var c = Ml;
    if (c && typeof a == "string" && a) {
      var f = Hn(a);
      f = 'link[rel="' + l + '"][href="' + f + '"]', typeof u == "string" && (f += '[crossorigin="' + u + '"]'), _l.has(f) || (_l.add(f), l = { rel: l, crossOrigin: u, href: a }, c.querySelector(f) === null && (a = c.createElement("link"), _e(a, "link", l), nl(a), c.head.appendChild(a)));
    }
  }
  function wu(l) {
    Nu.D(l), da("dns-prefetch", l, null);
  }
  function eh(l, a) {
    Nu.C(l, a), da("preconnect", l, a);
  }
  function zi(l, a, u) {
    Nu.L(l, a, u);
    var c = Ml;
    if (c && l && a) {
      var f = 'link[rel="preload"][as="' + Hn(a) + '"]';
      a === "image" && u && u.imageSrcSet ? (f += '[imagesrcset="' + Hn(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (f += '[imagesizes="' + Hn(
        u.imageSizes
      ) + '"]')) : f += '[href="' + Hn(l) + '"]';
      var s = f;
      switch (a) {
        case "style":
          s = Po(l);
          break;
        case "script":
          s = Jn(l);
      }
      Kt.has(s) || (l = O(
        {
          rel: "preload",
          href: a === "image" && u && u.imageSrcSet ? void 0 : l,
          as: a
        },
        u
      ), Kt.set(s, l), c.querySelector(f) !== null || a === "style" && c.querySelector(er(s)) || a === "script" && c.querySelector(xc(s)) || (a = c.createElement("link"), _e(a, "link", l), nl(a), c.head.appendChild(a)));
    }
  }
  function ql(l, a) {
    Nu.m(l, a);
    var u = Ml;
    if (u && l) {
      var c = a && typeof a.as == "string" ? a.as : "script", f = 'link[rel="modulepreload"][as="' + Hn(c) + '"][href="' + Hn(l) + '"]', s = f;
      switch (c) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          s = Jn(l);
      }
      if (!Kt.has(s) && (l = O({ rel: "modulepreload", href: l }, a), Kt.set(s, l), u.querySelector(f) === null)) {
        switch (c) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(xc(s)))
              return;
        }
        c = u.createElement("link"), _e(c, "link", l), nl(c), u.head.appendChild(c);
      }
    }
  }
  function sn(l, a, u) {
    Nu.S(l, a, u);
    var c = Ml;
    if (c && l) {
      var f = su(c).hoistableStyles, s = Po(l);
      a = a || "default";
      var p = f.get(s);
      if (!p) {
        var b = { loading: 0, preload: null };
        if (p = c.querySelector(
          er(s)
        ))
          b.loading = 5;
        else {
          l = O(
            { rel: "stylesheet", href: l, "data-precedence": a },
            u
          ), (u = Kt.get(s)) && lh(l, u);
          var D = p = c.createElement("link");
          nl(D), _e(D, "link", l), D._p = new Promise(function(V, le) {
            D.onload = V, D.onerror = le;
          }), D.addEventListener("load", function() {
            b.loading |= 1;
          }), D.addEventListener("error", function() {
            b.loading |= 2;
          }), b.loading |= 4, th(p, a, c);
        }
        p = {
          type: "stylesheet",
          instance: p,
          count: 1,
          state: b
        }, f.set(s, p);
      }
    }
  }
  function xi(l, a) {
    Nu.X(l, a);
    var u = Ml;
    if (u && l) {
      var c = su(u).hoistableScripts, f = Jn(l), s = c.get(f);
      s || (s = u.querySelector(xc(f)), s || (l = O({ src: l, async: !0 }, a), (a = Kt.get(f)) && nh(l, a), s = u.createElement("script"), nl(s), _e(s, "link", l), u.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, c.set(f, s));
    }
  }
  function qy(l, a) {
    Nu.M(l, a);
    var u = Ml;
    if (u && l) {
      var c = su(u).hoistableScripts, f = Jn(l), s = c.get(f);
      s || (s = u.querySelector(xc(f)), s || (l = O({ src: l, async: !0, type: "module" }, a), (a = Kt.get(f)) && nh(l, a), s = u.createElement("script"), nl(s), _e(s, "link", l), u.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, c.set(f, s));
    }
  }
  function Qg(l, a, u, c) {
    var f = (f = tt.current) ? Fd(f) : null;
    if (!f) throw Error(v(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (a = Po(u.href), u = su(
          f
        ).hoistableStyles, c = u.get(a), c || (c = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(a, c)), c) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = Po(u.href);
          var s = su(
            f
          ).hoistableStyles, p = s.get(l);
          if (p || (f = f.ownerDocument || f, p = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, s.set(l, p), (s = f.querySelector(
            er(l)
          )) && !s._p && (p.instance = s, p.state.loading = 5), Kt.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, Kt.set(l, u), s || Zg(
            f,
            l,
            u,
            p.state
          ))), a && c === null)
            throw Error(v(528, ""));
          return p;
        }
        if (a && c !== null)
          throw Error(v(529, ""));
        return null;
      case "script":
        return a = u.async, u = u.src, typeof u == "string" && a && typeof a != "function" && typeof a != "symbol" ? (a = Jn(u), u = su(
          f
        ).hoistableScripts, c = u.get(a), c || (c = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(a, c)), c) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(v(444, l));
    }
  }
  function Po(l) {
    return 'href="' + Hn(l) + '"';
  }
  function er(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function tr(l) {
    return O({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function Zg(l, a, u, c) {
    l.querySelector('link[rel="preload"][as="style"][' + a + "]") ? c.loading = 1 : (a = l.createElement("link"), c.preload = a, a.addEventListener("load", function() {
      return c.loading |= 1;
    }), a.addEventListener("error", function() {
      return c.loading |= 2;
    }), _e(a, "link", u), nl(a), l.head.appendChild(a));
  }
  function Jn(l) {
    return '[src="' + Hn(l) + '"]';
  }
  function xc(l) {
    return "script[async]" + l;
  }
  function Kg(l, a, u) {
    if (a.count++, a.instance === null)
      switch (a.type) {
        case "style":
          var c = l.querySelector(
            'style[data-href~="' + Hn(u.href) + '"]'
          );
          if (c)
            return a.instance = c, nl(c), c;
          var f = O({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return c = (l.ownerDocument || l).createElement(
            "style"
          ), nl(c), _e(c, "style", f), th(c, u.precedence, l), a.instance = c;
        case "stylesheet":
          f = Po(u.href);
          var s = l.querySelector(
            er(f)
          );
          if (s)
            return a.state.loading |= 4, a.instance = s, nl(s), s;
          c = tr(u), (f = Kt.get(f)) && lh(c, f), s = (l.ownerDocument || l).createElement("link"), nl(s);
          var p = s;
          return p._p = new Promise(function(b, D) {
            p.onload = b, p.onerror = D;
          }), _e(s, "link", c), a.state.loading |= 4, th(s, u.precedence, l), a.instance = s;
        case "script":
          return s = Jn(u.src), (f = l.querySelector(
            xc(s)
          )) ? (a.instance = f, nl(f), f) : (c = u, (f = Kt.get(s)) && (c = O({}, u), nh(c, f)), l = l.ownerDocument || l, f = l.createElement("script"), nl(f), _e(f, "link", c), l.head.appendChild(f), a.instance = f);
        case "void":
          return null;
        default:
          throw Error(v(443, a.type));
      }
    else
      a.type === "stylesheet" && (a.state.loading & 4) === 0 && (c = a.instance, a.state.loading |= 4, th(c, u.precedence, l));
    return a.instance;
  }
  function th(l, a, u) {
    for (var c = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), f = c.length ? c[c.length - 1] : null, s = f, p = 0; p < c.length; p++) {
      var b = c[p];
      if (b.dataset.precedence === a) s = b;
      else if (s !== f) break;
    }
    s ? s.parentNode.insertBefore(l, s.nextSibling) : (a = u.nodeType === 9 ? u.head : u, a.insertBefore(l, a.firstChild));
  }
  function lh(l, a) {
    l.crossOrigin == null && (l.crossOrigin = a.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = a.referrerPolicy), l.title == null && (l.title = a.title);
  }
  function nh(l, a) {
    l.crossOrigin == null && (l.crossOrigin = a.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = a.referrerPolicy), l.integrity == null && (l.integrity = a.integrity);
  }
  var Ui = null;
  function Ly(l, a, u) {
    if (Ui === null) {
      var c = /* @__PURE__ */ new Map(), f = Ui = /* @__PURE__ */ new Map();
      f.set(u, c);
    } else
      f = Ui, c = f.get(u), c || (c = /* @__PURE__ */ new Map(), f.set(u, c));
    if (c.has(l)) return c;
    for (c.set(l, null), u = u.getElementsByTagName(l), f = 0; f < u.length; f++) {
      var s = u[f];
      if (!(s[Se] || s[sl] || l === "link" && s.getAttribute("rel") === "stylesheet") && s.namespaceURI !== "http://www.w3.org/2000/svg") {
        var p = s.getAttribute(a) || "";
        p = l + p;
        var b = c.get(p);
        b ? b.push(s) : c.set(p, [s]);
      }
    }
    return c;
  }
  function Yy(l, a, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      a === "title" ? l.querySelector("head > title") : null
    );
  }
  function Jg(l, a, u) {
    if (u === 1 || a.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof a.precedence != "string" || typeof a.href != "string" || a.href === "")
          break;
        return !0;
      case "link":
        if (typeof a.rel != "string" || typeof a.href != "string" || a.href === "" || a.onLoad || a.onError)
          break;
        switch (a.rel) {
          case "stylesheet":
            return l = a.disabled, typeof a.precedence == "string" && l == null;
          default:
            return !0;
        }
      case "script":
        if (a.async && typeof a.async != "function" && typeof a.async != "symbol" && !a.onLoad && !a.onError && a.src && typeof a.src == "string")
          return !0;
    }
    return !1;
  }
  function jy(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  var lr = null;
  function kg() {
  }
  function $g(l, a, u) {
    if (lr === null) throw Error(v(475));
    var c = lr;
    if (a.type === "stylesheet" && (typeof u.media != "string" || matchMedia(u.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var f = Po(u.href), s = l.querySelector(
          er(f)
        );
        if (s) {
          l = s._p, l !== null && typeof l == "object" && typeof l.then == "function" && (c.count++, c = Lf.bind(c), l.then(c, c)), a.state.loading |= 4, a.instance = s, nl(s);
          return;
        }
        s = l.ownerDocument || l, u = tr(u), (f = Kt.get(f)) && lh(u, f), s = s.createElement("link"), nl(s);
        var p = s;
        p._p = new Promise(function(b, D) {
          p.onload = b, p.onerror = D;
        }), _e(s, "link", u), a.instance = s;
      }
      c.stylesheets === null && (c.stylesheets = /* @__PURE__ */ new Map()), c.stylesheets.set(a, l), (l = a.state.preload) && (a.state.loading & 3) === 0 && (c.count++, a = Lf.bind(c), l.addEventListener("load", a), l.addEventListener("error", a));
    }
  }
  function Vy() {
    if (lr === null) throw Error(v(475));
    var l = lr;
    return l.stylesheets && l.count === 0 && Yf(l, l.stylesheets), 0 < l.count ? function(a) {
      var u = setTimeout(function() {
        if (l.stylesheets && Yf(l, l.stylesheets), l.unsuspend) {
          var c = l.unsuspend;
          l.unsuspend = null, c();
        }
      }, 6e4);
      return l.unsuspend = a, function() {
        l.unsuspend = null, clearTimeout(u);
      };
    } : null;
  }
  function Lf() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Yf(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var nr = null;
  function Yf(l, a) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, nr = /* @__PURE__ */ new Map(), a.forEach(On, l), nr = null, Lf.call(l));
  }
  function On(l, a) {
    if (!(a.state.loading & 4)) {
      var u = nr.get(l);
      if (u) var c = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), nr.set(l, u);
        for (var f = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), s = 0; s < f.length; s++) {
          var p = f[s];
          (p.nodeName === "LINK" || p.getAttribute("media") !== "not all") && (u.set(p.dataset.precedence, p), c = p);
        }
        c && u.set(null, c);
      }
      f = a.instance, p = f.getAttribute("data-precedence"), s = u.get(p) || c, s === c && u.set(null, f), u.set(p, f), this.count++, c = Lf.bind(this), f.addEventListener("load", c), f.addEventListener("error", c), s ? s.parentNode.insertBefore(f, s.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(f, l.firstChild)), a.state.loading |= 4;
    }
  }
  var dn = {
    $$typeof: me,
    Provider: null,
    Consumer: null,
    _currentValue: oe,
    _currentValue2: oe,
    _threadCount: 0
  };
  function Sb(l, a, u, c, f, s, p, b) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ju(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ju(0), this.hiddenUpdates = Ju(null), this.identifierPrefix = c, this.onUncaughtError = f, this.onCaughtError = s, this.onRecoverableError = p, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = b, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Gy(l, a, u, c, f, s, p, b, D, V, le, ae) {
    return l = new Sb(
      l,
      a,
      u,
      p,
      b,
      D,
      V,
      ae
    ), a = 1, s === !0 && (a |= 24), s = en(3, null, null, a), l.current = s, s.stateNode = l, a = Oo(), a.refCount++, l.pooledCache = a, a.refCount++, s.memoizedState = {
      element: c,
      isDehydrated: u,
      cache: a
    }, ks(s), l;
  }
  function Xy(l) {
    return l ? (l = go, l) : go;
  }
  function Qy(l, a, u, c, f, s) {
    f = Xy(f), c.context === null ? c.context = f : c.pendingContext = f, c = ln(a), c.payload = { element: u }, s = s === void 0 ? null : s, s !== null && (c.callback = s), u = Ua(l, c, a), u !== null && (An(u, l, a), oc(u, l, a));
  }
  function Zy(l, a) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < a ? u : a;
    }
  }
  function ah(l, a) {
    Zy(l, a), (l = l.alternate) && Zy(l, a);
  }
  function Ky(l) {
    if (l.tag === 13) {
      var a = Ra(l, 67108864);
      a !== null && An(a, l, 67108864), ah(l, 67108864);
    }
  }
  var jf = !0;
  function Wg(l, a, u, c) {
    var f = N.T;
    N.T = null;
    var s = I.p;
    try {
      I.p = 2, Jy(l, a, u, c);
    } finally {
      I.p = s, N.T = f;
    }
  }
  function Fg(l, a, u, c) {
    var f = N.T;
    N.T = null;
    var s = I.p;
    try {
      I.p = 8, Jy(l, a, u, c);
    } finally {
      I.p = s, N.T = f;
    }
  }
  function Jy(l, a, u, c) {
    if (jf) {
      var f = uh(c);
      if (f === null)
        Zn(
          l,
          a,
          c,
          ih,
          u
        ), Uc(l, c);
      else if (Pg(
        f,
        l,
        a,
        u,
        c
      ))
        c.stopPropagation();
      else if (Uc(l, c), a & 4 && -1 < Ig.indexOf(l)) {
        for (; f !== null; ) {
          var s = ji(f);
          if (s !== null)
            switch (s.tag) {
              case 3:
                if (s = s.stateNode, s.current.memoizedState.isDehydrated) {
                  var p = yn(s.pendingLanes);
                  if (p !== 0) {
                    var b = s;
                    for (b.pendingLanes |= 2, b.entangledLanes |= 2; p; ) {
                      var D = 1 << 31 - Fl(p);
                      b.entanglements[1] |= D, p &= ~D;
                    }
                    rn(s), (yt & 6) === 0 && (_d = $t() + 500, Mf(0));
                  }
                }
                break;
              case 13:
                b = Ra(s, 2), b !== null && An(b, s, 2), Rc(), ah(s, 2);
            }
          if (s = uh(c), s === null && Zn(
            l,
            a,
            c,
            ih,
            u
          ), s === f) break;
          f = s;
        }
        f !== null && c.stopPropagation();
      } else
        Zn(
          l,
          a,
          c,
          null,
          u
        );
    }
  }
  function uh(l) {
    return l = Rs(l), ky(l);
  }
  var ih = null;
  function ky(l) {
    if (ih = null, l = bl(l), l !== null) {
      var a = B(l);
      if (a === null) l = null;
      else {
        var u = a.tag;
        if (u === 13) {
          if (l = x(a), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (a.stateNode.current.memoizedState.isDehydrated)
            return a.tag === 3 ? a.stateNode.containerInfo : null;
          l = null;
        } else a !== l && (l = null);
      }
    }
    return ih = l, null;
  }
  function $y(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Er()) {
          case Vp:
            return 2;
          case Xh:
            return 8;
          case Ar:
          case Qh:
            return 32;
          case lo:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ar = !1, Ja = null, _u = null, qu = null, Vf = /* @__PURE__ */ new Map(), Gf = /* @__PURE__ */ new Map(), Ci = [], Ig = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Uc(l, a) {
    switch (l) {
      case "focusin":
      case "focusout":
        Ja = null;
        break;
      case "dragenter":
      case "dragleave":
        _u = null;
        break;
      case "mouseover":
      case "mouseout":
        qu = null;
        break;
      case "pointerover":
      case "pointerout":
        Vf.delete(a.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Gf.delete(a.pointerId);
    }
  }
  function Cc(l, a, u, c, f, s) {
    return l === null || l.nativeEvent !== s ? (l = {
      blockedOn: a,
      domEventName: u,
      eventSystemFlags: c,
      nativeEvent: s,
      targetContainers: [f]
    }, a !== null && (a = ji(a), a !== null && Ky(a)), l) : (l.eventSystemFlags |= c, a = l.targetContainers, f !== null && a.indexOf(f) === -1 && a.push(f), l);
  }
  function Pg(l, a, u, c, f) {
    switch (a) {
      case "focusin":
        return Ja = Cc(
          Ja,
          l,
          a,
          u,
          c,
          f
        ), !0;
      case "dragenter":
        return _u = Cc(
          _u,
          l,
          a,
          u,
          c,
          f
        ), !0;
      case "mouseover":
        return qu = Cc(
          qu,
          l,
          a,
          u,
          c,
          f
        ), !0;
      case "pointerover":
        var s = f.pointerId;
        return Vf.set(
          s,
          Cc(
            Vf.get(s) || null,
            l,
            a,
            u,
            c,
            f
          )
        ), !0;
      case "gotpointercapture":
        return s = f.pointerId, Gf.set(
          s,
          Cc(
            Gf.get(s) || null,
            l,
            a,
            u,
            c,
            f
          )
        ), !0;
    }
    return !1;
  }
  function Wy(l) {
    var a = bl(l.target);
    if (a !== null) {
      var u = B(a);
      if (u !== null) {
        if (a = u.tag, a === 13) {
          if (a = x(u), a !== null) {
            l.blockedOn = a, tb(l.priority, function() {
              if (u.tag === 13) {
                var c = En();
                c = Fn(c);
                var f = Ra(u, c);
                f !== null && An(f, u, c), ah(u, c);
              }
            });
            return;
          }
        } else if (a === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Xf(l) {
    if (l.blockedOn !== null) return !1;
    for (var a = l.targetContainers; 0 < a.length; ) {
      var u = uh(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var c = new u.constructor(
          u.type,
          u
        );
        Ki = c, u.target.dispatchEvent(c), Ki = null;
      } else
        return a = ji(u), a !== null && Ky(a), l.blockedOn = u, !1;
      a.shift();
    }
    return !0;
  }
  function Qf(l, a, u) {
    Xf(l) && u.delete(a);
  }
  function ur() {
    ar = !1, Ja !== null && Xf(Ja) && (Ja = null), _u !== null && Xf(_u) && (_u = null), qu !== null && Xf(qu) && (qu = null), Vf.forEach(Qf), Gf.forEach(Qf);
  }
  function ch(l, a) {
    l.blockedOn === a && (l.blockedOn = null, ar || (ar = !0, d.unstable_scheduleCallback(
      d.unstable_NormalPriority,
      ur
    )));
  }
  var Hc = null;
  function Fy(l) {
    Hc !== l && (Hc = l, d.unstable_scheduleCallback(
      d.unstable_NormalPriority,
      function() {
        Hc === l && (Hc = null);
        for (var a = 0; a < l.length; a += 3) {
          var u = l[a], c = l[a + 1], f = l[a + 2];
          if (typeof c != "function") {
            if (ky(c || u) === null)
              continue;
            break;
          }
          var s = ji(u);
          s !== null && (l.splice(a, 3), a -= 3, md(
            s,
            {
              pending: !0,
              data: f,
              method: u.method,
              action: c
            },
            c,
            f
          ));
        }
      }
    ));
  }
  function ka(l) {
    function a(D) {
      return ch(D, l);
    }
    Ja !== null && ch(Ja, l), _u !== null && ch(_u, l), qu !== null && ch(qu, l), Vf.forEach(a), Gf.forEach(a);
    for (var u = 0; u < Ci.length; u++) {
      var c = Ci[u];
      c.blockedOn === l && (c.blockedOn = null);
    }
    for (; 0 < Ci.length && (u = Ci[0], u.blockedOn === null); )
      Wy(u), u.blockedOn === null && Ci.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (c = 0; c < u.length; c += 3) {
        var f = u[c], s = u[c + 1], p = f[Vl] || null;
        if (typeof s == "function")
          p || Fy(u);
        else if (p) {
          var b = null;
          if (s && s.hasAttribute("formAction")) {
            if (f = s, p = s[Vl] || null)
              b = p.formAction;
            else if (ky(f) !== null) continue;
          } else b = p.action;
          typeof b == "function" ? u[c + 1] = b : (u.splice(c, 3), c -= 3), Fy(u);
        }
      }
  }
  function Iy(l) {
    this._internalRoot = l;
  }
  oh.prototype.render = Iy.prototype.render = function(l) {
    var a = this._internalRoot;
    if (a === null) throw Error(v(409));
    var u = a.current, c = En();
    Qy(u, c, l, a, null, null);
  }, oh.prototype.unmount = Iy.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var a = l.containerInfo;
      Qy(l.current, 2, null, l, null, null), Rc(), a[uo] = null;
    }
  };
  function oh(l) {
    this._internalRoot = l;
  }
  oh.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var a = Zp();
      l = { blockedOn: null, target: l, priority: a };
      for (var u = 0; u < Ci.length && a !== 0 && a < Ci[u].priority; u++) ;
      Ci.splice(u, 0, l), u === 0 && Wy(l);
    }
  };
  var Py = m.version;
  if (Py !== "19.1.1")
    throw Error(
      v(
        527,
        Py,
        "19.1.1"
      )
    );
  I.findDOMNode = function(l) {
    var a = l._reactInternals;
    if (a === void 0)
      throw typeof l.render == "function" ? Error(v(188)) : (l = Object.keys(l).join(","), Error(v(268, l)));
    return l = T(a), l = l !== null ? R(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var Jl = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: N,
    reconcilerVersion: "19.1.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Zf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Zf.isDisabled && Zf.supportsFiber)
      try {
        no = Zf.inject(
          Jl
        ), jl = Zf;
      } catch {
      }
  }
  return Np.createRoot = function(l, a) {
    if (!C(l)) throw Error(v(299));
    var u = !1, c = "", f = Bo, s = Wm, p = pf, b = null;
    return a != null && (a.unstable_strictMode === !0 && (u = !0), a.identifierPrefix !== void 0 && (c = a.identifierPrefix), a.onUncaughtError !== void 0 && (f = a.onUncaughtError), a.onCaughtError !== void 0 && (s = a.onCaughtError), a.onRecoverableError !== void 0 && (p = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (b = a.unstable_transitionCallbacks)), a = Gy(
      l,
      1,
      !1,
      null,
      null,
      u,
      c,
      f,
      s,
      p,
      b,
      null
    ), l[uo] = a.current, Ny(l), new Iy(a);
  }, Np.hydrateRoot = function(l, a, u) {
    if (!C(l)) throw Error(v(299));
    var c = !1, f = "", s = Bo, p = Wm, b = pf, D = null, V = null;
    return u != null && (u.unstable_strictMode === !0 && (c = !0), u.identifierPrefix !== void 0 && (f = u.identifierPrefix), u.onUncaughtError !== void 0 && (s = u.onUncaughtError), u.onCaughtError !== void 0 && (p = u.onCaughtError), u.onRecoverableError !== void 0 && (b = u.onRecoverableError), u.unstable_transitionCallbacks !== void 0 && (D = u.unstable_transitionCallbacks), u.formState !== void 0 && (V = u.formState)), a = Gy(
      l,
      1,
      !0,
      a,
      u ?? null,
      c,
      f,
      s,
      p,
      b,
      D,
      V
    ), a.context = Xy(null), u = a.current, c = En(), c = Fn(c), f = ln(c), f.callback = null, Ua(u, f, c), u = c, a.current.lanes = u, Yi(a, u), rn(a), l[uo] = a.current, Ny(l), new oh(a);
  }, Np.version = "19.1.1", Np;
}
var wp = {};
/**
 * @license React
 * react-dom-client.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eT;
function OA() {
  return eT || (eT = 1, process.env.NODE_ENV !== "production" && (function() {
    function d(e, t) {
      for (e = e.memoizedState; e !== null && 0 < t; )
        e = e.next, t--;
      return e;
    }
    function m(e, t, n, i) {
      if (n >= t.length) return i;
      var o = t[n], r = Le(e) ? e.slice() : Ke({}, e);
      return r[o] = m(e[o], t, n + 1, i), r;
    }
    function g(e, t, n) {
      if (t.length !== n.length)
        console.warn("copyWithRename() expects paths of the same length");
      else {
        for (var i = 0; i < n.length - 1; i++)
          if (t[i] !== n[i]) {
            console.warn(
              "copyWithRename() expects paths to be the same except for the deepest key"
            );
            return;
          }
        return v(e, t, n, 0);
      }
    }
    function v(e, t, n, i) {
      var o = t[i], r = Le(e) ? e.slice() : Ke({}, e);
      return i + 1 === t.length ? (r[n[i]] = r[o], Le(r) ? r.splice(o, 1) : delete r[o]) : r[o] = v(
        e[o],
        t,
        n,
        i + 1
      ), r;
    }
    function C(e, t, n) {
      var i = t[n], o = Le(e) ? e.slice() : Ke({}, e);
      return n + 1 === t.length ? (Le(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = C(e[i], t, n + 1), o);
    }
    function B() {
      return !1;
    }
    function x() {
      return null;
    }
    function q() {
    }
    function T() {
      console.error(
        "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
      );
    }
    function R() {
      console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      );
    }
    function O() {
    }
    function A(e) {
      var t = [];
      return e.forEach(function(n) {
        t.push(n);
      }), t.sort().join(", ");
    }
    function U(e, t, n, i) {
      return new Yr(e, t, n, i);
    }
    function K(e, t) {
      e.context === ir && (vt(e.current, 2, t, e, null, null), vc());
    }
    function ue(e, t) {
      if (Wa !== null) {
        var n = t.staleFamilies;
        t = t.updatedFamilies, No(), Lr(
          e.current,
          t,
          n
        ), vc();
      }
    }
    function te(e) {
      Wa = e;
    }
    function ie(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function H(e) {
      var t = e, n = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do
          t = e, (t.flags & 4098) !== 0 && (n = t.return), e = t.return;
        while (e);
      }
      return t.tag === 3 ? n : null;
    }
    function de(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function me(e) {
      if (H(e) !== e)
        throw Error("Unable to find node on an unmounted component.");
    }
    function ye(e) {
      var t = e.alternate;
      if (!t) {
        if (t = H(e), t === null)
          throw Error("Unable to find node on an unmounted component.");
        return t !== e ? null : e;
      }
      for (var n = e, i = t; ; ) {
        var o = n.return;
        if (o === null) break;
        var r = o.alternate;
        if (r === null) {
          if (i = o.return, i !== null) {
            n = i;
            continue;
          }
          break;
        }
        if (o.child === r.child) {
          for (r = o.child; r; ) {
            if (r === n) return me(o), e;
            if (r === i) return me(o), t;
            r = r.sibling;
          }
          throw Error("Unable to find node on an unmounted component.");
        }
        if (n.return !== i.return) n = o, i = r;
        else {
          for (var h = !1, y = o.child; y; ) {
            if (y === n) {
              h = !0, n = o, i = r;
              break;
            }
            if (y === i) {
              h = !0, i = o, n = r;
              break;
            }
            y = y.sibling;
          }
          if (!h) {
            for (y = r.child; y; ) {
              if (y === n) {
                h = !0, n = r, i = o;
                break;
              }
              if (y === i) {
                h = !0, i = r, n = o;
                break;
              }
              y = y.sibling;
            }
            if (!h)
              throw Error(
                "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue."
              );
          }
        }
        if (n.alternate !== i)
          throw Error(
            "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."
          );
      }
      if (n.tag !== 3)
        throw Error("Unable to find node on an unmounted component.");
      return n.stateNode.current === n ? e : t;
    }
    function Re(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (t = Re(e), t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    function k(e) {
      return e === null || typeof e != "object" ? null : (e = _y && e[_y] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    function Q(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === kd ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case Ve:
          return "Fragment";
        case ko:
          return "Profiler";
        case Jo:
          return "StrictMode";
        case $o:
          return "Suspense";
        case Oi:
          return "SuspenseList";
        case wy:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case zc:
            return "Portal";
          case Zn:
            return (e.displayName || "Context") + ".Provider";
          case Jd:
            return (e._context.displayName || "Context") + ".Consumer";
          case Cu:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Bf:
            return t = e.displayName || null, t !== null ? t : Q(e.type) || "Memo";
          case Rn:
            t = e._payload, e = e._init;
            try {
              return Q(e(t));
            } catch {
            }
        }
      return null;
    }
    function ce(e) {
      return typeof e.tag == "number" ? se(e) : typeof e.name == "string" ? e.name : null;
    }
    function se(e) {
      var t = e.type;
      switch (e.tag) {
        case 31:
          return "Activity";
        case 24:
          return "Cache";
        case 9:
          return (t._context.displayName || "Context") + ".Consumer";
        case 10:
          return (t.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 26:
        case 27:
        case 5:
          return t;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return Q(t);
        case 8:
          return t === Jo ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 14:
        case 15:
          if (typeof t == "function")
            return t.displayName || t.name || null;
          if (typeof t == "string") return t;
          break;
        case 29:
          if (t = e._debugInfo, t != null) {
            for (var n = t.length - 1; 0 <= n; n--)
              if (typeof t[n].name == "string") return t[n].name;
          }
          if (e.return !== null)
            return se(e.return);
      }
      return null;
    }
    function Me(e) {
      return { current: e };
    }
    function Oe(e, t) {
      0 > Kn ? console.error("Unexpected pop.") : (t !== wf[Kn] && console.error("Unexpected Fiber popped."), e.current = Nf[Kn], Nf[Kn] = null, wf[Kn] = null, Kn--);
    }
    function ve(e, t, n) {
      Kn++, Nf[Kn] = e.current, wf[Kn] = n, e.current = t;
    }
    function fe(e) {
      return e === null && console.error(
        "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."
      ), e;
    }
    function De(e, t) {
      ve(Za, t, e), ve(Wo, e, e), ve(Hu, null, e);
      var n = t.nodeType;
      switch (n) {
        case 9:
        case 11:
          n = n === 9 ? "#document" : "#fragment", t = (t = t.documentElement) && (t = t.namespaceURI) ? pt(t) : Gc;
          break;
        default:
          if (n = t.tagName, t = t.namespaceURI)
            t = pt(t), t = cn(
              t,
              n
            );
          else
            switch (n) {
              case "svg":
                t = _h;
                break;
              case "math":
                t = xv;
                break;
              default:
                t = Gc;
            }
      }
      n = n.toLowerCase(), n = Wh(null, n), n = {
        context: t,
        ancestorInfo: n
      }, Oe(Hu, e), ve(Hu, n, e);
    }
    function ot(e) {
      Oe(Hu, e), Oe(Wo, e), Oe(Za, e);
    }
    function N() {
      return fe(Hu.current);
    }
    function I(e) {
      e.memoizedState !== null && ve(Fo, e, e);
      var t = fe(Hu.current), n = e.type, i = cn(t.context, n);
      n = Wh(t.ancestorInfo, n), i = { context: i, ancestorInfo: n }, t !== i && (ve(Wo, e, e), ve(Hu, i, e));
    }
    function oe(e) {
      Wo.current === e && (Oe(Hu, e), Oe(Wo, e)), Fo.current === e && (Oe(Fo, e), Cp._currentValue = rs);
    }
    function Ue(e) {
      return typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
    }
    function Be(e) {
      try {
        return gt(e), !1;
      } catch {
        return !0;
      }
    }
    function gt(e) {
      return "" + e;
    }
    function ze(e, t) {
      if (Be(e))
        return console.error(
          "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          Ue(e)
        ), gt(e);
    }
    function Je(e, t) {
      if (Be(e))
        return console.error(
          "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          Ue(e)
        ), gt(e);
    }
    function it(e) {
      if (Be(e))
        return console.error(
          "Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",
          Ue(e)
        ), gt(e);
    }
    function tl(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled) return !0;
      if (!t.supportsFiber)
        return console.error(
          "The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"
        ), !0;
      try {
        Mi = t.inject(e), Dl = t;
      } catch (n) {
        console.error("React instrumentation encountered an error: %s.", n);
      }
      return !!t.checkDCE;
    }
    function tt(e) {
      if (typeof bb == "function" && sa(e), Dl && typeof Dl.setStrictMode == "function")
        try {
          Dl.setStrictMode(Mi, e);
        } catch (t) {
          fn || (fn = !0, console.error(
            "React instrumentation encountered an error: %s",
            t
          ));
        }
    }
    function Qu(e) {
      ge = e;
    }
    function ou() {
      ge !== null && typeof ge.markCommitStopped == "function" && ge.markCommitStopped();
    }
    function Y(e) {
      ge !== null && typeof ge.markComponentRenderStarted == "function" && ge.markComponentRenderStarted(e);
    }
    function Ae() {
      ge !== null && typeof ge.markComponentRenderStopped == "function" && ge.markComponentRenderStopped();
    }
    function he(e) {
      ge !== null && typeof ge.markRenderStarted == "function" && ge.markRenderStarted(e);
    }
    function nt() {
      ge !== null && typeof ge.markRenderStopped == "function" && ge.markRenderStopped();
    }
    function Ze(e, t) {
      ge !== null && typeof ge.markStateUpdateScheduled == "function" && ge.markStateUpdateScheduled(e, t);
    }
    function Lt(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (Fd(e) / Nu | 0) | 0;
    }
    function Cl(e) {
      if (e & 1) return "SyncHydrationLane";
      if (e & 2) return "Sync";
      if (e & 4) return "InputContinuousHydration";
      if (e & 8) return "InputContinuous";
      if (e & 16) return "DefaultHydration";
      if (e & 32) return "Default";
      if (e & 128) return "TransitionHydration";
      if (e & 4194048) return "Transition";
      if (e & 62914560) return "Retry";
      if (e & 67108864) return "SelectiveHydration";
      if (e & 134217728) return "IdleHydration";
      if (e & 268435456) return "Idle";
      if (e & 536870912) return "Offscreen";
      if (e & 1073741824) return "Deferred";
    }
    function kt(e) {
      var t = e & 42;
      if (t !== 0) return t;
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 4194048;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), e;
      }
    }
    function $t(e, t, n) {
      var i = e.pendingLanes;
      if (i === 0) return 0;
      var o = 0, r = e.suspendedLanes, h = e.pingedLanes;
      e = e.warmLanes;
      var y = i & 134217727;
      return y !== 0 ? (i = y & ~r, i !== 0 ? o = kt(i) : (h &= y, h !== 0 ? o = kt(h) : n || (n = y & ~e, n !== 0 && (o = kt(n))))) : (y = i & ~r, y !== 0 ? o = kt(y) : h !== 0 ? o = kt(h) : n || (n = i & ~e, n !== 0 && (o = kt(n)))), o === 0 ? 0 : t !== 0 && t !== o && (t & r) === 0 && (r = o & -o, n = t & -t, r >= n || r === 32 && (n & 4194048) !== 0) ? t : o;
    }
    function Er(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function Vp(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), -1;
      }
    }
    function Xh() {
      var e = Id;
      return Id <<= 1, (Id & 4194048) === 0 && (Id = 256), e;
    }
    function Ar() {
      var e = Pd;
      return Pd <<= 1, (Pd & 62914560) === 0 && (Pd = 4194304), e;
    }
    function Qh(e) {
      for (var t = [], n = 0; 31 > n; n++) t.push(e);
      return t;
    }
    function lo(e, t) {
      e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
    }
    function Pv(e, t, n, i, o, r) {
      var h = e.pendingLanes;
      e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
      var y = e.entanglements, S = e.expirationTimes, E = e.hiddenUpdates;
      for (n = h & ~n; 0 < n; ) {
        var Z = 31 - _l(n), F = 1 << Z;
        y[Z] = 0, S[Z] = -1;
        var G = E[Z];
        if (G !== null)
          for (E[Z] = null, Z = 0; Z < G.length; Z++) {
            var P = G[Z];
            P !== null && (P.lane &= -536870913);
          }
        n &= ~F;
      }
      i !== 0 && Gp(e, i, 0), r !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= r & ~(h & ~t));
    }
    function Gp(e, t, n) {
      e.pendingLanes |= t, e.suspendedLanes &= ~t;
      var i = 31 - _l(t);
      e.entangledLanes |= t, e.entanglements[i] = e.entanglements[i] | 1073741824 | n & 4194090;
    }
    function no(e, t) {
      var n = e.entangledLanes |= t;
      for (e = e.entanglements; n; ) {
        var i = 31 - _l(n), o = 1 << i;
        o & t | e[i] & t && (e[i] |= t), n &= ~o;
      }
    }
    function jl(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function ru(e, t, n) {
      if (Kt)
        for (e = e.pendingUpdatersLaneMap; 0 < n; ) {
          var i = 31 - _l(n), o = 1 << i;
          e[i].add(t), n &= ~o;
        }
    }
    function Fl(e, t) {
      if (Kt)
        for (var n = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; 0 < t; ) {
          var o = 31 - _l(t);
          e = 1 << o, o = n[o], 0 < o.size && (o.forEach(function(r) {
            var h = r.alternate;
            h !== null && i.has(h) || i.add(r);
          }), o.clear()), t &= ~e;
        }
    }
    function Zh(e) {
      return e &= -e, Ml < e ? da < e ? (e & 134217727) !== 0 ? wu : eh : da : Ml;
    }
    function Xp() {
      var e = _e.p;
      return e !== 0 ? e : (e = window.event, e === void 0 ? wu : Zd(e.type));
    }
    function eb(e, t) {
      var n = _e.p;
      try {
        return _e.p = e, t();
      } finally {
        _e.p = n;
      }
    }
    function ao(e) {
      delete e[ql], delete e[sn], delete e[qy], delete e[Qg], delete e[Po];
    }
    function fu(e) {
      var t = e[ql];
      if (t) return t;
      for (var n = e.parentNode; n; ) {
        if (t = n[xi] || n[ql]) {
          if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
            for (e = Xo(e); e !== null; ) {
              if (n = e[ql])
                return n;
              e = Xo(e);
            }
          return t;
        }
        e = n, n = e.parentNode;
      }
      return null;
    }
    function yn(e) {
      if (e = e[ql] || e[xi]) {
        var t = e.tag;
        if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
          return e;
      }
      return null;
    }
    function Zu(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6)
        return e.stateNode;
      throw Error("getNodeFromInstance: Invalid argument.");
    }
    function pa(e) {
      var t = e[er];
      return t || (t = e[er] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
    }
    function fl(e) {
      e[tr] = !0;
    }
    function Ku(e, t) {
      Li(e, t), Li(e + "Capture", t);
    }
    function Li(e, t) {
      Jn[e] && console.error(
        "EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",
        e
      ), Jn[e] = t;
      var n = e.toLowerCase();
      for (xc[n] = e, e === "onDoubleClick" && (xc.ondblclick = e), e = 0; e < t.length; e++)
        Zg.add(t[e]);
    }
    function Ju(e, t) {
      Kg[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || console.error(
        e === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
      ), t.onChange || t.readOnly || t.disabled || t.checked == null || console.error(
        "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
      );
    }
    function Yi(e) {
      return Bu.call(nh, e) ? !0 : Bu.call(lh, e) ? !1 : th.test(e) ? nh[e] = !0 : (lh[e] = !0, console.error("Invalid attribute name: `%s`", e), !1);
    }
    function Qp(e, t, n) {
      if (Yi(t)) {
        if (!e.hasAttribute(t)) {
          switch (typeof n) {
            case "symbol":
            case "object":
              return n;
            case "function":
              return n;
            case "boolean":
              if (n === !1) return n;
          }
          return n === void 0 ? void 0 : null;
        }
        return e = e.getAttribute(t), e === "" && n === !0 ? !0 : (ze(n, t), e === "" + n ? n : e);
      }
    }
    function Rr(e, t, n) {
      if (Yi(t))
        if (n === null) e.removeAttribute(t);
        else {
          switch (typeof n) {
            case "undefined":
            case "function":
            case "symbol":
              e.removeAttribute(t);
              return;
            case "boolean":
              var i = t.toLowerCase().slice(0, 5);
              if (i !== "data-" && i !== "aria-") {
                e.removeAttribute(t);
                return;
              }
          }
          ze(n, t), e.setAttribute(t, "" + n);
        }
    }
    function Or(e, t, n) {
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(t);
            return;
        }
        ze(n, t), e.setAttribute(t, "" + n);
      }
    }
    function Fn(e, t, n, i) {
      if (i === null) e.removeAttribute(n);
      else {
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(n);
            return;
        }
        ze(i, n), e.setAttributeNS(t, n, "" + i);
      }
    }
    function ps() {
    }
    function Zp() {
      if (Ui === 0) {
        Ly = console.log, Yy = console.info, Jg = console.warn, jy = console.error, lr = console.group, kg = console.groupCollapsed, $g = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: ps,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      Ui++;
    }
    function tb() {
      if (Ui--, Ui === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: Ke({}, e, { value: Ly }),
          info: Ke({}, e, { value: Yy }),
          warn: Ke({}, e, { value: Jg }),
          error: Ke({}, e, { value: jy }),
          group: Ke({}, e, { value: lr }),
          groupCollapsed: Ke({}, e, { value: kg }),
          groupEnd: Ke({}, e, { value: $g })
        });
      }
      0 > Ui && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function ll(e) {
      if (Vy === void 0)
        try {
          throw Error();
        } catch (n) {
          var t = n.stack.trim().match(/\n( *(at )?)/);
          Vy = t && t[1] || "", Lf = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + Vy + e + Lf;
    }
    function sl(e, t) {
      if (!e || nr) return "";
      var n = Yf.get(e);
      if (n !== void 0) return n;
      nr = !0, n = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var i = null;
      i = $.H, $.H = null, Zp();
      try {
        var o = {
          DetermineComponentFrameRoot: function() {
            try {
              if (t) {
                var G = function() {
                  throw Error();
                };
                if (Object.defineProperty(G.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(G, []);
                  } catch (Te) {
                    var P = Te;
                  }
                  Reflect.construct(e, [], G);
                } else {
                  try {
                    G.call();
                  } catch (Te) {
                    P = Te;
                  }
                  e.call(G.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (Te) {
                  P = Te;
                }
                (G = e()) && typeof G.catch == "function" && G.catch(function() {
                });
              }
            } catch (Te) {
              if (Te && P && typeof Te.stack == "string")
                return [Te.stack, P.stack];
            }
            return [null, null];
          }
        };
        o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var r = Object.getOwnPropertyDescriptor(
          o.DetermineComponentFrameRoot,
          "name"
        );
        r && r.configurable && Object.defineProperty(
          o.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var h = o.DetermineComponentFrameRoot(), y = h[0], S = h[1];
        if (y && S) {
          var E = y.split(`
`), Z = S.split(`
`);
          for (h = r = 0; r < E.length && !E[r].includes(
            "DetermineComponentFrameRoot"
          ); )
            r++;
          for (; h < Z.length && !Z[h].includes(
            "DetermineComponentFrameRoot"
          ); )
            h++;
          if (r === E.length || h === Z.length)
            for (r = E.length - 1, h = Z.length - 1; 1 <= r && 0 <= h && E[r] !== Z[h]; )
              h--;
          for (; 1 <= r && 0 <= h; r--, h--)
            if (E[r] !== Z[h]) {
              if (r !== 1 || h !== 1)
                do
                  if (r--, h--, 0 > h || E[r] !== Z[h]) {
                    var F = `
` + E[r].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && F.includes("<anonymous>") && (F = F.replace("<anonymous>", e.displayName)), typeof e == "function" && Yf.set(e, F), F;
                  }
                while (1 <= r && 0 <= h);
              break;
            }
        }
      } finally {
        nr = !1, $.H = i, tb(), Error.prepareStackTrace = n;
      }
      return E = (E = e ? e.displayName || e.name : "") ? ll(E) : "", typeof e == "function" && Yf.set(e, E), E;
    }
    function Vl(e) {
      var t = Error.prepareStackTrace;
      if (Error.prepareStackTrace = void 0, e = e.stack, Error.prepareStackTrace = t, e.startsWith(`Error: react-stack-top-frame
`) && (e = e.slice(29)), t = e.indexOf(`
`), t !== -1 && (e = e.slice(t + 1)), t = e.indexOf("react_stack_bottom_frame"), t !== -1 && (t = e.lastIndexOf(
        `
`,
        t
      )), t !== -1)
        e = e.slice(0, t);
      else return "";
      return e;
    }
    function uo(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return ll(e.type);
        case 16:
          return ll("Lazy");
        case 13:
          return ll("Suspense");
        case 19:
          return ll("SuspenseList");
        case 0:
        case 15:
          return sl(e.type, !1);
        case 11:
          return sl(e.type.render, !1);
        case 1:
          return sl(e.type, !0);
        case 31:
          return ll("Activity");
        default:
          return "";
      }
    }
    function gs(e) {
      try {
        var t = "";
        do {
          t += uo(e);
          var n = e._debugInfo;
          if (n)
            for (var i = n.length - 1; 0 <= i; i--) {
              var o = n[i];
              if (typeof o.name == "string") {
                var r = t, h = o.env, y = ll(
                  o.name + (h ? " [" + h + "]" : "")
                );
                t = r + y;
              }
            }
          e = e.return;
        } while (e);
        return t;
      } catch (S) {
        return `
Error generating stack: ` + S.message + `
` + S.stack;
      }
    }
    function Kp(e) {
      return (e = e ? e.displayName || e.name : "") ? ll(e) : "";
    }
    function vs() {
      if (On === null) return null;
      var e = On._debugOwner;
      return e != null ? ce(e) : null;
    }
    function Jp() {
      if (On === null) return "";
      var e = On;
      try {
        var t = "";
        switch (e.tag === 6 && (e = e.return), e.tag) {
          case 26:
          case 27:
          case 5:
            t += ll(e.type);
            break;
          case 13:
            t += ll("Suspense");
            break;
          case 19:
            t += ll("SuspenseList");
            break;
          case 31:
            t += ll("Activity");
            break;
          case 30:
          case 0:
          case 15:
          case 1:
            e._debugOwner || t !== "" || (t += Kp(
              e.type
            ));
            break;
          case 11:
            e._debugOwner || t !== "" || (t += Kp(
              e.type.render
            ));
        }
        for (; e; )
          if (typeof e.tag == "number") {
            var n = e;
            e = n._debugOwner;
            var i = n._debugStack;
            e && i && (typeof i != "string" && (n._debugStack = i = Vl(i)), i !== "" && (t += `
` + i));
          } else if (e.debugStack != null) {
            var o = e.debugStack;
            (e = e.owner) && o && (t += `
` + Vl(o));
          } else break;
        var r = t;
      } catch (h) {
        r = `
Error generating stack: ` + h.message + `
` + h.stack;
      }
      return r;
    }
    function Se(e, t, n, i, o, r, h) {
      var y = On;
      Dr(e);
      try {
        return e !== null && e._debugTask ? e._debugTask.run(
          t.bind(null, n, i, o, r, h)
        ) : t(n, i, o, r, h);
      } finally {
        Dr(y);
      }
      throw Error(
        "runWithFiberInDEV should never be called in production. This is a bug in React."
      );
    }
    function Dr(e) {
      $.getCurrentStack = e === null ? null : Jp, dn = !1, On = e;
    }
    function bl(e) {
      switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return it(e), e;
        default:
          return "";
      }
    }
    function ji(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Mr(e) {
      var t = ji(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(
        e.constructor.prototype,
        t
      );
      it(e[t]);
      var i = "" + e[t];
      if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get, r = n.set;
        return Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(h) {
            it(h), i = "" + h, r.call(this, h);
          }
        }), Object.defineProperty(e, t, {
          enumerable: n.enumerable
        }), {
          getValue: function() {
            return i;
          },
          setValue: function(h) {
            it(h), i = "" + h;
          },
          stopTracking: function() {
            e._valueTracker = null, delete e[t];
          }
        };
      }
    }
    function su(e) {
      e._valueTracker || (e._valueTracker = Mr(e));
    }
    function nl(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var n = t.getValue(), i = "";
      return e && (i = ji(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== n ? (t.setValue(e), !0) : !1;
    }
    function zr(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function pn(e) {
      return e.replace(
        Sb,
        function(t) {
          return "\\" + t.charCodeAt(0).toString(16) + " ";
        }
      );
    }
    function ku(e, t) {
      t.checked === void 0 || t.defaultChecked === void 0 || Xy || (console.error(
        "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        vs() || "A component",
        t.type
      ), Xy = !0), t.value === void 0 || t.defaultValue === void 0 || Gy || (console.error(
        "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        vs() || "A component",
        t.type
      ), Gy = !0);
    }
    function $u(e, t, n, i, o, r, h, y) {
      e.name = "", h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? (ze(h, "type"), e.type = h) : e.removeAttribute("type"), t != null ? h === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + bl(t)) : e.value !== "" + bl(t) && (e.value = "" + bl(t)) : h !== "submit" && h !== "reset" || e.removeAttribute("value"), t != null ? bs(e, h, bl(t)) : n != null ? bs(e, h, bl(n)) : i != null && e.removeAttribute("value"), o == null && r != null && (e.defaultChecked = !!r), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? (ze(y, "name"), e.name = "" + bl(y)) : e.removeAttribute("name");
    }
    function kp(e, t, n, i, o, r, h, y) {
      if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (ze(r, "type"), e.type = r), t != null || n != null) {
        if (!(r !== "submit" && r !== "reset" || t != null))
          return;
        n = n != null ? "" + bl(n) : "", t = t != null ? "" + bl(t) : n, y || t === e.value || (e.value = t), e.defaultValue = t;
      }
      i = i ?? o, i = typeof i != "function" && typeof i != "symbol" && !!i, e.checked = y ? e.checked : !!i, e.defaultChecked = !!i, h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" && (ze(h, "name"), e.name = h);
    }
    function bs(e, t, n) {
      t === "number" && zr(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
    }
    function Kh(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? Cf.Children.forEach(t.children, function(n) {
        n == null || typeof n == "string" || typeof n == "number" || typeof n == "bigint" || Zy || (Zy = !0, console.error(
          "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
        ));
      }) : t.dangerouslySetInnerHTML == null || ah || (ah = !0, console.error(
        "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
      ))), t.selected == null || Qy || (console.error(
        "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
      ), Qy = !0);
    }
    function $p() {
      var e = vs();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    function du(e, t, n, i) {
      if (e = e.options, t) {
        t = {};
        for (var o = 0; o < n.length; o++)
          t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
          o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && i && (e[n].defaultSelected = !0);
      } else {
        for (n = "" + bl(n), t = null, o = 0; o < e.length; o++) {
          if (e[o].value === n) {
            e[o].selected = !0, i && (e[o].defaultSelected = !0);
            return;
          }
          t !== null || e[o].disabled || (t = e[o]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function xr(e, t) {
      for (e = 0; e < jf.length; e++) {
        var n = jf[e];
        if (t[n] != null) {
          var i = Le(t[n]);
          t.multiple && !i ? console.error(
            "The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",
            n,
            $p()
          ) : !t.multiple && i && console.error(
            "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",
            n,
            $p()
          );
        }
      }
      t.value === void 0 || t.defaultValue === void 0 || Ky || (console.error(
        "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"
      ), Ky = !0);
    }
    function ga(e, t) {
      t.value === void 0 || t.defaultValue === void 0 || Wg || (console.error(
        "%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",
        vs() || "A component"
      ), Wg = !0), t.children != null && t.value == null && console.error(
        "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
      );
    }
    function Ss(e, t, n) {
      if (t != null && (t = "" + bl(t), t !== e.value && (e.value = t), n == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = n != null ? "" + bl(n) : "";
    }
    function Jh(e, t, n, i) {
      if (t == null) {
        if (i != null) {
          if (n != null)
            throw Error(
              "If you supply `defaultValue` on a <textarea>, do not pass children."
            );
          if (Le(i)) {
            if (1 < i.length)
              throw Error("<textarea> can only have at most one child.");
            i = i[0];
          }
          n = i;
        }
        n == null && (n = ""), t = n;
      }
      n = bl(t), e.defaultValue = n, i = e.textContent, i === n && i !== "" && i !== null && (e.value = i);
    }
    function Vi(e, t) {
      return e.serverProps === void 0 && e.serverTail.length === 0 && e.children.length === 1 && 3 < e.distanceFromLeaf && e.distanceFromLeaf > 15 - t ? Vi(e.children[0], t) : e;
    }
    function Gl(e) {
      return "  " + "  ".repeat(e);
    }
    function Wu(e) {
      return "+ " + "  ".repeat(e);
    }
    function Gi(e) {
      return "- " + "  ".repeat(e);
    }
    function kh(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return e.type;
        case 16:
          return "Lazy";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 0:
        case 15:
          return e = e.type, e.displayName || e.name || null;
        case 11:
          return e = e.type.render, e.displayName || e.name || null;
        case 1:
          return e = e.type, e.displayName || e.name || null;
        default:
          return null;
      }
    }
    function Hl(e, t) {
      return Fg.test(e) ? (e = JSON.stringify(e), e.length > t - 2 ? 8 > t ? '{"..."}' : "{" + e.slice(0, t - 7) + '..."}' : "{" + e + "}") : e.length > t ? 5 > t ? '{"..."}' : e.slice(0, t - 3) + "..." : e;
    }
    function Ur(e, t, n) {
      var i = 120 - 2 * n;
      if (t === null)
        return Wu(n) + Hl(e, i) + `
`;
      if (typeof t == "string") {
        for (var o = 0; o < t.length && o < e.length && t.charCodeAt(o) === e.charCodeAt(o); o++) ;
        return o > i - 8 && 10 < o && (e = "..." + e.slice(o - 8), t = "..." + t.slice(o - 8)), Wu(n) + Hl(e, i) + `
` + Gi(n) + Hl(t, i) + `
`;
      }
      return Gl(n) + Hl(e, i) + `
`;
    }
    function $h(e) {
      return Object.prototype.toString.call(e).replace(/^\[object (.*)\]$/, function(t, n) {
        return n;
      });
    }
    function Fu(e, t) {
      switch (typeof e) {
        case "string":
          return e = JSON.stringify(e), e.length > t ? 5 > t ? '"..."' : e.slice(0, t - 4) + '..."' : e;
        case "object":
          if (e === null) return "null";
          if (Le(e)) return "[...]";
          if (e.$$typeof === Ri)
            return (t = Q(e.type)) ? "<" + t + ">" : "<...>";
          var n = $h(e);
          if (n === "Object") {
            n = "", t -= 2;
            for (var i in e)
              if (e.hasOwnProperty(i)) {
                var o = JSON.stringify(i);
                if (o !== '"' + i + '"' && (i = o), t -= i.length - 2, o = Fu(
                  e[i],
                  15 > t ? t : 15
                ), t -= o.length, 0 > t) {
                  n += n === "" ? "..." : ", ...";
                  break;
                }
                n += (n === "" ? "" : ",") + i + ":" + o;
              }
            return "{" + n + "}";
          }
          return n;
        case "function":
          return (t = e.displayName || e.name) ? "function " + t : "function";
        default:
          return String(e);
      }
    }
    function Xi(e, t) {
      return typeof e != "string" || Fg.test(e) ? "{" + Fu(e, t - 2) + "}" : e.length > t - 2 ? 5 > t ? '"..."' : '"' + e.slice(0, t - 5) + '..."' : '"' + e + '"';
    }
    function io(e, t, n) {
      var i = 120 - n.length - e.length, o = [], r;
      for (r in t)
        if (t.hasOwnProperty(r) && r !== "children") {
          var h = Xi(
            t[r],
            120 - n.length - r.length - 1
          );
          i -= r.length + h.length + 2, o.push(r + "=" + h);
        }
      return o.length === 0 ? n + "<" + e + `>
` : 0 < i ? n + "<" + e + " " + o.join(" ") + `>
` : n + "<" + e + `
` + n + "  " + o.join(`
` + n + "  ") + `
` + n + `>
`;
    }
    function lb(e, t, n) {
      var i = "", o = Ke({}, t), r;
      for (r in e)
        if (e.hasOwnProperty(r)) {
          delete o[r];
          var h = 120 - 2 * n - r.length - 2, y = Fu(e[r], h);
          t.hasOwnProperty(r) ? (h = Fu(t[r], h), i += Wu(n) + r + ": " + y + `
`, i += Gi(n) + r + ": " + h + `
`) : i += Wu(n) + r + ": " + y + `
`;
        }
      for (var S in o)
        o.hasOwnProperty(S) && (e = Fu(
          o[S],
          120 - 2 * n - S.length - 2
        ), i += Gi(n) + S + ": " + e + `
`);
      return i;
    }
    function Hn(e, t, n, i) {
      var o = "", r = /* @__PURE__ */ new Map();
      for (E in n)
        n.hasOwnProperty(E) && r.set(
          E.toLowerCase(),
          E
        );
      if (r.size === 1 && r.has("children"))
        o += io(
          e,
          t,
          Gl(i)
        );
      else {
        for (var h in t)
          if (t.hasOwnProperty(h) && h !== "children") {
            var y = 120 - 2 * (i + 1) - h.length - 1, S = r.get(h.toLowerCase());
            if (S !== void 0) {
              r.delete(h.toLowerCase());
              var E = t[h];
              S = n[S];
              var Z = Xi(
                E,
                y
              );
              y = Xi(
                S,
                y
              ), typeof E == "object" && E !== null && typeof S == "object" && S !== null && $h(E) === "Object" && $h(S) === "Object" && (2 < Object.keys(E).length || 2 < Object.keys(S).length || -1 < Z.indexOf("...") || -1 < y.indexOf("...")) ? o += Gl(i + 1) + h + `={{
` + lb(
                E,
                S,
                i + 2
              ) + Gl(i + 1) + `}}
` : (o += Wu(i + 1) + h + "=" + Z + `
`, o += Gi(i + 1) + h + "=" + y + `
`);
            } else
              o += Gl(i + 1) + h + "=" + Xi(t[h], y) + `
`;
          }
        r.forEach(function(F) {
          if (F !== "children") {
            var G = 120 - 2 * (i + 1) - F.length - 1;
            o += Gi(i + 1) + F + "=" + Xi(n[F], G) + `
`;
          }
        }), o = o === "" ? Gl(i) + "<" + e + `>
` : Gl(i) + "<" + e + `
` + o + Gl(i) + `>
`;
      }
      return e = n.children, t = t.children, typeof e == "string" || typeof e == "number" || typeof e == "bigint" ? (r = "", (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (r = "" + t), o += Ur(r, "" + e, i + 1)) : (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (o = e == null ? o + Ur("" + t, null, i + 1) : o + Ur("" + t, void 0, i + 1)), o;
    }
    function Ts(e, t) {
      var n = kh(e);
      if (n === null) {
        for (n = "", e = e.child; e; )
          n += Ts(e, t), e = e.sibling;
        return n;
      }
      return Gl(t) + "<" + n + `>
`;
    }
    function Es(e, t) {
      var n = Vi(e, t);
      if (n !== e && (e.children.length !== 1 || e.children[0] !== n))
        return Gl(t) + `...
` + Es(n, t + 1);
      n = "";
      var i = e.fiber._debugInfo;
      if (i)
        for (var o = 0; o < i.length; o++) {
          var r = i[o].name;
          typeof r == "string" && (n += Gl(t) + "<" + r + `>
`, t++);
        }
      if (i = "", o = e.fiber.pendingProps, e.fiber.tag === 6)
        i = Ur(o, e.serverProps, t), t++;
      else if (r = kh(e.fiber), r !== null)
        if (e.serverProps === void 0) {
          i = t;
          var h = 120 - 2 * i - r.length - 2, y = "";
          for (E in o)
            if (o.hasOwnProperty(E) && E !== "children") {
              var S = Xi(o[E], 15);
              if (h -= E.length + S.length + 2, 0 > h) {
                y += " ...";
                break;
              }
              y += " " + E + "=" + S;
            }
          i = Gl(i) + "<" + r + y + `>
`, t++;
        } else
          e.serverProps === null ? (i = io(
            r,
            o,
            Wu(t)
          ), t++) : typeof e.serverProps == "string" ? console.error(
            "Should not have matched a non HostText fiber to a Text node. This is a bug in React."
          ) : (i = Hn(
            r,
            o,
            e.serverProps,
            t
          ), t++);
      var E = "";
      for (o = e.fiber.child, r = 0; o && r < e.children.length; )
        h = e.children[r], h.fiber === o ? (E += Es(h, t), r++) : E += Ts(o, t), o = o.sibling;
      for (o && 0 < e.children.length && (E += Gl(t) + `...
`), o = e.serverTail, e.serverProps === null && t--, e = 0; e < o.length; e++)
        r = o[e], E = typeof r == "string" ? E + (Gi(t) + Hl(r, 120 - 2 * t) + `
`) : E + io(
          r.type,
          r.props,
          Gi(t)
        );
      return n + i + E;
    }
    function Cr(e) {
      try {
        return `

` + Es(e, 0);
      } catch {
        return "";
      }
    }
    function Qi(e, t, n) {
      for (var i = t, o = null, r = 0; i; )
        i === e && (r = 0), o = {
          fiber: i,
          children: o !== null ? [o] : [],
          serverProps: i === t ? n : i === e ? null : void 0,
          serverTail: [],
          distanceFromLeaf: r
        }, r++, i = i.return;
      return o !== null ? Cr(o).replaceAll(/^[+-]/gm, ">") : "";
    }
    function Wh(e, t) {
      var n = Ke({}, e || $y), i = { tag: t };
      return uh.indexOf(t) !== -1 && (n.aTagInScope = null, n.buttonTagInScope = null, n.nobrTagInScope = null), ih.indexOf(t) !== -1 && (n.pTagInButtonScope = null), Jy.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (n.listItemTagAutoclosing = null, n.dlItemTagAutoclosing = null), n.current = i, t === "form" && (n.formTag = i), t === "a" && (n.aTagInScope = i), t === "button" && (n.buttonTagInScope = i), t === "nobr" && (n.nobrTagInScope = i), t === "p" && (n.pTagInButtonScope = i), t === "li" && (n.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (n.dlItemTagAutoclosing = i), t === "#document" || t === "html" ? n.containerTagInScope = null : n.containerTagInScope || (n.containerTagInScope = i), e !== null || t !== "#document" && t !== "html" && t !== "body" ? n.implicitRootScope === !0 && (n.implicitRootScope = !1) : n.implicitRootScope = !0, n;
    }
    function Fh(e, t, n) {
      switch (t) {
        case "select":
          return e === "hr" || e === "option" || e === "optgroup" || e === "script" || e === "template" || e === "#text";
        case "optgroup":
          return e === "option" || e === "#text";
        case "option":
          return e === "#text";
        case "tr":
          return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
        case "tbody":
        case "thead":
        case "tfoot":
          return e === "tr" || e === "style" || e === "script" || e === "template";
        case "colgroup":
          return e === "col" || e === "template";
        case "table":
          return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
        case "head":
          return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
        case "html":
          if (n) break;
          return e === "head" || e === "body" || e === "frameset";
        case "frameset":
          return e === "frame";
        case "#document":
          if (!n) return e === "html";
      }
      switch (e) {
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
        case "rp":
        case "rt":
          return ky.indexOf(t) === -1;
        case "caption":
        case "col":
        case "colgroup":
        case "frameset":
        case "frame":
        case "tbody":
        case "td":
        case "tfoot":
        case "th":
        case "thead":
        case "tr":
          return t == null;
        case "head":
          return n || t === null;
        case "html":
          return n && t === "#document" || t === null;
        case "body":
          return n && (t === "#document" || t === "html") || t === null;
      }
      return !0;
    }
    function co(e, t) {
      switch (e) {
        case "address":
        case "article":
        case "aside":
        case "blockquote":
        case "center":
        case "details":
        case "dialog":
        case "dir":
        case "div":
        case "dl":
        case "fieldset":
        case "figcaption":
        case "figure":
        case "footer":
        case "header":
        case "hgroup":
        case "main":
        case "menu":
        case "nav":
        case "ol":
        case "p":
        case "section":
        case "summary":
        case "ul":
        case "pre":
        case "listing":
        case "table":
        case "hr":
        case "xmp":
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t.pTagInButtonScope;
        case "form":
          return t.formTag || t.pTagInButtonScope;
        case "li":
          return t.listItemTagAutoclosing;
        case "dd":
        case "dt":
          return t.dlItemTagAutoclosing;
        case "button":
          return t.buttonTagInScope;
        case "a":
          return t.aTagInScope;
        case "nobr":
          return t.nobrTagInScope;
      }
      return null;
    }
    function Wp(e, t) {
      for (; e; ) {
        switch (e.tag) {
          case 5:
          case 26:
          case 27:
            if (e.type === t) return e;
        }
        e = e.return;
      }
      return null;
    }
    function As(e, t) {
      t = t || $y;
      var n = t.current;
      if (t = (n = Fh(
        e,
        n && n.tag,
        t.implicitRootScope
      ) ? null : n) ? null : co(e, t), t = n || t, !t) return !0;
      var i = t.tag;
      if (t = String(!!n) + "|" + e + "|" + i, ar[t]) return !1;
      ar[t] = !0;
      var o = (t = On) ? Wp(t.return, i) : null, r = t !== null && o !== null ? Qi(o, t, null) : "", h = "<" + e + ">";
      return n ? (n = "", i === "table" && e === "tr" && (n += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), console.error(
        `In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,
        h,
        i,
        n,
        r
      )) : console.error(
        `In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,
        h,
        i,
        r
      ), t && (e = t.return, o === null || e === null || o === e && e._debugOwner === t._debugOwner || Se(o, function() {
        console.error(
          `<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,
          i,
          h
        );
      })), !1;
    }
    function Hr(e, t, n) {
      if (n || Fh("#text", t, !1))
        return !0;
      if (n = "#text|" + t, ar[n]) return !1;
      ar[n] = !0;
      var i = (n = On) ? Wp(n, t) : null;
      return n = n !== null && i !== null ? Qi(
        i,
        n,
        n.tag !== 6 ? { children: null } : null
      ) : "", /\S/.test(e) ? console.error(
        `In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,
        t,
        n
      ) : console.error(
        `In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,
        t,
        n
      ), !1;
    }
    function Zi(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
          n.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    function nb(e) {
      return e.replace(Ci, function(t, n) {
        return n.toUpperCase();
      });
    }
    function Fp(e, t, n) {
      var i = t.indexOf("--") === 0;
      i || (-1 < t.indexOf("-") ? Uc.hasOwnProperty(t) && Uc[t] || (Uc[t] = !0, console.error(
        "Unsupported style property %s. Did you mean %s?",
        t,
        nb(t.replace(Gf, "ms-"))
      )) : Vf.test(t) ? Uc.hasOwnProperty(t) && Uc[t] || (Uc[t] = !0, console.error(
        "Unsupported vendor-prefixed style property %s. Did you mean %s?",
        t,
        t.charAt(0).toUpperCase() + t.slice(1)
      )) : !Ig.test(n) || Cc.hasOwnProperty(n) && Cc[n] || (Cc[n] = !0, console.error(
        `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
        t,
        n.replace(Ig, "")
      )), typeof n == "number" && (isNaN(n) ? Pg || (Pg = !0, console.error(
        "`NaN` is an invalid value for the `%s` css style property.",
        t
      )) : isFinite(n) || Wy || (Wy = !0, console.error(
        "`Infinity` is an invalid value for the `%s` css style property.",
        t
      )))), n == null || typeof n == "boolean" || n === "" ? i ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : i ? e.setProperty(t, n) : typeof n != "number" || n === 0 || Xf.has(t) ? t === "float" ? e.cssFloat = n : (Je(n, t), e[t] = ("" + n).trim()) : e[t] = n + "px";
    }
    function Br(e, t, n) {
      if (t != null && typeof t != "object")
        throw Error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      if (t && Object.freeze(t), e = e.style, n != null) {
        if (t) {
          var i = {};
          if (n) {
            for (var o in n)
              if (n.hasOwnProperty(o) && !t.hasOwnProperty(o))
                for (var r = Ja[o] || [o], h = 0; h < r.length; h++)
                  i[r[h]] = o;
          }
          for (var y in t)
            if (t.hasOwnProperty(y) && (!n || n[y] !== t[y]))
              for (o = Ja[y] || [y], r = 0; r < o.length; r++)
                i[o[r]] = y;
          y = {};
          for (var S in t)
            for (o = Ja[S] || [S], r = 0; r < o.length; r++)
              y[o[r]] = S;
          S = {};
          for (var E in i)
            if (o = i[E], (r = y[E]) && o !== r && (h = o + "," + r, !S[h])) {
              S[h] = !0, h = console;
              var Z = t[o];
              h.error.call(
                h,
                "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
                Z == null || typeof Z == "boolean" || Z === "" ? "Removing" : "Updating",
                o,
                r
              );
            }
        }
        for (var F in n)
          !n.hasOwnProperty(F) || t != null && t.hasOwnProperty(F) || (F.indexOf("--") === 0 ? e.setProperty(F, "") : F === "float" ? e.cssFloat = "" : e[F] = "");
        for (var G in t)
          E = t[G], t.hasOwnProperty(G) && n[G] !== E && Fp(e, G, E);
      } else
        for (i in t)
          t.hasOwnProperty(i) && Fp(e, i, t[i]);
    }
    function Ki(e) {
      if (e.indexOf("-") === -1) return !1;
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    function Rs(e) {
      return ch.get(e) || e;
    }
    function oo(e, t) {
      if (Bu.call(ka, t) && ka[t])
        return !0;
      if (oh.test(t)) {
        if (e = "aria-" + t.slice(4).toLowerCase(), e = Fy.hasOwnProperty(e) ? e : null, e == null)
          return console.error(
            "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
            t
          ), ka[t] = !0;
        if (t !== e)
          return console.error(
            "Invalid ARIA attribute `%s`. Did you mean `%s`?",
            t,
            e
          ), ka[t] = !0;
      }
      if (Iy.test(t)) {
        if (e = t.toLowerCase(), e = Fy.hasOwnProperty(e) ? e : null, e == null) return ka[t] = !0, !1;
        t !== e && (console.error(
          "Unknown ARIA attribute `%s`. Did you mean `%s`?",
          t,
          e
        ), ka[t] = !0);
      }
      return !0;
    }
    function ro(e, t) {
      var n = [], i;
      for (i in t)
        oo(e, i) || n.push(i);
      t = n.map(function(o) {
        return "`" + o + "`";
      }).join(", "), n.length === 1 ? console.error(
        "Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      ) : 1 < n.length && console.error(
        "Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      );
    }
    function Ip(e, t, n, i) {
      if (Bu.call(Jl, t) && Jl[t])
        return !0;
      var o = t.toLowerCase();
      if (o === "onfocusin" || o === "onfocusout")
        return console.error(
          "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
        ), Jl[t] = !0;
      if (typeof n == "function" && (e === "form" && t === "action" || e === "input" && t === "formAction" || e === "button" && t === "formAction"))
        return !0;
      if (i != null) {
        if (e = i.possibleRegistrationNames, i.registrationNameDependencies.hasOwnProperty(t))
          return !0;
        if (i = e.hasOwnProperty(o) ? e[o] : null, i != null)
          return console.error(
            "Invalid event handler property `%s`. Did you mean `%s`?",
            t,
            i
          ), Jl[t] = !0;
        if (Zf.test(t))
          return console.error(
            "Unknown event handler property `%s`. It will be ignored.",
            t
          ), Jl[t] = !0;
      } else if (Zf.test(t))
        return l.test(t) && console.error(
          "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
          t
        ), Jl[t] = !0;
      if (a.test(t) || u.test(t)) return !0;
      if (o === "innerhtml")
        return console.error(
          "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
        ), Jl[t] = !0;
      if (o === "aria")
        return console.error(
          "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
        ), Jl[t] = !0;
      if (o === "is" && n !== null && n !== void 0 && typeof n != "string")
        return console.error(
          "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
          typeof n
        ), Jl[t] = !0;
      if (typeof n == "number" && isNaN(n))
        return console.error(
          "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
          t
        ), Jl[t] = !0;
      if (Hc.hasOwnProperty(o)) {
        if (o = Hc[o], o !== t)
          return console.error(
            "Invalid DOM property `%s`. Did you mean `%s`?",
            t,
            o
          ), Jl[t] = !0;
      } else if (t !== o)
        return console.error(
          "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
          t,
          o
        ), Jl[t] = !0;
      switch (t) {
        case "dangerouslySetInnerHTML":
        case "children":
        case "style":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          return !0;
        case "innerText":
        case "textContent":
          return !0;
      }
      switch (typeof n) {
        case "boolean":
          switch (t) {
            case "autoFocus":
            case "checked":
            case "multiple":
            case "muted":
            case "selected":
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
            case "capture":
            case "download":
            case "inert":
              return !0;
            default:
              return o = t.toLowerCase().slice(0, 5), o === "data-" || o === "aria-" ? !0 : (n ? console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                n,
                t,
                t,
                n,
                t
              ) : console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                n,
                t,
                t,
                n,
                t,
                t,
                t
              ), Jl[t] = !0);
          }
        case "function":
        case "symbol":
          return Jl[t] = !0, !1;
        case "string":
          if (n === "false" || n === "true") {
            switch (t) {
              case "checked":
              case "selected":
              case "multiple":
              case "muted":
              case "allowFullScreen":
              case "async":
              case "autoPlay":
              case "controls":
              case "default":
              case "defer":
              case "disabled":
              case "disablePictureInPicture":
              case "disableRemotePlayback":
              case "formNoValidate":
              case "hidden":
              case "loop":
              case "noModule":
              case "noValidate":
              case "open":
              case "playsInline":
              case "readOnly":
              case "required":
              case "reversed":
              case "scoped":
              case "seamless":
              case "itemScope":
              case "inert":
                break;
              default:
                return !0;
            }
            console.error(
              "Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",
              n,
              t,
              n === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".',
              t,
              n
            ), Jl[t] = !0;
          }
      }
      return !0;
    }
    function Ih(e, t, n) {
      var i = [], o;
      for (o in t)
        Ip(e, o, t[o], n) || i.push(o);
      t = i.map(function(r) {
        return "`" + r + "`";
      }).join(", "), i.length === 1 ? console.error(
        "Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      ) : 1 < i.length && console.error(
        "Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      );
    }
    function fo(e) {
      return c.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
    }
    function Ji(e) {
      return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    function va(e) {
      var t = yn(e);
      if (t && (e = t.stateNode)) {
        var n = e[sn] || null;
        e: switch (e = t.stateNode, t.type) {
          case "input":
            if ($u(
              e,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name
            ), t = n.name, n.type === "radio" && t != null) {
              for (n = e; n.parentNode; ) n = n.parentNode;
              for (ze(t, "name"), n = n.querySelectorAll(
                'input[name="' + pn(
                  "" + t
                ) + '"][type="radio"]'
              ), t = 0; t < n.length; t++) {
                var i = n[t];
                if (i !== e && i.form === e.form) {
                  var o = i[sn] || null;
                  if (!o)
                    throw Error(
                      "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported."
                    );
                  $u(
                    i,
                    o.value,
                    o.defaultValue,
                    o.defaultValue,
                    o.checked,
                    o.defaultChecked,
                    o.type,
                    o.name
                  );
                }
              }
              for (t = 0; t < n.length; t++)
                i = n[t], i.form === e.form && nl(i);
            }
            break e;
          case "textarea":
            Ss(e, n.value, n.defaultValue);
            break e;
          case "select":
            t = n.value, t != null && du(e, !!n.multiple, t, !1);
        }
      }
    }
    function Os(e, t, n) {
      if (b) return e(t, n);
      b = !0;
      try {
        var i = e(t);
        return i;
      } finally {
        if (b = !1, (s !== null || p !== null) && (vc(), s && (t = s, e = p, p = s = null, va(t), e)))
          for (t = 0; t < e.length; t++) va(e[t]);
      }
    }
    function hu(e, t) {
      var n = e.stateNode;
      if (n === null) return null;
      var i = n[sn] || null;
      if (i === null) return null;
      n = i[t];
      e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (i = !i.disabled) || (e = e.type, i = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !i;
          break e;
        default:
          e = !1;
      }
      if (e) return null;
      if (n && typeof n != "function")
        throw Error(
          "Expected `" + t + "` listener to be a function, instead got a value of `" + typeof n + "` type."
        );
      return n;
    }
    function mu() {
      if (J) return J;
      var e, t = X, n = t.length, i, o = "value" in ae ? ae.value : ae.textContent, r = o.length;
      for (e = 0; e < n && t[e] === o[e]; e++) ;
      var h = n - e;
      for (i = 1; i <= h && t[n - i] === o[r - i]; i++) ;
      return J = o.slice(e, 1 < i ? 1 - i : void 0);
    }
    function so(e) {
      var t = e.keyCode;
      return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function ki() {
      return !0;
    }
    function Ph() {
      return !1;
    }
    function Sl(e) {
      function t(n, i, o, r, h) {
        this._reactName = n, this._targetInst = o, this.type = i, this.nativeEvent = r, this.target = h, this.currentTarget = null;
        for (var y in e)
          e.hasOwnProperty(y) && (n = e[y], this[y] = n ? n(r) : r[y]);
        return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? ki : Ph, this.isPropagationStopped = Ph, this;
      }
      return Ke(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ki);
        },
        stopPropagation: function() {
          var n = this.nativeEvent;
          n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ki);
        },
        persist: function() {
        },
        isPersistent: ki
      }), t;
    }
    function Ds(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = vE[e]) ? !!t[e] : !1;
    }
    function Ms() {
      return Ds;
    }
    function Xl(e, t) {
      switch (e) {
        case "keyup":
          return UE.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== F0;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Iu(e) {
      return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    function zs(e, t) {
      switch (e) {
        case "compositionend":
          return Iu(t);
        case "keypress":
          return t.which !== P0 ? null : (t1 = !0, e1);
        case "textInput":
          return e = t.data, e === e1 && t1 ? null : e;
        default:
          return null;
      }
    }
    function Nr(e, t) {
      if (rh)
        return e === "compositionend" || !Eb && Xl(e, t) ? (e = mu(), J = X = ae = null, rh = !1, e) : null;
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return I0 && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    function Pp(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!HE[e.type] : t === "textarea";
    }
    function em(e) {
      if (!D) return !1;
      e = "on" + e;
      var t = e in document;
      return t || (t = document.createElement("div"), t.setAttribute(e, "return;"), t = typeof t[e] == "function"), t;
    }
    function xs(e, t, n, i) {
      s ? p ? p.push(i) : p = [i] : s = i, t = Ef(t, "onChange"), 0 < t.length && (n = new He(
        "onChange",
        "change",
        null,
        n,
        i
      ), e.push({ event: n, listeners: t }));
    }
    function wr(e) {
      Ya(e, 0);
    }
    function $i(e) {
      var t = Zu(e);
      if (nl(t)) return e;
    }
    function tm(e, t) {
      if (e === "change") return t;
    }
    function eg() {
      tp && (tp.detachEvent("onpropertychange", tg), lp = tp = null);
    }
    function tg(e) {
      if (e.propertyName === "value" && $i(lp)) {
        var t = [];
        xs(
          t,
          lp,
          e,
          Ji(e)
        ), Os(wr, t);
      }
    }
    function ab(e, t, n) {
      e === "focusin" ? (eg(), tp = t, lp = n, tp.attachEvent("onpropertychange", tg)) : e === "focusout" && eg();
    }
    function lm(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return $i(lp);
    }
    function ub(e, t) {
      if (e === "click") return $i(t);
    }
    function ib(e, t) {
      if (e === "input" || e === "change")
        return $i(t);
    }
    function cb(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    function _r(e, t) {
      if (Dn(e, t)) return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var n = Object.keys(e), i = Object.keys(t);
      if (n.length !== i.length) return !1;
      for (i = 0; i < n.length; i++) {
        var o = n[i];
        if (!Bu.call(t, o) || !Dn(e[o], t[o]))
          return !1;
      }
      return !0;
    }
    function lg(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function nm(e, t) {
      var n = lg(e);
      e = 0;
      for (var i; n; ) {
        if (n.nodeType === 3) {
          if (i = e + n.textContent.length, e <= t && i >= t)
            return { node: n, offset: t - e };
          e = i;
        }
        e: {
          for (; n; ) {
            if (n.nextSibling) {
              n = n.nextSibling;
              break e;
            }
            n = n.parentNode;
          }
          n = void 0;
        }
        n = lg(n);
      }
    }
    function ng(e, t) {
      return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ng(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
    }
    function ag(e) {
      e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
      for (var t = zr(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var n = typeof t.contentWindow.location.href == "string";
        } catch {
          n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = zr(e.document);
      }
      return t;
    }
    function am(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function ug(e, t, n) {
      var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
      Rb || fh == null || fh !== zr(i) || (i = fh, "selectionStart" in i && am(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
        anchorNode: i.anchorNode,
        anchorOffset: i.anchorOffset,
        focusNode: i.focusNode,
        focusOffset: i.focusOffset
      }), np && _r(np, i) || (np = i, i = Ef(Ab, "onSelect"), 0 < i.length && (t = new He(
        "onSelect",
        "select",
        null,
        t,
        n
      ), e.push({ event: t, listeners: i }), t.target = fh)));
    }
    function yu(e, t) {
      var n = {};
      return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
    }
    function Wi(e) {
      if (Ob[e]) return Ob[e];
      if (!sh[e]) return e;
      var t = sh[e], n;
      for (n in t)
        if (t.hasOwnProperty(n) && n in n1)
          return Ob[e] = t[n];
      return e;
    }
    function In(e, t) {
      o1.set(e, t), Ku(t, [e]);
    }
    function gn(e, t) {
      if (typeof e == "object" && e !== null) {
        var n = Mb.get(e);
        return n !== void 0 ? n : (t = {
          value: e,
          source: t,
          stack: gs(t)
        }, Mb.set(e, t), t);
      }
      return {
        value: e,
        source: t,
        stack: gs(t)
      };
    }
    function qr() {
      for (var e = dh, t = zb = dh = 0; t < e; ) {
        var n = $a[t];
        $a[t++] = null;
        var i = $a[t];
        $a[t++] = null;
        var o = $a[t];
        $a[t++] = null;
        var r = $a[t];
        if ($a[t++] = null, i !== null && o !== null) {
          var h = i.pending;
          h === null ? o.next = o : (o.next = h.next, h.next = o), i.pending = o;
        }
        r !== 0 && ig(n, o, r);
      }
    }
    function Us(e, t, n, i) {
      $a[dh++] = e, $a[dh++] = t, $a[dh++] = n, $a[dh++] = i, zb |= i, e.lanes |= i, e = e.alternate, e !== null && (e.lanes |= i);
    }
    function um(e, t, n, i) {
      return Us(e, t, n, i), Cs(e);
    }
    function Il(e, t) {
      return Us(e, null, null, t), Cs(e);
    }
    function ig(e, t, n) {
      e.lanes |= n;
      var i = e.alternate;
      i !== null && (i.lanes |= n);
      for (var o = !1, r = e.return; r !== null; )
        r.childLanes |= n, i = r.alternate, i !== null && (i.childLanes |= n), r.tag === 22 && (e = r.stateNode, e === null || e._visibility & ev || (o = !0)), e = r, r = r.return;
      return e.tag === 3 ? (r = e.stateNode, o && t !== null && (o = 31 - _l(n), e = r.hiddenUpdates, i = e[o], i === null ? e[o] = [t] : i.push(t), t.lane = n | 536870912), r) : null;
    }
    function Cs(e) {
      if (Op > tA)
        throw as = Op = 0, Dp = a0 = null, Error(
          "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
        );
      as > lA && (as = 0, Dp = null, console.error(
        "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
      )), e.alternate === null && (e.flags & 4098) !== 0 && fa(e);
      for (var t = e, n = t.return; n !== null; )
        t.alternate === null && (t.flags & 4098) !== 0 && fa(e), t = n, n = t.return;
      return t.tag === 3 ? t.stateNode : null;
    }
    function Fi(e) {
      if (Wa === null) return e;
      var t = Wa(e);
      return t === void 0 ? e : t.current;
    }
    function im(e) {
      if (Wa === null) return e;
      var t = Wa(e);
      return t === void 0 ? e != null && typeof e.render == "function" && (t = Fi(e.render), e.render !== t) ? (t = { $$typeof: Cu, render: t }, e.displayName !== void 0 && (t.displayName = e.displayName), t) : e : t.current;
    }
    function cg(e, t) {
      if (Wa === null) return !1;
      var n = e.elementType;
      t = t.type;
      var i = !1, o = typeof t == "object" && t !== null ? t.$$typeof : null;
      switch (e.tag) {
        case 1:
          typeof t == "function" && (i = !0);
          break;
        case 0:
          (typeof t == "function" || o === Rn) && (i = !0);
          break;
        case 11:
          (o === Cu || o === Rn) && (i = !0);
          break;
        case 14:
        case 15:
          (o === Bf || o === Rn) && (i = !0);
          break;
        default:
          return !1;
      }
      return !!(i && (e = Wa(n), e !== void 0 && e === Wa(t)));
    }
    function og(e) {
      Wa !== null && typeof WeakSet == "function" && (hh === null && (hh = /* @__PURE__ */ new WeakSet()), hh.add(e));
    }
    function Lr(e, t, n) {
      var i = e.alternate, o = e.child, r = e.sibling, h = e.tag, y = e.type, S = null;
      switch (h) {
        case 0:
        case 15:
        case 1:
          S = y;
          break;
        case 11:
          S = y.render;
      }
      if (Wa === null)
        throw Error("Expected resolveFamily to be set during hot reload.");
      var E = !1;
      y = !1, S !== null && (S = Wa(S), S !== void 0 && (n.has(S) ? y = !0 : t.has(S) && (h === 1 ? y = !0 : E = !0))), hh !== null && (hh.has(e) || i !== null && hh.has(i)) && (y = !0), y && (e._debugNeedsRemount = !0), (y || E) && (i = Il(e, 2), i !== null && Vt(i, e, 2)), o === null || y || Lr(
        o,
        t,
        n
      ), r !== null && Lr(
        r,
        t,
        n
      );
    }
    function Yr(e, t, n, i) {
      this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null, this.actualDuration = -0, this.actualStartTime = -1.1, this.treeBaseDuration = this.selfBaseDuration = -0, this._debugTask = this._debugStack = this._debugOwner = this._debugInfo = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, f1 || typeof Object.preventExtensions != "function" || Object.preventExtensions(this);
    }
    function cm(e) {
      return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function ba(e, t) {
      var n = e.alternate;
      switch (n === null ? (n = U(
        e.tag,
        t,
        e.key,
        e.mode
      ), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n._debugOwner = e._debugOwner, n._debugStack = e._debugStack, n._debugTask = e._debugTask, n._debugHookTypes = e._debugHookTypes, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null, n.actualDuration = -0, n.actualStartTime = -1.1), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n.selfBaseDuration = e.selfBaseDuration, n.treeBaseDuration = e.treeBaseDuration, n._debugInfo = e._debugInfo, n._debugNeedsRemount = e._debugNeedsRemount, n.tag) {
        case 0:
        case 15:
          n.type = Fi(e.type);
          break;
        case 1:
          n.type = Fi(e.type);
          break;
        case 11:
          n.type = im(e.type);
      }
      return n;
    }
    function om(e, t) {
      e.flags &= 65011714;
      var n = e.alternate;
      return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, e.selfBaseDuration = n.selfBaseDuration, e.treeBaseDuration = n.treeBaseDuration), e;
    }
    function Hs(e, t, n, i, o, r) {
      var h = 0, y = e;
      if (typeof e == "function")
        cm(e) && (h = 1), y = Fi(y);
      else if (typeof e == "string")
        h = N(), h = Zo(e, n, h) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
      else
        e: switch (e) {
          case wy:
            return t = U(31, n, t, o), t.elementType = wy, t.lanes = r, t;
          case Ve:
            return Pu(
              n.children,
              o,
              r,
              t
            );
          case Jo:
            h = 8, o |= hn, o |= Lu;
            break;
          case ko:
            return e = n, i = o, typeof e.id != "string" && console.error(
              'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
              typeof e.id
            ), t = U(12, e, t, i | kl), t.elementType = ko, t.lanes = r, t.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, t;
          case $o:
            return t = U(13, n, t, o), t.elementType = $o, t.lanes = r, t;
          case Oi:
            return t = U(19, n, t, o), t.elementType = Oi, t.lanes = r, t;
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case Ny:
                case Zn:
                  h = 10;
                  break e;
                case Jd:
                  h = 9;
                  break e;
                case Cu:
                  h = 11, y = im(y);
                  break e;
                case Bf:
                  h = 14;
                  break e;
                case Rn:
                  h = 16, y = null;
                  break e;
              }
            y = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (y += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? n = "null" : Le(e) ? n = "array" : e !== void 0 && e.$$typeof === Ri ? (n = "<" + (Q(e.type) || "Unknown") + " />", y = " Did you accidentally export a JSX literal instead of a component?") : n = typeof e, (h = i ? ce(i) : null) && (y += `

Check the render method of \`` + h + "`."), h = 29, n = Error(
              "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (n + "." + y)
            ), y = null;
        }
      return t = U(h, n, t, o), t.elementType = e, t.type = y, t.lanes = r, t._debugOwner = i, t;
    }
    function jr(e, t, n) {
      return t = Hs(
        e.type,
        e.key,
        e.props,
        e._owner,
        t,
        n
      ), t._debugOwner = e._owner, t._debugStack = e._debugStack, t._debugTask = e._debugTask, t;
    }
    function Pu(e, t, n, i) {
      return e = U(7, e, i, t), e.lanes = n, e;
    }
    function ei(e, t, n) {
      return e = U(6, e, null, t), e.lanes = n, e;
    }
    function rm(e, t, n) {
      return t = U(
        4,
        e.children !== null ? e.children : [],
        e.key,
        t
      ), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
      }, t;
    }
    function Ii(e, t) {
      Pn(), mh[yh++] = lv, mh[yh++] = tv, tv = e, lv = t;
    }
    function rg(e, t, n) {
      Pn(), Fa[Ia++] = Nc, Fa[Ia++] = wc, Fa[Ia++] = Kf, Kf = e;
      var i = Nc;
      e = wc;
      var o = 32 - _l(i) - 1;
      i &= ~(1 << o), n += 1;
      var r = 32 - _l(t) + o;
      if (30 < r) {
        var h = o - o % 5;
        r = (i & (1 << h) - 1).toString(32), i >>= h, o -= h, Nc = 1 << 32 - _l(t) + o | n << o | i, wc = r + e;
      } else
        Nc = 1 << r | n << o | i, wc = e;
    }
    function Bs(e) {
      Pn(), e.return !== null && (Ii(e, 1), rg(e, 1, 0));
    }
    function Ns(e) {
      for (; e === tv; )
        tv = mh[--yh], mh[yh] = null, lv = mh[--yh], mh[yh] = null;
      for (; e === Kf; )
        Kf = Fa[--Ia], Fa[Ia] = null, wc = Fa[--Ia], Fa[Ia] = null, Nc = Fa[--Ia], Fa[Ia] = null;
    }
    function Pn() {
      ht || console.error(
        "Expected to be hydrating. This is a bug in React. Please file an issue."
      );
    }
    function ea(e, t) {
      if (e.return === null) {
        if (Pa === null)
          Pa = {
            fiber: e,
            children: [],
            serverProps: void 0,
            serverTail: [],
            distanceFromLeaf: t
          };
        else {
          if (Pa.fiber !== e)
            throw Error(
              "Saw multiple hydration diff roots in a pass. This is a bug in React."
            );
          Pa.distanceFromLeaf > t && (Pa.distanceFromLeaf = t);
        }
        return Pa;
      }
      var n = ea(
        e.return,
        t + 1
      ).children;
      return 0 < n.length && n[n.length - 1].fiber === e ? (n = n[n.length - 1], n.distanceFromLeaf > t && (n.distanceFromLeaf = t), n) : (t = {
        fiber: e,
        children: [],
        serverProps: void 0,
        serverTail: [],
        distanceFromLeaf: t
      }, n.push(t), t);
    }
    function fm(e, t) {
      _c || (e = ea(e, 0), e.serverProps = null, t !== null && (t = qd(t), e.serverTail.push(t)));
    }
    function Sa(e) {
      var t = "", n = Pa;
      throw n !== null && (Pa = null, t = Cr(n)), ho(
        gn(
          Error(
            `Hydration failed because the server rendered HTML didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch` + t
          ),
          e
        )
      ), xb;
    }
    function sm(e) {
      var t = e.stateNode, n = e.type, i = e.memoizedProps;
      switch (t[ql] = e, t[sn] = i, ja(n, i), n) {
        case "dialog":
          Fe("cancel", t), Fe("close", t);
          break;
        case "iframe":
        case "object":
        case "embed":
          Fe("load", t);
          break;
        case "video":
        case "audio":
          for (n = 0; n < Mp.length; n++)
            Fe(Mp[n], t);
          break;
        case "source":
          Fe("error", t);
          break;
        case "img":
        case "image":
        case "link":
          Fe("error", t), Fe("load", t);
          break;
        case "details":
          Fe("toggle", t);
          break;
        case "input":
          Ju("input", i), Fe("invalid", t), ku(t, i), kp(
            t,
            i.value,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name,
            !0
          ), su(t);
          break;
        case "option":
          Kh(t, i);
          break;
        case "select":
          Ju("select", i), Fe("invalid", t), xr(t, i);
          break;
        case "textarea":
          Ju("textarea", i), Fe("invalid", t), ga(t, i), Jh(
            t,
            i.value,
            i.defaultValue,
            i.children
          ), su(t);
      }
      n = i.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || i.suppressHydrationWarning === !0 || hy(t.textContent, n) ? (i.popover != null && (Fe("beforetoggle", t), Fe("toggle", t)), i.onScroll != null && Fe("scroll", t), i.onScrollEnd != null && Fe("scrollend", t), i.onClick != null && (t.onclick = Mu), t = !0) : t = !1, t || Sa(e);
    }
    function dm(e) {
      for (Mn = e.return; Mn; )
        switch (Mn.tag) {
          case 5:
          case 13:
            Bi = !1;
            return;
          case 27:
          case 3:
            Bi = !0;
            return;
          default:
            Mn = Mn.return;
        }
    }
    function Pi(e) {
      if (e !== Mn) return !1;
      if (!ht)
        return dm(e), ht = !0, !1;
      var t = e.tag, n;
      if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || Va(e.type, e.memoizedProps)), n = !n), n && It) {
        for (n = It; n; ) {
          var i = ea(e, 0), o = qd(n);
          i.serverTail.push(o), n = o.type === "Suspense" ? Ty(n) : Ol(n.nextSibling);
        }
        Sa(e);
      }
      if (dm(e), t === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        It = Ty(e);
      } else
        t === 27 ? (t = It, Ga(e.type) ? (e = p0, p0 = null, It = e) : It = t) : It = Mn ? Ol(e.stateNode.nextSibling) : null;
      return !0;
    }
    function ec() {
      It = Mn = null, _c = ht = !1;
    }
    function hm() {
      var e = Jf;
      return e !== null && (Un === null ? Un = e : Un.push.apply(
        Un,
        e
      ), Jf = null), e;
    }
    function ho(e) {
      Jf === null ? Jf = [e] : Jf.push(e);
    }
    function mm() {
      var e = Pa;
      if (e !== null) {
        Pa = null;
        for (var t = Cr(e); 0 < e.children.length; )
          e = e.children[0];
        Se(e.fiber, function() {
          console.error(
            `A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,
            "https://react.dev/link/hydration-mismatch",
            t
          );
        });
      }
    }
    function ws() {
      ph = nv = null, gh = !1;
    }
    function ti(e, t, n) {
      ve(Ub, t._currentValue, e), t._currentValue = n, ve(Cb, t._currentRenderer, e), t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== m1 && console.error(
        "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
      ), t._currentRenderer = m1;
    }
    function pu(e, t) {
      e._currentValue = Ub.current;
      var n = Cb.current;
      Oe(Cb, t), e._currentRenderer = n, Oe(Ub, t);
    }
    function ym(e, t, n) {
      for (; e !== null; ) {
        var i = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === n) break;
        e = e.return;
      }
      e !== n && console.error(
        "Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function pm(e, t, n, i) {
      var o = e.child;
      for (o !== null && (o.return = e); o !== null; ) {
        var r = o.dependencies;
        if (r !== null) {
          var h = o.child;
          r = r.firstContext;
          e: for (; r !== null; ) {
            var y = r;
            r = o;
            for (var S = 0; S < t.length; S++)
              if (y.context === t[S]) {
                r.lanes |= n, y = r.alternate, y !== null && (y.lanes |= n), ym(
                  r.return,
                  n,
                  e
                ), i || (h = null);
                break e;
              }
            r = y.next;
          }
        } else if (o.tag === 18) {
          if (h = o.return, h === null)
            throw Error(
              "We just came from a parent so we must have had a parent. This is a bug in React."
            );
          h.lanes |= n, r = h.alternate, r !== null && (r.lanes |= n), ym(
            h,
            n,
            e
          ), h = null;
        } else h = o.child;
        if (h !== null) h.return = o;
        else
          for (h = o; h !== null; ) {
            if (h === e) {
              h = null;
              break;
            }
            if (o = h.sibling, o !== null) {
              o.return = h.return, h = o;
              break;
            }
            h = h.return;
          }
        o = h;
      }
    }
    function Tl(e, t, n, i) {
      e = null;
      for (var o = t, r = !1; o !== null; ) {
        if (!r) {
          if ((o.flags & 524288) !== 0) r = !0;
          else if ((o.flags & 262144) !== 0) break;
        }
        if (o.tag === 10) {
          var h = o.alternate;
          if (h === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          if (h = h.memoizedProps, h !== null) {
            var y = o.type;
            Dn(o.pendingProps.value, h.value) || (e !== null ? e.push(y) : e = [y]);
          }
        } else if (o === Fo.current) {
          if (h = o.alternate, h === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          h.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(Cp) : e = [Cp]);
        }
        o = o.return;
      }
      e !== null && pm(
        t,
        e,
        n,
        i
      ), t.flags |= 262144;
    }
    function li(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!Dn(
          e.context._currentValue,
          e.memoizedValue
        ))
          return !0;
        e = e.next;
      }
      return !1;
    }
    function ni(e) {
      nv = e, ph = null, e = e.dependencies, e !== null && (e.firstContext = null);
    }
    function zt(e) {
      return gh && console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      ), gm(nv, e);
    }
    function Vr(e, t) {
      return nv === null && ni(e), gm(e, t);
    }
    function gm(e, t) {
      var n = t._currentValue;
      if (t = { context: t, memoizedValue: n, next: null }, ph === null) {
        if (e === null)
          throw Error(
            "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
          );
        ph = t, e.dependencies = {
          lanes: 0,
          firstContext: t,
          _debugThenableState: null
        }, e.flags |= 524288;
      } else ph = ph.next = t;
      return n;
    }
    function Gr() {
      return {
        controller: new jE(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function tc(e) {
      e.controller.signal.aborted && console.warn(
        "A cache instance was retained after it was already freed. This likely indicates a bug in React."
      ), e.refCount++;
    }
    function Ta(e) {
      e.refCount--, 0 > e.refCount && console.warn(
        "A cache instance was released after it was already freed. This likely indicates a bug in React."
      ), e.refCount === 0 && VE(GE, function() {
        e.controller.abort();
      });
    }
    function ta() {
      var e = kf;
      return kf = 0, e;
    }
    function ai(e) {
      var t = kf;
      return kf = e, t;
    }
    function lc(e) {
      var t = kf;
      return kf += e, t;
    }
    function _s(e) {
      kn = vh(), 0 > e.actualStartTime && (e.actualStartTime = kn);
    }
    function gu(e) {
      if (0 <= kn) {
        var t = vh() - kn;
        e.actualDuration += t, e.selfBaseDuration = t, kn = -1;
      }
    }
    function nc(e) {
      if (0 <= kn) {
        var t = vh() - kn;
        e.actualDuration += t, kn = -1;
      }
    }
    function Bn() {
      if (0 <= kn) {
        var e = vh() - kn;
        kn = -1, kf += e;
      }
    }
    function la() {
      kn = vh();
    }
    function Ea(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function fg(e, t) {
      if (ap === null) {
        var n = ap = [];
        Hb = 0, $f = oy(), bh = {
          status: "pending",
          value: void 0,
          then: function(i) {
            n.push(i);
          }
        };
      }
      return Hb++, t.then(vm, vm), t;
    }
    function vm() {
      if (--Hb === 0 && ap !== null) {
        bh !== null && (bh.status = "fulfilled");
        var e = ap;
        ap = null, $f = 0, bh = null;
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function sg(e, t) {
      var n = [], i = {
        status: "pending",
        value: null,
        reason: null,
        then: function(o) {
          n.push(o);
        }
      };
      return e.then(
        function() {
          i.status = "fulfilled", i.value = t;
          for (var o = 0; o < n.length; o++) (0, n[o])(t);
        },
        function(o) {
          for (i.status = "rejected", i.reason = o, o = 0; o < n.length; o++)
            (0, n[o])(void 0);
        }
      ), i;
    }
    function bm() {
      var e = Wf.current;
      return e !== null ? e : xt.pooledCache;
    }
    function qs(e, t) {
      t === null ? ve(Wf, Wf.current, e) : ve(Wf, t.pool, e);
    }
    function dg() {
      var e = bm();
      return e === null ? null : { parent: zl._currentValue, pool: e };
    }
    function Sm() {
      return { didWarnAboutUncachedPromise: !1, thenables: [] };
    }
    function Tm(e) {
      return e = e.status, e === "fulfilled" || e === "rejected";
    }
    function mo() {
    }
    function Nn(e, t, n) {
      $.actQueue !== null && ($.didUsePromise = !0);
      var i = e.thenables;
      switch (n = i[n], n === void 0 ? i.push(t) : n !== t && (e.didWarnAboutUncachedPromise || (e.didWarnAboutUncachedPromise = !0, console.error(
        "A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework."
      )), t.then(mo, mo), t = n), t.status) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw e = t.reason, vn(e), e;
        default:
          if (typeof t.status == "string")
            t.then(mo, mo);
          else {
            if (e = xt, e !== null && 100 < e.shellSuspendCounter)
              throw Error(
                "An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
              );
            e = t, e.status = "pending", e.then(
              function(o) {
                if (t.status === "pending") {
                  var r = t;
                  r.status = "fulfilled", r.value = o;
                }
              },
              function(o) {
                if (t.status === "pending") {
                  var r = t;
                  r.status = "rejected", r.reason = o;
                }
              }
            );
          }
          switch (t.status) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw e = t.reason, vn(e), e;
          }
          throw dp = t, rv = !0, sp;
      }
    }
    function Em() {
      if (dp === null)
        throw Error(
          "Expected a suspended thenable. This is a bug in React. Please file an issue."
        );
      var e = dp;
      return dp = null, rv = !1, e;
    }
    function vn(e) {
      if (e === sp || e === ov)
        throw Error(
          "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
        );
    }
    function Pl(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null
      };
    }
    function ui(e, t) {
      e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        callbacks: null
      });
    }
    function Aa(e) {
      return {
        lane: e,
        tag: b1,
        payload: null,
        callback: null,
        next: null
      };
    }
    function na(e, t, n) {
      var i = e.updateQueue;
      if (i === null) return null;
      if (i = i.shared, wb === i && !E1) {
        var o = se(e);
        console.error(
          `An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,
          o
        ), E1 = !0;
      }
      return (bt & xn) !== ha ? (o = i.pending, o === null ? t.next = t : (t.next = o.next, o.next = t), i.pending = t, t = Cs(e), ig(e, null, n), t) : (Us(e, i, t, n), Cs(e));
    }
    function ii(e, t, n) {
      if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
        var i = t.lanes;
        i &= e.pendingLanes, n |= i, t.lanes = n, no(e, n);
      }
    }
    function yo(e, t) {
      var n = e.updateQueue, i = e.alternate;
      if (i !== null && (i = i.updateQueue, n === i)) {
        var o = null, r = null;
        if (n = n.firstBaseUpdate, n !== null) {
          do {
            var h = {
              lane: n.lane,
              tag: n.tag,
              payload: n.payload,
              callback: null,
              next: null
            };
            r === null ? o = r = h : r = r.next = h, n = n.next;
          } while (n !== null);
          r === null ? o = r = t : r = r.next = t;
        } else o = r = t;
        n = {
          baseState: i.baseState,
          firstBaseUpdate: o,
          lastBaseUpdate: r,
          shared: i.shared,
          callbacks: i.callbacks
        }, e.updateQueue = n;
        return;
      }
      e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
    }
    function Ra() {
      if (_b) {
        var e = bh;
        if (e !== null) throw e;
      }
    }
    function po(e, t, n, i) {
      _b = !1;
      var o = e.updateQueue;
      cr = !1, wb = o.shared;
      var r = o.firstBaseUpdate, h = o.lastBaseUpdate, y = o.shared.pending;
      if (y !== null) {
        o.shared.pending = null;
        var S = y, E = S.next;
        S.next = null, h === null ? r = E : h.next = E, h = S;
        var Z = e.alternate;
        Z !== null && (Z = Z.updateQueue, y = Z.lastBaseUpdate, y !== h && (y === null ? Z.firstBaseUpdate = E : y.next = E, Z.lastBaseUpdate = S));
      }
      if (r !== null) {
        var F = o.baseState;
        h = 0, Z = E = S = null, y = r;
        do {
          var G = y.lane & -536870913, P = G !== y.lane;
          if (P ? (lt & G) === G : (i & G) === G) {
            G !== 0 && G === $f && (_b = !0), Z !== null && (Z = Z.next = {
              lane: 0,
              tag: y.tag,
              payload: y.payload,
              callback: null,
              next: null
            });
            e: {
              G = e;
              var Te = y, qe = t, Ut = n;
              switch (Te.tag) {
                case S1:
                  if (Te = Te.payload, typeof Te == "function") {
                    gh = !0;
                    var ut = Te.call(
                      Ut,
                      F,
                      qe
                    );
                    if (G.mode & hn) {
                      tt(!0);
                      try {
                        Te.call(Ut, F, qe);
                      } finally {
                        tt(!1);
                      }
                    }
                    gh = !1, F = ut;
                    break e;
                  }
                  F = Te;
                  break e;
                case Nb:
                  G.flags = G.flags & -65537 | 128;
                case b1:
                  if (ut = Te.payload, typeof ut == "function") {
                    if (gh = !0, Te = ut.call(
                      Ut,
                      F,
                      qe
                    ), G.mode & hn) {
                      tt(!0);
                      try {
                        ut.call(Ut, F, qe);
                      } finally {
                        tt(!1);
                      }
                    }
                    gh = !1;
                  } else Te = ut;
                  if (Te == null) break e;
                  F = Ke({}, F, Te);
                  break e;
                case T1:
                  cr = !0;
              }
            }
            G = y.callback, G !== null && (e.flags |= 64, P && (e.flags |= 8192), P = o.callbacks, P === null ? o.callbacks = [G] : P.push(G));
          } else
            P = {
              lane: G,
              tag: y.tag,
              payload: y.payload,
              callback: y.callback,
              next: null
            }, Z === null ? (E = Z = P, S = F) : Z = Z.next = P, h |= G;
          if (y = y.next, y === null) {
            if (y = o.shared.pending, y === null)
              break;
            P = y, y = P.next, P.next = null, o.lastBaseUpdate = P, o.shared.pending = null;
          }
        } while (!0);
        Z === null && (S = F), o.baseState = S, o.firstBaseUpdate = E, o.lastBaseUpdate = Z, r === null && (o.shared.lanes = 0), sr |= h, e.lanes = h, e.memoizedState = F;
      }
      wb = null;
    }
    function Xr(e, t) {
      if (typeof e != "function")
        throw Error(
          "Invalid argument passed as callback. Expected a function. Instead received: " + e
        );
      e.call(t);
    }
    function go(e, t) {
      var n = e.shared.hiddenCallbacks;
      if (n !== null)
        for (e.shared.hiddenCallbacks = null, e = 0; e < n.length; e++)
          Xr(n[e], t);
    }
    function hg(e, t) {
      var n = e.callbacks;
      if (n !== null)
        for (e.callbacks = null, e = 0; e < n.length; e++)
          Xr(n[e], t);
    }
    function en(e, t) {
      var n = _i;
      ve(fv, n, e), ve(Sh, t, e), _i = n | t.baseLanes;
    }
    function Qr(e) {
      ve(fv, _i, e), ve(
        Sh,
        Sh.current,
        e
      );
    }
    function aa(e) {
      _i = fv.current, Oe(Sh, e), Oe(fv, e);
    }
    function ke() {
      var e = W;
      lu === null ? lu = [e] : lu.push(e);
    }
    function re() {
      var e = W;
      if (lu !== null && (Lc++, lu[Lc] !== e)) {
        var t = se(Ye);
        if (!A1.has(t) && (A1.add(t), lu !== null)) {
          for (var n = "", i = 0; i <= Lc; i++) {
            var o = lu[i], r = i === Lc ? e : o;
            for (o = i + 1 + ". " + o; 30 > o.length; )
              o += " ";
            o += r + `
`, n += o;
          }
          console.error(
            `React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,
            t,
            n
          );
        }
      }
    }
    function wn(e) {
      e == null || Le(e) || console.error(
        "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",
        W,
        typeof e
      );
    }
    function vo() {
      var e = se(Ye);
      O1.has(e) || (O1.add(e), console.error(
        "ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",
        e
      ));
    }
    function wt() {
      throw Error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      );
    }
    function ci(e, t) {
      if (mp) return !1;
      if (t === null)
        return console.error(
          "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
          W
        ), !1;
      e.length !== t.length && console.error(
        `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
        W,
        "[" + t.join(", ") + "]",
        "[" + e.join(", ") + "]"
      );
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!Dn(e[n], t[n])) return !1;
      return !0;
    }
    function oi(e, t, n, i, o, r) {
      or = r, Ye = t, lu = e !== null ? e._debugHookTypes : null, Lc = -1, mp = e !== null && e.type !== t.type, (Object.prototype.toString.call(n) === "[object AsyncFunction]" || Object.prototype.toString.call(n) === "[object AsyncGeneratorFunction]") && (r = se(Ye), qb.has(r) || (qb.add(r), console.error(
        "%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",
        r === null ? "An unknown Component" : "<" + r + ">"
      ))), t.memoizedState = null, t.updateQueue = null, t.lanes = 0, $.H = e !== null && e.memoizedState !== null ? Yb : lu !== null ? D1 : Lb, If = r = (t.mode & hn) !== Bt;
      var h = jb(n, i, o);
      if (If = !1, Eh && (h = bo(
        t,
        n,
        i,
        o
      )), r) {
        tt(!0);
        try {
          h = bo(
            t,
            n,
            i,
            o
          );
        } finally {
          tt(!1);
        }
      }
      return Zr(e, t), h;
    }
    function Zr(e, t) {
      t._debugHookTypes = lu, t.dependencies === null ? qc !== null && (t.dependencies = {
        lanes: 0,
        firstContext: null,
        _debugThenableState: qc
      }) : t.dependencies._debugThenableState = qc, $.H = hv;
      var n = Rt !== null && Rt.next !== null;
      if (or = 0, lu = W = gl = Rt = Ye = null, Lc = -1, e !== null && (e.flags & 65011712) !== (t.flags & 65011712) && console.error(
        "Internal React error: Expected static flag was missing. Please notify the React team."
      ), sv = !1, hp = 0, qc = null, n)
        throw Error(
          "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
        );
      e === null || Ll || (e = e.dependencies, e !== null && li(e) && (Ll = !0)), rv ? (rv = !1, e = !0) : e = !1, e && (t = se(t) || "Unknown", R1.has(t) || qb.has(t) || (R1.add(t), console.error(
        "`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary."
      )));
    }
    function bo(e, t, n, i) {
      Ye = e;
      var o = 0;
      do {
        if (Eh && (qc = null), hp = 0, Eh = !1, o >= QE)
          throw Error(
            "Too many re-renders. React limits the number of renders to prevent an infinite loop."
          );
        if (o += 1, mp = !1, gl = Rt = null, e.updateQueue != null) {
          var r = e.updateQueue;
          r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0);
        }
        Lc = -1, $.H = M1, r = jb(t, n, i);
      } while (Eh);
      return r;
    }
    function _n() {
      var e = $.H, t = e.useState()[0];
      return t = typeof t.then == "function" ? ac(t) : t, e = e.useState()[0], (Rt !== null ? Rt.memoizedState : null) !== e && (Ye.flags |= 1024), t;
    }
    function tn() {
      var e = dv !== 0;
      return dv = 0, e;
    }
    function vu(e, t, n) {
      t.updateQueue = e.updateQueue, t.flags = (t.mode & Lu) !== Bt ? t.flags & -402655237 : t.flags & -2053, e.lanes &= ~n;
    }
    function ua(e) {
      if (sv) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        sv = !1;
      }
      or = 0, lu = gl = Rt = Ye = null, Lc = -1, W = null, Eh = !1, hp = dv = 0, qc = null;
    }
    function Yt() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return gl === null ? Ye.memoizedState = gl = e : gl = gl.next = e, gl;
    }
    function at() {
      if (Rt === null) {
        var e = Ye.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = Rt.next;
      var t = gl === null ? Ye.memoizedState : gl.next;
      if (t !== null)
        gl = t, Rt = e;
      else {
        if (e === null)
          throw Ye.alternate === null ? Error(
            "Update hook called on initial render. This is likely a bug in React. Please file an issue."
          ) : Error("Rendered more hooks than during the previous render.");
        Rt = e, e = {
          memoizedState: Rt.memoizedState,
          baseState: Rt.baseState,
          baseQueue: Rt.baseQueue,
          queue: Rt.queue,
          next: null
        }, gl === null ? Ye.memoizedState = gl = e : gl = gl.next = e;
      }
      return gl;
    }
    function Ls() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function ac(e) {
      var t = hp;
      return hp += 1, qc === null && (qc = Sm()), e = Nn(qc, e, t), t = Ye, (gl === null ? t.memoizedState : gl.next) === null && (t = t.alternate, $.H = t !== null && t.memoizedState !== null ? Yb : Lb), e;
    }
    function Oa(e) {
      if (e !== null && typeof e == "object") {
        if (typeof e.then == "function") return ac(e);
        if (e.$$typeof === Zn) return zt(e);
      }
      throw Error("An unsupported type was passed to use(): " + String(e));
    }
    function Wt(e) {
      var t = null, n = Ye.updateQueue;
      if (n !== null && (t = n.memoCache), t == null) {
        var i = Ye.alternate;
        i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (t = {
          data: i.data.map(function(o) {
            return o.slice();
          }),
          index: 0
        })));
      }
      if (t == null && (t = { data: [], index: 0 }), n === null && (n = Ls(), Ye.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0 || mp)
        for (n = t.data[t.index] = Array(e), i = 0; i < e; i++)
          n[i] = Gg;
      else
        n.length !== e && console.error(
          "Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",
          n.length,
          e
        );
      return t.index++, n;
    }
    function ft(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function rt(e, t, n) {
      var i = Yt();
      if (n !== void 0) {
        var o = n(t);
        if (If) {
          tt(!0);
          try {
            n(t);
          } finally {
            tt(!1);
          }
        }
      } else o = t;
      return i.memoizedState = i.baseState = o, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      }, i.queue = e, e = e.dispatch = Cm.bind(
        null,
        Ye,
        e
      ), [i.memoizedState, e];
    }
    function qn(e) {
      var t = at();
      return Ln(t, Rt, e);
    }
    function Ln(e, t, n) {
      var i = e.queue;
      if (i === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      i.lastRenderedReducer = n;
      var o = e.baseQueue, r = i.pending;
      if (r !== null) {
        if (o !== null) {
          var h = o.next;
          o.next = r.next, r.next = h;
        }
        t.baseQueue !== o && console.error(
          "Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."
        ), t.baseQueue = o = r, i.pending = null;
      }
      if (r = e.baseState, o === null) e.memoizedState = r;
      else {
        t = o.next;
        var y = h = null, S = null, E = t, Z = !1;
        do {
          var F = E.lane & -536870913;
          if (F !== E.lane ? (lt & F) === F : (or & F) === F) {
            var G = E.revertLane;
            if (G === 0)
              S !== null && (S = S.next = {
                lane: 0,
                revertLane: 0,
                action: E.action,
                hasEagerState: E.hasEagerState,
                eagerState: E.eagerState,
                next: null
              }), F === $f && (Z = !0);
            else if ((or & G) === G) {
              E = E.next, G === $f && (Z = !0);
              continue;
            } else
              F = {
                lane: 0,
                revertLane: E.revertLane,
                action: E.action,
                hasEagerState: E.hasEagerState,
                eagerState: E.eagerState,
                next: null
              }, S === null ? (y = S = F, h = r) : S = S.next = F, Ye.lanes |= G, sr |= G;
            F = E.action, If && n(r, F), r = E.hasEagerState ? E.eagerState : n(r, F);
          } else
            G = {
              lane: F,
              revertLane: E.revertLane,
              action: E.action,
              hasEagerState: E.hasEagerState,
              eagerState: E.eagerState,
              next: null
            }, S === null ? (y = S = G, h = r) : S = S.next = G, Ye.lanes |= F, sr |= F;
          E = E.next;
        } while (E !== null && E !== t);
        if (S === null ? h = r : S.next = y, !Dn(r, e.memoizedState) && (Ll = !0, Z && (n = bh, n !== null)))
          throw n;
        e.memoizedState = r, e.baseState = h, e.baseQueue = S, i.lastRenderedState = r;
      }
      return o === null && (i.lanes = 0), [e.memoizedState, i.dispatch];
    }
    function uc(e) {
      var t = at(), n = t.queue;
      if (n === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      n.lastRenderedReducer = e;
      var i = n.dispatch, o = n.pending, r = t.memoizedState;
      if (o !== null) {
        n.pending = null;
        var h = o = o.next;
        do
          r = e(r, h.action), h = h.next;
        while (h !== o);
        Dn(r, t.memoizedState) || (Ll = !0), t.memoizedState = r, t.baseQueue === null && (t.baseState = r), n.lastRenderedState = r;
      }
      return [r, i];
    }
    function bu(e, t, n) {
      var i = Ye, o = Yt();
      if (ht) {
        if (n === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        var r = n();
        Th || r === n() || (console.error(
          "The result of getServerSnapshot should be cached to avoid an infinite loop"
        ), Th = !0);
      } else {
        if (r = t(), Th || (n = t(), Dn(r, n) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), Th = !0)), xt === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        (lt & 124) !== 0 || Am(i, t, r);
      }
      return o.memoizedState = r, n = { value: r, getSnapshot: t }, o.queue = n, Vs(
        To.bind(null, i, n, e),
        [e]
      ), i.flags |= 2048, Ma(
        tu | xl,
        fi(),
        So.bind(
          null,
          i,
          n,
          r,
          t
        ),
        null
      ), r;
    }
    function Kr(e, t, n) {
      var i = Ye, o = at(), r = ht;
      if (r) {
        if (n === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        n = n();
      } else if (n = t(), !Th) {
        var h = t();
        Dn(n, h) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), Th = !0);
      }
      (h = !Dn(
        (Rt || o).memoizedState,
        n
      )) && (o.memoizedState = n, Ll = !0), o = o.queue;
      var y = To.bind(null, i, o, e);
      if (ul(2048, xl, y, [e]), o.getSnapshot !== t || h || gl !== null && gl.memoizedState.tag & tu) {
        if (i.flags |= 2048, Ma(
          tu | xl,
          fi(),
          So.bind(
            null,
            i,
            o,
            n,
            t
          ),
          null
        ), xt === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        r || (or & 124) !== 0 || Am(i, t, n);
      }
      return n;
    }
    function Am(e, t, n) {
      e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Ye.updateQueue, t === null ? (t = Ls(), Ye.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
    }
    function So(e, t, n, i) {
      t.value = n, t.getSnapshot = i, Rm(t) && Eo(e);
    }
    function To(e, t, n) {
      return n(function() {
        Rm(t) && Eo(e);
      });
    }
    function Rm(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !Dn(e, n);
      } catch {
        return !0;
      }
    }
    function Eo(e) {
      var t = Il(e, 2);
      t !== null && Vt(t, e, 2);
    }
    function Jr(e) {
      var t = Yt();
      if (typeof e == "function") {
        var n = e;
        if (e = n(), If) {
          tt(!0);
          try {
            n();
          } finally {
            tt(!1);
          }
        }
      }
      return t.memoizedState = t.baseState = e, t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ft,
        lastRenderedState: e
      }, t;
    }
    function Su(e) {
      e = Jr(e);
      var t = e.queue, n = Do.bind(null, Ye, t);
      return t.dispatch = n, [e.memoizedState, n];
    }
    function ia(e) {
      var t = Yt();
      t.memoizedState = t.baseState = e;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = n, t = Ws.bind(
        null,
        Ye,
        !0,
        n
      ), n.dispatch = t, [e, t];
    }
    function Tu(e, t) {
      var n = at();
      return Da(n, Rt, e, t);
    }
    function Da(e, t, n, i) {
      return e.baseState = n, Ln(
        e,
        Rt,
        typeof i == "function" ? i : ft
      );
    }
    function Ys(e, t) {
      var n = at();
      return Rt !== null ? Da(n, Rt, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    }
    function Om(e, t, n, i, o) {
      if (ef(e))
        throw Error("Cannot update form state while rendering.");
      if (e = t.action, e !== null) {
        var r = {
          payload: o,
          action: e,
          next: null,
          isTransition: !0,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function(h) {
            r.listeners.push(h);
          }
        };
        $.T !== null ? n(!0) : r.isTransition = !1, i(r), n = t.pending, n === null ? (r.next = t.pending = r, Ao(t, r)) : (r.next = n.next, t.pending = n.next = r);
      }
    }
    function Ao(e, t) {
      var n = t.action, i = t.payload, o = e.state;
      if (t.isTransition) {
        var r = $.T, h = {};
        $.T = h, $.T._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var y = n(o, i), S = $.S;
          S !== null && S(h, y), kr(e, t, y);
        } catch (E) {
          dl(e, t, E);
        } finally {
          $.T = r, r === null && h._updatedFibers && (e = h._updatedFibers.size, h._updatedFibers.clear(), 10 < e && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          ));
        }
      } else
        try {
          h = n(o, i), kr(e, t, h);
        } catch (E) {
          dl(e, t, E);
        }
    }
    function kr(e, t, n) {
      n !== null && typeof n == "object" && typeof n.then == "function" ? (n.then(
        function(i) {
          ri(e, t, i);
        },
        function(i) {
          return dl(e, t, i);
        }
      ), t.isTransition || console.error(
        "An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop."
      )) : ri(e, t, n);
    }
    function ri(e, t, n) {
      t.status = "fulfilled", t.value = n, $r(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, Ao(e, n)));
    }
    function dl(e, t, n) {
      var i = e.pending;
      if (e.pending = null, i !== null) {
        i = i.next;
        do
          t.status = "rejected", t.reason = n, $r(t), t = t.next;
        while (t !== i);
      }
      e.action = null;
    }
    function $r(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function Dm(e, t) {
      return t;
    }
    function Ro(e, t) {
      if (ht) {
        var n = xt.formState;
        if (n !== null) {
          e: {
            var i = Ye;
            if (ht) {
              if (It) {
                t: {
                  for (var o = It, r = Bi; o.nodeType !== 8; ) {
                    if (!r) {
                      o = null;
                      break t;
                    }
                    if (o = Ol(
                      o.nextSibling
                    ), o === null) {
                      o = null;
                      break t;
                    }
                  }
                  r = o.data, o = r === d0 || r === OS ? o : null;
                }
                if (o) {
                  It = Ol(
                    o.nextSibling
                  ), i = o.data === d0;
                  break e;
                }
              }
              Sa(i);
            }
            i = !1;
          }
          i && (t = n[0]);
        }
      }
      return n = Yt(), n.memoizedState = n.baseState = t, i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Dm,
        lastRenderedState: t
      }, n.queue = i, n = Do.bind(
        null,
        Ye,
        i
      ), i.dispatch = n, i = Jr(!1), r = Ws.bind(
        null,
        Ye,
        !1,
        i.queue
      ), i = Yt(), o = {
        state: t,
        dispatch: null,
        action: e,
        pending: null
      }, i.queue = o, n = Om.bind(
        null,
        Ye,
        o,
        r,
        n
      ), o.dispatch = n, i.memoizedState = e, [t, n, !1];
    }
    function js(e) {
      var t = at();
      return mg(t, Rt, e);
    }
    function mg(e, t, n) {
      if (t = Ln(
        e,
        t,
        Dm
      )[0], e = qn(ft)[0], typeof t == "object" && t !== null && typeof t.then == "function")
        try {
          var i = ac(t);
        } catch (h) {
          throw h === sp ? ov : h;
        }
      else i = t;
      t = at();
      var o = t.queue, r = o.dispatch;
      return n !== t.memoizedState && (Ye.flags |= 2048, Ma(
        tu | xl,
        fi(),
        al.bind(null, o, n),
        null
      )), [i, r, e];
    }
    function al(e, t) {
      e.action = t;
    }
    function Oo(e) {
      var t = at(), n = Rt;
      if (n !== null)
        return mg(t, n, e);
      at(), t = t.memoizedState, n = at();
      var i = n.queue.dispatch;
      return n.memoizedState = e, [t, i, !1];
    }
    function Ma(e, t, n, i) {
      return e = {
        tag: e,
        create: n,
        deps: i,
        inst: t,
        next: null
      }, t = Ye.updateQueue, t === null && (t = Ls(), Ye.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (i = n.next, n.next = e, e.next = i, t.lastEffect = e), e;
    }
    function fi() {
      return { destroy: void 0, resource: void 0 };
    }
    function Wr(e) {
      var t = Yt();
      return e = { current: e }, t.memoizedState = e;
    }
    function Yn(e, t, n, i) {
      var o = Yt();
      i = i === void 0 ? null : i, Ye.flags |= e, o.memoizedState = Ma(
        tu | t,
        fi(),
        n,
        i
      );
    }
    function ul(e, t, n, i) {
      var o = at();
      i = i === void 0 ? null : i;
      var r = o.memoizedState.inst;
      Rt !== null && i !== null && ci(i, Rt.memoizedState.deps) ? o.memoizedState = Ma(t, r, n, i) : (Ye.flags |= e, o.memoizedState = Ma(
        tu | t,
        r,
        n,
        i
      ));
    }
    function Vs(e, t) {
      (Ye.mode & Lu) !== Bt && (Ye.mode & r1) === Bt ? Yn(276826112, xl, e, t) : Yn(8390656, xl, e, t);
    }
    function Gs(e, t) {
      var n = 4194308;
      return (Ye.mode & Lu) !== Bt && (n |= 134217728), Yn(n, $l, e, t);
    }
    function yg(e, t) {
      if (typeof t == "function") {
        e = e();
        var n = t(e);
        return function() {
          typeof n == "function" ? n() : t(null);
        };
      }
      if (t != null)
        return t.hasOwnProperty("current") || console.error(
          "Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.",
          "an object with keys {" + Object.keys(t).join(", ") + "}"
        ), e = e(), t.current = e, function() {
          t.current = null;
        };
    }
    function Xs(e, t, n) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), n = n != null ? n.concat([e]) : null;
      var i = 4194308;
      (Ye.mode & Lu) !== Bt && (i |= 134217728), Yn(
        i,
        $l,
        yg.bind(null, t, e),
        n
      );
    }
    function za(e, t, n) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), n = n != null ? n.concat([e]) : null, ul(
        4,
        $l,
        yg.bind(null, t, e),
        n
      );
    }
    function Fr(e, t) {
      return Yt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    }
    function ic(e, t) {
      var n = at();
      t = t === void 0 ? null : t;
      var i = n.memoizedState;
      return t !== null && ci(t, i[1]) ? i[0] : (n.memoizedState = [e, t], e);
    }
    function Qs(e, t) {
      var n = Yt();
      t = t === void 0 ? null : t;
      var i = e();
      if (If) {
        tt(!0);
        try {
          e();
        } finally {
          tt(!1);
        }
      }
      return n.memoizedState = [i, t], i;
    }
    function si(e, t) {
      var n = at();
      t = t === void 0 ? null : t;
      var i = n.memoizedState;
      if (t !== null && ci(t, i[1]))
        return i[0];
      if (i = e(), If) {
        tt(!0);
        try {
          e();
        } finally {
          tt(!1);
        }
      }
      return n.memoizedState = [i, t], i;
    }
    function Zs(e, t) {
      var n = Yt();
      return Js(n, e, t);
    }
    function Ir(e, t) {
      var n = at();
      return Pr(
        n,
        Rt.memoizedState,
        e,
        t
      );
    }
    function Ks(e, t) {
      var n = at();
      return Rt === null ? Js(n, e, t) : Pr(
        n,
        Rt.memoizedState,
        e,
        t
      );
    }
    function Js(e, t, n) {
      return n === void 0 || (or & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = n, e = Og(), Ye.lanes |= e, sr |= e, n);
    }
    function Pr(e, t, n, i) {
      return Dn(n, t) ? n : Sh.current !== null ? (e = Js(e, n, i), Dn(e, t) || (Ll = !0), e) : (or & 42) === 0 ? (Ll = !0, e.memoizedState = n) : (e = Og(), Ye.lanes |= e, sr |= e, t);
    }
    function Mm(e, t, n, i, o) {
      var r = _e.p;
      _e.p = r !== 0 && r < da ? r : da;
      var h = $.T, y = {};
      $.T = y, Ws(e, !1, t, n), y._updatedFibers = /* @__PURE__ */ new Set();
      try {
        var S = o(), E = $.S;
        if (E !== null && E(y, S), S !== null && typeof S == "object" && typeof S.then == "function") {
          var Z = sg(
            S,
            i
          );
          Eu(
            e,
            t,
            Z,
            un(e)
          );
        } else
          Eu(
            e,
            t,
            i,
            un(e)
          );
      } catch (F) {
        Eu(
          e,
          t,
          { then: function() {
          }, status: "rejected", reason: F },
          un(e)
        );
      } finally {
        _e.p = r, $.T = h, h === null && y._updatedFibers && (e = y._updatedFibers.size, y._updatedFibers.clear(), 10 < e && console.warn(
          "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
        ));
      }
    }
    function cc(e, t, n, i) {
      if (e.tag !== 5)
        throw Error(
          "Expected the form instance to be a HostComponent. This is a bug in React."
        );
      var o = zm(e).queue;
      Mm(
        e,
        o,
        t,
        rs,
        n === null ? O : function() {
          return xm(e), n(i);
        }
      );
    }
    function zm(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: rs,
        baseState: rs,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: ft,
          lastRenderedState: rs
        },
        next: null
      };
      var n = {};
      return t.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: ft,
          lastRenderedState: n
        },
        next: null
      }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
    }
    function xm(e) {
      $.T === null && console.error(
        "requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition."
      );
      var t = zm(e).next.queue;
      Eu(
        e,
        t,
        {},
        un(e)
      );
    }
    function xa() {
      var e = Jr(!1);
      return e = Mm.bind(
        null,
        Ye,
        e.queue,
        !0,
        !1
      ), Yt().memoizedState = e, [!1, e];
    }
    function ks() {
      var e = qn(ft)[0], t = at().memoizedState;
      return [
        typeof e == "boolean" ? e : ac(e),
        t
      ];
    }
    function $s() {
      var e = uc(ft)[0], t = at().memoizedState;
      return [
        typeof e == "boolean" ? e : ac(e),
        t
      ];
    }
    function ln() {
      return zt(Cp);
    }
    function Ua() {
      var e = Yt(), t = xt.identifierPrefix;
      if (ht) {
        var n = wc, i = Nc;
        n = (i & ~(1 << 32 - _l(i) - 1)).toString(32) + n, t = "«" + t + "R" + n, n = dv++, 0 < n && (t += "H" + n.toString(32)), t += "»";
      } else
        n = XE++, t = "«" + t + "r" + n.toString(32) + "»";
      return e.memoizedState = t;
    }
    function oc() {
      return Yt().memoizedState = Um.bind(
        null,
        Ye
      );
    }
    function Um(e, t) {
      for (var n = e.return; n !== null; ) {
        switch (n.tag) {
          case 24:
          case 3:
            var i = un(n);
            e = Aa(i);
            var o = na(n, e, i);
            o !== null && (Vt(o, n, i), ii(o, n, i)), n = Gr(), t != null && o !== null && console.error(
              "The seed argument is not enabled outside experimental channels."
            ), e.payload = { cache: n };
            return;
        }
        n = n.return;
      }
    }
    function Cm(e, t, n) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = un(e);
      var o = {
        lane: i,
        revertLane: 0,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      ef(e) ? rc(t, o) : (o = um(e, t, o, i), o !== null && (Vt(o, e, i), tf(o, t, i))), Ze(e, i);
    }
    function Do(e, t, n) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = un(e), Eu(e, t, n, i), Ze(e, i);
    }
    function Eu(e, t, n, i) {
      var o = {
        lane: i,
        revertLane: 0,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (ef(e)) rc(t, o);
      else {
        var r = e.alternate;
        if (e.lanes === 0 && (r === null || r.lanes === 0) && (r = t.lastRenderedReducer, r !== null)) {
          var h = $.H;
          $.H = ju;
          try {
            var y = t.lastRenderedState, S = r(y, n);
            if (o.hasEagerState = !0, o.eagerState = S, Dn(S, y))
              return Us(e, t, o, 0), xt === null && qr(), !1;
          } catch {
          } finally {
            $.H = h;
          }
        }
        if (n = um(e, t, o, i), n !== null)
          return Vt(n, e, i), tf(n, t, i), !0;
      }
      return !1;
    }
    function Ws(e, t, n, i) {
      if ($.T === null && $f === 0 && console.error(
        "An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."
      ), i = {
        lane: 2,
        revertLane: oy(),
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, ef(e)) {
        if (t)
          throw Error("Cannot update optimistic state while rendering.");
        console.error("Cannot call startTransition while rendering.");
      } else
        t = um(
          e,
          n,
          i,
          2
        ), t !== null && Vt(t, e, 2);
      Ze(e, 2);
    }
    function ef(e) {
      var t = e.alternate;
      return e === Ye || t !== null && t === Ye;
    }
    function rc(e, t) {
      Eh = sv = !0;
      var n = e.pending;
      n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
    }
    function tf(e, t, n) {
      if ((n & 4194048) !== 0) {
        var i = t.lanes;
        i &= e.pendingLanes, n |= i, t.lanes = n, no(e, n);
      }
    }
    function hl(e) {
      var t = We;
      return e != null && (We = t === null ? e : t.concat(e)), t;
    }
    function Mo(e, t, n) {
      for (var i = Object.keys(e.props), o = 0; o < i.length; o++) {
        var r = i[o];
        if (r !== "children" && r !== "key") {
          t === null && (t = jr(e, n.mode, 0), t._debugInfo = We, t.return = n), Se(
            t,
            function(h) {
              console.error(
                "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                h
              );
            },
            r
          );
          break;
        }
      }
    }
    function zo(e) {
      var t = yp;
      return yp += 1, Ah === null && (Ah = Sm()), Nn(Ah, e, t);
    }
    function jn(e, t) {
      t = t.props.ref, e.ref = t !== void 0 ? t : null;
    }
    function je(e, t) {
      throw t.$$typeof === Hf ? Error(
        `A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`
      ) : (e = Object.prototype.toString.call(t), Error(
        "Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead."
      ));
    }
    function mt(e, t) {
      var n = se(e) || "Component";
      G1[n] || (G1[n] = !0, t = t.displayName || t.name || "Component", e.tag === 3 ? console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,
        t,
        t,
        t
      ) : console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,
        t,
        t,
        n,
        t,
        n
      ));
    }
    function _t(e, t) {
      var n = se(e) || "Component";
      X1[n] || (X1[n] = !0, t = String(t), e.tag === 3 ? console.error(
        `Symbols are not valid as a React child.
  root.render(%s)`,
        t
      ) : console.error(
        `Symbols are not valid as a React child.
  <%s>%s</%s>`,
        n,
        t,
        n
      ));
    }
    function lf(e) {
      function t(M, z) {
        if (e) {
          var w = M.deletions;
          w === null ? (M.deletions = [z], M.flags |= 16) : w.push(z);
        }
      }
      function n(M, z) {
        if (!e) return null;
        for (; z !== null; )
          t(M, z), z = z.sibling;
        return null;
      }
      function i(M) {
        for (var z = /* @__PURE__ */ new Map(); M !== null; )
          M.key !== null ? z.set(M.key, M) : z.set(M.index, M), M = M.sibling;
        return z;
      }
      function o(M, z) {
        return M = ba(M, z), M.index = 0, M.sibling = null, M;
      }
      function r(M, z, w) {
        return M.index = w, e ? (w = M.alternate, w !== null ? (w = w.index, w < z ? (M.flags |= 67108866, z) : w) : (M.flags |= 67108866, z)) : (M.flags |= 1048576, z);
      }
      function h(M) {
        return e && M.alternate === null && (M.flags |= 67108866), M;
      }
      function y(M, z, w, ee) {
        return z === null || z.tag !== 6 ? (z = ei(
          w,
          M.mode,
          ee
        ), z.return = M, z._debugOwner = M, z._debugTask = M._debugTask, z._debugInfo = We, z) : (z = o(z, w), z.return = M, z._debugInfo = We, z);
      }
      function S(M, z, w, ee) {
        var pe = w.type;
        return pe === Ve ? (z = Z(
          M,
          z,
          w.props.children,
          ee,
          w.key
        ), Mo(w, z, M), z) : z !== null && (z.elementType === pe || cg(z, w) || typeof pe == "object" && pe !== null && pe.$$typeof === Rn && rr(pe) === z.type) ? (z = o(z, w.props), jn(z, w), z.return = M, z._debugOwner = w._owner, z._debugInfo = We, z) : (z = jr(w, M.mode, ee), jn(z, w), z.return = M, z._debugInfo = We, z);
      }
      function E(M, z, w, ee) {
        return z === null || z.tag !== 4 || z.stateNode.containerInfo !== w.containerInfo || z.stateNode.implementation !== w.implementation ? (z = rm(w, M.mode, ee), z.return = M, z._debugInfo = We, z) : (z = o(z, w.children || []), z.return = M, z._debugInfo = We, z);
      }
      function Z(M, z, w, ee, pe) {
        return z === null || z.tag !== 7 ? (z = Pu(
          w,
          M.mode,
          ee,
          pe
        ), z.return = M, z._debugOwner = M, z._debugTask = M._debugTask, z._debugInfo = We, z) : (z = o(z, w), z.return = M, z._debugInfo = We, z);
      }
      function F(M, z, w) {
        if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
          return z = ei(
            "" + z,
            M.mode,
            w
          ), z.return = M, z._debugOwner = M, z._debugTask = M._debugTask, z._debugInfo = We, z;
        if (typeof z == "object" && z !== null) {
          switch (z.$$typeof) {
            case Ri:
              return w = jr(
                z,
                M.mode,
                w
              ), jn(w, z), w.return = M, M = hl(z._debugInfo), w._debugInfo = We, We = M, w;
            case zc:
              return z = rm(
                z,
                M.mode,
                w
              ), z.return = M, z._debugInfo = We, z;
            case Rn:
              var ee = hl(z._debugInfo);
              return z = rr(z), M = F(M, z, w), We = ee, M;
          }
          if (Le(z) || k(z))
            return w = Pu(
              z,
              M.mode,
              w,
              null
            ), w.return = M, w._debugOwner = M, w._debugTask = M._debugTask, M = hl(z._debugInfo), w._debugInfo = We, We = M, w;
          if (typeof z.then == "function")
            return ee = hl(z._debugInfo), M = F(
              M,
              zo(z),
              w
            ), We = ee, M;
          if (z.$$typeof === Zn)
            return F(
              M,
              Vr(M, z),
              w
            );
          je(M, z);
        }
        return typeof z == "function" && mt(M, z), typeof z == "symbol" && _t(M, z), null;
      }
      function G(M, z, w, ee) {
        var pe = z !== null ? z.key : null;
        if (typeof w == "string" && w !== "" || typeof w == "number" || typeof w == "bigint")
          return pe !== null ? null : y(M, z, "" + w, ee);
        if (typeof w == "object" && w !== null) {
          switch (w.$$typeof) {
            case Ri:
              return w.key === pe ? (pe = hl(w._debugInfo), M = S(
                M,
                z,
                w,
                ee
              ), We = pe, M) : null;
            case zc:
              return w.key === pe ? E(M, z, w, ee) : null;
            case Rn:
              return pe = hl(w._debugInfo), w = rr(w), M = G(
                M,
                z,
                w,
                ee
              ), We = pe, M;
          }
          if (Le(w) || k(w))
            return pe !== null ? null : (pe = hl(w._debugInfo), M = Z(
              M,
              z,
              w,
              ee,
              null
            ), We = pe, M);
          if (typeof w.then == "function")
            return pe = hl(w._debugInfo), M = G(
              M,
              z,
              zo(w),
              ee
            ), We = pe, M;
          if (w.$$typeof === Zn)
            return G(
              M,
              z,
              Vr(M, w),
              ee
            );
          je(M, w);
        }
        return typeof w == "function" && mt(M, w), typeof w == "symbol" && _t(M, w), null;
      }
      function P(M, z, w, ee, pe) {
        if (typeof ee == "string" && ee !== "" || typeof ee == "number" || typeof ee == "bigint")
          return M = M.get(w) || null, y(z, M, "" + ee, pe);
        if (typeof ee == "object" && ee !== null) {
          switch (ee.$$typeof) {
            case Ri:
              return w = M.get(
                ee.key === null ? w : ee.key
              ) || null, M = hl(ee._debugInfo), z = S(
                z,
                w,
                ee,
                pe
              ), We = M, z;
            case zc:
              return M = M.get(
                ee.key === null ? w : ee.key
              ) || null, E(z, M, ee, pe);
            case Rn:
              var Ge = hl(ee._debugInfo);
              return ee = rr(ee), z = P(
                M,
                z,
                w,
                ee,
                pe
              ), We = Ge, z;
          }
          if (Le(ee) || k(ee))
            return w = M.get(w) || null, M = hl(ee._debugInfo), z = Z(
              z,
              w,
              ee,
              pe,
              null
            ), We = M, z;
          if (typeof ee.then == "function")
            return Ge = hl(ee._debugInfo), z = P(
              M,
              z,
              w,
              zo(ee),
              pe
            ), We = Ge, z;
          if (ee.$$typeof === Zn)
            return P(
              M,
              z,
              w,
              Vr(z, ee),
              pe
            );
          je(z, ee);
        }
        return typeof ee == "function" && mt(z, ee), typeof ee == "symbol" && _t(z, ee), null;
      }
      function Te(M, z, w, ee) {
        if (typeof w != "object" || w === null) return ee;
        switch (w.$$typeof) {
          case Ri:
          case zc:
            q(M, z, w);
            var pe = w.key;
            if (typeof pe != "string") break;
            if (ee === null) {
              ee = /* @__PURE__ */ new Set(), ee.add(pe);
              break;
            }
            if (!ee.has(pe)) {
              ee.add(pe);
              break;
            }
            Se(z, function() {
              console.error(
                "Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",
                pe
              );
            });
            break;
          case Rn:
            w = rr(w), Te(M, z, w, ee);
        }
        return ee;
      }
      function qe(M, z, w, ee) {
        for (var pe = null, Ge = null, Ee = null, Xe = z, Qe = z = 0, Nt = null; Xe !== null && Qe < w.length; Qe++) {
          Xe.index > Qe ? (Nt = Xe, Xe = null) : Nt = Xe.sibling;
          var rl = G(
            M,
            Xe,
            w[Qe],
            ee
          );
          if (rl === null) {
            Xe === null && (Xe = Nt);
            break;
          }
          pe = Te(
            M,
            rl,
            w[Qe],
            pe
          ), e && Xe && rl.alternate === null && t(M, Xe), z = r(rl, z, Qe), Ee === null ? Ge = rl : Ee.sibling = rl, Ee = rl, Xe = Nt;
        }
        if (Qe === w.length)
          return n(M, Xe), ht && Ii(M, Qe), Ge;
        if (Xe === null) {
          for (; Qe < w.length; Qe++)
            Xe = F(M, w[Qe], ee), Xe !== null && (pe = Te(
              M,
              Xe,
              w[Qe],
              pe
            ), z = r(
              Xe,
              z,
              Qe
            ), Ee === null ? Ge = Xe : Ee.sibling = Xe, Ee = Xe);
          return ht && Ii(M, Qe), Ge;
        }
        for (Xe = i(Xe); Qe < w.length; Qe++)
          Nt = P(
            Xe,
            M,
            Qe,
            w[Qe],
            ee
          ), Nt !== null && (pe = Te(
            M,
            Nt,
            w[Qe],
            pe
          ), e && Nt.alternate !== null && Xe.delete(
            Nt.key === null ? Qe : Nt.key
          ), z = r(
            Nt,
            z,
            Qe
          ), Ee === null ? Ge = Nt : Ee.sibling = Nt, Ee = Nt);
        return e && Xe.forEach(function(Qc) {
          return t(M, Qc);
        }), ht && Ii(M, Qe), Ge;
      }
      function Ut(M, z, w, ee) {
        if (w == null)
          throw Error("An iterable object provided no iterator.");
        for (var pe = null, Ge = null, Ee = z, Xe = z = 0, Qe = null, Nt = null, rl = w.next(); Ee !== null && !rl.done; Xe++, rl = w.next()) {
          Ee.index > Xe ? (Qe = Ee, Ee = null) : Qe = Ee.sibling;
          var Qc = G(M, Ee, rl.value, ee);
          if (Qc === null) {
            Ee === null && (Ee = Qe);
            break;
          }
          Nt = Te(
            M,
            Qc,
            rl.value,
            Nt
          ), e && Ee && Qc.alternate === null && t(M, Ee), z = r(Qc, z, Xe), Ge === null ? pe = Qc : Ge.sibling = Qc, Ge = Qc, Ee = Qe;
        }
        if (rl.done)
          return n(M, Ee), ht && Ii(M, Xe), pe;
        if (Ee === null) {
          for (; !rl.done; Xe++, rl = w.next())
            Ee = F(M, rl.value, ee), Ee !== null && (Nt = Te(
              M,
              Ee,
              rl.value,
              Nt
            ), z = r(
              Ee,
              z,
              Xe
            ), Ge === null ? pe = Ee : Ge.sibling = Ee, Ge = Ee);
          return ht && Ii(M, Xe), pe;
        }
        for (Ee = i(Ee); !rl.done; Xe++, rl = w.next())
          Qe = P(
            Ee,
            M,
            Xe,
            rl.value,
            ee
          ), Qe !== null && (Nt = Te(
            M,
            Qe,
            rl.value,
            Nt
          ), e && Qe.alternate !== null && Ee.delete(
            Qe.key === null ? Xe : Qe.key
          ), z = r(
            Qe,
            z,
            Xe
          ), Ge === null ? pe = Qe : Ge.sibling = Qe, Ge = Qe);
        return e && Ee.forEach(function(pA) {
          return t(M, pA);
        }), ht && Ii(M, Xe), pe;
      }
      function ut(M, z, w, ee) {
        if (typeof w == "object" && w !== null && w.type === Ve && w.key === null && (Mo(w, null, M), w = w.props.children), typeof w == "object" && w !== null) {
          switch (w.$$typeof) {
            case Ri:
              var pe = hl(w._debugInfo);
              e: {
                for (var Ge = w.key; z !== null; ) {
                  if (z.key === Ge) {
                    if (Ge = w.type, Ge === Ve) {
                      if (z.tag === 7) {
                        n(
                          M,
                          z.sibling
                        ), ee = o(
                          z,
                          w.props.children
                        ), ee.return = M, ee._debugOwner = w._owner, ee._debugInfo = We, Mo(w, ee, M), M = ee;
                        break e;
                      }
                    } else if (z.elementType === Ge || cg(
                      z,
                      w
                    ) || typeof Ge == "object" && Ge !== null && Ge.$$typeof === Rn && rr(Ge) === z.type) {
                      n(
                        M,
                        z.sibling
                      ), ee = o(z, w.props), jn(ee, w), ee.return = M, ee._debugOwner = w._owner, ee._debugInfo = We, M = ee;
                      break e;
                    }
                    n(M, z);
                    break;
                  } else t(M, z);
                  z = z.sibling;
                }
                w.type === Ve ? (ee = Pu(
                  w.props.children,
                  M.mode,
                  ee,
                  w.key
                ), ee.return = M, ee._debugOwner = M, ee._debugTask = M._debugTask, ee._debugInfo = We, Mo(w, ee, M), M = ee) : (ee = jr(
                  w,
                  M.mode,
                  ee
                ), jn(ee, w), ee.return = M, ee._debugInfo = We, M = ee);
              }
              return M = h(M), We = pe, M;
            case zc:
              e: {
                for (pe = w, w = pe.key; z !== null; ) {
                  if (z.key === w)
                    if (z.tag === 4 && z.stateNode.containerInfo === pe.containerInfo && z.stateNode.implementation === pe.implementation) {
                      n(
                        M,
                        z.sibling
                      ), ee = o(
                        z,
                        pe.children || []
                      ), ee.return = M, M = ee;
                      break e;
                    } else {
                      n(M, z);
                      break;
                    }
                  else t(M, z);
                  z = z.sibling;
                }
                ee = rm(
                  pe,
                  M.mode,
                  ee
                ), ee.return = M, M = ee;
              }
              return h(M);
            case Rn:
              return pe = hl(w._debugInfo), w = rr(w), M = ut(
                M,
                z,
                w,
                ee
              ), We = pe, M;
          }
          if (Le(w))
            return pe = hl(w._debugInfo), M = qe(
              M,
              z,
              w,
              ee
            ), We = pe, M;
          if (k(w)) {
            if (pe = hl(w._debugInfo), Ge = k(w), typeof Ge != "function")
              throw Error(
                "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
              );
            var Ee = Ge.call(w);
            return Ee === w ? (M.tag !== 0 || Object.prototype.toString.call(M.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(Ee) !== "[object Generator]") && (j1 || console.error(
              "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
            ), j1 = !0) : w.entries !== Ge || Gb || (console.error(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), Gb = !0), M = Ut(
              M,
              z,
              Ee,
              ee
            ), We = pe, M;
          }
          if (typeof w.then == "function")
            return pe = hl(w._debugInfo), M = ut(
              M,
              z,
              zo(w),
              ee
            ), We = pe, M;
          if (w.$$typeof === Zn)
            return ut(
              M,
              z,
              Vr(M, w),
              ee
            );
          je(M, w);
        }
        return typeof w == "string" && w !== "" || typeof w == "number" || typeof w == "bigint" ? (pe = "" + w, z !== null && z.tag === 6 ? (n(
          M,
          z.sibling
        ), ee = o(z, pe), ee.return = M, M = ee) : (n(M, z), ee = ei(
          pe,
          M.mode,
          ee
        ), ee.return = M, ee._debugOwner = M, ee._debugTask = M._debugTask, ee._debugInfo = We, M = ee), h(M)) : (typeof w == "function" && mt(M, w), typeof w == "symbol" && _t(M, w), n(M, z));
      }
      return function(M, z, w, ee) {
        var pe = We;
        We = null;
        try {
          yp = 0;
          var Ge = ut(
            M,
            z,
            w,
            ee
          );
          return Ah = null, Ge;
        } catch (Nt) {
          if (Nt === sp || Nt === ov) throw Nt;
          var Ee = U(29, Nt, null, M.mode);
          Ee.lanes = ee, Ee.return = M;
          var Xe = Ee._debugInfo = We;
          if (Ee._debugOwner = M._debugOwner, Ee._debugTask = M._debugTask, Xe != null) {
            for (var Qe = Xe.length - 1; 0 <= Qe; Qe--)
              if (typeof Xe[Qe].stack == "string") {
                Ee._debugOwner = Xe[Qe], Ee._debugTask = Xe[Qe].debugTask;
                break;
              }
          }
          return Ee;
        } finally {
          We = pe;
        }
      };
    }
    function bn(e) {
      var t = e.alternate;
      ve(
        Ul,
        Ul.current & Oh,
        e
      ), ve(nu, e, e), wi === null && (t === null || Sh.current !== null || t.memoizedState !== null) && (wi = e);
    }
    function di(e) {
      if (e.tag === 22) {
        if (ve(Ul, Ul.current, e), ve(nu, e, e), wi === null) {
          var t = e.alternate;
          t !== null && t.memoizedState !== null && (wi = e);
        }
      } else ca(e);
    }
    function ca(e) {
      ve(Ul, Ul.current, e), ve(
        nu,
        nu.current,
        e
      );
    }
    function Sn(e) {
      Oe(nu, e), wi === e && (wi = null), Oe(Ul, e);
    }
    function Au(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var n = t.memoizedState;
          if (n !== null && (n = n.dehydrated, n === null || n.data === Vc || Xa(n)))
            return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
          if ((t.flags & 128) !== 0) return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    function Hm(e) {
      if (e !== null && typeof e != "function") {
        var t = String(e);
        tS.has(t) || (tS.add(t), console.error(
          "Expected the last optional `callback` argument to be a function. Instead received: %s.",
          e
        ));
      }
    }
    function qt(e, t, n, i) {
      var o = e.memoizedState, r = n(i, o);
      if (e.mode & hn) {
        tt(!0);
        try {
          r = n(i, o);
        } finally {
          tt(!1);
        }
      }
      r === void 0 && (t = Q(t) || "Component", F1.has(t) || (F1.add(t), console.error(
        "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
        t
      ))), o = r == null ? o : Ke({}, o, r), e.memoizedState = o, e.lanes === 0 && (e.updateQueue.baseState = o);
    }
    function Fs(e, t, n, i, o, r, h) {
      var y = e.stateNode;
      if (typeof y.shouldComponentUpdate == "function") {
        if (n = y.shouldComponentUpdate(
          i,
          r,
          h
        ), e.mode & hn) {
          tt(!0);
          try {
            n = y.shouldComponentUpdate(
              i,
              r,
              h
            );
          } finally {
            tt(!1);
          }
        }
        return n === void 0 && console.error(
          "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
          Q(t) || "Component"
        ), n;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !_r(n, i) || !_r(o, r) : !0;
    }
    function Is(e, t, n, i) {
      var o = t.state;
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, i), t.state !== o && (e = se(e) || "Component", K1.has(e) || (K1.add(e), console.error(
        "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
        e
      )), Xb.enqueueReplaceState(
        t,
        t.state,
        null
      ));
    }
    function hi(e, t) {
      var n = t;
      if ("ref" in t) {
        n = {};
        for (var i in t)
          i !== "ref" && (n[i] = t[i]);
      }
      if (e = e.defaultProps) {
        n === t && (n = Ke({}, n));
        for (var o in e)
          n[o] === void 0 && (n[o] = e[o]);
      }
      return n;
    }
    function Bm(e) {
      Qb(e), console.warn(
        `%s

%s
`,
        Dh ? "An error occurred in the <" + Dh + "> component." : "An error occurred in one of your React components.",
        `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`
      );
    }
    function pg(e) {
      var t = Dh ? "The above error occurred in the <" + Dh + "> component." : "The above error occurred in one of your React components.", n = "React will try to recreate this component tree from scratch using the error boundary you provided, " + ((Zb || "Anonymous") + ".");
      if (typeof e == "object" && e !== null && typeof e.environmentName == "string") {
        var i = e.environmentName;
        e = [
          `%o

%s

%s
`,
          e,
          t,
          n
        ].slice(0), typeof e[0] == "string" ? e.splice(
          0,
          1,
          BS + e[0],
          NS,
          Hv + i + Hv,
          wS
        ) : e.splice(
          0,
          0,
          BS,
          NS,
          Hv + i + Hv,
          wS
        ), e.unshift(console), i = mA.apply(console.error, e), i();
      } else
        console.error(
          `%o

%s

%s
`,
          e,
          t,
          n
        );
    }
    function Ps(e) {
      Qb(e);
    }
    function xo(e, t) {
      try {
        Dh = t.source ? se(t.source) : null, Zb = null;
        var n = t.value;
        if ($.actQueue !== null)
          $.thrownErrors.push(n);
        else {
          var i = e.onUncaughtError;
          i(n, { componentStack: t.stack });
        }
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function ed(e, t, n) {
      try {
        Dh = n.source ? se(n.source) : null, Zb = se(t);
        var i = e.onCaughtError;
        i(n.value, {
          componentStack: n.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null
        });
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function Bl(e, t, n) {
      return n = Aa(n), n.tag = Nb, n.payload = { element: null }, n.callback = function() {
        Se(t.source, xo, e, t);
      }, n;
    }
    function jt(e) {
      return e = Aa(e), e.tag = Nb, e;
    }
    function nf(e, t, n, i) {
      var o = n.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var r = i.value;
        e.payload = function() {
          return o(r);
        }, e.callback = function() {
          og(n), Se(
            i.source,
            ed,
            t,
            n,
            i
          );
        };
      }
      var h = n.stateNode;
      h !== null && typeof h.componentDidCatch == "function" && (e.callback = function() {
        og(n), Se(
          i.source,
          ed,
          t,
          n,
          i
        ), typeof o != "function" && (hr === null ? hr = /* @__PURE__ */ new Set([this]) : hr.add(this)), ZE(this, i), typeof o == "function" || (n.lanes & 2) === 0 && console.error(
          "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
          se(n) || "Unknown"
        );
      });
    }
    function af(e, t, n, i, o) {
      if (n.flags |= 32768, Kt && qo(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        if (t = n.alternate, t !== null && Tl(
          t,
          n,
          o,
          !0
        ), ht && (_c = !0), n = nu.current, n !== null) {
          switch (n.tag) {
            case 13:
              return wi === null ? Sd() : n.alternate === null && Pt === jc && (Pt = $b), n.flags &= -257, n.flags |= 65536, n.lanes = o, i === Bb ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([i]) : t.add(i), ay(e, i, o)), !1;
            case 22:
              return n.flags |= 65536, i === Bb ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([i])
              }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([i]) : n.add(i)), ay(e, i, o)), !1;
          }
          throw Error(
            "Unexpected Suspense handler tag (" + n.tag + "). This is a bug in React."
          );
        }
        return ay(e, i, o), Sd(), !1;
      }
      if (ht)
        return _c = !0, t = nu.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, i !== xb && ho(
          gn(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",
              { cause: i }
            ),
            n
          )
        )) : (i !== xb && ho(
          gn(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering the entire root.",
              { cause: i }
            ),
            n
          )
        ), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, i = gn(i, n), o = Bl(
          e.stateNode,
          i,
          o
        ), yo(e, o), Pt !== Pf && (Pt = Uh)), !1;
      var r = gn(
        Error(
          "There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",
          { cause: i }
        ),
        n
      );
      if (Ap === null ? Ap = [r] : Ap.push(r), Pt !== Pf && (Pt = Uh), t === null) return !0;
      i = gn(i, n), n = t;
      do {
        switch (n.tag) {
          case 3:
            return n.flags |= 65536, e = o & -o, n.lanes |= e, e = Bl(
              n.stateNode,
              i,
              e
            ), yo(n, e), !1;
          case 1:
            if (t = n.type, r = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (hr === null || !hr.has(r))))
              return n.flags |= 65536, o &= -o, n.lanes |= o, o = jt(o), nf(
                o,
                e,
                n,
                i
              ), yo(n, o), !1;
        }
        n = n.return;
      } while (n !== null);
      return !1;
    }
    function Ft(e, t, n, i) {
      t.child = e === null ? Q1(t, null, n, i) : Rh(
        t,
        e.child,
        n,
        i
      );
    }
    function td(e, t, n, i, o) {
      n = n.render;
      var r = t.ref;
      if ("ref" in i) {
        var h = {};
        for (var y in i)
          y !== "ref" && (h[y] = i[y]);
      } else h = i;
      return ni(t), Y(t), i = oi(
        e,
        t,
        n,
        h,
        r,
        o
      ), y = tn(), Ae(), e !== null && !Ll ? (vu(e, t, o), Ha(e, t, o)) : (ht && y && Bs(t), t.flags |= 1, Ft(e, t, i, o), t.child);
    }
    function Ca(e, t, n, i, o) {
      if (e === null) {
        var r = n.type;
        return typeof r == "function" && !cm(r) && r.defaultProps === void 0 && n.compare === null ? (n = Fi(r), t.tag = 15, t.type = n, ud(t, r), uf(
          e,
          t,
          n,
          i,
          o
        )) : (e = Hs(
          n.type,
          null,
          i,
          t,
          t.mode,
          o
        ), e.ref = t.ref, e.return = t, t.child = e);
      }
      if (r = e.child, !sd(e, o)) {
        var h = r.memoizedProps;
        if (n = n.compare, n = n !== null ? n : _r, n(h, i) && e.ref === t.ref)
          return Ha(
            e,
            t,
            o
          );
      }
      return t.flags |= 1, e = ba(r, i), e.ref = t.ref, e.return = t, t.child = e;
    }
    function uf(e, t, n, i, o) {
      if (e !== null) {
        var r = e.memoizedProps;
        if (_r(r, i) && e.ref === t.ref && t.type === e.type)
          if (Ll = !1, t.pendingProps = i = r, sd(e, o))
            (e.flags & 131072) !== 0 && (Ll = !0);
          else
            return t.lanes = e.lanes, Ha(e, t, o);
      }
      return ad(
        e,
        t,
        n,
        i,
        o
      );
    }
    function ld(e, t, n) {
      var i = t.pendingProps, o = i.children, r = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden") {
        if ((t.flags & 128) !== 0) {
          if (i = r !== null ? r.baseLanes | n : n, e !== null) {
            for (o = t.child = e.child, r = 0; o !== null; )
              r = r | o.lanes | o.childLanes, o = o.sibling;
            t.childLanes = r & ~i;
          } else t.childLanes = 0, t.child = null;
          return nd(
            e,
            t,
            i,
            n
          );
        }
        if ((n & 536870912) !== 0)
          t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && qs(
            t,
            r !== null ? r.cachePool : null
          ), r !== null ? en(t, r) : Qr(t), di(t);
        else
          return t.lanes = t.childLanes = 536870912, nd(
            e,
            t,
            r !== null ? r.baseLanes | n : n,
            n
          );
      } else
        r !== null ? (qs(t, r.cachePool), en(t, r), ca(t), t.memoizedState = null) : (e !== null && qs(t, null), Qr(t), ca(t));
      return Ft(e, t, o, n), t.child;
    }
    function nd(e, t, n, i) {
      var o = bm();
      return o = o === null ? null : {
        parent: zl._currentValue,
        pool: o
      }, t.memoizedState = {
        baseLanes: n,
        cachePool: o
      }, e !== null && qs(t, null), Qr(t), di(t), e !== null && Tl(e, t, i, !0), null;
    }
    function cf(e, t) {
      var n = t.ref;
      if (n === null)
        e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof n != "function" && typeof n != "object")
          throw Error(
            "Expected ref to be a function, an object returned by React.createRef(), or undefined/null."
          );
        (e === null || e.ref !== n) && (t.flags |= 4194816);
      }
    }
    function ad(e, t, n, i, o) {
      if (n.prototype && typeof n.prototype.render == "function") {
        var r = Q(n) || "Unknown";
        nS[r] || (console.error(
          "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
          r,
          r
        ), nS[r] = !0);
      }
      return t.mode & hn && Yu.recordLegacyContextWarning(
        t,
        null
      ), e === null && (ud(t, t.type), n.contextTypes && (r = Q(n) || "Unknown", uS[r] || (uS[r] = !0, console.error(
        "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
        r
      )))), ni(t), Y(t), n = oi(
        e,
        t,
        n,
        i,
        void 0,
        o
      ), i = tn(), Ae(), e !== null && !Ll ? (vu(e, t, o), Ha(e, t, o)) : (ht && i && Bs(t), t.flags |= 1, Ft(e, t, n, o), t.child);
    }
    function Nm(e, t, n, i, o, r) {
      return ni(t), Y(t), Lc = -1, mp = e !== null && e.type !== t.type, t.updateQueue = null, n = bo(
        t,
        i,
        n,
        o
      ), Zr(e, t), i = tn(), Ae(), e !== null && !Ll ? (vu(e, t, r), Ha(e, t, r)) : (ht && i && Bs(t), t.flags |= 1, Ft(e, t, n, r), t.child);
    }
    function wm(e, t, n, i, o) {
      switch (x(t)) {
        case !1:
          var r = t.stateNode, h = new t.type(
            t.memoizedProps,
            r.context
          ).state;
          r.updater.enqueueSetState(r, h, null);
          break;
        case !0:
          t.flags |= 128, t.flags |= 65536, r = Error("Simulated error coming from DevTools");
          var y = o & -o;
          if (t.lanes |= y, h = xt, h === null)
            throw Error(
              "Expected a work-in-progress root. This is a bug in React. Please file an issue."
            );
          y = jt(y), nf(
            y,
            h,
            t,
            gn(r, t)
          ), yo(t, y);
      }
      if (ni(t), t.stateNode === null) {
        if (h = ir, r = n.contextType, "contextType" in n && r !== null && (r === void 0 || r.$$typeof !== Zn) && !eS.has(n) && (eS.add(n), y = r === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof r != "object" ? " However, it is set to a " + typeof r + "." : r.$$typeof === Jd ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(r).join(", ") + "}.", console.error(
          "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
          Q(n) || "Component",
          y
        )), typeof r == "object" && r !== null && (h = zt(r)), r = new n(i, h), t.mode & hn) {
          tt(!0);
          try {
            r = new n(i, h);
          } finally {
            tt(!1);
          }
        }
        if (h = t.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Xb, t.stateNode = r, r._reactInternals = t, r._reactInternalInstance = Z1, typeof n.getDerivedStateFromProps == "function" && h === null && (h = Q(n) || "Component", J1.has(h) || (J1.add(h), console.error(
          "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
          h,
          r.state === null ? "null" : "undefined",
          h
        ))), typeof n.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function") {
          var S = y = h = null;
          if (typeof r.componentWillMount == "function" && r.componentWillMount.__suppressDeprecationWarning !== !0 ? h = "componentWillMount" : typeof r.UNSAFE_componentWillMount == "function" && (h = "UNSAFE_componentWillMount"), typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? y = "componentWillReceiveProps" : typeof r.UNSAFE_componentWillReceiveProps == "function" && (y = "UNSAFE_componentWillReceiveProps"), typeof r.componentWillUpdate == "function" && r.componentWillUpdate.__suppressDeprecationWarning !== !0 ? S = "componentWillUpdate" : typeof r.UNSAFE_componentWillUpdate == "function" && (S = "UNSAFE_componentWillUpdate"), h !== null || y !== null || S !== null) {
            r = Q(n) || "Component";
            var E = typeof n.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            $1.has(r) || ($1.add(r), console.error(
              `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,
              r,
              E,
              h !== null ? `
  ` + h : "",
              y !== null ? `
  ` + y : "",
              S !== null ? `
  ` + S : ""
            ));
          }
        }
        r = t.stateNode, h = Q(n) || "Component", r.render || (n.prototype && typeof n.prototype.render == "function" ? console.error(
          "No `render` method found on the %s instance: did you accidentally return an object from the constructor?",
          h
        ) : console.error(
          "No `render` method found on the %s instance: you may have forgotten to define `render`.",
          h
        )), !r.getInitialState || r.getInitialState.isReactClassApproved || r.state || console.error(
          "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
          h
        ), r.getDefaultProps && !r.getDefaultProps.isReactClassApproved && console.error(
          "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
          h
        ), r.contextType && console.error(
          "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
          h
        ), n.childContextTypes && !P1.has(n) && (P1.add(n), console.error(
          "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
          h
        )), n.contextTypes && !I1.has(n) && (I1.add(n), console.error(
          "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",
          h
        )), typeof r.componentShouldUpdate == "function" && console.error(
          "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
          h
        ), n.prototype && n.prototype.isPureReactComponent && typeof r.shouldComponentUpdate < "u" && console.error(
          "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
          Q(n) || "A pure component"
        ), typeof r.componentDidUnmount == "function" && console.error(
          "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
          h
        ), typeof r.componentDidReceiveProps == "function" && console.error(
          "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
          h
        ), typeof r.componentWillRecieveProps == "function" && console.error(
          "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
          h
        ), typeof r.UNSAFE_componentWillRecieveProps == "function" && console.error(
          "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
          h
        ), y = r.props !== i, r.props !== void 0 && y && console.error(
          "When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
          h
        ), r.defaultProps && console.error(
          "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
          h,
          h
        ), typeof r.getSnapshotBeforeUpdate != "function" || typeof r.componentDidUpdate == "function" || k1.has(n) || (k1.add(n), console.error(
          "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
          Q(n)
        )), typeof r.getDerivedStateFromProps == "function" && console.error(
          "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          h
        ), typeof r.getDerivedStateFromError == "function" && console.error(
          "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          h
        ), typeof n.getSnapshotBeforeUpdate == "function" && console.error(
          "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
          h
        ), (y = r.state) && (typeof y != "object" || Le(y)) && console.error("%s.state: must be set to an object or null", h), typeof r.getChildContext == "function" && typeof n.childContextTypes != "object" && console.error(
          "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
          h
        ), r = t.stateNode, r.props = i, r.state = t.memoizedState, r.refs = {}, Pl(t), h = n.contextType, r.context = typeof h == "object" && h !== null ? zt(h) : ir, r.state === i && (h = Q(n) || "Component", W1.has(h) || (W1.add(h), console.error(
          "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
          h
        ))), t.mode & hn && Yu.recordLegacyContextWarning(
          t,
          r
        ), Yu.recordUnsafeLifecycleWarnings(
          t,
          r
        ), r.state = t.memoizedState, h = n.getDerivedStateFromProps, typeof h == "function" && (qt(
          t,
          n,
          h,
          i
        ), r.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (h = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), h !== r.state && (console.error(
          "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          se(t) || "Component"
        ), Xb.enqueueReplaceState(
          r,
          r.state,
          null
        )), po(t, i, r, o), Ra(), r.state = t.memoizedState), typeof r.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Lu) !== Bt && (t.flags |= 134217728), r = !0;
      } else if (e === null) {
        r = t.stateNode;
        var Z = t.memoizedProps;
        y = hi(n, Z), r.props = y;
        var F = r.context;
        S = n.contextType, h = ir, typeof S == "object" && S !== null && (h = zt(S)), E = n.getDerivedStateFromProps, S = typeof E == "function" || typeof r.getSnapshotBeforeUpdate == "function", Z = t.pendingProps !== Z, S || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (Z || F !== h) && Is(
          t,
          r,
          i,
          h
        ), cr = !1;
        var G = t.memoizedState;
        r.state = G, po(t, i, r, o), Ra(), F = t.memoizedState, Z || G !== F || cr ? (typeof E == "function" && (qt(
          t,
          n,
          E,
          i
        ), F = t.memoizedState), (y = cr || Fs(
          t,
          n,
          y,
          i,
          G,
          F,
          h
        )) ? (S || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Lu) !== Bt && (t.flags |= 134217728)) : (typeof r.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Lu) !== Bt && (t.flags |= 134217728), t.memoizedProps = i, t.memoizedState = F), r.props = i, r.state = F, r.context = h, r = y) : (typeof r.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Lu) !== Bt && (t.flags |= 134217728), r = !1);
      } else {
        r = t.stateNode, ui(e, t), h = t.memoizedProps, S = hi(n, h), r.props = S, E = t.pendingProps, G = r.context, F = n.contextType, y = ir, typeof F == "object" && F !== null && (y = zt(F)), Z = n.getDerivedStateFromProps, (F = typeof Z == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (h !== E || G !== y) && Is(
          t,
          r,
          i,
          y
        ), cr = !1, G = t.memoizedState, r.state = G, po(t, i, r, o), Ra();
        var P = t.memoizedState;
        h !== E || G !== P || cr || e !== null && e.dependencies !== null && li(e.dependencies) ? (typeof Z == "function" && (qt(
          t,
          n,
          Z,
          i
        ), P = t.memoizedState), (S = cr || Fs(
          t,
          n,
          S,
          i,
          G,
          P,
          y
        ) || e !== null && e.dependencies !== null && li(e.dependencies)) ? (F || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(i, P, y), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(
          i,
          P,
          y
        )), typeof r.componentDidUpdate == "function" && (t.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || h === e.memoizedProps && G === e.memoizedState || (t.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || h === e.memoizedProps && G === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = P), r.props = i, r.state = P, r.context = y, r = S) : (typeof r.componentDidUpdate != "function" || h === e.memoizedProps && G === e.memoizedState || (t.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || h === e.memoizedProps && G === e.memoizedState || (t.flags |= 1024), r = !1);
      }
      if (y = r, cf(e, t), h = (t.flags & 128) !== 0, y || h) {
        if (y = t.stateNode, Dr(t), h && typeof n.getDerivedStateFromError != "function")
          n = null, kn = -1;
        else {
          if (Y(t), n = U1(y), t.mode & hn) {
            tt(!0);
            try {
              U1(y);
            } finally {
              tt(!1);
            }
          }
          Ae();
        }
        t.flags |= 1, e !== null && h ? (t.child = Rh(
          t,
          e.child,
          null,
          o
        ), t.child = Rh(
          t,
          null,
          n,
          o
        )) : Ft(e, t, n, o), t.memoizedState = y.state, e = t.child;
      } else
        e = Ha(
          e,
          t,
          o
        );
      return o = t.stateNode, r && o.props !== i && (Mh || console.error(
        "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
        se(t) || "a component"
      ), Mh = !0), e;
    }
    function _m(e, t, n, i) {
      return ec(), t.flags |= 256, Ft(e, t, n, i), t.child;
    }
    function ud(e, t) {
      t && t.childContextTypes && console.error(
        `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
        t.displayName || t.name || "Component"
      ), typeof t.getDerivedStateFromProps == "function" && (e = Q(t) || "Unknown", iS[e] || (console.error(
        "%s: Function components do not support getDerivedStateFromProps.",
        e
      ), iS[e] = !0)), typeof t.contextType == "object" && t.contextType !== null && (t = Q(t) || "Unknown", aS[t] || (console.error(
        "%s: Function components do not support contextType.",
        t
      ), aS[t] = !0));
    }
    function of(e) {
      return { baseLanes: e, cachePool: dg() };
    }
    function id(e, t, n) {
      return e = e !== null ? e.childLanes & ~n : 0, t && (e |= ya), e;
    }
    function gg(e, t, n) {
      var i, o = t.pendingProps;
      B(t) && (t.flags |= 128);
      var r = !1, h = (t.flags & 128) !== 0;
      if ((i = h) || (i = e !== null && e.memoizedState === null ? !1 : (Ul.current & pp) !== 0), i && (r = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
        if (ht) {
          if (r ? bn(t) : ca(t), ht) {
            var y = It, S;
            if (!(S = !y)) {
              e: {
                var E = y;
                for (S = Bi; E.nodeType !== 8; ) {
                  if (!S) {
                    S = null;
                    break e;
                  }
                  if (E = Ol(E.nextSibling), E === null) {
                    S = null;
                    break e;
                  }
                }
                S = E;
              }
              S !== null ? (Pn(), t.memoizedState = {
                dehydrated: S,
                treeContext: Kf !== null ? { id: Nc, overflow: wc } : null,
                retryLane: 536870912,
                hydrationErrors: null
              }, E = U(18, null, null, Bt), E.stateNode = S, E.return = t, t.child = E, Mn = t, It = null, S = !0) : S = !1, S = !S;
            }
            S && (fm(
              t,
              y
            ), Sa(t));
          }
          if (y = t.memoizedState, y !== null && (y = y.dehydrated, y !== null))
            return Xa(y) ? t.lanes = 32 : t.lanes = 536870912, null;
          Sn(t);
        }
        return y = o.children, o = o.fallback, r ? (ca(t), r = t.mode, y = rf(
          {
            mode: "hidden",
            children: y
          },
          r
        ), o = Pu(
          o,
          r,
          n,
          null
        ), y.return = t, o.return = t, y.sibling = o, t.child = y, r = t.child, r.memoizedState = of(n), r.childLanes = id(
          e,
          i,
          n
        ), t.memoizedState = Jb, o) : (bn(t), cd(
          t,
          y
        ));
      }
      var Z = e.memoizedState;
      if (Z !== null && (y = Z.dehydrated, y !== null)) {
        if (h)
          t.flags & 256 ? (bn(t), t.flags &= -257, t = od(
            e,
            t,
            n
          )) : t.memoizedState !== null ? (ca(t), t.child = e.child, t.flags |= 128, t = null) : (ca(t), r = o.fallback, y = t.mode, o = rf(
            {
              mode: "visible",
              children: o.children
            },
            y
          ), r = Pu(
            r,
            y,
            n,
            null
          ), r.flags |= 2, o.return = t, r.return = t, o.sibling = r, t.child = o, Rh(
            t,
            e.child,
            null,
            n
          ), o = t.child, o.memoizedState = of(n), o.childLanes = id(
            e,
            i,
            n
          ), t.memoizedState = Jb, t = r);
        else if (bn(t), ht && console.error(
          "We should not be hydrating here. This is a bug in React. Please file a bug."
        ), Xa(y)) {
          if (i = y.nextSibling && y.nextSibling.dataset, i) {
            S = i.dgst;
            var F = i.msg;
            E = i.stck;
            var G = i.cstck;
          }
          y = F, i = S, o = E, S = r = G, r = Error(y || "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."), r.stack = o || "", r.digest = i, i = S === void 0 ? null : S, o = {
            value: r,
            source: null,
            stack: i
          }, typeof i == "string" && Mb.set(
            r,
            o
          ), ho(o), t = od(
            e,
            t,
            n
          );
        } else if (Ll || Tl(
          e,
          t,
          n,
          !1
        ), i = (n & e.childLanes) !== 0, Ll || i) {
          if (i = xt, i !== null && (o = n & -n, o = (o & 42) !== 0 ? 1 : jl(
            o
          ), o = (o & (i.suspendedLanes | n)) !== 0 ? 0 : o, o !== 0 && o !== Z.retryLane))
            throw Z.retryLane = o, Il(
              e,
              o
            ), Vt(
              i,
              e,
              o
            ), lS;
          y.data === Vc || Sd(), t = od(
            e,
            t,
            n
          );
        } else
          y.data === Vc ? (t.flags |= 192, t.child = e.child, t = null) : (e = Z.treeContext, It = Ol(
            y.nextSibling
          ), Mn = t, ht = !0, Jf = null, _c = !1, Pa = null, Bi = !1, e !== null && (Pn(), Fa[Ia++] = Nc, Fa[Ia++] = wc, Fa[Ia++] = Kf, Nc = e.id, wc = e.overflow, Kf = t), t = cd(
            t,
            o.children
          ), t.flags |= 4096);
        return t;
      }
      return r ? (ca(t), r = o.fallback, y = t.mode, S = e.child, E = S.sibling, o = ba(
        S,
        {
          mode: "hidden",
          children: o.children
        }
      ), o.subtreeFlags = S.subtreeFlags & 65011712, E !== null ? r = ba(
        E,
        r
      ) : (r = Pu(
        r,
        y,
        n,
        null
      ), r.flags |= 2), r.return = t, o.return = t, o.sibling = r, t.child = o, o = r, r = t.child, y = e.child.memoizedState, y === null ? y = of(n) : (S = y.cachePool, S !== null ? (E = zl._currentValue, S = S.parent !== E ? { parent: E, pool: E } : S) : S = dg(), y = {
        baseLanes: y.baseLanes | n,
        cachePool: S
      }), r.memoizedState = y, r.childLanes = id(
        e,
        i,
        n
      ), t.memoizedState = Jb, o) : (bn(t), n = e.child, e = n.sibling, n = ba(n, {
        mode: "visible",
        children: o.children
      }), n.return = t, n.sibling = null, e !== null && (i = t.deletions, i === null ? (t.deletions = [e], t.flags |= 16) : i.push(e)), t.child = n, t.memoizedState = null, n);
    }
    function cd(e, t) {
      return t = rf(
        { mode: "visible", children: t },
        e.mode
      ), t.return = e, e.child = t;
    }
    function rf(e, t) {
      return e = U(22, e, null, t), e.lanes = 0, e.stateNode = {
        _visibility: ev,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }, e;
    }
    function od(e, t, n) {
      return Rh(t, e.child, null, n), e = cd(
        t,
        t.pendingProps.children
      ), e.flags |= 2, t.memoizedState = null, e;
    }
    function rd(e, t, n) {
      e.lanes |= t;
      var i = e.alternate;
      i !== null && (i.lanes |= t), ym(
        e.return,
        t,
        n
      );
    }
    function qm(e, t) {
      var n = Le(e);
      return e = !n && typeof k(e) == "function", n || e ? (n = n ? "array" : "iterable", console.error(
        "A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",
        n,
        t,
        n
      ), !1) : !0;
    }
    function fd(e, t, n, i, o) {
      var r = e.memoizedState;
      r === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: n,
        tailMode: o
      } : (r.isBackwards = t, r.rendering = null, r.renderingStartTime = 0, r.last = i, r.tail = n, r.tailMode = o);
    }
    function Lm(e, t, n) {
      var i = t.pendingProps, o = i.revealOrder, r = i.tail;
      if (i = i.children, o !== void 0 && o !== "forwards" && o !== "backwards" && o !== "together" && !cS[o])
        if (cS[o] = !0, typeof o == "string")
          switch (o.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',
                o,
                o.toLowerCase()
              );
              break;
            case "forward":
            case "backward":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',
                o,
                o.toLowerCase()
              );
              break;
            default:
              console.error(
                '"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
                o
              );
          }
        else
          console.error(
            '%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
            o
          );
      r === void 0 || Kb[r] || (r !== "collapsed" && r !== "hidden" ? (Kb[r] = !0, console.error(
        '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?',
        r
      )) : o !== "forwards" && o !== "backwards" && (Kb[r] = !0, console.error(
        '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
        r
      )));
      e: if ((o === "forwards" || o === "backwards") && i !== void 0 && i !== null && i !== !1)
        if (Le(i)) {
          for (var h = 0; h < i.length; h++)
            if (!qm(i[h], h)) break e;
        } else if (h = k(i), typeof h == "function") {
          if (h = h.call(i))
            for (var y = h.next(), S = 0; !y.done; y = h.next()) {
              if (!qm(y.value, S)) break e;
              S++;
            }
        } else
          console.error(
            'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
            o
          );
      if (Ft(e, t, i, n), i = Ul.current, (i & pp) !== 0)
        i = i & Oh | pp, t.flags |= 128;
      else {
        if (e !== null && (e.flags & 128) !== 0)
          e: for (e = t.child; e !== null; ) {
            if (e.tag === 13)
              e.memoizedState !== null && rd(
                e,
                n,
                t
              );
            else if (e.tag === 19)
              rd(e, n, t);
            else if (e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break e;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t)
                break e;
              e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
          }
        i &= Oh;
      }
      switch (ve(Ul, i, t), o) {
        case "forwards":
          for (n = t.child, o = null; n !== null; )
            e = n.alternate, e !== null && Au(e) === null && (o = n), n = n.sibling;
          n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), fd(
            t,
            !1,
            o,
            n,
            r
          );
          break;
        case "backwards":
          for (n = null, o = t.child, t.child = null; o !== null; ) {
            if (e = o.alternate, e !== null && Au(e) === null) {
              t.child = o;
              break;
            }
            e = o.sibling, o.sibling = n, n = o, o = e;
          }
          fd(
            t,
            !0,
            n,
            null,
            r
          );
          break;
        case "together":
          fd(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function Ha(e, t, n) {
      if (e !== null && (t.dependencies = e.dependencies), kn = -1, sr |= t.lanes, (n & t.childLanes) === 0)
        if (e !== null) {
          if (Tl(
            e,
            t,
            n,
            !1
          ), (n & t.childLanes) === 0)
            return null;
        } else return null;
      if (e !== null && t.child !== e.child)
        throw Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        for (e = t.child, n = ba(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
          e = e.sibling, n = n.sibling = ba(e, e.pendingProps), n.return = t;
        n.sibling = null;
      }
      return t.child;
    }
    function sd(e, t) {
      return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && li(e)));
    }
    function ob(e, t, n) {
      switch (t.tag) {
        case 3:
          De(
            t,
            t.stateNode.containerInfo
          ), ti(
            t,
            zl,
            e.memoizedState.cache
          ), ec();
          break;
        case 27:
        case 5:
          I(t);
          break;
        case 4:
          De(
            t,
            t.stateNode.containerInfo
          );
          break;
        case 10:
          ti(
            t,
            t.type,
            t.memoizedProps.value
          );
          break;
        case 12:
          (n & t.childLanes) !== 0 && (t.flags |= 4), t.flags |= 2048;
          var i = t.stateNode;
          i.effectDuration = -0, i.passiveEffectDuration = -0;
          break;
        case 13:
          if (i = t.memoizedState, i !== null)
            return i.dehydrated !== null ? (bn(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? gg(
              e,
              t,
              n
            ) : (bn(t), e = Ha(
              e,
              t,
              n
            ), e !== null ? e.sibling : null);
          bn(t);
          break;
        case 19:
          var o = (e.flags & 128) !== 0;
          if (i = (n & t.childLanes) !== 0, i || (Tl(
            e,
            t,
            n,
            !1
          ), i = (n & t.childLanes) !== 0), o) {
            if (i)
              return Lm(
                e,
                t,
                n
              );
            t.flags |= 128;
          }
          if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), ve(
            Ul,
            Ul.current,
            t
          ), i) break;
          return null;
        case 22:
        case 23:
          return t.lanes = 0, ld(e, t, n);
        case 24:
          ti(
            t,
            zl,
            e.memoizedState.cache
          );
      }
      return Ha(e, t, n);
    }
    function dd(e, t, n) {
      if (t._debugNeedsRemount && e !== null) {
        n = Hs(
          t.type,
          t.key,
          t.pendingProps,
          t._debugOwner || null,
          t.mode,
          t.lanes
        ), n._debugStack = t._debugStack, n._debugTask = t._debugTask;
        var i = t.return;
        if (i === null) throw Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, n.index = t.index, n.sibling = t.sibling, n.return = t.return, n.ref = t.ref, n._debugInfo = t._debugInfo, t === i.child)
          i.child = n;
        else {
          var o = i.child;
          if (o === null)
            throw Error("Expected parent to have a child.");
          for (; o.sibling !== t; )
            if (o = o.sibling, o === null)
              throw Error("Expected to find the previous sibling.");
          o.sibling = n;
        }
        return t = i.deletions, t === null ? (i.deletions = [e], i.flags |= 16) : t.push(e), n.flags |= 2, n;
      }
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps || t.type !== e.type)
          Ll = !0;
        else {
          if (!sd(e, n) && (t.flags & 128) === 0)
            return Ll = !1, ob(
              e,
              t,
              n
            );
          Ll = (e.flags & 131072) !== 0;
        }
      else
        Ll = !1, (i = ht) && (Pn(), i = (t.flags & 1048576) !== 0), i && (i = t.index, Pn(), rg(t, lv, i));
      switch (t.lanes = 0, t.tag) {
        case 16:
          e: if (i = t.pendingProps, e = rr(t.elementType), t.type = e, typeof e == "function")
            cm(e) ? (i = hi(
              e,
              i
            ), t.tag = 1, t.type = e = Fi(e), t = wm(
              null,
              t,
              e,
              i,
              n
            )) : (t.tag = 0, ud(t, e), t.type = e = Fi(e), t = ad(
              null,
              t,
              e,
              i,
              n
            ));
          else {
            if (e != null) {
              if (o = e.$$typeof, o === Cu) {
                t.tag = 11, t.type = e = im(e), t = td(
                  null,
                  t,
                  e,
                  i,
                  n
                );
                break e;
              } else if (o === Bf) {
                t.tag = 14, t = Ca(
                  null,
                  t,
                  e,
                  i,
                  n
                );
                break e;
              }
            }
            throw t = "", e !== null && typeof e == "object" && e.$$typeof === Rn && (t = " Did you wrap a component in React.lazy() more than once?"), e = Q(e) || e, Error(
              "Element type is invalid. Received a promise that resolves to: " + e + ". Lazy element type must resolve to a class or function." + t
            );
          }
          return t;
        case 0:
          return ad(
            e,
            t,
            t.type,
            t.pendingProps,
            n
          );
        case 1:
          return i = t.type, o = hi(
            i,
            t.pendingProps
          ), wm(
            e,
            t,
            i,
            o,
            n
          );
        case 3:
          e: {
            if (De(
              t,
              t.stateNode.containerInfo
            ), e === null)
              throw Error(
                "Should have a current fiber. This is a bug in React."
              );
            i = t.pendingProps;
            var r = t.memoizedState;
            o = r.element, ui(e, t), po(t, i, null, n);
            var h = t.memoizedState;
            if (i = h.cache, ti(t, zl, i), i !== r.cache && pm(
              t,
              [zl],
              n,
              !0
            ), Ra(), i = h.element, r.isDehydrated)
              if (r = {
                element: i,
                isDehydrated: !1,
                cache: h.cache
              }, t.updateQueue.baseState = r, t.memoizedState = r, t.flags & 256) {
                t = _m(
                  e,
                  t,
                  i,
                  n
                );
                break e;
              } else if (i !== o) {
                o = gn(
                  Error(
                    "This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."
                  ),
                  t
                ), ho(o), t = _m(
                  e,
                  t,
                  i,
                  n
                );
                break e;
              } else {
                switch (e = t.stateNode.containerInfo, e.nodeType) {
                  case 9:
                    e = e.body;
                    break;
                  default:
                    e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
                }
                for (It = Ol(e.firstChild), Mn = t, ht = !0, Jf = null, _c = !1, Pa = null, Bi = !0, e = Q1(
                  t,
                  null,
                  i,
                  n
                ), t.child = e; e; )
                  e.flags = e.flags & -3 | 4096, e = e.sibling;
              }
            else {
              if (ec(), i === o) {
                t = Ha(
                  e,
                  t,
                  n
                );
                break e;
              }
              Ft(
                e,
                t,
                i,
                n
              );
            }
            t = t.child;
          }
          return t;
        case 26:
          return cf(e, t), e === null ? (e = Uu(
            t.type,
            null,
            t.pendingProps,
            null
          )) ? t.memoizedState = e : ht || (e = t.type, n = t.pendingProps, i = fe(
            Za.current
          ), i = Pe(
            i
          ).createElement(e), i[ql] = t, i[sn] = n, Xt(i, e, n), fl(i), t.stateNode = i) : t.memoizedState = Uu(
            t.type,
            e.memoizedProps,
            t.pendingProps,
            e.memoizedState
          ), null;
        case 27:
          return I(t), e === null && ht && (i = fe(Za.current), o = N(), i = t.stateNode = Ay(
            t.type,
            t.pendingProps,
            i,
            o,
            !1
          ), _c || (o = At(
            i,
            t.type,
            t.pendingProps,
            o
          ), o !== null && (ea(t, 0).serverProps = o)), Mn = t, Bi = !0, o = It, Ga(t.type) ? (p0 = o, It = Ol(
            i.firstChild
          )) : It = o), Ft(
            e,
            t,
            t.pendingProps.children,
            n
          ), cf(e, t), e === null && (t.flags |= 4194304), t.child;
        case 5:
          return e === null && ht && (r = N(), i = As(
            t.type,
            r.ancestorInfo
          ), o = It, (h = !o) || (h = Si(
            o,
            t.type,
            t.pendingProps,
            Bi
          ), h !== null ? (t.stateNode = h, _c || (r = At(
            h,
            t.type,
            t.pendingProps,
            r
          ), r !== null && (ea(t, 0).serverProps = r)), Mn = t, It = Ol(
            h.firstChild
          ), Bi = !1, r = !0) : r = !1, h = !r), h && (i && fm(t, o), Sa(t))), I(t), o = t.type, r = t.pendingProps, h = e !== null ? e.memoizedProps : null, i = r.children, Va(o, r) ? i = null : h !== null && Va(o, h) && (t.flags |= 32), t.memoizedState !== null && (o = oi(
            e,
            t,
            _n,
            null,
            null,
            n
          ), Cp._currentValue = o), cf(e, t), Ft(
            e,
            t,
            i,
            n
          ), t.child;
        case 6:
          return e === null && ht && (e = t.pendingProps, n = N(), i = n.ancestorInfo.current, e = i != null ? Hr(
            e,
            i.tag,
            n.ancestorInfo.implicitRootScope
          ) : !0, n = It, (i = !n) || (i = Rl(
            n,
            t.pendingProps,
            Bi
          ), i !== null ? (t.stateNode = i, Mn = t, It = null, i = !0) : i = !1, i = !i), i && (e && fm(t, n), Sa(t))), null;
        case 13:
          return gg(e, t, n);
        case 4:
          return De(
            t,
            t.stateNode.containerInfo
          ), i = t.pendingProps, e === null ? t.child = Rh(
            t,
            null,
            i,
            n
          ) : Ft(
            e,
            t,
            i,
            n
          ), t.child;
        case 11:
          return td(
            e,
            t,
            t.type,
            t.pendingProps,
            n
          );
        case 7:
          return Ft(
            e,
            t,
            t.pendingProps,
            n
          ), t.child;
        case 8:
          return Ft(
            e,
            t,
            t.pendingProps.children,
            n
          ), t.child;
        case 12:
          return t.flags |= 4, t.flags |= 2048, i = t.stateNode, i.effectDuration = -0, i.passiveEffectDuration = -0, Ft(
            e,
            t,
            t.pendingProps.children,
            n
          ), t.child;
        case 10:
          return i = t.type, o = t.pendingProps, r = o.value, "value" in o || oS || (oS = !0, console.error(
            "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"
          )), ti(t, i, r), Ft(
            e,
            t,
            o.children,
            n
          ), t.child;
        case 9:
          return o = t.type._context, i = t.pendingProps.children, typeof i != "function" && console.error(
            "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
          ), ni(t), o = zt(o), Y(t), i = jb(
            i,
            o,
            void 0
          ), Ae(), t.flags |= 1, Ft(
            e,
            t,
            i,
            n
          ), t.child;
        case 14:
          return Ca(
            e,
            t,
            t.type,
            t.pendingProps,
            n
          );
        case 15:
          return uf(
            e,
            t,
            t.type,
            t.pendingProps,
            n
          );
        case 19:
          return Lm(
            e,
            t,
            n
          );
        case 31:
          return i = t.pendingProps, n = t.mode, i = {
            mode: i.mode,
            children: i.children
          }, e === null ? (e = rf(
            i,
            n
          ), e.ref = t.ref, t.child = e, e.return = t, t = e) : (e = ba(e.child, i), e.ref = t.ref, t.child = e, e.return = t, t = e), t;
        case 22:
          return ld(e, t, n);
        case 24:
          return ni(t), i = zt(zl), e === null ? (o = bm(), o === null && (o = xt, r = Gr(), o.pooledCache = r, tc(r), r !== null && (o.pooledCacheLanes |= n), o = r), t.memoizedState = {
            parent: i,
            cache: o
          }, Pl(t), ti(t, zl, o)) : ((e.lanes & n) !== 0 && (ui(e, t), po(t, null, null, n), Ra()), o = e.memoizedState, r = t.memoizedState, o.parent !== i ? (o = {
            parent: i,
            cache: i
          }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), ti(t, zl, i)) : (i = r.cache, ti(t, zl, i), i !== o.cache && pm(
            t,
            [zl],
            n,
            !0
          ))), Ft(
            e,
            t,
            t.pendingProps.children,
            n
          ), t.child;
        case 29:
          throw t.pendingProps;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function nn(e) {
      e.flags |= 4;
    }
    function ff(e, t) {
      if (t.type !== "stylesheet" || (t.state.loading & au) !== os)
        e.flags &= -16777217;
      else if (e.flags |= 16777216, !Rf(t)) {
        if (t = nu.current, t !== null && ((lt & 4194048) === lt ? wi !== null : (lt & 62914560) !== lt && (lt & 536870912) === 0 || t !== wi))
          throw dp = Bb, v1;
        e.flags |= 8192;
      }
    }
    function sf(e, t) {
      t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Ar() : 536870912, e.lanes |= t, ls |= t);
    }
    function mi(e, t) {
      if (!ht)
        switch (e.tailMode) {
          case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
              t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
          case "collapsed":
            n = e.tail;
            for (var i = null; n !== null; )
              n.alternate !== null && (i = n), n = n.sibling;
            i === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : i.sibling = null;
        }
    }
    function St(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, n = 0, i = 0;
      if (t)
        if ((e.mode & kl) !== Bt) {
          for (var o = e.selfBaseDuration, r = e.child; r !== null; )
            n |= r.lanes | r.childLanes, i |= r.subtreeFlags & 65011712, i |= r.flags & 65011712, o += r.treeBaseDuration, r = r.sibling;
          e.treeBaseDuration = o;
        } else
          for (o = e.child; o !== null; )
            n |= o.lanes | o.childLanes, i |= o.subtreeFlags & 65011712, i |= o.flags & 65011712, o.return = e, o = o.sibling;
      else if ((e.mode & kl) !== Bt) {
        o = e.actualDuration, r = e.selfBaseDuration;
        for (var h = e.child; h !== null; )
          n |= h.lanes | h.childLanes, i |= h.subtreeFlags, i |= h.flags, o += h.actualDuration, r += h.treeBaseDuration, h = h.sibling;
        e.actualDuration = o, e.treeBaseDuration = r;
      } else
        for (o = e.child; o !== null; )
          n |= o.lanes | o.childLanes, i |= o.subtreeFlags, i |= o.flags, o.return = e, o = o.sibling;
      return e.subtreeFlags |= i, e.childLanes = n, t;
    }
    function vg(e, t, n) {
      var i = t.pendingProps;
      switch (Ns(t), t.tag) {
        case 31:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return St(t), null;
        case 1:
          return St(t), null;
        case 3:
          return n = t.stateNode, i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), pu(zl, t), ot(t), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Pi(t) ? (mm(), nn(t)) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, hm())), St(t), null;
        case 26:
          return n = t.memoizedState, e === null ? (nn(t), n !== null ? (St(t), ff(
            t,
            n
          )) : (St(t), t.flags &= -16777217)) : n ? n !== e.memoizedState ? (nn(t), St(t), ff(
            t,
            n
          )) : (St(t), t.flags &= -16777217) : (e.memoizedProps !== i && nn(t), St(t), t.flags &= -16777217), null;
        case 27:
          oe(t), n = fe(Za.current);
          var o = t.type;
          if (e !== null && t.stateNode != null)
            e.memoizedProps !== i && nn(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return St(t), null;
            }
            e = N(), Pi(t) ? sm(t) : (e = Ay(
              o,
              i,
              n,
              e,
              !0
            ), t.stateNode = e, nn(t));
          }
          return St(t), null;
        case 5:
          if (oe(t), n = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== i && nn(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return St(t), null;
            }
            if (o = N(), Pi(t))
              sm(t);
            else {
              switch (e = fe(Za.current), As(n, o.ancestorInfo), o = o.context, e = Pe(e), o) {
                case _h:
                  e = e.createElementNS(ur, n);
                  break;
                case xv:
                  e = e.createElementNS(
                    Qf,
                    n
                  );
                  break;
                default:
                  switch (n) {
                    case "svg":
                      e = e.createElementNS(
                        ur,
                        n
                      );
                      break;
                    case "math":
                      e = e.createElementNS(
                        Qf,
                        n
                      );
                      break;
                    case "script":
                      e = e.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                      break;
                    case "select":
                      e = typeof i.is == "string" ? e.createElement("select", { is: i.is }) : e.createElement("select"), i.multiple ? e.multiple = !0 : i.size && (e.size = i.size);
                      break;
                    default:
                      e = typeof i.is == "string" ? e.createElement(n, {
                        is: i.is
                      }) : e.createElement(n), n.indexOf("-") === -1 && (n !== n.toLowerCase() && console.error(
                        "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",
                        n
                      ), Object.prototype.toString.call(e) !== "[object HTMLUnknownElement]" || Bu.call(
                        MS,
                        n
                      ) || (MS[n] = !0, console.error(
                        "The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",
                        n
                      )));
                  }
              }
              e[ql] = t, e[sn] = i;
              e: for (o = t.child; o !== null; ) {
                if (o.tag === 5 || o.tag === 6)
                  e.appendChild(o.stateNode);
                else if (o.tag !== 4 && o.tag !== 27 && o.child !== null) {
                  o.child.return = o, o = o.child;
                  continue;
                }
                if (o === t) break e;
                for (; o.sibling === null; ) {
                  if (o.return === null || o.return === t)
                    break e;
                  o = o.return;
                }
                o.sibling.return = o.return, o = o.sibling;
              }
              t.stateNode = e;
              e: switch (Xt(e, n, i), n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  e = !!i.autoFocus;
                  break e;
                case "img":
                  e = !0;
                  break e;
                default:
                  e = !1;
              }
              e && nn(t);
            }
          }
          return St(t), t.flags &= -16777217, null;
        case 6:
          if (e && t.stateNode != null)
            e.memoizedProps !== i && nn(t);
          else {
            if (typeof i != "string" && t.stateNode === null)
              throw Error(
                "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
              );
            if (e = fe(Za.current), n = N(), Pi(t)) {
              e = t.stateNode, n = t.memoizedProps, o = !_c, i = null;
              var r = Mn;
              if (r !== null)
                switch (r.tag) {
                  case 3:
                    o && (o = Ld(
                      e,
                      n,
                      i
                    ), o !== null && (ea(t, 0).serverProps = o));
                    break;
                  case 27:
                  case 5:
                    i = r.memoizedProps, o && (o = Ld(
                      e,
                      n,
                      i
                    ), o !== null && (ea(
                      t,
                      0
                    ).serverProps = o));
                }
              e[ql] = t, e = !!(e.nodeValue === n || i !== null && i.suppressHydrationWarning === !0 || hy(e.nodeValue, n)), e || Sa(t);
            } else
              o = n.ancestorInfo.current, o != null && Hr(
                i,
                o.tag,
                n.ancestorInfo.implicitRootScope
              ), e = Pe(e).createTextNode(
                i
              ), e[ql] = t, t.stateNode = e;
          }
          return St(t), null;
        case 13:
          if (i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (o = Pi(t), i !== null && i.dehydrated !== null) {
              if (e === null) {
                if (!o)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o)
                  throw Error(
                    "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                o[ql] = t, St(t), (t.mode & kl) !== Bt && i !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              } else
                mm(), ec(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4, St(t), (t.mode & kl) !== Bt && i !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              o = !1;
            } else
              o = hm(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = !0;
            if (!o)
              return t.flags & 256 ? (Sn(t), t) : (Sn(t), null);
          }
          return Sn(t), (t.flags & 128) !== 0 ? (t.lanes = n, (t.mode & kl) !== Bt && Ea(t), t) : (n = i !== null, e = e !== null && e.memoizedState !== null, n && (i = t.child, o = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (o = i.alternate.memoizedState.cachePool.pool), r = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (r = i.memoizedState.cachePool.pool), r !== o && (i.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), sf(t, t.updateQueue), St(t), (t.mode & kl) !== Bt && n && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration)), null);
        case 4:
          return ot(t), e === null && sy(
            t.stateNode.containerInfo
          ), St(t), null;
        case 10:
          return pu(t.type, t), St(t), null;
        case 19:
          if (Oe(Ul, t), o = t.memoizedState, o === null) return St(t), null;
          if (i = (t.flags & 128) !== 0, r = o.rendering, r === null)
            if (i) mi(o, !1);
            else {
              if (Pt !== jc || e !== null && (e.flags & 128) !== 0)
                for (e = t.child; e !== null; ) {
                  if (r = Au(e), r !== null) {
                    for (t.flags |= 128, mi(o, !1), e = r.updateQueue, t.updateQueue = e, sf(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                      om(n, e), n = n.sibling;
                    return ve(
                      Ul,
                      Ul.current & Oh | pp,
                      t
                    ), t.child;
                  }
                  e = e.sibling;
                }
              o.tail !== null && Ka() > gv && (t.flags |= 128, i = !0, mi(o, !1), t.lanes = 4194304);
            }
          else {
            if (!i)
              if (e = Au(r), e !== null) {
                if (t.flags |= 128, i = !0, e = e.updateQueue, t.updateQueue = e, sf(t, e), mi(o, !0), o.tail === null && o.tailMode === "hidden" && !r.alternate && !ht)
                  return St(t), null;
              } else
                2 * Ka() - o.renderingStartTime > gv && n !== 536870912 && (t.flags |= 128, i = !0, mi(o, !1), t.lanes = 4194304);
            o.isBackwards ? (r.sibling = t.child, t.child = r) : (e = o.last, e !== null ? e.sibling = r : t.child = r, o.last = r);
          }
          return o.tail !== null ? (e = o.tail, o.rendering = e, o.tail = e.sibling, o.renderingStartTime = Ka(), e.sibling = null, n = Ul.current, n = i ? n & Oh | pp : n & Oh, ve(Ul, n, t), e) : (St(t), null);
        case 22:
        case 23:
          return Sn(t), aa(t), i = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== i && (t.flags |= 8192) : i && (t.flags |= 8192), i ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (St(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : St(t), n = t.updateQueue, n !== null && sf(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), i = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), i !== n && (t.flags |= 2048), e !== null && Oe(Wf, t), null;
        case 24:
          return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), pu(zl, t), St(t), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function bg(e, t) {
      switch (Ns(t), t.tag) {
        case 1:
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & kl) !== Bt && Ea(t), t) : null;
        case 3:
          return pu(zl, t), ot(t), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
        case 26:
        case 27:
        case 5:
          return oe(t), null;
        case 13:
          if (Sn(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            ec();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & kl) !== Bt && Ea(t), t) : null;
        case 19:
          return Oe(Ul, t), null;
        case 4:
          return ot(t), null;
        case 10:
          return pu(t.type, t), null;
        case 22:
        case 23:
          return Sn(t), aa(t), e !== null && Oe(Wf, t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & kl) !== Bt && Ea(t), t) : null;
        case 24:
          return pu(zl, t), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function Ym(e, t) {
      switch (Ns(t), t.tag) {
        case 3:
          pu(zl, t), ot(t);
          break;
        case 26:
        case 27:
        case 5:
          oe(t);
          break;
        case 4:
          ot(t);
          break;
        case 13:
          Sn(t);
          break;
        case 19:
          Oe(Ul, t);
          break;
        case 10:
          pu(t.type, t);
          break;
        case 22:
        case 23:
          Sn(t), aa(t), e !== null && Oe(Wf, t);
          break;
        case 24:
          pu(zl, t);
      }
    }
    function oa(e) {
      return (e.mode & kl) !== Bt;
    }
    function jm(e, t) {
      oa(e) ? (la(), fc(t, e), Bn()) : fc(t, e);
    }
    function hd(e, t, n) {
      oa(e) ? (la(), sc(
        n,
        e,
        t
      ), Bn()) : sc(
        n,
        e,
        t
      );
    }
    function fc(e, t) {
      try {
        var n = t.updateQueue, i = n !== null ? n.lastEffect : null;
        if (i !== null) {
          var o = i.next;
          n = o;
          do {
            if ((n.tag & e) === e && ((e & xl) !== eu ? ge !== null && typeof ge.markComponentPassiveEffectMountStarted == "function" && ge.markComponentPassiveEffectMountStarted(
              t
            ) : (e & $l) !== eu && ge !== null && typeof ge.markComponentLayoutEffectMountStarted == "function" && ge.markComponentLayoutEffectMountStarted(
              t
            ), i = void 0, (e & zn) !== eu && (Nh = !0), i = Se(
              t,
              KE,
              n
            ), (e & zn) !== eu && (Nh = !1), (e & xl) !== eu ? ge !== null && typeof ge.markComponentPassiveEffectMountStopped == "function" && ge.markComponentPassiveEffectMountStopped() : (e & $l) !== eu && ge !== null && typeof ge.markComponentLayoutEffectMountStopped == "function" && ge.markComponentLayoutEffectMountStopped(), i !== void 0 && typeof i != "function")) {
              var r = void 0;
              r = (n.tag & $l) !== 0 ? "useLayoutEffect" : (n.tag & zn) !== 0 ? "useInsertionEffect" : "useEffect";
              var h = void 0;
              h = i === null ? " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof i.then == "function" ? `

It looks like you wrote ` + r + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + r + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching` : " You returned: " + i, Se(
                t,
                function(y, S) {
                  console.error(
                    "%s must not return anything besides a function, which is used for clean-up.%s",
                    y,
                    S
                  );
                },
                r,
                h
              );
            }
            n = n.next;
          } while (n !== o);
        }
      } catch (y) {
        Ne(t, t.return, y);
      }
    }
    function sc(e, t, n) {
      try {
        var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
        if (o !== null) {
          var r = o.next;
          i = r;
          do {
            if ((i.tag & e) === e) {
              var h = i.inst, y = h.destroy;
              y !== void 0 && (h.destroy = void 0, (e & xl) !== eu ? ge !== null && typeof ge.markComponentPassiveEffectUnmountStarted == "function" && ge.markComponentPassiveEffectUnmountStarted(
                t
              ) : (e & $l) !== eu && ge !== null && typeof ge.markComponentLayoutEffectUnmountStarted == "function" && ge.markComponentLayoutEffectUnmountStarted(
                t
              ), (e & zn) !== eu && (Nh = !0), o = t, Se(
                o,
                JE,
                o,
                n,
                y
              ), (e & zn) !== eu && (Nh = !1), (e & xl) !== eu ? ge !== null && typeof ge.markComponentPassiveEffectUnmountStopped == "function" && ge.markComponentPassiveEffectUnmountStopped() : (e & $l) !== eu && ge !== null && typeof ge.markComponentLayoutEffectUnmountStopped == "function" && ge.markComponentLayoutEffectUnmountStopped());
            }
            i = i.next;
          } while (i !== r);
        }
      } catch (S) {
        Ne(t, t.return, S);
      }
    }
    function Vm(e, t) {
      oa(e) ? (la(), fc(t, e), Bn()) : fc(t, e);
    }
    function df(e, t, n) {
      oa(e) ? (la(), sc(
        n,
        e,
        t
      ), Bn()) : sc(
        n,
        e,
        t
      );
    }
    function Gm(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var n = e.stateNode;
        e.type.defaultProps || "ref" in e.memoizedProps || Mh || (n.props !== e.memoizedProps && console.error(
          "Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
          se(e) || "instance"
        ), n.state !== e.memoizedState && console.error(
          "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
          se(e) || "instance"
        ));
        try {
          Se(
            e,
            hg,
            t,
            n
          );
        } catch (i) {
          Ne(e, e.return, i);
        }
      }
    }
    function Sg(e, t, n) {
      return e.getSnapshotBeforeUpdate(t, n);
    }
    function rb(e, t) {
      var n = t.memoizedProps, i = t.memoizedState;
      t = e.stateNode, e.type.defaultProps || "ref" in e.memoizedProps || Mh || (t.props !== e.memoizedProps && console.error(
        "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
        se(e) || "instance"
      ), t.state !== e.memoizedState && console.error(
        "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
        se(e) || "instance"
      ));
      try {
        var o = hi(
          e.type,
          n,
          e.elementType === e.type
        ), r = Se(
          e,
          Sg,
          t,
          o,
          i
        );
        n = rS, r !== void 0 || n.has(e.type) || (n.add(e.type), Se(e, function() {
          console.error(
            "%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",
            se(e)
          );
        })), t.__reactInternalSnapshotBeforeUpdate = r;
      } catch (h) {
        Ne(e, e.return, h);
      }
    }
    function md(e, t, n) {
      n.props = hi(
        e.type,
        e.memoizedProps
      ), n.state = e.memoizedState, oa(e) ? (la(), Se(
        e,
        _1,
        e,
        t,
        n
      ), Bn()) : Se(
        e,
        _1,
        e,
        t,
        n
      );
    }
    function Tg(e) {
      var t = e.ref;
      if (t !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var n = e.stateNode;
            break;
          case 30:
            n = e.stateNode;
            break;
          default:
            n = e.stateNode;
        }
        if (typeof t == "function")
          if (oa(e))
            try {
              la(), e.refCleanup = t(n);
            } finally {
              Bn();
            }
          else e.refCleanup = t(n);
        else
          typeof t == "string" ? console.error("String refs are no longer supported.") : t.hasOwnProperty("current") || console.error(
            "Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",
            se(e)
          ), t.current = n;
      }
    }
    function Uo(e, t) {
      try {
        Se(e, Tg, e);
      } catch (n) {
        Ne(e, t, n);
      }
    }
    function Vn(e, t) {
      var n = e.ref, i = e.refCleanup;
      if (n !== null)
        if (typeof i == "function")
          try {
            if (oa(e))
              try {
                la(), Se(e, i);
              } finally {
                Bn(e);
              }
            else Se(e, i);
          } catch (o) {
            Ne(e, t, o);
          } finally {
            e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
          }
        else if (typeof n == "function")
          try {
            if (oa(e))
              try {
                la(), Se(e, n, null);
              } finally {
                Bn(e);
              }
            else Se(e, n, null);
          } catch (o) {
            Ne(e, t, o);
          }
        else n.current = null;
    }
    function Xm(e, t, n, i) {
      var o = e.memoizedProps, r = o.id, h = o.onCommit;
      o = o.onRender, t = t === null ? "mount" : "update", uv && (t = "nested-update"), typeof o == "function" && o(
        r,
        t,
        e.actualDuration,
        e.treeBaseDuration,
        e.actualStartTime,
        n
      ), typeof h == "function" && h(
        e.memoizedProps.id,
        t,
        i,
        n
      );
    }
    function Eg(e, t, n, i) {
      var o = e.memoizedProps;
      e = o.id, o = o.onPostCommit, t = t === null ? "mount" : "update", uv && (t = "nested-update"), typeof o == "function" && o(
        e,
        t,
        i,
        n
      );
    }
    function Ag(e) {
      var t = e.type, n = e.memoizedProps, i = e.stateNode;
      try {
        Se(
          e,
          zu,
          i,
          t,
          n,
          e
        );
      } catch (o) {
        Ne(e, e.return, o);
      }
    }
    function Qm(e, t, n) {
      try {
        Se(
          e,
          Qt,
          e.stateNode,
          e.type,
          n,
          t,
          e
        );
      } catch (i) {
        Ne(e, e.return, i);
      }
    }
    function Zm(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Ga(e.type) || e.tag === 4;
    }
    function dc(e) {
      e: for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || Zm(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.tag === 27 && Ga(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function hf(e, t, n) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Mu));
      else if (i !== 4 && (i === 27 && Ga(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
        for (hf(e, t, n), e = e.sibling; e !== null; )
          hf(e, t, n), e = e.sibling;
    }
    function hc(e, t, n) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
      else if (i !== 4 && (i === 27 && Ga(e.type) && (n = e.stateNode), e = e.child, e !== null))
        for (hc(e, t, n), e = e.sibling; e !== null; )
          hc(e, t, n), e = e.sibling;
    }
    function Rg(e) {
      for (var t, n = e.return; n !== null; ) {
        if (Zm(n)) {
          t = n;
          break;
        }
        n = n.return;
      }
      if (t == null)
        throw Error(
          "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
        );
      switch (t.tag) {
        case 27:
          t = t.stateNode, n = dc(e), hc(
            e,
            n,
            t
          );
          break;
        case 5:
          n = t.stateNode, t.flags & 32 && (xu(n), t.flags &= -33), t = dc(e), hc(
            e,
            t,
            n
          );
          break;
        case 3:
        case 4:
          t = t.stateNode.containerInfo, n = dc(e), hf(
            e,
            n,
            t
          );
          break;
        default:
          throw Error(
            "Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue."
          );
      }
    }
    function Km(e) {
      var t = e.stateNode, n = e.memoizedProps;
      try {
        Se(
          e,
          An,
          e.type,
          n,
          t,
          e
        );
      } catch (i) {
        Ne(e, e.return, i);
      }
    }
    function yd(e, t) {
      if (e = e.containerInfo, h0 = Bv, e = ag(e), am(e)) {
        if ("selectionStart" in e)
          var n = {
            start: e.selectionStart,
            end: e.selectionEnd
          };
        else
          e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var i = n.getSelection && n.getSelection();
            if (i && i.rangeCount !== 0) {
              n = i.anchorNode;
              var o = i.anchorOffset, r = i.focusNode;
              i = i.focusOffset;
              try {
                n.nodeType, r.nodeType;
              } catch {
                n = null;
                break e;
              }
              var h = 0, y = -1, S = -1, E = 0, Z = 0, F = e, G = null;
              t: for (; ; ) {
                for (var P; F !== n || o !== 0 && F.nodeType !== 3 || (y = h + o), F !== r || i !== 0 && F.nodeType !== 3 || (S = h + i), F.nodeType === 3 && (h += F.nodeValue.length), (P = F.firstChild) !== null; )
                  G = F, F = P;
                for (; ; ) {
                  if (F === e) break t;
                  if (G === n && ++E === o && (y = h), G === r && ++Z === i && (S = h), (P = F.nextSibling) !== null) break;
                  F = G, G = F.parentNode;
                }
                F = P;
              }
              n = y === -1 || S === -1 ? null : { start: y, end: S };
            } else n = null;
          }
        n = n || { start: 0, end: 0 };
      } else n = null;
      for (m0 = {
        focusedElem: e,
        selectionRange: n
      }, Bv = !1, Yl = t; Yl !== null; )
        if (t = Yl, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null)
          e.return = t, Yl = e;
        else
          for (; Yl !== null; ) {
            switch (e = t = Yl, n = e.alternate, o = e.flags, e.tag) {
              case 0:
                break;
              case 11:
              case 15:
                break;
              case 1:
                (o & 1024) !== 0 && n !== null && rb(e, n);
                break;
              case 3:
                if ((o & 1024) !== 0) {
                  if (e = e.stateNode.containerInfo, n = e.nodeType, n === 9)
                    Vo(e);
                  else if (n === 1)
                    switch (e.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        Vo(e);
                        break;
                      default:
                        e.textContent = "";
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if ((o & 1024) !== 0)
                  throw Error(
                    "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."
                  );
            }
            if (e = t.sibling, e !== null) {
              e.return = t.return, Yl = e;
              break;
            }
            Yl = t.return;
          }
    }
    function Jm(e, t, n) {
      var i = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Ba(e, n), i & 4 && jm(n, $l | tu);
          break;
        case 1:
          if (Ba(e, n), i & 4)
            if (e = n.stateNode, t === null)
              n.type.defaultProps || "ref" in n.memoizedProps || Mh || (e.props !== n.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                se(n) || "instance"
              ), e.state !== n.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                se(n) || "instance"
              )), oa(n) ? (la(), Se(
                n,
                Vb,
                n,
                e
              ), Bn()) : Se(
                n,
                Vb,
                n,
                e
              );
            else {
              var o = hi(
                n.type,
                t.memoizedProps
              );
              t = t.memoizedState, n.type.defaultProps || "ref" in n.memoizedProps || Mh || (e.props !== n.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                se(n) || "instance"
              ), e.state !== n.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                se(n) || "instance"
              )), oa(n) ? (la(), Se(
                n,
                B1,
                n,
                e,
                o,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              ), Bn()) : Se(
                n,
                B1,
                n,
                e,
                o,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            }
          i & 64 && Gm(n), i & 512 && Uo(n, n.return);
          break;
        case 3:
          if (t = ta(), Ba(e, n), i & 64 && (i = n.updateQueue, i !== null)) {
            if (o = null, n.child !== null)
              switch (n.child.tag) {
                case 27:
                case 5:
                  o = n.child.stateNode;
                  break;
                case 1:
                  o = n.child.stateNode;
              }
            try {
              Se(
                n,
                hg,
                i,
                o
              );
            } catch (h) {
              Ne(n, n.return, h);
            }
          }
          e.effectDuration += ai(t);
          break;
        case 27:
          t === null && i & 4 && Km(n);
        case 26:
        case 5:
          Ba(e, n), t === null && i & 4 && Ag(n), i & 512 && Uo(n, n.return);
          break;
        case 12:
          if (i & 4) {
            i = ta(), Ba(e, n), e = n.stateNode, e.effectDuration += lc(i);
            try {
              Se(
                n,
                Xm,
                n,
                t,
                av,
                e.effectDuration
              );
            } catch (h) {
              Ne(n, n.return, h);
            }
          } else Ba(e, n);
          break;
        case 13:
          Ba(e, n), i & 4 && Co(e, n), i & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = Tf.bind(
            null,
            n
          ), Go(e, n))));
          break;
        case 22:
          if (i = n.memoizedState !== null || Yc, !i) {
            t = t !== null && t.memoizedState !== null || ol, o = Yc;
            var r = ol;
            Yc = i, (ol = t) && !r ? Na(
              e,
              n,
              (n.subtreeFlags & 8772) !== 0
            ) : Ba(e, n), Yc = o, ol = r;
          }
          break;
        case 30:
          break;
        default:
          Ba(e, n);
      }
    }
    function km(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, km(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && ao(t)), e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function Ru(e, t, n) {
      for (n = n.child; n !== null; )
        mc(
          e,
          t,
          n
        ), n = n.sibling;
    }
    function mc(e, t, n) {
      if (Dl && typeof Dl.onCommitFiberUnmount == "function")
        try {
          Dl.onCommitFiberUnmount(Mi, n);
        } catch (r) {
          fn || (fn = !0, console.error(
            "React instrumentation encountered an error: %s",
            r
          ));
        }
      switch (n.tag) {
        case 26:
          ol || Vn(n, t), Ru(
            e,
            t,
            n
          ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
          break;
        case 27:
          ol || Vn(n, t);
          var i = vl, o = $n;
          Ga(n.type) && (vl = n.stateNode, $n = !1), Ru(
            e,
            t,
            n
          ), Se(
            n,
            Qo,
            n.stateNode
          ), vl = i, $n = o;
          break;
        case 5:
          ol || Vn(n, t);
        case 6:
          if (i = vl, o = $n, vl = null, Ru(
            e,
            t,
            n
          ), vl = i, $n = o, vl !== null)
            if ($n)
              try {
                Se(
                  n,
                  Yo,
                  vl,
                  n.stateNode
                );
              } catch (r) {
                Ne(
                  n,
                  t,
                  r
                );
              }
            else
              try {
                Se(
                  n,
                  Qn,
                  vl,
                  n.stateNode
                );
              } catch (r) {
                Ne(
                  n,
                  t,
                  r
                );
              }
          break;
        case 18:
          vl !== null && ($n ? (e = vl, jo(
            e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
            n.stateNode
          ), Mc(e)) : jo(vl, n.stateNode));
          break;
        case 4:
          i = vl, o = $n, vl = n.stateNode.containerInfo, $n = !0, Ru(
            e,
            t,
            n
          ), vl = i, $n = o;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          ol || sc(
            zn,
            n,
            t
          ), ol || hd(
            n,
            t,
            $l
          ), Ru(
            e,
            t,
            n
          );
          break;
        case 1:
          ol || (Vn(n, t), i = n.stateNode, typeof i.componentWillUnmount == "function" && md(
            n,
            t,
            i
          )), Ru(
            e,
            t,
            n
          );
          break;
        case 21:
          Ru(
            e,
            t,
            n
          );
          break;
        case 22:
          ol = (i = ol) || n.memoizedState !== null, Ru(
            e,
            t,
            n
          ), ol = i;
          break;
        default:
          Ru(
            e,
            t,
            n
          );
      }
    }
    function Co(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
        try {
          Se(
            t,
            En,
            e
          );
        } catch (n) {
          Ne(t, t.return, n);
        }
    }
    function pd(e) {
      switch (e.tag) {
        case 13:
        case 19:
          var t = e.stateNode;
          return t === null && (t = e.stateNode = new fS()), t;
        case 22:
          return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new fS()), t;
        default:
          throw Error(
            "Unexpected Suspense handler tag (" + e.tag + "). This is a bug in React."
          );
      }
    }
    function yc(e, t) {
      var n = pd(e);
      t.forEach(function(i) {
        var o = vi.bind(null, e, i);
        if (!n.has(i)) {
          if (n.add(i), Kt)
            if (zh !== null && xh !== null)
              qo(xh, zh);
            else
              throw Error(
                "Expected finished root and lanes to be set. This is a bug in React."
              );
          i.then(o, o);
        }
      });
    }
    function Nl(e, t) {
      var n = t.deletions;
      if (n !== null)
        for (var i = 0; i < n.length; i++) {
          var o = e, r = t, h = n[i], y = r;
          e: for (; y !== null; ) {
            switch (y.tag) {
              case 27:
                if (Ga(y.type)) {
                  vl = y.stateNode, $n = !1;
                  break e;
                }
                break;
              case 5:
                vl = y.stateNode, $n = !1;
                break e;
              case 3:
              case 4:
                vl = y.stateNode.containerInfo, $n = !0;
                break e;
            }
            y = y.return;
          }
          if (vl === null)
            throw Error(
              "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
            );
          mc(o, r, h), vl = null, $n = !1, o = h, r = o.alternate, r !== null && (r.return = null), o.return = null;
        }
      if (t.subtreeFlags & 13878)
        for (t = t.child; t !== null; )
          $m(t, e), t = t.sibling;
    }
    function $m(e, t) {
      var n = e.alternate, i = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Nl(t, e), an(e), i & 4 && (sc(
            zn | tu,
            e,
            e.return
          ), fc(zn | tu, e), hd(
            e,
            e.return,
            $l | tu
          ));
          break;
        case 1:
          Nl(t, e), an(e), i & 512 && (ol || n === null || Vn(n, n.return)), i & 64 && Yc && (e = e.updateQueue, e !== null && (i = e.callbacks, i !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? i : n.concat(i))));
          break;
        case 26:
          var o = Vu;
          if (Nl(t, e), an(e), i & 512 && (ol || n === null || Vn(n, n.return)), i & 4)
            if (t = n !== null ? n.memoizedState : null, i = e.memoizedState, n === null)
              if (i === null)
                if (e.stateNode === null) {
                  e: {
                    i = e.type, n = e.memoizedProps, t = o.ownerDocument || o;
                    t: switch (i) {
                      case "title":
                        o = t.getElementsByTagName("title")[0], (!o || o[tr] || o[ql] || o.namespaceURI === ur || o.hasAttribute("itemprop")) && (o = t.createElement(i), t.head.insertBefore(
                          o,
                          t.querySelector("head > title")
                        )), Xt(o, i, n), o[ql] = e, fl(o), i = o;
                        break e;
                      case "link":
                        var r = My(
                          "link",
                          "href",
                          t
                        ).get(i + (n.href || ""));
                        if (r) {
                          for (var h = 0; h < r.length; h++)
                            if (o = r[h], o.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && o.getAttribute("rel") === (n.rel == null ? null : n.rel) && o.getAttribute("title") === (n.title == null ? null : n.title) && o.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                              r.splice(h, 1);
                              break t;
                            }
                        }
                        o = t.createElement(i), Xt(o, i, n), t.head.appendChild(o);
                        break;
                      case "meta":
                        if (r = My(
                          "meta",
                          "content",
                          t
                        ).get(i + (n.content || ""))) {
                          for (h = 0; h < r.length; h++)
                            if (o = r[h], ze(
                              n.content,
                              "content"
                            ), o.getAttribute("content") === (n.content == null ? null : "" + n.content) && o.getAttribute("name") === (n.name == null ? null : n.name) && o.getAttribute("property") === (n.property == null ? null : n.property) && o.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && o.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                              r.splice(h, 1);
                              break t;
                            }
                        }
                        o = t.createElement(i), Xt(o, i, n), t.head.appendChild(o);
                        break;
                      default:
                        throw Error(
                          'getNodesForType encountered a type it did not expect: "' + i + '". This is a bug in React.'
                        );
                    }
                    o[ql] = e, fl(o), i = o;
                  }
                  e.stateNode = i;
                } else
                  zy(
                    o,
                    e.type,
                    e.stateNode
                  );
              else
                e.stateNode = Yd(
                  o,
                  i,
                  e.memoizedProps
                );
            else
              t !== i ? (t === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : t.count--, i === null ? zy(
                o,
                e.type,
                e.stateNode
              ) : Yd(
                o,
                i,
                e.memoizedProps
              )) : i === null && e.stateNode !== null && Qm(
                e,
                e.memoizedProps,
                n.memoizedProps
              );
          break;
        case 27:
          Nl(t, e), an(e), i & 512 && (ol || n === null || Vn(n, n.return)), n !== null && i & 4 && Qm(
            e,
            e.memoizedProps,
            n.memoizedProps
          );
          break;
        case 5:
          if (Nl(t, e), an(e), i & 512 && (ol || n === null || Vn(n, n.return)), e.flags & 32) {
            t = e.stateNode;
            try {
              Se(e, xu, t);
            } catch (Z) {
              Ne(e, e.return, Z);
            }
          }
          i & 4 && e.stateNode != null && (t = e.memoizedProps, Qm(
            e,
            t,
            n !== null ? n.memoizedProps : t
          )), i & 1024 && (kb = !0, e.type !== "form" && console.error(
            "Unexpected host component type. Expected a form. This is a bug in React."
          ));
          break;
        case 6:
          if (Nl(t, e), an(e), i & 4) {
            if (e.stateNode === null)
              throw Error(
                "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue."
              );
            i = e.memoizedProps, n = n !== null ? n.memoizedProps : i, t = e.stateNode;
            try {
              Se(
                e,
                Ac,
                t,
                n,
                i
              );
            } catch (Z) {
              Ne(e, e.return, Z);
            }
          }
          break;
        case 3:
          if (o = ta(), Uv = null, r = Vu, Vu = Af(t.containerInfo), Nl(t, e), Vu = r, an(e), i & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
              Se(
                e,
                Ey,
                t.containerInfo
              );
            } catch (Z) {
              Ne(e, e.return, Z);
            }
          kb && (kb = !1, pc(e)), t.effectDuration += ai(o);
          break;
        case 4:
          i = Vu, Vu = Af(
            e.stateNode.containerInfo
          ), Nl(t, e), an(e), Vu = i;
          break;
        case 12:
          i = ta(), Nl(t, e), an(e), e.stateNode.effectDuration += lc(i);
          break;
        case 13:
          Nl(t, e), an(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (e0 = Ka()), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, yc(e, i)));
          break;
        case 22:
          o = e.memoizedState !== null;
          var y = n !== null && n.memoizedState !== null, S = Yc, E = ol;
          if (Yc = S || o, ol = E || y, Nl(t, e), ol = E, Yc = S, an(e), i & 8192)
            e: for (t = e.stateNode, t._visibility = o ? t._visibility & ~ev : t._visibility | ev, o && (n === null || y || Yc || ol || wl(e)), n = null, t = e; ; ) {
              if (t.tag === 5 || t.tag === 26) {
                if (n === null) {
                  y = n = t;
                  try {
                    r = y.stateNode, o ? Se(y, on, r) : Se(
                      y,
                      Sy,
                      y.stateNode,
                      y.memoizedProps
                    );
                  } catch (Z) {
                    Ne(y, y.return, Z);
                  }
                }
              } else if (t.tag === 6) {
                if (n === null) {
                  y = t;
                  try {
                    h = y.stateNode, o ? Se(y, by, h) : Se(
                      y,
                      _d,
                      h,
                      y.memoizedProps
                    );
                  } catch (Z) {
                    Ne(y, y.return, Z);
                  }
                }
              } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                t.child.return = t, t = t.child;
                continue;
              }
              if (t === e) break e;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                  break e;
                n === t && (n = null), t = t.return;
              }
              n === t && (n = null), t.sibling.return = t.return, t = t.sibling;
            }
          i & 4 && (i = e.updateQueue, i !== null && (n = i.retryQueue, n !== null && (i.retryQueue = null, yc(e, n))));
          break;
        case 19:
          Nl(t, e), an(e), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, yc(e, i)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          Nl(t, e), an(e);
      }
    }
    function an(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          Se(e, Rg, e);
        } catch (n) {
          Ne(e, e.return, n);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function pc(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null; ) {
          var t = e;
          pc(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
        }
    }
    function Ba(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; )
          Jm(e, t.alternate, t), t = t.sibling;
    }
    function Tn(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          hd(
            e,
            e.return,
            $l
          ), wl(e);
          break;
        case 1:
          Vn(e, e.return);
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && md(
            e,
            e.return,
            t
          ), wl(e);
          break;
        case 27:
          Se(
            e,
            Qo,
            e.stateNode
          );
        case 26:
        case 5:
          Vn(e, e.return), wl(e);
          break;
        case 22:
          e.memoizedState === null && wl(e);
          break;
        case 30:
          wl(e);
          break;
        default:
          wl(e);
      }
    }
    function wl(e) {
      for (e = e.child; e !== null; )
        Tn(e), e = e.sibling;
    }
    function Ou(e, t, n, i) {
      var o = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Na(
            e,
            n,
            i
          ), jm(n, $l);
          break;
        case 1:
          if (Na(
            e,
            n,
            i
          ), t = n.stateNode, typeof t.componentDidMount == "function" && Se(
            n,
            Vb,
            n,
            t
          ), t = n.updateQueue, t !== null) {
            e = n.stateNode;
            try {
              Se(
                n,
                go,
                t,
                e
              );
            } catch (r) {
              Ne(n, n.return, r);
            }
          }
          i && o & 64 && Gm(n), Uo(n, n.return);
          break;
        case 27:
          Km(n);
        case 26:
        case 5:
          Na(
            e,
            n,
            i
          ), i && t === null && o & 4 && Ag(n), Uo(n, n.return);
          break;
        case 12:
          if (i && o & 4) {
            o = ta(), Na(
              e,
              n,
              i
            ), i = n.stateNode, i.effectDuration += lc(o);
            try {
              Se(
                n,
                Xm,
                n,
                t,
                av,
                i.effectDuration
              );
            } catch (r) {
              Ne(n, n.return, r);
            }
          } else
            Na(
              e,
              n,
              i
            );
          break;
        case 13:
          Na(
            e,
            n,
            i
          ), i && o & 4 && Co(e, n);
          break;
        case 22:
          n.memoizedState === null && Na(
            e,
            n,
            i
          ), Uo(n, n.return);
          break;
        case 30:
          break;
        default:
          Na(
            e,
            n,
            i
          );
      }
    }
    function Na(e, t, n) {
      for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; )
        Ou(
          e,
          t.alternate,
          t,
          n
        ), t = t.sibling;
    }
    function wa(e, t) {
      var n = null;
      e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && tc(e), n != null && Ta(n));
    }
    function ra(e, t) {
      e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (tc(t), e != null && Ta(e));
    }
    function Tt(e, t, n, i) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; )
          mf(
            e,
            t,
            n,
            i
          ), t = t.sibling;
    }
    function mf(e, t, n, i) {
      var o = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Tt(
            e,
            t,
            n,
            i
          ), o & 2048 && Vm(t, xl | tu);
          break;
        case 1:
          Tt(
            e,
            t,
            n,
            i
          );
          break;
        case 3:
          var r = ta();
          Tt(
            e,
            t,
            n,
            i
          ), o & 2048 && (n = null, t.alternate !== null && (n = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== n && (tc(t), n != null && Ta(n))), e.passiveEffectDuration += ai(r);
          break;
        case 12:
          if (o & 2048) {
            o = ta(), Tt(
              e,
              t,
              n,
              i
            ), e = t.stateNode, e.passiveEffectDuration += lc(o);
            try {
              Se(
                t,
                Eg,
                t,
                t.alternate,
                av,
                e.passiveEffectDuration
              );
            } catch (y) {
              Ne(t, t.return, y);
            }
          } else
            Tt(
              e,
              t,
              n,
              i
            );
          break;
        case 13:
          Tt(
            e,
            t,
            n,
            i
          );
          break;
        case 23:
          break;
        case 22:
          r = t.stateNode;
          var h = t.alternate;
          t.memoizedState !== null ? r._visibility & Bc ? Tt(
            e,
            t,
            n,
            i
          ) : Ho(
            e,
            t
          ) : r._visibility & Bc ? Tt(
            e,
            t,
            n,
            i
          ) : (r._visibility |= Bc, yi(
            e,
            t,
            n,
            i,
            (t.subtreeFlags & 10256) !== 0
          )), o & 2048 && wa(h, t);
          break;
        case 24:
          Tt(
            e,
            t,
            n,
            i
          ), o & 2048 && ra(t.alternate, t);
          break;
        default:
          Tt(
            e,
            t,
            n,
            i
          );
      }
    }
    function yi(e, t, n, i, o) {
      for (o = o && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; )
        gd(
          e,
          t,
          n,
          i,
          o
        ), t = t.sibling;
    }
    function gd(e, t, n, i, o) {
      var r = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          yi(
            e,
            t,
            n,
            i,
            o
          ), Vm(t, xl);
          break;
        case 23:
          break;
        case 22:
          var h = t.stateNode;
          t.memoizedState !== null ? h._visibility & Bc ? yi(
            e,
            t,
            n,
            i,
            o
          ) : Ho(
            e,
            t
          ) : (h._visibility |= Bc, yi(
            e,
            t,
            n,
            i,
            o
          )), o && r & 2048 && wa(
            t.alternate,
            t
          );
          break;
        case 24:
          yi(
            e,
            t,
            n,
            i,
            o
          ), o && r & 2048 && ra(t.alternate, t);
          break;
        default:
          yi(
            e,
            t,
            n,
            i,
            o
          );
      }
    }
    function Ho(e, t) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; ) {
          var n = e, i = t, o = i.flags;
          switch (i.tag) {
            case 22:
              Ho(
                n,
                i
              ), o & 2048 && wa(
                i.alternate,
                i
              );
              break;
            case 24:
              Ho(
                n,
                i
              ), o & 2048 && ra(
                i.alternate,
                i
              );
              break;
            default:
              Ho(
                n,
                i
              );
          }
          t = t.sibling;
        }
    }
    function gc(e) {
      if (e.subtreeFlags & gp)
        for (e = e.child; e !== null; )
          pi(e), e = e.sibling;
    }
    function pi(e) {
      switch (e.tag) {
        case 26:
          gc(e), e.flags & gp && e.memoizedState !== null && wg(
            Vu,
            e.memoizedState,
            e.memoizedProps
          );
          break;
        case 5:
          gc(e);
          break;
        case 3:
        case 4:
          var t = Vu;
          Vu = Af(
            e.stateNode.containerInfo
          ), gc(e), Vu = t;
          break;
        case 22:
          e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = gp, gp = 16777216, gc(e), gp = t) : gc(e));
          break;
        default:
          gc(e);
      }
    }
    function yf(e) {
      var t = e.alternate;
      if (t !== null && (e = t.child, e !== null)) {
        t.child = null;
        do
          t = e.sibling, e.sibling = null, e = t;
        while (e !== null);
      }
    }
    function Bo(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            Yl = i, Fm(
              i,
              e
            );
          }
        yf(e);
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; )
          Wm(e), e = e.sibling;
    }
    function Wm(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Bo(e), e.flags & 2048 && df(
            e,
            e.return,
            xl | tu
          );
          break;
        case 3:
          var t = ta();
          Bo(e), e.stateNode.passiveEffectDuration += ai(t);
          break;
        case 12:
          t = ta(), Bo(e), e.stateNode.passiveEffectDuration += lc(t);
          break;
        case 22:
          t = e.stateNode, e.memoizedState !== null && t._visibility & Bc && (e.return === null || e.return.tag !== 13) ? (t._visibility &= ~Bc, pf(e)) : Bo(e);
          break;
        default:
          Bo(e);
      }
    }
    function pf(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            Yl = i, Fm(
              i,
              e
            );
          }
        yf(e);
      }
      for (e = e.child; e !== null; )
        gf(e), e = e.sibling;
    }
    function gf(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          df(
            e,
            e.return,
            xl
          ), pf(e);
          break;
        case 22:
          var t = e.stateNode;
          t._visibility & Bc && (t._visibility &= ~Bc, pf(e));
          break;
        default:
          pf(e);
      }
    }
    function Fm(e, t) {
      for (; Yl !== null; ) {
        var n = Yl, i = n;
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            df(
              i,
              t,
              xl
            );
            break;
          case 23:
          case 22:
            i.memoizedState !== null && i.memoizedState.cachePool !== null && (i = i.memoizedState.cachePool.pool, i != null && tc(i));
            break;
          case 24:
            Ta(i.memoizedState.cache);
        }
        if (i = n.child, i !== null) i.return = n, Yl = i;
        else
          e: for (n = e; Yl !== null; ) {
            i = Yl;
            var o = i.sibling, r = i.return;
            if (km(i), i === n) {
              Yl = null;
              break e;
            }
            if (o !== null) {
              o.return = r, Yl = o;
              break e;
            }
            Yl = r;
          }
      }
    }
    function Im() {
      $E.forEach(function(e) {
        return e();
      });
    }
    function Pm() {
      var e = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
      return e || $.actQueue === null || console.error(
        "The current testing environment is not configured to support act(...)"
      ), e;
    }
    function un(e) {
      if ((bt & xn) !== ha && lt !== 0)
        return lt & -lt;
      var t = $.T;
      return t !== null ? (t._updatedFibers || (t._updatedFibers = /* @__PURE__ */ new Set()), t._updatedFibers.add(e), e = $f, e !== 0 ? e : oy()) : Xp();
    }
    function Og() {
      ya === 0 && (ya = (lt & 536870912) === 0 || ht ? Xh() : 536870912);
      var e = nu.current;
      return e !== null && (e.flags |= 32), ya;
    }
    function Vt(e, t, n) {
      if (Nh && console.error("useInsertionEffect must not schedule updates."), u0 && (vv = !0), (e === xt && (Et === es || Et === ts) || e.cancelPendingCommit !== null) && (bc(e, 0), Du(
        e,
        lt,
        ya,
        !1
      )), lo(e, n), (bt & xn) !== 0 && e === xt) {
        if (dn)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              e = et && se(et) || "Unknown", SS.has(e) || (SS.add(e), t = se(t) || "Unknown", console.error(
                "Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",
                t,
                e,
                e
              ));
              break;
            case 1:
              bS || (console.error(
                "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."
              ), bS = !0);
          }
      } else
        Kt && ru(e, t, n), xg(t), e === xt && ((bt & xn) === ha && (dr |= n), Pt === Pf && Du(
          e,
          lt,
          ya,
          !1
        )), Gn(e);
    }
    function il(e, t, n) {
      if ((bt & (xn | Gu)) !== ha)
        throw Error("Should not already be working.");
      var i = !n && (t & 124) === 0 && (t & e.expiredLanes) === 0 || Er(e, t), o = i ? ty(e, t) : Td(e, t, !0), r = i;
      do {
        if (o === jc) {
          Hh && !i && Du(e, t, 0, !1);
          break;
        } else {
          if (n = e.current.alternate, r && !Dg(n)) {
            o = Td(e, t, !1), r = !1;
            continue;
          }
          if (o === Uh) {
            if (r = t, e.errorRecoveryDisabledLanes & r)
              var h = 0;
            else
              h = e.pendingLanes & -536870913, h = h !== 0 ? h : h & 536870912 ? 536870912 : 0;
            if (h !== 0) {
              t = h;
              e: {
                o = e;
                var y = h;
                h = Ap;
                var S = o.current.memoizedState.isDehydrated;
                if (S && (bc(
                  o,
                  y
                ).flags |= 256), y = Td(
                  o,
                  y,
                  !1
                ), y !== Uh) {
                  if (Ib && !S) {
                    o.errorRecoveryDisabledLanes |= r, dr |= r, o = Pf;
                    break e;
                  }
                  o = Un, Un = h, o !== null && (Un === null ? Un = o : Un.push.apply(
                    Un,
                    o
                  ));
                }
                o = y;
              }
              if (r = !1, o !== Uh) continue;
            }
          }
          if (o === bp) {
            bc(e, 0), Du(e, t, 0, !0);
            break;
          }
          e: {
            switch (i = e, o) {
              case jc:
              case bp:
                throw Error("Root did not complete. This is a bug in React.");
              case Pf:
                if ((t & 4194048) !== t) break;
              case yv:
                Du(
                  i,
                  t,
                  ya,
                  !fr
                );
                break e;
              case Uh:
                Un = null;
                break;
              case $b:
              case sS:
                break;
              default:
                throw Error("Unknown root exit status.");
            }
            if ($.actQueue !== null)
              Dd(
                i,
                n,
                t,
                Un,
                Rp,
                pv,
                ya,
                dr,
                ls
              );
            else {
              if ((t & 62914560) === t && (r = e0 + hS - Ka(), 10 < r)) {
                if (Du(
                  i,
                  t,
                  ya,
                  !fr
                ), $t(i, 0, !0) !== 0) break e;
                i.timeoutHandle = zS(
                  ml.bind(
                    null,
                    i,
                    n,
                    Un,
                    Rp,
                    pv,
                    t,
                    ya,
                    dr,
                    ls,
                    fr,
                    o,
                    PE,
                    y1,
                    0
                  ),
                  r
                );
                break e;
              }
              ml(
                i,
                n,
                Un,
                Rp,
                pv,
                t,
                ya,
                dr,
                ls,
                fr,
                o,
                FE,
                y1,
                0
              );
            }
          }
        }
        break;
      } while (!0);
      Gn(e);
    }
    function ml(e, t, n, i, o, r, h, y, S, E, Z, F, G, P) {
      if (e.timeoutHandle = cs, F = t.subtreeFlags, (F & 8192 || (F & 16785408) === 16785408) && (Up = { stylesheets: null, count: 0, unsuspend: Ng }, pi(t), F = _g(), F !== null)) {
        e.cancelPendingCommit = F(
          Dd.bind(
            null,
            e,
            t,
            r,
            n,
            i,
            o,
            h,
            y,
            S,
            Z,
            IE,
            G,
            P
          )
        ), Du(
          e,
          r,
          h,
          !E
        );
        return;
      }
      Dd(
        e,
        t,
        r,
        n,
        i,
        o,
        h,
        y,
        S
      );
    }
    function Dg(e) {
      for (var t = e; ; ) {
        var n = t.tag;
        if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
          for (var i = 0; i < n.length; i++) {
            var o = n[i], r = o.getSnapshot;
            o = o.value;
            try {
              if (!Dn(r(), o)) return !1;
            } catch {
              return !1;
            }
          }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null)
          n.return = t, t = n;
        else {
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      }
      return !0;
    }
    function Du(e, t, n, i) {
      t &= ~Pb, t &= ~dr, e.suspendedLanes |= t, e.pingedLanes &= ~t, i && (e.warmLanes |= t), i = e.expirationTimes;
      for (var o = t; 0 < o; ) {
        var r = 31 - _l(o), h = 1 << r;
        i[r] = -1, o &= ~h;
      }
      n !== 0 && Gp(e, n, t);
    }
    function vc() {
      return (bt & (xn | Gu)) === ha ? (Sc(0), !1) : !0;
    }
    function vd() {
      if (et !== null) {
        if (Et === Wn)
          var e = et.return;
        else
          e = et, ws(), ua(e), Ah = null, yp = 0, e = et;
        for (; e !== null; )
          Ym(e.alternate, e), e = e.return;
        et = null;
      }
    }
    function bc(e, t) {
      var n = e.timeoutHandle;
      n !== cs && (e.timeoutHandle = cs, dA(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), vd(), xt = e, et = n = ba(e.current, null), lt = t, Et = Wn, ma = null, fr = !1, Hh = Er(e, t), Ib = !1, Pt = jc, ls = ya = Pb = dr = sr = 0, Un = Ap = null, pv = !1, (t & 8) !== 0 && (t |= t & 32);
      var i = e.entangledLanes;
      if (i !== 0)
        for (e = e.entanglements, i &= t; 0 < i; ) {
          var o = 31 - _l(i), r = 1 << o;
          t |= e[o], i &= ~r;
        }
      return _i = t, qr(), t = h1(), 1e3 < t - d1 && ($.recentlyCreatedOwnerStacks = 0, d1 = t), Yu.discardPendingWarnings(), n;
    }
    function vf(e, t) {
      Ye = null, $.H = hv, $.getCurrentStack = null, dn = !1, On = null, t === sp || t === ov ? (t = Em(), Et = Tp) : t === v1 ? (t = Em(), Et = dS) : Et = t === lS ? Fb : t !== null && typeof t == "object" && typeof t.then == "function" ? Ch : Sp, ma = t;
      var n = et;
      if (n === null)
        Pt = bp, xo(
          e,
          gn(t, e.current)
        );
      else
        switch (n.mode & kl && gu(n), Ae(), Et) {
          case Sp:
            ge !== null && typeof ge.markComponentErrored == "function" && ge.markComponentErrored(
              n,
              t,
              lt
            );
            break;
          case es:
          case ts:
          case Tp:
          case Ch:
          case Ep:
            ge !== null && typeof ge.markComponentSuspended == "function" && ge.markComponentSuspended(
              n,
              t,
              lt
            );
        }
    }
    function bd() {
      var e = $.H;
      return $.H = hv, e === null ? hv : e;
    }
    function ey() {
      var e = $.A;
      return $.A = kE, e;
    }
    function Sd() {
      Pt = Pf, fr || (lt & 4194048) !== lt && nu.current !== null || (Hh = !0), (sr & 134217727) === 0 && (dr & 134217727) === 0 || xt === null || Du(
        xt,
        lt,
        ya,
        !1
      );
    }
    function Td(e, t, n) {
      var i = bt;
      bt |= xn;
      var o = bd(), r = ey();
      if (xt !== e || lt !== t) {
        if (Kt) {
          var h = e.memoizedUpdaters;
          0 < h.size && (qo(e, lt), h.clear()), Fl(e, t);
        }
        Rp = null, bc(e, t);
      }
      he(t), t = !1, h = Pt;
      e: do
        try {
          if (Et !== Wn && et !== null) {
            var y = et, S = ma;
            switch (Et) {
              case Fb:
                vd(), h = yv;
                break e;
              case Tp:
              case es:
              case ts:
              case Ch:
                nu.current === null && (t = !0);
                var E = Et;
                if (Et = Wn, ma = null, gi(e, y, S, E), n && Hh) {
                  h = jc;
                  break e;
                }
                break;
              default:
                E = Et, Et = Wn, ma = null, gi(e, y, S, E);
            }
          }
          Ed(), h = Pt;
          break;
        } catch (Z) {
          vf(e, Z);
        }
      while (!0);
      return t && e.shellSuspendCounter++, ws(), bt = i, $.H = o, $.A = r, nt(), et === null && (xt = null, lt = 0, qr()), h;
    }
    function Ed() {
      for (; et !== null; ) ny(et);
    }
    function ty(e, t) {
      var n = bt;
      bt |= xn;
      var i = bd(), o = ey();
      if (xt !== e || lt !== t) {
        if (Kt) {
          var r = e.memoizedUpdaters;
          0 < r.size && (qo(e, lt), r.clear()), Fl(e, t);
        }
        Rp = null, gv = Ka() + mS, bc(e, t);
      } else
        Hh = Er(
          e,
          t
        );
      he(t);
      e: do
        try {
          if (Et !== Wn && et !== null)
            t: switch (t = et, r = ma, Et) {
              case Sp:
                Et = Wn, ma = null, gi(
                  e,
                  t,
                  r,
                  Sp
                );
                break;
              case es:
              case ts:
                if (Tm(r)) {
                  Et = Wn, ma = null, Ad(t);
                  break;
                }
                t = function() {
                  Et !== es && Et !== ts || xt !== e || (Et = Ep), Gn(e);
                }, r.then(t, t);
                break e;
              case Tp:
                Et = Ep;
                break e;
              case dS:
                Et = Wb;
                break e;
              case Ep:
                Tm(r) ? (Et = Wn, ma = null, Ad(t)) : (Et = Wn, ma = null, gi(
                  e,
                  t,
                  r,
                  Ep
                ));
                break;
              case Wb:
                var h = null;
                switch (et.tag) {
                  case 26:
                    h = et.memoizedState;
                  case 5:
                  case 27:
                    var y = et;
                    if (!h || Rf(h)) {
                      Et = Wn, ma = null;
                      var S = y.sibling;
                      if (S !== null) et = S;
                      else {
                        var E = y.return;
                        E !== null ? (et = E, bf(E)) : et = null;
                      }
                      break t;
                    }
                    break;
                  default:
                    console.error(
                      "Unexpected type of fiber triggered a suspensey commit. This is a bug in React."
                    );
                }
                Et = Wn, ma = null, gi(
                  e,
                  t,
                  r,
                  Wb
                );
                break;
              case Ch:
                Et = Wn, ma = null, gi(
                  e,
                  t,
                  r,
                  Ch
                );
                break;
              case Fb:
                vd(), Pt = yv;
                break e;
              default:
                throw Error(
                  "Unexpected SuspendedReason. This is a bug in React."
                );
            }
          $.actQueue !== null ? Ed() : ly();
          break;
        } catch (Z) {
          vf(e, Z);
        }
      while (!0);
      return ws(), $.H = i, $.A = o, bt = n, et !== null ? (ge !== null && typeof ge.markRenderYielded == "function" && ge.markRenderYielded(), jc) : (nt(), xt = null, lt = 0, qr(), Pt);
    }
    function ly() {
      for (; et !== null && !Xg(); )
        ny(et);
    }
    function ny(e) {
      var t = e.alternate;
      (e.mode & kl) !== Bt ? (_s(e), t = Se(
        e,
        dd,
        t,
        e,
        _i
      ), gu(e)) : t = Se(
        e,
        dd,
        t,
        e,
        _i
      ), e.memoizedProps = e.pendingProps, t === null ? bf(e) : et = t;
    }
    function Ad(e) {
      var t = Se(e, Rd, e);
      e.memoizedProps = e.pendingProps, t === null ? bf(e) : et = t;
    }
    function Rd(e) {
      var t = e.alternate, n = (e.mode & kl) !== Bt;
      switch (n && _s(e), e.tag) {
        case 15:
        case 0:
          t = Nm(
            t,
            e,
            e.pendingProps,
            e.type,
            void 0,
            lt
          );
          break;
        case 11:
          t = Nm(
            t,
            e,
            e.pendingProps,
            e.type.render,
            e.ref,
            lt
          );
          break;
        case 5:
          ua(e);
        default:
          Ym(t, e), e = et = om(e, _i), t = dd(t, e, _i);
      }
      return n && gu(e), t;
    }
    function gi(e, t, n, i) {
      ws(), ua(t), Ah = null, yp = 0;
      var o = t.return;
      try {
        if (af(
          e,
          o,
          t,
          n,
          lt
        )) {
          Pt = bp, xo(
            e,
            gn(n, e.current)
          ), et = null;
          return;
        }
      } catch (r) {
        if (o !== null) throw et = o, r;
        Pt = bp, xo(
          e,
          gn(n, e.current)
        ), et = null;
        return;
      }
      t.flags & 32768 ? (ht || i === Sp ? e = !0 : Hh || (lt & 536870912) !== 0 ? e = !1 : (fr = e = !0, (i === es || i === ts || i === Tp || i === Ch) && (i = nu.current, i !== null && i.tag === 13 && (i.flags |= 16384))), Od(t, e)) : bf(t);
    }
    function bf(e) {
      var t = e;
      do {
        if ((t.flags & 32768) !== 0) {
          Od(
            t,
            fr
          );
          return;
        }
        var n = t.alternate;
        if (e = t.return, _s(t), n = Se(
          t,
          vg,
          n,
          t,
          _i
        ), (t.mode & kl) !== Bt && nc(t), n !== null) {
          et = n;
          return;
        }
        if (t = t.sibling, t !== null) {
          et = t;
          return;
        }
        et = t = e;
      } while (t !== null);
      Pt === jc && (Pt = sS);
    }
    function Od(e, t) {
      do {
        var n = bg(e.alternate, e);
        if (n !== null) {
          n.flags &= 32767, et = n;
          return;
        }
        if ((e.mode & kl) !== Bt) {
          nc(e), n = e.actualDuration;
          for (var i = e.child; i !== null; )
            n += i.actualDuration, i = i.sibling;
          e.actualDuration = n;
        }
        if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
          et = e;
          return;
        }
        et = e = n;
      } while (e !== null);
      Pt = yv, et = null;
    }
    function Dd(e, t, n, i, o, r, h, y, S) {
      e.cancelPendingCommit = null;
      do
        No();
      while (Wl !== ns);
      if (Yu.flushLegacyContextWarning(), Yu.flushPendingUnsafeLifecycleWarnings(), (bt & (xn | Gu)) !== ha)
        throw Error("Should not already be working.");
      if (ge !== null && typeof ge.markCommitStarted == "function" && ge.markCommitStarted(n), t === null) ou();
      else {
        if (n === 0 && console.error(
          "finishedLanes should not be empty during a commit. This is a bug in React."
        ), t === e.current)
          throw Error(
            "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."
          );
        if (r = t.lanes | t.childLanes, r |= zb, Pv(
          e,
          n,
          r,
          h,
          y,
          S
        ), e === xt && (et = xt = null, lt = 0), Bh = t, mr = e, yr = n, l0 = r, n0 = o, vS = i, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, cy(Io, function() {
          return Sf(), null;
        })) : (e.callbackNode = null, e.callbackPriority = 0), av = vh(), i = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || i) {
          i = $.T, $.T = null, o = _e.p, _e.p = Ml, h = bt, bt |= Gu;
          try {
            yd(e, t, n);
          } finally {
            bt = h, _e.p = o, $.T = i;
          }
        }
        Wl = yS, _a(), Md(), Mg();
      }
    }
    function _a() {
      if (Wl === yS) {
        Wl = ns;
        var e = mr, t = Bh, n = yr, i = (t.flags & 13878) !== 0;
        if ((t.subtreeFlags & 13878) !== 0 || i) {
          i = $.T, $.T = null;
          var o = _e.p;
          _e.p = Ml;
          var r = bt;
          bt |= Gu;
          try {
            zh = n, xh = e, $m(t, e), xh = zh = null, n = m0;
            var h = ag(e.containerInfo), y = n.focusedElem, S = n.selectionRange;
            if (h !== y && y && y.ownerDocument && ng(
              y.ownerDocument.documentElement,
              y
            )) {
              if (S !== null && am(y)) {
                var E = S.start, Z = S.end;
                if (Z === void 0 && (Z = E), "selectionStart" in y)
                  y.selectionStart = E, y.selectionEnd = Math.min(
                    Z,
                    y.value.length
                  );
                else {
                  var F = y.ownerDocument || document, G = F && F.defaultView || window;
                  if (G.getSelection) {
                    var P = G.getSelection(), Te = y.textContent.length, qe = Math.min(
                      S.start,
                      Te
                    ), Ut = S.end === void 0 ? qe : Math.min(S.end, Te);
                    !P.extend && qe > Ut && (h = Ut, Ut = qe, qe = h);
                    var ut = nm(
                      y,
                      qe
                    ), M = nm(
                      y,
                      Ut
                    );
                    if (ut && M && (P.rangeCount !== 1 || P.anchorNode !== ut.node || P.anchorOffset !== ut.offset || P.focusNode !== M.node || P.focusOffset !== M.offset)) {
                      var z = F.createRange();
                      z.setStart(ut.node, ut.offset), P.removeAllRanges(), qe > Ut ? (P.addRange(z), P.extend(M.node, M.offset)) : (z.setEnd(M.node, M.offset), P.addRange(z));
                    }
                  }
                }
              }
              for (F = [], P = y; P = P.parentNode; )
                P.nodeType === 1 && F.push({
                  element: P,
                  left: P.scrollLeft,
                  top: P.scrollTop
                });
              for (typeof y.focus == "function" && y.focus(), y = 0; y < F.length; y++) {
                var w = F[y];
                w.element.scrollLeft = w.left, w.element.scrollTop = w.top;
              }
            }
            Bv = !!h0, m0 = h0 = null;
          } finally {
            bt = r, _e.p = o, $.T = i;
          }
        }
        e.current = t, Wl = pS;
      }
    }
    function Md() {
      if (Wl === pS) {
        Wl = ns;
        var e = mr, t = Bh, n = yr, i = (t.flags & 8772) !== 0;
        if ((t.subtreeFlags & 8772) !== 0 || i) {
          i = $.T, $.T = null;
          var o = _e.p;
          _e.p = Ml;
          var r = bt;
          bt |= Gu;
          try {
            ge !== null && typeof ge.markLayoutEffectsStarted == "function" && ge.markLayoutEffectsStarted(n), zh = n, xh = e, Jm(
              e,
              t.alternate,
              t
            ), xh = zh = null, ge !== null && typeof ge.markLayoutEffectsStopped == "function" && ge.markLayoutEffectsStopped();
          } finally {
            bt = r, _e.p = o, $.T = i;
          }
        }
        Wl = gS;
      }
    }
    function Mg() {
      if (Wl === eA || Wl === gS) {
        Wl = ns, gb();
        var e = mr, t = Bh, n = yr, i = vS, o = (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0;
        o ? Wl = t0 : (Wl = ns, Bh = mr = null, qa(e, e.pendingLanes), as = 0, Dp = null);
        var r = e.pendingLanes;
        if (r === 0 && (hr = null), o || _o(e), o = Zh(n), t = t.stateNode, Dl && typeof Dl.onCommitFiberRoot == "function")
          try {
            var h = (t.current.flags & 128) === 128;
            switch (o) {
              case Ml:
                var y = Wd;
                break;
              case da:
                y = _f;
                break;
              case wu:
                y = Io;
                break;
              case eh:
                y = qf;
                break;
              default:
                y = Io;
            }
            Dl.onCommitFiberRoot(
              Mi,
              t,
              y,
              h
            );
          } catch (F) {
            fn || (fn = !0, console.error(
              "React instrumentation encountered an error: %s",
              F
            ));
          }
        if (Kt && e.memoizedUpdaters.clear(), Im(), i !== null) {
          h = $.T, y = _e.p, _e.p = Ml, $.T = null;
          try {
            var S = e.onRecoverableError;
            for (t = 0; t < i.length; t++) {
              var E = i[t], Z = zg(E.stack);
              Se(
                E.source,
                S,
                E.value,
                Z
              );
            }
          } finally {
            $.T = h, _e.p = y;
          }
        }
        (yr & 3) !== 0 && No(), Gn(e), r = e.pendingLanes, (n & 4194090) !== 0 && (r & 42) !== 0 ? (iv = !0, e === a0 ? Op++ : (Op = 0, a0 = e)) : Op = 0, Sc(0), ou();
      }
    }
    function zg(e) {
      return e = { componentStack: e }, Object.defineProperty(e, "digest", {
        get: function() {
          console.error(
            'You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.'
          );
        }
      }), e;
    }
    function qa(e, t) {
      (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Ta(t)));
    }
    function No(e) {
      return _a(), Md(), Mg(), Sf();
    }
    function Sf() {
      if (Wl !== t0) return !1;
      var e = mr, t = l0;
      l0 = 0;
      var n = Zh(yr), i = wu > n ? wu : n;
      n = $.T;
      var o = _e.p;
      try {
        _e.p = i, $.T = null, i = n0, n0 = null;
        var r = mr, h = yr;
        if (Wl = ns, Bh = mr = null, yr = 0, (bt & (xn | Gu)) !== ha)
          throw Error("Cannot flush passive effects while already rendering.");
        u0 = !0, vv = !1, ge !== null && typeof ge.markPassiveEffectsStarted == "function" && ge.markPassiveEffectsStarted(h);
        var y = bt;
        if (bt |= Gu, Wm(r.current), mf(
          r,
          r.current,
          h,
          i
        ), ge !== null && typeof ge.markPassiveEffectsStopped == "function" && ge.markPassiveEffectsStopped(), _o(r), bt = y, Sc(0, !1), vv ? r === Dp ? as++ : (as = 0, Dp = r) : as = 0, vv = u0 = !1, Dl && typeof Dl.onPostCommitFiberRoot == "function")
          try {
            Dl.onPostCommitFiberRoot(Mi, r);
          } catch (E) {
            fn || (fn = !0, console.error(
              "React instrumentation encountered an error: %s",
              E
            ));
          }
        var S = r.current.stateNode;
        return S.effectDuration = 0, S.passiveEffectDuration = 0, !0;
      } finally {
        _e.p = o, $.T = n, qa(e, t);
      }
    }
    function wo(e, t, n) {
      t = gn(n, t), t = Bl(e.stateNode, t, 2), e = na(e, t, 2), e !== null && (lo(e, 2), Gn(e));
    }
    function Ne(e, t, n) {
      if (Nh = !1, e.tag === 3)
        wo(e, e, n);
      else {
        for (; t !== null; ) {
          if (t.tag === 3) {
            wo(
              t,
              e,
              n
            );
            return;
          }
          if (t.tag === 1) {
            var i = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (hr === null || !hr.has(i))) {
              e = gn(n, e), n = jt(2), i = na(t, n, 2), i !== null && (nf(
                n,
                i,
                t,
                e
              ), lo(i, 2), Gn(i));
              return;
            }
          }
          t = t.return;
        }
        console.error(
          `Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,
          n
        );
      }
    }
    function ay(e, t, n) {
      var i = e.pingCache;
      if (i === null) {
        i = e.pingCache = new WE();
        var o = /* @__PURE__ */ new Set();
        i.set(t, o);
      } else
        o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o));
      o.has(n) || (Ib = !0, o.add(n), i = fb.bind(null, e, t, n), Kt && qo(e, n), t.then(i, i));
    }
    function fb(e, t, n) {
      var i = e.pingCache;
      i !== null && i.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Pm() && $.actQueue === null && console.error(
        `A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`
      ), xt === e && (lt & n) === n && (Pt === Pf || Pt === $b && (lt & 62914560) === lt && Ka() - e0 < hS ? (bt & xn) === ha && bc(e, 0) : Pb |= n, ls === lt && (ls = 0)), Gn(e);
    }
    function uy(e, t) {
      t === 0 && (t = Ar()), e = Il(e, t), e !== null && (lo(e, t), Gn(e));
    }
    function Tf(e) {
      var t = e.memoizedState, n = 0;
      t !== null && (n = t.retryLane), uy(e, n);
    }
    function vi(e, t) {
      var n = 0;
      switch (e.tag) {
        case 13:
          var i = e.stateNode, o = e.memoizedState;
          o !== null && (n = o.retryLane);
          break;
        case 19:
          i = e.stateNode;
          break;
        case 22:
          i = e.stateNode._retryCache;
          break;
        default:
          throw Error(
            "Pinged unknown suspense boundary type. This is probably a bug in React."
          );
      }
      i !== null && i.delete(t), uy(e, n);
    }
    function zd(e, t, n) {
      if ((t.subtreeFlags & 67117056) !== 0)
        for (t = t.child; t !== null; ) {
          var i = e, o = t, r = o.type === Jo;
          r = n || r, o.tag !== 22 ? o.flags & 67108864 ? r && Se(
            o,
            iy,
            i,
            o,
            (o.mode & r1) === Bt
          ) : zd(
            i,
            o,
            r
          ) : o.memoizedState === null && (r && o.flags & 8192 ? Se(
            o,
            iy,
            i,
            o
          ) : o.subtreeFlags & 67108864 && Se(
            o,
            zd,
            i,
            o,
            r
          )), t = t.sibling;
        }
    }
    function iy(e, t) {
      var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : !0;
      tt(!0);
      try {
        Tn(t), n && gf(t), Ou(e, t.alternate, t, !1), n && gd(e, t, 0, null, !1, 0);
      } finally {
        tt(!1);
      }
    }
    function _o(e) {
      var t = !0;
      e.current.mode & (hn | Lu) || (t = !1), zd(
        e,
        e.current,
        t
      );
    }
    function fa(e) {
      if ((bt & xn) === ha) {
        var t = e.tag;
        if (t === 3 || t === 1 || t === 0 || t === 11 || t === 14 || t === 15) {
          if (t = se(e) || "ReactComponent", bv !== null) {
            if (bv.has(t)) return;
            bv.add(t);
          } else bv = /* @__PURE__ */ new Set([t]);
          Se(e, function() {
            console.error(
              "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead."
            );
          });
        }
      }
    }
    function qo(e, t) {
      Kt && e.memoizedUpdaters.forEach(function(n) {
        ru(e, n, t);
      });
    }
    function cy(e, t) {
      var n = $.actQueue;
      return n !== null ? (n.push(t), nA) : $d(e, t);
    }
    function xg(e) {
      Pm() && $.actQueue === null && Se(e, function() {
        console.error(
          `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,
          se(e)
        );
      });
    }
    function Gn(e) {
      e !== wh && e.next === null && (wh === null ? Sv = wh = e : wh = wh.next = e), Tv = !0, $.actQueue !== null ? c0 || (c0 = !0, cl()) : i0 || (i0 = !0, cl());
    }
    function Sc(e, t) {
      if (!o0 && Tv) {
        o0 = !0;
        do
          for (var n = !1, i = Sv; i !== null; ) {
            if (e !== 0) {
              var o = i.pendingLanes;
              if (o === 0) var r = 0;
              else {
                var h = i.suspendedLanes, y = i.pingedLanes;
                r = (1 << 31 - _l(42 | e) + 1) - 1, r &= o & ~(h & ~y), r = r & 201326741 ? r & 201326741 | 1 : r ? r | 2 : 0;
              }
              r !== 0 && (n = !0, Cd(i, r));
            } else
              r = lt, r = $t(
                i,
                i === xt ? r : 0,
                i.cancelPendingCommit !== null || i.timeoutHandle !== cs
              ), (r & 3) === 0 || Er(i, r) || (n = !0, Cd(i, r));
            i = i.next;
          }
        while (n);
        o0 = !1;
      }
    }
    function xd() {
      Ud();
    }
    function Ud() {
      Tv = c0 = i0 = !1;
      var e = 0;
      us !== 0 && (Lo() && (e = us), us = 0);
      for (var t = Ka(), n = null, i = Sv; i !== null; ) {
        var o = i.next, r = La(i, t);
        r === 0 ? (i.next = null, n === null ? Sv = o : n.next = o, o === null && (wh = n)) : (n = i, (e !== 0 || (r & 3) !== 0) && (Tv = !0)), i = o;
      }
      Sc(e);
    }
    function La(e, t) {
      for (var n = e.suspendedLanes, i = e.pingedLanes, o = e.expirationTimes, r = e.pendingLanes & -62914561; 0 < r; ) {
        var h = 31 - _l(r), y = 1 << h, S = o[h];
        S === -1 ? ((y & n) === 0 || (y & i) !== 0) && (o[h] = Vp(y, t)) : S <= t && (e.expiredLanes |= y), r &= ~y;
      }
      if (t = xt, n = lt, n = $t(
        e,
        e === t ? n : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== cs
      ), i = e.callbackNode, n === 0 || e === t && (Et === es || Et === ts) || e.cancelPendingCommit !== null)
        return i !== null && Hd(i), e.callbackNode = null, e.callbackPriority = 0;
      if ((n & 3) === 0 || Er(e, n)) {
        if (t = n & -n, t !== e.callbackPriority || $.actQueue !== null && i !== r0)
          Hd(i);
        else return t;
        switch (Zh(n)) {
          case Ml:
          case da:
            n = _f;
            break;
          case wu:
            n = Io;
            break;
          case eh:
            n = qf;
            break;
          default:
            n = Io;
        }
        return i = Gt.bind(null, e), $.actQueue !== null ? ($.actQueue.push(i), n = r0) : n = $d(n, i), e.callbackPriority = t, e.callbackNode = n, t;
      }
      return i !== null && Hd(i), e.callbackPriority = 2, e.callbackNode = null, 2;
    }
    function Gt(e, t) {
      if (iv = uv = !1, Wl !== ns && Wl !== t0)
        return e.callbackNode = null, e.callbackPriority = 0, null;
      var n = e.callbackNode;
      if (No() && e.callbackNode !== n)
        return null;
      var i = lt;
      return i = $t(
        e,
        e === xt ? i : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== cs
      ), i === 0 ? null : (il(
        e,
        i,
        t
      ), La(e, Ka()), e.callbackNode != null && e.callbackNode === n ? Gt.bind(null, e) : null);
    }
    function Cd(e, t) {
      if (No()) return null;
      uv = iv, iv = !1, il(e, t, !0);
    }
    function Hd(e) {
      e !== r0 && e !== null && pb(e);
    }
    function cl() {
      $.actQueue !== null && $.actQueue.push(function() {
        return Ud(), null;
      }), hA(function() {
        (bt & (xn | Gu)) !== ha ? $d(
          Wd,
          xd
        ) : Ud();
      });
    }
    function oy() {
      return us === 0 && (us = Xh()), us;
    }
    function ry(e) {
      return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : (ze(e, "action"), fo("" + e));
    }
    function fy(e, t) {
      var n = t.ownerDocument.createElement("input");
      return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
    }
    function Ct(e, t, n, i, o) {
      if (t === "submit" && n && n.stateNode === o) {
        var r = ry(
          (o[sn] || null).action
        ), h = i.submitter;
        h && (t = (t = h[sn] || null) ? ry(t.formAction) : h.getAttribute("formAction"), t !== null && (r = t, h = null));
        var y = new He(
          "action",
          "action",
          null,
          i,
          o
        );
        e.push({
          event: y,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (i.defaultPrevented) {
                  if (us !== 0) {
                    var S = h ? fy(
                      o,
                      h
                    ) : new FormData(o), E = {
                      pending: !0,
                      data: S,
                      method: o.method,
                      action: r
                    };
                    Object.freeze(E), cc(
                      n,
                      E,
                      null,
                      S
                    );
                  }
                } else
                  typeof r == "function" && (y.preventDefault(), S = h ? fy(
                    o,
                    h
                  ) : new FormData(o), E = {
                    pending: !0,
                    data: S,
                    method: o.method,
                    action: r
                  }, Object.freeze(E), cc(
                    n,
                    E,
                    r,
                    S
                  ));
              },
              currentTarget: o
            }
          ]
        });
      }
    }
    function El(e, t, n) {
      e.currentTarget = n;
      try {
        t(e);
      } catch (i) {
        Qb(i);
      }
      e.currentTarget = null;
    }
    function Ya(e, t) {
      t = (t & 4) !== 0;
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        e: {
          var o = void 0, r = i.event;
          if (i = i.listeners, t)
            for (var h = i.length - 1; 0 <= h; h--) {
              var y = i[h], S = y.instance, E = y.currentTarget;
              if (y = y.listener, S !== o && r.isPropagationStopped())
                break e;
              S !== null ? Se(
                S,
                El,
                r,
                y,
                E
              ) : El(r, y, E), o = S;
            }
          else
            for (h = 0; h < i.length; h++) {
              if (y = i[h], S = y.instance, E = y.currentTarget, y = y.listener, S !== o && r.isPropagationStopped())
                break e;
              S !== null ? Se(
                S,
                El,
                r,
                y,
                E
              ) : El(r, y, E), o = S;
            }
        }
      }
    }
    function Fe(e, t) {
      f0.has(e) || console.error(
        'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
        e
      );
      var n = t[qy];
      n === void 0 && (n = t[qy] = /* @__PURE__ */ new Set());
      var i = e + "__bubble";
      n.has(i) || (Nd(t, e, 2, !1), n.add(i));
    }
    function Bd(e, t, n) {
      f0.has(e) && !t && console.error(
        'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
        e
      );
      var i = 0;
      t && (i |= 4), Nd(
        n,
        e,
        i,
        t
      );
    }
    function sy(e) {
      if (!e[Ev]) {
        e[Ev] = !0, Zg.forEach(function(n) {
          n !== "selectionchange" && (f0.has(n) || Bd(n, !1, e), Bd(n, !0, e));
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Ev] || (t[Ev] = !0, Bd("selectionchange", !1, t));
      }
    }
    function Nd(e, t, n, i) {
      switch (Zd(t)) {
        case Ml:
          var o = hb;
          break;
        case da:
          o = Qd;
          break;
        default:
          o = Ei;
      }
      n = o.bind(
        null,
        t,
        n,
        e
      ), o = void 0, !V || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), i ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
      }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
        passive: o
      }) : e.addEventListener(
        t,
        n,
        !1
      );
    }
    function Ql(e, t, n, i, o) {
      var r = i;
      if ((t & 1) === 0 && (t & 2) === 0 && i !== null)
        e: for (; ; ) {
          if (i === null) return;
          var h = i.tag;
          if (h === 3 || h === 4) {
            var y = i.stateNode.containerInfo;
            if (y === o) break;
            if (h === 4)
              for (h = i.return; h !== null; ) {
                var S = h.tag;
                if ((S === 3 || S === 4) && h.stateNode.containerInfo === o)
                  return;
                h = h.return;
              }
            for (; y !== null; ) {
              if (h = fu(y), h === null) return;
              if (S = h.tag, S === 5 || S === 6 || S === 26 || S === 27) {
                i = r = h;
                continue e;
              }
              y = y.parentNode;
            }
          }
          i = i.return;
        }
      Os(function() {
        var E = r, Z = Ji(n), F = [];
        e: {
          var G = o1.get(e);
          if (G !== void 0) {
            var P = He, Te = e;
            switch (e) {
              case "keypress":
                if (so(n) === 0) break e;
              case "keydown":
              case "keyup":
                P = SE;
                break;
              case "focusin":
                Te = "focus", P = ct;
                break;
              case "focusout":
                Te = "blur", P = ct;
                break;
              case "beforeblur":
              case "afterblur":
                P = ct;
                break;
              case "click":
                if (n.button === 2) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                P = $e;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                P = we;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                P = AE;
                break;
              case a1:
              case u1:
              case i1:
                P = Tb;
                break;
              case c1:
                P = OE;
                break;
              case "scroll":
              case "scrollend":
                P = L;
                break;
              case "wheel":
                P = ME;
                break;
              case "copy":
              case "cut":
              case "paste":
                P = hE;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                P = W0;
                break;
              case "toggle":
              case "beforetoggle":
                P = xE;
            }
            var qe = (t & 4) !== 0, Ut = !qe && (e === "scroll" || e === "scrollend"), ut = qe ? G !== null ? G + "Capture" : null : G;
            qe = [];
            for (var M = E, z; M !== null; ) {
              var w = M;
              if (z = w.stateNode, w = w.tag, w !== 5 && w !== 26 && w !== 27 || z === null || ut === null || (w = hu(M, ut), w != null && qe.push(
                Zl(
                  M,
                  w,
                  z
                )
              )), Ut) break;
              M = M.return;
            }
            0 < qe.length && (G = new P(
              G,
              Te,
              null,
              n,
              Z
            ), F.push({
              event: G,
              listeners: qe
            }));
          }
        }
        if ((t & 7) === 0) {
          e: {
            if (G = e === "mouseover" || e === "pointerover", P = e === "mouseout" || e === "pointerout", G && n !== f && (Te = n.relatedTarget || n.fromElement) && (fu(Te) || Te[xi]))
              break e;
            if ((P || G) && (G = Z.window === Z ? Z : (G = Z.ownerDocument) ? G.defaultView || G.parentWindow : window, P ? (Te = n.relatedTarget || n.toElement, P = E, Te = Te ? fu(Te) : null, Te !== null && (Ut = H(Te), qe = Te.tag, Te !== Ut || qe !== 5 && qe !== 27 && qe !== 6) && (Te = null)) : (P = null, Te = E), P !== Te)) {
              if (qe = $e, w = "onMouseLeave", ut = "onMouseEnter", M = "mouse", (e === "pointerout" || e === "pointerover") && (qe = W0, w = "onPointerLeave", ut = "onPointerEnter", M = "pointer"), Ut = P == null ? G : Zu(P), z = Te == null ? G : Zu(Te), G = new qe(
                w,
                M + "leave",
                P,
                n,
                Z
              ), G.target = Ut, G.relatedTarget = z, w = null, fu(Z) === E && (qe = new qe(
                ut,
                M + "enter",
                Te,
                n,
                Z
              ), qe.target = z, qe.relatedTarget = Ut, w = qe), Ut = w, P && Te)
                t: {
                  for (qe = P, ut = Te, M = 0, z = qe; z; z = yl(z))
                    M++;
                  for (z = 0, w = ut; w; w = yl(w))
                    z++;
                  for (; 0 < M - z; )
                    qe = yl(qe), M--;
                  for (; 0 < z - M; )
                    ut = yl(ut), z--;
                  for (; M--; ) {
                    if (qe === ut || ut !== null && qe === ut.alternate)
                      break t;
                    qe = yl(qe), ut = yl(ut);
                  }
                  qe = null;
                }
              else qe = null;
              P !== null && dy(
                F,
                G,
                P,
                qe,
                !1
              ), Te !== null && Ut !== null && dy(
                F,
                Ut,
                Te,
                qe,
                !0
              );
            }
          }
          e: {
            if (G = E ? Zu(E) : window, P = G.nodeName && G.nodeName.toLowerCase(), P === "select" || P === "input" && G.type === "file")
              var ee = tm;
            else if (Pp(G))
              if (l1)
                ee = ib;
              else {
                ee = lm;
                var pe = ab;
              }
            else
              P = G.nodeName, !P || P.toLowerCase() !== "input" || G.type !== "checkbox" && G.type !== "radio" ? E && Ki(E.elementType) && (ee = tm) : ee = ub;
            if (ee && (ee = ee(e, E))) {
              xs(
                F,
                ee,
                n,
                Z
              );
              break e;
            }
            pe && pe(e, G, E), e === "focusout" && E && G.type === "number" && E.memoizedProps.value != null && bs(G, "number", G.value);
          }
          switch (pe = E ? Zu(E) : window, e) {
            case "focusin":
              (Pp(pe) || pe.contentEditable === "true") && (fh = pe, Ab = E, np = null);
              break;
            case "focusout":
              np = Ab = fh = null;
              break;
            case "mousedown":
              Rb = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Rb = !1, ug(
                F,
                n,
                Z
              );
              break;
            case "selectionchange":
              if (BE) break;
            case "keydown":
            case "keyup":
              ug(
                F,
                n,
                Z
              );
          }
          var Ge;
          if (Eb)
            e: {
              switch (e) {
                case "compositionstart":
                  var Ee = "onCompositionStart";
                  break e;
                case "compositionend":
                  Ee = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  Ee = "onCompositionUpdate";
                  break e;
              }
              Ee = void 0;
            }
          else
            rh ? Xl(e, n) && (Ee = "onCompositionEnd") : e === "keydown" && n.keyCode === F0 && (Ee = "onCompositionStart");
          Ee && (I0 && n.locale !== "ko" && (rh || Ee !== "onCompositionStart" ? Ee === "onCompositionEnd" && rh && (Ge = mu()) : (ae = Z, X = "value" in ae ? ae.value : ae.textContent, rh = !0)), pe = Ef(
            E,
            Ee
          ), 0 < pe.length && (Ee = new $0(
            Ee,
            e,
            null,
            n,
            Z
          ), F.push({
            event: Ee,
            listeners: pe
          }), Ge ? Ee.data = Ge : (Ge = Iu(n), Ge !== null && (Ee.data = Ge)))), (Ge = CE ? zs(e, n) : Nr(e, n)) && (Ee = Ef(
            E,
            "onBeforeInput"
          ), 0 < Ee.length && (pe = new yE(
            "onBeforeInput",
            "beforeinput",
            null,
            n,
            Z
          ), F.push({
            event: pe,
            listeners: Ee
          }), pe.data = Ge)), Ct(
            F,
            e,
            E,
            n,
            Z
          );
        }
        Ya(F, t);
      });
    }
    function Zl(e, t, n) {
      return {
        instance: e,
        listener: t,
        currentTarget: n
      };
    }
    function Ef(e, t) {
      for (var n = t + "Capture", i = []; e !== null; ) {
        var o = e, r = o.stateNode;
        if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || r === null || (o = hu(e, n), o != null && i.unshift(
          Zl(e, o, r)
        ), o = hu(e, t), o != null && i.push(
          Zl(e, o, r)
        )), e.tag === 3) return i;
        e = e.return;
      }
      return [];
    }
    function yl(e) {
      if (e === null) return null;
      do
        e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function dy(e, t, n, i, o) {
      for (var r = t._reactName, h = []; n !== null && n !== i; ) {
        var y = n, S = y.alternate, E = y.stateNode;
        if (y = y.tag, S !== null && S === i) break;
        y !== 5 && y !== 26 && y !== 27 || E === null || (S = E, o ? (E = hu(n, r), E != null && h.unshift(
          Zl(n, E, S)
        )) : o || (E = hu(n, r), E != null && h.push(
          Zl(n, E, S)
        ))), n = n.return;
      }
      h.length !== 0 && e.push({ event: t, listeners: h });
    }
    function ja(e, t) {
      ro(e, t), e !== "input" && e !== "textarea" && e !== "select" || t == null || t.value !== null || Py || (Py = !0, e === "select" && t.multiple ? console.error(
        "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
        e
      ) : console.error(
        "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
        e
      ));
      var n = {
        registrationNameDependencies: Jn,
        possibleRegistrationNames: xc
      };
      Ki(e) || typeof t.is == "string" || Ih(e, t, n), t.contentEditable && !t.suppressContentEditableWarning && t.children != null && console.error(
        "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
      );
    }
    function Ht(e, t, n, i) {
      t !== n && (n = Al(n), Al(t) !== n && (i[e] = t));
    }
    function bi(e, t, n) {
      t.forEach(function(i) {
        n[my(i)] = i === "style" ? Ec(e) : e.getAttribute(i);
      });
    }
    function Xn(e, t) {
      t === !1 ? console.error(
        "Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",
        e,
        e,
        e
      ) : console.error(
        "Expected `%s` listener to be a function, instead got a value of `%s` type.",
        e,
        typeof t
      );
    }
    function wd(e, t) {
      return e = e.namespaceURI === Qf || e.namespaceURI === ur ? e.ownerDocument.createElementNS(
        e.namespaceURI,
        e.tagName
      ) : e.ownerDocument.createElement(e.tagName), e.innerHTML = t, e.innerHTML;
    }
    function Al(e) {
      return Be(e) && (console.error(
        "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",
        Ue(e)
      ), gt(e)), (typeof e == "string" ? e : "" + e).replace(aA, `
`).replace(uA, "");
    }
    function hy(e, t) {
      return t = Al(t), Al(e) === t;
    }
    function Mu() {
    }
    function st(e, t, n, i, o, r) {
      switch (n) {
        case "children":
          typeof i == "string" ? (Hr(i, t, !1), t === "body" || t === "textarea" && i === "" || Zi(e, i)) : (typeof i == "number" || typeof i == "bigint") && (Hr("" + i, t, !1), t !== "body" && Zi(e, "" + i));
          break;
        case "className":
          Or(e, "class", i);
          break;
        case "tabIndex":
          Or(e, "tabindex", i);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          Or(e, n, i);
          break;
        case "style":
          Br(e, i, r);
          break;
        case "data":
          if (t !== "object") {
            Or(e, "data", i);
            break;
          }
        case "src":
        case "href":
          if (i === "" && (t !== "a" || n !== "href")) {
            console.error(
              n === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
              n,
              n
            ), e.removeAttribute(n);
            break;
          }
          if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
            e.removeAttribute(n);
            break;
          }
          ze(i, n), i = fo("" + i), e.setAttribute(n, i);
          break;
        case "action":
        case "formAction":
          if (i != null && (t === "form" ? n === "formAction" ? console.error(
            "You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."
          ) : typeof i == "function" && (o.encType == null && o.method == null || Ov || (Ov = !0, console.error(
            "Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."
          )), o.target == null || Rv || (Rv = !0, console.error(
            "Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."
          ))) : t === "input" || t === "button" ? n === "action" ? console.error(
            "You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."
          ) : t !== "input" || o.type === "submit" || o.type === "image" || Av ? t !== "button" || o.type == null || o.type === "submit" || Av ? typeof i == "function" && (o.name == null || AS || (AS = !0, console.error(
            'Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'
          )), o.formEncType == null && o.formMethod == null || Ov || (Ov = !0, console.error(
            "Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."
          )), o.formTarget == null || Rv || (Rv = !0, console.error(
            "Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."
          ))) : (Av = !0, console.error(
            'A button can only specify a formAction along with type="submit" or no type.'
          )) : (Av = !0, console.error(
            'An input can only specify a formAction along with type="submit" or type="image".'
          )) : console.error(
            n === "action" ? "You can only pass the action prop to <form>." : "You can only pass the formAction prop to <input> or <button>."
          )), typeof i == "function") {
            e.setAttribute(
              n,
              "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
            );
            break;
          } else
            typeof r == "function" && (n === "formAction" ? (t !== "input" && st(e, t, "name", o.name, o, null), st(
              e,
              t,
              "formEncType",
              o.formEncType,
              o,
              null
            ), st(
              e,
              t,
              "formMethod",
              o.formMethod,
              o,
              null
            ), st(
              e,
              t,
              "formTarget",
              o.formTarget,
              o,
              null
            )) : (st(
              e,
              t,
              "encType",
              o.encType,
              o,
              null
            ), st(e, t, "method", o.method, o, null), st(
              e,
              t,
              "target",
              o.target,
              o,
              null
            )));
          if (i == null || typeof i == "symbol" || typeof i == "boolean") {
            e.removeAttribute(n);
            break;
          }
          ze(i, n), i = fo("" + i), e.setAttribute(n, i);
          break;
        case "onClick":
          i != null && (typeof i != "function" && Xn(n, i), e.onclick = Mu);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && Xn(n, i), Fe("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && Xn(n, i), Fe("scrollend", e));
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (n = i.__html, n != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = n;
            }
          }
          break;
        case "multiple":
          e.multiple = i && typeof i != "function" && typeof i != "symbol";
          break;
        case "muted":
          e.muted = i && typeof i != "function" && typeof i != "symbol";
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          break;
        case "autoFocus":
          break;
        case "xlinkHref":
          if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
            e.removeAttribute("xlink:href");
            break;
          }
          ze(i, n), n = fo("" + i), e.setAttributeNS(is, "xlink:href", n);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          i != null && typeof i != "function" && typeof i != "symbol" ? (ze(i, n), e.setAttribute(n, "" + i)) : e.removeAttribute(n);
          break;
        case "inert":
          i !== "" || Dv[n] || (Dv[n] = !0, console.error(
            "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
            n
          ));
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          i && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
          break;
        case "capture":
        case "download":
          i === !0 ? e.setAttribute(n, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? (ze(i, n), e.setAttribute(n, i)) : e.removeAttribute(n);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? (ze(i, n), e.setAttribute(n, i)) : e.removeAttribute(n);
          break;
        case "rowSpan":
        case "start":
          i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? e.removeAttribute(n) : (ze(i, n), e.setAttribute(n, i));
          break;
        case "popover":
          Fe("beforetoggle", e), Fe("toggle", e), Rr(e, "popover", i);
          break;
        case "xlinkActuate":
          Fn(
            e,
            is,
            "xlink:actuate",
            i
          );
          break;
        case "xlinkArcrole":
          Fn(
            e,
            is,
            "xlink:arcrole",
            i
          );
          break;
        case "xlinkRole":
          Fn(
            e,
            is,
            "xlink:role",
            i
          );
          break;
        case "xlinkShow":
          Fn(
            e,
            is,
            "xlink:show",
            i
          );
          break;
        case "xlinkTitle":
          Fn(
            e,
            is,
            "xlink:title",
            i
          );
          break;
        case "xlinkType":
          Fn(
            e,
            is,
            "xlink:type",
            i
          );
          break;
        case "xmlBase":
          Fn(
            e,
            s0,
            "xml:base",
            i
          );
          break;
        case "xmlLang":
          Fn(
            e,
            s0,
            "xml:lang",
            i
          );
          break;
        case "xmlSpace":
          Fn(
            e,
            s0,
            "xml:space",
            i
          );
          break;
        case "is":
          r != null && console.error(
            'Cannot update the "is" prop after it has been initialized.'
          ), Rr(e, "is", i);
          break;
        case "innerText":
        case "textContent":
          break;
        case "popoverTarget":
          RS || i == null || typeof i != "object" || (RS = !0, console.error(
            "The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",
            i
          ));
        default:
          !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N" ? (n = Rs(n), Rr(e, n, i)) : Jn.hasOwnProperty(n) && i != null && typeof i != "function" && Xn(n, i);
      }
    }
    function Tc(e, t, n, i, o, r) {
      switch (n) {
        case "style":
          Br(e, i, r);
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (n = i.__html, n != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = n;
            }
          }
          break;
        case "children":
          typeof i == "string" ? Zi(e, i) : (typeof i == "number" || typeof i == "bigint") && Zi(e, "" + i);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && Xn(n, i), Fe("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && Xn(n, i), Fe("scrollend", e));
          break;
        case "onClick":
          i != null && (typeof i != "function" && Xn(n, i), e.onclick = Mu);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          if (Jn.hasOwnProperty(n))
            i != null && typeof i != "function" && Xn(n, i);
          else
            e: {
              if (n[0] === "o" && n[1] === "n" && (o = n.endsWith("Capture"), t = n.slice(2, o ? n.length - 7 : void 0), r = e[sn] || null, r = r != null ? r[n] : null, typeof r == "function" && e.removeEventListener(t, r, o), typeof i == "function")) {
                typeof r != "function" && r !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, i, o);
                break e;
              }
              n in e ? e[n] = i : i === !0 ? e.setAttribute(n, "") : Rr(e, n, i);
            }
      }
    }
    function Xt(e, t, n) {
      switch (ja(t, n), t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "img":
          Fe("error", e), Fe("load", e);
          var i = !1, o = !1, r;
          for (r in n)
            if (n.hasOwnProperty(r)) {
              var h = n[r];
              if (h != null)
                switch (r) {
                  case "src":
                    i = !0;
                    break;
                  case "srcSet":
                    o = !0;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  default:
                    st(e, t, r, h, n, null);
                }
            }
          o && st(e, t, "srcSet", n.srcSet, n, null), i && st(e, t, "src", n.src, n, null);
          return;
        case "input":
          Ju("input", n), Fe("invalid", e);
          var y = r = h = o = null, S = null, E = null;
          for (i in n)
            if (n.hasOwnProperty(i)) {
              var Z = n[i];
              if (Z != null)
                switch (i) {
                  case "name":
                    o = Z;
                    break;
                  case "type":
                    h = Z;
                    break;
                  case "checked":
                    S = Z;
                    break;
                  case "defaultChecked":
                    E = Z;
                    break;
                  case "value":
                    r = Z;
                    break;
                  case "defaultValue":
                    y = Z;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (Z != null)
                      throw Error(
                        t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                      );
                    break;
                  default:
                    st(e, t, i, Z, n, null);
                }
            }
          ku(e, n), kp(
            e,
            r,
            y,
            S,
            E,
            h,
            o,
            !1
          ), su(e);
          return;
        case "select":
          Ju("select", n), Fe("invalid", e), i = h = r = null;
          for (o in n)
            if (n.hasOwnProperty(o) && (y = n[o], y != null))
              switch (o) {
                case "value":
                  r = y;
                  break;
                case "defaultValue":
                  h = y;
                  break;
                case "multiple":
                  i = y;
                default:
                  st(
                    e,
                    t,
                    o,
                    y,
                    n,
                    null
                  );
              }
          xr(e, n), t = r, n = h, e.multiple = !!i, t != null ? du(e, !!i, t, !1) : n != null && du(e, !!i, n, !0);
          return;
        case "textarea":
          Ju("textarea", n), Fe("invalid", e), r = o = i = null;
          for (h in n)
            if (n.hasOwnProperty(h) && (y = n[h], y != null))
              switch (h) {
                case "value":
                  i = y;
                  break;
                case "defaultValue":
                  o = y;
                  break;
                case "children":
                  r = y;
                  break;
                case "dangerouslySetInnerHTML":
                  if (y != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  st(
                    e,
                    t,
                    h,
                    y,
                    n,
                    null
                  );
              }
          ga(e, n), Jh(e, i, o, r), su(e);
          return;
        case "option":
          Kh(e, n);
          for (S in n)
            if (n.hasOwnProperty(S) && (i = n[S], i != null))
              switch (S) {
                case "selected":
                  e.selected = i && typeof i != "function" && typeof i != "symbol";
                  break;
                default:
                  st(e, t, S, i, n, null);
              }
          return;
        case "dialog":
          Fe("beforetoggle", e), Fe("toggle", e), Fe("cancel", e), Fe("close", e);
          break;
        case "iframe":
        case "object":
          Fe("load", e);
          break;
        case "video":
        case "audio":
          for (i = 0; i < Mp.length; i++)
            Fe(Mp[i], e);
          break;
        case "image":
          Fe("error", e), Fe("load", e);
          break;
        case "details":
          Fe("toggle", e);
          break;
        case "embed":
        case "source":
        case "link":
          Fe("error", e), Fe("load", e);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
          for (E in n)
            if (n.hasOwnProperty(E) && (i = n[E], i != null))
              switch (E) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(
                    t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                  );
                default:
                  st(e, t, E, i, n, null);
              }
          return;
        default:
          if (Ki(t)) {
            for (Z in n)
              n.hasOwnProperty(Z) && (i = n[Z], i !== void 0 && Tc(
                e,
                t,
                Z,
                i,
                n,
                void 0
              ));
            return;
          }
      }
      for (y in n)
        n.hasOwnProperty(y) && (i = n[y], i != null && st(e, t, y, i, n, null));
    }
    function Ug(e, t, n, i) {
      switch (ja(t, i), t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "input":
          var o = null, r = null, h = null, y = null, S = null, E = null, Z = null;
          for (P in n) {
            var F = n[P];
            if (n.hasOwnProperty(P) && F != null)
              switch (P) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  S = F;
                default:
                  i.hasOwnProperty(P) || st(
                    e,
                    t,
                    P,
                    null,
                    i,
                    F
                  );
              }
          }
          for (var G in i) {
            var P = i[G];
            if (F = n[G], i.hasOwnProperty(G) && (P != null || F != null))
              switch (G) {
                case "type":
                  r = P;
                  break;
                case "name":
                  o = P;
                  break;
                case "checked":
                  E = P;
                  break;
                case "defaultChecked":
                  Z = P;
                  break;
                case "value":
                  h = P;
                  break;
                case "defaultValue":
                  y = P;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (P != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  P !== F && st(
                    e,
                    t,
                    G,
                    P,
                    i,
                    F
                  );
              }
          }
          t = n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null, i = i.type === "checkbox" || i.type === "radio" ? i.checked != null : i.value != null, t || !i || ES || (console.error(
            "A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), ES = !0), !t || i || TS || (console.error(
            "A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), TS = !0), $u(
            e,
            h,
            y,
            S,
            E,
            Z,
            r,
            o
          );
          return;
        case "select":
          P = h = y = G = null;
          for (r in n)
            if (S = n[r], n.hasOwnProperty(r) && S != null)
              switch (r) {
                case "value":
                  break;
                case "multiple":
                  P = S;
                default:
                  i.hasOwnProperty(r) || st(
                    e,
                    t,
                    r,
                    null,
                    i,
                    S
                  );
              }
          for (o in i)
            if (r = i[o], S = n[o], i.hasOwnProperty(o) && (r != null || S != null))
              switch (o) {
                case "value":
                  G = r;
                  break;
                case "defaultValue":
                  y = r;
                  break;
                case "multiple":
                  h = r;
                default:
                  r !== S && st(
                    e,
                    t,
                    o,
                    r,
                    i,
                    S
                  );
              }
          i = y, t = h, n = P, G != null ? du(e, !!t, G, !1) : !!n != !!t && (i != null ? du(e, !!t, i, !0) : du(e, !!t, t ? [] : "", !1));
          return;
        case "textarea":
          P = G = null;
          for (y in n)
            if (o = n[y], n.hasOwnProperty(y) && o != null && !i.hasOwnProperty(y))
              switch (y) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  st(e, t, y, null, i, o);
              }
          for (h in i)
            if (o = i[h], r = n[h], i.hasOwnProperty(h) && (o != null || r != null))
              switch (h) {
                case "value":
                  G = o;
                  break;
                case "defaultValue":
                  P = o;
                  break;
                case "children":
                  break;
                case "dangerouslySetInnerHTML":
                  if (o != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  o !== r && st(e, t, h, o, i, r);
              }
          Ss(e, G, P);
          return;
        case "option":
          for (var Te in n)
            if (G = n[Te], n.hasOwnProperty(Te) && G != null && !i.hasOwnProperty(Te))
              switch (Te) {
                case "selected":
                  e.selected = !1;
                  break;
                default:
                  st(
                    e,
                    t,
                    Te,
                    null,
                    i,
                    G
                  );
              }
          for (S in i)
            if (G = i[S], P = n[S], i.hasOwnProperty(S) && G !== P && (G != null || P != null))
              switch (S) {
                case "selected":
                  e.selected = G && typeof G != "function" && typeof G != "symbol";
                  break;
                default:
                  st(
                    e,
                    t,
                    S,
                    G,
                    i,
                    P
                  );
              }
          return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
          for (var qe in n)
            G = n[qe], n.hasOwnProperty(qe) && G != null && !i.hasOwnProperty(qe) && st(
              e,
              t,
              qe,
              null,
              i,
              G
            );
          for (E in i)
            if (G = i[E], P = n[E], i.hasOwnProperty(E) && G !== P && (G != null || P != null))
              switch (E) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (G != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  st(
                    e,
                    t,
                    E,
                    G,
                    i,
                    P
                  );
              }
          return;
        default:
          if (Ki(t)) {
            for (var Ut in n)
              G = n[Ut], n.hasOwnProperty(Ut) && G !== void 0 && !i.hasOwnProperty(Ut) && Tc(
                e,
                t,
                Ut,
                void 0,
                i,
                G
              );
            for (Z in i)
              G = i[Z], P = n[Z], !i.hasOwnProperty(Z) || G === P || G === void 0 && P === void 0 || Tc(
                e,
                t,
                Z,
                G,
                i,
                P
              );
            return;
          }
      }
      for (var ut in n)
        G = n[ut], n.hasOwnProperty(ut) && G != null && !i.hasOwnProperty(ut) && st(e, t, ut, null, i, G);
      for (F in i)
        G = i[F], P = n[F], !i.hasOwnProperty(F) || G === P || G == null && P == null || st(e, t, F, G, i, P);
    }
    function my(e) {
      switch (e) {
        case "class":
          return "className";
        case "for":
          return "htmlFor";
        default:
          return e;
      }
    }
    function Ec(e) {
      var t = {};
      e = e.style;
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        t[i] = e.getPropertyValue(i);
      }
      return t;
    }
    function yy(e, t, n) {
      if (t != null && typeof t != "object")
        console.error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      else {
        var i, o = i = "", r;
        for (r in t)
          if (t.hasOwnProperty(r)) {
            var h = t[r];
            h != null && typeof h != "boolean" && h !== "" && (r.indexOf("--") === 0 ? (Je(h, r), i += o + r + ":" + ("" + h).trim()) : typeof h != "number" || h === 0 || Xf.has(r) ? (Je(h, r), i += o + r.replace(_u, "-$1").toLowerCase().replace(qu, "-ms-") + ":" + ("" + h).trim()) : i += o + r.replace(_u, "-$1").toLowerCase().replace(qu, "-ms-") + ":" + h + "px", o = ";");
          }
        i = i || null, t = e.getAttribute("style"), t !== i && (i = Al(i), Al(t) !== i && (n.style = Ec(e)));
      }
    }
    function Kl(e, t, n, i, o, r) {
      if (o.delete(n), e = e.getAttribute(n), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (ze(i, t), e === "" + i)
              return;
        }
      Ht(t, e, i, r);
    }
    function py(e, t, n, i, o, r) {
      if (o.delete(n), e = e.getAttribute(n), e === null) {
        switch (typeof i) {
          case "function":
          case "symbol":
            return;
        }
        if (!i) return;
      } else
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (i) return;
        }
      Ht(t, e, i, r);
    }
    function gy(e, t, n, i, o, r) {
      if (o.delete(n), e = e.getAttribute(n), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (ze(i, n), e === "" + i)
              return;
        }
      Ht(t, e, i, r);
    }
    function Cg(e, t, n, i, o, r) {
      if (o.delete(n), e = e.getAttribute(n), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
          default:
            if (isNaN(i)) return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (!isNaN(i) && (ze(i, t), e === "" + i))
              return;
        }
      Ht(t, e, i, r);
    }
    function yt(e, t, n, i, o, r) {
      if (o.delete(n), e = e.getAttribute(n), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (ze(i, t), n = fo("" + i), e === n)
              return;
        }
      Ht(t, e, i, r);
    }
    function At(e, t, n, i) {
      for (var o = {}, r = /* @__PURE__ */ new Set(), h = e.attributes, y = 0; y < h.length; y++)
        switch (h[y].name.toLowerCase()) {
          case "value":
            break;
          case "checked":
            break;
          case "selected":
            break;
          default:
            r.add(h[y].name);
        }
      if (Ki(t)) {
        for (var S in n)
          if (n.hasOwnProperty(S)) {
            var E = n[S];
            if (E != null) {
              if (Jn.hasOwnProperty(S))
                typeof E != "function" && Xn(S, E);
              else if (n.suppressHydrationWarning !== !0)
                switch (S) {
                  case "children":
                    typeof E != "string" && typeof E != "number" || Ht(
                      "children",
                      e.textContent,
                      E,
                      o
                    );
                    continue;
                  case "suppressContentEditableWarning":
                  case "suppressHydrationWarning":
                  case "defaultValue":
                  case "defaultChecked":
                  case "innerHTML":
                  case "ref":
                    continue;
                  case "dangerouslySetInnerHTML":
                    h = e.innerHTML, E = E ? E.__html : void 0, E != null && (E = wd(e, E), Ht(
                      S,
                      h,
                      E,
                      o
                    ));
                    continue;
                  case "style":
                    r.delete(S), yy(e, E, o);
                    continue;
                  case "offsetParent":
                  case "offsetTop":
                  case "offsetLeft":
                  case "offsetWidth":
                  case "offsetHeight":
                  case "isContentEditable":
                  case "outerText":
                  case "outerHTML":
                    r.delete(S.toLowerCase()), console.error(
                      "Assignment to read-only property will result in a no-op: `%s`",
                      S
                    );
                    continue;
                  case "className":
                    r.delete("class"), h = Qp(
                      e,
                      "class",
                      E
                    ), Ht(
                      "className",
                      h,
                      E,
                      o
                    );
                    continue;
                  default:
                    i.context === Gc && t !== "svg" && t !== "math" ? r.delete(S.toLowerCase()) : r.delete(S), h = Qp(
                      e,
                      S,
                      E
                    ), Ht(
                      S,
                      h,
                      E,
                      o
                    );
                }
            }
          }
      } else
        for (E in n)
          if (n.hasOwnProperty(E) && (S = n[E], S != null)) {
            if (Jn.hasOwnProperty(E))
              typeof S != "function" && Xn(E, S);
            else if (n.suppressHydrationWarning !== !0)
              switch (E) {
                case "children":
                  typeof S != "string" && typeof S != "number" || Ht(
                    "children",
                    e.textContent,
                    S,
                    o
                  );
                  continue;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "value":
                case "checked":
                case "selected":
                case "defaultValue":
                case "defaultChecked":
                case "innerHTML":
                case "ref":
                  continue;
                case "dangerouslySetInnerHTML":
                  h = e.innerHTML, S = S ? S.__html : void 0, S != null && (S = wd(e, S), h !== S && (o[E] = { __html: h }));
                  continue;
                case "className":
                  Kl(
                    e,
                    E,
                    "class",
                    S,
                    r,
                    o
                  );
                  continue;
                case "tabIndex":
                  Kl(
                    e,
                    E,
                    "tabindex",
                    S,
                    r,
                    o
                  );
                  continue;
                case "style":
                  r.delete(E), yy(e, S, o);
                  continue;
                case "multiple":
                  r.delete(E), Ht(
                    E,
                    e.multiple,
                    S,
                    o
                  );
                  continue;
                case "muted":
                  r.delete(E), Ht(
                    E,
                    e.muted,
                    S,
                    o
                  );
                  continue;
                case "autoFocus":
                  r.delete("autofocus"), Ht(
                    E,
                    e.autofocus,
                    S,
                    o
                  );
                  continue;
                case "data":
                  if (t !== "object") {
                    r.delete(E), h = e.getAttribute("data"), Ht(
                      E,
                      h,
                      S,
                      o
                    );
                    continue;
                  }
                case "src":
                case "href":
                  if (!(S !== "" || t === "a" && E === "href" || t === "object" && E === "data")) {
                    console.error(
                      E === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
                      E,
                      E
                    );
                    continue;
                  }
                  yt(
                    e,
                    E,
                    E,
                    S,
                    r,
                    o
                  );
                  continue;
                case "action":
                case "formAction":
                  if (h = e.getAttribute(E), typeof S == "function") {
                    r.delete(E.toLowerCase()), E === "formAction" ? (r.delete("name"), r.delete("formenctype"), r.delete("formmethod"), r.delete("formtarget")) : (r.delete("enctype"), r.delete("method"), r.delete("target"));
                    continue;
                  } else if (h === iA) {
                    r.delete(E.toLowerCase()), Ht(
                      E,
                      "function",
                      S,
                      o
                    );
                    continue;
                  }
                  yt(
                    e,
                    E,
                    E.toLowerCase(),
                    S,
                    r,
                    o
                  );
                  continue;
                case "xlinkHref":
                  yt(
                    e,
                    E,
                    "xlink:href",
                    S,
                    r,
                    o
                  );
                  continue;
                case "contentEditable":
                  gy(
                    e,
                    E,
                    "contenteditable",
                    S,
                    r,
                    o
                  );
                  continue;
                case "spellCheck":
                  gy(
                    e,
                    E,
                    "spellcheck",
                    S,
                    r,
                    o
                  );
                  continue;
                case "draggable":
                case "autoReverse":
                case "externalResourcesRequired":
                case "focusable":
                case "preserveAlpha":
                  gy(
                    e,
                    E,
                    E,
                    S,
                    r,
                    o
                  );
                  continue;
                case "allowFullScreen":
                case "async":
                case "autoPlay":
                case "controls":
                case "default":
                case "defer":
                case "disabled":
                case "disablePictureInPicture":
                case "disableRemotePlayback":
                case "formNoValidate":
                case "hidden":
                case "loop":
                case "noModule":
                case "noValidate":
                case "open":
                case "playsInline":
                case "readOnly":
                case "required":
                case "reversed":
                case "scoped":
                case "seamless":
                case "itemScope":
                  py(
                    e,
                    E,
                    E.toLowerCase(),
                    S,
                    r,
                    o
                  );
                  continue;
                case "capture":
                case "download":
                  e: {
                    y = e;
                    var Z = h = E, F = o;
                    if (r.delete(Z), y = y.getAttribute(Z), y === null)
                      switch (typeof S) {
                        case "undefined":
                        case "function":
                        case "symbol":
                          break e;
                        default:
                          if (S === !1) break e;
                      }
                    else if (S != null)
                      switch (typeof S) {
                        case "function":
                        case "symbol":
                          break;
                        case "boolean":
                          if (S === !0 && y === "") break e;
                          break;
                        default:
                          if (ze(S, h), y === "" + S)
                            break e;
                      }
                    Ht(
                      h,
                      y,
                      S,
                      F
                    );
                  }
                  continue;
                case "cols":
                case "rows":
                case "size":
                case "span":
                  e: {
                    if (y = e, Z = h = E, F = o, r.delete(Z), y = y.getAttribute(Z), y === null)
                      switch (typeof S) {
                        case "undefined":
                        case "function":
                        case "symbol":
                        case "boolean":
                          break e;
                        default:
                          if (isNaN(S) || 1 > S) break e;
                      }
                    else if (S != null)
                      switch (typeof S) {
                        case "function":
                        case "symbol":
                        case "boolean":
                          break;
                        default:
                          if (!(isNaN(S) || 1 > S) && (ze(S, h), y === "" + S))
                            break e;
                      }
                    Ht(
                      h,
                      y,
                      S,
                      F
                    );
                  }
                  continue;
                case "rowSpan":
                  Cg(
                    e,
                    E,
                    "rowspan",
                    S,
                    r,
                    o
                  );
                  continue;
                case "start":
                  Cg(
                    e,
                    E,
                    E,
                    S,
                    r,
                    o
                  );
                  continue;
                case "xHeight":
                  Kl(
                    e,
                    E,
                    "x-height",
                    S,
                    r,
                    o
                  );
                  continue;
                case "xlinkActuate":
                  Kl(
                    e,
                    E,
                    "xlink:actuate",
                    S,
                    r,
                    o
                  );
                  continue;
                case "xlinkArcrole":
                  Kl(
                    e,
                    E,
                    "xlink:arcrole",
                    S,
                    r,
                    o
                  );
                  continue;
                case "xlinkRole":
                  Kl(
                    e,
                    E,
                    "xlink:role",
                    S,
                    r,
                    o
                  );
                  continue;
                case "xlinkShow":
                  Kl(
                    e,
                    E,
                    "xlink:show",
                    S,
                    r,
                    o
                  );
                  continue;
                case "xlinkTitle":
                  Kl(
                    e,
                    E,
                    "xlink:title",
                    S,
                    r,
                    o
                  );
                  continue;
                case "xlinkType":
                  Kl(
                    e,
                    E,
                    "xlink:type",
                    S,
                    r,
                    o
                  );
                  continue;
                case "xmlBase":
                  Kl(
                    e,
                    E,
                    "xml:base",
                    S,
                    r,
                    o
                  );
                  continue;
                case "xmlLang":
                  Kl(
                    e,
                    E,
                    "xml:lang",
                    S,
                    r,
                    o
                  );
                  continue;
                case "xmlSpace":
                  Kl(
                    e,
                    E,
                    "xml:space",
                    S,
                    r,
                    o
                  );
                  continue;
                case "inert":
                  S !== "" || Dv[E] || (Dv[E] = !0, console.error(
                    "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
                    E
                  )), py(
                    e,
                    E,
                    E,
                    S,
                    r,
                    o
                  );
                  continue;
                default:
                  if (!(2 < E.length) || E[0] !== "o" && E[0] !== "O" || E[1] !== "n" && E[1] !== "N") {
                    y = Rs(E), h = !1, i.context === Gc && t !== "svg" && t !== "math" ? r.delete(y.toLowerCase()) : (Z = E.toLowerCase(), Z = Hc.hasOwnProperty(
                      Z
                    ) && Hc[Z] || null, Z !== null && Z !== E && (h = !0, r.delete(Z)), r.delete(y));
                    e: if (Z = e, F = y, y = S, Yi(F))
                      if (Z.hasAttribute(F))
                        Z = Z.getAttribute(
                          F
                        ), ze(
                          y,
                          F
                        ), y = Z === "" + y ? y : Z;
                      else {
                        switch (typeof y) {
                          case "function":
                          case "symbol":
                            break e;
                          case "boolean":
                            if (Z = F.toLowerCase().slice(0, 5), Z !== "data-" && Z !== "aria-")
                              break e;
                        }
                        y = y === void 0 ? void 0 : null;
                      }
                    else y = void 0;
                    h || Ht(
                      E,
                      y,
                      S,
                      o
                    );
                  }
              }
          }
      return 0 < r.size && n.suppressHydrationWarning !== !0 && bi(e, r, o), Object.keys(o).length === 0 ? null : o;
    }
    function Ie(e, t) {
      switch (e.length) {
        case 0:
          return "";
        case 1:
          return e[0];
        case 2:
          return e[0] + " " + t + " " + e[1];
        default:
          return e.slice(0, -1).join(", ") + ", " + t + " " + e[e.length - 1];
      }
    }
    function Pe(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function pt(e) {
      switch (e) {
        case ur:
          return _h;
        case Qf:
          return xv;
        default:
          return Gc;
      }
    }
    function cn(e, t) {
      if (e === Gc)
        switch (t) {
          case "svg":
            return _h;
          case "math":
            return xv;
          default:
            return Gc;
        }
      return e === _h && t === "foreignObject" ? Gc : e;
    }
    function Va(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function Lo() {
      var e = window.event;
      return e && e.type === "popstate" ? e === y0 ? !1 : (y0 = e, !0) : (y0 = null, !1);
    }
    function vy(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function zu(e, t, n) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && e.focus();
          break;
        case "img":
          n.src ? e.src = n.src : n.srcSet && (e.srcset = n.srcSet);
      }
    }
    function Qt(e, t, n, i) {
      Ug(e, t, n, i), e[sn] = i;
    }
    function xu(e) {
      Zi(e, "");
    }
    function Ac(e, t, n) {
      e.nodeValue = n;
    }
    function Ga(e) {
      return e === "head";
    }
    function Qn(e, t) {
      e.removeChild(t);
    }
    function Yo(e, t) {
      (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).removeChild(t);
    }
    function jo(e, t) {
      var n = t, i = 0, o = 0;
      do {
        var r = n.nextSibling;
        if (e.removeChild(n), r && r.nodeType === 8)
          if (n = r.data, n === zv) {
            if (0 < i && 8 > i) {
              n = i;
              var h = e.ownerDocument;
              if (n & oA && Qo(h.documentElement), n & rA && Qo(h.body), n & fA)
                for (n = h.head, Qo(n), h = n.firstChild; h; ) {
                  var y = h.nextSibling, S = h.nodeName;
                  h[tr] || S === "SCRIPT" || S === "STYLE" || S === "LINK" && h.rel.toLowerCase() === "stylesheet" || n.removeChild(h), h = y;
                }
            }
            if (o === 0) {
              e.removeChild(r), Mc(t);
              return;
            }
            o--;
          } else
            n === Mv || n === Vc || n === zp ? o++ : i = n.charCodeAt(0) - 48;
        else i = 0;
        n = r;
      } while (n);
      Mc(t);
    }
    function on(e) {
      e = e.style, typeof e.setProperty == "function" ? e.setProperty("display", "none", "important") : e.display = "none";
    }
    function by(e) {
      e.nodeValue = "";
    }
    function Sy(e, t) {
      t = t[sA], t = t != null && t.hasOwnProperty("display") ? t.display : null, e.style.display = t == null || typeof t == "boolean" ? "" : ("" + t).trim();
    }
    function _d(e, t) {
      e.nodeValue = t;
    }
    function Vo(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var n = t;
        switch (t = t.nextSibling, n.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            Vo(n), ao(n);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (n.rel.toLowerCase() === "stylesheet") continue;
        }
        e.removeChild(n);
      }
    }
    function Si(e, t, n, i) {
      for (; e.nodeType === 1; ) {
        var o = n;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!i && (e.nodeName !== "INPUT" || e.type !== "hidden"))
            break;
        } else if (i) {
          if (!e[tr])
            switch (t) {
              case "meta":
                if (!e.hasAttribute("itemprop")) break;
                return e;
              case "link":
                if (r = e.getAttribute("rel"), r === "stylesheet" && e.hasAttribute("data-precedence"))
                  break;
                if (r !== o.rel || e.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || e.getAttribute("title") !== (o.title == null ? null : o.title))
                  break;
                return e;
              case "style":
                if (e.hasAttribute("data-precedence")) break;
                return e;
              case "script":
                if (r = e.getAttribute("src"), (r !== (o.src == null ? null : o.src) || e.getAttribute("type") !== (o.type == null ? null : o.type) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && r && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                  break;
                return e;
              default:
                return e;
            }
        } else if (t === "input" && e.type === "hidden") {
          ze(o.name, "name");
          var r = o.name == null ? null : "" + o.name;
          if (o.type === "hidden" && e.getAttribute("name") === r)
            return e;
        } else return e;
        if (e = Ol(e.nextSibling), e === null) break;
      }
      return null;
    }
    function Rl(e, t, n) {
      if (t === "") return null;
      for (; e.nodeType !== 3; )
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = Ol(e.nextSibling), e === null)) return null;
      return e;
    }
    function Xa(e) {
      return e.data === zp || e.data === Vc && e.ownerDocument.readyState === DS;
    }
    function Go(e, t) {
      var n = e.ownerDocument;
      if (e.data !== Vc || n.readyState === DS)
        t();
      else {
        var i = function() {
          t(), n.removeEventListener("DOMContentLoaded", i);
        };
        n.addEventListener("DOMContentLoaded", i), e._reactRetry = i;
      }
    }
    function Ol(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (t = e.data, t === Mv || t === zp || t === Vc || t === d0 || t === OS)
            break;
          if (t === zv) return null;
        }
      }
      return e;
    }
    function qd(e) {
      if (e.nodeType === 1) {
        for (var t = e.nodeName.toLowerCase(), n = {}, i = e.attributes, o = 0; o < i.length; o++) {
          var r = i[o];
          n[my(r.name)] = r.name.toLowerCase() === "style" ? Ec(e) : r.value;
        }
        return { type: t, props: n };
      }
      return e.nodeType === 8 ? { type: "Suspense", props: {} } : e.nodeValue;
    }
    function Ld(e, t, n) {
      return n === null || n[cA] !== !0 ? (e.nodeValue === t ? e = null : (t = Al(t), e = Al(e.nodeValue) === t ? null : e.nodeValue), e) : null;
    }
    function Ty(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === zv) {
            if (t === 0)
              return Ol(e.nextSibling);
            t--;
          } else
            n !== Mv && n !== zp && n !== Vc || t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function Xo(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === Mv || n === zp || n === Vc) {
            if (t === 0) return e;
            t--;
          } else n === zv && t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function Ey(e) {
      Mc(e);
    }
    function En(e) {
      Mc(e);
    }
    function Ay(e, t, n, i, o) {
      switch (o && As(e, i.ancestorInfo), t = Pe(n), e) {
        case "html":
          if (e = t.documentElement, !e)
            throw Error(
              "React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "head":
          if (e = t.head, !e)
            throw Error(
              "React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "body":
          if (e = t.body, !e)
            throw Error(
              "React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        default:
          throw Error(
            "resolveSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
    }
    function An(e, t, n, i) {
      if (!n[xi] && yn(n)) {
        var o = n.tagName.toLowerCase();
        console.error(
          "You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.",
          o,
          o,
          o
        );
      }
      switch (e) {
        case "html":
        case "head":
        case "body":
          break;
        default:
          console.error(
            "acquireSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
      for (o = n.attributes; o.length; )
        n.removeAttributeNode(o[0]);
      Xt(n, e, t), n[ql] = i, n[sn] = t;
    }
    function Qo(e) {
      for (var t = e.attributes; t.length; )
        e.removeAttributeNode(t[0]);
      ao(e);
    }
    function Af(e) {
      return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
    }
    function Hg(e, t, n) {
      var i = qh;
      if (i && typeof t == "string" && t) {
        var o = pn(t);
        o = 'link[rel="' + e + '"][href="' + o + '"]', typeof n == "string" && (o += '[crossorigin="' + n + '"]'), HS.has(o) || (HS.add(o), e = { rel: e, crossOrigin: n, href: t }, i.querySelector(o) === null && (t = i.createElement("link"), Xt(t, "link", e), fl(t), i.head.appendChild(t)));
      }
    }
    function Uu(e, t, n, i) {
      var o = (o = Za.current) ? Af(o) : null;
      if (!o)
        throw Error(
          '"resourceRoot" was expected to exist. This is a bug in React.'
        );
      switch (e) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof n.precedence == "string" && typeof n.href == "string" ? (n = Ti(n.href), t = pa(o).hoistableStyles, i = t.get(n), i || (i = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, t.set(n, i)), i) : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
            e = Ti(n.href);
            var r = pa(o).hoistableStyles, h = r.get(e);
            if (!h && (o = o.ownerDocument || o, h = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: { loading: os, preload: null }
            }, r.set(e, h), (r = o.querySelector(
              Qa(e)
            )) && !r._p && (h.instance = r, h.state.loading = xp | au), !uu.has(e))) {
              var y = {
                rel: "preload",
                as: "style",
                href: n.href,
                crossOrigin: n.crossOrigin,
                integrity: n.integrity,
                media: n.media,
                hrefLang: n.hrefLang,
                referrerPolicy: n.referrerPolicy
              };
              uu.set(e, y), r || Bg(
                o,
                e,
                y,
                h.state
              );
            }
            if (t && i === null)
              throw n = `

  - ` + Rc(t) + `
  + ` + Rc(n), Error(
                "Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + n
              );
            return h;
          }
          if (t && i !== null)
            throw n = `

  - ` + Rc(t) + `
  + ` + Rc(n), Error(
              "Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + n
            );
          return null;
        case "script":
          return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (n = Oc(n), t = pa(o).hoistableScripts, i = t.get(n), i || (i = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, t.set(n, i)), i) : { type: "void", instance: null, count: 0, state: null };
        default:
          throw Error(
            'getResource encountered a type it did not expect: "' + e + '". this is a bug in React.'
          );
      }
    }
    function Rc(e) {
      var t = 0, n = "<link";
      return typeof e.rel == "string" ? (t++, n += ' rel="' + e.rel + '"') : Bu.call(e, "rel") && (t++, n += ' rel="' + (e.rel === null ? "null" : "invalid type " + typeof e.rel) + '"'), typeof e.href == "string" ? (t++, n += ' href="' + e.href + '"') : Bu.call(e, "href") && (t++, n += ' href="' + (e.href === null ? "null" : "invalid type " + typeof e.href) + '"'), typeof e.precedence == "string" ? (t++, n += ' precedence="' + e.precedence + '"') : Bu.call(e, "precedence") && (t++, n += " precedence={" + (e.precedence === null ? "null" : "invalid type " + typeof e.precedence) + "}"), Object.getOwnPropertyNames(e).length > t && (n += " ..."), n + " />";
    }
    function Ti(e) {
      return 'href="' + pn(e) + '"';
    }
    function Qa(e) {
      return 'link[rel="stylesheet"][' + e + "]";
    }
    function Ry(e) {
      return Ke({}, e, {
        "data-precedence": e.precedence,
        precedence: null
      });
    }
    function Bg(e, t, n, i) {
      e.querySelector(
        'link[rel="preload"][as="style"][' + t + "]"
      ) ? i.loading = xp : (t = e.createElement("link"), i.preload = t, t.addEventListener("load", function() {
        return i.loading |= xp;
      }), t.addEventListener("error", function() {
        return i.loading |= US;
      }), Xt(t, "link", n), fl(t), e.head.appendChild(t));
    }
    function Oc(e) {
      return '[src="' + pn(e) + '"]';
    }
    function Dc(e) {
      return "script[async]" + e;
    }
    function Yd(e, t, n) {
      if (t.count++, t.instance === null)
        switch (t.type) {
          case "style":
            var i = e.querySelector(
              'style[data-href~="' + pn(n.href) + '"]'
            );
            if (i)
              return t.instance = i, fl(i), i;
            var o = Ke({}, n, {
              "data-href": n.href,
              "data-precedence": n.precedence,
              href: null,
              precedence: null
            });
            return i = (e.ownerDocument || e).createElement("style"), fl(i), Xt(i, "style", o), jd(i, n.precedence, e), t.instance = i;
          case "stylesheet":
            o = Ti(n.href);
            var r = e.querySelector(
              Qa(o)
            );
            if (r)
              return t.state.loading |= au, t.instance = r, fl(r), r;
            i = Ry(n), (o = uu.get(o)) && Oy(i, o), r = (e.ownerDocument || e).createElement("link"), fl(r);
            var h = r;
            return h._p = new Promise(function(y, S) {
              h.onload = y, h.onerror = S;
            }), Xt(r, "link", i), t.state.loading |= au, jd(r, n.precedence, e), t.instance = r;
          case "script":
            return r = Oc(n.src), (o = e.querySelector(
              Dc(r)
            )) ? (t.instance = o, fl(o), o) : (i = n, (o = uu.get(r)) && (i = Ke({}, n), Dy(i, o)), e = e.ownerDocument || e, o = e.createElement("script"), fl(o), Xt(o, "link", i), e.head.appendChild(o), t.instance = o);
          case "void":
            return null;
          default:
            throw Error(
              'acquireResource encountered a resource type it did not expect: "' + t.type + '". this is a bug in React.'
            );
        }
      else
        t.type === "stylesheet" && (t.state.loading & au) === os && (i = t.instance, t.state.loading |= au, jd(i, n.precedence, e));
      return t.instance;
    }
    function jd(e, t, n) {
      for (var i = n.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ), o = i.length ? i[i.length - 1] : null, r = o, h = 0; h < i.length; h++) {
        var y = i[h];
        if (y.dataset.precedence === t) r = y;
        else if (r !== o) break;
      }
      r ? r.parentNode.insertBefore(e, r.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
    }
    function Oy(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
    }
    function Dy(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
    }
    function My(e, t, n) {
      if (Uv === null) {
        var i = /* @__PURE__ */ new Map(), o = Uv = /* @__PURE__ */ new Map();
        o.set(n, i);
      } else
        o = Uv, i = o.get(n), i || (i = /* @__PURE__ */ new Map(), o.set(n, i));
      if (i.has(e)) return i;
      for (i.set(e, null), n = n.getElementsByTagName(e), o = 0; o < n.length; o++) {
        var r = n[o];
        if (!(r[tr] || r[ql] || e === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== ur) {
          var h = r.getAttribute(t) || "";
          h = e + h;
          var y = i.get(h);
          y ? y.push(r) : i.set(h, [r]);
        }
      }
      return i;
    }
    function zy(e, t, n) {
      e = e.ownerDocument || e, e.head.insertBefore(
        n,
        t === "title" ? e.querySelector("head > title") : null
      );
    }
    function Zo(e, t, n) {
      var i = !n.ancestorInfo.containerTagInScope;
      if (n.context === _h || t.itemProp != null)
        return !i || t.itemProp == null || e !== "meta" && e !== "title" && e !== "style" && e !== "link" && e !== "script" || console.error(
          "Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.",
          e,
          e
        ), !1;
      switch (e) {
        case "meta":
        case "title":
          return !0;
        case "style":
          if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") {
            i && console.error(
              'Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`.'
            );
            break;
          }
          return !0;
        case "link":
          if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) {
            if (t.rel === "stylesheet" && typeof t.precedence == "string") {
              e = t.href;
              var o = t.onError, r = t.disabled;
              n = [], t.onLoad && n.push("`onLoad`"), o && n.push("`onError`"), r != null && n.push("`disabled`"), o = Ie(n, "and"), o += n.length === 1 ? " prop" : " props", r = n.length === 1 ? "an " + o : "the " + o, n.length && console.error(
                'React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',
                e,
                r,
                o
              );
            }
            i && (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" ? console.error(
              "Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"
            ) : (t.onError || t.onLoad) && console.error(
              "Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ));
            break;
          }
          switch (t.rel) {
            case "stylesheet":
              return e = t.precedence, t = t.disabled, typeof e != "string" && i && console.error(
                'Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.'
              ), typeof e == "string" && t == null;
            default:
              return !0;
          }
        case "script":
          if (e = t.async && typeof t.async != "function" && typeof t.async != "symbol", !e || t.onLoad || t.onError || !t.src || typeof t.src != "string") {
            i && (e ? t.onLoad || t.onError ? console.error(
              "Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              "Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              'Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.'
            ));
            break;
          }
          return !0;
        case "noscript":
        case "template":
          i && console.error(
            "Cannot render <%s> outside the main document. Try moving it into the root <head> tag.",
            e
          );
      }
      return !1;
    }
    function Rf(e) {
      return !(e.type === "stylesheet" && (e.state.loading & CS) === os);
    }
    function Ng() {
    }
    function wg(e, t, n) {
      if (Up === null)
        throw Error(
          "Internal React Error: suspendedState null when it was expected to exists. Please report this as a React bug."
        );
      var i = Up;
      if (t.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (t.state.loading & au) === os) {
        if (t.instance === null) {
          var o = Ti(n.href), r = e.querySelector(
            Qa(o)
          );
          if (r) {
            e = r._p, e !== null && typeof e == "object" && typeof e.then == "function" && (i.count++, i = Of.bind(i), e.then(i, i)), t.state.loading |= au, t.instance = r, fl(r);
            return;
          }
          r = e.ownerDocument || e, n = Ry(n), (o = uu.get(o)) && Oy(n, o), r = r.createElement("link"), fl(r);
          var h = r;
          h._p = new Promise(function(y, S) {
            h.onload = y, h.onerror = S;
          }), Xt(r, "link", n), t.instance = r;
        }
        i.stylesheets === null && (i.stylesheets = /* @__PURE__ */ new Map()), i.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & CS) === os && (i.count++, t = Of.bind(i), e.addEventListener("load", t), e.addEventListener("error", t));
      }
    }
    function _g() {
      if (Up === null)
        throw Error(
          "Internal React Error: suspendedState null when it was expected to exists. Please report this as a React bug."
        );
      var e = Up;
      return e.stylesheets && e.count === 0 && Vd(e, e.stylesheets), 0 < e.count ? function(t) {
        var n = setTimeout(function() {
          if (e.stylesheets && Vd(e, e.stylesheets), e.unsuspend) {
            var i = e.unsuspend;
            e.unsuspend = null, i();
          }
        }, 6e4);
        return e.unsuspend = t, function() {
          e.unsuspend = null, clearTimeout(n);
        };
      } : null;
    }
    function Of() {
      if (this.count--, this.count === 0) {
        if (this.stylesheets)
          Vd(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          this.unsuspend = null, e();
        }
      }
    }
    function Vd(e, t) {
      e.stylesheets = null, e.unsuspend !== null && (e.count++, Cv = /* @__PURE__ */ new Map(), t.forEach(qg, e), Cv = null, Of.call(e));
    }
    function qg(e, t) {
      if (!(t.state.loading & au)) {
        var n = Cv.get(e);
        if (n) var i = n.get(g0);
        else {
          n = /* @__PURE__ */ new Map(), Cv.set(e, n);
          for (var o = e.querySelectorAll(
            "link[data-precedence],style[data-precedence]"
          ), r = 0; r < o.length; r++) {
            var h = o[r];
            (h.nodeName === "LINK" || h.getAttribute("media") !== "not all") && (n.set(h.dataset.precedence, h), i = h);
          }
          i && n.set(g0, i);
        }
        o = t.instance, h = o.getAttribute("data-precedence"), r = n.get(h) || i, r === i && n.set(g0, o), n.set(h, o), this.count++, i = Of.bind(this), o.addEventListener("load", i), o.addEventListener("error", i), r ? r.parentNode.insertBefore(o, r.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= au;
      }
    }
    function Gd(e, t, n, i, o, r, h, y) {
      for (this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = cs, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Qh(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Qh(0), this.hiddenUpdates = Qh(null), this.identifierPrefix = i, this.onUncaughtError = o, this.onCaughtError = r, this.onRecoverableError = h, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = y, this.incompleteTransitions = /* @__PURE__ */ new Map(), this.passiveEffectDuration = this.effectDuration = -0, this.memoizedUpdaters = /* @__PURE__ */ new Set(), e = this.pendingUpdatersLaneMap = [], t = 0; 31 > t; t++) e.push(/* @__PURE__ */ new Set());
      this._debugRootType = n ? "hydrateRoot()" : "createRoot()";
    }
    function xy(e, t, n, i, o, r, h, y, S, E, Z, F) {
      return e = new Gd(
        e,
        t,
        n,
        h,
        y,
        S,
        E,
        F
      ), t = qE, r === !0 && (t |= hn | Lu), Kt && (t |= kl), r = U(3, null, null, t), e.current = r, r.stateNode = e, t = Gr(), tc(t), e.pooledCache = t, tc(t), r.memoizedState = {
        element: i,
        isDehydrated: n,
        cache: t
      }, Pl(r), e;
    }
    function Uy(e) {
      return e ? (e = ir, e) : ir;
    }
    function vt(e, t, n, i, o, r) {
      if (Dl && typeof Dl.onScheduleFiberRoot == "function")
        try {
          Dl.onScheduleFiberRoot(Mi, i, n);
        } catch (h) {
          fn || (fn = !0, console.error(
            "React instrumentation encountered an error: %s",
            h
          ));
        }
      ge !== null && typeof ge.markRenderScheduled == "function" && ge.markRenderScheduled(t), o = Uy(o), i.context === null ? i.context = o : i.pendingContext = o, dn && On !== null && !_S && (_S = !0, console.error(
        `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
        se(On) || "Unknown"
      )), i = Aa(t), i.payload = { element: n }, r = r === void 0 ? null : r, r !== null && (typeof r != "function" && console.error(
        "Expected the last optional `callback` argument to be a function. Instead received: %s.",
        r
      ), i.callback = r), n = na(e, i, t), n !== null && (Vt(n, e, t), ii(n, e, t));
    }
    function Xd(e, t) {
      if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
      }
    }
    function Cy(e, t) {
      Xd(e, t), (e = e.alternate) && Xd(e, t);
    }
    function Hy(e) {
      if (e.tag === 13) {
        var t = Il(e, 67108864);
        t !== null && Vt(t, e, 67108864), Cy(e, 67108864);
      }
    }
    function sb() {
      return On;
    }
    function db() {
      for (var e = /* @__PURE__ */ new Map(), t = 1, n = 0; 31 > n; n++) {
        var i = Cl(t);
        e.set(t, i), t *= 2;
      }
      return e;
    }
    function hb(e, t, n, i) {
      var o = $.T;
      $.T = null;
      var r = _e.p;
      try {
        _e.p = Ml, Ei(e, t, n, i);
      } finally {
        _e.p = r, $.T = o;
      }
    }
    function Qd(e, t, n, i) {
      var o = $.T;
      $.T = null;
      var r = _e.p;
      try {
        _e.p = da, Ei(e, t, n, i);
      } finally {
        _e.p = r, $.T = o;
      }
    }
    function Ei(e, t, n, i) {
      if (Bv) {
        var o = Df(i);
        if (o === null)
          Ql(
            e,
            t,
            i,
            Nv,
            n
          ), Ai(e, i);
        else if (Mf(
          o,
          e,
          t,
          n,
          i
        ))
          i.stopPropagation();
        else if (Ai(e, i), t & 4 && -1 < yA.indexOf(e)) {
          for (; o !== null; ) {
            var r = yn(o);
            if (r !== null)
              switch (r.tag) {
                case 3:
                  if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
                    var h = kt(r.pendingLanes);
                    if (h !== 0) {
                      var y = r;
                      for (y.pendingLanes |= 2, y.entangledLanes |= 2; h; ) {
                        var S = 1 << 31 - _l(h);
                        y.entanglements[1] |= S, h &= ~S;
                      }
                      Gn(r), (bt & (xn | Gu)) === ha && (gv = Ka() + mS, Sc(0));
                    }
                  }
                  break;
                case 13:
                  y = Il(r, 2), y !== null && Vt(y, r, 2), vc(), Cy(r, 2);
              }
            if (r = Df(i), r === null && Ql(
              e,
              t,
              i,
              Nv,
              n
            ), r === o) break;
            o = r;
          }
          o !== null && i.stopPropagation();
        } else
          Ql(
            e,
            t,
            i,
            null,
            n
          );
      }
    }
    function Df(e) {
      return e = Ji(e), Ko(e);
    }
    function Ko(e) {
      if (Nv = null, e = fu(e), e !== null) {
        var t = H(e);
        if (t === null) e = null;
        else {
          var n = t.tag;
          if (n === 13) {
            if (e = de(t), e !== null) return e;
            e = null;
          } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return Nv = e, null;
    }
    function Zd(e) {
      switch (e) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return Ml;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return da;
        case "message":
          switch (Di()) {
            case Wd:
              return Ml;
            case _f:
              return da;
            case Io:
            case vb:
              return wu;
            case qf:
              return eh;
            default:
              return wu;
          }
        default:
          return wu;
      }
    }
    function Ai(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          pr = null;
          break;
        case "dragenter":
        case "dragleave":
          gr = null;
          break;
        case "mouseover":
        case "mouseout":
          vr = null;
          break;
        case "pointerover":
        case "pointerout":
          Hp.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          Bp.delete(t.pointerId);
      }
    }
    function rn(e, t, n, i, o, r) {
      return e === null || e.nativeEvent !== r ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: i,
        nativeEvent: r,
        targetContainers: [o]
      }, t !== null && (t = yn(t), t !== null && Hy(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
    }
    function Mf(e, t, n, i, o) {
      switch (t) {
        case "focusin":
          return pr = rn(
            pr,
            e,
            t,
            n,
            i,
            o
          ), !0;
        case "dragenter":
          return gr = rn(
            gr,
            e,
            t,
            n,
            i,
            o
          ), !0;
        case "mouseover":
          return vr = rn(
            vr,
            e,
            t,
            n,
            i,
            o
          ), !0;
        case "pointerover":
          var r = o.pointerId;
          return Hp.set(
            r,
            rn(
              Hp.get(r) || null,
              e,
              t,
              n,
              i,
              o
            )
          ), !0;
        case "gotpointercapture":
          return r = o.pointerId, Bp.set(
            r,
            rn(
              Bp.get(r) || null,
              e,
              t,
              n,
              i,
              o
            )
          ), !0;
      }
      return !1;
    }
    function Lg(e) {
      var t = fu(e.target);
      if (t !== null) {
        var n = H(t);
        if (n !== null) {
          if (t = n.tag, t === 13) {
            if (t = de(n), t !== null) {
              e.blockedOn = t, eb(e.priority, function() {
                if (n.tag === 13) {
                  var i = un(n);
                  i = jl(i);
                  var o = Il(
                    n,
                    i
                  );
                  o !== null && Vt(o, n, i), Cy(n, i);
                }
              });
              return;
            }
          } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function zf(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Df(e.nativeEvent);
        if (n === null) {
          n = e.nativeEvent;
          var i = new n.constructor(
            n.type,
            n
          ), o = i;
          f !== null && console.error(
            "Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."
          ), f = o, n.target.dispatchEvent(i), f === null && console.error(
            "Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."
          ), f = null;
        } else
          return t = yn(n), t !== null && Hy(t), e.blockedOn = n, !1;
        t.shift();
      }
      return !0;
    }
    function By(e, t, n) {
      zf(e) && n.delete(t);
    }
    function Yg() {
      v0 = !1, pr !== null && zf(pr) && (pr = null), gr !== null && zf(gr) && (gr = null), vr !== null && zf(vr) && (vr = null), Hp.forEach(By), Bp.forEach(By);
    }
    function xf(e, t) {
      e.blockedOn === t && (e.blockedOn = null, v0 || (v0 = !0, Zt.unstable_scheduleCallback(
        Zt.unstable_NormalPriority,
        Yg
      )));
    }
    function jg(e) {
      wv !== e && (wv = e, Zt.unstable_scheduleCallback(
        Zt.unstable_NormalPriority,
        function() {
          wv === e && (wv = null);
          for (var t = 0; t < e.length; t += 3) {
            var n = e[t], i = e[t + 1], o = e[t + 2];
            if (typeof i != "function") {
              if (Ko(i || n) === null)
                continue;
              break;
            }
            var r = yn(n);
            r !== null && (e.splice(t, 3), t -= 3, n = {
              pending: !0,
              data: o,
              method: n.method,
              action: i
            }, Object.freeze(n), cc(
              r,
              n,
              i,
              o
            ));
          }
        }
      ));
    }
    function Mc(e) {
      function t(S) {
        return xf(S, e);
      }
      pr !== null && xf(pr, e), gr !== null && xf(gr, e), vr !== null && xf(vr, e), Hp.forEach(t), Bp.forEach(t);
      for (var n = 0; n < br.length; n++) {
        var i = br[n];
        i.blockedOn === e && (i.blockedOn = null);
      }
      for (; 0 < br.length && (n = br[0], n.blockedOn === null); )
        Lg(n), n.blockedOn === null && br.shift();
      if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
        for (i = 0; i < n.length; i += 3) {
          var o = n[i], r = n[i + 1], h = o[sn] || null;
          if (typeof r == "function")
            h || jg(n);
          else if (h) {
            var y = null;
            if (r && r.hasAttribute("formAction")) {
              if (o = r, h = r[sn] || null)
                y = h.formAction;
              else if (Ko(o) !== null) continue;
            } else y = h.action;
            typeof y == "function" ? n[i + 1] = y : (n.splice(i, 3), i -= 3), jg(n);
          }
        }
    }
    function Kd(e) {
      this._internalRoot = e;
    }
    function Uf(e) {
      this._internalRoot = e;
    }
    function Vg(e) {
      e[xi] && (e._reactRootContainer ? console.error(
        "You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."
      ) : console.error(
        "You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."
      ));
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var Zt = CT(), Cf = $v, mb = Lh, Ke = Object.assign, Hf = Symbol.for("react.element"), Ri = Symbol.for("react.transitional.element"), zc = Symbol.for("react.portal"), Ve = Symbol.for("react.fragment"), Jo = Symbol.for("react.strict_mode"), ko = Symbol.for("react.profiler"), Ny = Symbol.for("react.provider"), Jd = Symbol.for("react.consumer"), Zn = Symbol.for("react.context"), Cu = Symbol.for("react.forward_ref"), $o = Symbol.for("react.suspense"), Oi = Symbol.for("react.suspense_list"), Bf = Symbol.for("react.memo"), Rn = Symbol.for("react.lazy"), wy = Symbol.for("react.activity"), Gg = Symbol.for("react.memo_cache_sentinel"), _y = Symbol.iterator, kd = Symbol.for("react.client.reference"), Le = Array.isArray, $ = Cf.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, _e = mb.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, yb = Object.freeze({
      pending: !1,
      data: null,
      method: null,
      action: null
    }), Nf = [], wf = [], Kn = -1, Hu = Me(null), Wo = Me(null), Za = Me(null), Fo = Me(null), Bu = Object.prototype.hasOwnProperty, $d = Zt.unstable_scheduleCallback, pb = Zt.unstable_cancelCallback, Xg = Zt.unstable_shouldYield, gb = Zt.unstable_requestPaint, Ka = Zt.unstable_now, Di = Zt.unstable_getCurrentPriorityLevel, Wd = Zt.unstable_ImmediatePriority, _f = Zt.unstable_UserBlockingPriority, Io = Zt.unstable_NormalPriority, vb = Zt.unstable_LowPriority, qf = Zt.unstable_IdlePriority, bb = Zt.log, sa = Zt.unstable_setDisableYieldValue, Mi = null, Dl = null, ge = null, fn = !1, Kt = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u", _l = Math.clz32 ? Math.clz32 : Lt, Fd = Math.log, Nu = Math.LN2, Id = 256, Pd = 4194304, Ml = 2, da = 8, wu = 32, eh = 268435456, zi = Math.random().toString(36).slice(2), ql = "__reactFiber$" + zi, sn = "__reactProps$" + zi, xi = "__reactContainer$" + zi, qy = "__reactEvents$" + zi, Qg = "__reactListeners$" + zi, Po = "__reactHandles$" + zi, er = "__reactResources$" + zi, tr = "__reactMarker$" + zi, Zg = /* @__PURE__ */ new Set(), Jn = {}, xc = {}, Kg = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    }, th = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), lh = {}, nh = {}, Ui = 0, Ly, Yy, Jg, jy, lr, kg, $g;
    ps.__reactDisabledLog = !0;
    var Vy, Lf, nr = !1, Yf = new (typeof WeakMap == "function" ? WeakMap : Map)(), On = null, dn = !1, Sb = /[\n"\\]/g, Gy = !1, Xy = !1, Qy = !1, Zy = !1, ah = !1, Ky = !1, jf = ["value", "defaultValue"], Wg = !1, Fg = /["'&<>\n\t]|^\s|\s$/, Jy = "address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(
      " "
    ), uh = "applet caption html table td th marquee object template foreignObject desc title".split(
      " "
    ), ih = uh.concat(["button"]), ky = "dd dt li option optgroup p rp rt".split(" "), $y = {
      current: null,
      formTag: null,
      aTagInScope: null,
      buttonTagInScope: null,
      nobrTagInScope: null,
      pTagInButtonScope: null,
      listItemTagAutoclosing: null,
      dlItemTagAutoclosing: null,
      containerTagInScope: null,
      implicitRootScope: !1
    }, ar = {}, Ja = {
      animation: "animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(
        " "
      ),
      background: "backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(
        " "
      ),
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: "borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(
        " "
      ),
      borderBlockEnd: [
        "borderBlockEndColor",
        "borderBlockEndStyle",
        "borderBlockEndWidth"
      ],
      borderBlockStart: [
        "borderBlockStartColor",
        "borderBlockStartStyle",
        "borderBlockStartWidth"
      ],
      borderBottom: [
        "borderBottomColor",
        "borderBottomStyle",
        "borderBottomWidth"
      ],
      borderColor: [
        "borderBottomColor",
        "borderLeftColor",
        "borderRightColor",
        "borderTopColor"
      ],
      borderImage: [
        "borderImageOutset",
        "borderImageRepeat",
        "borderImageSlice",
        "borderImageSource",
        "borderImageWidth"
      ],
      borderInlineEnd: [
        "borderInlineEndColor",
        "borderInlineEndStyle",
        "borderInlineEndWidth"
      ],
      borderInlineStart: [
        "borderInlineStartColor",
        "borderInlineStartStyle",
        "borderInlineStartWidth"
      ],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: [
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
        "borderTopLeftRadius",
        "borderTopRightRadius"
      ],
      borderRight: [
        "borderRightColor",
        "borderRightStyle",
        "borderRightWidth"
      ],
      borderStyle: [
        "borderBottomStyle",
        "borderLeftStyle",
        "borderRightStyle",
        "borderTopStyle"
      ],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: [
        "borderBottomWidth",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth"
      ],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: "fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(
        " "
      ),
      fontVariant: "fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(
        " "
      ),
      gap: ["columnGap", "rowGap"],
      grid: "gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(
        " "
      ),
      gridArea: [
        "gridColumnEnd",
        "gridColumnStart",
        "gridRowEnd",
        "gridRowStart"
      ],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: [
        "gridTemplateAreas",
        "gridTemplateColumns",
        "gridTemplateRows"
      ],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: "maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(
        " "
      ),
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: [
        "textDecorationColor",
        "textDecorationLine",
        "textDecorationStyle"
      ],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: [
        "transitionDelay",
        "transitionDuration",
        "transitionProperty",
        "transitionTimingFunction"
      ],
      wordWrap: ["overflowWrap"]
    }, _u = /([A-Z])/g, qu = /^ms-/, Vf = /^(?:webkit|moz|o)[A-Z]/, Gf = /^-ms-/, Ci = /-(.)/g, Ig = /;\s*$/, Uc = {}, Cc = {}, Pg = !1, Wy = !1, Xf = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    ), Qf = "http://www.w3.org/1998/Math/MathML", ur = "http://www.w3.org/2000/svg", ch = /* @__PURE__ */ new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"]
    ]), Hc = {
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      fetchpriority: "fetchPriority",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      inert: "inert",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      popover: "popover",
      popovertarget: "popoverTarget",
      popovertargetaction: "popoverTargetAction",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      transformorigin: "transformOrigin",
      "transform-origin": "transformOrigin",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Fy = {
      "aria-current": 0,
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      "aria-hidden": 0,
      "aria-invalid": 0,
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, ka = {}, Iy = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), oh = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Py = !1, Jl = {}, Zf = /^on./, l = /^on[^A-Z]/, a = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), u = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), c = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, f = null, s = null, p = null, b = !1, D = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), V = !1;
    if (D)
      try {
        var le = {};
        Object.defineProperty(le, "passive", {
          get: function() {
            V = !0;
          }
        }), window.addEventListener("test", le, le), window.removeEventListener("test", le, le);
      } catch {
        V = !1;
      }
    var ae = null, X = null, J = null, Ce = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, He = Sl(Ce), dt = Ke({}, Ce, { view: 0, detail: 0 }), L = Sl(dt), _, j, ne, be = Ke({}, dt, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Ms,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (e !== ne && (ne && e.type === "mousemove" ? (_ = e.screenX - ne.screenX, j = e.screenY - ne.screenY) : j = _ = 0, ne = e), _);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : j;
      }
    }), $e = Sl(be), xe = Ke({}, be, { dataTransfer: 0 }), we = Sl(xe), pl = Ke({}, dt, { relatedTarget: 0 }), ct = Sl(pl), Hi = Ke({}, Ce, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Tb = Sl(Hi), dE = Ke({}, Ce, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), hE = Sl(dE), mE = Ke({}, Ce, { data: 0 }), $0 = Sl(
      mE
    ), yE = $0, pE = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, gE = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    }, vE = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    }, bE = Ke({}, dt, {
      key: function(e) {
        if (e.key) {
          var t = pE[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress" ? (e = so(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? gE[e.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ms,
      charCode: function(e) {
        return e.type === "keypress" ? so(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? so(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), SE = Sl(bE), TE = Ke({}, be, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), W0 = Sl(TE), EE = Ke({}, dt, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ms
    }), AE = Sl(EE), RE = Ke({}, Ce, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), OE = Sl(RE), DE = Ke({}, be, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), ME = Sl(DE), zE = Ke({}, Ce, {
      newState: 0,
      oldState: 0
    }), xE = Sl(zE), UE = [9, 13, 27, 32], F0 = 229, Eb = D && "CompositionEvent" in window, ep = null;
    D && "documentMode" in document && (ep = document.documentMode);
    var CE = D && "TextEvent" in window && !ep, I0 = D && (!Eb || ep && 8 < ep && 11 >= ep), P0 = 32, e1 = String.fromCharCode(P0), t1 = !1, rh = !1, HE = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    }, tp = null, lp = null, l1 = !1;
    D && (l1 = em("input") && (!document.documentMode || 9 < document.documentMode));
    var Dn = typeof Object.is == "function" ? Object.is : cb, BE = D && "documentMode" in document && 11 >= document.documentMode, fh = null, Ab = null, np = null, Rb = !1, sh = {
      animationend: yu("Animation", "AnimationEnd"),
      animationiteration: yu("Animation", "AnimationIteration"),
      animationstart: yu("Animation", "AnimationStart"),
      transitionrun: yu("Transition", "TransitionRun"),
      transitionstart: yu("Transition", "TransitionStart"),
      transitioncancel: yu("Transition", "TransitionCancel"),
      transitionend: yu("Transition", "TransitionEnd")
    }, Ob = {}, n1 = {};
    D && (n1 = document.createElement("div").style, "AnimationEvent" in window || (delete sh.animationend.animation, delete sh.animationiteration.animation, delete sh.animationstart.animation), "TransitionEvent" in window || delete sh.transitionend.transition);
    var a1 = Wi("animationend"), u1 = Wi("animationiteration"), i1 = Wi("animationstart"), NE = Wi("transitionrun"), wE = Wi("transitionstart"), _E = Wi("transitioncancel"), c1 = Wi("transitionend"), o1 = /* @__PURE__ */ new Map(), Db = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
    Db.push("scrollEnd");
    var Mb = /* @__PURE__ */ new WeakMap(), ev = 1, Bc = 2, $a = [], dh = 0, zb = 0, ir = {};
    Object.freeze(ir);
    var Wa = null, hh = null, Bt = 0, qE = 1, kl = 2, hn = 8, Lu = 16, r1 = 64, f1 = !1;
    try {
      var s1 = Object.preventExtensions({});
    } catch {
      f1 = !0;
    }
    var mh = [], yh = 0, tv = null, lv = 0, Fa = [], Ia = 0, Kf = null, Nc = 1, wc = "", Mn = null, It = null, ht = !1, _c = !1, Pa = null, Jf = null, Bi = !1, xb = Error(
      "Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), d1 = 0;
    if (typeof performance == "object" && typeof performance.now == "function")
      var LE = performance, h1 = function() {
        return LE.now();
      };
    else {
      var YE = Date;
      h1 = function() {
        return YE.now();
      };
    }
    var Ub = Me(null), Cb = Me(null), m1 = {}, nv = null, ph = null, gh = !1, jE = typeof AbortController < "u" ? AbortController : function() {
      var e = [], t = this.signal = {
        aborted: !1,
        addEventListener: function(n, i) {
          e.push(i);
        }
      };
      this.abort = function() {
        t.aborted = !0, e.forEach(function(n) {
          return n();
        });
      };
    }, VE = Zt.unstable_scheduleCallback, GE = Zt.unstable_NormalPriority, zl = {
      $$typeof: Zn,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
      _currentRenderer: null,
      _currentRenderer2: null
    }, vh = Zt.unstable_now, y1 = -0, av = -0, kn = -1.1, kf = -0, uv = !1, iv = !1, ap = null, Hb = 0, $f = 0, bh = null, p1 = $.S;
    $.S = function(e, t) {
      typeof t == "object" && t !== null && typeof t.then == "function" && fg(e, t), p1 !== null && p1(e, t);
    };
    var Wf = Me(null), Yu = {
      recordUnsafeLifecycleWarnings: function() {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function() {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    }, up = [], ip = [], cp = [], op = [], rp = [], fp = [], Ff = /* @__PURE__ */ new Set();
    Yu.recordUnsafeLifecycleWarnings = function(e, t) {
      Ff.has(e.type) || (typeof t.componentWillMount == "function" && t.componentWillMount.__suppressDeprecationWarning !== !0 && up.push(e), e.mode & hn && typeof t.UNSAFE_componentWillMount == "function" && ip.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && cp.push(e), e.mode & hn && typeof t.UNSAFE_componentWillReceiveProps == "function" && op.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && rp.push(e), e.mode & hn && typeof t.UNSAFE_componentWillUpdate == "function" && fp.push(e));
    }, Yu.flushPendingUnsafeLifecycleWarnings = function() {
      var e = /* @__PURE__ */ new Set();
      0 < up.length && (up.forEach(function(y) {
        e.add(
          se(y) || "Component"
        ), Ff.add(y.type);
      }), up = []);
      var t = /* @__PURE__ */ new Set();
      0 < ip.length && (ip.forEach(function(y) {
        t.add(
          se(y) || "Component"
        ), Ff.add(y.type);
      }), ip = []);
      var n = /* @__PURE__ */ new Set();
      0 < cp.length && (cp.forEach(function(y) {
        n.add(
          se(y) || "Component"
        ), Ff.add(y.type);
      }), cp = []);
      var i = /* @__PURE__ */ new Set();
      0 < op.length && (op.forEach(
        function(y) {
          i.add(
            se(y) || "Component"
          ), Ff.add(y.type);
        }
      ), op = []);
      var o = /* @__PURE__ */ new Set();
      0 < rp.length && (rp.forEach(function(y) {
        o.add(
          se(y) || "Component"
        ), Ff.add(y.type);
      }), rp = []);
      var r = /* @__PURE__ */ new Set();
      if (0 < fp.length && (fp.forEach(function(y) {
        r.add(
          se(y) || "Component"
        ), Ff.add(y.type);
      }), fp = []), 0 < t.size) {
        var h = A(
          t
        );
        console.error(
          `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
          h
        );
      }
      0 < i.size && (h = A(
        i
      ), console.error(
        `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,
        h
      )), 0 < r.size && (h = A(
        r
      ), console.error(
        `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
        h
      )), 0 < e.size && (h = A(e), console.warn(
        `componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        h
      )), 0 < n.size && (h = A(
        n
      ), console.warn(
        `componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        h
      )), 0 < o.size && (h = A(o), console.warn(
        `componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        h
      ));
    };
    var cv = /* @__PURE__ */ new Map(), g1 = /* @__PURE__ */ new Set();
    Yu.recordLegacyContextWarning = function(e, t) {
      for (var n = null, i = e; i !== null; )
        i.mode & hn && (n = i), i = i.return;
      n === null ? console.error(
        "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."
      ) : !g1.has(e.type) && (i = cv.get(n), e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], cv.set(n, i)), i.push(e));
    }, Yu.flushLegacyContextWarning = function() {
      cv.forEach(function(e) {
        if (e.length !== 0) {
          var t = e[0], n = /* @__PURE__ */ new Set();
          e.forEach(function(o) {
            n.add(se(o) || "Component"), g1.add(o.type);
          });
          var i = A(n);
          Se(t, function() {
            console.error(
              `Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,
              i
            );
          });
        }
      });
    }, Yu.discardPendingWarnings = function() {
      up = [], ip = [], cp = [], op = [], rp = [], fp = [], cv = /* @__PURE__ */ new Map();
    };
    var sp = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."
    ), v1 = Error(
      "Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), ov = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."
    ), Bb = {
      then: function() {
        console.error(
          'Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.'
        );
      }
    }, dp = null, rv = !1, eu = 0, tu = 1, zn = 2, $l = 4, xl = 8, b1 = 0, S1 = 1, T1 = 2, Nb = 3, cr = !1, E1 = !1, wb = null, _b = !1, Sh = Me(null), fv = Me(0), Th, A1 = /* @__PURE__ */ new Set(), R1 = /* @__PURE__ */ new Set(), qb = /* @__PURE__ */ new Set(), O1 = /* @__PURE__ */ new Set(), or = 0, Ye = null, Rt = null, gl = null, sv = !1, Eh = !1, If = !1, dv = 0, hp = 0, qc = null, XE = 0, QE = 25, W = null, lu = null, Lc = -1, mp = !1, hv = {
      readContext: zt,
      use: Oa,
      useCallback: wt,
      useContext: wt,
      useEffect: wt,
      useImperativeHandle: wt,
      useLayoutEffect: wt,
      useInsertionEffect: wt,
      useMemo: wt,
      useReducer: wt,
      useRef: wt,
      useState: wt,
      useDebugValue: wt,
      useDeferredValue: wt,
      useTransition: wt,
      useSyncExternalStore: wt,
      useId: wt,
      useHostTransitionStatus: wt,
      useFormState: wt,
      useActionState: wt,
      useOptimistic: wt,
      useMemoCache: wt,
      useCacheRefresh: wt
    }, Lb = null, D1 = null, Yb = null, M1 = null, Ni = null, ju = null, mv = null;
    Lb = {
      readContext: function(e) {
        return zt(e);
      },
      use: Oa,
      useCallback: function(e, t) {
        return W = "useCallback", ke(), wn(t), Fr(e, t);
      },
      useContext: function(e) {
        return W = "useContext", ke(), zt(e);
      },
      useEffect: function(e, t) {
        return W = "useEffect", ke(), wn(t), Vs(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return W = "useImperativeHandle", ke(), wn(n), Xs(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        W = "useInsertionEffect", ke(), wn(t), Yn(4, zn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return W = "useLayoutEffect", ke(), wn(t), Gs(e, t);
      },
      useMemo: function(e, t) {
        W = "useMemo", ke(), wn(t);
        var n = $.H;
        $.H = Ni;
        try {
          return Qs(e, t);
        } finally {
          $.H = n;
        }
      },
      useReducer: function(e, t, n) {
        W = "useReducer", ke();
        var i = $.H;
        $.H = Ni;
        try {
          return rt(e, t, n);
        } finally {
          $.H = i;
        }
      },
      useRef: function(e) {
        return W = "useRef", ke(), Wr(e);
      },
      useState: function(e) {
        W = "useState", ke();
        var t = $.H;
        $.H = Ni;
        try {
          return Su(e);
        } finally {
          $.H = t;
        }
      },
      useDebugValue: function() {
        W = "useDebugValue", ke();
      },
      useDeferredValue: function(e, t) {
        return W = "useDeferredValue", ke(), Zs(e, t);
      },
      useTransition: function() {
        return W = "useTransition", ke(), xa();
      },
      useSyncExternalStore: function(e, t, n) {
        return W = "useSyncExternalStore", ke(), bu(
          e,
          t,
          n
        );
      },
      useId: function() {
        return W = "useId", ke(), Ua();
      },
      useFormState: function(e, t) {
        return W = "useFormState", ke(), vo(), Ro(e, t);
      },
      useActionState: function(e, t) {
        return W = "useActionState", ke(), Ro(e, t);
      },
      useOptimistic: function(e) {
        return W = "useOptimistic", ke(), ia(e);
      },
      useHostTransitionStatus: ln,
      useMemoCache: Wt,
      useCacheRefresh: function() {
        return W = "useCacheRefresh", ke(), oc();
      }
    }, D1 = {
      readContext: function(e) {
        return zt(e);
      },
      use: Oa,
      useCallback: function(e, t) {
        return W = "useCallback", re(), Fr(e, t);
      },
      useContext: function(e) {
        return W = "useContext", re(), zt(e);
      },
      useEffect: function(e, t) {
        return W = "useEffect", re(), Vs(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return W = "useImperativeHandle", re(), Xs(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        W = "useInsertionEffect", re(), Yn(4, zn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return W = "useLayoutEffect", re(), Gs(e, t);
      },
      useMemo: function(e, t) {
        W = "useMemo", re();
        var n = $.H;
        $.H = Ni;
        try {
          return Qs(e, t);
        } finally {
          $.H = n;
        }
      },
      useReducer: function(e, t, n) {
        W = "useReducer", re();
        var i = $.H;
        $.H = Ni;
        try {
          return rt(e, t, n);
        } finally {
          $.H = i;
        }
      },
      useRef: function(e) {
        return W = "useRef", re(), Wr(e);
      },
      useState: function(e) {
        W = "useState", re();
        var t = $.H;
        $.H = Ni;
        try {
          return Su(e);
        } finally {
          $.H = t;
        }
      },
      useDebugValue: function() {
        W = "useDebugValue", re();
      },
      useDeferredValue: function(e, t) {
        return W = "useDeferredValue", re(), Zs(e, t);
      },
      useTransition: function() {
        return W = "useTransition", re(), xa();
      },
      useSyncExternalStore: function(e, t, n) {
        return W = "useSyncExternalStore", re(), bu(
          e,
          t,
          n
        );
      },
      useId: function() {
        return W = "useId", re(), Ua();
      },
      useActionState: function(e, t) {
        return W = "useActionState", re(), Ro(e, t);
      },
      useFormState: function(e, t) {
        return W = "useFormState", re(), vo(), Ro(e, t);
      },
      useOptimistic: function(e) {
        return W = "useOptimistic", re(), ia(e);
      },
      useHostTransitionStatus: ln,
      useMemoCache: Wt,
      useCacheRefresh: function() {
        return W = "useCacheRefresh", re(), oc();
      }
    }, Yb = {
      readContext: function(e) {
        return zt(e);
      },
      use: Oa,
      useCallback: function(e, t) {
        return W = "useCallback", re(), ic(e, t);
      },
      useContext: function(e) {
        return W = "useContext", re(), zt(e);
      },
      useEffect: function(e, t) {
        W = "useEffect", re(), ul(2048, xl, e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return W = "useImperativeHandle", re(), za(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return W = "useInsertionEffect", re(), ul(4, zn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return W = "useLayoutEffect", re(), ul(4, $l, e, t);
      },
      useMemo: function(e, t) {
        W = "useMemo", re();
        var n = $.H;
        $.H = ju;
        try {
          return si(e, t);
        } finally {
          $.H = n;
        }
      },
      useReducer: function(e, t, n) {
        W = "useReducer", re();
        var i = $.H;
        $.H = ju;
        try {
          return qn(e, t, n);
        } finally {
          $.H = i;
        }
      },
      useRef: function() {
        return W = "useRef", re(), at().memoizedState;
      },
      useState: function() {
        W = "useState", re();
        var e = $.H;
        $.H = ju;
        try {
          return qn(ft);
        } finally {
          $.H = e;
        }
      },
      useDebugValue: function() {
        W = "useDebugValue", re();
      },
      useDeferredValue: function(e, t) {
        return W = "useDeferredValue", re(), Ir(e, t);
      },
      useTransition: function() {
        return W = "useTransition", re(), ks();
      },
      useSyncExternalStore: function(e, t, n) {
        return W = "useSyncExternalStore", re(), Kr(
          e,
          t,
          n
        );
      },
      useId: function() {
        return W = "useId", re(), at().memoizedState;
      },
      useFormState: function(e) {
        return W = "useFormState", re(), vo(), js(e);
      },
      useActionState: function(e) {
        return W = "useActionState", re(), js(e);
      },
      useOptimistic: function(e, t) {
        return W = "useOptimistic", re(), Tu(e, t);
      },
      useHostTransitionStatus: ln,
      useMemoCache: Wt,
      useCacheRefresh: function() {
        return W = "useCacheRefresh", re(), at().memoizedState;
      }
    }, M1 = {
      readContext: function(e) {
        return zt(e);
      },
      use: Oa,
      useCallback: function(e, t) {
        return W = "useCallback", re(), ic(e, t);
      },
      useContext: function(e) {
        return W = "useContext", re(), zt(e);
      },
      useEffect: function(e, t) {
        W = "useEffect", re(), ul(2048, xl, e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return W = "useImperativeHandle", re(), za(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return W = "useInsertionEffect", re(), ul(4, zn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return W = "useLayoutEffect", re(), ul(4, $l, e, t);
      },
      useMemo: function(e, t) {
        W = "useMemo", re();
        var n = $.H;
        $.H = mv;
        try {
          return si(e, t);
        } finally {
          $.H = n;
        }
      },
      useReducer: function(e, t, n) {
        W = "useReducer", re();
        var i = $.H;
        $.H = mv;
        try {
          return uc(e, t, n);
        } finally {
          $.H = i;
        }
      },
      useRef: function() {
        return W = "useRef", re(), at().memoizedState;
      },
      useState: function() {
        W = "useState", re();
        var e = $.H;
        $.H = mv;
        try {
          return uc(ft);
        } finally {
          $.H = e;
        }
      },
      useDebugValue: function() {
        W = "useDebugValue", re();
      },
      useDeferredValue: function(e, t) {
        return W = "useDeferredValue", re(), Ks(e, t);
      },
      useTransition: function() {
        return W = "useTransition", re(), $s();
      },
      useSyncExternalStore: function(e, t, n) {
        return W = "useSyncExternalStore", re(), Kr(
          e,
          t,
          n
        );
      },
      useId: function() {
        return W = "useId", re(), at().memoizedState;
      },
      useFormState: function(e) {
        return W = "useFormState", re(), vo(), Oo(e);
      },
      useActionState: function(e) {
        return W = "useActionState", re(), Oo(e);
      },
      useOptimistic: function(e, t) {
        return W = "useOptimistic", re(), Ys(e, t);
      },
      useHostTransitionStatus: ln,
      useMemoCache: Wt,
      useCacheRefresh: function() {
        return W = "useCacheRefresh", re(), at().memoizedState;
      }
    }, Ni = {
      readContext: function(e) {
        return R(), zt(e);
      },
      use: function(e) {
        return T(), Oa(e);
      },
      useCallback: function(e, t) {
        return W = "useCallback", T(), ke(), Fr(e, t);
      },
      useContext: function(e) {
        return W = "useContext", T(), ke(), zt(e);
      },
      useEffect: function(e, t) {
        return W = "useEffect", T(), ke(), Vs(e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return W = "useImperativeHandle", T(), ke(), Xs(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        W = "useInsertionEffect", T(), ke(), Yn(4, zn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return W = "useLayoutEffect", T(), ke(), Gs(e, t);
      },
      useMemo: function(e, t) {
        W = "useMemo", T(), ke();
        var n = $.H;
        $.H = Ni;
        try {
          return Qs(e, t);
        } finally {
          $.H = n;
        }
      },
      useReducer: function(e, t, n) {
        W = "useReducer", T(), ke();
        var i = $.H;
        $.H = Ni;
        try {
          return rt(e, t, n);
        } finally {
          $.H = i;
        }
      },
      useRef: function(e) {
        return W = "useRef", T(), ke(), Wr(e);
      },
      useState: function(e) {
        W = "useState", T(), ke();
        var t = $.H;
        $.H = Ni;
        try {
          return Su(e);
        } finally {
          $.H = t;
        }
      },
      useDebugValue: function() {
        W = "useDebugValue", T(), ke();
      },
      useDeferredValue: function(e, t) {
        return W = "useDeferredValue", T(), ke(), Zs(e, t);
      },
      useTransition: function() {
        return W = "useTransition", T(), ke(), xa();
      },
      useSyncExternalStore: function(e, t, n) {
        return W = "useSyncExternalStore", T(), ke(), bu(
          e,
          t,
          n
        );
      },
      useId: function() {
        return W = "useId", T(), ke(), Ua();
      },
      useFormState: function(e, t) {
        return W = "useFormState", T(), ke(), Ro(e, t);
      },
      useActionState: function(e, t) {
        return W = "useActionState", T(), ke(), Ro(e, t);
      },
      useOptimistic: function(e) {
        return W = "useOptimistic", T(), ke(), ia(e);
      },
      useMemoCache: function(e) {
        return T(), Wt(e);
      },
      useHostTransitionStatus: ln,
      useCacheRefresh: function() {
        return W = "useCacheRefresh", ke(), oc();
      }
    }, ju = {
      readContext: function(e) {
        return R(), zt(e);
      },
      use: function(e) {
        return T(), Oa(e);
      },
      useCallback: function(e, t) {
        return W = "useCallback", T(), re(), ic(e, t);
      },
      useContext: function(e) {
        return W = "useContext", T(), re(), zt(e);
      },
      useEffect: function(e, t) {
        W = "useEffect", T(), re(), ul(2048, xl, e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return W = "useImperativeHandle", T(), re(), za(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return W = "useInsertionEffect", T(), re(), ul(4, zn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return W = "useLayoutEffect", T(), re(), ul(4, $l, e, t);
      },
      useMemo: function(e, t) {
        W = "useMemo", T(), re();
        var n = $.H;
        $.H = ju;
        try {
          return si(e, t);
        } finally {
          $.H = n;
        }
      },
      useReducer: function(e, t, n) {
        W = "useReducer", T(), re();
        var i = $.H;
        $.H = ju;
        try {
          return qn(e, t, n);
        } finally {
          $.H = i;
        }
      },
      useRef: function() {
        return W = "useRef", T(), re(), at().memoizedState;
      },
      useState: function() {
        W = "useState", T(), re();
        var e = $.H;
        $.H = ju;
        try {
          return qn(ft);
        } finally {
          $.H = e;
        }
      },
      useDebugValue: function() {
        W = "useDebugValue", T(), re();
      },
      useDeferredValue: function(e, t) {
        return W = "useDeferredValue", T(), re(), Ir(e, t);
      },
      useTransition: function() {
        return W = "useTransition", T(), re(), ks();
      },
      useSyncExternalStore: function(e, t, n) {
        return W = "useSyncExternalStore", T(), re(), Kr(
          e,
          t,
          n
        );
      },
      useId: function() {
        return W = "useId", T(), re(), at().memoizedState;
      },
      useFormState: function(e) {
        return W = "useFormState", T(), re(), js(e);
      },
      useActionState: function(e) {
        return W = "useActionState", T(), re(), js(e);
      },
      useOptimistic: function(e, t) {
        return W = "useOptimistic", T(), re(), Tu(e, t);
      },
      useMemoCache: function(e) {
        return T(), Wt(e);
      },
      useHostTransitionStatus: ln,
      useCacheRefresh: function() {
        return W = "useCacheRefresh", re(), at().memoizedState;
      }
    }, mv = {
      readContext: function(e) {
        return R(), zt(e);
      },
      use: function(e) {
        return T(), Oa(e);
      },
      useCallback: function(e, t) {
        return W = "useCallback", T(), re(), ic(e, t);
      },
      useContext: function(e) {
        return W = "useContext", T(), re(), zt(e);
      },
      useEffect: function(e, t) {
        W = "useEffect", T(), re(), ul(2048, xl, e, t);
      },
      useImperativeHandle: function(e, t, n) {
        return W = "useImperativeHandle", T(), re(), za(e, t, n);
      },
      useInsertionEffect: function(e, t) {
        return W = "useInsertionEffect", T(), re(), ul(4, zn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return W = "useLayoutEffect", T(), re(), ul(4, $l, e, t);
      },
      useMemo: function(e, t) {
        W = "useMemo", T(), re();
        var n = $.H;
        $.H = ju;
        try {
          return si(e, t);
        } finally {
          $.H = n;
        }
      },
      useReducer: function(e, t, n) {
        W = "useReducer", T(), re();
        var i = $.H;
        $.H = ju;
        try {
          return uc(e, t, n);
        } finally {
          $.H = i;
        }
      },
      useRef: function() {
        return W = "useRef", T(), re(), at().memoizedState;
      },
      useState: function() {
        W = "useState", T(), re();
        var e = $.H;
        $.H = ju;
        try {
          return uc(ft);
        } finally {
          $.H = e;
        }
      },
      useDebugValue: function() {
        W = "useDebugValue", T(), re();
      },
      useDeferredValue: function(e, t) {
        return W = "useDeferredValue", T(), re(), Ks(e, t);
      },
      useTransition: function() {
        return W = "useTransition", T(), re(), $s();
      },
      useSyncExternalStore: function(e, t, n) {
        return W = "useSyncExternalStore", T(), re(), Kr(
          e,
          t,
          n
        );
      },
      useId: function() {
        return W = "useId", T(), re(), at().memoizedState;
      },
      useFormState: function(e) {
        return W = "useFormState", T(), re(), Oo(e);
      },
      useActionState: function(e) {
        return W = "useActionState", T(), re(), Oo(e);
      },
      useOptimistic: function(e, t) {
        return W = "useOptimistic", T(), re(), Ys(e, t);
      },
      useMemoCache: function(e) {
        return T(), Wt(e);
      },
      useHostTransitionStatus: ln,
      useCacheRefresh: function() {
        return W = "useCacheRefresh", re(), at().memoizedState;
      }
    };
    var z1 = {
      react_stack_bottom_frame: function(e, t, n) {
        var i = dn;
        dn = !0;
        try {
          return e(t, n);
        } finally {
          dn = i;
        }
      }
    }, jb = z1.react_stack_bottom_frame.bind(z1), x1 = {
      react_stack_bottom_frame: function(e) {
        var t = dn;
        dn = !0;
        try {
          return e.render();
        } finally {
          dn = t;
        }
      }
    }, U1 = x1.react_stack_bottom_frame.bind(x1), C1 = {
      react_stack_bottom_frame: function(e, t) {
        try {
          t.componentDidMount();
        } catch (n) {
          Ne(e, e.return, n);
        }
      }
    }, Vb = C1.react_stack_bottom_frame.bind(
      C1
    ), H1 = {
      react_stack_bottom_frame: function(e, t, n, i, o) {
        try {
          t.componentDidUpdate(n, i, o);
        } catch (r) {
          Ne(e, e.return, r);
        }
      }
    }, B1 = H1.react_stack_bottom_frame.bind(
      H1
    ), N1 = {
      react_stack_bottom_frame: function(e, t) {
        var n = t.stack;
        e.componentDidCatch(t.value, {
          componentStack: n !== null ? n : ""
        });
      }
    }, ZE = N1.react_stack_bottom_frame.bind(
      N1
    ), w1 = {
      react_stack_bottom_frame: function(e, t, n) {
        try {
          n.componentWillUnmount();
        } catch (i) {
          Ne(e, t, i);
        }
      }
    }, _1 = w1.react_stack_bottom_frame.bind(
      w1
    ), q1 = {
      react_stack_bottom_frame: function(e) {
        e.resourceKind != null && console.error(
          "Expected only SimpleEffects when enableUseEffectCRUDOverload is disabled, got %s",
          e.resourceKind
        );
        var t = e.create;
        return e = e.inst, t = t(), e.destroy = t;
      }
    }, KE = q1.react_stack_bottom_frame.bind(q1), L1 = {
      react_stack_bottom_frame: function(e, t, n) {
        try {
          n();
        } catch (i) {
          Ne(e, t, i);
        }
      }
    }, JE = L1.react_stack_bottom_frame.bind(L1), Y1 = {
      react_stack_bottom_frame: function(e) {
        var t = e._init;
        return t(e._payload);
      }
    }, rr = Y1.react_stack_bottom_frame.bind(Y1), Ah = null, yp = 0, We = null, Gb, j1 = Gb = !1, V1 = {}, G1 = {}, X1 = {};
    q = function(e, t, n) {
      if (n !== null && typeof n == "object" && n._store && (!n._store.validated && n.key == null || n._store.validated === 2)) {
        if (typeof n._store != "object")
          throw Error(
            "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
          );
        n._store.validated = 1;
        var i = se(e), o = i || "null";
        if (!V1[o]) {
          V1[o] = !0, n = n._owner, e = e._debugOwner;
          var r = "";
          e && typeof e.tag == "number" && (o = se(e)) && (r = `

Check the render method of \`` + o + "`."), r || i && (r = `

Check the top-level render call using <` + i + ">.");
          var h = "";
          n != null && e !== n && (i = null, typeof n.tag == "number" ? i = se(n) : typeof n.name == "string" && (i = n.name), i && (h = " It was passed a child from " + i + ".")), Se(t, function() {
            console.error(
              'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
              r,
              h
            );
          });
        }
      }
    };
    var Rh = lf(!0), Q1 = lf(!1), nu = Me(null), wi = null, Oh = 1, pp = 2, Ul = Me(0), Z1 = {}, K1 = /* @__PURE__ */ new Set(), J1 = /* @__PURE__ */ new Set(), k1 = /* @__PURE__ */ new Set(), $1 = /* @__PURE__ */ new Set(), W1 = /* @__PURE__ */ new Set(), F1 = /* @__PURE__ */ new Set(), I1 = /* @__PURE__ */ new Set(), P1 = /* @__PURE__ */ new Set(), eS = /* @__PURE__ */ new Set(), tS = /* @__PURE__ */ new Set();
    Object.freeze(Z1);
    var Xb = {
      enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var i = un(e), o = Aa(i);
        o.payload = t, n != null && (Hm(n), o.callback = n), t = na(e, o, i), t !== null && (Vt(t, e, i), ii(t, e, i)), Ze(e, i);
      },
      enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var i = un(e), o = Aa(i);
        o.tag = S1, o.payload = t, n != null && (Hm(n), o.callback = n), t = na(e, o, i), t !== null && (Vt(t, e, i), ii(t, e, i)), Ze(e, i);
      },
      enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = un(e), i = Aa(n);
        i.tag = T1, t != null && (Hm(t), i.callback = t), t = na(e, i, n), t !== null && (Vt(t, e, n), ii(t, e, n)), ge !== null && typeof ge.markForceUpdateScheduled == "function" && ge.markForceUpdateScheduled(e, n);
      }
    }, Qb = typeof reportError == "function" ? reportError : function(e) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var t = new window.ErrorEvent("error", {
          bubbles: !0,
          cancelable: !0,
          message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
          error: e
        });
        if (!window.dispatchEvent(t)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", e);
        return;
      }
      console.error(e);
    }, Dh = null, Zb = null, lS = Error(
      "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."
    ), Ll = !1, nS = {}, aS = {}, uS = {}, iS = {}, Mh = !1, cS = {}, Kb = {}, Jb = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    }, oS = !1, rS = null;
    rS = /* @__PURE__ */ new Set();
    var Yc = !1, ol = !1, kb = !1, fS = typeof WeakSet == "function" ? WeakSet : Set, Yl = null, zh = null, xh = null, vl = null, $n = !1, Vu = null, gp = 8192, kE = {
      getCacheForType: function(e) {
        var t = zt(zl), n = t.data.get(e);
        return n === void 0 && (n = e(), t.data.set(e, n)), n;
      },
      getOwner: function() {
        return On;
      }
    };
    if (typeof Symbol == "function" && Symbol.for) {
      var vp = Symbol.for;
      vp("selector.component"), vp("selector.has_pseudo_class"), vp("selector.role"), vp("selector.test_id"), vp("selector.text");
    }
    var $E = [], WE = typeof WeakMap == "function" ? WeakMap : Map, ha = 0, xn = 2, Gu = 4, jc = 0, bp = 1, Uh = 2, $b = 3, Pf = 4, yv = 6, sS = 5, bt = ha, xt = null, et = null, lt = 0, Wn = 0, Sp = 1, es = 2, Tp = 3, dS = 4, Wb = 5, Ch = 6, Ep = 7, Fb = 8, ts = 9, Et = Wn, ma = null, fr = !1, Hh = !1, Ib = !1, _i = 0, Pt = jc, sr = 0, dr = 0, Pb = 0, ya = 0, ls = 0, Ap = null, Un = null, pv = !1, e0 = 0, hS = 300, gv = 1 / 0, mS = 500, Rp = null, hr = null, FE = 0, IE = 1, PE = 2, ns = 0, yS = 1, pS = 2, gS = 3, eA = 4, t0 = 5, Wl = 0, mr = null, Bh = null, yr = 0, l0 = 0, n0 = null, vS = null, tA = 50, Op = 0, a0 = null, u0 = !1, vv = !1, lA = 50, as = 0, Dp = null, Nh = !1, bv = null, bS = !1, SS = /* @__PURE__ */ new Set(), nA = {}, Sv = null, wh = null, i0 = !1, c0 = !1, Tv = !1, o0 = !1, us = 0, r0 = {};
    (function() {
      for (var e = 0; e < Db.length; e++) {
        var t = Db[e], n = t.toLowerCase();
        t = t[0].toUpperCase() + t.slice(1), In(n, "on" + t);
      }
      In(a1, "onAnimationEnd"), In(u1, "onAnimationIteration"), In(i1, "onAnimationStart"), In("dblclick", "onDoubleClick"), In("focusin", "onFocus"), In("focusout", "onBlur"), In(NE, "onTransitionRun"), In(wE, "onTransitionStart"), In(_E, "onTransitionCancel"), In(c1, "onTransitionEnd");
    })(), Li("onMouseEnter", ["mouseout", "mouseover"]), Li("onMouseLeave", ["mouseout", "mouseover"]), Li("onPointerEnter", ["pointerout", "pointerover"]), Li("onPointerLeave", ["pointerout", "pointerover"]), Ku(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ), Ku(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ), Ku("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), Ku(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ), Ku(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ), Ku(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
    var Mp = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ), f0 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mp)
    ), Ev = "_reactListening" + Math.random().toString(36).slice(2), TS = !1, ES = !1, Av = !1, AS = !1, Rv = !1, Ov = !1, RS = !1, Dv = {}, aA = /\r\n?/g, uA = /\u0000|\uFFFD/g, is = "http://www.w3.org/1999/xlink", s0 = "http://www.w3.org/XML/1998/namespace", iA = "javascript:throw new Error('React form unexpectedly submitted.')", cA = "suppressHydrationWarning", Mv = "$", zv = "/$", Vc = "$?", zp = "$!", oA = 1, rA = 2, fA = 4, d0 = "F!", OS = "F", DS = "complete", sA = "style", Gc = 0, _h = 1, xv = 2, h0 = null, m0 = null, MS = { dialog: !0, webview: !0 }, y0 = null, zS = typeof setTimeout == "function" ? setTimeout : void 0, dA = typeof clearTimeout == "function" ? clearTimeout : void 0, cs = -1, xS = typeof Promise == "function" ? Promise : void 0, hA = typeof queueMicrotask == "function" ? queueMicrotask : typeof xS < "u" ? function(e) {
      return xS.resolve(null).then(e).catch(vy);
    } : zS, p0 = null, os = 0, xp = 1, US = 2, CS = 3, au = 4, uu = /* @__PURE__ */ new Map(), HS = /* @__PURE__ */ new Set(), Xc = _e.d;
    _e.d = {
      f: function() {
        var e = Xc.f(), t = vc();
        return e || t;
      },
      r: function(e) {
        var t = yn(e);
        t !== null && t.tag === 5 && t.type === "form" ? xm(t) : Xc.r(e);
      },
      D: function(e) {
        Xc.D(e), Hg("dns-prefetch", e, null);
      },
      C: function(e, t) {
        Xc.C(e, t), Hg("preconnect", e, t);
      },
      L: function(e, t, n) {
        Xc.L(e, t, n);
        var i = qh;
        if (i && e && t) {
          var o = 'link[rel="preload"][as="' + pn(t) + '"]';
          t === "image" && n && n.imageSrcSet ? (o += '[imagesrcset="' + pn(
            n.imageSrcSet
          ) + '"]', typeof n.imageSizes == "string" && (o += '[imagesizes="' + pn(
            n.imageSizes
          ) + '"]')) : o += '[href="' + pn(e) + '"]';
          var r = o;
          switch (t) {
            case "style":
              r = Ti(e);
              break;
            case "script":
              r = Oc(e);
          }
          uu.has(r) || (e = Ke(
            {
              rel: "preload",
              href: t === "image" && n && n.imageSrcSet ? void 0 : e,
              as: t
            },
            n
          ), uu.set(r, e), i.querySelector(o) !== null || t === "style" && i.querySelector(
            Qa(r)
          ) || t === "script" && i.querySelector(Dc(r)) || (t = i.createElement("link"), Xt(t, "link", e), fl(t), i.head.appendChild(t)));
        }
      },
      m: function(e, t) {
        Xc.m(e, t);
        var n = qh;
        if (n && e) {
          var i = t && typeof t.as == "string" ? t.as : "script", o = 'link[rel="modulepreload"][as="' + pn(i) + '"][href="' + pn(e) + '"]', r = o;
          switch (i) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              r = Oc(e);
          }
          if (!uu.has(r) && (e = Ke({ rel: "modulepreload", href: e }, t), uu.set(r, e), n.querySelector(o) === null)) {
            switch (i) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                if (n.querySelector(Dc(r)))
                  return;
            }
            i = n.createElement("link"), Xt(i, "link", e), fl(i), n.head.appendChild(i);
          }
        }
      },
      X: function(e, t) {
        Xc.X(e, t);
        var n = qh;
        if (n && e) {
          var i = pa(n).hoistableScripts, o = Oc(e), r = i.get(o);
          r || (r = n.querySelector(
            Dc(o)
          ), r || (e = Ke({ src: e, async: !0 }, t), (t = uu.get(o)) && Dy(e, t), r = n.createElement("script"), fl(r), Xt(r, "link", e), n.head.appendChild(r)), r = {
            type: "script",
            instance: r,
            count: 1,
            state: null
          }, i.set(o, r));
        }
      },
      S: function(e, t, n) {
        Xc.S(e, t, n);
        var i = qh;
        if (i && e) {
          var o = pa(i).hoistableStyles, r = Ti(e);
          t = t || "default";
          var h = o.get(r);
          if (!h) {
            var y = { loading: os, preload: null };
            if (h = i.querySelector(
              Qa(r)
            ))
              y.loading = xp | au;
            else {
              e = Ke(
                {
                  rel: "stylesheet",
                  href: e,
                  "data-precedence": t
                },
                n
              ), (n = uu.get(r)) && Oy(e, n);
              var S = h = i.createElement("link");
              fl(S), Xt(S, "link", e), S._p = new Promise(function(E, Z) {
                S.onload = E, S.onerror = Z;
              }), S.addEventListener("load", function() {
                y.loading |= xp;
              }), S.addEventListener("error", function() {
                y.loading |= US;
              }), y.loading |= au, jd(h, t, i);
            }
            h = {
              type: "stylesheet",
              instance: h,
              count: 1,
              state: y
            }, o.set(r, h);
          }
        }
      },
      M: function(e, t) {
        Xc.M(e, t);
        var n = qh;
        if (n && e) {
          var i = pa(n).hoistableScripts, o = Oc(e), r = i.get(o);
          r || (r = n.querySelector(
            Dc(o)
          ), r || (e = Ke({ src: e, async: !0, type: "module" }, t), (t = uu.get(o)) && Dy(e, t), r = n.createElement("script"), fl(r), Xt(r, "link", e), n.head.appendChild(r)), r = {
            type: "script",
            instance: r,
            count: 1,
            state: null
          }, i.set(o, r));
        }
      }
    };
    var qh = typeof document > "u" ? null : document, Uv = null, Up = null, g0 = null, Cv = null, rs = yb, Cp = {
      $$typeof: Zn,
      Provider: null,
      Consumer: null,
      _currentValue: rs,
      _currentValue2: rs,
      _threadCount: 0
    }, BS = "%c%s%c ", NS = "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", wS = "", Hv = " ", mA = Function.prototype.bind, _S = !1, qS = null, LS = null, YS = null, jS = null, VS = null, GS = null, XS = null, QS = null, ZS = null;
    qS = function(e, t, n, i) {
      t = d(e, t), t !== null && (n = m(t.memoizedState, n, 0, i), t.memoizedState = n, t.baseState = n, e.memoizedProps = Ke({}, e.memoizedProps), n = Il(e, 2), n !== null && Vt(n, e, 2));
    }, LS = function(e, t, n) {
      t = d(e, t), t !== null && (n = C(t.memoizedState, n, 0), t.memoizedState = n, t.baseState = n, e.memoizedProps = Ke({}, e.memoizedProps), n = Il(e, 2), n !== null && Vt(n, e, 2));
    }, YS = function(e, t, n, i) {
      t = d(e, t), t !== null && (n = g(t.memoizedState, n, i), t.memoizedState = n, t.baseState = n, e.memoizedProps = Ke({}, e.memoizedProps), n = Il(e, 2), n !== null && Vt(n, e, 2));
    }, jS = function(e, t, n) {
      e.pendingProps = m(e.memoizedProps, t, 0, n), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Il(e, 2), t !== null && Vt(t, e, 2);
    }, VS = function(e, t) {
      e.pendingProps = C(e.memoizedProps, t, 0), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Il(e, 2), t !== null && Vt(t, e, 2);
    }, GS = function(e, t, n) {
      e.pendingProps = g(
        e.memoizedProps,
        t,
        n
      ), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Il(e, 2), t !== null && Vt(t, e, 2);
    }, XS = function(e) {
      var t = Il(e, 2);
      t !== null && Vt(t, e, 2);
    }, QS = function(e) {
      x = e;
    }, ZS = function(e) {
      B = e;
    };
    var Bv = !0, Nv = null, v0 = !1, pr = null, gr = null, vr = null, Hp = /* @__PURE__ */ new Map(), Bp = /* @__PURE__ */ new Map(), br = [], yA = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    ), wv = null;
    if (Uf.prototype.render = Kd.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null) throw Error("Cannot update an unmounted root.");
      var n = arguments;
      typeof n[1] == "function" ? console.error(
        "does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ) : ie(n[1]) ? console.error(
        "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."
      ) : typeof n[1] < "u" && console.error(
        "You passed a second argument to root.render(...) but it only accepts one argument."
      ), n = e;
      var i = t.current, o = un(i);
      vt(i, o, n, t, null, null);
    }, Uf.prototype.unmount = Kd.prototype.unmount = function() {
      var e = arguments;
      if (typeof e[0] == "function" && console.error(
        "does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ), e = this._internalRoot, e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        (bt & (xn | Gu)) !== ha && console.error(
          "Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."
        ), vt(e.current, 2, null, e, null, null), vc(), t[xi] = null;
      }
    }, Uf.prototype.unstable_scheduleHydration = function(e) {
      if (e) {
        var t = Xp();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < br.length && t !== 0 && t < br[n].priority; n++) ;
        br.splice(n, 0, e), n === 0 && Lg(e);
      }
    }, (function() {
      var e = Cf.version;
      if (e !== "19.1.1")
        throw Error(
          `Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      ` + (e + `
  - react-dom:  19.1.1
Learn more: https://react.dev/warnings/version-mismatch`)
        );
    })(), typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"
    ), _e.findDOMNode = function(e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function" ? Error("Unable to find node on an unmounted component.") : (e = Object.keys(e).join(","), Error(
          "Argument appears to not be a ReactComponent. Keys: " + e
        ));
      return e = ye(t), e = e !== null ? Re(e) : null, e = e === null ? null : e.stateNode, e;
    }, !(function() {
      var e = {
        bundleType: 1,
        version: "19.1.1",
        rendererPackageName: "react-dom",
        currentDispatcherRef: $,
        reconcilerVersion: "19.1.1"
      };
      return e.overrideHookState = qS, e.overrideHookStateDeletePath = LS, e.overrideHookStateRenamePath = YS, e.overrideProps = jS, e.overridePropsDeletePath = VS, e.overridePropsRenamePath = GS, e.scheduleUpdate = XS, e.setErrorHandler = QS, e.setSuspenseHandler = ZS, e.scheduleRefresh = ue, e.scheduleRoot = K, e.setRefreshHandler = te, e.getCurrentFiber = sb, e.getLaneLabelMap = db, e.injectProfilingHooks = Qu, tl(e);
    })() && D && window.top === window.self && (-1 < navigator.userAgent.indexOf("Chrome") && navigator.userAgent.indexOf("Edge") === -1 || -1 < navigator.userAgent.indexOf("Firefox"))) {
      var KS = window.location.protocol;
      /^(https?|file):$/.test(KS) && console.info(
        "%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools" + (KS === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq` : ""),
        "font-weight:bold"
      );
    }
    wp.createRoot = function(e, t) {
      if (!ie(e))
        throw Error("Target container is not a DOM element.");
      Vg(e);
      var n = !1, i = "", o = Bm, r = pg, h = Ps, y = null;
      return t != null && (t.hydrate ? console.warn(
        "hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."
      ) : typeof t == "object" && t !== null && t.$$typeof === Ri && console.error(
        `You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`
      ), t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (r = t.onCaughtError), t.onRecoverableError !== void 0 && (h = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (y = t.unstable_transitionCallbacks)), t = xy(
        e,
        1,
        !1,
        null,
        null,
        n,
        i,
        o,
        r,
        h,
        y,
        null
      ), e[xi] = t.current, sy(e), new Kd(t);
    }, wp.hydrateRoot = function(e, t, n) {
      if (!ie(e))
        throw Error("Target container is not a DOM element.");
      Vg(e), t === void 0 && console.error(
        "Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)"
      );
      var i = !1, o = "", r = Bm, h = pg, y = Ps, S = null, E = null;
      return n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onUncaughtError !== void 0 && (r = n.onUncaughtError), n.onCaughtError !== void 0 && (h = n.onCaughtError), n.onRecoverableError !== void 0 && (y = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (S = n.unstable_transitionCallbacks), n.formState !== void 0 && (E = n.formState)), t = xy(
        e,
        1,
        !0,
        t,
        n ?? null,
        i,
        o,
        r,
        h,
        y,
        S,
        E
      ), t.context = Uy(null), n = t.current, i = un(n), i = jl(i), o = Aa(i), o.callback = null, na(n, o, i), n = i, t.current.lanes = n, lo(t, n), Gn(t), e[xi] = t.current, sy(e), new Uf(t);
    }, wp.version = "19.1.1", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), wp;
}
var tT;
function DA() {
  if (tT) return qv.exports;
  tT = 1;
  function d() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d);
      } catch (m) {
        console.error(m);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (d(), qv.exports = RA()) : qv.exports = OA(), qv.exports;
}
var lT = DA(), qi = {}, Gv = { exports: {} };
Gv.exports;
var nT;
function HT() {
  return nT || (nT = 1, (function(d) {
    const g = (B = 0) => (x) => `\x1B[${38 + B};5;${x}m`, v = (B = 0) => (x, q, T) => `\x1B[${38 + B};2;${x};${q};${T}m`;
    function C() {
      const B = /* @__PURE__ */ new Map(), x = {
        modifier: {
          reset: [0, 0],
          // 21 isn't widely supported and 22 does the same thing
          bold: [1, 22],
          dim: [2, 22],
          italic: [3, 23],
          underline: [4, 24],
          overline: [53, 55],
          inverse: [7, 27],
          hidden: [8, 28],
          strikethrough: [9, 29]
        },
        color: {
          black: [30, 39],
          red: [31, 39],
          green: [32, 39],
          yellow: [33, 39],
          blue: [34, 39],
          magenta: [35, 39],
          cyan: [36, 39],
          white: [37, 39],
          // Bright color
          blackBright: [90, 39],
          redBright: [91, 39],
          greenBright: [92, 39],
          yellowBright: [93, 39],
          blueBright: [94, 39],
          magentaBright: [95, 39],
          cyanBright: [96, 39],
          whiteBright: [97, 39]
        },
        bgColor: {
          bgBlack: [40, 49],
          bgRed: [41, 49],
          bgGreen: [42, 49],
          bgYellow: [43, 49],
          bgBlue: [44, 49],
          bgMagenta: [45, 49],
          bgCyan: [46, 49],
          bgWhite: [47, 49],
          // Bright color
          bgBlackBright: [100, 49],
          bgRedBright: [101, 49],
          bgGreenBright: [102, 49],
          bgYellowBright: [103, 49],
          bgBlueBright: [104, 49],
          bgMagentaBright: [105, 49],
          bgCyanBright: [106, 49],
          bgWhiteBright: [107, 49]
        }
      };
      x.color.gray = x.color.blackBright, x.bgColor.bgGray = x.bgColor.bgBlackBright, x.color.grey = x.color.blackBright, x.bgColor.bgGrey = x.bgColor.bgBlackBright;
      for (const [q, T] of Object.entries(x)) {
        for (const [R, O] of Object.entries(T))
          x[R] = {
            open: `\x1B[${O[0]}m`,
            close: `\x1B[${O[1]}m`
          }, T[R] = x[R], B.set(O[0], O[1]);
        Object.defineProperty(x, q, {
          value: T,
          enumerable: !1
        });
      }
      return Object.defineProperty(x, "codes", {
        value: B,
        enumerable: !1
      }), x.color.close = "\x1B[39m", x.bgColor.close = "\x1B[49m", x.color.ansi256 = g(), x.color.ansi16m = v(), x.bgColor.ansi256 = g(10), x.bgColor.ansi16m = v(10), Object.defineProperties(x, {
        rgbToAnsi256: {
          value: (q, T, R) => q === T && T === R ? q < 8 ? 16 : q > 248 ? 231 : Math.round((q - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(q / 255 * 5) + 6 * Math.round(T / 255 * 5) + Math.round(R / 255 * 5),
          enumerable: !1
        },
        hexToRgb: {
          value: (q) => {
            const T = /(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(q.toString(16));
            if (!T)
              return [0, 0, 0];
            let { colorString: R } = T.groups;
            R.length === 3 && (R = R.split("").map((A) => A + A).join(""));
            const O = Number.parseInt(R, 16);
            return [
              O >> 16 & 255,
              O >> 8 & 255,
              O & 255
            ];
          },
          enumerable: !1
        },
        hexToAnsi256: {
          value: (q) => x.rgbToAnsi256(...x.hexToRgb(q)),
          enumerable: !1
        }
      }), x;
    }
    Object.defineProperty(d, "exports", {
      enumerable: !0,
      get: C
    });
  })(Gv)), Gv.exports;
}
var fs = {}, aT;
function Wv() {
  if (aT) return fs;
  aT = 1, Object.defineProperty(fs, "__esModule", {
    value: !0
  }), fs.printIteratorEntries = m, fs.printIteratorValues = g, fs.printListItems = v, fs.printObjectProperties = C;
  const d = (B, x) => {
    const q = Object.keys(B).sort(x);
    return Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(B).forEach((T) => {
      Object.getOwnPropertyDescriptor(B, T).enumerable && q.push(T);
    }), q;
  };
  function m(B, x, q, T, R, O, A = ": ") {
    let U = "", K = B.next();
    if (!K.done) {
      U += x.spacingOuter;
      const ue = q + x.indent;
      for (; !K.done; ) {
        const te = O(
          K.value[0],
          x,
          ue,
          T,
          R
        ), ie = O(
          K.value[1],
          x,
          ue,
          T,
          R
        );
        U += ue + te + A + ie, K = B.next(), K.done ? x.min || (U += ",") : U += "," + x.spacingInner;
      }
      U += x.spacingOuter + q;
    }
    return U;
  }
  function g(B, x, q, T, R, O) {
    let A = "", U = B.next();
    if (!U.done) {
      A += x.spacingOuter;
      const K = q + x.indent;
      for (; !U.done; )
        A += K + O(U.value, x, K, T, R), U = B.next(), U.done ? x.min || (A += ",") : A += "," + x.spacingInner;
      A += x.spacingOuter + q;
    }
    return A;
  }
  function v(B, x, q, T, R, O) {
    let A = "";
    if (B.length) {
      A += x.spacingOuter;
      const U = q + x.indent;
      for (let K = 0; K < B.length; K++)
        A += U, K in B && (A += O(B[K], x, U, T, R)), K < B.length - 1 ? A += "," + x.spacingInner : x.min || (A += ",");
      A += x.spacingOuter + q;
    }
    return A;
  }
  function C(B, x, q, T, R, O) {
    let A = "";
    const U = d(B, x.compareKeys);
    if (U.length) {
      A += x.spacingOuter;
      const K = q + x.indent;
      for (let ue = 0; ue < U.length; ue++) {
        const te = U[ue], ie = O(te, x, K, T, R), H = O(B[te], x, K, T, R);
        A += K + ie + ": " + H, ue < U.length - 1 ? A += "," + x.spacingInner : x.min || (A += ",");
      }
      A += x.spacingOuter + q;
    }
    return A;
  }
  return fs;
}
var Zc = {}, uT;
function MA() {
  if (uT) return Zc;
  uT = 1, Object.defineProperty(Zc, "__esModule", {
    value: !0
  }), Zc.test = Zc.serialize = Zc.default = void 0;
  var d = Wv(), m = (function() {
    return typeof globalThis < "u" ? globalThis : typeof m < "u" ? m : typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")();
  })(), g = m["jest-symbol-do-not-touch"] || m.Symbol;
  const v = typeof g == "function" && g.for ? g.for("jest.asymmetricMatcher") : 1267621, C = " ", B = (R, O, A, U, K, ue) => {
    const te = R.toString();
    return te === "ArrayContaining" || te === "ArrayNotContaining" ? ++U > O.maxDepth ? "[" + te + "]" : te + C + "[" + (0, d.printListItems)(
      R.sample,
      O,
      A,
      U,
      K,
      ue
    ) + "]" : te === "ObjectContaining" || te === "ObjectNotContaining" ? ++U > O.maxDepth ? "[" + te + "]" : te + C + "{" + (0, d.printObjectProperties)(
      R.sample,
      O,
      A,
      U,
      K,
      ue
    ) + "}" : te === "StringMatching" || te === "StringNotMatching" || te === "StringContaining" || te === "StringNotContaining" ? te + C + ue(R.sample, O, A, U, K) : R.toAsymmetricMatcher();
  };
  Zc.serialize = B;
  const x = (R) => R && R.$$typeof === v;
  Zc.test = x;
  var T = {
    serialize: B,
    test: x
  };
  return Zc.default = T, Zc;
}
var Kc = {}, A0, iT;
function zA() {
  return iT || (iT = 1, A0 = ({ onlyFirst: d = !1 } = {}) => {
    const m = [
      "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
      "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"
    ].join("|");
    return new RegExp(m, d ? void 0 : "g");
  }), A0;
}
var cT;
function xA() {
  if (cT) return Kc;
  cT = 1, Object.defineProperty(Kc, "__esModule", {
    value: !0
  }), Kc.test = Kc.serialize = Kc.default = void 0;
  var d = g(zA()), m = g(HT());
  function g(T) {
    return T && T.__esModule ? T : { default: T };
  }
  const v = (T) => T.replace((0, d.default)(), (R) => {
    switch (R) {
      case m.default.red.close:
      case m.default.green.close:
      case m.default.cyan.close:
      case m.default.gray.close:
      case m.default.white.close:
      case m.default.yellow.close:
      case m.default.bgRed.close:
      case m.default.bgGreen.close:
      case m.default.bgYellow.close:
      case m.default.inverse.close:
      case m.default.dim.close:
      case m.default.bold.close:
      case m.default.reset.open:
      case m.default.reset.close:
        return "</>";
      case m.default.red.open:
        return "<red>";
      case m.default.green.open:
        return "<green>";
      case m.default.cyan.open:
        return "<cyan>";
      case m.default.gray.open:
        return "<gray>";
      case m.default.white.open:
        return "<white>";
      case m.default.yellow.open:
        return "<yellow>";
      case m.default.bgRed.open:
        return "<bgRed>";
      case m.default.bgGreen.open:
        return "<bgGreen>";
      case m.default.bgYellow.open:
        return "<bgYellow>";
      case m.default.inverse.open:
        return "<inverse>";
      case m.default.dim.open:
        return "<dim>";
      case m.default.bold.open:
        return "<bold>";
      default:
        return "";
    }
  }), C = (T) => typeof T == "string" && !!T.match((0, d.default)());
  Kc.test = C;
  const B = (T, R, O, A, U, K) => K(v(T), R, O, A, U);
  Kc.serialize = B;
  var q = {
    serialize: B,
    test: C
  };
  return Kc.default = q, Kc;
}
var Jc = {}, oT;
function UA() {
  if (oT) return Jc;
  oT = 1, Object.defineProperty(Jc, "__esModule", {
    value: !0
  }), Jc.test = Jc.serialize = Jc.default = void 0;
  var d = Wv();
  const m = " ", g = ["DOMStringMap", "NamedNodeMap"], v = /^(HTML\w*Collection|NodeList)$/, C = (O) => g.indexOf(O) !== -1 || v.test(O), B = (O) => O && O.constructor && !!O.constructor.name && C(O.constructor.name);
  Jc.test = B;
  const x = (O) => O.constructor.name === "NamedNodeMap", q = (O, A, U, K, ue, te) => {
    const ie = O.constructor.name;
    return ++K > A.maxDepth ? "[" + ie + "]" : (A.min ? "" : ie + m) + (g.indexOf(ie) !== -1 ? "{" + (0, d.printObjectProperties)(
      x(O) ? Array.from(O).reduce((H, de) => (H[de.name] = de.value, H), {}) : { ...O },
      A,
      U,
      K,
      ue,
      te
    ) + "}" : "[" + (0, d.printListItems)(
      Array.from(O),
      A,
      U,
      K,
      ue,
      te
    ) + "]");
  };
  Jc.serialize = q;
  var R = {
    serialize: q,
    test: B
  };
  return Jc.default = R, Jc;
}
var kc = {}, Cn = {}, Yv = {}, rT;
function CA() {
  if (rT) return Yv;
  rT = 1, Object.defineProperty(Yv, "__esModule", {
    value: !0
  }), Yv.default = d;
  function d(m) {
    return m.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  return Yv;
}
var fT;
function V0() {
  if (fT) return Cn;
  fT = 1, Object.defineProperty(Cn, "__esModule", {
    value: !0
  }), Cn.printText = Cn.printProps = Cn.printElementAsLeaf = Cn.printElement = Cn.printComment = Cn.printChildren = void 0;
  var d = m(CA());
  function m(T) {
    return T && T.__esModule ? T : { default: T };
  }
  const g = (T, R, O, A, U, K, ue) => {
    const te = A + O.indent, ie = O.colors;
    return T.map((H) => {
      const de = R[H];
      let me = ue(de, O, te, U, K);
      return typeof de != "string" && (me.indexOf(`
`) !== -1 && (me = O.spacingOuter + te + me + O.spacingOuter + A), me = "{" + me + "}"), O.spacingInner + A + ie.prop.open + H + ie.prop.close + "=" + ie.value.open + me + ie.value.close;
    }).join("");
  };
  Cn.printProps = g;
  const v = (T, R, O, A, U, K) => T.map(
    (ue) => R.spacingOuter + O + (typeof ue == "string" ? C(ue, R) : K(ue, R, O, A, U))
  ).join("");
  Cn.printChildren = v;
  const C = (T, R) => {
    const O = R.colors.content;
    return O.open + (0, d.default)(T) + O.close;
  };
  Cn.printText = C;
  const B = (T, R) => {
    const O = R.colors.comment;
    return O.open + "<!--" + (0, d.default)(T) + "-->" + O.close;
  };
  Cn.printComment = B;
  const x = (T, R, O, A, U) => {
    const K = A.colors.tag;
    return K.open + "<" + T + (R && K.close + R + A.spacingOuter + U + K.open) + (O ? ">" + K.close + O + A.spacingOuter + U + K.open + "</" + T : (R && !A.min ? "" : " ") + "/") + ">" + K.close;
  };
  Cn.printElement = x;
  const q = (T, R) => {
    const O = R.colors.tag;
    return O.open + "<" + T + O.close + " …" + O.open + " />" + O.close;
  };
  return Cn.printElementAsLeaf = q, Cn;
}
var sT;
function HA() {
  if (sT) return kc;
  sT = 1, Object.defineProperty(kc, "__esModule", {
    value: !0
  }), kc.test = kc.serialize = kc.default = void 0;
  var d = V0();
  const m = 1, g = 3, v = 8, C = 11, B = /^((HTML|SVG)\w*)?Element$/, x = (te) => {
    try {
      return typeof te.hasAttribute == "function" && te.hasAttribute("is");
    } catch {
      return !1;
    }
  }, q = (te) => {
    const ie = te.constructor.name, { nodeType: H, tagName: de } = te, me = typeof de == "string" && de.includes("-") || x(te);
    return H === m && (B.test(ie) || me) || H === g && ie === "Text" || H === v && ie === "Comment" || H === C && ie === "DocumentFragment";
  }, T = (te) => {
    var ie;
    return (te == null || (ie = te.constructor) === null || ie === void 0 ? void 0 : ie.name) && q(te);
  };
  kc.test = T;
  function R(te) {
    return te.nodeType === g;
  }
  function O(te) {
    return te.nodeType === v;
  }
  function A(te) {
    return te.nodeType === C;
  }
  const U = (te, ie, H, de, me, ye) => {
    if (R(te))
      return (0, d.printText)(te.data, ie);
    if (O(te))
      return (0, d.printComment)(te.data, ie);
    const Re = A(te) ? "DocumentFragment" : te.tagName.toLowerCase();
    return ++de > ie.maxDepth ? (0, d.printElementAsLeaf)(Re, ie) : (0, d.printElement)(
      Re,
      (0, d.printProps)(
        A(te) ? [] : Array.from(te.attributes).map((k) => k.name).sort(),
        A(te) ? {} : Array.from(te.attributes).reduce((k, Q) => (k[Q.name] = Q.value, k), {}),
        ie,
        H + ie.indent,
        de,
        me,
        ye
      ),
      (0, d.printChildren)(
        Array.prototype.slice.call(te.childNodes || te.children),
        ie,
        H + ie.indent,
        de,
        me,
        ye
      ),
      ie,
      H
    );
  };
  kc.serialize = U;
  var ue = {
    serialize: U,
    test: T
  };
  return kc.default = ue, kc;
}
var $c = {}, dT;
function BA() {
  if (dT) return $c;
  dT = 1, Object.defineProperty($c, "__esModule", {
    value: !0
  }), $c.test = $c.serialize = $c.default = void 0;
  var d = Wv();
  const m = "@@__IMMUTABLE_ITERABLE__@@", g = "@@__IMMUTABLE_LIST__@@", v = "@@__IMMUTABLE_KEYED__@@", C = "@@__IMMUTABLE_MAP__@@", B = "@@__IMMUTABLE_ORDERED__@@", x = "@@__IMMUTABLE_RECORD__@@", q = "@@__IMMUTABLE_SEQ__@@", T = "@@__IMMUTABLE_SET__@@", R = "@@__IMMUTABLE_STACK__@@", O = (Q) => "Immutable." + Q, A = (Q) => "[" + Q + "]", U = " ", K = "…", ue = (Q, ce, se, Me, Oe, ve, fe) => ++Me > ce.maxDepth ? A(O(fe)) : O(fe) + U + "{" + (0, d.printIteratorEntries)(
    Q.entries(),
    ce,
    se,
    Me,
    Oe,
    ve
  ) + "}";
  function te(Q) {
    let ce = 0;
    return {
      next() {
        if (ce < Q._keys.length) {
          const se = Q._keys[ce++];
          return {
            done: !1,
            value: [se, Q.get(se)]
          };
        }
        return {
          done: !0,
          value: void 0
        };
      }
    };
  }
  const ie = (Q, ce, se, Me, Oe, ve) => {
    const fe = O(Q._name || "Record");
    return ++Me > ce.maxDepth ? A(fe) : fe + U + "{" + (0, d.printIteratorEntries)(
      te(Q),
      ce,
      se,
      Me,
      Oe,
      ve
    ) + "}";
  }, H = (Q, ce, se, Me, Oe, ve) => {
    const fe = O("Seq");
    return ++Me > ce.maxDepth ? A(fe) : Q[v] ? fe + U + "{" + // from Immutable collection of entries or from ECMAScript object
    (Q._iter || Q._object ? (0, d.printIteratorEntries)(
      Q.entries(),
      ce,
      se,
      Me,
      Oe,
      ve
    ) : K) + "}" : fe + U + "[" + (Q._iter || // from Immutable collection of values
    Q._array || // from ECMAScript array
    Q._collection || // from ECMAScript collection in immutable v4
    Q._iterable ? (0, d.printIteratorValues)(
      Q.values(),
      ce,
      se,
      Me,
      Oe,
      ve
    ) : K) + "]";
  }, de = (Q, ce, se, Me, Oe, ve, fe) => ++Me > ce.maxDepth ? A(O(fe)) : O(fe) + U + "[" + (0, d.printIteratorValues)(
    Q.values(),
    ce,
    se,
    Me,
    Oe,
    ve
  ) + "]", me = (Q, ce, se, Me, Oe, ve) => Q[C] ? ue(
    Q,
    ce,
    se,
    Me,
    Oe,
    ve,
    Q[B] ? "OrderedMap" : "Map"
  ) : Q[g] ? de(
    Q,
    ce,
    se,
    Me,
    Oe,
    ve,
    "List"
  ) : Q[T] ? de(
    Q,
    ce,
    se,
    Me,
    Oe,
    ve,
    Q[B] ? "OrderedSet" : "Set"
  ) : Q[R] ? de(
    Q,
    ce,
    se,
    Me,
    Oe,
    ve,
    "Stack"
  ) : Q[q] ? H(Q, ce, se, Me, Oe, ve) : ie(Q, ce, se, Me, Oe, ve);
  $c.serialize = me;
  const ye = (Q) => Q && (Q[m] === !0 || Q[x] === !0);
  $c.test = ye;
  var k = {
    serialize: me,
    test: ye
  };
  return $c.default = k, $c;
}
var Wc = {}, jv = { exports: {} }, Ot = {};
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hT;
function NA() {
  if (hT) return Ot;
  hT = 1;
  var d = 60103, m = 60106, g = 60107, v = 60108, C = 60114, B = 60109, x = 60110, q = 60112, T = 60113, R = 60120, O = 60115, A = 60116, U = 60121, K = 60122, ue = 60117, te = 60129, ie = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var H = Symbol.for;
    d = H("react.element"), m = H("react.portal"), g = H("react.fragment"), v = H("react.strict_mode"), C = H("react.profiler"), B = H("react.provider"), x = H("react.context"), q = H("react.forward_ref"), T = H("react.suspense"), R = H("react.suspense_list"), O = H("react.memo"), A = H("react.lazy"), U = H("react.block"), K = H("react.server.block"), ue = H("react.fundamental"), te = H("react.debug_trace_mode"), ie = H("react.legacy_hidden");
  }
  function de(fe) {
    if (typeof fe == "object" && fe !== null) {
      var De = fe.$$typeof;
      switch (De) {
        case d:
          switch (fe = fe.type, fe) {
            case g:
            case C:
            case v:
            case T:
            case R:
              return fe;
            default:
              switch (fe = fe && fe.$$typeof, fe) {
                case x:
                case q:
                case A:
                case O:
                case B:
                  return fe;
                default:
                  return De;
              }
          }
        case m:
          return De;
      }
    }
  }
  var me = B, ye = d, Re = q, k = g, Q = A, ce = O, se = m, Me = C, Oe = v, ve = T;
  return Ot.ContextConsumer = x, Ot.ContextProvider = me, Ot.Element = ye, Ot.ForwardRef = Re, Ot.Fragment = k, Ot.Lazy = Q, Ot.Memo = ce, Ot.Portal = se, Ot.Profiler = Me, Ot.StrictMode = Oe, Ot.Suspense = ve, Ot.isAsyncMode = function() {
    return !1;
  }, Ot.isConcurrentMode = function() {
    return !1;
  }, Ot.isContextConsumer = function(fe) {
    return de(fe) === x;
  }, Ot.isContextProvider = function(fe) {
    return de(fe) === B;
  }, Ot.isElement = function(fe) {
    return typeof fe == "object" && fe !== null && fe.$$typeof === d;
  }, Ot.isForwardRef = function(fe) {
    return de(fe) === q;
  }, Ot.isFragment = function(fe) {
    return de(fe) === g;
  }, Ot.isLazy = function(fe) {
    return de(fe) === A;
  }, Ot.isMemo = function(fe) {
    return de(fe) === O;
  }, Ot.isPortal = function(fe) {
    return de(fe) === m;
  }, Ot.isProfiler = function(fe) {
    return de(fe) === C;
  }, Ot.isStrictMode = function(fe) {
    return de(fe) === v;
  }, Ot.isSuspense = function(fe) {
    return de(fe) === T;
  }, Ot.isValidElementType = function(fe) {
    return typeof fe == "string" || typeof fe == "function" || fe === g || fe === C || fe === te || fe === v || fe === T || fe === R || fe === ie || typeof fe == "object" && fe !== null && (fe.$$typeof === A || fe.$$typeof === O || fe.$$typeof === B || fe.$$typeof === x || fe.$$typeof === q || fe.$$typeof === ue || fe.$$typeof === U || fe[0] === K);
  }, Ot.typeOf = de, Ot;
}
var Dt = {};
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mT;
function wA() {
  return mT || (mT = 1, process.env.NODE_ENV !== "production" && (function() {
    var d = 60103, m = 60106, g = 60107, v = 60108, C = 60114, B = 60109, x = 60110, q = 60112, T = 60113, R = 60120, O = 60115, A = 60116, U = 60121, K = 60122, ue = 60117, te = 60129, ie = 60131;
    if (typeof Symbol == "function" && Symbol.for) {
      var H = Symbol.for;
      d = H("react.element"), m = H("react.portal"), g = H("react.fragment"), v = H("react.strict_mode"), C = H("react.profiler"), B = H("react.provider"), x = H("react.context"), q = H("react.forward_ref"), T = H("react.suspense"), R = H("react.suspense_list"), O = H("react.memo"), A = H("react.lazy"), U = H("react.block"), K = H("react.server.block"), ue = H("react.fundamental"), H("react.scope"), H("react.opaque.id"), te = H("react.debug_trace_mode"), H("react.offscreen"), ie = H("react.legacy_hidden");
    }
    var de = !1;
    function me(he) {
      return !!(typeof he == "string" || typeof he == "function" || he === g || he === C || he === te || he === v || he === T || he === R || he === ie || de || typeof he == "object" && he !== null && (he.$$typeof === A || he.$$typeof === O || he.$$typeof === B || he.$$typeof === x || he.$$typeof === q || he.$$typeof === ue || he.$$typeof === U || he[0] === K));
    }
    function ye(he) {
      if (typeof he == "object" && he !== null) {
        var nt = he.$$typeof;
        switch (nt) {
          case d:
            var Ze = he.type;
            switch (Ze) {
              case g:
              case C:
              case v:
              case T:
              case R:
                return Ze;
              default:
                var Lt = Ze && Ze.$$typeof;
                switch (Lt) {
                  case x:
                  case q:
                  case A:
                  case O:
                  case B:
                    return Lt;
                  default:
                    return nt;
                }
            }
          case m:
            return nt;
        }
      }
    }
    var Re = x, k = B, Q = d, ce = q, se = g, Me = A, Oe = O, ve = m, fe = C, De = v, ot = T, N = !1, I = !1;
    function oe(he) {
      return N || (N = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Ue(he) {
      return I || (I = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Be(he) {
      return ye(he) === x;
    }
    function gt(he) {
      return ye(he) === B;
    }
    function ze(he) {
      return typeof he == "object" && he !== null && he.$$typeof === d;
    }
    function Je(he) {
      return ye(he) === q;
    }
    function it(he) {
      return ye(he) === g;
    }
    function tl(he) {
      return ye(he) === A;
    }
    function tt(he) {
      return ye(he) === O;
    }
    function Qu(he) {
      return ye(he) === m;
    }
    function ou(he) {
      return ye(he) === C;
    }
    function Y(he) {
      return ye(he) === v;
    }
    function Ae(he) {
      return ye(he) === T;
    }
    Dt.ContextConsumer = Re, Dt.ContextProvider = k, Dt.Element = Q, Dt.ForwardRef = ce, Dt.Fragment = se, Dt.Lazy = Me, Dt.Memo = Oe, Dt.Portal = ve, Dt.Profiler = fe, Dt.StrictMode = De, Dt.Suspense = ot, Dt.isAsyncMode = oe, Dt.isConcurrentMode = Ue, Dt.isContextConsumer = Be, Dt.isContextProvider = gt, Dt.isElement = ze, Dt.isForwardRef = Je, Dt.isFragment = it, Dt.isLazy = tl, Dt.isMemo = tt, Dt.isPortal = Qu, Dt.isProfiler = ou, Dt.isStrictMode = Y, Dt.isSuspense = Ae, Dt.isValidElementType = me, Dt.typeOf = ye;
  })()), Dt;
}
var yT;
function _A() {
  return yT || (yT = 1, process.env.NODE_ENV === "production" ? jv.exports = NA() : jv.exports = wA()), jv.exports;
}
var pT;
function qA() {
  if (pT) return Wc;
  pT = 1, Object.defineProperty(Wc, "__esModule", {
    value: !0
  }), Wc.test = Wc.serialize = Wc.default = void 0;
  var d = v(_A()), m = V0();
  function g(A) {
    if (typeof WeakMap != "function") return null;
    var U = /* @__PURE__ */ new WeakMap(), K = /* @__PURE__ */ new WeakMap();
    return (g = function(ue) {
      return ue ? K : U;
    })(A);
  }
  function v(A, U) {
    if (A && A.__esModule)
      return A;
    if (A === null || typeof A != "object" && typeof A != "function")
      return { default: A };
    var K = g(U);
    if (K && K.has(A))
      return K.get(A);
    var ue = {}, te = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var ie in A)
      if (ie !== "default" && Object.prototype.hasOwnProperty.call(A, ie)) {
        var H = te ? Object.getOwnPropertyDescriptor(A, ie) : null;
        H && (H.get || H.set) ? Object.defineProperty(ue, ie, H) : ue[ie] = A[ie];
      }
    return ue.default = A, K && K.set(A, ue), ue;
  }
  const C = (A, U = []) => (Array.isArray(A) ? A.forEach((K) => {
    C(K, U);
  }) : A != null && A !== !1 && U.push(A), U), B = (A) => {
    const U = A.type;
    if (typeof U == "string")
      return U;
    if (typeof U == "function")
      return U.displayName || U.name || "Unknown";
    if (d.isFragment(A))
      return "React.Fragment";
    if (d.isSuspense(A))
      return "React.Suspense";
    if (typeof U == "object" && U !== null) {
      if (d.isContextProvider(A))
        return "Context.Provider";
      if (d.isContextConsumer(A))
        return "Context.Consumer";
      if (d.isForwardRef(A)) {
        if (U.displayName)
          return U.displayName;
        const K = U.render.displayName || U.render.name || "";
        return K !== "" ? "ForwardRef(" + K + ")" : "ForwardRef";
      }
      if (d.isMemo(A)) {
        const K = U.displayName || U.type.displayName || U.type.name || "";
        return K !== "" ? "Memo(" + K + ")" : "Memo";
      }
    }
    return "UNDEFINED";
  }, x = (A) => {
    const { props: U } = A;
    return Object.keys(U).filter((K) => K !== "children" && U[K] !== void 0).sort();
  }, q = (A, U, K, ue, te, ie) => ++ue > U.maxDepth ? (0, m.printElementAsLeaf)(B(A), U) : (0, m.printElement)(
    B(A),
    (0, m.printProps)(
      x(A),
      A.props,
      U,
      K + U.indent,
      ue,
      te,
      ie
    ),
    (0, m.printChildren)(
      C(A.props.children),
      U,
      K + U.indent,
      ue,
      te,
      ie
    ),
    U,
    K
  );
  Wc.serialize = q;
  const T = (A) => A != null && d.isElement(A);
  Wc.test = T;
  var O = {
    serialize: q,
    test: T
  };
  return Wc.default = O, Wc;
}
var Fc = {}, gT;
function LA() {
  if (gT) return Fc;
  gT = 1, Object.defineProperty(Fc, "__esModule", {
    value: !0
  }), Fc.test = Fc.serialize = Fc.default = void 0;
  var d = V0(), m = (function() {
    return typeof globalThis < "u" ? globalThis : typeof m < "u" ? m : typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")();
  })(), g = m["jest-symbol-do-not-touch"] || m.Symbol;
  const v = typeof g == "function" && g.for ? g.for("react.test.json") : 245830487, C = (R) => {
    const { props: O } = R;
    return O ? Object.keys(O).filter((A) => O[A] !== void 0).sort() : [];
  }, B = (R, O, A, U, K, ue) => ++U > O.maxDepth ? (0, d.printElementAsLeaf)(R.type, O) : (0, d.printElement)(
    R.type,
    R.props ? (0, d.printProps)(
      C(R),
      R.props,
      O,
      A + O.indent,
      U,
      K,
      ue
    ) : "",
    R.children ? (0, d.printChildren)(
      R.children,
      O,
      A + O.indent,
      U,
      K,
      ue
    ) : "",
    O,
    A
  );
  Fc.serialize = B;
  const x = (R) => R && R.$$typeof === v;
  Fc.test = x;
  var T = {
    serialize: B,
    test: x
  };
  return Fc.default = T, Fc;
}
var vT;
function YA() {
  if (vT) return qi;
  vT = 1, Object.defineProperty(qi, "__esModule", {
    value: !0
  }), qi.default = qi.DEFAULT_OPTIONS = void 0, qi.format = tt, qi.plugins = void 0;
  var d = R(HT()), m = Wv(), g = R(
    MA()
  ), v = R(xA()), C = R(UA()), B = R(HA()), x = R(BA()), q = R(qA()), T = R(
    LA()
  );
  function R(Y) {
    return Y && Y.__esModule ? Y : { default: Y };
  }
  const O = Object.prototype.toString, A = Date.prototype.toISOString, U = Error.prototype.toString, K = RegExp.prototype.toString, ue = (Y) => typeof Y.constructor == "function" && Y.constructor.name || "Object", te = (Y) => typeof window < "u" && Y === window, ie = /^Symbol\((.*)\)(.*)$/, H = /\n/gi;
  class de extends Error {
    constructor(Ae, he) {
      super(Ae), this.stack = he, this.name = this.constructor.name;
    }
  }
  function me(Y) {
    return Y === "[object Array]" || Y === "[object ArrayBuffer]" || Y === "[object DataView]" || Y === "[object Float32Array]" || Y === "[object Float64Array]" || Y === "[object Int8Array]" || Y === "[object Int16Array]" || Y === "[object Int32Array]" || Y === "[object Uint8Array]" || Y === "[object Uint8ClampedArray]" || Y === "[object Uint16Array]" || Y === "[object Uint32Array]";
  }
  function ye(Y) {
    return Object.is(Y, -0) ? "-0" : String(Y);
  }
  function Re(Y) {
    return `${Y}n`;
  }
  function k(Y, Ae) {
    return Ae ? "[Function " + (Y.name || "anonymous") + "]" : "[Function]";
  }
  function Q(Y) {
    return String(Y).replace(ie, "Symbol($1)");
  }
  function ce(Y) {
    return "[" + U.call(Y) + "]";
  }
  function se(Y, Ae, he, nt) {
    if (Y === !0 || Y === !1)
      return "" + Y;
    if (Y === void 0)
      return "undefined";
    if (Y === null)
      return "null";
    const Ze = typeof Y;
    if (Ze === "number")
      return ye(Y);
    if (Ze === "bigint")
      return Re(Y);
    if (Ze === "string")
      return nt ? '"' + Y.replace(/"|\\/g, "\\$&") + '"' : '"' + Y + '"';
    if (Ze === "function")
      return k(Y, Ae);
    if (Ze === "symbol")
      return Q(Y);
    const Lt = O.call(Y);
    return Lt === "[object WeakMap]" ? "WeakMap {}" : Lt === "[object WeakSet]" ? "WeakSet {}" : Lt === "[object Function]" || Lt === "[object GeneratorFunction]" ? k(Y, Ae) : Lt === "[object Symbol]" ? Q(Y) : Lt === "[object Date]" ? isNaN(+Y) ? "Date { NaN }" : A.call(Y) : Lt === "[object Error]" ? ce(Y) : Lt === "[object RegExp]" ? he ? K.call(Y).replace(/[\\^$*+?.()|[\]{}]/g, "\\$&") : K.call(Y) : Y instanceof Error ? ce(Y) : null;
  }
  function Me(Y, Ae, he, nt, Ze, Lt) {
    if (Ze.indexOf(Y) !== -1)
      return "[Circular]";
    Ze = Ze.slice(), Ze.push(Y);
    const Cl = ++nt > Ae.maxDepth, kt = Ae.min;
    if (Ae.callToJSON && !Cl && Y.toJSON && typeof Y.toJSON == "function" && !Lt)
      return De(Y.toJSON(), Ae, he, nt, Ze, !0);
    const $t = O.call(Y);
    return $t === "[object Arguments]" ? Cl ? "[Arguments]" : (kt ? "" : "Arguments ") + "[" + (0, m.printListItems)(
      Y,
      Ae,
      he,
      nt,
      Ze,
      De
    ) + "]" : me($t) ? Cl ? "[" + Y.constructor.name + "]" : (kt || !Ae.printBasicPrototype && Y.constructor.name === "Array" ? "" : Y.constructor.name + " ") + "[" + (0, m.printListItems)(
      Y,
      Ae,
      he,
      nt,
      Ze,
      De
    ) + "]" : $t === "[object Map]" ? Cl ? "[Map]" : "Map {" + (0, m.printIteratorEntries)(
      Y.entries(),
      Ae,
      he,
      nt,
      Ze,
      De,
      " => "
    ) + "}" : $t === "[object Set]" ? Cl ? "[Set]" : "Set {" + (0, m.printIteratorValues)(
      Y.values(),
      Ae,
      he,
      nt,
      Ze,
      De
    ) + "}" : Cl || te(Y) ? "[" + ue(Y) + "]" : (kt || !Ae.printBasicPrototype && ue(Y) === "Object" ? "" : ue(Y) + " ") + "{" + (0, m.printObjectProperties)(
      Y,
      Ae,
      he,
      nt,
      Ze,
      De
    ) + "}";
  }
  function Oe(Y) {
    return Y.serialize != null;
  }
  function ve(Y, Ae, he, nt, Ze, Lt) {
    let Cl;
    try {
      Cl = Oe(Y) ? Y.serialize(Ae, he, nt, Ze, Lt, De) : Y.print(
        Ae,
        (kt) => De(kt, he, nt, Ze, Lt),
        (kt) => {
          const $t = nt + he.indent;
          return $t + kt.replace(H, `
` + $t);
        },
        {
          edgeSpacing: he.spacingOuter,
          min: he.min,
          spacing: he.spacingInner
        },
        he.colors
      );
    } catch (kt) {
      throw new de(kt.message, kt.stack);
    }
    if (typeof Cl != "string")
      throw new Error(
        `pretty-format: Plugin must return type "string" but instead returned "${typeof Cl}".`
      );
    return Cl;
  }
  function fe(Y, Ae) {
    for (let he = 0; he < Y.length; he++)
      try {
        if (Y[he].test(Ae))
          return Y[he];
      } catch (nt) {
        throw new de(nt.message, nt.stack);
      }
    return null;
  }
  function De(Y, Ae, he, nt, Ze, Lt) {
    const Cl = fe(Ae.plugins, Y);
    if (Cl !== null)
      return ve(Cl, Y, Ae, he, nt, Ze);
    const kt = se(
      Y,
      Ae.printFunctionName,
      Ae.escapeRegex,
      Ae.escapeString
    );
    return kt !== null ? kt : Me(
      Y,
      Ae,
      he,
      nt,
      Ze,
      Lt
    );
  }
  const ot = {
    comment: "gray",
    content: "reset",
    prop: "yellow",
    tag: "cyan",
    value: "green"
  }, N = Object.keys(ot), I = {
    callToJSON: !0,
    compareKeys: void 0,
    escapeRegex: !1,
    escapeString: !0,
    highlight: !1,
    indent: 2,
    maxDepth: 1 / 0,
    min: !1,
    plugins: [],
    printBasicPrototype: !0,
    printFunctionName: !0,
    theme: ot
  };
  qi.DEFAULT_OPTIONS = I;
  function oe(Y) {
    if (Object.keys(Y).forEach((Ae) => {
      if (!I.hasOwnProperty(Ae))
        throw new Error(`pretty-format: Unknown option "${Ae}".`);
    }), Y.min && Y.indent !== void 0 && Y.indent !== 0)
      throw new Error(
        'pretty-format: Options "min" and "indent" cannot be used together.'
      );
    if (Y.theme !== void 0) {
      if (Y.theme === null)
        throw new Error('pretty-format: Option "theme" must not be null.');
      if (typeof Y.theme != "object")
        throw new Error(
          `pretty-format: Option "theme" must be of type "object" but instead received "${typeof Y.theme}".`
        );
    }
  }
  const Ue = (Y) => N.reduce((Ae, he) => {
    const nt = Y.theme && Y.theme[he] !== void 0 ? Y.theme[he] : ot[he], Ze = nt && d.default[nt];
    if (Ze && typeof Ze.close == "string" && typeof Ze.open == "string")
      Ae[he] = Ze;
    else
      throw new Error(
        `pretty-format: Option "theme" has a key "${he}" whose value "${nt}" is undefined in ansi-styles.`
      );
    return Ae;
  }, /* @__PURE__ */ Object.create(null)), Be = () => N.reduce((Y, Ae) => (Y[Ae] = {
    close: "",
    open: ""
  }, Y), /* @__PURE__ */ Object.create(null)), gt = (Y) => Y && Y.printFunctionName !== void 0 ? Y.printFunctionName : I.printFunctionName, ze = (Y) => Y && Y.escapeRegex !== void 0 ? Y.escapeRegex : I.escapeRegex, Je = (Y) => Y && Y.escapeString !== void 0 ? Y.escapeString : I.escapeString, it = (Y) => {
    var Ae;
    return {
      callToJSON: Y && Y.callToJSON !== void 0 ? Y.callToJSON : I.callToJSON,
      colors: Y && Y.highlight ? Ue(Y) : Be(),
      compareKeys: Y && typeof Y.compareKeys == "function" ? Y.compareKeys : I.compareKeys,
      escapeRegex: ze(Y),
      escapeString: Je(Y),
      indent: Y && Y.min ? "" : tl(
        Y && Y.indent !== void 0 ? Y.indent : I.indent
      ),
      maxDepth: Y && Y.maxDepth !== void 0 ? Y.maxDepth : I.maxDepth,
      min: Y && Y.min !== void 0 ? Y.min : I.min,
      plugins: Y && Y.plugins !== void 0 ? Y.plugins : I.plugins,
      printBasicPrototype: (Ae = Y?.printBasicPrototype) !== null && Ae !== void 0 ? Ae : !0,
      printFunctionName: gt(Y),
      spacingInner: Y && Y.min ? " " : `
`,
      spacingOuter: Y && Y.min ? "" : `
`
    };
  };
  function tl(Y) {
    return new Array(Y + 1).join(" ");
  }
  function tt(Y, Ae) {
    if (Ae && (oe(Ae), Ae.plugins)) {
      const nt = fe(Ae.plugins, Y);
      if (nt !== null)
        return ve(nt, Y, it(Ae), "", 0, []);
    }
    const he = se(
      Y,
      gt(Ae),
      ze(Ae),
      Je(Ae)
    );
    return he !== null ? he : Me(Y, it(Ae), "", 0, []);
  }
  const Qu = {
    AsymmetricMatcher: g.default,
    ConvertAnsi: v.default,
    DOMCollection: C.default,
    DOMElement: B.default,
    Immutable: x.default,
    ReactElement: q.default,
    ReactTestComponent: T.default
  };
  qi.plugins = Qu;
  var ou = tt;
  return qi.default = ou, qi;
}
var BT = YA(), jA = Object.prototype.toString;
function VA(d) {
  return typeof d == "function" || jA.call(d) === "[object Function]";
}
function GA(d) {
  var m = Number(d);
  return isNaN(m) ? 0 : m === 0 || !isFinite(m) ? m : (m > 0 ? 1 : -1) * Math.floor(Math.abs(m));
}
var XA = Math.pow(2, 53) - 1;
function QA(d) {
  var m = GA(d);
  return Math.min(Math.max(m, 0), XA);
}
function Xu(d, m) {
  var g = Array, v = Object(d);
  if (d == null)
    throw new TypeError("Array.from requires an array-like object - not null or undefined");
  for (var C = QA(v.length), B = VA(g) ? Object(new g(C)) : new Array(C), x = 0, q; x < C; )
    q = v[x], B[x] = q, x += 1;
  return B.length = C, B;
}
function qp(d) {
  "@babel/helpers - typeof";
  return qp = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(m) {
    return typeof m;
  } : function(m) {
    return m && typeof Symbol == "function" && m.constructor === Symbol && m !== Symbol.prototype ? "symbol" : typeof m;
  }, qp(d);
}
function ZA(d, m) {
  if (!(d instanceof m))
    throw new TypeError("Cannot call a class as a function");
}
function KA(d, m) {
  for (var g = 0; g < m.length; g++) {
    var v = m[g];
    v.enumerable = v.enumerable || !1, v.configurable = !0, "value" in v && (v.writable = !0), Object.defineProperty(d, NT(v.key), v);
  }
}
function JA(d, m, g) {
  return m && KA(d.prototype, m), Object.defineProperty(d, "prototype", { writable: !1 }), d;
}
function kA(d, m, g) {
  return m = NT(m), m in d ? Object.defineProperty(d, m, { value: g, enumerable: !0, configurable: !0, writable: !0 }) : d[m] = g, d;
}
function NT(d) {
  var m = $A(d, "string");
  return qp(m) === "symbol" ? m : String(m);
}
function $A(d, m) {
  if (qp(d) !== "object" || d === null) return d;
  var g = d[Symbol.toPrimitive];
  if (g !== void 0) {
    var v = g.call(d, m);
    if (qp(v) !== "object") return v;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (m === "string" ? String : Number)(d);
}
var WA = /* @__PURE__ */ (function() {
  function d() {
    var m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    ZA(this, d), kA(this, "items", void 0), this.items = m;
  }
  return JA(d, [{
    key: "add",
    value: function(g) {
      return this.has(g) === !1 && this.items.push(g), this;
    }
  }, {
    key: "clear",
    value: function() {
      this.items = [];
    }
  }, {
    key: "delete",
    value: function(g) {
      var v = this.items.length;
      return this.items = this.items.filter(function(C) {
        return C !== g;
      }), v !== this.items.length;
    }
  }, {
    key: "forEach",
    value: function(g) {
      var v = this;
      this.items.forEach(function(C) {
        g(C, C, v);
      });
    }
  }, {
    key: "has",
    value: function(g) {
      return this.items.indexOf(g) !== -1;
    }
  }, {
    key: "size",
    get: function() {
      return this.items.length;
    }
  }]), d;
})();
const FA = typeof Set > "u" ? Set : WA;
function mn(d) {
  var m;
  return (
    // eslint-disable-next-line no-restricted-properties -- actual guard for environments without localName
    (m = d.localName) !== null && m !== void 0 ? m : (
      // eslint-disable-next-line no-restricted-properties -- required for the fallback
      d.tagName.toLowerCase()
    )
  );
}
var IA = {
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
}, PA = {
  caption: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  code: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  deletion: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  emphasis: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  generic: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby", "aria-roledescription"]),
  insertion: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  paragraph: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  presentation: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  strong: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  subscript: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  superscript: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"])
};
function e2(d, m) {
  return [
    "aria-atomic",
    "aria-busy",
    "aria-controls",
    "aria-current",
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
  ].some(function(g) {
    var v;
    return d.hasAttribute(g) && !((v = PA[m]) !== null && v !== void 0 && v.has(g));
  });
}
function wT(d, m) {
  return e2(d, m);
}
function t2(d) {
  var m = n2(d);
  if (m === null || m === "presentation") {
    var g = l2(d);
    if (m !== "presentation" || wT(d, g || ""))
      return g;
  }
  return m;
}
function l2(d) {
  var m = IA[mn(d)];
  if (m !== void 0)
    return m;
  switch (mn(d)) {
    case "a":
    case "area":
    case "link":
      if (d.hasAttribute("href"))
        return "link";
      break;
    case "img":
      return d.getAttribute("alt") === "" && !wT(d, "img") ? "presentation" : "img";
    case "input": {
      var g = d, v = g.type;
      switch (v) {
        case "button":
        case "image":
        case "reset":
        case "submit":
          return "button";
        case "checkbox":
        case "radio":
          return v;
        case "range":
          return "slider";
        case "email":
        case "tel":
        case "text":
        case "url":
          return d.hasAttribute("list") ? "combobox" : "textbox";
        case "search":
          return d.hasAttribute("list") ? "combobox" : "searchbox";
        case "number":
          return "spinbutton";
        default:
          return null;
      }
    }
    case "select":
      return d.hasAttribute("multiple") || d.size > 1 ? "listbox" : "combobox";
  }
  return null;
}
function n2(d) {
  var m = d.getAttribute("role");
  if (m !== null) {
    var g = m.trim().split(" ")[0];
    if (g.length > 0)
      return g;
  }
  return null;
}
function Jt(d) {
  return d !== null && d.nodeType === d.ELEMENT_NODE;
}
function _T(d) {
  return Jt(d) && mn(d) === "caption";
}
function Xv(d) {
  return Jt(d) && mn(d) === "input";
}
function a2(d) {
  return Jt(d) && mn(d) === "optgroup";
}
function u2(d) {
  return Jt(d) && mn(d) === "select";
}
function i2(d) {
  return Jt(d) && mn(d) === "table";
}
function c2(d) {
  return Jt(d) && mn(d) === "textarea";
}
function o2(d) {
  var m = d.ownerDocument === null ? d : d.ownerDocument, g = m.defaultView;
  if (g === null)
    throw new TypeError("no window available");
  return g;
}
function r2(d) {
  return Jt(d) && mn(d) === "fieldset";
}
function f2(d) {
  return Jt(d) && mn(d) === "legend";
}
function s2(d) {
  return Jt(d) && mn(d) === "slot";
}
function d2(d) {
  return Jt(d) && d.ownerSVGElement !== void 0;
}
function h2(d) {
  return Jt(d) && mn(d) === "svg";
}
function m2(d) {
  return d2(d) && mn(d) === "title";
}
function Qv(d, m) {
  if (Jt(d) && d.hasAttribute(m)) {
    var g = d.getAttribute(m).split(" "), v = d.getRootNode ? d.getRootNode() : d.ownerDocument;
    return g.map(function(C) {
      return v.getElementById(C);
    }).filter(
      function(C) {
        return C !== null;
      }
      // TODO: why does this not narrow?
    );
  }
  return [];
}
function Pc(d, m) {
  return Jt(d) ? m.indexOf(t2(d)) !== -1 : !1;
}
function y2(d) {
  return d.trim().replace(/\s\s+/g, " ");
}
function p2(d, m) {
  if (!Jt(d))
    return !1;
  if (d.hasAttribute("hidden") || d.getAttribute("aria-hidden") === "true")
    return !0;
  var g = m(d);
  return g.getPropertyValue("display") === "none" || g.getPropertyValue("visibility") === "hidden";
}
function g2(d) {
  return Pc(d, ["button", "combobox", "listbox", "textbox"]) || qT(d, "range");
}
function qT(d, m) {
  if (!Jt(d))
    return !1;
  switch (m) {
    case "range":
      return Pc(d, ["meter", "progressbar", "scrollbar", "slider", "spinbutton"]);
    default:
      throw new TypeError("No knowledge about abstract role '".concat(m, "'. This is likely a bug :("));
  }
}
function bT(d, m) {
  var g = Xu(d.querySelectorAll(m));
  return Qv(d, "aria-owns").forEach(function(v) {
    g.push.apply(g, Xu(v.querySelectorAll(m)));
  }), g;
}
function v2(d) {
  return u2(d) ? d.selectedOptions || bT(d, "[selected]") : bT(d, '[aria-selected="true"]');
}
function b2(d) {
  return Pc(d, ["none", "presentation"]);
}
function S2(d) {
  return _T(d);
}
function T2(d) {
  return Pc(d, ["button", "cell", "checkbox", "columnheader", "gridcell", "heading", "label", "legend", "link", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "radio", "row", "rowheader", "switch", "tab", "tooltip", "treeitem"]);
}
function E2(d) {
  return !1;
}
function A2(d) {
  return Xv(d) || c2(d) ? d.value : d.textContent || "";
}
function ST(d) {
  var m = d.getPropertyValue("content");
  return /^["'].*["']$/.test(m) ? m.slice(1, -1) : "";
}
function LT(d) {
  var m = mn(d);
  return m === "button" || m === "input" && d.getAttribute("type") !== "hidden" || m === "meter" || m === "output" || m === "progress" || m === "select" || m === "textarea";
}
function YT(d) {
  if (LT(d))
    return d;
  var m = null;
  return d.childNodes.forEach(function(g) {
    if (m === null && Jt(g)) {
      var v = YT(g);
      v !== null && (m = v);
    }
  }), m;
}
function R2(d) {
  if (d.control !== void 0)
    return d.control;
  var m = d.getAttribute("for");
  return m !== null ? d.ownerDocument.getElementById(m) : YT(d);
}
function O2(d) {
  var m = d.labels;
  if (m === null)
    return m;
  if (m !== void 0)
    return Xu(m);
  if (!LT(d))
    return null;
  var g = d.ownerDocument;
  return Xu(g.querySelectorAll("label")).filter(function(v) {
    return R2(v) === d;
  });
}
function D2(d) {
  var m = d.assignedNodes();
  return m.length === 0 ? Xu(d.childNodes) : m;
}
function jT(d) {
  var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, g = new FA(), v = o2(d), C = m.compute, B = C === void 0 ? "name" : C, x = m.computedStyleSupportsPseudoElements, q = x === void 0 ? m.getComputedStyle !== void 0 : x, T = m.getComputedStyle, R = T === void 0 ? v.getComputedStyle.bind(v) : T, O = m.hidden, A = O === void 0 ? !1 : O;
  function U(H, de) {
    var me = "";
    if (Jt(H) && q) {
      var ye = R(H, "::before"), Re = ST(ye);
      me = "".concat(Re, " ").concat(me);
    }
    var k = s2(H) ? D2(H) : Xu(H.childNodes).concat(Qv(H, "aria-owns"));
    if (k.forEach(function(se) {
      var Me = ie(se, {
        isEmbeddedInLabel: de.isEmbeddedInLabel,
        isReferenced: !1,
        recursion: !0
      }), Oe = Jt(se) ? R(se).getPropertyValue("display") : "inline", ve = Oe !== "inline" ? " " : "";
      me += "".concat(ve).concat(Me).concat(ve);
    }), Jt(H) && q) {
      var Q = R(H, "::after"), ce = ST(Q);
      me = "".concat(me, " ").concat(ce);
    }
    return me.trim();
  }
  function K(H, de) {
    var me = H.getAttributeNode(de);
    return me !== null && !g.has(me) && me.value.trim() !== "" ? (g.add(me), me.value) : null;
  }
  function ue(H) {
    return Jt(H) ? K(H, "title") : null;
  }
  function te(H) {
    if (!Jt(H))
      return null;
    if (r2(H)) {
      g.add(H);
      for (var de = Xu(H.childNodes), me = 0; me < de.length; me += 1) {
        var ye = de[me];
        if (f2(ye))
          return ie(ye, {
            isEmbeddedInLabel: !1,
            isReferenced: !1,
            recursion: !1
          });
      }
    } else if (i2(H)) {
      g.add(H);
      for (var Re = Xu(H.childNodes), k = 0; k < Re.length; k += 1) {
        var Q = Re[k];
        if (_T(Q))
          return ie(Q, {
            isEmbeddedInLabel: !1,
            isReferenced: !1,
            recursion: !1
          });
      }
    } else if (h2(H)) {
      g.add(H);
      for (var ce = Xu(H.childNodes), se = 0; se < ce.length; se += 1) {
        var Me = ce[se];
        if (m2(Me))
          return Me.textContent;
      }
      return null;
    } else if (mn(H) === "img" || mn(H) === "area") {
      var Oe = K(H, "alt");
      if (Oe !== null)
        return Oe;
    } else if (a2(H)) {
      var ve = K(H, "label");
      if (ve !== null)
        return ve;
    }
    if (Xv(H) && (H.type === "button" || H.type === "submit" || H.type === "reset")) {
      var fe = K(H, "value");
      if (fe !== null)
        return fe;
      if (H.type === "submit")
        return "Submit";
      if (H.type === "reset")
        return "Reset";
    }
    var De = O2(H);
    if (De !== null && De.length !== 0)
      return g.add(H), Xu(De).map(function(oe) {
        return ie(oe, {
          isEmbeddedInLabel: !0,
          isReferenced: !1,
          recursion: !0
        });
      }).filter(function(oe) {
        return oe.length > 0;
      }).join(" ");
    if (Xv(H) && H.type === "image") {
      var ot = K(H, "alt");
      if (ot !== null)
        return ot;
      var N = K(H, "title");
      return N !== null ? N : "Submit Query";
    }
    if (Pc(H, ["button"])) {
      var I = U(H, {
        isEmbeddedInLabel: !1
      });
      if (I !== "")
        return I;
    }
    return null;
  }
  function ie(H, de) {
    if (g.has(H))
      return "";
    if (!A && p2(H, R) && !de.isReferenced)
      return g.add(H), "";
    var me = Jt(H) ? H.getAttributeNode("aria-labelledby") : null, ye = me !== null && !g.has(me) ? Qv(H, "aria-labelledby") : [];
    if (B === "name" && !de.isReferenced && ye.length > 0)
      return g.add(me), ye.map(function(Oe) {
        return ie(Oe, {
          isEmbeddedInLabel: de.isEmbeddedInLabel,
          isReferenced: !0,
          // this isn't recursion as specified, otherwise we would skip
          // `aria-label` in
          // <input id="myself" aria-label="foo" aria-labelledby="myself"
          recursion: !1
        });
      }).join(" ");
    var Re = de.recursion && g2(H) && B === "name";
    if (!Re) {
      var k = (Jt(H) && H.getAttribute("aria-label") || "").trim();
      if (k !== "" && B === "name")
        return g.add(H), k;
      if (!b2(H)) {
        var Q = te(H);
        if (Q !== null)
          return g.add(H), Q;
      }
    }
    if (Pc(H, ["menu"]))
      return g.add(H), "";
    if (Re || de.isEmbeddedInLabel || de.isReferenced) {
      if (Pc(H, ["combobox", "listbox"])) {
        g.add(H);
        var ce = v2(H);
        return ce.length === 0 ? Xv(H) ? H.value : "" : Xu(ce).map(function(Oe) {
          return ie(Oe, {
            isEmbeddedInLabel: de.isEmbeddedInLabel,
            isReferenced: !1,
            recursion: !0
          });
        }).join(" ");
      }
      if (qT(H, "range"))
        return g.add(H), H.hasAttribute("aria-valuetext") ? H.getAttribute("aria-valuetext") : H.hasAttribute("aria-valuenow") ? H.getAttribute("aria-valuenow") : H.getAttribute("value") || "";
      if (Pc(H, ["textbox"]))
        return g.add(H), A2(H);
    }
    if (T2(H) || Jt(H) && de.isReferenced || S2(H) || E2()) {
      var se = U(H, {
        isEmbeddedInLabel: de.isEmbeddedInLabel
      });
      if (se !== "")
        return g.add(H), se;
    }
    if (H.nodeType === H.TEXT_NODE)
      return g.add(H), H.textContent || "";
    if (de.recursion)
      return g.add(H), U(H, {
        isEmbeddedInLabel: de.isEmbeddedInLabel
      });
    var Me = ue(H);
    return Me !== null ? (g.add(H), Me) : (g.add(H), "");
  }
  return y2(ie(d, {
    isEmbeddedInLabel: !1,
    // by spec computeAccessibleDescription starts with the referenced elements as roots
    isReferenced: B === "description",
    recursion: !1
  }));
}
function Lp(d) {
  "@babel/helpers - typeof";
  return Lp = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(m) {
    return typeof m;
  } : function(m) {
    return m && typeof Symbol == "function" && m.constructor === Symbol && m !== Symbol.prototype ? "symbol" : typeof m;
  }, Lp(d);
}
function TT(d, m) {
  var g = Object.keys(d);
  if (Object.getOwnPropertySymbols) {
    var v = Object.getOwnPropertySymbols(d);
    m && (v = v.filter(function(C) {
      return Object.getOwnPropertyDescriptor(d, C).enumerable;
    })), g.push.apply(g, v);
  }
  return g;
}
function ET(d) {
  for (var m = 1; m < arguments.length; m++) {
    var g = arguments[m] != null ? arguments[m] : {};
    m % 2 ? TT(Object(g), !0).forEach(function(v) {
      M2(d, v, g[v]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(g)) : TT(Object(g)).forEach(function(v) {
      Object.defineProperty(d, v, Object.getOwnPropertyDescriptor(g, v));
    });
  }
  return d;
}
function M2(d, m, g) {
  return m = z2(m), m in d ? Object.defineProperty(d, m, { value: g, enumerable: !0, configurable: !0, writable: !0 }) : d[m] = g, d;
}
function z2(d) {
  var m = x2(d, "string");
  return Lp(m) === "symbol" ? m : String(m);
}
function x2(d, m) {
  if (Lp(d) !== "object" || d === null) return d;
  var g = d[Symbol.toPrimitive];
  if (g !== void 0) {
    var v = g.call(d, m);
    if (Lp(v) !== "object") return v;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (m === "string" ? String : Number)(d);
}
function VT(d) {
  var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, g = Qv(d, "aria-describedby").map(function(C) {
    return jT(C, ET(ET({}, m), {}, {
      compute: "description"
    }));
  }).join(" ");
  if (g === "") {
    var v = d.getAttribute("title");
    g = v === null ? "" : v;
  }
  return g;
}
function U2(d) {
  return Pc(d, ["caption", "code", "deletion", "emphasis", "generic", "insertion", "paragraph", "presentation", "strong", "subscript", "superscript"]);
}
function G0(d) {
  var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return U2(d) ? "" : jT(d, m);
}
var R0 = { exports: {} }, AT;
function C2() {
  return AT || (AT = 1, (function(d) {
    var m = (function() {
      var g = String.fromCharCode, v = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", C = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$", B = {};
      function x(T, R) {
        if (!B[T]) {
          B[T] = {};
          for (var O = 0; O < T.length; O++)
            B[T][T.charAt(O)] = O;
        }
        return B[T][R];
      }
      var q = {
        compressToBase64: function(T) {
          if (T == null) return "";
          var R = q._compress(T, 6, function(O) {
            return v.charAt(O);
          });
          switch (R.length % 4) {
            // To produce valid Base64
            default:
            // When could this happen ?
            case 0:
              return R;
            case 1:
              return R + "===";
            case 2:
              return R + "==";
            case 3:
              return R + "=";
          }
        },
        decompressFromBase64: function(T) {
          return T == null ? "" : T == "" ? null : q._decompress(T.length, 32, function(R) {
            return x(v, T.charAt(R));
          });
        },
        compressToUTF16: function(T) {
          return T == null ? "" : q._compress(T, 15, function(R) {
            return g(R + 32);
          }) + " ";
        },
        decompressFromUTF16: function(T) {
          return T == null ? "" : T == "" ? null : q._decompress(T.length, 16384, function(R) {
            return T.charCodeAt(R) - 32;
          });
        },
        //compress into uint8array (UCS-2 big endian format)
        compressToUint8Array: function(T) {
          for (var R = q.compress(T), O = new Uint8Array(R.length * 2), A = 0, U = R.length; A < U; A++) {
            var K = R.charCodeAt(A);
            O[A * 2] = K >>> 8, O[A * 2 + 1] = K % 256;
          }
          return O;
        },
        //decompress from uint8array (UCS-2 big endian format)
        decompressFromUint8Array: function(T) {
          if (T == null)
            return q.decompress(T);
          for (var R = new Array(T.length / 2), O = 0, A = R.length; O < A; O++)
            R[O] = T[O * 2] * 256 + T[O * 2 + 1];
          var U = [];
          return R.forEach(function(K) {
            U.push(g(K));
          }), q.decompress(U.join(""));
        },
        //compress into a string that is already URI encoded
        compressToEncodedURIComponent: function(T) {
          return T == null ? "" : q._compress(T, 6, function(R) {
            return C.charAt(R);
          });
        },
        //decompress from an output of compressToEncodedURIComponent
        decompressFromEncodedURIComponent: function(T) {
          return T == null ? "" : T == "" ? null : (T = T.replace(/ /g, "+"), q._decompress(T.length, 32, function(R) {
            return x(C, T.charAt(R));
          }));
        },
        compress: function(T) {
          return q._compress(T, 16, function(R) {
            return g(R);
          });
        },
        _compress: function(T, R, O) {
          if (T == null) return "";
          var A, U, K = {}, ue = {}, te = "", ie = "", H = "", de = 2, me = 3, ye = 2, Re = [], k = 0, Q = 0, ce;
          for (ce = 0; ce < T.length; ce += 1)
            if (te = T.charAt(ce), Object.prototype.hasOwnProperty.call(K, te) || (K[te] = me++, ue[te] = !0), ie = H + te, Object.prototype.hasOwnProperty.call(K, ie))
              H = ie;
            else {
              if (Object.prototype.hasOwnProperty.call(ue, H)) {
                if (H.charCodeAt(0) < 256) {
                  for (A = 0; A < ye; A++)
                    k = k << 1, Q == R - 1 ? (Q = 0, Re.push(O(k)), k = 0) : Q++;
                  for (U = H.charCodeAt(0), A = 0; A < 8; A++)
                    k = k << 1 | U & 1, Q == R - 1 ? (Q = 0, Re.push(O(k)), k = 0) : Q++, U = U >> 1;
                } else {
                  for (U = 1, A = 0; A < ye; A++)
                    k = k << 1 | U, Q == R - 1 ? (Q = 0, Re.push(O(k)), k = 0) : Q++, U = 0;
                  for (U = H.charCodeAt(0), A = 0; A < 16; A++)
                    k = k << 1 | U & 1, Q == R - 1 ? (Q = 0, Re.push(O(k)), k = 0) : Q++, U = U >> 1;
                }
                de--, de == 0 && (de = Math.pow(2, ye), ye++), delete ue[H];
              } else
                for (U = K[H], A = 0; A < ye; A++)
                  k = k << 1 | U & 1, Q == R - 1 ? (Q = 0, Re.push(O(k)), k = 0) : Q++, U = U >> 1;
              de--, de == 0 && (de = Math.pow(2, ye), ye++), K[ie] = me++, H = String(te);
            }
          if (H !== "") {
            if (Object.prototype.hasOwnProperty.call(ue, H)) {
              if (H.charCodeAt(0) < 256) {
                for (A = 0; A < ye; A++)
                  k = k << 1, Q == R - 1 ? (Q = 0, Re.push(O(k)), k = 0) : Q++;
                for (U = H.charCodeAt(0), A = 0; A < 8; A++)
                  k = k << 1 | U & 1, Q == R - 1 ? (Q = 0, Re.push(O(k)), k = 0) : Q++, U = U >> 1;
              } else {
                for (U = 1, A = 0; A < ye; A++)
                  k = k << 1 | U, Q == R - 1 ? (Q = 0, Re.push(O(k)), k = 0) : Q++, U = 0;
                for (U = H.charCodeAt(0), A = 0; A < 16; A++)
                  k = k << 1 | U & 1, Q == R - 1 ? (Q = 0, Re.push(O(k)), k = 0) : Q++, U = U >> 1;
              }
              de--, de == 0 && (de = Math.pow(2, ye), ye++), delete ue[H];
            } else
              for (U = K[H], A = 0; A < ye; A++)
                k = k << 1 | U & 1, Q == R - 1 ? (Q = 0, Re.push(O(k)), k = 0) : Q++, U = U >> 1;
            de--, de == 0 && (de = Math.pow(2, ye), ye++);
          }
          for (U = 2, A = 0; A < ye; A++)
            k = k << 1 | U & 1, Q == R - 1 ? (Q = 0, Re.push(O(k)), k = 0) : Q++, U = U >> 1;
          for (; ; )
            if (k = k << 1, Q == R - 1) {
              Re.push(O(k));
              break;
            } else Q++;
          return Re.join("");
        },
        decompress: function(T) {
          return T == null ? "" : T == "" ? null : q._decompress(T.length, 32768, function(R) {
            return T.charCodeAt(R);
          });
        },
        _decompress: function(T, R, O) {
          var A = [], U = 4, K = 4, ue = 3, te = "", ie = [], H, de, me, ye, Re, k, Q, ce = { val: O(0), position: R, index: 1 };
          for (H = 0; H < 3; H += 1)
            A[H] = H;
          for (me = 0, Re = Math.pow(2, 2), k = 1; k != Re; )
            ye = ce.val & ce.position, ce.position >>= 1, ce.position == 0 && (ce.position = R, ce.val = O(ce.index++)), me |= (ye > 0 ? 1 : 0) * k, k <<= 1;
          switch (me) {
            case 0:
              for (me = 0, Re = Math.pow(2, 8), k = 1; k != Re; )
                ye = ce.val & ce.position, ce.position >>= 1, ce.position == 0 && (ce.position = R, ce.val = O(ce.index++)), me |= (ye > 0 ? 1 : 0) * k, k <<= 1;
              Q = g(me);
              break;
            case 1:
              for (me = 0, Re = Math.pow(2, 16), k = 1; k != Re; )
                ye = ce.val & ce.position, ce.position >>= 1, ce.position == 0 && (ce.position = R, ce.val = O(ce.index++)), me |= (ye > 0 ? 1 : 0) * k, k <<= 1;
              Q = g(me);
              break;
            case 2:
              return "";
          }
          for (A[3] = Q, de = Q, ie.push(Q); ; ) {
            if (ce.index > T)
              return "";
            for (me = 0, Re = Math.pow(2, ue), k = 1; k != Re; )
              ye = ce.val & ce.position, ce.position >>= 1, ce.position == 0 && (ce.position = R, ce.val = O(ce.index++)), me |= (ye > 0 ? 1 : 0) * k, k <<= 1;
            switch (Q = me) {
              case 0:
                for (me = 0, Re = Math.pow(2, 8), k = 1; k != Re; )
                  ye = ce.val & ce.position, ce.position >>= 1, ce.position == 0 && (ce.position = R, ce.val = O(ce.index++)), me |= (ye > 0 ? 1 : 0) * k, k <<= 1;
                A[K++] = g(me), Q = K - 1, U--;
                break;
              case 1:
                for (me = 0, Re = Math.pow(2, 16), k = 1; k != Re; )
                  ye = ce.val & ce.position, ce.position >>= 1, ce.position == 0 && (ce.position = R, ce.val = O(ce.index++)), me |= (ye > 0 ? 1 : 0) * k, k <<= 1;
                A[K++] = g(me), Q = K - 1, U--;
                break;
              case 2:
                return ie.join("");
            }
            if (U == 0 && (U = Math.pow(2, ue), ue++), A[Q])
              te = A[Q];
            else if (Q === K)
              te = de + de.charAt(0);
            else
              return null;
            ie.push(te), A[K++] = de + te.charAt(0), U--, de = te, U == 0 && (U = Math.pow(2, ue), ue++);
          }
        }
      };
      return q;
    })();
    d != null ? d.exports = m : typeof angular < "u" && angular != null && angular.module("LZString", []).factory("LZString", function() {
      return m;
    });
  })(R0)), R0.exports;
}
var H2 = C2();
const B2 = /* @__PURE__ */ gA(H2);
function GT(d) {
  return d.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
const N2 = (d, m, g, v, C, B, x) => {
  const q = v + g.indent, T = g.colors;
  return d.map((R) => {
    const O = m[R];
    let A = x(O, g, q, C, B);
    return typeof O != "string" && (A.indexOf(`
`) !== -1 && (A = g.spacingOuter + q + A + g.spacingOuter + v), A = "{" + A + "}"), g.spacingInner + v + T.prop.open + R + T.prop.close + "=" + T.value.open + A + T.value.close;
  }).join("");
}, w2 = 3, _2 = (d, m, g, v, C, B) => d.map((x) => {
  const q = typeof x == "string" ? XT(x, m) : B(x, m, g, v, C);
  return q === "" && typeof x == "object" && x !== null && x.nodeType !== w2 ? "" : m.spacingOuter + g + q;
}).join(""), XT = (d, m) => {
  const g = m.colors.content;
  return g.open + GT(d) + g.close;
}, q2 = (d, m) => {
  const g = m.colors.comment;
  return g.open + "<!--" + GT(d) + "-->" + g.close;
}, L2 = (d, m, g, v, C) => {
  const B = v.colors.tag;
  return B.open + "<" + d + (m && B.close + m + v.spacingOuter + C + B.open) + (g ? ">" + B.close + g + v.spacingOuter + C + B.open + "</" + d : (m && !v.min ? "" : " ") + "/") + ">" + B.close;
}, Y2 = (d, m) => {
  const g = m.colors.tag;
  return g.open + "<" + d + g.close + " …" + g.open + " />" + g.close;
}, j2 = 1, QT = 3, ZT = 8, KT = 11, V2 = /^((HTML|SVG)\w*)?Element$/, JT = (d) => {
  const {
    tagName: m
  } = d;
  return !!(typeof m == "string" && m.includes("-") || typeof d.hasAttribute == "function" && d.hasAttribute("is"));
}, G2 = (d) => {
  const m = d.constructor.name, {
    nodeType: g
  } = d;
  return g === j2 && (V2.test(m) || JT(d)) || g === QT && m === "Text" || g === ZT && m === "Comment" || g === KT && m === "DocumentFragment";
};
function X2(d) {
  return d.nodeType === QT;
}
function Q2(d) {
  return d.nodeType === ZT;
}
function O0(d) {
  return d.nodeType === KT;
}
function Z2(d) {
  return {
    test: (m) => {
      var g;
      return ((m == null || (g = m.constructor) == null ? void 0 : g.name) || JT(m)) && G2(m);
    },
    serialize: (m, g, v, C, B, x) => {
      if (X2(m))
        return XT(m.data, g);
      if (Q2(m))
        return q2(m.data, g);
      const q = O0(m) ? "DocumentFragment" : m.tagName.toLowerCase();
      return ++C > g.maxDepth ? Y2(q, g) : L2(q, N2(O0(m) ? [] : Array.from(m.attributes).map((T) => T.name).sort(), O0(m) ? {} : Array.from(m.attributes).reduce((T, R) => (T[R.name] = R.value, T), {}), g, v + g.indent, C, B, x), _2(Array.prototype.slice.call(m.childNodes || m.children).filter(d), g, v + g.indent, C, B, x), g, v);
    }
  };
}
let kT = null, X0 = null, Q0 = null;
try {
  const d = module && module.require;
  X0 = d.call(module, "fs").readFileSync, Q0 = d.call(module, "@babel/code-frame").codeFrameColumns, kT = d.call(module, "picocolors");
} catch {
}
function K2(d) {
  const m = d.indexOf("(") + 1, g = d.indexOf(")"), v = d.slice(m, g), C = v.split(":"), [B, x, q] = [C[0], parseInt(C[1], 10), parseInt(C[2], 10)];
  let T = "";
  try {
    T = X0(B, "utf-8");
  } catch {
    return "";
  }
  const R = Q0(T, {
    start: {
      line: x,
      column: q
    }
  }, {
    highlightCode: !0,
    linesBelow: 0
  });
  return kT.dim(v) + `
` + R + `
`;
}
function J2() {
  if (!X0 || !Q0)
    return "";
  const m = new Error().stack.split(`
`).slice(1).find((g) => !g.includes("node_modules/"));
  return K2(m);
}
const $T = 3;
function D0() {
  return typeof jest < "u" && jest !== null ? (
    // legacy timers
    setTimeout._isMockFunction === !0 || // modern timers
    // eslint-disable-next-line prefer-object-has-own -- not supported by our support matrix
    Object.prototype.hasOwnProperty.call(setTimeout, "clock")
  ) : !1;
}
function Z0() {
  if (typeof window > "u")
    throw new Error("Could not find default container");
  return window.document;
}
function WT(d) {
  if (d.defaultView)
    return d.defaultView;
  if (d.ownerDocument && d.ownerDocument.defaultView)
    return d.ownerDocument.defaultView;
  if (d.window)
    return d.window;
  throw d.ownerDocument && d.ownerDocument.defaultView === null ? new Error("It looks like the window object is not available for the provided node.") : d.then instanceof Function ? new Error("It looks like you passed a Promise object instead of a DOM node. Did you do something like `fireEvent.click(screen.findBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`, or await the findBy query `fireEvent.click(await screen.findBy...`?") : Array.isArray(d) ? new Error("It looks like you passed an Array instead of a DOM node. Did you do something like `fireEvent.click(screen.getAllBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`?") : typeof d.debug == "function" && typeof d.logTestingPlaygroundURL == "function" ? new Error("It looks like you passed a `screen` object. Did you do something like `fireEvent.click(screen, ...` when you meant to use a query, e.g. `fireEvent.click(screen.getBy..., `?") : new Error("The given node is not an Element, the node type is: " + typeof d + ".");
}
function to(d) {
  if (!d || typeof d.querySelector != "function" || typeof d.querySelectorAll != "function")
    throw new TypeError("Expected container to be an Element, a Document or a DocumentFragment but got " + m(d) + ".");
  function m(g) {
    return typeof g == "object" ? g === null ? "null" : g.constructor.name : typeof g;
  }
}
const k2 = () => {
  if (typeof process > "u")
    return !1;
  let d;
  try {
    var m;
    const g = (m = process.env) == null ? void 0 : m.COLORS;
    g && (d = JSON.parse(g));
  } catch {
  }
  return typeof d == "boolean" ? d : process.versions !== void 0 && process.versions.node !== void 0;
}, {
  DOMCollection: $2
} = BT.plugins, W2 = 1, F2 = 8;
function I2(d) {
  return d.nodeType !== F2 && (d.nodeType !== W2 || !d.matches(Mt().defaultIgnore));
}
function jh(d, m, g) {
  if (g === void 0 && (g = {}), d || (d = Z0().body), typeof m != "number" && (m = typeof process < "u" && typeof process.env < "u" && process.env.DEBUG_PRINT_LIMIT || 7e3), m === 0)
    return "";
  d.documentElement && (d = d.documentElement);
  let v = typeof d;
  if (v === "object" ? v = d.constructor.name : d = {}, !("outerHTML" in d))
    throw new TypeError("Expected an element or document but got " + v);
  const {
    filterNode: C = I2,
    ...B
  } = g, x = BT.format(d, {
    plugins: [Z2(C), $2],
    printFunctionName: !1,
    highlight: k2(),
    ...B
  });
  return m !== void 0 && d.outerHTML.length > m ? x.slice(0, m) + "..." : x;
}
const RT = function() {
  const d = J2();
  console.log(d ? jh(...arguments) + `

` + d : jh(...arguments));
};
let ss = {
  testIdAttribute: "data-testid",
  asyncUtilTimeout: 1e3,
  // asyncWrapper and advanceTimersWrapper is to support React's async `act` function.
  // forcing react-testing-library to wrap all async functions would've been
  // a total nightmare (consider wrapping every findBy* query and then also
  // updating `within` so those would be wrapped too. Total nightmare).
  // so we have this config option that's really only intended for
  // react-testing-library to use. For that reason, this feature will remain
  // undocumented.
  asyncWrapper: (d) => d(),
  unstable_advanceTimersWrapper: (d) => d(),
  eventWrapper: (d) => d(),
  // default value for the `hidden` option in `ByRole` queries
  defaultHidden: !1,
  // default value for the `ignore` option in `ByText` queries
  defaultIgnore: "script, style",
  // showOriginalStackTrace flag to show the full error stack traces for async errors
  showOriginalStackTrace: !1,
  // throw errors w/ suggestions for better queries. Opt in so off by default.
  throwSuggestions: !1,
  // called when getBy* queries fail. (message, container) => Error
  getElementError(d, m) {
    const g = jh(m), v = new Error([d, "Ignored nodes: comments, " + ss.defaultIgnore + `
` + g].filter(Boolean).join(`

`));
    return v.name = "TestingLibraryElementError", v;
  },
  _disableExpensiveErrorDiagnostics: !1,
  computedStyleSupportsPseudoElements: !1
};
function P2(d) {
  try {
    return ss._disableExpensiveErrorDiagnostics = !0, d();
  } finally {
    ss._disableExpensiveErrorDiagnostics = !1;
  }
}
function eR(d) {
  typeof d == "function" && (d = d(ss)), ss = {
    ...ss,
    ...d
  };
}
function Mt() {
  return ss;
}
const tR = ["button", "meter", "output", "progress", "select", "textarea", "input"];
function FT(d) {
  return tR.includes(d.nodeName.toLowerCase()) ? "" : d.nodeType === $T ? d.textContent : Array.from(d.childNodes).map((m) => FT(m)).join("");
}
function z0(d) {
  let m;
  return d.tagName.toLowerCase() === "label" ? m = FT(d) : m = d.value || d.textContent, m;
}
function IT(d) {
  if (d.labels !== void 0) {
    var m;
    return (m = d.labels) != null ? m : [];
  }
  if (!lR(d)) return [];
  const g = d.ownerDocument.querySelectorAll("label");
  return Array.from(g).filter((v) => v.control === d);
}
function lR(d) {
  return /BUTTON|METER|OUTPUT|PROGRESS|SELECT|TEXTAREA/.test(d.tagName) || d.tagName === "INPUT" && d.getAttribute("type") !== "hidden";
}
function PT(d, m, g) {
  let {
    selector: v = "*"
  } = g === void 0 ? {} : g;
  const C = m.getAttribute("aria-labelledby"), B = C ? C.split(" ") : [];
  return B.length ? B.map((x) => {
    const q = d.querySelector('[id="' + x + '"]');
    return q ? {
      content: z0(q),
      formControl: null
    } : {
      content: "",
      formControl: null
    };
  }) : Array.from(IT(m)).map((x) => {
    const q = z0(x), R = Array.from(x.querySelectorAll("button, input, meter, output, progress, select, textarea")).filter((O) => O.matches(v))[0];
    return {
      content: q,
      formControl: R
    };
  });
}
function eE(d) {
  if (d == null)
    throw new Error(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions -- implicitly converting `T` to `string`
      "It looks like " + d + " was passed instead of a matcher. Did you do something like getByText(" + d + ")?"
    );
}
function Gh(d, m, g, v) {
  if (typeof d != "string")
    return !1;
  eE(g);
  const C = v(d);
  return typeof g == "string" || typeof g == "number" ? C.toLowerCase().includes(g.toString().toLowerCase()) : typeof g == "function" ? g(C, m) : lE(g, C);
}
function eo(d, m, g, v) {
  if (typeof d != "string")
    return !1;
  eE(g);
  const C = v(d);
  return g instanceof Function ? g(C, m) : g instanceof RegExp ? lE(g, C) : C === String(g);
}
function tE(d) {
  let {
    trim: m = !0,
    collapseWhitespace: g = !0
  } = d === void 0 ? {} : d;
  return (v) => {
    let C = v;
    return C = m ? C.trim() : C, C = g ? C.replace(/\s+/g, " ") : C, C;
  };
}
function ms(d) {
  let {
    trim: m,
    collapseWhitespace: g,
    normalizer: v
  } = d;
  if (!v)
    return tE({
      trim: m,
      collapseWhitespace: g
    });
  if (typeof m < "u" || typeof g < "u")
    throw new Error('trim and collapseWhitespace are not supported with a normalizer. If you want to use the default trim and collapseWhitespace logic in your normalizer, use "getDefaultNormalizer({trim, collapseWhitespace})" and compose that into your normalizer');
  return v;
}
function lE(d, m) {
  const g = d.test(m);
  return d.global && d.lastIndex !== 0 && (console.warn("To match all elements we had to reset the lastIndex of the RegExp because the global flag is enabled. We encourage to remove the global flag from the RegExp."), d.lastIndex = 0), g;
}
function Fv(d) {
  return d.matches("input[type=submit], input[type=button], input[type=reset]") ? d.value : Array.from(d.childNodes).filter((m) => m.nodeType === $T && !!m.textContent).map((m) => m.textContent).join("");
}
const nR = aR(iu.elementRoles);
function nE(d) {
  return d.hidden === !0 || d.getAttribute("aria-hidden") === "true" || d.ownerDocument.defaultView.getComputedStyle(d).display === "none";
}
function K0(d, m) {
  m === void 0 && (m = {});
  const {
    isSubtreeInaccessible: g = nE
  } = m;
  if (d.ownerDocument.defaultView.getComputedStyle(d).visibility === "hidden")
    return !0;
  let C = d;
  for (; C; ) {
    if (g(C))
      return !0;
    C = C.parentElement;
  }
  return !1;
}
function J0(d) {
  for (const {
    match: m,
    roles: g
  } of nR)
    if (m(d))
      return [...g];
  return [];
}
function aR(d) {
  function m(x) {
    let {
      name: q,
      attributes: T
    } = x;
    return "" + q + T.map((R) => {
      let {
        name: O,
        value: A,
        constraints: U = []
      } = R;
      const K = U.indexOf("undefined") !== -1, ue = U.indexOf("set") !== -1;
      return typeof A < "u" ? "[" + O + '="' + A + '"]' : K ? ":not([" + O + "])" : ue ? "[" + O + "]:not([" + O + '=""])' : "[" + O + "]";
    }).join("");
  }
  function g(x) {
    let {
      attributes: q = []
    } = x;
    return q.length;
  }
  function v(x, q) {
    let {
      specificity: T
    } = x, {
      specificity: R
    } = q;
    return R - T;
  }
  function C(x) {
    let {
      attributes: q = []
    } = x;
    const T = q.findIndex((O) => O.value && O.name === "type" && O.value === "text");
    T >= 0 && (q = [...q.slice(0, T), ...q.slice(T + 1)]);
    const R = m({
      ...x,
      attributes: q
    });
    return (O) => T >= 0 && O.type !== "text" ? !1 : O.matches(R);
  }
  let B = [];
  for (const [x, q] of d.entries())
    B = [...B, {
      match: C(x),
      roles: Array.from(q),
      specificity: g(x)
    }];
  return B.sort(v);
}
function uR(d, m) {
  let {
    hidden: g = !1
  } = m === void 0 ? {} : m;
  function v(C) {
    return [C, ...Array.from(C.children).reduce((B, x) => [...B, ...v(x)], [])];
  }
  return v(d).filter((C) => g === !1 ? K0(C) === !1 : !0).reduce((C, B) => {
    let x = [];
    return B.hasAttribute("role") ? x = B.getAttribute("role").split(" ").slice(0, 1) : x = J0(B), x.reduce((q, T) => Array.isArray(q[T]) ? {
      ...q,
      [T]: [...q[T], B]
    } : {
      ...q,
      [T]: [B]
    }, C);
  }, {});
}
function iR(d, m) {
  let {
    hidden: g,
    includeDescription: v
  } = m;
  const C = uR(d, {
    hidden: g
  });
  return Object.entries(C).filter((B) => {
    let [x] = B;
    return x !== "generic";
  }).map((B) => {
    let [x, q] = B;
    const T = "-".repeat(50), R = q.map((O) => {
      const A = 'Name "' + G0(O, {
        computedStyleSupportsPseudoElements: Mt().computedStyleSupportsPseudoElements
      }) + `":
`, U = jh(O.cloneNode(!1));
      if (v) {
        const K = 'Description "' + VT(O, {
          computedStyleSupportsPseudoElements: Mt().computedStyleSupportsPseudoElements
        }) + `":
`;
        return "" + A + K + U;
      }
      return "" + A + U;
    }).join(`

`);
    return x + `:

` + R + `

` + T;
  }).join(`
`);
}
function cR(d) {
  return d.tagName === "OPTION" ? d.selected : jp(d, "aria-selected");
}
function oR(d) {
  return d.getAttribute("aria-busy") === "true";
}
function rR(d) {
  if (!("indeterminate" in d && d.indeterminate))
    return "checked" in d ? d.checked : jp(d, "aria-checked");
}
function fR(d) {
  return jp(d, "aria-pressed");
}
function sR(d) {
  var m, g;
  return (m = (g = jp(d, "aria-current")) != null ? g : d.getAttribute("aria-current")) != null ? m : !1;
}
function dR(d) {
  return jp(d, "aria-expanded");
}
function jp(d, m) {
  const g = d.getAttribute(m);
  if (g === "true")
    return !0;
  if (g === "false")
    return !1;
}
function hR(d) {
  const m = {
    H1: 1,
    H2: 2,
    H3: 3,
    H4: 4,
    H5: 5,
    H6: 6
  };
  return d.getAttribute("aria-level") && Number(d.getAttribute("aria-level")) || m[d.tagName];
}
function mR(d) {
  const m = d.getAttribute("aria-valuenow");
  return m === null ? void 0 : +m;
}
function yR(d) {
  const m = d.getAttribute("aria-valuemax");
  return m === null ? void 0 : +m;
}
function pR(d) {
  const m = d.getAttribute("aria-valuemin");
  return m === null ? void 0 : +m;
}
function gR(d) {
  const m = d.getAttribute("aria-valuetext");
  return m === null ? void 0 : m;
}
const OT = tE();
function vR(d) {
  return d.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
}
function DT(d) {
  return new RegExp(vR(d.toLowerCase()), "i");
}
function Sr(d, m, g, v) {
  let {
    variant: C,
    name: B
  } = v, x = "";
  const q = {}, T = [["Role", "TestId"].includes(d) ? g : DT(g)];
  B && (q.name = DT(B)), d === "Role" && K0(m) && (q.hidden = !0, x = `Element is inaccessible. This means that the element and all its children are invisible to screen readers.
    If you are using the aria-hidden prop, make sure this is the right choice for your case.
    `), Object.keys(q).length > 0 && T.push(q);
  const R = C + "By" + d;
  return {
    queryName: d,
    queryMethod: R,
    queryArgs: T,
    variant: C,
    warning: x,
    toString() {
      x && console.warn(x);
      let [O, A] = T;
      return O = typeof O == "string" ? "'" + O + "'" : O, A = A ? ", { " + Object.entries(A).map((U) => {
        let [K, ue] = U;
        return K + ": " + ue;
      }).join(", ") + " }" : "", R + "(" + O + A + ")";
    }
  };
}
function Tr(d, m, g) {
  return g && !0;
}
function x0(d, m, g) {
  var v, C;
  if (m === void 0 && (m = "get"), d.matches(Mt().defaultIgnore))
    return;
  const B = (v = d.getAttribute("role")) != null ? v : (C = J0(d)) == null ? void 0 : C[0];
  if (B !== "generic" && Tr("Role", g, B))
    return Sr("Role", d, B, {
      variant: m,
      name: G0(d, {
        computedStyleSupportsPseudoElements: Mt().computedStyleSupportsPseudoElements
      })
    });
  const x = PT(document, d).map((U) => U.content).join(" ");
  if (Tr("LabelText", g, x))
    return Sr("LabelText", d, x, {
      variant: m
    });
  const q = d.getAttribute("placeholder");
  if (Tr("PlaceholderText", g, q))
    return Sr("PlaceholderText", d, q, {
      variant: m
    });
  const T = OT(Fv(d));
  if (Tr("Text", g, T))
    return Sr("Text", d, T, {
      variant: m
    });
  if (Tr("DisplayValue", g, d.value))
    return Sr("DisplayValue", d, OT(d.value), {
      variant: m
    });
  const R = d.getAttribute("alt");
  if (Tr("AltText", g, R))
    return Sr("AltText", d, R, {
      variant: m
    });
  const O = d.getAttribute("title");
  if (Tr("Title", g, O))
    return Sr("Title", d, O, {
      variant: m
    });
  const A = d.getAttribute(Mt().testIdAttribute);
  if (Tr("TestId", g, A))
    return Sr("TestId", d, A, {
      variant: m
    });
}
function Vv(d, m) {
  d.stack = m.stack.replace(m.message, d.message);
}
function bR(d, m) {
  let {
    container: g = Z0(),
    timeout: v = Mt().asyncUtilTimeout,
    showOriginalStackTrace: C = Mt().showOriginalStackTrace,
    stackTraceError: B,
    interval: x = 50,
    onTimeout: q = (R) => (Object.defineProperty(R, "message", {
      value: Mt().getElementError(R.message, g).message
    }), R),
    mutationObserverOptions: T = {
      subtree: !0,
      childList: !0,
      attributes: !0,
      characterData: !0
    }
  } = m;
  if (typeof d != "function")
    throw new TypeError("Received `callback` arg must be a function");
  return new Promise(async (R, O) => {
    let A, U, K, ue = !1, te = "idle";
    const ie = setTimeout(Re, v), H = D0();
    if (H) {
      const {
        unstable_advanceTimersWrapper: k
      } = Mt();
      for (ye(); !ue; ) {
        if (!D0()) {
          const Q = new Error("Changed from using fake timers to real timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to real timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830");
          C || Vv(Q, B), O(Q);
          return;
        }
        if (await k(async () => {
          jest.advanceTimersByTime(x);
        }), ue)
          break;
        ye();
      }
    } else {
      try {
        to(g);
      } catch (Q) {
        O(Q);
        return;
      }
      U = setInterval(me, x);
      const {
        MutationObserver: k
      } = WT(g);
      K = new k(me), K.observe(g, T), ye();
    }
    function de(k, Q) {
      ue = !0, clearTimeout(ie), H || (clearInterval(U), K.disconnect()), k ? O(k) : R(Q);
    }
    function me() {
      if (D0()) {
        const k = new Error("Changed from using real timers to fake timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to fake timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830");
        return C || Vv(k, B), O(k);
      } else
        return ye();
    }
    function ye() {
      if (te !== "pending")
        try {
          const k = P2(d);
          typeof k?.then == "function" ? (te = "pending", k.then((Q) => {
            te = "resolved", de(null, Q);
          }, (Q) => {
            te = "rejected", A = Q;
          })) : de(null, k);
        } catch (k) {
          A = k;
        }
    }
    function Re() {
      let k;
      A ? (k = A, !C && k.name === "TestingLibraryElementError" && Vv(k, B)) : (k = new Error("Timed out in waitFor."), C || Vv(k, B)), de(q(k), null);
    }
  });
}
function SR(d, m) {
  const g = new Error("STACK_TRACE_MESSAGE");
  return Mt().asyncWrapper(() => bR(d, {
    stackTraceError: g,
    ...m
  }));
}
function aE(d, m) {
  return Mt().getElementError(d, m);
}
function TR(d, m) {
  return aE(d + "\n\n(If this is intentional, then use the `*AllBy*` variant of the query (like `queryAllByText`, `getAllByText`, or `findAllByText`)).", m);
}
function Iv(d, m, g, v) {
  let {
    exact: C = !0,
    collapseWhitespace: B,
    trim: x,
    normalizer: q
  } = v === void 0 ? {} : v;
  const T = C ? eo : Gh, R = ms({
    collapseWhitespace: B,
    trim: x,
    normalizer: q
  });
  return Array.from(m.querySelectorAll("[" + d + "]")).filter((O) => T(O.getAttribute(d), O, g, R));
}
function Zv(d, m) {
  return function(g) {
    for (var v = arguments.length, C = new Array(v > 1 ? v - 1 : 0), B = 1; B < v; B++)
      C[B - 1] = arguments[B];
    const x = d(g, ...C);
    if (x.length > 1) {
      const q = x.map((T) => aE(null, T).message).join(`

`);
      throw TR(m(g, ...C) + `

Here are the matching elements:

` + q, g);
    }
    return x[0] || null;
  };
}
function uE(d, m) {
  return Mt().getElementError(`A better query is available, try this:
` + d.toString() + `
`, m);
}
function ER(d, m) {
  return function(g) {
    for (var v = arguments.length, C = new Array(v > 1 ? v - 1 : 0), B = 1; B < v; B++)
      C[B - 1] = arguments[B];
    const x = d(g, ...C);
    if (!x.length)
      throw Mt().getElementError(m(g, ...C), g);
    return x;
  };
}
function Kv(d) {
  return (m, g, v, C) => SR(() => d(m, g, v), {
    container: m,
    ...C
  });
}
const Yh = (d, m, g) => function(v) {
  for (var C = arguments.length, B = new Array(C > 1 ? C - 1 : 0), x = 1; x < C; x++)
    B[x - 1] = arguments[x];
  const q = d(v, ...B), [{
    suggest: T = Mt().throwSuggestions
  } = {}] = B.slice(-1);
  if (q && T) {
    const R = x0(q, g);
    if (R && !m.endsWith(R.queryName))
      throw uE(R.toString(), v);
  }
  return q;
}, cu = (d, m, g) => function(v) {
  for (var C = arguments.length, B = new Array(C > 1 ? C - 1 : 0), x = 1; x < C; x++)
    B[x - 1] = arguments[x];
  const q = d(v, ...B), [{
    suggest: T = Mt().throwSuggestions
  } = {}] = B.slice(-1);
  if (q.length && T) {
    const R = [...new Set(q.map((O) => {
      var A;
      return (A = x0(O, g)) == null ? void 0 : A.toString();
    }))];
    if (
      // only want to suggest if all the els have the same suggestion.
      R.length === 1 && !m.endsWith(
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- TODO: Can this be null at runtime?
        x0(q[0], g).queryName
      )
    )
      throw uE(R[0], v);
  }
  return q;
};
function ys(d, m, g) {
  const v = Yh(Zv(d, m), d.name, "query"), C = ER(d, g), B = Zv(C, m), x = Yh(B, d.name, "get"), q = cu(C, d.name.replace("query", "get"), "getAll"), T = Kv(cu(C, d.name, "findAll")), R = Kv(Yh(B, d.name, "find"));
  return [v, q, x, T, R];
}
function AR(d) {
  return Array.from(d.querySelectorAll("label,input")).map((m) => ({
    node: m,
    textToMatch: z0(m)
  })).filter((m) => {
    let {
      textToMatch: g
    } = m;
    return g !== null;
  });
}
const RR = function(d, m, g) {
  let {
    exact: v = !0,
    trim: C,
    collapseWhitespace: B,
    normalizer: x
  } = g === void 0 ? {} : g;
  const q = v ? eo : Gh, T = ms({
    collapseWhitespace: B,
    trim: C,
    normalizer: x
  });
  return AR(d).filter((O) => {
    let {
      node: A,
      textToMatch: U
    } = O;
    return q(U, A, m, T);
  }).map((O) => {
    let {
      node: A
    } = O;
    return A;
  });
}, Yp = function(d, m, g) {
  let {
    selector: v = "*",
    exact: C = !0,
    collapseWhitespace: B,
    trim: x,
    normalizer: q
  } = g === void 0 ? {} : g;
  to(d);
  const T = C ? eo : Gh, R = ms({
    collapseWhitespace: B,
    trim: x,
    normalizer: q
  }), O = Array.from(d.querySelectorAll("*")).filter((A) => IT(A).length || A.hasAttribute("aria-labelledby")).reduce((A, U) => {
    const K = PT(d, U, {
      selector: v
    });
    K.filter((te) => !!te.formControl).forEach((te) => {
      T(te.content, te.formControl, m, R) && te.formControl && A.push(te.formControl);
    });
    const ue = K.filter((te) => !!te.content).map((te) => te.content);
    return T(ue.join(" "), U, m, R) && A.push(U), ue.length > 1 && ue.forEach((te, ie) => {
      T(te, U, m, R) && A.push(U);
      const H = [...ue];
      H.splice(ie, 1), H.length > 1 && T(H.join(" "), U, m, R) && A.push(U);
    }), A;
  }, []).concat(Iv("aria-label", d, m, {
    exact: C,
    normalizer: R
  }));
  return Array.from(new Set(O)).filter((A) => A.matches(v));
}, ds = function(d, m) {
  for (var g = arguments.length, v = new Array(g > 2 ? g - 2 : 0), C = 2; C < g; C++)
    v[C - 2] = arguments[C];
  const B = Yp(d, m, ...v);
  if (!B.length) {
    const x = RR(d, m, ...v);
    if (x.length) {
      const q = x.map((T) => OR(d, T)).filter((T) => !!T);
      throw q.length ? Mt().getElementError(q.map((T) => "Found a label with the text of: " + m + ", however the element associated with this label (<" + T + " />) is non-labellable [https://html.spec.whatwg.org/multipage/forms.html#category-label]. If you really need to label a <" + T + " />, you can use aria-label or aria-labelledby instead.").join(`

`), d) : Mt().getElementError("Found a label with the text of: " + m + `, however no form control was found associated to that label. Make sure you're using the "for" attribute or "aria-labelledby" attribute correctly.`, d);
    } else
      throw Mt().getElementError("Unable to find a label with the text of: " + m, d);
  }
  return B;
};
function OR(d, m) {
  const g = m.getAttribute("for");
  if (!g)
    return null;
  const v = d.querySelector('[id="' + g + '"]');
  return v ? v.tagName.toLowerCase() : null;
}
const iE = (d, m) => "Found multiple elements with the text of: " + m, DR = Yh(Zv(Yp, iE), Yp.name, "query"), cE = Zv(ds, iE), MR = Kv(cu(ds, ds.name, "findAll")), zR = Kv(Yh(cE, ds.name, "find")), xR = cu(ds, ds.name, "getAll"), UR = Yh(cE, ds.name, "get"), CR = cu(Yp, Yp.name, "queryAll"), U0 = function() {
  for (var d = arguments.length, m = new Array(d), g = 0; g < d; g++)
    m[g] = arguments[g];
  return to(m[0]), Iv("placeholder", ...m);
}, HR = (d, m) => "Found multiple elements with the placeholder text of: " + m, BR = (d, m) => "Unable to find an element with the placeholder text of: " + m, NR = cu(U0, U0.name, "queryAll"), [wR, _R, qR, LR, YR] = ys(U0, HR, BR), C0 = function(d, m, g) {
  let {
    selector: v = "*",
    exact: C = !0,
    collapseWhitespace: B,
    trim: x,
    ignore: q = Mt().defaultIgnore,
    normalizer: T
  } = g === void 0 ? {} : g;
  to(d);
  const R = C ? eo : Gh, O = ms({
    collapseWhitespace: B,
    trim: x,
    normalizer: T
  });
  let A = [];
  return typeof d.matches == "function" && d.matches(v) && (A = [d]), [...A, ...Array.from(d.querySelectorAll(v))].filter((U) => !q || !U.matches(q)).filter((U) => R(Fv(U), U, m, O));
}, jR = (d, m) => "Found multiple elements with the text: " + m, VR = function(d, m, g) {
  g === void 0 && (g = {});
  const {
    collapseWhitespace: v,
    trim: C,
    normalizer: B,
    selector: x
  } = g, T = ms({
    collapseWhitespace: v,
    trim: C,
    normalizer: B
  })(m.toString()), R = T !== m.toString(), O = (x ?? "*") !== "*";
  return "Unable to find an element with the text: " + (R ? T + " (normalized from '" + m + "')" : m) + (O ? ", which matches selector '" + x + "'" : "") + ". This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.";
}, GR = cu(C0, C0.name, "queryAll"), [XR, QR, ZR, KR, JR] = ys(C0, jR, VR), H0 = function(d, m, g) {
  let {
    exact: v = !0,
    collapseWhitespace: C,
    trim: B,
    normalizer: x
  } = g === void 0 ? {} : g;
  to(d);
  const q = v ? eo : Gh, T = ms({
    collapseWhitespace: C,
    trim: B,
    normalizer: x
  });
  return Array.from(d.querySelectorAll("input,textarea,select")).filter((R) => R.tagName === "SELECT" ? Array.from(R.options).filter((A) => A.selected).some((A) => q(Fv(A), A, m, T)) : q(R.value, R, m, T));
}, kR = (d, m) => "Found multiple elements with the display value: " + m + ".", $R = (d, m) => "Unable to find an element with the display value: " + m + ".", WR = cu(H0, H0.name, "queryAll"), [FR, IR, PR, eO, tO] = ys(H0, kR, $R), lO = /^(img|input|area|.+-.+)$/i, B0 = function(d, m, g) {
  return g === void 0 && (g = {}), to(d), Iv("alt", d, m, g).filter((v) => lO.test(v.tagName));
}, nO = (d, m) => "Found multiple elements with the alt text: " + m, aO = (d, m) => "Unable to find an element with the alt text: " + m, uO = cu(B0, B0.name, "queryAll"), [iO, cO, oO, rO, fO] = ys(B0, nO, aO), sO = (d) => {
  var m;
  return d.tagName.toLowerCase() === "title" && ((m = d.parentElement) == null ? void 0 : m.tagName.toLowerCase()) === "svg";
}, N0 = function(d, m, g) {
  let {
    exact: v = !0,
    collapseWhitespace: C,
    trim: B,
    normalizer: x
  } = g === void 0 ? {} : g;
  to(d);
  const q = v ? eo : Gh, T = ms({
    collapseWhitespace: C,
    trim: B,
    normalizer: x
  });
  return Array.from(d.querySelectorAll("[title], svg > title")).filter((R) => q(R.getAttribute("title"), R, m, T) || sO(R) && q(Fv(R), R, m, T));
}, dO = (d, m) => "Found multiple elements with the title: " + m + ".", hO = (d, m) => "Unable to find an element with the title: " + m + ".", mO = cu(N0, N0.name, "queryAll"), [yO, pO, gO, vO, bO] = ys(N0, dO, hO), w0 = function(d, m, g) {
  let {
    hidden: v = Mt().defaultHidden,
    name: C,
    description: B,
    queryFallbacks: x = !1,
    selected: q,
    busy: T,
    checked: R,
    pressed: O,
    current: A,
    level: U,
    expanded: K,
    value: {
      now: ue,
      min: te,
      max: ie,
      text: H
    } = {}
  } = g === void 0 ? {} : g;
  if (to(d), q !== void 0) {
    var de;
    if (((de = iu.roles.get(m)) == null ? void 0 : de.props["aria-selected"]) === void 0)
      throw new Error('"aria-selected" is not supported on role "' + m + '".');
  }
  if (T !== void 0) {
    var me;
    if (((me = iu.roles.get(m)) == null ? void 0 : me.props["aria-busy"]) === void 0)
      throw new Error('"aria-busy" is not supported on role "' + m + '".');
  }
  if (R !== void 0) {
    var ye;
    if (((ye = iu.roles.get(m)) == null ? void 0 : ye.props["aria-checked"]) === void 0)
      throw new Error('"aria-checked" is not supported on role "' + m + '".');
  }
  if (O !== void 0) {
    var Re;
    if (((Re = iu.roles.get(m)) == null ? void 0 : Re.props["aria-pressed"]) === void 0)
      throw new Error('"aria-pressed" is not supported on role "' + m + '".');
  }
  if (A !== void 0) {
    var k;
    if (((k = iu.roles.get(m)) == null ? void 0 : k.props["aria-current"]) === void 0)
      throw new Error('"aria-current" is not supported on role "' + m + '".');
  }
  if (U !== void 0 && m !== "heading")
    throw new Error('Role "' + m + '" cannot have "level" property.');
  if (ue !== void 0) {
    var Q;
    if (((Q = iu.roles.get(m)) == null ? void 0 : Q.props["aria-valuenow"]) === void 0)
      throw new Error('"aria-valuenow" is not supported on role "' + m + '".');
  }
  if (ie !== void 0) {
    var ce;
    if (((ce = iu.roles.get(m)) == null ? void 0 : ce.props["aria-valuemax"]) === void 0)
      throw new Error('"aria-valuemax" is not supported on role "' + m + '".');
  }
  if (te !== void 0) {
    var se;
    if (((se = iu.roles.get(m)) == null ? void 0 : se.props["aria-valuemin"]) === void 0)
      throw new Error('"aria-valuemin" is not supported on role "' + m + '".');
  }
  if (H !== void 0) {
    var Me;
    if (((Me = iu.roles.get(m)) == null ? void 0 : Me.props["aria-valuetext"]) === void 0)
      throw new Error('"aria-valuetext" is not supported on role "' + m + '".');
  }
  if (K !== void 0) {
    var Oe;
    if (((Oe = iu.roles.get(m)) == null ? void 0 : Oe.props["aria-expanded"]) === void 0)
      throw new Error('"aria-expanded" is not supported on role "' + m + '".');
  }
  const ve = /* @__PURE__ */ new WeakMap();
  function fe(De) {
    return ve.has(De) || ve.set(De, nE(De)), ve.get(De);
  }
  return Array.from(d.querySelectorAll(
    // Only query elements that can be matched by the following filters
    SO(m)
  )).filter((De) => {
    if (De.hasAttribute("role")) {
      const I = De.getAttribute("role");
      if (x)
        return I.split(" ").filter(Boolean).some((Ue) => Ue === m);
      const [oe] = I.split(" ");
      return oe === m;
    }
    return J0(De).some((I) => I === m);
  }).filter((De) => {
    if (q !== void 0)
      return q === cR(De);
    if (T !== void 0)
      return T === oR(De);
    if (R !== void 0)
      return R === rR(De);
    if (O !== void 0)
      return O === fR(De);
    if (A !== void 0)
      return A === sR(De);
    if (K !== void 0)
      return K === dR(De);
    if (U !== void 0)
      return U === hR(De);
    if (ue !== void 0 || ie !== void 0 || te !== void 0 || H !== void 0) {
      let N = !0;
      if (ue !== void 0 && N && (N = ue === mR(De)), ie !== void 0 && N && (N = ie === yR(De)), te !== void 0 && N && (N = te === pR(De)), H !== void 0) {
        var ot;
        N && (N = eo((ot = gR(De)) != null ? ot : null, De, H, (I) => I));
      }
      return N;
    }
    return !0;
  }).filter((De) => C === void 0 ? !0 : eo(G0(De, {
    computedStyleSupportsPseudoElements: Mt().computedStyleSupportsPseudoElements
  }), De, C, (ot) => ot)).filter((De) => B === void 0 ? !0 : eo(VT(De, {
    computedStyleSupportsPseudoElements: Mt().computedStyleSupportsPseudoElements
  }), De, B, (ot) => ot)).filter((De) => v === !1 ? K0(De, {
    isSubtreeInaccessible: fe
  }) === !1 : !0);
};
function SO(d) {
  var m;
  const g = '*[role~="' + d + '"]', v = (m = iu.roleElements.get(d)) != null ? m : /* @__PURE__ */ new Set(), C = new Set(Array.from(v).map((B) => {
    let {
      name: x
    } = B;
    return x;
  }));
  return [g].concat(Array.from(C)).join(",");
}
const oE = (d) => {
  let m = "";
  return d === void 0 ? m = "" : typeof d == "string" ? m = ' and name "' + d + '"' : m = " and name `" + d + "`", m;
}, TO = function(d, m, g) {
  let {
    name: v
  } = g === void 0 ? {} : g;
  return 'Found multiple elements with the role "' + m + '"' + oE(v);
}, EO = function(d, m, g) {
  let {
    hidden: v = Mt().defaultHidden,
    name: C,
    description: B
  } = g === void 0 ? {} : g;
  if (Mt()._disableExpensiveErrorDiagnostics)
    return 'Unable to find role="' + m + '"' + oE(C);
  let x = "";
  Array.from(d.children).forEach((O) => {
    x += iR(O, {
      hidden: v,
      includeDescription: B !== void 0
    });
  });
  let q;
  x.length === 0 ? v === !1 ? q = "There are no accessible roles. But there might be some inaccessible roles. If you wish to access them, then set the `hidden` option to `true`. Learn more about this here: https://testing-library.com/docs/dom-testing-library/api-queries#byrole" : q = "There are no available roles." : q = (`
Here are the ` + (v === !1 ? "accessible" : "available") + ` roles:

  ` + x.replace(/\n/g, `
  `).replace(/\n\s\s\n/g, `

`) + `
`).trim();
  let T = "";
  C === void 0 ? T = "" : typeof C == "string" ? T = ' and name "' + C + '"' : T = " and name `" + C + "`";
  let R = "";
  return B === void 0 ? R = "" : typeof B == "string" ? R = ' and description "' + B + '"' : R = " and description `" + B + "`", (`
Unable to find an ` + (v === !1 ? "accessible " : "") + 'element with the role "' + m + '"' + T + R + `

` + q).trim();
}, AO = cu(w0, w0.name, "queryAll"), [RO, OO, DO, MO, zO] = ys(w0, TO, EO), k0 = () => Mt().testIdAttribute, _0 = function() {
  for (var d = arguments.length, m = new Array(d), g = 0; g < d; g++)
    m[g] = arguments[g];
  return to(m[0]), Iv(k0(), ...m);
}, xO = (d, m) => "Found multiple elements by: [" + k0() + '="' + m + '"]', UO = (d, m) => "Unable to find an element by: [" + k0() + '="' + m + '"]', CO = cu(_0, _0.name, "queryAll"), [HO, BO, NO, wO, _O] = ys(_0, xO, UO);
var q0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  queryAllByLabelText: CR,
  queryByLabelText: DR,
  getAllByLabelText: xR,
  getByLabelText: UR,
  findAllByLabelText: MR,
  findByLabelText: zR,
  queryByPlaceholderText: wR,
  queryAllByPlaceholderText: NR,
  getByPlaceholderText: qR,
  getAllByPlaceholderText: _R,
  findAllByPlaceholderText: LR,
  findByPlaceholderText: YR,
  queryByText: XR,
  queryAllByText: GR,
  getByText: ZR,
  getAllByText: QR,
  findAllByText: KR,
  findByText: JR,
  queryByDisplayValue: FR,
  queryAllByDisplayValue: WR,
  getByDisplayValue: PR,
  getAllByDisplayValue: IR,
  findAllByDisplayValue: eO,
  findByDisplayValue: tO,
  queryByAltText: iO,
  queryAllByAltText: uO,
  getByAltText: oO,
  getAllByAltText: cO,
  findAllByAltText: rO,
  findByAltText: fO,
  queryByTitle: yO,
  queryAllByTitle: mO,
  getByTitle: gO,
  getAllByTitle: pO,
  findAllByTitle: vO,
  findByTitle: bO,
  queryByRole: RO,
  queryAllByRole: AO,
  getAllByRole: OO,
  getByRole: DO,
  findAllByRole: MO,
  findByRole: zO,
  queryByTestId: HO,
  queryAllByTestId: CO,
  getByTestId: NO,
  getAllByTestId: BO,
  findAllByTestId: wO,
  findByTestId: _O
});
function rE(d, m, g) {
  return m === void 0 && (m = q0), g === void 0 && (g = {}), Object.keys(m).reduce((v, C) => {
    const B = m[C];
    return v[C] = B.bind(null, d), v;
  }, g);
}
const MT = {
  // Clipboard Events
  copy: {
    EventType: "ClipboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  cut: {
    EventType: "ClipboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  paste: {
    EventType: "ClipboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  // Composition Events
  compositionEnd: {
    EventType: "CompositionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  compositionStart: {
    EventType: "CompositionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  compositionUpdate: {
    EventType: "CompositionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  // Keyboard Events
  keyDown: {
    EventType: "KeyboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      charCode: 0,
      composed: !0
    }
  },
  keyPress: {
    EventType: "KeyboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      charCode: 0,
      composed: !0
    }
  },
  keyUp: {
    EventType: "KeyboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      charCode: 0,
      composed: !0
    }
  },
  // Focus Events
  focus: {
    EventType: "FocusEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1,
      composed: !0
    }
  },
  blur: {
    EventType: "FocusEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1,
      composed: !0
    }
  },
  focusIn: {
    EventType: "FocusEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  focusOut: {
    EventType: "FocusEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  // Form Events
  change: {
    EventType: "Event",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  input: {
    EventType: "InputEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  invalid: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !0
    }
  },
  submit: {
    EventType: "Event",
    defaultInit: {
      bubbles: !0,
      cancelable: !0
    }
  },
  reset: {
    EventType: "Event",
    defaultInit: {
      bubbles: !0,
      cancelable: !0
    }
  },
  // Mouse Events
  click: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      button: 0,
      composed: !0
    }
  },
  contextMenu: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  dblClick: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  drag: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  dragEnd: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  dragEnter: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  dragExit: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  dragLeave: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  dragOver: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  dragStart: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  drop: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  mouseDown: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  mouseEnter: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1,
      composed: !0
    }
  },
  mouseLeave: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1,
      composed: !0
    }
  },
  mouseMove: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  mouseOut: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  mouseOver: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  mouseUp: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  // Selection Events
  select: {
    EventType: "Event",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  // Touch Events
  touchCancel: {
    EventType: "TouchEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  touchEnd: {
    EventType: "TouchEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  touchMove: {
    EventType: "TouchEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  touchStart: {
    EventType: "TouchEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  // UI Events
  resize: {
    EventType: "UIEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  scroll: {
    EventType: "UIEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  // Wheel Events
  wheel: {
    EventType: "WheelEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  // Media Events
  abort: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  canPlay: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  canPlayThrough: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  durationChange: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  emptied: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  encrypted: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  ended: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  loadedData: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  loadedMetadata: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  loadStart: {
    EventType: "ProgressEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  pause: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  play: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  playing: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  progress: {
    EventType: "ProgressEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  rateChange: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  seeked: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  seeking: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  stalled: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  suspend: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  timeUpdate: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  volumeChange: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  waiting: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  // Events
  load: {
    // TODO: load events can be UIEvent or Event depending on what generated them
    // This is where this abstraction breaks down.
    // But the common targets are <img />, <script /> and window.
    // Neither of these targets receive a UIEvent
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  error: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  // Animation Events
  animationStart: {
    EventType: "AnimationEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  animationEnd: {
    EventType: "AnimationEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  animationIteration: {
    EventType: "AnimationEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  // Transition Events
  transitionCancel: {
    EventType: "TransitionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  transitionEnd: {
    EventType: "TransitionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0
    }
  },
  transitionRun: {
    EventType: "TransitionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  transitionStart: {
    EventType: "TransitionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  // pointer events
  pointerOver: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointerEnter: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  pointerDown: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointerMove: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointerUp: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointerCancel: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  pointerOut: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointerLeave: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  gotPointerCapture: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  lostPointerCapture: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  // history events
  popState: {
    EventType: "PopStateEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  // window events
  offline: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  online: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  pageHide: {
    EventType: "PageTransitionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0
    }
  },
  pageShow: {
    EventType: "PageTransitionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0
    }
  }
}, zT = {
  doubleClick: "dblClick"
};
function hs(d, m) {
  return Mt().eventWrapper(() => {
    if (!m)
      throw new Error("Unable to fire an event - please provide an event object.");
    if (!d)
      throw new Error('Unable to fire a "' + m.type + '" event - please provide a DOM element.');
    return d.dispatchEvent(m);
  });
}
function M0(d, m, g, v) {
  let {
    EventType: C = "Event",
    defaultInit: B = {}
  } = v === void 0 ? {} : v;
  if (!m)
    throw new Error('Unable to fire a "' + d + '" event - please provide a DOM element.');
  const x = {
    ...B,
    ...g
  }, {
    target: {
      value: q,
      files: T,
      ...R
    } = {}
  } = x;
  q !== void 0 && qO(m, q), T !== void 0 && Object.defineProperty(m, "files", {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    value: T
  }), Object.assign(m, R);
  const O = WT(m), A = O[C] || O.Event;
  let U;
  if (typeof A == "function")
    U = new A(d, x);
  else {
    U = O.document.createEvent(C);
    const {
      bubbles: ue,
      cancelable: te,
      detail: ie,
      ...H
    } = x;
    U.initEvent(d, ue, te, ie), Object.keys(H).forEach((de) => {
      U[de] = H[de];
    });
  }
  return ["dataTransfer", "clipboardData"].forEach((ue) => {
    const te = x[ue];
    typeof te == "object" && (typeof O.DataTransfer == "function" ? Object.defineProperty(U, ue, {
      value: Object.getOwnPropertyNames(te).reduce((ie, H) => (Object.defineProperty(ie, H, {
        value: te[H]
      }), ie), new O.DataTransfer())
    }) : Object.defineProperty(U, ue, {
      value: te
    }));
  }), U;
}
Object.keys(MT).forEach((d) => {
  const {
    EventType: m,
    defaultInit: g
  } = MT[d], v = d.toLowerCase();
  M0[d] = (C, B) => M0(v, C, B, {
    EventType: m,
    defaultInit: g
  }), hs[d] = (C, B) => hs(C, M0[d](C, B));
});
function qO(d, m) {
  const {
    set: g
  } = Object.getOwnPropertyDescriptor(d, "value") || {}, v = Object.getPrototypeOf(d), {
    set: C
  } = Object.getOwnPropertyDescriptor(v, "value") || {};
  if (C && g !== C)
    C.call(d, m);
  else if (g)
    g.call(d, m);
  else
    throw new Error("The given element does not have a value setter");
}
Object.keys(zT).forEach((d) => {
  const m = zT[d];
  hs[d] = function() {
    return hs[m](...arguments);
  };
});
function LO(d) {
  return d.replace(/[ \t]*[\n][ \t]*/g, `
`);
}
function YO(d) {
  return B2.compressToEncodedURIComponent(LO(d));
}
function jO(d) {
  return "https://testing-playground.com/#markup=" + YO(d);
}
const VO = (d, m, g) => Array.isArray(d) ? d.forEach((v) => RT(v, m, g)) : RT(d, m, g), GO = function(d) {
  if (d === void 0 && (d = Z0().body), !d || !("innerHTML" in d)) {
    console.log("The element you're providing isn't a valid DOM element.");
    return;
  }
  if (!d.innerHTML) {
    console.log("The provided element doesn't have any children.");
    return;
  }
  const m = jO(d.innerHTML);
  return console.log(`Open this URL in your browser

` + m), m;
}, xT = {
  debug: VO,
  logTestingPlaygroundURL: GO
}, oD = typeof document < "u" && document.body ? rE(document.body, q0, xT) : Object.keys(q0).reduce((d, m) => (d[m] = () => {
  throw new TypeError("For queries bound to document.body a global document has to be available... Learn more: https://testing-library.com/s/screen-global-error");
}, d), xT), XO = typeof _p.act == "function" ? _p.act : TA.act;
function fE() {
  if (typeof globalThis < "u")
    return globalThis;
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof global < "u")
    return global;
  throw new Error("unable to locate global object");
}
function Ic(d) {
  fE().IS_REACT_ACT_ENVIRONMENT = d;
}
function Jv() {
  return fE().IS_REACT_ACT_ENVIRONMENT;
}
function QO(d) {
  return (m) => {
    const g = Jv();
    Ic(!0);
    try {
      let v = !1;
      const C = d(() => {
        const B = m();
        return B !== null && typeof B == "object" && typeof B.then == "function" && (v = !0), B;
      });
      if (v) {
        const B = C;
        return {
          then: (x, q) => {
            B.then((T) => {
              Ic(g), x(T);
            }, (T) => {
              Ic(g), q(T);
            });
          }
        };
      } else
        return Ic(g), C;
    } catch (v) {
      throw Ic(g), v;
    }
  };
}
const Vh = QO(XO), el = function() {
  return hs(...arguments);
};
Object.keys(hs).forEach((d) => {
  el[d] = function() {
    return hs[d](...arguments);
  };
});
const ZO = el.mouseEnter, KO = el.mouseLeave;
el.mouseEnter = function() {
  return ZO(...arguments), el.mouseOver(...arguments);
};
el.mouseLeave = function() {
  return KO(...arguments), el.mouseOut(...arguments);
};
const JO = el.pointerEnter, kO = el.pointerLeave;
el.pointerEnter = function() {
  return JO(...arguments), el.pointerOver(...arguments);
};
el.pointerLeave = function() {
  return kO(...arguments), el.pointerOut(...arguments);
};
const $O = el.select;
el.select = (d, m) => {
  $O(d, m), d.focus(), el.keyUp(d, m);
};
const WO = el.blur, FO = el.focus;
el.blur = function() {
  return el.focusOut(...arguments), WO(...arguments);
};
el.focus = function() {
  return el.focusIn(...arguments), FO(...arguments);
};
let IO = {
  reactStrictMode: !1
};
function PO() {
  return {
    ...Mt(),
    ...IO
  };
}
function eD() {
  return typeof jest < "u" && jest !== null ? (
    // legacy timers
    setTimeout._isMockFunction === !0 || // modern timers
    // eslint-disable-next-line prefer-object-has-own -- No Object.hasOwn in all target environments we support.
    Object.prototype.hasOwnProperty.call(setTimeout, "clock")
  ) : !1;
}
eR({
  unstable_advanceTimersWrapper: (d) => Vh(d),
  // We just want to run `waitFor` without IS_REACT_ACT_ENVIRONMENT
  // But that's not necessarily how `asyncWrapper` is used since it's a public method.
  // Let's just hope nobody else is using it.
  asyncWrapper: async (d) => {
    const m = Jv();
    Ic(!1);
    try {
      const g = await d();
      return await new Promise((v) => {
        setTimeout(() => {
          v();
        }, 0), eD() && jest.advanceTimersByTime(0);
      }), g;
    } finally {
      Ic(m);
    }
  },
  eventWrapper: (d) => {
    let m;
    return Vh(() => {
      m = d();
    }), m;
  }
});
const L0 = /* @__PURE__ */ new Set(), kv = [];
function Y0(d, m) {
  return m ?? PO().reactStrictMode ? /* @__PURE__ */ _p.createElement(_p.StrictMode, null, d) : d;
}
function j0(d, m) {
  return m ? /* @__PURE__ */ _p.createElement(m, null, d) : d;
}
function tD(d, m) {
  let {
    hydrate: g,
    onCaughtError: v,
    onRecoverableError: C,
    ui: B,
    wrapper: x,
    reactStrictMode: q
  } = m, T;
  return g ? Vh(() => {
    T = lT.hydrateRoot(d, Y0(j0(B, x), q), {
      onCaughtError: v,
      onRecoverableError: C
    });
  }) : T = lT.createRoot(d, {
    onCaughtError: v,
    onRecoverableError: C
  }), {
    hydrate() {
      if (!g)
        throw new Error("Attempted to hydrate a non-hydrateable root. This is a bug in `@testing-library/react`.");
    },
    render(R) {
      T.render(R);
    },
    unmount() {
      T.unmount();
    }
  };
}
function lD(d) {
  return {
    hydrate(m) {
      Lh.hydrate(m, d);
    },
    render(m) {
      Lh.render(m, d);
    },
    unmount() {
      Lh.unmountComponentAtNode(d);
    }
  };
}
function sE(d, m) {
  let {
    baseElement: g,
    container: v,
    hydrate: C,
    queries: B,
    root: x,
    wrapper: q,
    reactStrictMode: T
  } = m;
  return Vh(() => {
    C ? x.hydrate(Y0(j0(d, q), T), v) : x.render(Y0(j0(d, q), T), v);
  }), {
    container: v,
    baseElement: g,
    debug: function(R, O, A) {
      return R === void 0 && (R = g), Array.isArray(R) ? (
        // eslint-disable-next-line no-console
        R.forEach((U) => console.log(jh(U, O, A)))
      ) : (
        // eslint-disable-next-line no-console,
        console.log(jh(R, O, A))
      );
    },
    unmount: () => {
      Vh(() => {
        x.unmount();
      });
    },
    rerender: (R) => {
      sE(R, {
        container: v,
        baseElement: g,
        root: x,
        wrapper: q,
        reactStrictMode: T
      });
    },
    asFragment: () => {
      if (typeof document.createRange == "function")
        return document.createRange().createContextualFragment(v.innerHTML);
      {
        const R = document.createElement("template");
        return R.innerHTML = v.innerHTML, R.content;
      }
    },
    ...rE(g, B)
  };
}
function nD(d, m) {
  let {
    container: g,
    baseElement: v = g,
    legacyRoot: C = !1,
    onCaughtError: B,
    onUncaughtError: x,
    onRecoverableError: q,
    queries: T,
    hydrate: R = !1,
    wrapper: O,
    reactStrictMode: A
  } = m === void 0 ? {} : m;
  if (x !== void 0)
    throw new Error("onUncaughtError is not supported. The `render` call will already throw on uncaught errors.");
  if (C && typeof Lh.render != "function") {
    const K = new Error("`legacyRoot: true` is not supported in this version of React. If your app runs React 19 or later, you should remove this flag. If your app runs React 18 or earlier, visit https://react.dev/blog/2022/03/08/react-18-upgrade-guide for upgrade instructions.");
    throw Error.captureStackTrace(K, nD), K;
  }
  v || (v = document.body), g || (g = v.appendChild(document.createElement("div")));
  let U;
  return L0.has(g) ? kv.forEach((K) => {
    K.container === g && (U = K.root);
  }) : (U = (C ? lD : tD)(g, {
    hydrate: R,
    onCaughtError: B,
    onRecoverableError: q,
    ui: d,
    wrapper: O,
    reactStrictMode: A
  }), kv.push({
    container: g,
    root: U
  }), L0.add(g)), sE(d, {
    container: g,
    baseElement: v,
    queries: T,
    hydrate: R,
    wrapper: O,
    root: U,
    reactStrictMode: A
  });
}
function UT() {
  kv.forEach((d) => {
    let {
      root: m,
      container: g
    } = d;
    Vh(() => {
      m.unmount();
    }), g.parentNode === document.body && document.body.removeChild(g);
  }), kv.length = 0, L0.clear();
}
if ((typeof process > "u" || !process.env?.RTL_SKIP_AUTO_CLEANUP) && (typeof afterEach == "function" ? afterEach(() => {
  UT();
}) : typeof teardown == "function" && teardown(() => {
  UT();
}), typeof beforeAll == "function" && typeof afterAll == "function")) {
  let d = Jv();
  beforeAll(() => {
    d = Jv(), Ic(!0);
  }), afterAll(() => {
    Ic(d);
  });
}
export {
  el as f,
  nD as r,
  oD as s,
  SR as w
};
