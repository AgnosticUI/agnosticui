import{a as v,x as d,Q as p,i as f,z as l}from"./Button.CfALiVhd.js";import{i as y,t as u,u as m,a as _}from"./form-control-utils.DiC9dPVW.js";import{y as k}from"./face-mixin.Dz5PWcWd.js";import{d as x,p as $,c as w,q as z,o as I,K as S}from"./framework.BZTe5Kj6.js";var T=Object.defineProperty,o=(t,e,a,r)=>{for(var s=void 0,h=t.length-1,g;h>=0;h--)(g=t[h])&&(s=g(e,a,s)||s);return s&&T(e,a,s),s};const b=class extends k(v){constructor(){super(),this._toggleId="",this._labelId="",this._helperId="",this._errorId="",this.labelPosition="top",this._handleClick=a=>{this.onClick&&this.onClick(a),this._performToggle(a)},this._handleKeydown=a=>{(a.key===" "||a.key==="Enter")&&(a.preventDefault(),this._performToggle(a))},this._performToggle=a=>{if(this.disabled||this.readonly){a.preventDefault();return}this.checked=!this.checked,this._internals.setFormValue(this.checked?this.value||"on":null),this._syncValidity(),this._syncStates();const r=new CustomEvent("toggle-change",{detail:{checked:this.checked,name:this.name,value:this.value},bubbles:!0,composed:!0});this.dispatchEvent(r),this.onToggleChange&&this.onToggleChange(r)};const e=y("toggle");this._toggleId=e.inputId,this._labelId=e.labelId,this._helperId=e.helperId,this._errorId=e.errorId,this.label="",this.labelHidden=!1,this.noLabel=!1,this.checked=!1,this.size="md",this.variant="default",this.disabled=!1,this.readonly=!1,this.required=!1,this.invalid=!1,this.errorMessage="",this.helpText="",this.value="",this.validationMessages=void 0}formResetCallback(){this.checked=!1,this._internals.setFormValue(null),this._internals.setValidity({}),this._syncStates()}_syncValidity(){var e;this.required&&!this.checked?this._internals.setValidity({valueMissing:!0},((e=this.validationMessages)==null?void 0:e.valueMissing)??"Please check this field."):this._internals.setValidity({})}_syncStates(){this._setState("checked",this.checked),this._setState("disabled",this.disabled),this._setState("readonly",this.readonly),this._setState("required",this.required),this._setState("invalid",!this._internals.validity.valid)}updated(e){super.updated(e),(e.has("disabled")||e.has("readonly"))&&this._syncStates()}firstUpdated(){this._internals.setFormValue(this.checked?this.value||"on":null),this._syncValidity(),this._syncStates(),!this.label&&!this.noLabel&&console.warn("AgToggle: label property is required for accessibility.")}renderLabel(){if(!this.label||this.noLabel)return"";const e=[];return u(this.labelPosition)?(e.push("ag-form-control__label--horizontal"),e.push(`ag-form-control__label--${this.labelPosition}`)):this.labelPosition==="bottom"&&e.push(`ag-form-control__label--${this.labelPosition}`),d`
      <label
        id=${this._labelId}
        for=${this._toggleId}
        class="ag-form-control__label ${this.labelHidden?"ag-form-control__label--hidden":""} ${this.required?"ag-form-control__label--required":""} ${e.join(" ")}"
        part="ag-toggle-label"
      >
        ${this.label}
      </label>
    `}render(){const e=m({helperId:this._helperId,errorId:this._errorId,hasHelper:!!this.helpText&&!this.invalid,hasError:!!this.invalid&&!!this.errorMessage}),a=this.helpText&&!this.invalid?d`<div class="ag-form-control__helper" id="${this._helperId}">
          ${this.helpText}
        </div>`:"",r=this.invalid&&this.errorMessage?d`<div class="ag-form-control__error" id="${this._errorId}">
          ${this.errorMessage}
        </div>`:"",s=d`
      <button
        id="${this._toggleId}"
        role="switch"
        aria-checked="${this.checked}"
        aria-labelledby="${p(this.label&&!this.noLabel?this._labelId:void 0)}"
        aria-describedby="${p(e)}"
        ?disabled="${this.disabled}"
        class="ag-toggle ag-toggle--${this.size} ag-toggle--${this.variant}"
        part="ag-toggle-button"
        @click="${this._handleClick}"
        @keydown="${this._handleKeydown}"
      >
        <span class="ag-toggle__track" part="ag-toggle-track">
          <span class="ag-toggle__handle" part="ag-toggle-handle"></span>
        </span>

        <!-- Screen reader state indication -->
        <span class="visually-hidden">
          ${this.checked?"On":"Off"}
        </span>
      </button>
    `;return u(this.labelPosition)?d`
        <div class="ag-form-control--horizontal">
          ${this.renderLabel()}
          ${s}
        </div>
        ${a}
        ${r}
      `:this.labelPosition==="bottom"?d`
        ${s}
        ${a}
        ${r}
        ${this.renderLabel()}
      `:d`
      ${this.renderLabel()}
      ${s}
      ${a}
      ${r}
    `}};b.styles=[_,f`
    /* MINIMALIST & THEMEABLE - Styling via --ag-* design tokens */
    :host {
      /* Block for label positioning support */
      display: block;
    }

    button {
      /* Reset browser button styles */
      margin: 0;
      border: none;
      background: transparent;
      cursor: pointer;
      font-family: inherit;
      color: inherit;
      padding: 0;

      /* Flexbox for track/handle layout */
      display: flex;
      align-items: center;
      position: relative;

      /* Touch target accessibility - minimum 44px */
      min-inline-size: 44px;
      min-block-size: 44px;

      /* Focus management */
      border-radius: var(--ag-focus-border-radius);
      transition: all var(--ag-transition-duration) ease;
    }

    button:focus-visible {
      outline: var(--ag-focus-width) solid rgba(var(--ag-focus), 0.5);
      outline-offset: var(--ag-focus-offset);
    }

    button:disabled {
      cursor: not-allowed;
      opacity: 0.6;
      pointer-events: none;
    }

    .ag-toggle__track {
      /* Track container */
      position: relative;
      display: flex;
      align-items: center;
      border-radius: 9999px;
      transition: inherit;

      /* Default size - will be overridden by size variants */
      width: var(--toggle-width, 40px);
      height: var(--toggle-height, 20px);

      /* Functional styling only */
      background: var(--ag-neutral-300);
      border: 1px solid transparent;
    }

    .ag-toggle__handle {
      /* Handle positioning and animation */
      position: absolute;
      top: 50%;
      inset-inline-start: 2px;
      transform: translateY(-50%);
      border-radius: 50%;
      transition: transform var(--ag-transition-duration) ease;

      /* Default handle size */
      width: var(--handle-size, 18px);
      height: var(--handle-size, 18px);

      /* Functional styling only */
      background: var(--ag-white);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }

    /* Checked state - handle moves to right */
    :host([checked]) .ag-toggle__handle {
      transform: translateY(-50%) translateX(calc(var(--toggle-width) - var(--handle-size) - 4px));
    }

    /* RTL Support - flip handle movement direction */
    :host-context([dir="rtl"]):host([checked]) .ag-toggle__handle {
      transform: translateY(-50%) translateX(calc(-1 * (var(--toggle-width) - var(--handle-size) - 4px)));
    }

    /* Size variants with 2:1 width:height ratio */
    :host([size="xs"]) {
      --toggle-width: 28px;
      --toggle-height: 14px;
      --handle-size: 12px;
    }

    :host([size="sm"]) {
      --toggle-width: 34px;
      --toggle-height: 17px;
      --handle-size: 15px;
    }

    :host([size="md"]) {
      --toggle-width: 40px;
      --toggle-height: 20px;
      --handle-size: 18px;
    }

    :host([size="lg"]) {
      --toggle-width: 48px;
      --toggle-height: 24px;
      --handle-size: 22px;
    }

    :host([size="xl"]) {
      --toggle-width: 56px;
      --toggle-height: 28px;
      --handle-size: 26px;
    }

    /* Checked state coloring */
    :host([checked]) .ag-toggle__track {
      background: var(--ag-primary);
    }

    :host([checked][variant="success"]) .ag-toggle__track {
      background: var(--ag-success);
    }

    :host([checked][variant="warning"]) .ag-toggle__track {
      background: var(--ag-warning);
    }

    :host([checked][variant="danger"]) .ag-toggle__track {
      background: var(--ag-danger);
    }

    :host([checked][variant="monochrome"]) .ag-toggle__track {
      background: var(--ag-background-primary-inverted);
    }

    :host([checked][variant="monochrome"]) .ag-toggle__handle {
      background: var(--ag-text-primary-inverted);
    }

    /* Readonly state */
    :host([readonly]) button {
      cursor: default;
    }

    /* Screen reader only text */
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
  `];let i=b;o([l({type:String})],i.prototype,"label");o([l({type:String,attribute:"label-position"})],i.prototype,"labelPosition");o([l({type:Boolean,attribute:"label-hidden"})],i.prototype,"labelHidden");o([l({type:Boolean,attribute:"no-label"})],i.prototype,"noLabel");o([l({type:Boolean,reflect:!0})],i.prototype,"checked");o([l({type:String,reflect:!0})],i.prototype,"size");o([l({type:String,reflect:!0})],i.prototype,"variant");o([l({type:Boolean,reflect:!0})],i.prototype,"disabled");o([l({type:Boolean,reflect:!0})],i.prototype,"readonly");o([l({type:Boolean,reflect:!0})],i.prototype,"required");o([l({type:Boolean,reflect:!0})],i.prototype,"invalid");o([l({type:String,attribute:"error-message"})],i.prototype,"errorMessage");o([l({type:String,attribute:"help-text"})],i.prototype,"helpText");o([l({type:String})],i.prototype,"value");o([l({attribute:!1})],i.prototype,"onClick");o([l({attribute:!1})],i.prototype,"validationMessages");o([l({attribute:!1})],i.prototype,"onToggleChange");customElements.get("ag-toggle")||customElements.define("ag-toggle",i);const M=["label",".labelPosition",".labelHidden",".noLabel","size","variant",".checked",".disabled",".readonly",".required",".invalid","errorMessage","helpText","name","value",".validationMessages"],E=x({__name:"VueToggle",props:{label:{},labelPosition:{default:"top"},labelHidden:{type:Boolean,default:!1},noLabel:{type:Boolean,default:!1},checked:{type:Boolean,default:!1},size:{default:"md"},variant:{default:"default"},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},invalid:{type:Boolean,default:!1},errorMessage:{default:""},helpText:{default:""},name:{},value:{},validationMessages:{}},emits:["click","toggle-change","update:checked"],setup(t,{emit:e}){const a=t,r=e,s=$(),h=n=>{r("click",n)},g=n=>{const c=n;r("toggle-change",c.detail),r("update:checked",c.detail.checked)};return z(()=>a.checked,n=>{s.value&&s.value.checked!==n&&(s.value.checked=n)}),(n,c)=>(I(),w("ag-toggle",S({ref_key:"toggleRef",ref:s,label:t.label,".labelPosition":t.labelPosition,".labelHidden":t.labelHidden,".noLabel":t.noLabel,size:t.size,variant:t.variant,".checked":t.checked,".disabled":t.disabled,".readonly":t.readonly,".required":t.required,".invalid":t.invalid,errorMessage:t.errorMessage,helpText:t.helpText,name:t.name,value:t.value,".validationMessages":t.validationMessages,onClick:h,onToggleChange:g},n.$attrs),null,48,M))}});export{E as m};
