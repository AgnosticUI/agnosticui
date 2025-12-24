import{c as m,A as b}from"./chunks/AlphaWarning.BkRV4LZN.js";import{i as A,a as q,x as g,E as v}from"./chunks/lit-element.B0TUrqGF.js";import{z as F}from"./chunks/property-CemaeiRl.BAjarvIB.js";import{n as u}from"./chunks/state-CovhUvdr.BllWkzJh.js";import"./chunks/IconButton.DPQRo588.js";import{d as x,p as f,c as r,o,e as y,r as c,K as w,_,C as S,j as a,G as n,w as C,ah as P,ai as I,ae as V,a as E}from"./chunks/framework.BoyT2Jkt.js";import{C as z}from"./chunks/check.CX_3RxTF.js";import"./chunks/IconButton.DT6rmXbZ.js";import"./chunks/if-defined-C8i28hSj.CfeO1FY9.js";/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=m("clipboard",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}]]);var T=Object.defineProperty,p=(l,s,i,e)=>{for(var h=void 0,d=l.length-1,t;d>=0;d--)(t=l[d])&&(h=t(s,i,h)||h);return h&&T(s,i,h),h};const B=class extends q{constructor(){super(),this._isCopied=!1,this._hasError=!1,this._announcement="",this.text="",this.label="Copy to clipboard",this.successLabel="Copied!",this.errorLabel="Copy failed",this.timeout=1e3,this.size="md",this.variant="ghost"}disconnectedCallback(){super.disconnectedCallback(),this._timeoutId&&clearTimeout(this._timeoutId)}firstUpdated(){this._validateSlots()}_validateSlots(){const s=this.querySelector('[slot="icon-copy"]'),i=this.querySelector('[slot="icon-copied"]'),e=!!s;if(e!==!!i)throw new Error(`AgCopyButton: Both "icon-copy" and "icon-copied" slots must be provided together. Currently provided: ${e?"icon-copy":"icon-copied"} only.`)}async _copyWithFallback(s){if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(s);return}const i=document.createElement("textarea");i.value=s,i.style.position="fixed",i.style.left="-999999px",i.style.top="-999999px",document.body.appendChild(i),i.focus(),i.select();try{if(!document.execCommand("copy"))throw new Error("execCommand copy failed")}finally{document.body.removeChild(i)}}_handleCopy(){this.text&&(this._timeoutId&&clearTimeout(this._timeoutId),this._hasError=!1,this._copyWithFallback(this.text).then(()=>{this._isCopied=!0,this._announcement=this.successLabel,this.dispatchEvent(new CustomEvent("copy",{detail:{text:this.text},bubbles:!0,composed:!0})),this._timeoutId=window.setTimeout(()=>{this._isCopied=!1,this._announcement=""},this.timeout)}).catch(s=>{this._hasError=!0,this._announcement=this.errorLabel,this.dispatchEvent(new CustomEvent("copy-error",{detail:{error:s},bubbles:!0,composed:!0})),this._timeoutId=window.setTimeout(()=>{this._hasError=!1,this._announcement=""},this.timeout)}))}_renderIcon(){return g`
      <span class="ag-icon-stack" part="icon-stack">
        <slot name="icon-error" part="icon icon-error" class="ag-icon-slot ${this._hasError?"visible":""}">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
          </svg>
        </slot>

        <slot name="icon-copied" part="icon icon-copied" class="ag-icon-slot ${this._isCopied&&!this._hasError?"visible":""}">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
          </svg>
        </slot>

        <slot name="icon-copy" part="icon icon-copy" class="ag-icon-slot ${!this._isCopied&&!this._hasError?"visible":""}">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
          </svg>
        </slot>
      </span>
    `}render(){const s=this._hasError?this.errorLabel:this._isCopied?this.successLabel:this.label;return g`
      <ag-icon-button
        part="button"
        .size="${this.size}"
        .variant="${this.variant}"
        .label="${s}"
        @click="${this._handleCopy}"
      >
        ${this._renderIcon()}
      </ag-icon-button>
      
      ${this._announcement?g`<span class="sr-only" role="status" aria-live="polite" aria-atomic="true">
            ${this._announcement}
          </span>`:v}
    `}};B.styles=A`
    :host {
      display: inline-block;
    }

    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border-width: 0;
    }

    /* Stacked icon slots for smooth cross-fade between states */
    .ag-icon-stack {
      position: relative;
      /* Make this a block-level box so the parent IconButton's flex centering
         can reliably center the stacked slots. Inline alignment can interfere
         with flex layout in some browsers, causing the "pushed down" effect. */
      display: block;
      width: 1em;
      height: 1em;
    }

    /* Each slot occupies the full stack and is centered */
    .ag-icon-slot {
      position: absolute;
      inset: 0;
      /* Use grid centering to avoid baseline/line-height shifts during transitions */
      display: grid;
      place-items: center;
      opacity: 0;
      transition: opacity var(--ag-motion-fast, 150ms) ease-in-out;
      will-change: opacity;
      pointer-events: none;
    }

    .ag-icon-slot.visible {
      opacity: 1;
      pointer-events: auto;
    }

    /* Ensure slotted SVGs and fallback svgs size consistently to the IconButton's em-based icon box
       Use 1em so icons scale with the IconButton font-size and avoid layout shifts during cross-fade */
    .ag-icon-slot::slotted(svg),
    .ag-icon-slot svg {
      width: 1em;
      height: 1em;
      max-inline-size: 100%;
      max-block-size: 100%;
      display: block;
    }
  `;let k=B;p([F({type:String})],k.prototype,"text");p([F({type:String})],k.prototype,"label");p([F({type:String,attribute:"success-label"})],k.prototype,"successLabel");p([F({type:String,attribute:"error-label"})],k.prototype,"errorLabel");p([F({type:Number})],k.prototype,"timeout");p([F({type:String})],k.prototype,"size");p([F({type:String})],k.prototype,"variant");p([u()],k.prototype,"_isCopied");p([u()],k.prototype,"_hasError");p([u()],k.prototype,"_announcement");customElements.get("ag-copy-button")||customElements.define("ag-copy-button",k);const $=["text","label","success-label","error-label","timeout","size","variant"],M={key:0,slot:"icon-copy"},U={key:1,slot:"icon-copied"},H={key:2,slot:"icon-error"},j=x({__name:"VueCopyButton",props:{text:{},label:{default:"Copy to clipboard"},successLabel:{default:"Copied!"},errorLabel:{default:"Copy failed"},timeout:{default:1e3},size:{default:"md"},variant:{default:"ghost"}},emits:["copy","copy-error"],setup(l){const s=f(null);return(i,e)=>(o(),r("ag-copy-button",w({ref_key:"agComponent",ref:s,text:l.text,label:l.label,"success-label":l.successLabel,"error-label":l.errorLabel,timeout:l.timeout,size:l.size,variant:l.variant},i.$attrs,{onCopy:e[0]||(e[0]=h=>i.$emit("copy",h)),onCopyError:e[1]||(e[1]=h=>i.$emit("copy-error",h))}),[i.$slots["icon-copy"]?(o(),r("span",M,[c(i.$slots,"icon-copy")])):y("",!0),i.$slots["icon-copied"]?(o(),r("span",U,[c(i.$slots,"icon-copied")])):y("",!0),i.$slots["icon-error"]?(o(),r("span",H,[c(i.$slots,"icon-error")])):y("",!0)],16,$))}}),R={name:"CopyButtonExamples",components:{VueCopyButton:j,Clipboard:L,Check:z},data(){return{inputValue:"https://agnosticui.com/components/copybutton"}}},N={class:"stacked-mobile mbe4"},W={class:"stacked-mobile mbe4"},G={class:"stacked-mobile mbe4"},K={class:"stacked-mobile mbe4"},O={class:"code-example mbe4"},Y={class:"stacked-mobile mbe4"},J={style:{display:"flex",gap:"12px","align-items":"center",flex:"1"}};function Z(l,s,i,e,h,d){const t=S("VueCopyButton");return o(),r("section",null,[s[4]||(s[4]=a("div",{class:"mbe4"},[a("h2",null,"Basic Copy Button")],-1)),a("div",N,[n(t,{text:"https://agnosticui.com",label:"Copy URL"})]),s[5]||(s[5]=a("div",{class:"mbe4"},[a("h2",null,"Projected Icons")],-1)),a("div",W,[n(t,{text:"Projected Icons Example",label:"Projected Icons"},{"icon-copy":C(()=>[...s[1]||(s[1]=[a("svg",{width:"100%",height:"100%",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[a("path",{d:"M7.5 3H14.6C16.8402 3 17.9603 3 18.816 3.43597C19.5686 3.81947 20.1805 4.43139 20.564 5.18404C21 6.03969 21 7.15979 21 9.4V16.5M6.2 21H14.3C15.4201 21 15.9802 21 16.408 20.782C16.7843 20.5903 17.0903 20.2843 17.282 19.908C17.5 19.4802 17.5 18.9201 17.5 17.8V9.7C17.5 8.57989 17.5 8.01984 17.282 7.59202C17.0903 7.21569 16.7843 6.90973 16.408 6.71799C15.9802 6.5 15.4201 6.5 14.3 6.5H6.2C5.0799 6.5 4.51984 6.5 4.09202 6.71799C3.71569 6.90973 3.40973 7.21569 3.21799 7.59202C3 8.01984 3 8.57989 3 9.7V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.0799 21 6.2 21Z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])]),"icon-copied":C(()=>[...s[2]||(s[2]=[a("svg",{width:"100%",height:"100%",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[a("path",{d:"M20 6L9 17L4 12",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])]),_:1})]),s[6]||(s[6]=a("div",{class:"mbe4"},[a("h2",null,"Sizes & Variants")],-1)),a("div",G,[n(t,{text:"Copy this",size:"xs"}),n(t,{text:"Copy this",size:"sm"}),n(t,{text:"Copy this",size:"md"}),n(t,{text:"Copy this",size:"lg"}),n(t,{text:"Copy this",size:"xl"})]),a("div",K,[n(t,{text:"Copy primary",variant:"primary"}),n(t,{text:"Copy success",variant:"success"}),n(t,{text:"Copy warning",variant:"warning"}),n(t,{text:"Copy danger",variant:"danger"}),n(t,{text:"Copy ghost",variant:"ghost"})]),s[7]||(s[7]=a("div",{class:"mbe4"},[a("h2",null,"Inline Code Example")],-1)),a("div",O,[s[3]||(s[3]=a("pre",null,[a("code",null,"npm install agnosticui-core")],-1)),n(t,{class:"code-copy",text:"npm install agnosticui-core",label:"Copy install command",size:"sm",variant:"ghost"})]),s[8]||(s[8]=a("div",{class:"mbe4"},[a("h2",null,"Copy From Input"),a("p",{class:"mbe2",style:{color:"var(--ag-text-secondary)","font-size":"0.875rem"}},"Copy the value from the input using reactive binding.")],-1)),a("div",Y,[a("div",J,[P(a("input",{"onUpdate:modelValue":s[0]||(s[0]=D=>h.inputValue=D),"aria-label":"Copy input",style:{padding:"8px",flex:"1","border-radius":"6px",border:"1px solid var(--ag-border)"}},null,512),[[I,h.inputValue]]),n(t,{text:h.inputValue,label:"Copy input"},null,8,["text"])])])])}const Q=_(R,[["render",Z],["__scopeId","data-v-d16a3eaf"]]),Fs=JSON.parse('{"title":"Copy Button","description":"","frontmatter":{},"headers":[],"relativePath":"components/copybutton.md","filePath":"components/copybutton.md"}'),X={name:"components/copybutton.md"},rs=Object.assign(X,{setup(l){return(s,i)=>(o(),r("div",null,[i[0]||(i[0]=a("h1",{id:"copy-button",tabindex:"-1"},[E("Copy Button "),a("a",{class:"header-anchor",href:"#copy-button","aria-label":'Permalink to "Copy Button"'},"​")],-1)),n(b),i[1]||(i[1]=a("p",null,"An accessible button component that copies text to the clipboard with visual feedback. The CopyButton automatically toggles between copy and checkmark icons and provides customizable success messaging.",-1)),i[2]||(i[2]=a("h2",{id:"examples",tabindex:"-1"},[E("Examples "),a("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),n(Q),i[3]||(i[3]=V("",50))]))}});export{Fs as __pageData,rs as default};
