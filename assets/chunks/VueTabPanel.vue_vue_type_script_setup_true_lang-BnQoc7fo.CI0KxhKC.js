import{i as u,z as c,a as h,x as p}from"./property-CemaeiRl.Cea_q1B7.js";import{n as f}from"./state-CovhUvdr.DnzyR2fh.js";import{t as A}from"./unique-id.CpwMFgRD.js";import{d as v,p as w,c as g,o as _,r as m,K as T}from"./framework.CdHt8f9T.js";var C=Object.defineProperty,o=(s,t,a,i)=>{for(var e=void 0,r=s.length-1,n;r>=0;r--)(n=s[r])&&(e=n(t,a,e)||e);return e&&C(t,a,e),e};const x=class extends h{constructor(){super(),this.panel="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}render(){return p`<div class="tab" part="ag-tab"><slot></slot></div>`}};x.styles=u`
    :host {
      display: inline-flex;
    }

    .tab {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: transparent;
      border: none;
      color: var(--ag-text-secondary);
      cursor: pointer;
      font: inherit;
      padding: var(--ag-space-2) var(--ag-space-4);
      border-radius: 0;
      border-bottom: 2px solid transparent;
      text-decoration: none;
    }

    :host([aria-selected="true"]) .tab {
      color: var(--ag-text-primary);
      border-bottom-color: var(--ag-primary);
    }

    .tab:focus-visible {
      outline: var(--ag-focus-width) solid rgba(var(--ag-focus), 0.5);
      outline-offset: var(--ag-focus-offset);
    }

    /* Disabled state styles */
    :host([disabled]) .tab,
    :host([aria-disabled="true"]) .tab {
      opacity: var(--ag-opacity-disabled);
      cursor: not-allowed;
      pointer-events: none;
    }

    .tab:hover {
      background: var(--ag-background-secondary);
      color: var(--ag-text-primary);
    }

    :host([disabled]) .tab:hover,
    :host([aria-disabled="true"]) .tab:hover {
      background: transparent;
      color: var(--ag-text-secondary);
    }
  `;let y=x;o([c({type:String})],y.prototype,"panel");o([c({type:Boolean,reflect:!0})],y.prototype,"disabled");const k=class extends h{constructor(){super()}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tabpanel"),this.setAttribute("tabindex","0")}render(){return p`<div class="tab-panel" part="ag-tab-panel"><slot></slot></div>`}};k.styles=u`
    :host {
      display: block;
    }

    .tab-panel {
      display: block;
      padding: var(--ag-tabs-panel-padding, 1rem);
    }

    :host([hidden]) {
      display: none;
    }
  `;let D=k;const E=class extends h{constructor(){super(),this.activation="manual",this.activeTab=0,this.orientation="horizontal",this.ariaLabel="",this._tabs=[],this._panels=[],this._focusedTab=0}firstUpdated(){Promise.resolve().then(()=>{this._updateTabsAndPanels()})}updated(t){t.has("activeTab")&&(this._focusedTab=this.activeTab,Promise.resolve().then(()=>{this._updateTabsAndPanels()}))}connectedCallback(){super.connectedCallback(),this.addEventListener("slotchange",()=>{Promise.resolve().then(()=>{this._updateTabsAndPanels()})}),this.addEventListener("keydown",this._handleKeyDown.bind(this)),this.addEventListener("click",this._handleClick.bind(this))}_updateTabsAndPanels(){this._tabs=Array.from(this.querySelectorAll("ag-tab")),this._panels=Array.from(this.querySelectorAll("ag-tab-panel")),this._tabs.forEach((t,a)=>{var r;const i=t.id||`tab-${A()}`,e=t.panel||((r=this._panels[a])==null?void 0:r.id)||`panel-${A()}`;t.setAttribute("id",i),t.setAttribute("aria-controls",e),t.setAttribute("aria-selected",a===this.activeTab?"true":"false"),t.setAttribute("tabindex",a===this._focusedTab?"0":"-1"),this._panels[a]&&(this._panels[a].setAttribute("id",e),this._panels[a].setAttribute("aria-labelledby",i),a!==this.activeTab?this._panels[a].setAttribute("hidden",""):this._panels[a].removeAttribute("hidden"))})}_handleKeyDown(t){if(!this._tabs.length)return;const a=t.target,i=a&&a.tagName==="AG-TAB",e=a&&a.closest("ag-tab-panel");if(!i||e)return;const{key:r}=t,n=this.orientation==="horizontal";let l=this._focusedTab,d=!1;switch(r){case"ArrowRight":n&&(l=this._findNextEnabledTab(this._focusedTab,1),d=this.activation==="automatic",t.preventDefault());break;case"ArrowLeft":n&&(l=this._findNextEnabledTab(this._focusedTab,-1),d=this.activation==="automatic",t.preventDefault());break;case"ArrowDown":n||(l=this._findNextEnabledTab(this._focusedTab,1),d=this.activation==="automatic",t.preventDefault());break;case"ArrowUp":n||(l=this._findNextEnabledTab(this._focusedTab,-1),d=this.activation==="automatic",t.preventDefault());break;case"Home":l=this._findFirstEnabledTab(!0),d=this.activation==="automatic",t.preventDefault();break;case"End":l=this._findFirstEnabledTab(!1),d=this.activation==="automatic",t.preventDefault();break;case" ":case"Enter":this.activation==="manual"&&(this._activateTab(this._focusedTab),t.preventDefault());break}l!==this._focusedTab&&(this._setFocusedTab(l),d&&this._activateTab(l))}_handleClick(t){let a=t.target;for(;a&&a.tagName!=="AG-TAB"&&(a=a.parentElement,a!==this););if(a&&a.tagName==="AG-TAB"){const i=a;if(i.hasAttribute("disabled")||i.getAttribute("aria-disabled")==="true")return;const e=this._tabs.indexOf(i);e>=0&&this._activateTab(e)}}_findNextEnabledTab(t,a){const i=this._tabs.length;if(i===0)return t;let e=t,r=0;for(;r<i;){e=a===1?(e+1)%i:e===0?i-1:e-1;const n=this._tabs[e];if(!(n.hasAttribute("disabled")||n.getAttribute("aria-disabled")==="true"))return e;r++}return t}_findFirstEnabledTab(t){const a=this._tabs.length;if(a===0)return 0;if(t)for(let i=0;i<a;i++){const e=this._tabs[i];if(!(e.hasAttribute("disabled")||e.getAttribute("aria-disabled")==="true"))return i}else for(let i=a-1;i>=0;i--){const e=this._tabs[i];if(!(e.hasAttribute("disabled")||e.getAttribute("aria-disabled")==="true"))return i}return 0}_setFocusedTab(t){t>=0&&t<this._tabs.length&&(this._focusedTab=t,this._updateTabsAndPanels(),this._tabs[t].focus())}_activateTab(t){if(t>=0&&t<this._tabs.length){const a=this.activeTab,i=this._tabs[t];if(i.hasAttribute("disabled")||i.getAttribute("aria-disabled")==="true")return;if(a!==t){this.activeTab=t,this._tabs[t].focus();const e=new CustomEvent("tab-change",{detail:{activeTab:t,previousTab:a},bubbles:!0,composed:!0});this.dispatchEvent(e),this.onTabChange&&this.onTabChange(e)}else this._tabs[t].focus()}}render(){return p`
      <div class="tabs-container" part="ag-tabs-container" data-orientation=${this.orientation}>
        <div
          role="tablist"
          part="ag-tabs-tablist"
          aria-orientation=${this.orientation}
          aria-label=${this.ariaLabel||""}
        >
          <slot name="tab"></slot>
        </div>
        <div class="tab-panels" part="ag-tabs-panels">
          <slot name="panel"></slot>
        </div>
      </div>
    `}};E.styles=u`
    :host {
      display: block;
    }

    .tabs-container {
      display: flex;
    }

    .tabs-container[data-orientation="vertical"] {
      flex-direction: row;
    }

    .tabs-container[data-orientation="horizontal"] {
      flex-direction: column;
    }

    [role="tablist"] {
      display: flex;
      gap: var(--ag-space-2);
    }

    [role="tablist"][aria-orientation="horizontal"] {
      flex-direction: row;
      border-bottom: 1px solid var(--ag-border);
    }

    [role="tablist"][aria-orientation="vertical"] {
      flex-direction: column;
      border-inline-end: 1px solid var(--ag-border);
      min-width: 200px;
    }

    .tab-panels {
      flex: 1;
    }

    ::slotted(ag-tab-panel[hidden]) {
      display: none;
    }
  `;let b=E;o([c({type:String})],b.prototype,"activation");o([c({type:Number,attribute:"active-tab"})],b.prototype,"activeTab");o([c({type:String})],b.prototype,"orientation");o([c({type:String,reflect:!0,attribute:"aria-label"})],b.prototype,"ariaLabel");o([c({attribute:!1})],b.prototype,"onTabChange");o([f()],b.prototype,"_tabs");o([f()],b.prototype,"_panels");o([f()],b.prototype,"_focusedTab");customElements.get("ag-tab")||customElements.define("ag-tab",y);customElements.get("ag-tab-panel")||customElements.define("ag-tab-panel",D);customElements.get("ag-tabs")||customElements.define("ag-tabs",b);const L=["activation","activeTab","orientation","ariaLabel"],V=v({__name:"VueTabs",props:{activeTab:{default:0},activation:{default:"manual"},orientation:{default:"horizontal"},ariaLabel:{}},emits:["tab-change","update:activeTab"],setup(s,{emit:t}){const a=t,i=w(),e=r=>{const n=r.detail;a("tab-change",n),a("update:activeTab",n.activeTab)};return(r,n)=>(_(),g("ag-tabs",T({ref_key:"tabsRef",ref:i,activation:s.activation,activeTab:s.activeTab,orientation:s.orientation,ariaLabel:s.ariaLabel,onTabChange:e},r.$attrs),[m(r.$slots,"default")],16,L))}}),P=["panel",".disabled","aria-disabled"],j=v({__name:"VueTab",props:{panel:{},disabled:{type:Boolean}},setup(s){return(t,a)=>(_(),g("ag-tab",T({slot:"tab",panel:s.panel,".disabled":s.disabled,"aria-disabled":s.disabled?"true":null},t.$attrs),[m(t.$slots,"default")],48,P))}}),$=["id"],q=v({__name:"VueTabPanel",props:{id:{}},setup(s){return(t,a)=>(_(),g("ag-tab-panel",T({slot:"panel",id:s.id},t.$attrs),[m(t.$slots,"default")],16,$))}});export{V as T,j as b,q as i};
