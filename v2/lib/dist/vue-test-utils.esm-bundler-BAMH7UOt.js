import * as Es from "vue";
import { ssrUtils as qt, initDirectivesForSSR as Wr, nextTick as bn, defineComponent as Pt, computed as ht, h as je, shallowReactive as Kr, reactive as qr, ref as zr, createApp as Hr, transformVNodeArgs as Gr, setDevtoolsHook as Xr, isRef as Qr, TransitionGroup as Yr, Transition as Jr, BaseTransition as Zr } from "vue";
/**
* @vue/shared v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function _e(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const ws = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
process.env.NODE_ENV !== "production" && Object.freeze([]);
const Nt = () => {
}, dt = () => !1, vn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Oe = Object.assign, ve = Array.isArray, Ss = (e) => typeof e == "function", q = (e) => typeof e == "string", Pn = (e) => typeof e == "symbol", ea = (e) => e !== null && typeof e == "object", mi = /* @__PURE__ */ _e(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ta = /* @__PURE__ */ _e(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Mn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, na = /-\w/g, Te = Mn(
  (e) => e.replace(na, (t) => t.slice(1).toUpperCase())
), Vn = Mn((e) => e.charAt(0).toUpperCase() + e.slice(1)), ia = Mn(
  (e) => e ? `on${Vn(e)}` : ""
);
let bi;
const sa = () => bi || (bi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {}), Je = {
  1: "TEXT",
  2: "CLASS",
  4: "STYLE",
  8: "PROPS",
  16: "FULL_PROPS",
  32: "NEED_HYDRATION",
  64: "STABLE_FRAGMENT",
  128: "KEYED_FRAGMENT",
  256: "UNKEYED_FRAGMENT",
  512: "NEED_PATCH",
  1024: "DYNAMIC_SLOTS",
  2048: "DEV_ROOT_FRAGMENT",
  [-1]: "CACHED",
  [-2]: "BAIL"
}, ra = {
  1: "STABLE",
  2: "DYNAMIC",
  3: "FORWARDED"
}, aa = /;(?![^(]*\))/g, oa = /:([^]+)/, la = /\/\*[^]*?\*\//g;
function ua(e) {
  const t = {};
  return e.replace(la, "").split(aa).forEach((n) => {
    if (n) {
      const i = n.split(oa);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
const ca = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", fa = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", pa = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", _a = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr", ha = /* @__PURE__ */ _e(ca), da = /* @__PURE__ */ _e(fa), ma = /* @__PURE__ */ _e(pa), ba = /* @__PURE__ */ _e(_a);
/**
* @vue/compiler-core v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const tt = Symbol(process.env.NODE_ENV !== "production" ? "Fragment" : ""), Ze = Symbol(process.env.NODE_ENV !== "production" ? "Teleport" : ""), Ln = Symbol(process.env.NODE_ENV !== "production" ? "Suspense" : ""), Mt = Symbol(process.env.NODE_ENV !== "production" ? "KeepAlive" : ""), Os = Symbol(
  process.env.NODE_ENV !== "production" ? "BaseTransition" : ""
), Pe = Symbol(process.env.NODE_ENV !== "production" ? "openBlock" : ""), Ts = Symbol(process.env.NODE_ENV !== "production" ? "createBlock" : ""), Ns = Symbol(
  process.env.NODE_ENV !== "production" ? "createElementBlock" : ""
), $n = Symbol(process.env.NODE_ENV !== "production" ? "createVNode" : ""), Bn = Symbol(
  process.env.NODE_ENV !== "production" ? "createElementVNode" : ""
), ut = Symbol(
  process.env.NODE_ENV !== "production" ? "createCommentVNode" : ""
), jn = Symbol(
  process.env.NODE_ENV !== "production" ? "createTextVNode" : ""
), xs = Symbol(
  process.env.NODE_ENV !== "production" ? "createStaticVNode" : ""
), Fn = Symbol(
  process.env.NODE_ENV !== "production" ? "resolveComponent" : ""
), Un = Symbol(
  process.env.NODE_ENV !== "production" ? "resolveDynamicComponent" : ""
), Wn = Symbol(
  process.env.NODE_ENV !== "production" ? "resolveDirective" : ""
), Kn = Symbol(
  process.env.NODE_ENV !== "production" ? "resolveFilter" : ""
), qn = Symbol(
  process.env.NODE_ENV !== "production" ? "withDirectives" : ""
), zn = Symbol(process.env.NODE_ENV !== "production" ? "renderList" : ""), ks = Symbol(process.env.NODE_ENV !== "production" ? "renderSlot" : ""), Is = Symbol(process.env.NODE_ENV !== "production" ? "createSlots" : ""), zt = Symbol(
  process.env.NODE_ENV !== "production" ? "toDisplayString" : ""
), Vt = Symbol(process.env.NODE_ENV !== "production" ? "mergeProps" : ""), Hn = Symbol(
  process.env.NODE_ENV !== "production" ? "normalizeClass" : ""
), Gn = Symbol(
  process.env.NODE_ENV !== "production" ? "normalizeStyle" : ""
), nt = Symbol(
  process.env.NODE_ENV !== "production" ? "normalizeProps" : ""
), ct = Symbol(
  process.env.NODE_ENV !== "production" ? "guardReactiveProps" : ""
), Xn = Symbol(process.env.NODE_ENV !== "production" ? "toHandlers" : ""), gn = Symbol(process.env.NODE_ENV !== "production" ? "camelize" : ""), va = Symbol(process.env.NODE_ENV !== "production" ? "capitalize" : ""), yn = Symbol(
  process.env.NODE_ENV !== "production" ? "toHandlerKey" : ""
), Lt = Symbol(
  process.env.NODE_ENV !== "production" ? "setBlockTracking" : ""
), ga = Symbol(process.env.NODE_ENV !== "production" ? "pushScopeId" : ""), ya = Symbol(process.env.NODE_ENV !== "production" ? "popScopeId" : ""), Qn = Symbol(process.env.NODE_ENV !== "production" ? "withCtx" : ""), Ea = Symbol(process.env.NODE_ENV !== "production" ? "unref" : ""), wa = Symbol(process.env.NODE_ENV !== "production" ? "isRef" : ""), Yn = Symbol(process.env.NODE_ENV !== "production" ? "withMemo" : ""), Cs = Symbol(process.env.NODE_ENV !== "production" ? "isMemoSame" : ""), Fe = {
  [tt]: "Fragment",
  [Ze]: "Teleport",
  [Ln]: "Suspense",
  [Mt]: "KeepAlive",
  [Os]: "BaseTransition",
  [Pe]: "openBlock",
  [Ts]: "createBlock",
  [Ns]: "createElementBlock",
  [$n]: "createVNode",
  [Bn]: "createElementVNode",
  [ut]: "createCommentVNode",
  [jn]: "createTextVNode",
  [xs]: "createStaticVNode",
  [Fn]: "resolveComponent",
  [Un]: "resolveDynamicComponent",
  [Wn]: "resolveDirective",
  [Kn]: "resolveFilter",
  [qn]: "withDirectives",
  [zn]: "renderList",
  [ks]: "renderSlot",
  [Is]: "createSlots",
  [zt]: "toDisplayString",
  [Vt]: "mergeProps",
  [Hn]: "normalizeClass",
  [Gn]: "normalizeStyle",
  [nt]: "normalizeProps",
  [ct]: "guardReactiveProps",
  [Xn]: "toHandlers",
  [gn]: "camelize",
  [va]: "capitalize",
  [yn]: "toHandlerKey",
  [Lt]: "setBlockTracking",
  [ga]: "pushScopeId",
  [ya]: "popScopeId",
  [Qn]: "withCtx",
  [Ea]: "unref",
  [wa]: "isRef",
  [Yn]: "withMemo",
  [Cs]: "isMemoSame"
};
function Sa(e) {
  Object.getOwnPropertySymbols(e).forEach((t) => {
    Fe[t] = e[t];
  });
}
const se = {
  start: { line: 1, column: 1, offset: 0 },
  end: { line: 1, column: 1, offset: 0 },
  source: ""
};
function Oa(e, t = "") {
  return {
    type: 0,
    source: t,
    children: e,
    helpers: /* @__PURE__ */ new Set(),
    components: [],
    directives: [],
    hoists: [],
    imports: [],
    cached: [],
    temps: 0,
    codegenNode: void 0,
    loc: se
  };
}
function it(e, t, n, i, s, r, a, o = !1, l = !1, f = !1, _ = se) {
  return e && (o ? (e.helper(Pe), e.helper(Ke(e.inSSR, f))) : e.helper(We(e.inSSR, f)), a && e.helper(qn)), {
    type: 13,
    tag: t,
    props: n,
    children: i,
    patchFlag: s,
    dynamicProps: r,
    directives: a,
    isBlock: o,
    disableTracking: l,
    isComponent: f,
    loc: _
  };
}
function Re(e, t = se) {
  return {
    type: 17,
    loc: t,
    elements: e
  };
}
function ae(e, t = se) {
  return {
    type: 15,
    loc: t,
    properties: e
  };
}
function U(e, t) {
  return {
    type: 16,
    loc: se,
    key: q(e) ? D(e, !0) : e,
    value: t
  };
}
function D(e, t = !1, n = se, i = 0) {
  return {
    type: 4,
    loc: n,
    content: e,
    isStatic: t,
    constType: t ? 3 : i
  };
}
function fe(e, t = se) {
  return {
    type: 8,
    loc: t,
    children: e
  };
}
function K(e, t = [], n = se) {
  return {
    type: 14,
    loc: n,
    callee: e,
    arguments: t
  };
}
function Ue(e, t = void 0, n = !1, i = !1, s = se) {
  return {
    type: 18,
    params: e,
    returns: t,
    newline: n,
    isSlot: i,
    loc: s
  };
}
function En(e, t, n, i = !0) {
  return {
    type: 19,
    test: e,
    consequent: t,
    alternate: n,
    newline: i,
    loc: se
  };
}
function Ta(e, t, n = !1, i = !1) {
  return {
    type: 20,
    index: e,
    value: t,
    needPauseTracking: n,
    inVOnce: i,
    needArraySpread: !1,
    loc: se
  };
}
function Na(e) {
  return {
    type: 21,
    body: e,
    loc: se
  };
}
function We(e, t) {
  return e || t ? $n : Bn;
}
function Ke(e, t) {
  return e || t ? Ts : Ns;
}
function Jn(e, { helper: t, removeHelper: n, inSSR: i }) {
  e.isBlock || (e.isBlock = !0, n(We(i, e.isComponent)), t(Pe), t(Ke(i, e.isComponent)));
}
const vi = new Uint8Array([123, 123]), gi = new Uint8Array([125, 125]);
function yi(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function ne(e) {
  return e === 32 || e === 10 || e === 9 || e === 12 || e === 13;
}
function ye(e) {
  return e === 47 || e === 62 || ne(e);
}
function $t(e) {
  const t = new Uint8Array(e.length);
  for (let n = 0; n < e.length; n++)
    t[n] = e.charCodeAt(n);
  return t;
}
const z = {
  Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]),
  // CDATA[
  CdataEnd: new Uint8Array([93, 93, 62]),
  // ]]>
  CommentEnd: new Uint8Array([45, 45, 62]),
  // `-->`
  ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]),
  // `<\/script`
  StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]),
  // `</style`
  TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]),
  // `</title`
  TextareaEnd: new Uint8Array([
    60,
    47,
    116,
    101,
    120,
    116,
    97,
    114,
    101,
    97
  ])
  // `</textarea
};
class xa {
  constructor(t, n) {
    this.stack = t, this.cbs = n, this.state = 1, this.buffer = "", this.sectionStart = 0, this.index = 0, this.entityStart = 0, this.baseState = 1, this.inRCDATA = !1, this.inXML = !1, this.inVPre = !1, this.newlines = [], this.mode = 0, this.delimiterOpen = vi, this.delimiterClose = gi, this.delimiterIndex = -1, this.currentSequence = void 0, this.sequenceIndex = 0;
  }
  get inSFCRoot() {
    return this.mode === 2 && this.stack.length === 0;
  }
  reset() {
    this.state = 1, this.mode = 0, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = 1, this.inRCDATA = !1, this.currentSequence = void 0, this.newlines.length = 0, this.delimiterOpen = vi, this.delimiterClose = gi;
  }
  /**
   * Generate Position object with line / column information using recorded
   * newline positions. We know the index is always going to be an already
   * processed index, so all the newlines up to this index should have been
   * recorded.
   */
  getPos(t) {
    let n = 1, i = t + 1;
    for (let s = this.newlines.length - 1; s >= 0; s--) {
      const r = this.newlines[s];
      if (t > r) {
        n = s + 2, i = t - r;
        break;
      }
    }
    return {
      column: i,
      line: n,
      offset: t
    };
  }
  peek() {
    return this.buffer.charCodeAt(this.index + 1);
  }
  stateText(t) {
    t === 60 ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = 5, this.sectionStart = this.index) : !this.inVPre && t === this.delimiterOpen[0] && (this.state = 2, this.delimiterIndex = 0, this.stateInterpolationOpen(t));
  }
  stateInterpolationOpen(t) {
    if (t === this.delimiterOpen[this.delimiterIndex])
      if (this.delimiterIndex === this.delimiterOpen.length - 1) {
        const n = this.index + 1 - this.delimiterOpen.length;
        n > this.sectionStart && this.cbs.ontext(this.sectionStart, n), this.state = 3, this.sectionStart = n;
      } else
        this.delimiterIndex++;
    else this.inRCDATA ? (this.state = 32, this.stateInRCDATA(t)) : (this.state = 1, this.stateText(t));
  }
  stateInterpolation(t) {
    t === this.delimiterClose[0] && (this.state = 4, this.delimiterIndex = 0, this.stateInterpolationClose(t));
  }
  stateInterpolationClose(t) {
    t === this.delimiterClose[this.delimiterIndex] ? this.delimiterIndex === this.delimiterClose.length - 1 ? (this.cbs.oninterpolation(this.sectionStart, this.index + 1), this.inRCDATA ? this.state = 32 : this.state = 1, this.sectionStart = this.index + 1) : this.delimiterIndex++ : (this.state = 3, this.stateInterpolation(t));
  }
  stateSpecialStartSequence(t) {
    const n = this.sequenceIndex === this.currentSequence.length;
    if (!(n ? (
      // If we are at the end of the sequence, make sure the tag name has ended
      ye(t)
    ) : (
      // Otherwise, do a case-insensitive comparison
      (t | 32) === this.currentSequence[this.sequenceIndex]
    )))
      this.inRCDATA = !1;
    else if (!n) {
      this.sequenceIndex++;
      return;
    }
    this.sequenceIndex = 0, this.state = 6, this.stateInTagName(t);
  }
  /** Look for an end tag. For <title> and <textarea>, also decode entities. */
  stateInRCDATA(t) {
    if (this.sequenceIndex === this.currentSequence.length) {
      if (t === 62 || ne(t)) {
        const n = this.index - this.currentSequence.length;
        if (this.sectionStart < n) {
          const i = this.index;
          this.index = n, this.cbs.ontext(this.sectionStart, n), this.index = i;
        }
        this.sectionStart = n + 2, this.stateInClosingTagName(t), this.inRCDATA = !1;
        return;
      }
      this.sequenceIndex = 0;
    }
    (t | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === z.TitleEnd || this.currentSequence === z.TextareaEnd && !this.inSFCRoot ? !this.inVPre && t === this.delimiterOpen[0] && (this.state = 2, this.delimiterIndex = 0, this.stateInterpolationOpen(t)) : this.fastForwardTo(60) && (this.sequenceIndex = 1) : this.sequenceIndex = +(t === 60);
  }
  stateCDATASequence(t) {
    t === z.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === z.Cdata.length && (this.state = 28, this.currentSequence = z.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = 23, this.stateInDeclaration(t));
  }
  /**
   * When we wait for one specific character, we can speed things up
   * by skipping through the buffer until we find it.
   *
   * @returns Whether the character was found.
   */
  fastForwardTo(t) {
    for (; ++this.index < this.buffer.length; ) {
      const n = this.buffer.charCodeAt(this.index);
      if (n === 10 && this.newlines.push(this.index), n === t)
        return !0;
    }
    return this.index = this.buffer.length - 1, !1;
  }
  /**
   * Comments and CDATA end with `-->` and `]]>`.
   *
   * Their common qualities are:
   * - Their end sequences have a distinct character they start with.
   * - That character is then repeated, so we have to check multiple repeats.
   * - All characters but the start character of the sequence can be skipped.
   */
  stateInCommentLike(t) {
    t === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === z.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index - 2) : this.cbs.oncomment(this.sectionStart, this.index - 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = 1) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : t !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0);
  }
  startSpecial(t, n) {
    this.enterRCDATA(t, n), this.state = 31;
  }
  enterRCDATA(t, n) {
    this.inRCDATA = !0, this.currentSequence = t, this.sequenceIndex = n;
  }
  stateBeforeTagName(t) {
    t === 33 ? (this.state = 22, this.sectionStart = this.index + 1) : t === 63 ? (this.state = 24, this.sectionStart = this.index + 1) : yi(t) ? (this.sectionStart = this.index, this.mode === 0 ? this.state = 6 : this.inSFCRoot ? this.state = 34 : this.inXML ? this.state = 6 : t === 116 ? this.state = 30 : this.state = t === 115 ? 29 : 6) : t === 47 ? this.state = 8 : (this.state = 1, this.stateText(t));
  }
  stateInTagName(t) {
    ye(t) && this.handleTagName(t);
  }
  stateInSFCRootTagName(t) {
    if (ye(t)) {
      const n = this.buffer.slice(this.sectionStart, this.index);
      n !== "template" && this.enterRCDATA($t("</" + n), 0), this.handleTagName(t);
    }
  }
  handleTagName(t) {
    this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(t);
  }
  stateBeforeClosingTagName(t) {
    ne(t) || (t === 62 ? (process.env.NODE_ENV !== "production" && this.cbs.onerr(14, this.index), this.state = 1, this.sectionStart = this.index + 1) : (this.state = yi(t) ? 9 : 27, this.sectionStart = this.index));
  }
  stateInClosingTagName(t) {
    (t === 62 || ne(t)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = 10, this.stateAfterClosingTagName(t));
  }
  stateAfterClosingTagName(t) {
    t === 62 && (this.state = 1, this.sectionStart = this.index + 1);
  }
  stateBeforeAttrName(t) {
    t === 62 ? (this.cbs.onopentagend(this.index), this.inRCDATA ? this.state = 32 : this.state = 1, this.sectionStart = this.index + 1) : t === 47 ? (this.state = 7, process.env.NODE_ENV !== "production" && this.peek() !== 62 && this.cbs.onerr(22, this.index)) : t === 60 && this.peek() === 47 ? (this.cbs.onopentagend(this.index), this.state = 5, this.sectionStart = this.index) : ne(t) || (process.env.NODE_ENV !== "production" && t === 61 && this.cbs.onerr(
      19,
      this.index
    ), this.handleAttrStart(t));
  }
  handleAttrStart(t) {
    t === 118 && this.peek() === 45 ? (this.state = 13, this.sectionStart = this.index) : t === 46 || t === 58 || t === 64 || t === 35 ? (this.cbs.ondirname(this.index, this.index + 1), this.state = 14, this.sectionStart = this.index + 1) : (this.state = 12, this.sectionStart = this.index);
  }
  stateInSelfClosingTag(t) {
    t === 62 ? (this.cbs.onselfclosingtag(this.index), this.state = 1, this.sectionStart = this.index + 1, this.inRCDATA = !1) : ne(t) || (this.state = 11, this.stateBeforeAttrName(t));
  }
  stateInAttrName(t) {
    t === 61 || ye(t) ? (this.cbs.onattribname(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : process.env.NODE_ENV !== "production" && (t === 34 || t === 39 || t === 60) && this.cbs.onerr(
      17,
      this.index
    );
  }
  stateInDirName(t) {
    t === 61 || ye(t) ? (this.cbs.ondirname(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : t === 58 ? (this.cbs.ondirname(this.sectionStart, this.index), this.state = 14, this.sectionStart = this.index + 1) : t === 46 && (this.cbs.ondirname(this.sectionStart, this.index), this.state = 16, this.sectionStart = this.index + 1);
  }
  stateInDirArg(t) {
    t === 61 || ye(t) ? (this.cbs.ondirarg(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : t === 91 ? this.state = 15 : t === 46 && (this.cbs.ondirarg(this.sectionStart, this.index), this.state = 16, this.sectionStart = this.index + 1);
  }
  stateInDynamicDirArg(t) {
    t === 93 ? this.state = 14 : (t === 61 || ye(t)) && (this.cbs.ondirarg(this.sectionStart, this.index + 1), this.handleAttrNameEnd(t), process.env.NODE_ENV !== "production" && this.cbs.onerr(
      27,
      this.index
    ));
  }
  stateInDirModifier(t) {
    t === 61 || ye(t) ? (this.cbs.ondirmodifier(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : t === 46 && (this.cbs.ondirmodifier(this.sectionStart, this.index), this.sectionStart = this.index + 1);
  }
  handleAttrNameEnd(t) {
    this.sectionStart = this.index, this.state = 17, this.cbs.onattribnameend(this.index), this.stateAfterAttrName(t);
  }
  stateAfterAttrName(t) {
    t === 61 ? this.state = 18 : t === 47 || t === 62 ? (this.cbs.onattribend(0, this.sectionStart), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(t)) : ne(t) || (this.cbs.onattribend(0, this.sectionStart), this.handleAttrStart(t));
  }
  stateBeforeAttrValue(t) {
    t === 34 ? (this.state = 19, this.sectionStart = this.index + 1) : t === 39 ? (this.state = 20, this.sectionStart = this.index + 1) : ne(t) || (this.sectionStart = this.index, this.state = 21, this.stateInAttrValueNoQuotes(t));
  }
  handleInAttrValue(t, n) {
    (t === n || this.fastForwardTo(n)) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(
      n === 34 ? 3 : 2,
      this.index + 1
    ), this.state = 11);
  }
  stateInAttrValueDoubleQuotes(t) {
    this.handleInAttrValue(t, 34);
  }
  stateInAttrValueSingleQuotes(t) {
    this.handleInAttrValue(t, 39);
  }
  stateInAttrValueNoQuotes(t) {
    ne(t) || t === 62 ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(1, this.index), this.state = 11, this.stateBeforeAttrName(t)) : (process.env.NODE_ENV !== "production" && t === 34 || t === 39 || t === 60 || t === 61 || t === 96) && this.cbs.onerr(
      18,
      this.index
    );
  }
  stateBeforeDeclaration(t) {
    t === 91 ? (this.state = 26, this.sequenceIndex = 0) : this.state = t === 45 ? 25 : 23;
  }
  stateInDeclaration(t) {
    (t === 62 || this.fastForwardTo(62)) && (this.state = 1, this.sectionStart = this.index + 1);
  }
  stateInProcessingInstruction(t) {
    (t === 62 || this.fastForwardTo(62)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = 1, this.sectionStart = this.index + 1);
  }
  stateBeforeComment(t) {
    t === 45 ? (this.state = 28, this.currentSequence = z.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = 23;
  }
  stateInSpecialComment(t) {
    (t === 62 || this.fastForwardTo(62)) && (this.cbs.oncomment(this.sectionStart, this.index), this.state = 1, this.sectionStart = this.index + 1);
  }
  stateBeforeSpecialS(t) {
    t === z.ScriptEnd[3] ? this.startSpecial(z.ScriptEnd, 4) : t === z.StyleEnd[3] ? this.startSpecial(z.StyleEnd, 4) : (this.state = 6, this.stateInTagName(t));
  }
  stateBeforeSpecialT(t) {
    t === z.TitleEnd[3] ? this.startSpecial(z.TitleEnd, 4) : t === z.TextareaEnd[3] ? this.startSpecial(z.TextareaEnd, 4) : (this.state = 6, this.stateInTagName(t));
  }
  startEntity() {
  }
  stateInEntity() {
  }
  /**
   * Iterates through the buffer, calling the function corresponding to the current state.
   *
   * States that are more likely to be hit are higher up, as a performance improvement.
   */
  parse(t) {
    for (this.buffer = t; this.index < this.buffer.length; ) {
      const n = this.buffer.charCodeAt(this.index);
      switch (n === 10 && this.state !== 33 && this.newlines.push(this.index), this.state) {
        case 1: {
          this.stateText(n);
          break;
        }
        case 2: {
          this.stateInterpolationOpen(n);
          break;
        }
        case 3: {
          this.stateInterpolation(n);
          break;
        }
        case 4: {
          this.stateInterpolationClose(n);
          break;
        }
        case 31: {
          this.stateSpecialStartSequence(n);
          break;
        }
        case 32: {
          this.stateInRCDATA(n);
          break;
        }
        case 26: {
          this.stateCDATASequence(n);
          break;
        }
        case 19: {
          this.stateInAttrValueDoubleQuotes(n);
          break;
        }
        case 12: {
          this.stateInAttrName(n);
          break;
        }
        case 13: {
          this.stateInDirName(n);
          break;
        }
        case 14: {
          this.stateInDirArg(n);
          break;
        }
        case 15: {
          this.stateInDynamicDirArg(n);
          break;
        }
        case 16: {
          this.stateInDirModifier(n);
          break;
        }
        case 28: {
          this.stateInCommentLike(n);
          break;
        }
        case 27: {
          this.stateInSpecialComment(n);
          break;
        }
        case 11: {
          this.stateBeforeAttrName(n);
          break;
        }
        case 6: {
          this.stateInTagName(n);
          break;
        }
        case 34: {
          this.stateInSFCRootTagName(n);
          break;
        }
        case 9: {
          this.stateInClosingTagName(n);
          break;
        }
        case 5: {
          this.stateBeforeTagName(n);
          break;
        }
        case 17: {
          this.stateAfterAttrName(n);
          break;
        }
        case 20: {
          this.stateInAttrValueSingleQuotes(n);
          break;
        }
        case 18: {
          this.stateBeforeAttrValue(n);
          break;
        }
        case 8: {
          this.stateBeforeClosingTagName(n);
          break;
        }
        case 10: {
          this.stateAfterClosingTagName(n);
          break;
        }
        case 29: {
          this.stateBeforeSpecialS(n);
          break;
        }
        case 30: {
          this.stateBeforeSpecialT(n);
          break;
        }
        case 21: {
          this.stateInAttrValueNoQuotes(n);
          break;
        }
        case 7: {
          this.stateInSelfClosingTag(n);
          break;
        }
        case 23: {
          this.stateInDeclaration(n);
          break;
        }
        case 22: {
          this.stateBeforeDeclaration(n);
          break;
        }
        case 25: {
          this.stateBeforeComment(n);
          break;
        }
        case 24: {
          this.stateInProcessingInstruction(n);
          break;
        }
        case 33: {
          this.stateInEntity();
          break;
        }
      }
      this.index++;
    }
    this.cleanup(), this.finish();
  }
  /**
   * Remove data that has already been consumed from the buffer.
   */
  cleanup() {
    this.sectionStart !== this.index && (this.state === 1 || this.state === 32 && this.sequenceIndex === 0 ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : (this.state === 19 || this.state === 20 || this.state === 21) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index));
  }
  finish() {
    this.handleTrailingData(), this.cbs.onend();
  }
  /** Handle any trailing data. */
  handleTrailingData() {
    const t = this.buffer.length;
    this.sectionStart >= t || (this.state === 28 ? this.currentSequence === z.CdataEnd ? this.cbs.oncdata(this.sectionStart, t) : this.cbs.oncomment(this.sectionStart, t) : this.state === 6 || this.state === 11 || this.state === 18 || this.state === 17 || this.state === 12 || this.state === 13 || this.state === 14 || this.state === 15 || this.state === 16 || this.state === 20 || this.state === 19 || this.state === 21 || this.state === 9 || this.cbs.ontext(this.sectionStart, t));
  }
  emitCodePoint(t, n) {
  }
}
const ka = {
  COMPILER_IS_ON_ELEMENT: {
    message: 'Platform-native elements with "is" prop will no longer be treated as components in Vue 3 unless the "is" value is explicitly prefixed with "vue:".',
    link: "https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html"
  },
  COMPILER_V_BIND_SYNC: {
    message: (e) => `.sync modifier for v-bind has been removed. Use v-model with argument instead. \`v-bind:${e}.sync\` should be changed to \`v-model:${e}\`.`,
    link: "https://v3-migration.vuejs.org/breaking-changes/v-model.html"
  },
  COMPILER_V_BIND_OBJECT_ORDER: {
    message: 'v-bind="obj" usage is now order sensitive and behaves like JavaScript object spread: it will now overwrite an existing non-mergeable attribute that appears before v-bind in the case of conflict. To retain 2.x behavior, move v-bind to make it the first attribute. You can also suppress this warning if the usage is intended.',
    link: "https://v3-migration.vuejs.org/breaking-changes/v-bind.html"
  },
  COMPILER_V_ON_NATIVE: {
    message: ".native modifier for v-on has been removed as is no longer necessary.",
    link: "https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html"
  },
  COMPILER_V_IF_V_FOR_PRECEDENCE: {
    message: "v-if / v-for precedence when used on the same element has changed in Vue 3: v-if now takes higher precedence and will no longer have access to v-for scope variables. It is best to avoid the ambiguity with <template> tags or use a computed property that filters v-for data source.",
    link: "https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html"
  },
  COMPILER_NATIVE_TEMPLATE: {
    message: "<template> with no special directives will render as a native template element instead of its inner content in Vue 3."
  },
  COMPILER_INLINE_TEMPLATE: {
    message: '"inline-template" has been removed in Vue 3.',
    link: "https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html"
  },
  COMPILER_FILTERS: {
    message: 'filters have been removed in Vue 3. The "|" symbol will be treated as native JavaScript bitwise OR operator. Use method calls or computed properties instead.',
    link: "https://v3-migration.vuejs.org/breaking-changes/filters.html"
  }
};
function wn(e, { compatConfig: t }) {
  const n = t && t[e];
  return e === "MODE" ? n || 3 : n;
}
function Ne(e, t) {
  const n = wn("MODE", t), i = wn(e, t);
  return n === 3 ? i === !0 : i !== !1;
}
function qe(e, t, n, ...i) {
  const s = Ne(e, t);
  return process.env.NODE_ENV !== "production" && s && Bt(e, t, n, ...i), s;
}
function Bt(e, t, n, ...i) {
  if (wn(e, t) === "suppress-warning")
    return;
  const { message: r, link: a } = ka[e], o = `(deprecation ${e}) ${typeof r == "function" ? r(...i) : r}${a ? `
  Details: ${a}` : ""}`, l = new SyntaxError(o);
  l.code = e, n && (l.loc = n), t.onWarn(l);
}
function Zn(e) {
  throw e;
}
function As(e) {
  process.env.NODE_ENV !== "production" && console.warn(`[Vue warn] ${e.message}`);
}
function L(e, t, n, i) {
  const s = process.env.NODE_ENV !== "production" ? (n || Ia)[e] + (i || "") : `https://vuejs.org/error-reference/#compiler-${e}`, r = new SyntaxError(String(s));
  return r.code = e, r.loc = t, r;
}
const Ia = {
  // parse errors
  0: "Illegal comment.",
  1: "CDATA section is allowed only in XML context.",
  2: "Duplicate attribute.",
  3: "End tag cannot have attributes.",
  4: "Illegal '/' in tags.",
  5: "Unexpected EOF in tag.",
  6: "Unexpected EOF in CDATA section.",
  7: "Unexpected EOF in comment.",
  8: "Unexpected EOF in script.",
  9: "Unexpected EOF in tag.",
  10: "Incorrectly closed comment.",
  11: "Incorrectly opened comment.",
  12: "Illegal tag name. Use '&lt;' to print '<'.",
  13: "Attribute value was expected.",
  14: "End tag name was expected.",
  15: "Whitespace was expected.",
  16: "Unexpected '<!--' in comment.",
  17: `Attribute name cannot contain U+0022 ("), U+0027 ('), and U+003C (<).`,
  18: "Unquoted attribute value cannot contain U+0022 (\"), U+0027 ('), U+003C (<), U+003D (=), and U+0060 (`).",
  19: "Attribute name cannot start with '='.",
  21: "'<?' is allowed only in XML context.",
  20: "Unexpected null character.",
  22: "Illegal '/' in tags.",
  // Vue-specific parse errors
  23: "Invalid end tag.",
  24: "Element is missing end tag.",
  25: "Interpolation end sign was not found.",
  27: "End bracket for dynamic directive argument was not found. Note that dynamic directive argument cannot contain spaces.",
  26: "Legal directive name was expected.",
  // transform errors
  28: "v-if/v-else-if is missing expression.",
  29: "v-if/else branches must use unique keys.",
  30: "v-else/v-else-if has no adjacent v-if or v-else-if.",
  31: "v-for is missing expression.",
  32: "v-for has invalid expression.",
  33: "<template v-for> key should be placed on the <template> tag.",
  34: "v-bind is missing expression.",
  52: "v-bind with same-name shorthand only allows static argument.",
  35: "v-on is missing expression.",
  36: "Unexpected custom directive on <slot> outlet.",
  37: "Mixed v-slot usage on both the component and nested <template>. When there are multiple named slots, all slots should use <template> syntax to avoid scope ambiguity.",
  38: "Duplicate slot names found. ",
  39: "Extraneous children found when component already has explicitly named default slot. These children will be ignored.",
  40: "v-slot can only be used on components or <template> tags.",
  41: "v-model is missing expression.",
  42: "v-model value must be a valid JavaScript member expression.",
  43: "v-model cannot be used on v-for or v-slot scope variables because they are not writable.",
  44: `v-model cannot be used on a prop, because local prop bindings are not writable.
Use a v-bind binding combined with a v-on listener that emits update:x event instead.`,
  45: "Error parsing JavaScript expression: ",
  46: "<KeepAlive> expects exactly one child component.",
  51: "@vnode-* hooks in templates are no longer supported. Use the vue: prefix instead. For example, @vnode-mounted should be changed to @vue:mounted. @vnode-* hooks support has been removed in 3.4.",
  // generic errors
  47: '"prefixIdentifiers" option is not supported in this build of compiler.',
  48: "ES module mode is not supported in this build of compiler.",
  49: '"cacheHandlers" option is only supported when the "prefixIdentifiers" option is enabled.',
  50: '"scopeId" option is only supported in module mode.',
  // just to fulfill types
  53: ""
}, Z = (e) => e.type === 4 && e.isStatic;
function Rs(e) {
  switch (e) {
    case "Teleport":
    case "teleport":
      return Ze;
    case "Suspense":
    case "suspense":
      return Ln;
    case "KeepAlive":
    case "keep-alive":
      return Mt;
    case "BaseTransition":
    case "base-transition":
      return Os;
  }
}
const Ca = /^$|^\d|[^\$\w\xA0-\uFFFF]/, ei = (e) => !Ca.test(e), Aa = /[A-Za-z_$\xA0-\uFFFF]/, Ra = /[\.\?\w$\xA0-\uFFFF]/, Da = /\s+[.[]\s*|\s*[.[]\s+/g, Ds = (e) => e.type === 4 ? e.content : e.loc.source, Pa = (e) => {
  const t = Ds(e).trim().replace(Da, (o) => o.trim());
  let n = 0, i = [], s = 0, r = 0, a = null;
  for (let o = 0; o < t.length; o++) {
    const l = t.charAt(o);
    switch (n) {
      case 0:
        if (l === "[")
          i.push(n), n = 1, s++;
        else if (l === "(")
          i.push(n), n = 2, r++;
        else if (!(o === 0 ? Aa : Ra).test(l))
          return !1;
        break;
      case 1:
        l === "'" || l === '"' || l === "`" ? (i.push(n), n = 3, a = l) : l === "[" ? s++ : l === "]" && (--s || (n = i.pop()));
        break;
      case 2:
        if (l === "'" || l === '"' || l === "`")
          i.push(n), n = 3, a = l;
        else if (l === "(")
          r++;
        else if (l === ")") {
          if (o === t.length - 1)
            return !1;
          --r || (n = i.pop());
        }
        break;
      case 3:
        l === a && (n = i.pop(), a = null);
        break;
    }
  }
  return !s && !r;
}, Ps = Pa, Ma = /^\s*(?:async\s*)?(?:\([^)]*?\)|[\w$_]+)\s*(?::[^=]+)?=>|^\s*(?:async\s+)?function(?:\s+[\w$]+)?\s*\(/, Va = (e) => Ma.test(Ds(e)), La = Va;
function Ei(e, t) {
  if (!e)
    throw new Error(t || "unexpected compiler condition");
}
function J(e, t, n = !1) {
  for (let i = 0; i < e.props.length; i++) {
    const s = e.props[i];
    if (s.type === 7 && (n || s.exp) && (q(t) ? s.name === t : t.test(s.name)))
      return s;
  }
}
function st(e, t, n = !1, i = !1) {
  for (let s = 0; s < e.props.length; s++) {
    const r = e.props[s];
    if (r.type === 6) {
      if (n) continue;
      if (r.name === t && (r.value || i))
        return r;
    } else if (r.name === "bind" && (r.exp || i) && Se(r.arg, t))
      return r;
  }
}
function Se(e, t) {
  return !!(e && Z(e) && e.content === t);
}
function $a(e) {
  return e.props.some(
    (t) => t.type === 7 && t.name === "bind" && (!t.arg || // v-bind="obj"
    t.arg.type !== 4 || // v-bind:[_ctx.foo]
    !t.arg.isStatic)
    // v-bind:[foo]
  );
}
function Yt(e) {
  return e.type === 5 || e.type === 2;
}
function wi(e) {
  return e.type === 7 && e.name === "pre";
}
function Ba(e) {
  return e.type === 7 && e.name === "slot";
}
function jt(e) {
  return e.type === 1 && e.tagType === 3;
}
function Ft(e) {
  return e.type === 1 && e.tagType === 2;
}
const ja = /* @__PURE__ */ new Set([nt, ct]);
function Ms(e, t = []) {
  if (e && !q(e) && e.type === 14) {
    const n = e.callee;
    if (!q(n) && ja.has(n))
      return Ms(
        e.arguments[0],
        t.concat(e)
      );
  }
  return [e, t];
}
function Ut(e, t, n) {
  let i, s = e.type === 13 ? e.props : e.arguments[2], r = [], a;
  if (s && !q(s) && s.type === 14) {
    const o = Ms(s);
    s = o[0], r = o[1], a = r[r.length - 1];
  }
  if (s == null || q(s))
    i = ae([t]);
  else if (s.type === 14) {
    const o = s.arguments[0];
    !q(o) && o.type === 15 ? Si(t, o) || o.properties.unshift(t) : s.callee === Xn ? i = K(n.helper(Vt), [
      ae([t]),
      s
    ]) : s.arguments.unshift(ae([t])), !i && (i = s);
  } else s.type === 15 ? (Si(t, s) || s.properties.unshift(t), i = s) : (i = K(n.helper(Vt), [
    ae([t]),
    s
  ]), a && a.callee === ct && (a = r[r.length - 2]));
  e.type === 13 ? a ? a.arguments[0] = i : e.props = i : a ? a.arguments[0] = i : e.arguments[2] = i;
}
function Si(e, t) {
  let n = !1;
  if (e.key.type === 4) {
    const i = e.key.content;
    n = t.properties.some(
      (s) => s.key.type === 4 && s.key.content === i
    );
  }
  return n;
}
function rt(e, t) {
  return `_${t}_${e.replace(/[^\w]/g, (n, i) => n === "-" ? "_" : e.charCodeAt(i).toString())}`;
}
function Fa(e) {
  return e.type === 14 && e.callee === Yn ? e.arguments[1].returns : e;
}
const Ua = /([\s\S]*?)\s+(?:in|of)\s+(\S[\s\S]*)/, Vs = {
  parseMode: "base",
  ns: 0,
  delimiters: ["{{", "}}"],
  getNamespace: () => 0,
  isVoidTag: dt,
  isPreTag: dt,
  isIgnoreNewlineTag: dt,
  isCustomElement: dt,
  onError: Zn,
  onWarn: As,
  comments: process.env.NODE_ENV !== "production",
  prefixIdentifiers: !1
};
let M = Vs, at = null, ge = "", G = null, P = null, Y = "", be = -1, xe = -1, ti = 0, Ee = !1, Sn = null;
const j = [], $ = new xa(j, {
  onerr: Q,
  ontext(e, t) {
    mt(H(e, t), e, t);
  },
  ontextentity(e, t, n) {
    mt(e, t, n);
  },
  oninterpolation(e, t) {
    if (Ee)
      return mt(H(e, t), e, t);
    let n = e + $.delimiterOpen.length, i = t - $.delimiterClose.length;
    for (; ne(ge.charCodeAt(n)); )
      n++;
    for (; ne(ge.charCodeAt(i - 1)); )
      i--;
    let s = H(n, i);
    s.includes("&") && (s = M.decodeEntities(s, !1)), On({
      type: 5,
      content: kt(s, !1, F(n, i)),
      loc: F(e, t)
    });
  },
  onopentagname(e, t) {
    const n = H(e, t);
    G = {
      type: 1,
      tag: n,
      ns: M.getNamespace(n, j[0], M.ns),
      tagType: 0,
      // will be refined on tag close
      props: [],
      children: [],
      loc: F(e - 1, t),
      codegenNode: void 0
    };
  },
  onopentagend(e) {
    Ti(e);
  },
  onclosetag(e, t) {
    const n = H(e, t);
    if (!M.isVoidTag(n)) {
      let i = !1;
      for (let s = 0; s < j.length; s++)
        if (j[s].tag.toLowerCase() === n.toLowerCase()) {
          i = !0, s > 0 && Q(24, j[0].loc.start.offset);
          for (let a = 0; a <= s; a++) {
            const o = j.shift();
            xt(o, t, a < s);
          }
          break;
        }
      i || Q(23, Ls(e, 60));
    }
  },
  onselfclosingtag(e) {
    const t = G.tag;
    G.isSelfClosing = !0, Ti(e), j[0] && j[0].tag === t && xt(j.shift(), e);
  },
  onattribname(e, t) {
    P = {
      type: 6,
      name: H(e, t),
      nameLoc: F(e, t),
      value: void 0,
      loc: F(e)
    };
  },
  ondirname(e, t) {
    const n = H(e, t), i = n === "." || n === ":" ? "bind" : n === "@" ? "on" : n === "#" ? "slot" : n.slice(2);
    if (!Ee && i === "" && Q(26, e), Ee || i === "")
      P = {
        type: 6,
        name: n,
        nameLoc: F(e, t),
        value: void 0,
        loc: F(e)
      };
    else if (P = {
      type: 7,
      name: i,
      rawName: n,
      exp: void 0,
      arg: void 0,
      modifiers: n === "." ? [D("prop")] : [],
      loc: F(e)
    }, i === "pre") {
      Ee = $.inVPre = !0, Sn = G;
      const s = G.props;
      for (let r = 0; r < s.length; r++)
        s[r].type === 7 && (s[r] = Za(s[r]));
    }
  },
  ondirarg(e, t) {
    if (e === t) return;
    const n = H(e, t);
    if (Ee && !wi(P))
      P.name += n, Ce(P.nameLoc, t);
    else {
      const i = n[0] !== "[";
      P.arg = kt(
        i ? n : n.slice(1, -1),
        i,
        F(e, t),
        i ? 3 : 0
      );
    }
  },
  ondirmodifier(e, t) {
    const n = H(e, t);
    if (Ee && !wi(P))
      P.name += "." + n, Ce(P.nameLoc, t);
    else if (P.name === "slot") {
      const i = P.arg;
      i && (i.content += "." + n, Ce(i.loc, t));
    } else {
      const i = D(n, !0, F(e, t));
      P.modifiers.push(i);
    }
  },
  onattribdata(e, t) {
    Y += H(e, t), be < 0 && (be = e), xe = t;
  },
  onattribentity(e, t, n) {
    Y += e, be < 0 && (be = t), xe = n;
  },
  onattribnameend(e) {
    const t = P.loc.start.offset, n = H(t, e);
    P.type === 7 && (P.rawName = n), G.props.some(
      (i) => (i.type === 7 ? i.rawName : i.name) === n
    ) && Q(2, t);
  },
  onattribend(e, t) {
    if (G && P) {
      if (Ce(P.loc, t), e !== 0)
        if (Y.includes("&") && (Y = M.decodeEntities(
          Y,
          !0
        )), P.type === 6)
          P.name === "class" && (Y = Bs(Y).trim()), e === 1 && !Y && Q(13, t), P.value = {
            type: 2,
            content: Y,
            loc: e === 1 ? F(be, xe) : F(be - 1, xe + 1)
          }, $.inSFCRoot && G.tag === "template" && P.name === "lang" && Y && Y !== "html" && $.enterRCDATA($t("</template"), 0);
        else {
          let n = 0;
          P.exp = kt(
            Y,
            !1,
            F(be, xe),
            0,
            n
          ), P.name === "for" && (P.forParseResult = Ka(P.exp));
          let i = -1;
          P.name === "bind" && (i = P.modifiers.findIndex(
            (s) => s.content === "sync"
          )) > -1 && qe(
            "COMPILER_V_BIND_SYNC",
            M,
            P.loc,
            P.arg.loc.source
          ) && (P.name = "model", P.modifiers.splice(i, 1));
        }
      (P.type !== 7 || P.name !== "pre") && G.props.push(P);
    }
    Y = "", be = xe = -1;
  },
  oncomment(e, t) {
    M.comments && On({
      type: 3,
      content: H(e, t),
      loc: F(e - 4, t + 3)
    });
  },
  onend() {
    const e = ge.length;
    if (process.env.NODE_ENV !== "production" && $.state !== 1)
      switch ($.state) {
        case 5:
        case 8:
          Q(5, e);
          break;
        case 3:
        case 4:
          Q(
            25,
            $.sectionStart
          );
          break;
        case 28:
          $.currentSequence === z.CdataEnd ? Q(6, e) : Q(7, e);
          break;
        case 6:
        case 7:
        case 9:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        // "
        case 20:
        // '
        case 21:
          Q(9, e);
          break;
      }
    for (let t = 0; t < j.length; t++)
      xt(j[t], e - 1), Q(24, j[t].loc.start.offset);
  },
  oncdata(e, t) {
    j[0].ns !== 0 ? mt(H(e, t), e, t) : Q(1, e - 9);
  },
  onprocessinginstruction(e) {
    (j[0] ? j[0].ns : M.ns) === 0 && Q(
      21,
      e - 1
    );
  }
}), Oi = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/, Wa = /^\(|\)$/g;
function Ka(e) {
  const t = e.loc, n = e.content, i = n.match(Ua);
  if (!i) return;
  const [, s, r] = i, a = (p, m, E = !1) => {
    const S = t.start.offset + m, T = S + p.length;
    return kt(
      p,
      !1,
      F(S, T),
      0,
      E ? 1 : 0
      /* Normal */
    );
  }, o = {
    source: a(r.trim(), n.indexOf(r, s.length)),
    value: void 0,
    key: void 0,
    index: void 0,
    finalized: !1
  };
  let l = s.trim().replace(Wa, "").trim();
  const f = s.indexOf(l), _ = l.match(Oi);
  if (_) {
    l = l.replace(Oi, "").trim();
    const p = _[1].trim();
    let m;
    if (p && (m = n.indexOf(p, f + l.length), o.key = a(p, m, !0)), _[2]) {
      const E = _[2].trim();
      E && (o.index = a(
        E,
        n.indexOf(
          E,
          o.key ? m + p.length : f + l.length
        ),
        !0
      ));
    }
  }
  return l && (o.value = a(l, f, !0)), o;
}
function H(e, t) {
  return ge.slice(e, t);
}
function Ti(e) {
  $.inSFCRoot && (G.innerLoc = F(e + 1, e + 1)), On(G);
  const { tag: t, ns: n } = G;
  n === 0 && M.isPreTag(t) && ti++, M.isVoidTag(t) ? xt(G, e) : (j.unshift(G), (n === 1 || n === 2) && ($.inXML = !0)), G = null;
}
function mt(e, t, n) {
  {
    const r = j[0] && j[0].tag;
    r !== "script" && r !== "style" && e.includes("&") && (e = M.decodeEntities(e, !1));
  }
  const i = j[0] || at, s = i.children[i.children.length - 1];
  s && s.type === 2 ? (s.content += e, Ce(s.loc, n)) : i.children.push({
    type: 2,
    content: e,
    loc: F(t, n)
  });
}
function xt(e, t, n = !1) {
  n ? Ce(e.loc, Ls(t, 60)) : Ce(e.loc, qa(t, 62) + 1), $.inSFCRoot && (e.children.length ? e.innerLoc.end = Oe({}, e.children[e.children.length - 1].loc.end) : e.innerLoc.end = Oe({}, e.innerLoc.start), e.innerLoc.source = H(
    e.innerLoc.start.offset,
    e.innerLoc.end.offset
  ));
  const { tag: i, ns: s, children: r } = e;
  if (Ee || (i === "slot" ? e.tagType = 2 : Ni(e) ? e.tagType = 3 : Ha(e) && (e.tagType = 1)), $.inRCDATA || (e.children = $s(r)), s === 0 && M.isIgnoreNewlineTag(i)) {
    const a = r[0];
    a && a.type === 2 && (a.content = a.content.replace(/^\r?\n/, ""));
  }
  s === 0 && M.isPreTag(i) && ti--, Sn === e && (Ee = $.inVPre = !1, Sn = null), $.inXML && (j[0] ? j[0].ns : M.ns) === 0 && ($.inXML = !1);
  {
    const a = e.props;
    if (process.env.NODE_ENV !== "production" && Ne(
      "COMPILER_V_IF_V_FOR_PRECEDENCE",
      M
    )) {
      let l = !1, f = !1;
      for (let _ = 0; _ < a.length; _++) {
        const p = a[_];
        if (p.type === 7 && (p.name === "if" ? l = !0 : p.name === "for" && (f = !0)), l && f) {
          Bt(
            "COMPILER_V_IF_V_FOR_PRECEDENCE",
            M,
            e.loc
          );
          break;
        }
      }
    }
    if (!$.inSFCRoot && Ne(
      "COMPILER_NATIVE_TEMPLATE",
      M
    ) && e.tag === "template" && !Ni(e)) {
      process.env.NODE_ENV !== "production" && Bt(
        "COMPILER_NATIVE_TEMPLATE",
        M,
        e.loc
      );
      const l = j[0] || at, f = l.children.indexOf(e);
      l.children.splice(f, 1, ...e.children);
    }
    const o = a.find(
      (l) => l.type === 6 && l.name === "inline-template"
    );
    o && qe(
      "COMPILER_INLINE_TEMPLATE",
      M,
      o.loc
    ) && e.children.length && (o.value = {
      type: 2,
      content: H(
        e.children[0].loc.start.offset,
        e.children[e.children.length - 1].loc.end.offset
      ),
      loc: o.loc
    });
  }
}
function qa(e, t) {
  let n = e;
  for (; ge.charCodeAt(n) !== t && n < ge.length - 1; ) n++;
  return n;
}
function Ls(e, t) {
  let n = e;
  for (; ge.charCodeAt(n) !== t && n >= 0; ) n--;
  return n;
}
const za = /* @__PURE__ */ new Set(["if", "else", "else-if", "for", "slot"]);
function Ni({ tag: e, props: t }) {
  if (e === "template") {
    for (let n = 0; n < t.length; n++)
      if (t[n].type === 7 && za.has(t[n].name))
        return !0;
  }
  return !1;
}
function Ha({ tag: e, props: t }) {
  if (M.isCustomElement(e))
    return !1;
  if (e === "component" || Ga(e.charCodeAt(0)) || Rs(e) || M.isBuiltInComponent && M.isBuiltInComponent(e) || M.isNativeTag && !M.isNativeTag(e))
    return !0;
  for (let n = 0; n < t.length; n++) {
    const i = t[n];
    if (i.type === 6) {
      if (i.name === "is" && i.value) {
        if (i.value.content.startsWith("vue:"))
          return !0;
        if (qe(
          "COMPILER_IS_ON_ELEMENT",
          M,
          i.loc
        ))
          return !0;
      }
    } else if (
      // :is on plain element - only treat as component in compat mode
      i.name === "bind" && Se(i.arg, "is") && qe(
        "COMPILER_IS_ON_ELEMENT",
        M,
        i.loc
      )
    )
      return !0;
  }
  return !1;
}
function Ga(e) {
  return e > 64 && e < 91;
}
const Xa = /\r\n/g;
function $s(e) {
  const t = M.whitespace !== "preserve";
  let n = !1;
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if (s.type === 2)
      if (ti)
        s.content = s.content.replace(Xa, `
`);
      else if (Qa(s.content)) {
        const r = e[i - 1] && e[i - 1].type, a = e[i + 1] && e[i + 1].type;
        !r || !a || t && (r === 3 && (a === 3 || a === 1) || r === 1 && (a === 3 || a === 1 && Ya(s.content))) ? (n = !0, e[i] = null) : s.content = " ";
      } else t && (s.content = Bs(s.content));
  }
  return n ? e.filter(Boolean) : e;
}
function Qa(e) {
  for (let t = 0; t < e.length; t++)
    if (!ne(e.charCodeAt(t)))
      return !1;
  return !0;
}
function Ya(e) {
  for (let t = 0; t < e.length; t++) {
    const n = e.charCodeAt(t);
    if (n === 10 || n === 13)
      return !0;
  }
  return !1;
}
function Bs(e) {
  let t = "", n = !1;
  for (let i = 0; i < e.length; i++)
    ne(e.charCodeAt(i)) ? n || (t += " ", n = !0) : (t += e[i], n = !1);
  return t;
}
function On(e) {
  (j[0] || at).children.push(e);
}
function F(e, t) {
  return {
    start: $.getPos(e),
    // @ts-expect-error allow late attachment
    end: t == null ? t : $.getPos(t),
    // @ts-expect-error allow late attachment
    source: t == null ? t : H(e, t)
  };
}
function Ja(e) {
  return F(e.start.offset, e.end.offset);
}
function Ce(e, t) {
  e.end = $.getPos(t), e.source = H(e.start.offset, t);
}
function Za(e) {
  const t = {
    type: 6,
    name: e.rawName,
    nameLoc: F(
      e.loc.start.offset,
      e.loc.start.offset + e.rawName.length
    ),
    value: void 0,
    loc: e.loc
  };
  if (e.exp) {
    const n = e.exp.loc;
    n.end.offset < e.loc.end.offset && (n.start.offset--, n.start.column--, n.end.offset++, n.end.column++), t.value = {
      type: 2,
      content: e.exp.content,
      loc: n
    };
  }
  return t;
}
function kt(e, t = !1, n, i = 0, s = 0) {
  return D(e, t, n, i);
}
function Q(e, t, n) {
  M.onError(
    L(e, F(t, t), void 0, n)
  );
}
function eo() {
  $.reset(), G = null, P = null, Y = "", be = -1, xe = -1, j.length = 0;
}
function to(e, t) {
  if (eo(), ge = e, M = Oe({}, Vs), t) {
    let s;
    for (s in t)
      t[s] != null && (M[s] = t[s]);
  }
  if (process.env.NODE_ENV !== "production" && !M.decodeEntities)
    throw new Error(
      "[@vue/compiler-core] decodeEntities option is required in browser builds."
    );
  $.mode = M.parseMode === "html" ? 1 : M.parseMode === "sfc" ? 2 : 0, $.inXML = M.ns === 1 || M.ns === 2;
  const n = t && t.delimiters;
  n && ($.delimiterOpen = $t(n[0]), $.delimiterClose = $t(n[1]));
  const i = at = Oa([], e);
  return $.parse(ge), i.loc = F(0, e.length), i.children = $s(i.children), at = null, i;
}
function no(e, t) {
  It(
    e,
    void 0,
    t,
    // Root node is unfortunately non-hoistable due to potential parent
    // fallthrough attributes.
    !!js(e)
  );
}
function js(e) {
  const t = e.children.filter((n) => n.type !== 3);
  return t.length === 1 && t[0].type === 1 && !Ft(t[0]) ? t[0] : null;
}
function It(e, t, n, i = !1, s = !1) {
  const { children: r } = e, a = [];
  for (let _ = 0; _ < r.length; _++) {
    const p = r[_];
    if (p.type === 1 && p.tagType === 0) {
      const m = i ? 0 : ie(p, n);
      if (m > 0) {
        if (m >= 2) {
          p.codegenNode.patchFlag = -1, a.push(p);
          continue;
        }
      } else {
        const E = p.codegenNode;
        if (E.type === 13) {
          const S = E.patchFlag;
          if ((S === void 0 || S === 512 || S === 1) && Us(p, n) >= 2) {
            const T = Ws(p);
            T && (E.props = n.hoist(T));
          }
          E.dynamicProps && (E.dynamicProps = n.hoist(E.dynamicProps));
        }
      }
    } else if (p.type === 12 && (i ? 0 : ie(p, n)) >= 2) {
      p.codegenNode.type === 14 && p.codegenNode.arguments.length > 0 && p.codegenNode.arguments.push(
        -1 + (process.env.NODE_ENV !== "production" ? ` /* ${Je[-1]} */` : "")
      ), a.push(p);
      continue;
    }
    if (p.type === 1) {
      const m = p.tagType === 1;
      m && n.scopes.vSlot++, It(p, e, n, !1, s), m && n.scopes.vSlot--;
    } else if (p.type === 11)
      It(p, e, n, p.children.length === 1, !0);
    else if (p.type === 9)
      for (let m = 0; m < p.branches.length; m++)
        It(
          p.branches[m],
          e,
          n,
          p.branches[m].children.length === 1,
          s
        );
  }
  let o = !1;
  if (a.length === r.length && e.type === 1) {
    if (e.tagType === 0 && e.codegenNode && e.codegenNode.type === 13 && ve(e.codegenNode.children))
      e.codegenNode.children = l(
        Re(e.codegenNode.children)
      ), o = !0;
    else if (e.tagType === 1 && e.codegenNode && e.codegenNode.type === 13 && e.codegenNode.children && !ve(e.codegenNode.children) && e.codegenNode.children.type === 15) {
      const _ = f(e.codegenNode, "default");
      _ && (_.returns = l(
        Re(_.returns)
      ), o = !0);
    } else if (e.tagType === 3 && t && t.type === 1 && t.tagType === 1 && t.codegenNode && t.codegenNode.type === 13 && t.codegenNode.children && !ve(t.codegenNode.children) && t.codegenNode.children.type === 15) {
      const _ = J(e, "slot", !0), p = _ && _.arg && f(t.codegenNode, _.arg);
      p && (p.returns = l(
        Re(p.returns)
      ), o = !0);
    }
  }
  if (!o)
    for (const _ of a)
      _.codegenNode = n.cache(_.codegenNode);
  function l(_) {
    const p = n.cache(_);
    return p.needArraySpread = !0, p;
  }
  function f(_, p) {
    if (_.children && !ve(_.children) && _.children.type === 15) {
      const m = _.children.properties.find(
        (E) => E.key === p || E.key.content === p
      );
      return m && m.value;
    }
  }
  a.length && n.transformHoist && n.transformHoist(r, n, e);
}
function ie(e, t) {
  const { constantCache: n } = t;
  switch (e.type) {
    case 1:
      if (e.tagType !== 0)
        return 0;
      const i = n.get(e);
      if (i !== void 0)
        return i;
      const s = e.codegenNode;
      if (s.type !== 13 || s.isBlock && e.tag !== "svg" && e.tag !== "foreignObject" && e.tag !== "math")
        return 0;
      if (s.patchFlag === void 0) {
        let a = 3;
        const o = Us(e, t);
        if (o === 0)
          return n.set(e, 0), 0;
        o < a && (a = o);
        for (let l = 0; l < e.children.length; l++) {
          const f = ie(e.children[l], t);
          if (f === 0)
            return n.set(e, 0), 0;
          f < a && (a = f);
        }
        if (a > 1)
          for (let l = 0; l < e.props.length; l++) {
            const f = e.props[l];
            if (f.type === 7 && f.name === "bind" && f.exp) {
              const _ = ie(f.exp, t);
              if (_ === 0)
                return n.set(e, 0), 0;
              _ < a && (a = _);
            }
          }
        if (s.isBlock) {
          for (let l = 0; l < e.props.length; l++)
            if (e.props[l].type === 7)
              return n.set(e, 0), 0;
          t.removeHelper(Pe), t.removeHelper(
            Ke(t.inSSR, s.isComponent)
          ), s.isBlock = !1, t.helper(We(t.inSSR, s.isComponent));
        }
        return n.set(e, a), a;
      } else
        return n.set(e, 0), 0;
    case 2:
    case 3:
      return 3;
    case 9:
    case 11:
    case 10:
      return 0;
    case 5:
    case 12:
      return ie(e.content, t);
    case 4:
      return e.constType;
    case 8:
      let r = 3;
      for (let a = 0; a < e.children.length; a++) {
        const o = e.children[a];
        if (q(o) || Pn(o))
          continue;
        const l = ie(o, t);
        if (l === 0)
          return 0;
        l < r && (r = l);
      }
      return r;
    case 20:
      return 2;
    default:
      return process.env.NODE_ENV, 0;
  }
}
const io = /* @__PURE__ */ new Set([
  Hn,
  Gn,
  nt,
  ct
]);
function Fs(e, t) {
  if (e.type === 14 && !q(e.callee) && io.has(e.callee)) {
    const n = e.arguments[0];
    if (n.type === 4)
      return ie(n, t);
    if (n.type === 14)
      return Fs(n, t);
  }
  return 0;
}
function Us(e, t) {
  let n = 3;
  const i = Ws(e);
  if (i && i.type === 15) {
    const { properties: s } = i;
    for (let r = 0; r < s.length; r++) {
      const { key: a, value: o } = s[r], l = ie(a, t);
      if (l === 0)
        return l;
      l < n && (n = l);
      let f;
      if (o.type === 4 ? f = ie(o, t) : o.type === 14 ? f = Fs(o, t) : f = 0, f === 0)
        return f;
      f < n && (n = f);
    }
  }
  return n;
}
function Ws(e) {
  const t = e.codegenNode;
  if (t.type === 13)
    return t.props;
}
function so(e, {
  filename: t = "",
  prefixIdentifiers: n = !1,
  hoistStatic: i = !1,
  hmr: s = !1,
  cacheHandlers: r = !1,
  nodeTransforms: a = [],
  directiveTransforms: o = {},
  transformHoist: l = null,
  isBuiltInComponent: f = Nt,
  isCustomElement: _ = Nt,
  expressionPlugins: p = [],
  scopeId: m = null,
  slotted: E = !0,
  ssr: S = !1,
  inSSR: T = !1,
  ssrCssVars: h = "",
  bindingMetadata: c = ws,
  inline: b = !1,
  isTS: k = !1,
  onError: N = Zn,
  onWarn: I = As,
  compatConfig: y
}) {
  const O = t.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/), d = {
    // options
    filename: t,
    selfName: O && Vn(Te(O[1])),
    prefixIdentifiers: n,
    hoistStatic: i,
    hmr: s,
    cacheHandlers: r,
    nodeTransforms: a,
    directiveTransforms: o,
    transformHoist: l,
    isBuiltInComponent: f,
    isCustomElement: _,
    expressionPlugins: p,
    scopeId: m,
    slotted: E,
    ssr: S,
    inSSR: T,
    ssrCssVars: h,
    bindingMetadata: c,
    inline: b,
    isTS: k,
    onError: N,
    onWarn: I,
    compatConfig: y,
    // state
    root: e,
    helpers: /* @__PURE__ */ new Map(),
    components: /* @__PURE__ */ new Set(),
    directives: /* @__PURE__ */ new Set(),
    hoists: [],
    imports: [],
    cached: [],
    constantCache: /* @__PURE__ */ new WeakMap(),
    temps: 0,
    identifiers: /* @__PURE__ */ Object.create(null),
    scopes: {
      vFor: 0,
      vSlot: 0,
      vPre: 0,
      vOnce: 0
    },
    parent: null,
    grandParent: null,
    currentNode: e,
    childIndex: 0,
    inVOnce: !1,
    // methods
    helper(w) {
      const u = d.helpers.get(w) || 0;
      return d.helpers.set(w, u + 1), w;
    },
    removeHelper(w) {
      const u = d.helpers.get(w);
      if (u) {
        const g = u - 1;
        g ? d.helpers.set(w, g) : d.helpers.delete(w);
      }
    },
    helperString(w) {
      return `_${Fe[d.helper(w)]}`;
    },
    replaceNode(w) {
      if (process.env.NODE_ENV !== "production") {
        if (!d.currentNode)
          throw new Error("Node being replaced is already removed.");
        if (!d.parent)
          throw new Error("Cannot replace root node.");
      }
      d.parent.children[d.childIndex] = d.currentNode = w;
    },
    removeNode(w) {
      if (process.env.NODE_ENV !== "production" && !d.parent)
        throw new Error("Cannot remove root node.");
      const u = d.parent.children, g = w ? u.indexOf(w) : d.currentNode ? d.childIndex : -1;
      if (process.env.NODE_ENV !== "production" && g < 0)
        throw new Error("node being removed is not a child of current parent");
      !w || w === d.currentNode ? (d.currentNode = null, d.onNodeRemoved()) : d.childIndex > g && (d.childIndex--, d.onNodeRemoved()), d.parent.children.splice(g, 1);
    },
    onNodeRemoved: Nt,
    addIdentifiers(w) {
    },
    removeIdentifiers(w) {
    },
    hoist(w) {
      q(w) && (w = D(w)), d.hoists.push(w);
      const u = D(
        `_hoisted_${d.hoists.length}`,
        !1,
        w.loc,
        2
      );
      return u.hoisted = w, u;
    },
    cache(w, u = !1, g = !1) {
      const v = Ta(
        d.cached.length,
        w,
        u,
        g
      );
      return d.cached.push(v), v;
    }
  };
  return d.filters = /* @__PURE__ */ new Set(), d;
}
function ro(e, t) {
  const n = so(e, t);
  Ht(e, n), t.hoistStatic && no(e, n), t.ssr || ao(e, n), e.helpers = /* @__PURE__ */ new Set([...n.helpers.keys()]), e.components = [...n.components], e.directives = [...n.directives], e.imports = n.imports, e.hoists = n.hoists, e.temps = n.temps, e.cached = n.cached, e.transformed = !0, e.filters = [...n.filters];
}
function ao(e, t) {
  const { helper: n } = t, { children: i } = e;
  if (i.length === 1) {
    const s = js(e);
    if (s && s.codegenNode) {
      const r = s.codegenNode;
      r.type === 13 && Jn(r, t), e.codegenNode = r;
    } else
      e.codegenNode = i[0];
  } else if (i.length > 1) {
    let s = 64;
    process.env.NODE_ENV !== "production" && i.filter((r) => r.type !== 3).length === 1 && (s |= 2048), e.codegenNode = it(
      t,
      n(tt),
      void 0,
      e.children,
      s,
      void 0,
      void 0,
      !0,
      void 0,
      !1
    );
  }
}
function oo(e, t) {
  let n = 0;
  const i = () => {
    n--;
  };
  for (; n < e.children.length; n++) {
    const s = e.children[n];
    q(s) || (t.grandParent = t.parent, t.parent = e, t.childIndex = n, t.onNodeRemoved = i, Ht(s, t));
  }
}
function Ht(e, t) {
  t.currentNode = e;
  const { nodeTransforms: n } = t, i = [];
  for (let r = 0; r < n.length; r++) {
    const a = n[r](e, t);
    if (a && (ve(a) ? i.push(...a) : i.push(a)), t.currentNode)
      e = t.currentNode;
    else
      return;
  }
  switch (e.type) {
    case 3:
      t.ssr || t.helper(ut);
      break;
    case 5:
      t.ssr || t.helper(zt);
      break;
    // for container types, further traverse downwards
    case 9:
      for (let r = 0; r < e.branches.length; r++)
        Ht(e.branches[r], t);
      break;
    case 10:
    case 11:
    case 1:
    case 0:
      oo(e, t);
      break;
  }
  t.currentNode = e;
  let s = i.length;
  for (; s--; )
    i[s]();
}
function Ks(e, t) {
  const n = q(e) ? (i) => i === e : (i) => e.test(i);
  return (i, s) => {
    if (i.type === 1) {
      const { props: r } = i;
      if (i.tagType === 3 && r.some(Ba))
        return;
      const a = [];
      for (let o = 0; o < r.length; o++) {
        const l = r[o];
        if (l.type === 7 && n(l.name)) {
          r.splice(o, 1), o--;
          const f = t(i, l, s);
          f && a.push(f);
        }
      }
      return a;
    }
  };
}
const Gt = "/*@__PURE__*/", qs = (e) => `${Fe[e]}: _${Fe[e]}`;
function lo(e, {
  mode: t = "function",
  prefixIdentifiers: n = t === "module",
  sourceMap: i = !1,
  filename: s = "template.vue.html",
  scopeId: r = null,
  optimizeImports: a = !1,
  runtimeGlobalName: o = "Vue",
  runtimeModuleName: l = "vue",
  ssrRuntimeModuleName: f = "vue/server-renderer",
  ssr: _ = !1,
  isTS: p = !1,
  inSSR: m = !1
}) {
  const E = {
    mode: t,
    prefixIdentifiers: n,
    sourceMap: i,
    filename: s,
    scopeId: r,
    optimizeImports: a,
    runtimeGlobalName: o,
    runtimeModuleName: l,
    ssrRuntimeModuleName: f,
    ssr: _,
    isTS: p,
    inSSR: m,
    source: e.source,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    indentLevel: 0,
    pure: !1,
    map: void 0,
    helper(T) {
      return `_${Fe[T]}`;
    },
    push(T, h = -2, c) {
      E.code += T;
    },
    indent() {
      S(++E.indentLevel);
    },
    deindent(T = !1) {
      T ? --E.indentLevel : S(--E.indentLevel);
    },
    newline() {
      S(E.indentLevel);
    }
  };
  function S(T) {
    E.push(
      `
` + "  ".repeat(T),
      0
      /* Start */
    );
  }
  return E;
}
function uo(e, t = {}) {
  const n = lo(e, t);
  t.onContextCreated && t.onContextCreated(n);
  const {
    mode: i,
    push: s,
    prefixIdentifiers: r,
    indent: a,
    deindent: o,
    newline: l,
    scopeId: f,
    ssr: _
  } = n, p = Array.from(e.helpers), m = p.length > 0, E = !r && i !== "module";
  co(e, n);
  const T = _ ? "ssrRender" : "render", c = (_ ? ["_ctx", "_push", "_parent", "_attrs"] : ["_ctx", "_cache"]).join(", ");
  if (s(`function ${T}(${c}) {`), a(), E && (s("with (_ctx) {"), a(), m && (s(
    `const { ${p.map(qs).join(", ")} } = _Vue
`,
    -1
    /* End */
  ), l())), e.components.length && (Jt(e.components, "component", n), (e.directives.length || e.temps > 0) && l()), e.directives.length && (Jt(e.directives, "directive", n), e.temps > 0 && l()), e.filters && e.filters.length && (l(), Jt(e.filters, "filter", n), l()), e.temps > 0) {
    s("let ");
    for (let b = 0; b < e.temps; b++)
      s(`${b > 0 ? ", " : ""}_temp${b}`);
  }
  return (e.components.length || e.directives.length || e.temps) && (s(
    `
`,
    0
    /* Start */
  ), l()), _ || s("return "), e.codegenNode ? X(e.codegenNode, n) : s("null"), E && (o(), s("}")), o(), s("}"), {
    ast: e,
    code: n.code,
    preamble: "",
    map: n.map ? n.map.toJSON() : void 0
  };
}
function co(e, t) {
  const {
    ssr: n,
    prefixIdentifiers: i,
    push: s,
    newline: r,
    runtimeModuleName: a,
    runtimeGlobalName: o,
    ssrRuntimeModuleName: l
  } = t, f = o, _ = Array.from(e.helpers);
  if (_.length > 0 && (s(
    `const _Vue = ${f}
`,
    -1
    /* End */
  ), e.hoists.length)) {
    const p = [
      $n,
      Bn,
      ut,
      jn,
      xs
    ].filter((m) => _.includes(m)).map(qs).join(", ");
    s(
      `const { ${p} } = _Vue
`,
      -1
      /* End */
    );
  }
  fo(e.hoists, t), r(), s("return ");
}
function Jt(e, t, { helper: n, push: i, newline: s, isTS: r }) {
  const a = n(
    t === "filter" ? Kn : t === "component" ? Fn : Wn
  );
  for (let o = 0; o < e.length; o++) {
    let l = e[o];
    const f = l.endsWith("__self");
    f && (l = l.slice(0, -6)), i(
      `const ${rt(l, t)} = ${a}(${JSON.stringify(l)}${f ? ", true" : ""})${r ? "!" : ""}`
    ), o < e.length - 1 && s();
  }
}
function fo(e, t) {
  if (!e.length)
    return;
  t.pure = !0;
  const { push: n, newline: i } = t;
  i();
  for (let s = 0; s < e.length; s++) {
    const r = e[s];
    r && (n(`const _hoisted_${s + 1} = `), X(r, t), i());
  }
  t.pure = !1;
}
function po(e) {
  return q(e) || e.type === 4 || e.type === 2 || e.type === 5 || e.type === 8;
}
function ni(e, t) {
  const n = e.length > 3 || process.env.NODE_ENV !== "production" && e.some((i) => ve(i) || !po(i));
  t.push("["), n && t.indent(), ft(e, t, n), n && t.deindent(), t.push("]");
}
function ft(e, t, n = !1, i = !0) {
  const { push: s, newline: r } = t;
  for (let a = 0; a < e.length; a++) {
    const o = e[a];
    q(o) ? s(
      o,
      -3
      /* Unknown */
    ) : ve(o) ? ni(o, t) : X(o, t), a < e.length - 1 && (n ? (i && s(","), r()) : i && s(", "));
  }
}
function X(e, t) {
  if (q(e)) {
    t.push(
      e,
      -3
      /* Unknown */
    );
    return;
  }
  if (Pn(e)) {
    t.push(t.helper(e));
    return;
  }
  switch (e.type) {
    case 1:
    case 9:
    case 11:
      process.env.NODE_ENV !== "production" && Ei(
        e.codegenNode != null,
        "Codegen node is missing for element/if/for node. Apply appropriate transforms first."
      ), X(e.codegenNode, t);
      break;
    case 2:
      _o(e, t);
      break;
    case 4:
      zs(e, t);
      break;
    case 5:
      ho(e, t);
      break;
    case 12:
      X(e.codegenNode, t);
      break;
    case 8:
      Hs(e, t);
      break;
    case 3:
      bo(e, t);
      break;
    case 13:
      vo(e, t);
      break;
    case 14:
      yo(e, t);
      break;
    case 15:
      Eo(e, t);
      break;
    case 17:
      wo(e, t);
      break;
    case 18:
      So(e, t);
      break;
    case 19:
      Oo(e, t);
      break;
    case 20:
      To(e, t);
      break;
    case 21:
      ft(e.body, t, !0, !1);
      break;
    // SSR only types
    case 22:
      break;
    case 23:
      break;
    case 24:
      break;
    case 25:
      break;
    case 26:
      break;
    /* v8 ignore start */
    case 10:
      break;
    default:
      if (process.env.NODE_ENV !== "production")
        return Ei(!1, `unhandled codegen node type: ${e.type}`), e;
  }
}
function _o(e, t) {
  t.push(JSON.stringify(e.content), -3, e);
}
function zs(e, t) {
  const { content: n, isStatic: i } = e;
  t.push(
    i ? JSON.stringify(n) : n,
    -3,
    e
  );
}
function ho(e, t) {
  const { push: n, helper: i, pure: s } = t;
  s && n(Gt), n(`${i(zt)}(`), X(e.content, t), n(")");
}
function Hs(e, t) {
  for (let n = 0; n < e.children.length; n++) {
    const i = e.children[n];
    q(i) ? t.push(
      i,
      -3
      /* Unknown */
    ) : X(i, t);
  }
}
function mo(e, t) {
  const { push: n } = t;
  if (e.type === 8)
    n("["), Hs(e, t), n("]");
  else if (e.isStatic) {
    const i = ei(e.content) ? e.content : JSON.stringify(e.content);
    n(i, -2, e);
  } else
    n(`[${e.content}]`, -3, e);
}
function bo(e, t) {
  const { push: n, helper: i, pure: s } = t;
  s && n(Gt), n(
    `${i(ut)}(${JSON.stringify(e.content)})`,
    -3,
    e
  );
}
function vo(e, t) {
  const { push: n, helper: i, pure: s } = t, {
    tag: r,
    props: a,
    children: o,
    patchFlag: l,
    dynamicProps: f,
    directives: _,
    isBlock: p,
    disableTracking: m,
    isComponent: E
  } = e;
  let S;
  if (l)
    if (process.env.NODE_ENV !== "production")
      if (l < 0)
        S = l + ` /* ${Je[l]} */`;
      else {
        const h = Object.keys(Je).map(Number).filter((c) => c > 0 && l & c).map((c) => Je[c]).join(", ");
        S = l + ` /* ${h} */`;
      }
    else
      S = String(l);
  _ && n(i(qn) + "("), p && n(`(${i(Pe)}(${m ? "true" : ""}), `), s && n(Gt);
  const T = p ? Ke(t.inSSR, E) : We(t.inSSR, E);
  n(i(T) + "(", -2, e), ft(
    go([r, a, o, S, f]),
    t
  ), n(")"), p && n(")"), _ && (n(", "), X(_, t), n(")"));
}
function go(e) {
  let t = e.length;
  for (; t-- && e[t] == null; )
    ;
  return e.slice(0, t + 1).map((n) => n || "null");
}
function yo(e, t) {
  const { push: n, helper: i, pure: s } = t, r = q(e.callee) ? e.callee : i(e.callee);
  s && n(Gt), n(r + "(", -2, e), ft(e.arguments, t), n(")");
}
function Eo(e, t) {
  const { push: n, indent: i, deindent: s, newline: r } = t, { properties: a } = e;
  if (!a.length) {
    n("{}", -2, e);
    return;
  }
  const o = a.length > 1 || process.env.NODE_ENV !== "production" && a.some((l) => l.value.type !== 4);
  n(o ? "{" : "{ "), o && i();
  for (let l = 0; l < a.length; l++) {
    const { key: f, value: _ } = a[l];
    mo(f, t), n(": "), X(_, t), l < a.length - 1 && (n(","), r());
  }
  o && s(), n(o ? "}" : " }");
}
function wo(e, t) {
  ni(e.elements, t);
}
function So(e, t) {
  const { push: n, indent: i, deindent: s } = t, { params: r, returns: a, body: o, newline: l, isSlot: f } = e;
  f && n(`_${Fe[Qn]}(`), n("(", -2, e), ve(r) ? ft(r, t) : r && X(r, t), n(") => "), (l || o) && (n("{"), i()), a ? (l && n("return "), ve(a) ? ni(a, t) : X(a, t)) : o && X(o, t), (l || o) && (s(), n("}")), f && (e.isNonScopedSlot && n(", undefined, true"), n(")"));
}
function Oo(e, t) {
  const { test: n, consequent: i, alternate: s, newline: r } = e, { push: a, indent: o, deindent: l, newline: f } = t;
  if (n.type === 4) {
    const p = !ei(n.content);
    p && a("("), zs(n, t), p && a(")");
  } else
    a("("), X(n, t), a(")");
  r && o(), t.indentLevel++, r || a(" "), a("? "), X(i, t), t.indentLevel--, r && f(), r || a(" "), a(": ");
  const _ = s.type === 19;
  _ || t.indentLevel++, X(s, t), _ || t.indentLevel--, r && l(
    !0
    /* without newline */
  );
}
function To(e, t) {
  const { push: n, helper: i, indent: s, deindent: r, newline: a } = t, { needPauseTracking: o, needArraySpread: l } = e;
  l && n("[...("), n(`_cache[${e.index}] || (`), o && (s(), n(`${i(Lt)}(-1`), e.inVOnce && n(", true"), n("),"), a(), n("(")), n(`_cache[${e.index}] = `), X(e.value, t), o && (n(`).cacheIndex = ${e.index},`), a(), n(`${i(Lt)}(1),`), a(), n(`_cache[${e.index}]`), r()), n(")"), l && n(")]");
}
const No = new RegExp(
  "\\b" + "arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b") + "\\b"
), xo = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
function Ae(e, t, n = !1, i = !1) {
  const s = e.content;
  if (s.trim())
    try {
      new Function(
        i ? ` ${s} ` : `return ${n ? `(${s}) => {}` : `(${s})`}`
      );
    } catch (r) {
      let a = r.message;
      const o = s.replace(xo, "").match(No);
      o && (a = `avoid using JavaScript keyword as property name: "${o[0]}"`), t.onError(
        L(
          45,
          e.loc,
          void 0,
          a
        )
      );
    }
}
const ko = (e, t) => {
  if (e.type === 5)
    e.content = Zt(
      e.content,
      t
    );
  else if (e.type === 1) {
    const n = J(e, "memo");
    for (let i = 0; i < e.props.length; i++) {
      const s = e.props[i];
      if (s.type === 7 && s.name !== "for") {
        const r = s.exp, a = s.arg;
        r && r.type === 4 && !(s.name === "on" && a) && // key has been processed in transformFor(vMemo + vFor)
        !(n && a && a.type === 4 && a.content === "key") && (s.exp = Zt(
          r,
          t,
          // slot args must be processed as function params
          s.name === "slot"
        )), a && a.type === 4 && !a.isStatic && (s.arg = Zt(a, t));
      }
    }
  }
};
function Zt(e, t, n = !1, i = !1, s = Object.create(t.identifiers)) {
  return process.env.NODE_ENV !== "production" && Ae(e, t, n, i), e;
}
const Io = Ks(
  /^(?:if|else|else-if)$/,
  (e, t, n) => Co(e, t, n, (i, s, r) => {
    const a = n.parent.children;
    let o = a.indexOf(i), l = 0;
    for (; o-- >= 0; ) {
      const f = a[o];
      f && f.type === 9 && (l += f.branches.length);
    }
    return () => {
      if (r)
        i.codegenNode = ki(
          s,
          l,
          n
        );
      else {
        const f = Ro(i.codegenNode);
        f.alternate = ki(
          s,
          l + i.branches.length - 1,
          n
        );
      }
    };
  })
);
function Co(e, t, n, i) {
  if (t.name !== "else" && (!t.exp || !t.exp.content.trim())) {
    const s = t.exp ? t.exp.loc : e.loc;
    n.onError(
      L(28, t.loc)
    ), t.exp = D("true", !1, s);
  }
  if (process.env.NODE_ENV !== "production" && t.exp && Ae(t.exp, n), t.name === "if") {
    const s = xi(e, t), r = {
      type: 9,
      loc: Ja(e.loc),
      branches: [s]
    };
    if (n.replaceNode(r), i)
      return i(r, s, !0);
  } else {
    const s = n.parent.children, r = [];
    let a = s.indexOf(e);
    for (; a-- >= -1; ) {
      const o = s[a];
      if (o && o.type === 3) {
        n.removeNode(o), process.env.NODE_ENV !== "production" && r.unshift(o);
        continue;
      }
      if (o && o.type === 2 && !o.content.trim().length) {
        n.removeNode(o);
        continue;
      }
      if (o && o.type === 9) {
        (t.name === "else-if" || t.name === "else") && o.branches[o.branches.length - 1].condition === void 0 && n.onError(
          L(30, e.loc)
        ), n.removeNode();
        const l = xi(e, t);
        if (process.env.NODE_ENV !== "production" && r.length && // #3619 ignore comments if the v-if is direct child of <transition>
        !(n.parent && n.parent.type === 1 && (n.parent.tag === "transition" || n.parent.tag === "Transition")) && (l.children = [...r, ...l.children]), process.env.NODE_ENV !== "production") {
          const _ = l.userKey;
          _ && o.branches.forEach(({ userKey: p }) => {
            Ao(p, _) && n.onError(
              L(
                29,
                l.userKey.loc
              )
            );
          });
        }
        o.branches.push(l);
        const f = i && i(o, l, !1);
        Ht(l, n), f && f(), n.currentNode = null;
      } else
        n.onError(
          L(30, e.loc)
        );
      break;
    }
  }
}
function xi(e, t) {
  const n = e.tagType === 3;
  return {
    type: 10,
    loc: e.loc,
    condition: t.name === "else" ? void 0 : t.exp,
    children: n && !J(e, "for") ? e.children : [e],
    userKey: st(e, "key"),
    isTemplateIf: n
  };
}
function ki(e, t, n) {
  return e.condition ? En(
    e.condition,
    Ii(e, t, n),
    // make sure to pass in asBlock: true so that the comment node call
    // closes the current block.
    K(n.helper(ut), [
      process.env.NODE_ENV !== "production" ? '"v-if"' : '""',
      "true"
    ])
  ) : Ii(e, t, n);
}
function Ii(e, t, n) {
  const { helper: i } = n, s = U(
    "key",
    D(
      `${t}`,
      !1,
      se,
      2
    )
  ), { children: r } = e, a = r[0];
  if (r.length !== 1 || a.type !== 1)
    if (r.length === 1 && a.type === 11) {
      const l = a.codegenNode;
      return Ut(l, s, n), l;
    } else {
      let l = 64;
      return process.env.NODE_ENV !== "production" && !e.isTemplateIf && r.filter((f) => f.type !== 3).length === 1 && (l |= 2048), it(
        n,
        i(tt),
        ae([s]),
        r,
        l,
        void 0,
        void 0,
        !0,
        !1,
        !1,
        e.loc
      );
    }
  else {
    const l = a.codegenNode, f = Fa(l);
    return f.type === 13 && Jn(f, n), Ut(f, s, n), l;
  }
}
function Ao(e, t) {
  if (!e || e.type !== t.type)
    return !1;
  if (e.type === 6) {
    if (e.value.content !== t.value.content)
      return !1;
  } else {
    const n = e.exp, i = t.exp;
    if (n.type !== i.type || n.type !== 4 || n.isStatic !== i.isStatic || n.content !== i.content)
      return !1;
  }
  return !0;
}
function Ro(e) {
  for (; ; )
    if (e.type === 19)
      if (e.alternate.type === 19)
        e = e.alternate;
      else
        return e;
    else e.type === 20 && (e = e.value);
}
const Do = (e, t, n) => {
  const { modifiers: i, loc: s } = e, r = e.arg;
  let { exp: a } = e;
  if (a && a.type === 4 && !a.content.trim() && (a = void 0), !a) {
    if (r.type !== 4 || !r.isStatic)
      return n.onError(
        L(
          52,
          r.loc
        )
      ), {
        props: [
          U(r, D("", !0, s))
        ]
      };
    Gs(e), a = e.exp;
  }
  return r.type !== 4 ? (r.children.unshift("("), r.children.push(') || ""')) : r.isStatic || (r.content = r.content ? `${r.content} || ""` : '""'), i.some((o) => o.content === "camel") && (r.type === 4 ? r.isStatic ? r.content = Te(r.content) : r.content = `${n.helperString(gn)}(${r.content})` : (r.children.unshift(`${n.helperString(gn)}(`), r.children.push(")"))), n.inSSR || (i.some((o) => o.content === "prop") && Ci(r, "."), i.some((o) => o.content === "attr") && Ci(r, "^")), {
    props: [U(r, a)]
  };
}, Gs = (e, t) => {
  const n = e.arg, i = Te(n.content);
  e.exp = D(i, !1, n.loc);
}, Ci = (e, t) => {
  e.type === 4 ? e.isStatic ? e.content = t + e.content : e.content = `\`${t}\${${e.content}}\`` : (e.children.unshift(`'${t}' + (`), e.children.push(")"));
}, Po = Ks(
  "for",
  (e, t, n) => {
    const { helper: i, removeHelper: s } = n;
    return Mo(e, t, n, (r) => {
      const a = K(i(zn), [
        r.source
      ]), o = jt(e), l = J(e, "memo"), f = st(e, "key", !1, !0);
      f && f.type === 7 && !f.exp && Gs(f);
      let p = f && (f.type === 6 ? f.value ? D(f.value.content, !0) : void 0 : f.exp);
      const m = f && p ? U("key", p) : null, E = r.source.type === 4 && r.source.constType > 0, S = E ? 64 : f ? 128 : 256;
      return r.codegenNode = it(
        n,
        i(tt),
        void 0,
        a,
        S,
        void 0,
        void 0,
        !0,
        !E,
        !1,
        e.loc
      ), () => {
        let T;
        const { children: h } = r;
        process.env.NODE_ENV !== "production" && o && e.children.some((k) => {
          if (k.type === 1) {
            const N = st(k, "key");
            if (N)
              return n.onError(
                L(
                  33,
                  N.loc
                )
              ), !0;
          }
        });
        const c = h.length !== 1 || h[0].type !== 1, b = Ft(e) ? e : o && e.children.length === 1 && Ft(e.children[0]) ? e.children[0] : null;
        if (b ? (T = b.codegenNode, o && m && Ut(T, m, n)) : c ? T = it(
          n,
          i(tt),
          m ? ae([m]) : void 0,
          e.children,
          64,
          void 0,
          void 0,
          !0,
          void 0,
          !1
        ) : (T = h[0].codegenNode, o && m && Ut(T, m, n), T.isBlock !== !E && (T.isBlock ? (s(Pe), s(
          Ke(n.inSSR, T.isComponent)
        )) : s(
          We(n.inSSR, T.isComponent)
        )), T.isBlock = !E, T.isBlock ? (i(Pe), i(Ke(n.inSSR, T.isComponent))) : i(We(n.inSSR, T.isComponent))), l) {
          const k = Ue(
            Tn(r.parseResult, [
              D("_cached")
            ])
          );
          k.body = Na([
            fe(["const _memo = (", l.exp, ")"]),
            fe([
              "if (_cached",
              ...p ? [" && _cached.key === ", p] : [],
              ` && ${n.helperString(
                Cs
              )}(_cached, _memo)) return _cached`
            ]),
            fe(["const _item = ", T]),
            D("_item.memo = _memo"),
            D("return _item")
          ]), a.arguments.push(
            k,
            D("_cache"),
            D(String(n.cached.length))
          ), n.cached.push(null);
        } else
          a.arguments.push(
            Ue(
              Tn(r.parseResult),
              T,
              !0
            )
          );
      };
    });
  }
);
function Mo(e, t, n, i) {
  if (!t.exp) {
    n.onError(
      L(31, t.loc)
    );
    return;
  }
  const s = t.forParseResult;
  if (!s) {
    n.onError(
      L(32, t.loc)
    );
    return;
  }
  Xs(s, n);
  const { addIdentifiers: r, removeIdentifiers: a, scopes: o } = n, { source: l, value: f, key: _, index: p } = s, m = {
    type: 11,
    loc: t.loc,
    source: l,
    valueAlias: f,
    keyAlias: _,
    objectIndexAlias: p,
    parseResult: s,
    children: jt(e) ? e.children : [e]
  };
  n.replaceNode(m), o.vFor++;
  const E = i && i(m);
  return () => {
    o.vFor--, E && E();
  };
}
function Xs(e, t) {
  e.finalized || (process.env.NODE_ENV !== "production" && (Ae(e.source, t), e.key && Ae(
    e.key,
    t,
    !0
  ), e.index && Ae(
    e.index,
    t,
    !0
  ), e.value && Ae(
    e.value,
    t,
    !0
  )), e.finalized = !0);
}
function Tn({ value: e, key: t, index: n }, i = []) {
  return Vo([e, t, n, ...i]);
}
function Vo(e) {
  let t = e.length;
  for (; t-- && !e[t]; )
    ;
  return e.slice(0, t + 1).map((n, i) => n || D("_".repeat(i + 1), !1));
}
const Ai = D("undefined", !1), Lo = (e, t) => {
  if (e.type === 1 && (e.tagType === 1 || e.tagType === 3)) {
    const n = J(e, "slot");
    if (n)
      return n.exp, t.scopes.vSlot++, () => {
        t.scopes.vSlot--;
      };
  }
}, $o = (e, t, n, i) => Ue(
  e,
  n,
  !1,
  !0,
  n.length ? n[0].loc : i
);
function Bo(e, t, n = $o) {
  t.helper(Qn);
  const { children: i, loc: s } = e, r = [], a = [];
  let o = t.scopes.vSlot > 0 || t.scopes.vFor > 0;
  const l = J(e, "slot", !0);
  if (l) {
    const { arg: h, exp: c } = l;
    h && !Z(h) && (o = !0), r.push(
      U(
        h || D("default", !0),
        n(c, void 0, i, s)
      )
    );
  }
  let f = !1, _ = !1;
  const p = [], m = /* @__PURE__ */ new Set();
  let E = 0;
  for (let h = 0; h < i.length; h++) {
    const c = i[h];
    let b;
    if (!jt(c) || !(b = J(c, "slot", !0))) {
      c.type !== 3 && p.push(c);
      continue;
    }
    if (l) {
      t.onError(
        L(37, b.loc)
      );
      break;
    }
    f = !0;
    const { children: k, loc: N } = c, {
      arg: I = D("default", !0),
      exp: y,
      loc: O
    } = b;
    let d;
    Z(I) ? d = I ? I.content : "default" : o = !0;
    const w = J(c, "for"), u = n(y, w, k, N);
    let g, v;
    if (g = J(c, "if"))
      o = !0, a.push(
        En(
          g.exp,
          bt(I, u, E++),
          Ai
        )
      );
    else if (v = J(
      c,
      /^else(?:-if)?$/,
      !0
      /* allowEmpty */
    )) {
      let x = h, C;
      for (; x-- && (C = i[x], !(C.type !== 3 && Nn(C))); )
        ;
      if (C && jt(C) && J(C, /^(?:else-)?if$/)) {
        let A = a[a.length - 1];
        for (; A.alternate.type === 19; )
          A = A.alternate;
        A.alternate = v.exp ? En(
          v.exp,
          bt(
            I,
            u,
            E++
          ),
          Ai
        ) : bt(I, u, E++);
      } else
        t.onError(
          L(30, v.loc)
        );
    } else if (w) {
      o = !0;
      const x = w.forParseResult;
      x ? (Xs(x, t), a.push(
        K(t.helper(zn), [
          x.source,
          Ue(
            Tn(x),
            bt(I, u),
            !0
          )
        ])
      )) : t.onError(
        L(
          32,
          w.loc
        )
      );
    } else {
      if (d) {
        if (m.has(d)) {
          t.onError(
            L(
              38,
              O
            )
          );
          continue;
        }
        m.add(d), d === "default" && (_ = !0);
      }
      r.push(U(I, u));
    }
  }
  if (!l) {
    const h = (c, b) => {
      const k = n(c, void 0, b, s);
      return t.compatConfig && (k.isNonScopedSlot = !0), U("default", k);
    };
    f ? p.length && // #3766
    // with whitespace: 'preserve', whitespaces between slots will end up in
    // implicitDefaultChildren. Ignore if all implicit children are whitespaces.
    p.some((c) => Nn(c)) && (_ ? t.onError(
      L(
        39,
        p[0].loc
      )
    ) : r.push(
      h(void 0, p)
    )) : r.push(h(void 0, i));
  }
  const S = o ? 2 : Ct(e.children) ? 3 : 1;
  let T = ae(
    r.concat(
      U(
        "_",
        // 2 = compiled but dynamic = can skip normalization, but must run diff
        // 1 = compiled and static = can skip normalization AND diff as optimized
        D(
          S + (process.env.NODE_ENV !== "production" ? ` /* ${ra[S]} */` : ""),
          !1
        )
      )
    ),
    s
  );
  return a.length && (T = K(t.helper(Is), [
    T,
    Re(a)
  ])), {
    slots: T,
    hasDynamicSlots: o
  };
}
function bt(e, t, n) {
  const i = [
    U("name", e),
    U("fn", t)
  ];
  return n != null && i.push(
    U("key", D(String(n), !0))
  ), ae(i);
}
function Ct(e) {
  for (let t = 0; t < e.length; t++) {
    const n = e[t];
    switch (n.type) {
      case 1:
        if (n.tagType === 2 || Ct(n.children))
          return !0;
        break;
      case 9:
        if (Ct(n.branches)) return !0;
        break;
      case 10:
      case 11:
        if (Ct(n.children)) return !0;
        break;
    }
  }
  return !1;
}
function Nn(e) {
  return e.type !== 2 && e.type !== 12 ? !0 : e.type === 2 ? !!e.content.trim() : Nn(e.content);
}
const Qs = /* @__PURE__ */ new WeakMap(), jo = (e, t) => function() {
  if (e = t.currentNode, !(e.type === 1 && (e.tagType === 0 || e.tagType === 1)))
    return;
  const { tag: i, props: s } = e, r = e.tagType === 1;
  let a = r ? Fo(e, t) : `"${i}"`;
  const o = ea(a) && a.callee === Un;
  let l, f, _ = 0, p, m, E, S = (
    // dynamic component may resolve to plain elements
    o || a === Ze || a === Ln || !r && // <svg> and <foreignObject> must be forced into blocks so that block
    // updates inside get proper isSVG flag at runtime. (#639, #643)
    // This is technically web-specific, but splitting the logic out of core
    // leads to too much unnecessary complexity.
    (i === "svg" || i === "foreignObject" || i === "math")
  );
  if (s.length > 0) {
    const T = Ys(
      e,
      t,
      void 0,
      r,
      o
    );
    l = T.props, _ = T.patchFlag, m = T.dynamicPropNames;
    const h = T.directives;
    E = h && h.length ? Re(
      h.map((c) => Wo(c, t))
    ) : void 0, T.shouldUseBlock && (S = !0);
  }
  if (e.children.length > 0)
    if (a === Mt && (S = !0, _ |= 1024, process.env.NODE_ENV !== "production" && e.children.length > 1 && t.onError(
      L(46, {
        start: e.children[0].loc.start,
        end: e.children[e.children.length - 1].loc.end,
        source: ""
      })
    )), r && // Teleport is not a real component and has dedicated runtime handling
    a !== Ze && // explained above.
    a !== Mt) {
      const { slots: h, hasDynamicSlots: c } = Bo(e, t);
      f = h, c && (_ |= 1024);
    } else if (e.children.length === 1 && a !== Ze) {
      const h = e.children[0], c = h.type, b = c === 5 || c === 8;
      b && ie(h, t) === 0 && (_ |= 1), b || c === 2 ? f = h : f = e.children;
    } else
      f = e.children;
  m && m.length && (p = Ko(m)), e.codegenNode = it(
    t,
    a,
    l,
    f,
    _ === 0 ? void 0 : _,
    p,
    E,
    !!S,
    !1,
    r,
    e.loc
  );
};
function Fo(e, t, n = !1) {
  let { tag: i } = e;
  const s = xn(i), r = st(
    e,
    "is",
    !1,
    !0
    /* allow empty */
  );
  if (r)
    if (s || Ne(
      "COMPILER_IS_ON_ELEMENT",
      t
    )) {
      let o;
      if (r.type === 6 ? o = r.value && D(r.value.content, !0) : (o = r.exp, o || (o = D("is", !1, r.arg.loc))), o)
        return K(t.helper(Un), [
          o
        ]);
    } else r.type === 6 && r.value.content.startsWith("vue:") && (i = r.value.content.slice(4));
  const a = Rs(i) || t.isBuiltInComponent(i);
  return a ? (n || t.helper(a), a) : (t.helper(Fn), t.components.add(i), rt(i, "component"));
}
function Ys(e, t, n = e.props, i, s, r = !1) {
  const { tag: a, loc: o, children: l } = e;
  let f = [];
  const _ = [], p = [], m = l.length > 0;
  let E = !1, S = 0, T = !1, h = !1, c = !1, b = !1, k = !1, N = !1;
  const I = [], y = (u) => {
    f.length && (_.push(
      ae(Ri(f), o)
    ), f = []), u && _.push(u);
  }, O = () => {
    t.scopes.vFor > 0 && f.push(
      U(
        D("ref_for", !0),
        D("true")
      )
    );
  }, d = ({ key: u, value: g }) => {
    if (Z(u)) {
      const v = u.content, x = vn(v);
      if (x && (!i || s) && // omit the flag for click handlers because hydration gives click
      // dedicated fast path.
      v.toLowerCase() !== "onclick" && // omit v-model handlers
      v !== "onUpdate:modelValue" && // omit onVnodeXXX hooks
      !mi(v) && (b = !0), x && mi(v) && (N = !0), x && g.type === 14 && (g = g.arguments[0]), g.type === 20 || (g.type === 4 || g.type === 8) && ie(g, t) > 0)
        return;
      v === "ref" ? T = !0 : v === "class" ? h = !0 : v === "style" ? c = !0 : v !== "key" && !I.includes(v) && I.push(v), i && (v === "class" || v === "style") && !I.includes(v) && I.push(v);
    } else
      k = !0;
  };
  for (let u = 0; u < n.length; u++) {
    const g = n[u];
    if (g.type === 6) {
      const { loc: v, name: x, nameLoc: C, value: A } = g;
      let V = !0;
      if (x === "ref" && (T = !0, O()), x === "is" && (xn(a) || A && A.content.startsWith("vue:") || Ne(
        "COMPILER_IS_ON_ELEMENT",
        t
      )))
        continue;
      f.push(
        U(
          D(x, !0, C),
          D(
            A ? A.content : "",
            V,
            A ? A.loc : v
          )
        )
      );
    } else {
      const { name: v, arg: x, exp: C, loc: A, modifiers: V } = g, W = v === "bind", ee = v === "on";
      if (v === "slot") {
        i || t.onError(
          L(40, A)
        );
        continue;
      }
      if (v === "once" || v === "memo" || v === "is" || W && Se(x, "is") && (xn(a) || Ne(
        "COMPILER_IS_ON_ELEMENT",
        t
      )) || ee && r)
        continue;
      if (
        // #938: elements with dynamic keys should be forced into blocks
        (W && Se(x, "key") || // inline before-update hooks need to force block so that it is invoked
        // before children
        ee && m && Se(x, "vue:before-update")) && (E = !0), W && Se(x, "ref") && O(), !x && (W || ee)
      ) {
        if (k = !0, C)
          if (W) {
            if (y(), process.env.NODE_ENV !== "production" && _.some((re) => re.type === 15 ? re.properties.some(({ key: de }) => de.type !== 4 || !de.isStatic ? !0 : de.content !== "class" && de.content !== "style" && !vn(de.content)) : !0) && qe(
              "COMPILER_V_BIND_OBJECT_ORDER",
              t,
              A
            ), Ne(
              "COMPILER_V_BIND_OBJECT_ORDER",
              t
            )) {
              _.unshift(C);
              continue;
            }
            O(), y(), _.push(C);
          } else
            y({
              type: 14,
              loc: A,
              callee: t.helper(Xn),
              arguments: i ? [C] : [C, "true"]
            });
        else
          t.onError(
            L(
              W ? 34 : 35,
              A
            )
          );
        continue;
      }
      W && V.some((te) => te.content === "prop") && (S |= 32);
      const he = t.directiveTransforms[v];
      if (he) {
        const { props: te, needRuntime: re } = he(g, e, t);
        !r && te.forEach(d), ee && x && !Z(x) ? y(ae(te, o)) : f.push(...te), re && (p.push(g), Pn(re) && Qs.set(g, re));
      } else ta(v) || (p.push(g), m && (E = !0));
    }
  }
  let w;
  if (_.length ? (y(), _.length > 1 ? w = K(
    t.helper(Vt),
    _,
    o
  ) : w = _[0]) : f.length && (w = ae(
    Ri(f),
    o
  )), k ? S |= 16 : (h && !i && (S |= 2), c && !i && (S |= 4), I.length && (S |= 8), b && (S |= 32)), !E && (S === 0 || S === 32) && (T || N || p.length > 0) && (S |= 512), !t.inSSR && w)
    switch (w.type) {
      case 15:
        let u = -1, g = -1, v = !1;
        for (let A = 0; A < w.properties.length; A++) {
          const V = w.properties[A].key;
          Z(V) ? V.content === "class" ? u = A : V.content === "style" && (g = A) : V.isHandlerKey || (v = !0);
        }
        const x = w.properties[u], C = w.properties[g];
        v ? w = K(
          t.helper(nt),
          [w]
        ) : (x && !Z(x.value) && (x.value = K(
          t.helper(Hn),
          [x.value]
        )), C && // the static style is compiled into an object,
        // so use `hasStyleBinding` to ensure that it is a dynamic style binding
        (c || C.value.type === 4 && C.value.content.trim()[0] === "[" || // v-bind:style and style both exist,
        // v-bind:style with static literal object
        C.value.type === 17) && (C.value = K(
          t.helper(Gn),
          [C.value]
        )));
        break;
      case 14:
        break;
      default:
        w = K(
          t.helper(nt),
          [
            K(t.helper(ct), [
              w
            ])
          ]
        );
        break;
    }
  return {
    props: w,
    directives: p,
    patchFlag: S,
    dynamicPropNames: I,
    shouldUseBlock: E
  };
}
function Ri(e) {
  const t = /* @__PURE__ */ new Map(), n = [];
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if (s.key.type === 8 || !s.key.isStatic) {
      n.push(s);
      continue;
    }
    const r = s.key.content, a = t.get(r);
    a ? (r === "style" || r === "class" || vn(r)) && Uo(a, s) : (t.set(r, s), n.push(s));
  }
  return n;
}
function Uo(e, t) {
  e.value.type === 17 ? e.value.elements.push(t.value) : e.value = Re(
    [e.value, t.value],
    e.loc
  );
}
function Wo(e, t) {
  const n = [], i = Qs.get(e);
  i ? n.push(t.helperString(i)) : (t.helper(Wn), t.directives.add(e.name), n.push(rt(e.name, "directive")));
  const { loc: s } = e;
  if (e.exp && n.push(e.exp), e.arg && (e.exp || n.push("void 0"), n.push(e.arg)), Object.keys(e.modifiers).length) {
    e.arg || (e.exp || n.push("void 0"), n.push("void 0"));
    const r = D("true", !1, s);
    n.push(
      ae(
        e.modifiers.map(
          (a) => U(a, r)
        ),
        s
      )
    );
  }
  return Re(n, e.loc);
}
function Ko(e) {
  let t = "[";
  for (let n = 0, i = e.length; n < i; n++)
    t += JSON.stringify(e[n]), n < i - 1 && (t += ", ");
  return t + "]";
}
function xn(e) {
  return e === "component" || e === "Component";
}
const qo = (e, t) => {
  if (Ft(e)) {
    const { children: n, loc: i } = e, { slotName: s, slotProps: r } = zo(e, t), a = [
      t.prefixIdentifiers ? "_ctx.$slots" : "$slots",
      s,
      "{}",
      "undefined",
      "true"
    ];
    let o = 2;
    r && (a[2] = r, o = 3), n.length && (a[3] = Ue([], n, !1, !1, i), o = 4), t.scopeId && !t.slotted && (o = 5), a.splice(o), e.codegenNode = K(
      t.helper(ks),
      a,
      i
    );
  }
};
function zo(e, t) {
  let n = '"default"', i;
  const s = [];
  for (let r = 0; r < e.props.length; r++) {
    const a = e.props[r];
    if (a.type === 6)
      a.value && (a.name === "name" ? n = JSON.stringify(a.value.content) : (a.name = Te(a.name), s.push(a)));
    else if (a.name === "bind" && Se(a.arg, "name")) {
      if (a.exp)
        n = a.exp;
      else if (a.arg && a.arg.type === 4) {
        const o = Te(a.arg.content);
        n = a.exp = D(o, !1, a.arg.loc);
      }
    } else
      a.name === "bind" && a.arg && Z(a.arg) && (a.arg.content = Te(a.arg.content)), s.push(a);
  }
  if (s.length > 0) {
    const { props: r, directives: a } = Ys(
      e,
      t,
      s,
      !1,
      !1
    );
    i = r, a.length && t.onError(
      L(
        36,
        a[0].loc
      )
    );
  }
  return {
    slotName: n,
    slotProps: i
  };
}
const Js = (e, t, n, i) => {
  const { loc: s, modifiers: r, arg: a } = e;
  !e.exp && !r.length && n.onError(L(35, s));
  let o;
  if (a.type === 4)
    if (a.isStatic) {
      let p = a.content;
      process.env.NODE_ENV !== "production" && p.startsWith("vnode") && n.onError(L(51, a.loc)), p.startsWith("vue:") && (p = `vnode-${p.slice(4)}`);
      const m = t.tagType !== 0 || p.startsWith("vnode") || !/[A-Z]/.test(p) ? (
        // for non-element and vnode lifecycle event listeners, auto convert
        // it to camelCase. See issue #2249
        ia(Te(p))
      ) : (
        // preserve case for plain element listeners that have uppercase
        // letters, as these may be custom elements' custom events
        `on:${p}`
      );
      o = D(m, !0, a.loc);
    } else
      o = fe([
        `${n.helperString(yn)}(`,
        a,
        ")"
      ]);
  else
    o = a, o.children.unshift(`${n.helperString(yn)}(`), o.children.push(")");
  let l = e.exp;
  l && !l.content.trim() && (l = void 0);
  let f = n.cacheHandlers && !l && !n.inVOnce;
  if (l) {
    const p = Ps(l), m = !(p || La(l)), E = l.content.includes(";");
    process.env.NODE_ENV !== "production" && Ae(
      l,
      n,
      !1,
      E
    ), (m || f && p) && (l = fe([
      `${m ? "$event" : "(...args)"} => ${E ? "{" : "("}`,
      l,
      E ? "}" : ")"
    ]));
  }
  let _ = {
    props: [
      U(
        o,
        l || D("() => {}", !1, s)
      )
    ]
  };
  return i && (_ = i(_)), f && (_.props[0].value = n.cache(_.props[0].value)), _.props.forEach((p) => p.key.isHandlerKey = !0), _;
}, Ho = (e, t) => {
  if (e.type === 0 || e.type === 1 || e.type === 11 || e.type === 10)
    return () => {
      const n = e.children;
      let i, s = !1;
      for (let r = 0; r < n.length; r++) {
        const a = n[r];
        if (Yt(a)) {
          s = !0;
          for (let o = r + 1; o < n.length; o++) {
            const l = n[o];
            if (Yt(l))
              i || (i = n[r] = fe(
                [a],
                a.loc
              )), i.children.push(" + ", l), n.splice(o, 1), o--;
            else {
              i = void 0;
              break;
            }
          }
        }
      }
      if (!(!s || // if this is a plain element with a single text child, leave it
      // as-is since the runtime has dedicated fast path for this by directly
      // setting textContent of the element.
      // for component root it's always normalized anyway.
      n.length === 1 && (e.type === 0 || e.type === 1 && e.tagType === 0 && // #3756
      // custom directives can potentially add DOM elements arbitrarily,
      // we need to avoid setting textContent of the element at runtime
      // to avoid accidentally overwriting the DOM elements added
      // by the user through custom directives.
      !e.props.find(
        (r) => r.type === 7 && !t.directiveTransforms[r.name]
      ) && e.tag !== "template")))
        for (let r = 0; r < n.length; r++) {
          const a = n[r];
          if (Yt(a) || a.type === 8) {
            const o = [];
            (a.type !== 2 || a.content !== " ") && o.push(a), !t.ssr && ie(a, t) === 0 && o.push(
              1 + (process.env.NODE_ENV !== "production" ? ` /* ${Je[1]} */` : "")
            ), n[r] = {
              type: 12,
              content: a,
              loc: a.loc,
              codegenNode: K(
                t.helper(jn),
                o
              )
            };
          }
        }
    };
}, Di = /* @__PURE__ */ new WeakSet(), Go = (e, t) => {
  if (e.type === 1 && J(e, "once", !0))
    return Di.has(e) || t.inVOnce || t.inSSR ? void 0 : (Di.add(e), t.inVOnce = !0, t.helper(Lt), () => {
      t.inVOnce = !1;
      const n = t.currentNode;
      n.codegenNode && (n.codegenNode = t.cache(
        n.codegenNode,
        !0,
        !0
      ));
    });
}, Zs = (e, t, n) => {
  const { exp: i, arg: s } = e;
  if (!i)
    return n.onError(
      L(41, e.loc)
    ), vt();
  const r = i.loc.source.trim(), a = i.type === 4 ? i.content : r, o = n.bindingMetadata[r];
  if (o === "props" || o === "props-aliased")
    return n.onError(L(44, i.loc)), vt();
  if (!a.trim() || !Ps(i))
    return n.onError(
      L(42, i.loc)
    ), vt();
  const l = s || D("modelValue", !0), f = s ? Z(s) ? `onUpdate:${Te(s.content)}` : fe(['"onUpdate:" + ', s]) : "onUpdate:modelValue";
  let _;
  const p = n.isTS ? "($event: any)" : "$event";
  _ = fe([
    `${p} => ((`,
    i,
    ") = $event)"
  ]);
  const m = [
    // modelValue: foo
    U(l, e.exp),
    // "onUpdate:modelValue": $event => (foo = $event)
    U(f, _)
  ];
  if (e.modifiers.length && t.tagType === 1) {
    const E = e.modifiers.map((T) => T.content).map((T) => (ei(T) ? T : JSON.stringify(T)) + ": true").join(", "), S = s ? Z(s) ? `${s.content}Modifiers` : fe([s, ' + "Modifiers"']) : "modelModifiers";
    m.push(
      U(
        S,
        D(
          `{ ${E} }`,
          !1,
          e.loc,
          2
        )
      )
    );
  }
  return vt(m);
};
function vt(e = []) {
  return { props: e };
}
const Xo = /[\w).+\-_$\]]/, Qo = (e, t) => {
  Ne("COMPILER_FILTERS", t) && (e.type === 5 ? Wt(e.content, t) : e.type === 1 && e.props.forEach((n) => {
    n.type === 7 && n.name !== "for" && n.exp && Wt(n.exp, t);
  }));
};
function Wt(e, t) {
  if (e.type === 4)
    Pi(e, t);
  else
    for (let n = 0; n < e.children.length; n++) {
      const i = e.children[n];
      typeof i == "object" && (i.type === 4 ? Pi(i, t) : i.type === 8 ? Wt(e, t) : i.type === 5 && Wt(i.content, t));
    }
}
function Pi(e, t) {
  const n = e.content;
  let i = !1, s = !1, r = !1, a = !1, o = 0, l = 0, f = 0, _ = 0, p, m, E, S, T = [];
  for (E = 0; E < n.length; E++)
    if (m = p, p = n.charCodeAt(E), i)
      p === 39 && m !== 92 && (i = !1);
    else if (s)
      p === 34 && m !== 92 && (s = !1);
    else if (r)
      p === 96 && m !== 92 && (r = !1);
    else if (a)
      p === 47 && m !== 92 && (a = !1);
    else if (p === 124 && // pipe
    n.charCodeAt(E + 1) !== 124 && n.charCodeAt(E - 1) !== 124 && !o && !l && !f)
      S === void 0 ? (_ = E + 1, S = n.slice(0, E).trim()) : h();
    else {
      switch (p) {
        case 34:
          s = !0;
          break;
        // "
        case 39:
          i = !0;
          break;
        // '
        case 96:
          r = !0;
          break;
        // `
        case 40:
          f++;
          break;
        // (
        case 41:
          f--;
          break;
        // )
        case 91:
          l++;
          break;
        // [
        case 93:
          l--;
          break;
        // ]
        case 123:
          o++;
          break;
        // {
        case 125:
          o--;
          break;
      }
      if (p === 47) {
        let c = E - 1, b;
        for (; c >= 0 && (b = n.charAt(c), b === " "); c--)
          ;
        (!b || !Xo.test(b)) && (a = !0);
      }
    }
  S === void 0 ? S = n.slice(0, E).trim() : _ !== 0 && h();
  function h() {
    T.push(n.slice(_, E).trim()), _ = E + 1;
  }
  if (T.length) {
    for (process.env.NODE_ENV !== "production" && Bt(
      "COMPILER_FILTERS",
      t,
      e.loc
    ), E = 0; E < T.length; E++)
      S = Yo(S, T[E], t);
    e.content = S, e.ast = void 0;
  }
}
function Yo(e, t, n) {
  n.helper(Kn);
  const i = t.indexOf("(");
  if (i < 0)
    return n.filters.add(t), `${rt(t, "filter")}(${e})`;
  {
    const s = t.slice(0, i), r = t.slice(i + 1);
    return n.filters.add(s), `${rt(s, "filter")}(${e}${r !== ")" ? "," + r : r}`;
  }
}
const Mi = /* @__PURE__ */ new WeakSet(), Jo = (e, t) => {
  if (e.type === 1) {
    const n = J(e, "memo");
    return !n || Mi.has(e) || t.inSSR ? void 0 : (Mi.add(e), () => {
      const i = e.codegenNode || t.currentNode.codegenNode;
      i && i.type === 13 && (e.tagType !== 1 && Jn(i, t), e.codegenNode = K(t.helper(Yn), [
        n.exp,
        Ue(void 0, i),
        "_cache",
        String(t.cached.length)
      ]), t.cached.push(null));
    });
  }
};
function Zo(e) {
  return [
    [
      Go,
      Io,
      Jo,
      Po,
      Qo,
      ...process.env.NODE_ENV !== "production" ? [ko] : [],
      qo,
      jo,
      Lo,
      Ho
    ],
    {
      on: Js,
      bind: Do,
      model: Zs
    }
  ];
}
function el(e, t = {}) {
  const n = t.onError || Zn, i = t.mode === "module";
  t.prefixIdentifiers === !0 ? n(L(47)) : i && n(L(48));
  const s = !1;
  t.cacheHandlers && n(L(49)), t.scopeId && !i && n(L(50));
  const r = Oe({}, t, {
    prefixIdentifiers: s
  }), a = q(e) ? to(e, r) : e, [o, l] = Zo();
  return ro(
    a,
    Oe({}, r, {
      nodeTransforms: [
        ...o,
        ...t.nodeTransforms || []
        // user transforms
      ],
      directiveTransforms: Oe(
        {},
        l,
        t.directiveTransforms || {}
        // user transforms
      )
    })
  ), uo(a, r);
}
const tl = () => ({ props: [] });
/**
* @vue/compiler-dom v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const er = Symbol(process.env.NODE_ENV !== "production" ? "vModelRadio" : ""), tr = Symbol(
  process.env.NODE_ENV !== "production" ? "vModelCheckbox" : ""
), nr = Symbol(process.env.NODE_ENV !== "production" ? "vModelText" : ""), ir = Symbol(
  process.env.NODE_ENV !== "production" ? "vModelSelect" : ""
), kn = Symbol(
  process.env.NODE_ENV !== "production" ? "vModelDynamic" : ""
), sr = Symbol(
  process.env.NODE_ENV !== "production" ? "vOnModifiersGuard" : ""
), rr = Symbol(
  process.env.NODE_ENV !== "production" ? "vOnKeysGuard" : ""
), ar = Symbol(process.env.NODE_ENV !== "production" ? "vShow" : ""), ii = Symbol(process.env.NODE_ENV !== "production" ? "Transition" : ""), or = Symbol(
  process.env.NODE_ENV !== "production" ? "TransitionGroup" : ""
);
Sa({
  [er]: "vModelRadio",
  [tr]: "vModelCheckbox",
  [nr]: "vModelText",
  [ir]: "vModelSelect",
  [kn]: "vModelDynamic",
  [sr]: "withModifiers",
  [rr]: "withKeys",
  [ar]: "vShow",
  [ii]: "Transition",
  [or]: "TransitionGroup"
});
let Me;
function nl(e, t = !1) {
  return Me || (Me = document.createElement("div")), t ? (Me.innerHTML = `<div foo="${e.replace(/"/g, "&quot;")}">`, Me.children[0].getAttribute("foo")) : (Me.innerHTML = e, Me.textContent);
}
const il = {
  parseMode: "html",
  isVoidTag: ba,
  isNativeTag: (e) => ha(e) || da(e) || ma(e),
  isPreTag: (e) => e === "pre",
  isIgnoreNewlineTag: (e) => e === "pre" || e === "textarea",
  decodeEntities: nl,
  isBuiltInComponent: (e) => {
    if (e === "Transition" || e === "transition")
      return ii;
    if (e === "TransitionGroup" || e === "transition-group")
      return or;
  },
  // https://html.spec.whatwg.org/multipage/parsing.html#tree-construction-dispatcher
  getNamespace(e, t, n) {
    let i = t ? t.ns : n;
    if (t && i === 2)
      if (t.tag === "annotation-xml") {
        if (e === "svg")
          return 1;
        t.props.some(
          (s) => s.type === 6 && s.name === "encoding" && s.value != null && (s.value.content === "text/html" || s.value.content === "application/xhtml+xml")
        ) && (i = 0);
      } else /^m(?:[ions]|text)$/.test(t.tag) && e !== "mglyph" && e !== "malignmark" && (i = 0);
    else t && i === 1 && (t.tag === "foreignObject" || t.tag === "desc" || t.tag === "title") && (i = 0);
    if (i === 0) {
      if (e === "svg")
        return 1;
      if (e === "math")
        return 2;
    }
    return i;
  }
}, sl = (e) => {
  e.type === 1 && e.props.forEach((t, n) => {
    t.type === 6 && t.name === "style" && t.value && (e.props[n] = {
      type: 7,
      name: "bind",
      arg: D("style", !0, t.loc),
      exp: rl(t.value.content, t.loc),
      modifiers: [],
      loc: t.loc
    });
  });
}, rl = (e, t) => {
  const n = ua(e);
  return D(
    JSON.stringify(n),
    !1,
    t,
    3
  );
};
function ce(e, t) {
  return L(
    e,
    t,
    process.env.NODE_ENV !== "production" ? al : void 0
  );
}
const al = {
  53: "v-html is missing expression.",
  54: "v-html will override element children.",
  55: "v-text is missing expression.",
  56: "v-text will override element children.",
  57: "v-model can only be used on <input>, <textarea> and <select> elements.",
  58: "v-model argument is not supported on plain elements.",
  59: "v-model cannot be used on file inputs since they are read-only. Use a v-on:change listener instead.",
  60: "Unnecessary value binding used alongside v-model. It will interfere with v-model's behavior.",
  61: "v-show is missing expression.",
  62: "<Transition> expects exactly one child element or component.",
  63: "Tags with side effect (<script> and <style>) are ignored in client component templates."
}, ol = (e, t, n) => {
  const { exp: i, loc: s } = e;
  return i || n.onError(
    ce(53, s)
  ), t.children.length && (n.onError(
    ce(54, s)
  ), t.children.length = 0), {
    props: [
      U(
        D("innerHTML", !0, s),
        i || D("", !0)
      )
    ]
  };
}, ll = (e, t, n) => {
  const { exp: i, loc: s } = e;
  return i || n.onError(
    ce(55, s)
  ), t.children.length && (n.onError(
    ce(56, s)
  ), t.children.length = 0), {
    props: [
      U(
        D("textContent", !0),
        i ? ie(i, n) > 0 ? i : K(
          n.helperString(zt),
          [i],
          s
        ) : D("", !0)
      )
    ]
  };
}, ul = (e, t, n) => {
  const i = Zs(e, t, n);
  if (!i.props.length || t.tagType === 1)
    return i;
  e.arg && n.onError(
    ce(
      58,
      e.arg.loc
    )
  );
  function s() {
    const o = J(t, "bind");
    o && Se(o.arg, "value") && n.onError(
      ce(
        60,
        o.loc
      )
    );
  }
  const { tag: r } = t, a = n.isCustomElement(r);
  if (r === "input" || r === "textarea" || r === "select" || a) {
    let o = nr, l = !1;
    if (r === "input" || a) {
      const f = st(t, "type");
      if (f) {
        if (f.type === 7)
          o = kn;
        else if (f.value)
          switch (f.value.content) {
            case "radio":
              o = er;
              break;
            case "checkbox":
              o = tr;
              break;
            case "file":
              l = !0, n.onError(
                ce(
                  59,
                  e.loc
                )
              );
              break;
            default:
              process.env.NODE_ENV !== "production" && s();
              break;
          }
      } else $a(t) ? o = kn : process.env.NODE_ENV !== "production" && s();
    } else r === "select" ? o = ir : process.env.NODE_ENV !== "production" && s();
    l || (i.needRuntime = n.helper(o));
  } else
    n.onError(
      ce(
        57,
        e.loc
      )
    );
  return i.props = i.props.filter(
    (o) => !(o.key.type === 4 && o.key.content === "modelValue")
  ), i;
}, cl = /* @__PURE__ */ _e("passive,once,capture"), fl = /* @__PURE__ */ _e(
  // event propagation management
  "stop,prevent,self,ctrl,shift,alt,meta,exact,middle"
), pl = /* @__PURE__ */ _e("left,right"), lr = /* @__PURE__ */ _e("onkeyup,onkeydown,onkeypress"), _l = (e, t, n, i) => {
  const s = [], r = [], a = [];
  for (let o = 0; o < t.length; o++) {
    const l = t[o].content;
    l === "native" && qe(
      "COMPILER_V_ON_NATIVE",
      n,
      i
    ) || cl(l) ? a.push(l) : pl(l) ? Z(e) ? lr(e.content.toLowerCase()) ? s.push(l) : r.push(l) : (s.push(l), r.push(l)) : fl(l) ? r.push(l) : s.push(l);
  }
  return {
    keyModifiers: s,
    nonKeyModifiers: r,
    eventOptionModifiers: a
  };
}, Vi = (e, t) => Z(e) && e.content.toLowerCase() === "onclick" ? D(t, !0) : e.type !== 4 ? fe([
  "(",
  e,
  `) === "onClick" ? "${t}" : (`,
  e,
  ")"
]) : e, hl = (e, t, n) => Js(e, t, n, (i) => {
  const { modifiers: s } = e;
  if (!s.length) return i;
  let { key: r, value: a } = i.props[0];
  const { keyModifiers: o, nonKeyModifiers: l, eventOptionModifiers: f } = _l(r, s, n, e.loc);
  if (l.includes("right") && (r = Vi(r, "onContextmenu")), l.includes("middle") && (r = Vi(r, "onMouseup")), l.length && (a = K(n.helper(sr), [
    a,
    JSON.stringify(l)
  ])), o.length && // if event name is dynamic, always wrap with keys guard
  (!Z(r) || lr(r.content.toLowerCase())) && (a = K(n.helper(rr), [
    a,
    JSON.stringify(o)
  ])), f.length) {
    const _ = f.map(Vn).join("");
    r = Z(r) ? D(`${r.content}${_}`, !0) : fe(["(", r, `) + "${_}"`]);
  }
  return {
    props: [U(r, a)]
  };
}), dl = (e, t, n) => {
  const { exp: i, loc: s } = e;
  return i || n.onError(
    ce(61, s)
  ), {
    props: [],
    needRuntime: n.helper(ar)
  };
}, ml = (e, t) => {
  if (e.type === 1 && e.tagType === 1 && t.isBuiltInComponent(e.tag) === ii)
    return () => {
      if (!e.children.length)
        return;
      ur(e) && t.onError(
        ce(
          62,
          {
            start: e.children[0].loc.start,
            end: e.children[e.children.length - 1].loc.end,
            source: ""
          }
        )
      );
      const i = e.children[0];
      if (i.type === 1)
        for (const s of i.props)
          s.type === 7 && s.name === "show" && e.props.push({
            type: 6,
            name: "persisted",
            nameLoc: e.loc,
            value: void 0,
            loc: e.loc
          });
    };
};
function ur(e) {
  const t = e.children = e.children.filter(
    (i) => i.type !== 3 && !(i.type === 2 && !i.content.trim())
  ), n = t[0];
  return t.length !== 1 || n.type === 11 || n.type === 9 && n.branches.some(ur);
}
const bl = (e, t) => {
  e.type === 1 && e.tagType === 0 && (e.tag === "script" || e.tag === "style") && (process.env.NODE_ENV !== "production" && t.onError(
    ce(
      63,
      e.loc
    )
  ), t.removeNode());
};
function vl(e, t) {
  return e === "template" ? !0 : e in Li ? Li[e].has(t) : t in $i ? $i[t].has(e) : !(e in Bi && Bi[e].has(t) || t in ji && ji[t].has(e));
}
const Ve = /* @__PURE__ */ new Set(["h1", "h2", "h3", "h4", "h5", "h6"]), ke = /* @__PURE__ */ new Set([]), Li = {
  head: /* @__PURE__ */ new Set([
    "base",
    "basefront",
    "bgsound",
    "link",
    "meta",
    "title",
    "noscript",
    "noframes",
    "style",
    "script",
    "template"
  ]),
  optgroup: /* @__PURE__ */ new Set(["option"]),
  select: /* @__PURE__ */ new Set(["optgroup", "option", "hr"]),
  // table
  table: /* @__PURE__ */ new Set(["caption", "colgroup", "tbody", "tfoot", "thead"]),
  tr: /* @__PURE__ */ new Set(["td", "th"]),
  colgroup: /* @__PURE__ */ new Set(["col"]),
  tbody: /* @__PURE__ */ new Set(["tr"]),
  thead: /* @__PURE__ */ new Set(["tr"]),
  tfoot: /* @__PURE__ */ new Set(["tr"]),
  // these elements can not have any children elements
  script: ke,
  iframe: ke,
  option: ke,
  textarea: ke,
  style: ke,
  title: ke
}, $i = {
  // sections
  html: ke,
  body: /* @__PURE__ */ new Set(["html"]),
  head: /* @__PURE__ */ new Set(["html"]),
  // table
  td: /* @__PURE__ */ new Set(["tr"]),
  colgroup: /* @__PURE__ */ new Set(["table"]),
  caption: /* @__PURE__ */ new Set(["table"]),
  tbody: /* @__PURE__ */ new Set(["table"]),
  tfoot: /* @__PURE__ */ new Set(["table"]),
  col: /* @__PURE__ */ new Set(["colgroup"]),
  th: /* @__PURE__ */ new Set(["tr"]),
  thead: /* @__PURE__ */ new Set(["table"]),
  tr: /* @__PURE__ */ new Set(["tbody", "thead", "tfoot"]),
  // data list
  dd: /* @__PURE__ */ new Set(["dl", "div"]),
  dt: /* @__PURE__ */ new Set(["dl", "div"]),
  // other
  figcaption: /* @__PURE__ */ new Set(["figure"]),
  // li: new Set(["ul", "ol"]),
  summary: /* @__PURE__ */ new Set(["details"]),
  area: /* @__PURE__ */ new Set(["map"])
}, Bi = {
  p: /* @__PURE__ */ new Set([
    "address",
    "article",
    "aside",
    "blockquote",
    "center",
    "details",
    "dialog",
    "dir",
    "div",
    "dl",
    "fieldset",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "li",
    "main",
    "nav",
    "menu",
    "ol",
    "p",
    "pre",
    "section",
    "table",
    "ul"
  ]),
  svg: /* @__PURE__ */ new Set([
    "b",
    "blockquote",
    "br",
    "code",
    "dd",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "hr",
    "i",
    "img",
    "li",
    "menu",
    "meta",
    "ol",
    "p",
    "pre",
    "ruby",
    "s",
    "small",
    "span",
    "strong",
    "sub",
    "sup",
    "table",
    "u",
    "ul",
    "var"
  ])
}, ji = {
  a: /* @__PURE__ */ new Set(["a"]),
  button: /* @__PURE__ */ new Set(["button"]),
  dd: /* @__PURE__ */ new Set(["dd", "dt"]),
  dt: /* @__PURE__ */ new Set(["dd", "dt"]),
  form: /* @__PURE__ */ new Set(["form"]),
  li: /* @__PURE__ */ new Set(["li"]),
  h1: Ve,
  h2: Ve,
  h3: Ve,
  h4: Ve,
  h5: Ve,
  h6: Ve
}, gl = (e, t) => {
  if (e.type === 1 && e.tagType === 0 && t.parent && t.parent.type === 1 && t.parent.tagType === 0 && !vl(t.parent.tag, e.tag)) {
    const n = new SyntaxError(
      `<${e.tag}> cannot be child of <${t.parent.tag}>, according to HTML specifications. This can cause hydration errors or potentially disrupt future functionality.`
    );
    n.loc = e.loc, t.onWarn(n);
  }
}, yl = [
  sl,
  ...process.env.NODE_ENV !== "production" ? [ml, gl] : []
], El = {
  cloak: tl,
  html: ol,
  text: ll,
  model: ul,
  // override compiler-core
  on: hl,
  // override compiler-core
  show: dl
};
function wl(e, t = {}) {
  return el(
    e,
    Oe({}, il, t, {
      nodeTransforms: [
        // ignore <script> and <tag>
        // this is not put inside DOMNodeTransforms because that list is used
        // by compiler-ssr to generate vnode fallback branches
        bl,
        ...yl,
        ...t.nodeTransforms || []
      ],
      directiveTransforms: Oe(
        {},
        El,
        t.directiveTransforms || {}
      ),
      transformHoist: null
    })
  );
}
/**
* @vue/server-renderer v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const { ensureValidVNode: Ku } = qt;
function In(e) {
  const t = e && e.__v_raw;
  return t ? In(t) : e;
}
function Sl(e) {
  return e ? e.__v_isRef === !0 : !1;
}
const De = [];
function Ol(e) {
  De.push(e);
}
function Tl() {
  De.pop();
}
let en = !1;
function cr(e, ...t) {
  if (en) return;
  en = !0;
  const n = De.length ? De[De.length - 1].component : null, i = n && n.appContext.config.warnHandler, s = Nl();
  if (i)
    _r(
      i,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((r) => {
          var a, o;
          return (o = (a = r.toString) == null ? void 0 : a.call(r)) != null ? o : JSON.stringify(r);
        }).join(""),
        n && n.proxy,
        s.map(
          ({ vnode: r }) => `at <${dr(n, r.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    s.length && r.push(`
`, ...xl(s)), console.warn(...r);
  }
  en = !1;
}
function Nl() {
  let e = De[De.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const i = e.component && e.component.parent;
    e = i && i.vnode;
  }
  return t;
}
function xl(e) {
  const t = [];
  return e.forEach((n, i) => {
    t.push(...i === 0 ? [] : [`
`], ...kl(n));
  }), t;
}
function kl({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", i = e.component ? e.component.parent == null : !1, s = ` at <${dr(
    e.component,
    e.type,
    i
  )}`, r = ">" + n;
  return e.props ? [s, ...Il(e.props), r] : [s + r];
}
function Il(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((i) => {
    t.push(...fr(i, e[i]));
  }), n.length > 3 && t.push(" ..."), t;
}
function fr(e, t, n) {
  return q(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Sl(t) ? (t = fr(e, In(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : Ss(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = In(t), n ? t : [`${e}=`, t]);
}
const pr = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function _r(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (s) {
    Cl(s, t, n);
  }
}
function Cl(e, t, n, i = !0) {
  const s = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: a } = t && t.appContext.config || ws;
  if (t) {
    let o = t.parent;
    const l = t.proxy, f = process.env.NODE_ENV !== "production" ? pr[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; o; ) {
      const _ = o.ec;
      if (_) {
        for (let p = 0; p < _.length; p++)
          if (_[p](e, l, f) === !1)
            return;
      }
      o = o.parent;
    }
    if (r) {
      _r(r, null, 10, [
        e,
        l,
        f
      ]);
      return;
    }
  }
  Al(e, n, s, i, a);
}
function Al(e, t, n, i = !0, s = !1) {
  if (process.env.NODE_ENV !== "production") {
    const r = pr[t];
    if (n && Ol(n), cr(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && Tl(), i)
      throw e;
    console.error(e);
  } else {
    if (s)
      throw e;
    console.error(e);
  }
}
let $e, gt = [];
function hr(e, t) {
  var n, i;
  $e = e, $e ? ($e.enabled = !0, gt.forEach(({ event: s, args: r }) => $e.emit(s, ...r)), gt = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((i = (n = window.navigator) == null ? void 0 : n.userAgent) != null && i.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    hr(r, t);
  }), setTimeout(() => {
    $e || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, gt = []);
  }, 3e3)) : gt = [];
}
{
  const e = sa(), t = (n, i) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(i), (r) => {
      s.length > 1 ? s.forEach((a) => a(r)) : s[0](r);
    };
  };
  t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => n
  ), t(
    "__VUE_SSR_SETTERS__",
    (n) => n
  );
}
process.env.NODE_ENV;
const Rl = /(?:^|[-_])\w/g, Dl = (e) => e.replace(Rl, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Pl(e, t = !0) {
  return Ss(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function dr(e, t, n = !1) {
  let i = Pl(t);
  if (!i && t.__file) {
    const s = t.__file.match(/([^/\\]+)\.\w+$/);
    s && (i = s[1]);
  }
  if (!i && e && e.parent) {
    const s = (r) => {
      for (const a in r)
        if (r[a] === t)
          return a;
    };
    i = s(
      e.components || e.parent.type.components
    ) || s(e.appContext.components);
  }
  return i ? Dl(i) : n ? "App" : "Anonymous";
}
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
const {
  createComponentInstance: qu,
  setCurrentRenderingInstance: zu,
  setupComponent: Hu,
  renderComponentRoot: Gu,
  normalizeVNode: Xu,
  pushWarningContext: Qu,
  popWarningContext: Yu
} = qt, { isVNode: Ju } = qt, { isVNode: Zu } = qt;
Wr();
var Cn = function(e, t) {
  return Cn = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
    n.__proto__ = i;
  } || function(n, i) {
    for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (n[s] = i[s]);
  }, Cn(e, t);
};
function mr(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Cn(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var R = function() {
  return R = Object.assign || function(t) {
    for (var n, i = 1, s = arguments.length; i < s; i++) {
      n = arguments[i];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, R.apply(this, arguments);
};
function si(e, t, n, i) {
  function s(r) {
    return r instanceof n ? r : new n(function(a) {
      a(r);
    });
  }
  return new (n || (n = Promise))(function(r, a) {
    function o(_) {
      try {
        f(i.next(_));
      } catch (p) {
        a(p);
      }
    }
    function l(_) {
      try {
        f(i.throw(_));
      } catch (p) {
        a(p);
      }
    }
    function f(_) {
      _.done ? r(_.value) : s(_.value).then(o, l);
    }
    f((i = i.apply(e, t || [])).next());
  });
}
function ri(e, t) {
  var n = { label: 0, sent: function() {
    if (r[0] & 1) throw r[1];
    return r[1];
  }, trys: [], ops: [] }, i, s, r, a;
  return a = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function o(f) {
    return function(_) {
      return l([f, _]);
    };
  }
  function l(f) {
    if (i) throw new TypeError("Generator is already executing.");
    for (; a && (a = 0, f[0] && (n = 0)), n; ) try {
      if (i = 1, s && (r = f[0] & 2 ? s.return : f[0] ? s.throw || ((r = s.return) && r.call(s), 0) : s.next) && !(r = r.call(s, f[1])).done) return r;
      switch (s = 0, r && (f = [f[0] & 2, r.value]), f[0]) {
        case 0:
        case 1:
          r = f;
          break;
        case 4:
          return n.label++, { value: f[1], done: !1 };
        case 5:
          n.label++, s = f[1], f = [0];
          continue;
        case 7:
          f = n.ops.pop(), n.trys.pop();
          continue;
        default:
          if (r = n.trys, !(r = r.length > 0 && r[r.length - 1]) && (f[0] === 6 || f[0] === 2)) {
            n = 0;
            continue;
          }
          if (f[0] === 3 && (!r || f[1] > r[0] && f[1] < r[3])) {
            n.label = f[1];
            break;
          }
          if (f[0] === 6 && n.label < r[1]) {
            n.label = r[1], r = f;
            break;
          }
          if (r && n.label < r[2]) {
            n.label = r[2], n.ops.push(f);
            break;
          }
          r[2] && n.ops.pop(), n.trys.pop();
          continue;
      }
      f = t.call(e, n);
    } catch (_) {
      f = [6, _], s = 0;
    } finally {
      i = r = 0;
    }
    if (f[0] & 5) throw f[1];
    return { value: f[0] ? f[1] : void 0, done: !0 };
  }
}
function oe(e, t, n) {
  if (n || arguments.length === 2) for (var i = 0, s = t.length, r; i < s; i++)
    (r || !(i in t)) && (r || (r = Array.prototype.slice.call(t, 0, i)), r[i] = t[i]);
  return e.concat(r || Array.prototype.slice.call(t));
}
var Fi = (
  /** @class */
  (function() {
    function e() {
      this.installedPlugins = [];
    }
    return e.prototype.install = function(t, n) {
      typeof t != "function" && (console.error("plugin.install must receive a function"), t = function() {
        return {};
      }), this.installedPlugins.push({ handler: t, options: n });
    }, e.prototype.extend = function(t) {
      var n = function(r) {
        var a = r.handler, o = r.options;
        return a(t, o);
      }, i = function(r) {
        var a = r[0], o = r[1];
        t[a] = typeof o == "function" ? o.bind(t) : o;
      }, s = function(r) {
        r = typeof r == "object" ? r : {}, Object.entries(r).forEach(i);
      };
      this.installedPlugins.map(n).forEach(s);
    }, e.prototype.reset = function() {
      this.installedPlugins = [];
    }, e;
  })()
), pe = {
  global: {
    stubs: {
      transition: !0,
      "transition-group": !0
    },
    provide: {},
    components: {},
    config: {},
    directives: {},
    mixins: [],
    mocks: {},
    plugins: [],
    renderStubDefaultSlot: !1
  },
  plugins: {
    VueWrapper: new Fi(),
    DOMWrapper: new Fi()
  }
};
function Ui(e, t) {
  if (t.stubs)
    if (Array.isArray(t.stubs))
      t.stubs.forEach(function(o) {
        return e[o] = !0;
      });
    else
      for (var n = 0, i = Object.entries(t.stubs); n < i.length; n++) {
        var s = i[n], r = s[0], a = s[1];
        e[r] = a;
      }
}
function Ml(e, t) {
  return R(R(R({}, e), t), { globalProperties: R(R({}, e?.globalProperties), t?.globalProperties) });
}
function Vl(e) {
  var t, n, i;
  e === void 0 && (e = {});
  var s = {}, r = (t = pe?.global) !== null && t !== void 0 ? t : {};
  Ui(s, r), Ui(s, e);
  var a = (i = (n = e.renderStubDefaultSlot) !== null && n !== void 0 ? n : r.renderStubDefaultSlot || pe?.renderStubDefaultSlot) !== null && i !== void 0 ? i : !1;
  return pe.renderStubDefaultSlot === !0 && console.warn("config.renderStubDefaultSlot is deprecated, use config.global.renderStubDefaultSlot instead"), {
    mixins: oe(oe([], r.mixins || [], !0), e.mixins || [], !0),
    plugins: oe(oe([], r.plugins || [], !0), e.plugins || [], !0),
    stubs: s,
    components: R(R({}, r.components), e.components),
    provide: R(R({}, r.provide), e.provide),
    mocks: R(R({}, r.mocks), e.mocks),
    config: Ml(r.config, e.config),
    directives: R(R({}, r.directives), e.directives),
    renderStubDefaultSlot: a
  };
}
var Be = function(e) {
  return !!e && typeof e == "object";
};
function Ll(e) {
  if (e instanceof Object) {
    var t = e.constructor && e.constructor.toString().substring(0, 5) === "class";
    if (!("prototype" in e))
      return t;
    var n = e.prototype, i = n.constructor && n.constructor.toString && n.constructor.toString().substring(0, 5) === "class";
    return t || i;
  }
}
var br = function(e, t) {
  var n;
  return !Be(e) || !Be(t) ? t : (Object.keys(t).concat(Ll(t) ? Object.getOwnPropertyNames((n = Object.getPrototypeOf(t)) !== null && n !== void 0 ? n : {}) : Object.getOwnPropertyNames(t)).forEach(function(i) {
    var s = e[i], r = t[i];
    Array.isArray(s) && Array.isArray(r) || r instanceof Date ? e[i] = r : Be(s) && Be(r) ? e[i] = br(Object.assign({}, s), r) : e[i] = r;
  }), e);
};
function $l(e) {
  return typeof e == "function" && "__vccOpts" in e;
}
function ai(e) {
  return !!(e && (typeof e == "object" || typeof e == "function"));
}
function oi(e) {
  return typeof e == "function" && !$l(e);
}
function et(e) {
  return !!(e && typeof e == "object");
}
function Bl(e) {
  var t, n;
  return e.nodeType !== Node.COMMENT_NODE && (n = (t = e.textContent) === null || t === void 0 ? void 0 : t.trim()) !== null && n !== void 0 ? n : "";
}
function vr(e, t) {
  return e.hasOwnProperty(t);
}
function jl(e) {
  return !!e;
}
function Fl(e) {
  return typeof e == "object" && "ref" in e;
}
function gr(e) {
  return Array.isArray(e) ? e.reduce(function(t, n) {
    return t[n] = !0, t;
  }, {}) : e;
}
var yr = function(e) {
  return e.match(/^v[A-Z].*/);
};
function Wi(e) {
  var t = gr(e);
  return Object.fromEntries(Object.entries(t).filter(function(n) {
    var i = n[0];
    return !yr(i);
  }));
}
function Ul(e) {
  var t = gr(e);
  return Object.fromEntries(Object.entries(t).filter(function(n) {
    var i = n[0], s = n[1];
    return yr(i) && s !== !1;
  }).map(function(n) {
    var i = n[0], s = n[1];
    return [i.substring(1), s];
  }));
}
function Wl(e) {
  return e && e.$.devtoolsRawSetupState;
}
function Kl(e) {
  return e && e.$.setupState.__isScriptSetup;
}
var Ki, ql = function() {
  return Ki || (Ki = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
}, zl = [
  "stop",
  "prevent",
  "self",
  "exact",
  "prevent",
  "capture"
], Hl = ["ctrl", "shift", "alt", "meta"], Gl = ["left", "middle", "right"], Xl = {
  backspace: 8,
  tab: 9,
  enter: 13,
  esc: 27,
  space: 32,
  pageup: 33,
  pagedown: 34,
  end: 35,
  home: 36,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  insert: 45,
  delete: 46
}, Er = {
  abort: {
    eventInterface: "Event",
    bubbles: !1,
    cancelable: !1
  },
  afterprint: {
    eventInterface: "Event",
    bubbles: !1,
    cancelable: !1
  },
  animationend: {
    eventInterface: "AnimationEvent",
    bubbles: !0,
    cancelable: !1
  },
  animationiteration: {
    eventInterface: "AnimationEvent",
    bubbles: !0,
    cancelable: !1
  },
  animationstart: {
    eventInterface: "AnimationEvent",
    bubbles: !0,
    cancelable: !1
  },
  appinstalled: {
    eventInterface: "Event",
    bubbles: !1,
    cancelable: !1
  },
  /**
   * @deprecated
   */
  audioprocess: {
    eventInterface: "AudioProcessingEvent",
    bubbles: !1,
    cancelable: !1
  },
  audioend: {
    eventInterface: "Event",
    bubbles: !1,
    cancelable: !1
  },
  audiostart: {
    eventInterface: "Event",
    bubbles: !1,
    cancelable: !1
  },
  beforeprint: {
    eventInterface: "Event",
    bubbles: !1,
    cancelable: !1
  },
  beforeunload: {
    eventInterface: "BeforeUnloadEvent",
    bubbles: !1,
    cancelable: !0
  },
  beginEvent: {
    eventInterface: "TimeEvent",
    bubbles: !1,
    cancelable: !1
  },
  blur: {
    eventInterface: "FocusEvent",
    bubbles: !1,
    cancelable: !1
  },
  boundary: {
    eventInterface: "SpeechSynthesisEvent",
    bubbles: !1,
    cancelable: !1
  },
  cached: {
    eventInterface: "Event",
    bubbles: !1,
    cancelable: !1
  },
  canplay: {
    eventInterface: "Event",
    bubbles: !1,
    cancelable: !1
  },
  canplaythrough: {
    eventInterface: "Event",
    bubbles: !1,
    cancelable: !1
  },
  change: {
    eventInterface: "Event",
    bubbles: !0,
    cancelable: !1
  },
  chargingchange: {
    eventInterface: "Event",
    bubbles: !1,
    cancelable: !1
  },
  chargingtimechange: {
    eventInterface: "Event",
    bubbles: !1,
    cancelable: !1
  },
  checking: {
    eventInterface: "Event",
    bubbles: !1,
    cancelable: !1
  },
  click: {
    eventInterface: "MouseEvent",
    bubbles: !0,
    cancelable: !0
  },
  close: {
    eventInterface: "Event",
    bubbles: !1,
    cancelable: !1
  },
  complete: {
    eventInterface: "OfflineAudioCompletionEvent",
    bubbles: !1,
    cancelable: !1
  },
  compositionend: {
    eventInterface: "CompositionEvent",
    bubbles: !0,
    cancelable: !0
  },
  compositionstart: {
    eventInterface: "CompositionEvent",
    bubbles: !0,
    cancelable: !0
  },
  compositionupdate: {
    eventInterface: "CompositionEvent",
    bubbles: !0,
    cancelable: !1
  },
  contextmenu: {
    eventInterface: "MouseEvent",
    bubbles: !0,
    cancelable: !0
  },
  copy: {
    eventInterface: "ClipboardEvent",
    bubbles: !0,
    cancelable: !0
  },
  cut: {
    eventInterface: "ClipboardEvent",
    bubbles: !0,
    cancelable: !0
  },
  dblclick: {
    eventInterface: "MouseEvent",
    bubbles: !0,
    cancelable: !0
  },
  devicechange: {
    eventInterface: "Event",
    bubbles: !1,
    cancelable: !1
  },
  devicelight: {
    eventInterface: "DeviceLightEvent",
    bubbles: !1,
    cancelable: !1
  },
  devicemotion: {
    eventInterface: "DeviceMotionEvent",
    bubbles: !1,
    cancelable: !1
  },
  deviceorientation: {
    eventInterface: "DeviceOrientationEvent",
    bubbles: !1,
    cancelable: !1
  },
  deviceproximity: {
    eventInterface: "DeviceProximityEvent",
    bubbles: !1,
    cancelable: !1
  },
  dischargingtimechange: {
    eventInterface: "Event",
    bubbles: !1,
    cancelable: !1
  },
  DOMActivate: {
    eventInterface: "UIEvent",
    bubbles: !0,
    cancelable: !0
  },
  DOMAttributeNameChanged: {
    eventInterface: "MutationNameEvent",
    bubbles: !0,
    cancelable: !0
  },
  DOMAttrModified: {
    eventInterface: "MutationEvent",
    bubbles: !0,
    cancelable: !0
  },
  DOMCharacterDataModified: {
    eventInterface: "MutationEvent",
    bubbles: !0,
    cancelable: !0
  },
  DOMContentLoaded: {
    eventInterface: "Event",
    bubbles: !0,
    cancelable: !0
  },
  DOMElementNameChanged: {
    eventInterface: "MutationNameEvent",
    bubbles: !0,
    cancelable: !0
  },
  DOMFocusIn: {
    eventInterface: "FocusEvent",
    bubbles: !0,
    cancelable: !0
  },
  DOMFocusOut: {
    eventInterface: "FocusEvent",
    bubbles: !0,
    cancelable: !0
  },
  DOMNodeInserted: {
    eventInterface: "MutationEvent",
    bubbles: !0,
    cancelable: !0
  },
  DOMNodeInsertedIntoDocument: {
    eventInterface: "MutationEvent",
    bubbles: !0,
    cancelable: !0
  },
  DOMNodeRemoved: {
    eventInterface: "MutationEvent",
    bubbles: !0,
    cancelable: !0
  },
  DOMNodeRemovedFromDocument: {
    eventInterface: "MutationEvent",
    bubbles: !0,
    cancelable: !0
  },
  /**
   * @deprecated
   */
  DOMSubtreeModified: {
    eventInterface: "MutationEvent",
    bubbles: !0,
    cancelable: !1
  },
  downloading: {
    eventInterface: "Event",
    bubbles: !1,
    cancelable: !1
  },
  drag: {
    eventInterface: "DragEvent",
    bubbles: !0,
    cancelable: !0
  },
  dragend: {
    eventInterface: "DragEvent",
    bubbles: !0,
    cancelable: !1
  },
  dragenter: {
    eventInterface: "DragEvent",
    bubbles: !0,
    cancelable: !0
  },
  dragleave: {
    eventInterface: "DragEvent",
    bubbles: !0,
    cancelable: !1
  },
  dragover: {
    eventInterface: "DragEvent",
    bubbles: !0,
    cancelable: !0
  },
  dragstart: {
    eventInterface: "DragEvent",
    bubbles: !0,
    cancelable: !0
  },
  drop: {
    eventInterface: "DragEvent",
    bubbles: !0,
    cancelable: !0
  },
  durationchange: {
    eventInterface: "Event",
    bubbles: !1,
    cancelable: !1
  },
  emptied: {
    eventInterface: "Event",
    bubbles: !1,
    cancelable: !1
  },
  end: {
    eventInterface: "Event",
    bubbles: !1,
    cancelable: !1
  },
  ended: {
    eventInterface: "Event",
    bubbles: !1,
    cancelable: !1
  },
  endEvent: {
    eventInterface: "TimeEvent",
    bubbles: !1,
    cancelable: !1
  },
  error: {
    eventInterface: "Event",
    bubbles: !1,
    cancelable: !1
  },
  focus: {
    eventInterface: "FocusEvent",
    bubbles: !1,
    cancelable: !1
  },
  focusin: {
    eventInterface: "FocusEvent",
    bubbles: !0,
    cancelable: !1
  },
  focusout: {
    eventInterface: "FocusEvent",
    bubbles: !0,
    cancelable: !1
  },
  fullscreenchange: {
    eventInterface: "Event",
    bubbles: !0,
    cancelable: !1
  },
  fullscreenerror: {
    eventInterface: "Event",
    bubbles: !0,
    cancelable: !1
  },
  gamepadconnected: {
    eventInterface: "GamepadEvent",
    bubbles: !1,
    cancelable: !1
  },
  gamepaddisconnected: {
    eventInterface: "GamepadEvent",
    bubbles: !1,
    cancelable: !1
  },
  gotpointercapture: {
    eventInterface: "PointerEvent",
    bubbles: !1,
    cancelable: !1
  },
  hashchange: {
    eventInterface: "HashChangeEvent",
    bubbles: !0,
    cancelable: !1
  },
  lostpointercapture: {
    eventInterface: "PointerEvent",
    bubbles: !1,
    cancelable: !1
  },
  input: {
    eventInterface: "Event",
    bubbles: !0,
    cancelable: !1
  },
  invalid: {
    eventInterface: "Event",
    cancelable: !0,
    bubbles: !1
  },
  keydown: {
    eventInterface: "KeyboardEvent",
    bubbles: !0,
    cancelable: !0
  },
  keypress: {
    eventInterface: "KeyboardEvent",
    bubbles: !0,
    cancelable: !0
  },
  keyup: {
    eventInterface: "KeyboardEvent",
    bubbles: !0,
    cancelable: !0
  },
  languagechange: {
    eventInterface: "Event",
    bubbles: !1,
    cancelable: !1
  },
  levelchange: {
    eventInterface: "Event",
    bubbles: !1,
    cancelable: !1
  },
  load: {
    eventInterface: "UIEvent",
    bubbles: !1,
    cancelable: !1
  },
  loadeddata: {
    eventInterface: "Event",
    bubbles: !1,
    cancelable: !1
  },
  loadedmetadata: {
    eventInterface: "Event",
    bubbles: !1,
    cancelable: !1
  },
  loadend: {
    eventInterface: "ProgressEvent",
    bubbles: !1,
    cancelable: !1
  },
  loadstart: {
    eventInterface: "ProgressEvent",
    bubbles: !1,
    cancelable: !1
  },
  mark: {
    eventInterface: "SpeechSynthesisEvent",
    bubbles: !1,
    cancelable: !1
  },
  message: {
    eventInterface: "MessageEvent",
    bubbles: !1,
    cancelable: !1
  },
  messageerror: {
    eventInterface: "MessageEvent",
    bubbles: !1,
    cancelable: !1
  },
  mousedown: {
    eventInterface: "MouseEvent",
    bubbles: !0,
    cancelable: !0
  },
  mouseenter: {
    eventInterface: "MouseEvent",
    bubbles: !1,
    cancelable: !1
  },
  mouseleave: {
    eventInterface: "MouseEvent",
    bubbles: !1,
    cancelable: !1
  },
  mousemove: {
    eventInterface: "MouseEvent",
    bubbles: !0,
    cancelable: !0
  },
  mouseout: {
    eventInterface: "MouseEvent",
    bubbles: !0,
    cancelable: !0
  },
  mouseover: {
    eventInterface: "MouseEvent",
    bubbles: !0,
    cancelable: !0
  },
  mouseup: {
    eventInterface: "MouseEvent",
    bubbles: !0,
    cancelable: !0
  },
  nomatch: {
    eventInterface: "SpeechRecognitionEvent",
    bubbles: !1,
    cancelable: !1
  },
  notificationclick: {
    eventInterface: "NotificationEvent",
    bubbles: !1,
    cancelable: !1
  },
  noupdate: {
    eventInterface: "Event",
    bubbles: !1,
    cancelable: !1
  },
  obsolete: {
    eventInterface: "Event",
    bubbles: !1,
    cancelable: !1
  },
  offline: {
    eventInterface: "Event",
    bubbles: !1,
    cancelable: !1
  },
  online: {
    eventInterface: "Event",
    bubbles: !1,
    cancelable: !1
  },
  open: {
    eventInterface: "Event",
    bubbles: !1,
    cancelable: !1
  },
  orientationchange: {
    eventInterface: "Event",
    bubbles: !1,
    cancelable: !1
  },
  pagehide: {
    eventInterface: "PageTransitionEvent",
    bubbles: !1,
    cancelable: !1
  },
  pageshow: {
    eventInterface: "PageTransitionEvent",
    bubbles: !1,
    cancelable: !1
  },
  paste: {
    eventInterface: "ClipboardEvent",
    bubbles: !0,
    cancelable: !0
  },
  pause: {
    eventInterface: "SpeechSynthesisEvent",
    bubbles: !1,
    cancelable: !1
  },
  pointercancel: {
    eventInterface: "PointerEvent",
    bubbles: !0,
    cancelable: !1
  },
  pointerdown: {
    eventInterface: "PointerEvent",
    bubbles: !0,
    cancelable: !0
  },
  pointerenter: {
    eventInterface: "PointerEvent",
    bubbles: !1,
    cancelable: !1
  },
  pointerleave: {
    eventInterface: "PointerEvent",
    bubbles: !1,
    cancelable: !1
  },
  pointerlockchange: {
    eventInterface: "Event",
    bubbles: !0,
    cancelable: !1
  },
  pointerlockerror: {
    eventInterface: "Event",
    bubbles: !0,
    cancelable: !1
  },
  pointermove: {
    eventInterface: "PointerEvent",
    bubbles: !0,
    cancelable: !0
  },
  pointerout: {
    eventInterface: "PointerEvent",
    bubbles: !0,
    cancelable: !0
  },
  pointerover: {
    eventInterface: "PointerEvent",
    bubbles: !0,
    cancelable: !0
  },
  pointerup: {
    eventInterface: "PointerEvent",
    bubbles: !0,
    cancelable: !0
  },
  play: {
    eventInterface: "Event",
    bubbles: !1,
    cancelable: !1
  },
  playing: {
    eventInterface: "Event",
    bubbles: !1,
    cancelable: !1
  },
  popstate: {
    eventInterface: "PopStateEvent",
    bubbles: !0,
    cancelable: !1
  },
  progress: {
    eventInterface: "ProgressEvent",
    bubbles: !1,
    cancelable: !1
  },
  push: {
    eventInterface: "PushEvent",
    bubbles: !1,
    cancelable: !1
  },
  pushsubscriptionchange: {
    eventInterface: "PushEvent",
    bubbles: !1,
    cancelable: !1
  },
  ratechange: {
    eventInterface: "Event",
    bubbles: !1,
    cancelable: !1
  },
  readystatechange: {
    eventInterface: "Event",
    bubbles: !1,
    cancelable: !1
  },
  repeatEvent: {
    eventInterface: "TimeEvent",
    bubbles: !1,
    cancelable: !1
  },
  reset: {
    eventInterface: "Event",
    bubbles: !0,
    cancelable: !0
  },
  resize: {
    eventInterface: "UIEvent",
    bubbles: !1,
    cancelable: !1
  },
  resourcetimingbufferfull: {
    eventInterface: "Performance",
    bubbles: !0,
    cancelable: !0
  },
  result: {
    eventInterface: "SpeechRecognitionEvent",
    bubbles: !1,
    cancelable: !1
  },
  resume: {
    eventInterface: "SpeechSynthesisEvent",
    bubbles: !1,
    cancelable: !1
  },
  scroll: {
    eventInterface: "UIEvent",
    bubbles: !1,
    cancelable: !1
  },
  seeked: {
    eventInterface: "Event",
    bubbles: !1,
    cancelable: !1
  },
  seeking: {
    eventInterface: "Event",
    bubbles: !1,
    cancelable: !1
  },
  select: {
    eventInterface: "UIEvent",
    bubbles: !0,
    cancelable: !1
  },
  selectstart: {
    eventInterface: "Event",
    bubbles: !0,
    cancelable: !0
  },
  selectionchange: {
    eventInterface: "Event",
    bubbles: !1,
    cancelable: !1
  },
  show: {
    eventInterface: "MouseEvent",
    bubbles: !1,
    cancelable: !1
  },
  slotchange: {
    eventInterface: "Event",
    bubbles: !0,
    cancelable: !1
  },
  soundend: {
    eventInterface: "Event",
    bubbles: !1,
    cancelable: !1
  },
  soundstart: {
    eventInterface: "Event",
    bubbles: !1,
    cancelable: !1
  },
  speechend: {
    eventInterface: "Event",
    bubbles: !1,
    cancelable: !1
  },
  speechstart: {
    eventInterface: "Event",
    bubbles: !1,
    cancelable: !1
  },
  stalled: {
    eventInterface: "Event",
    bubbles: !1,
    cancelable: !1
  },
  start: {
    eventInterface: "SpeechSynthesisEvent",
    bubbles: !1,
    cancelable: !1
  },
  storage: {
    eventInterface: "StorageEvent",
    bubbles: !1,
    cancelable: !1
  },
  submit: {
    eventInterface: "Event",
    bubbles: !0,
    cancelable: !0
  },
  success: {
    eventInterface: "Event",
    bubbles: !1,
    cancelable: !1
  },
  suspend: {
    eventInterface: "Event",
    bubbles: !1,
    cancelable: !1
  },
  SVGAbort: {
    eventInterface: "SVGEvent",
    bubbles: !0,
    cancelable: !1
  },
  SVGError: {
    eventInterface: "SVGEvent",
    bubbles: !0,
    cancelable: !1
  },
  SVGLoad: {
    eventInterface: "SVGEvent",
    bubbles: !1,
    cancelable: !1
  },
  SVGResize: {
    eventInterface: "SVGEvent",
    bubbles: !0,
    cancelable: !1
  },
  SVGScroll: {
    eventInterface: "SVGEvent",
    bubbles: !0,
    cancelable: !1
  },
  SVGUnload: {
    eventInterface: "SVGEvent",
    bubbles: !1,
    cancelable: !1
  },
  SVGZoom: {
    eventInterface: "SVGZoomEvent",
    bubbles: !0,
    cancelable: !1
  },
  timeout: {
    eventInterface: "ProgressEvent",
    bubbles: !1,
    cancelable: !1
  },
  timeupdate: {
    eventInterface: "Event",
    bubbles: !1,
    cancelable: !1
  },
  touchcancel: {
    eventInterface: "TouchEvent",
    bubbles: !0,
    cancelable: !1
  },
  touchend: {
    eventInterface: "TouchEvent",
    bubbles: !0,
    cancelable: !0
  },
  touchmove: {
    eventInterface: "TouchEvent",
    bubbles: !0,
    cancelable: !0
  },
  touchstart: {
    eventInterface: "TouchEvent",
    bubbles: !0,
    cancelable: !0
  },
  transitionend: {
    eventInterface: "TransitionEvent",
    bubbles: !0,
    cancelable: !0
  },
  unload: {
    eventInterface: "UIEvent",
    bubbles: !1,
    cancelable: !1
  },
  updateready: {
    eventInterface: "Event",
    bubbles: !1,
    cancelable: !1
  },
  userproximity: {
    eventInterface: "UserProximityEvent",
    bubbles: !1,
    cancelable: !1
  },
  voiceschanged: {
    eventInterface: "Event",
    bubbles: !1,
    cancelable: !1
  },
  visibilitychange: {
    eventInterface: "Event",
    bubbles: !0,
    cancelable: !1
  },
  volumechange: {
    eventInterface: "Event",
    bubbles: !1,
    cancelable: !1
  },
  waiting: {
    eventInterface: "Event",
    bubbles: !1,
    cancelable: !1
  },
  wheel: {
    eventInterface: "WheelEvent",
    bubbles: !0,
    cancelable: !0
  }
};
function Ql(e, t) {
  for (var n = [], i = [], s = 0; s < e.length; s++) {
    var r = e[s];
    zl.includes(r) || (Hl.includes(r) || Gl.includes(r) && t ? i.push(r) : n.push(r));
  }
  return {
    keyModifiers: n,
    systemModifiers: i
  };
}
function Yl(e) {
  var t = e.modifiers, n = e.options, i = n === void 0 ? {} : n, s = e.eventType, r = s === "click", a = Ql(t, r), o = a.keyModifiers, l = a.systemModifiers;
  r && (l.includes("right") ? (s = "contextmenu", i.button = 2) : l.includes("middle") && (s = "mouseup", i.button = 1));
  var f = Er[s] || {
    eventInterface: "Event",
    cancelable: !0,
    bubbles: !0
  }, _ = l.reduce(function(E, S) {
    return E["".concat(S, "Key")] = !0, E;
  }, {}), p = Xl[o[0]] || i && (i.keyCode || i.code), m = R(R(R(R({}, _), i), {
    bubbles: f.bubbles,
    cancelable: f.cancelable,
    // Any derived options should go here
    keyCode: p,
    code: p
  }), o[0] ? { key: o[0] } : {});
  return {
    eventProperties: m,
    meta: f,
    eventType: s
  };
}
function Jl(e) {
  var t = Yl(e), n = t.eventProperties, i = t.meta, s = t.eventType, r = i.eventInterface, a = window[r], o = typeof a == "function" ? a : window.Event;
  return new o(
    s,
    // event properties can only be added when the event is instantiated
    // custom properties must be added after the event has been instantiated
    n
  );
}
function Zl(e, t) {
  var n = e.split("."), i = n[0], s = n.slice(1), r = {
    eventType: i,
    modifiers: s,
    options: t
  }, a = Jl(r), o = Object.getPrototypeOf(a);
  return t && Object.keys(t).forEach(function(l) {
    var f = Object.getOwnPropertyDescriptor(o, l), _ = !(f && f.set === void 0);
    _ && (a[l] = t[l]);
  }), a;
}
var wr = /* @__PURE__ */ new WeakMap();
function ot(e) {
  var t = e.source, n = e.stub;
  wr.set(n, t);
}
function qi(e) {
  return wr.get(e);
}
var li = function(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return (function(n) {
    var i = t[n];
    return i || (t[n] = e(n));
  });
}, eu = /-(\w)/g, zi = li(function(e) {
  return e.replace(eu, function(t, n) {
    return n ? n.toUpperCase() : "";
  });
}), Hi = li(function(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}), tu = /\B([A-Z])/g, nu = li(function(e) {
  return e.replace(tu, "-$1").toLowerCase();
});
function An(e, t) {
  var n = zi(e), i = Hi(n);
  return !!t && (t === e || t === n || t === i || Hi(zi(t)) === i);
}
function iu(e) {
  var t, n;
  return (n = (t = Es.compatUtils) === null || t === void 0 ? void 0 : t.isCompatEnabled(e)) !== null && n !== void 0 ? n : !1;
}
function Sr(e) {
  return !iu("GLOBAL_EXTEND") || typeof e != "function" ? !1 : vr(e, "super") && e.super.extend({}).super === e.super;
}
function pt(e) {
  return Sr(e) ? e.options : e;
}
function Gi(e) {
  return !!(e && typeof e == "object" && vr(e, "functional") && e.functional);
}
var Or = function(e, t) {
  return Object.keys(e?.setupState || {}).find(function(n) {
    var i;
    return ((i = Object.getOwnPropertyDescriptor(e.setupState, n)) === null || i === void 0 ? void 0 : i.value) === t;
  });
}, Tr = function(e, t) {
  if (!e || !e.parent)
    return null;
  var n = e.type.components;
  for (var i in n)
    if (n[i] === t)
      return i;
  return Or(e.parent, t) || null;
}, Nr = function(e, t) {
  return et(t) ? (
    // If the component we stub is a script setup component and is automatically
    // imported by unplugin-vue-components we can only get its name through
    // the `__name` property.
    Or(e, t) || t.name || t.__name || ""
  ) : Sr(t) ? pt(t).name || "" : oi(t) ? t.displayName || t.name : "";
};
function xr(e, t) {
  var n, i, s, r = pt(t);
  if (!e.component)
    return !1;
  var a = e.type;
  if (!ai(a))
    return !1;
  if (typeof r == "string")
    return (i = (n = e.el) === null || n === void 0 ? void 0 : n.matches) === null || i === void 0 ? void 0 : i.call(n, r);
  var o = [
    a,
    qi(a)
  ].filter(Boolean), l = (s = qi(r)) !== null && s !== void 0 ? s : r;
  if (o.includes(l))
    return !0;
  var f;
  f = Nr(e.component, a);
  var _ = r.name;
  if (f && _)
    return An(_, f);
  if (f = Tr(e.component, a) || void 0, e.component.parent) {
    var p = e.component.parent.type.components;
    for (var m in p)
      !_ && p[m] === r && (_ = m), !f && p[m] === a && (f = m);
  }
  return _ && f ? An(_, f) : !1;
}
function su(e) {
  return !!e && typeof e == "object";
}
function At(e, t) {
  if (t && Array.isArray(t)) {
    var n = oe([], t, !0).reverse().filter(su);
    n.forEach(function(i) {
      Array.isArray(i) ? At(e, i) : e.unshift(i);
    });
  }
}
function ru(e, t) {
  for (var n = [], i = [e]; i.length; ) {
    var s = i.shift();
    if (At(i, s.children), s.component && At(i, [s.component.subTree]), s.suspense) {
      var r = s.suspense.activeBranch;
      At(i, [r]);
    }
    xr(s, t) && !n.includes(s) && n.push(s);
  }
  return n;
}
function au(e, t) {
  var n = ru(e, t);
  return typeof t == "string" && (n = n.filter(function(i) {
    var s;
    return ((s = i.component.parent) === null || s === void 0 ? void 0 : s.vnode.el) !== i.el;
  })), n.map(function(i) {
    return i.component;
  });
}
function we(e) {
  return new Proxy(/* @__PURE__ */ Object.create(null), {
    get: function(t, n) {
      switch (n) {
        case "then":
          return;
        case "exists":
          return function() {
            return !1;
          };
        default:
          throw new Error("Cannot call ".concat(String(n), " on an empty ").concat(e, "."));
      }
    }
  });
}
/*!
 * isElementVisible
 * Adapted from https://github.com/testing-library/jest-dom
 * Licensed under the MIT License.
 */
function ou(e) {
  if (!(e instanceof HTMLElement) && !(e instanceof SVGElement))
    return !1;
  var t = getComputedStyle(e), n = t.display, i = t.visibility, s = t.opacity;
  return n !== "none" && i !== "hidden" && i !== "collapse" && s !== "0";
}
function lu(e) {
  return !e.hasAttribute("hidden") && (e.nodeName === "DETAILS" ? e.hasAttribute("open") : !0);
}
function kr(e) {
  return e.nodeName !== "#comment" && ou(e) && lu(e) && (!e.parentElement || kr(e.parentElement));
}
function Xe(e) {
  return e instanceof Element;
}
var ze;
(function(e) {
  e[e.DOMWrapper = 0] = "DOMWrapper", e[e.VueWrapper = 1] = "VueWrapper";
})(ze || (ze = {}));
var ui = {};
function Ir(e, t) {
  ui[e] = t;
}
var lt = function(e) {
  return ui[ze.DOMWrapper](e);
}, Rt = function(e, t, n) {
  return ui[ze.VueWrapper](e, t, n);
};
function uu(e) {
  return e instanceof Element ? e.outerHTML : new XMLSerializer().serializeToString(e);
}
function cu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Cr = { exports: {} }, Qe = {}, yt = { exports: {} }, tn = {}, nn = {}, Xi;
function ci() {
  if (Xi) return nn;
  Xi = 1;
  function e(i) {
    this.__parent = i, this.__character_count = 0, this.__indent_count = -1, this.__alignment_count = 0, this.__wrap_point_index = 0, this.__wrap_point_character_count = 0, this.__wrap_point_indent_count = -1, this.__wrap_point_alignment_count = 0, this.__items = [];
  }
  e.prototype.clone_empty = function() {
    var i = new e(this.__parent);
    return i.set_indent(this.__indent_count, this.__alignment_count), i;
  }, e.prototype.item = function(i) {
    return i < 0 ? this.__items[this.__items.length + i] : this.__items[i];
  }, e.prototype.has_match = function(i) {
    for (var s = this.__items.length - 1; s >= 0; s--)
      if (this.__items[s].match(i))
        return !0;
    return !1;
  }, e.prototype.set_indent = function(i, s) {
    this.is_empty() && (this.__indent_count = i || 0, this.__alignment_count = s || 0, this.__character_count = this.__parent.get_indent_size(this.__indent_count, this.__alignment_count));
  }, e.prototype._set_wrap_point = function() {
    this.__parent.wrap_line_length && (this.__wrap_point_index = this.__items.length, this.__wrap_point_character_count = this.__character_count, this.__wrap_point_indent_count = this.__parent.next_line.__indent_count, this.__wrap_point_alignment_count = this.__parent.next_line.__alignment_count);
  }, e.prototype._should_wrap = function() {
    return this.__wrap_point_index && this.__character_count > this.__parent.wrap_line_length && this.__wrap_point_character_count > this.__parent.next_line.__character_count;
  }, e.prototype._allow_wrap = function() {
    if (this._should_wrap()) {
      this.__parent.add_new_line();
      var i = this.__parent.current_line;
      return i.set_indent(this.__wrap_point_indent_count, this.__wrap_point_alignment_count), i.__items = this.__items.slice(this.__wrap_point_index), this.__items = this.__items.slice(0, this.__wrap_point_index), i.__character_count += this.__character_count - this.__wrap_point_character_count, this.__character_count = this.__wrap_point_character_count, i.__items[0] === " " && (i.__items.splice(0, 1), i.__character_count -= 1), !0;
    }
    return !1;
  }, e.prototype.is_empty = function() {
    return this.__items.length === 0;
  }, e.prototype.last = function() {
    return this.is_empty() ? null : this.__items[this.__items.length - 1];
  }, e.prototype.push = function(i) {
    this.__items.push(i);
    var s = i.lastIndexOf(`
`);
    s !== -1 ? this.__character_count = i.length - s : this.__character_count += i.length;
  }, e.prototype.pop = function() {
    var i = null;
    return this.is_empty() || (i = this.__items.pop(), this.__character_count -= i.length), i;
  }, e.prototype._remove_indent = function() {
    this.__indent_count > 0 && (this.__indent_count -= 1, this.__character_count -= this.__parent.indent_size);
  }, e.prototype._remove_wrap_indent = function() {
    this.__wrap_point_indent_count > 0 && (this.__wrap_point_indent_count -= 1);
  }, e.prototype.trim = function() {
    for (; this.last() === " "; )
      this.__items.pop(), this.__character_count -= 1;
  }, e.prototype.toString = function() {
    var i = "";
    return this.is_empty() ? this.__parent.indent_empty_lines && (i = this.__parent.get_indent_string(this.__indent_count)) : (i = this.__parent.get_indent_string(this.__indent_count, this.__alignment_count), i += this.__items.join("")), i;
  };
  function t(i, s) {
    this.__cache = [""], this.__indent_size = i.indent_size, this.__indent_string = i.indent_char, i.indent_with_tabs || (this.__indent_string = new Array(i.indent_size + 1).join(i.indent_char)), s = s || "", i.indent_level > 0 && (s = new Array(i.indent_level + 1).join(this.__indent_string)), this.__base_string = s, this.__base_string_length = s.length;
  }
  t.prototype.get_indent_size = function(i, s) {
    var r = this.__base_string_length;
    return s = s || 0, i < 0 && (r = 0), r += i * this.__indent_size, r += s, r;
  }, t.prototype.get_indent_string = function(i, s) {
    var r = this.__base_string;
    return s = s || 0, i < 0 && (i = 0, r = ""), s += i * this.__indent_size, this.__ensure_cache(s), r += this.__cache[s], r;
  }, t.prototype.__ensure_cache = function(i) {
    for (; i >= this.__cache.length; )
      this.__add_column();
  }, t.prototype.__add_column = function() {
    var i = this.__cache.length, s = 0, r = "";
    this.__indent_size && i >= this.__indent_size && (s = Math.floor(i / this.__indent_size), i -= s * this.__indent_size, r = new Array(s + 1).join(this.__indent_string)), i && (r += new Array(i + 1).join(" ")), this.__cache.push(r);
  };
  function n(i, s) {
    this.__indent_cache = new t(i, s), this.raw = !1, this._end_with_newline = i.end_with_newline, this.indent_size = i.indent_size, this.wrap_line_length = i.wrap_line_length, this.indent_empty_lines = i.indent_empty_lines, this.__lines = [], this.previous_line = null, this.current_line = null, this.next_line = new e(this), this.space_before_token = !1, this.non_breaking_space = !1, this.previous_token_wrapped = !1, this.__add_outputline();
  }
  return n.prototype.__add_outputline = function() {
    this.previous_line = this.current_line, this.current_line = this.next_line.clone_empty(), this.__lines.push(this.current_line);
  }, n.prototype.get_line_number = function() {
    return this.__lines.length;
  }, n.prototype.get_indent_string = function(i, s) {
    return this.__indent_cache.get_indent_string(i, s);
  }, n.prototype.get_indent_size = function(i, s) {
    return this.__indent_cache.get_indent_size(i, s);
  }, n.prototype.is_empty = function() {
    return !this.previous_line && this.current_line.is_empty();
  }, n.prototype.add_new_line = function(i) {
    return this.is_empty() || !i && this.just_added_newline() ? !1 : (this.raw || this.__add_outputline(), !0);
  }, n.prototype.get_code = function(i) {
    this.trim(!0);
    var s = this.current_line.pop();
    s && (s[s.length - 1] === `
` && (s = s.replace(/\n+$/g, "")), this.current_line.push(s)), this._end_with_newline && this.__add_outputline();
    var r = this.__lines.join(`
`);
    return i !== `
` && (r = r.replace(/[\n]/g, i)), r;
  }, n.prototype.set_wrap_point = function() {
    this.current_line._set_wrap_point();
  }, n.prototype.set_indent = function(i, s) {
    return i = i || 0, s = s || 0, this.next_line.set_indent(i, s), this.__lines.length > 1 ? (this.current_line.set_indent(i, s), !0) : (this.current_line.set_indent(), !1);
  }, n.prototype.add_raw_token = function(i) {
    for (var s = 0; s < i.newlines; s++)
      this.__add_outputline();
    this.current_line.set_indent(-1), this.current_line.push(i.whitespace_before), this.current_line.push(i.text), this.space_before_token = !1, this.non_breaking_space = !1, this.previous_token_wrapped = !1;
  }, n.prototype.add_token = function(i) {
    this.__add_space_before_token(), this.current_line.push(i), this.space_before_token = !1, this.non_breaking_space = !1, this.previous_token_wrapped = this.current_line._allow_wrap();
  }, n.prototype.__add_space_before_token = function() {
    this.space_before_token && !this.just_added_newline() && (this.non_breaking_space || this.set_wrap_point(), this.current_line.push(" "));
  }, n.prototype.remove_indent = function(i) {
    for (var s = this.__lines.length; i < s; )
      this.__lines[i]._remove_indent(), i++;
    this.current_line._remove_wrap_indent();
  }, n.prototype.trim = function(i) {
    for (i = i === void 0 ? !1 : i, this.current_line.trim(); i && this.__lines.length > 1 && this.current_line.is_empty(); )
      this.__lines.pop(), this.current_line = this.__lines[this.__lines.length - 1], this.current_line.trim();
    this.previous_line = this.__lines.length > 1 ? this.__lines[this.__lines.length - 2] : null;
  }, n.prototype.just_added_newline = function() {
    return this.current_line.is_empty();
  }, n.prototype.just_added_blankline = function() {
    return this.is_empty() || this.current_line.is_empty() && this.previous_line.is_empty();
  }, n.prototype.ensure_empty_line_above = function(i, s) {
    for (var r = this.__lines.length - 2; r >= 0; ) {
      var a = this.__lines[r];
      if (a.is_empty())
        break;
      if (a.item(0).indexOf(i) !== 0 && a.item(-1) !== s) {
        this.__lines.splice(r + 1, 0, new e(this)), this.previous_line = this.__lines[this.__lines.length - 2];
        break;
      }
      r--;
    }
  }, nn.Output = n, nn;
}
var sn = {}, Qi;
function Ar() {
  if (Qi) return sn;
  Qi = 1;
  function e(t, n, i, s) {
    this.type = t, this.text = n, this.comments_before = null, this.newlines = i || 0, this.whitespace_before = s || "", this.parent = null, this.next = null, this.previous = null, this.opened = null, this.closed = null, this.directives = null;
  }
  return sn.Token = e, sn;
}
var rn = {}, Yi;
function Rr() {
  return Yi || (Yi = 1, (function(e) {
    var t = "\\x23\\x24\\x40\\x41-\\x5a\\x5f\\x61-\\x7a", n = "\\x24\\x30-\\x39\\x41-\\x5a\\x5f\\x61-\\x7a", i = "\\xaa\\xb5\\xba\\xc0-\\xd6\\xd8-\\xf6\\xf8-\\u02c1\\u02c6-\\u02d1\\u02e0-\\u02e4\\u02ec\\u02ee\\u0370-\\u0374\\u0376\\u0377\\u037a-\\u037d\\u0386\\u0388-\\u038a\\u038c\\u038e-\\u03a1\\u03a3-\\u03f5\\u03f7-\\u0481\\u048a-\\u0527\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05d0-\\u05ea\\u05f0-\\u05f2\\u0620-\\u064a\\u066e\\u066f\\u0671-\\u06d3\\u06d5\\u06e5\\u06e6\\u06ee\\u06ef\\u06fa-\\u06fc\\u06ff\\u0710\\u0712-\\u072f\\u074d-\\u07a5\\u07b1\\u07ca-\\u07ea\\u07f4\\u07f5\\u07fa\\u0800-\\u0815\\u081a\\u0824\\u0828\\u0840-\\u0858\\u08a0\\u08a2-\\u08ac\\u0904-\\u0939\\u093d\\u0950\\u0958-\\u0961\\u0971-\\u0977\\u0979-\\u097f\\u0985-\\u098c\\u098f\\u0990\\u0993-\\u09a8\\u09aa-\\u09b0\\u09b2\\u09b6-\\u09b9\\u09bd\\u09ce\\u09dc\\u09dd\\u09df-\\u09e1\\u09f0\\u09f1\\u0a05-\\u0a0a\\u0a0f\\u0a10\\u0a13-\\u0a28\\u0a2a-\\u0a30\\u0a32\\u0a33\\u0a35\\u0a36\\u0a38\\u0a39\\u0a59-\\u0a5c\\u0a5e\\u0a72-\\u0a74\\u0a85-\\u0a8d\\u0a8f-\\u0a91\\u0a93-\\u0aa8\\u0aaa-\\u0ab0\\u0ab2\\u0ab3\\u0ab5-\\u0ab9\\u0abd\\u0ad0\\u0ae0\\u0ae1\\u0b05-\\u0b0c\\u0b0f\\u0b10\\u0b13-\\u0b28\\u0b2a-\\u0b30\\u0b32\\u0b33\\u0b35-\\u0b39\\u0b3d\\u0b5c\\u0b5d\\u0b5f-\\u0b61\\u0b71\\u0b83\\u0b85-\\u0b8a\\u0b8e-\\u0b90\\u0b92-\\u0b95\\u0b99\\u0b9a\\u0b9c\\u0b9e\\u0b9f\\u0ba3\\u0ba4\\u0ba8-\\u0baa\\u0bae-\\u0bb9\\u0bd0\\u0c05-\\u0c0c\\u0c0e-\\u0c10\\u0c12-\\u0c28\\u0c2a-\\u0c33\\u0c35-\\u0c39\\u0c3d\\u0c58\\u0c59\\u0c60\\u0c61\\u0c85-\\u0c8c\\u0c8e-\\u0c90\\u0c92-\\u0ca8\\u0caa-\\u0cb3\\u0cb5-\\u0cb9\\u0cbd\\u0cde\\u0ce0\\u0ce1\\u0cf1\\u0cf2\\u0d05-\\u0d0c\\u0d0e-\\u0d10\\u0d12-\\u0d3a\\u0d3d\\u0d4e\\u0d60\\u0d61\\u0d7a-\\u0d7f\\u0d85-\\u0d96\\u0d9a-\\u0db1\\u0db3-\\u0dbb\\u0dbd\\u0dc0-\\u0dc6\\u0e01-\\u0e30\\u0e32\\u0e33\\u0e40-\\u0e46\\u0e81\\u0e82\\u0e84\\u0e87\\u0e88\\u0e8a\\u0e8d\\u0e94-\\u0e97\\u0e99-\\u0e9f\\u0ea1-\\u0ea3\\u0ea5\\u0ea7\\u0eaa\\u0eab\\u0ead-\\u0eb0\\u0eb2\\u0eb3\\u0ebd\\u0ec0-\\u0ec4\\u0ec6\\u0edc-\\u0edf\\u0f00\\u0f40-\\u0f47\\u0f49-\\u0f6c\\u0f88-\\u0f8c\\u1000-\\u102a\\u103f\\u1050-\\u1055\\u105a-\\u105d\\u1061\\u1065\\u1066\\u106e-\\u1070\\u1075-\\u1081\\u108e\\u10a0-\\u10c5\\u10c7\\u10cd\\u10d0-\\u10fa\\u10fc-\\u1248\\u124a-\\u124d\\u1250-\\u1256\\u1258\\u125a-\\u125d\\u1260-\\u1288\\u128a-\\u128d\\u1290-\\u12b0\\u12b2-\\u12b5\\u12b8-\\u12be\\u12c0\\u12c2-\\u12c5\\u12c8-\\u12d6\\u12d8-\\u1310\\u1312-\\u1315\\u1318-\\u135a\\u1380-\\u138f\\u13a0-\\u13f4\\u1401-\\u166c\\u166f-\\u167f\\u1681-\\u169a\\u16a0-\\u16ea\\u16ee-\\u16f0\\u1700-\\u170c\\u170e-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176c\\u176e-\\u1770\\u1780-\\u17b3\\u17d7\\u17dc\\u1820-\\u1877\\u1880-\\u18a8\\u18aa\\u18b0-\\u18f5\\u1900-\\u191c\\u1950-\\u196d\\u1970-\\u1974\\u1980-\\u19ab\\u19c1-\\u19c7\\u1a00-\\u1a16\\u1a20-\\u1a54\\u1aa7\\u1b05-\\u1b33\\u1b45-\\u1b4b\\u1b83-\\u1ba0\\u1bae\\u1baf\\u1bba-\\u1be5\\u1c00-\\u1c23\\u1c4d-\\u1c4f\\u1c5a-\\u1c7d\\u1ce9-\\u1cec\\u1cee-\\u1cf1\\u1cf5\\u1cf6\\u1d00-\\u1dbf\\u1e00-\\u1f15\\u1f18-\\u1f1d\\u1f20-\\u1f45\\u1f48-\\u1f4d\\u1f50-\\u1f57\\u1f59\\u1f5b\\u1f5d\\u1f5f-\\u1f7d\\u1f80-\\u1fb4\\u1fb6-\\u1fbc\\u1fbe\\u1fc2-\\u1fc4\\u1fc6-\\u1fcc\\u1fd0-\\u1fd3\\u1fd6-\\u1fdb\\u1fe0-\\u1fec\\u1ff2-\\u1ff4\\u1ff6-\\u1ffc\\u2071\\u207f\\u2090-\\u209c\\u2102\\u2107\\u210a-\\u2113\\u2115\\u2119-\\u211d\\u2124\\u2126\\u2128\\u212a-\\u212d\\u212f-\\u2139\\u213c-\\u213f\\u2145-\\u2149\\u214e\\u2160-\\u2188\\u2c00-\\u2c2e\\u2c30-\\u2c5e\\u2c60-\\u2ce4\\u2ceb-\\u2cee\\u2cf2\\u2cf3\\u2d00-\\u2d25\\u2d27\\u2d2d\\u2d30-\\u2d67\\u2d6f\\u2d80-\\u2d96\\u2da0-\\u2da6\\u2da8-\\u2dae\\u2db0-\\u2db6\\u2db8-\\u2dbe\\u2dc0-\\u2dc6\\u2dc8-\\u2dce\\u2dd0-\\u2dd6\\u2dd8-\\u2dde\\u2e2f\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303c\\u3041-\\u3096\\u309d-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312d\\u3131-\\u318e\\u31a0-\\u31ba\\u31f0-\\u31ff\\u3400-\\u4db5\\u4e00-\\u9fcc\\ua000-\\ua48c\\ua4d0-\\ua4fd\\ua500-\\ua60c\\ua610-\\ua61f\\ua62a\\ua62b\\ua640-\\ua66e\\ua67f-\\ua697\\ua6a0-\\ua6ef\\ua717-\\ua71f\\ua722-\\ua788\\ua78b-\\ua78e\\ua790-\\ua793\\ua7a0-\\ua7aa\\ua7f8-\\ua801\\ua803-\\ua805\\ua807-\\ua80a\\ua80c-\\ua822\\ua840-\\ua873\\ua882-\\ua8b3\\ua8f2-\\ua8f7\\ua8fb\\ua90a-\\ua925\\ua930-\\ua946\\ua960-\\ua97c\\ua984-\\ua9b2\\ua9cf\\uaa00-\\uaa28\\uaa40-\\uaa42\\uaa44-\\uaa4b\\uaa60-\\uaa76\\uaa7a\\uaa80-\\uaaaf\\uaab1\\uaab5\\uaab6\\uaab9-\\uaabd\\uaac0\\uaac2\\uaadb-\\uaadd\\uaae0-\\uaaea\\uaaf2-\\uaaf4\\uab01-\\uab06\\uab09-\\uab0e\\uab11-\\uab16\\uab20-\\uab26\\uab28-\\uab2e\\uabc0-\\uabe2\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufb00-\\ufb06\\ufb13-\\ufb17\\ufb1d\\ufb1f-\\ufb28\\ufb2a-\\ufb36\\ufb38-\\ufb3c\\ufb3e\\ufb40\\ufb41\\ufb43\\ufb44\\ufb46-\\ufbb1\\ufbd3-\\ufd3d\\ufd50-\\ufd8f\\ufd92-\\ufdc7\\ufdf0-\\ufdfb\\ufe70-\\ufe74\\ufe76-\\ufefc\\uff21-\\uff3a\\uff41-\\uff5a\\uff66-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc", s = "\\u0300-\\u036f\\u0483-\\u0487\\u0591-\\u05bd\\u05bf\\u05c1\\u05c2\\u05c4\\u05c5\\u05c7\\u0610-\\u061a\\u0620-\\u0649\\u0672-\\u06d3\\u06e7-\\u06e8\\u06fb-\\u06fc\\u0730-\\u074a\\u0800-\\u0814\\u081b-\\u0823\\u0825-\\u0827\\u0829-\\u082d\\u0840-\\u0857\\u08e4-\\u08fe\\u0900-\\u0903\\u093a-\\u093c\\u093e-\\u094f\\u0951-\\u0957\\u0962-\\u0963\\u0966-\\u096f\\u0981-\\u0983\\u09bc\\u09be-\\u09c4\\u09c7\\u09c8\\u09d7\\u09df-\\u09e0\\u0a01-\\u0a03\\u0a3c\\u0a3e-\\u0a42\\u0a47\\u0a48\\u0a4b-\\u0a4d\\u0a51\\u0a66-\\u0a71\\u0a75\\u0a81-\\u0a83\\u0abc\\u0abe-\\u0ac5\\u0ac7-\\u0ac9\\u0acb-\\u0acd\\u0ae2-\\u0ae3\\u0ae6-\\u0aef\\u0b01-\\u0b03\\u0b3c\\u0b3e-\\u0b44\\u0b47\\u0b48\\u0b4b-\\u0b4d\\u0b56\\u0b57\\u0b5f-\\u0b60\\u0b66-\\u0b6f\\u0b82\\u0bbe-\\u0bc2\\u0bc6-\\u0bc8\\u0bca-\\u0bcd\\u0bd7\\u0be6-\\u0bef\\u0c01-\\u0c03\\u0c46-\\u0c48\\u0c4a-\\u0c4d\\u0c55\\u0c56\\u0c62-\\u0c63\\u0c66-\\u0c6f\\u0c82\\u0c83\\u0cbc\\u0cbe-\\u0cc4\\u0cc6-\\u0cc8\\u0cca-\\u0ccd\\u0cd5\\u0cd6\\u0ce2-\\u0ce3\\u0ce6-\\u0cef\\u0d02\\u0d03\\u0d46-\\u0d48\\u0d57\\u0d62-\\u0d63\\u0d66-\\u0d6f\\u0d82\\u0d83\\u0dca\\u0dcf-\\u0dd4\\u0dd6\\u0dd8-\\u0ddf\\u0df2\\u0df3\\u0e34-\\u0e3a\\u0e40-\\u0e45\\u0e50-\\u0e59\\u0eb4-\\u0eb9\\u0ec8-\\u0ecd\\u0ed0-\\u0ed9\\u0f18\\u0f19\\u0f20-\\u0f29\\u0f35\\u0f37\\u0f39\\u0f41-\\u0f47\\u0f71-\\u0f84\\u0f86-\\u0f87\\u0f8d-\\u0f97\\u0f99-\\u0fbc\\u0fc6\\u1000-\\u1029\\u1040-\\u1049\\u1067-\\u106d\\u1071-\\u1074\\u1082-\\u108d\\u108f-\\u109d\\u135d-\\u135f\\u170e-\\u1710\\u1720-\\u1730\\u1740-\\u1750\\u1772\\u1773\\u1780-\\u17b2\\u17dd\\u17e0-\\u17e9\\u180b-\\u180d\\u1810-\\u1819\\u1920-\\u192b\\u1930-\\u193b\\u1951-\\u196d\\u19b0-\\u19c0\\u19c8-\\u19c9\\u19d0-\\u19d9\\u1a00-\\u1a15\\u1a20-\\u1a53\\u1a60-\\u1a7c\\u1a7f-\\u1a89\\u1a90-\\u1a99\\u1b46-\\u1b4b\\u1b50-\\u1b59\\u1b6b-\\u1b73\\u1bb0-\\u1bb9\\u1be6-\\u1bf3\\u1c00-\\u1c22\\u1c40-\\u1c49\\u1c5b-\\u1c7d\\u1cd0-\\u1cd2\\u1d00-\\u1dbe\\u1e01-\\u1f15\\u200c\\u200d\\u203f\\u2040\\u2054\\u20d0-\\u20dc\\u20e1\\u20e5-\\u20f0\\u2d81-\\u2d96\\u2de0-\\u2dff\\u3021-\\u3028\\u3099\\u309a\\ua640-\\ua66d\\ua674-\\ua67d\\ua69f\\ua6f0-\\ua6f1\\ua7f8-\\ua800\\ua806\\ua80b\\ua823-\\ua827\\ua880-\\ua881\\ua8b4-\\ua8c4\\ua8d0-\\ua8d9\\ua8f3-\\ua8f7\\ua900-\\ua909\\ua926-\\ua92d\\ua930-\\ua945\\ua980-\\ua983\\ua9b3-\\ua9c0\\uaa00-\\uaa27\\uaa40-\\uaa41\\uaa4c-\\uaa4d\\uaa50-\\uaa59\\uaa7b\\uaae0-\\uaae9\\uaaf2-\\uaaf3\\uabc0-\\uabe1\\uabec\\uabed\\uabf0-\\uabf9\\ufb20-\\ufb28\\ufe00-\\ufe0f\\ufe20-\\ufe26\\ufe33\\ufe34\\ufe4d-\\ufe4f\\uff10-\\uff19\\uff3f", r = "(?:\\\\u[0-9a-fA-F]{4}|[" + t + i + "])", a = "(?:\\\\u[0-9a-fA-F]{4}|[" + n + i + s + "])*";
    e.identifier = new RegExp(r + a, "g"), e.identifierStart = new RegExp(r), e.identifierMatch = new RegExp("(?:\\\\u[0-9a-fA-F]{4}|[" + n + i + s + "])+"), e.newline = /[\n\r\u2028\u2029]/, e.lineBreak = new RegExp(`\r
|` + e.newline.source), e.allLineBreaks = new RegExp(e.lineBreak.source, "g");
  })(rn)), rn;
}
var an = {}, Ye = {}, Ji;
function fi() {
  if (Ji) return Ye;
  Ji = 1;
  function e(i, s) {
    this.raw_options = t(i, s), this.disabled = this._get_boolean("disabled"), this.eol = this._get_characters("eol", "auto"), this.end_with_newline = this._get_boolean("end_with_newline"), this.indent_size = this._get_number("indent_size", 4), this.indent_char = this._get_characters("indent_char", " "), this.indent_level = this._get_number("indent_level"), this.preserve_newlines = this._get_boolean("preserve_newlines", !0), this.max_preserve_newlines = this._get_number("max_preserve_newlines", 32786), this.preserve_newlines || (this.max_preserve_newlines = 0), this.indent_with_tabs = this._get_boolean("indent_with_tabs", this.indent_char === "	"), this.indent_with_tabs && (this.indent_char = "	", this.indent_size === 1 && (this.indent_size = 4)), this.wrap_line_length = this._get_number("wrap_line_length", this._get_number("max_char")), this.indent_empty_lines = this._get_boolean("indent_empty_lines"), this.templating = this._get_selection_list("templating", ["auto", "none", "django", "erb", "handlebars", "php", "smarty"], ["auto"]);
  }
  e.prototype._get_array = function(i, s) {
    var r = this.raw_options[i], a = s || [];
    return typeof r == "object" ? r !== null && typeof r.concat == "function" && (a = r.concat()) : typeof r == "string" && (a = r.split(/[^a-zA-Z0-9_\/\-]+/)), a;
  }, e.prototype._get_boolean = function(i, s) {
    var r = this.raw_options[i], a = r === void 0 ? !!s : !!r;
    return a;
  }, e.prototype._get_characters = function(i, s) {
    var r = this.raw_options[i], a = s || "";
    return typeof r == "string" && (a = r.replace(/\\r/, "\r").replace(/\\n/, `
`).replace(/\\t/, "	")), a;
  }, e.prototype._get_number = function(i, s) {
    var r = this.raw_options[i];
    s = parseInt(s, 10), isNaN(s) && (s = 0);
    var a = parseInt(r, 10);
    return isNaN(a) && (a = s), a;
  }, e.prototype._get_selection = function(i, s, r) {
    var a = this._get_selection_list(i, s, r);
    if (a.length !== 1)
      throw new Error(
        "Invalid Option Value: The option '" + i + `' can only be one of the following values:
` + s + `
You passed in: '` + this.raw_options[i] + "'"
      );
    return a[0];
  }, e.prototype._get_selection_list = function(i, s, r) {
    if (!s || s.length === 0)
      throw new Error("Selection list cannot be empty.");
    if (r = r || [s[0]], !this._is_valid_selection(r, s))
      throw new Error("Invalid Default Value!");
    var a = this._get_array(i, r);
    if (!this._is_valid_selection(a, s))
      throw new Error(
        "Invalid Option Value: The option '" + i + `' can contain only the following values:
` + s + `
You passed in: '` + this.raw_options[i] + "'"
      );
    return a;
  }, e.prototype._is_valid_selection = function(i, s) {
    return i.length && s.length && !i.some(function(r) {
      return s.indexOf(r) === -1;
    });
  };
  function t(i, s) {
    var r = {};
    i = n(i);
    var a;
    for (a in i)
      a !== s && (r[a] = i[a]);
    if (s && i[s])
      for (a in i[s])
        r[a] = i[s][a];
    return r;
  }
  function n(i) {
    var s = {}, r;
    for (r in i) {
      var a = r.replace(/-/g, "_");
      s[a] = i[r];
    }
    return s;
  }
  return Ye.Options = e, Ye.normalizeOpts = n, Ye.mergeOpts = t, Ye;
}
var Zi;
function Dr() {
  if (Zi) return an;
  Zi = 1;
  var e = fi().Options, t = ["before-newline", "after-newline", "preserve-newline"];
  function n(i) {
    e.call(this, i, "js");
    var s = this.raw_options.brace_style || null;
    s === "expand-strict" ? this.raw_options.brace_style = "expand" : s === "collapse-preserve-inline" ? this.raw_options.brace_style = "collapse,preserve-inline" : this.raw_options.braces_on_own_line !== void 0 && (this.raw_options.brace_style = this.raw_options.braces_on_own_line ? "expand" : "collapse");
    var r = this._get_selection_list("brace_style", ["collapse", "expand", "end-expand", "none", "preserve-inline"]);
    this.brace_preserve_inline = !1, this.brace_style = "collapse";
    for (var a = 0; a < r.length; a++)
      r[a] === "preserve-inline" ? this.brace_preserve_inline = !0 : this.brace_style = r[a];
    this.unindent_chained_methods = this._get_boolean("unindent_chained_methods"), this.break_chained_methods = this._get_boolean("break_chained_methods"), this.space_in_paren = this._get_boolean("space_in_paren"), this.space_in_empty_paren = this._get_boolean("space_in_empty_paren"), this.jslint_happy = this._get_boolean("jslint_happy"), this.space_after_anon_function = this._get_boolean("space_after_anon_function"), this.space_after_named_function = this._get_boolean("space_after_named_function"), this.keep_array_indentation = this._get_boolean("keep_array_indentation"), this.space_before_conditional = this._get_boolean("space_before_conditional", !0), this.unescape_strings = this._get_boolean("unescape_strings"), this.e4x = this._get_boolean("e4x"), this.comma_first = this._get_boolean("comma_first"), this.operator_position = this._get_selection("operator_position", t), this.test_output_raw = this._get_boolean("test_output_raw"), this.jslint_happy && (this.space_after_anon_function = !0);
  }
  return n.prototype = new e(), an.Options = n, an;
}
var Le = {}, on = {}, es;
function pi() {
  if (es) return on;
  es = 1;
  var e = RegExp.prototype.hasOwnProperty("sticky");
  function t(n) {
    this.__input = n || "", this.__input_length = this.__input.length, this.__position = 0;
  }
  return t.prototype.restart = function() {
    this.__position = 0;
  }, t.prototype.back = function() {
    this.__position > 0 && (this.__position -= 1);
  }, t.prototype.hasNext = function() {
    return this.__position < this.__input_length;
  }, t.prototype.next = function() {
    var n = null;
    return this.hasNext() && (n = this.__input.charAt(this.__position), this.__position += 1), n;
  }, t.prototype.peek = function(n) {
    var i = null;
    return n = n || 0, n += this.__position, n >= 0 && n < this.__input_length && (i = this.__input.charAt(n)), i;
  }, t.prototype.__match = function(n, i) {
    n.lastIndex = i;
    var s = n.exec(this.__input);
    return s && !(e && n.sticky) && s.index !== i && (s = null), s;
  }, t.prototype.test = function(n, i) {
    return i = i || 0, i += this.__position, i >= 0 && i < this.__input_length ? !!this.__match(n, i) : !1;
  }, t.prototype.testChar = function(n, i) {
    var s = this.peek(i);
    return n.lastIndex = 0, s !== null && n.test(s);
  }, t.prototype.match = function(n) {
    var i = this.__match(n, this.__position);
    return i ? this.__position += i[0].length : i = null, i;
  }, t.prototype.read = function(n, i, s) {
    var r = "", a;
    return n && (a = this.match(n), a && (r += a[0])), i && (a || !n) && (r += this.readUntil(i, s)), r;
  }, t.prototype.readUntil = function(n, i) {
    var s = "", r = this.__position;
    n.lastIndex = this.__position;
    var a = n.exec(this.__input);
    return a ? (r = a.index, i && (r += a[0].length)) : r = this.__input_length, s = this.__input.substring(this.__position, r), this.__position = r, s;
  }, t.prototype.readUntilAfter = function(n) {
    return this.readUntil(n, !0);
  }, t.prototype.get_regexp = function(n, i) {
    var s = null, r = "g";
    return i && e && (r = "y"), typeof n == "string" && n !== "" ? s = new RegExp(n, r) : n && (s = new RegExp(n.source, r)), s;
  }, t.prototype.get_literal_regexp = function(n) {
    return RegExp(n.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
  }, t.prototype.peekUntilAfter = function(n) {
    var i = this.__position, s = this.readUntilAfter(n);
    return this.__position = i, s;
  }, t.prototype.lookBack = function(n) {
    var i = this.__position - 1;
    return i >= n.length && this.__input.substring(i - n.length, i).toLowerCase() === n;
  }, on.InputScanner = t, on;
}
var Et = {}, ln = {}, ts;
function fu() {
  if (ts) return ln;
  ts = 1;
  function e(t) {
    this.__tokens = [], this.__tokens_length = this.__tokens.length, this.__position = 0, this.__parent_token = t;
  }
  return e.prototype.restart = function() {
    this.__position = 0;
  }, e.prototype.isEmpty = function() {
    return this.__tokens_length === 0;
  }, e.prototype.hasNext = function() {
    return this.__position < this.__tokens_length;
  }, e.prototype.next = function() {
    var t = null;
    return this.hasNext() && (t = this.__tokens[this.__position], this.__position += 1), t;
  }, e.prototype.peek = function(t) {
    var n = null;
    return t = t || 0, t += this.__position, t >= 0 && t < this.__tokens_length && (n = this.__tokens[t]), n;
  }, e.prototype.add = function(t) {
    this.__parent_token && (t.parent = this.__parent_token), this.__tokens.push(t), this.__tokens_length += 1;
  }, ln.TokenStream = e, ln;
}
var un = {}, cn = {}, ns;
function Xt() {
  if (ns) return cn;
  ns = 1;
  function e(t, n) {
    this._input = t, this._starting_pattern = null, this._match_pattern = null, this._until_pattern = null, this._until_after = !1, n && (this._starting_pattern = this._input.get_regexp(n._starting_pattern, !0), this._match_pattern = this._input.get_regexp(n._match_pattern, !0), this._until_pattern = this._input.get_regexp(n._until_pattern), this._until_after = n._until_after);
  }
  return e.prototype.read = function() {
    var t = this._input.read(this._starting_pattern);
    return (!this._starting_pattern || t) && (t += this._input.read(this._match_pattern, this._until_pattern, this._until_after)), t;
  }, e.prototype.read_match = function() {
    return this._input.match(this._match_pattern);
  }, e.prototype.until_after = function(t) {
    var n = this._create();
    return n._until_after = !0, n._until_pattern = this._input.get_regexp(t), n._update(), n;
  }, e.prototype.until = function(t) {
    var n = this._create();
    return n._until_after = !1, n._until_pattern = this._input.get_regexp(t), n._update(), n;
  }, e.prototype.starting_with = function(t) {
    var n = this._create();
    return n._starting_pattern = this._input.get_regexp(t, !0), n._update(), n;
  }, e.prototype.matching = function(t) {
    var n = this._create();
    return n._match_pattern = this._input.get_regexp(t, !0), n._update(), n;
  }, e.prototype._create = function() {
    return new e(this._input, this);
  }, e.prototype._update = function() {
  }, cn.Pattern = e, cn;
}
var is;
function pu() {
  if (is) return un;
  is = 1;
  var e = Xt().Pattern;
  function t(n, i) {
    e.call(this, n, i), i ? this._line_regexp = this._input.get_regexp(i._line_regexp) : this.__set_whitespace_patterns("", ""), this.newline_count = 0, this.whitespace_before_token = "";
  }
  return t.prototype = new e(), t.prototype.__set_whitespace_patterns = function(n, i) {
    n += "\\t ", i += "\\n\\r", this._match_pattern = this._input.get_regexp(
      "[" + n + i + "]+",
      !0
    ), this._newline_regexp = this._input.get_regexp(
      "\\r\\n|[" + i + "]"
    );
  }, t.prototype.read = function() {
    this.newline_count = 0, this.whitespace_before_token = "";
    var n = this._input.read(this._match_pattern);
    if (n === " ")
      this.whitespace_before_token = " ";
    else if (n) {
      var i = this.__split(this._newline_regexp, n);
      this.newline_count = i.length - 1, this.whitespace_before_token = i[this.newline_count];
    }
    return n;
  }, t.prototype.matching = function(n, i) {
    var s = this._create();
    return s.__set_whitespace_patterns(n, i), s._update(), s;
  }, t.prototype._create = function() {
    return new t(this._input, this);
  }, t.prototype.__split = function(n, i) {
    n.lastIndex = 0;
    for (var s = 0, r = [], a = n.exec(i); a; )
      r.push(i.substring(s, a.index)), s = a.index + a[0].length, a = n.exec(i);
    return s < i.length ? r.push(i.substring(s, i.length)) : r.push(""), r;
  }, un.WhitespacePattern = t, un;
}
var ss;
function Kt() {
  if (ss) return Et;
  ss = 1;
  var e = pi().InputScanner, t = Ar().Token, n = fu().TokenStream, i = pu().WhitespacePattern, s = {
    START: "TK_START",
    RAW: "TK_RAW",
    EOF: "TK_EOF"
  }, r = function(a, o) {
    this._input = new e(a), this._options = o || {}, this.__tokens = null, this._patterns = {}, this._patterns.whitespace = new i(this._input);
  };
  return r.prototype.tokenize = function() {
    this._input.restart(), this.__tokens = new n(), this._reset();
    for (var a, o = new t(s.START, ""), l = null, f = [], _ = new n(); o.type !== s.EOF; ) {
      for (a = this._get_next_token(o, l); this._is_comment(a); )
        _.add(a), a = this._get_next_token(o, l);
      _.isEmpty() || (a.comments_before = _, _ = new n()), a.parent = l, this._is_opening(a) ? (f.push(l), l = a) : l && this._is_closing(a, l) && (a.opened = l, l.closed = a, l = f.pop(), a.parent = l), a.previous = o, o.next = a, this.__tokens.add(a), o = a;
    }
    return this.__tokens;
  }, r.prototype._is_first_token = function() {
    return this.__tokens.isEmpty();
  }, r.prototype._reset = function() {
  }, r.prototype._get_next_token = function(a, o) {
    this._readWhitespace();
    var l = this._input.read(/.+/g);
    return l ? this._create_token(s.RAW, l) : this._create_token(s.EOF, "");
  }, r.prototype._is_comment = function(a) {
    return !1;
  }, r.prototype._is_opening = function(a) {
    return !1;
  }, r.prototype._is_closing = function(a, o) {
    return !1;
  }, r.prototype._create_token = function(a, o) {
    var l = new t(
      a,
      o,
      this._patterns.whitespace.newline_count,
      this._patterns.whitespace.whitespace_before_token
    );
    return l;
  }, r.prototype._readWhitespace = function() {
    return this._patterns.whitespace.read();
  }, Et.Tokenizer = r, Et.TOKEN = s, Et;
}
var fn = {}, rs;
function _i() {
  if (rs) return fn;
  rs = 1;
  function e(t, n) {
    t = typeof t == "string" ? t : t.source, n = typeof n == "string" ? n : n.source, this.__directives_block_pattern = new RegExp(t + / beautify( \w+[:]\w+)+ /.source + n, "g"), this.__directive_pattern = / (\w+)[:](\w+)/g, this.__directives_end_ignore_pattern = new RegExp(t + /\sbeautify\signore:end\s/.source + n, "g");
  }
  return e.prototype.get_directives = function(t) {
    if (!t.match(this.__directives_block_pattern))
      return null;
    var n = {};
    this.__directive_pattern.lastIndex = 0;
    for (var i = this.__directive_pattern.exec(t); i; )
      n[i[1]] = i[2], i = this.__directive_pattern.exec(t);
    return n;
  }, e.prototype.readIgnored = function(t) {
    return t.readUntilAfter(this.__directives_end_ignore_pattern);
  }, fn.Directives = e, fn;
}
var pn = {}, as;
function Pr() {
  if (as) return pn;
  as = 1;
  var e = Xt().Pattern, t = {
    django: !1,
    erb: !1,
    handlebars: !1,
    php: !1,
    smarty: !1
  };
  function n(i, s) {
    e.call(this, i, s), this.__template_pattern = null, this._disabled = Object.assign({}, t), this._excluded = Object.assign({}, t), s && (this.__template_pattern = this._input.get_regexp(s.__template_pattern), this._excluded = Object.assign(this._excluded, s._excluded), this._disabled = Object.assign(this._disabled, s._disabled));
    var r = new e(i);
    this.__patterns = {
      handlebars_comment: r.starting_with(/{{!--/).until_after(/--}}/),
      handlebars_unescaped: r.starting_with(/{{{/).until_after(/}}}/),
      handlebars: r.starting_with(/{{/).until_after(/}}/),
      php: r.starting_with(/<\?(?:[= ]|php)/).until_after(/\?>/),
      erb: r.starting_with(/<%[^%]/).until_after(/[^%]%>/),
      // django coflicts with handlebars a bit.
      django: r.starting_with(/{%/).until_after(/%}/),
      django_value: r.starting_with(/{{/).until_after(/}}/),
      django_comment: r.starting_with(/{#/).until_after(/#}/),
      smarty: r.starting_with(/{(?=[^}{\s\n])/).until_after(/[^\s\n]}/),
      smarty_comment: r.starting_with(/{\*/).until_after(/\*}/),
      smarty_literal: r.starting_with(/{literal}/).until_after(/{\/literal}/)
    };
  }
  return n.prototype = new e(), n.prototype._create = function() {
    return new n(this._input, this);
  }, n.prototype._update = function() {
    this.__set_templated_pattern();
  }, n.prototype.disable = function(i) {
    var s = this._create();
    return s._disabled[i] = !0, s._update(), s;
  }, n.prototype.read_options = function(i) {
    var s = this._create();
    for (var r in t)
      s._disabled[r] = i.templating.indexOf(r) === -1;
    return s._update(), s;
  }, n.prototype.exclude = function(i) {
    var s = this._create();
    return s._excluded[i] = !0, s._update(), s;
  }, n.prototype.read = function() {
    var i = "";
    this._match_pattern ? i = this._input.read(this._starting_pattern) : i = this._input.read(this._starting_pattern, this.__template_pattern);
    for (var s = this._read_template(); s; )
      this._match_pattern ? s += this._input.read(this._match_pattern) : s += this._input.readUntil(this.__template_pattern), i += s, s = this._read_template();
    return this._until_after && (i += this._input.readUntilAfter(this._until_pattern)), i;
  }, n.prototype.__set_templated_pattern = function() {
    var i = [];
    this._disabled.php || i.push(this.__patterns.php._starting_pattern.source), this._disabled.handlebars || i.push(this.__patterns.handlebars._starting_pattern.source), this._disabled.erb || i.push(this.__patterns.erb._starting_pattern.source), this._disabled.django || (i.push(this.__patterns.django._starting_pattern.source), i.push(this.__patterns.django_value._starting_pattern.source), i.push(this.__patterns.django_comment._starting_pattern.source)), this._disabled.smarty || i.push(this.__patterns.smarty._starting_pattern.source), this._until_pattern && i.push(this._until_pattern.source), this.__template_pattern = this._input.get_regexp("(?:" + i.join("|") + ")");
  }, n.prototype._read_template = function() {
    var i = "", s = this._input.peek();
    if (s === "<") {
      var r = this._input.peek(1);
      !this._disabled.php && !this._excluded.php && r === "?" && (i = i || this.__patterns.php.read()), !this._disabled.erb && !this._excluded.erb && r === "%" && (i = i || this.__patterns.erb.read());
    } else s === "{" && (!this._disabled.handlebars && !this._excluded.handlebars && (i = i || this.__patterns.handlebars_comment.read(), i = i || this.__patterns.handlebars_unescaped.read(), i = i || this.__patterns.handlebars.read()), this._disabled.django || (!this._excluded.django && !this._excluded.handlebars && (i = i || this.__patterns.django_value.read()), this._excluded.django || (i = i || this.__patterns.django_comment.read(), i = i || this.__patterns.django.read())), this._disabled.smarty || this._disabled.django && this._disabled.handlebars && (i = i || this.__patterns.smarty_comment.read(), i = i || this.__patterns.smarty_literal.read(), i = i || this.__patterns.smarty.read()));
    return i;
  }, pn.TemplatablePattern = n, pn;
}
var os;
function wt() {
  if (os) return Le;
  os = 1;
  var e = pi().InputScanner, t = Kt().Tokenizer, n = Kt().TOKEN, i = _i().Directives, s = Rr(), r = Xt().Pattern, a = Pr().TemplatablePattern;
  function o(y, O) {
    return O.indexOf(y) !== -1;
  }
  var l = {
    START_EXPR: "TK_START_EXPR",
    END_EXPR: "TK_END_EXPR",
    START_BLOCK: "TK_START_BLOCK",
    END_BLOCK: "TK_END_BLOCK",
    WORD: "TK_WORD",
    RESERVED: "TK_RESERVED",
    SEMICOLON: "TK_SEMICOLON",
    STRING: "TK_STRING",
    EQUALS: "TK_EQUALS",
    OPERATOR: "TK_OPERATOR",
    COMMA: "TK_COMMA",
    BLOCK_COMMENT: "TK_BLOCK_COMMENT",
    COMMENT: "TK_COMMENT",
    DOT: "TK_DOT",
    UNKNOWN: "TK_UNKNOWN",
    START: n.START,
    RAW: n.RAW,
    EOF: n.EOF
  }, f = new i(/\/\*/, /\*\//), _ = /0[xX][0123456789abcdefABCDEF_]*n?|0[oO][01234567_]*n?|0[bB][01_]*n?|\d[\d_]*n|(?:\.\d[\d_]*|\d[\d_]*\.?[\d_]*)(?:[eE][+-]?[\d_]+)?/, p = /[0-9]/, m = /[^\d\.]/, E = ">>> === !== &&= ??= ||= << && >= ** != == <= >> || ?? |> < / - + > : & % ? ^ | *".split(" "), S = ">>>= ... >>= <<= === >>> !== **= &&= ??= ||= => ^= :: /= << <= == && -= >= >> != -- += ** || ?? ++ %= &= *= |= |> = ! ? > < : / ^ - + * & % ~ |";
  S = S.replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&"), S = "\\?\\.(?!\\d) " + S, S = S.replace(/ /g, "|");
  var T = new RegExp(S), h = "continue,try,throw,return,var,let,const,if,switch,case,default,for,while,break,function,import,export".split(","), c = h.concat(["do", "in", "of", "else", "get", "set", "new", "catch", "finally", "typeof", "yield", "async", "await", "from", "as", "class", "extends"]), b = new RegExp("^(?:" + c.join("|") + ")$"), k, N = function(y, O) {
    t.call(this, y, O), this._patterns.whitespace = this._patterns.whitespace.matching(
      /\u00A0\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff/.source,
      /\u2028\u2029/.source
    );
    var d = new r(this._input), w = new a(this._input).read_options(this._options);
    this.__patterns = {
      template: w,
      identifier: w.starting_with(s.identifier).matching(s.identifierMatch),
      number: d.matching(_),
      punct: d.matching(T),
      // comment ends just before nearest linefeed or end of file
      comment: d.starting_with(/\/\//).until(/[\n\r\u2028\u2029]/),
      //  /* ... */ comment ends with nearest */ or end of file
      block_comment: d.starting_with(/\/\*/).until_after(/\*\//),
      html_comment_start: d.matching(/<!--/),
      html_comment_end: d.matching(/-->/),
      include: d.starting_with(/#include/).until_after(s.lineBreak),
      shebang: d.starting_with(/#!/).until_after(s.lineBreak),
      xml: d.matching(/[\s\S]*?<(\/?)([-a-zA-Z:0-9_.]+|{[^}]+?}|!\[CDATA\[[^\]]*?\]\]|)(\s*{[^}]+?}|\s+[-a-zA-Z:0-9_.]+|\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{([^{}]|{[^}]+?})+?}))*\s*(\/?)\s*>/),
      single_quote: w.until(/['\\\n\r\u2028\u2029]/),
      double_quote: w.until(/["\\\n\r\u2028\u2029]/),
      template_text: w.until(/[`\\$]/),
      template_expression: w.until(/[`}\\]/)
    };
  };
  N.prototype = new t(), N.prototype._is_comment = function(y) {
    return y.type === l.COMMENT || y.type === l.BLOCK_COMMENT || y.type === l.UNKNOWN;
  }, N.prototype._is_opening = function(y) {
    return y.type === l.START_BLOCK || y.type === l.START_EXPR;
  }, N.prototype._is_closing = function(y, O) {
    return (y.type === l.END_BLOCK || y.type === l.END_EXPR) && O && (y.text === "]" && O.text === "[" || y.text === ")" && O.text === "(" || y.text === "}" && O.text === "{");
  }, N.prototype._reset = function() {
    k = !1;
  }, N.prototype._get_next_token = function(y, O) {
    var d = null;
    this._readWhitespace();
    var w = this._input.peek();
    return w === null ? this._create_token(l.EOF, "") : (d = d || this._read_non_javascript(w), d = d || this._read_string(w), d = d || this._read_pair(w, this._input.peek(1)), d = d || this._read_word(y), d = d || this._read_singles(w), d = d || this._read_comment(w), d = d || this._read_regexp(w, y), d = d || this._read_xml(w, y), d = d || this._read_punctuation(), d = d || this._create_token(l.UNKNOWN, this._input.next()), d);
  }, N.prototype._read_word = function(y) {
    var O;
    if (O = this.__patterns.identifier.read(), O !== "")
      return O = O.replace(s.allLineBreaks, `
`), !(y.type === l.DOT || y.type === l.RESERVED && (y.text === "set" || y.text === "get")) && b.test(O) ? (O === "in" || O === "of") && (y.type === l.WORD || y.type === l.STRING) ? this._create_token(l.OPERATOR, O) : this._create_token(l.RESERVED, O) : this._create_token(l.WORD, O);
    if (O = this.__patterns.number.read(), O !== "")
      return this._create_token(l.WORD, O);
  }, N.prototype._read_singles = function(y) {
    var O = null;
    return y === "(" || y === "[" ? O = this._create_token(l.START_EXPR, y) : y === ")" || y === "]" ? O = this._create_token(l.END_EXPR, y) : y === "{" ? O = this._create_token(l.START_BLOCK, y) : y === "}" ? O = this._create_token(l.END_BLOCK, y) : y === ";" ? O = this._create_token(l.SEMICOLON, y) : y === "." && m.test(this._input.peek(1)) ? O = this._create_token(l.DOT, y) : y === "," && (O = this._create_token(l.COMMA, y)), O && this._input.next(), O;
  }, N.prototype._read_pair = function(y, O) {
    var d = null;
    return y === "#" && O === "{" && (d = this._create_token(l.START_BLOCK, y + O)), d && (this._input.next(), this._input.next()), d;
  }, N.prototype._read_punctuation = function() {
    var y = this.__patterns.punct.read();
    if (y !== "")
      return y === "=" ? this._create_token(l.EQUALS, y) : y === "?." ? this._create_token(l.DOT, y) : this._create_token(l.OPERATOR, y);
  }, N.prototype._read_non_javascript = function(y) {
    var O = "";
    if (y === "#") {
      if (this._is_first_token() && (O = this.__patterns.shebang.read(), O))
        return this._create_token(l.UNKNOWN, O.trim() + `
`);
      if (O = this.__patterns.include.read(), O)
        return this._create_token(l.UNKNOWN, O.trim() + `
`);
      y = this._input.next();
      var d = "#";
      if (this._input.hasNext() && this._input.testChar(p)) {
        do
          y = this._input.next(), d += y;
        while (this._input.hasNext() && y !== "#" && y !== "=");
        return y === "#" || (this._input.peek() === "[" && this._input.peek(1) === "]" ? (d += "[]", this._input.next(), this._input.next()) : this._input.peek() === "{" && this._input.peek(1) === "}" && (d += "{}", this._input.next(), this._input.next())), this._create_token(l.WORD, d);
      }
      this._input.back();
    } else if (y === "<" && this._is_first_token()) {
      if (O = this.__patterns.html_comment_start.read(), O) {
        for (; this._input.hasNext() && !this._input.testChar(s.newline); )
          O += this._input.next();
        return k = !0, this._create_token(l.COMMENT, O);
      }
    } else if (k && y === "-" && (O = this.__patterns.html_comment_end.read(), O))
      return k = !1, this._create_token(l.COMMENT, O);
    return null;
  }, N.prototype._read_comment = function(y) {
    var O = null;
    if (y === "/") {
      var d = "";
      if (this._input.peek(1) === "*") {
        d = this.__patterns.block_comment.read();
        var w = f.get_directives(d);
        w && w.ignore === "start" && (d += f.readIgnored(this._input)), d = d.replace(s.allLineBreaks, `
`), O = this._create_token(l.BLOCK_COMMENT, d), O.directives = w;
      } else this._input.peek(1) === "/" && (d = this.__patterns.comment.read(), O = this._create_token(l.COMMENT, d));
    }
    return O;
  }, N.prototype._read_string = function(y) {
    if (y === "`" || y === "'" || y === '"') {
      var O = this._input.next();
      return this.has_char_escapes = !1, y === "`" ? O += this._read_string_recursive("`", !0, "${") : O += this._read_string_recursive(y), this.has_char_escapes && this._options.unescape_strings && (O = I(O)), this._input.peek() === y && (O += this._input.next()), O = O.replace(s.allLineBreaks, `
`), this._create_token(l.STRING, O);
    }
    return null;
  }, N.prototype._allow_regexp_or_xml = function(y) {
    return y.type === l.RESERVED && o(y.text, ["return", "case", "throw", "else", "do", "typeof", "yield"]) || y.type === l.END_EXPR && y.text === ")" && y.opened.previous.type === l.RESERVED && o(y.opened.previous.text, ["if", "while", "for"]) || o(y.type, [
      l.COMMENT,
      l.START_EXPR,
      l.START_BLOCK,
      l.START,
      l.END_BLOCK,
      l.OPERATOR,
      l.EQUALS,
      l.EOF,
      l.SEMICOLON,
      l.COMMA
    ]);
  }, N.prototype._read_regexp = function(y, O) {
    if (y === "/" && this._allow_regexp_or_xml(O)) {
      for (var d = this._input.next(), w = !1, u = !1; this._input.hasNext() && (w || u || this._input.peek() !== y) && !this._input.testChar(s.newline); )
        d += this._input.peek(), w ? w = !1 : (w = this._input.peek() === "\\", this._input.peek() === "[" ? u = !0 : this._input.peek() === "]" && (u = !1)), this._input.next();
      return this._input.peek() === y && (d += this._input.next(), d += this._input.read(s.identifier)), this._create_token(l.STRING, d);
    }
    return null;
  }, N.prototype._read_xml = function(y, O) {
    if (this._options.e4x && y === "<" && this._allow_regexp_or_xml(O)) {
      var d = "", w = this.__patterns.xml.read_match();
      if (w) {
        for (var u = w[2].replace(/^{\s+/, "{").replace(/\s+}$/, "}"), g = u.indexOf("{") === 0, v = 0; w; ) {
          var x = !!w[1], C = w[2], A = !!w[w.length - 1] || C.slice(0, 8) === "![CDATA[";
          if (!A && (C === u || g && C.replace(/^{\s+/, "{").replace(/\s+}$/, "}")) && (x ? --v : ++v), d += w[0], v <= 0)
            break;
          w = this.__patterns.xml.read_match();
        }
        return w || (d += this._input.match(/[\s\S]*/g)[0]), d = d.replace(s.allLineBreaks, `
`), this._create_token(l.STRING, d);
      }
    }
    return null;
  };
  function I(y) {
    for (var O = "", d = 0, w = new e(y), u = null; w.hasNext(); )
      if (u = w.match(/([\s]|[^\\]|\\\\)+/g), u && (O += u[0]), w.peek() === "\\") {
        if (w.next(), w.peek() === "x")
          u = w.match(/x([0-9A-Fa-f]{2})/g);
        else if (w.peek() === "u")
          u = w.match(/u([0-9A-Fa-f]{4})/g);
        else {
          O += "\\", w.hasNext() && (O += w.next());
          continue;
        }
        if (!u || (d = parseInt(u[1], 16), d > 126 && d <= 255 && u[0].indexOf("x") === 0))
          return y;
        if (d >= 0 && d < 32) {
          O += "\\" + u[0];
          continue;
        } else d === 34 || d === 39 || d === 92 ? O += "\\" + String.fromCharCode(d) : O += String.fromCharCode(d);
      }
    return O;
  }
  return N.prototype._read_string_recursive = function(y, O, d) {
    var w, u;
    y === "'" ? u = this.__patterns.single_quote : y === '"' ? u = this.__patterns.double_quote : y === "`" ? u = this.__patterns.template_text : y === "}" && (u = this.__patterns.template_expression);
    for (var g = u.read(), v = ""; this._input.hasNext(); ) {
      if (v = this._input.next(), v === y || !O && s.newline.test(v)) {
        this._input.back();
        break;
      } else v === "\\" && this._input.hasNext() ? (w = this._input.peek(), w === "x" || w === "u" ? this.has_char_escapes = !0 : w === "\r" && this._input.peek(1) === `
` && this._input.next(), v += this._input.next()) : d && (d === "${" && v === "$" && this._input.peek() === "{" && (v += this._input.next()), d === v && (y === "`" ? v += this._read_string_recursive("}", O, "`") : v += this._read_string_recursive("`", O, "${"), this._input.hasNext() && (v += this._input.next())));
      v += u.read(), g += v;
    }
    return g;
  }, Le.Tokenizer = N, Le.TOKEN = l, Le.positionable_operators = E.slice(), Le.line_starters = h.slice(), Le;
}
var ls;
function _u() {
  if (ls) return tn;
  ls = 1;
  var e = ci().Output, t = Ar().Token, n = Rr(), i = Dr().Options, s = wt().Tokenizer, r = wt().line_starters, a = wt().positionable_operators, o = wt().TOKEN;
  function l(u, g) {
    return g.indexOf(u) !== -1;
  }
  function f(u) {
    return u.replace(/^\s+/g, "");
  }
  function _(u) {
    for (var g = {}, v = 0; v < u.length; v++)
      g[u[v].replace(/-/g, "_")] = u[v];
    return g;
  }
  function p(u, g) {
    return u && u.type === o.RESERVED && u.text === g;
  }
  function m(u, g) {
    return u && u.type === o.RESERVED && l(u.text, g);
  }
  var E = ["case", "return", "do", "if", "throw", "else", "await", "break", "continue", "async"], S = ["before-newline", "after-newline", "preserve-newline"], T = _(S), h = [T.before_newline, T.preserve_newline], c = {
    BlockStatement: "BlockStatement",
    // 'BLOCK'
    Statement: "Statement",
    // 'STATEMENT'
    ObjectLiteral: "ObjectLiteral",
    // 'OBJECT',
    ArrayLiteral: "ArrayLiteral",
    //'[EXPRESSION]',
    ForInitializer: "ForInitializer",
    //'(FOR-EXPRESSION)',
    Conditional: "Conditional",
    //'(COND-EXPRESSION)',
    Expression: "Expression"
    //'(EXPRESSION)'
  };
  function b(u, g) {
    g.multiline_frame || g.mode === c.ForInitializer || g.mode === c.Conditional || u.remove_indent(g.start_line_index);
  }
  function k(u) {
    u = u.replace(n.allLineBreaks, `
`);
    for (var g = [], v = u.indexOf(`
`); v !== -1; )
      g.push(u.substring(0, v)), u = u.substring(v + 1), v = u.indexOf(`
`);
    return u.length && g.push(u), g;
  }
  function N(u) {
    return u === c.ArrayLiteral;
  }
  function I(u) {
    return l(u, [c.Expression, c.ForInitializer, c.Conditional]);
  }
  function y(u, g) {
    for (var v = 0; v < u.length; v++) {
      var x = u[v].trim();
      if (x.charAt(0) !== g)
        return !1;
    }
    return !0;
  }
  function O(u, g) {
    for (var v = 0, x = u.length, C; v < x; v++)
      if (C = u[v], C && C.indexOf(g) !== 0)
        return !1;
    return !0;
  }
  function d(u, g) {
    g = g || {}, this._source_text = u || "", this._output = null, this._tokens = null, this._last_last_text = null, this._flags = null, this._previous_flags = null, this._flag_store = null, this._options = new i(g);
  }
  d.prototype.create_flags = function(u, g) {
    var v = 0;
    u && (v = u.indentation_level, !this._output.just_added_newline() && u.line_indent_level > v && (v = u.line_indent_level));
    var x = {
      mode: g,
      parent: u,
      last_token: u ? u.last_token : new t(o.START_BLOCK, ""),
      // last token text
      last_word: u ? u.last_word : "",
      // last TOKEN.WORD passed
      declaration_statement: !1,
      declaration_assignment: !1,
      multiline_frame: !1,
      inline_frame: !1,
      if_block: !1,
      else_block: !1,
      class_start_block: !1,
      // class A { INSIDE HERE } or class B extends C { INSIDE HERE }
      do_block: !1,
      do_while: !1,
      import_block: !1,
      in_case_statement: !1,
      // switch(..){ INSIDE HERE }
      in_case: !1,
      // we're on the exact line with "case 0:"
      case_body: !1,
      // the indented case-action block
      case_block: !1,
      // the indented case-action block is wrapped with {}
      indentation_level: v,
      alignment: 0,
      line_indent_level: u ? u.line_indent_level : v,
      start_line_index: this._output.get_line_number(),
      ternary_depth: 0
    };
    return x;
  }, d.prototype._reset = function(u) {
    var g = u.match(/^[\t ]*/)[0];
    this._last_last_text = "", this._output = new e(this._options, g), this._output.raw = this._options.test_output_raw, this._flag_store = [], this.set_mode(c.BlockStatement);
    var v = new s(u, this._options);
    return this._tokens = v.tokenize(), u;
  }, d.prototype.beautify = function() {
    if (this._options.disabled)
      return this._source_text;
    var u, g = this._reset(this._source_text), v = this._options.eol;
    this._options.eol === "auto" && (v = `
`, g && n.lineBreak.test(g || "") && (v = g.match(n.lineBreak)[0]));
    for (var x = this._tokens.next(); x; )
      this.handle_token(x), this._last_last_text = this._flags.last_token.text, this._flags.last_token = x, x = this._tokens.next();
    return u = this._output.get_code(v), u;
  }, d.prototype.handle_token = function(u, g) {
    u.type === o.START_EXPR ? this.handle_start_expr(u) : u.type === o.END_EXPR ? this.handle_end_expr(u) : u.type === o.START_BLOCK ? this.handle_start_block(u) : u.type === o.END_BLOCK ? this.handle_end_block(u) : u.type === o.WORD ? this.handle_word(u) : u.type === o.RESERVED ? this.handle_word(u) : u.type === o.SEMICOLON ? this.handle_semicolon(u) : u.type === o.STRING ? this.handle_string(u) : u.type === o.EQUALS ? this.handle_equals(u) : u.type === o.OPERATOR ? this.handle_operator(u) : u.type === o.COMMA ? this.handle_comma(u) : u.type === o.BLOCK_COMMENT ? this.handle_block_comment(u, g) : u.type === o.COMMENT ? this.handle_comment(u, g) : u.type === o.DOT ? this.handle_dot(u) : u.type === o.EOF ? this.handle_eof(u) : u.type === o.UNKNOWN ? this.handle_unknown(u, g) : this.handle_unknown(u, g);
  }, d.prototype.handle_whitespace_and_comments = function(u, g) {
    var v = u.newlines, x = this._options.keep_array_indentation && N(this._flags.mode);
    if (u.comments_before)
      for (var C = u.comments_before.next(); C; )
        this.handle_whitespace_and_comments(C, g), this.handle_token(C, g), C = u.comments_before.next();
    if (x)
      for (var A = 0; A < v; A += 1)
        this.print_newline(A > 0, g);
    else if (this._options.max_preserve_newlines && v > this._options.max_preserve_newlines && (v = this._options.max_preserve_newlines), this._options.preserve_newlines && v > 1) {
      this.print_newline(!1, g);
      for (var V = 1; V < v; V += 1)
        this.print_newline(!0, g);
    }
  };
  var w = ["async", "break", "continue", "return", "throw", "yield"];
  return d.prototype.allow_wrap_or_preserved_newline = function(u, g) {
    if (g = g === void 0 ? !1 : g, !this._output.just_added_newline()) {
      var v = this._options.preserve_newlines && u.newlines || g, x = l(this._flags.last_token.text, a) || l(u.text, a);
      if (x) {
        var C = l(this._flags.last_token.text, a) && l(this._options.operator_position, h) || l(u.text, a);
        v = v && C;
      }
      if (v)
        this.print_newline(!1, !0);
      else if (this._options.wrap_line_length) {
        if (m(this._flags.last_token, w))
          return;
        this._output.set_wrap_point();
      }
    }
  }, d.prototype.print_newline = function(u, g) {
    if (!g && this._flags.last_token.text !== ";" && this._flags.last_token.text !== "," && this._flags.last_token.text !== "=" && (this._flags.last_token.type !== o.OPERATOR || this._flags.last_token.text === "--" || this._flags.last_token.text === "++"))
      for (var v = this._tokens.peek(); this._flags.mode === c.Statement && !(this._flags.if_block && p(v, "else")) && !this._flags.do_block; )
        this.restore_mode();
    this._output.add_new_line(u) && (this._flags.multiline_frame = !0);
  }, d.prototype.print_token_line_indentation = function(u) {
    this._output.just_added_newline() && (this._options.keep_array_indentation && u.newlines && (u.text === "[" || N(this._flags.mode)) ? (this._output.current_line.set_indent(-1), this._output.current_line.push(u.whitespace_before), this._output.space_before_token = !1) : this._output.set_indent(this._flags.indentation_level, this._flags.alignment) && (this._flags.line_indent_level = this._flags.indentation_level));
  }, d.prototype.print_token = function(u) {
    if (this._output.raw) {
      this._output.add_raw_token(u);
      return;
    }
    if (this._options.comma_first && u.previous && u.previous.type === o.COMMA && this._output.just_added_newline() && this._output.previous_line.last() === ",") {
      var g = this._output.previous_line.pop();
      this._output.previous_line.is_empty() && (this._output.previous_line.push(g), this._output.trim(!0), this._output.current_line.pop(), this._output.trim()), this.print_token_line_indentation(u), this._output.add_token(","), this._output.space_before_token = !0;
    }
    this.print_token_line_indentation(u), this._output.non_breaking_space = !0, this._output.add_token(u.text), this._output.previous_token_wrapped && (this._flags.multiline_frame = !0);
  }, d.prototype.indent = function() {
    this._flags.indentation_level += 1, this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
  }, d.prototype.deindent = function() {
    this._flags.indentation_level > 0 && (!this._flags.parent || this._flags.indentation_level > this._flags.parent.indentation_level) && (this._flags.indentation_level -= 1, this._output.set_indent(this._flags.indentation_level, this._flags.alignment));
  }, d.prototype.set_mode = function(u) {
    this._flags ? (this._flag_store.push(this._flags), this._previous_flags = this._flags) : this._previous_flags = this.create_flags(null, u), this._flags = this.create_flags(this._previous_flags, u), this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
  }, d.prototype.restore_mode = function() {
    this._flag_store.length > 0 && (this._previous_flags = this._flags, this._flags = this._flag_store.pop(), this._previous_flags.mode === c.Statement && b(this._output, this._previous_flags), this._output.set_indent(this._flags.indentation_level, this._flags.alignment));
  }, d.prototype.start_of_object_property = function() {
    return this._flags.parent.mode === c.ObjectLiteral && this._flags.mode === c.Statement && (this._flags.last_token.text === ":" && this._flags.ternary_depth === 0 || m(this._flags.last_token, ["get", "set"]));
  }, d.prototype.start_of_statement = function(u) {
    var g = !1;
    return g = g || m(this._flags.last_token, ["var", "let", "const"]) && u.type === o.WORD, g = g || p(this._flags.last_token, "do"), g = g || !(this._flags.parent.mode === c.ObjectLiteral && this._flags.mode === c.Statement) && m(this._flags.last_token, w) && !u.newlines, g = g || p(this._flags.last_token, "else") && !(p(u, "if") && !u.comments_before), g = g || this._flags.last_token.type === o.END_EXPR && (this._previous_flags.mode === c.ForInitializer || this._previous_flags.mode === c.Conditional), g = g || this._flags.last_token.type === o.WORD && this._flags.mode === c.BlockStatement && !this._flags.in_case && !(u.text === "--" || u.text === "++") && this._last_last_text !== "function" && u.type !== o.WORD && u.type !== o.RESERVED, g = g || this._flags.mode === c.ObjectLiteral && (this._flags.last_token.text === ":" && this._flags.ternary_depth === 0 || m(this._flags.last_token, ["get", "set"])), g ? (this.set_mode(c.Statement), this.indent(), this.handle_whitespace_and_comments(u, !0), this.start_of_object_property() || this.allow_wrap_or_preserved_newline(
      u,
      m(u, ["do", "for", "if", "while"])
    ), !0) : !1;
  }, d.prototype.handle_start_expr = function(u) {
    this.start_of_statement(u) || this.handle_whitespace_and_comments(u);
    var g = c.Expression;
    if (u.text === "[") {
      if (this._flags.last_token.type === o.WORD || this._flags.last_token.text === ")") {
        m(this._flags.last_token, r) && (this._output.space_before_token = !0), this.print_token(u), this.set_mode(g), this.indent(), this._options.space_in_paren && (this._output.space_before_token = !0);
        return;
      }
      g = c.ArrayLiteral, N(this._flags.mode) && (this._flags.last_token.text === "[" || this._flags.last_token.text === "," && (this._last_last_text === "]" || this._last_last_text === "}")) && (this._options.keep_array_indentation || this.print_newline()), l(this._flags.last_token.type, [o.START_EXPR, o.END_EXPR, o.WORD, o.OPERATOR, o.DOT]) || (this._output.space_before_token = !0);
    } else {
      if (this._flags.last_token.type === o.RESERVED)
        this._flags.last_token.text === "for" ? (this._output.space_before_token = this._options.space_before_conditional, g = c.ForInitializer) : l(this._flags.last_token.text, ["if", "while", "switch"]) ? (this._output.space_before_token = this._options.space_before_conditional, g = c.Conditional) : l(this._flags.last_word, ["await", "async"]) ? this._output.space_before_token = !0 : this._flags.last_token.text === "import" && u.whitespace_before === "" ? this._output.space_before_token = !1 : (l(this._flags.last_token.text, r) || this._flags.last_token.text === "catch") && (this._output.space_before_token = !0);
      else if (this._flags.last_token.type === o.EQUALS || this._flags.last_token.type === o.OPERATOR)
        this.start_of_object_property() || this.allow_wrap_or_preserved_newline(u);
      else if (this._flags.last_token.type === o.WORD) {
        this._output.space_before_token = !1;
        var v = this._tokens.peek(-3);
        if (this._options.space_after_named_function && v) {
          var x = this._tokens.peek(-4);
          m(v, ["async", "function"]) || v.text === "*" && m(x, ["async", "function"]) ? this._output.space_before_token = !0 : this._flags.mode === c.ObjectLiteral ? (v.text === "{" || v.text === "," || v.text === "*" && (x.text === "{" || x.text === ",")) && (this._output.space_before_token = !0) : this._flags.parent && this._flags.parent.class_start_block && (this._output.space_before_token = !0);
        }
      } else
        this.allow_wrap_or_preserved_newline(u);
      (this._flags.last_token.type === o.RESERVED && (this._flags.last_word === "function" || this._flags.last_word === "typeof") || this._flags.last_token.text === "*" && (l(this._last_last_text, ["function", "yield"]) || this._flags.mode === c.ObjectLiteral && l(this._last_last_text, ["{", ","]))) && (this._output.space_before_token = this._options.space_after_anon_function);
    }
    this._flags.last_token.text === ";" || this._flags.last_token.type === o.START_BLOCK ? this.print_newline() : (this._flags.last_token.type === o.END_EXPR || this._flags.last_token.type === o.START_EXPR || this._flags.last_token.type === o.END_BLOCK || this._flags.last_token.text === "." || this._flags.last_token.type === o.COMMA) && this.allow_wrap_or_preserved_newline(u, u.newlines), this.print_token(u), this.set_mode(g), this._options.space_in_paren && (this._output.space_before_token = !0), this.indent();
  }, d.prototype.handle_end_expr = function(u) {
    for (; this._flags.mode === c.Statement; )
      this.restore_mode();
    this.handle_whitespace_and_comments(u), this._flags.multiline_frame && this.allow_wrap_or_preserved_newline(
      u,
      u.text === "]" && N(this._flags.mode) && !this._options.keep_array_indentation
    ), this._options.space_in_paren && (this._flags.last_token.type === o.START_EXPR && !this._options.space_in_empty_paren ? (this._output.trim(), this._output.space_before_token = !1) : this._output.space_before_token = !0), this.deindent(), this.print_token(u), this.restore_mode(), b(this._output, this._previous_flags), this._flags.do_while && this._previous_flags.mode === c.Conditional && (this._previous_flags.mode = c.Expression, this._flags.do_block = !1, this._flags.do_while = !1);
  }, d.prototype.handle_start_block = function(u) {
    this.handle_whitespace_and_comments(u);
    var g = this._tokens.peek(), v = this._tokens.peek(1);
    this._flags.last_word === "switch" && this._flags.last_token.type === o.END_EXPR ? (this.set_mode(c.BlockStatement), this._flags.in_case_statement = !0) : this._flags.case_body ? this.set_mode(c.BlockStatement) : v && (l(v.text, [":", ","]) && l(g.type, [o.STRING, o.WORD, o.RESERVED]) || l(g.text, ["get", "set", "..."]) && l(v.type, [o.WORD, o.RESERVED])) ? l(this._last_last_text, ["class", "interface"]) && !l(v.text, [":", ","]) ? this.set_mode(c.BlockStatement) : this.set_mode(c.ObjectLiteral) : this._flags.last_token.type === o.OPERATOR && this._flags.last_token.text === "=>" ? this.set_mode(c.BlockStatement) : l(this._flags.last_token.type, [o.EQUALS, o.START_EXPR, o.COMMA, o.OPERATOR]) || m(this._flags.last_token, ["return", "throw", "import", "default"]) ? this.set_mode(c.ObjectLiteral) : this.set_mode(c.BlockStatement), this._flags.last_token && m(this._flags.last_token.previous, ["class", "extends"]) && (this._flags.class_start_block = !0);
    var x = !g.comments_before && g.text === "}", C = x && this._flags.last_word === "function" && this._flags.last_token.type === o.END_EXPR;
    if (this._options.brace_preserve_inline) {
      var A = 0, V = null;
      this._flags.inline_frame = !0;
      do
        if (A += 1, V = this._tokens.peek(A - 1), V.newlines) {
          this._flags.inline_frame = !1;
          break;
        }
      while (V.type !== o.EOF && !(V.type === o.END_BLOCK && V.opened === u));
    }
    (this._options.brace_style === "expand" || this._options.brace_style === "none" && u.newlines) && !this._flags.inline_frame ? this._flags.last_token.type !== o.OPERATOR && (C || this._flags.last_token.type === o.EQUALS || m(this._flags.last_token, E) && this._flags.last_token.text !== "else") ? this._output.space_before_token = !0 : this.print_newline(!1, !0) : (N(this._previous_flags.mode) && (this._flags.last_token.type === o.START_EXPR || this._flags.last_token.type === o.COMMA) && ((this._flags.last_token.type === o.COMMA || this._options.space_in_paren) && (this._output.space_before_token = !0), (this._flags.last_token.type === o.COMMA || this._flags.last_token.type === o.START_EXPR && this._flags.inline_frame) && (this.allow_wrap_or_preserved_newline(u), this._previous_flags.multiline_frame = this._previous_flags.multiline_frame || this._flags.multiline_frame, this._flags.multiline_frame = !1)), this._flags.last_token.type !== o.OPERATOR && this._flags.last_token.type !== o.START_EXPR && (l(this._flags.last_token.type, [o.START_BLOCK, o.SEMICOLON]) && !this._flags.inline_frame ? this.print_newline() : this._output.space_before_token = !0)), this.print_token(u), this.indent(), !x && !(this._options.brace_preserve_inline && this._flags.inline_frame) && this.print_newline();
  }, d.prototype.handle_end_block = function(u) {
    for (this.handle_whitespace_and_comments(u); this._flags.mode === c.Statement; )
      this.restore_mode();
    var g = this._flags.last_token.type === o.START_BLOCK;
    this._flags.inline_frame && !g ? this._output.space_before_token = !0 : this._options.brace_style === "expand" ? g || this.print_newline() : g || (N(this._flags.mode) && this._options.keep_array_indentation ? (this._options.keep_array_indentation = !1, this.print_newline(), this._options.keep_array_indentation = !0) : this.print_newline()), this.restore_mode(), this.print_token(u);
  }, d.prototype.handle_word = function(u) {
    if (u.type === o.RESERVED) {
      if (l(u.text, ["set", "get"]) && this._flags.mode !== c.ObjectLiteral)
        u.type = o.WORD;
      else if (u.text === "import" && l(this._tokens.peek().text, ["(", "."]))
        u.type = o.WORD;
      else if (l(u.text, ["as", "from"]) && !this._flags.import_block)
        u.type = o.WORD;
      else if (this._flags.mode === c.ObjectLiteral) {
        var g = this._tokens.peek();
        g.text === ":" && (u.type = o.WORD);
      }
    }
    if (this.start_of_statement(u) ? m(this._flags.last_token, ["var", "let", "const"]) && u.type === o.WORD && (this._flags.declaration_statement = !0) : u.newlines && !I(this._flags.mode) && (this._flags.last_token.type !== o.OPERATOR || this._flags.last_token.text === "--" || this._flags.last_token.text === "++") && this._flags.last_token.type !== o.EQUALS && (this._options.preserve_newlines || !m(this._flags.last_token, ["var", "let", "const", "set", "get"])) ? (this.handle_whitespace_and_comments(u), this.print_newline()) : this.handle_whitespace_and_comments(u), this._flags.do_block && !this._flags.do_while)
      if (p(u, "while")) {
        this._output.space_before_token = !0, this.print_token(u), this._output.space_before_token = !0, this._flags.do_while = !0;
        return;
      } else
        this.print_newline(), this._flags.do_block = !1;
    if (this._flags.if_block)
      if (!this._flags.else_block && p(u, "else"))
        this._flags.else_block = !0;
      else {
        for (; this._flags.mode === c.Statement; )
          this.restore_mode();
        this._flags.if_block = !1, this._flags.else_block = !1;
      }
    if (this._flags.in_case_statement && m(u, ["case", "default"])) {
      this.print_newline(), !this._flags.case_block && (this._flags.case_body || this._options.jslint_happy) && this.deindent(), this._flags.case_body = !1, this.print_token(u), this._flags.in_case = !0;
      return;
    }
    if ((this._flags.last_token.type === o.COMMA || this._flags.last_token.type === o.START_EXPR || this._flags.last_token.type === o.EQUALS || this._flags.last_token.type === o.OPERATOR) && (this.start_of_object_property() || this.allow_wrap_or_preserved_newline(u)), p(u, "function")) {
      (l(this._flags.last_token.text, ["}", ";"]) || this._output.just_added_newline() && !(l(this._flags.last_token.text, ["(", "[", "{", ":", "=", ","]) || this._flags.last_token.type === o.OPERATOR)) && !this._output.just_added_blankline() && !u.comments_before && (this.print_newline(), this.print_newline(!0)), this._flags.last_token.type === o.RESERVED || this._flags.last_token.type === o.WORD ? m(this._flags.last_token, ["get", "set", "new", "export"]) || m(this._flags.last_token, w) ? this._output.space_before_token = !0 : p(this._flags.last_token, "default") && this._last_last_text === "export" ? this._output.space_before_token = !0 : this._flags.last_token.text === "declare" ? this._output.space_before_token = !0 : this.print_newline() : this._flags.last_token.type === o.OPERATOR || this._flags.last_token.text === "=" ? this._output.space_before_token = !0 : !this._flags.multiline_frame && (I(this._flags.mode) || N(this._flags.mode)) || this.print_newline(), this.print_token(u), this._flags.last_word = u.text;
      return;
    }
    var v = "NONE";
    if (this._flags.last_token.type === o.END_BLOCK ? this._previous_flags.inline_frame ? v = "SPACE" : m(u, ["else", "catch", "finally", "from"]) ? this._options.brace_style === "expand" || this._options.brace_style === "end-expand" || this._options.brace_style === "none" && u.newlines ? v = "NEWLINE" : (v = "SPACE", this._output.space_before_token = !0) : v = "NEWLINE" : this._flags.last_token.type === o.SEMICOLON && this._flags.mode === c.BlockStatement ? v = "NEWLINE" : this._flags.last_token.type === o.SEMICOLON && I(this._flags.mode) ? v = "SPACE" : this._flags.last_token.type === o.STRING ? v = "NEWLINE" : this._flags.last_token.type === o.RESERVED || this._flags.last_token.type === o.WORD || this._flags.last_token.text === "*" && (l(this._last_last_text, ["function", "yield"]) || this._flags.mode === c.ObjectLiteral && l(this._last_last_text, ["{", ","])) ? v = "SPACE" : this._flags.last_token.type === o.START_BLOCK ? this._flags.inline_frame ? v = "SPACE" : v = "NEWLINE" : this._flags.last_token.type === o.END_EXPR && (this._output.space_before_token = !0, v = "NEWLINE"), m(u, r) && this._flags.last_token.text !== ")" && (this._flags.inline_frame || this._flags.last_token.text === "else" || this._flags.last_token.text === "export" ? v = "SPACE" : v = "NEWLINE"), m(u, ["else", "catch", "finally"]))
      if ((!(this._flags.last_token.type === o.END_BLOCK && this._previous_flags.mode === c.BlockStatement) || this._options.brace_style === "expand" || this._options.brace_style === "end-expand" || this._options.brace_style === "none" && u.newlines) && !this._flags.inline_frame)
        this.print_newline();
      else {
        this._output.trim(!0);
        var x = this._output.current_line;
        x.last() !== "}" && this.print_newline(), this._output.space_before_token = !0;
      }
    else v === "NEWLINE" ? m(this._flags.last_token, E) ? this._output.space_before_token = !0 : this._flags.last_token.text === "declare" && m(u, ["var", "let", "const"]) ? this._output.space_before_token = !0 : this._flags.last_token.type !== o.END_EXPR ? (this._flags.last_token.type !== o.START_EXPR || !m(u, ["var", "let", "const"])) && this._flags.last_token.text !== ":" && (p(u, "if") && p(u.previous, "else") ? this._output.space_before_token = !0 : this.print_newline()) : m(u, r) && this._flags.last_token.text !== ")" && this.print_newline() : this._flags.multiline_frame && N(this._flags.mode) && this._flags.last_token.text === "," && this._last_last_text === "}" ? this.print_newline() : v === "SPACE" && (this._output.space_before_token = !0);
    u.previous && (u.previous.type === o.WORD || u.previous.type === o.RESERVED) && (this._output.space_before_token = !0), this.print_token(u), this._flags.last_word = u.text, u.type === o.RESERVED && (u.text === "do" ? this._flags.do_block = !0 : u.text === "if" ? this._flags.if_block = !0 : u.text === "import" ? this._flags.import_block = !0 : this._flags.import_block && p(u, "from") && (this._flags.import_block = !1));
  }, d.prototype.handle_semicolon = function(u) {
    this.start_of_statement(u) ? this._output.space_before_token = !1 : this.handle_whitespace_and_comments(u);
    for (var g = this._tokens.peek(); this._flags.mode === c.Statement && !(this._flags.if_block && p(g, "else")) && !this._flags.do_block; )
      this.restore_mode();
    this._flags.import_block && (this._flags.import_block = !1), this.print_token(u);
  }, d.prototype.handle_string = function(u) {
    u.text.startsWith("`") && u.newlines === 0 && u.whitespace_before === "" && (u.previous.text === ")" || this._flags.last_token.type === o.WORD) || (this.start_of_statement(u) ? this._output.space_before_token = !0 : (this.handle_whitespace_and_comments(u), this._flags.last_token.type === o.RESERVED || this._flags.last_token.type === o.WORD || this._flags.inline_frame ? this._output.space_before_token = !0 : this._flags.last_token.type === o.COMMA || this._flags.last_token.type === o.START_EXPR || this._flags.last_token.type === o.EQUALS || this._flags.last_token.type === o.OPERATOR ? this.start_of_object_property() || this.allow_wrap_or_preserved_newline(u) : u.text.startsWith("`") && this._flags.last_token.type === o.END_EXPR && (u.previous.text === "]" || u.previous.text === ")") && u.newlines === 0 ? this._output.space_before_token = !0 : this.print_newline())), this.print_token(u);
  }, d.prototype.handle_equals = function(u) {
    this.start_of_statement(u) || this.handle_whitespace_and_comments(u), this._flags.declaration_statement && (this._flags.declaration_assignment = !0), this._output.space_before_token = !0, this.print_token(u), this._output.space_before_token = !0;
  }, d.prototype.handle_comma = function(u) {
    this.handle_whitespace_and_comments(u, !0), this.print_token(u), this._output.space_before_token = !0, this._flags.declaration_statement ? (I(this._flags.parent.mode) && (this._flags.declaration_assignment = !1), this._flags.declaration_assignment ? (this._flags.declaration_assignment = !1, this.print_newline(!1, !0)) : this._options.comma_first && this.allow_wrap_or_preserved_newline(u)) : this._flags.mode === c.ObjectLiteral || this._flags.mode === c.Statement && this._flags.parent.mode === c.ObjectLiteral ? (this._flags.mode === c.Statement && this.restore_mode(), this._flags.inline_frame || this.print_newline()) : this._options.comma_first && this.allow_wrap_or_preserved_newline(u);
  }, d.prototype.handle_operator = function(u) {
    var g = u.text === "*" && (m(this._flags.last_token, ["function", "yield"]) || l(this._flags.last_token.type, [o.START_BLOCK, o.COMMA, o.END_BLOCK, o.SEMICOLON])), v = l(u.text, ["-", "+"]) && (l(this._flags.last_token.type, [o.START_BLOCK, o.START_EXPR, o.EQUALS, o.OPERATOR]) || l(this._flags.last_token.text, r) || this._flags.last_token.text === ",");
    if (!this.start_of_statement(u)) {
      var x = !g;
      this.handle_whitespace_and_comments(u, x);
    }
    if (u.text === "*" && this._flags.last_token.type === o.DOT) {
      this.print_token(u);
      return;
    }
    if (u.text === "::") {
      this.print_token(u);
      return;
    }
    if (this._flags.last_token.type === o.OPERATOR && l(this._options.operator_position, h) && this.allow_wrap_or_preserved_newline(u), u.text === ":" && this._flags.in_case) {
      this.print_token(u), this._flags.in_case = !1, this._flags.case_body = !0, this._tokens.peek().type !== o.START_BLOCK ? (this.indent(), this.print_newline(), this._flags.case_block = !1) : (this._flags.case_block = !0, this._output.space_before_token = !0);
      return;
    }
    var C = !0, A = !0, V = !1;
    if (u.text === ":" ? this._flags.ternary_depth === 0 ? C = !1 : (this._flags.ternary_depth -= 1, V = !0) : u.text === "?" && (this._flags.ternary_depth += 1), !v && !g && this._options.preserve_newlines && l(u.text, a)) {
      var W = u.text === ":", ee = W && V, he = W && !V;
      switch (this._options.operator_position) {
        case T.before_newline:
          this._output.space_before_token = !he, this.print_token(u), (!W || ee) && this.allow_wrap_or_preserved_newline(u), this._output.space_before_token = !0;
          return;
        case T.after_newline:
          this._output.space_before_token = !0, !W || ee ? this._tokens.peek().newlines ? this.print_newline(!1, !0) : this.allow_wrap_or_preserved_newline(u) : this._output.space_before_token = !1, this.print_token(u), this._output.space_before_token = !0;
          return;
        case T.preserve_newline:
          he || this.allow_wrap_or_preserved_newline(u), C = !(this._output.just_added_newline() || he), this._output.space_before_token = C, this.print_token(u), this._output.space_before_token = !0;
          return;
      }
    }
    if (g) {
      this.allow_wrap_or_preserved_newline(u), C = !1;
      var te = this._tokens.peek();
      A = te && l(te.type, [o.WORD, o.RESERVED]);
    } else if (u.text === "...")
      this.allow_wrap_or_preserved_newline(u), C = this._flags.last_token.type === o.START_BLOCK, A = !1;
    else if (l(u.text, ["--", "++", "!", "~"]) || v) {
      if ((this._flags.last_token.type === o.COMMA || this._flags.last_token.type === o.START_EXPR) && this.allow_wrap_or_preserved_newline(u), C = !1, A = !1, u.newlines && (u.text === "--" || u.text === "++" || u.text === "~")) {
        var re = m(this._flags.last_token, E) && u.newlines;
        re && (this._previous_flags.if_block || this._previous_flags.else_block) && this.restore_mode(), this.print_newline(re, !0);
      }
      this._flags.last_token.text === ";" && I(this._flags.mode) && (C = !0), this._flags.last_token.type === o.RESERVED ? C = !0 : this._flags.last_token.type === o.END_EXPR ? C = !(this._flags.last_token.text === "]" && (u.text === "--" || u.text === "++")) : this._flags.last_token.type === o.OPERATOR && (C = l(u.text, ["--", "-", "++", "+"]) && l(this._flags.last_token.text, ["--", "-", "++", "+"]), l(u.text, ["+", "-"]) && l(this._flags.last_token.text, ["--", "++"]) && (A = !0)), (this._flags.mode === c.BlockStatement && !this._flags.inline_frame || this._flags.mode === c.Statement) && (this._flags.last_token.text === "{" || this._flags.last_token.text === ";") && this.print_newline();
    }
    this._output.space_before_token = this._output.space_before_token || C, this.print_token(u), this._output.space_before_token = A;
  }, d.prototype.handle_block_comment = function(u, g) {
    if (this._output.raw) {
      this._output.add_raw_token(u), u.directives && u.directives.preserve === "end" && (this._output.raw = this._options.test_output_raw);
      return;
    }
    if (u.directives) {
      this.print_newline(!1, g), this.print_token(u), u.directives.preserve === "start" && (this._output.raw = !0), this.print_newline(!1, !0);
      return;
    }
    if (!n.newline.test(u.text) && !u.newlines) {
      this._output.space_before_token = !0, this.print_token(u), this._output.space_before_token = !0;
      return;
    } else
      this.print_block_commment(u, g);
  }, d.prototype.print_block_commment = function(u, g) {
    var v = k(u.text), x, C = !1, A = !1, V = u.whitespace_before, W = V.length;
    if (this.print_newline(!1, g), this.print_token_line_indentation(u), this._output.add_token(v[0]), this.print_newline(!1, g), v.length > 1) {
      for (v = v.slice(1), C = y(v, "*"), A = O(v, V), C && (this._flags.alignment = 1), x = 0; x < v.length; x++)
        C ? (this.print_token_line_indentation(u), this._output.add_token(f(v[x]))) : A && v[x] ? (this.print_token_line_indentation(u), this._output.add_token(v[x].substring(W))) : (this._output.current_line.set_indent(-1), this._output.add_token(v[x])), this.print_newline(!1, g);
      this._flags.alignment = 0;
    }
  }, d.prototype.handle_comment = function(u, g) {
    u.newlines ? this.print_newline(!1, g) : this._output.trim(!0), this._output.space_before_token = !0, this.print_token(u), this.print_newline(!1, g);
  }, d.prototype.handle_dot = function(u) {
    this.start_of_statement(u) || this.handle_whitespace_and_comments(u, !0), this._flags.last_token.text.match("^[0-9]+$") && (this._output.space_before_token = !0), m(this._flags.last_token, E) ? this._output.space_before_token = !1 : this.allow_wrap_or_preserved_newline(
      u,
      this._flags.last_token.text === ")" && this._options.break_chained_methods
    ), this._options.unindent_chained_methods && this._output.just_added_newline() && this.deindent(), this.print_token(u);
  }, d.prototype.handle_unknown = function(u, g) {
    this.print_token(u), u.text[u.text.length - 1] === `
` && this.print_newline(!1, g);
  }, d.prototype.handle_eof = function(u) {
    for (; this._flags.mode === c.Statement; )
      this.restore_mode();
    this.handle_whitespace_and_comments(u);
  }, tn.Beautifier = d, tn;
}
var us;
function hu() {
  if (us) return yt.exports;
  us = 1;
  var e = _u().Beautifier, t = Dr().Options;
  function n(i, s) {
    var r = new e(i, s);
    return r.beautify();
  }
  return yt.exports = n, yt.exports.defaultOptions = function() {
    return new t();
  }, yt.exports;
}
var St = { exports: {} }, _n = {}, hn = {}, cs;
function Mr() {
  if (cs) return hn;
  cs = 1;
  var e = fi().Options;
  function t(n) {
    e.call(this, n, "css"), this.selector_separator_newline = this._get_boolean("selector_separator_newline", !0), this.newline_between_rules = this._get_boolean("newline_between_rules", !0);
    var i = this._get_boolean("space_around_selector_separator");
    this.space_around_combinator = this._get_boolean("space_around_combinator") || i;
    var s = this._get_selection_list("brace_style", ["collapse", "expand", "end-expand", "none", "preserve-inline"]);
    this.brace_style = "collapse";
    for (var r = 0; r < s.length; r++)
      s[r] !== "expand" ? this.brace_style = "collapse" : this.brace_style = s[r];
  }
  return t.prototype = new e(), hn.Options = t, hn;
}
var fs;
function du() {
  if (fs) return _n;
  fs = 1;
  var e = Mr().Options, t = ci().Output, n = pi().InputScanner, i = _i().Directives, s = new i(/\/\*/, /\*\//), r = /\r\n|[\r\n]/, a = /\r\n|[\r\n]/g, o = /\s/, l = /(?:\s|\n)+/g, f = /\/\*(?:[\s\S]*?)((?:\*\/)|$)/g, _ = /\/\/(?:[^\n\r\u2028\u2029]*)/g;
  function p(m, E) {
    this._source_text = m || "", this._options = new e(E), this._ch = null, this._input = null, this.NESTED_AT_RULE = {
      page: !0,
      "font-face": !0,
      keyframes: !0,
      // also in CONDITIONAL_GROUP_RULE below
      media: !0,
      supports: !0,
      document: !0
    }, this.CONDITIONAL_GROUP_RULE = {
      media: !0,
      supports: !0,
      document: !0
    }, this.NON_SEMICOLON_NEWLINE_PROPERTY = [
      "grid-template-areas",
      "grid-template"
    ];
  }
  return p.prototype.eatString = function(m) {
    var E = "";
    for (this._ch = this._input.next(); this._ch; ) {
      if (E += this._ch, this._ch === "\\")
        E += this._input.next();
      else if (m.indexOf(this._ch) !== -1 || this._ch === `
`)
        break;
      this._ch = this._input.next();
    }
    return E;
  }, p.prototype.eatWhitespace = function(m) {
    for (var E = o.test(this._input.peek()), S = 0; o.test(this._input.peek()); )
      this._ch = this._input.next(), m && this._ch === `
` && (S === 0 || S < this._options.max_preserve_newlines) && (S++, this._output.add_new_line(!0));
    return E;
  }, p.prototype.foundNestedPseudoClass = function() {
    for (var m = 0, E = 1, S = this._input.peek(E); S; ) {
      if (S === "{")
        return !0;
      if (S === "(")
        m += 1;
      else if (S === ")") {
        if (m === 0)
          return !1;
        m -= 1;
      } else if (S === ";" || S === "}")
        return !1;
      E++, S = this._input.peek(E);
    }
    return !1;
  }, p.prototype.print_string = function(m) {
    this._output.set_indent(this._indentLevel), this._output.non_breaking_space = !0, this._output.add_token(m);
  }, p.prototype.preserveSingleSpace = function(m) {
    m && (this._output.space_before_token = !0);
  }, p.prototype.indent = function() {
    this._indentLevel++;
  }, p.prototype.outdent = function() {
    this._indentLevel > 0 && this._indentLevel--;
  }, p.prototype.beautify = function() {
    if (this._options.disabled)
      return this._source_text;
    var m = this._source_text, E = this._options.eol;
    E === "auto" && (E = `
`, m && r.test(m || "") && (E = m.match(r)[0])), m = m.replace(a, `
`);
    var S = m.match(/^[\t ]*/)[0];
    this._output = new t(this._options, S), this._input = new n(m), this._indentLevel = 0, this._nestedLevel = 0, this._ch = null;
    for (var T = 0, h = !1, c = !1, b = !1, k = !1, N = !1, I = this._ch, y = !1, O, d, w; O = this._input.read(l), d = O !== "", w = I, this._ch = this._input.next(), this._ch === "\\" && this._input.hasNext() && (this._ch += this._input.next()), I = this._ch, this._ch; )
      if (this._ch === "/" && this._input.peek() === "*") {
        this._output.add_new_line(), this._input.back();
        var u = this._input.read(f), g = s.get_directives(u);
        g && g.ignore === "start" && (u += s.readIgnored(this._input)), this.print_string(u), this.eatWhitespace(!0), this._output.add_new_line();
      } else if (this._ch === "/" && this._input.peek() === "/")
        this._output.space_before_token = !0, this._input.back(), this.print_string(this._input.read(_)), this.eatWhitespace(!0);
      else if (this._ch === "$") {
        this.preserveSingleSpace(d), this.print_string(this._ch);
        var v = this._input.peekUntilAfter(/[: ,;{}()[\]\/='"]/g);
        v.match(/[ :]$/) && (v = this.eatString(": ").replace(/\s$/, ""), this.print_string(v), this._output.space_before_token = !0), v = v.replace(/\s$/, ""), T === 0 && v.indexOf(":") !== -1 && (c = !0, this.indent());
      } else if (this._ch === "@")
        if (this.preserveSingleSpace(d), this._input.peek() === "{")
          this.print_string(this._ch + this.eatString("}"));
        else {
          this.print_string(this._ch);
          var x = this._input.peekUntilAfter(/[: ,;{}()[\]\/='"]/g);
          x.match(/[ :]$/) && (x = this.eatString(": ").replace(/\s$/, ""), this.print_string(x), this._output.space_before_token = !0), x = x.replace(/\s$/, ""), T === 0 && x.indexOf(":") !== -1 ? (c = !0, this.indent()) : x in this.NESTED_AT_RULE ? (this._nestedLevel += 1, x in this.CONDITIONAL_GROUP_RULE && (b = !0)) : T === 0 && !c && (k = !0);
        }
      else if (this._ch === "#" && this._input.peek() === "{")
        this.preserveSingleSpace(d), this.print_string(this._ch + this.eatString("}"));
      else if (this._ch === "{")
        c && (c = !1, this.outdent()), k = !1, b ? (b = !1, h = this._indentLevel >= this._nestedLevel) : h = this._indentLevel >= this._nestedLevel - 1, this._options.newline_between_rules && h && this._output.previous_line && this._output.previous_line.item(-1) !== "{" && this._output.ensure_empty_line_above("/", ","), this._output.space_before_token = !0, this._options.brace_style === "expand" ? (this._output.add_new_line(), this.print_string(this._ch), this.indent(), this._output.set_indent(this._indentLevel)) : (w === "(" ? this._output.space_before_token = !1 : w !== "," && this.indent(), this.print_string(this._ch)), this.eatWhitespace(!0), this._output.add_new_line();
      else if (this._ch === "}")
        this.outdent(), this._output.add_new_line(), w === "{" && this._output.trim(!0), c && (this.outdent(), c = !1), this.print_string(this._ch), h = !1, this._nestedLevel && this._nestedLevel--, this.eatWhitespace(!0), this._output.add_new_line(), this._options.newline_between_rules && !this._output.just_added_blankline() && this._input.peek() !== "}" && this._output.add_new_line(!0), this._input.peek() === ")" && (this._output.trim(!0), this._options.brace_style === "expand" && this._output.add_new_line(!0));
      else if (this._ch === ":") {
        for (var C = 0; C < this.NON_SEMICOLON_NEWLINE_PROPERTY.length; C++)
          if (this._input.lookBack(this.NON_SEMICOLON_NEWLINE_PROPERTY[C])) {
            y = !0;
            break;
          }
        (h || b) && !(this._input.lookBack("&") || this.foundNestedPseudoClass()) && !this._input.lookBack("(") && !k && T === 0 ? (this.print_string(":"), c || (c = !0, this._output.space_before_token = !0, this.eatWhitespace(!0), this.indent())) : (this._input.lookBack(" ") && (this._output.space_before_token = !0), this._input.peek() === ":" ? (this._ch = this._input.next(), this.print_string("::")) : this.print_string(":"));
      } else if (this._ch === '"' || this._ch === "'") {
        var A = w === '"' || w === "'";
        this.preserveSingleSpace(A || d), this.print_string(this._ch + this.eatString(this._ch)), this.eatWhitespace(!0);
      } else if (this._ch === ";")
        y = !1, T === 0 ? (c && (this.outdent(), c = !1), k = !1, this.print_string(this._ch), this.eatWhitespace(!0), this._input.peek() !== "/" && this._output.add_new_line()) : (this.print_string(this._ch), this.eatWhitespace(!0), this._output.space_before_token = !0);
      else if (this._ch === "(")
        if (this._input.lookBack("url"))
          this.print_string(this._ch), this.eatWhitespace(), T++, this.indent(), this._ch = this._input.next(), this._ch === ")" || this._ch === '"' || this._ch === "'" ? this._input.back() : this._ch && (this.print_string(this._ch + this.eatString(")")), T && (T--, this.outdent()));
        else {
          var V = !1;
          this._input.lookBack("with") && (V = !0), this.preserveSingleSpace(d || V), this.print_string(this._ch), c && w === "$" && this._options.selector_separator_newline ? (this._output.add_new_line(), N = !0) : (this.eatWhitespace(), T++, this.indent());
        }
      else if (this._ch === ")")
        T && (T--, this.outdent()), N && this._input.peek() === ";" && this._options.selector_separator_newline && (N = !1, this.outdent(), this._output.add_new_line()), this.print_string(this._ch);
      else if (this._ch === ",")
        this.print_string(this._ch), this.eatWhitespace(!0), this._options.selector_separator_newline && (!c || N) && T === 0 && !k ? this._output.add_new_line() : this._output.space_before_token = !0;
      else if ((this._ch === ">" || this._ch === "+" || this._ch === "~") && !c && T === 0)
        this._options.space_around_combinator ? (this._output.space_before_token = !0, this.print_string(this._ch), this._output.space_before_token = !0) : (this.print_string(this._ch), this.eatWhitespace(), this._ch && o.test(this._ch) && (this._ch = ""));
      else if (this._ch === "]")
        this.print_string(this._ch);
      else if (this._ch === "[")
        this.preserveSingleSpace(d), this.print_string(this._ch);
      else if (this._ch === "=")
        this.eatWhitespace(), this.print_string("="), o.test(this._ch) && (this._ch = "");
      else if (this._ch === "!" && !this._input.lookBack("\\"))
        this._output.space_before_token = !0, this.print_string(this._ch);
      else {
        var W = w === '"' || w === "'";
        this.preserveSingleSpace(W || d), this.print_string(this._ch), !this._output.just_added_newline() && this._input.peek() === `
` && y && this._output.add_new_line();
      }
    var ee = this._output.get_code(E);
    return ee;
  }, _n.Beautifier = p, _n;
}
var ps;
function mu() {
  if (ps) return St.exports;
  ps = 1;
  var e = du().Beautifier, t = Mr().Options;
  function n(i, s) {
    var r = new e(i, s);
    return r.beautify();
  }
  return St.exports = n, St.exports.defaultOptions = function() {
    return new t();
  }, St.exports;
}
var Ot = { exports: {} }, dn = {}, mn = {}, _s;
function Vr() {
  if (_s) return mn;
  _s = 1;
  var e = fi().Options;
  function t(n) {
    e.call(this, n, "html"), this.templating.length === 1 && this.templating[0] === "auto" && (this.templating = ["django", "erb", "handlebars", "php"]), this.indent_inner_html = this._get_boolean("indent_inner_html"), this.indent_body_inner_html = this._get_boolean("indent_body_inner_html", !0), this.indent_head_inner_html = this._get_boolean("indent_head_inner_html", !0), this.indent_handlebars = this._get_boolean("indent_handlebars", !0), this.wrap_attributes = this._get_selection(
      "wrap_attributes",
      ["auto", "force", "force-aligned", "force-expand-multiline", "aligned-multiple", "preserve", "preserve-aligned"]
    ), this.wrap_attributes_min_attrs = this._get_number("wrap_attributes_min_attrs", 2), this.wrap_attributes_indent_size = this._get_number("wrap_attributes_indent_size", this.indent_size), this.extra_liners = this._get_array("extra_liners", ["head", "body", "/html"]), this.inline = this._get_array("inline", [
      "a",
      "abbr",
      "area",
      "audio",
      "b",
      "bdi",
      "bdo",
      "br",
      "button",
      "canvas",
      "cite",
      "code",
      "data",
      "datalist",
      "del",
      "dfn",
      "em",
      "embed",
      "i",
      "iframe",
      "img",
      "input",
      "ins",
      "kbd",
      "keygen",
      "label",
      "map",
      "mark",
      "math",
      "meter",
      "noscript",
      "object",
      "output",
      "progress",
      "q",
      "ruby",
      "s",
      "samp",
      /* 'script', */
      "select",
      "small",
      "span",
      "strong",
      "sub",
      "sup",
      "svg",
      "template",
      "textarea",
      "time",
      "u",
      "var",
      "video",
      "wbr",
      "text",
      // obsolete inline tags
      "acronym",
      "big",
      "strike",
      "tt"
    ]), this.inline_custom_elements = this._get_boolean("inline_custom_elements", !0), this.void_elements = this._get_array("void_elements", [
      // HTLM void elements - aka self-closing tags - aka singletons
      // https://www.w3.org/html/wg/drafts/html/master/syntax.html#void-elements
      "area",
      "base",
      "br",
      "col",
      "embed",
      "hr",
      "img",
      "input",
      "keygen",
      "link",
      "menuitem",
      "meta",
      "param",
      "source",
      "track",
      "wbr",
      // NOTE: Optional tags are too complex for a simple list
      // they are hard coded in _do_optional_end_element
      // Doctype and xml elements
      "!doctype",
      "?xml",
      // obsolete tags
      // basefont: https://www.computerhope.com/jargon/h/html-basefont-tag.htm
      // isndex: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/isindex
      "basefont",
      "isindex"
    ]), this.unformatted = this._get_array("unformatted", []), this.content_unformatted = this._get_array("content_unformatted", [
      "pre",
      "textarea"
    ]), this.unformatted_content_delimiter = this._get_characters("unformatted_content_delimiter"), this.indent_scripts = this._get_selection("indent_scripts", ["normal", "keep", "separate"]);
  }
  return t.prototype = new e(), mn.Options = t, mn;
}
var Tt = {}, hs;
function ds() {
  if (hs) return Tt;
  hs = 1;
  var e = Kt().Tokenizer, t = Kt().TOKEN, n = _i().Directives, i = Pr().TemplatablePattern, s = Xt().Pattern, r = {
    TAG_OPEN: "TK_TAG_OPEN",
    TAG_CLOSE: "TK_TAG_CLOSE",
    ATTRIBUTE: "TK_ATTRIBUTE",
    EQUALS: "TK_EQUALS",
    VALUE: "TK_VALUE",
    COMMENT: "TK_COMMENT",
    TEXT: "TK_TEXT",
    UNKNOWN: "TK_UNKNOWN",
    START: t.START,
    RAW: t.RAW,
    EOF: t.EOF
  }, a = new n(/<\!--/, /-->/), o = function(l, f) {
    e.call(this, l, f), this._current_tag_name = "";
    var _ = new i(this._input).read_options(this._options), p = new s(this._input);
    if (this.__patterns = {
      word: _.until(/[\n\r\t <]/),
      single_quote: _.until_after(/'/),
      double_quote: _.until_after(/"/),
      attribute: _.until(/[\n\r\t =>]|\/>/),
      element_name: _.until(/[\n\r\t >\/]/),
      handlebars_comment: p.starting_with(/{{!--/).until_after(/--}}/),
      handlebars: p.starting_with(/{{/).until_after(/}}/),
      handlebars_open: p.until(/[\n\r\t }]/),
      handlebars_raw_close: p.until(/}}/),
      comment: p.starting_with(/<!--/).until_after(/-->/),
      cdata: p.starting_with(/<!\[CDATA\[/).until_after(/]]>/),
      // https://en.wikipedia.org/wiki/Conditional_comment
      conditional_comment: p.starting_with(/<!\[/).until_after(/]>/),
      processing: p.starting_with(/<\?/).until_after(/\?>/)
    }, this._options.indent_handlebars && (this.__patterns.word = this.__patterns.word.exclude("handlebars")), this._unformatted_content_delimiter = null, this._options.unformatted_content_delimiter) {
      var m = this._input.get_literal_regexp(this._options.unformatted_content_delimiter);
      this.__patterns.unformatted_content_delimiter = p.matching(m).until_after(m);
    }
  };
  return o.prototype = new e(), o.prototype._is_comment = function(l) {
    return !1;
  }, o.prototype._is_opening = function(l) {
    return l.type === r.TAG_OPEN;
  }, o.prototype._is_closing = function(l, f) {
    return l.type === r.TAG_CLOSE && f && ((l.text === ">" || l.text === "/>") && f.text[0] === "<" || l.text === "}}" && f.text[0] === "{" && f.text[1] === "{");
  }, o.prototype._reset = function() {
    this._current_tag_name = "";
  }, o.prototype._get_next_token = function(l, f) {
    var _ = null;
    this._readWhitespace();
    var p = this._input.peek();
    return p === null ? this._create_token(r.EOF, "") : (_ = _ || this._read_open_handlebars(p, f), _ = _ || this._read_attribute(p, l, f), _ = _ || this._read_close(p, f), _ = _ || this._read_raw_content(p, l, f), _ = _ || this._read_content_word(p), _ = _ || this._read_comment_or_cdata(p), _ = _ || this._read_processing(p), _ = _ || this._read_open(p, f), _ = _ || this._create_token(r.UNKNOWN, this._input.next()), _);
  }, o.prototype._read_comment_or_cdata = function(l) {
    var f = null, _ = null, p = null;
    if (l === "<") {
      var m = this._input.peek(1);
      m === "!" && (_ = this.__patterns.comment.read(), _ ? (p = a.get_directives(_), p && p.ignore === "start" && (_ += a.readIgnored(this._input))) : _ = this.__patterns.cdata.read()), _ && (f = this._create_token(r.COMMENT, _), f.directives = p);
    }
    return f;
  }, o.prototype._read_processing = function(l) {
    var f = null, _ = null, p = null;
    if (l === "<") {
      var m = this._input.peek(1);
      (m === "!" || m === "?") && (_ = this.__patterns.conditional_comment.read(), _ = _ || this.__patterns.processing.read()), _ && (f = this._create_token(r.COMMENT, _), f.directives = p);
    }
    return f;
  }, o.prototype._read_open = function(l, f) {
    var _ = null, p = null;
    return f || l === "<" && (_ = this._input.next(), this._input.peek() === "/" && (_ += this._input.next()), _ += this.__patterns.element_name.read(), p = this._create_token(r.TAG_OPEN, _)), p;
  }, o.prototype._read_open_handlebars = function(l, f) {
    var _ = null, p = null;
    return f || this._options.indent_handlebars && l === "{" && this._input.peek(1) === "{" && (this._input.peek(2) === "!" ? (_ = this.__patterns.handlebars_comment.read(), _ = _ || this.__patterns.handlebars.read(), p = this._create_token(r.COMMENT, _)) : (_ = this.__patterns.handlebars_open.read(), p = this._create_token(r.TAG_OPEN, _))), p;
  }, o.prototype._read_close = function(l, f) {
    var _ = null, p = null;
    return f && (f.text[0] === "<" && (l === ">" || l === "/" && this._input.peek(1) === ">") ? (_ = this._input.next(), l === "/" && (_ += this._input.next()), p = this._create_token(r.TAG_CLOSE, _)) : f.text[0] === "{" && l === "}" && this._input.peek(1) === "}" && (this._input.next(), this._input.next(), p = this._create_token(r.TAG_CLOSE, "}}"))), p;
  }, o.prototype._read_attribute = function(l, f, _) {
    var p = null, m = "";
    if (_ && _.text[0] === "<")
      if (l === "=")
        p = this._create_token(r.EQUALS, this._input.next());
      else if (l === '"' || l === "'") {
        var E = this._input.next();
        l === '"' ? E += this.__patterns.double_quote.read() : E += this.__patterns.single_quote.read(), p = this._create_token(r.VALUE, E);
      } else
        m = this.__patterns.attribute.read(), m && (f.type === r.EQUALS ? p = this._create_token(r.VALUE, m) : p = this._create_token(r.ATTRIBUTE, m));
    return p;
  }, o.prototype._is_content_unformatted = function(l) {
    return this._options.void_elements.indexOf(l) === -1 && (this._options.content_unformatted.indexOf(l) !== -1 || this._options.unformatted.indexOf(l) !== -1);
  }, o.prototype._read_raw_content = function(l, f, _) {
    var p = "";
    if (_ && _.text[0] === "{")
      p = this.__patterns.handlebars_raw_close.read();
    else if (f.type === r.TAG_CLOSE && f.opened.text[0] === "<" && f.text[0] !== "/") {
      var m = f.opened.text.substr(1).toLowerCase();
      if (m === "script" || m === "style") {
        var E = this._read_comment_or_cdata(l);
        if (E)
          return E.type = r.TEXT, E;
        p = this._input.readUntil(new RegExp("</" + m + "[\\n\\r\\t ]*?>", "ig"));
      } else this._is_content_unformatted(m) && (p = this._input.readUntil(new RegExp("</" + m + "[\\n\\r\\t ]*?>", "ig")));
    }
    return p ? this._create_token(r.TEXT, p) : null;
  }, o.prototype._read_content_word = function(l) {
    var f = "";
    if (this._options.unformatted_content_delimiter && l === this._options.unformatted_content_delimiter[0] && (f = this.__patterns.unformatted_content_delimiter.read()), f || (f = this.__patterns.word.read()), f)
      return this._create_token(r.TEXT, f);
  }, Tt.Tokenizer = o, Tt.TOKEN = r, Tt;
}
var ms;
function bu() {
  if (ms) return dn;
  ms = 1;
  var e = Vr().Options, t = ci().Output, n = ds().Tokenizer, i = ds().TOKEN, s = /\r\n|[\r\n]/, r = /\r\n|[\r\n]/g, a = function(h, c) {
    this.indent_level = 0, this.alignment_size = 0, this.max_preserve_newlines = h.max_preserve_newlines, this.preserve_newlines = h.preserve_newlines, this._output = new t(h, c);
  };
  a.prototype.current_line_has_match = function(h) {
    return this._output.current_line.has_match(h);
  }, a.prototype.set_space_before_token = function(h, c) {
    this._output.space_before_token = h, this._output.non_breaking_space = c;
  }, a.prototype.set_wrap_point = function() {
    this._output.set_indent(this.indent_level, this.alignment_size), this._output.set_wrap_point();
  }, a.prototype.add_raw_token = function(h) {
    this._output.add_raw_token(h);
  }, a.prototype.print_preserved_newlines = function(h) {
    var c = 0;
    h.type !== i.TEXT && h.previous.type !== i.TEXT && (c = h.newlines ? 1 : 0), this.preserve_newlines && (c = h.newlines < this.max_preserve_newlines + 1 ? h.newlines : this.max_preserve_newlines + 1);
    for (var b = 0; b < c; b++)
      this.print_newline(b > 0);
    return c !== 0;
  }, a.prototype.traverse_whitespace = function(h) {
    return h.whitespace_before || h.newlines ? (this.print_preserved_newlines(h) || (this._output.space_before_token = !0), !0) : !1;
  }, a.prototype.previous_token_wrapped = function() {
    return this._output.previous_token_wrapped;
  }, a.prototype.print_newline = function(h) {
    this._output.add_new_line(h);
  }, a.prototype.print_token = function(h) {
    h.text && (this._output.set_indent(this.indent_level, this.alignment_size), this._output.add_token(h.text));
  }, a.prototype.indent = function() {
    this.indent_level++;
  }, a.prototype.get_full_indent = function(h) {
    return h = this.indent_level + (h || 0), h < 1 ? "" : this._output.get_indent_string(h);
  };
  var o = function(h) {
    for (var c = null, b = h.next; b.type !== i.EOF && h.closed !== b; ) {
      if (b.type === i.ATTRIBUTE && b.text === "type") {
        b.next && b.next.type === i.EQUALS && b.next.next && b.next.next.type === i.VALUE && (c = b.next.next.text);
        break;
      }
      b = b.next;
    }
    return c;
  }, l = function(h, c) {
    var b = null, k = null;
    return c.closed ? (h === "script" ? b = "text/javascript" : h === "style" && (b = "text/css"), b = o(c) || b, b.search("text/css") > -1 ? k = "css" : b.search(/module|((text|application|dojo)\/(x-)?(javascript|ecmascript|jscript|livescript|(ld\+)?json|method|aspect))/) > -1 ? k = "javascript" : b.search(/(text|application|dojo)\/(x-)?(html)/) > -1 ? k = "html" : b.search(/test\/null/) > -1 && (k = "null"), k) : null;
  };
  function f(h, c) {
    return c.indexOf(h) !== -1;
  }
  function _(h, c, b) {
    this.parent = h || null, this.tag = c ? c.tag_name : "", this.indent_level = b || 0, this.parser_token = c || null;
  }
  function p(h) {
    this._printer = h, this._current_frame = null;
  }
  p.prototype.get_parser_token = function() {
    return this._current_frame ? this._current_frame.parser_token : null;
  }, p.prototype.record_tag = function(h) {
    var c = new _(this._current_frame, h, this._printer.indent_level);
    this._current_frame = c;
  }, p.prototype._try_pop_frame = function(h) {
    var c = null;
    return h && (c = h.parser_token, this._printer.indent_level = h.indent_level, this._current_frame = h.parent), c;
  }, p.prototype._get_frame = function(h, c) {
    for (var b = this._current_frame; b && h.indexOf(b.tag) === -1; ) {
      if (c && c.indexOf(b.tag) !== -1) {
        b = null;
        break;
      }
      b = b.parent;
    }
    return b;
  }, p.prototype.try_pop = function(h, c) {
    var b = this._get_frame([h], c);
    return this._try_pop_frame(b);
  }, p.prototype.indent_to_tag = function(h) {
    var c = this._get_frame(h);
    c && (this._printer.indent_level = c.indent_level);
  };
  function m(h, c, b, k) {
    this._source_text = h || "", c = c || {}, this._js_beautify = b, this._css_beautify = k, this._tag_stack = null;
    var N = new e(c, "html");
    this._options = N, this._is_wrap_attributes_force = this._options.wrap_attributes.substr(0, 5) === "force", this._is_wrap_attributes_force_expand_multiline = this._options.wrap_attributes === "force-expand-multiline", this._is_wrap_attributes_force_aligned = this._options.wrap_attributes === "force-aligned", this._is_wrap_attributes_aligned_multiple = this._options.wrap_attributes === "aligned-multiple", this._is_wrap_attributes_preserve = this._options.wrap_attributes.substr(0, 8) === "preserve", this._is_wrap_attributes_preserve_aligned = this._options.wrap_attributes === "preserve-aligned";
  }
  m.prototype.beautify = function() {
    if (this._options.disabled)
      return this._source_text;
    var h = this._source_text, c = this._options.eol;
    this._options.eol === "auto" && (c = `
`, h && s.test(h) && (c = h.match(s)[0])), h = h.replace(r, `
`);
    var b = h.match(/^[\t ]*/)[0], k = {
      text: "",
      type: ""
    }, N = new E(), I = new a(this._options, b), y = new n(h, this._options).tokenize();
    this._tag_stack = new p(I);
    for (var O = null, d = y.next(); d.type !== i.EOF; )
      d.type === i.TAG_OPEN || d.type === i.COMMENT ? (O = this._handle_tag_open(I, d, N, k, y), N = O) : d.type === i.ATTRIBUTE || d.type === i.EQUALS || d.type === i.VALUE || d.type === i.TEXT && !N.tag_complete ? O = this._handle_inside_tag(I, d, N, k) : d.type === i.TAG_CLOSE ? O = this._handle_tag_close(I, d, N) : d.type === i.TEXT ? O = this._handle_text(I, d, N) : I.add_raw_token(d), k = O, d = y.next();
    var w = I._output.get_code(c);
    return w;
  }, m.prototype._handle_tag_close = function(h, c, b) {
    var k = {
      text: c.text,
      type: c.type
    };
    return h.alignment_size = 0, b.tag_complete = !0, h.set_space_before_token(c.newlines || c.whitespace_before !== "", !0), b.is_unformatted ? h.add_raw_token(c) : (b.tag_start_char === "<" && (h.set_space_before_token(c.text[0] === "/", !0), this._is_wrap_attributes_force_expand_multiline && b.has_wrapped_attrs && h.print_newline(!1)), h.print_token(c)), b.indent_content && !(b.is_unformatted || b.is_content_unformatted) && (h.indent(), b.indent_content = !1), !b.is_inline_element && !(b.is_unformatted || b.is_content_unformatted) && h.set_wrap_point(), k;
  }, m.prototype._handle_inside_tag = function(h, c, b, k) {
    var N = b.has_wrapped_attrs, I = {
      text: c.text,
      type: c.type
    };
    return h.set_space_before_token(c.newlines || c.whitespace_before !== "", !0), b.is_unformatted ? h.add_raw_token(c) : b.tag_start_char === "{" && c.type === i.TEXT ? h.print_preserved_newlines(c) ? (c.newlines = 0, h.add_raw_token(c)) : h.print_token(c) : (c.type === i.ATTRIBUTE ? h.set_space_before_token(!0) : (c.type === i.EQUALS || c.type === i.VALUE && c.previous.type === i.EQUALS) && h.set_space_before_token(!1), c.type === i.ATTRIBUTE && b.tag_start_char === "<" && ((this._is_wrap_attributes_preserve || this._is_wrap_attributes_preserve_aligned) && (h.traverse_whitespace(c), N = N || c.newlines !== 0), this._is_wrap_attributes_force && b.attr_count >= this._options.wrap_attributes_min_attrs && (k.type !== i.TAG_OPEN || // ie. second attribute and beyond
    this._is_wrap_attributes_force_expand_multiline) && (h.print_newline(!1), N = !0)), h.print_token(c), N = N || h.previous_token_wrapped(), b.has_wrapped_attrs = N), I;
  }, m.prototype._handle_text = function(h, c, b) {
    var k = {
      text: c.text,
      type: "TK_CONTENT"
    };
    return b.custom_beautifier_name ? this._print_custom_beatifier_text(h, c, b) : b.is_unformatted || b.is_content_unformatted ? h.add_raw_token(c) : (h.traverse_whitespace(c), h.print_token(c)), k;
  }, m.prototype._print_custom_beatifier_text = function(h, c, b) {
    var k = this;
    if (c.text !== "") {
      var N = c.text, I, y = 1, O = "", d = "";
      b.custom_beautifier_name === "javascript" && typeof this._js_beautify == "function" ? I = this._js_beautify : b.custom_beautifier_name === "css" && typeof this._css_beautify == "function" ? I = this._css_beautify : b.custom_beautifier_name === "html" && (I = function(C, A) {
        var V = new m(C, A, k._js_beautify, k._css_beautify);
        return V.beautify();
      }), this._options.indent_scripts === "keep" ? y = 0 : this._options.indent_scripts === "separate" && (y = -h.indent_level);
      var w = h.get_full_indent(y);
      if (N = N.replace(/\n[ \t]*$/, ""), b.custom_beautifier_name !== "html" && N[0] === "<" && N.match(/^(<!--|<!\[CDATA\[)/)) {
        var u = /^(<!--[^\n]*|<!\[CDATA\[)(\n?)([ \t\n]*)([\s\S]*)(-->|]]>)$/.exec(N);
        if (!u) {
          h.add_raw_token(c);
          return;
        }
        O = w + u[1] + `
`, N = u[4], u[5] && (d = w + u[5]), N = N.replace(/\n[ \t]*$/, ""), (u[2] || u[3].indexOf(`
`) !== -1) && (u = u[3].match(/[ \t]+$/), u && (c.whitespace_before = u[0]));
      }
      if (N)
        if (I) {
          var g = function() {
            this.eol = `
`;
          };
          g.prototype = this._options.raw_options;
          var v = new g();
          N = I(w + N, v);
        } else {
          var x = c.whitespace_before;
          x && (N = N.replace(new RegExp(`
(` + x + ")?", "g"), `
`)), N = w + N.replace(/\n/g, `
` + w);
        }
      O && (N ? N = O + N + `
` + d : N = O + d), h.print_newline(!1), N && (c.text = N, c.whitespace_before = "", c.newlines = 0, h.add_raw_token(c), h.print_newline(!0));
    }
  }, m.prototype._handle_tag_open = function(h, c, b, k, N) {
    var I = this._get_tag_open_token(c);
    if ((b.is_unformatted || b.is_content_unformatted) && !b.is_empty_element && c.type === i.TAG_OPEN && !I.is_start_tag ? (h.add_raw_token(c), I.start_tag_token = this._tag_stack.try_pop(I.tag_name)) : (h.traverse_whitespace(c), this._set_tag_position(h, c, I, b, k), I.is_inline_element || h.set_wrap_point(), h.print_token(c)), I.is_start_tag && this._is_wrap_attributes_force) {
      var y = 0, O;
      do
        O = N.peek(y), O.type === i.ATTRIBUTE && (I.attr_count += 1), y += 1;
      while (O.type !== i.EOF && O.type !== i.TAG_CLOSE);
    }
    return (this._is_wrap_attributes_force_aligned || this._is_wrap_attributes_aligned_multiple || this._is_wrap_attributes_preserve_aligned) && (I.alignment_size = c.text.length + 1), !I.tag_complete && !I.is_unformatted && (h.alignment_size = I.alignment_size), I;
  };
  var E = function(h, c) {
    if (this.parent = h || null, this.text = "", this.type = "TK_TAG_OPEN", this.tag_name = "", this.is_inline_element = !1, this.is_unformatted = !1, this.is_content_unformatted = !1, this.is_empty_element = !1, this.is_start_tag = !1, this.is_end_tag = !1, this.indent_content = !1, this.multiline_content = !1, this.custom_beautifier_name = null, this.start_tag_token = null, this.attr_count = 0, this.has_wrapped_attrs = !1, this.alignment_size = 0, this.tag_complete = !1, this.tag_start_char = "", this.tag_check = "", !c)
      this.tag_complete = !0;
    else {
      var b;
      this.tag_start_char = c.text[0], this.text = c.text, this.tag_start_char === "<" ? (b = c.text.match(/^<([^\s>]*)/), this.tag_check = b ? b[1] : "") : (b = c.text.match(/^{{~?(?:[\^]|#\*?)?([^\s}]+)/), this.tag_check = b ? b[1] : "", (c.text.startsWith("{{#>") || c.text.startsWith("{{~#>")) && this.tag_check[0] === ">" && (this.tag_check === ">" && c.next !== null ? this.tag_check = c.next.text.split(" ")[0] : this.tag_check = c.text.split(">")[1])), this.tag_check = this.tag_check.toLowerCase(), c.type === i.COMMENT && (this.tag_complete = !0), this.is_start_tag = this.tag_check.charAt(0) !== "/", this.tag_name = this.is_start_tag ? this.tag_check : this.tag_check.substr(1), this.is_end_tag = !this.is_start_tag || c.closed && c.closed.text === "/>";
      var k = 2;
      this.tag_start_char === "{" && this.text.length >= 3 && this.text.charAt(2) === "~" && (k = 3), this.is_end_tag = this.is_end_tag || this.tag_start_char === "{" && (this.text.length < 3 || /[^#\^]/.test(this.text.charAt(k)));
    }
  };
  m.prototype._get_tag_open_token = function(h) {
    var c = new E(this._tag_stack.get_parser_token(), h);
    return c.alignment_size = this._options.wrap_attributes_indent_size, c.is_end_tag = c.is_end_tag || f(c.tag_check, this._options.void_elements), c.is_empty_element = c.tag_complete || c.is_start_tag && c.is_end_tag, c.is_unformatted = !c.tag_complete && f(c.tag_check, this._options.unformatted), c.is_content_unformatted = !c.is_empty_element && f(c.tag_check, this._options.content_unformatted), c.is_inline_element = f(c.tag_name, this._options.inline) || this._options.inline_custom_elements && c.tag_name.includes("-") || c.tag_start_char === "{", c;
  }, m.prototype._set_tag_position = function(h, c, b, k, N) {
    if (b.is_empty_element || (b.is_end_tag ? b.start_tag_token = this._tag_stack.try_pop(b.tag_name) : (this._do_optional_end_element(b) && (b.is_inline_element || h.print_newline(!1)), this._tag_stack.record_tag(b), (b.tag_name === "script" || b.tag_name === "style") && !(b.is_unformatted || b.is_content_unformatted) && (b.custom_beautifier_name = l(b.tag_check, c)))), f(b.tag_check, this._options.extra_liners) && (h.print_newline(!1), h._output.just_added_blankline() || h.print_newline(!0)), b.is_empty_element) {
      if (b.tag_start_char === "{" && b.tag_check === "else") {
        this._tag_stack.indent_to_tag(["if", "unless", "each"]), b.indent_content = !0;
        var I = h.current_line_has_match(/{{#if/);
        I || h.print_newline(!1);
      }
      b.tag_name === "!--" && N.type === i.TAG_CLOSE && k.is_end_tag && b.text.indexOf(`
`) === -1 || (b.is_inline_element || b.is_unformatted || h.print_newline(!1), this._calcluate_parent_multiline(h, b));
    } else if (b.is_end_tag) {
      var y = !1;
      y = b.start_tag_token && b.start_tag_token.multiline_content, y = y || !b.is_inline_element && !(k.is_inline_element || k.is_unformatted) && !(N.type === i.TAG_CLOSE && b.start_tag_token === k) && N.type !== "TK_CONTENT", (b.is_content_unformatted || b.is_unformatted) && (y = !1), y && h.print_newline(!1);
    } else
      b.indent_content = !b.custom_beautifier_name, b.tag_start_char === "<" && (b.tag_name === "html" ? b.indent_content = this._options.indent_inner_html : b.tag_name === "head" ? b.indent_content = this._options.indent_head_inner_html : b.tag_name === "body" && (b.indent_content = this._options.indent_body_inner_html)), !(b.is_inline_element || b.is_unformatted) && (N.type !== "TK_CONTENT" || b.is_content_unformatted) && h.print_newline(!1), this._calcluate_parent_multiline(h, b);
  }, m.prototype._calcluate_parent_multiline = function(h, c) {
    c.parent && h._output.just_added_newline() && !((c.is_inline_element || c.is_unformatted) && c.parent.is_inline_element) && (c.parent.multiline_content = !0);
  };
  var S = ["address", "article", "aside", "blockquote", "details", "div", "dl", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hr", "main", "menu", "nav", "ol", "p", "pre", "section", "table", "ul"], T = ["a", "audio", "del", "ins", "map", "noscript", "video"];
  return m.prototype._do_optional_end_element = function(h) {
    var c = null;
    if (!(h.is_empty_element || !h.is_start_tag || !h.parent)) {
      if (h.tag_name === "body")
        c = c || this._tag_stack.try_pop("head");
      else if (h.tag_name === "li")
        c = c || this._tag_stack.try_pop("li", ["ol", "ul", "menu"]);
      else if (h.tag_name === "dd" || h.tag_name === "dt")
        c = c || this._tag_stack.try_pop("dt", ["dl"]), c = c || this._tag_stack.try_pop("dd", ["dl"]);
      else if (h.parent.tag_name === "p" && S.indexOf(h.tag_name) !== -1) {
        var b = h.parent.parent;
        (!b || T.indexOf(b.tag_name) === -1) && (c = c || this._tag_stack.try_pop("p"));
      } else h.tag_name === "rp" || h.tag_name === "rt" ? (c = c || this._tag_stack.try_pop("rt", ["ruby", "rtc"]), c = c || this._tag_stack.try_pop("rp", ["ruby", "rtc"])) : h.tag_name === "optgroup" ? c = c || this._tag_stack.try_pop("optgroup", ["select"]) : h.tag_name === "option" ? c = c || this._tag_stack.try_pop("option", ["select", "datalist", "optgroup"]) : h.tag_name === "colgroup" ? c = c || this._tag_stack.try_pop("caption", ["table"]) : h.tag_name === "thead" ? (c = c || this._tag_stack.try_pop("caption", ["table"]), c = c || this._tag_stack.try_pop("colgroup", ["table"])) : h.tag_name === "tbody" || h.tag_name === "tfoot" ? (c = c || this._tag_stack.try_pop("caption", ["table"]), c = c || this._tag_stack.try_pop("colgroup", ["table"]), c = c || this._tag_stack.try_pop("thead", ["table"]), c = c || this._tag_stack.try_pop("tbody", ["table"])) : h.tag_name === "tr" ? (c = c || this._tag_stack.try_pop("caption", ["table"]), c = c || this._tag_stack.try_pop("colgroup", ["table"]), c = c || this._tag_stack.try_pop("tr", ["table", "thead", "tbody", "tfoot"])) : (h.tag_name === "th" || h.tag_name === "td") && (c = c || this._tag_stack.try_pop("td", ["table", "thead", "tbody", "tfoot", "tr"]), c = c || this._tag_stack.try_pop("th", ["table", "thead", "tbody", "tfoot", "tr"]));
      return h.parent = this._tag_stack.get_parser_token(), c;
    }
  }, dn.Beautifier = m, dn;
}
var bs;
function vu() {
  if (bs) return Ot.exports;
  bs = 1;
  var e = bu().Beautifier, t = Vr().Options;
  function n(i, s, r, a) {
    var o = new e(i, s, r, a);
    return o.beautify();
  }
  return Ot.exports = n, Ot.exports.defaultOptions = function() {
    return new t();
  }, Ot.exports;
}
var vs;
function gu() {
  if (vs) return Qe;
  vs = 1;
  var e = hu(), t = mu(), n = vu();
  function i(s, r, a, o) {
    return a = a || e, o = o || t, n(s, r, a, o);
  }
  return i.defaultOptions = n.defaultOptions, Qe.js = e, Qe.css = t, Qe.html = i, Qe;
}
(function(e) {
  function t(n, i, s) {
    var r = function(a, o) {
      return n.js_beautify(a, o);
    };
    return r.js = n.js_beautify, r.css = i.css_beautify, r.html = s.html_beautify, r.js_beautify = n.js_beautify, r.css_beautify = i.css_beautify, r.html_beautify = s.html_beautify, r;
  }
  (function(n) {
    var i = gu();
    i.js_beautify = i.js, i.css_beautify = i.css, i.html_beautify = i.html, n.exports = t(i, i, i);
  })(e);
})(Cr);
var yu = Cr.exports, Eu = /* @__PURE__ */ cu(yu), Lr = (
  /** @class */
  (function() {
    function e(t) {
      var n = this;
      this.isDisabled = function() {
        var i = [
          "BUTTON",
          "COMMAND",
          "FIELDSET",
          "KEYGEN",
          "OPTGROUP",
          "OPTION",
          "SELECT",
          "TEXTAREA",
          "INPUT"
        ], s = n.attributes().disabled !== void 0, r = Xe(n.element) && i.includes(n.element.tagName);
        return s && r;
      }, this.wrapperElement = t;
    }
    return Object.defineProperty(e.prototype, "element", {
      get: function() {
        return this.wrapperElement;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.findAllDOMElements = function(t) {
      var n = this.getRootNodes().filter(Xe);
      if (n.length === 0)
        return [];
      var i = oe([], n.filter(function(s) {
        return s.matches(t);
      }), !0);
      return n.forEach(function(s) {
        i.push.apply(i, Array.from(s.querySelectorAll(t)));
      }), i;
    }, e.prototype.find = function(t) {
      if (typeof t == "object" && "ref" in t) {
        var n = this.getCurrentComponent();
        if (!n)
          return we("DOMWrapper");
        var i = n.refs[t.ref];
        return Array.isArray(i) && (i = i.length ? i[0] : void 0), i instanceof Node ? lt(i) : we("DOMWrapper");
      }
      var s = this.findAll(t);
      return s.length > 0 ? s[0] : we("DOMWrapper");
    }, e.prototype.findComponent = function(t) {
      var n = this.getCurrentComponent();
      if (!n)
        return we("VueWrapper");
      if (typeof t == "object" && "ref" in t) {
        var i = n.refs[t.ref];
        return Array.isArray(i) && (i = i.length ? i[0] : void 0), i && !(i instanceof HTMLElement) ? Rt(null, i) : we("VueWrapper");
      }
      if (xr(n.vnode, t) && this.element.contains(n.vnode.el))
        return Rt(null, n.subTree.component ? n.subTree.component.proxy : n.proxy);
      var s = this.findAllComponents(t)[0];
      return s ?? we("VueWrapper");
    }, e.prototype.findAllComponents = function(t) {
      var n = this.getCurrentComponent();
      if (!n)
        return [];
      var i = au(n.subTree, t);
      return i.map(function(s) {
        return s.proxy ? Rt(null, s.proxy) : lt(s.vnode.el);
      });
    }, e.prototype.html = function(t) {
      var n = this.getRootNodes().map(function(i) {
        return uu(i);
      });
      return t?.raw ? n.join("") : n.map(function(i) {
        return Eu.html(i, {
          unformatted: ["code", "pre", "em", "strong", "span"],
          indent_inner_html: !0,
          indent_size: 2,
          inline_custom_elements: !1
          // TODO the cast can be removed when @types/js-beautify will be up-to-date
        });
      }).join(`
`);
    }, e.prototype.classes = function(t) {
      var n = Xe(this.element) ? Array.from(this.element.classList) : [];
      return t ? n.includes(t) : n;
    }, e.prototype.attributes = function(t) {
      var n = {};
      if (Xe(this.element))
        for (var i = Array.from(this.element.attributes), s = 0, r = i; s < r.length; s++) {
          var a = r[s];
          n[a.localName] = a.value;
        }
      return t ? n[t] : n;
    }, e.prototype.text = function() {
      return this.getRootNodes().map(Bl).join("");
    }, e.prototype.exists = function() {
      return !0;
    }, e.prototype.get = function(t) {
      var n = this.find(t);
      if (n.exists())
        return n;
      throw new Error("Unable to get ".concat(t, " within: ").concat(this.html()));
    }, e.prototype.getComponent = function(t) {
      var n = this.findComponent(t);
      if (n.exists())
        return n;
      var i = "Unable to get ";
      throw typeof t == "string" ? i += "component with selector ".concat(t) : "name" in t ? i += "component with name ".concat(t.name) : "ref" in t ? i += "component with ref ".concat(t.ref) : i += "specified component", i += " within: ".concat(this.html()), new Error(i);
    }, e.prototype.isVisible = function() {
      return Xe(this.element) && kr(this.element);
    }, e.prototype.trigger = function(t, n) {
      return si(this, void 0, void 0, function() {
        var i;
        return ri(this, function(s) {
          if (n && n.target)
            throw Error("[vue-test-utils]: you cannot set the target value of an event. See the notes section of the docs for more details—https://vue-test-utils.vuejs.org/api/wrapper/trigger.html");
          return this.element && !this.isDisabled() && (i = Zl(t, n), i._vts = Date.now() + 1, this.element.dispatchEvent(i)), [2, bn()];
        });
      });
    }, e;
  })()
), wu = (
  /** @class */
  (function(e) {
    mr(t, e);
    function t(n) {
      var i = this;
      return n ? (i = e.call(this, n) || this, pe.plugins.DOMWrapper.extend(i), i) : we("DOMWrapper");
    }
    return t.prototype.getRootNodes = function() {
      return [this.wrapperElement];
    }, t.prototype.getCurrentComponent = function() {
      for (var n, i = this.element.__vueParentComponent; ((n = i?.parent) === null || n === void 0 ? void 0 : n.vnode.el) === this.element; )
        i = i.parent;
      return i;
    }, t.prototype.find = function(n) {
      var i = e.prototype.find.call(this, n);
      return i.exists() && Fl(n) ? this.element.contains(i.element) ? i : we("DOMWrapper") : i;
    }, t.prototype.findAll = function(n) {
      return this.wrapperElement instanceof Element ? Array.from(this.wrapperElement.querySelectorAll(n), lt) : [];
    }, t.prototype.findAllComponents = function(n) {
      var i = this, s = e.prototype.findAllComponents.call(this, n);
      return s.filter(function(r) {
        return i.element.contains(r.element);
      });
    }, t.prototype.setChecked = function() {
      return si(this, arguments, void 0, function(n) {
        var i, s;
        return n === void 0 && (n = !0), ri(this, function(r) {
          if (i = this.element, s = this.attributes().type, s === "radio" && !n)
            throw Error(`wrapper.setChecked() cannot be called with parameter false on a '<input type="radio" /> element.`);
          return n === i.checked ? [
            2
            /*return*/
          ] : (i.checked = n, this.trigger("input"), [2, this.trigger("change")]);
        });
      });
    }, t.prototype.setValue = function(n) {
      var i = this.element, s = i.tagName, r = this.attributes().type;
      if (s === "OPTION")
        return this.setSelected(), Promise.resolve();
      if (s === "INPUT" && r === "checkbox")
        return this.setChecked(n);
      if (s === "INPUT" && r === "radio")
        return this.setChecked(n);
      if (s === "SELECT") {
        if (Array.isArray(n))
          for (var a = i, o = 0; o < a.options.length; o++) {
            var l = a.options[o];
            l.selected = n.includes(l.value);
          }
        else
          i.value = n;
        return this.trigger("input"), this.trigger("change");
      } else {
        if (s === "INPUT" || s === "TEXTAREA")
          return i.value = n, this.trigger("input"), this.trigger("change");
        throw Error("wrapper.setValue() cannot be called on ".concat(s));
      }
    }, t.prototype.setSelected = function() {
      var n = this.element;
      if (!n.selected) {
        n.selected = !0;
        var i = n.parentElement;
        i.tagName === "OPTGROUP" && (i = i.parentElement);
        var s = new t(i);
        return s.trigger("input"), s.trigger("change");
      }
    }, t;
  })(Lr)
);
Ir(ze.DOMWrapper, function(e) {
  return new wu(e);
});
function Dt(e) {
  if (e.shapeFlag & 1)
    return [e.el];
  if (e.shapeFlag & 6) {
    var t = e.component.subTree;
    return Dt(t);
  } else {
    if (e.shapeFlag & 128)
      return Dt(e.suspense.activeBranch);
    if (e.shapeFlag & 72) {
      var n = [e.el];
      if (e.anchor)
        for (var i = n[0].nextSibling; i && i.previousSibling !== e.anchor; )
          n.push(i), i = i.nextSibling;
      return n;
    } else if (e.shapeFlag & 16) {
      var s = e.children.flat();
      return s.flatMap(function(r) {
        return Dt(r);
      }).filter(jl);
    }
  }
  return [];
}
var Ie = {};
function Su(e, t) {
  var n = e.$.uid, i = Ie[n] || {};
  return t ? i ? i[t] : void 0 : i;
}
var Ou = function() {
  var e = ql();
  if (e.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
    var t = e.__VUE_DEVTOOLS_GLOBAL_HOOK__.emit;
    e.__VUE_DEVTOOLS_GLOBAL_HOOK__.emit = function(n) {
      for (var i = [], s = 1; s < arguments.length; s++)
        i[s - 1] = arguments[s];
      t.call.apply(t, oe([e.__VUE_DEVTOOLS_GLOBAL_HOOK__, n], i, !1)), $r(n, i);
    };
  } else
    Xr(Tu(), {});
};
function $r(e, t) {
  if (e === "component:emit") {
    t[0];
    var n = t[1], i = t[2], s = t[3];
    Br(n, i, s);
  }
}
function Tu() {
  return {
    emit: function(e) {
      for (var t = [], n = 1; n < arguments.length; n++)
        t[n - 1] = arguments[n];
      $r(e, t);
    }
  };
}
var Br = function(e, t, n) {
  for (var i = e; typeof i?.type == "function"; )
    i = i.parent;
  var s = i.uid;
  s in Ie || (Ie[s] = {}), t in Ie[s] || (Ie[s][t] = []), Ie[s][t].push(n);
}, Nu = function(e) {
  var t = e.$.uid;
  delete Ie[t];
};
function xu(e, t) {
  return new Proxy(e, {
    get: function(n, i, s) {
      return n.$.exposed && n.$.exposeProxy && i in n.$.exposeProxy ? Reflect.get(n.$.exposeProxy, i, s) : i in t ? Reflect.get(t, i, s) : i in n.$.appContext.config.globalProperties ? Reflect.get(n.$.appContext.config.globalProperties, i, s) : n.$.ctx[i];
    },
    set: function(n, i, s, r) {
      return i in t ? Reflect.set(t, i, s, r) : Reflect.set(n, i, s, r);
    },
    has: function(n, i) {
      return Reflect.has(t, i) || Reflect.has(n, i);
    },
    defineProperty: function(n, i, s) {
      return i in t ? Reflect.defineProperty(t, i, s) : Reflect.defineProperty(n, i, s);
    },
    getOwnPropertyDescriptor: function(n, i) {
      return i in t ? Reflect.getOwnPropertyDescriptor(t, i) : Reflect.getOwnPropertyDescriptor(n, i);
    },
    deleteProperty: function(n, i) {
      return i in t ? Reflect.deleteProperty(t, i) : Reflect.deleteProperty(n, i);
    }
  });
}
var ku = (
  /** @class */
  (function(e) {
    mr(t, e);
    function t(n, i, s) {
      var r = e.call(this, i?.$el) || this;
      return r.cleanUpCallbacks = [], r.__app = n, r.rootVM = i?.$root, Wl(i) ? r.componentVM = xu(i, i.$.setupState) : r.componentVM = i, r.__setProps = s, r.attachNativeEventListener(), pe.plugins.VueWrapper.extend(r), r;
    }
    return Object.defineProperty(t.prototype, "hasMultipleRoots", {
      get: function() {
        var n = function(i) {
          var s;
          if (i.shapeFlag === 16)
            return !0;
          if (i.shapeFlag & 4 || i.shapeFlag & 2) {
            if (!((s = i.component) === null || s === void 0) && s.subTree)
              return n(i.component.subTree);
            if (i.shapeFlag & 16)
              return !0;
          }
          return !1;
        };
        return n(this.vm.$.subTree);
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.getRootNodes = function() {
      return Dt(this.vm.$.vnode);
    }, Object.defineProperty(t.prototype, "parentElement", {
      get: function() {
        return this.vm.$el.parentElement;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.getCurrentComponent = function() {
      return this.vm.$;
    }, t.prototype.exists = function() {
      return !this.getCurrentComponent().isUnmounted;
    }, t.prototype.findAll = function(n) {
      return this.findAllDOMElements(n).map(lt);
    }, t.prototype.attachNativeEventListener = function() {
      var n = this.vm;
      if (n) {
        var i = n.$options.emits ? (
          // if emits is declared as an array
          Array.isArray(n.$options.emits) ? (
            // use it
            n.$options.emits
          ) : (
            // otherwise it's declared as an object
            // and we only need the keys
            Object.keys(n.$options.emits)
          )
        ) : [], s = this.getRootNodes().filter(function(p) {
          return p instanceof Element;
        });
        if (s.length === 1)
          for (var r = s[0], a = function(p) {
            if (i.includes(p))
              return "continue";
            var m = function() {
              for (var E = [], S = 0; S < arguments.length; S++)
                E[S] = arguments[S];
              Br(n.$, p, E);
            };
            r.addEventListener(p, m), o.cleanUpCallbacks.push(function() {
              r.removeEventListener(p, m);
            });
          }, o = this, l = 0, f = Object.keys(Er); l < f.length; l++) {
            var _ = f[l];
            a(_);
          }
      }
    }, Object.defineProperty(t.prototype, "element", {
      get: function() {
        return this.hasMultipleRoots ? this.parentElement : this.vm.$el;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "vm", {
      get: function() {
        return this.componentVM;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.props = function(n) {
      var i = this.componentVM.$props;
      return n ? i[n] : i;
    }, t.prototype.emitted = function(n) {
      return Su(this.vm, n);
    }, t.prototype.isVisible = function() {
      var n = lt(this.element);
      return n.isVisible();
    }, t.prototype.setData = function(n) {
      return br(this.componentVM.$data, n), bn();
    }, t.prototype.setProps = function(n) {
      if (this.vm.$parent !== this.rootVM || !this.__setProps)
        throw Error("You can only use setProps on your mounted component");
      return this.__setProps(n), bn();
    }, t.prototype.setValue = function(n, i) {
      var s = i || "modelValue";
      return this.vm.$emit("update:".concat(s), n), this.vm.$nextTick();
    }, t.prototype.unmount = function() {
      if (!this.__app)
        throw new Error("wrapper.unmount() can only be called by the root wrapper");
      Nu(this.vm), this.cleanUpCallbacks.forEach(function(n) {
        return n();
      }), this.cleanUpCallbacks = [], this.__app.unmount();
    }, t;
  })(Lr)
);
Ir(ze.VueWrapper, function(e, t, n) {
  return new ku(e, t, n);
});
function Iu(e, t) {
  e === void 0 && (e = ""), t === void 0 && (t = Es);
  var n = e.trim(), i = n && n.startsWith("<template");
  i || (n = '<template #default="params">'.concat(n, "</template>"));
  var s = wl("<transition>".concat(n, "</transition>"), {
    mode: "function",
    prefixIdentifiers: !1
  }).code, r = new Function("Vue", s), a = r(t);
  return function(o) {
    o === void 0 && (o = {});
    var l = a(o), f = Object.keys(l.children)[0];
    return l.children[f](o);
  };
}
var Rn = function(e) {
  return e.__isTeleport;
}, Dn = function(e) {
  return e.__isKeepAlive;
}, jr = function(e, t, n) {
  return !!(!n || // Don't stub mounted component on root level
  e.component === t && !n?.parent || // Don't stub component with compat wrapper
  e.functional && e.functional === t);
}, Cu = function(e) {
  var t = e.rootComponents, n = e.transformers, i = /* @__PURE__ */ new WeakMap();
  return function(s, r) {
    var a = s[0], o = s[1], l = s[2], f = s.slice(3);
    if (!ai(a))
      return oe([a, o, l], f, !0);
    var _ = a, p = i.get(a);
    if (p && // Don't use cache for root component, as it could use stubbed recursive component
    !jr(t, _, r) && !Rn(a) && !Dn(a))
      return oe([p, o, l], f, !0);
    var m = n.reduce(function(E, S) {
      return S(E, r);
    }, _);
    return a !== m && (i.set(a, m), ot({ source: a, stub: m }), Rn(a) || Dn(a)) ? oe([m, o, function() {
      return l;
    }], f, !0) : oe([m, o, l], f, !0);
  };
}, Au = function(e) {
  var t = e;
  return Object.keys(t).reduce(function(n, i) {
    var s, r, a, o;
    return typeof t[i] == "symbol" ? R(R({}, n), (s = {}, s[i] = [(o = t[i]) === null || o === void 0 ? void 0 : o.toString()], s)) : typeof t[i] == "function" ? R(R({}, n), (r = {}, r[i] = ["[Function]"], r)) : R(R({}, n), (a = {}, a[i] = t[i], a));
  }, {});
}, Ru = function(e) {
  return e.replace(/-/, "").toUpperCase();
}, Du = function(e) {
  return e.replace(/(^\w|-\w)/g, Ru);
}, gs = {
  teleport: Rn,
  "keep-alive": Dn,
  transition: function(e) {
    return e === Jr || e === Zr;
  },
  "transition-group": function(e) {
    return e === Yr;
  }
}, Pu = function(e, t, n, i) {
  var s = Du(e);
  if (t(n) && (s in i || e in i)) {
    if (e in i && i[e] === !1 || s in i && i[s] === !1)
      return n;
    if (i[e] === !0 || i[s] === !0)
      return Fr({
        name: e,
        type: n,
        renderStubDefaultSlot: !0
      });
  }
}, Fr = function(e) {
  var t = e.name, n = e.type, i = e.renderStubDefaultSlot, s = "anonymous-stub", r = t ? "".concat(nu(t), "-stub") : s, a = n ? pt(n) || {} : {}, o = Pt({
    name: t || s,
    props: a.props || {},
    // fix #1550 - respect old-style v-model for shallow mounted components with @vue/compat
    // @ts-expect-error
    model: a.model,
    setup: function(f, _) {
      var p = _.slots;
      return function() {
        var m = Au(f);
        return i && p.default ? je(r, m, p.default({})) : je(r, m);
      };
    }
  }), l = n.__asyncLoader;
  return l && l().then(function() {
    ot({
      source: n.__asyncResolved,
      stub: o
    });
  }), o;
}, ys = function(e, t) {
  for (var n = 0, i = Object.entries(t); n < i.length; n++) {
    var s = i[n], r = s[0], a = s[1];
    if (An(e, r))
      return a;
  }
};
function Mu(e) {
  var t = e.rootComponents, n = e.stubs, i = n === void 0 ? {} : n, s = e.shallow, r = s === void 0 ? !1 : s, a = e.renderStubDefaultSlot, o = a === void 0 ? !1 : a;
  return function(f, _) {
    var p, m, E;
    for (var S in gs) {
      var T = gs[S], h = Pu(S, T, f, i);
      if (h)
        return h;
    }
    if (jr(t, f, _))
      return f;
    var c = Tr(_, f), b = Nr(_, f), k = null, N = null;
    if (c && (k = ys(c, i), k && (N = c)), !k && b && (k = ys(b, i), k && (N = b)), ai(k)) {
      var I = pt(k), y = oi(I) ? I : null;
      ot({ source: f, stub: k });
      var O = y ? function() {
        for (var w = [], u = 0; u < arguments.length; u++)
          w[u] = arguments[u];
        return y.apply(void 0, w);
      } : R({}, I);
      return O.props = I.props, O;
    }
    if (k === !1)
      return f;
    if (k === !0 || r) {
      var d = N || c || b;
      return (E = (m = (p = pe.plugins).createStubs) === null || m === void 0 ? void 0 : m.call(p, {
        name: d,
        component: f,
        registerStub: ot
      })) !== null && E !== void 0 ? E : Fr({
        name: d,
        type: f,
        renderStubDefaultSlot: o
      });
    }
    return f;
  };
}
var Vu = function() {
};
function Lu(e) {
  var t = e.directives, n = t === void 0 ? {} : t;
  return Object.keys(n).length === 0 ? function(i) {
    return i;
  } : function(s) {
    if (et(s) && s.directives) {
      var r = Object.keys(s.directives).filter(function(o) {
        return o in n;
      });
      if (!r.length)
        return s;
      var a = Object.fromEntries(r.map(function(o) {
        var l = n[o];
        return [o, typeof l == "boolean" ? Vu : l];
      }));
      return R(R({}, s), { directives: R(R({}, s.directives), a) });
    }
    return s;
  };
}
var Ur = function(e, t) {
  return Qr(e) ? !0 : !Be(e) || t.has(e) ? !1 : (t.set(e, !0), Object.values(e).some(function(n) {
    return Ur(n, t);
  }));
}, $u = function(e) {
  var t = /* @__PURE__ */ new WeakMap();
  return Ur(e, t);
}, Bu = [
  "attachTo",
  "attrs",
  "data",
  "props",
  "slots",
  "global",
  "shallow"
];
function ju(e) {
  e.methods && (console.warn("Passing a `methods` option to mount was deprecated on Vue Test Utils v1, and it won't have any effect on v2. For additional info: https://vue-test-utils.vuejs.org/upgrading-to-v1/#setmethods-and-mountingoptions-methods"), delete e.methods);
  for (var t = R({}, e), n = 0, i = Object.keys(e); n < i.length; n++) {
    var s = i[n];
    Bu.includes(s) && delete t[s];
  }
  return t;
}
function Fu(e, t) {
  var n = pt(e), i, s = ju(t ?? {}), r = {};
  oi(n) || Gi(n) ? (i = Pt(R({ compatConfig: {
    MODE: 3,
    INSTANCE_LISTENERS: !1,
    INSTANCE_ATTRS_CLASS_STYLE: !1,
    COMPONENT_FUNCTIONAL: Gi(n) ? "suppress-warning" : !1
  }, props: n.props || {}, setup: function(B, le) {
    var ue = le.attrs, me = le.slots;
    return function() {
      return je(n, R(R({}, B), ue), me);
    };
  } }, s)), r.functional = n) : et(n) ? i = R(R({}, n), s) : i = n, r.component = i, ot({ source: n, stub: i });
  function a(B) {
    switch (typeof B) {
      case "function":
        return B;
      case "object":
        return function() {
          return je(B);
        };
      case "string":
        return Iu(B);
      default:
        throw Error("Invalid slot received.");
    }
  }
  var o = t?.slots && Object.entries(t.slots).reduce(function(B, le) {
    var ue = le[0], me = le[1];
    if (Array.isArray(me)) {
      var He = me.map(a);
      return B[ue] = function(Ge) {
        return He.map(function(_t) {
          return _t(Ge);
        });
      }, B;
    }
    return B[ue] = a(me), B;
  }, {});
  if (t?.data) {
    var l = t.data();
    if (et(n)) {
      var f = i, _ = n.data || (function() {
        return {};
      });
      f.data = function(B) {
        return R(R({}, _.call(B, B)), l);
      };
    } else
      throw new Error("data() option is not supported on functional and class components");
  }
  var p = "VTU_COMPONENT", m = Kr({}), E = qr({});
  Object.entries(R(R(R(R({}, t?.attrs), t?.propsData), t?.props), { ref: p })).forEach(function(B) {
    var le = B[0], ue = B[1];
    $u(ue) ? m[le] = ue : E[le] = ue;
  });
  var S = Vl(t?.global);
  et(i) && (i.components = R(R({}, i.components), S.components));
  var T = zr(null), h = Pt({
    name: "VTU_ROOT",
    setup: function() {
      var B;
      return B = {}, B[p] = T, B;
    },
    render: function() {
      return je(i, R(R({}, E), m), o);
    }
  }), c = Hr(h);
  if (Ou(), S?.mocks) {
    var b = {
      beforeCreate: function() {
        if (Kl(this)) {
          for (var B = 0, le = Object.entries(S.mocks); B < le.length; B++) {
            var ue = le[B], me = ue[0], He = ue[1];
            try {
              this.$.setupState[me] = He;
            } catch {
            }
          }
          this.$.proxy = new Proxy(this.$.proxy, {
            get: function(di, Qt) {
              return Qt in S.mocks ? S.mocks[Qt] : di[Qt];
            }
          });
        } else
          for (var Ge = 0, _t = Object.entries(S.mocks); Ge < _t.length; Ge++) {
            var hi = _t[Ge], me = hi[0], He = hi[1];
            this[me] = He;
          }
      }
    };
    c.mixin(b);
  }
  if (S.config)
    for (var k = 0, N = Object.entries(S.config); k < N.length; k++) {
      var I = N[k], y = I[0], O = I[1];
      c.config[y] = Be(c.config[y]) ? Object.assign(c.config[y], O) : O;
    }
  if (S.provide)
    for (var d = 0, w = Reflect.ownKeys(S.provide); d < w.length; d++) {
      var u = w[d];
      c.provide(u, S.provide[u]);
    }
  if (S.plugins)
    for (var g = 0, v = S.plugins; g < v.length; g++) {
      var x = v[g];
      if (Array.isArray(x)) {
        c.use.apply(c, oe([x[0]], x.slice(1), !1));
        continue;
      }
      c.use(x);
    }
  if (S.mixins)
    for (var C = 0, A = S.mixins; C < A.length; C++) {
      var b = A[C];
      c.mixin(b);
    }
  if (S.components)
    for (var V = 0, W = Object.keys(S.components); V < W.length; V++) {
      var u = W[V];
      u in S.stubs || c.component(u, S.components[u]);
    }
  if (S.directives)
    for (var ee = 0, he = Object.keys(S.directives); ee < he.length; ee++) {
      var u = he[ee];
      c.directive(u, S.directives[u]);
    }
  if (Gr(Cu({
    rootComponents: r,
    transformers: [
      Mu({
        rootComponents: r,
        stubs: Wi(S.stubs),
        shallow: t?.shallow,
        renderStubDefaultSlot: S.renderStubDefaultSlot
      }),
      Lu({
        directives: Ul(S.stubs)
      })
    ]
  })), S?.stubs)
    for (var te = 0, re = Object.keys(Wi(S.stubs)); te < re.length; te++) {
      var de = re[te];
      c.component(de) || c.component(de, { name: de });
    }
  return {
    app: c,
    props: E,
    componentRef: T
  };
}
function ec(e, t) {
  var n = Fu(e, t), i = n.app, s = n.props, r = n.componentRef, a = function(S) {
    for (var T = 0, h = Object.entries(S); T < h.length; T++) {
      var c = h[T], b = c[0], k = c[1];
      s[b] = k;
    }
    return p.$nextTick();
  }, o = i.config.errorHandler, l = [];
  i.config.errorHandler = function(S, T, h) {
    return l.push(S), o?.(S, T, h);
  };
  var f = document.createElement("div");
  if (t?.attachTo) {
    var _ = void 0;
    if (typeof t.attachTo == "string") {
      if (_ = document.querySelector(t.attachTo), !_)
        throw new Error("Unable to find the element matching the selector ".concat(t.attachTo, " given as the `attachTo` option"));
    } else
      _ = t.attachTo;
    _.appendChild(f);
  }
  var p = i.mount(f);
  if (l.length)
    throw l[0];
  i.config.errorHandler = o;
  var m = r.value;
  i.hasOwnProperty || (m.hasOwnProperty = function(S) {
    return Reflect.has(m, S);
  });
  var E = Rt(i, m, a);
  return E;
}
var Uu = {
  path: "/",
  name: void 0,
  redirectedFrom: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  href: "/"
};
Pt({
  name: "RouterLinkStub",
  compatConfig: { MODE: 3 },
  props: {
    to: {
      type: [String, Object],
      required: !0
    },
    custom: {
      type: Boolean,
      default: !1
    }
  },
  render: function() {
    var e = this, t, n, i = ht(function() {
      return Uu;
    }), s = (n = (t = this.$slots) === null || t === void 0 ? void 0 : t.default) === null || n === void 0 ? void 0 : n.call(t, {
      route: i,
      href: ht(function() {
        return i.value.href;
      }),
      isActive: ht(function() {
        return !1;
      }),
      isExactActive: ht(function() {
        return !1;
      }),
      navigate: function() {
        return si(e, void 0, void 0, function() {
          return ri(this, function(r) {
            return [
              2
              /*return*/
            ];
          });
        });
      }
    });
    return this.custom ? s : je("a", void 0, s);
  }
});
export {
  ec as m
};
