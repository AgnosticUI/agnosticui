import{a as A,i as U,x as p}from"./lit-element.CG82Vx-p.js";import{A as L,t as k}from"./lit-html-Bm_EwbrZ.CEKVJnu_.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=i=>(t,e)=>{e!==void 0?e.addInitializer((()=>{customElements.define(i,t)})):customElements.define(i,t)};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const b=globalThis,v=b.ShadowRoot&&(b.ShadyCSS===void 0||b.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,O=Symbol(),E=new WeakMap;let R=class{constructor(i,t,e){if(this._$cssResult$=!0,e!==O)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=i,this.t=t}get styleSheet(){let i=this.o;const t=this.t;if(v&&i===void 0){const e=t!==void 0&&t.length===1;e&&(i=E.get(t)),i===void 0&&((this.o=i=new CSSStyleSheet).replaceSync(this.cssText),e&&E.set(t,i))}return i}toString(){return this.cssText}};const M=i=>new R(typeof i=="string"?i:i+"",void 0,O),j=(i,t)=>{if(v)i.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const e of t){const s=document.createElement("style"),r=b.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=e.cssText,i.appendChild(s)}},w=v?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return M(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:q,defineProperty:T,getOwnPropertyDescriptor:I,getOwnPropertyNames:D,getOwnPropertySymbols:N,getPrototypeOf:F}=Object,_=globalThis,x=_.trustedTypes,H=x?x.emptyScript:"",W=_.reactiveElementPolyfillSupport,g=(i,t)=>i,m={toAttribute(i,t){switch(t){case Boolean:i=i?H:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},S=(i,t)=>!q(i,t),P={attribute:!0,type:String,converter:m,reflect:!1,useDefault:!1,hasChanged:S};Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;class y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=P){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),r=this.getPropertyDescriptor(t,s,e);r!==void 0&&T(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){const{get:r,set:a}=I(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:r,set(n){const h=r?.call(this);a?.call(this,n),this.requestUpdate(t,h,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??P}static _$Ei(){if(this.hasOwnProperty(g("elementProperties")))return;const t=F(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(g("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(g("properties"))){const e=this.properties,s=[...D(e),...N(e)];for(const r of s)this.createProperty(r,e[r])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,r]of e)this.elementProperties.set(s,r)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const r=this._$Eu(e,s);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const r of s)e.unshift(w(r))}else t!==void 0&&e.push(w(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return j(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(r!==void 0&&s.reflect===!0){const a=(s.converter?.toAttribute!==void 0?s.converter:m).toAttribute(e,s.type);this._$Em=t,a==null?this.removeAttribute(r):this.setAttribute(r,a),this._$Em=null}}_$AK(t,e){const s=this.constructor,r=s._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const a=s.getPropertyOptions(r),n=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:m;this._$Em=r;const h=n.fromAttribute(e,a.type);this[r]=h??this._$Ej?.get(r)??h,this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){const r=this.constructor,a=this[t];if(s??=r.getPropertyOptions(t),!((s.hasChanged??S)(a,e)||s.useDefault&&s.reflect&&a===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:r,wrapped:a},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),a!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),r===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[r,a]of this._$Ep)this[r]=a;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[r,a]of s){const{wrapped:n}=a,h=this[r];n!==!0||this._$AL.has(r)||h===void 0||this.C(r,void 0,a,h)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((s=>s.hostUpdate?.())),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}}y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[g("elementProperties")]=new Map,y[g("finalized")]=new Map,W?.({ReactiveElement:y}),(_.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const G={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:S},J=(i=G,t,e)=>{const{kind:s,metadata:r}=e;let a=globalThis.litPropertyMetadata.get(r);if(a===void 0&&globalThis.litPropertyMetadata.set(r,a=new Map),s==="setter"&&((i=Object.create(i)).wrapped=!0),a.set(e.name,i),s==="accessor"){const{name:n}=e;return{set(h){const $=t.get.call(this);t.set.call(this,h),this.requestUpdate(n,$,i)},init(h){return h!==void 0&&this.C(n,void 0,i,h),h}}}if(s==="setter"){const{name:n}=e;return function(h){const $=this[n];t.call(this,h),this.requestUpdate(n,$,i)}}throw Error("Unsupported decorator location: "+s)};function o(i){return(t,e)=>typeof e=="object"?J(i,t,e):((s,r,a)=>{const n=r.hasOwnProperty(a);return r.constructor.createProperty(a,s),n?Object.getOwnPropertyDescriptor(r,a):void 0})(i,t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const c=i=>i??L;var z=Object.defineProperty,K=Object.getOwnPropertyDescriptor,V=(i,t,e)=>t in i?z(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,f=(i,t,e,s)=>{for(var r=s>1?void 0:s?K(t,e):t,a=i.length-1,n;a>=0;a--)(n=i[a])&&(r=(s?n(t,e,r):n(r))||r);return s&&r&&z(t,e,r),r},Y=(i,t,e)=>V(i,t+"",e);let u=class extends U{constructor(){super(),this.type="button",this.disabled=!1,this.loading=!1,this.toggle=!1,this.pressed=!1,this.ariaLabel="",this.ariaDescribedby="",this.variant="",this.size="md"}_handleClick(){if(this.toggle&&!this.disabled&&!this.loading){this.pressed=!this.pressed;const t=new CustomEvent("toggle",{detail:{pressed:this.pressed},bubbles:!0,composed:!0});this.dispatchEvent(t)}}_handleFocus(){const t=new FocusEvent("focus",{bubbles:!0,composed:!0});this.dispatchEvent(t)}_handleBlur(){const t=new FocusEvent("blur",{bubbles:!0,composed:!0});this.dispatchEvent(t)}render(){const t=this.disabled||this.loading;return p`
      <button
        type=${this.type}
        part="button"
        ?disabled=${t}
        aria-disabled=${t?"true":"false"}
        aria-busy=${c(this.loading?"true":void 0)}
        aria-pressed=${c(this.toggle?String(this.pressed):void 0)}
        aria-label=${c(this.ariaLabel||void 0)}
        aria-describedby=${c(this.ariaDescribedby||void 0)}
        @click=${this._handleClick}
        @focus=${this._handleFocus}
        @blur=${this._handleBlur}
      >
        <slot></slot>
      </button>
    `}};Y(u,"styles",A`
    /* FUNCTIONAL CSS ONLY - Almost Headless Approach */
    :host {
      /* Inline-flex for perfect centering while maintaining inline behavior */
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    button {
      /* Reset browser defaults */
      margin: 0;
      padding: 0;
      border: none;
      background: none;

      /* Inherit font styling from parent */
      font: inherit;
      color: inherit;

      /* Basic interaction styling */
      cursor: pointer;

      /* Flex layout for perfect content alignment */
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.25rem; /* Small gap for icon + text scenarios */
    }

    button:disabled {
      cursor: not-allowed;
    }

    button:focus-visible {
      /* High-contrast focus ring using CSS custom property */
      outline: 2px solid var(--agnostic-focus, #2563eb);
      outline-offset: 2px;
      transition: outline 0.2s ease;
    }
  `);f([o({type:String})],u.prototype,"type",2);f([o({type:Boolean})],u.prototype,"disabled",2);f([o({type:Boolean})],u.prototype,"loading",2);f([o({type:Boolean})],u.prototype,"toggle",2);f([o({type:Boolean})],u.prototype,"pressed",2);f([o({type:String})],u.prototype,"ariaLabel",2);f([o({type:String})],u.prototype,"ariaDescribedby",2);f([o({type:String,reflect:!0})],u.prototype,"variant",2);f([o({type:String,reflect:!0})],u.prototype,"size",2);u=f([C("ag-button")],u);var B=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,X=(i,t,e)=>t in i?B(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,d=(i,t,e,s)=>{for(var r=s>1?void 0:s?Q(t,e):t,a=i.length-1,n;a>=0;a--)(n=i[a])&&(r=(s?n(t,e,r):n(r))||r);return s&&r&&B(t,e,r),r},Z=(i,t,e)=>X(i,t+"",e);let l=class extends U{_inputId=k("ag-input");constructor(){super(),this.label="",this.labelHidden=!1,this.noLabel=!1,this.ariaLabel="",this.labelledBy="",this.type="text",this.value="",this.rows=4,this.cols=50,this.size="default",this.isRounded=!1,this.isUnderlined=!1,this.isUnderlinedWithBackground=!1,this.isInline=!1,this.hasLeftAddon=!1,this.hasRightAddon=!1,this.required=!1,this.disabled=!1,this.readonly=!1,this.invalid=!1,this.errorMessage="",this.helpText=""}render(){const i=this.type==="textarea",t=this.hasLeftAddon||this.hasRightAddon,e=`${this._inputId}-help`,s=`${this._inputId}-error`,r=[];this.helpText&&r.push(e),this.errorMessage&&r.push(s),this.labelledBy&&r.push(this.labelledBy);const a=["ag-input"];this.size!=="default"&&a.push(`ag-input--${this.size}`),this.isRounded&&a.push("ag-input--rounded"),this.isUnderlined&&a.push("ag-input--underlined"),this.isUnderlinedWithBackground&&a.push("ag-input--underlined-with-background");const n=i?p`
      <textarea
        id="${this._inputId}"
        part="textarea"
        class="ag-input__textarea"
        .value="${this.value}"
        rows="${this.rows}"
        cols="${this.cols}"
        ?required="${this.required}"
        ?disabled="${this.disabled}"
        ?readonly="${this.readonly}"
        aria-required="${this.required?"true":"false"}"
        aria-invalid="${this.invalid?"true":"false"}"
        aria-label="${c(this.ariaLabel||void 0)}"
        aria-labelledby="${c(this.labelledBy||void 0)}"
        aria-describedby="${r.length>0?r.join(" "):c(void 0)}"
      ></textarea>
    `:p`
      <input
        type="${this.type}"
        id="${this._inputId}"
        part="input"
        class="ag-input__input"
        .value="${this.value}"
        ?required="${this.required}"
        ?disabled="${this.disabled}"
        ?readonly="${this.readonly}"
        aria-required="${this.required?"true":"false"}"
        aria-invalid="${this.invalid?"true":"false"}"
        aria-label="${c(this.ariaLabel||void 0)}"
        aria-labelledby="${c(this.labelledBy||void 0)}"
        aria-describedby="${r.length>0?r.join(" "):c(void 0)}"
      />
    `;return p`
      <div class="${a.join(" ")}" part="wrapper">
        ${this.noLabel?"":p`
          <label
            for="${this._inputId}"
            part="label"
            class="ag-input__label ${this.labelHidden?"ag-input__label--hidden":""}"
          >
            ${this.label}
            ${this.required?p`
              <span class="ag-input__required" aria-hidden="true">*</span>
            `:""}
          </label>
        `}

        ${this.helpText?p`
          <div class="ag-input__help" id="${e}" part="help">
            ${this.helpText}
          </div>
        `:""}

        ${this.errorMessage?p`
          <div class="ag-input__error" id="${s}" part="error">
            ${this.errorMessage}
          </div>
        `:p`
          <div class="ag-input__error" id="${s}" part="error" hidden></div>
        `}

        ${t?p`
          <div class="ag-input__field" part="field-wrapper">
            ${this.hasLeftAddon?p`
              <div class="ag-input__addon ag-input__addon--left" part="addon-left">
                <slot name="addon-left"></slot>
              </div>
            `:""}

            ${n}

            ${this.hasRightAddon?p`
              <div class="ag-input__addon ag-input__addon--right" part="addon-right">
                <slot name="addon-right"></slot>
              </div>
            `:""}
          </div>
        `:n}
      </div>
    `}};Z(l,"styles",A`
    /* FUNCTIONAL CSS ONLY - Almost Headless Approach */
    :host {
      display: block;
    }

    /* Label Above Input - BBC GEL Best Practice
     *
     * Why Label Above (BBC GEL):
     * - Mobile-friendly: Labels above work better on small screens
     * - Accessibility standard: Clear visual hierarchy
     * - Cognitive accessibility: Easier to scan and understand
     * - International: Works with various text lengths/languages
     *
     * Note: Labels below inputs are possible via customization:
     * Use noLabel prop + external <ag-label> or <label> for custom positioning
     */
    .ag-input__label {
      display: block;
      margin-bottom: 0.25rem;
    }

    /* Visually hidden label - screen reader only */
    .ag-input__label--hidden {
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

    /* Focus styles - consistent with --agnostic-focus pattern */
    .ag-input__input:focus-visible,
    .ag-input__textarea:focus-visible {
      outline: 2px solid var(--agnostic-focus, #2563eb);
      outline-offset: 2px;
      transition: outline 0.2s ease;
    }

    /* Textarea resize behavior */
    .ag-input__textarea {
      resize: vertical;
    }

    /* Inline mode display */
    :host([is-inline]) {
      display: inline-block;
    }

    /* Addon field wrapper - flex for addon support */
    .ag-input__field {
      display: flex;
      align-items: stretch; /* Changed from center to stretch */
    }

    /* Addon positioning - exact height matching for all content types */
    .ag-input__addon {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.75rem; /* Default size padding */
      box-sizing: border-box;
      min-height: 2.75rem; /* 44px - matches working left addons */
      line-height: 1;
      font-size: 1rem;
    }

    /* Small size addon - exact height matching */
    :host([size="small"]) .ag-input__addon {
      padding: 0.5rem;
      min-height: 2.25rem; /* Proportional to small inputs */
      font-size: 0.875rem;
    }

    /* Large size addon - exact height matching */
    :host([size="large"]) .ag-input__addon {
      padding: 1rem;
      min-height: 3.4375rem; /* 55px - match actual large input height */
      font-size: 1.125rem;
    }

    /* Default size addon - explicit for specificity */
    :host([size="default"]) .ag-input__addon,
    :host(:not([size])) .ag-input__addon {
      padding: 0.75rem;
      min-height: 2.75rem; /* 44px - match working left addons */
      font-size: 1rem;
    }

    /* Input takes remaining space in addon layout */
    .ag-input__field input,
    .ag-input__field textarea {
      flex: 1;
      /* Reset borders for seamless addon connection */
      border-radius: 0;
    }

    /* Required field indicator */
    .ag-input__required {
      color: inherit;
    }

    /* Error state visibility */
    .ag-input__error[hidden] {
      display: none !important;
    }

    .ag-input__error:not([hidden]) {
      display: block;
    }
  `);d([o({type:String})],l.prototype,"label",2);d([o({type:Boolean,attribute:"label-hidden"})],l.prototype,"labelHidden",2);d([o({type:Boolean,attribute:"no-label"})],l.prototype,"noLabel",2);d([o({type:String,attribute:"aria-label"})],l.prototype,"ariaLabel",2);d([o({type:String,attribute:"labelled-by"})],l.prototype,"labelledBy",2);d([o({type:String})],l.prototype,"type",2);d([o({type:String})],l.prototype,"value",2);d([o({type:Number})],l.prototype,"rows",2);d([o({type:Number})],l.prototype,"cols",2);d([o({type:String,reflect:!0})],l.prototype,"size",2);d([o({type:Boolean,reflect:!0,attribute:"is-rounded"})],l.prototype,"isRounded",2);d([o({type:Boolean,reflect:!0,attribute:"is-underlined"})],l.prototype,"isUnderlined",2);d([o({type:Boolean,reflect:!0,attribute:"is-underlined-with-background"})],l.prototype,"isUnderlinedWithBackground",2);d([o({type:Boolean,reflect:!0,attribute:"is-inline"})],l.prototype,"isInline",2);d([o({type:Boolean,reflect:!0,attribute:"has-left-addon"})],l.prototype,"hasLeftAddon",2);d([o({type:Boolean,reflect:!0,attribute:"has-right-addon"})],l.prototype,"hasRightAddon",2);d([o({type:Boolean,reflect:!0})],l.prototype,"required",2);d([o({type:Boolean,reflect:!0})],l.prototype,"disabled",2);d([o({type:Boolean,reflect:!0})],l.prototype,"readonly",2);d([o({type:Boolean,reflect:!0})],l.prototype,"invalid",2);d([o({type:String,attribute:"error-message"})],l.prototype,"errorMessage",2);d([o({type:String,attribute:"help-text"})],l.prototype,"helpText",2);l=d([C("ag-input")],l);export{l as e,u as t,o as z};
