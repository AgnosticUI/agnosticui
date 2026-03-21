import{A as F}from"./chunks/AlphaWarning.CKFYAqLS.js";import{i as y,z as d,a as b,x as A}from"./chunks/property-CemaeiRl.Cea_q1B7.js";import{a as m}from"./chunks/Avatar.Wq-_P_-y.js";import{r as C}from"./chunks/motion.styles.DXtlED6G.js";import{d as E,p as w,c,o as f,r as D,K as B,G as s,k as i,j as n,ag as _,a as k,w as v}from"./chunks/framework.DmF2n0Fc.js";import{F as q}from"./chunks/FrameworkExample.D4gn8Xfe.js";import"./chunks/createLucideIcon.U6K_rCrv.js";import"./chunks/state-CovhUvdr.C-u8O0Fo.js";import"./chunks/sdk.m.Dxhqq5iP.js";import"./chunks/Button.BmTmCFep.js";import"./chunks/Icon.CxPOY7rJ.js";var S=Object.defineProperty,h=(e,t,a,o)=>{for(var r=void 0,x=e.length-1,g;x>=0;x--)(g=e[x])&&(r=g(t,a,r)||r);return r&&S(t,a,r),r};const u=class extends m{constructor(){super(),this._observer=null,this.fxSpeed="md",this.fxEase="ease",this.fxDisabled=!1}connectedCallback(){super.connectedCallback(),this._updateTheme(),this._observer=new MutationObserver(t=>{t.forEach(a=>{a.type==="attributes"&&a.attributeName==="data-theme"&&this._updateTheme()})}),this._observer.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]})}disconnectedCallback(){super.disconnectedCallback(),this._observer&&(this._observer.disconnect(),this._observer=null)}_updateTheme(){var o;const t=document.documentElement.getAttribute("data-theme")==="dark",a=(o=this.shadowRoot)==null?void 0:o.querySelector(".avatar");a instanceof HTMLElement&&(a.style.setProperty("--ag-fx-shadow-opacity",t?"0.8":"0.4"),t&&this.variant==="monochrome"?a.style.setProperty("--ag-fx-sweep-color","rgba(0, 0, 0, 0.6)"):a.style.setProperty("--ag-fx-sweep-color","rgba(255, 255, 255, 0.5)"))}firstUpdated(t){super.firstUpdated(t),this._applyFxClasses(),this._applyFxCustomProperties(),this._updateTheme()}updated(t){super.updated(t),(t.has("fx")||t.has("fxDisabled"))&&this._applyFxClasses(),t.has("variant")&&this._updateTheme(),(t.has("fxSpeed")||t.has("fxEase"))&&this._applyFxCustomProperties()}_applyFxClasses(){var a;const t=(a=this.shadowRoot)==null?void 0:a.querySelector(".avatar");if(t){const o=[];t.classList.forEach(r=>{r.startsWith("ag-fx-")&&o.push(r)}),o.forEach(r=>t.classList.remove(r)),this.fx&&!this.fxDisabled&&t.classList.add(`ag-fx-${this.fx}`),this.fxDisabled?t.classList.add("ag-fx-disabled"):t.classList.remove("ag-fx-disabled")}}_applyFxCustomProperties(){var a;const t=(a=this.shadowRoot)==null?void 0:a.querySelector(".avatar");t instanceof HTMLElement&&(t.style.setProperty("--ag-fx-duration",`var(--ag-fx-duration-${this.fxSpeed})`),t.style.setProperty("--ag-fx-ease",`var(--ag-fx-ease-${this.fxEase})`))}};u.styles=[C,m.styles,y`
      /* ========================================
         FX EFFECT SETUP
         Add necessary CSS properties for effects that need them
         ======================================== */

      /* Shimmer needs a gradient mask */
      .avatar.ag-fx-shimmer {
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
      .avatar.ag-fx-ripple {
        overflow: visible;
      }

      /* Highlight Sweep needs a gradient background overlay */
      .avatar.ag-fx-highlight-sweep {
        position: relative;
        overflow: hidden;
      }

      .avatar.ag-fx-highlight-sweep::before {
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
         Applied to target element (.avatar)
         ======================================== */

      :host([fx="bounce"]) .avatar,
      :host([fx="flip"]) .avatar,
      :host([fx="jelly"]) .avatar {
        animation-iteration-count: 1;
      }

      /* Hover-triggered effects */
      :host([fx="bounce"]:hover) .avatar {
        animation: ag-fx-bounce var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      :host([fx="pulse"]:hover) .avatar {
        animation: ag-fx-pulse var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      :host([fx="jelly"]:hover) .avatar {
        animation: ag-fx-jelly var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      :host([fx="shimmer"]:hover) .avatar {
        animation: ag-fx-shimmer var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      :host([fx="glow"]:hover) .avatar {
        animation: ag-fx-glow var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      :host([fx="flip"]:hover) .avatar {
        animation: ag-fx-flip var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      :host([fx="ripple"]:hover) .avatar {
        animation: ag-fx-ripple var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      :host([fx="highlight-sweep"]:hover) .avatar::before {
        animation: ag-fx-highlight-sweep var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      /* Active/press effects */
      .avatar.ag-fx-press-pop {
        cursor: pointer;
      }

      .avatar.ag-fx-press-pop:active {
        animation: ag-fx-press-pop var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      /* Entrance effects */
      .avatar.ag-fx-slide-in {
        animation: ag-fx-slide-in var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      /* Disabled state */
      .avatar.ag-fx-disabled {
        animation: none !important;
      }

      .avatar.ag-fx-disabled::before {
        animation: none !important;
      }

      /* Reduced motion support */
      @media (prefers-reduced-motion: reduce) {
        .avatar.ag-fx-bounce,
        .avatar.ag-fx-pulse,
        .avatar.ag-fx-jelly,
        .avatar.ag-fx-shimmer,
        .avatar.ag-fx-glow,
        .avatar.ag-fx-flip,
        .avatar.ag-fx-ripple,
        .avatar.ag-fx-highlight-sweep,
        .avatar.ag-fx-press-pop,
        .avatar.ag-fx-slide-in {
          animation-duration: 0.01ms !important;
          transition-duration: 0.01ms !important;
        }
      }
    `];let p=u;h([d({type:String,reflect:!0})],p.prototype,"fx");h([d({type:String,attribute:"fx-speed",reflect:!0})],p.prototype,"fxSpeed");h([d({type:String,attribute:"fx-ease",reflect:!0})],p.prototype,"fxEase");h([d({type:Boolean,attribute:"fx-disabled",reflect:!0})],p.prototype,"fxDisabled");customElements.get("ag-avatar-fx")||customElements.define("ag-avatar-fx",p);const R=["variant","size","shape","aria-label","img-src","img-alt",".text","fx","fx-speed","fx-ease",".fxDisabled"],l=E({__name:"VueAvatarFx",props:{text:{default:""},imgSrc:{default:""},imgAlt:{default:""},size:{default:"md"},shape:{default:"circle"},variant:{default:"default"},ariaLabel:{default:""},fx:{},fxSpeed:{default:"md"},fxEase:{default:"ease"},fxDisabled:{type:Boolean,default:!1}},setup(e){const t=w(null);return(a,o)=>(f(),c("ag-avatar-fx",B({ref_key:"agComponent",ref:t,variant:e.variant,size:e.size,shape:e.shape,"aria-label":e.ariaLabel,"img-src":e.imgSrc,"img-alt":e.imgAlt,".text":e.text,fx:e.fx,"fx-speed":e.fxSpeed,"fx-ease":e.fxEase,".fxDisabled":e.fxDisabled},a.$attrs),[D(a.$slots,"default")],48,R))}}),P={class:"stacked-mobile mbe4"},L={__name:"AvatarFxExamples",setup(e){return(t,a)=>(f(),c("div",P,[s(i(l),{fx:"bounce",variant:"info",text:"AB"}),s(i(l),{fx:"pulse",variant:"success",text:"CD"}),s(i(l),{fx:"jelly","fx-speed":"lg","fx-ease":"spring-sm",variant:"warning",text:"EF"}),s(i(l),{fx:"shimmer","fx-speed":"xl",variant:"error",text:"GH"}),s(i(l),{fx:"glow",variant:"monochrome",text:"IJ"}),s(i(l),{fx:"flip","fx-speed":"lg","fx-ease":"ease-in",variant:"info",shape:"rounded",text:"KL"}),s(i(l),{fx:"ripple",variant:"success",shape:"square",text:"MN"}),s(i(l),{fx:"highlight-sweep","fx-speed":"lg","fx-ease":"ease-out",variant:"monochrome",text:"OP"}),s(i(l),{fx:"press-pop",variant:"warning",text:"QR"})]))}};class T extends b{createRenderRoot(){return this}render(){return A`
      <div class="stacked-mobile mbe4">
        <ag-avatar-fx fx="bounce" variant="info" text="AB"></ag-avatar-fx>
        <ag-avatar-fx fx="pulse" variant="success" text="CD"></ag-avatar-fx>
        <ag-avatar-fx fx="jelly" fx-speed="lg" fx-ease="spring-sm" variant="warning" text="EF"></ag-avatar-fx>
        <ag-avatar-fx fx="shimmer" fx-speed="xl" variant="error" text="GH"></ag-avatar-fx>
        <ag-avatar-fx fx="glow" variant="monochrome" text="IJ"></ag-avatar-fx>
        <ag-avatar-fx fx="flip" fx-speed="lg" fx-ease="ease-in" variant="info" shape="rounded" text="KL"></ag-avatar-fx>
        <ag-avatar-fx fx="ripple" variant="success" shape="square" text="MN"></ag-avatar-fx>
        <ag-avatar-fx fx="highlight-sweep" fx-speed="lg" fx-ease="ease-out" variant="monochrome" text="OP"></ag-avatar-fx>
        <ag-avatar-fx fx="press-pop" variant="warning" text="QR"></ag-avatar-fx>
      </div>
    `}}customElements.define("avatarfx-lit-examples",T);const V=`<template>
  <div class="stacked-mobile mbe4">
    <VueAvatarFx fx="bounce" variant="info" text="AB" />
    <VueAvatarFx fx="pulse" variant="success" text="CD" />
    <VueAvatarFx fx="jelly" fx-speed="lg" fx-ease="spring-sm" variant="warning" text="EF" />
    <VueAvatarFx fx="shimmer" fx-speed="xl" variant="error" text="GH" />
    <VueAvatarFx fx="glow" variant="monochrome" text="IJ" />
    <VueAvatarFx fx="flip" fx-speed="lg" fx-ease="ease-in" variant="info" shape="rounded" text="KL" />
    <VueAvatarFx fx="ripple" variant="success" shape="square" text="MN" />
    <VueAvatarFx fx="highlight-sweep" fx-speed="lg" fx-ease="ease-out" variant="monochrome" text="OP" />
    <VueAvatarFx fx="press-pop" variant="warning" text="QR" />
  </div>
</template>

<script setup>
import { VueAvatarFx } from "agnosticui-core/avatar-fx/vue";
<\/script>
`,j=`import { LitElement, html } from 'lit';
import 'agnosticui-core/avatar-fx';

export class AvatarFxLitExamples extends LitElement {
  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  render() {
    return html\`
      <div class="stacked-mobile mbe4">
        <ag-avatar-fx fx="bounce" variant="info" text="AB"></ag-avatar-fx>
        <ag-avatar-fx fx="pulse" variant="success" text="CD"></ag-avatar-fx>
        <ag-avatar-fx fx="jelly" fx-speed="lg" fx-ease="spring-sm" variant="warning" text="EF"></ag-avatar-fx>
        <ag-avatar-fx fx="shimmer" fx-speed="xl" variant="error" text="GH"></ag-avatar-fx>
        <ag-avatar-fx fx="glow" variant="monochrome" text="IJ"></ag-avatar-fx>
        <ag-avatar-fx fx="flip" fx-speed="lg" fx-ease="ease-in" variant="info" shape="rounded" text="KL"></ag-avatar-fx>
        <ag-avatar-fx fx="ripple" variant="success" shape="square" text="MN"></ag-avatar-fx>
        <ag-avatar-fx fx="highlight-sweep" fx-speed="lg" fx-ease="ease-out" variant="monochrome" text="OP"></ag-avatar-fx>
        <ag-avatar-fx fx="press-pop" variant="warning" text="QR"></ag-avatar-fx>
      </div>
    \`;
  }
}

customElements.define('avatarfx-lit-examples', AvatarFxLitExamples);
`,I=`import { ReactAvatarFx } from "agnosticui-core/avatar-fx/react";

export default function AvatarFxReactExamples() {
  return (
    <div className="stacked-mobile mbe4">
      <ReactAvatarFx fx="bounce" variant="info" text="AB" />
      <ReactAvatarFx fx="pulse" variant="success" text="CD" />
      <ReactAvatarFx fx="jelly" fxSpeed="lg" fxEase="spring-sm" variant="warning" text="EF" />
      <ReactAvatarFx fx="shimmer" fxSpeed="xl" variant="error" text="GH" />
      <ReactAvatarFx fx="glow" variant="monochrome" text="IJ" />
      <ReactAvatarFx fx="flip" fxSpeed="lg" fxEase="ease-in" variant="info" shape="rounded" text="KL" />
      <ReactAvatarFx fx="ripple" variant="success" shape="square" text="MN" />
      <ReactAvatarFx fx="highlight-sweep" fxSpeed="lg" fxEase="ease-out" variant="monochrome" text="OP" />
      <ReactAvatarFx fx="press-pop" variant="warning" text="QR" />
    </div>
  );
}
`,Y=JSON.parse('{"title":"AvatarFx","description":"","frontmatter":{},"headers":[],"relativePath":"components/avatar-fx.md","filePath":"components/avatar-fx.md"}'),N={name:"components/avatar-fx.md"},Z=Object.assign(N,{setup(e){return(t,a)=>(f(),c("div",null,[a[1]||(a[1]=n("h1",{id:"avatarfx",tabindex:"-1"},[k("AvatarFx "),n("a",{class:"header-anchor",href:"#avatarfx","aria-label":'Permalink to "AvatarFx"'},"​")],-1)),s(F),a[2]||(a[2]=n("p",null,"AvatarFx extends the core Avatar component with a handful of CSS-only micro-interaction effects.",-1)),a[3]||(a[3]=n("div",{class:"info custom-block"},[n("p",{class:"custom-block-title"},"Opt-in Component"),n("p",null,"AvatarFx adds a few hundred lines of CSS for animation effects. It's ideal for marketing sites, landing pages, or when visual polish is a priority.")],-1)),a[4]||(a[4]=n("h2",{id:"examples",tabindex:"-1"},[k("Examples "),n("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),s(q,{component:"avatar-fx","vue-code":i(V),"lit-code":i(j),"react-code":i(I)},{vue:v(()=>[s(L)]),lit:v(()=>[...a[0]||(a[0]=[n("avatarfx-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),a[5]||(a[5]=_("",10))]))}});export{Y as __pageData,Z as default};
