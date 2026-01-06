import{c as f,A as T}from"./chunks/AlphaWarning.D199zhtu.js";import{i as E,z as p,a as B,x as h}from"./chunks/property-CemaeiRl.Cea_q1B7.js";import{Z as q,F as A}from"./chunks/FrameworkExample.DHJHO-gg.js";import{s as D}from"./chunks/plugin-vue_export-helper-CHgC5LLL.lGy7RumW.js";import{d as C,c as g,o as m,e as z,r as L,_ as V,C as F,j as t,G as n,F as x,B as P,t as R,a as i,w as k,ae as v,k as o}from"./chunks/framework.CdHt8f9T.js";import{R as I}from"./chunks/rocket.CS3yeVbI.js";import{P as N,A as _}from"./chunks/palette.CsGpIU6f.js";import{M as $}from"./chunks/map-pin.CisERVrm.js";import{C as M,a as j}from"./chunks/circle-x.B4m6-jpv.js";import"./chunks/state-CovhUvdr.DnzyR2fh.js";import"./chunks/if-defined-C8i28hSj.cIUcEGoF.js";/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=f("eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=f("wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]]);var H=Object.defineProperty,c=(a,s,e,b)=>{for(var d=void 0,u=a.length-1,l;u>=0;u--)(l=a[u])&&(d=l(s,e,d)||d);return d&&H(s,e,d),d};const w=class extends B{constructor(){super(),this._targetElement=null,this._handleScroll=()=>{this.visible=window.scrollY>this.scrollThreshold},this.label="Back to Top",this.showLabel=!1,this.icon=!0,this.scrollThreshold=400,this.target="top",this.direction="auto",this.smoothScroll=!0,this.visible=!1,this.size="md",this.shape=""}_getScrollBehavior(){const s=window.matchMedia("(prefers-reduced-motion: reduce)").matches;return this.smoothScroll&&!s?"smooth":"auto"}_getScrollTarget(){if(this._targetElement)return this._targetElement.offsetTop;if(typeof this.target=="string")switch(this.target){case"top":return 0;case"bottom":return document.documentElement.scrollHeight-window.innerHeight;default:{const s=document.getElementById(this.target);if(s)return s.offsetTop;const e=document.querySelector(this.target);return e instanceof HTMLElement?e.offsetTop:(console.warn(`ScrollToButton: Target "${this.target}" not found, scrolling to top`),0)}}return 0}_getDirection(){if(this.direction!=="auto")return this.direction;if(this._targetElement)return this._targetElement.offsetTop<window.scrollY?"up":"down";if(typeof this.target=="string")switch(this.target){case"bottom":return"down";case"top":default:return"up"}return"up"}_scrollToTarget(){const s=this._getScrollTarget(),e=this._getScrollBehavior();window.scrollTo({top:s,behavior:e})}setTargetElement(s){this._targetElement=s}connectedCallback(){super.connectedCallback(),window.addEventListener("scroll",this._handleScroll,{passive:!0}),this._handleScroll()}disconnectedCallback(){window.removeEventListener("scroll",this._handleScroll),super.disconnectedCallback()}_renderDefaultIcon(){return this._getDirection()==="down"?h`
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
      `:h`
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
    `}render(){const s=this.showLabel||!this.icon,e=this.icon&&!s;return h`
      <ag-button
        mode="primary"
        size="${this.size}"
        shape="${this.shape||(e?"circle":"")}"
        @click="${this._scrollToTarget}"
        aria-label="${this.label}"
        part="ag-scrollto-button"
        exportparts="ag-button"
        role="button"
      >
        <div class="button-content" part="ag-button-content">
          ${this.icon?h`
            <span class="ag-icon-wrapper" part="ag-icon-wrapper">
              <slot name="icon">
                ${this._renderDefaultIcon()}
              </slot>
            </span>
          `:""}
          ${s?h`
            <span class="label" part="ag-label">${this.label}</span>
          `:""}
        </div>
      </ag-button>
    `}};w.styles=E`
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
  `;let r=w;c([p({type:String})],r.prototype,"label");c([p({type:Boolean})],r.prototype,"showLabel");c([p({type:Boolean})],r.prototype,"icon");c([p({type:Number})],r.prototype,"scrollThreshold");c([p({type:String})],r.prototype,"target");c([p({type:String})],r.prototype,"direction");c([p({type:Boolean})],r.prototype,"smoothScroll");c([p({type:Boolean,reflect:!0})],r.prototype,"visible");c([p({type:String})],r.prototype,"size");c([p({type:String})],r.prototype,"shape");customElements.get("ag-scroll-to-button")||customElements.define("ag-scroll-to-button",r);const O=C({name:"VueScrollToButton",props:{label:{type:String,default:"Back to Top"},showLabel:{type:Boolean,default:!1},icon:{type:Boolean,default:!0},scrollThreshold:{type:Number,default:400},target:{type:String,default:"top"},direction:{type:String,default:"auto"},smoothScroll:{type:Boolean,default:!0},visible:{type:Boolean,default:!1},size:{type:String,default:"md"},shape:{type:String,default:""}}}),G=["label","showLabel","icon","scrollThreshold","target","direction","smoothScroll","visible","size","shape"],Y={key:0,slot:"icon"};function J(a,s,e,b,d,u){return m(),g("ag-scroll-to-button",{label:a.label,showLabel:a.showLabel,icon:a.icon,scrollThreshold:a.scrollThreshold,target:a.target,direction:a.direction,smoothScroll:a.smoothScroll,visible:a.visible,size:a.size,shape:a.shape},[a.$slots.icon?(m(),g("span",Y,[L(a.$slots,"icon")])):z("",!0)],8,G)}const Q=D(O,[["render",J]]),K=C({name:"ScrollToButtonExamples",components:{VueScrollToButton:Q,Rocket:I}}),Z={class:"example-container"},X={class:"example-section"},tt={class:"example-section"},st={class:"example-section"},et={class:"example-section"},nt={class:"example-section"},it={class:"inline-examples"},at={class:"inline-example"},lt={class:"inline-example"},ot={class:"inline-example"},rt={class:"inline-example"},pt={class:"inline-example"},ct={class:"example-section"},dt={class:"inline-examples"},ht={class:"inline-example"},ut={class:"inline-example"},gt={class:"inline-example"},mt={class:"inline-example"},kt={class:"inline-example"},bt={class:"example-section"};function yt(a,s,e,b,d,u){const l=F("VueScrollToButton"),S=F("Rocket");return m(),g(x,null,[t("section",null,[s[0]||(s[0]=t("h2",null,"Default (Icon Only)",-1)),s[1]||(s[1]=t("p",null,"The most common use case - a circular button with just an icon that appears when scrolling down.",-1)),t("div",Z,[(m(),g(x,null,P(20,y=>t("p",{key:y,class:"example-paragraph"}," Paragraph "+R(y)+": Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. ",1)),64)),n(l,{style:{bottom:"100px"}})])]),t("section",X,[s[2]||(s[2]=t("h2",null,"With Visible Label",-1)),s[3]||(s[3]=t("p",null,"Show both icon and text label for better clarity. The button becomes pill-shaped automatically.",-1)),n(l,{label:"Back to Top",scrollThreshold:200,showLabel:!0})]),t("section",tt,[s[4]||(s[4]=t("h2",null,"Low Scroll Threshold",-1)),s[5]||(s[5]=t("p",null,[i("Control when the button appears by adjusting "),t("code",null,"scrollThreshold"),i(". This one appears after just 100px.")],-1)),n(l,{label:"Quick Access",showLabel:!0,scrollThreshold:100,style:{right:"180px"},shape:"rounded"})]),t("section",st,[s[6]||(s[6]=t("h2",null,"Scroll to Bottom",-1)),s[7]||(s[7]=t("p",null,"Navigate to the end of content. The arrow automatically points down based on the target.",-1)),n(l,{style:{bottom:"160px"},label:"Go to Bottom",target:"bottom",scrollThreshold:400})]),t("section",et,[s[8]||(s[8]=t("h2",null,"Custom Icon with Slot",-1)),s[9]||(s[9]=t("p",null,"Replace the default arrow with any icon using Vue's slot system.",-1)),n(l,{label:"Launch to Top!",style:{bottom:"220px"},scrollThreshold:600},{icon:k(()=>[n(S,{size:20})]),_:1})]),t("section",nt,[s[15]||(s[15]=t("h2",null,"Different Sizes",-1)),s[16]||(s[16]=t("p",null,[i("Available sizes: "),t("code",null,"x-sm"),i(", "),t("code",null,"sm"),i(", "),t("code",null,"md"),i(" (default), "),t("code",null,"lg"),i(", "),t("code",null,"xl")],-1)),t("div",it,[t("div",at,[n(l,{size:"x-sm",style:{position:"static"}}),s[10]||(s[10]=t("span",null,"x-sm",-1))]),t("div",lt,[n(l,{size:"sm",style:{position:"static"}}),s[11]||(s[11]=t("span",null,"sm",-1))]),t("div",ot,[n(l,{size:"md",style:{position:"static"}}),s[12]||(s[12]=t("span",null,"md",-1))]),t("div",rt,[n(l,{size:"lg",style:{position:"static"}}),s[13]||(s[13]=t("span",null,"lg",-1))]),t("div",pt,[n(l,{size:"xl",style:{position:"static"}}),s[14]||(s[14]=t("span",null,"xl",-1))])])]),t("section",ct,[s[22]||(s[22]=t("h2",null,"Different Shapes",-1)),s[23]||(s[23]=t("p",null,[i("Available shapes: "),t("code",null,"circle"),i(" (default), "),t("code",null,"square"),i(", "),t("code",null,"rounded"),i(", "),t("code",null,"rounded-square"),i(", "),t("code",null,"capsule")],-1)),t("div",dt,[t("div",ht,[n(l,{shape:"circle",style:{bottom:"280px"},scrollThreshold:800}),s[17]||(s[17]=t("span",null,"circle",-1))]),t("div",ut,[n(l,{shape:"square",style:{bottom:"340px"},scrollThreshold:1e3}),s[18]||(s[18]=t("span",null,"square",-1))]),t("div",gt,[n(l,{shape:"rounded",style:{bottom:"400px"},scrollThreshold:1200}),s[19]||(s[19]=t("span",null,"rounded",-1))]),t("div",mt,[n(l,{shape:"rounded-square",style:{bottom:"460px"},scrollThreshold:1400}),s[20]||(s[20]=t("span",null,"rounded-square",-1))]),t("div",kt,[n(l,{shape:"capsule",showLabel:!0,label:"Top",style:{bottom:"580px"},scrollThreshold:1800}),s[21]||(s[21]=t("span",null,"capsule",-1))])])]),t("section",bt,[s[24]||(s[24]=t("h2",null,"Custom Styling with CSS Shadow Parts",-1)),s[25]||(s[25]=t("p",null,"Style internal parts without breaking encapsulation using CSS Shadow Parts.",-1)),n(l,{class:"custom-gradient",label:"Styled Button",style:{bottom:"520px"},scrollThreshold:1600,showLabel:!0})])],64)}const Ft=V(K,[["render",yt],["__scopeId","data-v-d66abd47"]]);class xt extends B{createRenderRoot(){return this}render(){return h`
      <style>
        .lit-example-section {
          margin-top: 3rem;
        }

        .lit-example-section h3 {
          margin-bottom: 0.5rem;
        }

        .lit-example-section p {
          margin-bottom: 1rem;
        }

        .lit-example-container {
          min-height: 120vh;
          padding: 1.5rem;
          background: var(--vp-c-bg-soft);
          border: 1px solid var(--vp-c-divider);
          border-radius: 8px;
          position: relative;
        }

        .lit-example-paragraph {
          margin-bottom: 1.5rem;
          line-height: 1.6;
          color: var(--vp-c-text-2);
        }

        .lit-inline-examples {
          display: flex;
          gap: 2rem;
          align-items: flex-end;
          flex-wrap: wrap;
          padding: 2rem;
          background: var(--vp-c-bg-soft);
          border: 1px solid var(--vp-c-divider);
          border-radius: 8px;
        }

        .lit-inline-example {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .lit-inline-example span {
          font-size: 0.875rem;
          font-family: var(--vp-font-family-mono);
          color: var(--vp-c-text-2);
        }

        /* Custom gradient styling example */
        ag-scroll-to-button.custom-gradient::part(ag-button) {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
        }

        ag-scroll-to-button.custom-gradient::part(ag-button):hover {
          box-shadow: 0 6px 16px rgba(102, 126, 234, 0.6);
          transform: translateY(-2px);
        }
      </style>

      <section>
        <h2>Default (Icon Only)</h2>
        <p>The most common use case - a circular button with just an icon that appears when scrolling down.</p>
        <div class="lit-example-container">
          ${Array.from({length:20},(s,e)=>h`
            <p class="lit-example-paragraph">
              Paragraph ${e+1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          `)}
          <ag-scroll-to-button style="bottom: 100px"></ag-scroll-to-button>
        </div>
      </section>

      <section class="lit-example-section">
        <h2>With Visible Label</h2>
        <p>Show both icon and text label for better clarity. The button becomes pill-shaped automatically.</p>
        <ag-scroll-to-button
          label="Back to Top"
          scroll-threshold="200"
          show-label
        ></ag-scroll-to-button>
      </section>

      <section class="lit-example-section">
        <h2>Low Scroll Threshold</h2>
        <p>Control when the button appears by adjusting <code>scroll-threshold</code>. This one appears after just 100px.</p>
        <ag-scroll-to-button
          label="Quick Access"
          show-label
          scroll-threshold="100"
          style="right: 180px"
          shape="rounded"
        ></ag-scroll-to-button>
      </section>

      <section class="lit-example-section">
        <h2>Scroll to Bottom</h2>
        <p>Navigate to the end of content. The arrow automatically points down based on the target.</p>
        <ag-scroll-to-button
          style="bottom: 160px"
          label="Go to Bottom"
          target="bottom"
          scroll-threshold="400"
        ></ag-scroll-to-button>
      </section>

      <section class="lit-example-section">
        <h2>Custom Icon with Slot</h2>
        <p>Replace the default arrow with any icon using slots.</p>
        <ag-scroll-to-button
          label="Launch to Top!"
          style="bottom: 220px"
          scroll-threshold="600"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
          </svg>
        </ag-scroll-to-button>
      </section>

      <section class="lit-example-section">
        <h2>Different Sizes</h2>
        <p>Available sizes: <code>x-sm</code>, <code>sm</code>, <code>md</code> (default), <code>lg</code>, <code>xl</code></p>
        <div class="lit-inline-examples">
          <div class="lit-inline-example">
            <ag-scroll-to-button size="x-sm" style="position: static"></ag-scroll-to-button>
            <span>x-sm</span>
          </div>
          <div class="lit-inline-example">
            <ag-scroll-to-button size="sm" style="position: static"></ag-scroll-to-button>
            <span>sm</span>
          </div>
          <div class="lit-inline-example">
            <ag-scroll-to-button size="md" style="position: static"></ag-scroll-to-button>
            <span>md</span>
          </div>
          <div class="lit-inline-example">
            <ag-scroll-to-button size="lg" style="position: static"></ag-scroll-to-button>
            <span>lg</span>
          </div>
          <div class="lit-inline-example">
            <ag-scroll-to-button size="xl" style="position: static"></ag-scroll-to-button>
            <span>xl</span>
          </div>
        </div>
      </section>

      <section class="lit-example-section">
        <h2>Different Shapes</h2>
        <p>Available shapes: <code>circle</code> (default), <code>square</code>, <code>rounded</code>, <code>rounded-square</code>, <code>capsule</code></p>
        <div class="lit-inline-examples">
          <div class="lit-inline-example">
            <ag-scroll-to-button
              shape="circle"
              style="bottom: 280px"
              scroll-threshold="800"
            ></ag-scroll-to-button>
            <span>circle</span>
          </div>
          <div class="lit-inline-example">
            <ag-scroll-to-button
              shape="square"
              style="bottom: 340px"
              scroll-threshold="1000"
            ></ag-scroll-to-button>
            <span>square</span>
          </div>
          <div class="lit-inline-example">
            <ag-scroll-to-button
              shape="rounded"
              style="bottom: 400px"
              scroll-threshold="1200"
            ></ag-scroll-to-button>
            <span>rounded</span>
          </div>
          <div class="lit-inline-example">
            <ag-scroll-to-button
              shape="rounded-square"
              style="bottom: 460px"
              scroll-threshold="1400"
            ></ag-scroll-to-button>
            <span>rounded-square</span>
          </div>
          <div class="lit-inline-example">
            <ag-scroll-to-button
              shape="capsule"
              show-label
              label="Top"
              style="bottom: 580px"
              scroll-threshold="1800"
            ></ag-scroll-to-button>
            <span>capsule</span>
          </div>
        </div>
      </section>

      <section class="lit-example-section">
        <h2>Custom Styling with CSS Shadow Parts</h2>
        <p>Style internal parts without breaking encapsulation using CSS Shadow Parts.</p>
        <ag-scroll-to-button
          class="custom-gradient"
          label="Styled Button"
          style="bottom: 520px"
          scroll-threshold="1600"
          show-label
        ></ag-scroll-to-button>
      </section>
    `}}customElements.define("scroll-to-button-lit-examples",xt);const vt=`<template>
  <section>
    <h2>Default (Icon Only)</h2>
    <p>The most common use case - a circular button with just an icon that appears when scrolling down.</p>
    <div class="example-container">
      <p
        v-for="i in 20"
        :key="i"
        class="example-paragraph"
      >
        Paragraph {{ i }}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
      </p>
      <VueScrollToButton :style="{bottom: '100px'}" />
    </div>
  </section>

  <section class="example-section">
    <h2>With Visible Label</h2>
    <p>Show both icon and text label for better clarity. The button becomes pill-shaped automatically.</p>
    <VueScrollToButton
      label="Back to Top"
      :scrollThreshold="200"
      :showLabel="true"
    />
  </section>

  <section class="example-section">
    <h2>Low Scroll Threshold</h2>
    <p>Control when the button appears by adjusting <code>scrollThreshold</code>. This one appears after just 100px.</p>
    <VueScrollToButton
      label="Quick Access"
      :showLabel="true"
      :scrollThreshold="100"
      :style="{right: '180px'}"
      shape="rounded"
    />
  </section>

  <section class="example-section">
    <h2>Scroll to Bottom</h2>
    <p>Navigate to the end of content. The arrow automatically points down based on the target.</p>
    <VueScrollToButton
      :style="{bottom: '160px'}"
      label="Go to Bottom"
      target="bottom"
      :scrollThreshold="400"
    />
  </section>

  <section class="example-section">
    <h2>Custom Icon with Slot</h2>
    <p>Replace the default arrow with any icon using Vue's slot system.</p>
    <VueScrollToButton
      label="Launch to Top!"
      :style="{bottom: '220px'}"
      :scrollThreshold="600"
    >
      <template #icon>
        <Rocket :size="20" />
      </template>
    </VueScrollToButton>
  </section>

  <section class="example-section">
    <h2>Different Sizes</h2>
    <p>Available sizes: <code>x-sm</code>, <code>sm</code>, <code>md</code> (default), <code>lg</code>, <code>xl</code></p>
    <div class="inline-examples">
      <div class="inline-example">
        <VueScrollToButton
          size="x-sm"
          style="position: static;"
        />
        <span>x-sm</span>
      </div>
      <div class="inline-example">
        <VueScrollToButton
          size="sm"
          style="position: static;"
        />
        <span>sm</span>
      </div>
      <div class="inline-example">
        <VueScrollToButton
          size="md"
          style="position: static;"
        />
        <span>md</span>
      </div>
      <div class="inline-example">
        <VueScrollToButton
          size="lg"
          style="position: static;"
        />
        <span>lg</span>
      </div>
      <div class="inline-example">
        <VueScrollToButton
          size="xl"
          style="position: static;"
        />
        <span>xl</span>
      </div>
    </div>
  </section>

  <section class="example-section">
    <h2>Different Shapes</h2>
    <p>Available shapes: <code>circle</code> (default), <code>square</code>, <code>rounded</code>, <code>rounded-square</code>, <code>capsule</code></p>
    <div class="inline-examples">
      <div class="inline-example">
        <VueScrollToButton
          shape="circle"
          :style="{bottom: '280px'}"
          :scrollThreshold="800"
        />
        <span>circle</span>
      </div>
      <div class="inline-example">
        <VueScrollToButton
          shape="square"
          :style="{bottom: '340px'}"
          :scrollThreshold="1000"
        />
        <span>square</span>
      </div>
      <div class="inline-example">
        <VueScrollToButton
          shape="rounded"
          :style="{bottom: '400px'}"
          :scrollThreshold="1200"
        />
        <span>rounded</span>
      </div>
      <div class="inline-example">
        <VueScrollToButton
          shape="rounded-square"
          :style="{bottom: '460px'}"
          :scrollThreshold="1400"
        />
        <span>rounded-square</span>
      </div>
      <div class="inline-example">
        <VueScrollToButton
          shape="capsule"
          :showLabel="true"
          label="Top"
          :style="{bottom: '580px'}"
          :scrollThreshold="1800"
        />
        <span>capsule</span>
      </div>
    </div>
  </section>

  <section class="example-section">
    <h2>Custom Styling with CSS Shadow Parts</h2>
    <p>Style internal parts without breaking encapsulation using CSS Shadow Parts.</p>
    <VueScrollToButton
      class="custom-gradient"
      label="Styled Button"
      :style="{bottom: '520px'}"
      :scrollThreshold="1600"
      :showLabel="true"
    />
  </section>

</template>

<script lang="ts">
import { defineComponent } from "vue";
import { VueScrollToButton } from "agnosticui-core/scroll-to-button/vue";
import { Rocket } from "lucide-vue-next";

export default defineComponent({
  name: "ScrollToButtonExamples",
  components: {
    VueScrollToButton,
    Rocket,
  },
});
<\/script>

<style scoped>
.example-section {
  margin-top: 3rem;
}

.example-section h3 {
  margin-bottom: 0.5rem;
}

.example-section p {
  margin-bottom: 1rem;
}

.example-container {
  min-height: 120vh;
  padding: 1.5rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  position: relative;
}

.example-paragraph {
  margin-bottom: 1.5rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

.inline-examples {
  display: flex;
  gap: 2rem;
  align-items: flex-end;
  flex-wrap: wrap;
  padding: 2rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
}

.inline-example {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.inline-example span {
  font-size: 0.875rem;
  font-family: var(--vp-font-family-mono);
  color: var(--vp-c-text-2);
}
</style>

<style>
/* Custom gradient styling example - must be global to target shadow parts */
ag-scroll-to-button.custom-gradient::part(ag-button) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

ag-scroll-to-button.custom-gradient::part(ag-button):hover {
  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.6);
  transform: translateY(-2px);
}
</style>
`,ft=`
import { LitElement, html, css } from 'lit';
import 'agnosticui-core/scroll-to-button';

export class ScrollToButtonLitExamples extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html\`
      <style>
        .lit-example-section {
          margin-top: 3rem;
        }

        .lit-example-section h3 {
          margin-bottom: 0.5rem;
        }

        .lit-example-section p {
          margin-bottom: 1rem;
        }

        .lit-example-container {
          min-height: 120vh;
          padding: 1.5rem;
          background: var(--vp-c-bg-soft);
          border: 1px solid var(--vp-c-divider);
          border-radius: 8px;
          position: relative;
        }

        .lit-example-paragraph {
          margin-bottom: 1.5rem;
          line-height: 1.6;
          color: var(--vp-c-text-2);
        }

        .lit-inline-examples {
          display: flex;
          gap: 2rem;
          align-items: flex-end;
          flex-wrap: wrap;
          padding: 2rem;
          background: var(--vp-c-bg-soft);
          border: 1px solid var(--vp-c-divider);
          border-radius: 8px;
        }

        .lit-inline-example {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .lit-inline-example span {
          font-size: 0.875rem;
          font-family: var(--vp-font-family-mono);
          color: var(--vp-c-text-2);
        }

        /* Custom gradient styling example */
        ag-scroll-to-button.custom-gradient::part(ag-button) {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
        }

        ag-scroll-to-button.custom-gradient::part(ag-button):hover {
          box-shadow: 0 6px 16px rgba(102, 126, 234, 0.6);
          transform: translateY(-2px);
        }
      </style>

      <section>
        <h2>Default (Icon Only)</h2>
        <p>The most common use case - a circular button with just an icon that appears when scrolling down.</p>
        <div class="lit-example-container">
          \${Array.from({ length: 20 }, (_, i) => html\`
            <p class="lit-example-paragraph">
              Paragraph \${i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          \`)}
          <ag-scroll-to-button style="bottom: 100px"></ag-scroll-to-button>
        </div>
      </section>

      <section class="lit-example-section">
        <h2>With Visible Label</h2>
        <p>Show both icon and text label for better clarity. The button becomes pill-shaped automatically.</p>
        <ag-scroll-to-button
          label="Back to Top"
          scroll-threshold="200"
          show-label
        ></ag-scroll-to-button>
      </section>

      <section class="lit-example-section">
        <h2>Low Scroll Threshold</h2>
        <p>Control when the button appears by adjusting <code>scroll-threshold</code>. This one appears after just 100px.</p>
        <ag-scroll-to-button
          label="Quick Access"
          show-label
          scroll-threshold="100"
          style="right: 180px"
          shape="rounded"
        ></ag-scroll-to-button>
      </section>

      <section class="lit-example-section">
        <h2>Scroll to Bottom</h2>
        <p>Navigate to the end of content. The arrow automatically points down based on the target.</p>
        <ag-scroll-to-button
          style="bottom: 160px"
          label="Go to Bottom"
          target="bottom"
          scroll-threshold="400"
        ></ag-scroll-to-button>
      </section>

      <section class="lit-example-section">
        <h2>Custom Icon with Slot</h2>
        <p>Replace the default arrow with any icon using slots.</p>
        <ag-scroll-to-button
          label="Launch to Top!"
          style="bottom: 220px"
          scroll-threshold="600"
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
          </svg>
        </ag-scroll-to-button>
      </section>

      <section class="lit-example-section">
        <h2>Different Sizes</h2>
        <p>Available sizes: <code>x-sm</code>, <code>sm</code>, <code>md</code> (default), <code>lg</code>, <code>xl</code></p>
        <div class="lit-inline-examples">
          <div class="lit-inline-example">
            <ag-scroll-to-button size="x-sm" style="position: static"></ag-scroll-to-button>
            <span>x-sm</span>
          </div>
          <div class="lit-inline-example">
            <ag-scroll-to-button size="sm" style="position: static"></ag-scroll-to-button>
            <span>sm</span>
          </div>
          <div class="lit-inline-example">
            <ag-scroll-to-button size="md" style="position: static"></ag-scroll-to-button>
            <span>md</span>
          </div>
          <div class="lit-inline-example">
            <ag-scroll-to-button size="lg" style="position: static"></ag-scroll-to-button>
            <span>lg</span>
          </div>
          <div class="lit-inline-example">
            <ag-scroll-to-button size="xl" style="position: static"></ag-scroll-to-button>
            <span>xl</span>
          </div>
        </div>
      </section>

      <section class="lit-example-section">
        <h2>Different Shapes</h2>
        <p>Available shapes: <code>circle</code> (default), <code>square</code>, <code>rounded</code>, <code>rounded-square</code>, <code>capsule</code></p>
        <div class="lit-inline-examples">
          <div class="lit-inline-example">
            <ag-scroll-to-button
              shape="circle"
              style="bottom: 280px"
              scroll-threshold="800"
            ></ag-scroll-to-button>
            <span>circle</span>
          </div>
          <div class="lit-inline-example">
            <ag-scroll-to-button
              shape="square"
              style="bottom: 340px"
              scroll-threshold="1000"
            ></ag-scroll-to-button>
            <span>square</span>
          </div>
          <div class="lit-inline-example">
            <ag-scroll-to-button
              shape="rounded"
              style="bottom: 400px"
              scroll-threshold="1200"
            ></ag-scroll-to-button>
            <span>rounded</span>
          </div>
          <div class="lit-inline-example">
            <ag-scroll-to-button
              shape="rounded-square"
              style="bottom: 460px"
              scroll-threshold="1400"
            ></ag-scroll-to-button>
            <span>rounded-square</span>
          </div>
          <div class="lit-inline-example">
            <ag-scroll-to-button
              shape="capsule"
              show-label
              label="Top"
              style="bottom: 580px"
              scroll-threshold="1800"
            ></ag-scroll-to-button>
            <span>capsule</span>
          </div>
        </div>
      </section>

      <section class="lit-example-section">
        <h2>Custom Styling with CSS Shadow Parts</h2>
        <p>Style internal parts without breaking encapsulation using CSS Shadow Parts.</p>
        <ag-scroll-to-button
          class="custom-gradient"
          label="Styled Button"
          style="bottom: 520px"
          scroll-threshold="1600"
          show-label
        ></ag-scroll-to-button>
      </section>
    \`;
  }
}

customElements.define('scroll-to-button-lit-examples', ScrollToButtonLitExamples);
`,Bt=`
import { ReactScrollToButton } from "agnosticui-core/scroll-to-button/react";

export default function ScrollToButtonReactExamples() {
  return (
    <section>
      <style>{\`
        .react-example-section {
          margin-top: 3rem;
        }
        .react-example-section h3 {
          margin-bottom: 0.5rem;
        }
        .react-example-section p {
          margin-bottom: 1rem;
        }
        .react-example-container {
          min-height: 120vh;
          padding: 1.5rem;
          background: var(--vp-c-bg-soft);
          border: 1px solid var(--vp-c-divider);
          border-radius: 8px;
          position: relative;
        }
        .react-example-paragraph {
          margin-bottom: 1.5rem;
          line-height: 1.6;
          color: var(--vp-c-text-2);
        }
        .react-inline-examples {
          display: flex;
          gap: 2rem;
          align-items: flex-end;
          flex-wrap: wrap;
          padding: 2rem;
          background: var(--vp-c-bg-soft);
          border: 1px solid var(--vp-c-divider);
          border-radius: 8px;
        }
        .react-inline-example {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }
        .react-inline-example span {
          font-size: 0.875rem;
          font-family: var(--vp-font-family-mono);
          color: var(--vp-c-text-2);
        }
        /* Custom gradient styling example */
        ag-scroll-to-button.custom-gradient::part(ag-button) {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
        }
        ag-scroll-to-button.custom-gradient::part(ag-button):hover {
          box-shadow: 0 6px 16px rgba(102, 126, 234, 0.6);
          transform: translateY(-2px);
        }
      \`}</style>
      
      <h2>Default (Icon Only)</h2>
      <p>The most common use case - a circular button with just an icon that appears when scrolling down.</p>
      <div className="react-example-container">
        {Array.from({ length: 20 }).map((_, i) => (
          <p key={i} className="react-example-paragraph">
            Paragraph {i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        ))}
        <ReactScrollToButton style={{ bottom: "100px" }} />
      </div>

      <section className="react-example-section">
        <h2>With Visible Label</h2>
        <p>Show both icon and text label for better clarity. The button becomes pill-shaped automatically.</p>
        <ReactScrollToButton
          label="Back to Top"
          scrollThreshold={200}
          showLabel={true}
        />
      </section>

      <section className="react-example-section">
        <h2>Low Scroll Threshold</h2>
        <p>Control when the button appears by adjusting <code>scrollThreshold</code>. This one appears after just 100px.</p>
        <ReactScrollToButton
          label="Quick Access"
          showLabel={true}
          scrollThreshold={100}
          style={{ right: "180px" }}
          shape="rounded"
        />
      </section>

      <section className="react-example-section">
        <h2>Scroll to Bottom</h2>
        <p>Navigate to the end of content. The arrow automatically points down based on the target.</p>
        <ReactScrollToButton
          style={{ bottom: "160px" }}
          label="Go to Bottom"
          target="bottom"
          scrollThreshold={400}
        />
      </section>

      <section className="react-example-section">
        <h2>Custom Icon with Slot</h2>
        <p>Replace the default arrow with any icon using slots.</p>
        <ReactScrollToButton
          label="Launch to Top!"
          style={{ bottom: "220px" }}
          scrollThreshold={600}
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
          </svg>
        </ReactScrollToButton>
      </section>

      <section className="react-example-section">
        <h2>Different Sizes</h2>
        <p>Available sizes: <code>x-sm</code>, <code>sm</code>, <code>md</code> (default), <code>lg</code>, <code>xl</code></p>
        <div className="react-inline-examples">
          <div className="react-inline-example">
            <ReactScrollToButton size="x-sm" style={{ position: "static" }} />
            <span>x-sm</span>
          </div>
          <div className="react-inline-example">
            <ReactScrollToButton size="sm" style={{ position: "static" }} />
            <span>sm</span>
          </div>
          <div className="react-inline-example">
            <ReactScrollToButton size="md" style={{ position: "static" }} />
            <span>md</span>
          </div>
          <div className="react-inline-example">
            <ReactScrollToButton size="lg" style={{ position: "static" }} />
            <span>lg</span>
          </div>
          <div className="react-inline-example">
            <ReactScrollToButton size="xl" style={{ position: "static" }} />
            <span>xl</span>
          </div>
        </div>
      </section>

      <section className="react-example-section">
        <h2>Different Shapes</h2>
        <p>Available shapes: <code>circle</code> (default), <code>square</code>, <code>rounded</code>, <code>rounded-square</code>, <code>capsule</code></p>
        <div className="react-inline-examples">
          <div className="react-inline-example">
            <ReactScrollToButton
              shape="circle"
              style={{ bottom: "280px" }}
              scrollThreshold={800}
            />
            <span>circle</span>
          </div>
          <div className="react-inline-example">
            <ReactScrollToButton
              shape="square"
              style={{ bottom: "340px" }}
              scrollThreshold={1000}
            />
            <span>square</span>
          </div>
          <div className="react-inline-example">
            <ReactScrollToButton
              shape="rounded"
              style={{ bottom: "400px" }}
              scrollThreshold={1200}
            />
            <span>rounded</span>
          </div>
          <div className="react-inline-example">
            <ReactScrollToButton
              shape="rounded-square"
              style={{ bottom: "460px" }}
              scrollThreshold={1400}
            />
            <span>rounded-square</span>
          </div>
          <div className="react-inline-example">
            <ReactScrollToButton
              shape="capsule"
              showLabel={true}
              label="Top"
              style={{ bottom: "580px" }}
              scrollThreshold={1800}
            />
            <span>capsule</span>
          </div>
        </div>
      </section>

      <section className="react-example-section">
        <h2>Custom Styling with CSS Shadow Parts</h2>
        <p>Style internal parts without breaking encapsulation using CSS Shadow Parts.</p>
        <ReactScrollToButton
          className="custom-gradient"
          label="Styled Button"
          style={{ bottom: "520px" }}
          scrollThreshold={1600}
          showLabel={true}
        />
      </section>
    </section>
  );
}
`,Ct={style:{display:"flex","flex-direction":"column",gap:"0.75rem",margin:"1.5rem 0"}},wt={style:{display:"flex","align-items":"center",gap:"0.5rem"}},St={style:{display:"flex","align-items":"center",gap:"0.5rem"}},Tt={style:{display:"flex","align-items":"center",gap:"0.5rem"}},Et={style:{display:"flex","align-items":"center",gap:"0.5rem"}},qt={style:{display:"flex","align-items":"center",gap:"0.5rem"}},At={style:{display:"flex","align-items":"center",gap:"0.5rem"}},Dt={style:{display:"flex","flex-direction":"column",gap:"1rem",margin:"1.5rem 0"}},zt={style:{display:"flex","align-items":"center",gap:"0.5rem","margin-bottom":"0.5rem"}},Lt={style:{display:"flex","align-items":"center",gap:"0.5rem","margin-bottom":"0.5rem"}},Gt=JSON.parse('{"title":"ScrollToButton","description":"","frontmatter":{},"headers":[],"relativePath":"components/scroll-to-button.md","filePath":"components/scroll-to-button.md"}'),Vt={name:"components/scroll-to-button.md"},Yt=Object.assign(Vt,{setup(a){return(s,e)=>(m(),g("div",null,[e[19]||(e[19]=t("h1",{id:"scrolltobutton",tabindex:"-1"},[i("ScrollToButton "),t("a",{class:"header-anchor",href:"#scrolltobutton","aria-label":'Permalink to "ScrollToButton"'},"​")],-1)),n(T),e[20]||(e[20]=v('<p>A floating action button that appears when scrolling, allowing users to quickly navigate to different parts of the page. Perfect for long-form content, documentation sites, and single-page applications.</p><div class="tip custom-block"><p class="custom-block-title">Interactive Examples</p><p>The examples below show multiple scroll buttons to demonstrate different features. In real applications, <a href="https://www.nngroup.com/articles/back-to-top/" target="_blank" rel="noreferrer">use only one scroll button per page</a> to avoid confusion—multiple buttons can overwhelm users and create unclear navigation patterns.</p></div><h2 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-label="Permalink to &quot;Features&quot;">​</a></h2>',3)),t("div",Ct,[t("div",wt,[n(o(U),{size:20,style:{color:"#3b82f6","flex-shrink":"0"}}),e[0]||(e[0]=t("strong",null,"Smart Visibility",-1)),e[1]||(e[1]=i(" - Automatically appears/disappears based on scroll position ",-1))]),t("div",St,[n(o(q),{size:20,style:{color:"#eab308","flex-shrink":"0"}}),e[2]||(e[2]=t("strong",null,"Smooth Scrolling",-1)),e[3]||(e[3]=i(" - Built-in smooth scroll with ",-1)),e[4]||(e[4]=t("code",null,"prefers-reduced-motion",-1)),e[5]||(e[5]=i(" support ",-1))]),t("div",Tt,[n(o(N),{size:20,style:{color:"#a855f7","flex-shrink":"0"}}),e[6]||(e[6]=t("strong",null,"Highly Customizable",-1)),e[7]||(e[7]=i(" - Multiple sizes, shapes, and CSS Shadow Parts for styling ",-1))]),t("div",Et,[n(o(_),{size:20,style:{color:"#10b981","flex-shrink":"0"}}),e[8]||(e[8]=t("strong",null,"Accessible",-1)),e[9]||(e[9]=i(" - Proper ARIA labels and keyboard navigation ",-1))]),t("div",qt,[n(o($),{size:20,style:{color:"#ef4444","flex-shrink":"0"}}),e[10]||(e[10]=t("strong",null,"Flexible Targets",-1)),e[11]||(e[11]=i(" - Scroll to top, bottom, or specific page sections ",-1))]),t("div",At,[n(o(W),{size:20,style:{color:"#6b7280","flex-shrink":"0"}}),e[12]||(e[12]=t("strong",null,"Framework Agnostic",-1)),e[13]||(e[13]=i(" - Works with Vue, React, and vanilla JavaScript ",-1))])]),e[21]||(e[21]=t("h2",{id:"when-to-use",tabindex:"-1"},[i("When to Use "),t("a",{class:"header-anchor",href:"#when-to-use","aria-label":'Permalink to "When to Use"'},"​")],-1)),t("div",Dt,[t("div",null,[t("div",zt,[n(o(M),{size:20,style:{color:"#10b981"}}),e[14]||(e[14]=t("strong",null,"Good for:",-1))]),e[15]||(e[15]=t("ul",{style:{"margin-left":"1.75rem"}},[t("li",null,"Long articles or documentation pages"),t("li",null,"Single-page applications with multiple sections"),t("li",null,"Chat interfaces (scroll to latest message)"),t("li",null,"Comment sections (jump to end)"),t("li",null,"Tables of contents or navigation aids")],-1))]),t("div",null,[t("div",Lt,[n(o(j),{size:20,style:{color:"#ef4444"}}),e[16]||(e[16]=t("strong",null,"Avoid when:",-1))]),e[17]||(e[17]=t("ul",{style:{"margin-left":"1.75rem"}},[t("li",null,"Content is short and fits on one screen"),t("li",null,"The page already has persistent navigation"),t("li",null,"Users need to focus on sequential reading without jumping")],-1))])]),e[22]||(e[22]=t("h2",{id:"examples",tabindex:"-1"},[i("Examples "),t("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),n(A,{component:"scroll-to-button","vue-code":o(vt),"lit-code":o(ft),"react-code":o(Bt)},{vue:k(()=>[n(Ft)]),lit:k(()=>[...e[18]||(e[18]=[t("scroll-to-button-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),e[23]||(e[23]=v(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The framework examples below <code>import</code> AgnosticUI as an <code>npm</code> package. Alternatively, you can use the <strong>CLI for complete control, AI/LLM visibility, and full code ownership</strong>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> init</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> --framework</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> FRAMEWORK</span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;"> # react, vue, lit, svelte, etc.</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> add</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ScrollToButton</span></span></code></pre></div><p>The CLI copies source code directly into your project, giving you full visibility and control. After running <code>npx ag add</code>, you&#39;ll receive exact import instructions.</p></div><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><table class="ag-table ag-table--striped"><thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>label</code></td><td><code>string</code></td><td><code>&#39;Back to Top&#39;</code></td><td>Accessible label for the button (always used for <code>aria-label</code>)</td></tr><tr><td><code>showLabel</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Whether to display the label text alongside the icon</td></tr><tr><td><code>icon</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Show/hide the default icon. If <code>false</code>, label is shown as fallback</td></tr><tr><td><code>scrollThreshold</code></td><td><code>number</code></td><td><code>400</code></td><td>Scroll position (in pixels) before the button becomes visible</td></tr><tr><td><code>target</code></td><td><code>string</code></td><td><code>&#39;top&#39;</code></td><td>Scroll target: <code>&#39;top&#39;</code>, <code>&#39;bottom&#39;</code>, or element ID/selector (e.g., <code>&#39;section-3&#39;</code>, <code>&#39;.my-section&#39;</code>)</td></tr><tr><td><code>direction</code></td><td><code>&#39;up&#39; | &#39;down&#39; | &#39;auto&#39;</code></td><td><code>&#39;auto&#39;</code></td><td>Arrow icon direction. <code>&#39;auto&#39;</code> detects based on target</td></tr><tr><td><code>smoothScroll</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Enable smooth scrolling animation (respects <code>prefers-reduced-motion</code>)</td></tr><tr><td><code>size</code></td><td><code>&#39;x-sm&#39; | &#39;sm&#39; | &#39;md&#39; | &#39;lg&#39; | &#39;xl&#39;</code></td><td><code>&#39;md&#39;</code></td><td>Button size</td></tr><tr><td><code>shape</code></td><td><code>&#39;capsule&#39; | &#39;rounded&#39; | &#39;circle&#39; | &#39;square&#39; | &#39;rounded-square&#39; | &#39;&#39;</code></td><td><code>&#39;&#39;</code></td><td>Button shape (empty string uses default)</td></tr><tr><td><code>visible</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Manually control visibility (typically managed internally by scroll position)</td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h2><table class="ag-table ag-table--striped"><thead><tr><th>Slot</th><th>Description</th></tr></thead><tbody><tr><td><code>icon</code></td><td>Custom icon content. Overrides the default arrow icon when provided</td></tr></tbody></table><p><strong>Vue Example:</strong></p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueScrollToButton</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;template #icon&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;svg&gt;&lt;!-- custom icon --&gt;&lt;/svg&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/template&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueScrollToButton</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div><p><strong>React Example:</strong></p><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactScrollToButton</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">svg</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> slot</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;icon&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">{</span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* custom icon */</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">svg</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactScrollToButton</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div><h2 id="css-shadow-parts" tabindex="-1">CSS Shadow Parts <a class="header-anchor" href="#css-shadow-parts" aria-label="Permalink to &quot;CSS Shadow Parts&quot;">​</a></h2><p>Style internal elements without breaking encapsulation:</p><table class="ag-table ag-table--striped"><thead><tr><th>Part</th><th>Description</th></tr></thead><tbody><tr><td><code>ag-scrollto-button</code></td><td>The button wrapper element</td></tr><tr><td><code>ag-button</code></td><td>The inner <code>ag-button</code> element (exported from nested component)</td></tr><tr><td><code>ag-button-content</code></td><td>The flex container holding icon and label</td></tr><tr><td><code>ag-icon-wrapper</code></td><td>The wrapper around the icon slot</td></tr><tr><td><code>ag-label</code></td><td>The label text span element</td></tr></tbody></table><p><strong>Example - Custom Gradient:</strong></p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-scroll-to-button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  background</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">linear-gradient</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">135</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">deg</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">#667eea</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> 0</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">%</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">#764ba2</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> 100</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">%</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  border</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">none</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  box-shadow</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> 4</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> 12</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> rgba</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">102</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">126</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">234</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0.4</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div><p><strong>Example - Icon Positioning:</strong></p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* Icon on the right */</span></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-scroll-to-button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-button-content</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  flex-direction</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">row-reverse</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* Icon above label (vertical) */</span></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-scroll-to-button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-button-content</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  flex-direction</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">column</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div><h2 id="advanced-examples" tabindex="-1">Advanced Examples <a class="header-anchor" href="#advanced-examples" aria-label="Permalink to &quot;Advanced Examples&quot;">​</a></h2><h3 id="jump-to-specific-section" tabindex="-1">Jump to Specific Section <a class="header-anchor" href="#jump-to-specific-section" aria-label="Permalink to &quot;Jump to Specific Section&quot;">​</a></h3><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueScrollToButton</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Jump to Comments&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  target</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;comments-section&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  :</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">scrollThreshold</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">300</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">/&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;!-- Somewhere in your page --&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;section id=&quot;comments-section&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;!-- Comments content --&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/section&gt;</span></span></code></pre></div><h3 id="chat-interface-scroll-to-bottom" tabindex="-1">Chat Interface (Scroll to Bottom) <a class="header-anchor" href="#chat-interface-scroll-to-bottom" aria-label="Permalink to &quot;Chat Interface (Scroll to Bottom)&quot;">​</a></h3><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueScrollToButton</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Latest Messages&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  target</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;bottom&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  direction</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;down&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  :</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">scrollThreshold</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">200</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">/&gt;</span></span></code></pre></div><h3 id="programmatic-target-lit-react" tabindex="-1">Programmatic Target (Lit/React) <a class="header-anchor" href="#programmatic-target-lit-react" aria-label="Permalink to &quot;Programmatic Target (Lit/React)&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">// Get reference to the component</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> button</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> document.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">querySelector</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;ag-scroll-to-button&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> targetElement</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> document.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">querySelector</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;.my-dynamic-section&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">// Set target programmatically</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">button.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">setTargetElement</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(targetElement);</span></span></code></pre></div><h2 id="accessibility" tabindex="-1">Accessibility <a class="header-anchor" href="#accessibility" aria-label="Permalink to &quot;Accessibility&quot;">​</a></h2><p>The ScrollToButton component follows accessibility best practices:</p><ul><li><strong>ARIA Labels</strong>: Always includes <code>aria-label</code> with the <code>label</code> prop value for screen readers</li><li><strong>Keyboard Navigation</strong>: Fully keyboard accessible with standard button interactions</li><li><strong>Focus Management</strong>: Visible focus indicators for keyboard users</li><li><strong>Motion Sensitivity</strong>: Respects <code>prefers-reduced-motion</code> setting - disables smooth scroll when motion is reduced</li><li><strong>Touch Targets</strong>: Minimum 44×44px touch target size for mobile accessibility</li><li><strong>Semantic HTML</strong>: Uses proper <code>role=&quot;button&quot;</code> and button semantics</li><li><strong>Screen Reader Friendly</strong>: Hidden decorative icons with <code>aria-hidden=&quot;true&quot;</code></li></ul><h3 id="best-practices" tabindex="-1">Best Practices <a class="header-anchor" href="#best-practices" aria-label="Permalink to &quot;Best Practices&quot;">​</a></h3><ol><li><p><strong>Always provide descriptive labels</strong>: Even if not showing the label visually, the <code>label</code> prop is used for <code>aria-label</code></p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueScrollToButton</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Return to page top&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span></code></pre></div></li><li><p><strong>Consider showing labels</strong>: For users with cognitive disabilities, visible text labels are clearer than icon-only buttons</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueScrollToButton</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Back to Top&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> :</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">showLabel</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">true</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span></code></pre></div></li><li><p><strong>Don&#39;t rely solely on color</strong>: If using custom styling, ensure sufficient contrast</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-scroll-to-button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">  /* Ensure 4.5:1 contrast ratio minimum */</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  background</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">#0066cc</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  color</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">#ffffff</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div></li><li><p><strong>Test with keyboard</strong>: Ensure the button is reachable and activatable with Tab and Enter/Space keys</p></li><li><p><strong>Position consistently</strong>: Keep the button in the same location across pages to build user familiarity</p></li></ol><h2 id="design-tokens" tabindex="-1">Design Tokens <a class="header-anchor" href="#design-tokens" aria-label="Permalink to &quot;Design Tokens&quot;">​</a></h2><p>The component uses AgnosticUI design tokens for consistency:</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">:host</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">  /* Spacing */</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">  --ag-space-8</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">2</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">rem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">; </span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* Default position offset */</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">  --ag-space-2</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0.5</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">rem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">; </span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* Icon/label gap */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">  /* Motion */</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">  --ag-motion-slow</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0.4</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">s</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">; </span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* Fade in/out duration */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">  /* Z-index */</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">  --ag-z-index-sticky</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">900</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">; </span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* Stacking context */</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div><p>Override these in your global CSS or via CSS custom properties:</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-scroll-to-button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">  --ag-motion-slow</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0.2</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">s</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">; </span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* Faster transitions */</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div><h2 id="troubleshooting" tabindex="-1">Troubleshooting <a class="header-anchor" href="#troubleshooting" aria-label="Permalink to &quot;Troubleshooting&quot;">​</a></h2><p><strong>Button doesn&#39;t appear:</strong></p><ul><li>Check that page content is tall enough to exceed <code>scrollThreshold</code></li><li>Verify the component is not hidden by CSS</li><li>Ensure z-index is high enough (<code>--ag-z-index-sticky: 900</code> by default)</li></ul><p><strong>Smooth scroll doesn&#39;t work:</strong></p><ul><li>Check browser support for <code>scroll-behavior: smooth</code></li><li>Verify <code>smoothScroll</code> prop is <code>true</code></li><li>Check if user has <code>prefers-reduced-motion</code> enabled</li></ul><p><strong>Custom icon not showing:</strong></p><ul><li>Ensure slot content has the <code>slot=&quot;icon&quot;</code> attribute (Lit/React) or uses <code>&lt;template #icon&gt;</code> (Vue)</li><li>Verify the icon has appropriate size styling</li></ul><p><strong>Button appears too early/late:</strong></p><ul><li>Adjust the <code>scrollThreshold</code> prop (in pixels)</li><li>Default is <code>400</code>, try <code>200</code> for earlier or <code>600</code> for later</li></ul>`,43))]))}});export{Gt as __pageData,Yt as default};
