import{z as n,Q as h,x as o,E as g,i as w,a as B}from"./Button.CFkPNK98.js";import{n as $}from"./state-CovhUvdr.DWhhlYib.js";import{f as z}from"./query-BykXNUlT.Pm7lu9c1.js";import{o as _}from"./slot.B17U6J5C.js";import{i as E,u as L,t as y,a as C}from"./form-control-utils.CX0RHW4_.js";import{d as I,c,o as f,e as v,r as m,K as S}from"./framework.NAAYCHZu.js";var q=Object.defineProperty,V=(t,e,i,s)=>{for(var l=void 0,u=t.length-1,p;u>=0;u--)(p=t[u])&&(l=p(e,i,l)||l);return l&&q(e,i,l),l};function A(t,e){e&&(e.validity.valid?t.setValidity({}):t.setValidity(e.validity,e.validationMessage,e))}const T=t=>{const e=class extends t{constructor(...l){super(...l),this.name="",this._internals=this.attachInternals()}get form(){return this._internals.form}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}formDisabledCallback(l){this.disabled=l}formResetCallback(){}};e.formAssociated=!0;let i=e;return V([n({type:String,reflect:!0})],i.prototype,"name"),i};var P=Object.defineProperty,r=(t,e,i,s)=>{for(var l=void 0,u=t.length-1,p;u>=0;u--)(p=t[u])&&(l=p(e,i,l)||l);return l&&P(e,i,l),l};const x=class extends T(B){constructor(){super(),this._ids=E("ag-input"),this._hasLeftAddon=!1,this._hasRightAddon=!1,this.label="",this.labelHidden=!1,this.labelPosition="top",this.noLabel=!1,this.ariaLabel="",this.type="text",this.value="",this.placeholder="",this.rows=4,this.cols=50,this.size="default",this.capsule=!1,this.rounded=!1,this.underlined=!1,this.underlinedWithBackground=!1,this.inline=!1,this.required=!1,this.disabled=!1,this.readonly=!1,this.invalid=!1,this.errorMessage="",this.helpText=""}get controlElement(){return this._inputElement}getValue(){var e;return((e=this._inputElement)==null?void 0:e.value)??""}setValue(e){this._inputElement&&(this._inputElement.value=e,this.value=e)}focus(){var e;(e=this._inputElement)==null||e.focus()}blur(){var e;(e=this._inputElement)==null||e.blur()}select(){var e;(e=this._inputElement)==null||e.select()}formResetCallback(){this.value="",this._internals.setFormValue(""),this._internals.setValidity({})}_syncValidity(){A(this._internals,this._inputElement)}_handleSlotChange(e){const i=e.target,s=i.name;s==="addon-left"?this._hasLeftAddon=_(i):s==="addon-right"&&(this._hasRightAddon=_(i)),this.requestUpdate()}_handleInput(e){const i=e.target;this.value=i.value,this._internals.setFormValue(this.value),this._syncValidity(),this.onInput&&this.onInput(e)}_handleChange(e){const i=e.target;this.value=i.value,this._internals.setFormValue(this.value),this._syncValidity(),this.onChange&&this.onChange(e)}_handleFocus(e){this.dispatchEvent(new FocusEvent("focus",{bubbles:!0,composed:!0,relatedTarget:e.relatedTarget})),this.onFocus&&this.onFocus(e)}_handleBlur(e){this.dispatchEvent(new FocusEvent("blur",{bubbles:!0,composed:!0,relatedTarget:e.relatedTarget})),this.onBlur&&this.onBlur(e)}_handleClick(e){this.onClick&&this.onClick(e)}_getAriaDescribedBy(){return L({helperId:this._ids.helperId,errorId:this._ids.errorId,hasHelper:!!this.helpText,hasError:this.invalid&&!!this.errorMessage})}_renderInputElement(){const e=this.type==="textarea",i=this._getAriaDescribedBy(),s=[];return i&&s.push(i),e?o`
        <textarea
          id="${this._ids.inputId}"
          part="ag-textarea"
          class="ag-input__textarea"
          .value="${this.value}"
          placeholder="${h(this.placeholder||void 0)}"
          rows="${this.rows}"
          cols="${this.cols}"
          ?required="${this.required}"
          ?disabled="${this.disabled}"
          ?readonly="${this.readonly}"
          aria-required="${this.required?"true":"false"}"
          aria-invalid="${this.invalid?"true":"false"}"
          aria-label="${h(this.ariaLabel||void 0)}"
          aria-describedby="${s.length>0?s.join(" "):h(void 0)}"
          @click=${this._handleClick}
          @input=${this._handleInput}
          @change=${this._handleChange}
          @focus=${this._handleFocus}
          @blur=${this._handleBlur}
        ></textarea>
      `:o`
      <input
        type="${this.type}"
        id="${this._ids.inputId}"
        part="ag-input"
        class="ag-input__input"
        .value="${this.value}"
        placeholder="${h(this.placeholder||void 0)}"
        ?required="${this.required}"
        ?disabled="${this.disabled}"
        ?readonly="${this.readonly}"
        aria-required="${this.required?"true":"false"}"
        aria-invalid="${this.invalid?"true":"false"}"
        aria-label="${h(this.ariaLabel||void 0)}"
        aria-describedby="${s.length>0?s.join(" "):h(void 0)}"
        @click=${this._handleClick}
        @input=${this._handleInput}
        @change=${this._handleChange}
        @focus=${this._handleFocus}
        @blur=${this._handleBlur}
      />
    `}firstUpdated(){this._internals.setFormValue(this.value??""),this._syncValidity(),setTimeout(()=>{var u,p;const e=(u=this.shadowRoot)==null?void 0:u.querySelector('slot[name="addon-left"]'),i=(p=this.shadowRoot)==null?void 0:p.querySelector('slot[name="addon-right"]'),s=this._hasLeftAddon,l=this._hasRightAddon;this._hasLeftAddon=_(e),this._hasRightAddon=_(i),(s!==this._hasLeftAddon||l!==this._hasRightAddon)&&this.requestUpdate()},0)}_renderLabel(){if(!this.label||this.noLabel)return g;const e=[];return y(this.labelPosition)?(e.push("ag-form-control__label--horizontal"),e.push(`ag-form-control__label--${this.labelPosition}`),e.push("ag-input__label--horizontal"),e.push(`ag-input__label--${this.labelPosition}`)):this.labelPosition==="bottom"&&(e.push(`ag-form-control__label--${this.labelPosition}`),e.push(`ag-input__label--${this.labelPosition}`)),o`
      <label
        id="${this._ids.labelId}"
        for="${this._ids.inputId}"
        class="ag-form-control__label ag-input__label ${this.labelHidden?"ag-form-control__label--hidden ag-input__label--hidden":""} ${e.join(" ")}"
        part="ag-input-label"
      >
        ${this.label}
        ${this.required?o`
              <span class="ag-form-control__required ag-input__required" part="ag-input-required" aria-hidden="true">*</span>
            `:g}
      </label>
    `}_renderHelper(){return this.helpText?o`
      <div
        id="${this._ids.helperId}"
        class="ag-form-control__helper ag-input__help"
        part="ag-input-help"
      >
        ${this.helpText}
      </div>
    `:g}_renderError(){return o`
      <div
        id="${this._ids.errorId}"
        class="ag-form-control__error ag-input__error"
        part="ag-input-error"
        role="alert"
        aria-atomic="true"
        ?hidden="${!this.invalid||!this.errorMessage}"
      >
        ${this.errorMessage||""}
      </div>
    `}render(){const e=this._hasLeftAddon||this._hasRightAddon,i=y(this.labelPosition),s=["ag-input"];this.size==="small"&&s.push("ag-input--small"),this.size==="large"&&s.push("ag-input--large"),this.rounded&&s.push("ag-input--rounded"),this.underlined&&s.push("ag-input--underlined"),this.underlinedWithBackground&&s.push("ag-input--underlined-with-background");const l=e?o`
          <div class="ag-input__field" part="ag-input-field-wrapper">
            ${this._hasLeftAddon?o`
                  <div class="ag-input__addon ag-input__addon--left" part="ag-input-addon-left">
                    <slot name="addon-left" @slotchange=${this._handleSlotChange}></slot>
                  </div>
                `:o`
                  <slot name="addon-left" @slotchange=${this._handleSlotChange} style="display: none;"></slot>
                `}

            ${this._renderInputElement()}

            ${this._hasRightAddon?o`
                  <div class="ag-input__addon ag-input__addon--right" part="ag-input-addon-right">
                    <slot name="addon-right" @slotchange=${this._handleSlotChange}></slot>
                  </div>
                `:o`
                  <slot name="addon-right" @slotchange=${this._handleSlotChange} style="display: none;"></slot>
                `}
          </div>
        `:o`
          ${this._renderInputElement()}
          <slot name="addon-left" @slotchange=${this._handleSlotChange} style="display: none;"></slot>
          <slot name="addon-right" @slotchange=${this._handleSlotChange} style="display: none;"></slot>
        `;return i?o`
        <div class="${s.join(" ")}" part="ag-input-wrapper">
          <div class="ag-form-control--horizontal">
            ${this._renderLabel()}
            ${l}
          </div>
          ${this.helpText?this._renderHelper():g}
          ${this._renderError()}
        </div>
      `:this.labelPosition==="bottom"?o`
        <div class="${s.join(" ")}" part="ag-input-wrapper">
          ${l}
          ${this.helpText?this._renderHelper():g}
          ${this._renderError()}
          ${this._renderLabel()}
        </div>
      `:o`
      <div class="${s.join(" ")}" part="ag-input-wrapper">
        ${this._renderLabel()}
        ${this.helpText?this._renderHelper():g}
        ${this._renderError()}
        ${l}
      </div>
    `}};x.styles=[C,w`
      :host {
        display: block;
      }

      :host([inline]) {
        display: inline-block;
      }

      /* Wrapper with size classes */
      .ag-input {
        display: block;
      }

      .ag-input--small {
        /* Size-specific wrapper styling if needed */
      }

      .ag-input--large {
        /* Size-specific wrapper styling if needed */
      }

      .ag-input--rounded {
        /* Rounded variant wrapper styling if needed */
      }

      .ag-input--underlined {
        /* Underlined variant wrapper styling if needed */
      }

      .ag-input--underlined-with-background {
        /* Underlined with background wrapper styling if needed */
      }

      /* Input & Textarea Base Styles */
      .ag-input__input,
      .ag-input__textarea {
        box-sizing: border-box;
        width: 100%;
        padding: var(--ag-space-2) var(--ag-space-3);
        font-size: var(--ag-font-size-sm);
        line-height: var(--ag-line-height-base);
        color: var(--ag-text-primary);
        background-color: var(--ag-background-primary);
        border: 1px solid var(--ag-border-subtle);
        border-radius: 0;
        transition: all var(--ag-motion-medium);
      }

      .ag-input__input::placeholder,
      .ag-input__textarea::placeholder {
        font-size: var(--ag-font-size-sm);
        color: var(--ag-text-muted);
        opacity: 1;
      }

      .ag-input__input:focus-visible,
      .ag-input__textarea:focus-visible {
        outline: var(--ag-focus-width) solid rgba(var(--ag-focus), 0.5);
        outline-offset: var(--ag-focus-offset);
        border-color: rgba(var(--ag-focus), 0.6);
      }

      .ag-input__textarea {
        resize: vertical;
        font-family: inherit; /* Ensure textarea uses same font as input */
      }

      /* Sizes */
      :host([size="small"]) .ag-input__input,
      :host([size="small"]) .ag-input__textarea {
        padding: var(--ag-space-1) var(--ag-space-2);
        font-size: var(--ag-font-size-sm);
      }

      :host([size="large"]) .ag-input__input,
      :host([size="large"]) .ag-input__textarea {
        padding: var(--ag-space-3) var(--ag-space-4);
        font-size: var(--ag-font-size-lg);
      }

      /* Variants */
      :host([capsule]) .ag-input__input,
      :host([capsule]) .ag-input__textarea {
        border-radius: var(--ag-radius-full);
      }

      :host([rounded]) .ag-input__input,
      :host([rounded]) .ag-input__textarea {
        border-radius: var(--ag-radius-md);
      }

      :host([underlined]) .ag-input__input,
      :host([underlined]) .ag-input__textarea {
        border-radius: 0;
        border-width: 0 0 1px 0;
      }

      :host([underlined-with-background]) .ag-input__input,
      :host([underlined-with-background]) .ag-input__textarea {
        border-radius: 0;
        border-width: 0 0 1px 0;
        background-color: var(--ag-background-secondary);
      }

      /* States */
      :host([disabled]) .ag-input__input,
      :host([disabled]) .ag-input__textarea {
        background-color: var(--ag-background-disabled);
        color: var(--ag-text-muted);
        cursor: not-allowed;
      }

      :host([invalid]) .ag-input__input,
      :host([invalid]) .ag-input__textarea {
        border-color: var(--ag-error-text);
      }

      :host([invalid]) .ag-input__input:focus-visible,
      :host([invalid]) .ag-input__textarea:focus-visible {
        border-color: rgba(var(--ag-danger-rgb), 0.6);
        outline-color: rgba(var(--ag-danger-rgb), 0.5);
      }

      /* Addons */
      .ag-input__field {
        display: flex;
        align-items: stretch;
      }

      .ag-input__addon {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: var(--ag-space-2) var(--ag-space-3);
        font-size: var(--ag-font-size-base);
        line-height: var(--ag-line-height-base);
        color: var(--ag-text-primary);
        border: 1px solid var(--ag-border-subtle);
      }

      /* Ensure nested content (icons, svgs) is also centered */
      .ag-input__addon ::slotted(*) {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .ag-input__addon--left {
        border-inline-end: 0;
        border-radius: var(--ag-radius-md) 0 0 var(--ag-radius-md);
      }

      .ag-input__addon--right {
        border-inline-start: 0;
        border-radius: 0 var(--ag-radius-md) var(--ag-radius-md) 0;
      }

      /* When left addon is present */
      .ag-input__field:has(.ag-input__addon--left) .ag-input__input,
      .ag-input__field:has(.ag-input__addon--left) .ag-input__textarea {
        border-start-start-radius: 0;
        border-end-start-radius: 0;
      }

      /* When right addon is present */
      .ag-input__field:has(.ag-input__addon--right) .ag-input__input,
      .ag-input__field:has(.ag-input__addon--right) .ag-input__textarea {
        border-start-end-radius: 0;
        border-end-end-radius: 0;
      }

      .ag-input__field .ag-input__input,
      .ag-input__field .ag-input__textarea {
        flex: 1;
      }

      /* Capsule variant with addons */
      :host([capsule]) .ag-input__addon--left {
        border-radius: var(--ag-radius-full) 0 0 var(--ag-radius-full);
        padding: var(--ag-space-2) var(--ag-space-4);
      }

      :host([capsule]) .ag-input__addon--right {
        border-radius: 0 var(--ag-radius-full) var(--ag-radius-full) 0;
        padding: var(--ag-space-2) var(--ag-space-4);
      }

      /* Remove border on INPUT where it meets the addon for capsule */
      :host([capsule]) .ag-input__field:has(.ag-input__addon--left) .ag-input__input,
      :host([capsule]) .ag-input__field:has(.ag-input__addon--left) .ag-input__textarea {
        border-inline-start: 0;
      }

      :host([capsule]) .ag-input__field:has(.ag-input__addon--right) .ag-input__input,
      :host([capsule]) .ag-input__field:has(.ag-input__addon--right) .ag-input__textarea {
        border-inline-end: 0;
      }

      /* Underlined variant with addons */
      :host([underlined]) .ag-input__addon,
      :host([underlined-with-background]) .ag-input__addon {
        border-top: 0;
        border-radius: 0;
        background: transparent;
      }

      :host([underlined]) .ag-input__addon--left,
      :host([underlined-with-background]) .ag-input__addon--left {
        border-inline-start: 0;
        border-inline-end: 0;
      }

      :host([underlined]) .ag-input__addon--right,
      :host([underlined-with-background]) .ag-input__addon--right {
        border-inline-end: 0;
        border-inline-start: 0;
      }

      /* Remove border on INPUT where it meets the addon for underlined */
      :host([underlined]) .ag-input__field:has(.ag-input__addon--left) .ag-input__input,
      :host([underlined]) .ag-input__field:has(.ag-input__addon--left) .ag-input__textarea,
      :host([underlined-with-background]) .ag-input__field:has(.ag-input__addon--left) .ag-input__input,
      :host([underlined-with-background]) .ag-input__field:has(.ag-input__addon--left) .ag-input__textarea {
        border-inline-start: 0;
      }

      :host([underlined]) .ag-input__field:has(.ag-input__addon--right) .ag-input__input,
      :host([underlined]) .ag-input__field:has(.ag-input__addon--right) .ag-input__textarea,
      :host([underlined-with-background]) .ag-input__field:has(.ag-input__addon--right) .ag-input__input,
      :host([underlined-with-background]) .ag-input__field:has(.ag-input__addon--right) .ag-input__textarea {
        border-inline-end: 0;
      }

      /* Underlined with background variant - add background to addon */
      :host([underlined-with-background]) .ag-input__addon {
        background-color: var(--ag-background-secondary);
      }
    `];let a=x;r([z("input, textarea")],a.prototype,"_inputElement");r([n({type:String})],a.prototype,"label");r([n({type:Boolean,attribute:"label-hidden"})],a.prototype,"labelHidden");r([n({type:String,attribute:"label-position"})],a.prototype,"labelPosition");r([n({type:Boolean,attribute:"no-label"})],a.prototype,"noLabel");r([n({type:String,attribute:"aria-label"})],a.prototype,"ariaLabel");r([n({type:String})],a.prototype,"type");r([n({type:String,reflect:!0})],a.prototype,"value");r([n({type:String})],a.prototype,"placeholder");r([n({type:Number})],a.prototype,"rows");r([n({type:Number})],a.prototype,"cols");r([n({type:String,reflect:!0})],a.prototype,"size");r([n({type:Boolean,reflect:!0})],a.prototype,"capsule");r([n({type:Boolean,reflect:!0})],a.prototype,"rounded");r([n({type:Boolean,reflect:!0})],a.prototype,"underlined");r([n({type:Boolean,reflect:!0,attribute:"underlined-with-background"})],a.prototype,"underlinedWithBackground");r([n({type:Boolean,reflect:!0})],a.prototype,"inline");r([n({type:Boolean,reflect:!0})],a.prototype,"required");r([n({type:Boolean,reflect:!0})],a.prototype,"disabled");r([n({type:Boolean,reflect:!0})],a.prototype,"readonly");r([n({type:Boolean,reflect:!0})],a.prototype,"invalid");r([n({type:String,attribute:"error-message"})],a.prototype,"errorMessage");r([n({type:String,attribute:"help-text"})],a.prototype,"helpText");r([n({attribute:!1})],a.prototype,"onClick");r([n({attribute:!1})],a.prototype,"onInput");r([n({attribute:!1})],a.prototype,"onChange");r([n({attribute:!1})],a.prototype,"onFocus");r([n({attribute:!1})],a.prototype,"onBlur");r([$()],a.prototype,"_hasLeftAddon");r([$()],a.prototype,"_hasRightAddon");customElements.get("ag-input")||customElements.define("ag-input",a);const R=[".value",".labelHidden",".noLabel",".capsule",".rounded",".underlined",".underlinedWithBackground",".inline",".required",".disabled",".readonly",".invalid","type","placeholder","label","ariaLabel","helpText","errorMessage","size","rows","cols"],F={key:0,slot:"addon-left"},H={key:1,slot:"addon-right"},Q=I({__name:"VueInput",props:{label:{default:""},labelHidden:{type:Boolean,default:!1},labelPosition:{},noLabel:{type:Boolean,default:!1},ariaLabel:{default:""},name:{},type:{default:"text"},value:{default:""},placeholder:{default:""},rows:{default:4},cols:{default:50},size:{default:"default"},capsule:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},underlined:{type:Boolean,default:!1},underlinedWithBackground:{type:Boolean,default:!1},inline:{type:Boolean,default:!1},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},invalid:{type:Boolean,default:!1},errorMessage:{default:""},helpText:{default:""}},emits:["click","input","change","focus","blur","update:value"],setup(t,{emit:e}){const i=e,s=d=>{i("click",d)},l=d=>{i("input",d);const b=d.target;i("update:value",b.value)},u=d=>{i("change",d)},p=d=>{i("focus",d)},k=d=>{i("blur",d)};return(d,b)=>(f(),c("ag-input",S({".value":t.value,".labelHidden":t.labelHidden,".noLabel":t.noLabel,".capsule":t.capsule,".rounded":t.rounded,".underlined":t.underlined,".underlinedWithBackground":t.underlinedWithBackground,".inline":t.inline,".required":t.required,".disabled":t.disabled,".readonly":t.readonly,".invalid":t.invalid,type:t.type,placeholder:t.placeholder,label:t.label,ariaLabel:t.ariaLabel,helpText:t.helpText,errorMessage:t.errorMessage,size:t.size,rows:t.rows,cols:t.cols,onClick:s,onInput:l,onChange:u,onFocus:p,onBlur:k},d.$attrs),[d.$slots["addon-left"]?(f(),c("span",F,[m(d.$slots,"addon-left")])):v("",!0),d.$slots["addon-right"]?(f(),c("span",H,[m(d.$slots,"addon-right")])):v("",!0)],48,R))}});export{Q as L};
