import{A as E}from"./chunks/AlphaWarning.BeGEOyJF.js";import{a as B,i as A,x as y}from"./chunks/lit-element.B0TUrqGF.js";import{z as k}from"./chunks/property-CemaeiRl.BAjarvIB.js";import"./chunks/Progress.Cjx3enl4.js";import"./chunks/ProgressRing.CUKIZMNa.js";import"./chunks/Badge.Dz-YPCes.js";import{s as D}from"./chunks/plugin-vue_export-helper-CHgC5LLL.lGy7RumW.js";import{d as v,c,o as F,r as x,K as S,p as m,v as q,P,s as w,_ as z,C,j as i,b as T,e as u,ae as f,G as e,a as b,F as _,B as V,t as M}from"./chunks/framework.DvJW1jwp.js";import{v as R}from"./chunks/VueToggle.vue_vue_type_script_setup_true_lang-BxrvAsse.6xeXtvdX.js";import"./chunks/if-defined-C8i28hSj.CfeO1FY9.js";import"./chunks/Badge.CxvHeCO4.js";import"./chunks/form-control-utils.DRSK-DHo.js";import"./chunks/unique-id.CpwMFgRD.js";var N=Object.defineProperty,g=(a,s,t,n)=>{for(var r=void 0,p=a.length-1,o;p>=0;p--)(o=a[p])&&(r=o(s,t,r)||r);return r&&N(s,t,r),r};class h extends B{constructor(){super(),this._scrollPercent=0,this._scrollHandler=this._handleScroll.bind(this),this._resizeHandler=this._handleScroll.bind(this),this.mode="bar",this.target=null,this.orientation="top",this.dots=5,this.badgeVariant="info",this.ringSize=32,this.ringStrokeWidth=3,this.ringVariant="info",this.precision=0}static get styles(){return A`
      :host {
        display: block;
      }

      /* Bar mode positioning */
      :host([mode="bar"]) {
        position: fixed;
        inset-inline: 0;
        z-index: var(--ag-z-index-sticky, 100);
      }

      :host([mode="bar"][orientation="top"]) {
        top: 0;
      }

      :host([mode="bar"][orientation="bottom"]) {
        bottom: 0;
      }

      /* Dot trail mode */
      .dot-trail {
        display: flex;
        gap: var(--ag-space-2);
        align-items: center;
        justify-content: center;
      }

      /* Badge mode */
      .badge-wrapper {
        display: inline-flex;
      }

      /* Ring mode */
      .ring-wrapper {
        display: inline-flex;
      }
    `}connectedCallback(){super.connectedCallback(),this._attachScrollListener(),this._handleScroll()}disconnectedCallback(){super.disconnectedCallback(),this._detachScrollListener()}_attachScrollListener(){this._getScrollTarget().addEventListener("scroll",this._scrollHandler,{passive:!0}),window.addEventListener("resize",this._resizeHandler,{passive:!0})}_detachScrollListener(){this._getScrollTarget().removeEventListener("scroll",this._scrollHandler),window.removeEventListener("resize",this._resizeHandler)}_getScrollTarget(){return this.target?this.target:window}_handleScroll(){let s,t,n;if(this.target)s=this.target.scrollTop,t=this.target.scrollHeight,n=this.target.clientHeight;else{const p=document.scrollingElement||document.documentElement;s=p.scrollTop,t=p.scrollHeight,n=p.clientHeight}const r=t-n;if(r<=0)this._scrollPercent=0;else{const p=s/r*100,o=Math.pow(10,this.precision);this._scrollPercent=Math.round(p*o)/o,this._scrollPercent=Math.min(100,Math.max(0,this._scrollPercent))}}_renderBarMode(){return y`
      <ag-progress
        part="scroll-progress-bar"
        .value=${this._scrollPercent}
        size="small"
        label="Scroll progress"
      ></ag-progress>
    `}_renderDotTrailMode(){const s=Math.floor(this._scrollPercent/100*this.dots),t=Array.from({length:this.dots},(n,r)=>{const p=r<s;return y`
        <ag-badge
          dot
          size="sm"
          variant=${p?this.badgeVariant:"neutral"}
          hidden-from-at
        ></ag-badge>
      `});return y`
      <div class="dot-trail" part="scroll-progress-dots">
        ${t}
      </div>
    `}_renderBadgeMode(){const s=this._scrollPercent.toFixed(this.precision);return y`
      <div class="badge-wrapper">
        <ag-badge
          part="scroll-progress-badge"
          variant=${this.badgeVariant}
          status-label="Scroll progress ${s}%"
        >
          ${s}%
        </ag-badge>
      </div>
    `}_renderRingMode(){const s=this._scrollPercent.toFixed(this.precision);return y`
      <div class="ring-wrapper">
        <ag-progress-ring
          part="scroll-progress-ring"
          .value=${this._scrollPercent}
          size="custom"
          variant=${this.ringVariant}
          label="Scroll progress"
          style="--ag-progress-ring-size: ${this.ringSize}px"
        >
          ${s}%
        </ag-progress-ring>
      </div>
    `}render(){switch(this.mode){case"bar":return this._renderBarMode();case"dot-trail":return this._renderDotTrailMode();case"badge":return this._renderBadgeMode();case"ring":return this._renderRingMode();default:return this._renderBarMode()}}}g([k({type:String,reflect:!0})],h.prototype,"mode");g([k({attribute:!1})],h.prototype,"target");g([k({type:String,reflect:!0})],h.prototype,"orientation");g([k({type:Number})],h.prototype,"dots");g([k({type:String,attribute:"badge-variant"})],h.prototype,"badgeVariant");g([k({type:Number,attribute:"ring-size"})],h.prototype,"ringSize");g([k({type:Number,attribute:"ring-stroke-width"})],h.prototype,"ringStrokeWidth");g([k({type:String,attribute:"ring-variant"})],h.prototype,"ringVariant");g([k({type:Number})],h.prototype,"precision");g([k({type:Number,state:!0})],h.prototype,"_scrollPercent");customElements.get("ag-scroll-progress")||customElements.define("ag-scroll-progress",h);const $=v({name:"VueScrollProgress",props:{mode:{type:String,default:"bar"},target:{type:Object,default:null},orientation:{type:String,default:"top"},dots:{type:Number,default:5},badgeVariant:{type:String,default:"info"},ringSize:{type:Number,default:32},ringStrokeWidth:{type:Number,default:3},ringVariant:{type:String,default:"info"},precision:{type:Number,default:0}},setup(a){const s=m(null),t=()=>{const n=s.value;n&&(n.mode=a.mode,n.target=a.target,n.orientation=a.orientation,n.dots=a.dots,n.badgeVariant=a.badgeVariant,n.ringSize=a.ringSize,n.ringStrokeWidth=a.ringStrokeWidth,n.ringVariant=a.ringVariant,n.precision=a.precision)};return q(async()=>{await customElements.whenDefined("ag-scroll-progress"),await P(),t()}),w(()=>{s.value&&t()}),{agComponent:s}}});function L(a,s,t,n,r,p){return F(),c("ag-scroll-progress",S({ref:"agComponent"},a.$attrs),[x(a.$slots,"default")],16)}const I=D($,[["render",L]]),U=v({name:"ScrollProgressExamples",components:{VueScrollProgress:I,VueToggle:R},setup(){const a=m(!0),s=m(!0),t=m(!0),n=m(!0);return{showBar:a,showDotTrail:s,showBadge:t,showRing:n}}}),H={class:"mbe4",style:{background:"var(--ag-background-secondary)",padding:"var(--ag-space-4)","border-radius":"var(--ag-radius-md)",position:"sticky",top:"0","z-index":"1000"}},W={style:{display:"flex",gap:"1rem","flex-wrap":"wrap"}},O={style:{display:"flex","align-items":"center",gap:"0.5rem",cursor:"pointer"}},j={style:{display:"flex","align-items":"center",gap:"0.5rem",cursor:"pointer"}},K={style:{display:"flex","align-items":"center",gap:"0.5rem",cursor:"pointer"}},X={style:{display:"flex","align-items":"center",gap:"0.5rem",cursor:"pointer"}},G={key:1,style:{position:"fixed",top:"5rem",right:"3%","z-index":"100"}},Y={key:2,style:{position:"fixed",bottom:"var(--ag-space-4)",left:"var(--ag-space-4)","z-index":"100"}},J={key:3,style:{position:"fixed",bottom:"var(--ag-space-4)",right:"var(--ag-space-4)","z-index":"100"}},Q={class:"mbe4"},Z={style:{display:"flex","flex-direction":"column",gap:"2rem"}},ss={class:"mbe4"},is={style:{display:"flex",gap:"2rem","flex-wrap":"wrap"}},as={style:{"text-align":"center"}},ts={style:{"text-align":"center"}},es={style:{"text-align":"center"}},ns={class:"mbe4"},ls={style:{display:"flex",gap:"1rem","flex-wrap":"wrap","margin-bottom":"2rem"}},rs={style:{display:"flex",gap:"2rem","flex-wrap":"wrap"}},ps={style:{"text-align":"center"}},hs={style:{"text-align":"center"}},os={style:{"text-align":"center"}},ds={style:{"text-align":"center"}},ks={style:{"text-align":"center"}},gs={class:"mbe4"},Fs={style:{background:"var(--ag-background-secondary)",padding:"var(--ag-space-4)","border-radius":"var(--ag-radius-md)"}};function cs(a,s,t,n,r,p){const o=C("VueToggle"),l=C("VueScrollProgress");return F(),c("section",null,[i("div",H,[s[8]||(s[8]=i("h2",{style:{"margin-top":"0"}},"Active Scroll Indicators",-1)),s[9]||(s[9]=i("p",{class:"mbs2 mbe3",style:{"font-size":"0.875rem",color:"var(--ag-text-secondary)"}}," Toggle modes on/off to see different scroll progress indicators in action. Scroll down to see them update! ",-1)),i("div",W,[i("label",O,[e(o,{checked:a.showBar,"onUpdate:checked":s[0]||(s[0]=d=>a.showBar=d)},null,8,["checked"]),s[4]||(s[4]=i("span",null,"Bar (Top)",-1))]),i("label",j,[e(o,{checked:a.showDotTrail,"onUpdate:checked":s[1]||(s[1]=d=>a.showDotTrail=d)},null,8,["checked"]),s[5]||(s[5]=i("span",null,"Dot Trail",-1))]),i("label",K,[e(o,{checked:a.showBadge,"onUpdate:checked":s[2]||(s[2]=d=>a.showBadge=d)},null,8,["checked"]),s[6]||(s[6]=i("span",null,"Badge (Bottom Left)",-1))]),i("label",X,[e(o,{checked:a.showRing,"onUpdate:checked":s[3]||(s[3]=d=>a.showRing=d)},null,8,["checked"]),s[7]||(s[7]=i("span",null,"Ring (Bottom Right)",-1))])])]),a.showBar?(F(),T(l,{key:0,mode:"bar",orientation:"top"})):u("",!0),a.showDotTrail?(F(),c("div",G,[e(l,{mode:"dot-trail",dots:7,"badge-variant":"success"})])):u("",!0),a.showBadge?(F(),c("div",Y,[e(l,{mode:"badge","badge-variant":"info"})])):u("",!0),a.showRing?(F(),c("div",J,[e(l,{mode:"ring","ring-size":48,"ring-variant":"primary"})])):u("",!0),s[33]||(s[33]=f("",4)),i("div",Q,[s[12]||(s[12]=i("h2",null,"Bar Size Variants",-1)),s[13]||(s[13]=i("p",{class:"mbs2 mbe3"},"Progress bars support three sizes via the underlying Progress component.",-1)),i("div",Z,[i("div",null,[s[10]||(s[10]=i("p",{style:{margin:"0 0 0.5rem 0","font-size":"0.875rem","font-weight":"500"}},"Small (8px) - Default for scroll progress",-1)),e(l,{mode:"bar",orientation:"top",style:{position:"static"}})]),s[11]||(s[11]=i("div",null,[i("p",{style:{margin:"0 0 0.5rem 0","font-size":"0.875rem","font-weight":"500"}},"Medium (12px)"),i("div",{style:{position:"relative"}},[i("ag-scroll-progress",{mode:"bar",orientation:"top",style:{position:"static"}})])],-1))])]),i("div",ss,[s[20]||(s[20]=i("h2",null,"Precision Control",-1)),s[21]||(s[21]=i("p",{class:"mbs2 mbe3"},[b("Control decimal places in percentage display with the "),i("code",null,"precision"),b(" prop.")],-1)),i("div",is,[i("div",as,[e(l,{mode:"badge",precision:0,"badge-variant":"primary",style:{position:"static"}}),s[14]||(s[14]=i("p",{style:{"margin-top":"0.5rem","font-size":"0.875rem"}},"precision={0}",-1)),s[15]||(s[15]=i("p",{style:{margin:"0","font-size":"0.75rem",color:"var(--ag-text-secondary)"}},"Integers (47%)",-1))]),i("div",ts,[e(l,{mode:"badge",precision:1,"badge-variant":"success",style:{position:"static"}}),s[16]||(s[16]=i("p",{style:{"margin-top":"0.5rem","font-size":"0.875rem"}},"precision={1}",-1)),s[17]||(s[17]=i("p",{style:{margin:"0","font-size":"0.75rem",color:"var(--ag-text-secondary)"}},"One decimal (47.3%)",-1))]),i("div",es,[e(l,{mode:"badge",precision:2,"badge-variant":"warning",style:{position:"static"}}),s[18]||(s[18]=i("p",{style:{"margin-top":"0.5rem","font-size":"0.875rem"}},"precision={2}",-1)),s[19]||(s[19]=i("p",{style:{margin:"0","font-size":"0.75rem",color:"var(--ag-text-secondary)"}},"Two decimals (47.39%)",-1))])])]),i("div",ns,[s[27]||(s[27]=i("h2",null,"Color Variants",-1)),s[28]||(s[28]=i("p",{class:"mbs2 mbe3"},"Both badge and ring modes support color variants.",-1)),s[29]||(s[29]=i("h3",{style:{"font-size":"1rem","margin-bottom":"1rem"}},"Badge Variants",-1)),i("div",ls,[e(l,{mode:"badge","badge-variant":"default",style:{position:"static"}}),e(l,{mode:"badge","badge-variant":"success",style:{position:"static"}}),e(l,{mode:"badge","badge-variant":"warning",style:{position:"static"}}),e(l,{mode:"badge","badge-variant":"danger",style:{position:"static"}}),e(l,{mode:"badge","badge-variant":"info",style:{position:"static"}})]),s[30]||(s[30]=i("h3",{style:{"font-size":"1rem","margin-bottom":"1rem"}},"Ring Variants",-1)),i("div",rs,[i("div",ps,[e(l,{mode:"ring","ring-variant":"primary","ring-size":40,style:{position:"static"}}),s[22]||(s[22]=i("p",{style:{"margin-top":"0.5rem","font-size":"0.875rem"}},"Primary",-1))]),i("div",hs,[e(l,{mode:"ring","ring-variant":"success","ring-size":40,style:{position:"static"}}),s[23]||(s[23]=i("p",{style:{"margin-top":"0.5rem","font-size":"0.875rem"}},"Success",-1))]),i("div",os,[e(l,{mode:"ring","ring-variant":"warning","ring-size":40,style:{position:"static"}}),s[24]||(s[24]=i("p",{style:{"margin-top":"0.5rem","font-size":"0.875rem"}},"Warning",-1))]),i("div",ds,[e(l,{mode:"ring","ring-variant":"danger","ring-size":40,style:{position:"static"}}),s[25]||(s[25]=i("p",{style:{"margin-top":"0.5rem","font-size":"0.875rem"}},"Danger",-1))]),i("div",ks,[e(l,{mode:"ring","ring-variant":"info","ring-size":40,style:{position:"static"}}),s[26]||(s[26]=i("p",{style:{"margin-top":"0.5rem","font-size":"0.875rem"}},"Info",-1))])])]),i("div",gs,[s[31]||(s[31]=i("h2",null,"Keep Scrolling!",-1)),s[32]||(s[32]=i("p",{class:"mbs2 mbe3"},"Scroll down to see the active progress indicators update in real-time.",-1)),i("div",Fs,[(F(),c(_,null,V(30,d=>i("p",{key:d,style:{margin:"0.5rem 0",color:"var(--ag-text-secondary)"}}," Paragraph "+M(d)+": Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",1)),64))])]),s[34]||(s[34]=i("div",{class:"mbe4",style:{"text-align":"center",padding:"var(--ag-space-8) 0"}},[i("h2",null,"🎉 You've reached the end!"),i("p",{style:{color:"var(--ag-text-secondary)"}},"Notice how all active progress indicators show 100%")],-1))])}const ys=z(U,[["render",cs],["__scopeId","data-v-2d12e0b8"]]),ws=JSON.parse('{"title":"Scroll Progress","description":"","frontmatter":{},"headers":[],"relativePath":"components/scroll-progress.md","filePath":"components/scroll-progress.md"}'),ms={name:"components/scroll-progress.md"},zs=Object.assign(ms,{setup(a){return(s,t)=>(F(),c("div",null,[t[0]||(t[0]=i("h1",{id:"scroll-progress",tabindex:"-1"},[b("Scroll Progress "),i("a",{class:"header-anchor",href:"#scroll-progress","aria-label":'Permalink to "Scroll Progress"'},"​")],-1)),e(E),t[1]||(t[1]=i("p",null,"The Scroll Progress component provides visual feedback about how far the user has scrolled through a document or scrollable container. It offers four distinct visual modes to fit different design contexts.",-1)),t[2]||(t[2]=i("h2",{id:"examples",tabindex:"-1"},[b("Examples "),i("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),e(ys),t[3]||(t[3]=f("",25))]))}});export{ws as __pageData,zs as default};
