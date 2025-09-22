import{i as O,a as P,x as u}from"./lit-element.DPA3KJ4y.js";function K(n="id"){return`${n}-${Math.random().toString(36).substring(2,11)}`}let nt=class extends O{static styles=[P`
    :host {
      display: block;
    }
    /* Progressive enhancement: Hide only after web component is defined */
    :host(:not(:defined)) {
      visibility: visible; /* Content visible without JS */
    }
    :host(:defined) {
      visibility: visible; /* Explicit visibility once defined */
    }
  `];render(){return u`
      <slot></slot>
    `}},q=class extends O{static properties={open:{type:Boolean,reflect:!0},headingLevel:{type:Number,attribute:"heading-level"},disabled:{type:Boolean,reflect:!0}};_id=K("accordion-item");constructor(){super(),this.open=!1,this.headingLevel=3,this.disabled=!1,this.addEventListener("keydown",this._handleKeydown.bind(this))}connectedCallback(){super.connectedCallback(),this.setAttribute("data-enhanced","")}static styles=[P`
    :host {
      display: block;
    }
    .header {
      cursor: pointer;
    }
    :host([disabled]) .header {
      cursor: not-allowed;
      opacity: 0.6;
    }
    .heading {
      margin: 0;
      padding: 0;
    }
    .header button {
      background: none;
      border: none;
      padding: 0;
      font: inherit;
      cursor: pointer;
      width: 100%;
      text-align: left;
    }
    .header button:focus-visible {
      /* High-contrast focus ring using CSS custom property */
      outline: 2px solid var(--agnostic-focus, #2563eb);
      outline-offset: 2px;
      transition: outline 0.2s ease;
    }
    :host([disabled]) .header button {
      cursor: not-allowed;
      pointer-events: none;
    }
    /* Progressive enhancement: Content visible until JS enhanced */
    .content {
      display: block;
    }
    /* After JS enhancement, respect open/closed state */
    :host([data-enhanced]) .content {
      display: none;
    }
    :host([data-enhanced][open]) .content {
      display: block;
    }
    /* Ensure hidden attribute works in all environments */
    .content[hidden] {
      display: none !important;
    }
  `];render(){return u`
      <div class="header" part="accordion-header-wrapper" @click="${this.toggle}">
        ${this._renderHeading()}
      </div>
      <div
        class="content"
        part="accordion-content"
        role="region"
        aria-labelledby="${this._id}-button"
        id="${this._id}-panel"
        ?hidden="${this.hasAttribute("data-enhanced")&&!this.open}"
      >
        <slot name="content"></slot>
      </div>
    `}_renderHeading(){const n=u`
      <button
        part="accordion-header"
        aria-expanded="${this.open}"
        aria-controls="${this._id}-panel"
        id="${this._id}-button"
        ?disabled="${this.disabled}"
        aria-disabled="${this.disabled}"
        @keydown="${this._handleKeydown}"
      >
        <slot name="header"></slot>
      </button>
    `;switch(Math.max(1,Math.min(6,this.headingLevel||3))){case 1:return u`<h1 class="heading" part="accordion-heading">${n}</h1>`;case 2:return u`<h2 class="heading" part="accordion-heading">${n}</h2>`;case 3:return u`<h3 class="heading" part="accordion-heading">${n}</h3>`;case 4:return u`<h4 class="heading" part="accordion-heading">${n}</h4>`;case 5:return u`<h5 class="heading" part="accordion-heading">${n}</h5>`;case 6:return u`<h6 class="heading" part="accordion-heading">${n}</h6>`}}toggle(){this.disabled||(this.open=!this.open,this.dispatchEvent(new CustomEvent("toggle",{detail:{open:this.open},bubbles:!0})))}focus(){this.shadowRoot?.querySelector("button")?.focus()}get buttonElement(){return this.shadowRoot?.querySelector("button")||null}_handleKeydown(n){if(this.disabled)return;const{key:t}=n;(t==="Enter"||t===" ")&&n.target===this.buttonElement&&(n.preventDefault(),this.toggle()),(t==="ArrowDown"||t==="ArrowUp"||t==="Home"||t==="End")&&(n.preventDefault(),this.dispatchEvent(new CustomEvent("accordion-keydown",{detail:{key:t,accordionItem:this},bubbles:!0})))}};customElements.define("ag-accordion-item",q);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=globalThis,N=M.trustedTypes,I=N?N.createPolicy("lit-html",{createHTML:n=>n}):void 0,W="$lit$",A=`lit$${Math.random().toFixed(9).slice(2)}$`,j="?"+A,z=`<${j}>`,m=document,E=()=>m.createComment(""),y=n=>n===null||typeof n!="object"&&typeof n!="function",k=Array.isArray,Z=n=>k(n)||typeof n?.[Symbol.iterator]=="function",T=`[ 	
\f\r]`,b=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,L=/-->/g,R=/>/g,g=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),U=/'/g,B=/"/g,V=/^(?:script|style|textarea|title)$/i,F=n=>(t,...i)=>({_$litType$:n,strings:t,values:i}),rt=F(1),x=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),D=new WeakMap,v=m.createTreeWalker(m,129);function J(n,t){if(!k(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return I!==void 0?I.createHTML(t):t}const G=(n,t)=>{const i=n.length-1,e=[];let s,o=t===2?"<svg>":t===3?"<math>":"",r=b;for(let p=0;p<i;p++){const h=n[p];let l,c,a=-1,$=0;for(;$<h.length&&(r.lastIndex=$,c=r.exec(h),c!==null);)$=r.lastIndex,r===b?c[1]==="!--"?r=L:c[1]!==void 0?r=R:c[2]!==void 0?(V.test(c[2])&&(s=RegExp("</"+c[2],"g")),r=g):c[3]!==void 0&&(r=g):r===g?c[0]===">"?(r=s??b,a=-1):c[1]===void 0?a=-2:(a=r.lastIndex-c[2].length,l=c[1],r=c[3]===void 0?g:c[3]==='"'?B:U):r===B||r===U?r=g:r===L||r===R?r=b:(r=g,s=void 0);const _=r===g&&n[p+1].startsWith("/>")?" ":"";o+=r===b?h+z:a>=0?(e.push(l),h.slice(0,a)+W+h.slice(a)+A+_):h+A+(a===-2?p:_)}return[J(n,o+(n[i]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),e]};class H{constructor({strings:t,_$litType$:i},e){let s;this.parts=[];let o=0,r=0;const p=t.length-1,h=this.parts,[l,c]=G(t,i);if(this.el=H.createElement(l,e),v.currentNode=this.el.content,i===2||i===3){const a=this.el.content.firstChild;a.replaceWith(...a.childNodes)}for(;(s=v.nextNode())!==null&&h.length<p;){if(s.nodeType===1){if(s.hasAttributes())for(const a of s.getAttributeNames())if(a.endsWith(W)){const $=c[r++],_=s.getAttribute(a).split(A),w=/([.?@])?(.*)/.exec($);h.push({type:1,index:o,name:w[2],strings:_,ctor:w[1]==="."?X:w[1]==="?"?Y:w[1]==="@"?tt:S}),s.removeAttribute(a)}else a.startsWith(A)&&(h.push({type:6,index:o}),s.removeAttribute(a));if(V.test(s.tagName)){const a=s.textContent.split(A),$=a.length-1;if($>0){s.textContent=N?N.emptyScript:"";for(let _=0;_<$;_++)s.append(a[_],E()),v.nextNode(),h.push({type:2,index:++o});s.append(a[$],E())}}}else if(s.nodeType===8)if(s.data===j)h.push({type:2,index:o});else{let a=-1;for(;(a=s.data.indexOf(A,a+1))!==-1;)h.push({type:7,index:o}),a+=A.length-1}o++}}static createElement(t,i){const e=m.createElement("template");return e.innerHTML=t,e}}function f(n,t,i=n,e){if(t===x)return t;let s=e!==void 0?i._$Co?.[e]:i._$Cl;const o=y(t)?void 0:t._$litDirective$;return s?.constructor!==o&&(s?._$AO?.(!1),o===void 0?s=void 0:(s=new o(n),s._$AT(n,i,e)),e!==void 0?(i._$Co??=[])[e]=s:i._$Cl=s),s!==void 0&&(t=f(n,s._$AS(n,t.values),s,e)),t}class Q{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:e}=this._$AD,s=(t?.creationScope??m).importNode(i,!0);v.currentNode=s;let o=v.nextNode(),r=0,p=0,h=e[0];for(;h!==void 0;){if(r===h.index){let l;h.type===2?l=new C(o,o.nextSibling,this,t):h.type===1?l=new h.ctor(o,h.name,h.strings,this,t):h.type===6&&(l=new et(o,this,t)),this._$AV.push(l),h=e[++p]}r!==h?.index&&(o=v.nextNode(),r++)}return v.currentNode=m,s}p(t){let i=0;for(const e of this._$AV)e!==void 0&&(e.strings!==void 0?(e._$AI(t,e,i),i+=e.strings.length-2):e._$AI(t[i])),i++}}class C{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,e,s){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=e,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&t?.nodeType===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=f(this,t,i),y(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==x&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Z(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&y(this._$AH)?this._$AA.nextSibling.data=t:this.T(m.createTextNode(t)),this._$AH=t}$(t){const{values:i,_$litType$:e}=t,s=typeof e=="number"?this._$AC(t):(e.el===void 0&&(e.el=H.createElement(J(e.h,e.h[0]),this.options)),e);if(this._$AH?._$AD===s)this._$AH.p(i);else{const o=new Q(s,this),r=o.u(this.options);o.p(i),this.T(r),this._$AH=o}}_$AC(t){let i=D.get(t.strings);return i===void 0&&D.set(t.strings,i=new H(t)),i}k(t){k(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let e,s=0;for(const o of t)s===i.length?i.push(e=new C(this.O(E()),this.O(E()),this,this.options)):e=i[s],e._$AI(o),s++;s<i.length&&(this._$AR(e&&e._$AB.nextSibling,s),i.length=s)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class S{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,e,s,o){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=i,this._$AM=s,this.options=o,e.length>2||e[0]!==""||e[1]!==""?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=d}_$AI(t,i=this,e,s){const o=this.strings;let r=!1;if(o===void 0)t=f(this,t,i,0),r=!y(t)||t!==this._$AH&&t!==x,r&&(this._$AH=t);else{const p=t;let h,l;for(t=o[0],h=0;h<o.length-1;h++)l=f(this,p[e+h],i,h),l===x&&(l=this._$AH[h]),r||=!y(l)||l!==this._$AH[h],l===d?t=d:t!==d&&(t+=(l??"")+o[h+1]),this._$AH[h]=l}r&&!s&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class X extends S{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class Y extends S{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class tt extends S{constructor(t,i,e,s,o){super(t,i,e,s,o),this.type=5}_$AI(t,i=this){if((t=f(this,t,i,0)??d)===x)return;const e=this._$AH,s=t===d&&e!==d||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,o=t!==d&&(e===d||s);s&&this.element.removeEventListener(this.name,this,e),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class et{constructor(t,i,e){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=e}get _$AU(){return this._$AM._$AU}_$AI(t){f(this,t)}}const it=M.litHtmlPolyfillSupport;it?.(H,C),(M.litHtmlVersions??=[]).push("3.3.1");export{d as A,rt as X,q as d,nt as p,K as t};
