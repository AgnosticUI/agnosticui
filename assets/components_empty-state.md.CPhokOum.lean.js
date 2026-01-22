import{C as W,A as Y}from"./chunks/AlphaWarning.yC7ZufpQ.js";import{o as v}from"./chunks/slot.B17U6J5C.js";import{i as H,z as F,a as q,x as u}from"./chunks/Button.DkmThuAs.js";import{d as Z,p as G,c as m,o as b,e as x,r as A,K as $,_ as X,C as p,j as t,G as i,w as a,a as h,ae as O,k as f}from"./chunks/framework.NAAYCHZu.js";import{v as J}from"./chunks/VueButton.vue_vue_type_script_setup_true_lang-D1jGatE9.DjpUppN5.js";import{c as y}from"./chunks/createLucideIcon.B61Wqv9x.js";import{R as K}from"./chunks/rocket.0FY0xHlE.js";import{Z as Q}from"./chunks/sdk.m.DhOmSlC9.js";import{S as ss}from"./chunks/sparkles.DTErT1ti.js";import{S as is}from"./chunks/send.CyjvY3bo.js";import{A as ts}from"./chunks/arrow-right.DJxoihbT.js";import{S as as}from"./chunks/shopping-cart.T6RgEw5e.js";import{U as ns}from"./chunks/upload.CfQSbVzx.js";import{P as es}from"./chunks/plus.BS1frTSk.js";import{M as ls}from"./chunks/mail.DXL_9bBU.js";import{H as ps}from"./chunks/heart.Btp9iEMW.js";import{F as hs}from"./chunks/folder.DLCdM0XY.js";import{F as rs}from"./chunks/FrameworkExample.Z9eaTrCu.js";import"./chunks/Icon.BC5ob6Nk.js";import"./chunks/state-CovhUvdr.CfYrM0Q-.js";/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const os=y("chart-column",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ks=y("file-text",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ds=y("inbox",[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]]);/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fs=y("lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gs=y("mic",[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]]);/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cs=y("search-x",[["path",{d:"m13.5 8.5-5 5",key:"1cs55j"}],["path",{d:"m8.5 8.5 5 5",key:"a8mexj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);var us=Object.defineProperty,g=(r,s,e,c)=>{for(var o=void 0,d=r.length-1,n;d>=0;d--)(n=r[d])&&(o=n(s,e,o)||o);return o&&us(s,e,o),o};const z=class extends q{constructor(){super(),this._hasIconSlot=!1,this._hasActionsSlot=!1,this.title="",this.subtitle="",this.buttonText="",this.size="md",this.bordered=!1,this.rounded=!1}_handleSlotChange(s){const e=s.target,c=e.name;c==="icon"?this._hasIconSlot=v(e):c==="actions"&&(this._hasActionsSlot=v(e)),this.requestUpdate()}firstUpdated(){setTimeout(()=>{var d,n;const s=(d=this.shadowRoot)==null?void 0:d.querySelector('slot[name="icon"]'),e=(n=this.shadowRoot)==null?void 0:n.querySelector('slot[name="actions"]'),c=this._hasIconSlot,o=this._hasActionsSlot;this._hasIconSlot=v(s),this._hasActionsSlot=v(e),(c!==this._hasIconSlot||o!==this._hasActionsSlot)&&this.requestUpdate()},0)}render(){const s=["empty",this.bordered?"empty-bordered":"",this.rounded?"empty-rounded":""].filter(Boolean).join(" ");return u`
      <!-- Main container with a part for the whole component -->
      <div class="${s}" role="region" aria-label="Empty state" part="ag-empty-state">

        <!-- Icon section part -->
        <div class="icon" part="ag-icon">
          <div class="icon-inner" part="ag-icon-inner">
            <slot name="icon" part="ag-icon-slot" @slotchange=${this._handleSlotChange}></slot>
            ${this._hasIconSlot?"":u`
              <!-- Fallback SVG part -->
              <svg
                part="ag-icon-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
            `}
          </div>
        </div>

        <!-- Title part -->
        ${this.title?u`<h3 class="title" part="ag-title">${this.title}</h3>`:""}

        <!-- Subtitle part -->
        ${this.subtitle?u`<p class="subtitle" part="ag-subtitle">${this.subtitle}</p>`:""}

        <!-- Actions container part -->
        <div class="actions" part="ag-actions">
          <slot name="actions" part="ag-actions-slot" @slotchange=${this._handleSlotChange}>
            ${this.buttonText&&!this._hasActionsSlot?u`
                <!-- Fallback button part -->
                <button type="button" part="ag-actions-button">${this.buttonText}</button>
              `:""}
          </slot>
        </div>
      </div>
    `}};z.styles=H`
    :host {
      display: block;
    }

    .empty {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: var(--ag-space-8);
      background: var(--ag-background-secondary);
    }

    .empty-bordered {
      background: transparent;
      border: var(--ag-border-width-1) solid var(--ag-border-subtle);
    }

    .empty-rounded {
      border-radius: var(--ag-radius-lg);
    }

    /* Icon sizing and containment */
    .icon {
      margin-block-end: var(--ag-space-1);
      color: var(--ag-neutral-400);
    }

    .icon-inner {
      width: var(--ag-empty-icon-size, var(--ag-space-10));
      height: var(--ag-empty-icon-size, var(--ag-space-10));
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    .icon-inner > ::slotted(*) {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    :host([size="sm"]) {
      --ag-empty-icon-size: var(--ag-space-8);
    }

    :host([size="lg"]) {
      --ag-empty-icon-size: var(--ag-space-12);
    }

    /* Title */
    .title {
      font-size: var(--ag-font-size-xl);
      margin-block-start: 0;
      margin-block-end: var(--ag-space-2);
      line-height: var(--ag-line-height-lg);
    }

    :host([size="sm"]) .title {
      font-size: var(--ag-font-size-lg);
    }

    :host([size="lg"]) .title {
      font-size: var(--ag-font-size-2x);
    }

    /* Subtitle */
    .subtitle {
      font-size: var(--ag-font-size-base);
      color: var(--ag-text-muted);
      /* The title will provide enough gap */
      margin-block-start: 0;
      margin-block-end: var(--ag-space-4);
      line-height: var(--ag-line-height-base);
    }

    :host([size="sm"]) .subtitle {
      font-size: var(--ag-font-size-sm);
      margin-block-end: var(--ag-space-3);
    }

    :host([size="lg"]) .subtitle {
      font-size: var(--ag-font-size-md);
      margin-block-end: var(--ag-space-6);
    }

    /* Actions */
    .actions {
      display: flex;
      flex-wrap: wrap;
      gap: var(--ag-space-2);
      justify-content: center;
    }
  `;let k=z;g([F({type:String})],k.prototype,"title");g([F({type:String})],k.prototype,"subtitle");g([F({type:String,attribute:"button-text"})],k.prototype,"buttonText");g([F({type:String,reflect:!0})],k.prototype,"size");g([F({type:Boolean})],k.prototype,"bordered");g([F({type:Boolean})],k.prototype,"rounded");g([F({type:Boolean,state:!0})],k.prototype,"_hasIconSlot");g([F({type:Boolean,state:!0})],k.prototype,"_hasActionsSlot");customElements.get("ag-empty-state")||customElements.define("ag-empty-state",k);const ys=[".bordered",".rounded","title","subtitle","buttonText","size"],ms={key:0,slot:"icon"},bs={key:1,slot:"actions"},vs=Z({__name:"VueEmptyState",props:{title:{default:""},subtitle:{default:""},buttonText:{default:""},size:{default:"md"},bordered:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1}},setup(r){const s=G();return(e,c)=>(b(),m("ag-empty-state",$({ref_key:"agComponent",ref:s,".bordered":r.bordered,".rounded":r.rounded,title:r.title,subtitle:r.subtitle,buttonText:r.buttonText,size:r.size},e.$attrs),[e.$slots.icon?(b(),m("span",ms,[A(e.$slots,"icon")])):x("",!0),e.$slots.actions?(b(),m("span",bs,[A(e.$slots,"actions")])):x("",!0)],48,ys))}}),Cs={name:"EmptyStateExamples",components:{VueEmptyState:vs,VueButton:J,SearchX:cs,Folder:hs,Heart:ps,Mail:ls,Plus:es,Upload:ns,FileText:ks,ShoppingCart:as,ArrowRight:ts,Inbox:ds,BarChart3:os,AlertCircle:W,Send:is,Lock:Fs,Sparkles:ss,Zap:Q,Rocket:K,Mic:gs},methods:{handleClearFilters(){console.log("Clearing filters...")}}},Bs={class:"mbe6"},Es={class:"mbe6"},fs={class:"mbe6"},ws={class:"mbe6"},xs={style:{display:"flex",gap:"0.5rem","justify-content":"center","flex-wrap":"wrap"}},As={style:{display:"flex",gap:"0.5rem","flex-wrap":"wrap","justify-content":"center"}},qs={class:"mbe6"},zs={style:{display:"flex",gap:"0.5rem","justify-content":"center","flex-wrap":"wrap"}},Ss={class:"mbe6"},Ds={style:{display:"flex",gap:"0.5rem","justify-content":"center","flex-wrap":"wrap"}},Vs={style:{display:"grid","grid-template-columns":"repeat(auto-fit, minmax(280px, 1fr))",gap:"var(--ag-space-4)"},class:"mbe6"},Ns={class:"mbe6"},Rs={class:"mbe6"},Ts={style:{display:"flex",gap:"0.5rem","flex-wrap":"wrap","justify-content":"center"}},js={style:{display:"flex",gap:"0.5rem","align-items":"center","justify-content":"center","flex-wrap":"wrap"}};function Ms(r,s,e,c,o,d){const n=p("VueEmptyState"),w=p("SearchX"),C=p("Folder"),S=p("Heart"),D=p("Mail"),l=p("VueButton"),V=p("Plus"),N=p("Upload"),R=p("FileText"),T=p("ShoppingCart"),j=p("ArrowRight"),M=p("Inbox"),I=p("BarChart3"),B=p("AlertCircle"),P=p("Send"),_=p("Lock"),L=p("Rocket"),U=p("Sparkles"),E=p("Mic");return b(),m("section",null,[s[19]||(s[19]=t("div",{class:"mbe4"},[t("h2",null,"Basic Empty State"),t("p",{class:"mbs2 mbe3"},"Simple empty state with title and subtitle")],-1)),i(n,{title:"No items found",subtitle:"Get started by creating your first item",class:"mbe6"}),s[20]||(s[20]=t("div",{class:"mbe4"},[t("h2",null,"With Action Button"),t("p",{class:"mbs2 mbe3"},"Include a primary action button using the buttonText prop")],-1)),i(n,{title:"No projects yet",subtitle:"Create your first project to get started",buttonText:"New Project",class:"mbe6 empty-state-with-button"}),s[21]||(s[21]=t("div",{class:"mbe4"},[t("h2",null,"Size Variants"),t("p",{class:"mbs2 mbe3"},"Choose from small, medium, or large sizes to fit your layout")],-1)),t("div",Bs,[i(n,{title:"No notifications",subtitle:"You're all caught up!",size:"sm",class:"mbe4"}),i(n,{title:"No activity",subtitle:"Recent activity will appear here",size:"md",class:"mbe4"}),i(n,{title:"Welcome!",subtitle:"Start your journey here",buttonText:"Get Started",size:"lg",class:"empty-state-with-button"})]),s[22]||(s[22]=t("div",{class:"mbe4"},[t("h2",null,"Bordered & Rounded"),t("p",{class:"mbs2 mbe3"},"Add visual separation with borders and rounded corners")],-1)),t("div",Es,[i(n,{title:"No data available",subtitle:"Upload a file to see your data",buttonText:"Upload File",bordered:!0,class:"empty-state-with-button mbe4"}),i(n,{title:"Empty folder",subtitle:"This folder contains no files yet",buttonText:"Add Files",rounded:!0,class:"empty-state-with-button mbe4"}),i(n,{title:"No messages",subtitle:"Send your first message",buttonText:"New Message",bordered:!0,rounded:!0,class:"empty-state-with-button"})]),s[23]||(s[23]=t("div",{class:"mbe4"},[t("h2",null,"Custom Icons"),t("p",{class:"mbs2 mbe3"},"Provide custom icons that match your context using the icon slot")],-1)),t("div",fs,[i(n,{title:"No search results",subtitle:"Try different keywords or remove filters",rounded:!0,size:"md",class:"mbe4"},{icon:a(()=>[i(w,{size:40,color:"#999"})]),_:1}),i(n,{title:"No files",subtitle:"Drag and drop files here",size:"md",bordered:!0,rounded:!0,class:"mbe4"},{icon:a(()=>[i(C,{size:56,color:"#999"})]),_:1}),i(n,{title:"No favorites yet",subtitle:"Mark items as favorites to see them here",rounded:!0,size:"md"},{icon:a(()=>[i(S,{size:32,color:"#ef4444"})]),_:1})]),s[24]||(s[24]=t("div",{class:"mbe4"},[t("h2",null,"Custom Actions"),t("p",{class:"mbs2 mbe3"},"Use the actions slot for complete control over buttons and interactions")],-1)),t("div",ws,[i(n,{title:"No team members",subtitle:"Invite people to collaborate",size:"md",bordered:!0,rounded:!0,class:"mbe4"},{actions:a(()=>[t("div",xs,[i(l,{variant:"primary",size:"sm",shape:"rounded"},{default:a(()=>[i(D,{size:16}),s[0]||(s[0]=t("span",{style:{"margin-inline-start":"4px"}},"Invite Members",-1))]),_:1}),i(l,{variant:"secondary",size:"sm",shape:"rounded"},{default:a(()=>[...s[1]||(s[1]=[h(" Learn More ",-1)])]),_:1})])]),_:1}),i(n,{title:"Start your journey",subtitle:"Choose how you want to begin",size:"md",bordered:!0,rounded:!0},{icon:a(()=>[i(C,{size:56,color:"#999"})]),actions:a(()=>[t("div",As,[i(l,{variant:"primary",size:"sm",shape:"rounded",isBordered:!0},{default:a(()=>[i(V,{size:16}),s[2]||(s[2]=t("span",{style:{"margin-inline-start":"4px"}},"Create New",-1))]),_:1}),i(l,{variant:"primary",size:"sm",shape:"rounded",isBordered:!0},{default:a(()=>[i(N,{size:16}),s[3]||(s[3]=t("span",{style:{"margin-inline-start":"4px"}},"Import Data",-1))]),_:1}),i(l,{variant:"primary",size:"sm",shape:"rounded",isBordered:!0},{default:a(()=>[i(R,{size:16}),s[4]||(s[4]=t("span",{style:{"margin-inline-start":"4px"}},"Use Template",-1))]),_:1})])]),_:1})]),s[25]||(s[25]=t("div",{class:"mbe4"},[t("h2",null,"Real-World Examples"),t("p",{class:"mbs2 mbe3"},"Common patterns for shopping cart, inbox, dashboard, and error states")],-1)),t("div",qs,[i(n,{title:"Your cart is empty",subtitle:"Add items to see them here",size:"md",bordered:!0,rounded:!0,class:"mbe4"},{icon:a(()=>[i(T,{size:48,color:"#999"})]),actions:a(()=>[i(l,{variant:"primary",shape:"rounded",size:"md"},{default:a(()=>[s[5]||(s[5]=h(" Continue Shopping ",-1)),i(j,{size:16,style:{"margin-inline-start":"4px"}})]),_:1})]),_:1}),i(n,{title:"Inbox Zero! 🎉",subtitle:"All caught up. No new messages.",size:"md",rounded:!0,class:"mbe4"},{icon:a(()=>[i(M,{size:40,color:"#10b981"})]),_:1}),i(n,{title:"No analytics data yet",subtitle:"Data will appear once you start tracking",bordered:!0,rounded:!0,class:"mbe4"},{icon:a(()=>[i(I,{size:56,color:"#6366f1"})]),actions:a(()=>[i(l,{isGhost:!0,size:"md"},{default:a(()=>[...s[6]||(s[6]=[h(" View Documentation ",-1)])]),_:1})]),_:1}),i(n,{title:"Something went wrong",subtitle:"Please try again or contact support",size:"md",rounded:!0,bordered:!0},{icon:a(()=>[i(B,{size:48,color:"#ef4444"})]),actions:a(()=>[t("div",zs,[i(l,{variant:"danger",shape:"rounded",isBordered:!0,size:"md"},{default:a(()=>[...s[7]||(s[7]=[h(" Try Again ",-1)])]),_:1}),i(l,{variant:"secondary",shape:"rounded",isBordered:!0,size:"md"},{default:a(()=>[s[8]||(s[8]=t("span",{style:{"margin-inline-end":"0.125rem"}},"Contact Support",-1)),i(P,{size:16})]),_:1})])]),_:1})]),s[26]||(s[26]=t("div",{class:"mbe4"},[t("h2",null,"State-Specific Variants"),t("p",{class:"mbs2 mbe3"},"Empty states for different scenarios with appropriate icons and actions")],-1)),t("div",Ss,[i(n,{title:"No matches found",subtitle:"Try adjusting your filters or search",size:"md",bordered:!0,class:"mbe4"},{icon:a(()=>[i(w,{size:40,color:"#999"})]),actions:a(()=>[i(l,{variant:"secondary",shape:"rounded",size:"sm",onClick:d.handleClearFilters},{default:a(()=>[...s[9]||(s[9]=[h(" Clear Filters ",-1)])]),_:1},8,["onClick"])]),_:1}),i(n,{title:"Action Required",subtitle:"This action cannot be undone",size:"md",bordered:!0,rounded:!0,class:"mbe4"},{icon:a(()=>[i(B,{size:48,color:"#f59e0b"})]),actions:a(()=>[t("div",Ds,[i(l,{variant:"warning",size:"md"},{default:a(()=>[...s[10]||(s[10]=[h(" Proceed Anyway ",-1)])]),_:1}),i(l,{variant:"secondary",size:"md"},{default:a(()=>[...s[11]||(s[11]=[h(" Cancel ",-1)])]),_:1})])]),_:1}),i(n,{title:"Access Required",subtitle:"You don't have permission to view this",size:"md",bordered:!0},{icon:a(()=>[i(_,{size:48,color:"#999"})]),actions:a(()=>[i(l,{variant:"primary",shape:"rounded",size:"md"},{default:a(()=>[...s[12]||(s[12]=[h(" Request Access ",-1)])]),_:1})]),_:1})]),s[27]||(s[27]=t("div",{class:"mbe4"},[t("h2",null,"Compact Size Showcase"),t("p",{class:"mbs2 mbe3"},"Small empty states work great in sidebars, cards, or dense layouts")],-1)),t("div",Vs,[i(n,{title:"No tasks",subtitle:"Create a task to get started",buttonText:"New Task",size:"sm",bordered:!0,rounded:!0,class:"empty-state-with-button"}),i(n,{title:"No events",subtitle:"Schedule your first event",buttonText:"Add Event",size:"sm",bordered:!0,rounded:!0,class:"empty-state-with-button"}),i(n,{title:"No contacts",subtitle:"Add contacts to your list",buttonText:"Add Contact",size:"sm",bordered:!0,rounded:!0,class:"empty-state-with-button"}),i(n,{title:"No notes",subtitle:"Jot down your first note",buttonText:"Create Note",size:"sm",bordered:!0,rounded:!0,class:"empty-state-with-button"})]),s[28]||(s[28]=t("div",{class:"mbe4"},[t("h2",null,"CSS Shadow Parts Customization"),t("p",{class:"mbs2 mbe3"},[h(" Use CSS Shadow Parts to customize appearance: "),t("code",null,"::part(ag-empty-state)"),h(", "),t("code",null,"::part(ag-icon)"),h(", "),t("code",null,"::part(ag-title)"),h(", "),t("code",null,"::part(ag-subtitle)"),h(", "),t("code",null,"::part(ag-actions)")])],-1)),t("div",Ns,[i(n,{title:"Colorful Accent",subtitle:"Icon with background circle",buttonText:"Start Now",bordered:!0,class:"custom-empty-state-3"},{icon:a(()=>[i(L,{size:48,color:"#f59e0b"})]),_:1})]),s[29]||(s[29]=t("div",{class:"mbe4"},[t("h2",null,"Minimal Empty States"),t("p",{class:"mbs2 mbe3"},"Simple empty states without icons for clean, understated designs")],-1)),t("div",Rs,[i(n,{title:"Nothing here yet",size:"sm",rounded:!0,class:"mbe4"}),i(n,{title:"No activity",subtitle:"Recent activity will appear here",size:"md",rounded:!0,class:"mbe4"}),i(n,{title:"Empty",rounded:!0,size:"md"})]),s[30]||(s[30]=t("div",{class:"mbe4"},[t("h2",null,"Large Welcome States"),t("p",{class:"mbs2 mbe3"},"Spacious layouts perfect for onboarding and full-page empty states")],-1)),i(n,{title:"Welcome to Your Dashboard",subtitle:"Add some content and you'll see it appear here. You'll be able to manage projects and collaborate with your team.",buttonText:"Get Started",size:"lg",bordered:!0,rounded:!0,class:"empty-state-with-button mbe6"},{icon:a(()=>[i(U,{size:48,color:"#6366f1"})]),_:1}),s[31]||(s[31]=t("div",{class:"mbe4"},[t("h2",null,"Multiple Button Variants"),t("p",{class:"mbs2 mbe3"},"Showcase different button styles in custom actions")],-1)),i(n,{title:"Choose your action",subtitle:"Different button styles for different purposes",size:"md",bordered:!0,rounded:!0,class:"mbe6"},{icon:a(()=>[i(B,{size:40,color:"#999"})]),actions:a(()=>[t("div",Ts,[i(l,{variant:"primary",size:"sm",shape:"rounded"},{default:a(()=>[...s[13]||(s[13]=[h(" Primary Action ",-1)])]),_:1}),i(l,{variant:"secondary",size:"sm",shape:"rounded",isBordered:!0},{default:a(()=>[...s[14]||(s[14]=[h(" Secondary ",-1)])]),_:1}),i(l,{size:"sm",shape:"rounded",isBordered:!0},{default:a(()=>[...s[15]||(s[15]=[h(" Default ",-1)])]),_:1})])]),_:1}),s[32]||(s[32]=t("div",{class:"mbe4"},[t("h2",null,"Button Size Variations"),t("p",{class:"mbs2 mbe3"},"Match button sizes to your empty state size for visual harmony")],-1)),i(n,{title:"Different Button Sizes",subtitle:"Choose the right size for your layout",size:"md",bordered:!0,rounded:!0,class:"mbe6"},{icon:a(()=>[i(C,{size:48,color:"#999"})]),actions:a(()=>[t("div",js,[i(l,{variant:"primary",size:"sm",shape:"rounded",isBordered:!0},{default:a(()=>[i(E,{size:14}),s[16]||(s[16]=t("span",{style:{"margin-inline-start":"4px"}},"Small",-1))]),_:1}),i(l,{variant:"primary",size:"md",shape:"rounded",isBordered:!0},{default:a(()=>[i(E,{size:18}),s[17]||(s[17]=t("span",{style:{"margin-inline-start":"4px"}},"Medium",-1))]),_:1}),i(l,{variant:"primary",size:"lg",shape:"rounded",isBordered:!0},{default:a(()=>[i(E,{size:24}),s[18]||(s[18]=t("span",{style:{"margin-inline-start":"4px"}},"Large",-1))]),_:1})])]),_:1})])}const Is=X(Cs,[["render",Ms],["__scopeId","data-v-466b1555"]]);class Ps extends q{createRenderRoot(){return this}render(){return u`
      <style>
        /* Force empty state components to have proper height */
        ag-empty-state {
          display: block;
          min-height: 200px;
        }

        ag-empty-state::part(ag-empty-state) {
          min-height: 200px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: var(--ag-space-6, 2rem) var(--ag-space-4, 1rem);
        }

        /* Size-specific min heights */
        ag-empty-state[size="sm"]::part(ag-empty-state) {
          min-height: 180px;
          padding: var(--ag-space-5, 1.5rem) var(--ag-space-4, 1rem);
        }

        ag-empty-state[size="md"]::part(ag-empty-state) {
          min-height: 220px;
          padding: var(--ag-space-6, 2rem) var(--ag-space-4, 1rem);
        }

        ag-empty-state[size="lg"]::part(ag-empty-state) {
          min-height: 300px;
          padding: var(--ag-space-8, 3rem) var(--ag-space-4, 1rem);
        }

        /* Add spacing for icon */
        ag-empty-state::part(ag-icon) {
          margin-bottom: var(--ag-space-4, 1.5rem);
        }

        /* Shared action styles for buttonText prop */
        .empty-state-with-button::part(ag-actions) {
          display: flex;
          justify-content: center;
          margin-block-start: var(--ag-space-4);
        }

        .empty-state-with-button::part(ag-title) {
          margin-block-start: var(--ag-space-4);
        }

        .empty-state-with-button::part(ag-actions-button) {
          background: #09090b;
          color: white;
          border-radius: 0.25rem;
          padding: var(--ag-space-4) var(--ag-space-6);
          border: none;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .empty-state-with-button::part(ag-actions-button):hover {
          background: #18181b;
          transform: translateY(-1px);
        }

        /* Custom Empty State 3 - Colorful Icon Accent */
        .custom-empty-state-3::part(ag-icon) {
          color: #f59e0b;
          background: rgba(245, 158, 11, 0.1);
          border-radius: 50%;
          padding: var(--ag-space-4);
        }

        .custom-empty-state-3::part(ag-title) {
          color: var(--ag-text-primary);
          font-weight: 700;
        }

        .custom-empty-state-3::part(ag-actions-button) {
          background: #f59e0b;
          color: var(--ag-neutral-900);
          border: none;
          border-radius: 8px;
          padding: 0.75rem 1.5rem;
          font-weight: 600;
          box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);
        }
      </style>
      <section>
        <div class="mbe4">
          <h2>Basic Empty State</h2>
          <p class="mbs2 mbe3">Simple empty state with title and subtitle</p>
        </div>
        <ag-empty-state
          title="No items found"
          subtitle="Get started by creating your first item"
          class="mbe6"
        ></ag-empty-state>

        <div class="mbe4">
          <h2>With Action Button</h2>
          <p class="mbs2 mbe3">
            Include a primary action button using the buttonText prop
          </p>
        </div>
        <ag-empty-state
          title="No projects yet"
          subtitle="Create your first project to get started"
          buttonText="New Project"
          class="mbe6 empty-state-with-button"
        ></ag-empty-state>

        <div class="mbe4">
          <h2>Size Variants</h2>
          <p class="mbs2 mbe3">
            Choose from small, medium, or large sizes to fit your layout
          </p>
        </div>
        <div class="mbe6">
          <ag-empty-state
            title="No notifications"
            subtitle="You're all caught up!"
            size="sm"
            class="mbe4"
          ></ag-empty-state>
          <ag-empty-state
            title="No activity"
            subtitle="Recent activity will appear here"
            size="md"
            class="mbe4"
          ></ag-empty-state>
          <ag-empty-state
            title="Welcome!"
            subtitle="Start your journey here"
            buttonText="Get Started"
            size="lg"
            class="empty-state-with-button"
          ></ag-empty-state>
        </div>

        <div class="mbe4">
          <h2>Bordered & Rounded</h2>
          <p class="mbs2 mbe3">
            Add visual separation with borders and rounded corners
          </p>
        </div>
        <div class="mbe6">
          <ag-empty-state
            title="No data available"
            subtitle="Upload a file to see your data"
            buttonText="Upload File"
            isBordered
            class="empty-state-with-button mbe4"
          ></ag-empty-state>
          <ag-empty-state
            title="Empty folder"
            subtitle="This folder contains no files yet"
            buttonText="Add Files"
            isRounded
            class="empty-state-with-button mbe4"
          ></ag-empty-state>
          <ag-empty-state
            title="No messages"
            subtitle="Send your first message"
            buttonText="New Message"
            isBordered
            isRounded
            class="empty-state-with-button"
          ></ag-empty-state>
        </div>

        <div class="mbe4">
          <h2>Custom Icons</h2>
          <p class="mbs2 mbe3">
            Provide custom icons that match your context using the icon slot
          </p>
        </div>
        <div class="mbe6">
          <ag-empty-state
            title="No search results"
            subtitle="Try different keywords or remove filters"
            isRounded
            size="md"
            class="mbe4"
          >
            <ag-icon slot="icon" size="40" no-fill>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#999" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-x">
                <path d="m13.5 8.5-5 5"/><path d="m8.5 8.5 5 5"/><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
              </svg>
            </ag-icon>
          </ag-empty-state>

          <ag-empty-state
            title="No files"
            subtitle="Drag and drop files here"
            size="md"
            isBordered
            isRounded
            class="mbe4"
          >
            <ag-icon slot="icon" size="56" no-fill>
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="#999" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder">
                <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/>
              </svg>
            </ag-icon>
          </ag-empty-state>

          <ag-empty-state
            title="No favorites yet"
            subtitle="Mark items as favorites to see them here"
            isRounded
            size="md"
          >
            <ag-icon slot="icon" size="32" no-fill>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#ef4444" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
              </svg>
            </ag-icon>
          </ag-empty-state>
        </div>

        <div class="mbe4">
          <h2>Custom Actions</h2>
          <p class="mbs2 mbe3">
            Use the actions slot for complete control over buttons and
            interactions
          </p>
        </div>
        <div class="mbe6">
          <ag-empty-state
            title="No team members"
            subtitle="Invite people to collaborate"
            size="md"
            isBordered
            isRounded
            class="mbe4"
          >
            <div
              slot="actions"
              style="display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap;"
            >
              <ag-button variant="primary" size="sm" shape="rounded">
                <ag-icon size="16" no-fill>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail">
                    <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </ag-icon>
                <span style="margin-inline-start: 4px;">Invite Members</span>
              </ag-button>
              <ag-button variant="secondary" size="sm" shape="rounded">
                Learn More
              </ag-button>
            </div>
          </ag-empty-state>

          <ag-empty-state
            title="Start your journey"
            subtitle="Choose how you want to begin"
            size="md"
            isBordered
            isRounded
          >
            <ag-icon slot="icon" size="56" no-fill>
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="#999" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder">
                <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/>
              </svg>
            </ag-icon>
            <div
              slot="actions"
              style="display: flex; gap: 0.5rem; flex-wrap: wrap; justify-content: center;"
            >
              <ag-button variant="primary" size="sm" shape="rounded" isBordered>
                <ag-icon size="16" no-fill>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus">
                    <path d="M5 12h14"/><path d="M12 5v14"/>
                  </svg>
                </ag-icon>
                <span style="margin-inline-start: 4px;">Create New</span>
              </ag-button>
              <ag-button variant="primary" size="sm" shape="rounded" isBordered>
                <ag-icon size="16" no-fill>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-upload">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/>
                  </svg>
                </ag-icon>
                <span style="margin-inline-start: 4px;">Import Data</span>
              </ag-button>
              <ag-button variant="primary" size="sm" shape="rounded" isBordered>
                <ag-icon size="16" no-fill>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/>
                  </svg>
                </ag-icon>
                <span style="margin-inline-start: 4px;">Use Template</span>
              </ag-button>
            </div>
          </ag-empty-state>
        </div>

        <div class="mbe4">
          <h2>Real-World Examples</h2>
          <p class="mbs2 mbe3">
            Common patterns for shopping cart, inbox, dashboard, and error
            states
          </p>
        </div>
        <div class="mbe6">
          <!-- Shopping Cart -->
          <ag-empty-state
            title="Your cart is empty"
            subtitle="Add items to see them here"
            size="md"
            isBordered
            isRounded
            class="mbe4"
          >
            <ag-icon slot="icon" size="48" no-fill>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#999" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart">
                <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.16"/>
              </svg>
            </ag-icon>
            <div slot="actions">
              <ag-button variant="primary" shape="rounded" size="md">
                Continue Shopping
                <ag-icon size="16" no-fill style="margin-inline-start: 4px;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
                    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                  </svg>
                </ag-icon>
              </ag-button>
            </div>
          </ag-empty-state>

          <!-- Inbox Zero -->
          <ag-empty-state
            title="Inbox Zero! 🎉"
            subtitle="All caught up. No new messages."
            size="md"
            isRounded
            class="mbe4"
          >
            <ag-icon slot="icon" size="40" no-fill>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#10b981" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-inbox">
                <path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>
              </svg>
            </ag-icon>
          </ag-empty-state>

          <!-- Dashboard -->
          <ag-empty-state
            title="No analytics data yet"
            subtitle="Data will appear once you start tracking"
            isBordered
            isRounded
            class="mbe4"
          >
            <ag-icon slot="icon" size="56" no-fill>
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="#6366f1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bar-chart-3">
                <path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>
              </svg>
            </ag-icon>
            <div slot="actions">
              <ag-button isGhost size="md"> View Documentation </ag-button>
            </div>
          </ag-empty-state>

          <!-- Error State -->
          <ag-empty-state
            title="Something went wrong"
            subtitle="Please try again or contact support"
            size="md"
            isRounded
            isBordered
          >
            <ag-icon slot="icon" size="48" no-fill>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#ef4444" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-alert-circle">
                <circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>
              </svg>
            </ag-icon>
            <div
              slot="actions"
              style="display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap;"
            >
              <ag-button
                variant="danger"
                shape="rounded"
                isBordered
                size="md"
              >
                Try Again
              </ag-button>
              <ag-button
                variant="secondary"
                shape="rounded"
                isBordered
                size="md"
              >
                <span style="margin-inline-end: 0.125rem;"
                  >Contact Support</span
                >
                <ag-icon size="16" no-fill>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send">
                    <path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>
                  </svg>
                </ag-icon>
              </ag-button>
            </div>
          </ag-empty-state>
        </div>

        <div class="mbe4">
          <h2>State-Specific Variants</h2>
          <p class="mbs2 mbe3">
            Empty states for different scenarios with appropriate icons and
            actions
          </p>
        </div>
        <div class="mbe6">
          <!-- No Results -->
          <ag-empty-state
            title="No matches found"
            subtitle="Try adjusting your filters or search"
            size="md"
            isBordered
            class="mbe4"
          >
            <ag-icon slot="icon" size="40" no-fill>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#999" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-x">
                <path d="m13.5 8.5-5 5"/><path d="m8.5 8.5 5 5"/><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
              </svg>
            </ag-icon>
            <div slot="actions">
              <ag-button
                variant="secondary"
                shape="rounded"
                size="sm"
                @click=${()=>console.log("clicked")}
              >
                Clear Filters
              </ag-button>
            </div>
          </ag-empty-state>

          <!-- Warning State -->
          <ag-empty-state
            title="Action Required"
            subtitle="This action cannot be undone"
            size="md"
            isBordered
            isRounded
            class="mbe4"
          >
            <ag-icon slot="icon" size="48" no-fill>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#f59e0b" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-alert-circle">
                <circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>
              </svg>
            </ag-icon>
            <div
              slot="actions"
              style="display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap;"
            >
              <ag-button variant="warning" size="md">
                Proceed Anyway
              </ag-button>
              <ag-button variant="secondary" size="md"> Cancel </ag-button>
            </div>
          </ag-empty-state>

          <!-- Access Denied -->
          <ag-empty-state
            title="Access Required"
            subtitle="You don't have permission to view this"
            size="md"
            isBordered
          >
            <ag-icon slot="icon" size="48" no-fill>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#999" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lock">
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </ag-icon>
            <div slot="actions">
              <ag-button variant="primary" shape="rounded" size="md">
                Request Access
              </ag-button>
            </div>
          </ag-empty-state>
        </div>

        <div class="mbe4">
          <h2>Compact Size Showcase</h2>
          <p class="mbs2 mbe3">
            Small empty states work great in sidebars, cards, or dense layouts
          </p>
        </div>
        <div
          style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: var(--ag-space-4);"
          class="mbe6"
        >
          <ag-empty-state
            title="No tasks"
            subtitle="Create a task to get started"
            buttonText="New Task"
            size="sm"
            isBordered
            isRounded
            class="empty-state-with-button"
          ></ag-empty-state>
          <ag-empty-state
            title="No events"
            subtitle="Schedule your first event"
            buttonText="Add Event"
            size="sm"
            isBordered
            isRounded
            class="empty-state-with-button"
          ></ag-empty-state>
          <ag-empty-state
            title="No contacts"
            subtitle="Add contacts to your list"
            buttonText="Add Contact"
            size="sm"
            isBordered
            isRounded
            class="empty-state-with-button"
          ></ag-empty-state>
          <ag-empty-state
            title="No notes"
            subtitle="Jot down your first note"
            buttonText="Create Note"
            size="sm"
            isBordered
            isRounded
            class="empty-state-with-button"
          ></ag-empty-state>
        </div>

        <div class="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
          <p class="mbs2 mbe3">
            Use CSS Shadow Parts to customize appearance:
            <code>::part(ag-empty-state)</code>,
            <code>::part(ag-icon)</code>, <code>::part(ag-title)</code>,
            <code>::part(ag-subtitle)</code>, <code>::part(ag-actions)</code>
          </p>
        </div>
        <div class="mbe6">
          <!-- Colorful Accent -->
          <ag-empty-state
            title="Colorful Accent"
            subtitle="Icon with background circle"
            buttonText="Start Now"
            isBordered
            class="custom-empty-state-3"
          >
            <ag-icon slot="icon" size="48" no-fill>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#f59e0b" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.3.09-3.1a2.18 2.18 0 0 0-3.11-.1z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
              </svg>
            </ag-icon>
          </ag-empty-state>
        </div>

        <div class="mbe4">
          <h2>Minimal Empty States</h2>
          <p class="mbs2 mbe3">
            Simple empty states without icons for clean, understated designs
          </p>
        </div>
        <div class="mbe6">
          <ag-empty-state
            title="Nothing here yet"
            size="sm"
            isRounded
            class="mbe4"
          ></ag-empty-state>
          <ag-empty-state
            title="No activity"
            subtitle="Recent activity will appear here"
            size="md"
            isRounded
            class="mbe4"
          ></ag-empty-state>
          <ag-empty-state
            title="Empty"
            isRounded
            size="md"
          ></ag-empty-state>
        </div>

        <div class="mbe4">
          <h2>Large Welcome States</h2>
          <p class="mbs2 mbe3">
            Spacious layouts perfect for onboarding and full-page empty states
          </p>
        </div>
        <ag-empty-state
          title="Welcome to Your Dashboard"
          subtitle="Add some content and you'll see it appear here. You'll be able to manage projects and collaborate with your team."
          buttonText="Get Started"
          size="lg"
          isBordered
          isRounded
          class="empty-state-with-button mbe6"
        >
          <ag-icon slot="icon" size="48" no-fill>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#6366f1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles">
              <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/>
            </svg>
          </ag-icon>
        </ag-empty-state>

        <div class="mbe4">
          <h2>Multiple Button Variants</h2>
          <p class="mbs2 mbe3">
            Showcase different button styles in custom actions
          </p>
        </div>
        <ag-empty-state
          title="Choose your action"
          subtitle="Different button styles for different purposes"
          size="md"
          isBordered
          isRounded
          class="mbe6"
        >
          <ag-icon slot="icon" size="40" no-fill>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#999" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-alert-circle">
              <circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>
            </svg>
          </ag-icon>
          <div
            slot="actions"
            style="display: flex; gap: 0.5rem; flex-wrap: wrap; justify-content: center;"
          >
            <ag-button variant="primary" size="sm" shape="rounded">
              Primary Action
            </ag-button>
            <ag-button
              variant="secondary"
              size="sm"
              shape="rounded"
              isBordered
            >
              Secondary
            </ag-button>
            <ag-button size="sm" shape="rounded" isBordered>
              Default
            </ag-button>
          </div>
        </ag-empty-state>

        <div class="mbe4">
          <h2>Button Size Variations</h2>
          <p class="mbs2 mbe3">
            Match button sizes to your empty state size for visual harmony
          </p>
        </div>
        <ag-empty-state
          title="Different Button Sizes"
          subtitle="Choose the right size for your layout"
          size="md"
          isBordered
          isRounded
          class="mbe6"
        >
          <ag-icon slot="icon" size="48" no-fill>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#999" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder">
              <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/>
            </svg>
          </ag-icon>
          <div
            slot="actions"
            style="display: flex; gap: 0.5rem; align-items: center; justify-content: center; flex-wrap: wrap;"
          >
            <ag-button variant="primary" size="sm" shape="rounded" isBordered>
              <ag-icon size="14" no-fill>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mic">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/>
                </svg>
              </ag-icon>
              <span style="margin-inline-start: 4px;">Small</span>
            </ag-button>
            <ag-button variant="primary" size="md" shape="rounded" isBordered>
              <ag-icon size="18" no-fill>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mic">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/>
                </svg>
              </ag-icon>
              <span style="margin-inline-start: 4px;">Medium</span>
            </ag-button>
            <ag-button variant="primary" size="lg" shape="rounded" isBordered>
              <ag-icon size="24" no-fill>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mic">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/>
                </svg>
              </ag-icon>
              <span style="margin-inline-start: 4px;">Large</span>
            </ag-button>
          </div>
        </ag-empty-state>
      </section>
    `}}customElements.define("empty-state-lit-examples",Ps);const _s=`<template>
  <section>
    <div class="mbe4">
      <h2>Basic Empty State</h2>
      <p class="mbs2 mbe3">Simple empty state with title and subtitle</p>
    </div>
    <VueEmptyState
      title="No items found"
      subtitle="Get started by creating your first item"
      class="mbe6"
    />

    <div class="mbe4">
      <h2>With Action Button</h2>
      <p class="mbs2 mbe3">Include a primary action button using the buttonText prop</p>
    </div>
    <VueEmptyState
      title="No projects yet"
      subtitle="Create your first project to get started"
      buttonText="New Project"
      class="mbe6 empty-state-with-button"
    />

    <div class="mbe4">
      <h2>Size Variants</h2>
      <p class="mbs2 mbe3">Choose from small, medium, or large sizes to fit your layout</p>
    </div>
    <div class="mbe6">
      <VueEmptyState
        title="No notifications"
        subtitle="You're all caught up!"
        size="sm"
        class="mbe4"
      />
      <VueEmptyState
        title="No activity"
        subtitle="Recent activity will appear here"
        size="md"
        class="mbe4"
      />
      <VueEmptyState
        title="Welcome!"
        subtitle="Start your journey here"
        buttonText="Get Started"
        size="lg"
        class="empty-state-with-button"
      />
    </div>

    <div class="mbe4">
      <h2>Bordered & Rounded</h2>
      <p class="mbs2 mbe3">Add visual separation with borders and rounded corners</p>
    </div>
    <div class="mbe6">
      <VueEmptyState
        title="No data available"
        subtitle="Upload a file to see your data"
        buttonText="Upload File"
        :bordered="true"
        class="empty-state-with-button mbe4"
      />
      <VueEmptyState
        title="Empty folder"
        subtitle="This folder contains no files yet"
        buttonText="Add Files"
        :rounded="true"
        class="empty-state-with-button mbe4"
      />
      <VueEmptyState
        title="No messages"
        subtitle="Send your first message"
        buttonText="New Message"
        :bordered="true"
        :rounded="true"
        class="empty-state-with-button"
      />
    </div>

    <div class="mbe4">
      <h2>Custom Icons</h2>
      <p class="mbs2 mbe3">Provide custom icons that match your context using the icon slot</p>
    </div>
    <div class="mbe6">
      <VueEmptyState
        title="No search results"
        subtitle="Try different keywords or remove filters"
        :rounded="true"
        size="md"
        class="mbe4"
      >
        <template #icon>
          <SearchX
            :size="40"
            color="#999"
          />
        </template>
      </VueEmptyState>

      <VueEmptyState
        title="No files"
        subtitle="Drag and drop files here"
        size="md"
        :bordered="true"
        :rounded="true"
        class="mbe4"
      >
        <template #icon>
          <Folder
            :size="56"
            color="#999"
          />
        </template>
      </VueEmptyState>

      <VueEmptyState
        title="No favorites yet"
        subtitle="Mark items as favorites to see them here"
        :rounded="true"
        size="md"
      >
        <template #icon>
          <Heart
            :size="32"
            color="#ef4444"
          />
        </template>
      </VueEmptyState>
    </div>

    <div class="mbe4">
      <h2>Custom Actions</h2>
      <p class="mbs2 mbe3">Use the actions slot for complete control over buttons and interactions</p>
    </div>
    <div class="mbe6">
      <VueEmptyState
        title="No team members"
        subtitle="Invite people to collaborate"
        size="md"
        :bordered="true"
        :rounded="true"
        class="mbe4"
      >
        <template #actions>
          <div style="display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap;">
            <VueButton
              variant="primary"
              size="sm"
              shape="rounded"
            >
              <Mail :size="16" />
              <span style="margin-inline-start: 4px;">Invite Members</span>
            </VueButton>
            <VueButton
              variant="secondary"
              size="sm"
              shape="rounded"
            >
              Learn More
            </VueButton>
          </div>
        </template>
      </VueEmptyState>

      <VueEmptyState
        title="Start your journey"
        subtitle="Choose how you want to begin"
        size="md"
        :bordered="true"
        :rounded="true"
      >
        <template #icon>
          <Folder
            :size="56"
            color="#999"
          />
        </template>
        <template #actions>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; justify-content: center;">
            <VueButton
              variant="primary"
              size="sm"
              shape="rounded"
              :isBordered="true"
            >
              <Plus :size="16" />
              <span style="margin-inline-start: 4px;">Create New</span>
            </VueButton>
            <VueButton
              variant="primary"
              size="sm"
              shape="rounded"
              :isBordered="true"
            >
              <Upload :size="16" />
              <span style="margin-inline-start: 4px;">Import Data</span>
            </VueButton>
            <VueButton
              variant="primary"
              size="sm"
              shape="rounded"
              :isBordered="true"
            >
              <FileText :size="16" />
              <span style="margin-inline-start: 4px;">Use Template</span>
            </VueButton>
          </div>
        </template>
      </VueEmptyState>
    </div>

    <div class="mbe4">
      <h2>Real-World Examples</h2>
      <p class="mbs2 mbe3">Common patterns for shopping cart, inbox, dashboard, and error states</p>
    </div>
    <div class="mbe6">
      <!-- Shopping Cart -->
      <VueEmptyState
        title="Your cart is empty"
        subtitle="Add items to see them here"
        size="md"
        :bordered="true"
        :rounded="true"
        class="mbe4"
      >
        <template #icon>
          <ShoppingCart
            :size="48"
            color="#999"
          />
        </template>
        <template #actions>
          <VueButton
            variant="primary"
            shape="rounded"
            size="md"
          >
            Continue Shopping
            <ArrowRight
              :size="16"
              style="margin-inline-start: 4px;"
            />
          </VueButton>
        </template>
      </VueEmptyState>

      <!-- Inbox Zero -->
      <VueEmptyState
        title="Inbox Zero! 🎉"
        subtitle="All caught up. No new messages."
        size="md"
        :rounded="true"
        class="mbe4"
      >
        <template #icon>
          <Inbox
            :size="40"
            color="#10b981"
          />
        </template>
      </VueEmptyState>

      <!-- Dashboard -->
      <VueEmptyState
        title="No analytics data yet"
        subtitle="Data will appear once you start tracking"
        :bordered="true"
        :rounded="true"
        class="mbe4"
      >
        <template #icon>
          <BarChart3
            :size="56"
            color="#6366f1"
          />
        </template>
        <template #actions>
          <VueButton
            :isGhost="true"
            size="md"
          >
            View Documentation
          </VueButton>
        </template>
      </VueEmptyState>

      <!-- Error State -->
      <VueEmptyState
        title="Something went wrong"
        subtitle="Please try again or contact support"
        size="md"
        :rounded="true"
        :bordered="true"
      >
        <template #icon>
          <AlertCircle
            :size="48"
            color="#ef4444"
          />
        </template>
        <template #actions>
          <div style="display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap;">
            <VueButton
              variant="danger"
              shape="rounded"
              :isBordered="true"
              size="md"
            >
              Try Again
            </VueButton>
            <VueButton
              variant="secondary"
              shape="rounded"
              :isBordered="true"
              size="md"
            >
              <span style="margin-inline-end: 0.125rem;">Contact Support</span>
              <Send :size="16" />
            </VueButton>
          </div>
        </template>
      </VueEmptyState>
    </div>

    <div class="mbe4">
      <h2>State-Specific Variants</h2>
      <p class="mbs2 mbe3">Empty states for different scenarios with appropriate icons and actions</p>
    </div>
    <div class="mbe6">
      <!-- No Results -->
      <VueEmptyState
        title="No matches found"
        subtitle="Try adjusting your filters or search"
        size="md"
        :bordered="true"
        class="mbe4"
      >
        <template #icon>
          <SearchX
            :size="40"
            color="#999"
          />
        </template>
        <template #actions>
          <VueButton
            variant="secondary"
            shape="rounded"
            size="sm"
            @click="handleClearFilters"
          >
            Clear Filters
          </VueButton>
        </template>
      </VueEmptyState>

      <!-- Warning State -->
      <VueEmptyState
        title="Action Required"
        subtitle="This action cannot be undone"
        size="md"
        :bordered="true"
        :rounded="true"
        class="mbe4"
      >
        <template #icon>
          <AlertCircle
            :size="48"
            color="#f59e0b"
          />
        </template>
        <template #actions>
          <div style="display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap;">
            <VueButton
              variant="warning"
              size="md"
            >
              Proceed Anyway
            </VueButton>
            <VueButton
              variant="secondary"
              size="md"
            >
              Cancel
            </VueButton>
          </div>
        </template>
      </VueEmptyState>

      <!-- Access Denied -->
      <VueEmptyState
        title="Access Required"
        subtitle="You don't have permission to view this"
        size="md"
        :bordered="true"
      >
        <template #icon>
          <Lock
            :size="48"
            color="#999"
          />
        </template>
        <template #actions>
          <VueButton
            variant="primary"
            shape="rounded"
            size="md"
          >
            Request Access
          </VueButton>
        </template>
      </VueEmptyState>
    </div>

    <div class="mbe4">
      <h2>Compact Size Showcase</h2>
      <p class="mbs2 mbe3">Small empty states work great in sidebars, cards, or dense layouts</p>
    </div>
    <div
      style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: var(--ag-space-4);"
      class="mbe6"
    >
      <VueEmptyState
        title="No tasks"
        subtitle="Create a task to get started"
        buttonText="New Task"
        size="sm"
        :bordered="true"
        :rounded="true"
        class="empty-state-with-button"
      />
      <VueEmptyState
        title="No events"
        subtitle="Schedule your first event"
        buttonText="Add Event"
        size="sm"
        :bordered="true"
        :rounded="true"
        class="empty-state-with-button"
      />
      <VueEmptyState
        title="No contacts"
        subtitle="Add contacts to your list"
        buttonText="Add Contact"
        size="sm"
        :bordered="true"
        :rounded="true"
        class="empty-state-with-button"
      />
      <VueEmptyState
        title="No notes"
        subtitle="Jot down your first note"
        buttonText="Create Note"
        size="sm"
        :bordered="true"
        :rounded="true"
        class="empty-state-with-button"
      />
    </div>

    <div class="mbe4">
      <h2>CSS Shadow Parts Customization</h2>
      <p class="mbs2 mbe3">
        Use CSS Shadow Parts to customize appearance:
        <code>::part(ag-empty-state)</code>,
        <code>::part(ag-icon)</code>,
        <code>::part(ag-title)</code>,
        <code>::part(ag-subtitle)</code>,
        <code>::part(ag-actions)</code>
      </p>
    </div>
    <div class="mbe6">
      <!-- Colorful Accent -->
      <VueEmptyState
        title="Colorful Accent"
        subtitle="Icon with background circle"
        buttonText="Start Now"
        :bordered="true"
        class="custom-empty-state-3"
      >
        <template #icon>
          <Rocket
            :size="48"
            color="#f59e0b"
          />
        </template>
      </VueEmptyState>
    </div>

    <div class="mbe4">
      <h2>Minimal Empty States</h2>
      <p class="mbs2 mbe3">Simple empty states without icons for clean, understated designs</p>
    </div>
    <div class="mbe6">
      <VueEmptyState
        title="Nothing here yet"
        size="sm"
        :rounded="true"
        class="mbe4"
      />
      <VueEmptyState
        title="No activity"
        subtitle="Recent activity will appear here"
        size="md"
        :rounded="true"
        class="mbe4"
      />
      <VueEmptyState
        title="Empty"
        :rounded="true"
        size="md"
      />
    </div>

    <div class="mbe4">
      <h2>Large Welcome States</h2>
      <p class="mbs2 mbe3">Spacious layouts perfect for onboarding and full-page empty states</p>
    </div>
    <VueEmptyState
      title="Welcome to Your Dashboard"
      subtitle="Add some content and you'll see it appear here. You'll be able to manage projects and collaborate with your team."
      buttonText="Get Started"
      size="lg"
      :bordered="true"
      :rounded="true"
      class="empty-state-with-button mbe6"
    >
      <template #icon>
        <Sparkles
          :size="48"
          color="#6366f1"
        />
      </template>
    </VueEmptyState>

    <div class="mbe4">
      <h2>Multiple Button Variants</h2>
      <p class="mbs2 mbe3">Showcase different button styles in custom actions</p>
    </div>
    <VueEmptyState
      title="Choose your action"
      subtitle="Different button styles for different purposes"
      size="md"
      :bordered="true"
      :rounded="true"
      class="mbe6"
    >
      <template #icon>
        <AlertCircle
          :size="40"
          color="#999"
        />
      </template>
      <template #actions>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; justify-content: center;">
          <VueButton
            variant="primary"
            size="sm"
            shape="rounded"
          >
            Primary Action
          </VueButton>
          <VueButton
            variant="secondary"
            size="sm"
            shape="rounded"
            :isBordered="true"
          >
            Secondary
          </VueButton>
          <VueButton
            size="sm"
            shape="rounded"
            :isBordered="true"
          >
            Default
          </VueButton>
        </div>
      </template>
    </VueEmptyState>

    <div class="mbe4">
      <h2>Button Size Variations</h2>
      <p class="mbs2 mbe3">Match button sizes to your empty state size for visual harmony</p>
    </div>
    <VueEmptyState
      title="Different Button Sizes"
      subtitle="Choose the right size for your layout"
      size="md"
      :bordered="true"
      :rounded="true"
      class="mbe6"
    >
      <template #icon>
        <Folder
          :size="48"
          color="#999"
        />
      </template>
      <template #actions>
        <div style="display: flex; gap: 0.5rem; align-items: center; justify-content: center; flex-wrap: wrap;">
          <VueButton
            variant="primary"
            size="sm"
            shape="rounded"
            :isBordered="true"
          >
            <Mic :size="14" />
            <span style="margin-inline-start: 4px;">Small</span>
          </VueButton>
          <VueButton
            variant="primary"
            size="md"
            shape="rounded"
            :isBordered="true"
          >
            <Mic :size="18" />
            <span style="margin-inline-start: 4px;">Medium</span>
          </VueButton>
          <VueButton
            variant="primary"
            size="lg"
            shape="rounded"
            :isBordered="true"
          >
            <Mic :size="24" />
            <span style="margin-inline-start: 4px;">Large</span>
          </VueButton>
        </div>
      </template>
    </VueEmptyState>
  </section>
</template>

<script>
import { VueEmptyState } from "agnosticui-core/empty-state/vue";
import VueButton from "agnosticui-core/button/vue";
import {
  SearchX,
  Folder,
  Heart,
  Mail,
  Plus,
  Upload,
  FileText,
  ShoppingCart,
  ArrowRight,
  Inbox,
  BarChart3,
  AlertCircle,
  Send,
  Lock,
  Sparkles,
  Zap,
  Rocket,
  Mic,
} from "lucide-vue-next";

export default {
  name: "EmptyStateExamples",
  components: {
    VueEmptyState,
    VueButton,
    SearchX,
    Folder,
    Heart,
    Mail,
    Plus,
    Upload,
    FileText,
    ShoppingCart,
    ArrowRight,
    Inbox,
    BarChart3,
    AlertCircle,
    Send,
    Lock,
    Sparkles,
    Zap,
    Rocket,
    Mic,
  },
  methods: {
    handleClearFilters() {
      console.log("Clearing filters...");
    },
  },
};
<\/script>

<style scoped>
/* Force empty state components to have proper height */
ag-empty-state {
  display: block;
  min-height: 200px;
}

ag-empty-state::part(ag-empty-state) {
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: var(--ag-space-6, 2rem) var(--ag-space-4, 1rem);
}

/* Size-specific min heights */
ag-empty-state[size="sm"]::part(ag-empty-state) {
  min-height: 180px;
  padding: var(--ag-space-5, 1.5rem) var(--ag-space-4, 1rem);
}

ag-empty-state[size="md"]::part(ag-empty-state) {
  min-height: 220px;
  padding: var(--ag-space-6, 2rem) var(--ag-space-4, 1rem);
}

ag-empty-state[size="lg"]::part(ag-empty-state) {
  min-height: 300px;
  padding: var(--ag-space-8, 3rem) var(--ag-space-4, 1rem);
}

/* Add spacing for icon */
ag-empty-state::part(ag-icon) {
  margin-bottom: var(--ag-space-4, 1.5rem);
}

/* Shared action styles for buttonText prop */
.empty-state-with-button::part(ag-actions) {
  display: flex;
  justify-content: center;
  margin-block-start: var(--ag-space-4);
}

.empty-state-with-button::part(ag-title) {
  margin-block-start: var(--ag-space-4);
}

.empty-state-with-button::part(ag-actions-button) {
  background: #09090b;
  color: white;
  border-radius: 0.25rem;
  padding: var(--ag-space-4) var(--ag-space-6);
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.empty-state-with-button::part(ag-actions-button):hover {
  background: #18181b;
  transform: translateY(-1px);
}

/* Custom Empty State 3 - Colorful Icon Accent */
.custom-empty-state-3::part(ag-icon) {
  color: #f59e0b;
  background: rgba(245, 158, 11, 0.1);
  border-radius: 50%;
  padding: var(--ag-space-4);
}

.custom-empty-state-3::part(ag-title) {
  color: var(--ag-text-primary);
  font-weight: 700;
}

.custom-empty-state-3::part(ag-actions-button) {
  background: #f59e0b;
  color: var(--ag-neutral-900);
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);
}
</style>
`,Ls=`import { LitElement, html } from "lit";
import "agnosticui-core/empty-state";
import "agnosticui-core/button";
import "agnosticui-core/icon";

class EmptyStateLitExamples extends LitElement {
  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  render() {
    return html\`
      <style>
        /* Force empty state components to have proper height */
        ag-empty-state {
          display: block;
          min-height: 200px;
        }

        ag-empty-state::part(ag-empty-state) {
          min-height: 200px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: var(--ag-space-6, 2rem) var(--ag-space-4, 1rem);
        }

        /* Size-specific min heights */
        ag-empty-state[size="sm"]::part(ag-empty-state) {
          min-height: 180px;
          padding: var(--ag-space-5, 1.5rem) var(--ag-space-4, 1rem);
        }

        ag-empty-state[size="md"]::part(ag-empty-state) {
          min-height: 220px;
          padding: var(--ag-space-6, 2rem) var(--ag-space-4, 1rem);
        }

        ag-empty-state[size="lg"]::part(ag-empty-state) {
          min-height: 300px;
          padding: var(--ag-space-8, 3rem) var(--ag-space-4, 1rem);
        }

        /* Add spacing for icon */
        ag-empty-state::part(ag-icon) {
          margin-bottom: var(--ag-space-4, 1.5rem);
        }

        /* Shared action styles for buttonText prop */
        .empty-state-with-button::part(ag-actions) {
          display: flex;
          justify-content: center;
          margin-block-start: var(--ag-space-4);
        }

        .empty-state-with-button::part(ag-title) {
          margin-block-start: var(--ag-space-4);
        }

        .empty-state-with-button::part(ag-actions-button) {
          background: #09090b;
          color: white;
          border-radius: 0.25rem;
          padding: var(--ag-space-4) var(--ag-space-6);
          border: none;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .empty-state-with-button::part(ag-actions-button):hover {
          background: #18181b;
          transform: translateY(-1px);
        }

        /* Custom Empty State 3 - Colorful Icon Accent */
        .custom-empty-state-3::part(ag-icon) {
          color: #f59e0b;
          background: rgba(245, 158, 11, 0.1);
          border-radius: 50%;
          padding: var(--ag-space-4);
        }

        .custom-empty-state-3::part(ag-title) {
          color: var(--ag-text-primary);
          font-weight: 700;
        }

        .custom-empty-state-3::part(ag-actions-button) {
          background: #f59e0b;
          color: var(--ag-neutral-900);
          border: none;
          border-radius: 8px;
          padding: 0.75rem 1.5rem;
          font-weight: 600;
          box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);
        }
      </style>
      <section>
        <div class="mbe4">
          <h2>Basic Empty State</h2>
          <p class="mbs2 mbe3">Simple empty state with title and subtitle</p>
        </div>
        <ag-empty-state
          title="No items found"
          subtitle="Get started by creating your first item"
          class="mbe6"
        ></ag-empty-state>

        <div class="mbe4">
          <h2>With Action Button</h2>
          <p class="mbs2 mbe3">
            Include a primary action button using the buttonText prop
          </p>
        </div>
        <ag-empty-state
          title="No projects yet"
          subtitle="Create your first project to get started"
          buttonText="New Project"
          class="mbe6 empty-state-with-button"
        ></ag-empty-state>

        <div class="mbe4">
          <h2>Size Variants</h2>
          <p class="mbs2 mbe3">
            Choose from small, medium, or large sizes to fit your layout
          </p>
        </div>
        <div class="mbe6">
          <ag-empty-state
            title="No notifications"
            subtitle="You're all caught up!"
            size="sm"
            class="mbe4"
          ></ag-empty-state>
          <ag-empty-state
            title="No activity"
            subtitle="Recent activity will appear here"
            size="md"
            class="mbe4"
          ></ag-empty-state>
          <ag-empty-state
            title="Welcome!"
            subtitle="Start your journey here"
            buttonText="Get Started"
            size="lg"
            class="empty-state-with-button"
          ></ag-empty-state>
        </div>

        <div class="mbe4">
          <h2>Bordered & Rounded</h2>
          <p class="mbs2 mbe3">
            Add visual separation with borders and rounded corners
          </p>
        </div>
        <div class="mbe6">
          <ag-empty-state
            title="No data available"
            subtitle="Upload a file to see your data"
            buttonText="Upload File"
            isBordered
            class="empty-state-with-button mbe4"
          ></ag-empty-state>
          <ag-empty-state
            title="Empty folder"
            subtitle="This folder contains no files yet"
            buttonText="Add Files"
            isRounded
            class="empty-state-with-button mbe4"
          ></ag-empty-state>
          <ag-empty-state
            title="No messages"
            subtitle="Send your first message"
            buttonText="New Message"
            isBordered
            isRounded
            class="empty-state-with-button"
          ></ag-empty-state>
        </div>

        <div class="mbe4">
          <h2>Custom Icons</h2>
          <p class="mbs2 mbe3">
            Provide custom icons that match your context using the icon slot
          </p>
        </div>
        <div class="mbe6">
          <ag-empty-state
            title="No search results"
            subtitle="Try different keywords or remove filters"
            isRounded
            size="md"
            class="mbe4"
          >
            <ag-icon slot="icon" size="40" no-fill>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#999" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-x">
                <path d="m13.5 8.5-5 5"/><path d="m8.5 8.5 5 5"/><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
              </svg>
            </ag-icon>
          </ag-empty-state>

          <ag-empty-state
            title="No files"
            subtitle="Drag and drop files here"
            size="md"
            isBordered
            isRounded
            class="mbe4"
          >
            <ag-icon slot="icon" size="56" no-fill>
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="#999" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder">
                <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/>
              </svg>
            </ag-icon>
          </ag-empty-state>

          <ag-empty-state
            title="No favorites yet"
            subtitle="Mark items as favorites to see them here"
            isRounded
            size="md"
          >
            <ag-icon slot="icon" size="32" no-fill>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#ef4444" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
              </svg>
            </ag-icon>
          </ag-empty-state>
        </div>

        <div class="mbe4">
          <h2>Custom Actions</h2>
          <p class="mbs2 mbe3">
            Use the actions slot for complete control over buttons and
            interactions
          </p>
        </div>
        <div class="mbe6">
          <ag-empty-state
            title="No team members"
            subtitle="Invite people to collaborate"
            size="md"
            isBordered
            isRounded
            class="mbe4"
          >
            <div
              slot="actions"
              style="display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap;"
            >
              <ag-button variant="primary" size="sm" shape="rounded">
                <ag-icon size="16" no-fill>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail">
                    <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </ag-icon>
                <span style="margin-inline-start: 4px;">Invite Members</span>
              </ag-button>
              <ag-button variant="secondary" size="sm" shape="rounded">
                Learn More
              </ag-button>
            </div>
          </ag-empty-state>

          <ag-empty-state
            title="Start your journey"
            subtitle="Choose how you want to begin"
            size="md"
            isBordered
            isRounded
          >
            <ag-icon slot="icon" size="56" no-fill>
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="#999" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder">
                <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/>
              </svg>
            </ag-icon>
            <div
              slot="actions"
              style="display: flex; gap: 0.5rem; flex-wrap: wrap; justify-content: center;"
            >
              <ag-button variant="primary" size="sm" shape="rounded" isBordered>
                <ag-icon size="16" no-fill>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus">
                    <path d="M5 12h14"/><path d="M12 5v14"/>
                  </svg>
                </ag-icon>
                <span style="margin-inline-start: 4px;">Create New</span>
              </ag-button>
              <ag-button variant="primary" size="sm" shape="rounded" isBordered>
                <ag-icon size="16" no-fill>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-upload">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/>
                  </svg>
                </ag-icon>
                <span style="margin-inline-start: 4px;">Import Data</span>
              </ag-button>
              <ag-button variant="primary" size="sm" shape="rounded" isBordered>
                <ag-icon size="16" no-fill>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/>
                  </svg>
                </ag-icon>
                <span style="margin-inline-start: 4px;">Use Template</span>
              </ag-button>
            </div>
          </ag-empty-state>
        </div>

        <div class="mbe4">
          <h2>Real-World Examples</h2>
          <p class="mbs2 mbe3">
            Common patterns for shopping cart, inbox, dashboard, and error
            states
          </p>
        </div>
        <div class="mbe6">
          <!-- Shopping Cart -->
          <ag-empty-state
            title="Your cart is empty"
            subtitle="Add items to see them here"
            size="md"
            isBordered
            isRounded
            class="mbe4"
          >
            <ag-icon slot="icon" size="48" no-fill>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#999" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart">
                <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.16"/>
              </svg>
            </ag-icon>
            <div slot="actions">
              <ag-button variant="primary" shape="rounded" size="md">
                Continue Shopping
                <ag-icon size="16" no-fill style="margin-inline-start: 4px;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
                    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                  </svg>
                </ag-icon>
              </ag-button>
            </div>
          </ag-empty-state>

          <!-- Inbox Zero -->
          <ag-empty-state
            title="Inbox Zero! 🎉"
            subtitle="All caught up. No new messages."
            size="md"
            isRounded
            class="mbe4"
          >
            <ag-icon slot="icon" size="40" no-fill>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#10b981" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-inbox">
                <path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>
              </svg>
            </ag-icon>
          </ag-empty-state>

          <!-- Dashboard -->
          <ag-empty-state
            title="No analytics data yet"
            subtitle="Data will appear once you start tracking"
            isBordered
            isRounded
            class="mbe4"
          >
            <ag-icon slot="icon" size="56" no-fill>
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="#6366f1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bar-chart-3">
                <path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>
              </svg>
            </ag-icon>
            <div slot="actions">
              <ag-button isGhost size="md"> View Documentation </ag-button>
            </div>
          </ag-empty-state>

          <!-- Error State -->
          <ag-empty-state
            title="Something went wrong"
            subtitle="Please try again or contact support"
            size="md"
            isRounded
            isBordered
          >
            <ag-icon slot="icon" size="48" no-fill>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#ef4444" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-alert-circle">
                <circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>
              </svg>
            </ag-icon>
            <div
              slot="actions"
              style="display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap;"
            >
              <ag-button
                variant="danger"
                shape="rounded"
                isBordered
                size="md"
              >
                Try Again
              </ag-button>
              <ag-button
                variant="secondary"
                shape="rounded"
                isBordered
                size="md"
              >
                <span style="margin-inline-end: 0.125rem;"
                  >Contact Support</span
                >
                <ag-icon size="16" no-fill>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send">
                    <path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>
                  </svg>
                </ag-icon>
              </ag-button>
            </div>
          </ag-empty-state>
        </div>

        <div class="mbe4">
          <h2>State-Specific Variants</h2>
          <p class="mbs2 mbe3">
            Empty states for different scenarios with appropriate icons and
            actions
          </p>
        </div>
        <div class="mbe6">
          <!-- No Results -->
          <ag-empty-state
            title="No matches found"
            subtitle="Try adjusting your filters or search"
            size="md"
            isBordered
            class="mbe4"
          >
            <ag-icon slot="icon" size="40" no-fill>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#999" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-x">
                <path d="m13.5 8.5-5 5"/><path d="m8.5 8.5 5 5"/><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
              </svg>
            </ag-icon>
            <div slot="actions">
              <ag-button
                variant="secondary"
                shape="rounded"
                size="sm"
                @click=\${() => console.log("clicked")}
              >
                Clear Filters
              </ag-button>
            </div>
          </ag-empty-state>

          <!-- Warning State -->
          <ag-empty-state
            title="Action Required"
            subtitle="This action cannot be undone"
            size="md"
            isBordered
            isRounded
            class="mbe4"
          >
            <ag-icon slot="icon" size="48" no-fill>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#f59e0b" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-alert-circle">
                <circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>
              </svg>
            </ag-icon>
            <div
              slot="actions"
              style="display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap;"
            >
              <ag-button variant="warning" size="md">
                Proceed Anyway
              </ag-button>
              <ag-button variant="secondary" size="md"> Cancel </ag-button>
            </div>
          </ag-empty-state>

          <!-- Access Denied -->
          <ag-empty-state
            title="Access Required"
            subtitle="You don't have permission to view this"
            size="md"
            isBordered
          >
            <ag-icon slot="icon" size="48" no-fill>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#999" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lock">
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </ag-icon>
            <div slot="actions">
              <ag-button variant="primary" shape="rounded" size="md">
                Request Access
              </ag-button>
            </div>
          </ag-empty-state>
        </div>

        <div class="mbe4">
          <h2>Compact Size Showcase</h2>
          <p class="mbs2 mbe3">
            Small empty states work great in sidebars, cards, or dense layouts
          </p>
        </div>
        <div
          style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: var(--ag-space-4);"
          class="mbe6"
        >
          <ag-empty-state
            title="No tasks"
            subtitle="Create a task to get started"
            buttonText="New Task"
            size="sm"
            isBordered
            isRounded
            class="empty-state-with-button"
          ></ag-empty-state>
          <ag-empty-state
            title="No events"
            subtitle="Schedule your first event"
            buttonText="Add Event"
            size="sm"
            isBordered
            isRounded
            class="empty-state-with-button"
          ></ag-empty-state>
          <ag-empty-state
            title="No contacts"
            subtitle="Add contacts to your list"
            buttonText="Add Contact"
            size="sm"
            isBordered
            isRounded
            class="empty-state-with-button"
          ></ag-empty-state>
          <ag-empty-state
            title="No notes"
            subtitle="Jot down your first note"
            buttonText="Create Note"
            size="sm"
            isBordered
            isRounded
            class="empty-state-with-button"
          ></ag-empty-state>
        </div>

        <div class="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
          <p class="mbs2 mbe3">
            Use CSS Shadow Parts to customize appearance:
            <code>::part(ag-empty-state)</code>,
            <code>::part(ag-icon)</code>, <code>::part(ag-title)</code>,
            <code>::part(ag-subtitle)</code>, <code>::part(ag-actions)</code>
          </p>
        </div>
        <div class="mbe6">
          <!-- Colorful Accent -->
          <ag-empty-state
            title="Colorful Accent"
            subtitle="Icon with background circle"
            buttonText="Start Now"
            isBordered
            class="custom-empty-state-3"
          >
            <ag-icon slot="icon" size="48" no-fill>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#f59e0b" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.3.09-3.1a2.18 2.18 0 0 0-3.11-.1z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
              </svg>
            </ag-icon>
          </ag-empty-state>
        </div>

        <div class="mbe4">
          <h2>Minimal Empty States</h2>
          <p class="mbs2 mbe3">
            Simple empty states without icons for clean, understated designs
          </p>
        </div>
        <div class="mbe6">
          <ag-empty-state
            title="Nothing here yet"
            size="sm"
            isRounded
            class="mbe4"
          ></ag-empty-state>
          <ag-empty-state
            title="No activity"
            subtitle="Recent activity will appear here"
            size="md"
            isRounded
            class="mbe4"
          ></ag-empty-state>
          <ag-empty-state
            title="Empty"
            isRounded
            size="md"
          ></ag-empty-state>
        </div>

        <div class="mbe4">
          <h2>Large Welcome States</h2>
          <p class="mbs2 mbe3">
            Spacious layouts perfect for onboarding and full-page empty states
          </p>
        </div>
        <ag-empty-state
          title="Welcome to Your Dashboard"
          subtitle="Add some content and you'll see it appear here. You'll be able to manage projects and collaborate with your team."
          buttonText="Get Started"
          size="lg"
          isBordered
          isRounded
          class="empty-state-with-button mbe6"
        >
          <ag-icon slot="icon" size="48" no-fill>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#6366f1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles">
              <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/>
            </svg>
          </ag-icon>
        </ag-empty-state>

        <div class="mbe4">
          <h2>Multiple Button Variants</h2>
          <p class="mbs2 mbe3">
            Showcase different button styles in custom actions
          </p>
        </div>
        <ag-empty-state
          title="Choose your action"
          subtitle="Different button styles for different purposes"
          size="md"
          isBordered
          isRounded
          class="mbe6"
        >
          <ag-icon slot="icon" size="40" no-fill>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#999" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-alert-circle">
              <circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>
            </svg>
          </ag-icon>
          <div
            slot="actions"
            style="display: flex; gap: 0.5rem; flex-wrap: wrap; justify-content: center;"
          >
            <ag-button variant="primary" size="sm" shape="rounded">
              Primary Action
            </ag-button>
            <ag-button
              variant="secondary"
              size="sm"
              shape="rounded"
              isBordered
            >
              Secondary
            </ag-button>
            <ag-button size="sm" shape="rounded" isBordered>
              Default
            </ag-button>
          </div>
        </ag-empty-state>

        <div class="mbe4">
          <h2>Button Size Variations</h2>
          <p class="mbs2 mbe3">
            Match button sizes to your empty state size for visual harmony
          </p>
        </div>
        <ag-empty-state
          title="Different Button Sizes"
          subtitle="Choose the right size for your layout"
          size="md"
          isBordered
          isRounded
          class="mbe6"
        >
          <ag-icon slot="icon" size="48" no-fill>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#999" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder">
              <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/>
            </svg>
          </ag-icon>
          <div
            slot="actions"
            style="display: flex; gap: 0.5rem; align-items: center; justify-content: center; flex-wrap: wrap;"
          >
            <ag-button variant="primary" size="sm" shape="rounded" isBordered>
              <ag-icon size="14" no-fill>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mic">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/>
                </svg>
              </ag-icon>
              <span style="margin-inline-start: 4px;">Small</span>
            </ag-button>
            <ag-button variant="primary" size="md" shape="rounded" isBordered>
              <ag-icon size="18" no-fill>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mic">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/>
                </svg>
              </ag-icon>
              <span style="margin-inline-start: 4px;">Medium</span>
            </ag-button>
            <ag-button variant="primary" size="lg" shape="rounded" isBordered>
              <ag-icon size="24" no-fill>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mic">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/>
                </svg>
              </ag-icon>
              <span style="margin-inline-start: 4px;">Large</span>
            </ag-button>
          </div>
        </ag-empty-state>
      </section>
    \`;
  }
}

customElements.define("empty-state-lit-examples", EmptyStateLitExamples);
`,Us=`
import {
  SearchX,
  Folder,
  Heart,
  Mail,
  Plus,
  Upload,
  FileText,
  ShoppingCart,
  ArrowRight,
  Inbox,
  BarChart3,
  AlertCircle,
  Send,
  Lock,
  Sparkles,
  Zap,
  Rocket,
  Mic,
} from "lucide-react";
import { ReactEmptyState } from "agnosticui-core/empty-state/react";
import { ReactButton } from "agnosticui-core/button/react";

const EmptyStateExamples = () => {
  const handleClearFilters = () => {
    console.log("Clearing filters...");
  };

  return (
    <section>
    <div className="mbe4">
      <h2>Basic Empty State</h2>
      <p className="mbs2 mbe3">Simple empty state with title and subtitle</p>
    </div>
    <ReactEmptyState
      title="No items found"
      subtitle="Get started by creating your first item"
      className="mbe6"
    />

    <div className="mbe4">
      <h2>With Action Button</h2>
      <p className="mbs2 mbe3">Include a primary action button using the buttonText prop</p>
    </div>
    <ReactEmptyState
      title="No projects yet"
      subtitle="Create your first project to get started"
      buttonText="New Project"
      className="mbe6 empty-state-with-button"
    />

    <div className="mbe4">
      <h2>Size Variants</h2>
      <p className="mbs2 mbe3">Choose from small, medium, or large sizes to fit your layout</p>
    </div>
    <div className="mbe6">
      <ReactEmptyState
        title="No notifications"
        subtitle="You're all caught up!"
        size="sm"
        className="mbe4"
      />
      <ReactEmptyState
        title="No activity"
        subtitle="Recent activity will appear here"
        size="md"
        className="mbe4"
      />
      <ReactEmptyState
        title="Welcome!"
        subtitle="Start your journey here"
        buttonText="Get Started"
        size="lg"
        className="empty-state-with-button"
      />
    </div>

    <div className="mbe4">
      <h2>Bordered & Rounded</h2>
      <p className="mbs2 mbe3">Add visual separation with borders and rounded corners</p>
    </div>
    <div className="mbe6">
      <ReactEmptyState
        title="No data available"
        subtitle="Upload a file to see your data"
        buttonText="Upload File"
        isBordered={true}
        className="empty-state-with-button mbe4"
      />
      <ReactEmptyState
        title="Empty folder"
        subtitle="This folder contains no files yet"
        buttonText="Add Files"
        isRounded={true}
        className="empty-state-with-button mbe4"
      />
      <ReactEmptyState
        title="No messages"
        subtitle="Send your first message"
        buttonText="New Message"
        isBordered={true}
        isRounded={true}
        className="empty-state-with-button"
      />
    </div>

    <div className="mbe4">
      <h2>Custom Icons</h2>
      <p className="mbs2 mbe3">Provide custom icons that match your context using the icon slot</p>
    </div>
    <div className="mbe6">
      <ReactEmptyState
        title="No search results"
        subtitle="Try different keywords or remove filters"
        isRounded={true}
        size="md"
        className="mbe4"
        icon={
          <SearchX
            size={40}
            color="#999"
          />
        }
      />

      <ReactEmptyState
        title="No files"
        subtitle="Drag and drop files here"
        size="md"
        isBordered={true}
        isRounded={true}
        className="mbe4"
        icon={
          <Folder
            size={56}
            color="#999"
          />
        }
      />

      <ReactEmptyState
        title="No favorites yet"
        subtitle="Mark items as favorites to see them here"
        isRounded={true}
        size="md"
        icon={
          <Heart
            size={32}
            color="#ef4444"
          />
        }
      />
    </div>

    <div className="mbe4">
      <h2>Custom Actions</h2>
      <p className="mbs2 mbe3">Use the actions slot for complete control over buttons and interactions</p>
    </div>
    <div className="mbe6">
      <ReactEmptyState
        title="No team members"
        subtitle="Invite people to collaborate"
        size="md"
        isBordered={true}
        isRounded={true}
        className="mbe4"
        actions={
          <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center", flexWrap: "wrap" }}>
            <ReactButton
              variant="primary"
              size="sm"
              shape="rounded"
            >
              <Mail size={16} />
              <span style={{ marginInlineStart: "4px" }}>Invite Members</span>
            </ReactButton>
            <ReactButton
              variant="secondary"
              size="sm"
              shape="rounded"
            >
              Learn More
            </ReactButton>
          </div>
        }
      />

      <ReactEmptyState
        title="Start your journey"
        subtitle="Choose how you want to begin"
        size="md"
        isBordered={true}
        isRounded={true}
        icon={
          <Folder
            size={56}
            color="#999"
          />
        }
        actions={
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", justifyContent: "center" }}>
            <ReactButton
              variant="primary"
              size="sm"
              shape="rounded"
              isBordered={true}
            >
              <Plus size={16} />
              <span style={{ marginInlineStart: "4px" }}>Create New</span>
            </ReactButton>
            <ReactButton
              variant="primary"
              size="sm"
              shape="rounded"
              isBordered={true}
            >
              <Upload size={16} />
              <span style={{ marginInlineStart: "4px" }}>Import Data</span>
            </ReactButton>
            <ReactButton
              variant="primary"
              size="sm"
              shape="rounded"
              isBordered={true}
            >
              <FileText size={16} />
              <span style={{ marginInlineStart: "4px" }}>Use Template</span>
            </ReactButton>
          </div>
        }
      />
    </div>

    <div className="mbe4">
      <h2>Real-World Examples</h2>
      <p className="mbs2 mbe3">Common patterns for shopping cart, inbox, dashboard, and error states</p>
    </div>
    <div className="mbe6">
      {/* Shopping Cart */}
      <ReactEmptyState
        title="Your cart is empty"
        subtitle="Add items to see them here"
        size="md"
        isBordered={true}
        isRounded={true}
        className="mbe4"
        icon={
          <ShoppingCart
            size={48}
            color="#999"
          />
        }
        actions={
          <ReactButton
            variant="primary"
            shape="rounded"
            size="md"
          >
            Continue Shopping
            <ArrowRight
              size={16}
              style={{ marginInlineStart: "4px" }}
            />
          </ReactButton>
        }
      />

      {/* Inbox Zero */}
      <ReactEmptyState
        title="Inbox Zero! 🎉"
        subtitle="All caught up. No new messages."
        size="md"
        isRounded={true}
        className="mbe4"
        icon={
          <Inbox
            size={40}
            color="#10b981"
          />
        }
      />

      {/* Dashboard */}
      <ReactEmptyState
        title="No analytics data yet"
        subtitle="Data will appear once you start tracking"
        isBordered={true}
        isRounded={true}
        className="mbe4"
        icon={
          <BarChart3
            size={56}
            color="#6366f1"
          />
        }
        actions={
          <ReactButton
            isGhost={true}
            size="md"
          >
            View Documentation
          </ReactButton>
        }
      />

      {/* Error State */}
      <ReactEmptyState
        title="Something went wrong"
        subtitle="Please try again or contact support"
        size="md"
        isRounded={true}
        isBordered={true}
        icon={
          <AlertCircle
            size={48}
            color="#ef4444"
          />
        }
        actions={
          <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center", flexWrap: "wrap" }}>
            <ReactButton
              variant="danger"
              shape="rounded"
              isBordered={true}
              size="md"
            >
              Try Again
            </ReactButton>
            <ReactButton
              variant="secondary"
              shape="rounded"
              isBordered={true}
              size="md"
            >
              <span style={{ marginInlineEnd: "0.125rem" }}>Contact Support</span>
              <Send size={16} />
            </ReactButton>
          </div>
        }
      />
    </div>

    <div className="mbe4">
      <h2>State-Specific Variants</h2>
      <p className="mbs2 mbe3">Empty states for different scenarios with appropriate icons and actions</p>
    </div>
    <div className="mbe6">
      {/* No Results */}
      <ReactEmptyState
        title="No matches found"
        subtitle="Try adjusting your filters or search"
        size="md"
        isBordered={true}
        className="mbe4"
        icon={
          <SearchX
            size={40}
            color="#999"
          />
        }
        actions={
          <ReactButton
            variant="secondary"
            shape="rounded"
            size="sm"
            onClick={handleClearFilters}
          >
            Clear Filters
          </ReactButton>
        }
      />

      {/* Warning State */}
      <ReactEmptyState
        title="Action Required"
        subtitle="This action cannot be undone"
        size="md"
        isBordered={true}
        isRounded={true}
        className="mbe4"
        icon={
          <AlertCircle
            size={48}
            color="#f59e0b"
          />
        }
        actions={
          <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center", flexWrap: "wrap" }}>
            <ReactButton
              variant="warning"
              size="md"
            >
              Proceed Anyway
            </ReactButton>
            <ReactButton
              variant="secondary"
              size="md"
            >
              Cancel
            </ReactButton>
          </div>
        }
      />

      {/* Access Denied */}
      <ReactEmptyState
        title="Access Required"
        subtitle="You don't have permission to view this"
        size="md"
        isBordered={true}
        icon={
          <Lock
            size={48}
            color="#999"
          />
        }
        actions={
          <ReactButton
            variant="primary"
            shape="rounded"
            size="md"
          >
            Request Access
          </ReactButton>
        }
      />
    </div>

    <div className="mbe4">
      <h2>Compact Size Showcase</h2>
      <p className="mbs2 mbe3">Small empty states work great in sidebars, cards, or dense layouts</p>
    </div>
    <div
      style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "var(--ag-space-4)" }}
      className="mbe6"
    >
      <ReactEmptyState
        title="No tasks"
        subtitle="Create a task to get started"
        buttonText="New Task"
        size="sm"
        isBordered={true}
        isRounded={true}
        className="empty-state-with-button"
      />
      <ReactEmptyState
        title="No events"
        subtitle="Schedule your first event"
        buttonText="Add Event"
        size="sm"
        isBordered={true}
        isRounded={true}
        className="empty-state-with-button"
      />
      <ReactEmptyState
        title="No contacts"
        subtitle="Add contacts to your list"
        buttonText="Add Contact"
        size="sm"
        isBordered={true}
        isRounded={true}
        className="empty-state-with-button"
      />
      <ReactEmptyState
        title="No notes"
        subtitle="Jot down your first note"
        buttonText="Create Note"
        size="sm"
        isBordered={true}
        isRounded={true}
        className="empty-state-with-button"
      />
    </div>

    <div className="mbe4">
      <h2>CSS Shadow Parts Customization</h2>
      <p className="mbs2 mbe3">
        Use CSS Shadow Parts to customize appearance:
        <code>::part(ag-empty-state)</code>,
        <code>::part(ag-icon)</code>,
        <code>::part(ag-title)</code>,
        <code>::part(ag-subtitle)</code>,
        <code>::part(ag-actions)</code>
      </p>
    </div>
    <div className="mbe6">
      {/* Colorful Accent */}
      <ReactEmptyState
        title="Colorful Accent"
        subtitle="Icon with background circle"
        buttonText="Start Now"
        isBordered={true}
        className="custom-empty-state-3"
        icon={
          <Rocket
            size={48}
            color="#f59e0b"
          />
        }
      />
    </div>

    <div className="mbe4">
      <h2>Minimal Empty States</h2>
      <p className="mbs2 mbe3">Simple empty states without icons for clean, understated designs</p>
    </div>
    <div className="mbe6">
      <ReactEmptyState
        title="Nothing here yet"
        size="sm"
        isRounded={true}
        className="mbe4"
      />
      <ReactEmptyState
        title="No activity"
        subtitle="Recent activity will appear here"
        size="md"
        isRounded={true}
        className="mbe4"
      />
      <ReactEmptyState
        title="Empty"
        isRounded={true}
        size="md"
      />
    </div>

    <div className="mbe4">
      <h2>Large Welcome States</h2>
      <p className="mbs2 mbe3">Spacious layouts perfect for onboarding and full-page empty states</p>
    </div>
    <ReactEmptyState
      title="Welcome to Your Dashboard"
      subtitle="Add some content and you'll see it appear here. You'll be able to manage projects and collaborate with your team."
      buttonText="Get Started"
      size="lg"
      isBordered={true}
      isRounded={true}
      className="empty-state-with-button mbe6"
      icon={
        <Sparkles
          size={48}
          color="#6366f1"
        />
      }
    />

    <div className="mbe4">
      <h2>Multiple Button Variants</h2>
      <p className="mbs2 mbe3">Showcase different button styles in custom actions</p>
    </div>
    <ReactEmptyState
      title="Choose your action"
      subtitle="Different button styles for different purposes"
      size="md"
      isBordered={true}
      isRounded={true}
      className="mbe6"
      icon={
        <AlertCircle
          size={40}
          color="#999"
        />
      }
      actions={
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", justifyContent: "center" }}>
          <ReactButton
            variant="primary"
            size="sm"
            shape="rounded"
          >
            Primary Action
          </ReactButton>
          <ReactButton
            variant="secondary"
            size="sm"
            shape="rounded"
            isBordered={true}
          >
            Secondary
          </ReactButton>
          <ReactButton
            size="sm"
            shape="rounded"
            isBordered={true}
          >
            Default
          </ReactButton>
        </div>
      }
    />

    <div className="mbe4">
      <h2>Button Size Variations</h2>
      <p className="mbs2 mbe3">Match button sizes to your empty state size for visual harmony</p>
    </div>
    <ReactEmptyState
      title="Different Button Sizes"
      subtitle="Choose the right size for your layout"
      size="md"
      isBordered={true}
      isRounded={true}
      className="mbe6"
      icon={
        <Folder
          size={48}
          color="#999"
        />
      }
      actions={
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
          <ReactButton
            variant="primary"
            size="sm"
            shape="rounded"
            isBordered={true}
          >
            <Mic size={14} />
            <span style={{ marginInlineStart: "4px" }}>Small</span>
          </ReactButton>
          <ReactButton
            variant="primary"
            size="md"
            shape="rounded"
            isBordered={true}
          >
            <Mic size={18} />
            <span style={{ marginInlineStart: "4px" }}>Medium</span>
          </ReactButton>
          <ReactButton
            variant="primary"
            size="lg"
            shape="rounded"
            isBordered={true}
          >
            <Mic size={24} />
            <span style={{ marginInlineStart: "4px" }}>Large</span>
          </ReactButton>
        </div>
      }
    />
  </section>
  );
};

export default EmptyStateExamples;
`,ki=JSON.parse('{"title":"Empty State","description":"","frontmatter":{},"headers":[],"relativePath":"components/empty-state.md","filePath":"components/empty-state.md"}'),Ws={name:"components/empty-state.md"},di=Object.assign(Ws,{setup(r){return(s,e)=>(b(),m("div",null,[e[1]||(e[1]=t("h1",{id:"empty-state",tabindex:"-1"},[h("Empty State "),t("a",{class:"header-anchor",href:"#empty-state","aria-label":'Permalink to "Empty State"'},"​")],-1)),i(Y),e[2]||(e[2]=t("p",null,"A versatile component for displaying empty states, placeholder content, and messaging when no data is available. Helps guide users toward meaningful actions and provides clear context about why content is missing.",-1)),e[3]||(e[3]=t("h2",{id:"examples",tabindex:"-1"},[h("Examples "),t("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),i(rs,{component:"empty-state","vue-code":f(_s),"lit-code":f(Ls),"react-code":f(Us)},{vue:a(()=>[i(Is)]),lit:a(()=>[...e[0]||(e[0]=[t("empty-state-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),e[4]||(e[4]=O("",92))]))}});export{ki as __pageData,di as default};
