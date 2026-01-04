import{C as K,A as X}from"./chunks/AlphaWarning.BeGEOyJF.js";import{i as G,a as Q,E as j,x as O}from"./chunks/lit-element.B0TUrqGF.js";import{z as y}from"./chunks/property-CemaeiRl.BAjarvIB.js";import{n as Y}from"./chunks/state-CovhUvdr.BllWkzJh.js";import"./chunks/Alert.DfKP0k46.js";import"./chunks/CloseButton.JmCUmSqr.js";import{d as W,p as k,c as f,o as w,r as J,K as x,_ as Z,C as c,j as t,ae as z,G as n,w as e,a as p}from"./chunks/framework.DvJW1jwp.js";import{S as _}from"./chunks/sparkles.BrHKakxd.js";import{I as ss}from"./chunks/info.BD4eTUo8.js";import{C as is,a as as}from"./chunks/circle-x.B98mJRzV.js";import{T as ts}from"./chunks/triangle-alert.DzYwMnwq.js";var ns=Object.defineProperty,d=(i,s,h,u)=>{for(var F=void 0,o=i.length-1,l;o>=0;o--)(l=i[o])&&(F=l(s,h,F)||F);return F&&ns(s,h,F),F};const M=class extends Q{constructor(){super(),this._isHovered=!1,this._autoDismissTimer=null,this._timerStartTime=null,this._remainingTime=null,this._handleCloseButtonClick=()=>{this._clearTimer(),this.open=!1},this._handleMouseEnter=()=>{this.pauseOnHover&&this.autoDismiss&&(this._isHovered=!0,this._pauseTimer())},this._handleMouseLeave=()=>{this.pauseOnHover&&this.autoDismiss&&(this._isHovered=!1,this._resumeTimer())},this._handleKeydown=s=>{s.key==="Escape"&&this.showCloseButton&&(s.preventDefault(),this._handleCloseButtonClick())},this.open=!1,this.type="default",this.position="top-end",this.duration=5e3,this.autoDismiss=!0,this.showCloseButton=!0,this.pauseOnHover=!0,this.bordered=!1,this.rounded=!0,this.borderedLeft=!1}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this._clearTimer()}willUpdate(s){var h,u;if(s.has("open")){const F=s.get("open");if(this.open&&!F){const o=new CustomEvent("toast-open",{bubbles:!0,composed:!0});this.dispatchEvent(o),(h=this.onToastOpen)==null||h.call(this,o),this.autoDismiss&&this.duration>0&&this._startTimer()}else if(!this.open&&F){this._clearTimer();const o=new CustomEvent("toast-close",{bubbles:!0,composed:!0});this.dispatchEvent(o),(u=this.onToastClose)==null||u.call(this,o)}}}_startTimer(){this._clearTimer(),this._timerStartTime=Date.now(),this._remainingTime=this.duration,this._autoDismissTimer=window.setTimeout(()=>{this._handleAutoDismiss()},this.duration)}_pauseTimer(){if(!this._autoDismissTimer||!this._timerStartTime)return;const s=Date.now()-this._timerStartTime;this._remainingTime=Math.max(0,this.duration-s),this._clearTimer()}_resumeTimer(){!this.autoDismiss||this._remainingTime===null||(this._timerStartTime=Date.now(),this._autoDismissTimer=window.setTimeout(()=>{this._handleAutoDismiss()},this._remainingTime))}_clearTimer(){this._autoDismissTimer&&(window.clearTimeout(this._autoDismissTimer),this._autoDismissTimer=null,this._timerStartTime=null)}_handleAutoDismiss(){var h;const s=new CustomEvent("toast-dismiss",{bubbles:!0,composed:!0});this.dispatchEvent(s),(h=this.onToastDismiss)==null||h.call(this,s),this.open=!1}_isUrgentType(){return this.type==="error"||this.type==="danger"||this.type==="warning"}render(){const s=this._isUrgentType()?"alert":"status",h=this._isUrgentType()?"assertive":"polite";return O`
      <div
        class="toast-container"
        part="ag-toast"
        role="${s}"
        aria-live="${h}"
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
            ${this.showCloseButton?O`
              <ag-close-button
                size="sm"
                .variant=${this.type}
                label="Dismiss notification"
                @close-button-click=${this._handleCloseButtonClick}
              ></ag-close-button>
            `:j}
          </div>
        </ag-alert>
      </div>
    `}};M.styles=G`
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
  `;let r=M;d([y({type:Boolean,reflect:!0})],r.prototype,"open");d([y({type:String})],r.prototype,"type");d([y({type:String,reflect:!0})],r.prototype,"position");d([y({type:Number})],r.prototype,"duration");d([y({type:Boolean})],r.prototype,"autoDismiss");d([y({type:Boolean})],r.prototype,"showCloseButton");d([y({type:Boolean})],r.prototype,"pauseOnHover");d([y({type:Boolean})],r.prototype,"bordered");d([y({type:Boolean})],r.prototype,"rounded");d([y({type:Boolean})],r.prototype,"borderedLeft");d([y({attribute:!1})],r.prototype,"onToastOpen");d([y({attribute:!1})],r.prototype,"onToastClose");d([y({attribute:!1})],r.prototype,"onToastDismiss");d([Y()],r.prototype,"_isHovered");customElements.get("ag-toast")||customElements.define("ag-toast",r);const ls=[".open",".autoDismiss",".showCloseButton",".pauseOnHover",".bordered",".rounded",".borderedLeft","type","position","duration"],hs=W({__name:"VueToast",props:{open:{type:Boolean,default:!1},type:{default:"default"},position:{default:"top-end"},duration:{default:5e3},autoDismiss:{type:Boolean,default:!0},showCloseButton:{type:Boolean,default:!0},pauseOnHover:{type:Boolean,default:!0},bordered:{type:Boolean,default:!1},rounded:{type:Boolean,default:!0},borderedLeft:{type:Boolean,default:!1},onToastOpen:{},onToastClose:{},onToastDismiss:{}},emits:["toast-open","toast-close","toast-dismiss","update:open"],setup(i,{emit:s}){const h=s,u=k(),F=g=>{h("toast-open",g),h("update:open",!0)},o=g=>{h("toast-close",g),h("update:open",!1)},l=g=>{h("toast-dismiss",g),h("update:open",!1)};return(g,C)=>(w(),f("ag-toast",x({ref_key:"toastRef",ref:u,".open":i.open,".autoDismiss":i.autoDismiss,".showCloseButton":i.showCloseButton,".pauseOnHover":i.pauseOnHover,".bordered":i.bordered,".rounded":i.rounded,".borderedLeft":i.borderedLeft,type:i.type,position:i.position,duration:i.duration,onToastOpen:F,onToastClose:o,onToastDismiss:l},g.$attrs),[J(g.$slots,"default")],48,ls))}}),ks=W({name:"ToastExamples",components:{VueToast:hs,AlertTriangle:ts,AlertCircle:K,XCircle:as,CheckCircle:is,Info:ss,Sparkles:_},setup(){const i=k(!1),s=k(!1),h=k(!1),u=k(!1),F=k(!1),o=k(!1),l=k(!1),g=k(!1),C=k(!1),B=k(!1),E=k(!1),A=k(!1),m=k(!1),a=k(!1),T=k(!1),v=k(!1),q=k(!1),S=k(!1),I=k(!1),$=k(!1),P=k(!1),R=k(!1),N=k(!1),L=k(!1),V=k(!1),U={showDefault:i,showSuccess:s,showInfo:h,showPrimary:u,showWarning:F,showError:o,showDanger:l,showMonochrome:g,showTopStart:C,showTop:B,showTopEnd:E,showBottomStart:A,showBottom:m,showBottomEnd:a,showBordered:T,showBorderedLeft:v,showNotRounded:q,showQuickDismiss:S,showAutoDismiss:I,showNoAutoDismiss:$,showNoPause:P,showNoCloseButton:R,showIconSuccess:N,showIconInfo:L,showCustomGradient:V};let D=null;function H(b){D&&D!==b&&(U[D].value=!1),U[b].value=!0,D=b}return{showDefault:i,showSuccess:s,showInfo:h,showPrimary:u,showWarning:F,showError:o,showDanger:l,showMonochrome:g,showTopStart:C,showTop:B,showTopEnd:E,showBottomStart:A,showBottom:m,showBottomEnd:a,showBordered:T,showBorderedLeft:v,showNotRounded:q,showQuickDismiss:S,showAutoDismiss:I,showNoAutoDismiss:$,showNoPause:P,showNoCloseButton:R,showIconSuccess:N,showIconInfo:L,showCustomGradient:V,showToast:H}}}),ps={class:"stacked mbe4"},es={class:"flex-inline items-center"},Fs={class:"flex-inline items-center"},os={class:"flex-inline items-center"},rs={class:"stacked mbe4"},ds={class:"stacked mbe4"},gs={class:"flex-inline items-center"},ys={class:"stacked mbe4"},us={class:"stacked mbe4"},cs={class:"stacked mbe4"},Cs={class:"flex-inline items-center"},Es={class:"flex-inline items-center"},Bs={class:"stacked mbe4"},As={class:"flex-inline items-center"};function ms(i,s,h,u,F,o){const l=c("VueToast"),g=c("AlertTriangle"),C=c("AlertCircle"),B=c("XCircle"),E=c("CheckCircle"),A=c("Info"),m=c("Sparkles");return w(),f("section",null,[s[100]||(s[100]=t("div",{class:"mbe4 guidance-note"},[t("h3",null,"Demo Pattern: Single Toast Display"),t("p",null," This demo automatically dismisses any visible toast before showing a new one. This prevents toast overlap and is the recommended pattern for most applications. See the documentation below for alternative approaches if you need multiple simultaneous toasts. ")],-1)),s[101]||(s[101]=t("div",{class:"mbe4"},[t("h2",null,"Toast Types")],-1)),t("div",ps,[t("button",{class:"demo-button",onClick:s[0]||(s[0]=a=>i.showToast("showDefault"))}," Show Default Toast "),n(l,{open:i.showDefault,"onUpdate:open":s[1]||(s[1]=a=>i.showDefault=a),onToastClose:s[2]||(s[2]=a=>i.showDefault=!1)},{default:e(()=>[...s[75]||(s[75]=[p(" Default toast notification ",-1)])]),_:1},8,["open"]),t("button",{class:"demo-button",onClick:s[3]||(s[3]=a=>i.showToast("showSuccess"))}," Show Success Toast "),n(l,{open:i.showSuccess,"onUpdate:open":s[4]||(s[4]=a=>i.showSuccess=a),type:"success",onToastClose:s[5]||(s[5]=a=>i.showSuccess=!1)},{default:e(()=>[...s[76]||(s[76]=[p(" Operation completed successfully! ",-1)])]),_:1},8,["open"]),t("button",{class:"demo-button",onClick:s[6]||(s[6]=a=>i.showToast("showInfo"))}," Show Info Toast "),n(l,{open:i.showInfo,"onUpdate:open":s[7]||(s[7]=a=>i.showInfo=a),type:"info",onToastClose:s[8]||(s[8]=a=>i.showInfo=!1)},{default:e(()=>[...s[77]||(s[77]=[p(" New message received! ",-1)])]),_:1},8,["open"]),t("button",{class:"demo-button",onClick:s[9]||(s[9]=a=>i.showToast("showPrimary"))}," Show Primary Toast "),n(l,{open:i.showPrimary,"onUpdate:open":s[10]||(s[10]=a=>i.showPrimary=a),type:"primary",onToastClose:s[11]||(s[11]=a=>i.showPrimary=!1)},{default:e(()=>[...s[78]||(s[78]=[p(" New feature available! ",-1)])]),_:1},8,["open"]),t("button",{class:"demo-button",onClick:s[12]||(s[12]=a=>i.showToast("showWarning"))}," Show Warning Toast "),n(l,{open:i.showWarning,"onUpdate:open":s[13]||(s[13]=a=>i.showWarning=a),type:"warning",onToastClose:s[14]||(s[14]=a=>i.showWarning=!1)},{default:e(()=>[t("div",es,[n(g,{size:20,class:"mie3"}),s[79]||(s[79]=p(" Warning: This action cannot be undone. ",-1))])]),_:1},8,["open"]),t("button",{class:"demo-button",onClick:s[15]||(s[15]=a=>i.showToast("showError"))}," Show Error Toast "),n(l,{open:i.showError,"onUpdate:open":s[16]||(s[16]=a=>i.showError=a),type:"error",onToastClose:s[17]||(s[17]=a=>i.showError=!1)},{default:e(()=>[t("div",Fs,[n(C,{size:20,class:"mie3"}),s[80]||(s[80]=p(" An error occurred. Please try again. ",-1))])]),_:1},8,["open"]),t("button",{class:"demo-button",onClick:s[18]||(s[18]=a=>i.showToast("showDanger"))}," Show Danger Toast "),n(l,{open:i.showDanger,"onUpdate:open":s[19]||(s[19]=a=>i.showDanger=a),type:"danger",onToastClose:s[20]||(s[20]=a=>i.showDanger=!1)},{default:e(()=>[t("div",os,[n(B,{size:20,class:"mie3"}),s[81]||(s[81]=p(" Critical error detected! ",-1))])]),_:1},8,["open"]),t("button",{class:"demo-button",onClick:s[21]||(s[21]=a=>i.showToast("showMonochrome"))}," Show Monochrome Toast "),n(l,{open:i.showMonochrome,"onUpdate:open":s[22]||(s[22]=a=>i.showMonochrome=a),type:"monochrome",onToastClose:s[23]||(s[23]=a=>i.showMonochrome=!1)},{default:e(()=>[...s[82]||(s[82]=[t("div",{class:"flex-inline items-center"}," Modern monochrome notification ",-1)])]),_:1},8,["open"])]),s[102]||(s[102]=t("div",{class:"mbe4"},[t("h2",null,"Positions")],-1)),t("div",rs,[t("button",{class:"demo-button",onClick:s[24]||(s[24]=a=>i.showToast("showTopStart"))}," Top Start "),n(l,{open:i.showTopStart,"onUpdate:open":s[25]||(s[25]=a=>i.showTopStart=a),position:"top-start",onToastClose:s[26]||(s[26]=a=>i.showTopStart=!1)},{default:e(()=>[...s[83]||(s[83]=[p(" Toast at top-start ",-1)])]),_:1},8,["open"]),t("button",{class:"demo-button",onClick:s[27]||(s[27]=a=>i.showToast("showTop"))}," Top (Full Width) "),n(l,{open:i.showTop,"onUpdate:open":s[28]||(s[28]=a=>i.showTop=a),position:"top",onToastClose:s[29]||(s[29]=a=>i.showTop=!1)},{default:e(()=>[...s[84]||(s[84]=[p(" Toast at top (full width) ",-1)])]),_:1},8,["open"]),t("button",{class:"demo-button",onClick:s[30]||(s[30]=a=>i.showToast("showTopEnd"))}," Top End (Default) "),n(l,{open:i.showTopEnd,"onUpdate:open":s[31]||(s[31]=a=>i.showTopEnd=a),position:"top-end",onToastClose:s[32]||(s[32]=a=>i.showTopEnd=!1)},{default:e(()=>[...s[85]||(s[85]=[p(" Toast at top-end (default) ",-1)])]),_:1},8,["open"]),t("button",{class:"demo-button",onClick:s[33]||(s[33]=a=>i.showToast("showBottomStart"))}," Bottom Start "),n(l,{open:i.showBottomStart,"onUpdate:open":s[34]||(s[34]=a=>i.showBottomStart=a),position:"bottom-start",onToastClose:s[35]||(s[35]=a=>i.showBottomStart=!1)},{default:e(()=>[...s[86]||(s[86]=[p(" Toast at bottom-start ",-1)])]),_:1},8,["open"]),t("button",{class:"demo-button",onClick:s[36]||(s[36]=a=>i.showToast("showBottom"))}," Bottom (Full Width) "),n(l,{open:i.showBottom,"onUpdate:open":s[37]||(s[37]=a=>i.showBottom=a),position:"bottom",onToastClose:s[38]||(s[38]=a=>i.showBottom=!1)},{default:e(()=>[...s[87]||(s[87]=[p(" Toast at bottom (full width) ",-1)])]),_:1},8,["open"]),t("button",{class:"demo-button",onClick:s[39]||(s[39]=a=>i.showToast("showBottomEnd"))}," Bottom End "),n(l,{open:i.showBottomEnd,"onUpdate:open":s[40]||(s[40]=a=>i.showBottomEnd=a),position:"bottom-end",onToastClose:s[41]||(s[41]=a=>i.showBottomEnd=!1)},{default:e(()=>[...s[88]||(s[88]=[p(" Toast at bottom-end ",-1)])]),_:1},8,["open"])]),s[103]||(s[103]=t("div",{class:"mbe4"},[t("h2",null,"Border Styles")],-1)),t("div",ds,[t("button",{class:"demo-button",onClick:s[42]||(s[42]=a=>i.showToast("showBordered"))}," Bordered Toast "),n(l,{open:i.showBordered,"onUpdate:open":s[43]||(s[43]=a=>i.showBordered=a),type:"info",bordered:"",onToastClose:s[44]||(s[44]=a=>i.showBordered=!1)},{default:e(()=>[...s[89]||(s[89]=[p(" Toast with border ",-1)])]),_:1},8,["open"]),t("button",{class:"demo-button",onClick:s[45]||(s[45]=a=>i.showToast("showBorderedLeft"))}," Left Border Toast "),n(l,{open:i.showBorderedLeft,"onUpdate:open":s[46]||(s[46]=a=>i.showBorderedLeft=a),type:"success",borderedLeft:"",onToastClose:s[47]||(s[47]=a=>i.showBorderedLeft=!1)},{default:e(()=>[t("div",gs,[n(E,{size:20,class:"mie3"}),s[90]||(s[90]=p(" Toast with left border accent ",-1))])]),_:1},8,["open"]),t("button",{class:"demo-button",onClick:s[48]||(s[48]=a=>i.showToast("showNotRounded"))}," Not Rounded Toast "),n(l,{open:i.showNotRounded,"onUpdate:open":s[49]||(s[49]=a=>i.showNotRounded=a),type:"primary",rounded:!1,onToastClose:s[50]||(s[50]=a=>i.showNotRounded=!1)},{default:e(()=>[...s[91]||(s[91]=[p(" Toast without rounded corners ",-1)])]),_:1},8,["open"])]),s[104]||(s[104]=t("div",{class:"mbe4"},[t("h2",null,"Auto-Dismiss Options")],-1)),t("div",ys,[t("button",{class:"demo-button",onClick:s[51]||(s[51]=a=>i.showToast("showQuickDismiss"))}," Quick Dismiss (2s) "),n(l,{open:i.showQuickDismiss,"onUpdate:open":s[52]||(s[52]=a=>i.showQuickDismiss=a),duration:2e3,type:"info",onToastClose:s[53]||(s[53]=a=>i.showQuickDismiss=!1)},{default:e(()=>[...s[92]||(s[92]=[p(" This toast will auto-dismiss in 2 seconds ",-1)])]),_:1},8,["open"]),t("button",{class:"demo-button",onClick:s[54]||(s[54]=a=>i.showToast("showAutoDismiss"))}," Auto-Dismiss (5s) "),n(l,{open:i.showAutoDismiss,"onUpdate:open":s[55]||(s[55]=a=>i.showAutoDismiss=a),duration:5e3,type:"info",onToastClose:s[56]||(s[56]=a=>i.showAutoDismiss=!1)},{default:e(()=>[...s[93]||(s[93]=[p(" This toast will auto-dismiss in 5 seconds (default) ",-1)])]),_:1},8,["open"]),t("button",{class:"demo-button",onClick:s[57]||(s[57]=a=>i.showToast("showNoAutoDismiss"))}," No Auto-Dismiss "),n(l,{open:i.showNoAutoDismiss,"onUpdate:open":s[58]||(s[58]=a=>i.showNoAutoDismiss=a),"auto-dismiss":!1,type:"warning",onToastClose:s[59]||(s[59]=a=>i.showNoAutoDismiss=!1)},{default:e(()=>[...s[94]||(s[94]=[p(" This toast will not auto-dismiss. Click X to close. ",-1)])]),_:1},8,["open"]),t("button",{class:"demo-button",onClick:s[60]||(s[60]=a=>i.showToast("showNoPause"))}," No Pause on Hover "),n(l,{open:i.showNoPause,"onUpdate:open":s[61]||(s[61]=a=>i.showNoPause=a),"pause-on-hover":!1,duration:3e3,type:"info",onToastClose:s[62]||(s[62]=a=>i.showNoPause=!1)},{default:e(()=>[...s[95]||(s[95]=[p(" Hover won't pause this toast's timer ",-1)])]),_:1},8,["open"])]),s[105]||(s[105]=t("div",{class:"mbe4"},[t("h2",null,"Close Button Options")],-1)),t("div",us,[t("button",{class:"demo-button",onClick:s[63]||(s[63]=a=>i.showToast("showNoCloseButton"))}," No Close Button "),n(l,{open:i.showNoCloseButton,"onUpdate:open":s[64]||(s[64]=a=>i.showNoCloseButton=a),"show-close-button":!1,type:"info",duration:3e3,onToastClose:s[65]||(s[65]=a=>i.showNoCloseButton=!1)},{default:e(()=>[...s[96]||(s[96]=[p(" Toast without close button (auto-dismisses) ",-1)])]),_:1},8,["open"])]),s[106]||(s[106]=t("div",{class:"mbe4"},[t("h2",null,"With Icons")],-1)),t("div",cs,[t("button",{class:"demo-button",onClick:s[66]||(s[66]=a=>i.showToast("showIconSuccess"))}," Success with Icon "),n(l,{open:i.showIconSuccess,"onUpdate:open":s[67]||(s[67]=a=>i.showIconSuccess=a),type:"success",onToastClose:s[68]||(s[68]=a=>i.showIconSuccess=!1)},{default:e(()=>[t("div",Cs,[n(E,{size:20,class:"mie3"}),s[97]||(s[97]=p(" File uploaded successfully! ",-1))])]),_:1},8,["open"]),t("button",{class:"demo-button",onClick:s[69]||(s[69]=a=>i.showToast("showIconInfo"))}," Info with Icon "),n(l,{open:i.showIconInfo,"onUpdate:open":s[70]||(s[70]=a=>i.showIconInfo=a),type:"info",onToastClose:s[71]||(s[71]=a=>i.showIconInfo=!1)},{default:e(()=>[t("div",Es,[n(A,{size:20,class:"mie3"}),s[98]||(s[98]=p(" You have 3 unread messages ",-1))])]),_:1},8,["open"])]),s[107]||(s[107]=t("div",{class:"mbe4"},[t("h2",null,"CSS Shadow Parts Customization"),t("p",{class:"mbe2",style:{color:"var(--ag-text-secondary)","font-size":"0.875rem"}}," Customize toast appearance using CSS Shadow Parts without breaking encapsulation. ")],-1)),t("div",Bs,[t("button",{class:"demo-button",onClick:s[72]||(s[72]=a=>i.showToast("showCustomGradient"))}," Custom Gradient Toast "),n(l,{open:i.showCustomGradient,"onUpdate:open":s[73]||(s[73]=a=>i.showCustomGradient=a),class:"custom-gradient-toast",position:"top-end",onToastClose:s[74]||(s[74]=a=>i.showCustomGradient=!1)},{default:e(()=>[t("div",As,[n(m,{size:20,class:"mie3"}),s[99]||(s[99]=p(" Custom styled toast with gradient ",-1))])]),_:1},8,["open"])]),s[108]||(s[108]=z("",1))])}const Ds=Z(ks,[["render",ms],["__scopeId","data-v-64441277"]]),Vs=JSON.parse('{"title":"Toast","description":"","frontmatter":{},"headers":[],"relativePath":"components/toast.md","filePath":"components/toast.md"}'),bs={name:"components/toast.md"},Us=Object.assign(bs,{setup(i){return(s,h)=>(w(),f("div",null,[h[0]||(h[0]=t("h1",{id:"toast",tabindex:"-1"},[p("Toast "),t("a",{class:"header-anchor",href:"#toast","aria-label":'Permalink to "Toast"'},"​")],-1)),n(X),h[1]||(h[1]=t("p",null,"Toast notification is a non-modal element that appears at viewport edges or corners to provide brief, contextual feedback to a user. It can auto-dismiss after a duration and support pause-on-hover behavior.",-1)),h[2]||(h[2]=t("h2",{id:"examples",tabindex:"-1"},[p("Examples "),t("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),n(Ds),h[3]||(h[3]=z("",30))]))}});export{Vs as __pageData,Us as default};
