import{c as B,A as q}from"./chunks/AlphaWarning.D199zhtu.js";import{t as E}from"./chunks/Button.BOVp_oFI.js";import{i as A,z as k,a as P,x as R}from"./chunks/property-CemaeiRl.Cea_q1B7.js";import{r as M}from"./chunks/motion.styles.DXtlED6G.js";import{d as w,p as W,c as m,q as z,o as y,r as L,K as T,_ as I,C as h,j as n,G as s,w as t,a,ae as H,k as F}from"./chunks/framework.CdHt8f9T.js";import{u as X}from"./chunks/VueIcon.vue_vue_type_script_setup_true_lang-kC-nzMyu.DDae2ni8.js";import{B as j}from"./chunks/VueAlert.vue_vue_type_script_setup_true_lang-BSEoqQWL.-F1qyTuv.js";import{p as G}from"./chunks/VueVisuallyHidden.vue_vue_type_script_setup_true_lang-C_9Tq_M2.BgUPY1oU.js";import{S as N}from"./chunks/shopping-cart.CscnW6CX.js";import{T as _}from"./chunks/trash-2.DfHjdvMq.js";import{M as O}from"./chunks/mail.vQRIGu8E.js";import{F as $}from"./chunks/FrameworkExample.-SIbubez.js";import"./chunks/Alert.CTO4kRuq.js";import"./chunks/if-defined-C8i28hSj.CfeO1FY9.js";import"./chunks/state-CovhUvdr.DnzyR2fh.js";import"./chunks/unique-id.CpwMFgRD.js";import"./chunks/CloseButton.Ddd3q8sQ.js";/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=B("bomb",[["circle",{cx:"11",cy:"13",r:"9",key:"hd149"}],["path",{d:"M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95",key:"jp4j1b"}],["path",{d:"m22 2-1.5 1.5",key:"ay92ug"}]]);/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=B("database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);var U=Object.defineProperty,x=(o,e,l,p)=>{for(var d=void 0,g=o.length-1,i;g>=0;g--)(i=o[g])&&(d=i(e,l,d)||d);return d&&U(e,l,d),d};const C=class extends E{constructor(){super(),this.fxSpeed="md",this.fxEase="ease",this.fxDisabled=!1}firstUpdated(){this._applyFxClasses(),this._applyFxCustomProperties()}updated(e){super.updated(e),(e.has("fx")||e.has("fxDisabled"))&&this._applyFxClasses(),(e.has("fxSpeed")||e.has("fxEase"))&&this._applyFxCustomProperties()}_applyFxClasses(){var l;const e=(l=this.shadowRoot)==null?void 0:l.querySelector("button");e&&(e.classList.forEach(p=>{p.startsWith("ag-fx-")&&e.classList.remove(p)}),this.fx&&e.classList.add(`ag-fx-${this.fx}`),this.fxDisabled&&e.classList.add("ag-fx-disabled"))}_applyFxCustomProperties(){var l;const e=(l=this.shadowRoot)==null?void 0:l.querySelector("button");e instanceof HTMLElement&&(e.style.setProperty("--ag-fx-duration",`var(--ag-fx-duration-${this.fxSpeed})`),e.style.setProperty("--ag-fx-ease",`var(--ag-fx-ease-${this.fxEase})`))}};C.styles=[M,E.styles,A`
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
    `];let f=C;x([k({type:String,reflect:!0})],f.prototype,"fx");x([k({type:String,attribute:"fx-speed"})],f.prototype,"fxSpeed");x([k({type:String,attribute:"fx-ease"})],f.prototype,"fxEase");x([k({type:Boolean,reflect:!0,attribute:"fx-disabled"})],f.prototype,"fxDisabled");customElements.get("ag-button-fx")||customElements.define("ag-button-fx",f);const K=[".disabled",".loading",".toggle",".pressed",".bordered",".ghost",".link",".grouped",".ariaLabel",".fx",".fxDisabled","type","variant","size","shape","fx-speed","fx-ease"],Y=w({__name:"VueButtonFx",props:{variant:{default:""},size:{default:"md"},shape:{default:""},bordered:{type:Boolean,default:!1},ghost:{type:Boolean,default:!1},link:{type:Boolean,default:!1},grouped:{type:Boolean,default:!1},type:{default:"button"},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},toggle:{type:Boolean,default:!1},pressed:{type:Boolean,default:!1},ariaLabel:{default:""},fx:{},fxSpeed:{default:"md"},fxEase:{default:"ease"},fxDisabled:{type:Boolean,default:!1}},emits:["click","focus","blur","toggle","update:pressed"],setup(o,{emit:e}){const l=o,p=e,d=W(),g=r=>{p("click",r)},i=r=>{p("focus",r)},b=r=>{p("blur",r)},u=r=>{const c=r;p("toggle",c.detail),p("update:pressed",c.detail.pressed)};return z(()=>l.pressed,r=>{d.value&&l.toggle&&(d.value.pressed=r)}),(r,c)=>(y(),m("ag-button-fx",T({ref_key:"buttonFxRef",ref:d,".disabled":o.disabled,".loading":o.loading,".toggle":o.toggle,".pressed":o.pressed,".bordered":o.bordered,".ghost":o.ghost,".link":o.link,".grouped":o.grouped,".ariaLabel":o.ariaLabel,".fx":o.fx,".fxDisabled":o.fxDisabled,type:o.type,variant:o.variant,size:o.size,shape:o.shape,"fx-speed":o.fxSpeed,"fx-ease":o.fxEase,onClick:g,onFocus:i,onBlur:b,onToggle:u},r.$attrs),[L(r.$slots,"default")],48,K))}}),Z=w({name:"ButtonFxExamples",components:{Mail:O,Trash2:_,ShoppingCart:N,Bomb:J,Database:Q,VueButtonFx:Y,VueIcon:X,VueVisuallyHidden:G,VueAlert:j}}),ee={class:"stacked-mobile mbe6"},se={class:"stacked-mobile mbe6"},te={class:"stacked-mobile mbe6"},ne={class:"stacked-mobile mbe6"},ae={class:"stacked-mobile mbe6"},ie={class:"stacked-mobile mbe6"},oe={class:"stacked-mobile mbe6"},le={class:"mbe4"},re={class:"stacked-mobile mbe6"},de={class:"stacked-mobile mbe6"};function pe(o,e,l,p,d,g){const i=h("VueButtonFx"),b=h("Mail"),u=h("VueIcon"),r=h("VueVisuallyHidden"),c=h("ShoppingCart"),v=h("Bomb"),S=h("Trash2"),D=h("Database"),V=h("VueAlert");return y(),m("section",null,[e[42]||(e[42]=n("div",{class:"mbe4"},[n("h2",null,"Hover Effects"),n("p",{class:"mbe2"},"These effects trigger on hover")],-1)),n("div",ee,[s(i,{fx:"bounce","fx-ease":"spring-md",title:"Bounce",variant:"primary",shape:"rounded"},{default:t(()=>[...e[0]||(e[0]=[a(" Bounce ",-1)])]),_:1}),s(i,{fx:"pulse","fx-ease":"spring-md",title:"Pulse",variant:"success",shape:"rounded"},{default:t(()=>[...e[1]||(e[1]=[a(" Pulse ",-1)])]),_:1}),s(i,{fx:"jelly","fx-ease":"spring-lg","fx-speed":"lg",title:"Jelly button",variant:"warning",shape:"rounded"},{default:t(()=>[...e[2]||(e[2]=[a(" Jelly ",-1)])]),_:1}),s(i,{fx:"grow","fx-ease":"spring-md",title:"Grow button",variant:"primary",shape:"rounded"},{default:t(()=>[...e[3]||(e[3]=[a(" Grow ",-1)])]),_:1}),s(i,{fx:"shrink","fx-ease":"spring-md",title:"Shrink button",variant:"secondary",shape:"rounded"},{default:t(()=>[...e[4]||(e[4]=[a(" Shrink ",-1)])]),_:1})]),e[43]||(e[43]=n("div",{class:"mbe4"},[n("h2",null,"Click Effects"),n("p",{class:"mbe2"},"These effects trigger on click/active state")],-1)),n("div",se,[s(i,{fx:"press-pop","fx-ease":"spring-sm",title:"Press Pop",variant:"primary",shape:"rounded"},{default:t(()=>[...e[5]||(e[5]=[a(" Press Pop ",-1)])]),_:1}),s(i,{fx:"press-pop",variant:"monochrome",title:"Send the email",shape:"rounded-square",size:"lg"},{default:t(()=>[s(u,{"no-fill":""},{default:t(()=>[s(b)]),_:1}),s(r,null,{default:t(()=>[...e[6]||(e[6]=[a("Send the email",-1)])]),_:1})]),_:1}),s(i,{fx:"press-shadow",variant:"warning",title:"Press Shadow",shape:"rounded"},{default:t(()=>[...e[7]||(e[7]=[a(" Press Shadow ",-1)])]),_:1}),s(i,{fx:"press-shadow",variant:"success",title:"Press Shadow",shape:"rounded"},{default:t(()=>[...e[8]||(e[8]=[a(" Press Shadow ",-1)])]),_:1}),s(i,{fx:"press-shadow",variant:"primary",title:"Shopping cart button",shape:"rounded-square",size:"lg"},{default:t(()=>[s(u,{"no-fill":""},{default:t(()=>[s(c)]),_:1}),s(r,null,{default:t(()=>[...e[9]||(e[9]=[a("Proceed to your cart.",-1)])]),_:1})]),_:1}),s(i,{fx:"press-shadow",variant:"danger",title:"Dangerous action button",shape:"rounded-square",size:"lg"},{default:t(()=>[s(u,{"no-fill":""},{default:t(()=>[s(v)]),_:1}),s(r,null,{default:t(()=>[...e[10]||(e[10]=[a("Do the dangerous thing",-1)])]),_:1})]),_:1})]),e[44]||(e[44]=n("div",{class:"mbe4"},[n("h2",null,"Background Effects"),n("p",{class:"mbe2"},"Effects that animate the button background")],-1)),n("div",te,[s(i,{fx:"bg-slide","fx-speed":"md","fx-ease":"ease-out",title:"BG Slide",variant:"primary",shape:"rounded"},{default:t(()=>[...e[11]||(e[11]=[a(" BG Slide ",-1)])]),_:1}),s(i,{fx:"side-slide","fx-speed":"md","fx-ease":"ease-out",variant:"success",shape:"rounded"},{default:t(()=>[...e[12]||(e[12]=[a(" Side Slide ",-1)])]),_:1})]),e[45]||(e[45]=n("div",{class:"mbe4"},[n("h2",null,"Motion Effects"),n("p",{class:"mbe2"},"Dynamic movement effects")],-1)),n("div",ne,[s(i,{fx:"wobble","fx-ease":"spring-md",title:"Wobble",variant:"warning",shape:"rounded"},{default:t(()=>[...e[13]||(e[13]=[a(" Wobble ",-1)])]),_:1}),s(i,{fx:"shake","fx-speed":"sm",title:"Shake",variant:"danger",shape:"rounded"},{default:t(()=>[...e[14]||(e[14]=[a(" Shake ",-1)])]),_:1}),s(i,{fx:"push","fx-ease":"spring-sm",title:"Push",variant:"primary",shape:"rounded"},{default:t(()=>[...e[15]||(e[15]=[a(" Push ",-1)])]),_:1})]),e[46]||(e[46]=n("div",{class:"mbe4"},[n("h2",null,"Bordered Buttons"),n("p",{class:"mbe2"},"Effects work with bordered button styles")],-1)),n("div",ae,[s(i,{fx:"jelly","fx-ease":"spring-lg","fx-speed":"lg",title:"Primary Bordered",variant:"primary",bordered:!0,shape:"rounded"},{default:t(()=>[...e[16]||(e[16]=[a(" Primary ",-1)])]),_:1}),s(i,{fx:"jelly","fx-speed":"lg","fx-ease":"spring-lg",title:"Success Bordered",variant:"success",bordered:!0,shape:"capsule"},{default:t(()=>[...e[17]||(e[17]=[a(" Capsule ",-1)])]),_:1}),s(i,{fx:"jelly","fx-ease":"spring-lg","fx-speed":"lg",title:"Monochrome Bordered",variant:"monochrome",bordered:!0,shape:"rounded-square"},{default:t(()=>[s(u,{"no-fill":""},{default:t(()=>[s(S)]),_:1}),s(r,null,{default:t(()=>[...e[18]||(e[18]=[a("Toss it in the trash",-1)])]),_:1})]),_:1}),s(i,{fx:"jelly","fx-speed":"lg","fx-ease":"spring-lg",title:"Danger Bordered",variant:"danger",bordered:!0,shape:"rounded-square"},{default:t(()=>[s(u,{"no-fill":""},{default:t(()=>[s(D)]),_:1}),s(r,null,{default:t(()=>[...e[19]||(e[19]=[a("Write the SQL to the Database",-1)])]),_:1})]),_:1}),s(i,{fx:"jelly","fx-ease":"spring-lg","fx-speed":"lg",title:"Warning Bordered",variant:"warning",bordered:!0,shape:"rounded-square"},{default:t(()=>[s(u,{"no-fill":""},{default:t(()=>[s(v)]),_:1}),s(r,null,{default:t(()=>[...e[20]||(e[20]=[a("Warning - you better be careful.",-1)])]),_:1})]),_:1})]),e[47]||(e[47]=n("div",{class:"mbe4"},[n("h2",null,"Composite Effect"),n("p",{class:"mbe2"},"Special multi-stage animation")],-1)),n("div",ie,[s(i,{fx:"pulse-wobble","fx-speed":"xl",title:"Pulse → Wobble",variant:"primary",shape:"rounded"},{default:t(()=>[...e[21]||(e[21]=[a(" Pulse → Wobble ",-1)])]),_:1}),s(i,{fx:"pulse-wobble","fx-speed":"xl",title:"Pulse → Wobble",variant:"success",shape:"rounded"},{default:t(()=>[...e[22]||(e[22]=[a(" Pulse → Wobble ",-1)])]),_:1}),s(i,{fx:"pulse-wobble","fx-speed":"xl",title:"Pulse → Wobble",variant:"monochrome",shape:"rounded"},{default:t(()=>[...e[23]||(e[23]=[a(" Pulse → Wobble ",-1)])]),_:1}),s(i,{fx:"pulse-wobble","fx-speed":"xl",title:"Pulse → Wobble",variant:"danger",shape:"rounded"},{default:t(()=>[...e[24]||(e[24]=[a(" Pulse → Wobble ",-1)])]),_:1})]),e[48]||(e[48]=n("div",{class:"mbe4"},[n("h2",null,"Speed Variations"),n("p",{class:"mbe2"},"Control animation speed with the fxSpeed prop")],-1)),n("div",oe,[s(i,{fx:"pulse","fx-speed":"xs",title:"XS",variant:"primary"},{default:t(()=>[...e[25]||(e[25]=[a("XS",-1)])]),_:1}),s(i,{fx:"pulse","fx-speed":"sm",title:"SM",variant:"primary"},{default:t(()=>[...e[26]||(e[26]=[a("SM",-1)])]),_:1}),s(i,{fx:"pulse","fx-speed":"md",title:"MD",variant:"primary"},{default:t(()=>[...e[27]||(e[27]=[a("MD",-1)])]),_:1}),s(i,{fx:"pulse","fx-speed":"lg",title:"LG",variant:"primary"},{default:t(()=>[...e[28]||(e[28]=[a("LG",-1)])]),_:1}),s(i,{fx:"pulse","fx-speed":"xl",title:"XL",variant:"primary"},{default:t(()=>[...e[29]||(e[29]=[a("XL",-1)])]),_:1})]),n("div",le,[e[31]||(e[31]=n("h2",null,"Easing Functions",-1)),e[32]||(e[32]=n("p",{class:"mbe2"},"Different easing functions create different animation feels",-1)),s(V,{"bordered-left":!0},{default:t(()=>[...e[30]||(e[30]=[a(" Examples use ",-1),n("code",null,'fx-speed="xl"',-1),a(" to make easing differences more visible. For production, prefer ",-1),n("code",null,'"sm"',-1),a(" or ",-1),n("code",null,'"md"',-1),a(" speeds. ",-1)])]),_:1})]),n("div",re,[s(i,{fx:"bounce","fx-ease":"ease","fx-speed":"xl",title:"Ease",size:"sm",variant:"primary"},{default:t(()=>[...e[33]||(e[33]=[a("Ease",-1)])]),_:1}),s(i,{fx:"bounce","fx-ease":"ease-in","fx-speed":"xl",title:"Ease-In",size:"sm",variant:"primary"},{default:t(()=>[...e[34]||(e[34]=[a("Ease-In",-1)])]),_:1}),s(i,{fx:"bounce","fx-ease":"ease-out","fx-speed":"xl",title:"Ease-Out",size:"sm",variant:"primary"},{default:t(()=>[...e[35]||(e[35]=[a("Ease-Out",-1)])]),_:1}),s(i,{fx:"bounce","fx-ease":"bounce","fx-speed":"xl",title:"Bounce",size:"sm",variant:"primary"},{default:t(()=>[...e[36]||(e[36]=[a("Bounce",-1)])]),_:1}),s(i,{fx:"bounce","fx-ease":"spring-sm","fx-speed":"xl",title:"Spring SM",size:"sm",variant:"primary"},{default:t(()=>[...e[37]||(e[37]=[a("Spring SM",-1)])]),_:1}),s(i,{fx:"bounce","fx-ease":"spring-md","fx-speed":"xl",title:"Spring MD",size:"sm",variant:"primary"},{default:t(()=>[...e[38]||(e[38]=[a("Spring MD",-1)])]),_:1}),s(i,{fx:"bounce","fx-ease":"spring-lg","fx-speed":"xl",title:"Spring SM",size:"sm",variant:"primary"},{default:t(()=>[...e[39]||(e[39]=[a("Spring LG",-1)])]),_:1})]),e[49]||(e[49]=n("div",{class:"mbe4"},[n("h2",null,"Disabling Effects"),n("p",{class:"example-description"},[a(" These buttons have "),n("code",null,'fx="bounce"'),a(" but "),n("code",null,':fx-disabled="true"'),a(" prevents the animation from playing while keeping the buttons clickable ")])],-1)),n("div",de,[s(i,{fx:"bounce","fx-disabled":!0,title:"FX Disabled",variant:"primary"},{default:t(()=>[...e[40]||(e[40]=[a(" FX Disabled ",-1)])]),_:1}),s(i,{fx:"bounce","fx-disabled":!0,title:"FX Disabled",variant:"secondary"},{default:t(()=>[...e[41]||(e[41]=[a(" FX Disabled ",-1)])]),_:1})])])}const he=I(Z,[["render",pe]]);class ue extends P{createRenderRoot(){return this}render(){return R`
      <section>
        <!-- Hover Effects -->
        <div class="mbe4">
          <h2>Hover Effects</h2>
          <p class="mbe2">These effects trigger on hover</p>
        </div>
        <div class="stacked-mobile mbe6">
          <ag-button-fx fx="bounce" fx-ease="spring-md" title="Bounce" variant="primary" shape="rounded">
            Bounce
          </ag-button-fx>
          <ag-button-fx fx="pulse" fx-ease="spring-md" title="Pulse" variant="success" shape="rounded">
            Pulse
          </ag-button-fx>
          <ag-button-fx fx="jelly" fx-ease="spring-lg" fx-speed="lg" title="Jelly button" variant="warning" shape="rounded">
            Jelly
          </ag-button-fx>
          <ag-button-fx fx="grow" fx-ease="spring-md" title="Grow button" variant="primary" shape="rounded">
            Grow
          </ag-button-fx>
          <ag-button-fx fx="shrink" fx-ease="spring-md" title="Shrink button" variant="secondary" shape="rounded">
            Shrink
          </ag-button-fx>
        </div>

        <!-- Click Effects -->
        <div class="mbe4">
          <h2>Click Effects</h2>
          <p class="mbe2">These effects trigger on click/active state</p>
        </div>
        <div class="stacked-mobile mbe6">
          <ag-button-fx fx="press-pop" fx-ease="spring-sm" title="Press Pop" variant="primary" shape="rounded">
            Press Pop
          </ag-button-fx>
          <ag-button-fx fx="press-pop" variant="monochrome" title="Send the email" shape="rounded-square" size="lg">
            <ag-icon no-fill>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </ag-icon>
            <span aria-label="Send the email" style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0;">Send the email</span>
          </ag-button-fx>
          <ag-button-fx fx="press-shadow" variant="warning" title="Press Shadow" shape="rounded">
            Press Shadow
          </ag-button-fx>
          <ag-button-fx fx="press-shadow" variant="success" title="Press Shadow" shape="rounded">
            Press Shadow
          </ag-button-fx>
          <ag-button-fx fx="press-shadow" variant="primary" title="Shopping cart button" shape="rounded-square" size="lg">
            <ag-icon no-fill>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M9 2L1 8l8 6 8-6-8-6z"/>
                <path d="M9 20V8M23 14l-8 6-8-6"/>
              </svg>
            </ag-icon>
            <span aria-label="Proceed to your cart." style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0;">Proceed to your cart.</span>
          </ag-button-fx>
          <ag-button-fx fx="press-shadow" variant="danger" title="Dangerous action button" shape="rounded-square" size="lg">
            <ag-icon no-fill>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <circle cx="12" cy="12" r="1"/>
                <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"/>
              </svg>
            </ag-icon>
            <span aria-label="Do the dangerous thing" style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0;">Do the dangerous thing</span>
          </ag-button-fx>
        </div>

        <!-- Background Effects -->
        <div class="mbe4">
          <h2>Background Effects</h2>
          <p class="mbe2">Effects that animate the button background</p>
        </div>
        <div class="stacked-mobile mbe6">
          <ag-button-fx fx="bg-slide" fx-speed="md" fx-ease="ease-out" title="BG Slide" variant="primary" shape="rounded">
            BG Slide
          </ag-button-fx>
          <ag-button-fx fx="side-slide" fx-speed="md" fx-ease="ease-out" variant="success" shape="rounded">
            Side Slide
          </ag-button-fx>
        </div>

        <!-- Motion Effects -->
        <div class="mbe4">
          <h2>Motion Effects</h2>
          <p class="mbe2">Dynamic movement effects</p>
        </div>
        <div class="stacked-mobile mbe6">
          <ag-button-fx fx="wobble" fx-ease="spring-md" title="Wobble" variant="warning" shape="rounded">
            Wobble
          </ag-button-fx>
          <ag-button-fx fx="shake" fx-speed="sm" title="Shake" variant="danger" shape="rounded">
            Shake
          </ag-button-fx>
          <ag-button-fx fx="push" fx-ease="spring-sm" title="Push" variant="primary" shape="rounded">
            Push
          </ag-button-fx>
        </div>

        <!-- Bordered Buttons -->
        <div class="mbe4">
          <h2>Bordered Buttons</h2>
          <p class="mbe2">Effects work with bordered button styles</p>
        </div>
        <div class="stacked-mobile mbe6">
          <ag-button-fx fx="jelly" fx-ease="spring-lg" fx-speed="lg" title="Primary Bordered" variant="primary" bordered shape="rounded">
            Primary
          </ag-button-fx>
          <ag-button-fx fx="jelly" fx-speed="lg" fx-ease="spring-lg" title="Success Bordered" variant="success" bordered shape="capsule">
            Capsule
          </ag-button-fx>
          <ag-button-fx fx="jelly" fx-ease="spring-lg" fx-speed="lg" title="Monochrome Bordered" variant="monochrome" bordered shape="rounded-square">
            <ag-icon no-fill>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6"/>
              </svg>
            </ag-icon>
            <span aria-label="Toss it in the trash" style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0;">Toss it in the trash</span>
          </ag-button-fx>
          <ag-button-fx fx="jelly" fx-speed="lg" fx-ease="spring-lg" title="Danger Bordered" variant="danger" bordered shape="rounded-square">
            <ag-icon no-fill>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <ellipse cx="12" cy="5" rx="9" ry="3"/>
                <path d="M3 5v14a9 3 0 0018 0V5"/>
              </svg>
            </ag-icon>
            <span aria-label="Write the SQL to the Database" style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0;">Write the SQL to the Database</span>
          </ag-button-fx>
          <ag-button-fx fx="jelly" fx-ease="spring-lg" fx-speed="lg" title="Warning Bordered" variant="warning" bordered shape="rounded-square">
            <ag-icon no-fill>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <circle cx="12" cy="12" r="1"/>
                <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"/>
              </svg>
            </ag-icon>
            <span aria-label="Warning - you better be careful." style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0;">Warning - you better be careful.</span>
          </ag-button-fx>
        </div>

        <!-- Composite Effect -->
        <div class="mbe4">
          <h2>Composite Effect</h2>
          <p class="mbe2">Special multi-stage animation</p>
        </div>
        <div class="stacked-mobile mbe6">
          <ag-button-fx fx="pulse-wobble" fx-speed="xl" title="Pulse → Wobble" variant="primary" shape="rounded">
            Pulse → Wobble
          </ag-button-fx>
          <ag-button-fx fx="pulse-wobble" fx-speed="xl" title="Pulse → Wobble" variant="success" shape="rounded">
            Pulse → Wobble
          </ag-button-fx>
          <ag-button-fx fx="pulse-wobble" fx-speed="xl" title="Pulse → Wobble" variant="monochrome" shape="rounded">
            Pulse → Wobble
          </ag-button-fx>
          <ag-button-fx fx="pulse-wobble" fx-speed="xl" title="Pulse → Wobble" variant="danger" shape="rounded">
            Pulse → Wobble
          </ag-button-fx>
        </div>

        <!-- Speed Variations -->
        <div class="mbe4">
          <h2>Speed Variations</h2>
          <p class="mbe2">Control animation speed with the fxSpeed prop</p>
        </div>
        <div class="stacked-mobile mbe6">
          <ag-button-fx fx="pulse" fx-speed="xs" title="XS" variant="primary">XS</ag-button-fx>
          <ag-button-fx fx="pulse" fx-speed="sm" title="SM" variant="primary">SM</ag-button-fx>
          <ag-button-fx fx="pulse" fx-speed="md" title="MD" variant="primary">MD</ag-button-fx>
          <ag-button-fx fx="pulse" fx-speed="lg" title="LG" variant="primary">LG</ag-button-fx>
          <ag-button-fx fx="pulse" fx-speed="xl" title="XL" variant="primary">XL</ag-button-fx>
        </div>

        <!-- Easing Functions -->
        <div class="mbe4">
          <h2>Easing Functions</h2>
          <p class="mbe2">Different easing functions create different animation feels</p>
          <ag-alert bordered-left>
            Examples use <code>fx-speed="xl"</code> to make easing differences more visible.
            For production, prefer <code>"sm"</code> or <code>"md"</code> speeds.
          </ag-alert>
        </div>
        <div class="stacked-mobile mbe6">
          <ag-button-fx fx="bounce" fx-ease="ease" fx-speed="xl" title="Ease" size="sm" variant="primary">Ease</ag-button-fx>
          <ag-button-fx fx="bounce" fx-ease="ease-in" fx-speed="xl" title="Ease-In" size="sm" variant="primary">Ease-In</ag-button-fx>
          <ag-button-fx fx="bounce" fx-ease="ease-out" fx-speed="xl" title="Ease-Out" size="sm" variant="primary">Ease-Out</ag-button-fx>
          <ag-button-fx fx="bounce" fx-ease="bounce" fx-speed="xl" title="Bounce" size="sm" variant="primary">Bounce</ag-button-fx>
          <ag-button-fx fx="bounce" fx-ease="spring-sm" fx-speed="xl" title="Spring SM" size="sm" variant="primary">Spring SM</ag-button-fx>
          <ag-button-fx fx="bounce" fx-ease="spring-md" fx-speed="xl" title="Spring MD" size="sm" variant="primary">Spring MD</ag-button-fx>
          <ag-button-fx fx="bounce" fx-ease="spring-lg" fx-speed="xl" title="Spring SM" size="sm" variant="primary">Spring LG</ag-button-fx>
        </div>

        <!-- Disabled State -->
        <div class="mbe4">
          <h2>Disabling Effects</h2>
          <p class="example-description">
            These buttons have <code>fx="bounce"</code> but <code>fx-disabled="true"</code>
            prevents the animation from playing while keeping the buttons clickable
          </p>
        </div>
        <div class="stacked-mobile mbe6">
          <ag-button-fx fx="bounce" fx-disabled title="FX Disabled" variant="primary">
            FX Disabled
          </ag-button-fx>
          <ag-button-fx fx="bounce" fx-disabled title="FX Disabled" variant="secondary">
            FX Disabled
          </ag-button-fx>
        </div>
      </section>
    `}}customElements.define("buttonfx-lit-examples",ue);const ge=`<template>
  <section>
    <!-- Basic Effects -->
    <div class="mbe4">
      <h2>Hover Effects</h2>
      <p class="mbe2">These effects trigger on hover</p>
    </div>
    <div class="stacked-mobile mbe6">
      <VueButtonFx
        fx="bounce"
        fx-ease="spring-md"
        title="Bounce"
        variant="primary"
        shape="rounded"
      >
        Bounce
      </VueButtonFx>
      <VueButtonFx
        fx="pulse"
        fx-ease="spring-md"
        title="Pulse"
        variant="success"
        shape="rounded"
      >
        Pulse
      </VueButtonFx>
      <VueButtonFx
        fx="jelly"
        fx-ease="spring-lg"
        fx-speed="lg"
        title="Jelly button"
        variant="warning"
        shape="rounded"
      >
        Jelly
      </VueButtonFx>
      <VueButtonFx
        fx="grow"
        fx-ease="spring-md"
        title="Grow button"
        variant="primary"
        shape="rounded"
      >
        Grow
      </VueButtonFx>
      <VueButtonFx
        fx="shrink"
        fx-ease="spring-md"
        title="Shrink button"
        variant="secondary"
        shape="rounded"
      >
        Shrink
      </VueButtonFx>
    </div>

    <!-- Click Effects -->
    <div class="mbe4">
      <h2>Click Effects</h2>
      <p class="mbe2">These effects trigger on click/active state</p>
    </div>
    <div class="stacked-mobile mbe6">
      <VueButtonFx
        fx="press-pop"
        fx-ease="spring-sm"
        title="Press Pop"
        variant="primary"
        shape="rounded"
      >
        Press Pop
      </VueButtonFx>
      <VueButtonFx
        fx="press-pop"
        variant="monochrome"
        title="Send the email"
        shape="rounded-square"
        size="lg"
      >
        <VueIcon no-fill>
          <Mail />
        </VueIcon>
        <VueVisuallyHidden>Send the email</VueVisuallyHidden>
      </VueButtonFx>
      <VueButtonFx
        fx="press-shadow"
        variant="warning"
        title="Press Shadow"
        shape="rounded"
      >
        Press Shadow
      </VueButtonFx>
      <VueButtonFx
        fx="press-shadow"
        variant="success"
        title="Press Shadow"
        shape="rounded"
      >
        Press Shadow
      </VueButtonFx>

      <VueButtonFx
        fx="press-shadow"
        variant="primary"
        title="Shopping cart button"
        shape="rounded-square"
        size="lg"
      >
        <VueIcon no-fill>
          <ShoppingCart />
        </VueIcon>
        <VueVisuallyHidden>Proceed to your cart.</VueVisuallyHidden>
      </VueButtonFx>

      <VueButtonFx
        fx="press-shadow"
        variant="danger"
        title="Dangerous action button"
        shape="rounded-square"
        size="lg"
      >
        <VueIcon no-fill>
          <Bomb />
        </VueIcon>
        <VueVisuallyHidden>Do the dangerous thing</VueVisuallyHidden>
      </VueButtonFx>
    </div>

    <!-- Background Effects -->
    <div class="mbe4">
      <h2>Background Effects</h2>
      <p class="mbe2">Effects that animate the button background</p>
    </div>
    <div class="stacked-mobile mbe6">
      <VueButtonFx
        fx="bg-slide"
        fx-speed="md"
        fx-ease="ease-out"
        title="BG Slide"
        variant="primary"
        shape="rounded"
      >
        BG Slide
      </VueButtonFx>
      <VueButtonFx
        fx="side-slide"
        fx-speed="md"
        fx-ease="ease-out"
        variant="success"
        shape="rounded"
      >
        Side Slide
      </VueButtonFx>
    </div>

    <!-- Motion Effects -->
    <div class="mbe4">
      <h2>Motion Effects</h2>
      <p class="mbe2">Dynamic movement effects</p>
    </div>
    <div class="stacked-mobile mbe6">
      <VueButtonFx
        fx="wobble"
        fx-ease="spring-md"
        title="Wobble"
        variant="warning"
        shape="rounded"
      >
        Wobble
      </VueButtonFx>
      <VueButtonFx
        fx="shake"
        fx-speed="sm"
        title="Shake"
        variant="danger"
        shape="rounded"
      >
        Shake
      </VueButtonFx>
      <VueButtonFx
        fx="push"
        fx-ease="spring-sm"
        title="Push"
        variant="primary"
        shape="rounded"
      >
        Push
      </VueButtonFx>
    </div>

    <!-- Bordered Buttons -->
    <div class="mbe4">
      <h2>Bordered Buttons</h2>
      <p class="mbe2">Effects work with bordered button styles</p>
    </div>
    <div class="stacked-mobile mbe6">
      <VueButtonFx
        fx="jelly"
        fx-ease="spring-lg"
        fx-speed="lg"
        title="Primary Bordered"
        variant="primary"
        :bordered="true"
        shape="rounded"
      >
        Primary
      </VueButtonFx>
      <VueButtonFx
        fx="jelly"
        fx-speed="lg"
        fx-ease="spring-lg"
        title="Success Bordered"
        variant="success"
        :bordered="true"
        shape="capsule"
      >
        Capsule
      </VueButtonFx>
      <VueButtonFx
        fx="jelly"
        fx-ease="spring-lg"
        fx-speed="lg"
        title="Monochrome Bordered"
        variant="monochrome"
        :bordered="true"
        shape="rounded-square"
      >
        <VueIcon no-fill>
          <Trash2 />
        </VueIcon>
        <VueVisuallyHidden>Toss it in the trash</VueVisuallyHidden>
      </VueButtonFx>
      <VueButtonFx
        fx="jelly"
        fx-speed="lg"
        fx-ease="spring-lg"
        title="Danger Bordered"
        variant="danger"
        :bordered="true"
        shape="rounded-square"
      >
        <VueIcon no-fill>
          <Database />
        </VueIcon>
        <VueVisuallyHidden>Write the SQL to the Database</VueVisuallyHidden>
      </VueButtonFx>

      <VueButtonFx
        fx="jelly"
        fx-ease="spring-lg"
        fx-speed="lg"
        title="Warning Bordered"
        variant="warning"
        :bordered="true"
        shape="rounded-square"
      >
        <VueIcon no-fill>
          <Bomb />
        </VueIcon>
        <VueVisuallyHidden>Warning - you better be careful.</VueVisuallyHidden>
      </VueButtonFx>
    </div>

    <!-- Composite Effect -->
    <div class="mbe4">
      <h2>Composite Effect</h2>
      <p class="mbe2">Special multi-stage animation</p>
    </div>
    <div class="stacked-mobile mbe6">
      <VueButtonFx
        fx="pulse-wobble"
        fx-speed="xl"
        title="Pulse → Wobble"
        variant="primary"
        shape="rounded"
      >
        Pulse → Wobble
      </VueButtonFx>

      <VueButtonFx
        fx="pulse-wobble"
        fx-speed="xl"
        title="Pulse → Wobble"
        variant="success"
        shape="rounded"
      >
        Pulse → Wobble
      </VueButtonFx>
      <VueButtonFx
        fx="pulse-wobble"
        fx-speed="xl"
        title="Pulse → Wobble"
        variant="monochrome"
        shape="rounded"
      >
        Pulse → Wobble
      </VueButtonFx>
      <VueButtonFx
        fx="pulse-wobble"
        fx-speed="xl"
        title="Pulse → Wobble"
        variant="danger"
        shape="rounded"
      >
        Pulse → Wobble
      </VueButtonFx>
    </div>

    <!-- Speed Variations -->
    <div class="mbe4">
      <h2>Speed Variations</h2>
      <p class="mbe2">Control animation speed with the fxSpeed prop</p>
    </div>
    <div class="stacked-mobile mbe6">
      <VueButtonFx
        fx="pulse"
        fx-speed="xs"
        title="XS"
        variant="primary"
      >XS</VueButtonFx>
      <VueButtonFx
        fx="pulse"
        fx-speed="sm"
        title="SM"
        variant="primary"
      >SM</VueButtonFx>
      <VueButtonFx
        fx="pulse"
        fx-speed="md"
        title="MD"
        variant="primary"
      >MD</VueButtonFx>
      <VueButtonFx
        fx="pulse"
        fx-speed="lg"
        title="LG"
        variant="primary"
      >LG</VueButtonFx>
      <VueButtonFx
        fx="pulse"
        fx-speed="xl"
        title="XL"
        variant="primary"
      >XL</VueButtonFx>
    </div>

    <!-- Easing Functions -->
    <div class="mbe4">
      <h2>Easing Functions</h2>
      <p class="mbe2">Different easing functions create different animation feels</p>
      <VueAlert :bordered-left="true">
        Examples use <code>fx-speed="xl"</code> to make easing differences more visible.
        For production, prefer <code>"sm"</code> or <code>"md"</code> speeds.
      </VueAlert>
    </div>
    <div class="stacked-mobile mbe6">
      <VueButtonFx
        fx="bounce"
        fx-ease="ease"
        fx-speed="xl"
        title="Ease"
        size="sm"
        variant="primary"
      >Ease</VueButtonFx>
      <VueButtonFx
        fx="bounce"
        fx-ease="ease-in"
        fx-speed="xl"
        title="Ease-In"
        size="sm"
        variant="primary"
      >Ease-In</VueButtonFx>
      <VueButtonFx
        fx="bounce"
        fx-ease="ease-out"
        fx-speed="xl"
        title="Ease-Out"
        size="sm"
        variant="primary"
      >Ease-Out</VueButtonFx>
      <VueButtonFx
        fx="bounce"
        fx-ease="bounce"
        fx-speed="xl"
        title="Bounce"
        size="sm"
        variant="primary"
      >Bounce</VueButtonFx>
      <VueButtonFx
        fx="bounce"
        fx-ease="spring-sm"
        fx-speed="xl"
        title="Spring SM"
        size="sm"
        variant="primary"
      >Spring SM</VueButtonFx>
      <VueButtonFx
        fx="bounce"
        fx-ease="spring-md"
        fx-speed="xl"
        title="Spring MD"
        size="sm"
        variant="primary"
      >Spring MD</VueButtonFx>
      <VueButtonFx
        fx="bounce"
        fx-ease="spring-lg"
        fx-speed="xl"
        title="Spring SM"
        size="sm"
        variant="primary"
      >Spring LG</VueButtonFx>
    </div>

    <!-- Disabled State -->
    <div class="mbe4">
      <h2>Disabling Effects</h2>
      <p class="example-description">
        These buttons have <code>fx="bounce"</code> but <code>:fx-disabled="true"</code>
        prevents the animation from playing while keeping the buttons clickable
      </p>
    </div>
    <div class="stacked-mobile mbe6">
      <VueButtonFx
        fx="bounce"
        :fx-disabled="true"
        title="FX Disabled"
        variant="primary"
      >
        FX Disabled
      </VueButtonFx>
      <VueButtonFx
        fx="bounce"
        :fx-disabled="true"
        title="FX Disabled"
        variant="secondary"
      >
        FX Disabled
      </VueButtonFx>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { VueButtonFx } from "agnosticui-core/button-fx/vue";
import { VueIcon } from "agnosticui-core/icon/vue";
import { VueAlert } from "agnosticui-core/alert/vue";
import { VueVisuallyHidden } from "agnosticui-core/visually-hidden/vue";
import { Mail, Trash2, ShoppingCart, Database, Bomb } from "lucide-vue-next";

export default defineComponent({
  name: "ButtonFxExamples",
  components: {
    Mail,
    Trash2,
    ShoppingCart,
    Bomb,
    Database,
    VueButtonFx,
    VueIcon,
    VueVisuallyHidden,
    VueAlert,
  },
});
<\/script>
`,ce=`import { LitElement, html } from 'lit';
import 'agnosticui-core/button-fx';
import 'agnosticui-core/icon';
import 'agnosticui-core/alert';

export class ButtonFxLitExamples extends LitElement {
  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  render() {
    return html\`
      <section>
        <!-- Hover Effects -->
        <div class="mbe4">
          <h2>Hover Effects</h2>
          <p class="mbe2">These effects trigger on hover</p>
        </div>
        <div class="stacked-mobile mbe6">
          <ag-button-fx fx="bounce" fx-ease="spring-md" title="Bounce" variant="primary" shape="rounded">
            Bounce
          </ag-button-fx>
          <ag-button-fx fx="pulse" fx-ease="spring-md" title="Pulse" variant="success" shape="rounded">
            Pulse
          </ag-button-fx>
          <ag-button-fx fx="jelly" fx-ease="spring-lg" fx-speed="lg" title="Jelly button" variant="warning" shape="rounded">
            Jelly
          </ag-button-fx>
          <ag-button-fx fx="grow" fx-ease="spring-md" title="Grow button" variant="primary" shape="rounded">
            Grow
          </ag-button-fx>
          <ag-button-fx fx="shrink" fx-ease="spring-md" title="Shrink button" variant="secondary" shape="rounded">
            Shrink
          </ag-button-fx>
        </div>

        <!-- Click Effects -->
        <div class="mbe4">
          <h2>Click Effects</h2>
          <p class="mbe2">These effects trigger on click/active state</p>
        </div>
        <div class="stacked-mobile mbe6">
          <ag-button-fx fx="press-pop" fx-ease="spring-sm" title="Press Pop" variant="primary" shape="rounded">
            Press Pop
          </ag-button-fx>
          <ag-button-fx fx="press-pop" variant="monochrome" title="Send the email" shape="rounded-square" size="lg">
            <ag-icon no-fill>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </ag-icon>
            <span aria-label="Send the email" style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0;">Send the email</span>
          </ag-button-fx>
          <ag-button-fx fx="press-shadow" variant="warning" title="Press Shadow" shape="rounded">
            Press Shadow
          </ag-button-fx>
          <ag-button-fx fx="press-shadow" variant="success" title="Press Shadow" shape="rounded">
            Press Shadow
          </ag-button-fx>
          <ag-button-fx fx="press-shadow" variant="primary" title="Shopping cart button" shape="rounded-square" size="lg">
            <ag-icon no-fill>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M9 2L1 8l8 6 8-6-8-6z"/>
                <path d="M9 20V8M23 14l-8 6-8-6"/>
              </svg>
            </ag-icon>
            <span aria-label="Proceed to your cart." style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0;">Proceed to your cart.</span>
          </ag-button-fx>
          <ag-button-fx fx="press-shadow" variant="danger" title="Dangerous action button" shape="rounded-square" size="lg">
            <ag-icon no-fill>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <circle cx="12" cy="12" r="1"/>
                <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"/>
              </svg>
            </ag-icon>
            <span aria-label="Do the dangerous thing" style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0;">Do the dangerous thing</span>
          </ag-button-fx>
        </div>

        <!-- Background Effects -->
        <div class="mbe4">
          <h2>Background Effects</h2>
          <p class="mbe2">Effects that animate the button background</p>
        </div>
        <div class="stacked-mobile mbe6">
          <ag-button-fx fx="bg-slide" fx-speed="md" fx-ease="ease-out" title="BG Slide" variant="primary" shape="rounded">
            BG Slide
          </ag-button-fx>
          <ag-button-fx fx="side-slide" fx-speed="md" fx-ease="ease-out" variant="success" shape="rounded">
            Side Slide
          </ag-button-fx>
        </div>

        <!-- Motion Effects -->
        <div class="mbe4">
          <h2>Motion Effects</h2>
          <p class="mbe2">Dynamic movement effects</p>
        </div>
        <div class="stacked-mobile mbe6">
          <ag-button-fx fx="wobble" fx-ease="spring-md" title="Wobble" variant="warning" shape="rounded">
            Wobble
          </ag-button-fx>
          <ag-button-fx fx="shake" fx-speed="sm" title="Shake" variant="danger" shape="rounded">
            Shake
          </ag-button-fx>
          <ag-button-fx fx="push" fx-ease="spring-sm" title="Push" variant="primary" shape="rounded">
            Push
          </ag-button-fx>
        </div>

        <!-- Bordered Buttons -->
        <div class="mbe4">
          <h2>Bordered Buttons</h2>
          <p class="mbe2">Effects work with bordered button styles</p>
        </div>
        <div class="stacked-mobile mbe6">
          <ag-button-fx fx="jelly" fx-ease="spring-lg" fx-speed="lg" title="Primary Bordered" variant="primary" bordered shape="rounded">
            Primary
          </ag-button-fx>
          <ag-button-fx fx="jelly" fx-speed="lg" fx-ease="spring-lg" title="Success Bordered" variant="success" bordered shape="capsule">
            Capsule
          </ag-button-fx>
          <ag-button-fx fx="jelly" fx-ease="spring-lg" fx-speed="lg" title="Monochrome Bordered" variant="monochrome" bordered shape="rounded-square">
            <ag-icon no-fill>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6"/>
              </svg>
            </ag-icon>
            <span aria-label="Toss it in the trash" style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0;">Toss it in the trash</span>
          </ag-button-fx>
          <ag-button-fx fx="jelly" fx-speed="lg" fx-ease="spring-lg" title="Danger Bordered" variant="danger" bordered shape="rounded-square">
            <ag-icon no-fill>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <ellipse cx="12" cy="5" rx="9" ry="3"/>
                <path d="M3 5v14a9 3 0 0018 0V5"/>
              </svg>
            </ag-icon>
            <span aria-label="Write the SQL to the Database" style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0;">Write the SQL to the Database</span>
          </ag-button-fx>
          <ag-button-fx fx="jelly" fx-ease="spring-lg" fx-speed="lg" title="Warning Bordered" variant="warning" bordered shape="rounded-square">
            <ag-icon no-fill>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <circle cx="12" cy="12" r="1"/>
                <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"/>
              </svg>
            </ag-icon>
            <span aria-label="Warning - you better be careful." style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0;">Warning - you better be careful.</span>
          </ag-button-fx>
        </div>

        <!-- Composite Effect -->
        <div class="mbe4">
          <h2>Composite Effect</h2>
          <p class="mbe2">Special multi-stage animation</p>
        </div>
        <div class="stacked-mobile mbe6">
          <ag-button-fx fx="pulse-wobble" fx-speed="xl" title="Pulse → Wobble" variant="primary" shape="rounded">
            Pulse → Wobble
          </ag-button-fx>
          <ag-button-fx fx="pulse-wobble" fx-speed="xl" title="Pulse → Wobble" variant="success" shape="rounded">
            Pulse → Wobble
          </ag-button-fx>
          <ag-button-fx fx="pulse-wobble" fx-speed="xl" title="Pulse → Wobble" variant="monochrome" shape="rounded">
            Pulse → Wobble
          </ag-button-fx>
          <ag-button-fx fx="pulse-wobble" fx-speed="xl" title="Pulse → Wobble" variant="danger" shape="rounded">
            Pulse → Wobble
          </ag-button-fx>
        </div>

        <!-- Speed Variations -->
        <div class="mbe4">
          <h2>Speed Variations</h2>
          <p class="mbe2">Control animation speed with the fxSpeed prop</p>
        </div>
        <div class="stacked-mobile mbe6">
          <ag-button-fx fx="pulse" fx-speed="xs" title="XS" variant="primary">XS</ag-button-fx>
          <ag-button-fx fx="pulse" fx-speed="sm" title="SM" variant="primary">SM</ag-button-fx>
          <ag-button-fx fx="pulse" fx-speed="md" title="MD" variant="primary">MD</ag-button-fx>
          <ag-button-fx fx="pulse" fx-speed="lg" title="LG" variant="primary">LG</ag-button-fx>
          <ag-button-fx fx="pulse" fx-speed="xl" title="XL" variant="primary">XL</ag-button-fx>
        </div>

        <!-- Easing Functions -->
        <div class="mbe4">
          <h2>Easing Functions</h2>
          <p class="mbe2">Different easing functions create different animation feels</p>
          <ag-alert bordered-left>
            Examples use <code>fx-speed="xl"</code> to make easing differences more visible.
            For production, prefer <code>"sm"</code> or <code>"md"</code> speeds.
          </ag-alert>
        </div>
        <div class="stacked-mobile mbe6">
          <ag-button-fx fx="bounce" fx-ease="ease" fx-speed="xl" title="Ease" size="sm" variant="primary">Ease</ag-button-fx>
          <ag-button-fx fx="bounce" fx-ease="ease-in" fx-speed="xl" title="Ease-In" size="sm" variant="primary">Ease-In</ag-button-fx>
          <ag-button-fx fx="bounce" fx-ease="ease-out" fx-speed="xl" title="Ease-Out" size="sm" variant="primary">Ease-Out</ag-button-fx>
          <ag-button-fx fx="bounce" fx-ease="bounce" fx-speed="xl" title="Bounce" size="sm" variant="primary">Bounce</ag-button-fx>
          <ag-button-fx fx="bounce" fx-ease="spring-sm" fx-speed="xl" title="Spring SM" size="sm" variant="primary">Spring SM</ag-button-fx>
          <ag-button-fx fx="bounce" fx-ease="spring-md" fx-speed="xl" title="Spring MD" size="sm" variant="primary">Spring MD</ag-button-fx>
          <ag-button-fx fx="bounce" fx-ease="spring-lg" fx-speed="xl" title="Spring SM" size="sm" variant="primary">Spring LG</ag-button-fx>
        </div>

        <!-- Disabled State -->
        <div class="mbe4">
          <h2>Disabling Effects</h2>
          <p class="example-description">
            These buttons have <code>fx="bounce"</code> but <code>fx-disabled="true"</code>
            prevents the animation from playing while keeping the buttons clickable
          </p>
        </div>
        <div class="stacked-mobile mbe6">
          <ag-button-fx fx="bounce" fx-disabled title="FX Disabled" variant="primary">
            FX Disabled
          </ag-button-fx>
          <ag-button-fx fx="bounce" fx-disabled title="FX Disabled" variant="secondary">
            FX Disabled
          </ag-button-fx>
        </div>
      </section>
    \`;
  }
}

// Register the custom element
customElements.define('buttonfx-lit-examples', ButtonFxLitExamples);
`,fe=`import { ReactButtonFx } from "agnosticui-core/button-fx/react";
import { ReactIcon } from "agnosticui-core/icon/react";
import { ReactAlert } from "agnosticui-core/alert/react";
import { ReactVisuallyHidden } from "agnosticui-core/visually-hidden/react";
import { Mail, Trash2, ShoppingCart, Database, Bomb } from "lucide-react";

export default function ButtonFxReactExamples() {
  return (
    <section>
      {/* Hover Effects */}
      <div className="mbe4">
        <h2>Hover Effects</h2>
        <p className="mbe2">These effects trigger on hover</p>
      </div>
      <div className="stacked-mobile mbe6">
        <ReactButtonFx
          fx="bounce"
          fxEase="spring-md"
          title="Bounce"
          variant="primary"
          shape="rounded"
        >
          Bounce
        </ReactButtonFx>
        <ReactButtonFx
          fx="pulse"
          fxEase="spring-md"
          title="Pulse"
          variant="success"
          shape="rounded"
        >
          Pulse
        </ReactButtonFx>
        <ReactButtonFx
          fx="jelly"
          fxEase="spring-lg"
          fxSpeed="lg"
          title="Jelly button"
          variant="warning"
          shape="rounded"
        >
          Jelly
        </ReactButtonFx>
        <ReactButtonFx
          fx="grow"
          fxEase="spring-md"
          title="Grow button"
          variant="primary"
          shape="rounded"
        >
          Grow
        </ReactButtonFx>
        <ReactButtonFx
          fx="shrink"
          fxEase="spring-md"
          title="Shrink button"
          variant="secondary"
          shape="rounded"
        >
          Shrink
        </ReactButtonFx>
      </div>

      {/* Click Effects */}
      <div className="mbe4">
        <h2>Click Effects</h2>
        <p className="mbe2">These effects trigger on click/active state</p>
      </div>
      <div className="stacked-mobile mbe6">
        <ReactButtonFx
          fx="press-pop"
          fxEase="spring-sm"
          title="Press Pop"
          variant="primary"
          shape="rounded"
        >
          Press Pop
        </ReactButtonFx>
        <ReactButtonFx
          fx="press-pop"
          variant="monochrome"
          title="Send the email"
          shape="rounded-square"
          size="lg"
        >
          <ReactIcon noFill>
            <Mail size={24} />
          </ReactIcon>
          <ReactVisuallyHidden>Send the email</ReactVisuallyHidden>
        </ReactButtonFx>
        <ReactButtonFx
          fx="press-shadow"
          variant="warning"
          title="Press Shadow"
          shape="rounded"
        >
          Press Shadow
        </ReactButtonFx>
        <ReactButtonFx
          fx="press-shadow"
          variant="success"
          title="Press Shadow"
          shape="rounded"
        >
          Press Shadow
        </ReactButtonFx>
        <ReactButtonFx
          fx="press-shadow"
          variant="primary"
          title="Shopping cart button"
          shape="rounded-square"
          size="lg"
        >
          <ReactIcon noFill>
            <ShoppingCart size={24} />
          </ReactIcon>
          <ReactVisuallyHidden>Proceed to your cart.</ReactVisuallyHidden>
        </ReactButtonFx>
        <ReactButtonFx
          fx="press-shadow"
          variant="danger"
          title="Dangerous action button"
          shape="rounded-square"
          size="lg"
        >
          <ReactIcon noFill>
            <Bomb size={24} />
          </ReactIcon>
          <ReactVisuallyHidden>Do the dangerous thing</ReactVisuallyHidden>
        </ReactButtonFx>
      </div>

      {/* Background Effects */}
      <div className="mbe4">
        <h2>Background Effects</h2>
        <p className="mbe2">Effects that animate the button background</p>
      </div>
      <div className="stacked-mobile mbe6">
        <ReactButtonFx
          fx="bg-slide"
          fxSpeed="md"
          fxEase="ease-out"
          title="BG Slide"
          variant="primary"
          shape="rounded"
        >
          BG Slide
        </ReactButtonFx>
        <ReactButtonFx
          fx="side-slide"
          fxSpeed="md"
          fxEase="ease-out"
          variant="success"
          shape="rounded"
        >
          Side Slide
        </ReactButtonFx>
      </div>

      {/* Motion Effects */}
      <div className="mbe4">
        <h2>Motion Effects</h2>
        <p className="mbe2">Dynamic movement effects</p>
      </div>
      <div className="stacked-mobile mbe6">
        <ReactButtonFx
          fx="wobble"
          fxEase="spring-md"
          title="Wobble"
          variant="warning"
          shape="rounded"
        >
          Wobble
        </ReactButtonFx>
        <ReactButtonFx
          fx="shake"
          fxSpeed="sm"
          title="Shake"
          variant="danger"
          shape="rounded"
        >
          Shake
        </ReactButtonFx>
        <ReactButtonFx
          fx="push"
          fxEase="spring-sm"
          title="Push"
          variant="primary"
          shape="rounded"
        >
          Push
        </ReactButtonFx>
      </div>

      {/* Bordered Buttons */}
      <div className="mbe4">
        <h2>Bordered Buttons</h2>
        <p className="mbe2">Effects work with bordered button styles</p>
      </div>
      <div className="stacked-mobile mbe6">
        <ReactButtonFx
          fx="jelly"
          fxEase="spring-lg"
          fxSpeed="lg"
          title="Primary Bordered"
          variant="primary"
          bordered
          shape="rounded"
        >
          Primary
        </ReactButtonFx>
        <ReactButtonFx
          fx="jelly"
          fxSpeed="lg"
          fxEase="spring-lg"
          title="Success Bordered"
          variant="success"
          bordered
          shape="capsule"
        >
          Capsule
        </ReactButtonFx>
        <ReactButtonFx
          fx="jelly"
          fxEase="spring-lg"
          fxSpeed="lg"
          title="Monochrome Bordered"
          variant="monochrome"
          bordered
          shape="rounded-square"
        >
          <ReactIcon noFill>
            <Trash2 size={24} />
          </ReactIcon>
          <ReactVisuallyHidden>Toss it in the trash</ReactVisuallyHidden>
        </ReactButtonFx>
        <ReactButtonFx
          fx="jelly"
          fxSpeed="lg"
          fxEase="spring-lg"
          title="Danger Bordered"
          variant="danger"
          bordered
          shape="rounded-square"
        >
          <ReactIcon noFill>
            <Database size={24} />
          </ReactIcon>
          <ReactVisuallyHidden>Write the SQL to the Database</ReactVisuallyHidden>
        </ReactButtonFx>
        <ReactButtonFx
          fx="jelly"
          fxEase="spring-lg"
          fxSpeed="lg"
          title="Warning Bordered"
          variant="warning"
          bordered
          shape="rounded-square"
        >
          <ReactIcon noFill>
            <Bomb size={24} />
          </ReactIcon>
          <ReactVisuallyHidden>Warning - you better be careful.</ReactVisuallyHidden>
        </ReactButtonFx>
      </div>

      {/* Composite Effect */}
      <div className="mbe4">
        <h2>Composite Effect</h2>
        <p className="mbe2">Special multi-stage animation</p>
      </div>
      <div className="stacked-mobile mbe6">
        <ReactButtonFx
          fx="pulse-wobble"
          fxSpeed="xl"
          title="Pulse → Wobble"
          variant="primary"
          shape="rounded"
        >
          Pulse → Wobble
        </ReactButtonFx>
        <ReactButtonFx
          fx="pulse-wobble"
          fxSpeed="xl"
          title="Pulse → Wobble"
          variant="success"
          shape="rounded"
        >
          Pulse → Wobble
        </ReactButtonFx>
        <ReactButtonFx
          fx="pulse-wobble"
          fxSpeed="xl"
          title="Pulse → Wobble"
          variant="monochrome"
          shape="rounded"
        >
          Pulse → Wobble
        </ReactButtonFx>
        <ReactButtonFx
          fx="pulse-wobble"
          fxSpeed="xl"
          title="Pulse → Wobble"
          variant="danger"
          shape="rounded"
        >
          Pulse → Wobble
        </ReactButtonFx>
      </div>

      {/* Speed Variations */}
      <div className="mbe4">
        <h2>Speed Variations</h2>
        <p className="mbe2">Control animation speed with the fxSpeed prop</p>
      </div>
      <div className="stacked-mobile mbe6">
        <ReactButtonFx fx="pulse" fxSpeed="xs" title="XS" variant="primary">
          XS
        </ReactButtonFx>
        <ReactButtonFx fx="pulse" fxSpeed="sm" title="SM" variant="primary">
          SM
        </ReactButtonFx>
        <ReactButtonFx fx="pulse" fxSpeed="md" title="MD" variant="primary">
          MD
        </ReactButtonFx>
        <ReactButtonFx fx="pulse" fxSpeed="lg" title="LG" variant="primary">
          LG
        </ReactButtonFx>
        <ReactButtonFx fx="pulse" fxSpeed="xl" title="XL" variant="primary">
          XL
        </ReactButtonFx>
      </div>

      {/* Easing Functions */}
      <div className="mbe4">
        <h2>Easing Functions</h2>
        <p className="mbe2">Different easing functions create different animation feels</p>
        <ReactAlert borderedLeft>
          Examples use <code>fxSpeed="xl"</code> to make easing differences more visible.
          For production, prefer <code>"sm"</code> or <code>"md"</code> speeds.
        </ReactAlert>
      </div>
      <div className="stacked-mobile mbe6">
        <ReactButtonFx
          fx="bounce"
          fxEase="ease"
          fxSpeed="xl"
          title="Ease"
          size="sm"
          variant="primary"
        >
          Ease
        </ReactButtonFx>
        <ReactButtonFx
          fx="bounce"
          fxEase="ease-in"
          fxSpeed="xl"
          title="Ease-In"
          size="sm"
          variant="primary"
        >
          Ease-In
        </ReactButtonFx>
        <ReactButtonFx
          fx="bounce"
          fxEase="ease-out"
          fxSpeed="xl"
          title="Ease-Out"
          size="sm"
          variant="primary"
        >
          Ease-Out
        </ReactButtonFx>
        <ReactButtonFx
          fx="bounce"
          fxEase="bounce"
          fxSpeed="xl"
          title="Bounce"
          size="sm"
          variant="primary"
        >
          Bounce
        </ReactButtonFx>
        <ReactButtonFx
          fx="bounce"
          fxEase="spring-sm"
          fxSpeed="xl"
          title="Spring SM"
          size="sm"
          variant="primary"
        >
          Spring SM
        </ReactButtonFx>
        <ReactButtonFx
          fx="bounce"
          fxEase="spring-md"
          fxSpeed="xl"
          title="Spring MD"
          size="sm"
          variant="primary"
        >
          Spring MD
        </ReactButtonFx>
        <ReactButtonFx
          fx="bounce"
          fxEase="spring-lg"
          fxSpeed="xl"
          title="Spring SM"
          size="sm"
          variant="primary"
        >
          Spring LG
        </ReactButtonFx>
      </div>

      {/* Disabled State */}
      <div className="mbe4">
        <h2>Disabling Effects</h2>
        <p className="example-description">
          These buttons have <code>fx="bounce"</code> but <code>fxDisabled={"{true}"}</code>
          prevents the animation from playing while keeping the buttons clickable
        </p>
      </div>
      <div className="stacked-mobile mbe6">
        <ReactButtonFx
          fx="bounce"
          fxDisabled
          title="FX Disabled"
          variant="primary"
        >
          FX Disabled
        </ReactButtonFx>
        <ReactButtonFx
          fx="bounce"
          fxDisabled
          title="FX Disabled"
          variant="secondary"
        >
          FX Disabled
        </ReactButtonFx>
      </div>
    </section>
  );
}
`,We=JSON.parse('{"title":"ButtonFx","description":"","frontmatter":{},"headers":[],"relativePath":"components/button-fx.md","filePath":"components/button-fx.md"}'),ke={name:"components/button-fx.md"},ze=Object.assign(ke,{setup(o){return(e,l)=>(y(),m("div",null,[l[1]||(l[1]=n("h1",{id:"buttonfx",tabindex:"-1"},[a("ButtonFx "),n("a",{class:"header-anchor",href:"#buttonfx","aria-label":'Permalink to "ButtonFx"'},"​")],-1)),s(q),l[2]||(l[2]=n("p",null,"An enhanced button component with customizable animation effects that trigger on hover, click, or mount. ButtonFx extends the base Button component with a rich set of visual effects to create engaging, interactive UI elements.",-1)),l[3]||(l[3]=n("div",{class:"info custom-block"},[n("p",{class:"custom-block-title"},"Opt-in Component"),n("p",null,"ButtonFx adds a few hundred lines of CSS for animation effects. It's ideal for marketing sites, landing pages, or when visual polish is a priority.")],-1)),s($,{component:"button-fx","vue-code":F(ge),"lit-code":F(ce),"react-code":F(fe)},{vue:t(()=>[s(he)]),lit:t(()=>[...l[0]||(l[0]=[n("buttonfx-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),l[4]||(l[4]=H("",48))]))}});export{We as __pageData,ze as default};
