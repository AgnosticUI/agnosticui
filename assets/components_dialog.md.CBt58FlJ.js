var v=Object.defineProperty;var f=(e,s,a)=>s in e?v(e,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[s]=a;var m=(e,s,a)=>f(e,typeof s!="symbol"?s+"":s,a);import{A}from"./chunks/AlphaWarning.yC7ZufpQ.js";import"./chunks/Dialog.CPC0ZeN3.js";import{d as u,p as w,c as g,o as r,r as C,K as O,_ as q,C as c,j as i,G as t,w as l,a as k,e as x,t as S,ae as V,k as y}from"./chunks/framework.NAAYCHZu.js";import{v as N}from"./chunks/VueButton.vue_vue_type_script_setup_true_lang-D1jGatE9.BFu3fx1f.js";import{F as T}from"./chunks/FrameworkExample.Cm-JbUj-.js";import{a as H,i as R,x as D}from"./chunks/Button.CFkPNK98.js";import"./chunks/createLucideIcon.B61Wqv9x.js";import"./chunks/CloseButton.BYeeZuwt.js";import"./chunks/state-CovhUvdr.DWhhlYib.js";import"./chunks/sdk.m.DhOmSlC9.js";import"./chunks/Icon.DjToxxjJ.js";const P=[".open",".noCloseOnEscape",".noCloseOnBackdrop",".showCloseButton","heading","description"],I=u({__name:"VueDialog",props:{open:{type:Boolean,default:!1},heading:{},description:{},noCloseOnEscape:{type:Boolean,default:!1},noCloseOnBackdrop:{type:Boolean,default:!1},showCloseButton:{type:Boolean,default:!1}},emits:["dialog-open","dialog-close","dialog-cancel","update:open"],setup(e,{emit:s}){const a=s,F=w(),n=h=>{a("dialog-open",h),a("update:open",!0)},o=h=>{a("dialog-close",h),a("update:open",!1)},d=h=>{a("dialog-cancel",h),a("update:open",!1)};return(h,B)=>(r(),g("ag-dialog",O({ref_key:"dialogRef",ref:F,".open":e.open,".noCloseOnEscape":e.noCloseOnEscape,".noCloseOnBackdrop":e.noCloseOnBackdrop,".showCloseButton":e.showCloseButton,heading:e.heading,description:e.description,onDialogOpen:n,onDialogClose:o,onDialogCancel:d},h.$attrs),[C(h.$slots,"default")],48,P))}}),U={slot:"header"},L=u({__name:"VueDialogHeader",setup(e){return(s,a)=>(r(),g("div",U,[C(s.$slots,"default")]))}}),z={slot:"footer"},W=u({__name:"VueDialogFooter",setup(e){return(s,a)=>(r(),g("div",z,[C(s.$slots,"default")]))}}),j={name:"DialogExamples",components:{VueDialog:I,VueDialogHeader:L,VueDialogFooter:W,VueButton:N},data(){return{isBasicDialogOpen:!1,isHeaderFooterDialogOpen:!1,isCloseButtonDialogOpen:!1,isNoEscapeDialogOpen:!1,isNoBackdropDialogOpen:!1,isEventDialogOpen:!1,isCustomDialogOpen:!1,lastEvent:null}},methods:{showBasicDialog(){this.isBasicDialogOpen=!0},showHeaderFooterDialog(){this.isHeaderFooterDialogOpen=!0},showCloseButtonDialog(){this.isCloseButtonDialogOpen=!0},showNoEscapeDialog(){this.isNoEscapeDialogOpen=!0},showNoBackdropDialog(){this.isNoBackdropDialogOpen=!0},showEventDialog(){this.isEventDialogOpen=!0,this.lastEvent=null},showCustomDialog(){this.isCustomDialogOpen=!0},handleDialogOpen(){this.lastEvent="dialog-open"},handleDialogClose(){this.lastEvent="dialog-close"},handleDialogCancel(){this.lastEvent="dialog-cancel"}}},M={class:"stacked-mobile mbe4"},X={class:"stacked-mobile mbe4"},_={style:{display:"flex",gap:"0.5rem","justify-content":"flex-end"}},$={class:"stacked-mobile mbe4"},K={class:"stacked-mobile mbe4"},G={class:"stacked-mobile mbe4"},J={class:"stacked-mobile mbe4"},Q={key:0,style:{"margin-top":"1rem",padding:"0.5rem",background:"var(--ag-background-secondary)","border-radius":"4px"}},Y={class:"stacked-mobile mbe4"},Z={style:{display:"flex",gap:"0.5rem","justify-content":"flex-end"}};function ss(e,s,a,F,n,o){const d=c("VueButton"),h=c("VueDialog"),B=c("VueDialogHeader"),E=c("VueDialogFooter");return r(),g("section",null,[s[30]||(s[30]=i("div",{class:"mbe4"},[i("h2",null,"Basic Dialog")],-1)),i("div",M,[t(d,{onClick:o.showBasicDialog},{default:l(()=>[...s[10]||(s[10]=[k("Open Basic Dialog",-1)])]),_:1},8,["onClick"]),t(h,{open:n.isBasicDialogOpen,"onUpdate:open":s[0]||(s[0]=p=>n.isBasicDialogOpen=p),heading:"Basic Dialog",description:"This is a basic dialog with heading and description."},{default:l(()=>[...s[11]||(s[11]=[i("p",null,"This is the basic dialog content.",-1)])]),_:1},8,["open"])]),s[31]||(s[31]=i("div",{class:"mbe4"},[i("h2",null,"With Header and Footer")],-1)),i("div",X,[t(d,{onClick:o.showHeaderFooterDialog},{default:l(()=>[...s[12]||(s[12]=[k("Open Dialog with Header/Footer",-1)])]),_:1},8,["onClick"]),t(h,{open:n.isHeaderFooterDialogOpen,"onUpdate:open":s[3]||(s[3]=p=>n.isHeaderFooterDialogOpen=p)},{default:l(()=>[t(B,null,{default:l(()=>[...s[13]||(s[13]=[i("h2",{class:"m0 p0 b0"},"My Header",-1)])]),_:1}),s[16]||(s[16]=i("p",null,"This dialog uses dialog header and footer components.",-1)),t(E,null,{default:l(()=>[i("div",_,[t(d,{onClick:s[1]||(s[1]=p=>n.isHeaderFooterDialogOpen=!1)},{default:l(()=>[...s[14]||(s[14]=[k("Cancel",-1)])]),_:1}),t(d,{variant:"primary",onClick:s[2]||(s[2]=p=>n.isHeaderFooterDialogOpen=!1)},{default:l(()=>[...s[15]||(s[15]=[k("Confirm",-1)])]),_:1})])]),_:1})]),_:1},8,["open"])]),s[32]||(s[32]=i("div",{class:"mbe4"},[i("h2",null,"With Close Button")],-1)),i("div",$,[t(d,{onClick:o.showCloseButtonDialog},{default:l(()=>[...s[17]||(s[17]=[k("Open Dialog with Close Button",-1)])]),_:1},8,["onClick"]),t(h,{open:n.isCloseButtonDialogOpen,"onUpdate:open":s[4]||(s[4]=p=>n.isCloseButtonDialogOpen=p),heading:"Dialog with Close Button",description:"Click the X button to close this dialog.","show-close-button":""},{default:l(()=>[...s[18]||(s[18]=[i("p",null,"This dialog includes a close button in the top-right corner.",-1)])]),_:1},8,["open"])]),s[33]||(s[33]=i("div",{class:"mbe4"},[i("h2",null,"No Close on Escape")],-1)),i("div",K,[t(d,{onClick:o.showNoEscapeDialog},{default:l(()=>[...s[19]||(s[19]=[k("Open No Escape Dialog",-1)])]),_:1},8,["onClick"]),t(h,{open:n.isNoEscapeDialogOpen,"onUpdate:open":s[5]||(s[5]=p=>n.isNoEscapeDialogOpen=p),heading:"No Close on Escape",description:"Pressing Escape will not close this dialog.","no-close-on-escape":"","show-close-button":""},{default:l(()=>[...s[20]||(s[20]=[i("p",null,"Try pressing the Escape key - the dialog will not close.",-1),i("p",null,"Use the close button instead.",-1)])]),_:1},8,["open"])]),s[34]||(s[34]=i("div",{class:"mbe4"},[i("h2",null,"No Close on Backdrop")],-1)),i("div",G,[t(d,{onClick:o.showNoBackdropDialog},{default:l(()=>[...s[21]||(s[21]=[k("Open No Backdrop Close Dialog",-1)])]),_:1},8,["onClick"]),t(h,{open:n.isNoBackdropDialogOpen,"onUpdate:open":s[6]||(s[6]=p=>n.isNoBackdropDialogOpen=p),heading:"No Close on Backdrop",description:"Clicking the backdrop will not close this dialog.","no-close-on-backdrop":"","show-close-button":""},{default:l(()=>[...s[22]||(s[22]=[i("p",null,"Try clicking outside the dialog - it will not close.",-1),i("p",null,"Use the close button instead.",-1)])]),_:1},8,["open"])]),s[35]||(s[35]=i("div",{class:"mbe4"},[i("h2",null,"Event Handling")],-1)),i("div",J,[t(d,{onClick:o.showEventDialog},{default:l(()=>[...s[23]||(s[23]=[k("Open Event Dialog",-1)])]),_:1},8,["onClick"]),t(h,{open:n.isEventDialogOpen,"onUpdate:open":s[7]||(s[7]=p=>n.isEventDialogOpen=p),heading:"Event Testing",description:"This dialog demonstrates event handling.","show-close-button":"",onDialogOpen:o.handleDialogOpen,onDialogClose:o.handleDialogClose,onDialogCancel:o.handleDialogCancel},{default:l(()=>[s[25]||(s[25]=i("p",null,"Try closing this dialog in different ways:",-1)),s[26]||(s[26]=i("ul",null,[i("li",null,"Click the X button (triggers dialog-close)"),i("li",null,"Press Escape (triggers dialog-cancel)"),i("li",null,"Click the backdrop (triggers dialog-cancel)")],-1)),n.lastEvent?(r(),g("p",Q,[s[24]||(s[24]=k(" Last event: ",-1)),i("strong",null,S(n.lastEvent),1)])):x("",!0)]),_:1},8,["open","onDialogOpen","onDialogClose","onDialogCancel"])]),s[36]||(s[36]=i("div",{class:"mbe4"},[i("h2",null,"Customized with CSS Shadow Parts")],-1)),i("div",Y,[t(d,{onClick:o.showCustomDialog},{default:l(()=>[...s[27]||(s[27]=[k("Open Customized Dialog",-1)])]),_:1},8,["onClick"]),t(h,{open:n.isCustomDialogOpen,"onUpdate:open":s[9]||(s[9]=p=>n.isCustomDialogOpen=p),class:"custom-parts-dialog",heading:"Styled Dialog",description:"This dialog is customized using CSS Shadow Parts.","show-close-button":""},{default:l(()=>[s[29]||(s[29]=i("p",null,"This dialog demonstrates CSS Shadow Parts customization with styled backdrop, container, header, heading, content, footer, and close button.",-1)),t(E,null,{default:l(()=>[i("div",Z,[t(d,{onClick:s[8]||(s[8]=p=>n.isCustomDialogOpen=!1)},{default:l(()=>[...s[28]||(s[28]=[k("Close",-1)])]),_:1})])]),_:1})]),_:1},8,["open"])])])}const is=q(j,[["render",ss],["__scopeId","data-v-d2235996"]]);class b extends H{createRenderRoot(){return this}constructor(){super(),this.isBasicDialogOpen=!1,this.isHeaderFooterDialogOpen=!1,this.isCloseButtonDialogOpen=!1,this.isNoEscapeDialogOpen=!1,this.isNoBackdropDialogOpen=!1,this.isEventDialogOpen=!1,this.isCustomDialogOpen=!1,this.lastEvent=null}firstUpdated(){const s=this.querySelector("#event-dialog");s&&(s.addEventListener("dialog-open",()=>{this.lastEvent="dialog-open",this.requestUpdate()}),s.addEventListener("dialog-close",()=>{this.lastEvent="dialog-close",this.requestUpdate()}),s.addEventListener("dialog-cancel",()=>{this.lastEvent="dialog-cancel",this.requestUpdate()})),this.querySelectorAll("ag-dialog").forEach(a=>{a.addEventListener("dialog-close",F=>{const n=F.target.id;this.handleDialogClose(n)}),a.addEventListener("dialog-cancel",F=>{const n=F.target.id;this.handleDialogClose(n)})})}handleDialogClose(s){switch(s){case"basic-dialog":this.isBasicDialogOpen=!1;break;case"header-footer-dialog":this.isHeaderFooterDialogOpen=!1;break;case"close-button-dialog":this.isCloseButtonDialogOpen=!1;break;case"no-escape-dialog":this.isNoEscapeDialogOpen=!1;break;case"no-backdrop-dialog":this.isNoBackdropDialogOpen=!1;break;case"event-dialog":this.isEventDialogOpen=!1;break;case"custom-dialog":this.isCustomDialogOpen=!1;break}this.requestUpdate()}showBasicDialog(){this.isBasicDialogOpen=!0,this.requestUpdate(),setTimeout(()=>{const s=this.querySelector("#basic-dialog");s&&(s.open=!0)},0)}showHeaderFooterDialog(){this.isHeaderFooterDialogOpen=!0,this.requestUpdate(),setTimeout(()=>{const s=this.querySelector("#header-footer-dialog");s&&(s.open=!0)},0)}showCloseButtonDialog(){this.isCloseButtonDialogOpen=!0,this.requestUpdate(),setTimeout(()=>{const s=this.querySelector("#close-button-dialog");s&&(s.open=!0)},0)}showNoEscapeDialog(){this.isNoEscapeDialogOpen=!0,this.requestUpdate(),setTimeout(()=>{const s=this.querySelector("#no-escape-dialog");s&&(s.open=!0)},0)}showNoBackdropDialog(){this.isNoBackdropDialogOpen=!0,this.requestUpdate(),setTimeout(()=>{const s=this.querySelector("#no-backdrop-dialog");s&&(s.open=!0)},0)}showEventDialog(){this.isEventDialogOpen=!0,this.lastEvent=null,this.requestUpdate(),setTimeout(()=>{const s=this.querySelector("#event-dialog");s&&(s.open=!0)},0)}showCustomDialog(){this.isCustomDialogOpen=!0,this.requestUpdate(),setTimeout(()=>{const s=this.querySelector("#custom-dialog");s&&(s.open=!0)},0)}render(){return D`
      <style>
        .custom-parts-dialog::part(ag-dialog-backdrop) {
          background: linear-gradient(
            135deg,
            rgba(102, 126, 234, 0.8) 0%,
            rgba(118, 75, 162, 0.8) 100%
          );
        }

        .custom-parts-dialog::part(ag-dialog-container) {
          border: 3px solid #667eea;
          box-shadow: 0 20px 60px rgba(102, 126, 234, 0.4);
        }

        .custom-parts-dialog::part(ag-dialog-header) {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 1.5rem;
          margin: -1.5rem -1.5rem 1rem -1.5rem;
          border-radius: 0.5rem 0.5rem 0 0;
        }

        .custom-parts-dialog::part(ag-dialog-heading) {
          font-size: 1.5rem;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .custom-parts-dialog::part(ag-dialog-content) {
          padding: 0 0.5rem;
        }

        .custom-parts-dialog::part(ag-dialog-footer) {
          padding: 1rem;
          margin: 1rem -1.5rem -1.5rem -1.5rem;
          border-radius: 0 0 0.5rem 0.5rem;
        }

        .custom-parts-dialog::part(ag-dialog-close-button) {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          border-radius: 50%;
          width: 2rem;
          height: 2rem;
          font-size: 1.5rem;
        }

        .custom-parts-dialog::part(ag-dialog-close-button):hover {
          background: rgba(255, 255, 255, 0.3);
        }
      </style>

      <section>
        <!-- Basic Dialog -->
        <div class="mbe4">
          <h2>Basic Dialog</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-button @click=${this.showBasicDialog}>Open Basic Dialog</ag-button>
          <ag-dialog
            id="basic-dialog"
            heading="Basic Dialog"
            description="This is a basic dialog with heading and description."
          >
            <p>This is the basic dialog content.</p>
          </ag-dialog>
        </div>

        <!-- With Header and Footer -->
        <div class="mbe4">
          <h2>With Header and Footer</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-button @click=${this.showHeaderFooterDialog}>Open Dialog with Header/Footer</ag-button>
          <ag-dialog id="header-footer-dialog">
            <ag-dialog-header>
              <h2 class="m0 p0 b0">My Header</h2>
            </ag-dialog-header>
            <p>This dialog uses dialog header and footer components.</p>
            <ag-dialog-footer>
              <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
                <ag-button @click=${()=>{const s=this.querySelector("#header-footer-dialog");s&&(s.open=!1)}}>Cancel</ag-button>
                <ag-button
                  variant="primary"
                  @click=${()=>{const s=this.querySelector("#header-footer-dialog");s&&(s.open=!1)}}
                >Confirm</ag-button>
              </div>
            </ag-dialog-footer>
          </ag-dialog>
        </div>

        <!-- With Close Button -->
        <div class="mbe4">
          <h2>With Close Button</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-button @click=${this.showCloseButtonDialog}>Open Dialog with Close Button</ag-button>
          <ag-dialog
            id="close-button-dialog"
            heading="Dialog with Close Button"
            description="Click the X button to close this dialog."
            show-close-button
          >
            <p>This dialog includes a close button in the top-right corner.</p>
          </ag-dialog>
        </div>

        <!-- No Close on Escape -->
        <div class="mbe4">
          <h2>No Close on Escape</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-button @click=${this.showNoEscapeDialog}>Open No Escape Dialog</ag-button>
          <ag-dialog
            id="no-escape-dialog"
            heading="No Close on Escape"
            description="Pressing Escape will not close this dialog."
            no-close-on-escape
            show-close-button
          >
            <p>Try pressing the Escape key - the dialog will not close.</p>
            <p>Use the close button instead.</p>
          </ag-dialog>
        </div>

        <!-- No Close on Backdrop -->
        <div class="mbe4">
          <h2>No Close on Backdrop</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-button @click=${this.showNoBackdropDialog}>Open No Backdrop Close Dialog</ag-button>
          <ag-dialog
            id="no-backdrop-dialog"
            heading="No Close on Backdrop"
            description="Clicking the backdrop will not close this dialog."
            no-close-on-backdrop
            show-close-button
          >
            <p>Try clicking outside the dialog - it will not close.</p>
            <p>Use the close button instead.</p>
          </ag-dialog>
        </div>

        <!-- Event Handling -->
        <div class="mbe4">
          <h2>Event Handling</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-button @click=${this.showEventDialog}>Open Event Dialog</ag-button>
          <ag-dialog
            id="event-dialog"
            heading="Event Testing"
            description="This dialog demonstrates event handling."
            show-close-button
          >
            <p>Try closing this dialog in different ways:</p>
            <ul>
              <li>Click the X button (triggers dialog-close)</li>
              <li>Press Escape (triggers dialog-cancel)</li>
              <li>Click the backdrop (triggers dialog-cancel)</li>
            </ul>
            ${this.lastEvent?D`
              <p style="margin-top: 1rem; padding: 0.5rem; background: var(--ag-background-secondary); border-radius: 4px;">
                Last event: <strong>${this.lastEvent}</strong>
              </p>
            `:""}
          </ag-dialog>
        </div>

        <!-- Customized with CSS Shadow Parts -->
        <div class="mbe4">
          <h2>Customized with CSS Shadow Parts</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-button @click=${this.showCustomDialog}>Open Customized Dialog</ag-button>
          <ag-dialog
            id="custom-dialog"
            class="custom-parts-dialog"
            heading="Styled Dialog"
            description="This dialog is customized using CSS Shadow Parts."
            show-close-button
          >
            <p>This dialog demonstrates CSS Shadow Parts customization with styled backdrop, container, header, heading, content, footer, and close button.</p>
            <ag-dialog-footer>
              <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
                <ag-button @click=${()=>{const s=this.querySelector("#custom-dialog");s&&(s.open=!1)}}>Close</ag-button>
              </div>
            </ag-dialog-footer>
          </ag-dialog>
        </div>
      </section>
    `}}m(b,"styles",R`
    .custom-parts-dialog::part(ag-dialog-backdrop) {
      background: linear-gradient(
        135deg,
        rgba(102, 126, 234, 0.8) 0%,
        rgba(118, 75, 162, 0.8) 100%
      );
    }

    .custom-parts-dialog::part(ag-dialog-container) {
      border: 3px solid #667eea;
      box-shadow: 0 20px 60px rgba(102, 126, 234, 0.4);
    }

    .custom-parts-dialog::part(ag-dialog-header) {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 1.5rem;
      margin: -1.5rem -1.5rem 1rem -1.5rem;
      border-radius: 0.5rem 0.5rem 0 0;
    }

    .custom-parts-dialog::part(ag-dialog-heading) {
      font-size: 1.5rem;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    .custom-parts-dialog::part(ag-dialog-content) {
      padding: 0 0.5rem;
    }

    .custom-parts-dialog::part(ag-dialog-footer) {
      padding: 1rem;
      margin: 1rem -1.5rem -1.5rem -1.5rem;
      border-radius: 0 0 0.5rem 0.5rem;
    }

    .custom-parts-dialog::part(ag-dialog-close-button) {
      background: rgba(255, 255, 255, 0.2);
      color: white;
      border-radius: 50%;
      width: 2rem;
      height: 2rem;
      font-size: 1.5rem;
    }

    .custom-parts-dialog::part(ag-dialog-close-button):hover {
      background: rgba(255, 255, 255, 0.3);
    }
  `);customElements.define("dialog-lit-examples",b);const as=`<template>
  <section>
    <div class="mbe4">
      <h2>Basic Dialog</h2>
    </div>
    <div class="stacked-mobile mbe4">
      <VueButton @click="showBasicDialog">Open Basic Dialog</VueButton>
      <VueDialog
        v-model:open="isBasicDialogOpen"
        heading="Basic Dialog"
        description="This is a basic dialog with heading and description."
      >
        <p>This is the basic dialog content.</p>
      </VueDialog>
    </div>

    <div class="mbe4">
      <h2>With Header and Footer</h2>
    </div>
    <div class="stacked-mobile mbe4">
      <VueButton @click="showHeaderFooterDialog">Open Dialog with Header/Footer</VueButton>
      <VueDialog v-model:open="isHeaderFooterDialogOpen">
        <VueDialogHeader>
          <h2 class="m0 p0 b0">My Header</h2>
        </VueDialogHeader>
        <p>This dialog uses dialog header and footer components.</p>
        <VueDialogFooter>
          <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
            <VueButton @click="isHeaderFooterDialogOpen = false">Cancel</VueButton>
            <VueButton
              variant="primary"
              @click="isHeaderFooterDialogOpen = false"
            >Confirm</VueButton>
          </div>
        </VueDialogFooter>
      </VueDialog>
    </div>

    <div class="mbe4">
      <h2>With Close Button</h2>
    </div>
    <div class="stacked-mobile mbe4">
      <VueButton @click="showCloseButtonDialog">Open Dialog with Close Button</VueButton>
      <VueDialog
        v-model:open="isCloseButtonDialogOpen"
        heading="Dialog with Close Button"
        description="Click the X button to close this dialog."
        show-close-button
      >
        <p>This dialog includes a close button in the top-right corner.</p>
      </VueDialog>
    </div>

    <div class="mbe4">
      <h2>No Close on Escape</h2>
    </div>
    <div class="stacked-mobile mbe4">
      <VueButton @click="showNoEscapeDialog">Open No Escape Dialog</VueButton>
      <VueDialog
        v-model:open="isNoEscapeDialogOpen"
        heading="No Close on Escape"
        description="Pressing Escape will not close this dialog."
        no-close-on-escape
        show-close-button
      >
        <p>Try pressing the Escape key - the dialog will not close.</p>
        <p>Use the close button instead.</p>
      </VueDialog>
    </div>

    <div class="mbe4">
      <h2>No Close on Backdrop</h2>
    </div>
    <div class="stacked-mobile mbe4">
      <VueButton @click="showNoBackdropDialog">Open No Backdrop Close Dialog</VueButton>
      <VueDialog
        v-model:open="isNoBackdropDialogOpen"
        heading="No Close on Backdrop"
        description="Clicking the backdrop will not close this dialog."
        no-close-on-backdrop
        show-close-button
      >
        <p>Try clicking outside the dialog - it will not close.</p>
        <p>Use the close button instead.</p>
      </VueDialog>
    </div>

    <div class="mbe4">
      <h2>Event Handling</h2>
    </div>
    <div class="stacked-mobile mbe4">
      <VueButton @click="showEventDialog">Open Event Dialog</VueButton>
      <VueDialog
        v-model:open="isEventDialogOpen"
        heading="Event Testing"
        description="This dialog demonstrates event handling."
        show-close-button
        @dialog-open="handleDialogOpen"
        @dialog-close="handleDialogClose"
        @dialog-cancel="handleDialogCancel"
      >
        <p>Try closing this dialog in different ways:</p>
        <ul>
          <li>Click the X button (triggers dialog-close)</li>
          <li>Press Escape (triggers dialog-cancel)</li>
          <li>Click the backdrop (triggers dialog-cancel)</li>
        </ul>
        <p
          v-if="lastEvent"
          style="margin-top: 1rem; padding: 0.5rem; background: var(--ag-background-secondary); border-radius: 4px;"
        >
          Last event: <strong>{{ lastEvent }}</strong>
        </p>
      </VueDialog>
    </div>

    <div class="mbe4">
      <h2>Customized with CSS Shadow Parts</h2>
    </div>
    <div class="stacked-mobile mbe4">
      <VueButton @click="showCustomDialog">Open Customized Dialog</VueButton>
      <VueDialog
        v-model:open="isCustomDialogOpen"
        class="custom-parts-dialog"
        heading="Styled Dialog"
        description="This dialog is customized using CSS Shadow Parts."
        show-close-button
      >
        <p>This dialog demonstrates CSS Shadow Parts customization with styled backdrop, container, header, heading, content, footer, and close button.</p>
        <VueDialogFooter>
          <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
            <VueButton @click="isCustomDialogOpen = false">Close</VueButton>
          </div>
        </VueDialogFooter>
      </VueDialog>
    </div>
  </section>
</template>

<script>
import VueDialog, {
  VueDialogHeader,
  VueDialogFooter,
} from "agnosticui-core/dialog/vue";
import VueButton from "agnosticui-core/button/vue";

export default {
  name: "DialogExamples",
  components: {
    VueDialog,
    VueDialogHeader,
    VueDialogFooter,
    VueButton,
  },
  data() {
    return {
      isBasicDialogOpen: false,
      isHeaderFooterDialogOpen: false,
      isCloseButtonDialogOpen: false,
      isNoEscapeDialogOpen: false,
      isNoBackdropDialogOpen: false,
      isEventDialogOpen: false,
      isCustomDialogOpen: false,
      lastEvent: null,
    };
  },
  methods: {
    showBasicDialog() {
      this.isBasicDialogOpen = true;
    },
    showHeaderFooterDialog() {
      this.isHeaderFooterDialogOpen = true;
    },
    showCloseButtonDialog() {
      this.isCloseButtonDialogOpen = true;
    },
    showNoEscapeDialog() {
      this.isNoEscapeDialogOpen = true;
    },
    showNoBackdropDialog() {
      this.isNoBackdropDialogOpen = true;
    },
    showEventDialog() {
      this.isEventDialogOpen = true;
      this.lastEvent = null;
    },
    showCustomDialog() {
      this.isCustomDialogOpen = true;
    },
    handleDialogOpen() {
      this.lastEvent = "dialog-open";
    },
    handleDialogClose() {
      this.lastEvent = "dialog-close";
    },
    handleDialogCancel() {
      this.lastEvent = "dialog-cancel";
    },
  },
};
<\/script>

<style scoped>
.custom-parts-dialog::part(ag-dialog-backdrop) {
  background: linear-gradient(
    135deg,
    rgba(102, 126, 234, 0.8) 0%,
    rgba(118, 75, 162, 0.8) 100%
  );
}

.custom-parts-dialog::part(ag-dialog-container) {
  border: 3px solid #667eea;
  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.4);
}

.custom-parts-dialog::part(ag-dialog-header) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1.5rem;
  margin: -1.5rem -1.5rem 1rem -1.5rem;
  border-radius: 0.5rem 0.5rem 0 0;
}

.custom-parts-dialog::part(ag-dialog-heading) {
  font-size: 1.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.custom-parts-dialog::part(ag-dialog-content) {
  padding: 0 0.5rem;
}

.custom-parts-dialog::part(ag-dialog-footer) {
  padding: 1rem;
  margin: 1rem -1.5rem -1.5rem -1.5rem;
  border-radius: 0 0 0.5rem 0.5rem;
}

.custom-parts-dialog::part(ag-dialog-close-button) {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  font-size: 1.5rem;
}

.custom-parts-dialog::part(ag-dialog-close-button):hover {
  background: rgba(255, 255, 255, 0.3);
}
</style>
`,ns=`import { LitElement, html, css } from 'lit';
import 'agnosticui-core/dialog';
import 'agnosticui-core/button';

export class DialogLitExamples extends LitElement {
  static styles = css\`
    .custom-parts-dialog::part(ag-dialog-backdrop) {
      background: linear-gradient(
        135deg,
        rgba(102, 126, 234, 0.8) 0%,
        rgba(118, 75, 162, 0.8) 100%
      );
    }

    .custom-parts-dialog::part(ag-dialog-container) {
      border: 3px solid #667eea;
      box-shadow: 0 20px 60px rgba(102, 126, 234, 0.4);
    }

    .custom-parts-dialog::part(ag-dialog-header) {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 1.5rem;
      margin: -1.5rem -1.5rem 1rem -1.5rem;
      border-radius: 0.5rem 0.5rem 0 0;
    }

    .custom-parts-dialog::part(ag-dialog-heading) {
      font-size: 1.5rem;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    .custom-parts-dialog::part(ag-dialog-content) {
      padding: 0 0.5rem;
    }

    .custom-parts-dialog::part(ag-dialog-footer) {
      padding: 1rem;
      margin: 1rem -1.5rem -1.5rem -1.5rem;
      border-radius: 0 0 0.5rem 0.5rem;
    }

    .custom-parts-dialog::part(ag-dialog-close-button) {
      background: rgba(255, 255, 255, 0.2);
      color: white;
      border-radius: 50%;
      width: 2rem;
      height: 2rem;
      font-size: 1.5rem;
    }

    .custom-parts-dialog::part(ag-dialog-close-button):hover {
      background: rgba(255, 255, 255, 0.3);
    }
  \`;

  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  constructor() {
    super();
    this.isBasicDialogOpen = false;
    this.isHeaderFooterDialogOpen = false;
    this.isCloseButtonDialogOpen = false;
    this.isNoEscapeDialogOpen = false;
    this.isNoBackdropDialogOpen = false;
    this.isEventDialogOpen = false;
    this.isCustomDialogOpen = false;
    this.lastEvent = null;
  }

  firstUpdated() {
    // Set up event listeners for dialogs
    const eventDialog = this.querySelector('#event-dialog');
    if (eventDialog) {
      eventDialog.addEventListener('dialog-open', () => {
        this.lastEvent = 'dialog-open';
        this.requestUpdate();
      });
      eventDialog.addEventListener('dialog-close', () => {
        this.lastEvent = 'dialog-close';
        this.requestUpdate();
      });
      eventDialog.addEventListener('dialog-cancel', () => {
        this.lastEvent = 'dialog-cancel';
        this.requestUpdate();
      });
    }

    // Add close event listeners to sync state
    this.querySelectorAll('ag-dialog').forEach((dialog) => {
      dialog.addEventListener('dialog-close', (e) => {
        const dialogId = e.target.id;
        this.handleDialogClose(dialogId);
      });
      dialog.addEventListener('dialog-cancel', (e) => {
        const dialogId = e.target.id;
        this.handleDialogClose(dialogId);
      });
    });
  }

  handleDialogClose(dialogId) {
    switch (dialogId) {
      case 'basic-dialog':
        this.isBasicDialogOpen = false;
        break;
      case 'header-footer-dialog':
        this.isHeaderFooterDialogOpen = false;
        break;
      case 'close-button-dialog':
        this.isCloseButtonDialogOpen = false;
        break;
      case 'no-escape-dialog':
        this.isNoEscapeDialogOpen = false;
        break;
      case 'no-backdrop-dialog':
        this.isNoBackdropDialogOpen = false;
        break;
      case 'event-dialog':
        this.isEventDialogOpen = false;
        break;
      case 'custom-dialog':
        this.isCustomDialogOpen = false;
        break;
    }
    this.requestUpdate();
  }

  showBasicDialog() {
    this.isBasicDialogOpen = true;
    this.requestUpdate();
    setTimeout(() => {
      const dialog = this.querySelector('#basic-dialog');
      if (dialog) dialog.open = true;
    }, 0);
  }

  showHeaderFooterDialog() {
    this.isHeaderFooterDialogOpen = true;
    this.requestUpdate();
    setTimeout(() => {
      const dialog = this.querySelector('#header-footer-dialog');
      if (dialog) dialog.open = true;
    }, 0);
  }

  showCloseButtonDialog() {
    this.isCloseButtonDialogOpen = true;
    this.requestUpdate();
    setTimeout(() => {
      const dialog = this.querySelector('#close-button-dialog');
      if (dialog) dialog.open = true;
    }, 0);
  }

  showNoEscapeDialog() {
    this.isNoEscapeDialogOpen = true;
    this.requestUpdate();
    setTimeout(() => {
      const dialog = this.querySelector('#no-escape-dialog');
      if (dialog) dialog.open = true;
    }, 0);
  }

  showNoBackdropDialog() {
    this.isNoBackdropDialogOpen = true;
    this.requestUpdate();
    setTimeout(() => {
      const dialog = this.querySelector('#no-backdrop-dialog');
      if (dialog) dialog.open = true;
    }, 0);
  }

  showEventDialog() {
    this.isEventDialogOpen = true;
    this.lastEvent = null;
    this.requestUpdate();
    setTimeout(() => {
      const dialog = this.querySelector('#event-dialog');
      if (dialog) dialog.open = true;
    }, 0);
  }

  showCustomDialog() {
    this.isCustomDialogOpen = true;
    this.requestUpdate();
    setTimeout(() => {
      const dialog = this.querySelector('#custom-dialog');
      if (dialog) dialog.open = true;
    }, 0);
  }

  render() {
    return html\`
      <style>
        .custom-parts-dialog::part(ag-dialog-backdrop) {
          background: linear-gradient(
            135deg,
            rgba(102, 126, 234, 0.8) 0%,
            rgba(118, 75, 162, 0.8) 100%
          );
        }

        .custom-parts-dialog::part(ag-dialog-container) {
          border: 3px solid #667eea;
          box-shadow: 0 20px 60px rgba(102, 126, 234, 0.4);
        }

        .custom-parts-dialog::part(ag-dialog-header) {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 1.5rem;
          margin: -1.5rem -1.5rem 1rem -1.5rem;
          border-radius: 0.5rem 0.5rem 0 0;
        }

        .custom-parts-dialog::part(ag-dialog-heading) {
          font-size: 1.5rem;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .custom-parts-dialog::part(ag-dialog-content) {
          padding: 0 0.5rem;
        }

        .custom-parts-dialog::part(ag-dialog-footer) {
          padding: 1rem;
          margin: 1rem -1.5rem -1.5rem -1.5rem;
          border-radius: 0 0 0.5rem 0.5rem;
        }

        .custom-parts-dialog::part(ag-dialog-close-button) {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          border-radius: 50%;
          width: 2rem;
          height: 2rem;
          font-size: 1.5rem;
        }

        .custom-parts-dialog::part(ag-dialog-close-button):hover {
          background: rgba(255, 255, 255, 0.3);
        }
      </style>

      <section>
        <!-- Basic Dialog -->
        <div class="mbe4">
          <h2>Basic Dialog</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-button @click=\${this.showBasicDialog}>Open Basic Dialog</ag-button>
          <ag-dialog
            id="basic-dialog"
            heading="Basic Dialog"
            description="This is a basic dialog with heading and description."
          >
            <p>This is the basic dialog content.</p>
          </ag-dialog>
        </div>

        <!-- With Header and Footer -->
        <div class="mbe4">
          <h2>With Header and Footer</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-button @click=\${this.showHeaderFooterDialog}>Open Dialog with Header/Footer</ag-button>
          <ag-dialog id="header-footer-dialog">
            <ag-dialog-header>
              <h2 class="m0 p0 b0">My Header</h2>
            </ag-dialog-header>
            <p>This dialog uses dialog header and footer components.</p>
            <ag-dialog-footer>
              <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
                <ag-button @click=\${() => {
                  const dialog = this.querySelector('#header-footer-dialog');
                  if (dialog) dialog.open = false;
                }}>Cancel</ag-button>
                <ag-button
                  variant="primary"
                  @click=\${() => {
                    const dialog = this.querySelector('#header-footer-dialog');
                    if (dialog) dialog.open = false;
                  }}
                >Confirm</ag-button>
              </div>
            </ag-dialog-footer>
          </ag-dialog>
        </div>

        <!-- With Close Button -->
        <div class="mbe4">
          <h2>With Close Button</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-button @click=\${this.showCloseButtonDialog}>Open Dialog with Close Button</ag-button>
          <ag-dialog
            id="close-button-dialog"
            heading="Dialog with Close Button"
            description="Click the X button to close this dialog."
            show-close-button
          >
            <p>This dialog includes a close button in the top-right corner.</p>
          </ag-dialog>
        </div>

        <!-- No Close on Escape -->
        <div class="mbe4">
          <h2>No Close on Escape</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-button @click=\${this.showNoEscapeDialog}>Open No Escape Dialog</ag-button>
          <ag-dialog
            id="no-escape-dialog"
            heading="No Close on Escape"
            description="Pressing Escape will not close this dialog."
            no-close-on-escape
            show-close-button
          >
            <p>Try pressing the Escape key - the dialog will not close.</p>
            <p>Use the close button instead.</p>
          </ag-dialog>
        </div>

        <!-- No Close on Backdrop -->
        <div class="mbe4">
          <h2>No Close on Backdrop</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-button @click=\${this.showNoBackdropDialog}>Open No Backdrop Close Dialog</ag-button>
          <ag-dialog
            id="no-backdrop-dialog"
            heading="No Close on Backdrop"
            description="Clicking the backdrop will not close this dialog."
            no-close-on-backdrop
            show-close-button
          >
            <p>Try clicking outside the dialog - it will not close.</p>
            <p>Use the close button instead.</p>
          </ag-dialog>
        </div>

        <!-- Event Handling -->
        <div class="mbe4">
          <h2>Event Handling</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-button @click=\${this.showEventDialog}>Open Event Dialog</ag-button>
          <ag-dialog
            id="event-dialog"
            heading="Event Testing"
            description="This dialog demonstrates event handling."
            show-close-button
          >
            <p>Try closing this dialog in different ways:</p>
            <ul>
              <li>Click the X button (triggers dialog-close)</li>
              <li>Press Escape (triggers dialog-cancel)</li>
              <li>Click the backdrop (triggers dialog-cancel)</li>
            </ul>
            \${this.lastEvent ? html\`
              <p style="margin-top: 1rem; padding: 0.5rem; background: var(--ag-background-secondary); border-radius: 4px;">
                Last event: <strong>\${this.lastEvent}</strong>
              </p>
            \` : ''}
          </ag-dialog>
        </div>

        <!-- Customized with CSS Shadow Parts -->
        <div class="mbe4">
          <h2>Customized with CSS Shadow Parts</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-button @click=\${this.showCustomDialog}>Open Customized Dialog</ag-button>
          <ag-dialog
            id="custom-dialog"
            class="custom-parts-dialog"
            heading="Styled Dialog"
            description="This dialog is customized using CSS Shadow Parts."
            show-close-button
          >
            <p>This dialog demonstrates CSS Shadow Parts customization with styled backdrop, container, header, heading, content, footer, and close button.</p>
            <ag-dialog-footer>
              <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
                <ag-button @click=\${() => {
                  const dialog = this.querySelector('#custom-dialog');
                  if (dialog) dialog.open = false;
                }}>Close</ag-button>
              </div>
            </ag-dialog-footer>
          </ag-dialog>
        </div>
      </section>
    \`;
  }
}

// Register the custom element
customElements.define('dialog-lit-examples', DialogLitExamples);
`,ts=`import { useState } from "react";
import ReactDialog, {
  ReactDialogHeader,
  ReactDialogFooter,
} from "agnosticui-core/dialog/react";
import { ReactButton } from "agnosticui-core/button/react";

export default function DialogReactExamples() {
  const [isBasicDialogOpen, setIsBasicDialogOpen] = useState(false);
  const [isHeaderFooterDialogOpen, setIsHeaderFooterDialogOpen] = useState(false);
  const [isCloseButtonDialogOpen, setIsCloseButtonDialogOpen] = useState(false);
  const [isNoEscapeDialogOpen, setIsNoEscapeDialogOpen] = useState(false);
  const [isNoBackdropDialogOpen, setIsNoBackdropDialogOpen] = useState(false);
  const [isEventDialogOpen, setIsEventDialogOpen] = useState(false);
  const [isCustomDialogOpen, setIsCustomDialogOpen] = useState(false);
  const [lastEvent, setLastEvent] = useState(null);

  const handleDialogOpen = () => {
    setLastEvent("dialog-open");
  };

  const handleDialogClose = () => {
    setLastEvent("dialog-close");
  };

  const handleDialogCancel = () => {
    setLastEvent("dialog-cancel");
  };

  const showEventDialog = () => {
    setIsEventDialogOpen(true);
    setLastEvent(null);
  };

  return (
    <section>
      {/* Basic Dialog */}
      <div className="mbe4">
        <h2>Basic Dialog</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactButton onClick={() => setIsBasicDialogOpen(true)}>
          Open Basic Dialog
        </ReactButton>
        <ReactDialog
          open={isBasicDialogOpen}
          onOpenChange={setIsBasicDialogOpen}
          heading="Basic Dialog"
          description="This is a basic dialog with heading and description."
        >
          <p>This is the basic dialog content.</p>
        </ReactDialog>
      </div>

      {/* With Header and Footer */}
      <div className="mbe4">
        <h2>With Header and Footer</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactButton onClick={() => setIsHeaderFooterDialogOpen(true)}>
          Open Dialog with Header/Footer
        </ReactButton>
        <ReactDialog
          open={isHeaderFooterDialogOpen}
          onOpenChange={setIsHeaderFooterDialogOpen}
        >
          <ReactDialogHeader>
            <h2 className="m0 p0 b0">My Header</h2>
          </ReactDialogHeader>
          <p>This dialog uses dialog header and footer components.</p>
          <ReactDialogFooter>
            <div style={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end" }}>
              <ReactButton onClick={() => setIsHeaderFooterDialogOpen(false)}>
                Cancel
              </ReactButton>
              <ReactButton
                variant="primary"
                onClick={() => setIsHeaderFooterDialogOpen(false)}
              >
                Confirm
              </ReactButton>
            </div>
          </ReactDialogFooter>
        </ReactDialog>
      </div>

      {/* With Close Button */}
      <div className="mbe4">
        <h2>With Close Button</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactButton onClick={() => setIsCloseButtonDialogOpen(true)}>
          Open Dialog with Close Button
        </ReactButton>
        <ReactDialog
          open={isCloseButtonDialogOpen}
          onOpenChange={setIsCloseButtonDialogOpen}
          heading="Dialog with Close Button"
          description="Click the X button to close this dialog."
          showCloseButton
        >
          <p>This dialog includes a close button in the top-right corner.</p>
        </ReactDialog>
      </div>

      {/* No Close on Escape */}
      <div className="mbe4">
        <h2>No Close on Escape</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactButton onClick={() => setIsNoEscapeDialogOpen(true)}>
          Open No Escape Dialog
        </ReactButton>
        <ReactDialog
          open={isNoEscapeDialogOpen}
          onOpenChange={setIsNoEscapeDialogOpen}
          heading="No Close on Escape"
          description="Pressing Escape will not close this dialog."
          noCloseOnEscape
          showCloseButton
        >
          <p>Try pressing the Escape key - the dialog will not close.</p>
          <p>Use the close button instead.</p>
        </ReactDialog>
      </div>

      {/* No Close on Backdrop */}
      <div className="mbe4">
        <h2>No Close on Backdrop</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactButton onClick={() => setIsNoBackdropDialogOpen(true)}>
          Open No Backdrop Close Dialog
        </ReactButton>
        <ReactDialog
          open={isNoBackdropDialogOpen}
          onOpenChange={setIsNoBackdropDialogOpen}
          heading="No Close on Backdrop"
          description="Clicking the backdrop will not close this dialog."
          noCloseOnBackdrop
          showCloseButton
        >
          <p>Try clicking outside the dialog - it will not close.</p>
          <p>Use the close button instead.</p>
        </ReactDialog>
      </div>

      {/* Event Handling */}
      <div className="mbe4">
        <h2>Event Handling</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactButton onClick={showEventDialog}>Open Event Dialog</ReactButton>
        <ReactDialog
          open={isEventDialogOpen}
          onOpenChange={setIsEventDialogOpen}
          heading="Event Testing"
          description="This dialog demonstrates event handling."
          showCloseButton
          onDialogOpen={handleDialogOpen}
          onDialogClose={handleDialogClose}
          onDialogCancel={handleDialogCancel}
        >
          <p>Try closing this dialog in different ways:</p>
          <ul>
            <li>Click the X button (triggers dialog-close)</li>
            <li>Press Escape (triggers dialog-cancel)</li>
            <li>Click the backdrop (triggers dialog-cancel)</li>
          </ul>
          {lastEvent && (
            <p
              style={{
                marginTop: "1rem",
                padding: "0.5rem",
                background: "var(--ag-background-secondary)",
                borderRadius: "4px",
              }}
            >
              Last event: <strong>{lastEvent}</strong>
            </p>
          )}
        </ReactDialog>
      </div>

      {/* Customized with CSS Shadow Parts */}
      <div className="mbe4">
        <h2>Customized with CSS Shadow Parts</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactButton onClick={() => setIsCustomDialogOpen(true)}>
          Open Customized Dialog
        </ReactButton>
        <ReactDialog
          open={isCustomDialogOpen}
          onOpenChange={setIsCustomDialogOpen}
          className="custom-parts-dialog"
          heading="Styled Dialog"
          description="This dialog is customized using CSS Shadow Parts."
          showCloseButton
        >
          <p>
            This dialog demonstrates CSS Shadow Parts customization with styled
            backdrop, container, header, heading, content, footer, and close button.
          </p>
          <ReactDialogFooter>
            <div style={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end" }}>
              <ReactButton onClick={() => setIsCustomDialogOpen(false)}>
                Close
              </ReactButton>
            </div>
          </ReactDialogFooter>
        </ReactDialog>
      </div>
    </section>
  );
}
`,Cs=JSON.parse('{"title":"Dialog","description":"","frontmatter":{},"headers":[],"relativePath":"components/dialog.md","filePath":"components/dialog.md"}'),ls={name:"components/dialog.md"},Bs=Object.assign(ls,{setup(e){return(s,a)=>(r(),g("div",null,[a[1]||(a[1]=i("h1",{id:"dialog",tabindex:"-1"},[k("Dialog "),i("a",{class:"header-anchor",href:"#dialog","aria-label":'Permalink to "Dialog"'},"​")],-1)),t(A),a[2]||(a[2]=i("p",null,"A dialog is a modal window that overlays the main content and requires user interaction before returning to the application. Dialogs are useful for confirmations, alerts, forms, and presenting focused content.",-1)),a[3]||(a[3]=i("h2",{id:"examples",tabindex:"-1"},[k("Examples "),i("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),t(T,{component:"dialog","vue-code":y(as),"lit-code":y(ns),"react-code":y(ts)},{vue:l(()=>[t(is)]),lit:l(()=>[...a[0]||(a[0]=[i("dialog-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),a[4]||(a[4]=V(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The framework examples below <code>import</code> AgnosticUI as an <code>npm</code> package. Alternatively, you can use the <strong>CLI for complete control, AI/LLM visibility, and full code ownership</strong>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> init</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> --framework</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> FRAMEWORK</span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;"> # react, vue, lit, svelte, etc.</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> add</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> Dialog</span></span></code></pre></div><p>The CLI copies source code directly into your project, giving you full visibility and control. After running <code>npx ag add</code>, you&#39;ll receive exact import instructions.</p></div><details class="details custom-block"><summary>Vue</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueButton</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> @click</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;showDialog&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Open Dialog&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueButton</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueDialog</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      v-model:open</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;isOpen&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      heading</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Dialog Title&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      description</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;This is a dialog description&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      @dialog-close</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;handleClose&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;This is the dialog content.&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueDialog</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueButton</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> @click</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;showCustomDialog&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Open Custom Dialog&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueButton</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueDialog</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> v-model:open</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;isCustomOpen&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueDialogHeader</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">h2</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> style</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;margin: 0;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Custom Header&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">h2</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueDialogHeader</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Dialog with custom header and footer.&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueDialogFooter</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> style</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;display: flex; gap: 0.5rem; justify-content: flex-end;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueButton</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> @click</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;isCustomOpen = false&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Cancel&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueButton</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueButton</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> variant</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> @click</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;isCustomOpen = false&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            &gt;Confirm&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueButton</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueDialogFooter</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueDialog</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueButton</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> @click</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;showCloseButtonDialog&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Open Dialog&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueButton</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueDialog</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      v-model:open</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;isCloseButtonOpen&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      heading</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Dialog with Close Button&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      show-close-button</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;This dialog includes a close button.&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueDialog</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueButton</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> @click</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;showEventDialog&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Open Dialog&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueButton</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueDialog</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      v-model:open</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;isEventOpen&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      heading</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Event Testing&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      show-close-button</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      @dialog-open</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;handleOpen&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      @dialog-close</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;handleClose&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      @dialog-cancel</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;handleCancel&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Try closing this dialog different ways to see events.&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueDialog</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> VueDialog, {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  VueDialogHeader,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  VueDialogFooter,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">} </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/dialog/vue&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> VueButton </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/button/vue&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  components: {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    VueDialog,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    VueDialogHeader,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    VueDialogFooter,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    VueButton,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  }</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">,</span></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">  data</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">() </span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">    return</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      isOpen: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">false</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      isCustomOpen: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">false</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      isCloseButtonOpen: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">false</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      isEventOpen: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">false</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    };</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  }</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  methods: {</span></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">    showDialog</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">() {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      this</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">.isOpen </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> true</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    },</span></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">    showCustomDialog</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">() {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      this</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">.isCustomOpen </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> true</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    },</span></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">    showCloseButtonDialog</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">() {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      this</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">.isCloseButtonOpen </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> true</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    },</span></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">    showEventDialog</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">() {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      this</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">.isEventOpen </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> true</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    },</span></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">    handleOpen</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">() {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Dialog opened&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    },</span></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">    handleClose</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">() {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Dialog closed&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    },</span></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">    handleCancel</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">() {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Dialog cancelled&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  }</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">,</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><details class="details custom-block"><summary>React</summary><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { useState } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;react&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  ReactDialog,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  DialogHeader,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  DialogFooter,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">} </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/dialog/react&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> function</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> DialogExample</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">() </span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> [</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">isOpen</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">setIsOpen</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">] </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> useState</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">false</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> [</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">isCustomOpen</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">setIsCustomOpen</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">] </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> useState</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">false</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> [</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">isCloseButtonOpen</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">setIsCloseButtonOpen</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">] </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> useState</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">false</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> handleClose</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> () </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Dialog closed&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">    setIsOpen</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">false</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> handleCancel</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> () </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Dialog cancelled&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">    setIsOpen</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">false</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  return</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> onClick</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">() </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> setIsOpen</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">true</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">)</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Open Dialog&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactDialog</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        open</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">isOpen</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        heading</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Dialog Title&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        description</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;This is a dialog description&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        onDialogClose</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">handleClose</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        onDialogCancel</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">handleCancel</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;This is the dialog content.&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactDialog</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> onClick</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">() </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> setIsCustomOpen</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">true</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">)</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Open Custom Dialog&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactDialog</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        open</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">isCustomOpen</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        onDialogClose</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">() </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> setIsCustomOpen</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">false</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">)</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        onDialogCancel</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">() </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> setIsCustomOpen</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">false</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">)</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">DialogHeader</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">h2</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> style</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{ margin: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> }</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Custom Header&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">h2</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">DialogHeader</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Dialog with custom header and footer.&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">DialogFooter</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">            style</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">              display: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;flex&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">              gap: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;0.5rem&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">              justifyContent: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;flex-end&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            }</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> onClick</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">() </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> setIsCustomOpen</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">false</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">)</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Cancel&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">            &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> onClick</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">() </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> setIsCustomOpen</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">false</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">)</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Confirm&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">DialogFooter</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactDialog</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> onClick</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">() </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> setIsCloseButtonOpen</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">true</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">)</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Open Dialog&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactDialog</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        open</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">isCloseButtonOpen</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        heading</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Dialog with Close Button&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        showCloseButton</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">true</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        onDialogClose</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">() </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> setIsCloseButtonOpen</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">false</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">)</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        onDialogCancel</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">() </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> setIsCloseButtonOpen</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">false</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">)</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;This dialog includes a close button.&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactDialog</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  );</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div></details><details class="details custom-block"><summary>Lit (Web Components)</summary><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;module&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  import</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;agnosticui-core/dialog&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  @</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">customElement</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;my-element&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">)</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> class</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> MyElement</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> extends</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> LitElement</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">    firstUpdated</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">() {</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">      const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> dialog</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> this</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">.shadowRoot?.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">querySelector</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;#my-dialog&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">as</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> any</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">      const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> openButton</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> this</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">.shadowRoot?.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">querySelector</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;#open-dialog&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      openButton?.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">addEventListener</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;click&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, () </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">        if</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (dialog) {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          dialog.open </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> true</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        }</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      });</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      dialog?.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">addEventListener</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;dialog-close&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, () </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        dialog.open </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> false</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;Dialog closed&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      });</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      dialog?.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">addEventListener</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;dialog-cancel&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, () </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        dialog.open </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> false</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;Dialog cancelled&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      });</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    }</span></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">    // ... rest of your class ...</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  }</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> id</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;open-dialog&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Open Dialog&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-dialog</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    id</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;my-dialog&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    heading</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Dialog Title&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    description</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;This is a dialog description&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;This is the dialog content.&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-dialog</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-dialog</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> id</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;custom-dialog&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> slot</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;header&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">h2</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> style</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;margin: 0;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Custom Header&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">h2</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Dialog with custom header and footer.&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      slot</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;footer&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      style</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;display: flex; gap: 0.5rem; justify-content: flex-end;&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Cancel&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Confirm&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-dialog</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-dialog</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> heading</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Dialog with Close Button&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> show-close-button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;This dialog includes a close button.&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-dialog</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">section</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><table class="ag-table ag-table--striped"><thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>open</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Whether the dialog is open</td></tr><tr><td><code>heading</code></td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>The heading text for the dialog</td></tr><tr><td><code>description</code></td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>The description text for the dialog</td></tr><tr><td><code>noCloseOnEscape</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Prevents closing the dialog when pressing the Escape key</td></tr><tr><td><code>noCloseOnBackdrop</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Prevents closing the dialog when clicking the backdrop</td></tr><tr><td><code>showCloseButton</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Shows a close button (×) in the top-right corner of the dialog</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><table class="ag-table ag-table--striped"><thead><tr><th>Event</th><th>Framework</th><th>Detail</th><th>Description</th></tr></thead><tbody><tr><td><code>dialog-open</code></td><td>Vue: <code>@dialog-open</code><br>React: <code>onDialogOpen</code><br>Lit: <code>@dialog-open</code></td><td><code>void</code></td><td>Fired when the dialog opens.</td></tr><tr><td><code>dialog-close</code></td><td>Vue: <code>@dialog-close</code><br>React: <code>onDialogClose</code><br>Lit: <code>@dialog-close</code></td><td><code>void</code></td><td>Fired when the dialog closes via the close button.</td></tr><tr><td><code>dialog-cancel</code></td><td>Vue: <code>@dialog-cancel</code><br>React: <code>onDialogCancel</code><br>Lit: <code>@dialog-cancel</code></td><td><code>void</code></td><td>Fired when the dialog is cancelled (Escape key or backdrop click).</td></tr></tbody></table><h3 id="event-handling-examples" tabindex="-1">Event Handling Examples <a class="header-anchor" href="#event-handling-examples" aria-label="Permalink to &quot;Event Handling Examples&quot;">​</a></h3><p><strong>Vue:</strong></p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueDialog</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  v-model</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">:</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">open</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">isOpen</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  @</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">dialog-open</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">handleOpen</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  @</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">dialog-close</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">handleClose</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  @</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">dialog-cancel</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">handleCancel</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;p&gt;Dialog content&lt;/p&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueDialog</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div><p><strong>React:</strong></p><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactDialog</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  open</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">isOpen</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  onDialogOpen</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Dialog opened&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, e)</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  onDialogClose</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> setIsOpen</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">false</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">)</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  onDialogCancel</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> setIsOpen</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">false</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">)</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Dialog content&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactDialog</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div><p><strong>Lit:</strong></p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> dialog</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> document.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">querySelector</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;ag-dialog&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  dialog.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">addEventListener</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;dialog-open&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Dialog opened&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, e);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  });</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  dialog.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">addEventListener</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;dialog-close&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Dialog closed&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, e);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  });</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-dialog</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> id</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;my-dialog&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-dialog</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> dialog</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> document.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">querySelector</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;#my-dialog&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  dialog.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">onDialogOpen</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Dialog opened&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, e);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  dialog.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">onDialogClose</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Dialog closed&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, e);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h2><h3 id="vue" tabindex="-1">Vue <a class="header-anchor" href="#vue" aria-label="Permalink to &quot;Vue&quot;">​</a></h3><ul><li><strong>Default slot</strong>: Main content of the dialog</li><li><strong>VueDialogHeader</strong>: Custom header content (replaces <code>heading</code> prop when used)</li><li><strong>VueDialogFooter</strong>: Footer content for action buttons</li></ul><h3 id="react" tabindex="-1">React <a class="header-anchor" href="#react" aria-label="Permalink to &quot;React&quot;">​</a></h3><ul><li><strong>children</strong>: Main content of the dialog</li><li><strong>DialogHeader</strong>: Custom header content (replaces <code>heading</code> prop when used)</li><li><strong>DialogFooter</strong>: Footer content for action buttons</li></ul><h3 id="lit" tabindex="-1">Lit <a class="header-anchor" href="#lit" aria-label="Permalink to &quot;Lit&quot;">​</a></h3><ul><li><strong>Default slot</strong>: Main content of the dialog</li><li><strong>slot=&quot;header&quot;</strong>: Custom header content (replaces <code>heading</code> prop when used)</li><li><strong>slot=&quot;footer&quot;</strong>: Footer content for action buttons</li></ul><h2 id="css-shadow-parts" tabindex="-1">CSS Shadow Parts <a class="header-anchor" href="#css-shadow-parts" aria-label="Permalink to &quot;CSS Shadow Parts&quot;">​</a></h2><p>Shadow Parts allow you to style internal elements of the dialog from outside the shadow DOM using the <code>::part()</code> CSS selector.</p><table class="ag-table ag-table--striped"><thead><tr><th>Part</th><th>Description</th></tr></thead><tbody><tr><td><code>ag-dialog-backdrop</code></td><td>The backdrop overlay element behind the dialog</td></tr><tr><td><code>ag-dialog-container</code></td><td>The main dialog container that holds all dialog content</td></tr><tr><td><code>ag-dialog-header</code></td><td>The header section wrapper</td></tr><tr><td><code>ag-dialog-heading</code></td><td>The heading text element (when using <code>heading</code> prop)</td></tr><tr><td><code>ag-dialog-close-button</code></td><td>The close button (when <code>showCloseButton</code> is true)</td></tr><tr><td><code>ag-dialog-content</code></td><td>The main content section wrapper</td></tr><tr><td><code>ag-dialog-footer</code></td><td>The footer section wrapper</td></tr></tbody></table><h3 id="customization-example" tabindex="-1">Customization Example <a class="header-anchor" href="#customization-example" aria-label="Permalink to &quot;Customization Example&quot;">​</a></h3><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-dialog</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-dialog-backdrop</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  background</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">linear-gradient</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    135</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">deg</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">,</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    rgba</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">102</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">126</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">234</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0.8</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">%</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">,</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    rgba</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">118</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">75</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">162</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0.8</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">100</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">%</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  );</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-dialog</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-dialog-container</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  background</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">linear-gradient</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">to</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> bottom</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">#ffffff</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">#f0f4ff</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  border</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">3</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> solid</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> #667eea</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  box-shadow</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> 20</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> 60</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> rgba</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">102</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">126</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">234</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0.4</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-dialog</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-dialog-header</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  background</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">linear-gradient</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">135</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">deg</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">#667eea</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> 0</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">%</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">#764ba2</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> 100</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">%</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  color</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">white</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  padding</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">1.5</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">rem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-dialog</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-dialog-heading</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  font-size</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">1.5</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">rem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  text-shadow</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> 2</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> 4</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> rgba</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0.2</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-dialog</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-dialog-close-button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  background</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">rgba</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">255</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">255</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">255</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0.2</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  color</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">white</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  border-radius</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">50</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">%</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-dialog</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-dialog-content</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  padding</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> 0.5</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">rem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-dialog</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-dialog-footer</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  background</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">#f0f4ff</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  padding</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">1</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">rem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div><h2 id="accessibility" tabindex="-1">Accessibility <a class="header-anchor" href="#accessibility" aria-label="Permalink to &quot;Accessibility&quot;">​</a></h2><p>The Dialog implements the <a href="https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/" target="_blank" rel="noreferrer">WAI-ARIA Dialog (Modal) Pattern</a>:</p><ul><li>Uses <code>role=&quot;dialog&quot;</code> and <code>aria-modal=&quot;true&quot;</code> for proper screen reader announcement</li><li>Implements focus trap to keep keyboard focus within the dialog</li><li>Pressing <strong>Escape</strong> closes the dialog (unless <code>noCloseOnEscape</code> is true)</li><li>Clicking the backdrop closes the dialog (unless <code>noCloseOnBackdrop</code> is true)</li><li>Returns focus to the triggering element when closed</li><li>Prevents background scroll when dialog is open</li><li>Close button has <code>aria-label=&quot;Close dialog&quot;</code> for screen readers</li><li>Dialog can be labeled via <code>heading</code> prop or custom header with proper heading element</li><li>Keyboard navigation cycles through all focusable elements within the dialog</li><li>Supports <strong>Tab</strong> and <strong>Shift+Tab</strong> for navigation within the focus trap</li></ul><h3 id="best-practices" tabindex="-1">Best Practices <a class="header-anchor" href="#best-practices" aria-label="Permalink to &quot;Best Practices&quot;">​</a></h3><ul><li>Always provide a heading (via <code>heading</code> prop or custom header) for accessibility</li><li>Use <code>showCloseButton</code> or provide explicit close actions in footer</li><li>For critical actions, consider setting <code>noCloseOnBackdrop</code> and <code>noCloseOnEscape</code> to prevent accidental dismissal</li><li>Ensure focus is managed properly by using semantic buttons for triggers</li><li>Keep dialog content concise and focused on a single task</li></ul><h2 id="v-model-support-vue" tabindex="-1">v-model Support (Vue) <a class="header-anchor" href="#v-model-support-vue" aria-label="Permalink to &quot;v-model Support (Vue)&quot;">​</a></h2><p>The Vue Dialog component supports <code>v-model:open</code> for two-way binding:</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueDialog</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> v-model</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">:</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">open</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">isDialogOpen</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;p&gt;Dialog content&lt;/p&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueDialog</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div><p>This automatically syncs the dialog&#39;s open state with your component&#39;s data.</p>`,37))]))}});export{Cs as __pageData,Bs as default};
