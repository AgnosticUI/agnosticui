import{A as y}from"./chunks/AlphaWarning.yC7ZufpQ.js";import"./chunks/Tag.44d4X1BL.js";import{d,p as u,c as F,o as r,r as g,K as m,j as i,G as a,k as n,w as t,a as l,_ as C,ae as b}from"./chunks/framework.NAAYCHZu.js";import{F as v}from"./chunks/FrameworkExample.Vj5DwYx5.js";import{a as E,x as B}from"./chunks/Button.Bujdzq23.js";import"./chunks/createLucideIcon.B61Wqv9x.js";import"./chunks/Icon.odq14qpJ.js";const D=["variant","shape",".uppercase",".removable"],h=d({__name:"VueTag",props:{variant:{},shape:{},uppercase:{type:Boolean},removable:{type:Boolean}},emits:["tag-remove"],setup(e,{emit:k}){const s=k,o=u(null),c=p=>{s("tag-remove",p.detail)};return(p,$)=>(r(),F("ag-tag",m({ref_key:"agComponent",ref:o,variant:e.variant,shape:e.shape,".uppercase":e.uppercase,".removable":e.removable,onTagRemove:c},p.$attrs),[g(p.$slots,"default"),g(p.$slots,"close")],48,D))}}),A={class:"mbe4"},T={class:"stacked-mobile"},f={class:"mbe4"},q={class:"stacked"},x={class:"mbe4"},w={class:"stacked"},R={class:"mbe4"},S={class:"stacked"},V={class:"mbe4"},P={class:"stacked"},L={class:"mbe4"},N={class:"mbe4"},U=d({__name:"TagExamples",setup(e){return(k,s)=>(r(),F("section",null,[i("div",A,[s[1]||(s[1]=i("h2",null,"Default",-1)),s[2]||(s[2]=i("p",{class:"mbs2 mbe3"},"Basic tag with neutral styling.",-1)),i("div",T,[a(n(h),null,{default:t(()=>[...s[0]||(s[0]=[l(" Default Tag ",-1)])]),_:1})])]),i("div",f,[s[8]||(s[8]=i("h2",null,"Variants",-1)),s[9]||(s[9]=i("p",{class:"mbs2 mbe3"},"Semantic color variants for status indication.",-1)),i("div",q,[a(n(h),{variant:"info",class:"mbe2"},{default:t(()=>[...s[3]||(s[3]=[l("Info Tag",-1)])]),_:1}),a(n(h),{variant:"success",class:"mbe2"},{default:t(()=>[...s[4]||(s[4]=[l("Success Tag",-1)])]),_:1}),a(n(h),{variant:"warning",class:"mbe2"},{default:t(()=>[...s[5]||(s[5]=[l("Warning Tag",-1)])]),_:1}),a(n(h),{variant:"error",class:"mbe2"},{default:t(()=>[...s[6]||(s[6]=[l("Error Tag",-1)])]),_:1}),a(n(h),{variant:"monochrome",class:"mbe2"},{default:t(()=>[...s[7]||(s[7]=[l("Monochrome Tag",-1)])]),_:1})])]),i("div",x,[s[13]||(s[13]=i("h2",null,"Shapes",-1)),s[14]||(s[14]=i("p",{class:"mbs2 mbe3"},"Different border-radius options for visual variety.",-1)),i("div",w,[a(n(h),{shape:"pill",variant:"info",class:"mbe2"},{default:t(()=>[...s[10]||(s[10]=[l("Pill Tag",-1)])]),_:1}),a(n(h),{shape:"round",variant:"success",class:"mbe2"},{default:t(()=>[...s[11]||(s[11]=[l("Round Tag",-1)])]),_:1}),a(n(h),{shape:"circle",variant:"error",class:"mbe2"},{default:t(()=>[...s[12]||(s[12]=[l("!",-1)])]),_:1})])]),i("div",R,[s[17]||(s[17]=i("h2",null,"Uppercase Modifier",-1)),s[18]||(s[18]=i("p",{class:"mbs2 mbe3"},"Transforms text to uppercase with condensed typography.",-1)),i("div",S,[a(n(h),{uppercase:!0,variant:"warning",class:"mbe2"},{default:t(()=>[...s[15]||(s[15]=[l("Uppercase Tag",-1)])]),_:1}),a(n(h),{uppercase:!0,shape:"pill",class:"mbe2"},{default:t(()=>[...s[16]||(s[16]=[l("PILL LABEL",-1)])]),_:1})])]),i("div",V,[s[22]||(s[22]=i("h2",null,"With Close Slot",-1)),s[23]||(s[23]=i("p",{class:"mbs2 mbe3"},"Dismissible tags using the named close slot.",-1)),i("div",P,[a(n(h),{variant:"error",class:"mbe2"},{default:t(()=>[...s[19]||(s[19]=[l(" Deletable ",-1),i("button",{slot:"close","aria-label":"close"},"✕",-1)])]),_:1}),a(n(h),{variant:"success",shape:"pill",class:"mbe2"},{default:t(()=>[...s[20]||(s[20]=[l(" Active ",-1),i("button",{slot:"close","aria-label":"close"},"✕",-1)])]),_:1}),a(n(h),{variant:"warning",uppercase:!0,class:"mbe2"},{default:t(()=>[...s[21]||(s[21]=[l(" Pending ",-1),i("button",{slot:"close","aria-label":"close"},"✕",-1)])]),_:1})])]),i("div",L,[s[25]||(s[25]=i("h2",null,"CSS Shadow Parts Customization",-1)),s[26]||(s[26]=i("p",{class:"mbs2 mbe3"},"Use CSS Shadow Parts to customize the tag's appearance without breaking encapsulation.",-1)),i("div",N,[a(n(h),{class:"custom-outline-tag"},{default:t(()=>[...s[24]||(s[24]=[l("Outline Tag",-1)])]),_:1})])])]))}}),I=C(U,[["__scopeId","data-v-b89d20bd"]]);class M extends E{createRenderRoot(){return this}render(){return B`
      <section>
        <div class="mbe4">
          <h2>Default</h2>
          <p class="mbs2 mbe3">Basic tag with neutral styling.</p>
          <div class="stacked-mobile">
            <ag-tag>
              Default Tag
            </ag-tag>
          </div>
        </div>
        <div class="mbe4">
          <h2>Variants</h2>
          <p class="mbs2 mbe3">Semantic color variants for status indication.</p>
          <div class="stacked">
            <ag-tag
              variant="info"
              class="mbe2"
            >Info Tag</ag-tag>
            <ag-tag
              variant="success"
              class="mbe2"
            >Success Tag</ag-tag>
            <ag-tag
              variant="warning"
              class="mbe2"
            >Warning Tag</ag-tag>
            <ag-tag
              variant="error"
              class="mbe2"
            >Error Tag</ag-tag>
            <ag-tag
              variant="monochrome"
              class="mbe2"
            >Monochrome Tag</ag-tag>
          </div>
        </div>
        <div class="mbe4">
          <h2>Shapes</h2>
          <p class="mbs2 mbe3">Different border-radius options for visual variety.</p>
          <div class="stacked">
            <ag-tag
              shape="pill"
              variant="info"
              class="mbe2"
            >Pill Tag</ag-tag>
            <ag-tag
              shape="round"
              variant="success"
              class="mbe2"
            >Round Tag</ag-tag>
            <ag-tag
              shape="circle"
              variant="error"
              class="mbe2"
            >!</ag-tag>
          </div>
        </div>
        <div class="mbe4">
          <h2>Uppercase Modifier</h2>
          <p class="mbs2 mbe3">Transforms text to uppercase with condensed typography.</p>
          <div class="stacked">
            <ag-tag
              uppercase
              variant="warning"
              class="mbe2"
            >Uppercase Tag</ag-tag>
            <ag-tag
              uppercase
              shape="pill"
              class="mbe2"
            >PILL LABEL</ag-tag>
          </div>
        </div>
        <div class="mbe4">
          <h2>With Close Slot</h2>
          <p class="mbs2 mbe3">Dismissible tags using the named close slot.</p>
          <div class="stacked">
            <ag-tag
              variant="error"
              class="mbe2"
            >
              Deletable
              <button
                slot="close"
                aria-label="close"
              >✕</button>
            </ag-tag>
            <ag-tag
              variant="success"
              shape="pill"
              class="mbe2"
            >
              Active
              <button
                slot="close"
                aria-label="close"
              >✕</button>
            </ag-tag>
            <ag-tag
              variant="warning"
              uppercase
              class="mbe2"
            >
              Pending
              <button
                slot="close"
                aria-label="close"
              >✕</button>
            </ag-tag>
          </div>
        </div>
        <div class="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
          <p class="mbs2 mbe3">Use CSS Shadow Parts to customize the tag's appearance without breaking encapsulation.</p>
          <div class="mbe4">
            <ag-tag class="custom-outline-tag">Outline Tag</ag-tag>
          </div>
        </div>
      </section>
    `}}customElements.define("tag-lit-examples",M);const z=`<template>
  <section>
    <div class="mbe4">
      <h2>Default</h2>
      <p class="mbs2 mbe3">Basic tag with neutral styling.</p>
      <div class="stacked-mobile">
        <VueTag>
          Default Tag
        </VueTag>
      </div>
    </div>
    <div class="mbe4">
      <h2>Variants</h2>
      <p class="mbs2 mbe3">Semantic color variants for status indication.</p>
      <div class="stacked">
        <VueTag
          variant="info"
          class="mbe2"
        >Info Tag</VueTag>
        <VueTag
          variant="success"
          class="mbe2"
        >Success Tag</VueTag>
        <VueTag
          variant="warning"
          class="mbe2"
        >Warning Tag</VueTag>
        <VueTag
          variant="error"
          class="mbe2"
        >Error Tag</VueTag>
        <VueTag
          variant="monochrome"
          class="mbe2"
        >Monochrome Tag</VueTag>
      </div>
    </div>
    <div class="mbe4">
      <h2>Shapes</h2>
      <p class="mbs2 mbe3">Different border-radius options for visual variety.</p>
      <div class="stacked">
        <VueTag
          shape="pill"
          variant="info"
          class="mbe2"
        >Pill Tag</VueTag>
        <VueTag
          shape="round"
          variant="success"
          class="mbe2"
        >Round Tag</VueTag>
        <VueTag
          shape="circle"
          variant="error"
          class="mbe2"
        >!</VueTag>
      </div>
    </div>
    <div class="mbe4">
      <h2>Uppercase Modifier</h2>
      <p class="mbs2 mbe3">Transforms text to uppercase with condensed typography.</p>
      <div class="stacked">
        <VueTag
          :uppercase="true"
          variant="warning"
          class="mbe2"
        >Uppercase Tag</VueTag>
        <VueTag
          :uppercase="true"
          shape="pill"
          class="mbe2"
        >PILL LABEL</VueTag>
      </div>
    </div>
    <div class="mbe4">
      <h2>With Close Slot</h2>
      <p class="mbs2 mbe3">Dismissible tags using the named close slot.</p>
      <div class="stacked">
        <VueTag
          variant="error"
          class="mbe2"
        >
          Deletable
          <button
            slot="close"
            aria-label="close"
          >✕</button>
        </VueTag>
        <VueTag
          variant="success"
          shape="pill"
          class="mbe2"
        >
          Active
          <button
            slot="close"
            aria-label="close"
          >✕</button>
        </VueTag>
        <VueTag
          variant="warning"
          :uppercase="true"
          class="mbe2"
        >
          Pending
          <button
            slot="close"
            aria-label="close"
          >✕</button>
        </VueTag>
      </div>
    </div>
    <div class="mbe4">
      <h2>CSS Shadow Parts Customization</h2>
      <p class="mbs2 mbe3">Use CSS Shadow Parts to customize the tag's appearance without breaking encapsulation.</p>
      <div class="mbe4">
        <VueTag class="custom-outline-tag">Outline Tag</VueTag>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { VueTag } from "agnosticui-core/tag/vue";
<\/script>

<style scoped>
/* Outline tag style */
.custom-outline-tag::part(ag-tag-wrapper) {
  background: transparent;
  color: var(--ag-danger-text);
  border: 2px solid var(--ag-danger-text);
}
</style>
`,W=`import { LitElement, html } from 'lit';
import 'agnosticui-core/tag';

export class TagLitExamples extends LitElement {
  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  render() {
    return html\`
      <section>
        <div class="mbe4">
          <h2>Default</h2>
          <p class="mbs2 mbe3">Basic tag with neutral styling.</p>
          <div class="stacked-mobile">
            <ag-tag>
              Default Tag
            </ag-tag>
          </div>
        </div>
        <div class="mbe4">
          <h2>Variants</h2>
          <p class="mbs2 mbe3">Semantic color variants for status indication.</p>
          <div class="stacked">
            <ag-tag
              variant="info"
              class="mbe2"
            >Info Tag</ag-tag>
            <ag-tag
              variant="success"
              class="mbe2"
            >Success Tag</ag-tag>
            <ag-tag
              variant="warning"
              class="mbe2"
            >Warning Tag</ag-tag>
            <ag-tag
              variant="error"
              class="mbe2"
            >Error Tag</ag-tag>
            <ag-tag
              variant="monochrome"
              class="mbe2"
            >Monochrome Tag</ag-tag>
          </div>
        </div>
        <div class="mbe4">
          <h2>Shapes</h2>
          <p class="mbs2 mbe3">Different border-radius options for visual variety.</p>
          <div class="stacked">
            <ag-tag
              shape="pill"
              variant="info"
              class="mbe2"
            >Pill Tag</ag-tag>
            <ag-tag
              shape="round"
              variant="success"
              class="mbe2"
            >Round Tag</ag-tag>
            <ag-tag
              shape="circle"
              variant="error"
              class="mbe2"
            >!</ag-tag>
          </div>
        </div>
        <div class="mbe4">
          <h2>Uppercase Modifier</h2>
          <p class="mbs2 mbe3">Transforms text to uppercase with condensed typography.</p>
          <div class="stacked">
            <ag-tag
              uppercase
              variant="warning"
              class="mbe2"
            >Uppercase Tag</ag-tag>
            <ag-tag
              uppercase
              shape="pill"
              class="mbe2"
            >PILL LABEL</ag-tag>
          </div>
        </div>
        <div class="mbe4">
          <h2>With Close Slot</h2>
          <p class="mbs2 mbe3">Dismissible tags using the named close slot.</p>
          <div class="stacked">
            <ag-tag
              variant="error"
              class="mbe2"
            >
              Deletable
              <button
                slot="close"
                aria-label="close"
              >✕</button>
            </ag-tag>
            <ag-tag
              variant="success"
              shape="pill"
              class="mbe2"
            >
              Active
              <button
                slot="close"
                aria-label="close"
              >✕</button>
            </ag-tag>
            <ag-tag
              variant="warning"
              uppercase
              class="mbe2"
            >
              Pending
              <button
                slot="close"
                aria-label="close"
              >✕</button>
            </ag-tag>
          </div>
        </div>
        <div class="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
          <p class="mbs2 mbe3">Use CSS Shadow Parts to customize the tag's appearance without breaking encapsulation.</p>
          <div class="mbe4">
            <ag-tag class="custom-outline-tag">Outline Tag</ag-tag>
          </div>
        </div>
      </section>
    \`;
  }
}

// Register the custom element
customElements.define('tag-lit-examples', TagLitExamples);
`,_=`import { ReactTag } from "agnosticui-core/tag/react";

export default function TagReactExamples() {
  return (
    <section>
      <div className="mbe4">
        <h2>Default</h2>
        <p className="mbs2 mbe3">Basic tag with neutral styling.</p>
        <div className="stacked-mobile">
          <ReactTag>
            Default Tag
          </ReactTag>
        </div>
      </div>
      <div className="mbe4">
        <h2>Variants</h2>
        <p className="mbs2 mbe3">Semantic color variants for status indication.</p>
        <div className="stacked">
          <ReactTag
            variant="info"
            className="mbe2"
          >Info Tag</ReactTag>
          <ReactTag
            variant="success"
            className="mbe2"
          >Success Tag</ReactTag>
          <ReactTag
            variant="warning"
            className="mbe2"
          >Warning Tag</ReactTag>
          <ReactTag
            variant="error"
            className="mbe2"
          >Error Tag</ReactTag>
          <ReactTag
            variant="monochrome"
            className="mbe2"
          >Monochrome Tag</ReactTag>
        </div>
      </div>
      <div className="mbe4">
        <h2>Shapes</h2>
        <p className="mbs2 mbe3">Different border-radius options for visual variety.</p>
        <div className="stacked">
          <ReactTag
            shape="pill"
            variant="info"
            className="mbe2"
          >Pill Tag</ReactTag>
          <ReactTag
            shape="round"
            variant="success"
            className="mbe2"
          >Round Tag</ReactTag>
          <ReactTag
            shape="circle"
            variant="error"
            className="mbe2"
          >!</ReactTag>
        </div>
      </div>
      <div className="mbe4">
        <h2>Uppercase Modifier</h2>
        <p className="mbs2 mbe3">Transforms text to uppercase with condensed typography.</p>
        <div className="stacked">
          <ReactTag
            uppercase
            variant="warning"
            className="mbe2"
          >Uppercase Tag</ReactTag>
          <ReactTag
            uppercase
            shape="pill"
            className="mbe2"
          >PILL LABEL</ReactTag>
        </div>
      </div>
      <div className="mbe4">
        <h2>With Close Slot</h2>
        <p className="mbs2 mbe3">Dismissible tags using the named close slot.</p>
        <div className="stacked">
          <ReactTag
            variant="error"
            className="mbe2"
          >
            Deletable
            <button
              slot="close"
              aria-label="close"
            >✕</button>
          </ReactTag>
          <ReactTag
            variant="success"
            shape="pill"
            className="mbe2"
          >
            Active
            <button
              slot="close"
              aria-label="close"
            >✕</button>
          </ReactTag>
          <ReactTag
            variant="warning"
            uppercase
            className="mbe2"
          >
            Pending
            <button
              slot="close"
              aria-label="close"
            >✕</button>
          </ReactTag>
        </div>
      </div>
      <div className="mbe4">
        <h2>CSS Shadow Parts Customization</h2>
        <p className="mbs2 mbe3">Use CSS Shadow Parts to customize the tag's appearance without breaking encapsulation.</p>
        <div className="mbe4">
          <ReactTag className="custom-outline-tag">Outline Tag</ReactTag>
        </div>
      </div>
    </section>
  );
}
`,Y=JSON.parse('{"title":"Tag","description":"","frontmatter":{},"headers":[],"relativePath":"components/tag.md","filePath":"components/tag.md"}'),O={name:"components/tag.md"},Z=Object.assign(O,{setup(e){return(k,s)=>(r(),F("div",null,[s[1]||(s[1]=i("h1",{id:"tag",tabindex:"-1"},[l("Tag "),i("a",{class:"header-anchor",href:"#tag","aria-label":'Permalink to "Tag"'},"​")],-1)),a(y),s[2]||(s[2]=i("p",null,"Tag is used to label or categorize content, providing as a visual indicator for status, types, or metadata.",-1)),s[3]||(s[3]=i("h2",{id:"examples",tabindex:"-1"},[l("Examples "),i("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),a(v,{component:"tag","vue-code":n(z),"lit-code":n(W),"react-code":n(_)},{vue:t(()=>[a(I)]),lit:t(()=>[...s[0]||(s[0]=[i("tag-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),s[4]||(s[4]=b(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The framework examples below <code>import</code> AgnosticUI as an <code>npm</code> package. Alternatively, you can use the <strong>CLI for complete control, AI/LLM visibility, and full code ownership</strong>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> init</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> --framework</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> FRAMEWORK</span><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;"> # react, vue, lit, svelte, etc.</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">npx</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> ag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> add</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> Tag</span></span></code></pre></div><p>The CLI copies source code directly into your project, giving you full visibility and control. After running <code>npx ag add</code>, you&#39;ll receive exact import instructions.</p></div><details class="details custom-block"><summary>Vue</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueTag</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> variant</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;success&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> shape</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;pill&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> :uppercase</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;true&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    Active Task</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> slot</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;close&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> @click</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;handleClose&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;✕&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueTag</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> lang</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;ts&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { defineComponent } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;vue&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { VueTag } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/tag/vue&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> defineComponent</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">({</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  components: { VueTag }</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  methods: {</span></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">    handleClose</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">() {</span></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">      // Handle close logic</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  }</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">,</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">})</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><details class="details custom-block"><summary>React</summary><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { ReactTag } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/tag/react&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> function</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> Example</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">() </span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  return</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactTag</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> variant</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;success&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> shape</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;pill&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> uppercase</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      Active Task</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> slot</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;close&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> onClick</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">() </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Close&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">)</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        ✕</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactTag</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  );</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div></details><details class="details custom-block"><summary>Lit (Web Components)</summary><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> type</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;module&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  import</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &#39;agnosticui-core/tag&#39;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-tag</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> variant</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;success&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> shape</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;pill&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> uppercase</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  Active Task</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> slot</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;close&quot;</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> @click</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">\${()</span><span style="--shiki-light:#6E011A;--shiki-light-font-style:italic;--shiki-dark:#FFB1AF;--shiki-dark-font-style:italic;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt; console.log(&#39;Close&#39;)}&gt;✕&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">button</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-tag</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><h2 id="removable-tags" tabindex="-1">Removable Tags <a class="header-anchor" href="#removable-tags" aria-label="Permalink to &quot;Removable Tags&quot;">​</a></h2><p>Tags can be made removable by adding the <code>removable</code> prop. This displays a remove button (×) and fires the <code>tag-remove</code> event when clicked.</p><details class="details custom-block"><summary>Vue</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> class</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;tag-list&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueTag</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      v-for</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;tag in tags&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :key</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;tag.id&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      :variant</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;tag.variant&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      removable</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      @tag-remove</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;removeTag(tag.id)&quot;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      class</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;tag-item&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      {{ tag.label }}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueTag</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">template</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { VueTag } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/tag/vue&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  components: { VueTag }</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">,</span></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">  data</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">() </span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">    return</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      tags: [</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        { id: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">1</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, label: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Design&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, variant: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        { id: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">2</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, label: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Development&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, variant: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;success&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        { id: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">3</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, label: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Bug&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, variant: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;error&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        { id: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">4</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, label: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Feature&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, variant: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;info&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      ],</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    };</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  }</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  methods: {</span></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">    removeTag</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">id</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">      this</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">.tags </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> this</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">.tags.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">filter</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">((</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">tag</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> tag.id </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">!==</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> id);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  }</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">,</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">script</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">style</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> scoped</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">.tag-list</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  display</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">flex</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  gap</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0.5</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">rem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  flex-wrap</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">wrap</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">style</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div></details><details class="details custom-block"><summary>React</summary><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { useState } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;react&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { ReactTag } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/tag/react&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> default</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> function</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> RemovableTagExample</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">() </span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">{</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> [</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">tags</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">setTags</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">] </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> useState</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">([</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    { id: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">1</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, label: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Design&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, variant: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    { id: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">2</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, label: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Development&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, variant: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;success&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    { id: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">3</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, label: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Bug&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, variant: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;error&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    { id: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">4</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, label: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Feature&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, variant: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;info&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  ]);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  const</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> removeTag</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">id</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">    setTags</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(tags.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">filter</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">((</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">tag</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> tag.id </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">!==</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> id));</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  return</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> className</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;tag-list&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">      {</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">tags.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">map</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">((</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">tag</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactTag</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          key</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">tag.id</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          variant</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">tag.variant</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          removable</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          onTagRemove</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">() </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> removeTag</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(tag.id)</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">          className</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;tag-item&quot;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &gt;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">          {</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">tag.label</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactTag</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      ))</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    &lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">div</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  );</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">.tag-list</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  display</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">flex</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  gap</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0.5</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">rem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  flex-wrap</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">wrap</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div></details><details class="details custom-block"><summary>Lit (Web Components)</summary><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { LitElement, html, css } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;lit&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> { customElement, state } </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">from</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;lit/decorators.js&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">import</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;"> &quot;agnosticui-core/tag&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">interface</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> TagItem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">  id</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> number</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">  label</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> string</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">  variant</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> string</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">@</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">customElement</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;tag-example&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">)</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">export</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> class</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> TagExample</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> extends</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> LitElement</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  @</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">state</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">() </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">private</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> tags</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> TagItem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">[] </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> [</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    { id: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">1</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, label: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Design&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, variant: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;primary&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    { id: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">2</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, label: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Development&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, variant: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;success&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    { id: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">3</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, label: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Bug&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, variant: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;error&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    { id: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">4</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, label: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Feature&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, variant: </span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;info&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> },</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  ];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  static</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> styles</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> css</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">\`</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">    :host {</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">      display: block;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">    }</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">    .tag-list {</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">      display: flex;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">      gap: 0.5rem;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">      flex-wrap: wrap;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">    }</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">    .tag-item {</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">      margin: 0.25rem;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">    }</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">  \`</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">  firstUpdated</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">() {</span></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">    // Set up event listeners for dynamically created tags in the shadow DOM</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    this</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">updateTagListeners</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">();</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">  updated</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">() {</span></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">    // Update listeners after each re-render</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">    this</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">updateTagListeners</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">();</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">  private</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> updateTagListeners</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">() {</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">    const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> tagElements</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> this</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">.shadowRoot?.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">querySelectorAll</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;ag-tag&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    tagElements?.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">forEach</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">((</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">tagEl</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">index</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">      // Remove old listener before adding new one</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">      const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> clonedTagEl</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> tagEl.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">cloneNode</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">true</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      tagEl.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">replaceWith</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(clonedTagEl);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      clonedTagEl.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">addEventListener</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;tag-remove&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">:</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> Event</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">        const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> customEvent</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> e </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">as</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;"> CustomEvent</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">        const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> tag</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> this</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">.tags[index];</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          &quot;Removing tag:&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          tag.label,</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          &quot;variant:&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">,</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">          customEvent.detail.variant</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">        );</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">        this</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">.tags </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> this</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">.tags.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">filter</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">((</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">t</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> t.id </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">!==</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> tag.id);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">      });</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">    });</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">  render</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">() {</span></span>
<span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">    return</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> html</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">\`</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">      &lt;div class=&quot;tag-list&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        \${</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">this</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">.</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">tags</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">map</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">(</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          (</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">tag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;"> html</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">\`</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">            &lt;ag-tag class=&quot;tag-item&quot; .variant=\${</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">tag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">.</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">variant</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">} .removable=\${</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">true</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">}&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">              \${</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">tag</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">.</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">label</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">}</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">            &lt;/ag-tag&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">          \`</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">        )</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">}</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">      &lt;/div&gt;</span></span>
<span class="line"><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">    \`</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  }</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div><p><strong>Note:</strong> When using tag components within a custom element&#39;s shadow DOM, set up event listeners in the component&#39;s lifecycle (e.g., <code>firstUpdated()</code> and <code>updated()</code>) rather than using <code>DOMContentLoaded</code>, as <code>document.querySelector()</code> cannot access elements inside shadow DOM. Use <code>this.shadowRoot.querySelector()</code> instead. For dynamically rendered components, you may need to update event listeners after each render.</p></details><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><table class="ag-table ag-table--striped"><thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>variant</code></td><td><code>&#39;info&#39; | &#39;warning&#39; | &#39;error&#39; | &#39;success&#39; | &#39;primary&#39; | &#39;&#39;</code></td><td><code>&#39;&#39;</code></td><td>The visual variant of the tag (e.g., for color theming).</td></tr><tr><td><code>shape</code></td><td><code>&#39;pill&#39; | &#39;round&#39; | &#39;circle&#39; | &#39;&#39;</code></td><td><code>&#39;&#39;</code></td><td>The border-radius shape of the tag.</td></tr><tr><td><code>isUppercase</code></td><td><code>boolean</code></td><td><code>false</code></td><td>If <code>true</code>, transforms the tag text to uppercase with adjusted font sizing and letter spacing.</td></tr><tr><td><code>removable</code></td><td><code>boolean</code></td><td><code>false</code></td><td>If <code>true</code>, shows a remove button (×) that fires the <code>tag-remove</code> event when clicked.</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><table class="ag-table ag-table--striped"><thead><tr><th>Event</th><th>Framework</th><th>Detail</th><th>Description</th></tr></thead><tbody><tr><td><code>tag-remove</code></td><td>Vue: <code>@tag-remove</code><br>React: <code>onTagRemove</code><br>Lit: <code>@tag-remove</code> or <code>.onTagRemove</code></td><td><code>{ variant: TagVariant }</code></td><td>Fired when the tag&#39;s remove button is clicked. Provides the tag variant in the detail.</td></tr></tbody></table><h3 id="event-patterns" tabindex="-1">Event Patterns <a class="header-anchor" href="#event-patterns" aria-label="Permalink to &quot;Event Patterns&quot;">​</a></h3><p>AgnosticUI Tag supports <strong>three event handling patterns</strong>:</p><ol><li><strong>addEventListener</strong> (Lit/Vanilla JS):</li></ol><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> tag</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> document.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">querySelector</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;ag-tag&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">tag.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">addEventListener</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;tag-remove&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Tag removed, variant:&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, e.detail.variant);</span></span>
<span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">  // Remove the tag from the DOM</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  tag.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">remove</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">();</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">});</span></span></code></pre></div><ol start="2"><li><strong>Callback props</strong> (Lit/Vanilla JS):</li></ol><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">const</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> tag</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> document.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">querySelector</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;ag-tag&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">tag.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">onTagRemove</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;"> =</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> (</span><span style="--shiki-light:#702C00;--shiki-dark:#FFB757;">e</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) </span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">=&gt;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> {</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  console.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">log</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#032563;--shiki-dark:#ADDCFF;">&quot;Tag removed, variant:&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, e.detail.variant);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  tag.</span><span style="--shiki-light:#622CBC;--shiki-dark:#DBB7FF;">remove</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">();</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">};</span></span></code></pre></div><ol start="3"><li><strong>Framework event handlers</strong> (Vue/React):</li></ol><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">&lt;!-- Vue --&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueTag</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> removable</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;"> @</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">tag-remove</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">=</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">handleRemove</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&quot;</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  Removable tag</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">VueTag</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">// React</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactTag</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> removable</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> onTagRemove</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">={</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">handleRemove</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">}</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">  Removable tag</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&lt;/</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ReactTag</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">&gt;</span></span></code></pre></div><p>All three patterns work identically thanks to the <strong>dual-dispatch</strong> system.</p><h2 id="css-shadow-parts" tabindex="-1">CSS Shadow Parts <a class="header-anchor" href="#css-shadow-parts" aria-label="Permalink to &quot;CSS Shadow Parts&quot;">​</a></h2><table class="ag-table ag-table--striped"><thead><tr><th>Part</th><th>Description</th></tr></thead><tbody><tr><td><code>ag-tag-wrapper</code></td><td>The main wrapper div for the tag&#39;s content and close slot.</td></tr></tbody></table><h3 id="customization-example" tabindex="-1">Customization Example <a class="header-anchor" href="#customization-example" aria-label="Permalink to &quot;Customization Example&quot;">​</a></h3><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light-high-contrast github-dark-high-contrast vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#66707B;--shiki-dark:#BDC4CC;">/* Customize the tag wrapper */</span></span>
<span class="line"><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-tag</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">.custom-fancy</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">::part(</span><span style="--shiki-light:#024C1A;--shiki-dark:#72F088;">ag-tag-wrapper</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">) {</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  background</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">linear-gradient</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">135</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">deg</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">#667eea</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> 0</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">%</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">#764ba2</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> 100</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">%</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  color</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">white</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  font-weight</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">600</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  padding</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0.75</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">rem</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> 1.25</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">rem</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  border-radius</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">50</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">;</span></span>
<span class="line"><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">  box-shadow</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">: </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> 4</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> 12</span><span style="--shiki-light:#A0111F;--shiki-dark:#FF9492;">px</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;"> rgba</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">(</span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">102</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">126</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">234</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">, </span><span style="--shiki-light:#023B95;--shiki-dark:#91CBFF;">0.3</span><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">);</span></span>
<span class="line"><span style="--shiki-light:#0E1116;--shiki-dark:#F0F3F6;">}</span></span></code></pre></div><h2 id="accessibility" tabindex="-1">Accessibility <a class="header-anchor" href="#accessibility" aria-label="Permalink to &quot;Accessibility&quot;">​</a></h2><p>The tag component uses a semantic <code>&lt;div&gt;</code> with ARIA attributes for the close slot (e.g., <code>aria-label=&quot;close&quot;</code> on the button). Content is announced as plain text by screen readers. For uppercase mode, the visual transform does not affect screen reader output. Ensure close buttons have descriptive <code>aria-label</code>s for dismissible tags.</p><h2 id="notes" tabindex="-1">Notes <a class="header-anchor" href="#notes" aria-label="Permalink to &quot;Notes&quot;">​</a></h2><ul><li><strong>Variants</strong>: Empty <code>variant</code> uses subtle neutral styling; use &#39;info&#39;, &#39;warning&#39;, &#39;error&#39;, or &#39;success&#39; for semantic colors.</li><li><strong>Shapes</strong>: &#39;circle&#39; is ideal for icons/single characters (e.g., &quot;!&quot;); it sets fixed min-width/height.</li><li><strong>Close Slot</strong>: Use a button with <code>slot=&quot;close&quot;</code> for dismissible tags; it auto-margins for alignment.</li><li>All implementations share the same underlying styles and behavior. Properties can be set via attributes (e.g., <code>&lt;ag-tag uppercase&gt;</code>) or property binding in Lit templates (e.g., <code>.isUppercase=\${true}</code>).</li></ul>`,32))]))}});export{Y as __pageData,Z as default};
