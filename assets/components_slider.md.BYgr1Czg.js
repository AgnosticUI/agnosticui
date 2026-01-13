var L=Object.defineProperty;var M=(n,s,i)=>s in n?L(n,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[s]=i;var S=(n,s,i)=>M(n,typeof s!="symbol"?s+"":s,i);import{A as N}from"./chunks/AlphaWarning.yC7ZufpQ.js";import{i as W,z as o,a as R,x as F,Q as u}from"./chunks/Button.Bujdzq23.js";import{n as D}from"./chunks/Icon.odq14qpJ.js";import{f as P}from"./chunks/query-BykXNUlT.Pm7lu9c1.js";import{a as U,i as j,t as w,u as H}from"./chunks/form-control-utils.LZkauYsx.js";import{d as z,p as B,c as y,o as v,K as O,_ as G,C as Y,j as a,G as r,e as q,F as $,B as T,t as C,a as b,ae as X,w as V,k as x}from"./chunks/framework.NAAYCHZu.js";import{F as J}from"./chunks/FrameworkExample.Vj5DwYx5.js";import"./chunks/createLucideIcon.B61Wqv9x.js";var K=Object.defineProperty,k=(n,s,i,t)=>{for(var l=void 0,d=n.length-1,e;d>=0;d--)(e=n[d])&&(l=e(s,i,l)||l);return l&&K(s,i,l),l};const A=class extends R{constructor(){super(),this._activeDrag=null,this._lastRenderTime=0,this._renderThrottleMs=16,this.labelPosition="top",this._activeThumb=null,this._focusedThumb=null,this._draggingThumb=null,this._internals=this.attachInternals();const s=j("slider");this._sliderId=this.id||s.inputId,this._minInputId=`${s.inputId}-min`,this._maxInputId=`${s.inputId}-max`,this._labelId=s.labelId,this._helperId=s.helperId,this._errorId=s.errorId,this.label="",this.labelHidden=!1,this.noLabel=!1,this.ariaLabel="",this.min=0,this.max=100,this.step=1,this.value=0,this.dual=!1,this.vertical=!1,this.filled=!1,this.monochrome=!1,this.size="default",this.disabled=!1,this.readonly=!1,this.required=!1,this.invalid=!1,this.errorMessage="",this.helpText="",this.name="",this.showTooltip=!1,this.showTicks=!1,this.tickStep=25,this._handlePointerMove=this._handlePointerMove.bind(this),this._handlePointerUp=this._handlePointerUp.bind(this)}get form(){return this._internals.form}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}willUpdate(s){(s.has("min")||s.has("max"))&&this.min>=this.max&&(console.warn(`ag-slider: min (${this.min}) must be less than max (${this.max}). Adjusting values.`),s.has("min")?this.max=this.min+1:this.min=this.max-1),s.has("step")&&this.step!==void 0&&this.step<=0&&(console.warn(`ag-slider: step (${this.step}) must be greater than 0. Using default step of 1.`),this.step=1),(s.has("value")||s.has("min")||s.has("max"))&&this._clampAndValidateValue()}_clampAndValidateValue(){if(this.dual&&Array.isArray(this.value)){const s=this._clampValue(this.value[0]),i=this._clampValue(this.value[1]);(s!==this.value[0]||i!==this.value[1])&&(this.value=[s,i])}else if(!this.dual&&typeof this.value=="number"){const s=this._clampValue(this.value);s!==this.value&&(this.value=s)}}_updateFormValue(){const s=new FormData;this.name?(this.dual&&Array.isArray(this.value)?(s.append(this.name,this.value[0].toString()),s.append(this.name,this.value[1].toString())):s.append(this.name,this.value.toString()),this._internals.setFormValue(s)):this._internals.setFormValue(null),this._internals.setValidity({})}get _values(){return Array.isArray(this.value)?this.value:[this.min,this.value]}_getPercentage(s){return(s-this.min)/(this.max-this.min)*100}_getValueFromPercentage(s){const i=this.min+s/100*(this.max-this.min);return this.step?Math.round(i/this.step)*this.step:i}_getValueFromPointer(s,i,t){let l;return this.vertical?l=(t.bottom-i)/t.height*100:l=(s-t.left)/t.width*100,l=Math.max(0,Math.min(100,l)),this._getValueFromPercentage(l)}_clampValue(s){let i=Math.max(this.min,Math.min(this.max,s));return this.step&&(i=Math.round(i/this.step)*this.step),Number(i.toFixed(10))}_announceValue(s){if(!this._liveRegion)return;let i="";this.dual&&Array.isArray(s)?i=`Range selected from ${s[0]} to ${s[1]}`:!this.dual&&typeof s=="number"&&(i=`Value set to ${s}`),setTimeout(()=>{this._liveRegion&&(this._liveRegion.textContent=i,setTimeout(()=>{this._liveRegion&&(this._liveRegion.textContent="")},100))},50)}_handleThumbPointerDown(s,i){if(this.disabled||this.readonly)return;const t=this._track;if(!t)return;s.preventDefault(),s.stopPropagation(),s.currentTarget.setPointerCapture(s.pointerId);const l=t.getBoundingClientRect(),d=this._values;this._activeDrag={thumb:i,startX:s.clientX,startY:s.clientY,startValue:i==="min"?d[0]:d[1],trackRect:l},this._draggingThumb=i,document.addEventListener("pointermove",this._handlePointerMove),document.addEventListener("pointerup",this._handlePointerUp),document.addEventListener("pointercancel",this._handlePointerUp)}_handlePointerMove(s){if(!this._activeDrag||this.disabled||this.readonly)return;const i=Date.now();if(i-this._lastRenderTime<this._renderThrottleMs)return;this._lastRenderTime=i,s.preventDefault();const{thumb:t,trackRect:l}=this._activeDrag,d=this._getValueFromPointer(s.clientX,s.clientY,l);if(this.dual){const e=this._values;if(t==="min"){const g=this.step,h=e[1]-g,m=[Math.min(d,h),e[1]];this._updateValue(m,"input")}else if(t==="max"){const g=this.step,h=e[0]+g,m=Math.max(d,h),_=[e[0],m];this._updateValue(_,"input")}}else this._updateValue(d,"input")}_handlePointerUp(s){var i,t;this._activeDrag&&(s.preventDefault(),(t=(i=this.shadowRoot)==null?void 0:i.querySelector(`.ag-slider__thumb[part*="${this._activeDrag.thumb}"]`))==null||t.releasePointerCapture(s.pointerId),this._activeDrag&&this._updateValue(this.value,"change"),this._activeDrag=null,this._draggingThumb=null,document.removeEventListener("pointermove",this._handlePointerMove),document.removeEventListener("pointerup",this._handlePointerUp),document.removeEventListener("pointercancel",this._handlePointerUp))}_updateValue(s,i="change"){if(this.readonly||this.disabled)return;if(this.dual&&Array.isArray(s)){s=[this._clampValue(s[0]),this._clampValue(s[1])];const l=this.step;s[1]-s[0]<l&&(s[0]===this._values[0]?s[0]=s[1]-l:s[1]=s[0]+l),s[0]>s[1]&&(s=[s[1],s[0]])}else!this.dual&&typeof s=="number"&&(s=this._clampValue(s));this.value=s,this._updateFormValue(),i==="input"&&this._draggingThumb&&this._announceValue(s);const t=new CustomEvent(i,{bubbles:!0,composed:!0,detail:{value:s}});this.dispatchEvent(t),i==="change"&&this.onChange?this.onChange(t):i==="input"&&this.onInput&&this.onInput(t)}_handleInput(s,i){if(this._activeDrag)return;if(this.readonly){s.preventDefault();return}const t=s.target,l=parseFloat(t.value);if(this.dual){const d=this._values,e=i==="min"?[l,d[1]]:[d[0],l];this._updateValue(e,"input")}else this._updateValue(l,"input")}_handleChange(s,i){if(this._activeDrag)return;if(this.readonly){s.preventDefault();return}const t=s.target,l=parseFloat(t.value);if(this.dual){const d=this._values,e=i==="min"?[l,d[1]]:[d[0],l];this._updateValue(e,"change")}else this._updateValue(l,"change")}_handleFocus(s,i){this._focusedThumb=i,this.dispatchEvent(new FocusEvent("focus",{bubbles:!0,composed:!0})),this.onFocus&&this.onFocus(s)}_handleBlur(s,i){this._focusedThumb=null,this.dispatchEvent(new FocusEvent("blur",{bubbles:!0,composed:!0})),this.onBlur&&this.onBlur(s)}_handleTrackClick(s){if(this.disabled||this.readonly)return;const i=s.currentTarget.getBoundingClientRect(),t=this._getValueFromPointer(s.clientX,s.clientY,i);if(this.dual){const l=this._values,d=Math.abs(t-l[0]),e=Math.abs(t-l[1]),g=d<e?[t,l[1]]:[l[0],t];this._updateValue(g)}else this._updateValue(t)}_renderTicks(){if(!this.showTicks||!this.tickStep||this.tickStep<=0||!isFinite(this.tickStep))return null;const s=[],i=Math.floor((this.max-this.min)/this.tickStep);if(i>1e3)return null;for(let t=0;t<=i;t++){const l=this.min+t*this.tickStep,d=this._getPercentage(l),e=this.vertical?`bottom: ${d}%`:`inset-inline-start: ${d}%`;s.push(F`
        <div class="ag-slider__tick" style="${e}">
          <div class="ag-slider__tick-label">${l}</div>
        </div>
      `)}return F`<div class="ag-slider__ticks">${s}</div>`}_renderThumb(s,i,t){const l=this._getPercentage(s),d=this._focusedThumb===i,e=this._draggingThumb===i,g=this.vertical?`bottom: ${l}%`:`inset-inline-start: ${l}%`,h=`ag-slider__thumb 
      ${d?"ag-slider__thumb--focused":""} 
      ${e?"ag-slider__thumb--active":""}
      ${this.readonly?"ag-slider__thumb--readonly":""}`;return F`
      <div
        class="${h}"
        style="${g}"
        part="ag-slider-thumb ${i==="single"?"ag-slider-thumb-single":`ag-slider-thumb-${i}`} ${this.readonly?"ag-slider-thumb-readonly":""}"
        aria-hidden="true"
        @pointerdown=${m=>this._handleThumbPointerDown(m,i)}
      >
        ${this.showTooltip?F`
          <div class="ag-slider__tooltip">
            ${s}
          </div>
        `:""}
      </div>
    `}_renderProgress(){const s=this._values;if(this.dual){const i=this._getPercentage(s[0]),t=this._getPercentage(s[1]),l=`ag-slider__progress ${s[1]-s[0]<=this.step?"ag-slider__progress--min-gap":""}`,d=this.vertical?`bottom: ${i}%; height: ${t-i}%`:`left: ${i}%; width: ${t-i}%`;return F`<div class="${l}" style="${d}" part="ag-slider-progress"></div>`}else{const i=this._getPercentage(s[1]),t=this.vertical?`bottom: 0; height: ${i}%`:`left: 0; width: ${i}%`;return F`<div class="ag-slider__progress" style="${t}" part="ag-slider-progress"></div>`}}renderLabel(){if(!this.label||this.noLabel||this.dual)return"";const s=[];return w(this.labelPosition)?(s.push("ag-form-control__label--horizontal"),s.push(`ag-form-control__label--${this.labelPosition}`)):this.labelPosition==="bottom"&&s.push(`ag-form-control__label--${this.labelPosition}`),F`
      <label
        id=${this._labelId}
        for=${this._sliderId}
        class="ag-form-control__label ${this.labelHidden?"ag-form-control__label--hidden":""} ${this.required?"ag-form-control__label--required":""} ${s.join(" ")}"
        part="ag-slider-label"
      >
        ${this.label}
      </label>
    `}render(){const s=this._values,i=H({helperId:this._helperId,errorId:this._errorId,hasHelper:!!this.helpText&&!this.invalid,hasError:!!this.invalid&&!!this.errorMessage}),t=this.label?`${this.label} - Minimum value`:"Minimum value",l=this.label?`${this.label} - Maximum value`:"Maximum value",d=this.helpText&&!this.invalid?F`<div class="ag-form-control__helper" id="${this._helperId}">
          ${this.helpText}
        </div>`:"",e=this.invalid&&this.errorMessage?F`<div class="ag-form-control__error" id="${this._errorId}">
          ${this.errorMessage}
        </div>`:"",g=F`
      <div
        class="ag-slider__container"
        part="ag-slider-container"
        role=${u(this.dual?"group":void 0)}
        aria-label=${u(this.dual?this.label||this.ariaLabel:void 0)}
      >
        <!-- Hidden accessible inputs -->
        ${this.dual?F`
          <input
            id="${this._minInputId}"
            class="ag-slider__input"
            type="range"
            min="${this.min}"
            max="${this.max}"
            step="${u(this.step||void 0)}"
            .value="${s[0].toString()}"
            ?disabled="${this.disabled}"
            ?readonly="${this.readonly}"
            aria-valuemin="${this.min}"
            aria-valuemax="${s[1]}"
            aria-valuenow="${s[0]}"
            aria-label="${u(this.dual?t:this.ariaLabel||void 0)}"
            aria-describedby="${u(i)}"
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
            step="${u(this.step||void 0)}"
            .value="${s[1].toString()}"
            ?disabled="${this.disabled}"
            ?readonly="${this.readonly}"
            aria-valuemin="${s[0]}"
            aria-valuemax="${this.max}"
            aria-valuenow="${s[1]}"
            aria-label="${u(this.dual?l:void 0)}"
            aria-describedby="${u(i)}"
            @input=${h=>this._handleInput(h,"max")}
            @change=${h=>this._handleChange(h,"max")}
            @focus=${h=>this._handleFocus(h,"max")}
            @blur=${h=>this._handleBlur(h,"max")}
          />
        `:F`
          <input
            id="${this._sliderId}"
            class="ag-slider__input"
            type="range"
            min="${this.min}"
            max="${this.max}"
            step="${u(this.step||void 0)}"
            .value="${s[1].toString()}"
            ?disabled="${this.disabled}"
            ?readonly="${this.readonly}"
            aria-valuemin="${this.min}"
            aria-valuemax="${this.max}"
            aria-valuenow="${s[1]}"
            aria-label="${u(this.ariaLabel||void 0)}"
            aria-describedby="${u(i)}"
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
          ${this.dual?F`
                ${this._renderThumb(s[0],"min")}
                ${this._renderThumb(s[1],"max")}
              `:this._renderThumb(s[1],"single")}
        </div>
      </div>
    `;return w(this.labelPosition)?F`
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
            ${g}
          </div>
          ${d}
          ${e}
        </div>
      `:this.labelPosition==="bottom"?F`
        <div class="ag-slider" part="ag-slider-wrapper">
          <!-- Live region for screen reader announcements -->
          <div
            class="ag-slider__live-region"
            aria-live="polite"
            aria-atomic="true"
            part="ag-slider-live-region"
          ></div>

          ${g}
          ${d}
          ${e}
          ${this.renderLabel()}
        </div>
      `:F`
      <div class="ag-slider" part="ag-slider-wrapper">
        <!-- Live region for screen reader announcements -->
        <div
          class="ag-slider__live-region"
          aria-live="polite"
          aria-atomic="true"
          part="ag-slider-live-region"
        ></div>

        ${this.renderLabel()}
        ${g}
        ${d}
        ${e}
      </div>
    `}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("pointermove",this._handlePointerMove),document.removeEventListener("pointerup",this._handlePointerUp),document.removeEventListener("pointercancel",this._handlePointerUp)}};A.formAssociated=!0,A.styles=[U,W`
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
  `];let p=A;k([o({type:String})],p.prototype,"label");k([o({type:String,attribute:"label-position"})],p.prototype,"labelPosition");k([o({type:Boolean,attribute:"label-hidden"})],p.prototype,"labelHidden");k([o({type:Boolean,attribute:"no-label"})],p.prototype,"noLabel");k([o({type:String,reflect:!0,attribute:"aria-label"})],p.prototype,"ariaLabel");k([o({type:Number})],p.prototype,"min");k([o({type:Number})],p.prototype,"max");k([o({type:Number})],p.prototype,"step");k([o({type:Object})],p.prototype,"value");k([o({type:Boolean,reflect:!0})],p.prototype,"dual");k([o({type:Boolean,reflect:!0})],p.prototype,"vertical");k([o({type:Boolean,reflect:!0})],p.prototype,"filled");k([o({type:Boolean,reflect:!0})],p.prototype,"monochrome");k([o({type:String,reflect:!0})],p.prototype,"size");k([o({type:Boolean,reflect:!0})],p.prototype,"disabled");k([o({type:Boolean,reflect:!0})],p.prototype,"readonly");k([o({type:Boolean,reflect:!0})],p.prototype,"required");k([o({type:Boolean,reflect:!0})],p.prototype,"invalid");k([o({type:String,attribute:"error-message"})],p.prototype,"errorMessage");k([o({type:String,attribute:"help-text"})],p.prototype,"helpText");k([o({type:String,reflect:!0})],p.prototype,"name");k([o({type:Boolean,attribute:"show-tooltip"})],p.prototype,"showTooltip");k([o({type:Boolean,attribute:"show-ticks"})],p.prototype,"showTicks");k([o({type:Number,attribute:"tick-step"})],p.prototype,"tickStep");k([o({attribute:!1})],p.prototype,"onChange");k([o({attribute:!1})],p.prototype,"onInput");k([o({attribute:!1})],p.prototype,"onFocus");k([o({attribute:!1})],p.prototype,"onBlur");k([D()],p.prototype,"_activeThumb");k([D()],p.prototype,"_focusedThumb");k([D()],p.prototype,"_draggingThumb");k([P(".ag-slider__track")],p.prototype,"_track");k([P(".ag-slider__live-region")],p.prototype,"_liveRegion");customElements.get("ag-slider")||customElements.define("ag-slider",p);const Q=[".value",".dual",".vertical",".filled",".monochrome",".labelHidden",".labelPosition",".noLabel",".disabled",".readonly",".required",".invalid",".showTooltip",".showTicks","min","max","step","size","label","ariaLabel","errorMessage","helpText","name","tickStep"],Z=z({__name:"VueSlider",props:{label:{default:""},labelPosition:{default:"top"},labelHidden:{type:Boolean,default:!1},noLabel:{type:Boolean,default:!1},ariaLabel:{default:""},min:{default:0},max:{default:100},step:{default:1},value:{default:0},dual:{type:Boolean,default:!1},vertical:{type:Boolean,default:!1},size:{default:"default"},filled:{type:Boolean,default:!1},monochrome:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},invalid:{type:Boolean,default:!1},errorMessage:{default:""},helpText:{default:""},name:{default:""},showTooltip:{type:Boolean,default:!1},showTicks:{type:Boolean,default:!1},tickStep:{default:25}},emits:["input","change","focus","blur","update:value"],setup(n,{emit:s}){const i=s,t=B(),l=h=>{const m=h;i("input",m.detail),i("update:value",m.detail.value)},d=h=>{i("change",h.detail)},e=h=>{i("focus",h)},g=h=>{i("blur",h)};return(h,m)=>(v(),y("ag-slider",O({ref_key:"sliderRef",ref:t,".value":n.value,".dual":n.dual,".vertical":n.vertical,".filled":n.filled,".monochrome":n.monochrome,".labelHidden":n.labelHidden,".labelPosition":n.labelPosition,".noLabel":n.noLabel,".disabled":n.disabled,".readonly":n.readonly,".required":n.required,".invalid":n.invalid,".showTooltip":n.showTooltip,".showTicks":n.showTicks,min:n.min,max:n.max,step:n.step,size:n.size,label:n.label,ariaLabel:n.ariaLabel,errorMessage:n.errorMessage,helpText:n.helpText,name:n.name,tickStep:n.tickStep,onInput:l,onChange:d,onFocus:e,onBlur:g},h.$attrs),null,48,Q))}}),ss=z({name:"SliderExamples",components:{VueSlider:Z},setup(){const n=B(50),s=B([]),i=B([200,800]),t=B([]),l=c=>{s.value=[...s.value,`${new Date().toLocaleTimeString()}: ${c}`].slice(-10)},d=c=>{t.value=[...t.value,`${new Date().toLocaleTimeString()}: ${c}`].slice(-10)};return{eventValue:n,events:s,rangeValue:i,rangeEvents:t,handleInput:c=>{n.value=c.value,l(`📝 input: value=${c.value}`)},handleChange:c=>{l(`✅ change: value=${c.value}`)},handleFocus:()=>{l("🎯 focus")},handleBlur:()=>{l("👋 blur")},handleRangeInput:c=>{i.value=c.value;const[f,E]=c.value;d(`📝 input: range=[$${f}, $${E}]`)},handleRangeChange:c=>{const[f,E]=c.value;d(`✅ change: range=[$${f}, $${E}]`)}}}}),is={class:"mbe4"},as={class:"mbe4"},es={class:"mbe4",style:{display:"flex","flex-direction":"column",gap:"2rem"}},ns={class:"mbe4",style:{display:"flex","flex-direction":"column",gap:"2rem"}},ts={style:{border:"1px solid var(--ag-border)",padding:"1rem","border-radius":"var(--ag-radius-md)"}},ls={style:{border:"1px solid var(--ag-border)",padding:"1rem","border-radius":"var(--ag-radius-md)"}},hs={style:{border:"1px solid var(--ag-border)",padding:"1rem","border-radius":"var(--ag-radius-md)"}},rs={style:{border:"1px solid var(--ag-border)",padding:"1rem","border-radius":"var(--ag-radius-md)"}},ds={class:"mbe4",style:{display:"flex","flex-direction":"column",gap:"2rem"}},ps={class:"mbe4",style:{display:"flex","flex-direction":"column",gap:"2rem"}},ks={class:"mbe4",style:{display:"flex","flex-direction":"column",gap:"2rem"}},os={class:"mbe4",style:{display:"flex",gap:"2rem","align-items":"flex-end"}},Fs={class:"mbe4",style:{display:"flex","flex-direction":"column",gap:"2rem"}},gs={class:"mbe4"},cs={class:"mbe4"},us={class:"event-log",style:{"margin-top":"1.5rem",padding:"1rem",background:"var(--ag-background-secondary)","border-radius":"var(--ag-radius-md)",border:"1px solid var(--ag-border)"}},ms={key:0,style:{color:"var(--ag-text-muted)","font-size":"0.875rem","font-style":"italic"}},ys={style:{"margin-top":"1rem","font-size":"0.875rem",color:"var(--ag-text-secondary)"}},vs={class:"mbe4"},bs={class:"event-log",style:{"margin-top":"1.5rem",padding:"1rem",background:"var(--ag-background-secondary)","border-radius":"var(--ag-radius-md)",border:"1px solid var(--ag-border)"}},Cs={key:0,style:{color:"var(--ag-text-muted)","font-size":"0.875rem","font-style":"italic"}},Bs={style:{"margin-top":"1rem","font-size":"0.875rem",color:"var(--ag-text-secondary)"}},fs={class:"mbe4",style:{display:"flex","flex-direction":"column",gap:"2rem"}},Es={class:"mbe4",style:{"max-width":"600px"}},xs={class:"mbe3"},As={class:"mbe3"},Ds={class:"mbe3"},_s={class:"mbe3"},Ss={class:"mbe4",style:{"max-width":"600px"}},ws={class:"mbe3"},qs={class:"mbe3"},$s={class:"mbe3"},Ts={class:"mbe3"};function Vs(n,s,i,t,l,d){const e=Y("VueSlider");return v(),y("section",null,[s[8]||(s[8]=a("div",{class:"mbe4"},[a("h2",null,"Basic Slider"),a("p",{class:"mbs2 mbe3"},"Single value slider with label")],-1)),a("div",is,[r(e,{label:"Volume",value:75})]),s[9]||(s[9]=a("div",{class:"mbe4"},[a("h2",null,"Dual Range Slider"),a("p",{class:"mbs2 mbe3"},"Select a range with two thumbs")],-1)),a("div",as,[r(e,{label:"Price Range ($0 - $1000)",dual:"",min:0,max:1e3,value:[200,800]})]),s[10]||(s[10]=a("div",{class:"mbe4"},[a("h2",null,"Size Variants"),a("p",{class:"mbs2 mbe3"},"Three size options: small, default, and large")],-1)),a("div",es,[r(e,{label:"Small",size:"small",value:30}),r(e,{label:"Default",size:"default",value:50}),r(e,{label:"Large",size:"large",value:70})]),s[11]||(s[11]=a("div",{class:"mbe4"},[a("h2",null,"Style Variants"),a("p",{class:"mbs2 mbe3"},"Choose from filled and monochrome variants")],-1)),a("div",ns,[a("fieldset",ts,[s[0]||(s[0]=a("legend",{style:{padding:"0 0.5rem","font-weight":"600"}},"Default (Primary Color)",-1)),r(e,{label:"Standard",value:50})]),a("fieldset",ls,[s[1]||(s[1]=a("legend",{style:{padding:"0 0.5rem","font-weight":"600"}},"Filled Variant",-1)),r(e,{label:"Filled Thumb",filled:"",value:60})]),a("fieldset",hs,[s[2]||(s[2]=a("legend",{style:{padding:"0 0.5rem","font-weight":"600"}},"Monochrome (Adapts to Dark Mode)",-1)),r(e,{label:"Monochrome",monochrome:"",value:70})]),a("fieldset",rs,[s[3]||(s[3]=a("legend",{style:{padding:"0 0.5rem","font-weight":"600"}},"Monochrome Filled",-1)),r(e,{label:"Monochrome Filled",monochrome:"",filled:"",value:80})])]),s[12]||(s[12]=a("div",{class:"mbe4"},[a("h2",null,"With Ticks and Tooltip"),a("p",{class:"mbs2 mbe3"},"Display tick marks and value tooltip")],-1)),a("div",ds,[r(e,{label:"With Tick Marks","show-ticks":"","tick-step":25,value:50}),r(e,{label:"With Tooltip","show-tooltip":"",value:65}),r(e,{label:"Ticks + Tooltip","show-ticks":"","show-tooltip":"","tick-step":20,value:40})]),s[13]||(s[13]=a("div",{class:"mbe4"},[a("h2",null,"Step Increments"),a("p",{class:"mbs2 mbe3"},"Control the granularity of value changes. Tick marks show the step intervals.")],-1)),a("div",ps,[r(e,{label:"Step 5",step:5,value:50,"show-ticks":"","tick-step":5}),r(e,{label:"Step 10",step:10,value:50,"show-ticks":"","tick-step":10}),r(e,{label:"Step 25 (Coarse)",step:25,value:50,"show-ticks":"","tick-step":25})]),s[14]||(s[14]=a("div",{class:"mbe4"},[a("h2",null,"Custom Range"),a("p",{class:"mbs2 mbe3"},"Configure min, max, and step values")],-1)),a("div",ks,[r(e,{label:"Temperature (°C)",min:-20,max:40,step:5,value:20}),r(e,{label:"Percentage",min:0,max:100,step:1,value:75,"help-text":"Adjust from 0% to 100%"})]),s[15]||(s[15]=a("div",{class:"mbe4"},[a("h2",null,"Vertical Orientation"),a("p",{class:"mbs2 mbe3"},"Vertical sliders for compact layouts")],-1)),a("div",os,[r(e,{label:"Volume",vertical:"",value:75}),r(e,{label:"Bass",vertical:"",size:"small",value:50}),r(e,{label:"Treble",vertical:"",size:"large",value:60}),r(e,{label:"Balance",vertical:"",dual:"",value:[25,75]})]),s[16]||(s[16]=a("div",{class:"mbe4"},[a("h2",null,"States"),a("p",{class:"mbs2 mbe3"},"Disabled, readonly, and invalid states")],-1)),a("div",Fs,[r(e,{label:"Disabled",disabled:"",value:50,"help-text":"This slider is disabled"}),r(e,{label:"Readonly",readonly:"",value:65,"help-text":"This slider is readonly"}),r(e,{label:"Invalid",invalid:"","error-message":"Value must be at least 50",value:30})]),s[17]||(s[17]=a("div",{class:"mbe4"},[a("h2",null,"With Help Text"),a("p",{class:"mbs2 mbe3"},"Provide additional guidance with help text")],-1)),a("div",gs,[r(e,{label:"Brightness","help-text":"Adjust screen brightness level (affects battery life)",value:75})]),s[18]||(s[18]=a("div",{class:"mbe4"},[a("h2",null,"Event Testing"),a("p",{class:"mbs2 mbe3"}," Demonstrates the dual-dispatch event pattern: both CustomEvents (via @input/@change) and native events work simultaneously. Drag the slider to see real-time events. ")],-1)),a("div",cs,[r(e,{label:"Interactive Slider",value:n.eventValue,onInput:n.handleInput,onChange:n.handleChange,onFocus:n.handleFocus,onBlur:n.handleBlur},null,8,["value","onInput","onChange","onFocus","onBlur"]),a("div",us,[s[4]||(s[4]=a("h3",{style:{"margin-top":"0","margin-bottom":"0.75rem","font-size":"0.95rem"}},"Event Log (last 10 events):",-1)),n.events.length===0?(v(),y("div",ms," Interact with the slider to see events... ")):q("",!0),(v(!0),y($,null,T(n.events,(g,h)=>(v(),y("div",{key:h,style:{"font-family":"monospace","font-size":"0.875rem",padding:"0.25rem 0",color:"var(--ag-text-primary)"}},C(g),1))),128))]),a("div",ys,[s[5]||(s[5]=b(" Current value: ",-1)),a("strong",null,C(n.eventValue),1)])]),s[19]||(s[19]=a("div",{class:"mbe4"},[a("h2",null,"Dual Range Events"),a("p",{class:"mbs2 mbe3"},"Event handling with dual range sliders")],-1)),a("div",vs,[r(e,{label:"Price Range Filter",dual:"",min:0,max:1e3,step:10,value:n.rangeValue,onInput:n.handleRangeInput,onChange:n.handleRangeChange},null,8,["value","onInput","onChange"]),a("div",bs,[s[6]||(s[6]=a("h3",{style:{"margin-top":"0","margin-bottom":"0.75rem","font-size":"0.95rem"}},"Range Event Log (last 10 events):",-1)),n.rangeEvents.length===0?(v(),y("div",Cs," Drag the range handles to see events... ")):q("",!0),(v(!0),y($,null,T(n.rangeEvents,(g,h)=>(v(),y("div",{key:h,style:{"font-family":"monospace","font-size":"0.875rem",padding:"0.25rem 0",color:"var(--ag-text-primary)"}},C(g),1))),128))]),a("div",Bs,[s[7]||(s[7]=b(" Current range: ",-1)),a("strong",null,"$"+C(n.rangeValue[0])+" - $"+C(n.rangeValue[1]),1)])]),s[20]||(s[20]=a("div",{class:"mbe4"},[a("h2",null,"CSS Shadow Parts Customization"),a("p",{class:"mbs2 mbe3"}," Use CSS Shadow Parts to customize the component's appearance. These examples show customized track, thumb, and label styling. ")],-1)),a("div",fs,[r(e,{label:"Gradient Track",value:60,class:"custom-slider-1"}),r(e,{label:"Large Thumb with Shadow",value:70,class:"custom-slider-2"}),r(e,{label:"Fully Customized",value:50,class:"custom-slider-3","help-text":"Custom colors, sizing, and typography"})]),s[21]||(s[21]=a("div",{class:"mbe4"},[a("h2",null,"External Label Support"),a("p",{class:"mbs2 mbe3"}," The Slider component supports external labels with helper text, required fields, and validation states. ")],-1)),a("div",Es,[a("div",xs,[r(e,{label:"Volume Level",min:0,max:100,value:75})]),a("div",As,[r(e,{label:"Brightness","help-text":"Adjust screen brightness level (affects battery life)",min:0,max:100,value:50})]),a("div",Ds,[r(e,{label:"Temperature",required:!0,"help-text":"This field is required",min:-20,max:40,value:20})]),a("div",_s,[r(e,{label:"Price Range",required:!0,invalid:!0,"error-message":"Please select a valid price range",min:0,max:1e3,value:50})])]),s[22]||(s[22]=a("div",{class:"mbe4"},[a("h2",null,"Label Positioning"),a("p",{class:"mbs2 mbe3"},[b(" Control label position with "),a("code",null,"label-position"),b(": 'top' (default), 'start', 'end', or 'bottom'. ")])],-1)),a("div",Ss,[a("div",ws,[r(e,{label:"Top Label (Default)","label-position":"top",min:0,max:100,value:50})]),a("div",qs,[r(e,{label:"Start Position","label-position":"start",min:0,max:100,value:60})]),a("div",$s,[r(e,{label:"End Position","label-position":"end",min:0,max:100,value:70})]),a("div",Ts,[r(e,{label:"Bottom Position","label-position":"bottom","help-text":"Bottom label position for alternative layouts",min:0,max:100,value:40})])])])}const Rs=G(ss,[["render",Vs]]);class I extends R{constructor(){super(),this.eventValue=50,this.events=[],this.rangeValue=[200,800],this.rangeEvents=[]}createRenderRoot(){return this}addEvent(s){this.events=[...this.events,`${new Date().toLocaleTimeString()}: ${s}`].slice(-10)}addRangeEvent(s){this.rangeEvents=[...this.rangeEvents,`${new Date().toLocaleTimeString()}: ${s}`].slice(-10)}handleInput(s){this.eventValue=s.detail.value,this.addEvent(`📝 input: value=${s.detail.value}`)}handleChange(s){this.addEvent(`✅ change: value=${s.detail.value}`)}handleFocus(){this.addEvent("🎯 focus")}handleBlur(){this.addEvent("👋 blur")}handleRangeInput(s){this.rangeValue=s.detail.value;const[i,t]=s.detail.value;this.addRangeEvent(`📝 input: range=[$${i}, $${t}]`)}handleRangeChange(s){const[i,t]=s.detail.value;this.addRangeEvent(`✅ change: range=[$${i}, $${t}]`)}render(){return F`
      <section>
        <div class="mbe4">
          <h2>Basic Slider</h2>
          <p class="mbs2 mbe3">Single value slider with label</p>
        </div>
        <div class="mbe4">
          <ag-slider
            label="Volume"
            value="75"
          ></ag-slider>
        </div>

        <div class="mbe4">
          <h2>Dual Range Slider</h2>
          <p class="mbs2 mbe3">Select a range with two thumbs</p>
        </div>
        <div class="mbe4">
          <ag-slider
            label="Price Range ($0 - $1000)"
            dual
            min="0"
            max="1000"
            .value="${[200,800]}"
          ></ag-slider>
        </div>

        <div class="mbe4">
          <h2>Size Variants</h2>
          <p class="mbs2 mbe3">Three size options: small, default, and large</p>
        </div>
        <div
          class="mbe4"
          style="display: flex; flex-direction: column; gap: 2rem;"
        >
          <ag-slider
            label="Small"
            size="small"
            value="30"
          ></ag-slider>
          <ag-slider
            label="Default"
            size="default"
            value="50"
          ></ag-slider>
          <ag-slider
            label="Large"
            size="large"
            value="70"
          ></ag-slider>
        </div>

        <div class="mbe4">
          <h2>Style Variants</h2>
          <p class="mbs2 mbe3">Choose from filled and monochrome variants</p>
        </div>
        <div
          class="mbe4"
          style="display: flex; flex-direction: column; gap: 2rem;"
        >
          <fieldset style="border: 1px solid var(--ag-border); padding: 1rem; border-radius: var(--ag-radius-md);">
            <legend style="padding: 0 0.5rem; font-weight: 600;">Default (Primary Color)</legend>
            <ag-slider
              label="Standard"
              value="50"
            ></ag-slider>
          </fieldset>

          <fieldset style="border: 1px solid var(--ag-border); padding: 1rem; border-radius: var(--ag-radius-md);">
            <legend style="padding: 0 0.5rem; font-weight: 600;">Filled Variant</legend>
            <ag-slider
              label="Filled Thumb"
              filled
              value="60"
            ></ag-slider>
          </fieldset>

          <fieldset style="border: 1px solid var(--ag-border); padding: 1rem; border-radius: var(--ag-radius-md);">
            <legend style="padding: 0 0.5rem; font-weight: 600;">Monochrome (Adapts to Dark Mode)</legend>
            <ag-slider
              label="Monochrome"
              monochrome
              value="70"
            ></ag-slider>
          </fieldset>

          <fieldset style="border: 1px solid var(--ag-border); padding: 1rem; border-radius: var(--ag-radius-md);">
            <legend style="padding: 0 0.5rem; font-weight: 600;">Monochrome Filled</legend>
            <ag-slider
              label="Monochrome Filled"
              monochrome
              filled
              value="80"
            ></ag-slider>
          </fieldset>
        </div>

        <div class="mbe4">
          <h2>With Ticks and Tooltip</h2>
          <p class="mbs2 mbe3">Display tick marks and value tooltip</p>
        </div>
        <div
          class="mbe4"
          style="display: flex; flex-direction: column; gap: 2rem;"
        >
          <ag-slider
            label="With Tick Marks"
            show-ticks
            tick-step="25"
            value="50"
          ></ag-slider>
          <ag-slider
            label="With Tooltip"
            show-tooltip
            value="65"
          ></ag-slider>
          <ag-slider
            label="Ticks + Tooltip"
            show-ticks
            show-tooltip
            tick-step="20"
            value="40"
          ></ag-slider>
        </div>

        <div class="mbe4">
          <h2>Step Increments</h2>
          <p class="mbs2 mbe3">Control the granularity of value changes. Tick marks show the step intervals.</p>
        </div>
        <div
          class="mbe4"
          style="display: flex; flex-direction: column; gap: 2rem;"
        >
          <ag-slider
            label="Step 5"
            step="5"
            value="50"
            show-ticks
            tick-step="5"
          ></ag-slider>
          <ag-slider
            label="Step 10"
            step="10"
            value="50"
            show-ticks
            tick-step="10"
          ></ag-slider>
          <ag-slider
            label="Step 25 (Coarse)"
            step="25"
            value="50"
            show-ticks
            tick-step="25"
          ></ag-slider>
        </div>

        <div class="mbe4">
          <h2>Custom Range</h2>
          <p class="mbs2 mbe3">Configure min, max, and step values</p>
        </div>
        <div
          class="mbe4"
          style="display: flex; flex-direction: column; gap: 2rem;"
        >
          <ag-slider
            label="Temperature (°C)"
            min="-20"
            max="40"
            step="5"
            value="20"
          ></ag-slider>
          <ag-slider
            label="Percentage"
            min="0"
            max="100"
            step="1"
            value="75"
            help-text="Adjust from 0% to 100%"
          ></ag-slider>
        </div>

        <div class="mbe4">
          <h2>Vertical Orientation</h2>
          <p class="mbs2 mbe3">Vertical sliders for compact layouts</p>
        </div>
        <div
          class="mbe4"
          style="display: flex; gap: 2rem; align-items: flex-end;"
        >
          <ag-slider
            label="Volume"
            vertical
            value="75"
          ></ag-slider>
          <ag-slider
            label="Bass"
            vertical
            size="small"
            value="50"
          ></ag-slider>
          <ag-slider
            label="Treble"
            vertical
            size="large"
            value="60"
          ></ag-slider>
          <ag-slider
            label="Balance"
            vertical
            dual
            .value="${[25,75]}"
          ></ag-slider>
        </div>

        <div class="mbe4">
          <h2>States</h2>
          <p class="mbs2 mbe3">Disabled, readonly, and invalid states</p>
        </div>
        <div
          class="mbe4"
          style="display: flex; flex-direction: column; gap: 2rem;"
        >
          <ag-slider
            label="Disabled"
            disabled
            value="50"
            help-text="This slider is disabled"
          ></ag-slider>
          <ag-slider
            label="Readonly"
            readonly
            value="65"
            help-text="This slider is readonly"
          ></ag-slider>
          <ag-slider
            label="Invalid"
            invalid
            error-message="Value must be at least 50"
            value="30"
          ></ag-slider>
        </div>

        <div class="mbe4">
          <h2>With Help Text</h2>
          <p class="mbs2 mbe3">Provide additional guidance with help text</p>
        </div>
        <div class="mbe4">
          <ag-slider
            label="Brightness"
            help-text="Adjust screen brightness level (affects battery life)"
            value="75"
          ></ag-slider>
        </div>

        <div class="mbe4">
          <h2>Event Testing</h2>
          <p class="mbs2 mbe3">
            Demonstrates the dual-dispatch event pattern: both CustomEvents (via @input/@change)
            and native events work simultaneously. Drag the slider to see real-time events.
          </p>
        </div>
        <div class="mbe4">
          <ag-slider
            label="Interactive Slider"
            .value="${this.eventValue}"
            @input="${this.handleInput}"
            @change="${this.handleChange}"
            @focus="${this.handleFocus}"
            @blur="${this.handleBlur}"
          ></ag-slider>
          <div
            class="event-log"
            style="margin-top: 1.5rem; padding: 1rem; background: var(--ag-background-secondary); border-radius: var(--ag-radius-md); border: 1px solid var(--ag-border);"
          >
            <h3 style="margin-top: 0; margin-bottom: 0.75rem; font-size: 0.95rem;">Event Log (last 10 events):</h3>
            ${this.events.length===0?F`
              <div style="color: var(--ag-text-muted); font-size: 0.875rem; font-style: italic;">
                Interact with the slider to see events...
              </div>
            `:this.events.map(s=>F`
              <div style="font-family: monospace; font-size: 0.875rem; padding: 0.25rem 0; color: var(--ag-text-primary);">
                ${s}
              </div>
            `)}
          </div>
          <div style="margin-top: 1rem; font-size: 0.875rem; color: var(--ag-text-secondary);">
            Current value: <strong>${this.eventValue}</strong>
          </div>
        </div>

        <div class="mbe4">
          <h2>Dual Range Events</h2>
          <p class="mbs2 mbe3">Event handling with dual range sliders</p>
        </div>
        <div class="mbe4">
          <ag-slider
            label="Price Range Filter"
            dual
            min="0"
            max="1000"
            step="10"
            .value="${this.rangeValue}"
            @input="${this.handleRangeInput}"
            @change="${this.handleRangeChange}"
          ></ag-slider>
          <div
            class="event-log"
            style="margin-top: 1.5rem; padding: 1rem; background: var(--ag-background-secondary); border-radius: var(--ag-radius-md); border: 1px solid var(--ag-border);"
          >
            <h3 style="margin-top: 0; margin-bottom: 0.75rem; font-size: 0.95rem;">Range Event Log (last 10 events):</h3>
            ${this.rangeEvents.length===0?F`
              <div style="color: var(--ag-text-muted); font-size: 0.875rem; font-style: italic;">
                Drag the range handles to see events...
              </div>
            `:this.rangeEvents.map(s=>F`
              <div style="font-family: monospace; font-size: 0.875rem; padding: 0.25rem 0; color: var(--ag-text-primary);">
                ${s}
              </div>
            `)}
          </div>
          <div style="margin-top: 1rem; font-size: 0.875rem; color: var(--ag-text-secondary);">
            Current range: <strong>$${this.rangeValue[0]} - $${this.rangeValue[1]}</strong>
          </div>
        </div>

        <div class="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
          <p class="mbs2 mbe3">
            Use CSS Shadow Parts to customize the component's appearance.
            These examples show customized track, thumb, and label styling.
          </p>
        </div>
        <div
          class="mbe4"
          style="display: flex; flex-direction: column; gap: 2rem;"
        >
          <ag-slider
            label="Gradient Track"
            value="60"
            class="custom-slider-1"
          ></ag-slider>
          <ag-slider
            label="Large Thumb with Shadow"
            value="70"
            class="custom-slider-2"
          ></ag-slider>
          <ag-slider
            label="Fully Customized"
            value="50"
            class="custom-slider-3"
            help-text="Custom colors, sizing, and typography"
          ></ag-slider>
        </div>

        <div class="mbe4">
          <h2>External Label Support</h2>
          <p class="mbs2 mbe3">
            The Slider component supports external labels with helper text, required fields, and validation states.
          </p>
        </div>
        <div
          class="mbe4"
          style="max-width: 600px;"
        >
          <div class="mbe3">
            <ag-slider
              label="Volume Level"
              min="0"
              max="100"
              value="75"
            ></ag-slider>
          </div>

          <div class="mbe3">
            <ag-slider
              label="Brightness"
              help-text="Adjust screen brightness level (affects battery life)"
              min="0"
              max="100"
              value="50"
            ></ag-slider>
          </div>

          <div class="mbe3">
            <ag-slider
              label="Temperature"
              required
              help-text="This field is required"
              min="-20"
              max="40"
              value="20"
            ></ag-slider>
          </div>

          <div class="mbe3">
            <ag-slider
              label="Price Range"
              required
              invalid
              error-message="Please select a valid price range"
              min="0"
              max="1000"
              value="50"
            ></ag-slider>
          </div>
        </div>

        <div class="mbe4">
          <h2>Label Positioning</h2>
          <p class="mbs2 mbe3">
            Control label position with <code>label-position</code>: 'top' (default), 'start', 'end', or 'bottom'.
          </p>
        </div>
        <div
          class="mbe4"
          style="max-width: 600px;"
        >
          <div class="mbe3">
            <ag-slider
              label="Top Label (Default)"
              label-position="top"
              min="0"
              max="100"
              value="50"
            ></ag-slider>
          </div>

          <div class="mbe3">
            <ag-slider
              label="Start Position"
              label-position="start"
              min="0"
              max="100"
              value="60"
            ></ag-slider>
          </div>

          <div class="mbe3">
            <ag-slider
              label="End Position"
              label-position="end"
              min="0"
              max="100"
              value="70"
            ></ag-slider>
          </div>

          <div class="mbe3">
            <ag-slider
              label="Bottom Position"
              label-position="bottom"
              help-text="Bottom label position for alternative layouts"
              min="0"
              max="100"
              value="40"
            ></ag-slider>
          </div>
        </div>
      </section>
    `}}S(I,"properties",{eventValue:{type:Number},events:{type:Array},rangeValue:{type:Array},rangeEvents:{type:Array}});customElements.define("slider-lit-examples",I);const Ps=`<template>
  <section>
    <div class="mbe4">
      <h2>Basic Slider</h2>
      <p class="mbs2 mbe3">Single value slider with label</p>
    </div>
    <div class="mbe4">
      <VueSlider
        label="Volume"
        :value="75"
      />
    </div>

    <div class="mbe4">
      <h2>Dual Range Slider</h2>
      <p class="mbs2 mbe3">Select a range with two thumbs</p>
    </div>
    <div class="mbe4">
      <VueSlider
        label="Price Range ($0 - $1000)"
        dual
        :min="0"
        :max="1000"
        :value="[200, 800]"
      />
    </div>

    <div class="mbe4">
      <h2>Size Variants</h2>
      <p class="mbs2 mbe3">Three size options: small, default, and large</p>
    </div>
    <div
      class="mbe4"
      style="display: flex; flex-direction: column; gap: 2rem;"
    >
      <VueSlider
        label="Small"
        size="small"
        :value="30"
      />
      <VueSlider
        label="Default"
        size="default"
        :value="50"
      />
      <VueSlider
        label="Large"
        size="large"
        :value="70"
      />
    </div>

    <div class="mbe4">
      <h2>Style Variants</h2>
      <p class="mbs2 mbe3">Choose from filled and monochrome variants</p>
    </div>
    <div
      class="mbe4"
      style="display: flex; flex-direction: column; gap: 2rem;"
    >
      <fieldset style="border: 1px solid var(--ag-border); padding: 1rem; border-radius: var(--ag-radius-md);">
        <legend style="padding: 0 0.5rem; font-weight: 600;">Default (Primary Color)</legend>
        <VueSlider
          label="Standard"
          :value="50"
        />
      </fieldset>

      <fieldset style="border: 1px solid var(--ag-border); padding: 1rem; border-radius: var(--ag-radius-md);">
        <legend style="padding: 0 0.5rem; font-weight: 600;">Filled Variant</legend>
        <VueSlider
          label="Filled Thumb"
          filled
          :value="60"
        />
      </fieldset>

      <fieldset style="border: 1px solid var(--ag-border); padding: 1rem; border-radius: var(--ag-radius-md);">
        <legend style="padding: 0 0.5rem; font-weight: 600;">Monochrome (Adapts to Dark Mode)</legend>
        <VueSlider
          label="Monochrome"
          monochrome
          :value="70"
        />
      </fieldset>

      <fieldset style="border: 1px solid var(--ag-border); padding: 1rem; border-radius: var(--ag-radius-md);">
        <legend style="padding: 0 0.5rem; font-weight: 600;">Monochrome Filled</legend>
        <VueSlider
          label="Monochrome Filled"
          monochrome
          filled
          :value="80"
        />
      </fieldset>
    </div>

    <div class="mbe4">
      <h2>With Ticks and Tooltip</h2>
      <p class="mbs2 mbe3">Display tick marks and value tooltip</p>
    </div>
    <div
      class="mbe4"
      style="display: flex; flex-direction: column; gap: 2rem;"
    >
      <VueSlider
        label="With Tick Marks"
        show-ticks
        :tick-step="25"
        :value="50"
      />
      <VueSlider
        label="With Tooltip"
        show-tooltip
        :value="65"
      />
      <VueSlider
        label="Ticks + Tooltip"
        show-ticks
        show-tooltip
        :tick-step="20"
        :value="40"
      />
    </div>

    <div class="mbe4">
      <h2>Step Increments</h2>
      <p class="mbs2 mbe3">Control the granularity of value changes. Tick marks show the step intervals.</p>
    </div>
    <div
      class="mbe4"
      style="display: flex; flex-direction: column; gap: 2rem;"
    >
      <VueSlider
        label="Step 5"
        :step="5"
        :value="50"
        show-ticks
        :tick-step="5"
      />
      <VueSlider
        label="Step 10"
        :step="10"
        :value="50"
        show-ticks
        :tick-step="10"
      />
      <VueSlider
        label="Step 25 (Coarse)"
        :step="25"
        :value="50"
        show-ticks
        :tick-step="25"
      />
    </div>

    <div class="mbe4">
      <h2>Custom Range</h2>
      <p class="mbs2 mbe3">Configure min, max, and step values</p>
    </div>
    <div
      class="mbe4"
      style="display: flex; flex-direction: column; gap: 2rem;"
    >
      <VueSlider
        label="Temperature (°C)"
        :min="-20"
        :max="40"
        :step="5"
        :value="20"
      />
      <VueSlider
        label="Percentage"
        :min="0"
        :max="100"
        :step="1"
        :value="75"
        help-text="Adjust from 0% to 100%"
      />
    </div>

    <div class="mbe4">
      <h2>Vertical Orientation</h2>
      <p class="mbs2 mbe3">Vertical sliders for compact layouts</p>
    </div>
    <div
      class="mbe4"
      style="display: flex; gap: 2rem; align-items: flex-end;"
    >
      <VueSlider
        label="Volume"
        vertical
        :value="75"
      />
      <VueSlider
        label="Bass"
        vertical
        size="small"
        :value="50"
      />
      <VueSlider
        label="Treble"
        vertical
        size="large"
        :value="60"
      />
      <VueSlider
        label="Balance"
        vertical
        dual
        :value="[25, 75]"
      />
    </div>

    <div class="mbe4">
      <h2>States</h2>
      <p class="mbs2 mbe3">Disabled, readonly, and invalid states</p>
    </div>
    <div
      class="mbe4"
      style="display: flex; flex-direction: column; gap: 2rem;"
    >
      <VueSlider
        label="Disabled"
        disabled
        :value="50"
        help-text="This slider is disabled"
      />
      <VueSlider
        label="Readonly"
        readonly
        :value="65"
        help-text="This slider is readonly"
      />
      <VueSlider
        label="Invalid"
        invalid
        error-message="Value must be at least 50"
        :value="30"
      />
    </div>

    <div class="mbe4">
      <h2>With Help Text</h2>
      <p class="mbs2 mbe3">Provide additional guidance with help text</p>
    </div>
    <div class="mbe4">
      <VueSlider
        label="Brightness"
        help-text="Adjust screen brightness level (affects battery life)"
        :value="75"
      />
    </div>

    <div class="mbe4">
      <h2>Event Testing</h2>
      <p class="mbs2 mbe3">
        Demonstrates the dual-dispatch event pattern: both CustomEvents (via @input/@change)
        and native events work simultaneously. Drag the slider to see real-time events.
      </p>
    </div>
    <div class="mbe4">
      <VueSlider
        label="Interactive Slider"
        :value="eventValue"
        @input="handleInput"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      <div
        class="event-log"
        style="margin-top: 1.5rem; padding: 1rem; background: var(--ag-background-secondary); border-radius: var(--ag-radius-md); border: 1px solid var(--ag-border);"
      >
        <h3 style="margin-top: 0; margin-bottom: 0.75rem; font-size: 0.95rem;">Event Log (last 10 events):</h3>
        <div
          v-if="events.length === 0"
          style="color: var(--ag-text-muted); font-size: 0.875rem; font-style: italic;"
        >
          Interact with the slider to see events...
        </div>
        <div
          v-for="(event, i) in events"
          :key="i"
          style="font-family: monospace; font-size: 0.875rem; padding: 0.25rem 0; color: var(--ag-text-primary);"
        >
          {{ event }}
        </div>
      </div>
      <div style="margin-top: 1rem; font-size: 0.875rem; color: var(--ag-text-secondary);">
        Current value: <strong>{{ eventValue }}</strong>
      </div>
    </div>

    <div class="mbe4">
      <h2>Dual Range Events</h2>
      <p class="mbs2 mbe3">Event handling with dual range sliders</p>
    </div>
    <div class="mbe4">
      <VueSlider
        label="Price Range Filter"
        dual
        :min="0"
        :max="1000"
        :step="10"
        :value="rangeValue"
        @input="handleRangeInput"
        @change="handleRangeChange"
      />
      <div
        class="event-log"
        style="margin-top: 1.5rem; padding: 1rem; background: var(--ag-background-secondary); border-radius: var(--ag-radius-md); border: 1px solid var(--ag-border);"
      >
        <h3 style="margin-top: 0; margin-bottom: 0.75rem; font-size: 0.95rem;">Range Event Log (last 10 events):</h3>
        <div
          v-if="rangeEvents.length === 0"
          style="color: var(--ag-text-muted); font-size: 0.875rem; font-style: italic;"
        >
          Drag the range handles to see events...
        </div>
        <div
          v-for="(event, i) in rangeEvents"
          :key="i"
          style="font-family: monospace; font-size: 0.875rem; padding: 0.25rem 0; color: var(--ag-text-primary);"
        >
          {{ event }}
        </div>
      </div>
      <div style="margin-top: 1rem; font-size: 0.875rem; color: var(--ag-text-secondary);">
        Current range: <strong>\${{ rangeValue[0] }} - \${{ rangeValue[1] }}</strong>
      </div>
    </div>

    <div class="mbe4">
      <h2>CSS Shadow Parts Customization</h2>
      <p class="mbs2 mbe3">
        Use CSS Shadow Parts to customize the component's appearance.
        These examples show customized track, thumb, and label styling.
      </p>
    </div>
    <div
      class="mbe4"
      style="display: flex; flex-direction: column; gap: 2rem;"
    >
      <VueSlider
        label="Gradient Track"
        :value="60"
        class="custom-slider-1"
      />
      <VueSlider
        label="Large Thumb with Shadow"
        :value="70"
        class="custom-slider-2"
      />
      <VueSlider
        label="Fully Customized"
        :value="50"
        class="custom-slider-3"
        help-text="Custom colors, sizing, and typography"
      />
    </div>

    <div class="mbe4">
      <h2>External Label Support</h2>
      <p class="mbs2 mbe3">
        The Slider component supports external labels with helper text, required fields, and validation states.
      </p>
    </div>
    <div
      class="mbe4"
      style="max-width: 600px;"
    >
      <div class="mbe3">
        <VueSlider
          label="Volume Level"
          :min="0"
          :max="100"
          :value="75"
        />
      </div>

      <div class="mbe3">
        <VueSlider
          label="Brightness"
          help-text="Adjust screen brightness level (affects battery life)"
          :min="0"
          :max="100"
          :value="50"
        />
      </div>

      <div class="mbe3">
        <VueSlider
          label="Temperature"
          :required="true"
          help-text="This field is required"
          :min="-20"
          :max="40"
          :value="20"
        />
      </div>

      <div class="mbe3">
        <VueSlider
          label="Price Range"
          :required="true"
          :invalid="true"
          error-message="Please select a valid price range"
          :min="0"
          :max="1000"
          :value="50"
        />
      </div>
    </div>

    <div class="mbe4">
      <h2>Label Positioning</h2>
      <p class="mbs2 mbe3">
        Control label position with <code>label-position</code>: 'top' (default), 'start', 'end', or 'bottom'.
      </p>
    </div>
    <div
      class="mbe4"
      style="max-width: 600px;"
    >
      <div class="mbe3">
        <VueSlider
          label="Top Label (Default)"
          label-position="top"
          :min="0"
          :max="100"
          :value="50"
        />
      </div>

      <div class="mbe3">
        <VueSlider
          label="Start Position"
          label-position="start"
          :min="0"
          :max="100"
          :value="60"
        />
      </div>

      <div class="mbe3">
        <VueSlider
          label="End Position"
          label-position="end"
          :min="0"
          :max="100"
          :value="70"
        />
      </div>

      <div class="mbe3">
        <VueSlider
          label="Bottom Position"
          label-position="bottom"
          help-text="Bottom label position for alternative layouts"
          :min="0"
          :max="100"
          :value="40"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { VueSlider } from "agnosticui-core/slider/vue";

export default defineComponent({
  name: "SliderExamples",
  components: {
    VueSlider,
  },
  setup() {
    const eventValue = ref(50);
    const events = ref<string[]>([]);

    const rangeValue = ref<[number, number]>([200, 800]);
    const rangeEvents = ref<string[]>([]);

    const addEvent = (event: string) => {
      events.value = [
        ...events.value,
        \`\${new Date().toLocaleTimeString()}: \${event}\`,
      ].slice(-10);
    };

    const addRangeEvent = (event: string) => {
      rangeEvents.value = [
        ...rangeEvents.value,
        \`\${new Date().toLocaleTimeString()}: \${event}\`,
      ].slice(-10);
    };

    const handleInput = (detail: { value: number | [number, number] }) => {
      eventValue.value = detail.value as number;
      addEvent(\`📝 input: value=\${detail.value}\`);
    };

    const handleChange = (detail: { value: number | [number, number] }) => {
      addEvent(\`✅ change: value=\${detail.value}\`);
    };

    const handleFocus = () => {
      addEvent("🎯 focus");
    };

    const handleBlur = () => {
      addEvent("👋 blur");
    };

    const handleRangeInput = (detail: { value: number | [number, number] }) => {
      rangeValue.value = detail.value as [number, number];
      const [min, max] = detail.value as [number, number];
      addRangeEvent(\`📝 input: range=[$\${min}, $\${max}]\`);
    };

    const handleRangeChange = (detail: {
      value: number | [number, number];
    }) => {
      const [min, max] = detail.value as [number, number];
      addRangeEvent(\`✅ change: range=[$\${min}, $\${max}]\`);
    };

    return {
      eventValue,
      events,
      rangeValue,
      rangeEvents,
      handleInput,
      handleChange,
      handleFocus,
      handleBlur,
      handleRangeInput,
      handleRangeChange,
    };
  },
});
<\/script>

<style>
/* CSS Shadow Parts customization examples */

/* Custom slider 1: Gradient track */
.custom-slider-1::part(ag-slider-track) {
  height: 10px;
  background: var(--ag-background-tertiary);
}

.custom-slider-1::part(ag-slider-progress) {
  background: linear-gradient(90deg, var(--ag-green-500), var(--ag-blue-500));
}

/* Custom slider 2: Large thumb with enhanced shadow */
.custom-slider-2::part(ag-slider-thumb) {
  width: 28px;
  height: 28px;
  border: 4px solid var(--ag-primary);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.custom-slider-2::part(ag-slider-track) {
  height: 8px;
}

/* Custom slider 3: Fully customized */
.custom-slider-3::part(ag-slider-label) {
  font-weight: 700;
  font-size: 1.1rem;
}

.custom-slider-3::part(ag-slider-track) {
  height: 12px;
  background: var(--ag-background-tertiary);
  border-radius: var(--ag-radius-lg);
  border: 2px solid var(--ag-border);
}

.custom-slider-3::part(ag-slider-progress) {
  background: linear-gradient(
    135deg,
    var(--ag-purple-500) 0%,
    var(--ag-blue-500) 100%
  );
  border-radius: var(--ag-radius-lg);
}

.custom-slider-3::part(ag-slider-thumb) {
  width: 32px;
  height: 32px;
  background: var(--ag-white);
  border: 4px solid var(--ag-purple-500);
  box-shadow: 0 4px 16px rgba(137, 87, 229, 0.4);
}

.custom-slider-3::part(ag-slider-help-text) {
  color: var(--ag-purple-500);
  font-style: italic;
}
</style>
`,zs=`import { LitElement, html } from 'lit';
import 'agnosticui-core/slider';

export class SliderLitExamples extends LitElement {
  static properties = {
    eventValue: { type: Number },
    events: { type: Array },
    rangeValue: { type: Array },
    rangeEvents: { type: Array },
  };

  constructor() {
    super();
    this.eventValue = 50;
    this.events = [];
    this.rangeValue = [200, 800];
    this.rangeEvents = [];
  }

  // CRITICAL: Must include createRenderRoot() to use light DOM
  // Without this, global CSS utility classes won't work!
  createRenderRoot() {
    return this;
  }

  addEvent(event) {
    this.events = [
      ...this.events,
      \`\${new Date().toLocaleTimeString()}: \${event}\`,
    ].slice(-10);
  }

  addRangeEvent(event) {
    this.rangeEvents = [
      ...this.rangeEvents,
      \`\${new Date().toLocaleTimeString()}: \${event}\`,
    ].slice(-10);
  }

  handleInput(e) {
    this.eventValue = e.detail.value;
    this.addEvent(\`📝 input: value=\${e.detail.value}\`);
  }

  handleChange(e) {
    this.addEvent(\`✅ change: value=\${e.detail.value}\`);
  }

  handleFocus() {
    this.addEvent('🎯 focus');
  }

  handleBlur() {
    this.addEvent('👋 blur');
  }

  handleRangeInput(e) {
    this.rangeValue = e.detail.value;
    const [min, max] = e.detail.value;
    this.addRangeEvent(\`📝 input: range=[$\${min}, $\${max}]\`);
  }

  handleRangeChange(e) {
    const [min, max] = e.detail.value;
    this.addRangeEvent(\`✅ change: range=[$\${min}, $\${max}]\`);
  }

  render() {
    return html\`
      <section>
        <div class="mbe4">
          <h2>Basic Slider</h2>
          <p class="mbs2 mbe3">Single value slider with label</p>
        </div>
        <div class="mbe4">
          <ag-slider
            label="Volume"
            value="75"
          ></ag-slider>
        </div>

        <div class="mbe4">
          <h2>Dual Range Slider</h2>
          <p class="mbs2 mbe3">Select a range with two thumbs</p>
        </div>
        <div class="mbe4">
          <ag-slider
            label="Price Range ($0 - $1000)"
            dual
            min="0"
            max="1000"
            .value="\${[200, 800]}"
          ></ag-slider>
        </div>

        <div class="mbe4">
          <h2>Size Variants</h2>
          <p class="mbs2 mbe3">Three size options: small, default, and large</p>
        </div>
        <div
          class="mbe4"
          style="display: flex; flex-direction: column; gap: 2rem;"
        >
          <ag-slider
            label="Small"
            size="small"
            value="30"
          ></ag-slider>
          <ag-slider
            label="Default"
            size="default"
            value="50"
          ></ag-slider>
          <ag-slider
            label="Large"
            size="large"
            value="70"
          ></ag-slider>
        </div>

        <div class="mbe4">
          <h2>Style Variants</h2>
          <p class="mbs2 mbe3">Choose from filled and monochrome variants</p>
        </div>
        <div
          class="mbe4"
          style="display: flex; flex-direction: column; gap: 2rem;"
        >
          <fieldset style="border: 1px solid var(--ag-border); padding: 1rem; border-radius: var(--ag-radius-md);">
            <legend style="padding: 0 0.5rem; font-weight: 600;">Default (Primary Color)</legend>
            <ag-slider
              label="Standard"
              value="50"
            ></ag-slider>
          </fieldset>

          <fieldset style="border: 1px solid var(--ag-border); padding: 1rem; border-radius: var(--ag-radius-md);">
            <legend style="padding: 0 0.5rem; font-weight: 600;">Filled Variant</legend>
            <ag-slider
              label="Filled Thumb"
              filled
              value="60"
            ></ag-slider>
          </fieldset>

          <fieldset style="border: 1px solid var(--ag-border); padding: 1rem; border-radius: var(--ag-radius-md);">
            <legend style="padding: 0 0.5rem; font-weight: 600;">Monochrome (Adapts to Dark Mode)</legend>
            <ag-slider
              label="Monochrome"
              monochrome
              value="70"
            ></ag-slider>
          </fieldset>

          <fieldset style="border: 1px solid var(--ag-border); padding: 1rem; border-radius: var(--ag-radius-md);">
            <legend style="padding: 0 0.5rem; font-weight: 600;">Monochrome Filled</legend>
            <ag-slider
              label="Monochrome Filled"
              monochrome
              filled
              value="80"
            ></ag-slider>
          </fieldset>
        </div>

        <div class="mbe4">
          <h2>With Ticks and Tooltip</h2>
          <p class="mbs2 mbe3">Display tick marks and value tooltip</p>
        </div>
        <div
          class="mbe4"
          style="display: flex; flex-direction: column; gap: 2rem;"
        >
          <ag-slider
            label="With Tick Marks"
            show-ticks
            tick-step="25"
            value="50"
          ></ag-slider>
          <ag-slider
            label="With Tooltip"
            show-tooltip
            value="65"
          ></ag-slider>
          <ag-slider
            label="Ticks + Tooltip"
            show-ticks
            show-tooltip
            tick-step="20"
            value="40"
          ></ag-slider>
        </div>

        <div class="mbe4">
          <h2>Step Increments</h2>
          <p class="mbs2 mbe3">Control the granularity of value changes. Tick marks show the step intervals.</p>
        </div>
        <div
          class="mbe4"
          style="display: flex; flex-direction: column; gap: 2rem;"
        >
          <ag-slider
            label="Step 5"
            step="5"
            value="50"
            show-ticks
            tick-step="5"
          ></ag-slider>
          <ag-slider
            label="Step 10"
            step="10"
            value="50"
            show-ticks
            tick-step="10"
          ></ag-slider>
          <ag-slider
            label="Step 25 (Coarse)"
            step="25"
            value="50"
            show-ticks
            tick-step="25"
          ></ag-slider>
        </div>

        <div class="mbe4">
          <h2>Custom Range</h2>
          <p class="mbs2 mbe3">Configure min, max, and step values</p>
        </div>
        <div
          class="mbe4"
          style="display: flex; flex-direction: column; gap: 2rem;"
        >
          <ag-slider
            label="Temperature (°C)"
            min="-20"
            max="40"
            step="5"
            value="20"
          ></ag-slider>
          <ag-slider
            label="Percentage"
            min="0"
            max="100"
            step="1"
            value="75"
            help-text="Adjust from 0% to 100%"
          ></ag-slider>
        </div>

        <div class="mbe4">
          <h2>Vertical Orientation</h2>
          <p class="mbs2 mbe3">Vertical sliders for compact layouts</p>
        </div>
        <div
          class="mbe4"
          style="display: flex; gap: 2rem; align-items: flex-end;"
        >
          <ag-slider
            label="Volume"
            vertical
            value="75"
          ></ag-slider>
          <ag-slider
            label="Bass"
            vertical
            size="small"
            value="50"
          ></ag-slider>
          <ag-slider
            label="Treble"
            vertical
            size="large"
            value="60"
          ></ag-slider>
          <ag-slider
            label="Balance"
            vertical
            dual
            .value="\${[25, 75]}"
          ></ag-slider>
        </div>

        <div class="mbe4">
          <h2>States</h2>
          <p class="mbs2 mbe3">Disabled, readonly, and invalid states</p>
        </div>
        <div
          class="mbe4"
          style="display: flex; flex-direction: column; gap: 2rem;"
        >
          <ag-slider
            label="Disabled"
            disabled
            value="50"
            help-text="This slider is disabled"
          ></ag-slider>
          <ag-slider
            label="Readonly"
            readonly
            value="65"
            help-text="This slider is readonly"
          ></ag-slider>
          <ag-slider
            label="Invalid"
            invalid
            error-message="Value must be at least 50"
            value="30"
          ></ag-slider>
        </div>

        <div class="mbe4">
          <h2>With Help Text</h2>
          <p class="mbs2 mbe3">Provide additional guidance with help text</p>
        </div>
        <div class="mbe4">
          <ag-slider
            label="Brightness"
            help-text="Adjust screen brightness level (affects battery life)"
            value="75"
          ></ag-slider>
        </div>

        <div class="mbe4">
          <h2>Event Testing</h2>
          <p class="mbs2 mbe3">
            Demonstrates the dual-dispatch event pattern: both CustomEvents (via @input/@change)
            and native events work simultaneously. Drag the slider to see real-time events.
          </p>
        </div>
        <div class="mbe4">
          <ag-slider
            label="Interactive Slider"
            .value="\${this.eventValue}"
            @input="\${this.handleInput}"
            @change="\${this.handleChange}"
            @focus="\${this.handleFocus}"
            @blur="\${this.handleBlur}"
          ></ag-slider>
          <div
            class="event-log"
            style="margin-top: 1.5rem; padding: 1rem; background: var(--ag-background-secondary); border-radius: var(--ag-radius-md); border: 1px solid var(--ag-border);"
          >
            <h3 style="margin-top: 0; margin-bottom: 0.75rem; font-size: 0.95rem;">Event Log (last 10 events):</h3>
            \${this.events.length === 0 ? html\`
              <div style="color: var(--ag-text-muted); font-size: 0.875rem; font-style: italic;">
                Interact with the slider to see events...
              </div>
            \` : this.events.map(event => html\`
              <div style="font-family: monospace; font-size: 0.875rem; padding: 0.25rem 0; color: var(--ag-text-primary);">
                \${event}
              </div>
            \`)}
          </div>
          <div style="margin-top: 1rem; font-size: 0.875rem; color: var(--ag-text-secondary);">
            Current value: <strong>\${this.eventValue}</strong>
          </div>
        </div>

        <div class="mbe4">
          <h2>Dual Range Events</h2>
          <p class="mbs2 mbe3">Event handling with dual range sliders</p>
        </div>
        <div class="mbe4">
          <ag-slider
            label="Price Range Filter"
            dual
            min="0"
            max="1000"
            step="10"
            .value="\${this.rangeValue}"
            @input="\${this.handleRangeInput}"
            @change="\${this.handleRangeChange}"
          ></ag-slider>
          <div
            class="event-log"
            style="margin-top: 1.5rem; padding: 1rem; background: var(--ag-background-secondary); border-radius: var(--ag-radius-md); border: 1px solid var(--ag-border);"
          >
            <h3 style="margin-top: 0; margin-bottom: 0.75rem; font-size: 0.95rem;">Range Event Log (last 10 events):</h3>
            \${this.rangeEvents.length === 0 ? html\`
              <div style="color: var(--ag-text-muted); font-size: 0.875rem; font-style: italic;">
                Drag the range handles to see events...
              </div>
            \` : this.rangeEvents.map(event => html\`
              <div style="font-family: monospace; font-size: 0.875rem; padding: 0.25rem 0; color: var(--ag-text-primary);">
                \${event}
              </div>
            \`)}
          </div>
          <div style="margin-top: 1rem; font-size: 0.875rem; color: var(--ag-text-secondary);">
            Current range: <strong>$\${this.rangeValue[0]} - $\${this.rangeValue[1]}</strong>
          </div>
        </div>

        <div class="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
          <p class="mbs2 mbe3">
            Use CSS Shadow Parts to customize the component's appearance.
            These examples show customized track, thumb, and label styling.
          </p>
        </div>
        <div
          class="mbe4"
          style="display: flex; flex-direction: column; gap: 2rem;"
        >
          <ag-slider
            label="Gradient Track"
            value="60"
            class="custom-slider-1"
          ></ag-slider>
          <ag-slider
            label="Large Thumb with Shadow"
            value="70"
            class="custom-slider-2"
          ></ag-slider>
          <ag-slider
            label="Fully Customized"
            value="50"
            class="custom-slider-3"
            help-text="Custom colors, sizing, and typography"
          ></ag-slider>
        </div>

        <div class="mbe4">
          <h2>External Label Support</h2>
          <p class="mbs2 mbe3">
            The Slider component supports external labels with helper text, required fields, and validation states.
          </p>
        </div>
        <div
          class="mbe4"
          style="max-width: 600px;"
        >
          <div class="mbe3">
            <ag-slider
              label="Volume Level"
              min="0"
              max="100"
              value="75"
            ></ag-slider>
          </div>

          <div class="mbe3">
            <ag-slider
              label="Brightness"
              help-text="Adjust screen brightness level (affects battery life)"
              min="0"
              max="100"
              value="50"
            ></ag-slider>
          </div>

          <div class="mbe3">
            <ag-slider
              label="Temperature"
              required
              help-text="This field is required"
              min="-20"
              max="40"
              value="20"
            ></ag-slider>
          </div>

          <div class="mbe3">
            <ag-slider
              label="Price Range"
              required
              invalid
              error-message="Please select a valid price range"
              min="0"
              max="1000"
              value="50"
            ></ag-slider>
          </div>
        </div>

        <div class="mbe4">
          <h2>Label Positioning</h2>
          <p class="mbs2 mbe3">
            Control label position with <code>label-position</code>: 'top' (default), 'start', 'end', or 'bottom'.
          </p>
        </div>
        <div
          class="mbe4"
          style="max-width: 600px;"
        >
          <div class="mbe3">
            <ag-slider
              label="Top Label (Default)"
              label-position="top"
              min="0"
              max="100"
              value="50"
            ></ag-slider>
          </div>

          <div class="mbe3">
            <ag-slider
              label="Start Position"
              label-position="start"
              min="0"
              max="100"
              value="60"
            ></ag-slider>
          </div>

          <div class="mbe3">
            <ag-slider
              label="End Position"
              label-position="end"
              min="0"
              max="100"
              value="70"
            ></ag-slider>
          </div>

          <div class="mbe3">
            <ag-slider
              label="Bottom Position"
              label-position="bottom"
              help-text="Bottom label position for alternative layouts"
              min="0"
              max="100"
              value="40"
            ></ag-slider>
          </div>
        </div>
      </section>
    \`;
  }
}

// Register the custom element (at the bottom, NOT with decorator)
customElements.define('slider-lit-examples', SliderLitExamples);
`,Is=`import { useState } from "react";
import { ReactSlider } from "agnosticui-core/slider/react";

export default function SliderReactExamples() {
  const [eventValue, setEventValue] = useState(50);
  const [events, setEvents] = useState([]);
  const [rangeValue, setRangeValue] = useState([200, 800]);
  const [rangeEvents, setRangeEvents] = useState([]);

  const addEvent = (event) => {
    setEvents((prev) => [
      ...prev,
      \`\${new Date().toLocaleTimeString()}: \${event}\`,
    ].slice(-10));
  };

  const addRangeEvent = (event) => {
    setRangeEvents((prev) => [
      ...prev,
      \`\${new Date().toLocaleTimeString()}: \${event}\`,
    ].slice(-10));
  };

  const handleInput = (detail) => {
    setEventValue(detail.value);
    addEvent(\`📝 input: value=\${detail.value}\`);
  };

  const handleChange = (detail) => {
    addEvent(\`✅ change: value=\${detail.value}\`);
  };

  const handleFocus = () => {
    addEvent('🎯 focus');
  };

  const handleBlur = () => {
    addEvent('👋 blur');
  };

  const handleRangeInput = (detail) => {
    setRangeValue(detail.value);
    const [min, max] = detail.value;
    addRangeEvent(\`📝 input: range=[$\${min}, $\${max}]\`);
  };

  const handleRangeChange = (detail) => {
    const [min, max] = detail.value;
    addRangeEvent(\`✅ change: range=[$\${min}, $\${max}]\`);
  };

  return (
    <section>
      <div className="mbe4">
        <h2>Basic Slider</h2>
        <p className="mbs2 mbe3">Single value slider with label</p>
      </div>
      <div className="mbe4">
        <ReactSlider
          label="Volume"
          value={75}
        />
      </div>

      <div className="mbe4">
        <h2>Dual Range Slider</h2>
        <p className="mbs2 mbe3">Select a range with two thumbs</p>
      </div>
      <div className="mbe4">
        <ReactSlider
          label="Price Range ($0 - $1000)"
          dual={true}
          min={0}
          max={1000}
          value={[200, 800]}
        />
      </div>

      <div className="mbe4">
        <h2>Size Variants</h2>
        <p className="mbs2 mbe3">Three size options: small, default, and large</p>
      </div>
      <div
        className="mbe4"
        style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
      >
        <ReactSlider
          label="Small"
          size="small"
          value={30}
        />
        <ReactSlider
          label="Default"
          size="default"
          value={50}
        />
        <ReactSlider
          label="Large"
          size="large"
          value={70}
        />
      </div>

      <div className="mbe4">
        <h2>Style Variants</h2>
        <p className="mbs2 mbe3">Choose from filled and monochrome variants</p>
      </div>
      <div
        className="mbe4"
        style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
      >
        <fieldset style={{ border: '1px solid var(--ag-border)', padding: '1rem', borderRadius: 'var(--ag-radius-md)' }}>
          <legend style={{ padding: '0 0.5rem', fontWeight: 600 }}>Default (Primary Color)</legend>
          <ReactSlider
            label="Standard"
            value={50}
          />
        </fieldset>

        <fieldset style={{ border: '1px solid var(--ag-border)', padding: '1rem', borderRadius: 'var(--ag-radius-md)' }}>
          <legend style={{ padding: '0 0.5rem', fontWeight: 600 }}>Filled Variant</legend>
          <ReactSlider
            label="Filled Thumb"
            filled={true}
            value={60}
          />
        </fieldset>

        <fieldset style={{ border: '1px solid var(--ag-border)', padding: '1rem', borderRadius: 'var(--ag-radius-md)' }}>
          <legend style={{ padding: '0 0.5rem', fontWeight: 600 }}>Monochrome (Adapts to Dark Mode)</legend>
          <ReactSlider
            label="Monochrome"
            monochrome={true}
            value={70}
          />
        </fieldset>

        <fieldset style={{ border: '1px solid var(--ag-border)', padding: '1rem', borderRadius: 'var(--ag-radius-md)' }}>
          <legend style={{ padding: '0 0.5rem', fontWeight: 600 }}>Monochrome Filled</legend>
          <ReactSlider
            label="Monochrome Filled"
            monochrome={true}
            filled={true}
            value={80}
          />
        </fieldset>
      </div>

      <div className="mbe4">
        <h2>With Ticks and Tooltip</h2>
        <p className="mbs2 mbe3">Display tick marks and value tooltip</p>
      </div>
      <div
        className="mbe4"
        style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
      >
        <ReactSlider
          label="With Tick Marks"
          showTicks={true}
          tickStep={25}
          value={50}
        />
        <ReactSlider
          label="With Tooltip"
          showTooltip={true}
          value={65}
        />
        <ReactSlider
          label="Ticks + Tooltip"
          showTicks={true}
          showTooltip={true}
          tickStep={20}
          value={40}
        />
      </div>

      <div className="mbe4">
        <h2>Step Increments</h2>
        <p className="mbs2 mbe3">Control the granularity of value changes. Tick marks show the step intervals.</p>
      </div>
      <div
        className="mbe4"
        style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
      >
        <ReactSlider
          label="Step 5"
          step={5}
          value={50}
          showTicks={true}
          tickStep={5}
        />
        <ReactSlider
          label="Step 10"
          step={10}
          value={50}
          showTicks={true}
          tickStep={10}
        />
        <ReactSlider
          label="Step 25 (Coarse)"
          step={25}
          value={50}
          showTicks={true}
          tickStep={25}
        />
      </div>

      <div className="mbe4">
        <h2>Custom Range</h2>
        <p className="mbs2 mbe3">Configure min, max, and step values</p>
      </div>
      <div
        className="mbe4"
        style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
      >
        <ReactSlider
          label="Temperature (°C)"
          min={-20}
          max={40}
          step={5}
          value={20}
        />
        <ReactSlider
          label="Percentage"
          min={0}
          max={100}
          step={1}
          value={75}
          helpText="Adjust from 0% to 100%"
        />
      </div>

      <div className="mbe4">
        <h2>Vertical Orientation</h2>
        <p className="mbs2 mbe3">Vertical sliders for compact layouts</p>
      </div>
      <div
        className="mbe4"
        style={{ display: 'flex', gap: '2rem', alignItems: 'flex-end' }}
      >
        <ReactSlider
          label="Volume"
          vertical={true}
          value={75}
        />
        <ReactSlider
          label="Bass"
          vertical={true}
          size="small"
          value={50}
        />
        <ReactSlider
          label="Treble"
          vertical={true}
          size="large"
          value={60}
        />
        <ReactSlider
          label="Balance"
          vertical={true}
          dual={true}
          value={[25, 75]}
        />
      </div>

      <div className="mbe4">
        <h2>States</h2>
        <p className="mbs2 mbe3">Disabled, readonly, and invalid states</p>
      </div>
      <div
        className="mbe4"
        style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
      >
        <ReactSlider
          label="Disabled"
          disabled={true}
          value={50}
          helpText="This slider is disabled"
        />
        <ReactSlider
          label="Readonly"
          readonly={true}
          value={65}
          helpText="This slider is readonly"
        />
        <ReactSlider
          label="Invalid"
          invalid={true}
          errorMessage="Value must be at least 50"
          value={30}
        />
      </div>

      <div className="mbe4">
        <h2>With Help Text</h2>
        <p className="mbs2 mbe3">Provide additional guidance with help text</p>
      </div>
      <div className="mbe4">
        <ReactSlider
          label="Brightness"
          helpText="Adjust screen brightness level (affects battery life)"
          value={75}
        />
      </div>

      <div className="mbe4">
        <h2>Event Testing</h2>
        <p className="mbs2 mbe3">
          Demonstrates the dual-dispatch event pattern: both CustomEvents (via @input/@change)
          and native events work simultaneously. Drag the slider to see real-time events.
        </p>
      </div>
      <div className="mbe4">
        <ReactSlider
          label="Interactive Slider"
          value={eventValue}
          onInput={handleInput}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <div
          className="event-log"
          style={{ marginTop: '1.5rem', padding: '1rem', background: 'var(--ag-background-secondary)', borderRadius: 'var(--ag-radius-md)', border: '1px solid var(--ag-border)' }}
        >
          <h3 style={{ marginTop: 0, marginBottom: '0.75rem', fontSize: '0.95rem' }}>Event Log (last 10 events):</h3>
          {events.length === 0 ? (
            <div style={{ color: 'var(--ag-text-muted)', fontSize: '0.875rem', fontStyle: 'italic' }}>
              Interact with the slider to see events...
            </div>
          ) : (
            events.map((event, i) => (
              <div
                key={i}
                style={{ fontFamily: 'monospace', fontSize: '0.875rem', padding: '0.25rem 0', color: 'var(--ag-text-primary)' }}
              >
                {event}
              </div>
            ))
          )}
        </div>
        <div style={{ marginTop: '1rem', fontSize: '0.875rem', color: 'var(--ag-text-secondary)' }}>
          Current value: <strong>{eventValue}</strong>
        </div>
      </div>

      <div className="mbe4">
        <h2>Dual Range Events</h2>
        <p className="mbs2 mbe3">Event handling with dual range sliders</p>
      </div>
      <div className="mbe4">
        <ReactSlider
          label="Price Range Filter"
          dual={true}
          min={0}
          max={1000}
          step={10}
          value={rangeValue}
          onInput={handleRangeInput}
          onChange={handleRangeChange}
        />
        <div
          className="event-log"
          style={{ marginTop: '1.5rem', padding: '1rem', background: 'var(--ag-background-secondary)', borderRadius: 'var(--ag-radius-md)', border: '1px solid var(--ag-border)' }}
        >
          <h3 style={{ marginTop: 0, marginBottom: '0.75rem', fontSize: '0.95rem' }}>Range Event Log (last 10 events):</h3>
          {rangeEvents.length === 0 ? (
            <div style={{ color: 'var(--ag-text-muted)', fontSize: '0.875rem', fontStyle: 'italic' }}>
              Drag the range handles to see events...
            </div>
          ) : (
            rangeEvents.map((event, i) => (
              <div
                key={i}
                style={{ fontFamily: 'monospace', fontSize: '0.875rem', padding: '0.25rem 0', color: 'var(--ag-text-primary)' }}
              >
                {event}
              </div>
            ))
          )}
        </div>
        <div style={{ marginTop: '1rem', fontSize: '0.875rem', color: 'var(--ag-text-secondary)' }}>
          Current range: <strong>\${rangeValue[0]} - \${rangeValue[1]}</strong>
        </div>
      </div>

      <div className="mbe4">
        <h2>CSS Shadow Parts Customization</h2>
        <p className="mbs2 mbe3">
          Use CSS Shadow Parts to customize the component's appearance.
          These examples show customized track, thumb, and label styling.
        </p>
      </div>
      <div
        className="mbe4"
        style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
      >
        <ReactSlider
          label="Gradient Track"
          value={60}
          className="custom-slider-1"
        />
        <ReactSlider
          label="Large Thumb with Shadow"
          value={70}
          className="custom-slider-2"
        />
        <ReactSlider
          label="Fully Customized"
          value={50}
          className="custom-slider-3"
          helpText="Custom colors, sizing, and typography"
        />
      </div>

      <div className="mbe4">
        <h2>External Label Support</h2>
        <p className="mbs2 mbe3">
          The Slider component supports external labels with helper text, required fields, and validation states.
        </p>
      </div>
      <div
        className="mbe4"
        style={{ maxWidth: '600px' }}
      >
        <div className="mbe3">
          <ReactSlider
            label="Volume Level"
            min={0}
            max={100}
            value={75}
          />
        </div>

        <div className="mbe3">
          <ReactSlider
            label="Brightness"
            helpText="Adjust screen brightness level (affects battery life)"
            min={0}
            max={100}
            value={50}
          />
        </div>

        <div className="mbe3">
          <ReactSlider
            label="Temperature"
            required={true}
            helpText="This field is required"
            min={-20}
            max={40}
            value={20}
          />
        </div>

        <div className="mbe3">
          <ReactSlider
            label="Price Range"
            required={true}
            invalid={true}
            errorMessage="Please select a valid price range"
            min={0}
            max={1000}
            value={50}
          />
        </div>
      </div>

      <div className="mbe4">
        <h2>Label Positioning</h2>
        <p className="mbs2 mbe3">
          Control label position with <code>label-position</code>: 'top' (default), 'start', 'end', or 'bottom'.
        </p>
      </div>
      <div
        className="mbe4"
        style={{ maxWidth: '600px' }}
      >
        <div className="mbe3">
          <ReactSlider
            label="Top Label (Default)"
            labelPosition="top"
            min={0}
            max={100}
            value={50}
          />
        </div>

        <div className="mbe3">
          <ReactSlider
            label="Start Position"
            labelPosition="start"
            min={0}
            max={100}
            value={60}
          />
        </div>

        <div className="mbe3">
          <ReactSlider
            label="End Position"
            labelPosition="end"
            min={0}
            max={100}
            value={70}
          />
        </div>

        <div className="mbe3">
          <ReactSlider
            label="Bottom Position"
            labelPosition="bottom"
            helpText="Bottom label position for alternative layouts"
            min={0}
            max={100}
            value={40}
          />
        </div>
      </div>
    </section>
  );
}
`,Ks=JSON.parse('{"title":"Slider","description":"","frontmatter":{},"headers":[],"relativePath":"components/slider.md","filePath":"components/slider.md"}'),Ls={name:"components/slider.md"},Qs=Object.assign(Ls,{setup(n){return(s,i)=>(v(),y("div",null,[i[1]||(i[1]=a("h1",{id:"slider",tabindex:"-1"},[b("Slider "),a("a",{class:"header-anchor",href:"#slider","aria-label":'Permalink to "Slider"'},"​")],-1)),r(N),i[2]||(i[2]=a("p",null,"Slider allows a user to select a value or range of values by moving a thumb along a track. It's ideal for adjusting settings like volume, brightness, price ranges, and other numeric inputs.",-1)),i[3]||(i[3]=a("h2",{id:"examples",tabindex:"-1"},[b("Examples "),a("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),r(J,{component:"slider","vue-code":x(Ps),"lit-code":x(zs),"react-code":x(Is)},{vue:V(()=>[r(Rs)]),lit:V(()=>[...i[0]||(i[0]=[a("slider-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),i[4]||(i[4]=X(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The framework examples below <code>import</code> AgnosticUI as an <code>npm</code> package. Alternatively, you can use the <strong>CLI for complete control, AI/LLM visibility, and full code ownership</strong>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> init</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> --framework</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> FRAMEWORK</span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;"> # react, vue, lit, svelte, etc.</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> add</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> Slider</span></span></code></pre></div><p>The CLI copies source code directly into your project, giving you full visibility and control. After running <code>npx ag add</code>, you&#39;ll receive exact import instructions.</p></div><details class="details custom-block"><summary>Vue</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">    &lt;!-- Basic slider --&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueSlider</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Volume&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> :min</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;0&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> :max</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;100&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> :value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;75&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">    &lt;!-- Dual range slider --&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueSlider</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Price Range&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      dual</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :min</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;0&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :max</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;1000&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;[200, 800]&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">    &lt;!-- With ticks and tooltip --&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueSlider</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Brightness&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :min</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;0&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :max</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;100&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :step</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;25&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;50&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      show-ticks</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      show-tooltip</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :tick-step</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;25&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">    &lt;!-- Filled and monochrome variants --&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueSlider</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Filled Variant&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> filled</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> :value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;60&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueSlider</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Monochrome&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> monochrome</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> :value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;70&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> lang</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;ts&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { defineComponent } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;vue&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { VueSlider } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/slider/vue&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> defineComponent</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">({</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  components: { VueSlider }</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">,</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">})</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><details class="details custom-block"><summary>React</summary><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { ReactSlider } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/slider/react&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> function</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> Example</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">() </span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> [</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">setValue</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">] </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> useState</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">50</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> [</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">range</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">setRange</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">] </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> useState</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">number</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> |</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> [</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">number</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">number</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">] </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">|</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> undefined</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;([</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    200</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">800</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  ]);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  return</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">      {</span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* Basic slider */</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactSlider</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        label</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Volume&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        min</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        max</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">100</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        onInput</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> setValue</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(e.detail.value </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">as</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> number</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">)</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">      {</span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* Dual range slider */</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactSlider</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        label</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Price Range&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        dual</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        min</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        max</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">1000</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">range</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        onInput</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> setRange</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(e.detail.value </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">as</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> [</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">number</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">number</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">])</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">      {</span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* With ticks and tooltip */</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactSlider</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        label</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Brightness&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        min</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        max</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">100</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        step</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">25</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">50</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        showTicks</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        showTooltip</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        tickStep</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">25</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">      {</span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* Filled and monochrome variants */</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactSlider</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Filled Variant&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> filled</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">60</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactSlider</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Monochrome&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> monochrome</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">70</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  );</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div></details><details class="details custom-block"><summary>Lit (Web Components)</summary><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;module&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  import</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/slider&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">  &lt;!-- Basic slider --&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-slider</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Volume&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> min</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;0&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> max</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;100&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;75&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-slider</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">  &lt;!-- Dual range slider --&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-slider</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Price Range&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    dual</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    min</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;0&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    max</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;1000&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    .value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;\${[200,&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    800]}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-slider</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">  &lt;!-- With ticks and tooltip --&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-slider</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Brightness&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    min</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;0&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    max</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;100&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    step</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;25&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;50&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    show-ticks</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    show-tooltip</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    tick-step</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;25&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-slider</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">  &lt;!-- Filled and monochrome variants --&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-slider</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Filled Variant&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> filled</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;60&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-slider</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-slider</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Monochrome&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> monochrome</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;70&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-slider</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><table class="ag-table ag-table--striped"><thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>label</code></td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>Label text for the slider</td></tr><tr><td><code>labelPosition</code></td><td><code>&#39;top&#39; | &#39;start&#39; | &#39;end&#39; | &#39;bottom&#39;</code></td><td><code>&#39;top&#39;</code></td><td>Position of the label relative to the slider</td></tr><tr><td><code>labelHidden</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Visually hide the label (still accessible)</td></tr><tr><td><code>noLabel</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Remove label completely</td></tr><tr><td><code>ariaLabel</code></td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>ARIA label when label is hidden</td></tr><tr><td><code>min</code></td><td><code>number</code></td><td><code>0</code></td><td>Minimum value</td></tr><tr><td><code>max</code></td><td><code>number</code></td><td><code>100</code></td><td>Maximum value</td></tr><tr><td><code>step</code></td><td><code>number</code></td><td><code>1</code></td><td>Step increment for value changes</td></tr><tr><td><code>value</code></td><td><code>number | [number, number]</code></td><td><code>0</code></td><td>Current value (single or dual range)</td></tr><tr><td><code>dual</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Enable dual range mode with two thumbs</td></tr><tr><td><code>vertical</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Vertical orientation</td></tr><tr><td><code>filled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Filled thumb style (solid background)</td></tr><tr><td><code>monochrome</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Monochrome color scheme (adapts to dark mode)</td></tr><tr><td><code>size</code></td><td><code>&#39;small&#39; | &#39;default&#39; | &#39;large&#39;</code></td><td><code>&#39;default&#39;</code></td><td>Size variant</td></tr><tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Disabled state prevents interaction</td></tr><tr><td><code>readonly</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Readonly state allows focus but prevents changes</td></tr><tr><td><code>required</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Required field indicator</td></tr><tr><td><code>invalid</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Invalid state for validation feedback</td></tr><tr><td><code>errorMessage</code></td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>Error message text displayed when invalid</td></tr><tr><td><code>helpText</code></td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>Helper text displayed below slider</td></tr><tr><td><code>name</code></td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>Form field name for submission</td></tr><tr><td><code>showTooltip</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Show current value in tooltip while dragging</td></tr><tr><td><code>showTicks</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Display tick marks along track</td></tr><tr><td><code>tickStep</code></td><td><code>number</code></td><td><code>25</code></td><td>Interval for tick marks</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><table class="ag-table ag-table--striped"><thead><tr><th>Event</th><th>Framework</th><th>Detail</th><th>Description</th></tr></thead><tbody><tr><td><code>input</code></td><td>Vue: <code>@input</code><br>React: <code>onInput</code><br>Lit: <code>@input</code></td><td><code>{ value: number | [number, number] }</code></td><td>Fired continuously while dragging the thumb. Use for real-time updates.</td></tr><tr><td><code>change</code></td><td>Vue: <code>@change</code><br>React: <code>onChange</code><br>Lit: <code>@change</code></td><td><code>{ value: number | [number, number] }</code></td><td>Fired when the thumb is released after dragging. Use for final value updates.</td></tr><tr><td><code>focus</code></td><td>Vue: <code>@focus</code><br>React: <code>onFocus</code><br>Lit: <code>@focus</code></td><td><code>FocusEvent</code></td><td>Fired when slider receives focus.</td></tr><tr><td><code>blur</code></td><td>Vue: <code>@blur</code><br>React: <code>onBlur</code><br>Lit: <code>@blur</code></td><td><code>FocusEvent</code></td><td>Fired when slider loses focus.</td></tr></tbody></table><p><strong>Note:</strong> The Slider component supports <strong>dual-dispatch event propagation</strong>: it dispatches both DOM CustomEvents (usable with <code>addEventListener</code>) and invokes callback props (<code>.onInput</code>, <code>.onChange</code>), giving you flexibility in how you handle events.</p><h3 id="event-usage-examples" tabindex="-1">Event Usage Examples <a class="header-anchor" href="#event-usage-examples" aria-label="Permalink to &quot;Event Usage Examples&quot;">​</a></h3><details class="details custom-block"><summary>Vue</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">    &lt;!-- Event handler with @input --&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueSlider</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Volume&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;volume&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      @input</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;handleInput&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      @change</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;handleChange&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">    &lt;!-- v-model:value for two-way binding --&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueSlider</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Brightness&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> v-model:value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;brightness&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">    &lt;!-- Dual range with events --&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueSlider</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Price Range&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      dual</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;priceRange&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      @input</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;handleRangeInput&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      @change</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;handleRangeChange&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Current volume: {{ volume }}&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Price range: \${{ priceRange[0] }} - \${{ priceRange[1] }}&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> setup</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> lang</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;ts&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { ref } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;vue&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { VueSlider } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/slider/vue&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> volume</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> ref</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">50</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> brightness</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> ref</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">75</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> priceRange</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> ref</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">([</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">200</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">800</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> handleInput</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">detail</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { </span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> number</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> |</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> [</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">number</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">number</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">] }) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  volume.value </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> detail.value </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">as</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> number</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Input (dragging):&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, detail.value);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> handleChange</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">detail</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { </span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> number</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> |</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> [</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">number</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">number</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">] }) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Change (released):&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, detail.value);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> handleRangeInput</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">detail</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { </span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> number</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> |</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> [</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">number</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">number</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">] }) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  priceRange.value </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> detail.value </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">as</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> [</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">number</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">number</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">];</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> handleRangeChange</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">detail</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { </span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> number</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> |</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> [</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">number</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">number</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">] }) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Range finalized:&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, detail.value);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">};</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><details class="details custom-block"><summary>React</summary><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { useState } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;react&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { ReactSlider } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/slider/react&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> function</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> Example</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">() </span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> [</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">volume</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">setVolume</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">] </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> useState</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">50</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> [</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">priceRange</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">setPriceRange</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">] </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> useState</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">([</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">200</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">800</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  return</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">      {</span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* Event handler with onInput */</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactSlider</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        label</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Volume&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">volume</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        onInput</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">          setVolume</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(e.detail.value </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">as</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> number</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Input (dragging):&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, e.detail.value);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        }</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        onChange</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Change (released):&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, e.detail.value);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        }</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">      {</span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* Dual range with events */</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactSlider</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        label</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Price Range&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        dual</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">priceRange</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        onInput</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">          setPriceRange</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(e.detail.value </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">as</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> [</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">number</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">number</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">]);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        }</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        onChange</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Range finalized:&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, e.detail.value);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        }</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">      {</span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* With focus/blur handlers */</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactSlider</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        label</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Brightness&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">75</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        onFocus</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">() </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Slider focused&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">)</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        onBlur</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">() </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Slider blurred&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">)</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        onInput</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Value:&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, e.detail.value)</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Current volume: </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">{</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">volume</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        Price range: $</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">{</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">priceRange[</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">]</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> - $</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">{</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">priceRange[</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">1</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">]</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  );</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div></details><details class="details custom-block"><summary>Lit (Web Components)</summary><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;module&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  import</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/slider&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">  // Pattern 1: addEventListener (DOM events)</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> slider1</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> document.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">querySelector</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;#slider1&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  slider1.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">addEventListener</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;input&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Input event (dragging):&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, e.detail.value);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  });</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  slider1.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">addEventListener</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;change&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Change event (released):&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, e.detail.value);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">  // Pattern 2: Callback props</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> slider2</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> document.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">querySelector</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;#slider2&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  slider2.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">onInput</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Input callback:&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, e.detail.value);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  };</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  slider2.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">onChange</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Change callback:&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, e.detail.value);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">  // Pattern 3: Both patterns work (dual-dispatch)</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> slider3</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> document.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">querySelector</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;#slider3&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  slider3.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">addEventListener</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;input&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;DOM event:&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, e.detail.value);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  });</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  slider3.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">onInput</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Callback also fired:&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, e.detail.value);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">  // Focus and blur events</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> slider4</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> document.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">querySelector</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;#slider4&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  slider4.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">addEventListener</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;focus&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Slider focused&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  });</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  slider4.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">addEventListener</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;blur&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Slider blurred&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  });</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-slider</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    id</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;slider1&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;addEventListener pattern&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;50&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-slider</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-slider</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> id</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;slider2&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Callback prop pattern&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;50&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-slider</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-slider</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    id</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;slider3&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Dual-dispatch (both patterns)&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;50&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-slider</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-slider</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    id</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;slider4&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;With focus/blur handlers&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;50&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-slider</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><p><strong>Type:</strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> type</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> SliderInputEvent</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> CustomEvent</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;{</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">  value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> number</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> |</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> [</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">number</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">number</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">];</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}&gt;;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> type</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> SliderChangeEvent</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> CustomEvent</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;{</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">  value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> number</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> |</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> [</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">number</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">number</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">];</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}&gt;;</span></span></code></pre></div><h2 id="css-shadow-parts" tabindex="-1">CSS Shadow Parts <a class="header-anchor" href="#css-shadow-parts" aria-label="Permalink to &quot;CSS Shadow Parts&quot;">​</a></h2><p>Shadow Parts allow you to style internal elements of the slider from outside the shadow DOM using the <code>::part()</code> CSS selector.</p><table class="ag-table ag-table--striped"><thead><tr><th>Part</th><th>Description</th></tr></thead><tbody><tr><td><code>ag-slider-container</code></td><td>The outer container wrapper</td></tr><tr><td><code>ag-slider-label</code></td><td>The label element</td></tr><tr><td><code>ag-slider-track</code></td><td>The slider track background</td></tr><tr><td><code>ag-slider-progress</code></td><td>The progress/fill indicator</td></tr><tr><td><code>ag-slider-thumb</code></td><td>The draggable thumb element</td></tr><tr><td><code>ag-slider-ticks</code></td><td>Container for tick marks (when showTicks is true)</td></tr><tr><td><code>ag-slider-tick</code></td><td>Individual tick mark</td></tr><tr><td><code>ag-slider-tooltip</code></td><td>Tooltip showing current value (when showTooltip is true)</td></tr><tr><td><code>ag-slider-help-text</code></td><td>Help text element</td></tr><tr><td><code>ag-slider-error</code></td><td>Error message element</td></tr></tbody></table><h3 id="customization-examples" tabindex="-1">Customization Examples <a class="header-anchor" href="#customization-examples" aria-label="Permalink to &quot;Customization Examples&quot;">​</a></h3><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* Customize track height and color */</span></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-slider</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-slider-track</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  height</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">8</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  background</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">var</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">--ag-background-tertiary</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  border-radius</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">var</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">--ag-radius-full</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* Customize progress/fill color */</span></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-slider</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-slider-progress</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  background</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">linear-gradient</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">90</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">deg</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">var</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">--ag-green-500</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">), </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">var</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">--ag-blue-500</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">));</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* Customize thumb appearance */</span></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-slider</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-slider-thumb</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  width</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">24</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  height</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">24</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  border</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">4</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> solid</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> var</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">--ag-primary</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  box-shadow</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> 2</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> 8</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> rgba</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0.3</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* Style the label */</span></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-slider</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-slider-label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  font-weight</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">700</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  color</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">var</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">--ag-primary</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  font-size</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">1.1</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">rem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* Customize tooltip */</span></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-slider</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-slider-tooltip</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  background</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">var</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">--ag-primary</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  color</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">var</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">--ag-white</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  padding</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0.5</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">rem</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> 0.75</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">rem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  border-radius</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">var</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">--ag-radius-md</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  font-weight</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">600</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div><h2 id="accessibility" tabindex="-1">Accessibility <a class="header-anchor" href="#accessibility" aria-label="Permalink to &quot;Accessibility&quot;">​</a></h2><ul><li>Slider uses native <code>&lt;input type=&quot;range&quot;&gt;</code> for proper keyboard navigation</li><li>Full keyboard support: <ul><li>Arrow keys: Increment/decrement by step</li><li>Page Up/Down: Larger increments</li><li>Home/End: Jump to min/max</li><li>Tab: Navigate between thumbs in dual mode</li></ul></li><li>Proper <code>aria-valuenow</code>, <code>aria-valuemin</code>, <code>aria-valuemax</code> attributes</li><li>Live region announcements when value changes (for screen readers)</li><li>Focus visible with customizable focus ring using design tokens</li><li>Disabled state prevents interaction and is communicated to assistive technologies</li></ul><h2 id="dark-mode-support" tabindex="-1">Dark Mode Support <a class="header-anchor" href="#dark-mode-support" aria-label="Permalink to &quot;Dark Mode Support&quot;">​</a></h2><p>All variants automatically support dark mode through CSS design tokens:</p><ul><li><strong>Default</strong>: Uses <code>--ag-primary</code> which adapts to dark mode</li><li><strong>Monochrome</strong>: Uses <code>--ag-text-primary</code> for progress and borders <ul><li>Light mode: Dark gray/black appearance</li><li>Dark mode: Light gray/white appearance</li></ul></li><li><strong>Monochrome + Filled</strong>: Thumb background adapts using <code>--ag-text-primary</code><ul><li>Light mode: Dark filled thumb</li><li>Dark mode: Light filled thumb for visibility</li></ul></li><li>Thumb always uses <code>--ag-white</code> background to ensure visibility in both modes</li></ul><h2 id="notes" tabindex="-1">Notes <a class="header-anchor" href="#notes" aria-label="Permalink to &quot;Notes&quot;">​</a></h2><ul><li><strong>Dual Range</strong>: When <code>dual={true}</code>, value must be a tuple <code>[min, max]</code></li><li><strong>Form Integration</strong>: Sliders work with standard HTML forms via ElementInternals API</li><li><strong>Step Snapping</strong>: Values automatically snap to nearest step increment</li><li><strong>Vertical Mode</strong>: Set <code>vertical={true}</code> for vertical orientation (useful for volume controls)</li><li><strong>Ticks</strong>: Configure <code>showTicks={true}</code> and <code>tickStep</code> for visual markers</li><li><strong>Tooltip</strong>: Set <code>showTooltip={true}</code> to show current value while dragging</li><li><strong>Lit</strong>: Properties can be set via attributes or property binding (e.g., <code>.value=\${50}</code>)</li><li>All three implementations (Lit, React, Vue) share the same underlying styles and behavior</li></ul>`,28))]))}});export{Ks as __pageData,Qs as default};
