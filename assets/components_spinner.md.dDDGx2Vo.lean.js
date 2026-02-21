import{A as c}from"./chunks/AlphaWarning.yC7ZufpQ.js";import"./chunks/Spinner.BAWZdYqW.js";import{s as y}from"./chunks/plugin-vue_export-helper-CHgC5LLL.lGy7RumW.js";import{d,c as p,o as k,r as u,p as m,v as C,P as E,s as A,_ as b,C as v,j as a,G as n,ae as f,a as r,w as F,k as h}from"./chunks/framework.NAAYCHZu.js";import{F as B}from"./chunks/FrameworkExample.Cm-JbUj-.js";import{a as S,x}from"./chunks/Button.CFkPNK98.js";import"./chunks/createLucideIcon.B61Wqv9x.js";import"./chunks/state-CovhUvdr.DWhhlYib.js";import"./chunks/sdk.m.DhOmSlC9.js";import"./chunks/Icon.DjToxxjJ.js";const D=d({name:"VueSpinner",props:{size:{type:String,default:"default"},ariaLabel:{type:String,default:"Loading..."}},setup(t){const i=m(null),s=()=>{const l=i.value;l&&(l.size=t.size,l.ariaLabel=t.ariaLabel)};return C(async()=>{await customElements.whenDefined("ag-spinner"),await E(),s()}),A(()=>{i.value&&s()}),{agComponent:i}}}),q={ref:"agComponent"};function z(t,i,s,l,o,g){return k(),p("ag-spinner",q,[u(t.$slots,"default")],512)}const w=y(D,[["render",z]]),P=d({name:"SpinnerExamples",components:{VueSpinner:w}}),R={class:"mbe4"},V={class:"mbe4"},L={class:"flex flex-col items-center",style:{gap:"24px"}},_={class:"mbe4"};function T(t,i,s,l,o,g){const e=v("VueSpinner");return k(),p("section",null,[a("div",R,[i[0]||(i[0]=a("h2",null,"Default",-1)),n(e)]),a("div",V,[i[1]||(i[1]=a("h2",null,"Sizes",-1)),a("div",L,[n(e,{size:"small"}),n(e),n(e,{size:"large"}),n(e,{size:"xlarge"})])]),a("div",_,[i[2]||(i[2]=a("h2",null,"CSS Shadow Parts Customization",-1)),i[3]||(i[3]=a("p",{class:"mbs2 mbe3"}," Use CSS Shadow Parts to customize the spinner's appearance. ",-1)),n(e,{class:"custom-spinner"})])])}const N=b(P,[["render",T]]);class I extends S{createRenderRoot(){return this}render(){return x`
      <section>
        <div class="mbe4">
          <h2>Default</h2>
          <ag-spinner></ag-spinner>
        </div>
        <div class="mbe4">
          <h2>Sizes</h2>
          <div
            class="flex flex-col items-center"
            style="gap: 24px"
          >
            <ag-spinner size="small"></ag-spinner>
            <ag-spinner></ag-spinner>
            <ag-spinner size="large"></ag-spinner>
            <ag-spinner size="xlarge"></ag-spinner>
          </div>
        </div>
        <div class="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
          <p class="mbs2 mbe3">
            Use CSS Shadow Parts to customize the spinner's appearance.
          </p>
          <ag-spinner class="custom-spinner"></ag-spinner>
        </div>
      </section>
    `}}customElements.define("spinner-lit-examples",I);const U=`<template>
  <section>
    <div class="mbe4">
      <h2>Default</h2>
      <VueSpinner />
    </div>
    <div class="mbe4">
      <h2>Sizes</h2>
      <div
        class="flex flex-col items-center"
        style="gap: 24px"
      >
        <VueSpinner size="small" />
        <VueSpinner />
        <VueSpinner size="large" />
        <VueSpinner size="xlarge" />
      </div>
    </div>
    <div class="mbe4">
      <h2>CSS Shadow Parts Customization</h2>
      <p class="mbs2 mbe3">
        Use CSS Shadow Parts to customize the spinner's appearance.
      </p>
      <VueSpinner class="custom-spinner" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { VueSpinner } from "agnosticui-core/spinner/vue";

export default defineComponent({
  name: "SpinnerExamples",
  components: {
    VueSpinner,
  },
});
<\/script>

<style>
.custom-spinner::part(ag-spinner) {
  --spinner-color: var(--ag-primary);
}
</style>
`,O=`import { LitElement, html } from 'lit';
import 'agnosticui-core/spinner';

export class SpinnerLitExamples extends LitElement {
  // CRITICAL: Must include createRenderRoot() to use light DOM
  // Without this, global CSS utility classes won't work!
  createRenderRoot() {
    return this;
  }

  render() {
    return html\`
      <section>
        <div class="mbe4">
          <h2>Default</h2>
          <ag-spinner></ag-spinner>
        </div>
        <div class="mbe4">
          <h2>Sizes</h2>
          <div
            class="flex flex-col items-center"
            style="gap: 24px"
          >
            <ag-spinner size="small"></ag-spinner>
            <ag-spinner></ag-spinner>
            <ag-spinner size="large"></ag-spinner>
            <ag-spinner size="xlarge"></ag-spinner>
          </div>
        </div>
        <div class="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
          <p class="mbs2 mbe3">
            Use CSS Shadow Parts to customize the spinner's appearance.
          </p>
          <ag-spinner class="custom-spinner"></ag-spinner>
        </div>
      </section>
    \`;
  }
}

// Register the custom element (at the bottom, NOT with decorator)
customElements.define('spinner-lit-examples', SpinnerLitExamples);
`,M=`import { ReactSpinner } from "agnosticui-core/spinner/react";

export default function SpinnerReactExamples() {
  return (
    <section>
      <div className="mbe4">
        <h2>Default</h2>
        <ReactSpinner />
      </div>
      <div className="mbe4">
        <h2>Sizes</h2>
        <div
          className="flex flex-col items-center"
          style={{ gap: '24px' }}
        >
          <ReactSpinner size="small" />
          <ReactSpinner />
          <ReactSpinner size="large" />
          <ReactSpinner size="xlarge" />
        </div>
      </div>
      <div className="mbe4">
        <h2>CSS Shadow Parts Customization</h2>
        <p className="mbs2 mbe3">
          Use CSS Shadow Parts to customize the spinner's appearance.
        </p>
        <ReactSpinner className="custom-spinner" />
      </div>
    </section>
  );
}
`,ss=JSON.parse('{"title":"Spinner","description":"","frontmatter":{},"headers":[],"relativePath":"components/spinner.md","filePath":"components/spinner.md"}'),$={name:"components/spinner.md"},is=Object.assign($,{setup(t){return(i,s)=>(k(),p("div",null,[s[1]||(s[1]=a("h1",{id:"spinner",tabindex:"-1"},[r("Spinner "),a("a",{class:"header-anchor",href:"#spinner","aria-label":'Permalink to "Spinner"'},"​")],-1)),n(c),s[2]||(s[2]=a("p",null,"A spinner component displays a circular rotating animation to indicate loading state or ongoing activity. Use spinners to provide visual feedback when content is loading, processing, or waiting for a response.",-1)),s[3]||(s[3]=a("h2",{id:"examples",tabindex:"-1"},[r("Examples "),a("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),n(B,{component:"spinner","vue-code":h(U),"lit-code":h(O),"react-code":h(M)},{vue:F(()=>[n(N)]),lit:F(()=>[...s[0]||(s[0]=[a("spinner-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),s[4]||(s[4]=f("",35))]))}});export{ss as __pageData,is as default};
