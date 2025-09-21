import{a as b,i as g,x as d}from"./lit-element.CG82Vx-p.js";import{z as t}from"./property-CemaeiRl.Bpuq1yTU.js";import{A as _}from"./lit-html-Bm_EwbrZ.BUqNPNwy.js";import{t as v}from"./_Accordion.BcZ0uma0.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const y=i=>(e,r)=>{r!==void 0?r.addInitializer((()=>{customElements.define(i,e)})):customElements.define(i,e)};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const h=i=>i??_;var f=Object.defineProperty,$=Object.getOwnPropertyDescriptor,x=(i,e,r)=>e in i?f(i,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[e]=r,c=(i,e,r,o)=>{for(var s=o>1?void 0:o?$(e,r):e,l=i.length-1,u;l>=0;l--)(u=i[l])&&(s=(o?u(e,r,s):u(s))||s);return o&&s&&f(e,r,s),s},B=(i,e,r)=>x(i,e+"",r);let p=class extends g{constructor(){super(),this.type="button",this.disabled=!1,this.loading=!1,this.toggle=!1,this.pressed=!1,this.ariaLabel="",this.ariaDescribedby="",this.variant="",this.size="md"}_handleClick(){if(this.toggle&&!this.disabled&&!this.loading){this.pressed=!this.pressed;const e=new CustomEvent("toggle",{detail:{pressed:this.pressed},bubbles:!0,composed:!0});this.dispatchEvent(e)}}_handleFocus(){const e=new FocusEvent("focus",{bubbles:!0,composed:!0});this.dispatchEvent(e)}_handleBlur(){const e=new FocusEvent("blur",{bubbles:!0,composed:!0});this.dispatchEvent(e)}render(){const e=this.disabled||this.loading;return d`
      <button
        type=${this.type}
        part="button"
        ?disabled=${e}
        aria-disabled=${e?"true":"false"}
        aria-busy=${h(this.loading?"true":void 0)}
        aria-pressed=${h(this.toggle?String(this.pressed):void 0)}
        aria-label=${h(this.ariaLabel||void 0)}
        aria-describedby=${h(this.ariaDescribedby||void 0)}
        @click=${this._handleClick}
        @focus=${this._handleFocus}
        @blur=${this._handleBlur}
      >
        <slot></slot>
      </button>
    `}};B(p,"styles",b`
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
  `);c([t({type:String})],p.prototype,"type",2);c([t({type:Boolean})],p.prototype,"disabled",2);c([t({type:Boolean})],p.prototype,"loading",2);c([t({type:Boolean})],p.prototype,"toggle",2);c([t({type:Boolean})],p.prototype,"pressed",2);c([t({type:String})],p.prototype,"ariaLabel",2);c([t({type:String})],p.prototype,"ariaDescribedby",2);c([t({type:String,reflect:!0})],p.prototype,"variant",2);c([t({type:String,reflect:!0})],p.prototype,"size",2);p=c([y("ag-button")],p);var m=Object.defineProperty,w=Object.getOwnPropertyDescriptor,L=(i,e,r)=>e in i?m(i,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[e]=r,n=(i,e,r,o)=>{for(var s=o>1?void 0:o?w(e,r):e,l=i.length-1,u;l>=0;l--)(u=i[l])&&(s=(o?u(e,r,s):u(s))||s);return o&&s&&m(e,r,s),s},z=(i,e,r)=>L(i,e+"",r);let a=class extends g{_inputId=v("ag-input");constructor(){super(),this.label="",this.labelHidden=!1,this.noLabel=!1,this.ariaLabel="",this.labelledBy="",this.type="text",this.value="",this.rows=4,this.cols=50,this.size="default",this.isRounded=!1,this.isUnderlined=!1,this.isUnderlinedWithBackground=!1,this.isInline=!1,this.hasLeftAddon=!1,this.hasRightAddon=!1,this.required=!1,this.disabled=!1,this.readonly=!1,this.invalid=!1,this.errorMessage="",this.helpText=""}render(){const i=this.type==="textarea",e=this.hasLeftAddon||this.hasRightAddon,r=`${this._inputId}-help`,o=`${this._inputId}-error`,s=[];this.helpText&&s.push(r),this.errorMessage&&s.push(o),this.labelledBy&&s.push(this.labelledBy);const l=["ag-input"];this.size!=="default"&&l.push(`ag-input--${this.size}`),this.isRounded&&l.push("ag-input--rounded"),this.isUnderlined&&l.push("ag-input--underlined"),this.isUnderlinedWithBackground&&l.push("ag-input--underlined-with-background");const u=i?d`
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
        aria-label="${h(this.ariaLabel||void 0)}"
        aria-labelledby="${h(this.labelledBy||void 0)}"
        aria-describedby="${s.length>0?s.join(" "):h(void 0)}"
      ></textarea>
    `:d`
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
        aria-label="${h(this.ariaLabel||void 0)}"
        aria-labelledby="${h(this.labelledBy||void 0)}"
        aria-describedby="${s.length>0?s.join(" "):h(void 0)}"
      />
    `;return d`
      <div class="${l.join(" ")}" part="wrapper">
        ${this.noLabel?"":d`
          <label
            for="${this._inputId}"
            part="label"
            class="ag-input__label ${this.labelHidden?"ag-input__label--hidden":""}"
          >
            ${this.label}
            ${this.required?d`
              <span class="ag-input__required" aria-hidden="true">*</span>
            `:""}
          </label>
        `}

        ${this.helpText?d`
          <div class="ag-input__help" id="${r}" part="help">
            ${this.helpText}
          </div>
        `:""}

        ${this.errorMessage?d`
          <div class="ag-input__error" id="${o}" part="error">
            ${this.errorMessage}
          </div>
        `:d`
          <div class="ag-input__error" id="${o}" part="error" hidden></div>
        `}

        ${e?d`
          <div class="ag-input__field" part="field-wrapper">
            ${this.hasLeftAddon?d`
              <div class="ag-input__addon ag-input__addon--left" part="addon-left">
                <slot name="addon-left"></slot>
              </div>
            `:""}

            ${u}

            ${this.hasRightAddon?d`
              <div class="ag-input__addon ag-input__addon--right" part="addon-right">
                <slot name="addon-right"></slot>
              </div>
            `:""}
          </div>
        `:u}
      </div>
    `}};z(a,"styles",b`
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
  `);n([t({type:String})],a.prototype,"label",2);n([t({type:Boolean,attribute:"label-hidden"})],a.prototype,"labelHidden",2);n([t({type:Boolean,attribute:"no-label"})],a.prototype,"noLabel",2);n([t({type:String,attribute:"aria-label"})],a.prototype,"ariaLabel",2);n([t({type:String,attribute:"labelled-by"})],a.prototype,"labelledBy",2);n([t({type:String})],a.prototype,"type",2);n([t({type:String})],a.prototype,"value",2);n([t({type:Number})],a.prototype,"rows",2);n([t({type:Number})],a.prototype,"cols",2);n([t({type:String,reflect:!0})],a.prototype,"size",2);n([t({type:Boolean,reflect:!0,attribute:"is-rounded"})],a.prototype,"isRounded",2);n([t({type:Boolean,reflect:!0,attribute:"is-underlined"})],a.prototype,"isUnderlined",2);n([t({type:Boolean,reflect:!0,attribute:"is-underlined-with-background"})],a.prototype,"isUnderlinedWithBackground",2);n([t({type:Boolean,reflect:!0,attribute:"is-inline"})],a.prototype,"isInline",2);n([t({type:Boolean,reflect:!0,attribute:"has-left-addon"})],a.prototype,"hasLeftAddon",2);n([t({type:Boolean,reflect:!0,attribute:"has-right-addon"})],a.prototype,"hasRightAddon",2);n([t({type:Boolean,reflect:!0})],a.prototype,"required",2);n([t({type:Boolean,reflect:!0})],a.prototype,"disabled",2);n([t({type:Boolean,reflect:!0})],a.prototype,"readonly",2);n([t({type:Boolean,reflect:!0})],a.prototype,"invalid",2);n([t({type:String,attribute:"error-message"})],a.prototype,"errorMessage",2);n([t({type:String,attribute:"help-text"})],a.prototype,"helpText",2);a=n([y("ag-input")],a);export{a as e,p as t};
