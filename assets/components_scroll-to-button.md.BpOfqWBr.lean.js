import{c as B,A as x}from"./chunks/AlphaWarning.BkRV4LZN.js";import{i as w,a as A,x as c}from"./chunks/lit-element.B0TUrqGF.js";import{z as h}from"./chunks/property-CemaeiRl.BAjarvIB.js";import"./chunks/Button.CXY3ONNo.js";import{s as S}from"./chunks/plugin-vue_export-helper-CHgC5LLL.lGy7RumW.js";import{d as f,c as g,o as F,e as T,r as q,_ as D,C as m,j as s,G as a,F as b,B as P,t as z,a as e,w as L,ae as C,k as d}from"./chunks/framework.BoyT2Jkt.js";import{R as V}from"./chunks/rocket.BYKrjCXb.js";import{Z as _}from"./chunks/zap.CuMI4rRq.js";import{P as I,A as $}from"./chunks/palette.C-GiaM2z.js";import{M as R}from"./chunks/map-pin.DITM0xc_.js";import{C as M,a as j}from"./chunks/circle-x.91alMDxT.js";import"./chunks/if-defined-C8i28hSj.CfeO1FY9.js";/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=B("eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=B("wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]]);var W=Object.defineProperty,p=(n,i,t,u)=>{for(var r=void 0,k=n.length-1,l;k>=0;k--)(l=n[k])&&(r=l(i,t,r)||r);return r&&W(i,t,r),r};const v=class extends A{constructor(){super(),this._targetElement=null,this._handleScroll=()=>{this.visible=window.scrollY>this.scrollThreshold},this.label="Back to Top",this.showLabel=!1,this.icon=!0,this.scrollThreshold=400,this.target="top",this.direction="auto",this.smoothScroll=!0,this.visible=!1,this.size="md",this.shape=""}_getScrollBehavior(){const i=window.matchMedia("(prefers-reduced-motion: reduce)").matches;return this.smoothScroll&&!i?"smooth":"auto"}_getScrollTarget(){if(this._targetElement)return this._targetElement.offsetTop;if(typeof this.target=="string")switch(this.target){case"top":return 0;case"bottom":return document.documentElement.scrollHeight-window.innerHeight;default:{const i=document.getElementById(this.target);if(i)return i.offsetTop;const t=document.querySelector(this.target);return t instanceof HTMLElement?t.offsetTop:(console.warn(`ScrollToButton: Target "${this.target}" not found, scrolling to top`),0)}}return 0}_getDirection(){if(this.direction!=="auto")return this.direction;if(this._targetElement)return this._targetElement.offsetTop<window.scrollY?"up":"down";if(typeof this.target=="string")switch(this.target){case"bottom":return"down";case"top":default:return"up"}return"up"}_scrollToTarget(){const i=this._getScrollTarget(),t=this._getScrollBehavior();window.scrollTo({top:i,behavior:t})}setTargetElement(i){this._targetElement=i}connectedCallback(){super.connectedCallback(),window.addEventListener("scroll",this._handleScroll,{passive:!0}),this._handleScroll()}disconnectedCallback(){window.removeEventListener("scroll",this._handleScroll),super.disconnectedCallback()}_renderDefaultIcon(){return this._getDirection()==="down"?c`
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20"
          viewBox="0 0 24 24"
          width="20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
        </svg>
      `:c`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="20"
        viewBox="0 0 24 24"
        width="20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
      </svg>
    `}render(){const i=this.showLabel||!this.icon,t=this.icon&&!i;return c`
      <ag-button
        mode="primary"
        size="${this.size}"
        shape="${this.shape||(t?"circle":"")}"
        @click="${this._scrollToTarget}"
        aria-label="${this.label}"
        part="ag-scrollto-button"
        exportparts="ag-button"
        role="button"
      >
        <div class="button-content" part="ag-button-content">
          ${this.icon?c`
            <span class="ag-icon-wrapper" part="ag-icon-wrapper">
              <slot name="icon">
                ${this._renderDefaultIcon()}
              </slot>
            </span>
          `:""}
          ${i?c`
            <span class="label" part="ag-label">${this.label}</span>
          `:""}
        </div>
      </ag-button>
    `}};v.styles=w`
    :host {
      display: inline-block;
      position: fixed;
      bottom: var(--ag-space-8, 2rem);
      inset-inline-end: var(--ag-space-8, 2rem);
      z-index: var(--ag-z-index-sticky, 900);
      opacity: 0;
      visibility: hidden;
      transition: opacity var(--ag-motion-slow, 0.4s) ease-in-out,
                  visibility var(--ag-motion-slow, 0.4s) ease-in-out;
    }

    :host([visible]) {
      opacity: 1;
      visibility: visible;
    }

    @media (prefers-reduced-motion: reduce) {
      :host {
        transition: none;
      }
    }

    @media print {
      :host {
        display: none !important;
      }
    }

    /* Ensure button is large enough for touch targets */
    ag-button {
      min-width: 44px;
      min-height: 44px;
    }

    /* Default flex layout for icon + label */
    .button-content {
      display: flex;
      align-items: center;
      gap: var(--ag-space-2, 0.5rem);
      flex-direction: row;
    }

    /* Icon wrapper for part targeting */
    .icon-wrapper {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    /* Label wrapper for part targeting */
    .label {
      display: inline-block;
    }
  `;let o=v;p([h({type:String})],o.prototype,"label");p([h({type:Boolean})],o.prototype,"showLabel");p([h({type:Boolean})],o.prototype,"icon");p([h({type:Number})],o.prototype,"scrollThreshold");p([h({type:String})],o.prototype,"target");p([h({type:String})],o.prototype,"direction");p([h({type:Boolean})],o.prototype,"smoothScroll");p([h({type:Boolean,reflect:!0})],o.prototype,"visible");p([h({type:String})],o.prototype,"size");p([h({type:String})],o.prototype,"shape");customElements.get("ag-scroll-to-button")||customElements.define("ag-scroll-to-button",o);const H=f({name:"VueScrollToButton",props:{label:{type:String,default:"Back to Top"},showLabel:{type:Boolean,default:!1},icon:{type:Boolean,default:!0},scrollThreshold:{type:Number,default:400},target:{type:String,default:"top"},direction:{type:String,default:"auto"},smoothScroll:{type:Boolean,default:!0},visible:{type:Boolean,default:!1},size:{type:String,default:"md"},shape:{type:String,default:""}}}),O=["label","showLabel","icon","scrollThreshold","target","direction","smoothScroll","visible","size","shape"],G={key:0,slot:"icon"};function J(n,i,t,u,r,k){return F(),g("ag-scroll-to-button",{label:n.label,showLabel:n.showLabel,icon:n.icon,scrollThreshold:n.scrollThreshold,target:n.target,direction:n.direction,smoothScroll:n.smoothScroll,visible:n.visible,size:n.size,shape:n.shape},[n.$slots.icon?(F(),g("span",G,[q(n.$slots,"icon")])):T("",!0)],8,O)}const K=S(H,[["render",J]]),Z=f({name:"ScrollToButtonExamples",components:{VueScrollToButton:K,Rocket:V}}),Y={class:"example-container"},Q={class:"example-section"},X={class:"example-section"},ss={class:"example-section"},is={class:"example-section"},ts={class:"example-section"},as={class:"inline-examples"},es={class:"inline-example"},ls={class:"inline-example"},ns={class:"inline-example"},os={class:"inline-example"},hs={class:"inline-example"},ps={class:"example-section"},rs={class:"inline-examples"},ds={class:"inline-example"},ks={class:"inline-example"},cs={class:"inline-example"},gs={class:"inline-example"},Fs={class:"inline-example"},us={class:"example-section"};function ys(n,i,t,u,r,k){const l=m("VueScrollToButton"),E=m("Rocket");return F(),g(b,null,[s("section",null,[i[0]||(i[0]=s("h2",null,"Default (Icon Only)",-1)),i[1]||(i[1]=s("p",null,"The most common use case - a circular button with just an icon that appears when scrolling down.",-1)),s("div",Y,[(F(),g(b,null,P(20,y=>s("p",{key:y,class:"example-paragraph"}," Paragraph "+z(y)+": Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. ",1)),64)),a(l,{style:{bottom:"100px"}})])]),s("section",Q,[i[2]||(i[2]=s("h2",null,"With Visible Label",-1)),i[3]||(i[3]=s("p",null,"Show both icon and text label for better clarity. The button becomes pill-shaped automatically.",-1)),a(l,{label:"Back to Top",scrollThreshold:200,showLabel:!0})]),s("section",X,[i[4]||(i[4]=s("h2",null,"Low Scroll Threshold",-1)),i[5]||(i[5]=s("p",null,[e("Control when the button appears by adjusting "),s("code",null,"scrollThreshold"),e(". This one appears after just 100px.")],-1)),a(l,{label:"Quick Access",showLabel:!0,scrollThreshold:100,style:{right:"180px"},shape:"rounded"})]),s("section",ss,[i[6]||(i[6]=s("h2",null,"Scroll to Bottom",-1)),i[7]||(i[7]=s("p",null,"Navigate to the end of content. The arrow automatically points down based on the target.",-1)),a(l,{style:{bottom:"160px"},label:"Go to Bottom",target:"bottom",scrollThreshold:400})]),s("section",is,[i[8]||(i[8]=s("h2",null,"Custom Icon with Slot",-1)),i[9]||(i[9]=s("p",null,"Replace the default arrow with any icon using Vue's slot system.",-1)),a(l,{label:"Launch to Top!",style:{bottom:"220px"},scrollThreshold:600},{icon:L(()=>[a(E,{size:20})]),_:1})]),s("section",ts,[i[15]||(i[15]=s("h2",null,"Different Sizes",-1)),i[16]||(i[16]=s("p",null,[e("Available sizes: "),s("code",null,"x-sm"),e(", "),s("code",null,"sm"),e(", "),s("code",null,"md"),e(" (default), "),s("code",null,"lg"),e(", "),s("code",null,"xl")],-1)),s("div",as,[s("div",es,[a(l,{size:"x-sm",style:{position:"static"}}),i[10]||(i[10]=s("span",null,"x-sm",-1))]),s("div",ls,[a(l,{size:"sm",style:{position:"static"}}),i[11]||(i[11]=s("span",null,"sm",-1))]),s("div",ns,[a(l,{size:"md",style:{position:"static"}}),i[12]||(i[12]=s("span",null,"md",-1))]),s("div",os,[a(l,{size:"lg",style:{position:"static"}}),i[13]||(i[13]=s("span",null,"lg",-1))]),s("div",hs,[a(l,{size:"xl",style:{position:"static"}}),i[14]||(i[14]=s("span",null,"xl",-1))])])]),s("section",ps,[i[22]||(i[22]=s("h2",null,"Different Shapes",-1)),i[23]||(i[23]=s("p",null,[e("Available shapes: "),s("code",null,"circle"),e(" (default), "),s("code",null,"square"),e(", "),s("code",null,"rounded"),e(", "),s("code",null,"rounded-square"),e(", "),s("code",null,"capsule")],-1)),s("div",rs,[s("div",ds,[a(l,{shape:"circle",style:{bottom:"280px"},scrollThreshold:800}),i[17]||(i[17]=s("span",null,"circle",-1))]),s("div",ks,[a(l,{shape:"square",style:{bottom:"340px"},scrollThreshold:1e3}),i[18]||(i[18]=s("span",null,"square",-1))]),s("div",cs,[a(l,{shape:"rounded",style:{bottom:"400px"},scrollThreshold:1200}),i[19]||(i[19]=s("span",null,"rounded",-1))]),s("div",gs,[a(l,{shape:"rounded-square",style:{bottom:"460px"},scrollThreshold:1400}),i[20]||(i[20]=s("span",null,"rounded-square",-1))]),s("div",Fs,[a(l,{shape:"capsule",showLabel:!0,label:"Top",style:{bottom:"580px"},scrollThreshold:1800}),i[21]||(i[21]=s("span",null,"capsule",-1))])])]),s("section",us,[i[24]||(i[24]=s("h2",null,"Custom Styling with CSS Shadow Parts",-1)),i[25]||(i[25]=s("p",null,"Style internal parts without breaking encapsulation using CSS Shadow Parts.",-1)),a(l,{class:"custom-gradient",label:"Styled Button",style:{bottom:"520px"},scrollThreshold:1600,showLabel:!0})])],64)}const ms=D(Z,[["render",ys],["__scopeId","data-v-d66abd47"]]),bs={style:{display:"flex","flex-direction":"column",gap:"0.75rem",margin:"1.5rem 0"}},Cs={style:{display:"flex","align-items":"center",gap:"0.5rem"}},Bs={style:{display:"flex","align-items":"center",gap:"0.5rem"}},fs={style:{display:"flex","align-items":"center",gap:"0.5rem"}},vs={style:{display:"flex","align-items":"center",gap:"0.5rem"}},Es={style:{display:"flex","align-items":"center",gap:"0.5rem"}},xs={style:{display:"flex","align-items":"center",gap:"0.5rem"}},ws={style:{display:"flex","flex-direction":"column",gap:"1rem",margin:"1.5rem 0"}},As={style:{display:"flex","align-items":"center",gap:"0.5rem","margin-bottom":"0.5rem"}},Ss={style:{display:"flex","align-items":"center",gap:"0.5rem","margin-bottom":"0.5rem"}},Us=JSON.parse('{"title":"ScrollToButton","description":"","frontmatter":{},"headers":[],"relativePath":"components/scroll-to-button.md","filePath":"components/scroll-to-button.md"}'),Ts={name:"components/scroll-to-button.md"},Ws=Object.assign(Ts,{setup(n){return(i,t)=>(F(),g("div",null,[t[18]||(t[18]=s("h1",{id:"scrolltobutton",tabindex:"-1"},[e("ScrollToButton "),s("a",{class:"header-anchor",href:"#scrolltobutton","aria-label":'Permalink to "ScrollToButton"'},"​")],-1)),a(x),t[19]||(t[19]=C("",3)),s("div",bs,[s("div",Cs,[a(d(N),{size:20,style:{color:"#3b82f6","flex-shrink":"0"}}),t[0]||(t[0]=s("strong",null,"Smart Visibility",-1)),t[1]||(t[1]=e(" - Automatically appears/disappears based on scroll position ",-1))]),s("div",Bs,[a(d(_),{size:20,style:{color:"#eab308","flex-shrink":"0"}}),t[2]||(t[2]=s("strong",null,"Smooth Scrolling",-1)),t[3]||(t[3]=e(" - Built-in smooth scroll with ",-1)),t[4]||(t[4]=s("code",null,"prefers-reduced-motion",-1)),t[5]||(t[5]=e(" support ",-1))]),s("div",fs,[a(d(I),{size:20,style:{color:"#a855f7","flex-shrink":"0"}}),t[6]||(t[6]=s("strong",null,"Highly Customizable",-1)),t[7]||(t[7]=e(" - Multiple sizes, shapes, and CSS Shadow Parts for styling ",-1))]),s("div",vs,[a(d($),{size:20,style:{color:"#10b981","flex-shrink":"0"}}),t[8]||(t[8]=s("strong",null,"Accessible",-1)),t[9]||(t[9]=e(" - Proper ARIA labels and keyboard navigation ",-1))]),s("div",Es,[a(d(R),{size:20,style:{color:"#ef4444","flex-shrink":"0"}}),t[10]||(t[10]=s("strong",null,"Flexible Targets",-1)),t[11]||(t[11]=e(" - Scroll to top, bottom, or specific page sections ",-1))]),s("div",xs,[a(d(U),{size:20,style:{color:"#6b7280","flex-shrink":"0"}}),t[12]||(t[12]=s("strong",null,"Framework Agnostic",-1)),t[13]||(t[13]=e(" - Works with Vue, React, and vanilla JavaScript ",-1))])]),t[20]||(t[20]=s("h2",{id:"when-to-use",tabindex:"-1"},[e("When to Use "),s("a",{class:"header-anchor",href:"#when-to-use","aria-label":'Permalink to "When to Use"'},"​")],-1)),s("div",ws,[s("div",null,[s("div",As,[a(d(M),{size:20,style:{color:"#10b981"}}),t[14]||(t[14]=s("strong",null,"Good for:",-1))]),t[15]||(t[15]=s("ul",{style:{"margin-left":"1.75rem"}},[s("li",null,"Long articles or documentation pages"),s("li",null,"Single-page applications with multiple sections"),s("li",null,"Chat interfaces (scroll to latest message)"),s("li",null,"Comment sections (jump to end)"),s("li",null,"Tables of contents or navigation aids")],-1))]),s("div",null,[s("div",Ss,[a(d(j),{size:20,style:{color:"#ef4444"}}),t[16]||(t[16]=s("strong",null,"Avoid when:",-1))]),t[17]||(t[17]=s("ul",{style:{"margin-left":"1.75rem"}},[s("li",null,"Content is short and fits on one screen"),s("li",null,"The page already has persistent navigation"),s("li",null,"Users need to focus on sequential reading without jumping")],-1))])]),a(ms),t[21]||(t[21]=C("",46))]))}});export{Us as __pageData,Ws as default};
