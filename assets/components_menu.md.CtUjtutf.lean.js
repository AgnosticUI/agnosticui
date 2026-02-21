import{A as W}from"./chunks/AlphaWarning.yC7ZufpQ.js";import{i as V,z as u,a as x,x as y,E as K}from"./chunks/Button.CFkPNK98.js";import{n as L}from"./chunks/state-CovhUvdr.DWhhlYib.js";import{f as G}from"./chunks/query-BykXNUlT.Pm7lu9c1.js";import{d as O,p as f,c as D,o as b,r as S,j as t,K as N,v as T,_ as j,C as E,G as e,w as i,a as n,e as I,t as z,b as q,x as Y,ae as X,k as R}from"./chunks/framework.NAAYCHZu.js";import{c as P}from"./chunks/createLucideIcon.B61Wqv9x.js";import{M as J}from"./chunks/menu.SiK0ns-Z.js";import{U as Q}from"./chunks/user.CKdyRrBx.js";import{F as Z}from"./chunks/FrameworkExample.Cm-JbUj-.js";import"./chunks/sdk.m.DhOmSlC9.js";import"./chunks/Icon.DjToxxjJ.js";/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ss=P("monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const es=P("smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const is=P("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);var ns=Object.defineProperty,o=(p,s,l,h)=>{for(var d=void 0,m=p.length-1,a;m>=0;m--)(a=p[m])&&(d=a(s,l,d)||d);return d&&ns(s,l,d),d};const _=class extends x{constructor(){super(),this.size="md",this.shape="rounded",this.bordered=!1,this.ghost=!1,this.link=!1,this.grouped=!1,this.disabled=!1,this.loading=!1,this.ariaLabel="",this.menuVariant="chevron",this.buttonVariant="",this.unicode="",this._menuOpen=!1,this.menuAlign="left",this.additionalGutter="",this._clickOutsideHandler=this._handleClickOutside.bind(this)}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._clickOutsideHandler)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._clickOutsideHandler)}firstUpdated(){this._updateMenuReference()}updated(s){super.updated(s),s.has("_menuOpen")&&this._updateMenuReference()}_updateMenuReference(){this._menu=this.querySelector("ag-menu")}_handleClickOutside(s){!this._menuOpen||s.composedPath().includes(this)||this._closeMenu()}_handleClick(s){if(this.disabled)return;this.onClick&&this.onClick(s);const l=new MouseEvent("click",{bubbles:!0,composed:!0,cancelable:s.cancelable});this.dispatchEvent(l),this._menuOpen?this._closeMenu():this._openMenu()}_handleFocus(s){this.onFocus&&this.onFocus(s);const l=new FocusEvent("focus",{bubbles:!0,composed:!0});this.dispatchEvent(l)}_handleBlur(s){this.onBlur&&this.onBlur(s);const l=new FocusEvent("blur",{bubbles:!0,composed:!0});this.dispatchEvent(l)}_handleKeydown(s){switch(s.key){case"Enter":case" ":s.preventDefault(),this._openMenu();break;case"ArrowDown":s.preventDefault(),this._openMenu(!0);break;case"ArrowUp":s.preventDefault(),this._openMenu(!1);break}}_updateMenuPosition(){var h;if(!this._menu||!this._trigger)return;const s=(h=this._trigger.shadowRoot)==null?void 0:h.querySelector("button");if(!s)return;const l=s.offsetHeight;this.additionalGutter?this._menu.style.top=`calc(${l}px + ${this.additionalGutter})`:this._menu.style.top=`${l}px`}_openMenu(s=!0){if(this._menuOpen)return;this._menuOpen=!0,this._updateMenuReference(),this._menu&&(this._menu.open=!0,this._updateMenuPosition(),this._menu._updateMenuItems(),requestAnimationFrame(()=>{var h,d;s?(h=this._menu)==null||h._focusFirstItem():(d=this._menu)==null||d._focusLastItem()}));const l=new CustomEvent("menu-open",{detail:{open:!0},bubbles:!0,composed:!0});this.dispatchEvent(l),this.onMenuOpen&&this.onMenuOpen(l)}_closeMenu(){var l;if(!this._menuOpen)return;this._menuOpen=!1,this._menu&&(this._menu.open=!1),(l=this._trigger)==null||l.focus();const s=new CustomEvent("menu-close",{detail:{open:!1},bubbles:!0,composed:!0});this.dispatchEvent(s),this.onMenuClose&&this.onMenuClose(s)}_renderChevronIcon(){return y`
      <svg class="chevron-icon" part="ag-menu-chevron-icon" viewBox="0 0 20 20" fill="currentColor">
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    `}render(){this.setAttribute("data-menu-open",this._menuOpen?"true":"false");const s=this.unicode?y`<span class="unicode-icon" part="ag-menu-unicode-icon">${this.unicode}</span>`:y`<slot></slot>`,l=this.menuVariant==="icon";return y`
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
        ${this.menuVariant==="chevron"?y`<span class="label" part="ag-menu-label">${s}</span> ${this._renderChevronIcon()}`:s}
      </ag-button>
      <slot name="menu"></slot>
    `}};_.styles=V`
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
  `;let F=_;o([G("ag-button")],F.prototype,"_trigger");o([u({type:String,reflect:!0})],F.prototype,"size");o([u({type:String,reflect:!0})],F.prototype,"shape");o([u({type:Boolean,reflect:!0})],F.prototype,"bordered");o([u({type:Boolean,reflect:!0})],F.prototype,"ghost");o([u({type:Boolean,reflect:!0})],F.prototype,"link");o([u({type:Boolean,reflect:!0})],F.prototype,"grouped");o([u({type:Boolean})],F.prototype,"disabled");o([u({type:Boolean})],F.prototype,"loading");o([u({type:String,reflect:!0,attribute:"aria-label"})],F.prototype,"ariaLabel");o([u({type:String,reflect:!0,attribute:"menu-variant"})],F.prototype,"menuVariant");o([u({type:String,reflect:!0,attribute:"button-variant"})],F.prototype,"buttonVariant");o([u({type:String})],F.prototype,"unicode");o([u({type:String,reflect:!0,attribute:"menu-align"})],F.prototype,"menuAlign");o([u({type:String,reflect:!0,attribute:"additional-gutter"})],F.prototype,"additionalGutter");o([u({attribute:!1})],F.prototype,"onMenuOpen");o([u({attribute:!1})],F.prototype,"onMenuClose");o([u({attribute:!1})],F.prototype,"onClick");o([u({attribute:!1})],F.prototype,"onFocus");o([u({attribute:!1})],F.prototype,"onBlur");o([L()],F.prototype,"_menuOpen");const $=class extends x{constructor(){super(),this.open=!1,this.placement="bottom-start",this.ariaLabel="",this.type="default",this.checkHiddenItems=!1,this._focusedIndex=0,this._menuItems=[]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu"),this.setAttribute("aria-orientation","vertical"),this.addEventListener("keydown",this._handleKeydown),this.addEventListener("menu-select",this._handleMenuSelect)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._handleKeydown),this.removeEventListener("menu-select",this._handleMenuSelect)}firstUpdated(){this.open||this.setAttribute("hidden","")}updated(s){s.has("open")&&(this.open?this.removeAttribute("hidden"):(this.setAttribute("hidden",""),this.type==="default"&&(this.selectedValue=void 0,this._updateSelection()))),s.has("selectedValue")&&this._updateSelection()}_handleMenuSelect(s){const l=s.target;this.type==="single-select"&&(this.selectedValue=l.value)}_updateSelection(){this._menuItems.forEach(s=>{s.checked=this.selectedValue!==void 0&&s.value===this.selectedValue})}_isElementNavigable(s){if(s.disabled||s.getAttribute("aria-hidden")==="true")return!1;if(!this.checkHiddenItems)return!0;const l=window.getComputedStyle(s);if(l.display==="none"||l.visibility==="hidden")return!1;let h=s.parentElement;for(;h&&h!==this;){const d=window.getComputedStyle(h);if(d.display==="none"||d.visibility==="hidden")return!1;h=h.parentElement}return!0}_getNavigableItems(){return this.checkHiddenItems?this._menuItems.filter(s=>this._isElementNavigable(s)):this._menuItems.filter(s=>!s.disabled&&s.getAttribute("aria-hidden")!=="true")}_updateMenuItems(){this._menuItems=Array.from(this.querySelectorAll("ag-menu-item")),this._updateTabIndex(),this._updateSelection()}_updateTabIndex(){this._menuItems.forEach((s,l)=>{s.setAttribute("tabindex",l===this._focusedIndex?"0":"-1")})}_focusFirstItem(){const s=this._getNavigableItems();if(s.length===0)return;const l=s[0];this._focusedIndex=this._menuItems.indexOf(l),this._updateTabIndex(),l==null||l.focus()}_focusLastItem(){const s=this._getNavigableItems();if(s.length===0)return;const l=s[s.length-1];this._focusedIndex=this._menuItems.indexOf(l),this._updateTabIndex(),l==null||l.focus()}_focusNextItem(){const s=this._getNavigableItems();if(s.length===0)return;const l=this._menuItems[this._focusedIndex],h=s.indexOf(l),d=h>=0?h:-1;for(let m=1;m<=s.length;m++){const a=(d+m)%s.length,k=s[a];this._focusedIndex=this._menuItems.indexOf(k),this._updateTabIndex(),k==null||k.focus();return}}_focusPreviousItem(){const s=this._getNavigableItems();if(s.length===0)return;const l=this._menuItems[this._focusedIndex],h=s.indexOf(l),d=h>=0?h:s.length;for(let m=1;m<=s.length;m++){const a=(d-m+s.length)%s.length,k=s[a];this._focusedIndex=this._menuItems.indexOf(k),this._updateTabIndex(),k==null||k.focus();return}}_handleKeydown(s){switch(this.onKeyDown&&this.onKeyDown(s),s.key){case"ArrowDown":s.preventDefault(),this._focusNextItem();break;case"ArrowUp":s.preventDefault(),this._focusPreviousItem();break;case"Home":s.preventDefault(),this._focusFirstItem();break;case"End":s.preventDefault(),this._focusLastItem();break;case"Enter":{s.preventDefault();const l=this._getNavigableItems(),h=this._menuItems[this._focusedIndex];l.includes(h)&&(h==null||h.click());break}case"Escape":case"Tab":s.preventDefault(),this._closeMenu();break}}_closeMenu(){const s=this.closest("ag-menu-button");s&&s._closeMenu()}render(){return y`<div class="menu" part="ag-menu"><slot></slot></div>`}};$.styles=V`
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
  `;let M=$;o([u({type:Boolean})],M.prototype,"open");o([u()],M.prototype,"placement");o([u({reflect:!0,attribute:"aria-label"})],M.prototype,"ariaLabel");o([u({attribute:"selected-value"})],M.prototype,"selectedValue");o([u({type:String})],M.prototype,"type");o([u({type:Boolean,attribute:"check-hidden-items"})],M.prototype,"checkHiddenItems");o([u({attribute:!1})],M.prototype,"onKeyDown");o([L()],M.prototype,"_focusedIndex");o([L()],M.prototype,"_menuItems");const U=class extends x{constructor(){super(),this._menu=null,this.value="",this.disabled=!1,this.href="",this.target="",this.checked=!1,this.variant="default"}connectedCallback(){var l;super.connectedCallback(),this._menu=this.closest("ag-menu");const s=((l=this._menu)==null?void 0:l.type)==="single-select"?"menuitemradio":"menuitem";this.setAttribute("role",s),this.setAttribute("tabindex","-1"),this.addEventListener("click",this._handleClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this._handleClick)}updated(s){s.has("checked")&&this.setAttribute("aria-checked",this.checked?"true":"false")}_handleClick(s){if(this.disabled){s.preventDefault(),s.stopPropagation();return}this.onClick&&s instanceof MouseEvent&&this.onClick(s);const l=this.closest("ag-menu-button"),h=new CustomEvent("menu-select",{detail:{value:this.value},bubbles:!0,composed:!0});this.dispatchEvent(h),this.onMenuSelect&&this.onMenuSelect(h),l&&!this.href&&l._closeMenu()}focus(){var l;const s=(l=this.shadowRoot)==null?void 0:l.querySelector("button, a");s&&s.focus()}render(){return this.href?y`
        <a
          href="${this.href}"
          target="${this.target||K}"
          part="ag-menu-item-link ag-menu-item"
          ?disabled="${this.disabled}"
        >
          <slot></slot>
        </a>
      `:y`
      <button ?disabled="${this.disabled}" part="ag-menu-item-button ag-menu-item">
        <slot></slot>
      </button>
    `}};U.styles=V`
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
  `;let C=U;o([u()],C.prototype,"value");o([u({type:Boolean})],C.prototype,"disabled");o([u()],C.prototype,"href");o([u()],C.prototype,"target");o([u({type:Boolean})],C.prototype,"checked");o([u({type:String,reflect:!0})],C.prototype,"variant");o([u({attribute:!1})],C.prototype,"onClick");o([u({attribute:!1})],C.prototype,"onMenuSelect");const H=class extends x{connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}render(){return y`<div class="separator" part="ag-menu-separator"></div>`}};H.styles=V`
    :host {
      display: block;
    }
    .separator {
      border-top: 1px solid var(--ag-border);
      margin: var(--ag-space-2) 0;
    }
  `;let ts=H;customElements.get("ag-menu-button")||customElements.define("ag-menu-button",F);customElements.get("ag-menu")||customElements.define("ag-menu",M);customElements.get("ag-menu-item")||customElements.define("ag-menu-item",C);customElements.get("ag-menu-separator")||customElements.define("ag-menu-separator",ts);const as=[".disabled",".loading",".bordered",".ghost",".link",".grouped","menu-variant","menu-align","button-variant","size","shape","ariaLabel","unicode","additional-gutter"],ls=[".open",".checkHiddenItems","placement","type","selected-value","ariaLabel"],hs=O({__name:"VueMenu",props:{open:{type:Boolean,default:!1},placement:{default:"bottom-start"},menuAriaLabel:{},menuAlign:{default:"left"},menuType:{default:"default"},selectedValue:{},checkHiddenItems:{type:Boolean,default:!1},menuVariant:{},buttonVariant:{},unicode:{},additionalGutter:{},size:{},shape:{},bordered:{type:Boolean},ghost:{type:Boolean},link:{type:Boolean},grouped:{type:Boolean},fullWidth:{type:Boolean},type:{},disabled:{type:Boolean,default:!1},loading:{type:Boolean},toggle:{type:Boolean},pressed:{type:Boolean},ariaLabel:{},onToggle:{}},emits:["click","focus","blur","keydown","menu-keydown","menu-open","menu-close","menu-select","update:open"],setup(p,{emit:s}){const l=s,h=f(),d=f(),m=g=>{l("click",g)},a=g=>{l("focus",g)},k=g=>{l("blur",g)},r=g=>{l("keydown",g)},w=g=>{l("menu-keydown",g)},c=g=>{const A=g;l("menu-open",A.detail),l("update:open",A.detail.open)},v=g=>{const A=g;l("menu-close",A.detail),l("update:open",A.detail.open)},B=g=>{l("menu-select",g.detail)};return(g,A)=>(b(),D("ag-menu-button",N({ref_key:"menuButtonRef",ref:h,".disabled":p.disabled,".loading":p.loading,".bordered":p.bordered,".ghost":p.ghost,".link":p.link,".grouped":p.grouped,"menu-variant":p.menuVariant,"menu-align":p.menuAlign,"button-variant":p.buttonVariant,size:p.size,shape:p.shape,ariaLabel:p.ariaLabel,unicode:p.unicode,"additional-gutter":p.additionalGutter,onClick:m,onFocus:a,onBlur:k,onKeydown:r,onMenuOpen:c,onMenuClose:v,onMenuSelect:B},g.$attrs),[S(g.$slots,"default"),t("ag-menu",{ref_key:"menuRef",ref:d,slot:"menu",".open":p.open,".checkHiddenItems":p.checkHiddenItems,placement:p.placement,type:p.menuType,"selected-value":p.selectedValue,ariaLabel:p.menuAriaLabel,onKeydown:w},[S(g.$slots,"menu")],40,ls)],48,as))}}),ps=["value","disabled","href","target","variant","checked"],os=O({__name:"VueMenuItem",props:{selected:{type:Boolean,default:!1},value:{default:""},disabled:{type:Boolean,default:!1},href:{},target:{},checked:{type:Boolean,default:!1},variant:{default:"default"}},emits:["click","menu-select"],setup(p,{emit:s}){const l=s,h=f(),d=a=>{l("click",a)},m=a=>{l("menu-select",a.detail)};return(a,k)=>(b(),D("ag-menu-item",N({ref_key:"menuItemRef",ref:h,value:p.value,disabled:p.disabled||void 0,href:p.href,target:p.target,variant:p.variant,checked:p.checked||p.selected,onClick:d,onMenuSelect:m},a.$attrs),[S(a.$slots,"default")],16,ps))}}),ks=O({__name:"VueMenuSeparator",setup(p){const s=f();return T(async()=>{await customElements.whenDefined("ag-menu-separator")}),(l,h)=>(b(),D("ag-menu-separator",N({ref_key:"menuSeparatorRef",ref:s},l.$attrs),null,16))}}),us={name:"MenuExamples",components:{VueMenu:hs,VueMenuItem:os,VueMenuSeparator:ks,User:Q,Menu:J,X:is,Monitor:ss,Smartphone:es},setup(){const p=f(null),s=f(null),l=f(!1),h=()=>{l.value=window.innerWidth<768};return T(()=>{h(),window.addEventListener("resize",h)}),Y(()=>{window.removeEventListener("resize",h)}),{lastEvent:p,lastSelectedValue:s,isMobile:l,handleMenuOpen:c=>{const v=s.value?`, selected: ${s.value}`:"";p.value=`menu-open (open: ${c.open}${v})`},handleMenuClose:c=>{const v=s.value?`, selected: ${s.value}`:"";p.value=`menu-close (open: ${c.open}${v})`},handleMenuSelect:c=>{s.value=c.value,p.value=`menu-select (value: ${c.value})`},responsiveStyles:`
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
    `}}},rs={class:"stacked mbe4"},ds={class:"stacked mbe4"},Fs={class:"flex items-center",style:{gap:"1rem","justify-content":"space-between"}},gs={class:"stacked mbe4"},ms={class:"stacked mbe4"},cs={class:"stacked mbe4"},ys={class:"stacked mbe4"},vs={class:"stacked mbe4"},bs={class:"flex-inline items-center"},Ms={class:"mbe4"},Cs={class:"flex-inline items-center",style:{gap:"1rem"}},Es={class:"mbe4"},fs={class:"flex-inline items-center",style:{gap:"1rem"}},Bs={class:"mbe4"},As={class:"flex-inline items-center",style:{gap:"1rem"}},Ds={class:"stacked mbe4"},Is={class:"stacked mbe4"},xs={class:"flex-inline items-center",style:{gap:"10px"}},ws={key:0},qs={class:"stacked mbe4"},Vs={class:"flex items-start",style:{gap:"2rem","flex-wrap":"wrap"}},Rs={class:"stacked mbe4"},Ss={class:"stacked mbe4"},Ls=["innerHTML"],Os={class:"desktop-only-items"},Ns={class:"mobile-only-items"},Ps={class:"stacked mbe4"},zs={class:"mbe4"},Ts={class:"stacked mbe4"},_s=["innerHTML"],$s={class:"flex-inline items-center",style:{gap:"1rem"}},Us={class:"stacked mbe4"},Hs=["innerHTML"];function Ws(p,s,l,h,d,m){const a=E("VueMenuItem"),k=E("VueMenuSeparator"),r=E("VueMenu"),w=E("User"),c=E("Menu"),v=E("Monitor"),B=E("Smartphone"),g=E("X");return b(),D("section",null,[s[112]||(s[112]=t("div",{class:"mbe4"},[t("h2",null,"Basic Menu")],-1)),t("div",rs,[e(r,{"menu-aria-label":"Menu options"},{menu:i(()=>[e(a,{value:"edit"},{default:i(()=>[...s[0]||(s[0]=[n("Edit",-1)])]),_:1}),e(a,{value:"copy"},{default:i(()=>[...s[1]||(s[1]=[n("Copy",-1)])]),_:1}),e(a,{value:"paste"},{default:i(()=>[...s[2]||(s[2]=[n("Paste",-1)])]),_:1}),e(k),e(a,{value:"delete"},{default:i(()=>[...s[3]||(s[3]=[n("Delete",-1)])]),_:1})]),default:i(()=>[s[4]||(s[4]=n(" Menu ",-1))]),_:1})]),s[113]||(s[113]=t("div",{class:"mbe4"},[t("h2",null,"Menu Alignment"),t("p",{class:"mbe4"},[n(" The "),t("code",null,"menu-align"),n(" prop controls horizontal alignment. Use "),t("code",null,'menu-align="right"'),n(" when the menu button is near the right edge of the viewport. ")])],-1)),t("div",ds,[t("div",Fs,[e(r,{"menu-align":"left","menu-aria-label":"Left-aligned menu"},{menu:i(()=>[e(a,{value:"option1"},{default:i(()=>[...s[5]||(s[5]=[n("Option 1",-1)])]),_:1}),e(a,{value:"option2"},{default:i(()=>[...s[6]||(s[6]=[n("Option 2",-1)])]),_:1}),e(a,{value:"option3"},{default:i(()=>[...s[7]||(s[7]=[n("Option 3",-1)])]),_:1})]),default:i(()=>[s[8]||(s[8]=n(" Left Aligned ",-1))]),_:1}),e(r,{"menu-align":"right","menu-aria-label":"Right-aligned menu"},{menu:i(()=>[e(a,{value:"option1"},{default:i(()=>[...s[9]||(s[9]=[n("Option 1",-1)])]),_:1}),e(a,{value:"option2"},{default:i(()=>[...s[10]||(s[10]=[n("Option 2",-1)])]),_:1}),e(a,{value:"option3"},{default:i(()=>[...s[11]||(s[11]=[n("Option 3",-1)])]),_:1})]),default:i(()=>[s[12]||(s[12]=n(" Right Aligned ",-1))]),_:1})])]),s[114]||(s[114]=t("div",{class:"mbe4"},[t("h2",null,"Menu with Links")],-1)),t("div",gs,[e(r,{"menu-aria-label":"Navigation menu"},{menu:i(()=>[e(a,{value:"home",href:"#home"},{default:i(()=>[...s[13]||(s[13]=[n("Home",-1)])]),_:1}),e(a,{value:"about",href:"#about"},{default:i(()=>[...s[14]||(s[14]=[n("About",-1)])]),_:1}),e(a,{value:"contact",href:"#contact"},{default:i(()=>[...s[15]||(s[15]=[n("Contact",-1)])]),_:1}),e(k),e(a,{value:"external",href:"https://example.com",target:"_blank"},{default:i(()=>[...s[16]||(s[16]=[n(" External Link ",-1)])]),_:1})]),default:i(()=>[s[17]||(s[17]=n(" Navigation ",-1))]),_:1})]),s[115]||(s[115]=t("div",{class:"mbe4"},[t("h2",null,"Disabled Button")],-1)),t("div",ms,[e(r,{disabled:"","menu-aria-label":"Disabled menu"},{menu:i(()=>[e(a,{value:"item1"},{default:i(()=>[...s[18]||(s[18]=[n("Item 1",-1)])]),_:1}),e(a,{value:"item2"},{default:i(()=>[...s[19]||(s[19]=[n("Item 2",-1)])]),_:1})]),default:i(()=>[s[20]||(s[20]=n(" Disabled Menu ",-1))]),_:1})]),s[116]||(s[116]=t("div",{class:"mbe4"},[t("h2",null,"Menu with Disabled Items")],-1)),t("div",cs,[e(r,{"menu-aria-label":"Menu with disabled items"},{menu:i(()=>[e(a,{value:"enabled1"},{default:i(()=>[...s[21]||(s[21]=[n("Enabled Item",-1)])]),_:1}),e(a,{value:"disabled1",disabled:!0},{default:i(()=>[...s[22]||(s[22]=[n("Disabled Item",-1)])]),_:1}),e(a,{value:"enabled2"},{default:i(()=>[...s[23]||(s[23]=[n("Another Enabled",-1)])]),_:1}),e(k),e(a,{value:"disabled2",disabled:!0},{default:i(()=>[...s[24]||(s[24]=[n("Another Disabled",-1)])]),_:1})]),default:i(()=>[s[25]||(s[25]=n(" Mixed States ",-1))]),_:1})]),s[117]||(s[117]=t("div",{class:"mbe4"},[t("h2",null,"Complex Menu (File Menu)")],-1)),t("div",ys,[e(r,{"menu-aria-label":"File menu"},{menu:i(()=>[e(a,{value:"new"},{default:i(()=>[...s[26]||(s[26]=[n("New",-1)])]),_:1}),e(a,{value:"open"},{default:i(()=>[...s[27]||(s[27]=[n("Open...",-1)])]),_:1}),e(a,{value:"recent"},{default:i(()=>[...s[28]||(s[28]=[n("Open Recent",-1)])]),_:1}),e(k),e(a,{value:"save"},{default:i(()=>[...s[29]||(s[29]=[n("Save",-1)])]),_:1}),e(a,{value:"save-as"},{default:i(()=>[...s[30]||(s[30]=[n("Save As...",-1)])]),_:1}),e(k),e(a,{value:"export"},{default:i(()=>[...s[31]||(s[31]=[n("Export",-1)])]),_:1}),e(a,{value:"import"},{default:i(()=>[...s[32]||(s[32]=[n("Import",-1)])]),_:1}),e(k),e(a,{value:"print"},{default:i(()=>[...s[33]||(s[33]=[n("Print",-1)])]),_:1}),e(k),e(a,{value:"close"},{default:i(()=>[...s[34]||(s[34]=[n("Close",-1)])]),_:1})]),default:i(()=>[s[35]||(s[35]=n(" File ",-1))]),_:1})]),s[118]||(s[118]=t("div",{class:"mbe4"},[t("h2",null,"Menu with Sections")],-1)),t("div",vs,[e(r,{"menu-aria-label":"User menu"},{menu:i(()=>[e(a,{value:"profile"},{default:i(()=>[...s[37]||(s[37]=[n("Profile",-1)])]),_:1}),e(a,{value:"settings"},{default:i(()=>[...s[38]||(s[38]=[n("Settings",-1)])]),_:1}),e(k),e(a,{value:"help"},{default:i(()=>[...s[39]||(s[39]=[n("Help",-1)])]),_:1}),e(a,{value:"feedback"},{default:i(()=>[...s[40]||(s[40]=[n("Send Feedback",-1)])]),_:1}),e(k),e(a,{value:"logout"},{default:i(()=>[...s[41]||(s[41]=[n("Logout",-1)])]),_:1})]),default:i(()=>[t("div",bs,[e(w,{size:16,class:"mie2"}),s[36]||(s[36]=n(" User Menu ",-1))])]),_:1})]),s[119]||(s[119]=t("div",{class:"mbe4"},[t("h2",null,"Menu with Icon Button"),t("p",{class:"mbe4"},[n(" The following examples show using an icon as the trigger. The "),t("code",null,'menu-variant="icon"'),n(" removes the chevron and provides a minimal button container for the icon. You can also use an icon with the default chevron trigger as we see on the right. ")])],-1)),t("div",Ms,[s[48]||(s[48]=t("h3",null,"Large",-1)),t("div",Cs,[e(r,{"menu-variant":"icon",ghost:"","menu-aria-label":"More options menu"},{menu:i(()=>[e(a,{value:"settings"},{default:i(()=>[...s[42]||(s[42]=[n("Settings",-1)])]),_:1}),e(a,{value:"profile"},{default:i(()=>[...s[43]||(s[43]=[n("Profile",-1)])]),_:1}),e(k),e(a,{value:"logout"},{default:i(()=>[...s[44]||(s[44]=[n("Logout",-1)])]),_:1})]),default:i(()=>[e(c,{size:24})]),_:1}),e(r,{"menu-aria-label":"More options menu"},{menu:i(()=>[e(a,{value:"settings"},{default:i(()=>[...s[45]||(s[45]=[n("Settings",-1)])]),_:1}),e(a,{value:"profile"},{default:i(()=>[...s[46]||(s[46]=[n("Profile",-1)])]),_:1}),e(k),e(a,{value:"logout"},{default:i(()=>[...s[47]||(s[47]=[n("Logout",-1)])]),_:1})]),default:i(()=>[e(c,{size:24})]),_:1})])]),t("div",Es,[s[55]||(s[55]=t("h3",null,"Medium",-1)),t("div",fs,[e(r,{"menu-variant":"icon",ghost:"",size:"sm","menu-aria-label":"More options menu"},{menu:i(()=>[e(a,{value:"settings"},{default:i(()=>[...s[49]||(s[49]=[n("Settings",-1)])]),_:1}),e(a,{value:"profile"},{default:i(()=>[...s[50]||(s[50]=[n("Profile",-1)])]),_:1}),e(k),e(a,{value:"logout"},{default:i(()=>[...s[51]||(s[51]=[n("Logout",-1)])]),_:1})]),default:i(()=>[e(c,{size:18})]),_:1}),e(r,{size:"sm","menu-aria-label":"More options menu"},{menu:i(()=>[e(a,{value:"settings"},{default:i(()=>[...s[52]||(s[52]=[n("Settings",-1)])]),_:1}),e(a,{value:"profile"},{default:i(()=>[...s[53]||(s[53]=[n("Profile",-1)])]),_:1}),e(k),e(a,{value:"logout"},{default:i(()=>[...s[54]||(s[54]=[n("Logout",-1)])]),_:1})]),default:i(()=>[e(c,{size:18})]),_:1})])]),t("div",Bs,[s[62]||(s[62]=t("h3",null,"Small",-1)),t("div",As,[e(r,{"menu-variant":"icon",ghost:"",size:"x-sm","menu-aria-label":"More options menu"},{menu:i(()=>[e(a,{value:"settings"},{default:i(()=>[...s[56]||(s[56]=[n("Settings",-1)])]),_:1}),e(a,{value:"profile"},{default:i(()=>[...s[57]||(s[57]=[n("Profile",-1)])]),_:1}),e(k),e(a,{value:"logout"},{default:i(()=>[...s[58]||(s[58]=[n("Logout",-1)])]),_:1})]),default:i(()=>[e(c,{size:14})]),_:1}),e(r,{size:"x-sm","menu-aria-label":"More options menu"},{menu:i(()=>[e(a,{value:"settings"},{default:i(()=>[...s[59]||(s[59]=[n("Settings",-1)])]),_:1}),e(a,{value:"profile"},{default:i(()=>[...s[60]||(s[60]=[n("Profile",-1)])]),_:1}),e(k),e(a,{value:"logout"},{default:i(()=>[...s[61]||(s[61]=[n("Logout",-1)])]),_:1})]),default:i(()=>[e(c,{size:14})]),_:1})])]),s[120]||(s[120]=t("div",{class:"mbe4"},[t("h2",null,"Monochrome Variant")],-1)),t("div",Ds,[e(r,{"menu-aria-label":"Monochrome menu","button-variant":"monochrome"},{menu:i(()=>[e(a,{value:"option1",variant:"monochrome"},{default:i(()=>[...s[63]||(s[63]=[n("Option 1",-1)])]),_:1}),e(a,{value:"option2",variant:"monochrome",selected:!0},{default:i(()=>[...s[64]||(s[64]=[n("Option 2 (Selected)",-1)])]),_:1}),e(a,{value:"option3",variant:"monochrome"},{default:i(()=>[...s[65]||(s[65]=[n("Option 3",-1)])]),_:1})]),default:i(()=>[s[66]||(s[66]=n(" Monochrome Menu ",-1))]),_:1})]),s[121]||(s[121]=t("div",{class:"mbe4"},[t("h2",null,"Event Handling")],-1)),t("div",Is,[t("div",xs,[e(r,{"menu-aria-label":"Event testing menu",onMenuOpen:h.handleMenuOpen,onMenuClose:h.handleMenuClose,onMenuSelect:h.handleMenuSelect},{menu:i(()=>[e(a,{value:"option1"},{default:i(()=>[...s[67]||(s[67]=[n("Option 1",-1)])]),_:1}),e(a,{value:"option2"},{default:i(()=>[...s[68]||(s[68]=[n("Option 2",-1)])]),_:1}),e(k),e(a,{value:"option3"},{default:i(()=>[...s[69]||(s[69]=[n("Option 3",-1)])]),_:1})]),default:i(()=>[s[70]||(s[70]=n(" Event Test ",-1))]),_:1},8,["onMenuOpen","onMenuClose","onMenuSelect"]),h.lastEvent?(b(),D("p",ws,[s[71]||(s[71]=n(" Last event: ",-1)),t("strong",null,z(h.lastEvent),1)])):I("",!0)])]),s[122]||(s[122]=t("div",{class:"mbe4"},[t("h2",null,"Menu Types: Navigation vs Selection"),t("p",{class:"mbe4"},[n(" The "),t("code",null,"type"),n(" prop controls selection behavior. Use "),t("code",null,'type="default"'),n(" (the default) for navigation menus where selection is transient, and "),t("code",null,'type="single-select"'),n(" for menus where selection should persist (like filters or sorting). ")])],-1)),t("div",qs,[t("div",Vs,[t("div",null,[s[76]||(s[76]=t("h3",{class:"mbe4"},'Navigation Menu (type="default")',-1)),s[77]||(s[77]=t("p",{class:"mbe4"}," Selection clears when menu closes. Use for navigation and actions. ",-1)),e(r,{"menu-aria-label":"User navigation"},{menu:i(()=>[e(a,{value:"profile"},{default:i(()=>[...s[72]||(s[72]=[n("Profile",-1)])]),_:1}),e(a,{value:"settings"},{default:i(()=>[...s[73]||(s[73]=[n("Settings",-1)])]),_:1}),e(k),e(a,{value:"logout"},{default:i(()=>[...s[74]||(s[74]=[n("Logout",-1)])]),_:1})]),default:i(()=>[s[75]||(s[75]=n(" User Menu ",-1))]),_:1})]),t("div",null,[s[82]||(s[82]=t("h3",{class:"mbe4"},'Selection Menu (type="single-select")',-1)),s[83]||(s[83]=t("p",{class:"mbe4"}," Selection persists when menu closes. Use for filters, sorting, etc. ",-1)),e(r,{"menu-type":"single-select","selected-value":"date","menu-aria-label":"Sort options"},{menu:i(()=>[e(a,{value:"date"},{default:i(()=>[...s[78]||(s[78]=[n("Date",-1)])]),_:1}),e(a,{value:"name"},{default:i(()=>[...s[79]||(s[79]=[n("Name",-1)])]),_:1}),e(a,{value:"size"},{default:i(()=>[...s[80]||(s[80]=[n("Size",-1)])]),_:1})]),default:i(()=>[s[81]||(s[81]=n(" Sort by ",-1))]),_:1})])])]),s[123]||(s[123]=t("div",{class:"mbe4"},[t("h2",null,"Additional Gutter"),t("p",{class:"mbe4"},[n(" The "),t("code",null,"additional-gutter"),n(" prop adds extra vertical spacing beyond the trigger button's height when positioning the menu. This is useful when the menu button is within a taller container (like a header) and you need the menu to clear that container. ")])],-1)),t("div",Rs,[t("div",null,[s[88]||(s[88]=t("p",{class:"mbe4"},[n("This menu has "),t("code",null,'additional-gutter="20px"')],-1)),e(r,{"menu-variant":"chevron","additional-gutter":"20px","menu-aria-label":"Menu with additional gutter"},{menu:i(()=>[e(a,{value:"option1"},{default:i(()=>[...s[84]||(s[84]=[n("Option 1",-1)])]),_:1}),e(a,{value:"option2"},{default:i(()=>[...s[85]||(s[85]=[n("Option 2",-1)])]),_:1}),e(a,{value:"option3"},{default:i(()=>[...s[86]||(s[86]=[n("Option 3",-1)])]),_:1})]),default:i(()=>[s[87]||(s[87]=n(" Menu with Extra Gutter ",-1))]),_:1})])]),s[124]||(s[124]=t("div",{class:"mbe4"},[t("h2",null,"Responsive Hidden Items (checkHiddenItems)"),t("p",{class:"mbe4"},[n(" The "),t("code",null,"check-hidden-items"),n(" prop enables the menu to skip items that are hidden via CSS (like responsive media queries). This is useful when you wrap menu items in responsive containers but want keyboard navigation to work correctly. ")]),t("p",{class:"mbe4"},[t("strong",null,"Performance Note:"),n(" Enabling this feature checks computed styles on every keyboard navigation, which has a performance cost. Only enable it if you're using CSS-based hiding. For better performance, prefer conditional rendering (v-if) instead. ")])],-1)),t("div",Ss,[t("div",{innerHTML:h.responsiveStyles},null,8,Ls),t("div",null,[s[95]||(s[95]=t("p",{class:"mbe4"},[t("strong",null,"Try resizing your browser:"),n(" Desktop items are hidden on mobile (<768px), mobile items are hidden on desktop. Keyboard navigation skips hidden items. ")],-1)),e(r,{"check-hidden-items":"","menu-aria-label":"Responsive menu"},{menu:i(()=>[t("div",Os,[e(a,{value:"desktop1"},{default:i(()=>[e(v,{size:16,class:"mie2"}),s[89]||(s[89]=n("Desktop Item 1 ",-1))]),_:1}),e(a,{value:"desktop2"},{default:i(()=>[e(v,{size:16,class:"mie2"}),s[90]||(s[90]=n("Desktop Item 2 ",-1))]),_:1})]),t("div",Ns,[e(a,{value:"mobile1"},{default:i(()=>[e(B,{size:16,class:"mie2"}),s[91]||(s[91]=n("Mobile Item 1 ",-1))]),_:1}),e(a,{value:"mobile2"},{default:i(()=>[e(B,{size:16,class:"mie2"}),s[92]||(s[92]=n("Mobile Item 2 ",-1))]),_:1})]),e(k),e(a,{value:"always"},{default:i(()=>[...s[93]||(s[93]=[n("Always Visible",-1)])]),_:1})]),default:i(()=>[s[94]||(s[94]=n(" Responsive Menu ",-1))]),_:1})])]),s[125]||(s[125]=t("div",{class:"mbe4"},[t("h2",null,"Recommended: Conditional Rendering (Better Performance)"),t("p",{class:"mbe4"},[n(" Instead of using "),t("code",null,"check-hidden-items"),n(", you can achieve the same result with better performance by using Vue's conditional rendering (v-if). This removes hidden items from the DOM entirely. ")])],-1)),t("div",Ps,[t("div",null,[t("p",zs,[s[96]||(s[96]=t("strong",null,"Current viewport:",-1)),n(" "+z(h.isMobile?"Mobile":"Desktop"),1)]),e(r,{"menu-aria-label":"Conditional menu"},{menu:i(()=>[h.isMobile?I("",!0):(b(),q(a,{key:0,value:"desktop1"},{default:i(()=>[e(v,{size:16,class:"mie2"}),s[97]||(s[97]=n("Desktop Item 1 ",-1))]),_:1})),h.isMobile?I("",!0):(b(),q(a,{key:1,value:"desktop2"},{default:i(()=>[e(v,{size:16,class:"mie2"}),s[98]||(s[98]=n("Desktop Item 2 ",-1))]),_:1})),h.isMobile?(b(),q(a,{key:2,value:"mobile1"},{default:i(()=>[e(B,{size:16,class:"mie2"}),s[99]||(s[99]=n("Mobile Item 1 ",-1))]),_:1})):I("",!0),h.isMobile?(b(),q(a,{key:3,value:"mobile2"},{default:i(()=>[e(B,{size:16,class:"mie2"}),s[100]||(s[100]=n("Mobile Item 2 ",-1))]),_:1})):I("",!0),e(k),e(a,{value:"always"},{default:i(()=>[...s[101]||(s[101]=[n("Always Visible",-1)])]),_:1})]),default:i(()=>[s[102]||(s[102]=n(" Conditional Menu ",-1))]),_:1})])]),s[126]||(s[126]=t("div",{class:"mbe4"},[t("h2",null,"Dynamic Icon Switching"),t("p",{class:"mbe4"},[n(" The menu button exposes a "),t("code",null,"data-menu-open"),n(" attribute that changes based on the menu state. You can use this with CSS to dynamically switch icons when the menu opens/closes. ")])],-1)),t("div",Ts,[t("div",{innerHTML:h.dynamicIconStyles},null,8,_s),t("div",$s,[e(r,{"menu-variant":"icon",ghost:"",size:"sm",class:"dynamic-icon-menu","aria-label":"Toggle menu","menu-aria-label":"Navigation menu"},{menu:i(()=>[e(a,{value:"home"},{default:i(()=>[...s[103]||(s[103]=[n("Home",-1)])]),_:1}),e(a,{value:"about"},{default:i(()=>[...s[104]||(s[104]=[n("About",-1)])]),_:1}),e(a,{value:"contact"},{default:i(()=>[...s[105]||(s[105]=[n("Contact",-1)])]),_:1}),e(k),e(a,{value:"logout"},{default:i(()=>[...s[106]||(s[106]=[n("Logout",-1)])]),_:1})]),default:i(()=>[e(c,{size:14,class:"menu-icon"}),e(g,{size:14,class:"close-icon"})]),_:1}),s[107]||(s[107]=t("p",null," Click the icon to see it change from ☰ to ✕ ",-1))])]),s[127]||(s[127]=t("div",{class:"mbe4"},[t("h2",null,"CSS Shadow Parts Customization")],-1)),t("div",Us,[t("div",{innerHTML:h.customMenuStyles},null,8,Hs),e(r,{"menu-aria-label":"Custom menu",class:"custom-menu-button"},{menu:i(()=>[e(a,{value:"one"},{default:i(()=>[...s[108]||(s[108]=[n("Option 1",-1)])]),_:1}),e(a,{value:"two"},{default:i(()=>[...s[109]||(s[109]=[n("Option 2",-1)])]),_:1}),e(k),e(a,{value:"three"},{default:i(()=>[...s[110]||(s[110]=[n("Option 3",-1)])]),_:1})]),default:i(()=>[s[111]||(s[111]=n(" Custom Menu ",-1))]),_:1})])])}const Ks=j(us,[["render",Ws]]);class Gs extends x{createRenderRoot(){return this}static get properties(){return{lastEvent:{type:String,state:!0},lastSelectedValue:{type:String,state:!0},isMobile:{type:Boolean,state:!0}}}constructor(){super(),this.lastEvent=null,this.lastSelectedValue=null,this.isMobile=!1}connectedCallback(){super.connectedCallback(),this.checkMobile(),window.addEventListener("resize",this.checkMobile.bind(this))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.checkMobile.bind(this))}checkMobile(){this.isMobile=window.innerWidth<768}handleMenuOpen(s){const l=this.lastSelectedValue?`, selected: ${this.lastSelectedValue}`:"";this.lastEvent=`menu-open (open: ${s.detail.open}${l})`}handleMenuClose(s){const l=this.lastSelectedValue?`, selected: ${this.lastSelectedValue}`:"";this.lastEvent=`menu-close (open: ${s.detail.open}${l})`}handleMenuSelect(s){this.lastSelectedValue=s.detail.value,this.lastEvent=`menu-select (value: ${s.detail.value})`}render(){return y`
      <style>
        /* Responsive styles */
        @media (max-width: 767px) {
          .desktop-only-items {
            display: none;
          }
        }
        @media (min-width: 768px) {
          .mobile-only-items {
            display: none;
          }
        }

        /* Dynamic icon styles */
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

        /* Custom menu styles */
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
        .custom-menu-button ag-menu-item::part(ag-menu-item-button) {
          color: white;
        }
        .custom-menu-button ag-menu-item::part(ag-menu-item-button):focus,
        .custom-menu-button ag-menu-item::part(ag-menu-item-button):hover {
          color: black;
        }
      </style>

      <section>
        <div class="mbe4">
          <h2>Basic Menu</h2>
        </div>
        <div class="stacked mbe4">
          <ag-menu-button menu-aria-label="Menu options">
            Menu
            <ag-menu slot="menu">
              <ag-menu-item value="edit">Edit</ag-menu-item>
              <ag-menu-item value="copy">Copy</ag-menu-item>
              <ag-menu-item value="paste">Paste</ag-menu-item>
              <ag-menu-separator></ag-menu-separator>
              <ag-menu-item value="delete">Delete</ag-menu-item>
            </ag-menu>
          </ag-menu-button>
        </div>

        <div class="mbe4">
          <h2>Menu Alignment</h2>
          <p class="mbe4">
            The <code>menu-align</code> prop controls horizontal alignment. Use <code>menu-align="right"</code> when the menu button is near the right edge of the viewport.
          </p>
        </div>
        <div class="stacked mbe4">
          <div class="flex items-center" style="gap: 1rem; justify-content: space-between;">
            <ag-menu-button menu-align="left" menu-aria-label="Left-aligned menu">
              Left Aligned
              <ag-menu slot="menu">
                <ag-menu-item value="option1">Option 1</ag-menu-item>
                <ag-menu-item value="option2">Option 2</ag-menu-item>
                <ag-menu-item value="option3">Option 3</ag-menu-item>
              </ag-menu>
            </ag-menu-button>
            <ag-menu-button menu-align="right" menu-aria-label="Right-aligned menu">
              Right Aligned
              <ag-menu slot="menu">
                <ag-menu-item value="option1">Option 1</ag-menu-item>
                <ag-menu-item value="option2">Option 2</ag-menu-item>
                <ag-menu-item value="option3">Option 3</ag-menu-item>
              </ag-menu>
            </ag-menu-button>
          </div>
        </div>

        <div class="mbe4">
          <h2>Menu with Links</h2>
        </div>
        <div class="stacked mbe4">
          <ag-menu-button menu-aria-label="Navigation menu">
            Navigation
            <ag-menu slot="menu">
              <ag-menu-item value="home" href="#home">Home</ag-menu-item>
              <ag-menu-item value="about" href="#about">About</ag-menu-item>
              <ag-menu-item value="contact" href="#contact">Contact</ag-menu-item>
              <ag-menu-separator></ag-menu-separator>
              <ag-menu-item value="external" href="https://example.com" target="_blank">
                External Link
              </ag-menu-item>
            </ag-menu>
          </ag-menu-button>
        </div>

        <div class="mbe4">
          <h2>Disabled Button</h2>
        </div>
        <div class="stacked mbe4">
          <ag-menu-button disabled menu-aria-label="Disabled menu">
            Disabled Menu
            <ag-menu slot="menu">
              <ag-menu-item value="item1">Item 1</ag-menu-item>
              <ag-menu-item value="item2">Item 2</ag-menu-item>
            </ag-menu>
          </ag-menu-button>
        </div>

        <div class="mbe4">
          <h2>Menu with Disabled Items</h2>
        </div>
        <div class="stacked mbe4">
          <ag-menu-button menu-aria-label="Menu with disabled items">
            Mixed States
            <ag-menu slot="menu">
              <ag-menu-item value="enabled1">Enabled Item</ag-menu-item>
              <ag-menu-item value="disabled1" disabled>Disabled Item</ag-menu-item>
              <ag-menu-item value="enabled2">Another Enabled</ag-menu-item>
              <ag-menu-separator></ag-menu-separator>
              <ag-menu-item value="disabled2" disabled>Another Disabled</ag-menu-item>
            </ag-menu>
          </ag-menu-button>
        </div>

        <div class="mbe4">
          <h2>Complex Menu (File Menu)</h2>
        </div>
        <div class="stacked mbe4">
          <ag-menu-button menu-aria-label="File menu">
            File
            <ag-menu slot="menu">
              <ag-menu-item value="new">New</ag-menu-item>
              <ag-menu-item value="open">Open...</ag-menu-item>
              <ag-menu-item value="recent">Open Recent</ag-menu-item>
              <ag-menu-separator></ag-menu-separator>
              <ag-menu-item value="save">Save</ag-menu-item>
              <ag-menu-item value="save-as">Save As...</ag-menu-item>
              <ag-menu-separator></ag-menu-separator>
              <ag-menu-item value="export">Export</ag-menu-item>
              <ag-menu-item value="import">Import</ag-menu-item>
              <ag-menu-separator></ag-menu-separator>
              <ag-menu-item value="print">Print</ag-menu-item>
              <ag-menu-separator></ag-menu-separator>
              <ag-menu-item value="close">Close</ag-menu-item>
            </ag-menu>
          </ag-menu-button>
        </div>

        <div class="mbe4">
          <h2>Menu with Sections</h2>
        </div>
        <div class="stacked mbe4">
          <ag-menu-button menu-aria-label="User menu">
            <div class="flex-inline items-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" class="mie2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              User Menu
            </div>
            <ag-menu slot="menu">
              <ag-menu-item value="profile">Profile</ag-menu-item>
              <ag-menu-item value="settings">Settings</ag-menu-item>
              <ag-menu-separator></ag-menu-separator>
              <ag-menu-item value="help">Help</ag-menu-item>
              <ag-menu-item value="feedback">Send Feedback</ag-menu-item>
              <ag-menu-separator></ag-menu-separator>
              <ag-menu-item value="logout">Logout</ag-menu-item>
            </ag-menu>
          </ag-menu-button>
        </div>

        <div class="mbe4">
          <h2>Menu with Icon Button</h2>
          <p class="mbe4">
            The following examples show using an icon as the trigger. The <code>menu-variant="icon"</code> removes the chevron and provides a minimal button container for the icon. You can also use an icon with the default chevron trigger as we see on the right.
          </p>
        </div>
        <div class="mbe4">
          <h3>Large</h3>
          <div class="flex-inline items-center" style="gap: 1rem;">
            <!-- Icon only -->
            <ag-menu-button menu-variant="icon" ghost menu-aria-label="More options menu">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24">
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
              <ag-menu slot="menu">
                <ag-menu-item value="settings">Settings</ag-menu-item>
                <ag-menu-item value="profile">Profile</ag-menu-item>
                <ag-menu-separator></ag-menu-separator>
                <ag-menu-item value="logout">Logout</ag-menu-item>
              </ag-menu>
            </ag-menu-button>
            <!-- Icon with chevron -->
            <ag-menu-button menu-aria-label="More options menu">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24">
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
              <ag-menu slot="menu">
                <ag-menu-item value="settings">Settings</ag-menu-item>
                <ag-menu-item value="profile">Profile</ag-menu-item>
                <ag-menu-separator></ag-menu-separator>
                <ag-menu-item value="logout">Logout</ag-menu-item>
              </ag-menu>
            </ag-menu-button>
          </div>
        </div>
        <div class="mbe4">
          <h3>Medium</h3>
          <div class="flex-inline items-center" style="gap: 1rem;">
            <!-- Icon only -->
            <ag-menu-button menu-variant="icon" ghost size="sm" menu-aria-label="More options menu">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
              <ag-menu slot="menu">
                <ag-menu-item value="settings">Settings</ag-menu-item>
                <ag-menu-item value="profile">Profile</ag-menu-item>
                <ag-menu-separator></ag-menu-separator>
                <ag-menu-item value="logout">Logout</ag-menu-item>
              </ag-menu>
            </ag-menu-button>
            <!-- Icon with chevron -->
            <ag-menu-button size="sm" menu-aria-label="More options menu">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
              <ag-menu slot="menu">
                <ag-menu-item value="settings">Settings</ag-menu-item>
                <ag-menu-item value="profile">Profile</ag-menu-item>
                <ag-menu-separator></ag-menu-separator>
                <ag-menu-item value="logout">Logout</ag-menu-item>
              </ag-menu>
            </ag-menu-button>
          </div>
        </div>
        <div class="mbe4">
          <h3>Small</h3>
          <div class="flex-inline items-center" style="gap: 1rem;">
            <!-- Icon only -->
            <ag-menu-button menu-variant="icon" ghost size="x-sm" menu-aria-label="More options menu">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
              <ag-menu slot="menu">
                <ag-menu-item value="settings">Settings</ag-menu-item>
                <ag-menu-item value="profile">Profile</ag-menu-item>
                <ag-menu-separator></ag-menu-separator>
                <ag-menu-item value="logout">Logout</ag-menu-item>
              </ag-menu>
            </ag-menu-button>
            <!-- Icon with chevron -->
            <ag-menu-button size="x-sm" menu-aria-label="More options menu">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
              <ag-menu slot="menu">
                <ag-menu-item value="settings">Settings</ag-menu-item>
                <ag-menu-item value="profile">Profile</ag-menu-item>
                <ag-menu-separator></ag-menu-separator>
                <ag-menu-item value="logout">Logout</ag-menu-item>
              </ag-menu>
            </ag-menu-button>
          </div>
        </div>

        <div class="mbe4">
          <h2>Monochrome Variant</h2>
        </div>
        <div class="stacked mbe4">
          <ag-menu-button menu-aria-label="Monochrome menu" button-variant="monochrome">
            Monochrome Menu
            <ag-menu slot="menu">
              <ag-menu-item value="option1" variant="monochrome">Option 1</ag-menu-item>
              <ag-menu-item value="option2" variant="monochrome" selected>Option 2 (Selected)</ag-menu-item>
              <ag-menu-item value="option3" variant="monochrome">Option 3</ag-menu-item>
            </ag-menu>
          </ag-menu-button>
        </div>

        <div class="mbe4">
          <h2>Event Handling</h2>
        </div>
        <div class="stacked mbe4">
          <div class="flex-inline items-center" style="gap: 10px;">
            <ag-menu-button
              menu-aria-label="Event testing menu"
              @menu-open=${this.handleMenuOpen}
              @menu-close=${this.handleMenuClose}
              @menu-select=${this.handleMenuSelect}
            >
              Event Test
              <ag-menu slot="menu">
                <ag-menu-item value="option1">Option 1</ag-menu-item>
                <ag-menu-item value="option2">Option 2</ag-menu-item>
                <ag-menu-separator></ag-menu-separator>
                <ag-menu-item value="option3">Option 3</ag-menu-item>
              </ag-menu>
            </ag-menu-button>
            ${this.lastEvent?y`<p>Last event: <strong>${this.lastEvent}</strong></p>`:""}
          </div>
        </div>

        <div class="mbe4">
          <h2>Menu Types: Navigation vs Selection</h2>
          <p class="mbe4">
            The <code>type</code> prop controls selection behavior. Use <code>type="default"</code> (the default) for navigation menus where selection is transient, and <code>type="single-select"</code> for menus where selection should persist (like filters or sorting).
          </p>
        </div>
        <div class="stacked mbe4">
          <div class="flex items-start" style="gap: 2rem; flex-wrap: wrap;">
            <div>
              <h3 class="mbe4">Navigation Menu (type="default")</h3>
              <p class="mbe4">
                Selection clears when menu closes. Use for navigation and actions.
              </p>
              <ag-menu-button menu-aria-label="User navigation">
                User Menu
                <ag-menu slot="menu">
                  <ag-menu-item value="profile">Profile</ag-menu-item>
                  <ag-menu-item value="settings">Settings</ag-menu-item>
                  <ag-menu-separator></ag-menu-separator>
                  <ag-menu-item value="logout">Logout</ag-menu-item>
                </ag-menu>
              </ag-menu-button>
            </div>

            <div>
              <h3 class="mbe4">Selection Menu (type="single-select")</h3>
              <p class="mbe4">
                Selection persists when menu closes. Use for filters, sorting, etc.
              </p>
              <ag-menu-button menu-type="single-select" selected-value="date" menu-aria-label="Sort options">
                Sort by
                <ag-menu slot="menu">
                  <ag-menu-item value="date">Date</ag-menu-item>
                  <ag-menu-item value="name">Name</ag-menu-item>
                  <ag-menu-item value="size">Size</ag-menu-item>
                </ag-menu>
              </ag-menu-button>
            </div>
          </div>
        </div>

        <div class="mbe4">
          <h2>Additional Gutter</h2>
          <p class="mbe4">
            The <code>additional-gutter</code> prop adds extra vertical spacing beyond the trigger button's height when positioning the menu. This is useful when the menu button is within a taller container (like a header) and you need the menu to clear that container.
          </p>
        </div>
        <div class="stacked mbe4">
          <div>
            <p class="mbe4">This menu has <code>additional-gutter="20px"</code></p>
            <ag-menu-button menu-variant="chevron" additional-gutter="20px" menu-aria-label="Menu with additional gutter">
              Menu with Extra Gutter
              <ag-menu slot="menu">
                <ag-menu-item value="option1">Option 1</ag-menu-item>
                <ag-menu-item value="option2">Option 2</ag-menu-item>
                <ag-menu-item value="option3">Option 3</ag-menu-item>
              </ag-menu>
            </ag-menu-button>
          </div>
        </div>

        <div class="mbe4">
          <h2>Responsive Hidden Items (checkHiddenItems)</h2>
          <p class="mbe4">
            The <code>check-hidden-items</code> prop enables the menu to skip items that are hidden via CSS (like responsive media queries). This is useful when you wrap menu items in responsive containers but want keyboard navigation to work correctly.
          </p>
          <p class="mbe4">
            <strong>Performance Note:</strong> Enabling this feature checks computed styles on every keyboard navigation, which has a performance cost. Only enable it if you're using CSS-based hiding. For better performance, prefer conditional rendering instead.
          </p>
        </div>
        <div class="stacked mbe4">
          <div>
            <p class="mbe4">
              <strong>Try resizing your browser:</strong> Desktop items are hidden on mobile (&lt;768px), mobile items are hidden on desktop. Keyboard navigation skips hidden items.
            </p>
            <ag-menu-button check-hidden-items menu-aria-label="Responsive menu">
              Responsive Menu
              <ag-menu slot="menu">
                <div class="desktop-only-items">
                  <ag-menu-item value="desktop1">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" class="mie2" style="display: inline-block; vertical-align: middle;">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                      <line x1="8" y1="21" x2="16" y2="21"/>
                      <line x1="12" y1="17" x2="12" y2="21"/>
                    </svg>Desktop Item 1
                  </ag-menu-item>
                  <ag-menu-item value="desktop2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" class="mie2" style="display: inline-block; vertical-align: middle;">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                      <line x1="8" y1="21" x2="16" y2="21"/>
                      <line x1="12" y1="17" x2="12" y2="21"/>
                    </svg>Desktop Item 2
                  </ag-menu-item>
                </div>
                <div class="mobile-only-items">
                  <ag-menu-item value="mobile1">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" class="mie2" style="display: inline-block; vertical-align: middle;">
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                      <line x1="12" y1="18" x2="12.01" y2="18"/>
                    </svg>Mobile Item 1
                  </ag-menu-item>
                  <ag-menu-item value="mobile2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" class="mie2" style="display: inline-block; vertical-align: middle;">
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                      <line x1="12" y1="18" x2="12.01" y2="18"/>
                    </svg>Mobile Item 2
                  </ag-menu-item>
                </div>
                <ag-menu-separator></ag-menu-separator>
                <ag-menu-item value="always">Always Visible</ag-menu-item>
              </ag-menu>
            </ag-menu-button>
          </div>
        </div>

        <div class="mbe4">
          <h2>Recommended: Conditional Rendering (Better Performance)</h2>
          <p class="mbe4">
            Instead of using <code>check-hidden-items</code>, you can achieve the same result with better performance by using conditional rendering. This removes hidden items from the DOM entirely.
          </p>
        </div>
        <div class="stacked mbe4">
          <div>
            <p class="mbe4">
              <strong>Current viewport:</strong> ${this.isMobile?"Mobile":"Desktop"}
            </p>
            <ag-menu-button menu-aria-label="Conditional menu">
              Conditional Menu
              <ag-menu slot="menu">
                ${this.isMobile?"":y`
                  <ag-menu-item value="desktop1">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" class="mie2" style="display: inline-block; vertical-align: middle;">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                      <line x1="8" y1="21" x2="16" y2="21"/>
                      <line x1="12" y1="17" x2="12" y2="21"/>
                    </svg>Desktop Item 1
                  </ag-menu-item>
                  <ag-menu-item value="desktop2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" class="mie2" style="display: inline-block; vertical-align: middle;">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                      <line x1="8" y1="21" x2="16" y2="21"/>
                      <line x1="12" y1="17" x2="12" y2="21"/>
                    </svg>Desktop Item 2
                  </ag-menu-item>
                `}
                ${this.isMobile?y`
                  <ag-menu-item value="mobile1">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" class="mie2" style="display: inline-block; vertical-align: middle;">
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                      <line x1="12" y1="18" x2="12.01" y2="18"/>
                    </svg>Mobile Item 1
                  </ag-menu-item>
                  <ag-menu-item value="mobile2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" class="mie2" style="display: inline-block; vertical-align: middle;">
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                      <line x1="12" y1="18" x2="12.01" y2="18"/>
                    </svg>Mobile Item 2
                  </ag-menu-item>
                `:""}
                <ag-menu-separator></ag-menu-separator>
                <ag-menu-item value="always">Always Visible</ag-menu-item>
              </ag-menu>
            </ag-menu-button>
          </div>
        </div>
      </section>
    `}}customElements.define("menu-lit-examples",Gs);const js=`<template>
  <section>
    <div class="mbe4">
      <h2>Basic Menu</h2>
    </div>
    <div class="stacked mbe4">
      <VueMenu menu-aria-label="Menu options">
        Menu
        <template #menu>
          <VueMenuItem value="edit">Edit</VueMenuItem>
          <VueMenuItem value="copy">Copy</VueMenuItem>
          <VueMenuItem value="paste">Paste</VueMenuItem>
          <VueMenuSeparator />
          <VueMenuItem value="delete">Delete</VueMenuItem>
        </template>
      </VueMenu>
    </div>

    <div class="mbe4">
      <h2>Menu Alignment</h2>
      <p class="mbe4">
        The <code>menu-align</code> prop controls horizontal alignment. Use <code>menu-align="right"</code> when the menu button is near the right edge of the viewport.
      </p>
    </div>
    <div class="stacked mbe4">
      <div
        class="flex items-center"
        style="gap: 1rem; justify-content: space-between;"
      >
        <VueMenu
          menu-align="left"
          menu-aria-label="Left-aligned menu"
        >
          Left Aligned
          <template #menu>
            <VueMenuItem value="option1">Option 1</VueMenuItem>
            <VueMenuItem value="option2">Option 2</VueMenuItem>
            <VueMenuItem value="option3">Option 3</VueMenuItem>
          </template>
        </VueMenu>
        <VueMenu
          menu-align="right"
          menu-aria-label="Right-aligned menu"
        >
          Right Aligned
          <template #menu>
            <VueMenuItem value="option1">Option 1</VueMenuItem>
            <VueMenuItem value="option2">Option 2</VueMenuItem>
            <VueMenuItem value="option3">Option 3</VueMenuItem>
          </template>
        </VueMenu>
      </div>
    </div>

    <div class="mbe4">
      <h2>Menu with Links</h2>
    </div>
    <div class="stacked mbe4">
      <VueMenu menu-aria-label="Navigation menu">
        Navigation
        <template #menu>
          <VueMenuItem
            value="home"
            href="#home"
          >Home</VueMenuItem>
          <VueMenuItem
            value="about"
            href="#about"
          >About</VueMenuItem>
          <VueMenuItem
            value="contact"
            href="#contact"
          >Contact</VueMenuItem>
          <VueMenuSeparator />
          <VueMenuItem
            value="external"
            href="https://example.com"
            target="_blank"
          >
            External Link
          </VueMenuItem>
        </template>
      </VueMenu>
    </div>

    <div class="mbe4">
      <h2>Disabled Button</h2>
    </div>
    <div class="stacked mbe4">
      <VueMenu
        disabled
        menu-aria-label="Disabled menu"
      >
        Disabled Menu
        <template #menu>
          <VueMenuItem value="item1">Item 1</VueMenuItem>
          <VueMenuItem value="item2">Item 2</VueMenuItem>
        </template>
      </VueMenu>
    </div>

    <div class="mbe4">
      <h2>Menu with Disabled Items</h2>
    </div>
    <div class="stacked mbe4">
      <VueMenu menu-aria-label="Menu with disabled items">
        Mixed States
        <template #menu>
          <VueMenuItem value="enabled1">Enabled Item</VueMenuItem>
          <VueMenuItem
            value="disabled1"
            :disabled="true"
          >Disabled Item</VueMenuItem>
          <VueMenuItem value="enabled2">Another Enabled</VueMenuItem>
          <VueMenuSeparator />
          <VueMenuItem
            value="disabled2"
            :disabled="true"
          >Another Disabled</VueMenuItem>
        </template>
      </VueMenu>
    </div>

    <div class="mbe4">
      <h2>Complex Menu (File Menu)</h2>
    </div>
    <div class="stacked mbe4">
      <VueMenu menu-aria-label="File menu">
        File
        <template #menu>
          <VueMenuItem value="new">New</VueMenuItem>
          <VueMenuItem value="open">Open...</VueMenuItem>
          <VueMenuItem value="recent">Open Recent</VueMenuItem>
          <VueMenuSeparator />
          <VueMenuItem value="save">Save</VueMenuItem>
          <VueMenuItem value="save-as">Save As...</VueMenuItem>
          <VueMenuSeparator />
          <VueMenuItem value="export">Export</VueMenuItem>
          <VueMenuItem value="import">Import</VueMenuItem>
          <VueMenuSeparator />
          <VueMenuItem value="print">Print</VueMenuItem>
          <VueMenuSeparator />
          <VueMenuItem value="close">Close</VueMenuItem>
        </template>
      </VueMenu>
    </div>

    <div class="mbe4">
      <h2>Menu with Sections</h2>
    </div>
    <div class="stacked mbe4">
      <VueMenu menu-aria-label="User menu">
        <div class="flex-inline items-center">
          <User
            :size="16"
            class="mie2"
          />
          User Menu
        </div>
        <template #menu>
          <VueMenuItem value="profile">Profile</VueMenuItem>
          <VueMenuItem value="settings">Settings</VueMenuItem>
          <VueMenuSeparator />
          <VueMenuItem value="help">Help</VueMenuItem>
          <VueMenuItem value="feedback">Send Feedback</VueMenuItem>
          <VueMenuSeparator />
          <VueMenuItem value="logout">Logout</VueMenuItem>
        </template>
      </VueMenu>
    </div>

    <div class="mbe4">
      <h2>Menu with Icon Button</h2>
      <p class="mbe4">
        The following examples show using an icon as the trigger. The <code>menu-variant="icon"</code> removes the chevron and provides a minimal button container for the icon. You can also use an
        icon with the default chevron trigger as we see on the right.
      </p>
    </div>
    <div class="mbe4">
      <h3>Large</h3>
      <div
        class="flex-inline items-center"
        style="gap: 1rem;"
      >
        <!-- Icon only -->
        <VueMenu
          menu-variant="icon"
          ghost
          menu-aria-label="More options menu"
        >
          <Menu :size="24" />
          <template #menu>
            <VueMenuItem value="settings">Settings</VueMenuItem>
            <VueMenuItem value="profile">Profile</VueMenuItem>
            <VueMenuSeparator />
            <VueMenuItem value="logout">Logout</VueMenuItem>
          </template>
        </VueMenu>
        <!-- Icon with chevron -->
        <VueMenu menu-aria-label="More options menu">
          <Menu :size="24" />
          <template #menu>
            <VueMenuItem value="settings">Settings</VueMenuItem>
            <VueMenuItem value="profile">Profile</VueMenuItem>
            <VueMenuSeparator />
            <VueMenuItem value="logout">Logout</VueMenuItem>
          </template>
        </VueMenu>
      </div>
    </div>
    <div class="mbe4">
      <h3>Medium</h3>
      <div
        class="flex-inline items-center"
        style="gap: 1rem;"
      >
        <!-- Icon only -->
        <VueMenu
          menu-variant="icon"
          ghost
          size="sm"
          menu-aria-label="More options menu"
        >
          <Menu :size="18" />
          <template #menu>
            <VueMenuItem value="settings">Settings</VueMenuItem>
            <VueMenuItem value="profile">Profile</VueMenuItem>
            <VueMenuSeparator />
            <VueMenuItem value="logout">Logout</VueMenuItem>
          </template>
        </VueMenu>
        <!-- Icon with chevron -->
        <VueMenu
          size="sm"
          menu-aria-label="More options menu"
        >
          <Menu :size="18" />
          <template #menu>
            <VueMenuItem value="settings">Settings</VueMenuItem>
            <VueMenuItem value="profile">Profile</VueMenuItem>
            <VueMenuSeparator />
            <VueMenuItem value="logout">Logout</VueMenuItem>
          </template>
        </VueMenu>
      </div>
    </div>
    <div class="mbe4">
      <h3>Small</h3>
      <div
        class="flex-inline items-center"
        style="gap: 1rem;"
      >
        <!-- Icon only -->
        <VueMenu
          menu-variant="icon"
          ghost
          size="x-sm"
          menu-aria-label="More options menu"
        >
          <Menu :size="14" />
          <template #menu>
            <VueMenuItem value="settings">Settings</VueMenuItem>
            <VueMenuItem value="profile">Profile</VueMenuItem>
            <VueMenuSeparator />
            <VueMenuItem value="logout">Logout</VueMenuItem>
          </template>
        </VueMenu>
        <!-- Icon with chevron -->
        <VueMenu
          size="x-sm"
          menu-aria-label="More options menu"
        >
          <Menu :size="14" />
          <template #menu>
            <VueMenuItem value="settings">Settings</VueMenuItem>
            <VueMenuItem value="profile">Profile</VueMenuItem>
            <VueMenuSeparator />
            <VueMenuItem value="logout">Logout</VueMenuItem>
          </template>
        </VueMenu>
      </div>
    </div>

    <div class="mbe4">
      <h2>Monochrome Variant</h2>
    </div>
    <div class="stacked mbe4">
      <VueMenu
        menu-aria-label="Monochrome menu"
        button-variant="monochrome"
      >
        Monochrome Menu
        <template #menu>
          <VueMenuItem
            value="option1"
            variant="monochrome"
          >Option 1</VueMenuItem>
          <VueMenuItem
            value="option2"
            variant="monochrome"
            :selected="true"
          >Option 2 (Selected)</VueMenuItem>
          <VueMenuItem
            value="option3"
            variant="monochrome"
          >Option 3</VueMenuItem>
        </template>
      </VueMenu>
    </div>

    <div class="mbe4">
      <h2>Event Handling</h2>
    </div>
    <div class="stacked mbe4">
      <div
        class="flex-inline items-center"
        :style="{gap: '10px'}"
      >
        <VueMenu
          menu-aria-label="Event testing menu"
          @menu-open="handleMenuOpen"
          @menu-close="handleMenuClose"
          @menu-select="handleMenuSelect"
        >
          Event Test
          <template #menu>
            <VueMenuItem value="option1">Option 1</VueMenuItem>
            <VueMenuItem value="option2">Option 2</VueMenuItem>
            <VueMenuSeparator />
            <VueMenuItem value="option3">Option 3</VueMenuItem>
          </template>
        </VueMenu>
        <p v-if="lastEvent">
          Last event: <strong>{{ lastEvent }}</strong>
        </p>
      </div>
    </div>
    <div class="mbe4">
      <h2>Menu Types: Navigation vs Selection</h2>
      <p class="mbe4">
        The <code>type</code> prop controls selection behavior. Use <code>type="default"</code> (the default) for navigation menus where selection is transient, and <code>type="single-select"</code> for menus where selection should persist (like filters or sorting).
      </p>
    </div>
    <div class="stacked mbe4">
      <div
        class="flex items-start"
        style="gap: 2rem; flex-wrap: wrap;"
      >
        <div>
          <h3 class="mbe4">Navigation Menu (type="default")</h3>
          <p class="mbe4">
            Selection clears when menu closes. Use for navigation and actions.
          </p>
          <VueMenu menu-aria-label="User navigation">
            User Menu
            <template #menu>
              <VueMenuItem value="profile">Profile</VueMenuItem>
              <VueMenuItem value="settings">Settings</VueMenuItem>
              <VueMenuSeparator />
              <VueMenuItem value="logout">Logout</VueMenuItem>
            </template>
          </VueMenu>
        </div>

        <div>
          <h3 class="mbe4">Selection Menu (type="single-select")</h3>
          <p class="mbe4">
            Selection persists when menu closes. Use for filters, sorting, etc.
          </p>
          <VueMenu
            menu-type="single-select"
            selected-value="date"
            menu-aria-label="Sort options"
          >
            Sort by
            <template #menu>
              <VueMenuItem value="date">Date</VueMenuItem>
              <VueMenuItem value="name">Name</VueMenuItem>
              <VueMenuItem value="size">Size</VueMenuItem>
            </template>
          </VueMenu>
        </div>
      </div>
    </div>

    <div class="mbe4">
      <h2>Additional Gutter</h2>
      <p class="mbe4">
        The <code>additional-gutter</code> prop adds extra vertical spacing beyond the trigger button's height when positioning the menu. This is useful when the menu button is within a taller container (like a header) and you need the menu to clear that container.
      </p>
    </div>
    <div class="stacked mbe4">
      <div>
        <p class="mbe4">This menu has <code>additional-gutter="20px"</code></p>
        <VueMenu
          menu-variant="chevron"
          additional-gutter="20px"
          menu-aria-label="Menu with additional gutter"
        >
          Menu with Extra Gutter
          <template #menu>
            <VueMenuItem value="option1">Option 1</VueMenuItem>
            <VueMenuItem value="option2">Option 2</VueMenuItem>
            <VueMenuItem value="option3">Option 3</VueMenuItem>
          </template>
        </VueMenu>
      </div>
    </div>

    <div class="mbe4">
      <h2>Responsive Hidden Items (checkHiddenItems)</h2>
      <p class="mbe4">
        The <code>check-hidden-items</code> prop enables the menu to skip items that are hidden via CSS (like responsive media queries). This is useful when you wrap menu items in responsive containers but want keyboard navigation to work correctly.
      </p>
      <p class="mbe4">
        <strong>Performance Note:</strong> Enabling this feature checks computed styles on every keyboard navigation, which has a performance cost. Only enable it if you're using CSS-based hiding. For better performance, prefer conditional rendering (v-if) instead.
      </p>
    </div>
    <div class="stacked mbe4">
      <div v-html="responsiveStyles"></div>
      <div>
        <p class="mbe4">
          <strong>Try resizing your browser:</strong> Desktop items are hidden on mobile (&lt;768px), mobile items are hidden on desktop. Keyboard navigation skips hidden items.
        </p>
        <VueMenu
          check-hidden-items
          menu-aria-label="Responsive menu"
        >
          Responsive Menu
          <template #menu>
            <div class="desktop-only-items">
              <VueMenuItem value="desktop1">
                <Monitor
                  :size="16"
                  class="mie2"
                />Desktop Item 1
              </VueMenuItem>
              <VueMenuItem value="desktop2">
                <Monitor
                  :size="16"
                  class="mie2"
                />Desktop Item 2
              </VueMenuItem>
            </div>
            <div class="mobile-only-items">
              <VueMenuItem value="mobile1">
                <Smartphone
                  :size="16"
                  class="mie2"
                />Mobile Item 1
              </VueMenuItem>
              <VueMenuItem value="mobile2">
                <Smartphone
                  :size="16"
                  class="mie2"
                />Mobile Item 2
              </VueMenuItem>
            </div>
            <VueMenuSeparator />
            <VueMenuItem value="always">Always Visible</VueMenuItem>
          </template>
        </VueMenu>
      </div>
    </div>

    <div class="mbe4">
      <h2>Recommended: Conditional Rendering (Better Performance)</h2>
      <p class="mbe4">
        Instead of using <code>check-hidden-items</code>, you can achieve the same result with better performance by using Vue's conditional rendering (v-if). This removes hidden items from the DOM entirely.
      </p>
    </div>
    <div class="stacked mbe4">
      <div>
        <p class="mbe4">
          <strong>Current viewport:</strong> {{ isMobile ? 'Mobile' : 'Desktop' }}
        </p>
        <VueMenu menu-aria-label="Conditional menu">
          Conditional Menu
          <template #menu>
            <VueMenuItem
              v-if="!isMobile"
              value="desktop1"
            >
              <Monitor
                :size="16"
                class="mie2"
              />Desktop Item 1
            </VueMenuItem>
            <VueMenuItem
              v-if="!isMobile"
              value="desktop2"
            >
              <Monitor
                :size="16"
                class="mie2"
              />Desktop Item 2
            </VueMenuItem>
            <VueMenuItem
              v-if="isMobile"
              value="mobile1"
            >
              <Smartphone
                :size="16"
                class="mie2"
              />Mobile Item 1
            </VueMenuItem>
            <VueMenuItem
              v-if="isMobile"
              value="mobile2"
            >
              <Smartphone
                :size="16"
                class="mie2"
              />Mobile Item 2
            </VueMenuItem>
            <VueMenuSeparator />
            <VueMenuItem value="always">Always Visible</VueMenuItem>
          </template>
        </VueMenu>
      </div>
    </div>

    <div class="mbe4">
      <h2>Dynamic Icon Switching</h2>
      <p class="mbe4">
        The menu button exposes a <code>data-menu-open</code> attribute that changes based on the menu state. You can use this with CSS to dynamically switch icons when the menu opens/closes.
      </p>
    </div>
    <div class="stacked mbe4">
      <div v-html="dynamicIconStyles"></div>
      <div
        class="flex-inline items-center"
        style="gap: 1rem;"
      >
        <VueMenu
          menu-variant="icon"
          ghost
          size="sm"
          class="dynamic-icon-menu"
          aria-label="Toggle menu"
          menu-aria-label="Navigation menu"
        >
          <Menu
            :size="14"
            class="menu-icon"
          />
          <X
            :size="14"
            class="close-icon"
          />
          <template #menu>
            <VueMenuItem value="home">Home</VueMenuItem>
            <VueMenuItem value="about">About</VueMenuItem>
            <VueMenuItem value="contact">Contact</VueMenuItem>
            <VueMenuSeparator />
            <VueMenuItem value="logout">Logout</VueMenuItem>
          </template>
        </VueMenu>
        <p>
          Click the icon to see it change from ☰ to ✕
        </p>
      </div>
    </div>

    <div class="mbe4">
      <h2>CSS Shadow Parts Customization</h2>
    </div>
    <div class="stacked mbe4">
      <div v-html="customMenuStyles"></div>
      <VueMenu
        menu-aria-label="Custom menu"
        class="custom-menu-button"
      >
        Custom Menu
        <template #menu>
          <VueMenuItem value="one">Option 1</VueMenuItem>
          <VueMenuItem value="two">Option 2</VueMenuItem>
          <VueMenuSeparator />
          <VueMenuItem value="three">Option 3</VueMenuItem>
        </template>
      </VueMenu>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import VueMenu, {
  VueMenuItem,
  VueMenuSeparator,
} from "agnosticui-core/menu/vue";
import { User, Menu, X, Monitor, Smartphone } from "lucide-vue-next";

export default {
  name: "MenuExamples",
  components: {
    VueMenu,
    VueMenuItem,
    VueMenuSeparator,
    User,
    Menu,
    X,
    Monitor,
    Smartphone,
  },
  setup() {
    const lastEvent = ref(null);
    const lastSelectedValue = ref(null);
    const isMobile = ref(false);

    const checkMobile = () => {
      isMobile.value = window.innerWidth < 768;
    };

    onMounted(() => {
      checkMobile();
      window.addEventListener("resize", checkMobile);
    });

    onUnmounted(() => {
      window.removeEventListener("resize", checkMobile);
    });

    const handleMenuOpen = (detail) => {
      const selectedInfo = lastSelectedValue.value
        ? \`, selected: \${lastSelectedValue.value}\`
        : "";
      lastEvent.value = \`menu-open (open: \${detail.open}\${selectedInfo})\`;
    };

    const handleMenuClose = (detail) => {
      const selectedInfo = lastSelectedValue.value
        ? \`, selected: \${lastSelectedValue.value}\`
        : "";
      lastEvent.value = \`menu-close (open: \${detail.open}\${selectedInfo})\`;
    };

    const handleMenuSelect = (detail) => {
      lastSelectedValue.value = detail.value;
      lastEvent.value = \`menu-select (value: \${detail.value})\`;
    };

    const responsiveStyles = \`
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
    \`;

    const dynamicIconStyles = \`
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
    \`;

    const customMenuStyles = \`
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
    \`;

    return {
      lastEvent,
      lastSelectedValue,
      isMobile,
      handleMenuOpen,
      handleMenuClose,
      handleMenuSelect,
      responsiveStyles,
      dynamicIconStyles,
      customMenuStyles,
    };
  },
};
<\/script>
`,Ys=`import { LitElement, html } from 'lit';
import 'agnosticui-core/menu';

export class MenuLitExamples extends LitElement {
  createRenderRoot() {
    return this;
  }

  static get properties() {
    return {
      lastEvent: { type: String, state: true },
      lastSelectedValue: { type: String, state: true },
      isMobile: { type: Boolean, state: true },
    };
  }

  constructor() {
    super();
    this.lastEvent = null;
    this.lastSelectedValue = null;
    this.isMobile = false;
  }

  connectedCallback() {
    super.connectedCallback();
    this.checkMobile();
    window.addEventListener('resize', this.checkMobile.bind(this));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('resize', this.checkMobile.bind(this));
  }

  checkMobile() {
    this.isMobile = window.innerWidth < 768;
  }

  handleMenuOpen(e) {
    const selectedInfo = this.lastSelectedValue ? \`, selected: \${this.lastSelectedValue}\` : '';
    this.lastEvent = \`menu-open (open: \${e.detail.open}\${selectedInfo})\`;
  }

  handleMenuClose(e) {
    const selectedInfo = this.lastSelectedValue ? \`, selected: \${this.lastSelectedValue}\` : '';
    this.lastEvent = \`menu-close (open: \${e.detail.open}\${selectedInfo})\`;
  }

  handleMenuSelect(e) {
    this.lastSelectedValue = e.detail.value;
    this.lastEvent = \`menu-select (value: \${e.detail.value})\`;
  }

  render() {
    return html\`
      <style>
        /* Responsive styles */
        @media (max-width: 767px) {
          .desktop-only-items {
            display: none;
          }
        }
        @media (min-width: 768px) {
          .mobile-only-items {
            display: none;
          }
        }

        /* Dynamic icon styles */
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

        /* Custom menu styles */
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
        .custom-menu-button ag-menu-item::part(ag-menu-item-button) {
          color: white;
        }
        .custom-menu-button ag-menu-item::part(ag-menu-item-button):focus,
        .custom-menu-button ag-menu-item::part(ag-menu-item-button):hover {
          color: black;
        }
      </style>

      <section>
        <div class="mbe4">
          <h2>Basic Menu</h2>
        </div>
        <div class="stacked mbe4">
          <ag-menu-button menu-aria-label="Menu options">
            Menu
            <ag-menu slot="menu">
              <ag-menu-item value="edit">Edit</ag-menu-item>
              <ag-menu-item value="copy">Copy</ag-menu-item>
              <ag-menu-item value="paste">Paste</ag-menu-item>
              <ag-menu-separator></ag-menu-separator>
              <ag-menu-item value="delete">Delete</ag-menu-item>
            </ag-menu>
          </ag-menu-button>
        </div>

        <div class="mbe4">
          <h2>Menu Alignment</h2>
          <p class="mbe4">
            The <code>menu-align</code> prop controls horizontal alignment. Use <code>menu-align="right"</code> when the menu button is near the right edge of the viewport.
          </p>
        </div>
        <div class="stacked mbe4">
          <div class="flex items-center" style="gap: 1rem; justify-content: space-between;">
            <ag-menu-button menu-align="left" menu-aria-label="Left-aligned menu">
              Left Aligned
              <ag-menu slot="menu">
                <ag-menu-item value="option1">Option 1</ag-menu-item>
                <ag-menu-item value="option2">Option 2</ag-menu-item>
                <ag-menu-item value="option3">Option 3</ag-menu-item>
              </ag-menu>
            </ag-menu-button>
            <ag-menu-button menu-align="right" menu-aria-label="Right-aligned menu">
              Right Aligned
              <ag-menu slot="menu">
                <ag-menu-item value="option1">Option 1</ag-menu-item>
                <ag-menu-item value="option2">Option 2</ag-menu-item>
                <ag-menu-item value="option3">Option 3</ag-menu-item>
              </ag-menu>
            </ag-menu-button>
          </div>
        </div>

        <div class="mbe4">
          <h2>Menu with Links</h2>
        </div>
        <div class="stacked mbe4">
          <ag-menu-button menu-aria-label="Navigation menu">
            Navigation
            <ag-menu slot="menu">
              <ag-menu-item value="home" href="#home">Home</ag-menu-item>
              <ag-menu-item value="about" href="#about">About</ag-menu-item>
              <ag-menu-item value="contact" href="#contact">Contact</ag-menu-item>
              <ag-menu-separator></ag-menu-separator>
              <ag-menu-item value="external" href="https://example.com" target="_blank">
                External Link
              </ag-menu-item>
            </ag-menu>
          </ag-menu-button>
        </div>

        <div class="mbe4">
          <h2>Disabled Button</h2>
        </div>
        <div class="stacked mbe4">
          <ag-menu-button disabled menu-aria-label="Disabled menu">
            Disabled Menu
            <ag-menu slot="menu">
              <ag-menu-item value="item1">Item 1</ag-menu-item>
              <ag-menu-item value="item2">Item 2</ag-menu-item>
            </ag-menu>
          </ag-menu-button>
        </div>

        <div class="mbe4">
          <h2>Menu with Disabled Items</h2>
        </div>
        <div class="stacked mbe4">
          <ag-menu-button menu-aria-label="Menu with disabled items">
            Mixed States
            <ag-menu slot="menu">
              <ag-menu-item value="enabled1">Enabled Item</ag-menu-item>
              <ag-menu-item value="disabled1" disabled>Disabled Item</ag-menu-item>
              <ag-menu-item value="enabled2">Another Enabled</ag-menu-item>
              <ag-menu-separator></ag-menu-separator>
              <ag-menu-item value="disabled2" disabled>Another Disabled</ag-menu-item>
            </ag-menu>
          </ag-menu-button>
        </div>

        <div class="mbe4">
          <h2>Complex Menu (File Menu)</h2>
        </div>
        <div class="stacked mbe4">
          <ag-menu-button menu-aria-label="File menu">
            File
            <ag-menu slot="menu">
              <ag-menu-item value="new">New</ag-menu-item>
              <ag-menu-item value="open">Open...</ag-menu-item>
              <ag-menu-item value="recent">Open Recent</ag-menu-item>
              <ag-menu-separator></ag-menu-separator>
              <ag-menu-item value="save">Save</ag-menu-item>
              <ag-menu-item value="save-as">Save As...</ag-menu-item>
              <ag-menu-separator></ag-menu-separator>
              <ag-menu-item value="export">Export</ag-menu-item>
              <ag-menu-item value="import">Import</ag-menu-item>
              <ag-menu-separator></ag-menu-separator>
              <ag-menu-item value="print">Print</ag-menu-item>
              <ag-menu-separator></ag-menu-separator>
              <ag-menu-item value="close">Close</ag-menu-item>
            </ag-menu>
          </ag-menu-button>
        </div>

        <div class="mbe4">
          <h2>Menu with Sections</h2>
        </div>
        <div class="stacked mbe4">
          <ag-menu-button menu-aria-label="User menu">
            <div class="flex-inline items-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" class="mie2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              User Menu
            </div>
            <ag-menu slot="menu">
              <ag-menu-item value="profile">Profile</ag-menu-item>
              <ag-menu-item value="settings">Settings</ag-menu-item>
              <ag-menu-separator></ag-menu-separator>
              <ag-menu-item value="help">Help</ag-menu-item>
              <ag-menu-item value="feedback">Send Feedback</ag-menu-item>
              <ag-menu-separator></ag-menu-separator>
              <ag-menu-item value="logout">Logout</ag-menu-item>
            </ag-menu>
          </ag-menu-button>
        </div>

        <div class="mbe4">
          <h2>Menu with Icon Button</h2>
          <p class="mbe4">
            The following examples show using an icon as the trigger. The <code>menu-variant="icon"</code> removes the chevron and provides a minimal button container for the icon. You can also use an icon with the default chevron trigger as we see on the right.
          </p>
        </div>
        <div class="mbe4">
          <h3>Large</h3>
          <div class="flex-inline items-center" style="gap: 1rem;">
            <!-- Icon only -->
            <ag-menu-button menu-variant="icon" ghost menu-aria-label="More options menu">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24">
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
              <ag-menu slot="menu">
                <ag-menu-item value="settings">Settings</ag-menu-item>
                <ag-menu-item value="profile">Profile</ag-menu-item>
                <ag-menu-separator></ag-menu-separator>
                <ag-menu-item value="logout">Logout</ag-menu-item>
              </ag-menu>
            </ag-menu-button>
            <!-- Icon with chevron -->
            <ag-menu-button menu-aria-label="More options menu">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24">
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
              <ag-menu slot="menu">
                <ag-menu-item value="settings">Settings</ag-menu-item>
                <ag-menu-item value="profile">Profile</ag-menu-item>
                <ag-menu-separator></ag-menu-separator>
                <ag-menu-item value="logout">Logout</ag-menu-item>
              </ag-menu>
            </ag-menu-button>
          </div>
        </div>
        <div class="mbe4">
          <h3>Medium</h3>
          <div class="flex-inline items-center" style="gap: 1rem;">
            <!-- Icon only -->
            <ag-menu-button menu-variant="icon" ghost size="sm" menu-aria-label="More options menu">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
              <ag-menu slot="menu">
                <ag-menu-item value="settings">Settings</ag-menu-item>
                <ag-menu-item value="profile">Profile</ag-menu-item>
                <ag-menu-separator></ag-menu-separator>
                <ag-menu-item value="logout">Logout</ag-menu-item>
              </ag-menu>
            </ag-menu-button>
            <!-- Icon with chevron -->
            <ag-menu-button size="sm" menu-aria-label="More options menu">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
              <ag-menu slot="menu">
                <ag-menu-item value="settings">Settings</ag-menu-item>
                <ag-menu-item value="profile">Profile</ag-menu-item>
                <ag-menu-separator></ag-menu-separator>
                <ag-menu-item value="logout">Logout</ag-menu-item>
              </ag-menu>
            </ag-menu-button>
          </div>
        </div>
        <div class="mbe4">
          <h3>Small</h3>
          <div class="flex-inline items-center" style="gap: 1rem;">
            <!-- Icon only -->
            <ag-menu-button menu-variant="icon" ghost size="x-sm" menu-aria-label="More options menu">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
              <ag-menu slot="menu">
                <ag-menu-item value="settings">Settings</ag-menu-item>
                <ag-menu-item value="profile">Profile</ag-menu-item>
                <ag-menu-separator></ag-menu-separator>
                <ag-menu-item value="logout">Logout</ag-menu-item>
              </ag-menu>
            </ag-menu-button>
            <!-- Icon with chevron -->
            <ag-menu-button size="x-sm" menu-aria-label="More options menu">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
              <ag-menu slot="menu">
                <ag-menu-item value="settings">Settings</ag-menu-item>
                <ag-menu-item value="profile">Profile</ag-menu-item>
                <ag-menu-separator></ag-menu-separator>
                <ag-menu-item value="logout">Logout</ag-menu-item>
              </ag-menu>
            </ag-menu-button>
          </div>
        </div>

        <div class="mbe4">
          <h2>Monochrome Variant</h2>
        </div>
        <div class="stacked mbe4">
          <ag-menu-button menu-aria-label="Monochrome menu" button-variant="monochrome">
            Monochrome Menu
            <ag-menu slot="menu">
              <ag-menu-item value="option1" variant="monochrome">Option 1</ag-menu-item>
              <ag-menu-item value="option2" variant="monochrome" selected>Option 2 (Selected)</ag-menu-item>
              <ag-menu-item value="option3" variant="monochrome">Option 3</ag-menu-item>
            </ag-menu>
          </ag-menu-button>
        </div>

        <div class="mbe4">
          <h2>Event Handling</h2>
        </div>
        <div class="stacked mbe4">
          <div class="flex-inline items-center" style="gap: 10px;">
            <ag-menu-button
              menu-aria-label="Event testing menu"
              @menu-open=\${this.handleMenuOpen}
              @menu-close=\${this.handleMenuClose}
              @menu-select=\${this.handleMenuSelect}
            >
              Event Test
              <ag-menu slot="menu">
                <ag-menu-item value="option1">Option 1</ag-menu-item>
                <ag-menu-item value="option2">Option 2</ag-menu-item>
                <ag-menu-separator></ag-menu-separator>
                <ag-menu-item value="option3">Option 3</ag-menu-item>
              </ag-menu>
            </ag-menu-button>
            \${this.lastEvent ? html\`<p>Last event: <strong>\${this.lastEvent}</strong></p>\` : ''}
          </div>
        </div>

        <div class="mbe4">
          <h2>Menu Types: Navigation vs Selection</h2>
          <p class="mbe4">
            The <code>type</code> prop controls selection behavior. Use <code>type="default"</code> (the default) for navigation menus where selection is transient, and <code>type="single-select"</code> for menus where selection should persist (like filters or sorting).
          </p>
        </div>
        <div class="stacked mbe4">
          <div class="flex items-start" style="gap: 2rem; flex-wrap: wrap;">
            <div>
              <h3 class="mbe4">Navigation Menu (type="default")</h3>
              <p class="mbe4">
                Selection clears when menu closes. Use for navigation and actions.
              </p>
              <ag-menu-button menu-aria-label="User navigation">
                User Menu
                <ag-menu slot="menu">
                  <ag-menu-item value="profile">Profile</ag-menu-item>
                  <ag-menu-item value="settings">Settings</ag-menu-item>
                  <ag-menu-separator></ag-menu-separator>
                  <ag-menu-item value="logout">Logout</ag-menu-item>
                </ag-menu>
              </ag-menu-button>
            </div>

            <div>
              <h3 class="mbe4">Selection Menu (type="single-select")</h3>
              <p class="mbe4">
                Selection persists when menu closes. Use for filters, sorting, etc.
              </p>
              <ag-menu-button menu-type="single-select" selected-value="date" menu-aria-label="Sort options">
                Sort by
                <ag-menu slot="menu">
                  <ag-menu-item value="date">Date</ag-menu-item>
                  <ag-menu-item value="name">Name</ag-menu-item>
                  <ag-menu-item value="size">Size</ag-menu-item>
                </ag-menu>
              </ag-menu-button>
            </div>
          </div>
        </div>

        <div class="mbe4">
          <h2>Additional Gutter</h2>
          <p class="mbe4">
            The <code>additional-gutter</code> prop adds extra vertical spacing beyond the trigger button's height when positioning the menu. This is useful when the menu button is within a taller container (like a header) and you need the menu to clear that container.
          </p>
        </div>
        <div class="stacked mbe4">
          <div>
            <p class="mbe4">This menu has <code>additional-gutter="20px"</code></p>
            <ag-menu-button menu-variant="chevron" additional-gutter="20px" menu-aria-label="Menu with additional gutter">
              Menu with Extra Gutter
              <ag-menu slot="menu">
                <ag-menu-item value="option1">Option 1</ag-menu-item>
                <ag-menu-item value="option2">Option 2</ag-menu-item>
                <ag-menu-item value="option3">Option 3</ag-menu-item>
              </ag-menu>
            </ag-menu-button>
          </div>
        </div>

        <div class="mbe4">
          <h2>Responsive Hidden Items (checkHiddenItems)</h2>
          <p class="mbe4">
            The <code>check-hidden-items</code> prop enables the menu to skip items that are hidden via CSS (like responsive media queries). This is useful when you wrap menu items in responsive containers but want keyboard navigation to work correctly.
          </p>
          <p class="mbe4">
            <strong>Performance Note:</strong> Enabling this feature checks computed styles on every keyboard navigation, which has a performance cost. Only enable it if you're using CSS-based hiding. For better performance, prefer conditional rendering instead.
          </p>
        </div>
        <div class="stacked mbe4">
          <div>
            <p class="mbe4">
              <strong>Try resizing your browser:</strong> Desktop items are hidden on mobile (&lt;768px), mobile items are hidden on desktop. Keyboard navigation skips hidden items.
            </p>
            <ag-menu-button check-hidden-items menu-aria-label="Responsive menu">
              Responsive Menu
              <ag-menu slot="menu">
                <div class="desktop-only-items">
                  <ag-menu-item value="desktop1">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" class="mie2" style="display: inline-block; vertical-align: middle;">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                      <line x1="8" y1="21" x2="16" y2="21"/>
                      <line x1="12" y1="17" x2="12" y2="21"/>
                    </svg>Desktop Item 1
                  </ag-menu-item>
                  <ag-menu-item value="desktop2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" class="mie2" style="display: inline-block; vertical-align: middle;">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                      <line x1="8" y1="21" x2="16" y2="21"/>
                      <line x1="12" y1="17" x2="12" y2="21"/>
                    </svg>Desktop Item 2
                  </ag-menu-item>
                </div>
                <div class="mobile-only-items">
                  <ag-menu-item value="mobile1">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" class="mie2" style="display: inline-block; vertical-align: middle;">
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                      <line x1="12" y1="18" x2="12.01" y2="18"/>
                    </svg>Mobile Item 1
                  </ag-menu-item>
                  <ag-menu-item value="mobile2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" class="mie2" style="display: inline-block; vertical-align: middle;">
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                      <line x1="12" y1="18" x2="12.01" y2="18"/>
                    </svg>Mobile Item 2
                  </ag-menu-item>
                </div>
                <ag-menu-separator></ag-menu-separator>
                <ag-menu-item value="always">Always Visible</ag-menu-item>
              </ag-menu>
            </ag-menu-button>
          </div>
        </div>

        <div class="mbe4">
          <h2>Recommended: Conditional Rendering (Better Performance)</h2>
          <p class="mbe4">
            Instead of using <code>check-hidden-items</code>, you can achieve the same result with better performance by using conditional rendering. This removes hidden items from the DOM entirely.
          </p>
        </div>
        <div class="stacked mbe4">
          <div>
            <p class="mbe4">
              <strong>Current viewport:</strong> \${this.isMobile ? 'Mobile' : 'Desktop'}
            </p>
            <ag-menu-button menu-aria-label="Conditional menu">
              Conditional Menu
              <ag-menu slot="menu">
                \${!this.isMobile ? html\`
                  <ag-menu-item value="desktop1">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" class="mie2" style="display: inline-block; vertical-align: middle;">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                      <line x1="8" y1="21" x2="16" y2="21"/>
                      <line x1="12" y1="17" x2="12" y2="21"/>
                    </svg>Desktop Item 1
                  </ag-menu-item>
                  <ag-menu-item value="desktop2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" class="mie2" style="display: inline-block; vertical-align: middle;">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                      <line x1="8" y1="21" x2="16" y2="21"/>
                      <line x1="12" y1="17" x2="12" y2="21"/>
                    </svg>Desktop Item 2
                  </ag-menu-item>
                \` : ''}
                \${this.isMobile ? html\`
                  <ag-menu-item value="mobile1">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" class="mie2" style="display: inline-block; vertical-align: middle;">
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                      <line x1="12" y1="18" x2="12.01" y2="18"/>
                    </svg>Mobile Item 1
                  </ag-menu-item>
                  <ag-menu-item value="mobile2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" class="mie2" style="display: inline-block; vertical-align: middle;">
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                      <line x1="12" y1="18" x2="12.01" y2="18"/>
                    </svg>Mobile Item 2
                  </ag-menu-item>
                \` : ''}
                <ag-menu-separator></ag-menu-separator>
                <ag-menu-item value="always">Always Visible</ag-menu-item>
              </ag-menu>
            </ag-menu-button>
          </div>
        </div>
      </section>
    \`;
  }
}

// Register the custom element
customElements.define('menu-lit-examples', MenuLitExamples);
`,Xs=`import { useState, useEffect } from "react";
import {
  ReactMenuButton,
  ReactMenu,
  ReactMenuItem,
  ReactMenuSeparator,
} from "agnosticui-core/menu/react";

export default function MenuReactExamples() {
  const [lastEvent, setLastEvent] = useState(null);
  const [lastSelectedValue, setLastSelectedValue] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMenuOpen = (e) => {
    const selectedInfo = lastSelectedValue
      ? \`, selected: \${lastSelectedValue}\`
      : "";
    setLastEvent(\`menu-open (open: \${e.detail.open}\${selectedInfo})\`);
  };

  const handleMenuClose = (e) => {
    const selectedInfo = lastSelectedValue
      ? \`, selected: \${lastSelectedValue}\`
      : "";
    setLastEvent(\`menu-close (open: \${e.detail.open}\${selectedInfo})\`);
  };

  const handleMenuSelect = (e) => {
    setLastSelectedValue(e.detail.value);
    setLastEvent(\`menu-select (value: \${e.detail.value})\`);
  };

  return (
    <>
      <style>{\`
        /* Responsive styles */
        @media (max-width: 767px) {
          .desktop-only-items {
            display: none;
          }
        }
        @media (min-width: 768px) {
          .mobile-only-items {
            display: none;
          }
        }

        /* Dynamic icon styles */
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

        /* Custom menu styles */
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
        .custom-menu-button ag-menu-item::part(ag-menu-item-button) {
          color: white;
        }
        .custom-menu-button ag-menu-item::part(ag-menu-item-button):focus,
        .custom-menu-button ag-menu-item::part(ag-menu-item-button):hover {
          color: black;
        }
      \`}</style>

      <section>
        <div className="mbe4">
          <h2>Basic Menu</h2>
        </div>
        <div className="stacked mbe4">
          <ReactMenuButton menuAriaLabel="Menu options">
            Menu
            <ReactMenu slot="menu">
              <ReactMenuItem value="edit">Edit</ReactMenuItem>
              <ReactMenuItem value="copy">Copy</ReactMenuItem>
              <ReactMenuItem value="paste">Paste</ReactMenuItem>
              <ReactMenuSeparator />
              <ReactMenuItem value="delete">Delete</ReactMenuItem>
            </ReactMenu>
          </ReactMenuButton>
        </div>

        <div className="mbe4">
          <h2>Menu Alignment</h2>
          <p className="mbe4">
            The <code>menu-align</code> prop controls horizontal alignment. Use{" "}
            <code>menu-align="right"</code> when the menu button is near the
            right edge of the viewport.
          </p>
        </div>
        <div className="stacked mbe4">
          <div
            className="flex items-center"
            style={{ gap: "1rem", justifyContent: "space-between" }}
          >
            <ReactMenuButton menuAlign="left" menuAriaLabel="Left-aligned menu">
              Left Aligned
              <ReactMenu slot="menu">
                <ReactMenuItem value="option1">Option 1</ReactMenuItem>
                <ReactMenuItem value="option2">Option 2</ReactMenuItem>
                <ReactMenuItem value="option3">Option 3</ReactMenuItem>
              </ReactMenu>
            </ReactMenuButton>
            <ReactMenuButton
              menuAlign="right"
              menuAriaLabel="Right-aligned menu"
            >
              Right Aligned
              <ReactMenu slot="menu">
                <ReactMenuItem value="option1">Option 1</ReactMenuItem>
                <ReactMenuItem value="option2">Option 2</ReactMenuItem>
                <ReactMenuItem value="option3">Option 3</ReactMenuItem>
              </ReactMenu>
            </ReactMenuButton>
          </div>
        </div>

        <div className="mbe4">
          <h2>Menu with Links</h2>
        </div>
        <div className="stacked mbe4">
          <ReactMenuButton menuAriaLabel="Navigation menu">
            Navigation
            <ReactMenu slot="menu">
              <ReactMenuItem value="home" href="#home">
                Home
              </ReactMenuItem>
              <ReactMenuItem value="about" href="#about">
                About
              </ReactMenuItem>
              <ReactMenuItem value="contact" href="#contact">
                Contact
              </ReactMenuItem>
              <ReactMenuSeparator />
              <ReactMenuItem
                value="external"
                href="https://example.com"
                target="_blank"
              >
                External Link
              </ReactMenuItem>
            </ReactMenu>
          </ReactMenuButton>
        </div>

        <div className="mbe4">
          <h2>Disabled Button</h2>
        </div>
        <div className="stacked mbe4">
          <ReactMenuButton disabled menuAriaLabel="Disabled menu">
            Disabled Menu
            <ReactMenu slot="menu">
              <ReactMenuItem value="item1">Item 1</ReactMenuItem>
              <ReactMenuItem value="item2">Item 2</ReactMenuItem>
            </ReactMenu>
          </ReactMenuButton>
        </div>

        <div className="mbe4">
          <h2>Menu with Disabled Items</h2>
        </div>
        <div className="stacked mbe4">
          <ReactMenuButton menuAriaLabel="Menu with disabled items">
            Mixed States
            <ReactMenu slot="menu">
              <ReactMenuItem value="enabled1">Enabled Item</ReactMenuItem>
              <ReactMenuItem value="disabled1" disabled>
                Disabled Item
              </ReactMenuItem>
              <ReactMenuItem value="enabled2">Another Enabled</ReactMenuItem>
              <ReactMenuSeparator />
              <ReactMenuItem value="disabled2" disabled>
                Another Disabled
              </ReactMenuItem>
            </ReactMenu>
          </ReactMenuButton>
        </div>

        <div className="mbe4">
          <h2>Complex Menu (File Menu)</h2>
        </div>
        <div className="stacked mbe4">
          <ReactMenuButton menuAriaLabel="File menu">
            File
            <ReactMenu slot="menu">
              <ReactMenuItem value="new">New</ReactMenuItem>
              <ReactMenuItem value="open">Open...</ReactMenuItem>
              <ReactMenuItem value="recent">Open Recent</ReactMenuItem>
              <ReactMenuSeparator />
              <ReactMenuItem value="save">Save</ReactMenuItem>
              <ReactMenuItem value="save-as">Save As...</ReactMenuItem>
              <ReactMenuSeparator />
              <ReactMenuItem value="export">Export</ReactMenuItem>
              <ReactMenuItem value="import">Import</ReactMenuItem>
              <ReactMenuSeparator />
              <ReactMenuItem value="print">Print</ReactMenuItem>
              <ReactMenuSeparator />
              <ReactMenuItem value="close">Close</ReactMenuItem>
            </ReactMenu>
          </ReactMenuButton>
        </div>

        <div className="mbe4">
          <h2>Menu with Sections</h2>
        </div>
        <div className="stacked mbe4">
          <ReactMenuButton menuAriaLabel="User menu">
            <div className="flex-inline items-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                width="16"
                height="16"
                className="mie2"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              User Menu
            </div>
            <ReactMenu slot="menu">
              <ReactMenuItem value="profile">Profile</ReactMenuItem>
              <ReactMenuItem value="settings">Settings</ReactMenuItem>
              <ReactMenuSeparator />
              <ReactMenuItem value="help">Help</ReactMenuItem>
              <ReactMenuItem value="feedback">Send Feedback</ReactMenuItem>
              <ReactMenuSeparator />
              <ReactMenuItem value="logout">Logout</ReactMenuItem>
            </ReactMenu>
          </ReactMenuButton>
        </div>

        <div className="mbe4">
          <h2>Menu with Icon Button</h2>
          <p className="mbe4">
            The following examples show using an icon as the trigger. The{" "}
            <code>menu-variant="icon"</code> removes the chevron and provides a
            minimal button container for the icon. You can also use an icon with
            the default chevron trigger as we see on the right.
          </p>
        </div>
        <div className="mbe4">
          <h3>Large</h3>
          <div className="flex-inline items-center" style={{ gap: "1rem" }}>
            {/* Icon only */}
            <ReactMenuButton
              menuVariant="icon"
              ghost
              menuAriaLabel="More options menu"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                width="24"
                height="24"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
              <ReactMenu slot="menu">
                <ReactMenuItem value="settings">Settings</ReactMenuItem>
                <ReactMenuItem value="profile">Profile</ReactMenuItem>
                <ReactMenuSeparator />
                <ReactMenuItem value="logout">Logout</ReactMenuItem>
              </ReactMenu>
            </ReactMenuButton>
            {/* Icon with chevron */}
            <ReactMenuButton menuAriaLabel="More options menu">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                width="24"
                height="24"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
              <ReactMenu slot="menu">
                <ReactMenuItem value="settings">Settings</ReactMenuItem>
                <ReactMenuItem value="profile">Profile</ReactMenuItem>
                <ReactMenuSeparator />
                <ReactMenuItem value="logout">Logout</ReactMenuItem>
              </ReactMenu>
            </ReactMenuButton>
          </div>
        </div>
        <div className="mbe4">
          <h3>Medium</h3>
          <div className="flex-inline items-center" style={{ gap: "1rem" }}>
            {/* Icon only */}
            <ReactMenuButton
              menuVariant="icon"
              ghost
              size="sm"
              menuAriaLabel="More options menu"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                width="18"
                height="18"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
              <ReactMenu slot="menu">
                <ReactMenuItem value="settings">Settings</ReactMenuItem>
                <ReactMenuItem value="profile">Profile</ReactMenuItem>
                <ReactMenuSeparator />
                <ReactMenuItem value="logout">Logout</ReactMenuItem>
              </ReactMenu>
            </ReactMenuButton>
            {/* Icon with chevron */}
            <ReactMenuButton size="sm" menuAriaLabel="More options menu">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                width="18"
                height="18"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
              <ReactMenu slot="menu">
                <ReactMenuItem value="settings">Settings</ReactMenuItem>
                <ReactMenuItem value="profile">Profile</ReactMenuItem>
                <ReactMenuSeparator />
                <ReactMenuItem value="logout">Logout</ReactMenuItem>
              </ReactMenu>
            </ReactMenuButton>
          </div>
        </div>
        <div className="mbe4">
          <h3>Small</h3>
          <div className="flex-inline items-center" style={{ gap: "1rem" }}>
            {/* Icon only */}
            <ReactMenuButton
              menuVariant="icon"
              ghost
              size="x-sm"
              menuAriaLabel="More options menu"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                width="14"
                height="14"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
              <ReactMenu slot="menu">
                <ReactMenuItem value="settings">Settings</ReactMenuItem>
                <ReactMenuItem value="profile">Profile</ReactMenuItem>
                <ReactMenuSeparator />
                <ReactMenuItem value="logout">Logout</ReactMenuItem>
              </ReactMenu>
            </ReactMenuButton>
            {/* Icon with chevron */}
            <ReactMenuButton size="x-sm" menuAriaLabel="More options menu">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                width="14"
                height="14"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
              <ReactMenu slot="menu">
                <ReactMenuItem value="settings">Settings</ReactMenuItem>
                <ReactMenuItem value="profile">Profile</ReactMenuItem>
                <ReactMenuSeparator />
                <ReactMenuItem value="logout">Logout</ReactMenuItem>
              </ReactMenu>
            </ReactMenuButton>
          </div>
        </div>

        <div className="mbe4">
          <h2>Monochrome Variant</h2>
        </div>
        <div className="stacked mbe4">
          <ReactMenuButton
            menuAriaLabel="Monochrome menu"
            buttonVariant="monochrome"
          >
            Monochrome Menu
            <ReactMenu slot="menu">
              <ReactMenuItem value="option1" variant="monochrome">
                Option 1
              </ReactMenuItem>
              <ReactMenuItem value="option2" variant="monochrome" selected>
                Option 2 (Selected)
              </ReactMenuItem>
              <ReactMenuItem value="option3" variant="monochrome">
                Option 3
              </ReactMenuItem>
            </ReactMenu>
          </ReactMenuButton>
        </div>

        <div className="mbe4">
          <h2>Event Handling</h2>
        </div>
        <div className="stacked mbe4">
          <div className="flex-inline items-center" style={{ gap: "10px" }}>
            <ReactMenuButton
              menuAriaLabel="Event testing menu"
              onMenuOpen={handleMenuOpen}
              onMenuClose={handleMenuClose}
              onMenuSelect={handleMenuSelect}
            >
              Event Test
              <ReactMenu slot="menu">
                <ReactMenuItem value="option1">Option 1</ReactMenuItem>
                <ReactMenuItem value="option2">Option 2</ReactMenuItem>
                <ReactMenuSeparator />
                <ReactMenuItem value="option3">Option 3</ReactMenuItem>
              </ReactMenu>
            </ReactMenuButton>
            {lastEvent && (
              <p>
                Last event: <strong>{lastEvent}</strong>
              </p>
            )}
          </div>
        </div>

        <div className="mbe4">
          <h2>Menu Types: Navigation vs Selection</h2>
          <p className="mbe4">
            The <code>type</code> prop controls selection behavior. Use{" "}
            <code>type="default"</code> (the default) for navigation menus where
            selection is transient, and <code>type="single-select"</code> for
            menus where selection should persist (like filters or sorting).
          </p>
        </div>
        <div className="stacked mbe4">
          <div
            className="flex items-start"
            style={{ gap: "2rem", flexWrap: "wrap" }}
          >
            <div>
              <h3 className="mbe4">Navigation Menu (type="default")</h3>
              <p className="mbe4">
                Selection clears when menu closes. Use for navigation and
                actions.
              </p>
              <ReactMenuButton menuAriaLabel="User navigation">
                User Menu
                <ReactMenu slot="menu">
                  <ReactMenuItem value="profile">Profile</ReactMenuItem>
                  <ReactMenuItem value="settings">Settings</ReactMenuItem>
                  <ReactMenuSeparator />
                  <ReactMenuItem value="logout">Logout</ReactMenuItem>
                </ReactMenu>
              </ReactMenuButton>
            </div>

            <div>
              <h3 className="mbe4">Selection Menu (type="single-select")</h3>
              <p className="mbe4">
                Selection persists when menu closes. Use for filters, sorting,
                etc.
              </p>
              <ReactMenuButton
                menuType="single-select"
                selectedValue="date"
                menuAriaLabel="Sort options"
              >
                Sort by
                <ReactMenu slot="menu">
                  <ReactMenuItem value="date">Date</ReactMenuItem>
                  <ReactMenuItem value="name">Name</ReactMenuItem>
                  <ReactMenuItem value="size">Size</ReactMenuItem>
                </ReactMenu>
              </ReactMenuButton>
            </div>
          </div>
        </div>

        <div className="mbe4">
          <h2>Additional Gutter</h2>
          <p className="mbe4">
            The <code>additional-gutter</code> prop adds extra vertical spacing
            beyond the trigger button's height when positioning the menu. This
            is useful when the menu button is within a taller container (like a
            header) and you need the menu to clear that container.
          </p>
        </div>
        <div className="stacked mbe4">
          <div>
            <p className="mbe4">
              This menu has <code>additional-gutter="20px"</code>
            </p>
            <ReactMenuButton
              menuVariant="chevron"
              additionalGutter="20px"
              menuAriaLabel="Menu with additional gutter"
            >
              Menu with Extra Gutter
              <ReactMenu slot="menu">
                <ReactMenuItem value="option1">Option 1</ReactMenuItem>
                <ReactMenuItem value="option2">Option 2</ReactMenuItem>
                <ReactMenuItem value="option3">Option 3</ReactMenuItem>
              </ReactMenu>
            </ReactMenuButton>
          </div>
        </div>

        <div className="mbe4">
          <h2>Responsive Hidden Items (checkHiddenItems)</h2>
          <p className="mbe4">
            The <code>check-hidden-items</code> prop enables the menu to skip
            items that are hidden via CSS (like responsive media queries). This
            is useful when you wrap menu items in responsive containers but want
            keyboard navigation to work correctly.
          </p>
          <p className="mbe4">
            <strong>Performance Note:</strong> Enabling this feature checks
            computed styles on every keyboard navigation, which has a
            performance cost. Only enable it if you're using CSS-based hiding.
            For better performance, prefer conditional rendering instead.
          </p>
        </div>
        <div className="stacked mbe4">
          <div>
            <p className="mbe4">
              <strong>Try resizing your browser:</strong> Desktop items are
              hidden on mobile (&lt;768px), mobile items are hidden on desktop.
              Keyboard navigation skips hidden items.
            </p>
            <ReactMenuButton checkHiddenItems menuAriaLabel="Responsive menu">
              Responsive Menu
              <ReactMenu slot="menu">
                <div className="desktop-only-items">
                  <ReactMenuItem value="desktop1">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      width="16"
                      height="16"
                      className="mie2"
                      style={{
                        display: "inline-block",
                        verticalAlign: "middle",
                      }}
                    >
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                    Desktop Item 1
                  </ReactMenuItem>
                  <ReactMenuItem value="desktop2">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      width="16"
                      height="16"
                      className="mie2"
                      style={{
                        display: "inline-block",
                        verticalAlign: "middle",
                      }}
                    >
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                    Desktop Item 2
                  </ReactMenuItem>
                </div>
                <div className="mobile-only-items">
                  <ReactMenuItem value="mobile1">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      width="16"
                      height="16"
                      className="mie2"
                      style={{
                        display: "inline-block",
                        verticalAlign: "middle",
                      }}
                    >
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                      <line x1="12" y1="18" x2="12.01" y2="18" />
                    </svg>
                    Mobile Item 1
                  </ReactMenuItem>
                  <ReactMenuItem value="mobile2">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      width="16"
                      height="16"
                      className="mie2"
                      style={{
                        display: "inline-block",
                        verticalAlign: "middle",
                      }}
                    >
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                      <line x1="12" y1="18" x2="12.01" y2="18" />
                    </svg>
                    Mobile Item 2
                  </ReactMenuItem>
                </div>
                <ReactMenuSeparator />
                <ReactMenuItem value="always">Always Visible</ReactMenuItem>
              </ReactMenu>
            </ReactMenuButton>
          </div>
        </div>

        <div className="mbe4">
          <h2>Recommended: Conditional Rendering (Better Performance)</h2>
          <p className="mbe4">
            Instead of using <code>check-hidden-items</code>, you can achieve
            the same result with better performance by using conditional
            rendering. This removes hidden items from the DOM entirely.
          </p>
        </div>
        <div className="stacked mbe4">
          <div>
            <p className="mbe4">
              <strong>Current viewport:</strong>{" "}
              {isMobile ? "Mobile" : "Desktop"}
            </p>
            <ReactMenuButton menuAriaLabel="Conditional menu">
              Conditional Menu
              <ReactMenu slot="menu">
                {!isMobile && (
                  <ReactMenuItem value="desktop1">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      width="16"
                      height="16"
                      className="mie2"
                      style={{
                        display: "inline-block",
                        verticalAlign: "middle",
                      }}
                    >
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                    Desktop Item 1
                  </ReactMenuItem>
                )}
                {!isMobile && (
                  <ReactMenuItem value="desktop2">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      width="16"
                      height="16"
                      className="mie2"
                      style={{
                        display: "inline-block",
                        verticalAlign: "middle",
                      }}
                    >
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                    Desktop Item 2
                  </ReactMenuItem>
                )}
                {isMobile && (
                  <ReactMenuItem value="mobile1">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      width="16"
                      height="16"
                      className="mie2"
                      style={{
                        display: "inline-block",
                        verticalAlign: "middle",
                      }}
                    >
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                      <line x1="12" y1="18" x2="12.01" y2="18" />
                    </svg>
                    Mobile Item 1
                  </ReactMenuItem>
                )}
                {isMobile && (
                  <ReactMenuItem value="mobile2">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      width="16"
                      height="16"
                      className="mie2"
                      style={{
                        display: "inline-block",
                        verticalAlign: "middle",
                      }}
                    >
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                      <line x1="12" y1="18" x2="12.01" y2="18" />
                    </svg>
                    Mobile Item 2
                  </ReactMenuItem>
                )}
                <ReactMenuSeparator />
                <ReactMenuItem value="always">Always Visible</ReactMenuItem>
              </ReactMenu>
            </ReactMenuButton>
          </div>
        </div>

        <div className="mbe4">
          <h2>Dynamic Icon Switching</h2>
          <p className="mbe4">
            The menu button exposes a <code>data-menu-open</code> attribute that
            changes based on the menu state. You can use this with CSS to
            dynamically switch icons when the menu opens/closes.
          </p>
        </div>
        <div className="stacked mbe4">
          <div className="flex-inline items-center" style={{ gap: "1rem" }}>
            <ReactMenuButton
              menuVariant="icon"
              ghost
              size="sm"
              className="dynamic-icon-menu"
              ariaLabel="Toggle menu"
              menuAriaLabel="Navigation menu"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                width="14"
                height="14"
                className="menu-icon"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                width="14"
                height="14"
                className="close-icon"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
              <ReactMenu slot="menu">
                <ReactMenuItem value="home">Home</ReactMenuItem>
                <ReactMenuItem value="about">About</ReactMenuItem>
                <ReactMenuItem value="contact">Contact</ReactMenuItem>
                <ReactMenuSeparator />
                <ReactMenuItem value="logout">Logout</ReactMenuItem>
              </ReactMenu>
            </ReactMenuButton>
            <p>Click the icon to see it change from ☰ to ✕</p>
          </div>
        </div>

        <div className="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
        </div>
        <div className="stacked mbe4">
          <ReactMenuButton
            menuAriaLabel="Custom menu"
            className="custom-menu-button"
          >
            Custom Menu
            <ReactMenu slot="menu">
              <ReactMenuItem value="one">Option 1</ReactMenuItem>
              <ReactMenuItem value="two">Option 2</ReactMenuItem>
              <ReactMenuSeparator />
              <ReactMenuItem value="three">Option 3</ReactMenuItem>
            </ReactMenu>
          </ReactMenuButton>
        </div>
      </section>
    </>
  );
}
`,de=JSON.parse('{"title":"Menu","description":"","frontmatter":{},"headers":[],"relativePath":"components/menu.md","filePath":"components/menu.md"}'),Js={name:"components/menu.md"},Fe=Object.assign(Js,{setup(p){return(s,l)=>(b(),D("div",null,[l[1]||(l[1]=t("h1",{id:"menu",tabindex:"-1"},[n("Menu "),t("a",{class:"header-anchor",href:"#menu","aria-label":'Permalink to "Menu"'},"​")],-1)),e(W),l[2]||(l[2]=t("p",null,"A menu (dropdown menu or context menu) is a popover component that displays a list of actions or options when triggered. Menus provide a compact way to present choices without cluttering the interface.",-1)),l[3]||(l[3]=t("h2",{id:"examples",tabindex:"-1"},[n("Examples "),t("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),e(Z,{component:"menu","vue-code":R(js),"lit-code":R(Ys),"react-code":R(Xs)},{vue:i(()=>[e(Ks)]),lit:i(()=>[...l[0]||(l[0]=[t("menu-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),l[4]||(l[4]=X("",101))]))}});export{de as __pageData,Fe as default};
