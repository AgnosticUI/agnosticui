var w=Object.defineProperty;var x=(a,e,t)=>e in a?w(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var y=(a,e,t)=>x(a,typeof e!="symbol"?e+"":e,t);import{A as F}from"./chunks/AlphaWarning.yC7ZufpQ.js";import{h as z}from"./chunks/VueScrollProgress.BKbmQWlr.js";import{v as B}from"./chunks/VueToggle.vue_vue_type_script_setup_true_lang-BxrvAsse.BVF5hp03.js";import{d as S,p,_ as P,C as u,c as d,o,j as s,b as T,e as c,ae as f,G as i,a as m,F as C,B as D,t as V,w as b,k as h}from"./chunks/framework.NAAYCHZu.js";import{F as R}from"./chunks/FrameworkExample.Cm-JbUj-.js";import{a as A,x as l}from"./chunks/Button.CFkPNK98.js";import"./chunks/createLucideIcon.B61Wqv9x.js";import"./chunks/Progress.C0cOuCAZ.js";import"./chunks/ProgressRing.B0o_tZPN.js";import"./chunks/Badge.BOsSM_r3.js";import"./chunks/Badge.BqyNxupE.js";import"./chunks/plugin-vue_export-helper-CHgC5LLL.lGy7RumW.js";import"./chunks/form-control-utils.CX0RHW4_.js";import"./chunks/state-CovhUvdr.DWhhlYib.js";import"./chunks/sdk.m.DhOmSlC9.js";import"./chunks/Icon.DjToxxjJ.js";const E=S({name:"ScrollProgressExamples",components:{VueScrollProgress:z,VueToggle:B},setup(){const a=p(!0),e=p(!0),t=p(!0),v=p(!0);return{showBar:a,showDotTrail:e,showBadge:t,showRing:v}}}),M={class:"mbe4",style:{background:"var(--ag-background-secondary)",padding:"var(--ag-space-4)","border-radius":"var(--ag-radius-md)",position:"sticky",top:"0","z-index":"1000"}},q={style:{display:"flex",gap:"1rem","flex-wrap":"wrap"}},I={style:{display:"flex","align-items":"center",gap:"0.5rem",cursor:"pointer"}},N={style:{display:"flex","align-items":"center",gap:"0.5rem",cursor:"pointer"}},$={style:{display:"flex","align-items":"center",gap:"0.5rem",cursor:"pointer"}},L={style:{display:"flex","align-items":"center",gap:"0.5rem",cursor:"pointer"}},U={key:1,style:{position:"fixed",top:"5rem",right:"3%","z-index":"100"}},W={key:2,style:{position:"fixed",bottom:"var(--ag-space-4)",left:"var(--ag-space-4)","z-index":"100"}},_={key:3,style:{position:"fixed",bottom:"var(--ag-space-4)",right:"var(--ag-space-4)","z-index":"100"}},O={class:"mbe4"},G={style:{display:"flex","flex-direction":"column",gap:"2rem"}},K={class:"mbe4"},Y={style:{display:"flex",gap:"2rem","flex-wrap":"wrap"}},j={style:{"text-align":"center"}},H={style:{"text-align":"center"}},J={style:{"text-align":"center"}},X={class:"mbe4"},Q={style:{display:"flex",gap:"1rem","flex-wrap":"wrap","margin-bottom":"2rem"}},Z={style:{display:"flex",gap:"2rem","flex-wrap":"wrap"}},ee={style:{"text-align":"center"}},se={style:{"text-align":"center"}},ie={style:{"text-align":"center"}},ae={style:{"text-align":"center"}},te={style:{"text-align":"center"}},re={class:"mbe4"},ne={style:{background:"var(--ag-background-secondary)",padding:"var(--ag-space-4)","border-radius":"var(--ag-radius-md)"}};function oe(a,e,t,v,me,he){const g=u("VueToggle"),r=u("VueScrollProgress");return o(),d("section",null,[s("div",M,[e[8]||(e[8]=s("h2",{style:{"margin-top":"0"}},"Active Scroll Indicators",-1)),e[9]||(e[9]=s("p",{class:"mbs2 mbe3",style:{"font-size":"0.875rem",color:"var(--ag-text-secondary)"}}," Toggle modes on/off to see different scroll progress indicators in action. Scroll down to see them update! ",-1)),s("div",q,[s("label",I,[i(g,{checked:a.showBar,"onUpdate:checked":e[0]||(e[0]=n=>a.showBar=n)},null,8,["checked"]),e[4]||(e[4]=s("span",null,"Bar (Top)",-1))]),s("label",N,[i(g,{checked:a.showDotTrail,"onUpdate:checked":e[1]||(e[1]=n=>a.showDotTrail=n)},null,8,["checked"]),e[5]||(e[5]=s("span",null,"Dot Trail",-1))]),s("label",$,[i(g,{checked:a.showBadge,"onUpdate:checked":e[2]||(e[2]=n=>a.showBadge=n)},null,8,["checked"]),e[6]||(e[6]=s("span",null,"Badge (Bottom Left)",-1))]),s("label",L,[i(g,{checked:a.showRing,"onUpdate:checked":e[3]||(e[3]=n=>a.showRing=n)},null,8,["checked"]),e[7]||(e[7]=s("span",null,"Ring (Bottom Right)",-1))])])]),a.showBar?(o(),T(r,{key:0,mode:"bar",orientation:"top"})):c("",!0),a.showDotTrail?(o(),d("div",U,[i(r,{mode:"dot-trail",dots:7,"badge-variant":"success"})])):c("",!0),a.showBadge?(o(),d("div",W,[i(r,{mode:"badge","badge-variant":"info"})])):c("",!0),a.showRing?(o(),d("div",_,[i(r,{mode:"ring","ring-size":48,"ring-variant":"primary"})])):c("",!0),e[33]||(e[33]=f('<div class="mbe4" data-v-2d12e0b8><h2 data-v-2d12e0b8>Bar Mode</h2><p class="mbs2 mbe3" data-v-2d12e0b8> The classic scroll progress bar. Positioned at the top (or bottom) of the viewport, it provides a clear, unobtrusive indication of scroll depth. Perfect for long-form content like articles and documentation. </p><div style="background:var(--ag-background-secondary);padding:var(--ag-space-4);border-radius:var(--ag-radius-md);" data-v-2d12e0b8><h3 style="margin-top:0;font-size:0.875rem;" data-v-2d12e0b8>Props</h3><ul style="margin:0;padding-left:1.5rem;font-size:0.875rem;" data-v-2d12e0b8><li data-v-2d12e0b8><code data-v-2d12e0b8>orientation</code>: &#39;top&#39; or &#39;bottom&#39;</li><li data-v-2d12e0b8><code data-v-2d12e0b8>size</code>: Uses small size for subtle appearance</li></ul></div></div><div class="mbe4" data-v-2d12e0b8><h2 data-v-2d12e0b8>Dot Trail Mode</h2><p class="mbs2 mbe3" data-v-2d12e0b8> A minimalist approach using a trail of dots. As you scroll, dots fill from left to right. Great for presentations, multi-step forms, or when you want a less prominent indicator. </p><div style="background:var(--ag-background-secondary);padding:var(--ag-space-4);border-radius:var(--ag-radius-md);" data-v-2d12e0b8><h3 style="margin-top:0;font-size:0.875rem;" data-v-2d12e0b8>Props</h3><ul style="margin:0;padding-left:1.5rem;font-size:0.875rem;" data-v-2d12e0b8><li data-v-2d12e0b8><code data-v-2d12e0b8>dots</code>: Number of dots to display (default: 5)</li><li data-v-2d12e0b8><code data-v-2d12e0b8>badgeVariant</code>: Color variant for filled dots</li></ul></div></div><div class="mbe4" data-v-2d12e0b8><h2 data-v-2d12e0b8>Badge Mode</h2><p class="mbs2 mbe3" data-v-2d12e0b8> Displays the exact scroll percentage in a badge. Useful when users need precise feedback about their position in the content. Can be positioned anywhere on the page. </p><div style="background:var(--ag-background-secondary);padding:var(--ag-space-4);border-radius:var(--ag-radius-md);" data-v-2d12e0b8><h3 style="margin-top:0;font-size:0.875rem;" data-v-2d12e0b8>Props</h3><ul style="margin:0;padding-left:1.5rem;font-size:0.875rem;" data-v-2d12e0b8><li data-v-2d12e0b8><code data-v-2d12e0b8>badgeVariant</code>: Badge color variant</li><li data-v-2d12e0b8><code data-v-2d12e0b8>precision</code>: Decimal places (0 for integers like &quot;47%&quot;)</li></ul></div></div><div class="mbe4" data-v-2d12e0b8><h2 data-v-2d12e0b8>Ring Mode</h2><p class="mbs2 mbe3" data-v-2d12e0b8> A circular progress ring that fills as you scroll. Often paired with floating action buttons or scroll-to-top functionality. Provides an elegant, space-efficient indicator. </p><div style="background:var(--ag-background-secondary);padding:var(--ag-space-4);border-radius:var(--ag-radius-md);" data-v-2d12e0b8><h3 style="margin-top:0;font-size:0.875rem;" data-v-2d12e0b8>Props</h3><ul style="margin:0;padding-left:1.5rem;font-size:0.875rem;" data-v-2d12e0b8><li data-v-2d12e0b8><code data-v-2d12e0b8>ringSize</code>: Diameter in pixels (default: 32)</li><li data-v-2d12e0b8><code data-v-2d12e0b8>ringStrokeWidth</code>: Thickness of the ring (default: 3)</li><li data-v-2d12e0b8><code data-v-2d12e0b8>ringVariant</code>: Color variant</li></ul></div></div>',4)),s("div",O,[e[12]||(e[12]=s("h2",null,"Bar Size Variants",-1)),e[13]||(e[13]=s("p",{class:"mbs2 mbe3"},"Progress bars support three sizes via the underlying Progress component.",-1)),s("div",G,[s("div",null,[e[10]||(e[10]=s("p",{style:{margin:"0 0 0.5rem 0","font-size":"0.875rem","font-weight":"500"}},"Small (8px) - Default for scroll progress",-1)),i(r,{mode:"bar",orientation:"top",style:{position:"static"}})]),e[11]||(e[11]=s("div",null,[s("p",{style:{margin:"0 0 0.5rem 0","font-size":"0.875rem","font-weight":"500"}},"Medium (12px)"),s("div",{style:{position:"relative"}},[s("ag-scroll-progress",{mode:"bar",orientation:"top",style:{position:"static"}})])],-1))])]),s("div",K,[e[20]||(e[20]=s("h2",null,"Precision Control",-1)),e[21]||(e[21]=s("p",{class:"mbs2 mbe3"},[m("Control decimal places in percentage display with the "),s("code",null,"precision"),m(" prop.")],-1)),s("div",Y,[s("div",j,[i(r,{mode:"badge",precision:0,"badge-variant":"primary",style:{position:"static"}}),e[14]||(e[14]=s("p",{style:{"margin-top":"0.5rem","font-size":"0.875rem"}},"precision={0}",-1)),e[15]||(e[15]=s("p",{style:{margin:"0","font-size":"0.75rem",color:"var(--ag-text-secondary)"}},"Integers (47%)",-1))]),s("div",H,[i(r,{mode:"badge",precision:1,"badge-variant":"success",style:{position:"static"}}),e[16]||(e[16]=s("p",{style:{"margin-top":"0.5rem","font-size":"0.875rem"}},"precision={1}",-1)),e[17]||(e[17]=s("p",{style:{margin:"0","font-size":"0.75rem",color:"var(--ag-text-secondary)"}},"One decimal (47.3%)",-1))]),s("div",J,[i(r,{mode:"badge",precision:2,"badge-variant":"warning",style:{position:"static"}}),e[18]||(e[18]=s("p",{style:{"margin-top":"0.5rem","font-size":"0.875rem"}},"precision={2}",-1)),e[19]||(e[19]=s("p",{style:{margin:"0","font-size":"0.75rem",color:"var(--ag-text-secondary)"}},"Two decimals (47.39%)",-1))])])]),s("div",X,[e[27]||(e[27]=s("h2",null,"Color Variants",-1)),e[28]||(e[28]=s("p",{class:"mbs2 mbe3"},"Both badge and ring modes support color variants.",-1)),e[29]||(e[29]=s("h3",{style:{"font-size":"1rem","margin-bottom":"1rem"}},"Badge Variants",-1)),s("div",Q,[i(r,{mode:"badge","badge-variant":"default",style:{position:"static"}}),i(r,{mode:"badge","badge-variant":"success",style:{position:"static"}}),i(r,{mode:"badge","badge-variant":"warning",style:{position:"static"}}),i(r,{mode:"badge","badge-variant":"danger",style:{position:"static"}}),i(r,{mode:"badge","badge-variant":"info",style:{position:"static"}})]),e[30]||(e[30]=s("h3",{style:{"font-size":"1rem","margin-bottom":"1rem"}},"Ring Variants",-1)),s("div",Z,[s("div",ee,[i(r,{mode:"ring","ring-variant":"primary","ring-size":40,style:{position:"static"}}),e[22]||(e[22]=s("p",{style:{"margin-top":"0.5rem","font-size":"0.875rem"}},"Primary",-1))]),s("div",se,[i(r,{mode:"ring","ring-variant":"success","ring-size":40,style:{position:"static"}}),e[23]||(e[23]=s("p",{style:{"margin-top":"0.5rem","font-size":"0.875rem"}},"Success",-1))]),s("div",ie,[i(r,{mode:"ring","ring-variant":"warning","ring-size":40,style:{position:"static"}}),e[24]||(e[24]=s("p",{style:{"margin-top":"0.5rem","font-size":"0.875rem"}},"Warning",-1))]),s("div",ae,[i(r,{mode:"ring","ring-variant":"danger","ring-size":40,style:{position:"static"}}),e[25]||(e[25]=s("p",{style:{"margin-top":"0.5rem","font-size":"0.875rem"}},"Danger",-1))]),s("div",te,[i(r,{mode:"ring","ring-variant":"info","ring-size":40,style:{position:"static"}}),e[26]||(e[26]=s("p",{style:{"margin-top":"0.5rem","font-size":"0.875rem"}},"Info",-1))])])]),s("div",re,[e[31]||(e[31]=s("h2",null,"Keep Scrolling!",-1)),e[32]||(e[32]=s("p",{class:"mbs2 mbe3"},"Scroll down to see the active progress indicators update in real-time.",-1)),s("div",ne,[(o(),d(C,null,D(30,n=>s("p",{key:n,style:{margin:"0.5rem 0",color:"var(--ag-text-secondary)"}}," Paragraph "+V(n)+": Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",1)),64))])]),e[34]||(e[34]=s("div",{class:"mbe4",style:{"text-align":"center",padding:"var(--ag-space-8) 0"}},[s("h2",null,"🎉 You've reached the end!"),s("p",{style:{color:"var(--ag-text-secondary)"}},"Notice how all active progress indicators show 100%")],-1))])}const le=P(E,[["render",oe],["__scopeId","data-v-2d12e0b8"]]);class k extends A{constructor(){super(),this.showBar=!0,this.showDotTrail=!0,this.showBadge=!0,this.showRing=!0}createRenderRoot(){return this}handleBarToggle(e){this.showBar=e.target.checked}handleDotTrailToggle(e){this.showDotTrail=e.target.checked}handleBadgeToggle(e){this.showBadge=e.target.checked}handleRingToggle(e){this.showRing=e.target.checked}render(){return l`
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
        ${this.showBar?l`<ag-scroll-progress mode="bar" orientation="top"></ag-scroll-progress>`:""}

        ${this.showDotTrail?l`
            <div style="position: fixed; top: 5rem; right: 3%; z-index: 100;">
              <ag-scroll-progress
                mode="dot-trail"
                dots="7"
                badge-variant="success"
              ></ag-scroll-progress>
            </div>
          `:""}

        ${this.showBadge?l`
            <div style="position: fixed; bottom: var(--ag-space-4); left: var(--ag-space-4); z-index: 100;">
              <ag-scroll-progress
                mode="badge"
                badge-variant="info"
              ></ag-scroll-progress>
            </div>
          `:""}

        ${this.showRing?l`
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
            ${Array.from({length:30}).map((e,t)=>l`
                <p style="margin: 0.5rem 0; color: var(--ag-text-secondary);">
                  Paragraph ${t+1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
    `}}y(k,"properties",{showBar:{type:Boolean},showDotTrail:{type:Boolean},showBadge:{type:Boolean},showRing:{type:Boolean}});customElements.define("scroll-progress-lit-examples",k);const de=`<template>
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
`,ge=`
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
`,pe=`
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
`,Re=JSON.parse('{"title":"Scroll Progress","description":"","frontmatter":{},"headers":[],"relativePath":"components/scroll-progress.md","filePath":"components/scroll-progress.md"}'),ce={name:"components/scroll-progress.md"},Ae=Object.assign(ce,{setup(a){return(e,t)=>(o(),d("div",null,[t[1]||(t[1]=s("h1",{id:"scroll-progress",tabindex:"-1"},[m("Scroll Progress "),s("a",{class:"header-anchor",href:"#scroll-progress","aria-label":'Permalink to "Scroll Progress"'},"​")],-1)),i(F),t[2]||(t[2]=s("p",null,"The Scroll Progress component provides visual feedback about how far the user has scrolled through a document or scrollable container. It offers four distinct visual modes to fit different design contexts.",-1)),t[3]||(t[3]=s("h2",{id:"examples",tabindex:"-1"},[m("Examples "),s("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),i(R,{component:"scroll-progress","vue-code":h(de),"lit-code":h(ge),"react-code":h(pe)},{vue:b(()=>[i(le)]),lit:b(()=>[...t[0]||(t[0]=[s("scroll-progress-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),t[4]||(t[4]=f(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The framework examples below <code>import</code> AgnosticUI as an <code>npm</code> package. Alternatively, you can use the <strong>CLI for complete control, AI/LLM visibility, and full code ownership</strong>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> init</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> --framework</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> FRAMEWORK</span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;"> # react, vue, lit, svelte, etc.</span></span>
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
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div>`,22))]))}});export{Re as __pageData,Ae as default};
