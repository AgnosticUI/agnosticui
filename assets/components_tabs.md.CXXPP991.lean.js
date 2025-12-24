import{A as _}from"./chunks/AlphaWarning.BkRV4LZN.js";import{i as C,a as A,x as E}from"./chunks/lit-element.B0TUrqGF.js";import{z as y}from"./chunks/property-CemaeiRl.BAjarvIB.js";import{n as B}from"./chunks/state-CovhUvdr.BllWkzJh.js";import{t as v}from"./chunks/unique-id.CpwMFgRD.js";import{d as D,p as S,c as b,o as u,r as q,K as T,_ as L,C as c,j as i,G as a,w as n,a as e,e as M,t as N,ae as I}from"./chunks/framework.BoyT2Jkt.js";import{U as z}from"./chunks/user.9u1KZ65k.js";import{S as U}from"./chunks/settings.DMxtA-EV.js";import{I as $}from"./chunks/info.D6aSxJKp.js";var O=Object.defineProperty,g=(F,s,t,p)=>{for(var l=void 0,r=F.length-1,h;r>=0;r--)(h=F[r])&&(l=h(s,t,l)||l);return l&&O(s,t,l),l};const f=class extends A{constructor(){super(),this.panel="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}render(){return E`<div class="tab" part="ag-tab"><slot></slot></div>`}};f.styles=C`
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
  `;let m=f;g([y({type:String})],m.prototype,"panel");g([y({type:Boolean,reflect:!0})],m.prototype,"disabled");const P=class extends A{constructor(){super()}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tabpanel"),this.setAttribute("tabindex","0")}render(){return E`<div class="tab-panel" part="ag-tab-panel"><slot></slot></div>`}};P.styles=C`
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
  `;let W=P;const V=class extends A{constructor(){super(),this.activation="manual",this.activeTab=0,this.orientation="horizontal",this.ariaLabel="",this._tabs=[],this._panels=[],this._focusedTab=0}firstUpdated(){Promise.resolve().then(()=>{this._updateTabsAndPanels()})}updated(s){s.has("activeTab")&&(this._focusedTab=this.activeTab,Promise.resolve().then(()=>{this._updateTabsAndPanels()}))}connectedCallback(){super.connectedCallback(),this.addEventListener("slotchange",()=>{Promise.resolve().then(()=>{this._updateTabsAndPanels()})}),this.addEventListener("keydown",this._handleKeyDown.bind(this)),this.addEventListener("click",this._handleClick.bind(this))}_updateTabsAndPanels(){this._tabs=Array.from(this.querySelectorAll("ag-tab")),this._panels=Array.from(this.querySelectorAll("ag-tab-panel")),this._tabs.forEach((s,t)=>{var r;const p=s.id||`tab-${v()}`,l=s.panel||((r=this._panels[t])==null?void 0:r.id)||`panel-${v()}`;s.setAttribute("id",p),s.setAttribute("aria-controls",l),s.setAttribute("aria-selected",t===this.activeTab?"true":"false"),s.setAttribute("tabindex",t===this._focusedTab?"0":"-1"),this._panels[t]&&(this._panels[t].setAttribute("id",l),this._panels[t].setAttribute("aria-labelledby",p),t!==this.activeTab?this._panels[t].setAttribute("hidden",""):this._panels[t].removeAttribute("hidden"))})}_handleKeyDown(s){if(!this._tabs.length)return;const t=s.target,p=t&&t.tagName==="AG-TAB",l=t&&t.closest("ag-tab-panel");if(!p||l)return;const{key:r}=s,h=this.orientation==="horizontal";let k=this._focusedTab,d=!1;switch(r){case"ArrowRight":h&&(k=this._findNextEnabledTab(this._focusedTab,1),d=this.activation==="automatic",s.preventDefault());break;case"ArrowLeft":h&&(k=this._findNextEnabledTab(this._focusedTab,-1),d=this.activation==="automatic",s.preventDefault());break;case"ArrowDown":h||(k=this._findNextEnabledTab(this._focusedTab,1),d=this.activation==="automatic",s.preventDefault());break;case"ArrowUp":h||(k=this._findNextEnabledTab(this._focusedTab,-1),d=this.activation==="automatic",s.preventDefault());break;case"Home":k=this._findFirstEnabledTab(!0),d=this.activation==="automatic",s.preventDefault();break;case"End":k=this._findFirstEnabledTab(!1),d=this.activation==="automatic",s.preventDefault();break;case" ":case"Enter":this.activation==="manual"&&(this._activateTab(this._focusedTab),s.preventDefault());break}k!==this._focusedTab&&(this._setFocusedTab(k),d&&this._activateTab(k))}_handleClick(s){let t=s.target;for(;t&&t.tagName!=="AG-TAB"&&(t=t.parentElement,t!==this););if(t&&t.tagName==="AG-TAB"){const p=t;if(p.hasAttribute("disabled")||p.getAttribute("aria-disabled")==="true")return;const l=this._tabs.indexOf(p);l>=0&&this._activateTab(l)}}_findNextEnabledTab(s,t){const p=this._tabs.length;if(p===0)return s;let l=s,r=0;for(;r<p;){l=t===1?(l+1)%p:l===0?p-1:l-1;const h=this._tabs[l];if(!(h.hasAttribute("disabled")||h.getAttribute("aria-disabled")==="true"))return l;r++}return s}_findFirstEnabledTab(s){const t=this._tabs.length;if(t===0)return 0;if(s)for(let p=0;p<t;p++){const l=this._tabs[p];if(!(l.hasAttribute("disabled")||l.getAttribute("aria-disabled")==="true"))return p}else for(let p=t-1;p>=0;p--){const l=this._tabs[p];if(!(l.hasAttribute("disabled")||l.getAttribute("aria-disabled")==="true"))return p}return 0}_setFocusedTab(s){s>=0&&s<this._tabs.length&&(this._focusedTab=s,this._updateTabsAndPanels(),this._tabs[s].focus())}_activateTab(s){if(s>=0&&s<this._tabs.length){const t=this.activeTab,p=this._tabs[s];if(p.hasAttribute("disabled")||p.getAttribute("aria-disabled")==="true")return;if(t!==s){this.activeTab=s,this._tabs[s].focus();const l=new CustomEvent("tab-change",{detail:{activeTab:s,previousTab:t},bubbles:!0,composed:!0});this.dispatchEvent(l),this.onTabChange&&this.onTabChange(l)}else this._tabs[s].focus()}}render(){return E`
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
    `}};V.styles=C`
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
  `;let o=V;g([y({type:String})],o.prototype,"activation");g([y({type:Number,attribute:"active-tab"})],o.prototype,"activeTab");g([y({type:String})],o.prototype,"orientation");g([y({type:String,reflect:!0,attribute:"aria-label"})],o.prototype,"ariaLabel");g([y({attribute:!1})],o.prototype,"onTabChange");g([B()],o.prototype,"_tabs");g([B()],o.prototype,"_panels");g([B()],o.prototype,"_focusedTab");customElements.get("ag-tab")||customElements.define("ag-tab",m);customElements.get("ag-tab-panel")||customElements.define("ag-tab-panel",W);customElements.get("ag-tabs")||customElements.define("ag-tabs",o);const H=["activation","activeTab","orientation","ariaLabel"],j=D({__name:"VueTabs",props:{activeTab:{default:0},activation:{default:"manual"},orientation:{default:"horizontal"},ariaLabel:{}},emits:["tab-change","update:activeTab"],setup(F,{emit:s}){const t=s,p=S(),l=r=>{const h=r.detail;t("tab-change",h),t("update:activeTab",h.activeTab)};return(r,h)=>(u(),b("ag-tabs",T({ref_key:"tabsRef",ref:p,activation:F.activation,activeTab:F.activeTab,orientation:F.orientation,ariaLabel:F.ariaLabel,onTabChange:l},r.$attrs),[q(r.$slots,"default")],16,H))}}),K=["panel",".disabled","aria-disabled"],G=D({__name:"VueTab",props:{panel:{},disabled:{type:Boolean}},setup(F){return(s,t)=>(u(),b("ag-tab",T({slot:"tab",panel:F.panel,".disabled":F.disabled,"aria-disabled":F.disabled?"true":null},s.$attrs),[q(s.$slots,"default")],48,K))}}),J=["id"],Q=D({__name:"VueTabPanel",props:{id:{}},setup(F){return(s,t)=>(u(),b("ag-tab-panel",T({slot:"panel",id:F.id},s.$attrs),[q(s.$slots,"default")],16,J))}}),X={name:"TabsExamples",components:{VueTabs:j,VueTab:G,VueTabPanel:Q,Info:$,Settings:U,User:z},data(){return{activeTab:0,tabChangeMessage:null,customTabsStyles:`
        <style>
          .custom-tabs::part(ag-tabs-tablist) {
            border-bottom: 2px solid #bada55;
          }
          .custom-tabs::part(ag-tab) {
            font-family: 'Comic Sans MS', cursive, sans-serif;
            font-size: 1.2rem;
            background-color: #f0f0f0;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
          }
          .custom-tabs::part(ag-tab):hover {
            background-color: #e0e0e0;
          }
          .custom-tabs ag-tab[aria-selected="true"]::part(ag-tab) {
            background-color: #bada55;
            color: var(--ag-neutral-900);
            border-bottom: 2px solid #bada55;
          }
          .custom-tabs::part(ag-tabs-panels) {
            border: 2px solid #bada55;
            border-top: none;
            padding: 1rem;
          }
          .custom-tabs::part(ag-tab-panel) {
            background-color: #f9f9f9;
          }
        </style>
      `}},methods:{handleTabChange(F){this.activeTab=F.activeTab,this.tabChangeMessage=`Tab changed from ${F.previousTab} to ${F.activeTab}`}}},Y={class:"stacked-mobile mbe4"},Z={class:"stacked-mobile mbe4"},ss={class:"stacked-mobile mbe4"},is={class:"stacked-mobile mbe4"},as={class:"stacked-mobile mbe4"},ts={class:"flex-inline items-center"},ns={class:"flex-inline items-center"},ls={class:"flex-inline items-center"},hs={class:"stacked-mobile mbe4"},ks={key:0},ps={class:"stacked-mobile mbe4"},es=["innerHTML"];function Fs(F,s,t,p,l,r){const h=c("VueTab"),k=c("VueTabPanel"),d=c("VueTabs"),x=c("Info"),R=c("Settings"),w=c("User");return u(),b("section",null,[s[43]||(s[43]=i("div",{class:"mbe4"},[i("h2",null,"Basic Tabs")],-1)),i("div",Y,[a(d,{"aria-label":"Basic tabs example"},{default:n(()=>[a(h,{panel:"panel-1"},{default:n(()=>[...s[0]||(s[0]=[e("Tab 1",-1)])]),_:1}),a(h,{panel:"panel-2"},{default:n(()=>[...s[1]||(s[1]=[e("Tab 2",-1)])]),_:1}),a(h,{panel:"panel-3"},{default:n(()=>[...s[2]||(s[2]=[e("Tab 3",-1)])]),_:1}),a(k,{panel:"panel-1"},{default:n(()=>[...s[3]||(s[3]=[i("p",null,"Content for Tab 1",-1)])]),_:1}),a(k,{panel:"panel-2"},{default:n(()=>[...s[4]||(s[4]=[i("p",null,"Content for Tab 2",-1)])]),_:1}),a(k,{panel:"panel-3"},{default:n(()=>[...s[5]||(s[5]=[i("p",null,"Content for Tab 3",-1)])]),_:1})]),_:1})]),s[44]||(s[44]=i("div",{class:"mbe4"},[i("h2",null,"Vertical Orientation")],-1)),i("div",Z,[a(d,{orientation:"vertical","aria-label":"Vertical tabs example"},{default:n(()=>[a(h,{panel:"panel-v1"},{default:n(()=>[...s[6]||(s[6]=[e("Profile",-1)])]),_:1}),a(h,{panel:"panel-v2"},{default:n(()=>[...s[7]||(s[7]=[e("Settings",-1)])]),_:1}),a(h,{panel:"panel-v3"},{default:n(()=>[...s[8]||(s[8]=[e("Notifications",-1)])]),_:1}),a(k,{panel:"panel-v1"},{default:n(()=>[...s[9]||(s[9]=[i("p",null,"Profile settings and information",-1)])]),_:1}),a(k,{panel:"panel-v2"},{default:n(()=>[...s[10]||(s[10]=[i("p",null,"Application settings and preferences",-1)])]),_:1}),a(k,{panel:"panel-v3"},{default:n(()=>[...s[11]||(s[11]=[i("p",null,"Notification preferences and history",-1)])]),_:1})]),_:1})]),s[45]||(s[45]=i("div",{class:"mbe4"},[i("h2",null,"Disabled Tab")],-1)),i("div",ss,[a(d,{"aria-label":"Tabs with disabled tab"},{default:n(()=>[a(h,{panel:"panel-d1"},{default:n(()=>[...s[12]||(s[12]=[e("Available",-1)])]),_:1}),a(h,{panel:"panel-d2",disabled:!0},{default:n(()=>[...s[13]||(s[13]=[e("Disabled",-1)])]),_:1}),a(h,{panel:"panel-d3"},{default:n(()=>[...s[14]||(s[14]=[e("Also Available",-1)])]),_:1}),a(k,{panel:"panel-d1"},{default:n(()=>[...s[15]||(s[15]=[i("p",null,"This tab is available",-1)])]),_:1}),a(k,{panel:"panel-d2"},{default:n(()=>[...s[16]||(s[16]=[i("p",null,"This tab is disabled",-1)])]),_:1}),a(k,{panel:"panel-d3"},{default:n(()=>[...s[17]||(s[17]=[i("p",null,"This tab is also available",-1)])]),_:1})]),_:1})]),s[46]||(s[46]=i("div",{class:"mbe4"},[i("h2",null,"Automatic Activation")],-1)),i("div",is,[s[24]||(s[24]=i("p",{style:{"margin-bottom":"0.5rem","font-size":"0.875rem",color:"var(--ag-text-secondary)"}}," With automatic activation, tabs are selected as you navigate with arrow keys. ",-1)),a(d,{activation:"automatic","aria-label":"Automatic activation tabs"},{default:n(()=>[a(h,{panel:"panel-a1"},{default:n(()=>[...s[18]||(s[18]=[e("Tab 1",-1)])]),_:1}),a(h,{panel:"panel-a2"},{default:n(()=>[...s[19]||(s[19]=[e("Tab 2",-1)])]),_:1}),a(h,{panel:"panel-a3"},{default:n(()=>[...s[20]||(s[20]=[e("Tab 3",-1)])]),_:1}),a(k,{panel:"panel-a1"},{default:n(()=>[...s[21]||(s[21]=[i("p",null,"Content for Tab 1 (automatic)",-1)])]),_:1}),a(k,{panel:"panel-a2"},{default:n(()=>[...s[22]||(s[22]=[i("p",null,"Content for Tab 2 (automatic)",-1)])]),_:1}),a(k,{panel:"panel-a3"},{default:n(()=>[...s[23]||(s[23]=[i("p",null,"Content for Tab 3 (automatic)",-1)])]),_:1})]),_:1})]),s[47]||(s[47]=i("div",{class:"mbe4"},[i("h2",null,"Rich Content")],-1)),i("div",as,[a(d,{"aria-label":"Tabs with rich content"},{default:n(()=>[a(h,{panel:"panel-r1"},{default:n(()=>[i("div",ts,[a(x,{size:16,class:"mie2"}),s[25]||(s[25]=e(" Overview ",-1))])]),_:1}),a(h,{panel:"panel-r2"},{default:n(()=>[i("div",ns,[a(R,{size:16,class:"mie2"}),s[26]||(s[26]=e(" Settings ",-1))])]),_:1}),a(h,{panel:"panel-r3"},{default:n(()=>[i("div",ls,[a(w,{size:16,class:"mie2"}),s[27]||(s[27]=e(" Profile ",-1))])]),_:1}),a(k,{panel:"panel-r1"},{default:n(()=>[...s[28]||(s[28]=[i("h3",{style:{"margin-top":"0"}},"Overview",-1),i("p",null,"Dashboard and statistics go here.",-1),i("ul",null,[i("li",null,"Total users: 1,234"),i("li",null,"Active sessions: 456"),i("li",null,"Revenue: $12,345")],-1)])]),_:1}),a(k,{panel:"panel-r2"},{default:n(()=>[...s[29]||(s[29]=[i("h3",{style:{"margin-top":"0"}},"Settings",-1),i("p",null,"Configure your application settings.",-1),i("label",{style:{display:"block","margin-bottom":"0.5rem"}},[i("input",{type:"checkbox",style:{"margin-right":"0.5rem"}}),e(" Enable notifications ")],-1),i("label",{style:{display:"block","margin-bottom":"0.5rem"}},[i("input",{type:"checkbox",style:{"margin-right":"0.5rem"}}),e(" Dark mode ")],-1)])]),_:1}),a(k,{panel:"panel-r3"},{default:n(()=>[...s[30]||(s[30]=[i("h3",{style:{"margin-top":"0"}},"Profile",-1),i("p",null,"Manage your profile information.",-1),i("div",{style:{"margin-top":"1rem"}},[i("strong",null,"Name:"),e(" John Doe"),i("br"),i("strong",null,"Email:"),e(" john@example.com"),i("br"),i("strong",null,"Role:"),e(" Administrator ")],-1)])]),_:1})]),_:1})]),s[48]||(s[48]=i("div",{class:"mbe4"},[i("h2",null,"Event Handling")],-1)),i("div",hs,[a(d,{"active-tab":l.activeTab,"aria-label":"Event testing tabs",onTabChange:r.handleTabChange},{default:n(()=>[a(h,{panel:"panel-e1"},{default:n(()=>[...s[31]||(s[31]=[e("Tab 1",-1)])]),_:1}),a(h,{panel:"panel-e2"},{default:n(()=>[...s[32]||(s[32]=[e("Tab 2",-1)])]),_:1}),a(h,{panel:"panel-e3"},{default:n(()=>[...s[33]||(s[33]=[e("Tab 3",-1)])]),_:1}),a(k,{panel:"panel-e1"},{default:n(()=>[...s[34]||(s[34]=[i("p",null,"Content for Tab 1",-1)])]),_:1}),a(k,{panel:"panel-e2"},{default:n(()=>[...s[35]||(s[35]=[i("p",null,"Content for Tab 2",-1)])]),_:1}),a(k,{panel:"panel-e3"},{default:n(()=>[...s[36]||(s[36]=[i("p",null,"Content for Tab 3",-1)])]),_:1})]),_:1},8,["active-tab","onTabChange"]),l.tabChangeMessage?(u(),b("p",ks,N(l.tabChangeMessage),1)):M("",!0)]),s[49]||(s[49]=i("div",{class:"mbe4"},[i("h2",null,"CSS Shadow Parts Customization")],-1)),i("div",ps,[i("div",{innerHTML:l.customTabsStyles},null,8,es),a(d,{class:"custom-tabs","aria-label":"Customized tabs example"},{default:n(()=>[a(h,{panel:"panel-c1"},{default:n(()=>[...s[37]||(s[37]=[e("Tab 1",-1)])]),_:1}),a(h,{panel:"panel-c2"},{default:n(()=>[...s[38]||(s[38]=[e("Tab 2",-1)])]),_:1}),a(h,{panel:"panel-c3"},{default:n(()=>[...s[39]||(s[39]=[e("Tab 3",-1)])]),_:1}),a(k,{panel:"panel-c1"},{default:n(()=>[...s[40]||(s[40]=[i("p",null,"Content for Tab 1",-1)])]),_:1}),a(k,{panel:"panel-c2"},{default:n(()=>[...s[41]||(s[41]=[i("p",null,"Content for Tab 2",-1)])]),_:1}),a(k,{panel:"panel-c3"},{default:n(()=>[...s[42]||(s[42]=[i("p",null,"Content for Tab 3",-1)])]),_:1})]),_:1})])])}const rs=L(X,[["render",Fs]]),Ts=JSON.parse('{"title":"Tabs","description":"","frontmatter":{},"headers":[],"relativePath":"components/tabs.md","filePath":"components/tabs.md"}'),ds={name:"components/tabs.md"},ms=Object.assign(ds,{setup(F){return(s,t)=>(u(),b("div",null,[t[0]||(t[0]=i("h1",{id:"tabs",tabindex:"-1"},[e("Tabs "),i("a",{class:"header-anchor",href:"#tabs","aria-label":'Permalink to "Tabs"'},"​")],-1)),a(_),t[1]||(t[1]=i("p",null,"Tabs organize content into multiple sections that users can navigate between. Only one tab panel is visible at a time, making tabs ideal for organizing related content without overwhelming the user.",-1)),t[2]||(t[2]=i("h2",{id:"examples",tabindex:"-1"},[e("Examples "),i("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),a(rs),t[3]||(t[3]=I("",56))]))}});export{Ts as __pageData,ms as default};
