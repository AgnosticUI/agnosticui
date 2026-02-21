import{i as w,z as i,a as B,Q as h,x as o,E as g}from"./Button.CFkPNK98.js";import{n as $}from"./state-CovhUvdr.DWhhlYib.js";import{f as z}from"./query-BykXNUlT.Pm7lu9c1.js";import{o as _}from"./slot.B17U6J5C.js";import{a as L,i as E,u as C,t as v}from"./form-control-utils.CX0RHW4_.js";import{d as I,c,o as b,e as y,r as m,K as S}from"./framework.NAAYCHZu.js";var q=Object.defineProperty,a=(n,e,r,d)=>{for(var s=void 0,u=n.length-1,p;u>=0;u--)(p=n[u])&&(s=p(e,r,s)||s);return s&&q(e,r,s),s};const x=class extends B{constructor(){super(),this._ids=E("ag-input"),this._hasLeftAddon=!1,this._hasRightAddon=!1,this.label="",this.labelHidden=!1,this.labelPosition="top",this.noLabel=!1,this.ariaLabel="",this.type="text",this.value="",this.placeholder="",this.rows=4,this.cols=50,this.size="default",this.capsule=!1,this.rounded=!1,this.underlined=!1,this.underlinedWithBackground=!1,this.inline=!1,this.required=!1,this.disabled=!1,this.readonly=!1,this.invalid=!1,this.errorMessage="",this.helpText=""}get controlElement(){return this._inputElement}getValue(){var e;return((e=this._inputElement)==null?void 0:e.value)??""}setValue(e){this._inputElement&&(this._inputElement.value=e,this.value=e)}focus(){var e;(e=this._inputElement)==null||e.focus()}blur(){var e;(e=this._inputElement)==null||e.blur()}select(){var e;(e=this._inputElement)==null||e.select()}_handleSlotChange(e){const r=e.target,d=r.name;d==="addon-left"?this._hasLeftAddon=_(r):d==="addon-right"&&(this._hasRightAddon=_(r)),this.requestUpdate()}_handleInput(e){const r=e.target;this.value=r.value,this.onInput&&this.onInput(e)}_handleChange(e){const r=e.target;this.value=r.value,this.onChange&&this.onChange(e)}_handleFocus(e){this.dispatchEvent(new FocusEvent("focus",{bubbles:!0,composed:!0,relatedTarget:e.relatedTarget})),this.onFocus&&this.onFocus(e)}_handleBlur(e){this.dispatchEvent(new FocusEvent("blur",{bubbles:!0,composed:!0,relatedTarget:e.relatedTarget})),this.onBlur&&this.onBlur(e)}_handleClick(e){this.onClick&&this.onClick(e)}_getAriaDescribedBy(){return C({helperId:this._ids.helperId,errorId:this._ids.errorId,hasHelper:!!this.helpText,hasError:this.invalid&&!!this.errorMessage})}_renderInputElement(){const e=this.type==="textarea",r=this._getAriaDescribedBy(),d=[];return r&&d.push(r),e?o`
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
          aria-describedby="${d.length>0?d.join(" "):h(void 0)}"
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
        aria-describedby="${d.length>0?d.join(" "):h(void 0)}"
        @click=${this._handleClick}
        @input=${this._handleInput}
        @change=${this._handleChange}
        @focus=${this._handleFocus}
        @blur=${this._handleBlur}
      />
    `}firstUpdated(){setTimeout(()=>{var u,p;const e=(u=this.shadowRoot)==null?void 0:u.querySelector('slot[name="addon-left"]'),r=(p=this.shadowRoot)==null?void 0:p.querySelector('slot[name="addon-right"]'),d=this._hasLeftAddon,s=this._hasRightAddon;this._hasLeftAddon=_(e),this._hasRightAddon=_(r),(d!==this._hasLeftAddon||s!==this._hasRightAddon)&&this.requestUpdate()},0)}_renderLabel(){if(!this.label||this.noLabel)return g;const e=[];return v(this.labelPosition)?(e.push("ag-form-control__label--horizontal"),e.push(`ag-form-control__label--${this.labelPosition}`),e.push("ag-input__label--horizontal"),e.push(`ag-input__label--${this.labelPosition}`)):this.labelPosition==="bottom"&&(e.push(`ag-form-control__label--${this.labelPosition}`),e.push(`ag-input__label--${this.labelPosition}`)),o`
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
        ?hidden="${!this.invalid||!this.errorMessage}"
      >
        ${this.errorMessage||""}
      </div>
    `}render(){const e=this._hasLeftAddon||this._hasRightAddon,r=v(this.labelPosition),d=["ag-input"];this.size==="small"&&d.push("ag-input--small"),this.size==="large"&&d.push("ag-input--large"),this.rounded&&d.push("ag-input--rounded"),this.underlined&&d.push("ag-input--underlined"),this.underlinedWithBackground&&d.push("ag-input--underlined-with-background");const s=e?o`
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
        `;return r?o`
        <div class="${d.join(" ")}" part="ag-input-wrapper">
          <div class="ag-form-control--horizontal">
            ${this._renderLabel()}
            ${s}
          </div>
          ${this.helpText?this._renderHelper():g}
          ${this._renderError()}
        </div>
      `:this.labelPosition==="bottom"?o`
        <div class="${d.join(" ")}" part="ag-input-wrapper">
          ${s}
          ${this.helpText?this._renderHelper():g}
          ${this._renderError()}
          ${this._renderLabel()}
        </div>
      `:o`
      <div class="${d.join(" ")}" part="ag-input-wrapper">
        ${this._renderLabel()}
        ${this.helpText?this._renderHelper():g}
        ${this._renderError()}
        ${s}
      </div>
    `}};x.styles=[L,w`
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
    `];let t=x;a([z("input, textarea")],t.prototype,"_inputElement");a([i({type:String})],t.prototype,"label");a([i({type:Boolean,attribute:"label-hidden"})],t.prototype,"labelHidden");a([i({type:String,attribute:"label-position"})],t.prototype,"labelPosition");a([i({type:Boolean,attribute:"no-label"})],t.prototype,"noLabel");a([i({type:String,attribute:"aria-label"})],t.prototype,"ariaLabel");a([i({type:String})],t.prototype,"type");a([i({type:String,reflect:!0})],t.prototype,"value");a([i({type:String})],t.prototype,"placeholder");a([i({type:Number})],t.prototype,"rows");a([i({type:Number})],t.prototype,"cols");a([i({type:String,reflect:!0})],t.prototype,"size");a([i({type:Boolean,reflect:!0})],t.prototype,"capsule");a([i({type:Boolean,reflect:!0})],t.prototype,"rounded");a([i({type:Boolean,reflect:!0})],t.prototype,"underlined");a([i({type:Boolean,reflect:!0,attribute:"underlined-with-background"})],t.prototype,"underlinedWithBackground");a([i({type:Boolean,reflect:!0})],t.prototype,"inline");a([i({type:Boolean,reflect:!0})],t.prototype,"required");a([i({type:Boolean,reflect:!0})],t.prototype,"disabled");a([i({type:Boolean,reflect:!0})],t.prototype,"readonly");a([i({type:Boolean,reflect:!0})],t.prototype,"invalid");a([i({type:String,attribute:"error-message"})],t.prototype,"errorMessage");a([i({type:String,attribute:"help-text"})],t.prototype,"helpText");a([i({attribute:!1})],t.prototype,"onClick");a([i({attribute:!1})],t.prototype,"onInput");a([i({attribute:!1})],t.prototype,"onChange");a([i({attribute:!1})],t.prototype,"onFocus");a([i({attribute:!1})],t.prototype,"onBlur");a([$()],t.prototype,"_hasLeftAddon");a([$()],t.prototype,"_hasRightAddon");customElements.get("ag-input")||customElements.define("ag-input",t);const T=[".value",".labelHidden",".noLabel",".capsule",".rounded",".underlined",".underlinedWithBackground",".inline",".required",".disabled",".readonly",".invalid","type","placeholder","label","ariaLabel","helpText","errorMessage","size","rows","cols"],A={key:0,slot:"addon-left"},P={key:1,slot:"addon-right"},N=I({__name:"VueInput",props:{label:{default:""},labelHidden:{type:Boolean,default:!1},labelPosition:{},noLabel:{type:Boolean,default:!1},ariaLabel:{default:""},type:{default:"text"},value:{default:""},placeholder:{default:""},rows:{default:4},cols:{default:50},size:{default:"default"},capsule:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},underlined:{type:Boolean,default:!1},underlinedWithBackground:{type:Boolean,default:!1},inline:{type:Boolean,default:!1},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},invalid:{type:Boolean,default:!1},errorMessage:{default:""},helpText:{default:""}},emits:["click","input","change","focus","blur","update:value"],setup(n,{emit:e}){const r=e,d=l=>{r("click",l)},s=l=>{r("input",l);const f=l.target;r("update:value",f.value)},u=l=>{r("change",l)},p=l=>{r("focus",l)},k=l=>{r("blur",l)};return(l,f)=>(b(),c("ag-input",S({".value":n.value,".labelHidden":n.labelHidden,".noLabel":n.noLabel,".capsule":n.capsule,".rounded":n.rounded,".underlined":n.underlined,".underlinedWithBackground":n.underlinedWithBackground,".inline":n.inline,".required":n.required,".disabled":n.disabled,".readonly":n.readonly,".invalid":n.invalid,type:n.type,placeholder:n.placeholder,label:n.label,ariaLabel:n.ariaLabel,helpText:n.helpText,errorMessage:n.errorMessage,size:n.size,rows:n.rows,cols:n.cols,onClick:d,onInput:s,onChange:u,onFocus:p,onBlur:k},l.$attrs),[l.$slots["addon-left"]?(b(),c("span",A,[m(l.$slots,"addon-left")])):y("",!0),l.$slots["addon-right"]?(b(),c("span",P,[m(l.$slots,"addon-right")])):y("",!0)],48,T))}});export{N as L};
