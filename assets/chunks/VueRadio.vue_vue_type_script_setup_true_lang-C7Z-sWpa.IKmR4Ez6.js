import{a as p,E as u,x as h,i as b,z as i}from"./Button.CfALiVhd.js";import{i as v,u as f,a as m}from"./form-control-utils.DiC9dPVW.js";import{y as w}from"./face-mixin.Dz5PWcWd.js";import{d as y,c as k,o as _,r as x,K as $}from"./framework.NAAYCHZu.js";var S=Object.defineProperty,o=(e,r,d,s)=>{for(var a=void 0,l=e.length-1,n;l>=0;l--)(n=e[l])&&(a=n(r,d,a)||a);return a&&S(r,d,a),a},c;const t=(c=class extends w(p){constructor(){super(...arguments),this.value="",this.checked=!1,this.disabled=!1,this.size="medium",this.theme="primary",this.labelText="",this.labelPosition="end",this.label="",this.labelHidden=!1,this.noLabel=!1,this.required=!1,this.invalid=!1,this.errorMessage="",this.helpText="",this._ids=v("ag-radio")}_syncFormValue(){this._internals.setFormValue(this.checked?this.value:null)}_isGroupChecked(){if(this.checked)return!0;const e=this.getRootNode();return Array.from(e.querySelectorAll(`ag-radio[name="${this.name}"]`)).some(r=>r.checked)}_syncValidity(){if(!this.required){this._internals.setValidity({});return}this._isGroupChecked()?this._internals.setValidity({}):this._internals.setValidity({valueMissing:!0},"Please select one of these options.")}formResetCallback(){this.checked=!1,this._internals.setFormValue(null),this._internals.setValidity({}),this._syncStates()}_syncStates(){this._setState("checked",this.checked),this._setState("disabled",this.disabled),this._setState("required",this.required),this._setState("invalid",!this._internals.validity.valid)}firstUpdated(){var e;this.inputRef=(e=this.shadowRoot)==null?void 0:e.querySelector(".radio-input"),this._syncFormValue(),this._syncValidity(),this._syncStates()}updated(e){super.updated(e),e.has("checked")&&(this._syncFormValue(),this._syncValidity(),this._syncStates())}handleClick(e){this.onClick&&this.onClick(e)}handleKeyDown(e){var l;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Home","End"].includes(e.key))return;e.preventDefault();const r=this.getRadiosInGroup();if(r.length===0)return;const d=r.indexOf(this);if(d===-1)return;let s;e.key==="Home"?s=0:e.key==="End"?s=r.length-1:e.key==="ArrowDown"||e.key==="ArrowRight"?s=(d+1)%r.length:s=(d-1+r.length)%r.length;const a=r[s];if(a&&!a.disabled){const n=(l=a.shadowRoot)==null?void 0:l.querySelector(".radio-input");if(n){n.focus(),a.checked=!0,a.uncheckOtherRadiosInGroup();const g=new CustomEvent("change",{detail:{checked:!0,value:a.value,name:a.name},bubbles:!0,composed:!0});a.dispatchEvent(g),a.onChange&&a.onChange(g)}}}getRadiosInGroup(){if(!this.name)return[];const e=this.getRootNode().querySelectorAll(`ag-radio[name="${this.name}"]`);return Array.from(e).filter(r=>r instanceof c&&!r.disabled)}handleChange(e){if(this.disabled){e.preventDefault();return}const r=e.target,d=this.checked;this.checked=r.checked,this._syncFormValue(),this._syncValidity(),this._syncStates(),this.checked&&!d&&this.name&&this.uncheckOtherRadiosInGroup();const s=new CustomEvent("change",{detail:{checked:this.checked,value:this.value,name:this.name},bubbles:!0,composed:!0});this.dispatchEvent(s),this.onChange&&this.onChange(s)}uncheckOtherRadiosInGroup(){this.getRootNode().querySelectorAll(`ag-radio[name="${this.name}"]`).forEach(e=>{e!==this&&e instanceof c&&(e.checked=!1,e._syncValidity(),e._syncStates())})}_renderExternalLabel(){return!this.label||this.noLabel?u:h`
      <label
        id="${this._ids.labelId}"
        for="${this._ids.inputId}"
        class="ag-form-control__label ag-radio__external-label ${this.labelHidden?"ag-form-control__label--hidden":""}"
        part="ag-radio-external-label"
      >
        ${this.label}
        ${this.required?h`
              <span class="ag-form-control__required" part="ag-required" aria-hidden="true">*</span>
            `:u}
      </label>
    `}_renderHelper(){return this.helpText?h`
      <div
        id="${this._ids.helperId}"
        class="ag-form-control__helper ag-radio__helper"
        part="ag-radio-helper"
      >
        ${this.helpText}
      </div>
    `:u}_renderError(){return h`
      <div
        id="${this._ids.errorId}"
        class="ag-form-control__error ag-radio__error"
        part="ag-radio-error"
        ?hidden="${!this.invalid||!this.errorMessage}"
      >
        ${this.errorMessage||""}
      </div>
    `}_getAriaDescribedBy(){return f({helperId:this._ids.helperId,errorId:this._ids.errorId,hasHelper:!!this.helpText,hasError:this.invalid&&!!this.errorMessage})}render(){const e=`
      radio-wrapper
      ${this.labelPosition==="start"?"radio-wrapper--label-start":""}
    `,r=`
      radio-indicator
      radio-indicator--${this.size}
      radio-indicator--${this.theme}
    `,d=`
      radio-label
      radio-label--${this.size}
    `,s=this._getAriaDescribedBy(),a=h`
      <label class=${e.trim()} part="ag-radio-wrapper">
        <input
          type="radio"
          id="${this._ids.inputId}"
          class="radio-input"
          part="ag-radio-input"
          name=${this.name}
          value=${this.value}
          .checked=${this.checked}
          ?disabled=${this.disabled}
          ?required=${this.required}
          aria-required="${this.required?"true":"false"}"
          aria-invalid="${this.invalid?"true":"false"}"
          aria-describedby="${s||u}"
          @click=${this.handleClick}
          @change=${this.handleChange}
          @keydown=${this.handleKeyDown}
          aria-checked=${this.checked?"true":"false"}
        />
        <span class=${r.trim()} part="ag-radio-indicator"></span>
        <span class=${d.trim()} part="ag-radio-label">
          ${this.labelText?this.labelText:h`<slot></slot>`}
        </span>
      </label>
    `;return this.label||this.helpText||this.errorMessage?h`
        <div class="ag-radio-wrapper-with-external">
          ${this._renderExternalLabel()}
          ${a}
          ${this._renderHelper()}
          ${this._renderError()}
        </div>
      `:a}},c.styles=[m,b`
      :host {
        display: inline-block;
      }

    .radio-wrapper {
      display: inline-flex;
      align-items: center;
      cursor: pointer;
      user-select: none;
      gap: var(--ag-space-3);
    }

    :host([disabled]) .radio-wrapper {
      cursor: not-allowed;
      opacity: 0.6;
    }

    .radio-wrapper--label-start {
      flex-direction: row-reverse;
    }

    .radio-input {
      position: absolute;
      width: 1px;
      height: 1px;
      opacity: 0;
      margin: 0;
      padding: 0;
    }

    .radio-indicator {
      position: relative;
      display: inline-block;
      flex-shrink: 0;
      border-radius: var(--ag-radius-full);
      transition: all var(--ag-motion-fast) ease-in-out;
    }

    /* Size variants */
    .radio-indicator--small {
      width: 12px;
      height: 12px;
    }

    .radio-indicator--medium {
      width: 14px;
      height: 14px;
    }

    .radio-indicator--large {
      width: 16px;
      height: 16px;
    }

    /* Default theme - alias to primary */
    .radio-indicator--default {
      border: var(--ag-border-width-2) solid var(--ag-primary-border);
      background: var(--ag-white);
      box-shadow: 0 0 0 var(--ag-border-width-2) transparent;
    }

    .radio-input:checked + .radio-indicator--default {
      background: var(--ag-primary);
      border-color: var(--ag-primary);
      box-shadow: 0 0 0 var(--ag-border-width-2) var(--ag-white) inset;
    }

    .radio-input:focus + .radio-indicator--default {
      box-shadow: 0 0 0 var(--ag-border-width-2) var(--ag-primary-border),
                  0 0 0 calc(var(--ag-focus-width) + var(--ag-border-width-2)) var(--ag-white),
                  0 0 0 calc(var(--ag-focus-width) + var(--ag-border-width-2) + var(--ag-focus-offset)) rgba(var(--ag-focus), 0.5);
    }

    .radio-input:checked:focus + .radio-indicator--default {
      box-shadow: 0 0 0 var(--ag-border-width-2) var(--ag-white) inset,
                  0 0 0 calc(var(--ag-focus-width) + var(--ag-border-width-2)) var(--ag-white),
                  0 0 0 calc(var(--ag-focus-width) + var(--ag-border-width-2) + var(--ag-focus-offset)) rgba(var(--ag-focus), 0.5);
    }

    /* Primary theme */
    .radio-indicator--primary {
      border: var(--ag-border-width-2) solid var(--ag-primary-border);
      background: var(--ag-white);
      box-shadow: 0 0 0 var(--ag-border-width-2) transparent;
    }

    .radio-input:checked + .radio-indicator--primary {
      background: var(--ag-primary);
      border-color: var(--ag-primary);
      box-shadow: 0 0 0 var(--ag-border-width-2) var(--ag-white) inset;
    }

    .radio-input:focus + .radio-indicator--primary {
      box-shadow: 0 0 0 var(--ag-border-width-2) var(--ag-primary-border),
                  0 0 0 calc(var(--ag-focus-width) + var(--ag-border-width-2)) var(--ag-white),
                  0 0 0 calc(var(--ag-focus-width) + var(--ag-border-width-2) + var(--ag-focus-offset)) rgba(var(--ag-focus), 0.5);
    }

    .radio-input:checked:focus + .radio-indicator--primary {
      box-shadow: 0 0 0 var(--ag-border-width-2) var(--ag-white) inset,
                  0 0 0 calc(var(--ag-focus-width) + var(--ag-border-width-2)) var(--ag-white),
                  0 0 0 calc(var(--ag-focus-width) + var(--ag-border-width-2) + var(--ag-focus-offset)) rgba(var(--ag-focus), 0.5);
    }

    /* Success theme - green */
    .radio-indicator--success {
      border: var(--ag-border-width-2) solid var(--ag-border);
      background: var(--ag-white);
      box-shadow: 0 0 0 var(--ag-border-width-2) transparent;
    }

    .radio-input:checked + .radio-indicator--success {
      background: var(--ag-success);
      border-color: var(--ag-success);
      box-shadow: 0 0 0 var(--ag-border-width-2) var(--ag-white) inset;
    }

    .radio-input:focus + .radio-indicator--success {
      box-shadow: 0 0 0 var(--ag-border-width-2) var(--ag-border),
                  0 0 0 calc(var(--ag-focus-width) + var(--ag-border-width-2)) var(--ag-white),
                  0 0 0 calc(var(--ag-focus-width) + var(--ag-border-width-2) + var(--ag-focus-offset)) rgba(var(--ag-focus), 0.5);
    }

    .radio-input:checked:focus + .radio-indicator--success {
      box-shadow: 0 0 0 var(--ag-border-width-2) var(--ag-white) inset,
                  0 0 0 calc(var(--ag-focus-width) + var(--ag-border-width-2)) var(--ag-white),
                  0 0 0 calc(var(--ag-focus-width) + var(--ag-border-width-2) + var(--ag-focus-offset)) rgba(var(--ag-focus), 0.5);
    }

    /* Monochrome theme */
    .radio-indicator--monochrome {
      border: var(--ag-border-width-2) solid var(--ag-black);
      background: var(--ag-white);
      box-shadow: 0 0 0 var(--ag-border-width-2) transparent;
    }

    .radio-input:checked + .radio-indicator--monochrome {
      background: var(--ag-black);
      border-color: var(--ag-black);
      box-shadow: 0 0 0 var(--ag-border-width-2) var(--ag-white) inset;
    }

    .radio-input:focus + .radio-indicator--monochrome {
      box-shadow: 0 0 0 var(--ag-border-width-2) var(--ag-black),
                  0 0 0 calc(var(--ag-focus-width) + var(--ag-border-width-2)) var(--ag-white),
                  0 0 0 calc(var(--ag-focus-width) + var(--ag-border-width-2) + var(--ag-focus-offset)) rgba(var(--ag-focus), 0.5);
    }

    .radio-input:checked:focus + .radio-indicator--monochrome {
      box-shadow: 0 0 0 var(--ag-border-width-2) var(--ag-white) inset,
                  0 0 0 calc(var(--ag-focus-width) + var(--ag-border-width-2)) var(--ag-white),
                  0 0 0 calc(var(--ag-focus-width) + var(--ag-border-width-2) + var(--ag-focus-offset)) rgba(var(--ag-focus), 0.5);
    }

    .radio-label {
      display: inline-block;
    }

    .radio-label--small {
      font-size: 0.875rem;
    }

    .radio-label--medium {
      font-size: 1rem;
    }

    .radio-label--large {
      font-size: 1.125rem;
    }

    /* Respect reduced motion preferences */
    @media (prefers-reduced-motion: reduce) {
      .radio-indicator {
        transition: none;
      }
    }

    /* High contrast mode support */
    @media (prefers-contrast: high) {
      .radio-indicator {
        outline: var(--ag-border-width-1) solid;
      }
    }
  `],c);o([i({type:String,reflect:!0})],t.prototype,"value");o([i({type:Boolean,reflect:!0})],t.prototype,"checked");o([i({type:Boolean,reflect:!0})],t.prototype,"disabled");o([i({type:String})],t.prototype,"size");o([i({type:String})],t.prototype,"theme");o([i({type:String})],t.prototype,"labelText");o([i({type:String})],t.prototype,"labelPosition");o([i({type:String})],t.prototype,"label");o([i({type:Boolean,attribute:"label-hidden"})],t.prototype,"labelHidden");o([i({type:Boolean,attribute:"no-label"})],t.prototype,"noLabel");o([i({type:Boolean,reflect:!0})],t.prototype,"required");o([i({type:Boolean,reflect:!0})],t.prototype,"invalid");o([i({type:String,attribute:"error-message"})],t.prototype,"errorMessage");o([i({type:String,attribute:"help-text"})],t.prototype,"helpText");o([i({attribute:!1})],t.prototype,"onClick");o([i({attribute:!1})],t.prototype,"onChange");let q=t;customElements.get("ag-radio")||customElements.define("ag-radio",q);const C=[".checked",".disabled",".required",".invalid","name","value","size","theme","labelText","labelPosition","label","labelHidden","noLabel","errorMessage","helpText"],V=y({__name:"VueRadio",props:{name:{default:""},value:{default:""},checked:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},size:{default:"medium"},theme:{default:"default"},labelText:{default:""},labelPosition:{default:"end"},label:{default:""},labelHidden:{type:Boolean,default:!1},noLabel:{type:Boolean,default:!1},required:{type:Boolean,default:!1},invalid:{type:Boolean,default:!1},errorMessage:{default:""},helpText:{default:""}},emits:["click","change","update:checked"],setup(e,{emit:r}){const d=r,s=l=>{d("click",l)},a=l=>{const n=l.detail;d("change",n),d("update:checked",n.checked)};return(l,n)=>(_(),k("ag-radio",$({".checked":e.checked,".disabled":e.disabled,".required":e.required,".invalid":e.invalid,name:e.name,value:e.value,size:e.size,theme:e.theme,labelText:e.labelText,labelPosition:e.labelPosition,label:e.label,labelHidden:e.labelHidden,noLabel:e.noLabel,errorMessage:e.errorMessage,helpText:e.helpText,onClick:s,onChange:a},l.$attrs),[x(l.$slots,"default")],48,C))}});export{V as m};
