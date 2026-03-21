import{A as v}from"./chunks/AlphaWarning.CKFYAqLS.js";import{i as E,z as k,a as w,x as C}from"./chunks/property-CemaeiRl.Cea_q1B7.js";import{i as y}from"./chunks/Tooltip.BZ_QxwKK.js";import{r as B}from"./chunks/motion.styles.DXtlED6G.js";import{d as T,p as R,c as F,o as m,r as A,K as S,G as i,w as a,k as s,a as p,j as d,ag as D}from"./chunks/framework.DmF2n0Fc.js";import{v as h}from"./chunks/VueButton.vue_vue_type_script_setup_true_lang-D1jGatE9.Cl3S9w1o.js";import{F as V}from"./chunks/FrameworkExample.Byhd3Bwz.js";import"./chunks/Button.BmTmCFep.js";import"./chunks/createLucideIcon.U6K_rCrv.js";import"./chunks/state-CovhUvdr.C-u8O0Fo.js";import"./chunks/query-BykXNUlT.Pm7lu9c1.js";import"./chunks/floating-ui.dom-muqvZJIo.ByzMQtLc.js";import"./chunks/sdk.m.Dxhqq5iP.js";import"./chunks/Icon.CxPOY7rJ.js";var _=Object.defineProperty,x=(n,e,t,r)=>{for(var o=void 0,f=n.length-1,u;f>=0;f--)(u=n[f])&&(o=u(e,t,o)||o);return o&&_(e,t,o),o};const b=class extends y{constructor(){super(),this._fxObserver=null,this.fxSpeed="md",this.fxEase="ease",this.fxDisabled=!1}connectedCallback(){super.connectedCallback(),this._updateTheme(),this._fxObserver=new MutationObserver(e=>{e.forEach(t=>{t.type==="attributes"&&t.attributeName==="data-theme"&&this._updateTheme()})}),this._fxObserver.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]})}disconnectedCallback(){super.disconnectedCallback(),this._fxObserver&&(this._fxObserver.disconnect(),this._fxObserver=null)}_updateTheme(){var r;const e=document.documentElement.getAttribute("data-theme")==="dark",t=(r=this.shadowRoot)==null?void 0:r.querySelector(".tooltip");t instanceof HTMLElement&&(t.style.setProperty("--ag-fx-shadow-opacity",e?"0.8":"0.4"),t.style.setProperty("--ag-fx-sweep-color","rgba(255, 255, 255, 0.3)"))}firstUpdated(){super.firstUpdated(),this._applyFxClasses(),this._applyFxCustomProperties(),this._updateTheme()}updated(e){super.updated(e),(e.has("fx")||e.has("fxDisabled"))&&this._applyFxClasses(),(e.has("fxSpeed")||e.has("fxEase"))&&this._applyFxCustomProperties()}_applyFxClasses(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector(".tooltip");if(e){const r=[];e.classList.forEach(o=>{o.startsWith("ag-fx-")&&r.push(o)}),r.forEach(o=>e.classList.remove(o)),this.fx&&!this.fxDisabled&&e.classList.add(`ag-fx-${this.fx}`),this.fxDisabled?e.classList.add("ag-fx-disabled"):e.classList.remove("ag-fx-disabled")}}_applyFxCustomProperties(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector(".tooltip");e instanceof HTMLElement&&(e.style.setProperty("--ag-fx-duration",`var(--ag-fx-duration-${this.fxSpeed})`),e.style.setProperty("--ag-fx-ease",`var(--ag-fx-ease-${this.fxEase})`))}};b.styles=[B,y.styles,E`
      /* ========================================
         FX EFFECT SETUP
         Add necessary CSS properties for effects that need them
         ======================================== */

      /* Shimmer needs a gradient mask */
      .tooltip.ag-fx-shimmer {
        overflow: hidden;
        -webkit-mask-image: linear-gradient(
          to right,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 0.9) 40%,
          rgba(0, 0, 0, 0.9) 60%,
          rgba(0, 0, 0, 0) 100%
        );
        mask-image: linear-gradient(
          to right,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 1) 40%,
          rgba(0, 0, 0, 1) 60%,
          rgba(0, 0, 0, 0) 100%
        );
        -webkit-mask-size: 250% 100%;
        mask-size: 250% 100%;
        -webkit-mask-position: 215% 0;
        mask-position: 215% 0;
      }

      /* Ripple needs overflow visible to show expanding ring */
      .tooltip.ag-fx-ripple {
        overflow: visible;
      }

      /* Highlight Sweep needs a gradient background overlay */
      .tooltip.ag-fx-highlight-sweep {
        position: relative;
        overflow: hidden;
      }

      .tooltip.ag-fx-highlight-sweep::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(
          90deg,
          transparent 0%,
          transparent 30%,
          var(--ag-fx-sweep-color, rgba(255, 255, 255, 0.3)) 50%,
          transparent 70%,
          transparent 100%
        );
        transform: translateX(-100%);
        pointer-events: none;
      }

      /* ========================================
         FX EFFECT CLASSES
         Applied to target element (.tooltip)
         ======================================== */

      :host([fx="bounce"]) .tooltip,
      :host([fx="flip"]) .tooltip,
      :host([fx="jelly"]) .tooltip {
        animation-iteration-count: 1;
      }

      /* Hover-triggered effects (triggered when hovering the tooltip host container) */
      :host([fx="bounce"]:hover) .tooltip {
        animation: ag-fx-bounce var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      :host([fx="pulse"]:hover) .tooltip {
        animation: ag-fx-pulse var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      :host([fx="jelly"]:hover) .tooltip {
        animation: ag-fx-jelly var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      :host([fx="shimmer"]:hover) .tooltip {
        animation: ag-fx-shimmer var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      :host([fx="glow"]:hover) .tooltip {
        animation: ag-fx-glow var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      :host([fx="flip"]:hover) .tooltip {
        animation: ag-fx-flip var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      :host([fx="ripple"]:hover) .tooltip {
        animation: ag-fx-ripple var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      :host([fx="highlight-sweep"]:hover) .tooltip::before {
        animation: ag-fx-highlight-sweep var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      /* Active/press effects */
      .tooltip.ag-fx-press-pop:active {
        animation: ag-fx-press-pop var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      /* Entrance effects */
      .tooltip.ag-fx-slide-in {
        animation: ag-fx-slide-in var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      /* Disabled state */
      .tooltip.ag-fx-disabled {
        animation: none !important;
      }

      .tooltip.ag-fx-disabled::before {
        animation: none !important;
      }

      /* Reduced motion support */
      @media (prefers-reduced-motion: reduce) {
        .tooltip.ag-fx-bounce,
        .tooltip.ag-fx-pulse,
        .tooltip.ag-fx-jelly,
        .tooltip.ag-fx-shimmer,
        .tooltip.ag-fx-glow,
        .tooltip.ag-fx-flip,
        .tooltip.ag-fx-ripple,
        .tooltip.ag-fx-highlight-sweep,
        .tooltip.ag-fx-press-pop,
        .tooltip.ag-fx-slide-in {
          animation-duration: 0.01ms !important;
          transition-duration: 0.01ms !important;
        }
      }
    `];let g=b;x([k({type:String,reflect:!0})],g.prototype,"fx");x([k({type:String,attribute:"fx-speed",reflect:!0})],g.prototype,"fxSpeed");x([k({type:String,attribute:"fx-ease",reflect:!0})],g.prototype,"fxEase");x([k({type:Boolean,attribute:"fx-disabled",reflect:!0})],g.prototype,"fxDisabled");customElements.get("ag-tooltip-fx")||customElements.define("ag-tooltip-fx",g);const P=["content","placement","distance","skidding","trigger",".disabled","fx","fx-speed","fx-ease",".fxDisabled"],c=T({__name:"VueTooltipFx",props:{fx:{},fxSpeed:{default:"md"},fxEase:{default:"ease"},fxDisabled:{type:Boolean,default:!1},content:{default:""},placement:{default:"top"},distance:{default:8},skidding:{default:0},trigger:{default:"hover focus"},disabled:{type:Boolean,default:!1}},emits:["show","hide"],setup(n,{expose:e,emit:t}){const r=t,o=R(),f=l=>{r("show",l.detail)},u=l=>{r("hide",l.detail)};return e({show:()=>{var l;(l=o.value)==null||l.show()},hide:()=>{var l;(l=o.value)==null||l.hide()},toggle:()=>{var l;(l=o.value)==null||l.toggle()}}),(l,I)=>(m(),F("ag-tooltip-fx",S({ref_key:"tooltipRef",ref:o,content:n.content,placement:n.placement,distance:n.distance,skidding:n.skidding,trigger:n.trigger,".disabled":n.disabled,fx:n.fx,"fx-speed":n.fxSpeed,"fx-ease":n.fxEase,".fxDisabled":n.fxDisabled,onShow:f,onHide:u},l.$attrs),[A(l.$slots,"default")],48,P))}}),q={class:"stacked-mobile mbe4"},L={__name:"TooltipFxExamples",setup(n){return(e,t)=>(m(),F("div",q,[i(s(c),{fx:"bounce",content:"Bounce effect"},{default:a(()=>[i(s(h),null,{default:a(()=>[...t[0]||(t[0]=[p("Bounce",-1)])]),_:1})]),_:1}),i(s(c),{fx:"pulse",content:"Pulse effect"},{default:a(()=>[i(s(h),{variant:"primary"},{default:a(()=>[...t[1]||(t[1]=[p("Pulse",-1)])]),_:1})]),_:1}),i(s(c),{fx:"jelly","fx-speed":"lg","fx-ease":"spring-sm",content:"Jelly effect"},{default:a(()=>[i(s(h),{variant:"success"},{default:a(()=>[...t[2]||(t[2]=[p("Jelly",-1)])]),_:1})]),_:1}),i(s(c),{fx:"shimmer","fx-speed":"xl",content:"Shimmer effect"},{default:a(()=>[i(s(h),{variant:"warning"},{default:a(()=>[...t[3]||(t[3]=[p("Shimmer",-1)])]),_:1})]),_:1}),i(s(c),{fx:"glow",content:"Glow effect"},{default:a(()=>[i(s(h),{variant:"danger"},{default:a(()=>[...t[4]||(t[4]=[p("Glow",-1)])]),_:1})]),_:1}),i(s(c),{fx:"flip","fx-speed":"lg","fx-ease":"ease-in",content:"Flip effect"},{default:a(()=>[i(s(h),null,{default:a(()=>[...t[5]||(t[5]=[p("Flip",-1)])]),_:1})]),_:1}),i(s(c),{fx:"ripple",content:"Ripple effect"},{default:a(()=>[i(s(h),{variant:"primary"},{default:a(()=>[...t[6]||(t[6]=[p("Ripple",-1)])]),_:1})]),_:1}),i(s(c),{fx:"highlight-sweep","fx-speed":"lg",content:"Sweep effect"},{default:a(()=>[i(s(h),{variant:"success"},{default:a(()=>[...t[7]||(t[7]=[p("Sweep",-1)])]),_:1})]),_:1})]))}};class j extends w{createRenderRoot(){return this}render(){return C`
      <div class="stacked-mobile mbe4">
        <ag-tooltip-fx fx="bounce" content="Bounce effect">
          <ag-button>Bounce</ag-button>
        </ag-tooltip-fx>
        <ag-tooltip-fx fx="pulse" content="Pulse effect">
          <ag-button variant="primary">Pulse</ag-button>
        </ag-tooltip-fx>
        <ag-tooltip-fx fx="jelly" fx-speed="lg" fx-ease="spring-sm" content="Jelly effect">
          <ag-button variant="success">Jelly</ag-button>
        </ag-tooltip-fx>
        <ag-tooltip-fx fx="shimmer" fx-speed="xl" content="Shimmer effect">
          <ag-button variant="warning">Shimmer</ag-button>
        </ag-tooltip-fx>
        <ag-tooltip-fx fx="glow" content="Glow effect">
          <ag-button variant="danger">Glow</ag-button>
        </ag-tooltip-fx>
        <ag-tooltip-fx fx="flip" fx-speed="lg" fx-ease="ease-in" content="Flip effect">
          <ag-button>Flip</ag-button>
        </ag-tooltip-fx>
        <ag-tooltip-fx fx="ripple" content="Ripple effect">
          <ag-button variant="primary">Ripple</ag-button>
        </ag-tooltip-fx>
        <ag-tooltip-fx fx="highlight-sweep" fx-speed="lg" content="Sweep effect">
          <ag-button variant="success">Sweep</ag-button>
        </ag-tooltip-fx>
      </div>
    `}}customElements.define("tooltipfx-lit-examples",j);const O=`<template>
  <div class="stacked-mobile mbe4">
    <VueTooltipFx fx="bounce" content="Bounce effect">
      <VueButton>Bounce</VueButton>
    </VueTooltipFx>
    <VueTooltipFx fx="pulse" content="Pulse effect">
      <VueButton variant="primary">Pulse</VueButton>
    </VueTooltipFx>
    <VueTooltipFx fx="jelly" fx-speed="lg" fx-ease="spring-sm" content="Jelly effect">
      <VueButton variant="success">Jelly</VueButton>
    </VueTooltipFx>
    <VueTooltipFx fx="shimmer" fx-speed="xl" content="Shimmer effect">
      <VueButton variant="warning">Shimmer</VueButton>
    </VueTooltipFx>
    <VueTooltipFx fx="glow" content="Glow effect">
      <VueButton variant="danger">Glow</VueButton>
    </VueTooltipFx>
    <VueTooltipFx fx="flip" fx-speed="lg" fx-ease="ease-in" content="Flip effect">
      <VueButton>Flip</VueButton>
    </VueTooltipFx>
    <VueTooltipFx fx="ripple" content="Ripple effect">
      <VueButton variant="primary">Ripple</VueButton>
    </VueTooltipFx>
    <VueTooltipFx fx="highlight-sweep" fx-speed="lg" content="Sweep effect">
      <VueButton variant="success">Sweep</VueButton>
    </VueTooltipFx>
  </div>
</template>

<script setup>
import { VueTooltipFx } from "agnosticui-core/tooltip-fx/vue";
import { VueButton } from "agnosticui-core/button/vue";
<\/script>
`,H=`import { LitElement, html } from 'lit';
import 'agnosticui-core/tooltip-fx';
import 'agnosticui-core/button';

export class TooltipFxLitExamples extends LitElement {
  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  render() {
    return html\`
      <div class="stacked-mobile mbe4">
        <ag-tooltip-fx fx="bounce" content="Bounce effect">
          <ag-button>Bounce</ag-button>
        </ag-tooltip-fx>
        <ag-tooltip-fx fx="pulse" content="Pulse effect">
          <ag-button variant="primary">Pulse</ag-button>
        </ag-tooltip-fx>
        <ag-tooltip-fx fx="jelly" fx-speed="lg" fx-ease="spring-sm" content="Jelly effect">
          <ag-button variant="success">Jelly</ag-button>
        </ag-tooltip-fx>
        <ag-tooltip-fx fx="shimmer" fx-speed="xl" content="Shimmer effect">
          <ag-button variant="warning">Shimmer</ag-button>
        </ag-tooltip-fx>
        <ag-tooltip-fx fx="glow" content="Glow effect">
          <ag-button variant="danger">Glow</ag-button>
        </ag-tooltip-fx>
        <ag-tooltip-fx fx="flip" fx-speed="lg" fx-ease="ease-in" content="Flip effect">
          <ag-button>Flip</ag-button>
        </ag-tooltip-fx>
        <ag-tooltip-fx fx="ripple" content="Ripple effect">
          <ag-button variant="primary">Ripple</ag-button>
        </ag-tooltip-fx>
        <ag-tooltip-fx fx="highlight-sweep" fx-speed="lg" content="Sweep effect">
          <ag-button variant="success">Sweep</ag-button>
        </ag-tooltip-fx>
      </div>
    \`;
  }
}

customElements.define('tooltipfx-lit-examples', TooltipFxLitExamples);
`,G=`import { ReactTooltipFx } from "agnosticui-core/tooltip-fx/react";
import { ReactButton } from "agnosticui-core/button/react";

export default function TooltipFxReactExamples() {
  return (
    <div className="stacked-mobile mbe4">
      <ReactTooltipFx fx="bounce" content="Bounce effect">
        <ReactButton>Bounce</ReactButton>
      </ReactTooltipFx>
      <ReactTooltipFx fx="pulse" content="Pulse effect">
        <ReactButton variant="primary">Pulse</ReactButton>
      </ReactTooltipFx>
      <ReactTooltipFx fx="jelly" fxSpeed="lg" fxEase="spring-sm" content="Jelly effect">
        <ReactButton variant="success">Jelly</ReactButton>
      </ReactTooltipFx>
      <ReactTooltipFx fx="shimmer" fxSpeed="xl" content="Shimmer effect">
        <ReactButton variant="warning">Shimmer</ReactButton>
      </ReactTooltipFx>
      <ReactTooltipFx fx="glow" content="Glow effect">
        <ReactButton variant="danger">Glow</ReactButton>
      </ReactTooltipFx>
      <ReactTooltipFx fx="flip" fxSpeed="lg" fxEase="ease-in" content="Flip effect">
        <ReactButton>Flip</ReactButton>
      </ReactTooltipFx>
      <ReactTooltipFx fx="ripple" content="Ripple effect">
        <ReactButton variant="primary">Ripple</ReactButton>
      </ReactTooltipFx>
      <ReactTooltipFx fx="highlight-sweep" fxSpeed="lg" content="Sweep effect">
        <ReactButton variant="success">Sweep</ReactButton>
      </ReactTooltipFx>
    </div>
  );
}
`,at=JSON.parse('{"title":"TooltipFx","description":"","frontmatter":{},"headers":[],"relativePath":"components/tooltip-fx.md","filePath":"components/tooltip-fx.md"}'),J={name:"components/tooltip-fx.md"},nt=Object.assign(J,{setup(n){return(e,t)=>(m(),F("div",null,[t[1]||(t[1]=d("h1",{id:"tooltipfx",tabindex:"-1"},[p("TooltipFx "),d("a",{class:"header-anchor",href:"#tooltipfx","aria-label":'Permalink to "TooltipFx"'},"​")],-1)),i(v),t[2]||(t[2]=d("p",null,"TooltipFx extends the core Tooltip component with a handful of CSS-only micro-interaction effects applied to the tooltip popup.",-1)),t[3]||(t[3]=d("div",{class:"info custom-block"},[d("p",{class:"custom-block-title"},"Opt-in Component"),d("p",null,"TooltipFx adds a few hundred lines of CSS for animation effects. It's ideal for marketing sites, landing pages, or when visual polish is a priority.")],-1)),t[4]||(t[4]=d("h2",{id:"examples",tabindex:"-1"},[p("Examples "),d("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),i(V,{component:"tooltip-fx","vue-code":s(O),"lit-code":s(H),"react-code":s(G)},{vue:a(()=>[i(L)]),lit:a(()=>[...t[0]||(t[0]=[d("tooltipfx-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),t[5]||(t[5]=D(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The framework examples below <code>import</code> AgnosticUI as an <code>npm</code> package. Alternatively, you can use the <strong>CLI for complete control, AI/LLM visibility, and full code ownership</strong>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> init</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> --framework</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> FRAMEWORK</span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;"> # react, vue, lit, svelte, etc.</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> add</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> TooltipFx</span></span></code></pre></div><p>The CLI copies source code directly into your project, giving you full visibility and control. After running <code>npx ag add</code>, you&#39;ll receive exact import instructions.</p></div><details class="details custom-block"><summary>Vue</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueTooltipFx</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> fx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;bounce&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> content</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Helpful context&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Hover me&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueTooltipFx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> setup</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { VueTooltipFx } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/tooltip-fx/vue&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><details class="details custom-block"><summary>React</summary><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { ReactTooltipFx } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/tooltip-fx/react&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">function</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> App</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">() {</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  return</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactTooltipFx</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> fx</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;bounce&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> content</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Helpful context&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Hover me&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactTooltipFx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  );</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div></details><details class="details custom-block"><summary>Lit</summary><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;module&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  import</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/tooltip-fx&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-tooltip-fx</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> fx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;bounce&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> content</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Helpful context&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Hover me&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-tooltip-fx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><p>Inherits all <a href="./tooltip.html#props">Tooltip Props</a> plus:</p><table class="ag-table ag-table--striped"><thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>fx</code></td><td><code>string</code></td><td><code>undefined</code></td><td>Effect name: <code>bounce</code>, <code>pulse</code>, <code>jelly</code>, <code>shimmer</code>, <code>glow</code>, <code>flip</code>, <code>ripple</code>, <code>highlight-sweep</code>, <code>press-pop</code>, <code>slide-in</code></td></tr><tr><td><code>fxSpeed</code></td><td><code>&#39;xs&#39; | &#39;sm&#39; | &#39;md&#39; | &#39;lg&#39; | &#39;xl&#39;</code></td><td><code>&#39;md&#39;</code></td><td>Animation duration preset</td></tr><tr><td><code>fxEase</code></td><td><code>&#39;ease&#39; | &#39;bounce&#39; | &#39;spring-sm&#39; | ...</code></td><td><code>&#39;ease&#39;</code></td><td>Easing function preset</td></tr><tr><td><code>fxDisabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Disable effects programmatically</td></tr></tbody></table><h2 id="effects-library" tabindex="-1">Effects Library <a class="header-anchor" href="#effects-library" aria-label="Permalink to &quot;Effects Library&quot;">​</a></h2><table class="ag-table ag-table--striped"><thead><tr><th>FX Name</th><th>Trigger</th><th>Description</th></tr></thead><tbody><tr><td><code>bounce</code></td><td>hover</td><td>Vertical pop, light spring</td></tr><tr><td><code>pulse</code></td><td>hover</td><td>Scale grow/shrink animation</td></tr><tr><td><code>jelly</code></td><td>hover</td><td>Squash/stretch elastic wobble</td></tr><tr><td><code>shimmer</code></td><td>hover</td><td>Light sweep across surface</td></tr><tr><td><code>glow</code></td><td>hover</td><td>Box-shadow pulse effect</td></tr><tr><td><code>flip</code></td><td>hover</td><td>Y-axis rotation (3D flip)</td></tr><tr><td><code>ripple</code></td><td>hover</td><td>Center-origin radial expansion</td></tr><tr><td><code>highlight-sweep</code></td><td>hover</td><td>Horizontal highlight sweep</td></tr><tr><td><code>press-pop</code></td><td>active</td><td>Quick press down/up</td></tr><tr><td><code>slide-in</code></td><td>mount</td><td>Entrance animation from below</td></tr></tbody></table>`,10))]))}});export{at as __pageData,nt as default};
