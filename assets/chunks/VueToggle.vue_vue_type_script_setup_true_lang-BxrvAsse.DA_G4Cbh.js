import{i as f,z as l,a as v,x as d,Q as c}from"./Button.Bujdzq23.js";import{a as m,i as y,t as b,u as k}from"./form-control-utils.LZkauYsx.js";import{d as _,p as x,c as $,q as w,o as z,K as I}from"./framework.NAAYCHZu.js";var T=Object.defineProperty,i=(e,o,t,s)=>{for(var r=void 0,h=e.length-1,g;h>=0;h--)(g=e[h])&&(r=g(o,t,r)||r);return r&&T(o,t,r),r};const u=class extends v{constructor(){super(),this._toggleId="",this._labelId="",this._helperId="",this._errorId="",this.labelPosition="top",this._handleClick=t=>{this.onClick&&this.onClick(t),this._performToggle(t)},this._handleKeydown=t=>{(t.key===" "||t.key==="Enter")&&(t.preventDefault(),this._performToggle(t))},this._performToggle=t=>{if(this.disabled||this.readonly){t.preventDefault();return}this.checked=!this.checked;const s=new CustomEvent("toggle-change",{detail:{checked:this.checked,name:this.name,value:this.value},bubbles:!0,composed:!0});this.dispatchEvent(s),this.onToggleChange&&this.onToggleChange(s)};const o=y("toggle");this._toggleId=o.inputId,this._labelId=o.labelId,this._helperId=o.helperId,this._errorId=o.errorId,this.label="",this.labelHidden=!1,this.noLabel=!1,this.checked=!1,this.size="md",this.variant="default",this.disabled=!1,this.readonly=!1,this.required=!1,this.invalid=!1,this.errorMessage="",this.helpText="",this.name="",this.value=""}firstUpdated(){!this.label&&!this.noLabel&&console.warn("AgToggle: label property is required for accessibility.")}renderLabel(){if(!this.label||this.noLabel)return"";const o=[];return b(this.labelPosition)?(o.push("ag-form-control__label--horizontal"),o.push(`ag-form-control__label--${this.labelPosition}`)):this.labelPosition==="bottom"&&o.push(`ag-form-control__label--${this.labelPosition}`),d`
      <label
        id=${this._labelId}
        for=${this._toggleId}
        class="ag-form-control__label ${this.labelHidden?"ag-form-control__label--hidden":""} ${this.required?"ag-form-control__label--required":""} ${o.join(" ")}"
        part="ag-toggle-label"
      >
        ${this.label}
      </label>
    `}render(){const o=k({helperId:this._helperId,errorId:this._errorId,hasHelper:!!this.helpText&&!this.invalid,hasError:!!this.invalid&&!!this.errorMessage}),t=this.helpText&&!this.invalid?d`<div class="ag-form-control__helper" id="${this._helperId}">
          ${this.helpText}
        </div>`:"",s=this.invalid&&this.errorMessage?d`<div class="ag-form-control__error" id="${this._errorId}">
          ${this.errorMessage}
        </div>`:"",r=d`
      <button
        id="${this._toggleId}"
        role="switch"
        aria-checked="${this.checked}"
        aria-labelledby="${c(this.label&&!this.noLabel?this._labelId:void 0)}"
        aria-describedby="${c(o)}"
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
    `;return b(this.labelPosition)?d`
        <div class="ag-form-control--horizontal">
          ${this.renderLabel()}
          ${r}
        </div>
        ${t}
        ${s}
      `:this.labelPosition==="bottom"?d`
        ${r}
        ${t}
        ${s}
        ${this.renderLabel()}
      `:d`
      ${this.renderLabel()}
      ${r}
      ${t}
      ${s}
    `}};u.styles=[m,f`
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
  `];let a=u;i([l({type:String})],a.prototype,"label");i([l({type:String,attribute:"label-position"})],a.prototype,"labelPosition");i([l({type:Boolean,attribute:"label-hidden"})],a.prototype,"labelHidden");i([l({type:Boolean,attribute:"no-label"})],a.prototype,"noLabel");i([l({type:Boolean,reflect:!0})],a.prototype,"checked");i([l({type:String,reflect:!0})],a.prototype,"size");i([l({type:String,reflect:!0})],a.prototype,"variant");i([l({type:Boolean,reflect:!0})],a.prototype,"disabled");i([l({type:Boolean,reflect:!0})],a.prototype,"readonly");i([l({type:Boolean,reflect:!0})],a.prototype,"required");i([l({type:Boolean,reflect:!0})],a.prototype,"invalid");i([l({type:String,attribute:"error-message"})],a.prototype,"errorMessage");i([l({type:String,attribute:"help-text"})],a.prototype,"helpText");i([l({type:String})],a.prototype,"name");i([l({type:String})],a.prototype,"value");i([l({attribute:!1})],a.prototype,"onClick");i([l({attribute:!1})],a.prototype,"onToggleChange");customElements.get("ag-toggle")||customElements.define("ag-toggle",a);const B=["label",".labelPosition",".labelHidden",".noLabel","size","variant",".checked",".disabled",".readonly",".required",".invalid","errorMessage","helpText","name","value"],M=_({__name:"VueToggle",props:{label:{},labelPosition:{default:"top"},labelHidden:{type:Boolean,default:!1},noLabel:{type:Boolean,default:!1},checked:{type:Boolean,default:!1},size:{default:"md"},variant:{default:"default"},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},invalid:{type:Boolean,default:!1},errorMessage:{default:""},helpText:{default:""},name:{},value:{}},emits:["click","toggle-change","update:checked"],setup(e,{emit:o}){const t=e,s=o,r=x(),h=n=>{s("click",n)},g=n=>{const p=n;s("toggle-change",p.detail),s("update:checked",p.detail.checked)};return w(()=>t.checked,n=>{r.value&&r.value.checked!==n&&(r.value.checked=n)}),(n,p)=>(z(),$("ag-toggle",I({ref_key:"toggleRef",ref:r,label:e.label,".labelPosition":e.labelPosition,".labelHidden":e.labelHidden,".noLabel":e.noLabel,size:e.size,variant:e.variant,".checked":e.checked,".disabled":e.disabled,".readonly":e.readonly,".required":e.required,".invalid":e.invalid,errorMessage:e.errorMessage,helpText:e.helpText,name:e.name,value:e.value,onClick:h,onToggleChange:g},n.$attrs),null,48,B))}});export{M as v};
