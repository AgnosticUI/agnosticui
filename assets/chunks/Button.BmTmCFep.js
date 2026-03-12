import{a as D,i as J,z as c,x as Q}from"./property-CemaeiRl.Cea_q1B7.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const x=globalThis,N=x.trustedTypes,O=N?N.createPolicy("lit-html",{createHTML:s=>s}):void 0,q="$lit$",f=`lit$${Math.random().toFixed(9).slice(2)}$`,G="?"+f,X=`<${G}>`,A=document,T=()=>A.createComment(""),w=s=>s===null||typeof s!="object"&&typeof s!="function",L=Array.isArray,Y=s=>L(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",C=`[ 	
\f\r]`,k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,P=/>/g,y=RegExp(`>|${C}(?:([^\\s"'>=/]+)(${C}*=${C}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),W=/'/g,j=/"/g,V=/^(?:script|style|textarea|title)$/i,H=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),U=new WeakMap,$=A.createTreeWalker(A,129);function Z(s,t){if(!L(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return O!==void 0?O.createHTML(t):t}const K=(s,t)=>{const e=s.length-1,o=[];let r,n=t===2?"<svg>":t===3?"<math>":"",a=k;for(let p=0;p<e;p++){const i=s[p];let g,v,h=-1,b=0;for(;b<i.length&&(a.lastIndex=b,v=a.exec(i),v!==null);)b=a.lastIndex,a===k?v[1]==="!--"?a=R:v[1]!==void 0?a=P:v[2]!==void 0?(V.test(v[2])&&(r=RegExp("</"+v[2],"g")),a=y):v[3]!==void 0&&(a=y):a===y?v[0]===">"?(a=r??k,h=-1):v[1]===void 0?h=-2:(h=a.lastIndex-v[2].length,g=v[1],a=v[3]===void 0?y:v[3]==='"'?j:W):a===j||a===W?a=y:a===R||a===P?a=k:(a=y,r=void 0);const m=a===y&&s[p+1].startsWith("/>")?" ":"";n+=a===k?i+X:h>=0?(o.push(g),i.slice(0,h)+q+i.slice(h)+f+m):i+f+(h===-2?p:m)}return[Z(s,n+(s[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),o]};class S{constructor({strings:t,_$litType$:e},o){let r;this.parts=[];let n=0,a=0;const p=t.length-1,i=this.parts,[g,v]=K(t,e);if(this.el=S.createElement(g,o),$.currentNode=this.el.content,e===2||e===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(r=$.nextNode())!==null&&i.length<p;){if(r.nodeType===1){if(r.hasAttributes())for(const h of r.getAttributeNames())if(h.endsWith(q)){const b=v[a++],m=r.getAttribute(h).split(f),B=/([.?@])?(.*)/.exec(b);i.push({type:1,index:n,name:B[2],strings:m,ctor:B[1]==="."?et:B[1]==="?"?rt:B[1]==="@"?ot:E}),r.removeAttribute(h)}else h.startsWith(f)&&(i.push({type:6,index:n}),r.removeAttribute(h));if(V.test(r.tagName)){const h=r.textContent.split(f),b=h.length-1;if(b>0){r.textContent=N?N.emptyScript:"";for(let m=0;m<b;m++)r.append(h[m],T()),$.nextNode(),i.push({type:2,index:++n});r.append(h[b],T())}}}else if(r.nodeType===8)if(r.data===G)i.push({type:2,index:n});else{let h=-1;for(;(h=r.data.indexOf(f,h+1))!==-1;)i.push({type:7,index:n}),h+=f.length-1}n++}}static createElement(t,e){const o=A.createElement("template");return o.innerHTML=t,o}}function _(s,t,e=s,o){var a,p;if(t===H)return t;let r=o!==void 0?(a=e._$Co)==null?void 0:a[o]:e._$Cl;const n=w(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==n&&((p=r==null?void 0:r._$AO)==null||p.call(r,!1),n===void 0?r=void 0:(r=new n(s),r._$AT(s,e,o)),o!==void 0?(e._$Co??(e._$Co=[]))[o]=r:e._$Cl=r),r!==void 0&&(t=_(s,r._$AS(s,t.values),r,o)),t}class tt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:o}=this._$AD,r=((t==null?void 0:t.creationScope)??A).importNode(e,!0);$.currentNode=r;let n=$.nextNode(),a=0,p=0,i=o[0];for(;i!==void 0;){if(a===i.index){let g;i.type===2?g=new z(n,n.nextSibling,this,t):i.type===1?g=new i.ctor(n,i.name,i.strings,this,t):i.type===6&&(g=new at(n,this,t)),this._$AV.push(g),i=o[++p]}a!==(i==null?void 0:i.index)&&(n=$.nextNode(),a++)}return $.currentNode=A,r}p(t){let e=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class z{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,o,r){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=_(this,t,e),w(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==H&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Y(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&w(this._$AH)?this._$AA.nextSibling.data=t:this.T(A.createTextNode(t)),this._$AH=t}$(t){var n;const{values:e,_$litType$:o}=t,r=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=S.createElement(Z(o.h,o.h[0]),this.options)),o);if(((n=this._$AH)==null?void 0:n._$AD)===r)this._$AH.p(e);else{const a=new tt(r,this),p=a.u(this.options);a.p(e),this.T(p),this._$AH=a}}_$AC(t){let e=U.get(t.strings);return e===void 0&&U.set(t.strings,e=new S(t)),e}k(t){L(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,r=0;for(const n of t)r===e.length?e.push(o=new z(this.O(T()),this.O(T()),this,this.options)):o=e[r],o._$AI(n),r++;r<e.length&&(this._$AR(o&&o._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,e);t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class E{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,o,r,n){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=n,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=d}_$AI(t,e=this,o,r){const n=this.strings;let a=!1;if(n===void 0)t=_(this,t,e,0),a=!w(t)||t!==this._$AH&&t!==H,a&&(this._$AH=t);else{const p=t;let i,g;for(t=n[0],i=0;i<n.length-1;i++)g=_(this,p[o+i],e,i),g===H&&(g=this._$AH[i]),a||(a=!w(g)||g!==this._$AH[i]),g===d?t=d:t!==d&&(t+=(g??"")+n[i+1]),this._$AH[i]=g}a&&!r&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends E{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class rt extends E{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class ot extends E{constructor(t,e,o,r,n){super(t,e,o,r,n),this.type=5}_$AI(t,e=this){if((t=_(this,t,e,0)??d)===H)return;const o=this._$AH,r=t===d&&o!==d||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,n=t!==d&&(o===d||r);r&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class at{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){_(this,t)}}const M=x.litHtmlPolyfillSupport;M==null||M(S,z),(x.litHtmlVersions??(x.litHtmlVersions=[])).push("3.3.1");/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I=s=>s??d;var nt=Object.defineProperty,u=(s,t,e,o)=>{for(var r=void 0,n=s.length-1,a;n>=0;n--)(a=s[n])&&(r=a(t,e,r)||r);return r&&nt(t,e,r),r};const F=class extends D{constructor(){super(),this.disabled=!1,this.loading=!1,this.toggle=!1,this.pressed=!1,this.bordered=!1,this.ghost=!1,this.link=!1,this.grouped=!1,this.fullWidth=!1,this.type="button",this.ariaLabel="",this.variant="",this.size="md",this.shape=""}_handleClick(t){if(this.onClick&&this.onClick(t),!this.disabled&&!this.loading&&!t.defaultPrevented){if(this.type==="submit"){const e=this.closest("form");e&&e.requestSubmit()}else if(this.type==="reset"){const e=this.closest("form");e&&e.reset()}}if(this.toggle&&!this.disabled&&!this.loading&&!t.defaultPrevented){this.pressed=!this.pressed;const e=new CustomEvent("toggle",{detail:{pressed:this.pressed},bubbles:!0,composed:!0});this.dispatchEvent(e),this.onToggle&&this.onToggle(e)}}_handleFocus(t){this.onFocus&&this.onFocus(t);const e=new FocusEvent("focus",{bubbles:!0,composed:!0});this.dispatchEvent(e)}_handleBlur(t){this.onBlur&&this.onBlur(t);const e=new FocusEvent("blur",{bubbles:!0,composed:!0});this.dispatchEvent(e)}render(){const t=this.disabled||this.loading;return Q`
      <button
        type=${this.type}
        part="ag-button"
        ?disabled=${t}
        aria-disabled=${t?"true":"false"}
        aria-busy=${I(this.loading?"true":void 0)}
        aria-pressed=${I(this.toggle?String(this.pressed):void 0)}
        aria-label=${I(this.ariaLabel||void 0)}
        @click=${this._handleClick}
        @focus=${this._handleFocus}
        @blur=${this._handleBlur}
      >
        <slot></slot>
      </button>
    `}};F.shadowRootOptions={...D.shadowRootOptions,delegatesFocus:!0},F.styles=J`
    /* MINIMALIST & THEMEABLE - Styling via --ag-* design tokens */
    :host {
      /* Inline-flex for perfect centering while maintaining inline behavior */
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    /* Full-width variant */
    :host([full-width]) {
      display: block;
      width: 100%;
    }

    :host([full-width]) button {
      width: 100%;
    }

    button {
      /* Reset browser defaults */
      margin: 0;
      border: 1px solid transparent;
      background: var(--ag-background-tertiary);

      /* Inherit font styling from parent */
      font: inherit;
      color: inherit;

      /* Explicit line-height to prevent extra vertical spacing */
      line-height: 1;

      /* Basic interaction styling */
      cursor: pointer;

      /* Flex layout for perfect content alignment */
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--ag-space-1); /* Small gap for icon + text scenarios */

      /* Smooth transitions */
      transition-property: all;
      transition-duration: var(--ag-motion-medium);
    }
    
    /* Secondary inherits font color */
    :host([variant="secondary"]) button {
      background: var(--ag-neutral-400);
      /* We lock the text color at neutral-900 for both light/dark modes */
      color: var(--ag-neutral-900);
    }
    :host([variant="secondary"]) button:hover {
      background: var(--ag-neutral-500);
    }

    /* Primary, success, warning, and danger use variant-specific foreground
      tokens (--ag-{variant}-fg) and get darker on hover */
    :host([variant="primary"]) button {
      background: var(--ag-primary);
      color: var(--ag-primary-fg);
    }
    :host([variant="primary"]) button:hover {
      background: var(--ag-primary-dark);
    }
    :host([variant="success"]) button {
      background: var(--ag-success);
      color: var(--ag-success-fg);
    }
    :host([variant="success"]) button:hover {
      background: var(--ag-success-dark);
    }
    :host([variant="warning"]) button {
      background: var(--ag-warning);
      color: var(--ag-warning-fg);
    }
    :host([variant="warning"]) button:hover {
      background: var(--ag-warning-dark);
    }
    :host([variant="danger"]) button {
      background: var(--ag-danger);
      color: var(--ag-danger-fg);
    }
    :host([variant="danger"]) button:hover {
      background: var(--ag-danger-dark);
    }

    /* Monochrome variant - adapts to light/dark themes */
    :host([variant="monochrome"]) button {
      background: var(--ag-background-primary-inverted);
      color: var(--ag-text-primary-inverted);
    }
    :host([variant="monochrome"]) button:hover {
      background: var(--ag-background-secondary-inverted);
    }

    /* Size variants */
    :host([size="x-sm"]) button {
      height: var(--ag-space-8);
      min-height: var(--ag-space-8);
      font-size: calc(var(--ag-font-size-base) - 0.375rem);
      padding-inline: var(--ag-space-2);
      padding-block: 0;
    }

    :host([size="sm"]) button {
      height: var(--ag-space-9);
      min-height: var(--ag-space-9);
      font-size: var(--ag-font-size-xs);
      padding-inline: var(--ag-space-3);
      padding-block: 0;
    }

    /* Default size (md) - applies when no size attribute or size="md" */
    button,
    :host([size="md"]) button {
      height: var(--ag-space-10);
      min-height: var(--ag-space-10);
      font-size: var(--ag-font-size-sm);
      padding-inline: var(--ag-space-4);
      padding-block: 0;
    }

    :host([size="lg"]) button {
      height: var(--ag-space-12);
      min-height: var(--ag-space-12);
      font-size: var(--ag-font-size-base);
      padding-inline: var(--ag-space-5);
      padding-block: 0;
    }

    :host([size="xl"]) button {
      height: var(--ag-space-14);
      min-height: var(--ag-space-14);
      font-size: var(--ag-font-size-md);
      padding-inline: var(--ag-space-6);
      padding-block: 0;
    }

    /* Shape variants */
    :host([shape="capsule"]) button {
      border-radius: var(--ag-radius-full);
      padding-inline-start: var(--ag-space-5);
      padding-inline-end: var(--ag-space-5);
    }

    :host([shape="rounded"]) button {
      border-radius: var(--ag-radius-md);
    }

    /* Circle and Square shapes are only intended for single character or icon */
    :host([shape="circle"]) button {
      border-radius: 50%;
      width: var(--ag-space-10);
      height: var(--ag-space-10);
      padding: 0;
      min-height: unset;
    }

    :host([shape="square"]) button {
      border-radius: 0;
      width: var(--ag-space-10);
      height: var(--ag-space-10);
      padding: 0;
      min-height: unset;
    }

    :host([shape="rounded-square"]) button {
      border-radius: var(--ag-radius-md);
      width: var(--ag-space-10);
      height: var(--ag-space-10);
      padding: 0;
      min-height: unset;
    }

    /* Ghost and Link - minimal/invisible button styles */
    :host([ghost]) button,
    :host([link]) button {
      background: transparent;
      border-color: transparent;
      box-shadow: none;
    }

    /* Ghost-specific - minimal padding, respects variant colors */
    :host([ghost]) button {
      padding-inline-start: var(--ag-space-2);
      padding-inline-end: var(--ag-space-2);
    }

    :host([ghost][variant="primary"]) button {
      color: var(--ag-primary);
    }

    :host([ghost][variant="success"]) button {
      color: var(--ag-success);
    }

    :host([ghost][variant="warning"]) button {
      color: var(--ag-warning);
    }

    :host([ghost][variant="danger"]) button {
      color: var(--ag-danger);
    }


    :host([link][variant="danger"]) button:hover,
    :host([link][variant="warning"]) button:hover,
    :host([link][variant="success"]) button:hover,
    :host([link][variant="primary"]) button:hover {
      background: transparent;
    }

    /* Only for ghosted buttons with text that of:
          - "red" danger
          - "yellow" warning
          - "green" success
          - "blue" primary
      do we use an almost white nuetral 100 on hover.
      The default and secondary are not changed here!
    */
    :host([ghost][variant="danger"]) button:hover,
    :host([ghost][variant="warning"]) button:hover,
    :host([ghost][variant="success"]) button:hover,
    :host([ghost][variant="primary"]) button:hover {
      background: var(--ag-neutral-100);
    }

    /* Link-specific - inline style with smooth underline transition */
    :host([link]) button {
      color: var(--ag-primary-text);
      text-decoration: none;
      border-bottom: 1px solid transparent;
      padding: 0;
      min-height: unset;
    }

    :host([link]) button:hover {
      border-bottom-color: var(--ag-primary);
    }

    /* Grouped buttons - for use in button groups */
    :host([grouped]) button {
      border-radius: var(--ag-radius-md);
    }

    :host([grouped]:not(:last-child)) button {
      border-start-end-radius: 0;
      border-end-end-radius: 0;
      margin-inline-end: -1px;
    }

    :host([grouped]:not(:first-child)) button {
      border-start-start-radius: 0;
      border-end-start-radius: 0;
    }

    /* Bordered variant - outline style */
    :host([bordered]) button {
      background: transparent;
      border-color: var(--ag-neutral-500);
    }

    :host([bordered][variant="primary"]) button {
      color: var(--ag-primary-text);
      border-color: var(--ag-primary-text);
    }

    /* Bordered Buttons on Hover have a filled background with variant-specific
      foreground text.  The Default Bordered is an exception to this rule. */
    :host([bordered][variant="primary"]) button:hover {
      background: var(--ag-primary);
      color: var(--ag-primary-fg);
    }

    :host([bordered][variant="secondary"]) button,
    :host([bordered][variant="secondary"]) button:hover {
      color: var(--ag-text-secondary);
      border-color: var(--ag-text-secondary);
    }

    :host([bordered][variant="success"]) button {
      color: var(--ag-success-text);
      border-color: var(--ag-success-text);
    }

    :host([bordered][variant="success"]) button:hover {
      color: var(--ag-success-fg);
      background: var(--ag-success);
    }

    :host([bordered][variant="warning"]) button {
      color: var(--ag-warning-text);
      border-color: var(--ag-warning-text);
    }

    :host([bordered][variant="warning"]) button:hover {
      background: var(--ag-warning);
      color: var(--ag-warning-fg);
    }

    :host([bordered][variant="danger"]) button {
      color: var(--ag-danger-text);
      border-color: var(--ag-danger-text);
    }

    :host([bordered][variant="danger"]) button:hover {
      background: var(--ag-danger);
      color: var(--ag-danger-fg);
    }

    :host([bordered][variant="monochrome"]) button {
      color: var(--ag-text-primary);
      border-color: var(--ag-text-primary);
    }

    :host([bordered][variant="monochrome"]) button:hover {
      background: var(--ag-background-primary-inverted);
      color: var(--ag-text-primary-inverted);
    }

    :host([ghost][variant="monochrome"]) button {
      color: var(--ag-text-primary);
    }

    :host([ghost][variant="monochrome"]) button:hover {
      background: var(--ag-background-secondary);
    }

    /* Disabled states - per-variant to maintain tonal identity */

    /* Filled buttons - use lighter background tokens */
    :host([variant="primary"]) button:disabled {
      background: var(--ag-primary-background);
      color: var(--ag-primary-text);
    }

    :host([variant="success"]) button:disabled {
      background: var(--ag-success-background);
      color: var(--ag-success-text);
    }

    :host([variant="warning"]) button:disabled {
      background: var(--ag-warning-background);
      color: var(--ag-warning-text);
    }

    :host([variant="danger"]) button:disabled {
      background: var(--ag-danger-background);
      color: var(--ag-danger-text);
    }

    :host([variant="secondary"]) button:disabled,
    button:disabled {
      background: var(--ag-background-disabled);
    }

    :host([variant="monochrome"]) button:disabled {
      background: var(--ag-background-tertiary);
    }

    /* Bordered buttons - dim the border and text with opacity */
    :host([bordered]) button:disabled {
      opacity: 60%;
      background: transparent;
    }

    /* Ghost and link buttons - dim with opacity */
    :host([ghost]) button:disabled,
    :host([link]) button:disabled {
      opacity: 60%;
      background: transparent;
    }

    /* All disabled buttons get not-allowed cursor */
    button:disabled {
      cursor: not-allowed;
    }

    button:focus-visible,
    button:focus:not(:hover) {
      /* Softer focus ring using alpha channel */
      outline: var(--ag-focus-width) solid rgba(var(--ag-focus), 0.5);
      outline-offset: var(--ag-focus-offset);
      transition: outline var(--ag-motion-medium) ease;
    }
  `;let l=F;u([c({type:String,reflect:!0})],l.prototype,"variant");u([c({type:String,reflect:!0})],l.prototype,"size");u([c({type:String,reflect:!0})],l.prototype,"shape");u([c({type:Boolean,reflect:!0})],l.prototype,"bordered");u([c({type:Boolean,reflect:!0})],l.prototype,"ghost");u([c({type:Boolean,reflect:!0})],l.prototype,"link");u([c({type:Boolean,reflect:!0})],l.prototype,"grouped");u([c({type:Boolean,reflect:!0,attribute:"full-width"})],l.prototype,"fullWidth");u([c({type:String})],l.prototype,"type");u([c({type:Boolean})],l.prototype,"disabled");u([c({type:Boolean})],l.prototype,"loading");u([c({type:Boolean})],l.prototype,"toggle");u([c({type:Boolean})],l.prototype,"pressed");u([c({type:String,reflect:!0,attribute:"aria-label"})],l.prototype,"ariaLabel");u([c({attribute:!1})],l.prototype,"onClick");u([c({attribute:!1})],l.prototype,"onFocus");u([c({attribute:!1})],l.prototype,"onBlur");u([c({attribute:!1})],l.prototype,"onToggle");customElements.get("ag-button")||customElements.define("ag-button",l);export{I as Q,l as t};
