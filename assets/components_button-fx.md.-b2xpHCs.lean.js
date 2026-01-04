import{c as v,A as w}from"./chunks/AlphaWarning.BeGEOyJF.js";import{t as C}from"./chunks/Button.CXY3ONNo.js";import{i as S}from"./chunks/lit-element.B0TUrqGF.js";import{z as c}from"./chunks/property-CemaeiRl.BAjarvIB.js";import{r as P}from"./chunks/motion.styles.BWS49nks.js";import{d as E,p as V,c as b,q as M,o as m,r as L,K as T,_ as W,C as d,j as e,G as i,w as a,a as t,ae as R}from"./chunks/framework.DvJW1jwp.js";import{u as _}from"./chunks/VueIcon.vue_vue_type_script_setup_true_lang-kC-nzMyu.DDkUD2w3.js";import{B as z}from"./chunks/VueAlert.vue_vue_type_script_setup_true_lang-BSEoqQWL.CUBU16p_.js";import{p as I}from"./chunks/VueVisuallyHidden.vue_vue_type_script_setup_true_lang-C_9Tq_M2.CVzVWDrH.js";import{S as X}from"./chunks/shopping-cart.CMzKMuKG.js";import{T as j}from"./chunks/trash-2.C8o6kQcr.js";import{M as H}from"./chunks/mail.uB_hGS6M.js";import"./chunks/if-defined-C8i28hSj.CfeO1FY9.js";import"./chunks/Alert.DfKP0k46.js";import"./chunks/CloseButton.JmCUmSqr.js";/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=v("bomb",[["circle",{cx:"11",cy:"13",r:"9",key:"hd149"}],["path",{d:"M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95",key:"jp4j1b"}],["path",{d:"m22 2-1.5 1.5",key:"ay92ug"}]]);/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=v("database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);var O=Object.defineProperty,f=(l,s,o,h)=>{for(var r=void 0,u=l.length-1,n;u>=0;u--)(n=l[u])&&(r=n(s,o,r)||r);return r&&O(s,o,r),r};const B=class extends C{constructor(){super(),this.fxSpeed="md",this.fxEase="ease",this.fxDisabled=!1}firstUpdated(){this._applyFxClasses(),this._applyFxCustomProperties()}updated(s){super.updated(s),(s.has("fx")||s.has("fxDisabled"))&&this._applyFxClasses(),(s.has("fxSpeed")||s.has("fxEase"))&&this._applyFxCustomProperties()}_applyFxClasses(){var o;const s=(o=this.shadowRoot)==null?void 0:o.querySelector("button");s&&(s.classList.forEach(h=>{h.startsWith("ag-fx-")&&s.classList.remove(h)}),this.fx&&s.classList.add(`ag-fx-${this.fx}`),this.fxDisabled&&s.classList.add("ag-fx-disabled"))}_applyFxCustomProperties(){var o;const s=(o=this.shadowRoot)==null?void 0:o.querySelector("button");s instanceof HTMLElement&&(s.style.setProperty("--ag-fx-duration",`var(--ag-fx-duration-${this.fxSpeed})`),s.style.setProperty("--ag-fx-ease",`var(--ag-fx-ease-${this.fxEase})`))}};B.styles=[P,C.styles,S`
      /* ========================================
         OVERRIDE PARENT HOVER BACKGROUNDS
         These compete with FX effects like highlight-sweep, slide-in, etc.
         We need to keep these using :host() for variant attribute selectors
         ======================================== */

      :host([variant="primary"]) button:hover {
        background: var(--ag-primary-dark);
      }

      :host([variant="secondary"]) button:hover {
        background: var(--ag-neutral-500);
      }

      :host([variant="success"]) button:hover {
        background: var(--ag-success-dark);
      }

      :host([variant="warning"]) button:hover {
         background: var(--ag-warning-dark);
      }

      :host([variant="danger"]) button:hover {
        background: var(--ag-danger);
      }

      :host([variant="monochrome"]) button:hover {
        background: var(--ag-background-secondary-inverted);
      }

      /* ========================================
         FX EFFECT CLASSES
         Classes are applied directly to button element
         Note: Keyframes are imported from motionStyles
         ======================================== */

      /* Hover-triggered effects */
      button.ag-fx-bounce:hover {
        animation: ag-fx-bounce var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      button.ag-fx-pulse:hover {
        animation: ag-fx-pulse var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      button.ag-fx-jelly:hover {
        animation: ag-fx-jelly var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      /* Active/press-triggered effects */
      button.ag-fx-press-pop:active {
        animation: ag-fx-press-pop var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      /* Entrance effect - plays once on mount */
      button.ag-fx-slide-in {
        animation: ag-fx-slide-in var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      /* ========================================
         ADDITIONAL EFFECT CLASSES
         ======================================== */

      /* Grow */
      button.ag-fx-grow:hover {
        animation: ag-fx-grow var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease) forwards;
      }

      /* Shrink */
      button.ag-fx-shrink:hover {
        animation: ag-fx-shrink var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease) forwards;
      }

      /* Push */
      button.ag-fx-push:hover {
        animation: ag-fx-push var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      /* Background slide */
      button.ag-fx-bg-slide {
        position: relative;
        overflow: hidden;
      }

      /* Background (bottom to top) and Side (left to right) slides share */
      button.ag-fx-side-slide::before,
      button.ag-fx-bg-slide::before {
        content: '';
        position: absolute;
        top: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.25);
        /* Use ease-out for slides to prevent spring overshoot which causes visual glitches */
        transition: transform var(--ag-fx-duration, 200ms) ease-out;
      }

      button.ag-fx-bg-slide::before {
        transform: translateY(100%);
      }

      button.ag-fx-bg-slide:hover::before {
        transform: translateY(0);
      }

      /* Side slide */
      button.ag-fx-side-slide {
        position: relative;
        overflow: hidden;
      }

      button.ag-fx-side-slide::before {
        transform: translateX(-100%);
      }

      button.ag-fx-side-slide:hover::before {
        transform: translateX(0);
      }

      /* RTL Support - flip side-slide direction */
      :host-context([dir="rtl"]) button.ag-fx-side-slide::before {
        transform: translateX(100%);
      }

      /* Press shadow - animates shadow on active/press with variant colors */
      :host([variant="primary"]) button.ag-fx-press-shadow {
        box-shadow: 0 4px 0 rgba(5, 80, 174, 0.5);
        position: relative;
        top: 0;
        transition: top 0.1s, box-shadow 0.1s;
      }

      :host([variant="primary"]) button.ag-fx-press-shadow:active {
        top: 4px;
        box-shadow: 0 0px 0 rgba(5, 80, 174, 0.5);
      }

      :host([variant="success"]) button.ag-fx-press-shadow {
        box-shadow: 0 4px 0 rgba(var(--ag-success-rgb), 0.5);
        position: relative;
        top: 0;
        transition: top 0.1s, box-shadow 0.1s;
      }

      :host([variant="success"]) button.ag-fx-press-shadow:active {
        top: 4px;
        box-shadow: 0 0px 0 rgba(var(--ag-success-rgb), 0.5);
      }

      :host([variant="warning"]) button.ag-fx-press-shadow {
        box-shadow: 0 4px 0 rgba(var(--ag-warning-rgb), 0.5);
        position: relative;
        top: 0;
        transition: top 0.1s, box-shadow 0.1s;
      }

      :host([variant="warning"]) button.ag-fx-press-shadow:active {
        top: 4px;
        box-shadow: 0 0px 0 rgba(var(--ag-warning-rgb), 0.5);
      }

      :host([variant="danger"]) button.ag-fx-press-shadow {
        box-shadow: 0 4px 0 rgba(var(--ag-danger-rgb), 0.5);
        position: relative;
        top: 0;
        transition: top 0.1s, box-shadow 0.1s;
      }

      :host([variant="danger"]) button.ag-fx-press-shadow:active {
        top: 4px;
        box-shadow: 0 0px 0 rgba(var(--ag-danger-rgb), 0.5);
      }

      /* Fallback for other variants without RGB tokens */
      :host([variant="secondary"]) button.ag-fx-press-shadow,
      :host([variant="monochrome"]) button.ag-fx-press-shadow,
      :host(:not([variant])) button.ag-fx-press-shadow {
        box-shadow: 0 4px 0 rgba(0, 0, 0, 0.2);
        position: relative;
        top: 0;
        transition: top 0.1s, box-shadow 0.1s;
      }

      :host([variant="secondary"]) button.ag-fx-press-shadow:active,
      :host([variant="monochrome"]) button.ag-fx-press-shadow:active,
      :host(:not([variant])) button.ag-fx-press-shadow:active {
        top: 4px;
        box-shadow: 0 0px 0 rgba(0, 0, 0, 0.2);
      }

      /* Shake */
      button.ag-fx-shake:hover {
        animation: ag-fx-shake var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      /* Wobble */
      button.ag-fx-wobble:hover {
        animation: ag-fx-wobble var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      /* Pulse-Wobble Sequential */
      button.ag-fx-pulse-wobble:hover {
        animation: ag-fx-pulse-wobble var(--ag-fx-duration, 400ms) var(--ag-fx-ease-spring-md);
      }

      /* Disabled FX */
      button.ag-fx-disabled {
        animation: none !important;
      }

      button.ag-fx-disabled::after {
        animation: none !important;
      }

      /* Automatic reduced-motion support */
      @media (prefers-reduced-motion: reduce) {
        button.ag-fx-bounce,
        button.ag-fx-pulse,
        button.ag-fx-jelly,
        button.ag-fx-press-pop,
        button.ag-fx-slide-in {
          animation-duration: 0.01ms !important;
          transition-duration: 0.01ms !important;
        }
      }
    `];let g=B;f([c({type:String,reflect:!0})],g.prototype,"fx");f([c({type:String,attribute:"fx-speed"})],g.prototype,"fxSpeed");f([c({type:String,attribute:"fx-ease"})],g.prototype,"fxEase");f([c({type:Boolean,reflect:!0,attribute:"fx-disabled"})],g.prototype,"fxDisabled");customElements.get("ag-button-fx")||customElements.define("ag-button-fx",g);const $=[".disabled",".loading",".toggle",".pressed",".bordered",".ghost",".link",".grouped",".ariaLabel",".fx",".fxDisabled","type","variant","size","shape","fx-speed","fx-ease"],U=E({__name:"VueButtonFx",props:{variant:{default:""},size:{default:"md"},shape:{default:""},bordered:{type:Boolean,default:!1},ghost:{type:Boolean,default:!1},link:{type:Boolean,default:!1},grouped:{type:Boolean,default:!1},type:{default:"button"},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},toggle:{type:Boolean,default:!1},pressed:{type:Boolean,default:!1},ariaLabel:{default:""},fx:{},fxSpeed:{default:"md"},fxEase:{default:"ease"},fxDisabled:{type:Boolean,default:!1}},emits:["click","focus","blur","toggle","update:pressed"],setup(l,{emit:s}){const o=l,h=s,r=V(),u=p=>{h("click",p)},n=p=>{h("focus",p)},y=p=>{h("blur",p)},k=p=>{const F=p;h("toggle",F.detail),h("update:pressed",F.detail.pressed)};return M(()=>o.pressed,p=>{r.value&&o.toggle&&(r.value.pressed=p)}),(p,F)=>(m(),b("ag-button-fx",T({ref_key:"buttonFxRef",ref:r,".disabled":l.disabled,".loading":l.loading,".toggle":l.toggle,".pressed":l.pressed,".bordered":l.bordered,".ghost":l.ghost,".link":l.link,".grouped":l.grouped,".ariaLabel":l.ariaLabel,".fx":l.fx,".fxDisabled":l.fxDisabled,type:l.type,variant:l.variant,size:l.size,shape:l.shape,"fx-speed":l.fxSpeed,"fx-ease":l.fxEase,onClick:u,onFocus:n,onBlur:y,onToggle:k},p.$attrs),[L(p.$slots,"default")],48,$))}}),K=E({name:"ButtonFxExamples",components:{Mail:H,Trash2:j,ShoppingCart:X,Bomb:G,Database:N,VueButtonFx:U,VueIcon:_,VueVisuallyHidden:I,VueAlert:z}}),Y={class:"stacked-mobile mbe6"},J={class:"stacked-mobile mbe6"},Q={class:"stacked-mobile mbe6"},Z={class:"stacked-mobile mbe6"},ss={class:"stacked-mobile mbe6"},is={class:"stacked-mobile mbe6"},as={class:"stacked-mobile mbe6"},ts={class:"mbe4"},es={class:"stacked-mobile mbe6"},ns={class:"stacked-mobile mbe6"};function ls(l,s,o,h,r,u){const n=d("VueButtonFx"),y=d("Mail"),k=d("VueIcon"),p=d("VueVisuallyHidden"),F=d("ShoppingCart"),x=d("Bomb"),D=d("Trash2"),q=d("Database"),A=d("VueAlert");return m(),b("section",null,[s[42]||(s[42]=e("div",{class:"mbe4"},[e("h2",null,"Hover Effects"),e("p",{class:"mbe2"},"These effects trigger on hover")],-1)),e("div",Y,[i(n,{fx:"bounce","fx-ease":"spring-md",title:"Bounce",variant:"primary",shape:"rounded"},{default:a(()=>[...s[0]||(s[0]=[t(" Bounce ",-1)])]),_:1}),i(n,{fx:"pulse","fx-ease":"spring-md",title:"Pulse",variant:"success",shape:"rounded"},{default:a(()=>[...s[1]||(s[1]=[t(" Pulse ",-1)])]),_:1}),i(n,{fx:"jelly","fx-ease":"spring-lg","fx-speed":"lg",title:"Jelly button",variant:"warning",shape:"rounded"},{default:a(()=>[...s[2]||(s[2]=[t(" Jelly ",-1)])]),_:1}),i(n,{fx:"grow","fx-ease":"spring-md",title:"Grow button",variant:"primary",shape:"rounded"},{default:a(()=>[...s[3]||(s[3]=[t(" Grow ",-1)])]),_:1}),i(n,{fx:"shrink","fx-ease":"spring-md",title:"Shrink button",variant:"secondary",shape:"rounded"},{default:a(()=>[...s[4]||(s[4]=[t(" Shrink ",-1)])]),_:1})]),s[43]||(s[43]=e("div",{class:"mbe4"},[e("h2",null,"Click Effects"),e("p",{class:"mbe2"},"These effects trigger on click/active state")],-1)),e("div",J,[i(n,{fx:"press-pop","fx-ease":"spring-sm",title:"Press Pop",variant:"primary",shape:"rounded"},{default:a(()=>[...s[5]||(s[5]=[t(" Press Pop ",-1)])]),_:1}),i(n,{fx:"press-pop",variant:"monochrome",title:"Send the email",shape:"rounded-square",size:"lg"},{default:a(()=>[i(k,{"no-fill":""},{default:a(()=>[i(y)]),_:1}),i(p,null,{default:a(()=>[...s[6]||(s[6]=[t("Send the email",-1)])]),_:1})]),_:1}),i(n,{fx:"press-shadow",variant:"warning",title:"Press Shadow",shape:"rounded"},{default:a(()=>[...s[7]||(s[7]=[t(" Press Shadow ",-1)])]),_:1}),i(n,{fx:"press-shadow",variant:"success",title:"Press Shadow",shape:"rounded"},{default:a(()=>[...s[8]||(s[8]=[t(" Press Shadow ",-1)])]),_:1}),i(n,{fx:"press-shadow",variant:"primary",title:"Shopping cart button",shape:"rounded-square",size:"lg"},{default:a(()=>[i(k,{"no-fill":""},{default:a(()=>[i(F)]),_:1}),i(p,null,{default:a(()=>[...s[9]||(s[9]=[t("Proceed to your cart.",-1)])]),_:1})]),_:1}),i(n,{fx:"press-shadow",variant:"danger",title:"Dangerous action button",shape:"rounded-square",size:"lg"},{default:a(()=>[i(k,{"no-fill":""},{default:a(()=>[i(x)]),_:1}),i(p,null,{default:a(()=>[...s[10]||(s[10]=[t("Do the dangerous thing",-1)])]),_:1})]),_:1})]),s[44]||(s[44]=e("div",{class:"mbe4"},[e("h2",null,"Background Effects"),e("p",{class:"mbe2"},"Effects that animate the button background")],-1)),e("div",Q,[i(n,{fx:"bg-slide","fx-speed":"md","fx-ease":"ease-out",title:"BG Slide",variant:"primary",shape:"rounded"},{default:a(()=>[...s[11]||(s[11]=[t(" BG Slide ",-1)])]),_:1}),i(n,{fx:"side-slide","fx-speed":"md","fx-ease":"ease-out",variant:"success",shape:"rounded"},{default:a(()=>[...s[12]||(s[12]=[t(" Side Slide ",-1)])]),_:1})]),s[45]||(s[45]=e("div",{class:"mbe4"},[e("h2",null,"Motion Effects"),e("p",{class:"mbe2"},"Dynamic movement effects")],-1)),e("div",Z,[i(n,{fx:"wobble","fx-ease":"spring-md",title:"Wobble",variant:"warning",shape:"rounded"},{default:a(()=>[...s[13]||(s[13]=[t(" Wobble ",-1)])]),_:1}),i(n,{fx:"shake","fx-speed":"sm",title:"Shake",variant:"danger",shape:"rounded"},{default:a(()=>[...s[14]||(s[14]=[t(" Shake ",-1)])]),_:1}),i(n,{fx:"push","fx-ease":"spring-sm",title:"Push",variant:"primary",shape:"rounded"},{default:a(()=>[...s[15]||(s[15]=[t(" Push ",-1)])]),_:1})]),s[46]||(s[46]=e("div",{class:"mbe4"},[e("h2",null,"Bordered Buttons"),e("p",{class:"mbe2"},"Effects work with bordered button styles")],-1)),e("div",ss,[i(n,{fx:"jelly","fx-ease":"spring-lg","fx-speed":"lg",title:"Primary Bordered",variant:"primary",bordered:!0,shape:"rounded"},{default:a(()=>[...s[16]||(s[16]=[t(" Primary ",-1)])]),_:1}),i(n,{fx:"jelly","fx-speed":"lg","fx-ease":"spring-lg",title:"Success Bordered",variant:"success",bordered:!0,shape:"capsule"},{default:a(()=>[...s[17]||(s[17]=[t(" Capsule ",-1)])]),_:1}),i(n,{fx:"jelly","fx-ease":"spring-lg","fx-speed":"lg",title:"Monochrome Bordered",variant:"monochrome",bordered:!0,shape:"rounded-square"},{default:a(()=>[i(k,{"no-fill":""},{default:a(()=>[i(D)]),_:1}),i(p,null,{default:a(()=>[...s[18]||(s[18]=[t("Toss it in the trash",-1)])]),_:1})]),_:1}),i(n,{fx:"jelly","fx-speed":"lg","fx-ease":"spring-lg",title:"Danger Bordered",variant:"danger",bordered:!0,shape:"rounded-square"},{default:a(()=>[i(k,{"no-fill":""},{default:a(()=>[i(q)]),_:1}),i(p,null,{default:a(()=>[...s[19]||(s[19]=[t("Write the SQL to the Database",-1)])]),_:1})]),_:1}),i(n,{fx:"jelly","fx-ease":"spring-lg","fx-speed":"lg",title:"Warning Bordered",variant:"warning",bordered:!0,shape:"rounded-square"},{default:a(()=>[i(k,{"no-fill":""},{default:a(()=>[i(x)]),_:1}),i(p,null,{default:a(()=>[...s[20]||(s[20]=[t("Warning - you better be careful.",-1)])]),_:1})]),_:1})]),s[47]||(s[47]=e("div",{class:"mbe4"},[e("h2",null,"Composite Effect"),e("p",{class:"mbe2"},"Special multi-stage animation")],-1)),e("div",is,[i(n,{fx:"pulse-wobble","fx-speed":"xl",title:"Pulse → Wobble",variant:"primary",shape:"rounded"},{default:a(()=>[...s[21]||(s[21]=[t(" Pulse → Wobble ",-1)])]),_:1}),i(n,{fx:"pulse-wobble","fx-speed":"xl",title:"Pulse → Wobble",variant:"success",shape:"rounded"},{default:a(()=>[...s[22]||(s[22]=[t(" Pulse → Wobble ",-1)])]),_:1}),i(n,{fx:"pulse-wobble","fx-speed":"xl",title:"Pulse → Wobble",variant:"monochrome",shape:"rounded"},{default:a(()=>[...s[23]||(s[23]=[t(" Pulse → Wobble ",-1)])]),_:1}),i(n,{fx:"pulse-wobble","fx-speed":"xl",title:"Pulse → Wobble",variant:"danger",shape:"rounded"},{default:a(()=>[...s[24]||(s[24]=[t(" Pulse → Wobble ",-1)])]),_:1})]),s[48]||(s[48]=e("div",{class:"mbe4"},[e("h2",null,"Speed Variations"),e("p",{class:"mbe2"},"Control animation speed with the fxSpeed prop")],-1)),e("div",as,[i(n,{fx:"pulse","fx-speed":"xs",title:"XS",variant:"primary"},{default:a(()=>[...s[25]||(s[25]=[t("XS",-1)])]),_:1}),i(n,{fx:"pulse","fx-speed":"sm",title:"SM",variant:"primary"},{default:a(()=>[...s[26]||(s[26]=[t("SM",-1)])]),_:1}),i(n,{fx:"pulse","fx-speed":"md",title:"MD",variant:"primary"},{default:a(()=>[...s[27]||(s[27]=[t("MD",-1)])]),_:1}),i(n,{fx:"pulse","fx-speed":"lg",title:"LG",variant:"primary"},{default:a(()=>[...s[28]||(s[28]=[t("LG",-1)])]),_:1}),i(n,{fx:"pulse","fx-speed":"xl",title:"XL",variant:"primary"},{default:a(()=>[...s[29]||(s[29]=[t("XL",-1)])]),_:1})]),e("div",ts,[s[31]||(s[31]=e("h2",null,"Easing Functions",-1)),s[32]||(s[32]=e("p",{class:"mbe2"},"Different easing functions create different animation feels",-1)),i(A,{"bordered-left":!0},{default:a(()=>[...s[30]||(s[30]=[t(" Examples use ",-1),e("code",null,'fx-speed="xl"',-1),t(" to make easing differences more visible. For production, prefer ",-1),e("code",null,'"sm"',-1),t(" or ",-1),e("code",null,'"md"',-1),t(" speeds. ",-1)])]),_:1})]),e("div",es,[i(n,{fx:"bounce","fx-ease":"ease","fx-speed":"xl",title:"Ease",size:"sm",variant:"primary"},{default:a(()=>[...s[33]||(s[33]=[t("Ease",-1)])]),_:1}),i(n,{fx:"bounce","fx-ease":"ease-in","fx-speed":"xl",title:"Ease-In",size:"sm",variant:"primary"},{default:a(()=>[...s[34]||(s[34]=[t("Ease-In",-1)])]),_:1}),i(n,{fx:"bounce","fx-ease":"ease-out","fx-speed":"xl",title:"Ease-Out",size:"sm",variant:"primary"},{default:a(()=>[...s[35]||(s[35]=[t("Ease-Out",-1)])]),_:1}),i(n,{fx:"bounce","fx-ease":"bounce","fx-speed":"xl",title:"Bounce",size:"sm",variant:"primary"},{default:a(()=>[...s[36]||(s[36]=[t("Bounce",-1)])]),_:1}),i(n,{fx:"bounce","fx-ease":"spring-sm","fx-speed":"xl",title:"Spring SM",size:"sm",variant:"primary"},{default:a(()=>[...s[37]||(s[37]=[t("Spring SM",-1)])]),_:1}),i(n,{fx:"bounce","fx-ease":"spring-md","fx-speed":"xl",title:"Spring MD",size:"sm",variant:"primary"},{default:a(()=>[...s[38]||(s[38]=[t("Spring MD",-1)])]),_:1}),i(n,{fx:"bounce","fx-ease":"spring-lg","fx-speed":"xl",title:"Spring SM",size:"sm",variant:"primary"},{default:a(()=>[...s[39]||(s[39]=[t("Spring LG",-1)])]),_:1})]),s[49]||(s[49]=e("div",{class:"mbe4"},[e("h2",null,"Disabling Effects"),e("p",{class:"example-description"},[t(" These buttons have "),e("code",null,'fx="bounce"'),t(" but "),e("code",null,':fx-disabled="true"'),t(" prevents the animation from playing while keeping the buttons clickable ")])],-1)),e("div",ns,[i(n,{fx:"bounce","fx-disabled":!0,title:"FX Disabled",variant:"primary"},{default:a(()=>[...s[40]||(s[40]=[t(" FX Disabled ",-1)])]),_:1}),i(n,{fx:"bounce","fx-disabled":!0,title:"FX Disabled",variant:"secondary"},{default:a(()=>[...s[41]||(s[41]=[t(" FX Disabled ",-1)])]),_:1})])])}const os=W(K,[["render",ls]]),Bs=JSON.parse('{"title":"ButtonFx","description":"","frontmatter":{},"headers":[],"relativePath":"components/button-fx.md","filePath":"components/button-fx.md"}'),ps={name:"components/button-fx.md"},Ds=Object.assign(ps,{setup(l){return(s,o)=>(m(),b("div",null,[o[0]||(o[0]=e("h1",{id:"buttonfx",tabindex:"-1"},[t("ButtonFx "),e("a",{class:"header-anchor",href:"#buttonfx","aria-label":'Permalink to "ButtonFx"'},"​")],-1)),i(w),o[1]||(o[1]=e("p",null,"An enhanced button component with customizable animation effects that trigger on hover, click, or mount. ButtonFx extends the base Button component with a rich set of visual effects to create engaging, interactive UI elements.",-1)),o[2]||(o[2]=e("div",{class:"info custom-block"},[e("p",{class:"custom-block-title"},"Opt-in Component"),e("p",null,"ButtonFx adds a few hundred lines of CSS for animation effects. It's ideal for marketing sites, landing pages, or when visual polish is a priority.")],-1)),i(os),o[3]||(o[3]=R("",48))]))}});export{Bs as __pageData,Ds as default};
