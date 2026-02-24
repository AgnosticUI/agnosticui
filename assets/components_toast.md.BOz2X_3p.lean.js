import{C as H,A as Q}from"./chunks/AlphaWarning.yC7ZufpQ.js";import{i as j,z as m,a as M,E as X,x as D}from"./chunks/Button.CFkPNK98.js";import{n as Y}from"./chunks/state-CovhUvdr.DWhhlYib.js";import"./chunks/Alert.CU4CH75e.js";import"./chunks/CloseButton.BYeeZuwt.js";import{d as W,p as d,c as S,o as A,r as Z,K as J,_,C as w,j as i,ae as O,G as a,w as n,a as e,k as E}from"./chunks/framework.NAAYCHZu.js";import{S as ss}from"./chunks/sparkles.DTErT1ti.js";import{I as ts}from"./chunks/info.CjSjj6Py.js";import{C as os,a as as}from"./chunks/circle-x.wfdRs8_1.js";import{T as ns}from"./chunks/triangle-alert.DhPqtk12.js";import{F as es}from"./chunks/FrameworkExample.Cm-JbUj-.js";import"./chunks/Icon.DjToxxjJ.js";import"./chunks/createLucideIcon.B61Wqv9x.js";import"./chunks/sdk.m.DhOmSlC9.js";var is=Object.defineProperty,k=(t,s,r,g)=>{for(var p=void 0,c=t.length-1,h;c>=0;c--)(h=t[c])&&(p=h(s,r,p)||p);return p&&is(s,r,p),p};const G=class extends M{constructor(){super(),this._isHovered=!1,this._autoDismissTimer=null,this._timerStartTime=null,this._remainingTime=null,this._handleCloseButtonClick=()=>{this._clearTimer(),this.open=!1},this._handleMouseEnter=()=>{this.pauseOnHover&&this.autoDismiss&&(this._isHovered=!0,this._pauseTimer())},this._handleMouseLeave=()=>{this.pauseOnHover&&this.autoDismiss&&(this._isHovered=!1,this._resumeTimer())},this._handleKeydown=s=>{s.key==="Escape"&&this.showCloseButton&&(s.preventDefault(),this._handleCloseButtonClick())},this.open=!1,this.type="default",this.position="top-end",this.duration=5e3,this.autoDismiss=!0,this.showCloseButton=!0,this.pauseOnHover=!0,this.bordered=!1,this.rounded=!0,this.borderedLeft=!1}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this._clearTimer()}willUpdate(s){var r,g;if(s.has("open")){const p=s.get("open");if(this.open&&!p){const c=new CustomEvent("toast-open",{bubbles:!0,composed:!0});this.dispatchEvent(c),(r=this.onToastOpen)==null||r.call(this,c),this.autoDismiss&&this.duration>0&&this._startTimer()}else if(!this.open&&p){this._clearTimer();const c=new CustomEvent("toast-close",{bubbles:!0,composed:!0});this.dispatchEvent(c),(g=this.onToastClose)==null||g.call(this,c)}}}_startTimer(){this._clearTimer(),this._timerStartTime=Date.now(),this._remainingTime=this.duration,this._autoDismissTimer=window.setTimeout(()=>{this._handleAutoDismiss()},this.duration)}_pauseTimer(){if(!this._autoDismissTimer||!this._timerStartTime)return;const s=Date.now()-this._timerStartTime;this._remainingTime=Math.max(0,this.duration-s),this._clearTimer()}_resumeTimer(){!this.autoDismiss||this._remainingTime===null||(this._timerStartTime=Date.now(),this._autoDismissTimer=window.setTimeout(()=>{this._handleAutoDismiss()},this._remainingTime))}_clearTimer(){this._autoDismissTimer&&(window.clearTimeout(this._autoDismissTimer),this._autoDismissTimer=null,this._timerStartTime=null)}_handleAutoDismiss(){var r;const s=new CustomEvent("toast-dismiss",{bubbles:!0,composed:!0});this.dispatchEvent(s),(r=this.onToastDismiss)==null||r.call(this,s),this.open=!1}_isUrgentType(){return this.type==="error"||this.type==="danger"||this.type==="warning"}render(){const s=this._isUrgentType()?"alert":"status",r=this._isUrgentType()?"assertive":"polite";return D`
      <div
        class="toast-container"
        part="ag-toast"
        role="${s}"
        aria-live="${r}"
        aria-atomic="true"
        @mouseenter=${this._handleMouseEnter}
        @mouseleave=${this._handleMouseLeave}
        @keydown=${this._handleKeydown}
      >
        <ag-alert
          part="ag-toast-content"
          .variant=${this.type}
          .bordered=${this.bordered}
          .rounded=${this.rounded}
          .borderedLeft=${this.borderedLeft}
        >
          <div class="toast-inner-layout">
            <div class="toast-content">
              <slot></slot>
            </div>
            ${this.showCloseButton?D`
              <ag-close-button
                size="sm"
                .variant=${this.type}
                label="Dismiss notification"
                @close-button-click=${this._handleCloseButtonClick}
              ></ag-close-button>
            `:X}
          </div>
        </ag-alert>
      </div>
    `}};G.styles=j`
    :host {
      display: block;
      visibility: hidden;
      position: fixed;
      z-index: var(--ag-z-index-toast, 1000);
      pointer-events: none;
    }

    :host([open]) {
      visibility: visible;
      pointer-events: auto;
    }

    /* Edge positions - full width/height */
    :host([position="top"]) {
      top: var(--ag-space-4);
      inset-inline: 0;
      width: 100%;
    }

    :host([position="bottom"]) {
      bottom: var(--ag-space-4);
      inset-inline: 0;
      width: 100%;
    }

    :host([position="start"]) {
      top: 0;
      inset-inline-start: var(--ag-space-4);
      bottom: 0;
      height: 100%;
    }

    :host([position="end"]) {
      top: 0;
      inset-inline-end: var(--ag-space-4);
      bottom: 0;
      height: 100%;
    }

    /* Corner positions - constrained size */
    :host([position="top-start"]) {
      top: var(--ag-space-4);
      inset-inline-start: var(--ag-space-4);
    }

    :host([position="top-end"]) {
      top: var(--ag-space-4);
      inset-inline-end: var(--ag-space-4);
    }

    :host([position="bottom-start"]) {
      bottom: var(--ag-space-4);
      inset-inline-start: var(--ag-space-4);
    }

    :host([position="bottom-end"]) {
      bottom: var(--ag-space-4);
      inset-inline-end: var(--ag-space-4);
    }

    /* Toast container with animations */
    .toast-container {
      position: relative;
      opacity: 0;
      transform: translateY(-100%);
      transition: opacity var(--ag-motion-fast) ease-out,
                  transform var(--ag-motion-fast) ease-out;
    }

    :host([open]) .toast-container {
      opacity: 1;
      transform: translateY(0);
    }

    /* Transform variations based on position */
    :host([position="bottom"]) .toast-container,
    :host([position="bottom-start"]) .toast-container,
    :host([position="bottom-end"]) .toast-container {
      transform: translateY(100%);
    }

    :host([position="start"]) .toast-container {
      transform: translateX(-100%);
    }

    :host([position="end"]) .toast-container {
      transform: translateX(100%);
    }

    /* RTL Support - flip transform directions for start/end positions */
    :host-context([dir="rtl"]):host([position="start"]) .toast-container {
      transform: translateX(100%);
    }

    :host-context([dir="rtl"]):host([position="end"]) .toast-container {
      transform: translateX(-100%);
    }

    :host([position="bottom"][open]) .toast-container,
    :host([position="bottom-start"][open]) .toast-container,
    :host([position="bottom-end"][open]) .toast-container,
    :host([position="start"][open]) .toast-container,
    :host([position="end"][open]) .toast-container {
      transform: translateX(0) translateY(0);
    }

    /* Size constraints for corner positions */
    :host([position="top-start"]) .toast-container,
    :host([position="top-end"]) .toast-container,
    :host([position="bottom-start"]) .toast-container,
    :host([position="bottom-end"]) .toast-container {
      max-inline-size: 400px;
      max-block-size: 200px;
    }

    /* Inner layout for content and close button */
    .toast-inner-layout {
      display: flex;
      align-items: center;
      gap: var(--ag-space-3);
    }

    .toast-content {
      flex: 1;
      min-width: 0; /* Allows content to shrink and wrap */
      display: flex;
      align-items: center;
      gap: var(--ag-space-2);
    }

    ag-close-button {
      flex-shrink: 0;
    }

    @media (prefers-reduced-motion: reduce) {
      .toast-container {
        transition: opacity var(--ag-motion-fast) ease;
        transform: none !important;
      }

      :host([open]) .toast-container {
        transform: none !important;
      }
    }
  `;let u=G;k([m({type:Boolean,reflect:!0})],u.prototype,"open");k([m({type:String})],u.prototype,"type");k([m({type:String,reflect:!0})],u.prototype,"position");k([m({type:Number})],u.prototype,"duration");k([m({type:Boolean})],u.prototype,"autoDismiss");k([m({type:Boolean})],u.prototype,"showCloseButton");k([m({type:Boolean})],u.prototype,"pauseOnHover");k([m({type:Boolean})],u.prototype,"bordered");k([m({type:Boolean})],u.prototype,"rounded");k([m({type:Boolean})],u.prototype,"borderedLeft");k([m({attribute:!1})],u.prototype,"onToastOpen");k([m({attribute:!1})],u.prototype,"onToastClose");k([m({attribute:!1})],u.prototype,"onToastDismiss");k([Y()],u.prototype,"_isHovered");customElements.get("ag-toast")||customElements.define("ag-toast",u);const ls=[".open",".autoDismiss",".showCloseButton",".pauseOnHover",".bordered",".rounded",".borderedLeft","type","position","duration"],rs=W({__name:"VueToast",props:{open:{type:Boolean,default:!1},type:{default:"default"},position:{default:"top-end"},duration:{default:5e3},autoDismiss:{type:Boolean,default:!0},showCloseButton:{type:Boolean,default:!0},pauseOnHover:{type:Boolean,default:!0},bordered:{type:Boolean,default:!1},rounded:{type:Boolean,default:!0},borderedLeft:{type:Boolean,default:!1},onToastOpen:{},onToastClose:{},onToastDismiss:{}},emits:["toast-open","toast-close","toast-dismiss","update:open"],setup(t,{emit:s}){const r=s,g=d(),p=l=>{r("toast-open",l),r("update:open",!0)},c=l=>{r("toast-close",l),r("update:open",!1)},h=l=>{r("toast-dismiss",l),r("update:open",!1)};return(l,F)=>(A(),S("ag-toast",J({ref_key:"toastRef",ref:g,".open":t.open,".autoDismiss":t.autoDismiss,".showCloseButton":t.showCloseButton,".pauseOnHover":t.pauseOnHover,".bordered":t.bordered,".rounded":t.rounded,".borderedLeft":t.borderedLeft,type:t.type,position:t.position,duration:t.duration,onToastOpen:p,onToastClose:c,onToastDismiss:h},l.$attrs),[Z(l.$slots,"default")],48,ls))}}),hs=W({name:"ToastExamples",components:{VueToast:rs,AlertTriangle:ns,AlertCircle:H,XCircle:as,CheckCircle:os,Info:ts,Sparkles:ss},setup(){const t=d(!1),s=d(!1),r=d(!1),g=d(!1),p=d(!1),c=d(!1),h=d(!1),l=d(!1),F=d(!1),f=d(!1),T=d(!1),y=d(!1),v=d(!1),b=d(!1),o=d(!1),$=d(!1),N=d(!1),R=d(!1),I=d(!1),x=d(!1),V=d(!1),P=d(!1),z=d(!1),q=d(!1),K=d(!1),L={showDefault:t,showSuccess:s,showInfo:r,showPrimary:g,showWarning:p,showError:c,showDanger:h,showMonochrome:l,showTopStart:F,showTop:f,showTopEnd:T,showBottomStart:y,showBottom:v,showBottomEnd:b,showBordered:o,showBorderedLeft:$,showNotRounded:N,showQuickDismiss:R,showAutoDismiss:I,showNoAutoDismiss:x,showNoPause:V,showNoCloseButton:P,showIconSuccess:z,showIconInfo:q,showCustomGradient:K};let B=null;function U(C){B&&B!==C&&(L[B].value=!1),L[C].value=!0,B=C}return{showDefault:t,showSuccess:s,showInfo:r,showPrimary:g,showWarning:p,showError:c,showDanger:h,showMonochrome:l,showTopStart:F,showTop:f,showTopEnd:T,showBottomStart:y,showBottom:v,showBottomEnd:b,showBordered:o,showBorderedLeft:$,showNotRounded:N,showQuickDismiss:R,showAutoDismiss:I,showNoAutoDismiss:x,showNoPause:V,showNoCloseButton:P,showIconSuccess:z,showIconInfo:q,showCustomGradient:K,showToast:U}}}),ds={class:"stacked flex-align-start mbe4"},ps={class:"flex-inline items-center"},cs={class:"flex-inline items-center"},us={class:"flex-inline items-center"},ks={class:"stacked flex-align-start mbe4"},ms={class:"stacked flex-align-start mbe4"},gs={class:"flex-inline items-center"},ws={class:"stacked flex-align-start mbe4"},Fs={class:"stacked flex-align-start mbe4"},ys={class:"stacked flex-align-start mbe4"},fs={class:"flex-inline items-center"},Ts={class:"flex-inline items-center"},vs={class:"stacked flex-align-start mbe4"},bs={class:"flex-inline items-center"};function Bs(t,s,r,g,p,c){const h=w("VueButton"),l=w("VueToast"),F=w("AlertTriangle"),f=w("AlertCircle"),T=w("XCircle"),y=w("CheckCircle"),v=w("Info"),b=w("Sparkles");return A(),S("section",null,[s[125]||(s[125]=i("div",{class:"mbe4 guidance-note"},[i("h3",null,"Demo Pattern: Single Toast Display"),i("p",null," This demo automatically dismisses any visible toast before showing a new one. This prevents toast overlap and is the recommended pattern for most applications. See the documentation below for alternative approaches if you need multiple simultaneous toasts. ")],-1)),s[126]||(s[126]=i("div",{class:"mbe4"},[i("h2",null,"Toast Types")],-1)),i("div",ds,[a(h,{class:"demo-button",variant:"primary",size:"md",shape:"rounded",onClick:s[0]||(s[0]=o=>t.showToast("showDefault"))},{default:n(()=>[...s[75]||(s[75]=[e(" Show Default Toast ",-1)])]),_:1}),a(l,{open:t.showDefault,"onUpdate:open":s[1]||(s[1]=o=>t.showDefault=o),onToastClose:s[2]||(s[2]=o=>t.showDefault=!1)},{default:n(()=>[...s[76]||(s[76]=[e(" Default toast notification ",-1)])]),_:1},8,["open"]),a(h,{class:"demo-button",variant:"primary",size:"md",shape:"rounded",onClick:s[3]||(s[3]=o=>t.showToast("showSuccess"))},{default:n(()=>[...s[77]||(s[77]=[e(" Show Success Toast ",-1)])]),_:1}),a(l,{open:t.showSuccess,"onUpdate:open":s[4]||(s[4]=o=>t.showSuccess=o),type:"success",onToastClose:s[5]||(s[5]=o=>t.showSuccess=!1)},{default:n(()=>[...s[78]||(s[78]=[e(" Operation completed successfully! ",-1)])]),_:1},8,["open"]),a(h,{class:"demo-button",variant:"primary",size:"md",shape:"rounded",onClick:s[6]||(s[6]=o=>t.showToast("showInfo"))},{default:n(()=>[...s[79]||(s[79]=[e(" Show Info Toast ",-1)])]),_:1}),a(l,{open:t.showInfo,"onUpdate:open":s[7]||(s[7]=o=>t.showInfo=o),type:"info",onToastClose:s[8]||(s[8]=o=>t.showInfo=!1)},{default:n(()=>[...s[80]||(s[80]=[e(" New message received! ",-1)])]),_:1},8,["open"]),a(h,{class:"demo-button",variant:"primary",size:"md",shape:"rounded",onClick:s[9]||(s[9]=o=>t.showToast("showPrimary"))},{default:n(()=>[...s[81]||(s[81]=[e(" Show Primary Toast ",-1)])]),_:1}),a(l,{open:t.showPrimary,"onUpdate:open":s[10]||(s[10]=o=>t.showPrimary=o),type:"primary",onToastClose:s[11]||(s[11]=o=>t.showPrimary=!1)},{default:n(()=>[...s[82]||(s[82]=[e(" New feature available! ",-1)])]),_:1},8,["open"]),a(h,{class:"demo-button",variant:"primary",size:"md",shape:"rounded",onClick:s[12]||(s[12]=o=>t.showToast("showWarning"))},{default:n(()=>[...s[83]||(s[83]=[e(" Show Warning Toast ",-1)])]),_:1}),a(l,{open:t.showWarning,"onUpdate:open":s[13]||(s[13]=o=>t.showWarning=o),type:"warning",onToastClose:s[14]||(s[14]=o=>t.showWarning=!1)},{default:n(()=>[i("div",ps,[a(F,{size:20,class:"mie3"}),s[84]||(s[84]=e(" Warning: This action cannot be undone. ",-1))])]),_:1},8,["open"]),a(h,{class:"demo-button",variant:"primary",size:"md",shape:"rounded",onClick:s[15]||(s[15]=o=>t.showToast("showError"))},{default:n(()=>[...s[85]||(s[85]=[e(" Show Error Toast ",-1)])]),_:1}),a(l,{open:t.showError,"onUpdate:open":s[16]||(s[16]=o=>t.showError=o),type:"error",onToastClose:s[17]||(s[17]=o=>t.showError=!1)},{default:n(()=>[i("div",cs,[a(f,{size:20,class:"mie3"}),s[86]||(s[86]=e(" An error occurred. Please try again. ",-1))])]),_:1},8,["open"]),a(h,{class:"demo-button",variant:"primary",size:"md",shape:"rounded",onClick:s[18]||(s[18]=o=>t.showToast("showDanger"))},{default:n(()=>[...s[87]||(s[87]=[e(" Show Danger Toast ",-1)])]),_:1}),a(l,{open:t.showDanger,"onUpdate:open":s[19]||(s[19]=o=>t.showDanger=o),type:"danger",onToastClose:s[20]||(s[20]=o=>t.showDanger=!1)},{default:n(()=>[i("div",us,[a(T,{size:20,class:"mie3"}),s[88]||(s[88]=e(" Critical error detected! ",-1))])]),_:1},8,["open"]),a(h,{class:"demo-button",variant:"primary",size:"md",shape:"rounded",onClick:s[21]||(s[21]=o=>t.showToast("showMonochrome"))},{default:n(()=>[...s[89]||(s[89]=[e(" Show Monochrome Toast ",-1)])]),_:1}),a(l,{open:t.showMonochrome,"onUpdate:open":s[22]||(s[22]=o=>t.showMonochrome=o),type:"monochrome",onToastClose:s[23]||(s[23]=o=>t.showMonochrome=!1)},{default:n(()=>[...s[90]||(s[90]=[i("div",{class:"flex-inline items-center"}," Modern monochrome notification ",-1)])]),_:1},8,["open"])]),s[127]||(s[127]=i("div",{class:"mbe4"},[i("h2",null,"Positions")],-1)),i("div",ks,[a(h,{class:"demo-button",variant:"primary",size:"md",shape:"rounded",onClick:s[24]||(s[24]=o=>t.showToast("showTopStart"))},{default:n(()=>[...s[91]||(s[91]=[e(" Top Start ",-1)])]),_:1}),a(l,{open:t.showTopStart,"onUpdate:open":s[25]||(s[25]=o=>t.showTopStart=o),position:"top-start",onToastClose:s[26]||(s[26]=o=>t.showTopStart=!1)},{default:n(()=>[...s[92]||(s[92]=[e(" Toast at top-start ",-1)])]),_:1},8,["open"]),a(h,{class:"demo-button",variant:"primary",size:"md",shape:"rounded",onClick:s[27]||(s[27]=o=>t.showToast("showTop"))},{default:n(()=>[...s[93]||(s[93]=[e(" Top (Full Width) ",-1)])]),_:1}),a(l,{open:t.showTop,"onUpdate:open":s[28]||(s[28]=o=>t.showTop=o),position:"top",onToastClose:s[29]||(s[29]=o=>t.showTop=!1)},{default:n(()=>[...s[94]||(s[94]=[e(" Toast at top (full width) ",-1)])]),_:1},8,["open"]),a(h,{class:"demo-button",variant:"primary",size:"md",shape:"rounded",onClick:s[30]||(s[30]=o=>t.showToast("showTopEnd"))},{default:n(()=>[...s[95]||(s[95]=[e(" Top End (Default) ",-1)])]),_:1}),a(l,{open:t.showTopEnd,"onUpdate:open":s[31]||(s[31]=o=>t.showTopEnd=o),position:"top-end",onToastClose:s[32]||(s[32]=o=>t.showTopEnd=!1)},{default:n(()=>[...s[96]||(s[96]=[e(" Toast at top-end (default) ",-1)])]),_:1},8,["open"]),a(h,{class:"demo-button",variant:"primary",size:"md",shape:"rounded",onClick:s[33]||(s[33]=o=>t.showToast("showBottomStart"))},{default:n(()=>[...s[97]||(s[97]=[e(" Bottom Start ",-1)])]),_:1}),a(l,{open:t.showBottomStart,"onUpdate:open":s[34]||(s[34]=o=>t.showBottomStart=o),position:"bottom-start",onToastClose:s[35]||(s[35]=o=>t.showBottomStart=!1)},{default:n(()=>[...s[98]||(s[98]=[e(" Toast at bottom-start ",-1)])]),_:1},8,["open"]),a(h,{class:"demo-button",variant:"primary",size:"md",shape:"rounded",onClick:s[36]||(s[36]=o=>t.showToast("showBottom"))},{default:n(()=>[...s[99]||(s[99]=[e(" Bottom (Full Width) ",-1)])]),_:1}),a(l,{open:t.showBottom,"onUpdate:open":s[37]||(s[37]=o=>t.showBottom=o),position:"bottom",onToastClose:s[38]||(s[38]=o=>t.showBottom=!1)},{default:n(()=>[...s[100]||(s[100]=[e(" Toast at bottom (full width) ",-1)])]),_:1},8,["open"]),a(h,{class:"demo-button",variant:"primary",size:"md",shape:"rounded",onClick:s[39]||(s[39]=o=>t.showToast("showBottomEnd"))},{default:n(()=>[...s[101]||(s[101]=[e(" Bottom End ",-1)])]),_:1}),a(l,{open:t.showBottomEnd,"onUpdate:open":s[40]||(s[40]=o=>t.showBottomEnd=o),position:"bottom-end",onToastClose:s[41]||(s[41]=o=>t.showBottomEnd=!1)},{default:n(()=>[...s[102]||(s[102]=[e(" Toast at bottom-end ",-1)])]),_:1},8,["open"])]),s[128]||(s[128]=i("div",{class:"mbe4"},[i("h2",null,"Border Styles")],-1)),i("div",ms,[a(h,{class:"demo-button",variant:"primary",size:"md",shape:"rounded",onClick:s[42]||(s[42]=o=>t.showToast("showBordered"))},{default:n(()=>[...s[103]||(s[103]=[e(" Bordered Toast ",-1)])]),_:1}),a(l,{open:t.showBordered,"onUpdate:open":s[43]||(s[43]=o=>t.showBordered=o),type:"info",bordered:"",onToastClose:s[44]||(s[44]=o=>t.showBordered=!1)},{default:n(()=>[...s[104]||(s[104]=[e(" Toast with border ",-1)])]),_:1},8,["open"]),a(h,{class:"demo-button",variant:"primary",size:"md",shape:"rounded",onClick:s[45]||(s[45]=o=>t.showToast("showBorderedLeft"))},{default:n(()=>[...s[105]||(s[105]=[e(" Left Border Toast ",-1)])]),_:1}),a(l,{open:t.showBorderedLeft,"onUpdate:open":s[46]||(s[46]=o=>t.showBorderedLeft=o),type:"success",borderedLeft:"",onToastClose:s[47]||(s[47]=o=>t.showBorderedLeft=!1)},{default:n(()=>[i("div",gs,[a(y,{size:20,class:"mie3"}),s[106]||(s[106]=e(" Toast with left border accent ",-1))])]),_:1},8,["open"]),a(h,{class:"demo-button",variant:"primary",size:"md",shape:"rounded",onClick:s[48]||(s[48]=o=>t.showToast("showNotRounded"))},{default:n(()=>[...s[107]||(s[107]=[e(" Not Rounded Toast ",-1)])]),_:1}),a(l,{open:t.showNotRounded,"onUpdate:open":s[49]||(s[49]=o=>t.showNotRounded=o),type:"primary",rounded:!1,onToastClose:s[50]||(s[50]=o=>t.showNotRounded=!1)},{default:n(()=>[...s[108]||(s[108]=[e(" Toast without rounded corners ",-1)])]),_:1},8,["open"])]),s[129]||(s[129]=i("div",{class:"mbe4"},[i("h2",null,"Auto-Dismiss Options")],-1)),i("div",ws,[a(h,{class:"demo-button",variant:"primary",size:"md",shape:"rounded",onClick:s[51]||(s[51]=o=>t.showToast("showQuickDismiss"))},{default:n(()=>[...s[109]||(s[109]=[e(" Quick Dismiss (2s) ",-1)])]),_:1}),a(l,{open:t.showQuickDismiss,"onUpdate:open":s[52]||(s[52]=o=>t.showQuickDismiss=o),duration:2e3,type:"info",onToastClose:s[53]||(s[53]=o=>t.showQuickDismiss=!1)},{default:n(()=>[...s[110]||(s[110]=[e(" This toast will auto-dismiss in 2 seconds ",-1)])]),_:1},8,["open"]),a(h,{class:"demo-button",variant:"primary",size:"md",shape:"rounded",onClick:s[54]||(s[54]=o=>t.showToast("showAutoDismiss"))},{default:n(()=>[...s[111]||(s[111]=[e(" Auto-Dismiss (5s) ",-1)])]),_:1}),a(l,{open:t.showAutoDismiss,"onUpdate:open":s[55]||(s[55]=o=>t.showAutoDismiss=o),duration:5e3,type:"info",onToastClose:s[56]||(s[56]=o=>t.showAutoDismiss=!1)},{default:n(()=>[...s[112]||(s[112]=[e(" This toast will auto-dismiss in 5 seconds (default) ",-1)])]),_:1},8,["open"]),a(h,{class:"demo-button",variant:"primary",size:"md",shape:"rounded",onClick:s[57]||(s[57]=o=>t.showToast("showNoAutoDismiss"))},{default:n(()=>[...s[113]||(s[113]=[e(" No Auto-Dismiss ",-1)])]),_:1}),a(l,{open:t.showNoAutoDismiss,"onUpdate:open":s[58]||(s[58]=o=>t.showNoAutoDismiss=o),"auto-dismiss":!1,type:"warning",onToastClose:s[59]||(s[59]=o=>t.showNoAutoDismiss=!1)},{default:n(()=>[...s[114]||(s[114]=[e(" This toast will not auto-dismiss. Click X to close. ",-1)])]),_:1},8,["open"]),a(h,{class:"demo-button",variant:"primary",size:"md",shape:"rounded",onClick:s[60]||(s[60]=o=>t.showToast("showNoPause"))},{default:n(()=>[...s[115]||(s[115]=[e(" No Pause on Hover ",-1)])]),_:1}),a(l,{open:t.showNoPause,"onUpdate:open":s[61]||(s[61]=o=>t.showNoPause=o),"pause-on-hover":!1,duration:3e3,type:"info",onToastClose:s[62]||(s[62]=o=>t.showNoPause=!1)},{default:n(()=>[...s[116]||(s[116]=[e(" Hover won't pause this toast's timer ",-1)])]),_:1},8,["open"])]),s[130]||(s[130]=i("div",{class:"mbe4"},[i("h2",null,"Close Button Options")],-1)),i("div",Fs,[a(h,{class:"demo-button",variant:"primary",size:"md",shape:"rounded",onClick:s[63]||(s[63]=o=>t.showToast("showNoCloseButton"))},{default:n(()=>[...s[117]||(s[117]=[e(" No Close Button ",-1)])]),_:1}),a(l,{open:t.showNoCloseButton,"onUpdate:open":s[64]||(s[64]=o=>t.showNoCloseButton=o),"show-close-button":!1,type:"info",duration:3e3,onToastClose:s[65]||(s[65]=o=>t.showNoCloseButton=!1)},{default:n(()=>[...s[118]||(s[118]=[e(" Toast without close button (auto-dismisses) ",-1)])]),_:1},8,["open"])]),s[131]||(s[131]=i("div",{class:"mbe4"},[i("h2",null,"With Icons")],-1)),i("div",ys,[a(h,{class:"demo-button",variant:"primary",size:"md",shape:"rounded",onClick:s[66]||(s[66]=o=>t.showToast("showIconSuccess"))},{default:n(()=>[...s[119]||(s[119]=[e(" Success with Icon ",-1)])]),_:1}),a(l,{open:t.showIconSuccess,"onUpdate:open":s[67]||(s[67]=o=>t.showIconSuccess=o),type:"success",onToastClose:s[68]||(s[68]=o=>t.showIconSuccess=!1)},{default:n(()=>[i("div",fs,[a(y,{size:20,class:"mie3"}),s[120]||(s[120]=e(" File uploaded successfully! ",-1))])]),_:1},8,["open"]),a(h,{class:"demo-button",variant:"primary",size:"md",shape:"rounded",onClick:s[69]||(s[69]=o=>t.showToast("showIconInfo"))},{default:n(()=>[...s[121]||(s[121]=[e(" Info with Icon ",-1)])]),_:1}),a(l,{open:t.showIconInfo,"onUpdate:open":s[70]||(s[70]=o=>t.showIconInfo=o),type:"info",onToastClose:s[71]||(s[71]=o=>t.showIconInfo=!1)},{default:n(()=>[i("div",Ts,[a(v,{size:20,class:"mie3"}),s[122]||(s[122]=e(" You have 3 unread messages ",-1))])]),_:1},8,["open"])]),s[132]||(s[132]=i("div",{class:"mbe4"},[i("h2",null,"CSS Shadow Parts Customization"),i("p",{class:"mbe2",style:{color:"var(--ag-text-secondary)","font-size":"0.875rem"}}," Customize toast appearance using CSS Shadow Parts without breaking encapsulation. ")],-1)),i("div",vs,[a(h,{class:"demo-button",variant:"primary",size:"md",shape:"rounded",onClick:s[72]||(s[72]=o=>t.showToast("showCustomGradient"))},{default:n(()=>[...s[123]||(s[123]=[e(" Custom Gradient Toast ",-1)])]),_:1}),a(l,{open:t.showCustomGradient,"onUpdate:open":s[73]||(s[73]=o=>t.showCustomGradient=o),class:"custom-gradient-toast",position:"top-end",onToastClose:s[74]||(s[74]=o=>t.showCustomGradient=!1)},{default:n(()=>[i("div",bs,[a(b,{size:20,class:"mie3"}),s[124]||(s[124]=e(" Custom styled toast with gradient ",-1))])]),_:1},8,["open"])]),s[133]||(s[133]=O("",1))])}const Cs=_(hs,[["render",Bs],["__scopeId","data-v-0ff4237b"]]),Es=["showDefault","showSuccess","showInfo","showPrimary","showWarning","showError","showDanger","showMonochrome","showTopStart","showTop","showTopEnd","showBottomStart","showBottom","showBottomEnd","showBordered","showBorderedLeft","showNotRounded","showQuickDismiss","showAutoDismiss","showNoAutoDismiss","showNoPause","showNoCloseButton","showIconSuccess","showIconInfo","showCustomGradient"],Ds=Es.reduce((t,s)=>({...t,[s]:!1}),{});class Ss extends M{static get properties(){return{toasts:{type:Object,state:!0}}}constructor(){super(),this.toasts=Ds,this.activeToastKey=null}createRenderRoot(){return this}showToast(s){let r={...this.toasts};this.activeToastKey&&this.activeToastKey!==s&&(r[this.activeToastKey]=!1),r[s]=!0,this.toasts=r,this.activeToastKey=s}closeToast(s){this.toasts={...this.toasts,[s]:!1},this.activeToastKey===s&&(this.activeToastKey=null)}render(){return D`
      <section>
        <div class="mbe4 guidance-note">
          <h3>Demo Pattern: Single Toast Display</h3>
          <p>
            This demo automatically dismisses any visible toast before showing a new one. This prevents toast overlap and is the recommended pattern for most applications.
            See the documentation below for alternative approaches if you need multiple simultaneous toasts.
          </p>
        </div>
        <div class="mbe4">
          <h2>Toast Types</h2>
        </div>
        <div class="stacked flex-align-start mbe4">
          <ag-button class="demo-button" @click=${()=>this.showToast("showDefault")}>Show Default Toast</ag-button>
          <ag-toast .open=${this.toasts.showDefault} @toast-close=${()=>this.closeToast("showDefault")}>Default toast notification</ag-toast>
          
          <ag-button class="demo-button" @click=${()=>this.showToast("showSuccess")}>Show Success Toast</ag-button>
          <ag-toast .open=${this.toasts.showSuccess} type="success" @toast-close=${()=>this.closeToast("showSuccess")}>Operation completed successfully!</ag-toast>

          <ag-button class="demo-button" @click=${()=>this.showToast("showInfo")}>Show Info Toast</ag-button>
          <ag-toast .open=${this.toasts.showInfo} type="info" @toast-close=${()=>this.closeToast("showInfo")}>New message received!</ag-toast>

          <ag-button class="demo-button" @click=${()=>this.showToast("showPrimary")}>Show Primary Toast</ag-button>
          <ag-toast .open=${this.toasts.showPrimary} type="primary" @toast-close=${()=>this.closeToast("showPrimary")}>New feature available!</ag-toast>
          
          <ag-button class="demo-button" @click=${()=>this.showToast("showWarning")}>Show Warning Toast</ag-button>
          <ag-toast .open=${this.toasts.showWarning} type="warning" @toast-close=${()=>this.closeToast("showWarning")}>
            <div class="flex-inline items-center"><ag-icon size="20" class="mie3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><line x1="12" x2="12" y1="9" y2="13"></line><line x1="12" x2="12.01" y1="17" y2="17"></line></svg></ag-icon>Warning: This action cannot be undone.</div>
          </ag-toast>

          <ag-button class="demo-button" @click=${()=>this.showToast("showError")}>Show Error Toast</ag-button>
          <ag-toast .open=${this.toasts.showError} type="error" @toast-close=${()=>this.closeToast("showError")}>
            <div class="flex-inline items-center"><ag-icon size="20" class="mie3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg></ag-icon>An error occurred. Please try again.</div>
          </ag-toast>

          <ag-button class="demo-button" @click=${()=>this.showToast("showDanger")}>Show Danger Toast</ag-button>
          <ag-toast .open=${this.toasts.showDanger} type="danger" @toast-close=${()=>this.closeToast("showDanger")}>
            <div class="flex-inline items-center"><ag-icon size="20" class="mie3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" x2="9" y1="9" y2="15"></line><line x1="9" x2="15" y1="9" y2="15"></line></svg></ag-icon>Critical error detected!</div>
          </ag-toast>

          <ag-button class="demo-button" @click=${()=>this.showToast("showMonochrome")}>Show Monochrome Toast</ag-button>
          <ag-toast .open=${this.toasts.showMonochrome} type="monochrome" @toast-close=${()=>this.closeToast("showMonochrome")}>
            <div class="flex-inline items-center">Modern monochrome notification</div>
          </ag-toast>
        </div>

        <div class="mbe4">
          <h2>Positions</h2>
        </div>
        <div class="stacked flex-align-start mbe4">
          <ag-button class="demo-button" @click=${()=>this.showToast("showTopStart")}>Top Start</ag-button>
          <ag-toast .open=${this.toasts.showTopStart} position="top-start" @toast-close=${()=>this.closeToast("showTopStart")}>Toast at top-start</ag-toast>

          <ag-button class="demo-button" @click=${()=>this.showToast("showTop")}>Top (Full Width)</ag-button>
          <ag-toast .open=${this.toasts.showTop} position="top" @toast-close=${()=>this.closeToast("showTop")}>Toast at top (full width)</ag-toast>

          <ag-button class="demo-button" @click=${()=>this.showToast("showTopEnd")}>Top End (Default)</ag-button>
          <ag-toast .open=${this.toasts.showTopEnd} position="top-end" @toast-close=${()=>this.closeToast("showTopEnd")}>Toast at top-end (default)</ag-toast>

          <ag-button class="demo-button" @click=${()=>this.showToast("showBottomStart")}>Bottom Start</ag-button>
          <ag-toast .open=${this.toasts.showBottomStart} position="bottom-start" @toast-close=${()=>this.closeToast("showBottomStart")}>Toast at bottom-start</ag-toast>

          <ag-button class="demo-button" @click=${()=>this.showToast("showBottom")}>Bottom (Full Width)</ag-button>
          <ag-toast .open=${this.toasts.showBottom} position="bottom" @toast-close=${()=>this.closeToast("showBottom")}>Toast at bottom (full width)</ag-toast>

          <ag-button class="demo-button" @click=${()=>this.showToast("showBottomEnd")}>Bottom End</ag-button>
          <ag-toast .open=${this.toasts.showBottomEnd} position="bottom-end" @toast-close=${()=>this.closeToast("showBottomEnd")}>Toast at bottom-end</ag-toast>
        </div>

        <div class="mbe4">
          <h2>Border Styles</h2>
        </div>
        <div class="stacked flex-align-start mbe4">
          <ag-button class="demo-button" @click=${()=>this.showToast("showBordered")}>Bordered Toast</ag-button>
          <ag-toast .open=${this.toasts.showBordered} type="info" bordered @toast-close=${()=>this.closeToast("showBordered")}>Toast with border</ag-toast>

          <ag-button class="demo-button" @click=${()=>this.showToast("showBorderedLeft")}>Left Border Toast</ag-button>
          <ag-toast .open=${this.toasts.showBorderedLeft} type="success" borderedLeft @toast-close=${()=>this.closeToast("showBorderedLeft")}>
            <div class="flex-inline items-center"><ag-icon size="20" class="mie3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></ag-icon>Toast with left border accent</div>
          </ag-toast>

          <ag-button class="demo-button" @click=${()=>this.showToast("showNotRounded")}>Not Rounded Toast</ag-button>
          <ag-toast .open=${this.toasts.showNotRounded} type="primary" .rounded=${!1} @toast-close=${()=>this.closeToast("showNotRounded")}>Toast without rounded corners</ag-toast>
        </div>

        <div class="mbe4">
          <h2>Auto-Dismiss Options</h2>
        </div>
        <div class="stacked flex-align-start mbe4">
          <ag-button class="demo-button" @click=${()=>this.showToast("showQuickDismiss")}>Quick Dismiss (2s)</ag-button>
          <ag-toast .open=${this.toasts.showQuickDismiss} .duration=${2e3} type="info" @toast-close=${()=>this.closeToast("showQuickDismiss")}>This toast will auto-dismiss in 2 seconds</ag-toast>

          <ag-button class="demo-button" @click=${()=>this.showToast("showAutoDismiss")}>Auto-Dismiss (5s)</ag-button>
          <ag-toast .open=${this.toasts.showAutoDismiss} .duration=${5e3} type="info" @toast-close=${()=>this.closeToast("showAutoDismiss")}>This toast will auto-dismiss in 5 seconds (default)</ag-toast>
          
          <ag-button class="demo-button" @click=${()=>this.showToast("showNoAutoDismiss")}>No Auto-Dismiss</ag-button>
          <ag-toast .open=${this.toasts.showNoAutoDismiss} .autoDismiss=${!1} type="warning" @toast-close=${()=>this.closeToast("showNoAutoDismiss")}>This toast will not auto-dismiss. Click X to close.</ag-toast>

          <ag-button class="demo-button" @click=${()=>this.showToast("showNoPause")}>No Pause on Hover</ag-button>
          <ag-toast .open=${this.toasts.showNoPause} .pauseOnHover=${!1} .duration=${3e3} type="info" @toast-close=${()=>this.closeToast("showNoPause")}>Hover won't pause this toast's timer</ag-toast>
        </div>

        <div class="mbe4">
          <h2>Close Button Options</h2>
        </div>
        <div class="stacked flex-align-start mbe4">
          <ag-button class="demo-button" @click=${()=>this.showToast("showNoCloseButton")}>No Close Button</ag-button>
          <ag-toast .open=${this.toasts.showNoCloseButton} .showCloseButton=${!1} type="info" .duration=${3e3} @toast-close=${()=>this.closeToast("showNoCloseButton")}>Toast without close button (auto-dismisses)</ag-toast>
        </div>

        <div class="mbe4">
          <h2>With Icons</h2>
        </div>
        <div class="stacked flex-align-start mbe4">
          <ag-button class="demo-button" @click=${()=>this.showToast("showIconSuccess")}>Success with Icon</ag-button>
          <ag-toast .open=${this.toasts.showIconSuccess} type="success" @toast-close=${()=>this.closeToast("showIconSuccess")}>
            <div class="flex-inline items-center"><ag-icon size="20" class="mie3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></ag-icon>File uploaded successfully!</div>
          </ag-toast>

          <ag-button class="demo-button" @click=${()=>this.showToast("showIconInfo")}>Info with Icon</ag-button>
          <ag-toast .open=${this.toasts.showIconInfo} type="info" @toast-close=${()=>this.closeToast("showIconInfo")}>
            <div class="flex-inline items-center"><ag-icon size="20" class="mie3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="16" y2="12"></line><line x1="12" x2="12.01" y1="8" y2="8"></line></svg></ag-icon>You have 3 unread messages</div>
          </ag-toast>
        </div>

        <div class="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
          <p class="mbe2" style="color: var(--ag-text-secondary); font-size: 0.875rem;">
            Customize toast appearance using CSS Shadow Parts without breaking encapsulation.
          </p>
        </div>
        <div class="stacked flex-align-start mbe4">
          <ag-button class="demo-button" @click=${()=>this.showToast("showCustomGradient")}>Custom Gradient Toast</ag-button>
          <ag-toast
            .open=${this.toasts.showCustomGradient}
            class="custom-gradient-toast"
            position="top-end"
            @toast-close=${()=>this.closeToast("showCustomGradient")}
          >
            <div class="flex-inline items-center">
              <ag-icon size="20" class="mie3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15.6 3.3-3.2 8.7-8.7 3.2 3.2 8.7 8.7-3.2-3.2-8.7-8.7-3.2z"></path></svg></ag-icon>
              Custom styled toast with gradient
            </div>
          </ag-toast>
        </div>
      </section>
    `}}customElements.define("toast-lit-examples",Ss);const As=`<template>
  <section>
    <!-- Guidance Note -->
    <div class="mbe4 guidance-note">
      <h3>Demo Pattern: Single Toast Display</h3>
      <p>
        This demo automatically dismisses any visible toast before showing a new one. This prevents toast overlap and is the recommended pattern for most applications.
        See the documentation below for alternative approaches if you need multiple simultaneous toasts.
      </p>
    </div>
    <div class="mbe4">
      <h2>Toast Types</h2>
    </div>
    <div class="stacked flex-align-start mbe4">
      <VueButton
        class="demo-button"
        variant="primary"
        size="md"
        shape="rounded"
        @click="showToast('showDefault')"
      >
        Show Default Toast
      </VueButton>
      <VueToast
        v-model:open="showDefault"
        @toast-close="showDefault = false"
      >
        Default toast notification
      </VueToast>

      <VueButton
        class="demo-button"
        variant="primary"
        size="md"
        shape="rounded"
        @click="showToast('showSuccess')"
      >
        Show Success Toast
      </VueButton>
      <VueToast
        v-model:open="showSuccess"
        type="success"
        @toast-close="showSuccess = false"
      >
        Operation completed successfully!
      </VueToast>

      <VueButton
        class="demo-button"
        variant="primary"
        size="md"
        shape="rounded"
        @click="showToast('showInfo')"
      >
        Show Info Toast
      </VueButton>
      <VueToast
        v-model:open="showInfo"
        type="info"
        @toast-close="showInfo = false"
      >
        New message received!
      </VueToast>

      <VueButton
        class="demo-button"
        variant="primary"
        size="md"
        shape="rounded"
        @click="showToast('showPrimary')"
      >
        Show Primary Toast
      </VueButton>
      <VueToast
        v-model:open="showPrimary"
        type="primary"
        @toast-close="showPrimary = false"
      >
        New feature available!
      </VueToast>

      <VueButton
        class="demo-button"
        variant="primary"
        size="md"
        shape="rounded"
        @click="showToast('showWarning')"
      >
        Show Warning Toast
      </VueButton>
      <VueToast
        v-model:open="showWarning"
        type="warning"
        @toast-close="showWarning = false"
      >
        <div class="flex-inline items-center">
          <AlertTriangle
            :size="20"
            class="mie3"
          />
          Warning: This action cannot be undone.
        </div>
      </VueToast>

      <VueButton
        class="demo-button"
        variant="primary"
        size="md"
        shape="rounded"
        @click="showToast('showError')"
      >
        Show Error Toast
      </VueButton>
      <VueToast
        v-model:open="showError"
        type="error"
        @toast-close="showError = false"
      >
        <div class="flex-inline items-center">
          <AlertCircle
            :size="20"
            class="mie3"
          />
          An error occurred. Please try again.
        </div>
      </VueToast>

      <VueButton
        class="demo-button"
        variant="primary"
        size="md"
        shape="rounded"
        @click="showToast('showDanger')"
      >
        Show Danger Toast
      </VueButton>
      <VueToast
        v-model:open="showDanger"
        type="danger"
        @toast-close="showDanger = false"
      >
        <div class="flex-inline items-center">
          <XCircle
            :size="20"
            class="mie3"
          />
          Critical error detected!
        </div>
      </VueToast>

      <VueButton
        class="demo-button"
        variant="primary"
        size="md"
        shape="rounded"
        @click="showToast('showMonochrome')"
      >
        Show Monochrome Toast
      </VueButton>
      <VueToast
        v-model:open="showMonochrome"
        type="monochrome"
        @toast-close="showMonochrome = false"
      >
        <div class="flex-inline items-center">
          Modern monochrome notification
        </div>
      </VueToast>
    </div>

    <div class="mbe4">
      <h2>Positions</h2>
    </div>
    <div class="stacked flex-align-start mbe4">
      <VueButton
        class="demo-button"
        variant="primary"
        size="md"
        shape="rounded"
        @click="showToast('showTopStart')"
      >
        Top Start
      </VueButton>
      <VueToast
        v-model:open="showTopStart"
        position="top-start"
        @toast-close="showTopStart = false"
      >
        Toast at top-start
      </VueToast>

      <VueButton
        class="demo-button"
        variant="primary"
        size="md"
        shape="rounded"
        @click="showToast('showTop')"
      >
        Top (Full Width)
      </VueButton>
      <VueToast
        v-model:open="showTop"
        position="top"
        @toast-close="showTop = false"
      >
        Toast at top (full width)
      </VueToast>

      <VueButton
        class="demo-button"
        variant="primary"
        size="md"
        shape="rounded"
        @click="showToast('showTopEnd')"
      >
        Top End (Default)
      </VueButton>
      <VueToast
        v-model:open="showTopEnd"
        position="top-end"
        @toast-close="showTopEnd = false"
      >
        Toast at top-end (default)
      </VueToast>

      <VueButton
        class="demo-button"
        variant="primary"
        size="md"
        shape="rounded"
        @click="showToast('showBottomStart')"
      >
        Bottom Start
      </VueButton>
      <VueToast
        v-model:open="showBottomStart"
        position="bottom-start"
        @toast-close="showBottomStart = false"
      >
        Toast at bottom-start
      </VueToast>

      <VueButton
        class="demo-button"
        variant="primary"
        size="md"
        shape="rounded"
        @click="showToast('showBottom')"
      >
        Bottom (Full Width)
      </VueButton>
      <VueToast
        v-model:open="showBottom"
        position="bottom"
        @toast-close="showBottom = false"
      >
        Toast at bottom (full width)
      </VueToast>

      <VueButton
        class="demo-button"
        variant="primary"
        size="md"
        shape="rounded"
        @click="showToast('showBottomEnd')"
      >
        Bottom End
      </VueButton>
      <VueToast
        v-model:open="showBottomEnd"
        position="bottom-end"
        @toast-close="showBottomEnd = false"
      >
        Toast at bottom-end
      </VueToast>
    </div>

    <div class="mbe4">
      <h2>Border Styles</h2>
    </div>
    <div class="stacked flex-align-start mbe4">
      <VueButton
        class="demo-button"
        variant="primary"
        size="md"
        shape="rounded"
        @click="showToast('showBordered')"
      >
        Bordered Toast
      </VueButton>
      <VueToast
        v-model:open="showBordered"
        type="info"
        bordered
        @toast-close="showBordered = false"
      >
        Toast with border
      </VueToast>

      <VueButton
        class="demo-button"
        variant="primary"
        size="md"
        shape="rounded"
        @click="showToast('showBorderedLeft')"
      >
        Left Border Toast
      </VueButton>
      <VueToast
        v-model:open="showBorderedLeft"
        type="success"
        borderedLeft
        @toast-close="showBorderedLeft = false"
      >
        <div class="flex-inline items-center">
          <CheckCircle
            :size="20"
            class="mie3"
          />
          Toast with left border accent
        </div>
      </VueToast>

      <VueButton
        class="demo-button"
        variant="primary"
        size="md"
        shape="rounded"
        @click="showToast('showNotRounded')"
      >
        Not Rounded Toast
      </VueButton>
      <VueToast
        v-model:open="showNotRounded"
        type="primary"
        :rounded="false"
        @toast-close="showNotRounded = false"
      >
        Toast without rounded corners
      </VueToast>
    </div>

    <div class="mbe4">
      <h2>Auto-Dismiss Options</h2>
    </div>
    <div class="stacked flex-align-start mbe4">
      <VueButton
        class="demo-button"
        variant="primary"
        size="md"
        shape="rounded"
        @click="showToast('showQuickDismiss')"
      >
        Quick Dismiss (2s)
      </VueButton>
      <VueToast
        v-model:open="showQuickDismiss"
        :duration="2000"
        type="info"
        @toast-close="showQuickDismiss = false"
      >
        This toast will auto-dismiss in 2 seconds
      </VueToast>

      <VueButton
        class="demo-button"
        variant="primary"
        size="md"
        shape="rounded"
        @click="showToast('showAutoDismiss')"
      >
        Auto-Dismiss (5s)
      </VueButton>
      <VueToast
        v-model:open="showAutoDismiss"
        :duration="5000"
        type="info"
        @toast-close="showAutoDismiss = false"
      >
        This toast will auto-dismiss in 5 seconds (default)
      </VueToast>

      <VueButton
        class="demo-button"
        variant="primary"
        size="md"
        shape="rounded"
        @click="showToast('showNoAutoDismiss')"
      >
        No Auto-Dismiss
      </VueButton>
      <VueToast
        v-model:open="showNoAutoDismiss"
        :auto-dismiss="false"
        type="warning"
        @toast-close="showNoAutoDismiss = false"
      >
        This toast will not auto-dismiss. Click X to close.
      </VueToast>

      <VueButton
        class="demo-button"
        variant="primary"
        size="md"
        shape="rounded"
        @click="showToast('showNoPause')"
      >
        No Pause on Hover
      </VueButton>
      <VueToast
        v-model:open="showNoPause"
        :pause-on-hover="false"
        :duration="3000"
        type="info"
        @toast-close="showNoPause = false"
      >
        Hover won't pause this toast's timer
      </VueToast>
    </div>

    <div class="mbe4">
      <h2>Close Button Options</h2>
    </div>
    <div class="stacked flex-align-start mbe4">
      <VueButton
        class="demo-button"
        variant="primary"
        size="md"
        shape="rounded"
        @click="showToast('showNoCloseButton')"
      >
        No Close Button
      </VueButton>
      <VueToast
        v-model:open="showNoCloseButton"
        :show-close-button="false"
        type="info"
        :duration="3000"
        @toast-close="showNoCloseButton = false"
      >
        Toast without close button (auto-dismisses)
      </VueToast>
    </div>

    <div class="mbe4">
      <h2>With Icons</h2>
    </div>
    <div class="stacked flex-align-start mbe4">
      <VueButton
        class="demo-button"
        variant="primary"
        size="md"
        shape="rounded"
        @click="showToast('showIconSuccess')"
      >
        Success with Icon
      </VueButton>
      <VueToast
        v-model:open="showIconSuccess"
        type="success"
        @toast-close="showIconSuccess = false"
      >
        <div class="flex-inline items-center">
          <CheckCircle
            :size="20"
            class="mie3"
          />
          File uploaded successfully!
        </div>
      </VueToast>

      <VueButton
        class="demo-button"
        variant="primary"
        size="md"
        shape="rounded"
        @click="showToast('showIconInfo')"
      >
        Info with Icon
      </VueButton>
      <VueToast
        v-model:open="showIconInfo"
        type="info"
        @toast-close="showIconInfo = false"
      >
        <div class="flex-inline items-center">
          <Info
            :size="20"
            class="mie3"
          />
          You have 3 unread messages
        </div>
      </VueToast>
    </div>

    <div class="mbe4">
      <h2>CSS Shadow Parts Customization</h2>
      <p
        class="mbe2"
        style="color: var(--ag-text-secondary); font-size: 0.875rem;"
      >
        Customize toast appearance using CSS Shadow Parts without breaking encapsulation.
      </p>
    </div>
    <div class="stacked flex-align-start mbe4">
      <VueButton
        class="demo-button"
        variant="primary"
        size="md"
        shape="rounded"
        @click="showToast('showCustomGradient')"
      >
        Custom Gradient Toast
      </VueButton>
      <VueToast
        v-model:open="showCustomGradient"
        class="custom-gradient-toast"
        position="top-end"
        @toast-close="showCustomGradient = false"
      >
        <div class="flex-inline items-center">
          <Sparkles
            :size="20"
            class="mie3"
          />
          Custom styled toast with gradient
        </div>
      </VueToast>
    </div>
    <!-- Implementation Guide -->
    <div class="mbe4 implementation-guide">
      <h2>Implementation Patterns</h2>

      <div class="guide-section">
        <h3>Single Toast (Recommended)</h3>
        <p>
          Show one toast at a time to prevent information overload. This demo uses a registry pattern to automatically dismiss the active toast before showing a new one.
        </p>
        <pre><code>// Create registry and track active toast
const toastRefs = { showSuccess, showError /* ... */ };
let activeToastKey = null;

const showToast = (toastKey) => {
  if (activeToastKey) toastRefs[activeToastKey].value = false;
  toastRefs[toastKey].value = true;
  activeToastKey = toastKey;
};</code></pre>
      </div>

      <div class="guide-section">
        <h3>Multiple Toasts (Advanced)</h3>
        <p>
          For simultaneous toasts, implement a queue with unique IDs and render to document.body using your framework's approach:
        </p>
        <ul>
          <li><strong>Vue:</strong> <code>&lt;teleport to="body"&gt;</code></li>
          <li><strong>React:</strong> <code>ReactDOM.createPortal()</code></li>
          <li><strong>Svelte:</strong> Custom action or <code>onMount</code></li>
          <li><strong>Lit/Web Components:</strong> Append container to <code>document.body</code></li>
        </ul>
        <p style="color: var(--ag-text-secondary); font-size: 0.875rem; margin-top: 0.5rem;">
          Key: Maintain toast queue, calculate offsets for stacking, handle enter/exit animations.
        </p>
      </div>

      <div class="guide-section">
        <h3>Best Practices</h3>
        <ul>
          <li>Limit frequency and keep messages brief</li>
          <li>Use appropriate types (error for critical, info for general)</li>
          <li>Important messages need longer durations or manual dismissal</li>
          <li>Test positioning on mobile to avoid obscuring content</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, type Ref } from "vue";
import { VueToast } from "agnosticui-core/toast/vue";
import { VueButton } from "agnosticui-core/button/vue";
import {
  AlertTriangle,
  AlertCircle,
  XCircle,
  CheckCircle,
  Info,
  Sparkles,
} from "lucide-vue-next";

export default defineComponent({
  name: "ToastExamples",
  components: {
    VueToast,
    AlertTriangle,
    AlertCircle,
    XCircle,
    CheckCircle,
    Info,
    Sparkles,
  },
  setup() {
    const showDefault = ref(false);
    const showSuccess = ref(false);
    const showInfo = ref(false);
    const showPrimary = ref(false);
    const showWarning = ref(false);
    const showError = ref(false);
    const showDanger = ref(false);
    const showMonochrome = ref(false);

    const showTopStart = ref(false);
    const showTop = ref(false);
    const showTopEnd = ref(false);
    const showBottomStart = ref(false);
    const showBottom = ref(false);
    const showBottomEnd = ref(false);

    const showBordered = ref(false);
    const showBorderedLeft = ref(false);
    const showNotRounded = ref(false);

    const showQuickDismiss = ref(false);
    const showAutoDismiss = ref(false);
    const showNoAutoDismiss = ref(false);
    const showNoPause = ref(false);

    const showNoCloseButton = ref(false);
    const showIconSuccess = ref(false);
    const showIconInfo = ref(false);
    const showCustomGradient = ref(false);

    //
    // === TOAST REGISTRY FOR SINGLE ACTIVE TOAST TRACKING ===
    //
    const toastRefs: Record<string, Ref<boolean>> = {
      showDefault,
      showSuccess,
      showInfo,
      showPrimary,
      showWarning,
      showError,
      showDanger,
      showMonochrome,
      showTopStart,
      showTop,
      showTopEnd,
      showBottomStart,
      showBottom,
      showBottomEnd,
      showBordered,
      showBorderedLeft,
      showNotRounded,
      showQuickDismiss,
      showAutoDismiss,
      showNoAutoDismiss,
      showNoPause,
      showNoCloseButton,
      showIconSuccess,
      showIconInfo,
      showCustomGradient,
    };

    let activeToastKey: string | null = null;

    function showToast(toastKey: string) {
      // If another toast is active and it's not the same one, close it
      if (activeToastKey && activeToastKey !== toastKey) {
        toastRefs[activeToastKey].value = false;
      }

      // Show the new toast
      toastRefs[toastKey].value = true;
      activeToastKey = toastKey;
    }

    //
    // === RETURN EVERYTHING TO TEMPLATE ===
    //
    return {
      showDefault,
      showSuccess,
      showInfo,
      showPrimary,
      showWarning,
      showError,
      showDanger,
      showMonochrome,
      showTopStart,
      showTop,
      showTopEnd,
      showBottomStart,
      showBottom,
      showBottomEnd,
      showBordered,
      showBorderedLeft,
      showNotRounded,
      showQuickDismiss,
      showAutoDismiss,
      showNoAutoDismiss,
      showNoPause,
      showNoCloseButton,
      showIconSuccess,
      showIconInfo,
      showCustomGradient,
      showToast,
    };
  },
});
<\/script>

<style scoped>
/* Demo button styling */
.demo-button {
  padding: 0.5rem 1rem;
  background: var(--ag-primary);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s ease;
  width: fit-content;
}

.demo-button:hover {
  background: var(--ag-primary-dark);
}

.demo-button:active {
  transform: scale(0.98);
}

/* CSS Shadow Parts customization examples */
.custom-gradient-toast::part(ag-toast) {
  box-shadow: 0 10px 40px rgba(102, 126, 234, 0.4);
}

.custom-gradient-toast::part(ag-toast-content) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-weight: 600;
  border: none;
}
</style>
`,$s=`import { LitElement, html } from 'lit';
import 'agnosticui-core/toast';
import 'agnosticui-core/button';
import 'agnosticui-core/icon';

const toastKeys = [
  "showDefault", "showSuccess", "showInfo", "showPrimary", "showWarning",
  "showError", "showDanger", "showMonochrome", "showTopStart", "showTop",
  "showTopEnd", "showBottomStart", "showBottom", "showBottomEnd", "showBordered",
  "showBorderedLeft", "showNotRounded", "showQuickDismiss", "showAutoDismiss",
  "showNoAutoDismiss", "showNoPause", "showNoCloseButton", "showIconSuccess",
  "showIconInfo", "showCustomGradient",
];

const initialToastsState = toastKeys.reduce((acc, key) => ({ ...acc, [key]: false }), {});

export class ToastLitExamples extends LitElement {
  static get properties() {
    return {
      toasts: { type: Object, state: true },
    };
  }

  constructor() {
    super();
    this.toasts = initialToastsState;
    this.activeToastKey = null;
  }
  
  // No shadow DOM
  createRenderRoot() {
    return this;
  }

  showToast(toastKey) {
    let newToasts = { ...this.toasts };
    if (this.activeToastKey && this.activeToastKey !== toastKey) {
      newToasts[this.activeToastKey] = false;
    }
    newToasts[toastKey] = true;
    this.toasts = newToasts;
    this.activeToastKey = toastKey;
  }

  closeToast(toastKey) {
    this.toasts = { ...this.toasts, [toastKey]: false };
    if (this.activeToastKey === toastKey) {
      this.activeToastKey = null;
    }
  }

  render() {
    return html\`
      <section>
        <div class="mbe4 guidance-note">
          <h3>Demo Pattern: Single Toast Display</h3>
          <p>
            This demo automatically dismisses any visible toast before showing a new one. This prevents toast overlap and is the recommended pattern for most applications.
            See the documentation below for alternative approaches if you need multiple simultaneous toasts.
          </p>
        </div>
        <div class="mbe4">
          <h2>Toast Types</h2>
        </div>
        <div class="stacked flex-align-start mbe4">
          <ag-button class="demo-button" @click=\${() => this.showToast('showDefault')}>Show Default Toast</ag-button>
          <ag-toast .open=\${this.toasts.showDefault} @toast-close=\${() => this.closeToast('showDefault')}>Default toast notification</ag-toast>
          
          <ag-button class="demo-button" @click=\${() => this.showToast('showSuccess')}>Show Success Toast</ag-button>
          <ag-toast .open=\${this.toasts.showSuccess} type="success" @toast-close=\${() => this.closeToast('showSuccess')}>Operation completed successfully!</ag-toast>

          <ag-button class="demo-button" @click=\${() => this.showToast('showInfo')}>Show Info Toast</ag-button>
          <ag-toast .open=\${this.toasts.showInfo} type="info" @toast-close=\${() => this.closeToast('showInfo')}>New message received!</ag-toast>

          <ag-button class="demo-button" @click=\${() => this.showToast('showPrimary')}>Show Primary Toast</ag-button>
          <ag-toast .open=\${this.toasts.showPrimary} type="primary" @toast-close=\${() => this.closeToast('showPrimary')}>New feature available!</ag-toast>
          
          <ag-button class="demo-button" @click=\${() => this.showToast('showWarning')}>Show Warning Toast</ag-button>
          <ag-toast .open=\${this.toasts.showWarning} type="warning" @toast-close=\${() => this.closeToast('showWarning')}>
            <div class="flex-inline items-center"><ag-icon size="20" class="mie3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><line x1="12" x2="12" y1="9" y2="13"></line><line x1="12" x2="12.01" y1="17" y2="17"></line></svg></ag-icon>Warning: This action cannot be undone.</div>
          </ag-toast>

          <ag-button class="demo-button" @click=\${() => this.showToast('showError')}>Show Error Toast</ag-button>
          <ag-toast .open=\${this.toasts.showError} type="error" @toast-close=\${() => this.closeToast('showError')}>
            <div class="flex-inline items-center"><ag-icon size="20" class="mie3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg></ag-icon>An error occurred. Please try again.</div>
          </ag-toast>

          <ag-button class="demo-button" @click=\${() => this.showToast('showDanger')}>Show Danger Toast</ag-button>
          <ag-toast .open=\${this.toasts.showDanger} type="danger" @toast-close=\${() => this.closeToast('showDanger')}>
            <div class="flex-inline items-center"><ag-icon size="20" class="mie3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" x2="9" y1="9" y2="15"></line><line x1="9" x2="15" y1="9" y2="15"></line></svg></ag-icon>Critical error detected!</div>
          </ag-toast>

          <ag-button class="demo-button" @click=\${() => this.showToast('showMonochrome')}>Show Monochrome Toast</ag-button>
          <ag-toast .open=\${this.toasts.showMonochrome} type="monochrome" @toast-close=\${() => this.closeToast('showMonochrome')}>
            <div class="flex-inline items-center">Modern monochrome notification</div>
          </ag-toast>
        </div>

        <div class="mbe4">
          <h2>Positions</h2>
        </div>
        <div class="stacked flex-align-start mbe4">
          <ag-button class="demo-button" @click=\${() => this.showToast('showTopStart')}>Top Start</ag-button>
          <ag-toast .open=\${this.toasts.showTopStart} position="top-start" @toast-close=\${() => this.closeToast('showTopStart')}>Toast at top-start</ag-toast>

          <ag-button class="demo-button" @click=\${() => this.showToast('showTop')}>Top (Full Width)</ag-button>
          <ag-toast .open=\${this.toasts.showTop} position="top" @toast-close=\${() => this.closeToast('showTop')}>Toast at top (full width)</ag-toast>

          <ag-button class="demo-button" @click=\${() => this.showToast('showTopEnd')}>Top End (Default)</ag-button>
          <ag-toast .open=\${this.toasts.showTopEnd} position="top-end" @toast-close=\${() => this.closeToast('showTopEnd')}>Toast at top-end (default)</ag-toast>

          <ag-button class="demo-button" @click=\${() => this.showToast('showBottomStart')}>Bottom Start</ag-button>
          <ag-toast .open=\${this.toasts.showBottomStart} position="bottom-start" @toast-close=\${() => this.closeToast('showBottomStart')}>Toast at bottom-start</ag-toast>

          <ag-button class="demo-button" @click=\${() => this.showToast('showBottom')}>Bottom (Full Width)</ag-button>
          <ag-toast .open=\${this.toasts.showBottom} position="bottom" @toast-close=\${() => this.closeToast('showBottom')}>Toast at bottom (full width)</ag-toast>

          <ag-button class="demo-button" @click=\${() => this.showToast('showBottomEnd')}>Bottom End</ag-button>
          <ag-toast .open=\${this.toasts.showBottomEnd} position="bottom-end" @toast-close=\${() => this.closeToast('showBottomEnd')}>Toast at bottom-end</ag-toast>
        </div>

        <div class="mbe4">
          <h2>Border Styles</h2>
        </div>
        <div class="stacked flex-align-start mbe4">
          <ag-button class="demo-button" @click=\${() => this.showToast('showBordered')}>Bordered Toast</ag-button>
          <ag-toast .open=\${this.toasts.showBordered} type="info" bordered @toast-close=\${() => this.closeToast('showBordered')}>Toast with border</ag-toast>

          <ag-button class="demo-button" @click=\${() => this.showToast('showBorderedLeft')}>Left Border Toast</ag-button>
          <ag-toast .open=\${this.toasts.showBorderedLeft} type="success" borderedLeft @toast-close=\${() => this.closeToast('showBorderedLeft')}>
            <div class="flex-inline items-center"><ag-icon size="20" class="mie3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></ag-icon>Toast with left border accent</div>
          </ag-toast>

          <ag-button class="demo-button" @click=\${() => this.showToast('showNotRounded')}>Not Rounded Toast</ag-button>
          <ag-toast .open=\${this.toasts.showNotRounded} type="primary" .rounded=\${false} @toast-close=\${() => this.closeToast('showNotRounded')}>Toast without rounded corners</ag-toast>
        </div>

        <div class="mbe4">
          <h2>Auto-Dismiss Options</h2>
        </div>
        <div class="stacked flex-align-start mbe4">
          <ag-button class="demo-button" @click=\${() => this.showToast('showQuickDismiss')}>Quick Dismiss (2s)</ag-button>
          <ag-toast .open=\${this.toasts.showQuickDismiss} .duration=\${2000} type="info" @toast-close=\${() => this.closeToast('showQuickDismiss')}>This toast will auto-dismiss in 2 seconds</ag-toast>

          <ag-button class="demo-button" @click=\${() => this.showToast('showAutoDismiss')}>Auto-Dismiss (5s)</ag-button>
          <ag-toast .open=\${this.toasts.showAutoDismiss} .duration=\${5000} type="info" @toast-close=\${() => this.closeToast('showAutoDismiss')}>This toast will auto-dismiss in 5 seconds (default)</ag-toast>
          
          <ag-button class="demo-button" @click=\${() => this.showToast('showNoAutoDismiss')}>No Auto-Dismiss</ag-button>
          <ag-toast .open=\${this.toasts.showNoAutoDismiss} .autoDismiss=\${false} type="warning" @toast-close=\${() => this.closeToast('showNoAutoDismiss')}>This toast will not auto-dismiss. Click X to close.</ag-toast>

          <ag-button class="demo-button" @click=\${() => this.showToast('showNoPause')}>No Pause on Hover</ag-button>
          <ag-toast .open=\${this.toasts.showNoPause} .pauseOnHover=\${false} .duration=\${3000} type="info" @toast-close=\${() => this.closeToast('showNoPause')}>Hover won't pause this toast's timer</ag-toast>
        </div>

        <div class="mbe4">
          <h2>Close Button Options</h2>
        </div>
        <div class="stacked flex-align-start mbe4">
          <ag-button class="demo-button" @click=\${() => this.showToast('showNoCloseButton')}>No Close Button</ag-button>
          <ag-toast .open=\${this.toasts.showNoCloseButton} .showCloseButton=\${false} type="info" .duration=\${3000} @toast-close=\${() => this.closeToast('showNoCloseButton')}>Toast without close button (auto-dismisses)</ag-toast>
        </div>

        <div class="mbe4">
          <h2>With Icons</h2>
        </div>
        <div class="stacked flex-align-start mbe4">
          <ag-button class="demo-button" @click=\${() => this.showToast('showIconSuccess')}>Success with Icon</ag-button>
          <ag-toast .open=\${this.toasts.showIconSuccess} type="success" @toast-close=\${() => this.closeToast('showIconSuccess')}>
            <div class="flex-inline items-center"><ag-icon size="20" class="mie3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></ag-icon>File uploaded successfully!</div>
          </ag-toast>

          <ag-button class="demo-button" @click=\${() => this.showToast('showIconInfo')}>Info with Icon</ag-button>
          <ag-toast .open=\${this.toasts.showIconInfo} type="info" @toast-close=\${() => this.closeToast('showIconInfo')}>
            <div class="flex-inline items-center"><ag-icon size="20" class="mie3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="16" y2="12"></line><line x1="12" x2="12.01" y1="8" y2="8"></line></svg></ag-icon>You have 3 unread messages</div>
          </ag-toast>
        </div>

        <div class="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
          <p class="mbe2" style="color: var(--ag-text-secondary); font-size: 0.875rem;">
            Customize toast appearance using CSS Shadow Parts without breaking encapsulation.
          </p>
        </div>
        <div class="stacked flex-align-start mbe4">
          <ag-button class="demo-button" @click=\${() => this.showToast('showCustomGradient')}>Custom Gradient Toast</ag-button>
          <ag-toast
            .open=\${this.toasts.showCustomGradient}
            class="custom-gradient-toast"
            position="top-end"
            @toast-close=\${() => this.closeToast('showCustomGradient')}
          >
            <div class="flex-inline items-center">
              <ag-icon size="20" class="mie3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15.6 3.3-3.2 8.7-8.7 3.2 3.2 8.7 8.7-3.2-3.2-8.7-8.7-3.2z"></path></svg></ag-icon>
              Custom styled toast with gradient
            </div>
          </ag-toast>
        </div>
      </section>
    \`;
  }
}
customElements.define('toast-lit-examples', ToastLitExamples);
`,Ns=`import { useState } from "react";
import { ReactToast } from "agnosticui-core/toast/react";
import { ReactButton } from "agnosticui-core/button/react";
import {
  AlertTriangle,
  AlertCircle,
  XCircle,
  CheckCircle,
  Info,
  Sparkles,
} from "lucide-react";

const toastKeys = [
  "showDefault", "showSuccess", "showInfo", "showPrimary", "showWarning",
  "showError", "showDanger", "showMonochrome", "showTopStart", "showTop",
  "showTopEnd", "showBottomStart", "showBottom", "showBottomEnd", "showBordered",
  "showBorderedLeft", "showNotRounded", "showQuickDismiss", "showAutoDismiss",
  "showNoAutoDismiss", "showNoPause", "showNoCloseButton", "showIconSuccess",
  "showIconInfo", "showCustomGradient",
];

const initialToastsState = toastKeys.reduce((acc, key) => ({ ...acc, [key]: false }), {});

export default function ToastReactExamples() {
  const [toasts, setToasts] = useState(initialToastsState);
  let activeToastKey = null;

  const showToast = (toastKey) => {
    if (activeToastKey && activeToastKey !== toastKey) {
      setToasts(prev => ({ ...prev, [activeToastKey]: false }));
    }
    setToasts(prev => ({ ...prev, [toastKey]: true }));
    activeToastKey = toastKey;
  };

  const closeToast = (toastKey) => {
    setToasts(prev => ({ ...prev, [toastKey]: false }));
    if (activeToastKey === toastKey) {
      activeToastKey = null;
    }
  };

  return (
    <section>
    <div class="mbe4 guidance-note">
      <h3>Demo Pattern: Single Toast Display</h3>
      <p>
        This demo automatically dismisses any visible toast before showing a new one. This prevents toast overlap and is the recommended pattern for most applications.
        See the documentation below for alternative approaches if you need multiple simultaneous toasts.
      </p>
    </div>
    <div className="mbe4">
      <h2>Toast Types</h2>
    </div>
    <div className="stacked flex-align-start mbe4">
        <ReactButton className="demo-button" onClick={() => showToast('showDefault')}>Show Default Toast</ReactButton>
        <ReactToast open={toasts.showDefault} onToastClose={() => closeToast('showDefault')}>Default toast notification</ReactToast>

        <ReactButton className="demo-button" onClick={() => showToast('showSuccess')}>Show Success Toast</ReactButton>
        <ReactToast open={toasts.showSuccess} type="success" onToastClose={() => closeToast('showSuccess')}>Operation completed successfully!</ReactToast>

        <ReactButton className="demo-button" onClick={() => showToast('showInfo')}>Show Info Toast</ReactButton>
        <ReactToast open={toasts.showInfo} type="info" onToastClose={() => closeToast('showInfo')}>New message received!</ReactToast>
        
        <ReactButton className="demo-button" onClick={() => showToast('showPrimary')}>Show Primary Toast</ReactButton>
        <ReactToast open={toasts.showPrimary} type="primary" onToastClose={() => closeToast('showPrimary')}>New feature available!</ReactToast>
        
        <ReactButton className="demo-button" onClick={() => showToast('showWarning')}>Show Warning Toast</ReactButton>
        <ReactToast open={toasts.showWarning} type="warning" onToastClose={() => closeToast('showWarning')}>
          <div className="flex-inline items-center"><AlertTriangle size={20} className="mie3" />Warning: This action cannot be undone.</div>
        </ReactToast>
        
        <ReactButton className="demo-button" onClick={() => showToast('showError')}>Show Error Toast</ReactButton>
        <ReactToast open={toasts.showError} type="error" onToastClose={() => closeToast('showError')}>
          <div className="flex-inline items-center"><AlertCircle size={20} className="mie3" />An error occurred. Please try again.</div>
        </ReactToast>
        
        <ReactButton className="demo-button" onClick={() => showToast('showDanger')}>Show Danger Toast</ReactButton>
        <ReactToast open={toasts.showDanger} type="danger" onToastClose={() => closeToast('showDanger')}>
          <div className="flex-inline items-center"><XCircle size={20} className="mie3" />Critical error detected!</div>
        </ReactToast>

        <ReactButton className="demo-button" onClick={() => showToast('showMonochrome')}>Show Monochrome Toast</ReactButton>
        <ReactToast open={toasts.showMonochrome} type="monochrome" onToastClose={() => closeToast('showMonochrome')}>
          <div className="flex-inline items-center">Modern monochrome notification</div>
        </ReactToast>
    </div>

    <div className="mbe4">
        <h2>Positions</h2>
    </div>
    <div className="stacked flex-align-start mbe4">
        <ReactButton className="demo-button" onClick={() => showToast('showTopStart')}>Top Start</ReactButton>
        <ReactToast open={toasts.showTopStart} position="top-start" onToastClose={() => closeToast('showTopStart')}>Toast at top-start</ReactToast>
        
        <ReactButton className="demo-button" onClick={() => showToast('showTop')}>Top (Full Width)</ReactButton>
        <ReactToast open={toasts.showTop} position="top" onToastClose={() => closeToast('showTop')}>Toast at top (full width)</ReactToast>

        <ReactButton className="demo-button" onClick={() => showToast('showTopEnd')}>Top End (Default)</ReactButton>
        <ReactToast open={toasts.showTopEnd} position="top-end" onToastClose={() => closeToast('showTopEnd')}>Toast at top-end (default)</ReactToast>

        <ReactButton className="demo-button" onClick={() => showToast('showBottomStart')}>Bottom Start</ReactButton>
        <ReactToast open={toasts.showBottomStart} position="bottom-start" onToastClose={() => closeToast('showBottomStart')}>Toast at bottom-start</ReactToast>

        <ReactButton className="demo-button" onClick={() => showToast('showBottom')}>Bottom (Full Width)</ReactButton>
        <ReactToast open={toasts.showBottom} position="bottom" onToastClose={() => closeToast('showBottom')}>Toast at bottom (full width)</ReactToast>

        <ReactButton className="demo-button" onClick={() => showToast('showBottomEnd')}>Bottom End</ReactButton>
        <ReactToast open={toasts.showBottomEnd} position="bottom-end" onToastClose={() => closeToast('showBottomEnd')}>Toast at bottom-end</ReactToast>
    </div>
    
    <div className="mbe4">
        <h2>Border Styles</h2>
    </div>
    <div className="stacked flex-align-start mbe4">
        <ReactButton className="demo-button" onClick={() => showToast('showBordered')}>Bordered Toast</ReactButton>
        <ReactToast open={toasts.showBordered} type="info" bordered onToastClose={() => closeToast('showBordered')}>Toast with border</ReactToast>

        <ReactButton className="demo-button" onClick={() => showToast('showBorderedLeft')}>Left Border Toast</ReactButton>
        <ReactToast open={toasts.showBorderedLeft} type="success" borderedLeft onToastClose={() => closeToast('showBorderedLeft')}>
            <div className="flex-inline items-center"><CheckCircle size={20} className="mie3" />Toast with left border accent</div>
        </ReactToast>

        <ReactButton className="demo-button" onClick={() => showToast('showNotRounded')}>Not Rounded Toast</ReactButton>
        <ReactToast open={toasts.showNotRounded} type="primary" rounded={false} onToastClose={() => closeToast('showNotRounded')}>Toast without rounded corners</ReactToast>
    </div>

    <div className="mbe4">
        <h2>Auto-Dismiss Options</h2>
    </div>
    <div className="stacked flex-align-start mbe4">
        <ReactButton className="demo-button" onClick={() => showToast('showQuickDismiss')}>Quick Dismiss (2s)</ReactButton>
        <ReactToast open={toasts.showQuickDismiss} duration={2000} type="info" onToastClose={() => closeToast('showQuickDismiss')}>This toast will auto-dismiss in 2 seconds</ReactToast>

        <ReactButton className="demo-button" onClick={() => showToast('showAutoDismiss')}>Auto-Dismiss (5s)</ReactButton>
        <ReactToast open={toasts.showAutoDismiss} duration={5000} type="info" onToastClose={() => closeToast('showAutoDismiss')}>This toast will auto-dismiss in 5 seconds (default)</ReactToast>
    
        <ReactButton className="demo-button" onClick={() => showToast('showNoAutoDismiss')}>No Auto-Dismiss</ReactButton>
        <ReactToast open={toasts.showNoAutoDismiss} autoDismiss={false} type="warning" onToastClose={() => closeToast('showNoAutoDismiss')}>This toast will not auto-dismiss. Click X to close.</ReactToast>

        <ReactButton className="demo-button" onClick={() => showToast('showNoPause')}>No Pause on Hover</ReactButton>
        <ReactToast open={toasts.showNoPause} pauseOnHover={false} duration={3000} type="info" onToastClose={() => closeToast('showNoPause')}>Hover won't pause this toast's timer</ReactToast>
    </div>

    <div className="mbe4">
        <h2>Close Button Options</h2>
    </div>
    <div className="stacked flex-align-start mbe4">
        <ReactButton className="demo-button" onClick={() => showToast('showNoCloseButton')}>No Close Button</ReactButton>
        <ReactToast open={toasts.showNoCloseButton} showCloseButton={false} type="info" duration={3000} onToastClose={() => closeToast('showNoCloseButton')}>Toast without close button (auto-dismisses)</ReactToast>
    </div>

    <div className="mbe4">
        <h2>With Icons</h2>
    </div>
    <div className="stacked flex-align-start mbe4">
        <ReactButton className="demo-button" onClick={() => showToast('showIconSuccess')}>Success with Icon</ReactButton>
        <ReactToast open={toasts.showIconSuccess} type="success" onToastClose={() => closeToast('showIconSuccess')}>
            <div className="flex-inline items-center"><CheckCircle size={20} className="mie3" />File uploaded successfully!</div>
        </ReactToast>

        <ReactButton className="demo-button" onClick={() => showToast('showIconInfo')}>Info with Icon</ReactButton>
        <ReactToast open={toasts.showIconInfo} type="info" onToastClose={() => closeToast('showIconInfo')}>
            <div className="flex-inline items-center"><Info size={20} className="mie3" />You have 3 unread messages</div>
        </ReactToast>
    </div>

    <div className="mbe4">
      <h2>CSS Shadow Parts Customization</h2>
      <p
        className="mbe2"
        style={{ color: "var(--ag-text-secondary)", fontSize: "0.875rem" }}
      >
        Customize toast appearance using CSS Shadow Parts without breaking encapsulation.
      </p>
    </div>
    <div className="stacked flex-align-start mbe4">
      <ReactButton className="demo-button" onClick={() => showToast('showCustomGradient')}>Custom Gradient Toast</ReactButton>
      <ReactToast
        open={toasts.showCustomGradient}
        className="custom-gradient-toast"
        position="top-end"
        onToastClose={() => closeToast('showCustomGradient')}
      >
        <div className="flex-inline items-center"><Sparkles size={20} className="mie3" />Custom styled toast with gradient</div>
      </ReactToast>
    </div>
    </section>
  );
}
`,js=JSON.parse('{"title":"Toast","description":"","frontmatter":{},"headers":[],"relativePath":"components/toast.md","filePath":"components/toast.md"}'),Rs={name:"components/toast.md"},Xs=Object.assign(Rs,{setup(t){return(s,r)=>(A(),S("div",null,[r[1]||(r[1]=i("h1",{id:"toast",tabindex:"-1"},[e("Toast "),i("a",{class:"header-anchor",href:"#toast","aria-label":'Permalink to "Toast"'},"​")],-1)),a(Q),r[2]||(r[2]=i("p",null,"Toast notification is a non-modal element that appears at viewport edges or corners to provide brief, contextual feedback to a user. It can auto-dismiss after a duration and support pause-on-hover behavior.",-1)),r[3]||(r[3]=i("h2",{id:"examples",tabindex:"-1"},[e("Examples "),i("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),a(es,{component:"toast","vue-code":E(As),"lit-code":E($s),"react-code":E(Ns)},{vue:n(()=>[a(Cs)]),lit:n(()=>[...r[0]||(r[0]=[i("toast-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),r[4]||(r[4]=O("",25))]))}});export{js as __pageData,Xs as default};
