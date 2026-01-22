import{i as p,z as t,a as u,E as l,x as s}from"./Button.DkmThuAs.js";import{a as g,i as f,u as x}from"./form-control-utils.oxcP5Ntc.js";var k=Object.defineProperty,a=(h,r,o,c)=>{for(var i=void 0,n=h.length-1,d;n>=0;n--)(d=h[n])&&(i=d(r,o,i)||i);return i&&k(r,o,i),i};const b=class extends u{constructor(){super(),this._ids=f("ag-checkbox"),this.name="",this.value="",this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.size="medium",this.theme="primary",this.labelText="",this.labelPosition="end",this.required=!1,this.invalid=!1,this.errorMessage="",this.helpText=""}get controlElement(){return this.inputRef||null}updated(r){super.updated(r),r.has("indeterminate")&&this.inputRef&&(this.inputRef.indeterminate=this.indeterminate)}handleClick(r){this.onClick&&this.onClick(r)}handleChange(r){if(this.disabled){r.preventDefault();return}const o=r.target;this.checked=o.checked,this.indeterminate&&(this.indeterminate=!1);const c=new CustomEvent("change",{detail:{checked:this.checked,value:this.value,name:this.name,indeterminate:this.indeterminate},bubbles:!0,composed:!0});this.dispatchEvent(c),this.onChange&&this.onChange(c)}_renderHelper(){return this.helpText?s`
      <div
        id="${this._ids.helperId}"
        class="ag-form-control__helper ag-checkbox__helper"
        part="ag-checkbox-helper"
      >
        ${this.helpText}
      </div>
    `:l}_renderError(){return!this.invalid||!this.errorMessage?l:s`
      <div
        id="${this._ids.errorId}"
        class="ag-form-control__error ag-checkbox__error"
        part="ag-checkbox-error"
      >
        ${this.errorMessage}
      </div>
    `}_getAriaDescribedBy(){return x({helperId:this._ids.helperId,errorId:this._ids.errorId,hasHelper:!!this.helpText,hasError:this.invalid&&!!this.errorMessage})}render(){const r=`
      checkbox-wrapper
      ${this.labelPosition==="start"?"checkbox-wrapper--label-start":""}
    `,o=`
      checkbox-label
      checkbox-label--${this.size}
      checkbox-label--${this.theme}
    `,c=`
      checkbox-label-copy
      checkbox-label-copy--${this.size}
    `,i=this._getAriaDescribedBy();return s`
      <div class="ag-checkbox-container">
        <label 
          for="${this._ids.inputId}"
          class=${r.trim()} 
          part="ag-checkbox-wrapper"
        >
          <input
            type="checkbox"
            id="${this._ids.inputId}"
            class="checkbox-input"
            part="ag-checkbox-input"
            name=${this.name}
            value=${this.value}
            .checked=${this.checked}
            .indeterminate=${this.indeterminate}
            ?disabled=${this.disabled}
            ?required=${this.required}
            aria-label="${this.labelText||"Checkbox"}"
            aria-required="${this.required?"true":"false"}"
            aria-invalid="${this.invalid?"true":"false"}"
            aria-describedby="${i||l}"
            aria-checked=${this.indeterminate?"mixed":this.checked?"true":"false"}
            @click=${this.handleClick}
            @change=${this.handleChange}
          />
          <span
            class=${o.trim()}
            part="ag-checkbox-indicator"
            aria-hidden="true"
          ></span>
          <span class=${c.trim()} part="ag-checkbox-label">
            ${this.labelText||s`<slot></slot>`}
            ${this.required?s`<span class="ag-form-control__required" aria-label="required">*</span>`:l}
          </span>
        </label>
        ${this._renderHelper()}
        ${this._renderError()}
      </div>
    `}firstUpdated(){var r;this.inputRef=(r=this.shadowRoot)==null?void 0:r.querySelector(".checkbox-input"),this.inputRef&&this.indeterminate&&(this.inputRef.indeterminate=this.indeterminate)}};b.styles=[g,p`
      :host {
        display: inline-block;
      }

    .checkbox-wrapper {
      display: inline-flex;
      align-items: center;
      cursor: pointer;
      user-select: none;
      gap: 0;
    }

    :host([disabled]) .checkbox-wrapper {
      cursor: not-allowed;
      opacity: 0.6;
    }

    .checkbox-wrapper--label-start {
      flex-direction: row-reverse;
    }

    .checkbox-input {
      position: absolute;
      width: 1px;
      height: 1px;
      opacity: 0;
      margin: 0;
      padding: 0;
      clip: rect(0, 0, 0, 0);
      overflow: hidden;
    }

    .checkbox-label {
      position: relative;
      display: inline-flex;
      align-items: center;
      flex-shrink: 0;
    }

    /* The box - drawn with ::before */
    .checkbox-label::before {
      content: '';
      display: inline-block;
      flex-shrink: 0;
      margin-inline-end: var(--ag-space-3);
      border-radius: var(--ag-radius-sm);
      transition: all var(--ag-motion-fast) ease-in-out;
    }

    /* The checkmark - drawn with ::after */
    .checkbox-label::after {
      content: '';
      position: absolute;
      display: block;
      opacity: 0;
      transform: rotate(40deg) scale(0);
      transform-origin: center center;
      transition: all var(--ag-motion-fast) ease-in-out;
    }

    /* Size variants */
    .checkbox-label--small::before {
      width: 14px;
      height: 14px;
    }

    .checkbox-label--small::after {
      inset-inline-start: 4px;
      top: 0px;
      width: 4px;
      height: 8px;
      border-inline-end: var(--ag-border-width-2) solid var(--ag-white);
      border-bottom: var(--ag-border-width-2) solid var(--ag-white);
    }

    .checkbox-label--medium::before {
      width: 16px;
      height: 16px;
    }

    .checkbox-label--medium::after {
      inset-inline-start: 5px;
      top: 1px;
      width: 4px;
      height: 9px;
      border-inline-end: var(--ag-border-width-2) solid var(--ag-white);
      border-bottom: var(--ag-border-width-2) solid var(--ag-white);
    }

    .checkbox-label--large::before {
      width: 18px;
      height: 18px;
    }

    .checkbox-label--large::after {
      inset-inline-start: 6px;
      top: 1px;
      width: 5px;
      height: 10px;
      border-inline-end: var(--ag-border-width-2) solid var(--ag-white);
      border-bottom: var(--ag-border-width-2) solid var(--ag-white);
    }

    /* Indeterminate state - horizontal line */
    .checkbox-input:indeterminate + .checkbox-label::after {
      transform: rotate(0deg) scale(1) translate(-6px);
      opacity: 1;
      border-inline-end: none;
      border-bottom: var(--ag-border-width-2) solid var(--ag-white);
      width: 8px;
      height: 0;
      inset-inline-start: 50%;
      top: 50%;
      margin-inline-start: -4px;
      margin-block-start: -1px;
    }

    /* Checked state */
    .checkbox-input:checked + .checkbox-label::after {
      opacity: 1;
      transform: rotate(40deg) scale(1) translate(2px);
    }

    /* Default theme - alias to primary */
    .checkbox-label--default::before {
      border: var(--ag-border-width-2) solid var(--ag-primary-border);
      background: var(--ag-white);
    }

    .checkbox-input:checked + .checkbox-label--default::before,
    .checkbox-input:indeterminate + .checkbox-label--default::before {
      background: var(--ag-primary);
      border-color: var(--ag-primary);
    }

    .checkbox-input:focus + .checkbox-label--default::before {
      box-shadow: 0 0 0 var(--ag-focus-width) rgba(var(--ag-focus), 0.5);
      outline: var(--ag-focus-width) solid rgba(var(--ag-focus), 0.5);
      outline-offset: var(--ag-focus-offset);
    }

    /* Primary theme */
    .checkbox-label--primary::before {
      border: var(--ag-border-width-2) solid var(--ag-primary-border);
      background: var(--ag-white);
    }

    .checkbox-input:checked + .checkbox-label--primary::before,
    .checkbox-input:indeterminate + .checkbox-label--primary::before {
      background: var(--ag-primary);
      border-color: var(--ag-primary);
    }

    .checkbox-input:focus + .checkbox-label--primary::before {
      box-shadow: 0 0 0 var(--ag-focus-width) rgba(var(--ag-focus), 0.5);
      outline: var(--ag-focus-width) solid rgba(var(--ag-focus), 0.5);
      outline-offset: var(--ag-focus-offset);
    }

    /* Success theme - green */
    .checkbox-label--success::before {
      border: var(--ag-border-width-2) solid var(--ag-border);
      background: var(--ag-white);
    }

    .checkbox-input:checked + .checkbox-label--success::before,
    .checkbox-input:indeterminate + .checkbox-label--success::before {
      background: var(--ag-success);
      border-color: var(--ag-success);
    }

    .checkbox-input:focus + .checkbox-label--success::before {
      box-shadow: 0 0 0 var(--ag-focus-width) rgba(var(--ag-focus), 0.5);
      outline: var(--ag-focus-width) solid rgba(var(--ag-focus), 0.5);
      outline-offset: var(--ag-focus-offset);
    }

    /* Monochrome theme */
    .checkbox-label--monochrome::before {
      border: var(--ag-border-width-2) solid var(--ag-black);
      background: var(--ag-white);
    }

    .checkbox-input:checked + .checkbox-label--monochrome::before,
    .checkbox-input:indeterminate + .checkbox-label--monochrome::before {
      background: var(--ag-black);
      border-color: var(--ag-black);
    }

    .checkbox-input:focus + .checkbox-label--monochrome::before {
      box-shadow: 0 0 0 var(--ag-focus-width) rgba(var(--ag-focus), 0.5);
      outline: var(--ag-focus-width) solid rgba(var(--ag-focus), 0.5);
      outline-offset: var(--ag-focus-offset);
    }

    .checkbox-label-copy {
      display: inline-block;
    }

    .checkbox-label-copy--small {
      font-size: var(--ag-font-size-sm);
    }

    .checkbox-label-copy--medium {
      font-size: var(--ag-font-size-sm);
    }

    .checkbox-label-copy--large {
      font-size: var(--ag-font-size-base);
    }

    /* Respect reduced motion preferences */
    @media (prefers-reduced-motion: reduce) {
      .checkbox-label,
      .checkbox-label::before,
      .checkbox-label::after {
        transition: none;
      }
    }

    /* High contrast mode support */
    @media (prefers-contrast: high) {
      .checkbox-label::before {
        outline: var(--ag-border-width-1) solid;
      }
    }
  `];let e=b;a([t({type:String})],e.prototype,"name");a([t({type:String})],e.prototype,"value");a([t({type:Boolean,reflect:!0})],e.prototype,"checked");a([t({type:Boolean,reflect:!0})],e.prototype,"indeterminate");a([t({type:Boolean,reflect:!0})],e.prototype,"disabled");a([t({type:String})],e.prototype,"size");a([t({type:String})],e.prototype,"theme");a([t({type:String})],e.prototype,"labelText");a([t({type:String})],e.prototype,"labelPosition");a([t({type:Boolean,reflect:!0})],e.prototype,"required");a([t({type:Boolean,reflect:!0})],e.prototype,"invalid");a([t({type:String,attribute:"error-message"})],e.prototype,"errorMessage");a([t({type:String,attribute:"help-text"})],e.prototype,"helpText");a([t({attribute:!1})],e.prototype,"onClick");a([t({attribute:!1})],e.prototype,"onChange");customElements.get("ag-checkbox")||customElements.define("ag-checkbox",e);
