import{c as _,A as W}from"./chunks/AlphaWarning.D199zhtu.js";import{i as q,z as g,a as w,x as C}from"./chunks/property-CemaeiRl.Cea_q1B7.js";import{s as x}from"./chunks/plugin-vue_export-helper-CHgC5LLL.lGy7RumW.js";import{d as S,c as v,o as B,r as b,_ as $,C as u,j as i,G as n,w as p,Z as o,a as d,ae as j,t as X}from"./chunks/framework.CdHt8f9T.js";import{t as G,k as K}from"./chunks/VuePopover.xbKTy-Hb.js";import{C as Z}from"./chunks/chevron-right.CVd3lvVB.js";import{S as J}from"./chunks/settings.CFark3T7.js";import{U as Y}from"./chunks/user.BNg0FaBG.js";import{F as Q}from"./chunks/folder.Dx8TJg5D.js";import{H as ss}from"./chunks/house.RYE15Wpj.js";import"./chunks/state-CovhUvdr.DnzyR2fh.js";import"./chunks/query-BykXNUlT.Pm7lu9c1.js";import"./chunks/floating-ui.dom-muqvZJIo.ByzMQtLc.js";import"./chunks/CloseButton.Ddd3q8sQ.js";/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const is=_("command",[["path",{d:"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3",key:"11bfej"}]]);var as=Object.defineProperty,c=(a,s,t,r)=>{for(var e=void 0,h=a.length-1,k;h>=0;h--)(k=a[h])&&(e=k(s,t,e)||e);return e&&as(s,t,e),e};const O=class extends w{constructor(){super(),this._handleBackdropClick=()=>{this.open=!1,this._dispatchToggleEvent()},this._handleToggleClick=()=>{this.open=!this.open,this._dispatchToggleEvent()},this._handleHeaderToggleClick=()=>{this.disableCompactMode?(this.open=!this.open,this._dispatchToggleEvent()):(this.collapsed=!this.collapsed,this._dispatchCollapseEvent())},this._handleKeydown=s=>{s.key==="Escape"&&this.open&&(s.preventDefault(),this.open=!1,this._dispatchToggleEvent())},this.open=!1,this.collapsed=!1,this.position="left",this.ariaLabel="Navigation",this.variant="default",this.noTransition=!1,this.width=void 0,this.disableCompactMode=!1,this.showMobileToggle=!0,this.mobileTogglePosition="top-left",this.showHeaderToggle=!1}_isMobileViewport(){return window.innerWidth<1024}toggleCollapse(){this.collapsed=!this.collapsed,this._dispatchCollapseEvent()}toggleResponsive(){this.disableCompactMode?(this.open=!this.open,this._dispatchToggleEvent()):this._isMobileViewport()&&this.open?(this.open=!1,this._dispatchToggleEvent()):(this.collapsed=!this.collapsed,this._dispatchCollapseEvent())}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this._handleKeydown)}willUpdate(s){s.has("width")&&(this.width?this.style.setProperty("--ag-sidebar-width",this.width):this.style.removeProperty("--ag-sidebar-width")),s.has("open")&&(this.open?(document.addEventListener("keydown",this._handleKeydown),this.updateComplete.then(()=>this._trapFocus())):(document.removeEventListener("keydown",this._handleKeydown),this._releaseFocus()))}_dispatchToggleEvent(){var t;const s=new CustomEvent("ag-sidebar-toggle",{detail:{open:this.open},bubbles:!0,composed:!0});this.dispatchEvent(s),(t=this.onToggle)==null||t.call(this,s)}_dispatchCollapseEvent(){var t;const s=new CustomEvent("ag-sidebar-collapse",{detail:{collapsed:this.collapsed},bubbles:!0,composed:!0});this.dispatchEvent(s),(t=this.onCollapse)==null||t.call(this,s)}_findMainContent(){var s;return this.closest("main")||((s=this.parentElement)==null?void 0:s.querySelector("main"))||document.querySelector("main")||document.body}_trapFocus(){const s=this._findMainContent();s&&s!==this&&!s.contains(this)&&(s.setAttribute("inert",""),this._mainContentRef=s),this.updateComplete.then(()=>{var t,r;(r=(t=this.shadowRoot)==null?void 0:t.querySelector('button:not([disabled]), a[href], input:not([disabled]), [tabindex]:not([tabindex="-1"])'))==null||r.focus()})}_releaseFocus(){this._mainContentRef&&(this._mainContentRef.removeAttribute("inert"),this._mainContentRef=void 0)}_handleSlotClick(s){const t=s.composedPath()[0].closest("[aria-expanded]");if(t){const r=t.getAttribute("aria-expanded")==="true";t.setAttribute("aria-expanded",String(!r));const e=t.nextElementSibling;e&&e.tagName==="AG-SIDEBAR-NAV-SUBMENU"&&(r?e.removeAttribute("open"):e.setAttribute("open",""))}}_renderToggleIcon(){return C`
      <slot name="ag-toggle-icon">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.7314 1.00488C16.109 1.11926 18 2.98393 18 5.2666V12.7334C18 15.0898 15.9853 17 13.5 17H4.5C2.09247 17 0.126505 15.2074 0.00585938 12.9531L0 12.7334V5.2666C3.72355e-05 2.91022 2.01474 1 4.5 1H13.5L13.7314 1.00488ZM4.5 2.33301C2.79139 2.33301 1.40629 3.6466 1.40625 5.2666V12.7334C1.40629 14.3534 2.79139 15.667 4.5 15.667H4.625V2.33301H4.5ZM6.03125 15.667H13.5C15.2086 15.667 16.5937 14.3534 16.5938 12.7334V5.2666C16.5937 3.6466 15.2086 2.33301 13.5 2.33301H6.03125V15.667Z" fill="currentColor"/>
        </svg>
      </slot>
    `}render(){return C`
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
          ${this.showHeaderToggle?C`
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
          `:C`
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
    `}};O.styles=q`
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
  `;let y=O;c([g({type:Boolean,reflect:!0})],y.prototype,"open");c([g({type:Boolean,reflect:!0})],y.prototype,"collapsed");c([g({type:String,reflect:!0})],y.prototype,"position");c([g({type:String,attribute:"aria-label"})],y.prototype,"ariaLabel");c([g({type:String,reflect:!0})],y.prototype,"variant");c([g({type:Boolean,attribute:"no-transition",reflect:!0})],y.prototype,"noTransition");c([g({type:String})],y.prototype,"width");c([g({type:Boolean,attribute:"disable-compact-mode",reflect:!0})],y.prototype,"disableCompactMode");c([g({type:Boolean,attribute:"show-mobile-toggle",reflect:!0})],y.prototype,"showMobileToggle");c([g({type:String,attribute:"mobile-toggle-position"})],y.prototype,"mobileTogglePosition");c([g({type:Boolean,attribute:"show-header-toggle",reflect:!0})],y.prototype,"showHeaderToggle");c([g({attribute:!1})],y.prototype,"onToggle");c([g({attribute:!1})],y.prototype,"onCollapse");customElements.get("ag-sidebar")||customElements.define("ag-sidebar",y);const ns=S({name:"VueSidebar",props:{open:{type:Boolean,default:!1},collapsed:{type:Boolean,default:!1},position:{type:String,default:"left"},ariaLabel:{type:String,default:"Navigation"},variant:{type:String,default:"default"},noTransition:{type:Boolean,default:!1},width:{type:String,default:void 0},disableCompactMode:{type:Boolean,default:!1},showMobileToggle:{type:Boolean,default:!0},mobileTogglePosition:{type:String,default:"top-left"},showHeaderToggle:{type:Boolean,default:!1}},emits:["update:open","update:collapsed"],setup(a,{emit:s}){return{onToggle:t=>{s("update:open",t.detail.open)},onCollapse:t=>{s("update:collapsed",t.detail.collapsed)}}}}),ts=[".open",".collapsed","position","aria-label","variant",".noTransition","width",".disableCompactMode",".showMobileToggle","mobile-toggle-position",".showHeaderToggle"];function ls(a,s,t,r,e,h){return B(),v("ag-sidebar",{".open":a.open,".collapsed":a.collapsed,position:a.position,"aria-label":a.ariaLabel,variant:a.variant,".noTransition":a.noTransition,width:a.width,".disableCompactMode":a.disableCompactMode,".showMobileToggle":a.showMobileToggle,"mobile-toggle-position":a.mobileTogglePosition,".showHeaderToggle":a.showHeaderToggle,onAgSidebarToggle:s[0]||(s[0]=(...k)=>a.onToggle&&a.onToggle(...k)),onAgSidebarCollapse:s[1]||(s[1]=(...k)=>a.onCollapse&&a.onCollapse(...k))},[b(a.$slots,"default"),b(a.$slots,"ag-header"),b(a.$slots,"ag-header-start"),b(a.$slots,"ag-header-end"),b(a.$slots,"ag-header-toggle"),b(a.$slots,"ag-toggle-icon"),b(a.$slots,"ag-footer")],40,ts)}const es=x(ns,[["render",ls]]),M=class extends w{render(){return C`
      <slot></slot>
    `}};M.hostAttributes={aria:{role:"list"},class:"ag-sidebar-nav",part:"ag-sidebar-nav","aria-label":"Sidebar Navigation Menu"},M.styles=[q`
      :host {
        padding: 0;
        margin: 0;
      }
    `];let hs=M;const I=class extends w{render(){return C`
      <slot></slot>
    `}};I.hostAttributes={class:"ag-sidebar-nav-item",part:"ag-sidebar-nav-item"},I.styles=[G,q`
      :host {
        padding: 0;
        margin: 0;
        margin-block-end: var(--ag-space-1);
      }
        
      /* Nav-specific additions (flat for consistency) */
      ::slotted(.nav-button) {
        justify-content: space-between; /* For chevrons */
      }
    `];let ps=I;const H=q`
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
`;var ks=Object.defineProperty,rs=(a,s,t,r)=>{for(var e=void 0,h=a.length-1,k;h>=0;h--)(k=a[h])&&(e=k(s,t,e)||e);return e&&ks(s,t,e),e};const R=class extends w{constructor(){super(...arguments),this.open=!1}render(){return C`
      <slot></slot>
    `}};R.hostAttributes={class:"ag-sidebar-nav-submenu",part:"ag-sidebar-nav-submenu","aria-label":"Sidebar Navigation Menu"},R.styles=[H,q`
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
    `];let L=R;rs([g({type:Boolean,reflect:!0})],L.prototype,"open");const z=class extends w{render(){return C`
      <slot></slot>
    `}};z.hostAttributes={class:"ag-sidebar-nav-popover-submenu",part:"ag-sidebar-nav-popover-submenu"},z.styles=[H];let Fs=z;customElements.get("ag-sidebar-nav")||customElements.define("ag-sidebar-nav",hs);customElements.get("ag-sidebar-nav-item")||customElements.define("ag-sidebar-nav-item",ps);customElements.get("ag-sidebar-nav-submenu")||customElements.define("ag-sidebar-nav-submenu",L);customElements.get("ag-sidebar-nav-popover-submenu")||customElements.define("ag-sidebar-nav-popover-submenu",Fs);const ds=S({name:"VueSidebarNav"});function os(a,s,t,r,e,h){return B(),v("ag-sidebar-nav",null,[b(a.$slots,"default")])}const gs=x(ds,[["render",os]]),ys=S({name:"VueSidebarNavItem"});function cs(a,s,t,r,e,h){return B(),v("ag-sidebar-nav-item",null,[b(a.$slots,"default")])}const us=x(ys,[["render",cs]]),bs=S({name:"VueSidebarNavSubmenu",props:{open:{type:Boolean,default:!1}},emits:["update:open"],setup(a,{emit:s}){return{onOpenChange:t=>{s("update:open",t)}}}}),Cs=["open"];function vs(a,s,t,r,e,h){return B(),v("ag-sidebar-nav-submenu",{open:a.open,"onUpdate:open":s[0]||(s[0]=(...k)=>a.onOpenChange&&a.onOpenChange(...k))},[b(a.$slots,"default")],40,Cs)}const Bs=x(bs,[["render",vs]]),ms=S({name:"VueSidebarNavPopoverSubmenu"});function Es(a,s,t,r,e,h){return B(),v("ag-sidebar-nav-popover-submenu",null,[b(a.$slots,"default")])}const As=x(ms,[["render",Es]]),Ds={name:"SidebarExamples",components:{VueSidebar:es,VueSidebarNav:gs,VueSidebarNavItem:us,VueSidebarNavSubmenu:Bs,VueSidebarNavPopoverSubmenu:As,VuePopover:K,Home:ss,Folder:Q,User:Y,Settings:J,ChevronRight:Z,Command:is},data(){return{sidebar1:{isOpen:!0,isCollapsed:!1},sidebar2:{isOpen:!0,isCollapsed:!1},sidebar3:{isOpen:!0,isCollapsed:!1},sidebar4:{isOpen:!0},sidebar5:{isOpen:!0,isCollapsed:!1,activeRoute:"/dashboard"}}},mounted(){const a="sidebar-nav-styles";if(!document.getElementById(a)){const s=document.createElement("style");s.id=a,s.textContent=`
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
      `,document.head.appendChild(s)}},methods:{toggleSidebar1Collapse(a){const s=a.target.closest("ag-sidebar");s&&s.toggleCollapse&&s.toggleCollapse()},toggleSidebar2Collapse(a){const s=a.target.closest("ag-sidebar");s&&s.toggleCollapse&&s.toggleCollapse()},toggleSidebar4Responsive(a){const s=a.target.closest("ag-sidebar");s&&s.toggleResponsive&&s.toggleResponsive()},handleSubmenuToggle(a){a.preventDefault(),a.stopPropagation();const s=a.currentTarget,t=s.closest("ag-sidebar-nav-item"),r=t==null?void 0:t.querySelector("ag-sidebar-nav-submenu");if(!r)return;s.getAttribute("aria-expanded")==="true"?(s.setAttribute("aria-expanded","false"),r.removeAttribute("open")):(s.setAttribute("aria-expanded","true"),r.setAttribute("open",""))},toggleSidebar5Collapse(a){const s=a.target.closest("ag-sidebar");s&&s.toggleCollapse&&s.toggleCollapse()},handleNavClick(a,s){s.preventDefault(),this.sidebar5.activeRoute=a;const t=s.target.closest("ag-sidebar"),r=t==null?void 0:t.querySelectorAll(".nav-button");r==null||r.forEach(h=>{const k=h.getAttribute("data-route")===a;h.classList.toggle("active",k),k?h.setAttribute("aria-current","page"):h.removeAttribute("aria-current")});const e=t==null?void 0:t.querySelectorAll(".nav-sublink");e==null||e.forEach(h=>{const k=h.getAttribute("data-route")===a;h.classList.toggle("active",k),k?h.setAttribute("aria-current","page"):h.removeAttribute("aria-current")})},handleSettingsClick(a){this.handleNavClick("/settings",a),this.handleSubmenuToggle(a)}}},fs={class:"mbe6"},qs={style:{position:"relative",display:"flex",height:"500px",border:"1px solid var(--ag-border-color)","border-radius":"0.5rem",overflow:"hidden",contain:"layout"}},ws={type:"button",class:"nav-button active","aria-current":"page"},xs={class:"chevron"},Ss={slot:"trigger",type:"button",class:"nav-button"},Ts={type:"button",class:"nav-button"},Ps={class:"chevron"},Ns={slot:"trigger",type:"button",class:"nav-button"},Vs={class:"mbe6"},Ms={style:{position:"relative",display:"flex",height:"500px",border:"1px solid var(--ag-border-color)","border-radius":"0.5rem",overflow:"hidden",contain:"layout"}},Is={type:"button",slot:"ag-header-end",onClick:()=>{},style:{background:"none",border:"none",padding:"8px",cursor:"pointer",display:"flex","align-items":"center",color:"inherit","border-radius":"0.25rem"},"aria-label":"Settings",title:"Settings"},Rs={type:"button",class:"nav-button active","aria-current":"page"},zs={type:"button",class:"nav-button"},js={type:"button",class:"nav-button"},Os={class:"mbe6"},Hs={style:{position:"relative",display:"flex",height:"500px",border:"1px solid var(--ag-border-color)","border-radius":"0.5rem",overflow:"hidden",contain:"layout"}},Ls={type:"button",class:"nav-button active","aria-current":"page"},Us={type:"button",class:"nav-button"},_s={type:"button",class:"nav-button"},Ws={class:"mbe6"},$s={style:{position:"relative",display:"flex",height:"500px",border:"1px solid var(--ag-border-color)","border-radius":"0.5rem",overflow:"hidden",contain:"layout"}},Xs={type:"button",class:"nav-button active","aria-current":"page"},Gs={type:"button",class:"nav-button"},Ks={type:"button",class:"nav-button"},Zs={type:"button",class:"nav-button"},Js={class:"mbe6"},Ys={style:{position:"relative",display:"flex",height:"500px",border:"1px solid var(--ag-border-color)","border-radius":"0.5rem",overflow:"hidden",contain:"layout"}},Qs={class:"chevron"},si={style:{flex:"1",padding:"2rem",overflow:"auto",background:"var(--ag-background)"}};function ii(a,s,t,r,e,h){const k=u("Home"),F=u("VueSidebarNavItem"),m=u("Folder"),T=u("ChevronRight"),P=u("VueSidebarNavPopoverSubmenu"),N=u("VuePopover"),V=u("VueSidebarNavSubmenu"),A=u("User"),E=u("Settings"),D=u("VueSidebarNav"),f=u("VueSidebar"),U=u("Command");return B(),v("section",null,[s[83]||(s[83]=i("div",{class:"mbe4"},[i("h2",null,"Default Sidebar with Navigation"),i("p",null," Demonstrates the sidebar with navigation items, submenus, and both expanded/collapsed states. Click the header toggle to collapse into rail mode (icon-only). ")],-1)),i("div",fs,[i("div",qs,[n(f,{open:e.sidebar1.isOpen,collapsed:e.sidebar1.isCollapsed,"show-mobile-toggle":!0,"onUpdate:open":s[17]||(s[17]=l=>e.sidebar1.isOpen=l),"onUpdate:collapsed":s[18]||(s[18]=l=>e.sidebar1.isCollapsed=l)},{default:p(()=>[s[49]||(s[49]=i("h2",{slot:"ag-header-start",style:{margin:"0","font-size":"1.125rem","font-weight":"600"}}," Dashboard ",-1)),i("button",{type:"button",slot:"ag-header-toggle",onClick:s[0]||(s[0]=(...l)=>h.toggleSidebar1Collapse&&h.toggleSidebar1Collapse(...l)),style:{background:"none",border:"none",padding:"8px 0",cursor:"pointer",display:"flex","align-items":"center",color:"inherit"},"aria-label":"Toggle sidebar"},[...s[40]||(s[40]=[i("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[i("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}),i("path",{d:"M9 3v18"})],-1)])]),n(D,null,{default:p(()=>[n(F,null,{default:p(()=>[i("button",ws,[n(k,{size:20}),s[41]||(s[41]=i("span",{class:"nav-label"},"Dashboard",-1))])]),_:1}),n(F,null,{default:p(()=>[i("button",{type:"button",class:"nav-button nav-button-expanded","aria-expanded":"false",onClick:s[1]||(s[1]=(...l)=>h.handleSubmenuToggle&&h.handleSubmenuToggle(...l))},[n(m,{size:20}),s[42]||(s[42]=i("span",{class:"nav-label"},"Projects",-1)),i("span",xs,[n(T,{size:16})])]),n(N,{class:"nav-button-collapsed",placement:"right-start","trigger-type":"click",distance:8,arrow:!0,".showHeader":!1},{default:p(()=>[i("button",Ss,[n(m,{size:20}),s[43]||(s[43]=i("span",{class:"nav-label"},"Projects",-1)),s[44]||(s[44]=i("span",{class:"collapsed-indicator"},[i("svg",{viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[i("path",{d:"M2 3l2 2 2-2",stroke:"currentColor","stroke-width":"1","stroke-linecap":"round"})])],-1))]),n(P,{slot:"content",class:"popover-submenu"},{default:p(()=>[i("a",{href:"#",class:"nav-sublink",onClick:s[2]||(s[2]=o(()=>{},["prevent"]))},"Project Alpha"),i("a",{href:"#",class:"nav-sublink",onClick:s[3]||(s[3]=o(()=>{},["prevent"]))},"Project Beta"),i("a",{href:"#",class:"nav-sublink",onClick:s[4]||(s[4]=o(()=>{},["prevent"]))},"Project Gamma")]),_:1})]),_:1},32),n(V,null,{default:p(()=>[i("a",{class:"nav-sublink",href:"#",onClick:s[5]||(s[5]=o(()=>{},["prevent"]))},"Project Alpha"),i("a",{class:"nav-sublink",href:"#",onClick:s[6]||(s[6]=o(()=>{},["prevent"]))},"Project Beta"),i("a",{class:"nav-sublink",href:"#",onClick:s[7]||(s[7]=o(()=>{},["prevent"]))},"Project Gamma")]),_:1})]),_:1}),n(F,null,{default:p(()=>[i("button",Ts,[n(A,{size:20}),s[45]||(s[45]=i("span",{class:"nav-label"},"Team",-1))])]),_:1}),n(F,null,{default:p(()=>[i("button",{type:"button",class:"nav-button nav-button-expanded","aria-expanded":"false",onClick:s[8]||(s[8]=(...l)=>h.handleSubmenuToggle&&h.handleSubmenuToggle(...l))},[n(E,{size:20}),s[46]||(s[46]=i("span",{class:"nav-label"},"Settings",-1)),i("span",Ps,[n(T,{size:16})])]),n(N,{class:"nav-button-collapsed",placement:"right-start","trigger-type":"click",distance:8,arrow:!0,".showHeader":!1},{default:p(()=>[i("button",Ns,[n(E,{size:20}),s[47]||(s[47]=i("span",{class:"nav-label"},"Settings",-1)),s[48]||(s[48]=i("span",{class:"collapsed-indicator"},[i("svg",{viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[i("path",{d:"M2 3l2 2 2-2",stroke:"currentColor","stroke-width":"1","stroke-linecap":"round"})])],-1))]),n(P,{slot:"content",class:"popover-submenu"},{default:p(()=>[i("a",{href:"#",class:"nav-sublink",onClick:s[9]||(s[9]=o(()=>{},["prevent"]))},"Profile"),i("a",{href:"#",class:"nav-sublink",onClick:s[10]||(s[10]=o(()=>{},["prevent"]))},"Billing"),i("a",{href:"#",class:"nav-sublink",onClick:s[11]||(s[11]=o(()=>{},["prevent"]))},"Security"),i("a",{href:"#",class:"nav-sublink",onClick:s[12]||(s[12]=o(()=>{},["prevent"]))},"Preferences")]),_:1})]),_:1},32),n(V,null,{default:p(()=>[i("a",{class:"nav-sublink",href:"#",onClick:s[13]||(s[13]=o(()=>{},["prevent"]))},"Profile"),i("a",{class:"nav-sublink",href:"#",onClick:s[14]||(s[14]=o(()=>{},["prevent"]))},"Billing"),i("a",{class:"nav-sublink",href:"#",onClick:s[15]||(s[15]=o(()=>{},["prevent"]))},"Security"),i("a",{class:"nav-sublink",href:"#",onClick:s[16]||(s[16]=o(()=>{},["prevent"]))},"Preferences")]),_:1})]),_:1})]),_:1}),s[50]||(s[50]=i("div",{slot:"ag-footer",style:{"font-size":"0.875rem",color:"var(--ag-text-secondary)"}}," © 2024 Company ",-1))]),_:1},8,["open","collapsed"]),s[51]||(s[51]=i("main",{style:{flex:"1",padding:"2rem",overflow:"auto",background:"var(--ag-background)"}},[i("h1",{style:{"margin-top":"0"}},"Main Content"),i("p",null,"Click the header toggle to collapse the sidebar into rail mode."),i("p",null,"When collapsed, hover over items with submenus to see them in popovers.")],-1))])]),s[84]||(s[84]=i("div",{class:"mbe4"},[i("h2",null,"Sidebar with Header Actions"),i("p",null,[d(" Demonstrates using "),i("code",null,"ag-header-start"),d(", "),i("code",null,"ag-header-end"),d(", and "),i("code",null,"ag-header-toggle"),d(" slots for a composable header layout with action buttons. ")])],-1)),i("div",Vs,[i("div",Ms,[n(f,{open:e.sidebar2.isOpen,collapsed:e.sidebar2.isCollapsed,"show-mobile-toggle":!0,"onUpdate:open":s[20]||(s[20]=l=>e.sidebar2.isOpen=l),"onUpdate:collapsed":s[21]||(s[21]=l=>e.sidebar2.isCollapsed=l)},{default:p(()=>[s[56]||(s[56]=i("h2",{slot:"ag-header-start",style:{margin:"0","font-size":"1.125rem","font-weight":"600"}}," My Application ",-1)),i("button",Is,[n(E,{size:20})]),i("button",{type:"button",slot:"ag-header-toggle",onClick:s[19]||(s[19]=(...l)=>h.toggleSidebar2Collapse&&h.toggleSidebar2Collapse(...l)),style:{background:"none",border:"none",padding:"8px 0",cursor:"pointer",display:"flex","align-items":"center",color:"inherit"},"aria-label":"Toggle sidebar"},[...s[52]||(s[52]=[i("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[i("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}),i("path",{d:"M9 3v18"})],-1)])]),n(D,null,{default:p(()=>[n(F,null,{default:p(()=>[i("button",Rs,[n(k,{size:20}),s[53]||(s[53]=i("span",{class:"nav-label"},"Dashboard",-1))])]),_:1}),n(F,null,{default:p(()=>[i("button",zs,[n(m,{size:20}),s[54]||(s[54]=i("span",{class:"nav-label"},"Projects",-1))])]),_:1}),n(F,null,{default:p(()=>[i("button",js,[n(A,{size:20}),s[55]||(s[55]=i("span",{class:"nav-label"},"Team",-1))])]),_:1})]),_:1}),s[57]||(s[57]=i("div",{slot:"ag-footer",style:{"font-size":"0.875rem",color:"var(--ag-text-secondary)"}}," © 2024 Company ",-1))]),_:1},8,["open","collapsed"]),s[58]||(s[58]=i("main",{style:{flex:"1",padding:"2rem",overflow:"auto",background:"var(--ag-background)"}},[i("h1",{style:{"margin-top":"0"}},"Header Actions Pattern"),i("p",null,[d("The header includes a settings button in the "),i("code",null,"ag-header-end"),d(" slot.")]),i("p",null,"This allows for flexible header layouts with multiple action buttons.")],-1))])]),s[85]||(s[85]=i("div",{class:"mbe4"},[i("h2",null,"Sidebar with Built-in Toggle"),i("p",null,[d(" Using "),i("code",null,"show-header-toggle"),d(" adds a built-in collapse button automatically. ")])],-1)),i("div",Os,[i("div",Hs,[n(f,{open:e.sidebar3.isOpen,collapsed:e.sidebar3.isCollapsed,"show-header-toggle":!0,"show-mobile-toggle":!0,"onUpdate:open":s[22]||(s[22]=l=>e.sidebar3.isOpen=l),"onUpdate:collapsed":s[23]||(s[23]=l=>e.sidebar3.isCollapsed=l)},{default:p(()=>[s[62]||(s[62]=i("h2",{slot:"ag-header-start",style:{margin:"0","font-size":"1.125rem","font-weight":"600"}}," Built-in Toggle ",-1)),n(D,null,{default:p(()=>[n(F,null,{default:p(()=>[i("button",Ls,[n(k,{size:20}),s[59]||(s[59]=i("span",{class:"nav-label"},"Dashboard",-1))])]),_:1}),n(F,null,{default:p(()=>[i("button",Us,[n(m,{size:20}),s[60]||(s[60]=i("span",{class:"nav-label"},"Projects",-1))])]),_:1}),n(F,null,{default:p(()=>[i("button",_s,[n(A,{size:20}),s[61]||(s[61]=i("span",{class:"nav-label"},"Team",-1))])]),_:1})]),_:1}),s[63]||(s[63]=i("div",{slot:"ag-footer",style:{"font-size":"0.875rem",color:"var(--ag-text-secondary)"}}," © 2024 Company ",-1))]),_:1},8,["open","collapsed"]),s[64]||(s[64]=i("main",{style:{flex:"1",padding:"2rem",overflow:"auto",background:"var(--ag-background)"}},[i("h1",{style:{"margin-top":"0"}},"Built-in Header Toggle"),i("p",null,"No need to provide a custom toggle button—the sidebar includes one automatically.")],-1))])]),s[86]||(s[86]=i("div",{class:"mbe4"},[i("h2",null,"Disable Compact Mode"),i("p",null,[d(" With "),i("code",null,"disable-compact-mode"),d(", the sidebar has no intermediate collapsed/rail state. It's either fully open (expanded) or completely hidden. This pattern is used in applications like Claude AI Studio. ")])],-1)),i("div",Ws,[i("div",$s,[n(f,{open:e.sidebar4.isOpen,"disable-compact-mode":!0,"show-mobile-toggle":!0,"onUpdate:open":s[25]||(s[25]=l=>e.sidebar4.isOpen=l)},{default:p(()=>[s[69]||(s[69]=i("h2",{slot:"ag-header-start",style:{margin:"0","font-size":"1.125rem","font-weight":"600"}}," AI Studio ",-1)),i("button",{type:"button",slot:"ag-header-toggle",onClick:s[24]||(s[24]=(...l)=>h.toggleSidebar4Responsive&&h.toggleSidebar4Responsive(...l)),style:{background:"none",border:"none",padding:"8px 0",cursor:"pointer",display:"flex","align-items":"center",color:"inherit"},"aria-label":"Toggle sidebar"},[n(U,{size:20})]),n(D,null,{default:p(()=>[n(F,null,{default:p(()=>[i("button",Xs,[n(k,{size:20}),s[65]||(s[65]=i("span",{class:"nav-label"},"Dashboard",-1))])]),_:1}),n(F,null,{default:p(()=>[i("button",Gs,[n(m,{size:20}),s[66]||(s[66]=i("span",{class:"nav-label"},"Projects",-1))])]),_:1}),n(F,null,{default:p(()=>[i("button",Ks,[n(A,{size:20}),s[67]||(s[67]=i("span",{class:"nav-label"},"Team",-1))])]),_:1}),n(F,null,{default:p(()=>[i("button",Zs,[n(E,{size:20}),s[68]||(s[68]=i("span",{class:"nav-label"},"Settings",-1))])]),_:1})]),_:1}),s[70]||(s[70]=i("div",{slot:"ag-footer",style:{"font-size":"0.875rem",color:"var(--ag-text-secondary)"}}," © 2024 Company ",-1))]),_:1},8,["open"]),s[71]||(s[71]=i("main",{style:{flex:"1",padding:"2rem",overflow:"auto",background:"var(--ag-background)"}},[i("h1",{style:{"margin-top":"0"}},"Disable Compact Mode"),i("p",null,"Use the mobile toggle button to show/hide the sidebar."),i("p",null,"Notice there's no collapsed/rail mode—it's either fully visible or completely hidden.")],-1))])]),s[87]||(s[87]=i("div",{class:"mbe4"},[i("h2",null,"Active Item Tracking"),i("p",null," Click navigation items to see the active state change. This demonstrates how to track the current route and apply active styling to both top-level and submenu items. ")],-1)),i("div",Js,[i("div",Ys,[n(f,{open:e.sidebar5.isOpen,collapsed:e.sidebar5.isCollapsed,"show-mobile-toggle":!0,"onUpdate:open":s[38]||(s[38]=l=>e.sidebar5.isOpen=l),"onUpdate:collapsed":s[39]||(s[39]=l=>e.sidebar5.isCollapsed=l)},{default:p(()=>[s[79]||(s[79]=i("h2",{slot:"ag-header-start",style:{margin:"0","font-size":"1.125rem","font-weight":"600"}}," Navigation ",-1)),i("button",{type:"button",slot:"ag-header-toggle",onClick:s[26]||(s[26]=(...l)=>h.toggleSidebar5Collapse&&h.toggleSidebar5Collapse(...l)),style:{background:"none",border:"none",padding:"8px 0",cursor:"pointer",display:"flex","align-items":"center",color:"inherit"},"aria-label":"Toggle sidebar"},[...s[72]||(s[72]=[i("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[i("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}),i("path",{d:"M9 3v18"})],-1)])]),n(D,null,{default:p(()=>[n(F,null,{default:p(()=>[i("button",{type:"button",class:"nav-button active","aria-current":"page","data-route":"/dashboard",onClick:s[27]||(s[27]=l=>h.handleNavClick("/dashboard",l))},[n(k,{size:20}),s[73]||(s[73]=i("span",{class:"nav-label"},"Dashboard",-1))])]),_:1}),n(F,null,{default:p(()=>[i("button",{type:"button",class:"nav-button","data-route":"/projects",onClick:s[28]||(s[28]=l=>h.handleNavClick("/projects",l))},[n(m,{size:20}),s[74]||(s[74]=i("span",{class:"nav-label"},"Projects",-1))])]),_:1}),n(F,null,{default:p(()=>[i("button",{type:"button",class:"nav-button","data-route":"/team",onClick:s[29]||(s[29]=l=>h.handleNavClick("/team",l))},[n(A,{size:20}),s[75]||(s[75]=i("span",{class:"nav-label"},"Team",-1))])]),_:1}),n(F,null,{default:p(()=>[i("button",{type:"button",class:"nav-button nav-button-expanded","aria-expanded":"false","data-route":"/settings",onClick:s[30]||(s[30]=(...l)=>h.handleSettingsClick&&h.handleSettingsClick(...l))},[n(E,{size:20}),s[76]||(s[76]=i("span",{class:"nav-label"},"Settings",-1)),i("span",Qs,[n(T,{size:16})])]),n(N,{class:"nav-button-collapsed",placement:"right-start","trigger-type":"click",distance:8,arrow:!0,".showHeader":!1},{default:p(()=>[i("button",{slot:"trigger",type:"button",class:"nav-button","data-route":"/settings",onClick:s[31]||(s[31]=l=>h.handleNavClick("/settings",l))},[n(E,{size:20}),s[77]||(s[77]=i("span",{class:"nav-label"},"Settings",-1)),s[78]||(s[78]=i("span",{class:"collapsed-indicator"},[i("svg",{viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[i("path",{d:"M2 3l2 2 2-2",stroke:"currentColor","stroke-width":"1","stroke-linecap":"round"})])],-1))]),n(P,{slot:"content",class:"popover-submenu"},{default:p(()=>[i("a",{href:"#",class:"nav-sublink","data-route":"/settings/profile",onClick:s[32]||(s[32]=l=>h.handleNavClick("/settings/profile",l))},"Profile"),i("a",{href:"#",class:"nav-sublink","data-route":"/settings/billing",onClick:s[33]||(s[33]=l=>h.handleNavClick("/settings/billing",l))},"Billing"),i("a",{href:"#",class:"nav-sublink","data-route":"/settings/security",onClick:s[34]||(s[34]=l=>h.handleNavClick("/settings/security",l))},"Security")]),_:1})]),_:1},32),n(V,null,{default:p(()=>[i("a",{class:"nav-sublink",href:"#","data-route":"/settings/profile",onClick:s[35]||(s[35]=l=>h.handleNavClick("/settings/profile",l))},"Profile"),i("a",{class:"nav-sublink",href:"#","data-route":"/settings/billing",onClick:s[36]||(s[36]=l=>h.handleNavClick("/settings/billing",l))},"Billing"),i("a",{class:"nav-sublink",href:"#","data-route":"/settings/security",onClick:s[37]||(s[37]=l=>h.handleNavClick("/settings/security",l))},"Security")]),_:1})]),_:1})]),_:1})]),_:1},8,["open","collapsed"]),i("main",si,[s[81]||(s[81]=i("h1",{style:{"margin-top":"0"}},"Active Item Tracking",-1)),i("p",null,[s[80]||(s[80]=d("Current route: ",-1)),i("strong",null,X(e.sidebar5.activeRoute),1)]),s[82]||(s[82]=j("",3))])])])])}const ai=$(Ds,[["render",ii]]),Ei=JSON.parse('{"title":"Sidebar","description":"","frontmatter":{},"headers":[],"relativePath":"components/sidebar.md","filePath":"components/sidebar.md"}'),ni={name:"components/sidebar.md"},Ai=Object.assign(ni,{setup(a){return(s,t)=>(B(),v("div",null,[t[0]||(t[0]=i("h1",{id:"sidebar",tabindex:"-1"},[d("Sidebar "),i("a",{class:"header-anchor",href:"#sidebar","aria-label":'Permalink to "Sidebar"'},"​")],-1)),n(W),t[1]||(t[1]=i("div",{class:"danger custom-block"},[i("p",{class:"custom-block-title"},"Experimental Component"),i("p",null,[d("The Sidebar is an "),i("strong",null,"experimental component"),d(` that departs from AgnosticUI's typical "primitives only" philosophy. Due to its complex nature and shadow DOM encapsulation, it requires some nuanced global CSS to function properly across all scenarios.`)]),i("p",null,[i("strong",null,"Use at your own risk."),d(" If you're comfortable with these architectural tradeoffs, feel free to use the component. We welcome contributions to help improve its implementation and reduce external dependencies.")])],-1)),t[2]||(t[2]=i("p",null,"A collapsible sidebar component for navigation with support for expanded/collapsed states, nested navigation, submenus, and responsive behavior. The Sidebar adapts seamlessly across desktop and mobile viewports with optional rail mode (icon-only) on desktop and overlay mode on mobile.",-1)),t[3]||(t[3]=i("h2",{id:"examples",tabindex:"-1"},[d("Examples "),i("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),n(ai),t[4]||(t[4]=j("",54))]))}});export{Ei as __pageData,Ai as default};
