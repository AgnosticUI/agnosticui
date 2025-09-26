import{p as A,d as E}from"./_Accordion.B-PO82ap.js";import{t as M}from"./_Accordion.B-PO82ap.js";import{i as v,x as p,a as y,E as b}from"./lit-element.DMCH56eX.js";import{MinimalAccordion as Y}from"./MinimalAccordion.Dz3P1kUl.js";import{c as X,e as J,a as Q}from"./_Breadcrumb.BHQVzzo7.js";import{z as n,n as k,m}from"./_IconButton.ITUY3W3l.js";import{e as Z}from"./_IconButton.ITUY3W3l.js";import{e as te}from"./_Tooltip.BRWHCaJW.js";import"./lit-html-Bm_EwbrZ.BUqNPNwy.js";let B=class f extends A{static version="2.0.0-experimental";static canonicalVersion="2.0.0-stable";static features={animations:!1,themes:!1,persistence:!1,analytics:!1};connectedCallback(){super.connectedCallback(),this.setAttribute("data-agnostic-version",f.version),this.setAttribute("data-canonical-version",f.canonicalVersion)}};class u extends E{static version="2.0.0-experimental";static canonicalVersion="2.0.0-stable";static features={animations:!1,themes:!1,persistence:!1,analytics:!1};connectedCallback(){super.connectedCallback(),this.setAttribute("data-agnostic-version",u.version),this.setAttribute("data-canonical-version",u.canonicalVersion)}_handleLegacyAPI(){}}customElements.define("ag-accordion-experimental",B);customElements.define("ag-accordion-item-experimental",u);const P={minimal:()=>({}),animated:()=>({}),themed:e=>({_themeHint:e})},R={expandAll:e=>{e.querySelectorAll("ag-accordion-item").forEach(t=>{"open"in t&&(t.open=!0)})},collapseAll:e=>{e.querySelectorAll("ag-accordion-item").forEach(t=>{"open"in t&&(t.open=!1)})},getStates:e=>Array.from(e.querySelectorAll("ag-accordion-item")).filter(t=>"open"in t&&"disabled"in t).map(t=>{const o=t;return{element:t,open:o.open,disabled:o.disabled}})},x=new Map;function U(e){x.set(e.name,e)}function j(e){x.forEach(t=>{try{t.enhance(e)}catch(o){console.warn(`Extension ${t.name} failed to apply:`,o)}})}let C=class extends v{constructor(){super(),this.addEventListener("accordion-keydown",this.handleAccordionKeydown)}get accordions(){return Array.from(this.children).filter(t=>"disabled"in t&&"focus"in t&&typeof t.focus=="function"&&!t.disabled)}handleAccordionKeydown=t=>{const o=t,a=this.accordions;if(a.length===0)return;const{key:i,accordionItem:d}=o.detail,r=a.indexOf(d);if(r===-1)return;let h=r;switch(i){case"ArrowDown":h=(r+1)%a.length;break;case"ArrowUp":h=(r-1+a.length)%a.length;break;case"Home":h=0;break;case"End":h=a.length-1;break;default:return}h!==r&&a[h].focus()};render(){return p`<slot></slot>`}};customElements.get("ag-accordion")||customElements.define("ag-accordion",C);var w=Object.defineProperty,$=Object.getOwnPropertyDescriptor,S=(e,t,o)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,g=(e,t,o,a)=>{for(var i=a>1?void 0:a?$(t,o):t,d=e.length-1,r;d>=0;d--)(r=e[d])&&(i=(a?r(t,o,i):r(i))||i);return a&&i&&w(t,o,i),i},z=(e,t,o)=>S(e,t+"",o);let c=class extends v{_previouslyFocusedElement=null;constructor(){super(),this.open=!1,this.heading="",this.description="",this.closeOnEscape=!0,this.closeOnBackdrop=!0,this.showCloseButton=!1}_handleKeydown=e=>{if(this.open){if(e.key==="Escape"&&this.closeOnEscape){e.preventDefault(),this.dispatchEvent(new CustomEvent("dialog-cancel",{bubbles:!0})),this.open=!1;return}e.key==="Tab"&&this._handleFocusTrap(e)}};_handleFocusTrap(e){const t=this._getFocusableElements();if(t.length===0)return;const o=t[0],a=t[t.length-1],i=document.activeElement;e.shiftKey?(i===o||!this._isElementInDialog(i))&&(e.preventDefault(),a.focus()):(i===a||!this._isElementInDialog(i))&&(e.preventDefault(),o.focus())}_isElementInDialog(e){return!e||!this.shadowRoot?!1:this.shadowRoot.contains(e)?!0:this.contains(e)}_handleBackdropClick=e=>{if(!this.closeOnBackdrop||!this.open)return;const t=e.target,o=this.shadowRoot?.querySelector(".dialog-container"),a=o&&o.contains(t),i=this.contains(t);!a&&!i&&(this.dispatchEvent(new CustomEvent("dialog-cancel",{bubbles:!0})),this.open=!1)};_handleCloseButtonClick=e=>{e.stopPropagation(),this.dispatchEvent(new CustomEvent("dialog-close",{bubbles:!0})),this.open=!1};_getFocusableElements(){if(!this.shadowRoot)return[];const e=["button:not([disabled])","ag-button:not([disabled])","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","a[href]",'[tabindex]:not([tabindex="-1"]):not([disabled])'].join(", "),t=Array.from(this.shadowRoot.querySelectorAll(e)),o=Array.from(this.querySelectorAll(e));return[...t,...o].filter(a=>a.offsetParent!==null&&!a.hasAttribute("disabled"))}_setInitialFocus(){const e=this._getFocusableElements();if(e.length>0)e[0].focus();else{const t=this.shadowRoot?.querySelector('[role="dialog"]');t&&(t.setAttribute("tabindex","-1"),t.focus())}}_restoreFocus(){this._previouslyFocusedElement&&typeof this._previouslyFocusedElement.focus=="function"&&this._previouslyFocusedElement.focus(),this._previouslyFocusedElement=null}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this._handleKeydown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this._handleKeydown),this.open&&this._restoreBackgroundScroll()}willUpdate(e){if(e.has("open")){const t=e.get("open");this.open&&!t?(this._previouslyFocusedElement=document.activeElement,this._preventBackgroundScroll(),this.dispatchEvent(new CustomEvent("dialog-open",{bubbles:!0}))):!this.open&&t&&(this.dispatchEvent(new CustomEvent("dialog-close",{bubbles:!0})),this._restoreBackgroundScroll(),this._restoreFocus())}}_preventBackgroundScroll(){const e=parseInt(document.body.getAttribute("data-dialog-count")||"0");e===0&&(document.body.setAttribute("data-dialog-original-overflow",document.body.style.overflow||""),document.body.style.overflow="hidden",document.body.setAttribute("data-dialog-scroll-locked","")),document.body.setAttribute("data-dialog-count",(e+1).toString())}_restoreBackgroundScroll(){const e=parseInt(document.body.getAttribute("data-dialog-count")||"0"),t=Math.max(0,e-1);if(document.body.setAttribute("data-dialog-count",t.toString()),t===0){const o=document.body.getAttribute("data-dialog-original-overflow");document.body.style.overflow=o||"",document.body.removeAttribute("data-dialog-original-overflow"),document.body.removeAttribute("data-dialog-scroll-locked"),document.body.removeAttribute("data-dialog-count")}}updated(e){e.has("open")&&this.open&&setTimeout(()=>this._setInitialFocus(),0)}render(){return p`
      <div
        class="dialog-backdrop"
        role="dialog"
        aria-modal="true"
        aria-labelledby=${this.heading?"dialog-heading":b}
        aria-label=${this.heading?b:"Dialog"}
        aria-describedby=${this.description?"dialog-description":b}
        @click=${this._handleBackdropClick}
      >
        <div class="dialog-container">
          <div class="dialog-header">
            <slot name="header">
              ${this.heading?p`<h2 id="dialog-heading">${this.heading}</h2>`:""}
            </slot>
            ${this.showCloseButton?p`
              <button
                type="button"
                class="dialog-close-button"
                aria-label="Close dialog"
                @click=${this._handleCloseButtonClick}
              >
                ×
              </button>
            `:""}
          </div>
          <div class="dialog-content">
            ${this.description?p`<p id="dialog-description">${this.description}</p>`:""}
            <slot></slot>
          </div>
          <div class="dialog-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    `}};z(c,"styles",y`
    :host {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: var(--ag-z-index-modal, 1000);
    }

    :host([open]) {
      display: block;
    }

    .dialog-backdrop {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .dialog-container {
      max-width: 90vw;
      max-height: 90vh;
      position: relative;
      background: var(--dialog-bg, #ffffff);
      border: 1px solid var(--dialog-border, #e5e7eb);
      border-radius: var(--dialog-radius, 1rem);
      box-shadow: var(--dialog-shadow, 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04));
      padding: var(--dialog-padding, 1.5rem);
      margin: var(--dialog-margin, 1rem);
    }

    .dialog-header {
      margin-bottom: var(--dialog-header-spacing, 1rem);
    }

    .dialog-header h2 {
      margin: 0;
      font-size: var(--dialog-heading-size, 1.25rem);
      font-weight: var(--dialog-heading-weight, 600);
      color: var(--dialog-heading-color, inherit);
    }

    .dialog-content {
      margin-bottom: var(--dialog-content-spacing, 1rem);
    }

    .dialog-content:last-child {
      margin-bottom: 0;
    }

    .dialog-content p {
      margin: 0 0 1rem 0;
      color: var(--dialog-description-color, #6b7280);
    }

    .dialog-footer {
      margin-top: var(--dialog-footer-spacing, 1rem);
    }

    .dialog-footer:empty {
      margin-top: 0;
    }

    .dialog-close-button {
      position: absolute;
      top: var(--dialog-close-top, 1rem);
      right: var(--dialog-close-right, 1rem);
      background: none;
      border: none;
      font-size: var(--dialog-close-size, 1.5rem);
      cursor: pointer;
      color: var(--dialog-close-color, #6b7280);
      line-height: 1;
      padding: var(--dialog-close-padding, 0.25rem);
      border-radius: var(--dialog-close-radius, 0.25rem);
    }

    .dialog-close-button:hover {
      background: var(--dialog-close-hover-bg, #f3f4f6);
      color: var(--dialog-close-hover-color, #374151);
    }

    .dialog-close-button:focus-visible {
      outline: var(--ag-focus-width, 2px) solid var(--ag-focus, #2563eb);
      outline-offset: var(--ag-focus-offset, 2px);
    }
  `);g([n({type:Boolean,reflect:!0})],c.prototype,"open",2);g([n({type:String})],c.prototype,"heading",2);g([n({type:String})],c.prototype,"description",2);g([n({type:Boolean})],c.prototype,"closeOnEscape",2);g([n({type:Boolean})],c.prototype,"closeOnBackdrop",2);g([n({type:Boolean})],c.prototype,"showCloseButton",2);c=g([k("ag-dialog")],c);var _=Object.defineProperty,F=Object.getOwnPropertyDescriptor,O=(e,t,o)=>t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,l=(e,t,o,a)=>{for(var i=a>1?void 0:a?F(t,o):t,d=e.length-1,r;d>=0;d--)(r=e[d])&&(i=(a?r(t,o,i):r(i))||i);return a&&i&&_(t,o,i),i},I=(e,t,o)=>O(e,t+"",o);let s=class extends v{constructor(){super(),this.label="",this.checked=!1,this.size="md",this.variant="default",this.disabled=!1,this.readonly=!1,this.labelledBy="",this.describedBy="",this.name="",this.value=""}firstUpdated(){!this.label&&!this.labelledBy&&console.warn('AgToggle: label property is required for accessibility. Use either "label" or "labelledBy" prop.')}_handleClick=e=>{if(this.disabled||this.readonly){e.preventDefault();return}this.checked=!this.checked,this.dispatchEvent(new CustomEvent("toggle-change",{detail:{checked:this.checked,name:this.name,value:this.value},bubbles:!0,composed:!0}))};_handleKeydown=e=>{(e.key===" "||e.key==="Enter")&&(e.preventDefault(),this._handleClick(e))};render(){return p`
      <button
        role="switch"
        aria-checked="${this.checked}"
        aria-label="${m(this.labelledBy?void 0:this.label)}"
        aria-labelledby="${m(this.labelledBy||void 0)}"
        aria-describedby="${m(this.describedBy||void 0)}"
        ?disabled="${this.disabled}"
        class="ag-toggle ag-toggle--${this.size} ag-toggle--${this.variant}"
        @click="${this._handleClick}"
        @keydown="${this._handleKeydown}"
      >
        <span class="ag-toggle__track">
          <span class="ag-toggle__handle"></span>
        </span>

        <!-- Screen reader state indication -->
        <span class="visually-hidden">
          ${this.checked?"On":"Off"}
        </span>
      </button>
    `}};I(s,"styles",y`
    /* FUNCTIONAL CSS ONLY - Almost Headless Approach */
    :host {
      /* Inline-flex for integration with other form elements */
      display: inline-flex;
      align-items: center;
    }

    button {
      /* Reset browser button styles */
      margin: 0;
      border: none;
      background: transparent;
      cursor: pointer;
      font-family: inherit;
      padding: 0;

      /* Flexbox for track/handle layout */
      display: flex;
      align-items: center;
      position: relative;

      /* Touch target accessibility - minimum 44px */
      min-width: 44px;
      min-height: 44px;

      /* Focus management */
      border-radius: var(--ag-focus-border-radius, 9999px);
      transition: all var(--ag-transition-duration, 200ms) ease;
    }

    button:focus-visible {
      outline: var(--ag-focus-width, 2px) solid var(--ag-focus, #2563eb);
      outline-offset: var(--ag-focus-offset, 2px);
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
      width: var(--toggle-width, 24px);
      height: var(--toggle-height, 12px);

      /* Functional styling only */
      background: var(--toggle-track-bg, #d1d5db);
      border: 1px solid var(--toggle-track-border, transparent);
    }

    .ag-toggle__handle {
      /* Handle positioning and animation */
      position: absolute;
      top: 50%;
      left: 2px;
      transform: translateY(-50%);
      border-radius: 50%;
      transition: transform var(--ag-transition-duration, 200ms) ease;

      /* Default handle size */
      width: var(--handle-size, 10px);
      height: var(--handle-size, 10px);

      /* Functional styling only */
      background: var(--toggle-handle-bg, #ffffff);
      box-shadow: var(--toggle-handle-shadow, 0 1px 3px rgba(0, 0, 0, 0.1));
    }

    /* Checked state - handle moves to right */
    :host([checked]) .ag-toggle__handle {
      transform: translateY(-50%) translateX(calc(var(--toggle-width) - var(--handle-size) - 4px));
    }

    /* Size variants with 2:1 width:height ratio */
    :host([size="xs"]) {
      --toggle-width: 16px;
      --toggle-height: 8px;
      --handle-size: 6px;
    }

    :host([size="sm"]) {
      --toggle-width: 20px;
      --toggle-height: 10px;
      --handle-size: 8px;
    }

    :host([size="md"]) {
      --toggle-width: 24px;
      --toggle-height: 12px;
      --handle-size: 10px;
    }

    :host([size="lg"]) {
      --toggle-width: 32px;
      --toggle-height: 16px;
      --handle-size: 14px;
    }

    :host([size="xl"]) {
      --toggle-width: 40px;
      --toggle-height: 20px;
      --handle-size: 18px;
    }

    /* Variant styles - minimal functional differences */
    :host([variant="success"]) .ag-toggle__track {
      --toggle-track-bg: var(--ag-success, #10b981);
    }

    :host([variant="warning"]) .ag-toggle__track {
      --toggle-track-bg: var(--ag-warning, #f59e0b);
    }

    :host([variant="danger"]) .ag-toggle__track {
      --toggle-track-bg: var(--ag-danger, #ef4444);
    }

    /* Checked state coloring */
    :host([checked]) .ag-toggle__track {
      --toggle-track-bg: var(--ag-primary, #3b82f6);
    }

    :host([checked][variant="success"]) .ag-toggle__track {
      --toggle-track-bg: var(--ag-success, #10b981);
    }

    :host([checked][variant="warning"]) .ag-toggle__track {
      --toggle-track-bg: var(--ag-warning, #f59e0b);
    }

    :host([checked][variant="danger"]) .ag-toggle__track {
      --toggle-track-bg: var(--ag-danger, #ef4444);
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
  `);l([n({type:String})],s.prototype,"label",2);l([n({type:Boolean,reflect:!0})],s.prototype,"checked",2);l([n({type:String,reflect:!0})],s.prototype,"size",2);l([n({type:String,reflect:!0})],s.prototype,"variant",2);l([n({type:Boolean,reflect:!0})],s.prototype,"disabled",2);l([n({type:Boolean,reflect:!0})],s.prototype,"readonly",2);l([n({type:String})],s.prototype,"labelledBy",2);l([n({type:String})],s.prototype,"describedBy",2);l([n({type:String})],s.prototype,"name",2);l([n({type:String})],s.prototype,"value",2);s=l([k("ag-toggle")],s);export{B as Accordion,x as AccordionExtensions,C as AccordionGroup,u as AccordionItem,P as AccordionPresets,R as AccordionUtils,X as AgBreadcrumb,J as AgButton,Z as AgIconButton,Q as AgInput,s as AgToggle,c as AgnosticDialog,A as CanonicalAccordion,E as CanonicalAccordionItem,Y as MinimalAccordion,te as Tooltip,j as applyExtensions,M as generateUniqueId,U as registerExtension};
