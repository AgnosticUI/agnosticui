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
`,Y=JSON.parse('{"title":"Tag","description":"","frontmatter":{},"headers":[],"relativePath":"components/tag.md","filePath":"components/tag.md"}'),O={name:"components/tag.md"},Z=Object.assign(O,{setup(e){return(k,s)=>(r(),F("div",null,[s[1]||(s[1]=i("h1",{id:"tag",tabindex:"-1"},[l("Tag "),i("a",{class:"header-anchor",href:"#tag","aria-label":'Permalink to "Tag"'},"​")],-1)),a(y),s[2]||(s[2]=i("p",null,"Tag is used to label or categorize content, providing as a visual indicator for status, types, or metadata.",-1)),s[3]||(s[3]=i("h2",{id:"examples",tabindex:"-1"},[l("Examples "),i("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),a(v,{component:"tag","vue-code":n(z),"lit-code":n(W),"react-code":n(_)},{vue:t(()=>[a(I)]),lit:t(()=>[...s[0]||(s[0]=[i("tag-lit-examples",null,null,-1)])]),_:1},8,["vue-code","lit-code","react-code"]),s[4]||(s[4]=b("",32))]))}});export{Y as __pageData,Z as default};
