import{i as p,z as d,a as b,E as u,x as h}from"./Button.Bujdzq23.js";import{a as f,i as v,u as w}from"./form-control-utils.LZkauYsx.js";import{d as m,p as y,c as k,o as x,r as $,K as _}from"./framework.NAAYCHZu.js";var T=Object.defineProperty,s=(e,t,a,i)=>{for(var r=void 0,n=e.length-1,l;n>=0;n--)(l=e[n])&&(r=l(t,a,r)||r);return r&&T(t,a,r),r},g;const o=(g=class extends b{constructor(){super(...arguments),this.name="",this.value="",this.checked=!1,this.disabled=!1,this.size="medium",this.theme="primary",this.labelText="",this.labelPosition="end",this.label="",this.labelHidden=!1,this.noLabel=!1,this.required=!1,this.invalid=!1,this.errorMessage="",this.helpText="",this._ids=v("ag-radio")}handleClick(e){this.onClick&&this.onClick(e)}handleKeyDown(e){var n;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Home","End"].includes(e.key))return;e.preventDefault();const t=this.getRadiosInGroup();if(t.length===0)return;const a=t.indexOf(this);if(a===-1)return;let i;e.key==="Home"?i=0:e.key==="End"?i=t.length-1:e.key==="ArrowDown"||e.key==="ArrowRight"?i=(a+1)%t.length:i=(a-1+t.length)%t.length;const r=t[i];if(r&&!r.disabled){const l=(n=r.shadowRoot)==null?void 0:n.querySelector(".radio-input");if(l){l.focus(),r.checked=!0,r.uncheckOtherRadiosInGroup();const c=new CustomEvent("change",{detail:{checked:!0,value:r.value,name:r.name},bubbles:!0,composed:!0});r.dispatchEvent(c),r.onChange&&r.onChange(c)}}}getRadiosInGroup(){var a;if(!this.name)return[];let e=this.getRootNode();for(;e&&"host"in e;){const i=(a=e.host)==null?void 0:a.getRootNode();if(i&&i!==e)e=i;else break}const t=(e instanceof Document?e:document).querySelectorAll(`ag-radio[name="${this.name}"]`);return Array.from(t).filter(i=>i instanceof g&&!i.disabled)}handleChange(e){if(this.disabled){e.preventDefault();return}const t=e.target,a=this.checked;this.checked=t.checked,this.checked&&!a&&this.name&&this.uncheckOtherRadiosInGroup();const i=new CustomEvent("change",{detail:{checked:this.checked,value:this.value,name:this.name},bubbles:!0,composed:!0});this.dispatchEvent(i),this.onChange&&this.onChange(i)}uncheckOtherRadiosInGroup(){var t;let e=this.getRootNode();for(;e&&"host"in e;){const a=(t=e.host)==null?void 0:t.getRootNode();if(a&&a!==e)e=a;else break}(e instanceof Document?e:document).querySelectorAll(`ag-radio[name="${this.name}"]`).forEach(a=>{a!==this&&a instanceof g&&(a.checked=!1)})}_renderExternalLabel(){return!this.label||this.noLabel?u:h`
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
    `}_getAriaDescribedBy(){return w({helperId:this._ids.helperId,errorId:this._ids.errorId,hasHelper:!!this.helpText,hasError:this.invalid&&!!this.errorMessage})}render(){const e=`
      radio-wrapper
      ${this.labelPosition==="start"?"radio-wrapper--label-start":""}
    `,t=`
      radio-indicator
      radio-indicator--${this.size}
      radio-indicator--${this.theme}
    `,a=`
      radio-label
      radio-label--${this.size}
    `,i=this._getAriaDescribedBy(),r=h`
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
          aria-describedby="${i||u}"
          @click=${this.handleClick}
          @change=${this.handleChange}
          @keydown=${this.handleKeyDown}
          aria-checked=${this.checked?"true":"false"}
        />
        <span class=${t.trim()} part="ag-radio-indicator"></span>
        <span class=${a.trim()} part="ag-radio-label">
          ${this.labelText?this.labelText:h`<slot></slot>`}
        </span>
      </label>
    `;return this.label||this.helpText||this.errorMessage?h`
        <div class="ag-radio-wrapper-with-external">
          ${this._renderExternalLabel()}
          ${r}
          ${this._renderHelper()}
          ${this._renderError()}
        </div>
      `:r}},g.styles=[f,p`
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
  `],g);s([d({type:String,reflect:!0})],o.prototype,"name");s([d({type:String,reflect:!0})],o.prototype,"value");s([d({type:Boolean,reflect:!0})],o.prototype,"checked");s([d({type:Boolean,reflect:!0})],o.prototype,"disabled");s([d({type:String})],o.prototype,"size");s([d({type:String})],o.prototype,"theme");s([d({type:String})],o.prototype,"labelText");s([d({type:String})],o.prototype,"labelPosition");s([d({type:String})],o.prototype,"label");s([d({type:Boolean,attribute:"label-hidden"})],o.prototype,"labelHidden");s([d({type:Boolean,attribute:"no-label"})],o.prototype,"noLabel");s([d({type:Boolean,reflect:!0})],o.prototype,"required");s([d({type:Boolean,reflect:!0})],o.prototype,"invalid");s([d({type:String,attribute:"error-message"})],o.prototype,"errorMessage");s([d({type:String,attribute:"help-text"})],o.prototype,"helpText");s([d({attribute:!1})],o.prototype,"onClick");s([d({attribute:!1})],o.prototype,"onChange");let C=o;customElements.get("ag-radio")||customElements.define("ag-radio",C);const q=[".checked",".disabled",".required",".invalid","name","value","size","theme","labelText","labelPosition","label","labelHidden","noLabel","errorMessage","helpText"],S=m({__name:"VueRadio",props:{name:{default:""},value:{default:""},checked:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},size:{default:"medium"},theme:{default:"default"},labelText:{default:""},labelPosition:{default:"end"},label:{default:""},labelHidden:{type:Boolean,default:!1},noLabel:{type:Boolean,default:!1},required:{type:Boolean,default:!1},invalid:{type:Boolean,default:!1},errorMessage:{default:""},helpText:{default:""}},emits:["click","change","update:checked"],setup(e,{emit:t}){const a=t,i=y(),r=l=>{a("click",l)},n=l=>{const c=l.detail;a("change",c),a("update:checked",c.checked)};return(l,c)=>(x(),k("ag-radio",_({ref_key:"radioRef",ref:i,".checked":e.checked,".disabled":e.disabled,".required":e.required,".invalid":e.invalid,name:e.name,value:e.value,size:e.size,theme:e.theme,labelText:e.labelText,labelPosition:e.labelPosition,label:e.label,labelHidden:e.labelHidden,noLabel:e.noLabel,errorMessage:e.errorMessage,helpText:e.helpText,onClick:r,onChange:n},l.$attrs),[$(l.$slots,"default")],48,q))}});export{S as g};
