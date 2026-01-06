import{A as V}from"./chunks/AlphaWarning.D199zhtu.js";import{i as P,z as F,a as I,x as g}from"./chunks/property-CemaeiRl.Cea_q1B7.js";import{n as D}from"./chunks/state-CovhUvdr.DnzyR2fh.js";import{f as S}from"./chunks/query-BykXNUlT.Pm7lu9c1.js";import{Q as c}from"./chunks/if-defined-C8i28hSj.cIUcEGoF.js";import{a as R,i as L,t as q,u as M}from"./chunks/form-control-utils.0jr-KvXJ.js";import{d as T,p as v,c as m,o as B,K as z,_ as U,C as H,j as i,G as p,e as x,F as w,B as $,t as b,a as C,ae as N}from"./chunks/framework.CdHt8f9T.js";var W=Object.defineProperty,d=(l,s,a,e)=>{for(var n=void 0,k=l.length-1,t;k>=0;k--)(t=l[k])&&(n=t(s,a,n)||n);return n&&W(s,a,n),n};const f=class extends I{constructor(){super(),this._activeDrag=null,this._lastRenderTime=0,this._renderThrottleMs=16,this.labelPosition="top",this._activeThumb=null,this._focusedThumb=null,this._draggingThumb=null,this._internals=this.attachInternals();const s=L("slider");this._sliderId=this.id||s.inputId,this._minInputId=`${s.inputId}-min`,this._maxInputId=`${s.inputId}-max`,this._labelId=s.labelId,this._helperId=s.helperId,this._errorId=s.errorId,this.label="",this.labelHidden=!1,this.noLabel=!1,this.ariaLabel="",this.min=0,this.max=100,this.step=1,this.value=0,this.dual=!1,this.vertical=!1,this.filled=!1,this.monochrome=!1,this.size="default",this.disabled=!1,this.readonly=!1,this.required=!1,this.invalid=!1,this.errorMessage="",this.helpText="",this.name="",this.showTooltip=!1,this.showTicks=!1,this.tickStep=25,this._handlePointerMove=this._handlePointerMove.bind(this),this._handlePointerUp=this._handlePointerUp.bind(this)}get form(){return this._internals.form}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}willUpdate(s){(s.has("min")||s.has("max"))&&this.min>=this.max&&(console.warn(`ag-slider: min (${this.min}) must be less than max (${this.max}). Adjusting values.`),s.has("min")?this.max=this.min+1:this.min=this.max-1),s.has("step")&&this.step!==void 0&&this.step<=0&&(console.warn(`ag-slider: step (${this.step}) must be greater than 0. Using default step of 1.`),this.step=1),(s.has("value")||s.has("min")||s.has("max"))&&this._clampAndValidateValue()}_clampAndValidateValue(){if(this.dual&&Array.isArray(this.value)){const s=this._clampValue(this.value[0]),a=this._clampValue(this.value[1]);(s!==this.value[0]||a!==this.value[1])&&(this.value=[s,a])}else if(!this.dual&&typeof this.value=="number"){const s=this._clampValue(this.value);s!==this.value&&(this.value=s)}}_updateFormValue(){const s=new FormData;this.name?(this.dual&&Array.isArray(this.value)?(s.append(this.name,this.value[0].toString()),s.append(this.name,this.value[1].toString())):s.append(this.name,this.value.toString()),this._internals.setFormValue(s)):this._internals.setFormValue(null),this._internals.setValidity({})}get _values(){return Array.isArray(this.value)?this.value:[this.min,this.value]}_getPercentage(s){return(s-this.min)/(this.max-this.min)*100}_getValueFromPercentage(s){const a=this.min+s/100*(this.max-this.min);return this.step?Math.round(a/this.step)*this.step:a}_getValueFromPointer(s,a,e){let n;return this.vertical?n=(e.bottom-a)/e.height*100:n=(s-e.left)/e.width*100,n=Math.max(0,Math.min(100,n)),this._getValueFromPercentage(n)}_clampValue(s){let a=Math.max(this.min,Math.min(this.max,s));return this.step&&(a=Math.round(a/this.step)*this.step),Number(a.toFixed(10))}_announceValue(s){if(!this._liveRegion)return;let a="";this.dual&&Array.isArray(s)?a=`Range selected from ${s[0]} to ${s[1]}`:!this.dual&&typeof s=="number"&&(a=`Value set to ${s}`),setTimeout(()=>{this._liveRegion&&(this._liveRegion.textContent=a,setTimeout(()=>{this._liveRegion&&(this._liveRegion.textContent="")},100))},50)}_handleThumbPointerDown(s,a){if(this.disabled||this.readonly)return;const e=this._track;if(!e)return;s.preventDefault(),s.stopPropagation(),s.currentTarget.setPointerCapture(s.pointerId);const n=e.getBoundingClientRect(),k=this._values;this._activeDrag={thumb:a,startX:s.clientX,startY:s.clientY,startValue:a==="min"?k[0]:k[1],trackRect:n},this._draggingThumb=a,document.addEventListener("pointermove",this._handlePointerMove),document.addEventListener("pointerup",this._handlePointerUp),document.addEventListener("pointercancel",this._handlePointerUp)}_handlePointerMove(s){if(!this._activeDrag||this.disabled||this.readonly)return;const a=Date.now();if(a-this._lastRenderTime<this._renderThrottleMs)return;this._lastRenderTime=a,s.preventDefault();const{thumb:e,trackRect:n}=this._activeDrag,k=this._getValueFromPointer(s.clientX,s.clientY,n);if(this.dual){const t=this._values;if(e==="min"){const o=this.step,h=t[1]-o,u=[Math.min(k,h),t[1]];this._updateValue(u,"input")}else if(e==="max"){const o=this.step,h=t[0]+o,u=Math.max(k,h),_=[t[0],u];this._updateValue(_,"input")}}else this._updateValue(k,"input")}_handlePointerUp(s){var a,e;this._activeDrag&&(s.preventDefault(),(e=(a=this.shadowRoot)==null?void 0:a.querySelector(`.ag-slider__thumb[part*="${this._activeDrag.thumb}"]`))==null||e.releasePointerCapture(s.pointerId),this._activeDrag&&this._updateValue(this.value,"change"),this._activeDrag=null,this._draggingThumb=null,document.removeEventListener("pointermove",this._handlePointerMove),document.removeEventListener("pointerup",this._handlePointerUp),document.removeEventListener("pointercancel",this._handlePointerUp))}_updateValue(s,a="change"){if(this.readonly||this.disabled)return;if(this.dual&&Array.isArray(s)){s=[this._clampValue(s[0]),this._clampValue(s[1])];const n=this.step;s[1]-s[0]<n&&(s[0]===this._values[0]?s[0]=s[1]-n:s[1]=s[0]+n),s[0]>s[1]&&(s=[s[1],s[0]])}else!this.dual&&typeof s=="number"&&(s=this._clampValue(s));this.value=s,this._updateFormValue(),a==="input"&&this._draggingThumb&&this._announceValue(s);const e=new CustomEvent(a,{bubbles:!0,composed:!0,detail:{value:s}});this.dispatchEvent(e),a==="change"&&this.onChange?this.onChange(e):a==="input"&&this.onInput&&this.onInput(e)}_handleInput(s,a){if(this._activeDrag)return;if(this.readonly){s.preventDefault();return}const e=s.target,n=parseFloat(e.value);if(this.dual){const k=this._values,t=a==="min"?[n,k[1]]:[k[0],n];this._updateValue(t,"input")}else this._updateValue(n,"input")}_handleChange(s,a){if(this._activeDrag)return;if(this.readonly){s.preventDefault();return}const e=s.target,n=parseFloat(e.value);if(this.dual){const k=this._values,t=a==="min"?[n,k[1]]:[k[0],n];this._updateValue(t,"change")}else this._updateValue(n,"change")}_handleFocus(s,a){this._focusedThumb=a,this.dispatchEvent(new FocusEvent("focus",{bubbles:!0,composed:!0})),this.onFocus&&this.onFocus(s)}_handleBlur(s,a){this._focusedThumb=null,this.dispatchEvent(new FocusEvent("blur",{bubbles:!0,composed:!0})),this.onBlur&&this.onBlur(s)}_handleTrackClick(s){if(this.disabled||this.readonly)return;const a=s.currentTarget.getBoundingClientRect(),e=this._getValueFromPointer(s.clientX,s.clientY,a);if(this.dual){const n=this._values,k=Math.abs(e-n[0]),t=Math.abs(e-n[1]),o=k<t?[e,n[1]]:[n[0],e];this._updateValue(o)}else this._updateValue(e)}_renderTicks(){if(!this.showTicks||!this.tickStep||this.tickStep<=0||!isFinite(this.tickStep))return null;const s=[],a=Math.floor((this.max-this.min)/this.tickStep);if(a>1e3)return null;for(let e=0;e<=a;e++){const n=this.min+e*this.tickStep,k=this._getPercentage(n),t=this.vertical?`bottom: ${k}%`:`inset-inline-start: ${k}%`;s.push(g`
        <div class="ag-slider__tick" style="${t}">
          <div class="ag-slider__tick-label">${n}</div>
        </div>
      `)}return g`<div class="ag-slider__ticks">${s}</div>`}_renderThumb(s,a,e){const n=this._getPercentage(s),k=this._focusedThumb===a,t=this._draggingThumb===a,o=this.vertical?`bottom: ${n}%`:`inset-inline-start: ${n}%`,h=`ag-slider__thumb 
      ${k?"ag-slider__thumb--focused":""} 
      ${t?"ag-slider__thumb--active":""}
      ${this.readonly?"ag-slider__thumb--readonly":""}`;return g`
      <div
        class="${h}"
        style="${o}"
        part="ag-slider-thumb ${a==="single"?"ag-slider-thumb-single":`ag-slider-thumb-${a}`} ${this.readonly?"ag-slider-thumb-readonly":""}"
        aria-hidden="true"
        @pointerdown=${u=>this._handleThumbPointerDown(u,a)}
      >
        ${this.showTooltip?g`
          <div class="ag-slider__tooltip">
            ${s}
          </div>
        `:""}
      </div>
    `}_renderProgress(){const s=this._values;if(this.dual){const a=this._getPercentage(s[0]),e=this._getPercentage(s[1]),n=`ag-slider__progress ${s[1]-s[0]<=this.step?"ag-slider__progress--min-gap":""}`,k=this.vertical?`bottom: ${a}%; height: ${e-a}%`:`left: ${a}%; width: ${e-a}%`;return g`<div class="${n}" style="${k}" part="ag-slider-progress"></div>`}else{const a=this._getPercentage(s[1]),e=this.vertical?`bottom: 0; height: ${a}%`:`left: 0; width: ${a}%`;return g`<div class="ag-slider__progress" style="${e}" part="ag-slider-progress"></div>`}}renderLabel(){if(!this.label||this.noLabel||this.dual)return"";const s=[];return q(this.labelPosition)?(s.push("ag-form-control__label--horizontal"),s.push(`ag-form-control__label--${this.labelPosition}`)):this.labelPosition==="bottom"&&s.push(`ag-form-control__label--${this.labelPosition}`),g`
      <label
        id=${this._labelId}
        for=${this._sliderId}
        class="ag-form-control__label ${this.labelHidden?"ag-form-control__label--hidden":""} ${this.required?"ag-form-control__label--required":""} ${s.join(" ")}"
        part="ag-slider-label"
      >
        ${this.label}
      </label>
    `}render(){const s=this._values,a=M({helperId:this._helperId,errorId:this._errorId,hasHelper:!!this.helpText&&!this.invalid,hasError:!!this.invalid&&!!this.errorMessage}),e=this.label?`${this.label} - Minimum value`:"Minimum value",n=this.label?`${this.label} - Maximum value`:"Maximum value",k=this.helpText&&!this.invalid?g`<div class="ag-form-control__helper" id="${this._helperId}">
          ${this.helpText}
        </div>`:"",t=this.invalid&&this.errorMessage?g`<div class="ag-form-control__error" id="${this._errorId}">
          ${this.errorMessage}
        </div>`:"",o=g`
      <div
        class="ag-slider__container"
        part="ag-slider-container"
        role=${c(this.dual?"group":void 0)}
        aria-label=${c(this.dual?this.label||this.ariaLabel:void 0)}
      >
        <!-- Hidden accessible inputs -->
        ${this.dual?g`
          <input
            id="${this._minInputId}"
            class="ag-slider__input"
            type="range"
            min="${this.min}"
            max="${this.max}"
            step="${c(this.step||void 0)}"
            .value="${s[0].toString()}"
            ?disabled="${this.disabled}"
            ?readonly="${this.readonly}"
            aria-valuemin="${this.min}"
            aria-valuemax="${s[1]}"
            aria-valuenow="${s[0]}"
            aria-label="${c(this.dual?e:this.ariaLabel||void 0)}"
            aria-describedby="${c(a)}"
            @input=${h=>this._handleInput(h,"min")}
            @change=${h=>this._handleChange(h,"min")}
            @focus=${h=>this._handleFocus(h,"min")}
            @blur=${h=>this._handleBlur(h,"min")}
          />
          <input
            id="${this._maxInputId}"
            class="ag-slider__input"
            type="range"
            min="${this.min}"
            max="${this.max}"
            step="${c(this.step||void 0)}"
            .value="${s[1].toString()}"
            ?disabled="${this.disabled}"
            ?readonly="${this.readonly}"
            aria-valuemin="${s[0]}"
            aria-valuemax="${this.max}"
            aria-valuenow="${s[1]}"
            aria-label="${c(this.dual?n:void 0)}"
            aria-describedby="${c(a)}"
            @input=${h=>this._handleInput(h,"max")}
            @change=${h=>this._handleChange(h,"max")}
            @focus=${h=>this._handleFocus(h,"max")}
            @blur=${h=>this._handleBlur(h,"max")}
          />
        `:g`
          <input
            id="${this._sliderId}"
            class="ag-slider__input"
            type="range"
            min="${this.min}"
            max="${this.max}"
            step="${c(this.step||void 0)}"
            .value="${s[1].toString()}"
            ?disabled="${this.disabled}"
            ?readonly="${this.readonly}"
            aria-valuemin="${this.min}"
            aria-valuemax="${this.max}"
            aria-valuenow="${s[1]}"
            aria-label="${c(this.ariaLabel||void 0)}"
            aria-describedby="${c(a)}"
            @input=${h=>this._handleInput(h,"max")}
            @change=${h=>this._handleChange(h,"max")}
            @focus=${h=>this._handleFocus(h,"max")}
            @blur=${h=>this._handleBlur(h,"max")}
          />
        `}

        <!-- Visual track -->
        <div
          class="ag-slider__track"
          part="ag-slider-track"
          @click=${this._handleTrackClick}
        >
          ${this._renderProgress()}
          ${this._renderTicks()}

          <!-- Thumbs -->
          ${this.dual?g`
                ${this._renderThumb(s[0],"min")}
                ${this._renderThumb(s[1],"max")}
              `:this._renderThumb(s[1],"single")}
        </div>
      </div>
    `;return q(this.labelPosition)?g`
        <div class="ag-slider" part="ag-slider-wrapper">
          <!-- Live region for screen reader announcements -->
          <div
            class="ag-slider__live-region"
            aria-live="polite"
            aria-atomic="true"
            part="ag-slider-live-region"
          ></div>

          <div class="ag-form-control--horizontal">
            ${this.renderLabel()}
            ${o}
          </div>
          ${k}
          ${t}
        </div>
      `:this.labelPosition==="bottom"?g`
        <div class="ag-slider" part="ag-slider-wrapper">
          <!-- Live region for screen reader announcements -->
          <div
            class="ag-slider__live-region"
            aria-live="polite"
            aria-atomic="true"
            part="ag-slider-live-region"
          ></div>

          ${o}
          ${k}
          ${t}
          ${this.renderLabel()}
        </div>
      `:g`
      <div class="ag-slider" part="ag-slider-wrapper">
        <!-- Live region for screen reader announcements -->
        <div
          class="ag-slider__live-region"
          aria-live="polite"
          aria-atomic="true"
          part="ag-slider-live-region"
        ></div>

        ${this.renderLabel()}
        ${o}
        ${k}
        ${t}
      </div>
    `}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("pointermove",this._handlePointerMove),document.removeEventListener("pointerup",this._handlePointerUp),document.removeEventListener("pointercancel",this._handlePointerUp)}};f.formAssociated=!0,f.styles=[R,P`
    :host {
      display: block;
      --ag-slider-track-height: var(--ag-space-2);
      --ag-slider-thumb-size: var(--ag-space-6);
      --ag-slider-tooltip-offset: var(--ag-space-6);
      -webkit-user-select: none;
      user-select: none;
      touch-action: none;
    }

    :host([vertical]) {
      display: inline-block;
    }

    /* Container */
    .ag-slider__container {
      position: relative;
      display: flex;
      align-items: center;
      min-height: var(--ag-space-6);
    }

    :host([vertical]) .ag-slider__container {
      flex-direction: column;
      min-height: auto;
      min-width: var(--ag-space-6);
    }

    /* Track */
    .ag-slider__track {
      position: relative;
      flex: 1;
      height: var(--ag-slider-track-height);
      background: var(--ag-border-subtle);
      border-radius: var(--ag-radius-full);
      cursor: pointer;
    }

    :host([vertical]) .ag-slider__track {
      width: var(--ag-slider-track-height);
      height: 100%;
      min-height: 8rem;
    }

    /* Filled variant - solid thumb instead of bordered */
    :host([filled]) .ag-slider__thumb {
      background: var(--ag-primary);
      border-color: var(--ag-primary);
    }

    :host([filled]) .ag-slider__thumb:hover {
      background: var(--ag-primary-dark);
      border-color: var(--ag-primary-dark);
    }

    /* Monochrome variant - unfilled adapts to theme */
    :host([monochrome]) .ag-slider__progress {
      background: var(--ag-text-primary);
    }

    :host([monochrome]) .ag-slider__thumb {
      background: var(--ag-background-secondary);
      border-color: var(--ag-text-primary);
    }

    :host([monochrome]) .ag-slider__thumb:hover {
      border-color: var(--ag-text-secondary);
    }

    /* Monochrome + Filled - use adaptive text color for visibility in both modes */
    :host([monochrome][filled]) .ag-slider__progress {
      background: var(--ag-text-primary);
    }

    :host([monochrome][filled]) .ag-slider__thumb {
      background: var(--ag-text-primary);
      border-color: var(--ag-text-primary);
    }

    :host([monochrome][filled]) .ag-slider__thumb:hover {
      background: var(--ag-text-secondary);
      border-color: var(--ag-text-secondary);
    }

    /* Progress */
    .ag-slider__progress {
      position: absolute;
      height: 100%;
      background: var(--ag-primary);
      border-radius: var(--ag-radius-full);
      pointer-events: none;
      transition: background-color var(--ag-motion-fast);
    }

    .ag-slider__progress--min-gap {
      background: var(--ag-warning);
      animation: pulse-gap 2s ease-in-out infinite;
    }

    @keyframes pulse-gap {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.7; }
    }

    :host([vertical]) .ag-slider__progress {
      width: 100%;
      height: auto;
    }

    /* Thumb */
    .ag-slider__thumb {
      position: absolute;
      width: var(--ag-slider-thumb-size);
      height: var(--ag-slider-thumb-size);
      background: var(--ag-white);
      border: 3px solid var(--ag-primary);
      border-radius: var(--ag-radius-full);
      cursor: grab;
      transform: translate(-50%, -50%);
      top: 50%;
      transition: all var(--ag-motion-fast);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
      touch-action: none;
      box-sizing: border-box;
    }

    .ag-slider__thumb:active {
      cursor: grabbing;
      transform: translate(-50%, -50%) scale(1.1);
    }

    :host([vertical]) .ag-slider__thumb {
      transform: translate(-50%, 50%);
      inset-inline-start: 50%;
      top: auto;
    }

    :host([vertical]) .ag-slider__thumb:active {
      transform: translate(-50%, 50%) scale(1.1);
    }

    .ag-slider__thumb:hover {
      border-color: var(--ag-primary-dark);
      box-shadow: var(--ag-shadow-md);
    }

    /* Visual focus state - controlled by internal state */
    .ag-slider__thumb--focused {
      outline: var(--ag-focus-width) solid rgba(var(--ag-focus), 0.5);
      outline-offset: var(--ag-focus-offset);
      border-color: var(--ag-primary-dark);
    }

    /* Active drag state */
    .ag-slider__thumb--active {
      transform: translate(-50%, -50%) scale(1.1);
      z-index: 1;
    }

    :host([vertical]) .ag-slider__thumb--active {
      transform: translate(-50%, 50%) scale(1.1);
    }

    /* Readonly state */
    :host([readonly]) .ag-slider__thumb {
      cursor: default;
      border-color: var(--ag-border-subtle);
    }

    :host([readonly]) .ag-slider__thumb:hover {
      border-color: var(--ag-border-subtle);
      box-shadow: var(--ag-shadow-sm);
    }

    :host([readonly]) .ag-slider__thumb:active {
      transform: translate(-50%, -50%);
      cursor: default;
    }

    :host([vertical][readonly]) .ag-slider__thumb:active {
      transform: translate(-50%, 50%);
    }

    /* Readonly lock indicator (simple inline SVG) */
    :host([readonly]) .ag-slider__thumb::after {
      content: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" /%3E%3Cpath d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" /%3E%3Cpath d="M8 11v-4a4 4 0 1 1 8 0v4" /%3E%3C/svg%3E');
      position: absolute;
      top: -8px;
      inset-inline-end: -8px;
      filter: grayscale(1);
      opacity: 0.7;
    }

    /* Input (hidden but accessible) */
    .ag-slider__input {
      position: absolute;
      opacity: 0;
      pointer-events: none;
    }

    /* Tooltip */
    .ag-slider__tooltip {
      position: absolute;
      bottom: var(--ag-slider-tooltip-offset);
      inset-inline-start: 50%;
      transform: translateX(-50%);
      background: var(--ag-neutral-800);
      color: var(--ag-white);
      padding: var(--ag-space-1) var(--ag-space-2);
      border-radius: var(--ag-radius-sm);
      font-size: var(--ag-font-size-sm);
      white-space: nowrap;
      pointer-events: none;
      opacity: 0;
      transition: opacity var(--ag-motion-fast);
      z-index: 2;
    }

    /* Show tooltip on hover and focus - ensure it works with both thumb and input focus */
    .ag-slider__thumb:hover .ag-slider__tooltip,
    .ag-slider__thumb--focused .ag-slider__tooltip,
    .ag-slider__thumb--active .ag-slider__tooltip,
    .ag-slider__input:focus-visible ~ .ag-slider__track .ag-slider__thumb .ag-slider__tooltip {
      opacity: 1;
    }

    :host([vertical]) .ag-slider__tooltip {
      bottom: auto;
      inset-inline-start: var(--ag-slider-tooltip-offset);
      top: 50%;
      transform: translateY(-50%);
    }

    /* Ticks */
    .ag-slider__ticks {
      position: absolute;
      top: 50%;
      inset-inline: 0;
      height: var(--ag-space-2);
      pointer-events: none;
    }

    :host([vertical]) .ag-slider__ticks {
      top: 0;
      bottom: 0;
      inset-inline-start: 50%;
      width: var(--ag-space-2);
      height: auto;
    }

    .ag-slider__tick {
      position: absolute;
      width: 1px;
      height: var(--ag-space-2);
      background: var(--ag-border);
      transform: translateX(-50%);
    }

    :host([vertical]) .ag-slider__tick {
      width: var(--ag-space-2);
      height: 1px;
      transform: translateY(-50%);
    }

    .ag-slider__tick-label {
      position: absolute;
      top: var(--ag-space-3);
      font-size: var(--ag-font-size-xs);
      color: var(--ag-text-muted);
      transform: translateX(-50%);
      white-space: nowrap;
    }

    :host([vertical]) .ag-slider__tick-label {
      top: auto;
      inset-inline-start: var(--ag-space-3);
      transform: translateY(-50%);
    }

    /* Vertical tick label rotation for better space usage */
    :host([vertical]) .ag-slider__tick-label {
      transform: translateY(-50%) rotate(-90deg);
      transform-origin: left center;
      inset-inline-start: var(--ag-space-4);
    }

    /* Sizes */
    :host([size="small"]) {
      --ag-slider-track-height: var(--ag-space-1);
      --ag-slider-thumb-size: var(--ag-space-5);
    }

    :host([size="large"]) {
      --ag-slider-track-height: var(--ag-space-3);
      --ag-slider-thumb-size: var(--ag-space-7);
    }

    /* States */
    :host([disabled]) {
      opacity: 0.6;
      pointer-events: none;
    }

    :host([disabled]) .ag-slider__thumb {
      cursor: not-allowed;
      border-color: var(--ag-border-subtle);
      background: var(--ag-background-disabled);
    }

    :host([disabled]) .ag-slider__progress {
      background: var(--ag-border-subtle);
    }

    :host([invalid]) .ag-slider__progress {
      background: var(--ag-danger);
    }

    :host([invalid]) .ag-slider__thumb {
      border-color: var(--ag-danger);
    }

    /* Help & Error Text */
    .ag-slider__help,
    .ag-slider__error {
      margin-block-start: var(--ag-space-2);
      font-size: var(--ag-font-size-sm);
    }

    .ag-slider__help {
      color: var(--ag-text-secondary);
    }

    .ag-slider__error {
      color: var(--ag-danger);
    }

    /* Live region for value announcements */
    .ag-slider__live-region {
      position: absolute;
      overflow: hidden;
      clip: rect(0 0 0 0);
      height: 1px;
      width: 1px;
      margin: -1px;
      padding: 0;
      border: 0;
    }
  `];let r=f;d([F({type:String})],r.prototype,"label");d([F({type:String,attribute:"label-position"})],r.prototype,"labelPosition");d([F({type:Boolean,attribute:"label-hidden"})],r.prototype,"labelHidden");d([F({type:Boolean,attribute:"no-label"})],r.prototype,"noLabel");d([F({type:String,reflect:!0,attribute:"aria-label"})],r.prototype,"ariaLabel");d([F({type:Number})],r.prototype,"min");d([F({type:Number})],r.prototype,"max");d([F({type:Number})],r.prototype,"step");d([F({type:Object})],r.prototype,"value");d([F({type:Boolean,reflect:!0})],r.prototype,"dual");d([F({type:Boolean,reflect:!0})],r.prototype,"vertical");d([F({type:Boolean,reflect:!0})],r.prototype,"filled");d([F({type:Boolean,reflect:!0})],r.prototype,"monochrome");d([F({type:String,reflect:!0})],r.prototype,"size");d([F({type:Boolean,reflect:!0})],r.prototype,"disabled");d([F({type:Boolean,reflect:!0})],r.prototype,"readonly");d([F({type:Boolean,reflect:!0})],r.prototype,"required");d([F({type:Boolean,reflect:!0})],r.prototype,"invalid");d([F({type:String,attribute:"error-message"})],r.prototype,"errorMessage");d([F({type:String,attribute:"help-text"})],r.prototype,"helpText");d([F({type:String,reflect:!0})],r.prototype,"name");d([F({type:Boolean,attribute:"show-tooltip"})],r.prototype,"showTooltip");d([F({type:Boolean,attribute:"show-ticks"})],r.prototype,"showTicks");d([F({type:Number,attribute:"tick-step"})],r.prototype,"tickStep");d([F({attribute:!1})],r.prototype,"onChange");d([F({attribute:!1})],r.prototype,"onInput");d([F({attribute:!1})],r.prototype,"onFocus");d([F({attribute:!1})],r.prototype,"onBlur");d([D()],r.prototype,"_activeThumb");d([D()],r.prototype,"_focusedThumb");d([D()],r.prototype,"_draggingThumb");d([S(".ag-slider__track")],r.prototype,"_track");d([S(".ag-slider__live-region")],r.prototype,"_liveRegion");customElements.get("ag-slider")||customElements.define("ag-slider",r);const j=[".value",".dual",".vertical",".filled",".monochrome",".labelHidden",".labelPosition",".noLabel",".disabled",".readonly",".required",".invalid",".showTooltip",".showTicks","min","max","step","size","label","ariaLabel","errorMessage","helpText","name","tickStep"],O=T({__name:"VueSlider",props:{label:{default:""},labelPosition:{default:"top"},labelHidden:{type:Boolean,default:!1},noLabel:{type:Boolean,default:!1},ariaLabel:{default:""},min:{default:0},max:{default:100},step:{default:1},value:{default:0},dual:{type:Boolean,default:!1},vertical:{type:Boolean,default:!1},size:{default:"default"},filled:{type:Boolean,default:!1},monochrome:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},invalid:{type:Boolean,default:!1},errorMessage:{default:""},helpText:{default:""},name:{default:""},showTooltip:{type:Boolean,default:!1},showTicks:{type:Boolean,default:!1},tickStep:{default:25}},emits:["input","change","focus","blur","update:value"],setup(l,{emit:s}){const a=s,e=v(),n=h=>{const u=h;a("input",u.detail),a("update:value",u.detail.value)},k=h=>{a("change",h.detail)},t=h=>{a("focus",h)},o=h=>{a("blur",h)};return(h,u)=>(B(),m("ag-slider",z({ref_key:"sliderRef",ref:e,".value":l.value,".dual":l.dual,".vertical":l.vertical,".filled":l.filled,".monochrome":l.monochrome,".labelHidden":l.labelHidden,".labelPosition":l.labelPosition,".noLabel":l.noLabel,".disabled":l.disabled,".readonly":l.readonly,".required":l.required,".invalid":l.invalid,".showTooltip":l.showTooltip,".showTicks":l.showTicks,min:l.min,max:l.max,step:l.step,size:l.size,label:l.label,ariaLabel:l.ariaLabel,errorMessage:l.errorMessage,helpText:l.helpText,name:l.name,tickStep:l.tickStep,onInput:n,onChange:k,onFocus:t,onBlur:o},h.$attrs),null,48,j))}}),Y=T({name:"SliderExamples",components:{VueSlider:O},setup(){const l=v(50),s=v([]),a=v([200,800]),e=v([]),n=y=>{s.value=[...s.value,`${new Date().toLocaleTimeString()}: ${y}`].slice(-10)},k=y=>{e.value=[...e.value,`${new Date().toLocaleTimeString()}: ${y}`].slice(-10)};return{eventValue:l,events:s,rangeValue:a,rangeEvents:e,handleInput:y=>{l.value=y.value,n(`📝 input: value=${y.value}`)},handleChange:y=>{n(`✅ change: value=${y.value}`)},handleFocus:()=>{n("🎯 focus")},handleBlur:()=>{n("👋 blur")},handleRangeInput:y=>{a.value=y.value;const[E,A]=y.value;k(`📝 input: range=[$${E}, $${A}]`)},handleRangeChange:y=>{const[E,A]=y.value;k(`✅ change: range=[$${E}, $${A}]`)}}}}),X={class:"mbe4"},G={class:"mbe4"},J={class:"mbe4",style:{display:"flex","flex-direction":"column",gap:"2rem"}},K={class:"mbe4",style:{display:"flex","flex-direction":"column",gap:"2rem"}},Q={style:{border:"1px solid var(--ag-border)",padding:"1rem","border-radius":"var(--ag-radius-md)"}},Z={style:{border:"1px solid var(--ag-border)",padding:"1rem","border-radius":"var(--ag-radius-md)"}},ss={style:{border:"1px solid var(--ag-border)",padding:"1rem","border-radius":"var(--ag-radius-md)"}},is={style:{border:"1px solid var(--ag-border)",padding:"1rem","border-radius":"var(--ag-radius-md)"}},as={class:"mbe4",style:{display:"flex","flex-direction":"column",gap:"2rem"}},ts={class:"mbe4",style:{display:"flex","flex-direction":"column",gap:"2rem"}},ns={class:"mbe4",style:{display:"flex","flex-direction":"column",gap:"2rem"}},ls={class:"mbe4",style:{display:"flex",gap:"2rem","align-items":"flex-end"}},es={class:"mbe4",style:{display:"flex","flex-direction":"column",gap:"2rem"}},hs={class:"mbe4"},ps={class:"mbe4"},ks={class:"event-log",style:{"margin-top":"1.5rem",padding:"1rem",background:"var(--ag-background-secondary)","border-radius":"var(--ag-radius-md)",border:"1px solid var(--ag-border)"}},rs={key:0,style:{color:"var(--ag-text-muted)","font-size":"0.875rem","font-style":"italic"}},ds={style:{"margin-top":"1rem","font-size":"0.875rem",color:"var(--ag-text-secondary)"}},Fs={class:"mbe4"},os={class:"event-log",style:{"margin-top":"1.5rem",padding:"1rem",background:"var(--ag-background-secondary)","border-radius":"var(--ag-radius-md)",border:"1px solid var(--ag-border)"}},gs={key:0,style:{color:"var(--ag-text-muted)","font-size":"0.875rem","font-style":"italic"}},ys={style:{"margin-top":"1rem","font-size":"0.875rem",color:"var(--ag-text-secondary)"}},cs={class:"mbe4",style:{display:"flex","flex-direction":"column",gap:"2rem"}},us={class:"mbe4",style:{"max-width":"600px"}},ms={class:"mbe3"},Bs={class:"mbe3"},Cs={class:"mbe3"},bs={class:"mbe3"},vs={class:"mbe4",style:{"max-width":"600px"}},Es={class:"mbe3"},As={class:"mbe3"},fs={class:"mbe3"},Ds={class:"mbe3"};function _s(l,s,a,e,n,k){const t=H("VueSlider");return B(),m("section",null,[s[8]||(s[8]=i("div",{class:"mbe4"},[i("h2",null,"Basic Slider"),i("p",{class:"mbs2 mbe3"},"Single value slider with label")],-1)),i("div",X,[p(t,{label:"Volume",value:75})]),s[9]||(s[9]=i("div",{class:"mbe4"},[i("h2",null,"Dual Range Slider"),i("p",{class:"mbs2 mbe3"},"Select a range with two thumbs")],-1)),i("div",G,[p(t,{label:"Price Range ($0 - $1000)",dual:"",min:0,max:1e3,value:[200,800]})]),s[10]||(s[10]=i("div",{class:"mbe4"},[i("h2",null,"Size Variants"),i("p",{class:"mbs2 mbe3"},"Three size options: small, default, and large")],-1)),i("div",J,[p(t,{label:"Small",size:"small",value:30}),p(t,{label:"Default",size:"default",value:50}),p(t,{label:"Large",size:"large",value:70})]),s[11]||(s[11]=i("div",{class:"mbe4"},[i("h2",null,"Style Variants"),i("p",{class:"mbs2 mbe3"},"Choose from filled and monochrome variants")],-1)),i("div",K,[i("fieldset",Q,[s[0]||(s[0]=i("legend",{style:{padding:"0 0.5rem","font-weight":"600"}},"Default (Primary Color)",-1)),p(t,{label:"Standard",value:50})]),i("fieldset",Z,[s[1]||(s[1]=i("legend",{style:{padding:"0 0.5rem","font-weight":"600"}},"Filled Variant",-1)),p(t,{label:"Filled Thumb",filled:"",value:60})]),i("fieldset",ss,[s[2]||(s[2]=i("legend",{style:{padding:"0 0.5rem","font-weight":"600"}},"Monochrome (Adapts to Dark Mode)",-1)),p(t,{label:"Monochrome",monochrome:"",value:70})]),i("fieldset",is,[s[3]||(s[3]=i("legend",{style:{padding:"0 0.5rem","font-weight":"600"}},"Monochrome Filled",-1)),p(t,{label:"Monochrome Filled",monochrome:"",filled:"",value:80})])]),s[12]||(s[12]=i("div",{class:"mbe4"},[i("h2",null,"With Ticks and Tooltip"),i("p",{class:"mbs2 mbe3"},"Display tick marks and value tooltip")],-1)),i("div",as,[p(t,{label:"With Tick Marks","show-ticks":"","tick-step":25,value:50}),p(t,{label:"With Tooltip","show-tooltip":"",value:65}),p(t,{label:"Ticks + Tooltip","show-ticks":"","show-tooltip":"","tick-step":20,value:40})]),s[13]||(s[13]=i("div",{class:"mbe4"},[i("h2",null,"Step Increments"),i("p",{class:"mbs2 mbe3"},"Control the granularity of value changes. Tick marks show the step intervals.")],-1)),i("div",ts,[p(t,{label:"Step 5",step:5,value:50,"show-ticks":"","tick-step":5}),p(t,{label:"Step 10",step:10,value:50,"show-ticks":"","tick-step":10}),p(t,{label:"Step 25 (Coarse)",step:25,value:50,"show-ticks":"","tick-step":25})]),s[14]||(s[14]=i("div",{class:"mbe4"},[i("h2",null,"Custom Range"),i("p",{class:"mbs2 mbe3"},"Configure min, max, and step values")],-1)),i("div",ns,[p(t,{label:"Temperature (°C)",min:-20,max:40,step:5,value:20}),p(t,{label:"Percentage",min:0,max:100,step:1,value:75,"help-text":"Adjust from 0% to 100%"})]),s[15]||(s[15]=i("div",{class:"mbe4"},[i("h2",null,"Vertical Orientation"),i("p",{class:"mbs2 mbe3"},"Vertical sliders for compact layouts")],-1)),i("div",ls,[p(t,{label:"Volume",vertical:"",value:75}),p(t,{label:"Bass",vertical:"",size:"small",value:50}),p(t,{label:"Treble",vertical:"",size:"large",value:60}),p(t,{label:"Balance",vertical:"",dual:"",value:[25,75]})]),s[16]||(s[16]=i("div",{class:"mbe4"},[i("h2",null,"States"),i("p",{class:"mbs2 mbe3"},"Disabled, readonly, and invalid states")],-1)),i("div",es,[p(t,{label:"Disabled",disabled:"",value:50,"help-text":"This slider is disabled"}),p(t,{label:"Readonly",readonly:"",value:65,"help-text":"This slider is readonly"}),p(t,{label:"Invalid",invalid:"","error-message":"Value must be at least 50",value:30})]),s[17]||(s[17]=i("div",{class:"mbe4"},[i("h2",null,"With Help Text"),i("p",{class:"mbs2 mbe3"},"Provide additional guidance with help text")],-1)),i("div",hs,[p(t,{label:"Brightness","help-text":"Adjust screen brightness level (affects battery life)",value:75})]),s[18]||(s[18]=i("div",{class:"mbe4"},[i("h2",null,"Event Testing"),i("p",{class:"mbs2 mbe3"}," Demonstrates the dual-dispatch event pattern: both CustomEvents (via @input/@change) and native events work simultaneously. Drag the slider to see real-time events. ")],-1)),i("div",ps,[p(t,{label:"Interactive Slider",value:l.eventValue,onInput:l.handleInput,onChange:l.handleChange,onFocus:l.handleFocus,onBlur:l.handleBlur},null,8,["value","onInput","onChange","onFocus","onBlur"]),i("div",ks,[s[4]||(s[4]=i("h3",{style:{"margin-top":"0","margin-bottom":"0.75rem","font-size":"0.95rem"}},"Event Log (last 10 events):",-1)),l.events.length===0?(B(),m("div",rs," Interact with the slider to see events... ")):x("",!0),(B(!0),m(w,null,$(l.events,(o,h)=>(B(),m("div",{key:h,style:{"font-family":"monospace","font-size":"0.875rem",padding:"0.25rem 0",color:"var(--ag-text-primary)"}},b(o),1))),128))]),i("div",ds,[s[5]||(s[5]=C(" Current value: ",-1)),i("strong",null,b(l.eventValue),1)])]),s[19]||(s[19]=i("div",{class:"mbe4"},[i("h2",null,"Dual Range Events"),i("p",{class:"mbs2 mbe3"},"Event handling with dual range sliders")],-1)),i("div",Fs,[p(t,{label:"Price Range Filter",dual:"",min:0,max:1e3,step:10,value:l.rangeValue,onInput:l.handleRangeInput,onChange:l.handleRangeChange},null,8,["value","onInput","onChange"]),i("div",os,[s[6]||(s[6]=i("h3",{style:{"margin-top":"0","margin-bottom":"0.75rem","font-size":"0.95rem"}},"Range Event Log (last 10 events):",-1)),l.rangeEvents.length===0?(B(),m("div",gs," Drag the range handles to see events... ")):x("",!0),(B(!0),m(w,null,$(l.rangeEvents,(o,h)=>(B(),m("div",{key:h,style:{"font-family":"monospace","font-size":"0.875rem",padding:"0.25rem 0",color:"var(--ag-text-primary)"}},b(o),1))),128))]),i("div",ys,[s[7]||(s[7]=C(" Current range: ",-1)),i("strong",null,"$"+b(l.rangeValue[0])+" - $"+b(l.rangeValue[1]),1)])]),s[20]||(s[20]=i("div",{class:"mbe4"},[i("h2",null,"CSS Shadow Parts Customization"),i("p",{class:"mbs2 mbe3"}," Use CSS Shadow Parts to customize the component's appearance. These examples show customized track, thumb, and label styling. ")],-1)),i("div",cs,[p(t,{label:"Gradient Track",value:60,class:"custom-slider-1"}),p(t,{label:"Large Thumb with Shadow",value:70,class:"custom-slider-2"}),p(t,{label:"Fully Customized",value:50,class:"custom-slider-3","help-text":"Custom colors, sizing, and typography"})]),s[21]||(s[21]=i("div",{class:"mbe4"},[i("h2",null,"External Label Support"),i("p",{class:"mbs2 mbe3"}," The Slider component supports external labels with helper text, required fields, and validation states. ")],-1)),i("div",us,[i("div",ms,[p(t,{label:"Volume Level",min:0,max:100,value:75})]),i("div",Bs,[p(t,{label:"Brightness","help-text":"Adjust screen brightness level (affects battery life)",min:0,max:100,value:50})]),i("div",Cs,[p(t,{label:"Temperature",required:!0,"help-text":"This field is required",min:-20,max:40,value:20})]),i("div",bs,[p(t,{label:"Price Range",required:!0,invalid:!0,"error-message":"Please select a valid price range",min:0,max:1e3,value:50})])]),s[22]||(s[22]=i("div",{class:"mbe4"},[i("h2",null,"Label Positioning"),i("p",{class:"mbs2 mbe3"},[C(" Control label position with "),i("code",null,"label-position"),C(": 'top' (default), 'start', 'end', or 'bottom'. ")])],-1)),i("div",vs,[i("div",Es,[p(t,{label:"Top Label (Default)","label-position":"top",min:0,max:100,value:50})]),i("div",As,[p(t,{label:"Start Position","label-position":"start",min:0,max:100,value:60})]),i("div",fs,[p(t,{label:"End Position","label-position":"end",min:0,max:100,value:70})]),i("div",Ds,[p(t,{label:"Bottom Position","label-position":"bottom","help-text":"Bottom label position for alternative layouts",min:0,max:100,value:40})])])])}const qs=U(Y,[["render",_s]]),Ms=JSON.parse('{"title":"Slider","description":"","frontmatter":{},"headers":[],"relativePath":"components/slider.md","filePath":"components/slider.md"}'),xs={name:"components/slider.md"},zs=Object.assign(xs,{setup(l){return(s,a)=>(B(),m("div",null,[a[0]||(a[0]=i("h1",{id:"slider",tabindex:"-1"},[C("Slider "),i("a",{class:"header-anchor",href:"#slider","aria-label":'Permalink to "Slider"'},"​")],-1)),p(V),a[1]||(a[1]=i("p",null,"Slider allows a user to select a value or range of values by moving a thumb along a track. It's ideal for adjusting settings like volume, brightness, price ranges, and other numeric inputs.",-1)),a[2]||(a[2]=i("h2",{id:"examples",tabindex:"-1"},[C("Examples "),i("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),p(qs),a[3]||(a[3]=N("",28))]))}});export{Ms as __pageData,zs as default};
