var T=Object.defineProperty;var C=(t,e,i)=>e in t?T(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var w=(t,e,i)=>C(t,typeof e!="symbol"?e+"":e,i);import{A as V}from"./chunks/AlphaWarning.D199zhtu.js";import{a as F,i as D,x as d,z as m,F as R}from"./chunks/FrameworkExample.DQckTML-.js";import"./chunks/Progress.CDt-5F__.js";import"./chunks/ProgressRing.B3O8fJqx.js";import"./chunks/Badge.nVPyTfkn.js";import{s as A}from"./chunks/plugin-vue_export-helper-CHgC5LLL.lGy7RumW.js";import{d as S,c as u,o as v,r as E,K as M,p as y,v as _,P as $,s as N,_ as q,C as x,j as s,b as I,e as b,ae as B,G as r,a as f,F as L,B as W,t as U,w as z,k}from"./chunks/framework.CdHt8f9T.js";import{v as O}from"./chunks/VueToggle.vue_vue_type_script_setup_true_lang-BxrvAsse.BpdSd8ak.js";import"./chunks/Badge.BhM8XGow.js";import"./chunks/form-control-utils.C4mpKouh.js";var H=Object.defineProperty,h=(t,e,i,a)=>{for(var o=void 0,l=t.length-1,p;l>=0;l--)(p=t[l])&&(o=p(e,i,o)||o);return o&&H(e,i,o),o};class g extends F{constructor(){super(),this._scrollPercent=0,this._scrollHandler=this._handleScroll.bind(this),this._resizeHandler=this._handleScroll.bind(this),this.mode="bar",this.target=null,this.orientation="top",this.dots=5,this.badgeVariant="info",this.ringSize=32,this.ringStrokeWidth=3,this.ringVariant="info",this.precision=0}static get styles(){return D`
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
    `}connectedCallback(){super.connectedCallback(),this._attachScrollListener(),this._handleScroll()}disconnectedCallback(){super.disconnectedCallback(),this._detachScrollListener()}_attachScrollListener(){this._getScrollTarget().addEventListener("scroll",this._scrollHandler,{passive:!0}),window.addEventListener("resize",this._resizeHandler,{passive:!0})}_detachScrollListener(){this._getScrollTarget().removeEventListener("scroll",this._scrollHandler),window.removeEventListener("resize",this._resizeHandler)}_getScrollTarget(){return this.target?this.target:window}_handleScroll(){let e,i,a;if(this.target)e=this.target.scrollTop,i=this.target.scrollHeight,a=this.target.clientHeight;else{const l=document.scrollingElement||document.documentElement;e=l.scrollTop,i=l.scrollHeight,a=l.clientHeight}const o=i-a;if(o<=0)this._scrollPercent=0;else{const l=e/o*100,p=Math.pow(10,this.precision);this._scrollPercent=Math.round(l*p)/p,this._scrollPercent=Math.min(100,Math.max(0,this._scrollPercent))}}_renderBarMode(){return d`
      <ag-progress
        part="scroll-progress-bar"
        .value=${this._scrollPercent}
        size="small"
        label="Scroll progress"
      ></ag-progress>
    `}_renderDotTrailMode(){const e=Math.floor(this._scrollPercent/100*this.dots),i=Array.from({length:this.dots},(a,o)=>{const l=o<e;return d`
        <ag-badge
          dot
          size="sm"
          variant=${l?this.badgeVariant:"neutral"}
          hidden-from-at
        ></ag-badge>
      `});return d`
      <div class="dot-trail" part="scroll-progress-dots">
        ${i}
      </div>
    `}_renderBadgeMode(){const e=this._scrollPercent.toFixed(this.precision);return d`
      <div class="badge-wrapper">
        <ag-badge
          part="scroll-progress-badge"
          variant=${this.badgeVariant}
          status-label="Scroll progress ${e}%"
        >
          ${e}%
        </ag-badge>
      </div>
    `}_renderRingMode(){const e=this._scrollPercent.toFixed(this.precision);return d`
      <div class="ring-wrapper">
        <ag-progress-ring
          part="scroll-progress-ring"
          .value=${this._scrollPercent}
          size="custom"
          variant=${this.ringVariant}
          label="Scroll progress"
          style="--ag-progress-ring-size: ${this.ringSize}px"
        >
          ${e}%
        </ag-progress-ring>
      </div>
    `}render(){switch(this.mode){case"bar":return this._renderBarMode();case"dot-trail":return this._renderDotTrailMode();case"badge":return this._renderBadgeMode();case"ring":return this._renderRingMode();default:return this._renderBarMode()}}}h([m({type:String,reflect:!0})],g.prototype,"mode");h([m({attribute:!1})],g.prototype,"target");h([m({type:String,reflect:!0})],g.prototype,"orientation");h([m({type:Number})],g.prototype,"dots");h([m({type:String,attribute:"badge-variant"})],g.prototype,"badgeVariant");h([m({type:Number,attribute:"ring-size"})],g.prototype,"ringSize");h([m({type:Number,attribute:"ring-stroke-width"})],g.prototype,"ringStrokeWidth");h([m({type:String,attribute:"ring-variant"})],g.prototype,"ringVariant");h([m({type:Number})],g.prototype,"precision");h([m({type:Number,state:!0})],g.prototype,"_scrollPercent");customElements.get("ag-scroll-progress")||customElements.define("ag-scroll-progress",g);const K=S({name:"VueScrollProgress",props:{mode:{type:String,default:"bar"},target:{type:Object,default:null},orientation:{type:String,default:"top"},dots:{type:Number,default:5},badgeVariant:{type:String,default:"info"},ringSize:{type:Number,default:32},ringStrokeWidth:{type:Number,default:3},ringVariant:{type:String,default:"info"},precision:{type:Number,default:0}},setup(t){const e=y(null),i=()=>{const a=e.value;a&&(a.mode=t.mode,a.target=t.target,a.orientation=t.orientation,a.dots=t.dots,a.badgeVariant=t.badgeVariant,a.ringSize=t.ringSize,a.ringStrokeWidth=t.ringStrokeWidth,a.ringVariant=t.ringVariant,a.precision=t.precision)};return _(async()=>{await customElements.whenDefined("ag-scroll-progress"),await $(),i()}),N(()=>{e.value&&i()}),{agComponent:e}}});function G(t,e,i,a,o,l){return v(),u("ag-scroll-progress",M({ref:"agComponent"},t.$attrs),[E(t.$slots,"default")],16)}const j=A(K,[["render",G]]),Y=S({name:"ScrollProgressExamples",components:{VueScrollProgress:j,VueToggle:O},setup(){const t=y(!0),e=y(!0),i=y(!0),a=y(!0);return{showBar:t,showDotTrail:e,showBadge:i,showRing:a}}}),J={class:"mbe4",style:{background:"var(--ag-background-secondary)",padding:"var(--ag-space-4)","border-radius":"var(--ag-radius-md)",position:"sticky",top:"0","z-index":"1000"}},X={style:{display:"flex",gap:"1rem","flex-wrap":"wrap"}},Q={style:{display:"flex","align-items":"center",gap:"0.5rem",cursor:"pointer"}},Z={style:{display:"flex","align-items":"center",gap:"0.5rem",cursor:"pointer"}},ee={style:{display:"flex","align-items":"center",gap:"0.5rem",cursor:"pointer"}},se={style:{display:"flex","align-items":"center",gap:"0.5rem",cursor:"pointer"}},te={key:1,style:{position:"fixed",top:"5rem",right:"3%","z-index":"100"}},ie={key:2,style:{position:"fixed",bottom:"var(--ag-space-4)",left:"var(--ag-space-4)","z-index":"100"}},re={key:3,style:{position:"fixed",bottom:"var(--ag-space-4)",right:"var(--ag-space-4)","z-index":"100"}},ae={class:"mbe4"},ne={style:{display:"flex","flex-direction":"column",gap:"2rem"}},oe={class:"mbe4"},le={style:{display:"flex",gap:"2rem","flex-wrap":"wrap"}},de={style:{"text-align":"center"}},ge={style:{"text-align":"center"}},pe={style:{"text-align":"center"}},ce={class:"mbe4"},me={style:{display:"flex",gap:"1rem","flex-wrap":"wrap","margin-bottom":"2rem"}},he={style:{display:"flex",gap:"2rem","flex-wrap":"wrap"}},ve={style:{"text-align":"center"}},ue={style:{"text-align":"center"}},ye={style:{"text-align":"center"}},be={style:{"text-align":"center"}},fe={style:{"text-align":"center"}},ke={class:"mbe4"},we={style:{background:"var(--ag-background-secondary)",padding:"var(--ag-space-4)","border-radius":"var(--ag-radius-md)"}};function xe(t,e,i,a,o,l){const p=x("VueToggle"),n=x("VueScrollProgress");return v(),u("section",null,[s("div",J,[e[8]||(e[8]=s("h2",{style:{"margin-top":"0"}},"Active Scroll Indicators",-1)),e[9]||(e[9]=s("p",{class:"mbs2 mbe3",style:{"font-size":"0.875rem",color:"var(--ag-text-secondary)"}}," Toggle modes on/off to see different scroll progress indicators in action. Scroll down to see them update! ",-1)),s("div",X,[s("label",Q,[r(p,{checked:t.showBar,"onUpdate:checked":e[0]||(e[0]=c=>t.showBar=c)},null,8,["checked"]),e[4]||(e[4]=s("span",null,"Bar (Top)",-1))]),s("label",Z,[r(p,{checked:t.showDotTrail,"onUpdate:checked":e[1]||(e[1]=c=>t.showDotTrail=c)},null,8,["checked"]),e[5]||(e[5]=s("span",null,"Dot Trail",-1))]),s("label",ee,[r(p,{checked:t.showBadge,"onUpdate:checked":e[2]||(e[2]=c=>t.showBadge=c)},null,8,["checked"]),e[6]||(e[6]=s("span",null,"Badge (Bottom Left)",-1))]),s("label",se,[r(p,{checked:t.showRing,"onUpdate:checked":e[3]||(e[3]=c=>t.showRing=c)},null,8,["checked"]),e[7]||(e[7]=s("span",null,"Ring (Bottom Right)",-1))])])]),t.showBar?(v(),I(n,{key:0,mode:"bar",orientation:"top"})):b("",!0),t.showDotTrail?(v(),u("div",te,[r(n,{mode:"dot-trail",dots:7,"badge-variant":"success"})])):b("",!0),t.showBadge?(v(),u("div",ie,[r(n,{mode:"badge","badge-variant":"info"})])):b("",!0),t.showRing?(v(),u("div",re,[r(n,{mode:"ring","ring-size":48,"ring-variant":"primary"})])):b("",!0),e[33]||(e[33]=B('<div class="mbe4" data-v-2d12e0b8><h2 data-v-2d12e0b8>Bar Mode</h2><p class="mbs2 mbe3" data-v-2d12e0b8> The classic scroll progress bar. Positioned at the top (or bottom) of the viewport, it provides a clear, unobtrusive indication of scroll depth. Perfect for long-form content like articles and documentation. </p><div style="background:var(--ag-background-secondary);padding:var(--ag-space-4);border-radius:var(--ag-radius-md);" data-v-2d12e0b8><h3 style="margin-top:0;font-size:0.875rem;" data-v-2d12e0b8>Props</h3><ul style="margin:0;padding-left:1.5rem;font-size:0.875rem;" data-v-2d12e0b8><li data-v-2d12e0b8><code data-v-2d12e0b8>orientation</code>: &#39;top&#39; or &#39;bottom&#39;</li><li data-v-2d12e0b8><code data-v-2d12e0b8>size</code>: Uses small size for subtle appearance</li></ul></div></div><div class="mbe4" data-v-2d12e0b8><h2 data-v-2d12e0b8>Dot Trail Mode</h2><p class="mbs2 mbe3" data-v-2d12e0b8> A minimalist approach using a trail of dots. As you scroll, dots fill from left to right. Great for presentations, multi-step forms, or when you want a less prominent indicator. </p><div style="background:var(--ag-background-secondary);padding:var(--ag-space-4);border-radius:var(--ag-radius-md);" data-v-2d12e0b8><h3 style="margin-top:0;font-size:0.875rem;" data-v-2d12e0b8>Props</h3><ul style="margin:0;padding-left:1.5rem;font-size:0.875rem;" data-v-2d12e0b8><li data-v-2d12e0b8><code data-v-2d12e0b8>dots</code>: Number of dots to display (default: 5)</li><li data-v-2d12e0b8><code data-v-2d12e0b8>badgeVariant</code>: Color variant for filled dots</li></ul></div></div><div class="mbe4" data-v-2d12e0b8><h2 data-v-2d12e0b8>Badge Mode</h2><p class="mbs2 mbe3" data-v-2d12e0b8> Displays the exact scroll percentage in a badge. Useful when users need precise feedback about their position in the content. Can be positioned anywhere on the page. </p><div style="background:var(--ag-background-secondary);padding:var(--ag-space-4);border-radius:var(--ag-radius-md);" data-v-2d12e0b8><h3 style="margin-top:0;font-size:0.875rem;" data-v-2d12e0b8>Props</h3><ul style="margin:0;padding-left:1.5rem;font-size:0.875rem;" data-v-2d12e0b8><li data-v-2d12e0b8><code data-v-2d12e0b8>badgeVariant</code>: Badge color variant</li><li data-v-2d12e0b8><code data-v-2d12e0b8>precision</code>: Decimal places (0 for integers like &quot;47%&quot;)</li></ul></div></div><div class="mbe4" data-v-2d12e0b8><h2 data-v-2d12e0b8>Ring Mode</h2><p class="mbs2 mbe3" data-v-2d12e0b8> A circular progress ring that fills as you scroll. Often paired with floating action buttons or scroll-to-top functionality. Provides an elegant, space-efficient indicator. </p><div style="background:var(--ag-background-secondary);padding:var(--ag-space-4);border-radius:var(--ag-radius-md);" data-v-2d12e0b8><h3 style="margin-top:0;font-size:0.875rem;" data-v-2d12e0b8>Props</h3><ul style="margin:0;padding-left:1.5rem;font-size:0.875rem;" data-v-2d12e0b8><li data-v-2d12e0b8><code data-v-2d12e0b8>ringSize</code>: Diameter in pixels (default: 32)</li><li data-v-2d12e0b8><code data-v-2d12e0b8>ringStrokeWidth</code>: Thickness of the ring (default: 3)</li><li data-v-2d12e0b8><code data-v-2d12e0b8>ringVariant</code>: Color variant</li></ul></div></div>',4)),s("div",ae,[e[12]||(e[12]=s("h2",null,"Bar Size Variants",-1)),e[13]||(e[13]=s("p",{class:"mbs2 mbe3"},"Progress bars support three sizes via the underlying Progress component.",-1)),s("div",ne,[s("div",null,[e[10]||(e[10]=s("p",{style:{margin:"0 0 0.5rem 0","font-size":"0.875rem","font-weight":"500"}},"Small (8px) - Default for scroll progress",-1)),r(n,{mode:"bar",orientation:"top",style:{position:"static"}})]),e[11]||(e[11]=s("div",null,[s("p",{style:{margin:"0 0 0.5rem 0","font-size":"0.875rem","font-weight":"500"}},"Medium (12px)"),s("div",{style:{position:"relative"}},[s("ag-scroll-progress",{mode:"bar",orientation:"top",style:{position:"static"}})])],-1))])]),s("div",oe,[e[20]||(e[20]=s("h2",null,"Precision Control",-1)),e[21]||(e[21]=s("p",{class:"mbs2 mbe3"},[f("Control decimal places in percentage display with the "),s("code",null,"precision"),f(" prop.")],-1)),s("div",le,[s("div",de,[r(n,{mode:"badge",precision:0,"badge-variant":"primary",style:{position:"static"}}),e[14]||(e[14]=s("p",{style:{"margin-top":"0.5rem","font-size":"0.875rem"}},"precision={0}",-1)),e[15]||(e[15]=s("p",{style:{margin:"0","font-size":"0.75rem",color:"var(--ag-text-secondary)"}},"Integers (47%)",-1))]),s("div",ge,[r(n,{mode:"badge",precision:1,"badge-variant":"success",style:{position:"static"}}),e[16]||(e[16]=s("p",{style:{"margin-top":"0.5rem","font-size":"0.875rem"}},"precision={1}",-1)),e[17]||(e[17]=s("p",{style:{margin:"0","font-size":"0.75rem",color:"var(--ag-text-secondary)"}},"One decimal (47.3%)",-1))]),s("div",pe,[r(n,{mode:"badge",precision:2,"badge-variant":"warning",style:{position:"static"}}),e[18]||(e[18]=s("p",{style:{"margin-top":"0.5rem","font-size":"0.875rem"}},"precision={2}",-1)),e[19]||(e[19]=s("p",{style:{margin:"0","font-size":"0.75rem",color:"var(--ag-text-secondary)"}},"Two decimals (47.39%)",-1))])])]),s("div",ce,[e[27]||(e[27]=s("h2",null,"Color Variants",-1)),e[28]||(e[28]=s("p",{class:"mbs2 mbe3"},"Both badge and ring modes support color variants.",-1)),e[29]||(e[29]=s("h3",{style:{"font-size":"1rem","margin-bottom":"1rem"}},"Badge Variants",-1)),s("div",me,[r(n,{mode:"badge","badge-variant":"default",style:{position:"static"}}),r(n,{mode:"badge","badge-variant":"success",style:{position:"static"}}),r(n,{mode:"badge","badge-variant":"warning",style:{position:"static"}}),r(n,{mode:"badge","badge-variant":"danger",style:{position:"static"}}),r(n,{mode:"badge","badge-variant":"info",style:{position:"static"}})]),e[30]||(e[30]=s("h3",{style:{"font-size":"1rem","margin-bottom":"1rem"}},"Ring Variants",-1)),s("div",he,[s("div",ve,[r(n,{mode:"ring","ring-variant":"primary","ring-size":40,style:{position:"static"}}),e[22]||(e[22]=s("p",{style:{"margin-top":"0.5rem","font-size":"0.875rem"}},"Primary",-1))]),s("div",ue,[r(n,{mode:"ring","ring-variant":"success","ring-size":40,style:{position:"static"}}),e[23]||(e[23]=s("p",{style:{"margin-top":"0.5rem","font-size":"0.875rem"}},"Success",-1))]),s("div",ye,[r(n,{mode:"ring","ring-variant":"warning","ring-size":40,style:{position:"static"}}),e[24]||(e[24]=s("p",{style:{"margin-top":"0.5rem","font-size":"0.875rem"}},"Warning",-1))]),s("div",be,[r(n,{mode:"ring","ring-variant":"danger","ring-size":40,style:{position:"static"}}),e[25]||(e[25]=s("p",{style:{"margin-top":"0.5rem","font-size":"0.875rem"}},"Danger",-1))]),s("div",fe,[r(n,{mode:"ring","ring-variant":"info","ring-size":40,style:{position:"static"}}),e[26]||(e[26]=s("p",{style:{"margin-top":"0.5rem","font-size":"0.875rem"}},"Info",-1))])])]),s("div",ke,[e[31]||(e[31]=s("h2",null,"Keep Scrolling!",-1)),e[32]||(e[32]=s("p",{class:"mbs2 mbe3"},"Scroll down to see the active progress indicators update in real-time.",-1)),s("div",we,[(v(),u(L,null,W(30,c=>s("p",{key:c,style:{margin:"0.5rem 0",color:"var(--ag-text-secondary)"}}," Paragraph "+U(c)+": Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",1)),64))])]),e[34]||(e[34]=s("div",{class:"mbe4",style:{"text-align":"center",padding:"var(--ag-space-8) 0"}},[s("h2",null,"🎉 You've reached the end!"),s("p",{style:{color:"var(--ag-text-secondary)"}},"Notice how all active progress indicators show 100%")],-1))])}const ze=q(Y,[["render",xe],["__scopeId","data-v-2d12e0b8"]]);class P extends F{constructor(){super(),this.showBar=!0,this.showDotTrail=!0,this.showBadge=!0,this.showRing=!0}createRenderRoot(){return this}handleBarToggle(e){this.showBar=e.target.checked}handleDotTrailToggle(e){this.showDotTrail=e.target.checked}handleBadgeToggle(e){this.showBadge=e.target.checked}handleRingToggle(e){this.showRing=e.target.checked}render(){return d`
      <section>
        <!-- Mode Controls -->
        <div
          class="mbe4"
          style="background: var(--ag-background-secondary); padding: var(--ag-space-4); border-radius: var(--ag-radius-md); position: sticky; top: 0; z-index: 1000;"
        >
          <h2 style="margin-top: 0;">Active Scroll Indicators</h2>
          <p
            class="mbs2 mbe3"
            style="font-size: 0.875rem; color: var(--ag-text-secondary);"
          >
            Toggle modes on/off to see different scroll progress indicators in action. Scroll down to see them update!
          </p>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
              <ag-toggle ?checked="${this.showBar}" @click="${e=>{this.showBar=!this.showBar}}"></ag-toggle>
              <span>Bar (Top)</span>
            </label>
            <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
              <ag-toggle ?checked="${this.showDotTrail}" @click="${e=>{this.showDotTrail=!this.showDotTrail}}"></ag-toggle>
              <span>Dot Trail</span>
            </label>
            <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
              <ag-toggle ?checked="${this.showBadge}" @click="${e=>{this.showBadge=!this.showBadge}}"></ag-toggle>
              <span>Badge (Bottom Left)</span>
            </label>
            <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
              <ag-toggle ?checked="${this.showRing}" @click="${e=>{this.showRing=!this.showRing}}"></ag-toggle>
              <span>Ring (Bottom Right)</span>
            </label>
          </div>
        </div>

        <!-- Active Scroll Progress Indicators -->
        ${this.showBar?d`<ag-scroll-progress mode="bar" orientation="top"></ag-scroll-progress>`:""}

        ${this.showDotTrail?d`
            <div style="position: fixed; top: 5rem; right: 3%; z-index: 100;">
              <ag-scroll-progress
                mode="dot-trail"
                dots="7"
                badge-variant="success"
              ></ag-scroll-progress>
            </div>
          `:""}

        ${this.showBadge?d`
            <div style="position: fixed; bottom: var(--ag-space-4); left: var(--ag-space-4); z-index: 100;">
              <ag-scroll-progress
                mode="badge"
                badge-variant="info"
              ></ag-scroll-progress>
            </div>
          `:""}

        ${this.showRing?d`
            <div style="position: fixed; bottom: var(--ag-space-4); right: var(--ag-space-4); z-index: 100;">
              <ag-scroll-progress
                mode="ring"
                ring-size="48"
                ring-variant="primary"
              ></ag-scroll-progress>
            </div>
          `:""}

        <!-- Individual Mode Explanations -->
        <div class="mbe4">
          <h2>Bar Mode</h2>
          <p class="mbs2 mbe3">
            The classic scroll progress bar. Positioned at the top (or bottom) of the viewport, it provides a clear,
            unobtrusive indication of scroll depth. Perfect for long-form content like articles and documentation.
          </p>
          <div style="background: var(--ag-background-secondary); padding: var(--ag-space-4); border-radius: var(--ag-radius-md);">
            <h3 style="margin-top: 0; font-size: 0.875rem;">Props</h3>
            <ul style="margin: 0; padding-left: 1.5rem; font-size: 0.875rem;">
              <li><code>orientation</code>: 'top' or 'bottom'</li>
              <li><code>size</code>: Uses small size for subtle appearance</li>
            </ul>
          </div>
        </div>

        <div class="mbe4">
          <h2>Dot Trail Mode</h2>
          <p class="mbs2 mbe3">
            A minimalist approach using a trail of dots. As you scroll, dots fill from left to right.
            Great for presentations, multi-step forms, or when you want a less prominent indicator.
          </p>
          <div style="background: var(--ag-background-secondary); padding: var(--ag-space-4); border-radius: var(--ag-radius-md);">
            <h3 style="margin-top: 0; font-size: 0.875rem;">Props</h3>
            <ul style="margin: 0; padding-left: 1.5rem; font-size: 0.875rem;">
              <li><code>dots</code>: Number of dots to display (default: 5)</li>
              <li><code>badge-variant</code>: Color variant for filled dots</li>
            </ul>
          </div>
        </div>

        <div class="mbe4">
          <h2>Badge Mode</h2>
          <p class="mbs2 mbe3">
            Displays the exact scroll percentage in a badge. Useful when users need precise feedback
            about their position in the content. Can be positioned anywhere on the page.
          </p>
          <div style="background: var(--ag-background-secondary); padding: var(--ag-space-4); border-radius: var(--ag-radius-md);">
            <h3 style="margin-top: 0; font-size: 0.875rem;">Props</h3>
            <ul style="margin: 0; padding-left: 1.5rem; font-size: 0.875rem;">
              <li><code>badge-variant</code>: Badge color variant</li>
              <li><code>precision</code>: Decimal places (0 for integers like "47%")</li>
            </ul>
          </div>
        </div>

        <div class="mbe4">
          <h2>Ring Mode</h2>
          <p class="mbs2 mbe3">
            A circular progress ring that fills as you scroll. Often paired with floating action buttons
            or scroll-to-top functionality. Provides an elegant, space-efficient indicator.
          </p>
          <div style="background: var(--ag-background-secondary); padding: var(--ag-space-4); border-radius: var(--ag-radius-md);">
            <h3 style="margin-top: 0; font-size: 0.875rem;">Props</h3>
            <ul style="margin: 0; padding-left: 1.5rem; font-size: 0.875rem;">
              <li><code>ring-size</code>: Diameter in pixels (default: 32)</li>
              <li><code>ring-stroke-width</code>: Thickness of the ring (default: 3)</li>
              <li><code>ring-variant</code>: Color variant</li>
            </ul>
          </div>
        </div>

        <!-- Size Variants (Bar Mode) -->
        <div class="mbe4">
          <h2>Bar Size Variants</h2>
          <p class="mbs2 mbe3">Progress bars support three sizes via the underlying Progress component.</p>
          <div style="display: flex; flex-direction: column; gap: 2rem;">
            <div>
              <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; font-weight: 500;">Small (8px) - Default for scroll progress</p>
              <ag-scroll-progress
                mode="bar"
                orientation="top"
                style="position: static;"
              ></ag-scroll-progress>
            </div>
            <div>
              <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; font-weight: 500;">Medium (12px)</p>
              <div style="position: relative;">
                <ag-scroll-progress
                  mode="bar"
                  orientation="top"
                  style="position: static;"
                ></ag-scroll-progress>
              </div>
            </div>
          </div>
        </div>

        <!-- Precision Control -->
        <div class="mbe4">
          <h2>Precision Control</h2>
          <p class="mbs2 mbe3">Control decimal places in percentage display with the <code>precision</code> prop.</p>
          <div style="display: flex; gap: 2rem; flex-wrap: wrap;">
            <div style="text-align: center;">
              <ag-scroll-progress
                mode="badge"
                precision="0"
                badge-variant="primary"
                style="position: static;"
              ></ag-scroll-progress>
              <p style="margin-top: 0.5rem; font-size: 0.875rem;">precision={0}</p>
              <p style="margin: 0; font-size: 0.75rem; color: var(--ag-text-secondary);">Integers (47%)</p>
            </div>
            <div style="text-align: center;">
              <ag-scroll-progress
                mode="badge"
                precision="1"
                badge-variant="success"
                style="position: static;"
              ></ag-scroll-progress>
              <p style="margin-top: 0.5rem; font-size: 0.875rem;">precision={1}</p>
              <p style="margin: 0; font-size: 0.75rem; color: var(--ag-text-secondary);">One decimal (47.3%)</p>
            </div>
            <div style="text-align: center;">
              <ag-scroll-progress
                mode="badge"
                precision="2"
                badge-variant="warning"
                style="position: static;"
              ></ag-scroll-progress>
              <p style="margin-top: 0.5rem; font-size: 0.875rem;">precision={2}</p>
              <p style="margin: 0; font-size: 0.75rem; color: var(--ag-text-secondary);">Two decimals (47.39%)</p>
            </div>
          </div>
        </div>

        <!-- Variants -->
        <div class="mbe4">
          <h2>Color Variants</h2>
          <p class="mbs2 mbe3">Both badge and ring modes support color variants.</p>

          <h3 style="font-size: 1rem; margin-bottom: 1rem;">Badge Variants</h3>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 2rem;">
            <ag-scroll-progress
              mode="badge"
              badge-variant="default"
              style="position: static;"
            ></ag-scroll-progress>
            <ag-scroll-progress
              mode="badge"
              badge-variant="success"
              style="position: static;"
            ></ag-scroll-progress>
            <ag-scroll-progress
              mode="badge"
              badge-variant="warning"
              style="position: static;"
            ></ag-scroll-progress>
            <ag-scroll-progress
              mode="badge"
              badge-variant="danger"
              style="position: static;"
            ></ag-scroll-progress>
            <ag-scroll-progress
              mode="badge"
              badge-variant="info"
              style="position: static;"
            ></ag-scroll-progress>
          </div>

          <h3 style="font-size: 1rem; margin-bottom: 1rem;">Ring Variants</h3>
          <div style="display: flex; gap: 2rem; flex-wrap: wrap;">
            <div style="text-align: center;">
              <ag-scroll-progress
                mode="ring"
                ring-variant="primary"
                ring-size="40"
                style="position: static;"
              ></ag-scroll-progress>
              <p style="margin-top: 0.5rem; font-size: 0.875rem;">Primary</p>
            </div>
            <div style="text-align: center;">
              <ag-scroll-progress
                mode="ring"
                ring-variant="success"
                ring-size="40"
                style="position: static;"
              ></ag-scroll-progress>
              <p style="margin-top: 0.5rem; font-size: 0.875rem;">Success</p>
            </div>
            <div style="text-align: center;">
              <ag-scroll-progress
                mode="ring"
                ring-variant="warning"
                ring-size="40"
                style="position: static;"
              ></ag-scroll-progress>
              <p style="margin-top: 0.5rem; font-size: 0.875rem;">Warning</p>
            </div>
            <div style="text-align: center;">
              <ag-scroll-progress
                mode="ring"
                ring-variant="danger"
                ring-size="40"
                style="position: static;"
              ></ag-scroll-progress>
              <p style="margin-top: 0.5rem; font-size: 0.875rem;">Danger</p>
            </div>
            <div style="text-align: center;">
              <ag-scroll-progress
                mode="ring"
                ring-variant="info"
                ring-size="40"
                style="position: static;"
              ></ag-scroll-progress>
              <p style="margin-top: 0.5rem; font-size: 0.875rem;">Info</p>
            </div>
          </div>
        </div>

        <!-- Scrollable content to demonstrate -->
        <div class="mbe4">
          <h2>Keep Scrolling!</h2>
          <p class="mbs2 mbe3">Scroll down to see the active progress indicators update in real-time.</p>
          <div style="background: var(--ag-background-secondary); padding: var(--ag-space-4); border-radius: var(--ag-radius-md);">
            ${Array.from({length:30}).map((e,i)=>d`
                <p style="margin: 0.5rem 0; color: var(--ag-text-secondary);">
                  Paragraph ${i+1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              `)}
          </div>
        </div>

        <div
          class="mbe4"
          style="text-align: center; padding: var(--ag-space-8) 0;"
        >
          <h2>🎉 You've reached the end!</h2>
          <p style="color: var(--ag-text-secondary);">Notice how all active progress indicators show 100%</p>
        </div>
      </section>
    `}}w(P,"properties",{showBar:{type:Boolean},showDotTrail:{type:Boolean},showBadge:{type:Boolean},showRing:{type:Boolean}});customElements.define("scroll-progress-lit-examples",P);const Fe=`<template>
  <section>
    <!-- Mode Controls -->
    <div
      class="mbe4"
      style="background: var(--ag-background-secondary); padding: var(--ag-space-4); border-radius: var(--ag-radius-md); position: sticky; top: 0; z-index: 1000;"
    >
      <h2 style="margin-top: 0;">Active Scroll Indicators</h2>
      <p
        class="mbs2 mbe3"
        style="font-size: 0.875rem; color: var(--ag-text-secondary);"
      >
        Toggle modes on/off to see different scroll progress indicators in action. Scroll down to see them update!
      </p>
      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
          <VueToggle v-model:checked="showBar" />
          <span>Bar (Top)</span>
        </label>
        <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
          <VueToggle v-model:checked="showDotTrail" />
          <span>Dot Trail</span>
        </label>
        <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
          <VueToggle v-model:checked="showBadge" />
          <span>Badge (Bottom Left)</span>
        </label>
        <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
          <VueToggle v-model:checked="showRing" />
          <span>Ring (Bottom Right)</span>
        </label>
      </div>
    </div>

    <!-- Active Scroll Progress Indicators -->
    <VueScrollProgress
      v-if="showBar"
      mode="bar"
      orientation="top"
    />

    <div
      v-if="showDotTrail"
      style="position: fixed; top: 5rem; right: 3%; z-index: 100;"
    >
      <VueScrollProgress
        mode="dot-trail"
        :dots="7"
        badge-variant="success"
      />
    </div>

    <div
      v-if="showBadge"
      style="position: fixed; bottom: var(--ag-space-4); left: var(--ag-space-4); z-index: 100;"
    >
      <VueScrollProgress
        mode="badge"
        badge-variant="info"
      />
    </div>

    <div
      v-if="showRing"
      style="position: fixed; bottom: var(--ag-space-4); right: var(--ag-space-4); z-index: 100;"
    >
      <VueScrollProgress
        mode="ring"
        :ring-size="48"
        ring-variant="primary"
      />
    </div>

    <!-- Individual Mode Explanations -->
    <div class="mbe4">
      <h2>Bar Mode</h2>
      <p class="mbs2 mbe3">
        The classic scroll progress bar. Positioned at the top (or bottom) of the viewport, it provides a clear,
        unobtrusive indication of scroll depth. Perfect for long-form content like articles and documentation.
      </p>
      <div style="background: var(--ag-background-secondary); padding: var(--ag-space-4); border-radius: var(--ag-radius-md);">
        <h3 style="margin-top: 0; font-size: 0.875rem;">Props</h3>
        <ul style="margin: 0; padding-left: 1.5rem; font-size: 0.875rem;">
          <li><code>orientation</code>: 'top' or 'bottom'</li>
          <li><code>size</code>: Uses small size for subtle appearance</li>
        </ul>
      </div>
    </div>

    <div class="mbe4">
      <h2>Dot Trail Mode</h2>
      <p class="mbs2 mbe3">
        A minimalist approach using a trail of dots. As you scroll, dots fill from left to right.
        Great for presentations, multi-step forms, or when you want a less prominent indicator.
      </p>
      <div style="background: var(--ag-background-secondary); padding: var(--ag-space-4); border-radius: var(--ag-radius-md);">
        <h3 style="margin-top: 0; font-size: 0.875rem;">Props</h3>
        <ul style="margin: 0; padding-left: 1.5rem; font-size: 0.875rem;">
          <li><code>dots</code>: Number of dots to display (default: 5)</li>
          <li><code>badgeVariant</code>: Color variant for filled dots</li>
        </ul>
      </div>
    </div>

    <div class="mbe4">
      <h2>Badge Mode</h2>
      <p class="mbs2 mbe3">
        Displays the exact scroll percentage in a badge. Useful when users need precise feedback
        about their position in the content. Can be positioned anywhere on the page.
      </p>
      <div style="background: var(--ag-background-secondary); padding: var(--ag-space-4); border-radius: var(--ag-radius-md);">
        <h3 style="margin-top: 0; font-size: 0.875rem;">Props</h3>
        <ul style="margin: 0; padding-left: 1.5rem; font-size: 0.875rem;">
          <li><code>badgeVariant</code>: Badge color variant</li>
          <li><code>precision</code>: Decimal places (0 for integers like "47%")</li>
        </ul>
      </div>
    </div>

    <div class="mbe4">
      <h2>Ring Mode</h2>
      <p class="mbs2 mbe3">
        A circular progress ring that fills as you scroll. Often paired with floating action buttons
        or scroll-to-top functionality. Provides an elegant, space-efficient indicator.
      </p>
      <div style="background: var(--ag-background-secondary); padding: var(--ag-space-4); border-radius: var(--ag-radius-md);">
        <h3 style="margin-top: 0; font-size: 0.875rem;">Props</h3>
        <ul style="margin: 0; padding-left: 1.5rem; font-size: 0.875rem;">
          <li><code>ringSize</code>: Diameter in pixels (default: 32)</li>
          <li><code>ringStrokeWidth</code>: Thickness of the ring (default: 3)</li>
          <li><code>ringVariant</code>: Color variant</li>
        </ul>
      </div>
    </div>

    <!-- Size Variants (Bar Mode) -->
    <div class="mbe4">
      <h2>Bar Size Variants</h2>
      <p class="mbs2 mbe3">Progress bars support three sizes via the underlying Progress component.</p>
      <div style="display: flex; flex-direction: column; gap: 2rem;">
        <div>
          <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; font-weight: 500;">Small (8px) - Default for scroll progress</p>
          <VueScrollProgress
            mode="bar"
            orientation="top"
            style="position: static;"
          />
        </div>
        <div>
          <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; font-weight: 500;">Medium (12px)</p>
          <div style="position: relative;">
            <ag-scroll-progress
              mode="bar"
              orientation="top"
              style="position: static;"
            ></ag-scroll-progress>
          </div>
        </div>
      </div>
    </div>

    <!-- Precision Control -->
    <div class="mbe4">
      <h2>Precision Control</h2>
      <p class="mbs2 mbe3">Control decimal places in percentage display with the <code>precision</code> prop.</p>
      <div style="display: flex; gap: 2rem; flex-wrap: wrap;">
        <div style="text-align: center;">
          <VueScrollProgress
            mode="badge"
            :precision="0"
            badge-variant="primary"
            style="position: static;"
          />
          <p style="margin-top: 0.5rem; font-size: 0.875rem;">precision={0}</p>
          <p style="margin: 0; font-size: 0.75rem; color: var(--ag-text-secondary);">Integers (47%)</p>
        </div>
        <div style="text-align: center;">
          <VueScrollProgress
            mode="badge"
            :precision="1"
            badge-variant="success"
            style="position: static;"
          />
          <p style="margin-top: 0.5rem; font-size: 0.875rem;">precision={1}</p>
          <p style="margin: 0; font-size: 0.75rem; color: var(--ag-text-secondary);">One decimal (47.3%)</p>
        </div>
        <div style="text-align: center;">
          <VueScrollProgress
            mode="badge"
            :precision="2"
            badge-variant="warning"
            style="position: static;"
          />
          <p style="margin-top: 0.5rem; font-size: 0.875rem;">precision={2}</p>
          <p style="margin: 0; font-size: 0.75rem; color: var(--ag-text-secondary);">Two decimals (47.39%)</p>
        </div>
      </div>
    </div>

    <!-- Variants -->
    <div class="mbe4">
      <h2>Color Variants</h2>
      <p class="mbs2 mbe3">Both badge and ring modes support color variants.</p>

      <h3 style="font-size: 1rem; margin-bottom: 1rem;">Badge Variants</h3>
      <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 2rem;">
        <VueScrollProgress
          mode="badge"
          badge-variant="default"
          style="position: static;"
        />
        <VueScrollProgress
          mode="badge"
          badge-variant="success"
          style="position: static;"
        />
        <VueScrollProgress
          mode="badge"
          badge-variant="warning"
          style="position: static;"
        />
        <VueScrollProgress
          mode="badge"
          badge-variant="danger"
          style="position: static;"
        />
        <VueScrollProgress
          mode="badge"
          badge-variant="info"
          style="position: static;"
        />
      </div>

      <h3 style="font-size: 1rem; margin-bottom: 1rem;">Ring Variants</h3>
      <div style="display: flex; gap: 2rem; flex-wrap: wrap;">
        <div style="text-align: center;">
          <VueScrollProgress
            mode="ring"
            ring-variant="primary"
            :ring-size="40"
            style="position: static;"
          />
          <p style="margin-top: 0.5rem; font-size: 0.875rem;">Primary</p>
        </div>
        <div style="text-align: center;">
          <VueScrollProgress
            mode="ring"
            ring-variant="success"
            :ring-size="40"
            style="position: static;"
          />
          <p style="margin-top: 0.5rem; font-size: 0.875rem;">Success</p>
        </div>
        <div style="text-align: center;">
          <VueScrollProgress
            mode="ring"
            ring-variant="warning"
            :ring-size="40"
            style="position: static;"
          />
          <p style="margin-top: 0.5rem; font-size: 0.875rem;">Warning</p>
        </div>
        <div style="text-align: center;">
          <VueScrollProgress
            mode="ring"
            ring-variant="danger"
            :ring-size="40"
            style="position: static;"
          />
          <p style="margin-top: 0.5rem; font-size: 0.875rem;">Danger</p>
        </div>
        <div style="text-align: center;">
          <VueScrollProgress
            mode="ring"
            ring-variant="info"
            :ring-size="40"
            style="position: static;"
          />
          <p style="margin-top: 0.5rem; font-size: 0.875rem;">Info</p>
        </div>
      </div>
    </div>

    <!-- Scrollable content to demonstrate -->
    <div class="mbe4">
      <h2>Keep Scrolling!</h2>
      <p class="mbs2 mbe3">Scroll down to see the active progress indicators update in real-time.</p>
      <div style="background: var(--ag-background-secondary); padding: var(--ag-space-4); border-radius: var(--ag-radius-md);">
        <p
          v-for="i in 30"
          :key="i"
          style="margin: 0.5rem 0; color: var(--ag-text-secondary);"
        >
          Paragraph {{ i }}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>

    <div
      class="mbe4"
      style="text-align: center; padding: var(--ag-space-8) 0;"
    >
      <h2>🎉 You've reached the end!</h2>
      <p style="color: var(--ag-text-secondary);">Notice how all active progress indicators show 100%</p>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { VueScrollProgress } from "agnosticui-core/scroll-progress/vue";
import { VueToggle } from "agnosticui-core/toggle/vue";

export default defineComponent({
  name: "ScrollProgressExamples",
  components: {
    VueScrollProgress,
    VueToggle,
  },
  setup() {
    // Start with all modes enabled so users discover all features
    const showBar = ref(true);
    const showDotTrail = ref(true);
    const showBadge = ref(true);
    const showRing = ref(true);

    return {
      showBar,
      showDotTrail,
      showBadge,
      showRing,
    };
  },
});
<\/script>

<style scoped>
/* Ensure toggle labels are readable */
label {
  user-select: none;
}
</style>
`,Se=`
import { LitElement, html } from 'lit';
import 'agnosticui-core/scroll-progress';
import 'agnosticui-core/toggle';

export class ScrollProgressLitExamples extends LitElement {
  static properties = {
    showBar: { type: Boolean },
    showDotTrail: { type: Boolean },
    showBadge: { type: Boolean },
    showRing: { type: Boolean },
  };

  constructor() {
    super();
    this.showBar = true;
    this.showDotTrail = true;
    this.showBadge = true;
    this.showRing = true;
  }

  createRenderRoot() {
    return this;
  }

  handleBarToggle(e) {
    this.showBar = e.target.checked;
  }

  handleDotTrailToggle(e) {
    this.showDotTrail = e.target.checked;
  }

  handleBadgeToggle(e) {
    this.showBadge = e.target.checked;
  }

  handleRingToggle(e) {
    this.showRing = e.target.checked;
  }

  render() {
    return html\`
      <section>
        <!-- Mode Controls -->
        <div
          class="mbe4"
          style="background: var(--ag-background-secondary); padding: var(--ag-space-4); border-radius: var(--ag-radius-md); position: sticky; top: 0; z-index: 1000;"
        >
          <h2 style="margin-top: 0;">Active Scroll Indicators</h2>
          <p
            class="mbs2 mbe3"
            style="font-size: 0.875rem; color: var(--ag-text-secondary);"
          >
            Toggle modes on/off to see different scroll progress indicators in action. Scroll down to see them update!
          </p>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
              <ag-toggle ?checked="\${this.showBar}" @click="\${(e) => { this.showBar = !this.showBar}}"></ag-toggle>
              <span>Bar (Top)</span>
            </label>
            <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
              <ag-toggle ?checked="\${this.showDotTrail}" @click="\${(e) => { this.showDotTrail = !this.showDotTrail}}"></ag-toggle>
              <span>Dot Trail</span>
            </label>
            <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
              <ag-toggle ?checked="\${this.showBadge}" @click="\${(e) => { this.showBadge = !this.showBadge}}"></ag-toggle>
              <span>Badge (Bottom Left)</span>
            </label>
            <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
              <ag-toggle ?checked="\${this.showRing}" @click="\${(e) => { this.showRing = !this.showRing}}"></ag-toggle>
              <span>Ring (Bottom Right)</span>
            </label>
          </div>
        </div>

        <!-- Active Scroll Progress Indicators -->
        \${this.showBar
          ? html\`<ag-scroll-progress mode="bar" orientation="top"></ag-scroll-progress>\`
          : ''}

        \${this.showDotTrail
          ? html\`
            <div style="position: fixed; top: 5rem; right: 3%; z-index: 100;">
              <ag-scroll-progress
                mode="dot-trail"
                dots="7"
                badge-variant="success"
              ></ag-scroll-progress>
            </div>
          \`
          : ''}

        \${this.showBadge
          ? html\`
            <div style="position: fixed; bottom: var(--ag-space-4); left: var(--ag-space-4); z-index: 100;">
              <ag-scroll-progress
                mode="badge"
                badge-variant="info"
              ></ag-scroll-progress>
            </div>
          \`
          : ''}

        \${this.showRing
          ? html\`
            <div style="position: fixed; bottom: var(--ag-space-4); right: var(--ag-space-4); z-index: 100;">
              <ag-scroll-progress
                mode="ring"
                ring-size="48"
                ring-variant="primary"
              ></ag-scroll-progress>
            </div>
          \`
          : ''}

        <!-- Individual Mode Explanations -->
        <div class="mbe4">
          <h2>Bar Mode</h2>
          <p class="mbs2 mbe3">
            The classic scroll progress bar. Positioned at the top (or bottom) of the viewport, it provides a clear,
            unobtrusive indication of scroll depth. Perfect for long-form content like articles and documentation.
          </p>
          <div style="background: var(--ag-background-secondary); padding: var(--ag-space-4); border-radius: var(--ag-radius-md);">
            <h3 style="margin-top: 0; font-size: 0.875rem;">Props</h3>
            <ul style="margin: 0; padding-left: 1.5rem; font-size: 0.875rem;">
              <li><code>orientation</code>: 'top' or 'bottom'</li>
              <li><code>size</code>: Uses small size for subtle appearance</li>
            </ul>
          </div>
        </div>

        <div class="mbe4">
          <h2>Dot Trail Mode</h2>
          <p class="mbs2 mbe3">
            A minimalist approach using a trail of dots. As you scroll, dots fill from left to right.
            Great for presentations, multi-step forms, or when you want a less prominent indicator.
          </p>
          <div style="background: var(--ag-background-secondary); padding: var(--ag-space-4); border-radius: var(--ag-radius-md);">
            <h3 style="margin-top: 0; font-size: 0.875rem;">Props</h3>
            <ul style="margin: 0; padding-left: 1.5rem; font-size: 0.875rem;">
              <li><code>dots</code>: Number of dots to display (default: 5)</li>
              <li><code>badge-variant</code>: Color variant for filled dots</li>
            </ul>
          </div>
        </div>

        <div class="mbe4">
          <h2>Badge Mode</h2>
          <p class="mbs2 mbe3">
            Displays the exact scroll percentage in a badge. Useful when users need precise feedback
            about their position in the content. Can be positioned anywhere on the page.
          </p>
          <div style="background: var(--ag-background-secondary); padding: var(--ag-space-4); border-radius: var(--ag-radius-md);">
            <h3 style="margin-top: 0; font-size: 0.875rem;">Props</h3>
            <ul style="margin: 0; padding-left: 1.5rem; font-size: 0.875rem;">
              <li><code>badge-variant</code>: Badge color variant</li>
              <li><code>precision</code>: Decimal places (0 for integers like "47%")</li>
            </ul>
          </div>
        </div>

        <div class="mbe4">
          <h2>Ring Mode</h2>
          <p class="mbs2 mbe3">
            A circular progress ring that fills as you scroll. Often paired with floating action buttons
            or scroll-to-top functionality. Provides an elegant, space-efficient indicator.
          </p>
          <div style="background: var(--ag-background-secondary); padding: var(--ag-space-4); border-radius: var(--ag-radius-md);">
            <h3 style="margin-top: 0; font-size: 0.875rem;">Props</h3>
            <ul style="margin: 0; padding-left: 1.5rem; font-size: 0.875rem;">
              <li><code>ring-size</code>: Diameter in pixels (default: 32)</li>
              <li><code>ring-stroke-width</code>: Thickness of the ring (default: 3)</li>
              <li><code>ring-variant</code>: Color variant</li>
            </ul>
          </div>
        </div>

        <!-- Size Variants (Bar Mode) -->
        <div class="mbe4">
          <h2>Bar Size Variants</h2>
          <p class="mbs2 mbe3">Progress bars support three sizes via the underlying Progress component.</p>
          <div style="display: flex; flex-direction: column; gap: 2rem;">
            <div>
              <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; font-weight: 500;">Small (8px) - Default for scroll progress</p>
              <ag-scroll-progress
                mode="bar"
                orientation="top"
                style="position: static;"
              ></ag-scroll-progress>
            </div>
            <div>
              <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; font-weight: 500;">Medium (12px)</p>
              <div style="position: relative;">
                <ag-scroll-progress
                  mode="bar"
                  orientation="top"
                  style="position: static;"
                ></ag-scroll-progress>
              </div>
            </div>
          </div>
        </div>

        <!-- Precision Control -->
        <div class="mbe4">
          <h2>Precision Control</h2>
          <p class="mbs2 mbe3">Control decimal places in percentage display with the <code>precision</code> prop.</p>
          <div style="display: flex; gap: 2rem; flex-wrap: wrap;">
            <div style="text-align: center;">
              <ag-scroll-progress
                mode="badge"
                precision="0"
                badge-variant="primary"
                style="position: static;"
              ></ag-scroll-progress>
              <p style="margin-top: 0.5rem; font-size: 0.875rem;">precision={0}</p>
              <p style="margin: 0; font-size: 0.75rem; color: var(--ag-text-secondary);">Integers (47%)</p>
            </div>
            <div style="text-align: center;">
              <ag-scroll-progress
                mode="badge"
                precision="1"
                badge-variant="success"
                style="position: static;"
              ></ag-scroll-progress>
              <p style="margin-top: 0.5rem; font-size: 0.875rem;">precision={1}</p>
              <p style="margin: 0; font-size: 0.75rem; color: var(--ag-text-secondary);">One decimal (47.3%)</p>
            </div>
            <div style="text-align: center;">
              <ag-scroll-progress
                mode="badge"
                precision="2"
                badge-variant="warning"
                style="position: static;"
              ></ag-scroll-progress>
              <p style="margin-top: 0.5rem; font-size: 0.875rem;">precision={2}</p>
              <p style="margin: 0; font-size: 0.75rem; color: var(--ag-text-secondary);">Two decimals (47.39%)</p>
            </div>
          </div>
        </div>

        <!-- Variants -->
        <div class="mbe4">
          <h2>Color Variants</h2>
          <p class="mbs2 mbe3">Both badge and ring modes support color variants.</p>

          <h3 style="font-size: 1rem; margin-bottom: 1rem;">Badge Variants</h3>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 2rem;">
            <ag-scroll-progress
              mode="badge"
              badge-variant="default"
              style="position: static;"
            ></ag-scroll-progress>
            <ag-scroll-progress
              mode="badge"
              badge-variant="success"
              style="position: static;"
            ></ag-scroll-progress>
            <ag-scroll-progress
              mode="badge"
              badge-variant="warning"
              style="position: static;"
            ></ag-scroll-progress>
            <ag-scroll-progress
              mode="badge"
              badge-variant="danger"
              style="position: static;"
            ></ag-scroll-progress>
            <ag-scroll-progress
              mode="badge"
              badge-variant="info"
              style="position: static;"
            ></ag-scroll-progress>
          </div>

          <h3 style="font-size: 1rem; margin-bottom: 1rem;">Ring Variants</h3>
          <div style="display: flex; gap: 2rem; flex-wrap: wrap;">
            <div style="text-align: center;">
              <ag-scroll-progress
                mode="ring"
                ring-variant="primary"
                ring-size="40"
                style="position: static;"
              ></ag-scroll-progress>
              <p style="margin-top: 0.5rem; font-size: 0.875rem;">Primary</p>
            </div>
            <div style="text-align: center;">
              <ag-scroll-progress
                mode="ring"
                ring-variant="success"
                ring-size="40"
                style="position: static;"
              ></ag-scroll-progress>
              <p style="margin-top: 0.5rem; font-size: 0.875rem;">Success</p>
            </div>
            <div style="text-align: center;">
              <ag-scroll-progress
                mode="ring"
                ring-variant="warning"
                ring-size="40"
                style="position: static;"
              ></ag-scroll-progress>
              <p style="margin-top: 0.5rem; font-size: 0.875rem;">Warning</p>
            </div>
            <div style="text-align: center;">
              <ag-scroll-progress
                mode="ring"
                ring-variant="danger"
                ring-size="40"
                style="position: static;"
              ></ag-scroll-progress>
              <p style="margin-top: 0.5rem; font-size: 0.875rem;">Danger</p>
            </div>
            <div style="text-align: center;">
              <ag-scroll-progress
                mode="ring"
                ring-variant="info"
                ring-size="40"
                style="position: static;"
              ></ag-scroll-progress>
              <p style="margin-top: 0.5rem; font-size: 0.875rem;">Info</p>
            </div>
          </div>
        </div>

        <!-- Scrollable content to demonstrate -->
        <div class="mbe4">
          <h2>Keep Scrolling!</h2>
          <p class="mbs2 mbe3">Scroll down to see the active progress indicators update in real-time.</p>
          <div style="background: var(--ag-background-secondary); padding: var(--ag-space-4); border-radius: var(--ag-radius-md);">
            \${Array.from({ length: 30 }).map(
              (_, i) => html\`
                <p style="margin: 0.5rem 0; color: var(--ag-text-secondary);">
                  Paragraph \${i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              \`
            )}
          </div>
        </div>

        <div
          class="mbe4"
          style="text-align: center; padding: var(--ag-space-8) 0;"
        >
          <h2>🎉 You've reached the end!</h2>
          <p style="color: var(--ag-text-secondary);">Notice how all active progress indicators show 100%</p>
        </div>
      </section>
    \`;
  }
}

customElements.define('scroll-progress-lit-examples', ScrollProgressLitExamples);
`,Be=`
import { useState } from "react";
import { ReactScrollProgress } from "agnosticui-core/scroll-progress/react";
import { ReactToggle } from "agnosticui-core/toggle/react";

export default function ScrollProgressReactExamples() {
  const [showBar, setShowBar] = useState(true);
  const [showDotTrail, setShowDotTrail] = useState(true);
  const [showBadge, setShowBadge] = useState(true);
  const [showRing, setShowRing] = useState(true);

  return (
    <section>
      {/* Mode Controls */}
      <div
        className="mbe4"
        style={{
          background: "var(--ag-background-secondary)",
          padding: "var(--ag-space-4)",
          borderRadius: "var(--ag-radius-md)",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <h2 style={{ marginTop: 0 }}>Active Scroll Indicators</h2>
        <p
          className="mbs2 mbe3"
          style={{ fontSize: "0.875rem", color: "var(--ag-text-secondary)" }}
        >
          Toggle modes on/off to see different scroll progress indicators in action. Scroll down to see them update!
        </p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" }}>
            <ReactToggle
              checked={showBar}
              onChange={() => setShowBar(!showBar)}
            />
            <span>Bar (Top)</span>
          </label>
          <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" }}>
            <ReactToggle
              checked={showDotTrail}
              onChange={() => setShowDotTrail(!showDotTrail)}
            />
            <span>Dot Trail</span>
          </label>
          <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" }}>
            <ReactToggle
              checked={showBadge}
              onChange={() => setShowBadge(!showBadge)}
            />
            <span>Badge (Bottom Left)</span>
          </label>
          <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" }}>
            <ReactToggle
              checked={showRing}
              onChange={() => setShowRing(!showRing)}
            />
            <span>Ring (Bottom Right)</span>
          </label>
        </div>
      </div>

      {/* Active Scroll Progress Indicators */}
      {showBar && (
        <ReactScrollProgress mode="bar" orientation="top" />
      )}

      {showDotTrail && (
        <div style={{ position: "fixed", top: "5rem", right: "3%", zIndex: 100 }}>
          <ReactScrollProgress
            mode="dot-trail"
            dots={7}
            badgeVariant="success"
          />
        </div>
      )}

      {showBadge && (
        <div style={{ position: "fixed", bottom: "var(--ag-space-4)", left: "var(--ag-space-4)", zIndex: 100 }}>
          <ReactScrollProgress
            mode="badge"
            badgeVariant="info"
          />
        </div>
      )}

      {showRing && (
        <div style={{ position: "fixed", bottom: "var(--ag-space-4)", right: "var(--ag-space-4)", zIndex: 100 }}>
          <ReactScrollProgress
            mode="ring"
            ringSize={48}
            ringVariant="primary"
          />
        </div>
      )}

      {/* Individual Mode Explanations */}
      <div className="mbe4">
        <h2>Bar Mode</h2>
        <p className="mbs2 mbe3">
          The classic scroll progress bar. Positioned at the top (or bottom) of the viewport, it provides a clear,
          unobtrusive indication of scroll depth. Perfect for long-form content like articles and documentation.
        </p>
        <div style={{ background: "var(--ag-background-secondary)", padding: "var(--ag-space-4)", borderRadius: "var(--ag-radius-md)" }}>
          <h3 style={{ marginTop: 0, fontSize: "0.875rem" }}>Props</h3>
          <ul style={{ margin: 0, paddingLeft: "1.5rem", fontSize: "0.875rem" }}>
            <li><code>orientation</code>: 'top' or 'bottom'</li>
            <li><code>size</code>: Uses small size for subtle appearance</li>
          </ul>
        </div>
      </div>

      <div className="mbe4">
        <h2>Dot Trail Mode</h2>
        <p className="mbs2 mbe3">
          A minimalist approach using a trail of dots. As you scroll, dots fill from left to right.
          Great for presentations, multi-step forms, or when you want a less prominent indicator.
        </p>
        <div style={{ background: "var(--ag-background-secondary)", padding: "var(--ag-space-4)", borderRadius: "var(--ag-radius-md)" }}>
          <h3 style={{ marginTop: 0, fontSize: "0.875rem" }}>Props</h3>
          <ul style={{ margin: 0, paddingLeft: "1.5rem", fontSize: "0.875rem" }}>
            <li><code>dots</code>: Number of dots to display (default: 5)</li>
            <li><code>badgeVariant</code>: Color variant for filled dots</li>
          </ul>
        </div>
      </div>

      <div className="mbe4">
        <h2>Badge Mode</h2>
        <p className="mbs2 mbe3">
          Displays the exact scroll percentage in a badge. Useful when users need precise feedback
          about their position in the content. Can be positioned anywhere on the page.
        </p>
        <div style={{ background: "var(--ag-background-secondary)", padding: "var(--ag-space-4)", borderRadius: "var(--ag-radius-md)" }}>
          <h3 style={{ marginTop: 0, fontSize: "0.875rem" }}>Props</h3>
          <ul style={{ margin: 0, paddingLeft: "1.5rem", fontSize: "0.875rem" }}>
            <li><code>badgeVariant</code>: Badge color variant</li>
            <li><code>precision</code>: Decimal places (0 for integers like "47%")</li>
          </ul>
        </div>
      </div>

      <div className="mbe4">
        <h2>Ring Mode</h2>
        <p className="mbs2 mbe3">
          A circular progress ring that fills as you scroll. Often paired with floating action buttons
          or scroll-to-top functionality. Provides an elegant, space-efficient indicator.
        </p>
        <div style={{ background: "var(--ag-background-secondary)", padding: "var(--ag-space-4)", borderRadius: "var(--ag-radius-md)" }}>
          <h3 style={{ marginTop: 0, fontSize: "0.875rem" }}>Props</h3>
          <ul style={{ margin: 0, paddingLeft: "1.5rem", fontSize: "0.875rem" }}>
            <li><code>ringSize</code>: Diameter in pixels (default: 32)</li>
            <li><code>ringStrokeWidth</code>: Thickness of the ring (default: 3)</li>
            <li><code>ringVariant</code>: Color variant</li>
          </ul>
        </div>
      </div>

      {/* Size Variants (Bar Mode) */}
      <div className="mbe4">
        <h2>Bar Size Variants</h2>
        <p className="mbs2 mbe3">Progress bars support three sizes via the underlying Progress component.</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <div>
            <p style={{ margin: "0 0 0.5rem 0", fontSize: "0.875rem", fontWeight: 500 }}>Small (8px) - Default for scroll progress</p>
            <ReactScrollProgress
              mode="bar"
              orientation="top"
              style={{ position: "static" }}
            />
          </div>
          <div>
            <p style={{ margin: "0 0 0.5rem 0", fontSize: "0.875rem", fontWeight: 500 }}>Medium (12px)</p>
            <div style={{ position: "relative" }}>
              <ReactScrollProgress
                mode="bar"
                orientation="top"
                style={{ position: "static" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Precision Control */}
      <div className="mbe4">
        <h2>Precision Control</h2>
        <p className="mbs2 mbe3">Control decimal places in percentage display with the <code>precision</code> prop.</p>
        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
          <div style={{ textAlign: "center" }}>
            <ReactScrollProgress
              mode="badge"
              precision={0}
              badgeVariant="primary"
              style={{ position: "static" }}
            />
            <p style={{ marginTop: "0.5rem", fontSize: "0.875rem" }}>precision={'{0}'}</p>
            <p style={{ margin: 0, fontSize: "0.75rem", color: "var(--ag-text-secondary)" }}>Integers (47%)</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <ReactScrollProgress
              mode="badge"
              precision={1}
              badgeVariant="success"
              style={{ position: "static" }}
            />
            <p style={{ marginTop: "0.5rem", fontSize: "0.875rem" }}>precision={'{1}'}</p>
            <p style={{ margin: 0, fontSize: "0.75rem", color: "var(--ag-text-secondary)" }}>One decimal (47.3%)</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <ReactScrollProgress
              mode="badge"
              precision={2}
              badgeVariant="warning"
              style={{ position: "static" }}
            />
            <p style={{ marginTop: "0.5rem", fontSize: "0.875rem" }}>precision={'{2}'}</p>
            <p style={{ margin: 0, fontSize: "0.75rem", color: "var(--ag-text-secondary)" }}>Two decimals (47.39%)</p>
          </div>
        </div>
      </div>

      {/* Variants */}
      <div className="mbe4">
        <h2>Color Variants</h2>
        <p className="mbs2 mbe3">Both badge and ring modes support color variants.</p>

        <h3 style={{ fontSize: "1rem", marginBottom: "1rem" }}>Badge Variants</h3>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          <ReactScrollProgress
            mode="badge"
            badgeVariant="default"
            style={{ position: "static" }}
          />
          <ReactScrollProgress
            mode="badge"
            badgeVariant="success"
            style={{ position: "static" }}
          />
          <ReactScrollProgress
            mode="badge"
            badgeVariant="warning"
            style={{ position: "static" }}
          />
          <ReactScrollProgress
            mode="badge"
            badgeVariant="danger"
            style={{ position: "static" }}
          />
          <ReactScrollProgress
            mode="badge"
            badgeVariant="info"
            style={{ position: "static" }}
          />
        </div>

        <h3 style={{ fontSize: "1rem", marginBottom: "1rem" }}>Ring Variants</h3>
        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
          <div style={{ textAlign: "center" }}>
            <ReactScrollProgress
              mode="ring"
              ringVariant="primary"
              ringSize={40}
              style={{ position: "static" }}
            />
            <p style={{ marginTop: "0.5rem", fontSize: "0.875rem" }}>Primary</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <ReactScrollProgress
              mode="ring"
              ringVariant="success"
              ringSize={40}
              style={{ position: "static" }}
            />
            <p style={{ marginTop: "0.5rem", fontSize: "0.875rem" }}>Success</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <ReactScrollProgress
              mode="ring"
              ringVariant="warning"
              ringSize={40}
              style={{ position: "static" }}
            />
            <p style={{ marginTop: "0.5rem", fontSize: "0.875rem" }}>Warning</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <ReactScrollProgress
              mode="ring"
              ringVariant="danger"
              ringSize={40}
              style={{ position: "static" }}
            />
            <p style={{ marginTop: "0.5rem", fontSize: "0.875rem" }}>Danger</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <ReactScrollProgress
              mode="ring"
              ringVariant="info"
              ringSize={40}
              style={{ position: "static" }}
            />
            <p style={{ marginTop: "0.5rem", fontSize: "0.875rem" }}>Info</p>
          </div>
        </div>
      </div>

      {/* Scrollable content to demonstrate */}
      <div className="mbe4">
        <h2>Keep Scrolling!</h2>
        <p className="mbs2 mbe3">Scroll down to see the active progress indicators update in real-time.</p>
        <div style={{ background: "var(--ag-background-secondary)", padding: "var(--ag-space-4)", borderRadius: "var(--ag-radius-md)" }}>
          {Array.from({ length: 30 }).map((_, i) => (
            <p key={i} style={{ margin: "0.5rem 0", color: "var(--ag-text-secondary)" }}>
              Paragraph {i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          ))}
        </div>
      </div>

      <div
        className="mbe4"
        style={{ textAlign: "center", padding: "var(--ag-space-8) 0" }}
      >
        <h2>🎉 You've reached the end!</h2>
        <p style={{ color: "var(--ag-text-secondary)" }}>Notice how all active progress indicators show 100%</p>
      </div>
    </section>
  );
}
`,qe=JSON.parse('{"title":"Scroll Progress","description":"","frontmatter":{},"headers":[],"relativePath":"components/scroll-progress.md","filePath":"components/scroll-progress.md"}'),Pe={name:"components/scroll-progress.md"},Ie=Object.assign(Pe,{setup(t){return(e,i)=>(v(),u("div",null,[i[1]||(i[1]=s("h1",{id:"scroll-progress",tabindex:"-1"},[f("Scroll Progress "),s("a",{class:"header-anchor",href:"#scroll-progress","aria-label":'Permalink to "Scroll Progress"'},"​")],-1)),r(V),i[2]||(i[2]=s("p",null,"The Scroll Progress component provides visual feedback about how far the user has scrolled through a document or scrollable container. It offers four distinct visual modes to fit different design contexts.",-1)),i[3]||(i[3]=s("h2",{id:"examples",tabindex:"-1"},[f("Examples "),s("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),r(R,{component:"scroll-progress","vue-code":k(Fe),"lit-code":k(Se),"react-code":k(Be)},{vue:z(()=>[r(ze)]),lit:z(()=>[...i[0]||(i[0]=[s("scroll-progress-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),i[4]||(i[4]=B(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The framework examples below <code>import</code> AgnosticUI as an <code>npm</code> package. Alternatively, you can use the <strong>CLI for complete control, AI/LLM visibility, and full code ownership</strong>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> init</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> --framework</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> FRAMEWORK</span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;"> # react, vue, lit, svelte, etc.</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> add</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ScrollProgress</span></span></code></pre></div><p>The CLI copies source code directly into your project, giving you full visibility and control. After running <code>npx ag add</code>, you&#39;ll receive exact import instructions.</p></div><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><table class="ag-table ag-table--striped"><thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>mode</code></td><td><code>&#39;bar&#39; | &#39;dot-trail&#39; | &#39;badge&#39; | &#39;ring&#39;</code></td><td><code>&#39;bar&#39;</code></td><td>Visual representation mode.</td></tr><tr><td><code>target</code></td><td><code>HTMLElement | null</code></td><td><code>null</code></td><td>Custom scroll container (defaults to document).</td></tr><tr><td><code>orientation</code></td><td><code>&#39;top&#39; | &#39;bottom&#39;</code></td><td><code>&#39;top&#39;</code></td><td>Bar placement (bar mode only).</td></tr><tr><td><code>dots</code></td><td><code>number</code></td><td><code>5</code></td><td>Number of dots (dot-trail mode only).</td></tr><tr><td><code>badgeVariant</code></td><td>badge variants</td><td><code>&#39;info&#39;</code></td><td>Badge color (badge/dot-trail modes).</td></tr><tr><td><code>ringSize</code></td><td><code>number</code></td><td><code>32</code></td><td>Ring diameter in pixels (ring mode only).</td></tr><tr><td><code>ringStrokeWidth</code></td><td><code>number</code></td><td><code>3</code></td><td>Ring stroke width (ring mode only).</td></tr><tr><td><code>ringVariant</code></td><td>ring variants</td><td><code>&#39;info&#39;</code></td><td>Ring color (ring mode only).</td></tr><tr><td><code>precision</code></td><td><code>number</code></td><td><code>0</code></td><td>Decimal places for percentage (0 = integers).</td></tr></tbody></table><h2 id="modes" tabindex="-1">Modes <a class="header-anchor" href="#modes" aria-label="Permalink to &quot;Modes&quot;">​</a></h2><h3 id="bar-mode" tabindex="-1">Bar Mode <a class="header-anchor" href="#bar-mode" aria-label="Permalink to &quot;Bar Mode&quot;">​</a></h3><p>A horizontal progress bar fixed to the top or bottom of the viewport. Perfect for long-form content like articles and documentation.</p><h3 id="dot-trail-mode" tabindex="-1">Dot Trail Mode <a class="header-anchor" href="#dot-trail-mode" aria-label="Permalink to &quot;Dot Trail Mode&quot;">​</a></h3><p>A subtle row of dots that fill as you scroll. Great for minimalist designs or when you want a less intrusive indicator.</p><h3 id="badge-mode" tabindex="-1">Badge Mode <a class="header-anchor" href="#badge-mode" aria-label="Permalink to &quot;Badge Mode&quot;">​</a></h3><p>Displays the exact scroll percentage in a badge. Useful when users need precise feedback about their position.</p><h3 id="ring-mode" tabindex="-1">Ring Mode <a class="header-anchor" href="#ring-mode" aria-label="Permalink to &quot;Ring Mode&quot;">​</a></h3><p>A circular progress indicator, often used with floating action buttons or in dashboard contexts.</p><h2 id="css-shadow-parts" tabindex="-1">CSS Shadow Parts <a class="header-anchor" href="#css-shadow-parts" aria-label="Permalink to &quot;CSS Shadow Parts&quot;">​</a></h2><table class="ag-table ag-table--striped"><thead><tr><th>Part</th><th>Description</th></tr></thead><tbody><tr><td><code>scroll-progress-bar</code></td><td>The progress bar element (bar mode).</td></tr><tr><td><code>scroll-progress-dots</code></td><td>The dot trail container (dot-trail mode).</td></tr><tr><td><code>scroll-progress-badge</code></td><td>The badge element (badge mode).</td></tr><tr><td><code>scroll-progress-ring</code></td><td>The progress ring element (ring mode).</td></tr></tbody></table><h2 id="accessibility" tabindex="-1">Accessibility <a class="header-anchor" href="#accessibility" aria-label="Permalink to &quot;Accessibility&quot;">​</a></h2><ul><li>All modes include appropriate <code>aria-label</code> attributes for screen readers.</li><li>The component automatically updates as the user scrolls.</li><li>Respects user&#39;s motion preferences (uses design tokens for animations).</li></ul><h2 id="best-practices" tabindex="-1">Best Practices <a class="header-anchor" href="#best-practices" aria-label="Permalink to &quot;Best Practices&quot;">​</a></h2><ul><li><strong>Bar mode</strong>: Best for top-level page navigation and long-form content.</li><li><strong>Dot trail mode</strong>: Ideal for presentations, carousels, or multi-step processes.</li><li><strong>Badge mode</strong>: Use when precise percentage feedback is valuable.</li><li><strong>Ring mode</strong>: Pairs well with scroll-to-top buttons or floating navigation.</li><li>Keep precision at 0 (integers) for cleaner UX unless exact percentages are needed.</li><li>Use contrasting variants to ensure visibility across different backgrounds.</li></ul><h2 id="custom-scroll-container" tabindex="-1">Custom Scroll Container <a class="header-anchor" href="#custom-scroll-container" aria-label="Permalink to &quot;Custom Scroll Container&quot;">​</a></h2><p>Track scroll progress within a specific container instead of the entire document:</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueScrollProgress</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> mode</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;bar&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> :target</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;scrollContainer&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> ref</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;scrollContainer&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> style</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;height: 400px; overflow-y: auto;&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">      &lt;!-- Your scrollable content --&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> lang</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;ts&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { defineComponent, ref } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;vue&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { VueScrollProgress } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/scroll-progress/vue&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> defineComponent</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">({</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  components: { VueScrollProgress }</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">,</span></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">  setup</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">() </span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">    const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> scrollContainer</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> ref</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">HTMLElement</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> |</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> null</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">null</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">    return</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { scrollContainer };</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  }</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">,</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">})</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div>`,22))]))}});export{qe as __pageData,Ie as default};
