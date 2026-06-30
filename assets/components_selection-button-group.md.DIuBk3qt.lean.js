var P=Object.defineProperty;var T=(r,t,n)=>t in r?P(r,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[t]=n;var C=(r,t,n)=>T(r,typeof t!="symbol"?t+"":t,n);import{A as M}from"./chunks/AlphaWarning.CKFYAqLS.js";import{a as E,E as R,x as B,i as D,z as g}from"./chunks/property-CemaeiRl.Cea_q1B7.js";import{n as I}from"./chunks/state-CovhUvdr.C-u8O0Fo.js";import{c as $}from"./chunks/face-mixin.MgCHLM8W.js";import{d as V,c as S,o as f,r as _,K as z,p as A,j as l,G as i,k as a,w as s,a as o,t as O,_ as N,ag as H}from"./chunks/framework.DmF2n0Fc.js";import{v as L}from"./chunks/VueButton.vue_vue_type_script_setup_true_lang-D1jGatE9.Cl3S9w1o.js";import{F as W}from"./chunks/FrameworkExample.Byhd3Bwz.js";import"./chunks/createLucideIcon.U6K_rCrv.js";import"./chunks/Button.BmTmCFep.js";import"./chunks/sdk.m.Dxhqq5iP.js";import"./chunks/Icon.CxPOY7rJ.js";var j=Object.defineProperty,m=(r,t,n,c)=>{for(var p=void 0,u=r.length-1,h;u>=0;u--)(h=r[u])&&(p=h(t,n,p)||p);return p&&j(t,n,p),p};const q=class extends $(E){constructor(){super(),this._handleButtonChange=t=>{t.stopPropagation();const{value:n,checked:c}=t.detail;let p;if(this.type==="radio")p=c?[n]:[];else{const h=[...this._getSelectedValues()];if(c)h.includes(n)||h.push(n);else{const F=h.indexOf(n);F>-1&&h.splice(F,1)}p=h}this._internalSelectedValues=p,this._syncFormValue(),this._syncValidity();const u=new CustomEvent("selection-change",{detail:{value:n,checked:c,selectedValues:p},bubbles:!0,composed:!0});this.dispatchEvent(u),this.onSelectionChange&&this.onSelectionChange(u)},this._handleKeyDown=t=>{const n=this._getButtons().filter(h=>!h.disabled);if(n.length===0)return;const c=n.find(h=>{var F;try{return((F=h.shadowRoot)==null?void 0:F.activeElement)||h===document.activeElement}catch{return h===document.activeElement}}),p=c?n.indexOf(c):-1;let u=null;switch(t.key){case"ArrowDown":case"ArrowRight":t.preventDefault(),u=p===-1?0:(p+1)%n.length;break;case"ArrowUp":case"ArrowLeft":t.preventDefault(),u=p===-1?n.length-1:(p-1+n.length)%n.length;break;case"Home":t.preventDefault(),u=0;break;case"End":t.preventDefault(),u=n.length-1;break}if(u!==null){const h=n[u];h.focus(),this.type==="radio"&&this._handleButtonChange(new CustomEvent("selection-button-change",{detail:{value:h.value,checked:!0}}))}},this.type="radio",this.legend="",this.legendHidden=!1,this.theme="",this.size="md",this.shape="",this.value=void 0,this.values=void 0,this.disabled=!1,this.required=!1,this._internalSelectedValues=[],this.validationMessages=void 0}_getSelectedValues(){return this.type==="radio"?this.value!==void 0?this.value?[this.value]:[]:this._internalSelectedValues:this.values!==void 0?this.values:this._internalSelectedValues}_syncFormValue(){const t=this._getSelectedValues();if(this.type==="radio")this._internals.setFormValue(t.length>0?t[0]:null);else if(t.length===0)this._internals.setFormValue(null);else{const n=new FormData;t.forEach(c=>n.append(this.name,c)),this._internals.setFormValue(n)}}_syncValidity(){var n;const t=this._getSelectedValues();this.required&&t.length===0?this._internals.setValidity({valueMissing:!0},((n=this.validationMessages)==null?void 0:n.valueMissing)??"Please select an option."):this._internals.setValidity({})}formResetCallback(){this._internalSelectedValues=[],this._internals.setFormValue(null),this._syncValidity(),this._syncChildButtons(),this._syncStates()}formStateRestoreCallback(t,n){t===null?this._internalSelectedValues=[]:t instanceof FormData?this._internalSelectedValues=Array.from(t.getAll(this.name)):typeof t=="string"&&(this._internalSelectedValues=[t]),this._syncFormValue(),this._syncValidity(),this._syncChildButtons(),this._syncStates()}_syncStates(){this._setState("disabled",this.disabled),this._setState("required",this.required),this._setState("invalid",!this._internals.validity.valid)}connectedCallback(){super.connectedCallback(),this.addEventListener("selection-button-change",this._handleButtonChange),this.addEventListener("keydown",this._handleKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("selection-button-change",this._handleButtonChange),this.removeEventListener("keydown",this._handleKeyDown)}updated(t){super.updated(t),(t.has("type")||t.has("name")||t.has("theme")||t.has("size")||t.has("shape")||t.has("disabled")||t.has("value")||t.has("values")||t.has("_internalSelectedValues"))&&this._syncChildButtons(),t.has("value")||t.has("values")||t.has("_internalSelectedValues")?(this._syncFormValue(),this._syncValidity()):t.has("required")&&this._syncValidity(),(t.has("disabled")||t.has("required")||t.has("_internalSelectedValues"))&&this._syncStates()}firstUpdated(){this._syncChildButtons(),this._syncFormValue(),this._syncValidity(),this._syncStates()}_getButtons(){var n;const t=(n=this.shadowRoot)==null?void 0:n.querySelector("slot");return t?t.assignedElements({flatten:!0}).filter(c=>c.tagName.toLowerCase()==="ag-selection-button"):[]}_syncChildButtons(){const t=this._getButtons(),n=this._getSelectedValues();t.forEach(c=>{const p=n.includes(c.value);c._type=this.type,c._name=this.name,c._theme=this.theme,c._size=this.size,c._shape=this.shape,c.checked=p,this.disabled&&(c.disabled=!0)})}_handleSlotChange(){this._syncChildButtons()}render(){const t=["selection-button-group__legend",this.legendHidden?"selection-button-group__legend--hidden":""].filter(Boolean).join(" ");return B`
      <fieldset
        class="selection-button-group"
        part="ag-selection-button-group-fieldset"
        role="${this.type==="radio"?"radiogroup":"group"}"
        aria-disabled="${this.disabled?"true":"false"}"
      >
        ${this.legend?B`<legend class="${t}" part="ag-selection-button-group-legend">${this.legend}</legend>`:R}
        <div class="selection-button-group__content" part="ag-selection-button-group-content">
          <slot @slotchange="${this._handleSlotChange}"></slot>
        </div>
      </fieldset>
    `}};q.styles=D`
    :host {
      display: block;
    }

    .selection-button-group {
      border: 0;
      padding: 0;
      margin: 0;
      min-inline-size: auto;
    }

    .selection-button-group__legend {
      font-weight: 600;
      font-size: var(--ag-font-size-base);
      color: var(--ag-text-primary);
      padding: 0;
      margin-block-end: var(--ag-space-4);
    }

    .selection-button-group__legend--hidden {
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

    .selection-button-group__content {
      display: flex;
      flex-wrap: wrap;
      gap: var(--ag-selection-button-group-gap, var(--ag-space-2));
    }
  `;let b=q;m([g({type:String,reflect:!0})],b.prototype,"type");m([g({type:String})],b.prototype,"legend");m([g({type:Boolean,attribute:"legend-hidden"})],b.prototype,"legendHidden");m([g({type:String,reflect:!0})],b.prototype,"theme");m([g({type:String,reflect:!0})],b.prototype,"size");m([g({type:String,reflect:!0})],b.prototype,"shape");m([g({type:String})],b.prototype,"value");m([g({type:Array})],b.prototype,"values");m([g({type:Boolean,reflect:!0})],b.prototype,"disabled");m([g({type:Boolean,reflect:!0})],b.prototype,"required");m([g({attribute:!1})],b.prototype,"validationMessages");m([g({attribute:!1})],b.prototype,"onSelectionChange");m([I()],b.prototype,"_internalSelectedValues");customElements.get("ag-selection-button-group")||customElements.define("ag-selection-button-group",b);const U=["type","name","legend","legend-hidden","theme","size","shape","value","values",".disabled",".required",".validationMessages"],k=V({__name:"VueSelectionButtonGroup",props:{type:{default:"radio"},name:{default:""},legend:{default:""},legendHidden:{type:Boolean,default:!1},theme:{default:""},size:{default:"md"},shape:{default:""},value:{},values:{},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},validationMessages:{}},emits:["selection-change","update:value","update:values"],setup(r,{emit:t}){const n=t,c=p=>{const u=p.detail;n("selection-change",u),u.selectedValues.length<=1&&n("update:value",u.selectedValues[0]||""),n("update:values",u.selectedValues)};return(p,u)=>(f(),S("ag-selection-button-group",z({type:r.type,name:r.name,legend:r.legend,"legend-hidden":r.legendHidden,theme:r.theme,size:r.size,shape:r.shape,value:r.value,values:r.values,".disabled":r.disabled,".required":r.required,".validationMessages":r.validationMessages,onSelectionChange:c},p.$attrs),[_(p.$slots,"default")],48,U))}});var K=Object.defineProperty,v=(r,t,n,c)=>{for(var p=void 0,u=r.length-1,h;u>=0;u--)(h=r[u])&&(p=h(t,n,p)||p);return p&&K(t,n,p),p};const G=class extends E{constructor(){super(),this.value="",this.label="",this.checked=!1,this.disabled=!1,this._type="radio",this._name="",this._theme="",this._size="md",this._shape=""}focus(){var t,n;(n=(t=this.shadowRoot)==null?void 0:t.querySelector(".selection-button"))==null||n.focus()}_handleClick(t){if(t.preventDefault(),this.disabled)return;const n=this._type==="radio"?!0:!this.checked;this.dispatchEvent(new CustomEvent("selection-button-change",{detail:{value:this.value,checked:n},bubbles:!0,composed:!0}))}_handleKeyDown(t){this.disabled||(t.key===" "||t.key==="Enter")&&(t.preventDefault(),this._handleClick(t))}_renderIndicator(){return this._type==="checkbox"?B`
        <svg class="selection-button__indicator-svg" viewBox="0 0 20 20" aria-hidden="true">
          <circle cx="10" cy="10" r="10" fill="currentColor" />
          <path d="M6 10l3 3 5-6" stroke="var(--ag-selection-button-indicator-check, var(--_indicator-bg))"
                stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        </svg>
      `:B`
      <svg class="selection-button__indicator-svg" viewBox="0 0 20 20" aria-hidden="true">
        <circle cx="10" cy="10" r="10" fill="currentColor" />
        <circle cx="10" cy="10" r="4" fill="var(--ag-selection-button-indicator-dot, var(--_indicator-bg))" />
      </svg>
    `}render(){const t=this._theme||"default",n=this._size||"md",c=this._shape||"default",p=["selection-button",`selection-button--${t}`,`selection-button--${n}`,`selection-button--shape-${c}`,this.checked?"selection-button--checked":"",this.disabled?"selection-button--disabled":""].filter(Boolean).join(" ");return B`
      <label
        class="${p}"
        part="ag-selection-button-container"
        tabindex="${this.disabled?-1:0}"
        @click="${this._handleClick}"
        @keydown="${this._handleKeyDown}"
      >
        <input
          type="${this._type}"
          class="selection-button__input"
          part="ag-selection-button-control"
          name="${this._name||R}"
          value="${this.value}"
          .checked="${this.checked}"
          ?disabled="${this.disabled}"
          aria-checked="${this.checked?"true":"false"}"
          tabindex="-1"
        />
        <span class="selection-button__label-sr">${this.label}</span>
        <span class="selection-button__content" part="ag-selection-button-content">
          <slot></slot>
        </span>
        <span class="selection-button__indicator" part="ag-selection-button-indicator" aria-hidden="true">
          ${this._renderIndicator()}
        </span>
      </label>
    `}};G.styles=D`
    :host {
      display: inline-flex;
    }

    .selection-button {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: var(--ag-space-2);
      margin: 0;
      font: inherit;
      cursor: pointer;
      transition:
        background-color var(--ag-motion-fast) var(--ag-fx-ease-ease-out),
        border-color var(--ag-motion-fast) var(--ag-fx-ease-ease-out),
        color var(--ag-motion-fast) var(--ag-fx-ease-ease-out);
    }

    /* ========================================
       SIZE VARIANTS
       ======================================== */

    /* Small */
    .selection-button--sm {
      height: var(--ag-space-9);
      min-height: var(--ag-space-9);
      font-size: var(--ag-font-size-xs);
      padding-inline: calc(var(--ag-space-3) + var(--ag-space-3));
      --_indicator-size: 0.75rem;
      --_indicator-offset: var(--ag-space-1);
    }

    /* Medium (default) */
    .selection-button--md {
      height: var(--ag-space-10);
      min-height: var(--ag-space-10);
      font-size: var(--ag-font-size-sm);
      padding-inline: calc(var(--ag-space-4) + var(--ag-space-4));
      --_indicator-size: 0.875rem;
      --_indicator-offset: var(--ag-space-1);
    }

    /* Large */
    .selection-button--lg {
      height: var(--ag-space-12);
      min-height: var(--ag-space-12);
      font-size: var(--ag-font-size-base);
      padding-inline: calc(var(--ag-space-5) + var(--ag-space-5));
      --_indicator-size: 1rem;
      --_indicator-offset: var(--ag-space-1);
    }

    /* ========================================
       SHAPE VARIANTS
       ======================================== */

    .selection-button--shape-default {
      border-radius: 0;
    }

    .selection-button--shape-rounded {
      border-radius: var(--ag-radius-md);
    }

    .selection-button--shape-capsule {
      border-radius: var(--ag-radius-full);
      /* 0.375rem is between --ag-space-1 (0.25rem) and --ag-space-2 (0.5rem) */
      --_indicator-offset: 0.375rem;
    }

    /* ========================================
       THEME VARIANTS - UNCHECKED STATE
       Border/text uses theme color, transparent background
       ======================================== */

    /* Default (primary) - unchecked */
    .selection-button--default {
      background: transparent;
      border: 1px solid var(--ag-primary);
      color: var(--ag-primary-text);
      --_indicator-bg: var(--ag-primary);
    }

    /* Success - unchecked */
    .selection-button--success {
      background: transparent;
      border: 1px solid var(--ag-success);
      color: var(--ag-success-text);
      --_indicator-bg: var(--ag-success);
    }

    /* Info - unchecked */
    .selection-button--info {
      background: transparent;
      border: 1px solid var(--ag-info);
      color: var(--ag-info-text);
      --_indicator-bg: var(--ag-info);
    }

    /* Warning - unchecked */
    .selection-button--warning {
      background: transparent;
      border: 1px solid var(--ag-warning);
      color: var(--ag-warning-text);
      --_indicator-bg: var(--ag-warning);
    }

    /* Error - unchecked */
    .selection-button--error {
      background: transparent;
      border: 1px solid var(--ag-danger);
      color: var(--ag-danger-text);
      --_indicator-bg: var(--ag-danger);
    }

    /* Monochrome - unchecked */
    .selection-button--monochrome {
      background: transparent;
      border: 1px solid var(--ag-text-primary);
      color: var(--ag-text-primary);
      --_indicator-bg: var(--ag-text-primary);
    }

    /* ========================================
       THEME VARIANTS - CHECKED STATE
       Filled background with white text
       ======================================== */

    /* Default (primary) - checked */
    .selection-button--default.selection-button--checked {
      background: var(--ag-primary);
      border-color: var(--ag-primary);
      color: var(--ag-white);
    }

    /* Success - checked */
    .selection-button--success.selection-button--checked {
      background: var(--ag-success);
      border-color: var(--ag-success);
      color: var(--ag-white);
    }

    /* Info - checked */
    .selection-button--info.selection-button--checked {
      background: var(--ag-info);
      border-color: var(--ag-info);
      color: var(--ag-white);
    }

    /* Warning - checked */
    .selection-button--warning.selection-button--checked {
      background: var(--ag-warning);
      border-color: var(--ag-warning);
      color: var(--ag-neutral-900);
    }

    /* Error - checked */
    .selection-button--error.selection-button--checked {
      background: var(--ag-danger);
      border-color: var(--ag-danger);
      color: var(--ag-white);
    }

    /* Monochrome - checked */
    .selection-button--monochrome.selection-button--checked {
      background: var(--ag-background-primary-inverted);
      border-color: var(--ag-background-primary-inverted);
      color: var(--ag-text-primary-inverted);
    }

    /* ========================================
       HOVER STATES
       ======================================== */

    /* Default - unchecked hover (fill with theme color) */
    .selection-button--default:hover:not(.selection-button--disabled):not(.selection-button--checked) {
      background: var(--ag-primary);
      color: var(--ag-white);
    }

    /* Default - checked hover (darker shade) */
    .selection-button--default.selection-button--checked:hover:not(.selection-button--disabled) {
      background: var(--ag-primary-dark);
      border-color: var(--ag-primary-dark);
    }

    /* Success - unchecked hover */
    .selection-button--success:hover:not(.selection-button--disabled):not(.selection-button--checked) {
      background: var(--ag-success);
      color: var(--ag-white);
    }

    /* Success - checked hover */
    .selection-button--success.selection-button--checked:hover:not(.selection-button--disabled) {
      background: var(--ag-success-dark);
      border-color: var(--ag-success-dark);
    }

    /* Info - unchecked hover */
    .selection-button--info:hover:not(.selection-button--disabled):not(.selection-button--checked) {
      background: var(--ag-info);
      color: var(--ag-white);
    }

    /* Info - checked hover */
    .selection-button--info.selection-button--checked:hover:not(.selection-button--disabled) {
      background: var(--ag-info-dark);
      border-color: var(--ag-info-dark);
    }

    /* Warning - unchecked hover */
    .selection-button--warning:hover:not(.selection-button--disabled):not(.selection-button--checked) {
      background: var(--ag-warning);
      color: var(--ag-neutral-900);
    }

    /* Warning - checked hover */
    .selection-button--warning.selection-button--checked:hover:not(.selection-button--disabled) {
      background: var(--ag-warning-dark);
      border-color: var(--ag-warning-dark);
    }

    /* Error - unchecked hover */
    .selection-button--error:hover:not(.selection-button--disabled):not(.selection-button--checked) {
      background: var(--ag-danger);
      color: var(--ag-white);
    }

    /* Error - checked hover */
    .selection-button--error.selection-button--checked:hover:not(.selection-button--disabled) {
      background: var(--ag-danger-dark);
      border-color: var(--ag-danger-dark);
    }

    /* Monochrome - unchecked hover */
    .selection-button--monochrome:hover:not(.selection-button--disabled):not(.selection-button--checked) {
      background: var(--ag-background-primary-inverted);
      color: var(--ag-text-primary-inverted);
    }

    /* Monochrome - checked hover */
    .selection-button--monochrome.selection-button--checked:hover:not(.selection-button--disabled) {
      background: var(--ag-background-secondary-inverted);
      border-color: var(--ag-background-secondary-inverted);
    }

    /* ========================================
       FOCUS STATE
       ======================================== */

    .selection-button:focus-within:not(.selection-button--disabled) {
      outline: var(--ag-focus-width) solid var(--ag-focus-ring-color, rgba(var(--ag-focus), 0.5));
      outline-offset: var(--ag-focus-offset);
    }

    /* ========================================
       DISABLED STATE
       ======================================== */

    .selection-button--disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }

    /* ========================================
       HIDDEN INPUT (screen reader accessible)
       ======================================== */

    .selection-button__input {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }

    /* ========================================
       INDICATOR (corner badge, top-right)
       ======================================== */

    .selection-button__indicator {
      position: absolute;
      top: var(--_indicator-offset);
      inset-inline-end: var(--_indicator-offset);
      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--_indicator-size);
      height: var(--_indicator-size);
      opacity: 0;
      transform: scale(0.6);
      transition:
        opacity var(--ag-motion-fast) ease-in-out,
        transform var(--ag-motion-fast) var(--ag-fx-ease-ease-out);
    }

    .selection-button--checked .selection-button__indicator {
      opacity: 1;
      transform: scale(1);
    }

    .selection-button__indicator-svg {
      width: 100%;
      height: 100%;
    }

    /* Content wrapper */
    .selection-button__content {
      display: inline-flex;
      align-items: center;
    }

    /* Visually hidden label for screen readers */
    .selection-button__label-sr {
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

    /* ========================================
       REDUCED MOTION
       ======================================== */

    @media (prefers-reduced-motion: reduce) {
      .selection-button,
      .selection-button__indicator {
        transition: none;
      }
    }

    /* ========================================
       HIGH CONTRAST MODE
       ======================================== */

    @media (forced-colors: active) {
      .selection-button--checked {
        outline: 2px solid CanvasText;
      }
      .selection-button__indicator-svg circle {
        fill: CanvasText;
      }
      .selection-button__indicator-svg path,
      .selection-button__indicator-svg circle:last-child {
        stroke: Canvas;
        fill: Canvas;
      }
    }
  `;let y=G;v([g({type:String,reflect:!0})],y.prototype,"value");v([g({type:String})],y.prototype,"label");v([g({type:Boolean,reflect:!0})],y.prototype,"checked");v([g({type:Boolean,reflect:!0})],y.prototype,"disabled");v([g({type:String,attribute:!1})],y.prototype,"_type");v([g({type:String,attribute:!1})],y.prototype,"_name");v([g({type:String,attribute:!1})],y.prototype,"_theme");v([g({type:String,attribute:!1})],y.prototype,"_size");v([g({type:String,attribute:!1})],y.prototype,"_shape");customElements.get("ag-selection-button")||customElements.define("ag-selection-button",y);const Y=["value","label",".checked",".disabled"],d=V({__name:"VueSelectionButton",props:{value:{default:""},label:{default:""},checked:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},setup(r){return(t,n)=>(f(),S("ag-selection-button",z({value:r.value,label:r.label,".checked":r.checked,".disabled":r.disabled},t.$attrs),[_(t.$slots,"default")],48,Y))}}),J={class:"examples-container"},Z={class:"example-section"},Q={class:"selection-output"},X={class:"example-section"},ee={class:"selection-output"},te={class:"example-section"},ne={class:"selection-output"},ie={class:"example-section"},ae={class:"theme-grid"},se={class:"example-section"},le={class:"size-grid"},oe={class:"example-section"},de={class:"shape-grid"},re={class:"example-section"},pe={class:"example-section"},ce=V({__name:"SelectionButtonGroupExamples",setup(r){const t=A(""),n=A([]),c=A([]),p=()=>{c.value=[]},u=F=>{t.value=F.selectedValues[0]||""},h=F=>{n.value=F.selectedValues};return(F,e)=>(f(),S("div",J,[l("section",Z,[e[4]||(e[4]=l("h3",null,"Radio Group (Single Selection)",-1)),i(a(k),{type:"radio",name:"payment-method",legend:"Select payment method",shape:"rounded",onSelectionChange:u},{default:s(()=>[i(a(d),{value:"card",label:"Credit Card"},{default:s(()=>[...e[1]||(e[1]=[o(" Credit Card ",-1)])]),_:1}),i(a(d),{value:"paypal",label:"PayPal"},{default:s(()=>[...e[2]||(e[2]=[o(" PayPal ",-1)])]),_:1}),i(a(d),{value:"bank",label:"Bank Transfer"},{default:s(()=>[...e[3]||(e[3]=[o(" Bank Transfer ",-1)])]),_:1})]),_:1}),l("p",Q,"Selected: "+O(t.value),1)]),l("section",X,[e[9]||(e[9]=l("h3",null,"Checkbox Group — Controlled Clear",-1)),i(a(k),{values:c.value,"onUpdate:values":e[0]||(e[0]=w=>c.value=w),shape:"rounded",type:"checkbox"},{default:s(()=>[i(a(d),{value:"Cheese",label:"Cheese"},{default:s(()=>[...e[5]||(e[5]=[o("Cheese",-1)])]),_:1}),i(a(d),{value:"Mushrooms",label:"Mushrooms"},{default:s(()=>[...e[6]||(e[6]=[o("Mushrooms",-1)])]),_:1}),i(a(d),{value:"Olives",label:"Olives"},{default:s(()=>[...e[7]||(e[7]=[o("Olives",-1)])]),_:1})]),_:1},8,["values"]),l("p",ee,[i(a(L),{class:"mie3",shape:"rounded",onClick:p},{default:s(()=>[...e[8]||(e[8]=[o("Clear",-1)])]),_:1}),o(" Selected: "+O(c.value.join(", ")||"None"),1)])]),l("section",te,[e[14]||(e[14]=l("h3",null,"Checkbox Group (Multiple Selection)",-1)),i(a(k),{type:"checkbox",name:"toppings",legend:"Select toppings",shape:"rounded",onSelectionChange:h},{default:s(()=>[i(a(d),{value:"cheese",label:"Extra Cheese"},{default:s(()=>[...e[10]||(e[10]=[o(" Extra Cheese ",-1)])]),_:1}),i(a(d),{value:"pepperoni",label:"Pepperoni"},{default:s(()=>[...e[11]||(e[11]=[o(" Pepperoni ",-1)])]),_:1}),i(a(d),{value:"mushrooms",label:"Mushrooms"},{default:s(()=>[...e[12]||(e[12]=[o(" Mushrooms ",-1)])]),_:1}),i(a(d),{value:"olives",label:"Olives"},{default:s(()=>[...e[13]||(e[13]=[o(" Olives ",-1)])]),_:1})]),_:1}),l("p",ne,"Selected: "+O(n.value.join(", ")||"None"),1)]),l("section",ie,[e[33]||(e[33]=l("h3",null,"Theme Variants",-1)),l("div",ae,[l("div",null,[e[17]||(e[17]=l("p",{class:"theme-label"},"Default (Primary)",-1)),i(a(k),{type:"radio",name:"theme-default",legend:"Default theme","legend-hidden":"",shape:"rounded"},{default:s(()=>[i(a(d),{value:"a",label:"Option A"},{default:s(()=>[...e[15]||(e[15]=[o("A",-1)])]),_:1}),i(a(d),{value:"b",label:"Option B"},{default:s(()=>[...e[16]||(e[16]=[o("B",-1)])]),_:1})]),_:1})]),l("div",null,[e[20]||(e[20]=l("p",{class:"theme-label"},"Success",-1)),i(a(k),{type:"radio",name:"theme-success",legend:"Success theme","legend-hidden":"",theme:"success",shape:"rounded"},{default:s(()=>[i(a(d),{value:"a",label:"Option A"},{default:s(()=>[...e[18]||(e[18]=[o("A",-1)])]),_:1}),i(a(d),{value:"b",label:"Option B"},{default:s(()=>[...e[19]||(e[19]=[o("B",-1)])]),_:1})]),_:1})]),l("div",null,[e[23]||(e[23]=l("p",{class:"theme-label"},"Info",-1)),i(a(k),{type:"radio",name:"theme-info",legend:"Info theme","legend-hidden":"",theme:"info",shape:"rounded"},{default:s(()=>[i(a(d),{value:"a",label:"Option A"},{default:s(()=>[...e[21]||(e[21]=[o("A",-1)])]),_:1}),i(a(d),{value:"b",label:"Option B"},{default:s(()=>[...e[22]||(e[22]=[o("B",-1)])]),_:1})]),_:1})]),l("div",null,[e[26]||(e[26]=l("p",{class:"theme-label"},"Warning",-1)),i(a(k),{type:"radio",name:"theme-warning",legend:"Warning theme","legend-hidden":"",theme:"warning",shape:"rounded"},{default:s(()=>[i(a(d),{value:"a",label:"Option A"},{default:s(()=>[...e[24]||(e[24]=[o("A",-1)])]),_:1}),i(a(d),{value:"b",label:"Option B"},{default:s(()=>[...e[25]||(e[25]=[o("B",-1)])]),_:1})]),_:1})]),l("div",null,[e[29]||(e[29]=l("p",{class:"theme-label"},"Error",-1)),i(a(k),{type:"radio",name:"theme-error",legend:"Error theme","legend-hidden":"",theme:"error",shape:"rounded"},{default:s(()=>[i(a(d),{value:"a",label:"Option A"},{default:s(()=>[...e[27]||(e[27]=[o("A",-1)])]),_:1}),i(a(d),{value:"b",label:"Option B"},{default:s(()=>[...e[28]||(e[28]=[o("B",-1)])]),_:1})]),_:1})]),l("div",null,[e[32]||(e[32]=l("p",{class:"theme-label"},"Monochrome",-1)),i(a(k),{type:"radio",name:"theme-monochrome",legend:"Monochrome theme","legend-hidden":"",theme:"monochrome",shape:"rounded"},{default:s(()=>[i(a(d),{value:"a",label:"Option A"},{default:s(()=>[...e[30]||(e[30]=[o("A",-1)])]),_:1}),i(a(d),{value:"b",label:"Option B"},{default:s(()=>[...e[31]||(e[31]=[o("B",-1)])]),_:1})]),_:1})])])]),l("section",se,[e[43]||(e[43]=l("h3",null,"Size Variants",-1)),l("div",le,[l("div",null,[e[36]||(e[36]=l("p",{class:"size-label"},"Small (sm)",-1)),i(a(k),{type:"radio",name:"size-sm",legend:"Small size","legend-hidden":"",size:"sm",shape:"rounded"},{default:s(()=>[i(a(d),{value:"a",label:"Option A"},{default:s(()=>[...e[34]||(e[34]=[o("Option A",-1)])]),_:1}),i(a(d),{value:"b",label:"Option B"},{default:s(()=>[...e[35]||(e[35]=[o("Option B",-1)])]),_:1})]),_:1})]),l("div",null,[e[39]||(e[39]=l("p",{class:"size-label"},"Medium (md) - Default",-1)),i(a(k),{type:"radio",name:"size-md",legend:"Medium size","legend-hidden":"",size:"md",shape:"rounded"},{default:s(()=>[i(a(d),{value:"a",label:"Option A"},{default:s(()=>[...e[37]||(e[37]=[o("Option A",-1)])]),_:1}),i(a(d),{value:"b",label:"Option B"},{default:s(()=>[...e[38]||(e[38]=[o("Option B",-1)])]),_:1})]),_:1})]),l("div",null,[e[42]||(e[42]=l("p",{class:"size-label"},"Large (lg)",-1)),i(a(k),{type:"radio",name:"size-lg",legend:"Large size","legend-hidden":"",size:"lg",shape:"rounded"},{default:s(()=>[i(a(d),{value:"a",label:"Option A"},{default:s(()=>[...e[40]||(e[40]=[o("Option A",-1)])]),_:1}),i(a(d),{value:"b",label:"Option B"},{default:s(()=>[...e[41]||(e[41]=[o("Option B",-1)])]),_:1})]),_:1})])])]),l("section",oe,[e[53]||(e[53]=l("h3",null,"Shape Variants",-1)),l("div",de,[l("div",null,[e[46]||(e[46]=l("p",{class:"shape-label"},"Default (rectangular)",-1)),i(a(k),{type:"radio",name:"shape-default",legend:"Default shape","legend-hidden":""},{default:s(()=>[i(a(d),{value:"a",label:"Option A"},{default:s(()=>[...e[44]||(e[44]=[o("Option A",-1)])]),_:1}),i(a(d),{value:"b",label:"Option B"},{default:s(()=>[...e[45]||(e[45]=[o("Option B",-1)])]),_:1})]),_:1})]),l("div",null,[e[49]||(e[49]=l("p",{class:"shape-label"},"Rounded",-1)),i(a(k),{type:"radio",name:"shape-rounded",legend:"Rounded shape","legend-hidden":"",shape:"rounded"},{default:s(()=>[i(a(d),{value:"a",label:"Option A"},{default:s(()=>[...e[47]||(e[47]=[o("Option A",-1)])]),_:1}),i(a(d),{value:"b",label:"Option B"},{default:s(()=>[...e[48]||(e[48]=[o("Option B",-1)])]),_:1})]),_:1})]),l("div",null,[e[52]||(e[52]=l("p",{class:"shape-label"},"Capsule (pill)",-1)),i(a(k),{type:"radio",name:"shape-capsule",legend:"Capsule shape","legend-hidden":"",shape:"capsule"},{default:s(()=>[i(a(d),{value:"a",label:"Option A"},{default:s(()=>[...e[50]||(e[50]=[o("Option A",-1)])]),_:1}),i(a(d),{value:"b",label:"Option B"},{default:s(()=>[...e[51]||(e[51]=[o("Option B",-1)])]),_:1})]),_:1})])])]),l("section",re,[e[57]||(e[57]=l("h3",null,"Disabled State",-1)),i(a(k),{type:"radio",name:"disabled-example",legend:"Disabled group",shape:"rounded",disabled:""},{default:s(()=>[i(a(d),{value:"a",label:"Option A"},{default:s(()=>[...e[54]||(e[54]=[o("Option A",-1)])]),_:1}),i(a(d),{value:"b",label:"Option B"},{default:s(()=>[...e[55]||(e[55]=[o("Option B",-1)])]),_:1}),i(a(d),{value:"c",label:"Option C"},{default:s(()=>[...e[56]||(e[56]=[o("Option C",-1)])]),_:1})]),_:1})]),l("section",pe,[e[63]||(e[63]=l("h3",null,"Disabled Individual Button State",-1)),i(a(k),{type:"radio",name:"disabled-button-example",legend:"Disabled individual",shape:"rounded"},{default:s(()=>[i(a(d),{value:"a",label:"Option A"},{default:s(()=>[...e[58]||(e[58]=[o("Option A",-1)])]),_:1}),i(a(d),{disabled:"",value:"b",label:"Option B"},{default:s(()=>[...e[59]||(e[59]=[o("Option B",-1)])]),_:1}),i(a(d),{value:"c",label:"Option C"},{default:s(()=>[...e[60]||(e[60]=[o("Option C",-1)])]),_:1}),i(a(d),{disabled:"",value:"d",label:"Option D"},{default:s(()=>[...e[61]||(e[61]=[o("Option D",-1)])]),_:1}),i(a(d),{value:"e",label:"Option E"},{default:s(()=>[...e[62]||(e[62]=[o("Option E",-1)])]),_:1})]),_:1})])]))}}),ue=N(ce,[["__scopeId","data-v-c2d4e253"]]);class x extends E{constructor(){super(),this.radioSelection="",this.checkboxSelection=[]}_handleRadioChange(t){this.radioSelection=t.detail.selectedValues[0]||""}_handleCheckboxChange(t){this.checkboxSelection=[...t.detail.selectedValues]}render(){return B`
      <div class="examples-container">
        <!-- Radio Group -->
        <section class="example-section">
          <h3>Radio Group (Single Selection)</h3>
          <ag-selection-button-group
            type="radio"
            name="payment-method"
            legend="Select payment method"
            shape="rounded"
            @selection-change=${this._handleRadioChange}
          >
            <ag-selection-button value="card" label="Credit Card">
              Credit Card
            </ag-selection-button>
            <ag-selection-button value="paypal" label="PayPal">
              PayPal
            </ag-selection-button>
            <ag-selection-button value="bank" label="Bank Transfer">
              Bank Transfer
            </ag-selection-button>
          </ag-selection-button-group>
          <p class="selection-output">Selected: ${this.radioSelection||"None"}</p>
        </section>

        <!-- Checkbox Group -->
        <section class="example-section">
          <h3>Checkbox Group (Multiple Selection)</h3>
          <ag-selection-button-group
            type="checkbox"
            name="toppings"
            legend="Select toppings"
            shape="rounded"
            @selection-change=${this._handleCheckboxChange}
          >
            <ag-selection-button value="cheese" label="Extra Cheese">
              Extra Cheese
            </ag-selection-button>
            <ag-selection-button value="pepperoni" label="Pepperoni">
              Pepperoni
            </ag-selection-button>
            <ag-selection-button value="mushrooms" label="Mushrooms">
              Mushrooms
            </ag-selection-button>
            <ag-selection-button value="olives" label="Olives">
              Olives
            </ag-selection-button>
          </ag-selection-button-group>
          <p class="selection-output">Selected: ${this.checkboxSelection.join(", ")||"None"}</p>
        </section>

        <!-- Theme Variants -->
        <section class="example-section">
          <h3>Theme Variants</h3>
          <div class="theme-grid">
            <div>
              <p class="theme-label">Default (Primary)</p>
              <ag-selection-button-group
                type="radio"
                name="theme-default"
                legend="Default theme"
                legend-hidden
                shape="rounded"
              >
                <ag-selection-button value="a" label="Option A">A</ag-selection-button>
                <ag-selection-button value="b" label="Option B">B</ag-selection-button>
              </ag-selection-button-group>
            </div>
            <div>
              <p class="theme-label">Success</p>
              <ag-selection-button-group
                type="radio"
                name="theme-success"
                legend="Success theme"
                legend-hidden
                theme="success"
                shape="rounded"
              >
                <ag-selection-button value="a" label="Option A">A</ag-selection-button>
                <ag-selection-button value="b" label="Option B">B</ag-selection-button>
              </ag-selection-button-group>
            </div>
            <div>
              <p class="theme-label">Info</p>
              <ag-selection-button-group
                type="radio"
                name="theme-info"
                legend="Info theme"
                legend-hidden
                theme="info"
                shape="rounded"
              >
                <ag-selection-button value="a" label="Option A">A</ag-selection-button>
                <ag-selection-button value="b" label="Option B">B</ag-selection-button>
              </ag-selection-button-group>
            </div>
            <div>
              <p class="theme-label">Warning</p>
              <ag-selection-button-group
                type="radio"
                name="theme-warning"
                legend="Warning theme"
                legend-hidden
                theme="warning"
                shape="rounded"
              >
                <ag-selection-button value="a" label="Option A">A</ag-selection-button>
                <ag-selection-button value="b" label="Option B">B</ag-selection-button>
              </ag-selection-button-group>
            </div>
            <div>
              <p class="theme-label">Error</p>
              <ag-selection-button-group
                type="radio"
                name="theme-error"
                legend="Error theme"
                legend-hidden
                theme="error"
                shape="rounded"
              >
                <ag-selection-button value="a" label="Option A">A</ag-selection-button>
                <ag-selection-button value="b" label="Option B">B</ag-selection-button>
              </ag-selection-button-group>
            </div>
            <div>
              <p class="theme-label">Monochrome</p>
              <ag-selection-button-group
                type="radio"
                name="theme-monochrome"
                legend="Monochrome theme"
                legend-hidden
                theme="monochrome"
                shape="rounded"
              >
                <ag-selection-button value="a" label="Option A">A</ag-selection-button>
                <ag-selection-button value="b" label="Option B">B</ag-selection-button>
              </ag-selection-button-group>
            </div>
          </div>
        </section>

        <!-- Size Variants -->
        <section class="example-section">
          <h3>Size Variants</h3>
          <div class="size-grid">
            <div>
              <p class="size-label">Small (sm)</p>
              <ag-selection-button-group
                type="radio"
                name="size-sm"
                legend="Small size"
                legend-hidden
                size="sm"
                shape="rounded"
              >
                <ag-selection-button value="a" label="Option A">Option A</ag-selection-button>
                <ag-selection-button value="b" label="Option B">Option B</ag-selection-button>
              </ag-selection-button-group>
            </div>
            <div>
              <p class="size-label">Medium (md) - Default</p>
              <ag-selection-button-group
                type="radio"
                name="size-md"
                legend="Medium size"
                legend-hidden
                size="md"
                shape="rounded"
              >
                <ag-selection-button value="a" label="Option A">Option A</ag-selection-button>
                <ag-selection-button value="b" label="Option B">Option B</ag-selection-button>
              </ag-selection-button-group>
            </div>
            <div>
              <p class="size-label">Large (lg)</p>
              <ag-selection-button-group
                type="radio"
                name="size-lg"
                legend="Large size"
                legend-hidden
                size="lg"
                shape="rounded"
              >
                <ag-selection-button value="a" label="Option A">Option A</ag-selection-button>
                <ag-selection-button value="b" label="Option B">Option B</ag-selection-button>
              </ag-selection-button-group>
            </div>
          </div>
        </section>

        <!-- Shape Variants -->
        <section class="example-section">
          <h3>Shape Variants</h3>
          <div class="shape-grid">
            <div>
              <p class="shape-label">Default (rectangular)</p>
              <ag-selection-button-group
                type="radio"
                name="shape-default"
                legend="Default shape"
                legend-hidden
              >
                <ag-selection-button value="a" label="Option A">Option A</ag-selection-button>
                <ag-selection-button value="b" label="Option B">Option B</ag-selection-button>
              </ag-selection-button-group>
            </div>
            <div>
              <p class="shape-label">Rounded</p>
              <ag-selection-button-group
                type="radio"
                name="shape-rounded"
                legend="Rounded shape"
                legend-hidden
                shape="rounded"
              >
                <ag-selection-button value="a" label="Option A">Option A</ag-selection-button>
                <ag-selection-button value="b" label="Option B">Option B</ag-selection-button>
              </ag-selection-button-group>
            </div>
            <div>
              <p class="shape-label">Capsule (pill)</p>
              <ag-selection-button-group
                type="radio"
                name="shape-capsule"
                legend="Capsule shape"
                legend-hidden
                shape="capsule"
              >
                <ag-selection-button value="a" label="Option A">Option A</ag-selection-button>
                <ag-selection-button value="b" label="Option B">Option B</ag-selection-button>
              </ag-selection-button-group>
            </div>
          </div>
        </section>
        <!-- Disabled Group State -->
        <section class="example-section">
          <h3>Disabled Group State</h3>
          <ag-selection-button-group
            type="radio"
            name="disabled-group-example"
            legend="Disabled group"
            shape="rounded"
            disabled
          >
            <ag-selection-button value="a" label="Option A">Option A</ag-selection-button>
            <ag-selection-button value="b" label="Option B">Option B</ag-selection-button>
            <ag-selection-button value="c" label="Option C">Option C</ag-selection-button>
          </ag-selection-button-group>
        </section>
        <!-- Disabled Buttons State -->
        <section class="example-section">
          <h3>Disabled Individual Buttons State</h3>
          <ag-selection-button-group
            type="radio"
            name="disabled-buttons-example"
            legend="Disabled individual buttons"
            shape="rounded"
          >
            <ag-selection-button value="a" label="Option A">Option A</ag-selection-button>
            <ag-selection-button disabled value="b" label="Option B">Option B</ag-selection-button>
            <ag-selection-button value="c" label="Option C">Option C</ag-selection-button>
            <ag-selection-button disabled value="d" label="Option D">Option D</ag-selection-button>
            <ag-selection-button value="e" label="Option E">Option E</ag-selection-button>
          </ag-selection-button-group>
        </section>
      </div>
    `}}C(x,"styles",D`
    :host {
      display: block;
    }

    .examples-container {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .example-section {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .example-section h3 {
      margin: 0;
      font-size: 1rem;
      font-weight: 600;
    }

    .selection-output {
      margin: 0;
      font-size: 0.875rem;
      color: var(--vp-c-text-2, #666);
    }

    .theme-grid,
    .size-grid,
    .shape-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
    }

    .theme-label,
    .size-label,
    .shape-label {
      margin: 0 0 0.5rem 0;
      font-size: 0.875rem;
      color: var(--vp-c-text-2, #666);
    }
  `),C(x,"properties",{radioSelection:{type:String},checkboxSelection:{type:Array}});customElements.define("selection-button-group-lit-examples",x);const he=`<template>
  <div class="examples-container">
    <!-- Radio Group -->
    <section class="example-section">
      <h3>Radio Group (Single Selection)</h3>
      <VueSelectionButtonGroup
        type="radio"
        name="payment-method"
        legend="Select payment method"
        shape="rounded"
        @selection-change="handleChange"
      >
        <VueSelectionButton value="card" label="Credit Card">
          Credit Card
        </VueSelectionButton>
        <VueSelectionButton value="paypal" label="PayPal">
          PayPal
        </VueSelectionButton>
        <VueSelectionButton value="bank" label="Bank Transfer">
          Bank Transfer
        </VueSelectionButton>
      </VueSelectionButtonGroup>
      <p class="selection-output">Selected: {{ radioSelection }}</p>
    </section>

    <!-- Checkbox Group - Bugfix https://github.com/AgnosticUI/agnosticui/issues/493 -->
    <section class="example-section">
      <h3>Checkbox Group — Controlled Clear</h3>
      <VueSelectionButtonGroup
        v-model:values="activeFilter"
        shape="rounded"
        type="checkbox"
        >
        <VueSelectionButton value="Cheese" label="Cheese">Cheese</VueSelectionButton>
        <VueSelectionButton value="Mushrooms" label="Mushrooms">Mushrooms</VueSelectionButton>
        <VueSelectionButton value="Olives" label="Olives">Olives</VueSelectionButton>
      </VueSelectionButtonGroup>
      <p class="selection-output">
        <VueButton class="mie3" shape="rounded" @click="handleClear">Clear</VueButton>
        Selected: {{ activeFilter.join(', ') || 'None' }}
      </p>
    </section>

    <!-- Checkbox Group -->
    <section class="example-section">
      <h3>Checkbox Group (Multiple Selection)</h3>
      <VueSelectionButtonGroup
        type="checkbox"
        name="toppings"
        legend="Select toppings"
        shape="rounded"
        @selection-change="handleCheckboxChange"
      >
        <VueSelectionButton value="cheese" label="Extra Cheese">
          Extra Cheese
        </VueSelectionButton>
        <VueSelectionButton value="pepperoni" label="Pepperoni">
          Pepperoni
        </VueSelectionButton>
        <VueSelectionButton value="mushrooms" label="Mushrooms">
          Mushrooms
        </VueSelectionButton>
        <VueSelectionButton value="olives" label="Olives">
          Olives
        </VueSelectionButton>
      </VueSelectionButtonGroup>
      <p class="selection-output">Selected: {{ checkboxSelection.join(', ') || 'None' }}</p>
    </section>

    <!-- Theme Variants -->
    <section class="example-section">
      <h3>Theme Variants</h3>
      <div class="theme-grid">
        <div>
          <p class="theme-label">Default (Primary)</p>
          <VueSelectionButtonGroup
            type="radio"
            name="theme-default"
            legend="Default theme"
            legend-hidden
            shape="rounded"
          >
            <VueSelectionButton value="a" label="Option A">A</VueSelectionButton>
            <VueSelectionButton value="b" label="Option B">B</VueSelectionButton>
          </VueSelectionButtonGroup>
        </div>
        <div>
          <p class="theme-label">Success</p>
          <VueSelectionButtonGroup
            type="radio"
            name="theme-success"
            legend="Success theme"
            legend-hidden
            theme="success"
            shape="rounded"
          >
            <VueSelectionButton value="a" label="Option A">A</VueSelectionButton>
            <VueSelectionButton value="b" label="Option B">B</VueSelectionButton>
          </VueSelectionButtonGroup>
        </div>
        <div>
          <p class="theme-label">Info</p>
          <VueSelectionButtonGroup
            type="radio"
            name="theme-info"
            legend="Info theme"
            legend-hidden
            theme="info"
            shape="rounded"
          >
            <VueSelectionButton value="a" label="Option A">A</VueSelectionButton>
            <VueSelectionButton value="b" label="Option B">B</VueSelectionButton>
          </VueSelectionButtonGroup>
        </div>
        <div>
          <p class="theme-label">Warning</p>
          <VueSelectionButtonGroup
            type="radio"
            name="theme-warning"
            legend="Warning theme"
            legend-hidden
            theme="warning"
            shape="rounded"
          >
            <VueSelectionButton value="a" label="Option A">A</VueSelectionButton>
            <VueSelectionButton value="b" label="Option B">B</VueSelectionButton>
          </VueSelectionButtonGroup>
        </div>
        <div>
          <p class="theme-label">Error</p>
          <VueSelectionButtonGroup
            type="radio"
            name="theme-error"
            legend="Error theme"
            legend-hidden
            theme="error"
            shape="rounded"
          >
            <VueSelectionButton value="a" label="Option A">A</VueSelectionButton>
            <VueSelectionButton value="b" label="Option B">B</VueSelectionButton>
          </VueSelectionButtonGroup>
        </div>
        <div>
          <p class="theme-label">Monochrome</p>
          <VueSelectionButtonGroup
            type="radio"
            name="theme-monochrome"
            legend="Monochrome theme"
            legend-hidden
            theme="monochrome"
            shape="rounded"
          >
            <VueSelectionButton value="a" label="Option A">A</VueSelectionButton>
            <VueSelectionButton value="b" label="Option B">B</VueSelectionButton>
          </VueSelectionButtonGroup>
        </div>
      </div>
    </section>

    <!-- Size Variants -->
    <section class="example-section">
      <h3>Size Variants</h3>
      <div class="size-grid">
        <div>
          <p class="size-label">Small (sm)</p>
          <VueSelectionButtonGroup
            type="radio"
            name="size-sm"
            legend="Small size"
            legend-hidden
            size="sm"
            shape="rounded"
          >
            <VueSelectionButton value="a" label="Option A">Option A</VueSelectionButton>
            <VueSelectionButton value="b" label="Option B">Option B</VueSelectionButton>
          </VueSelectionButtonGroup>
        </div>
        <div>
          <p class="size-label">Medium (md) - Default</p>
          <VueSelectionButtonGroup
            type="radio"
            name="size-md"
            legend="Medium size"
            legend-hidden
            size="md"
            shape="rounded"
          >
            <VueSelectionButton value="a" label="Option A">Option A</VueSelectionButton>
            <VueSelectionButton value="b" label="Option B">Option B</VueSelectionButton>
          </VueSelectionButtonGroup>
        </div>
        <div>
          <p class="size-label">Large (lg)</p>
          <VueSelectionButtonGroup
            type="radio"
            name="size-lg"
            legend="Large size"
            legend-hidden
            size="lg"
            shape="rounded"
          >
            <VueSelectionButton value="a" label="Option A">Option A</VueSelectionButton>
            <VueSelectionButton value="b" label="Option B">Option B</VueSelectionButton>
          </VueSelectionButtonGroup>
        </div>
      </div>
    </section>

    <!-- Shape Variants -->
    <section class="example-section">
      <h3>Shape Variants</h3>
      <div class="shape-grid">
        <div>
          <p class="shape-label">Default (rectangular)</p>
          <VueSelectionButtonGroup
            type="radio"
            name="shape-default"
            legend="Default shape"
            legend-hidden
          >
            <VueSelectionButton value="a" label="Option A">Option A</VueSelectionButton>
            <VueSelectionButton value="b" label="Option B">Option B</VueSelectionButton>
          </VueSelectionButtonGroup>
        </div>
        <div>
          <p class="shape-label">Rounded</p>
          <VueSelectionButtonGroup
            type="radio"
            name="shape-rounded"
            legend="Rounded shape"
            legend-hidden
            shape="rounded"
          >
            <VueSelectionButton value="a" label="Option A">Option A</VueSelectionButton>
            <VueSelectionButton value="b" label="Option B">Option B</VueSelectionButton>
          </VueSelectionButtonGroup>
        </div>
        <div>
          <p class="shape-label">Capsule (pill)</p>
          <VueSelectionButtonGroup
            type="radio"
            name="shape-capsule"
            legend="Capsule shape"
            legend-hidden
            shape="capsule"
          >
            <VueSelectionButton value="a" label="Option A">Option A</VueSelectionButton>
            <VueSelectionButton value="b" label="Option B">Option B</VueSelectionButton>
          </VueSelectionButtonGroup>
        </div>
      </div>
    </section>

    <!-- Disabled State -->
    <section class="example-section">
      <h3>Disabled State</h3>
      <VueSelectionButtonGroup
        type="radio"
        name="disabled-example"
        legend="Disabled group"
        shape="rounded"
        disabled
      >
        <VueSelectionButton value="a" label="Option A">Option A</VueSelectionButton>
        <VueSelectionButton value="b" label="Option B">Option B</VueSelectionButton>
        <VueSelectionButton value="c" label="Option C">Option C</VueSelectionButton>
      </VueSelectionButtonGroup>
    </section>
    <section class="example-section">
      <h3>Disabled Individual Button State</h3>
      <VueSelectionButtonGroup
        type="radio"
        name="disabled-button-example"
        legend="Disabled individual"
        shape="rounded"
      >
        <VueSelectionButton value="a" label="Option A">Option A</VueSelectionButton>
        <VueSelectionButton disabled value="b" label="Option B">Option B</VueSelectionButton>
        <VueSelectionButton value="c" label="Option C">Option C</VueSelectionButton>
        <VueSelectionButton disabled value="d" label="Option D">Option D</VueSelectionButton>
        <VueSelectionButton value="e" label="Option E">Option E</VueSelectionButton>
      </VueSelectionButtonGroup>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { VueSelectionButtonGroup, type SelectionButtonChangeEventDetail } from 'agnosticui-core/selection-button-group/vue';
import { VueSelectionButton } from 'agnosticui-core/selection-button/vue';
import { VueButton } from "agnosticui-core/button/vue";
const radioSelection = ref('');
const checkboxSelection = ref<string[]>([]);
const activeFilter = ref<string[]>([]);

const handleClear = () => {
  activeFilter.value = [];
};

const handleChange = (detail: SelectionButtonChangeEventDetail) => {
  radioSelection.value = detail.selectedValues[0] || '';
};

const handleCheckboxChange = (detail: SelectionButtonChangeEventDetail) => {
  checkboxSelection.value = detail.selectedValues;
};

<\/script>

<style scoped>
.examples-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.example-section {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.example-section h3 {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
}

.selection-output {
  margin: 0;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
}

.theme-grid,
.size-grid,
.shape-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.theme-label,
.size-label,
.shape-label {
  margin: 0 0 0.5rem 0;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
}
</style>
`,ge=`import { LitElement, html, css } from 'lit';
import 'agnosticui-core/selection-button-group';
import 'agnosticui-core/selection-button';

export class SelectionButtonGroupLitExamples extends LitElement {
  static styles = css\`
    :host {
      display: block;
    }

    .examples-container {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .example-section {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .example-section h3 {
      margin: 0;
      font-size: 1rem;
      font-weight: 600;
    }

    .selection-output {
      margin: 0;
      font-size: 0.875rem;
      color: var(--vp-c-text-2, #666);
    }

    .theme-grid,
    .size-grid,
    .shape-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
    }

    .theme-label,
    .size-label,
    .shape-label {
      margin: 0 0 0.5rem 0;
      font-size: 0.875rem;
      color: var(--vp-c-text-2, #666);
    }
  \`;

  static properties = {
    radioSelection: { type: String },
    checkboxSelection: { type: Array },
  };

  constructor() {
    super();
    this.radioSelection = '';
    this.checkboxSelection = [];
  }

  _handleRadioChange(e) {
    this.radioSelection = e.detail.selectedValues[0] || '';
  }

  _handleCheckboxChange(e) {
    this.checkboxSelection = [...e.detail.selectedValues];
  }

  render() {
    return html\`
      <div class="examples-container">
        <!-- Radio Group -->
        <section class="example-section">
          <h3>Radio Group (Single Selection)</h3>
          <ag-selection-button-group
            type="radio"
            name="payment-method"
            legend="Select payment method"
            shape="rounded"
            @selection-change=\${this._handleRadioChange}
          >
            <ag-selection-button value="card" label="Credit Card">
              Credit Card
            </ag-selection-button>
            <ag-selection-button value="paypal" label="PayPal">
              PayPal
            </ag-selection-button>
            <ag-selection-button value="bank" label="Bank Transfer">
              Bank Transfer
            </ag-selection-button>
          </ag-selection-button-group>
          <p class="selection-output">Selected: \${this.radioSelection || 'None'}</p>
        </section>

        <!-- Checkbox Group -->
        <section class="example-section">
          <h3>Checkbox Group (Multiple Selection)</h3>
          <ag-selection-button-group
            type="checkbox"
            name="toppings"
            legend="Select toppings"
            shape="rounded"
            @selection-change=\${this._handleCheckboxChange}
          >
            <ag-selection-button value="cheese" label="Extra Cheese">
              Extra Cheese
            </ag-selection-button>
            <ag-selection-button value="pepperoni" label="Pepperoni">
              Pepperoni
            </ag-selection-button>
            <ag-selection-button value="mushrooms" label="Mushrooms">
              Mushrooms
            </ag-selection-button>
            <ag-selection-button value="olives" label="Olives">
              Olives
            </ag-selection-button>
          </ag-selection-button-group>
          <p class="selection-output">Selected: \${this.checkboxSelection.join(', ') || 'None'}</p>
        </section>

        <!-- Theme Variants -->
        <section class="example-section">
          <h3>Theme Variants</h3>
          <div class="theme-grid">
            <div>
              <p class="theme-label">Default (Primary)</p>
              <ag-selection-button-group
                type="radio"
                name="theme-default"
                legend="Default theme"
                legend-hidden
                shape="rounded"
              >
                <ag-selection-button value="a" label="Option A">A</ag-selection-button>
                <ag-selection-button value="b" label="Option B">B</ag-selection-button>
              </ag-selection-button-group>
            </div>
            <div>
              <p class="theme-label">Success</p>
              <ag-selection-button-group
                type="radio"
                name="theme-success"
                legend="Success theme"
                legend-hidden
                theme="success"
                shape="rounded"
              >
                <ag-selection-button value="a" label="Option A">A</ag-selection-button>
                <ag-selection-button value="b" label="Option B">B</ag-selection-button>
              </ag-selection-button-group>
            </div>
            <div>
              <p class="theme-label">Info</p>
              <ag-selection-button-group
                type="radio"
                name="theme-info"
                legend="Info theme"
                legend-hidden
                theme="info"
                shape="rounded"
              >
                <ag-selection-button value="a" label="Option A">A</ag-selection-button>
                <ag-selection-button value="b" label="Option B">B</ag-selection-button>
              </ag-selection-button-group>
            </div>
            <div>
              <p class="theme-label">Warning</p>
              <ag-selection-button-group
                type="radio"
                name="theme-warning"
                legend="Warning theme"
                legend-hidden
                theme="warning"
                shape="rounded"
              >
                <ag-selection-button value="a" label="Option A">A</ag-selection-button>
                <ag-selection-button value="b" label="Option B">B</ag-selection-button>
              </ag-selection-button-group>
            </div>
            <div>
              <p class="theme-label">Error</p>
              <ag-selection-button-group
                type="radio"
                name="theme-error"
                legend="Error theme"
                legend-hidden
                theme="error"
                shape="rounded"
              >
                <ag-selection-button value="a" label="Option A">A</ag-selection-button>
                <ag-selection-button value="b" label="Option B">B</ag-selection-button>
              </ag-selection-button-group>
            </div>
            <div>
              <p class="theme-label">Monochrome</p>
              <ag-selection-button-group
                type="radio"
                name="theme-monochrome"
                legend="Monochrome theme"
                legend-hidden
                theme="monochrome"
                shape="rounded"
              >
                <ag-selection-button value="a" label="Option A">A</ag-selection-button>
                <ag-selection-button value="b" label="Option B">B</ag-selection-button>
              </ag-selection-button-group>
            </div>
          </div>
        </section>

        <!-- Size Variants -->
        <section class="example-section">
          <h3>Size Variants</h3>
          <div class="size-grid">
            <div>
              <p class="size-label">Small (sm)</p>
              <ag-selection-button-group
                type="radio"
                name="size-sm"
                legend="Small size"
                legend-hidden
                size="sm"
                shape="rounded"
              >
                <ag-selection-button value="a" label="Option A">Option A</ag-selection-button>
                <ag-selection-button value="b" label="Option B">Option B</ag-selection-button>
              </ag-selection-button-group>
            </div>
            <div>
              <p class="size-label">Medium (md) - Default</p>
              <ag-selection-button-group
                type="radio"
                name="size-md"
                legend="Medium size"
                legend-hidden
                size="md"
                shape="rounded"
              >
                <ag-selection-button value="a" label="Option A">Option A</ag-selection-button>
                <ag-selection-button value="b" label="Option B">Option B</ag-selection-button>
              </ag-selection-button-group>
            </div>
            <div>
              <p class="size-label">Large (lg)</p>
              <ag-selection-button-group
                type="radio"
                name="size-lg"
                legend="Large size"
                legend-hidden
                size="lg"
                shape="rounded"
              >
                <ag-selection-button value="a" label="Option A">Option A</ag-selection-button>
                <ag-selection-button value="b" label="Option B">Option B</ag-selection-button>
              </ag-selection-button-group>
            </div>
          </div>
        </section>

        <!-- Shape Variants -->
        <section class="example-section">
          <h3>Shape Variants</h3>
          <div class="shape-grid">
            <div>
              <p class="shape-label">Default (rectangular)</p>
              <ag-selection-button-group
                type="radio"
                name="shape-default"
                legend="Default shape"
                legend-hidden
              >
                <ag-selection-button value="a" label="Option A">Option A</ag-selection-button>
                <ag-selection-button value="b" label="Option B">Option B</ag-selection-button>
              </ag-selection-button-group>
            </div>
            <div>
              <p class="shape-label">Rounded</p>
              <ag-selection-button-group
                type="radio"
                name="shape-rounded"
                legend="Rounded shape"
                legend-hidden
                shape="rounded"
              >
                <ag-selection-button value="a" label="Option A">Option A</ag-selection-button>
                <ag-selection-button value="b" label="Option B">Option B</ag-selection-button>
              </ag-selection-button-group>
            </div>
            <div>
              <p class="shape-label">Capsule (pill)</p>
              <ag-selection-button-group
                type="radio"
                name="shape-capsule"
                legend="Capsule shape"
                legend-hidden
                shape="capsule"
              >
                <ag-selection-button value="a" label="Option A">Option A</ag-selection-button>
                <ag-selection-button value="b" label="Option B">Option B</ag-selection-button>
              </ag-selection-button-group>
            </div>
          </div>
        </section>
        <!-- Disabled Group State -->
        <section class="example-section">
          <h3>Disabled Group State</h3>
          <ag-selection-button-group
            type="radio"
            name="disabled-group-example"
            legend="Disabled group"
            shape="rounded"
            disabled
          >
            <ag-selection-button value="a" label="Option A">Option A</ag-selection-button>
            <ag-selection-button value="b" label="Option B">Option B</ag-selection-button>
            <ag-selection-button value="c" label="Option C">Option C</ag-selection-button>
          </ag-selection-button-group>
        </section>
        <!-- Disabled Buttons State -->
        <section class="example-section">
          <h3>Disabled Individual Buttons State</h3>
          <ag-selection-button-group
            type="radio"
            name="disabled-buttons-example"
            legend="Disabled individual buttons"
            shape="rounded"
          >
            <ag-selection-button value="a" label="Option A">Option A</ag-selection-button>
            <ag-selection-button disabled value="b" label="Option B">Option B</ag-selection-button>
            <ag-selection-button value="c" label="Option C">Option C</ag-selection-button>
            <ag-selection-button disabled value="d" label="Option D">Option D</ag-selection-button>
            <ag-selection-button value="e" label="Option E">Option E</ag-selection-button>
          </ag-selection-button-group>
        </section>
      </div>
    \`;
  }
}

customElements.define('selection-button-group-lit-examples', SelectionButtonGroupLitExamples);
`,ke=`import { useState } from 'react';
import { ReactSelectionButtonGroup } from 'agnosticui-core/selection-button-group/react';
import { ReactSelectionButton } from 'agnosticui-core/selection-button/react';

export default function SelectionButtonGroupReactExamples() {
  const [radioSelection, setRadioSelection] = useState('');
  const [checkboxSelection, setCheckboxSelection] = useState([]);

  const handleRadioChange = (e) => {
    setRadioSelection(e.detail.selectedValues[0] || '');
  };

  const handleCheckboxChange = (e) => {
    setCheckboxSelection(e.detail.selectedValues);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Radio Group */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>
          Radio Group (Single Selection)
        </h3>
        <ReactSelectionButtonGroup
          type="radio"
          name="payment-method"
          legend="Select payment method"
          shape="rounded"
          onSelectionChange={handleRadioChange}
        >
          <ReactSelectionButton value="card" label="Credit Card">
            Credit Card
          </ReactSelectionButton>
          <ReactSelectionButton value="paypal" label="PayPal">
            PayPal
          </ReactSelectionButton>
          <ReactSelectionButton value="bank" label="Bank Transfer">
            Bank Transfer
          </ReactSelectionButton>
        </ReactSelectionButtonGroup>
        <p style={{ margin: 0, fontSize: '0.875rem', color: '#666' }}>
          Selected: {radioSelection || 'None'}
        </p>
      </section>

      {/* Checkbox Group */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>
          Checkbox Group (Multiple Selection)
        </h3>
        <ReactSelectionButtonGroup
          type="checkbox"
          name="toppings"
          legend="Select toppings"
          shape="rounded"
          onSelectionChange={handleCheckboxChange}
        >
          <ReactSelectionButton value="cheese" label="Extra Cheese">
            Extra Cheese
          </ReactSelectionButton>
          <ReactSelectionButton value="pepperoni" label="Pepperoni">
            Pepperoni
          </ReactSelectionButton>
          <ReactSelectionButton value="mushrooms" label="Mushrooms">
            Mushrooms
          </ReactSelectionButton>
          <ReactSelectionButton value="olives" label="Olives">
            Olives
          </ReactSelectionButton>
        </ReactSelectionButtonGroup>
        <p style={{ margin: 0, fontSize: '0.875rem', color: '#666' }}>
          Selected: {checkboxSelection.join(', ') || 'None'}
        </p>
      </section>

      {/* Theme Variants */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Theme Variants</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          <div>
            <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.875rem', color: '#666' }}>Default (Primary)</p>
            <ReactSelectionButtonGroup
              type="radio"
              name="theme-default"
              legend="Default theme"
              legendHidden
              shape="rounded"
            >
              <ReactSelectionButton value="a" label="Option A">A</ReactSelectionButton>
              <ReactSelectionButton value="b" label="Option B">B</ReactSelectionButton>
            </ReactSelectionButtonGroup>
          </div>
          <div>
            <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.875rem', color: '#666' }}>Success</p>
            <ReactSelectionButtonGroup
              type="radio"
              name="theme-success"
              legend="Success theme"
              legendHidden
              theme="success"
              shape="rounded"
            >
              <ReactSelectionButton value="a" label="Option A">A</ReactSelectionButton>
              <ReactSelectionButton value="b" label="Option B">B</ReactSelectionButton>
            </ReactSelectionButtonGroup>
          </div>
          <div>
            <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.875rem', color: '#666' }}>Info</p>
            <ReactSelectionButtonGroup
              type="radio"
              name="theme-info"
              legend="Info theme"
              legendHidden
              theme="info"
              shape="rounded"
            >
              <ReactSelectionButton value="a" label="Option A">A</ReactSelectionButton>
              <ReactSelectionButton value="b" label="Option B">B</ReactSelectionButton>
            </ReactSelectionButtonGroup>
          </div>
          <div>
            <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.875rem', color: '#666' }}>Warning</p>
            <ReactSelectionButtonGroup
              type="radio"
              name="theme-warning"
              legend="Warning theme"
              legendHidden
              theme="warning"
              shape="rounded"
            >
              <ReactSelectionButton value="a" label="Option A">A</ReactSelectionButton>
              <ReactSelectionButton value="b" label="Option B">B</ReactSelectionButton>
            </ReactSelectionButtonGroup>
          </div>
          <div>
            <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.875rem', color: '#666' }}>Error</p>
            <ReactSelectionButtonGroup
              type="radio"
              name="theme-error"
              legend="Error theme"
              legendHidden
              theme="error"
              shape="rounded"
            >
              <ReactSelectionButton value="a" label="Option A">A</ReactSelectionButton>
              <ReactSelectionButton value="b" label="Option B">B</ReactSelectionButton>
            </ReactSelectionButtonGroup>
          </div>
          <div>
            <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.875rem', color: '#666' }}>Monochrome</p>
            <ReactSelectionButtonGroup
              type="radio"
              name="theme-monochrome"
              legend="Monochrome theme"
              legendHidden
              theme="monochrome"
              shape="rounded"
            >
              <ReactSelectionButton value="a" label="Option A">A</ReactSelectionButton>
              <ReactSelectionButton value="b" label="Option B">B</ReactSelectionButton>
            </ReactSelectionButtonGroup>
          </div>
        </div>
      </section>

      {/* Size Variants */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Size Variants</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          <div>
            <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.875rem', color: '#666' }}>Small (sm)</p>
            <ReactSelectionButtonGroup
              type="radio"
              name="size-sm"
              legend="Small size"
              legendHidden
              size="sm"
              shape="rounded"
            >
              <ReactSelectionButton value="a" label="Option A">Option A</ReactSelectionButton>
              <ReactSelectionButton value="b" label="Option B">Option B</ReactSelectionButton>
            </ReactSelectionButtonGroup>
          </div>
          <div>
            <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.875rem', color: '#666' }}>Medium (md) - Default</p>
            <ReactSelectionButtonGroup
              type="radio"
              name="size-md"
              legend="Medium size"
              legendHidden
              size="md"
              shape="rounded"
            >
              <ReactSelectionButton value="a" label="Option A">Option A</ReactSelectionButton>
              <ReactSelectionButton value="b" label="Option B">Option B</ReactSelectionButton>
            </ReactSelectionButtonGroup>
          </div>
          <div>
            <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.875rem', color: '#666' }}>Large (lg)</p>
            <ReactSelectionButtonGroup
              type="radio"
              name="size-lg"
              legend="Large size"
              legendHidden
              size="lg"
              shape="rounded"
            >
              <ReactSelectionButton value="a" label="Option A">Option A</ReactSelectionButton>
              <ReactSelectionButton value="b" label="Option B">Option B</ReactSelectionButton>
            </ReactSelectionButtonGroup>
          </div>
        </div>
      </section>

      {/* Shape Variants */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Shape Variants</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          <div>
            <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.875rem', color: '#666' }}>Default (rectangular)</p>
            <ReactSelectionButtonGroup
              type="radio"
              name="shape-default"
              legend="Default shape"
              legendHidden
            >
              <ReactSelectionButton value="a" label="Option A">Option A</ReactSelectionButton>
              <ReactSelectionButton value="b" label="Option B">Option B</ReactSelectionButton>
            </ReactSelectionButtonGroup>
          </div>
          <div>
            <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.875rem', color: '#666' }}>Rounded</p>
            <ReactSelectionButtonGroup
              type="radio"
              name="shape-rounded"
              legend="Rounded shape"
              legendHidden
              shape="rounded"
            >
              <ReactSelectionButton value="a" label="Option A">Option A</ReactSelectionButton>
              <ReactSelectionButton value="b" label="Option B">Option B</ReactSelectionButton>
            </ReactSelectionButtonGroup>
          </div>
          <div>
            <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.875rem', color: '#666' }}>Capsule (pill)</p>
            <ReactSelectionButtonGroup
              type="radio"
              name="shape-capsule"
              legend="Capsule shape"
              legendHidden
              shape="capsule"
            >
              <ReactSelectionButton value="a" label="Option A">Option A</ReactSelectionButton>
              <ReactSelectionButton value="b" label="Option B">Option B</ReactSelectionButton>
            </ReactSelectionButtonGroup>
          </div>
        </div>
      </section>

      {/* Disabled State */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Disabled Group State</h3>
        <ReactSelectionButtonGroup
          type="radio"
          name="disabled-example"
          legend="Disabled group"
          shape="rounded"
          disabled
        >
          <ReactSelectionButton value="a" label="Option A">Option A</ReactSelectionButton>
          <ReactSelectionButton value="b" label="Option B">Option B</ReactSelectionButton>
          <ReactSelectionButton value="c" label="Option C">Option C</ReactSelectionButton>
        </ReactSelectionButtonGroup>
      </section>
      {/* Disabled State */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Disabled Individual Button State</h3>
        <ReactSelectionButtonGroup
          type="radio"
          name="disabled-buttons-example"
          legend="Disabled buttons"
          shape="rounded"
        >
          <ReactSelectionButton value="a" label="Option A">Option A</ReactSelectionButton>
          <ReactSelectionButton disabled value="b" label="Option B">Option B</ReactSelectionButton>
          <ReactSelectionButton value="c" label="Option C">Option C</ReactSelectionButton>
          <ReactSelectionButton disabled value="c" label="Option D">Option D</ReactSelectionButton>
          <ReactSelectionButton value="c" label="Option E">Option E</ReactSelectionButton>
        </ReactSelectionButtonGroup>
      </section>
    </div>
  );
}
`,Re=JSON.parse('{"title":"SelectionButtonGroup","description":"","frontmatter":{},"headers":[],"relativePath":"components/selection-button-group.md","filePath":"components/selection-button-group.md"}'),be={name:"components/selection-button-group.md"},_e=Object.assign(be,{setup(r){return(t,n)=>(f(),S("div",null,[n[1]||(n[1]=l("h1",{id:"selectionbuttongroup",tabindex:"-1"},[o("SelectionButtonGroup "),l("a",{class:"header-anchor",href:"#selectionbuttongroup","aria-label":'Permalink to "SelectionButtonGroup"'},"​")],-1)),i(M),n[2]||(n[2]=l("p",null,"A button-styled selection UI for single (radio) or multiple (checkbox) selection. Ideal for compact option toggles, filter controls, and inline selections.",-1)),n[3]||(n[3]=l("h2",{id:"examples",tabindex:"-1"},[o("Examples "),l("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),i(W,{component:"selection-button-group","vue-code":a(he),"lit-code":a(ge),"react-code":a(ke)},{vue:s(()=>[i(ue)]),lit:s(()=>[...n[0]||(n[0]=[l("selection-button-group-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),n[4]||(n[4]=H("",36))]))}});export{Re as __pageData,_e as default};
