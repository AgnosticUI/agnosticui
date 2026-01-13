var T=Object.defineProperty;var J=(r,a,e)=>a in r?T(r,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[a]=e;var E=(r,a,e)=>J(r,typeof a!="symbol"?a+"":a,e);import{A as U}from"./chunks/AlphaWarning.yC7ZufpQ.js";import{i as D,z as v,a as O,x as $}from"./chunks/Button.Bujdzq23.js";import{t as A}from"./chunks/IconButton.Dx1PqinQ.js";import{r as X}from"./chunks/motion.styles.VEVGekNg.js";import{d as q,p as Z,c as C,o as w,r as Q,K,_ as Y,C as h,j as n,a as o,G as s,w as t,ae as I,k as B}from"./chunks/framework.NAAYCHZu.js";import{B as ss}from"./chunks/VueAlert.vue_vue_type_script_setup_true_lang-BSEoqQWL.DpRasWz0.js";import{S as ns}from"./chunks/settings.BZ9RHgDM.js";import{c as L}from"./chunks/createLucideIcon.B61Wqv9x.js";import{P as is}from"./chunks/plus.BS1frTSk.js";import{C as as}from"./chunks/check.CFLGSMlm.js";import{S as ts}from"./chunks/star.kh2rt2dx.js";import{S as es}from"./chunks/send.CyjvY3bo.js";import{M as ls}from"./chunks/message-circle.BqeLtm1M.js";import{B as os,S as rs}from"./chunks/square-pen.ldxLpMHA.js";import{S as hs}from"./chunks/search.D3iDyvB5.js";import{H as ps}from"./chunks/house.B1uosEEU.js";import{M as ks}from"./chunks/menu.SiK0ns-Z.js";import{T as ds}from"./chunks/trash-2.nw5yXCyH.js";import{B as cs}from"./chunks/bell.DIj7aJxI.js";import{D as us}from"./chunks/download.CKtIbNgn.js";import{H as Fs}from"./chunks/heart.Btp9iEMW.js";import{F as gs}from"./chunks/FrameworkExample.Vj5DwYx5.js";import"./chunks/Alert.D54RCgmw.js";import"./chunks/Icon.odq14qpJ.js";import"./chunks/CloseButton.yKDcmacg.js";/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xs=L("minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fs=L("thumbs-up",[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",key:"emmmcr"}]]);var ys=Object.defineProperty,b=(r,a,e,F)=>{for(var k=void 0,g=r.length-1,l;g>=0;g--)(l=r[g])&&(k=l(a,e,k)||k);return k&&ys(a,e,k),k};const S=class extends A{constructor(){super(),this.fxSpeed="md",this.fxEase="ease",this.fxDisabled=!1}firstUpdated(a){var e;(e=super.firstUpdated)==null||e.call(this,a),this._applyFxClasses(),this._applyFxCustomProperties()}updated(a){super.updated(a),(a.has("fx")||a.has("fxDisabled"))&&this._applyFxClasses(),(a.has("fxSpeed")||a.has("fxEase"))&&this._applyFxCustomProperties()}_applyFxClasses(){var e;const a=(e=this.shadowRoot)==null?void 0:e.querySelector("button");a&&(a.classList.forEach(F=>{F.startsWith("ag-fx-")&&a.classList.remove(F)}),this.fx&&a.classList.add(`ag-fx-${this.fx}`),this.fxDisabled&&a.classList.add("ag-fx-disabled"))}_applyFxCustomProperties(){var e;const a=(e=this.shadowRoot)==null?void 0:e.querySelector("button");a instanceof HTMLElement&&(a.style.setProperty("--ag-fx-duration",`var(--ag-fx-duration-${this.fxSpeed})`),a.style.setProperty("--ag-fx-ease",`var(--ag-fx-ease-${this.fxEase})`))}};S.styles=[A.styles,X,D`
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
    `];let y=S;b([v({type:String})],y.prototype,"fx");b([v({type:String,attribute:"fx-speed"})],y.prototype,"fxSpeed");b([v({type:String,attribute:"fx-ease"})],y.prototype,"fxEase");b([v({type:Boolean,reflect:!0,attribute:"fx-disabled"})],y.prototype,"fxDisabled");customElements.get("ag-icon-button-fx")||customElements.define("ag-icon-button-fx",y);const vs=[".disabled",".pressed",".loading",".label",".icon",".unicode",".fx",".fxDisabled","type","variant","size","fx-speed","fx-ease"],bs=q({__name:"VueIconButtonFx",props:{label:{default:""},icon:{default:""},unicode:{default:""},size:{default:"md"},variant:{default:"ghost"},type:{default:"button"},disabled:{type:Boolean,default:!1},pressed:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},fx:{},fxSpeed:{default:"md"},fxEase:{default:"ease"},fxDisabled:{type:Boolean,default:!1}},emits:["click","icon-button-click","icon-button-activate"],setup(r,{emit:a}){const e=a,F=Z(),k=i=>{e("click",i)},g=i=>{e("icon-button-click",i.detail)},l=i=>{e("icon-button-activate",i.detail)};return(i,p)=>(w(),C("ag-icon-button-fx",K({ref_key:"iconButtonFxRef",ref:F,".disabled":r.disabled,".pressed":r.pressed,".loading":r.loading,".label":r.label,".icon":r.icon,".unicode":r.unicode,".fx":r.fx,".fxDisabled":r.fxDisabled,type:r.type,variant:r.variant,size:r.size,"fx-speed":r.fxSpeed,"fx-ease":r.fxEase,onClick:k,onIconButtonClick:g,onIconButtonActivate:l},i.$attrs),[Q(i.$slots,"default")],48,vs))}}),ms=q({name:"IconButtonFxExamples",components:{VueIconButtonFx:bs,VueAlert:ss,Heart:Fs,Download:us,Bell:cs,Trash2:ds,Menu:ks,Home:ps,Search:hs,Edit:rs,Bookmark:os,ThumbsUp:fs,MessageCircle:ls,Send:es,Star:ts,Check:as,Plus:is,Minus:xs,Settings:ns}}),Bs={class:"examples-container"},Cs={class:"example-section"},ws={class:"effect-group"},Es={class:"stacked-mobile"},Ds={class:"effect-group"},As={class:"stacked-mobile"},qs={class:"effect-group"},Is={class:"stacked-mobile"},Ls={class:"effect-group"},Ss={class:"stacked-mobile"},Vs={class:"effect-group"},Ms={class:"stacked-mobile"},js={class:"effect-group"},Ps={class:"stacked-mobile"},Rs={class:"effect-group"},Ws={class:"stacked-mobile"},_s={class:"effect-group"},Hs={class:"stacked-mobile"},zs={class:"effect-group"},Ns={class:"stacked-mobile"},Gs={class:"example-section"},Ts={class:"stacked-mobile"},Js={class:"example-section"},Us={class:"mbe4"},Os={class:"stacked",style:{width:"40%"}},$s={class:"example-section"},Xs={class:"stacked-mobile"},Zs={class:"example-section"},Qs={class:"use-case-group"},Ks={class:"stacked-mobile"},Ys={class:"use-case-group"},sn={class:"stacked-mobile"},nn={class:"use-case-group"},an={class:"stacked-mobile"},tn={class:"use-case-group"},en={class:"stacked-mobile"},ln={class:"example-section"},on={class:"stacked-mobile"};function rn(r,a,e,F,k,g){const l=h("Heart"),i=h("VueIconButtonFx"),p=h("Check"),u=h("Star"),d=h("Trash2"),M=h("Settings"),m=h("Download"),c=h("Bell"),x=h("Plus"),f=h("Minus"),j=h("VueAlert"),P=h("Menu"),R=h("Home"),W=h("Search"),_=h("Edit"),H=h("Bookmark"),z=h("ThumbsUp"),N=h("MessageCircle"),G=h("Send");return w(),C("div",Bs,[n("section",Cs,[a[9]||(a[9]=n("div",{class:"mbe4"},[n("h2",null,"Basic Effects"),n("p",{class:"example-description"},"All available effects")],-1)),n("div",ws,[a[0]||(a[0]=n("h3",null,[o("Pulse "),n("span",{class:"effect-type"},"Scale grow (hover)")],-1)),n("div",Es,[s(i,{fx:"pulse",variant:"primary",label:"Pulse Primary"},{default:t(()=>[s(l)]),_:1}),s(i,{fx:"pulse",variant:"success",label:"Pulse Success"},{default:t(()=>[s(p)]),_:1}),s(i,{fx:"pulse",variant:"warning",label:"Pulse Warning"},{default:t(()=>[s(u)]),_:1}),s(i,{fx:"pulse",variant:"danger",label:"Pulse Danger"},{default:t(()=>[s(d)]),_:1}),s(i,{fx:"pulse",variant:"ghost",label:"Pulse Ghost"},{default:t(()=>[s(M)]),_:1}),s(i,{fx:"pulse",variant:"primary",label:"Pulse Large"},{default:t(()=>[s(l)]),_:1})])]),n("div",Ds,[a[1]||(a[1]=n("h3",null,[o("Bounce "),n("span",{class:"effect-type"},"Vertical pop (hover)")],-1)),n("div",As,[s(i,{fx:"bounce",variant:"primary",label:"Bounce Primary"},{default:t(()=>[s(m)]),_:1}),s(i,{fx:"bounce",variant:"success",label:"Bounce Success"},{default:t(()=>[s(p)]),_:1}),s(i,{fx:"bounce",variant:"warning",label:"Bounce Warning"},{default:t(()=>[s(c)]),_:1}),s(i,{fx:"bounce",variant:"danger",label:"Bounce Danger"},{default:t(()=>[s(d)]),_:1}),s(i,{fx:"bounce",variant:"ghost",label:"Bounce Ghost"},{default:t(()=>[s(m)]),_:1}),s(i,{fx:"bounce",variant:"success",label:"Bounce Large"},{default:t(()=>[s(m)]),_:1})])]),n("div",qs,[a[2]||(a[2]=n("h3",null,[o("Wobble "),n("span",{class:"effect-type"},"Rotate wobble (hover)")],-1)),n("div",Is,[s(i,{fx:"wobble",variant:"primary",label:"Wobble Primary"},{default:t(()=>[s(c)]),_:1}),s(i,{fx:"wobble",variant:"success",label:"Wobble Success"},{default:t(()=>[s(p)]),_:1}),s(i,{fx:"wobble",variant:"warning",label:"Wobble Warning"},{default:t(()=>[s(c)]),_:1}),s(i,{fx:"wobble",variant:"danger",label:"Wobble Danger"},{default:t(()=>[s(c)]),_:1}),s(i,{fx:"wobble",variant:"ghost",label:"Wobble Ghost"},{default:t(()=>[s(c)]),_:1}),s(i,{fx:"wobble",variant:"warning",label:"Wobble Large"},{default:t(()=>[s(c)]),_:1})])]),n("div",Ls,[a[3]||(a[3]=n("h3",null,[o("Shake "),n("span",{class:"effect-type"},"Horizontal shake (hover)")],-1)),n("div",Ss,[s(i,{fx:"shake",variant:"primary",label:"Shake Primary"},{default:t(()=>[s(d)]),_:1}),s(i,{fx:"shake",variant:"success",label:"Shake Success"},{default:t(()=>[s(d)]),_:1}),s(i,{fx:"shake",variant:"warning",label:"Shake Warning"},{default:t(()=>[s(d)]),_:1}),s(i,{fx:"shake",variant:"danger",label:"Shake Danger"},{default:t(()=>[s(d)]),_:1}),s(i,{fx:"shake",variant:"ghost",label:"Shake Ghost"},{default:t(()=>[s(d)]),_:1}),s(i,{fx:"shake",variant:"danger",label:"Shake Large"},{default:t(()=>[s(d)]),_:1})])]),n("div",Vs,[a[4]||(a[4]=n("h3",null,[o("Pulse-Wobble "),n("span",{class:"effect-type"},"Sequential animation (hover)")],-1)),n("div",Ms,[s(i,{fx:"pulse-wobble","fx-speed":"xl",variant:"primary",label:"Pulse-Wobble Primary"},{default:t(()=>[s(l)]),_:1}),s(i,{fx:"pulse-wobble","fx-speed":"xl",variant:"success",label:"Pulse-Wobble Success"},{default:t(()=>[s(u)]),_:1}),s(i,{fx:"pulse-wobble","fx-speed":"xl",variant:"warning",label:"Pulse-Wobble Warning"},{default:t(()=>[s(c)]),_:1}),s(i,{fx:"pulse-wobble","fx-speed":"xl",variant:"danger",label:"Pulse-Wobble Danger"},{default:t(()=>[s(l)]),_:1}),s(i,{fx:"pulse-wobble","fx-speed":"xl",variant:"ghost",label:"Pulse-Wobble Ghost"},{default:t(()=>[s(l)]),_:1}),s(i,{fx:"pulse-wobble","fx-speed":"xl",variant:"primary",label:"Pulse-Wobble Large"},{default:t(()=>[s(l)]),_:1})])]),n("div",js,[a[5]||(a[5]=n("h3",null,[o("Jelly "),n("span",{class:"effect-type"},"Squash/stretch (hover)")],-1)),n("div",Ps,[s(i,{fx:"jelly",variant:"primary",label:"Jelly Primary"},{default:t(()=>[s(u)]),_:1}),s(i,{fx:"jelly",variant:"success",label:"Jelly Success"},{default:t(()=>[s(p)]),_:1}),s(i,{fx:"jelly",variant:"warning",label:"Jelly Warning"},{default:t(()=>[s(u)]),_:1}),s(i,{fx:"jelly",variant:"danger",label:"Jelly Danger"},{default:t(()=>[s(u)]),_:1}),s(i,{fx:"jelly",variant:"ghost",label:"Jelly Ghost"},{default:t(()=>[s(u)]),_:1}),s(i,{fx:"jelly",variant:"warning",label:"Jelly Large"},{default:t(()=>[s(u)]),_:1})])]),n("div",Rs,[a[6]||(a[6]=n("h3",null,[o("Press-Pop "),n("span",{class:"effect-type"},"Quick press (click)")],-1)),n("div",Ws,[s(i,{fx:"press-pop",variant:"primary",label:"Press-Pop Primary"},{default:t(()=>[s(p)]),_:1}),s(i,{fx:"press-pop",variant:"success",label:"Press-Pop Success"},{default:t(()=>[s(p)]),_:1}),s(i,{fx:"press-pop",variant:"warning",label:"Press-Pop Warning"},{default:t(()=>[s(p)]),_:1}),s(i,{fx:"press-pop",variant:"danger",label:"Press-Pop Danger"},{default:t(()=>[s(p)]),_:1}),s(i,{fx:"press-pop",variant:"ghost",label:"Press-Pop Ghost"},{default:t(()=>[s(p)]),_:1}),s(i,{fx:"press-pop",variant:"success",label:"Press-Pop Large"},{default:t(()=>[s(p)]),_:1})])]),n("div",_s,[a[7]||(a[7]=n("h3",null,[o("Grow "),n("span",{class:"effect-type"},"Scale up (hover)")],-1)),n("div",Hs,[s(i,{fx:"grow",variant:"primary",label:"Grow Primary"},{default:t(()=>[s(x)]),_:1}),s(i,{fx:"grow",variant:"success",label:"Grow Success"},{default:t(()=>[s(x)]),_:1}),s(i,{fx:"grow",variant:"warning",label:"Grow Warning"},{default:t(()=>[s(x)]),_:1}),s(i,{fx:"grow",variant:"danger",label:"Grow Danger"},{default:t(()=>[s(x)]),_:1}),s(i,{fx:"grow",variant:"ghost",label:"Grow Ghost"},{default:t(()=>[s(x)]),_:1}),s(i,{fx:"grow",variant:"primary",label:"Grow Large"},{default:t(()=>[s(x)]),_:1})])]),n("div",zs,[a[8]||(a[8]=n("h3",null,[o("Shrink "),n("span",{class:"effect-type"},"Scale down (hover)")],-1)),n("div",Ns,[s(i,{fx:"shrink",variant:"primary",label:"Shrink Primary"},{default:t(()=>[s(f)]),_:1}),s(i,{fx:"shrink",variant:"success",label:"Shrink Success"},{default:t(()=>[s(f)]),_:1}),s(i,{fx:"shrink",variant:"warning",label:"Shrink Warning"},{default:t(()=>[s(f)]),_:1}),s(i,{fx:"shrink",variant:"danger",label:"Shrink Danger"},{default:t(()=>[s(f)]),_:1}),s(i,{fx:"shrink",variant:"ghost",label:"Shrink Ghost"},{default:t(()=>[s(f)]),_:1}),s(i,{fx:"shrink",variant:"danger",label:"Shrink Large"},{default:t(()=>[s(f)]),_:1})])])]),n("section",Gs,[a[10]||(a[10]=n("div",{class:"mbe4"},[n("h2",null,"Speed Variations"),n("p",{class:"example-description"},[o("Control animation speed with the "),n("code",null,"fx-speed"),o(" prop")])],-1)),n("div",Ts,[s(i,{fx:"pulse","fx-speed":"xs",variant:"primary",label:"Extra fast"},{default:t(()=>[s(l)]),_:1}),s(i,{fx:"pulse","fx-speed":"sm",variant:"primary",label:"Fast"},{default:t(()=>[s(l)]),_:1}),s(i,{fx:"pulse","fx-speed":"md",variant:"primary",label:"Medium"},{default:t(()=>[s(l)]),_:1}),s(i,{fx:"pulse","fx-speed":"lg",variant:"primary",label:"Slow"},{default:t(()=>[s(l)]),_:1}),s(i,{fx:"pulse","fx-speed":"xl",variant:"primary",label:"Extra slow"},{default:t(()=>[s(l)]),_:1})])]),n("section",Js,[n("div",Us,[a[12]||(a[12]=n("h2",null,"Easing Functions",-1)),a[13]||(a[13]=n("p",{class:"mbe2"},"Different easing functions create different animation feels",-1)),s(j,{"bordered-left":!0},{default:t(()=>[...a[11]||(a[11]=[o(" Examples use ",-1),n("code",null,'fx-speed="xl"',-1),o(" to make easing differences more visible. For production, prefer ",-1),n("code",null,'"sm"',-1),o(" or ",-1),n("code",null,'"md"',-1),o(" speeds. ",-1)])]),_:1})]),n("div",Os,[a[14]||(a[14]=n("span",null,[o("Ease "),n("code",null,"(ease)")],-1)),s(i,{fx:"bounce","fx-ease":"ease","fx-speed":"xl",variant:"primary",label:"Ease"},{default:t(()=>[s(l)]),_:1}),a[15]||(a[15]=n("span",null,[o("Ease In "),n("code",null,"(ease-in)")],-1)),s(i,{fx:"bounce","fx-ease":"ease-in","fx-speed":"xl",variant:"primary",label:"Ease-In"},{default:t(()=>[s(l)]),_:1}),a[16]||(a[16]=n("span",null,[o("Ease Out "),n("code",null,"(ease-out)")],-1)),s(i,{fx:"bounce","fx-ease":"ease-out","fx-speed":"xl",variant:"primary",label:"Ease-Out"},{default:t(()=>[s(l)]),_:1}),a[17]||(a[17]=n("span",null,[o("Bounce"),n("code",null,"(bounce)")],-1)),s(i,{fx:"bounce","fx-ease":"bounce","fx-speed":"xl",variant:"primary",label:"Bounce"},{default:t(()=>[s(l)]),_:1}),a[18]||(a[18]=n("span",null,[o("Spring Small "),n("code",null,"(spring-sm)")],-1)),s(i,{fx:"bounce","fx-ease":"spring-sm","fx-speed":"xl",variant:"primary",label:"Spring SM"},{default:t(()=>[s(l)]),_:1}),a[19]||(a[19]=n("span",null,[o("Spring Medium "),n("code",null,"(spring-md)")],-1)),s(i,{fx:"bounce","fx-ease":"spring-md","fx-speed":"xl",variant:"primary",label:"Spring MD"},{default:t(()=>[s(l)]),_:1}),a[20]||(a[20]=n("span",null,[o("Spring Large "),n("code",null,"(spring-lg)")],-1)),s(i,{fx:"bounce","fx-ease":"spring-lg","fx-speed":"xl",variant:"primary",label:"Spring LG"},{default:t(()=>[s(l)]),_:1})])]),n("section",$s,[a[21]||(a[21]=I('<div class="mbe4"><h2>Size Variations</h2><p class="example-description">For <code>xs</code> and <code>sm</code> sizes, use an icon size <code>20px</code> or less, or, allow the icon to scale with: <code>width: 100%</code> and <code>height: 100%</code>.</p></div>',1)),n("div",Xs,[s(i,{fx:"pulse",size:"xs",variant:"primary",bordered:!0,label:"Extra small"},{default:t(()=>[s(l,{class:"full-w-h"})]),_:1}),s(i,{fx:"pulse",size:"sm",variant:"primary",label:"Small"},{default:t(()=>[s(l,{class:"full-w-h"})]),_:1}),s(i,{fx:"pulse",size:"md",variant:"primary",label:"Medium"},{default:t(()=>[s(l,{class:"full-w-h"})]),_:1}),s(i,{fx:"pulse",size:"lg",variant:"primary",label:"Large"},{default:t(()=>[s(l,{class:"full-w-h"})]),_:1}),s(i,{fx:"pulse",size:"xl",variant:"primary",label:"Extra large"},{default:t(()=>[s(l,{class:"full-w-h"})]),_:1})])]),n("section",Zs,[a[26]||(a[26]=n("div",{class:"mbe4"},[n("h2",null,"Common Use Cases")],-1)),n("div",Qs,[a[22]||(a[22]=n("h3",null,"Navigation",-1)),n("div",Ks,[s(i,{fx:"grow",variant:"ghost",label:"Menu"},{default:t(()=>[s(P)]),_:1}),s(i,{fx:"grow",variant:"ghost",label:"Home"},{default:t(()=>[s(R)]),_:1}),s(i,{fx:"grow",variant:"ghost",label:"Search"},{default:t(()=>[s(W)]),_:1})])]),n("div",Ys,[a[23]||(a[23]=n("h3",null,"Actions",-1)),n("div",sn,[s(i,{fx:"pulse",variant:"primary",label:"Edit"},{default:t(()=>[s(_)]),_:1}),s(i,{fx:"shake",variant:"danger",label:"Delete"},{default:t(()=>[s(d)]),_:1}),s(i,{fx:"bounce",variant:"success",label:"Bookmark"},{default:t(()=>[s(H)]),_:1})])]),n("div",nn,[a[24]||(a[24]=n("h3",null,"Notifications",-1)),n("div",an,[s(i,{fx:"wobble",variant:"warning",label:"Notifications"},{default:t(()=>[s(c)]),_:1}),s(i,{fx:"pulse-wobble",variant:"danger",label:"Important notification"},{default:t(()=>[s(c)]),_:1})])]),n("div",tn,[a[25]||(a[25]=n("h3",null,"Social",-1)),n("div",en,[s(i,{fx:"pulse",variant:"ghost",label:"Like"},{default:t(()=>[s(z)]),_:1}),s(i,{fx:"bounce",variant:"ghost",label:"Comment"},{default:t(()=>[s(N)]),_:1}),s(i,{fx:"grow",variant:"ghost",label:"Send"},{default:t(()=>[s(G)]),_:1})])])]),n("section",ln,[a[27]||(a[27]=n("div",{class:"mbe4"},[n("h2",null,"Disabling Effects"),n("p",{class:"example-description"},[o(" This button has "),n("code",null,'fx="pulse"'),o(" but "),n("code",null,':fx-disabled="true"'),o(" prevents the animation from playing while keeping the button clickable ")])],-1)),n("div",on,[s(i,{fx:"pulse","fx-disabled":!0,variant:"primary",label:"No animation"},{default:t(()=>[s(l)]),_:1})])])])}const hn=Y(ms,[["render",rn]]);class V extends O{createRenderRoot(){return this}render(){return $`
      <div class="examples-container">
        <!-- Basic Effects -->
        <section class="example-section">
          <div class="mbe4">
            <h2>Basic Effects</h2>
            <p class="example-description">All available effects</p>
          </div>

          <!-- Pulse Effect -->
          <div class="effect-group">
            <h3>Pulse <span class="effect-type">Scale grow (hover)</span></h3>
            <div class="stacked-mobile">
              <ag-icon-button-fx fx="pulse" variant="primary" label="Pulse Primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="pulse" variant="success" label="Pulse Success">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="pulse" variant="warning" label="Pulse Warning">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="pulse" variant="danger" label="Pulse Danger">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M3 6h18"></path>
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="pulse" variant="ghost" label="Pulse Ghost">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M12 1v6m0 6v6M5.6 5.6l4.2 4.2m4.2 4.2l4.2 4.2M1 12h6m6 0h6M5.6 18.4l4.2-4.2m4.2-4.2l4.2-4.2"></path>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="pulse" variant="primary" label="Pulse Large">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </ag-icon-button-fx>
            </div>
          </div>

          <!-- Bounce Effect -->
          <div class="effect-group">
            <h3>Bounce <span class="effect-type">Vertical pop (hover)</span></h3>
            <div class="stacked-mobile">
              <ag-icon-button-fx fx="bounce" variant="primary" label="Bounce Primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="bounce" variant="success" label="Bounce Success">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="bounce" variant="warning" label="Bounce Warning">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="bounce" variant="danger" label="Bounce Danger">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M3 6h18"></path>
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="bounce" variant="ghost" label="Bounce Ghost">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="bounce" variant="success" label="Bounce Large">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </ag-icon-button-fx>
            </div>
          </div>

          <!-- Wobble Effect -->
          <div class="effect-group">
            <h3>Wobble <span class="effect-type">Rotate wobble (hover)</span></h3>
            <div class="stacked-mobile">
              <ag-icon-button-fx fx="wobble" variant="primary" label="Wobble Primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="wobble" variant="success" label="Wobble Success">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="wobble" variant="warning" label="Wobble Warning">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="wobble" variant="danger" label="Wobble Danger">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="wobble" variant="ghost" label="Wobble Ghost">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="wobble" variant="warning" label="Wobble Large">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                </svg>
              </ag-icon-button-fx>
            </div>
          </div>

          <!-- Shake Effect -->
          <div class="effect-group">
            <h3>Shake <span class="effect-type">Horizontal shake (hover)</span></h3>
            <div class="stacked-mobile">
              <ag-icon-button-fx fx="shake" variant="primary" label="Shake Primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M3 6h18"></path>
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="shake" variant="success" label="Shake Success">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M3 6h18"></path>
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="shake" variant="warning" label="Shake Warning">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M3 6h18"></path>
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="shake" variant="danger" label="Shake Danger">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M3 6h18"></path>
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="shake" variant="ghost" label="Shake Ghost">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M3 6h18"></path>
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="shake" variant="danger" label="Shake Large">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M3 6h18"></path>
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                </svg>
              </ag-icon-button-fx>
            </div>
          </div>

          <!-- Pulse-Wobble Effect -->
          <div class="effect-group">
            <h3>Pulse-Wobble <span class="effect-type">Sequential animation (hover)</span></h3>
            <div class="stacked-mobile">
              <ag-icon-button-fx fx="pulse-wobble" fx-speed="xl" variant="primary" label="Pulse-Wobble Primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="pulse-wobble" fx-speed="xl" variant="success" label="Pulse-Wobble Success">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="pulse-wobble" fx-speed="xl" variant="warning" label="Pulse-Wobble Warning">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="pulse-wobble" fx-speed="xl" variant="danger" label="Pulse-Wobble Danger">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="pulse-wobble" fx-speed="xl" variant="ghost" label="Pulse-Wobble Ghost">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="pulse-wobble" fx-speed="xl" variant="primary" label="Pulse-Wobble Large">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </ag-icon-button-fx>
            </div>
          </div>

          <!-- Jelly Effect -->
          <div class="effect-group">
            <h3>Jelly <span class="effect-type">Squash/stretch (hover)</span></h3>
            <div class="stacked-mobile">
              <ag-icon-button-fx fx="jelly" variant="primary" label="Jelly Primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="jelly" variant="success" label="Jelly Success">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="jelly" variant="warning" label="Jelly Warning">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="jelly" variant="danger" label="Jelly Danger">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="jelly" variant="ghost" label="Jelly Ghost">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="jelly" variant="warning" label="Jelly Large">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </ag-icon-button-fx>
            </div>
          </div>

          <!-- Press-Pop Effect -->
          <div class="effect-group">
            <h3>Press-Pop <span class="effect-type">Quick press (click)</span></h3>
            <div class="stacked-mobile">
              <ag-icon-button-fx fx="press-pop" variant="primary" label="Press-Pop Primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="press-pop" variant="success" label="Press-Pop Success">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="press-pop" variant="warning" label="Press-Pop Warning">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="press-pop" variant="danger" label="Press-Pop Danger">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="press-pop" variant="ghost" label="Press-Pop Ghost">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="press-pop" variant="success" label="Press-Pop Large">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </ag-icon-button-fx>
            </div>
          </div>

          <!-- Grow Effect -->
          <div class="effect-group">
            <h3>Grow <span class="effect-type">Scale up (hover)</span></h3>
            <div class="stacked-mobile">
              <ag-icon-button-fx fx="grow" variant="primary" label="Grow Primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="grow" variant="success" label="Grow Success">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="grow" variant="warning" label="Grow Warning">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="grow" variant="danger" label="Grow Danger">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="grow" variant="ghost" label="Grow Ghost">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="grow" variant="primary" label="Grow Large">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </ag-icon-button-fx>
            </div>
          </div>

          <!-- Shrink Effect -->
          <div class="effect-group">
            <h3>Shrink <span class="effect-type">Scale down (hover)</span></h3>
            <div class="stacked-mobile">
              <ag-icon-button-fx fx="shrink" variant="primary" label="Shrink Primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="shrink" variant="success" label="Shrink Success">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="shrink" variant="warning" label="Shrink Warning">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="shrink" variant="danger" label="Shrink Danger">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="shrink" variant="ghost" label="Shrink Ghost">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="shrink" variant="danger" label="Shrink Large">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </ag-icon-button-fx>
            </div>
          </div>
        </section>

        <!-- Speed Variations -->
        <section class="example-section">
          <div class="mbe4">
            <h2>Speed Variations</h2>
            <p class="example-description">Control animation speed with the <code>fx-speed</code> attribute</p>
          </div>
          <div class="stacked-mobile">
            <ag-icon-button-fx fx="pulse" fx-speed="xs" variant="primary" label="Extra fast">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </ag-icon-button-fx>
            <ag-icon-button-fx fx="pulse" fx-speed="sm" variant="primary" label="Fast">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </ag-icon-button-fx>
            <ag-icon-button-fx fx="pulse" fx-speed="md" variant="primary" label="Medium">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </ag-icon-button-fx>
            <ag-icon-button-fx fx="pulse" fx-speed="lg" variant="primary" label="Slow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </ag-icon-button-fx>
            <ag-icon-button-fx fx="pulse" fx-speed="xl" variant="primary" label="Extra slow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </ag-icon-button-fx>
          </div>
        </section>

        <!-- Easing Functions -->
        <section class="example-section">
          <div class="mbe4">
            <h2>Easing Functions</h2>
            <p class="mbe2">Different easing functions create different animation feels</p>
            <ag-alert bordered-left>
              Examples use <code>fx-speed="xl"</code> to make easing differences more visible.
              For production, prefer <code>"sm"</code> or <code>"md"</code> speeds.
            </ag-alert>
          </div>
          <div class="stacked" style="width: 40%;">
            <span>Ease <code>(ease)</code></span>
            <ag-icon-button-fx fx="bounce" fx-ease="ease" fx-speed="xl" variant="primary" label="Ease">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </ag-icon-button-fx>
            <span>Ease In <code>(ease-in)</code></span>
            <ag-icon-button-fx fx="bounce" fx-ease="ease-in" fx-speed="xl" variant="primary" label="Ease-In">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </ag-icon-button-fx>
            <span>Ease Out <code>(ease-out)</code></span>
            <ag-icon-button-fx fx="bounce" fx-ease="ease-out" fx-speed="xl" variant="primary" label="Ease-Out">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </ag-icon-button-fx>

            <span>Bounce<code>(bounce)</code></span>
            <ag-icon-button-fx fx="bounce" fx-ease="bounce" fx-speed="xl" variant="primary" label="Bounce">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </ag-icon-button-fx>
            <span>Spring Small <code>(spring-sm)</code></span>
            <ag-icon-button-fx fx="bounce" fx-ease="spring-sm" fx-speed="xl" variant="primary" label="Spring SM">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </ag-icon-button-fx>
            <span>Spring Medium <code>(spring-md)</code></span>
            <ag-icon-button-fx fx="bounce" fx-ease="spring-md" fx-speed="xl" variant="primary" label="Spring MD">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </ag-icon-button-fx>
            <span>Spring Large <code>(spring-lg)</code></span>
            <ag-icon-button-fx fx="bounce" fx-ease="spring-lg" fx-speed="xl" variant="primary" label="Spring LG">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </ag-icon-button-fx>
          </div>
        </section>

        <!-- Size Variations -->
        <section class="example-section">
          <div class="mbe4">
            <h2>Size Variations</h2>
            <p class="example-description">For <code>xs</code> and <code>sm</code> sizes, use an icon size <code>20px</code> or less, or, allow the icon to scale with: <code>width: 100%</code> and <code>height: 100%</code>.</p>
          </div>
          <div class="stacked-mobile">
            <ag-icon-button-fx fx="pulse" size="xs" variant="primary" bordered label="Extra small">
              <svg class="full-w-h" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </ag-icon-button-fx>
            <ag-icon-button-fx fx="pulse" size="sm" variant="primary" label="Small">
              <svg class="full-w-h" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </ag-icon-button-fx>
            <ag-icon-button-fx fx="pulse" size="md" variant="primary" label="Medium">
              <svg class="full-w-h" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </ag-icon-button-fx>
            <ag-icon-button-fx fx="pulse" size="lg" variant="primary" label="Large">
              <svg class="full-w-h" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </ag-icon-button-fx>
            <ag-icon-button-fx fx="pulse" size="xl" variant="primary" label="Extra large">
              <svg class="full-w-h" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </ag-icon-button-fx>
          </div>
        </section>

        <!-- Common Use Cases -->
        <section class="example-section">
          <div class="mbe4">
            <h2>Common Use Cases</h2>
          </div>

          <div class="use-case-group">
            <h3>Navigation</h3>
            <div class="stacked-mobile">
              <ag-icon-button-fx fx="grow" variant="ghost" label="Menu">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="grow" variant="ghost" label="Home">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="grow" variant="ghost" label="Search">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
              </ag-icon-button-fx>
            </div>
          </div>

          <div class="use-case-group">
            <h3>Actions</h3>
            <div class="stacked-mobile">
              <ag-icon-button-fx fx="pulse" variant="primary" label="Edit">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="shake" variant="danger" label="Delete">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M3 6h18"></path>
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="bounce" variant="success" label="Bookmark">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
                </svg>
              </ag-icon-button-fx>
            </div>
          </div>

          <div class="use-case-group">
            <h3>Notifications</h3>
            <div class="stacked-mobile">
              <ag-icon-button-fx fx="wobble" variant="warning" label="Notifications">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="pulse-wobble" variant="danger" label="Important notification">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                </svg>
              </ag-icon-button-fx>
            </div>
          </div>

          <div class="use-case-group">
            <h3>Social</h3>
            <div class="stacked-mobile">
              <ag-icon-button-fx fx="pulse" variant="ghost" label="Like">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M7 10v12"></path>
                  <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="bounce" variant="ghost" label="Comment">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="grow" variant="ghost" label="Send">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </ag-icon-button-fx>
            </div>
          </div>
        </section>

        <!-- Disabled Effects -->
        <section class="example-section">
          <div class="mbe4">
            <h2>Disabling Effects</h2>
            <p class="example-description">
              This button has <code>fx="pulse"</code> but <code>fx-disabled="true"</code>
              prevents the animation from playing while keeping the button clickable
            </p>
          </div>
          <div class="stacked-mobile">
            <ag-icon-button-fx fx="pulse" fx-disabled variant="primary" label="No animation">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </ag-icon-button-fx>
          </div>
        </section>
      </div>
    `}}E(V,"styles",D`
    .examples-container {
      width: 100%;
    }
    .example-section {
      margin-block-end: 3rem;
    }
    .effect-group {
      margin-block-end: 2rem;
    }
    .use-case-group {
      margin-block-end: 2rem;
    }
    .example-description {
      color: var(--ag-text-secondary, #666);
      margin-block-end: 1rem;
    }
    .effect-type {
      font-size: 0.875rem;
      color: var(--ag-text-secondary, #666);
      font-weight: normal;
    }
    .full-w-h {
      width: 100%;
      height: 100%;
    }
  `);customElements.define("icon-button-fx-lit-examples",V);const pn=`
<template>
  <div class="examples-container">
    <!-- Basic Effects -->
    <section class="example-section">
      <div class="mbe4">
        <h2>Basic Effects</h2>
        <p class="example-description">All available effects</p>
      </div>

      <!-- Pulse Effect -->
      <div class="effect-group">
        <h3>Pulse <span class="effect-type">Scale grow (hover)</span></h3>
        <div class="stacked-mobile">
          <VueIconButtonFx
            fx="pulse"
            variant="primary"
            label="Pulse Primary"
          >
            <Heart />
          </VueIconButtonFx>
          <VueIconButtonFx
            fx="pulse"
            variant="success"
            label="Pulse Success"
          >
            <Check />
          </VueIconButtonFx>
          <VueIconButtonFx
            fx="pulse"
            variant="warning"
            label="Pulse Warning"
          >
            <Star />
          </VueIconButtonFx>
          <VueIconButtonFx
            fx="pulse"
            variant="danger"
            label="Pulse Danger"
          >
            <Trash2 />
          </VueIconButtonFx>
          <VueIconButtonFx
            fx="pulse"
            variant="ghost"
            label="Pulse Ghost"
          >
            <Settings />
          </VueIconButtonFx>
          <VueIconButtonFx
            fx="pulse"
            variant="primary"
            label="Pulse Large"
          >
            <Heart />
          </VueIconButtonFx>
        </div>
      </div>

      <!-- Bounce Effect -->
      <div class="effect-group">
        <h3>Bounce <span class="effect-type">Vertical pop (hover)</span></h3>
        <div class="stacked-mobile">
          <VueIconButtonFx
            fx="bounce"
            variant="primary"
            label="Bounce Primary"
          >
            <Download />
          </VueIconButtonFx>
          <VueIconButtonFx
            fx="bounce"
            variant="success"
            label="Bounce Success"
          >
            <Check />
          </VueIconButtonFx>
          <VueIconButtonFx
            fx="bounce"
            variant="warning"
            label="Bounce Warning"
          >
            <Bell />
          </VueIconButtonFx>
          <VueIconButtonFx
            fx="bounce"
            variant="danger"
            label="Bounce Danger"
          >
            <Trash2 />
          </VueIconButtonFx>
          <VueIconButtonFx
            fx="bounce"
            variant="ghost"
            label="Bounce Ghost"
          >
            <Download />
          </VueIconButtonFx>
          <VueIconButtonFx
            fx="bounce"
            variant="success"
            label="Bounce Large"
          >
            <Download />
          </VueIconButtonFx>
        </div>
      </div>

      <!-- Wobble Effect -->
      <div class="effect-group">
        <h3>Wobble <span class="effect-type">Rotate wobble (hover)</span></h3>
        <div class="stacked-mobile">
          <VueIconButtonFx
            fx="wobble"
            variant="primary"
            label="Wobble Primary"
          >
            <Bell />
          </VueIconButtonFx>
          <VueIconButtonFx
            fx="wobble"
            variant="success"
            label="Wobble Success"
          >
            <Check />
          </VueIconButtonFx>
          <VueIconButtonFx
            fx="wobble"
            variant="warning"
            label="Wobble Warning"
          >
            <Bell />
          </VueIconButtonFx>
          <VueIconButtonFx
            fx="wobble"
            variant="danger"
            label="Wobble Danger"
          >
            <Bell />
          </VueIconButtonFx>
          <VueIconButtonFx
            fx="wobble"
            variant="ghost"
            label="Wobble Ghost"
          >
            <Bell />
          </VueIconButtonFx>
          <VueIconButtonFx
            fx="wobble"
            variant="warning"
            label="Wobble Large"
          >
            <Bell />
          </VueIconButtonFx>
        </div>
      </div>

      <!-- Shake Effect -->
      <div class="effect-group">
        <h3>Shake <span class="effect-type">Horizontal shake (hover)</span></h3>
        <div class="stacked-mobile">
          <VueIconButtonFx
            fx="shake"
            variant="primary"
            label="Shake Primary"
          >
            <Trash2 />
          </VueIconButtonFx>
          <VueIconButtonFx
            fx="shake"
            variant="success"
            label="Shake Success"
          >
            <Trash2 />
          </VueIconButtonFx>
          <VueIconButtonFx
            fx="shake"
            variant="warning"
            label="Shake Warning"
          >
            <Trash2 />
          </VueIconButtonFx>
          <VueIconButtonFx
            fx="shake"
            variant="danger"
            label="Shake Danger"
          >
            <Trash2 />
          </VueIconButtonFx>
          <VueIconButtonFx
            fx="shake"
            variant="ghost"
            label="Shake Ghost"
          >
            <Trash2 />
          </VueIconButtonFx>
          <VueIconButtonFx
            fx="shake"
            variant="danger"
            label="Shake Large"
          >
            <Trash2 />
          </VueIconButtonFx>
        </div>
      </div>

      <!-- Pulse-Wobble Effect -->
      <div class="effect-group">
        <h3>Pulse-Wobble <span class="effect-type">Sequential animation (hover)</span></h3>
        <div class="stacked-mobile">
          <VueIconButtonFx
            fx="pulse-wobble"
            fx-speed="xl"
            variant="primary"
            label="Pulse-Wobble Primary"
          >
            <Heart />
          </VueIconButtonFx>
          <VueIconButtonFx
            fx="pulse-wobble"
            fx-speed="xl"
            variant="success"
            label="Pulse-Wobble Success"
          >
            <Star />
          </VueIconButtonFx>
          <VueIconButtonFx
            fx="pulse-wobble"
            fx-speed="xl"
            variant="warning"
            label="Pulse-Wobble Warning"
          >
            <Bell />
          </VueIconButtonFx>
          <VueIconButtonFx
            fx="pulse-wobble"
            fx-speed="xl"
            variant="danger"
            label="Pulse-Wobble Danger"
          >
            <Heart />
          </VueIconButtonFx>
          <VueIconButtonFx
            fx="pulse-wobble"
            fx-speed="xl"
            variant="ghost"
            label="Pulse-Wobble Ghost"
          >
            <Heart />
          </VueIconButtonFx>
          <VueIconButtonFx
            fx="pulse-wobble"
            fx-speed="xl"
            variant="primary"
            label="Pulse-Wobble Large"
          >
            <Heart />
          </VueIconButtonFx>
        </div>
      </div>

      <!-- Jelly Effect -->
      <div class="effect-group">
        <h3>Jelly <span class="effect-type">Squash/stretch (hover)</span></h3>
        <div class="stacked-mobile">
          <VueIconButtonFx
            fx="jelly"
            variant="primary"
            label="Jelly Primary"
          >
            <Star />
          </VueIconButtonFx>
          <VueIconButtonFx
            fx="jelly"
            variant="success"
            label="Jelly Success"
          >
            <Check />
          </VueIconButtonFx>
          <VueIconButtonFx
            fx="jelly"
            variant="warning"
            label="Jelly Warning"
          >
            <Star />
          </VueIconButtonFx>
          <VueIconButtonFx
            fx="jelly"
            variant="danger"
            label="Jelly Danger"
          >
            <Star />
          </VueIconButtonFx>
          <VueIconButtonFx
            fx="jelly"
            variant="ghost"
            label="Jelly Ghost"
          >
            <Star />
          </VueIconButtonFx>
          <VueIconButtonFx
            fx="jelly"
            variant="warning"
            label="Jelly Large"
          >
            <Star />
          </VueIconButtonFx>
        </div>
      </div>

      <!-- Press-Pop Effect -->
      <div class="effect-group">
        <h3>Press-Pop <span class="effect-type">Quick press (click)</span></h3>
        <div class="stacked-mobile">
          <VueIconButtonFx
            fx="press-pop"
            variant="primary"
            label="Press-Pop Primary"
          >
            <Check />
          </VueIconButtonFx>
          <VueIconButtonFx
            fx="press-pop"
            variant="success"
            label="Press-Pop Success"
          >
            <Check />
          </VueIconButtonFx>
          <VueIconButtonFx
            fx="press-pop"
            variant="warning"
            label="Press-Pop Warning"
          >
            <Check />
          </VueIconButtonFx>
          <VueIconButtonFx
            fx="press-pop"
            variant="danger"
            label="Press-Pop Danger"
          >
            <Check />
          </VueIconButtonFx>
          <VueIconButtonFx
            fx="press-pop"
            variant="ghost"
            label="Press-Pop Ghost"
          >
            <Check />
          </VueIconButtonFx>
          <VueIconButtonFx
            fx="press-pop"
            variant="success"
            label="Press-Pop Large"
          >
            <Check />
          </VueIconButtonFx>
        </div>
      </div>

      <!-- Grow Effect -->
      <div class="effect-group">
        <h3>Grow <span class="effect-type">Scale up (hover)</span></h3>
        <div class="stacked-mobile">
          <VueIconButtonFx
            fx="grow"
            variant="primary"
            label="Grow Primary"
          >
            <Plus />
          </VueIconButtonFx>
          <VueIconButtonFx
            fx="grow"
            variant="success"
            label="Grow Success"
          >
            <Plus />
          </VueIconButtonFx>
          <VueIconButtonFx
            fx="grow"
            variant="warning"
            label="Grow Warning"
          >
            <Plus />
          </VueIconButtonFx>
          <VueIconButtonFx
            fx="grow"
            variant="danger"
            label="Grow Danger"
          >
            <Plus />
          </VueIconButtonFx>
          <VueIconButtonFx
            fx="grow"
            variant="ghost"
            label="Grow Ghost"
          >
            <Plus />
          </VueIconButtonFx>
          <VueIconButtonFx
            fx="grow"
            variant="primary"
            label="Grow Large"
          >
            <Plus />
          </VueIconButtonFx>
        </div>
      </div>

      <!-- Shrink Effect -->
      <div class="effect-group">
        <h3>Shrink <span class="effect-type">Scale down (hover)</span></h3>
        <div class="stacked-mobile">
          <VueIconButtonFx
            fx="shrink"
            variant="primary"
            label="Shrink Primary"
          >
            <Minus />
          </VueIconButtonFx>
          <VueIconButtonFx
            fx="shrink"
            variant="success"
            label="Shrink Success"
          >
            <Minus />
          </VueIconButtonFx>
          <VueIconButtonFx
            fx="shrink"
            variant="warning"
            label="Shrink Warning"
          >
            <Minus />
          </VueIconButtonFx>
          <VueIconButtonFx
            fx="shrink"
            variant="danger"
            label="Shrink Danger"
          >
            <Minus />
          </VueIconButtonFx>
          <VueIconButtonFx
            fx="shrink"
            variant="ghost"
            label="Shrink Ghost"
          >
            <Minus />
          </VueIconButtonFx>
          <VueIconButtonFx
            fx="shrink"
            variant="danger"
            label="Shrink Large"
          >
            <Minus />
          </VueIconButtonFx>
        </div>
      </div>
    </section>

    <!-- Speed Variations -->
    <section class="example-section">
      <div class="mbe4">
        <h2>Speed Variations</h2>
        <p class="example-description">Control animation speed with the <code>fx-speed</code> prop</p>
      </div>
      <div class="stacked-mobile">
        <VueIconButtonFx
          fx="pulse"
          fx-speed="xs"
          variant="primary"
          label="Extra fast"
        >
          <Heart />
        </VueIconButtonFx>
        <VueIconButtonFx
          fx="pulse"
          fx-speed="sm"
          variant="primary"
          label="Fast"
        >
          <Heart />
        </VueIconButtonFx>
        <VueIconButtonFx
          fx="pulse"
          fx-speed="md"
          variant="primary"
          label="Medium"
        >
          <Heart />
        </VueIconButtonFx>
        <VueIconButtonFx
          fx="pulse"
          fx-speed="lg"
          variant="primary"
          label="Slow"
        >
          <Heart />
        </VueIconButtonFx>
        <VueIconButtonFx
          fx="pulse"
          fx-speed="xl"
          variant="primary"
          label="Extra slow"
        >
          <Heart />
        </VueIconButtonFx>
      </div>
    </section>

    <!-- Easing Functions -->
    <section class="example-section">
      <div class="mbe4">
        <h2>Easing Functions</h2>
        <p class="mbe2">Different easing functions create different animation feels</p>
        <VueAlert :bordered-left="true">
          Examples use <code>fx-speed="xl"</code> to make easing differences more visible.
          For production, prefer <code>"sm"</code> or <code>"md"</code> speeds.
        </VueAlert>
      </div>
      <div
        class="stacked"
        style="width: 40%;"
      >
        <span>Ease <code>(ease)</code></span>
        <VueIconButtonFx
          fx="bounce"
          fx-ease="ease"
          fx-speed="xl"
          variant="primary"
          label="Ease"
        >
          <Heart />
        </VueIconButtonFx>
        <span>Ease In <code>(ease-in)</code></span>
        <VueIconButtonFx
          fx="bounce"
          fx-ease="ease-in"
          fx-speed="xl"
          variant="primary"
          label="Ease-In"
        >
          <Heart />
        </VueIconButtonFx>
        <span>Ease Out <code>(ease-out)</code></span>
        <VueIconButtonFx
          fx="bounce"
          fx-ease="ease-out"
          fx-speed="xl"
          variant="primary"
          label="Ease-Out"
        >
          <Heart />
        </VueIconButtonFx>

        <span>Bounce<code>(bounce)</code></span>
        <VueIconButtonFx
          fx="bounce"
          fx-ease="bounce"
          fx-speed="xl"
          variant="primary"
          label="Bounce"
        >
          <Heart />
        </VueIconButtonFx>
        <span>Spring Small <code>(spring-sm)</code></span>
        <VueIconButtonFx
          fx="bounce"
          fx-ease="spring-sm"
          fx-speed="xl"
          variant="primary"
          label="Spring SM"
        >
          <Heart />
        </VueIconButtonFx>
        <span>Spring Medium <code>(spring-md)</code></span>
        <VueIconButtonFx
          fx="bounce"
          fx-ease="spring-md"
          fx-speed="xl"
          variant="primary"
          label="Spring MD"
        >
          <Heart />
        </VueIconButtonFx>
        <span>Spring Large <code>(spring-lg)</code></span>
        <VueIconButtonFx
          fx="bounce"
          fx-ease="spring-lg"
          fx-speed="xl"
          variant="primary"
          label="Spring LG"
        >
          <Heart />
        </VueIconButtonFx>
      </div>
    </section>

    <!-- Size Variations -->
    <section class="example-section">
      <div class="mbe4">
        <h2>Size Variations</h2>
        <p class="example-description">For <code>xs</code> and <code>sm</code> sizes, use an icon size <code>20px</code> or less, or, allow the icon to scale with: <code>width: 100%</code> and <code>height: 100%</code>.</p>
      </div>
      <div class="stacked-mobile">
        <VueIconButtonFx
          fx="pulse"
          size="xs"
          variant="primary"
          :bordered="true"
          label="Extra small"
        >
          <Heart class="full-w-h" />
        </VueIconButtonFx>
        <VueIconButtonFx
          fx="pulse"
          size="sm"
          variant="primary"
          label="Small"
        >
          <Heart class="full-w-h" />
        </VueIconButtonFx>
        <VueIconButtonFx
          fx="pulse"
          size="md"
          variant="primary"
          label="Medium"
        >
          <Heart class="full-w-h" />
        </VueIconButtonFx>
        <VueIconButtonFx
          fx="pulse"
          size="lg"
          variant="primary"
          label="Large"
        >
          <Heart class="full-w-h" />
        </VueIconButtonFx>
        <VueIconButtonFx
          fx="pulse"
          size="xl"
          variant="primary"
          label="Extra large"
        >
          <Heart class="full-w-h" />
        </VueIconButtonFx>
      </div>
    </section>

    <!-- Common Use Cases -->
    <section class="example-section">
      <div class="mbe4">
        <h2>Common Use Cases</h2>
      </div>

      <div class="use-case-group">
        <h3>Navigation</h3>
        <div class="stacked-mobile">
          <VueIconButtonFx
            fx="grow"
            variant="ghost"
            label="Menu"
          >
            <Menu />
          </VueIconButtonFx>
          <VueIconButtonFx
            fx="grow"
            variant="ghost"
            label="Home"
          >
            <Home />
          </VueIconButtonFx>
          <VueIconButtonFx
            fx="grow"
            variant="ghost"
            label="Search"
          >
            <Search />
          </VueIconButtonFx>
        </div>
      </div>

      <div class="use-case-group">
        <h3>Actions</h3>
        <div class="stacked-mobile">
          <VueIconButtonFx
            fx="pulse"
            variant="primary"
            label="Edit"
          >
            <Edit />
          </VueIconButtonFx>
          <VueIconButtonFx
            fx="shake"
            variant="danger"
            label="Delete"
          >
            <Trash2 />
          </VueIconButtonFx>
          <VueIconButtonFx
            fx="bounce"
            variant="success"
            label="Bookmark"
          >
            <Bookmark />
          </VueIconButtonFx>
        </div>
      </div>

      <div class="use-case-group">
        <h3>Notifications</h3>
        <div class="stacked-mobile">
          <VueIconButtonFx
            fx="wobble"
            variant="warning"
            label="Notifications"
          >
            <Bell />
          </VueIconButtonFx>
          <VueIconButtonFx
            fx="pulse-wobble"
            variant="danger"
            label="Important notification"
          >
            <Bell />
          </VueIconButtonFx>
        </div>
      </div>

      <div class="use-case-group">
        <h3>Social</h3>
        <div class="stacked-mobile">
          <VueIconButtonFx
            fx="pulse"
            variant="ghost"
            label="Like"
          >
            <ThumbsUp />
          </VueIconButtonFx>
          <VueIconButtonFx
            fx="bounce"
            variant="ghost"
            label="Comment"
          >
            <MessageCircle />
          </VueIconButtonFx>
          <VueIconButtonFx
            fx="grow"
            variant="ghost"
            label="Send"
          >
            <Send />
          </VueIconButtonFx>
        </div>
      </div>
    </section>

    <!-- Disabled Effects -->
    <section class="example-section">
      <div class="mbe4">
        <h2>Disabling Effects</h2>
        <p class="example-description">
          This button has <code>fx="pulse"</code> but <code>:fx-disabled="true"</code>
          prevents the animation from playing while keeping the button clickable
        </p>
      </div>
      <div class="stacked-mobile">
        <VueIconButtonFx
          fx="pulse"
          :fx-disabled="true"
          variant="primary"
          label="No animation"
        >
          <Heart />
        </VueIconButtonFx>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { VueIconButtonFx } from "agnosticui-core/icon-button-fx/vue";
import { VueAlert } from "agnosticui-core/alert/vue";
import {
  Heart,
  Download,
  Bell,
  Trash2,
  Menu,
  Home,
  Search,
  Edit,
  Bookmark,
  ThumbsUp,
  MessageCircle,
  Send,
  Star,
  Check,
  Plus,
  Minus,
  Settings,
} from "lucide-vue-next";

export default defineComponent({
  name: "IconButtonFxExamples",
  components: {
    VueIconButtonFx,
    VueAlert,
    Heart,
    Download,
    Bell,
    Trash2,
    Menu,
    Home,
    Search,
    Edit,
    Bookmark,
    ThumbsUp,
    MessageCircle,
    Send,
    Star,
    Check,
    Plus,
    Minus,
    Settings,
  },
});
<\/script>
`,kn=`import { LitElement, html, css } from 'lit';
import 'agnosticui-core/icon-button-fx';
import 'agnosticui-core/alert';

export class IconButtonFxLitExamples extends LitElement {
  static styles = css\`
    .examples-container {
      width: 100%;
    }
    .example-section {
      margin-block-end: 3rem;
    }
    .effect-group {
      margin-block-end: 2rem;
    }
    .use-case-group {
      margin-block-end: 2rem;
    }
    .example-description {
      color: var(--ag-text-secondary, #666);
      margin-block-end: 1rem;
    }
    .effect-type {
      font-size: 0.875rem;
      color: var(--ag-text-secondary, #666);
      font-weight: normal;
    }
    .full-w-h {
      width: 100%;
      height: 100%;
    }
  \`;

  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  render() {
    return html\`
      <div class="examples-container">
        <!-- Basic Effects -->
        <section class="example-section">
          <div class="mbe4">
            <h2>Basic Effects</h2>
            <p class="example-description">All available effects</p>
          </div>

          <!-- Pulse Effect -->
          <div class="effect-group">
            <h3>Pulse <span class="effect-type">Scale grow (hover)</span></h3>
            <div class="stacked-mobile">
              <ag-icon-button-fx fx="pulse" variant="primary" label="Pulse Primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="pulse" variant="success" label="Pulse Success">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="pulse" variant="warning" label="Pulse Warning">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="pulse" variant="danger" label="Pulse Danger">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M3 6h18"></path>
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="pulse" variant="ghost" label="Pulse Ghost">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M12 1v6m0 6v6M5.6 5.6l4.2 4.2m4.2 4.2l4.2 4.2M1 12h6m6 0h6M5.6 18.4l4.2-4.2m4.2-4.2l4.2-4.2"></path>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="pulse" variant="primary" label="Pulse Large">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </ag-icon-button-fx>
            </div>
          </div>

          <!-- Bounce Effect -->
          <div class="effect-group">
            <h3>Bounce <span class="effect-type">Vertical pop (hover)</span></h3>
            <div class="stacked-mobile">
              <ag-icon-button-fx fx="bounce" variant="primary" label="Bounce Primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="bounce" variant="success" label="Bounce Success">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="bounce" variant="warning" label="Bounce Warning">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="bounce" variant="danger" label="Bounce Danger">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M3 6h18"></path>
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="bounce" variant="ghost" label="Bounce Ghost">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="bounce" variant="success" label="Bounce Large">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </ag-icon-button-fx>
            </div>
          </div>

          <!-- Wobble Effect -->
          <div class="effect-group">
            <h3>Wobble <span class="effect-type">Rotate wobble (hover)</span></h3>
            <div class="stacked-mobile">
              <ag-icon-button-fx fx="wobble" variant="primary" label="Wobble Primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="wobble" variant="success" label="Wobble Success">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="wobble" variant="warning" label="Wobble Warning">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="wobble" variant="danger" label="Wobble Danger">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="wobble" variant="ghost" label="Wobble Ghost">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="wobble" variant="warning" label="Wobble Large">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                </svg>
              </ag-icon-button-fx>
            </div>
          </div>

          <!-- Shake Effect -->
          <div class="effect-group">
            <h3>Shake <span class="effect-type">Horizontal shake (hover)</span></h3>
            <div class="stacked-mobile">
              <ag-icon-button-fx fx="shake" variant="primary" label="Shake Primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M3 6h18"></path>
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="shake" variant="success" label="Shake Success">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M3 6h18"></path>
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="shake" variant="warning" label="Shake Warning">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M3 6h18"></path>
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="shake" variant="danger" label="Shake Danger">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M3 6h18"></path>
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="shake" variant="ghost" label="Shake Ghost">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M3 6h18"></path>
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="shake" variant="danger" label="Shake Large">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M3 6h18"></path>
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                </svg>
              </ag-icon-button-fx>
            </div>
          </div>

          <!-- Pulse-Wobble Effect -->
          <div class="effect-group">
            <h3>Pulse-Wobble <span class="effect-type">Sequential animation (hover)</span></h3>
            <div class="stacked-mobile">
              <ag-icon-button-fx fx="pulse-wobble" fx-speed="xl" variant="primary" label="Pulse-Wobble Primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="pulse-wobble" fx-speed="xl" variant="success" label="Pulse-Wobble Success">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="pulse-wobble" fx-speed="xl" variant="warning" label="Pulse-Wobble Warning">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="pulse-wobble" fx-speed="xl" variant="danger" label="Pulse-Wobble Danger">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="pulse-wobble" fx-speed="xl" variant="ghost" label="Pulse-Wobble Ghost">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="pulse-wobble" fx-speed="xl" variant="primary" label="Pulse-Wobble Large">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </ag-icon-button-fx>
            </div>
          </div>

          <!-- Jelly Effect -->
          <div class="effect-group">
            <h3>Jelly <span class="effect-type">Squash/stretch (hover)</span></h3>
            <div class="stacked-mobile">
              <ag-icon-button-fx fx="jelly" variant="primary" label="Jelly Primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="jelly" variant="success" label="Jelly Success">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="jelly" variant="warning" label="Jelly Warning">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="jelly" variant="danger" label="Jelly Danger">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="jelly" variant="ghost" label="Jelly Ghost">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="jelly" variant="warning" label="Jelly Large">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </ag-icon-button-fx>
            </div>
          </div>

          <!-- Press-Pop Effect -->
          <div class="effect-group">
            <h3>Press-Pop <span class="effect-type">Quick press (click)</span></h3>
            <div class="stacked-mobile">
              <ag-icon-button-fx fx="press-pop" variant="primary" label="Press-Pop Primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="press-pop" variant="success" label="Press-Pop Success">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="press-pop" variant="warning" label="Press-Pop Warning">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="press-pop" variant="danger" label="Press-Pop Danger">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="press-pop" variant="ghost" label="Press-Pop Ghost">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="press-pop" variant="success" label="Press-Pop Large">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </ag-icon-button-fx>
            </div>
          </div>

          <!-- Grow Effect -->
          <div class="effect-group">
            <h3>Grow <span class="effect-type">Scale up (hover)</span></h3>
            <div class="stacked-mobile">
              <ag-icon-button-fx fx="grow" variant="primary" label="Grow Primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="grow" variant="success" label="Grow Success">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="grow" variant="warning" label="Grow Warning">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="grow" variant="danger" label="Grow Danger">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="grow" variant="ghost" label="Grow Ghost">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="grow" variant="primary" label="Grow Large">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </ag-icon-button-fx>
            </div>
          </div>

          <!-- Shrink Effect -->
          <div class="effect-group">
            <h3>Shrink <span class="effect-type">Scale down (hover)</span></h3>
            <div class="stacked-mobile">
              <ag-icon-button-fx fx="shrink" variant="primary" label="Shrink Primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="shrink" variant="success" label="Shrink Success">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="shrink" variant="warning" label="Shrink Warning">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="shrink" variant="danger" label="Shrink Danger">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="shrink" variant="ghost" label="Shrink Ghost">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="shrink" variant="danger" label="Shrink Large">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </ag-icon-button-fx>
            </div>
          </div>
        </section>

        <!-- Speed Variations -->
        <section class="example-section">
          <div class="mbe4">
            <h2>Speed Variations</h2>
            <p class="example-description">Control animation speed with the <code>fx-speed</code> attribute</p>
          </div>
          <div class="stacked-mobile">
            <ag-icon-button-fx fx="pulse" fx-speed="xs" variant="primary" label="Extra fast">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </ag-icon-button-fx>
            <ag-icon-button-fx fx="pulse" fx-speed="sm" variant="primary" label="Fast">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </ag-icon-button-fx>
            <ag-icon-button-fx fx="pulse" fx-speed="md" variant="primary" label="Medium">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </ag-icon-button-fx>
            <ag-icon-button-fx fx="pulse" fx-speed="lg" variant="primary" label="Slow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </ag-icon-button-fx>
            <ag-icon-button-fx fx="pulse" fx-speed="xl" variant="primary" label="Extra slow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </ag-icon-button-fx>
          </div>
        </section>

        <!-- Easing Functions -->
        <section class="example-section">
          <div class="mbe4">
            <h2>Easing Functions</h2>
            <p class="mbe2">Different easing functions create different animation feels</p>
            <ag-alert bordered-left>
              Examples use <code>fx-speed="xl"</code> to make easing differences more visible.
              For production, prefer <code>"sm"</code> or <code>"md"</code> speeds.
            </ag-alert>
          </div>
          <div class="stacked" style="width: 40%;">
            <span>Ease <code>(ease)</code></span>
            <ag-icon-button-fx fx="bounce" fx-ease="ease" fx-speed="xl" variant="primary" label="Ease">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </ag-icon-button-fx>
            <span>Ease In <code>(ease-in)</code></span>
            <ag-icon-button-fx fx="bounce" fx-ease="ease-in" fx-speed="xl" variant="primary" label="Ease-In">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </ag-icon-button-fx>
            <span>Ease Out <code>(ease-out)</code></span>
            <ag-icon-button-fx fx="bounce" fx-ease="ease-out" fx-speed="xl" variant="primary" label="Ease-Out">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </ag-icon-button-fx>

            <span>Bounce<code>(bounce)</code></span>
            <ag-icon-button-fx fx="bounce" fx-ease="bounce" fx-speed="xl" variant="primary" label="Bounce">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </ag-icon-button-fx>
            <span>Spring Small <code>(spring-sm)</code></span>
            <ag-icon-button-fx fx="bounce" fx-ease="spring-sm" fx-speed="xl" variant="primary" label="Spring SM">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </ag-icon-button-fx>
            <span>Spring Medium <code>(spring-md)</code></span>
            <ag-icon-button-fx fx="bounce" fx-ease="spring-md" fx-speed="xl" variant="primary" label="Spring MD">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </ag-icon-button-fx>
            <span>Spring Large <code>(spring-lg)</code></span>
            <ag-icon-button-fx fx="bounce" fx-ease="spring-lg" fx-speed="xl" variant="primary" label="Spring LG">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </ag-icon-button-fx>
          </div>
        </section>

        <!-- Size Variations -->
        <section class="example-section">
          <div class="mbe4">
            <h2>Size Variations</h2>
            <p class="example-description">For <code>xs</code> and <code>sm</code> sizes, use an icon size <code>20px</code> or less, or, allow the icon to scale with: <code>width: 100%</code> and <code>height: 100%</code>.</p>
          </div>
          <div class="stacked-mobile">
            <ag-icon-button-fx fx="pulse" size="xs" variant="primary" bordered label="Extra small">
              <svg class="full-w-h" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </ag-icon-button-fx>
            <ag-icon-button-fx fx="pulse" size="sm" variant="primary" label="Small">
              <svg class="full-w-h" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </ag-icon-button-fx>
            <ag-icon-button-fx fx="pulse" size="md" variant="primary" label="Medium">
              <svg class="full-w-h" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </ag-icon-button-fx>
            <ag-icon-button-fx fx="pulse" size="lg" variant="primary" label="Large">
              <svg class="full-w-h" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </ag-icon-button-fx>
            <ag-icon-button-fx fx="pulse" size="xl" variant="primary" label="Extra large">
              <svg class="full-w-h" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </ag-icon-button-fx>
          </div>
        </section>

        <!-- Common Use Cases -->
        <section class="example-section">
          <div class="mbe4">
            <h2>Common Use Cases</h2>
          </div>

          <div class="use-case-group">
            <h3>Navigation</h3>
            <div class="stacked-mobile">
              <ag-icon-button-fx fx="grow" variant="ghost" label="Menu">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="grow" variant="ghost" label="Home">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="grow" variant="ghost" label="Search">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
              </ag-icon-button-fx>
            </div>
          </div>

          <div class="use-case-group">
            <h3>Actions</h3>
            <div class="stacked-mobile">
              <ag-icon-button-fx fx="pulse" variant="primary" label="Edit">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="shake" variant="danger" label="Delete">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M3 6h18"></path>
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="bounce" variant="success" label="Bookmark">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
                </svg>
              </ag-icon-button-fx>
            </div>
          </div>

          <div class="use-case-group">
            <h3>Notifications</h3>
            <div class="stacked-mobile">
              <ag-icon-button-fx fx="wobble" variant="warning" label="Notifications">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="pulse-wobble" variant="danger" label="Important notification">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                </svg>
              </ag-icon-button-fx>
            </div>
          </div>

          <div class="use-case-group">
            <h3>Social</h3>
            <div class="stacked-mobile">
              <ag-icon-button-fx fx="pulse" variant="ghost" label="Like">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M7 10v12"></path>
                  <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="bounce" variant="ghost" label="Comment">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                </svg>
              </ag-icon-button-fx>
              <ag-icon-button-fx fx="grow" variant="ghost" label="Send">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </ag-icon-button-fx>
            </div>
          </div>
        </section>

        <!-- Disabled Effects -->
        <section class="example-section">
          <div class="mbe4">
            <h2>Disabling Effects</h2>
            <p class="example-description">
              This button has <code>fx="pulse"</code> but <code>fx-disabled="true"</code>
              prevents the animation from playing while keeping the button clickable
            </p>
          </div>
          <div class="stacked-mobile">
            <ag-icon-button-fx fx="pulse" fx-disabled variant="primary" label="No animation">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </ag-icon-button-fx>
          </div>
        </section>
      </div>
    \`;
  }
}

// Register the custom element
customElements.define('icon-button-fx-lit-examples', IconButtonFxLitExamples);
`,dn=`import { ReactIconButtonFx } from "agnosticui-core/icon-button-fx/react";
import { ReactAlert } from "agnosticui-core/alert/react";

export default function IconButtonFxReactExamples() {
  return (
    <div className="examples-container">
      <style>{\`
        .examples-container {
          width: 100%;
        }
        .example-section {
          margin-block-end: 3rem;
        }
        .effect-group {
          margin-block-end: 2rem;
        }
        .use-case-group {
          margin-block-end: 2rem;
        }
        .example-description {
          color: var(--ag-text-secondary, #666);
          margin-block-end: 1rem;
        }
        .effect-type {
          font-size: 0.875rem;
          color: var(--ag-text-secondary, #666);
          font-weight: normal;
        }
        .full-w-h {
          width: 100%;
          height: 100%;
        }
      \`}</style>

      {/* Basic Effects */}
      <section className="example-section">
        <div className="mbe4">
          <h2>Basic Effects</h2>
          <p className="example-description">All available effects</p>
        </div>

        {/* Pulse Effect */}
        <div className="effect-group">
          <h3>Pulse <span className="effect-type">Scale grow (hover)</span></h3>
          <div className="stacked-mobile">
            <ReactIconButtonFx fx="pulse" variant="primary" label="Pulse Primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </ReactIconButtonFx>
            <ReactIconButtonFx fx="pulse" variant="success" label="Pulse Success">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </ReactIconButtonFx>
            <ReactIconButtonFx fx="pulse" variant="warning" label="Pulse Warning">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </ReactIconButtonFx>
            <ReactIconButtonFx fx="pulse" variant="danger" label="Pulse Danger">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 6h18"></path>
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
              </svg>
            </ReactIconButtonFx>
            <ReactIconButtonFx fx="pulse" variant="ghost" label="Pulse Ghost">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M12 1v6m0 6v6M5.6 5.6l4.2 4.2m4.2 4.2l4.2 4.2M1 12h6m6 0h6M5.6 18.4l4.2-4.2m4.2-4.2l4.2-4.2"></path>
              </svg>
            </ReactIconButtonFx>
            <ReactIconButtonFx fx="pulse" variant="primary" label="Pulse Large">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </ReactIconButtonFx>
          </div>
        </div>

        {/* Bounce Effect */}
        <div className="effect-group">
          <h3>Bounce <span className="effect-type">Vertical pop (hover)</span></h3>
          <div className="stacked-mobile">
            <ReactIconButtonFx fx="bounce" variant="primary" label="Bounce Primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </ReactIconButtonFx>
            <ReactIconButtonFx fx="bounce" variant="success" label="Bounce Success">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </ReactIconButtonFx>
            <ReactIconButtonFx fx="bounce" variant="warning" label="Bounce Warning">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
              </svg>
            </ReactIconButtonFx>
            <ReactIconButtonFx fx="bounce" variant="danger" label="Bounce Danger">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 6h18"></path>
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
              </svg>
            </ReactIconButtonFx>
            <ReactIconButtonFx fx="bounce" variant="ghost" label="Bounce Ghost">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </ReactIconButtonFx>
            <ReactIconButtonFx fx="bounce" variant="success" label="Bounce Large">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </ReactIconButtonFx>
          </div>
        </div>

        {/* Wobble Effect */}
        <div className="effect-group">
          <h3>Wobble <span className="effect-type">Rotate wobble (hover)</span></h3>
          <div className="stacked-mobile">
            <ReactIconButtonFx fx="wobble" variant="primary" label="Wobble Primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
              </svg>
            </ReactIconButtonFx>
            <ReactIconButtonFx fx="wobble" variant="success" label="Wobble Success">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </ReactIconButtonFx>
            <ReactIconButtonFx fx="wobble" variant="warning" label="Wobble Warning">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
              </svg>
            </ReactIconButtonFx>
            <ReactIconButtonFx fx="wobble" variant="danger" label="Wobble Danger">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
              </svg>
            </ReactIconButtonFx>
            <ReactIconButtonFx fx="wobble" variant="ghost" label="Wobble Ghost">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
              </svg>
            </ReactIconButtonFx>
            <ReactIconButtonFx fx="wobble" variant="warning" label="Wobble Large">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
              </svg>
            </ReactIconButtonFx>
          </div>
        </div>

        {/* Shake Effect */}
        <div className="effect-group">
          <h3>Shake <span className="effect-type">Horizontal shake (hover)</span></h3>
          <div className="stacked-mobile">
            <ReactIconButtonFx fx="shake" variant="primary" label="Shake Primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 6h18"></path>
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
              </svg>
            </ReactIconButtonFx>
            <ReactIconButtonFx fx="shake" variant="success" label="Shake Success">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 6h18"></path>
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
              </svg>
            </ReactIconButtonFx>
            <ReactIconButtonFx fx="shake" variant="warning" label="Shake Warning">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 6h18"></path>
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
              </svg>
            </ReactIconButtonFx>
            <ReactIconButtonFx fx="shake" variant="danger" label="Shake Danger">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 6h18"></path>
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
              </svg>
            </ReactIconButtonFx>
            <ReactIconButtonFx fx="shake" variant="ghost" label="Shake Ghost">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 6h18"></path>
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
              </svg>
            </ReactIconButtonFx>
            <ReactIconButtonFx fx="shake" variant="danger" label="Shake Large">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 6h18"></path>
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
              </svg>
            </ReactIconButtonFx>
          </div>
        </div>

        {/* Pulse-Wobble Effect */}
        <div className="effect-group">
          <h3>Pulse-Wobble <span className="effect-type">Sequential animation (hover)</span></h3>
          <div className="stacked-mobile">
            <ReactIconButtonFx fx="pulse-wobble" fxSpeed="xl" variant="primary" label="Pulse-Wobble Primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </ReactIconButtonFx>
            <ReactIconButtonFx fx="pulse-wobble" fxSpeed="xl" variant="success" label="Pulse-Wobble Success">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </ReactIconButtonFx>
            <ReactIconButtonFx fx="pulse-wobble" fxSpeed="xl" variant="warning" label="Pulse-Wobble Warning">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
              </svg>
            </ReactIconButtonFx>
            <ReactIconButtonFx fx="pulse-wobble" fxSpeed="xl" variant="danger" label="Pulse-Wobble Danger">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </ReactIconButtonFx>
            <ReactIconButtonFx fx="pulse-wobble" fxSpeed="xl" variant="ghost" label="Pulse-Wobble Ghost">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </ReactIconButtonFx>
            <ReactIconButtonFx fx="pulse-wobble" fxSpeed="xl" variant="primary" label="Pulse-Wobble Large">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </ReactIconButtonFx>
          </div>
        </div>

        {/* Jelly Effect */}
        <div className="effect-group">
          <h3>Jelly <span className="effect-type">Squash/stretch (hover)</span></h3>
          <div className="stacked-mobile">
            <ReactIconButtonFx fx="jelly" variant="primary" label="Jelly Primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </ReactIconButtonFx>
            <ReactIconButtonFx fx="jelly" variant="success" label="Jelly Success">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </ReactIconButtonFx>
            <ReactIconButtonFx fx="jelly" variant="warning" label="Jelly Warning">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </ReactIconButtonFx>
            <ReactIconButtonFx fx="jelly" variant="danger" label="Jelly Danger">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </ReactIconButtonFx>
            <ReactIconButtonFx fx="jelly" variant="ghost" label="Jelly Ghost">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </ReactIconButtonFx>
            <ReactIconButtonFx fx="jelly" variant="warning" label="Jelly Large">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </ReactIconButtonFx>
          </div>
        </div>

        {/* Press-Pop Effect */}
        <div className="effect-group">
          <h3>Press-Pop <span className="effect-type">Quick press (click)</span></h3>
          <div className="stacked-mobile">
            <ReactIconButtonFx fx="press-pop" variant="primary" label="Press-Pop Primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </ReactIconButtonFx>
            <ReactIconButtonFx fx="press-pop" variant="success" label="Press-Pop Success">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </ReactIconButtonFx>
            <ReactIconButtonFx fx="press-pop" variant="warning" label="Press-Pop Warning">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </ReactIconButtonFx>
            <ReactIconButtonFx fx="press-pop" variant="danger" label="Press-Pop Danger">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </ReactIconButtonFx>
            <ReactIconButtonFx fx="press-pop" variant="ghost" label="Press-Pop Ghost">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </ReactIconButtonFx>
            <ReactIconButtonFx fx="press-pop" variant="success" label="Press-Pop Large">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </ReactIconButtonFx>
          </div>
        </div>

        {/* Grow Effect */}
        <div className="effect-group">
          <h3>Grow <span className="effect-type">Scale up (hover)</span></h3>
          <div className="stacked-mobile">
            <ReactIconButtonFx fx="grow" variant="primary" label="Grow Primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </ReactIconButtonFx>
            <ReactIconButtonFx fx="grow" variant="success" label="Grow Success">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </ReactIconButtonFx>
            <ReactIconButtonFx fx="grow" variant="warning" label="Grow Warning">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </ReactIconButtonFx>
            <ReactIconButtonFx fx="grow" variant="danger" label="Grow Danger">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </ReactIconButtonFx>
            <ReactIconButtonFx fx="grow" variant="ghost" label="Grow Ghost">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </ReactIconButtonFx>
            <ReactIconButtonFx fx="grow" variant="primary" label="Grow Large">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </ReactIconButtonFx>
          </div>
        </div>

        {/* Shrink Effect */}
        <div className="effect-group">
          <h3>Shrink <span className="effect-type">Scale down (hover)</span></h3>
          <div className="stacked-mobile">
            <ReactIconButtonFx fx="shrink" variant="primary" label="Shrink Primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </ReactIconButtonFx>
            <ReactIconButtonFx fx="shrink" variant="success" label="Shrink Success">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </ReactIconButtonFx>
            <ReactIconButtonFx fx="shrink" variant="warning" label="Shrink Warning">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </ReactIconButtonFx>
            <ReactIconButtonFx fx="shrink" variant="danger" label="Shrink Danger">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </ReactIconButtonFx>
            <ReactIconButtonFx fx="shrink" variant="ghost" label="Shrink Ghost">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </ReactIconButtonFx>
            <ReactIconButtonFx fx="shrink" variant="danger" label="Shrink Large">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </ReactIconButtonFx>
          </div>
        </div>
      </section>

      {/* Speed Variations */}
      <section className="example-section">
        <div className="mbe4">
          <h2>Speed Variations</h2>
          <p className="example-description">Control animation speed with the <code>fxSpeed</code> prop</p>
        </div>
        <div className="stacked-mobile">
          <ReactIconButtonFx fx="pulse" fxSpeed="xs" variant="primary" label="Extra fast">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </ReactIconButtonFx>
          <ReactIconButtonFx fx="pulse" fxSpeed="sm" variant="primary" label="Fast">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </ReactIconButtonFx>
          <ReactIconButtonFx fx="pulse" fxSpeed="md" variant="primary" label="Medium">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </ReactIconButtonFx>
          <ReactIconButtonFx fx="pulse" fxSpeed="lg" variant="primary" label="Slow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </ReactIconButtonFx>
          <ReactIconButtonFx fx="pulse" fxSpeed="xl" variant="primary" label="Extra slow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </ReactIconButtonFx>
        </div>
      </section>

      {/* Easing Functions */}
      <section className="example-section">
        <div className="mbe4">
          <h2>Easing Functions</h2>
          <p className="mbe2">Different easing functions create different animation feels</p>
          <ReactAlert borderedLeft>
            Examples use <code>fxSpeed="xl"</code> to make easing differences more visible.
            For production, prefer <code>"sm"</code> or <code>"md"</code> speeds.
          </ReactAlert>
        </div>
        <div className="stacked" style={{ width: '40%' }}>
          <span>Ease <code>(ease)</code></span>
          <ReactIconButtonFx fx="bounce" fxEase="ease" fxSpeed="xl" variant="primary" label="Ease">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </ReactIconButtonFx>
          <span>Ease In <code>(ease-in)</code></span>
          <ReactIconButtonFx fx="bounce" fxEase="ease-in" fxSpeed="xl" variant="primary" label="Ease-In">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </ReactIconButtonFx>
          <span>Ease Out <code>(ease-out)</code></span>
          <ReactIconButtonFx fx="bounce" fxEase="ease-out" fxSpeed="xl" variant="primary" label="Ease-Out">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </ReactIconButtonFx>

          <span>Bounce <code>(bounce)</code></span>
          <ReactIconButtonFx fx="bounce" fxEase="bounce" fxSpeed="xl" variant="primary" label="Bounce">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </ReactIconButtonFx>
          <span>Spring Small <code>(spring-sm)</code></span>
          <ReactIconButtonFx fx="bounce" fxEase="spring-sm" fxSpeed="xl" variant="primary" label="Spring SM">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </ReactIconButtonFx>
          <span>Spring Medium <code>(spring-md)</code></span>
          <ReactIconButtonFx fx="bounce" fxEase="spring-md" fxSpeed="xl" variant="primary" label="Spring MD">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </ReactIconButtonFx>
          <span>Spring Large <code>(spring-lg)</code></span>
          <ReactIconButtonFx fx="bounce" fxEase="spring-lg" fxSpeed="xl" variant="primary" label="Spring LG">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </ReactIconButtonFx>
        </div>
      </section>

      {/* Size Variations */}
      <section className="example-section">
        <div className="mbe4">
          <h2>Size Variations</h2>
          <p className="example-description">For <code>xs</code> and <code>sm</code> sizes, use an icon size <code>20px</code> or less, or, allow the icon to scale with: <code>width: 100%</code> and <code>height: 100%</code>.</p>
        </div>
        <div className="stacked-mobile">
          <ReactIconButtonFx fx="pulse" size="xs" variant="primary" bordered label="Extra small">
            <svg className="full-w-h" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </ReactIconButtonFx>
          <ReactIconButtonFx fx="pulse" size="sm" variant="primary" label="Small">
            <svg className="full-w-h" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </ReactIconButtonFx>
          <ReactIconButtonFx fx="pulse" size="md" variant="primary" label="Medium">
            <svg className="full-w-h" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </ReactIconButtonFx>
          <ReactIconButtonFx fx="pulse" size="lg" variant="primary" label="Large">
            <svg className="full-w-h" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </ReactIconButtonFx>
          <ReactIconButtonFx fx="pulse" size="xl" variant="primary" label="Extra large">
            <svg className="full-w-h" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </ReactIconButtonFx>
        </div>
      </section>

      {/* Common Use Cases */}
      <section className="example-section">
        <div className="mbe4">
          <h2>Common Use Cases</h2>
        </div>

        <div className="use-case-group">
          <h3>Navigation</h3>
          <div className="stacked-mobile">
            <ReactIconButtonFx fx="grow" variant="ghost" label="Menu">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </ReactIconButtonFx>
            <ReactIconButtonFx fx="grow" variant="ghost" label="Home">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </ReactIconButtonFx>
            <ReactIconButtonFx fx="grow" variant="ghost" label="Search">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </ReactIconButtonFx>
          </div>
        </div>

        <div className="use-case-group">
          <h3>Actions</h3>
          <div className="stacked-mobile">
            <ReactIconButtonFx fx="pulse" variant="primary" label="Edit">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
            </ReactIconButtonFx>
            <ReactIconButtonFx fx="shake" variant="danger" label="Delete">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 6h18"></path>
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
              </svg>
            </ReactIconButtonFx>
            <ReactIconButtonFx fx="bounce" variant="success" label="Bookmark">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
              </svg>
            </ReactIconButtonFx>
          </div>
        </div>

        <div className="use-case-group">
          <h3>Notifications</h3>
          <div className="stacked-mobile">
            <ReactIconButtonFx fx="wobble" variant="warning" label="Notifications">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
              </svg>
            </ReactIconButtonFx>
            <ReactIconButtonFx fx="pulse-wobble" variant="danger" label="Important notification">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
              </svg>
            </ReactIconButtonFx>
          </div>
        </div>

        <div className="use-case-group">
          <h3>Social</h3>
          <div className="stacked-mobile">
            <ReactIconButtonFx fx="pulse" variant="ghost" label="Like">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M7 10v12"></path>
                <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
              </svg>
            </ReactIconButtonFx>
            <ReactIconButtonFx fx="bounce" variant="ghost" label="Comment">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
              </svg>
            </ReactIconButtonFx>
            <ReactIconButtonFx fx="grow" variant="ghost" label="Send">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </ReactIconButtonFx>
          </div>
        </div>
      </section>

      {/* Disabled Effects */}
      <section className="example-section">
        <div className="mbe4">
          <h2>Disabling Effects</h2>
          <p className="example-description">
            This button has <code>fx="pulse"</code> but <code>fxDisabled={"{true}"}</code>
            prevents the animation from playing while keeping the button clickable
          </p>
        </div>
        <div className="stacked-mobile">
          <ReactIconButtonFx fx="pulse" fxDisabled={true} variant="primary" label="No animation">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </ReactIconButtonFx>
        </div>
      </section>
    </div>
  );
}
`,zn=JSON.parse('{"title":"IconButtonFx","description":"","frontmatter":{},"headers":[],"relativePath":"components/icon-button-fx.md","filePath":"components/icon-button-fx.md"}'),cn={name:"components/icon-button-fx.md"},Nn=Object.assign(cn,{setup(r){return(a,e)=>(w(),C("div",null,[e[1]||(e[1]=n("h1",{id:"iconbuttonfx",tabindex:"-1"},[o("IconButtonFx "),n("a",{class:"header-anchor",href:"#iconbuttonfx","aria-label":'Permalink to "IconButtonFx"'},"​")],-1)),s(U),e[2]||(e[2]=n("p",null,"An icon button component with customizable animation effects that trigger on hover, click, or mount. IconButtonFx extends the base IconButton component with a rich set of visual effects to create engaging, interactive UI elements.",-1)),e[3]||(e[3]=n("div",{class:"info custom-block"},[n("p",{class:"custom-block-title"},"Opt-in Component"),n("p",null,"IconButtonFx adds a few hundred lines of CSS for animation effects. It's ideal for marketing sites, landing pages, or when visual polish is a priority.")],-1)),e[4]||(e[4]=n("h2",{id:"examples",tabindex:"-1"},[o("Examples "),n("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),s(gs,{component:"icon-button-fx","vue-code":B(pn),"lit-code":B(kn),"react-code":B(dn)},{vue:t(()=>[s(hn)]),lit:t(()=>[...e[0]||(e[0]=[n("icon-button-fx-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),e[5]||(e[5]=I(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The framework examples below <code>import</code> AgnosticUI as an <code>npm</code> package. Alternatively, you can use the <strong>CLI for complete control, AI/LLM visibility, and full code ownership</strong>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> init</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> --framework</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> FRAMEWORK</span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;"> # react, vue, lit, svelte, etc.</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> add</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> IconButtonFx</span></span></code></pre></div><p>The CLI copies source code directly into your project, giving you full visibility and control. After running <code>npx ag add</code>, you&#39;ll receive exact import instructions.</p></div><details class="details custom-block"><summary>Vue</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    fx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;pulse&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    fx-ease</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;spring-md&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    variant</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Like&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">Heart</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> lang</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;ts&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { defineComponent } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;vue&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { VueIconButtonFx } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/icon-button-fx/vue&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { Heart } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;lucide-vue-next&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> defineComponent</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">({</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  components: { VueIconButtonFx, Heart }</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">,</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">})</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><details class="details custom-block"><summary>React</summary><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { ReactIconButtonFx } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/icon-button-fx/react&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { Heart } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;lucide-react&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> function</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> Example</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">() </span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  return</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactIconButtonFx</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      fx</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;pulse&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      fxEase</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;spring-md&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      variant</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      label</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Like&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">Heart</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactIconButtonFx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  );</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div></details><details class="details custom-block"><summary>Lit (Web Components)</summary><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;module&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  import</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/icon-button-fx&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { createElement } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;lucide&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { Heart } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;lucide&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> iconButtonFx</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> document.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">querySelector</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;ag-icon-button-fx&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  iconButtonFx.icon </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> createElement</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(Heart);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-icon-button-fx</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  fx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;pulse&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  fx-ease</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;spring-md&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  variant</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Like&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-icon-button-fx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><h2 id="available-effects" tabindex="-1">Available Effects <a class="header-anchor" href="#available-effects" aria-label="Permalink to &quot;Available Effects&quot;">​</a></h2><h3 id="hover-effects" tabindex="-1">Hover Effects <a class="header-anchor" href="#hover-effects" aria-label="Permalink to &quot;Hover Effects&quot;">​</a></h3><ul><li><strong>bounce</strong> - Vertical pop animation</li><li><strong>pulse</strong> - Scale grow effect</li><li><strong>jelly</strong> - Squash and stretch animation</li><li><strong>grow</strong> - Scale up</li><li><strong>shrink</strong> - Scale down</li><li><strong>push</strong> - Press down effect</li><li><strong>wobble</strong> - Rotate wobble</li><li><strong>shake</strong> - Horizontal shake</li></ul><h3 id="click-active-effects" tabindex="-1">Click/Active Effects <a class="header-anchor" href="#click-active-effects" aria-label="Permalink to &quot;Click/Active Effects&quot;">​</a></h3><ul><li><strong>press-pop</strong> - Quick press animation</li></ul><h3 id="mount-effects" tabindex="-1">Mount Effects <a class="header-anchor" href="#mount-effects" aria-label="Permalink to &quot;Mount Effects&quot;">​</a></h3><ul><li><strong>slide-in</strong> - Entrance animation</li></ul><h3 id="composite-effects" tabindex="-1">Composite Effects <a class="header-anchor" href="#composite-effects" aria-label="Permalink to &quot;Composite Effects&quot;">​</a></h3><ul><li><strong>pulse-wobble</strong> - Combines pulse and wobble effects sequentially. For this effect it&#39;s recommended to use a slower <code>fx-speed</code>.</li></ul><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><h3 id="fx-props" tabindex="-1">FX Props <a class="header-anchor" href="#fx-props" aria-label="Permalink to &quot;FX Props&quot;">​</a></h3><table class="ag-table ag-table--striped"><thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>fx</code></td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>Effect name to apply</td></tr><tr><td><code>fxSpeed</code></td><td><code>&#39;xs&#39; | &#39;sm&#39; | &#39;md&#39; | &#39;lg&#39; | &#39;xl&#39;</code></td><td><code>&#39;md&#39;</code></td><td>Animation duration speed</td></tr><tr><td><code>fxEase</code></td><td><code>&#39;ease&#39; | &#39;ease-in&#39; | &#39;ease-out&#39; | &#39;ease-in-out&#39; | &#39;bounce&#39; | &#39;spring-sm&#39; | &#39;spring-md&#39; | &#39;spring-lg&#39;</code></td><td><code>&#39;ease&#39;</code></td><td>Animation easing function</td></tr><tr><td><code>fxDisabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Disable FX effects entirely</td></tr></tbody></table><h3 id="iconbutton-props" tabindex="-1">IconButton Props <a class="header-anchor" href="#iconbutton-props" aria-label="Permalink to &quot;IconButton Props&quot;">​</a></h3><table class="ag-table ag-table--striped"><thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>label</code></td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>Accessible label for the icon button (required)</td></tr><tr><td><code>variant</code></td><td><code>&#39;primary&#39; | &#39;secondary&#39; | &#39;success&#39; | &#39;warning&#39; | &#39;danger&#39; | &#39;monochrome&#39; | &#39;ghost&#39;</code></td><td><code>&#39;ghost&#39;</code></td><td>Visual style variant</td></tr><tr><td><code>size</code></td><td><code>&#39;xs&#39; | &#39;sm&#39; | &#39;md&#39; | &#39;lg&#39; | &#39;xl&#39;</code></td><td><code>&#39;md&#39;</code></td><td>Size of the button</td></tr><tr><td><code>type</code></td><td><code>&#39;button&#39; | &#39;submit&#39; | &#39;reset&#39;</code></td><td><code>&#39;button&#39;</code></td><td>Button type for form behavior</td></tr><tr><td><code>disabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Disables the button</td></tr><tr><td><code>pressed</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Toggles aria-pressed state</td></tr><tr><td><code>loading</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Shows loading state</td></tr><tr><td><code>unicode</code></td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>Unicode character to display as icon</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><table class="ag-table ag-table--striped"><thead><tr><th>Event</th><th>Payload</th><th>Description</th></tr></thead><tbody><tr><td><code>icon-button-click</code></td><td><code>IconButtonClickEvent</code></td><td>Fired when icon button is clicked</td></tr><tr><td><code>icon-button-activate</code></td><td><code>IconButtonActivateEvent</code></td><td>Fired when icon button is activated</td></tr></tbody></table><h2 id="examples-1" tabindex="-1">Examples <a class="header-anchor" href="#examples-1" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><h3 id="basic-effects" tabindex="-1">Basic Effects <a class="header-anchor" href="#basic-effects" aria-label="Permalink to &quot;Basic Effects&quot;">​</a></h3><details class="details custom-block"><summary>Vue</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> fx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;pulse&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> variant</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Like&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">Heart</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> fx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;bounce&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> variant</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;success&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Download&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">Download</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> fx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;wobble&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> variant</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;warning&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Notifications&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">Bell</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> fx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;shake&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> variant</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;danger&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Delete&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">Trash2</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> lang</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;ts&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { defineComponent } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;vue&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { VueIconButtonFx } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/icon-button-fx/vue&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { Heart, Download, Bell, Trash2 } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;lucide-vue-next&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> defineComponent</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">({</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  components: { VueIconButtonFx, Heart, Download, Bell, Trash2 }</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">,</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">})</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><details class="details custom-block"><summary>React</summary><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { ReactIconButtonFx } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/icon-button-fx/react&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { Heart, Download, Bell, Trash2 } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;lucide-react&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> function</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> Example</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">() </span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  return</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactIconButtonFx</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> fx</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;pulse&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> variant</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Like&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">Heart</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactIconButtonFx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactIconButtonFx</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> fx</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;bounce&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> variant</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;success&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Download&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">Download</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactIconButtonFx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactIconButtonFx</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> fx</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;wobble&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> variant</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;warning&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Notifications&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">Bell</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactIconButtonFx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactIconButtonFx</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> fx</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;shake&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> variant</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;danger&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Delete&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">Trash2</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactIconButtonFx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  );</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div></details><h3 id="speed-variations" tabindex="-1">Speed Variations <a class="header-anchor" href="#speed-variations" aria-label="Permalink to &quot;Speed Variations&quot;">​</a></h3><p>Control animation speed with the <code>fxSpeed</code> prop:</p><details class="details custom-block"><summary>Vue</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> fx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;pulse&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> fx-speed</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;xs&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> variant</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Extra fast&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;Heart /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> fx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;pulse&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> fx-speed</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;sm&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> variant</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Fast&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;Heart /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> fx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;pulse&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> fx-speed</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;md&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> variant</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Medium&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;Heart /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> fx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;pulse&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> fx-speed</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;lg&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> variant</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Slow&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;Heart /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> fx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;pulse&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> fx-speed</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;xl&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> variant</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Extra slow&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;Heart /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><h3 id="easing-functions" tabindex="-1">Easing Functions <a class="header-anchor" href="#easing-functions" aria-label="Permalink to &quot;Easing Functions&quot;">​</a></h3><p>Customize the animation feel with different easing functions:</p><details class="details custom-block"><summary>Vue</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  fx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;bounce&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  fx-ease</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;spring-sm&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  variant</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Spring Small&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;Heart /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  fx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;bounce&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  fx-ease</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;spring-md&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  variant</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Spring Medium&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;Heart /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  fx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;bounce&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  fx-ease</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;spring-lg&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  variant</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Spring Large&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;Heart /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> fx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;bounce&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> fx-ease</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;bounce&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> variant</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Bounce&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;Heart /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><h3 id="composite-effect-pulse-wobble" tabindex="-1">Composite Effect - Pulse Wobble <a class="header-anchor" href="#composite-effect-pulse-wobble" aria-label="Permalink to &quot;Composite Effect - Pulse Wobble&quot;">​</a></h3><p>The special <code>pulse-wobble</code> effect creates a two-stage animation:</p><details class="details custom-block"><summary>Vue</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> fx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;pulse-wobble&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> variant</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Favorite&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;Heart /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><details class="details custom-block"><summary>React</summary><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactIconButtonFx</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> fx</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;pulse-wobble&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> variant</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Favorite&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">Heart</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactIconButtonFx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><details class="details custom-block"><summary>Lit (Web Components)</summary><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;module&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  import</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/icon-button-fx&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { createElement } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;lucide&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { Heart } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;lucide&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> iconButtonFx</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> document.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">querySelector</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;#pulse-wobble&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  iconButtonFx.icon </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> createElement</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(Heart);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-icon-button-fx</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  id</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;pulse-wobble&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  fx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;pulse-wobble&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  variant</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Favorite&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-icon-button-fx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><h3 id="icon-scaling-for-small-sizes" tabindex="-1">Icon Scaling for Small Sizes <a class="header-anchor" href="#icon-scaling-for-small-sizes" aria-label="Permalink to &quot;Icon Scaling for Small Sizes&quot;">​</a></h3><div class="warning custom-block"><p class="custom-block-title">Important: Icon Scaling</p><p>For <code>xs</code> and <code>sm</code> button sizes, you need to ensure icons scale properly to fill the button&#39;s icon container.</p></div><details class="details custom-block"><summary>Vue</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> fx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;pulse&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> size</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;xs&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> variant</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Extra small&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">Heart</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> :size</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;12&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> fx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;pulse&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> size</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;sm&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> variant</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Small&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">Heart</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> :size</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;16&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> fx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;pulse&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> size</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;md&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> variant</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Medium&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">Heart</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> fx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;pulse&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> size</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;lg&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> variant</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Large&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">Heart</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> fx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;pulse&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> size</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;xl&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> variant</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Extra large&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">Heart</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><details class="details custom-block"><summary>React</summary><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { ReactIconButtonFx } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/icon-button-fx/react&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { Heart } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;lucide-react&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> function</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> Example</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">() </span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  return</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactIconButtonFx</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        fx</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;pulse&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        size</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;xs&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        variant</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        label</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Extra small&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">Heart</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> width</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;100%&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> height</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;100%&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactIconButtonFx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactIconButtonFx</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> fx</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;pulse&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> size</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;sm&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> variant</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Small&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">Heart</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> width</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;100%&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> height</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;100%&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactIconButtonFx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactIconButtonFx</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> fx</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;pulse&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> size</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;md&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> variant</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Medium&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">Heart</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactIconButtonFx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactIconButtonFx</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> fx</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;pulse&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> size</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;lg&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> variant</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Large&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">Heart</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactIconButtonFx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactIconButtonFx</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        fx</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;pulse&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        size</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;xl&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        variant</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        label</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Extra large&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">Heart</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactIconButtonFx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  );</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div></details><details class="details custom-block"><summary>Lit (Web Components)</summary><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;module&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  import</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/icon-button-fx&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { createElement } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;lucide&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { Heart } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;lucide&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> iconXs</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> document.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">querySelector</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;#icon-xs&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  iconXs.icon </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> createElement</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(Heart, { width: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;100%&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, height: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;100%&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> iconSm</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> document.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">querySelector</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;#icon-sm&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  iconSm.icon </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> createElement</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(Heart, { width: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;100%&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, height: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;100%&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> iconMd</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> document.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">querySelector</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;#icon-md&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  iconMd.icon </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> createElement</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(Heart);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-icon-button-fx</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  id</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;icon-xs&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  fx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;pulse&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  size</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;xs&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  variant</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Extra small&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-icon-button-fx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-icon-button-fx</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  id</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;icon-sm&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  fx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;pulse&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  size</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;sm&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  variant</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Small&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-icon-button-fx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-icon-button-fx</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  id</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;icon-md&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  fx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;pulse&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  size</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;md&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  variant</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Medium&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-icon-button-fx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><h3 id="common-use-cases" tabindex="-1">Common Use Cases <a class="header-anchor" href="#common-use-cases" aria-label="Permalink to &quot;Common Use Cases&quot;">​</a></h3><details class="details custom-block"><summary>Vue</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> fx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;grow&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> variant</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;ghost&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Menu&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">Menu</span><span style="--shiki-light:#6E011A;--shiki-light-font-style:italic;--shiki-dark:#FFB1AF;--shiki-dark-font-style:italic;"> /</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> fx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;grow&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> variant</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;ghost&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Home&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">Home</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> fx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;grow&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> variant</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;ghost&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Search&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">Search</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> fx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;pulse&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> variant</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Edit&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">Edit</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> fx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;shake&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> variant</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;danger&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Delete&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">Trash2</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> fx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;bounce&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> variant</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;success&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Bookmark&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">Bookmark</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> fx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;wobble&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> variant</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;warning&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Notifications&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">Bell</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    fx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;pulse-wobble&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    variant</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;danger&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Important notification&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">Bell</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> fx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;pulse&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> variant</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;ghost&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Like&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ThumbsUp</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> fx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;bounce&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> variant</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;ghost&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Comment&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">MessageCircle</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> fx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;grow&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> variant</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Send&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">Send</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> lang</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;ts&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { defineComponent } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;vue&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { VueIconButtonFx } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/icon-button-fx/vue&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  Menu,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  Home,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  Search,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  Edit,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  Trash2,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  Bookmark,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  Bell,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  ThumbsUp,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  MessageCircle,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  Send,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">} </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;lucide-vue-next&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> defineComponent</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">({</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  components: {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    VueIconButtonFx,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    Menu,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    Home,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    Search,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    Edit,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    Trash2,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    Bookmark,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    Bell,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    ThumbsUp,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    MessageCircle,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    Send,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  }</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">,</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">})</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><h3 id="disabling-effects" tabindex="-1">Disabling Effects <a class="header-anchor" href="#disabling-effects" aria-label="Permalink to &quot;Disabling Effects&quot;">​</a></h3><p>You can disable effects while keeping the button functional:</p><details class="details custom-block"><summary>Vue</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  fx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;pulse&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  :</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">fx-disabled</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">true</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  variant</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;No animation&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;Heart /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueIconButtonFx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><details class="details custom-block"><summary>React</summary><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactIconButtonFx</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  fx</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;pulse&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  fxDisabled</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">true</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  variant</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  label</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;No animation&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">Heart</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactIconButtonFx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><h2 id="accessibility" tabindex="-1">Accessibility <a class="header-anchor" href="#accessibility" aria-label="Permalink to &quot;Accessibility&quot;">​</a></h2><ul><li><strong>Required Label</strong>: The <code>label</code> prop is required for screen reader accessibility. It provides context for users who cannot see the icon.</li><li><strong>Reduced Motion</strong>: All effects automatically respect the <code>prefers-reduced-motion</code> media query. When users have reduced motion enabled in their OS settings, animations are disabled.</li><li><strong>Keyboard Navigation</strong>: IconButtonFx maintains full keyboard accessibility with proper focus states.</li><li><strong>Screen Readers</strong>: The component uses semantic HTML button elements with proper <code>aria-label</code> attributes that work correctly with assistive technologies.</li><li><strong>Focus Indicators</strong>: Clear focus states are maintained even with effects applied.</li><li><strong>Color Contrast</strong>: All button variants meet WCAG AA contrast requirements.</li><li><strong>Icon-only Buttons</strong>: Since these are icon-only buttons, the <code>label</code> prop is essential for accessibility. Never omit it.</li></ul><h2 id="best-practices" tabindex="-1">Best Practices <a class="header-anchor" href="#best-practices" aria-label="Permalink to &quot;Best Practices&quot;">​</a></h2><ol><li><strong>Always Provide Labels</strong>: Never omit the <code>label</code> prop. It&#39;s critical for screen reader users to understand the button&#39;s purpose.</li><li><strong>Choose Appropriate Effects</strong>: Match effects to button purpose: <ul><li><code>shake</code> for destructive actions (delete, remove)</li><li><code>pulse</code> or <code>pulse-wobble</code> for important actions (favorite, like)</li><li><code>wobble</code> for notifications and alerts</li><li><code>bounce</code> for positive actions (download, bookmark)</li><li><code>grow</code> for navigation and general interactions</li></ul></li><li><strong>Icon Scaling</strong>: For <code>xs</code> and <code>sm</code> button sizes, always specify icon dimensions to ensure proper scaling within the button container.</li><li><strong>Performance</strong>: Limit the number of animated icon buttons on a single page for optimal performance.</li><li><strong>Consistency</strong>: Use consistent effects across similar actions in your application.</li><li><strong>Subtlety</strong>: Start with medium speeds and springs; adjust based on user testing.</li><li><strong>Testing</strong>: Always test with <code>prefers-reduced-motion</code> enabled to ensure graceful degradation.</li></ol><h2 id="browser-support" tabindex="-1">Browser Support <a class="header-anchor" href="#browser-support" aria-label="Permalink to &quot;Browser Support&quot;">​</a></h2><p>IconButtonFx uses modern CSS features and is supported in all evergreen browsers:</p><ul><li>Chrome/Edge 90+</li><li>Firefox 88+</li><li>Safari 14+</li></ul><p>Animations gracefully degrade in older browsers while maintaining functionality.</p>`,55))]))}});export{zn as __pageData,Nn as default};
