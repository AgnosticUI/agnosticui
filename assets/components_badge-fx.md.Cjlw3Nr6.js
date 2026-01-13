import{A as b}from"./chunks/AlphaWarning.yC7ZufpQ.js";import{i as v,z as h,a as y,x as B}from"./chunks/Button.Bujdzq23.js";import{e as m}from"./chunks/Badge.CrpF9rU0.js";import{r as E}from"./chunks/motion.styles.VEVGekNg.js";import{d as C,p as w,c as x,o as k,r as A,K as D,G as t,w as d,a as r,k as i,j as l,ae as S}from"./chunks/framework.NAAYCHZu.js";import{F as R}from"./chunks/FrameworkExample.Vj5DwYx5.js";import"./chunks/createLucideIcon.B61Wqv9x.js";import"./chunks/Icon.odq14qpJ.js";var P=Object.defineProperty,f=(s,a,e,p)=>{for(var n=void 0,c=s.length-1,u;c>=0;c--)(u=s[c])&&(n=u(a,e,n)||n);return n&&P(a,e,n),n};const F=class extends m{constructor(){super(),this._observer=null,this.fxSpeed="md",this.fxEase="ease",this.fxDisabled=!1}connectedCallback(){super.connectedCallback(),this._updateTheme(),this._observer=new MutationObserver(a=>{a.forEach(e=>{e.type==="attributes"&&e.attributeName==="data-theme"&&this._updateTheme()})}),this._observer.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]})}disconnectedCallback(){super.disconnectedCallback(),this._observer&&(this._observer.disconnect(),this._observer=null)}_updateTheme(){var p;const a=document.documentElement.getAttribute("data-theme")==="dark",e=(p=this.shadowRoot)==null?void 0:p.querySelector(".badge");e instanceof HTMLElement&&(e.style.setProperty("--ag-fx-shadow-opacity",a?"0.8":"0.4"),a&&this.variant==="monochrome"?e.style.setProperty("--ag-fx-sweep-color","rgba(0, 0, 0, 0.6)"):e.style.setProperty("--ag-fx-sweep-color","rgba(255, 255, 255, 0.5)"))}firstUpdated(a){super.firstUpdated(a),this._applyFxClasses(),this._applyFxCustomProperties(),this._updateTheme()}updated(a){super.updated(a),(a.has("fx")||a.has("fxDisabled"))&&this._applyFxClasses(),a.has("variant")&&this._updateTheme(),(a.has("fxSpeed")||a.has("fxEase"))&&this._applyFxCustomProperties()}_applyFxClasses(){var e;const a=(e=this.shadowRoot)==null?void 0:e.querySelector(".badge");if(a){const p=[];a.classList.forEach(n=>{n.startsWith("ag-fx-")&&p.push(n)}),p.forEach(n=>a.classList.remove(n)),this.fx&&!this.fxDisabled&&a.classList.add(`ag-fx-${this.fx}`),this.fxDisabled?a.classList.add("ag-fx-disabled"):a.classList.remove("ag-fx-disabled")}}_applyFxCustomProperties(){var e;const a=(e=this.shadowRoot)==null?void 0:e.querySelector(".badge");a instanceof HTMLElement&&(a.style.setProperty("--ag-fx-duration",`var(--ag-fx-duration-${this.fxSpeed})`),a.style.setProperty("--ag-fx-ease",`var(--ag-fx-ease-${this.fxEase})`))}};F.styles=[E,m.styles,v`
      /* ========================================
         OVERRIDE PARENT HOVER STATES
         Neutralize competing hover effects from core
         ======================================== */

      /* Badge has a brightness filter on hover when interactive */
      :host([interactive]) .badge:hover {
        filter: none;
      }

      /* ========================================
         FX EFFECT SETUP
         Add necessary CSS properties for effects that need them
         ======================================== */

      /* Shimmer needs a gradient mask */
      .badge.ag-fx-shimmer {
        overflow: hidden;
        -webkit-mask-image: linear-gradient(
          to right,
        rgba(0, 0, 0, 0) 0%,      /* transparent left edge */
        rgba(0, 0, 0, 0.9) 40%,     /* fade in complete at 40% */
        rgba(0, 0, 0, 0.9) 60%,     /* fade out starts at 60% */
        rgba(0, 0, 0, 0) 100%     /* transparent right edge */
        );
        mask-image: linear-gradient(
          to right,
        rgba(0, 0, 0, 0) 0%,      /* transparent left edge */
        rgba(0, 0, 0, 1) 40%,     /* fade in complete at 40% */
        rgba(0, 0, 0, 1) 60%,     /* fade out starts at 60% */
        rgba(0, 0, 0, 0) 100%     /* transparent right edge */
        );
        /* 40-60% above creates a 20% wide "visible window" with soft 40% fade zones on each side. */
        -webkit-mask-size: 250% 100%;
        mask-size: 250% 100%;
        -webkit-mask-position: 215% 0;
        mask-position: 215% 0;
      }

      /* Ripple needs overflow visible to show expanding ring */
      .badge.ag-fx-ripple {
        overflow: visible;
      }

      /* Highlight Sweep needs a gradient background overlay */
      .badge.ag-fx-highlight-sweep {
        position: relative;
        overflow: hidden;
      }

      .badge.ag-fx-highlight-sweep::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(
          90deg,
          transparent 0%,
          transparent 30%,
          var(--ag-fx-sweep-color, rgba(255, 255, 255, 0.5)) 50%,
          transparent 70%,
          transparent 100%
        );
        transform: translateX(-100%);
        pointer-events: none;
      }

      /* ========================================
         FX EFFECT CLASSES
         Applied to target element (.badge)
         ======================================== */

      /* 
        Prevent hover flicker: 
        - Use @host for hover detection (doesn't move with animation)
        - Or add animation-play-state to prevent retriggering
      */
      :host([fx="bounce"]) .badge,
      :host([fx="flip"]) .badge,
      :host([fx="jelly"]) .badge {
        /* Animation only plays once per hover */
        animation-iteration-count: 1;
      }

      /* Hover-triggered effects - now triggered by :host instead of .badge */
      :host([fx="bounce"]:hover) .badge {
        animation: ag-fx-bounce var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      :host([fx="pulse"]:hover) .badge {
        animation: ag-fx-pulse var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      :host([fx="jelly"]:hover) .badge {
        animation: ag-fx-jelly var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      :host([fx="shimmer"]:hover) .badge {
        animation: ag-fx-shimmer var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      :host([fx="glow"]:hover) .badge {
        animation: ag-fx-glow var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      :host([fx="flip"]:hover) .badge {
        animation: ag-fx-flip var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      :host([fx="ripple"]:hover) .badge {
        animation: ag-fx-ripple var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      :host([fx="highlight-sweep"]:hover) .badge::before {
        animation: ag-fx-highlight-sweep var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      /* Active/press effects - require interactive or explicit cursor */
      .badge.ag-fx-press-pop {
        cursor: pointer;
      }

      .badge.ag-fx-press-pop:active {
        animation: ag-fx-press-pop var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      /* Entrance effects */
      .badge.ag-fx-slide-in {
        animation: ag-fx-slide-in var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      /* Disabled state */
      .badge.ag-fx-disabled {
        animation: none !important;
      }

      .badge.ag-fx-disabled::before {
        animation: none !important;
      }

      /* Reduced motion support */
      @media (prefers-reduced-motion: reduce) {
        .badge.ag-fx-bounce,
        .badge.ag-fx-pulse,
        .badge.ag-fx-jelly,
        .badge.ag-fx-shimmer,
        .badge.ag-fx-glow,
        .badge.ag-fx-flip,
        .badge.ag-fx-ripple,
        .badge.ag-fx-highlight-sweep,
        .badge.ag-fx-press-pop,
        .badge.ag-fx-slide-in {
          animation-duration: 0.01ms !important;
          transition-duration: 0.01ms !important;
        }
      }
    `];let g=F;f([h({type:String,reflect:!0})],g.prototype,"fx");f([h({type:String,attribute:"fx-speed",reflect:!0})],g.prototype,"fxSpeed");f([h({type:String,attribute:"fx-ease",reflect:!0})],g.prototype,"fxEase");f([h({type:Boolean,attribute:"fx-disabled",reflect:!0})],g.prototype,"fxDisabled");customElements.get("ag-badge-fx")||customElements.define("ag-badge-fx",g);const _=["variant","size",".dot",".interactive",".hiddenFromAT","value","max","status-label","live","fx","fx-speed","fx-ease",".fxDisabled"],o=C({__name:"VueBadgeFx",props:{variant:{default:"default"},size:{default:"md"},dot:{type:Boolean,default:!1},value:{default:null},max:{default:99},interactive:{type:Boolean,default:!1},statusLabel:{default:null},live:{default:"off"},hiddenFromAT:{type:Boolean,default:!1},fx:{},fxSpeed:{default:"md"},fxEase:{default:"ease"},fxDisabled:{type:Boolean,default:!1}},setup(s){const a=w(null);return(e,p)=>(k(),x("ag-badge-fx",D({ref_key:"agComponent",ref:a,variant:s.variant,size:s.size,".dot":s.dot,".interactive":s.interactive,".hiddenFromAT":s.hiddenFromAT,value:s.value,max:s.max,"status-label":s.statusLabel,live:s.live,fx:s.fx,"fx-speed":s.fxSpeed,"fx-ease":s.fxEase,".fxDisabled":s.fxDisabled},e.$attrs),[A(e.$slots,"default")],48,_))}}),V={class:"stacked-mobile mbe4"},T={__name:"BadgeFxExamples",setup(s){return(a,e)=>(k(),x("div",V,[t(i(o),{fx:"bounce",variant:"success"},{default:d(()=>[...e[0]||(e[0]=[r("Bounce",-1)])]),_:1}),t(i(o),{fx:"pulse",variant:"info"},{default:d(()=>[...e[1]||(e[1]=[r("Pulse",-1)])]),_:1}),t(i(o),{fx:"jelly","fx-speed":"lg","fx-ease":"spring-sm",variant:"monochrome"},{default:d(()=>[...e[2]||(e[2]=[r("Jelly",-1)])]),_:1}),t(i(o),{fx:"shimmer","fx-speed":"xl",variant:"danger"},{default:d(()=>[...e[3]||(e[3]=[r("Shimmer",-1)])]),_:1}),t(i(o),{fx:"glow",variant:"primary"},{default:d(()=>[...e[4]||(e[4]=[r("Glow",-1)])]),_:1}),t(i(o),{fx:"flip","fx-speed":"lg","fx-ease":"ease-in",variant:"success"},{default:d(()=>[...e[5]||(e[5]=[r("Flip",-1)])]),_:1}),t(i(o),{fx:"ripple",variant:"info"},{default:d(()=>[...e[6]||(e[6]=[r("Ripple",-1)])]),_:1}),t(i(o),{fx:"highlight-sweep","fx-speed":"lg","fx-ease":"ease-out",variant:"monochrome"},{default:d(()=>[...e[7]||(e[7]=[r("Sweep",-1)])]),_:1}),t(i(o),{fx:"press-pop",variant:"default",interactive:""},{default:d(()=>[...e[8]||(e[8]=[r("Press Pop",-1)])]),_:1})]))}};class q extends y{createRenderRoot(){return this}render(){return B`
      <div class="stacked-mobile mbe4">
        <ag-badge-fx fx="bounce" variant="success">Bounce</ag-badge-fx>
        <ag-badge-fx fx="pulse" variant="info">Pulse</ag-badge-fx>
        <ag-badge-fx fx="jelly" fx-speed="lg" fx-ease="spring-sm" variant="monochrome">Jelly</ag-badge-fx>
        <ag-badge-fx fx="shimmer" fx-speed="xl" variant="danger">Shimmer</ag-badge-fx>
        <ag-badge-fx fx="glow" variant="primary">Glow</ag-badge-fx>
        <ag-badge-fx fx="flip" fx-speed="lg" fx-ease="ease-in" variant="success">Flip</ag-badge-fx>
        <ag-badge-fx fx="ripple" variant="info">Ripple</ag-badge-fx>
        <ag-badge-fx fx="highlight-sweep" fx-speed="lg" fx-ease="ease-out" variant="monochrome">Sweep</ag-badge-fx>
        <ag-badge-fx fx="press-pop" variant="default" interactive>Press Pop</ag-badge-fx>
      </div>
    `}}customElements.define("badgefx-lit-examples",q);const L=`<template>
  <div class="stacked-mobile mbe4">
      <VueBadgeFx fx="bounce" variant="success">Bounce</VueBadgeFx>
      <VueBadgeFx fx="pulse" variant="info">Pulse</VueBadgeFx>
      <VueBadgeFx fx="jelly" fx-speed="lg" fx-ease="spring-sm" variant="monochrome">Jelly</VueBadgeFx>
      <VueBadgeFx fx="shimmer" fx-speed="xl" variant="danger">Shimmer</VueBadgeFx>
      <VueBadgeFx fx="glow" variant="primary">Glow</VueBadgeFx>
      <VueBadgeFx fx="flip" fx-speed="lg" fx-ease="ease-in" variant="success">Flip</VueBadgeFx>
      <VueBadgeFx fx="ripple" variant="info">Ripple</VueBadgeFx>
      <VueBadgeFx fx="highlight-sweep" fx-speed="lg" fx-ease="ease-out" variant="monochrome">Sweep</VueBadgeFx>
      <VueBadgeFx fx="press-pop" variant="default" interactive>Press Pop</VueBadgeFx>
  </div>
</template>

<script setup>
import { VueBadgeFx } from "agnosticui-core/badge-fx/vue";
<\/script>

<style scoped>

</style>
`,j=`import { LitElement, html } from 'lit';
import 'agnosticui-core/badge-fx';

export class BadgeFxLitExamples extends LitElement {
  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  render() {
    return html\`
      <div class="stacked-mobile mbe4">
        <ag-badge-fx fx="bounce" variant="success">Bounce</ag-badge-fx>
        <ag-badge-fx fx="pulse" variant="info">Pulse</ag-badge-fx>
        <ag-badge-fx fx="jelly" fx-speed="lg" fx-ease="spring-sm" variant="monochrome">Jelly</ag-badge-fx>
        <ag-badge-fx fx="shimmer" fx-speed="xl" variant="danger">Shimmer</ag-badge-fx>
        <ag-badge-fx fx="glow" variant="primary">Glow</ag-badge-fx>
        <ag-badge-fx fx="flip" fx-speed="lg" fx-ease="ease-in" variant="success">Flip</ag-badge-fx>
        <ag-badge-fx fx="ripple" variant="info">Ripple</ag-badge-fx>
        <ag-badge-fx fx="highlight-sweep" fx-speed="lg" fx-ease="ease-out" variant="monochrome">Sweep</ag-badge-fx>
        <ag-badge-fx fx="press-pop" variant="default" interactive>Press Pop</ag-badge-fx>
      </div>
    \`;
  }
}

customElements.define('badgefx-lit-examples', BadgeFxLitExamples);
`,N=`import { ReactBadgeFx } from "agnosticui-core/badge-fx/react";

export default function BadgeFxReactExamples() {
  return (
    <div className="stacked-mobile mbe4">
      <ReactBadgeFx fx="bounce" variant="success">Bounce</ReactBadgeFx>
      <ReactBadgeFx fx="pulse" variant="info">Pulse</ReactBadgeFx>
      <ReactBadgeFx fx="jelly" fxSpeed="lg" fxEase="spring-sm" variant="monochrome">Jelly</ReactBadgeFx>
      <ReactBadgeFx fx="shimmer" fxSpeed="xl" variant="danger">Shimmer</ReactBadgeFx>
      <ReactBadgeFx fx="glow" variant="primary">Glow</ReactBadgeFx>
      <ReactBadgeFx fx="flip" fxSpeed="lg" fxEase="ease-in" variant="success">Flip</ReactBadgeFx>
      <ReactBadgeFx fx="ripple" variant="info">Ripple</ReactBadgeFx>
      <ReactBadgeFx fx="highlight-sweep" fxSpeed="lg" fxEase="ease-out" variant="monochrome">Sweep</ReactBadgeFx>
      <ReactBadgeFx fx="press-pop" variant="default" interactive>Press Pop</ReactBadgeFx>
    </div>
  );
}
`,W=JSON.parse('{"title":"BadgeFx","description":"","frontmatter":{},"headers":[],"relativePath":"components/badge-fx.md","filePath":"components/badge-fx.md"}'),z={name:"components/badge-fx.md"},K=Object.assign(z,{setup(s){return(a,e)=>(k(),x("div",null,[e[1]||(e[1]=l("h1",{id:"badgefx",tabindex:"-1"},[r("BadgeFx "),l("a",{class:"header-anchor",href:"#badgefx","aria-label":'Permalink to "BadgeFx"'},"​")],-1)),t(b),e[2]||(e[2]=l("p",null,"BadgeFx extends the core Badge component with a handful of CSS-only micro-interaction effects.",-1)),e[3]||(e[3]=l("div",{class:"info custom-block"},[l("p",{class:"custom-block-title"},"Opt-in Component"),l("p",null,"BadgeFx adds a few hundred lines of CSS for animation effects. It's ideal for marketing sites, landing pages, or when visual polish is a priority.")],-1)),e[4]||(e[4]=l("h2",{id:"examples",tabindex:"-1"},[r("Examples "),l("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),t(R,{component:"badge-fx","vue-code":i(L),"lit-code":i(j),"react-code":i(N)},{vue:d(()=>[t(T)]),lit:d(()=>[...e[0]||(e[0]=[l("badgefx-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),e[5]||(e[5]=S(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The framework examples below <code>import</code> AgnosticUI as an <code>npm</code> package. Alternatively, you can use the <strong>CLI for complete control, AI/LLM visibility, and full code ownership</strong>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> init</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> --framework</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> FRAMEWORK</span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;"> # react, vue, lit, svelte, etc.</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> add</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> BadgeFx</span></span></code></pre></div><p>The CLI copies source code directly into your project, giving you full visibility and control. After running <code>npx ag add</code>, you&#39;ll receive exact import instructions.</p></div><details class="details custom-block"><summary>Vue</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueBadgeFx</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> fx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;bounce&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> fx-speed</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;md&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt; Badge Text &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueBadgeFx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> setup</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { VueBadgeFx } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/badge-fx/vue&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><details class="details custom-block"><summary>React</summary><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { ReactBadgeFx } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/badge-fx/react&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">function</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> App</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">() {</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  return</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactBadgeFx</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> fx</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;bounce&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> fxSpeed</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;md&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      Badge Text</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactBadgeFx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  );</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div></details><details class="details custom-block"><summary>Lit</summary><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;module&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  import</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/badge-fx&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-badge-fx</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> fx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;bounce&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> fx-speed</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;md&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt; Badge Text &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-badge-fx</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><p>Inherits all <a href="./badge.html#props">Badge Props</a> plus:</p><table class="ag-table ag-table--striped"><thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>fx</code></td><td><code>string</code></td><td><code>undefined</code></td><td>Effect name: <code>bounce</code>, <code>pulse</code>, <code>jelly</code>, <code>shimmer</code>, <code>glow</code>, <code>flip</code>, <code>ripple</code>, <code>highlight-sweep</code>, <code>press-pop</code>, <code>slide-in</code></td></tr><tr><td><code>fxSpeed</code></td><td><code>&#39;xs&#39; | &#39;sm&#39; | &#39;md&#39; | &#39;lg&#39; | &#39;xl&#39;</code></td><td><code>&#39;md&#39;</code></td><td>Animation duration preset</td></tr><tr><td><code>fxEase</code></td><td><code>&#39;ease&#39; | &#39;bounce&#39; | &#39;spring-sm&#39; | ...</code></td><td><code>&#39;ease&#39;</code></td><td>Easing function preset</td></tr><tr><td><code>fxDisabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Disable effects programmatically</td></tr></tbody></table><h2 id="effects-library" tabindex="-1">Effects Library <a class="header-anchor" href="#effects-library" aria-label="Permalink to &quot;Effects Library&quot;">​</a></h2><table class="ag-table ag-table--striped"><thead><tr><th>FX Name</th><th>Trigger</th><th>Description</th></tr></thead><tbody><tr><td><code>bounce</code></td><td>hover</td><td>Vertical pop, light spring</td></tr><tr><td><code>pulse</code></td><td>hover</td><td>Scale grow/shrink animation</td></tr><tr><td><code>jelly</code></td><td>hover</td><td>Squash/stretch elastic wobble</td></tr><tr><td><code>shimmer</code></td><td>hover</td><td>Light sweep across surface</td></tr><tr><td><code>glow</code></td><td>hover</td><td>Box-shadow pulse effect</td></tr><tr><td><code>flip</code></td><td>hover</td><td>Y-axis rotation (3D flip)</td></tr><tr><td><code>ripple</code></td><td>hover</td><td>Center-origin radial expansion</td></tr><tr><td><code>highlight-sweep</code></td><td>hover</td><td>Horizontal highlight sweep</td></tr><tr><td><code>press-pop</code></td><td>active</td><td>Quick press down/up</td></tr><tr><td><code>slide-in</code></td><td>mount</td><td>Entrance animation from below</td></tr></tbody></table>`,10))]))}});export{W as __pageData,K as default};
