import{A as q}from"./chunks/AlphaWarning.yC7ZufpQ.js";import{a as D,x as B,z as o}from"./chunks/Button.Bujdzq23.js";import"./chunks/Dialog.BSCJalI4.js";import{d as x,p as O,c as C,o as w,r as S,K as R,_ as V,C as c,j as i,G as t,w as l,a as e,Z as u,ae as T,k as m}from"./chunks/framework.NAAYCHZu.js";import{v as N}from"./chunks/VueButton.vue_vue_type_script_setup_true_lang-Bq8IPXqd.CM5RJxDa.js";import{c as P}from"./chunks/createLucideIcon.B61Wqv9x.js";import{S as I}from"./chunks/share-2.C9hlrz3B.js";import{D as U}from"./chunks/download.CKtIbNgn.js";import{U as _}from"./chunks/upload.CfQSbVzx.js";import{P as L}from"./chunks/plus.BS1frTSk.js";import{F as z}from"./chunks/FrameworkExample.Vj5DwYx5.js";import"./chunks/CloseButton.yKDcmacg.js";import"./chunks/Icon.odq14qpJ.js";/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=P("funnel",[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]]);var j=Object.defineProperty,g=(p,s,n,k)=>{for(var a=void 0,F=p.length-1,h;F>=0;F--)(h=p[F])&&(a=h(s,n,a)||a);return a&&j(s,n,a),a};class d extends D{constructor(){super(),this.open=!1,this.heading="",this.description="",this.position="bottom",this.noCloseOnEscape=!1,this.noCloseOnBackdrop=!1,this.showCloseButton=!1}firstUpdated(s){var n;super.firstUpdated(s),this._dialogElement=(n=this.shadowRoot)==null?void 0:n.querySelector("ag-dialog"),this._dialogElement&&(this._dialogElement.addEventListener("dialog-open",()=>{var a;const k=new CustomEvent("drawer-open",{bubbles:!0,composed:!0});this.dispatchEvent(k),(a=this.onDrawerOpen)==null||a.call(this,k)}),this._dialogElement.addEventListener("dialog-close",()=>{var a;const k=new CustomEvent("drawer-close",{bubbles:!0,composed:!0});this.dispatchEvent(k),(a=this.onDrawerClose)==null||a.call(this,k),this.open&&(this.open=!1)}),this._dialogElement.addEventListener("dialog-cancel",()=>{var a;const k=new CustomEvent("drawer-cancel",{bubbles:!0,composed:!0});this.dispatchEvent(k),(a=this.onDrawerCancel)==null||a.call(this,k),this.open&&(this.open=!1)}))}updated(s){super.updated(s),s.has("open")&&this._dialogElement&&this._dialogElement.open!==this.open&&(this._dialogElement.open=this.open)}render(){return B`
      <ag-dialog
        .open=${this.open}
        .heading=${this.heading}
        .description=${this.description}
        .noCloseOnEscape=${this.noCloseOnEscape}
        .noCloseOnBackdrop=${this.noCloseOnBackdrop}
        .showCloseButton=${this.showCloseButton}
        .drawerPosition=${this.position}
      >
        <slot></slot>
      </ag-dialog>
    `}}g([o({type:Boolean,reflect:!0})],d.prototype,"open");g([o({type:String})],d.prototype,"heading");g([o({type:String})],d.prototype,"description");g([o({type:Boolean})],d.prototype,"noCloseOnEscape");g([o({type:Boolean})],d.prototype,"noCloseOnBackdrop");g([o({type:Boolean})],d.prototype,"showCloseButton");g([o({type:String,reflect:!0,attribute:"position"})],d.prototype,"position");g([o({attribute:!1})],d.prototype,"onDrawerOpen");g([o({attribute:!1})],d.prototype,"onDrawerClose");g([o({attribute:!1})],d.prototype,"onDrawerCancel");customElements.get("ag-drawer")||customElements.define("ag-drawer",d);const M=[".open",".noCloseOnEscape",".noCloseOnBackdrop",".showCloseButton",".position","heading","description"],Q=x({__name:"VueDrawer",props:{open:{type:Boolean,default:!1},heading:{default:""},description:{default:""},noCloseOnEscape:{type:Boolean,default:!1},noCloseOnBackdrop:{type:Boolean,default:!1},showCloseButton:{type:Boolean,default:!1},position:{default:"bottom"}},emits:["drawer-open","drawer-close","drawer-cancel","update:open"],setup(p,{emit:s}){const n=s,k=O(),a=r=>{n("drawer-open",r),n("update:open",!0)},F=r=>{n("drawer-close",r),n("update:open",!1)},h=r=>{n("drawer-cancel",r),n("update:open",!1)};return(r,E)=>(w(),C("ag-drawer",R({ref_key:"drawerRef",ref:k,".open":p.open,".noCloseOnEscape":p.noCloseOnEscape,".noCloseOnBackdrop":p.noCloseOnBackdrop,".showCloseButton":p.showCloseButton,".position":p.position,heading:p.heading,description:p.description,onDrawerOpen:a,onDrawerClose:F,onDrawerCancel:h},r.$attrs),[S(r.$slots,"default")],48,M))}}),W={name:"DrawerExamples",components:{VueDrawer:Q,VueButton:N,Plus:L,Upload:_,Download:U,Share2:I,Filter:$},data(){return{isStartDrawerOpen:!1,isEndDrawerOpen:!1,isTopDrawerOpen:!1,isBottomDrawerOpen:!1,isCustomDrawerOpen:!1}},methods:{showStartDrawer(){this.isStartDrawerOpen=!0},showEndDrawer(){this.isEndDrawerOpen=!0},showTopDrawer(){this.isTopDrawerOpen=!0},showBottomDrawer(){this.isBottomDrawerOpen=!0},showCustomDrawer(){this.isCustomDrawerOpen=!0}}},H={class:"stacked-mobile mbe4"},Y={style:{"list-style":"none",padding:"0"}},K={style:{padding:"0.5rem 0"}},G={style:{padding:"0.5rem 0"}},J={style:{padding:"0.5rem 0"}},Z={style:{padding:"0.5rem 0"}},X={class:"stacked-mobile mbe4"},ss={slot:"footer"},is={style:{display:"flex",gap:"0.5rem","justify-content":"flex-end"}},as={class:"stacked-mobile mbe4"},ns={class:"stacked-mobile mbe4"},ts={style:{display:"flex",gap:"1rem","flex-wrap":"wrap"}},es={class:"flex-inline items-center"},ls={class:"flex-inline items-center"},hs={class:"flex-inline items-center"},ps={class:"flex-inline items-center"},ks={class:"stacked-mobile mbe4"},rs={slot:"header"},Fs={style:{margin:"0","font-size":"var(--ag-font-size-lg)"}},ds={class:"flex-inline items-center"},os={slot:"footer"},gs={style:{display:"flex",gap:"0.5rem","justify-content":"flex-end"}};function ys(p,s,n,k,a,F){const h=c("VueButton"),r=c("VueDrawer"),E=c("Plus"),b=c("Upload"),v=c("Download"),f=c("Share2"),A=c("Filter");return w(),C("section",null,[s[30]||(s[30]=i("div",{class:"mbe4"},[i("h2",null,"Drawer from Start (Left)")],-1)),i("div",H,[t(h,{onClick:F.showStartDrawer},{default:l(()=>[...s[13]||(s[13]=[e("Open Start Drawer",-1)])]),_:1},8,["onClick"]),t(r,{open:a.isStartDrawerOpen,position:"start",heading:"Navigation","show-close-button":"",onDrawerClose:s[4]||(s[4]=y=>a.isStartDrawerOpen=!1)},{default:l(()=>[i("nav",null,[i("ul",Y,[i("li",K,[i("a",{href:"#",onClick:s[0]||(s[0]=u(()=>{},["prevent"]))},"Dashboard")]),i("li",G,[i("a",{href:"#",onClick:s[1]||(s[1]=u(()=>{},["prevent"]))},"Projects")]),i("li",J,[i("a",{href:"#",onClick:s[2]||(s[2]=u(()=>{},["prevent"]))},"Team")]),i("li",Z,[i("a",{href:"#",onClick:s[3]||(s[3]=u(()=>{},["prevent"]))},"Settings")])])])]),_:1},8,["open"])]),s[31]||(s[31]=i("div",{class:"mbe4"},[i("h2",null,"Drawer from End (Right)")],-1)),i("div",X,[t(h,{onClick:F.showEndDrawer},{default:l(()=>[...s[14]||(s[14]=[e("Open End Drawer",-1)])]),_:1},8,["onClick"]),t(r,{open:a.isEndDrawerOpen,position:"end",heading:"Settings","show-close-button":"",onDrawerClose:s[7]||(s[7]=y=>a.isEndDrawerOpen=!1)},{default:l(()=>[s[17]||(s[17]=i("div",null,[i("h4",{style:{"margin-top":"0"}},"Preferences"),i("label",{style:{display:"block","margin-bottom":"1rem"}},[i("input",{type:"checkbox",style:{"margin-right":"0.5rem"}}),e(" Enable notifications ")]),i("label",{style:{display:"block","margin-bottom":"1rem"}},[i("input",{type:"checkbox",style:{"margin-right":"0.5rem"}}),e(" Dark mode ")]),i("label",{style:{display:"block","margin-bottom":"1rem"}},[i("input",{type:"checkbox",style:{"margin-right":"0.5rem"}}),e(" Auto-save ")])],-1)),i("div",ss,[i("div",is,[t(h,{onClick:s[5]||(s[5]=y=>a.isEndDrawerOpen=!1)},{default:l(()=>[...s[15]||(s[15]=[e("Cancel",-1)])]),_:1}),t(h,{variant:"primary",onClick:s[6]||(s[6]=y=>a.isEndDrawerOpen=!1)},{default:l(()=>[...s[16]||(s[16]=[e("Save",-1)])]),_:1})])])]),_:1},8,["open"])]),s[32]||(s[32]=i("div",{class:"mbe4"},[i("h2",null,"Drawer from Top")],-1)),i("div",as,[t(h,{onClick:F.showTopDrawer},{default:l(()=>[...s[18]||(s[18]=[e("Open Top Drawer",-1)])]),_:1},8,["onClick"]),t(r,{open:a.isTopDrawerOpen,position:"top",heading:"Notifications","show-close-button":"",onDrawerClose:s[8]||(s[8]=y=>a.isTopDrawerOpen=!1)},{default:l(()=>[...s[19]||(s[19]=[i("div",{style:{display:"flex","flex-direction":"column",gap:"1rem"}},[i("div",{style:{padding:"0.75rem",background:"var(--ag-background-secondary)","border-radius":"4px"}},[i("strong",null,"New message"),i("p",{style:{margin:"0.25rem 0 0 0",color:"var(--ag-text-secondary)","font-size":"0.875rem"}}," You have a new message from Sarah ")]),i("div",{style:{padding:"0.75rem",background:"var(--ag-background-secondary)","border-radius":"4px"}},[i("strong",null,"Update available"),i("p",{style:{margin:"0.25rem 0 0 0",color:"var(--ag-text-secondary)","font-size":"0.875rem"}}," A new version is ready to install ")])],-1)])]),_:1},8,["open"])]),s[33]||(s[33]=i("div",{class:"mbe4"},[i("h2",null,"Drawer from Bottom")],-1)),i("div",ns,[t(h,{onClick:F.showBottomDrawer},{default:l(()=>[...s[20]||(s[20]=[e("Open Bottom Drawer",-1)])]),_:1},8,["onClick"]),t(r,{open:a.isBottomDrawerOpen,position:"bottom",heading:"Quick Actions","show-close-button":"",onDrawerClose:s[9]||(s[9]=y=>a.isBottomDrawerOpen=!1)},{default:l(()=>[i("div",ts,[t(h,null,{default:l(()=>[i("div",es,[t(E,{size:16,class:"mie2"}),s[21]||(s[21]=e(" New Item ",-1))])]),_:1}),t(h,null,{default:l(()=>[i("div",ls,[t(b,{size:16,class:"mie2"}),s[22]||(s[22]=e(" Upload ",-1))])]),_:1}),t(h,null,{default:l(()=>[i("div",hs,[t(v,{size:16,class:"mie2"}),s[23]||(s[23]=e(" Download ",-1))])]),_:1}),t(h,null,{default:l(()=>[i("div",ps,[t(f,{size:16,class:"mie2"}),s[24]||(s[24]=e(" Share ",-1))])]),_:1})])]),_:1},8,["open"])]),s[34]||(s[34]=i("div",{class:"mbe4"},[i("h2",null,"Drawer with Custom Content")],-1)),i("div",ks,[t(h,{onClick:F.showCustomDrawer},{default:l(()=>[...s[25]||(s[25]=[e("Open Filter Drawer",-1)])]),_:1},8,["onClick"]),t(r,{open:a.isCustomDrawerOpen,position:"end","show-close-button":"",onDrawerClose:s[12]||(s[12]=y=>a.isCustomDrawerOpen=!1)},{default:l(()=>[i("div",rs,[i("h2",Fs,[i("div",ds,[t(A,{size:20,class:"mie2"}),s[26]||(s[26]=e(" Filters ",-1))])])]),s[29]||(s[29]=i("div",null,[i("div",{style:{"margin-bottom":"1.5rem"}},[i("h4",{style:{margin:"0 0 0.5rem 0"}},"Category"),i("label",{style:{display:"block","margin-bottom":"0.5rem"}},[i("input",{type:"checkbox",style:{"margin-right":"0.5rem"}}),e(" Electronics ")]),i("label",{style:{display:"block","margin-bottom":"0.5rem"}},[i("input",{type:"checkbox",style:{"margin-right":"0.5rem"}}),e(" Clothing ")]),i("label",{style:{display:"block","margin-bottom":"0.5rem"}},[i("input",{type:"checkbox",style:{"margin-right":"0.5rem"}}),e(" Books ")])]),i("div",{style:{"margin-bottom":"1.5rem"}},[i("h4",{style:{margin:"0 0 0.5rem 0"}},"Price Range"),i("input",{type:"range",min:"0",max:"1000",style:{width:"100%"}})])],-1)),i("div",os,[i("div",gs,[t(h,{onClick:s[10]||(s[10]=y=>a.isCustomDrawerOpen=!1)},{default:l(()=>[...s[27]||(s[27]=[e("Clear",-1)])]),_:1}),t(h,{variant:"primary",onClick:s[11]||(s[11]=y=>a.isCustomDrawerOpen=!1)},{default:l(()=>[...s[28]||(s[28]=[e("Apply Filters",-1)])]),_:1})])])]),_:1},8,["open"])])])}const cs=V(W,[["render",ys]]);class us extends D{createRenderRoot(){return this}constructor(){super(),this.isStartDrawerOpen=!1,this.isEndDrawerOpen=!1,this.isTopDrawerOpen=!1,this.isBottomDrawerOpen=!1,this.isCustomDrawerOpen=!1}firstUpdated(){this.querySelectorAll("ag-drawer").forEach(s=>{s.addEventListener("drawer-close",n=>{const k=n.target.id;this.handleDrawerClose(k)})})}handleDrawerClose(s){switch(s){case"start-drawer":this.isStartDrawerOpen=!1;break;case"end-drawer":this.isEndDrawerOpen=!1;break;case"top-drawer":this.isTopDrawerOpen=!1;break;case"bottom-drawer":this.isBottomDrawerOpen=!1;break;case"custom-drawer":this.isCustomDrawerOpen=!1;break}this.requestUpdate()}showStartDrawer(){this.isStartDrawerOpen=!0,this.requestUpdate(),setTimeout(()=>{const s=this.querySelector("#start-drawer");s&&(s.open=!0)},0)}showEndDrawer(){this.isEndDrawerOpen=!0,this.requestUpdate(),setTimeout(()=>{const s=this.querySelector("#end-drawer");s&&(s.open=!0)},0)}showTopDrawer(){this.isTopDrawerOpen=!0,this.requestUpdate(),setTimeout(()=>{const s=this.querySelector("#top-drawer");s&&(s.open=!0)},0)}showBottomDrawer(){this.isBottomDrawerOpen=!0,this.requestUpdate(),setTimeout(()=>{const s=this.querySelector("#bottom-drawer");s&&(s.open=!0)},0)}showCustomDrawer(){this.isCustomDrawerOpen=!0,this.requestUpdate(),setTimeout(()=>{const s=this.querySelector("#custom-drawer");s&&(s.open=!0)},0)}render(){return B`
      <section>
        <!-- Drawer from Start (Left) -->
        <div class="mbe4">
          <h2>Drawer from Start (Left)</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-button @click=${this.showStartDrawer}>Open Start Drawer</ag-button>
          <ag-drawer
            id="start-drawer"
            position="start"
            heading="Navigation"
            show-close-button
          >
            <nav>
              <ul style="list-style: none; padding: 0;">
                <li style="padding: 0.5rem 0;"><a href="#" @click=${s=>s.preventDefault()}>Dashboard</a></li>
                <li style="padding: 0.5rem 0;"><a href="#" @click=${s=>s.preventDefault()}>Projects</a></li>
                <li style="padding: 0.5rem 0;"><a href="#" @click=${s=>s.preventDefault()}>Team</a></li>
                <li style="padding: 0.5rem 0;"><a href="#" @click=${s=>s.preventDefault()}>Settings</a></li>
              </ul>
            </nav>
          </ag-drawer>
        </div>

        <!-- Drawer from End (Right) -->
        <div class="mbe4">
          <h2>Drawer from End (Right)</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-button @click=${this.showEndDrawer}>Open End Drawer</ag-button>
          <ag-drawer
            id="end-drawer"
            position="end"
            heading="Settings"
            show-close-button
          >
            <div>
              <h4 style="margin-top: 0;">Preferences</h4>
              <label style="display: block; margin-bottom: 1rem;">
                <input type="checkbox" style="margin-right: 0.5rem;" />
                Enable notifications
              </label>
              <label style="display: block; margin-bottom: 1rem;">
                <input type="checkbox" style="margin-right: 0.5rem;" />
                Dark mode
              </label>
              <label style="display: block; margin-bottom: 1rem;">
                <input type="checkbox" style="margin-right: 0.5rem;" />
                Auto-save
              </label>
            </div>
            <div slot="footer">
              <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
                <ag-button @click=${()=>{const s=this.querySelector("#end-drawer");s&&(s.open=!1)}}>Cancel</ag-button>
                <ag-button
                  variant="primary"
                  @click=${()=>{const s=this.querySelector("#end-drawer");s&&(s.open=!1)}}
                >Save</ag-button>
              </div>
            </div>
          </ag-drawer>
        </div>

        <!-- Drawer from Top -->
        <div class="mbe4">
          <h2>Drawer from Top</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-button @click=${this.showTopDrawer}>Open Top Drawer</ag-button>
          <ag-drawer
            id="top-drawer"
            position="top"
            heading="Notifications"
            show-close-button
          >
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <div style="padding: 0.75rem; background: var(--ag-background-secondary); border-radius: 4px;">
                <strong>New message</strong>
                <p style="margin: 0.25rem 0 0 0; color: var(--ag-text-secondary); font-size: 0.875rem;">
                  You have a new message from Sarah
                </p>
              </div>
              <div style="padding: 0.75rem; background: var(--ag-background-secondary); border-radius: 4px;">
                <strong>Update available</strong>
                <p style="margin: 0.25rem 0 0 0; color: var(--ag-text-secondary); font-size: 0.875rem;">
                  A new version is ready to install
                </p>
              </div>
            </div>
          </ag-drawer>
        </div>

        <!-- Drawer from Bottom -->
        <div class="mbe4">
          <h2>Drawer from Bottom</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-button @click=${this.showBottomDrawer}>Open Bottom Drawer</ag-button>
          <ag-drawer
            id="bottom-drawer"
            position="bottom"
            heading="Quick Actions"
            show-close-button
          >
            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
              <ag-button>
                <div class="flex-inline items-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mie2">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                  New Item
                </div>
              </ag-button>
              <ag-button>
                <div class="flex-inline items-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mie2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="17 8 12 3 7 8"></polyline>
                    <line x1="12" y1="3" x2="12" y2="15"></line>
                  </svg>
                  Upload
                </div>
              </ag-button>
              <ag-button>
                <div class="flex-inline items-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mie2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Download
                </div>
              </ag-button>
              <ag-button>
                <div class="flex-inline items-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mie2">
                    <circle cx="18" cy="5" r="3"></circle>
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="19" r="3"></circle>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                  </svg>
                  Share
                </div>
              </ag-button>
            </div>
          </ag-drawer>
        </div>

        <!-- Drawer with Custom Content -->
        <div class="mbe4">
          <h2>Drawer with Custom Content</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-button @click=${this.showCustomDrawer}>Open Filter Drawer</ag-button>
          <ag-drawer
            id="custom-drawer"
            position="end"
            show-close-button
          >
            <div slot="header">
              <h2 style="margin: 0; font-size: var(--ag-font-size-lg);">
                <div class="flex-inline items-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mie2">
                    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                  </svg>
                  Filters
                </div>
              </h2>
            </div>
            <div>
              <div style="margin-bottom: 1.5rem;">
                <h4 style="margin: 0 0 0.5rem 0;">Category</h4>
                <label style="display: block; margin-bottom: 0.5rem;">
                  <input type="checkbox" style="margin-right: 0.5rem;" />
                  Electronics
                </label>
                <label style="display: block; margin-bottom: 0.5rem;">
                  <input type="checkbox" style="margin-right: 0.5rem;" />
                  Clothing
                </label>
                <label style="display: block; margin-bottom: 0.5rem;">
                  <input type="checkbox" style="margin-right: 0.5rem;" />
                  Books
                </label>
              </div>
              <div style="margin-bottom: 1.5rem;">
                <h4 style="margin: 0 0 0.5rem 0;">Price Range</h4>
                <input type="range" min="0" max="1000" style="width: 100%;" />
              </div>
            </div>
            <div slot="footer">
              <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
                <ag-button @click=${()=>{const s=this.querySelector("#custom-drawer");s&&(s.open=!1)}}>Clear</ag-button>
                <ag-button
                  variant="primary"
                  @click=${()=>{const s=this.querySelector("#custom-drawer");s&&(s.open=!1)}}
                >Apply Filters</ag-button>
              </div>
            </div>
          </ag-drawer>
        </div>
      </section>
    `}}customElements.define("drawer-lit-examples",us);const ms=`<template>
  <section>
    <div class="mbe4">
      <h2>Drawer from Start (Left)</h2>
    </div>
    <div class="stacked-mobile mbe4">
      <VueButton @click="showStartDrawer">Open Start Drawer</VueButton>
      <VueDrawer
        :open="isStartDrawerOpen"
        position="start"
        heading="Navigation"
        show-close-button
        @drawer-close="isStartDrawerOpen = false"
      >
        <nav>
          <ul style="list-style: none; padding: 0;">
            <li style="padding: 0.5rem 0;"><a
                href="#"
                @click.prevent
              >Dashboard</a></li>
            <li style="padding: 0.5rem 0;"><a
                href="#"
                @click.prevent
              >Projects</a></li>
            <li style="padding: 0.5rem 0;"><a
                href="#"
                @click.prevent
              >Team</a></li>
            <li style="padding: 0.5rem 0;"><a
                href="#"
                @click.prevent
              >Settings</a></li>
          </ul>
        </nav>
      </VueDrawer>
    </div>

    <div class="mbe4">
      <h2>Drawer from End (Right)</h2>
    </div>
    <div class="stacked-mobile mbe4">
      <VueButton @click="showEndDrawer">Open End Drawer</VueButton>
      <VueDrawer
        :open="isEndDrawerOpen"
        position="end"
        heading="Settings"
        show-close-button
        @drawer-close="isEndDrawerOpen = false"
      >
        <div>
          <h4 style="margin-top: 0;">Preferences</h4>
          <label style="display: block; margin-bottom: 1rem;">
            <input
              type="checkbox"
              style="margin-right: 0.5rem;"
            />
            Enable notifications
          </label>
          <label style="display: block; margin-bottom: 1rem;">
            <input
              type="checkbox"
              style="margin-right: 0.5rem;"
            />
            Dark mode
          </label>
          <label style="display: block; margin-bottom: 1rem;">
            <input
              type="checkbox"
              style="margin-right: 0.5rem;"
            />
            Auto-save
          </label>
        </div>
        <div slot="footer">
          <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
            <VueButton @click="isEndDrawerOpen = false">Cancel</VueButton>
            <VueButton
              variant="primary"
              @click="isEndDrawerOpen = false"
            >Save</VueButton>
          </div>
        </div>
      </VueDrawer>
    </div>

    <div class="mbe4">
      <h2>Drawer from Top</h2>
    </div>
    <div class="stacked-mobile mbe4">
      <VueButton @click="showTopDrawer">Open Top Drawer</VueButton>
      <VueDrawer
        :open="isTopDrawerOpen"
        position="top"
        heading="Notifications"
        show-close-button
        @drawer-close="isTopDrawerOpen = false"
      >
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <div style="padding: 0.75rem; background: var(--ag-background-secondary); border-radius: 4px;">
            <strong>New message</strong>
            <p style="margin: 0.25rem 0 0 0; color: var(--ag-text-secondary); font-size: 0.875rem;">
              You have a new message from Sarah
            </p>
          </div>
          <div style="padding: 0.75rem; background: var(--ag-background-secondary); border-radius: 4px;">
            <strong>Update available</strong>
            <p style="margin: 0.25rem 0 0 0; color: var(--ag-text-secondary); font-size: 0.875rem;">
              A new version is ready to install
            </p>
          </div>
        </div>
      </VueDrawer>
    </div>

    <div class="mbe4">
      <h2>Drawer from Bottom</h2>
    </div>
    <div class="stacked-mobile mbe4">
      <VueButton @click="showBottomDrawer">Open Bottom Drawer</VueButton>
      <VueDrawer
        :open="isBottomDrawerOpen"
        position="bottom"
        heading="Quick Actions"
        show-close-button
        @drawer-close="isBottomDrawerOpen = false"
      >
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <VueButton>
            <div class="flex-inline items-center">
              <Plus
                :size="16"
                class="mie2"
              />
              New Item
            </div>
          </VueButton>
          <VueButton>
            <div class="flex-inline items-center">
              <Upload
                :size="16"
                class="mie2"
              />
              Upload
            </div>
          </VueButton>
          <VueButton>
            <div class="flex-inline items-center">
              <Download
                :size="16"
                class="mie2"
              />
              Download
            </div>
          </VueButton>
          <VueButton>
            <div class="flex-inline items-center">
              <Share2
                :size="16"
                class="mie2"
              />
              Share
            </div>
          </VueButton>
        </div>
      </VueDrawer>
    </div>

    <div class="mbe4">
      <h2>Drawer with Custom Content</h2>
    </div>
    <div class="stacked-mobile mbe4">
      <VueButton @click="showCustomDrawer">Open Filter Drawer</VueButton>
      <VueDrawer
        :open="isCustomDrawerOpen"
        position="end"
        show-close-button
        @drawer-close="isCustomDrawerOpen = false"
      >
        <div slot="header">
          <h2 style="margin: 0; font-size: var(--ag-font-size-lg);">
            <div class="flex-inline items-center">
              <Filter
                :size="20"
                class="mie2"
              />
              Filters
            </div>
          </h2>
        </div>
        <div>
          <div style="margin-bottom: 1.5rem;">
            <h4 style="margin: 0 0 0.5rem 0;">Category</h4>
            <label style="display: block; margin-bottom: 0.5rem;">
              <input
                type="checkbox"
                style="margin-right: 0.5rem;"
              />
              Electronics
            </label>
            <label style="display: block; margin-bottom: 0.5rem;">
              <input
                type="checkbox"
                style="margin-right: 0.5rem;"
              />
              Clothing
            </label>
            <label style="display: block; margin-bottom: 0.5rem;">
              <input
                type="checkbox"
                style="margin-right: 0.5rem;"
              />
              Books
            </label>
          </div>
          <div style="margin-bottom: 1.5rem;">
            <h4 style="margin: 0 0 0.5rem 0;">Price Range</h4>
            <input
              type="range"
              min="0"
              max="1000"
              style="width: 100%;"
            />
          </div>
        </div>
        <div slot="footer">
          <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
            <VueButton @click="isCustomDrawerOpen = false">Clear</VueButton>
            <VueButton
              variant="primary"
              @click="isCustomDrawerOpen = false"
            >Apply Filters</VueButton>
          </div>
        </div>
      </VueDrawer>
    </div>
  </section>
</template>

<script>
import VueDrawer from "agnosticui-core/drawer/vue";
import VueButton from "agnosticui-core/button/vue";
import { Plus, Upload, Download, Share2, Filter } from "lucide-vue-next";

export default {
  name: "DrawerExamples",
  components: {
    VueDrawer,
    VueButton,
    Plus,
    Upload,
    Download,
    Share2,
    Filter,
  },
  data() {
    return {
      isStartDrawerOpen: false,
      isEndDrawerOpen: false,
      isTopDrawerOpen: false,
      isBottomDrawerOpen: false,
      isCustomDrawerOpen: false,
    };
  },
  methods: {
    showStartDrawer() {
      this.isStartDrawerOpen = true;
    },
    showEndDrawer() {
      this.isEndDrawerOpen = true;
    },
    showTopDrawer() {
      this.isTopDrawerOpen = true;
    },
    showBottomDrawer() {
      this.isBottomDrawerOpen = true;
    },
    showCustomDrawer() {
      this.isCustomDrawerOpen = true;
    },
  },
};
<\/script>
`,Cs=`import { LitElement, html } from 'lit';
import 'agnosticui-core/drawer';
import 'agnosticui-core/button';

export class DrawerLitExamples extends LitElement {
  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  constructor() {
    super();
    this.isStartDrawerOpen = false;
    this.isEndDrawerOpen = false;
    this.isTopDrawerOpen = false;
    this.isBottomDrawerOpen = false;
    this.isCustomDrawerOpen = false;
  }

  firstUpdated() {
    // Set up event listeners for drawer close events
    this.querySelectorAll('ag-drawer').forEach((drawer) => {
      drawer.addEventListener('drawer-close', (e) => {
        const drawerId = e.target.id;
        this.handleDrawerClose(drawerId);
      });
    });
  }

  handleDrawerClose(drawerId) {
    switch (drawerId) {
      case 'start-drawer':
        this.isStartDrawerOpen = false;
        break;
      case 'end-drawer':
        this.isEndDrawerOpen = false;
        break;
      case 'top-drawer':
        this.isTopDrawerOpen = false;
        break;
      case 'bottom-drawer':
        this.isBottomDrawerOpen = false;
        break;
      case 'custom-drawer':
        this.isCustomDrawerOpen = false;
        break;
    }
    this.requestUpdate();
  }

  showStartDrawer() {
    this.isStartDrawerOpen = true;
    this.requestUpdate();
    setTimeout(() => {
      const drawer = this.querySelector('#start-drawer');
      if (drawer) drawer.open = true;
    }, 0);
  }

  showEndDrawer() {
    this.isEndDrawerOpen = true;
    this.requestUpdate();
    setTimeout(() => {
      const drawer = this.querySelector('#end-drawer');
      if (drawer) drawer.open = true;
    }, 0);
  }

  showTopDrawer() {
    this.isTopDrawerOpen = true;
    this.requestUpdate();
    setTimeout(() => {
      const drawer = this.querySelector('#top-drawer');
      if (drawer) drawer.open = true;
    }, 0);
  }

  showBottomDrawer() {
    this.isBottomDrawerOpen = true;
    this.requestUpdate();
    setTimeout(() => {
      const drawer = this.querySelector('#bottom-drawer');
      if (drawer) drawer.open = true;
    }, 0);
  }

  showCustomDrawer() {
    this.isCustomDrawerOpen = true;
    this.requestUpdate();
    setTimeout(() => {
      const drawer = this.querySelector('#custom-drawer');
      if (drawer) drawer.open = true;
    }, 0);
  }

  render() {
    return html\`
      <section>
        <!-- Drawer from Start (Left) -->
        <div class="mbe4">
          <h2>Drawer from Start (Left)</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-button @click=\${this.showStartDrawer}>Open Start Drawer</ag-button>
          <ag-drawer
            id="start-drawer"
            position="start"
            heading="Navigation"
            show-close-button
          >
            <nav>
              <ul style="list-style: none; padding: 0;">
                <li style="padding: 0.5rem 0;"><a href="#" @click=\${(e) => e.preventDefault()}>Dashboard</a></li>
                <li style="padding: 0.5rem 0;"><a href="#" @click=\${(e) => e.preventDefault()}>Projects</a></li>
                <li style="padding: 0.5rem 0;"><a href="#" @click=\${(e) => e.preventDefault()}>Team</a></li>
                <li style="padding: 0.5rem 0;"><a href="#" @click=\${(e) => e.preventDefault()}>Settings</a></li>
              </ul>
            </nav>
          </ag-drawer>
        </div>

        <!-- Drawer from End (Right) -->
        <div class="mbe4">
          <h2>Drawer from End (Right)</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-button @click=\${this.showEndDrawer}>Open End Drawer</ag-button>
          <ag-drawer
            id="end-drawer"
            position="end"
            heading="Settings"
            show-close-button
          >
            <div>
              <h4 style="margin-top: 0;">Preferences</h4>
              <label style="display: block; margin-bottom: 1rem;">
                <input type="checkbox" style="margin-right: 0.5rem;" />
                Enable notifications
              </label>
              <label style="display: block; margin-bottom: 1rem;">
                <input type="checkbox" style="margin-right: 0.5rem;" />
                Dark mode
              </label>
              <label style="display: block; margin-bottom: 1rem;">
                <input type="checkbox" style="margin-right: 0.5rem;" />
                Auto-save
              </label>
            </div>
            <div slot="footer">
              <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
                <ag-button @click=\${() => {
                  const drawer = this.querySelector('#end-drawer');
                  if (drawer) drawer.open = false;
                }}>Cancel</ag-button>
                <ag-button
                  variant="primary"
                  @click=\${() => {
                    const drawer = this.querySelector('#end-drawer');
                    if (drawer) drawer.open = false;
                  }}
                >Save</ag-button>
              </div>
            </div>
          </ag-drawer>
        </div>

        <!-- Drawer from Top -->
        <div class="mbe4">
          <h2>Drawer from Top</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-button @click=\${this.showTopDrawer}>Open Top Drawer</ag-button>
          <ag-drawer
            id="top-drawer"
            position="top"
            heading="Notifications"
            show-close-button
          >
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <div style="padding: 0.75rem; background: var(--ag-background-secondary); border-radius: 4px;">
                <strong>New message</strong>
                <p style="margin: 0.25rem 0 0 0; color: var(--ag-text-secondary); font-size: 0.875rem;">
                  You have a new message from Sarah
                </p>
              </div>
              <div style="padding: 0.75rem; background: var(--ag-background-secondary); border-radius: 4px;">
                <strong>Update available</strong>
                <p style="margin: 0.25rem 0 0 0; color: var(--ag-text-secondary); font-size: 0.875rem;">
                  A new version is ready to install
                </p>
              </div>
            </div>
          </ag-drawer>
        </div>

        <!-- Drawer from Bottom -->
        <div class="mbe4">
          <h2>Drawer from Bottom</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-button @click=\${this.showBottomDrawer}>Open Bottom Drawer</ag-button>
          <ag-drawer
            id="bottom-drawer"
            position="bottom"
            heading="Quick Actions"
            show-close-button
          >
            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
              <ag-button>
                <div class="flex-inline items-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mie2">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                  New Item
                </div>
              </ag-button>
              <ag-button>
                <div class="flex-inline items-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mie2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="17 8 12 3 7 8"></polyline>
                    <line x1="12" y1="3" x2="12" y2="15"></line>
                  </svg>
                  Upload
                </div>
              </ag-button>
              <ag-button>
                <div class="flex-inline items-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mie2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Download
                </div>
              </ag-button>
              <ag-button>
                <div class="flex-inline items-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mie2">
                    <circle cx="18" cy="5" r="3"></circle>
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="19" r="3"></circle>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                  </svg>
                  Share
                </div>
              </ag-button>
            </div>
          </ag-drawer>
        </div>

        <!-- Drawer with Custom Content -->
        <div class="mbe4">
          <h2>Drawer with Custom Content</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-button @click=\${this.showCustomDrawer}>Open Filter Drawer</ag-button>
          <ag-drawer
            id="custom-drawer"
            position="end"
            show-close-button
          >
            <div slot="header">
              <h2 style="margin: 0; font-size: var(--ag-font-size-lg);">
                <div class="flex-inline items-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mie2">
                    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                  </svg>
                  Filters
                </div>
              </h2>
            </div>
            <div>
              <div style="margin-bottom: 1.5rem;">
                <h4 style="margin: 0 0 0.5rem 0;">Category</h4>
                <label style="display: block; margin-bottom: 0.5rem;">
                  <input type="checkbox" style="margin-right: 0.5rem;" />
                  Electronics
                </label>
                <label style="display: block; margin-bottom: 0.5rem;">
                  <input type="checkbox" style="margin-right: 0.5rem;" />
                  Clothing
                </label>
                <label style="display: block; margin-bottom: 0.5rem;">
                  <input type="checkbox" style="margin-right: 0.5rem;" />
                  Books
                </label>
              </div>
              <div style="margin-bottom: 1.5rem;">
                <h4 style="margin: 0 0 0.5rem 0;">Price Range</h4>
                <input type="range" min="0" max="1000" style="width: 100%;" />
              </div>
            </div>
            <div slot="footer">
              <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
                <ag-button @click=\${() => {
                  const drawer = this.querySelector('#custom-drawer');
                  if (drawer) drawer.open = false;
                }}>Clear</ag-button>
                <ag-button
                  variant="primary"
                  @click=\${() => {
                    const drawer = this.querySelector('#custom-drawer');
                    if (drawer) drawer.open = false;
                  }}
                >Apply Filters</ag-button>
              </div>
            </div>
          </ag-drawer>
        </div>
      </section>
    \`;
  }
}

// Register the custom element
customElements.define('drawer-lit-examples', DrawerLitExamples);
`,ws=`import { useState } from "react";
import { ReactDrawer } from "agnosticui-core/drawer/react";
import { ReactButton } from "agnosticui-core/button/react";

export default function DrawerReactExamples() {
  const [isStartDrawerOpen, setIsStartDrawerOpen] = useState(false);
  const [isEndDrawerOpen, setIsEndDrawerOpen] = useState(false);
  const [isTopDrawerOpen, setIsTopDrawerOpen] = useState(false);
  const [isBottomDrawerOpen, setIsBottomDrawerOpen] = useState(false);
  const [isCustomDrawerOpen, setIsCustomDrawerOpen] = useState(false);

  return (
    <section>
      {/* Drawer from Start (Left) */}
      <div className="mbe4">
        <h2>Drawer from Start (Left)</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactButton onClick={() => setIsStartDrawerOpen(true)}>
          Open Start Drawer
        </ReactButton>
        <ReactDrawer
          open={isStartDrawerOpen}
          onOpenChange={setIsStartDrawerOpen}
          position="start"
          heading="Navigation"
          showCloseButton
        >
          <nav>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ padding: "0.5rem 0" }}>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Dashboard
                </a>
              </li>
              <li style={{ padding: "0.5rem 0" }}>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Projects
                </a>
              </li>
              <li style={{ padding: "0.5rem 0" }}>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Team
                </a>
              </li>
              <li style={{ padding: "0.5rem 0" }}>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Settings
                </a>
              </li>
            </ul>
          </nav>
        </ReactDrawer>
      </div>

      {/* Drawer from End (Right) */}
      <div className="mbe4">
        <h2>Drawer from End (Right)</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactButton onClick={() => setIsEndDrawerOpen(true)}>
          Open End Drawer
        </ReactButton>
        <ReactDrawer
          open={isEndDrawerOpen}
          onOpenChange={setIsEndDrawerOpen}
          position="end"
          heading="Settings"
          showCloseButton
          footer={
            <div style={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end" }}>
              <ReactButton onClick={() => setIsEndDrawerOpen(false)}>
                Cancel
              </ReactButton>
              <ReactButton variant="primary" onClick={() => setIsEndDrawerOpen(false)}>
                Save
              </ReactButton>
            </div>
          }
        >
          <div>
            <h4 style={{ marginTop: 0 }}>Preferences</h4>
            <label style={{ display: "block", marginBottom: "1rem" }}>
              <input type="checkbox" style={{ marginRight: "0.5rem" }} />
              Enable notifications
            </label>
            <label style={{ display: "block", marginBottom: "1rem" }}>
              <input type="checkbox" style={{ marginRight: "0.5rem" }} />
              Dark mode
            </label>
            <label style={{ display: "block", marginBottom: "1rem" }}>
              <input type="checkbox" style={{ marginRight: "0.5rem" }} />
              Auto-save
            </label>
          </div>
        </ReactDrawer>
      </div>

      {/* Drawer from Top */}
      <div className="mbe4">
        <h2>Drawer from Top</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactButton onClick={() => setIsTopDrawerOpen(true)}>
          Open Top Drawer
        </ReactButton>
        <ReactDrawer
          open={isTopDrawerOpen}
          onOpenChange={setIsTopDrawerOpen}
          position="top"
          heading="Notifications"
          showCloseButton
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div
              style={{
                padding: "0.75rem",
                background: "var(--ag-background-secondary)",
                borderRadius: "4px",
              }}
            >
              <strong>New message</strong>
              <p
                style={{
                  margin: "0.25rem 0 0 0",
                  color: "var(--ag-text-secondary)",
                  fontSize: "0.875rem",
                }}
              >
                You have a new message from Sarah
              </p>
            </div>
            <div
              style={{
                padding: "0.75rem",
                background: "var(--ag-background-secondary)",
                borderRadius: "4px",
              }}
            >
              <strong>Update available</strong>
              <p
                style={{
                  margin: "0.25rem 0 0 0",
                  color: "var(--ag-text-secondary)",
                  fontSize: "0.875rem",
                }}
              >
                A new version is ready to install
              </p>
            </div>
          </div>
        </ReactDrawer>
      </div>

      {/* Drawer from Bottom */}
      <div className="mbe4">
        <h2>Drawer from Bottom</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactButton onClick={() => setIsBottomDrawerOpen(true)}>
          Open Bottom Drawer
        </ReactButton>
        <ReactDrawer
          open={isBottomDrawerOpen}
          onOpenChange={setIsBottomDrawerOpen}
          position="bottom"
          heading="Quick Actions"
          showCloseButton
        >
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <ReactButton>
              <div className="flex-inline items-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="mie2"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                New Item
              </div>
            </ReactButton>
            <ReactButton>
              <div className="flex-inline items-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="mie2"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="17 8 12 3 7 8"></polyline>
                  <line x1="12" y1="3" x2="12" y2="15"></line>
                </svg>
                Upload
              </div>
            </ReactButton>
            <ReactButton>
              <div className="flex-inline items-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="mie2"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download
              </div>
            </ReactButton>
            <ReactButton>
              <div className="flex-inline items-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="mie2"
                >
                  <circle cx="18" cy="5" r="3"></circle>
                  <circle cx="6" cy="12" r="3"></circle>
                  <circle cx="18" cy="19" r="3"></circle>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                </svg>
                Share
              </div>
            </ReactButton>
          </div>
        </ReactDrawer>
      </div>

      {/* Drawer with Custom Content */}
      <div className="mbe4">
        <h2>Drawer with Custom Content</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactButton onClick={() => setIsCustomDrawerOpen(true)}>
          Open Filter Drawer
        </ReactButton>
        <ReactDrawer
          open={isCustomDrawerOpen}
          onOpenChange={setIsCustomDrawerOpen}
          position="end"
          showCloseButton
          header={
            <h2 style={{ margin: 0, fontSize: "var(--ag-font-size-lg)" }}>
              <div className="flex-inline items-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="mie2"
                >
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                </svg>
                Filters
              </div>
            </h2>
          }
          footer={
            <div style={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end" }}>
              <ReactButton onClick={() => setIsCustomDrawerOpen(false)}>
                Clear
              </ReactButton>
              <ReactButton variant="primary" onClick={() => setIsCustomDrawerOpen(false)}>
                Apply Filters
              </ReactButton>
            </div>
          }
        >
          <div>
            <div style={{ marginBottom: "1.5rem" }}>
              <h4 style={{ margin: "0 0 0.5rem 0" }}>Category</h4>
              <label style={{ display: "block", marginBottom: "0.5rem" }}>
                <input type="checkbox" style={{ marginRight: "0.5rem" }} />
                Electronics
              </label>
              <label style={{ display: "block", marginBottom: "0.5rem" }}>
                <input type="checkbox" style={{ marginRight: "0.5rem" }} />
                Clothing
              </label>
              <label style={{ display: "block", marginBottom: "0.5rem" }}>
                <input type="checkbox" style={{ marginRight: "0.5rem" }} />
                Books
              </label>
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <h4 style={{ margin: "0 0 0.5rem 0" }}>Price Range</h4>
              <input type="range" min="0" max="1000" style={{ width: "100%" }} />
            </div>
          </div>
        </ReactDrawer>
      </div>
    </section>
  );
}
`,Ns=JSON.parse('{"title":"Drawer","description":"","frontmatter":{},"headers":[],"relativePath":"components/drawer.md","filePath":"components/drawer.md"}'),Es={name:"components/drawer.md"},Ps=Object.assign(Es,{setup(p){return(s,n)=>(w(),C("div",null,[n[1]||(n[1]=i("h1",{id:"drawer",tabindex:"-1"},[e("Drawer "),i("a",{class:"header-anchor",href:"#drawer","aria-label":'Permalink to "Drawer"'},"​")],-1)),t(q),n[2]||(n[2]=i("p",null,"A drawer is a panel that slides in from the edge of the screen, typically used for navigation menus, filters, settings, or other supplementary content. Drawers can slide in from any of the four edges: start (left), end (right), top, or bottom.",-1)),n[3]||(n[3]=i("h2",{id:"examples",tabindex:"-1"},[e("Examples "),i("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),t(z,{component:"drawer","vue-code":m(ms),"lit-code":m(Cs),"react-code":m(ws)},{vue:l(()=>[t(cs)]),lit:l(()=>[...n[0]||(n[0]=[i("drawer-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),n[4]||(n[4]=T(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The framework examples below <code>import</code> AgnosticUI as an <code>npm</code> package. Alternatively, you can use the <strong>CLI for complete control, AI/LLM visibility, and full code ownership</strong>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> init</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> --framework</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> FRAMEWORK</span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;"> # react, vue, lit, svelte, etc.</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> add</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> Drawer</span></span></code></pre></div><p>The CLI copies source code directly into your project, giving you full visibility and control. After running <code>npx ag add</code>, you&#39;ll receive exact import instructions.</p></div><details class="details custom-block"><summary>Vue</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueButton</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> @click</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;showStartDrawer&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Open Navigation&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueButton</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueDrawer</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :open</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;isStartDrawerOpen&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      position</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;start&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      heading</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Navigation&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      show-close-button</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      @drawer-close</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;isStartDrawerOpen = false&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">nav</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ul</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> style</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;list-style: none; padding: 0;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">li</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> style</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;padding: 0.5rem 0;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> href</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;#&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Dashboard&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">li</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">li</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> style</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;padding: 0.5rem 0;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> href</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;#&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Projects&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">li</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">li</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> style</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;padding: 0.5rem 0;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> href</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;#&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Settings&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">li</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ul</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">nav</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueDrawer</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueButton</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> @click</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;showEndDrawer&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Open Settings&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueButton</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueDrawer</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :open</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;isEndDrawerOpen&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      position</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;end&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      heading</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Settings&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      show-close-button</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      @drawer-close</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;isEndDrawerOpen = false&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">h4</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Preferences&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">h4</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">label</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> style</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;display: block; margin-bottom: 1rem;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">input</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;checkbox&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> style</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;margin-right: 0.5rem;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          Enable notifications</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> slot</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;footer&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> style</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;display: flex; gap: 0.5rem; justify-content: flex-end;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueButton</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> @click</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;isEndDrawerOpen = false&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Cancel&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueButton</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueButton</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> variant</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> @click</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;isEndDrawerOpen = false&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            &gt;Save&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueButton</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueDrawer</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueButton</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> @click</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;showTopDrawer&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Open Notifications&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueButton</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueDrawer</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :open</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;isTopDrawerOpen&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      position</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;top&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      heading</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Notifications&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      show-close-button</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      @drawer-close</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;isTopDrawerOpen = false&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> style</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;display: flex; flex-direction: column; gap: 1rem;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> style</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;padding: 0.75rem; background: #f3f4f6;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">strong</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;New message&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">strong</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> style</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;margin: 0.25rem 0 0 0;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;You have a new message&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueDrawer</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueButton</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> @click</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;showBottomDrawer&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Open Quick Actions&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueButton</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueDrawer</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :open</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;isBottomDrawerOpen&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      position</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;bottom&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      heading</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Quick Actions&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      show-close-button</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      @drawer-close</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;isBottomDrawerOpen = false&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> style</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;display: flex; gap: 1rem; flex-wrap: wrap;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueButton</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;New Item&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueButton</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueButton</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Upload&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueButton</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueButton</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Download&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueButton</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueDrawer</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> VueDrawer </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/drawer/vue&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> VueButton </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/button/vue&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  components: {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    VueDrawer,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    VueButton,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  }</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">,</span></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">  data</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">() </span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">    return</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      isStartDrawerOpen: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">false</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      isEndDrawerOpen: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">false</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      isTopDrawerOpen: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">false</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      isBottomDrawerOpen: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">false</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    };</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  }</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  methods: {</span></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">    showStartDrawer</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">() {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      this</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">.isStartDrawerOpen </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> true</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    },</span></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">    showEndDrawer</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">() {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      this</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">.isEndDrawerOpen </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> true</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    },</span></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">    showTopDrawer</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">() {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      this</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">.isTopDrawerOpen </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> true</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    },</span></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">    showBottomDrawer</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">() {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      this</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">.isBottomDrawerOpen </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> true</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  }</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">,</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><details class="details custom-block"><summary>React</summary><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { useState } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;react&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  ReactDrawer,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  DrawerHeader,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  DrawerFooter,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">} </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/drawer/react&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> function</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> DrawerExample</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">() </span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> [</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">isStartDrawerOpen</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">setIsStartDrawerOpen</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">] </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> useState</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">false</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> [</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">isEndDrawerOpen</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">setIsEndDrawerOpen</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">] </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> useState</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">false</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> [</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">isTopDrawerOpen</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">setIsTopDrawerOpen</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">] </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> useState</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">false</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> [</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">isBottomDrawerOpen</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">setIsBottomDrawerOpen</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">] </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> useState</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">false</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  return</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> onClick</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">() </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> setIsStartDrawerOpen</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">true</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">)</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        Open Navigation</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactDrawer</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        open</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">isStartDrawerOpen</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        position</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;start&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        heading</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Navigation&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        showCloseButton</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">true</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        onDrawerClose</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">() </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> setIsStartDrawerOpen</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">false</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">)</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">nav</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ul</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> style</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{ listStyle: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;none&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, padding: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> }</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">li</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> style</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{ padding: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;0.5rem 0&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> }</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">              &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> href</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;#&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Dashboard&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">li</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">li</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> style</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{ padding: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;0.5rem 0&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> }</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">              &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> href</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;#&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Projects&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">li</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">li</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> style</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{ padding: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;0.5rem 0&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> }</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">              &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> href</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;#&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Settings&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">li</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ul</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">nav</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactDrawer</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> onClick</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">() </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> setIsEndDrawerOpen</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">true</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">)</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Open Settings&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactDrawer</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        open</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">isEndDrawerOpen</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        position</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;end&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        heading</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Settings&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        showCloseButton</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">true</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        onDrawerClose</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">() </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> setIsEndDrawerOpen</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">false</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">)</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">h4</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Preferences&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">h4</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">label</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> style</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{ display: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;block&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, marginBottom: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;1rem&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> }</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">input</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> type</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;checkbox&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> style</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{ marginRight: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;0.5rem&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> }</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            Enable notifications</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">DrawerFooter</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">            style</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">              display: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;flex&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">              gap: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;0.5rem&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">              justifyContent: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;flex-end&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            }</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> onClick</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">() </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> setIsEndDrawerOpen</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">false</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">)</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Cancel&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> onClick</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">() </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> setIsEndDrawerOpen</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">false</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">)</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Save&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">DrawerFooter</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactDrawer</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> onClick</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">() </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> setIsTopDrawerOpen</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">true</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">)</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        Open Notifications</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactDrawer</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        open</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">isTopDrawerOpen</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        position</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;top&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        heading</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Notifications&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        showCloseButton</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">true</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        onDrawerClose</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">() </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> setIsTopDrawerOpen</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">false</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">)</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> style</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{ display: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;flex&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, flexDirection: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;column&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, gap: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;1rem&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> }</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> style</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{ padding: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;0.75rem&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, background: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;#f3f4f6&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> }</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">strong</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;New message&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">strong</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> style</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{ margin: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;0.25rem 0 0 0&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> }</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;You have a new message&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactDrawer</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> onClick</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">() </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> setIsBottomDrawerOpen</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">true</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">)</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        Open Quick Actions</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactDrawer</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        open</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">isBottomDrawerOpen</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        position</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;bottom&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        heading</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Quick Actions&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        showCloseButton</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">true</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        onDrawerClose</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">() </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> setIsBottomDrawerOpen</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">false</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">)</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> style</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{ display: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;flex&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, gap: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;1rem&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, flexWrap: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;wrap&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> }</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;New Item&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Upload&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Download&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactDrawer</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  );</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div></details><details class="details custom-block"><summary>Lit (Web Components)</summary><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;module&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  import</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;agnosticui-core/drawer&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  @</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">customElement</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;my-element&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">)</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> class</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> MyElement</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> extends</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> LitElement</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">    firstUpdated</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">() {</span></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">      // Query all drawers and buttons within the shadow DOM</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">      const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> startDrawer</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> this</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">.shadowRoot?.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">querySelector</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;#start-drawer&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">as</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> any</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">      const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> endDrawer</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> this</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">.shadowRoot?.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">querySelector</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;#end-drawer&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">as</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> any</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">      const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> topDrawer</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> this</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">.shadowRoot?.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">querySelector</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;#top-drawer&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">as</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> any</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">      const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> bottomDrawer</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> this</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">.shadowRoot?.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">querySelector</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;#bottom-drawer&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">as</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> any</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">      const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> openStartBtn</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> this</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">.shadowRoot?.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">querySelector</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;#open-start&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">      const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> openEndBtn</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> this</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">.shadowRoot?.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">querySelector</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;#open-end&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">      const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> openTopBtn</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> this</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">.shadowRoot?.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">querySelector</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;#open-top&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">      const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> openBottomBtn</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> this</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">.shadowRoot?.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">querySelector</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;#open-bottom&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">      // Add click handlers for each button</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      openStartBtn?.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">addEventListener</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;click&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, () </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">        if</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (startDrawer) startDrawer.open </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> true</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      });</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      openEndBtn?.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">addEventListener</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;click&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, () </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">        if</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (endDrawer) endDrawer.open </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> true</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      });</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      openTopBtn?.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">addEventListener</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;click&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, () </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">        if</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (topDrawer) topDrawer.open </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> true</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      });</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      openBottomBtn?.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">addEventListener</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;click&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, () </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">        if</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (bottomDrawer) bottomDrawer.open </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> true</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      });</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">      // Add close handlers for each drawer</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      [startDrawer, endDrawer, topDrawer, bottomDrawer].</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">forEach</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">drawer</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        drawer?.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">addEventListener</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;drawer-close&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, () </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          drawer.open </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> false</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;Drawer closed&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        });</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      });</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    }</span></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">    // ... rest of your class ...</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  }</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> id</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;open-start&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Open Navigation&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-drawer</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    id</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;start-drawer&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    position</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;start&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    heading</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Navigation&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    show-close-button</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">nav</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ul</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> style</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;list-style: none; padding: 0;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">li</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> style</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;padding: 0.5rem 0;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> href</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;#&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Dashboard&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">li</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">li</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> style</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;padding: 0.5rem 0;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> href</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;#&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Projects&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">li</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">li</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> style</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;padding: 0.5rem 0;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> href</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;#&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Settings&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">a</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">li</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ul</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">nav</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-drawer</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> id</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;open-end&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Open Settings&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-drawer</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    id</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;end-drawer&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    position</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;end&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    heading</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Settings&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    show-close-button</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">h4</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Preferences&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">h4</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">label</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> style</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;display: block; margin-bottom: 1rem;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">input</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;checkbox&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> style</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;margin-right: 0.5rem;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        Enable notifications</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      slot</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;footer&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      style</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;display: flex; gap: 0.5rem; justify-content: flex-end;&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Cancel&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Save&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-drawer</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> id</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;open-top&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Open Notifications&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-drawer</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    id</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;top-drawer&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    position</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;top&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    heading</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Notifications&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    show-close-button</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> style</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;display: flex; flex-direction: column; gap: 1rem;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> style</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;padding: 0.75rem; background: #f3f4f6;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">strong</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;New message&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">strong</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> style</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;margin: 0.25rem 0 0 0;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;You have a new message&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-drawer</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> id</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;open-bottom&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Open Quick Actions&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-drawer</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    id</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;bottom-drawer&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    position</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;bottom&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    heading</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Quick Actions&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    show-close-button</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> style</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;display: flex; gap: 1rem; flex-wrap: wrap;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;New Item&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Upload&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Download&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-drawer</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><table class="ag-table ag-table--striped"><thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>open</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Whether the drawer is open</td></tr><tr><td><code>position</code></td><td><code>&#39;start&#39; | &#39;end&#39; | &#39;top&#39; | &#39;bottom&#39;</code></td><td><code>&#39;bottom&#39;</code></td><td>The edge from which the drawer slides in. &#39;start&#39; is left in LTR, &#39;end&#39; is right in LTR</td></tr><tr><td><code>heading</code></td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>The heading text for the drawer</td></tr><tr><td><code>description</code></td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>The description text for the drawer</td></tr><tr><td><code>noCloseOnEscape</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Prevents closing the drawer when pressing the Escape key</td></tr><tr><td><code>noCloseOnBackdrop</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Prevents closing the drawer when clicking the backdrop</td></tr><tr><td><code>showCloseButton</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Shows a close button (×) in the top-right corner of the drawer</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><table class="ag-table ag-table--striped"><thead><tr><th>Event</th><th>Payload</th><th>Description</th></tr></thead><tbody><tr><td><code>@drawer-open</code> (Vue) / <code>onDrawerOpen</code> (React) / <code>drawer-open</code> (Lit)</td><td><code>DrawerOpenEvent</code></td><td>Emitted when the drawer is opened</td></tr><tr><td><code>@drawer-close</code> (Vue) / <code>onDrawerClose</code> (React) / <code>drawer-close</code> (Lit)</td><td><code>DrawerCloseEvent</code></td><td>Emitted when the drawer is closed (via close button, Escape key, or backdrop click)</td></tr><tr><td><code>@drawer-cancel</code> (Vue) / <code>onDrawerCancel</code> (React) / <code>drawer-cancel</code> (Lit)</td><td><code>DrawerCancelEvent</code></td><td>Emitted when the drawer is cancelled (via Escape key or backdrop click, but not via close button)</td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h2><h3 id="vue" tabindex="-1">Vue <a class="header-anchor" href="#vue" aria-label="Permalink to &quot;Vue&quot;">​</a></h3><ul><li><strong>Default slot</strong>: Main content of the drawer</li><li><strong>slot=&quot;header&quot;</strong>: Custom header content (replaces <code>heading</code> prop when used)</li><li><strong>slot=&quot;footer&quot;</strong>: Footer content for action buttons</li></ul><h3 id="react" tabindex="-1">React <a class="header-anchor" href="#react" aria-label="Permalink to &quot;React&quot;">​</a></h3><ul><li><strong>children</strong>: Main content of the drawer</li><li><strong>DrawerHeader</strong>: Custom header content (replaces <code>heading</code> prop when used)</li><li><strong>DrawerFooter</strong>: Footer content for action buttons</li></ul><h3 id="lit" tabindex="-1">Lit <a class="header-anchor" href="#lit" aria-label="Permalink to &quot;Lit&quot;">​</a></h3><ul><li><strong>Default slot</strong>: Main content of the drawer</li><li><strong>slot=&quot;header&quot;</strong>: Custom header content (replaces <code>heading</code> prop when used)</li><li><strong>slot=&quot;footer&quot;</strong>: Footer content for action buttons</li></ul><h2 id="accessibility" tabindex="-1">Accessibility <a class="header-anchor" href="#accessibility" aria-label="Permalink to &quot;Accessibility&quot;">​</a></h2><p>The Drawer component follows accessibility best practices for slide-out panels:</p><ul><li>Uses <code>role=&quot;dialog&quot;</code> and <code>aria-modal=&quot;true&quot;</code> for proper screen reader announcement</li><li>Implements focus trap to keep keyboard focus within the drawer</li><li>Pressing <strong>Escape</strong> closes the drawer (unless <code>noCloseOnEscape</code> is true)</li><li>Clicking the backdrop closes the drawer (unless <code>noCloseOnBackdrop</code> is true)</li><li>Returns focus to the triggering element when closed</li><li>Prevents background scroll when drawer is open</li><li>Close button has <code>aria-label=&quot;Close dialog&quot;</code> for screen readers</li><li>Drawer can be labeled via <code>heading</code> prop or custom header with proper heading element</li><li>Keyboard navigation cycles through all focusable elements within the drawer</li><li>Supports <strong>Tab</strong> and <strong>Shift+Tab</strong> for navigation within the focus trap</li></ul><h3 id="best-practices" tabindex="-1">Best Practices <a class="header-anchor" href="#best-practices" aria-label="Permalink to &quot;Best Practices&quot;">​</a></h3><ul><li>Always provide a heading (via <code>heading</code> prop or custom header) for accessibility</li><li>Use <code>showCloseButton</code> or provide explicit close actions in footer for easy dismissal</li><li>Use <code>position=&quot;start&quot;</code> or <code>position=&quot;end&quot;</code> for primary navigation</li><li>Use <code>position=&quot;top&quot;</code> or <code>position=&quot;bottom&quot;</code> for contextual actions or notifications</li><li>Consider the mobile experience - drawers from start/end work well, top/bottom may be harder to reach</li><li>Keep drawer content focused and avoid nesting multiple levels of navigation</li><li>For filters or settings, provide clear &quot;Apply&quot; and &quot;Cancel&quot; actions in the footer</li></ul><h2 id="use-cases" tabindex="-1">Use Cases <a class="header-anchor" href="#use-cases" aria-label="Permalink to &quot;Use Cases&quot;">​</a></h2><ul><li><strong>Navigation</strong> (<code>start</code>/<code>end</code>): Primary navigation menu, contextual actions</li><li><strong>Settings</strong> (<code>end</code>): User preferences, application settings</li><li><strong>Filters</strong> (<code>end</code>): Search filters, data table filters</li><li><strong>Notifications</strong> (<code>top</code>): System notifications, alerts</li><li><strong>Quick Actions</strong> (<code>bottom</code>): Mobile-friendly action menus, sharing options</li></ul>`,23))]))}});export{Ns as __pageData,Ps as default};
