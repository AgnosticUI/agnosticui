import{A as f}from"./chunks/AlphaWarning.yC7ZufpQ.js";import{i as C,z as m,a as u,x as F}from"./chunks/Button.Bujdzq23.js";import{s as x}from"./chunks/plugin-vue_export-helper-CHgC5LLL.lGy7RumW.js";import{d as y,c as p,o as h,r as L,K as E,p as S,v as A,P as z,s as D,_ as w,C as P,j as e,G as l,ae as _,a as k,w as g,k as d}from"./chunks/framework.NAAYCHZu.js";import{F as B}from"./chunks/FrameworkExample.Vj5DwYx5.js";import"./chunks/createLucideIcon.B61Wqv9x.js";import"./chunks/Icon.odq14qpJ.js";var V=Object.defineProperty,b=(i,s,a,r)=>{for(var t=void 0,o=i.length-1,n;o>=0;o--)(n=i[o])&&(t=n(s,a,t)||t);return t&&V(s,a,t),t};const v=class extends u{constructor(){super(...arguments),this.size="default",this.ariaLabel="Loading..."}render(){return F`
      <div
        class="loader"
        part="ag-loader"
        aria-busy="true"
      >
        <span class="loader-label" role="progressbar" aria-label="Loading" part="ag-loader-label">
          <slot>${this.ariaLabel}</slot>
        </span>
      </div>
    `}};v.styles=C`
    :host {
      display: inline-block;
      box-sizing: border-box;
    }

    .loader {
      --loading-size: var(--ag-space-4); /* 1rem = 16px */

      position: relative;
      box-sizing: border-box;
      animation: blink 1s infinite;
      animation-delay: 250ms;

      /* Make up for negative positioning */
      margin-inline-start: var(--loading-size);

      /* Initially set zero until aria-busy becomes true */
      opacity: 0%;
    }

    .loader,
    .loader::before,
    .loader::after {
      width: calc(var(--loading-size) / 2);
      height: calc(var(--loading-size) / 2);
      border-radius: var(--ag-radius-md);
      background-color: var(--loading-color, var(--ag-text-primary));
    }

    /* SMALL */
    :host([size="small"]) .loader {
      --loading-size: var(--ag-space-3); /* 0.75rem = 12px */
    }

    /* LARGE */
    :host([size="large"]) .loader {
      --loading-size: var(--ag-space-5); /* 1.25rem = 20px */
    }

    :host([size="large"]) .loader,
    :host([size="large"]) .loader::before,
    :host([size="large"]) .loader::after {
      border-radius: var(--ag-radius-lg);
    }

    .loader::before,
    .loader::after {
      content: "";
      display: inline-block;
      position: absolute;
      top: 0;
      animation: blink 1s infinite;
    }

    .loader::before {
      inset-inline-start: calc(-1 * var(--loading-size));
      animation-delay: 0s;
    }

    .loader::after {
      inset-inline-start: var(--loading-size);
      animation-delay: 500ms;
    }

    /**
     * Setting aria-busy to true results in corresponding opacity change to visually show loader.
     */
    .loader[aria-busy="true"] {
      opacity: 100%;
    }

    @keyframes blink {
      50% {
        background-color: transparent;
      }
    }

    @media (prefers-reduced-motion), (update: slow) {
      .loader,
      .loader::before,
      .loader::after {
        animation-duration: 0.001ms !important;
      }
    }

    /* Screen reader only text */
    .loader-label {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border-width: 0;
    }
  `;let c=v;b([m({type:String,reflect:!0})],c.prototype,"size");b([m({type:String,reflect:!0,attribute:"aria-label"})],c.prototype,"ariaLabel");customElements.get("ag-loader")||customElements.define("ag-loader",c);const R=y({name:"VueLoader",props:{size:{type:String,default:"default"},ariaLabel:{type:String,default:"Loading..."}},setup(i){const s=S(null),a=()=>{const r=s.value;r&&(r.size=i.size,r.ariaLabel=i.ariaLabel)};return A(async()=>{await customElements.whenDefined("ag-loader"),await z(),a()}),D(()=>{s.value&&a()}),{agComponent:s}}});function T(i,s,a,r,t,o){return h(),p("ag-loader",E({ref:"agComponent"},i.$attrs),[L(i.$slots,"default")],16)}const q=x(R,[["render",T]]),N=y({name:"LoaderExamples",components:{VueLoader:q}}),$={class:"mbe4"},I={class:"mbe4"},U={class:"flex flex-col items-center",style:{gap:"24px"}},M={class:"mbe4"};function j(i,s,a,r,t,o){const n=P("VueLoader");return h(),p("section",null,[e("div",$,[s[0]||(s[0]=e("h2",null,"Default",-1)),l(n)]),e("div",I,[s[1]||(s[1]=e("h2",null,"Sizes",-1)),e("div",U,[l(n,{size:"small"}),l(n),l(n,{size:"large"})])]),e("div",M,[s[2]||(s[2]=e("h2",null,"CSS Shadow Parts Customization",-1)),s[3]||(s[3]=e("p",{class:"mbs2 mbe3"}," Use CSS Shadow Parts to customize the loader's appearance. ",-1)),l(n,{class:"custom-loader"})])])}const O=w(N,[["render",j]]);class W extends u{createRenderRoot(){return this}render(){return F`
      <section>
        <div class="mbe4">
          <h2>Default</h2>
          <ag-loader></ag-loader>
        </div>
        <div class="mbe4">
          <h2>Sizes</h2>
          <div class="flex flex-col items-center" style="gap: 24px">
            <ag-loader size="small"></ag-loader>
            <ag-loader></ag-loader>
            <ag-loader size="large"></ag-loader>
          </div>
        </div>
        <div class="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
          <p class="mbs2 mbe3">
            Use CSS Shadow Parts to customize the loader's appearance.
          </p>
          <ag-loader class="custom-loader"></ag-loader>
        </div>
      </section>
    `}}customElements.define("loader-lit-examples",W);const G=`<template>
  <section>
    <div class="mbe4">
      <h2>Default</h2>
      <VueLoader />
    </div>
    <div class="mbe4">
      <h2>Sizes</h2>
      <div
        class="flex flex-col items-center"
        style="gap: 24px"
      >
        <VueLoader size="small" />
        <VueLoader />
        <VueLoader size="large" />
      </div>
    </div>
    <div class="mbe4">
      <h2>CSS Shadow Parts Customization</h2>
      <p class="mbs2 mbe3">
        Use CSS Shadow Parts to customize the loader's appearance.
      </p>
      <VueLoader class="custom-loader" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { VueLoader } from "agnosticui-core/loader/vue";

export default defineComponent({
  name: "LoaderExamples",
  components: {
    VueLoader,
  },
});
<\/script>

<style>
.custom-loader::part(ag-loader) {
  --loading-color: var(--ag-primary);
}
</style>
`,K=`import { LitElement, html } from 'lit';
import 'agnosticui-core/loader';

export class LoaderLitExamples extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html\`
      <section>
        <div class="mbe4">
          <h2>Default</h2>
          <ag-loader></ag-loader>
        </div>
        <div class="mbe4">
          <h2>Sizes</h2>
          <div class="flex flex-col items-center" style="gap: 24px">
            <ag-loader size="small"></ag-loader>
            <ag-loader></ag-loader>
            <ag-loader size="large"></ag-loader>
          </div>
        </div>
        <div class="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
          <p class="mbs2 mbe3">
            Use CSS Shadow Parts to customize the loader's appearance.
          </p>
          <ag-loader class="custom-loader"></ag-loader>
        </div>
      </section>
    \`;
  }
}

// Register the custom element
customElements.define('loader-lit-examples', LoaderLitExamples);
`,J=`import { ReactLoader } from "agnosticui-core/loader/react";

export default function LoaderReactExamples() {
  return (
    <section>
      <div className="mbe4">
        <h2>Default</h2>
        <ReactLoader />
      </div>
      <div className="mbe4">
        <h2>Sizes</h2>
        <div className="flex flex-col items-center" style={{ gap: "24px" }}>
          <ReactLoader size="small" />
          <ReactLoader />
          <ReactLoader size="large" />
        </div>
      </div>
      <div className="mbe4">
        <h2>CSS Shadow Parts Customization</h2>
        <p className="mbs2 mbe3">
          Use CSS Shadow Parts to customize the loader's appearance.
        </p>
        <ReactLoader className="custom-loader" />
      </div>
    </section>
  );
}
`,ta=JSON.parse('{"title":"Loader","description":"","frontmatter":{},"headers":[],"relativePath":"components/loader.md","filePath":"components/loader.md"}'),H={name:"components/loader.md"},na=Object.assign(H,{setup(i){return(s,a)=>(h(),p("div",null,[a[1]||(a[1]=e("h1",{id:"loader",tabindex:"-1"},[k("Loader "),e("a",{class:"header-anchor",href:"#loader","aria-label":'Permalink to "Loader"'},"​")],-1)),l(f),a[2]||(a[2]=e("p",null,"Brief description of what the component does and when to use it.",-1)),a[3]||(a[3]=e("h2",{id:"examples",tabindex:"-1"},[k("Examples "),e("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),l(B,{component:"loader","vue-code":d(G),"lit-code":d(K),"react-code":d(J)},{vue:g(()=>[l(O)]),lit:g(()=>[...a[0]||(a[0]=[e("loader-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),a[4]||(a[4]=_("",15))]))}});export{ta as __pageData,na as default};
