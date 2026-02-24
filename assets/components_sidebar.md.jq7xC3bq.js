var _=Object.defineProperty;var X=(n,s,i)=>s in n?_(n,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[s]=i;var $=(n,s,i)=>X(n,typeof s!="symbol"?s+"":s,i);import{A as K}from"./chunks/AlphaWarning.yC7ZufpQ.js";import{i as D,z as F,a as E,x as v}from"./chunks/Button.CFkPNK98.js";import{s as S}from"./chunks/plugin-vue_export-helper-CHgC5LLL.lGy7RumW.js";import{d as q,c as m,o as C,r as y,_ as Z,C as b,j as a,G as t,w as o,Z as g,a as k,ae as O,t as J,k as V}from"./chunks/framework.NAAYCHZu.js";import{t as Y,k as Q}from"./chunks/VuePopover.BMQ5SAAK.js";import{c as ss}from"./chunks/createLucideIcon.B61Wqv9x.js";import{C as as}from"./chunks/chevron-right.D0fGB8u_.js";import{S as is}from"./chunks/settings.BZ9RHgDM.js";import{U as ns}from"./chunks/user.CKdyRrBx.js";import{F as ts}from"./chunks/folder.DLCdM0XY.js";import{H as es}from"./chunks/house.B1uosEEU.js";import{F as ls}from"./chunks/FrameworkExample.Cm-JbUj-.js";import"./chunks/state-CovhUvdr.DWhhlYib.js";import"./chunks/query-BykXNUlT.Pm7lu9c1.js";import"./chunks/floating-ui.dom-muqvZJIo.ByzMQtLc.js";import"./chunks/CloseButton.BYeeZuwt.js";import"./chunks/sdk.m.DhOmSlC9.js";import"./chunks/Icon.DjToxxjJ.js";/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rs=ss("command",[["path",{d:"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3",key:"11bfej"}]]);var os=Object.defineProperty,u=(n,s,i,p)=>{for(var e=void 0,l=n.length-1,h;l>=0;l--)(h=n[l])&&(e=h(s,i,e)||e);return e&&os(s,i,e),e};const H=class extends E{constructor(){super(),this._handleBackdropClick=()=>{this.open=!1,this._dispatchToggleEvent()},this._handleToggleClick=()=>{this.open=!this.open,this._dispatchToggleEvent()},this._handleHeaderToggleClick=()=>{this.disableCompactMode?(this.open=!this.open,this._dispatchToggleEvent()):(this.collapsed=!this.collapsed,this._dispatchCollapseEvent())},this._handleKeydown=s=>{s.key==="Escape"&&this.open&&(s.preventDefault(),this.open=!1,this._dispatchToggleEvent())},this.open=!1,this.collapsed=!1,this.position="left",this.ariaLabel="Navigation",this.variant="default",this.noTransition=!1,this.width=void 0,this.disableCompactMode=!1,this.showMobileToggle=!0,this.mobileTogglePosition="top-left",this.showHeaderToggle=!1}_isMobileViewport(){return window.innerWidth<1024}toggleCollapse(){this.collapsed=!this.collapsed,this._dispatchCollapseEvent()}toggleResponsive(){this.disableCompactMode?(this.open=!this.open,this._dispatchToggleEvent()):this._isMobileViewport()&&this.open?(this.open=!1,this._dispatchToggleEvent()):(this.collapsed=!this.collapsed,this._dispatchCollapseEvent())}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this._handleKeydown)}willUpdate(s){s.has("width")&&(this.width?this.style.setProperty("--ag-sidebar-width",this.width):this.style.removeProperty("--ag-sidebar-width")),s.has("open")&&(this.open?(document.addEventListener("keydown",this._handleKeydown),this.updateComplete.then(()=>this._trapFocus())):(document.removeEventListener("keydown",this._handleKeydown),this._releaseFocus()))}_dispatchToggleEvent(){var i;const s=new CustomEvent("ag-sidebar-toggle",{detail:{open:this.open},bubbles:!0,composed:!0});this.dispatchEvent(s),(i=this.onToggle)==null||i.call(this,s)}_dispatchCollapseEvent(){var i;const s=new CustomEvent("ag-sidebar-collapse",{detail:{collapsed:this.collapsed},bubbles:!0,composed:!0});this.dispatchEvent(s),(i=this.onCollapse)==null||i.call(this,s)}_findMainContent(){var s;return this.closest("main")||((s=this.parentElement)==null?void 0:s.querySelector("main"))||document.querySelector("main")||document.body}_trapFocus(){const s=this._findMainContent();s&&s!==this&&!s.contains(this)&&(s.setAttribute("inert",""),this._mainContentRef=s),this.updateComplete.then(()=>{var i,p;(p=(i=this.shadowRoot)==null?void 0:i.querySelector('button:not([disabled]), a[href], input:not([disabled]), [tabindex]:not([tabindex="-1"])'))==null||p.focus()})}_releaseFocus(){this._mainContentRef&&(this._mainContentRef.removeAttribute("inert"),this._mainContentRef=void 0)}_handleSlotClick(s){const i=s.composedPath()[0].closest("[aria-expanded]");if(i){const p=i.getAttribute("aria-expanded")==="true";i.setAttribute("aria-expanded",String(!p));const e=i.nextElementSibling;e&&e.tagName==="AG-SIDEBAR-NAV-SUBMENU"&&(p?e.removeAttribute("open"):e.setAttribute("open",""))}}_renderToggleIcon(){return v`
      <slot name="ag-toggle-icon">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.7314 1.00488C16.109 1.11926 18 2.98393 18 5.2666V12.7334C18 15.0898 15.9853 17 13.5 17H4.5C2.09247 17 0.126505 15.2074 0.00585938 12.9531L0 12.7334V5.2666C3.72355e-05 2.91022 2.01474 1 4.5 1H13.5L13.7314 1.00488ZM4.5 2.33301C2.79139 2.33301 1.40629 3.6466 1.40625 5.2666V12.7334C1.40629 14.3534 2.79139 15.667 4.5 15.667H4.625V2.33301H4.5ZM6.03125 15.667H13.5C15.2086 15.667 16.5937 14.3534 16.5938 12.7334V5.2666C16.5937 3.6466 15.2086 2.33301 13.5 2.33301H6.03125V15.667Z" fill="currentColor"/>
        </svg>
      </slot>
    `}render(){return v`
      <div part="ag-sidebar-backdrop" class="backdrop" @click=${this._handleBackdropClick} aria-hidden="true"></div>
      
      <button
        part="ag-sidebar-toggle-button"
        class="toggle-button ${this.mobileTogglePosition}"
        @click=${this._handleToggleClick}
        aria-label="${this.open?"Close sidebar":"Open sidebar"}"
        aria-expanded="${this.open}"
      >
        ${this._renderToggleIcon()}
      </button>

      <aside part="ag-sidebar-container" class="sidebar-container" aria-label=${this.ariaLabel}>
        <div part="ag-sidebar-header" class="sidebar-header">
          ${this.showHeaderToggle?v`
            <div class="header-wrapper">
              <div class="header-content">
                <slot name="ag-header">
                  <!-- Fallback: if no "header" slot, use composable parts -->
                  <div class="header-layout">
                    <div class="header-start">
                      <slot name="ag-header-start"></slot>
                    </div>
                    <div class="header-end">
                      <slot name="ag-header-end"></slot>
                    </div>
                  </div>
                </slot>
              </div>
              <button
                part="ag-sidebar-header-toggle"
                class="header-toggle-button"
                @click=${this._handleHeaderToggleClick}
                aria-label="${this.collapsed?"Expand sidebar":"Close sidebar"}"
              >
                ${this._renderToggleIcon()}
              </button>
            </div>
          `:v`
            <slot name="ag-header">
              <!-- Fallback: if no "header" slot, use composable parts -->
              <div class="header-layout">
                <div class="header-start">
                  <slot name="ag-header-start"></slot>
                </div>
                <div class="header-end">
                  <div class="header-end-content">
                    <slot name="ag-header-end"></slot>
                  </div>
                  <slot name="ag-header-toggle"></slot>
                </div>
              </div>
            </slot>
          `}
        </div>
        <div part="ag-sidebar-content" class="sidebar-content" @click=${this._handleSlotClick}>
          <slot></slot>
        </div>
        <div part="ag-sidebar-footer" class="sidebar-footer">
          <slot name="ag-footer"></slot>
        </div>
      </aside>
    `}};H.styles=D`
    :host {
      display: block;
      position: relative;
      --ag-sidebar-width: 18rem;
      --ag-sidebar-width-collapsed: 3rem;
      --ag-sidebar-padding: var(--ag-space-2, 0.5rem);
      --ag-sidebar-background: var(--ag-background-primary, #ffffff);
      --ag-sidebar-border: var(--ag-border, #e5e7eb);
      --ag-sidebar-transition-duration: var(--ag-motion-duration-normal, 200ms);
      --ag-sidebar-transition-easing: var(--ag-motion-easing-standard, ease-in-out);
      --ag-sidebar-z-index: var(--ag-z-sidebar, 1000);
      --ag-sidebar-backdrop-z-index: var(--ag-z-sidebar-backdrop, 999);
      --ag-sidebar-toggle-z-index: var(--ag-z-sidebar-toggle, 1001);

    }

    .sidebar-container {
      display: flex;
      flex-direction: column;
      height: 100%;
      background: var(--ag-sidebar-background);
    }
    
    :host([collapsed]) {
      overflow: visible;
    }
      
    /* Allow popovers to escape sidebar in collapsed mode */
    :host([collapsed]) .sidebar-content {
      overflow: visible;
      /* Center icon button items in the compact sidebar */
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    /* Set collapsed width globally so it applies before media queries kick in */
    :host([collapsed]) .sidebar-container {
      width: var(--ag-sidebar-width-collapsed);
      overflow: visible;
    }

    /* Variant: Bordered */
    :host([variant="bordered"]) .sidebar-container {
      border-inline-end: 1px solid var(--ag-sidebar-border);
    }
    
    :host([variant="bordered"][position="right"]) .sidebar-container {
      border-inline-end: none;
      border-inline-start: 1px solid var(--ag-sidebar-border);
    }

    /* Variant: Elevated */
    :host([variant="elevated"]) .sidebar-container {
      box-shadow: var(--ag-shadow-lg, 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05));
      z-index: 1;
      border-inline-end: none;
    }

    /* No Transition */
    :host([no-transition]) *,
    :host([no-transition]) .sidebar-container,
    :host([no-transition]) .backdrop,
    :host([no-transition]) .header-content,
    :host([no-transition]) .toggle-button {
      transition: none !important;
    }

    .sidebar-header, .sidebar-footer {
      padding-block: var(--ag-space-2);
      padding-inline: var(--ag-space-4);
      flex-shrink: 0;
      transition: opacity var(--ag-sidebar-transition-duration) var(--ag-sidebar-transition-easing),
                  padding var(--ag-sidebar-transition-duration) var(--ag-sidebar-transition-easing);
    }
    .sidebar-header {
      border-bottom: 1px solid var(--ag-sidebar-border);
    }

    .sidebar-footer {
      border-top: 1px solid var(--ag-sidebar-border);
      overflow: hidden;
      white-space: nowrap;
    }

    /* Collapsed state: fade out header content and footer */
    :host([collapsed]) .header-content,
    :host([collapsed]) .sidebar-footer {
      opacity: 0;
      pointer-events: none;
    }
    
    /* Composable header layout system */
    .header-layout {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--ag-space-2);
      width: 100%;
    }
    :host([collapsed]) .header-layout {
      gap: unset;
    }

    .header-start {
      flex: 1;
      min-width: 0; /* Allow text truncation */
      overflow: hidden;
      transition: opacity var(--ag-sidebar-transition-duration) var(--ag-sidebar-transition-easing);
    }

    .header-end {
      display: flex;
      align-items: center;
      gap: var(--ag-space-2);
      flex-shrink: 0;
      transition: opacity var(--ag-sidebar-transition-duration) var(--ag-sidebar-transition-easing);
    }

    /* Collapsed state: hide start content and header-end-content, but keep ag-header-toggle visible */
    :host([collapsed]) .header-start {
      opacity: 0;
      pointer-events: none;
    }

    :host([collapsed]) .header-end-content {
      display: none;
    }

    :host([collapsed]) .header-layout {
      justify-content: center;
    }
    
    /* Header layout wrapper for showHeaderToggle. Base wrapper - no gap */
    .header-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }

    /* Gap only when expanded */
    :host(:not([collapsed])) .header-wrapper {
      gap: var(--ag-space-2);
    }

    .header-content {
      flex: 1;
      min-width: 0;
      opacity: 1;
      transition: opacity var(--ag-sidebar-transition-duration) var(--ag-sidebar-transition-easing);
    }
    
    /* Collapsed state: fade out header content */
    :host([collapsed]) .header-content {
      display: none;
    }
    
    /* Collapsed state: center the toggle button */
    :host([collapsed]) .header-wrapper {
      justify-content: center;
    }
    
    /* Built-in header toggle button styling */
    .header-toggle-button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--ag-space-7);
      height: var(--ag-space-7);
      border: 1px solid var(--ag-border-subtle);
      border-radius: 0.375rem;
      background: var(--ag-background-secondary);
      color: var(--ag-text-primary);
      cursor: pointer;
      transition: background 0.15s;
      flex-shrink: 0;
    }
    
    .header-toggle-button:hover {
      background: var(--ag-background-tertiary);
    }
    
    .header-toggle-button:active {
      transform: scale(0.95);
    }
    
    .header-toggle-button svg {
      width: 18px;
      height: 18px;
      fill: currentColor;
    }
    


    .sidebar-content {
      flex: 1;
      overflow-y: auto;
      padding: var(--ag-sidebar-padding);
    }

    .backdrop {
      display: none;
    }

    .toggle-button {
      display: none;
    }

    /* ===========================================
       MOBILE: Below breakpoint
       Overlay drawer that slides in/out
       =========================================== */
    @media (max-width: 1023px) {
      .sidebar-container {
        position: fixed;
        top: 0;
        bottom: 0;
        z-index: var(--ag-sidebar-z-index);
        transition: transform var(--ag-sidebar-transition-duration) var(--ag-sidebar-transition-easing);
      }
      
      /* Full width in mobile when NOT collapsed */
      :host(:not([collapsed])) .sidebar-container {
        width: var(--ag-sidebar-width);
      }
      
      :host([position="left"]) .sidebar-container {
        inset-inline-start: 0;
        transform: translateX(-100%);
      }
      
      :host([position="right"]) .sidebar-container {
        inset-inline-end: 0;
        transform: translateX(100%);
      }

      /* RTL Support */
      :host-context([dir="rtl"]):host([position="left"]) .sidebar-container {
        transform: translateX(100%);
      }
      :host-context([dir="rtl"]):host([position="right"]) .sidebar-container {
        transform: translateX(-100%);
      }
      
      :host([open]) .sidebar-container {
        transform: translateX(0);
      }

      .backdrop {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: var(--ag-sidebar-backdrop-z-index);
        opacity: 0;
        pointer-events: none;
        transition: opacity var(--ag-sidebar-transition-duration) var(--ag-sidebar-transition-easing);
      }

      :host([open]) .backdrop {
        display: block;
        opacity: 1;
        pointer-events: auto;
      }
    }

    /* ===========================================
       GLOBAL: Toggle Button Styles
       Shared between mobile overlay and desktop disable-compact-mode
       =========================================== */
    :host([show-mobile-toggle]) .toggle-button {
      display: flex;
      position: fixed;
      width: var(--ag-space-8);
      height: var(--ag-space-8);
      border-radius: 50%;
      background: var(--ag-sidebar-background);
      border: 1px solid var(--ag-sidebar-border);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
      cursor: pointer;
      z-index: var(--ag-sidebar-toggle-z-index);
      align-items: center;
      justify-content: center;
      transition: opacity var(--ag-sidebar-transition-duration) var(--ag-sidebar-transition-easing);
      
      /* Default hidden on desktop unless disable-compact-mode is active */
      opacity: 0;
      pointer-events: none;
    }

    /* Show toggle on mobile */
    @media (max-width: 1023px) {
      :host([show-mobile-toggle]) .toggle-button {
        opacity: 1;
        pointer-events: auto;
      }
    }

    /* Show toggle on desktop ONLY if disable-compact-mode is active */
    @media (min-width: 1024px) {
      :host([disable-compact-mode][show-mobile-toggle]) .toggle-button {
        opacity: 1;
        pointer-events: auto;
      }
    }

    /* Always hide toggle when sidebar is open - consumer's header button takes over */
    :host([show-mobile-toggle][open]) .toggle-button {
      opacity: 0 !important;
      pointer-events: none !important;
    }

    .toggle-button:hover {
      background: var(--ag-background-hover, #f3f4f6);
    }

    .toggle-button:active {
      transform: scale(0.95);
    }

    .toggle-button svg {
      width: 18px;
      height: 18px;
      fill: currentColor;
    }
    /* Ensure consumer-provided slotted SVGs match the fallback sizing */
    .toggle-button ::slotted(svg) {
      width: 18px;
      height: 18px;
      fill: currentColor;
      display: block;
    }

    .toggle-button.top-left { top: var(--ag-space-4); inset-inline-start: var(--ag-space-4); }
    .toggle-button.top-right { top: var(--ag-space-4); inset-inline-end: var(--ag-space-4); }
    .toggle-button.bottom-left { bottom: var(--ag-space-4); inset-inline-start: var(--ag-space-4); }
    .toggle-button.bottom-right { bottom: var(--ag-space-4); inset-inline-end: var(--ag-space-4); }

    /* ===========================================
       DESKTOP: At/above breakpoint
       Static sidebar with expand/collapse
       =========================================== */
    @media (min-width: 1024px) {
      .sidebar-container {
        position: relative;
      }
      
      :host(:not([collapsed])) .sidebar-container {
        width: var(--ag-sidebar-width);
        transition: width var(--ag-sidebar-transition-duration) var(--ag-sidebar-transition-easing);
      }
      
      :host([collapsed]) .sidebar-container {
        width: var(--ag-sidebar-width-collapsed);
        transition: width var(--ag-sidebar-transition-duration) var(--ag-sidebar-transition-easing);
      }
      
      /* When compact mode is disabled, ignore collapsed state on desktop */
      :host([disable-compact-mode]) .sidebar-container,
      :host([disable-compact-mode][collapsed]) .sidebar-container {
        position: fixed;
        inset-inline-start: 0;
        top: 0;
        height: 100%;
        width: var(--ag-sidebar-width);
        transform: translateX(0);
        transition: transform var(--ag-sidebar-transition-duration) var(--ag-sidebar-transition-easing);
      }
      
      :host([disable-compact-mode]:not([open])) .sidebar-container,
      :host([disable-compact-mode][collapsed]:not([open])) .sidebar-container {
        transform: translateX(-100%);
      }
      
      :host([disable-compact-mode][position="right"]:not([open])) .sidebar-container,
      :host([disable-compact-mode][collapsed][position="right"]:not([open])) .sidebar-container {
        transform: translateX(100%);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .sidebar-container, .backdrop, .toggle-button, .header-content {
        transition: none !important;
      }
    }
  `;let c=H;u([F({type:Boolean,reflect:!0})],c.prototype,"open");u([F({type:Boolean,reflect:!0})],c.prototype,"collapsed");u([F({type:String,reflect:!0})],c.prototype,"position");u([F({type:String,attribute:"aria-label"})],c.prototype,"ariaLabel");u([F({type:String,reflect:!0})],c.prototype,"variant");u([F({type:Boolean,attribute:"no-transition",reflect:!0})],c.prototype,"noTransition");u([F({type:String})],c.prototype,"width");u([F({type:Boolean,attribute:"disable-compact-mode",reflect:!0})],c.prototype,"disableCompactMode");u([F({type:Boolean,attribute:"show-mobile-toggle",reflect:!0})],c.prototype,"showMobileToggle");u([F({type:String,attribute:"mobile-toggle-position"})],c.prototype,"mobileTogglePosition");u([F({type:Boolean,attribute:"show-header-toggle",reflect:!0})],c.prototype,"showHeaderToggle");u([F({attribute:!1})],c.prototype,"onToggle");u([F({attribute:!1})],c.prototype,"onCollapse");customElements.get("ag-sidebar")||customElements.define("ag-sidebar",c);const ps=q({name:"VueSidebar",props:{open:{type:Boolean,default:!1},collapsed:{type:Boolean,default:!1},position:{type:String,default:"left"},ariaLabel:{type:String,default:"Navigation"},variant:{type:String,default:"default"},noTransition:{type:Boolean,default:!1},width:{type:String,default:void 0},disableCompactMode:{type:Boolean,default:!1},showMobileToggle:{type:Boolean,default:!0},mobileTogglePosition:{type:String,default:"top-left"},showHeaderToggle:{type:Boolean,default:!1}},emits:["update:open","update:collapsed"],setup(n,{emit:s}){return{onToggle:i=>{s("update:open",i.detail.open)},onCollapse:i=>{s("update:collapsed",i.detail.collapsed)}}}}),hs=[".open",".collapsed","position","aria-label","variant",".noTransition","width",".disableCompactMode",".showMobileToggle","mobile-toggle-position",".showHeaderToggle"];function ds(n,s,i,p,e,l){return C(),m("ag-sidebar",{".open":n.open,".collapsed":n.collapsed,position:n.position,"aria-label":n.ariaLabel,variant:n.variant,".noTransition":n.noTransition,width:n.width,".disableCompactMode":n.disableCompactMode,".showMobileToggle":n.showMobileToggle,"mobile-toggle-position":n.mobileTogglePosition,".showHeaderToggle":n.showHeaderToggle,onAgSidebarToggle:s[0]||(s[0]=(...h)=>n.onToggle&&n.onToggle(...h)),onAgSidebarCollapse:s[1]||(s[1]=(...h)=>n.onCollapse&&n.onCollapse(...h))},[y(n.$slots,"default"),y(n.$slots,"ag-header"),y(n.$slots,"ag-header-start"),y(n.$slots,"ag-header-end"),y(n.$slots,"ag-header-toggle"),y(n.$slots,"ag-toggle-icon"),y(n.$slots,"ag-footer")],40,hs)}const ks=S(ps,[["render",ds]]),R=class extends E{render(){return v`
      <slot></slot>
    `}};R.hostAttributes={aria:{role:"list"},class:"ag-sidebar-nav",part:"ag-sidebar-nav","aria-label":"Sidebar Navigation Menu"},R.styles=[D`
      :host {
        padding: 0;
        margin: 0;
      }
    `];let gs=R;const j=class extends E{render(){return v`
      <slot></slot>
    `}};j.hostAttributes={class:"ag-sidebar-nav-item",part:"ag-sidebar-nav-item"},j.styles=[Y,D`
      :host {
        padding: 0;
        margin: 0;
        margin-block-end: var(--ag-space-1);
      }
        
      /* Nav-specific additions (flat for consistency) */
      ::slotted(.nav-button) {
        justify-content: space-between; /* For chevrons */
      }
    `];let Fs=j;const L=D`
  ::slotted(.nav-sublink) {
    display: block;
    padding: var(--ag-space-2);
    border-radius: var(--ag-radius-sm);
    text-decoration: none;
    color: var(--ag-text-primary);
    font-size: var(--ag-font-size-sm);
    transition: background 0.15s;
        white-space: nowrap;
  }
  ::slotted(.nav-sublink:hover) {
    background: var(--ag-background-secondary);
  }
  ::slotted(.nav-sublink.active) {
    background: var(--ag-primary-background);
    color: var(--ag-primary-text);
    font-weight: 500;
  }
`;var cs=Object.defineProperty,us=(n,s,i,p)=>{for(var e=void 0,l=n.length-1,h;l>=0;l--)(h=n[l])&&(e=h(s,i,e)||e);return e&&cs(s,i,e),e};const M=class extends E{constructor(){super(...arguments),this.open=!1}render(){return v`
      <slot></slot>
    `}};M.hostAttributes={class:"ag-sidebar-nav-submenu",part:"ag-sidebar-nav-submenu","aria-label":"Sidebar Navigation Menu"},M.styles=[L,D`
      :host {
        display: none;
        margin-inline-start: 0.875rem;
        border-inline-start: 1px solid var(--ag-border-subtle);
        padding-inline-start: 0.625rem;
        margin-block-start: var(--ag-space-1);
        margin-block-end: var(--ag-space-1);
      }

      :host([open]) {
        display: block;
      }
    `];let U=M;us([F({type:Boolean,reflect:!0})],U.prototype,"open");const z=class extends E{render(){return v`
      <slot></slot>
    `}};z.hostAttributes={class:"ag-sidebar-nav-popover-submenu",part:"ag-sidebar-nav-popover-submenu"},z.styles=[L];let bs=z;customElements.get("ag-sidebar-nav")||customElements.define("ag-sidebar-nav",gs);customElements.get("ag-sidebar-nav-item")||customElements.define("ag-sidebar-nav-item",Fs);customElements.get("ag-sidebar-nav-submenu")||customElements.define("ag-sidebar-nav-submenu",U);customElements.get("ag-sidebar-nav-popover-submenu")||customElements.define("ag-sidebar-nav-popover-submenu",bs);const ys=q({name:"VueSidebarNav"});function vs(n,s,i,p,e,l){return C(),m("ag-sidebar-nav",null,[y(n.$slots,"default")])}const ms=S(ys,[["render",vs]]),Cs=q({name:"VueSidebarNavItem"});function fs(n,s,i,p,e,l){return C(),m("ag-sidebar-nav-item",null,[y(n.$slots,"default")])}const Bs=S(Cs,[["render",fs]]),Es=q({name:"VueSidebarNavSubmenu",props:{open:{type:Boolean,default:!1}},emits:["update:open"],setup(n,{emit:s}){return{onOpenChange:i=>{s("update:open",i)}}}}),As=["open"];function ws(n,s,i,p,e,l){return C(),m("ag-sidebar-nav-submenu",{open:n.open,"onUpdate:open":s[0]||(s[0]=(...h)=>n.onOpenChange&&n.onOpenChange(...h))},[y(n.$slots,"default")],40,As)}const xs=S(Es,[["render",ws]]),Ds=q({name:"VueSidebarNavPopoverSubmenu"});function Ss(n,s,i,p,e,l){return C(),m("ag-sidebar-nav-popover-submenu",null,[y(n.$slots,"default")])}const qs=S(Ds,[["render",Ss]]),Ns={name:"SidebarExamples",components:{VueSidebar:ks,VueSidebarNav:ms,VueSidebarNavItem:Bs,VueSidebarNavSubmenu:xs,VueSidebarNavPopoverSubmenu:qs,VuePopover:Q,Home:es,Folder:ts,User:ns,Settings:is,ChevronRight:as,Command:rs},data(){return{sidebar1:{isOpen:!0,isCollapsed:!1},sidebar2:{isOpen:!0,isCollapsed:!1},sidebar3:{isOpen:!0,isCollapsed:!1},sidebar4:{isOpen:!0},sidebar5:{isOpen:!0,isCollapsed:!1,activeRoute:"/dashboard"}}},mounted(){const n="sidebar-nav-styles";if(!document.getElementById(n)){const s=document.createElement("style");s.id=n,s.textContent=`
        /* Overrides VitePress theme - resets .vp-doc h2 styles */
        ag-sidebar h2[slot="ag-header-start"] {
          border-top: none !important;
          padding-top: 0 !important;
          padding-bottom: 0 !important;
          margin-top: 0 !important;
          margin-bottom: 0 !important;
          letter-spacing: normal !important;
          line-height: normal !important;
          overflow-wrap: normal !important;
          white-space: nowrap !important;
        }

        /* Ensure sidebars start in expanded mode in examples */
        ag-sidebar:not([collapsed]) {
          width: var(--ag-sidebar-width, 280px);
        }

        /* Fix disable-compact-mode sidebar visibility */
        ag-sidebar[disable-compact-mode][open] {
          display: flex !important;
          visibility: visible !important;
          opacity: 1 !important;
          width: var(--ag-sidebar-width, 280px) !important;
          transform: none !important;
        }

        /* Overrides VitePress theme - resets .vp-doc a styles */
        ag-sidebar .nav-sublink {
          font-weight: normal !important;
          color: inherit !important;
          text-decoration: none !important;
          text-underline-offset: unset !important;
        }

        .nav-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--ag-space-3);
          position: relative;
          padding: var(--ag-space-2) var(--ag-space-3);
          margin-block-end: var(--ag-space-1);
          border: none;
          background: none;
          cursor: pointer;
          width: 100%;
          text-align: left;
          border-radius: var(--ag-radius-sm);
          transition: background var(--ag-fx-duration-sm);
          color: inherit;
        }

        .nav-button svg {
          flex-shrink: 0;
        }

        .nav-button:hover {
          background: var(--ag-background-secondary);
        }

        .nav-button.active {
          background: var(--ag-primary-background);
          color: var(--ag-primary-text);
          font-weight: 500;
        }

        .nav-button .chevron {
          transition: transform var(--ag-fx-duration-md);
          margin-left: auto;
        }

        .nav-button[aria-expanded="true"] .chevron {
          transform: rotate(90deg);
        }

        .nav-button .collapsed-indicator {
          display: none;
          position: absolute;
          bottom: -1px;
          right: -1px;
          width: var(--ag-space-3);
          height: var(--ag-space-3);
        }

        .nav-button .collapsed-indicator svg {
          color: var(--ag-text-muted);
          transform: rotate(315deg);
        }

        .nav-button .nav-label {
          flex-grow: 1;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .nav-button .nav-label,
        .nav-button .chevron {
          transition: opacity var(--ag-sidebar-transition-duration) var(--ag-sidebar-transition-easing);
          white-space: nowrap;
        }

        ag-sidebar[collapsed] .nav-button {
          width: auto;
          padding: var(--ag-space-2);
        }

        ag-sidebar[collapsed] .nav-button .nav-label,
        ag-sidebar[collapsed] .nav-button .chevron {
          opacity: 0;
          pointer-events: none;
          display: none;
        }

        ag-sidebar[collapsed] .nav-button[aria-expanded] .collapsed-indicator {
          display: block;
        }

        .nav-button-collapsed::part(ag-popover-body) {
          padding: var(--ag-space-1);
        }

        ag-sidebar[collapsed] ag-sidebar-nav-submenu:not(.popover-submenu),
        ag-sidebar:not([collapsed]) ag-popover,
        ag-sidebar[collapsed] .nav-button-expanded,
        ag-sidebar:not([collapsed]) .nav-button-collapsed {
          display: none !important;
        }

        /* Fix popover centering in collapsed mode - ag-popover is inline-block by default */
        ag-sidebar[collapsed] ag-popover.nav-button-collapsed {
          display: block !important;
        }

        .nav-sublink {
          display: block;
          padding: var(--ag-space-2) var(--ag-space-3);
          margin-block-end: var(--ag-space-1);
          color: inherit;
          text-decoration: none;
          border-radius: var(--ag-radius-sm);
          transition: background var(--ag-fx-duration-sm);
        }

        .nav-sublink:hover {
          background: var(--ag-background-secondary);
        }

        /* Active state styles for navigation tracking */
        .nav-button.active,
        .nav-sublink.active {
          background: var(--ag-primary-background);
          color: var(--ag-primary-text);
          font-weight: 500;
        }
      `,document.head.appendChild(s)}},methods:{toggleSidebar1Collapse(n){const s=n.target.closest("ag-sidebar");s&&s.toggleCollapse&&s.toggleCollapse()},toggleSidebar2Collapse(n){const s=n.target.closest("ag-sidebar");s&&s.toggleCollapse&&s.toggleCollapse()},toggleSidebar4Responsive(n){const s=n.target.closest("ag-sidebar");s&&s.toggleResponsive&&s.toggleResponsive()},handleSubmenuToggle(n){n.preventDefault(),n.stopPropagation();const s=n.currentTarget,i=s.closest("ag-sidebar-nav-item"),p=i==null?void 0:i.querySelector("ag-sidebar-nav-submenu");if(!p)return;s.getAttribute("aria-expanded")==="true"?(s.setAttribute("aria-expanded","false"),p.removeAttribute("open")):(s.setAttribute("aria-expanded","true"),p.setAttribute("open",""))},toggleSidebar5Collapse(n){const s=n.target.closest("ag-sidebar");s&&s.toggleCollapse&&s.toggleCollapse()},handleNavClick(n,s){s.preventDefault(),this.sidebar5.activeRoute=n;const i=s.target.closest("ag-sidebar"),p=i==null?void 0:i.querySelectorAll(".nav-button");p==null||p.forEach(l=>{const h=l.getAttribute("data-route")===n;l.classList.toggle("active",h),h?l.setAttribute("aria-current","page"):l.removeAttribute("aria-current")});const e=i==null?void 0:i.querySelectorAll(".nav-sublink");e==null||e.forEach(l=>{const h=l.getAttribute("data-route")===n;l.classList.toggle("active",h),h?l.setAttribute("aria-current","page"):l.removeAttribute("aria-current")})},handleSettingsClick(n){this.handleNavClick("/settings",n),this.handleSubmenuToggle(n)}}},Ps={class:"mbe6"},Is={style:{position:"relative",display:"flex",height:"500px",border:"1px solid var(--ag-border-color)","border-radius":"0.5rem",overflow:"hidden",contain:"layout"}},Ts={type:"button",class:"nav-button active","aria-current":"page"},Vs={class:"chevron"},Rs={slot:"trigger",type:"button",class:"nav-button"},js={type:"button",class:"nav-button"},Ms={class:"chevron"},zs={slot:"trigger",type:"button",class:"nav-button"},$s={class:"mbe6"},Os={style:{position:"relative",display:"flex",height:"500px",border:"1px solid var(--ag-border-color)","border-radius":"0.5rem",overflow:"hidden",contain:"layout"}},Hs={type:"button",slot:"ag-header-end",onClick:()=>{},style:{background:"none",border:"none",padding:"8px",cursor:"pointer",display:"flex","align-items":"center",color:"inherit","border-radius":"0.25rem"},"aria-label":"Settings",title:"Settings"},Ls={type:"button",class:"nav-button active","aria-current":"page"},Us={type:"button",class:"nav-button"},Ws={type:"button",class:"nav-button"},Gs={class:"mbe6"},_s={style:{position:"relative",display:"flex",height:"500px",border:"1px solid var(--ag-border-color)","border-radius":"0.5rem",overflow:"hidden",contain:"layout"}},Xs={type:"button",class:"nav-button active","aria-current":"page"},Ks={type:"button",class:"nav-button"},Zs={type:"button",class:"nav-button"},Js={class:"mbe6"},Ys={style:{position:"relative",display:"flex",height:"500px",border:"1px solid var(--ag-border-color)","border-radius":"0.5rem",overflow:"hidden",contain:"layout"}},Qs={type:"button",class:"nav-button active","aria-current":"page"},sa={type:"button",class:"nav-button"},aa={type:"button",class:"nav-button"},ia={type:"button",class:"nav-button"},na={class:"mbe6"},ta={style:{position:"relative",display:"flex",height:"500px",border:"1px solid var(--ag-border-color)","border-radius":"0.5rem",overflow:"hidden",contain:"layout"}},ea={class:"chevron"},la={style:{flex:"1",padding:"2rem",overflow:"auto",background:"var(--ag-background)"}};function ra(n,s,i,p,e,l){const h=b("Home"),d=b("VueSidebarNavItem"),f=b("Folder"),N=b("ChevronRight"),P=b("VueSidebarNavPopoverSubmenu"),I=b("VuePopover"),T=b("VueSidebarNavSubmenu"),A=b("User"),B=b("Settings"),w=b("VueSidebarNav"),x=b("VueSidebar"),G=b("Command");return C(),m("section",null,[s[83]||(s[83]=a("div",{class:"mbe4"},[a("h2",null,"Default Sidebar with Navigation"),a("p",null," Demonstrates the sidebar with navigation items, submenus, and both expanded/collapsed states. Click the header toggle to collapse into rail mode (icon-only). ")],-1)),a("div",Ps,[a("div",Is,[t(x,{open:e.sidebar1.isOpen,collapsed:e.sidebar1.isCollapsed,"show-mobile-toggle":!0,"onUpdate:open":s[17]||(s[17]=r=>e.sidebar1.isOpen=r),"onUpdate:collapsed":s[18]||(s[18]=r=>e.sidebar1.isCollapsed=r)},{default:o(()=>[s[49]||(s[49]=a("h2",{slot:"ag-header-start",style:{margin:"0","font-size":"1.125rem","font-weight":"600"}}," Dashboard ",-1)),a("button",{type:"button",slot:"ag-header-toggle",onClick:s[0]||(s[0]=(...r)=>l.toggleSidebar1Collapse&&l.toggleSidebar1Collapse(...r)),style:{background:"none",border:"none",padding:"8px 0",cursor:"pointer",display:"flex","align-items":"center",color:"inherit"},"aria-label":"Toggle sidebar"},[...s[40]||(s[40]=[a("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[a("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}),a("path",{d:"M9 3v18"})],-1)])]),t(w,null,{default:o(()=>[t(d,null,{default:o(()=>[a("button",Ts,[t(h,{size:20}),s[41]||(s[41]=a("span",{class:"nav-label"},"Dashboard",-1))])]),_:1}),t(d,null,{default:o(()=>[a("button",{type:"button",class:"nav-button nav-button-expanded","aria-expanded":"false",onClick:s[1]||(s[1]=(...r)=>l.handleSubmenuToggle&&l.handleSubmenuToggle(...r))},[t(f,{size:20}),s[42]||(s[42]=a("span",{class:"nav-label"},"Projects",-1)),a("span",Vs,[t(N,{size:16})])]),t(I,{class:"nav-button-collapsed",placement:"right-start","trigger-type":"click",distance:8,arrow:!0,".showHeader":!1},{default:o(()=>[a("button",Rs,[t(f,{size:20}),s[43]||(s[43]=a("span",{class:"nav-label"},"Projects",-1)),s[44]||(s[44]=a("span",{class:"collapsed-indicator"},[a("svg",{viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[a("path",{d:"M2 3l2 2 2-2",stroke:"currentColor","stroke-width":"1","stroke-linecap":"round"})])],-1))]),t(P,{slot:"content",class:"popover-submenu"},{default:o(()=>[a("a",{href:"#",class:"nav-sublink",onClick:s[2]||(s[2]=g(()=>{},["prevent"]))},"Project Alpha"),a("a",{href:"#",class:"nav-sublink",onClick:s[3]||(s[3]=g(()=>{},["prevent"]))},"Project Beta"),a("a",{href:"#",class:"nav-sublink",onClick:s[4]||(s[4]=g(()=>{},["prevent"]))},"Project Gamma")]),_:1})]),_:1},32),t(T,null,{default:o(()=>[a("a",{class:"nav-sublink",href:"#",onClick:s[5]||(s[5]=g(()=>{},["prevent"]))},"Project Alpha"),a("a",{class:"nav-sublink",href:"#",onClick:s[6]||(s[6]=g(()=>{},["prevent"]))},"Project Beta"),a("a",{class:"nav-sublink",href:"#",onClick:s[7]||(s[7]=g(()=>{},["prevent"]))},"Project Gamma")]),_:1})]),_:1}),t(d,null,{default:o(()=>[a("button",js,[t(A,{size:20}),s[45]||(s[45]=a("span",{class:"nav-label"},"Team",-1))])]),_:1}),t(d,null,{default:o(()=>[a("button",{type:"button",class:"nav-button nav-button-expanded","aria-expanded":"false",onClick:s[8]||(s[8]=(...r)=>l.handleSubmenuToggle&&l.handleSubmenuToggle(...r))},[t(B,{size:20}),s[46]||(s[46]=a("span",{class:"nav-label"},"Settings",-1)),a("span",Ms,[t(N,{size:16})])]),t(I,{class:"nav-button-collapsed",placement:"right-start","trigger-type":"click",distance:8,arrow:!0,".showHeader":!1},{default:o(()=>[a("button",zs,[t(B,{size:20}),s[47]||(s[47]=a("span",{class:"nav-label"},"Settings",-1)),s[48]||(s[48]=a("span",{class:"collapsed-indicator"},[a("svg",{viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[a("path",{d:"M2 3l2 2 2-2",stroke:"currentColor","stroke-width":"1","stroke-linecap":"round"})])],-1))]),t(P,{slot:"content",class:"popover-submenu"},{default:o(()=>[a("a",{href:"#",class:"nav-sublink",onClick:s[9]||(s[9]=g(()=>{},["prevent"]))},"Profile"),a("a",{href:"#",class:"nav-sublink",onClick:s[10]||(s[10]=g(()=>{},["prevent"]))},"Billing"),a("a",{href:"#",class:"nav-sublink",onClick:s[11]||(s[11]=g(()=>{},["prevent"]))},"Security"),a("a",{href:"#",class:"nav-sublink",onClick:s[12]||(s[12]=g(()=>{},["prevent"]))},"Preferences")]),_:1})]),_:1},32),t(T,null,{default:o(()=>[a("a",{class:"nav-sublink",href:"#",onClick:s[13]||(s[13]=g(()=>{},["prevent"]))},"Profile"),a("a",{class:"nav-sublink",href:"#",onClick:s[14]||(s[14]=g(()=>{},["prevent"]))},"Billing"),a("a",{class:"nav-sublink",href:"#",onClick:s[15]||(s[15]=g(()=>{},["prevent"]))},"Security"),a("a",{class:"nav-sublink",href:"#",onClick:s[16]||(s[16]=g(()=>{},["prevent"]))},"Preferences")]),_:1})]),_:1})]),_:1}),s[50]||(s[50]=a("div",{slot:"ag-footer",style:{"font-size":"0.875rem",color:"var(--ag-text-secondary)"}}," © 2024 Company ",-1))]),_:1},8,["open","collapsed"]),s[51]||(s[51]=a("main",{style:{flex:"1",padding:"2rem",overflow:"auto",background:"var(--ag-background)"}},[a("h1",{style:{"margin-top":"0"}},"Main Content"),a("p",null,"Click the header toggle to collapse the sidebar into rail mode."),a("p",null,"When collapsed, hover over items with submenus to see them in popovers.")],-1))])]),s[84]||(s[84]=a("div",{class:"mbe4"},[a("h2",null,"Sidebar with Header Actions"),a("p",null,[k(" Demonstrates using "),a("code",null,"ag-header-start"),k(", "),a("code",null,"ag-header-end"),k(", and "),a("code",null,"ag-header-toggle"),k(" slots for a composable header layout with action buttons. ")])],-1)),a("div",$s,[a("div",Os,[t(x,{open:e.sidebar2.isOpen,collapsed:e.sidebar2.isCollapsed,"show-mobile-toggle":!0,"onUpdate:open":s[20]||(s[20]=r=>e.sidebar2.isOpen=r),"onUpdate:collapsed":s[21]||(s[21]=r=>e.sidebar2.isCollapsed=r)},{default:o(()=>[s[56]||(s[56]=a("h2",{slot:"ag-header-start",style:{margin:"0","font-size":"1.125rem","font-weight":"600"}}," My Application ",-1)),a("button",Hs,[t(B,{size:20})]),a("button",{type:"button",slot:"ag-header-toggle",onClick:s[19]||(s[19]=(...r)=>l.toggleSidebar2Collapse&&l.toggleSidebar2Collapse(...r)),style:{background:"none",border:"none",padding:"8px 0",cursor:"pointer",display:"flex","align-items":"center",color:"inherit"},"aria-label":"Toggle sidebar"},[...s[52]||(s[52]=[a("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[a("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}),a("path",{d:"M9 3v18"})],-1)])]),t(w,null,{default:o(()=>[t(d,null,{default:o(()=>[a("button",Ls,[t(h,{size:20}),s[53]||(s[53]=a("span",{class:"nav-label"},"Dashboard",-1))])]),_:1}),t(d,null,{default:o(()=>[a("button",Us,[t(f,{size:20}),s[54]||(s[54]=a("span",{class:"nav-label"},"Projects",-1))])]),_:1}),t(d,null,{default:o(()=>[a("button",Ws,[t(A,{size:20}),s[55]||(s[55]=a("span",{class:"nav-label"},"Team",-1))])]),_:1})]),_:1}),s[57]||(s[57]=a("div",{slot:"ag-footer",style:{"font-size":"0.875rem",color:"var(--ag-text-secondary)"}}," © 2024 Company ",-1))]),_:1},8,["open","collapsed"]),s[58]||(s[58]=a("main",{style:{flex:"1",padding:"2rem",overflow:"auto",background:"var(--ag-background)"}},[a("h1",{style:{"margin-top":"0"}},"Header Actions Pattern"),a("p",null,[k("The header includes a settings button in the "),a("code",null,"ag-header-end"),k(" slot.")]),a("p",null,"This allows for flexible header layouts with multiple action buttons.")],-1))])]),s[85]||(s[85]=a("div",{class:"mbe4"},[a("h2",null,"Sidebar with Built-in Toggle"),a("p",null,[k(" Using "),a("code",null,"show-header-toggle"),k(" adds a built-in collapse button automatically. ")])],-1)),a("div",Gs,[a("div",_s,[t(x,{open:e.sidebar3.isOpen,collapsed:e.sidebar3.isCollapsed,"show-header-toggle":!0,"show-mobile-toggle":!0,"onUpdate:open":s[22]||(s[22]=r=>e.sidebar3.isOpen=r),"onUpdate:collapsed":s[23]||(s[23]=r=>e.sidebar3.isCollapsed=r)},{default:o(()=>[s[62]||(s[62]=a("h2",{slot:"ag-header-start",style:{margin:"0","font-size":"1.125rem","font-weight":"600"}}," Built-in Toggle ",-1)),t(w,null,{default:o(()=>[t(d,null,{default:o(()=>[a("button",Xs,[t(h,{size:20}),s[59]||(s[59]=a("span",{class:"nav-label"},"Dashboard",-1))])]),_:1}),t(d,null,{default:o(()=>[a("button",Ks,[t(f,{size:20}),s[60]||(s[60]=a("span",{class:"nav-label"},"Projects",-1))])]),_:1}),t(d,null,{default:o(()=>[a("button",Zs,[t(A,{size:20}),s[61]||(s[61]=a("span",{class:"nav-label"},"Team",-1))])]),_:1})]),_:1}),s[63]||(s[63]=a("div",{slot:"ag-footer",style:{"font-size":"0.875rem",color:"var(--ag-text-secondary)"}}," © 2024 Company ",-1))]),_:1},8,["open","collapsed"]),s[64]||(s[64]=a("main",{style:{flex:"1",padding:"2rem",overflow:"auto",background:"var(--ag-background)"}},[a("h1",{style:{"margin-top":"0"}},"Built-in Header Toggle"),a("p",null,"No need to provide a custom toggle button—the sidebar includes one automatically.")],-1))])]),s[86]||(s[86]=a("div",{class:"mbe4"},[a("h2",null,"Disable Compact Mode"),a("p",null,[k(" With "),a("code",null,"disable-compact-mode"),k(", the sidebar has no intermediate collapsed/rail state. It's either fully open (expanded) or completely hidden. This pattern is used in applications like Claude AI Studio. ")])],-1)),a("div",Js,[a("div",Ys,[t(x,{open:e.sidebar4.isOpen,"disable-compact-mode":!0,"show-mobile-toggle":!0,"onUpdate:open":s[25]||(s[25]=r=>e.sidebar4.isOpen=r)},{default:o(()=>[s[69]||(s[69]=a("h2",{slot:"ag-header-start",style:{margin:"0","font-size":"1.125rem","font-weight":"600"}}," AI Studio ",-1)),a("button",{type:"button",slot:"ag-header-toggle",onClick:s[24]||(s[24]=(...r)=>l.toggleSidebar4Responsive&&l.toggleSidebar4Responsive(...r)),style:{background:"none",border:"none",padding:"8px 0",cursor:"pointer",display:"flex","align-items":"center",color:"inherit"},"aria-label":"Toggle sidebar"},[t(G,{size:20})]),t(w,null,{default:o(()=>[t(d,null,{default:o(()=>[a("button",Qs,[t(h,{size:20}),s[65]||(s[65]=a("span",{class:"nav-label"},"Dashboard",-1))])]),_:1}),t(d,null,{default:o(()=>[a("button",sa,[t(f,{size:20}),s[66]||(s[66]=a("span",{class:"nav-label"},"Projects",-1))])]),_:1}),t(d,null,{default:o(()=>[a("button",aa,[t(A,{size:20}),s[67]||(s[67]=a("span",{class:"nav-label"},"Team",-1))])]),_:1}),t(d,null,{default:o(()=>[a("button",ia,[t(B,{size:20}),s[68]||(s[68]=a("span",{class:"nav-label"},"Settings",-1))])]),_:1})]),_:1}),s[70]||(s[70]=a("div",{slot:"ag-footer",style:{"font-size":"0.875rem",color:"var(--ag-text-secondary)"}}," © 2024 Company ",-1))]),_:1},8,["open"]),s[71]||(s[71]=a("main",{style:{flex:"1",padding:"2rem",overflow:"auto",background:"var(--ag-background)"}},[a("h1",{style:{"margin-top":"0"}},"Disable Compact Mode"),a("p",null,"Use the mobile toggle button to show/hide the sidebar."),a("p",null,"Notice there's no collapsed/rail mode—it's either fully visible or completely hidden.")],-1))])]),s[87]||(s[87]=a("div",{class:"mbe4"},[a("h2",null,"Active Item Tracking"),a("p",null," Click navigation items to see the active state change. This demonstrates how to track the current route and apply active styling to both top-level and submenu items. ")],-1)),a("div",na,[a("div",ta,[t(x,{open:e.sidebar5.isOpen,collapsed:e.sidebar5.isCollapsed,"show-mobile-toggle":!0,"onUpdate:open":s[38]||(s[38]=r=>e.sidebar5.isOpen=r),"onUpdate:collapsed":s[39]||(s[39]=r=>e.sidebar5.isCollapsed=r)},{default:o(()=>[s[79]||(s[79]=a("h2",{slot:"ag-header-start",style:{margin:"0","font-size":"1.125rem","font-weight":"600"}}," Navigation ",-1)),a("button",{type:"button",slot:"ag-header-toggle",onClick:s[26]||(s[26]=(...r)=>l.toggleSidebar5Collapse&&l.toggleSidebar5Collapse(...r)),style:{background:"none",border:"none",padding:"8px 0",cursor:"pointer",display:"flex","align-items":"center",color:"inherit"},"aria-label":"Toggle sidebar"},[...s[72]||(s[72]=[a("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[a("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}),a("path",{d:"M9 3v18"})],-1)])]),t(w,null,{default:o(()=>[t(d,null,{default:o(()=>[a("button",{type:"button",class:"nav-button active","aria-current":"page","data-route":"/dashboard",onClick:s[27]||(s[27]=r=>l.handleNavClick("/dashboard",r))},[t(h,{size:20}),s[73]||(s[73]=a("span",{class:"nav-label"},"Dashboard",-1))])]),_:1}),t(d,null,{default:o(()=>[a("button",{type:"button",class:"nav-button","data-route":"/projects",onClick:s[28]||(s[28]=r=>l.handleNavClick("/projects",r))},[t(f,{size:20}),s[74]||(s[74]=a("span",{class:"nav-label"},"Projects",-1))])]),_:1}),t(d,null,{default:o(()=>[a("button",{type:"button",class:"nav-button","data-route":"/team",onClick:s[29]||(s[29]=r=>l.handleNavClick("/team",r))},[t(A,{size:20}),s[75]||(s[75]=a("span",{class:"nav-label"},"Team",-1))])]),_:1}),t(d,null,{default:o(()=>[a("button",{type:"button",class:"nav-button nav-button-expanded","aria-expanded":"false","data-route":"/settings",onClick:s[30]||(s[30]=(...r)=>l.handleSettingsClick&&l.handleSettingsClick(...r))},[t(B,{size:20}),s[76]||(s[76]=a("span",{class:"nav-label"},"Settings",-1)),a("span",ea,[t(N,{size:16})])]),t(I,{class:"nav-button-collapsed",placement:"right-start","trigger-type":"click",distance:8,arrow:!0,".showHeader":!1},{default:o(()=>[a("button",{slot:"trigger",type:"button",class:"nav-button","data-route":"/settings",onClick:s[31]||(s[31]=r=>l.handleNavClick("/settings",r))},[t(B,{size:20}),s[77]||(s[77]=a("span",{class:"nav-label"},"Settings",-1)),s[78]||(s[78]=a("span",{class:"collapsed-indicator"},[a("svg",{viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[a("path",{d:"M2 3l2 2 2-2",stroke:"currentColor","stroke-width":"1","stroke-linecap":"round"})])],-1))]),t(P,{slot:"content",class:"popover-submenu"},{default:o(()=>[a("a",{href:"#",class:"nav-sublink","data-route":"/settings/profile",onClick:s[32]||(s[32]=r=>l.handleNavClick("/settings/profile",r))},"Profile"),a("a",{href:"#",class:"nav-sublink","data-route":"/settings/billing",onClick:s[33]||(s[33]=r=>l.handleNavClick("/settings/billing",r))},"Billing"),a("a",{href:"#",class:"nav-sublink","data-route":"/settings/security",onClick:s[34]||(s[34]=r=>l.handleNavClick("/settings/security",r))},"Security")]),_:1})]),_:1},32),t(T,null,{default:o(()=>[a("a",{class:"nav-sublink",href:"#","data-route":"/settings/profile",onClick:s[35]||(s[35]=r=>l.handleNavClick("/settings/profile",r))},"Profile"),a("a",{class:"nav-sublink",href:"#","data-route":"/settings/billing",onClick:s[36]||(s[36]=r=>l.handleNavClick("/settings/billing",r))},"Billing"),a("a",{class:"nav-sublink",href:"#","data-route":"/settings/security",onClick:s[37]||(s[37]=r=>l.handleNavClick("/settings/security",r))},"Security")]),_:1})]),_:1})]),_:1})]),_:1},8,["open","collapsed"]),a("main",la,[s[81]||(s[81]=a("h1",{style:{"margin-top":"0"}},"Active Item Tracking",-1)),a("p",null,[s[80]||(s[80]=k("Current route: ",-1)),a("strong",null,J(e.sidebar5.activeRoute),1)]),s[82]||(s[82]=O("<p>Click navigation items to see the active state change.</p><ul><li><strong>Active styling:</strong> Background color and font weight change</li><li><strong>ARIA current:</strong> The active item has aria-current=&quot;page&quot; for accessibility</li><li><strong>Submenu support:</strong> Sublinks also track active state</li><li><strong>Popover sync:</strong> Active state works in both inline and popover modes</li></ul><p> In a real application, you&#39;d integrate this with your router (Vue Router, etc.) to automatically update the active state based on the current route. </p>",3))])])])])}const oa=Z(Ns,[["render",ra]]);class W extends E{constructor(){super(),this.sidebar1={isOpen:!0,isCollapsed:!1},this.sidebar2={isOpen:!0,isCollapsed:!1},this.sidebar3={isOpen:!0,isCollapsed:!1},this.sidebar4={isOpen:!0},this.sidebar5={isOpen:!0,isCollapsed:!1,activeRoute:"/dashboard"}}createRenderRoot(){return this}firstUpdated(){const s="sidebar-nav-styles-lit";if(!document.getElementById(s)){const i=document.createElement("style");i.id=s,i.textContent=`
        /* CRITICAL: Sidebar component width - must be defined! */
        ag-sidebar {
          width: var(--ag-sidebar-width, 280px);
          transition: width var(--ag-sidebar-transition-duration, 0.3s) var(--ag-sidebar-transition-easing, ease);
          overflow: visible;
        }

        ag-sidebar[collapsed] {
          width: 64px;
        }

        /* Fix disable-compact-mode sidebar visibility */
        ag-sidebar[disable-compact-mode][open] {
          display: flex !important;
          visibility: visible !important;
          opacity: 1 !important;
          width: var(--ag-sidebar-width, 280px) !important;
          transform: none !important;
        }

        /* Navigation button base styles */
        .nav-button {
          display: flex;
          align-items: center;
          gap: var(--ag-space-3);
          position: relative;
          padding: var(--ag-space-2) var(--ag-space-3);
          margin-block-end: var(--ag-space-1);
          border: none;
          background: none;
          cursor: pointer;
          width: 100%;
          text-align: left;
          border-radius: var(--ag-radius-sm);
          transition: background var(--ag-fx-duration-sm);
          color: inherit;
        }

        .nav-button svg {
          flex-shrink: 0;
        }

        .nav-button:hover {
          background: var(--ag-background-secondary);
        }

        .nav-button.active {
          background: var(--ag-primary-background);
          color: var(--ag-primary-text);
          font-weight: 500;
        }

        .nav-label {
          flex-grow: 1;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          transition: opacity var(--ag-sidebar-transition-duration) var(--ag-sidebar-transition-easing);
        }

        /* Chevron rotation for expanded submenus */
        .chevron {
          display: flex;
          align-items: center;
          transition: transform var(--ag-fx-duration-md), opacity var(--ag-fx-duration-sm);
          margin-left: auto;
        }

        .nav-button[aria-expanded="true"] .chevron {
          transform: rotate(90deg);
        }

        /* Collapsed indicator - small triangle at 4:30 position */
        .collapsed-indicator {
          display: none;
          position: absolute;
          bottom: -1px;
          right: -1px;
          width: var(--ag-space-3);
          height: var(--ag-space-3);
        }

        .collapsed-indicator svg {
          color: var(--ag-text-muted);
          transform: rotate(315deg);
        }

        /* Show collapsed indicator in collapsed mode for buttons with submenus */
        ag-sidebar[collapsed] .nav-button[aria-expanded] .collapsed-indicator {
          display: block;
        }

        /* CRITICAL: Properly handle collapsed state */
        ag-sidebar[collapsed] .nav-label,
        ag-sidebar[collapsed] .chevron {
          opacity: 0;
          pointer-events: none;
          display: none;
        }

        /* Center icons in collapsed mode */
        ag-sidebar[collapsed] .nav-button {
          width: auto;
          padding: var(--ag-space-2);
        }

        /* Visibility rules for expanded vs collapsed mode */
        ag-sidebar[collapsed] ag-sidebar-nav-submenu:not(.popover-submenu),
        ag-sidebar:not([collapsed]) ag-popover,
        ag-sidebar[collapsed] .nav-button-expanded,
        ag-sidebar:not([collapsed]) .nav-button-collapsed {
          display: none !important;
        }

        /* Fix popover centering in collapsed mode */
        ag-sidebar[collapsed] ag-popover.nav-button-collapsed {
          display: block !important;
        }

        /* CRITICAL: Submenu visibility - hidden by default, visible when open */
        ag-sidebar-nav-submenu {
          display: none;
          overflow: hidden;
        }

        ag-sidebar-nav-submenu[open] {
          display: block;
        }

        /* Submenu link styles */
        .nav-sublink {
          display: block;
          padding: var(--ag-space-2) var(--ag-space-3);
          margin-block-end: var(--ag-space-1);
          color: inherit;
          text-decoration: none;
          border-radius: var(--ag-radius-sm);
          transition: background var(--ag-fx-duration-sm);
        }

        .nav-sublink:hover {
          background: var(--ag-background-secondary);
        }

        /* Active state styles for navigation tracking */
        .nav-button.active,
        .nav-sublink.active {
          background: var(--ag-primary-background);
          color: var(--ag-primary-text);
          font-weight: 500;
        }

        /* Popover submenu styles */
        .nav-button-collapsed::part(ag-popover-body) {
          padding: var(--ag-space-1);
        }

        /* Hide popover header for nav popovers */
        .nav-button-collapsed::part(ag-popover-header) {
          display: none;
        }
      `,document.head.appendChild(i)}this.setupSubmenuToggles()}setupSubmenuToggles(){this.querySelectorAll(".nav-button-expanded").forEach(i=>{i.addEventListener("click",p=>{p.preventDefault(),p.stopPropagation();const e=i.closest("ag-sidebar-nav-item"),l=e==null?void 0:e.querySelector("ag-sidebar-nav-submenu");if(!l)return;i.getAttribute("aria-expanded")==="true"?(i.setAttribute("aria-expanded","false"),l.removeAttribute("open")):(i.setAttribute("aria-expanded","true"),l.setAttribute("open",""))})})}toggleSidebar1Collapse(s){const i=s.target.closest("ag-sidebar");i&&i.toggleCollapse&&i.toggleCollapse()}toggleSidebar2Collapse(s){const i=s.target.closest("ag-sidebar");i&&i.toggleCollapse&&i.toggleCollapse()}toggleSidebar4Responsive(s){const i=s.target.closest("ag-sidebar");i&&i.toggleResponsive&&i.toggleResponsive()}toggleSidebar5Collapse(s){const i=s.target.closest("ag-sidebar");i&&i.toggleCollapse&&i.toggleCollapse()}handleNavClick(s,i){i.preventDefault(),this.sidebar5.activeRoute=s,this.requestUpdate();const p=i.target.closest("ag-sidebar"),e=p==null?void 0:p.querySelectorAll(".nav-button");e==null||e.forEach(h=>{const d=h.getAttribute("data-route")===s;h.classList.toggle("active",d),d?h.setAttribute("aria-current","page"):h.removeAttribute("aria-current")});const l=p==null?void 0:p.querySelectorAll(".nav-sublink");l==null||l.forEach(h=>{const d=h.getAttribute("data-route")===s;h.classList.toggle("active",d),d?h.setAttribute("aria-current","page"):h.removeAttribute("aria-current")})}handleSettingsClick(s){this.handleNavClick("/settings",s);const i=s.currentTarget,p=i.closest("ag-sidebar-nav-item"),e=p==null?void 0:p.querySelector("ag-sidebar-nav-submenu");if(!e)return;i.getAttribute("aria-expanded")==="true"?(i.setAttribute("aria-expanded","false"),e.removeAttribute("open")):(i.setAttribute("aria-expanded","true"),e.setAttribute("open",""))}render(){return v`
      <section>
        <div class="mbe4">
          <h2>Default Sidebar with Navigation</h2>
          <p>
            Demonstrates the sidebar with navigation items, submenus, and both expanded/collapsed states.
            Click the header toggle to collapse into rail mode (icon-only).
          </p>
        </div>
        <div class="mbe6">
          <div style="position: relative; display: flex; height: 500px; border: 1px solid var(--ag-border-color); border-radius: 0.5rem; overflow: hidden; contain: layout;">
            <ag-sidebar
              ?open="${this.sidebar1.isOpen}"
              ?collapsed="${this.sidebar1.isCollapsed}"
              show-mobile-toggle
              @toggle="${s=>{this.sidebar1.isOpen=s.detail,this.requestUpdate()}}"
              @collapse="${s=>{this.sidebar1.isCollapsed=s.detail,this.requestUpdate()}}"
            >
              <h2
                slot="ag-header-start"
                style="margin: 0; font-size: 1.125rem; font-weight: 600;"
              >
                Dashboard
              </h2>
              <button
                type="button"
                slot="ag-header-toggle"
                @click="${this.toggleSidebar1Collapse}"
                style="background: none; border: none; padding: 8px 0; cursor: pointer; display: flex; align-items: center; color: inherit;"
                aria-label="Toggle sidebar"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M9 3v18" />
                </svg>
              </button>

              <ag-sidebar-nav>
                <ag-sidebar-nav-item>
                  <button
                    type="button"
                    class="nav-button active"
                    aria-current="page"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                      <polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                    <span class="nav-label">Dashboard</span>
                  </button>
                </ag-sidebar-nav-item>

                <ag-sidebar-nav-item>
                  <button
                    type="button"
                    class="nav-button nav-button-expanded"
                    aria-expanded="false"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                    </svg>
                    <span class="nav-label">Projects</span>
                    <span class="chevron">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="9 18 15 12 9 6"/>
                      </svg>
                    </span>
                  </button>

                  <!-- Popover for COLLAPSED mode -->
                  <ag-popover
                    class="nav-button-collapsed"
                    placement="right-start"
                    trigger-type="click"
                    distance="8"
                    arrow
                    .showHeader="${!1}"
                  >
                    <button
                      slot="trigger"
                      type="button"
                      class="nav-button"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                      </svg>
                      <span class="nav-label">Projects</span>
                      <span class="collapsed-indicator">
                        <svg viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 3l2 2 2-2" stroke="currentColor" stroke-width="1" stroke-linecap="round"/>
                        </svg>
                      </span>
                    </button>
                    <ag-sidebar-nav-popover-submenu
                      slot="content"
                      class="popover-submenu"
                    >
                      <a href="#" class="nav-sublink" @click="${s=>s.preventDefault()}">Project Alpha</a>
                      <a href="#" class="nav-sublink" @click="${s=>s.preventDefault()}">Project Beta</a>
                      <a href="#" class="nav-sublink" @click="${s=>s.preventDefault()}">Project Gamma</a>
                    </ag-sidebar-nav-popover-submenu>
                  </ag-popover>

                  <!-- Inline submenu for expanded mode -->
                  <ag-sidebar-nav-submenu>
                    <a class="nav-sublink" href="#" @click="${s=>s.preventDefault()}">Project Alpha</a>
                    <a class="nav-sublink" href="#" @click="${s=>s.preventDefault()}">Project Beta</a>
                    <a class="nav-sublink" href="#" @click="${s=>s.preventDefault()}">Project Gamma</a>
                  </ag-sidebar-nav-submenu>
                </ag-sidebar-nav-item>

                <ag-sidebar-nav-item>
                  <button
                    type="button"
                    class="nav-button"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                    <span class="nav-label">Team</span>
                  </button>
                </ag-sidebar-nav-item>

                <ag-sidebar-nav-item>
                  <button
                    type="button"
                    class="nav-button nav-button-expanded"
                    aria-expanded="false"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                    <span class="nav-label">Settings</span>
                    <span class="chevron">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="9 18 15 12 9 6"/>
                      </svg>
                    </span>
                  </button>

                  <!-- Popover for COLLAPSED mode -->
                  <ag-popover
                    class="nav-button-collapsed"
                    placement="right-start"
                    trigger-type="click"
                    distance="8"
                    arrow
                    .showHeader="${!1}"
                  >
                    <button
                      slot="trigger"
                      type="button"
                      class="nav-button"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
                        <circle cx="12" cy="12" r="3"/>
                      </svg>
                      <span class="nav-label">Settings</span>
                      <span class="collapsed-indicator">
                        <svg viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 3l2 2 2-2" stroke="currentColor" stroke-width="1" stroke-linecap="round"/>
                        </svg>
                      </span>
                    </button>
                    <ag-sidebar-nav-popover-submenu
                      slot="content"
                      class="popover-submenu"
                    >
                      <a href="#" class="nav-sublink" @click="${s=>s.preventDefault()}">Profile</a>
                      <a href="#" class="nav-sublink" @click="${s=>s.preventDefault()}">Billing</a>
                      <a href="#" class="nav-sublink" @click="${s=>s.preventDefault()}">Security</a>
                      <a href="#" class="nav-sublink" @click="${s=>s.preventDefault()}">Preferences</a>
                    </ag-sidebar-nav-popover-submenu>
                  </ag-popover>

                  <ag-sidebar-nav-submenu>
                    <a class="nav-sublink" href="#" @click="${s=>s.preventDefault()}">Profile</a>
                    <a class="nav-sublink" href="#" @click="${s=>s.preventDefault()}">Billing</a>
                    <a class="nav-sublink" href="#" @click="${s=>s.preventDefault()}">Security</a>
                    <a class="nav-sublink" href="#" @click="${s=>s.preventDefault()}">Preferences</a>
                  </ag-sidebar-nav-submenu>
                </ag-sidebar-nav-item>
              </ag-sidebar-nav>

              <div
                slot="ag-footer"
                style="font-size: 0.875rem; color: var(--ag-text-secondary);"
              >
                © 2024 Company
              </div>
            </ag-sidebar>

            <main style="flex: 1; padding: 2rem; overflow: auto; background: var(--ag-background);">
              <h1 style="margin-top: 0;">Main Content</h1>
              <p>Click the header toggle to collapse the sidebar into rail mode.</p>
              <p>When collapsed, hover over items with submenus to see them in popovers.</p>
            </main>
          </div>
        </div>

        <div class="mbe4">
          <h2>Sidebar with Header Actions</h2>
          <p>
            Demonstrates using <code>ag-header-start</code>, <code>ag-header-end</code>, and <code>ag-header-toggle</code> slots
            for a composable header layout with action buttons.
          </p>
        </div>
        <div class="mbe6">
          <div style="position: relative; display: flex; height: 500px; border: 1px solid var(--ag-border-color); border-radius: 0.5rem; overflow: hidden; contain: layout;">
            <ag-sidebar
              ?open="${this.sidebar2.isOpen}"
              ?collapsed="${this.sidebar2.isCollapsed}"
              show-mobile-toggle
              @toggle="${s=>{this.sidebar2.isOpen=s.detail,this.requestUpdate()}}"
              @collapse="${s=>{this.sidebar2.isCollapsed=s.detail,this.requestUpdate()}}"
            >
              <h2
                slot="ag-header-start"
                style="margin: 0; font-size: 1.125rem; font-weight: 600;"
              >
                My Application
              </h2>
              <button
                type="button"
                slot="ag-header-end"
                @click="${()=>{}}"
                style="background: none; border: none; padding: 8px; cursor: pointer; display: flex; align-items: center; color: inherit; border-radius: 0.25rem;"
                aria-label="Settings"
                title="Settings"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </button>
              <button
                type="button"
                slot="ag-header-toggle"
                @click="${this.toggleSidebar2Collapse}"
                style="background: none; border: none; padding: 8px 0; cursor: pointer; display: flex; align-items: center; color: inherit;"
                aria-label="Toggle sidebar"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M9 3v18" />
                </svg>
              </button>

              <ag-sidebar-nav>
                <ag-sidebar-nav-item>
                  <button
                    type="button"
                    class="nav-button active"
                    aria-current="page"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                      <polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                    <span class="nav-label">Dashboard</span>
                  </button>
                </ag-sidebar-nav-item>
                <ag-sidebar-nav-item>
                  <button
                    type="button"
                    class="nav-button"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                    </svg>
                    <span class="nav-label">Projects</span>
                  </button>
                </ag-sidebar-nav-item>
                <ag-sidebar-nav-item>
                  <button
                    type="button"
                    class="nav-button"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                    <span class="nav-label">Team</span>
                  </button>
                </ag-sidebar-nav-item>
              </ag-sidebar-nav>

              <div
                slot="ag-footer"
                style="font-size: 0.875rem; color: var(--ag-text-secondary);"
              >
                © 2024 Company
              </div>
            </ag-sidebar>

            <main style="flex: 1; padding: 2rem; overflow: auto; background: var(--ag-background);">
              <h1 style="margin-top: 0;">Header Actions Pattern</h1>
              <p>The header includes a settings button in the <code>ag-header-end</code> slot.</p>
              <p>This allows for flexible header layouts with multiple action buttons.</p>
            </main>
          </div>
        </div>

        <div class="mbe4">
          <h2>Sidebar with Built-in Toggle</h2>
          <p>
            Using <code>show-header-toggle</code> adds a built-in collapse button automatically.
          </p>
        </div>
        <div class="mbe6">
          <div style="position: relative; display: flex; height: 500px; border: 1px solid var(--ag-border-color); border-radius: 0.5rem; overflow: hidden; contain: layout;">
            <ag-sidebar
              ?open="${this.sidebar3.isOpen}"
              ?collapsed="${this.sidebar3.isCollapsed}"
              show-header-toggle
              show-mobile-toggle
              @toggle="${s=>{this.sidebar3.isOpen=s.detail,this.requestUpdate()}}"
              @collapse="${s=>{this.sidebar3.isCollapsed=s.detail,this.requestUpdate()}}"
            >
              <h2
                slot="ag-header-start"
                style="margin: 0; font-size: 1.125rem; font-weight: 600;"
              >
                Built-in Toggle
              </h2>

              <ag-sidebar-nav>
                <ag-sidebar-nav-item>
                  <button
                    type="button"
                    class="nav-button active"
                    aria-current="page"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                      <polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                    <span class="nav-label">Dashboard</span>
                  </button>
                </ag-sidebar-nav-item>
                <ag-sidebar-nav-item>
                  <button
                    type="button"
                    class="nav-button"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                    </svg>
                    <span class="nav-label">Projects</span>
                  </button>
                </ag-sidebar-nav-item>
                <ag-sidebar-nav-item>
                  <button
                    type="button"
                    class="nav-button"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                    <span class="nav-label">Team</span>
                  </button>
                </ag-sidebar-nav-item>
              </ag-sidebar-nav>

              <div
                slot="ag-footer"
                style="font-size: 0.875rem; color: var(--ag-text-secondary);"
              >
                © 2024 Company
              </div>
            </ag-sidebar>

            <main style="flex: 1; padding: 2rem; overflow: auto; background: var(--ag-background);">
              <h1 style="margin-top: 0;">Built-in Header Toggle</h1>
              <p>No need to provide a custom toggle button—the sidebar includes one automatically.</p>
            </main>
          </div>
        </div>

        <div class="mbe4">
          <h2>Disable Compact Mode</h2>
          <p>
            With <code>disable-compact-mode</code>, the sidebar has no intermediate collapsed/rail state.
            It's either fully open (expanded) or completely hidden. This pattern is used in applications like Claude AI Studio.
          </p>
        </div>
        <div class="mbe6">
          <div style="position: relative; display: flex; height: 500px; border: 1px solid var(--ag-border-color); border-radius: 0.5rem; overflow: hidden; contain: layout;">
            <ag-sidebar
              ?open="${this.sidebar4.isOpen}"
              disable-compact-mode
              show-mobile-toggle
              @toggle="${s=>{this.sidebar4.isOpen=s.detail,this.requestUpdate()}}"
            >
              <h2
                slot="ag-header-start"
                style="margin: 0; font-size: 1.125rem; font-weight: 600;"
              >
                AI Studio
              </h2>
              <button
                type="button"
                slot="ag-header-toggle"
                @click="${this.toggleSidebar4Responsive}"
                style="background: none; border: none; padding: 8px 0; cursor: pointer; display: flex; align-items: center; color: inherit;"
                aria-label="Toggle sidebar"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
                </svg>
              </button>

              <ag-sidebar-nav>
                <ag-sidebar-nav-item>
                  <button
                    type="button"
                    class="nav-button active"
                    aria-current="page"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                      <polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                    <span class="nav-label">Dashboard</span>
                  </button>
                </ag-sidebar-nav-item>
                <ag-sidebar-nav-item>
                  <button
                    type="button"
                    class="nav-button"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                    </svg>
                    <span class="nav-label">Projects</span>
                  </button>
                </ag-sidebar-nav-item>
                <ag-sidebar-nav-item>
                  <button
                    type="button"
                    class="nav-button"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                    <span class="nav-label">Team</span>
                  </button>
                </ag-sidebar-nav-item>
                <ag-sidebar-nav-item>
                  <button
                    type="button"
                    class="nav-button"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                    <span class="nav-label">Settings</span>
                  </button>
                </ag-sidebar-nav-item>
              </ag-sidebar-nav>

              <div
                slot="ag-footer"
                style="font-size: 0.875rem; color: var(--ag-text-secondary);"
              >
                © 2024 Company
              </div>
            </ag-sidebar>

            <main style="flex: 1; padding: 2rem; overflow: auto; background: var(--ag-background);">
              <h1 style="margin-top: 0;">Disable Compact Mode</h1>
              <p>Use the mobile toggle button to show/hide the sidebar.</p>
              <p>Notice there's no collapsed/rail mode—it's either fully visible or completely hidden.</p>
            </main>
          </div>
        </div>

        <div class="mbe4">
          <h2>Active Item Tracking</h2>
          <p>
            Click navigation items to see the active state change. This demonstrates how to track the current route
            and apply active styling to both top-level and submenu items.
          </p>
        </div>
        <div class="mbe6">
          <div style="position: relative; display: flex; height: 500px; border: 1px solid var(--ag-border-color); border-radius: 0.5rem; overflow: hidden; contain: layout;">
            <ag-sidebar
              ?open="${this.sidebar5.isOpen}"
              ?collapsed="${this.sidebar5.isCollapsed}"
              show-mobile-toggle
              @toggle="${s=>{this.sidebar5.isOpen=s.detail,this.requestUpdate()}}"
              @collapse="${s=>{this.sidebar5.isCollapsed=s.detail,this.requestUpdate()}}"
            >
              <h2
                slot="ag-header-start"
                style="margin: 0; font-size: 1.125rem; font-weight: 600;"
              >
                Navigation
              </h2>
              <button
                type="button"
                slot="ag-header-toggle"
                @click="${this.toggleSidebar5Collapse}"
                style="background: none; border: none; padding: 8px 0; cursor: pointer; display: flex; align-items: center; color: inherit;"
                aria-label="Toggle sidebar"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M9 3v18" />
                </svg>
              </button>

              <ag-sidebar-nav>
                <ag-sidebar-nav-item>
                  <button
                    type="button"
                    class="nav-button active"
                    aria-current="page"
                    data-route="/dashboard"
                    @click="${s=>this.handleNavClick("/dashboard",s)}"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                      <polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                    <span class="nav-label">Dashboard</span>
                  </button>
                </ag-sidebar-nav-item>

                <ag-sidebar-nav-item>
                  <button
                    type="button"
                    class="nav-button"
                    data-route="/projects"
                    @click="${s=>this.handleNavClick("/projects",s)}"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                    </svg>
                    <span class="nav-label">Projects</span>
                  </button>
                </ag-sidebar-nav-item>

                <ag-sidebar-nav-item>
                  <button
                    type="button"
                    class="nav-button"
                    data-route="/team"
                    @click="${s=>this.handleNavClick("/team",s)}"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                    <span class="nav-label">Team</span>
                  </button>
                </ag-sidebar-nav-item>

                <ag-sidebar-nav-item>
                  <button
                    type="button"
                    class="nav-button nav-button-expanded"
                    aria-expanded="false"
                    data-route="/settings"
                    @click="${this.handleSettingsClick}"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                    <span class="nav-label">Settings</span>
                    <span class="chevron">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="9 18 15 12 9 6"/>
                      </svg>
                    </span>
                  </button>

                  <ag-popover
                    class="nav-button-collapsed"
                    placement="right-start"
                    trigger-type="click"
                    distance="8"
                    arrow
                    .showHeader="${!1}"
                  >
                    <button
                      slot="trigger"
                      type="button"
                      class="nav-button"
                      data-route="/settings"
                      @click="${s=>this.handleNavClick("/settings",s)}"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
                        <circle cx="12" cy="12" r="3"/>
                      </svg>
                      <span class="nav-label">Settings</span>
                      <span class="collapsed-indicator">
                        <svg viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 3l2 2 2-2" stroke="currentColor" stroke-width="1" stroke-linecap="round"/>
                        </svg>
                      </span>
                    </button>
                    <ag-sidebar-nav-popover-submenu
                      slot="content"
                      class="popover-submenu"
                    >
                      <a
                        href="#"
                        class="nav-sublink"
                        data-route="/settings/profile"
                        @click="${s=>this.handleNavClick("/settings/profile",s)}"
                      >Profile</a>
                      <a
                        href="#"
                        class="nav-sublink"
                        data-route="/settings/billing"
                        @click="${s=>this.handleNavClick("/settings/billing",s)}"
                      >Billing</a>
                      <a
                        href="#"
                        class="nav-sublink"
                        data-route="/settings/security"
                        @click="${s=>this.handleNavClick("/settings/security",s)}"
                      >Security</a>
                    </ag-sidebar-nav-popover-submenu>
                  </ag-popover>

                  <ag-sidebar-nav-submenu>
                    <a
                      class="nav-sublink"
                      href="#"
                      data-route="/settings/profile"
                      @click="${s=>this.handleNavClick("/settings/profile",s)}"
                    >Profile</a>
                    <a
                      class="nav-sublink"
                      href="#"
                      data-route="/settings/billing"
                      @click="${s=>this.handleNavClick("/settings/billing",s)}"
                    >Billing</a>
                    <a
                      class="nav-sublink"
                      href="#"
                      data-route="/settings/security"
                      @click="${s=>this.handleNavClick("/settings/security",s)}"
                    >Security</a>
                  </ag-sidebar-nav-submenu>
                </ag-sidebar-nav-item>
              </ag-sidebar-nav>
            </ag-sidebar>

            <main style="flex: 1; padding: 2rem; overflow: auto; background: var(--ag-background);">
              <h1 style="margin-top: 0;">Active Item Tracking</h1>
              <p>Current route: <strong>${this.sidebar5.activeRoute}</strong></p>
              <p>Click navigation items to see the active state change.</p>
              <ul>
                <li><strong>Active styling:</strong> Background color and font weight change</li>
                <li><strong>ARIA current:</strong> The active item has aria-current="page" for accessibility</li>
                <li><strong>Submenu support:</strong> Sublinks also track active state</li>
                <li><strong>Popover sync:</strong> Active state works in both inline and popover modes</li>
              </ul>
              <p>
                In a real application, you'd integrate this with your router (Vue Router, etc.) to automatically
                update the active state based on the current route.
              </p>
            </main>
          </div>
        </div>
      </section>
    `}}$(W,"properties",{sidebar1:{type:Object},sidebar2:{type:Object},sidebar3:{type:Object},sidebar4:{type:Object},sidebar5:{type:Object}});customElements.define("sidebar-lit-examples",W);const pa=`<template>
  <section>
    <div class="mbe4">
      <h2>Default Sidebar with Navigation</h2>
      <p>
        Demonstrates the sidebar with navigation items, submenus, and both expanded/collapsed states.
        Click the header toggle to collapse into rail mode (icon-only).
      </p>
    </div>
    <div class="mbe6">
      <div style="position: relative; display: flex; height: 500px; border: 1px solid var(--ag-border-color); border-radius: 0.5rem; overflow: hidden; contain: layout;">
        <VueSidebar
          :open="sidebar1.isOpen"
          :collapsed="sidebar1.isCollapsed"
          :show-mobile-toggle="true"
          @update:open="sidebar1.isOpen = $event"
          @update:collapsed="sidebar1.isCollapsed = $event"
        >
          <h2
            slot="ag-header-start"
            style="margin: 0; font-size: 1.125rem; font-weight: 600;"
          >
            Dashboard
          </h2>
          <button
            type="button"
            slot="ag-header-toggle"
            @click="toggleSidebar1Collapse"
            style="background: none; border: none; padding: 8px 0; cursor: pointer; display: flex; align-items: center; color: inherit;"
            aria-label="Toggle sidebar"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect
                width="18"
                height="18"
                x="3"
                y="3"
                rx="2"
              />
              <path d="M9 3v18" />
            </svg>
          </button>

          <VueSidebarNav>
            <VueSidebarNavItem>
              <button
                type="button"
                class="nav-button active"
                aria-current="page"
              >
                <Home :size="20" />
                <span class="nav-label">Dashboard</span>
              </button>
            </VueSidebarNavItem>

            <VueSidebarNavItem>
              <button
                type="button"
                class="nav-button nav-button-expanded"
                aria-expanded="false"
                @click="handleSubmenuToggle"
              >
                <Folder :size="20" />
                <span class="nav-label">Projects</span>
                <span class="chevron">
                  <ChevronRight :size="16" />
                </span>
              </button>

              <!-- Popover for COLLAPSED mode -->
              <VuePopover
                class="nav-button-collapsed"
                placement="right-start"
                trigger-type="click"
                :distance="8"
                :arrow="true"
                .showHeader="false"
              >
                <button
                  slot="trigger"
                  type="button"
                  class="nav-button"
                >
                  <Folder :size="20" />
                  <span class="nav-label">Projects</span>
                  <span class="collapsed-indicator">
                    <svg
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 3l2 2 2-2"
                        stroke="currentColor"
                        stroke-width="1"
                        stroke-linecap="round"
                      />
                    </svg>
                  </span>
                </button>
                <VueSidebarNavPopoverSubmenu
                  slot="content"
                  class="popover-submenu"
                >
                  <a
                    href="#"
                    class="nav-sublink"
                    @click.prevent
                  >Project Alpha</a>
                  <a
                    href="#"
                    class="nav-sublink"
                    @click.prevent
                  >Project Beta</a>
                  <a
                    href="#"
                    class="nav-sublink"
                    @click.prevent
                  >Project Gamma</a>
                </VueSidebarNavPopoverSubmenu>
              </VuePopover>

              <!-- Inline submenu for expanded mode -->
              <VueSidebarNavSubmenu>
                <a
                  class="nav-sublink"
                  href="#"
                  @click.prevent
                >Project Alpha</a>
                <a
                  class="nav-sublink"
                  href="#"
                  @click.prevent
                >Project Beta</a>
                <a
                  class="nav-sublink"
                  href="#"
                  @click.prevent
                >Project Gamma</a>
              </VueSidebarNavSubmenu>
            </VueSidebarNavItem>

            <VueSidebarNavItem>
              <button
                type="button"
                class="nav-button"
              >
                <User :size="20" />
                <span class="nav-label">Team</span>
              </button>
            </VueSidebarNavItem>

            <VueSidebarNavItem>
              <button
                type="button"
                class="nav-button nav-button-expanded"
                aria-expanded="false"
                @click="handleSubmenuToggle"
              >
                <Settings :size="20" />
                <span class="nav-label">Settings</span>
                <span class="chevron">
                  <ChevronRight :size="16" />
                </span>
              </button>

              <!-- Popover for COLLAPSED mode -->
              <VuePopover
                class="nav-button-collapsed"
                placement="right-start"
                trigger-type="click"
                :distance="8"
                :arrow="true"
                .showHeader="false"
              >
                <button
                  slot="trigger"
                  type="button"
                  class="nav-button"
                >
                  <Settings :size="20" />
                  <span class="nav-label">Settings</span>
                  <span class="collapsed-indicator">
                    <svg
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 3l2 2 2-2"
                        stroke="currentColor"
                        stroke-width="1"
                        stroke-linecap="round"
                      />
                    </svg>
                  </span>
                </button>
                <VueSidebarNavPopoverSubmenu
                  slot="content"
                  class="popover-submenu"
                >
                  <a
                    href="#"
                    class="nav-sublink"
                    @click.prevent
                  >Profile</a>
                  <a
                    href="#"
                    class="nav-sublink"
                    @click.prevent
                  >Billing</a>
                  <a
                    href="#"
                    class="nav-sublink"
                    @click.prevent
                  >Security</a>
                  <a
                    href="#"
                    class="nav-sublink"
                    @click.prevent
                  >Preferences</a>
                </VueSidebarNavPopoverSubmenu>
              </VuePopover>

              <VueSidebarNavSubmenu>
                <a
                  class="nav-sublink"
                  href="#"
                  @click.prevent
                >Profile</a>
                <a
                  class="nav-sublink"
                  href="#"
                  @click.prevent
                >Billing</a>
                <a
                  class="nav-sublink"
                  href="#"
                  @click.prevent
                >Security</a>
                <a
                  class="nav-sublink"
                  href="#"
                  @click.prevent
                >Preferences</a>
              </VueSidebarNavSubmenu>
            </VueSidebarNavItem>
          </VueSidebarNav>

          <div
            slot="ag-footer"
            style="font-size: 0.875rem; color: var(--ag-text-secondary);"
          >
            © 2024 Company
          </div>
        </VueSidebar>

        <main style="flex: 1; padding: 2rem; overflow: auto; background: var(--ag-background);">
          <h1 style="margin-top: 0;">Main Content</h1>
          <p>Click the header toggle to collapse the sidebar into rail mode.</p>
          <p>When collapsed, hover over items with submenus to see them in popovers.</p>
        </main>
      </div>
    </div>

    <div class="mbe4">
      <h2>Sidebar with Header Actions</h2>
      <p>
        Demonstrates using <code>ag-header-start</code>, <code>ag-header-end</code>, and <code>ag-header-toggle</code> slots
        for a composable header layout with action buttons.
      </p>
    </div>
    <div class="mbe6">
      <div style="position: relative; display: flex; height: 500px; border: 1px solid var(--ag-border-color); border-radius: 0.5rem; overflow: hidden; contain: layout;">
        <VueSidebar
          :open="sidebar2.isOpen"
          :collapsed="sidebar2.isCollapsed"
          :show-mobile-toggle="true"
          @update:open="sidebar2.isOpen = $event"
          @update:collapsed="sidebar2.isCollapsed = $event"
        >
          <h2
            slot="ag-header-start"
            style="margin: 0; font-size: 1.125rem; font-weight: 600;"
          >
            My Application
          </h2>
          <button
            type="button"
            slot="ag-header-end"
            @click="() => {}"
            style="background: none; border: none; padding: 8px; cursor: pointer; display: flex; align-items: center; color: inherit; border-radius: 0.25rem;"
            aria-label="Settings"
            title="Settings"
          >
            <Settings :size="20" />
          </button>
          <button
            type="button"
            slot="ag-header-toggle"
            @click="toggleSidebar2Collapse"
            style="background: none; border: none; padding: 8px 0; cursor: pointer; display: flex; align-items: center; color: inherit;"
            aria-label="Toggle sidebar"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect
                width="18"
                height="18"
                x="3"
                y="3"
                rx="2"
              />
              <path d="M9 3v18" />
            </svg>
          </button>

          <VueSidebarNav>
            <VueSidebarNavItem>
              <button
                type="button"
                class="nav-button active"
                aria-current="page"
              >
                <Home :size="20" />
                <span class="nav-label">Dashboard</span>
              </button>
            </VueSidebarNavItem>
            <VueSidebarNavItem>
              <button
                type="button"
                class="nav-button"
              >
                <Folder :size="20" />
                <span class="nav-label">Projects</span>
              </button>
            </VueSidebarNavItem>
            <VueSidebarNavItem>
              <button
                type="button"
                class="nav-button"
              >
                <User :size="20" />
                <span class="nav-label">Team</span>
              </button>
            </VueSidebarNavItem>
          </VueSidebarNav>

          <div
            slot="ag-footer"
            style="font-size: 0.875rem; color: var(--ag-text-secondary);"
          >
            © 2024 Company
          </div>
        </VueSidebar>

        <main style="flex: 1; padding: 2rem; overflow: auto; background: var(--ag-background);">
          <h1 style="margin-top: 0;">Header Actions Pattern</h1>
          <p>The header includes a settings button in the <code>ag-header-end</code> slot.</p>
          <p>This allows for flexible header layouts with multiple action buttons.</p>
        </main>
      </div>
    </div>

    <div class="mbe4">
      <h2>Sidebar with Built-in Toggle</h2>
      <p>
        Using <code>show-header-toggle</code> adds a built-in collapse button automatically.
      </p>
    </div>
    <div class="mbe6">
      <div style="position: relative; display: flex; height: 500px; border: 1px solid var(--ag-border-color); border-radius: 0.5rem; overflow: hidden; contain: layout;">
        <VueSidebar
          :open="sidebar3.isOpen"
          :collapsed="sidebar3.isCollapsed"
          :show-header-toggle="true"
          :show-mobile-toggle="true"
          @update:open="sidebar3.isOpen = $event"
          @update:collapsed="sidebar3.isCollapsed = $event"
        >
          <h2
            slot="ag-header-start"
            style="margin: 0; font-size: 1.125rem; font-weight: 600;"
          >
            Built-in Toggle
          </h2>

          <VueSidebarNav>
            <VueSidebarNavItem>
              <button
                type="button"
                class="nav-button active"
                aria-current="page"
              >
                <Home :size="20" />
                <span class="nav-label">Dashboard</span>
              </button>
            </VueSidebarNavItem>
            <VueSidebarNavItem>
              <button
                type="button"
                class="nav-button"
              >
                <Folder :size="20" />
                <span class="nav-label">Projects</span>
              </button>
            </VueSidebarNavItem>
            <VueSidebarNavItem>
              <button
                type="button"
                class="nav-button"
              >
                <User :size="20" />
                <span class="nav-label">Team</span>
              </button>
            </VueSidebarNavItem>
          </VueSidebarNav>

          <div
            slot="ag-footer"
            style="font-size: 0.875rem; color: var(--ag-text-secondary);"
          >
            © 2024 Company
          </div>
        </VueSidebar>

        <main style="flex: 1; padding: 2rem; overflow: auto; background: var(--ag-background);">
          <h1 style="margin-top: 0;">Built-in Header Toggle</h1>
          <p>No need to provide a custom toggle button—the sidebar includes one automatically.</p>
        </main>
      </div>
    </div>

    <div class="mbe4">
      <h2>Disable Compact Mode</h2>
      <p>
        With <code>disable-compact-mode</code>, the sidebar has no intermediate collapsed/rail state.
        It's either fully open (expanded) or completely hidden. This pattern is used in applications like Claude AI Studio.
      </p>
    </div>
    <div class="mbe6">
      <div style="position: relative; display: flex; height: 500px; border: 1px solid var(--ag-border-color); border-radius: 0.5rem; overflow: hidden; contain: layout;">
        <VueSidebar
          :open="sidebar4.isOpen"
          :disable-compact-mode="true"
          :show-mobile-toggle="true"
          @update:open="sidebar4.isOpen = $event"
        >
          <h2
            slot="ag-header-start"
            style="margin: 0; font-size: 1.125rem; font-weight: 600;"
          >
            AI Studio
          </h2>
          <button
            type="button"
            slot="ag-header-toggle"
            @click="toggleSidebar4Responsive"
            style="background: none; border: none; padding: 8px 0; cursor: pointer; display: flex; align-items: center; color: inherit;"
            aria-label="Toggle sidebar"
          >
            <Command :size="20" />
          </button>

          <VueSidebarNav>
            <VueSidebarNavItem>
              <button
                type="button"
                class="nav-button active"
                aria-current="page"
              >
                <Home :size="20" />
                <span class="nav-label">Dashboard</span>
              </button>
            </VueSidebarNavItem>
            <VueSidebarNavItem>
              <button
                type="button"
                class="nav-button"
              >
                <Folder :size="20" />
                <span class="nav-label">Projects</span>
              </button>
            </VueSidebarNavItem>
            <VueSidebarNavItem>
              <button
                type="button"
                class="nav-button"
              >
                <User :size="20" />
                <span class="nav-label">Team</span>
              </button>
            </VueSidebarNavItem>
            <VueSidebarNavItem>
              <button
                type="button"
                class="nav-button"
              >
                <Settings :size="20" />
                <span class="nav-label">Settings</span>
              </button>
            </VueSidebarNavItem>
          </VueSidebarNav>

          <div
            slot="ag-footer"
            style="font-size: 0.875rem; color: var(--ag-text-secondary);"
          >
            © 2024 Company
          </div>
        </VueSidebar>

        <main style="flex: 1; padding: 2rem; overflow: auto; background: var(--ag-background);">
          <h1 style="margin-top: 0;">Disable Compact Mode</h1>
          <p>Use the mobile toggle button to show/hide the sidebar.</p>
          <p>Notice there's no collapsed/rail mode—it's either fully visible or completely hidden.</p>
        </main>
      </div>
    </div>

    <div class="mbe4">
      <h2>Active Item Tracking</h2>
      <p>
        Click navigation items to see the active state change. This demonstrates how to track the current route
        and apply active styling to both top-level and submenu items.
      </p>
    </div>
    <div class="mbe6">
      <div style="position: relative; display: flex; height: 500px; border: 1px solid var(--ag-border-color); border-radius: 0.5rem; overflow: hidden; contain: layout;">
        <VueSidebar
          :open="sidebar5.isOpen"
          :collapsed="sidebar5.isCollapsed"
          :show-mobile-toggle="true"
          @update:open="sidebar5.isOpen = $event"
          @update:collapsed="sidebar5.isCollapsed = $event"
        >
          <h2
            slot="ag-header-start"
            style="margin: 0; font-size: 1.125rem; font-weight: 600;"
          >
            Navigation
          </h2>
          <button
            type="button"
            slot="ag-header-toggle"
            @click="toggleSidebar5Collapse"
            style="background: none; border: none; padding: 8px 0; cursor: pointer; display: flex; align-items: center; color: inherit;"
            aria-label="Toggle sidebar"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect
                width="18"
                height="18"
                x="3"
                y="3"
                rx="2"
              />
              <path d="M9 3v18" />
            </svg>
          </button>

          <VueSidebarNav>
            <VueSidebarNavItem>
              <button
                type="button"
                class="nav-button active"
                aria-current="page"
                data-route="/dashboard"
                @click="handleNavClick('/dashboard', $event)"
              >
                <Home :size="20" />
                <span class="nav-label">Dashboard</span>
              </button>
            </VueSidebarNavItem>

            <VueSidebarNavItem>
              <button
                type="button"
                class="nav-button"
                data-route="/projects"
                @click="handleNavClick('/projects', $event)"
              >
                <Folder :size="20" />
                <span class="nav-label">Projects</span>
              </button>
            </VueSidebarNavItem>

            <VueSidebarNavItem>
              <button
                type="button"
                class="nav-button"
                data-route="/team"
                @click="handleNavClick('/team', $event)"
              >
                <User :size="20" />
                <span class="nav-label">Team</span>
              </button>
            </VueSidebarNavItem>

            <VueSidebarNavItem>
              <button
                type="button"
                class="nav-button nav-button-expanded"
                aria-expanded="false"
                data-route="/settings"
                @click="handleSettingsClick"
              >
                <Settings :size="20" />
                <span class="nav-label">Settings</span>
                <span class="chevron">
                  <ChevronRight :size="16" />
                </span>
              </button>

              <VuePopover
                class="nav-button-collapsed"
                placement="right-start"
                trigger-type="click"
                :distance="8"
                :arrow="true"
                .showHeader="false"
              >
                <button
                  slot="trigger"
                  type="button"
                  class="nav-button"
                  data-route="/settings"
                  @click="handleNavClick('/settings', $event)"
                >
                  <Settings :size="20" />
                  <span class="nav-label">Settings</span>
                  <span class="collapsed-indicator">
                    <svg
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 3l2 2 2-2"
                        stroke="currentColor"
                        stroke-width="1"
                        stroke-linecap="round"
                      />
                    </svg>
                  </span>
                </button>
                <VueSidebarNavPopoverSubmenu
                  slot="content"
                  class="popover-submenu"
                >
                  <a
                    href="#"
                    class="nav-sublink"
                    data-route="/settings/profile"
                    @click="handleNavClick('/settings/profile', $event)"
                  >Profile</a>
                  <a
                    href="#"
                    class="nav-sublink"
                    data-route="/settings/billing"
                    @click="handleNavClick('/settings/billing', $event)"
                  >Billing</a>
                  <a
                    href="#"
                    class="nav-sublink"
                    data-route="/settings/security"
                    @click="handleNavClick('/settings/security', $event)"
                  >Security</a>
                </VueSidebarNavPopoverSubmenu>
              </VuePopover>

              <VueSidebarNavSubmenu>
                <a
                  class="nav-sublink"
                  href="#"
                  data-route="/settings/profile"
                  @click="handleNavClick('/settings/profile', $event)"
                >Profile</a>
                <a
                  class="nav-sublink"
                  href="#"
                  data-route="/settings/billing"
                  @click="handleNavClick('/settings/billing', $event)"
                >Billing</a>
                <a
                  class="nav-sublink"
                  href="#"
                  data-route="/settings/security"
                  @click="handleNavClick('/settings/security', $event)"
                >Security</a>
              </VueSidebarNavSubmenu>
            </VueSidebarNavItem>
          </VueSidebarNav>
        </VueSidebar>

        <main style="flex: 1; padding: 2rem; overflow: auto; background: var(--ag-background);">
          <h1 style="margin-top: 0;">Active Item Tracking</h1>
          <p>Current route: <strong>{{ sidebar5.activeRoute }}</strong></p>
          <p>Click navigation items to see the active state change.</p>
          <ul>
            <li><strong>Active styling:</strong> Background color and font weight change</li>
            <li><strong>ARIA current:</strong> The active item has aria-current="page" for accessibility</li>
            <li><strong>Submenu support:</strong> Sublinks also track active state</li>
            <li><strong>Popover sync:</strong> Active state works in both inline and popover modes</li>
          </ul>
          <p>
            In a real application, you'd integrate this with your router (Vue Router, etc.) to automatically
            update the active state based on the current route.
          </p>
        </main>
      </div>
    </div>
  </section>
</template>

<script>
import VueSidebar from "agnosticui-core/sidebar/vue";
import {
  VueSidebarNav,
  VueSidebarNavItem,
  VueSidebarNavSubmenu,
  VueSidebarNavPopoverSubmenu,
} from "agnosticui-core/sidebar-nav/vue";
import { VuePopover } from "agnosticui-core/popover/vue";
import {
  Home,
  Folder,
  User,
  Settings,
  ChevronRight,
  Command,
} from "lucide-vue-next";

export default {
  name: "SidebarExamples",
  components: {
    VueSidebar,
    VueSidebarNav,
    VueSidebarNavItem,
    VueSidebarNavSubmenu,
    VueSidebarNavPopoverSubmenu,
    VuePopover,
    Home,
    Folder,
    User,
    Settings,
    ChevronRight,
    Command,
  },
  data() {
    return {
      sidebar1: {
        isOpen: true,
        isCollapsed: false,
      },
      sidebar2: {
        isOpen: true,
        isCollapsed: false,
      },
      sidebar3: {
        isOpen: true,
        isCollapsed: false,
      },
      sidebar4: {
        isOpen: true,
      },
      sidebar5: {
        isOpen: true,
        isCollapsed: false,
        activeRoute: "/dashboard",
      },
    };
  },
  mounted() {
    // Inject nav button styles
    const styleId = "sidebar-nav-styles";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.textContent = \`
        /* Overrides VitePress theme - resets .vp-doc h2 styles */
        ag-sidebar h2[slot="ag-header-start"] {
          border-top: none !important;
          padding-top: 0 !important;
          padding-bottom: 0 !important;
          margin-top: 0 !important;
          margin-bottom: 0 !important;
          letter-spacing: normal !important;
          line-height: normal !important;
          overflow-wrap: normal !important;
          white-space: nowrap !important;
        }

        /* Ensure sidebars start in expanded mode in examples */
        ag-sidebar:not([collapsed]) {
          width: var(--ag-sidebar-width, 280px);
        }

        /* Fix disable-compact-mode sidebar visibility */
        ag-sidebar[disable-compact-mode][open] {
          display: flex !important;
          visibility: visible !important;
          opacity: 1 !important;
          width: var(--ag-sidebar-width, 280px) !important;
          transform: none !important;
        }

        /* Overrides VitePress theme - resets .vp-doc a styles */
        ag-sidebar .nav-sublink {
          font-weight: normal !important;
          color: inherit !important;
          text-decoration: none !important;
          text-underline-offset: unset !important;
        }

        .nav-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--ag-space-3);
          position: relative;
          padding: var(--ag-space-2) var(--ag-space-3);
          margin-block-end: var(--ag-space-1);
          border: none;
          background: none;
          cursor: pointer;
          width: 100%;
          text-align: left;
          border-radius: var(--ag-radius-sm);
          transition: background var(--ag-fx-duration-sm);
          color: inherit;
        }

        .nav-button svg {
          flex-shrink: 0;
        }

        .nav-button:hover {
          background: var(--ag-background-secondary);
        }

        .nav-button.active {
          background: var(--ag-primary-background);
          color: var(--ag-primary-text);
          font-weight: 500;
        }

        .nav-button .chevron {
          transition: transform var(--ag-fx-duration-md);
          margin-left: auto;
        }

        .nav-button[aria-expanded="true"] .chevron {
          transform: rotate(90deg);
        }

        .nav-button .collapsed-indicator {
          display: none;
          position: absolute;
          bottom: -1px;
          right: -1px;
          width: var(--ag-space-3);
          height: var(--ag-space-3);
        }

        .nav-button .collapsed-indicator svg {
          color: var(--ag-text-muted);
          transform: rotate(315deg);
        }

        .nav-button .nav-label {
          flex-grow: 1;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .nav-button .nav-label,
        .nav-button .chevron {
          transition: opacity var(--ag-sidebar-transition-duration) var(--ag-sidebar-transition-easing);
          white-space: nowrap;
        }

        ag-sidebar[collapsed] .nav-button {
          width: auto;
          padding: var(--ag-space-2);
        }

        ag-sidebar[collapsed] .nav-button .nav-label,
        ag-sidebar[collapsed] .nav-button .chevron {
          opacity: 0;
          pointer-events: none;
          display: none;
        }

        ag-sidebar[collapsed] .nav-button[aria-expanded] .collapsed-indicator {
          display: block;
        }

        .nav-button-collapsed::part(ag-popover-body) {
          padding: var(--ag-space-1);
        }

        ag-sidebar[collapsed] ag-sidebar-nav-submenu:not(.popover-submenu),
        ag-sidebar:not([collapsed]) ag-popover,
        ag-sidebar[collapsed] .nav-button-expanded,
        ag-sidebar:not([collapsed]) .nav-button-collapsed {
          display: none !important;
        }

        /* Fix popover centering in collapsed mode - ag-popover is inline-block by default */
        ag-sidebar[collapsed] ag-popover.nav-button-collapsed {
          display: block !important;
        }

        .nav-sublink {
          display: block;
          padding: var(--ag-space-2) var(--ag-space-3);
          margin-block-end: var(--ag-space-1);
          color: inherit;
          text-decoration: none;
          border-radius: var(--ag-radius-sm);
          transition: background var(--ag-fx-duration-sm);
        }

        .nav-sublink:hover {
          background: var(--ag-background-secondary);
        }

        /* Active state styles for navigation tracking */
        .nav-button.active,
        .nav-sublink.active {
          background: var(--ag-primary-background);
          color: var(--ag-primary-text);
          font-weight: 500;
        }
      \`;
      document.head.appendChild(style);
    }
  },
  methods: {
    toggleSidebar1Collapse(e) {
      const sidebar = e.target.closest("ag-sidebar");
      if (sidebar && sidebar.toggleCollapse) {
        sidebar.toggleCollapse();
      }
    },
    toggleSidebar2Collapse(e) {
      const sidebar = e.target.closest("ag-sidebar");
      if (sidebar && sidebar.toggleCollapse) {
        sidebar.toggleCollapse();
      }
    },
    toggleSidebar4Responsive(e) {
      const sidebar = e.target.closest("ag-sidebar");
      if (sidebar && sidebar.toggleResponsive) {
        sidebar.toggleResponsive();
      }
    },
    handleSubmenuToggle(e) {
      e.preventDefault();
      e.stopPropagation();
      const button = e.currentTarget;
      const navItem = button.closest("ag-sidebar-nav-item");
      const submenu = navItem?.querySelector("ag-sidebar-nav-submenu");

      if (!submenu) return;

      const currentAriaExpanded = button.getAttribute("aria-expanded");
      const isCurrentlyExpanded = currentAriaExpanded === "true";

      if (isCurrentlyExpanded) {
        button.setAttribute("aria-expanded", "false");
        submenu.removeAttribute("open");
      } else {
        button.setAttribute("aria-expanded", "true");
        submenu.setAttribute("open", "");
      }
    },
    toggleSidebar5Collapse(e) {
      const sidebar = e.target.closest("ag-sidebar");
      if (sidebar && sidebar.toggleCollapse) {
        sidebar.toggleCollapse();
      }
    },
    handleNavClick(route, e) {
      e.preventDefault();
      this.sidebar5.activeRoute = route;

      const sidebar = e.target.closest("ag-sidebar");

      // Update top-level nav buttons
      const buttons = sidebar?.querySelectorAll(".nav-button");
      buttons?.forEach((btn) => {
        const isActive = btn.getAttribute("data-route") === route;
        btn.classList.toggle("active", isActive);
        if (isActive) {
          btn.setAttribute("aria-current", "page");
        } else {
          btn.removeAttribute("aria-current");
        }
      });

      // Update sublinks (both inline and in popovers)
      const sublinks = sidebar?.querySelectorAll(".nav-sublink");
      sublinks?.forEach((link) => {
        const isActive = link.getAttribute("data-route") === route;
        link.classList.toggle("active", isActive);
        if (isActive) {
          link.setAttribute("aria-current", "page");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    },
    handleSettingsClick(e) {
      this.handleNavClick("/settings", e);
      this.handleSubmenuToggle(e);
    },
  },
};
<\/script>
`,ha=`import { LitElement, html } from 'lit';
import 'agnosticui-core/sidebar';
import 'agnosticui-core/sidebar-nav';
import 'agnosticui-core/popover';

export class SidebarLitExamples extends LitElement {
  static properties = {
    sidebar1: { type: Object },
    sidebar2: { type: Object },
    sidebar3: { type: Object },
    sidebar4: { type: Object },
    sidebar5: { type: Object },
  };

  constructor() {
    super();
    this.sidebar1 = { isOpen: true, isCollapsed: false };
    this.sidebar2 = { isOpen: true, isCollapsed: false };
    this.sidebar3 = { isOpen: true, isCollapsed: false };
    this.sidebar4 = { isOpen: true };
    this.sidebar5 = { isOpen: true, isCollapsed: false, activeRoute: '/dashboard' };
  }

  createRenderRoot() {
    return this;
  }

  firstUpdated() {
    // Inject critical sidebar navigation styles
    const styleId = 'sidebar-nav-styles-lit';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = \`
        /* CRITICAL: Sidebar component width - must be defined! */
        ag-sidebar {
          width: var(--ag-sidebar-width, 280px);
          transition: width var(--ag-sidebar-transition-duration, 0.3s) var(--ag-sidebar-transition-easing, ease);
          overflow: visible;
        }

        ag-sidebar[collapsed] {
          width: 64px;
        }

        /* Fix disable-compact-mode sidebar visibility */
        ag-sidebar[disable-compact-mode][open] {
          display: flex !important;
          visibility: visible !important;
          opacity: 1 !important;
          width: var(--ag-sidebar-width, 280px) !important;
          transform: none !important;
        }

        /* Navigation button base styles */
        .nav-button {
          display: flex;
          align-items: center;
          gap: var(--ag-space-3);
          position: relative;
          padding: var(--ag-space-2) var(--ag-space-3);
          margin-block-end: var(--ag-space-1);
          border: none;
          background: none;
          cursor: pointer;
          width: 100%;
          text-align: left;
          border-radius: var(--ag-radius-sm);
          transition: background var(--ag-fx-duration-sm);
          color: inherit;
        }

        .nav-button svg {
          flex-shrink: 0;
        }

        .nav-button:hover {
          background: var(--ag-background-secondary);
        }

        .nav-button.active {
          background: var(--ag-primary-background);
          color: var(--ag-primary-text);
          font-weight: 500;
        }

        .nav-label {
          flex-grow: 1;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          transition: opacity var(--ag-sidebar-transition-duration) var(--ag-sidebar-transition-easing);
        }

        /* Chevron rotation for expanded submenus */
        .chevron {
          display: flex;
          align-items: center;
          transition: transform var(--ag-fx-duration-md), opacity var(--ag-fx-duration-sm);
          margin-left: auto;
        }

        .nav-button[aria-expanded="true"] .chevron {
          transform: rotate(90deg);
        }

        /* Collapsed indicator - small triangle at 4:30 position */
        .collapsed-indicator {
          display: none;
          position: absolute;
          bottom: -1px;
          right: -1px;
          width: var(--ag-space-3);
          height: var(--ag-space-3);
        }

        .collapsed-indicator svg {
          color: var(--ag-text-muted);
          transform: rotate(315deg);
        }

        /* Show collapsed indicator in collapsed mode for buttons with submenus */
        ag-sidebar[collapsed] .nav-button[aria-expanded] .collapsed-indicator {
          display: block;
        }

        /* CRITICAL: Properly handle collapsed state */
        ag-sidebar[collapsed] .nav-label,
        ag-sidebar[collapsed] .chevron {
          opacity: 0;
          pointer-events: none;
          display: none;
        }

        /* Center icons in collapsed mode */
        ag-sidebar[collapsed] .nav-button {
          width: auto;
          padding: var(--ag-space-2);
        }

        /* Visibility rules for expanded vs collapsed mode */
        ag-sidebar[collapsed] ag-sidebar-nav-submenu:not(.popover-submenu),
        ag-sidebar:not([collapsed]) ag-popover,
        ag-sidebar[collapsed] .nav-button-expanded,
        ag-sidebar:not([collapsed]) .nav-button-collapsed {
          display: none !important;
        }

        /* Fix popover centering in collapsed mode */
        ag-sidebar[collapsed] ag-popover.nav-button-collapsed {
          display: block !important;
        }

        /* CRITICAL: Submenu visibility - hidden by default, visible when open */
        ag-sidebar-nav-submenu {
          display: none;
          overflow: hidden;
        }

        ag-sidebar-nav-submenu[open] {
          display: block;
        }

        /* Submenu link styles */
        .nav-sublink {
          display: block;
          padding: var(--ag-space-2) var(--ag-space-3);
          margin-block-end: var(--ag-space-1);
          color: inherit;
          text-decoration: none;
          border-radius: var(--ag-radius-sm);
          transition: background var(--ag-fx-duration-sm);
        }

        .nav-sublink:hover {
          background: var(--ag-background-secondary);
        }

        /* Active state styles for navigation tracking */
        .nav-button.active,
        .nav-sublink.active {
          background: var(--ag-primary-background);
          color: var(--ag-primary-text);
          font-weight: 500;
        }

        /* Popover submenu styles */
        .nav-button-collapsed::part(ag-popover-body) {
          padding: var(--ag-space-1);
        }

        /* Hide popover header for nav popovers */
        .nav-button-collapsed::part(ag-popover-header) {
          display: none;
        }
      \`;
      document.head.appendChild(style);
    }

    // Set up event listeners for submenu toggles
    this.setupSubmenuToggles();
  }

  setupSubmenuToggles() {
    const buttons = this.querySelectorAll('.nav-button-expanded');
    buttons.forEach((button) => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const navItem = button.closest('ag-sidebar-nav-item');
        const submenu = navItem?.querySelector('ag-sidebar-nav-submenu');

        if (!submenu) return;

        const currentAriaExpanded = button.getAttribute('aria-expanded');
        const isCurrentlyExpanded = currentAriaExpanded === 'true';

        if (isCurrentlyExpanded) {
          button.setAttribute('aria-expanded', 'false');
          submenu.removeAttribute('open');
        } else {
          button.setAttribute('aria-expanded', 'true');
          submenu.setAttribute('open', '');
        }
      });
    });
  }

  toggleSidebar1Collapse(e) {
    const sidebar = e.target.closest('ag-sidebar');
    if (sidebar && sidebar.toggleCollapse) {
      sidebar.toggleCollapse();
    }
  }

  toggleSidebar2Collapse(e) {
    const sidebar = e.target.closest('ag-sidebar');
    if (sidebar && sidebar.toggleCollapse) {
      sidebar.toggleCollapse();
    }
  }

  toggleSidebar4Responsive(e) {
    const sidebar = e.target.closest('ag-sidebar');
    if (sidebar && sidebar.toggleResponsive) {
      sidebar.toggleResponsive();
    }
  }

  toggleSidebar5Collapse(e) {
    const sidebar = e.target.closest('ag-sidebar');
    if (sidebar && sidebar.toggleCollapse) {
      sidebar.toggleCollapse();
    }
  }

  handleNavClick(route, e) {
    e.preventDefault();
    this.sidebar5.activeRoute = route;
    this.requestUpdate();

    const sidebar = e.target.closest('ag-sidebar');

    // Update top-level nav buttons
    const buttons = sidebar?.querySelectorAll('.nav-button');
    buttons?.forEach((btn) => {
      const isActive = btn.getAttribute('data-route') === route;
      btn.classList.toggle('active', isActive);
      if (isActive) {
        btn.setAttribute('aria-current', 'page');
      } else {
        btn.removeAttribute('aria-current');
      }
    });

    // Update sublinks (both inline and in popovers)
    const sublinks = sidebar?.querySelectorAll('.nav-sublink');
    sublinks?.forEach((link) => {
      const isActive = link.getAttribute('data-route') === route;
      link.classList.toggle('active', isActive);
      if (isActive) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  handleSettingsClick(e) {
    this.handleNavClick('/settings', e);
    // Also toggle the submenu
    const button = e.currentTarget;
    const navItem = button.closest('ag-sidebar-nav-item');
    const submenu = navItem?.querySelector('ag-sidebar-nav-submenu');

    if (!submenu) return;

    const currentAriaExpanded = button.getAttribute('aria-expanded');
    const isCurrentlyExpanded = currentAriaExpanded === 'true';

    if (isCurrentlyExpanded) {
      button.setAttribute('aria-expanded', 'false');
      submenu.removeAttribute('open');
    } else {
      button.setAttribute('aria-expanded', 'true');
      submenu.setAttribute('open', '');
    }
  }

  render() {
    return html\`
      <section>
        <div class="mbe4">
          <h2>Default Sidebar with Navigation</h2>
          <p>
            Demonstrates the sidebar with navigation items, submenus, and both expanded/collapsed states.
            Click the header toggle to collapse into rail mode (icon-only).
          </p>
        </div>
        <div class="mbe6">
          <div style="position: relative; display: flex; height: 500px; border: 1px solid var(--ag-border-color); border-radius: 0.5rem; overflow: hidden; contain: layout;">
            <ag-sidebar
              ?open="\${this.sidebar1.isOpen}"
              ?collapsed="\${this.sidebar1.isCollapsed}"
              show-mobile-toggle
              @toggle="\${(e) => { this.sidebar1.isOpen = e.detail; this.requestUpdate(); }}"
              @collapse="\${(e) => { this.sidebar1.isCollapsed = e.detail; this.requestUpdate(); }}"
            >
              <h2
                slot="ag-header-start"
                style="margin: 0; font-size: 1.125rem; font-weight: 600;"
              >
                Dashboard
              </h2>
              <button
                type="button"
                slot="ag-header-toggle"
                @click="\${this.toggleSidebar1Collapse}"
                style="background: none; border: none; padding: 8px 0; cursor: pointer; display: flex; align-items: center; color: inherit;"
                aria-label="Toggle sidebar"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M9 3v18" />
                </svg>
              </button>

              <ag-sidebar-nav>
                <ag-sidebar-nav-item>
                  <button
                    type="button"
                    class="nav-button active"
                    aria-current="page"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                      <polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                    <span class="nav-label">Dashboard</span>
                  </button>
                </ag-sidebar-nav-item>

                <ag-sidebar-nav-item>
                  <button
                    type="button"
                    class="nav-button nav-button-expanded"
                    aria-expanded="false"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                    </svg>
                    <span class="nav-label">Projects</span>
                    <span class="chevron">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="9 18 15 12 9 6"/>
                      </svg>
                    </span>
                  </button>

                  <!-- Popover for COLLAPSED mode -->
                  <ag-popover
                    class="nav-button-collapsed"
                    placement="right-start"
                    trigger-type="click"
                    distance="8"
                    arrow
                    .showHeader="\${false}"
                  >
                    <button
                      slot="trigger"
                      type="button"
                      class="nav-button"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                      </svg>
                      <span class="nav-label">Projects</span>
                      <span class="collapsed-indicator">
                        <svg viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 3l2 2 2-2" stroke="currentColor" stroke-width="1" stroke-linecap="round"/>
                        </svg>
                      </span>
                    </button>
                    <ag-sidebar-nav-popover-submenu
                      slot="content"
                      class="popover-submenu"
                    >
                      <a href="#" class="nav-sublink" @click="\${(e) => e.preventDefault()}">Project Alpha</a>
                      <a href="#" class="nav-sublink" @click="\${(e) => e.preventDefault()}">Project Beta</a>
                      <a href="#" class="nav-sublink" @click="\${(e) => e.preventDefault()}">Project Gamma</a>
                    </ag-sidebar-nav-popover-submenu>
                  </ag-popover>

                  <!-- Inline submenu for expanded mode -->
                  <ag-sidebar-nav-submenu>
                    <a class="nav-sublink" href="#" @click="\${(e) => e.preventDefault()}">Project Alpha</a>
                    <a class="nav-sublink" href="#" @click="\${(e) => e.preventDefault()}">Project Beta</a>
                    <a class="nav-sublink" href="#" @click="\${(e) => e.preventDefault()}">Project Gamma</a>
                  </ag-sidebar-nav-submenu>
                </ag-sidebar-nav-item>

                <ag-sidebar-nav-item>
                  <button
                    type="button"
                    class="nav-button"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                    <span class="nav-label">Team</span>
                  </button>
                </ag-sidebar-nav-item>

                <ag-sidebar-nav-item>
                  <button
                    type="button"
                    class="nav-button nav-button-expanded"
                    aria-expanded="false"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                    <span class="nav-label">Settings</span>
                    <span class="chevron">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="9 18 15 12 9 6"/>
                      </svg>
                    </span>
                  </button>

                  <!-- Popover for COLLAPSED mode -->
                  <ag-popover
                    class="nav-button-collapsed"
                    placement="right-start"
                    trigger-type="click"
                    distance="8"
                    arrow
                    .showHeader="\${false}"
                  >
                    <button
                      slot="trigger"
                      type="button"
                      class="nav-button"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
                        <circle cx="12" cy="12" r="3"/>
                      </svg>
                      <span class="nav-label">Settings</span>
                      <span class="collapsed-indicator">
                        <svg viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 3l2 2 2-2" stroke="currentColor" stroke-width="1" stroke-linecap="round"/>
                        </svg>
                      </span>
                    </button>
                    <ag-sidebar-nav-popover-submenu
                      slot="content"
                      class="popover-submenu"
                    >
                      <a href="#" class="nav-sublink" @click="\${(e) => e.preventDefault()}">Profile</a>
                      <a href="#" class="nav-sublink" @click="\${(e) => e.preventDefault()}">Billing</a>
                      <a href="#" class="nav-sublink" @click="\${(e) => e.preventDefault()}">Security</a>
                      <a href="#" class="nav-sublink" @click="\${(e) => e.preventDefault()}">Preferences</a>
                    </ag-sidebar-nav-popover-submenu>
                  </ag-popover>

                  <ag-sidebar-nav-submenu>
                    <a class="nav-sublink" href="#" @click="\${(e) => e.preventDefault()}">Profile</a>
                    <a class="nav-sublink" href="#" @click="\${(e) => e.preventDefault()}">Billing</a>
                    <a class="nav-sublink" href="#" @click="\${(e) => e.preventDefault()}">Security</a>
                    <a class="nav-sublink" href="#" @click="\${(e) => e.preventDefault()}">Preferences</a>
                  </ag-sidebar-nav-submenu>
                </ag-sidebar-nav-item>
              </ag-sidebar-nav>

              <div
                slot="ag-footer"
                style="font-size: 0.875rem; color: var(--ag-text-secondary);"
              >
                © 2024 Company
              </div>
            </ag-sidebar>

            <main style="flex: 1; padding: 2rem; overflow: auto; background: var(--ag-background);">
              <h1 style="margin-top: 0;">Main Content</h1>
              <p>Click the header toggle to collapse the sidebar into rail mode.</p>
              <p>When collapsed, hover over items with submenus to see them in popovers.</p>
            </main>
          </div>
        </div>

        <div class="mbe4">
          <h2>Sidebar with Header Actions</h2>
          <p>
            Demonstrates using <code>ag-header-start</code>, <code>ag-header-end</code>, and <code>ag-header-toggle</code> slots
            for a composable header layout with action buttons.
          </p>
        </div>
        <div class="mbe6">
          <div style="position: relative; display: flex; height: 500px; border: 1px solid var(--ag-border-color); border-radius: 0.5rem; overflow: hidden; contain: layout;">
            <ag-sidebar
              ?open="\${this.sidebar2.isOpen}"
              ?collapsed="\${this.sidebar2.isCollapsed}"
              show-mobile-toggle
              @toggle="\${(e) => { this.sidebar2.isOpen = e.detail; this.requestUpdate(); }}"
              @collapse="\${(e) => { this.sidebar2.isCollapsed = e.detail; this.requestUpdate(); }}"
            >
              <h2
                slot="ag-header-start"
                style="margin: 0; font-size: 1.125rem; font-weight: 600;"
              >
                My Application
              </h2>
              <button
                type="button"
                slot="ag-header-end"
                @click="\${() => {}}"
                style="background: none; border: none; padding: 8px; cursor: pointer; display: flex; align-items: center; color: inherit; border-radius: 0.25rem;"
                aria-label="Settings"
                title="Settings"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </button>
              <button
                type="button"
                slot="ag-header-toggle"
                @click="\${this.toggleSidebar2Collapse}"
                style="background: none; border: none; padding: 8px 0; cursor: pointer; display: flex; align-items: center; color: inherit;"
                aria-label="Toggle sidebar"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M9 3v18" />
                </svg>
              </button>

              <ag-sidebar-nav>
                <ag-sidebar-nav-item>
                  <button
                    type="button"
                    class="nav-button active"
                    aria-current="page"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                      <polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                    <span class="nav-label">Dashboard</span>
                  </button>
                </ag-sidebar-nav-item>
                <ag-sidebar-nav-item>
                  <button
                    type="button"
                    class="nav-button"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                    </svg>
                    <span class="nav-label">Projects</span>
                  </button>
                </ag-sidebar-nav-item>
                <ag-sidebar-nav-item>
                  <button
                    type="button"
                    class="nav-button"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                    <span class="nav-label">Team</span>
                  </button>
                </ag-sidebar-nav-item>
              </ag-sidebar-nav>

              <div
                slot="ag-footer"
                style="font-size: 0.875rem; color: var(--ag-text-secondary);"
              >
                © 2024 Company
              </div>
            </ag-sidebar>

            <main style="flex: 1; padding: 2rem; overflow: auto; background: var(--ag-background);">
              <h1 style="margin-top: 0;">Header Actions Pattern</h1>
              <p>The header includes a settings button in the <code>ag-header-end</code> slot.</p>
              <p>This allows for flexible header layouts with multiple action buttons.</p>
            </main>
          </div>
        </div>

        <div class="mbe4">
          <h2>Sidebar with Built-in Toggle</h2>
          <p>
            Using <code>show-header-toggle</code> adds a built-in collapse button automatically.
          </p>
        </div>
        <div class="mbe6">
          <div style="position: relative; display: flex; height: 500px; border: 1px solid var(--ag-border-color); border-radius: 0.5rem; overflow: hidden; contain: layout;">
            <ag-sidebar
              ?open="\${this.sidebar3.isOpen}"
              ?collapsed="\${this.sidebar3.isCollapsed}"
              show-header-toggle
              show-mobile-toggle
              @toggle="\${(e) => { this.sidebar3.isOpen = e.detail; this.requestUpdate(); }}"
              @collapse="\${(e) => { this.sidebar3.isCollapsed = e.detail; this.requestUpdate(); }}"
            >
              <h2
                slot="ag-header-start"
                style="margin: 0; font-size: 1.125rem; font-weight: 600;"
              >
                Built-in Toggle
              </h2>

              <ag-sidebar-nav>
                <ag-sidebar-nav-item>
                  <button
                    type="button"
                    class="nav-button active"
                    aria-current="page"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                      <polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                    <span class="nav-label">Dashboard</span>
                  </button>
                </ag-sidebar-nav-item>
                <ag-sidebar-nav-item>
                  <button
                    type="button"
                    class="nav-button"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                    </svg>
                    <span class="nav-label">Projects</span>
                  </button>
                </ag-sidebar-nav-item>
                <ag-sidebar-nav-item>
                  <button
                    type="button"
                    class="nav-button"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                    <span class="nav-label">Team</span>
                  </button>
                </ag-sidebar-nav-item>
              </ag-sidebar-nav>

              <div
                slot="ag-footer"
                style="font-size: 0.875rem; color: var(--ag-text-secondary);"
              >
                © 2024 Company
              </div>
            </ag-sidebar>

            <main style="flex: 1; padding: 2rem; overflow: auto; background: var(--ag-background);">
              <h1 style="margin-top: 0;">Built-in Header Toggle</h1>
              <p>No need to provide a custom toggle button—the sidebar includes one automatically.</p>
            </main>
          </div>
        </div>

        <div class="mbe4">
          <h2>Disable Compact Mode</h2>
          <p>
            With <code>disable-compact-mode</code>, the sidebar has no intermediate collapsed/rail state.
            It's either fully open (expanded) or completely hidden. This pattern is used in applications like Claude AI Studio.
          </p>
        </div>
        <div class="mbe6">
          <div style="position: relative; display: flex; height: 500px; border: 1px solid var(--ag-border-color); border-radius: 0.5rem; overflow: hidden; contain: layout;">
            <ag-sidebar
              ?open="\${this.sidebar4.isOpen}"
              disable-compact-mode
              show-mobile-toggle
              @toggle="\${(e) => { this.sidebar4.isOpen = e.detail; this.requestUpdate(); }}"
            >
              <h2
                slot="ag-header-start"
                style="margin: 0; font-size: 1.125rem; font-weight: 600;"
              >
                AI Studio
              </h2>
              <button
                type="button"
                slot="ag-header-toggle"
                @click="\${this.toggleSidebar4Responsive}"
                style="background: none; border: none; padding: 8px 0; cursor: pointer; display: flex; align-items: center; color: inherit;"
                aria-label="Toggle sidebar"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
                </svg>
              </button>

              <ag-sidebar-nav>
                <ag-sidebar-nav-item>
                  <button
                    type="button"
                    class="nav-button active"
                    aria-current="page"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                      <polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                    <span class="nav-label">Dashboard</span>
                  </button>
                </ag-sidebar-nav-item>
                <ag-sidebar-nav-item>
                  <button
                    type="button"
                    class="nav-button"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                    </svg>
                    <span class="nav-label">Projects</span>
                  </button>
                </ag-sidebar-nav-item>
                <ag-sidebar-nav-item>
                  <button
                    type="button"
                    class="nav-button"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                    <span class="nav-label">Team</span>
                  </button>
                </ag-sidebar-nav-item>
                <ag-sidebar-nav-item>
                  <button
                    type="button"
                    class="nav-button"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                    <span class="nav-label">Settings</span>
                  </button>
                </ag-sidebar-nav-item>
              </ag-sidebar-nav>

              <div
                slot="ag-footer"
                style="font-size: 0.875rem; color: var(--ag-text-secondary);"
              >
                © 2024 Company
              </div>
            </ag-sidebar>

            <main style="flex: 1; padding: 2rem; overflow: auto; background: var(--ag-background);">
              <h1 style="margin-top: 0;">Disable Compact Mode</h1>
              <p>Use the mobile toggle button to show/hide the sidebar.</p>
              <p>Notice there's no collapsed/rail mode—it's either fully visible or completely hidden.</p>
            </main>
          </div>
        </div>

        <div class="mbe4">
          <h2>Active Item Tracking</h2>
          <p>
            Click navigation items to see the active state change. This demonstrates how to track the current route
            and apply active styling to both top-level and submenu items.
          </p>
        </div>
        <div class="mbe6">
          <div style="position: relative; display: flex; height: 500px; border: 1px solid var(--ag-border-color); border-radius: 0.5rem; overflow: hidden; contain: layout;">
            <ag-sidebar
              ?open="\${this.sidebar5.isOpen}"
              ?collapsed="\${this.sidebar5.isCollapsed}"
              show-mobile-toggle
              @toggle="\${(e) => { this.sidebar5.isOpen = e.detail; this.requestUpdate(); }}"
              @collapse="\${(e) => { this.sidebar5.isCollapsed = e.detail; this.requestUpdate(); }}"
            >
              <h2
                slot="ag-header-start"
                style="margin: 0; font-size: 1.125rem; font-weight: 600;"
              >
                Navigation
              </h2>
              <button
                type="button"
                slot="ag-header-toggle"
                @click="\${this.toggleSidebar5Collapse}"
                style="background: none; border: none; padding: 8px 0; cursor: pointer; display: flex; align-items: center; color: inherit;"
                aria-label="Toggle sidebar"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M9 3v18" />
                </svg>
              </button>

              <ag-sidebar-nav>
                <ag-sidebar-nav-item>
                  <button
                    type="button"
                    class="nav-button active"
                    aria-current="page"
                    data-route="/dashboard"
                    @click="\${(e) => this.handleNavClick('/dashboard', e)}"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                      <polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                    <span class="nav-label">Dashboard</span>
                  </button>
                </ag-sidebar-nav-item>

                <ag-sidebar-nav-item>
                  <button
                    type="button"
                    class="nav-button"
                    data-route="/projects"
                    @click="\${(e) => this.handleNavClick('/projects', e)}"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                    </svg>
                    <span class="nav-label">Projects</span>
                  </button>
                </ag-sidebar-nav-item>

                <ag-sidebar-nav-item>
                  <button
                    type="button"
                    class="nav-button"
                    data-route="/team"
                    @click="\${(e) => this.handleNavClick('/team', e)}"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                    <span class="nav-label">Team</span>
                  </button>
                </ag-sidebar-nav-item>

                <ag-sidebar-nav-item>
                  <button
                    type="button"
                    class="nav-button nav-button-expanded"
                    aria-expanded="false"
                    data-route="/settings"
                    @click="\${this.handleSettingsClick}"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                    <span class="nav-label">Settings</span>
                    <span class="chevron">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="9 18 15 12 9 6"/>
                      </svg>
                    </span>
                  </button>

                  <ag-popover
                    class="nav-button-collapsed"
                    placement="right-start"
                    trigger-type="click"
                    distance="8"
                    arrow
                    .showHeader="\${false}"
                  >
                    <button
                      slot="trigger"
                      type="button"
                      class="nav-button"
                      data-route="/settings"
                      @click="\${(e) => this.handleNavClick('/settings', e)}"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
                        <circle cx="12" cy="12" r="3"/>
                      </svg>
                      <span class="nav-label">Settings</span>
                      <span class="collapsed-indicator">
                        <svg viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 3l2 2 2-2" stroke="currentColor" stroke-width="1" stroke-linecap="round"/>
                        </svg>
                      </span>
                    </button>
                    <ag-sidebar-nav-popover-submenu
                      slot="content"
                      class="popover-submenu"
                    >
                      <a
                        href="#"
                        class="nav-sublink"
                        data-route="/settings/profile"
                        @click="\${(e) => this.handleNavClick('/settings/profile', e)}"
                      >Profile</a>
                      <a
                        href="#"
                        class="nav-sublink"
                        data-route="/settings/billing"
                        @click="\${(e) => this.handleNavClick('/settings/billing', e)}"
                      >Billing</a>
                      <a
                        href="#"
                        class="nav-sublink"
                        data-route="/settings/security"
                        @click="\${(e) => this.handleNavClick('/settings/security', e)}"
                      >Security</a>
                    </ag-sidebar-nav-popover-submenu>
                  </ag-popover>

                  <ag-sidebar-nav-submenu>
                    <a
                      class="nav-sublink"
                      href="#"
                      data-route="/settings/profile"
                      @click="\${(e) => this.handleNavClick('/settings/profile', e)}"
                    >Profile</a>
                    <a
                      class="nav-sublink"
                      href="#"
                      data-route="/settings/billing"
                      @click="\${(e) => this.handleNavClick('/settings/billing', e)}"
                    >Billing</a>
                    <a
                      class="nav-sublink"
                      href="#"
                      data-route="/settings/security"
                      @click="\${(e) => this.handleNavClick('/settings/security', e)}"
                    >Security</a>
                  </ag-sidebar-nav-submenu>
                </ag-sidebar-nav-item>
              </ag-sidebar-nav>
            </ag-sidebar>

            <main style="flex: 1; padding: 2rem; overflow: auto; background: var(--ag-background);">
              <h1 style="margin-top: 0;">Active Item Tracking</h1>
              <p>Current route: <strong>\${this.sidebar5.activeRoute}</strong></p>
              <p>Click navigation items to see the active state change.</p>
              <ul>
                <li><strong>Active styling:</strong> Background color and font weight change</li>
                <li><strong>ARIA current:</strong> The active item has aria-current="page" for accessibility</li>
                <li><strong>Submenu support:</strong> Sublinks also track active state</li>
                <li><strong>Popover sync:</strong> Active state works in both inline and popover modes</li>
              </ul>
              <p>
                In a real application, you'd integrate this with your router (Vue Router, etc.) to automatically
                update the active state based on the current route.
              </p>
            </main>
          </div>
        </div>
      </section>
    \`;
  }
}

customElements.define('sidebar-lit-examples', SidebarLitExamples);
`,da=`import { ReactSidebar } from "agnosticui-core/sidebar/react";
import {
  ReactSidebarNav,
  ReactSidebarNavItem,
  ReactSidebarNavSubmenu,
  ReactSidebarNavPopoverSubmenu,
} from "agnosticui-core/sidebar-nav/react";
import { ReactPopover } from "agnosticui-core/popover/react";
import { useState, useEffect } from "react";

// SVG Icons as inline components
const HomeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);

const FolderIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
  </svg>
);

const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const SettingsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const ChevronRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"/>
  </svg>
);

const PanelIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="M9 3v18" />
  </svg>
);

const CommandIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
  </svg>
);

export default function SidebarReactExamples() {
  const [sidebar1, setSidebar1] = useState({ isOpen: true, isCollapsed: false });
  const [sidebar2, setSidebar2] = useState({ isOpen: true, isCollapsed: false });
  const [sidebar3, setSidebar3] = useState({ isOpen: true, isCollapsed: false });
  const [sidebar4, setSidebar4] = useState({ isOpen: true });
  const [sidebar5, setSidebar5] = useState({ isOpen: true, isCollapsed: false, activeRoute: '/dashboard' });

  useEffect(() => {
    // Inject critical sidebar navigation styles
    const styleId = 'sidebar-nav-styles-react';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = \`
        /* CRITICAL: Sidebar component width - must be defined! */
        ag-sidebar {
          width: var(--ag-sidebar-width, 280px);
          transition: width var(--ag-sidebar-transition-duration, 0.3s) var(--ag-sidebar-transition-easing, ease);
          overflow: visible;
        }

        ag-sidebar[collapsed] {
          width: 64px;
        }

        /* Fix disable-compact-mode sidebar visibility */
        ag-sidebar[disable-compact-mode][open] {
          display: flex !important;
          visibility: visible !important;
          opacity: 1 !important;
          width: var(--ag-sidebar-width, 280px) !important;
          transform: none !important;
        }

        /* Navigation button base styles */
        .nav-button {
          display: flex;
          align-items: center;
          gap: var(--ag-space-3);
          position: relative;
          padding: var(--ag-space-2) var(--ag-space-3);
          margin-block-end: var(--ag-space-1);
          border: none;
          background: none;
          cursor: pointer;
          width: 100%;
          text-align: left;
          border-radius: var(--ag-radius-sm);
          transition: background var(--ag-fx-duration-sm);
          color: inherit;
        }

        .nav-button svg {
          flex-shrink: 0;
        }

        .nav-button:hover {
          background: var(--ag-background-secondary);
        }

        .nav-button.active {
          background: var(--ag-primary-background);
          color: var(--ag-primary-text);
          font-weight: 500;
        }

        .nav-label {
          flex-grow: 1;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          transition: opacity var(--ag-sidebar-transition-duration) var(--ag-sidebar-transition-easing);
        }

        /* Chevron rotation for expanded submenus */
        .chevron {
          display: flex;
          align-items: center;
          transition: transform var(--ag-fx-duration-md), opacity var(--ag-fx-duration-sm);
          margin-left: auto;
        }

        .nav-button[aria-expanded="true"] .chevron {
          transform: rotate(90deg);
        }

        /* Collapsed indicator - small triangle at 4:30 position */
        .collapsed-indicator {
          display: none;
          position: absolute;
          bottom: -1px;
          right: -1px;
          width: var(--ag-space-3);
          height: var(--ag-space-3);
        }

        .collapsed-indicator svg {
          color: var(--ag-text-muted);
          transform: rotate(315deg);
        }

        /* Show collapsed indicator in collapsed mode for buttons with submenus */
        ag-sidebar[collapsed] .nav-button[aria-expanded] .collapsed-indicator {
          display: block;
        }

        /* CRITICAL: Properly handle collapsed state */
        ag-sidebar[collapsed] .nav-label,
        ag-sidebar[collapsed] .chevron {
          opacity: 0;
          pointer-events: none;
          display: none;
        }

        /* Center icons in collapsed mode */
        ag-sidebar[collapsed] .nav-button {
          width: auto;
          padding: var(--ag-space-2);
        }

        /* Visibility rules for expanded vs collapsed mode */
        ag-sidebar[collapsed] ag-sidebar-nav-submenu:not(.popover-submenu),
        ag-sidebar:not([collapsed]) ag-popover,
        ag-sidebar[collapsed] .nav-button-expanded,
        ag-sidebar:not([collapsed]) .nav-button-collapsed {
          display: none !important;
        }

        /* Fix popover centering in collapsed mode */
        ag-sidebar[collapsed] ag-popover.nav-button-collapsed {
          display: block !important;
        }

        /* CRITICAL: Submenu visibility - hidden by default, visible when open */
        ag-sidebar-nav-submenu {
          display: none;
          overflow: hidden;
        }

        ag-sidebar-nav-submenu[open] {
          display: block;
        }

        /* Submenu link styles */
        .nav-sublink {
          display: block;
          padding: var(--ag-space-2) var(--ag-space-3);
          margin-block-end: var(--ag-space-1);
          color: inherit;
          text-decoration: none;
          border-radius: var(--ag-radius-sm);
          transition: background var(--ag-fx-duration-sm);
        }

        .nav-sublink:hover {
          background: var(--ag-background-secondary);
        }

        /* Active state styles for navigation tracking */
        .nav-button.active,
        .nav-sublink.active {
          background: var(--ag-primary-background);
          color: var(--ag-primary-text);
          font-weight: 500;
        }

        /* Popover submenu styles */
        .nav-button-collapsed::part(ag-popover-body) {
          padding: var(--ag-space-1);
        }

        /* Hide popover header for nav popovers */
        .nav-button-collapsed::part(ag-popover-header) {
          display: none;
        }
      \`;
      document.head.appendChild(style);
    }

    // Set up event listeners for submenu toggles
    const buttons = document.querySelectorAll('.nav-button-expanded');
    buttons.forEach((button) => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const navItem = button.closest('ag-sidebar-nav-item');
        const submenu = navItem?.querySelector('ag-sidebar-nav-submenu');

        if (!submenu) return;

        const currentAriaExpanded = button.getAttribute('aria-expanded');
        const isCurrentlyExpanded = currentAriaExpanded === 'true';

        if (isCurrentlyExpanded) {
          button.setAttribute('aria-expanded', 'false');
          submenu.removeAttribute('open');
        } else {
          button.setAttribute('aria-expanded', 'true');
          submenu.setAttribute('open', '');
        }
      });
    });
  }, []);

  const toggleSidebar1Collapse = () => {
    setSidebar1({ ...sidebar1, isCollapsed: !sidebar1.isCollapsed });
  };

  const toggleSidebar2Collapse = () => {
    setSidebar2({ ...sidebar2, isCollapsed: !sidebar2.isCollapsed });
  };

  const toggleSidebar4Responsive = () => {
    setSidebar4({ ...sidebar4, isOpen: !sidebar4.isOpen });
  };

  const toggleSidebar5Collapse = () => {
    setSidebar5({ ...sidebar5, isCollapsed: !sidebar5.isCollapsed });
  };

  const handleNavClick = (route, e) => {
    e.preventDefault();
    setSidebar5({ ...sidebar5, activeRoute: route });

    const sidebar = e.target.closest('ag-sidebar');

    // Update top-level nav buttons
    const buttons = sidebar?.querySelectorAll('.nav-button');
    buttons?.forEach((btn) => {
      const isActive = btn.getAttribute('data-route') === route;
      btn.classList.toggle('active', isActive);
      if (isActive) {
        btn.setAttribute('aria-current', 'page');
      } else {
        btn.removeAttribute('aria-current');
      }
    });

    // Update sublinks (both inline and in popovers)
    const sublinks = sidebar?.querySelectorAll('.nav-sublink');
    sublinks?.forEach((link) => {
      const isActive = link.getAttribute('data-route') === route;
      link.classList.toggle('active', isActive);
      if (isActive) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  };

  const handleSettingsClick = (e) => {
    handleNavClick('/settings', e);
    // Also toggle the submenu
    const button = e.currentTarget;
    const navItem = button.closest('ag-sidebar-nav-item');
    const submenu = navItem?.querySelector('ag-sidebar-nav-submenu');

    if (!submenu) return;

    const currentAriaExpanded = button.getAttribute('aria-expanded');
    const isCurrentlyExpanded = currentAriaExpanded === 'true';

    if (isCurrentlyExpanded) {
      button.setAttribute('aria-expanded', 'false');
      submenu.removeAttribute('open');
    } else {
      button.setAttribute('aria-expanded', 'true');
      submenu.setAttribute('open', '');
    }
  };

  return (
    <section>
      <div className="mbe4">
        <h2>Default Sidebar with Navigation</h2>
        <p>
          Demonstrates the sidebar with navigation items, submenus, and both expanded/collapsed states.
          Click the header toggle to collapse into rail mode (icon-only).
        </p>
      </div>
      <div className="mbe6">
        <div style={{ position: 'relative', display: 'flex', height: '500px', border: '1px solid var(--ag-border-color)', borderRadius: '0.5rem', overflow: 'hidden', contain: 'layout' }}>
          <ReactSidebar
            open={sidebar1.isOpen}
            collapsed={sidebar1.isCollapsed}
            showMobileToggle={true}
            onToggle={(open) => setSidebar1({ ...sidebar1, isOpen: open })}
            onCollapse={(collapsed) => setSidebar1({ ...sidebar1, isCollapsed: collapsed })}
          >
            <h2
              slot="ag-header-start"
              style={{ margin: 0, fontSize: '1.125rem', fontWeight: 600 }}
            >
              Dashboard
            </h2>
            <button
              type="button"
              slot="ag-header-toggle"
              onClick={toggleSidebar1Collapse}
              style={{ background: 'none', border: 'none', padding: '8px 0', cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'inherit' }}
              aria-label="Toggle sidebar"
            >
              <PanelIcon />
            </button>

            <ReactSidebarNav>
              <ReactSidebarNavItem>
                <button
                  type="button"
                  className="nav-button active"
                  aria-current="page"
                >
                  <HomeIcon />
                  <span className="nav-label">Dashboard</span>
                </button>
              </ReactSidebarNavItem>

              <ReactSidebarNavItem>
                <button
                  type="button"
                  className="nav-button nav-button-expanded"
                  aria-expanded="false"
                >
                  <FolderIcon />
                  <span className="nav-label">Projects</span>
                  <span className="chevron"><ChevronRightIcon /></span>
                </button>

                {/* Popover for COLLAPSED mode */}
                <ReactPopover
                  className="nav-button-collapsed"
                  placement="right-start"
                  triggerType="click"
                  distance={8}
                  arrow={true}
                >
                  <button
                    slot="trigger"
                    type="button"
                    className="nav-button"
                  >
                    <FolderIcon />
                    <span className="nav-label">Projects</span>
                    <span className="collapsed-indicator">
                      <svg viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 3l2 2 2-2" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                      </svg>
                    </span>
                  </button>
                  <ReactSidebarNavPopoverSubmenu
                    slot="content"
                    className="popover-submenu"
                  >
                    <a href="#" className="nav-sublink" onClick={(e) => e.preventDefault()}>Project Alpha</a>
                    <a href="#" className="nav-sublink" onClick={(e) => e.preventDefault()}>Project Beta</a>
                    <a href="#" className="nav-sublink" onClick={(e) => e.preventDefault()}>Project Gamma</a>
                  </ReactSidebarNavPopoverSubmenu>
                </ReactPopover>

                {/* Inline submenu for expanded mode */}
                <ReactSidebarNavSubmenu>
                  <a className="nav-sublink" href="#" onClick={(e) => e.preventDefault()}>Project Alpha</a>
                  <a className="nav-sublink" href="#" onClick={(e) => e.preventDefault()}>Project Beta</a>
                  <a className="nav-sublink" href="#" onClick={(e) => e.preventDefault()}>Project Gamma</a>
                </ReactSidebarNavSubmenu>
              </ReactSidebarNavItem>

              <ReactSidebarNavItem>
                <button
                  type="button"
                  className="nav-button"
                >
                  <UserIcon />
                  <span className="nav-label">Team</span>
                </button>
              </ReactSidebarNavItem>

              <ReactSidebarNavItem>
                <button
                  type="button"
                  className="nav-button nav-button-expanded"
                  aria-expanded="false"
                >
                  <SettingsIcon />
                  <span className="nav-label">Settings</span>
                  <span className="chevron"><ChevronRightIcon /></span>
                </button>

                {/* Popover for COLLAPSED mode */}
                <ReactPopover
                  className="nav-button-collapsed"
                  placement="right-start"
                  triggerType="click"
                  distance={8}
                  arrow={true}
                >
                  <button
                    slot="trigger"
                    type="button"
                    className="nav-button"
                  >
                    <SettingsIcon />
                    <span className="nav-label">Settings</span>
                    <span className="collapsed-indicator">
                      <svg viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 3l2 2 2-2" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                      </svg>
                    </span>
                  </button>
                  <ReactSidebarNavPopoverSubmenu
                    slot="content"
                    className="popover-submenu"
                  >
                    <a href="#" className="nav-sublink" onClick={(e) => e.preventDefault()}>Profile</a>
                    <a href="#" className="nav-sublink" onClick={(e) => e.preventDefault()}>Billing</a>
                    <a href="#" className="nav-sublink" onClick={(e) => e.preventDefault()}>Security</a>
                    <a href="#" className="nav-sublink" onClick={(e) => e.preventDefault()}>Preferences</a>
                  </ReactSidebarNavPopoverSubmenu>
                </ReactPopover>

                <ReactSidebarNavSubmenu>
                  <a className="nav-sublink" href="#" onClick={(e) => e.preventDefault()}>Profile</a>
                  <a className="nav-sublink" href="#" onClick={(e) => e.preventDefault()}>Billing</a>
                  <a className="nav-sublink" href="#" onClick={(e) => e.preventDefault()}>Security</a>
                  <a className="nav-sublink" href="#" onClick={(e) => e.preventDefault()}>Preferences</a>
                </ReactSidebarNavSubmenu>
              </ReactSidebarNavItem>
            </ReactSidebarNav>

            <div
              slot="ag-footer"
              style={{ fontSize: '0.875rem', color: 'var(--ag-text-secondary)' }}
            >
              © 2024 Company
            </div>
          </ReactSidebar>

          <main style={{ flex: 1, padding: '2rem', overflow: 'auto', background: 'var(--ag-background)' }}>
            <h1 style={{ marginTop: 0 }}>Main Content</h1>
            <p>Click the header toggle to collapse the sidebar into rail mode.</p>
            <p>When collapsed, hover over items with submenus to see them in popovers.</p>
          </main>
        </div>
      </div>

      <div className="mbe4">
        <h2>Sidebar with Header Actions</h2>
        <p>
          Demonstrates using <code>ag-header-start</code>, <code>ag-header-end</code>, and <code>ag-header-toggle</code> slots
          for a composable header layout with action buttons.
        </p>
      </div>
      <div className="mbe6">
        <div style={{ position: 'relative', display: 'flex', height: '500px', border: '1px solid var(--ag-border-color)', borderRadius: '0.5rem', overflow: 'hidden', contain: 'layout' }}>
          <ReactSidebar
            open={sidebar2.isOpen}
            collapsed={sidebar2.isCollapsed}
            showMobileToggle={true}
            onToggle={(open) => setSidebar2({ ...sidebar2, isOpen: open })}
            onCollapse={(collapsed) => setSidebar2({ ...sidebar2, isCollapsed: collapsed })}
          >
            <h2
              slot="ag-header-start"
              style={{ margin: 0, fontSize: '1.125rem', fontWeight: 600 }}
            >
              My Application
            </h2>
            <button
              type="button"
              slot="ag-header-end"
              onClick={() => {}}
              style={{ background: 'none', border: 'none', padding: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'inherit', borderRadius: '0.25rem' }}
              aria-label="Settings"
              title="Settings"
            >
              <SettingsIcon />
            </button>
            <button
              type="button"
              slot="ag-header-toggle"
              onClick={toggleSidebar2Collapse}
              style={{ background: 'none', border: 'none', padding: '8px 0', cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'inherit' }}
              aria-label="Toggle sidebar"
            >
              <PanelIcon />
            </button>

            <ReactSidebarNav>
              <ReactSidebarNavItem>
                <button
                  type="button"
                  className="nav-button active"
                  aria-current="page"
                >
                  <HomeIcon />
                  <span className="nav-label">Dashboard</span>
                </button>
              </ReactSidebarNavItem>
              <ReactSidebarNavItem>
                <button
                  type="button"
                  className="nav-button"
                >
                  <FolderIcon />
                  <span className="nav-label">Projects</span>
                </button>
              </ReactSidebarNavItem>
              <ReactSidebarNavItem>
                <button
                  type="button"
                  className="nav-button"
                >
                  <UserIcon />
                  <span className="nav-label">Team</span>
                </button>
              </ReactSidebarNavItem>
            </ReactSidebarNav>

            <div
              slot="ag-footer"
              style={{ fontSize: '0.875rem', color: 'var(--ag-text-secondary)' }}
            >
              © 2024 Company
            </div>
          </ReactSidebar>

          <main style={{ flex: 1, padding: '2rem', overflow: 'auto', background: 'var(--ag-background)' }}>
            <h1 style={{ marginTop: 0 }}>Header Actions Pattern</h1>
            <p>The header includes a settings button in the <code>ag-header-end</code> slot.</p>
            <p>This allows for flexible header layouts with multiple action buttons.</p>
          </main>
        </div>
      </div>

      <div className="mbe4">
        <h2>Sidebar with Built-in Toggle</h2>
        <p>
          Using <code>show-header-toggle</code> adds a built-in collapse button automatically.
        </p>
      </div>
      <div className="mbe6">
        <div style={{ position: 'relative', display: 'flex', height: '500px', border: '1px solid var(--ag-border-color)', borderRadius: '0.5rem', overflow: 'hidden', contain: 'layout' }}>
          <ReactSidebar
            open={sidebar3.isOpen}
            collapsed={sidebar3.isCollapsed}
            showHeaderToggle={true}
            showMobileToggle={true}
            onToggle={(open) => setSidebar3({ ...sidebar3, isOpen: open })}
            onCollapse={(collapsed) => setSidebar3({ ...sidebar3, isCollapsed: collapsed })}
          >
            <h2
              slot="ag-header-start"
              style={{ margin: 0, fontSize: '1.125rem', fontWeight: 600 }}
            >
              Built-in Toggle
            </h2>

            <ReactSidebarNav>
              <ReactSidebarNavItem>
                <button
                  type="button"
                  className="nav-button active"
                  aria-current="page"
                >
                  <HomeIcon />
                  <span className="nav-label">Dashboard</span>
                </button>
              </ReactSidebarNavItem>
              <ReactSidebarNavItem>
                <button
                  type="button"
                  className="nav-button"
                >
                  <FolderIcon />
                  <span className="nav-label">Projects</span>
                </button>
              </ReactSidebarNavItem>
              <ReactSidebarNavItem>
                <button
                  type="button"
                  className="nav-button"
                >
                  <UserIcon />
                  <span className="nav-label">Team</span>
                </button>
              </ReactSidebarNavItem>
            </ReactSidebarNav>

            <div
              slot="ag-footer"
              style={{ fontSize: '0.875rem', color: 'var(--ag-text-secondary)' }}
            >
              © 2024 Company
            </div>
          </ReactSidebar>

          <main style={{ flex: 1, padding: '2rem', overflow: 'auto', background: 'var(--ag-background)' }}>
            <h1 style={{ marginTop: 0 }}>Built-in Header Toggle</h1>
            <p>No need to provide a custom toggle button—the sidebar includes one automatically.</p>
          </main>
        </div>
      </div>

      <div className="mbe4">
        <h2>Disable Compact Mode</h2>
        <p>
          With <code>disable-compact-mode</code>, the sidebar has no intermediate collapsed/rail state.
          It's either fully open (expanded) or completely hidden. This pattern is used in applications like Claude AI Studio.
        </p>
      </div>
      <div className="mbe6">
        <div style={{ position: 'relative', display: 'flex', height: '500px', border: '1px solid var(--ag-border-color)', borderRadius: '0.5rem', overflow: 'hidden', contain: 'layout' }}>
          <ReactSidebar
            open={sidebar4.isOpen}
            disableCompactMode={true}
            showMobileToggle={true}
            onToggle={(open) => setSidebar4({ ...sidebar4, isOpen: open })}
          >
            <h2
              slot="ag-header-start"
              style={{ margin: 0, fontSize: '1.125rem', fontWeight: 600 }}
            >
              AI Studio
            </h2>
            <button
              type="button"
              slot="ag-header-toggle"
              onClick={toggleSidebar4Responsive}
              style={{ background: 'none', border: 'none', padding: '8px 0', cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'inherit' }}
              aria-label="Toggle sidebar"
            >
              <CommandIcon />
            </button>

            <ReactSidebarNav>
              <ReactSidebarNavItem>
                <button
                  type="button"
                  className="nav-button active"
                  aria-current="page"
                >
                  <HomeIcon />
                  <span className="nav-label">Dashboard</span>
                </button>
              </ReactSidebarNavItem>
              <ReactSidebarNavItem>
                <button
                  type="button"
                  className="nav-button"
                >
                  <FolderIcon />
                  <span className="nav-label">Projects</span>
                </button>
              </ReactSidebarNavItem>
              <ReactSidebarNavItem>
                <button
                  type="button"
                  className="nav-button"
                >
                  <UserIcon />
                  <span className="nav-label">Team</span>
                </button>
              </ReactSidebarNavItem>
              <ReactSidebarNavItem>
                <button
                  type="button"
                  className="nav-button"
                >
                  <SettingsIcon />
                  <span className="nav-label">Settings</span>
                </button>
              </ReactSidebarNavItem>
            </ReactSidebarNav>

            <div
              slot="ag-footer"
              style={{ fontSize: '0.875rem', color: 'var(--ag-text-secondary)' }}
            >
              © 2024 Company
            </div>
          </ReactSidebar>

          <main style={{ flex: 1, padding: '2rem', overflow: 'auto', background: 'var(--ag-background)' }}>
            <h1 style={{ marginTop: 0 }}>Disable Compact Mode</h1>
            <p>Use the mobile toggle button to show/hide the sidebar.</p>
            <p>Notice there's no collapsed/rail mode—it's either fully visible or completely hidden.</p>
          </main>
        </div>
      </div>

      <div className="mbe4">
        <h2>Active Item Tracking</h2>
        <p>
          Click navigation items to see the active state change. This demonstrates how to track the current route
          and apply active styling to both top-level and submenu items.
        </p>
      </div>
      <div className="mbe6">
        <div style={{ position: 'relative', display: 'flex', height: '500px', border: '1px solid var(--ag-border-color)', borderRadius: '0.5rem', overflow: 'hidden', contain: 'layout' }}>
          <ReactSidebar
            open={sidebar5.isOpen}
            collapsed={sidebar5.isCollapsed}
            showMobileToggle={true}
            onToggle={(open) => setSidebar5({ ...sidebar5, isOpen: open })}
            onCollapse={(collapsed) => setSidebar5({ ...sidebar5, isCollapsed: collapsed })}
          >
            <h2
              slot="ag-header-start"
              style={{ margin: 0, fontSize: '1.125rem', fontWeight: 600 }}
            >
              Navigation
            </h2>
            <button
              type="button"
              slot="ag-header-toggle"
              onClick={toggleSidebar5Collapse}
              style={{ background: 'none', border: 'none', padding: '8px 0', cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'inherit' }}
              aria-label="Toggle sidebar"
            >
              <PanelIcon />
            </button>

            <ReactSidebarNav>
              <ReactSidebarNavItem>
                <button
                  type="button"
                  className="nav-button active"
                  aria-current="page"
                  data-route="/dashboard"
                  onClick={(e) => handleNavClick('/dashboard', e)}
                >
                  <HomeIcon />
                  <span className="nav-label">Dashboard</span>
                </button>
              </ReactSidebarNavItem>

              <ReactSidebarNavItem>
                <button
                  type="button"
                  className="nav-button"
                  data-route="/projects"
                  onClick={(e) => handleNavClick('/projects', e)}
                >
                  <FolderIcon />
                  <span className="nav-label">Projects</span>
                </button>
              </ReactSidebarNavItem>

              <ReactSidebarNavItem>
                <button
                  type="button"
                  className="nav-button"
                  data-route="/team"
                  onClick={(e) => handleNavClick('/team', e)}
                >
                  <UserIcon />
                  <span className="nav-label">Team</span>
                </button>
              </ReactSidebarNavItem>

              <ReactSidebarNavItem>
                <button
                  type="button"
                  className="nav-button nav-button-expanded"
                  aria-expanded="false"
                  data-route="/settings"
                  onClick={handleSettingsClick}
                >
                  <SettingsIcon />
                  <span className="nav-label">Settings</span>
                  <span className="chevron"><ChevronRightIcon /></span>
                </button>

                <ReactPopover
                  className="nav-button-collapsed"
                  placement="right-start"
                  triggerType="click"
                  distance={8}
                  arrow={true}
                >
                  <button
                    slot="trigger"
                    type="button"
                    className="nav-button"
                    data-route="/settings"
                    onClick={(e) => handleNavClick('/settings', e)}
                  >
                    <SettingsIcon />
                    <span className="nav-label">Settings</span>
                    <span className="collapsed-indicator">
                      <svg viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 3l2 2 2-2" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                      </svg>
                    </span>
                  </button>
                  <ReactSidebarNavPopoverSubmenu
                    slot="content"
                    className="popover-submenu"
                  >
                    <a
                      href="#"
                      className="nav-sublink"
                      data-route="/settings/profile"
                      onClick={(e) => handleNavClick('/settings/profile', e)}
                    >Profile</a>
                    <a
                      href="#"
                      className="nav-sublink"
                      data-route="/settings/billing"
                      onClick={(e) => handleNavClick('/settings/billing', e)}
                    >Billing</a>
                    <a
                      href="#"
                      className="nav-sublink"
                      data-route="/settings/security"
                      onClick={(e) => handleNavClick('/settings/security', e)}
                    >Security</a>
                  </ReactSidebarNavPopoverSubmenu>
                </ReactPopover>

                <ReactSidebarNavSubmenu>
                  <a
                    className="nav-sublink"
                    href="#"
                    data-route="/settings/profile"
                    onClick={(e) => handleNavClick('/settings/profile', e)}
                  >Profile</a>
                  <a
                    className="nav-sublink"
                    href="#"
                    data-route="/settings/billing"
                    onClick={(e) => handleNavClick('/settings/billing', e)}
                  >Billing</a>
                  <a
                    className="nav-sublink"
                    href="#"
                    data-route="/settings/security"
                    onClick={(e) => handleNavClick('/settings/security', e)}
                  >Security</a>
                </ReactSidebarNavSubmenu>
              </ReactSidebarNavItem>
            </ReactSidebarNav>
          </ReactSidebar>

          <main style={{ flex: 1, padding: '2rem', overflow: 'auto', background: 'var(--ag-background)' }}>
            <h1 style={{ marginTop: 0 }}>Active Item Tracking</h1>
            <p>Current route: <strong>{sidebar5.activeRoute}</strong></p>
            <p>Click navigation items to see the active state change.</p>
            <ul>
              <li><strong>Active styling:</strong> Background color and font weight change</li>
              <li><strong>ARIA current:</strong> The active item has aria-current="page" for accessibility</li>
              <li><strong>Submenu support:</strong> Sublinks also track active state</li>
              <li><strong>Popover sync:</strong> Active state works in both inline and popover modes</li>
            </ul>
            <p>
              In a real application, you'd integrate this with your router (Vue Router, etc.) to automatically
              update the active state based on the current route.
            </p>
          </main>
        </div>
      </div>
    </section>
  );
}
`,ja=JSON.parse('{"title":"Sidebar","description":"","frontmatter":{},"headers":[],"relativePath":"components/sidebar.md","filePath":"components/sidebar.md"}'),ka={name:"components/sidebar.md"},Ma=Object.assign(ka,{setup(n){return(s,i)=>(C(),m("div",null,[i[1]||(i[1]=a("h1",{id:"sidebar",tabindex:"-1"},[k("Sidebar "),a("a",{class:"header-anchor",href:"#sidebar","aria-label":'Permalink to "Sidebar"'},"​")],-1)),t(K),i[2]||(i[2]=a("div",{class:"danger custom-block"},[a("p",{class:"custom-block-title"},"Experimental Component"),a("p",null,[k("The Sidebar is an "),a("strong",null,"experimental component"),k(` that departs from AgnosticUI's typical "primitives only" philosophy. Due to its complex nature and shadow DOM encapsulation, it requires some nuanced global CSS to function properly across all scenarios.`)]),a("p",null,[a("strong",null,"Use at your own risk."),k(" If you're comfortable with these architectural tradeoffs, feel free to use the component. We welcome contributions to help improve its implementation and reduce external dependencies.")])],-1)),i[3]||(i[3]=a("p",null,"A collapsible sidebar component for navigation with support for expanded/collapsed states, nested navigation, submenus, and responsive behavior. The Sidebar adapts seamlessly across desktop and mobile viewports with optional rail mode (icon-only) on desktop and overlay mode on mobile.",-1)),i[4]||(i[4]=a("h2",{id:"examples",tabindex:"-1"},[k("Examples "),a("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),t(ls,{component:"sidebar","vue-code":V(pa),"lit-code":V(ha),"react-code":V(da)},{vue:o(()=>[t(oa)]),lit:o(()=>[...i[0]||(i[0]=[a("sidebar-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),i[5]||(i[5]=O(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The framework examples below <code>import</code> AgnosticUI as an <code>npm</code> package. Alternatively, you can use the <strong>CLI for complete control, AI/LLM visibility, and full code ownership</strong>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> init</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> --framework</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> FRAMEWORK</span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;"> # react, vue, lit, svelte, etc.</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> add</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> Sidebar</span></span></code></pre></div><p>The CLI copies source code directly into your project, giving you full visibility and control. After running <code>npx ag add</code>, you&#39;ll receive exact import instructions.</p></div><details class="details custom-block"><summary>Vue</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> style</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;display: flex; height: 100vh;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueSidebar</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :open</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;isOpen&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :collapsed</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;isCollapsed&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :show-mobile-toggle</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;true&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      @update:open</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;isOpen = $event&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      @update:collapsed</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;isCollapsed = $event&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">h2</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        slot</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;ag-header-start&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        style</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;margin: 0; font-size: 1.125rem; font-weight: 600;&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        Dashboard</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">h2</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;button&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        slot</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;ag-header-toggle&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        @click</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;toggleCollapse&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        style</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;background: none; border: none; padding: 8px 0; cursor: pointer;&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        aria-label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Toggle sidebar&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">PanelIcon</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueSidebarNav</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueSidebarNavItem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;button&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> class</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;nav-button active&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> aria-current</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;page&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">Home</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> :size</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;20&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">span</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> class</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;nav-label&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Dashboard&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">span</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueSidebarNavItem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueSidebarNavItem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">          &lt;!-- Button for expanded mode with rotating chevron --&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">            type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;button&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">            class</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;nav-button nav-button-expanded&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">            aria-expanded</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;false&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">            @click</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;handleSubmenuToggle&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">Folder</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> :size</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;20&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">span</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> class</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;nav-label&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Projects&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">span</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">span</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> class</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;chevron&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ChevronRight</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> :size</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;16&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">span</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">          &lt;!-- Popover for collapsed mode - shows when sidebar is collapsed --&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VuePopover</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">            class</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;nav-button-collapsed&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">            placement</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;right-start&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">            trigger-type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;click&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">            :distance</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;8&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">            :arrow</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;true&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">              slot</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;trigger&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">              type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;button&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">              class</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;nav-button&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">              aria-expanded</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;false&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">              &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">Folder</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> :size</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;20&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">              &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">span</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> class</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;nav-label&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Projects&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">span</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">              &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">span</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> class</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;collapsed-indicator&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">                &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">svg</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">                  viewBox</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;0 0 8 8&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">                  fill</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;none&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">                  xmlns</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;http://www.w3.org/2000/svg&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">                &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">                  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">path</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">                    d</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;M2 3l2 2 2-2&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">                    stroke</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;currentColor&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">                    stroke-width</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;1&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">                    stroke-linecap</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;round&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">                  /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">                &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">svg</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">              &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">span</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueSidebarNavPopoverSubmenu</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">              slot</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;content&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">              class</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;nav-popover-submenu&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">              &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> href</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;#&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> class</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;nav-sublink&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Project Alpha&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">              &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> href</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;#&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> class</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;nav-sublink&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Project Beta&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueSidebarNavPopoverSubmenu</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VuePopover</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">          &lt;!-- Inline submenu for expanded mode --&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueSidebarNavSubmenu</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> class</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;nav-sublink&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> href</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;#&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Project Alpha&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> class</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;nav-sublink&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> href</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;#&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Project Beta&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueSidebarNavSubmenu</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueSidebarNavItem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueSidebarNav</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> slot</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;ag-footer&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> style</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;font-size: 0.875rem; color: #6b7280;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        © 2024 Company</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueSidebar</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">main</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> style</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;flex: 1; padding: 2rem;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">h1</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Main Content&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">h1</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">main</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> VueSidebar </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/sidebar/vue&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  VueSidebarNav,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  VueSidebarNavItem,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  VueSidebarNavSubmenu,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  VueSidebarNavPopoverSubmenu,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">} </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/sidebar-nav/vue&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { VuePopover } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/popover/vue&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { Home, Folder, ChevronRight } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;lucide-vue-next&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  components: {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    VueSidebar,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    VueSidebarNav,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    VueSidebarNavItem,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    VueSidebarNavSubmenu,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    VueSidebarNavPopoverSubmenu,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    VuePopover,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    Home,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    Folder,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    ChevronRight,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  }</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">,</span></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">  data</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">() </span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">    return</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      isOpen: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">true</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      isCollapsed: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">false</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    };</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  }</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  methods: {</span></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">    toggleCollapse</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">() {</span></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">      // Access the sidebar element to call toggleCollapse</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">      const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> sidebar</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> this</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">.$el.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">querySelector</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;ag-sidebar&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">      if</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (sidebar </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">&amp;&amp;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> sidebar.toggleCollapse) {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        sidebar.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">toggleCollapse</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">();</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      }</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    },</span></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">    handleSubmenuToggle</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">      const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> button</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> e.currentTarget;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">      const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> navItem</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> button.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">closest</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;ag-sidebar-nav-item&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">      const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> submenu</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> navItem?.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">querySelector</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;ag-sidebar-nav-submenu&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">      if</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">!</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">submenu) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">return</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">      const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> isExpanded</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> button.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">getAttribute</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;aria-expanded&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">===</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;true&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">      if</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (isExpanded) {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        button.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">setAttribute</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;aria-expanded&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;false&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        submenu.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">removeAttribute</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;open&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">else</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        button.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">setAttribute</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;aria-expanded&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;true&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        submenu.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">setAttribute</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;open&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      }</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  }</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">,</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><details class="details custom-block"><summary>React</summary><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { useState } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;react&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { ReactSidebar } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/sidebar/react&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  ReactSidebarNav,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  ReactSidebarNavItem,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  ReactSidebarNavSubmenu,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  ReactSidebarNavPopoverSubmenu,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">} </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/sidebar-nav/react&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { ReactPopover } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/popover/react&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { Home, Folder, ChevronRight } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;lucide-react&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> function</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> SidebarExample</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">() </span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> [</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">isOpen</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">setIsOpen</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">] </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> useState</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">true</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> [</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">isCollapsed</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">setIsCollapsed</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">] </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> useState</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">false</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> handleSubmenuToggle</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">    const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> button</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> e.currentTarget;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">    const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> navItem</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> button.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">closest</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;ag-sidebar-nav-item&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">    const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> submenu</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> navItem?.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">querySelector</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;ag-sidebar-nav-submenu&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">    if</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">!</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">submenu) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">return</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">    const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> isExpanded</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> button.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">getAttribute</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;aria-expanded&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">===</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;true&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">    if</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (isExpanded) {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      button.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">setAttribute</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;aria-expanded&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;false&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      submenu.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">removeAttribute</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;open&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">else</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      button.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">setAttribute</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;aria-expanded&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;true&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      submenu.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">setAttribute</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;open&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    }</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  return</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> style</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{ display: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;flex&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, height: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;100vh&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> }</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactSidebar</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        open</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">isOpen</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        collapsed</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">isCollapsed</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        showMobileToggle</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">true</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        onToggle</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">open</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> setIsOpen</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(open)</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        onCollapse</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">collapsed</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> setIsCollapsed</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(collapsed)</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">h2</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          slot</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;ag-header-start&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          style</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{ margin: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, fontSize: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;1.125rem&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, fontWeight: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">600</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> }</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          Dashboard</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">h2</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactSidebarNav</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactSidebarNavItem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">              type</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;button&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">              className</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;nav-button active&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">              aria-current</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;page&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">              &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">Home</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> size</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">20</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">              &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">span</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> className</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;nav-label&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Dashboard&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">span</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactSidebarNavItem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactSidebarNavItem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">            {</span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* Button for expanded mode with rotating chevron */</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">              type</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;button&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">              className</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;nav-button nav-button-expanded&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">              aria-expanded</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;false&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">              onClick</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">handleSubmenuToggle</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">              &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">Folder</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> size</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">20</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">              &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">span</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> className</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;nav-label&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Projects&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">span</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">              &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">span</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> className</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;chevron&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">                &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ChevronRight</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> size</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">16</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">              &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">span</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">            {</span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* Popover for collapsed mode - shows when sidebar is collapsed */</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactPopover</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">              className</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;nav-button-collapsed&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">              placement</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;right-start&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">              triggerType</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;click&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">              distance</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">8</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">              arrow</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">true</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">              &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">                slot</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;trigger&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">                type</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;button&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">                className</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;nav-button&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">                aria-expanded</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;false&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">              &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">                &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">Folder</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> size</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">20</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">                &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">span</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> className</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;nav-label&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Projects&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">span</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">                &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">span</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> className</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;collapsed-indicator&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">                  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">svg</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">                    viewBox</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;0 0 8 8&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">                    fill</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;none&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">                    xmlns</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;http://www.w3.org/2000/svg&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">                  &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">                    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">path</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">                      d</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;M2 3l2 2 2-2&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">                      stroke</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;currentColor&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">                      strokeWidth</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;1&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">                      strokeLinecap</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;round&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">                    /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">                  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">svg</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">                &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">span</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">              &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">              &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactSidebarNavPopoverSubmenu</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">                slot</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;content&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">                className</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;nav-popover-submenu&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">              &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">                &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> href</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;#project-alpha&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> className</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;nav-sublink&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">                  Project Alpha</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">                &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">                &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> href</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;#project-beta&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> className</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;nav-sublink&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">                  Project Beta</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">                &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">              &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactSidebarNavPopoverSubmenu</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactPopover</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">            {</span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* Inline submenu for expanded mode */</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactSidebarNavSubmenu</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">              &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> className</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;nav-sublink&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> href</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;#&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">                Project Alpha</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">              &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">              &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> className</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;nav-sublink&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> href</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;#&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">                Project Beta</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">              &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactSidebarNavSubmenu</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactSidebarNavItem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactSidebarNav</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          slot</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;ag-footer&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          style</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{ fontSize: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;0.875rem&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, color: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;var(--ag-text-secondary)&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> }</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          © 2024 Company</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactSidebar</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">main</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> style</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{ flex: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">1</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, padding: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;2rem&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> }</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">h1</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Main Content&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">h1</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">main</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  );</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div></details><details class="details custom-block"><summary>Lit (Web Components)</summary><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { LitElement, html, css } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;lit&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { customElement } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;lit/decorators.js&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/sidebar&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/sidebar-nav&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/popover&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">@</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">customElement</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;sidebar-example&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">)</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> class</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> SidebarExample</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> extends</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> LitElement</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  static</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> styles</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> css</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">\`</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">    :host {</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">      display: block;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">    }</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">  \`</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">  firstUpdated</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">() {</span></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">    // Set up event listeners for submenu toggles in the shadow DOM</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">    const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> buttons</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> this</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">.shadowRoot?.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">querySelectorAll</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;.nav-button-expanded&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    buttons?.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">forEach</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">((</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      button.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">addEventListener</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;click&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> Event</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">        const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> navItem</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (e.currentTarget </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">as</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> HTMLElement</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">).</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">closest</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          &quot;ag-sidebar-nav-item&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        );</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">        const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> submenu</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> navItem?.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">querySelector</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;ag-sidebar-nav-submenu&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">        if</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">!</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">submenu) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">return</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">        const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> isExpanded</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> button.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">getAttribute</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;aria-expanded&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">===</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;true&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">        if</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (isExpanded) {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          button.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">setAttribute</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;aria-expanded&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;false&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          submenu.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">removeAttribute</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;open&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">else</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          button.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">setAttribute</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;aria-expanded&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;true&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          submenu.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">setAttribute</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;open&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        }</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      });</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    });</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">  render</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">() {</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">    return</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> html</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">\`</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">      &lt;div style=&quot;display: flex; height: 100vh;&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        &lt;ag-sidebar id=&quot;sidebar&quot; show-mobile-toggle&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          &lt;h2</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">            slot=&quot;ag-header-start&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">            style=&quot;margin: 0; font-size: 1.125rem; font-weight: 600;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          &gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">            Dashboard</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          &lt;/h2&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          &lt;ag-sidebar-nav&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">            &lt;ag-sidebar-nav-item&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">              &lt;button</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">                type=&quot;button&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">                class=&quot;nav-button active&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">                aria-current=&quot;page&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">              &gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">                &lt;svg&gt;&lt;!-- Home icon --&gt;&lt;/svg&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">                &lt;span class=&quot;nav-label&quot;&gt;Dashboard&lt;/span&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">              &lt;/button&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">            &lt;/ag-sidebar-nav-item&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">            &lt;ag-sidebar-nav-item&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">              &lt;!-- Button for expanded mode with rotating chevron --&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">              &lt;button</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">                type=&quot;button&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">                class=&quot;nav-button nav-button-expanded&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">                aria-expanded=&quot;false&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">              &gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">                &lt;svg&gt;&lt;!-- Folder icon --&gt;&lt;/svg&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">                &lt;span class=&quot;nav-label&quot;&gt;Projects&lt;/span&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">                &lt;span class=&quot;chevron&quot;&gt;&lt;!-- ChevronRight icon --&gt;&lt;/span&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">              &lt;/button&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">              &lt;!-- Popover for collapsed mode - shows when sidebar is collapsed --&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">              &lt;ag-popover</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">                class=&quot;nav-button-collapsed&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">                placement=&quot;right-start&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">                trigger-type=&quot;click&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">                distance=&quot;8&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">                arrow</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">              &gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">                &lt;button</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">                  slot=&quot;trigger&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">                  type=&quot;button&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">                  class=&quot;nav-button&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">                  aria-expanded=&quot;false&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">                &gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">                  &lt;svg&gt;&lt;!-- Folder icon --&gt;&lt;/svg&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">                  &lt;span class=&quot;nav-label&quot;&gt;Projects&lt;/span&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">                  &lt;span class=&quot;collapsed-indicator&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">                    &lt;svg</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">                      viewBox=&quot;0 0 8 8&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">                      fill=&quot;none&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">                      xmlns=&quot;http://www.w3.org/2000/svg&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">                    &gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">                      &lt;path</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">                        d=&quot;M2 3l2 2 2-2&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">                        stroke=&quot;currentColor&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">                        stroke-width=&quot;1&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">                        stroke-linecap=&quot;round&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">                      /&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">                    &lt;/svg&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">                  &lt;/span&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">                &lt;/button&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">                &lt;ag-sidebar-nav-popover-submenu</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">                  slot=&quot;content&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">                  class=&quot;nav-popover-submenu&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">                &gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">                  &lt;a class=&quot;nav-sublink&quot; href=&quot;#&quot;&gt;Project Alpha&lt;/a&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">                  &lt;a class=&quot;nav-sublink&quot; href=&quot;#&quot;&gt;Project Beta&lt;/a&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">                &lt;/ag-sidebar-nav-popover-submenu&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">              &lt;/ag-popover&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">              &lt;!-- Inline submenu for expanded mode --&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">              &lt;ag-sidebar-nav-submenu&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">                &lt;a class=&quot;nav-sublink&quot; href=&quot;#&quot;&gt;Project Alpha&lt;/a&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">                &lt;a class=&quot;nav-sublink&quot; href=&quot;#&quot;&gt;Project Beta&lt;/a&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">              &lt;/ag-sidebar-nav-submenu&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">            &lt;/ag-sidebar-nav-item&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          &lt;/ag-sidebar-nav&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          &lt;div</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">            slot=&quot;ag-footer&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">            style=&quot;font-size: 0.875rem; color: var(--ag-text-secondary);&quot;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          &gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">            © 2024 Company</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          &lt;/div&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        &lt;/ag-sidebar&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        &lt;main style=&quot;flex: 1; padding: 2rem;&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          &lt;h1&gt;Main Content&lt;/h1&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        &lt;/main&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">      &lt;/div&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">    \`</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  }</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div><p><strong>Note:</strong> When using sidebar components within a custom element&#39;s shadow DOM, set up event listeners in the component&#39;s lifecycle (e.g., <code>firstUpdated()</code>) rather than using <code>DOMContentLoaded</code>, as <code>document.querySelector()</code> cannot access elements inside shadow DOM. Use <code>this.shadowRoot.querySelector()</code> instead.</p></details><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><h3 id="sidebar-component" tabindex="-1">Sidebar Component <a class="header-anchor" href="#sidebar-component" aria-label="Permalink to &quot;Sidebar Component&quot;">​</a></h3><table class="ag-table ag-table--striped"><thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>open</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Controls sidebar visibility on mobile</td></tr><tr><td><code>collapsed</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Controls collapsed/rail state (icon-only) on desktop</td></tr><tr><td><code>position</code></td><td><code>&#39;left&#39; | &#39;right&#39;</code></td><td><code>&#39;left&#39;</code></td><td>Position of the sidebar</td></tr><tr><td><code>ariaLabel</code></td><td><code>string</code></td><td><code>&#39;Navigation&#39;</code></td><td>ARIA label for the sidebar</td></tr><tr><td><code>variant</code></td><td><code>&#39;default&#39; | &#39;bordered&#39; | &#39;elevated&#39;</code></td><td><code>&#39;default&#39;</code></td><td>Visual variant of the sidebar</td></tr><tr><td><code>noTransition</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Disable transitions</td></tr><tr><td><code>width</code></td><td><code>string</code></td><td>-</td><td>Custom width for the sidebar (e.g., &#39;300px&#39;)</td></tr><tr><td><code>disableCompactMode</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Disable compact/rail mode (sidebar is either full-width or hidden)</td></tr><tr><td><code>showMobileToggle</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Show the mobile toggle button</td></tr><tr><td><code>mobileTogglePosition</code></td><td><code>&#39;top-left&#39; | &#39;top-right&#39; | &#39;bottom-left&#39; | &#39;bottom-right&#39;</code></td><td><code>&#39;top-left&#39;</code></td><td>Position of the mobile toggle button</td></tr><tr><td><code>showHeaderToggle</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Show the built-in header toggle button</td></tr></tbody></table><h3 id="navigation-components" tabindex="-1">Navigation Components <a class="header-anchor" href="#navigation-components" aria-label="Permalink to &quot;Navigation Components&quot;">​</a></h3><p>The Sidebar uses companion components for navigation:</p><ul><li><code>VueSidebarNav</code> / <code>ReactSidebarNav</code> / <code>ag-sidebar-nav</code> - Container for navigation items</li><li><code>VueSidebarNavItem</code> / <code>ReactSidebarNavItem</code> / <code>ag-sidebar-nav-item</code> - Individual navigation item wrapper</li><li><code>VueSidebarNavSubmenu</code> / <code>ReactSidebarNavSubmenu</code> / <code>ag-sidebar-nav-submenu</code> - Inline submenu for expanded mode</li><li><code>VueSidebarNavPopoverSubmenu</code> / <code>ReactSidebarNavPopoverSubmenu</code> / <code>ag-sidebar-nav-popover-submenu</code> - Popover submenu for collapsed mode</li></ul><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><table class="ag-table ag-table--striped"><thead><tr><th>Event</th><th>Payload</th><th>Description</th></tr></thead><tbody><tr><td><code>@update:open</code> (Vue) / <code>onToggle</code> (React) / <code>toggle</code> (Lit)</td><td><code>boolean</code></td><td>Emitted when the sidebar open state changes</td></tr><tr><td><code>@update:collapsed</code> (Vue) / <code>onCollapse</code> (React) / <code>collapse</code> (Lit)</td><td><code>boolean</code></td><td>Emitted when the sidebar collapsed state changes</td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h2><h3 id="vue" tabindex="-1">Vue <a class="header-anchor" href="#vue" aria-label="Permalink to &quot;Vue&quot;">​</a></h3><ul><li><strong>slot=&quot;ag-header-start&quot;</strong>: Left-aligned header content (logo or title)</li><li><strong>slot=&quot;ag-header-end&quot;</strong>: Right-aligned header content (actions, before toggle)</li><li><strong>slot=&quot;ag-header-toggle&quot;</strong>: Custom collapse toggle button (always rightmost)</li><li><strong>slot=&quot;ag-header&quot;</strong>: Monolithic header slot (legacy, for full custom header)</li><li><strong>Default slot</strong>: Main content area for navigation</li><li><strong>slot=&quot;ag-footer&quot;</strong>: Footer content</li></ul><h3 id="react" tabindex="-1">React <a class="header-anchor" href="#react" aria-label="Permalink to &quot;React&quot;">​</a></h3><ul><li><strong>slot=&quot;ag-header-start&quot;</strong>: Left-aligned header content</li><li><strong>slot=&quot;ag-header-end&quot;</strong>: Right-aligned header content</li><li><strong>slot=&quot;ag-header-toggle&quot;</strong>: Custom collapse toggle button</li><li><strong>slot=&quot;ag-header&quot;</strong>: Monolithic header slot (legacy)</li><li><strong>children</strong>: Main content area for navigation</li><li><strong>slot=&quot;ag-footer&quot;</strong>: Footer content</li></ul><h3 id="lit" tabindex="-1">Lit <a class="header-anchor" href="#lit" aria-label="Permalink to &quot;Lit&quot;">​</a></h3><ul><li><strong>slot=&quot;ag-header-start&quot;</strong>: Left-aligned header content</li><li><strong>slot=&quot;ag-header-end&quot;</strong>: Right-aligned header content</li><li><strong>slot=&quot;ag-header-toggle&quot;</strong>: Custom collapse toggle button</li><li><strong>slot=&quot;ag-header&quot;</strong>: Monolithic header slot (legacy)</li><li><strong>Default slot</strong>: Main content area for navigation</li><li><strong>slot=&quot;ag-footer&quot;</strong>: Footer content</li></ul><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><table class="ag-table ag-table--striped"><thead><tr><th>Method</th><th>Description</th></tr></thead><tbody><tr><td><code>toggleCollapse()</code></td><td>Toggles the collapsed state of the sidebar</td></tr><tr><td><code>toggleResponsive()</code></td><td>Toggles the responsive open/close state (used with <code>disableCompactMode</code>)</td></tr></tbody></table><h2 id="accessibility" tabindex="-1">Accessibility <a class="header-anchor" href="#accessibility" aria-label="Permalink to &quot;Accessibility&quot;">​</a></h2><p>The Sidebar component follows accessibility best practices:</p><ul><li>Uses semantic HTML with proper ARIA attributes</li><li>Implements <code>role=&quot;navigation&quot;</code> with customizable <code>aria-label</code></li><li>Supports keyboard navigation with <strong>Tab</strong> and <strong>Shift+Tab</strong></li><li>Active navigation items use <code>aria-current=&quot;page&quot;</code> for screen readers</li><li>Submenu buttons use <code>aria-expanded</code> to indicate state</li><li>Focus management for smooth keyboard navigation</li><li>Mobile overlay includes backdrop for visual separation</li><li>Toggle buttons have proper <code>aria-label</code> attributes</li><li>Collapsed state indicators are handled with appropriate ARIA attributes</li></ul><h3 id="best-practices" tabindex="-1">Best Practices <a class="header-anchor" href="#best-practices" aria-label="Permalink to &quot;Best Practices&quot;">​</a></h3><ul><li>Always provide an <code>ariaLabel</code> to identify the sidebar navigation purpose</li><li>Use <code>aria-current=&quot;page&quot;</code> on the active navigation item</li><li>Ensure submenu buttons have <code>aria-expanded</code> attribute</li><li>Provide clear visual indicators for active states</li><li>Use the <code>.nav-label</code> class on text content that should hide in collapsed mode</li><li>Structure navigation buttons with flexbox for proper icon/label layout</li><li>Include both inline and popover versions of submenus for responsive behavior</li><li>Test keyboard navigation flow through all items</li><li>Ensure mobile toggle is easily accessible (consider thumb zones)</li></ul><h2 id="use-cases" tabindex="-1">Use Cases <a class="header-anchor" href="#use-cases" aria-label="Permalink to &quot;Use Cases&quot;">​</a></h2><h3 id="expanded-collapsed-mode-default" tabindex="-1">Expanded/Collapsed Mode (Default) <a class="header-anchor" href="#expanded-collapsed-mode-default" aria-label="Permalink to &quot;Expanded/Collapsed Mode (Default)&quot;">​</a></h3><p>The sidebar can toggle between full-width (expanded) and icon-only (rail/collapsed) modes on desktop. On mobile, it becomes an overlay that can be opened/closed.</p><p><strong>Use for:</strong></p><ul><li>Dashboard applications with complex navigation</li><li>Admin panels with multiple sections</li><li>Documentation sites with nested navigation</li></ul><h3 id="disable-compact-mode" tabindex="-1">Disable Compact Mode <a class="header-anchor" href="#disable-compact-mode" aria-label="Permalink to &quot;Disable Compact Mode&quot;">​</a></h3><p>With <code>disableCompactMode</code>, the sidebar has no intermediate collapsed state—it&#39;s either fully open or completely hidden. This matches patterns like Claude AI Studio.</p><p><strong>Use for:</strong></p><ul><li>Applications where icon-only mode isn&#39;t needed</li><li>Simpler navigation structures</li><li>Mobile-first applications</li></ul><h3 id="header-patterns" tabindex="-1">Header Patterns <a class="header-anchor" href="#header-patterns" aria-label="Permalink to &quot;Header Patterns&quot;">​</a></h3><p><strong>Composable Header</strong> (<code>ag-header-start</code>, <code>ag-header-end</code>, <code>ag-header-toggle</code>):</p><ul><li>Logo/title on the left</li><li>Actions (settings, notifications) in the middle</li><li>Toggle button on the right</li></ul><p><strong>Monolithic Header</strong> (<code>ag-header</code>):</p><ul><li>Full control over header layout</li><li>Logo-as-toggle pattern</li><li>Custom header interactions</li></ul><p><strong>Built-in Toggle</strong> (<code>show-header-toggle</code>):</p><ul><li>Automatic toggle button</li><li>No custom header slot needed</li><li>Consistent behavior</li></ul><h3 id="navigation-patterns" tabindex="-1">Navigation Patterns <a class="header-anchor" href="#navigation-patterns" aria-label="Permalink to &quot;Navigation Patterns&quot;">​</a></h3><p><strong>Simple Navigation</strong>: Single-level menu with icons and labels</p><p><strong>Nested Navigation</strong>: Submenus that expand inline when sidebar is expanded, and show in popovers when collapsed</p><p><strong>Active Item Tracking</strong>: Visual indication of current page with styling and <code>aria-current</code></p><h2 id="styling-navigation" tabindex="-1">Styling Navigation <a class="header-anchor" href="#styling-navigation" aria-label="Permalink to &quot;Styling Navigation&quot;">​</a></h2><p>The Sidebar component provides the structure, but navigation button styling is typically handled in your application CSS (global light DOM styles). Here&#39;s the complete CSS required for a fully functional sidebar with all features:</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* CRITICAL: Sidebar component width - must be defined! */</span></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-sidebar</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">  /* Expanded width */</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  width</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">260</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  transition</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: width </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0.3</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">s</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> ease</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  overflow</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">visible</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">; </span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* Allow popovers to show outside */</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-sidebar</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">[</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">collapsed</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">] {</span></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">  /* Collapsed width - icon only */</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  width</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">64</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* Navigation button base styles */</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">.nav-button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  display</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">flex</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  align-items</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">center</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  gap</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">var</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">--ag-space-3</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  position</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">relative</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">; </span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* Required for collapsed-indicator positioning */</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  padding</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">var</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">--ag-space-2</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">var</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">--ag-space-3</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  border</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">none</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  background</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">none</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  cursor</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">pointer</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  width</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">100</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">%</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  text-align</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">left</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  border-radius</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">var</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">--ag-radius-md</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  transition</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">all</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> var</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">--ag-fx-duration-sm</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  color</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">var</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">--ag-text-primary</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  font-size</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">var</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">--ag-font-size-base</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">.nav-button:hover</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  background</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">var</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">--ag-background-secondary</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">.nav-button.active</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  background</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">var</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">--ag-primary</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  color</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">white</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  font-weight</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">500</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">.nav-label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  flex-grow</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">1</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  overflow</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">hidden</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  text-overflow</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">ellipsis</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  white-space</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">nowrap</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  transition</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: opacity </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">var</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">--ag-fx-duration-sm</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* Chevron rotation for expanded submenus */</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">.chevron</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  display</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">flex</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  align-items</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">center</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  transition</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: transform </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">var</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">--ag-fx-duration-md</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">), opacity </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">var</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">--ag-fx-duration-sm</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  margin-left</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">auto</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">.nav-button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">[</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">aria-expanded</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;true&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">] </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">.chevron</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  transform</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">rotate</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">90</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">deg</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* Collapsed indicator - small triangle at 4:30 position */</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">.collapsed-indicator</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  display</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">none</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  position</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">absolute</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  bottom</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">-1</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  right</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">-1</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  width</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">var</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">--ag-space-3</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  height</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">var</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">--ag-space-3</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">.collapsed-indicator</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;"> svg</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  color</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">var</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">--ag-text-secondary</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  transform</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">rotate</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">315</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">deg</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* Show collapsed indicator in collapsed mode for buttons with submenus */</span></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-sidebar</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">[</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">collapsed</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">] </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">.nav-button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">[</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">aria-expanded</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">] </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">.collapsed-indicator</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  display</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">block</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* CRITICAL: Properly handle collapsed state */</span></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-sidebar</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">[</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">collapsed</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">] </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">.nav-label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">,</span></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-sidebar</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">[</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">collapsed</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">] </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">.chevron</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  opacity</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  width</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  overflow</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">hidden</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* Center icons in collapsed mode */</span></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-sidebar</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">[</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">collapsed</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">] </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">.nav-button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  justify-content</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">center</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  padding</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">var</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">--ag-space-2</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  gap</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* Visibility rules for expanded vs collapsed mode */</span></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-sidebar</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">[</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">collapsed</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">] </span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-sidebar-nav-submenu</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">:not</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">.popover-submenu</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">),</span></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-sidebar</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">:not</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">([</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">collapsed</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">]) </span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-popover</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">,</span></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-sidebar</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">[</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">collapsed</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">] </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">.nav-button-expanded</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">,</span></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-sidebar</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">:not</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">([</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">collapsed</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">]) </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">.nav-button-collapsed</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  display</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">none</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> !important</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* Fix popover centering in collapsed mode */</span></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-sidebar</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">[</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">collapsed</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">] </span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-popover</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">.nav-button-collapsed</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  display</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">block</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> !important</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* CRITICAL: Submenu visibility - hidden by default, visible when open */</span></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-sidebar-nav-submenu</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  display</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">none</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  overflow</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">hidden</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-sidebar-nav-submenu</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">[</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">open</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">] {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  display</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">block</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* Submenu link styles */</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">.nav-sublink</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  display</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">block</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  padding</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">var</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">--ag-space-2</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">var</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">--ag-space-3</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  padding-left</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">var</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">--ag-space-8</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  color</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">var</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">--ag-text-secondary</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  text-decoration</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">none</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  border-radius</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">var</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">--ag-radius-md</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  transition</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#6E011A;--shiki-light-font-style:italic;--shiki-dark:#FFB1AF;--shiki-dark-font-style:italic;">background</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> var</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">--ag-fx-duration-sm</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">.nav-sublink:hover</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  background</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">var</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">--ag-background-secondary</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  color</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">var</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">--ag-text-primary</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* Popover submenu styles */</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">.nav-popover-submenu</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> .nav-sublink</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  padding-left</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">var</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">--ag-space-3</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* Popover content padding for nav popovers in collapsed mode */</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">.nav-button-collapsed</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-popover-body</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  padding</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">var</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">--ag-space-1</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* Hide popover header for nav popovers */</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">.nav-button-collapsed</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-popover-header</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  display</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">none</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div><h3 id="collapsed-indicator-markup" tabindex="-1">Collapsed Indicator Markup <a class="header-anchor" href="#collapsed-indicator-markup" aria-label="Permalink to &quot;Collapsed Indicator Markup&quot;">​</a></h3><p>When using popovers for collapsed mode submenus, add the collapsed indicator inside the trigger button:</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> slot</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;trigger&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;button&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> class</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;nav-button&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> aria-expanded</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;false&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#6E011A;--shiki-light-font-style:italic;--shiki-dark:#FFB1AF;--shiki-dark-font-style:italic;">FolderIcon</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">span</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> class</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;nav-label&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Projects&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">span</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">span</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> class</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;collapsed-indicator&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">svg</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> viewBox</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;0 0 8 8&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> fill</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;none&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> xmlns</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;http://www.w3.org/2000/svg&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">path</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        d</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;M2 3l2 2 2-2&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        stroke</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;currentColor&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        stroke-width</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;1&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        stroke-linecap</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;round&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">svg</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">span</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div><p>This small triangular indicator appears at the bottom-right corner (4:30 clock position) when the sidebar is collapsed, helping users identify which navigation items have submenus.</p>`,54))]))}});export{ja as __pageData,Ma as default};
