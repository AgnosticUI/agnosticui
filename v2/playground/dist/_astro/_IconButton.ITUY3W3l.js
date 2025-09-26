import{a as x,i as C,x as d}from"./lit-element.DMCH56eX.js";import{A as k}from"./lit-html-Bm_EwbrZ.BUqNPNwy.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=s=>(t,e)=>{e!==void 0?e.addInitializer((()=>{customElements.define(s,t)})):customElements.define(s,t)};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const f=globalThis,y=f.ShadowRoot&&(f.ShadyCSS===void 0||f.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,P=Symbol(),$=new WeakMap;let A=class{constructor(s,t,e){if(this._$cssResult$=!0,e!==P)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=s,this.t=t}get styleSheet(){let s=this.o;const t=this.t;if(y&&s===void 0){const e=t!==void 0&&t.length===1;e&&(s=$.get(t)),s===void 0&&((this.o=s=new CSSStyleSheet).replaceSync(this.cssText),e&&$.set(t,s))}return s}toString(){return this.cssText}};const O=s=>new A(typeof s=="string"?s:s+"",void 0,P),M=(s,t)=>{if(y)s.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const e of t){const i=document.createElement("style"),o=f.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=e.cssText,s.appendChild(i)}},S=y?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return O(e)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:R,defineProperty:j,getOwnPropertyDescriptor:T,getOwnPropertyNames:D,getOwnPropertySymbols:L,getPrototypeOf:q}=Object,g=globalThis,E=g.trustedTypes,I=E?E.emptyScript:"",N=g.reactiveElementPolyfillSupport,u=(s,t)=>s,b={toAttribute(s,t){switch(t){case Boolean:s=s?I:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},m=(s,t)=>!R(s,t),w={attribute:!0,type:String,converter:b,reflect:!1,useDefault:!1,hasChanged:m};Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;class p extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(t,i,e);o!==void 0&&j(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){const{get:o,set:r}=T(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:o,set(n){const a=o?.call(this);r?.call(this,n),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(u("elementProperties")))return;const t=q(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(u("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(u("properties"))){const e=this.properties,i=[...D(e),...L(e)];for(const o of i)this.createProperty(o,e[o])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,o]of e)this.elementProperties.set(i,o)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const o=this._$Eu(e,i);o!==void 0&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const o of i)e.unshift(S(o))}else t!==void 0&&e.push(S(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return M(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(o!==void 0&&i.reflect===!0){const r=(i.converter?.toAttribute!==void 0?i.converter:b).toAttribute(e,i.type);this._$Em=t,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,o=i._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const r=i.getPropertyOptions(o),n=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:b;this._$Em=o;const a=n.fromAttribute(e,r.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){const o=this.constructor,r=this[t];if(i??=o.getPropertyOptions(t),!((i.hasChanged??m)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:o,wrapped:r},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),r!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),o===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,r]of this._$Ep)this[o]=r;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,r]of i){const{wrapped:n}=r,a=this[o];n!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,r,a)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((i=>i.hostUpdate?.())),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}}p.elementStyles=[],p.shadowRootOptions={mode:"open"},p[u("elementProperties")]=new Map,p[u("finalized")]=new Map,N?.({ReactiveElement:p}),(g.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:m},V=(s=B,t,e)=>{const{kind:i,metadata:o}=e;let r=globalThis.litPropertyMetadata.get(o);if(r===void 0&&globalThis.litPropertyMetadata.set(o,r=new Map),i==="setter"&&((s=Object.create(s)).wrapped=!0),r.set(e.name,s),i==="accessor"){const{name:n}=e;return{set(a){const v=t.get.call(this);t.set.call(this,a),this.requestUpdate(n,v,s)},init(a){return a!==void 0&&this.C(n,void 0,s,a),a}}}if(i==="setter"){const{name:n}=e;return function(a){const v=this[n];t.call(this,a),this.requestUpdate(n,v,s)}}throw Error("Unsupported decorator location: "+i)};function h(s){return(t,e)=>typeof e=="object"?V(s,t,e):((i,o,r)=>{const n=o.hasOwnProperty(r);return o.constructor.createProperty(r,i),n?Object.getOwnPropertyDescriptor(o,r):void 0})(s,t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _=s=>s??k;var z=Object.defineProperty,H=Object.getOwnPropertyDescriptor,K=(s,t,e)=>t in s?z(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,l=(s,t,e,i)=>{for(var o=i>1?void 0:i?H(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(o=(i?n(t,e,o):n(o))||o);return i&&o&&z(t,e,o),o},F=(s,t,e)=>K(s,t+"",e);let c=class extends C{constructor(){super(),this.label="",this.icon="",this.unicode="",this.size="md",this.variant="ghost",this.disabled=!1,this.pressed=!1,this.loading=!1,this.type="button"}_handleClick=s=>{if(this.disabled||this.loading){s.preventDefault(),s.stopPropagation();return}this.dispatchEvent(new CustomEvent("icon-button-click",{detail:{originalEvent:s,label:this.label,pressed:this.pressed},bubbles:!0}))};_handleKeyDown=s=>{(s.key===" "||s.key==="Enter")&&!this.disabled&&!this.loading&&this.dispatchEvent(new CustomEvent("icon-button-activate",{detail:{originalEvent:s,label:this.label,pressed:this.pressed},bubbles:!0}))};_renderIcon(){return this.children.length>0?d`
        <span class="icon" aria-hidden="true">
          <slot></slot>
        </span>
      `:this.unicode?d`
        <span class="icon unicode-icon" aria-hidden="true">${this.unicode}</span>
      `:this.icon?d`
        <span class="icon" aria-hidden="true" data-icon="${this.icon}">
          <slot>
            <!-- Icon system would inject SVG here -->
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              focusable="false"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2" fill="none"/>
              <text x="12" y="16" text-anchor="middle" font-size="8" fill="currentColor">
                ${this.icon.slice(0,3)}
              </text>
            </svg>
          </slot>
        </span>
      `:d`
      <span class="icon" aria-hidden="true">
        <slot></slot>
      </span>
    `}render(){return this.label||console.warn("AgIconButton: label property is required for accessibility. Please provide an aria-label value."),d`
      <button
        type=${this.type}
        aria-label=${_(this.label||void 0)}
        aria-pressed=${_(this.pressed!==void 0?this.pressed.toString():void 0)}
        ?disabled=${this.disabled}
        @click=${this._handleClick}
        @keydown=${this._handleKeyDown}
      >
        ${this._renderIcon()}

        <!-- Loading indicator slot -->
        ${this.loading?d`
          <span class="icon" aria-hidden="true">
            <slot name="loading">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                focusable="false"
                aria-hidden="true"
                style="animation: spin 1s linear infinite;"
              >
                <path d="M21 12a9 9 0 11-6.219-8.56"/>
              </svg>
              <style>
                @keyframes spin {
                  from { transform: rotate(0deg); }
                  to { transform: rotate(360deg); }
                }
              </style>
            </slot>
          </span>
        `:""}

        <!-- Visually hidden text fallback for additional context -->
        ${this.label&&!this.getAttribute("aria-label")?d`
          <span class="visually-hidden">${this.label}</span>
        `:""}
      </button>
    `}};F(c,"styles",x`
    /* FUNCTIONAL CSS ONLY - Almost Headless Approach */
    :host {
      /* Inline-flex for perfect icon centering */
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    button {
      /* Reset browser button styles */
      margin: 0;
      border: none;
      background: none;
      cursor: pointer;
      font-family: inherit;

      /* Flexbox for icon centering */
      display: flex;
      align-items: center;
      justify-content: center;

      /* Size variants using CSS custom properties */
      width: var(--icon-button-size, var(--ag-space-10, 2.5rem));
      height: var(--icon-button-size, var(--ag-space-10, 2.5rem));

      /* Semantic token integration */
      background: var(--icon-button-bg, transparent);
      color: var(--icon-button-color, var(--ag-text-locked, #374151));
      border-radius: var(--icon-button-radius, var(--ag-radius-sm, 0.25rem));

      /* Touch target accessibility */
      min-width: 44px;
      min-height: 44px;

      /* Transition for smooth state changes */
      transition: all var(--ag-motion-duration-fast, 150ms) ease-in-out;
    }

    /* Size variants */
    :host([size="xs"]) button {
      --icon-button-size: var(--ag-space-6, 1.5rem);
    }

    :host([size="sm"]) button {
      --icon-button-size: var(--ag-space-8, 2rem);
    }

    :host([size="md"]) button {
      --icon-button-size: var(--ag-space-10, 2.5rem);
    }

    :host([size="lg"]) button {
      --icon-button-size: var(--ag-space-12, 3rem);
    }

    :host([size="xl"]) button {
      --icon-button-size: var(--ag-space-14, 3.5rem);
    }

    /* Hover state - Sara Soueidan compliance */
    button:hover {
      background: var(--icon-button-hover-bg, var(--ag-background-secondary, #f3f4f6));
      color: var(--icon-button-hover-color, var(--ag-text-locked, #374151));
    }

    /* Focus state - High contrast, color-independent */
    button:focus-visible {
      outline: var(--ag-focus-width, 2px) solid var(--ag-focus, #2563eb);
      outline-offset: var(--ag-focus-offset, 2px);
    }

    /* Active/pressed state */
    button:active {
      background: var(--icon-button-active-bg, var(--ag-background-tertiary, #e5e7eb));
      transform: scale(0.98);
    }

    /* Disabled state */
    button:disabled {
      opacity: var(--ag-opacity-disabled, 0.6);
      cursor: not-allowed;
      pointer-events: none;
    }

    /* Toggle pressed state */
    :host([pressed]) button {
      background: var(--icon-button-pressed-bg, var(--ag-primary-subtle, #dbeafe));
      color: var(--icon-button-pressed-color, var(--ag-primary, #2563eb));
    }

    /* Icon sizing and positioning */
    .icon {
      width: var(--icon-size, var(--ag-space-6, 1.5rem));
      height: var(--icon-size, var(--ag-space-6, 1.5rem));
      flex-shrink: 0;

      /* Ensure SVG fills available space */
      display: block;
    }

    /* Size-specific icon sizing */
    :host([size="xs"]) .icon {
      --icon-size: var(--ag-space-4, 1rem);
    }

    :host([size="sm"]) .icon {
      --icon-size: var(--ag-space-5, 1.25rem);
    }

    :host([size="md"]) .icon {
      --icon-size: var(--ag-space-6, 1.5rem);
    }

    :host([size="lg"]) .icon {
      --icon-size: var(--ag-space-7, 1.75rem);
    }

    :host([size="xl"]) .icon {
      --icon-size: var(--ag-space-8, 2rem);
    }

    /* Unicode icon styling */
    .unicode-icon {
      font-size: var(--icon-size, var(--ag-space-6, 1.5rem));
      line-height: 1;
      font-weight: normal;
      font-style: normal;
    }

    /* Visually hidden text for accessibility */
    .visually-hidden {
      position: absolute !important;
      width: 1px !important;
      height: 1px !important;
      padding: 0 !important;
      margin: -1px !important;
      overflow: hidden !important;
      clip: rect(0, 0, 0, 0) !important;
      white-space: nowrap !important;
      border: 0 !important;
    }

    /* Loading state */
    :host([loading]) button {
      pointer-events: none;
    }

    :host([loading]) .icon {
      opacity: 0.5;
    }

    /* Variant styles - minimal functional differences */
    :host([variant="primary"]) button {
      --icon-button-bg: var(--ag-primary, #2563eb);
      --icon-button-color: var(--ag-white, #ffffff);
      --icon-button-hover-bg: var(--ag-primary-hover, #1d4ed8);
      --icon-button-hover-color: var(--ag-white, #ffffff);
    }

    :host([variant="danger"]) button {
      --icon-button-bg: transparent;
      --icon-button-color: var(--ag-danger, #dc2626);
      --icon-button-hover-bg: var(--ag-danger-subtle, #fef2f2);
      --icon-button-hover-color: var(--ag-danger-hover, #b91c1c);
    }

    :host([variant="secondary"]) button {
      --icon-button-bg: var(--ag-background-secondary, #f3f4f6);
      --icon-button-color: var(--ag-text-secondary, #6b7280);
      --icon-button-hover-bg: var(--ag-background-tertiary, #e5e7eb);
      --icon-button-hover-color: var(--ag-text-secondary, #6b7280);
    }
  `);l([h({type:String})],c.prototype,"label",2);l([h({type:String})],c.prototype,"icon",2);l([h({type:String})],c.prototype,"unicode",2);l([h({type:String,reflect:!0})],c.prototype,"size",2);l([h({type:String,reflect:!0})],c.prototype,"variant",2);l([h({type:Boolean,reflect:!0})],c.prototype,"disabled",2);l([h({type:Boolean,reflect:!0})],c.prototype,"pressed",2);l([h({type:Boolean,reflect:!0})],c.prototype,"loading",2);l([h({type:String})],c.prototype,"type",2);c=l([U("ag-icon-button")],c);export{c as e,_ as m,U as n,h as z};
