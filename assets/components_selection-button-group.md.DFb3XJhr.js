var q=Object.defineProperty;var w=(p,t,a)=>t in p?q(p,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):p[t]=a;var f=(p,t,a)=>w(p,typeof t!="symbol"?t+"":t,a);import{A as P}from"./chunks/AlphaWarning.yC7ZufpQ.js";import{i as A,z as h,a as O,E as V,x as y}from"./chunks/Button.DkmThuAs.js";import{n as T}from"./chunks/state-CovhUvdr.CfYrM0Q-.js";import{d as x,c as B,o as S,r as R,K as z,p as E,j as l,G as n,k as i,w as s,a as o,t as D,_ as M,ae as I}from"./chunks/framework.NAAYCHZu.js";import{F as $}from"./chunks/FrameworkExample.Z9eaTrCu.js";import"./chunks/createLucideIcon.B61Wqv9x.js";import"./chunks/sdk.m.DhOmSlC9.js";import"./chunks/Icon.BC5ob6Nk.js";var H=Object.defineProperty,b=(p,t,a,u)=>{for(var r=void 0,c=p.length-1,e;c>=0;c--)(e=p[c])&&(r=e(t,a,r)||r);return r&&H(t,a,r),r};const _=class extends O{constructor(){super(),this._handleButtonChange=t=>{t.stopPropagation();const{value:a,checked:u}=t.detail;let r;if(this.type==="radio")r=u?[a]:[];else{const e=[...this._getSelectedValues()];if(u)e.includes(a)||e.push(a);else{const v=e.indexOf(a);v>-1&&e.splice(v,1)}r=e}this._internalSelectedValues=r;const c=new CustomEvent("selection-change",{detail:{value:a,checked:u,selectedValues:r},bubbles:!0,composed:!0});this.dispatchEvent(c),this.onSelectionChange&&this.onSelectionChange(c)},this._handleKeyDown=t=>{const a=this._getButtons().filter(e=>!e.disabled);if(a.length===0)return;const u=a.find(e=>{var v;try{return((v=e.shadowRoot)==null?void 0:v.activeElement)||e===document.activeElement}catch{return e===document.activeElement}}),r=u?a.indexOf(u):-1;let c=null;switch(t.key){case"ArrowDown":case"ArrowRight":t.preventDefault(),c=r===-1?0:(r+1)%a.length;break;case"ArrowUp":case"ArrowLeft":t.preventDefault(),c=r===-1?a.length-1:(r-1+a.length)%a.length;break;case"Home":t.preventDefault(),c=0;break;case"End":t.preventDefault(),c=a.length-1;break}if(c!==null){const e=a[c];e.focus(),this.type==="radio"&&this._handleButtonChange(new CustomEvent("selection-button-change",{detail:{value:e.value,checked:!0}}))}},this.type="radio",this.name="",this.legend="",this.legendHidden=!1,this.theme="",this.size="md",this.shape="",this.value="",this.values=[],this.disabled=!1,this._internalSelectedValues=[]}_getSelectedValues(){return this.type==="radio"?this.value?[this.value]:this._internalSelectedValues:this.values&&this.values.length>0?this.values:this._internalSelectedValues}connectedCallback(){super.connectedCallback(),this.addEventListener("selection-button-change",this._handleButtonChange),this.addEventListener("keydown",this._handleKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("selection-button-change",this._handleButtonChange),this.removeEventListener("keydown",this._handleKeyDown)}updated(t){super.updated(t),(t.has("type")||t.has("name")||t.has("theme")||t.has("size")||t.has("shape")||t.has("disabled")||t.has("value")||t.has("values")||t.has("_internalSelectedValues"))&&this._syncChildButtons()}firstUpdated(){this._syncChildButtons()}_getButtons(){var a;const t=(a=this.shadowRoot)==null?void 0:a.querySelector("slot");return t?t.assignedElements({flatten:!0}).filter(u=>u.tagName.toLowerCase()==="ag-selection-button"):[]}_syncChildButtons(){const t=this._getButtons(),a=this._getSelectedValues();t.forEach(u=>{u._type=this.type,u._name=this.name,u._theme=this.theme,u._size=this.size,u._shape=this.shape,u.checked=a.includes(u.value),this.disabled&&(u.disabled=!0)})}_handleSlotChange(){this._syncChildButtons()}render(){const t=["selection-button-group__legend",this.legendHidden?"selection-button-group__legend--hidden":""].filter(Boolean).join(" ");return y`
      <fieldset
        class="selection-button-group"
        part="ag-selection-button-group-fieldset"
        role="${this.type==="radio"?"radiogroup":"group"}"
        aria-disabled="${this.disabled?"true":"false"}"
      >
        ${this.legend?y`<legend class="${t}" part="ag-selection-button-group-legend">${this.legend}</legend>`:V}
        <div class="selection-button-group__content" part="ag-selection-button-group-content">
          <slot @slotchange="${this._handleSlotChange}"></slot>
        </div>
      </fieldset>
    `}};_.styles=A`
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
  `;let k=_;b([h({type:String,reflect:!0})],k.prototype,"type");b([h({type:String,reflect:!0})],k.prototype,"name");b([h({type:String})],k.prototype,"legend");b([h({type:Boolean,attribute:"legend-hidden"})],k.prototype,"legendHidden");b([h({type:String,reflect:!0})],k.prototype,"theme");b([h({type:String,reflect:!0})],k.prototype,"size");b([h({type:String,reflect:!0})],k.prototype,"shape");b([h({type:String})],k.prototype,"value");b([h({type:Array})],k.prototype,"values");b([h({type:Boolean,reflect:!0})],k.prototype,"disabled");b([h({attribute:!1})],k.prototype,"onSelectionChange");b([T()],k.prototype,"_internalSelectedValues");customElements.get("ag-selection-button-group")||customElements.define("ag-selection-button-group",k);const L=["type","name","legend","legend-hidden","theme","size","shape","value","values",".disabled"],g=x({__name:"VueSelectionButtonGroup",props:{type:{default:"radio"},name:{default:""},legend:{default:""},legendHidden:{type:Boolean,default:!1},theme:{default:""},size:{default:"md"},shape:{default:""},value:{default:""},values:{default:()=>[]},disabled:{type:Boolean,default:!1}},emits:["selection-change","update:value","update:values"],setup(p,{emit:t}){const a=t,u=r=>{const c=r.detail;a("selection-change",c),c.selectedValues.length<=1&&a("update:value",c.selectedValues[0]||""),a("update:values",c.selectedValues)};return(r,c)=>(S(),B("ag-selection-button-group",z({type:p.type,name:p.name,legend:p.legend,"legend-hidden":p.legendHidden,theme:p.theme,size:p.size,shape:p.shape,value:p.value,values:p.values,".disabled":p.disabled,onSelectionChange:u},r.$attrs),[R(r.$slots,"default")],48,L))}});var N=Object.defineProperty,F=(p,t,a,u)=>{for(var r=void 0,c=p.length-1,e;c>=0;c--)(e=p[c])&&(r=e(t,a,r)||r);return r&&N(t,a,r),r};const G=class extends O{constructor(){super(),this.value="",this.label="",this.checked=!1,this.disabled=!1,this._type="radio",this._name="",this._theme="",this._size="md",this._shape=""}focus(){var t,a;(a=(t=this.shadowRoot)==null?void 0:t.querySelector(".selection-button"))==null||a.focus()}_handleClick(t){if(t.preventDefault(),this.disabled)return;const a=this._type==="radio"?!0:!this.checked;this.dispatchEvent(new CustomEvent("selection-button-change",{detail:{value:this.value,checked:a},bubbles:!0,composed:!0}))}_handleKeyDown(t){this.disabled||(t.key===" "||t.key==="Enter")&&(t.preventDefault(),this._handleClick(t))}_renderIndicator(){return this._type==="checkbox"?y`
        <svg class="selection-button__indicator-svg" viewBox="0 0 20 20" aria-hidden="true">
          <circle cx="10" cy="10" r="10" fill="currentColor" />
          <path d="M6 10l3 3 5-6" stroke="var(--ag-selection-button-indicator-check, var(--_indicator-bg))"
                stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        </svg>
      `:y`
      <svg class="selection-button__indicator-svg" viewBox="0 0 20 20" aria-hidden="true">
        <circle cx="10" cy="10" r="10" fill="currentColor" />
        <circle cx="10" cy="10" r="4" fill="var(--ag-selection-button-indicator-dot, var(--_indicator-bg))" />
      </svg>
    `}render(){const t=this._theme||"default",a=this._size||"md",u=this._shape||"default",r=["selection-button",`selection-button--${t}`,`selection-button--${a}`,`selection-button--shape-${u}`,this.checked?"selection-button--checked":"",this.disabled?"selection-button--disabled":""].filter(Boolean).join(" ");return y`
      <label
        class="${r}"
        part="ag-selection-button-container"
        tabindex="${this.disabled?-1:0}"
        @click="${this._handleClick}"
        @keydown="${this._handleKeyDown}"
      >
        <input
          type="${this._type}"
          class="selection-button__input"
          part="ag-selection-button-control"
          name="${this._name||V}"
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
    `}};G.styles=A`
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
  `;let m=G;F([h({type:String,reflect:!0})],m.prototype,"value");F([h({type:String})],m.prototype,"label");F([h({type:Boolean,reflect:!0})],m.prototype,"checked");F([h({type:Boolean,reflect:!0})],m.prototype,"disabled");F([h({type:String,attribute:!1})],m.prototype,"_type");F([h({type:String,attribute:!1})],m.prototype,"_name");F([h({type:String,attribute:!1})],m.prototype,"_theme");F([h({type:String,attribute:!1})],m.prototype,"_size");F([h({type:String,attribute:!1})],m.prototype,"_shape");customElements.get("ag-selection-button")||customElements.define("ag-selection-button",m);const W=["value","label",".checked",".disabled"],d=x({__name:"VueSelectionButton",props:{value:{default:""},label:{default:""},checked:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},setup(p){return(t,a)=>(S(),B("ag-selection-button",z({value:p.value,label:p.label,".checked":p.checked,".disabled":p.disabled},t.$attrs),[R(t.$slots,"default")],48,W))}}),j={class:"examples-container"},U={class:"example-section"},K={class:"selection-output"},Y={class:"example-section"},J={class:"selection-output"},Z={class:"example-section"},Q={class:"theme-grid"},X={class:"example-section"},ee={class:"size-grid"},te={class:"example-section"},ne={class:"shape-grid"},ie={class:"example-section"},ae={class:"example-section"},se=x({__name:"SelectionButtonGroupExamples",setup(p){const t=E(""),a=E([]),u=c=>{t.value=c.detail.selectedValues[0]||""},r=c=>{a.value=c.detail.selectedValues};return(c,e)=>(S(),B("div",j,[l("section",U,[e[3]||(e[3]=l("h3",null,"Radio Group (Single Selection)",-1)),n(i(g),{type:"radio",name:"payment-method",legend:"Select payment method",shape:"rounded",onSelectionChange:u},{default:s(()=>[n(i(d),{value:"card",label:"Credit Card"},{default:s(()=>[...e[0]||(e[0]=[o(" Credit Card ",-1)])]),_:1}),n(i(d),{value:"paypal",label:"PayPal"},{default:s(()=>[...e[1]||(e[1]=[o(" PayPal ",-1)])]),_:1}),n(i(d),{value:"bank",label:"Bank Transfer"},{default:s(()=>[...e[2]||(e[2]=[o(" Bank Transfer ",-1)])]),_:1})]),_:1}),l("p",K,"Selected: "+D(t.value),1)]),l("section",Y,[e[8]||(e[8]=l("h3",null,"Checkbox Group (Multiple Selection)",-1)),n(i(g),{type:"checkbox",name:"toppings",legend:"Select toppings",shape:"rounded",onSelectionChange:r},{default:s(()=>[n(i(d),{value:"cheese",label:"Extra Cheese"},{default:s(()=>[...e[4]||(e[4]=[o(" Extra Cheese ",-1)])]),_:1}),n(i(d),{value:"pepperoni",label:"Pepperoni"},{default:s(()=>[...e[5]||(e[5]=[o(" Pepperoni ",-1)])]),_:1}),n(i(d),{value:"mushrooms",label:"Mushrooms"},{default:s(()=>[...e[6]||(e[6]=[o(" Mushrooms ",-1)])]),_:1}),n(i(d),{value:"olives",label:"Olives"},{default:s(()=>[...e[7]||(e[7]=[o(" Olives ",-1)])]),_:1})]),_:1}),l("p",J,"Selected: "+D(a.value.join(", ")||"None"),1)]),l("section",Z,[e[27]||(e[27]=l("h3",null,"Theme Variants",-1)),l("div",Q,[l("div",null,[e[11]||(e[11]=l("p",{class:"theme-label"},"Default (Primary)",-1)),n(i(g),{type:"radio",name:"theme-default",legend:"Default theme","legend-hidden":"",shape:"rounded"},{default:s(()=>[n(i(d),{value:"a",label:"Option A"},{default:s(()=>[...e[9]||(e[9]=[o("A",-1)])]),_:1}),n(i(d),{value:"b",label:"Option B"},{default:s(()=>[...e[10]||(e[10]=[o("B",-1)])]),_:1})]),_:1})]),l("div",null,[e[14]||(e[14]=l("p",{class:"theme-label"},"Success",-1)),n(i(g),{type:"radio",name:"theme-success",legend:"Success theme","legend-hidden":"",theme:"success",shape:"rounded"},{default:s(()=>[n(i(d),{value:"a",label:"Option A"},{default:s(()=>[...e[12]||(e[12]=[o("A",-1)])]),_:1}),n(i(d),{value:"b",label:"Option B"},{default:s(()=>[...e[13]||(e[13]=[o("B",-1)])]),_:1})]),_:1})]),l("div",null,[e[17]||(e[17]=l("p",{class:"theme-label"},"Info",-1)),n(i(g),{type:"radio",name:"theme-info",legend:"Info theme","legend-hidden":"",theme:"info",shape:"rounded"},{default:s(()=>[n(i(d),{value:"a",label:"Option A"},{default:s(()=>[...e[15]||(e[15]=[o("A",-1)])]),_:1}),n(i(d),{value:"b",label:"Option B"},{default:s(()=>[...e[16]||(e[16]=[o("B",-1)])]),_:1})]),_:1})]),l("div",null,[e[20]||(e[20]=l("p",{class:"theme-label"},"Warning",-1)),n(i(g),{type:"radio",name:"theme-warning",legend:"Warning theme","legend-hidden":"",theme:"warning",shape:"rounded"},{default:s(()=>[n(i(d),{value:"a",label:"Option A"},{default:s(()=>[...e[18]||(e[18]=[o("A",-1)])]),_:1}),n(i(d),{value:"b",label:"Option B"},{default:s(()=>[...e[19]||(e[19]=[o("B",-1)])]),_:1})]),_:1})]),l("div",null,[e[23]||(e[23]=l("p",{class:"theme-label"},"Error",-1)),n(i(g),{type:"radio",name:"theme-error",legend:"Error theme","legend-hidden":"",theme:"error",shape:"rounded"},{default:s(()=>[n(i(d),{value:"a",label:"Option A"},{default:s(()=>[...e[21]||(e[21]=[o("A",-1)])]),_:1}),n(i(d),{value:"b",label:"Option B"},{default:s(()=>[...e[22]||(e[22]=[o("B",-1)])]),_:1})]),_:1})]),l("div",null,[e[26]||(e[26]=l("p",{class:"theme-label"},"Monochrome",-1)),n(i(g),{type:"radio",name:"theme-monochrome",legend:"Monochrome theme","legend-hidden":"",theme:"monochrome",shape:"rounded"},{default:s(()=>[n(i(d),{value:"a",label:"Option A"},{default:s(()=>[...e[24]||(e[24]=[o("A",-1)])]),_:1}),n(i(d),{value:"b",label:"Option B"},{default:s(()=>[...e[25]||(e[25]=[o("B",-1)])]),_:1})]),_:1})])])]),l("section",X,[e[37]||(e[37]=l("h3",null,"Size Variants",-1)),l("div",ee,[l("div",null,[e[30]||(e[30]=l("p",{class:"size-label"},"Small (sm)",-1)),n(i(g),{type:"radio",name:"size-sm",legend:"Small size","legend-hidden":"",size:"sm",shape:"rounded"},{default:s(()=>[n(i(d),{value:"a",label:"Option A"},{default:s(()=>[...e[28]||(e[28]=[o("Option A",-1)])]),_:1}),n(i(d),{value:"b",label:"Option B"},{default:s(()=>[...e[29]||(e[29]=[o("Option B",-1)])]),_:1})]),_:1})]),l("div",null,[e[33]||(e[33]=l("p",{class:"size-label"},"Medium (md) - Default",-1)),n(i(g),{type:"radio",name:"size-md",legend:"Medium size","legend-hidden":"",size:"md",shape:"rounded"},{default:s(()=>[n(i(d),{value:"a",label:"Option A"},{default:s(()=>[...e[31]||(e[31]=[o("Option A",-1)])]),_:1}),n(i(d),{value:"b",label:"Option B"},{default:s(()=>[...e[32]||(e[32]=[o("Option B",-1)])]),_:1})]),_:1})]),l("div",null,[e[36]||(e[36]=l("p",{class:"size-label"},"Large (lg)",-1)),n(i(g),{type:"radio",name:"size-lg",legend:"Large size","legend-hidden":"",size:"lg",shape:"rounded"},{default:s(()=>[n(i(d),{value:"a",label:"Option A"},{default:s(()=>[...e[34]||(e[34]=[o("Option A",-1)])]),_:1}),n(i(d),{value:"b",label:"Option B"},{default:s(()=>[...e[35]||(e[35]=[o("Option B",-1)])]),_:1})]),_:1})])])]),l("section",te,[e[47]||(e[47]=l("h3",null,"Shape Variants",-1)),l("div",ne,[l("div",null,[e[40]||(e[40]=l("p",{class:"shape-label"},"Default (rectangular)",-1)),n(i(g),{type:"radio",name:"shape-default",legend:"Default shape","legend-hidden":""},{default:s(()=>[n(i(d),{value:"a",label:"Option A"},{default:s(()=>[...e[38]||(e[38]=[o("Option A",-1)])]),_:1}),n(i(d),{value:"b",label:"Option B"},{default:s(()=>[...e[39]||(e[39]=[o("Option B",-1)])]),_:1})]),_:1})]),l("div",null,[e[43]||(e[43]=l("p",{class:"shape-label"},"Rounded",-1)),n(i(g),{type:"radio",name:"shape-rounded",legend:"Rounded shape","legend-hidden":"",shape:"rounded"},{default:s(()=>[n(i(d),{value:"a",label:"Option A"},{default:s(()=>[...e[41]||(e[41]=[o("Option A",-1)])]),_:1}),n(i(d),{value:"b",label:"Option B"},{default:s(()=>[...e[42]||(e[42]=[o("Option B",-1)])]),_:1})]),_:1})]),l("div",null,[e[46]||(e[46]=l("p",{class:"shape-label"},"Capsule (pill)",-1)),n(i(g),{type:"radio",name:"shape-capsule",legend:"Capsule shape","legend-hidden":"",shape:"capsule"},{default:s(()=>[n(i(d),{value:"a",label:"Option A"},{default:s(()=>[...e[44]||(e[44]=[o("Option A",-1)])]),_:1}),n(i(d),{value:"b",label:"Option B"},{default:s(()=>[...e[45]||(e[45]=[o("Option B",-1)])]),_:1})]),_:1})])])]),l("section",ie,[e[51]||(e[51]=l("h3",null,"Disabled State",-1)),n(i(g),{type:"radio",name:"disabled-example",legend:"Disabled group",shape:"rounded",disabled:""},{default:s(()=>[n(i(d),{value:"a",label:"Option A"},{default:s(()=>[...e[48]||(e[48]=[o("Option A",-1)])]),_:1}),n(i(d),{value:"b",label:"Option B"},{default:s(()=>[...e[49]||(e[49]=[o("Option B",-1)])]),_:1}),n(i(d),{value:"c",label:"Option C"},{default:s(()=>[...e[50]||(e[50]=[o("Option C",-1)])]),_:1})]),_:1})]),l("section",ae,[e[57]||(e[57]=l("h3",null,"Disabled Individual Button State",-1)),n(i(g),{type:"radio",name:"disabled-button-example",legend:"Disabled individual",shape:"rounded"},{default:s(()=>[n(i(d),{value:"a",label:"Option A"},{default:s(()=>[...e[52]||(e[52]=[o("Option A",-1)])]),_:1}),n(i(d),{disabled:"",value:"b",label:"Option B"},{default:s(()=>[...e[53]||(e[53]=[o("Option B",-1)])]),_:1}),n(i(d),{value:"c",label:"Option C"},{default:s(()=>[...e[54]||(e[54]=[o("Option C",-1)])]),_:1}),n(i(d),{disabled:"",value:"d",label:"Option D"},{default:s(()=>[...e[55]||(e[55]=[o("Option D",-1)])]),_:1}),n(i(d),{value:"e",label:"Option E"},{default:s(()=>[...e[56]||(e[56]=[o("Option E",-1)])]),_:1})]),_:1})])]))}}),le=M(se,[["__scopeId","data-v-2e5ad41e"]]);class C extends O{constructor(){super(),this.radioSelection="",this.checkboxSelection=[]}_handleRadioChange(t){this.radioSelection=t.detail.selectedValues[0]||""}_handleCheckboxChange(t){this.checkboxSelection=[...t.detail.selectedValues]}render(){return y`
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
    `}}f(C,"styles",A`
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
  `),f(C,"properties",{radioSelection:{type:String},checkboxSelection:{type:Array}});customElements.define("selection-button-group-lit-examples",C);const oe=`<template>
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
import { VueSelectionButtonGroup } from 'agnosticui-core/selection-button-group/vue';
import { VueSelectionButton } from 'agnosticui-core/selection-button/vue';

const radioSelection = ref('');
const checkboxSelection = ref<string[]>([]);

const handleChange = (e: CustomEvent) => {
  radioSelection.value = e.detail.selectedValues[0] || '';
};

const handleCheckboxChange = (e: CustomEvent) => {
  checkboxSelection.value = e.detail.selectedValues;
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
`,de=`import { LitElement, html, css } from 'lit';
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
`,pe=`import { useState } from 'react';
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
`,Se=JSON.parse('{"title":"SelectionButtonGroup","description":"","frontmatter":{},"headers":[],"relativePath":"components/selection-button-group.md","filePath":"components/selection-button-group.md"}'),re={name:"components/selection-button-group.md"},fe=Object.assign(re,{setup(p){return(t,a)=>(S(),B("div",null,[a[1]||(a[1]=l("h1",{id:"selectionbuttongroup",tabindex:"-1"},[o("SelectionButtonGroup "),l("a",{class:"header-anchor",href:"#selectionbuttongroup","aria-label":'Permalink to "SelectionButtonGroup"'},"​")],-1)),n(P),a[2]||(a[2]=l("p",null,"A button-styled selection UI for single (radio) or multiple (checkbox) selection. Ideal for compact option toggles, filter controls, and inline selections.",-1)),a[3]||(a[3]=l("h2",{id:"examples",tabindex:"-1"},[o("Examples "),l("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),n($,{component:"selection-button-group","vue-code":i(oe),"lit-code":i(de),"react-code":i(pe)},{vue:s(()=>[n(le)]),lit:s(()=>[...a[0]||(a[0]=[l("selection-button-group-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),a[4]||(a[4]=I(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The framework examples below <code>import</code> AgnosticUI as an <code>npm</code> package. Alternatively, you can use the <strong>CLI for complete control, AI/LLM visibility, and full code ownership</strong>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> init</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> --framework</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> FRAMEWORK</span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;"> # react, vue, lit, svelte, etc.</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> add</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> SelectionButtonGroup</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> add</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> SelectionButton</span></span></code></pre></div><p>The CLI copies source code directly into your project, giving you full visibility and control. After running <code>npx ag add</code>, you&#39;ll receive exact import instructions.</p></div><details class="details custom-block"><summary>Vue</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueSelectionButtonGroup</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;radio&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;payment&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    legend</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Select payment method&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    shape</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;rounded&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    @selection-change</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;handleChange&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueSelectionButton</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;card&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Credit Card&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      Credit Card</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueSelectionButton</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueSelectionButton</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;paypal&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;PayPal&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      PayPal</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueSelectionButton</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueSelectionButtonGroup</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> setup</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { VueSelectionButtonGroup } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;agnosticui-core/selection-button-group/vue&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { VueSelectionButton } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;agnosticui-core/selection-button/vue&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> handleChange</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;Selected:&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, e.detail.selectedValues);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">};</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><details class="details custom-block"><summary>React</summary><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { ReactSelectionButtonGroup } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/selection-button-group/react&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { ReactSelectionButton } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/selection-button/react&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> function</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> Example</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">() </span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> handleChange</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;Selected:&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, e.detail.selectedValues);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  return</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactSelectionButtonGroup</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      type</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;radio&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      name</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;payment&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      legend</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Select payment method&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      shape</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;rounded&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      onSelectionChange</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">handleChange</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactSelectionButton</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;card&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Credit Card&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        Credit Card</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactSelectionButton</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactSelectionButton</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;paypal&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;PayPal&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        PayPal</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactSelectionButton</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactSelectionButtonGroup</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  );</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div></details><details class="details custom-block"><summary>Lit (Web Components)</summary><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;module&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  import</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/selection-button-group&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  import</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/selection-button&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> group</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> document.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">querySelector</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;ag-selection-button-group&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  group.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">addEventListener</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;selection-change&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;Selected:&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, e.detail.selectedValues);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  });</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-selection-button-group</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;radio&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;payment&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> legend</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Select payment method&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> shape</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;rounded&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-selection-button</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;card&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Credit Card&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    Credit Card</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-selection-button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-selection-button</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;paypal&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;PayPal&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    PayPal</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-selection-button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-selection-button-group</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><h3 id="selectionbuttongroup-1" tabindex="-1">SelectionButtonGroup <a class="header-anchor" href="#selectionbuttongroup-1" aria-label="Permalink to &quot;SelectionButtonGroup&quot;">​</a></h3><table class="ag-table ag-table--striped"><thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>type</code></td><td><code>&#39;radio&#39; | &#39;checkbox&#39;</code></td><td><code>&#39;radio&#39;</code></td><td>Selection mode</td></tr><tr><td><code>name</code></td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>Input name attribute (required)</td></tr><tr><td><code>legend</code></td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>Accessible group label</td></tr><tr><td><code>legend-hidden</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Visually hide legend</td></tr><tr><td><code>theme</code></td><td><code>&#39;&#39; | &#39;success&#39; | &#39;info&#39; | &#39;warning&#39; | &#39;error&#39; | &#39;monochrome&#39;</code></td><td><code>&#39;&#39;</code></td><td>Theme variant (empty = primary/blue)</td></tr><tr><td><code>size</code></td><td><code>&#39;sm&#39; | &#39;md&#39; | &#39;lg&#39;</code></td><td><code>&#39;md&#39;</code></td><td>Button size</td></tr><tr><td><code>shape</code></td><td><code>&#39;&#39; | &#39;rounded&#39; | &#39;capsule&#39;</code></td><td><code>&#39;&#39;</code></td><td>Button shape (empty = rectangular)</td></tr><tr><td><code>value</code></td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>Controlled value (radio)</td></tr><tr><td><code>values</code></td><td><code>string[]</code></td><td><code>[]</code></td><td>Controlled values (checkbox)</td></tr><tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Disable all buttons</td></tr></tbody></table><h3 id="selectionbutton" tabindex="-1">SelectionButton <a class="header-anchor" href="#selectionbutton" aria-label="Permalink to &quot;SelectionButton&quot;">​</a></h3><table class="ag-table ag-table--striped"><thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>value</code></td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>Unique value (required)</td></tr><tr><td><code>label</code></td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>Accessible label (required)</td></tr><tr><td><code>checked</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Selection state (managed by group)</td></tr><tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Disable this button</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><h3 id="selection-change" tabindex="-1">selection-change <a class="header-anchor" href="#selection-change" aria-label="Permalink to &quot;selection-change&quot;">​</a></h3><p>Fired when selection changes.</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">interface</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> SelectionChangeEventDetail</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">  value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> string</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;        </span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">// Value that triggered the change</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">  checked</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> boolean</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;     </span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">// Whether the button is now selected</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">  selectedValues</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> string</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">[]; </span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">// All currently selected values</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div><h2 id="themes" tabindex="-1">Themes <a class="header-anchor" href="#themes" aria-label="Permalink to &quot;Themes&quot;">​</a></h2><p>The <code>theme</code> prop controls the color scheme for selected buttons:</p><table class="ag-table ag-table--striped"><thead><tr><th>Theme</th><th>Description</th></tr></thead><tbody><tr><td><code>&#39;&#39;</code> (default)</td><td>Primary blue - uses <code>--ag-primary-*</code> tokens</td></tr><tr><td><code>success</code></td><td>Green - uses <code>--ag-success-*</code> tokens</td></tr><tr><td><code>info</code></td><td>Cyan/blue - uses <code>--ag-info-*</code> tokens</td></tr><tr><td><code>warning</code></td><td>Yellow/orange - uses <code>--ag-warning-*</code> tokens</td></tr><tr><td><code>error</code></td><td>Red - uses <code>--ag-danger-*</code> tokens</td></tr><tr><td><code>monochrome</code></td><td>Black/white - uses <code>--ag-black</code> and inverted tokens</td></tr></tbody></table><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">&lt;!-- Success theme with capsule shape --&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-selection-button-group</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;radio&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> name</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;status&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> theme</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;success&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> shape</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;capsule&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  ...</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-selection-button-group</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div><h2 id="sizes" tabindex="-1">Sizes <a class="header-anchor" href="#sizes" aria-label="Permalink to &quot;Sizes&quot;">​</a></h2><table class="ag-table ag-table--striped"><thead><tr><th>Size</th><th>Description</th></tr></thead><tbody><tr><td><code>sm</code></td><td>Small - compact height, smaller font</td></tr><tr><td><code>md</code></td><td>Medium (default) - standard size</td></tr><tr><td><code>lg</code></td><td>Large - taller height, larger font</td></tr></tbody></table><h2 id="shapes" tabindex="-1">Shapes <a class="header-anchor" href="#shapes" aria-label="Permalink to &quot;Shapes&quot;">​</a></h2><table class="ag-table ag-table--striped"><thead><tr><th>Shape</th><th>Description</th></tr></thead><tbody><tr><td><code>&#39;&#39;</code> (default)</td><td>Rectangular with no border radius</td></tr><tr><td><code>rounded</code></td><td>Moderate border radius</td></tr><tr><td><code>capsule</code></td><td>Fully rounded (pill shape)</td></tr></tbody></table><h2 id="styling" tabindex="-1">Styling <a class="header-anchor" href="#styling" aria-label="Permalink to &quot;Styling&quot;">​</a></h2><h3 id="css-custom-properties" tabindex="-1">CSS Custom Properties <a class="header-anchor" href="#css-custom-properties" aria-label="Permalink to &quot;CSS Custom Properties&quot;">​</a></h3><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* Group layout */</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">--ag-selection-button-group-gap: var(--ag-space-2);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* Button sizing (per size variant) */</span></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* Size-specific heights and padding are built into the component */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* Button colors - unchecked */</span></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* Uses theme tokens (--ag-primary, --ag-success, etc.) for borders and text */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* Button colors - checked */</span></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* Filled background using theme tokens */</span></span></code></pre></div><h3 id="css-parts" tabindex="-1">CSS Parts <a class="header-anchor" href="#css-parts" aria-label="Permalink to &quot;CSS Parts&quot;">​</a></h3><h4 id="selectionbuttongroup-2" tabindex="-1">SelectionButtonGroup <a class="header-anchor" href="#selectionbuttongroup-2" aria-label="Permalink to &quot;SelectionButtonGroup&quot;">​</a></h4><table class="ag-table ag-table--striped"><thead><tr><th>Part</th><th>Description</th></tr></thead><tbody><tr><td><code>ag-selection-button-group-fieldset</code></td><td>The fieldset element</td></tr><tr><td><code>ag-selection-button-group-legend</code></td><td>The legend element</td></tr><tr><td><code>ag-selection-button-group-content</code></td><td>The content wrapper (flex container)</td></tr></tbody></table><h4 id="selectionbutton-1" tabindex="-1">SelectionButton <a class="header-anchor" href="#selectionbutton-1" aria-label="Permalink to &quot;SelectionButton&quot;">​</a></h4><table class="ag-table ag-table--striped"><thead><tr><th>Part</th><th>Description</th></tr></thead><tbody><tr><td><code>ag-selection-button-container</code></td><td>The outer clickable label</td></tr><tr><td><code>ag-selection-button-control</code></td><td>The hidden input element</td></tr><tr><td><code>ag-selection-button-indicator</code></td><td>The selection indicator (circle with dot for radio, circle with checkmark for checkbox)</td></tr><tr><td><code>ag-selection-button-content</code></td><td>The slotted content wrapper</td></tr></tbody></table><h3 id="css-parts-example" tabindex="-1">CSS Parts Example <a class="header-anchor" href="#css-parts-example" aria-label="Permalink to &quot;CSS Parts Example&quot;">​</a></h3><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* Custom gap between buttons */</span></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-selection-button-group</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-selection-button-group-content</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  gap</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">var</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">--ag-space-4</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* Custom button styling */</span></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-selection-button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-selection-button-container</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  font-weight</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">600</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* Hide the indicator for a cleaner look */</span></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-selection-button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-selection-button-indicator</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  display</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">none</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div><h2 id="accessibility" tabindex="-1">Accessibility <a class="header-anchor" href="#accessibility" aria-label="Permalink to &quot;Accessibility&quot;">​</a></h2><ul><li>Uses <code>&lt;fieldset&gt;</code> and <code>&lt;legend&gt;</code> for proper group semantics</li><li>Each button has a required <code>label</code> prop for screen readers</li><li>Keyboard navigation: <ul><li><strong>Arrow keys</strong>: Navigate between buttons (selects in radio mode)</li><li><strong>Space/Enter</strong>: Toggle selection</li><li><strong>Home/End</strong>: Jump to first/last button</li></ul></li><li>Focus ring visible on keyboard navigation</li><li><code>role=&quot;radiogroup&quot;</code> for radio mode, <code>role=&quot;group&quot;</code> for checkbox mode</li></ul><h2 id="comparison-with-selectioncardgroup" tabindex="-1">Comparison with SelectionCardGroup <a class="header-anchor" href="#comparison-with-selectioncardgroup" aria-label="Permalink to &quot;Comparison with SelectionCardGroup&quot;">​</a></h2><table class="ag-table ag-table--striped"><thead><tr><th>Feature</th><th>SelectionButtonGroup</th><th>SelectionCardGroup</th></tr></thead><tbody><tr><td>Use case</td><td>Compact inline options</td><td>Rich content cards</td></tr><tr><td>Size variants</td><td>Yes (sm/md/lg)</td><td>No</td></tr><tr><td>Shape variants</td><td>Yes (rounded/capsule)</td><td>No</td></tr><tr><td>Content</td><td>Text labels</td><td>Rich slotted content</td></tr><tr><td>Layout</td><td>Inline flex</td><td>Grid</td></tr></tbody></table>`,36))]))}});export{Se as __pageData,fe as default};
