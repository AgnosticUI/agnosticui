import{a as m,i as y,x as l}from"./lit-element.DMCH56eX.js";import{z as i,m as c,n as f}from"./_IconButton.ITUY3W3l.js";import{t as x}from"./_Accordion.B-PO82ap.js";var _=Object.defineProperty,w=Object.getOwnPropertyDescriptor,k=(t,e,r)=>e in t?_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,h=(t,e,r,o)=>{for(var a=o>1?void 0:o?w(e,r):e,d=t.length-1,p;d>=0;d--)(p=t[d])&&(a=(o?p(e,r,a):p(a))||a);return o&&a&&_(e,r,a),a},B=(t,e,r)=>k(t,e+"",r);let u=class extends y{constructor(){super(),this.type="button",this.disabled=!1,this.loading=!1,this.toggle=!1,this.pressed=!1,this.ariaLabel="",this.ariaDescribedby="",this.variant="",this.size="md"}_handleClick(){if(this.toggle&&!this.disabled&&!this.loading){this.pressed=!this.pressed;const e=new CustomEvent("toggle",{detail:{pressed:this.pressed},bubbles:!0,composed:!0});this.dispatchEvent(e)}}_handleFocus(){const e=new FocusEvent("focus",{bubbles:!0,composed:!0});this.dispatchEvent(e)}_handleBlur(){const e=new FocusEvent("blur",{bubbles:!0,composed:!0});this.dispatchEvent(e)}focus(){const e=this.shadowRoot?.querySelector("button");e&&e.focus()}blur(){const e=this.shadowRoot?.querySelector("button");e&&e.blur()}render(){const e=this.disabled||this.loading;return l`
      <button
        type=${this.type}
        part="button"
        ?disabled=${e}
        aria-disabled=${e?"true":"false"}
        aria-busy=${c(this.loading?"true":void 0)}
        aria-pressed=${c(this.toggle?String(this.pressed):void 0)}
        aria-label=${c(this.ariaLabel||void 0)}
        aria-describedby=${c(this.ariaDescribedby||void 0)}
        @click=${this._handleClick}
        @focus=${this._handleFocus}
        @blur=${this._handleBlur}
      >
        <slot></slot>
      </button>
    `}};B(u,"styles",m`
    /* FUNCTIONAL CSS ONLY - Almost Headless Approach */
    :host {
      /* Inline-flex for perfect centering while maintaining inline behavior */
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    button {
      /* Reset browser defaults */
      margin: 0;
      padding: 0;
      border: none;
      background: none;

      /* Inherit font styling from parent */
      font: inherit;
      color: inherit;

      /* Basic interaction styling */
      cursor: pointer;

      /* Flex layout for perfect content alignment */
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--ag-space-1); /* Small gap for icon + text scenarios */
    }

    button:disabled {
      cursor: not-allowed;
    }

    button:focus-visible,
    button:focus:not(:hover) {
      /* High-contrast focus ring using semantic tokens */
      outline: var(--ag-focus-width) solid var(--ag-focus);
      outline-offset: var(--ag-focus-offset);
      transition: outline var(--ag-motion-medium) ease;
    }
  `);h([i({type:String})],u.prototype,"type",2);h([i({type:Boolean})],u.prototype,"disabled",2);h([i({type:Boolean})],u.prototype,"loading",2);h([i({type:Boolean})],u.prototype,"toggle",2);h([i({type:Boolean})],u.prototype,"pressed",2);h([i({type:String})],u.prototype,"ariaLabel",2);h([i({type:String})],u.prototype,"ariaDescribedby",2);h([i({type:String,reflect:!0})],u.prototype,"variant",2);h([i({type:String,reflect:!0})],u.prototype,"size",2);u=h([f("ag-button")],u);var v=Object.defineProperty,L=Object.getOwnPropertyDescriptor,S=(t,e,r)=>e in t?v(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,n=(t,e,r,o)=>{for(var a=o>1?void 0:o?L(e,r):e,d=t.length-1,p;d>=0;d--)(p=t[d])&&(a=(o?p(e,r,a):p(a))||a);return o&&a&&v(e,r,a),a},z=(t,e,r)=>S(t,e+"",r);let s=class extends y{_inputId=x("ag-input");constructor(){super(),this.label="",this.labelHidden=!1,this.noLabel=!1,this.ariaLabel="",this.labelledBy="",this.type="text",this.value="",this.rows=4,this.cols=50,this.size="default",this.isRounded=!1,this.isUnderlined=!1,this.isUnderlinedWithBackground=!1,this.isInline=!1,this.hasLeftAddon=!1,this.hasRightAddon=!1,this.required=!1,this.disabled=!1,this.readonly=!1,this.invalid=!1,this.errorMessage="",this.helpText=""}render(){const t=this.type==="textarea",e=this.hasLeftAddon||this.hasRightAddon,r=`${this._inputId}-help`,o=`${this._inputId}-error`,a=[];this.helpText&&a.push(r),this.errorMessage&&a.push(o),this.labelledBy&&a.push(this.labelledBy);const d=["ag-input"];this.size!=="default"&&d.push(`ag-input--${this.size}`),this.isRounded&&d.push("ag-input--rounded"),this.isUnderlined&&d.push("ag-input--underlined"),this.isUnderlinedWithBackground&&d.push("ag-input--underlined-with-background");const p=t?l`
      <textarea
        id="${this._inputId}"
        part="textarea"
        class="ag-input__textarea"
        .value="${this.value}"
        rows="${this.rows}"
        cols="${this.cols}"
        ?required="${this.required}"
        ?disabled="${this.disabled}"
        ?readonly="${this.readonly}"
        aria-required="${this.required?"true":"false"}"
        aria-invalid="${this.invalid?"true":"false"}"
        aria-label="${c(this.ariaLabel||void 0)}"
        aria-labelledby="${c(this.labelledBy||void 0)}"
        aria-describedby="${a.length>0?a.join(" "):c(void 0)}"
      ></textarea>
    `:l`
      <input
        type="${this.type}"
        id="${this._inputId}"
        part="input"
        class="ag-input__input"
        .value="${this.value}"
        ?required="${this.required}"
        ?disabled="${this.disabled}"
        ?readonly="${this.readonly}"
        aria-required="${this.required?"true":"false"}"
        aria-invalid="${this.invalid?"true":"false"}"
        aria-label="${c(this.ariaLabel||void 0)}"
        aria-labelledby="${c(this.labelledBy||void 0)}"
        aria-describedby="${a.length>0?a.join(" "):c(void 0)}"
      />
    `;return l`
      <div class="${d.join(" ")}" part="wrapper">
        ${this.noLabel?"":l`
          <label
            for="${this._inputId}"
            part="label"
            class="ag-input__label ${this.labelHidden?"ag-input__label--hidden":""}"
          >
            ${this.label}
            ${this.required?l`
              <span class="ag-input__required" aria-hidden="true">*</span>
            `:""}
          </label>
        `}

        ${this.helpText?l`
          <div class="ag-input__help" id="${r}" part="help">
            ${this.helpText}
          </div>
        `:""}

        ${this.errorMessage?l`
          <div class="ag-input__error" id="${o}" part="error">
            ${this.errorMessage}
          </div>
        `:l`
          <div class="ag-input__error" id="${o}" part="error" hidden></div>
        `}

        ${e?l`
          <div class="ag-input__field" part="field-wrapper">
            ${this.hasLeftAddon?l`
              <div class="ag-input__addon ag-input__addon--left" part="addon-left">
                <slot name="addon-left"></slot>
              </div>
            `:""}

            ${p}

            ${this.hasRightAddon?l`
              <div class="ag-input__addon ag-input__addon--right" part="addon-right">
                <slot name="addon-right"></slot>
              </div>
            `:""}
          </div>
        `:p}
      </div>
    `}};z(s,"styles",m`
    /* FUNCTIONAL CSS ONLY - Almost Headless Approach */
    :host {
      display: block;
    }

    /* Label Above Input - BBC GEL Best Practice
     *
     * Why Label Above (BBC GEL):
     * - Mobile-friendly: Labels above work better on small screens
     * - Accessibility standard: Clear visual hierarchy
     * - Cognitive accessibility: Easier to scan and understand
     * - International: Works with various text lengths/languages
     *
     * Note: Labels below inputs are possible via customization:
     * Use noLabel prop + external <ag-label> or <label> for custom positioning
     */
    .ag-input__label {
      display: block;
      margin-bottom: 0.25rem;
    }

    /* Visually hidden label - screen reader only */
    .ag-input__label--hidden {
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

    /* Focus styles - consistent with --ag-focus pattern */
    .ag-input__input:focus-visible,
    .ag-input__textarea:focus-visible {
      outline: var(--ag-focus-width, 2px) solid var(--ag-focus, #2563eb);
      outline-offset: var(--ag-focus-offset, 2px);
      transition: outline var(--ag-motion-medium, 0.2s) ease;
    }

    /* Textarea resize behavior */
    .ag-input__textarea {
      resize: vertical;
    }

    /* Inline mode display */
    :host([is-inline]) {
      display: inline-block;
    }

    /* Addon field wrapper - flex for addon support */
    .ag-input__field {
      display: flex;
      align-items: stretch; /* Changed from center to stretch */
    }

    /* Addon positioning - exact height matching for all content types */
    .ag-input__addon {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.75rem; /* Default size padding */
      box-sizing: border-box;
      min-height: 2.75rem; /* 44px - matches working left addons */
      line-height: 1;
      font-size: 1rem;
    }

    /* Small size addon - exact height matching */
    :host([size="small"]) .ag-input__addon {
      padding: 0.5rem;
      min-height: 2.25rem; /* Proportional to small inputs */
      font-size: 0.875rem;
    }

    /* Large size addon - exact height matching */
    :host([size="large"]) .ag-input__addon {
      padding: 1rem;
      min-height: 3.4375rem; /* 55px - match actual large input height */
      font-size: 1.125rem;
    }

    /* Default size addon - explicit for specificity */
    :host([size="default"]) .ag-input__addon,
    :host(:not([size])) .ag-input__addon {
      padding: 0.75rem;
      min-height: 2.75rem; /* 44px - match working left addons */
      font-size: 1rem;
    }

    /* Input takes remaining space in addon layout */
    .ag-input__field input,
    .ag-input__field textarea {
      flex: 1;
      /* Reset borders for seamless addon connection */
      border-radius: 0;
    }

    /* Required field indicator */
    .ag-input__required {
      color: inherit;
    }

    /* Error state visibility */
    .ag-input__error[hidden] {
      display: none !important;
    }

    .ag-input__error:not([hidden]) {
      display: block;
    }
  `);n([i({type:String})],s.prototype,"label",2);n([i({type:Boolean,attribute:"label-hidden"})],s.prototype,"labelHidden",2);n([i({type:Boolean,attribute:"no-label"})],s.prototype,"noLabel",2);n([i({type:String,attribute:"aria-label"})],s.prototype,"ariaLabel",2);n([i({type:String,attribute:"labelled-by"})],s.prototype,"labelledBy",2);n([i({type:String})],s.prototype,"type",2);n([i({type:String})],s.prototype,"value",2);n([i({type:Number})],s.prototype,"rows",2);n([i({type:Number})],s.prototype,"cols",2);n([i({type:String,reflect:!0})],s.prototype,"size",2);n([i({type:Boolean,reflect:!0,attribute:"is-rounded"})],s.prototype,"isRounded",2);n([i({type:Boolean,reflect:!0,attribute:"is-underlined"})],s.prototype,"isUnderlined",2);n([i({type:Boolean,reflect:!0,attribute:"is-underlined-with-background"})],s.prototype,"isUnderlinedWithBackground",2);n([i({type:Boolean,reflect:!0,attribute:"is-inline"})],s.prototype,"isInline",2);n([i({type:Boolean,reflect:!0,attribute:"has-left-addon"})],s.prototype,"hasLeftAddon",2);n([i({type:Boolean,reflect:!0,attribute:"has-right-addon"})],s.prototype,"hasRightAddon",2);n([i({type:Boolean,reflect:!0})],s.prototype,"required",2);n([i({type:Boolean,reflect:!0})],s.prototype,"disabled",2);n([i({type:Boolean,reflect:!0})],s.prototype,"readonly",2);n([i({type:Boolean,reflect:!0})],s.prototype,"invalid",2);n([i({type:String,attribute:"error-message"})],s.prototype,"errorMessage",2);n([i({type:String,attribute:"help-text"})],s.prototype,"helpText",2);s=n([f("ag-input")],s);var $=Object.defineProperty,A=Object.getOwnPropertyDescriptor,I=(t,e,r)=>e in t?$(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,g=(t,e,r,o)=>{for(var a=o>1?void 0:o?A(e,r):e,d=t.length-1,p;d>=0;d--)(p=t[d])&&(a=(o?p(e,r,a):p(a))||a);return o&&a&&$(e,r,a),a},C=(t,e,r)=>I(t,e+"",r);let b=class extends y{constructor(){super(),this.items=[],this.type="default",this.ariaLabel="Breadcrumb"}_handleItemClick=(t,e,r)=>{this.dispatchEvent(new CustomEvent("breadcrumb-click",{detail:{item:e,index:r,event:t},bubbles:!0,composed:!0}))};_renderBreadcrumbItem(t,e){const r=e===this.items.length-1,o=t.current||r;return l`
      <li class="ag-breadcrumb__item">
        ${t.href&&!o?l`
              <a
                href="${t.href}"
                class="ag-breadcrumb__link"
                @click="${a=>this._handleItemClick(a,t,e)}"
              >
                ${t.label}
              </a>
            `:o?l`
                <a
                  href="${c(t.href)}"
                  class="ag-breadcrumb__link"
                  aria-current="page"
                  @click="${a=>this._handleItemClick(a,t,e)}"
                >
                  ${t.label}
                </a>
              `:l`
                <span class="ag-breadcrumb__text">
                  ${t.label}
                </span>
              `}
      </li>
    `}render(){return!this.items||this.items.length===0?l``:l`
      <nav class="ag-breadcrumb" aria-label="${this.ariaLabel}">
        <ol class="ag-breadcrumb__list">
          ${this.items.map((t,e)=>this._renderBreadcrumbItem(t,e))}
        </ol>
      </nav>
    `}};C(b,"styles",m`
    /* FUNCTIONAL CSS ONLY - Almost Headless Approach */
    :host {
      display: block;
    }

    .ag-breadcrumb__list {
      display: flex;
      flex-wrap: wrap;
      padding: 0;
      margin: 0;
      list-style: none;
      white-space: nowrap;
    }

    .ag-breadcrumb__item {
      display: inline-flex;
      align-items: center;
    }

    .ag-breadcrumb__item + .ag-breadcrumb__item {
      padding-inline-start: var(--ag-space-2, 0.5rem);
    }

    .ag-breadcrumb__item + .ag-breadcrumb__item::before {
      content: "›";
      padding-inline-end: var(--ag-space-2, 0.5rem);
      color: var(--ag-text-secondary, #6b7280);
      speak: none;
      user-select: none;
    }

    /* Separator variants */
    :host([type="slash"]) .ag-breadcrumb__item + .ag-breadcrumb__item::before {
      content: "/";
    }

    :host([type="arrow"]) .ag-breadcrumb__item + .ag-breadcrumb__item::before {
      content: "→";
    }

    :host([type="bullet"]) .ag-breadcrumb__item + .ag-breadcrumb__item::before {
      content: "•";
    }

    .ag-breadcrumb__link {
      text-decoration: none;
      color: var(--ag-primary, #3b82f6);
      padding: var(--ag-space-1, 0.25rem);
      margin: calc(var(--ag-space-1, 0.25rem) * -1);
      border-radius: var(--ag-border-radius, 0.25rem);
      transition: all var(--ag-transition-duration, 200ms) ease;
    }

    .ag-breadcrumb__link:hover {
      color: var(--ag-primary-hover, #1d4ed8);
      background: var(--ag-background-secondary, rgba(59, 130, 246, 0.1));
    }

    .ag-breadcrumb__link:focus-visible {
      outline: var(--ag-focus-width, 2px) solid var(--ag-focus, #f59e0b);
      outline-offset: var(--ag-focus-offset, 2px);
    }

    /* Current page styling */
    .ag-breadcrumb__link[aria-current="page"] {
      color: var(--ag-text-primary, #111827);
      text-decoration: none;
      cursor: default;
    }

    .ag-breadcrumb__link[aria-current="page"]:hover {
      background: transparent;
    }

    /* Non-linked current page */
    .ag-breadcrumb__text {
      color: var(--ag-text-primary, #111827);
      padding: var(--ag-space-1, 0.25rem);
      margin: calc(var(--ag-space-1, 0.25rem) * -1);
    }
  `);g([i({type:Array})],b.prototype,"items",2);g([i({type:String,reflect:!0})],b.prototype,"type",2);g([i({type:String})],b.prototype,"ariaLabel",2);b=g([f("ag-breadcrumb")],b);export{s as a,b as c,u as e};
