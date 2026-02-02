import{A as es}from"./chunks/AlphaWarning.yC7ZufpQ.js";import{i as ts,z as d,a as K,E as B,x as v}from"./chunks/Button.DkmThuAs.js";import{n as E}from"./chunks/state-CovhUvdr.CfYrM0Q-.js";import{f as z}from"./chunks/query-BykXNUlT.Pm7lu9c1.js";import{a as ls,i as ns,u as os,t as Y}from"./chunks/form-control-utils.oxcP5Ntc.js";import"./chunks/CloseButton.otVweCM4.js";import"./chunks/Checkbox.CSvC_l4n.js";import"./chunks/Tag.D_RPK5Ut.js";import{d as J,p as g,c as I,o as R,r as hs,j as e,G as r,k,t as w,e as ps,a as A,_ as ds,ae as rs,w as G}from"./chunks/framework.NAAYCHZu.js";import{F as ks}from"./chunks/FrameworkExample.Z9eaTrCu.js";import"./chunks/createLucideIcon.B61Wqv9x.js";import"./chunks/sdk.m.DhOmSlC9.js";import"./chunks/Icon.BC5ob6Nk.js";var cs=Object.defineProperty,Fs=Object.getOwnPropertyDescriptor,h=(c,s,i,t)=>{for(var l=t>1?void 0:t?Fs(s,i):s,u=c.length-1,m;u>=0;u--)(m=c[u])&&(l=(t?m(s,i,l):m(l))||l);return t&&l&&cs(s,i,l),l};const Q=class extends K{constructor(){super(),this._value="",this.labelPosition="top",this._open=!1,this._searchTerm="",this._filteredOptions=[],this._activeIndex=-1,this._selectedOptions=[],this._displayLabel="",this._comboboxId="",this._listboxId="",this._labelId="",this._helpTextId="",this._errorTextId="",this._justSelected=!1,this._isDefaultValueInitialized=!1,this.options=[],this.placeholder="",this.labelHidden=!1,this.noLabel=!1,this.ariaLabel=null,this.id="",this.autocomplete="list",this.filterMode="startsWith",this.clearable=!1,this.disabled=!1,this.readonly=!1,this.required=!1,this.invalid=!1,this.size="default",this.variant="default",this.maxVisibleOptions=10,this.closeOnSelect=!0,this.multiple=!1,this.maxOptionsVisible=3,this.loading=!1,this.loadingText="Loading...",this.noResultsText="No results found"}get value(){return this._value}set value(s){const i=this._value;this.multiple?this._value=Array.isArray(s)?s:s?s.split(" "):[]:this._value=Array.isArray(s)?s.join(" "):s,this.requestUpdate("value",i)}connectedCallback(){super.connectedCallback();const s=ns("combobox");this._comboboxId=this.id||s.inputId,this._listboxId=`${this._comboboxId}-listbox`,this._labelId=s.labelId,this._helpTextId=s.helperId,this._errorTextId=s.errorId,this._clickOutsideHandler=i=>{this._open&&(i.composedPath().includes(this)||this.close())},document.addEventListener("click",this._clickOutsideHandler)}disconnectedCallback(){super.disconnectedCallback(),this._clickOutsideHandler&&document.removeEventListener("click",this._clickOutsideHandler)}willUpdate(s){if(super.willUpdate(s),!this._isDefaultValueInitialized&&this.defaultValue&&this.options.length>0){const i=Array.isArray(this.defaultValue)?this.defaultValue:[this.defaultValue];this._selectedOptions=this.options.filter(t=>i.includes(t.value)),this._selectionChanged(),this._isDefaultValueInitialized=!0;return}if(s.has("value")&&(this._isDefaultValueInitialized||!this.defaultValue)){const i=this.value,t=Array.isArray(i)?i:i?[i]:[];this._selectedOptions=this.options.filter(l=>t.includes(l.value)),this._selectionChanged()}s.has("errorMessage")&&(this.invalid=!!this.errorMessage)}focus(){var s;(s=this._inputElement)==null||s.focus()}blur(){var s;(s=this._inputElement)==null||s.blur()}open(){var i,t;if(this.disabled||this.readonly||this._open)return;this._open=!0,this._filterOptions(),this.setAttribute("open","");const s=new CustomEvent("open",{detail:{open:!0},bubbles:!0,composed:!0});this.dispatchEvent(s),(i=this.onOpen)==null||i.call(this,s),(t=this._inputElement)==null||t.setAttribute("aria-expanded","true")}close(){var i,t,l;if(!this._open)return;if(this._open=!1,this._activeIndex=-1,this.multiple)this._searchTerm=this._displayLabel;else if(!this.options.some(u=>u.label===this._searchTerm)){const u=this._selectedOptions[0];u?this._searchTerm=u.label:this._searchTerm=""}this.removeAttribute("open");const s=new CustomEvent("close",{detail:{open:!1},bubbles:!0,composed:!0});this.dispatchEvent(s),(i=this.onClose)==null||i.call(this,s),(t=this._inputElement)==null||t.setAttribute("aria-expanded","false"),(l=this._inputElement)==null||l.removeAttribute("aria-activedescendant")}toggle(){this._open?this.close():this.open()}selectOption(s){var u,m,y;let i;if(typeof s=="string"){if(i=this.options.find(C=>C.value===s),!i)return}else i=s;if(i.disabled)return;this.multiple?(this._selectedOptions.findIndex(C=>C.value===i.value)>-1?this._selectedOptions=this._selectedOptions.filter(C=>C.value!==i.value):this._selectedOptions=[...this._selectedOptions,i],this._selectionChanged()):(this._selectedOptions=[i],this._selectionChanged(),this.closeOnSelect&&this.close()),this._inputElement&&(this._inputElement.value=this._searchTerm);const t=new CustomEvent("select",{detail:{option:i,value:i.value},bubbles:!0,composed:!0});this.dispatchEvent(t),(u=this.onSelect)==null||u.call(this,t);const l=new CustomEvent("change",{detail:{value:this.value,option:i},bubbles:!0,composed:!0});this.dispatchEvent(l),(m=this.onChange)==null||m.call(this,l),this._justSelected=!0,(y=this._inputElement)==null||y.focus(),requestAnimationFrame(()=>{const C=this._inputElement;if(C){const x=C.value.length;C.setSelectionRange(x,x)}}),setTimeout(()=>{this._justSelected=!1},100)}clearSelection(){var i;this._selectedOptions=[],this._selectionChanged(),this._activeIndex=-1;const s=new CustomEvent("change",{detail:{value:this.value,option:null},bubbles:!0,composed:!0});this.dispatchEvent(s),(i=this.onChange)==null||i.call(this,s)}_selectionChanged(){if(this.multiple)this.value=this._selectedOptions.map(s=>s.value),this._searchTerm="";else{const s=this._selectedOptions[0];this.value=(s==null?void 0:s.value)??"",this._displayLabel=(s==null?void 0:s.label)??"",this._searchTerm=this._displayLabel}}_renderSelectedTags(){if(!this.multiple||this._selectedOptions.length===0)return B;const s=this._selectedOptions.slice(0,this.maxOptionsVisible),i=this._selectedOptions.length-this.maxOptionsVisible;return v`
      <div class="combobox-tags-wrapper" part="ag-combobox-tags-wrapper">
        ${s.map(t=>v`
          <ag-tag
            removable
            .value=${t.value}
            @tag-remove=${()=>this._handleTagRemove(t)}
          >
            ${t.label}
          </ag-tag>
        `)}
        ${i>0?v`
          <ag-tag>+${i}</ag-tag>
        `:B}
      </div>
    `}_handleTagRemove(s){var i;this._selectedOptions=this._selectedOptions.filter(t=>t.value!==s.value),this._selectionChanged(),(i=this._inputElement)==null||i.focus()}_filterOptions(){var l;const s=this._searchTerm.trim();if(!this.multiple&&this._selectedOptions.length>0&&s===this._selectedOptions[0].label){this._filteredOptions=this.options.slice(0,this.maxVisibleOptions),this._activeIndex!==-1&&(this._activeIndex=this.options.findIndex(u=>{var m;return u.value===((m=this._selectedOptions[0])==null?void 0:m.value)}));return}if(!s||this.filterMode==="none"){this._filteredOptions=this.options.slice(0,this.maxVisibleOptions);return}let i;switch(this.filterMode){case"startsWith":i=this._filterStartsWith(this.options,s);break;case"contains":i=this._filterContains(this.options,s);break;default:i=this.options}this._filteredOptions=i.slice(0,this.maxVisibleOptions),this._filteredOptions.length>0?(this._activeIndex=0,this._updateAriaActivedescendant(),this._announceOption(this._filteredOptions[0])):(this._activeIndex=-1,this._announceNoResults());const t=new CustomEvent("search",{detail:{searchTerm:s},bubbles:!0,composed:!0});this.dispatchEvent(t),(l=this.onSearch)==null||l.call(this,t)}_filterStartsWith(s,i){const t=i.toLowerCase();return s.filter(l=>l.label.toLowerCase().startsWith(t))}_filterContains(s,i){const t=i.toLowerCase();return s.filter(l=>l.label.toLowerCase().includes(t))}_handleInputChange(s){const i=s.target.value;this._justSelected||i!==this._searchTerm&&(this._searchTerm=i,this.multiple||(this._selectedOptions=[],this.value=""),this._open||this.open(),this._filterOptions())}_handleInputKeyDown(s){var i;switch(s.key){case"ArrowDown":s.preventDefault(),this._open?this._updateActiveIndex(1):(this.open(),this._filteredOptions.length>0&&(this._activeIndex=0,this._updateAriaActivedescendant(),this._scrollOptionIntoView(this._activeIndex),this._announceOption(this._filteredOptions[this._activeIndex])));break;case"ArrowUp":s.preventDefault(),this._open?this._updateActiveIndex(-1):(this.open(),this._filteredOptions.length>0&&(this._activeIndex=this._filteredOptions.length-1,this._updateAriaActivedescendant(),this._scrollOptionIntoView(this._activeIndex),this._announceOption(this._filteredOptions[this._activeIndex])));break;case"Enter":s.preventDefault(),this._open&&this._activeIndex>=0&&this._activeIndex<this._filteredOptions.length&&this.selectOption(this._filteredOptions[this._activeIndex]);break;case"Escape":s.preventDefault(),this._open?this.close():this._searchTerm&&this.clearSelection();break;case"Backspace":if(this.multiple&&this._searchTerm===""&&this._selectedOptions.length>0){s.preventDefault();const t=this._selectedOptions[this._selectedOptions.length-1];this._selectedOptions=this._selectedOptions.slice(0,-1),this._selectionChanged();const l=new CustomEvent("change",{detail:{value:this.value,option:t},bubbles:!0,composed:!0});this.dispatchEvent(l),(i=this.onChange)==null||i.call(this,l)}break;case"Tab":this._open&&this.close();break;case"Home":s.preventDefault(),this._inputElement&&this._inputElement.setSelectionRange(0,0),this._open&&this._filteredOptions.length>0&&(this._activeIndex=0,this._updateAriaActivedescendant(),this._scrollOptionIntoView(this._activeIndex),this._announceOption(this._filteredOptions[this._activeIndex]));break;case"End":if(s.preventDefault(),this._inputElement){const t=this._inputElement.value.length;this._inputElement.setSelectionRange(t,t)}this._open&&this._filteredOptions.length>0&&(this._activeIndex=this._filteredOptions.length-1,this._updateAriaActivedescendant(),this._scrollOptionIntoView(this._activeIndex),this._announceOption(this._filteredOptions[this._activeIndex]));break}}_handleInputFocus(s){var i,t;if(this._justSelected){(i=this.onFocus)==null||i.call(this,s);return}!this._open&&!this.disabled&&!this.readonly&&this.open(),(t=this.onFocus)==null||t.call(this,s)}_handleInputBlur(s){var i;(i=this.onBlur)==null||i.call(this,s)}_handleInputClick(){this._open||(this._activeIndex=-1,this.open())}_handleOptionClick(s,i){i.preventDefault(),s.disabled||this.selectOption(s)}_handleToggleClick(s){var i;s.preventDefault(),this.toggle(),(i=this._inputElement)==null||i.focus()}_handleClearClick(s){var i;s.preventDefault(),s.stopPropagation(),this.clearSelection(),(i=this._inputElement)==null||i.focus()}_updateActiveIndex(s){if(this._filteredOptions.length===0)return;let i=this._activeIndex+s,t=0;const l=this._filteredOptions.length;for(;t<l&&(i<0?i=this._filteredOptions.length-1:i>=this._filteredOptions.length&&(i=0),!!this._filteredOptions[i].disabled);)i+=s,t++;t<l&&!this._filteredOptions[i].disabled&&(this._activeIndex=i,this._updateAriaActivedescendant(),this._scrollOptionIntoView(i),this._announceOption(this._filteredOptions[i]))}_updateAriaActivedescendant(){var s,i;if(this._activeIndex>=0&&this._activeIndex<this._filteredOptions.length){const t=this._getOptionId(this._activeIndex);(s=this._inputElement)==null||s.setAttribute("aria-activedescendant",t)}else(i=this._inputElement)==null||i.removeAttribute("aria-activedescendant")}_scrollOptionIntoView(s){s<0||s>=this._filteredOptions.length||requestAnimationFrame(()=>{var l;const i=this._getOptionId(s),t=(l=this.shadowRoot)==null?void 0:l.getElementById(i);if(t&&this._listboxElement){const u=this._listboxElement.getBoundingClientRect(),m=t.getBoundingClientRect();m.bottom>u.bottom?t.scrollIntoView({block:"nearest",behavior:"smooth"}):m.top<u.top&&t.scrollIntoView({block:"nearest",behavior:"smooth"})}})}_announceOption(s){const i=this._filteredOptions.indexOf(s),t=this._filteredOptions.length,l=`${s.label}, ${i+1} of ${t}`;this._srAnnouncer&&(this._srAnnouncer.textContent=l)}_announceNoResults(){this._srAnnouncer&&(this._srAnnouncer.textContent=this.noResultsText)}_getOptionId(s){return`${this._listboxId}-option-${s}`}_getDescribedBy(){return os({helperId:this._helpTextId,errorId:this._errorTextId,hasHelper:!!this.helpText&&!this.invalid,hasError:!!this.invalid&&!!this.errorMessage})}renderLabel(){if(!this.label||this.noLabel)return"";const s=[];return Y(this.labelPosition)?(s.push("ag-form-control__label--horizontal"),s.push(`ag-form-control__label--${this.labelPosition}`)):this.labelPosition==="bottom"&&s.push(`ag-form-control__label--${this.labelPosition}`),v`
      <label
        id=${this._labelId}
        for=${this._comboboxId}
        class="ag-form-control__label ${this.labelHidden?"ag-form-control__label--hidden":""} ${this.required?"ag-form-control__label--required":""} ${s.join(" ")}"
        part="ag-combobox-label"
      >
        ${this.label}
      </label>
    `}render(){const s=!this.noLabel&&this.label,i=this._getDescribedBy(),t=Y(this.labelPosition),l=v`

        <div
          class="combobox-input-wrapper"
          part="ag-combobox-input-wrapper"
          @click=${()=>{var y;return(y=this._inputElement)==null?void 0:y.focus()}}
        >
          ${this.multiple?this._renderSelectedTags():B}
          <input
            id=${this._comboboxId}
            class="combobox-input"
            part="ag-combobox-input"
            type="text"
            role="combobox"
            aria-autocomplete=${this.autocomplete}
            aria-controls=${this._listboxId}
            aria-expanded=${this._open?"true":"false"}
            aria-haspopup="listbox"
            aria-disabled=${this.disabled?"true":B}
            aria-labelledby=${s?this._labelId:B}
            aria-label=${this.ariaLabel||B}
            aria-describedby=${i||B}
            aria-invalid=${this.invalid?"true":"false"}
            aria-required=${this.required?"true":"false"}
            .value=${this._searchTerm}
            placeholder=${this._selectedOptions.length>0&&!this.multiple?"":this.placeholder}
            ?disabled=${this.disabled}
            ?readonly=${this.readonly}
            @input=${this._handleInputChange}
            @keydown=${this._handleInputKeyDown}
            @focus=${this._handleInputFocus}
            @blur=${this._handleInputBlur}
            @click=${this._handleInputClick}
          />

          ${this.clearable&&this._selectedOptions.length>0?v`
            <div
              class="combobox-clear-wrapper"
              part="ag-combobox-clear-wrapper"
            >
              <ag-close-button
                size="sm"
                @close-button-click=${this._handleClearClick}
              ></ag-close-button>
            </div>
          `:B}

          <button
            type="button"
            class="ag-combobox__toggle combobox-toggle-button"
            part="ag-combobox-toggle-button"
            aria-label="Toggle dropdown"
            tabindex="-1"
            ?disabled=${this.disabled}
            @click=${this._handleToggleClick}
          >
            <svg
              class="combobox-toggle-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
        </div>

        <div
          id=${this._listboxId}
          class="combobox-listbox"
          part="ag-combobox-listbox"
          role="listbox"
          aria-label=${this.label?`${this.label} suggestions`:"Suggestions"}
          ?hidden=${!this._open}
        >
          ${this.loading?v`
            <div class="ag-combobox__loading combobox-loading" part="ag-combobox-loading">
              ${this.loadingText}
            </div>
          `:this._filteredOptions.length===0?v`
            <div class="ag-combobox__no-results combobox-no-results" part="ag-combobox-no-results">
              ${this.noResultsText}
            </div>
          `:v`
            ${this._filteredOptions.map((y,C)=>v`
              <div
                id=${this._getOptionId(C)}
                class="combobox-option ${C===this._activeIndex?"option-active":""}"
                part="ag-combobox-option"
                role="option"
                aria-selected=${this._selectedOptions.some(x=>x.value===y.value)?"true":"false"}
                aria-disabled=${y.disabled?"true":"false"}
                @click=${x=>this._handleOptionClick(y,x)}
              >
                ${this.multiple?v`
                  <ag-checkbox
                    .checked=${this._selectedOptions.some(x=>x.value===y.value)}
                    .size=${this.size==="default"?"medium":this.size}
                    .value=${y.value}
                    .name=${this._comboboxId}
                    .disabled=${y.disabled}
                    @change=${x=>{x.stopPropagation(),this._handleOptionClick(y,x)}}
                  >
                    ${y.label}
                  </ag-checkbox>
                `:v`
                  ${y.label}
                `}
              </div>
            `)}
          `}
        </div>

        <div
          class="combobox-sr-announcer"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        ></div>
    `,u=this.helpText&&!this.invalid?v`<div id=${this._helpTextId} class="ag-form-control__helper">
          ${this.helpText}
        </div>`:"",m=this.invalid&&this.errorMessage?v`<div id=${this._errorTextId} class="ag-form-control__error">
          ${this.errorMessage}
        </div>`:"";return t?v`
        <div class="ag-form-control--horizontal">
          ${this.renderLabel()}
          <div class="combobox-wrapper" part="ag-combobox-wrapper">
            ${l}
          </div>
        </div>
        ${u}
        ${m}
      `:this.labelPosition==="bottom"?v`
        <div class="combobox-wrapper" part="ag-combobox-wrapper">
          ${l}
        </div>
        ${u}
        ${m}
        ${this.renderLabel()}
      `:v`
      ${this.renderLabel()}
      <div class="combobox-wrapper" part="ag-combobox-wrapper">
        ${l}
      </div>
      ${u}
      ${m}
    `}};Q.styles=[ls,ts`
    :host {
      display: block;
      position: relative;
      --combobox-min-width: 200px;
      --combobox-max-width: 100%;
      --combobox-listbox-max-height: 300px;
      --combobox-option-padding: var(--ag-space-3) var(--ag-space-4);
      --combobox-option-selected-bg: var(--ag-blue-100);
      --combobox-option-hover-bg: var(--ag-background-tertiary);
      --combobox-option-focus-bg: var(--ag-blue-50);
      --combobox-toggle-size: var(--ag-space-6);
    }

    .combobox-wrapper {
      display: flex;
      flex-direction: column;
      gap: var(--ag-space-2);
    }
    /* Input wrapper */
    .combobox-input-wrapper {
      position: relative;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: var(--ag-space-1);
      padding: var(--ag-space-3) var(--ag-space-4);
      padding-inline-end: calc(var(--combobox-toggle-size) * 2 + var(--ag-space-2) * 3);
      font-size: var(--ag-font-size-base);
      font-family: var(--ag-font-family-base);
      line-height: var(--ag-line-height-base);
      color: var(--ag-text-primary);
      background-color: var(--ag-background-primary);
      border: var(--ag-border-width-1) solid var(--ag-border);
      border-radius: var(--ag-radius-md);
      transition: border-color var(--ag-motion-fast) ease-in-out;
      cursor: text;
    }

    .combobox-input-wrapper:focus-within {
      border-color: var(--ag-primary);
      box-shadow: 0 0 0 var(--ag-focus-ring-width) var(--ag-focus-ring-color);
    }

    /* Input */
    .combobox-input {
      flex: 1;
      min-inline-size: 50px; /* Ensure input has a minimum width to be usable */
      font-size: var(--ag-font-size-base);
      font-family: var(--ag-font-family-base);
      line-height: var(--ag-line-height-base);
      color: var(--ag-text-primary);
      background-color: transparent;
      border: none;
      outline: none;
      padding: 0;
    }

    .combobox-input::placeholder {
      color: var(--ag-text-secondary);
    }

    .combobox-input:disabled {
      cursor: not-allowed;
    }

    .combobox-input-wrapper:has(.combobox-input:disabled) {
      background-color: var(--ag-background-disabled);
      cursor: not-allowed;
    }

    /* Invalid state */
    :host([invalid]) .combobox-input-wrapper {
      border-color: var(--ag-danger);
    }

    :host([invalid]) .combobox-input-wrapper:focus-within {
      box-shadow: 0 0 0 var(--ag-focus-ring-width) var(--ag-danger-light);
    }

    /* Toggle button */
    .combobox-toggle-button {
      position: absolute;
      inset-inline-end: var(--ag-space-2);
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--combobox-toggle-size);
      height: var(--combobox-toggle-size);
      padding: 0;
      background: transparent;
      border: none;
      border-radius: var(--ag-radius-sm);
      cursor: pointer;
      color: var(--ag-text-secondary);
      transition: background-color var(--ag-motion-fast) ease-in-out;
    }

    .combobox-toggle-button:hover:not(:disabled) {
      background-color: var(--ag-background-tertiary);
      color: var(--ag-text-primary);
    }

    .combobox-toggle-button:focus {
      outline: var(--ag-focus-ring-width) solid var(--ag-focus-ring-color);
      outline-offset: var(--ag-focus-ring-offset);
    }

    .combobox-toggle-button:disabled {
      opacity: var(--ag-opacity-disabled);
      cursor: not-allowed;
    }

    .combobox-clear-wrapper {
      position: absolute;
      inset-inline-end: calc(var(--ag-space-2) * 2 + var(--combobox-toggle-size));
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      align-items: center;
      justify-content: center;
      /* The close button itself has padding, so we might not need width/height here */
    }

    /* This wrapper is no longer needed for positioning, but can be kept for semantics if we want */
    .combobox-tags-wrapper {
      display: contents; /* This makes the wrapper have no effect on layout */
    }

    .combobox-tags-wrapper ag-tag {
      pointer-events: auto; /* Re-enable clicks for tags */
    }

    .combobox-toggle-icon {
      width: var(--ag-space-4);
      height: var(--ag-space-4);
      transition: transform var(--ag-motion-fast) ease-in-out;
    }

    :host([open]) .combobox-toggle-icon {
      transform: rotate(180deg);
    }

    /* Listbox */
    .combobox-listbox {
      position: absolute;
      top: calc(100% + var(--ag-space-1));
      inset-inline: 0;
      max-block-size: var(--combobox-listbox-max-height);
      overflow-y: auto;
      background-color: var(--ag-background-primary);
      border: var(--ag-border-width-1) solid var(--ag-border);
      border-radius: var(--ag-radius-md);
      box-shadow: var(--ag-shadow-lg);
      z-index: var(--ag-z-index-dropdown);
      opacity: 0;
      transform: translateY(-8px);
      transition:
        opacity var(--ag-motion-fast) ease-in-out,
        transform var(--ag-motion-fast) ease-in-out;
      pointer-events: none;
    }

    :host([open]) .combobox-listbox {
      opacity: 1;
      transform: translateY(0);
      pointer-events: auto;
    }

    /* Option */
    .combobox-option {
      padding: var(--combobox-option-padding);
      cursor: pointer;
      color: var(--ag-text-primary);
      transition: background-color var(--ag-motion-fast) ease-in-out;
      position: relative;
    }

    /* Checkmark for selected option in single-select mode - drawn with ::after */
    .combobox-option[aria-selected="true"]::after {
      content: '';
      position: absolute;
      inset-inline-end: var(--ag-space-6);
      top: 50%;
      display: block;
      opacity: 1;
      transform: rotate(40deg) translateY(-50%);
      transform-origin: center center;
      transition: all var(--ag-motion-fast) ease-in-out;
    }

    /* Hide checkmark in multi-select mode since we use checkboxes */
    :host([multiple]) .combobox-option[aria-selected="true"]::after {
      display: none;
    }

    .combobox-option:hover:not([aria-disabled="true"]):not([aria-selected="true"]),
    .combobox-option.option-active:not([aria-disabled="true"]):not([aria-selected="true"]) {
      background-color: var(--combobox-option-hover-bg);
      color: var(--ag-text-primary);
    }

    .combobox-option[aria-selected="true"] {
      background-color: var(--ag-primary);
      color: var(--ag-white);
    }

    .combobox-option[aria-selected="true"]:hover,
    .combobox-option.option-active[aria-selected="true"] {
      background-color: var(--ag-primary-dark);
    }

    /* For multi-select, we want the checkbox to be visible even when the option is selected */
    .combobox-option[aria-selected="true"] ag-checkbox {
      color: var(--ag-white);
    }

    :host([variant="monochrome"]) .combobox-option[aria-selected="true"] {
      background-color: var(--ag-background-primary-inverted);
      color: var(--ag-text-primary-inverted);
    }

    /* hover/active + selected gets --ag-background-secondary-inverted affordance */
    :host([variant="monochrome"]) .combobox-option[aria-selected="true"]:hover,
    :host([variant="monochrome"]) .combobox-option.option-active[aria-selected="true"] {
      background-color: var(--ag-background-secondary-inverted);
    }

    :host([variant="monochrome"]) .combobox-option[aria-selected="true"] ag-checkbox {
      color: var(--ag-white);
      color: var(--ag-text-primary-inverted);
    }

    /* Checkmark color for monochrome variant */
    :host([variant="monochrome"]) .combobox-option[aria-selected="true"]::after {
      border-inline-end-color: var(--ag-text-primary-inverted);
      border-bottom-color: var(--ag-text-primary-inverted);
    }

    .combobox-option[aria-disabled="true"] {
      background-color: var(--ag-background-disabled);
      cursor: not-allowed;
      color: var(--ag-text-secondary);
    }

    /* Loading & Empty states */
    .combobox-loading,
    .combobox-no-results {
      padding: var(--ag-space-4);
      text-align: center;
      color: var(--ag-text-secondary);
      font-size: var(--ag-font-size-sm);
    }

    /* Screen reader only announcer */
    .combobox-sr-announcer {
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

    /* Size variants */
    :host([size="small"]) .combobox-input-wrapper {
      padding: var(--ag-space-2) var(--ag-space-3);
      padding-inline-end: calc(var(--combobox-toggle-size) * 2 + var(--ag-space-2) * 3);
    }

    :host([size="small"]) .combobox-input {
      font-size: var(--ag-font-size-sm);
    }

    :host([size="small"]) {
      --combobox-option-padding: var(--ag-space-2) var(--ag-space-3);
      --combobox-toggle-size: var(--ag-space-5);
    }

    /* Checkmark size for small */
    :host([size="small"]) .combobox-option[aria-selected="true"]::after {
      width: 4px;
      height: 8px;
      border-inline-end: var(--ag-border-width-2) solid var(--ag-white);
      border-bottom: var(--ag-border-width-2) solid var(--ag-white);
    }

    /* Default/medium checkmark size */
    .combobox-option[aria-selected="true"]::after {
      width: 4px;
      height: 9px;
      border-inline-end: var(--ag-border-width-2) solid var(--ag-white);
      border-bottom: var(--ag-border-width-2) solid var(--ag-white);
    }

    :host([size="large"]) .combobox-input-wrapper {
      padding: var(--ag-space-4) var(--ag-space-5);
      padding-inline-end: calc(var(--combobox-toggle-size) * 2 + var(--ag-space-2) * 3);
    }

    :host([size="large"]) .combobox-input {
      font-size: var(--ag-font-size-lg);
    }

    :host([size="large"]) {
      --combobox-option-padding: var(--ag-space-4) var(--ag-space-5);
      --combobox-toggle-size: var(--ag-space-7);
    }

    /* Checkmark size for large */
    :host([size="large"]) .combobox-option[aria-selected="true"]::after {
      width: 5px;
      height: 10px;
      border-inline-end: var(--ag-border-width-2) solid var(--ag-white);
      border-bottom: var(--ag-border-width-2) solid var(--ag-white);
    }

    /* Reduced Motion */
    @media (prefers-reduced-motion: reduce) {
      .combobox-input,
      .combobox-toggle-button,
      .combobox-toggle-icon,
      .combobox-option,
      .combobox-option::after,
      .combobox-listbox {
        transition: none !important;
        animation: none !important;
      }
    }

    /* High Contrast Mode */
    @media (forced-colors: active) {
      .combobox-option[aria-selected="true"] {
        outline: 2px solid CanvasText;
        outline-offset: -2px;
      }

      .combobox-option:hover {
        outline: 2px solid Highlight;
      }

      .combobox-toggle-button {
        border: 1px solid ButtonText;
      }
    }
  `];let o=Q;h([d({type:Array})],o.prototype,"options",2);h([d({type:[String,Array]})],o.prototype,"value",1);h([d({type:[String,Array],attribute:"default-value"})],o.prototype,"defaultValue",2);h([d({type:String})],o.prototype,"placeholder",2);h([d({type:String})],o.prototype,"label",2);h([d({type:String,attribute:"label-position"})],o.prototype,"labelPosition",2);h([d({type:Boolean,attribute:"label-hidden"})],o.prototype,"labelHidden",2);h([d({type:Boolean,attribute:"no-label"})],o.prototype,"noLabel",2);h([d({type:String,attribute:"aria-label"})],o.prototype,"ariaLabel",2);h([d({type:String,attribute:"help-text"})],o.prototype,"helpText",2);h([d({type:String,attribute:"error-message"})],o.prototype,"errorMessage",2);h([d({type:String})],o.prototype,"id",2);h([d({type:String})],o.prototype,"autocomplete",2);h([d({type:String,attribute:"filter-mode"})],o.prototype,"filterMode",2);h([d({type:Boolean})],o.prototype,"clearable",2);h([d({type:Boolean,reflect:!0})],o.prototype,"disabled",2);h([d({type:Boolean})],o.prototype,"readonly",2);h([d({type:Boolean})],o.prototype,"required",2);h([d({type:Boolean,reflect:!0})],o.prototype,"invalid",2);h([d({type:String,reflect:!0})],o.prototype,"size",2);h([d({type:String,reflect:!0})],o.prototype,"variant",2);h([d({type:Number,attribute:"max-visible-options"})],o.prototype,"maxVisibleOptions",2);h([d({type:Boolean})],o.prototype,"closeOnSelect",2);h([d({type:Boolean})],o.prototype,"multiple",2);h([d({type:Number,attribute:"max-options-visible"})],o.prototype,"maxOptionsVisible",2);h([d({type:Boolean})],o.prototype,"loading",2);h([d({type:String,attribute:"loading-text"})],o.prototype,"loadingText",2);h([d({type:String,attribute:"no-results-text"})],o.prototype,"noResultsText",2);h([d({attribute:!1})],o.prototype,"onChange",2);h([d({attribute:!1})],o.prototype,"onSelect",2);h([d({attribute:!1})],o.prototype,"onSearch",2);h([d({attribute:!1})],o.prototype,"onOpen",2);h([d({attribute:!1})],o.prototype,"onClose",2);h([d({attribute:!1})],o.prototype,"onFocus",2);h([d({attribute:!1})],o.prototype,"onBlur",2);h([E()],o.prototype,"_open",2);h([E()],o.prototype,"_searchTerm",2);h([E()],o.prototype,"_filteredOptions",2);h([E()],o.prototype,"_activeIndex",2);h([E()],o.prototype,"_selectedOptions",2);h([E()],o.prototype,"_displayLabel",2);h([z(".combobox-input")],o.prototype,"_inputElement",2);h([z(".combobox-listbox")],o.prototype,"_listboxElement",2);h([z(".combobox-sr-announcer")],o.prototype,"_srAnnouncer",2);customElements.get("ag-combobox")||customElements.define("ag-combobox",o);const bs=[".labelHidden",".labelPosition",".noLabel",".disabled",".invalid",".clearable",".readonly",".required",".loading",".multiple",".closeOnSelect",".options",".value",".defaultValue",".maxOptionsVisible","placeholder","label","ariaLabel","helpText","errorMessage","autocomplete","filterMode","size","variant","loadingText","noResultsText"],F=J({__name:"VueCombobox",props:{options:{default:()=>[]},value:{default:void 0},defaultValue:{default:void 0},placeholder:{default:""},label:{default:""},labelPosition:{default:"top"},labelHidden:{type:Boolean,default:!1},noLabel:{type:Boolean,default:!1},ariaLabel:{default:null},helpText:{default:""},errorMessage:{default:""},id:{},autocomplete:{default:"list"},filterMode:{default:"startsWith"},clearable:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},invalid:{type:Boolean,default:!1},size:{default:"default"},maxVisibleOptions:{},closeOnSelect:{type:Boolean,default:!0},variant:{default:"default"},multiple:{type:Boolean,default:!1},maxOptionsVisible:{default:3},loading:{type:Boolean,default:!1},loadingText:{default:"Loading..."},noResultsText:{default:"No results found"}},emits:["change","select","search","open","close","focus","blur","update:value"],setup(c,{expose:s,emit:i}){const t=i,l=g(),u=n=>{const b=n;t("change",b.detail),t("update:value",b.detail.value)},m=n=>{t("select",n.detail)},y=n=>{t("search",n.detail)},C=n=>{t("open",n.detail)},x=n=>{t("close",n.detail)},_=n=>{t("focus",n)},O=n=>{t("blur",n)};return s({focus:()=>{var n,b;return(b=(n=l.value)==null?void 0:n.focus)==null?void 0:b.call(n)},blur:()=>{var n,b;return(b=(n=l.value)==null?void 0:n.blur)==null?void 0:b.call(n)},open:()=>{var n,b;return(b=(n=l.value)==null?void 0:n.open)==null?void 0:b.call(n)},close:()=>{var n,b;return(b=(n=l.value)==null?void 0:n.close)==null?void 0:b.call(n)},toggle:()=>{var n,b;return(b=(n=l.value)==null?void 0:n.toggle)==null?void 0:b.call(n)},selectOption:n=>{var b,S;return(S=(b=l.value)==null?void 0:b.selectOption)==null?void 0:S.call(b,n)},clearSelection:()=>{var n,b;return(b=(n=l.value)==null?void 0:n.clearSelection)==null?void 0:b.call(n)}}),(n,b)=>(R(),I("ag-combobox",{ref_key:"comboboxRef",ref:l,".labelHidden":c.labelHidden,".labelPosition":c.labelPosition,".noLabel":c.noLabel,".disabled":c.disabled,".invalid":c.invalid,".clearable":c.clearable,".readonly":c.readonly,".required":c.required,".loading":c.loading,".multiple":c.multiple,".closeOnSelect":c.closeOnSelect,".options":c.options,".value":c.value,".defaultValue":c.defaultValue,".maxOptionsVisible":c.maxOptionsVisible,placeholder:c.placeholder,label:c.label,ariaLabel:c.ariaLabel,helpText:c.helpText,errorMessage:c.errorMessage,autocomplete:c.autocomplete,filterMode:c.filterMode,size:c.size,variant:c.variant,loadingText:c.loadingText,noResultsText:c.noResultsText,onChange:u,onSelect:m,onSearch:y,onOpen:C,onClose:x,onFocus:_,onBlur:O},[hs(n.$slots,"default")],40,bs))}}),gs={class:"stacked mbe4"},us={class:"text-sm text-secondary"},ms={class:"stacked mbe4"},ys={class:"stacked mbe4"},vs={class:"stacked mbe4"},Cs={class:"text-sm text-secondary"},xs={class:"stacked mbe4"},fs={class:"stacked mbe4"},Bs={class:"stacked mbe4"},Ds={class:"stacked mbe4"},As={class:"stacked mbe4"},Es={class:"stacked mbe4"},Ss={class:"stacked mbe4"},qs={class:"stacked mbe4"},ws={class:"text-sm text-secondary"},_s={class:"stacked mbe4"},Os={class:"stacked mbe4"},Ts={class:"stacked mbe4"},Ls={class:"stacked mbe4"},Vs={class:"stacked mbe4"},Is={class:"flex-inline items-center",style:{gap:"10px"}},Rs={key:0},zs={class:"mbe4",style:{"max-width":"600px"}},Ms={class:"mbe3"},Ns={class:"mbe3"},$s={class:"mbe3"},Ps={class:"mbe3"},Ws={class:"mbe4",style:{"max-width":"600px"}},Hs={class:"mbe3"},Us={class:"mbe3"},js={class:"mbe3"},Ys={class:"mbe3"},Gs=J({__name:"ComboboxExamples",setup(c){const s=[{value:"al",label:"Alabama"},{value:"ak",label:"Alaska"},{value:"az",label:"Arizona"},{value:"ar",label:"Arkansas"},{value:"ca",label:"California"},{value:"co",label:"Colorado"},{value:"ct",label:"Connecticut"},{value:"de",label:"Delaware"},{value:"fl",label:"Florida"},{value:"ga",label:"Georgia"}],i=[{value:"ca",label:"California"},{value:"co",label:"Colorado",disabled:!0},{value:"ct",label:"Connecticut"},{value:"fl",label:"Florida",disabled:!0},{value:"ny",label:"New York"}],t=g(""),l=g(""),u=g(""),m=g(""),y=g(""),C=g(""),x=g("ca"),_=g("ca"),O=g("co"),n=g(""),b=g(""),S=g(""),M=g(""),T=g([]),D=g(!1),N=g(""),$=g(""),P=g(""),W=g(""),L=g([]),H=g(["ny","co"]),U=g([]),j=g(""),q=g(null),V=g(null),X=f=>{V.value=f.value;const a=f.option?f.option.label:"cleared";q.value=`change (value: ${f.value||"none"}, option: ${a})`},Z=f=>{V.value=f.value,q.value=`select (value: ${f.value}, label: ${f.option.label})`},ss=f=>{const a=V.value?`, selected: ${V.value}`:"";q.value=`search (searchTerm: "${f.searchTerm}"${a})`},is=f=>{console.log("State changed:",f)},as=()=>{D.value=!D.value,D.value?(T.value=[],setTimeout(()=>{T.value=s,D.value=!1},2e3)):T.value=s};return(f,a)=>(R(),I("section",null,[a[22]||(a[22]=e("div",{class:"mbe4"},[e("h2",null,"Basic Combobox")],-1)),e("div",gs,[r(k(F),{value:t.value,"onUpdate:value":a[0]||(a[0]=p=>t.value=p),options:s,label:"Select State",placeholder:"Choose a state...",class:"mbe2",onChange:is},null,8,["value"]),e("p",us,"Selected: "+w(t.value||"None"),1)]),a[23]||(a[23]=e("div",{class:"mbe4"},[e("h2",null,"Sizes")],-1)),e("div",ms,[r(k(F),{value:l.value,"onUpdate:value":a[1]||(a[1]=p=>l.value=p),options:s,label:"Small Combobox",size:"small",placeholder:"Small size",class:"mbe2"},null,8,["value"]),r(k(F),{value:u.value,"onUpdate:value":a[2]||(a[2]=p=>u.value=p),options:s,label:"Default Combobox",size:"default",placeholder:"Default size",class:"mbe2"},null,8,["value"]),r(k(F),{value:m.value,"onUpdate:value":a[3]||(a[3]=p=>m.value=p),options:s,label:"Large Combobox",size:"large",placeholder:"Large size",class:"mbe2"},null,8,["value"])]),a[24]||(a[24]=e("div",{class:"mbe4"},[e("h2",null,"Filter Modes")],-1)),e("div",ys,[r(k(F),{value:y.value,"onUpdate:value":a[4]||(a[4]=p=>y.value=p),options:s,label:"Starts With Filter","filter-mode":"startsWith",placeholder:"Type to filter...","help-text":"Try typing 'Ca' to see California",class:"mbe2"},null,8,["value"]),r(k(F),{value:C.value,"onUpdate:value":a[5]||(a[5]=p=>C.value=p),options:s,label:"Contains Filter","filter-mode":"contains",placeholder:"Type to search...","help-text":"Try typing 'or' to see multiple matches",class:"mbe2"},null,8,["value"])]),a[25]||(a[25]=e("div",{class:"mbe4"},[e("h2",null,"Clearable")],-1)),e("div",vs,[r(k(F),{value:x.value,"onUpdate:value":a[6]||(a[6]=p=>x.value=p),options:s,label:"Clearable Combobox",clearable:!0,placeholder:"Select and clear...","help-text":"Clear button appears when a value is selected",class:"mbe2"},null,8,["value"]),e("p",Cs,"Selected: "+w(x.value||"None"),1)]),a[26]||(a[26]=e("div",{class:"mbe4"},[e("h2",null,"States")],-1)),e("div",xs,[r(k(F),{value:_.value,"onUpdate:value":a[7]||(a[7]=p=>_.value=p),options:s,label:"Disabled Combobox",disabled:!0,placeholder:"This is disabled",class:"mbe2"},null,8,["value"]),r(k(F),{value:O.value,"onUpdate:value":a[8]||(a[8]=p=>O.value=p),options:s,label:"Readonly Combobox",readonly:!0,placeholder:"This is readonly",class:"mbe2"},null,8,["value"]),r(k(F),{value:n.value,"onUpdate:value":a[9]||(a[9]=p=>n.value=p),options:s,label:"Required Combobox",required:!0,placeholder:"This is required","help-text":"This field is required",class:"mbe2"},null,8,["value"]),r(k(F),{value:b.value,"onUpdate:value":a[10]||(a[10]=p=>b.value=p),options:s,label:"Invalid Combobox",invalid:!0,"error-message":"Please select a valid state",placeholder:"This has an error",class:"mbe2"},null,8,["value"])]),a[27]||(a[27]=e("div",{class:"mbe4"},[e("h2",null,"With Help Text")],-1)),e("div",fs,[r(k(F),{value:S.value,"onUpdate:value":a[11]||(a[11]=p=>S.value=p),options:s,label:"State of Residence",placeholder:"Select your state...","help-text":"Choose the state where you currently reside",class:"mbe2"},null,8,["value"])]),a[28]||(a[28]=e("div",{class:"mbe4"},[e("h2",null,"Loading State")],-1)),e("div",Bs,[r(k(F),{value:M.value,"onUpdate:value":a[12]||(a[12]=p=>M.value=p),options:T.value,label:"Loading Combobox",loading:D.value,"loading-text":"Fetching states...",placeholder:"Loading...",class:"mbe2"},null,8,["value","options","loading"]),e("button",{onClick:as,class:"btn btn-primary"},w(D.value?"Stop Loading":"Start Loading"),1)]),a[29]||(a[29]=e("div",{class:"mbe4"},[e("h2",null,"With Disabled Options")],-1)),e("div",Ds,[r(k(F),{value:N.value,"onUpdate:value":a[13]||(a[13]=p=>N.value=p),options:i,label:"Select State",placeholder:"Some options are disabled...","help-text":"Colorado and Florida are disabled",class:"mbe2"},null,8,["value"])]),a[30]||(a[30]=e("div",{class:"mbe4"},[e("h2",null,"Custom No Results Text")],-1)),e("div",As,[r(k(F),{value:$.value,"onUpdate:value":a[14]||(a[14]=p=>$.value=p),options:s,label:"Search States",placeholder:"Type to search...","no-results-text":"No states match your search","help-text":"Try typing 'xyz' to see custom no results message",class:"mbe2"},null,8,["value"])]),a[31]||(a[31]=e("div",{class:"mbe4"},[e("h2",null,"Hidden Label")],-1)),e("div",Es,[r(k(F),{value:P.value,"onUpdate:value":a[15]||(a[15]=p=>P.value=p),options:s,label:"State (Hidden)","label-hidden":!0,placeholder:"Label is visually hidden but accessible","help-text":"The label is hidden visually but still accessible to screen readers",class:"mbe2"},null,8,["value"])]),a[32]||(a[32]=e("div",{class:"mbe4"},[e("h2",null,"Monochrome Variant (Single Select)")],-1)),e("div",Ss,[r(k(F),{value:W.value,"onUpdate:value":a[16]||(a[16]=p=>W.value=p),options:s,label:"Select State",variant:"monochrome",placeholder:"Choose a state...","help-text":"Monochrome variant with inverted colors for selected items",class:"mbe2"},null,8,["value"])]),a[33]||(a[33]=e("div",{class:"mbe4"},[e("h2",null,"Multiple Select")],-1)),e("div",qs,[r(k(F),{value:L.value,"onUpdate:value":a[17]||(a[17]=p=>L.value=p),options:s,label:"Select States",multiple:!0,"close-on-select":!1,placeholder:"Choose one or more states...","help-text":"Select multiple states with checkboxes",class:"mbe2"},null,8,["value"]),e("p",ws,"Selected: "+w(Array.isArray(L.value)?L.value.join(", "):"None"),1)]),a[34]||(a[34]=e("div",{class:"mbe4"},[e("h2",null,"Multiple with Defaults")],-1)),e("div",_s,[r(k(F),{options:s,label:"Pre-selected States",multiple:!0,"close-on-select":!1,"default-value":["ca","fl"],"help-text":"California and Florida are pre-selected",class:"mbe2"})]),a[35]||(a[35]=e("div",{class:"mbe4"},[e("h2",null,"Multiple Clearable")],-1)),e("div",Os,[r(k(F),{value:H.value,"onUpdate:value":a[18]||(a[18]=p=>H.value=p),options:s,label:"Select States",multiple:!0,clearable:!0,"close-on-select":!1,placeholder:"Select and clear multiple...","help-text":"Clear button removes all selections",class:"mbe2"},null,8,["value"])]),a[36]||(a[36]=e("div",{class:"mbe4"},[e("h2",null,"Multiple with Max Visible Tags")],-1)),e("div",Ts,[r(k(F),{options:s,label:"Select States",multiple:!0,"close-on-select":!1,"default-value":["al","ak","az","ar","ca"],"max-options-visible":2,"help-text":"Shows only 2 tags, with a +3 summary",class:"mbe2"})]),a[37]||(a[37]=e("div",{class:"mbe4"},[e("h2",null,"Multiple Monochrome")],-1)),e("div",Ls,[r(k(F),{value:U.value,"onUpdate:value":a[19]||(a[19]=p=>U.value=p),options:s,label:"Select States",multiple:!0,variant:"monochrome","close-on-select":!1,placeholder:"Choose one or more states...","help-text":"Multiple select with monochrome variant",class:"mbe2"},null,8,["value"])]),a[38]||(a[38]=e("div",{class:"mbe4"},[e("h2",null,"Event Handling")],-1)),e("div",Vs,[e("div",Is,[r(k(F),{value:j.value,"onUpdate:value":a[20]||(a[20]=p=>j.value=p),options:s,label:"Event Test",placeholder:"Type or select...",onChange:X,onSelect:Z,onSearch:ss,class:"mbe2"},null,8,["value"]),q.value?(R(),I("p",Rs,[a[21]||(a[21]=A(" Last event: ",-1)),e("strong",null,w(q.value),1)])):ps("",!0)])]),a[39]||(a[39]=e("div",{class:"mbe4"},[e("h2",null,"External Label Support"),e("p",{class:"mbs2 mbe3"}," The Combobox component supports external labels with helper text, required fields, and validation states. ")],-1)),e("div",zs,[e("div",Ms,[r(k(F),{options:s,label:"Favorite State",name:"favorite",placeholder:"Choose a state..."})]),e("div",Ns,[r(k(F),{options:s,label:"Home State","help-text":"Select the state where you currently reside",name:"home",placeholder:"Choose your home state..."})]),e("div",$s,[r(k(F),{options:s,label:"Required State",required:!0,"help-text":"This field is required",name:"required",placeholder:"Choose a state..."})]),e("div",Ps,[r(k(F),{options:s,label:"State Selection",required:!0,invalid:!0,"error-message":"Please select a valid state to continue",name:"validation",placeholder:"Choose a state..."})])]),a[40]||(a[40]=e("div",{class:"mbe4"},[e("h2",null,"Label Positioning"),e("p",{class:"mbs2 mbe3"},[A(" Control label position with "),e("code",null,"label-position"),A(": 'top' (default), 'start', 'end', or 'bottom'. "),e("strong",null,"Note:"),A(" 'bottom' is not recommended as the dropdown will cover the label when opened. ")])],-1)),e("div",Ws,[e("div",Hs,[r(k(F),{options:s,label:"Top Label (Default)","label-position":"top",name:"pos-top",placeholder:"Choose a state..."})]),e("div",Us,[r(k(F),{options:s,label:"Start Position","label-position":"start",name:"pos-start",placeholder:"Choose a state..."})]),e("div",js,[r(k(F),{options:s,label:"End Position","label-position":"end",name:"pos-end",placeholder:"Choose a state..."})]),e("div",Ys,[r(k(F),{options:s,label:"Bottom Position (Not Recommended)","label-position":"bottom",name:"pos-bottom","help-text":"The dropdown will cover this label when opened",placeholder:"Choose a state..."})])])]))}}),Ks=ds(Gs,[["__scopeId","data-v-489d8b36"]]);class Js extends K{createRenderRoot(){return this}constructor(){super(),this.stateOptions=[{value:"al",label:"Alabama"},{value:"ak",label:"Alaska"},{value:"az",label:"Arizona"},{value:"ar",label:"Arkansas"},{value:"ca",label:"California"},{value:"co",label:"Colorado"},{value:"ct",label:"Connecticut"},{value:"de",label:"Delaware"},{value:"fl",label:"Florida"},{value:"ga",label:"Georgia"}],this.optionsWithDisabled=[{value:"ca",label:"California"},{value:"co",label:"Colorado",disabled:!0},{value:"ct",label:"Connecticut"},{value:"fl",label:"Florida",disabled:!0},{value:"ny",label:"New York"}],this.selectedState="",this.isLoading=!1,this.lastEvent=null}firstUpdated(){this.querySelectorAll("ag-combobox").forEach(i=>{const t=i.id;t==="disabled-options"?i.options=this.optionsWithDisabled:i.options=this.stateOptions,i.addEventListener("change",l=>{t==="basic-combobox"&&(this.selectedState=l.detail.value,this.requestUpdate())})})}toggleLoading(){this.isLoading=!this.isLoading;const s=this.querySelector("#loading-combobox");s&&(this.isLoading?(s.options=[],setTimeout(()=>{s.options=this.stateOptions,this.isLoading=!1,this.requestUpdate()},2e3)):s.options=this.stateOptions),this.requestUpdate()}render(){return v`
      <section>
        <!-- Basic Combobox -->
        <div class="mbe4">
          <h2>Basic Combobox</h2>
        </div>
        <div class="stacked mbe4">
          <ag-combobox
            id="basic-combobox"
            label="Select State"
            placeholder="Choose a state..."
            class="mbe2"
          ></ag-combobox>
          <p class="text-sm text-secondary">Selected: ${this.selectedState||"None"}</p>
        </div>

        <!-- Sizes -->
        <div class="mbe4">
          <h2>Sizes</h2>
        </div>
        <div class="stacked mbe4">
          <ag-combobox
            label="Small Combobox"
            size="small"
            placeholder="Small size"
            class="mbe2"
          ></ag-combobox>
          <ag-combobox
            label="Default Combobox"
            size="default"
            placeholder="Default size"
            class="mbe2"
          ></ag-combobox>
          <ag-combobox
            label="Large Combobox"
            size="large"
            placeholder="Large size"
            class="mbe2"
          ></ag-combobox>
        </div>

        <!-- Filter Modes -->
        <div class="mbe4">
          <h2>Filter Modes</h2>
        </div>
        <div class="stacked mbe4">
          <ag-combobox
            label="Starts With Filter"
            filter-mode="startsWith"
            placeholder="Type to filter..."
            help-text="Try typing 'Ca' to see California"
            class="mbe2"
          ></ag-combobox>
          <ag-combobox
            label="Contains Filter"
            filter-mode="contains"
            placeholder="Type to search..."
            help-text="Try typing 'or' to see multiple matches"
            class="mbe2"
          ></ag-combobox>
        </div>

        <!-- Clearable -->
        <div class="mbe4">
          <h2>Clearable</h2>
        </div>
        <div class="stacked mbe4">
          <ag-combobox
            label="Clearable Combobox"
            clearable
            placeholder="Select and clear..."
            help-text="Clear button appears when a value is selected"
            value="ca"
            class="mbe2"
          ></ag-combobox>
        </div>

        <!-- States -->
        <div class="mbe4">
          <h2>States</h2>
        </div>
        <div class="stacked mbe4">
          <ag-combobox
            label="Disabled Combobox"
            disabled
            placeholder="This is disabled"
            value="ca"
            class="mbe2"
          ></ag-combobox>
          <ag-combobox
            label="Readonly Combobox"
            readonly
            placeholder="This is readonly"
            value="co"
            class="mbe2"
          ></ag-combobox>
          <ag-combobox
            label="Required Combobox"
            required
            placeholder="This is required"
            help-text="This field is required"
            class="mbe2"
          ></ag-combobox>
          <ag-combobox
            label="Invalid Combobox"
            invalid
            error-message="Please select a valid state"
            placeholder="This has an error"
            class="mbe2"
          ></ag-combobox>
        </div>

        <!-- With Help Text -->
        <div class="mbe4">
          <h2>With Help Text</h2>
        </div>
        <div class="stacked mbe4">
          <ag-combobox
            label="State of Residence"
            placeholder="Select your state..."
            help-text="Choose the state where you currently reside"
            class="mbe2"
          ></ag-combobox>
        </div>

        <!-- Loading State -->
        <div class="mbe4">
          <h2>Loading State</h2>
        </div>
        <div class="stacked mbe4">
          <ag-combobox
            id="loading-combobox"
            label="Loading Combobox"
            ?loading=${this.isLoading}
            loading-text="Fetching states..."
            placeholder="Loading..."
            class="mbe2"
          ></ag-combobox>
          <button
            @click=${this.toggleLoading}
            class="btn btn-primary"
          >
            ${this.isLoading?"Stop Loading":"Start Loading"}
          </button>
        </div>

        <!-- With Disabled Options -->
        <div class="mbe4">
          <h2>With Disabled Options</h2>
        </div>
        <div class="stacked mbe4">
          <ag-combobox
            id="disabled-options"
            label="Select State"
            placeholder="Some options are disabled..."
            help-text="Colorado and Florida are disabled"
            class="mbe2"
          ></ag-combobox>
        </div>

        <!-- Custom No Results Text -->
        <div class="mbe4">
          <h2>Custom No Results Text</h2>
        </div>
        <div class="stacked mbe4">
          <ag-combobox
            label="Search States"
            placeholder="Type to search..."
            no-results-text="No states match your search"
            help-text="Try typing 'xyz' to see custom no results message"
            class="mbe2"
          ></ag-combobox>
        </div>

        <!-- Hidden Label -->
        <div class="mbe4">
          <h2>Hidden Label</h2>
        </div>
        <div class="stacked mbe4">
          <ag-combobox
            label="State (Hidden)"
            label-hidden
            placeholder="Label is visually hidden but accessible"
            help-text="The label is hidden visually but still accessible to screen readers"
            class="mbe2"
          ></ag-combobox>
        </div>

        <!-- Monochrome Variant -->
        <div class="mbe4">
          <h2>Monochrome Variant (Single Select)</h2>
        </div>
        <div class="stacked mbe4">
          <ag-combobox
            label="Select State"
            variant="monochrome"
            placeholder="Choose a state..."
            help-text="Monochrome variant with inverted colors for selected items"
            class="mbe2"
          ></ag-combobox>
        </div>

        <!-- Multiple Select -->
        <div class="mbe4">
          <h2>Multiple Select</h2>
        </div>
        <div class="stacked mbe4">
          <ag-combobox
            label="Select States"
            multiple
            placeholder="Choose one or more states..."
            help-text="Select multiple states with checkboxes"
            class="mbe2"
          ></ag-combobox>
        </div>

        <!-- Multiple with Defaults -->
        <div class="mbe4">
          <h2>Multiple with Defaults</h2>
        </div>
        <div class="stacked mbe4">
          <ag-combobox
            label="Pre-selected States"
            multiple
            default-value='["ca", "fl"]'
            help-text="California and Florida are pre-selected"
            class="mbe2"
          ></ag-combobox>
        </div>

        <!-- Multiple Clearable -->
        <div class="mbe4">
          <h2>Multiple Clearable</h2>
        </div>
        <div class="stacked mbe4">
          <ag-combobox
            label="Select States"
            multiple
            clearable
            placeholder="Select and clear multiple..."
            help-text="Clear button removes all selections"
            default-value='["ny", "co"]'
            class="mbe2"
          ></ag-combobox>
        </div>

        <!-- Multiple with Max Visible Tags -->
        <div class="mbe4">
          <h2>Multiple with Max Visible Tags</h2>
        </div>
        <div class="stacked mbe4">
          <ag-combobox
            label="Select States"
            multiple
            default-value='["al", "ak", "az", "ar", "ca"]'
            max-options-visible="2"
            help-text="Shows only 2 tags, with a +3 summary"
            class="mbe2"
          ></ag-combobox>
        </div>

        <!-- Multiple Monochrome -->
        <div class="mbe4">
          <h2>Multiple Monochrome</h2>
        </div>
        <div class="stacked mbe4">
          <ag-combobox
            label="Select States"
            multiple
            variant="monochrome"
            placeholder="Choose one or more states..."
            help-text="Multiple select with monochrome variant"
            class="mbe2"
          ></ag-combobox>
        </div>

        <!-- External Label Support -->
        <div class="mbe4">
          <h2>External Label Support</h2>
          <p class="mbs2 mbe3">
            The Combobox component supports external labels with helper text, required fields, and validation states.
          </p>
        </div>
        <div class="mbe4" style="max-width: 600px;">
          <div class="mbe3">
            <ag-combobox
              label="Favorite State"
              name="favorite"
              placeholder="Choose a state..."
            ></ag-combobox>
          </div>

          <div class="mbe3">
            <ag-combobox
              label="Home State"
              help-text="Select the state where you currently reside"
              name="home"
              placeholder="Choose your home state..."
            ></ag-combobox>
          </div>

          <div class="mbe3">
            <ag-combobox
              label="Required State"
              required
              help-text="This field is required"
              name="required"
              placeholder="Choose a state..."
            ></ag-combobox>
          </div>

          <div class="mbe3">
            <ag-combobox
              label="State Selection"
              required
              invalid
              error-message="Please select a valid state to continue"
              name="validation"
              placeholder="Choose a state..."
            ></ag-combobox>
          </div>
        </div>

        <!-- Label Positioning -->
        <div class="mbe4">
          <h2>Label Positioning</h2>
          <p class="mbs2 mbe3">
            Control label position with <code>label-position</code>: 'top' (default), 'start', 'end', or 'bottom'.
            <strong>Note:</strong> 'bottom' is not recommended as the dropdown will cover the label when opened.
          </p>
        </div>
        <div class="mbe4" style="max-width: 600px;">
          <div class="mbe3">
            <ag-combobox
              label="Top Label (Default)"
              label-position="top"
              name="pos-top"
              placeholder="Choose a state..."
            ></ag-combobox>
          </div>

          <div class="mbe3">
            <ag-combobox
              label="Start Position"
              label-position="start"
              name="pos-start"
              placeholder="Choose a state..."
            ></ag-combobox>
          </div>

          <div class="mbe3">
            <ag-combobox
              label="End Position"
              label-position="end"
              name="pos-end"
              placeholder="Choose a state..."
            ></ag-combobox>
          </div>

          <div class="mbe3">
            <ag-combobox
              label="Bottom Position (Not Recommended)"
              label-position="bottom"
              name="pos-bottom"
              help-text="The dropdown will cover this label when opened"
              placeholder="Choose a state..."
            ></ag-combobox>
          </div>
        </div>
      </section>
    `}}customElements.define("combobox-lit-examples",Js);const Qs=`<template>
  <section>
    <div class="mbe4">
      <h2>Basic Combobox</h2>
    </div>
    <div class="stacked mbe4">
      <VueCombobox
        v-model:value="selectedState"
        :options="stateOptions"
        label="Select State"
        placeholder="Choose a state..."
        class="mbe2"
        @change="handleStateChange"
      />
      <p class="text-sm text-secondary">Selected: {{ selectedState || 'None' }}</p>
    </div>

    <div class="mbe4">
      <h2>Sizes</h2>
    </div>
    <div class="stacked mbe4">
      <VueCombobox
        v-model:value="sizeSmall"
        :options="stateOptions"
        label="Small Combobox"
        size="small"
        placeholder="Small size"
        class="mbe2"
      />
      <VueCombobox
        v-model:value="sizeDefault"
        :options="stateOptions"
        label="Default Combobox"
        size="default"
        placeholder="Default size"
        class="mbe2"
      />
      <VueCombobox
        v-model:value="sizeLarge"
        :options="stateOptions"
        label="Large Combobox"
        size="large"
        placeholder="Large size"
        class="mbe2"
      />
    </div>

    <div class="mbe4">
      <h2>Filter Modes</h2>
    </div>
    <div class="stacked mbe4">
      <VueCombobox
        v-model:value="filterStartsWith"
        :options="stateOptions"
        label="Starts With Filter"
        filter-mode="startsWith"
        placeholder="Type to filter..."
        help-text="Try typing 'Ca' to see California"
        class="mbe2"
      />
      <VueCombobox
        v-model:value="filterContains"
        :options="stateOptions"
        label="Contains Filter"
        filter-mode="contains"
        placeholder="Type to search..."
        help-text="Try typing 'or' to see multiple matches"
        class="mbe2"
      />
    </div>

    <div class="mbe4">
      <h2>Clearable</h2>
    </div>
    <div class="stacked mbe4">
      <VueCombobox
        v-model:value="clearableValue"
        :options="stateOptions"
        label="Clearable Combobox"
        :clearable="true"
        placeholder="Select and clear..."
        help-text="Clear button appears when a value is selected"
        class="mbe2"
      />
      <p class="text-sm text-secondary">Selected: {{ clearableValue || 'None' }}</p>
    </div>

    <div class="mbe4">
      <h2>States</h2>
    </div>
    <div class="stacked mbe4">
      <VueCombobox
        v-model:value="stateDisabled"
        :options="stateOptions"
        label="Disabled Combobox"
        :disabled="true"
        placeholder="This is disabled"
        class="mbe2"
      />
      <VueCombobox
        v-model:value="stateReadonly"
        :options="stateOptions"
        label="Readonly Combobox"
        :readonly="true"
        placeholder="This is readonly"
        class="mbe2"
      />
      <VueCombobox
        v-model:value="stateRequired"
        :options="stateOptions"
        label="Required Combobox"
        :required="true"
        placeholder="This is required"
        help-text="This field is required"
        class="mbe2"
      />
      <VueCombobox
        v-model:value="stateInvalid"
        :options="stateOptions"
        label="Invalid Combobox"
        :invalid="true"
        error-message="Please select a valid state"
        placeholder="This has an error"
        class="mbe2"
      />
    </div>

    <div class="mbe4">
      <h2>With Help Text</h2>
    </div>
    <div class="stacked mbe4">
      <VueCombobox
        v-model:value="helpTextValue"
        :options="stateOptions"
        label="State of Residence"
        placeholder="Select your state..."
        help-text="Choose the state where you currently reside"
        class="mbe2"
      />
    </div>

    <div class="mbe4">
      <h2>Loading State</h2>
    </div>
    <div class="stacked mbe4">
      <VueCombobox
        v-model:value="loadingValue"
        :options="loadingOptions"
        label="Loading Combobox"
        :loading="isLoading"
        loading-text="Fetching states..."
        placeholder="Loading..."
        class="mbe2"
      />
      <button
        @click="toggleLoading"
        class="btn btn-primary"
      >
        {{ isLoading ? 'Stop Loading' : 'Start Loading' }}
      </button>
    </div>

    <div class="mbe4">
      <h2>With Disabled Options</h2>
    </div>
    <div class="stacked mbe4">
      <VueCombobox
        v-model:value="disabledOptionsValue"
        :options="optionsWithDisabled"
        label="Select State"
        placeholder="Some options are disabled..."
        help-text="Colorado and Florida are disabled"
        class="mbe2"
      />
    </div>

    <div class="mbe4">
      <h2>Custom No Results Text</h2>
    </div>
    <div class="stacked mbe4">
      <VueCombobox
        v-model:value="customNoResults"
        :options="stateOptions"
        label="Search States"
        placeholder="Type to search..."
        no-results-text="No states match your search"
        help-text="Try typing 'xyz' to see custom no results message"
        class="mbe2"
      />
    </div>

    <div class="mbe4">
      <h2>Hidden Label</h2>
    </div>
    <div class="stacked mbe4">
      <VueCombobox
        v-model:value="hiddenLabelValue"
        :options="stateOptions"
        label="State (Hidden)"
        :label-hidden="true"
        placeholder="Label is visually hidden but accessible"
        help-text="The label is hidden visually but still accessible to screen readers"
        class="mbe2"
      />
    </div>

    <div class="mbe4">
      <h2>Monochrome Variant (Single Select)</h2>
    </div>
    <div class="stacked mbe4">
      <VueCombobox
        v-model:value="monochromeValue"
        :options="stateOptions"
        label="Select State"
        variant="monochrome"
        placeholder="Choose a state..."
        help-text="Monochrome variant with inverted colors for selected items"
        class="mbe2"
      />
    </div>

    <div class="mbe4">
      <h2>Multiple Select</h2>
    </div>
    <div class="stacked mbe4">
      <VueCombobox
        v-model:value="multipleValue"
        :options="stateOptions"
        label="Select States"
        :multiple="true"
        :close-on-select="false"
        placeholder="Choose one or more states..."
        help-text="Select multiple states with checkboxes"
        class="mbe2"
      />
      <p class="text-sm text-secondary">Selected: {{ Array.isArray(multipleValue) ? multipleValue.join(', ') : 'None' }}</p>
    </div>

    <div class="mbe4">
      <h2>Multiple with Defaults</h2>
    </div>
    <div class="stacked mbe4">
      <VueCombobox
        :options="stateOptions"
        label="Pre-selected States"
        :multiple="true"
        :close-on-select="false"
        :default-value="['ca', 'fl']"
        help-text="California and Florida are pre-selected"
        class="mbe2"
      />
    </div>

    <div class="mbe4">
      <h2>Multiple Clearable</h2>
    </div>
    <div class="stacked mbe4">
      <VueCombobox
        v-model:value="multipleClearable"
        :options="stateOptions"
        label="Select States"
        :multiple="true"
        :clearable="true"
        :close-on-select="false"
        placeholder="Select and clear multiple..."
        help-text="Clear button removes all selections"
        class="mbe2"
      />
    </div>

    <div class="mbe4">
      <h2>Multiple with Max Visible Tags</h2>
    </div>
    <div class="stacked mbe4">
      <VueCombobox
        :options="stateOptions"
        label="Select States"
        :multiple="true"
        :close-on-select="false"
        :default-value="['al', 'ak', 'az', 'ar', 'ca']"
        :max-options-visible="2"
        help-text="Shows only 2 tags, with a +3 summary"
        class="mbe2"
      />
    </div>

    <div class="mbe4">
      <h2>Multiple Monochrome</h2>
    </div>
    <div class="stacked mbe4">
      <VueCombobox
        v-model:value="multipleMonochrome"
        :options="stateOptions"
        label="Select States"
        :multiple="true"
        variant="monochrome"
        :close-on-select="false"
        placeholder="Choose one or more states..."
        help-text="Multiple select with monochrome variant"
        class="mbe2"
      />
    </div>

    <div class="mbe4">
      <h2>Event Handling</h2>
    </div>
    <div class="stacked mbe4">
      <div
        class="flex-inline items-center"
        :style="{gap: '10px'}"
      >
        <VueCombobox
          v-model:value="eventTestValue"
          :options="stateOptions"
          label="Event Test"
          placeholder="Type or select..."
          @change="handleChange"
          @select="handleSelect"
          @search="handleSearch"
          class="mbe2"
        />
        <p v-if="lastEvent">
          Last event: <strong>{{ lastEvent }}</strong>
        </p>
      </div>
    </div>

    <div class="mbe4">
      <h2>External Label Support</h2>
      <p class="mbs2 mbe3">
        The Combobox component supports external labels with helper text, required fields, and validation states.
      </p>
    </div>
    <div
      class="mbe4"
      style="max-width: 600px;"
    >
      <div class="mbe3">
        <VueCombobox
          :options="stateOptions"
          label="Favorite State"
          name="favorite"
          placeholder="Choose a state..."
        />
      </div>

      <div class="mbe3">
        <VueCombobox
          :options="stateOptions"
          label="Home State"
          help-text="Select the state where you currently reside"
          name="home"
          placeholder="Choose your home state..."
        />
      </div>

      <div class="mbe3">
        <VueCombobox
          :options="stateOptions"
          label="Required State"
          :required="true"
          help-text="This field is required"
          name="required"
          placeholder="Choose a state..."
        />
      </div>

      <div class="mbe3">
        <VueCombobox
          :options="stateOptions"
          label="State Selection"
          :required="true"
          :invalid="true"
          error-message="Please select a valid state to continue"
          name="validation"
          placeholder="Choose a state..."
        />
      </div>
    </div>

    <div class="mbe4">
      <h2>Label Positioning</h2>
      <p class="mbs2 mbe3">
        Control label position with <code>label-position</code>: 'top' (default), 'start', 'end', or 'bottom'.
        <strong>Note:</strong> 'bottom' is not recommended as the dropdown will cover the label when opened.
      </p>
    </div>
    <div
      class="mbe4"
      style="max-width: 600px;"
    >
      <div class="mbe3">
        <VueCombobox
          :options="stateOptions"
          label="Top Label (Default)"
          label-position="top"
          name="pos-top"
          placeholder="Choose a state..."
        />
      </div>

      <div class="mbe3">
        <VueCombobox
          :options="stateOptions"
          label="Start Position"
          label-position="start"
          name="pos-start"
          placeholder="Choose a state..."
        />
      </div>

      <div class="mbe3">
        <VueCombobox
          :options="stateOptions"
          label="End Position"
          label-position="end"
          name="pos-end"
          placeholder="Choose a state..."
        />
      </div>

      <div class="mbe3">
        <VueCombobox
          :options="stateOptions"
          label="Bottom Position (Not Recommended)"
          label-position="bottom"
          name="pos-bottom"
          help-text="The dropdown will cover this label when opened"
          placeholder="Choose a state..."
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import VueCombobox from "agnosticui-core/combobox/vue";
import type { ComboboxOption } from "agnosticui-core/combobox";

// State options
const stateOptions: ComboboxOption[] = [
  { value: "al", label: "Alabama" },
  { value: "ak", label: "Alaska" },
  { value: "az", label: "Arizona" },
  { value: "ar", label: "Arkansas" },
  { value: "ca", label: "California" },
  { value: "co", label: "Colorado" },
  { value: "ct", label: "Connecticut" },
  { value: "de", label: "Delaware" },
  { value: "fl", label: "Florida" },
  { value: "ga", label: "Georgia" },
];

// Options with some disabled
const optionsWithDisabled: ComboboxOption[] = [
  { value: "ca", label: "California" },
  { value: "co", label: "Colorado", disabled: true },
  { value: "ct", label: "Connecticut" },
  { value: "fl", label: "Florida", disabled: true },
  { value: "ny", label: "New York" },
];

// Basic
const selectedState = ref("");

// Sizes
const sizeSmall = ref("");
const sizeDefault = ref("");
const sizeLarge = ref("");

// Filter modes
const filterStartsWith = ref("");
const filterContains = ref("");

// Clearable
const clearableValue = ref("ca");

// States
const stateDisabled = ref("ca");
const stateReadonly = ref("co");
const stateRequired = ref("");
const stateInvalid = ref("");

// Help text
const helpTextValue = ref("");

// Loading
const loadingValue = ref("");
const loadingOptions = ref<ComboboxOption[]>([]);
const isLoading = ref(false);

// Disabled options
const disabledOptionsValue = ref("");

// Custom no results
const customNoResults = ref("");

// Hidden label
const hiddenLabelValue = ref("");

// Monochrome
const monochromeValue = ref("");

// Multiple select
const multipleValue = ref<string[]>([]);
const multipleClearable = ref<string[]>(["ny", "co"]);
const multipleMonochrome = ref<string[]>([]);

// Event handling
const eventTestValue = ref("");
const lastEvent = ref<string | null>(null);
const lastSelectedValue = ref<string | null>(null);

const handleChange = (detail: {
  value: string;
  option: ComboboxOption | null;
}) => {
  lastSelectedValue.value = detail.value;
  const optionLabel = detail.option ? detail.option.label : "cleared";
  lastEvent.value = \`change (value: \${
    detail.value || "none"
  }, option: \${optionLabel})\`;
};

const handleSelect = (detail: { option: ComboboxOption; value: string }) => {
  lastSelectedValue.value = detail.value;
  lastEvent.value = \`select (value: \${detail.value}, label: \${detail.option.label})\`;
};

const handleSearch = (detail: { searchTerm: string }) => {
  const selectedInfo = lastSelectedValue.value
    ? \`, selected: \${lastSelectedValue.value}\`
    : "";
  lastEvent.value = \`search (searchTerm: "\${detail.searchTerm}"\${selectedInfo})\`;
};

// Basic state change handler
const handleStateChange = (detail: {
  value: string;
  option: ComboboxOption | null;
}) => {
  console.log("State changed:", detail);
};

// Toggle loading
const toggleLoading = () => {
  isLoading.value = !isLoading.value;
  if (isLoading.value) {
    loadingOptions.value = [];
    // Simulate async loading
    setTimeout(() => {
      loadingOptions.value = stateOptions;
      isLoading.value = false;
    }, 2000);
  } else {
    loadingOptions.value = stateOptions;
  }
};
<\/script>

<style scoped>
.stacked > * + * {
  margin-top: 1rem;
}

.text-sm {
  font-size: 0.875rem;
}

.text-secondary {
  color: var(--ag-text-secondary);
}

.btn {
  padding: var(--ag-space-2) var(--ag-space-4);
  border-radius: var(--ag-radius-md);
  border: none;
  cursor: pointer;
  font-size: var(--ag-font-size-base);
}

.btn-primary {
  background-color: var(--ag-primary);
  color: white;
}

.btn-primary:hover {
  opacity: 0.9;
}
</style>
`,Xs=`import { LitElement, html } from 'lit';
import 'agnosticui-core/combobox';

export class ComboboxLitExamples extends LitElement {
  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  constructor() {
    super();

    // State options
    this.stateOptions = [
      { value: 'al', label: 'Alabama' },
      { value: 'ak', label: 'Alaska' },
      { value: 'az', label: 'Arizona' },
      { value: 'ar', label: 'Arkansas' },
      { value: 'ca', label: 'California' },
      { value: 'co', label: 'Colorado' },
      { value: 'ct', label: 'Connecticut' },
      { value: 'de', label: 'Delaware' },
      { value: 'fl', label: 'Florida' },
      { value: 'ga', label: 'Georgia' },
    ];

    // Options with some disabled
    this.optionsWithDisabled = [
      { value: 'ca', label: 'California' },
      { value: 'co', label: 'Colorado', disabled: true },
      { value: 'ct', label: 'Connecticut' },
      { value: 'fl', label: 'Florida', disabled: true },
      { value: 'ny', label: 'New York' },
    ];

    // State values
    this.selectedState = '';
    this.isLoading = false;
    this.lastEvent = null;
  }

  firstUpdated() {
    // Set options on combobox elements
    const comboboxes = this.querySelectorAll('ag-combobox');
    comboboxes.forEach((combobox) => {
      const comboId = combobox.id;

      // Set appropriate options based on combobox ID
      if (comboId === 'disabled-options') {
        combobox.options = this.optionsWithDisabled;
      } else {
        combobox.options = this.stateOptions;
      }

      // Add event listeners
      combobox.addEventListener('change', (e) => {
        if (comboId === 'basic-combobox') {
          this.selectedState = e.detail.value;
          this.requestUpdate();
        }
      });
    });
  }

  toggleLoading() {
    this.isLoading = !this.isLoading;
    const loadingCombobox = this.querySelector('#loading-combobox');

    if (loadingCombobox) {
      if (this.isLoading) {
        loadingCombobox.options = [];
        setTimeout(() => {
          loadingCombobox.options = this.stateOptions;
          this.isLoading = false;
          this.requestUpdate();
        }, 2000);
      } else {
        loadingCombobox.options = this.stateOptions;
      }
    }
    this.requestUpdate();
  }

  render() {
    return html\`
      <section>
        <!-- Basic Combobox -->
        <div class="mbe4">
          <h2>Basic Combobox</h2>
        </div>
        <div class="stacked mbe4">
          <ag-combobox
            id="basic-combobox"
            label="Select State"
            placeholder="Choose a state..."
            class="mbe2"
          ></ag-combobox>
          <p class="text-sm text-secondary">Selected: \${this.selectedState || 'None'}</p>
        </div>

        <!-- Sizes -->
        <div class="mbe4">
          <h2>Sizes</h2>
        </div>
        <div class="stacked mbe4">
          <ag-combobox
            label="Small Combobox"
            size="small"
            placeholder="Small size"
            class="mbe2"
          ></ag-combobox>
          <ag-combobox
            label="Default Combobox"
            size="default"
            placeholder="Default size"
            class="mbe2"
          ></ag-combobox>
          <ag-combobox
            label="Large Combobox"
            size="large"
            placeholder="Large size"
            class="mbe2"
          ></ag-combobox>
        </div>

        <!-- Filter Modes -->
        <div class="mbe4">
          <h2>Filter Modes</h2>
        </div>
        <div class="stacked mbe4">
          <ag-combobox
            label="Starts With Filter"
            filter-mode="startsWith"
            placeholder="Type to filter..."
            help-text="Try typing 'Ca' to see California"
            class="mbe2"
          ></ag-combobox>
          <ag-combobox
            label="Contains Filter"
            filter-mode="contains"
            placeholder="Type to search..."
            help-text="Try typing 'or' to see multiple matches"
            class="mbe2"
          ></ag-combobox>
        </div>

        <!-- Clearable -->
        <div class="mbe4">
          <h2>Clearable</h2>
        </div>
        <div class="stacked mbe4">
          <ag-combobox
            label="Clearable Combobox"
            clearable
            placeholder="Select and clear..."
            help-text="Clear button appears when a value is selected"
            value="ca"
            class="mbe2"
          ></ag-combobox>
        </div>

        <!-- States -->
        <div class="mbe4">
          <h2>States</h2>
        </div>
        <div class="stacked mbe4">
          <ag-combobox
            label="Disabled Combobox"
            disabled
            placeholder="This is disabled"
            value="ca"
            class="mbe2"
          ></ag-combobox>
          <ag-combobox
            label="Readonly Combobox"
            readonly
            placeholder="This is readonly"
            value="co"
            class="mbe2"
          ></ag-combobox>
          <ag-combobox
            label="Required Combobox"
            required
            placeholder="This is required"
            help-text="This field is required"
            class="mbe2"
          ></ag-combobox>
          <ag-combobox
            label="Invalid Combobox"
            invalid
            error-message="Please select a valid state"
            placeholder="This has an error"
            class="mbe2"
          ></ag-combobox>
        </div>

        <!-- With Help Text -->
        <div class="mbe4">
          <h2>With Help Text</h2>
        </div>
        <div class="stacked mbe4">
          <ag-combobox
            label="State of Residence"
            placeholder="Select your state..."
            help-text="Choose the state where you currently reside"
            class="mbe2"
          ></ag-combobox>
        </div>

        <!-- Loading State -->
        <div class="mbe4">
          <h2>Loading State</h2>
        </div>
        <div class="stacked mbe4">
          <ag-combobox
            id="loading-combobox"
            label="Loading Combobox"
            ?loading=\${this.isLoading}
            loading-text="Fetching states..."
            placeholder="Loading..."
            class="mbe2"
          ></ag-combobox>
          <button
            @click=\${this.toggleLoading}
            class="btn btn-primary"
          >
            \${this.isLoading ? 'Stop Loading' : 'Start Loading'}
          </button>
        </div>

        <!-- With Disabled Options -->
        <div class="mbe4">
          <h2>With Disabled Options</h2>
        </div>
        <div class="stacked mbe4">
          <ag-combobox
            id="disabled-options"
            label="Select State"
            placeholder="Some options are disabled..."
            help-text="Colorado and Florida are disabled"
            class="mbe2"
          ></ag-combobox>
        </div>

        <!-- Custom No Results Text -->
        <div class="mbe4">
          <h2>Custom No Results Text</h2>
        </div>
        <div class="stacked mbe4">
          <ag-combobox
            label="Search States"
            placeholder="Type to search..."
            no-results-text="No states match your search"
            help-text="Try typing 'xyz' to see custom no results message"
            class="mbe2"
          ></ag-combobox>
        </div>

        <!-- Hidden Label -->
        <div class="mbe4">
          <h2>Hidden Label</h2>
        </div>
        <div class="stacked mbe4">
          <ag-combobox
            label="State (Hidden)"
            label-hidden
            placeholder="Label is visually hidden but accessible"
            help-text="The label is hidden visually but still accessible to screen readers"
            class="mbe2"
          ></ag-combobox>
        </div>

        <!-- Monochrome Variant -->
        <div class="mbe4">
          <h2>Monochrome Variant (Single Select)</h2>
        </div>
        <div class="stacked mbe4">
          <ag-combobox
            label="Select State"
            variant="monochrome"
            placeholder="Choose a state..."
            help-text="Monochrome variant with inverted colors for selected items"
            class="mbe2"
          ></ag-combobox>
        </div>

        <!-- Multiple Select -->
        <div class="mbe4">
          <h2>Multiple Select</h2>
        </div>
        <div class="stacked mbe4">
          <ag-combobox
            label="Select States"
            multiple
            placeholder="Choose one or more states..."
            help-text="Select multiple states with checkboxes"
            class="mbe2"
          ></ag-combobox>
        </div>

        <!-- Multiple with Defaults -->
        <div class="mbe4">
          <h2>Multiple with Defaults</h2>
        </div>
        <div class="stacked mbe4">
          <ag-combobox
            label="Pre-selected States"
            multiple
            default-value='["ca", "fl"]'
            help-text="California and Florida are pre-selected"
            class="mbe2"
          ></ag-combobox>
        </div>

        <!-- Multiple Clearable -->
        <div class="mbe4">
          <h2>Multiple Clearable</h2>
        </div>
        <div class="stacked mbe4">
          <ag-combobox
            label="Select States"
            multiple
            clearable
            placeholder="Select and clear multiple..."
            help-text="Clear button removes all selections"
            default-value='["ny", "co"]'
            class="mbe2"
          ></ag-combobox>
        </div>

        <!-- Multiple with Max Visible Tags -->
        <div class="mbe4">
          <h2>Multiple with Max Visible Tags</h2>
        </div>
        <div class="stacked mbe4">
          <ag-combobox
            label="Select States"
            multiple
            default-value='["al", "ak", "az", "ar", "ca"]'
            max-options-visible="2"
            help-text="Shows only 2 tags, with a +3 summary"
            class="mbe2"
          ></ag-combobox>
        </div>

        <!-- Multiple Monochrome -->
        <div class="mbe4">
          <h2>Multiple Monochrome</h2>
        </div>
        <div class="stacked mbe4">
          <ag-combobox
            label="Select States"
            multiple
            variant="monochrome"
            placeholder="Choose one or more states..."
            help-text="Multiple select with monochrome variant"
            class="mbe2"
          ></ag-combobox>
        </div>

        <!-- External Label Support -->
        <div class="mbe4">
          <h2>External Label Support</h2>
          <p class="mbs2 mbe3">
            The Combobox component supports external labels with helper text, required fields, and validation states.
          </p>
        </div>
        <div class="mbe4" style="max-width: 600px;">
          <div class="mbe3">
            <ag-combobox
              label="Favorite State"
              name="favorite"
              placeholder="Choose a state..."
            ></ag-combobox>
          </div>

          <div class="mbe3">
            <ag-combobox
              label="Home State"
              help-text="Select the state where you currently reside"
              name="home"
              placeholder="Choose your home state..."
            ></ag-combobox>
          </div>

          <div class="mbe3">
            <ag-combobox
              label="Required State"
              required
              help-text="This field is required"
              name="required"
              placeholder="Choose a state..."
            ></ag-combobox>
          </div>

          <div class="mbe3">
            <ag-combobox
              label="State Selection"
              required
              invalid
              error-message="Please select a valid state to continue"
              name="validation"
              placeholder="Choose a state..."
            ></ag-combobox>
          </div>
        </div>

        <!-- Label Positioning -->
        <div class="mbe4">
          <h2>Label Positioning</h2>
          <p class="mbs2 mbe3">
            Control label position with <code>label-position</code>: 'top' (default), 'start', 'end', or 'bottom'.
            <strong>Note:</strong> 'bottom' is not recommended as the dropdown will cover the label when opened.
          </p>
        </div>
        <div class="mbe4" style="max-width: 600px;">
          <div class="mbe3">
            <ag-combobox
              label="Top Label (Default)"
              label-position="top"
              name="pos-top"
              placeholder="Choose a state..."
            ></ag-combobox>
          </div>

          <div class="mbe3">
            <ag-combobox
              label="Start Position"
              label-position="start"
              name="pos-start"
              placeholder="Choose a state..."
            ></ag-combobox>
          </div>

          <div class="mbe3">
            <ag-combobox
              label="End Position"
              label-position="end"
              name="pos-end"
              placeholder="Choose a state..."
            ></ag-combobox>
          </div>

          <div class="mbe3">
            <ag-combobox
              label="Bottom Position (Not Recommended)"
              label-position="bottom"
              name="pos-bottom"
              help-text="The dropdown will cover this label when opened"
              placeholder="Choose a state..."
            ></ag-combobox>
          </div>
        </div>
      </section>
    \`;
  }
}

// Register the custom element
customElements.define('combobox-lit-examples', ComboboxLitExamples);
`,Zs=`import { useState } from "react";
import { ReactCombobox } from "agnosticui-core/combobox/react";

export default function ComboboxReactExamples() {
  // State options
  const stateOptions = [
    { value: "al", label: "Alabama" },
    { value: "ak", label: "Alaska" },
    { value: "az", label: "Arizona" },
    { value: "ar", label: "Arkansas" },
    { value: "ca", label: "California" },
    { value: "co", label: "Colorado" },
    { value: "ct", label: "Connecticut" },
    { value: "de", label: "Delaware" },
    { value: "fl", label: "Florida" },
    { value: "ga", label: "Georgia" },
  ];

  // Options with some disabled
  const optionsWithDisabled = [
    { value: "ca", label: "California" },
    { value: "co", label: "Colorado", disabled: true },
    { value: "ct", label: "Connecticut" },
    { value: "fl", label: "Florida", disabled: true },
    { value: "ny", label: "New York" },
  ];

  // State values
  const [selectedState, setSelectedState] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loadingOptions, setLoadingOptions] = useState([]);
  const [lastEvent, setLastEvent] = useState(null);

  const handleStateChange = (detail) => {
    setSelectedState(detail.value);
    console.log("State changed:", detail);
  };

  const toggleLoading = () => {
    setIsLoading(!isLoading);
    if (!isLoading) {
      setLoadingOptions([]);
      // Simulate async loading
      setTimeout(() => {
        setLoadingOptions(stateOptions);
        setIsLoading(false);
      }, 2000);
    } else {
      setLoadingOptions(stateOptions);
    }
  };

  const handleChange = (detail) => {
    const optionLabel = detail.option ? detail.option.label : "cleared";
    setLastEvent(\`change (value: \${detail.value || "none"}, option: \${optionLabel})\`);
  };

  const handleSelect = (detail) => {
    setLastEvent(\`select (value: \${detail.value}, label: \${detail.option.label})\`);
  };

  const handleSearch = (detail) => {
    setLastEvent(\`search (searchTerm: "\${detail.searchTerm}")\`);
  };

  return (
    <section>
      {/* Basic Combobox */}
      <div className="mbe4">
        <h2>Basic Combobox</h2>
      </div>
      <div className="stacked mbe4">
        <ReactCombobox
          options={stateOptions}
          label="Select State"
          placeholder="Choose a state..."
          className="mbe2"
          onChange={handleStateChange}
        />
        <p className="text-sm text-secondary">Selected: {selectedState || 'None'}</p>
      </div>

      {/* Sizes */}
      <div className="mbe4">
        <h2>Sizes</h2>
      </div>
      <div className="stacked mbe4">
        <ReactCombobox
          options={stateOptions}
          label="Small Combobox"
          size="small"
          placeholder="Small size"
          className="mbe2"
        />
        <ReactCombobox
          options={stateOptions}
          label="Default Combobox"
          size="default"
          placeholder="Default size"
          className="mbe2"
        />
        <ReactCombobox
          options={stateOptions}
          label="Large Combobox"
          size="large"
          placeholder="Large size"
          className="mbe2"
        />
      </div>

      {/* Filter Modes */}
      <div className="mbe4">
        <h2>Filter Modes</h2>
      </div>
      <div className="stacked mbe4">
        <ReactCombobox
          options={stateOptions}
          label="Starts With Filter"
          filterMode="startsWith"
          placeholder="Type to filter..."
          helpText="Try typing 'Ca' to see California"
          className="mbe2"
        />
        <ReactCombobox
          options={stateOptions}
          label="Contains Filter"
          filterMode="contains"
          placeholder="Type to search..."
          helpText="Try typing 'or' to see multiple matches"
          className="mbe2"
        />
      </div>

      {/* Clearable */}
      <div className="mbe4">
        <h2>Clearable</h2>
      </div>
      <div className="stacked mbe4">
        <ReactCombobox
          options={stateOptions}
          label="Clearable Combobox"
          clearable
          placeholder="Select and clear..."
          helpText="Clear button appears when a value is selected"
          value="ca"
          className="mbe2"
        />
      </div>

      {/* States */}
      <div className="mbe4">
        <h2>States</h2>
      </div>
      <div className="stacked mbe4">
        <ReactCombobox
          options={stateOptions}
          label="Disabled Combobox"
          disabled
          placeholder="This is disabled"
          value="ca"
          className="mbe2"
        />
        <ReactCombobox
          options={stateOptions}
          label="Readonly Combobox"
          readonly
          placeholder="This is readonly"
          value="co"
          className="mbe2"
        />
        <ReactCombobox
          options={stateOptions}
          label="Required Combobox"
          required
          placeholder="This is required"
          helpText="This field is required"
          className="mbe2"
        />
        <ReactCombobox
          options={stateOptions}
          label="Invalid Combobox"
          invalid
          errorMessage="Please select a valid state"
          placeholder="This has an error"
          className="mbe2"
        />
      </div>

      {/* With Help Text */}
      <div className="mbe4">
        <h2>With Help Text</h2>
      </div>
      <div className="stacked mbe4">
        <ReactCombobox
          options={stateOptions}
          label="State of Residence"
          placeholder="Select your state..."
          helpText="Choose the state where you currently reside"
          className="mbe2"
        />
      </div>

      {/* Loading State */}
      <div className="mbe4">
        <h2>Loading State</h2>
      </div>
      <div className="stacked mbe4">
        <ReactCombobox
          options={loadingOptions}
          label="Loading Combobox"
          loading={isLoading}
          loadingText="Fetching states..."
          placeholder="Loading..."
          className="mbe2"
        />
        <button
          onClick={toggleLoading}
          className="btn btn-primary"
        >
          {isLoading ? 'Stop Loading' : 'Start Loading'}
        </button>
      </div>

      {/* With Disabled Options */}
      <div className="mbe4">
        <h2>With Disabled Options</h2>
      </div>
      <div className="stacked mbe4">
        <ReactCombobox
          options={optionsWithDisabled}
          label="Select State"
          placeholder="Some options are disabled..."
          helpText="Colorado and Florida are disabled"
          className="mbe2"
        />
      </div>

      {/* Custom No Results Text */}
      <div className="mbe4">
        <h2>Custom No Results Text</h2>
      </div>
      <div className="stacked mbe4">
        <ReactCombobox
          options={stateOptions}
          label="Search States"
          placeholder="Type to search..."
          noResultsText="No states match your search"
          helpText="Try typing 'xyz' to see custom no results message"
          className="mbe2"
        />
      </div>

      {/* Hidden Label */}
      <div className="mbe4">
        <h2>Hidden Label</h2>
      </div>
      <div className="stacked mbe4">
        <ReactCombobox
          options={stateOptions}
          label="State (Hidden)"
          labelHidden
          placeholder="Label is visually hidden but accessible"
          helpText="The label is hidden visually but still accessible to screen readers"
          className="mbe2"
        />
      </div>

      {/* Monochrome Variant */}
      <div className="mbe4">
        <h2>Monochrome Variant (Single Select)</h2>
      </div>
      <div className="stacked mbe4">
        <ReactCombobox
          options={stateOptions}
          label="Select State"
          variant="monochrome"
          placeholder="Choose a state..."
          helpText="Monochrome variant with inverted colors for selected items"
          className="mbe2"
        />
      </div>

      {/* Multiple Select */}
      <div className="mbe4">
        <h2>Multiple Select</h2>
      </div>
      <div className="stacked mbe4">
        <ReactCombobox
          options={stateOptions}
          label="Select States"
          multiple
          closeOnSelect={false}
          placeholder="Choose one or more states..."
          helpText="Select multiple states with checkboxes"
          className="mbe2"
        />
      </div>

      {/* Multiple with Defaults */}
      <div className="mbe4">
        <h2>Multiple with Defaults</h2>
      </div>
      <div className="stacked mbe4">
        <ReactCombobox
          options={stateOptions}
          label="Pre-selected States"
          multiple
          closeOnSelect={false}
          defaultValue={["ca", "fl"]}
          helpText="California and Florida are pre-selected"
          className="mbe2"
        />
      </div>

      {/* Multiple Clearable */}
      <div className="mbe4">
        <h2>Multiple Clearable</h2>
      </div>
      <div className="stacked mbe4">
        <ReactCombobox
          options={stateOptions}
          label="Select States"
          multiple
          clearable
          closeOnSelect={false}
          defaultValue={["ny", "co"]}
          placeholder="Select and clear multiple..."
          helpText="Clear button removes all selections"
          className="mbe2"
        />
      </div>

      {/* Multiple with Max Visible Tags */}
      <div className="mbe4">
        <h2>Multiple with Max Visible Tags</h2>
      </div>
      <div className="stacked mbe4">
        <ReactCombobox
          options={stateOptions}
          label="Select States"
          multiple
          closeOnSelect={false}
          defaultValue={["al", "ak", "az", "ar", "ca"]}
          maxOptionsVisible={2}
          helpText="Shows only 2 tags, with a +3 summary"
          className="mbe2"
        />
      </div>

      {/* Multiple Monochrome */}
      <div className="mbe4">
        <h2>Multiple Monochrome</h2>
      </div>
      <div className="stacked mbe4">
        <ReactCombobox
          options={stateOptions}
          label="Select States"
          multiple
          variant="monochrome"
          closeOnSelect={false}
          placeholder="Choose one or more states..."
          helpText="Multiple select with monochrome variant"
          className="mbe2"
        />
      </div>

      {/* Event Handling */}
      <div className="mbe4">
        <h2>Event Handling</h2>
      </div>
      <div className="stacked mbe4">
        <div className="flex-inline items-center" style={{ gap: "10px" }}>
          <ReactCombobox
            options={stateOptions}
            label="Event Test"
            placeholder="Type or select..."
            onChange={handleChange}
            onSelect={handleSelect}
            onSearch={handleSearch}
            className="mbe2"
          />
          {lastEvent && (
            <p>
              Last event: <strong>{lastEvent}</strong>
            </p>
          )}
        </div>
      </div>

      {/* External Label Support */}
      <div className="mbe4">
        <h2>External Label Support</h2>
        <p className="mbs2 mbe3">
          The Combobox component supports external labels with helper text, required fields, and validation states.
        </p>
      </div>
      <div className="mbe4" style={{ maxWidth: "600px" }}>
        <div className="mbe3">
          <ReactCombobox
            options={stateOptions}
            label="Favorite State"
            name="favorite"
            placeholder="Choose a state..."
          />
        </div>

        <div className="mbe3">
          <ReactCombobox
            options={stateOptions}
            label="Home State"
            helpText="Select the state where you currently reside"
            name="home"
            placeholder="Choose your home state..."
          />
        </div>

        <div className="mbe3">
          <ReactCombobox
            options={stateOptions}
            label="Required State"
            required
            helpText="This field is required"
            name="required"
            placeholder="Choose a state..."
          />
        </div>

        <div className="mbe3">
          <ReactCombobox
            options={stateOptions}
            label="State Selection"
            required
            invalid
            errorMessage="Please select a valid state to continue"
            name="validation"
            placeholder="Choose a state..."
          />
        </div>
      </div>

      {/* Label Positioning */}
      <div className="mbe4">
        <h2>Label Positioning</h2>
        <p className="mbs2 mbe3">
          Control label position with <code>labelPosition</code>: 'top' (default), 'start', 'end', or 'bottom'.
          <strong>Note:</strong> 'bottom' is not recommended as the dropdown will cover the label when opened.
        </p>
      </div>
      <div className="mbe4" style={{ maxWidth: "600px" }}>
        <div className="mbe3">
          <ReactCombobox
            options={stateOptions}
            label="Top Label (Default)"
            labelPosition="top"
            name="pos-top"
            placeholder="Choose a state..."
          />
        </div>

        <div className="mbe3">
          <ReactCombobox
            options={stateOptions}
            label="Start Position"
            labelPosition="start"
            name="pos-start"
            placeholder="Choose a state..."
          />
        </div>

        <div className="mbe3">
          <ReactCombobox
            options={stateOptions}
            label="End Position"
            labelPosition="end"
            name="pos-end"
            placeholder="Choose a state..."
          />
        </div>

        <div className="mbe3">
          <ReactCombobox
            options={stateOptions}
            label="Bottom Position (Not Recommended)"
            labelPosition="bottom"
            name="pos-bottom"
            helpText="The dropdown will cover this label when opened"
            placeholder="Choose a state..."
          />
        </div>
      </div>
    </section>
  );
}
`,bi=JSON.parse('{"title":"Combobox","description":"","frontmatter":{},"headers":[],"relativePath":"components/combobox.md","filePath":"components/combobox.md"}'),si={name:"components/combobox.md"},gi=Object.assign(si,{setup(c){return(s,i)=>(R(),I("div",null,[i[1]||(i[1]=e("h1",{id:"combobox",tabindex:"-1"},[A("Combobox "),e("a",{class:"header-anchor",href:"#combobox","aria-label":'Permalink to "Combobox"'},"​")],-1)),r(es),i[2]||(i[2]=e("p",null,"An accessible autocomplete widget that combines a text input with a filterable dropdown list. Perfect for searchable select inputs with keyboard navigation support.",-1)),i[3]||(i[3]=e("h2",{id:"examples",tabindex:"-1"},[A("Examples "),e("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),r(ks,{component:"combobox","vue-code":k(Qs),"lit-code":k(Xs),"react-code":k(Zs)},{vue:G(()=>[r(Ks)]),lit:G(()=>[...i[0]||(i[0]=[e("combobox-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),i[4]||(i[4]=rs(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The framework examples below <code>import</code> AgnosticUI as an <code>npm</code> package. Alternatively, you can use the <strong>CLI for complete control, AI/LLM visibility, and full code ownership</strong>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> init</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> --framework</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> FRAMEWORK</span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;"> # react, vue, lit, svelte, etc.</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> add</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> Combobox</span></span></code></pre></div><p>The CLI copies source code directly into your project, giving you full visibility and control. After running <code>npx ag add</code>, you&#39;ll receive exact import instructions.</p></div><details class="details custom-block"><summary>Vue</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueCombobox</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      v-model:value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;selectedState&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :options</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;stateOptions&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Select State&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      placeholder</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Choose a state...&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      @change</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;handleChange&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueCombobox</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      v-model:value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;state&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :options</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;stateOptions&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;State of Residence&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      placeholder</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Select your state...&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      help-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Choose the state where you currently reside&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueCombobox</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      v-model:value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;requiredState&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :options</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;stateOptions&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Required State&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :required</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;true&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :invalid</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;isInvalid&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      error-message</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;State is required&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueCombobox</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      v-model:value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;clearableState&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :options</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;stateOptions&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Select State&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :clearable</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;true&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      placeholder</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Select and clear...&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueCombobox</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      v-model:value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;searchState&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :options</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;stateOptions&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Search States&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      filter-mode</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;contains&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      placeholder</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Type to search...&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      @search</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;handleSearch&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueCombobox</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      v-model:value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;small&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :options</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;stateOptions&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Small Combobox&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      size</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;small&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueCombobox</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      v-model:value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;large&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :options</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;stateOptions&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Large Combobox&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      size</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;large&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueCombobox</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      v-model:value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;value&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :options</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;optionsWithDisabled&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Select State&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      placeholder</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Some options are disabled...&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueCombobox</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      v-model:value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;asyncValue&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :options</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;asyncOptions&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Select State&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :loading</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;isLoading&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      loading-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Fetching states...&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueCombobox</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      v-model:value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;disabled&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :options</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;stateOptions&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Disabled Combobox&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :disabled</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;true&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> setup</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> lang</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;ts&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { ref } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;vue&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> VueCombobox </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;agnosticui-core/combobox/vue&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { ComboboxOption } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;agnosticui-core/combobox&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> stateOptions</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> ComboboxOption</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">[] </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> [</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  { value: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;ca&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, label: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;California&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  { value: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;co&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, label: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;Colorado&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  { value: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;ct&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, label: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;Connecticut&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  { value: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;fl&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, label: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;Florida&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  { value: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;ny&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, label: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;New York&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> optionsWithDisabled</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> ComboboxOption</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">[] </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> [</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  { value: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;ca&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, label: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;California&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  { value: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;co&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, label: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;Colorado&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, disabled: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">true</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  { value: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;ct&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, label: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;Connecticut&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> selectedState</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> ref</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> state</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> ref</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> requiredState</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> ref</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> isInvalid</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> ref</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">false</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> clearableState</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> ref</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;ca&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> searchState</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> ref</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> small</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> ref</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> large</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> ref</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> ref</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> asyncValue</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> ref</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> asyncOptions</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> ref</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">ComboboxOption</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">[]&gt;([]);</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> isLoading</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> ref</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">false</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> disabled</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> ref</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;ca&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> handleChange</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">event</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> CustomEvent</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;Selected:&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, event.detail.value);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> handleSearch</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">event</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> CustomEvent</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;Search term:&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, event.detail.searchTerm);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">};</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><details class="details custom-block"><summary>React</summary><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { useState } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;react&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { ReactCombobox } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;agnosticui-core/combobox/react&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { ComboboxOption, ComboboxChangeEvent } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;agnosticui-core/combobox/react&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> function</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> ComboboxExample</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">() </span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> stateOptions</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> ComboboxOption</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">[] </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> [</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    { value: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;ca&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, label: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;California&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    { value: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;co&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, label: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;Colorado&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    { value: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;ct&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, label: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;Connecticut&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    { value: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;fl&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, label: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;Florida&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    { value: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;ny&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, label: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;New York&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  ];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> optionsWithDisabled</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> ComboboxOption</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">[] </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> [</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    { value: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;ca&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, label: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;California&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    { value: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;co&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, label: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;Colorado&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, disabled: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">true</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    { value: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;ct&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, label: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;Connecticut&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  ];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> [</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">selectedState</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">setSelectedState</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">] </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> useState</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> [</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">state</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">setState</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">] </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> useState</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> [</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">requiredState</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">setRequiredState</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">] </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> useState</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> [</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">isInvalid</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">setIsInvalid</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">] </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> useState</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">false</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> [</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">clearableState</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">setClearableState</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">] </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> useState</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;ca&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> [</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">searchState</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">setSearchState</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">] </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> useState</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> [</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">small</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">setSmall</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">] </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> useState</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> [</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">large</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">setLarge</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">] </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> useState</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> [</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">setValue</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">] </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> useState</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> [</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">asyncValue</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">setAsyncValue</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">] </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> useState</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> [</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">asyncOptions</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">setAsyncOptions</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">] </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> useState</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">ComboboxOption</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">[]&gt;([]);</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> [</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">isLoading</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">setIsLoading</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">] </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> useState</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">false</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> handleChange</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">event</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> ComboboxChangeEvent</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;Selected:&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, event.detail.value);</span></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">    setSelectedState</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(event.detail.value);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> handleSearch</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">event</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> CustomEvent</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;Search term:&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, event.detail.searchTerm);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  return</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactCombobox</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">selectedState</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        options</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">stateOptions</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        label</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Select State&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        placeholder</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Choose a state...&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        onChange</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">handleChange</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactCombobox</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">state</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        options</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">stateOptions</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        label</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;State of Residence&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        placeholder</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Select your state...&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        helpText</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Choose the state where you currently reside&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        onChange</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> setState</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(e.detail.value)</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactCombobox</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">requiredState</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        options</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">stateOptions</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        label</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Required State&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        required</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        invalid</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">isInvalid</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        errorMessage</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;State is required&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        onChange</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> setRequiredState</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(e.detail.value)</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactCombobox</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">clearableState</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        options</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">stateOptions</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        label</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Select State&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        clearable</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        placeholder</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Select and clear...&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        onChange</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> setClearableState</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(e.detail.value)</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactCombobox</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">searchState</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        options</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">stateOptions</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        label</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Search States&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        filterMode</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;contains&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        placeholder</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Type to search...&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        onChange</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> setSearchState</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(e.detail.value)</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        onSearch</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">handleSearch</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactCombobox</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">small</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        options</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">stateOptions</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        label</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Small Combobox&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        size</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;small&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        onChange</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> setSmall</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(e.detail.value)</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactCombobox</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">large</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        options</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">stateOptions</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        label</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Large Combobox&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        size</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;large&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        onChange</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> setLarge</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(e.detail.value)</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactCombobox</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        options</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">optionsWithDisabled</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        label</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Select State&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        placeholder</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Some options are disabled...&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        onChange</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> setValue</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(e.detail.value)</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactCombobox</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">asyncValue</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        options</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">asyncOptions</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        label</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Select State&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        loading</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">isLoading</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        loadingText</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Fetching states...&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        onChange</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> setAsyncValue</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(e.detail.value)</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactCombobox</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;ca&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        options</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">stateOptions</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        label</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Disabled Combobox&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        disabled</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  );</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div></details><details class="details custom-block"><summary>Lit</summary><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { LitElement, html } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;lit&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { customElement, state } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;lit/decorators.js&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;agnosticui-core/combobox&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { ComboboxOption, ComboboxChangeEvent } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;agnosticui-core/combobox&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">@</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">customElement</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;combobox-example&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">)</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> class</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> ComboboxExample</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> extends</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> LitElement</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  @</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">state</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">()</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  private</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> stateOptions</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> ComboboxOption</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">[] </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> [</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    { value: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;ca&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, label: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;California&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    { value: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;co&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, label: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;Colorado&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    { value: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;ct&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, label: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;Connecticut&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    { value: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;fl&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, label: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;Florida&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    { value: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;ny&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, label: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;New York&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  ];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  @</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">state</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">()</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  private</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> selectedState</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  @</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">state</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">()</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  private</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> clearableState</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;ca&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  @</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">state</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">()</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  private</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> isLoading</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> false</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  private</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> handleChange</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">event</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> ComboboxChangeEvent</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;Selected:&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, event.detail.value);</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    this</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">.selectedState </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> event.detail.value;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  private</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> handleSearch</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">event</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> CustomEvent</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;Search term:&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, event.detail.searchTerm);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">  render</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">() {</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">    return</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> html</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">\`</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">      &lt;ag-combobox</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        .options=\${</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">this</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">.</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">stateOptions</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">}</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        .value=\${</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">this</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">.</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">selectedState</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">}</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        label=&quot;Select State&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        placeholder=&quot;Choose a state...&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        @change=\${</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">this</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">.</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">handleChange</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">}</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">      &gt;&lt;/ag-combobox&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">      &lt;ag-combobox</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        .options=\${</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">this</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">.</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">stateOptions</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">}</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        label=&quot;State of Residence&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        placeholder=&quot;Select your state...&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        help-text=&quot;Choose the state where you currently reside&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">      &gt;&lt;/ag-combobox&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">      &lt;ag-combobox</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        .options=\${</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">this</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">.</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">stateOptions</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">}</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        label=&quot;Required State&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        ?required=\${</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">true</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">}</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        ?invalid=\${</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">false</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">}</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        error-message=&quot;State is required&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">      &gt;&lt;/ag-combobox&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">      &lt;ag-combobox</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        .options=\${</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">this</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">.</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">stateOptions</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">}</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        .value=\${</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">this</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">.</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">clearableState</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">}</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        label=&quot;Select State&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        ?clearable=\${</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">true</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">}</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        placeholder=&quot;Select and clear...&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">      &gt;&lt;/ag-combobox&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">      &lt;ag-combobox</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        .options=\${</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">this</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">.</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">stateOptions</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">}</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        label=&quot;Search States&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        filter-mode=&quot;contains&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        placeholder=&quot;Type to search...&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        @search=\${</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">this</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">.</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">handleSearch</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">}</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">      &gt;&lt;/ag-combobox&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">      &lt;ag-combobox</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        .options=\${</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">this</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">.</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">stateOptions</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">}</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        label=&quot;Small Combobox&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        size=&quot;small&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">      &gt;&lt;/ag-combobox&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">      &lt;ag-combobox</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        .options=\${</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">this</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">.</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">stateOptions</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">}</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        label=&quot;Large Combobox&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        size=&quot;large&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">      &gt;&lt;/ag-combobox&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">      &lt;ag-combobox</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        .options=\${</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">[]</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">}</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        label=&quot;Select State&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        ?loading=\${</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">this</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">.</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">isLoading</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">}</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        loading-text=&quot;Fetching states...&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">      &gt;&lt;/ag-combobox&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">      &lt;ag-combobox</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        .options=\${</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">this</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">.</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">stateOptions</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">}</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        .value=\${&#39;ca&#39;}</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        label=&quot;Disabled Combobox&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        ?disabled=\${</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">true</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">}</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">      &gt;&lt;/ag-combobox&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">    \`</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  }</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div></details><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h3><table class="ag-table ag-table--striped"><thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>options</code></td><td><code>ComboboxOption[]</code></td><td><code>[]</code></td><td>Array of options to display in the listbox</td></tr><tr><td><code>value</code></td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>Currently selected value</td></tr><tr><td><code>defaultValue</code></td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>Initial value (uncontrolled mode)</td></tr><tr><td><code>placeholder</code></td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>Placeholder text for the input</td></tr><tr><td><code>label</code></td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>Label text for the combobox</td></tr><tr><td><code>labelHidden</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Visually hide the label (still accessible to screen readers)</td></tr><tr><td><code>noLabel</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Remove the label entirely</td></tr><tr><td><code>labelPosition</code></td><td><code>&#39;top&#39; | &#39;start&#39; | &#39;end&#39; | &#39;bottom&#39;</code></td><td><code>&#39;top&#39;</code></td><td>Position of the label relative to the combobox</td></tr><tr><td><code>ariaLabel</code></td><td><code>string | null</code></td><td><code>null</code></td><td>ARIA label for accessibility</td></tr><tr><td><code>helpText</code></td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>Help text displayed below the input</td></tr><tr><td><code>errorMessage</code></td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>Error message displayed below the input</td></tr><tr><td><code>id</code></td><td><code>string</code></td><td>(auto-generated)</td><td>Unique ID for the combobox</td></tr><tr><td><code>autocomplete</code></td><td><code>&#39;list&#39; | &#39;none&#39;</code></td><td><code>&#39;list&#39;</code></td><td>Autocomplete behavior</td></tr><tr><td><code>filterMode</code></td><td><code>&#39;startsWith&#39; | &#39;contains&#39; | &#39;none&#39;</code></td><td><code>&#39;startsWith&#39;</code></td><td>How to filter options based on input</td></tr><tr><td><code>clearable</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Show clear button when value is selected</td></tr><tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Disable the combobox</td></tr><tr><td><code>readonly</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Make the combobox read-only</td></tr><tr><td><code>required</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Mark the combobox as required</td></tr><tr><td><code>invalid</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Mark the combobox as invalid</td></tr><tr><td><code>size</code></td><td><code>&#39;small&#39; | &#39;default&#39; | &#39;large&#39;</code></td><td><code>&#39;default&#39;</code></td><td>Size variant</td></tr><tr><td><code>maxVisibleOptions</code></td><td><code>number</code></td><td><code>undefined</code></td><td>Maximum number of visible options</td></tr><tr><td><code>closeOnSelect</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Close listbox after selecting an option</td></tr><tr><td><code>loading</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Show loading state</td></tr><tr><td><code>loadingText</code></td><td><code>string</code></td><td><code>&#39;Loading...&#39;</code></td><td>Loading message text</td></tr><tr><td><code>noResultsText</code></td><td><code>string</code></td><td><code>&#39;No results found&#39;</code></td><td>No results message text</td></tr></tbody></table><h3 id="comboboxoption-interface" tabindex="-1">ComboboxOption Interface <a class="header-anchor" href="#comboboxoption-interface" aria-label="Permalink to &quot;ComboboxOption Interface&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">interface</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> ComboboxOption</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">  value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> string</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">  label</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> string</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">  disabled</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">?:</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> boolean</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">  group</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">?:</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> string</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">  icon</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">?:</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> string</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">  description</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">?:</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> string</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">  metadata</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">?:</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> Record</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">string</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">unknown</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h3><table class="ag-table ag-table--striped"><thead><tr><th>Event</th><th>Detail</th><th>Description</th></tr></thead><tbody><tr><td><code>change</code></td><td><code>{ value: string; option: ComboboxOption | null }</code></td><td>Fired when selection changes</td></tr><tr><td><code>select</code></td><td><code>{ option: ComboboxOption; value: string }</code></td><td>Fired when an option is selected</td></tr><tr><td><code>search</code></td><td><code>{ searchTerm: string }</code></td><td>Fired when search term changes</td></tr><tr><td><code>open</code></td><td><code>{ open: boolean }</code></td><td>Fired when listbox opens</td></tr><tr><td><code>close</code></td><td><code>{ open: boolean }</code></td><td>Fired when listbox closes</td></tr><tr><td><code>focus</code></td><td><code>FocusEvent</code></td><td>Fired when input gains focus</td></tr><tr><td><code>blur</code></td><td><code>FocusEvent</code></td><td>Fired when input loses focus</td></tr></tbody></table><h3 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h3><table class="ag-table ag-table--striped"><thead><tr><th>Method</th><th>Signature</th><th>Description</th></tr></thead><tbody><tr><td><code>focus()</code></td><td><code>() =&gt; void</code></td><td>Focus the input</td></tr><tr><td><code>blur()</code></td><td><code>() =&gt; void</code></td><td>Blur the input</td></tr><tr><td><code>open()</code></td><td><code>() =&gt; void</code></td><td>Open the listbox</td></tr><tr><td><code>close()</code></td><td><code>() =&gt; void</code></td><td>Close the listbox</td></tr><tr><td><code>toggle()</code></td><td><code>() =&gt; void</code></td><td>Toggle listbox open/closed</td></tr><tr><td><code>selectOption()</code></td><td><code>(optionOrValue: ComboboxOption | string) =&gt; void</code></td><td>Select an option by value or object</td></tr><tr><td><code>clearSelection()</code></td><td><code>() =&gt; void</code></td><td>Clear the current selection</td></tr></tbody></table><h3 id="css-parts" tabindex="-1">CSS Parts <a class="header-anchor" href="#css-parts" aria-label="Permalink to &quot;CSS Parts&quot;">​</a></h3><p>Use <code>::part()</code> to style component internals:</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-combobox</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-combobox-wrapper</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) { }</span></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-combobox</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-combobox-label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) { }</span></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-combobox</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-combobox-input-wrapper</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) { }</span></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-combobox</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-combobox-input</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) { }</span></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-combobox</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-combobox-toggle-button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) { }</span></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-combobox</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-combobox-clear-button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) { }</span></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-combobox</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-combobox-listbox</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) { }</span></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-combobox</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-combobox-option</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) { }</span></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-combobox</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-combobox-loading</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) { }</span></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-combobox</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-combobox-no-results</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) { }</span></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-combobox</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-combobox-help-text</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) { }</span></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-combobox</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-combobox-error-message</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) { }</span></span></code></pre></div><h3 id="design-tokens" tabindex="-1">Design Tokens <a class="header-anchor" href="#design-tokens" aria-label="Permalink to &quot;Design Tokens&quot;">​</a></h3><p>Customize appearance with CSS custom properties:</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-combobox</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">  --combobox-min-width</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">200</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">  --combobox-max-width</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">100</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">%</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">  --combobox-listbox-max-height</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">300</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">  --combobox-option-padding</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">var</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">--ag-space-3</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">var</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">--ag-space-4</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">  --combobox-option-selected-bg</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">var</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">--ag-blue-100</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">  --combobox-option-hover-bg</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">var</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">--ag-background-tertiary</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">  --combobox-option-focus-bg</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">var</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">--ag-blue-50</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">  --combobox-toggle-size</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">var</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">--ag-space-6</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div><h2 id="keyboard-navigation" tabindex="-1">Keyboard Navigation <a class="header-anchor" href="#keyboard-navigation" aria-label="Permalink to &quot;Keyboard Navigation&quot;">​</a></h2><table class="ag-table ag-table--striped"><thead><tr><th>Key</th><th>Action</th></tr></thead><tbody><tr><td><code>ArrowDown</code></td><td>Opens listbox (if closed) and moves focus to next option</td></tr><tr><td><code>ArrowUp</code></td><td>Opens listbox (if closed) and moves focus to previous option</td></tr><tr><td><code>Enter</code></td><td>Selects the focused option and closes listbox</td></tr><tr><td><code>Escape</code></td><td>Closes listbox (if open) or clears input (if closed with text)</td></tr><tr><td><code>Tab</code></td><td>Closes listbox and moves focus to next element</td></tr><tr><td><code>Home</code></td><td>Moves cursor to start of input</td></tr><tr><td><code>End</code></td><td>Moves cursor to end of input</td></tr><tr><td>Printable characters</td><td>Filters options based on typed text</td></tr></tbody></table><h2 id="accessibility" tabindex="-1">Accessibility <a class="header-anchor" href="#accessibility" aria-label="Permalink to &quot;Accessibility&quot;">​</a></h2><p>The Combobox component follows <a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank" rel="noreferrer">WCAG 2.1 Level AA</a> guidelines and implements the <a href="https://www.w3.org/WAI/ARIA/apg/patterns/combobox/" target="_blank" rel="noreferrer">W3C ARIA APG Combobox Pattern</a>:</p><ul><li><strong>ARIA attributes</strong>: Proper <code>role</code>, <code>aria-expanded</code>, <code>aria-controls</code>, <code>aria-activedescendant</code>, <code>aria-autocomplete</code></li><li><strong>Keyboard navigation</strong>: Full keyboard support with arrow keys, Enter, Escape, Tab</li><li><strong>Focus management</strong>: Uses <code>aria-activedescendant</code> pattern for predictable screen reader behavior</li><li><strong>Screen reader announcements</strong>: Live regions announce options as user navigates</li><li><strong>Focus indicators</strong>: Clear 2px outline with 3:1 contrast ratio</li><li><strong>High contrast mode</strong>: Tested with Windows High Contrast Mode</li><li><strong>Reduced motion</strong>: Respects <code>prefers-reduced-motion</code> setting</li><li><strong>Color independence</strong>: Selection state indicated with visual markers beyond color</li></ul><h3 id="screen-reader-support" tabindex="-1">Screen Reader Support <a class="header-anchor" href="#screen-reader-support" aria-label="Permalink to &quot;Screen Reader Support&quot;">​</a></h3><p>Tested with:</p><ul><li>NVDA (Windows)</li><li>JAWS (Windows)</li><li>VoiceOver (macOS, iOS)</li><li>TalkBack (Android)</li></ul><h2 id="filter-modes" tabindex="-1">Filter Modes <a class="header-anchor" href="#filter-modes" aria-label="Permalink to &quot;Filter Modes&quot;">​</a></h2><h3 id="startswith-default" tabindex="-1">startsWith (default) <a class="header-anchor" href="#startswith-default" aria-label="Permalink to &quot;startsWith (default)&quot;">​</a></h3><p>Matches options that start with the search term. Fast and predictable.</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueCombobox</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  :</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">options</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">options</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  filter-mode</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;startsWith&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">/&gt;</span></span></code></pre></div><h3 id="contains" tabindex="-1">contains <a class="header-anchor" href="#contains" aria-label="Permalink to &quot;contains&quot;">​</a></h3><p>Matches options that contain the search term anywhere. More forgiving for users.</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueCombobox</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  :</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">options</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">options</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  filter-mode</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;contains&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">/&gt;</span></span></code></pre></div><h3 id="none" tabindex="-1">none <a class="header-anchor" href="#none" aria-label="Permalink to &quot;none&quot;">​</a></h3><p>Disables client-side filtering. Useful for server-side filtering scenarios.</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueCombobox</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  :</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">options</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">options</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  filter-mode</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;none&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  @</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">search</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">handleServerSearch</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">/&gt;</span></span></code></pre></div><h2 id="best-practices" tabindex="-1">Best Practices <a class="header-anchor" href="#best-practices" aria-label="Permalink to &quot;Best Practices&quot;">​</a></h2><h3 id="when-to-use" tabindex="-1">When to Use <a class="header-anchor" href="#when-to-use" aria-label="Permalink to &quot;When to Use&quot;">​</a></h3><p><strong>Use Combobox when:</strong></p><ul><li>Users need to search through many options (&gt;10)</li><li>You want to provide typeahead/autocomplete functionality</li><li>Users might know the exact value they&#39;re looking for</li><li>You need accessible keyboard navigation</li><li>You want to allow filtering/searching</li></ul><p><strong>Don&#39;t use Combobox when:</strong></p><ul><li>You have fewer than 5 simple options (use Radio or Select)</li><li>Users need to compare options visually (use Radio group)</li><li>The selection is critical and requires user confirmation (use Select with explicit submit)</li></ul><h3 id="accessibility-tips" tabindex="-1">Accessibility Tips <a class="header-anchor" href="#accessibility-tips" aria-label="Permalink to &quot;Accessibility Tips&quot;">​</a></h3><ol><li><strong>Always provide a label</strong>: Use <code>label</code> prop or <code>aria-label</code> for screen readers</li><li><strong>Use help text</strong>: Provide guidance with <code>helpText</code> prop</li><li><strong>Clear error messages</strong>: Use <code>errorMessage</code> with specific, actionable messages</li><li><strong>Test keyboard navigation</strong>: Ensure all features work without a mouse</li><li><strong>Test with screen readers</strong>: Verify announcements are clear and helpful</li></ol><h3 id="performance" tabindex="-1">Performance <a class="header-anchor" href="#performance" aria-label="Permalink to &quot;Performance&quot;">​</a></h3><ul><li>Options are filtered in real-time as users type</li><li>Uses efficient <code>startsWith</code> or <code>contains</code> algorithms</li><li>Limits visible options with <code>maxVisibleOptions</code> for large datasets</li><li>For very large datasets (&gt;1000), consider server-side filtering with <code>filter-mode=&quot;none&quot;</code></li></ul><h2 id="phase-2-features-future" tabindex="-1">Phase 2 Features (Future) <a class="header-anchor" href="#phase-2-features-future" aria-label="Permalink to &quot;Phase 2 Features (Future)&quot;">​</a></h2><p>The following features are planned for Phase 2:</p><ul><li><strong>Multiselect</strong>: Select multiple options with tags</li><li><strong>Grouped options</strong>: Organize options into categories</li><li><strong>Rich content</strong>: Icons, descriptions, avatars in options</li><li><strong>Async filtering</strong>: Built-in debounce and async support</li><li><strong>Fuzzy matching</strong>: More forgiving search algorithm</li><li><strong>Virtual scrolling</strong>: Handle thousands of options efficiently</li><li><strong>Mobile optimization</strong>: Fullscreen mode on small screens</li></ul>`,51))]))}});export{bi as __pageData,gi as default};
