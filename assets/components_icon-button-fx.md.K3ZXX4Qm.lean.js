import{c as A,A as z}from"./chunks/AlphaWarning.BeGEOyJF.js";import{i as W}from"./chunks/lit-element.B0TUrqGF.js";import{z as m}from"./chunks/property-CemaeiRl.BAjarvIB.js";import{t as D}from"./chunks/IconButton.DT6rmXbZ.js";import{r as N}from"./chunks/motion.styles.BWS49nks.js";import{d as q,p as G,c as B,o as x,r as U,K as j,_ as $,C as p,j as i,a as h,G as s,w as t,ae as v}from"./chunks/framework.DvJW1jwp.js";import{B as O}from"./chunks/VueAlert.vue_vue_type_script_setup_true_lang-BSEoqQWL.CUBU16p_.js";import{S as J}from"./chunks/settings.CmspTUN1.js";import{P as X}from"./chunks/plus.Bg0L2mMn.js";import{C as K}from"./chunks/check.DX38fG4T.js";import{S as Q}from"./chunks/star.D4htLVMX.js";import{S as Y}from"./chunks/send.CcYUgPhE.js";import{M as Z}from"./chunks/message-circle.CZxeRxp3.js";import{B as ss,S as is}from"./chunks/square-pen.B0jwI-NC.js";import{S as as}from"./chunks/search.Ddi1vfYq.js";import{H as ts}from"./chunks/house.BSB5RcyT.js";import{M as ns}from"./chunks/menu.gFSWxzfP.js";import{T as ls}from"./chunks/trash-2.C8o6kQcr.js";import{B as hs}from"./chunks/bell.DwOuZ-Zp.js";import{D as es}from"./chunks/download.DlVVmrgD.js";import{H as ks}from"./chunks/heart.Cs7W5I4N.js";import"./chunks/if-defined-C8i28hSj.CfeO1FY9.js";import"./chunks/Alert.DfKP0k46.js";import"./chunks/CloseButton.JmCUmSqr.js";/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ps=A("minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fs=A("thumbs-up",[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",key:"emmmcr"}]]);var rs=Object.defineProperty,b=(k,n,e,c)=>{for(var r=void 0,y=k.length-1,l;y>=0;y--)(l=k[y])&&(r=l(n,e,r)||r);return r&&rs(n,e,r),r};const _=class extends D{constructor(){super(),this.fxSpeed="md",this.fxEase="ease",this.fxDisabled=!1}firstUpdated(n){var e;(e=super.firstUpdated)==null||e.call(this,n),this._applyFxClasses(),this._applyFxCustomProperties()}updated(n){super.updated(n),(n.has("fx")||n.has("fxDisabled"))&&this._applyFxClasses(),(n.has("fxSpeed")||n.has("fxEase"))&&this._applyFxCustomProperties()}_applyFxClasses(){var e;const n=(e=this.shadowRoot)==null?void 0:e.querySelector("button");n&&(n.classList.forEach(c=>{c.startsWith("ag-fx-")&&n.classList.remove(c)}),this.fx&&n.classList.add(`ag-fx-${this.fx}`),this.fxDisabled&&n.classList.add("ag-fx-disabled"))}_applyFxCustomProperties(){var e;const n=(e=this.shadowRoot)==null?void 0:e.querySelector("button");n instanceof HTMLElement&&(n.style.setProperty("--ag-fx-duration",`var(--ag-fx-duration-${this.fxSpeed})`),n.style.setProperty("--ag-fx-ease",`var(--ag-fx-ease-${this.fxEase})`))}};_.styles=[D.styles,N,W`
      /* ========================================
         OVERRIDE PARENT HOVER BACKGROUNDS
         These compete with FX effects
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
        background: var(--ag-danger-dark);
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
        animation:
          ag-fx-grow 200ms var(--ag-fx-ease-spring-lg) 0ms,
          ag-fx-wobble 200ms var(--ag-fx-ease-spring-md) 200ms;
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
        button.ag-fx-slide-in,
        button.ag-fx-grow,
        button.ag-fx-shrink,
        button.ag-fx-push,
        button.ag-fx-shake,
        button.ag-fx-wobble,
        button.ag-fx-pulse-wobble {
          animation-duration: 0.01ms !important;
          transition-duration: 0.01ms !important;
        }
      }
    `];let C=_;b([m({type:String})],C.prototype,"fx");b([m({type:String,attribute:"fx-speed"})],C.prototype,"fxSpeed");b([m({type:String,attribute:"fx-ease"})],C.prototype,"fxEase");b([m({type:Boolean,reflect:!0,attribute:"fx-disabled"})],C.prototype,"fxDisabled");customElements.get("ag-icon-button-fx")||customElements.define("ag-icon-button-fx",C);const os=[".disabled",".pressed",".loading",".label",".icon",".unicode",".fx",".fxDisabled","type","variant","size","fx-speed","fx-ease"],ds=q({__name:"VueIconButtonFx",props:{label:{default:""},icon:{default:""},unicode:{default:""},size:{default:"md"},variant:{default:"ghost"},type:{default:"button"},disabled:{type:Boolean,default:!1},pressed:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},fx:{},fxSpeed:{default:"md"},fxEase:{default:"ease"},fxDisabled:{type:Boolean,default:!1}},emits:["click","icon-button-click","icon-button-activate"],setup(k,{emit:n}){const e=n,c=G(),r=a=>{e("click",a)},y=a=>{e("icon-button-click",a.detail)},l=a=>{e("icon-button-activate",a.detail)};return(a,F)=>(x(),B("ag-icon-button-fx",j({ref_key:"iconButtonFxRef",ref:c,".disabled":k.disabled,".pressed":k.pressed,".loading":k.loading,".label":k.label,".icon":k.icon,".unicode":k.unicode,".fx":k.fx,".fxDisabled":k.fxDisabled,type:k.type,variant:k.variant,size:k.size,"fx-speed":k.fxSpeed,"fx-ease":k.fxEase,onClick:r,onIconButtonClick:y,onIconButtonActivate:l},a.$attrs),[U(a.$slots,"default")],48,os))}}),gs=q({name:"IconButtonFxExamples",components:{VueIconButtonFx:ds,VueAlert:O,Heart:ks,Download:es,Bell:hs,Trash2:ls,Menu:ns,Home:ts,Search:as,Edit:is,Bookmark:ss,ThumbsUp:Fs,MessageCircle:Z,Send:Y,Star:Q,Check:K,Plus:X,Minus:ps,Settings:J}}),cs={class:"examples-container"},ys={class:"example-section"},us={class:"effect-group"},fs={class:"stacked-mobile"},Cs={class:"effect-group"},ms={class:"stacked-mobile"},bs={class:"effect-group"},Es={class:"stacked-mobile"},Bs={class:"effect-group"},xs={class:"stacked-mobile"},As={class:"effect-group"},Ds={class:"stacked-mobile"},qs={class:"effect-group"},vs={class:"stacked-mobile"},_s={class:"effect-group"},ws={class:"stacked-mobile"},Is={class:"effect-group"},Ss={class:"stacked-mobile"},Vs={class:"effect-group"},Ps={class:"stacked-mobile"},Hs={class:"example-section"},Rs={class:"stacked-mobile"},Ts={class:"example-section"},Ls={class:"mbe4"},Ms={class:"stacked",style:{width:"40%"}},zs={class:"example-section"},Ws={class:"stacked-mobile"},Ns={class:"example-section"},Gs={class:"use-case-group"},Us={class:"stacked-mobile"},js={class:"use-case-group"},$s={class:"stacked-mobile"},Os={class:"use-case-group"},Js={class:"stacked-mobile"},Xs={class:"use-case-group"},Ks={class:"stacked-mobile"},Qs={class:"example-section"},Ys={class:"stacked-mobile"};function Zs(k,n,e,c,r,y){const l=p("Heart"),a=p("VueIconButtonFx"),F=p("Check"),g=p("Star"),o=p("Trash2"),w=p("Settings"),E=p("Download"),d=p("Bell"),u=p("Plus"),f=p("Minus"),I=p("VueAlert"),S=p("Menu"),V=p("Home"),P=p("Search"),H=p("Edit"),R=p("Bookmark"),T=p("ThumbsUp"),L=p("MessageCircle"),M=p("Send");return x(),B("div",cs,[i("section",ys,[n[9]||(n[9]=i("div",{class:"mbe4"},[i("h2",null,"Basic Effects"),i("p",{class:"example-description"},"All available effects")],-1)),i("div",us,[n[0]||(n[0]=i("h3",null,[h("Pulse "),i("span",{class:"effect-type"},"Scale grow (hover)")],-1)),i("div",fs,[s(a,{fx:"pulse",variant:"primary",label:"Pulse Primary"},{default:t(()=>[s(l)]),_:1}),s(a,{fx:"pulse",variant:"success",label:"Pulse Success"},{default:t(()=>[s(F)]),_:1}),s(a,{fx:"pulse",variant:"warning",label:"Pulse Warning"},{default:t(()=>[s(g)]),_:1}),s(a,{fx:"pulse",variant:"danger",label:"Pulse Danger"},{default:t(()=>[s(o)]),_:1}),s(a,{fx:"pulse",variant:"ghost",label:"Pulse Ghost"},{default:t(()=>[s(w)]),_:1}),s(a,{fx:"pulse",variant:"primary",label:"Pulse Large"},{default:t(()=>[s(l)]),_:1})])]),i("div",Cs,[n[1]||(n[1]=i("h3",null,[h("Bounce "),i("span",{class:"effect-type"},"Vertical pop (hover)")],-1)),i("div",ms,[s(a,{fx:"bounce",variant:"primary",label:"Bounce Primary"},{default:t(()=>[s(E)]),_:1}),s(a,{fx:"bounce",variant:"success",label:"Bounce Success"},{default:t(()=>[s(F)]),_:1}),s(a,{fx:"bounce",variant:"warning",label:"Bounce Warning"},{default:t(()=>[s(d)]),_:1}),s(a,{fx:"bounce",variant:"danger",label:"Bounce Danger"},{default:t(()=>[s(o)]),_:1}),s(a,{fx:"bounce",variant:"ghost",label:"Bounce Ghost"},{default:t(()=>[s(E)]),_:1}),s(a,{fx:"bounce",variant:"success",label:"Bounce Large"},{default:t(()=>[s(E)]),_:1})])]),i("div",bs,[n[2]||(n[2]=i("h3",null,[h("Wobble "),i("span",{class:"effect-type"},"Rotate wobble (hover)")],-1)),i("div",Es,[s(a,{fx:"wobble",variant:"primary",label:"Wobble Primary"},{default:t(()=>[s(d)]),_:1}),s(a,{fx:"wobble",variant:"success",label:"Wobble Success"},{default:t(()=>[s(F)]),_:1}),s(a,{fx:"wobble",variant:"warning",label:"Wobble Warning"},{default:t(()=>[s(d)]),_:1}),s(a,{fx:"wobble",variant:"danger",label:"Wobble Danger"},{default:t(()=>[s(d)]),_:1}),s(a,{fx:"wobble",variant:"ghost",label:"Wobble Ghost"},{default:t(()=>[s(d)]),_:1}),s(a,{fx:"wobble",variant:"warning",label:"Wobble Large"},{default:t(()=>[s(d)]),_:1})])]),i("div",Bs,[n[3]||(n[3]=i("h3",null,[h("Shake "),i("span",{class:"effect-type"},"Horizontal shake (hover)")],-1)),i("div",xs,[s(a,{fx:"shake",variant:"primary",label:"Shake Primary"},{default:t(()=>[s(o)]),_:1}),s(a,{fx:"shake",variant:"success",label:"Shake Success"},{default:t(()=>[s(o)]),_:1}),s(a,{fx:"shake",variant:"warning",label:"Shake Warning"},{default:t(()=>[s(o)]),_:1}),s(a,{fx:"shake",variant:"danger",label:"Shake Danger"},{default:t(()=>[s(o)]),_:1}),s(a,{fx:"shake",variant:"ghost",label:"Shake Ghost"},{default:t(()=>[s(o)]),_:1}),s(a,{fx:"shake",variant:"danger",label:"Shake Large"},{default:t(()=>[s(o)]),_:1})])]),i("div",As,[n[4]||(n[4]=i("h3",null,[h("Pulse-Wobble "),i("span",{class:"effect-type"},"Sequential animation (hover)")],-1)),i("div",Ds,[s(a,{fx:"pulse-wobble","fx-speed":"xl",variant:"primary",label:"Pulse-Wobble Primary"},{default:t(()=>[s(l)]),_:1}),s(a,{fx:"pulse-wobble","fx-speed":"xl",variant:"success",label:"Pulse-Wobble Success"},{default:t(()=>[s(g)]),_:1}),s(a,{fx:"pulse-wobble","fx-speed":"xl",variant:"warning",label:"Pulse-Wobble Warning"},{default:t(()=>[s(d)]),_:1}),s(a,{fx:"pulse-wobble","fx-speed":"xl",variant:"danger",label:"Pulse-Wobble Danger"},{default:t(()=>[s(l)]),_:1}),s(a,{fx:"pulse-wobble","fx-speed":"xl",variant:"ghost",label:"Pulse-Wobble Ghost"},{default:t(()=>[s(l)]),_:1}),s(a,{fx:"pulse-wobble","fx-speed":"xl",variant:"primary",label:"Pulse-Wobble Large"},{default:t(()=>[s(l)]),_:1})])]),i("div",qs,[n[5]||(n[5]=i("h3",null,[h("Jelly "),i("span",{class:"effect-type"},"Squash/stretch (hover)")],-1)),i("div",vs,[s(a,{fx:"jelly",variant:"primary",label:"Jelly Primary"},{default:t(()=>[s(g)]),_:1}),s(a,{fx:"jelly",variant:"success",label:"Jelly Success"},{default:t(()=>[s(F)]),_:1}),s(a,{fx:"jelly",variant:"warning",label:"Jelly Warning"},{default:t(()=>[s(g)]),_:1}),s(a,{fx:"jelly",variant:"danger",label:"Jelly Danger"},{default:t(()=>[s(g)]),_:1}),s(a,{fx:"jelly",variant:"ghost",label:"Jelly Ghost"},{default:t(()=>[s(g)]),_:1}),s(a,{fx:"jelly",variant:"warning",label:"Jelly Large"},{default:t(()=>[s(g)]),_:1})])]),i("div",_s,[n[6]||(n[6]=i("h3",null,[h("Press-Pop "),i("span",{class:"effect-type"},"Quick press (click)")],-1)),i("div",ws,[s(a,{fx:"press-pop",variant:"primary",label:"Press-Pop Primary"},{default:t(()=>[s(F)]),_:1}),s(a,{fx:"press-pop",variant:"success",label:"Press-Pop Success"},{default:t(()=>[s(F)]),_:1}),s(a,{fx:"press-pop",variant:"warning",label:"Press-Pop Warning"},{default:t(()=>[s(F)]),_:1}),s(a,{fx:"press-pop",variant:"danger",label:"Press-Pop Danger"},{default:t(()=>[s(F)]),_:1}),s(a,{fx:"press-pop",variant:"ghost",label:"Press-Pop Ghost"},{default:t(()=>[s(F)]),_:1}),s(a,{fx:"press-pop",variant:"success",label:"Press-Pop Large"},{default:t(()=>[s(F)]),_:1})])]),i("div",Is,[n[7]||(n[7]=i("h3",null,[h("Grow "),i("span",{class:"effect-type"},"Scale up (hover)")],-1)),i("div",Ss,[s(a,{fx:"grow",variant:"primary",label:"Grow Primary"},{default:t(()=>[s(u)]),_:1}),s(a,{fx:"grow",variant:"success",label:"Grow Success"},{default:t(()=>[s(u)]),_:1}),s(a,{fx:"grow",variant:"warning",label:"Grow Warning"},{default:t(()=>[s(u)]),_:1}),s(a,{fx:"grow",variant:"danger",label:"Grow Danger"},{default:t(()=>[s(u)]),_:1}),s(a,{fx:"grow",variant:"ghost",label:"Grow Ghost"},{default:t(()=>[s(u)]),_:1}),s(a,{fx:"grow",variant:"primary",label:"Grow Large"},{default:t(()=>[s(u)]),_:1})])]),i("div",Vs,[n[8]||(n[8]=i("h3",null,[h("Shrink "),i("span",{class:"effect-type"},"Scale down (hover)")],-1)),i("div",Ps,[s(a,{fx:"shrink",variant:"primary",label:"Shrink Primary"},{default:t(()=>[s(f)]),_:1}),s(a,{fx:"shrink",variant:"success",label:"Shrink Success"},{default:t(()=>[s(f)]),_:1}),s(a,{fx:"shrink",variant:"warning",label:"Shrink Warning"},{default:t(()=>[s(f)]),_:1}),s(a,{fx:"shrink",variant:"danger",label:"Shrink Danger"},{default:t(()=>[s(f)]),_:1}),s(a,{fx:"shrink",variant:"ghost",label:"Shrink Ghost"},{default:t(()=>[s(f)]),_:1}),s(a,{fx:"shrink",variant:"danger",label:"Shrink Large"},{default:t(()=>[s(f)]),_:1})])])]),i("section",Hs,[n[10]||(n[10]=i("div",{class:"mbe4"},[i("h2",null,"Speed Variations"),i("p",{class:"example-description"},[h("Control animation speed with the "),i("code",null,"fx-speed"),h(" prop")])],-1)),i("div",Rs,[s(a,{fx:"pulse","fx-speed":"xs",variant:"primary",label:"Extra fast"},{default:t(()=>[s(l)]),_:1}),s(a,{fx:"pulse","fx-speed":"sm",variant:"primary",label:"Fast"},{default:t(()=>[s(l)]),_:1}),s(a,{fx:"pulse","fx-speed":"md",variant:"primary",label:"Medium"},{default:t(()=>[s(l)]),_:1}),s(a,{fx:"pulse","fx-speed":"lg",variant:"primary",label:"Slow"},{default:t(()=>[s(l)]),_:1}),s(a,{fx:"pulse","fx-speed":"xl",variant:"primary",label:"Extra slow"},{default:t(()=>[s(l)]),_:1})])]),i("section",Ts,[i("div",Ls,[n[12]||(n[12]=i("h2",null,"Easing Functions",-1)),n[13]||(n[13]=i("p",{class:"mbe2"},"Different easing functions create different animation feels",-1)),s(I,{"bordered-left":!0},{default:t(()=>[...n[11]||(n[11]=[h(" Examples use ",-1),i("code",null,'fx-speed="xl"',-1),h(" to make easing differences more visible. For production, prefer ",-1),i("code",null,'"sm"',-1),h(" or ",-1),i("code",null,'"md"',-1),h(" speeds. ",-1)])]),_:1})]),i("div",Ms,[n[14]||(n[14]=i("span",null,[h("Ease "),i("code",null,"(ease)")],-1)),s(a,{fx:"bounce","fx-ease":"ease","fx-speed":"xl",variant:"primary",label:"Ease"},{default:t(()=>[s(l)]),_:1}),n[15]||(n[15]=i("span",null,[h("Ease In "),i("code",null,"(ease-in)")],-1)),s(a,{fx:"bounce","fx-ease":"ease-in","fx-speed":"xl",variant:"primary",label:"Ease-In"},{default:t(()=>[s(l)]),_:1}),n[16]||(n[16]=i("span",null,[h("Ease Out "),i("code",null,"(ease-out)")],-1)),s(a,{fx:"bounce","fx-ease":"ease-out","fx-speed":"xl",variant:"primary",label:"Ease-Out"},{default:t(()=>[s(l)]),_:1}),n[17]||(n[17]=i("span",null,[h("Bounce"),i("code",null,"(bounce)")],-1)),s(a,{fx:"bounce","fx-ease":"bounce","fx-speed":"xl",variant:"primary",label:"Bounce"},{default:t(()=>[s(l)]),_:1}),n[18]||(n[18]=i("span",null,[h("Spring Small "),i("code",null,"(spring-sm)")],-1)),s(a,{fx:"bounce","fx-ease":"spring-sm","fx-speed":"xl",variant:"primary",label:"Spring SM"},{default:t(()=>[s(l)]),_:1}),n[19]||(n[19]=i("span",null,[h("Spring Medium "),i("code",null,"(spring-md)")],-1)),s(a,{fx:"bounce","fx-ease":"spring-md","fx-speed":"xl",variant:"primary",label:"Spring MD"},{default:t(()=>[s(l)]),_:1}),n[20]||(n[20]=i("span",null,[h("Spring Large "),i("code",null,"(spring-lg)")],-1)),s(a,{fx:"bounce","fx-ease":"spring-lg","fx-speed":"xl",variant:"primary",label:"Spring LG"},{default:t(()=>[s(l)]),_:1})])]),i("section",zs,[n[21]||(n[21]=v("",1)),i("div",Ws,[s(a,{fx:"pulse",size:"xs",variant:"primary",bordered:!0,label:"Extra small"},{default:t(()=>[s(l,{class:"full-w-h"})]),_:1}),s(a,{fx:"pulse",size:"sm",variant:"primary",label:"Small"},{default:t(()=>[s(l,{class:"full-w-h"})]),_:1}),s(a,{fx:"pulse",size:"md",variant:"primary",label:"Medium"},{default:t(()=>[s(l,{class:"full-w-h"})]),_:1}),s(a,{fx:"pulse",size:"lg",variant:"primary",label:"Large"},{default:t(()=>[s(l,{class:"full-w-h"})]),_:1}),s(a,{fx:"pulse",size:"xl",variant:"primary",label:"Extra large"},{default:t(()=>[s(l,{class:"full-w-h"})]),_:1})])]),i("section",Ns,[n[26]||(n[26]=i("div",{class:"mbe4"},[i("h2",null,"Common Use Cases")],-1)),i("div",Gs,[n[22]||(n[22]=i("h3",null,"Navigation",-1)),i("div",Us,[s(a,{fx:"grow",variant:"ghost",label:"Menu"},{default:t(()=>[s(S)]),_:1}),s(a,{fx:"grow",variant:"ghost",label:"Home"},{default:t(()=>[s(V)]),_:1}),s(a,{fx:"grow",variant:"ghost",label:"Search"},{default:t(()=>[s(P)]),_:1})])]),i("div",js,[n[23]||(n[23]=i("h3",null,"Actions",-1)),i("div",$s,[s(a,{fx:"pulse",variant:"primary",label:"Edit"},{default:t(()=>[s(H)]),_:1}),s(a,{fx:"shake",variant:"danger",label:"Delete"},{default:t(()=>[s(o)]),_:1}),s(a,{fx:"bounce",variant:"success",label:"Bookmark"},{default:t(()=>[s(R)]),_:1})])]),i("div",Os,[n[24]||(n[24]=i("h3",null,"Notifications",-1)),i("div",Js,[s(a,{fx:"wobble",variant:"warning",label:"Notifications"},{default:t(()=>[s(d)]),_:1}),s(a,{fx:"pulse-wobble",variant:"danger",label:"Important notification"},{default:t(()=>[s(d)]),_:1})])]),i("div",Xs,[n[25]||(n[25]=i("h3",null,"Social",-1)),i("div",Ks,[s(a,{fx:"pulse",variant:"ghost",label:"Like"},{default:t(()=>[s(T)]),_:1}),s(a,{fx:"bounce",variant:"ghost",label:"Comment"},{default:t(()=>[s(L)]),_:1}),s(a,{fx:"grow",variant:"ghost",label:"Send"},{default:t(()=>[s(M)]),_:1})])])]),i("section",Qs,[n[27]||(n[27]=i("div",{class:"mbe4"},[i("h2",null,"Disabling Effects"),i("p",{class:"example-description"},[h(" This button has "),i("code",null,'fx="pulse"'),h(" but "),i("code",null,':fx-disabled="true"'),h(" prevents the animation from playing while keeping the button clickable ")])],-1)),i("div",Ys,[s(a,{fx:"pulse","fx-disabled":!0,variant:"primary",label:"No animation"},{default:t(()=>[s(l)]),_:1})])])])}const si=$(gs,[["render",Zs]]),qi=JSON.parse('{"title":"IconButtonFx","description":"","frontmatter":{},"headers":[],"relativePath":"components/icon-button-fx.md","filePath":"components/icon-button-fx.md"}'),ii={name:"components/icon-button-fx.md"},vi=Object.assign(ii,{setup(k){return(n,e)=>(x(),B("div",null,[e[0]||(e[0]=i("h1",{id:"iconbuttonfx",tabindex:"-1"},[h("IconButtonFx "),i("a",{class:"header-anchor",href:"#iconbuttonfx","aria-label":'Permalink to "IconButtonFx"'},"​")],-1)),s(z),e[1]||(e[1]=i("p",null,"An icon button component with customizable animation effects that trigger on hover, click, or mount. IconButtonFx extends the base IconButton component with a rich set of visual effects to create engaging, interactive UI elements.",-1)),e[2]||(e[2]=i("div",{class:"info custom-block"},[i("p",{class:"custom-block-title"},"Opt-in Component"),i("p",null,"IconButtonFx adds a few hundred lines of CSS for animation effects. It's ideal for marketing sites, landing pages, or when visual polish is a priority.")],-1)),s(si),e[3]||(e[3]=v("",55))]))}});export{qi as __pageData,vi as default};
