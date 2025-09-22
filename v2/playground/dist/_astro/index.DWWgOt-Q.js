import{p as y,d as v}from"./lit-html-Bm_EwbrZ.B3KIfP8H.js";import{t as R}from"./lit-html-Bm_EwbrZ.B3KIfP8H.js";import{i as m,x as u,a as A,E as g}from"./lit-element.DPA3KJ4y.js";import{MinimalAccordion as P}from"./MinimalAccordion.DAwcHJU4.js";import{z as c,n as E}from"./_Input.bx2nze_F.js";import{t as j,e as L}from"./_Input.bx2nze_F.js";import{e as V}from"./_Tooltip.Dtj3g-9G.js";class h extends y{static version="2.0.0-experimental";static canonicalVersion="2.0.0-stable";static features={animations:!1,themes:!1,persistence:!1,analytics:!1};connectedCallback(){super.connectedCallback(),this.setAttribute("data-agnostic-version",h.version),this.setAttribute("data-canonical-version",h.canonicalVersion)}}class p extends v{static version="2.0.0-experimental";static canonicalVersion="2.0.0-stable";static features={animations:!1,themes:!1,persistence:!1,analytics:!1};connectedCallback(){super.connectedCallback(),this.setAttribute("data-agnostic-version",p.version),this.setAttribute("data-canonical-version",p.canonicalVersion)}_handleLegacyAPI(){}}customElements.define("ag-accordion-experimental",h);customElements.define("ag-accordion-item-experimental",p);const $={minimal:()=>({}),animated:()=>({}),themed:e=>({_themeHint:e})},F={expandAll:e=>{e.querySelectorAll("ag-accordion-item").forEach(t=>{"open"in t&&(t.open=!0)})},collapseAll:e=>{e.querySelectorAll("ag-accordion-item").forEach(t=>{"open"in t&&(t.open=!1)})},getStates:e=>Array.from(e.querySelectorAll("ag-accordion-item")).filter(t=>"open"in t&&"disabled"in t).map(t=>{const o=t;return{element:t,open:o.open,disabled:o.disabled}})},b=new Map;function I(e){b.set(e.name,e)}function D(e){b.forEach(t=>{try{t.enhance(e)}catch(o){console.warn(`Extension ${t.name} failed to apply:`,o)}})}class w extends m{constructor(){super(),this.addEventListener("accordion-keydown",this.handleAccordionKeydown)}get accordions(){return Array.from(this.children).filter(t=>"disabled"in t&&"focus"in t&&typeof t.focus=="function"&&!t.disabled)}handleAccordionKeydown=t=>{const o=t,n=this.accordions;if(n.length===0)return;const{key:i,accordionItem:d}=o.detail,s=n.indexOf(d);if(s===-1)return;let r=s;switch(i){case"ArrowDown":r=(s+1)%n.length;break;case"ArrowUp":r=(s-1+n.length)%n.length;break;case"Home":r=0;break;case"End":r=n.length-1;break;default:return}r!==s&&n[r].focus()};render(){return u`<slot></slot>`}}customElements.get("ag-accordion")||customElements.define("ag-accordion",w);var f=Object.defineProperty,k=Object.getOwnPropertyDescriptor,x=(e,t,o)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,l=(e,t,o,n)=>{for(var i=n>1?void 0:n?k(t,o):t,d=e.length-1,s;d>=0;d--)(s=e[d])&&(i=(n?s(t,o,i):s(i))||i);return n&&i&&f(t,o,i),i},_=(e,t,o)=>x(e,t+"",o);let a=class extends m{_previouslyFocusedElement=null;constructor(){super(),this.open=!1,this.heading="",this.description="",this.closeOnEscape=!0,this.closeOnBackdrop=!0,this.showCloseButton=!1}_handleKeydown=e=>{if(this.open){if(e.key==="Escape"&&this.closeOnEscape){e.preventDefault(),this.dispatchEvent(new CustomEvent("dialog-cancel",{bubbles:!0})),this.open=!1;return}e.key==="Tab"&&this._handleFocusTrap(e)}};_handleFocusTrap(e){const t=this._getFocusableElements();if(t.length===0)return;const o=t[0],n=t[t.length-1],i=document.activeElement;e.shiftKey?(i===o||!this._isElementInDialog(i))&&(e.preventDefault(),n.focus()):(i===n||!this._isElementInDialog(i))&&(e.preventDefault(),o.focus())}_isElementInDialog(e){return!e||!this.shadowRoot?!1:this.shadowRoot.contains(e)?!0:this.contains(e)}_handleBackdropClick=e=>{if(!this.closeOnBackdrop||!this.open)return;const t=e.target,o=this.shadowRoot?.querySelector(".dialog-backdrop"),n=this.shadowRoot?.querySelector(".dialog-container");t===o&&!n?.contains(t)&&(this.dispatchEvent(new CustomEvent("dialog-cancel",{bubbles:!0})),this.open=!1)};_handleCloseButtonClick=e=>{e.stopPropagation(),this.dispatchEvent(new CustomEvent("dialog-close",{bubbles:!0})),this.open=!1};_getFocusableElements(){if(!this.shadowRoot)return[];const e=["button:not([disabled])","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","a[href]",'[tabindex]:not([tabindex="-1"]):not([disabled])'].join(", "),t=Array.from(this.shadowRoot.querySelectorAll(e)),o=Array.from(this.querySelectorAll(e));return[...t,...o].filter(n=>n.offsetParent!==null&&!n.hasAttribute("disabled"))}_setInitialFocus(){const e=this._getFocusableElements();if(e.length>0)e[0].focus();else{const t=this.shadowRoot?.querySelector('[role="dialog"]');t&&(t.setAttribute("tabindex","-1"),t.focus())}}_restoreFocus(){this._previouslyFocusedElement&&typeof this._previouslyFocusedElement.focus=="function"&&this._previouslyFocusedElement.focus(),this._previouslyFocusedElement=null}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this._handleKeydown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this._handleKeydown),this.open&&this._restoreBackgroundScroll()}willUpdate(e){if(e.has("open")){const t=e.get("open");this.open&&!t?(this._previouslyFocusedElement=document.activeElement,this._preventBackgroundScroll(),this.dispatchEvent(new CustomEvent("dialog-open",{bubbles:!0}))):!this.open&&t&&(this.dispatchEvent(new CustomEvent("dialog-close",{bubbles:!0})),this._restoreBackgroundScroll(),this._restoreFocus())}}_preventBackgroundScroll(){const e=parseInt(document.body.getAttribute("data-dialog-count")||"0");e===0&&(document.body.setAttribute("data-dialog-original-overflow",document.body.style.overflow||""),document.body.style.overflow="hidden",document.body.setAttribute("data-dialog-scroll-locked","")),document.body.setAttribute("data-dialog-count",(e+1).toString())}_restoreBackgroundScroll(){const e=parseInt(document.body.getAttribute("data-dialog-count")||"0"),t=Math.max(0,e-1);if(document.body.setAttribute("data-dialog-count",t.toString()),t===0){const o=document.body.getAttribute("data-dialog-original-overflow");document.body.style.overflow=o||"",document.body.removeAttribute("data-dialog-original-overflow"),document.body.removeAttribute("data-dialog-scroll-locked"),document.body.removeAttribute("data-dialog-count")}}updated(e){e.has("open")&&this.open&&setTimeout(()=>this._setInitialFocus(),0)}render(){return u`
      <div
        class="dialog-backdrop"
        role="dialog"
        aria-modal="true"
        aria-labelledby=${this.heading?"dialog-heading":g}
        aria-label=${this.heading?g:"Dialog"}
        aria-describedby=${this.description?"dialog-description":g}
        @click=${this._handleBackdropClick}
      >
        <div class="dialog-container">
          <div class="dialog-header">
            <slot name="header">
              ${this.heading?u`<h2 id="dialog-heading">${this.heading}</h2>`:""}
            </slot>
            ${this.showCloseButton?u`
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
            ${this.description?u`<p id="dialog-description">${this.description}</p>`:""}
            <slot></slot>
          </div>
          <div class="dialog-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    `}};_(a,"styles",A`
    :host {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1000;
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
    }
  `);l([c({type:Boolean,reflect:!0})],a.prototype,"open",2);l([c({type:String})],a.prototype,"heading",2);l([c({type:String})],a.prototype,"description",2);l([c({type:Boolean})],a.prototype,"closeOnEscape",2);l([c({type:Boolean})],a.prototype,"closeOnBackdrop",2);l([c({type:Boolean})],a.prototype,"showCloseButton",2);a=l([E("ag-dialog")],a);export{h as Accordion,b as AccordionExtensions,w as AccordionGroup,p as AccordionItem,$ as AccordionPresets,F as AccordionUtils,j as AgButton,L as AgInput,a as AgnosticDialog,y as CanonicalAccordion,v as CanonicalAccordionItem,P as MinimalAccordion,V as Tooltip,D as applyExtensions,R as generateUniqueId,I as registerExtension};
