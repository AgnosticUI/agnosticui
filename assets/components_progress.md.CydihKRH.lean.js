import{A as c}from"./chunks/AlphaWarning.yC7ZufpQ.js";import"./chunks/Progress.9UVPl7VG.js";import{s as u}from"./chunks/plugin-vue_export-helper-CHgC5LLL.lGy7RumW.js";import{d,c as r,o as k,r as y,K as m,p as b,v as C,P as v,s as E,_ as B,C as A,j as i,G as n,a as t,ae as P,w as o,k as h}from"./chunks/framework.NAAYCHZu.js";import{F as D}from"./chunks/FrameworkExample.Z9eaTrCu.js";import{a as f,x}from"./chunks/Button.DkmThuAs.js";import"./chunks/createLucideIcon.B61Wqv9x.js";import"./chunks/state-CovhUvdr.CfYrM0Q-.js";import"./chunks/sdk.m.DhOmSlC9.js";import"./chunks/Icon.BC5ob6Nk.js";const q=d({name:"VueProgress",props:{value:{type:Number,default:void 0},max:{type:Number,default:100},label:{type:String,default:""}},setup(e){const s=b(null),a=()=>{const l=s.value;l&&(l.value=e.value,l.max=e.max,l.label=e.label)};return C(async()=>{await customElements.whenDefined("ag-progress"),await v(),a()}),E(()=>{s.value&&a()}),{agComponent:s}}});function w(e,s,a,l,F,g){return k(),r("ag-progress",m({ref:"agComponent"},e.$attrs),[y(e.$slots,"default")],16)}const S=u(q,[["render",w]]),z=d({name:"ProgressExamples",components:{VueProgress:S}}),V={class:"mbe4"},T={class:"mbe4"},L={class:"mbe4"},I={class:"mbe4"};function R(e,s,a,l,F,g){const p=A("VueProgress");return k(),r("section",null,[i("div",V,[s[0]||(s[0]=i("h2",null,"Indeterminate Progress",-1)),s[1]||(s[1]=i("p",{class:"mbs2 mbe3"},[t("When no "),i("code",null,"value"),t(" is provided, the progress bar is indeterminate.")],-1)),n(p,{label:"Loading..."})]),i("div",T,[s[2]||(s[2]=i("h2",null,"Progress with Value",-1)),s[3]||(s[3]=i("p",{class:"mbs2 mbe3"},[t("Set the "),i("code",null,"value"),t(" prop to a number to show progress.")],-1)),n(p,{value:50,label:"50% complete"})]),i("div",L,[s[4]||(s[4]=i("h2",null,"Progress with Custom Max",-1)),s[5]||(s[5]=i("p",{class:"mbs2 mbe3"},[t("Set the "),i("code",null,"max"),t(" prop to a number to define the maximum value.")],-1)),n(p,{value:150,max:200,label:"150 of 200"})]),i("div",I,[s[6]||(s[6]=i("h2",null,"CSS Shadow Parts Customization",-1)),s[7]||(s[7]=i("p",{class:"mbs2 mbe3"},"Use CSS Shadow Parts to customize the component's appearance.",-1)),n(p,{value:75,label:"Customized progress",class:"custom-progress"})])])}const U=B(z,[["render",R]]);class N extends f{createRenderRoot(){return this}render(){return x`
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
`,ss=JSON.parse('{"title":"Progress","description":"","frontmatter":{},"headers":[],"relativePath":"components/progress.md","filePath":"components/progress.md"}'),W={name:"components/progress.md"},is=Object.assign(W,{setup(e){return(s,a)=>(k(),r("div",null,[a[1]||(a[1]=i("h1",{id:"progress",tabindex:"-1"},[t("Progress "),i("a",{class:"header-anchor",href:"#progress","aria-label":'Permalink to "Progress"'},"​")],-1)),n(c),a[2]||(a[2]=i("p",null,"A progress component is used to display the progress of a task. It can show determinate progress (with a specific value) or indeterminate progress (loading state without a known duration).",-1)),a[3]||(a[3]=i("h2",{id:"examples",tabindex:"-1"},[t("Examples "),i("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),n(D,{component:"progress","vue-code":h(_),"lit-code":h($),"react-code":h(M)},{vue:o(()=>[n(U)]),lit:o(()=>[...a[0]||(a[0]=[i("progress-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),a[4]||(a[4]=P("",38))]))}});export{ss as __pageData,is as default};
