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
`,Ns=JSON.parse('{"title":"Drawer","description":"","frontmatter":{},"headers":[],"relativePath":"components/drawer.md","filePath":"components/drawer.md"}'),Es={name:"components/drawer.md"},Ps=Object.assign(Es,{setup(p){return(s,n)=>(w(),C("div",null,[n[1]||(n[1]=i("h1",{id:"drawer",tabindex:"-1"},[e("Drawer "),i("a",{class:"header-anchor",href:"#drawer","aria-label":'Permalink to "Drawer"'},"​")],-1)),t(q),n[2]||(n[2]=i("p",null,"A drawer is a panel that slides in from the edge of the screen, typically used for navigation menus, filters, settings, or other supplementary content. Drawers can slide in from any of the four edges: start (left), end (right), top, or bottom.",-1)),n[3]||(n[3]=i("h2",{id:"examples",tabindex:"-1"},[e("Examples "),i("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),t(z,{component:"drawer","vue-code":m(ms),"lit-code":m(Cs),"react-code":m(ws)},{vue:l(()=>[t(cs)]),lit:l(()=>[...n[0]||(n[0]=[i("drawer-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),n[4]||(n[4]=T("",23))]))}});export{Ns as __pageData,Ps as default};
