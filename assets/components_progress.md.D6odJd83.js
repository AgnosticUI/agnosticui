import{A as c}from"./chunks/AlphaWarning.yC7ZufpQ.js";import"./chunks/Progress.DPiFnIYN.js";import{s as u}from"./chunks/plugin-vue_export-helper-CHgC5LLL.lGy7RumW.js";import{d,c as r,o as k,r as y,K as m,p as b,v as C,P as v,s as E,_ as B,C as A,j as i,G as n,a as t,ae as P,w as o,k as h}from"./chunks/framework.NAAYCHZu.js";import{F as D}from"./chunks/FrameworkExample.Vj5DwYx5.js";import{a as f,x}from"./chunks/Button.Bujdzq23.js";import"./chunks/createLucideIcon.B61Wqv9x.js";import"./chunks/Icon.odq14qpJ.js";const q=d({name:"VueProgress",props:{value:{type:Number,default:void 0},max:{type:Number,default:100},label:{type:String,default:""}},setup(e){const s=b(null),a=()=>{const l=s.value;l&&(l.value=e.value,l.max=e.max,l.label=e.label)};return C(async()=>{await customElements.whenDefined("ag-progress"),await v(),a()}),E(()=>{s.value&&a()}),{agComponent:s}}});function w(e,s,a,l,F,g){return k(),r("ag-progress",m({ref:"agComponent"},e.$attrs),[y(e.$slots,"default")],16)}const S=u(q,[["render",w]]),z=d({name:"ProgressExamples",components:{VueProgress:S}}),V={class:"mbe4"},T={class:"mbe4"},L={class:"mbe4"},I={class:"mbe4"};function R(e,s,a,l,F,g){const p=A("VueProgress");return k(),r("section",null,[i("div",V,[s[0]||(s[0]=i("h2",null,"Indeterminate Progress",-1)),s[1]||(s[1]=i("p",{class:"mbs2 mbe3"},[t("When no "),i("code",null,"value"),t(" is provided, the progress bar is indeterminate.")],-1)),n(p,{label:"Loading..."})]),i("div",T,[s[2]||(s[2]=i("h2",null,"Progress with Value",-1)),s[3]||(s[3]=i("p",{class:"mbs2 mbe3"},[t("Set the "),i("code",null,"value"),t(" prop to a number to show progress.")],-1)),n(p,{value:50,label:"50% complete"})]),i("div",L,[s[4]||(s[4]=i("h2",null,"Progress with Custom Max",-1)),s[5]||(s[5]=i("p",{class:"mbs2 mbe3"},[t("Set the "),i("code",null,"max"),t(" prop to a number to define the maximum value.")],-1)),n(p,{value:150,max:200,label:"150 of 200"})]),i("div",I,[s[6]||(s[6]=i("h2",null,"CSS Shadow Parts Customization",-1)),s[7]||(s[7]=i("p",{class:"mbs2 mbe3"},"Use CSS Shadow Parts to customize the component's appearance.",-1)),n(p,{value:75,label:"Customized progress",class:"custom-progress"})])])}const U=B(z,[["render",R]]);class N extends f{createRenderRoot(){return this}render(){return x`
      <section>
        <div class="mbe4">
          <h2>Indeterminate Progress</h2>
          <p class="mbs2 mbe3">When no <code>value</code> is provided, the progress bar is indeterminate.</p>
          <ag-progress label="Loading..."></ag-progress>
        </div>
        <div class="mbe4">
          <h2>Progress with Value</h2>
          <p class="mbs2 mbe3">Set the <code>value</code> prop to a number to show progress.</p>
          <ag-progress
            value="50"
            label="50% complete"
          ></ag-progress>
        </div>
        <div class="mbe4">
          <h2>Progress with Custom Max</h2>
          <p class="mbs2 mbe3">Set the <code>max</code> prop to a number to define the maximum value.</p>
          <ag-progress
            value="150"
            max="200"
            label="150 of 200"
          ></ag-progress>
        </div>
        <div class="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
          <p class="mbs2 mbe3">Use CSS Shadow Parts to customize the component's appearance.</p>
          <ag-progress
            value="75"
            label="Customized progress"
            class="custom-progress"
          ></ag-progress>
        </div>
      </section>

      <style>
        .custom-progress::part(ag-progress-bar) {
          background-color: var(--ag-purple-100);
          height: 1.5rem;
        }

        .custom-progress::part(ag-progress-bar)::-webkit-progress-value {
          background-color: var(--ag-purple-500);
        }

        .custom-progress::part(ag-progress-bar)::-moz-progress-bar {
          background-color: var(--ag-purple-500);
        }
      </style>
    `}}customElements.define("progress-lit-examples",N);const _=`<template>
  <section>
    <div class="mbe4">
      <h2>Indeterminate Progress</h2>
      <p class="mbs2 mbe3">When no <code>value</code> is provided, the progress bar is indeterminate.</p>
      <VueProgress label="Loading..." />
    </div>
    <div class="mbe4">
      <h2>Progress with Value</h2>
      <p class="mbs2 mbe3">Set the <code>value</code> prop to a number to show progress.</p>
      <VueProgress
        :value="50"
        label="50% complete"
      />
    </div>
    <div class="mbe4">
      <h2>Progress with Custom Max</h2>
      <p class="mbs2 mbe3">Set the <code>max</code> prop to a number to define the maximum value.</p>
      <VueProgress
        :value="150"
        :max="200"
        label="150 of 200"
      />
    </div>
    <div class="mbe4">
      <h2>CSS Shadow Parts Customization</h2>
      <p class="mbs2 mbe3">Use CSS Shadow Parts to customize the component's appearance.</p>
      <VueProgress
        :value="75"
        label="Customized progress"
        class="custom-progress"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { VueProgress } from "agnosticui-core/progress/vue";

export default defineComponent({
  name: "ProgressExamples",
  components: {
    VueProgress,
  },
});
<\/script>

<style>
.custom-progress::part(ag-progress-bar) {
  background-color: var(--ag-purple-100);
  height: 1.5rem;
}

.custom-progress::part(ag-progress-bar)::-webkit-progress-value {
  background-color: var(--ag-purple-500);
}

.custom-progress::part(ag-progress-bar)::-moz-progress-bar {
  background-color: var(--ag-purple-500);
}
</style>
`,$=`import { LitElement, html } from 'lit';
import 'agnosticui-core/progress';

export class ProgressLitExamples extends LitElement {
  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  render() {
    return html\`
      <section>
        <div class="mbe4">
          <h2>Indeterminate Progress</h2>
          <p class="mbs2 mbe3">When no <code>value</code> is provided, the progress bar is indeterminate.</p>
          <ag-progress label="Loading..."></ag-progress>
        </div>
        <div class="mbe4">
          <h2>Progress with Value</h2>
          <p class="mbs2 mbe3">Set the <code>value</code> prop to a number to show progress.</p>
          <ag-progress
            value="50"
            label="50% complete"
          ></ag-progress>
        </div>
        <div class="mbe4">
          <h2>Progress with Custom Max</h2>
          <p class="mbs2 mbe3">Set the <code>max</code> prop to a number to define the maximum value.</p>
          <ag-progress
            value="150"
            max="200"
            label="150 of 200"
          ></ag-progress>
        </div>
        <div class="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
          <p class="mbs2 mbe3">Use CSS Shadow Parts to customize the component's appearance.</p>
          <ag-progress
            value="75"
            label="Customized progress"
            class="custom-progress"
          ></ag-progress>
        </div>
      </section>

      <style>
        .custom-progress::part(ag-progress-bar) {
          background-color: var(--ag-purple-100);
          height: 1.5rem;
        }

        .custom-progress::part(ag-progress-bar)::-webkit-progress-value {
          background-color: var(--ag-purple-500);
        }

        .custom-progress::part(ag-progress-bar)::-moz-progress-bar {
          background-color: var(--ag-purple-500);
        }
      </style>
    \`;
  }
}

// Register the custom element
customElements.define('progress-lit-examples', ProgressLitExamples);
`,M=`import { ReactProgress } from "agnosticui-core/progress/react";

export default function ProgressReactExamples() {
  return (
    <section>
      <div className="mbe4">
        <h2>Indeterminate Progress</h2>
        <p className="mbs2 mbe3">
          When no <code>value</code> is provided, the progress bar is indeterminate.
        </p>
        <ReactProgress label="Loading..." />
      </div>
      <div className="mbe4">
        <h2>Progress with Value</h2>
        <p className="mbs2 mbe3">
          Set the <code>value</code> prop to a number to show progress.
        </p>
        <ReactProgress value={50} label="50% complete" />
      </div>
      <div className="mbe4">
        <h2>Progress with Custom Max</h2>
        <p className="mbs2 mbe3">
          Set the <code>max</code> prop to a number to define the maximum value.
        </p>
        <ReactProgress value={150} max={200} label="150 of 200" />
      </div>
      <div className="mbe4">
        <h2>CSS Shadow Parts Customization</h2>
        <p className="mbs2 mbe3">
          Use CSS Shadow Parts to customize the component's appearance.
        </p>
        <ReactProgress
          value={75}
          label="Customized progress"
          className="custom-progress"
        />
      </div>
    </section>
  );
}
`,Y=JSON.parse('{"title":"Progress","description":"","frontmatter":{},"headers":[],"relativePath":"components/progress.md","filePath":"components/progress.md"}'),W={name:"components/progress.md"},Z=Object.assign(W,{setup(e){return(s,a)=>(k(),r("div",null,[a[1]||(a[1]=i("h1",{id:"progress",tabindex:"-1"},[t("Progress "),i("a",{class:"header-anchor",href:"#progress","aria-label":'Permalink to "Progress"'},"​")],-1)),n(c),a[2]||(a[2]=i("p",null,"A progress component is used to display the progress of a task. It can show determinate progress (with a specific value) or indeterminate progress (loading state without a known duration).",-1)),a[3]||(a[3]=i("h2",{id:"examples",tabindex:"-1"},[t("Examples "),i("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),n(D,{component:"progress","vue-code":h(_),"lit-code":h($),"react-code":h(M)},{vue:o(()=>[n(U)]),lit:o(()=>[...a[0]||(a[0]=[i("progress-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),a[4]||(a[4]=P(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The framework examples below <code>import</code> AgnosticUI as an <code>npm</code> package. Alternatively, you can use the <strong>CLI for complete control, AI/LLM visibility, and full code ownership</strong>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> init</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> --framework</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> FRAMEWORK</span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;"> # react, vue, lit, svelte, etc.</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> add</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> Progress</span></span></code></pre></div><p>The CLI copies source code directly into your project, giving you full visibility and control. After running <code>npx ag add</code>, you&#39;ll receive exact import instructions.</p></div><details class="details custom-block"><summary>Vue</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueProgress</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> :value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;50&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> :max</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;100&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Loading...&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  </span></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">  &lt;!-- Indeterminate progress (no value) --&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueProgress</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Processing...&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  </span></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">  &lt;!-- Custom size --&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueProgress</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> :value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;75&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> :max</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;100&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Uploading...&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> size</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;large&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> lang</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;ts&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { defineComponent } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;vue&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { VueProgress } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;agnosticui-core/Progress/vue/VueProgress&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> defineComponent</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">({</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  components: { VueProgress }</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">})</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><details class="details custom-block"><summary>React</summary><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { ReactProgress } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;agnosticui-core/Progress/react/ReactProgress&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> function</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> Example</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">() </span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  return</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactProgress</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">50</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> max</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">100</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Loading...&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      </span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">      {</span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* Indeterminate progress (no value) */</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactProgress</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Processing...&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      </span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">      {</span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* Custom size */</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactProgress</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> value</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">75</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> max</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">100</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Uploading...&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> size</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;large&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  );</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div></details><details class="details custom-block"><summary>Lit (Web Components)</summary><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;module&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  import</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;agnosticui-core/Progress/core/Progress&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">&lt;!-- Determinate progress --&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-progress</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;50&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> max</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;100&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Loading...&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-progress</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">&lt;!-- Indeterminate progress (no value attribute) --&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-progress</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Processing...&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-progress</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">&lt;!-- Custom size --&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-progress</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;75&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> max</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;100&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Uploading...&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> size</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;large&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-progress</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div><p><strong>Using property binding in Lit templates:</strong></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { html } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;lit&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;agnosticui-core/Progress/core/Progress&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> template</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> html</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">\`</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">  &lt;ag-progress .value=\${</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">50</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">} .max=\${</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">100</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">} .label=\${&quot;Loading...&quot;}&gt;&lt;/ag-progress&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">\`</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span></code></pre></div></details><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><table class="ag-table ag-table--striped"><thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>value</code></td><td><code>number | undefined</code></td><td><code>undefined</code></td><td>The current value of the progress bar. If not provided, the progress bar is indeterminate.</td></tr><tr><td><code>max</code></td><td><code>number</code></td><td><code>100</code></td><td>The maximum value of the progress bar.</td></tr><tr><td><code>label</code></td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>An accessible label for the progress bar. This label is visually hidden but announced by screen readers.</td></tr><tr><td><code>size</code></td><td><code>&#39;small&#39; | &#39;medium&#39; | &#39;large&#39;</code></td><td><code>&#39;medium&#39;</code></td><td>Size of the progress bar.</td></tr></tbody></table><h2 id="css-shadow-parts" tabindex="-1">CSS Shadow Parts <a class="header-anchor" href="#css-shadow-parts" aria-label="Permalink to &quot;CSS Shadow Parts&quot;">​</a></h2><table class="ag-table ag-table--striped"><thead><tr><th>Part</th><th>Description</th></tr></thead><tbody><tr><td><code>ag-progress-wrapper</code></td><td>The main container element for the component</td></tr><tr><td><code>progress-label</code></td><td>The visually hidden label element</td></tr><tr><td><code>ag-progress-bar</code></td><td>The native <code>&lt;progress&gt;</code> element</td></tr></tbody></table><h2 id="css-custom-properties" tabindex="-1">CSS Custom Properties <a class="header-anchor" href="#css-custom-properties" aria-label="Permalink to &quot;CSS Custom Properties&quot;">​</a></h2><p>The Progress component can be customized using CSS custom properties:</p><table class="ag-table ag-table--striped"><thead><tr><th>Property</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code>--ag-progress-width</code></td><td>Width of the progress bar</td><td><code>100%</code></td></tr><tr><td><code>--ag-progress-height</code></td><td>Height of the progress bar</td><td>Size-dependent</td></tr></tbody></table><h3 id="customization-example" tabindex="-1">Customization Example <a class="header-anchor" href="#customization-example" aria-label="Permalink to &quot;Customization Example&quot;">​</a></h3><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* Custom width */</span></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-progress</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">  --ag-progress-width</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">300</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* Custom styling via shadow parts */</span></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-progress</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-progress-bar</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  border-radius</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">4</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-progress</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-progress-bar</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">)</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">::-webkit-progress-value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  background</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">linear-gradient</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">90</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">deg</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">#3b82f6</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">#8b5cf6</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-progress</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-progress-bar</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">)</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">::-moz-progress-bar</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  background</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">linear-gradient</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">90</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">deg</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">#3b82f6</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">#8b5cf6</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div><h2 id="sizes" tabindex="-1">Sizes <a class="header-anchor" href="#sizes" aria-label="Permalink to &quot;Sizes&quot;">​</a></h2><p>The Progress component supports three sizes:</p><ul><li><strong><code>small</code></strong>: Compact progress bar (height: <code>var(--ag-space-2)</code>)</li><li><strong><code>medium</code></strong> (default): Standard progress bar (height: <code>var(--ag-space-3)</code>)</li><li><strong><code>large</code></strong>: Prominent progress bar (height: <code>var(--ag-space-4)</code>)</li></ul><h2 id="determinate-vs-indeterminate" tabindex="-1">Determinate vs Indeterminate <a class="header-anchor" href="#determinate-vs-indeterminate" aria-label="Permalink to &quot;Determinate vs Indeterminate&quot;">​</a></h2><h3 id="determinate-progress" tabindex="-1">Determinate Progress <a class="header-anchor" href="#determinate-progress" aria-label="Permalink to &quot;Determinate Progress&quot;">​</a></h3><p>Shows a specific completion percentage. Use when you know the progress amount:</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueProgress</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> :</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">75</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> :</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">max</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">100</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;75% complete&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span></code></pre></div><h3 id="indeterminate-progress" tabindex="-1">Indeterminate Progress <a class="header-anchor" href="#indeterminate-progress" aria-label="Permalink to &quot;Indeterminate Progress&quot;">​</a></h3><p>Shows an animated loading state. Use when progress duration is unknown:</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueProgress</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Loading...&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span></code></pre></div><p>The indeterminate state displays an animated gradient that moves across the progress bar.</p><h2 id="accessibility" tabindex="-1">Accessibility <a class="header-anchor" href="#accessibility" aria-label="Permalink to &quot;Accessibility&quot;">​</a></h2><p>The Progress component follows WCAG accessibility guidelines:</p><ul><li>Uses the native HTML5 <code>&lt;progress&gt;</code> element for proper semantics</li><li>The <code>label</code> prop provides accessible text that is visually hidden but announced by screen readers</li><li>The <code>&lt;progress&gt;</code> element has <code>aria-label</code> set to the label value</li><li>Indeterminate state is properly indicated to assistive technologies</li><li>The component maintains proper ARIA attributes (<code>value</code>, <code>max</code>) for determinate progress</li></ul><h3 id="best-practices" tabindex="-1">Best Practices <a class="header-anchor" href="#best-practices" aria-label="Permalink to &quot;Best Practices&quot;">​</a></h3><ul><li>Always provide a meaningful <code>label</code> that describes what is progressing</li><li>For determinate progress, update the <code>value</code> prop as the task progresses</li><li>Use indeterminate progress when you cannot calculate completion percentage</li><li>Consider pairing with text to show actual numbers (e.g., &quot;Uploading 5 of 10 files&quot;)</li><li>Ensure adequate color contrast (4.5:1 minimum) for the progress indicator</li></ul><h2 id="browser-support" tabindex="-1">Browser Support <a class="header-anchor" href="#browser-support" aria-label="Permalink to &quot;Browser Support&quot;">​</a></h2><p>The Progress component uses the native HTML5 <code>&lt;progress&gt;</code> element with enhanced styling. The indeterminate animation is supported in all modern browsers. Custom styling is applied using browser-specific pseudo-elements:</p><ul><li>Chrome/Safari/Edge: <code>::-webkit-progress-bar</code>, <code>::-webkit-progress-value</code></li><li>Firefox: <code>::-moz-progress-bar</code></li></ul><h2 id="examples-1" tabindex="-1">Examples <a class="header-anchor" href="#examples-1" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><h3 id="file-upload-progress" tabindex="-1">File Upload Progress <a class="header-anchor" href="#file-upload-progress" aria-label="Permalink to &quot;File Upload Progress&quot;">​</a></h3><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueProgress</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> </span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :value</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;uploadProgress&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> </span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :max</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;100&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> </span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;\`Uploading \${fileName}...\`&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> </span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;{{ uploadProgress }}% complete&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> setup</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { ref } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;vue&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { VueProgress } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;agnosticui-core/Progress/vue/VueProgress&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> uploadProgress</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> ref</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> fileName</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> ref</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&#39;document.pdf&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">// Simulate upload progress</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> interval</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> setInterval</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(() </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  uploadProgress.value </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">+=</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> 10</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  if</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (uploadProgress.value </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">&gt;=</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> 100</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">    clearInterval</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(interval);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  }</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">500</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div><h3 id="loading-state" tabindex="-1">Loading State <a class="header-anchor" href="#loading-state" aria-label="Permalink to &quot;Loading State&quot;">​</a></h3><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueProgress</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> label</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Loading content...&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;Please wait...&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">p</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div>`,38))]))}});export{Y as __pageData,Z as default};
