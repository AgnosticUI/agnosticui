import{c as R,A as $}from"./chunks/AlphaWarning.BkRV4LZN.js";import{i as x,a as V,x as E,E as K}from"./chunks/lit-element.B0TUrqGF.js";import{z as d}from"./chunks/property-CemaeiRl.BAjarvIB.js";import{n as L}from"./chunks/state-CovhUvdr.BllWkzJh.js";import{f as G}from"./chunks/query-BykXNUlT.Pm7lu9c1.js";import"./chunks/Button.CXY3ONNo.js";import{d as O,p as B,c as q,o as C,r as S,j as n,K as _,v as T,_ as W,C as A,G as i,w as a,a as t,e as M,t as P,b as w,x as j,ae as J}from"./chunks/framework.BoyT2Jkt.js";import{M as X}from"./chunks/menu.D1Swuu3I.js";import{U as Y}from"./chunks/user.9u1KZ65k.js";import"./chunks/if-defined-C8i28hSj.CfeO1FY9.js";/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=R("monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=R("smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ss=R("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);var is=Object.defineProperty,k=(p,s,l,h)=>{for(var o=void 0,c=p.length-1,e;c>=0;c--)(e=p[c])&&(o=e(s,l,o)||o);return o&&is(s,l,o),o};const z=class extends V{constructor(){super(),this.size="md",this.shape="rounded",this.bordered=!1,this.ghost=!1,this.link=!1,this.grouped=!1,this.disabled=!1,this.loading=!1,this.ariaLabel="",this.menuVariant="chevron",this.buttonVariant="",this.unicode="",this._menuOpen=!1,this.menuAlign="left",this.additionalGutter="",this._clickOutsideHandler=this._handleClickOutside.bind(this)}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._clickOutsideHandler)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._clickOutsideHandler)}firstUpdated(){this._updateMenuReference()}updated(s){super.updated(s),s.has("_menuOpen")&&this._updateMenuReference()}_updateMenuReference(){this._menu=this.querySelector("ag-menu")}_handleClickOutside(s){!this._menuOpen||s.composedPath().includes(this)||this._closeMenu()}_handleClick(s){if(this.disabled)return;this.onClick&&this.onClick(s);const l=new MouseEvent("click",{bubbles:!0,composed:!0,cancelable:s.cancelable});this.dispatchEvent(l),this._menuOpen?this._closeMenu():this._openMenu()}_handleFocus(s){this.onFocus&&this.onFocus(s);const l=new FocusEvent("focus",{bubbles:!0,composed:!0});this.dispatchEvent(l)}_handleBlur(s){this.onBlur&&this.onBlur(s);const l=new FocusEvent("blur",{bubbles:!0,composed:!0});this.dispatchEvent(l)}_handleKeydown(s){switch(s.key){case"Enter":case" ":s.preventDefault(),this._openMenu();break;case"ArrowDown":s.preventDefault(),this._openMenu(!0);break;case"ArrowUp":s.preventDefault(),this._openMenu(!1);break}}_updateMenuPosition(){var h;if(!this._menu||!this._trigger)return;const s=(h=this._trigger.shadowRoot)==null?void 0:h.querySelector("button");if(!s)return;const l=s.offsetHeight;this.additionalGutter?this._menu.style.top=`calc(${l}px + ${this.additionalGutter})`:this._menu.style.top=`${l}px`}_openMenu(s=!0){if(this._menuOpen)return;this._menuOpen=!0,this._updateMenuReference(),this._menu&&(this._menu.open=!0,this._updateMenuPosition(),this._menu._updateMenuItems(),requestAnimationFrame(()=>{var h,o;s?(h=this._menu)==null||h._focusFirstItem():(o=this._menu)==null||o._focusLastItem()}));const l=new CustomEvent("menu-open",{detail:{open:!0},bubbles:!0,composed:!0});this.dispatchEvent(l),this.onMenuOpen&&this.onMenuOpen(l)}_closeMenu(){var l;if(!this._menuOpen)return;this._menuOpen=!1,this._menu&&(this._menu.open=!1),(l=this._trigger)==null||l.focus();const s=new CustomEvent("menu-close",{detail:{open:!1},bubbles:!0,composed:!0});this.dispatchEvent(s),this.onMenuClose&&this.onMenuClose(s)}_renderChevronIcon(){return E`
      <svg class="chevron-icon" part="ag-menu-chevron-icon" viewBox="0 0 20 20" fill="currentColor">
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    `}render(){this.setAttribute("data-menu-open",this._menuOpen?"true":"false");const s=this.unicode?E`<span class="unicode-icon" part="ag-menu-unicode-icon">${this.unicode}</span>`:E`<slot></slot>`,l=this.menuVariant==="icon";return E`
      <ag-button
        .variant=${this.buttonVariant}
        .size=${this.size}
        .shape=${l?this.shape||"square":this.shape}
        ?bordered=${this.bordered}
        ?ghost=${this.ghost}
        ?link=${this.link}
        ?grouped=${this.grouped}
        ?disabled=${this.disabled}
        ?loading=${this.loading}
        aria-haspopup="menu"
        aria-expanded="${this._menuOpen}"
        .ariaLabel=${this.ariaLabel||"Menu"}
        @click=${this._handleClick}
        @focus=${this._handleFocus}
        @blur=${this._handleBlur}
        @keydown=${this._handleKeydown}
      >
        ${this.menuVariant==="chevron"?E`<span class="label" part="ag-menu-label">${s}</span> ${this._renderChevronIcon()}`:s}
      </ag-button>
      <slot name="menu"></slot>
    `}};z.styles=x`
    :host {
      display: inline-flex;
      position: relative;
      background-color: inherit;
    }

    .chevron-icon {
      width: var(--ag-space-4);
      height: var(--ag-space-4);
      color: var(--ag-text-secondary);
      transition: transform var(--ag-motion-fast) ease;
      flex-shrink: 0;
    }

    :host([button-variant="primary"]) .chevron-icon,
    :host([button-variant="secondary"]) .chevron-icon,
    :host([button-variant="success"]) .chevron-icon,
    :host([button-variant="warning"]) .chevron-icon,
    :host([button-variant="danger"]) .chevron-icon,
    :host([button-variant="monochrome"]) .chevron-icon {
      color: var(--ag-white);
    }

    /* When a button is ghost, we want the chevron to be the variant color */
    :host([ghost][button-variant="primary"]) .chevron-icon {
      color: var(--ag-primary);
    }
    :host([ghost][button-variant="secondary"]) .chevron-icon {
      color: var(--ag-secondary);
    }
    :host([ghost][button-variant="success"]) .chevron-icon {
      color: var(--ag-success);
    }
    :host([ghost][button-variant="warning"]) .chevron-icon {
      color: var(--ag-warning);
    }
    :host([ghost][button-variant="danger"]) .chevron-icon {
      color: var(--ag-danger);
    }
    :host([ghost][button-variant="monochrome"]) .chevron-icon {
      color: var(--ag-text-primary);
    }

    .label {
      display: inline-flex;
      align-items: center;
      gap: var(--ag-space-2);
    }

    ag-button[aria-expanded="true"] .chevron-icon {
      transform: rotate(180deg);
    }

    ::slotted(ag-menu) {
      position: absolute;
      background-color: var(--ag-background-primary);
      margin-block-start: var(--ag-space-1);
      z-index: var(--ag-z-index-dropdown);
    }
    /* Left alignment - menu left aligns with button left */
    :host([menu-align="left"]) ::slotted(ag-menu) {
      inset-inline-start: 0;
      inset-inline-end: auto;
    }

    /* Right alignment - menu right aligns with button right */
    :host([menu-align="right"]) ::slotted(ag-menu) {
      inset-inline-end: 0;
      inset-inline-start: auto;
    }
  `;let u=z;k([G("ag-button")],u.prototype,"_trigger");k([d({type:String,reflect:!0})],u.prototype,"size");k([d({type:String,reflect:!0})],u.prototype,"shape");k([d({type:Boolean,reflect:!0})],u.prototype,"bordered");k([d({type:Boolean,reflect:!0})],u.prototype,"ghost");k([d({type:Boolean,reflect:!0})],u.prototype,"link");k([d({type:Boolean,reflect:!0})],u.prototype,"grouped");k([d({type:Boolean})],u.prototype,"disabled");k([d({type:Boolean})],u.prototype,"loading");k([d({type:String,reflect:!0,attribute:"aria-label"})],u.prototype,"ariaLabel");k([d({type:String,reflect:!0,attribute:"menu-variant"})],u.prototype,"menuVariant");k([d({type:String,reflect:!0,attribute:"button-variant"})],u.prototype,"buttonVariant");k([d({type:String})],u.prototype,"unicode");k([d({type:String,reflect:!0,attribute:"menu-align"})],u.prototype,"menuAlign");k([d({type:String,reflect:!0,attribute:"additional-gutter"})],u.prototype,"additionalGutter");k([d({attribute:!1})],u.prototype,"onMenuOpen");k([d({attribute:!1})],u.prototype,"onMenuClose");k([d({attribute:!1})],u.prototype,"onClick");k([d({attribute:!1})],u.prototype,"onFocus");k([d({attribute:!1})],u.prototype,"onBlur");k([L()],u.prototype,"_menuOpen");const N=class extends V{constructor(){super(),this.open=!1,this.placement="bottom-start",this.ariaLabel="",this.type="default",this.checkHiddenItems=!1,this._focusedIndex=0,this._menuItems=[]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu"),this.setAttribute("aria-orientation","vertical"),this.addEventListener("keydown",this._handleKeydown),this.addEventListener("menu-select",this._handleMenuSelect)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._handleKeydown),this.removeEventListener("menu-select",this._handleMenuSelect)}firstUpdated(){this.open||this.setAttribute("hidden","")}updated(s){s.has("open")&&(this.open?this.removeAttribute("hidden"):(this.setAttribute("hidden",""),this.type==="default"&&(this.selectedValue=void 0,this._updateSelection()))),s.has("selectedValue")&&this._updateSelection()}_handleMenuSelect(s){const l=s.target;this.type==="single-select"&&(this.selectedValue=l.value)}_updateSelection(){this._menuItems.forEach(s=>{s.checked=this.selectedValue!==void 0&&s.value===this.selectedValue})}_isElementNavigable(s){if(s.disabled||s.getAttribute("aria-hidden")==="true")return!1;if(!this.checkHiddenItems)return!0;const l=window.getComputedStyle(s);if(l.display==="none"||l.visibility==="hidden")return!1;let h=s.parentElement;for(;h&&h!==this;){const o=window.getComputedStyle(h);if(o.display==="none"||o.visibility==="hidden")return!1;h=h.parentElement}return!0}_getNavigableItems(){return this.checkHiddenItems?this._menuItems.filter(s=>this._isElementNavigable(s)):this._menuItems.filter(s=>!s.disabled&&s.getAttribute("aria-hidden")!=="true")}_updateMenuItems(){this._menuItems=Array.from(this.querySelectorAll("ag-menu-item")),this._updateTabIndex(),this._updateSelection()}_updateTabIndex(){this._menuItems.forEach((s,l)=>{s.setAttribute("tabindex",l===this._focusedIndex?"0":"-1")})}_focusFirstItem(){const s=this._getNavigableItems();if(s.length===0)return;const l=s[0];this._focusedIndex=this._menuItems.indexOf(l),this._updateTabIndex(),l==null||l.focus()}_focusLastItem(){const s=this._getNavigableItems();if(s.length===0)return;const l=s[s.length-1];this._focusedIndex=this._menuItems.indexOf(l),this._updateTabIndex(),l==null||l.focus()}_focusNextItem(){const s=this._getNavigableItems();if(s.length===0)return;const l=this._menuItems[this._focusedIndex],h=s.indexOf(l),o=h>=0?h:-1;for(let c=1;c<=s.length;c++){const e=(o+c)%s.length,F=s[e];this._focusedIndex=this._menuItems.indexOf(F),this._updateTabIndex(),F==null||F.focus();return}}_focusPreviousItem(){const s=this._getNavigableItems();if(s.length===0)return;const l=this._menuItems[this._focusedIndex],h=s.indexOf(l),o=h>=0?h:s.length;for(let c=1;c<=s.length;c++){const e=(o-c+s.length)%s.length,F=s[e];this._focusedIndex=this._menuItems.indexOf(F),this._updateTabIndex(),F==null||F.focus();return}}_handleKeydown(s){switch(this.onKeyDown&&this.onKeyDown(s),s.key){case"ArrowDown":s.preventDefault(),this._focusNextItem();break;case"ArrowUp":s.preventDefault(),this._focusPreviousItem();break;case"Home":s.preventDefault(),this._focusFirstItem();break;case"End":s.preventDefault(),this._focusLastItem();break;case"Enter":{s.preventDefault();const l=this._getNavigableItems(),h=this._menuItems[this._focusedIndex];l.includes(h)&&(h==null||h.click());break}case"Escape":case"Tab":s.preventDefault(),this._closeMenu();break}}_closeMenu(){const s=this.closest("ag-menu-button");s&&s._closeMenu()}render(){return E`<div class="menu" part="ag-menu"><slot></slot></div>`}};N.styles=x`
    :host {
      position: absolute;
      background-color: var(--ag-background-primary);
      border: 1px solid var(--ag-border-subtle);
      border-radius: var(--ag-radius-md);
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      margin-block-start: var(--ag-space-1);
      min-inline-size: 12rem;
      max-inline-size: 16rem;
      width: max-content;
      z-index: var(--ag-z-index-dropdown);
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .menu {
      padding: var(--ag-space-2);
    }

    :host([hidden]) {
      display: none;
    }
  `;let b=N;k([d({type:Boolean})],b.prototype,"open");k([d()],b.prototype,"placement");k([d({reflect:!0,attribute:"aria-label"})],b.prototype,"ariaLabel");k([d({attribute:"selected-value"})],b.prototype,"selectedValue");k([d({type:String})],b.prototype,"type");k([d({type:Boolean,attribute:"check-hidden-items"})],b.prototype,"checkHiddenItems");k([d({attribute:!1})],b.prototype,"onKeyDown");k([L()],b.prototype,"_focusedIndex");k([L()],b.prototype,"_menuItems");const U=class extends V{constructor(){super(),this._menu=null,this.value="",this.disabled=!1,this.href="",this.target="",this.checked=!1,this.variant="default"}connectedCallback(){var l;super.connectedCallback(),this._menu=this.closest("ag-menu");const s=((l=this._menu)==null?void 0:l.type)==="single-select"?"menuitemradio":"menuitem";this.setAttribute("role",s),this.setAttribute("tabindex","-1"),this.addEventListener("click",this._handleClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this._handleClick)}updated(s){s.has("checked")&&this.setAttribute("aria-checked",this.checked?"true":"false")}_handleClick(s){if(this.disabled){s.preventDefault(),s.stopPropagation();return}this.onClick&&s instanceof MouseEvent&&this.onClick(s);const l=this.closest("ag-menu-button"),h=new CustomEvent("menu-select",{detail:{value:this.value},bubbles:!0,composed:!0});this.dispatchEvent(h),this.onMenuSelect&&this.onMenuSelect(h),l&&!this.href&&l._closeMenu()}focus(){var l;const s=(l=this.shadowRoot)==null?void 0:l.querySelector("button, a");s&&s.focus()}render(){return this.href?E`
        <a
          href="${this.href}"
          target="${this.target||K}"
          part="ag-menu-item-link ag-menu-item"
          ?disabled="${this.disabled}"
        >
          <slot></slot>
        </a>
      `:E`
      <button ?disabled="${this.disabled}" part="ag-menu-item-button ag-menu-item">
        <slot></slot>
      </button>
    `}};U.styles=x`
    :host {
      display: block;
    }

    button {
      width: 100%;
    }
    button,
    a {
      display: block;
      background-color: transparent;
      color: var(--ag-text-primary);
      border: none;
      border-radius: var(--ag-radius-sm);
      padding: var(--ag-space-2) var(--ag-space-3);
      text-align: start;
      text-decoration: none;
      font-size: inherit;
      line-height: 1.25;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      cursor: pointer;
      transition: all var(--ag-motion-fast) ease;
    }

    button:hover:not([disabled]),
    a:hover:not([disabled]) {
      background-color: var(--ag-background-secondary);
      color: var(--ag-text-primary);
    }

    button:focus,
    a:focus {
      background-color: var(--ag-background-secondary);
      outline: var(--ag-focus-width) solid var(--ag-focus);
      outline-offset: 0;
    }

    button:active:not([disabled]),
    a:active:not([disabled]) {
      background-color: var(--ag-background-tertiary);
    }

    :host([aria-checked='true']) button:not([disabled]),
    :host([aria-checked='true']) a:not([disabled]) {
      background-color: var(--ag-menu-item-selected-bg, var(--ag-primary));
      color: var(--ag-white);
    }

    :host([aria-checked='true']) button:focus:not([disabled]),
    :host([aria-checked='true']) a:focus:not([disabled]),
    :host([aria-checked='true']) button:hover:not([disabled]),
    :host([aria-checked='true']) a:hover:not([disabled]) {
      background-color: var(--ag-menu-item-selected-active-bg, var(--ag-primary-dark));
    }


    :host([variant="monochrome"][aria-checked='true']) button:not([disabled]),
    :host([variant="monochrome"][aria-checked='true']) a:not([disabled]) {
      background-color: var(--ag-background-primary-inverted);
      color: var(--ag-text-primary-inverted);
    }

    /* hover/active + selected gets --ag-background-secondary-inverted affordance */
    :host([variant="monochrome"][aria-checked='true']) button:focus:not([disabled]),
    :host([variant="monochrome"][aria-checked='true']) a:focus:not([disabled]),
    :host([variant="monochrome"][aria-checked='true']) button:hover:not([disabled]),
    :host([variant="monochrome"][aria-checked='true']) a:hover:not([disabled]) {
      background-color: var(--ag-background-secondary-inverted);
    }

    button[disabled],
    a[disabled] {
      background-color: transparent;
      color: var(--ag-text-muted);
      cursor: not-allowed;
      opacity: 0.6;
    }
  `;let v=U;k([d()],v.prototype,"value");k([d({type:Boolean})],v.prototype,"disabled");k([d()],v.prototype,"href");k([d()],v.prototype,"target");k([d({type:Boolean})],v.prototype,"checked");k([d({type:String,reflect:!0})],v.prototype,"variant");k([d({attribute:!1})],v.prototype,"onClick");k([d({attribute:!1})],v.prototype,"onMenuSelect");const H=class extends V{connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}render(){return E`<div class="separator" part="ag-menu-separator"></div>`}};H.styles=x`
    :host {
      display: block;
    }
    .separator {
      border-top: 1px solid var(--ag-border);
      margin: var(--ag-space-2) 0;
    }
  `;let as=H;customElements.get("ag-menu-button")||customElements.define("ag-menu-button",u);customElements.get("ag-menu")||customElements.define("ag-menu",b);customElements.get("ag-menu-item")||customElements.define("ag-menu-item",v);customElements.get("ag-menu-separator")||customElements.define("ag-menu-separator",as);const ts=[".disabled",".loading",".bordered",".ghost",".link",".grouped","menu-variant","menu-align","button-variant","size","shape","ariaLabel","unicode","additional-gutter"],ns=[".open",".checkHiddenItems","placement","type","selected-value","ariaLabel"],es=O({__name:"VueMenu",props:{open:{type:Boolean,default:!1},placement:{default:"bottom-start"},menuAriaLabel:{},menuAlign:{default:"left"},menuType:{default:"default"},selectedValue:{},checkHiddenItems:{type:Boolean,default:!1},menuVariant:{},buttonVariant:{},unicode:{},additionalGutter:{},size:{},shape:{},bordered:{type:Boolean},ghost:{type:Boolean},link:{type:Boolean},grouped:{type:Boolean},type:{},disabled:{type:Boolean,default:!1},loading:{type:Boolean},toggle:{type:Boolean},pressed:{type:Boolean},ariaLabel:{},onToggle:{}},emits:["click","focus","blur","keydown","menu-keydown","menu-open","menu-close","menu-select","update:open"],setup(p,{emit:s}){const l=s,h=B(),o=B(),c=g=>{l("click",g)},e=g=>{l("focus",g)},F=g=>{l("blur",g)},r=g=>{l("keydown",g)},I=g=>{l("menu-keydown",g)},y=g=>{const f=g;l("menu-open",f.detail),l("update:open",f.detail.open)},m=g=>{const f=g;l("menu-close",f.detail),l("update:open",f.detail.open)},D=g=>{l("menu-select",g.detail)};return(g,f)=>(C(),q("ag-menu-button",_({ref_key:"menuButtonRef",ref:h,".disabled":p.disabled,".loading":p.loading,".bordered":p.bordered,".ghost":p.ghost,".link":p.link,".grouped":p.grouped,"menu-variant":p.menuVariant,"menu-align":p.menuAlign,"button-variant":p.buttonVariant,size:p.size,shape:p.shape,ariaLabel:p.ariaLabel,unicode:p.unicode,"additional-gutter":p.additionalGutter,onClick:c,onFocus:e,onBlur:F,onKeydown:r,onMenuOpen:y,onMenuClose:m,onMenuSelect:D},g.$attrs),[S(g.$slots,"default"),n("ag-menu",{ref_key:"menuRef",ref:o,slot:"menu",".open":p.open,".checkHiddenItems":p.checkHiddenItems,placement:p.placement,type:p.menuType,"selected-value":p.selectedValue,ariaLabel:p.menuAriaLabel,onKeydown:I},[S(g.$slots,"menu")],40,ns)],48,ts))}}),ls=["value","disabled","href","target","variant","checked"],hs=O({__name:"VueMenuItem",props:{selected:{type:Boolean,default:!1},value:{default:""},disabled:{type:Boolean,default:!1},href:{},target:{},checked:{type:Boolean,default:!1},variant:{default:"default"}},emits:["click","menu-select"],setup(p,{emit:s}){const l=s,h=B(),o=e=>{l("click",e)},c=e=>{l("menu-select",e.detail)};return(e,F)=>(C(),q("ag-menu-item",_({ref_key:"menuItemRef",ref:h,value:p.value,disabled:p.disabled||void 0,href:p.href,target:p.target,variant:p.variant,checked:p.checked||p.selected,onClick:o,onMenuSelect:c},e.$attrs),[S(e.$slots,"default")],16,ls))}}),ps=O({__name:"VueMenuSeparator",setup(p){const s=B();return T(async()=>{await customElements.whenDefined("ag-menu-separator")}),(l,h)=>(C(),q("ag-menu-separator",_({ref_key:"menuSeparatorRef",ref:s},l.$attrs),null,16))}}),ks={name:"MenuExamples",components:{VueMenu:es,VueMenuItem:hs,VueMenuSeparator:ps,User:Y,Menu:X,X:ss,Monitor:Q,Smartphone:Z},setup(){const p=B(null),s=B(null),l=B(!1),h=()=>{l.value=window.innerWidth<768};return T(()=>{h(),window.addEventListener("resize",h)}),j(()=>{window.removeEventListener("resize",h)}),{lastEvent:p,lastSelectedValue:s,isMobile:l,handleMenuOpen:y=>{const m=s.value?`, selected: ${s.value}`:"";p.value=`menu-open (open: ${y.open}${m})`},handleMenuClose:y=>{const m=s.value?`, selected: ${s.value}`:"";p.value=`menu-close (open: ${y.open}${m})`},handleMenuSelect:y=>{s.value=y.value,p.value=`menu-select (value: ${y.value})`},responsiveStyles:`
      <style>
        /* Hide desktop items on mobile (< 768px) */
        @media (max-width: 767px) {
          .desktop-only-items {
            display: none;
          }
        }
        
        /* Hide mobile items on desktop (>= 768px) */
        @media (min-width: 768px) {
          .mobile-only-items {
            display: none;
          }
        }
      </style>
    `,dynamicIconStyles:`
      <style>
        .dynamic-icon-menu .menu-icon,
        .dynamic-icon-menu .close-icon {
          transition: opacity var(--ag-motion-medium) ease-in-out;
        }
        .dynamic-icon-menu[data-menu-open="false"] .close-icon {
          opacity: 0;
          pointer-events: none;
          position: absolute;
        }
        .dynamic-icon-menu[data-menu-open="true"] .menu-icon {
          opacity: 0;
          pointer-events: none;
          position: absolute;
        }
      </style>
    `,customMenuStyles:`
      <style>
        .custom-menu-button ag-button::part(ag-button) {
          background-color: #4a5568;
          color: white;
          border: 2px solid #2d3748;
          border-radius: 8px;
        }
        .custom-menu-button .label {
          font-weight: bold;
        }
        .custom-menu-button .chevron-icon {
          color: #a0aec0;
        }
        .custom-menu-button ag-menu::part(ag-menu) {
          background-color: #2d3748;
          border: 1px solid #4a5568;
          border-radius: 8px;
        }
        .custom-menu-button ag-menu::part(ag-menu-item) {
          color: #e2e8f0;
        }
        .custom-menu-button ag-menu::part(ag-menu-item):hover {
          background-color: #4a5568;
        }
        .custom-menu-button ag-menu::part(ag-menu-separator) {
          background-color: #4a5568;
        }
        .custom-menu-button ag-menu-item::part(ag-menu-item-button) {
          color: white;
        }
        .custom-menu-button ag-menu-item::part(ag-menu-item-button):focus,
        .custom-menu-button ag-menu-item::part(ag-menu-item-button):hover {
          color: black;
        }
      </style>
    `}}},Fs={class:"stacked mbe4"},ds={class:"stacked mbe4"},rs={class:"flex items-center",style:{gap:"1rem","justify-content":"space-between"}},os={class:"stacked mbe4"},us={class:"stacked mbe4"},gs={class:"stacked mbe4"},cs={class:"stacked mbe4"},ys={class:"stacked mbe4"},ms={class:"flex-inline items-center"},Cs={class:"mbe4"},bs={class:"flex-inline items-center",style:{gap:"1rem"}},Es={class:"mbe4"},vs={class:"flex-inline items-center",style:{gap:"1rem"}},As={class:"mbe4"},Bs={class:"flex-inline items-center",style:{gap:"1rem"}},Ds={class:"stacked mbe4"},fs={class:"stacked mbe4"},qs={class:"flex-inline items-center",style:{gap:"10px"}},Ms={key:0},Is={class:"stacked mbe4"},ws={class:"flex items-start",style:{gap:"2rem","flex-wrap":"wrap"}},xs={class:"stacked mbe4"},Vs={class:"stacked mbe4"},Ss=["innerHTML"],Rs={class:"desktop-only-items"},Ls={class:"mobile-only-items"},Os={class:"stacked mbe4"},_s={class:"mbe4"},Ps={class:"stacked mbe4"},Ts=["innerHTML"],zs={class:"flex-inline items-center",style:{gap:"1rem"}},Ns={class:"stacked mbe4"},Us=["innerHTML"];function Hs(p,s,l,h,o,c){const e=A("VueMenuItem"),F=A("VueMenuSeparator"),r=A("VueMenu"),I=A("User"),y=A("Menu"),m=A("Monitor"),D=A("Smartphone"),g=A("X");return C(),q("section",null,[s[112]||(s[112]=n("div",{class:"mbe4"},[n("h2",null,"Basic Menu")],-1)),n("div",Fs,[i(r,{"menu-aria-label":"Menu options"},{menu:a(()=>[i(e,{value:"edit"},{default:a(()=>[...s[0]||(s[0]=[t("Edit",-1)])]),_:1}),i(e,{value:"copy"},{default:a(()=>[...s[1]||(s[1]=[t("Copy",-1)])]),_:1}),i(e,{value:"paste"},{default:a(()=>[...s[2]||(s[2]=[t("Paste",-1)])]),_:1}),i(F),i(e,{value:"delete"},{default:a(()=>[...s[3]||(s[3]=[t("Delete",-1)])]),_:1})]),default:a(()=>[s[4]||(s[4]=t(" Menu ",-1))]),_:1})]),s[113]||(s[113]=n("div",{class:"mbe4"},[n("h2",null,"Menu Alignment"),n("p",{class:"mbe4"},[t(" The "),n("code",null,"menu-align"),t(" prop controls horizontal alignment. Use "),n("code",null,'menu-align="right"'),t(" when the menu button is near the right edge of the viewport. ")])],-1)),n("div",ds,[n("div",rs,[i(r,{"menu-align":"left","menu-aria-label":"Left-aligned menu"},{menu:a(()=>[i(e,{value:"option1"},{default:a(()=>[...s[5]||(s[5]=[t("Option 1",-1)])]),_:1}),i(e,{value:"option2"},{default:a(()=>[...s[6]||(s[6]=[t("Option 2",-1)])]),_:1}),i(e,{value:"option3"},{default:a(()=>[...s[7]||(s[7]=[t("Option 3",-1)])]),_:1})]),default:a(()=>[s[8]||(s[8]=t(" Left Aligned ",-1))]),_:1}),i(r,{"menu-align":"right","menu-aria-label":"Right-aligned menu"},{menu:a(()=>[i(e,{value:"option1"},{default:a(()=>[...s[9]||(s[9]=[t("Option 1",-1)])]),_:1}),i(e,{value:"option2"},{default:a(()=>[...s[10]||(s[10]=[t("Option 2",-1)])]),_:1}),i(e,{value:"option3"},{default:a(()=>[...s[11]||(s[11]=[t("Option 3",-1)])]),_:1})]),default:a(()=>[s[12]||(s[12]=t(" Right Aligned ",-1))]),_:1})])]),s[114]||(s[114]=n("div",{class:"mbe4"},[n("h2",null,"Menu with Links")],-1)),n("div",os,[i(r,{"menu-aria-label":"Navigation menu"},{menu:a(()=>[i(e,{value:"home",href:"#home"},{default:a(()=>[...s[13]||(s[13]=[t("Home",-1)])]),_:1}),i(e,{value:"about",href:"#about"},{default:a(()=>[...s[14]||(s[14]=[t("About",-1)])]),_:1}),i(e,{value:"contact",href:"#contact"},{default:a(()=>[...s[15]||(s[15]=[t("Contact",-1)])]),_:1}),i(F),i(e,{value:"external",href:"https://example.com",target:"_blank"},{default:a(()=>[...s[16]||(s[16]=[t(" External Link ",-1)])]),_:1})]),default:a(()=>[s[17]||(s[17]=t(" Navigation ",-1))]),_:1})]),s[115]||(s[115]=n("div",{class:"mbe4"},[n("h2",null,"Disabled Button")],-1)),n("div",us,[i(r,{disabled:"","menu-aria-label":"Disabled menu"},{menu:a(()=>[i(e,{value:"item1"},{default:a(()=>[...s[18]||(s[18]=[t("Item 1",-1)])]),_:1}),i(e,{value:"item2"},{default:a(()=>[...s[19]||(s[19]=[t("Item 2",-1)])]),_:1})]),default:a(()=>[s[20]||(s[20]=t(" Disabled Menu ",-1))]),_:1})]),s[116]||(s[116]=n("div",{class:"mbe4"},[n("h2",null,"Menu with Disabled Items")],-1)),n("div",gs,[i(r,{"menu-aria-label":"Menu with disabled items"},{menu:a(()=>[i(e,{value:"enabled1"},{default:a(()=>[...s[21]||(s[21]=[t("Enabled Item",-1)])]),_:1}),i(e,{value:"disabled1",disabled:!0},{default:a(()=>[...s[22]||(s[22]=[t("Disabled Item",-1)])]),_:1}),i(e,{value:"enabled2"},{default:a(()=>[...s[23]||(s[23]=[t("Another Enabled",-1)])]),_:1}),i(F),i(e,{value:"disabled2",disabled:!0},{default:a(()=>[...s[24]||(s[24]=[t("Another Disabled",-1)])]),_:1})]),default:a(()=>[s[25]||(s[25]=t(" Mixed States ",-1))]),_:1})]),s[117]||(s[117]=n("div",{class:"mbe4"},[n("h2",null,"Complex Menu (File Menu)")],-1)),n("div",cs,[i(r,{"menu-aria-label":"File menu"},{menu:a(()=>[i(e,{value:"new"},{default:a(()=>[...s[26]||(s[26]=[t("New",-1)])]),_:1}),i(e,{value:"open"},{default:a(()=>[...s[27]||(s[27]=[t("Open...",-1)])]),_:1}),i(e,{value:"recent"},{default:a(()=>[...s[28]||(s[28]=[t("Open Recent",-1)])]),_:1}),i(F),i(e,{value:"save"},{default:a(()=>[...s[29]||(s[29]=[t("Save",-1)])]),_:1}),i(e,{value:"save-as"},{default:a(()=>[...s[30]||(s[30]=[t("Save As...",-1)])]),_:1}),i(F),i(e,{value:"export"},{default:a(()=>[...s[31]||(s[31]=[t("Export",-1)])]),_:1}),i(e,{value:"import"},{default:a(()=>[...s[32]||(s[32]=[t("Import",-1)])]),_:1}),i(F),i(e,{value:"print"},{default:a(()=>[...s[33]||(s[33]=[t("Print",-1)])]),_:1}),i(F),i(e,{value:"close"},{default:a(()=>[...s[34]||(s[34]=[t("Close",-1)])]),_:1})]),default:a(()=>[s[35]||(s[35]=t(" File ",-1))]),_:1})]),s[118]||(s[118]=n("div",{class:"mbe4"},[n("h2",null,"Menu with Sections")],-1)),n("div",ys,[i(r,{"menu-aria-label":"User menu"},{menu:a(()=>[i(e,{value:"profile"},{default:a(()=>[...s[37]||(s[37]=[t("Profile",-1)])]),_:1}),i(e,{value:"settings"},{default:a(()=>[...s[38]||(s[38]=[t("Settings",-1)])]),_:1}),i(F),i(e,{value:"help"},{default:a(()=>[...s[39]||(s[39]=[t("Help",-1)])]),_:1}),i(e,{value:"feedback"},{default:a(()=>[...s[40]||(s[40]=[t("Send Feedback",-1)])]),_:1}),i(F),i(e,{value:"logout"},{default:a(()=>[...s[41]||(s[41]=[t("Logout",-1)])]),_:1})]),default:a(()=>[n("div",ms,[i(I,{size:16,class:"mie2"}),s[36]||(s[36]=t(" User Menu ",-1))])]),_:1})]),s[119]||(s[119]=n("div",{class:"mbe4"},[n("h2",null,"Menu with Icon Button"),n("p",{class:"mbe4"},[t(" The following examples show using an icon as the trigger. The "),n("code",null,'menu-variant="icon"'),t(" removes the chevron and provides a minimal button container for the icon. You can also use an icon with the default chevron trigger as we see on the right. ")])],-1)),n("div",Cs,[s[48]||(s[48]=n("h3",null,"Large",-1)),n("div",bs,[i(r,{"menu-variant":"icon",ghost:"","menu-aria-label":"More options menu"},{menu:a(()=>[i(e,{value:"settings"},{default:a(()=>[...s[42]||(s[42]=[t("Settings",-1)])]),_:1}),i(e,{value:"profile"},{default:a(()=>[...s[43]||(s[43]=[t("Profile",-1)])]),_:1}),i(F),i(e,{value:"logout"},{default:a(()=>[...s[44]||(s[44]=[t("Logout",-1)])]),_:1})]),default:a(()=>[i(y,{size:24})]),_:1}),i(r,{"menu-aria-label":"More options menu"},{menu:a(()=>[i(e,{value:"settings"},{default:a(()=>[...s[45]||(s[45]=[t("Settings",-1)])]),_:1}),i(e,{value:"profile"},{default:a(()=>[...s[46]||(s[46]=[t("Profile",-1)])]),_:1}),i(F),i(e,{value:"logout"},{default:a(()=>[...s[47]||(s[47]=[t("Logout",-1)])]),_:1})]),default:a(()=>[i(y,{size:24})]),_:1})])]),n("div",Es,[s[55]||(s[55]=n("h3",null,"Medium",-1)),n("div",vs,[i(r,{"menu-variant":"icon",ghost:"",size:"sm","menu-aria-label":"More options menu"},{menu:a(()=>[i(e,{value:"settings"},{default:a(()=>[...s[49]||(s[49]=[t("Settings",-1)])]),_:1}),i(e,{value:"profile"},{default:a(()=>[...s[50]||(s[50]=[t("Profile",-1)])]),_:1}),i(F),i(e,{value:"logout"},{default:a(()=>[...s[51]||(s[51]=[t("Logout",-1)])]),_:1})]),default:a(()=>[i(y,{size:18})]),_:1}),i(r,{size:"sm","menu-aria-label":"More options menu"},{menu:a(()=>[i(e,{value:"settings"},{default:a(()=>[...s[52]||(s[52]=[t("Settings",-1)])]),_:1}),i(e,{value:"profile"},{default:a(()=>[...s[53]||(s[53]=[t("Profile",-1)])]),_:1}),i(F),i(e,{value:"logout"},{default:a(()=>[...s[54]||(s[54]=[t("Logout",-1)])]),_:1})]),default:a(()=>[i(y,{size:18})]),_:1})])]),n("div",As,[s[62]||(s[62]=n("h3",null,"Small",-1)),n("div",Bs,[i(r,{"menu-variant":"icon",ghost:"",size:"x-sm","menu-aria-label":"More options menu"},{menu:a(()=>[i(e,{value:"settings"},{default:a(()=>[...s[56]||(s[56]=[t("Settings",-1)])]),_:1}),i(e,{value:"profile"},{default:a(()=>[...s[57]||(s[57]=[t("Profile",-1)])]),_:1}),i(F),i(e,{value:"logout"},{default:a(()=>[...s[58]||(s[58]=[t("Logout",-1)])]),_:1})]),default:a(()=>[i(y,{size:14})]),_:1}),i(r,{size:"x-sm","menu-aria-label":"More options menu"},{menu:a(()=>[i(e,{value:"settings"},{default:a(()=>[...s[59]||(s[59]=[t("Settings",-1)])]),_:1}),i(e,{value:"profile"},{default:a(()=>[...s[60]||(s[60]=[t("Profile",-1)])]),_:1}),i(F),i(e,{value:"logout"},{default:a(()=>[...s[61]||(s[61]=[t("Logout",-1)])]),_:1})]),default:a(()=>[i(y,{size:14})]),_:1})])]),s[120]||(s[120]=n("div",{class:"mbe4"},[n("h2",null,"Monochrome Variant")],-1)),n("div",Ds,[i(r,{"menu-aria-label":"Monochrome menu","button-variant":"monochrome"},{menu:a(()=>[i(e,{value:"option1",variant:"monochrome"},{default:a(()=>[...s[63]||(s[63]=[t("Option 1",-1)])]),_:1}),i(e,{value:"option2",variant:"monochrome",selected:!0},{default:a(()=>[...s[64]||(s[64]=[t("Option 2 (Selected)",-1)])]),_:1}),i(e,{value:"option3",variant:"monochrome"},{default:a(()=>[...s[65]||(s[65]=[t("Option 3",-1)])]),_:1})]),default:a(()=>[s[66]||(s[66]=t(" Monochrome Menu ",-1))]),_:1})]),s[121]||(s[121]=n("div",{class:"mbe4"},[n("h2",null,"Event Handling")],-1)),n("div",fs,[n("div",qs,[i(r,{"menu-aria-label":"Event testing menu",onMenuOpen:h.handleMenuOpen,onMenuClose:h.handleMenuClose,onMenuSelect:h.handleMenuSelect},{menu:a(()=>[i(e,{value:"option1"},{default:a(()=>[...s[67]||(s[67]=[t("Option 1",-1)])]),_:1}),i(e,{value:"option2"},{default:a(()=>[...s[68]||(s[68]=[t("Option 2",-1)])]),_:1}),i(F),i(e,{value:"option3"},{default:a(()=>[...s[69]||(s[69]=[t("Option 3",-1)])]),_:1})]),default:a(()=>[s[70]||(s[70]=t(" Event Test ",-1))]),_:1},8,["onMenuOpen","onMenuClose","onMenuSelect"]),h.lastEvent?(C(),q("p",Ms,[s[71]||(s[71]=t(" Last event: ",-1)),n("strong",null,P(h.lastEvent),1)])):M("",!0)])]),s[122]||(s[122]=n("div",{class:"mbe4"},[n("h2",null,"Menu Types: Navigation vs Selection"),n("p",{class:"mbe4"},[t(" The "),n("code",null,"type"),t(" prop controls selection behavior. Use "),n("code",null,'type="default"'),t(" (the default) for navigation menus where selection is transient, and "),n("code",null,'type="single-select"'),t(" for menus where selection should persist (like filters or sorting). ")])],-1)),n("div",Is,[n("div",ws,[n("div",null,[s[76]||(s[76]=n("h3",{class:"mbe4"},'Navigation Menu (type="default")',-1)),s[77]||(s[77]=n("p",{class:"mbe4"}," Selection clears when menu closes. Use for navigation and actions. ",-1)),i(r,{"menu-aria-label":"User navigation"},{menu:a(()=>[i(e,{value:"profile"},{default:a(()=>[...s[72]||(s[72]=[t("Profile",-1)])]),_:1}),i(e,{value:"settings"},{default:a(()=>[...s[73]||(s[73]=[t("Settings",-1)])]),_:1}),i(F),i(e,{value:"logout"},{default:a(()=>[...s[74]||(s[74]=[t("Logout",-1)])]),_:1})]),default:a(()=>[s[75]||(s[75]=t(" User Menu ",-1))]),_:1})]),n("div",null,[s[82]||(s[82]=n("h3",{class:"mbe4"},'Selection Menu (type="single-select")',-1)),s[83]||(s[83]=n("p",{class:"mbe4"}," Selection persists when menu closes. Use for filters, sorting, etc. ",-1)),i(r,{"menu-type":"single-select","selected-value":"date","menu-aria-label":"Sort options"},{menu:a(()=>[i(e,{value:"date"},{default:a(()=>[...s[78]||(s[78]=[t("Date",-1)])]),_:1}),i(e,{value:"name"},{default:a(()=>[...s[79]||(s[79]=[t("Name",-1)])]),_:1}),i(e,{value:"size"},{default:a(()=>[...s[80]||(s[80]=[t("Size",-1)])]),_:1})]),default:a(()=>[s[81]||(s[81]=t(" Sort by ",-1))]),_:1})])])]),s[123]||(s[123]=n("div",{class:"mbe4"},[n("h2",null,"Additional Gutter"),n("p",{class:"mbe4"},[t(" The "),n("code",null,"additional-gutter"),t(" prop adds extra vertical spacing beyond the trigger button's height when positioning the menu. This is useful when the menu button is within a taller container (like a header) and you need the menu to clear that container. ")])],-1)),n("div",xs,[n("div",null,[s[88]||(s[88]=n("p",{class:"mbe4"},[t("This menu has "),n("code",null,'additional-gutter="20px"')],-1)),i(r,{"menu-variant":"chevron","additional-gutter":"20px","menu-aria-label":"Menu with additional gutter"},{menu:a(()=>[i(e,{value:"option1"},{default:a(()=>[...s[84]||(s[84]=[t("Option 1",-1)])]),_:1}),i(e,{value:"option2"},{default:a(()=>[...s[85]||(s[85]=[t("Option 2",-1)])]),_:1}),i(e,{value:"option3"},{default:a(()=>[...s[86]||(s[86]=[t("Option 3",-1)])]),_:1})]),default:a(()=>[s[87]||(s[87]=t(" Menu with Extra Gutter ",-1))]),_:1})])]),s[124]||(s[124]=n("div",{class:"mbe4"},[n("h2",null,"Responsive Hidden Items (checkHiddenItems)"),n("p",{class:"mbe4"},[t(" The "),n("code",null,"check-hidden-items"),t(" prop enables the menu to skip items that are hidden via CSS (like responsive media queries). This is useful when you wrap menu items in responsive containers but want keyboard navigation to work correctly. ")]),n("p",{class:"mbe4"},[n("strong",null,"Performance Note:"),t(" Enabling this feature checks computed styles on every keyboard navigation, which has a performance cost. Only enable it if you're using CSS-based hiding. For better performance, prefer conditional rendering (v-if) instead. ")])],-1)),n("div",Vs,[n("div",{innerHTML:h.responsiveStyles},null,8,Ss),n("div",null,[s[95]||(s[95]=n("p",{class:"mbe4"},[n("strong",null,"Try resizing your browser:"),t(" Desktop items are hidden on mobile (<768px), mobile items are hidden on desktop. Keyboard navigation skips hidden items. ")],-1)),i(r,{"check-hidden-items":"","menu-aria-label":"Responsive menu"},{menu:a(()=>[n("div",Rs,[i(e,{value:"desktop1"},{default:a(()=>[i(m,{size:16,class:"mie2"}),s[89]||(s[89]=t("Desktop Item 1 ",-1))]),_:1}),i(e,{value:"desktop2"},{default:a(()=>[i(m,{size:16,class:"mie2"}),s[90]||(s[90]=t("Desktop Item 2 ",-1))]),_:1})]),n("div",Ls,[i(e,{value:"mobile1"},{default:a(()=>[i(D,{size:16,class:"mie2"}),s[91]||(s[91]=t("Mobile Item 1 ",-1))]),_:1}),i(e,{value:"mobile2"},{default:a(()=>[i(D,{size:16,class:"mie2"}),s[92]||(s[92]=t("Mobile Item 2 ",-1))]),_:1})]),i(F),i(e,{value:"always"},{default:a(()=>[...s[93]||(s[93]=[t("Always Visible",-1)])]),_:1})]),default:a(()=>[s[94]||(s[94]=t(" Responsive Menu ",-1))]),_:1})])]),s[125]||(s[125]=n("div",{class:"mbe4"},[n("h2",null,"Recommended: Conditional Rendering (Better Performance)"),n("p",{class:"mbe4"},[t(" Instead of using "),n("code",null,"check-hidden-items"),t(", you can achieve the same result with better performance by using Vue's conditional rendering (v-if). This removes hidden items from the DOM entirely. ")])],-1)),n("div",Os,[n("div",null,[n("p",_s,[s[96]||(s[96]=n("strong",null,"Current viewport:",-1)),t(" "+P(h.isMobile?"Mobile":"Desktop"),1)]),i(r,{"menu-aria-label":"Conditional menu"},{menu:a(()=>[h.isMobile?M("",!0):(C(),w(e,{key:0,value:"desktop1"},{default:a(()=>[i(m,{size:16,class:"mie2"}),s[97]||(s[97]=t("Desktop Item 1 ",-1))]),_:1})),h.isMobile?M("",!0):(C(),w(e,{key:1,value:"desktop2"},{default:a(()=>[i(m,{size:16,class:"mie2"}),s[98]||(s[98]=t("Desktop Item 2 ",-1))]),_:1})),h.isMobile?(C(),w(e,{key:2,value:"mobile1"},{default:a(()=>[i(D,{size:16,class:"mie2"}),s[99]||(s[99]=t("Mobile Item 1 ",-1))]),_:1})):M("",!0),h.isMobile?(C(),w(e,{key:3,value:"mobile2"},{default:a(()=>[i(D,{size:16,class:"mie2"}),s[100]||(s[100]=t("Mobile Item 2 ",-1))]),_:1})):M("",!0),i(F),i(e,{value:"always"},{default:a(()=>[...s[101]||(s[101]=[t("Always Visible",-1)])]),_:1})]),default:a(()=>[s[102]||(s[102]=t(" Conditional Menu ",-1))]),_:1})])]),s[126]||(s[126]=n("div",{class:"mbe4"},[n("h2",null,"Dynamic Icon Switching"),n("p",{class:"mbe4"},[t(" The menu button exposes a "),n("code",null,"data-menu-open"),t(" attribute that changes based on the menu state. You can use this with CSS to dynamically switch icons when the menu opens/closes. ")])],-1)),n("div",Ps,[n("div",{innerHTML:h.dynamicIconStyles},null,8,Ts),n("div",zs,[i(r,{"menu-variant":"icon",ghost:"",size:"sm",class:"dynamic-icon-menu","aria-label":"Toggle menu","menu-aria-label":"Navigation menu"},{menu:a(()=>[i(e,{value:"home"},{default:a(()=>[...s[103]||(s[103]=[t("Home",-1)])]),_:1}),i(e,{value:"about"},{default:a(()=>[...s[104]||(s[104]=[t("About",-1)])]),_:1}),i(e,{value:"contact"},{default:a(()=>[...s[105]||(s[105]=[t("Contact",-1)])]),_:1}),i(F),i(e,{value:"logout"},{default:a(()=>[...s[106]||(s[106]=[t("Logout",-1)])]),_:1})]),default:a(()=>[i(y,{size:14,class:"menu-icon"}),i(g,{size:14,class:"close-icon"})]),_:1}),s[107]||(s[107]=n("p",null," Click the icon to see it change from ☰ to ✕ ",-1))])]),s[127]||(s[127]=n("div",{class:"mbe4"},[n("h2",null,"CSS Shadow Parts Customization")],-1)),n("div",Ns,[n("div",{innerHTML:h.customMenuStyles},null,8,Us),i(r,{"menu-aria-label":"Custom menu",class:"custom-menu-button"},{menu:a(()=>[i(e,{value:"one"},{default:a(()=>[...s[108]||(s[108]=[t("Option 1",-1)])]),_:1}),i(e,{value:"two"},{default:a(()=>[...s[109]||(s[109]=[t("Option 2",-1)])]),_:1}),i(F),i(e,{value:"three"},{default:a(()=>[...s[110]||(s[110]=[t("Option 3",-1)])]),_:1})]),default:a(()=>[s[111]||(s[111]=t(" Custom Menu ",-1))]),_:1})])])}const $s=W(ks,[["render",Hs]]),li=JSON.parse('{"title":"Menu","description":"","frontmatter":{},"headers":[],"relativePath":"components/menu.md","filePath":"components/menu.md"}'),Ks={name:"components/menu.md"},hi=Object.assign(Ks,{setup(p){return(s,l)=>(C(),q("div",null,[l[0]||(l[0]=n("h1",{id:"menu",tabindex:"-1"},[t("Menu "),n("a",{class:"header-anchor",href:"#menu","aria-label":'Permalink to "Menu"'},"​")],-1)),i($),l[1]||(l[1]=n("p",null,"A menu (dropdown menu or context menu) is a popover component that displays a list of actions or options when triggered. Menus provide a compact way to present choices without cluttering the interface.",-1)),l[2]||(l[2]=n("h2",{id:"examples",tabindex:"-1"},[t("Examples "),n("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),i($s),l[3]||(l[3]=J("",101))]))}});export{li as __pageData,hi as default};
