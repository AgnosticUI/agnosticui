var T=Object.defineProperty;var C=(t,e,i)=>e in t?T(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var w=(t,e,i)=>C(t,typeof e!="symbol"?e+"":e,i);import{A as V}from"./chunks/AlphaWarning.D199zhtu.js";import{a as F,i as D,x as d,z as m}from"./chunks/property-CemaeiRl.Cea_q1B7.js";import"./chunks/Progress.bHPW8BRR.js";import"./chunks/ProgressRing.DojbIVdj.js";import"./chunks/Badge.DKUPOUeU.js";import{s as R}from"./chunks/plugin-vue_export-helper-CHgC5LLL.lGy7RumW.js";import{d as S,c as u,o as v,r as A,K as E,p as y,v as M,P as _,s as $,_ as N,C as x,j as s,b as q,e as b,ae as B,G as r,a as f,F as I,B as L,t as W,w as z,k}from"./chunks/framework.CdHt8f9T.js";import{v as U}from"./chunks/VueToggle.vue_vue_type_script_setup_true_lang-BxrvAsse.CMj5-b8U.js";import{F as O}from"./chunks/FrameworkExample.BEe18gn2.js";import"./chunks/if-defined-C8i28hSj.D90q5KVf.js";import"./chunks/Badge.Cdc1lo6N.js";import"./chunks/form-control-utils.DASBWl_N.js";var H=Object.defineProperty,h=(t,e,i,a)=>{for(var o=void 0,l=t.length-1,p;l>=0;l--)(p=t[l])&&(o=p(e,i,o)||o);return o&&H(e,i,o),o};class g extends F{constructor(){super(),this._scrollPercent=0,this._scrollHandler=this._handleScroll.bind(this),this._resizeHandler=this._handleScroll.bind(this),this.mode="bar",this.target=null,this.orientation="top",this.dots=5,this.badgeVariant="info",this.ringSize=32,this.ringStrokeWidth=3,this.ringVariant="info",this.precision=0}static get styles(){return D`
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
    `}render(){switch(this.mode){case"bar":return this._renderBarMode();case"dot-trail":return this._renderDotTrailMode();case"badge":return this._renderBadgeMode();case"ring":return this._renderRingMode();default:return this._renderBarMode()}}}h([m({type:String,reflect:!0})],g.prototype,"mode");h([m({attribute:!1})],g.prototype,"target");h([m({type:String,reflect:!0})],g.prototype,"orientation");h([m({type:Number})],g.prototype,"dots");h([m({type:String,attribute:"badge-variant"})],g.prototype,"badgeVariant");h([m({type:Number,attribute:"ring-size"})],g.prototype,"ringSize");h([m({type:Number,attribute:"ring-stroke-width"})],g.prototype,"ringStrokeWidth");h([m({type:String,attribute:"ring-variant"})],g.prototype,"ringVariant");h([m({type:Number})],g.prototype,"precision");h([m({type:Number,state:!0})],g.prototype,"_scrollPercent");customElements.get("ag-scroll-progress")||customElements.define("ag-scroll-progress",g);const K=S({name:"VueScrollProgress",props:{mode:{type:String,default:"bar"},target:{type:Object,default:null},orientation:{type:String,default:"top"},dots:{type:Number,default:5},badgeVariant:{type:String,default:"info"},ringSize:{type:Number,default:32},ringStrokeWidth:{type:Number,default:3},ringVariant:{type:String,default:"info"},precision:{type:Number,default:0}},setup(t){const e=y(null),i=()=>{const a=e.value;a&&(a.mode=t.mode,a.target=t.target,a.orientation=t.orientation,a.dots=t.dots,a.badgeVariant=t.badgeVariant,a.ringSize=t.ringSize,a.ringStrokeWidth=t.ringStrokeWidth,a.ringVariant=t.ringVariant,a.precision=t.precision)};return M(async()=>{await customElements.whenDefined("ag-scroll-progress"),await _(),i()}),$(()=>{e.value&&i()}),{agComponent:e}}});function G(t,e,i,a,o,l){return v(),u("ag-scroll-progress",E({ref:"agComponent"},t.$attrs),[A(t.$slots,"default")],16)}const j=R(K,[["render",G]]),Y=S({name:"ScrollProgressExamples",components:{VueScrollProgress:j,VueToggle:U},setup(){const t=y(!0),e=y(!0),i=y(!0),a=y(!0);return{showBar:t,showDotTrail:e,showBadge:i,showRing:a}}}),J={class:"mbe4",style:{background:"var(--ag-background-secondary)",padding:"var(--ag-space-4)","border-radius":"var(--ag-radius-md)",position:"sticky",top:"0","z-index":"1000"}},X={style:{display:"flex",gap:"1rem","flex-wrap":"wrap"}},Q={style:{display:"flex","align-items":"center",gap:"0.5rem",cursor:"pointer"}},Z={style:{display:"flex","align-items":"center",gap:"0.5rem",cursor:"pointer"}},ee={style:{display:"flex","align-items":"center",gap:"0.5rem",cursor:"pointer"}},se={style:{display:"flex","align-items":"center",gap:"0.5rem",cursor:"pointer"}},te={key:1,style:{position:"fixed",top:"5rem",right:"3%","z-index":"100"}},ie={key:2,style:{position:"fixed",bottom:"var(--ag-space-4)",left:"var(--ag-space-4)","z-index":"100"}},re={key:3,style:{position:"fixed",bottom:"var(--ag-space-4)",right:"var(--ag-space-4)","z-index":"100"}},ae={class:"mbe4"},ne={style:{display:"flex","flex-direction":"column",gap:"2rem"}},oe={class:"mbe4"},le={style:{display:"flex",gap:"2rem","flex-wrap":"wrap"}},de={style:{"text-align":"center"}},ge={style:{"text-align":"center"}},pe={style:{"text-align":"center"}},ce={class:"mbe4"},me={style:{display:"flex",gap:"1rem","flex-wrap":"wrap","margin-bottom":"2rem"}},he={style:{display:"flex",gap:"2rem","flex-wrap":"wrap"}},ve={style:{"text-align":"center"}},ue={style:{"text-align":"center"}},ye={style:{"text-align":"center"}},be={style:{"text-align":"center"}},fe={style:{"text-align":"center"}},ke={class:"mbe4"},we={style:{background:"var(--ag-background-secondary)",padding:"var(--ag-space-4)","border-radius":"var(--ag-radius-md)"}};function xe(t,e,i,a,o,l){const p=x("VueToggle"),n=x("VueScrollProgress");return v(),u("section",null,[s("div",J,[e[8]||(e[8]=s("h2",{style:{"margin-top":"0"}},"Active Scroll Indicators",-1)),e[9]||(e[9]=s("p",{class:"mbs2 mbe3",style:{"font-size":"0.875rem",color:"var(--ag-text-secondary)"}}," Toggle modes on/off to see different scroll progress indicators in action. Scroll down to see them update! ",-1)),s("div",X,[s("label",Q,[r(p,{checked:t.showBar,"onUpdate:checked":e[0]||(e[0]=c=>t.showBar=c)},null,8,["checked"]),e[4]||(e[4]=s("span",null,"Bar (Top)",-1))]),s("label",Z,[r(p,{checked:t.showDotTrail,"onUpdate:checked":e[1]||(e[1]=c=>t.showDotTrail=c)},null,8,["checked"]),e[5]||(e[5]=s("span",null,"Dot Trail",-1))]),s("label",ee,[r(p,{checked:t.showBadge,"onUpdate:checked":e[2]||(e[2]=c=>t.showBadge=c)},null,8,["checked"]),e[6]||(e[6]=s("span",null,"Badge (Bottom Left)",-1))]),s("label",se,[r(p,{checked:t.showRing,"onUpdate:checked":e[3]||(e[3]=c=>t.showRing=c)},null,8,["checked"]),e[7]||(e[7]=s("span",null,"Ring (Bottom Right)",-1))])])]),t.showBar?(v(),q(n,{key:0,mode:"bar",orientation:"top"})):b("",!0),t.showDotTrail?(v(),u("div",te,[r(n,{mode:"dot-trail",dots:7,"badge-variant":"success"})])):b("",!0),t.showBadge?(v(),u("div",ie,[r(n,{mode:"badge","badge-variant":"info"})])):b("",!0),t.showRing?(v(),u("div",re,[r(n,{mode:"ring","ring-size":48,"ring-variant":"primary"})])):b("",!0),e[33]||(e[33]=B("",4)),s("div",ae,[e[12]||(e[12]=s("h2",null,"Bar Size Variants",-1)),e[13]||(e[13]=s("p",{class:"mbs2 mbe3"},"Progress bars support three sizes via the underlying Progress component.",-1)),s("div",ne,[s("div",null,[e[10]||(e[10]=s("p",{style:{margin:"0 0 0.5rem 0","font-size":"0.875rem","font-weight":"500"}},"Small (8px) - Default for scroll progress",-1)),r(n,{mode:"bar",orientation:"top",style:{position:"static"}})]),e[11]||(e[11]=s("div",null,[s("p",{style:{margin:"0 0 0.5rem 0","font-size":"0.875rem","font-weight":"500"}},"Medium (12px)"),s("div",{style:{position:"relative"}},[s("ag-scroll-progress",{mode:"bar",orientation:"top",style:{position:"static"}})])],-1))])]),s("div",oe,[e[20]||(e[20]=s("h2",null,"Precision Control",-1)),e[21]||(e[21]=s("p",{class:"mbs2 mbe3"},[f("Control decimal places in percentage display with the "),s("code",null,"precision"),f(" prop.")],-1)),s("div",le,[s("div",de,[r(n,{mode:"badge",precision:0,"badge-variant":"primary",style:{position:"static"}}),e[14]||(e[14]=s("p",{style:{"margin-top":"0.5rem","font-size":"0.875rem"}},"precision={0}",-1)),e[15]||(e[15]=s("p",{style:{margin:"0","font-size":"0.75rem",color:"var(--ag-text-secondary)"}},"Integers (47%)",-1))]),s("div",ge,[r(n,{mode:"badge",precision:1,"badge-variant":"success",style:{position:"static"}}),e[16]||(e[16]=s("p",{style:{"margin-top":"0.5rem","font-size":"0.875rem"}},"precision={1}",-1)),e[17]||(e[17]=s("p",{style:{margin:"0","font-size":"0.75rem",color:"var(--ag-text-secondary)"}},"One decimal (47.3%)",-1))]),s("div",pe,[r(n,{mode:"badge",precision:2,"badge-variant":"warning",style:{position:"static"}}),e[18]||(e[18]=s("p",{style:{"margin-top":"0.5rem","font-size":"0.875rem"}},"precision={2}",-1)),e[19]||(e[19]=s("p",{style:{margin:"0","font-size":"0.75rem",color:"var(--ag-text-secondary)"}},"Two decimals (47.39%)",-1))])])]),s("div",ce,[e[27]||(e[27]=s("h2",null,"Color Variants",-1)),e[28]||(e[28]=s("p",{class:"mbs2 mbe3"},"Both badge and ring modes support color variants.",-1)),e[29]||(e[29]=s("h3",{style:{"font-size":"1rem","margin-bottom":"1rem"}},"Badge Variants",-1)),s("div",me,[r(n,{mode:"badge","badge-variant":"default",style:{position:"static"}}),r(n,{mode:"badge","badge-variant":"success",style:{position:"static"}}),r(n,{mode:"badge","badge-variant":"warning",style:{position:"static"}}),r(n,{mode:"badge","badge-variant":"danger",style:{position:"static"}}),r(n,{mode:"badge","badge-variant":"info",style:{position:"static"}})]),e[30]||(e[30]=s("h3",{style:{"font-size":"1rem","margin-bottom":"1rem"}},"Ring Variants",-1)),s("div",he,[s("div",ve,[r(n,{mode:"ring","ring-variant":"primary","ring-size":40,style:{position:"static"}}),e[22]||(e[22]=s("p",{style:{"margin-top":"0.5rem","font-size":"0.875rem"}},"Primary",-1))]),s("div",ue,[r(n,{mode:"ring","ring-variant":"success","ring-size":40,style:{position:"static"}}),e[23]||(e[23]=s("p",{style:{"margin-top":"0.5rem","font-size":"0.875rem"}},"Success",-1))]),s("div",ye,[r(n,{mode:"ring","ring-variant":"warning","ring-size":40,style:{position:"static"}}),e[24]||(e[24]=s("p",{style:{"margin-top":"0.5rem","font-size":"0.875rem"}},"Warning",-1))]),s("div",be,[r(n,{mode:"ring","ring-variant":"danger","ring-size":40,style:{position:"static"}}),e[25]||(e[25]=s("p",{style:{"margin-top":"0.5rem","font-size":"0.875rem"}},"Danger",-1))]),s("div",fe,[r(n,{mode:"ring","ring-variant":"info","ring-size":40,style:{position:"static"}}),e[26]||(e[26]=s("p",{style:{"margin-top":"0.5rem","font-size":"0.875rem"}},"Info",-1))])])]),s("div",ke,[e[31]||(e[31]=s("h2",null,"Keep Scrolling!",-1)),e[32]||(e[32]=s("p",{class:"mbs2 mbe3"},"Scroll down to see the active progress indicators update in real-time.",-1)),s("div",we,[(v(),u(I,null,L(30,c=>s("p",{key:c,style:{margin:"0.5rem 0",color:"var(--ag-text-secondary)"}}," Paragraph "+W(c)+": Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",1)),64))])]),e[34]||(e[34]=s("div",{class:"mbe4",style:{"text-align":"center",padding:"var(--ag-space-8) 0"}},[s("h2",null,"🎉 You've reached the end!"),s("p",{style:{color:"var(--ag-text-secondary)"}},"Notice how all active progress indicators show 100%")],-1))])}const ze=N(Y,[["render",xe],["__scopeId","data-v-2d12e0b8"]]);class P extends F{constructor(){super(),this.showBar=!0,this.showDotTrail=!0,this.showBadge=!0,this.showRing=!0}createRenderRoot(){return this}handleBarToggle(e){this.showBar=e.target.checked}handleDotTrailToggle(e){this.showDotTrail=e.target.checked}handleBadgeToggle(e){this.showBadge=e.target.checked}handleRingToggle(e){this.showRing=e.target.checked}render(){return d`
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
`,Le=JSON.parse('{"title":"Scroll Progress","description":"","frontmatter":{},"headers":[],"relativePath":"components/scroll-progress.md","filePath":"components/scroll-progress.md"}'),Pe={name:"components/scroll-progress.md"},We=Object.assign(Pe,{setup(t){return(e,i)=>(v(),u("div",null,[i[1]||(i[1]=s("h1",{id:"scroll-progress",tabindex:"-1"},[f("Scroll Progress "),s("a",{class:"header-anchor",href:"#scroll-progress","aria-label":'Permalink to "Scroll Progress"'},"​")],-1)),r(V),i[2]||(i[2]=s("p",null,"The Scroll Progress component provides visual feedback about how far the user has scrolled through a document or scrollable container. It offers four distinct visual modes to fit different design contexts.",-1)),i[3]||(i[3]=s("h2",{id:"examples",tabindex:"-1"},[f("Examples "),s("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),r(O,{component:"scroll-progress","vue-code":k(Fe),"lit-code":k(Se),"react-code":k(Be)},{vue:z(()=>[r(ze)]),lit:z(()=>[...i[0]||(i[0]=[s("scroll-progress-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),i[4]||(i[4]=B("",22))]))}});export{Le as __pageData,We as default};
