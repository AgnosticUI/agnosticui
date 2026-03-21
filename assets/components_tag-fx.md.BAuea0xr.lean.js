import{A as v}from"./chunks/AlphaWarning.CKFYAqLS.js";import{i as b,z as f,a as w,x as T}from"./chunks/property-CemaeiRl.Cea_q1B7.js";import{r as F}from"./chunks/Tag.iHsn8ITU.js";import{r as E}from"./chunks/motion.styles.DXtlED6G.js";import{d as C,p as A,c as k,o as u,r as m,K as D,G as i,w as n,a as p,k as r,j as o,ag as S}from"./chunks/framework.DmF2n0Fc.js";import{F as R}from"./chunks/FrameworkExample.D4gn8Xfe.js";import"./chunks/createLucideIcon.U6K_rCrv.js";import"./chunks/state-CovhUvdr.C-u8O0Fo.js";import"./chunks/sdk.m.Dxhqq5iP.js";import"./chunks/Button.BmTmCFep.js";import"./chunks/Icon.CxPOY7rJ.js";var P=Object.defineProperty,c=(s,e,a,g)=>{for(var t=void 0,l=s.length-1,x;l>=0;l--)(x=s[l])&&(t=x(e,a,t)||t);return t&&P(e,a,t),t};const y=class extends F{constructor(){super(),this._observer=null,this.fxSpeed="md",this.fxEase="ease",this.fxDisabled=!1}connectedCallback(){super.connectedCallback(),this._updateTheme(),this._observer=new MutationObserver(e=>{e.forEach(a=>{a.type==="attributes"&&a.attributeName==="data-theme"&&this._updateTheme()})}),this._observer.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]})}disconnectedCallback(){super.disconnectedCallback(),this._observer&&(this._observer.disconnect(),this._observer=null)}_updateTheme(){var g;const e=document.documentElement.getAttribute("data-theme")==="dark",a=(g=this.shadowRoot)==null?void 0:g.querySelector(".tag-wrapper");a instanceof HTMLElement&&(a.style.setProperty("--ag-fx-shadow-opacity",e?"0.8":"0.4"),e&&this.variant==="monochrome"?a.style.setProperty("--ag-fx-sweep-color","rgba(0, 0, 0, 0.6)"):a.style.setProperty("--ag-fx-sweep-color","rgba(255, 255, 255, 0.5)"))}firstUpdated(e){super.firstUpdated(e),this._applyFxClasses(),this._applyFxCustomProperties(),this._updateTheme()}updated(e){super.updated(e),(e.has("fx")||e.has("fxDisabled"))&&this._applyFxClasses(),e.has("variant")&&this._updateTheme(),(e.has("fxSpeed")||e.has("fxEase"))&&this._applyFxCustomProperties()}_applyFxClasses(){var a;const e=(a=this.shadowRoot)==null?void 0:a.querySelector(".tag-wrapper");if(e){const g=[];e.classList.forEach(t=>{t.startsWith("ag-fx-")&&g.push(t)}),g.forEach(t=>e.classList.remove(t)),this.fx&&!this.fxDisabled&&e.classList.add(`ag-fx-${this.fx}`),this.fxDisabled?e.classList.add("ag-fx-disabled"):e.classList.remove("ag-fx-disabled")}}_applyFxCustomProperties(){var a;const e=(a=this.shadowRoot)==null?void 0:a.querySelector(".tag-wrapper");e instanceof HTMLElement&&(e.style.setProperty("--ag-fx-duration",`var(--ag-fx-duration-${this.fxSpeed})`),e.style.setProperty("--ag-fx-ease",`var(--ag-fx-ease-${this.fxEase})`))}};y.styles=[E,F.styles,b`
      /* ========================================
         FX EFFECT SETUP
         Add necessary CSS properties for effects that need them
         ======================================== */

      /* Shimmer needs a gradient mask */
      .tag-wrapper.ag-fx-shimmer {
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
      .tag-wrapper.ag-fx-ripple {
        overflow: visible;
      }

      /* Highlight Sweep needs a gradient background overlay */
      .tag-wrapper.ag-fx-highlight-sweep {
        position: relative;
        overflow: hidden;
      }

      .tag-wrapper.ag-fx-highlight-sweep::before {
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
         Applied to target element (.tag-wrapper)
         ======================================== */

      :host([fx="bounce"]) .tag-wrapper,
      :host([fx="flip"]) .tag-wrapper,
      :host([fx="jelly"]) .tag-wrapper {
        animation-iteration-count: 1;
      }

      /* Hover-triggered effects */
      :host([fx="bounce"]:hover) .tag-wrapper {
        animation: ag-fx-bounce var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      :host([fx="pulse"]:hover) .tag-wrapper {
        animation: ag-fx-pulse var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      :host([fx="jelly"]:hover) .tag-wrapper {
        animation: ag-fx-jelly var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      :host([fx="shimmer"]:hover) .tag-wrapper {
        animation: ag-fx-shimmer var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      :host([fx="glow"]:hover) .tag-wrapper {
        animation: ag-fx-glow var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      :host([fx="flip"]:hover) .tag-wrapper {
        animation: ag-fx-flip var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      :host([fx="ripple"]:hover) .tag-wrapper {
        animation: ag-fx-ripple var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      :host([fx="highlight-sweep"]:hover) .tag-wrapper::before {
        animation: ag-fx-highlight-sweep var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      /* Active/press effects */
      .tag-wrapper.ag-fx-press-pop {
        cursor: pointer;
      }

      .tag-wrapper.ag-fx-press-pop:active {
        animation: ag-fx-press-pop var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      /* Entrance effects */
      .tag-wrapper.ag-fx-slide-in {
        animation: ag-fx-slide-in var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      /* Disabled state */
      .tag-wrapper.ag-fx-disabled {
        animation: none !important;
      }

      .tag-wrapper.ag-fx-disabled::before {
        animation: none !important;
      }

      /* Reduced motion support */
      @media (prefers-reduced-motion: reduce) {
        .tag-wrapper.ag-fx-bounce,
        .tag-wrapper.ag-fx-pulse,
        .tag-wrapper.ag-fx-jelly,
        .tag-wrapper.ag-fx-shimmer,
        .tag-wrapper.ag-fx-glow,
        .tag-wrapper.ag-fx-flip,
        .tag-wrapper.ag-fx-ripple,
        .tag-wrapper.ag-fx-highlight-sweep,
        .tag-wrapper.ag-fx-press-pop,
        .tag-wrapper.ag-fx-slide-in {
          animation-duration: 0.01ms !important;
          transition-duration: 0.01ms !important;
        }
      }
    `];let h=y;c([f({type:String,reflect:!0})],h.prototype,"fx");c([f({type:String,attribute:"fx-speed",reflect:!0})],h.prototype,"fxSpeed");c([f({type:String,attribute:"fx-ease",reflect:!0})],h.prototype,"fxEase");c([f({type:Boolean,attribute:"fx-disabled",reflect:!0})],h.prototype,"fxDisabled");customElements.get("ag-tag-fx")||customElements.define("ag-tag-fx",h);const B=["variant","shape",".uppercase",".removable","fx","fx-speed","fx-ease",".fxDisabled"],d=C({__name:"VueTagFx",props:{variant:{default:""},shape:{default:""},uppercase:{type:Boolean,default:!1},removable:{type:Boolean,default:!1},fx:{},fxSpeed:{default:"md"},fxEase:{default:"ease"},fxDisabled:{type:Boolean,default:!1}},emits:["tag-remove"],setup(s,{emit:e}){const a=e,g=A(null),t=l=>{a("tag-remove",l.detail)};return(l,x)=>(u(),k("ag-tag-fx",D({ref_key:"agComponent",ref:g,variant:s.variant,shape:s.shape,".uppercase":s.uppercase,".removable":s.removable,fx:s.fx,"fx-speed":s.fxSpeed,"fx-ease":s.fxEase,".fxDisabled":s.fxDisabled,onTagRemove:t},l.$attrs),[m(l.$slots,"default"),m(l.$slots,"close")],48,B))}}),_={class:"stacked-mobile mbe4"},V={__name:"TagFxExamples",setup(s){return(e,a)=>(u(),k("div",_,[i(r(d),{fx:"bounce",variant:"success"},{default:n(()=>[...a[0]||(a[0]=[p("Bounce",-1)])]),_:1}),i(r(d),{fx:"pulse",variant:"info"},{default:n(()=>[...a[1]||(a[1]=[p("Pulse",-1)])]),_:1}),i(r(d),{fx:"jelly","fx-speed":"lg","fx-ease":"spring-sm",variant:"primary"},{default:n(()=>[...a[2]||(a[2]=[p("Jelly",-1)])]),_:1}),i(r(d),{fx:"shimmer","fx-speed":"xl",variant:"warning"},{default:n(()=>[...a[3]||(a[3]=[p("Shimmer",-1)])]),_:1}),i(r(d),{fx:"glow",variant:"error"},{default:n(()=>[...a[4]||(a[4]=[p("Glow",-1)])]),_:1}),i(r(d),{fx:"flip","fx-speed":"lg","fx-ease":"ease-in",variant:"success"},{default:n(()=>[...a[5]||(a[5]=[p("Flip",-1)])]),_:1}),i(r(d),{fx:"ripple",variant:"info"},{default:n(()=>[...a[6]||(a[6]=[p("Ripple",-1)])]),_:1}),i(r(d),{fx:"highlight-sweep","fx-speed":"lg","fx-ease":"ease-out",variant:"monochrome"},{default:n(()=>[...a[7]||(a[7]=[p("Sweep",-1)])]),_:1}),i(r(d),{fx:"press-pop",variant:"primary"},{default:n(()=>[...a[8]||(a[8]=[p("Press Pop",-1)])]),_:1})]))}};class q extends w{createRenderRoot(){return this}render(){return T`
      <div class="stacked-mobile mbe4">
        <ag-tag-fx fx="bounce" variant="success">Bounce</ag-tag-fx>
        <ag-tag-fx fx="pulse" variant="info">Pulse</ag-tag-fx>
        <ag-tag-fx fx="jelly" fx-speed="lg" fx-ease="spring-sm" variant="primary">Jelly</ag-tag-fx>
        <ag-tag-fx fx="shimmer" fx-speed="xl" variant="warning">Shimmer</ag-tag-fx>
        <ag-tag-fx fx="glow" variant="error">Glow</ag-tag-fx>
        <ag-tag-fx fx="flip" fx-speed="lg" fx-ease="ease-in" variant="success">Flip</ag-tag-fx>
        <ag-tag-fx fx="ripple" variant="info">Ripple</ag-tag-fx>
        <ag-tag-fx fx="highlight-sweep" fx-speed="lg" fx-ease="ease-out" variant="monochrome">Sweep</ag-tag-fx>
        <ag-tag-fx fx="press-pop" variant="primary">Press Pop</ag-tag-fx>
      </div>
    `}}customElements.define("tagfx-lit-examples",q);const L=`<template>
  <div class="stacked-mobile mbe4">
    <VueTagFx fx="bounce" variant="success">Bounce</VueTagFx>
    <VueTagFx fx="pulse" variant="info">Pulse</VueTagFx>
    <VueTagFx fx="jelly" fx-speed="lg" fx-ease="spring-sm" variant="primary">Jelly</VueTagFx>
    <VueTagFx fx="shimmer" fx-speed="xl" variant="warning">Shimmer</VueTagFx>
    <VueTagFx fx="glow" variant="error">Glow</VueTagFx>
    <VueTagFx fx="flip" fx-speed="lg" fx-ease="ease-in" variant="success">Flip</VueTagFx>
    <VueTagFx fx="ripple" variant="info">Ripple</VueTagFx>
    <VueTagFx fx="highlight-sweep" fx-speed="lg" fx-ease="ease-out" variant="monochrome">Sweep</VueTagFx>
    <VueTagFx fx="press-pop" variant="primary">Press Pop</VueTagFx>
  </div>
</template>

<script setup>
import { VueTagFx } from "agnosticui-core/tag-fx/vue";
<\/script>
`,j=`import { LitElement, html } from 'lit';
import 'agnosticui-core/tag-fx';

export class TagFxLitExamples extends LitElement {
  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  render() {
    return html\`
      <div class="stacked-mobile mbe4">
        <ag-tag-fx fx="bounce" variant="success">Bounce</ag-tag-fx>
        <ag-tag-fx fx="pulse" variant="info">Pulse</ag-tag-fx>
        <ag-tag-fx fx="jelly" fx-speed="lg" fx-ease="spring-sm" variant="primary">Jelly</ag-tag-fx>
        <ag-tag-fx fx="shimmer" fx-speed="xl" variant="warning">Shimmer</ag-tag-fx>
        <ag-tag-fx fx="glow" variant="error">Glow</ag-tag-fx>
        <ag-tag-fx fx="flip" fx-speed="lg" fx-ease="ease-in" variant="success">Flip</ag-tag-fx>
        <ag-tag-fx fx="ripple" variant="info">Ripple</ag-tag-fx>
        <ag-tag-fx fx="highlight-sweep" fx-speed="lg" fx-ease="ease-out" variant="monochrome">Sweep</ag-tag-fx>
        <ag-tag-fx fx="press-pop" variant="primary">Press Pop</ag-tag-fx>
      </div>
    \`;
  }
}

customElements.define('tagfx-lit-examples', TagFxLitExamples);
`,$=`import { ReactTagFx } from "agnosticui-core/tag-fx/react";

export default function TagFxReactExamples() {
  return (
    <div className="stacked-mobile mbe4">
      <ReactTagFx fx="bounce" variant="success">Bounce</ReactTagFx>
      <ReactTagFx fx="pulse" variant="info">Pulse</ReactTagFx>
      <ReactTagFx fx="jelly" fxSpeed="lg" fxEase="spring-sm" variant="primary">Jelly</ReactTagFx>
      <ReactTagFx fx="shimmer" fxSpeed="xl" variant="warning">Shimmer</ReactTagFx>
      <ReactTagFx fx="glow" variant="error">Glow</ReactTagFx>
      <ReactTagFx fx="flip" fxSpeed="lg" fxEase="ease-in" variant="success">Flip</ReactTagFx>
      <ReactTagFx fx="ripple" variant="info">Ripple</ReactTagFx>
      <ReactTagFx fx="highlight-sweep" fxSpeed="lg" fxEase="ease-out" variant="monochrome">Sweep</ReactTagFx>
      <ReactTagFx fx="press-pop" variant="primary">Press Pop</ReactTagFx>
    </div>
  );
}
`,Y=JSON.parse('{"title":"TagFx","description":"","frontmatter":{},"headers":[],"relativePath":"components/tag-fx.md","filePath":"components/tag-fx.md"}'),I={name:"components/tag-fx.md"},Z=Object.assign(I,{setup(s){return(e,a)=>(u(),k("div",null,[a[1]||(a[1]=o("h1",{id:"tagfx",tabindex:"-1"},[p("TagFx "),o("a",{class:"header-anchor",href:"#tagfx","aria-label":'Permalink to "TagFx"'},"​")],-1)),i(v),a[2]||(a[2]=o("p",null,"TagFx extends the core Tag component with a handful of CSS-only micro-interaction effects.",-1)),a[3]||(a[3]=o("div",{class:"info custom-block"},[o("p",{class:"custom-block-title"},"Opt-in Component"),o("p",null,"TagFx adds a few hundred lines of CSS for animation effects. It's ideal for marketing sites, landing pages, or when visual polish is a priority.")],-1)),a[4]||(a[4]=o("h2",{id:"examples",tabindex:"-1"},[p("Examples "),o("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),i(R,{component:"tag-fx","vue-code":r(L),"lit-code":r(j),"react-code":r($)},{vue:n(()=>[i(V)]),lit:n(()=>[...a[0]||(a[0]=[o("tagfx-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),a[5]||(a[5]=S("",10))]))}});export{Y as __pageData,Z as default};
